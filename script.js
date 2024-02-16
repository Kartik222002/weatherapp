async function fetchWeatherData(cityName) {
	let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=dbe9791f56d83d4e37d88a42008ccbeb`;
	const response= await fetch(url)
	const data = await response.json();
	console.log(data)
}
//demo()

function fetchCity(){
	let cityName = document.getElementById("city_name").value;
	if(cityName.value===""){
		alert("enter a city name");
	}else{
		fetchWeatherData(cityName.value);
		cityName.value="";
	}

}