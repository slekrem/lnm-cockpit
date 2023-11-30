import { LitElement, html } from "lit";

import './lnmc-copilot';
import './trades-open-table';
import './trades-closed-table';
import './trades-running-table';

export default class TradesTables extends LitElement {
    static properties = {
        data: Object,
        _table: String
    };

    _renderLnmcCockpit = () => {
        const openTradesData = this.data.tradesData.openTradesData;
        const runningTradesData = this.data.tradesData.runningTradesData;

        const closedTradesData = this.data.tradesData.closedTradesData;

        let sumClosedLongTrades = 0;
        let sumClosedLongInProfitTrades = 0;
        let sumClosedLongInLossTrades = 0;
        let sumClosedShortTrades = 0;
        let sumQ = 0;
        let sumM = 0;
        let sumPl = 0;
        closedTradesData.forEach(x => {
            sumClosedLongTrades = x.side === 'b' ? ++sumClosedLongTrades : sumClosedLongTrades;
            sumClosedLongInProfitTrades = x.side === 'b' && x.pl > 0 ? ++sumClosedLongInProfitTrades : sumClosedLongInProfitTrades;
            sumClosedLongInLossTrades = x.side === 'b' && x.pl <= 0 ? ++sumClosedLongInLossTrades : sumClosedLongInLossTrades;

            sumClosedShortTrades = x.side === 's' ? ++sumClosedShortTrades : sumClosedShortTrades;
            sumQ += x.quantity;
            sumM += x.margin;
            sumPl += x.pl - (x.opening_fee + x.sum_carry_fees + x.closing_fee);
        });

        //console.log(this.data.tradesData.closedTradesData);
        return html`
        <div class="row mt-3">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">asd</div>
                    <div class="card-body">
                        <div>
                            openTradesData: ${openTradesData.length}
                        </div>
                        <div>
                            runningTradesData: ${runningTradesData.length}
                        </div>
                        <hr>
                        <div>
                            closedTradesData: ${closedTradesData.length} <br>
                            <br>
                            sumClosedLongTrades: ${sumClosedLongTrades} <br>
                            sumClosedLongInProfitTrades: ${sumClosedLongInProfitTrades} <br>
                            sumClosedLongInLossTrades: ${sumClosedLongInLossTrades} <br>
                            <br>
                            sumClosedShortTrades: ${sumClosedShortTrades} <br>
                            <br>
                            quantity: ${sumQ} <br>
                            margin: ${sumM} <br>
                            PL: ${sumPl} <br>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">asd</div>
                    <div class="card-body">
                        <lnmc-copilot .data="${this.data}"></lnmc-copilot>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">asd</div>
                    <div class="card-body">asd</div>
                </div>
            </div>
        </div>
        `;
    };

    _renderTradesTable = () => {
        switch (this._table) {
            case "copilot":
                return this._renderLnmcCockpit();
            case "running":
                return html`<trades-running-table .data="${this.data}"></trades-running-table>`;
            case "closed":
                return html`<trades-closed-table .data="${this.data}"></trades-closed-table>`;
            case "open":
            default:
                return html`<trades-open-table .data="${this.data}"></trades-open-table>`
        }
    };

    createRenderRoot = () => this;
    render = () => html`
    <ul class="nav nav-pills flex-column flex-sm-row justify-content-center">
        <li class="nav-item">
            <a class="nav-link trades-table disabled" aria-current="page" href="#" data-table="copilot" @click="${this._onTableClick}">Copilot</a>
        </li>
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
    `;

    requestUpdate = () => {
        super.requestUpdate();
        let elementName = '';
        switch (this._table) {
            case "running":
                elementName = 'trades-running-table';
                break;
            case "closed":
                elementName = 'trades-closed-table';
                break;
            case "copilot":
                this.querySelector('lnmc-copilot').test();;
                break;
            case "open":
            default:
                elementName = 'trades-open-table';
                break;
        }

        const element = this.querySelector(elementName);
        if (element)
            element.requestUpdate();
    };

    _onTableClick = (e) => {
        e.preventDefault();
        [...this.querySelectorAll('a.nav-link.trades-table.active')].map(x => x.classList.remove('active'));
        e.target.classList.add('active')
        this._table = e.target.dataset.table;
    };

    /*
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
    */
};

customElements.define('trades-tables', TradesTables);