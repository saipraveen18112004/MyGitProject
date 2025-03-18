function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
      alert("Please enter a task!");
      return;
  }

  let li = document.createElement("li");
  li.textContent = taskInput.value;
  
  li.onclick = function () {
      this.classList.toggle("completed");
  };

  taskList.appendChild(li);
  taskInput.value = "";
}
