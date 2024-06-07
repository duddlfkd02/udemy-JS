// let count = 0;
// while (count < 10) {
//     count++;
//     console.log(count);
// }



// const SECRET = "BabyHippo";

// let guess = prompt('Enter the secret code...');
// while (guess !== SECRET) {
//     guess = prompt('Enter the secret code...');
// }
// console.log("You got the SECRET!");

/* break */
// let input = prompt('Say Something!');
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("YOU WIN!")

// for (let i = 0; i < 1000; i++) {
//     console.log(i);
//     if (i === 100) break;
// }

//============================================================

/* * 추측게임 만들기 * */
let maximum = parseInt(prompt('최대 숫자를 작성해주세요.')); //사용자가 숫자가 아닌 값을 입력하면 parseInt 로  NaN 출력하기(falsy)
while (!maximum) {
    maximum = parseInt(prompt('유효한 숫자 값을 입력해주세요.'));
}

//0부터 최대 숫자 변수로 저장
const targetNum = Math.floor(Math.random() * maximum) + 1;

//입력한 값 변수에 저장
let guess = prompt('첫번째 시도! (그만 두려면 "q"를 입력하세요.)');
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);

    if (guess > targetNum) {
        guess = prompt('숫자가 너무 큽니다!');
        attempts++;
    } else if (guess < targetNum) {
        guess = prompt('숫자가 너무 작습니다!');
        attempts++;
    } else {
        guess = prompt('유효한 숫자를 입력해주세요. 그만 두려면 "q"를 입력하세요.');
    }
}

if (guess === 'q') {
    console.log('게임을 그만두었습니다.');
} else {
    console.log('축하합니다!');
    console.log(`성공입니다! 총 ${attempts} 번만에 맞히셨습니다.`);
}


