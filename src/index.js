import React from 'react';
import { createRoot } from 'react-dom/client';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null };
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
        return <div>Latitude: </div>;
    }
}

const root = createRoot(document.querySelector('#root'));

root.render(
    <App />
);