class UserInteraction {
  constructor() {
    this.alertMessage = "You must write something!";
    this.body = document.querySelector("body");
  }

  renderAlert() {
    let divAlert = document.createElement("div");
    divAlert.setAttribute("class", "alert alert-warning col-3");
    let alertMessage = document.createTextNode(this.alertMessage);
    divAlert.appendChild(alertMessage);
    console.log(divAlert);
    if (!document.body.contains(document.getElementsByClassName("alert")[0])) {
      this.body.append(divAlert);
    }
  }

  removeAlert() {
    if (document.body.contains(document.getElementsByClassName("alert")[0])) {
      document.getElementsByClassName("alert")[0].remove();
    }
  }

  renderNewElement(taskValue) {
    let li = document.createElement("li");
    li.setAttribute(
      "class",
      "list-group-item d-flex justify-content-between mb-3"
    );
    let liText = document.createTextNode(taskValue);

    //to append checkIcon to list
    let iconChecked = document.createElement("i");
    iconChecked.setAttribute("class", "bi");
    li.appendChild(iconChecked);

    //appending input value to li
    li.appendChild(liText);

    //to append delete icon to list
    let iconClose = document.createElement("i");
    iconClose.setAttribute("class", "bi bi-trash-fill");

    li.appendChild(iconClose);

    if (this.task === "") {
      //showing alert if input is empty
      this.renderAlert();
    } else {
      //appending li to ul
      document.getElementById("todoUl").appendChild(li);
      this.removeAlert();
    }
    document.getElementById("todoInput").value = "";
  }
}

class Task extends UserInteraction {
  constructor(taskName, done) {
    super();
    this.task = taskName;
    this.done = done;
  }
}

export { Task };
