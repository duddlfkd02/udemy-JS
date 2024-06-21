//async & await
//clear style of using promise

// 1. async
async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    // throw 'error'
    return '🍎';
}

async function getBanana() {
    await delay(1000);
    return '🍌';
}

// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} + ${banana}`);
//     });
// }


// * 사과와 바나나 각각 Promise 없는 버전 => getApple이 호출될 때까지 기다려서 시간이 걸림
// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }


// * 두 가지가 서로 관련이 없을 때는 병렬적으로 실행되도록 만든다.
async function pickFruits() {
    const applePromise = getApple(); // 만들자마자 함수 실행
    const bananaPromise = getBanana(); // 만들자마자 함수 실행
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllfruits() {
    return Promise.all([getApple(), getBanana()])
        .then(fruits => fruits.join(' + '));
}

pickAllfruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);