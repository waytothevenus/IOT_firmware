(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{5058:function(n,r,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return e(8520)}])},9452:function(n,r,e){"use strict";var t=e(5893),c=e(2962),a=e(9008),i=e(1163),o=e(5125);r.Z=function(n){var r=(0,i.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"".concat(r.basePath,"/apple-touch-icon.png")},"apple"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(r.basePath,"/favicon-32x32.png")},"icon32"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(r.basePath,"/favicon-16x16.png")},"icon16"),(0,t.jsx)("link",{rel:"icon",href:"".concat(r.basePath,"/favicon.ico")},"favicon")]}),(0,t.jsx)(c.PB,{title:n.title,description:n.description,canonical:n.canonical,openGraph:{title:n.title,description:n.description,url:n.canonical,locale:o.Z.locale,site_name:o.Z.site_name}})]})}},5542:function(n,r,e){"use strict";e.d(r,{Z:function(){return f}});var t=e(5893),c=e(386);function a(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}function i(){var n=a([""]);return i=function(){return n},n}function o(){var n=a([""]);return o=function(){return n},n}var u=c.Z.div(i()),s=c.Z.div(o()),f=function(n){return(0,t.jsxs)(u,{className:"h-[320px] w-[480px] border-solid border-2 border-black p-2",children:[n.meta,(0,t.jsx)("div",{className:"w-full relative",children:(0,t.jsx)(s,{children:n.children})})]})}},8851:function(n,r,e){"use strict";e.d(r,{Od:function(){return h},I_:function(){return d},wl:function(){return w},Sj:function(){return m},Cz:function(){return x}});var t=e(4051),c=e.n(t),a=e(5125);var i=function(n,r,e){return new Promise((function(t,c){return n().then(t).catch((function(a){return e>0?(o=r,new Promise((function(n){return setTimeout(n,o)}))).then(i.bind(null,n,r,e-1)).then(t).catch((function(n){var r,e,t="Operation failed";r=n,(null!=(e=Error)&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](r):r instanceof e)&&(t=n.message),c(t)})):c(a);var o}))}))},o=e(2435);function u(n,r,e,t,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,c)}function s(n){return function(){var r=this,e=arguments;return new Promise((function(t,c){var a=n.apply(r,e);function i(n){u(a,t,c,i,o,"next",n)}function o(n){u(a,t,c,i,o,"throw",n)}i(void 0)}))}}function f(n,r){return null!=r&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r}var l=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(s(c().mark((function e(){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Z)("PyCall ".concat(n));case 3:return e.next=5,window.pywebview.api[n](r);case 5:return t=e.sent,e.abrupt("return",t);case 9:throw e.prev=9,e.t0=e.catch(0),a="PyCall ".concat(n," failed: ").concat(e.t0),f(e.t0,Error)&&(a=e.t0.message),new Error(a);case 14:case"end":return e.stop()}}),e,null,[[0,9]])}))),!1===(null===r||void 0===r?void 0:r.retry)?1:a.Z.RETRY_DELAY,a.Z.MAX_RETRIES).then(function(){var n=s(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=JSON.parse(r),n.next=4,(0,o.Z)("PyCall returned object ".concat(e.message));case 4:return n.abrupt("return",e.message);case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,(0,o.Z)("PyCall returned ".concat(r));case 11:return n.abrupt("return",r);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}()).catch(function(){var r=s(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:throw t="PyCall ".concat(n," failed: ").concat(e),f(e,Error)&&(t=e.message),new Error(t);case 3:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}())};function p(n,r,e,t,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,c)}function v(n){return function(){var r=this,e=arguments;return new Promise((function(t,c){var a=n.apply(r,e);function i(n){p(a,t,c,i,o,"next",n)}function o(n){p(a,t,c,i,o,"throw",n)}i(void 0)}))}}var h=function(){return l("getHardwareId").catch((function(){return""}))},d=function(){return l("getIpAddress").catch((function(){return""}))},w=function(){var n=v(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("getWifiInfo").catch((function(){return{ssid:"",quality:0}}));case 2:return r=n.sent,e=Math.round(Number.parseInt(r.quality,10)/70*100),n.abrupt("return",{ssid:r.ssid,quality:e});case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),m=function(){var n=v(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("getWifiNetworks").catch((function(){return""}));case 2:return r=n.sent,e=r.split("ESSID:").map((function(n){return n.trim().replace(/^"|"$/g,"")})).filter((function(n,r,e){return e.indexOf(n)===r})).filter((function(n){return n})),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=v(c().mark((function n(r,e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("setWifiNetwork",{ssid:r,password:e}).catch((function(){return[]}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}()},2435:function(n,r,e){"use strict";var t=e(4051),c=e.n(t);function a(n,r,e,t,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,c)}var i=function(){var n,r=(n=c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(r),n.prev=1,n.next=5,null===(e=window.pywebview)||void 0===e||null===(t=e.api)||void 0===t?void 0:t.log(r);case 5:return n.abrupt("return",!0);case 8:return n.prev=8,n.t0=n.catch(1),console.error("Logging error ".concat(n.t0)),n.abrupt("return",!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})),function(){var r=this,e=arguments;return new Promise((function(t,c){var i=n.apply(r,e);function o(n){a(i,t,c,o,u,"next",n)}function u(n){a(i,t,c,o,u,"throw",n)}o(void 0)}))});return function(n){return r.apply(this,arguments)}}();r.Z=i},8520:function(n,r,e){"use strict";e.r(r);var t=e(4051),c=e.n(t),a=e(5893),i=e(7294),o=e(9452),u=e(5542),s=e(8851),f=e(5125);function l(n,r,e,t,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,c)}r.default=function(){var n=(0,i.useState)(""),r=n[0],e=n[1],t=(0,i.useState)(""),p=t[0],v=t[1],h=function(){var n,r=(n=c().mark((function n(){var r,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Od)();case 2:return r=n.sent,n.next=5,(0,s.I_)();case 5:t=n.sent,e(t),v(r);case 8:case"end":return n.stop()}}),n)})),function(){var r=this,e=arguments;return new Promise((function(t,c){var a=n.apply(r,e);function i(n){l(a,t,c,i,o,"next",n)}function o(n){l(a,t,c,i,o,"throw",n)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,i.useEffect)((function(){h()}),[]),(0,a.jsxs)(u.Z,{meta:(0,a.jsx)(o.Z,{title:"Dashboard | ".concat(f.Z.title,": ").concat(f.Z.tagline),description:f.Z.description}),children:[(0,a.jsx)("h1",{children:"Dashboard"}),(0,a.jsx)("h3",{children:"Device Name"}),(0,a.jsxs)("h4",{children:["Device ",p]}),r&&(0,a.jsxs)("p",{children:["IP: ",r]}),(0,a.jsx)("button",{children:"Toggle On/Off"})]})}},5125:function(n,r){"use strict";var e={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"Smartcloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};e.errorMessage='There was an error, please email <a href="mailto:'.concat(e.email,'">').concat(e.email,"</a>"),r.Z=e}},function(n){n.O(0,[411,774,888,179],(function(){return r=5058,n(n.s=r);var r}));var r=n.O();_N_E=r}]);