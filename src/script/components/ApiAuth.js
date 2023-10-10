class Api {
    constructor({ url }) {
        this._url = url;
    };

    async _requestResult(res) {
        const result = await res.json();
        return res.ok ? result : Promise.reject(result.message);
    };

    login(userData) {
        return fetch(`${this._url}index.php?login=${userData.email}&password=${userData.password}`)
            .then(res => {
                return this._requestResult(res)
            })
    };
};

const ApiAuth = new Api({
    url: 'https://test-works.pr-uni.ru/api/login/',
});

export default ApiAuth;