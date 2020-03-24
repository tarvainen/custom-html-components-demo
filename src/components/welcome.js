import Component, { registerComponent } from './component';

class Welcome extends Component {
  static get observedAttributes() {
    return ['name'];
  }

  constructor() {
    super();

    this.state = { name: '' };
  }

  render() {
    console.log(this.attributes)
    const { name } = this.state;

    return `<h1>Hello ${name}!</h1>`;
  }
}

module.exports = registerComponent('app-welcome')(Welcome);
