document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key); // key : 출력되는 값
//     console.log(e.code); // code : 키보드에서의 위치
// })

// input.addEventListener('keyup', function () {
//     console.log('KEYUP');
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('up');
            break;
        case 'ArrowDown':
            console.log('down');
            break;
        case 'ArrowLeft':
            console.log('left');
            break;
        case 'ArrowRight':
            console.log('right');
            break;
        default:
            console.log('ignored')
    }
})