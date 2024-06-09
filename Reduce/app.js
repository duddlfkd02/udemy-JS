const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total);

const total = prices.reduce((total, price) => {
    return total + price
})

//화살표 함수 안 쓴 버전
const total2 = prices.reduce(function (total2, price) {
    return total2 + price
})

const minPrice = prices.reduce((min, currPrice) => {
    if (currPrice < min) {
        return currPrice;
    }
    return min;
})


const movies = [
    {
        title: 'Iron Man',
        score: 99,
        year: 2000
    },
    {
        title: 'Alien',
        score: 70,
        year: 2010
    },
    {
        title: 'Moana',
        score: 85,
        year: 2014
    },
    {
        title: 'Frozen',
        score: 95,
        year: 2017
    },
    {
        title: 'InsideOut',
        score: 80,
        year: 2015
    },
    {
        title: 'Coco',
        score: 65,
        year: 2008
    }
]

const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})

//reduce 두번째 인수를 따로 지정하기 (*이 인수는 reduce 함수의 초기값이 된다는 것 기억하자)
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num, 100);