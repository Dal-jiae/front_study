// const input = document.querySelector('input');

// input.addEventListener('click', function(e) {
//   document.querySelector('body').style.color = 'white';
//   document.querySelector('body').style.background = 'black';
// })


// const btn = document.querySelector('.btn-mode');
// btn.addEventListener('click', () => {
//   document.body.style.color = 'white';
//   document.querySelector('body').style.background = 'black';
// })


// body를 한번만 찾게 해서 성능을 높이기
const btn = document.querySelector('.btn-mode');
const body = document.body;
btn.addEventListener('click', () => {
  body.style.color = 'white';
  body.style.background = 'black';
})