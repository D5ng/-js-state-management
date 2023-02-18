export default class Component {
  constructor(app) {
    this.app = app;
    this.setup();
    this.render();
    this.setEvent();
  }

  setup() {}
  setEvent() {}
  template() { return ""; }

  addEvent(eventType, selector, callback){
    const children = [...document.querySelectorAll(selector)];
    this.app.addEventListener(eventType, event => {
      if(!event.target.closest(selector)) return;
      callback(event);
    });
  }

  render() {
    this.app.innerHTML = this.template();
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}