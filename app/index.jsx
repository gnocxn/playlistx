require('expose?$!expose?jQuery!jquery');
//require('expose?$!expose?jQuery!./libs/crossriderAPI.js');
require("bootstrap-webpack");

require('script!./libs/crossrider/platformVersion.js');
require('script!./libs/crossrider/consts.js');
require('script!./libs/crossrider/logging.js');
require('script!./libs/crossrider/reports.js');
require('script!./libs/crossrider/xhr.js');
require('script!./libs/crossrider/cookie.js');
require('script!./libs/crossrider/message.js');
require('script!./libs/crossrider/pageAction.js');
require('script!./libs/crossrider/installer.js');
require('script!./libs/crossrider/app_api.js');


import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Home.jsx';
ReactDOM.render(<App />, document.getElementById('app'));