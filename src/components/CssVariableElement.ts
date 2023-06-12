class CssVariableElement extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' })

        shadowRoot.innerHTML = `
        <style>
        header {
            color: var(--custom-header-color, #000);
            background: var(--custom-header-background, transparent);
        }
        main {
            color: var(--custom-main-color, #000);
            background: var(--custom-main-background, transparent);
        }
        </style>
        <div class="container">
            <header>header</header>
            <main>main</main>
        </div>
        `
    }
}

customElements.define('custom-css-variable', CssVariableElement)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    <style>
    :root {
        --custom-header-color: red;
        --custom-header-background: #000;
        
        --custom-main-color: green;
        --custom-main-background: #999;
    }
    </style>

    <custom-css-variable></custom-css-variable>
</div>
`

