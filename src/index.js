import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {connect, Provider} from "react-redux";
import store from "./store/store";

import './index.css';
import setSettings from "./actions/setSettings";

const mapDispatchToProps = {
    setSettings
}

connect(null,mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

