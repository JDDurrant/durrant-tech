import * as express from 'express';
import * as logger from 'morgan';
import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import api from '../../lib/api-client';
import Page from './components/page';

const app = express();

process.env.NODE_ENV == 'development' && app.use(logger(':method :url :status :res[content-length] - :response-time ms'));

app.get('/', async (req, res, next) => {
    const site = await api.site.promise;

    try {
        res.send(ReactDOMServer.renderToStaticMarkup(
            <Page page={{title: 'Home'}} site={site} />
        ));
    }
    catch(error) {
        console.log(error);
        res.status(500).send('Error...');
    }
});

export default app;
