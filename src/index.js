import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactGA from 'react-ga';
import { config } from 'dotenv';
import reportWebVitals from './reportWebVitals';

config();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

ReactGA.initialize(
    process.env.REACT_APP_GOOGLE_ANALYTICS_ID
);

ReactGA.pageview(
    window.location.pathname + window.location.search
);

reportWebVitals();
