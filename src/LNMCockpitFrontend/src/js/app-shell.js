import { html, LitElement } from 'lit';

import './views/login-view';

export default class AppShell extends LitElement {
    static properties = {
        _view: String
    };

    createRenderRoot = () => this;
    render = () => {
        switch (this._view) {
            case 'app':
                return html`app`;
            case 'login':
            default:
                return html`<login-view></login-view>`;
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
