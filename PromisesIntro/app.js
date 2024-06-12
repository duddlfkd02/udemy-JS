// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// ====================================

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log('It worked!');
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log('It worked AGAIN!');
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log('It worked AGAIN (3rd req)!');
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log('ERROR! (3rd req)', err)
//                     }
//                 )
//             },
//             function (err) {
//                 console.log('ERROR! (2nd req)', err)
//             })
//     }, function (err) {
//         console.log('ERROR!', err);
//     })

// ====================================

/* 변수로 저장한 버전*/

// const request = fakeRequestPromise('yelp.com/api/coffee');

// request // 객체
//     .then(() => { // 메서드
//         console.log('promise resolved')
//         console.log('it worked')
//     })
//     .catch(() => { // 메서드
//         console.log('promise rejected')
//         console.log('error')
//     })

// ====================================

/* 변수 저장하지 않은 버전*/
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log('it worked (page1)')
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log('it worked (page2)')
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log('it worked (page3)')
//                     })
//                     .catch(() => {
//                         console.log('error (page3)')
//                     })
//             })
//             .catch(() => {
//                 console.log('error (page2)')
//             })
//     })
//     .catch(() => {
//         console.log('error (page1)')
//     })

/* Promise 사용 */
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('it worked!! (page1)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log('it worked!! (page2)')
        console.log(data)
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('it worked!! (page3)')
        console.log(data)
    })
    .catch((err) => {
        console.log('ERROR!!!')
        console.log(err)
    })
