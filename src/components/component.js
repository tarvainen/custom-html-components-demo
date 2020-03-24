class Component extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.node = null;
  }

  setState(state) {
    this.state = { ...this.state, ...state };

    this.__render(this.render());
  }

  connectedCallback() {
    this.__render(this.render());
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.setState({ ...this.state, [name]: newValue });
  }

  __render(content) {
    const element = document.createElement('template');

    element.innerHTML = content;

    const node = element.content.cloneNode(true).children[0];

    if (!this.node) {
      this.node = node;
      this.shadowRoot.appendChild(this.node);
    } else {
      this.shadowRoot.replaceChild(node, this.node);
      this.node = node;
    }
  }
}

export function registerComponent(name) {
  return component => {
    window.customElements.define(name, component);
    return component;
  };
}

export default Component;
