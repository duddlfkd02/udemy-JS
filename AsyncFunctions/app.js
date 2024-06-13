// async function hello() {
// }

// const sing = async () => {
//     throw 'ah!';
//     return 'LA LA LA LA';
// }

// sing()
//     .then((data) => {
//         console.log('Promise resoleved with', data);
//     })
//     .catch((err) => {
//         console.log('Error');
//         console.log(err);
//     })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeedarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('dsdsds', 'corgifeedarecute')
    .then(msg => {
        console.log('Loged in!');
        console.log(msg);
    })
    .catch((err) => {
        console.log('ERROR');
        console.log(err);
    })



const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('tomato', 1000)
//     .then(() => {
//         return delayedColorChange('orange', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('yellow', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('green', 1000)
//     })
//     .then(() => {
//         return delayedColorChange('indigo', 1000)
//     })

async function rainbow() {
    await delayedColorChange('tomato', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('blue', 1000);
    return 'ALL DONE!!';
}

//결과값 출력 방법 1.
// rainbow().then(() => console.log('End of rainbow'));

//결과값 출력 방법 2.
async function printRaninbow() {
    await rainbow();
    console.log('End of rainbow!');
}
//>> await 키워드가 Promise 를 기다리게 하고 모두 끝날 때까지 기다린 후에 Promise 반환됨

printRaninbow();



/* 오류(에러)가 났을 때 */

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequestPromise('/page1');
        console.log(data1);
        let data2 = await fakeRequestPromise('/page2');
        console.log(data2);
    } catch (er) {
        console.log('ERROR!!!')
        console.log('ERROR is:', er)
    }
}