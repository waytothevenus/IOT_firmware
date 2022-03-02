"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[27],{9452:function(n,r,e){var t=e(5893),c=e(2962),a=e(9008),o=e(1163),i=e(5125);r.Z=function(n){var r=(0,o.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"".concat(r.basePath,"/apple-touch-icon.png")},"apple"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(r.basePath,"/favicon-32x32.png")},"icon32"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(r.basePath,"/favicon-16x16.png")},"icon16"),(0,t.jsx)("link",{rel:"icon",href:"".concat(r.basePath,"/favicon.ico")},"favicon")]}),(0,t.jsx)(c.PB,{title:n.title,description:n.description,canonical:n.canonical,openGraph:{title:n.title,description:n.description,url:n.canonical,locale:i.Z.locale,site_name:i.Z.site_name}})]})}},5542:function(n,r,e){e.d(r,{Z:function(){return l}});var t=e(5893),c=e(386);function a(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}function o(){var n=a([""]);return o=function(){return n},n}function i(){var n=a([""]);return i=function(){return n},n}var u=c.Z.div(o()),s=c.Z.div(i()),l=function(n){return(0,t.jsxs)(u,{className:"h-[320px] w-[480px] border-solid border-2 border-black p-2",children:[n.meta,(0,t.jsx)("div",{className:"w-full relative",children:(0,t.jsx)(s,{children:n.children})})]})}},8255:function(n,r,e){e.d(r,{Od:function(){return h},I_:function(){return d},wl:function(){return m},Sj:function(){return w},Cz:function(){return x}});var t=e(4051),c=e.n(t),a=e(5125);var o=function(n,r,e){return new Promise((function(t,c){return n().then(t).catch((function(a){return e>0?(i=r,new Promise((function(n){return setTimeout(n,i)}))).then(o.bind(null,n,r,e-1)).then(t).catch((function(n){var r,e,t="Operation failed";r=n,(null!=(e=Error)&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](r):r instanceof e)&&(t=n.message),c(t)})):c(a);var i}))}))},i=e(2435);function u(n,r,e,t,c,a,o){try{var i=n[a](o),u=i.value}catch(s){return void e(s)}i.done?r(u):Promise.resolve(u).then(t,c)}function s(n){return function(){var r=this,e=arguments;return new Promise((function(t,c){var a=n.apply(r,e);function o(n){u(a,t,c,o,i,"next",n)}function i(n){u(a,t,c,o,i,"throw",n)}o(void 0)}))}}function l(n,r){return null!=r&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r}var f=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(s(c().mark((function e(){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("a"),e.next=4,(0,i.Z)("PyCall ".concat(n));case 4:return console.log("b"),e.next=7,window.pywebview.api[n](r);case 7:return t=e.sent,e.abrupt("return",t);case 11:return e.prev=11,e.t0=e.catch(0),a="PyCall ".concat(n," failed: ").concat(e.t0),l(e.t0,Error)&&(a=e.t0.message),e.next=17,(0,i.Z)("Pycall Inner: ".concat(a));case 17:throw new Error(a);case 18:case"end":return e.stop()}}),e,null,[[0,11]])}))),!1===(null===r||void 0===r?void 0:r.retry)?1:a.Z.RETRY_DELAY,a.Z.MAX_RETRIES).then(function(){var n=s(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=JSON.parse(r),n.next=4,(0,i.Z)("PyCall returned object ".concat(e.message));case 4:return n.abrupt("return",e.message);case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,(0,i.Z)("PyCall returned ".concat(r));case 11:return n.abrupt("return",r);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}()).catch(function(){var r=s(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t="PyCall ".concat(n," failed: ").concat(e),l(e,Error)&&(t=e.message),r.next=4,(0,i.Z)("Pycall Outer: ".concat(t));case 4:throw new Error(t);case 5:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}())};function p(n,r,e,t,c,a,o){try{var i=n[a](o),u=i.value}catch(s){return void e(s)}i.done?r(u):Promise.resolve(u).then(t,c)}function v(n){return function(){var r=this,e=arguments;return new Promise((function(t,c){var a=n.apply(r,e);function o(n){p(a,t,c,o,i,"next",n)}function i(n){p(a,t,c,o,i,"throw",n)}o(void 0)}))}}var h=function(){return f("getHardwareId").catch((function(){return""}))},d=function(){return f("getIpAddress").catch((function(){return""}))},m=function(){var n=v(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f("getWifiInfo").catch((function(){return{ssid:"",quality:0}}));case 2:return r=n.sent,e=Math.round(Number.parseInt(r.quality,10)/70*100),n.abrupt("return",{ssid:r.ssid,quality:e});case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),w=function(){var n=v(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f("getWifiNetworks").catch((function(){return""}));case 2:return r=n.sent,e=r.split("ESSID:").map((function(n){return n.trim().replace(/^"|"$/g,"")})).filter((function(n,r,e){return e.indexOf(n)===r})).filter((function(n){return n})),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=v(c().mark((function n(r,e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f("setWifiNetwork",{ssid:r,password:e}).catch((function(){return[]}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}()},2435:function(n,r,e){var t=e(4051),c=e.n(t);function a(n,r,e,t,c,a,o){try{var i=n[a](o),u=i.value}catch(s){return void e(s)}i.done?r(u):Promise.resolve(u).then(t,c)}var o=function(){var n,r=(n=c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("[Pylog] ".concat(r)),n.prev=1,null===(e=window.pywebview)||void 0===e||null===(t=e.api)||void 0===t||t.log(r).then((function(n){return console.log("Log end: ".concat(n))})),n.abrupt("return",!0);case 7:return n.prev=7,n.t0=n.catch(1),n.abrupt("return",new Error("Logging Error: ".concat(r)));case 10:case"end":return n.stop()}}),n,null,[[1,7]])})),function(){var r=this,e=arguments;return new Promise((function(t,c){var o=n.apply(r,e);function i(n){a(o,t,c,i,u,"next",n)}function u(n){a(o,t,c,i,u,"throw",n)}i(void 0)}))});return function(n){return r.apply(this,arguments)}}();r.Z=o},5125:function(n,r){var e={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"Smartcloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};e.errorMessage='There was an error, please email <a href="mailto:'.concat(e.email,'">').concat(e.email,"</a>"),r.Z=e}}]);