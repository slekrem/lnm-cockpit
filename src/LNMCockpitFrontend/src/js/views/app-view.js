import { html, LitElement } from 'lit';

import '../components/dark-mode-btn';
import '../components/chart-time-btn';
import '../components/lnm-websocket';
import '../components/lnm-chart';
import '../components/trades-tables';
import '../components/chart-trades-btn-group';

export default class AppView extends LitElement {
    static properties = {
        isAuthenticated: Boolean,

        _data: Object,
        _intervalId: Number,
        _ohlcChartView: String,
    };

    _renderTradesTable = () => {
        if (this.isAuthenticated)
            return html`
            <hr>
            <div class="card-body">
                <trades-tables class="mb-5"></trades-tables>
            </div>`;
        return html``;
    };

    createRenderRoot = () => this;
    render = () => {
        let text = '';
        switch (this._ohlcChartView) {
            case '24h1m':
                text = '1 day at 1 minute intervals';
                break;
            case '48h5m':
                text = '2 days at 5 minute intervals';
                break;
            case '7d1h':
                text = '7 days at 1 hour intervals';
                break;
            case '2w4h':
                text = '2 weeks at 4 hour intervals';
                break;
            case '1m8h':
                text = '1 month at 8 hour intervals';
                break;
            default:
                break;
        }
        return html`
        <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                    <div class="card mt-5">
                        <div class="card-header">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex align-items-center">
                                    <chart-trades-btn-group @trade-vis-click="${this._onTradeVisClick}"></chart-trades-btn-group>
                                </div>
                                <div class="flex-column text-center">
                                    <p class="lead m-0">LN Markets price chart</p>
                                    <p class="m-0"><small>${text}</small></p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <chart-time-btn @time-click="${this._onTimeClick}"></chart-time-btn>
                                </div>
                            </div>
                        </div>
                        <lnm-websocket @price="${this._onPrice}"></lnm-websocket>
                        <lnm-chart class="card-img-top"></lnm-chart>
                        ${this._renderTradesTable()}
                    </div>
                </div>
            </div>
        </div>
        `;
    };

    firstUpdated = async () => {
        this.querySelector('chart-time-btn')?.setAttribute('disabled', 'true');
        this._ohlcChartView = '1m8h';
        await this._updateData();
        this.querySelector('chart-time-btn').removeAttribute('disabled');
        this._intervalId = setInterval(this._intervalDataFetch, 2880000);
    };

    _onPrice = e => {
        /*
        if (!this._ohlcChart || this._ohlcChart.data.datasets[0].data.length <= 0)
            return;
        const lastItem = this._ohlcChart.data.datasets[0].data[this._ohlcChart.data.datasets[0].data.length - 1];
        if (e.detail > lastItem.h)
            lastItem.h = e.detail;
        if (e.detail < lastItem.l)
            lastItem.l = e.detail;
        lastItem.c = e.detail;
        this._ohlcChart.data.datasets[0].data[this._ohlcChart.data.datasets[0].data.length - 1] = lastItem;
        this._ohlcChart.data.datasets
            .filter(x => x.label === 'Running')
            .map(x => x.data.filter(y => y.type == 'price' && !y.start))
            .map(x => x.forEach(y => y.y = e.detail))
        this._ohlcChart.update();
        */
    };

    _onTimeClick = async (e) => {
        e.preventDefault();
        e.target.setAttribute('disabled', 'true');
        this._ohlcChartView = e.detail;
        await this._updateData();
        clearInterval(this._intervalId);
        switch (this._ohlcChartView) {
            case '24h1m':
                this._intervalId = setInterval(this._intervalDataFetch, 60000);
                break;
            case '48h5m':
                this._intervalId = setInterval(this._intervalDataFetch, 300000);
                break;
            case '7d1h':
                this._intervalId = setInterval(this._intervalDataFetch, 3600000);
                break;
            case '2w4h':
                this._intervalId = setInterval(this._intervalDataFetch, 1440000);
                break;
            case '1m8h':
            default:
                this._intervalId = setInterval(this._intervalDataFetch, 2880000);
                break;
        }
        e.target.removeAttribute('disabled');
    };

    _intervalDataFetch = async () => {
        this.querySelector('chart-time-btn').setAttribute('disabled', 'true');
        await this._updateData();
        this.querySelector('chart-time-btn').removeAttribute('disabled');
    };

    _updateData = async () => {
        const response = await fetch(`/api/chart/data?view=${this._ohlcChartView}`);
        if (!response.ok) {
            location.reload();
            return;
        }
        this._data = await response.json();
        this.querySelector('lnm-chart').updateChartData(this._data.chartData);
    };

    _onTradeVisClick = e => {
        e.preventDefault();
        //console.log('asd', e.detail);
    };
}

customElements.define('app-view', AppView);
