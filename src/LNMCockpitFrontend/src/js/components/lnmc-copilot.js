import { LitElement, html } from 'lit';

export default class LnmcCopilot extends LitElement {
    static properties = {
        data: Object,
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
                    value="${this._side}"
                    ?disabled="${disabled}" required>
            </div>
            <div class="mb-3">
                <label class="form-label">Interval</label>
                <input type="time" class="form-control" name="interval"
                    value="${this._interval}"
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

    requestUpdate = () => {
        super.requestUpdate();
        console.log('req update');
    };

    _onFormSubmit = (e) => {
        e.preventDefault();

        const submitBtn = e.target.querySelector('button[type="submit"]');
        switch (submitBtn.innerText) {
            case 'Stop':
                clearInterval(this._intervalId);
                this._intervalId = -1;
                break;
            case 'Start':
            default:
                const formData = new FormData(e.target);
                this._side = formData.get('side');
                this._interval = formData.get('interval');
                const timeValue = this._interval;
                const [hours, minutes] = timeValue.split(':').map(Number);
                const minutesInMilliseconds = (hours * 60 + minutes) * 60 * 1000;
                this._intervalId = setInterval(this.__copilotInterval, minutesInMilliseconds);

                sessionStorage.setItem('lnmc-copilot._side', this._side);
                sessionStorage.setItem('lnmc-copilot._interval', this._interval);
                sessionStorage.setItem('lnmc-copilot._intervalId', this._intervalId);
                break;
        }
    };

    __copilotInterval = async () => {
        const appView = document.querySelector('app-view');

        appView._data.tradesData.runningTradesData.forEach(x => {
            if ((x.pl - (x.opening_fee * 2 + x.sum_carry_fees))) {
                console.log('pls close')
            }
        });




        console.log(appView._data);
        const runningTradesLength = appView._data.tradesData.runningTradesData.length;
        const runningTradesInLossLength = appView._data.tradesData.runningTradesData.filter(x => x.pl <= 0).length;
        appView._data.tradesData.runningTradesData
            .filter(x => (x.pl - (x.opening_fee * 2 + x.sum_carry_fees)) > 10)
            .map(x => console.log(x.pl - (x.opening_fee * 2 + x.sum_carry_fees)));
        console.log('l:', runningTradesLength);
        console.log('l2:', runningTradesInLossLength);
        if (runningTradesLength < 10 && runningTradesInLossLength === 0) {
            const formData = new FormData();
            formData.set('side', sessionStorage.getItem('lnmc-copilot._side'));
            const response = await fetch('/api/copilot/create-market-order', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            console.log(result);
        }
    };
}

customElements.define('lnmc-copilot', LnmcCopilot);