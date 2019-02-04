import React from 'react';
import LanguageProvider from './Components/LanguageProvider';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import ToastContainer from './Components/Toast';

const App = () => (
  <div className="App">
    <LanguageProvider>
      <React.Fragment>
        <ToastContainer />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </React.Fragment>
    </LanguageProvider>
  </div>
);

// @ts-ignore
export default App;
