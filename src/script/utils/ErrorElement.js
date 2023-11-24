export default class ErrorElement {
    constructor(res, config) {
        this._data = res;

        this._formElement = config.formElement;

        this._fieldElement = config.fieldElement;

        this._inputSelector = config.inputSelector;

        this._fieldErrorClass = config.fieldErrorClass;

        this._inputErrorClass = config.inputErrorClass;

        this._errorClass = config.errorClass;

        this._fieldList = this._formElement.querySelectorAll(this._fieldElement);

        this._inputList = this._formElement.querySelectorAll(this._inputSelector);

    }

    visibleError = () => {
        const errorElement = this._formElement.querySelector('.auth__error');
        errorElement.textContent = this._data.errorMessage;
        errorElement.classList.add(this._errorClass);
        this._fieldList.forEach((field) => {
            field.classList.add(this._fieldErrorClass);
        })
    };

    hiddenError = () => {
        const errorElement = this._formElement.querySelector('.auth__error');
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
        this._fieldList.forEach((field) => {
            field.classList.remove(this._fieldErrorClass);
        })
    };

};