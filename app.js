import { TodoList } from "./components/TodoList.js";
import { fetchJSON } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try {
  const todos = await fetchJSON("https://jsonplaceholder.typicode.com/todos");
  const list = new TodoList(todos);
  list.appendToDOM(document.querySelector("#todolist"));
} catch (e) {
  const alertElement = createElement("div", {
    class: "alert alert-danger m-2",
    role: "alert",
  });
  alertElement.innerText = "Can't load elements";
  document.body.prepend(alertElement);
}
