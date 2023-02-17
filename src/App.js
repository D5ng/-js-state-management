import Items from "./components/Items.js";

class App {
  constructor(app){
    this.app = app;
    this.Items = new Items(this.app);
  }
}

new App(document.querySelector("#App"));