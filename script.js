const listPortfolio = document.querySelectorAll(".mosaique img");
const popup = document.querySelector(".popup-img");
const popupImage = document.querySelector(".popup-img img");
const rightBtn = document.querySelectorAll(".popup-img .rightButton");
const leftBtn = document.querySelectorAll(".popup-img .leftButton");
let classRef = "";

listPortfolio.forEach((img) => {
  img.onclick = () => {
    popupImage.src = img.getAttribute("src");
    popup.classList.toggle("popup-on");
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
  popup.classList.toggle("popup-on");
  classRef = "";
});
