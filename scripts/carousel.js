/**
 * Script for the carousel used in the home page.
 */


/**
 * DOM selectors
 */
const carouselEl = document.getElementById('carousel');
const carouselLeftButton = document.getElementById('carousel__chevron-left');
const carouselRightButton = document.getElementById('carousel__chevron-right');
const carouselDotContainer = document.getElementById('carousel__dot-container');

const carouselDotActiveClassName = 'carousel__dot--active';
const carouselDots = carouselDotContainer.children;

// carousel timer
const carouselInitialTimer = 6;
let carouselTimer = carouselInitialTimer;


/**
 * resets the carouselTimer
 */
const resetCarouselTimer = () => {
    carouselTimer = carouselInitialTimer;
}


/**
 * determine which carousel is active. Returns 0, 1, or 2
 */
const getActiveCarouselIndex = () => {
    for (let i = 0; i < carouselDots.length; i++) {
        const dot = carouselDots[i];

        if (dot.classList.contains(carouselDotActiveClassName)) {
            return i;
        }
    }

    // Default to returning the 0th index
    return 0;
}

/**
 * updates the DOM elements depending on which carousel you want to go to
 * param can be 0, 1, 2
 */
const updateDomWithNewCarouselIndex = (newIndex) => {
    // remove index classes from carousel
    carouselEl.classList.remove('carousel--0');
    carouselEl.classList.remove('carousel--1');
    carouselEl.classList.remove('carousel--2');

    // update carousel with new class
    carouselEl.classList.add(`carousel--${newIndex}`);

    // update each of the dots
    for (let i = 0; i < carouselDots.length; i++) {
        const dot = carouselDots[i];

        if (newIndex === i) {
            dot.classList.add(carouselDotActiveClassName);
        } else {
            dot.classList.remove(carouselDotActiveClassName);
        }
    }

    // update disabled status of the chevrons
    // update both to not be disabled, then disable accordingly
    carouselLeftButton.disabled = false;
    carouselRightButton.disabled = false;

    if (newIndex === 0) {
        carouselLeftButton.disabled = true;
    } else if (newIndex === 2) {
        carouselRightButton.disabled = true;
    }

    resetCarouselTimer();
}

/**
 * Add click event listeners to the chevron arrows
 */
carouselLeftButton.addEventListener('click', () => {
    const activeIndex = getActiveCarouselIndex();

    // do nothing if we are on the leftmost index;
    if (activeIndex === 0) {
        return;
    }

    updateDomWithNewCarouselIndex(activeIndex - 1)
});

carouselRightButton.addEventListener('click', () => {
    const activeIndex = getActiveCarouselIndex();
    // do nothing if we are on the rightmost index;
    if (activeIndex === 2) {
        return;
    }

    updateDomWithNewCarouselIndex(activeIndex + 1)
});


/**
 * Add click event listeners to the dots
 */
for (let i = 0; i < carouselDots.length; i++) {
    const dot = carouselDots[i];

    dot.addEventListener('click', () => {
        // if clicked dot is active, do nothing
        const activeIndex = getActiveCarouselIndex();
        if (activeIndex === i) {
            return;
        }

        updateDomWithNewCarouselIndex(i);
    })
}


// Decrease carouselTimer every second;
setInterval(() => {
    carouselTimer--;
}, 1000);

// every 100 millisecond check if carouselTimer went to or below 0,
// and update carousel if so
setInterval(() => {
    if (carouselTimer <= 0) {
        const activeIndex = getActiveCarouselIndex();

        if (activeIndex === 2) {
            updateDomWithNewCarouselIndex(0);
        } else {
            updateDomWithNewCarouselIndex(activeIndex + 1);
        }
    }
}, 100);
