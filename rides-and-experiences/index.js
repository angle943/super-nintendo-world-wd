import cardData from "./data.js";

class RidesAndExperiences {
  constructor(cardData) {
    this.cardData = cardData;
    this.filters = {
      all: true,
      attractions: false,
      dining: false,
      resorts: false,
      shows: false,
    };
  }

  /* ********************** */
  /* Attach event listeners */
  /* ********************** */

  init = () => {
    let btnFilters = document.getElementsByClassName("btnFilter");
    let btnFilterMain = document.querySelector(".btnFilterMain");
    for (let btn of btnFilters) {
      btn.addEventListener("click", this.handleBtnFilter);
    }
    btnFilterMain.addEventListener("click", this.handleBtnFilterMain);
    this.filterCards();
  };

  /* ******************************************** */
  /* Toggle filter buttons visibility for mobile. */
  /* ******************************************** */

  handleBtnFilterMain = () => {
    let btnFilters = document.querySelector(".btnFilters");
    btnFilters.classList.toggle("filters");
  };

  /* ********************************************************** */
  /* Highlight button, update filter object, call filter method */
  /* ********************************************************** */

  handleBtnFilter = (e) => {
    let { target: btn } = e;
    let btnFilters = document.getElementsByClassName("btnFilter");

    // Clear buttons
    for (let btn of btnFilters) {
      if (btn.classList.contains("filterOn")) {
        btn.classList.remove("filterOn");
        this.filters[btn.dataset.filter] = false;
      }
    }
    btn.classList.add("filterOn");
    this.filters[btn.dataset.filter] = true;
    this.filterCards();
  };

  /* ********************************** */
  /* Filter and Create card components. */
  /* ********************************** */

  createCards = () => {
    let cards = [];
    for (let data of this.cardData) {
      if (!this.filters[data.category] && !this.filters.all) {
        continue;
      }
      let card = document.createElement("div");

      let cardFront = document.createElement("div");
      let cardFrontImg = document.createElement("img");
      let cardFrontInfo = document.createElement("div");
      let cardFrontHead = document.createElement("h5");
      let cardFrontBody = document.createElement("p");

      let cardBack = document.createElement("div");
      let cardBackInfo = document.createElement("div");
      let cardBackHead = document.createElement("h5");
      let cardBackBody = document.createElement("p");

      card.classList.add("card");

      cardFront.classList.add("cardFront");
      cardFrontImg.classList.add("cardFrontImg");
      cardFrontInfo.classList.add("cardFrontInfo");
      cardFrontHead.classList.add("cardFrontHead");
      cardFrontBody.classList.add("cardFrontBody");

      cardBack.classList.add("cardBack");
      cardBackInfo.classList.add("cardBackInfo");
      cardBackHead.classList.add("cardBackHead");
      cardBackBody.classList.add("cardBackBody");

      cardFront.appendChild(cardFrontImg);
      cardFront.appendChild(cardFrontInfo);
      cardFrontInfo.appendChild(cardFrontHead);
      cardFrontInfo.appendChild(cardFrontBody);

      cardBack.appendChild(cardBackInfo);
      cardBackInfo.appendChild(cardBackHead);
      cardBackInfo.appendChild(cardBackBody);

      cardFrontInfo.appendChild(this.plus("Front"));
      cardBackInfo.appendChild(this.plus("Back"));

      card.appendChild(cardFront);
      card.appendChild(cardBack);

      cardFrontImg.src = data.img.front.src;
      cardFrontImg.alt = data.img.front.alt;
      cardFrontHead.textContent = data.title.front;
      cardFrontBody.textContent = data.description.front;

      cardBackHead.textContent = data.title.back;
      cardBackBody.textContent = data.description.back;

      card.dataset.category = data.category;

      cards.push(card);
    }
    return cards;
  };

  /* ****************************** */
  /* Attach cards to DOM */
  /* ****************************** */

  filterCards = () => {
    let cards = this.createCards();

    let cardContainer = document.querySelector(".cardsContainer");
    let result = document.querySelector(".pFilter");
    let result2 = document.querySelector(".pFilter2");
    cardContainer.innerHTML = "";
    for (let card of cards) {
      cardContainer.appendChild(card);
    }
    result.textContent = cards.length + " results";
    result2.textContent = cards.length + " results";
  };

  plus = (side) => {
    let circle = document.createElement("button");
    circle.classList.add(`card${side}PlusIcon`);

    circle.addEventListener("click", () => {
      let card = circle.parentNode.parentNode.parentNode;
      card.classList.toggle("cardFlip");
    });
    circle.ariaLabel = "See more";
    return circle;
  };
}

window.onload = function () {
  let c = new RidesAndExperiences(cardData);
  c.init();
};

//
