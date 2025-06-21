function assignedTask(id) {
  const value = returnValueByID(id);
}

function acitivtyLog(id) {
  const text = id.parentElement.innerText;
  //   console.log(text);
  const log = document.getElementById("activity-log");
  log.innerHTML += `<p>✅ Completed: ${text}</p>`;
}
