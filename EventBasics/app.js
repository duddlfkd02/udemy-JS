const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('클릭했습니다.');
    console.log('작동합니다.');
}

function scream() {
    console.log('AHHHHHHHH');
    console.log('STOP TOUCHING ME');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1');
}

// ** addEventListener **
const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert('clicked!');
})

// function()으로 만들지 않고 따로 만든 함수를 적용할 수 있음
// btn3.addEventListener('click', scream);

function twist() {
    console.log('twist');
}

function shout() {
    console.log('shout');
}

const tasBtn = document.querySelector('#tas');

// tasBtn.onclick = twist;
// tasBtn.onclick = shout;
// => twist 실행 안됨
tasBtn.addEventListener('click', twist, { once: true });
tasBtn.addEventListener('click', shout);

//{once:true}를 작성하면 처음 1번만 실행되고 그 이후에는 addEventListner가 사라지면서 아래 'shout'만 실행된다.