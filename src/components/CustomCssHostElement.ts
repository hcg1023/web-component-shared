class CustomCssHostElement extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' })

        shadowRoot.innerHTML = `
        <style>
        :host {
            color: #000;
        }
        
        :host([dark]) {
            color: #fff;
        }
        :host([dark]) div {
            background: #000;
        }
        </style>
        <div>custom-css-host</div>
        `
    }
}

customElements.define('custom-css-host', CustomCssHostElement)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    <custom-css-host></custom-css-host>
    <custom-css-host dark></custom-css-host>
</div>
`
