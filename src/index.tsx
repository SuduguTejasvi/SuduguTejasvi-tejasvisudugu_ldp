import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { Provider } from 'react-redux';

=======
import './styles.css'
>>>>>>> 0d091b39844ce777c69b8f5a8a99c359d5b5068d
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<<<<<<< HEAD
    <App />
);
=======
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> 0d091b39844ce777c69b8f5a8a99c359d5b5068d
reportWebVitals();
