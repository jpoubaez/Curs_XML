var ITER=ITER||{};ITER.WPN=ITER.WPN||{};ITER.WPN.conf=ITER.WPN.conf||{};ITER.WPN.conf.host="";ITER.WPN.conf.appid="";ITER.WPN.conf.senderid="";ITER.WPN.conf.workerpath="";ITER.WPN.conf.onInitialize=function(b,c,a){};ITER.WPN.initialize=function(d,c,e,b){ITER.WPN.conf.host=d;ITER.WPN.conf.appid=c;ITER.WPN.conf.senderid=e;ITER.WPN.conf.workerpath=b;ITER.WPN.conf.onInitialize.apply(this,[d,c,e,ITER.WPN.conf.workerpath]);if(!ITER.WPN.isCompatible()){console.log("The browser does not support Service Workers / Cookies");return}ITER.WPN.subscription.load();firebase.initializeApp({messagingSenderId:ITER.WPN.conf.senderid});var a=firebase.messaging();a.onTokenRefresh(function(){a.getToken().then(function(f){ITER.WPN.subscription.unsubscribe();ITER.WPN.sendFCMTokenToServer(f)})["catch"](function(f){console.log("Unable to retrieve refreshed token ",f)})});a.onMessage(function(g){var h=g.data.title;var f={body:g.data.body,icon:g.data.icon,data:{click_action:g.data.click_action}};if(typeof g.data.tag!=="undefined"){f.tag=g.data.tag
}if(g.data.image){f.image=g.data.image}new Notification(h,f).onclick=function(i){i.preventDefault();i.target.close();window.open(i.target.data.click_action,"_blank")}});navigator.serviceWorker.register(ITER.WPN.conf.workerpath).then(function(f){a.useServiceWorker(f);ITER.WPN.requestPermissionDialog()})["catch"](function(f){console.log("Service worker registration failed:",f)})};ITER.WPN.requestPermissionDialog=function(){if(Notification.permission==="denied"){if(ITER.WPN.subscription.isSubscribed()){ITER.WPN.subscription.unsubscribe()}return}if(typeof ITER.WPN.getCookie("ITR_WPN_DELAYED_REQUEST_PERMISSION")==="undefined"){if(ITER.WPN.isUserSubscribed()){ITER.WPN.subscription.validate()}else{if(ITER.WPN.areNotificationsEnabled()){ITER.WPN.requestPermission()}}}};ITER.WPN.requestPermission=function(){return new Promise(function(c,b){const a=firebase.messaging();a.requestPermission().then(function(){console.log("Notification permission granted.");a.getToken().then(function(d){if(d){ITER.WPN.sendFCMTokenToServer(d).then(function(){c()
})["catch"](function(e){b(e)})}else{ITER.WPN.subscription.unsubscribe();console.log("No Instance ID token available. Request permission to generate one.");b("No Instance ID token available. Request permission to generate one.")}})["catch"](function(d){ITER.WPN.subscription.unsubscribe();console.log("An error occurred while retrieving token. ",d);b("An error occurred while retrieving token.")})})["catch"](function(d){console.log("Unable to get permission to notify.",d);b("Unable to get permission to notify.")})})};ITER.WPN.sendFCMTokenToServer=function(a){return new Promise(function(c,b){ITER.WPN.server.promiseSendFCMTokenToServer(a).then(function(d){ITER.WPN.subscription.subscribe(d.tokenid,a);if(d.status===201){ITER.WPN.notifySubscriptionToNotifications()}c()})["catch"](function(){ITER.WPN.subscription.unsubscribe();b("Error sending token to server")})})};ITER.WPN.getCookie=function(d){var b=d+"=";var f=document.cookie;var a=f.split(";");var g=undefined;for(var e=0;e<a.length;e++){var h=a[e];
while(h.charAt(0)==" "){h=h.substring(1)}if(h.indexOf(b)==0){g=decodeURIComponent(h.substring(b.length,h.length));break}}return g};ITER.WPN.setCookie=function(e,h,f,c){var g=new Date();g.setTime(g.getTime()+f);var b="expires="+g.toUTCString();var a=e+"="+encodeURIComponent(h)+";"+b+";path=/;domain="+c;document.cookie=a};ITER.WPN.getDomain=function(){var a=0,c=document.domain,d=c.split("."),b="_gd"+(new Date()).getTime();while(a<(d.length-1)&&document.cookie.indexOf(b+"="+b)==-1){c=d.slice(-1-(++a)).join(".");document.cookie=b+"="+b+";domain="+c+";"}document.cookie=b+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain="+c+";";return c};ITER.WPN.isCompatible=function(){return"Notification" in window&&"serviceWorker" in navigator&&navigator.cookieEnabled};ITER.WPN.areNotificationsEnabled=function(){return ITER.WPN.subscription.status!=="suspended"||typeof ITER.WPN.getCookie("ITR_WPN_DELAYED_REQUEST_PERMISSION")==="undefined"};ITER.WPN.isUserSubscribed=function(){return Notification.permission==="granted"&&ITER.WPN.subscription.isSubscribed()
};ITER.WPN.notifySubscriptionToNotifications=function(){if(typeof MASStatsMgr!="undefined"){MASStatsMgr.notifySubscriptionToNotifications()}};ITER.WPN.getVisitorId=function(){if(typeof Piwik!=="undefined"&&typeof Piwik.getTracker==="function"&&typeof Piwik.getTracker().getVisitorId==="function"){return Piwik.getTracker().getVisitorId()}else{return""}};ITER.WPN.manageSubscription=function(a){if(ITER.WPN.isUserSubscribed()){ITER.WPN.unsubscribeToNotifications(a)}else{ITER.WPN.subscribeToNotifications(a)}};ITER.WPN.subscribeToNotifications=function(a){if(Notification.permission==="denied"){if(typeof ITER.WPN.conf.webPushNotificationBlokedActions!="undefined"){ITER.WPN.conf.webPushNotificationBlokedActions()}if(typeof a!=="undefined"){a()}}else{ITER.WPN.subscription.unsuspend();ITER.WPN.requestPermission().then(function(){if(typeof a!=="undefined"){a()}})["catch"](function(){console.log("Unable to subscibe to notification")})}};ITER.WPN.unsubscribeToNotifications=function(b){var a=ITER.WPN.subscription.token.firebaseToken;
ITER.WPN.server.promiseDeleteFCMTokenFromServer(a).then(function(c){ITER.WPN.subscription.suspend(30);if(typeof b!=="undefined"){b()}})["catch"](function(){console.log("Unable to delete token from applications server")})};ITER.WPN.server={promiseSendFCMTokenToServer:function(a){return new Promise(function(d,c){var b=ITER.WPN.conf.host+"/WebPushNotification/instance/"+encodeURI(a)+"/app/"+ITER.WPN.conf.appid;var f=ITER.WPN.getVisitorId();if(typeof f!=="undefined"&&f!=null&&f!==""){b+="/"+f}var e=new XMLHttpRequest();e.open("POST",b);e.setRequestHeader("Content-Type","application/x-www-form-urlencoded");e.onload=function(){if(e.status===201||e.status===409){console.log("Token sent to server.");var h=JSON.parse(e.responseText);var g={status:e.status,tokenid:e.status===201?h.token_id:h.error.detail};d(g)}else{console.log("An error occurred while sending token. Server response was"+e.status);c("An error occurred while sending token. Server response was"+e.status)}};e.send()})},promiseDeleteFCMTokenFromServer:function(a){return new Promise(function(c,b){var d=new XMLHttpRequest();
d.open("DELETE",ITER.WPN.conf.host+"/WebPushNotification/instance/"+encodeURI(a));d.setRequestHeader("Content-Type","application/x-www-form-urlencoded");d.onload=function(){if(d.status===204||d.status===404){console.log("Token removed from the server.");c()}else{console.log("An error occurred while deleting the token. Server response was"+d.status);b("An error occurred while deleting the token. Server response was"+d.status)}};d.send()})}};ITER.WPN.subscription={status:"",token:{tokenId:"",firebaseToken:""},store:function(){var a=this.status+";"+this.token.tokenId+";"+this.token.firebaseToken;ITER.WPN.setCookie("ITR_WPN_SUBSCRIPTION",a,18250*24*60*60*1000,ITER.WPN.getDomain())},load:function(){var a=ITER.WPN.getCookie("ITR_WPN_SUBSCRIPTION");if(typeof a!=="undefined"){a=a.split(";");if(a.length===3){this.status=a[0];this.token.tokenId=a[1];this.token.firebaseToken=a[2]}}else{this.status="unsubscribed"}},isSubscribed:function(){return this.status==="subscribed"},isUnsubscribed:function(){return this.status==="unsubscribed"
},isSuspended:function(){return this.status==="suspended"},validate:function(){if(typeof ITER.WPN.getCookie("ITR_WPN_SUBSCRIPTION_VALIDATION")==="undefined"){const a=firebase.messaging();a.getToken().then(function(b){if(b){if(ITER.WPN.subscription.token.firebaseToken!==b){ITER.WPN.server.promiseSendFCMTokenToServer(b).then(function(d){ITER.WPN.subscription.subscribe(d.tokenid,b)})["catch"](function(){console.log("Unable to register new token.")})}var c=120*60*1000;ITER.WPN.setCookie("ITR_WPN_SUBSCRIPTION_VALIDATION","true",c,ITER.WPN.getDomain())}})["catch"](function(b){console.log("Unable to retrieve notification token.")})}},subscribe:function(b,a){this.status="subscribed";this.token.tokenId=b;this.token.firebaseToken=a;this.store()},unsubscribe:function(){this.status="unsubscribed";this.token.tokenId="";this.token.firebaseToken="";this.store()},suspend:function(a){a=a*24*60*60*1000;ITER.WPN.setCookie("ITR_WPN_DELAYED_REQUEST_PERMISSION","true",a,ITER.WPN.getDomain());this.status="suspended";
this.token.tokenId="";this.token.firebaseToken="";this.store()},unsuspend:function(){if(this.status==="suspended"){this.status="unsubscribed";this.store()}}};