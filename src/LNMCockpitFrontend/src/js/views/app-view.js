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
        _ohlcChart: Object,
        _barCart: Object,
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

    _renderOpenTradesTableRow = (x, i) => {
        const getEyeIcon = hide => hide ? html`<i class="bi bi-eye-fill"></i>` : html`<i class="bi bi-eye-slash-fill"></i>`;
        const getValue = (hide, value) => hide ? html`*****` : html`${value}`;

        var offset = new Date(Date.now() - new Date(x.creation_ts));
        const hh = Math.floor(offset / (1000 * 60 * 60));
        const mm = Math.floor((offset % (1000 * 60 * 60)) / (1000 * 60));
        const ss = Math.floor((offset % (1000 * 60)) / 1000);

        return html`
        <tr>
            <td class="text-nowrap">${i + 1}</td>
            <td class="text-nowrap">${new Date(x.creation_ts).toLocaleString()}</td>
            <td class="text-nowrap">${hh}:${mm}:${ss}</td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="open" data-trade-id="${x.id}" data-name="quantity" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.quantityHide)}
                </button>
                ${getValue(x.quantityHide, x.quantity)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="open" data-trade-id="${x.id}" data-name="side" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.sideHide)}
                </button>
                ${getValue(x.sideHide, x.side)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="open" data-trade-id="${x.id}" data-name="leverage" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.leverageHide)}
                </button>
                ${getValue(x.leverageHide, x.leverage)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="open" data-trade-id="${x.id}" data-name="margin" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.marginHide)}
                </button>
                ${getValue(x.marginHide, x.margin)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="open" data-trade-id="${x.id}" data-name="price" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.priceHide)}
                </button>
                ${getValue(x.priceHide, x.price)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="open" data-trade-id="${x.id}" data-name="liquidation" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.liquidationHide)}
                </button>
                ${getValue(x.liquidationHide, x.liquidation)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="open" data-trade-id="${x.id}" data-name="stoploss" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.stoplossHide)}
                </button>
                ${getValue(x.stoplossHide, x.stoploss)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="open" data-trade-id="${x.id}" data-name="takeprofit" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.takeprofitHide)}
                </button>
                ${getValue(x.takeprofitHide, x.takeprofit)}
            </td>
        </tr>
        `;
    };

    _renderOpenTradesTable = () => html`
    <div class="table-responsive mt-5">
        <table class="table table-sm table-striped">
            <tr>
                <th class="text-nowrap">#</th>
                <th class="text-nowrap">Creation</th>
                <th class="text-nowrap">Open Duration</th>
                <th class="text-nowrap">Quantity</th>
                <th class="text-nowrap">Side</th>
                <th class="text-nowrap">Leverage</th>
                <th class="text-nowrap">Margin</th>
                <th class="text-nowrap">Entry Price</th>
                <th class="text-nowrap">Liquidation Price</th>
                <th class="text-nowrap">Stoploss</th>
                <th class="text-nowrap">Takeprofit</th>
            </tr>
            ${this._data?.openTradesData.map(this._renderOpenTradesTableRow)}
        </table>
    </div>
    `;

    _renderClosedTradesTableRow = (x, i) => {
        const getEyeIcon = hide => hide ? html`<i class="bi bi-eye-fill"></i>` : html`<i class="bi bi-eye-slash-fill"></i>`;
        const getValue = (hide, value) => hide ? html`*****` : html`${value}`;


        var offset = new Date(new Date(x.closed_ts) - new Date(x.market_filled_ts));
        const hh = Math.floor(offset / (1000 * 60 * 60));
        const mm = Math.floor((offset % (1000 * 60 * 60)) / (1000 * 60));
        const ss = Math.floor((offset % (1000 * 60)) / 1000);

        return html`
        <tr>
            <td class="text-nowrap">${i + 1}</td>
            <td class="text-nowrap">${new Date(x.market_filled_ts).toLocaleString()}</td>
            <td class="text-nowrap">${hh}:${mm}:${ss}</td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${x.id}" data-name="quantity" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.quantityHide)}
                </button>
                ${getValue(x.quantityHide, x.quantity)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${x.id}" data-name="side" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.sideHide)}
                </button>
                ${getValue(x.sideHide, x.side)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${x.id}" data-name="leverage" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.leverageHide)}
                </button>
                ${getValue(x.leverageHide, x.leverage)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${x.id}" data-name="margin" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.marginHide)}
                </button>
                ${getValue(x.marginHide, x.margin)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${x.id}" data-name="price" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.priceHide)}
                </button>
                ${getValue(x.priceHide, x.price)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${x.id}" data-name="liquidation" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.liquidationHide)}
                </button>
                ${getValue(x.liquidationHide, x.liquidation)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${x.id}" data-name="stoploss" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.stoplossHide)}
                </button>
                ${getValue(x.stoplossHide, x.stoploss)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${x.id}" data-name="takeprofit" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.takeprofitHide)}
                </button>
                ${getValue(x.takeprofitHide, x.takeprofit)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${x.id}" data-name="pl" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.plHide)}
                </button>
                ${getValue(x.plHide, x.pl)}
            </td>
        </tr>
        `;
    };

    _renderClosedTradesTable = () => html`
    <div class="table-responsive mt-5">
        <table class="table table-sm table-striped">
            <tr>
                <th class="text-nowrap">#</th>
                <th class="text-nowrap">Market Filled</th>
                <th class="text-nowrap">Trade Duration</th>
                <th class="text-nowrap">Quantity</th>
                <th class="text-nowrap">Side</th>
                <th class="text-nowrap">Leverage</th>
                <th class="text-nowrap">Margin</th>
                <th class="text-nowrap">Entry Price</th>
                <th class="text-nowrap">Liquidation Price</th>
                <th class="text-nowrap">Stoploss</th>
                <th class="text-nowrap">Takeprofit</th>
                <th class="text-nowrap">PL</th>
            </tr>
            ${this._data?.closedTradesData.map(this._renderClosedTradesTableRow)}
        </table>
    </div>
    `;

    _renderRunningTradesTableRow = (x, i) => {
        const getEyeIcon = hide => hide ? html`<i class="bi bi-eye-fill"></i>` : html`<i class="bi bi-eye-slash-fill"></i>`;
        const getValue = (hide, value) => hide ? html`*****` : html`${value}`;

        var offset = new Date(Date.now() - new Date(x.market_filled_ts));
        const hh = Math.floor(offset / (1000 * 60 * 60));
        const mm = Math.floor((offset % (1000 * 60 * 60)) / (1000 * 60));
        const ss = Math.floor((offset % (1000 * 60)) / 1000);

        return html`
        <tr>
            <td class="text-nowrap">${i + 1}</td>
            <td class="text-nowrap">${new Date(x.market_filled_ts).toLocaleString()}</td>
            <td class="text-nowrap">${hh}:${mm}:${ss}</td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="running" data-trade-id="${x.id}" data-name="quantity" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.quantityHide)}
                </button>
                ${getValue(x.quantityHide, x.quantity)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="running" data-trade-id="${x.id}" data-name="side" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.sideHide)}
                </button>
                ${getValue(x.sideHide, x.side)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="running" data-trade-id="${x.id}" data-name="leverage" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.leverageHide)}
                </button>
                ${getValue(x.leverageHide, x.leverage)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="running" data-trade-id="${x.id}" data-name="margin" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.marginHide)}
                </button>
                ${getValue(x.marginHide, x.margin)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="running" data-trade-id="${x.id}" data-name="price" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.priceHide)}
                </button>
                ${getValue(x.priceHide, x.price)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="running" data-trade-id="${x.id}" data-name="liquidation" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.liquidationHide)}
                </button>
                ${getValue(x.liquidationHide, x.liquidation)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="running" data-trade-id="${x.id}" data-name="stoploss" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.stoplossHide)}
                </button>
                ${getValue(x.stoplossHide, x.stoploss)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="running" data-trade-id="${x.id}" data-name="takeprofit" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.takeprofitHide)}
                </button>
                ${getValue(x.takeprofitHide, x.takeprofit)}
            </td>
            <td class="text-nowrap">
                <button @click="${this._onHideClick}" data-table="running" data-trade-id="${x.id}" data-name="pl" class="btn btn-sm btn-link">
                    ${getEyeIcon(x.plHide)}
                </button>
                ${getValue(x.plHide, x.pl)}
            </td>
        </tr>
        `;
    };

    _renderRunningTradesTable = () => html`
    <div class="table-responsive mt-5">
        <table class="table table-sm table-striped">
            <tr>
                <th class="text-nowrap">#</th>
                <th class="text-nowrap">Market Filled</th>
                <th class="text-nowrap">Trade Duration</th>
                <th class="text-nowrap">Quantity</th>
                <th class="text-nowrap">Side</th>
                <th class="text-nowrap">Leverage</th>
                <th class="text-nowrap">Margin</th>
                <th class="text-nowrap">Entry Price</th>
                <th class="text-nowrap">Liquidation Price</th>
                <th class="text-nowrap">Stoploss</th>
                <th class="text-nowrap">Takeprofit</th>
                <th class="text-nowrap">PL</th>
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
            <hr>
            <ul class="nav nav-pills flex-column flex-sm-row justify-content-center mt-5">
                <li class="nav-item">
                    <a class="nav-link chart-view" aria-current="page" href="#" data-view="24h1m" @click="${this._onChartViewClick}">24h in 1min chart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link chart-view" aria-current="page" href="#" data-view="48h5m" @click="${this._onChartViewClick}">48h in 5min chart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link chart-view" aria-current="page" href="#" data-view="7d1h" @click="${this._onChartViewClick}">7d in 1h chart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link chart-view" aria-current="page" href="#" data-view="2w4h" @click="${this._onChartViewClick}">2w in 4h chart</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link chart-view active" aria-current="page" href="#" data-view="1m8h" @click="${this._onChartViewClick}">1M in 8h chart</a>
                </li>
            </ul>
            <div class="row">
                <div class="col-12">
                    <div class="card mt-5">
                        <canvas class="card-img-top ohlc"></canvas>
                    </div>
                </div>
                <div class="col-12 d-none">
                    <div class="card mt-5">
                        <div style="height: ${this._ohlcChart?.height}px">
                            <canvas class="card-img-top bar"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <ul class="nav nav-pills flex-column flex-sm-row justify-content-center mt-5">
                <li class="nav-item">
                    <a class="nav-link trades-table active" aria-current="page" href="#" data-table="open" @click="${this._onTableClick}">Open Trades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link trades-table" aria-current="page" href="#" data-table="running" @click="${this._onTableClick}">Running Trades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link trades-table" aria-current="page" href="#" data-table="closed" @click="${this._onTableClick}">Closed Trades</a>
                </li>
            </ul>
            ${this._renderTradesTable()}
        </div>
        `;
    };

    firstUpdated = async () => {
        [...this.querySelectorAll('a.nav-link.chart-view')].map(x => x.classList.add('disabled'));
        const response = await fetch('/api/chart/data?view=1m8h');
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

        this._initOhlcChart();
        this._initBarChart();
        [...this.querySelectorAll('a.nav-link.chart-view.disabled')].map(x => x.classList.remove('disabled'));
    };

    _initOhlcChart = () => {
        this._ohlcChart = new Chart(this.querySelector('canvas.ohlc').getContext('2d'), {
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
                        display: true,
                        text: 'LNM Chart',
                    },
                    subtitle: {
                        display: true,
                        text: '1 month at 8 hour intervals',
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
                    hidden: true,
                    data: this._data.openTradesChartData,
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
                    data: this._data.runningTradesChartData,
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
                    data: this._data.closedTradesChartData,
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
            }
        });
    };

    _initBarChart = () => {

        //console.log(this._data);

        let result = this._data.ohlcChartData.map(x => x.c).reduce((a, b) => {
            return a + b;
        });
        // console.log(result, this._data.ohlcChartData.length)
        const sma = result / this._data.ohlcChartData.length;
        // console.log(sma);

        const maxNumber = Math.max(...this._data.ohlcChartData.map(x => x.h));
        const minNumber = Math.min(...this._data.ohlcChartData.map(x => x.l));
        // console.log(maxNumber - minNumber)



        const firstClose = this._data.ohlcChartData[0].c;
        const lastClose = this._data.ohlcChartData[this._data.ohlcChartData.length - 1].c;

        const data = {
            datasets: [{
                data: [{
                    x: 1697094840000,
                    y: lastClose,
                }, {
                    x: -17,
                    y: sma
                    //y: maxNumber - minNumber,
                }]
            }]
        };

        const config = {
            type: 'bar',
            data: data,
            options: {
                maintainAspectRatio: false,
                responsive: true,
            },
        };
        this._barCart = new Chart(this.querySelector('canvas.bar').getContext('2d'), config);
    };

    _onLogOutClick = async (e) => {
        e.preventDefault();
        await fetch('/api/auth/logout', { method: 'POST' });
        location.reload();
    };

    _onTableClick = (e) => {
        e.preventDefault();
        [...this.querySelectorAll('a.nav-link.trades-table.active')].map(x => x.classList.remove('active'));
        e.target.classList.add('active')
        const table = e.target.dataset.table;
        this._table = table;
    };

    _onHideClick = (e) => {
        e.preventDefault();
        let tradeId = e.target.dataset.tradeId;
        let table = e.target.dataset.table;
        let name = e.target.dataset.name;
        if (!tradeId) {
            tradeId = e.target.parentNode.dataset.tradeId;
            table = e.target.parentNode.dataset.table;
            name = e.target.parentNode.dataset.name;
        }

        switch (table) {
            case 'open':
                this._hideOpenTradeData(tradeId, name);
                break;
            case 'running':
                this._hideRunningTradeData(tradeId, name);
                break;
            case 'closed':
                this._hideClosedTradeData(tradeId, name);
                break;
            default:
                break;
        }
        this.requestUpdate();
        this._ohlcChart.update();
    };

    _hideOpenTradeData = (tradeId, name) => {
        switch (name) {
            case 'quantity':
                const quantityHide = this._data.openTradesData.find(x => x.id === tradeId).quantityHide;
                this._data.openTradesData.find(x => x.id === tradeId).quantityHide = !quantityHide;
                break;
            case 'side':
                const sideHide = this._data.openTradesData.find(x => x.id === tradeId).sideHide;
                this._data.openTradesData.find(x => x.id === tradeId).sideHide = !sideHide;
                break;
            case 'price':
                const priceHide = this._data.openTradesData.find(x => x.id === tradeId).priceHide;
                this._data.openTradesData.find(x => x.id === tradeId).priceHide = !priceHide;
                this._ohlcChart.config.data.datasets
                    .find(x => x.label === 'Open').data
                    .find(x => x.id === tradeId && x.type === 'price').hide = !priceHide;
                break;
            case 'liquidation':
                const liquidationHide = this._data.openTradesData.find(x => x.id === tradeId).liquidationHide;
                this._data.openTradesData.find(x => x.id === tradeId).liquidationHide = !liquidationHide;
                this._ohlcChart.config.data.datasets
                    .find(x => x.label === 'Open').data
                    .find(x => x.id === tradeId && x.type === 'liquidation').hide = !liquidationHide;
                break;
            case 'leverage':
                const leverageHide = this._data.openTradesData.find(x => x.id === tradeId).leverageHide;
                this._data.openTradesData.find(x => x.id === tradeId).leverageHide = !leverageHide;
                this._ohlcChart.config.data.datasets
                    .find(x => x.label === 'Open').data
                    .find(x => x.id === tradeId && x.type === 'liquidation').hide = !leverageHide;
                break;
            case 'margin':
                const marginHide = this._data.openTradesData.find(x => x.id === tradeId).marginHide;
                this._data.openTradesData.find(x => x.id === tradeId).marginHide = !marginHide;
                break;
            case 'stoploss':
                const stoplossHide = this._data.openTradesData.find(x => x.id === tradeId).stoplossHide;
                this._data.openTradesData.find(x => x.id === tradeId).stoplossHide = !stoplossHide;
                try {
                    this._ohlcChart.config.data.datasets
                        .find(x => x.label === 'Open').data
                        .find(x => x.id === tradeId && x.type === 'stoploss').hide = !stoplossHide;
                } catch { }
                break;
            case 'takeprofit':
                const takeprofitHide = this._data.openTradesData.find(x => x.id === tradeId).takeprofitHide;
                this._data.openTradesData.find(x => x.id === tradeId).takeprofitHide = !takeprofitHide;
                try {
                    this._ohlcChart.config.data.datasets
                        .find(x => x.label === 'Open').data
                        .find(x => x.id === tradeId && x.type === 'takeprofit').hide = !takeprofitHide;
                } catch { }
                break;
            default:
                break;
        }
    };

    _hideRunningTradeData = (tradeId, name) => {
        switch (name) {
            case 'quantity':
                const quantityHide = this._data.runningTradesData.find(x => x.id === tradeId).quantityHide;
                this._data.runningTradesData.find(x => x.id === tradeId).quantityHide = !quantityHide;
                break;
            case 'side':
                const sideHide = this._data.runningTradesData.find(x => x.id === tradeId).sideHide;
                this._data.runningTradesData.find(x => x.id === tradeId).sideHide = !sideHide;
                break;
            case 'price':
                const priceHide = this._data.runningTradesData.find(x => x.id === tradeId).priceHide;
                this._data.runningTradesData.find(x => x.id === tradeId).priceHide = !priceHide;
                this._ohlcChart.config.data.datasets
                    .find(x => x.label === 'Running').data
                    .find(x => x.id === tradeId && x.type === 'price').hide = !priceHide;
                break;
            case 'liquidation':
                const liquidationHide = this._data.runningTradesData.find(x => x.id === tradeId).liquidationHide;
                this._data.runningTradesData.find(x => x.id === tradeId).liquidationHide = !liquidationHide;
                this._ohlcChart.config.data.datasets
                    .find(x => x.label === 'Running').data
                    .find(x => x.id === tradeId && x.type === 'liquidation').hide = !liquidationHide;
                break;
            case 'leverage':
                const leverageHide = this._data.runningTradesData.find(x => x.id === tradeId).leverageHide;
                this._data.runningTradesData.find(x => x.id === tradeId).leverageHide = !leverageHide;
                break;
            case 'margin':
                const marginHide = this._data.runningTradesData.find(x => x.id === tradeId).marginHide;
                this._data.runningTradesData.find(x => x.id === tradeId).marginHide = !marginHide;
                break;
            case 'stoploss':
                const stoplossHide = this._data.runningTradesData.find(x => x.id === tradeId).stoplossHide;
                this._data.runningTradesData.find(x => x.id === tradeId).stoplossHide = !stoplossHide;
                try {
                    this._ohlcChart.config.data.datasets
                        .find(x => x.label === 'Running').data
                        .find(x => x.id === tradeId && x.type === 'stoploss').hide = !stoplossHide;
                } catch { }
                break;
            case 'takeprofit':
                const takeprofitHide = this._data.runningTradesData.find(x => x.id === tradeId).takeprofitHide;
                this._data.runningTradesData.find(x => x.id === tradeId).takeprofitHide = !takeprofitHide;
                try {
                    this._ohlcChart.config.data.datasets
                        .find(x => x.label === 'Running').data
                        .find(x => x.id === tradeId && x.type === 'takeprofit').hide = !takeprofitHide;
                } catch { }
                break;
            case 'pl':
                const plHide = this._data.runningTradesData.find(x => x.id === tradeId).plHide;
                this._data.runningTradesData.find(x => x.id === tradeId).plHide = !plHide;
                break;
            default:
                break;
        }
    };

    _hideClosedTradeData = (tradeId, name) => {
        switch (name) {
            case 'quantity':
                const quantityHide = this._data.closedTradesData.find(x => x.id === tradeId).quantityHide;
                this._data.closedTradesData.find(x => x.id === tradeId).quantityHide = !quantityHide;
                break;
            case 'side':
                const sideHide = this._data.closedTradesData.find(x => x.id === tradeId).sideHide;
                this._data.closedTradesData.find(x => x.id === tradeId).sideHide = !sideHide;
                break;
            case 'price':
                const priceHide = this._data.closedTradesData.find(x => x.id === tradeId).priceHide;
                this._data.closedTradesData.find(x => x.id === tradeId).priceHide = !priceHide;
                this._ohlcChart.config.data.datasets
                    .find(x => x.label === 'Closed').data
                    .find(x => x.id === tradeId && x.type === 'price').hide = !priceHide;
                break;
            case 'liquidation':
                const liquidationHide = this._data.closedTradesData.find(x => x.id === tradeId).liquidationHide;
                this._data.closedTradesData.find(x => x.id === tradeId).liquidationHide = !liquidationHide;
                break;
            case 'leverage':
                const leverageHide = this._data.closedTradesData.find(x => x.id === tradeId).leverageHide;
                this._data.closedTradesData.find(x => x.id === tradeId).leverageHide = !leverageHide;
                break;
            case 'margin':
                const marginHide = this._data.closedTradesData.find(x => x.id === tradeId).marginHide;
                this._data.closedTradesData.find(x => x.id === tradeId).marginHide = !marginHide;
                break;
            case 'stoploss':
                const stoplossHide = this._data.closedTradesData.find(x => x.id === tradeId).stoplossHide;
                this._data.closedTradesData.find(x => x.id === tradeId).stoplossHide = !stoplossHide;
                break;
            case 'takeprofit':
                const takeprofitHide = this._data.closedTradesData.find(x => x.id === tradeId).takeprofitHide;
                this._data.closedTradesData.find(x => x.id === tradeId).takeprofitHide = !takeprofitHide;
                break;
            case 'pl':
                const plHide = this._data.closedTradesData.find(x => x.id === tradeId).plHide;
                this._data.closedTradesData.find(x => x.id === tradeId).plHide = !plHide;
                break;
            default:
                break;
        }
    };

    _onChartViewClick = async (e) => {
        e.preventDefault();
        [...this.querySelectorAll('a.nav-link.chart-view')].map(x => x.classList.add('disabled'));
        [...this.querySelectorAll('a.nav-link.chart-view.active')].map(x => x.classList.remove('active'));
        e.target.classList.add('active');

        const response = await fetch(`/api/chart/data?view=${e.target.dataset.view}`);
        if (!response.ok) {
            location.reload();
            return;
        }

        this._data = await response.json();
        this._ohlcChart.config.data.datasets[0].data = this._data.ohlcChartData;
        this._ohlcChart.config.data.datasets[1].data = this._data.openTradesChartData;
        this._ohlcChart.config.data.datasets[2].data = this._data.runningTradesChartData;
        this._ohlcChart.config.data.datasets[3].data = this._data.closedTradesChartData;

        switch (e.target.dataset.view) {
            case '24h1m':
                this._ohlcChart.config.options.plugins.subtitle.text = '1 day at 1 minute intervals';
                break;
            case '48h5m':
                this._ohlcChart.config.options.plugins.subtitle.text = '2 days at 5 minute intervals';
                break;
            case '7d1h':
                this._ohlcChart.config.options.plugins.subtitle.text = '7 days at 1 hour intervals';
                break;
            case '2w4h':
                this._ohlcChart.config.options.plugins.subtitle.text = '2 weeks at 4 hour intervals';
                break;
            case '1m8h':
            default:
                this._ohlcChart.config.options.plugins.subtitle.text = '1 month at 8 hour intervals';
                break;
        }

        this._ohlcChart.update();
        this._ohlcChart.resetZoom();
        [...this.querySelectorAll('a.nav-link.chart-view.disabled')].map(x => x.classList.remove('disabled'));
    };
}

customElements.define('app-view', AppView);
