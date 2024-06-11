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



