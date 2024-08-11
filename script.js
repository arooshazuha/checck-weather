
const btn = document.getElementById("search-btn")
const input = document.getElementById("input-box")
const weatherIcon = document.getElementById("weather-icon")
const apiKey = "f6c01ff97056de599aefed12870d51c8"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

async function changeWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()

    if (response.status == 404) {
        error()
    } else {
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
        document.getElementById("city").innerHTML = data.name
        document.getElementById("temp").innerHTML = Math.floor(data.main.temp) + "°C"
        document.getElementById("country").innerHTML = data.sys.country
        document.getElementById("sunrise").innerHTML = data.sys.sunrise
        document.getElementById("sunset").innerHTML = data.sys.sunset
        document.getElementById("humidity").innerHTML = data.main.humidity + "%"
        document.getElementById("wind-speed").innerHTML = data.wind.speed + "km/h"

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png"
            document.body.style.backgroundImage = "url('cloudsbg.jpg')"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png"
            document.body.style.backgroundImage = 'url("clearbg.jpg")'
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png"
            document.body.style.backgroundImage = 'url("drizzlebg.jpg")'
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png"
            document.body.style.backgroundImage = 'url("mistbg.jpg")'
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png"
            document.body.style.backgroundImage = 'url("rainbg.jpg")'
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png"
            document.body.style.backgroundImage = 'url("snowbg.jpg")'
        } else if (data.weather[0].main == "Smoke") {
            weatherIcon.src = "smoke.png"
            document.body.style.backgroundImage = 'url("smokebg.jpg")'
        } else {
            weatherIcon.src = "haze.png"
            document.body.style.backgroundImage = 'url("hazebg.webp")'
        }
    }
    console.log(data)
}



btn.addEventListener("click", function () {
    changeWeather(input.value)

})

function error() {
    document.querySelector(".weather").style.display = "none"
    document.querySelector(".error").style.display = "block"
}