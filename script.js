
function changeHeading() {
    document.getElementById("mainheading").textContent =
        "Let's Make Campus Life Exciting!";
}

function changeCardColor() {
    const cards = document.querySelectorAll(".event-card");

    cards.forEach(function(card) {
        card.style.backgroundColor = "#ffe0b2";
    });
}

function toggleHighlights() {
    document.getElementById("highlights").classList.toggle("hidden");
}