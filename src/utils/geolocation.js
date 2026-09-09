// // Use the Geolocation API
// import * as home from "../home";

// const statusEl = document.querySelector("#status");

// const success = (position) => {
//     const {latitude} = position.coords;
//     const {longitude} = position.coords;

//     statusEl.textContent = "";
//     console.log(latitude, longitude);

//     home.getWeather(`${latitude},${longitude}`);
//     return {latitude, longitude};
// }

// const error = () => {
//     statusEl.textContent = "Error while locating user's position";
//     // Add also error class
// }

// // eslint-disable-next-line import/prefer-default-export
// export const findGeolocation = () => {
//     if (!navigator.geolocation) {
//         statusEl.textContent = "Geolocation not supported for this browser";
//     } else {
//         statusEl.textContent = "Locating position...";

//         // Need to have success / error callback as parameters
//         navigator.geolocation.getCurrentPosition(success, error);
//     }
// }
