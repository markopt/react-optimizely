import React from 'react';
import logo from './logo.svg';
import opty from './opty_logo.png';
import './App.css';
import {
  createInstance,
  OptimizelyProvider,
  OptimizelyFeature,
} from '@optimizely/react-sdk'

const optimizely = createInstance({
  sdkKey: 'SeuJQgczMoDWmctE1c64uB',
})

function App() {
  return (
    <OptimizelyProvider
      optimizely={optimizely}
      user={{
        id: '123',
      }}
    >
      <div className="App">
        <header className="App-header">
          <OptimizelyFeature feature="next_flag">
            {(isEnabled) => (
              isEnabled
              ? <img src={opty} className="App-logo" alt="logo" />
              : <img src={logo} className="App-logo" alt="logo" />
            )}
          </OptimizelyFeature>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </OptimizelyProvider>  
  );
}

export default App;
