class Welcome extends HTMLElement {
  static get observedAttributes() {
    return ['name'];
  }

  get name() {
    return this.getAttribute('name');
  }

  render() {
    this.innerHTML = `<h1>Hello ${this.name}!</h1>`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
}

customElements.define('app-welcome', Welcome);
