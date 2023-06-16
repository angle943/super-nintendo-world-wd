/**
 * Script for the header for smaller, non-desktop viewports.
 * Adds event listeners to the slider
 */

/**
 * DOM elements
 */
const headerSmallMenuOpenButton = document.getElementById('header-small__menu-button');
const headerSmallMenuCloseButton = document.getElementById('header-small__slider-close-button');
const headerSmallSlider = document.getElementById('slider');
const headerSmallTicketAndPassesButton = document.getElementById('header-small__tickets-and-passes-button');
const headerSmallPlanYourVisitButton = document.getElementById('header-small__plan-your-visit-button');
const headerSmallThingsToDoButton = document.getElementById('header-small__things-to-do-button');
const headerSmallShopNowButton = document.getElementById('header-small__shop-now-button');


// When clicking on the menu button, it should open the slider
headerSmallMenuOpenButton.addEventListener('click', () => {
    headerSmallSlider.showModal();
    headerSmallSlider.classList.add('header-small__slider--active');
});

// Clicking the close button when the menu is open
headerSmallMenuCloseButton.addEventListener('click', () => {
    headerSmallSlider.close();
    headerSmallSlider.classList.remove('header-small__slider--active');
});

/**
 * Add click event listeners to the menu group buttons
 */
headerSmallTicketAndPassesButton.addEventListener('click', () => {
    // remove other active class
    headerSmallPlanYourVisitButton.classList.remove('header-small__menu-group--active');
    headerSmallThingsToDoButton.classList.remove('header-small__menu-group--active');
    headerSmallShopNowButton.classList.remove('header-small__menu-group--active');

    headerSmallTicketAndPassesButton.classList.toggle('header-small__menu-group--active');
});
headerSmallPlanYourVisitButton.addEventListener('click', () => {
    // remove other active class
    headerSmallTicketAndPassesButton.classList.remove('header-small__menu-group--active');
    headerSmallThingsToDoButton.classList.remove('header-small__menu-group--active');
    headerSmallShopNowButton.classList.remove('header-small__menu-group--active');

    headerSmallPlanYourVisitButton.classList.toggle('header-small__menu-group--active');
});
headerSmallThingsToDoButton.addEventListener('click', () => {
    // remove other active class
    headerSmallTicketAndPassesButton.classList.remove('header-small__menu-group--active');
    headerSmallPlanYourVisitButton.classList.remove('header-small__menu-group--active');
    headerSmallShopNowButton.classList.remove('header-small__menu-group--active');

    headerSmallThingsToDoButton.classList.toggle('header-small__menu-group--active');
});
headerSmallShopNowButton.addEventListener('click', () => {
    // remove other active class
    headerSmallTicketAndPassesButton.classList.remove('header-small__menu-group--active');
    headerSmallPlanYourVisitButton.classList.remove('header-small__menu-group--active');
    headerSmallThingsToDoButton.classList.remove('header-small__menu-group--active');

    headerSmallShopNowButton.classList.toggle('header-small__menu-group--active');
});
