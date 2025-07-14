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

// check에 값이 저장되어 있어야 그걸 빼와서 정리할 수 있을 텐데
check.addEventListener('click', () =>{
  {check: 0}
  {check: 1}
})

next.addEventListener('click', () => {
  if(check == false) {
    alert('동의하십쇼')
  } else if (check === true) {
    alert('다음 페이지로 이동합니다.')
  }
})

