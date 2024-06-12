// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve('Fake data here');
//             }
//             reject('Request Error');
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log('Done with Request!');
//         console.log('Data is:', data)
//     })
//     .catch((err) => {
//         console.log('ERROR!!', err);
//     })

// Promise 를 만들려면 2개의 매개변수가 필요하다.
// 하나는 resolve 할 함수,  다른 하나는 reject 할 함수
// 어디서든 resolve를 호출하면 resolve가 호출되고 reject가 호출되면 reject가 호출되는 구조


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('tomato', 1000)
    .then(() => {
        return delayedColorChange('orange', 1000)
    })
    .then(() => {
        return delayedColorChange('yellow', 1000)
    })
    .then(() => {
        return delayedColorChange('green', 1000)
    })
    .then(() => {
        return delayedColorChange('indigo', 1000)
    })
