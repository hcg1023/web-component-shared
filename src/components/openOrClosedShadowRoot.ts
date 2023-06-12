class OpenShadowRootElement extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' })

        shadow.innerHTML = `
            <div>open</div>
        `
    }
}


class ClosedShadowRootElement  extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'closed' })

        shadow.innerHTML = `
            <div>closed</div>
        `
    }
}

customElements.define('open-shadow-root', OpenShadowRootElement)
customElements.define('closed-shadow-root', ClosedShadowRootElement)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
      <open-shadow-root></open-shadow-root>
      <closed-shadow-root></closed-shadow-root>
  </div>
`

console.log('open-shadow-root', document.querySelector('open-shadow-root')!.shadowRoot)
console.log('closed-shadow-root', document.querySelector('closed-shadow-root')!.shadowRoot)


document.querySelector('open-shadow-root')!.shadowRoot!.append('外部添加')
