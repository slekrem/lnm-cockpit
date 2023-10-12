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
        _data: Object,
        _table: String
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

    _renderOpenTradesTableRow = (x) => {
        return html`
        <tr>
            <td>${new Date(x.creation_ts).toLocaleString()}</td>
            <td>${x.type}</td>
            <td>${x.price}</td>
            <td>${x.liquidation}</td>
            <td>${x.leverage}</td>
            <td>${x.margin}</td>
            <td>${x.stoploss}</td>
            <td>${x.takeprofit}</td>
        </tr>
        `;
    };

    _renderOpenTradesTable = () => html`
    <div class="table-responsive mt-5">
        <table class="table table-sm table-striped">
            <tr>
                <th>Creation</th>
                <th>Side</th>
                <th>Entry Price</th>
                <th>Liquidation Price</th>
                <th>Leverage</th>
                <th>Margin</th>
                <th>Stoploss</th>
                <th>Takeprofit</th>
            </tr>
            ${this._data?.openTradesData.map(this._renderOpenTradesTableRow)}
        </table>
    </div>
    `;

    _renderClosedTradesTableRow = (x) => {
        return html`
        <tr>
            <td>${new Date(x.creation_ts).toLocaleString()}</td>
            <td>${x.type}</td>
            <td>${x.price}</td>
            <td>${x.liquidation}</td>
            <td>${x.leverage}</td>
            <td>${x.margin}</td>
            <td>${x.stoploss}</td>
            <td>${x.takeprofit}</td>
        </tr>
        `;
    };

    _renderClosedTradesTable = () => html`
    <div class="table-responsive mt-5">
        <table class="table table-sm table-striped">
            <tr>
                <th>Creation</th>
                <th>Side</th>
                <th>Entry Price</th>
                <th>Liquidation Price</th>
                <th>Leverage</th>
                <th>Margin</th>
                <th>Stoploss</th>
                <th>Takeprofit</th>
            </tr>
            ${this._data?.closedTradesData.map(this._renderClosedTradesTableRow)}
        </table>
    </div>
    `;

    _renderRunningTradesTableRow = (x) => {
        return html`
        <tr>
            <td>${new Date(x.creation_ts).toLocaleString()}</td>
            <td>${x.type}</td>
            <td>${x.price}</td>
            <td>
                <button @click="${this._onHideTradeClick}" data-asd="${x}" class="btn btn-sm btn-link">
                    <i class="bi bi-eye-fill"></i>
                </button>
                ${x.liquidation}
            </td>
            <td>${x.leverage}</td>
            <td>${x.margin}</td>
            <td>${x.stoploss}</td>
            <td>${x.takeprofit}</td>
        </tr>
        `;
    };

    _renderRunningTradesTable = () => html`
    <div class="table-responsive mt-5">
        <table class="table table-sm table-striped">
            <tr>
                <th>Creation</th>
                <th>Side</th>
                <th>Entry Price</th>
                <th>Liquidation Price</th>
                <th>Leverage</th>
                <th>Margin</th>
                <th>Stoploss</th>
                <th>Takeprofit</th>
            </tr>
            ${this._data?.runningTradesData.map(this._renderRunningTradesTableRow)}
        </table>
    </div>
    `;

    _renderTradesTable = () => {
        switch (this._table) {
            case "running":
                return this._renderRunningTradesTable();
            case "closed":
                return this._renderClosedTradesTable();
            case "open":
            default:
                return this._renderOpenTradesTable();
        }
    };

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
            <div class="card-body mb-5">
                <ul class="nav justify-content-center mt-5">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#" data-table="open" @click="${this._onTableClick}">Open Trades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#" data-table="running" @click="${this._onTableClick}">Running Trades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#" data-table="closed" @click="${this._onTableClick}">Closed Trades</a>
                    </li>
                </ul>
                ${this._renderTradesTable()}
            </div>
        </div>
        `;
    };

    firstUpdated = async () => {
        const response = await fetch('/api/chart/data');
        if (!response.ok) {
            location.reload();
            return;
        }
        this._data = await response.json();

        Chart.register(
            ...registerables,
            zoomPlugin,
            OhlcElement,
            OhlcController,
            CandlestickElement,
            CandlestickController);

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
                    }
                }
            },
            data: {
                datasets: [{
                    label: 'Bitcoin / U.S. Dollar',
                    data: this._data.ohlcChartData
                }, {
                    type: 'line',
                    label: 'Open',
                    data: this._data.openTradesChartData,
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
                    data: this._data.runningTradesChartData,
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
                    data: this._data.closedTradesChartData,
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

    _onTableClick = (e) => {
        e.preventDefault();
        const table = e.target.dataset.table;
        this._table = table;
    };

    _onHideTradeClick = (e) => {
        e.preventDefault();
        console.log(e);
    };
}

customElements.define('app-view', AppView);
