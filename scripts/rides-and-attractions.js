/**
 * Script for the rides & attractions page.
 */

/**
 * DOM Elements
 */
const raFilterCount = document.getElementById('ra__filter-count');
const raButtonAll = document.getElementById('ra__button-all');
const raButtonAttractions = document.getElementById('ra__button-attractions');
const raButtonDining = document.getElementById('ra__button-dining');
const raButtonResorts = document.getElementById('ra__button-resorts');
const raButtonShows = document.getElementById('ra__button-shows');
const raCardsContainer = document.getElementById('ra__cards-container');
const raButtonFilterMobile = document.getElementById('ra__button-filter-mobile');
const raFilterMobileSlider = document.getElementById('ra__filter-slider');
const raButtonFilterMobileClose = document.getElementById('ra__filter-slider-close-button');
const raButtonAllMobile = document.getElementById('ra__button-all-mobile');
const raButtonAttractionsMobile = document.getElementById('ra__button-attractions-mobile');
const raButtonDiningMobile = document.getElementById('ra__button-dining-mobile');
const raButtonResortsMobile = document.getElementById('ra__button-resorts-mobile');
const raButtonShowsMobile = document.getElementById('ra__button-shows-mobile');

/**
 * Array of each type of filter buttons
 */
const raFilterButtons = [
    [raButtonAll, raButtonAllMobile],
    [raButtonAttractions, raButtonAttractionsMobile],
    [raButtonDining, raButtonDiningMobile],
    [raButtonResorts, raButtonResortsMobile],
    [raButtonShows, raButtonShowsMobile],
];

/**
 * Map of various filter options
 */
const raFilterOption = {
    all: 'All',
    attractions: 'Attractions',
    dining: 'Dining',
    resorts: 'Resorts',
    shows: 'Shows'
}


/**
 * Gets the current filter
 */
const getCurrentFilter = () => {
    if (raButtonAttractions.classList.contains('ra__filter--on')) {
        return raFilterOption.attractions;
    } else if (raButtonDining.classList.contains('ra__filter--on')) {
        return raFilterOption.dining;
    } else if (raButtonResorts.classList.contains('ra__filter--on')) {
        return raFilterOption.resorts;
    } else if (raButtonShows.classList.contains('ra__filter--on')) {
        return raFilterOption.shows;
    } else {
        return raFilterOption.all;
    }
}

/**
 * Gets the filtered data
 */
const getFilteredData = () => {
    const currentFilter = getCurrentFilter();

    if (currentFilter === raFilterOption.attractions) {
        return raData.filter(card => card.category === raFilterOption.attractions);
    }

    if (currentFilter === raFilterOption.dining) {
        return raData.filter(card => card.category === raFilterOption.dining);
    }

    if (currentFilter === raFilterOption.resorts) {
        return raData.filter(card => card.category === raFilterOption.resorts);
    }

    if (currentFilter === raFilterOption.shows) {
        return raData.filter(card => card.category === raFilterOption.shows);
    }

    return raData;
}

/**
 * Sets the filtered data count text
 */
const setFilteredDataCountText = (count) => {
    if (count === 1) {
        raFilterCount.textContent = "1 result";
    } else {
        raFilterCount.textContent = `${count.toString()} results`;
    }
}

/**
 * Removes all on filter class from all the buttons
 */
const removeAllOnClassesFromButtons = () => {
    raButtonAll.classList.remove('ra__filter--on');
    raButtonAttractions.classList.remove('ra__filter--on');
    raButtonDining.classList.remove('ra__filter--on');
    raButtonResorts.classList.remove('ra__filter--on');
    raButtonShows.classList.remove('ra__filter--on');

    // mobile buttons
    raButtonAllMobile.classList.remove('ra__filter--on');
    raButtonAttractionsMobile.classList.remove('ra__filter--on');
    raButtonDiningMobile.classList.remove('ra__filter--on');
    raButtonResortsMobile.classList.remove('ra__filter--on');
    raButtonShowsMobile.classList.remove('ra__filter--on');
}

/**
 * Returns the DOM element of the passed card data
 */
const createCardDomElement = (card) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('ra__card');

    const cardInner = document.createElement('div');
    cardInner.classList.add('ra__card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('ra__card-front');

    const cardImage = document.createElement('img');
    cardImage.classList.add('ra__card-img');
    cardImage.src = card.img.src;
    cardImage.alt = card.img.alt;
    cardImage.width = 336;
    cardImage.height = 320;

    cardFront.appendChild(cardImage);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('ra__card-info');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('ra__card-head');
    cardTitle.textContent = card.title;
    cardInfo.appendChild(cardTitle);

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('p3');
    cardDescription.textContent = card.description;
    cardInfo.appendChild(cardDescription);

    cardFront.appendChild(cardInfo);

    const cardMoreButton = document.createElement('button');
    cardMoreButton.classList.add('ra__card-more-button');
    cardMoreButton.classList.add('ra__card-more-button-front');
    cardMoreButton.innerHTML = `
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>`;

    cardMoreButton.addEventListener('click', () => {
        // show front of all cards
        const cardsWithBackShowing = document.getElementsByClassName('ra__show-back');
        for (const cardWithBackShowing of cardsWithBackShowing) {
            cardWithBackShowing.classList.remove('ra__show-back');
        }

        cardInner.classList.add('ra__show-back');
    });

    cardFront.appendChild(cardMoreButton);
    cardInner.appendChild(cardFront);

    const cardBack = document.createElement('div');
    cardBack.classList.add('ra__card-back');

    const cardTitleBack = document.createElement('h5');
    cardTitleBack.classList.add('ra__card-head-back');
    cardTitleBack.textContent = card.title;
    cardBack.appendChild(cardTitleBack);

    const cardBackMore = document.createElement('p');
    cardBackMore.classList.add('p1');
    cardBackMore.textContent = card.more;

    cardBack.appendChild(cardBackMore);

    const cardBackButton = document.createElement('button');
    cardBackButton.classList.add('ra__card-more-button');
    cardBackButton.classList.add('ra__card-more-button-back');
    cardBackButton.innerHTML = `
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.5rem" width="1.5rem" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>`;

    cardBackButton.addEventListener('click', () => {
        // show front of all cards
        const cardsWithBackShowing = document.getElementsByClassName('ra__show-back');
        for (const cardWithBackShowing of cardsWithBackShowing) {
            cardWithBackShowing.classList.remove('ra__show-back');
        }
    })

    cardBack.appendChild(cardBackButton);
    cardInner.appendChild(cardBack);

    cardContainer.appendChild(cardInner);

    return cardContainer;
}

/**
 * Renders the filtered cards onto the DOM
 */
const renderFilteredCardsOntoTheDom = () => {
    const filteredData = getFilteredData();

    // update the filtered Data count text
    setFilteredDataCountText(filteredData.length);

    // clear the container
    raCardsContainer.innerHTML = '';

    // add each card onto the container
    for (const card of filteredData) {
        const cardElement = createCardDomElement(card);

        raCardsContainer.appendChild(cardElement);
    }
}

/**
 * Initially set the filtered data onto the DOM
 */
renderFilteredCardsOntoTheDom();


/**
 * Adds event listeners to the Filter buttons
 */
for (const [button, mobileButton] of raFilterButtons) {
    button.addEventListener('click', () => {
        // if filter already is selected, do nothing
        if (button.classList.contains('ra__filter--on')) {
            return;
        }

        // remove all on filters
        // spreading it to an array as this array changes as we remove the class
        const buttonsWithOn = [...document.getElementsByClassName('ra__filter--on')];
        for (const buttonWithOn of buttonsWithOn) {
            buttonWithOn.classList.remove('ra__filter--on');
        }

        // add on class
        button.classList.add('ra__filter--on');
        mobileButton.classList.add('ra__filter--on');

        // update card data
        renderFilteredCardsOntoTheDom();
    });

    mobileButton.addEventListener('click', () => {
        // if filter already is selected, do nothing
        if (mobileButton.classList.contains('ra__filter--on')) {
            return;
        }

        // remove all on filters
        // spreading it to an array as this array changes as we remove the class
        const buttonsWithOn = [...document.getElementsByClassName('ra__filter--on')];
        for (const buttonWithOn of buttonsWithOn) {
            buttonWithOn.classList.remove('ra__filter--on');
        }

        // add on class
        button.classList.add('ra__filter--on');
        mobileButton.classList.add('ra__filter--on');

        // update card data
        renderFilteredCardsOntoTheDom();
    });
}

/**
 * Add event listener to the mobile filter button
 */
raButtonFilterMobile.addEventListener('click', () => {
    raFilterMobileSlider.showModal();
    raFilterMobileSlider.classList.add('ra__filter-slider--active');
});

/**
 * Add event listener to the filter close button for mobile
 */
raButtonFilterMobileClose.addEventListener('click', () => {
    raFilterMobileSlider.close();
    raFilterMobileSlider.classList.remove('ra__filter-slider--active');
});
