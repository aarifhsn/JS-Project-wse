const sidebarLi = document.querySelectorAll("li");
sidebarLi[0].addEventListener("click", homepage);

function homepage(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }
  const homepage = document.getElementById("home_content");
  const h2 = document.createElement("h2");
  homepage.appendChild(h2);

  const name = prompt("Enter your name please");
  if (name.trim() !== "") {
    h2.textContent = "Hello," + name;
  } else {
    h2.textContent = "No Name Found";
  }

  homepage.innerHTML =
    "Your Present window width is: " +
    window.innerWidth +
    "<br>" +
    "Your Present window width is: " +
    window.innerHeight +
    window.navigator.appName +
    "<br>" +
    window.navigator.geolocation +
    "<br>" +
    "online =" +
    window.navigator.onLine +
    "<br>" +
    "platform =" +
    window.navigator.platform +
    "<br>" +
    "Product =" +
    window.navigator.product +
    "<br>" +
    "Product Sub =" +
    window.navigator.productSub +
    "<br>" +
    "screen =" +
    window.screen +
    "<br>" +
    "History =" +
    window.history +
    "<br>" +
    window.navigator.language;
}
homepage();

sidebarLi[1].addEventListener("click", textContent);
function textContent(e) {
  e.preventDefault();
  const home_content = document.getElementById("demoText");
}

const homeFb = document.getElementById("facebook");
sidebarLi[3].addEventListener("click", jsWindow);

function jsWindow(e) {
  e.preventDefault();
  homeFb.innerHTML = "Facebook";
}

homeFb.addEventListener("click", facebookBtn);

function facebookBtn() {
  window.open("https://www.facebook.com", "about", "height=600,width=800");

  setTimeout(() => {
    facebookBtn.resizeTo(600, 300);
  }, 3000);
}
