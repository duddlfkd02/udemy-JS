// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer'];

// //일반적인 for문 사용
// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

// //for of 사용
// for (let sub of subreddits) { //sub 변수는 자유롭게!
//     console.log(`Visit reddit.com/r/${sub}`);
// }

//** 인덱스가 필요한 경우에는 기존 for문을 사용하기! **//
//===================================//

// const seatingChart = [
//     ['김ㅇㅇ', '이ㅇㅇ', '박ㅇㅇ'],
//     ['최ㅇㅇ', '정ㅇㅇ', '남ㅇㅇ'],
//     ['한ㅇㅇ', '전ㅇㅇ', '유ㅇㅇ']
// ]


// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

//===================================//

//===================================//
//for in 과  Object.value

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

//1. for in
// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

//2. for of + Object.values
// let total = 0;
// let scores = Object.values(testScores); 
// //testScores은 객체이기 때문에 그 자체로 길이(개수)를 구할 수 없다.
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length);