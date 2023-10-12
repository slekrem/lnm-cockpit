import { html, LitElement } from 'lit';

export default class AppView extends LitElement {
    static properties = { };

    createRenderRoot = () => this;
    render = () => {
        return html``;
    }

    firstUpdated = async () => { };
}

customElements.define('app-view', AppView);
