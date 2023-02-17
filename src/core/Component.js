export default class Component {
  constructor(app) {
    this.app = app;
    this.setup();
    this.render();
  }

  setup() {}
  setEvent() {}

  template() {
    return "";
  }

  render() {
    this.app.innerHTML = this.template();
    this.setEvent();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}