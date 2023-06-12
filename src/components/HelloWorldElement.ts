class HelloWorldElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' })

        shadow.innerHTML = `
            <div>hello world</div>
        `
    }
}

customElements.define('hello-world', HelloWorldElement)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <hello-world></hello-world>
  </div>
`
