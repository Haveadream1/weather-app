// From the json file from the documentation API, format it to get the code as key
// Use to decide which icon should be used depending on weather conditions code

// Import from the library icons meteocons the image path
import moisture from "@meteocons/svg/fill/humidity.svg";
import breeze from "@meteocons/svg/fill/windsock-moderate.svg";
import uvIndex from "@meteocons/svg/fill/uv-index.svg";
import sunrise from "@meteocons/svg/fill/sunrise.svg";
import sunset from "@meteocons/svg/fill/sunset.svg";
import clearDay from "@meteocons/svg/fill/clear-day.svg";
import partlyCloudyDay from "@meteocons/svg/fill/partly-cloudy-day.svg";
import partlyCloudyNight from "@meteocons/svg/fill/partly-cloudy-night.svg";
import overcastDay from "@meteocons/svg/fill/overcast-day.svg";
import overcastNight from "@meteocons/svg/fill/overcast-night.svg";
import extremeDayHaze from "@meteocons/svg/fill/extreme-day-haze.svg";
import extremeNightHaze from "@meteocons/svg/fill/extreme-night-haze.svg";
import partlyCloudyDayHaze from "@meteocons/svg/fill/partly-cloudy-day-haze.svg";
import partlyCloudyNightHaze from "@meteocons/svg/fill/partly-cloudy-night-haze.svg";
import dustDay from "@meteocons/svg/fill/dust-day.svg";
import dustNight from "@meteocons/svg/fill/dust-night.svg";
import extremeDaySmoke from "@meteocons/svg/fill/extreme-day-smoke.svg";
import extremeNightSmoke from "@meteocons/svg/fill/extreme-night-smoke.svg";
import mostlyClearDayRain from "@meteocons/svg/fill/mostly-clear-day-rain.svg";
import mostlyClearNightRain from "@meteocons/svg/fill/mostly-clear-night-rain.svg";
import overcastDayRain from "@meteocons/svg/fill/overcast-day-rain.svg";
import overcastNightRain from "@meteocons/svg/fill/overcast-night-rain.svg";
import extremeDayRain from "@meteocons/svg/fill/extreme-day-rain.svg";
import extremeNightRain from "@meteocons/svg/fill/extreme-night-rain.svg";
import thunderstormsDayRain from "@meteocons/svg/fill/thunderstorms-day-rain.svg";
import thunderstormsNightRain from "@meteocons/svg/fill/thunderstorms-night-rain.svg";
import thunderstormsExtremeDayRain from "@meteocons/svg/fill/thunderstorms-extreme-day-rain.svg";
import thunderstormsExtremeNightRain from "@meteocons/svg/fill/thunderstorms-extreme-night-rain.svg";
import mostlyClearDaySnow from "@meteocons/svg/fill/mostly-clear-day-snow.svg";
import mostlyClearNightSnow from "@meteocons/svg/fill/mostly-clear-night-snow.svg";
import overcastDaySnow from "@meteocons/svg/fill/overcast-day-snow.svg";
import overcastNightSnow from "@meteocons/svg/fill/overcast-night-snow.svg";
import extremeDaySnow from "@meteocons/svg/fill/extreme-day-snow.svg";
import extremeNightSnow from "@meteocons/svg/fill/extreme-night-snow.svg";
import thunderstormsDaySnow from "@meteocons/svg/fill/thunderstorms-day-snow.svg";
import thunderstormsNightSnow from "@meteocons/svg/fill/thunderstorms-night-snow.svg";
import thunderstormsExtremeDaySnow from "@meteocons/svg/fill/thunderstorms-extreme-day-snow.svg";
import thunderstormsExtremeNightSnow from "@meteocons/svg/fill/thunderstorms-extreme-night-snow.svg";
import mostlyClearDaySleet from "@meteocons/svg/fill/mostly-clear-day-sleet.svg";
import mostlyClearNightSleet from "@meteocons/svg/fill/mostly-clear-night-sleet.svg";
import extremeDaySleet from "@meteocons/svg/fill/extreme-day-sleet.svg";
import extremeNightSleet from "@meteocons/svg/fill/extreme-night-sleet.svg";
import mostlyClearDayFog from "@meteocons/svg/fill/mostly-clear-day-fog.svg";
import mostlyClearNightFog from "@meteocons/svg/fill/mostly-clear-night-fog.svg";
import mostlyClearDayDrizzle from "@meteocons/svg/fill/mostly-clear-day-drizzle.svg";
import mostlyClearNightDrizzle from "@meteocons/svg/fill/mostly-clear-night-drizzle.svg";
import overcastDayDrizzle from "@meteocons/svg/fill/overcast-day-drizzle.svg";
import overcastNightDrizzle from "@meteocons/svg/fill/overcast-night-drizzle.svg";
import extremeDayDrizzle from "@meteocons/svg/fill/extreme-day-drizzle.svg";
import extremeNightDrizzle from "@meteocons/svg/fill/extreme-night-drizzle.svg";
import thunderstormsDay from "@meteocons/svg/fill/thunderstorms-day.svg";
import thunderstormsNight from "@meteocons/svg/fill/thunderstorms-night.svg";
import thunderstormsExtremeSnow from "@meteocons/svg/fill/thunderstorms-extreme-snow.svg";
import cyclone from "@meteocons/svg/fill/hurricane.svg";
import cloudy from "@meteocons/svg/fill/cloudy.svg";
import haze from "@meteocons/svg/fill/haze.svg";
import dust from "@meteocons/svg/fill/dust.svg";
import windDust from "@meteocons/svg/fill/wind-dust.svg";
import partlyCloudyDayFog from "@meteocons/svg/fill/partly-cloudy-day-fog.svg";
import partlyCloudyNightFog from "@meteocons/svg/fill/partly-cloudy-night-fog.svg";
import smoke from "@meteocons/svg/fill/smoke.svg";
import smokeParticles from "@meteocons/svg/fill/smoke-particles.svg";
import rain from "@meteocons/svg/fill/rain.svg";
import snow from "@meteocons/svg/fill/snow.svg";
import sleet from "@meteocons/svg/fill/sleet.svg";
import windSnow from "@meteocons/svg/fill/wind-snow.svg";
import extremeSnow from "@meteocons/svg/fill/extreme-snow.svg";
import fog from "@meteocons/svg/fill/fog.svg";
import extremeRain from "@meteocons/svg/fill/extreme-rain.svg";
import snowflake from "@meteocons/svg/fill/snowflake.svg";

const weatherConditions = {
    6000: { rise: sunrise, set: sunset },
    7000: { humidity: moisture, wind: breeze, uv: uvIndex},
    1000: { day: clearDay, night: clearDay },
    1003: { day: partlyCloudyDay, night: partlyCloudyNight },
    1006: { day: cloudy, night: cloudy },
    1009: { day: overcastDay, night: overcastNight },
    1012: { day: haze, night: haze },
    1015: { day: partlyCloudyDayHaze , night: partlyCloudyNightHaze },
    1018: { day: dust, night: dust },
    1021: { day: windDust, night: windDust },
    1024: { day: windDust, night: windDust },
    1027: { day: cyclone, night: cyclone },
    1030: { day: partlyCloudyDayFog, night: partlyCloudyNightFog },
    1033: { day: smoke, night: smoke },
    1036: { day: extremeDayHaze, night: extremeNightHaze },
    1039: { day: smokeParticles, night: smokeParticles },
    1042: { day: extremeDaySmoke, night: extremeNightSmoke },
    1045: { day: dust, night: dust },
    1048: { day: dustDay, night: dustNight },
    1063: { day: rain, night: rain },
    1066: { day: mostlyClearDaySnow, night: mostlyClearNightSnow },
    1069: { day: sleet, night: sleet },
    1072: { day: mostlyClearDaySleet, night: mostlyClearNightSleet },
    1087: { day: thunderstormsDay, night: thunderstormsNight },
    1114: { day: windSnow, night: windSnow },
    1117: { day: thunderstormsExtremeSnow, night: thunderstormsExtremeSnow},
    1135: { day: mostlyClearDayFog, night: mostlyClearNightFog },
    1147: { day: fog , night: fog },
    1150: { day: mostlyClearDayDrizzle, night: mostlyClearNightDrizzle },
    1153: { day: mostlyClearDayDrizzle, night: mostlyClearNightDrizzle },
    1168: { day: overcastDayDrizzle, night: overcastNightDrizzle },
    1171: { day: extremeDayDrizzle, night: extremeNightDrizzle },
    1180: { day: mostlyClearDayRain, night: mostlyClearNightRain },
    1183: { day: mostlyClearDayRain, night: mostlyClearNightRain },
    1186: { day: overcastDayRain, night: overcastNightRain },
    1189: { day: overcastDayRain, night: overcastNightRain },
    1192: { day: extremeDayRain, night: extremeNightRain },
    1195: { day: extremeRain, night: extremeRain },
    1198: { day: mostlyClearDayRain, night: mostlyClearNightRain },
    1201: { day: extremeDayRain, night: extremeNightRain },
    1204: { day: mostlyClearDaySleet, night: mostlyClearNightSleet },
    1207: { day: extremeDaySleet, night: extremeNightSleet },
    1210: { day: mostlyClearDaySnow, night: mostlyClearNightSnow },
    1213: { day: mostlyClearDaySnow, night: mostlyClearNightSnow},
    1216: { day: overcastDaySnow, night: overcastNightSnow },
    1219: { day: overcastDaySnow, night: overcastNightSnow },
    1222: { day: extremeDaySnow, night: extremeNightSnow },
    1225: { day: extremeDaySnow, night: extremeNightSnow },
    1237: { day: snowflake, night: snowflake },
    1240: { day: mostlyClearDayRain, night: mostlyClearNightRain },
    1243: { day: extremeDayRain, night: extremeNightRain },
    1246: { day: extremeRain, night: extremeRain },
    1249: { day: mostlyClearDaySleet, night: mostlyClearNightSleet },
    1252: { day: extremeDaySnow, night: extremeNightSnow },
    1255: { day: mostlyClearDaySnow, night: mostlyClearNightSnow },
    1258: { day: extremeDaySnow, night: extremeNightSnow },
    1261: { day: snow, night: snow },
    1264: { day: extremeSnow, night: extremeSnow },
    1273: { day: thunderstormsDayRain, night: thunderstormsNightRain },
    1276: { day: thunderstormsExtremeDayRain, night: thunderstormsExtremeNightRain },
    1279: { day: thunderstormsDaySnow, night: thunderstormsNightSnow },
    1282: { day: thunderstormsExtremeDaySnow, night: thunderstormsExtremeNightSnow }
};
export default weatherConditions;