// function sum() {
//     return arguments.reduce((total, el) => total + el);
// }
// 위처럼 적으면 에러 뜸
// 인수객체는 배열과 비슷하게 생겼지만 배열이 아니다. => rest(...)연산자가 필요

// function sum(...nums) { // 나머지 값을 모두 담아주는 매개변수
//     return nums.reduce((total, el) => total + el);
// }

function raceResults(gold, silver, ...everyElse) {
    console.log(`GOLD MEDAL GOES TO : ${gold}`);
    console.log(`SILVER MEDAL GOES TO : ${silver}`);
    console.log(`AND THANKS TO EVERYONE ELSE : ${everyElse} `);
}
//gold, silver는 매개변수 가져오고 ...everyElse 나머지매개변수는 배열로 가져옴