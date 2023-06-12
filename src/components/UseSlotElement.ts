class UseSlotElement extends HTMLElement {
    constructor() {
        super();

        const content = document.querySelector<HTMLTemplateElement>('#custom-template')!.content

        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.append(content.cloneNode(true))

        const bodySlot = shadowRoot.querySelector('.body > slot')
        bodySlot!.addEventListener('slotchange', (event) => {
            console.log(event)
        })
    }
}

customElements.define('use-slot', UseSlotElement)

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <template id="custom-template">
    <style>
        .container {
            height: 100vh;
            display: flex;
            flex-direction: column;
        }
        .header, .footer {
            height: 50px;
            line-height: 50px;
        }
        .body {
            flex: 1;
        }
    </style>
    <div class="container">
        <header class="header">
        <slot name="header"></slot>
        </header>
        <main class="body">
            <slot></slot>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
  </template>
  <div>
    <use-slot>
        <div slot="header">Header</div>
        <div>main</div>
        <div slot="footer">Footer</div>
    </use-slot>
  </div>
`
