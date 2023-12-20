import { LitElement, html } from "lit";

export default class PlaygroundView extends LitElement {
    static properties = {};

    createRenderRoot = () => this;
    render = () => html`PLAYGROUND`;

    firstUpdated = async () => {
        setInterval(async () => {
            const response = await fetch('/api/playground/asd');
            const data = await response.json();

            for (var i = 0; i < data.length; ++i) {
                const runningTrade = data[i];
                const fees = parseInt(runningTrade.opening_fee) * 2;
                const pl = parseInt(runningTrade.pl) - fees;
                if (pl >= 5) {
                    const form = new FormData();
                    form.append('id', runningTrade.id);
                    const closeTardeResponse = await fetch('/api/playground/close-trade', {
                        method: 'POST',
                        body: form
                    });
                }

                console.log(runningTrade, fees, pl);
            }

            if (data.length < 10) {
                const bestRunningTrade = data.sort((a, b) => a.pl - b.pl).slice(-1)[0];
                let side = bestRunningTrade.side;
                if (bestRunningTrade.pl < 0) {
                    if (side === 'b')
                        side = 's';
                    else
                        side = 'b';
                }
                const form = new FormData();
                form.append('side', side);
                const newTradeResponse = await fetch('/api/playground/new-trade/', {
                    method: 'POST',
                    body: form
                });
                const newTradeData = await newTradeResponse.json();

                console.log('asd', newTradeData);
            }
        }, 60000);
    }
};

customElements.define('playground-view', PlaygroundView);