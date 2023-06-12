class CustomAttributesElement extends HTMLElement {
    static get observedAttributes() {
        return ['width', 'height']
    }

    constructor() {
        super();

        const shadowRoot = this.attachShadow({ mode: 'open' })

        shadowRoot.innerHTML = `
            <div id="root" style="background: rgba(255, 0,0,0.2);">
                <span>custom Attributes Element</span>
            </div>
        `

        this.applyStyle()
    }

    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        console.log(name, oldValue, newValue)
        this.applyStyle()
    }

    applyStyle() {
        const width = this.getAttribute('width')
        const height = this.getAttribute('height')
        const rootDiv = this.shadowRoot!.querySelector<HTMLDivElement>('#root')!
        if (width) {
            rootDiv.style.width = width
        }
        if (height) {
            rootDiv.style.height = height
        }
    }
}


customElements.define('custom-attributes', CustomAttributesElement)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="height: 100px;">
    <custom-attributes width="100px" height="16px"></custom-attributes>
  </div>
  <button id="btn">click change width</button>
`

document.querySelector('#btn')?.addEventListener('click', ()=> {
    const element = document.querySelector<HTMLElement>('custom-attributes')!

    const widthValue = element.getAttribute('width')!
    const oldWidth = Number(widthValue.replace('px', ''))

    const heightValue = element.getAttribute('height')!
    const oldHeight = Number(heightValue.replace('px', ''))

    element.setAttribute('width', `${oldWidth + 50}px`)
    element.setAttribute('height', `${oldHeight + 50}px`)
})
