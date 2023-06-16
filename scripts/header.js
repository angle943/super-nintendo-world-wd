/**
 * Script for the header. Adds event listeners to the popover
 */

// selectors for the popover buttons and popover dialog element
const headerTicketAndPassesButton = document.getElementById('popover-button-ticket-and-passes');
const headerTicketAndPassesPopover = document.getElementById('popover-ticket-and-passes');
const headerPlanYourVisitButton = document.getElementById('popover-button-plan-your-visit');
const headerPlanYourVisitPopover = document.getElementById('popover-plan-your-visit');
const headerThingsToDoButton = document.getElementById('popover-button-things-to-do');
const headerThingsToDoPopover = document.getElementById('popover-things-to-do');
const headerShopNowButton = document.getElementById('popover-button-shop-now');
const headerShopNowPopover = document.getElementById('popover-shop-now');

// grouping them into arrays so that we don't need to repeat code
// when adding event listeners
const headerButtonAndPopovers = [
    [headerTicketAndPassesButton, headerTicketAndPassesPopover],
    [headerPlanYourVisitButton, headerPlanYourVisitPopover],
    [headerThingsToDoButton, headerThingsToDoPopover],
    [headerShopNowButton, headerShopNowPopover]
]

// iterate through buttonAndPopovers and add event listeners
for (const [button, popover] of headerButtonAndPopovers) {

    // clicking on button opens the popover
    button.addEventListener('click', () => {
        popover.showModal();
    });

    // add event listeners to the popovers such that when they are open and clicked on the overlay,
    // the popover closes
    popover.addEventListener('click', (event) => {
        if (!popover.open) return;

        const popoverRect = popover.getBoundingClientRect();
        const clickIsOutsidePopover =
            event.clientY < popoverRect.top ||
            event.clientY > popoverRect.bottom ||
            event.clientX < popoverRect.left ||
            event.clientX > popoverRect.right;

        if (clickIsOutsidePopover) {
            popover.close();
        }
    });
}
