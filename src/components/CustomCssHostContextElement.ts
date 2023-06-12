class CustomCssHostContextElement extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' })

        shadowRoot.innerHTML = `
        <style>
        :host-context(html[theme="dark"]) {
            color: #fff;
        }
        :host-context(html[theme="dark"]) div{
            background: #000;
        }
        </style>
        <div>custom-css-host</div>
        `
    }
}

customElements.define('custom-css-host', CustomCssHostContextElement)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    <custom-css-host></custom-css-host>
    
    <button id="btn">change theme</button>
</div>
`

document.querySelector('#btn')!.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('theme')
    if (theme !== 'dark') {
        document.documentElement.setAttribute('theme', 'dark')
    } else {
        document.documentElement.removeAttribute('theme')
    }
})
