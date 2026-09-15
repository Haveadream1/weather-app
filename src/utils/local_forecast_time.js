// Calculate the forecast time starting with the local time up to 6 hours
export const getForecastTime = (startingDay, startingHour) => {
    // Populate array with the starting day and hours
    const timeArray = [
        {
            day: startingDay, 
            hour: startingHour
        },
    ];

    let forecastDay = startingDay;
    let forecastHour = startingHour;

    for (let i = 0; i < 3; i+=1) {
        forecastHour += 2;

        // Reset hours and increase days as midnight is considered as next day
        if (forecastHour >= 24) {
            forecastHour -= 24;
            forecastDay += 1;
        }
        timeArray.push({day: forecastDay, hour: forecastHour});
    }
    return timeArray;
}

export const getCurrentLocalTime = (initialDay, localFulltime) => {
    const localtime = localFulltime.slice(11, 16);

    let currentDay = initialDay;
    let currentHour = Number(localtime.slice(0, 2));
    const currentMinutes = localtime.slice(3, 5);

    // Midnight is considered as next day on API
    if (currentHour === 24) currentDay += 1;

    // Round time to nearest hour, if minutes >= 30 then hour += 1, < 30 keep same hour
    if (currentMinutes >= 30) currentHour += 1;

    // No need to think about minutes, we use clock hours
    return {currentDay, currentHour};
}
