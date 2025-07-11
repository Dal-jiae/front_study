// $('.tab-button)을 변수 설정
// 매번 찾아야 하기 때문에 반복 사용하면 변수 설정하는 것이 용이하다

const btns = $('.tab-button');
const content = $('.tab-content');

// 클릭 했을 때 모든 정보가 e에 들어간다.
btns.on('click', (e) => {
  btns.removeClass('selected');
  content.removeClass('show');

  // HTML에 data로 정보를 저장한 후 
  // script에서 정보를 불러올 때는 dataset에 있는 no를 가져온다고 쓰기
  let no = e.target.dataset.no;

  btns.eq(no).addClass('selected');
  content.eq(no).addClass('show');
})

