import * as React from 'react';
import * as ReactDOM from 'react-dom';

import api from '../../lib/api-client';
import App from './components/app';
import Page from './components/page';

document.addEventListener('DOMContentLoaded', async () => {
    let  site;

    try {
        site = await api.site.promise;
    }
    catch(exception) {
        console.log('Error:', exception);
        
        site = {
            title: 'Error.tech',
            navigation: []
        }
    }

    ReactDOM.render((
        <Page page={{ title: 'Home' }} site={site} />
    ), document);
});
