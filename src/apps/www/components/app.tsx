import * as React from 'react';

interface Props {
    page: {
        title: string;
    }
    site: {
        title: string;
        domain: string;
        contact: {
            name: string;
            email: string;
        }
        navigation: {
            text: string;
            url: string;
        }[]
    }
}

interface State {
    darkMode: boolean;
}

export default class App extends React.Component {

    props: Props;

    state: State = {
        darkMode: false
    }

    template = props => (
        <html id="app">
            <head>
                <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
                <title>{props.site.title}</title>
                {/* <script src="/res/js/client.js" /> */}
            </head>
            <body style={this.styles}>
                <div>{props.site.title}</div>
                <h1>{props.page.title}</h1>
                <nav>
                    {props.site.navigation.map((link, index) => (
                        <a href={link.url} key={index}>{link.text}</a>
                    ))}
                </nav>
                <button onClick={this.toggleDarkMode.bind(this)}>
                    {this.state.darkMode ? 'Disable' : 'Enable'} dark mode
                </button>
            </body>
        </html>
    );

    styles = {
        backgroundColour: this.state.darkMode ? '#000' : '#fff',
        color: this.state.darkMode ? '#fff' : '#000'
    }

    toggleDarkMode() {
        this.setState({
            darkMode: !this.state.darkMode
        });
    }

    render() {
        return this.template(this.props);
    }
}
