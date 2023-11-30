import { LitElement, html } from 'lit';
import { Modal } from 'bootstrap';

export default class LnmcCopilotModalBtn extends LitElement {
    static properties = {
        data: Object,
        _modal: Object,

        _side: String,
        _startDate: Object,
        _lastUpdateDate: Object
    };

    createRenderRoot = () => this;
    render = () => {
        const btnText = this._startDate ? 'Stop' : 'Start';
        const disabled = this._startDate ? true : false;
        return html`
        <div class="modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Copilot</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form @submit="${this._onFormSubmit}">
                    <div class="btn-group w-100 mb-4" role="group">
                        <button type="button" class="btn btn-success ${this._side === 'b' ? 'active' : ''}"
                            @click="${this._onBuyClick}"
                            ?disabled="${disabled}">Buy</button>
                        <button type="button" class="btn btn-danger ${this._side === 's' ? 'active' : ''}"
                            @click="${this._onSellClick}"
                            ?disabled="${disabled}">Sell</button>
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Quantity</label>
                        <input type="number" class="form-control" required ?disabled="${disabled}">
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Leverage</label>
                        <input type="number" class="form-control" required ?disabled="${disabled}">
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Max. number of running trades</label>
                        <input type="number" class="form-control" required ?disabled="${disabled}">
                    </div>
                    <div class="mb-4">
                        <label class="form-label">Timeinterval in minutes</label>
                        <input type="number" class="form-control" required ?disabled="${disabled}">
                    </div>
                    <button type="submit" class="btn btn-primary w-100">
                        ${btnText}
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-sm btn-link disabled" @click="${this._onCopilotBtnClick}">
            <i class="bi bi-person-raised-hand"></i>
        </button>
        `;
    };

    firstUpdated = () => {
        this._modal = new Modal(this.querySelector('.modal'));
        this._side = 'b';
    };

    _onCopilotBtnClick = e => {
        e.preventDefault();
        this._modal.toggle();
    };

    _onSellClick = e => {
        e.preventDefault();
        this._side = 's';
    };

    _onBuyClick = e => {
        e.preventDefault();
        this._side = 'b';
    };

    _onFormSubmit = (e) => {
        e.preventDefault();
        if (!this._startDate) {
            this._startDate = Date.now();
        } else {
            this._startDate = null;
        }
    };
}

customElements.define('lnmc-copilot-modal-btn', LnmcCopilotModalBtn);