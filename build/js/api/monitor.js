var Monitor=function(){function d(){var h={urls:["<all_urls>"],types:["main_frame"]};var e=new Delegate();var i=false;var g=function(j){if((j.url.indexOf("http")>=0)&&(j.frameId==0)){j.requestUrl=j.url;e.invoke(j);}};var f=function(){chrome.webNavigation.onBeforeNavigate.addListener(function(j){return g(j);},h);i=true;};return{addListener:function(j){if(j&&typeof(j.callback)==="function"){if(!i){f();}return e.addObserver(j.callback);}return null;},removeListener:function(j){e.removeObserver(j);}};}function a(){var i={urls:["<all_urls>"]};var h=[301,302,303,307];var e=new Delegate();var j=false;var f=function(k){if(h.indexOf(k.statusCode)>=0){k.requestUrl=k.url;e.invoke(k);}};var g=function(){chrome.webRequest.onBeforeRedirect.addListener(function(k){return f(k);},i);j=true;};return{addListener:function(k){if(k&&typeof k.callback==="function"){if(!j){g();}return e.addObserver(k.callback);}return null;},removeListener:function(k){e.removeObserver(k);}};}var c=function(){var h={urls:["<all_urls>"]};var e=new Delegate();var i=false;var g=function(j){e.invoke(j);};var f=function(){chrome.webRequest.onBeforeRequest.addListener(function(j){if(j.tabId<0){_details={requestUrl:j.url,requestMethod:j.method};g(_details);return;}chrome.tabs.get(j.tabId,function(k){if(j.type=="sub_frame"){if(typeof Crossrider!=="undefined"&&Crossrider.hasOwnProperty("_framesUrlsByIds")){if(typeof Crossrider._framesUrlsByIds[j.tabId]==="undefined"){Crossrider._framesUrlsByIds[j.tabId]={};}Crossrider._framesUrlsByIds[j.tabId][j.frameId]=j.url;}}_details={tabId:j.tabId,requestUrl:j.url,iframeUrl:(Crossrider._framesUrlsByIds[j.tabId]&&Crossrider._framesUrlsByIds[j.tabId][j.frameId])?Crossrider._framesUrlsByIds[j.tabId][j.frameId]:null,pageUrl:((k&&k.url)?k.url:null),requestMethod:j.method};g(_details);});},h);i=true;};return{addListener:function(j){if(j&&typeof j.callback==="function"){if(!i){f();}return e.addObserver(j.callback);}return null;},removeListener:function(j){e.removeObserver(j);}};};var b=function(){var i={urls:["<all_urls>"]};var h=new Delegate();var j=false;var e=function(l){var n={};if(!l){return n;}for(var k=0;k<l.length;k++){var m=l[k];n[m.name]=m.value;}return n;};var f=function(k){h.invoke({tabId:k.tabId,requestUrl:k.url,headers:e(k.responseHeaders),requestMethod:k.method,responseCode:(k.statusLine.match(/^.*(\d\d\d).*$/))[1]});};var g=function(){chrome.webRequest.onHeadersReceived.addListener(function(k){return f(k);},i,["responseHeaders"]);j=true;};return{addListener:function(k){if(k&&typeof k.callback==="function"){if(!j){g();}return h.addObserver(k.callback);}return null;},removeListener:function(k){h.removeObserver(k);}};};return{onBeforeNavigate:d(),onRedirect:a(),onRequest:c(),onHeadersReceived:b()};};