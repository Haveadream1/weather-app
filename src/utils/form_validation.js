import * as domHandler from "../dom_handler";

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
    input.classList.add("form__input--error");
    input.classList.remove("form__input--success");

    const small = form.querySelector(".form__small");
    // Avoid to re-create element if already exists
    if (small.textContent) return;

    // Create DOM element to make the error more visible
    domHandler.displayErrorMessage(message);
};

const showSuccess = (input) => {
    input.classList.remove("form__input--error");
    input.classList.add("form__input--success");

    const small = form.querySelector(".form__small");
    small.textContent = "";
};

const checkInput = (input, city) => {
    let valid = false;

    // Check the input is not empty
    if (!isRequired(city)) {
        showError(input, "Choose a city");
    // Check if the form is not flagged by the API call for invalid city
    } else if (!isCityValid()) {
        showError(input, "Invalid city name");
    } else {
        showSuccess(input);
        valid = true;
    }
    return valid;
};
export default checkInput;