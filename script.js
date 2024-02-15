async function fetchweatherdata(cityname){
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=9c4cec905ddbfbaa5429c0031b747ee6`
	const response = await fetch(url);
	const data = await response.json();
	let city = document.getElementById("city");
	city.innerHTML = data.name;
	let windSpeed = document.getElementById("wind_speed");
	windSpeed.innerHTML =data.wind.speed+" km/hr"; 
	let humidity = document.getElementById("humidity");
	humidity.innerHTML = data.main.humidity+" g/kg";
	let temp = document.getElementById("temp");
	temp.innerHTML = Math.round((data.main.temp)-273.15)+"°C";
	console.log(data);
}

function fetchCity(){
	let cityName = document.getElementById("city_name");
	if (cityName.value==="") {
		alert("Enter a city name");
	}
	else{
		fetchweatherdata(cityName.value);
		cityName.value="";
	}
}