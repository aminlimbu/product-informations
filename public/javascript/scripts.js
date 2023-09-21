// Select containers
// Create array of filters
const brandFilters = Array.from(document.querySelectorAll(".brand-filter"));
const channelFilters = Array.from(document.querySelectorAll(".channel-filter"));
const powerFilters = Array.from(document.querySelectorAll(".power-filter"));
const statusFilters = Array.from(document.querySelectorAll(".status-filter"));
const productContainers = document.querySelectorAll(".product-container");

// Toggle display of content, bootstrap class
function toggleVisibility(element, isVisible) {
    element.classList.toggle("d-none", !isVisible);
}

// Get (Filter), checked item's value from an array
function getCheckedItems(items) {
    return items
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
}

// Traverse all the inputs and and add eventlistener
brandFilters.forEach((filter) => {
    filter.addEventListener("change", () => {
        // Get all the selected brands
        // store returned value(s)(brand(s)) of checked items
        const selectedBrands = getCheckedItems(brandFilters);

        // updated product container with filtered items
        productContainers.forEach((cards) => {
            // get brand name from inut element
            const brandNames = cards.dataset.brand;
            // set boolean value according to list avalilable in selectedBrands
            const isVisible =
                selectedBrands.length === 0 ||
                selectedBrands.includes(brandNames);
            // Toggle visibility of card
            toggleVisibility(cards, isVisible);
        });
    });
});

// add eventlisteners to 'channel' inputs and update display
channelFilters.forEach((filters) => {
    filters.addEventListener("change", () => {
        // get selected channels
        const selectedChannels = getCheckedItems(channelFilters);
        // check and updated display styles
        productContainers.forEach((cards) => {
            const channels = cards.dataset.channels;
            const isVisible =
                selectedChannels.length === 0 ||
                selectedChannels.includes(channels);
            toggleVisibility(cards, isVisible);
        });
    });
});

// Filter power and display reults
powerFilters.forEach((filters) => {
    filters.addEventListener("change", () => {
        const selectedPowers = getCheckedItems(powerFilters);
        productContainers.forEach((cards) => {
            const powers = cards.dataset.power;
            const isVisible =
                selectedPowers.length === 0 || selectedPowers.includes(powers);
            toggleVisibility(cards, isVisible);
        });
    });
});

// Status Filter
statusFilters.forEach((filters) => {
    filters.addEventListener("change", () => {
        const selectedStaus = getCheckedItems(statusFilters);
        productContainers.forEach((cards) => {
            const status = cards.dataset.status;
            const isVisible =
                selectedStaus.length === 0 || selectedStaus.includes(status);
            toggleVisibility(cards, isVisible);
        });
    });
});

// Bootstrap 5 form validation; self-execution

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".bs-form-validate");

    // Loop over them and prevent submission
    Array.from(forms).forEach(function (form) {
        form.addEventListener(
            "change",
            function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();
