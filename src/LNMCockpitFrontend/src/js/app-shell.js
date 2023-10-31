import { html, LitElement } from 'lit';

import './views/app-view';
import './components/lnmc-navbar';

export default class AppShell extends LitElement {
    static properties = {
        _isAuthenticated: Boolean
    };

    createRenderRoot = () => this;
    render = () => {
        return html`
        <lnmc-navbar .isAuthenticated="${this._isAuthenticated}"></lnmc-navbar>
        <app-view .isAuthenticated="${this._isAuthenticated}"></app-view>`;
    };

    firstUpdated = async () => {
        const response = await fetch('/api/auth/is-authenticated');
        const data = await response.json();
        this._isAuthenticated = data.isAuthenticated;
    };
}

customElements.define('app-shell', AppShell);
