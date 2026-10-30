/// this script will delete all cards when the user clicks on them and shows information eg "standard AV production"
//  will display information about what standard AV production is and how it will be used for this brief."
document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector(".content");
    
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", function() {
            cards.forEach(c => c.remove());
        });
    });
    // add information once cards is deleted
    cards.forEach(card => {
        card.addEventListener("click", function() {
            // Create a new paragraph element with information
            const info = document.createElement("p");
            const id = card.querySelector(".card-content").id;
            if (id === "LO1") {
                info.textContent = "This is information about standard AV production and how it will be used for this brief.";
            } else if (id === "LO2") {
                info.textContent = "This is information about applied AV production and how it will be used for this brief.";
            }
            // Append the information to the content container
            content.appendChild(info);
        });
    });
}); 
