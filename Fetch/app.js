fetch('http://swapi.dev/api/people/1/')
    .then((res) => {
        console.log('resolved', res)
        // res.json().then((data) => console.log('JSON DONE!!!!', data));
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((er) => {
        console.log('Error', er)
    });


/* res.json() 와  JSON.parse와 다름!!
res.json()는 res 객체를 가져오는 fetch 함수에 추가된 메서드이다
+ Promise 를 반환해야한다.*/


/* * in series(연속적인) 요청 * */
// fetch('http://swapi.dev/api/people/1/')
//     .then((res) => {
//         console.log('FIRST Resolved!!!!!!!', res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch('http://swapi.dev/api/people/2/');
//     })
//     .then((res) => {
//         console.log('SECOND Resolved!!!!!!');
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((er) => {
//         console.log('Error', er)
//     });


/* * 비동기식으로 리팩터링 * */
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch('http://swapi.dev/api/people/1/');
        const data = await res.json();
        console.log(data);
        const res2 = await fetch('http://swapi.dev/api/people/2/');
        const data2 = await res2.json();
        console.log(data2);
    } catch (er) {
        console.log('Error!!!', er);
    }

}

loadStarWarsPeople();