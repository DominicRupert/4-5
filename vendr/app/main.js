import {SnacksController} from "./Controllers/SnacksController.js"

class App {
  SnacksController = new SnacksController();
}

window["app"] = new App();
