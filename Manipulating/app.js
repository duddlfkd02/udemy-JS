const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK';
// }

for (let link of allLinks) {
    link.style.color = 'tomato';
    link.style.textDecorationColor = 'blue';
    link.style.textDecorationStyle = 'wavy';
}

// ** appendChild 를 활용한 버튼 100개 만들기
//JavaScript를 사용하여 정확히 100개의 새 버튼 요소를 생성하세요! index.html에 제공해 드린 컨테이너 요소 안에 각각의 새 버튼을 추가하세요. 안타깝게도 유데미의 연습 도구에서는 append 메서드를 지원하지 않으므로 appendChild를 사용해야 할 것입니다. 다음 단계를 따르세요.

//1. 정확히 100개의 새 버튼 요소를 생성합니다.

//2. 각 버튼의 내부에는 텍스트가 있어야 합니다(내용은 상관 없음).

//3, 각 버튼은 container div 안에 추가되어야 합니다.

const box = document.getElementById('container');

for (let i = 0; i < 100; i++) {
    const btns = document.createElement('button');
    btns.innerText = 'Hey!';
    box.appendChild(btns);
}