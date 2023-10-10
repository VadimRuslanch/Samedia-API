import { authTitleElemnet, validationConfig } from "./constants";

const appearAuthBlock = (name) => {
    validationConfig.formElement.classList.add('auth_hidden');
    authTitleElemnet.textContent = `${name}, Вы успешно авторизованы!`;
};

export default appearAuthBlock;