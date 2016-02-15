require('expose?$!expose?jQuery!jquery');
//require('expose?$!expose?jQuery!./libs/crossriderAPI.js');
require("bootstrap-webpack");

require('expose?$!./libs/crossrider/platformVersion.js');
require('expose?$!./libs/crossrider/consts.js');
require('expose?$!./libs/crossrider/logging.js');
require('expose?$!./libs/crossrider/reports.js');
require('expose?$!./libs/crossrider/xhr.js');
require('expose?$!./libs/crossrider/cookie.js');
require('expose?$!./libs/crossrider/message.js');
require('expose?$!./libs/crossrider/pageAction.js');
require('expose?$!./libs/crossrider/installer.js');
require('expose?$!./libs/crossrider/app_api.js');


import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Home.jsx';
ReactDOM.render(<App />, document.getElementById('app'));