import { preloader, buttonSelector, inputSelector } from "./constants";

const loader = (isLoader) => {
    if (isLoader) {
        preloader.classList.add('preloader_opened');
        buttonSelector.setAttribute("disabled", "disabled");
        inputSelector.forEach((input) => {
            input.setAttribute("disabled", "disabled");
        });
    } else {
        preloader.classList.remove('preloader_opened');
        buttonSelector.removeAttribute("disabled", "disabled");
        inputSelector.forEach((input) => {
            input.removeAttribute("disabled", "disabled");
        });
    };
};

export default loader;