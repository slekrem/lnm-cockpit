import { LitElement, html } from "lit";

export default class LnmcNavbar extends LitElement {
    static properties = {};

    createRenderRoot = () => this;
    render = () => {
        return html`
        <nav class="navbar bg-body-tertiary fixed-top" data-bs-theme-value="light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">LNM Cockpit</a>
                <div class="d-flex">
                    <dark-mode-btn></dark-mode-btn>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">LNM Cockpit Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="d-flex align-items-end justify-content-end h-100">
                            <button class="btn btn-danger w-100" @click="${this._onLogOutClick}">Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        `;
    }

    _onLogOutClick = async (e) => {
        e.preventDefault();
        await fetch('/api/auth/logout', { method: 'POST' });
        location.reload();
    };
}

customElements.define('lnmc-navbar', LnmcNavbar);