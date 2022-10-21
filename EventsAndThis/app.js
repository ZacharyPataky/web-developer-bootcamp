const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}

// Buttons
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    button.addEventListener('click', colorize);
    // button.addEventListener('click', function() {
    //     button.style.backgroundColor = makeRandomColor();
    //     button.style.color = makeRandomColor();
    // })
}

// 
const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
    // h1.addEventListener('click', function() {
    //     h1.style.backgroundColor = makeRandomColor();
    //     h1.style.color = makeRandomColor();
    // })
}

// Generic Function
function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor();
}