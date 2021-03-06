﻿// Highlight row after clicking it
let preEl;
let orgBColor;
let orgTColor;
function HighLightTR(el, backColor) {
    let row = document.getElementById(el);
    if (backColor == "#d25dbb") {
        orgBColor = row.bgColor;
        orgTColor = row.style.color;
        row.bgColor = backColor;
        preEl = row
    } else if (typeof (preEl) != 'undefined') {
        preEl.bgColor = orgBColor;
    }
}

// Return all rows to their original color.
function returnRowsToOriginalColor() {
    let listLayer = planesMap.values();
    for (let layer of listLayer) {
        let id = layer.layerID;
        let isIn = id.indexOf("@");
        if (isIn == -1) {
            HighLightTR(id, '#fff');
        }
    }
}

function showChosenFlight(idFlight) {
    // When click on row of flight - change color.
    returnRowsToOriginalColor();
    HighLightTR(idFlight, '#d25dbb');
    getFlightPlan(idFlight);

    // Get plane from map and change its color.
    returnPlanesToOriginalColor();
    let layer = planesMap.get(idFlight);
    let layer1 = planesMap.get(idFlight + "@");

    changePlaneColor(layer, layer1);
}

function removeShownChosenFlight(idFlight) {
    // Remove flight details.
    removeFlightDetails();
    mark = 0;
    // Change row color back.
    HighLightTR(idFlight, '#fff');
    // Remove flight route.
    removeRoute();

}