const countryCoordinates = {
  한국: {
    latitude: 37.5665,   
    longitude: 126.9780
  },
  일본: {
    latitude: 35.6895,   
    longitude: 139.6917
  },
  미국: {
    latitude: 38.9072,   
    longitude: -77.0369
  },
  영국: {
    latitude: 51.5074,   
    longitude: -0.1278
  },
  프랑스: {
    latitude: 48.8566,   
    longitude: 2.3522
  },
  알제리: {
    latitude: 36.7538,   
    longitude: 3.0588
  }
};

const selectBox = document.querySelector('select');

selectBox.addEventListener('change', () => {
  const selectCountry = selectBox.value;

  const lat = countryCoordinates[selectCountry].latitude;
  const lon = countryCoordinates[selectCountry].longitude;
  console.log(`위도:${lat}, 경도:${lon}`);
    
  const APIkey = 'f9856c980175a583e7ae19b57fdde737';
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric&lang=kr`;
  
  const name = document.querySelector('.name');
  const temp = document.querySelector('.temp');
  const desc = document.querySelector('.description');
  const weatherImg = document.querySelector('.weather > img');

  fetch(URL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      name.innerHTML = data.name;
      temp.innerHTML = data.main.temp;
      desc.innerHTML = data.weather[0].description;

      const icon = data.weather[0].icon;

      const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`;
      weatherImg.setAttribute('src', iconURL);
    })
  
})


