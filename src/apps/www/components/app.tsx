import * as React from 'react';

import api from '../../../lib/api-client';
import { AsyncResource } from 'async_hooks';

interface Props {
    page: {
        title: string;
    }
}

interface State {
    site?: {
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
    darkMode: boolean;
}

export default class App extends React.Component {

    props: Props;

    state: State = {
        darkMode: false
    }

    template = props => (
        <div id="app" style={this.styles}>
            Hello, World!
            <div>{this.state.site && this.state.site.title}</div>
            <h1>{props.page.title}</h1>
            <nav>
                {this.state.site && this.state.site.navigation.map((link, index) => (
                    <a href={link.url} key={index}>{link.text}</a>
                ))}
            </nav>
            <button onClick={this.toggleDarkMode.bind(this)}>
                {this.state.darkMode ? 'Disable' : 'Enable'} dark mode
            </button>
        </div>
    );

    styles = {
        backgroundColor: this.state.darkMode ? '#000000' : '#ffffff',
        color: this.state.darkMode ? '#ffffff' : '#000000',
        fontFamily: 'sans-serif'
    }

    constructor(props) {
        super(props);
        api.site.subscribe(this.updateSite.bind(this));
    }

    updateSite(site) {
        return this.setState({ site });
    }

    toggleDarkMode() {
        this.setState({
            darkMode: !this.state.darkMode
        });
    }

    // componentDidMount() {
    //     console.log('componentDidMount()');
        
    //     api.site.then(site => {
    //         console.log('Site object:', site);
            
    //         this.setState({ site })
    //     }).catch(console.error);

    //     // api.site.then(site => this.setState({site}));
    //     // return site;
    // }

    render() {
        // console.log(this.state.site);
        return this.template(this.props);
    }
}
