document.querySelector('a').addEventListener('click', (e) =>{
  // alert('네이버로 이동합니다.');

  // 기본동작 막아줌
  e.preventDefault();

  console.log('이동');
})

// 우클릭은 contextmenu
document.querySelector('p').addEventListener('contextmenu', (e) => {
  e.preventDefault();
  alert('zzzz');
})

document.querySelector('p').addEventListener('selectstart', (e) =>{
  e.preventDefault();
  alert('복사금지');
})