import React from 'react';
import { createRoot } from 'react-dom/client';
import "semantic-ui-css/semantic.min.css";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    state = {lat: null, errorMessage: ''};
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    componentDidUpdate() {
        console.log("My components was just updated - it rerendered!");
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request" />;
    }

    render() {
        return (
            <div className='border-red'>
                {this.renderContent()}
            </div>
        );
    }
}

const root = createRoot(document.querySelector('#root'));

root.render(
    <App />
);