import cardData from "./data.js";

class RidesAndExperiences {
  constructor(cardData) {
    this.cardData = cardData;
    this.filters = {
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
    let btnFilters = document.getElementsByClassName("BtnFilter");
    let btnFilterMain = document.querySelector(".BtnFilterMain");
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
    let btnFilters = document.querySelector(".BtnFilters");
    btnFilters.classList.toggle("Filters");
  };

  /* ********************************************************** */
  /* Highlight button, update filter object, call filter method */
  /* ********************************************************** */

  handleBtnFilter = (e) => {
    const SPAN_INDEX = 1;
    let { target: btn } = e;
    let category;

    btn.classList.toggle("FilterOn");

    // Handle span element inside button

    if (btn.classList.contains("link2")) {
      btn.parentNode.classList.toggle("FilterOn");
      category = btn.childNodes[0].textContent;
      this.filters[category] = !this.filters[category];
    }
    if (
      btn.childNodes[SPAN_INDEX] &&
      btn.childNodes[SPAN_INDEX].classList.contains("link2")
    ) {
      btn.childNodes[SPAN_INDEX].classList.toggle("FilterOn");
      category = btn.childNodes[1].textContent;
      this.filters[category] = !this.filters[category];
    }

    this.filterCards();
  };

  /* *********************** */
  /* Create card components. */
  /* *********************** */

  createCards = () => {
    let cards = [];
    for (let data of this.cardData) {
      let card = document.createElement("div");

      let cardFront = document.createElement("div");
      let cardFrontImg = document.createElement("img");
      let cardFrontInfo = document.createElement("div");
      let cardFrontHead = document.createElement("h5");
      let cardFrontBody = document.createElement("p");

      let cardBack = document.createElement("div");
      // let cardBackImg = document.createElement("img");
      let cardBackInfo = document.createElement("div");
      let cardBackHead = document.createElement("h5");
      let cardBackBody = document.createElement("p");

      card.classList.add("Card");

      cardFront.classList.add("CardFront");
      cardFrontImg.classList.add("CardFrontImg");
      cardFrontInfo.classList.add("CardFrontInfo");
      cardFrontHead.classList.add("CardFrontHead");
      cardFrontBody.classList.add("CardFrontBody");

      cardBack.classList.add("CardBack");
      // cardBackImg.classList.add("CardBackImg");
      cardBackInfo.classList.add("CardBackInfo");
      cardBackHead.classList.add("CardBackHead");
      cardBackBody.classList.add("CardBackBody");

      cardFront.appendChild(cardFrontImg);
      cardFront.appendChild(cardFrontInfo);
      cardFrontInfo.appendChild(cardFrontHead);
      cardFrontInfo.appendChild(cardFrontBody);

      // cardBack.appendChild(cardBackImg);
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
  /* Filter cards and attach to DOM */
  /* ****************************** */

  filterCards = () => {
    let isFilterOff = Object.values(this.filters).every(
      (filter) => filter == false
    );
    let cards = this.createCards().filter((card) => {
      let type = card.dataset.category;
      return isFilterOff || this.filters[type];
    });

    let cardContainer = document.querySelector(".CardsContainer");
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
    circle.classList.add(`Card${side}PlusIcon`);

    circle.addEventListener("click", () => {
      let card = circle.parentNode.parentNode.parentNode;
      card.classList.toggle("CardFlip");
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
