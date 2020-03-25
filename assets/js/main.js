
function wahl() {
    let city = document.getElementById("stadt").value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1de7263966380957316cc587deb092da`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.main.temp)
            let temperature = (data.main.temp - 273.15).toFixed()
            let tempGefühl = (data.main.feels_like - 273.15).toFixed()
            let tempmin = (data.main.temp_min - 273.15).toFixed()
            let tempmax = (data.main.temp_max - 273.15).toFixed()
            console.log(city)
            if (city = data.name) {
                document.getElementById("resultStadt").innerHTML = `Wetter ${data.name}`
                document.getElementById("resultGrad").innerHTML = `${temperature}º`
                document.getElementById("img").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                document.getElementById("resultWind").innerText = `Wind ${data.wind.speed} m/s`
                document.getElementById("resultFeucht").innerHTML = `Feichtigkeit ${data.main.humidity}%`
                document.getElementById("resultDruck").innerHTML = `Luftdruck ${data.main.pressure} hPa`
                document.getElementById("gefühl").innerHTML = `Fühlt sich an wie ${tempGefühl}º`
                document.getElementById("min").innerHTML = `Min ${tempmin}º`
                document.getElementById("max").innerHTML = `Max ${tempmax}º`
            }
        })
    event.preventDefault()
}










