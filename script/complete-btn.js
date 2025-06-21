const buttons = document.getElementsByClassName("complete-btn");

for (let button of buttons) {
  button.addEventListener("click", function () {
    alert("Board update Successfully");
    button.disabled = true;

    const taskCompleted = returnValueByID("taskcompleted");
    const taskAssigned = returnValueByID("taskassigned");

    // Addition and subtracting after clicking the button
    document.getElementById("taskcompleted").innerText = taskCompleted + 1;
    document.getElementById("taskassigned").innerText = taskAssigned - 1;
  });
}
