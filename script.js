const navList = document.getElementById("nav--list");
const navListItems = document.querySelectorAll(".nav--item");
const navMenu = document.querySelector(".nav--mobile-btn");

const button = document.querySelector(".btnup");
/* Treshold for scroll Y to make the "go back to top" button visible */
const threshold = 493;

const listPortfolio = document.querySelectorAll(".mosaique img");
const popup = document.querySelector(".popup-img");
const popupImage = document.querySelector(".popup-img img");
const rightBtn = document.querySelectorAll(".popup-img .rightButton");
const leftBtn = document.querySelectorAll(".popup-img .leftButton");
let classRef = "";

/* ____________________________________________ *\
    $MOBILE NAV MENU
\* ____________________________________________ */
const toggleNavMenu = function () {
  navMenu.classList.toggle("is-open");
  navList.classList.toggle("is-open");
};

navMenu.addEventListener("click", (event) => {
  toggleNavMenu();
});

navListItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (
      navMenu.classList.contains("is-open") ||
      navList.classList.contains("is-open")
    ) {
      toggleNavMenu();
    }
  });
});

/* ____________________________________________ *\
    $GO BACK TO TOP BUTTON
\* ____________________________________________ */
document.addEventListener("scroll", function () {
  if (window.scrollY > threshold) {
    button.classList.add("is-active");
  } else {
    button.classList.remove("is-active");
  }
});

/* ____________________________________________ *\
    $PORFOLIO SLIDER (DESKTOP)
\* ____________________________________________ */
listPortfolio.forEach((img) => {
  img.onclick = () => {
    popupImage.src = img.getAttribute("src");
    popup.classList.add("popup-on");
    classRef = img.className;
  };
});

rightBtn.forEach((tip) => {
  tip.onclick = () => {
    switch (classRef) {
      case "img1":
        popupImage.src = listPortfolio[1].getAttribute("src");
        classRef = listPortfolio[1].getAttribute("class");
        break;
      case "img2":
        popupImage.src = listPortfolio[2].getAttribute("src");
        classRef = listPortfolio[2].getAttribute("class");
        break;
      case "img3":
        popupImage.src = listPortfolio[3].getAttribute("src");
        classRef = listPortfolio[3].getAttribute("class");
        break;
      case "img4":
        popupImage.src = listPortfolio[4].getAttribute("src");
        classRef = listPortfolio[4].getAttribute("class");
        break;
      case "img5":
        popupImage.src = listPortfolio[5].getAttribute("src");
        classRef = listPortfolio[5].getAttribute("class");
        break;
      case "img6":
        popupImage.src = listPortfolio[6].getAttribute("src");
        classRef = listPortfolio[6].getAttribute("class");
        break;
      case "img7":
        popupImage.src = listPortfolio[7].getAttribute("src");
        classRef = listPortfolio[7].getAttribute("class");
        break;
      case "img8":
        popupImage.src = listPortfolio[8].getAttribute("src");
        classRef = listPortfolio[8].getAttribute("class");
        break;
      case "img9":
        popupImage.src = listPortfolio[0].getAttribute("src");
        classRef = listPortfolio[0].getAttribute("class");
        break;
      default:
        console.log("");
    }
  };
});

leftBtn.forEach((tip) => {
  tip.onclick = () => {
    switch (classRef) {
      case "img1":
        popupImage.src = listPortfolio[8].getAttribute("src");
        classRef = listPortfolio[8].getAttribute("class");
        break;
      case "img2":
        popupImage.src = listPortfolio[0].getAttribute("src");
        classRef = listPortfolio[0].getAttribute("class");
        break;
      case "img3":
        popupImage.src = listPortfolio[1].getAttribute("src");
        classRef = listPortfolio[1].getAttribute("class");
        break;
      case "img4":
        popupImage.src = listPortfolio[2].getAttribute("src");
        classRef = listPortfolio[2].getAttribute("class");
        break;
      case "img5":
        popupImage.src = listPortfolio[3].getAttribute("src");
        classRef = listPortfolio[3].getAttribute("class");
        break;
      case "img6":
        popupImage.src = listPortfolio[4].getAttribute("src");
        classRef = listPortfolio[4].getAttribute("class");
        break;
      case "img7":
        popupImage.src = listPortfolio[5].getAttribute("src");
        classRef = listPortfolio[5].getAttribute("class");
        break;
      case "img8":
        popupImage.src = listPortfolio[6].getAttribute("src");
        classRef = listPortfolio[6].getAttribute("class");
        break;
      case "img9":
        popupImage.src = listPortfolio[7].getAttribute("src");
        classRef = listPortfolio[7].getAttribute("class");
        break;
      default:
        console.log("");
    }
  };
});

popupImage.addEventListener("click", function () {
  popup.classList.remove("popup-on");
  classRef = "";
});
