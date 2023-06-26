/**
 * Script for the tickets page.
 */

/**
 * DOM Elements
 */
const ticketsSectionSelectTicket = document.getElementById('tickets__section-select-ticket');
const ticketsSectionNumberOfTickets = document.getElementById('tickets__section-number-of-tickets');
const ticketsSectionContinue = document.getElementById('tickets__section-continue');
const ticketsDailyTicket = document.getElementById('tickets__daily-ticket');
const ticketsVipTicket = document.getElementById('tickets__vip-ticket');
const ticketsAgesThreeToNine = document.getElementById('tickets__AgesThreeToNine');
const ticketsAgesTenPlus = document.getElementById('tickets__AgesTenPlus');
const ticketsThreeToNineMinusButton = ticketsAgesThreeToNine.children[0];
const ticketsThreeToNineNumberText = ticketsAgesThreeToNine.children[1];
const ticketsThreeToNinePlusButton = ticketsAgesThreeToNine.children[2];
const ticketsTenPlusMinusButton = ticketsAgesTenPlus.children[0];
const ticketsTenPlusNumberText = ticketsAgesTenPlus.children[1];
const ticketsTenPlusPlusButton = ticketsAgesTenPlus.children[2];


/**
 * Handles toggling of the selected ticket's checkmark
 * ticketTypeEl is either ticketsDailyTicket or ticketsVipTicket
 */
const handleTicketTypeCheckmarkToggle = (ticketTypeEl) => {
    const checkmarkEl = ticketTypeEl.children[0];
    checkmarkEl.classList.toggle('tickets__check-icon--visible')
}


/**
 * Add Event listeners to the Select Tickets section
 */
ticketsDailyTicket.addEventListener('click', () => {

    // unselect it if it was selected already
    if (ticketsDailyTicket.classList.contains('tickets__ticket-card--selected')) {
        ticketsDailyTicket.classList.remove('tickets__ticket-card--selected');
        handleTicketTypeCheckmarkToggle(ticketsDailyTicket);
        handleHideNumberOfTicketsSection();
        return;
    }

    // Unselect other ticket type if it was selected
    if (ticketsVipTicket.classList.contains('tickets__ticket-card--selected')) {
        ticketsVipTicket.classList.remove('tickets__ticket-card--selected');
        handleTicketTypeCheckmarkToggle(ticketsVipTicket);
    }

    // select the ticket
    ticketsDailyTicket.classList.add('tickets__ticket-card--selected');
    handleTicketTypeCheckmarkToggle(ticketsDailyTicket);

    // show the next section if it is not visible
    if (ticketsSectionNumberOfTickets.classList.contains('tickets__form-section--hidden')) {
      handleMakeVisibleNumberOfTicketsSection();
    }
});
ticketsVipTicket.addEventListener('click', () => {

    // unselect it if it was selected already
    if (ticketsVipTicket.classList.contains('tickets__ticket-card--selected')) {
        ticketsVipTicket.classList.remove('tickets__ticket-card--selected');
        handleTicketTypeCheckmarkToggle(ticketsVipTicket);
        handleHideNumberOfTicketsSection();
        return;
    }

    // Unselect other ticket type if it was selected
    if (ticketsDailyTicket.classList.contains('tickets__ticket-card--selected')) {
        ticketsDailyTicket.classList.remove('tickets__ticket-card--selected');
        handleTicketTypeCheckmarkToggle(ticketsDailyTicket);
    }

    // select the ticket
    ticketsVipTicket.classList.add('tickets__ticket-card--selected');
    handleTicketTypeCheckmarkToggle(ticketsVipTicket);

    // show the next section if it is not visible
    if (ticketsSectionNumberOfTickets.classList.contains('tickets__form-section--hidden')) {
      handleMakeVisibleNumberOfTicketsSection();
    }
});

/**
 * Handle smooth scrolling to the DOM element
 * Takes in a DOM element as an argument
 */
const scrollToTheElement = (el) => {
    const top = el.offsetTop;
    // subtracting 100 so that we account for the header
    window.scrollTo({ top: top - 100, behavior: 'smooth'});
}

/**
 * Makes the Number of Tickets Section visible
 */
const handleMakeVisibleNumberOfTicketsSection = () => {
    ticketsSectionNumberOfTickets.classList.remove('tickets__form-section--hidden');
    ticketsSectionNumberOfTickets.classList.add('tickets__form-section--animate');
    scrollToTheElement(ticketsSectionNumberOfTickets);
}

/**
 * Hides the Number of Tickets Section
 */
const handleHideNumberOfTicketsSection = () => {
    ticketsSectionNumberOfTickets.classList.add('tickets__form-section--hidden');
    ticketsSectionNumberOfTickets.classList.remove('tickets__form-section--animate');
    handleHideContinueSection(true);

    // reset the number of tickets selected
    ticketsThreeToNineNumberText.textContent = "0";
    ticketsTenPlusNumberText.textContent = "0";

    scrollToTheElement(ticketsSectionSelectTicket);
}

/**
 * Makes the Continue Section visible
 */
const handleMakeVisibleContinueSection = () => {
    ticketsSectionContinue.classList.remove('tickets__form-section--hidden');
    ticketsSectionContinue.classList.add('tickets__form-section--animate');
}

/**
 * Hides the Continue Section
 * optionally takes in a parameter to not scroll
 */
const handleHideContinueSection = (doNotScroll = false) => {
    ticketsSectionContinue.classList.add('tickets__form-section--hidden');
    ticketsSectionContinue.classList.remove('tickets__form-section--animate');
    if (!doNotScroll) {
      scrollToTheElement(ticketsSectionNumberOfTickets);
    }
}

/**
 * Gets the total number of tickets selected
 */
const getTotalNumberOfTickets = () => {
    return parseInt(ticketsThreeToNineNumberText.textContent) + parseInt(ticketsTenPlusNumberText.textContent);
}

/**
 * Adds event listener to Ages Three to Nine buttons
 */
ticketsThreeToNineMinusButton.addEventListener('click', () => {
    // if number is at 0, do nothing
    if (parseInt(ticketsThreeToNineNumberText.textContent) <= 0) {
        return;
    }

    // enable the plus button
    ticketsThreeToNinePlusButton.classList.remove('tickets__number-of-tickets-button--disabled');

    const newValue = parseInt(ticketsThreeToNineNumberText.textContent) - 1;
    ticketsThreeToNineNumberText.textContent = newValue.toString();

    // if number is at 0, disable the minus button
    if (newValue <= 0) {
        ticketsThreeToNineMinusButton.classList.add('tickets__number-of-tickets-button--disabled');
    }

    // if total number of tickets is 0, hide the continue section
    if (getTotalNumberOfTickets() <= 0) {
        handleHideContinueSection();
    }
});
ticketsThreeToNinePlusButton.addEventListener('click', () => {
    // if number is at 10, do nothing
    if (parseInt(ticketsThreeToNineNumberText.textContent) >= 10) {
        return;
    }

    // enable the minus button
    ticketsThreeToNineMinusButton.classList.remove('tickets__number-of-tickets-button--disabled');

    const newValue = parseInt(ticketsThreeToNineNumberText.textContent) + 1;
    ticketsThreeToNineNumberText.textContent = newValue.toString();

    // if number is at 10, disable the plus button
    if (newValue >= 10) {
        ticketsThreeToNinePlusButton.classList.add('tickets__number-of-tickets-button--disabled');
    }

    // if total number of tickets is greater than 10, show the continue section
    if (getTotalNumberOfTickets() >= 0) {
        handleMakeVisibleContinueSection();
    }
});

/**
 * Adds event listener to Ages Ten Plus buttons
 */
ticketsTenPlusMinusButton.addEventListener('click', () => {
    // if number is at 0, do nothing
    if (parseInt(ticketsTenPlusNumberText.textContent) <= 0) {
        return;
    }

    // enable the plus button
    ticketsTenPlusPlusButton.classList.remove('tickets__number-of-tickets-button--disabled');

    const newValue = parseInt(ticketsTenPlusNumberText.textContent) - 1;
    ticketsTenPlusNumberText.textContent = newValue.toString();

    // if number is at 0, disable the minus button
    if (newValue <= 0) {
        ticketsTenPlusMinusButton.classList.add('tickets__number-of-tickets-button--disabled');
    }

    // if total number of tickets is 0, hide the continue section
    if (getTotalNumberOfTickets() <= 0) {
        handleHideContinueSection();
    }
});
ticketsTenPlusPlusButton.addEventListener('click', () => {
    // if number is at 10, do nothing
    if (parseInt(ticketsTenPlusNumberText.textContent) >= 10) {
        return;
    }

    // enable the minus button
    ticketsTenPlusMinusButton.classList.remove('tickets__number-of-tickets-button--disabled');

    const newValue = parseInt(ticketsTenPlusNumberText.textContent) + 1;
    ticketsTenPlusNumberText.textContent = newValue.toString();

    // if number is at 10, disable the plus button
    if (newValue >= 10) {
        ticketsTenPlusPlusButton.classList.add('tickets__number-of-tickets-button--disabled');
    }

    // if total number of tickets is greater than 10, show the continue section
    if (getTotalNumberOfTickets() >= 0) {
        handleMakeVisibleContinueSection();
    }
});

