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
    let entries = [];
    data.list.forEach(entry => {
        entries.push(parseEntry(entry))
    })
    return entries
}

function parseEntry (entry) {
    return {
        isoDate: toLocaleDateString(entry.dt_txt),
        temperature: kelvinToFarenheit(entry.main.temp),
        weather: entry.weather[0].main,
        desc: entry.weather[0].description,
        icon: entry.weather[0].icon
    }
}

export {parseForecastData}