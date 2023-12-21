import { Task } from "./taskList.js";
let input = document.querySelector("input");
const addBtn = document.querySelector("button");
const todoItemListUl = document.querySelector(".list-group");

let todoListArr = [];
addBtn.addEventListener("click", (event) => {
  let t1 = new Task(input.value, false);

  todoListArr.push({
    id: Date.now(),
    taskName: t1.task,
    done: t1.done,
  });
  console.log(JSON.stringify(todoListArr));
  t1.renderNewElement(input.value);
});

todoItemListUl.addEventListener("click", ({ target }) => {
  let li = target.parentElement;
  //check if event is on delete icon
  if (target.classList.contains("bi-trash-fill")) {
    li.classList.add("d-none");
  }

  //if event is on list item then its checked
  if (target.classList.contains("list-group-item")) {
    let iconChecked = target.childNodes[0];
    if (target.childNodes[0].getAttribute("class") !== "bi bi-check2-square") {
      iconChecked.classList.add("bi-check2-square");
      target.classList.add("text-decoration-line-through");
    } else {
      iconChecked.classList.remove("bi-check2-square");
      target.classList.remove("text-decoration-line-through");
    }
  }
});
