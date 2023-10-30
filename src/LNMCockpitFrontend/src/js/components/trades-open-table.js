import { LitElement, html } from "lit";

export default class TradesOpenTable extends LitElement{
    properties = {};

    _renderTableRow = (x, i) => {
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

    createRenderRoot = () => this;
    render = () => html`
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
            ${this._data?.openTradesData.map(this._renderTableRow)}
        </table>
    </div>
    `;
}

customElements.define('trades-open-table', TradesOpenTable);