!function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=0)}([function(t,n){!function(){function t(t,n){n=n||function(){};var e=s.document,o=e.body,r=t.cmp&&t.cmp.eu?1:0,i=t.cmp&&t.cmp.eu?t.cmp.consentString:"",a="";if(c.usPrivacy&&"${US_PRIVACY}"!==c.usPrivacy?a=c.usPrivacy:l&&(a=l),!e.getElementById("jpx_0_pd")){var d;d=e.getElementById("jpx_0x000000_caller_window");var u="https://pre.ads.justpremium.com/v/1.0/t/sync?";r&&i&&(u=u+"&consentString="+encodeURIComponent(i)),a&&(u=u+"&usPrivacy="+encodeURIComponent(a));var p=e.createElement("iframe");p.id="jpx_0_pd",p.height=0,p.width=0,p.border="0px",p.hspace="0",p.vspace="0px",p.frameBorder="0",p.style.visibility="hidden",p.style.overflow="hidden",p.style.left="-9999px",p.style.position="absolute",p.style.height="0",p.style.width="0",p.src=u,p.onload=function(t){n(t)},d?d.appendChild(p):o.appendChild(p)}}function n(){var t=s.jPAM=s.jPAM||window.jPAM||{};t.cmd=t.cmd||[],t.cmd.push(function(){try{var t=s.jPAM=s.jPAM||window.jPAM||{},n=t.getPlugin("adserver");n&&n.notifyAboutSyncFrame()}catch(t){throw t}}),t.processCmd&&t.processCmd()}function e(){return s&&s.document&&s.document.body&&s.document.body.appendChild}function o(t){t.ru=decodeURIComponent(t.ru),h()&&(t.ist=2);var n=(c.trackingUrl?c.trackingUrl+"?":"//tracking.justpremium.com/tracking.gif?")+m(t),o=window.document.createElement("img");o.style.position="fixed",o.style.left="-9999px",o.style.top="-9999px",o.style.width="1px",o.style.height="1px",o.src=n,e()?s.document.body.appendChild(o):s.addEventListener("load",function(){window.document.body.appendChild(o)})}Array.prototype.find||(Array.prototype.find=function(t){if(null==this)throw new TypeError("Array.prototype.find called on null or undefined");if("function"!=typeof t)throw new TypeError("predicate must be a function");for(var n,e=Object(this),o=e.length>>>0,r=arguments[1],i=0;i<o;i++)if(n=e[i],t.call(r,n,i,e))return n});var r="https://es.ads.justpremium.com/adserve/client/?zone=28460&debug=1",i=[],c={"adEndpoint":"https://es.ads.justpremium.com/adserve/client/?zone=28460&debug=1","rid":"r-a5d3ef67-6244-43ea-b14f-271eadde3732-100799-881729155","sid":"r-e2b7bb8d-ebf6-40ab-acb3-7aed68c2e4e5-125006-924377418","uid":"r-a38d87f7-75c4-4c78-aca5-2e42a47367ac-49282-634015285","version":"v2.50.375","siteWidth":null,"appName":"2.3.0","vpc":"eu-central-1","zoneId":28460,"subDomain":"","trackingUrl":"//tracking.justpremium.com/tracking.gif","jpxLib":"//cdn.justpremium.com/js/v2.50.375/jpx.js","jpxLibPolyfill":"//cdn.justpremium.com/js/v2.50.375/jpxp.js","isEu":true,"usPrivacy":"","ias":"{\"ias\":{\"riskIP\":\"\",\"riskHref\":[],\"content\":[\"IAB_FAMILY\"]}}","toLoad":null},a=null,d=!1,s=window,u=[10386,25709,25710,28835,28836,28837,28838,33306,33310,33707,39822,39823,39824,39827,40642,40644,40645,43943,34698,34699,34700,34701,34704,34705,34706,34707],p=["adnxs.net"];try{window.top.head}catch(t){d=!0}d||(s=window.top);var l="";try{"function"==typeof window.top.__uspapi&&__uspapi("getUSPData",1,function(t,n){n&&(l=t.uspString)})}catch(t){}var f=function(){return{rid:c.rid,sid:c.sid,uid:c.uid,vr:c.version,ru:v(),tt:(new Date).getTime(),siw:0,sh:s.screen.height,sw:s.screen.width,wh:s.innerHeight,ww:s.innerWidth,an:c.appName,vn:c.vpc,sd:"",_c:Math.floor(Math.random()*Math.pow(2,32)+1).toString(),et:"",aid:"",said:"",ei:"",fc:"",sp:"",at:"adserver",cid:0,ist:"",mg:"",dl:"",dlt:"",ev:"",vt:"",zid:c.zoneId,dr:0,di:"",pr:"",cw:"",ch:"",nt:"",st:"",jp:c.ias||{},ty:"ta"}};try{try{c.appName&&"rls1"===c.appName&&console.info("%c JPX Release server","background: #555; color: #bada55; font-size: 14px;")}catch(t){}var m=function(t){var n="";for(var e in t)""!=n&&(n+="&"),n+=e+"="+encodeURIComponent(t[e]);return n},y=function(t){t=t.split("+").join(" ");for(var n,e={},o=/[?&]?([^=]+)=([^&]*)/g;n=o.exec(t);)e[decodeURIComponent(n[1])]=decodeURIComponent(n[2]);return e},h=function(){var t=y(s.document.location.search)||{};return!!t.hasOwnProperty("google_preview")&&(t.google_preview.length>10&&(!!t.hasOwnProperty("creativeId")&&!!t.hasOwnProperty("lineItemId")))},v=function(){return encodeURIComponent(s.document.location.protocol+"//"+s.document.location.host.replace(":8082","")+s.document.location.pathname+(void 0!==s.document.location.search?s.document.location.search:""))},w=f();if(window.jp_conf_debug=w,d){var g=f();return g.ty="er",g.mg=217,g.st="Blocked cross-origin frame",void o(g)}var P=function(t,n,e){e=e||!1,n=n||function(){};var o=document.createElement("script");e&&(o.async=!0),"//"==t.substring(0,2)&&(t=s.document.location.protocol+t),o.src=t,o.onload=function(t){n(t)},(document.getElementsByTagName("head")[0]||document.documentElement).appendChild(o)},_=function(){return w.cs||""},x=function(){var t="";return c.usPrivacy&&"${US_PRIVACY}"!==c.usPrivacy?t="&us_privacy="+encodeURIComponent(c.usPrivacy):l&&(t="&us_privacy="+encodeURIComponent(l)),"&ru="+encodeURIComponent(w.ru)+"&sw="+w.sw+"&sh="+w.sh+"&ww="+w.ww+"&wh="+w.wh+"&ui="+c.uid+"&tt="+(new Date).getTime()+"&rid="+c.rid+(h()?"&test=1":"")+(c.impTag?"&impTag="+encodeURIComponent(c.impTag):"")+"&eu="+(c.isEu?"1":"0")+"&cs="+_()+t},b=function(t){t=t||function(){};var n=r+=function(){return x()}(),e=new XMLHttpRequest;e.open("GET",n),e.withCredentials=!0,e.onload=function(){200==e.status?t&&t(e.responseText):console.error(e.statusText)},e.onerror=function(t){console.error("Ads fetching error"),console.error(t);var n=f();n.ty="er",n.mg=216,n.st=t.message,o(n)},e.send()},A=function(t){try{t=t||function(){};var Jpx=a&&a.contentWindow&&a.contentWindow.Jpx||window.Jpx;window.jPAM=s.jPAM=Jpx.JAM.instance({di:{window:s},plugins:["adserver"]}),t()}catch(t){var n=f();n.ty="er",n.mg=212,n.st=t.message,o(n)}},C=function(t,n){n=n||function(){};var e=s.jPAM=s.jPAM||window.jPAM||{};e.cmd=e.cmd||[],e.cmd.push(function(){try{var n=s.jPAM=s.jPAM||window.jPAM||{},e=JSON.parse(t);n.getPlugin("adserver").loadTag(e)}catch(t){throw t}}),e.processCmd&&e.processCmd()},I=function(){var o={cmp:{eu:c.isEu,consentString:_()}},r=c.zoneId,i=u.indexOf(parseInt(r))>-1,a=p.find(function(t){return s.document.location.hostname.indexOf(t)>-1});i||a?n():e()?t(o,n):s.addEventListener("load",function(){t(o,n)}),b(function(t){C(t)})};if(function(t){t=t||function(){};var n=c.jpxLib;(function(){var t="undefined"!=typeof Promise&&-1!==Promise.toString().indexOf("[native code]"),n="undefined"!=typeof WeakMap&&-1!==WeakMap.toString().indexOf("[native code]");return!(Array.prototype.find&&Array.prototype.sort&&Array.prototype.map&&Array.prototype.filter&&Array.prototype.keys&&t&&n)})()&&(n=c.jpxLibPolyfill),n&&i.unshift(n);var o=function(){var t=a.contentWindow,n=a.contentDocument||t&&t.document,e="";for(t.$cJPX=A;i.length>0;)e+='<script src="'+i.shift()+'"><\/script>';e+="<script>window.$cJPX();<\/script>",n.open(),n.write('<html><head><style type="text/css">html,body{padding:0;margin:0;background-color:transparent;overflow:hidden;}</style></head><body>'+e+"</body></html>"),n.close()},r=function(){t&&t()},d=function(){i.length>0?P(i.shift(),d):r()};!function(){return/\{\s+\[native code\]/.test(Function.prototype.toString.call(Function.bind))}()?function(){a=document.createElement("iframe"),a.setAttribute("frameborder",0),a.setAttribute("style","width:0; height:0; position: fixed; left:-9999px; top: -9999px;"),a.setAttribute("id","jpx-isolated-scope"),e()?(s.document.body.appendChild(a),o()):s.addEventListener("load",function(){window.document.body.appendChild(a),o()})}():d()}(function(){A()}),c.isEu){var j=!1,M=setInterval(function(){"function"==typeof s.__tcfapi?(clearInterval(M),s.__tcfapi("getTCData",2,function(t,n){n&&(w.cs=t.tcString||""),j||(j=!0,I())})):"function"==typeof s.__cmp&&(clearInterval(M),s.__cmp("getConsentData",null,function(){var t=arguments[0]||{};t.consentData=t.consentData||"",w.cs=t.consentData,j||(j=!0,I())}))},100);setTimeout(function(){j||(clearInterval(M),j=!0,I())},2e3)}else I();o(w)}catch(t){var E=f();E.ty="er",E.mg=208,E.st=t.message,o(E)}}()}]);