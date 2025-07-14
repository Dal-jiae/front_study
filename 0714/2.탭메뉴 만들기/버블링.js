const btns = document.querySelectorAll('.tab-button');
const content = document.querySelectorAll('.tab-content');


function clearClassList() {
  for(let j=0; j<btns.length; j++){
    btns[j].classList.remove('selected');
    content[j].classList.remove('show');
  }
}

document.querySelector('.list').addEventListener('click', (e) => {
  let no = e.target.dataset.no; //클릭한 객체 잡힘.데이터셋에 잡힌 넘버(인덱스 뽑을 수 있음)
  console.log(no);

  if(no != undefined ) {
    clearClassList();
    btns[no].classList.add('selected');
    content[no].classList.add('show');
  }

})


