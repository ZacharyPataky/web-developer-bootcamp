// Look at MDN for event types!

const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('You clicked me!');
    console.log('I hope it worked!');
}

function scream() {
    console.log("AAAAAHHHHH!!!");
    console.log("STOP TOUCHING ME!!!");
}

btn.onmouseenter = scream;  // Strage, it doesn't like when I include the parentheses

// Must wrap a function for onXXX properties!
document.querySelector('h1').onclick = function () {
    alert("You clicked the h1");
}

// Event Listener
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function() {
    alert('Clicked');
});

function twist() {
    console.log('TWIST');
}


function shout() {
    console.log('SHOUT');
}

// Can't have two callback methods for the same element with properties; we need callback methods
// const tasBtn = document.querySelector('#tas');
// tasBtn.onclick = shout;
// tasBtn.onclick = twist;

// AddEventListeners allow for as many callbacks as we want
const tasBtn = document.querySelector('#tas');
tasBtn.addEventListener('click', twist, { once: true });  // Only runs the callback once, then removes the event listener
tasBtn.addEventListener('click', shout);