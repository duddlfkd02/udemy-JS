// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 2; i <= 20; i += 2) {
//     //짝수만 구하기
//     console.log(i);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

/*=======================================*/
//중첩 반복문

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j < 4; j++) {
//         console.log(`      j is ${j}`);
//     }
// }

const seatingChart = [
    ['김ㅇㅇ', '이ㅇㅇ', '박ㅇㅇ'],
    ['최ㅇㅇ', '정ㅇㅇ', '남ㅇㅇ'],
    ['한ㅇㅇ', '전ㅇㅇ', '유ㅇㅇ']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}