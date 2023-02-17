class Component {
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

class App extends Component {
  constructor(app){
    super(app);
  }

  setup(){
    this.state = { items: ["item1", "item2"] }
  }

  template(){
    const { items } = this.state;
    return `
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button>추가</button>
    `;
  }

  setEvent(){
    this.app.querySelector("button").addEventListener("click", () => {
      const { items } = this.state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}

new App(document.querySelector("#App"))
