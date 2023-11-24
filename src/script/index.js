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
                const reply = new ErrorElement(res, validationConfig);
                if (res.status === 'ok') {
                    document.cookie = `token=${res.token}; path=/;`;
                    appearAuthBlock(res.user.name);
                    reply.hiddenError();
                } else {
                    reply.visibleError();
                }
            })
            .catch(err => { throw new Error(err.message) })
            .finally(() => loader(false))
    },
});

login.setEventListeners();