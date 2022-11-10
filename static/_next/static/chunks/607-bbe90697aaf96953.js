"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[607],{9452:function(n,r,e){var t=e(5893),c=e(2962),a=e(9008),i=e(1163),o=e(5125);r.Z=function(n){var r=(0,i.useRouter)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.jsx)("link",{rel:"apple-touch-icon",href:"".concat(r.basePath,"/apple-touch-icon.png")},"apple"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(r.basePath,"/favicon-32x32.png")},"icon32"),(0,t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(r.basePath,"/favicon-16x16.png")},"icon16"),(0,t.jsx)("link",{rel:"icon",href:"".concat(r.basePath,"/favicon.ico")},"favicon")]}),(0,t.jsx)(c.PB,{title:n.title,description:n.description,canonical:n.canonical,openGraph:{title:n.title,description:n.description,url:n.canonical,locale:o.Z.locale,site_name:o.Z.site_name}})]})}},5542:function(n,r,e){e.d(r,{Z:function(){return v}});var t=e(5893),c=e(1664),a=e(1163),i=e(1884);function o(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}function u(){var n=o([""]);return u=function(){return n},n}function s(){var n=o([""]);return s=function(){return n},n}var l=i.Z.div(u()),f=i.Z.div(s()),p=e(5125),v=function(n){var r=(0,a.useRouter)().pathname;return(0,t.jsxs)(l,{className:"p-2 border-2 border-black",children:[n.meta,(0,t.jsxs)("div",{className:"max-w-screen-sm w-full mx-auto relative",children:[(0,t.jsx)("div",{children:"/"!==r&&(0,t.jsx)("div",{className:"font-extrabold text-xl text-gray-900",children:(0,t.jsx)(c.default,{href:"/",children:(0,t.jsx)("a",{children:p.Z.title})})})}),(0,t.jsx)(f,{children:n.children})]})]})}},8851:function(n,r,e){e.d(r,{Od:function(){return m},I_:function(){return w},wl:function(){return x},Sj:function(){return y},dG:function(){return h},Ww:function(){return d},qZ:function(){return g},Cz:function(){return b}});var t=e(4051),c=e.n(t),a=e(5125);var i=function(n,r,e){return new Promise((function(t,c){return n().then(t).catch((function(a){return e>0?(o=r,new Promise((function(n){return setTimeout(n,o)}))).then(i.bind(null,n,r,e-1)).then(t).catch((function(n){var r,e,t="Operation failed";r=n,(null!=(e=Error)&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](r):r instanceof e)&&(t=n.message),c(t)})):c(a);var o}))}))},o=e(2435);function u(n,r,e,t,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,c)}function s(n){return function(){var r=this,e=arguments;return new Promise((function(t,c){var a=n.apply(r,e);function i(n){u(a,t,c,i,o,"next",n)}function o(n){u(a,t,c,i,o,"throw",n)}i(void 0)}))}}function l(n,r){return null!=r&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r}var f=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(s(c().mark((function e(){var t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Z)("PyCall ".concat(n));case 3:return e.next=5,window.pywebview.api[n](r);case 5:return t=e.sent,e.abrupt("return",t);case 9:throw e.prev=9,e.t0=e.catch(0),a="PyCall ".concat(n," failed: ").concat(e.t0),l(e.t0,Error)&&(a=e.t0.message),new Error(a);case 14:case"end":return e.stop()}}),e,null,[[0,9]])}))),!1===(null===r||void 0===r?void 0:r.retry)?1:a.Z.RETRY_DELAY,a.Z.MAX_RETRIES).then(function(){var n=s(c().mark((function n(r){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=JSON.parse(r),n.next=4,(0,o.Z)("PyCall returned object ".concat(e.message));case 4:return n.abrupt("return",e.message);case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,(0,o.Z)("PyCall returned ".concat(r));case 11:return n.abrupt("return",r);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}()).catch(function(){var r=s(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:throw t="PyCall ".concat(n," failed: ").concat(e),l(e,Error)&&(t=e.message),new Error(t);case 3:case"end":return r.stop()}}),r)})));return function(n){return r.apply(this,arguments)}}())};function p(n,r,e,t,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,c)}function v(n){return function(){var r=this,e=arguments;return new Promise((function(t,c){var a=n.apply(r,e);function i(n){p(a,t,c,i,o,"next",n)}function o(n){p(a,t,c,i,o,"throw",n)}i(void 0)}))}}var h=function(n){return f("get",{key:n}).catch((function(){return"Error"}))},d=function(n,r){return f("set",{key:n,data:r}).catch((function(){return"Error"}))},m=function(){return f("getHardwareId").catch((function(){return""}))},w=function(){return f("getIpAddress").catch((function(){return""}))},x=function(){var n=v(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f("getWifiInfo").catch((function(){return{ssid:"",quality:0}}));case 2:return r=n.sent,e=Math.round(Number.parseInt(r.quality,10)/70*100),n.abrupt("return",{ssid:r.ssid,quality:e});case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),y=function(){var n=v(c().mark((function n(){var r,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f("getWifiNetworks").catch((function(){return[]}));case 2:return r=n.sent,e=r.split("ESSID:").map((function(n){return n.trim().replace(/^"|"$/g,"")})).filter((function(n,r,e){return e.indexOf(n)===r})).filter((function(n,r,e){return n&&r>0&&r<e.length-1&&n.trim()})),n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),b=function(){var n=v(c().mark((function n(r,e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f("setWifiNetwork",{ssid:r,password:e}).catch((function(){return[]}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),g=function(){return f("removeAllStorage").catch((function(){return"Error"}))}},2435:function(n,r,e){var t=e(4051),c=e.n(t);function a(n,r,e,t,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void e(s)}o.done?r(u):Promise.resolve(u).then(t,c)}var i=function(){var n,r=(n=c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(r),n.prev=1,n.next=5,null===(e=window.pywebview)||void 0===e||null===(t=e.api)||void 0===t?void 0:t.log(r);case 5:return n.abrupt("return",!0);case 8:return n.prev=8,n.t0=n.catch(1),console.error("Logging error ".concat(n.t0)),n.abrupt("return",!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})),function(){var r=this,e=arguments;return new Promise((function(t,c){var i=n.apply(r,e);function o(n){a(i,t,c,o,u,"next",n)}function u(n){a(i,t,c,o,u,"throw",n)}o(void 0)}))});return function(n){return r.apply(this,arguments)}}();r.Z=i},5125:function(n,r){var e={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"SmartCloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};e.errorMessage='There was an error, please email <a href="mailto:'.concat(e.email,'">').concat(e.email,"</a>"),r.Z=e}}]);