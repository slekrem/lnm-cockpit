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

export default class AppView extends LitElement {
    static properties = { 
        _chart: Object,
    };

    createRenderRoot = () => this;
    render = () => {
        return html`
        <div class="container">
            <div class="text-center">
                <h1 class="display-1">My LNM Cockpit</h1>                
                <div class="card">
                    <canvas class="card-img-top"></canvas>
                </div>
            </div>
        </div>
        `;
    }

    firstUpdated = async () => {
        const response = await fetch('/api/chart/data');
        if(!response.ok){
            location.reload();
            return;
        }
        const responseData = await response.json();

        const context = this.querySelector('canvas').getContext('2d');
        Chart.register(
            ...registerables,
            zoomPlugin,
            OhlcElement,
            OhlcController,
            CandlestickElement,
            CandlestickController);

        this._chart = new Chart(context, { 
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
                    }
                }
            }, 
            data: {
                datasets: [{
                    label: 'Bitcoin / U.S. Dollar',
                    data: responseData.ohlcChartData
                }, {
                    type: 'line',
                    label: 'Open',
                    data: responseData.openTradesChartData,
                    segment: {
                        borderColor: ctx => {
                            if (ctx.p0.raw.start)
                                return ctx.p0.raw.borderColor;
                            return 'rgba(0,0,0,0)';
                        },
    
                    }
                }, {
                    type: 'line',
                    label: 'Running',
                    data: [],
                    segment: {
                        borderColor: ctx => {
                            if (ctx.p0.raw.isStart)
                                return ctx.p0.raw.borderColor;
                            return 'rgba(0,0,0,0)';
                        }
                    }
                }, {
                    type: 'line',
                    label: 'Closed',
                    data: responseData.closedTradesChartData,
                    segment: {
                        borderColor: ctx => {
                            if (ctx.p0.raw.start)
                                return ctx.p0.raw.borderColor;
                            return 'rgba(0,0,0,0)';
                        }
                    }
                }]
            }
        });
    };
}

customElements.define('app-view', AppView);
