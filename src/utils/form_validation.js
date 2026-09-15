const form = document.querySelector("#form");

const isRequired = (inputValue) => {
    if (inputValue === "") {
        return false;
    }
    return true;
};

const isCityValid = () => {
    const formClass = document.querySelector("#form").className;
    if (formClass === "invalid") {
        return false;
    }
    return true;
};

const showError = (input, message) => {
    input.classList.add("error");
    input.classList.remove("success");

    // Create DOM element to make the error more visible
    const small = form.querySelector(".form__small");
    const smallSpan = document.createElement("span");
    smallSpan.classList.add("form__small--red-dot");
    smallSpan.textContent = "*";
    small.appendChild(smallSpan);
    small.insertAdjacentText("beforeend", message);
};

const showSuccess = (input) => {
    input.classList.remove("error");
    input.classList.add("success");

    const small = form.querySelector(".form__small");
    small.textContent = "";
};

const checkInput = (cityInput, city) => {
    let valid = false;

    // Check the input is not empty
    if (!isRequired(city)) {
        showError(cityInput, "Choose a city");
    // Check if the form is not flagged by the API call for invalid city
    } else if (!isCityValid()) {
        showError(cityInput, "Invalid city name");
    } else {
        showSuccess(cityInput);
        valid = true;
    }
    return valid;    
};
export default checkInput;