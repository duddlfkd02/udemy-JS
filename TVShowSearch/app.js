const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    const config = { params: { q: searchTerm, isFunny: 'colt' } } // 쿼리 문자열 객체로 만들기(위에 주석처리 한 건 추가하기 번거롭, 여러개 담을 땐 변수 지정해서 쓰는게 편리!
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config); // Params 안에 있는 키-값 쌍이 쿼리 문자열로 입력됨

    makeImage(res.data);
    // const img = document.createElement('IMG');
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img);
    form.elements.query.value = '';

})


const makeImage = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }

    }
}