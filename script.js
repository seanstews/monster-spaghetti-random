const button = document.getElementById('spaghettiButton');
const display = document.getElementById('numberDisplay');
const monster = document.getElementById('monster');
let clickCount = 0;

button.addEventListener('click', () => {
    // Increment click counter
    clickCount++;
    
    // Generate random number
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    // Add flash effect
    button.classList.add('flash');
    
    // Remove flash effect after 150ms
    setTimeout(() => {
        button.classList.remove('flash');
    }, 150);
    
    // Check if it's the 5th click
    if (clickCount % 5 === 0) {
        // Show monster
        monster.classList.add('visible');
        
        // Hide monster after 1 second
        setTimeout(() => {
            monster.classList.remove('visible');
        }, 1000);
    }
    
    // Update display
    display.textContent = randomNumber;
}); 