import { html, LitElement } from 'lit';
import logo from '../../favicon/logo.png';

export default class LoginView extends LitElement {

    _renderStyle = () => html`
    <style>
        html,
        body {
            height: 100%;
        }

        .form-signin {
            padding: 1rem;
        }

        .form-signin .form-floating:focus-within {
            z-index: 2;
        }

        .secret {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }

        .key {
            margin-bottom: -1px;
            border-radius: 0;
        }

        .passphrase {
            margin-bottom: -1px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    </style>
    `;

    createRenderRoot = () => this;
    render = () => html`
    ${this._renderStyle()}
    <div class="d-flex align-items-center py-4 bg-body-tertiary vh-100">
        <main class="form-signin w-auto m-auto">
            <form @submit="${this._onFormSubmit}">
                <img class="mb-4" src="${logo}" alt="" width="250" height="250">
                <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>
                <div class="form-floating">
                    <input type="password" class="form-control secret" name="secret" placeholder="Secret">
                    <label>Secret</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control key" name="key" placeholder="Key">
                    <label>Key</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="password" class="form-control passphrase" name="passphrase" placeholder="Passphrase">
                    <label>Passphrase</label>
                </div>
                <!-- <div class="form-check text-start my-3">
                    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">Remember me</label>
                </div> -->
                <input class="btn btn-primary w-100 py-2" type="submit" value="Sign in">
                <p class="mt-3 mb-3 text-body-secondary text-center">
                    <a href="https://twitter.com/slekrem" target="_blank" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                    &copy; ${new Date().getFullYear()} Stefan
                    </a>
                </p>
            </form>
        </main>
    </div>
    `;

    _onFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        [...e.target.querySelectorAll('input')].map(x => x.setAttribute('disabled', ''));
        await fetch('/api/auth/login', {
            method: 'POST',
            body: formData
        });
        location.reload();
    };
}

customElements.define('login-view', LoginView);
