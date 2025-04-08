// Script for the cover image that changes every 5 seconds
var activateCoverId = 1;

var nextCoverId = 1;

setInterval(function() {
    nextCoverId = nextCoverId + 1;

    if (nextCoverId < 7) {

        document.getElementById("c"+activateCoverId).classList.replace("visible", "hidden");
        document.getElementById("c"+nextCoverId).classList.replace("hidden", "visible");

        activateCoverId = nextCoverId;

    } else {

        document.getElementById("c"+activateCoverId).classList.replace("visible", "hidden");
        document.getElementById("c"+nextCoverId).classList.replace("hidden", "visible");

        activateCoverId = 7;
        nextCoverId = 0;

    }
}, 5000);

// Selection Script
