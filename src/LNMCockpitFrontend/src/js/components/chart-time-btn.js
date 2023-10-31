import { LitElement, html } from "lit";

export default class ChartTimeBtn extends LitElement {
    static properties = {
        disabled: Boolean,
        _activeView: String
    };

    createRenderRoot = () => this;
    render = () => {
        const disabledClass = this.disabled ? 'disabled' : '';
        const activeClass = (view) => this._activeView === view ? 'active' : '';
        return html`
        <div class="dropdown">
            <button class="btn btn-link link-underline link-underline-opacity-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="bi bi-clock"></i>
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item chart-view ${activeClass('24h1m')} ${disabledClass}"
                        href="#"
                        data-view="24h1m"
                        @click="${this._onChartViewClick}">24h in 1min chart</a>
                </li>
                <li>
                    <a class="dropdown-item chart-view ${activeClass('48h5m')} ${disabledClass}"
                        href="#"
                        data-view="48h5m"
                        @click="${this._onChartViewClick}">48h in 5min chart</a>
                </li>
                <li>
                    <a class="dropdown-item chart-view ${activeClass('7d1h')} ${disabledClass}"
                        href="#"
                        data-view="7d1h"
                        @click="${this._onChartViewClick}">7d in 1h chart</a>
                </li>
                <li>
                    <a class="dropdown-item chart-view ${activeClass('2w4h')} ${disabledClass}"
                        href="#"
                        data-view="2w4h" @click="${this._onChartViewClick}">2w in 4h chart</a>
                </li>
                <li>
                    <a class="dropdown-item chart-view ${activeClass('1m8h')} ${disabledClass}"
                        href="#"
                        data-view="1m8h"
                        @click="${this._onChartViewClick}">1M in 8h chart</a>
                </li>
            </ul>
        </div>
        `;
    };

    firstUpdated = () => this._activeView = '1m8h';

    _onChartViewClick = async (e) => {
        e.preventDefault();
        this._activeView = e.target.dataset.view;
        this.dispatchEvent(new CustomEvent('time-click', {
            detail: this._activeView
        }));
    };
}

customElements.define('chart-time-btn', ChartTimeBtn);