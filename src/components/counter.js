class Counter extends HTMLElement {
  constructor() {
    super();

    this.count = 0;
  }

  render() {
    this.innerHTML = `<button>Clicks: ${this.count}</button>`;
  }

  connectedCallback() {
    this.render();

    this.addEventListener('click', () => {
      this.count++;
      this.render();
    });
  }
}

customElements.define('app-counter', Counter);
