// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'indigo';
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'violet';
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay);
}

delayedColorChange('red', 500, () => {
    delayedColorChange('orange', 500, () => {
        delayedColorChange('yellow', 500, () => {
            delayedColorChange('green', 500, () => {
                delayedColorChange('blue', 500, () => {
                    delayedColorChange('indigo', 500, () => {
                        delayedColorChange('violet', 500, () => { });
                    });
                });
            });
        });
    });
});

searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        // If it works, run this...
    }, () => {
        // If it doesn't work, run this...
    });
}, () => {
    // If the API is down or the request fails...
});