class CustomCssPartElement extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' })

        shadowRoot.innerHTML = `
        <div class="container">
            <header part="header">header</header>
            <main part="main">
                <b>main</b>
            </main>
        </div>
        `
    }
}

customElements.define('custom-css-part', CustomCssPartElement)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    <style>
    custom-css-part::part(header) {
        color: red;
    }
    custom-css-part::part(main) {
        color: green;
    }
    </style>

    <custom-css-part></custom-css-part>
</div>
`
