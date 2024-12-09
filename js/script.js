// Select all cards
var cards = document.querySelectorAll('.card');

// Add hover effect to each card
cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        // Apply a dynamic scale effect and rotation
        card.style.transform = 'scale(1.1) rotate(2deg)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
        // Reset the card's transformation
        card.style.transform = 'scale(1) rotate(0)';
    });
});

// Hover effect for cards (same as above)
var cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1) rotate(2deg)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1) rotate(0)';
    });
});

// Random MBTI fact feature
const facts = [
    "INTJs are sometimes called 'The Architects' because of their ability to design and execute complex plans.",
    "ENFPs are known as 'The Campaigners' due to their enthusiasm and boundless energy in social settings.",
    "INFJs are natural counselors and are often described as 'The Advocates' for their empathy and deep insights.",
    "ESTPs love to live in the moment, earning them the nickname 'The Entrepreneurs'.",
    "ISFPs are known as 'The Artists', often appreciating beauty and creativity in everything they do.",
    "ENTPs are famous for their quick wit and problem-solving skills, making them 'The Visionaries'.",
    "ISTPs are adventurous and resourceful, often excelling as 'The Craftsmen' in hands-on tasks.",
    "ESFJs are called 'The Caregivers' because of their nurturing and harmonious nature.",
    "INFPs are idealistic and empathetic, often referred to as 'The Dreamers' or 'The Mediators'.",
    "ESTJs are natural leaders and organizers, earning the title 'The Executives'.",
    "ISFJs value tradition and loyalty, making them 'The Defenders' in relationships and communities.",
    "ENTJs are highly driven and organized, often labeled 'The Commanders' for their strategic thinking.",
    "ENFJs are charismatic and inspiring, known as 'The Protagonists' for their ability to lead with heart.",
    "INTPs are intellectual explorers and are often referred to as 'The Thinkers' or 'The Logicians'.",
    "ESFPs bring fun and energy to every situation, commonly known as 'The Entertainers'.",
    "ISFPs often express themselves through art, earning them the nickname 'The Adventurers'.",
    "ISTJs have a strong sense of duty and responsibility, making them 'The Inspectors' in many situations.",
    "ENFPs are known for their love of novelty and exploration, thriving in creative environments.",
    "INFJs are so rare that they make up less than 2% of the global population.",
    "ENTPs often thrive in debates and brainstorming sessions because of their quick thinking.",
    "INFPs are highly imaginative and are often drawn to writing, poetry, or creative arts.",
    "ESTJs often excel in management roles because of their natural ability to organize people and processes.",
    "ISFJs have a remarkable memory for details, especially when it involves people they care about.",
    "ENTJs are visionaries who excel at turning long-term goals into actionable strategies.",
    "ESFPs are the life of the party and excel at bringing people together through humor and fun.",
    "INTJs love self-improvement and often have detailed long-term plans for their personal goals.",
    "ENFJs are so empathetic they often intuitively understand others' emotions without needing explanation.",
    "ISTPs are known for their cool-headedness in emergencies, quickly finding practical solutions.",
    "ISFPs value experiences over material possessions and often enjoy exploring the world.",
    "ESTPs have a talent for reading the room and adapting quickly to social situations."
];


const factButton = document.getElementById('fact-button');
const factDisplay = document.getElementById('fact-display');

factButton.addEventListener('click', () => {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * facts.length);
    // Display a random fact
    factDisplay.textContent = facts[randomIndex];
});


