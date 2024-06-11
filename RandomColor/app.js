const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
btn.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;

}
/* 배경색이 어두우면 흰색 글씨로
if(r+g+b > 50){
    return h1.style.color = 'white'
}
*/