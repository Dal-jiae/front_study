// 사용자 위치 정보 받기

function connectGeo(position) { // 현 브라우저의 위치를 알기 위해
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  
  console.log(`위도:${lat}, 경도:${lon}`);

  const APIkey = 'f9856c980175a583e7ae19b57fdde737';
  // ? 뒤에는 원하는 정보 삽입 가능. 여러개 삽입할 때는 &로 이어서 적기
  // units=metric은 화씨를 섭씨로 바꾸는 기능
  // 사용 방법은 API doc에 자세히 적혀있음
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric&lang=kr`

  fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })


  const weather_des = document.querySelector('.weather_description');
  const weather_main = document.querySelector('.weather_main');
  const temp = document.querySelector('.temp');
  const name = document.querySelector('.name');
  const weatherImg = document.querySelector('.container > img');
  
  fetch(URL)
    .then(response => response.json())
    .then(data => {
      name.innerHTML = data.name;
      temp.innerHTML = data.main.temp;

      console.log(data.weather); // 객체 어느 위치에 있는지 찾아봐야 함. [{...}] 배열이란 소리
      weather_des.innerHTML = data.weather[0].description; // data 안에 있는 weather 배열 안에 0번 위치에 있는 description 값을 가져오는 것
      weather_main.innerHTML = data.weather[0].main;

      // URL 객체 안에 있는 수시로 바뀌는 icon 값을 받아주는 변수가 있어야 함
      const icon = data.weather[0].icon;

      const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      weatherImg.setAttribute('src', iconURL)
    })
    
}

function errorGeo() {
  alert('위치 정보 연결 실패');
}

navigator.geolocation.getCurrentPosition(connectGeo, errorGeo);



