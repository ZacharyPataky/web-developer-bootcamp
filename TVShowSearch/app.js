const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function (error) {
    error.preventDefault();

    const searchTerm = form.elements.query.value;
    const config = {
        params: {
            q: searchTerm
        },
        headers: {}
    }
    const response = await axios.get(`http://api.tvmaze.com/search/shows?q`, config);

    makeImages(response.data);
    form.elements.query.value = '';
});

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}