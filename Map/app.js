const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubles = numbers.map(function (num) {
    return num * 2;
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

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

//map : 데이터의 일부를 가져오가나 2배로 늘린다거나 할 때 필요
//원래 배열의 모든 요소를 변환하고 원래 배열을 기반으로 새로운 배열을 생성한다면 map을 활용하는 것이 좋다.
//* 콜백은 예외!