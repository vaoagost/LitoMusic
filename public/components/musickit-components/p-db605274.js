import{c as n,a as r}from"./p-112455b1.js";var t=n((function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default="undefined"!=typeof FastBoot?FastBoot.require("buffer").Buffer:"undefined"!=typeof process&&null!==process.versions&&null!==process.versions.node?Buffer:window.Buffer})),e=n((function(n,r){Object.defineProperty(r,"__esModule",{value:!0}),r.memoize=function(n){return function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];for(var e="",o=r.length;o--;){var u=r[o];e+=u===Object(u)?JSON.stringify(u):u,n._memoized||(n._memoized={})}return e in n._memoized?n._memoized[e]:n._memoized[e]=n.apply(void 0,r)}}})),o=n((function(n,o){var u=r&&r.__read||function(n,r){var t="function"==typeof Symbol&&n[Symbol.iterator];if(!t)return n;var e,o,u=t.call(n),i=[];try{for(;(void 0===r||r-- >0)&&!(e=u.next()).done;)i.push(e.value)}catch(f){o={error:f}}finally{try{e&&!e.done&&(t=u.return)&&t.call(u)}finally{if(o)throw o.error}}return i},i=r&&r.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(o,"__esModule",{value:!0});var f=i(t);function a(){return Math.random().toString(16).substring(2)}function c(n){var r=function(n){return null!=n};return 0===arguments.length&&"undefined"!=typeof process&&(n=process),r(n)&&r(n.versions)&&r(n.versions.node)||"undefined"!=typeof FastBoot}o.isObject=function(n){return!!n&&"object"==typeof n&&!Array.isArray(n)},o.generateUUID=function(){for(var n=a()+a();n.length<16;)n+=a();return n.slice(0,16)},o.isLibraryType=e.memoize((function(n){return/^[a|i|l|p]{1}\.[a-zA-Z0-9]+$/.test(n)})),o.isAdamId=e.memoize((function(n){return/^(a\.)?[a-zA-Z0-9]+$/.test(n)})),o.isNodeEnvironment=c,o.atob=e.memoize(c()?function(n){return f.default.from(n,"base64").toString("binary")}:function(n){return window.atob(n)}),o.btoa=e.memoize(c()?function(n){return f.default.from(n).toString("base64")}:function(n){return window.btoa(n)}),o.getArtworkFromURL=function(n){var r=n.split("/").pop(),t=u(!!r&&r.match(/\d+/g)||["100","100"],2),e=t[0],o=t[1];return{width:parseInt(e,10),height:parseInt(o,10),url:n.replace(e+"x"+o,"{w}x{h}")}},o.throttled=function(n,r){var t=0;return function(){var e=Date.now();if(!(e-t<n))return t=e,r.apply(this,Array.from(arguments))}},o.debounce=function(n,r,t){var e;return void 0===r&&(r=250),void 0===t&&(t={isImmediate:!1}),function(){for(var o=[],u=0;u<arguments.length;u++)o[u]=arguments[u];var i=this,f=function(){e=void 0,t.isImmediate||n.apply(i,o)},a=t.isImmediate&&void 0===e;void 0!==e&&clearTimeout(e),e=setTimeout(f,r),a&&n.apply(i,o)}}}));export{o as u}