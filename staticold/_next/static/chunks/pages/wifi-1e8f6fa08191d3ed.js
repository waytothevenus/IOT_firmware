(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{1295:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wifi",function(){return t(1745)}])},9452:function(n,e,t){"use strict";var r=t(5893),c=t(2962),a=t(9008),i=t(1163),o=t(5125);e.Z=function(n){var e=(0,i.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"".concat(e.basePath,"/apple-touch-icon.png")},"apple"),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(e.basePath,"/favicon-32x32.png")},"icon32"),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(e.basePath,"/favicon-16x16.png")},"icon16"),(0,r.jsx)("link",{rel:"icon",href:"".concat(e.basePath,"/favicon.ico")},"favicon")]}),(0,r.jsx)(c.PB,{title:n.title,description:n.description,canonical:n.canonical,openGraph:{title:n.title,description:n.description,url:n.canonical,locale:o.Z.locale,site_name:o.Z.site_name}})]})}},5542:function(n,e,t){"use strict";t.d(e,{Z:function(){return v}});var r=t(5893),c=t(1664),a=t(1163),i=t(1884);function o(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function u(){var n=o([""]);return u=function(){return n},n}function s(){var n=o([""]);return s=function(){return n},n}var l=i.Z.div(u()),f=i.Z.div(s()),p=t(5125),v=function(n){var e=(0,a.useRouter)().pathname;return(0,r.jsxs)(l,{className:"p-2 border-2 border-black",children:[n.meta,(0,r.jsxs)("div",{className:"max-w-screen-sm w-full mx-auto relative",children:[(0,r.jsx)("div",{children:"/"!==e&&(0,r.jsx)("div",{className:"font-extrabold text-xl text-gray-900",children:(0,r.jsx)(c.default,{href:"/",children:(0,r.jsx)("a",{children:p.Z.title})})})}),(0,r.jsx)(f,{children:n.children})]})]})}},8851:function(n,e,t){"use strict";t.d(e,{Od:function(){return h},I_:function(){return d},Sj:function(){return m}});var r=t(4051),c=t.n(r),a=t(5125);var i=function(n,e,t){return new Promise((function(r,c){return n().then(r).catch((function(a){return t>0?(o=e,new Promise((function(n){return setTimeout(n,o)}))).then(i.bind(null,n,e,t-1)).then(r).catch((function(n){var e,t,r="Operation failed";e=n,(null!=(t=Error)&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t)&&(r=n.message),c(r)})):c(a);var o}))}))},o=t(2435);function u(n,e,t,r,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void t(s)}o.done?e(u):Promise.resolve(u).then(r,c)}function s(n){return function(){var e=this,t=arguments;return new Promise((function(r,c){var a=n.apply(e,t);function i(n){u(a,r,c,i,o,"next",n)}function o(n){u(a,r,c,i,o,"throw",n)}i(void 0)}))}}function l(n,e){return null!=e&&"undefined"!==typeof Symbol&&e[Symbol.hasInstance]?e[Symbol.hasInstance](n):n instanceof e}var f=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(s(c().mark((function t(){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Z)("PyCall ".concat(n));case 3:return t.next=5,window.pywebview.api[n](e);case 5:return r=t.sent,t.abrupt("return",r);case 9:throw t.prev=9,t.t0=t.catch(0),a="PyCall ".concat(n," failed: ").concat(t.t0),l(t.t0,Error)&&(a=t.t0.message),new Error(a);case 14:case"end":return t.stop()}}),t,null,[[0,9]])}))),a.Z.RETRY_DELAY,a.Z.MAX_RETRIES).then(function(){var n=s(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=JSON.parse(e),n.next=4,(0,o.Z)("PyCall returned object ".concat(t.message));case 4:return n.abrupt("return",t.message);case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,(0,o.Z)("PyCall returned ".concat(e));case 11:return n.abrupt("return",e);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()).catch(function(){var e=s(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:throw r="PyCall ".concat(n," failed: ").concat(t),l(t,Error)&&(r=t.message),new Error(r);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())};function p(n,e,t,r,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void t(s)}o.done?e(u):Promise.resolve(u).then(r,c)}function v(n){return function(){var e=this,t=arguments;return new Promise((function(r,c){var a=n.apply(e,t);function i(n){p(a,r,c,i,o,"next",n)}function o(n){p(a,r,c,i,o,"throw",n)}i(void 0)}))}}var h=function(){return f("getHardwareId").catch((function(){return""}))},d=function(){return f("getIpAddress").catch((function(){return""}))},m=(function(){var n=v(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f("getWifiInfo").catch((function(){return{}}));case 2:return e=n.sent,t=Math.round(Number.parseInt(e.quality,10)/70*100),n.abrupt("return",{ssid:e.ssid,quality:t});case 5:case"end":return n.stop()}}),n)})))}(),function(){var n=v(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f("getWifiNetworks").catch((function(){return[]}));case 2:return e=n.sent,t=e.split("ESSID:").filter((function(n,t){return t>0&&t<e.length})).map((function(n){return n.trim()})),n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}())},2435:function(n,e,t){"use strict";var r=t(4051),c=t.n(r);function a(n,e,t,r,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void t(s)}o.done?e(u):Promise.resolve(u).then(r,c)}var i=function(){var n,e=(n=c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.prev=1,n.next=5,null===(t=window.pywebview)||void 0===t||null===(r=t.api)||void 0===r?void 0:r.log(e);case 5:return n.abrupt("return",!0);case 8:return n.prev=8,n.t0=n.catch(1),console.error("Logging error ".concat(n.t0)),n.abrupt("return",!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})),function(){var e=this,t=arguments;return new Promise((function(r,c){var i=n.apply(e,t);function o(n){a(i,r,c,o,u,"next",n)}function u(n){a(i,r,c,o,u,"throw",n)}o(void 0)}))});return function(n){return e.apply(this,arguments)}}();e.Z=i},1745:function(n,e,t){"use strict";t.r(e);var r=t(4051),c=t.n(r),a=t(5893),i=t(7294),o=t(2918),u=t(9452),s=t(5542),l=t(8851),f=t(5125);function p(n,e,t,r,c,a,i){try{var o=n[a](i),u=o.value}catch(s){return void t(s)}o.done?e(u):Promise.resolve(u).then(r,c)}e.default=function(){var n=(0,i.useState)([]),e=n[0],t=n[1];return(0,i.useEffect)((function(){var n;(n=c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.Sj)();case 2:e=n.sent,t(e);case 4:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(r,c){var a=n.apply(e,t);function i(n){p(a,r,c,i,o,"next",n)}function o(n){p(a,r,c,i,o,"throw",n)}i(void 0)}))})()}),[]),(0,a.jsx)(s.Z,{meta:(0,a.jsx)(u.Z,{title:"Wifi | ".concat(f.Z.title,": ").concat(f.Z.tagline),description:f.Z.description}),children:(0,a.jsxs)("div",{className:"block text-center ",children:[(0,a.jsx)("h4",{children:"Wifi Setup"}),e&&!o.default&&(0,a.jsx)("select",{children:e.map((function(n,e){return(0,a.jsx)("option",{value:n,children:n},e)}))})]})})}},5125:function(n,e){"use strict";var t={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"SmartCloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};t.errorMessage='There was an error, please email <a href="mailto:'.concat(t.email,'">').concat(t.email,"</a>"),e.Z=t},2918:function(n,e,t){n.exports=t(9185)}},function(n){n.O(0,[525,774,888,179],(function(){return e=1295,n(n.s=e);var e}));var e=n.O();_N_E=e}]);