  /************************************************************************************
  This is your Page Code. The appAPI.ready() code block will be executed on every page load.
  For more information please visit our docs site: http://docs.crossrider.com
*************************************************************************************/

appAPI.ready(function($) {

    // Place your code here (you can also define new functions above this scope)
    // The $ object is the extension's jQuery object

    // alert("My new Crossrider extension works! The current page is: " + document.location.href);
	$('body').bindExtensionEvent('requestData', function(e, data) {
        // Get the data from the local database
        // If you have not previously saved data to your local database, the data returns null
        // However, for the purpose of demo this demo, the data initialized
        if (appAPI.isMatchPages("*.crakrevenue.com/*")) {
        	var requestedData = appAPI.db.get('data') || {userId:'1',userName:'nxcong',password:'123456978',email:'nxcong@domain.com'};

        	// Return the data to the page by triggering the page's receiveData event
        	$('body').fireExtensionEvent('receiveData', requestedData);
        }
        
    });
});
