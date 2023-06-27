class CustomCssSlottedElement extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' })

        shadowRoot.innerHTML = `
        <style>
        header ::slotted(span) {
            color: green;
        }
        
        main ::slotted(*) {
            color: red;
        }
        
        /** 不生效 **/
        /*main ::slotted(*) b {*/
        /*    color: yellow;*/
        /*}*/
        </style>
        <div class="container">
            <header><slot name="header"></slot></header>
            <main>
            <div><slot></slot></div></main>
        </div>
        `
    }
}

customElements.define('custom-css-slotted', CustomCssSlottedElement)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    <custom-css-slotted>
        <span slot="header">header</span>
        <div>
            <b>main</b>
        </div>
    </custom-css-slotted>
</div>
`
