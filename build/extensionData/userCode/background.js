/************************************************************************************
  This is your background code.
  For more information please visit our wiki site:
  http://docs.crossrider.com/#!/guide/scopes_background
*************************************************************************************/

appAPI.ready(function($) {
    
    appAPI.browserAction.onClick(function() {
        //e.g. Open a page in a new tab
        appAPI.tabs.create('playlistXXX.html');
        
    });
  // Place your code here (ideal for handling browser button, global timers, etc.)
  
});
