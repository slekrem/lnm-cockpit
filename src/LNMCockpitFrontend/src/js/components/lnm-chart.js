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
        _chart: Object
    };

    createRenderRoot = () => this;
    render = () => html`<canvas></canvas>`;

    firstUpdated = () => {
        Chart.register(
            ...registerables,
            zoomPlugin,
            OhlcElement,
            OhlcController,
            CandlestickElement,
            CandlestickController);

        const scalesPlugin = {
            id: 'scalesPlugin',
            beforeDraw: (chart, args, options) => {
                const { ctx, chartArea: { left, top, right, bottom }, scales: { x, y } } = chart;
                //chart.scales.x.ticks = this._ohlcChartScalesXTicks;
                //chart.scales.y.ticks = this._ohlcChartScalesYTicks;
            }
        };

        this._ohlcChart = new Chart(this.querySelector('canvas').getContext('2d'), {
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
                    scalesPlugin: {
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
                    label: 'Bitcoin / U.S. Dollar',
                    data: [] //this._data.ohlcChartData
                }, {
                    type: 'line',
                    label: 'Open',
                    hidden: true,
                    data: [], //this._data.openTradesChartData,
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
                    type: 'line',
                    label: 'Running',
                    hidden: true,
                    data: [],//this._data.runningTradesChartData,
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
                    type: 'line',
                    label: 'Closed',
                    hidden: true,
                    data: [], //this._data.closedTradesChartData,
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
            plugins: [scalesPlugin]
        });
    };
}

customElements.define('lnm-chart', LnmChart);