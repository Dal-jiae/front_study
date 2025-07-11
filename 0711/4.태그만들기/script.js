// js태그 생성
let div = document.createElement('div');

div.className = 'box';
// div.innerHTML = "div태그 만듦";
// 속성값도 js에서 직접 넣을 수 있다. 
div.innerHTML = "<b>div태그</b> 만듦";

// 넣어주고 싶은 요소 선택 후 .append()
// 요소.append : 해당 요소 안쪽 마지막에 추가
// document.body.append(div);
// 요소.prepend : 해당 요소 왼쪽 첫번째에 추가
document.body.prepend(div); // script 위에 있는지 아래에 있는지 확인하기
// 요소.before : 해당 요소 전에 추가
// 요소.after : 해당 요소 후에 추가

const ulTag = document.querySelector('.list');

// 만들고 싶은 태그를 createElement()안에 넣기
let pTag = document.createElement('p');
// 텍스트만 넣고 싶다면 innertext
pTag.innerHTML = "앞에 들어갈 p태그";

ulTag.before(pTag); // pTag를 ul태그 앞에 넣겠다는 뜻 / after을 쓰면 뒤에 넣겠다는 뜻

let liTag = document.createElement('li');
liTag.innerHTML = '새로 생성한 li태그'; // 새로 생성한 태그를 HTML에 추가하겠다는 뜻
ulTag.append(liTag); // 새로 생성한 태그를 HTML 안 어디에 "append"에, 제일 마지막에 추가하겠다는 뜻

// 요소를 remove로 삭제
liTag.remove()