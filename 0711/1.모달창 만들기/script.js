const btnBoard = document.querySelector('#open');
const modalbox = document.querySelector('.black-bg');

// JS문법
btnBoard.addEventListener('click', () => {
  // 클래스 목록을 가져올 수 있음
  modalbox.classList.add('show');
});

// jQuery
// addEventListener = on
// classList.add = addClass
// $('#open').on('click', ()=>{
//   // $('.black-bg').addClass('show');
//   $('.black-bg').fadeIn();
// });

const btnClose = document.querySelector('#close');

// JS
btnClose.addEventListener('click', () => {
  modalbox.classList.remove('show');
});

// jQuery
// $('#close').on('click', () => {
//   // $('.black-bg').removeClass('show');
//   $('.black-bg').fadeOut();
// });