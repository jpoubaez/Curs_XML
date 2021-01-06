if (self.CavalryLogger) { CavalryLogger.start_js(["MDYae"]); }

__d("ChannelConstants",[],(function(a,b,c,d,e,f){var g="channel/";a={CHANNEL_MANUAL_RECONNECT_DEFER_MSEC:2e3,MUTE_WARNING_TIME_MSEC:25e3,WARNING_COUNTDOWN_THRESHOLD_MSEC:15e3,ON_SHUTDOWN:g+"shutdown",ON_INVALID_HISTORY:g+"invalid_history",ON_CONFIG:g+"config",ON_ENTER_STATE:g+"enter_state",ON_EXIT_STATE:g+"exit_state",ATTEMPT_RECONNECT:g+"attempt_reconnect",RTI_SESSION:g+"new_rti_address",CONSOLE_LOG:g+"message:console_log",GET_RTI_SESSION_REQUEST:g+"rti_session_request",SKYWALKER:g+"skywalker",CHANNEL_ESTABLISHED:g+"established",OK:"ok",ERROR:"error",ERROR_MAX:"error_max",ERROR_MISSING:"error_missing",ERROR_MSG_TYPE:"error_msg_type",ERROR_SHUTDOWN:"error_shutdown",ERROR_STALE:"error_stale",SYS_OWNER:"sys_owner",SYS_NONOWNER:"sys_nonowner",SYS_ONLINE:"sys_online",SYS_OFFLINE:"sys_offline",SYS_TIMETRAVEL:"sys_timetravel",HINT_AUTH:"shutdown auth",HINT_CONN:"shutdown conn",HINT_DISABLED:"shutdown disabled",HINT_INVALID_STATE:"shutdown invalid state",HINT_MAINT:"shutdown maint",HINT_UNSUPPORTED:"shutdown unsupported",reason_Unknown:0,reason_AsyncError:1,reason_TooLong:2,reason_Refresh:3,reason_RefreshDelay:4,reason_UIRestart:5,reason_NeedSeq:6,reason_PrevFailed:7,reason_IFrameLoadGiveUp:8,reason_IFrameLoadRetry:9,reason_IFrameLoadRetryWorked:10,reason_PageTransitionRetry:11,reason_IFrameLoadMaxSubdomain:12,reason_NoChannelInfo:13,reason_NoChannelHost:14,CAPABILITY_VOIP_INTEROP:8,CAPABILITY_ACTIVE_ON_DESKTOP_APP:16384,CAPABILITY_PLAYING_INSTANT_GAME:2097152,FANTAIL_SERVICE:"WebchatClient",SUBSCRIBE:"subscribe",UNSUBSCRIBE:"unsubscribe",FAKE_DFF:"fake_dff",THROTTLED:g+"throttled",JUMPSTART:g+"jumpstart",ENTITY_PRESENCE_ACTIVE_PING:"entity_presence/active_ping",ENTITY_PRESENCE_SKIPPED_PING:"entity_presence/skipped_ping",SUBSCRIPTION_STATE:{SUBSCRIBE:"s",MUTATE_CONTEXT:"m",UNSUBSCRIBE:"u"},DEFAULT_MAX_SUBSCRIPTIONS:300,DEFAULT_EVICTION_BATCH_SIZE:20,DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE:300,DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES:3,getArbiterType:function(a){return g+"message:"+a},getRTISkywalkerArbiterType:function(a,b){return g+"skywalker:"+a+":"+b}};e.exports=a}),null);
__d("AvailableListConstants",[],(function(a,b,c,d,e,f){a=Object.freeze({ON_AVAILABILITY_CHANGED:"buddylist/availability-changed",ON_UPDATE_ERROR:"buddylist/update-error",ON_UPDATED:"buddylist/updated",ON_CHAT_NOTIFICATION_CHANGED:"chat-notification-changed",OFFLINE:0,IDLE:1,ACTIVE:2,MOBILE:3,WEB_STATUS:"webStatus",FB_APP_STATUS:"fbAppStatus",MESSENGER_STATUS:"messengerStatus",OTHER_STATUS:"otherStatus",STATUS_ACTIVE:"active",STATUS_IDLE:"idle",STATUS_OFFLINE:"offline"});e.exports=a}),null);
__d("PresenceConfig",["PresenceConfigInitialData"],(function(a,b,c,d,e,f){f.get=a;var g=Object.assign({},b("PresenceConfigInitialData"));function a(a,b){return a in g?g[a]:b}}),null);
__d("CometLruCache",["recoverableViolation"],(function(a,b,c,d,e,f){"use strict";f.create=a;var g=function(){function a(a){this.$1=a,a<=0&&b("recoverableViolation")("CometLruCache: Unable to create instance of cache with zero or negative capacity.","CometLruCache"),this.$2=new Map()}var c=a.prototype;c.set=function(a,b){this.$2["delete"](a);this.$2.set(a,b);if(this.$2.size>this.$1){a=this.$2.keys().next();a.done||this.$2["delete"](a.value)}};c.get=function(a){var b=this.$2.get(a);b!=null&&(this.$2["delete"](a),this.$2.set(a,b));return b};c.has=function(a){return this.$2.has(a)};c["delete"]=function(a){this.$2["delete"](a)};c.size=function(){return this.$2.size};c.capacity=function(){return this.$1-this.$2.size};c.clear=function(){this.$2.clear()};return a}();function a(a){return new g(a)}}),null);
__d("ConstUriUtils",["CometLruCache","FBLogger","PHPQuerySerializer","PHPQuerySerializerNoEncoding","UriNeedRawQuerySVConfig","URIRFC3986","URISchemes","recoverableViolation"],(function(a,b,c,d,e,f){"use strict";f.isSubdomainOfDomain=r;f.isConstUri=a;var g,h,i,j=b("CometLruCache").create(5e3),k=new RegExp("(^|\\.)facebook\\.com$","i"),l=new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),m=new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),n=b("UriNeedRawQuerySVConfig").uris.map(function(a){return{domain:a,valid:s(a)}});function o(a,c){var d={};if(a!=null)for(var a=a.entries(),e=Array.isArray(a),f=0,a=e?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=a.length)break;g=a[f++]}else{f=a.next();if(f.done)break;g=f.value}g=g;d[g[0]]=g[1]}else b("FBLogger")("ConstUri").warn("Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue.");return c.serialize(d)}function p(a,c){var d=g||(g=b("PHPQuerySerializer"));["http","https"].includes(c)&&q(a)&&(d=b("PHPQuerySerializerNoEncoding"));return d}function q(a){return a!=null&&n.some(function(b){return b.valid&&r(a,b.domain)})}function r(a,b){if(b===""||a==="")return!1;if(a.endsWith(b)){b=a.length-b.length-1;if(b===-1||a[b]===".")return!0}return!1}function s(a){return!m.test(a)}function t(a,b){var c=b.protocol!=null&&b.protocol!==""?b.protocol:a.getProtocol();c=b.domain!=null?p(b.domain,c):a.getSerializer();c={domain:a.getDomain(),fragment:a.getFragment(),fragmentSeparator:a.hasFragmentSeparator(),isGeneric:a.isGeneric(),originalRawQuery:a.getOriginalRawQuery(),path:a.getPath(),port:a.getPort(),protocol:a.getProtocol(),queryParams:a.getQueryParams(),serializer:c,subdomain:a.getSubdomain()};a=babelHelpers["extends"]({},c,b);c=b.queryParams!=null&&b.queryParams.size!==0;return y.getUribyObject(a,c)}function u(a,b,c,d){c===void 0&&(c=!1);var e=a.protocol!==""?a.protocol+":"+(a.isGeneric?"":"//"):"",f=a.domain!==""?a.domain:"",g=a.port!==""?":"+a.port:"",h=a.path!==""?a.path:e!==""||f!==""||g!==""?"/":"";c=v(f,a.originalRawQuery,a.queryParams,b,c,(b=d)!=null?b:a.serializer);d=c.length>0?"?":"";b=a.fragment!==""?"#"+a.fragment:"";a=a.fragment===""&&a.fragmentSeparator?"#":"";return""+e+f+g+h+d+c+a+b}function v(a,b,c,d,e,f){e===void 0&&(e=!1);if(!d&&(e||q(a))){return(d=b)!=null?d:""}return o(c,f)}function w(a){var c=a.trim();c=(h||(h=b("URIRFC3986"))).parse(c)||{fragment:null,host:null,isGenericURI:!1,query:null,scheme:null,userinfo:null};var d=c.host||"",e=d.split(".");e=e.length>=3?e[0]:"";var f=p(d,c.scheme||""),g=f.deserialize(c.query||"")||{};g=new Map(Object.entries(g));g=x({domain:d,fragment:c.fragment||"",fragmentSeparator:c.fragment==="",isGeneric:c.isGenericURI,originalRawQuery:c.query,path:c.path||"",port:c.port!=null?String(c.port):"",protocol:(c.scheme||"").toLowerCase(),queryParams:g,serializer:f,subdomain:e,userInfo:(d=c==null?void 0:c.userinfo)!=null?d:""},a);return g}function x(a,c){var d={components:babelHelpers["extends"]({},a),error:"",valid:!0},e=d.components;if(!(i||(i=b("URISchemes"))).isAllowed(a.protocol)){d.valid=!1;d.error='The URI protocol "'+String(a.protocol)+'" is not allowed.';return d}if(!s(a.domain||"")){d.valid=!1;d.error="This is an unsafe domain "+String(a.domain);return d}e.port=a.port!=null&&String(a.port)||"";if(Boolean(a.userInfo)){d.valid=!1;d.error="Invalid URI: (userinfo is not allowed in a URI "+String(a.userInfo)+")";return d}a=c!=null&&c!==""?c:u(e,!1);if(e.domain===""&&e.path.indexOf("\\")!==-1){d.valid=!1;d.error="Invalid URI: (no domain but multiple back-slashes "+a+")";return d}if(!e.protocol&&l.test(a)){d.valid=!1;d.error="Invalid URI: (unsafe protocol-relative URI "+a+")";return d}if(e.domain!==""&&e.path!==""&&!e.path.startsWith("/")){d.valid=!1;d.error="Invalid URI: (domain and pathwhere path lacks leading slash "+a+")";return d}return d}var y=function(){function a(a){this.queryParams=new Map(),this.domain=a.domain,this.fragment=a.fragment,this.fragmentSeparator=Boolean(a.fragmentSeparator),this.isGenericProtocol=Boolean(a.isGeneric),this.path=a.path,this.originalRawQuery=a.originalRawQuery,this.port=a.port,this.protocol=a.protocol,this.queryParams=a.queryParams,this.serializer=a.serializer,this.subdomain=a.subdomain}var c=a.prototype;c.addQueryParam=function(a,b){if(Boolean(a)){var c=this.getQueryParams();c.set(a,b);return t(this,{queryParams:c})}return this};c.addQueryParams=function(a){if(a.size>0){var b=this.getQueryParams();a.forEach(function(a,c){b.set(c,a)});return t(this,{queryParams:b})}return this};c.addQueryParamString=function(a){if(Boolean(a)){a=a.startsWith("?")?a.slice(1):a;var b=this.getQueryParams();a.split("&").map(function(a){a=a.split("=");var c=a[0];a=a[1];b.set(c,a)});return t(this,{queryParams:b})}return this};c.addTrailingSlash=function(){var a=this.getPath();return a.length>0&&a[a.length-1]!=="/"?this.setPath(a+"/"):this};c.getDomain=function(){return this.domain};c.getFragment=function(){return this.fragment};c.getOrigin=function(){var a=this.getPort();return this.getProtocol()+"://"+this.getDomain()+(a?":"+a:"")};c.getOriginalRawQuery=function(){return this.originalRawQuery};c.getPath=function(){return this.path};c.getPort=function(){return this.port};c.getProtocol=function(){return this.protocol.toLowerCase()};c.getQualifiedUri=function(){if(!this.getDomain()){var b=String(window.location.href);b=b.slice(0,b.indexOf("/",b.indexOf(":")+3));return a.getUri(b+this.toString())}return this};c.getQueryParam=function(a){a=this.queryParams.get(a);if(typeof a==="string")return a;else{a=JSON.stringify(a);return a==null?a:JSON.parse(a)}};c.getQueryParams=function(){return new Map(JSON.parse(JSON.stringify(Array.from(this.queryParams))))};c.getQueryString=function(a){a===void 0&&(a=!1);return v(this.domain,this.originalRawQuery,this.queryParams,!1,a,this.serializer)};c.getRegisteredDomain=function(){if(!this.getDomain())return"";if(!this.isFacebookUri())return null;var a=this.getDomain().split("."),b=a.indexOf("facebook");b===-1&&(b=a.indexOf("workplace"));return a.slice(b).join(".")};c.getSerializer=function(){return this.serializer};c.getSubdomain=function(){return this.subdomain};c.getUnqualifiedUri=function(){if(this.getDomain()){var b=this.toString();return a.getUri(b.slice(b.indexOf("/",b.indexOf(":")+3)))}return this};a.getUri=function(c){c=c.trim();var d=j.get(c);if(d==null){var e=w(c);if(e.valid)d=new a(e.components),j.set(c,d);else{b("recoverableViolation")(e.error,"ConstUri");return null}}return d};a.getUribyObject=function(c,d){var e=u(c,d),f=j.get(e);if(f==null){d&&(c.originalRawQuery=o(c.queryParams,c.serializer));d=x(c);if(d.valid)f=new a(d.components),j.set(e,f);else{b("recoverableViolation")(d.error,"ConstUri");return null}}return f};c.hasFragmentSeparator=function(){return this.fragmentSeparator};c.isEmpty=function(){return!(this.getPath()||this.getProtocol()||this.getDomain()||this.getPort()||this.queryParams.size>0||this.getFragment())};c.isFacebookUri=function(){var a=this.toString();if(a==="")return!1;return!this.getDomain()&&!this.getProtocol()?!0:["https","http"].indexOf(this.getProtocol())!==-1&&k.test(this.getDomain())};c.isGeneric=function(){return this.isGenericProtocol};c.isSameOrigin=function(a){if(this.getProtocol()&&this.getProtocol()!==a.getProtocol())return!1;if(this.getDomain()&&this.getDomain()!==a.getDomain())return!1;if(this.getPort()&&this.getPort()!==a.getPort())return!1;return this.toString()===""||a.toString()===""?!1:!0};c.isSubdomainOfDomain=function(b){var c=a.getUri(b);return c!=null&&r(this.domain,b)};c.isSecure=function(){return this.getProtocol()==="https"};c.removeQueryParams=function(a){if(Array.isArray(a)&&a.length>0){var b=this.getQueryParams();a.map(function(a){return b["delete"](a)});return t(this,{queryParams:b})}return this};c.removeQueryParam=function(a){if(Boolean(a)){var b=this.getQueryParams();b["delete"](a);return t(this,{queryParams:b})}return this};c.replaceQueryParam=function(a,b){if(Boolean(a)){var c=this.getQueryParams();c.set(a,b);return t(this,{queryParams:c})}return this};c.replaceQueryParams=function(a){return t(this,{queryParams:a})};c.replaceQueryParamString=function(a){if(a!=null){a=a.startsWith("?")?a.slice(1):a;var b=this.getQueryParams();a.split("&").map(function(a){a=a.split("=");var c=a[0];a=a[1];b.set(c,a)});return t(this,{queryParams:b})}return this};c.setDomain=function(a){if(Boolean(a)){var b=a.split(".");b=b.length>=3?b[0]:"";return t(this,{domain:a,subdomain:b})}return this};c.setFragment=function(a){return a==="#"?t(this,{fragment:"",fragmentSeparator:!0}):t(this,{fragment:a,fragmentSeparator:a!==""})};c.setPath=function(a){return a!=null?t(this,{path:a}):this};c.setPort=function(a){return Boolean(a)?t(this,{port:a}):this};c.setProtocol=function(a){return Boolean(a)?t(this,{protocol:a}):this};c.setSecure=function(a){return this.setProtocol(a?"https":"http")};c.setSubDomain=function(a){if(Boolean(a)){var b=this.domain.split(".");b.length>=3?b[0]=a:b.unshift(a);return t(this,{domain:b.join("."),subdomain:a})}return this};c.stripTrailingSlash=function(){return this.setPath(this.getPath().replace(/\/$/,""))};c.$1=function(a,b){b===void 0&&(b=!1);return u({domain:this.domain,fragment:this.fragment,fragmentSeparator:this.fragmentSeparator,isGeneric:this.isGenericProtocol,originalRawQuery:this.originalRawQuery,path:this.path,port:this.port,protocol:this.protocol,queryParams:this.queryParams,serializer:a,subdomain:this.subdomain,userInfo:""},!1,b)};c.toStringRawQuery=function(){this.rawStringValue==null&&(this.rawStringValue=this.$1(b("PHPQuerySerializerNoEncoding")));return this.rawStringValue};c.toString=function(){this.stringValue==null&&(this.stringValue=this.$1(this.serializer));return this.stringValue};c.toStringPreserveQuery=function(){return this.$1(this.serializer,!0)};a.isValidUri=function(b){var c=j.get(b);if(c!=null)return!0;c=w(b);if(c.valid){j.set(b,new a(c.components));return!0}return!1};return a}();function a(a){if(a instanceof y)return a;else return null}c=y.getUri;f.getUri=c;d=y.isValidUri;f.isValidUri=d}),null);
__d("routeBuilderUtils",[],(function(a,b,c,d,e,f){"use strict";f.getPathParts=a;function a(a){a=a.split("/");return a.filter(function(a){return a!==""}).map(function(a){var b=a.split(/{|}/);if(b.length<3)return{isToken:!1,part:a};else{a=b[0];var c=b[1];b=b[2];var d=c[0]==="?",e=c[d?1:0]==="*";c=c.substring((d?1:0)+(e?1:0));return{isToken:!0,optional:d,prefix:a,suffix:b,token:c}}})}}),null);
__d("jsRouteBuilder",["ConstUriUtils","FBLogger","routeBuilderUtils"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g="#";function a(a,c,d,e,f){f===void 0&&(f=!1);var h=b("routeBuilderUtils").getPathParts(a);function i(i){try{var j=e!=null?babelHelpers["extends"]({},e,i):i,k={};i="";var l=!1;i=h.reduce(function(a,b){if(!b.isToken)return a+"/"+b.part;else{var d,e=b.optional,f=b.prefix,g=b.suffix;b=b.token;if(e&&l)return a;d=(d=j[b])!=null?d:c[b];if(d==null&&e){l=!0;return a}if(d==null)throw new Error("Missing required template parameter: "+b);if(d==="")throw new Error("Required template parameter is an empty string: "+b);k[b]=!0;return a+"/"+f+d+g}},"");a.slice(-1)==="/"&&(i+="/");i===""&&(i="/");var m=b("ConstUriUtils").getUri(i);for(var n in j){var o=j[n];!k[n]&&o!=null&&m!=null&&(d!=null&&d.has(n)?o!==!1&&(m=m.addQueryParam(n,null)):m=m.addQueryParam(n,o))}return[m,i]}catch(c){o=c==null?void 0:c.message;m=b("FBLogger")("JSRouteBuilder").blameToPreviousFrame();f&&(m=m.blameToPreviousFrame());m.mustfix("Failed building URI for base path: %s message: %s",a,o);return[null,g]}}return{buildUri:function(a){a=(a=i(a)[0])!=null?a:b("ConstUriUtils").getUri(g);if(a==null)throw new Error("Not even the fallback URL parsed validly!");return a},buildUriNullable:function(a){return i(a)[0]},buildURLStringDEPRECATED:function(a){a=i(a);var b=a[0];a=a[1];return(b=b==null?void 0:b.toString())!=null?b:a},buildURL:function(a){a=i(a);var b=a[0];a=a[1];return(b=b==null?void 0:b.toString())!=null?b:a}}}}),null);
__d("XLynxAsyncCallbackControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/si/linkclick/ajax_callback/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("FBLynxLogging",["AsyncRequest","ODS","XLynxAsyncCallbackControllerRouteBuilder"],(function(a,b,c,d,e,f){"use strict";f.log=a;function a(a){var c=b("XLynxAsyncCallbackControllerRouteBuilder").buildURL({});new(b("AsyncRequest"))(c).setData({lynx_uri:a}).setErrorHandler(function(a){a=a.getError();b("ODS").bumpEntityKey(3861,"linkshim","click_log.post.fail."+a)}).setTransportErrorHandler(function(a){a=a.getError();b("ODS").bumpEntityKey(3861,"linkshim","click_log.post.transport_fail."+a)}).send()}}),null);
__d("isLinkshimURI",["isFacebookURI","isMessengerDotComURI"],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){var c=a.getPath();return(c==="/l.php"||c.indexOf("/si/ajax/l/")===0||c.indexOf("/l/")===0||c.indexOf("l/")===0)&&(b("isFacebookURI")(a)||b("isMessengerDotComURI")(a))?!0:!1}}),null);
__d("FBLynxBase",["FBLynxLogging","LinkshimHandlerConfig","URI","$","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";var g;function h(a){if(!b("isLinkshimURI")(a))return null;a=a.getQueryData().u;return!a?null:a}var i={logAsyncClick:function(a){i.swapLinkWithUnshimmedLink(a);a=a.getAttribute("data-lynx-uri");if(!a)return;b("FBLynxLogging").log(a)},originReferrerPolicyClick:function(a){var c=b("$")("meta_referrer");c.content=b("LinkshimHandlerConfig").switched_meta_referrer_policy;i.logAsyncClick(a);setTimeout(function(){c.content=b("LinkshimHandlerConfig").default_meta_referrer_policy},100)},swapLinkWithUnshimmedLink:function(a){var c=a.href,d=h(new(g||(g=b("URI")))(c));if(!d)return;a.setAttribute("data-lynx-uri",c);a.href=d},revertSwapIfLynxURIPresent:function(a){var b=a.getAttribute("data-lynx-uri");if(!b)return;a.removeAttribute("data-lynx-uri");a.href=b}};e.exports=i}),null);
__d("FBLynx",["Base64","Event","FBLynxBase","LinkshimHandlerConfig","Parent","URI"],(function(a,b,c,d,e,f){"use strict";var g,h=(g||(g=b("URI"))).goURIOnWindow,i={alreadySetup:!1,setupDelegation:function(a){a===void 0&&(a=!1);if(document.body==null){if(a)return;setTimeout(function(){i.setupDelegation(!0)},100);return}if(i.alreadySetup)return;i.alreadySetup=!0;var c=function(a){var c=i.getMaybeLynxLink(a.target);if(!c)return;var d=c[0];c=c[1];var e=c,f=new(g||(g=b("URI")))(c.href),j;if(b("LinkshimHandlerConfig").ghl_param_link_shim&&d!=="hover"&&(c.dataset&&c.dataset.attributes)){j=b("Base64").decodeObject(c.dataset.attributes);if(j&&j.open_link){var k;for(k in j)k!=="open_link"&&f.addQueryData(k,j[k]);k=c.cloneNode(!0);k.href=f.toString();e=k}}switch(d){case"async":case"asynclazy":b("FBLynxBase").logAsyncClick(e);break;case"origin":b("FBLynxBase").originReferrerPolicyClick(e);break;case"hover":i.hoverClick(e);break}b("LinkshimHandlerConfig").ghl_param_link_shim&&d!=="hover"&&j&&j.open_link&&(a.preventDefault(),h(f,window.open("",e.target),!0))};b("Event").listen(document.body,"click",c);b("LinkshimHandlerConfig").middle_click_requires_event&&b("Event").listen(document.body,"mouseup",function(a){a.button==1&&c(a)});b("Event").listen(document.body,"mouseover",function(a){a=i.getMaybeLynxLink(a.target);if(!a)return;var b=a[0];a=a[1];switch(b){case"async":case"asynclazy":case"origin":case"hover":i.mouseover(a);break}});b("Event").listen(document.body,"contextmenu",function(a){a=i.getMaybeLynxLink(a.target);if(!a)return;var b=a[0];a=a[1];switch(b){case"async":case"hover":case"origin":i.contextmenu(a);break;case"asynclazy":break}})},getMaybeLynxLink:function(a){a=b("Parent").byAttribute(a,"data-lynx-mode");if(a instanceof HTMLAnchorElement){var c=a.getAttribute("data-lynx-mode");switch(c){case"async":case"asynclazy":case"hover":case"origin":return[c,a];default:return null}}return null},hoverClick:function(a){b("FBLynxBase").revertSwapIfLynxURIPresent(a)},mouseover:function(a){b("FBLynxBase").swapLinkWithUnshimmedLink(a)},contextmenu:function(a){b("FBLynxBase").revertSwapIfLynxURIPresent(a)}};e.exports=i}),null);
__d("FBIDCheck",[],(function(a,b,c,d,e,f){"use strict";f.isUser_deprecated=a;var g=/^[1-9]\d*$/;function a(a){if(!a||typeof a==="string"&&!g.test(a))return!1;a=parseInt(a,10);return!a?!1:a>0&&a<22e8||a>=1e14&&a<=100099999989999||a>=89e12&&a<=89999999999999||a>=6000001e7&&a<=60000019999999}}),null);
__d("MemoizationInstrumentation",["invariant"],(function(a,b,c,d,e,f,g){"use strict";f.inject=a;f.onFunctionCall=b;var h=null;function a(a){h==null||g(0,2221),h=a}function b(a,b){return h?h.functionCall(a,b):null}}),null);
__d("ServerTime",["InitialServerTime"],(function(a,b,c,d,e,f){d(b("InitialServerTime").serverTime);var g;function a(){return Date.now()-g}function c(){return g}function d(a){g=Date.now()-a}e.exports={getMillis:a,getOffsetMillis:c,update:d,get:a,getSkew:c}}),null);
__d("coerceImageishSprited",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){if(!a||typeof a!=="object"||!a.sprited)return null;return a.sprited===!0||a.sprited===1?{type:"css",className:a.spriteMapCssClass+" "+a.spriteCssClass,identifier:a.loggingID}:{type:"cssless",style:{backgroundImage:"url('"+a.spi+"')",backgroundPosition:a.p,backgroundSize:a.sz,width:a.w+"px",height:a.h+"px",backgroundRepeat:"no-repeat",display:"inline-block"},identifier:a.loggingID}}}),null);
__d("coerceImageishURL",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){if(a&&typeof a==="object"&&!a.sprited&&typeof a.uri==="string"&&a.width!==void 0&&a.height!==void 0)return a;else return null}}),null);
__d("debounceCore",["TimeSlice"],(function(a,b,c,d,e,f){e.exports=a;function a(a,c,d,e,f,g){d===void 0&&(d=null);e===void 0&&(e=setTimeout);f===void 0&&(f=clearTimeout);g===void 0&&(g=!1);var h,i=!0;function j(){for(var k=arguments.length,l=new Array(k),m=0;m<k;m++)l[m]=arguments[m];var n;if(g){n=b("TimeSlice").guard(function(){i=!0,h=null},"debounceCore");if(!i){f(h);h=e(n,c);return}i=!1;a.apply(d,l)}else j.reset(),n=b("TimeSlice").guard(function(){h=null,a.apply(d,l)},"debounceCore");n.__SMmeta=a.__SMmeta;h=e(n,c)}j.reset=function(){f(h),h=null,i=!0};j.isPending=function(){return h!=null};return j}}),null);
__d("emptyObject",[],(function(a,b,c,d,e,f){"use strict";a={};b=a;e.exports=b}),null);
__d("getOwnObjectValues",[],(function(a,b,c,d,e,f){e.exports=a;function a(a){return Object.keys(a).map(function(b){return a[b]})}}),null);
__d("isStringNullOrEmpty",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return a==null||a===""}}),null);
__d("memoizeWithArgs",["MemoizationInstrumentation"],(function(a,b,c,d,e,f){e.exports=a;var g=Object.prototype.hasOwnProperty;function a(a,c,d){var e,f=d||a.name||"unknown";d=function(){e||(e={});var d=b("MemoizationInstrumentation").onFunctionCall("memoizeWithArgs",f),h=c.apply(void 0,arguments),i=!0;g.call(e,h)||(i=!1,e[h]=a.apply(void 0,arguments));d&&d(i);return e[h]};return d}}),null);
__d("isClickIDBlacklistSVDomainURI",["ClickIDDomainBlacklistSVConfig"],(function(a,b,c,d,e,f){"use strict";var g=["http","https"];function a(a){return!g.includes(a.getProtocol())?!1:b("ClickIDDomainBlacklistSVConfig").domains.some(function(b){if(a.isSubdomainOfDomain(b))return!0;if(!b.includes(".")){var c=a.getDomain().split(".");return c.includes(b)}return!1})}e.exports=a}),null);
__d("isFacebookSVDomainURI",["FBDomainsSVConfig"],(function(a,b,c,d,e,f){"use strict";var g=["http","https"];function a(a){if(g.indexOf(a.getProtocol())===-1)return!1;a=b("FBDomainsSVConfig").domains.get(a.getDomain());return a!=null}e.exports=a}),null);
__d("isFbDotComURI",[],(function(a,b,c,d,e,f){e.exports=a;var g=new RegExp("(^|\\.)fb\\.com?$","i"),h=["http","https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}}),null);
__d("asset",[],(function(a,b,c,d,e,f){function a(){for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];throw new Error("asset("+b.join(",")+"): Unexpected asset reference")}e.exports=a}),null);
__d("expectationViolation",["ErrorNormalizeUtils","FBLogger","emptyFunction","requireCond","sprintf","cr:840411"],(function(a,b,c,d,e,f){"use strict";e.exports=a;d=b("emptyFunction");function a(a){var c;for(var d=arguments.length,e=new Array(d>1?d-1:0),f=1;f<d;f++)e[f-1]=arguments[f];(c=b("FBLogger")("expectation_violation").blameToPreviousFrame()).warn.apply(c,[a].concat(e))}a.setHandler=c;function c(a){d=a}}),null);
__d("MercuryIDs",["gkx"],(function(a,b,c,d,e,f){"use strict";var g={isValid:function(a){return a==null||a===""||typeof a!=="string"?!1:/^\w{3,12}:.+/.test(a)},isValidThreadID:function(a){if(!g.isValid(a))return!1;a=g.tokenize(a);switch(a.type){case"user":case"support":case"thread":case"root":return!0;default:return(a.type==="pending"||a.type==="group")&&!b("gkx")("863760")?!0:!1}},tokenize:function(a){if(a==null||a===""||!g.isValid(a))throw new Error("bad_id_format "+String(a));var b=a.indexOf(":");return{type:a.substr(0,b),value:a.substr(b+1)}},getUserIDFromParticipantID:function(a){if(!g.isValid(a))throw new Error("bad_id_format "+a);a=g.tokenize(a);var b=a.type;a=a.value;return b==="fbid"?a:null},getParticipantIDFromUserID:function(a){if(isNaN(a))throw new Error("Not a user ID: "+a);return"fbid:"+a},getUserIDFromThreadID:function(a){return!this.isCanonical(a)?null:this.tokenize(a).value},getThreadIDFromUserID:function(a){return"user:"+a},getThreadIDFromThreadFBID:function(a){return"thread:"+a},getThreadIDFromSupportInboxItemID:function(a){return"support:"+a},getThreadFBIDFromThreadID:function(a){return this.tokenize(a).value},getThreadKeyfromThreadIDUserID:function(a,b){if(a==null||a===""||!g.isValid(a))throw new Error("bad_id_format "+String(a));var c=this.tokenize(a).type;a=this.tokenize(a).value;if(c!=="user")return"g"+a;c="";var d="";if(a.length!==b.length)a.length>b.length?(c=a,d=b):(c=b,d=a);else if(b===a)return b+"u"+a;else{var e=0;while(e<a.length&&e<b.length)if(a[e]===b[e])e++;else{a[e]>b[e]?(c=a,d=b):(c=b,d=a);break}}return d+"u"+c},getThreadIDFromParticipantID:function(a){a=this.getUserIDFromParticipantID(a);return a?this.getThreadIDFromUserID(a):null},getParticipantIDFromFromThreadID:function(a){a=this.getUserIDFromThreadID(a);return a?this.getParticipantIDFromUserID(a):null},getSupportInboxItemIDFromThreadID:function(a){return this.tokenize(a).value},isCanonical:function(a){return this.isValid(a)&&this.tokenize(a).type==="user"},isGroupChat:function(a){return this.isValid(a)&&this.tokenize(a).type!=="user"},isLocalThread:function(a){return this.isValid(a)&&this.tokenize(a).type==="root"}};e.exports=g}),null);
__d("debounce",["clearTimeout","debounceCore","setTimeout"],(function(a,b,c,d,e,f){e.exports=a;function a(a,c,d,e,f){c===void 0&&(c=100);var g=function(a,c,d){return b("setTimeout")(a,c,d,!e)};return b("debounceCore")(a,c,d,g,b("clearTimeout"),f)}}),null);
__d("throttle",["TimeSlice","TimeSliceInteractionSV","setTimeout","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){function a(a,c,d){return g(a,c,d,b("setTimeout"),!1)}Object.assign(a,{acrossTransitions:function(a,c,d){return g(a,c,d,b("setTimeoutAcrossTransitions"),!1)},withBlocking:function(a,c,d){return g(a,c,d,b("setTimeout"),!0)},acrossTransitionsWithBlocking:function(a,c,d){return g(a,c,d,b("setTimeoutAcrossTransitions"),!0)}});function g(a,c,d,e,f){var g=c==null?100:c,h,i,j=0,k=null,l=[],m=b("TimeSlice").guard(function(){j=Date.now();if(i){var b=function(b){a.apply(h,b)}.bind(null,i),c=l.length;while(--c>=0)b=l[c].bind(null,b);l=[];b();i=null;k=e(m,g)}else k=null},"throttle_"+g+"_ms",{propagationType:b("TimeSlice").PropagationType.EXECUTION,registerCallStack:!0});m.__SMmeta=a.__SMmeta;return function(){b("TimeSliceInteractionSV").ref_counting_fix&&l.push(b("TimeSlice").getGuardedContinuation("throttleWithContinuation")),i=arguments,h=this,d!==void 0&&(h=d),(k===null||Date.now()-j>g)&&(f?m():k=e(m,0))}}e.exports=a}),null);