const btns = document.querySelectorAll('.tab-button'); // 배열 처리
const content = document.querySelectorAll('.tab-content');

// 반복문이 실행되는 함수를 메서드로 설정
function clearClassList() {
  for(let j=0; j<btns.length; j++){
    btns[j].classList.remove('selected');
    content[j].classList.remove('show');
  }
}

// btns[0].addEventListener('click', () => {
//   // 클릭이 잘 들어갔는지 확인을 먼저 해볼 것

//   // 0, 1, 2에 모든 selected, show를 제거
//   clearClassList();

//   btns[0].classList.add('selected');
//   content[0].classList.add('show');
// });

// btns[1].addEventListener('click', () => {
//   clearClassList();
//   btns[1].classList.add('selected');
//   content[1].classList.add('show');
// });

// btns[2].addEventListener('click', () => {
//   clearClassList();
//   btns[2].classList.add('selected');
//   content[2].classList.add('show');
// });

for(let i=0; i<btns.length; i++){
  btns[i].addEventListener('click', () => {
    clearClassList();

    btns[i].classList.add('selected');
    content[i].classList.add('show');
  });
}

