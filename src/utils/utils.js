function kelvinToFarenheit(tempKelvin) {
    let tempFarenheit = Math.round(1.8 * (tempKelvin - 273) + 32);
    return tempFarenheit.toString();
}

function toLocaleDateString(isoDate) {
    let date = new Date(isoDate);

    const WEEKDAYS = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    };

    let weekday = WEEKDAYS[date.getDay()];

    const MONTHS = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    };

    let month = MONTHS[date.getMonth()];

    return `${weekday}, ${month} ${date.getDate()}`;

}


function parseForecastData(data) {
    console.log(data)
    
    let entries = [];

    // Get only one day
    // 8 timestamps per day
    for (let i = 0; i < data.list.length; i++) {
        if (i % 8 == 0) {
            entries.push(parseEntry(data.list[i]))
        }
    }

    const date = new Date()
    const offset = date.getTimezoneOffset() * 60 * 1000

    let timezone = data.city.timezone;


    let sunriseDate = new Date(data.city.sunrise * 1000  + offset + timezone * 1000)
    let sunsetDate = new Date(data.city.sunset * 1000 + offset + timezone * 1000)


    return {entries: entries, sunrise: sunriseDate.toLocaleTimeString('en-us'), sunset: sunsetDate.toLocaleTimeString('en-us')}
}

function parseEntry (entry) {
    return {
        isoDate: toLocaleDateString(entry.dt_txt),
        temperature: kelvinToFarenheit(entry.main.temp),
        weather: entry.weather[0].main,
        desc: entry.weather[0].description,
        icon: entry.weather[0].icon,
    }
}


function parseCoords(data) {
    console.log(data)
    let lat = data[0].lat
    let lon = data[0].lon

    return {latitude: lat, longitude: lon}
}

export {parseForecastData, parseCoords}