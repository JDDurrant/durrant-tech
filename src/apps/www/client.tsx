import * as React from 'react';
import * as ReactDOM from 'react-dom';

import site from '../../lib/api-client/site';
import App from './components/app';

document.addEventListener('DOMContentLoaded', async () => ReactDOM.hydrate((
    <App page={{ title: 'Home' }} site={await site} />
), document));
