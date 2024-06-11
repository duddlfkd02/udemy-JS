// const lis = document.querySelectorAll('li');
// for (li of lis) {
//     li.addEventListener('click', function () {
//         li.remove();
//     })
// }




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


tweetsContainer.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove(); //정확하게 li를 선택했는지 확인하는 방법!
})

// 이벤트 위임은 이벤트 수신기가 추가된 시점에 페이지에 없었던 요소를 다뤄야 하는 경우 용이하다
// **부모** 요소에 이벤트 수신기를 달아주면 된다 (tweetsContainer)