const box = document.querySelector('.box');

// 스크롤 전체 높이를 알아야 한다. 
// box.scrollHeight는 박스 안 높이를 알 수 있다. 
let boxY = box.scrollHeight;
console.log(boxY);

let boxHeight = box.clientHeight;
console.log(boxHeight); // 눈에 보이는 높이 

let isDisabled = true;
let check = document.querySelector('#chk');

// scroll을 돌렸을 때 작동되는 리스너
box.addEventListener('scroll', () => {
  let scroll = box.scrollTop;
  
  if( isDisabled && boxHeight+scroll > boxY - 5 ){
    check.disabled = false;
    isDisabled = false; // 한번 작동 후에 다시 작동하지 않게 하려고 값을 설정함
  }
})

// 버튼을 누르면 약관동의를 안했을 경우, 동의하십쇼. 라는 모달창 띄움
// 약관동의를 했을 경우, 다음 페이지로 이동합니다. 라는 모달창 띄움

const next = document.querySelector('button');

next.addEventListener('click', () => {  
  if(check.checked) {
    alert('다음 페이지로 이동합니다.');
    console.log(check.checked); // 체크 하면 true, 안 하면 false
  } else {
    alert('동의하십쇼');
    console.log(check.checked);
  }
})

// 446p. 그림으로 볼 수 있음
console.log(window.innerHeight); // 현재 보고 있는 윈도우 화면 높이 확인
console.log(document.body.clientHeight); // 해당 창의 전체 높이 

const innerHeight = window.innerHeight;
const bodyHeight = document.body.clientHeight;

window.addEventListener('scroll', () => {
  console.log(window.scrollY); // 화면에서 스크롤을 얼마나 했는지

  const status = window.scrollY / (bodyHeight-innerHeight) * 100; // 진행상태 너비값
  // console.log("비율", status);
  document.querySelector('.status-bar').style.width = `${status}%`
})

