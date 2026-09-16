// const small = document.querySelector(".form__small");
// const success = (position) => {
//     const {latitude} = position.coords;
//     const {longitude} = position.coords;

//     small.textContent = "";
//     console.log(latitude, longitude);

//     getWeather(`${latitude},${longitude}`);
// }

// const error = () => {
//     // Can also be led by localisation not allowed in browser parameters
//     if (small.textContent) small.textContent = "";

//     const smallSpan = document.createElement("span");
//     smallSpan.classList.add("form__small--red-dot");
//     smallSpan.textContent = "*";
//     small.appendChild(smallSpan);
//     small.insertAdjacentText("beforeend", "Error during geolocation");
// }

// const findGeolocation = () => {
//     if (!navigator.geolocation) {
//         small.textContent = "Geolocation not supported for this browser";
//     } else {
//         small.textContent = "Locating position...";

//         // Need to have success / error callback as parameters
//         navigator.geolocation.getCurrentPosition(success, error);
//     }
// }
// document.querySelector(".geolocation-btn").addEventListener("click", findGeolocation);