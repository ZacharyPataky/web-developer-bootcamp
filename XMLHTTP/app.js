request = new XMLHttpRequest();

request.onload = function () {
    console.log('Success!');
    
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log(data.name, data.height);
};

request.onerror = function () {
    console.log('Error!');
    console.log(this);
}

request.open('GET', 'https://swapi.dev/api/people/1');
request.send();