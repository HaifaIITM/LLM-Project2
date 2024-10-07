// Function to generate a random hex color
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Function to apply random colors to different parts of the dress
function randomizeColor(part) {
    let element;
    
    // Handle both sleeves together
    if (part === 'sleeves') {
        const randomColor = getRandomColor();
        document.querySelectorAll('.sleeve').forEach(sleeve => {
            sleeve.style.backgroundColor = randomColor;
        });
    } else {
        element = document.querySelector(`.${part}`);
        const randomColor = getRandomColor();
        element.style.backgroundColor = randomColor;
    }
}

// Function to reset all colors to default
function resetColors() {
    document.querySelector('.top').style.backgroundColor = '#f1c40f';
    document.querySelectorAll('.sleeve').forEach(sleeve => {
        sleeve.style.backgroundColor = '#2ecc71'; // Default green for both sleeves
    });
    document.querySelector('.skirt').style.backgroundColor = '#e74c3c';
}
