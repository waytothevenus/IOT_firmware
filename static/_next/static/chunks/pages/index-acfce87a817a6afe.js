(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(741)}])},9452:function(e,n,t){"use strict";var r=t(7997),c=t(2962),a=t(9008),i=t(1163),o=t(5125);n.Z=function(e){var n=(0,i.useRouter)();return(0,r.BX)(r.HY,{children:[(0,r.BX)(a.default,{children:[(0,r.tZ)("meta",{charSet:"UTF-8"},"charset"),(0,r.tZ)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,r.tZ)("link",{rel:"apple-touch-icon",href:"".concat(n.basePath,"/apple-touch-icon.png")},"apple"),(0,r.tZ)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n.basePath,"/favicon-32x32.png")},"icon32"),(0,r.tZ)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n.basePath,"/favicon-16x16.png")},"icon16"),(0,r.tZ)("link",{rel:"icon",href:"".concat(n.basePath,"/favicon.ico")},"favicon")]}),(0,r.tZ)(c.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o.Z.locale,site_name:o.Z.site_name}})]})}},5542:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(7997),c=t(1664),a=t(1163),i=t(6e3);function o(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(){var e=o([""]);return u=function(){return e},e}function s(){var e=o([""]);return s=function(){return e},e}var l=i.Z.div(u()),f=i.Z.div(s()),p=t(5125),v=function(e){var n=(0,a.useRouter)().pathname;return(0,r.BX)(l,{className:"p-2 border-2 border-black",children:[e.meta,(0,r.BX)("div",{className:"max-w-screen-sm w-full mx-auto relative",children:[(0,r.tZ)("div",{children:"/"!==n&&(0,r.tZ)("div",{className:"font-extrabold text-xl text-gray-900",children:(0,r.tZ)(c.default,{href:"/",children:(0,r.tZ)("a",{children:p.Z.title})})})}),(0,r.tZ)(f,{children:e.children})]})]})}},741:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return g}});var r=t(4051),c=t.n(r),a=t(7997),i=t(1720),o=t(9452),u=t(5542),s=t(5125);var l=function(e,n,t){return new Promise((function(r,c){return e().then(r).catch((function(a){return t>0?(i=n,new Promise((function(e){return setTimeout(e,i)}))).then(l.bind(null,e,n,t-1)).then(r).catch((function(e){var n,t,r="Operation failed";n=e,(null!=(t=Error)&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](n):n instanceof t)&&(r=e.message),c(r)})):c(a);var i}))}))};function f(e,n,t,r,c,a,i){try{var o=e[a](i),u=o.value}catch(s){return void t(s)}o.done?n(u):Promise.resolve(u).then(r,c)}var p=function(){var e,n=(e=c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,e.next=5,null===(t=window.pywebview)||void 0===t||null===(r=t.api)||void 0===r?void 0:r.log(n);case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Logging error ".concat(e.t0)),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})),function(){var n=this,t=arguments;return new Promise((function(r,c){var a=e.apply(n,t);function i(e){f(a,r,c,i,o,"next",e)}function o(e){f(a,r,c,i,o,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}(),v=p;function d(e,n,t,r,c,a,i){try{var o=e[a](i),u=o.value}catch(s){return void t(s)}o.done?n(u):Promise.resolve(u).then(r,c)}function h(e){return function(){var n=this,t=arguments;return new Promise((function(r,c){var a=e.apply(n,t);function i(e){d(a,r,c,i,o,"next",e)}function o(e){d(a,r,c,i,o,"throw",e)}i(void 0)}))}}function m(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}var w=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return l(h(c().mark((function t(){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v("PyCall ".concat(e));case 3:return t.next=5,window.pywebview.api[e](n);case 5:return r=t.sent,t.abrupt("return",r);case 9:throw t.prev=9,t.t0=t.catch(0),a="PyCall ".concat(e," failed: ").concat(t.t0),m(t.t0,Error)&&(a=t.t0.message),new Error(a);case 14:case"end":return t.stop()}}),t,null,[[0,9]])}))),s.Z.RETRY_DELAY,s.Z.MAX_RETRIES).then(function(){var e=h(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.parse(n),e.next=4,v("PyCall returned object ".concat(t.message));case 4:return e.abrupt("return",t.message);case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,v("PyCall returned ".concat(n));case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()).catch(function(){var n=h(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:throw r="PyCall ".concat(e," failed: ").concat(t),m(t,Error)&&(r=t.message),new Error(r);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())};function Z(e,n,t,r,c,a,i){try{var o=e[a](i),u=o.value}catch(s){return void t(s)}o.done?n(u):Promise.resolve(u).then(r,c)}var y=function(){return w("getHardwareId").catch((function(){return"XXXXXXX"}))},b=function(){var e,n=(e=c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("getIpAddress").catch((function(){return"XXXXXXX"}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,c){var a=e.apply(n,t);function i(e){Z(a,r,c,i,o,"next",e)}function o(e){Z(a,r,c,i,o,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();function x(e,n,t,r,c,a,i){try{var o=e[a](i),u=o.value}catch(s){return void t(s)}o.done?n(u):Promise.resolve(u).then(r,c)}var g=function(){var e=(0,i.useState)(""),n=e[0],t=e[1],r=(0,i.useState)(""),l=r[0],f=r[1],p=function(){var e,r=(e=c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t("asd"),e.t0=f,e.next=4,y();case 4:return e.t1=e.sent,(0,e.t0)(e.t1),e.next=8,v("fetched ".concat(n," ").concat(l));case 8:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,c){var a=e.apply(n,t);function i(e){x(a,r,c,i,o,"next",e)}function o(e){x(a,r,c,i,o,"throw",e)}i(void 0)}))});return function(){return r.apply(this,arguments)}}();return(0,i.useEffect)((function(){p()}),[]),(0,a.BX)(u.Z,{meta:(0,a.tZ)(o.Z,{title:"Smartcloud | ".concat(s.Z.title,": ").concat(s.Z.tagline),description:s.Z.description}),children:[(0,a.tZ)(o.Z,{title:"".concat(s.Z.title,": ").concat(s.Z.tagline),description:s.Z.description}),(0,a.BX)("div",{className:"flex flex-col content-center justify-center text-center",children:[(0,a.BX)("p",{children:["device: ",n," ",l]}),(0,a.tZ)("button",{onClick:b,children:"IP"}),(0,a.tZ)("button",{onClick:y,children:"HWID"})]})]})}},5125:function(e,n){"use strict";var t={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"SmartCloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};t.errorMessage='There was an error, please email <a href="mailto:'.concat(t.email,'">').concat(t.email,"</a>"),n.Z=t}},function(e){e.O(0,[370,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);