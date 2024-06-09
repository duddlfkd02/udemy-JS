const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
    return n > 10;
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

const goodMovies = movies.filter(movie => {
    return movie.score > 80;
})
const goodTitles = goodMovies.map((movie) => movie.title
)
//위 두줄을 한 줄로 나타내기(map+filter)
const goodM = movies.filter(movie => movie.score > 80).map(movie => movie.title);


const badMovies = movies.filter(movie => (movie.score < 80));

const recentMovies = movies.filter(movie => (movie.year > 2010));

//연습문제
// 사용자 이름 배열(문자열)을 받는 validUserNames라는 이름의 함수를 작성하세요. 이 함수는 10자 미만의 사용자 이름만 포함하는 새 배열을 반환해야 합니다.

//답 1
function validUserNames(arr) {
    const filteredArr = arr.filter(function (name) {
        return name.length < 10;
    });
    return filteredArr;
}

//답 2 
function validUserNames(arr) {
    return arr.filter(name => name.length < 10);
}

//답 3
const validUserNames = usernames => usernames.filter(usr => usr.length < 10);