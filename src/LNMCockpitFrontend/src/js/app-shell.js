import { html, LitElement } from 'lit';

import './views/login-view';
import './views/app-view';

export default class AppShell extends LitElement {
    static properties = {
        _view: String
    };

    createRenderRoot = () => this;
    render = () => {
        switch (this._view) {
            case 'app':
                return html`<app-view></app-view>`;
            case 'login':
                return html`<login-view></login-view>`;
            default:
                return html``;
        }
    }

    firstUpdated = async () => {
        const response = await fetch('/api/auth/is-authenticated');
        const data = await response.json();
        if (data.isAuthenticated)
            this._view = 'app';
        else
            this._view = 'login';
    };
}

customElements.define('app-shell', AppShell);
