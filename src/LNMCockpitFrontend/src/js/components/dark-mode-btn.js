import { LitElement, html } from "lit";

export default class DarkModeBtn extends LitElement {
    createRenderRoot = () => this;
    render = () => {
        let icon = '';
        switch (this._getStoredTheme()) {
            case 'dark':
                icon = 'bi-brightness-high-fill';
                break;
            case 'light':
            default:
                icon = 'bi-moon-fill'
                break;
        }
        return html`
        <button class="btn btn-link" @click="${this._onToggleModeBtnClick}">
            <i class="bi ${icon}"></i>
        </button>
        `;
    };

    firstUpdated = () => {
        this._setTheme(this._getPreferredTheme());
        if (!this._getStoredTheme())
            this._setStoredTheme(this._getPreferredTheme());
    };

    _onToggleModeBtnClick = (e) => {
        e.preventDefault();
        switch (this._getStoredTheme()) {
            case 'dark':
                this._setStoredTheme('light');
                this._setTheme('light');
                break;
            case 'light':
            default:
                this._setStoredTheme('dark');
                this._setTheme('dark');
                break;
        }
        this.requestUpdate();
    };

    _getStoredTheme = () => localStorage.getItem('theme');
    _setStoredTheme = theme => localStorage.setItem('theme', theme);

    _getPreferredTheme = () => {
        const storedTheme = this._getStoredTheme()
        if (storedTheme) {
            return storedTheme
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    _setTheme = theme => {
        if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark')
        } else {
            document.documentElement.setAttribute('data-bs-theme', theme)
        }
    }
}

customElements.define('dark-mode-btn', DarkModeBtn);