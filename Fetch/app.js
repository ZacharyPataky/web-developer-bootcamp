// fetch('https://swapi.dev/api/people/1')  // Sends a request to the URL and returns a promise
//     .then(response => {
//         console.log('Resolved-1:', response);
//         return response.json();  // Provides data despite an incomplete body
//     })
//     .then(data => {
//         console.log(data);
//         fetch('https://swapi.dev/api/people/2')
//             .then(response => {
//                 console.log('Resolved-2:', response);
//                 return response.json();
//             })
//             .then(data => {
//                 console.log(data);
//             })
//             .catch((error) => {
//                 console.log('Error-2:', error);
//             })
//     })
//     .catch((error) => {
//         console.log('Error-1:', error);
//     });

const loadCharacters = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    console.log(data);
}

loadCharacters();