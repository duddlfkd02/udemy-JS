//1. Call Stack
const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)

isRightTriangle(3, 4, 5);


//2. Call Back
console.log('첫번째로 출력됩니다.'); //js가 실행
setTimeout(function () { //브라우저 (window)에게 넘김
    console.log('마지막으로 출력됩니다.');
}, 3000) // 3초 후 window에게 전달받아 출력, 시간 기록은 window가 함 >> 콜백
console.log('두번재로 출력됩니다.'); //js가 실행


//3. Call Back hell

// setTimeout(() => {
//     document.body.style.backgroundColor = 'tomato';
//     setTimeout(function () {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(function () {
//             document.body.style.backgroundColor = 'yellow';
//         }, 1000)
//     }, 1000)
// }, 1000)


const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('pink', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {

        })
    })
});
