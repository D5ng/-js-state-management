export default class Component {
  app;
  props;
  state;
  constructor(app, props) {
    this.app = app;
    this.props = props;

    this.setup();
    this.render();
    this.setEvent();
  }

  setup() {}
  setEvent() {}
  mounted() {}
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
    this.mounted(); // render 이후에 mounted 실행.
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }
}