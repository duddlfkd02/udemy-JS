// const add = function(x,y){
//     return x + y;
// }

const add = (x, y) => {
    return x + y;
}

//매개변수가 1개 뿐이라면? ()가 있어도 되고 없어도 된다.
const square = num => {
    return num * num;
}

//인수가 없다고 할지라도 ()자리는 만들어 두어야 한다.
// const rollDie = () => {
//     return Math.floor((Math.random() * 6) + 1);
// }


// 화살표함수 장점 1. : 암시적반환
const rollDie = () => (
    Math.floor((Math.random() * 6) + 1)
)

// 화살표함수 장점2. : 코드가 한 줄일 때
const plus = (a, b) => a + b

//** 함수의 바디에 표현식이 딱 하나만 있어야한다! (let 변수를 넣는다거나 이런거 안 됨)



// forEach, map, arrowfunction 활용

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

//map
// const newMovie = movies.map(function (movie) {
//     return `${movie.title} = ${movie.score / 10}`
// })

//arrowfunction
const newMovie = movies.map(movie => {
    return `${movie.title} = ${movie.score / 10}`
})