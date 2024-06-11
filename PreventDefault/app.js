// My Form

const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLi = document.createElement('LI');
    newLi.innerText = catName;
    console.log(newLi);
    list.append(newLi);
    input.value = "";
});



// Tweet
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = "";
    tweetInput.value = "";
});

const addTweet = function (username, tweet) {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    tweetsContainer.append(newTweet);
}

// 양식 이벤트 연습문제
//index.html에는 이미 두 개의 <input>요소가 포함된 양식 요소가 있습니다. 두 요소 중 하나는 수량을 위한 것이고 다른 하나는 제품 이름을 위한 것입니다. index.html에는 새 <li>를 추가할 빈 <ul>도 포함되어 있습니다.

//양식 제출 이벤트에 대한 리스너를 설정합니다.

// 양식이 제출될 때, 기본 동작을 방지합니다.

// 수량 입력 값과 제품 입력 값을 가져옵니다.

// 새 <li> 요소를 생성합니다. 새 <li>의 텍스트에 양식에서 입력받은 수량과 제품 이름이 포함되도록 설정합니다.

// 페이지의 <ul>에 새 <li>를 추가합니다.

// 입력 값을 재설정합니다.

/* 내가 적은 답 */
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const qtyInput = form.elements.qty;

    const list = document.querySelector('#list');
    const newLi = document.createElement('li');

    newLi.innerText = `${productInput.value} ${qtyInput.value}`
    list.appendChild(newLi);
    productInput.value = "";
    qtyInput.value = "";
})

/* 답 1 */
// const form = document.querySelector('form');
// const list = document.querySelector('#list');
 
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const productInput = form.elements.product;
//   const quantityInput = form.elements.qty;
//   addElement(productInput.value, quantityInput.value);
//   productInput.value = '';
//   quantityInput.value = '';
// });
 
// const addElement = (product, qty) => {
//   const li = document.createElement('li');
//   li.innerText = `${qty} ${product}`;
//   list.appendChild(li);
// }

/* 답 2 */

// const form = document.querySelector('form');
// const ul = document.querySelector('#list');
 
// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const qty = form.elements.qty.value;
//   const product = form.elements.product.value;
//   const li = document.createElement('li');
//   li.innerText = `${qty} ${product}`;
//   ul.appendChild(li);
//   form.reset();
// });