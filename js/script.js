var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.className === "input_checkbox") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("newTask").value;
  var t = document.createTextNode(inputValue);
  var x = document.createElement("input");
  x.setAttribute("type", "checkbox");
  var l = document.createElement("label");
  li.appendChild(x);
  li.appendChild(l);
  l.appendChild(t);
  if (inputValue === "") {
    alert("Вы должны что-то написать!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("newTask").value = "";
}
