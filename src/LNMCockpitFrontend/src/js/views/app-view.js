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

    _renderNavbar = () => html`
    <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">LNM Cockpit</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">LNM Cockpit Menu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="d-flex align-items-end justify-content-end h-100">
                        <button class="btn btn-danger w-100" @click="${this._onLogOutClick}">Log out</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    `;

    createRenderRoot = () => this;
    render = () => {
        return html`
        ${this._renderNavbar()}
        <div class="container mt-5">
            <div class="text-center">
                <h1 class="display-1">My LNM Cockpit</h1>                
            </div>
            <div class="card mt-5">
                <canvas class="card-img-top"></canvas>
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
                    data: responseData.runningTradesChartData,
                    segment: {
                        borderColor: ctx => {
                            if (ctx.p0.raw.start)
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

    _onLogOutClick = async (e) => {
        e.preventDefault();
        await fetch('/api/auth/logout', { method: 'POST' });
        location.reload();
    };
}

customElements.define('app-view', AppView);
