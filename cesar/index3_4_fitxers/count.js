!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";n.r(e),n.d(e,"main",(function(){return d}));var r=function(){var t=document.querySelector('link[rel="canonical"]');return t?t.href:(console.warn("This page does not include a canonical link tag. Coral has inferred this story_url from the window object. Query params have been stripped, which may cause a single thread to be present across multiple pages."),(location.origin||"".concat(window.location.protocol,"//").concat(window.location.host))+window.location.pathname)};var o=function(t,e,n){var r=document.createElement("script");r.src="".concat(t,"?callback=").concat(e),Object.keys(n).sort().forEach((function(t){var e=n[t];void 0!==e&&(r.src+="&".concat(t,"=").concat(encodeURIComponent(e)))})),document.body.appendChild(r)};var a=function(t){var e,n,r=document.currentScript;if(!r&&t&&((r=document.getElementById(t))||(r=document.querySelector(".".concat(t)))),!r)throw new Error("Current script not found");return e=r.src,n=e.split("/"),"".concat(n[0],"//").concat(n[2])};function c(t){var e=t.html,n=t.count,r=t.id,o={coralCount:n.toString()},a=document.createElement("span");if(a.innerHTML=e,r){var c=function(t){var e,n="coral:"+function(t){return"v1:previousCount:".concat(t)}(t);try{var r=localStorage.getItem(n);if(!r)return null;e=parseInt(r,10)}catch(o){return localStorage.removeItem(n),null}return e}(r);if(null!==c&&c<n){var u=n-c;o.coralPreviousCount=c.toString(),o.coralNewCount=u.toString();var l=document.createElement("span");l.className="coral-new-count-divider",l.innerText=" / ",a.appendChild(l);var i=document.createElement("span");i.className="coral-new-count-number",i.innerText=u.toString(),a.appendChild(i);var d=document.createElement("span");d.className="coral-new-count-text",d.innerText=" New",a.appendChild(d)}}return function(t){t.innerHTML=a.innerHTML,t.dataset.coralCount=o.coralCount,o.coralNewCount&&o.coralPreviousCount&&(t.dataset.coralNewCount=o.coralNewCount,t.dataset.coralPreviousCount=o.coralPreviousCount)}}var u=function(t){window.CoralCount={setCount:function(t){var e=document.querySelectorAll("".concat(".coral-count","[data-coral-ref='").concat(t.ref,"']")),n=c(t);Array.prototype.forEach.call(e,(function(t){n(t)}))},getCount:t}};function l(t){return btoa("".concat(t.notext?"true":"false",";").concat(t.id||t.url))}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=a("coral-script"),n=r(),c={},u=document.querySelectorAll(".coral-count");Array.prototype.forEach.call(u,(function(e){var r=e.dataset.coralId,o="true"===e.dataset.coralNotext,a=e.dataset.coralUrl;a||r||(a=n,e.dataset.coralUrl=n);var u={id:r,url:a,notext:o},i=e.dataset.coralRef;if(i){if(!t.reset)return}else i=l(u),e.dataset.coralRef=i;i in c||(c[i]=u)})),Object.keys(c).forEach((function(n){var r=c[n],a=r.url,u={id:r.id,url:a,notext:r.notext?"true":"false",ref:n};t.reset&&(u.d=Date.now().toString()),o("".concat(e,"/api/story/count.js"),"CoralCount.setCount",u)}))}function d(){u(i),i()}(function(){return void 0!==window.CoralCount})()||d()}]);
//# sourceMappingURL=count.js.map