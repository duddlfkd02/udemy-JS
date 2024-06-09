const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score > 70);
exams.some(score => score >= 75);

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

movies.some(movie => movie.year > 2014);
/*============================================*/
//숫자 배열을 단일 인수로 받는 allEvens라는 이름의 함수를 작성하세요. 배열에 포함된 숫자가 모두 짝수인 경우 true를 반환하세요. 그렇지 않으면 false를 반환하세요. 'some' 또는 'every' 메서드를 사용하면 도움이 됩니다. (여기에서 실제로 유용한 것은 둘 중에 하나 뿐입니다.)

//내가 쓴 답
function allEvens(arr) {
    const filterEven = arr.every(num => num % 2 === 0);
    return filterEven;
}

// 답 1 
function allEvens(arr) {
    return arr.every(function (num) {
        return num % 2 === 0;
    });
}

// 답 2
const allEvens = function (arr) {
    return arr.every(num => num % 2 === 0);
}