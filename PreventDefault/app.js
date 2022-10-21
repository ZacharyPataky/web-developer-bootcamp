const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('SUBMITTED!');
    console.log(input.value);

    const catName = input.value;
    const newLI = document.createElement("li");

    newLI.innerText = catName;
    console.log(newLI);

    list.append(newLI);

    input.value = '';
});
