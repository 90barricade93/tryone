import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import { tryLoadAndStartRecorder } from '@alwaysmeticulous/recorder-loader'

function isProduction() {
    // TODO: Update me with your production hostname
    return window.location.hostname.indexOf("your-production-site.com") > -1;
}

async function startApp() {
    // Record all sessions on localhost, staging stacks and preview URLs
    if (!isProduction()) {
      // Start the Meticulous recorder before you initialise your app.
      // Note: all errors are caught and logged, so no need to surround with try/catch
      await tryLoadAndStartRecorder({
        projectId: '4WIKt89nEN3XbX5yEdL6WfOmLXpoXN4zAk66qVSF',
        isProduction: false,
      });
    }

    // Initalise app after the Meticulous recorder is ready, e.g.
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
}

function App() {
    useEffect(() => {
        startApp();
    }, [])

    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />  
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <MyButton />

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

            </header>
        </>
    );
}

export default App;


