const divElement = document.createElement("div");

divElement.classList.add("text_content");

const reloadBtn = document.createElement("button");
reloadBtn.type = "button";
reloadBtn.classList.add("reloadButton");
reloadBtn.textContent = "Reload";

const pElement = document.createElement("p");
const p2Element = document.createElement("p");
const p3Element = document.createElement("p");
p3Element.style.marginTop = "200px";

divElement.appendChild(reloadBtn);
divElement.appendChild(pElement);
divElement.appendChild(p2Element);
divElement.appendChild(p3Element);
document.body.appendChild(divElement);

reloadBtn.addEventListener("click", () => {
  pElement.textContent = "Hello World.";
  setTimeout(() => {
    window.location.reload(true);
  }, 2000);
});

window.addEventListener("load", () => {
  p2Element.textContent = "Document Fully Loaded";
});

// document.addEventListener("scroll", () => {
//   p3Element.textContent = "Document is Scrolling";
//   p3Element.style.backgroundColor = "yellow";
//   setTimeout(() => {
//     window.location.reload(true);
//   }, 2000);
// });

const div2Element = document.createElement("div");

div2Element.classList.add("event_content");

document.body.appendChild(div2Element);

const form = document.querySelector("#form textarea");
div2Element.appendChild(form);
form.textContent =
  "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

form.addEventListener("focus", (event) => {
  event.target.style.background = "gray";
});
form.addEventListener("blur", (event) => {
  event.target.style.background = "";
});

// contextmenu event

document.getElementById("context").addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

// input event
const inputId = document.getElementById("inputId");
const eValue = document.getElementById("value");

inputId.addEventListener("input", () => {
  eValue.textContent = inputId.value;
});

// keydown event
const zKeydown = document.querySelector("#keydownd input");
zKeydown.addEventListener("keydown", () => {
  zKeydown.style.backgroundColor = "blue";
  zKeydown.style.color = "white";
});

// toggle event

document.querySelector(".toggleEvent").addEventListener("toggle", () => {
  alert("JS Toggle event check");
});
