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
      category = btn.childNodes[0].textContent.toLowerCase();
      this.filters[category] = this.filters[category] ? false : true;
    }
    if (
      btn.childNodes[SPAN_INDEX] &&
      btn.childNodes[SPAN_INDEX].classList.contains("link2")
    ) {
      btn.childNodes[SPAN_INDEX].classList.toggle("FilterOn");
      category = btn.childNodes[1].textContent.toLowerCase();
      this.filters[category] = this.filters[category] ? false : true;
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
      let cardImg = document.createElement("img");
      let cardInfo = document.createElement("div");
      let cardHead = document.createElement("h5");
      let cardBody = document.createElement("p");

      card.classList.add("Card");
      cardImg.classList.add("CardImg");
      cardInfo.classList.add("CardInfo");
      cardHead.classList.add("CardHead");
      cardBody.classList.add("CardBody");

      card.appendChild(cardImg);
      card.appendChild(cardInfo);
      cardInfo.appendChild(cardHead);
      cardInfo.appendChild(cardBody);

      cardImg.src = data.img.src;
      cardImg.alt = data.img.alt;
      cardHead.textContent = data.title;
      cardBody.textContent = data.description;

      card.dataset.category = data.category;

      cards.push(card);
    }
    return cards;
  };

  /* ****************************** */
  /* Filter cards and attach to DOM */
  /* ****************************** */

  filterCards = () => {
    let cards = this.createCards().filter((card) => {
      let type = card.dataset.category;
      if (Object.values(this.filters).every((card) => card == false))
        return true;
      return this.filters[type];
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
}

window.onload = function () {
  let c = new RidesAndExperiences(cardData);
  c.init();
};
