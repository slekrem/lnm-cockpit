import { html, LitElement } from 'lit';

export default class LoginView extends LitElement {
    createRenderRoot = () => this;
    render = () => html`LOGIN`;
}

customElements.define('login-view', LoginView);
