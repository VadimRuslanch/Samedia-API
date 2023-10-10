import '../styles/index.css';

import { validationConfig } from './utils/constants';
import appearAuthBlock from './utils/appearAuthBlock';
import ErrorElement from './utils/ErrorElement';
import loader from './utils/loader';


import ApiAuth from './components/ApiAuth';
import Login from './components/Login';

const login = new Login({
    handleFormSubmit: (userData) => {
        loader(true)

        ApiAuth.login(userData)
            .then(res => {
                const error = new ErrorElement(res, validationConfig);
                if (res.token) {
                    localStorage.setItem('token', res.token);
                    appearAuthBlock(res.user.name);
                    error.hiddenError();
                } else {
                    error.visibleError();
                }
            })
            .catch(res => { throw new Error(res.message) })
            .finally(() => loader(false))
    },
});

login.setEventListeners();