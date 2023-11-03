import { LitElement, html } from 'lit';

export default class LnmcCopilot extends LitElement {
    static properties = {
        _side: String,
        _interval: String,
        _intervalId: Number,
    };

    createRenderRoot = () => this;
    render = () => {
        const btnText = this._intervalId < 0 ? 'Start' : 'Stop';
        const disabled = this._intervalId > 0;

        return html`
        <form @submit="${this._onFormSubmit}">
            <div class="mb-3">
                <label class="form-label">Side</label>
                <input class="form-control" name="side"
                    value="b"
                    ?disabled="${disabled}" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Interval</label>
                <input type="time" class="form-control" name="interval"
                    value="00:01"
                    ?disabled="${disabled}" required>
            </div>
            <button type="submit" class="btn btn-primary">
                ${btnText}
            </button>
        </form >
    `;
    };

    connectedCallback() {
        super.connectedCallback();
        this._side = sessionStorage.getItem('lnmc-copilot._side') ?? 'b';
        this._interval = sessionStorage.getItem('lnmc-copilot._interval') ?? '00:01';
        this._intervalId = sessionStorage.getItem('lnmc-copilot._intervalId') ?? -1;
    };

    disconnectedCallback() {
        super.disconnectedCallback();
        sessionStorage.setItem('lnmc-copilot._side', this._side);
        sessionStorage.setItem('lnmc-copilot._interval', this._interval);
        sessionStorage.setItem('lnmc-copilot._intervalId', this._intervalId);
    };

    _onFormSubmit = (e) => {
        e.preventDefault();

        const submitBtn = e.target.querySelector('button[type="submit"]');
        switch (submitBtn.innerText) {
            case 'Stop':
                clearInterval(this._intervalId);
                this._intervalId = -1;
                //submitBtn.innerText = 'Start';
                break;
            case 'Start':
            default:
                const formData = new FormData(e.target);
                this._side = formData.get('side');
                this._interval = formData.get('interval');
                const timeValue = this._interval;
                const [hours, minutes] = timeValue.split(':').map(Number);
                const minutesInMilliseconds = (hours * 60 + minutes) * 60 * 1000;
                this._intervalId = setInterval(async () => {
                    const response = await fetch('/api/copilot/create-market-order', {
                        method: 'POST',
                        body: formData
                    });
                    const result = await response.json();
                    console.log(result);
                }, minutesInMilliseconds);
                //submitBtn.innerText = 'Stop';
                break;
        }
    };
}

customElements.define('lnmc-copilot', LnmcCopilot);