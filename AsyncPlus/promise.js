// Promise is a JavaScript object for asyncronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing somethig');
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network'));
    }, 2000);
})

// 2. Consumers: then, catch, finally
promise//
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => { console.log('finally') }) //성공하든 실패하든 상관없이 마지막으로 실행하고 싶을 때 사용


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000)
})

fetchNumber
    .then(num => num * 2)
    .then(num => num * 3)
    .then(num => {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(num - 1), 1000);
        })
    })
    .then(num => console.log(num));
//.then 은 값을 받아올 수도 있고, promise를 받아올 수 있다.

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });

const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });


getHen()
    .then(getEgg) //여기서 생기는 문제는 다음 줄에 catch 를 써준다.
    .catch(error => {
        return '🍞';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);

//.then(hen => getEgg(hen)) 값이 한가지만 있다면 윗처럼 한 줄씩 쓸 수 있다.
//.then(egg => cook(egg))
//.then(meal => console.log(meal));

