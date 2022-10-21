const input = document.querySelector('input');
const h1 = document.querySelector('h1');

// input.addEventListener('change', function(event) {
//     console.log('CHANGE EVENT');
// });

input.addEventListener('input', function(event) {
    // console.log('INPUT EVENT');
    // console.log(event);
    h1.innerText = input.value;
});