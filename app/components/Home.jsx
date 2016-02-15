import React from 'react';
//import getWindowVar from '../libs/getWindowVar.js';
var CrossriderAPI =  require('../libs/crossriderAPI.js');

export default class Home extends React.Component{
    componentDidMount(){
        $(document).ready(function(){
            let extId = 82696;
            CrossriderAPI.isAppInstalled(extId, function(isInstalled) {
                // Displays true if the extension is installed; otherwise false
                alert(isInstalled);
            });
        })
    }
    render(){
        return <h1>Welcome to Extension</h1>
    }
}