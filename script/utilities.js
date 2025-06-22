function assignedTask(id) {
  const value = returnValueByID(id);
}

function acitivtyLog(id) {
  const text = document.getElementById("activity-log").innerText;

  const title = id.parentNode.parentNode.querySelector(".card-title").innerText;
  // -----------------------
  // took help from google

  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const date = now.toLocaleDateString();
  // -------------

  document.getElementById("activity-log").innerHTML += `
  <p class='mb-1 rounded-lg p-2 bg-[#F4F7FF] justify-center items-center text-center text-sm'>You have completed the task ${title} at ${time} on ${date}</p>
`;
}
