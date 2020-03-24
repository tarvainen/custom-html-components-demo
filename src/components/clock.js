class Clock extends HTMLElement {
  constructor() {
    super();

    setInterval(() => this.render(), 1000);
  }

  render() {
    this.innerHTML = `<p>Current time: ${new Date()}</p>`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('app-clock', Clock);
