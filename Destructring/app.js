// 1.  배열 분해

const scores = [7000, 6000, 5000, 4000, 3000, 2000, 1000];

const [gold, silver, bronze, ...everyoneElse] = scores
//이 대괄호는 배열에서 분해한 것을 어떻게 지칭할지 정한다.


// 2.  객체 분해
const user = {
    email: 'duddlfkd02@gmail.com',
    password: 'passingNum',
    firstName: 'Harry',
    lastName: 'Potter',
    born: 1930,
    died: 2000,
    bio: 'Harry Potter is a movie character',
    city: 'London',
    state: 'Hogwarts'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, city, bio } = user;

//새로운 변수명으로 바꿀 수 있다. born으로 console에 찍어보면 안 나옴
// const { born: birthYear } = user


// 3.  디폴트 값 분해
const user2 = {
    email: 'duddlfkd02@gmail.com',
    firstName: 'Harry',
    lastName: 'Potter',
    born: 1930,
    city: 'London',
    state: 'Hogwarts'
}

const { city, state, died = 'N/A' } = user2;
// user2에서는 died가 없어서 직접 정할 수 있지만 user 처럼 객체에 디폴트 값이 있다면 내가 수정한 값이 나오지 않음


// 4.  매개변수 분해
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}

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

// movies.filter((movie) => movie.score >= 90)
// movies.filter(({ score }) => score >= 90)

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

movies.map(({ title, score, year }) => {
    return `${title} (${year}) is rated ${score}`
})