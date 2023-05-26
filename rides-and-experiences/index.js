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
    this.previousFilterState = {
      ...this.filters,
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
    let dialog = document.querySelector(".slider");
    let btnDialogClose = document.querySelector(".btnDialogClose");
    let btnDialogResults = document.querySelector(".btnDialogResults");

    dialog.classList.add("sliderActive");
    dialog.showModal();
    this.previousFilterState = { ...this.filters };

    // Reset button states
    btnDialogClose.addEventListener("click", () => {
      dialog.classList.remove("sliderActive");
      this.filters = { ...this.previousFilterState };

      for (let key of Object.keys(this.filters)) {
        if (!this.filters[key]) {
          document
            .querySelector(`[data-filter='${key}']`)
            .classList.remove("filterOn");
        } else {
          document
            .querySelector(`[data-filter='${key}']`)
            .classList.add("filterOn");
        }
      }
      this.filterCards();

      // Prevents dialog window from being underneath card on close
      setTimeout(() => {
        dialog.close();
      }, 200);
    });

    btnDialogResults.addEventListener("click", () => {
      dialog.classList.remove("sliderActive");
      this.filterCards();

      setTimeout(() => {
        dialog.close();
      }, 200);
    });
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
      let cardFrontBottomContainer = document.createElement("div");
      let cardFrontHead = document.createElement("h3");
      let cardFrontBody = document.createElement("p");

      let cardBack = document.createElement("div");
      let cardBackInfo = document.createElement("div");
      let cardBackBottomContainer = document.createElement("div");
      let cardBackHead = document.createElement("h3");
      let cardBackBody = document.createElement("p");

      card.classList.add("card");

      cardFront.classList.add("cardFront");
      cardFrontImg.classList.add("cardFrontImg");
      cardFrontInfo.classList.add("cardFrontInfo");
      cardFrontBottomContainer.classList.add("cardFrontBottomContainer");
      cardFrontHead.classList.add("cardFrontHead");
      cardFrontBody.classList.add("cardFrontBody");

      cardBack.classList.add("cardBack");
      cardBackInfo.classList.add("cardBackInfo");
      cardBackBottomContainer.classList.add("cardBackBottomContainer");
      cardBackHead.classList.add("cardBackHead");
      cardBackBody.classList.add("cardBackBody");

      cardFrontInfo.appendChild(cardFrontImg);
      cardFront.appendChild(cardFrontInfo);
      // cardFrontInfo.appendChild(cardFrontHead);
      // cardFrontInfo.appendChild(cardFrontBody);
      cardFrontInfo.appendChild(cardFrontBottomContainer);
      cardFrontBottomContainer.appendChild(cardFrontHead);
      cardFrontBottomContainer.appendChild(cardFrontBody);

      cardBack.appendChild(cardBackInfo);
      // cardBackInfo.appendChild(cardBackHead);
      // cardBackInfo.appendChild(cardBackBody);
      cardBackInfo.appendChild(cardBackBottomContainer);
      cardBackBottomContainer.appendChild(cardBackHead);
      cardBackBottomContainer.appendChild(cardBackBody);

      // cardFrontInfo.appendChild(this.plus("Front"));
      // cardBackInfo.appendChild(this.plus("Back"));
      cardFrontBottomContainer.appendChild(this.plus("Front"));
      cardBackBottomContainer.appendChild(this.plus("Back"));

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
      let card = circle.parentNode.parentNode.parentNode.parentNode;
      card.classList.toggle("cardFlip");
    });

    circle.innerHTML = side == "Back" ? circleMinusIcon() : circlePlusIcon();
    circle.ariaLabel = side == "Back" ? "See less" : "See more";
    return circle;
  };
}

window.onload = function () {
  let c = new RidesAndExperiences(cardData);
  c.init();
};

//
let circlePlusIcon = () => {
  return `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>`;
};

let circleMinusIcon = () => {
  return `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
<line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>`;
};
