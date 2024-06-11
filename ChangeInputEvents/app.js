const input = document.querySelector('input');
const h1 = document.querySelector('h1');
// input.addEventListener('change', function (e) {
//     console.log('hihihihi');
//     // blur out 해야만 console에 출력
// })

input.addEventListener('input', function (e) {
    // console.log('hi again!');
    // 글씨 입력할 때마다 console에 출력 (shift, tab 처럼 input에 입력 안되는건 반영 안 됨)
    h1.innerText = input.value;
})