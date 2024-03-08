const apiKey = '8d6454a89dff871786a0307b0dbebbee';
// const city="Bhopal";

async function fetchWeatherData(city)
{
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const data=await response.json();
    console.log(data);
    // console.log(data.main.temp);
    // console.log(data.name);
    // console.log(data.main.humidity);
    updateWeatherUI(data);
}
// fetchWeatherData();

const cityElement=document.querySelector(".city");
const temperature=document.querySelector(".temp");
const windSpeed=document.querySelector(".wind-speed");
const humidity=document.querySelector(".humidity")
const visibility=document.querySelector(".visibility-distance");
const descriptionText=document.querySelector(".description-text");
const date=document.querySelector(".date");

function updateWeatherUI(data)
{

    cityElement.textContent=data.name;
    temperature.textContent=`${Math.round(data.main.temp)}`;
    windSpeed.textContent= `${data.wind.speed} km/hr`;
    humidity.textContent=`${data.main.humidity}%`;
    visibility.textContent=`${data.visibility/1000}km`;
    descriptionText.textContent=data.weather[0].description;

    const currentDate=new Date();
    date.textContent=currentDate.toDateString();
}
const formElement=document.querySelector(".search-form");

const inputElement=document.querySelector('.city');
formElement.addEventListener('submit',function(e)
{
    e.preventDefault();//1
   const city= inputElement.value
   if(city==' ')
   {
    fetchWeatherData(city);
    inputElement.value="";
   }
})