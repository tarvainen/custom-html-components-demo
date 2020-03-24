class Counter extends HTMLElement {
  get count() {
    return sessionStorage.getItem('count');
  }

  set count(value) {
    sessionStorage.setItem('count', value);
  }

  constructor() {
    super();
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
