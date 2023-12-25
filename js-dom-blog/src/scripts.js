// Document body default style
const body = document.body;
body.style.boxSizing= 'border-box';
body.style.backgroundColor = '#F8F8FF';
body.style.fontFamily = 'sans-serif';
body.style.margin = '0 auto';
body.style.padding = '10px 0';
body.style.maxWidth = '100%';
body.style.width = '760px';
body.style.lineHeight = '28px';


// header Section
function headerElement() {
  // create a new div element
  const headerDiv = document.createElement("header");
  
  headerDiv.style.margin = '0 auto';
  headerDiv.style.maxWidth = '100%';
  headerDiv.style.width = '760px';
  headerDiv.style.maxHeight = '80px';
  headerDiv.style.overflow = 'hidden';
  headerDiv.style.backgroundColor = '#fff';
  headerDiv.style.padding = '10px 20px';
  //headerDiv.style.display = 'flex';
  

// header logo setup
  const headerImg = document.createElement("img");
  headerImg.src = "src/js.png";
  headerImg.style.width = "50px";
  headerImg.style.height = "50px";


  // add the header Image to header
  headerDiv.appendChild(headerImg);

  // add another div area for the menu
  const menuDiv = document.createElement("div");
  menuDiv.style.float = "right";
  // add this div after the header image tag
  headerImg.after(menuDiv);
  const menuUl = document.createElement("ul");
  menuUl.style.display = "flex";
  menuDiv.appendChild(menuUl);
  const menuLi1 = document.createElement("li");
  const menuLi2 = document.createElement("li");
  const menuLi3 = document.createElement("li");
  const menuLi4 = document.createElement("li");
  menuUl.appendChild(menuLi1);
  menuLi1.after(menuLi2);
  menuLi2.after(menuLi3);
  menuLi3.after(menuLi4);

  // add menu list text
  menuLi1.innerText = "Home";
  menuLi2.innerText = "About";
  menuLi3.innerText = "Service";
  menuLi4.innerText = "Contact";

  // add menu list style

  menuLi1.style.fontSize = "20px";
  menuLi1.style.listStyle = "none";
  menuLi1.style.margin = "0 15px";

  menuLi2.style.fontSize = "20px";
  menuLi2.style.listStyle = "none";
  menuLi2.style.margin = "0 15px";

  menuLi3.style.fontSize = "20px";
  menuLi3.style.listStyle = "none";
  menuLi3.style.margin = "0 15px";

  menuLi4.style.fontSize = "20px";
  menuLi4.style.listStyle = "none";
  menuLi4.style.margin = "0 15px";

  // add the newly created element and its content into the DOM
  const mainSection = document.getElementById("main_section");
  document.body.insertBefore(headerDiv, mainSection);
}
headerElement();


// main content section

function mainContent() {
    const mainSection = document.getElementById("main_section");
    mainSection.style.display= "flex";
    mainSection.style.backgroundColor= "white";
    mainSection.style.width= "760px";
    const mainContentDiv1 = document.createElement("div");
    const mainContentDiv2 = document.createElement("div");
    mainSection.appendChild(mainContentDiv1);
    mainContentDiv1.style.width = "48%";
    mainContentDiv1.style.marginRight = "20px";
    mainSection.appendChild(mainContentDiv2);
    mainContentDiv2.style.width = "48%";

    mainSection.style.padding = "30px 20px";

    const mainContentH4 = document.createElement("h4");
    mainContentDiv1.appendChild(mainContentH4);
    mainContentH4.innerText ="Welcome to";
    mainContentH4.style.margin= "0";

    mainContentH4.style.color = "#555";

    const mainContentH2 = document.createElement("h2");
    mainContentDiv1.appendChild(mainContentH2);
    mainContentH2.innerText ="JavaScript DOM";
    mainContentH2.style.marginTop= "4px";

    const mainContentP = document.createElement("P");
    mainContentDiv1.appendChild(mainContentP);
    mainContentP.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid saepe officia rem quae, voluptatibus optio aliquam mollitia amet? Architecto cumque qui dolorem tempore illo, quas id repudiandae voluptatem ab!";

    const mainContentBtn = document.createElement("button");
    mainContentDiv1.appendChild(mainContentBtn);
    mainContentBtn.innerText = "Get Started";
    mainContentBtn.style.marginRight = "20px";
    mainContentBtn.style.fontWeight = "bold";
    mainContentBtn.style.padding = "8px";
    mainContentBtn.style.cursor = "pointer";

    const mainContentA = document.createElement("a");
    mainContentDiv1.appendChild(mainContentA);
    mainContentA.innerText = "Learn More";
    mainContentA.style.color = "darkblue";
    mainContentA.style.cursor = "pointer";


    const mainContentImg = document.createElement("img");
    mainContentDiv2.appendChild(mainContentImg);
    mainContentImg.src = "src/js_content.jpg";
    mainContentImg.style.height = "auto";
    mainContentImg.style.width = "100%";
    mainContentImg.style.marginTop = "20px";

}
mainContent();