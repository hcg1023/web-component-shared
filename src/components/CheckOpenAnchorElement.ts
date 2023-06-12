const checkJumpHref = 'https://link.juejin.cn/?target='

class CheckOpenAnchorElement extends HTMLAnchorElement {
    private get isExternalLink() {
        return !this.href.startsWith(this.baseURI)
    }

    constructor() {
        super();

        if (this.isExternalLink) {
            const prefix = document.createElement('span')
            prefix.innerHTML = '外链：'
            this.prepend(prefix)
            this.style.color = 'red'
        }

        this.addEventListener('click', (event) => {
            event.preventDefault()
            if (this.isExternalLink) {
                window.open(`${checkJumpHref}${encodeURIComponent(this.href)}`, '_blank')
            } else {
                window.open(this.href, '_blank')
            }
        })
    }
}


customElements.define('check-open-a', CheckOpenAnchorElement, { extends: 'a' })
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a is="check-open-a" href="https://www.baidu.com">百度</a>
    <a is="check-open-a" href="https://www.taobao.com">淘宝</a>
    <a is="check-open-a" href="https://juejin.cn">掘金</a>
    <a is="check-open-a" href="http://127.0.0.1:5173/">内链</a>
  </div>
`
