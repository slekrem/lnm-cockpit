import { LitElement, html } from "lit";

export default class LnmWebsocket extends LitElement {
    static properties = {
        _websocket: Object,
    };

    connectedCallback() {
        super.connectedCallback();
        this._websocket = new WebSocket('wss://api.lnmarkets.com');
        this._websocket.onopen = this._onWebSocketOpen;
        this._websocket.onmessage = this._onWebSocketMessage;
        this._websocket.onclose = this._onWebSocketClose;
    }

    disconnectedCallback = () => {
        super.disconnectedCallback();
        this._websocket.close();
    };

    _generateUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    _onWebSocketOpen = () => {
        const payload = {
            jsonrpc: '2.0',
            id: this._generateUUID(),
            method: 'v1/public/subscribe',
            params: ['futures:btc_usd:last-price', 'futures:btc_usd:index'],
        };
        this._websocket.send(JSON.stringify(payload));
    };

    _onWebSocketClose = (e) => console.warn('ws close', e);

    _onWebSocketError = (e) => console.warn('ws error', e);

    _onWebSocketMessage = (e) => {
        const data = JSON.parse(e.data);
        if (data.method != 'subscription')
            return;
        if (!data.params)
            return;

        switch (data?.params?.channel) {
            case 'futures:btc_usd:last-price':
                this._onFuturesBtcUsdLastPrice(data.params.data);
                break;
            case 'futures:btc_usd:index':
                this._onFuturesBtcUsdIndex(data.params.data);
            default:
                break;
        }
    };

    _onFuturesBtcUsdLastPrice = (data) => this._dispatchPriceEvent(data.lastPrice);

    _onFuturesBtcUsdIndex = (data) => this._dispatchPriceEvent(data.index);

    _dispatchPriceEvent = (price) => this.dispatchEvent(new CustomEvent('price', { detail: price }));
}

customElements.define('lnm-websocket', LnmWebsocket);