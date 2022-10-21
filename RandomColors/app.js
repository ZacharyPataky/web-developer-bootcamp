const ht1 = document.querySelector('h1');
const button = document.querySelector('button');


button.addEventListener('click', function() {
   newColor = makeRandomColor();
   
   document.body.style.backgroundColor = newColor; 
   ht1.innerText = newColor;
});

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
 
    return `rgb(${r}, ${g}, ${b})`
}