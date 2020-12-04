import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../src/assets/vendor/nucleo/css/nucleo.css";
import "../src/assets/vendor/font-awesome/css/font-awesome.min.css";
import "../src/assets/scss/customize.scss";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <App />
  ,
  document.getElementById('root')
);

serviceWorker.register({
  onUpdate: registration => {
    const waitingSW = registration.waiting;

    if (waitingSW) {
      alert("A new version of the app is available.Please update")
      waitingSW.addEventListener("statechange", event => {
        if (event.target.state === 'activated') {
          window.location.reload();
        }
      });
      waitingSW.postMessage({ type: "SKIP_WAITING" })
    }
  }
});