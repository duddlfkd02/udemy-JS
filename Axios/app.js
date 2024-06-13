// axios
//     .get('http://swapi.dev/api/people/1/')
//     .then((res) => {
//         console.log('respose', res);
//     })
//     .catch((er) => {
//         console.log('Error!!', er);
//     })

// const getStarWatsPerson = async (id) => {
//     try {
//         const res = await axios.get(`http://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     }
//     catch (er) {
//         console.log('Error', er);
//     }
// };

/* * DOM 이벤트 추가하기 * */
// const jokes = document.querySelector('#jokes');
// const getDadJoke = async () => {
//     const config = { headers: { Accept: 'application/json' } }
//     const res = await axios.get('https://icanhazdadjoke.com/', config);
//     // console.log(res.data.joke);
//     const newLi = document.createElement('LI');
//     newLi.append(res.data.joke);
//     jokes.append(newLi);
// }

/* * 버튼이벤트 추가하기 * */
const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');



const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('LI');
    newLi.append(jokeText);
    jokes.append(newLi);
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        return res.data.joke;
    }
    catch (er) {
        return 'No jokes available'
    }
}

button.addEventListener('click', addNewJoke);