const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el);
    }

})


const movies = [
    {
        title: 'adc',
        score: 99
    },
    {
        title: 'def',
        score: 85
    },
    {
        title: 'ghi',
        score: 95
    },
    {
        title: 'jkl',
        score: 90
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`);
})
