!function(){try{window.didomiCountry="ES",window.didomiGeoRegulations=["gdpr"]}catch(o){console.error("Didomi - Invalid country")}}();!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="https://sdk.privacy-center.org/",o(o.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var r=n(2);window.Didomi||r(window)},function(e,t){e.exports=function e(t){var n,r,o=t.didomiOnLoad?"54107da99f32815551f74076e6e6a61678ef4609":"5d974e3afc6bfaf537055b01fef4161968b9cdb1",i=t.document.getElementsByTagName("head");0<i.length?(n=t.document.createElement("script"),r=t.didomiConfig&&t.didomiConfig.sdkPath?t.didomiConfig.sdkPath:"https://sdk.privacy-center.org/",n.type="text/javascript",n.async=!0,n.src=r+"sdk."+o+".js",n.charset="utf-8",i[0].appendChild(n)):setTimeout(e.bind(this,t),5)}}]);