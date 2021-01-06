(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ba=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a},ea=function(a){a=
["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");},q=ea(this),fa=function(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in c))break a;c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&da(c,a,{configurable:!0,writable:!0,value:b})}},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={ha:!0},ka={};try{ka.__proto__=ja;ia=ka.ha;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
fa("Promise",function(a){function b(){this.a=null}function c(e){return e instanceof g?e:new g(function(h){h(e)})}if(a)return a;b.prototype.b=function(e){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(e)};var d=q.setTimeout;b.prototype.c=function(e){d(e,0)};b.prototype.g=function(){for(;this.a&&this.a.length;){var e=this.a;this.a=[];for(var h=0;h<e.length;++h){var k=e[h];e[h]=null;try{k()}catch(m){this.f(m)}}}this.a=null};b.prototype.f=function(e){this.c(function(){throw e;
})};var g=function(e){this.b=0;this.c=void 0;this.a=[];this.l=!1;var h=this.f();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}};g.prototype.f=function(){function e(m){return function(n){k||(k=!0,m.call(h,n))}}var h=this,k=!1;return{resolve:e(this.A),reject:e(this.g)}};g.prototype.A=function(e){if(e===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof g)this.C(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?
this.v(e):this.h(e)}};g.prototype.v=function(e){var h=void 0;try{h=e.then}catch(k){this.g(k);return}"function"==typeof h?this.D(h,e):this.h(e)};g.prototype.g=function(e){this.m(2,e)};g.prototype.h=function(e){this.m(1,e)};g.prototype.m=function(e,h){if(0!=this.b)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.b);this.b=e;this.c=h;2===this.b&&this.B();this.o()};g.prototype.B=function(){var e=this;d(function(){if(e.u()){var h=q.console;"undefined"!==typeof h&&h.error(e.c)}},
1)};g.prototype.u=function(){if(this.l)return!1;var e=q.CustomEvent,h=q.Event,k=q.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof h?e=new h("unhandledrejection",{cancelable:!0}):(e=q.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.c;return k(e)};g.prototype.o=function(){if(null!=this.a){for(var e=0;e<this.a.length;++e)f.b(this.a[e]);this.a=null}};
var f=new b;g.prototype.C=function(e){var h=this.f();e.G(h.resolve,h.reject)};g.prototype.D=function(e,h){var k=this.f();try{e.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};g.prototype.then=function(e,h){function k(p,w){return"function"==typeof p?function(r){try{m(p(r))}catch(l){n(l)}}:w}var m,n,t=new g(function(p,w){m=p;n=w});this.G(k(e,m),k(h,n));return t};g.prototype.catch=function(e){return this.then(void 0,e)};g.prototype.G=function(e,h){function k(){switch(m.b){case 1:e(m.c);break;case 2:h(m.c);
break;default:throw Error("Unexpected state: "+m.b);}}var m=this;null==this.a?f.b(k):this.a.push(k);this.l=!0};g.resolve=c;g.reject=function(e){return new g(function(h,k){k(e)})};g.race=function(e){return new g(function(h,k){for(var m=ba(e),n=m.next();!n.done;n=m.next())c(n.value).G(h,k)})};g.all=function(e){var h=ba(e),k=h.next();return k.done?c([]):new g(function(m,n){function t(r){return function(l){p[r]=l;w--;0==w&&m(p)}}var p=[],w=0;do p.push(void 0),w++,c(k.value).G(t(p.length-1),n),k=h.next();
while(!k.done)})};return g});var u=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,na=null,oa=function(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ma.test(a)?a:""},pa=function(){},qa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}},ra=function(a){return a};var z=function(a,b){this.b=a===x&&b||"";this.a=sa},B=function(a){return a instanceof z&&a.constructor===z&&a.a===sa?a.b:"type_error:Const"},sa={},x={};var ta=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,g=0;g<c;g++)g in d&&b.call(void 0,d[g],g,a)},C=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),g="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in g&&(d[f]=b.call(void 0,g[f],f,a));return d},ua=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,
b,c)}:function(a,b,c){var d=c;ta(a,function(g,f){d=b.call(void 0,d,g,f,a)});return d},va=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in d&&b.call(void 0,d[g],g,a))return!0;return!1};function wa(a){for(var b=[],c=0;c<a;c++)b[c]="";return b};var xa=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}},ya=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var D;var Aa=function(a,b){this.a=b===za?a:""},Ba=function(a){return a instanceof Aa&&a.constructor===Aa?a.a:"type_error:TrustedResourceUrl"},Ea=function(a){var b=B(new z(x,"https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"));if(!Ca.test(b))throw Error("Invalid TrustedResourceUrl format: "+b);var c=b.replace(Da,function(d,g){if(!Object.prototype.hasOwnProperty.call(a,g))throw Error('Found marker, "'+g+'", in format string, "'+b+'", but no valid label mapping found in args: '+JSON.stringify(a));
d=a[g];return d instanceof z?B(d):encodeURIComponent(String(d))});return E(c)},Da=/%{(\w+)}/g,Ca=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,za={},E=function(a){if(void 0===D){var b=null;var c=u.trustedTypes;if(c&&c.createPolicy){try{b=c.createPolicy("goog#html",{createHTML:ra,createScript:ra,createScriptURL:ra})}catch(d){u.console&&u.console.error(d.message)}D=b}else D=b}a=(b=D)?b.createScriptURL(a):a;return new Aa(a,za)},Fa=function(a,b,c){if(null==c)return b;
if("string"===typeof c)return c?a+encodeURIComponent(c):"";for(var d in c)if(Object.prototype.hasOwnProperty.call(c,d)){var g=c[d];g=Array.isArray(g)?g:[g];for(var f=0;f<g.length;f++){var e=g[f];null!=e&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(d)+"="+encodeURIComponent(String(e)))}}return b};var F;a:{var Ga=u.navigator;if(Ga){var Ha=Ga.userAgent;if(Ha){F=Ha;break a}}F=""};var Ia=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var Ja=function(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};var G=function(a){G[" "](a);return a};G[" "]=pa;var Ka=-1!=F.toLowerCase().indexOf("webkit")&&-1==F.indexOf("Edge");var La=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;var H=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{G(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},Na=function(a,b){b=b||u;for(var c=0;b&&40>c++&&!a(b);)b=Ma(b)},Ma=function(a){try{var b=a.parent;if(b&&b!=a)return b}catch(c){}return null},Oa=function(a,b){var c=a.createElement("script");c.src=Ba(b);(b=c.ownerDocument&&c.ownerDocument.defaultView)&&b!=u?b=oa(b.document):(null===na&&(na=oa(u.document)),b=na);b&&c.setAttribute("nonce",b);(a=a.getElementsByTagName("script")[0])&&
a.parentNode&&a.parentNode.insertBefore(c,a)},Pa=function(){if(!u.crypto)return Math.random();try{var a=new Uint32Array(1);u.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},I=function(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Ra=xa(function(){return va(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],Qa)||1E-4>Math.random()}),Sa=xa(function(){return Qa("MSIE")}),Qa=function(a){return-1!=
F.indexOf(a)},Ta=/https?:\/\/[^\/]+/,Ua=function(a){return(a=Ta.exec(a))&&a[0]||""},Va=/^([0-9.]+)px$/,J=function(a){return(a=Va.exec(a))?+a[1]:null},Wa=function(a){var b=u;a=void 0===a?!0:a;try{for(var c=null;c!=b;c=b,b=b.parent)switch(b.location.protocol){case "https:":return!0;case "file:":return a;case "http:":return!1}}catch(d){}return!0},K=function(a,b){try{return!(!a.frames||!a.frames[b])}catch(c){return!1}};var Xa=function(a,b){var c=a.ampInaboxIframes=a.ampInaboxIframes||[],d=function(){},g=function(f){if(a.ampInaboxInitialized)d();else{var e,h="amp-ini-load"===f.data;a.ampInaboxPendingMessages&&!h&&(e=/^amp-(\d{15,20})?/.exec(f.data))&&(a.ampInaboxPendingMessages.push(f),f=e[1],a.ampInaboxInitialized||f&&!/^\d{15,20}$/.test(f)||a.document.querySelector('script[src$="amp4ads-host-v0.js"]')||Oa(a.document,f?Ea({ampVersion:f}):E(B(new z(x,"https://cdn.ampproject.org/amp4ads-host-v0.js")))))}};b&&c.push(b);
a.ampInaboxInitialized||(a.ampInaboxPendingMessages=a.ampInaboxPendingMessages||[],c.google_amp_listener_added||(c.google_amp_listener_added=!0,Ja(a,"message",g),d=function(){a.removeEventListener&&a.removeEventListener("message",g,!1)}))};var Ya=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/,bb=function(a){a=a||Za();for(var b=new $a(u.location.href,!1),c=null,d=a.length-1,g=d;0<=g;--g){var f=a[g];!c&&Ya.test(f.url)&&(c=f);if(f.url&&!f.K){b=f;break}}g=null;f=a.length&&a[d].url;0!=b.depth&&f&&(g=a[d]);return new ab(b,g,c)},Za=function(){var a=u,b=[],c=null;do{var d=a;if(H(d)){var g=d.location.href;c=d.document&&d.document.referrer||null}else g=c,c=null;b.push(new $a(g||""));try{a=d.parent}catch(f){a=null}}while(a&&d!=a);
d=0;for(a=b.length-1;d<=a;++d)b[d].depth=a-d;d=u;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(a=1;a<b.length;++a)g=b[a],g.url||(g.url=d.location.ancestorOrigins[a-1]||"",g.K=!0);return b},ab=function(a,b,c){this.a=a;this.b=b;this.c=c},$a=function(a,b){this.url=a;this.K=!!b;this.depth=null};var cb=function(a){var b;if(b=u.navigator)b=u.navigator.userAgent,b=/Chrome/.test(b)&&!/Edge/.test(b)?!0:!1;b&&u.navigator.sendBeacon?u.navigator.sendBeacon(a):(u.google_image_requests||(u.google_image_requests=[]),b=u.document.createElement("img"),b.src=a,u.google_image_requests.push(b))};var L=function(a,b,c){this.g=c||4E3;this.c=a||"&";this.f=b||",$";this.b={};this.h=0;this.a=[]},db=function(a,b){var c={};c[a]=b;return[c]},fb=function(a,b,c,d,g){var f=[];I(a,function(e,h){(e=eb(e,b,c,d,g))&&f.push(h+"="+e)});return f.join(b)},eb=function(a,b,c,d,g){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],e=0;e<a.length;e++)f.push(eb(a[e],b,c,d+1,g));return f.join(c[d])}}else if("object"==typeof a)return g=
g||0,2>g?encodeURIComponent(fb(a,b,c,d,g+1)):"...";return encodeURIComponent(String(a))},M=function(a,b,c){a.a.push(b);a.b[b]=c},N=function(a,b,c,d){a.a.push(b);a.b[b]=db(c,d)},O=function(a,b,c,d){b=b+"//"+c+d;var g=gb(a)-d.length;if(0>g)return"";a.a.sort(function(n,t){return n-t});d=null;c="";for(var f=0;f<a.a.length;f++)for(var e=a.a[f],h=a.b[e],k=0;k<h.length;k++){if(!g){d=null==d?e:d;break}var m=fb(h[k],a.c,a.f);if(m){m=c+m;if(g>=m.length){g-=m.length;b+=m;c=a.c;break}d=null==d?e:d}}a="";null!=
d&&(a=c+"trn="+d);return b+a},gb=function(a){var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return a.g-3-b-a.c.length-1};var hb=function(a,b,c,d){if(Math.random()<(d||.01))try{if(c instanceof L)var g=c;else g=new L,I(c,function(e,h){var k=g,m=k.h++;M(k,m,db(h,e))});var f=O(g,a.a,"pagead2.googlesyndication.com","/pagead/gen_204?id="+b+"&");f&&cb(f)}catch(e){}};var ib=!1,P=null,jb=function(){this.b={};this.a={};for(var a=[],b=0,c=a.length;b<c;++b)this.a[a[b]]=""},kb=function(a,b,c){""!=b&&(c?a.a.hasOwnProperty(c)&&(a.a[c]=b):a.b[b]=!0)},lb=function(a,b){return a.a.hasOwnProperty(b)?a.a[b]:""},mb=function(a){var b=[];I(a.b,function(c,d){b.push(d)});I(a.a,function(c){""!=c&&b.push(c)});return b};var ob=function(){this.c=nb;this.b=!0;this.f=this.a},qb=function(a,b){var c=Q;try{var d=a()}catch(g){a=c.b;try{a=c.f(529,new Ia(g,{message:pb(g)}),void 0,b)}catch(f){c.a(217,f)}if(!a)throw g;}return d};
ob.prototype.a=function(a,b,c,d,g){g=g||"dcmads-err";try{var f=new L;N(f,1,"context",a);b.error&&b.meta&&b.id||(b=new Ia(b,{message:pb(b)}));b.msg&&N(f,2,"msg",b.msg.substring(0,512));var e=b.meta||{};if(d)try{d(e)}catch(r){}M(f,3,[e]);var h=bb();h.b&&N(f,4,"top",h.b.url||"");var k={url:h.a.url||""};if(h.a.url){var m=h.a.url.match(La),n=m[1],t=m[3],p=m[4];b="";n&&(b+=n+":");t&&(b+="//",b+=t,p&&(b+=":"+p));var w=b}else w="";M(f,5,[k,{url:w}]);hb(this.c,g,f,c)}catch(r){try{hb(this.c,g,{context:"ecmserr",
rctx:a,msg:pb(r),url:h&&h.a.url},c)}catch(l){}}return this.b};var pb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};var rb=function(a,b,c){this.a=[];this.a[0]=c;this.a[1]=a;this.a[2]=b;this.b=this.a[3]=!1};var ub=function(){var a=(Wa()?"https:":"http:")+sb;tb();a=E(a);u.google_osd_loaded||(Oa(u.document,a),u.google_osd_loaded=!0)},vb=function(a,b){a&&Ja(a,"load",b)},wb=function(){var a=u.google_osd_amcb;return"function"===typeof a?a:null},xb=E(B(new z(x,"https://www.googletagservices.com/activeview/js/current/osd.js")));var tb=pa;var R=function(){this.b=0;this.a=[]},yb=function(){var a=(a=u.goog_osd_adp)&&"function"===typeof a.getOseId?a:null;return null==a?u.goog_osd_adp=new R:a};R.prototype.numBlocks=function(){return this.a.length};R.prototype.getOseId=function(){return this.b};R.prototype.getNewBlocks=function(a,b){zb(this,a);b&&(u.google_osd_amcb=a)};R.prototype.setup=function(a){this.b=a};
R.prototype.registerAdBlock=function(a,b,c){var d=new rb(a,b,c);wb()?d.a[3]=!0:vb(c,function(){d.a[3]=!0});this.a.push(d);zb(this);ub()};var zb=function(a,b){if(b=b||wb())for(var c=0;c<a.a.length;++c){var d=a.a[c];d.b||(b.apply(void 0,d.a),d.b=!0)}},Ab,Bb=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/.exec(Ba(xb).toString()),Cb=Bb[3]||"";Ab=E(Bb[1]+Fa("?",Bb[2]||"",{cb:"/r20100101"})+Fa("#",Cb,void 0));var sb=Ba(Ab).toString().slice(6);E(B(new z(x,"https://pagead2.googlesyndication.com/pagead/osd.js")));var S=function(a,b){this.a=a;this.depth=b},Eb=function(a){a=a||Za();var b=Math.max(a.length-1,0),c=bb(a);a=c.a;var d=c.b,g=c.c,f=[];c=function(h,k){return null==h?k:h};g&&f.push(new S([g.url,g.K?2:0],c(g.depth,1)));d&&d!=g&&f.push(new S([d.url,2],0));a.url&&a!=g&&f.push(new S([a.url,0],c(a.depth,b)));var e=C(f,function(h,k){return f.slice(0,f.length-k)});!a.url||(g||d)&&a!=g||(d=Ua(a.url))&&e.push([new S([d,1],c(a.depth,b))]);e.push([]);return C(e,function(h){return Db(b,h)})},Fb=function(a,b){b=
b||Eb();return C(b,function(c){var d={};d[a]=c;return d})};function Db(a,b){var c=ua(b,function(g,f){return Math.max(g,f.depth)},-1),d=wa(c+2);d[0]=a;ta(b,function(g){return d[g.depth+1]=g.a});return d}var Gb=function(a){a=a||Eb();return C(a,function(b){return eb(b)})};var Hb=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},T=function(a,b){this.b=a;this.a=null;this.g={};this.h=0;this.c=void 0===b?500:b;this.f=null},U=function(){};T.prototype=ca(U.prototype);T.prototype.constructor=T;
if(la)la(T,U);else for(var V in U)if("prototype"!=V)if(Object.defineProperties){var Ib=Object.getOwnPropertyDescriptor(U,V);Ib&&Object.defineProperty(T,V,Ib)}else T[V]=U[V];
T.prototype.addEventListener=function(a){var b={},c=ya(function(){return a(b)}),d=0;-1!==this.c&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.c));var g=function(f,e){clearTimeout(d);f?(b=f,b.internalErrorState=Hb(b),e&&0===b.internalErrorState||(b.tcString="tcunavailable",e||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{W(this,"addEventListener",g)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};T.prototype.removeEventListener=function(a){a&&a.listenerId&&W(this,"removeEventListener",null,a.listenerId)};
var Jb=function(a,b){var c={internalErrorState:0},d=ya(function(){return b(c)}),g=0;-1!==a.c&&(g=setTimeout(function(){c.tcString="tcunavailable";c.internalErrorState=1;d()},a.c));W(a,"addEventListener",function(f,e){g&&(clearTimeout(g),g=0);e&&(c=f);c.internalErrorState=Hb(c);0!=c.internalErrorState&&(c.tcString="tcunavailable");(f=0!=c.internalErrorState)||(f=c,!1===f.gdprApplies?f=!0:(void 0===f.internalErrorState&&(f.internalErrorState=Hb(f)),f="error"===f.cmpStatus||0!==f.internalErrorState||
"loaded"===f.cmpStatus&&("tcloaded"===f.eventStatus||"useractioncomplete"===f.eventStatus)?!0:!1));f&&(W(a,"removeEventListener",null,c.listenerId),d())})},Kb=function(a){return new Promise(function(b){Jb(a,b)})},W=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.b.__tcfapi)a=a.b.__tcfapi,a(b,2,c,d);else if(Lb(a)){Mb(a);var g=++a.h;a.g[g]=c;a.a&&(c={},a.a.postMessage((c.__tcfapiCall={command:b,version:2,callId:g,parameter:d},c),"*"))}else c({},!1)},Lb=function(a){if(a.a)return a.a;a:{var b=
a.b;for(var c=0;50>c;++c){if(K(b,"__tcfapiLocator"))break a;if(!(b=Ma(b)))break}b=null}a.a=b;return a.a},Mb=function(a){a.f||(a.f=function(b){try{var c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.g[c.callId](c.returnValue,c.success)}catch(d){}},Ja(a.b,"message",a.f))};var Nb;if(Nb=Ka){var X="IFRAME",Ob=document;X=String(X);"application/xhtml+xml"===Ob.contentType&&(X=X.toLowerCase());Nb="srcdoc"in Ob.createElement(X)}var Pb=Nb;var Qb=Wa(!1)?"https:":"http:",nb,Q;nb=new function(){this.a=Qb};Q=new ob;var Rb=function(a){Q.b=!1;throw Error(a);};var Y={1:{F:"40004000",s:"40004001"}},Sb={F:"40004006",s:"40004007"};Y[4]=Sb;var Tb={F:"40004008",s:"40004009"};Y[5]=Tb;Y[7]={F:"44724682",s:"44724683"};var Ub={F:"44728098",s:"44728099"};Y[9]=Ub;Y[10]={F:"44730447",s:"44730448"};var Vb={ya:1,va:4,ua:6,wa:8,xa:9},Wb={1:1,4:4,5:4,7:6,9:8,10:9};var Xb=function(a,b,c){if(a=a.dcmads&&a.dcmads.expts&&a.dcmads.expts[c]){var d=Y[c],g=[],f=0;for(h in d)g[f++]=d[h];if((c=Wb[c])?b.a.hasOwnProperty(c)&&""==b.a[c]:1){var e;if(null===P){P="";try{var h="";try{h=u.top.location.hash}catch(k){h=u.location.hash}h&&(P=(e=h.match(/\bdeid=([\d,]+)/))?e[1]:"")}catch(k){}}e=(e=P)?(e=e.match(new RegExp("\\b("+g.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else if(ib)a=null;else b:{if(!Sa()&&!Ra()&&(e=Math.random(),e<a)){e=Pa();a=g[Math.floor(e*g.length)];break b}a=
null}a&&kb(b,a,c)}}};function Yb(a,b){if(b&&b.split){b=b.split(",");for(var c=0;c<b.length;++c){var d=b[c].split("|");1<d.length?kb(a,d[1],d[0]):kb(a,d[0])}}};var Zb=function(a){var b=this,c=3===a?"":"dc_";this.c={};var d=function(g){b.c[g]=!0;return g};this.V=d("addtl_consent");this.g=d(c+"adk");this.h=d("amp");this.appId=d(c+"msid");this.l=d(2===a?"chd":"tfcd");this.b=d("click");this.m=d("cesc");this.o=d("cmpl");this.W=d("gcsr");this.u=d("crlt");this.v=d("xdt");this.A=d("mtfIFPath");this.B=d("dsmd");this.a=d("dcopt");this.C=d("deal_id");this.devicePixelRatio=d("u_sd");this.D=d("mtfIFrameRequest");this.I=d("dv3_deal");this.J=d(c+"eid");this.N=d(c+"xid");
this.X=d("gdpr_consent");this.gdprApplies=d("gdpr");this.height=d("h");this.O=d("pc");this.P=d("dcapp");this.R=d("kw");this.S=d("mtfLeft");this.T=d(1===a?c+"lat":"lat");this.U=d("ltd");this.Y=d("msdk");this.Z=d("mtfBottomFloat");this.$=d("mtfLeftFloat");this.aa=d("mtfRightFloat");this.ba=d("mtfTopFloat");d("npa");this.ca=d(c+"omid_p");this.da=d("ord");this.ea=d("osdl");this.fa=d("osda");this.ga=d("output");this.M=d("pdid");this.ia=d("pdidtype");this.ja=d("prcl");this.ka=d(c+"ref");this.la=d(c+"rxp");
this.ma=d(c+"rdid");this.na=d("sttr");this.oa=d(c+"sdk_apis");d("sz");this.pa=d(3===a?"insv":"dc_ver");this.qa=d("mtfTop");this.ra=d("url");this.f=d(c+"rfl");this.sa=d("tfua");this.ta=d("u");this.width=d("w")};Zb.prototype.has=function(a){return!!this.c[a]};var $b=/^data-d([bc]m|v3)-.+/i,ac=/^https?%3A.+/i,bc=/^N\d+\.[A-Za-z0-9._-]*[A-Za-z0-9_-]\.?\/B\d+\.\d+/,cc=function(a,b){var c=b.attributes;a.a={};for(var d=0;d<c.length;d++){var g=c[d].name;if($b.test(g)){var f=g.toLowerCase();g=0==f.indexOf("data-dcm-param-")?"data-dcm-param-"+g.substring(15):f}else g=null;g&&(f=c[d].value,f=null!=f?f:"","data-dcm-click-tracker"==g&&(f=ac.test(f)?decodeURIComponent(f):f),a.a[g]=f)}c=a.a["data-dcm-placement"];g=a.a["data-dbm-deal"];f=a.a["data-dv3-deal"];c||g||
f||Rb("No placement or deal attribute set on ins tag");d=a.a["data-dcm-rendering-mode"];c?(a.b=1,(g=bc.exec(c))||Rb("Invalid placement: "+c),a.o=g[0]):f?(a.b=3,a.f=f):(a.b=2,a.f=g);a.c=new Zb(a.b);switch(d){case "iframe":a.h="iframe";break;case "script":a.h="script";break;default:a.h=2===a.b?"script":"iframe"}a.I=b;c=b.style;d={};try{d=(u.getComputedStyle?u.getComputedStyle(b,null):b.currentStyle)||{}}catch(e){}if(b=J(c.width)||J(d.width))a.width=Math.round(b);if(b=J(c.height)||J(d.height))a.height=
Math.round(b)};function dc(a,b,c,d,g){try{for(var f=[],e,h=0;(e=c(a))&&a!=b&&100>++h;){for(var k=null,m=d(e),n=0,t=0;t<m.length;++t){if(m[t]==a){k=t-n;break}g(m[t])&&++n}if(null===k)return null;f.unshift(k);a=e}return f}catch(p){return null}}function ec(a){return dc(a,a.top,function(b){try{return b.parent}catch(c){return null}},function(b){return b.frames},function(){return!1})}
function fc(a){return dc(a,document.documentElement,function(b){return b.parentElement},function(b){return b.children},function(b){return 8==b.nodeType})};var gc=/https?:\/\/d-\d+\.ampproject\.net/;function hc(a){return"data-dcm-http-only"in a?"http:":"https:"}function ic(a,b,c){for(var d=0;d<c.length;d++){var g=c[d];M(a,g.priority,jc(b,g))}}function jc(a,b){a=a[b.i];var c=b.H;if(null==a||!c&&0==a.length||null!=b.L&&a===b.L)return[];var d={};d[b.j]=null!=c?c:a;return[d]}function kc(a,b,c){a=a[b];if(!a)return[];a=String(a).toLowerCase();b={};if("1"==a||"true"==a)b[c]="1";return b[c]?[b]:[]}
function lc(a,b,c,d){var g,f=!1,e=0,h=a.__cmp?1:0;h|=a.__tcfapi?2:0;Na(function(p){K(p,"google_osd_static_frame")&&(e=p==a.top?2:1);K(p,"__cmpLocator")&&(h|=4);K(p,"__tcfapiLocator")&&(h|=8);if(!H(p))return!1;if(p.mraid)try{g=p.mraid.getVersion()}catch(w){}p.MRAID_ENV&&(g=p.MRAID_ENV.version||void 0,c.v=p.MRAID_ENV.sdk||void 0);p.omid_v1_present&&(f=!0);return!1},a);var k=[];if(g){var m=g.split(".")[0];"2"==m?k.push(5):"3"==m&&k.push(6);c.v&&N(b,41,d.Y,c.v)}f&&k.push(7);if(m=c.a["data-dcm-api-frameworks"]){m=
m.split?m.split(","):[m];for(var n=0;n<m.length;++n){var t=+m[n];0<t&&-1===k.indexOf(t)&&k.push(t)}}0<k.length&&N(b,39,d.oa,k);e&&N(b,46,d.fa,e);h&&N(b,43,d.o,h)};var mc=/^(?:https?:)?\/\/ad\.doubleclick\.net(?:\/ddm)?\/ad[ij]\/(N[^;]+)/,nc=/(^| )dcmads( |$)/;G(yb);
function oc(a,b){var c=a.document;ib=!1;var d=new jb;for(f in Vb)d.a[Vb[f]]="";try{Yb(d,a.dcmads&&a.dcmads.eids);var g=/.*#.*eids=([0-9,|]+)/.exec(a.location.href);g&&Yb(d,g[1])}catch(n){}Xb(a,d,1);Xb(a,d,5);Xb(a,d,9);b.l=d;b.C=!!a.dcmads.version.experiment;b.J=a.dcmads.startTime||0;b.version="67."+(a.dcmads.version.loader||"?");b.g=a.goog_ddm_ps;if(!pc(b.g)){b.g={};var f=[u.top];d=[];g=0;for(var e;e=f[g++];){!H(e)||d.push(e);try{if(e.frames)for(var h=e.frames.length,k=0;k<h&&1024>f.length;++k)f.push(e.frames[k])}catch(n){}}for(h=
0;h<d.length;++h)if(f=d[h].goog_ddm_ps,pc(f)){b.g.corr=f.corr;break}if(!pc(b.g)){h="";for(d=0;10>d;++d)h+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_.!*'()"[Math.floor(70*Math.random())];b.g.corr=h}a.goog_ddm_ps=b.g}c.body||(c.write('<b style="display:none;">_</b>'),c.body||Rb("Body element does not exist"));c=c.getElementsByClassName?c.getElementsByClassName("dcmads"):c.getElementsByTagName("ins");for(h=0;h<c.length;h++)if(d=c[h],(d.getAttribute("data-dcm-placement")||d.getAttribute("data-dbm-deal")||
d.getAttribute("data-dv3-deal"))&&nc.test(d.className)&&!d.getAttribute("data-dcm-processed")){var m=d;m.setAttribute("data-dcm-processed","y");break}m?qc(a,m,b):Rb("No ad ins element found")}function pc(a){var b=typeof a;return("object"==b&&null!=a||"function"==b)&&!!a.corr}function rc(a,b,c){b.version?(c.rm=b.h||"",c.mode=b.b?b.b+"":"0",b.o?c.plcmt=b.o||"":b.f&&(c.deal=b.f||""),sc(c,b)):(c.ver="67."+(a.dcmads.version.loader||"?"),c.rm="",c.mode="0")}
function sc(a,b){a.ver=b.version;b.C&&(a.rxp=1);(b=b.l&&mb(b.l))&&b.length&&(a.eids=b)}function tc(a){if("iframe"!=a.h||1!==a.b||!H(u.top)||lb(a.l,8)===Ub.s)return null;var b=yb();b.setup(3);a.D=!0;return b}function uc(a,b){if(!a)return null;a=a.split(b+"=");a=a[1]||a[0];return(new RegExp("\\${"+b+"(_[0-9]+)?}","i")).test(a)?null:a}
function vc(a,b){var c=uc(b.a["data-dcm-gdpr-consent"],"gdpr_consent");c&&(b.m=c,b.A="m");c=uc(b.a["data-dcm-gdpr-applies"],"gdpr");/[01]/.test(c)&&(b.gdprApplies=c);if(c=uc(b.a["data-dcm-additional-consent"],"addtl_consent"))b.u=c;if(b.m||null!=b.gdprApplies)return null;a=new T(a);return"function"===typeof a.b.__tcfapi||null!=Lb(a)?a:null}
function qc(a,b,c){cc(c,b);var d=tc(c);wc(a,c);var g=vc(a,c);g?Kb(g).then(function(f){null!=f.gdprApplies&&(c.gdprApplies=f.gdprApplies?"1":"0");c.m=f.tcString||null;c.u=f.addtlConsent||null;c.A="a";xc(a,b,c,d,!0)}).catch(function(f){Q.a(672,f,void 0,qa(rc,a,c))}):xc(a,b,c,d)}
function xc(a,b,c,d,g){g=void 0===g?!1:g;var f=new L(1===c.b?";":void 0,void 0,15360);var e=c.c;var h=c.a;var k=c.c,m=h["data-dcm-click-tracker"];if(null==m)h=[];else{var n=h["data-dcm-landing-page-escapes"]||"";"0"!==n&&"1"!==n&&"2"!==n&&(n="");var t={};3===c.b?(t[k.b]=m,t[k.m]=n):t[k.b+n]=m;null!=h["data-dcm-reverse-click-tracker"]&&(t[k.a]="rcl");h=[t]}M(f,32,h);N(f,42,e.u,c.g.corr);h=c.a;k=[];for(var p in h)0==p.indexOf("data-dcm-param-")&&k.push(p);if(0==k.length)h=[];else{p=[];k.sort();for(m=
0;m<k.length;m++){if(0<p.length){n=void 0;t=p[0];var w={};for(n in t)w[n]=t[n];n=w}else n={};t=k[m];(w=encodeURIComponent(t.substring(15)))&&!c.c.has(w)&&(n[w]=h[t],p.unshift(n))}h=p}M(f,25,h);b:{c:{var r=void 0===r?u:r;h=r.context||r.AMP_CONTEXT_DATA;if(!h)try{h=r.parent.context||r.parent.AMP_CONTEXT_DATA}catch(Ac){}try{if(h&&h.pageViewId&&h.canonicalUrl){var l=h;break c}}catch(Ac){}l=null}if(l)l=!0;else{l=c.B;for(r=0;r<l.length;r++)if(gc.test(l[r].url)){l=!0;break b}l=!1}}l&&N(f,45,e.h,"1");l=H(a.top)?
0:1;N(f,37,e.v,l);l=mb(c.l);l.length&&N(f,4,e.J,l);c.C&&N(f,3,e.la,"1");N(f,2,e.pa,c.version);(l=c.J)?(l=(new Date).getTime()-l,99999<l&&(l="M")):l="";N(f,47,e.na,l);lc(a,f,c,e);l=u.devicePixelRatio;(l="number"===typeof l?+l.toFixed(3):null)&&N(f,13,e.devicePixelRatio,l);(l=c.a["data-dcm-ssaid"])?(r={},r[c.c.M]=l,r[c.c.ia]="ssaid",l=[r]):l=[];M(f,29,l);1===c.b?N(f,5,"sz",c.width&&c.height?c.width+"x"+c.height:""):(N(f,1,e.ga,"iframe"==c.h?"html":"js"),l={},l[e.width]=c.width,l[e.height]=c.height,
M(f,5,[l]));l=e.g;h=c.I;r=ec(a)||["?"];h=fc(h)||["?"];r=r.join(",")+":"+h.join(",");h=r.length;if(0==h)r=0;else{k=305419896;for(p=0;p<h;p++)k^=(k<<5)+(k>>2)+r.charCodeAt(p)&4294967295;r=0<k?k:4294967296+k}N(f,30,l,r);l=u.navigator;l.connection&&l.connection.saveData&&N(f,40,e.B,"1");ic(f,c.a,[{priority:36,i:"data-dcm-app-id",j:e.appId},{priority:35,i:"data-dcm-publisher-url",j:e.ka},{priority:24,i:"data-dcm-keywords",j:e.R},{priority:28,i:"data-dcm-impression-exchange-id",j:e.O},{priority:38,i:"data-dcm-omid-partner",
j:e.ca,L:"[OMIDPARTNER]"}]);M(f,14,kc(c.a,"data-dcm-underage",e.sa));M(f,15,kc(c.a,"data-dcm-child-directed",e.l));M(f,22,kc(c.a,"data-dcm-limited-ads",e.U));if(2===c.b||"https:"==hc(c.a))M(f,21,kc(c.a,"data-dcm-limit-ad-tracking",e.T)),M(f,20,jc(c.a,{i:"data-dcm-resettable-device-id",j:e.ma}));c.m&&(N(f,16,e.X,c.m),N(f,44,e.W,c.A));null!=c.gdprApplies&&N(f,17,e.gdprApplies,c.gdprApplies);c.u&&N(f,18,e.V,c.u);if(2===c.b){var v=c.c;N(f,0,v.C,c.f);var y=bb(c.B);N(f,34,v.ra,y.b?y.b.url:y.a.url)}else e=
c.c,l=Eb(c.B),1===c.b?M(f,34,Fb(e.f,l)):(N(f,0,e.I,c.f),M(f,34,Fb(e.f,Gb(l)))),l=c.a,r="","data-dcm-http-only"in l&&(r+="h"),"data-dcm-https-only"in l&&(r+="s"),""==r&&(r="n"),N(f,48,e.ja,r),N(f,31,e.da,("00000"+Math.floor(Math.random()*Math.pow(36,6)).toString(36)).slice(-6)),l=c.a,"data-dcm-multi-bottom-float"in l?(v=c.c.Z,y=l["data-dcm-multi-bottom-float"]):"data-dcm-multi-left-float"in l?(v=c.c.$,y=l["data-dcm-multi-left-float"]):"data-dcm-multi-right-float"in l?(v=c.c.aa,y=l["data-dcm-multi-right-float"]):
"data-dcm-multi-top-float"in l&&(v=c.c.ba,y=l["data-dcm-multi-top-float"]),v&&y&&(y=y.split?y.split(","):y,N(f,11,v,y)),c.D&&N(f,12,e.ea,"1"),ic(f,c.a,[{priority:26,i:"data-dcm-anonymous-inventory",j:e.a,H:"anid"},{priority:8,i:"data-dcm-disable-iframe-breakout",j:e.D,H:"false"},{priority:7,i:"data-dcm-dart-iframe-path",j:e.A},{priority:23,i:"data-dcm-external-id",j:e.N},{priority:33,i:"data-dcm-in-app",j:e.P,H:"1"},{priority:6,i:"data-dcm-interstitial",j:e.a,H:"1_ist"},{priority:9,i:"data-dcm-left-float",
j:e.S},{priority:10,i:"data-dcm-top-float",j:e.qa},{priority:27,i:"data-dcm-user-defined",j:e.ta}]);2===c.b?f=O(f,"https:","bid.g.doubleclick.net","/xbbe/bid/xpub?"):(v=hc(c.a),f=3===c.b?O(f,v,"ad.doubleclick.net","/dv3/ad?"):O(f,v,"ad.doubleclick.net","/ddm/"+("script"==c.h?"adj":"adi")+"/"+c.o+";"));v=f;if(1===c.b&&!mc.test(v))throw Error("Invalid tag URL: "+v);f=a.document;if("script"==c.h)if(d=lb(c.l,4),v='<script src="'+v+'">\x3c/script>',d===Sb.s||d===Tb.s||g){var A=yc(f);b.appendChild(A);d=
A;g="<body>"+v+"</body>";if(Pb)d.srcdoc=g;else if(d=d.contentWindow)d=d.document,d.open("text/html","replace"),d.write(g),d.close()}else 1<b.children.length||1==b.children.length&&"b"==b.children[0].tagName.toLowerCase()||(b.style.display="none"),f.write(v);else A=yc(f),A.src=v,b.appendChild(A),d&&d.registerAdBlock(v,11,A);A&&Xa(a,A);b.style.textDecoration="none";"iP"===(a.navigator&&a.navigator.platform||"").substr(0,2)&&"Google Mobile Ads"===c.v&&(b.style.display="block")}
function yc(a){a=a.createElement("iframe");var b=a.style;b.width="100%";b.height="100%";b.border="0";b.margin="0";b.padding="0";a.marginWidth="0";a.marginHeight="0";a.scrolling="no";a.frameBorder="0";a.title="advertisement";return a}
function wc(a,b){if(a.ReportingObserver){var c=function(g){g=ba(g);for(var f=g.next();!f.done;f=g.next()){var e=f.value;f=e.type;(e=e.body)&&"intervention"===f&&(f={t:f,rid:e.id,tm:b.b,inv:1===b.b?b.o:b.f,ln:e.lineNumber,cn:e.columnNumber,src:e.sourceFile,msg:e.message},sc(f,b),hb(nb,"dcmror",f,.1))}},d=new a.ReportingObserver(c,{buffered:!0});d.observe();a.addEventListener("unload",function(){c(d.takeRecords());d.disconnect()})}};var Z=window;Z.dcmads=Z.dcmads||{};Z.dcmads.version=Z.dcmads.version||{};var zc=new function(){this.f=this.o=null;this.B=Za();this.D=!1;this.v=this.u=this.A=this.m=this.gdprApplies=null};(function(a){return function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];return qb(function(){return oc.apply(void 0,c)},a)}})(qa(rc,Z,zc))(Z,zc);}).call(this);
