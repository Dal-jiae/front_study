const btn = document.querySelector('.btn');

// btn.onclick = function() {
//   alert('zzzzzzz')
// }

// 함수를 지정해줘도 됨
// btn.onclick = abc; 

// function abc() {
//   alert("gggg")
// } 
// 다중 처리 시 불편함

// addEventListener 함수를 이용해서 이벤트 설정을 함 

// 이벤트 종류 : 클릭, 더블 클릭 등등...
// 이벤트 핸들러 : 이벤트 발생 시 실행할 코드 -> 함수
// 요소(e.g. btn).addEventListener(이벤트종류, 이벤트핸들러)

// 이벤트 삭제
// 요소.removeEventListener(이벤트종류, 이벤트핸들러)

btn.addEventListener('click', function(){
  alert('zzzzzzzz');
  // 여기에서만 사용되는 함수
})

// 위에 걸어둔 이벤트가 안 지워짐
btn.removeEventListener('click', function(){
  alert('zzzzzzzz');
}) 


// 함수를 지우려면 그 전에 함수를 만들어서 써야 한다. 
function handler() {
  alert("이건 지울 수 있음")
}
btn.addEventListener('click', handler);
btn.removeEventListener('click', handler);


const btn2 = document.querySelector('.btn2');

// 이벤트 객체 : 이벤트가 발생할 때 생기는 모든 정보를 가지고 있음
// function(e / event 매개변수)
btn2.addEventListener('click', function(e) {
  console.log(e.type); 
  console.log(e.clientX);
  console.log(e.target);
});
