import * as React from 'react';

interface Props {
    title?;
}

export default class App extends React.Component {

    props: Props;

    message = 'Hello, World!';

    template = (
        <html id="app">
            <head>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <title>Durrant.tech</title>
            </head>
            <body>
                <h1>Durrant.tech</h1>
                <p>{this.message}</p>
                <p>{this.props.title}</p>
            </body>
        </html>
    );

    render() {
        return this.template;
    }
}
