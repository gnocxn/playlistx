
var InitPlugin=(function(e){var c={appId:appAPI._cr_config.appID()},b,g=new e.Deferred(),f;return e.Class.extend({init:function(){b=this;e(document).ready(function(){if(!f){d();}e("body").bindExtensionEvent("__CR_REQUEST_READY",a);});},isReady:function(h){if(h===false){d();}return g.promise();}});function d(){g.resolve();f=true;}function a(){e("body").fireExtensionEvent("__CR_RESPONSE_READY",{appId:c.appId});}}($jquery_171));(function(a){appAPI.initializerPlugin=new InitPlugin();}($jquery_171));
