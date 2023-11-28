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
        _chart: Object
    };

    createRenderRoot = () => this;
    render = () => html`<canvas style="cursor:none;"></canvas>`;

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
            events: ['mousemove'],
            beforeDatasetsDraw: (chart, args, plugins) => {
                if (crosshair) {
                    const { ctx } = chart;
                    ctx.save();
                    crosshair.forEach((line, index) => {
                        ctx.beginPath();
                        ctx.moveTo(line.startX, line.startY);
                        ctx.lineTo(line.endX, line.endY);
                        ctx.stroke();
                    });
                }
            },
            afterEvent: (chart, args) => {
                const { ctx, chartArea: { left, right, top, bottom } } = chart;
                const xCoor = args.event.x;
                const yCoor = args.event.y;
                if (args.inChartArea) {
                    crosshair = [{
                        startX: xCoor,
                        startY: top,
                        endX: xCoor,
                        endY: bottom
                    }, {
                        startX: left,
                        startY: yCoor,
                        endX: right,
                        endY: yCoor
                    }];
                    args.changed = true;
                } else if (!args.inChartArea && crosshair) {
                    crosshair = undefined;
                    args.changed = true;
                }

                console.log(xCoor, yCoor);
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
                            display: false,
                        }
                    }
                }
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