import { LitElement, html } from "lit";

import './trades-open-table';
import './trades-closed-table';
import './trades-running-table';

export default class TradesTables extends LitElement {
    static properties = {
        _table: String
    };

    _renderTradesTable = () => {
        switch (this._table) {
            case "running":
                return html`<trades-running-table></trades-running-table>`;
            case "closed":
                return html`<trades-closed-table></trades-closed-table>`;
            case "open":
            default:
                return html`<trades-open-table></trades-open-table>`
        }
    };

    createRenderRoot = () => this;
    render = () => html`
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
    `;

    _onTableClick = (e) => {
        e.preventDefault();
        [...this.querySelectorAll('a.nav-link.trades-table.active')].map(x => x.classList.remove('active'));
        e.target.classList.add('active')
        this._table = e.target.dataset.table;
    };
};

customElements.define('trades-tables', TradesTables);