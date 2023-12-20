import { html, LitElement } from 'lit';

import './views/app-view';
import './views/my-copilot-view';
import './views/playground-view';
import './components/lnmc-navbar';

export default class AppShell extends LitElement {
    static properties = {
        _isAuthenticated: Boolean,
        _view: String,
    };

    _renderView = () => {
        switch (this._view) {
            case 'playground':
                return html`<playground-view></playground-view>`;
            case 'my-copilot':
                return html`<my-copilot-view></my-copilot-view>`;
            case 'app':
                return html`<app-view .isAuthenticated="${this._isAuthenticated}"></app-view>`;
            default:
                return html``;
        };
    }

    createRenderRoot = () => this;
    render = () => {
        return html`
        <lnmc-navbar .isAuthenticated="${this._isAuthenticated}" @my-copilot-click="${this._onMyCopilotClick}"></lnmc-navbar>
        ${this._renderView()}
        `;
    };

    firstUpdated = async () => {
        sessionStorage.clear();
        const response = await fetch('/api/auth/is-authenticated');
        const data = await response.json();
        this._isAuthenticated = data.isAuthenticated;
        this._view = 'playground';
    };

    _onMyCopilotClick = e => {
        e.preventDefault();
        this._view = 'my-copilot';
    };
}

customElements.define('app-shell', AppShell);
