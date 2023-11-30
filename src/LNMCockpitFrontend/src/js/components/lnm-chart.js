import { html, LitElement } from 'lit';
import { Chart, registerables } from 'chart.js';
import {
    OhlcElement,
    OhlcController,
    CandlestickElement,
    CandlestickController
} from 'chartjs-chart-financial';
import 'chartjs-adapter-luxon';
import zoomPlugin from 'chartjs-plugin-zoom';

export default class LnmChart extends LitElement {
    static properties = {
        data: Object,
        _chart: Object,
        _chartMenuData: Object,
    };

    _renderChartMenu = () => {
        let USDollar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return html`
        <div id="chartMenu" class="context-menu" style="display: none; position: absolute;">
            <div class="card">
                <div class="card-header">
                    ${USDollar.format(this._chartMenuData?.price)}
                </div>
                <div class="list-group list-group-flush">
                    <a href="#" class="list-group-item list-group-item-action disabled">create market order</a>
                    <a href="#" class="list-group-item list-group-item-action disabled">create limit order</a>
                </div>
            </div>
        </div>
        `;
    }

    createRenderRoot = () => this;
    render = () => html`
    ${this._renderChartMenu()}
    <canvas style="cursor:none;"></canvas>
    `;

    firstUpdated = () => {
        Chart.register(
            ...registerables,
            zoomPlugin,
            OhlcElement,
            OhlcController,
            CandlestickElement,
            CandlestickController);

        let crosshair;
        const hoverCrosshair = {
            id: 'hoverCrosshair',
            beforeDatasetsDraw: (chart, args) => {
                if (crosshair) {
                    const { ctx } = chart;
                    ctx.save();
                    crosshair.forEach((line, index) => {
                        ctx.beginPath();
                        ctx.moveTo(line.startX, line.startY);
                        ctx.lineTo(line.endX, line.endY);
                        ctx.stroke();
                    });
                    let USDollar = new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    });

                    const textX = crosshair[0].startX + 10;
                    const textY = crosshair[1].startY - 10;
                    const text = USDollar.format(crosshair[0].price);
                    const date = new Date(crosshair[0].time).toLocaleString();
                    ctx.fillText(`${text} | ${date}`, textX, textY);
                }
            },
            afterEvent: (chart, args) => {
                const asdX = chart.getElementsAtEventForMode(args.event, 'nearest', { intersect: false, axis: 'x' }, false);
                const asdY = chart.getElementsAtEventForMode(args.event, 'nearest', { intersect: false, axis: 'y' }, false);

                if (asdX.length && asdY.length) {
                    const { bottom, end, height } = chart.scales.y;
                }
                const { ctx, chartArea: { left, right, top, bottom } } = chart;
                const xCoor = args.event.x;
                const yCoor = args.event.y;
                const asdP = chart.scales.y.getValueForPixel(yCoor);
                const asdT = chart.scales.x.getValueForPixel(xCoor);
                if (args.inChartArea) {
                    crosshair = [{
                        startX: xCoor,
                        startY: top,
                        endX: xCoor,
                        endY: bottom,
                        price: asdP,
                        time: asdT,
                    }, {
                        startX: left,
                        startY: yCoor,
                        endX: right,
                        endY: yCoor,
                        price: asdP,
                        time: asdT,
                    }];
                    args.changed = true;
                } else if (!args.inChartArea && crosshair) {
                    crosshair = undefined;
                    args.changed = true;
                }
            }
        };

        this._chart = new Chart(this.querySelector('canvas').getContext('2d'), {
            type: 'ohlc',
            options: {
                plugins: {
                    zoom: {
                        zoom: {
                            wheel: {
                                enabled: true,
                            },
                            pinch: {
                                enabled: false
                            },
                            mode: 'xy',
                        },
                        pan: {
                            enabled: true
                        },
                    },
                    title: {
                        display: false,
                        text: 'LNM Chart',
                    },
                    subtitle: {
                        display: false,
                        text: '1 month at 8 hour intervals',
                    },
                    legend: {
                        display: false
                    },
                    hoverCrosshair: {
                        topLeft: 'red',
                        topRight: 'blue',
                        bottomRight: 'green',
                        bottomLeft: 'yellow',
                    },
                    tooltip: {
                        enabled: false,
                    }
                },
                scales: {
                    x: {
                        display: false,
                        grid: {
                            color: 'orange'
                        },
                        ticks: {
                            display: false,
                        }
                    },
                    y: {
                        display: false,
                        grid: {
                            color: (ctx) => {
                                switch (ctx.tick.type) {
                                    case 'h':
                                        return 'green';
                                    case 'l':
                                    default:
                                        return 'red';
                                }
                            }
                        },
                        ticks: {
                            display: true,
                            stepSize: 100
                        }
                    }
                },
            },
            data: {
                datasets: [{
                    id: 'ohlcChartData',
                    label: 'Bitcoin / U.S. Dollar',
                    data: []
                }, {
                    id: 'openTradesChartData',
                    type: 'line',
                    label: 'Open',
                    hidden: true,
                    data: [],
                    pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                    pointBorderColor: 'rgba(0, 0, 0, 0)',
                    segment: {
                        borderColor: ctx => {
                            if (ctx.p0.parsed.hide) return 'rgba(0,0,0,0)';
                            if (ctx.p0.raw.start)
                                return ctx.p0.raw.borderColor;
                            return 'rgba(0,0,0,0)';
                        },

                    }
                }, {
                    id: 'runningTradesChartData',
                    type: 'line',
                    label: 'Running',
                    hidden: true,
                    data: [],
                    pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                    pointBorderColor: 'rgba(0, 0, 0, 0)',
                    segment: {
                        borderColor: ctx => {
                            if (ctx.p0.parsed.hide) return 'rgba(0,0,0,0)';
                            if (ctx.p0.raw.start)
                                return ctx.p0.raw.borderColor;
                            return 'rgba(0,0,0,0)';
                        },
                    }
                }, {
                    id: 'closedTradesChartData',
                    type: 'line',
                    label: 'Closed',
                    hidden: true,
                    data: [],
                    pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                    pointBorderColor: 'rgba(0, 0, 0, 0)',
                    segment: {
                        borderColor: ctx => {
                            if (ctx.p0.parsed.hide) return 'rgba(0,0,0,0)';
                            if (ctx.p0.raw.start)
                                return ctx.p0.raw.borderColor;
                            return 'rgba(0,0,0,0)';
                        }
                    }
                }]
            },
            plugins: [hoverCrosshair]
        });

        this._chart.canvas.oncontextmenu = this._onContextMenu;
    };

    updateChartData = (data, resetZoom) => {
        Object.keys(data).forEach(element => {
            if (!data[element])
                return;
            const dataset = this._chart.data.datasets.filter(x => x.id === element)[0];
            dataset.data = data[element];
        });
        this._chart.update();
        if (resetZoom) this._chart.resetZoom()
    };

    updateChartDatasetVis = data => {
        const dataParts = data.split('-');
        const id = dataParts[0];
        const shouldHide = dataParts[1].toLowerCase() === 'false';

        this._chart.data.datasets
            .filter(dataset => dataset.id === id)
            .forEach(dataset => dataset.hidden = shouldHide);

        this._chart.update();
    };

    _onContextMenu = e => {
        e.preventDefault();
        const chartMenu = this.querySelector('#chartMenu');
        switch (chartMenu.style.display) {
            case 'block':
                chartMenu.style.display = 'none';
                this._chartMenuData = null;
                return;
            default:
                chartMenu.style.display = 'block';
                chartMenu.style.left = `${e.layerX - 5}px`;
                chartMenu.style.top = `${e.layerY - 5}px`;
                break;
        }

        const elements = this._chart.getElementsAtEventForMode(e, 'nearest', { intersect: false } /*, false*/);
        if (elements.length) {
            switch (elements[0].element.constructor.name) {
                case 'OhlcElement':
                    const asd = elements[0].element.$context.parsed;
                    const { o, h, l, c, x, dateTime } = asd;
                    break;
                default:
                    console.log(elements[0])
                    break;
            }
        }

        const price = this._chart.scales.y.getValueForPixel(e.offsetY);
        const time = this._chart.scales.x.getValueForPixel(e.offsetX);
        this._chartMenuData = {
            price,
            time
        };
    };

    _someCodeForToDo = () => {
        const viewCriteria = {
            '24h1m': (dayOfWeek, h, m, s) => [0, 4, 8, 12, 16, 20].includes(h) && m === 0,
            '48h5m': (dayOfWeek, h, m, s) => [0, 6, 12, 18].includes(h) && m === 0,
            '7d1h': (dayOfWeek, h, m, s) => h === 0 && m === 0 && s === 0,
            '2w4h': (dayOfWeek, h, m, s) => ['Montag', 'Mittwoch', 'Freitag'].includes(dayOfWeek) && h === 0 && m === 0 && s === 0,
            '1m8h': (dayOfWeek, h, m, s) => dayOfWeek === 'Montag' && h === 0 && m === 0 && s === 0,
        };

        this._chartScalesXTicks = this._data.ohlcChartData
            .filter(x => {
                const date = new Date(x.x);
                const dayOfWeek = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"][date.getUTCDay()];
                const h = date.getUTCHours();
                const m = date.getUTCMinutes();
                const s = date.getUTCSeconds();

                return viewCriteria[this._chartView](dayOfWeek, h, m, s);
            })
            .map(x => {
                const date = new Date(x.x);
                return {
                    label: date.toLocaleString(),
                    major: true,
                    value: x.x,
                };
            });

        let max = this._data.ohlcChartData
            .reduce((prev, current) => (prev && prev.h > current.h) ? prev : current);

        this._chartScalesYTicks = [{ label: max.h, value: max.h, type: 'h' }];
        for (var i = 1; i < this._chartScalesXTicks.length; ++i) {
            const prev = this._chartScalesXTicks[i - 1];
            const current = this._chartScalesXTicks[i];

            let max = this._data.ohlcChartData
                .filter(x => x.x > prev.value && x.x < current.value)
                .reduce((x, y) => (x && x.h > y.h) ? x : y);
            this._chartScalesYTicks.push({ label: max.h, value: max.h, type: 'h' });

            let min = this._data.ohlcChartData
                .filter(x => x.x > prev.value && x.x < current.value)
                .reduce((x, y) => (x && x.l < y.l) ? x : y);
            this._chartScalesYTicks.push({ label: min.l, value: min.l, type: 'l' });
        }

        let min = this._data.ohlcChartData.reduce((prev, current) => (prev && prev.l < current.l) ? prev : current);
        this._chartScalesYTicks.push({ label: min.l, value: min.l, type: 'l' });
    }
}

customElements.define('lnm-chart', LnmChart);