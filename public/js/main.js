const submitbtn = document.getElementById("submitbtn");

const cityName = document.getElementById("cityName");

const city_name = document.getElementById("city_name");

const temp = document.getElementById("temp");

const temp_status = document.getElementById("temp_status");

const data_hide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();

  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Please Enter The Name Before Search`;
    data_hide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=8ebbafd5de17026423070e5d2d0a00e8`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      temp.innerText = arrData[0].main.temp;
      city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`;

      const tempMood = arrData[0].weather[0].main;
      console.log(tempMood);

      if (tempMood === "Clear") {
        temp_status.innerHTML = "<i class='fa-duotone fa-sun'></i>";
      } else if (tempMood === "Clouds") {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud' ></i>";
      } else if (tempMood === "Rain") {
        temp_status.innerHTML = "<i class='fa-solid fa-cloud-drizzle'></i>";
      } else {
        temp_status.innerHTML = "<i class='fa-duotone fa-sun'></i>";
      }
      data_hide.classList.remove("data_hide");
    } catch (error) {
      city_name.innerText = `Please Enter The Valid City Name `;
      data_hide.classList.add("data_hide");
    }
  }
};

submitbtn.addEventListener("click", getInfo);
