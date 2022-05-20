import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MoralisProvider } from 'react-moralis';

console.log("here:" + process.env.REACT_APP_MORALIS_SERVER_URL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<MoralisProvider serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL} appId={process.env.REACT_APP_MORALIS_APPLICATION_ID}>
			<App />
		</MoralisProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
