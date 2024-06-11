const makeRandColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let btn of buttons) {
    btn.addEventListener('click', function () {
        btn.style.backgroundColor = makeRandColor();
        btn.style.color = makeRandColor();
    })
}

const paras = document.querySelectorAll('p');

for (let para of paras) {
    para.addEventListener('click', colorRize)
}


//반복되는 부분을 함수로 지정하여 사용 (코드 간결화)
function colorRize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

// 키워드 this가 안에 있을 때 or 이벤트 핸들러에 의해 발동된 콜백 안에서 사용될 때 (클릭, 드래그 등등) this는 이것을 참조한다.
// 이벤트를 발동시킨 무언가와 상호작용하거나 그것에 기반해 작동.