export default class Login {
    constructor({ handleFormSubmit }) {
        this._auth = document.querySelector('.auth');
        this._inputList = this._auth.querySelectorAll(".auth__input");
        this._buttonSubmit = this._auth.querySelector(".auth__button");
        this._handleFormSubmit = handleFormSubmit;
    };

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(data => {
            this._formValues[data.name] = data.value;
        });
        return this._formValues;
    };

    setEventListeners() {
        this._auth.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    };
};