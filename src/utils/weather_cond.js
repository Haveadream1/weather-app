// From the json file from the documentation API, format it to get the code as key
// Use to decide which icon should be used depending on weather conditions code

// Import from the library icons meteocons the image path
import clearDay from "@meteocons/svg/fill/clear-day.svg";
import partlyCloudy from "@meteocons/svg/fill/partly-cloudy-day.svg";
import cloudy from "@meteocons/svg/fill/cloudy.svg";
import overcast from "@meteocons/svg/fill/overcast.svg";
import haze from "@meteocons/svg/fill/haze.svg";
import dust from "@meteocons/svg/fill/dust.svg";
import windDust from "@meteocons/svg/fill/wind-dust.svg";
import thunderstorms from "@meteocons/svg/fill/thunderstorms.svg";
import thunderstormsExtreme from "@meteocons/svg/fill/thunderstorms-extreme.svg";
import partlyCloudyDayFog from "@meteocons/svg/fill/partly-cloudy-day-fog.svg";
import smoke from "@meteocons/svg/fill/smoke.svg";
import overcastSmoke from "@meteocons/svg/fill/overcast-smoke.svg";
import smokeParticles from "@meteocons/svg/fill/smoke-particles.svg";
import extremeSmoke from "@meteocons/svg/fill/extreme-smoke.svg";
import rain from "@meteocons/svg/fill/rain.svg";
import snow from "@meteocons/svg/fill/snow.svg";
import sleet from "@meteocons/svg/fill/sleet.svg";
import drizzle from "@meteocons/svg/fill/drizzle.svg";
import windSnow from "@meteocons/svg/fill/wind-snow.svg";
import extremeSnow from "@meteocons/svg/fill/extreme-snow.svg";
import fog from "@meteocons/svg/fill/fog.svg";
import overcastSnow from "@meteocons/svg/fill/overcast-snow.svg";
import extremeDrizzle from "@meteocons/svg/fill/extreme-drizzle.svg";
import extremeRain from "@meteocons/svg/fill/extreme-rain.svg";
import extremeSleet from "@meteocons/svg/fill/extreme-sleet.svg";
import snowflake from "@meteocons/svg/fill/snowflake.svg";
import overcastRain from "@meteocons/svg/fill/overcast-rain.svg";
import thunderstormsExtremeRain from "@meteocons/svg/fill/thunderstorms-extreme-rain.svg";
import overcastSleet from "@meteocons/svg/fill/overcast-sleet.svg";
import thunderstormsRain from "@meteocons/svg/fill/thunderstorms-rain.svg";
import thunderstormsSnow from "@meteocons/svg/fill/thunderstorms-snow.svg";
import thunderstormsExtremeSnow from "@meteocons/svg/fill/thunderstorms-extreme-snow.svg";

const weatherConditions = {
    1000: { day: "Sunny", night: "Clear", icon: clearDay },
    1003: { day: "Partly cloudy", night: "Partly cloudy", icon: partlyCloudy },
    1006: { day: "Cloudy", night: "Cloudy", icon: cloudy },
    1009: { day: "Overcast", night: "Overcast", icon: overcast },
    1012: { day: "Haze", night: "Haze", icon: haze },
    1015: { day: "Dust haze", night: "Dust haze", icon: haze },
    1018: { day: "Blowing dust", night: "Blowing dust", icon: dust },
    1021: { day: "Dust storm", night: "Dust storm", icon: windDust },
    1024: { day: "Sandstorm", night: "Sandstorm", icon: thunderstorms },
    1027: { day: "Severe sandstorm", night: "Severe sandstorm", icon: thunderstormsExtreme },
    1030: { day: "Mist", night: "Mist", icon: partlyCloudyDayFog },
    1033: { day: "Smoke", night: "Smoke", icon: smoke },
    1036: { day: "Smoky haze", night: "Smoky haze", icon: overcastSmoke },
    1039: { day: "Smog", night: "Smog", icon: smokeParticles },
    1042: { day: "Severe smog", night: "Severe smog", icon: extremeSmoke },
    1045: { day: "Saharan dust", night: "Saharan dust", icon: windDust },
    1048: { day: "Dust", night: "Dust", icon: dust },
    1063: { day: "Patchy rain possible", night: "Patchy rain possible", icon: rain },
    1066: { day: "Patchy snow possible", night: "Patchy snow possible", icon: snow },
    1069: { day: "Patchy sleet possible", night: "Patchy sleet possible", icon: sleet },
    1072: { day: "Patchy freezing drizzle possible", night: "Patchy freezing drizzle possible", icon: drizzle },
    1087: { day: "Thundery outbreaks possible", night: "Thundery outbreaks possible", icon: thunderstorms },
    1114: { day: "Blowing snow", night: "Blowing snow", icon: windSnow },
    1117: { day: "Blizzard", night: "Blizzard", icon: extremeSnow },
    1135: { day: "Fog", night: "Fog", icon: fog },
    1147: { day: "Freezing fog", night: "Freezing fog", icon: overcastSnow },
    1150: { day: "Patchy light drizzle", night: "Patchy light drizzle", icon: drizzle },
    1153: { day: "Light drizzle", night: "Light drizzle", icon: drizzle },
    1168: { day: "Freezing drizzle", night: "Freezing drizzle", icon: drizzle },
    1171: { day: "Heavy freezing drizzle", night: "Heavy freezing drizzle", icon: extremeDrizzle },
    1180: { day: "Patchy light rain", night: "Patchy light rain", icon: rain },
    1183: { day: "Light rain", night: "Light rain", icon: rain },
    1186: { day: "Moderate rain at times", night: "Moderate rain at times", icon: rain },
    1189: { day: "Moderate rain", night: "Moderate rain", icon: rain },
    1192: { day: "Heavy rain at times", night: "Heavy rain at times", icon: extremeRain },
    1195: { day: "Heavy rain", night: "Heavy rain", icon: extremeRain },
    1198: { day: "Light freezing rain", night: "Light freezing rain", icon: rain },
    1201: { day: "Moderate or heavy freezing rain", night: "Moderate or heavy freezing rain", icon: extremeRain },
    1204: { day: "Light sleet", night: "Light sleet", icon: sleet  },
    1207: { day: "Moderate or heavy sleet", night: "Moderate or heavy sleet", icon: extremeSleet },
    1210: { day: "Patchy light snow", night: "Patchy light snow", icon: snow },
    1213: { day: "Light snow", night: "Light snow", icon: snow },
    1216: { day: "Patchy moderate snow", night: "Patchy moderate snow", icon: overcastSnow },
    1219: { day: "Moderate snow", night: "Moderate snow", icon: overcastSnow },
    1222: { day: "Patchy heavy snow", night: "Patchy heavy snow", icon: extremeSnow },
    1225: { day: "Heavy snow", night: "Heavy snow", icon: extremeSnow },
    1237: { day: "Ice pellets", night: "Ice pellets", icon: snowflake },
    1240: { day: "Light rain shower", night: "Light rain shower", icon: rain },
    1243: { day: "Moderate or heavy rain shower", night: "Moderate or heavy rain shower", icon: overcastRain },
    1246: { day: "Torrential rain shower", night: "Torrential rain shower", icon: thunderstormsExtremeRain },
    1249: { day: "Light sleet showers", night: "Light sleet showers", icon: sleet },
    1252: { day: "Moderate or heavy sleet showers", night: "Moderate or heavy sleet showers", icon: overcastSleet },
    1255: { day: "Light snow showers", night: "Light snow showers", icon: snow },
    1258: { day: "Moderate or heavy snow showers", night: "Moderate or heavy snow showers", icon: overcastSnow },
    1261: { day: "Light showers of ice pellets", night: "Light showers of ice pellets", icon: snowflake },
    1264: { day: "Moderate or heavy showers of ice pellets", night: "Moderate or heavy showers of ice pellets", icon: extremeSnow },
    1273: { day: "Patchy light rain with thunder", night: "Patchy light rain with thunder", icon: thunderstormsRain},
    1276: { day: "Moderate or heavy rain with thunder", night: "Moderate or heavy rain with thunder", icon: thunderstormsExtremeRain },
    1279: { day: "Patchy light snow with thunder", night: "Patchy light snow with thunder", icon: thunderstormsSnow },
    1282: { day: "Moderate or heavy snow with thunder", night: "Moderate or heavy snow with thunder", icon: thunderstormsExtremeSnow }
};
export default weatherConditions;