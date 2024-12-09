document.addEventListener("DOMContentLoaded", () => {
    // hover effect
    document.querySelectorAll(".match-card").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            card.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "scale(1)";
            card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        });
    });


    // shuffle cards
    const shuffleButton = document.createElement("button");
    shuffleButton.textContent = "Shuffle";
    shuffleButton.style.cssText = `
        background-color: #eed3c2; 
        color: #333; 
        border: none; 
        padding: 10px 20px; 
        border-radius: 5px; 
        cursor: pointer; 
        font-size: 1.8rem; 
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
        transition: background-color 0.3s ease;
        display: block;
        margin: 20px auto;
    `;
    document.querySelector("main").insertAdjacentElement("beforebegin", shuffleButton);

    shuffleButton.addEventListener("click", () => {
        const gridContainer = document.querySelector(".match-grid-container");
        const cards = Array.from(gridContainer.children);

        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        cards.forEach((card) => gridContainer.appendChild(card));
    });

    
    
});
