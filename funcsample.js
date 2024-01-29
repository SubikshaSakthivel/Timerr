//select
const b = document.getElementById("but");
const task = document.getElementById("task");
const description = document.getElementById("description");
const table = document.getElementById("tj");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");
const seconds = document.getElementById("seconds");

let intervalId;
function startTimer() 
{
  let m = 0;
  let s = 0;
  let h = 0;
if (b.textContent === "Stop")
  {
    table.innerHTML += `<tr><td>${task.value}</td>
    <td>${description.value}</td>
    <td>
    ${hours.textContent+':'+minutes.textContent+':'+seconds.textContent}
    <td>
    </tr>`;
    task.value ="";
    description.value ="";
    clearInterval(intervalId);
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    b.textContent = "Start";
    b.style.setProperty("background-color", "green");
    s=0,m=0,h=0
  } 
  else if (b.textContent === "start") {
    b.textContent = "Stop";
    intervalId = setInterval(function () {
      s++;
      if (s >= 60) {
        s = 0;
        m++;
      }
      if (m >= 60) {
        m = 0;
        h++;
      }
    s = seconds.textContent = s.toString().padStart(2, "0");
    m = minutes.textContent = m.toString().padStart(2, "0");
    h = hours.textContent = h.toString().padStart(2, "0");
    b.style.setProperty("background-color", "red");
    }, 1000);
    b.textContent = "Stop";
    b.style.setProperty("background-color", "red");
  }
}
b.addEventListener("click", startTimer);
