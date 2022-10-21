// axios.get('https://swapi.dev/api/people/1')
//     .then(response => {
//         console.log('Response:', response);
//     })
//     .catch(error => {
//         console.log('Error:', error);
//     });

const getCharacter = async (id) => {
    try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(response.data);
    } catch (error) {
        console.log('Error:', error);
    }
}

getCharacter(5);
getCharacter(10);