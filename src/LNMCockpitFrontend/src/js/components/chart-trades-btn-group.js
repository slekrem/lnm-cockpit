import { LitElement, html } from "lit";

import './lnmc-copilot-modal-btn';

export default class ChartTradesBtnGroup extends LitElement {
    static properties = {
        _showOpenTrades: Boolean,
        _showRunningTrades: Boolean,
        _showClosedTrades: Boolean
    };
    createRenderRoot = () => this;
    render = () => html`
        <button class="btn btn-sm btn-link" @click="${this._onOpenBtnClick}">
            <i class="bi ${this._showOpenTrades ? 'bi-record-fill' : 'bi-record'}"></i>
        </button >
        <button class="btn btn-sm btn-link" @click="${this._onRunningBtnClick}">
            <i class="bi ${this._showRunningTrades ? 'bi-play-fill' : 'bi-play'}"></i>
        </button>
        <button class="btn btn-sm btn-link" @click="${this._onClosedBtnClick}">
            <i class="bi ${this._showClosedTrades ? 'bi-stop-fill' : 'bi-stop'}"></i>
        </button>
        |
        <lnmc-copilot-modal-btn></lnmc-copilot-modal-btn>
    `;

    _onOpenBtnClick = e => {
        e.preventDefault();
        this._showOpenTrades = !this._showOpenTrades;
        this._dispatchEvent(`openTradesChartData-${this._showOpenTrades}`);
    };

    _onRunningBtnClick = e => {
        e.preventDefault();
        this._showRunningTrades = !this._showRunningTrades;
        this._dispatchEvent(`runningTradesChartData-${this._showRunningTrades}`);
    };

    _onClosedBtnClick = e => {
        e.preventDefault();
        this._showClosedTrades = !this._showClosedTrades;
        this._dispatchEvent(`closedTradesChartData-${this._showClosedTrades}`);
    };

    _dispatchEvent = action => this.dispatchEvent(new CustomEvent('trade-vis-click', { detail: action }));
}

customElements.define('chart-trades-btn-group', ChartTradesBtnGroup);