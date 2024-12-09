// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Add a hover effect to enlarge the card slightly
    document.querySelectorAll('.mbti-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            card.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            card.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });

    // Use event delegation to handle clicks on the card container
    document.querySelector('.mbti-grid-container').addEventListener('click', (event) => {
        const backButtonClicked = event.target.matches('.flip-back');
        const card = event.target.closest('.mbti-card');

        // If the "Back" button is clicked
        if (backButtonClicked) {
            const flippedCard = event.target.closest('.mbti-card');
            const frontContent = flippedCard.getAttribute('data-original-content');
            flippedCard.innerHTML = frontContent;
            flippedCard.classList.remove('flipped');
            return; // Stop further execution
        }

        // If a card is clicked and it's not already flipped
        if (card && !card.classList.contains('flipped')) {
            const originalContent = card.innerHTML;

            // Save the original content in a data attribute
            card.setAttribute('data-original-content', originalContent);

            // Replace content with the fun fact
            const personality = card.querySelector('h3').textContent;
            card.innerHTML = `
                <h3 style="font-size: 4rem; color: #333; margin-bottom: 10px; text-align: center;">A Fun Fact!</h3>
                <p style="font-size: 1.5rem; color: #333; line-height: 1.6; margin-bottom: 20px; text-align: justify;">
                    ${getFunFact(personality)}
                </p>
                <button class="flip-back" style="background-color: #eed3c2; color: #333; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 1.5rem; font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; transition: background-color 0.3s ease;">
                    Back
                </button>
            `;
            card.classList.add('flipped');
        }
    });

    // Function to generate random fun facts
    function getFunFact(personality) {
        const funFacts = {
            'INTJ - The Architect': 'INTJs often come up with long-term strategies no one else thought of.',
            'INTP - The Thinker': 'INTPs are known for their deep and abstract theories.',
            'ENTJ - The Commander': 'ENTJs often excel in leadership roles and are great at organizing.',
            'ENTP - The Debater': 'ENTPs thrive on debates and new perspectives.',
            'INFJ - The Advocate': 'INFJs are one of the rarest personality types in the world.',
            'INFP - The Mediator': 'INFPs often express themselves best through creative outlets.',
            'ENFJ - The Protagonist': 'ENFJs are natural mentors and inspire others effortlessly.',
            'ENFP - The Campaigner': 'ENFPs are full of energy and have a strong passion for life.',
            'ISTJ - The Inspector': 'ISTJs value responsibility and integrity above all else.',
            'ISFJ - The Defender': 'ISFJs are known for their unwavering dedication to helping others.',
            'ESTJ - The Executive': 'ESTJs thrive in structured environments and love organizing teams.',
            'ESFJ - The Consul': 'ESFJs are excellent at maintaining harmony in social settings.',
            'ISTP - The Virtuoso': 'ISTPs love working with their hands and exploring how things work.',
            'ISFP - The Adventurer': 'ISFPs have an eye for beauty and a love for adventure.',
            'ESTP - The Entrepreneur': 'ESTPs are quick decision-makers and thrive in high-energy settings.',
            'ESFP - The Entertainer': 'ESFPs are the life of the party and bring joy to those around them.',
        };

        return funFacts[personality] || 'This personality has something fascinating about it!';
    }
});
