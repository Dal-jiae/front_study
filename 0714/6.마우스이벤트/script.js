document.querySelector('button').addEventListener('click', (e) => {
  // 0: 왼쪽, 1: 가운데, 2: 오른쪽
  console.log(e.button);
  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);


  // fixed와 유사. client는 현재 보고 있는 화면을 기준으로 값을 알려줌
  console.log(e.clientX, e.clientY);
  // page는 페이지 전체를 기준으로 값을 알려줌
  console.log(e.pageX, e.pageY);

  if(e.ctrlKey) {
    alert('컨트롤 클릭함');
  }

  if(e.ctrlKey && e.shiftKey) {
    alert('컨트롤 쉬프트 클릭');
  }
})

document.querySelector('input').addEventListener('change', ()=>{
  alert('change 이벤트 작동됨');
}) // change : 변경되고 포커스가 나가면 작동

document.querySelector('input').addEventListener('input', ()=>{
  console.log('input 이벤트 작동됨');
}) // 변경이 감지되면 그때그때 작동되는 코드
// input : 변경 감지되는 모든 순간 작동

document.querySelector('input').addEventListener('cut', ()=>{
  alert('cut 이벤트 작동됨');
}) // cut : 잘라내기
// copy : 복사
// paste : 붙여넣기

