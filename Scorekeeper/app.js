// 1. 점수 올리는 버튼, 올라가는 점수 변수 지정
// 2. 플레이어의 최초 점수 변수 지정 > 계속 값이 변하므로 let으로 지정
// 3. 플레이어1의 버튼을 클릭할 때마다 점수가 1씩 증가하고 이 값이 화면에 표시.
// 4. 최대점수 값과 동일해지면 올라가는 것 멈춤
// 5. isGameOver라는 변수를 만들어 승점까지 점수가 카운트 되면 p1,p2 버튼 모두 클릭되지 않게 만들기
// 6. reset 버튼 만들어서 점수 초기화 시키기
// 7. select 로 게임 끝내는 점수 선택할 수 있도록 winScore 수정
// 8. reset 이벤트를 함수로 따로 뺀 후, winScoreSelect에서도 동작되게 수정 (3점으로 설정하고 카운트를 시작하면 중간에 바꿀 수 없게 만들기)

const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const resetBtn = document.querySelector('#resetBtn');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winScoreSelect = document.querySelector('#playto');

let p1Score = 0;
let p2Score = 0;
let winScore = 3;
let isGameOver = false;

p1Btn.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
    }
    p1Display.textContent = p1Score;
})

p2Btn.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Btn.disabled = true;
            p2Btn.disabled = true;
        }
    }
    p2Display.textContent = p2Score;
})

winScoreSelect.addEventListener('change', function () {
    winScore = parseInt(this.value); // parseInt를 해서 문자열을 숫자로 바꿈
    reset();
})


resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Btn.disabled = false;
    p2Btn.disabled = false;

}