function showHide(n) {
  // HTML에서 받은 매개변수를 값으로 받아들이기
  // JS문법
  // document.getElementById('ab').style.display = n;
  // style 다음은 다 css라고 생각하기
  
  // jQuery문법
  // $('선택자').css (속성명, 속성값);
  $('#ab').css('display', n);
}

// function hide() {
//   document.getElementById('ab').style.display = 'none';
// }

function msg(num) {
  // JS 문법
  // document.querySelector('.alert').innerHTML = num;

  // jQuery 문법
  $('.alert').html(num);
}

