//함수를 인수로 전달하는 함수

// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (let i = 0; i < 10; i++) {
//         f()
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll);
// }

// callTwice(rollDie);
// callTenTimes(rollDie);
// ** 함수를 인자로 호출할 때는 뒤에 ()를 붙이지 않는다!

//=================================================
// 팩토리함수
// ** 팩토리함수의 함수는 이름이 없다! 그냥 값으로 반환!

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

//1. makeBetweenFunc 의 인수에 숫자를 넣으면 아래에 있는 '함수'에 그 숫자가 적용되어 새로운 함수로 만들어진다.
//2. 예를 들어 0~18살까지의 나이를 판가름하는 'isChild()함수를 만든다고 하면, makeBetweenFunc(0,18)을 넣어서 새로운 함수를 만들고 (const isChild = makeBetweenFunc(0,18))
//3. isChild()함수를 실행하면 0~18 숫자를 판별하는 함수가 실행된다. (makebetweenFunc 함수는 실행x)





// function isBetween(num) {
//     return num >= 50 && num <= 100
// }

// function isBetwee2(num) {
//     return num >= 1 && num <= 10
// }