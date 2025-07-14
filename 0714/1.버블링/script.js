document.querySelector('.container').addEventListener('click', (e) =>{
  console.log(e.target);
})

document.querySelector('b').addEventListener('click', (e) => {
  // 기능 수행 전에 막아주는 것이 좋음
  // 클릭했을 때 연속으로 뜨는 것을 막음
  // 버블링 막기
  e.stopPropagation();
  alert('b태그 클릭');
})