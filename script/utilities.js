function assignedTask(id) {
  const value = returnValueByID(id);
}

function acitivtyLog(id) {
  const text = document.getElementById("activity-log").innerText;
  const title = id.parentNode.parentNode.querySelector(".card-title").innerText;
  document.getElementById("activity-log").innerHTML += `
  <p>You have completed the task ${title} at that time</p>
`;
}
gi;
