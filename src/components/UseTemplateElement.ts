class UseTemplateElement extends HTMLElement {
    constructor() {
        super();

        const content = document.querySelector<HTMLTemplateElement>('#custom-template')!.content

        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.append(content.cloneNode(true))
    }
}

customElements.define('use-template', UseTemplateElement)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <template id="custom-template">
    <style>
        .custom-template-div {
        color: red;
        }
    </style>
    <div class="custom-template-div">custom template</div>
  </template>
  <div>
      <use-template></use-template>
  </div>
`
