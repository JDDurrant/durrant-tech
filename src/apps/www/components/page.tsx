import * as React from 'react';

import App from './app';

export default props => (
    <html lang="en">
    <head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>
            {props.page.title} - {props.site.title}
        </title>
        <script src="/res/js/client.js" />
    </head>
    <body>
        <App {...props} />
    </body>
    </html>
);
