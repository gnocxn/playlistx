module.exports =  function getWindowVar(varName) {
    if (typeof(unsafeWindow) !== "undefined" &&
        typeof(unsafeWindow[varName]) !== "undefined") {
        return unsafeWindow[varName];
    } else if (typeof(window) !== "undefined" &&
        typeof(window[varName]) !== "undefined") { //Opera, etc.
        return window[varName];
    } else {
        try { //Google Chrome
            var uid='getWindowVar-'+appAPI.time.now().getTime();
            $('<div id="'+uid+'" style="display:none" />').appendTo('body');
            appAPI.dom.addInlineJS(
                'document.getElementById("'+uid+'").innerHTML=(typeof ' +
                varName + '!=="undefined") ? JSON.stringify(' + varName + ') : "";'
            );
            var rv=appAPI.JSON.parse($('#'+uid).text());
            $('#'+uid).remove();
            return rv;
        } catch (e) {
            return;
        }
    }
}