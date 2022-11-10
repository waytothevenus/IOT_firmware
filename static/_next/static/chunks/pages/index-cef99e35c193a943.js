(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(1661)}])},9452:function(e,n,r){"use strict";var t=r(7997),a=r(2962),c=r(9008),i=r(1163),o=r(5125);n.Z=function(e){var n=(0,i.useRouter)();return(0,t.BX)(t.HY,{children:[(0,t.BX)(c.default,{children:[(0,t.tZ)("meta",{charSet:"UTF-8"},"charset"),(0,t.tZ)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,t.tZ)("link",{rel:"apple-touch-icon",href:"".concat(n.basePath,"/apple-touch-icon.png")},"apple"),(0,t.tZ)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(n.basePath,"/favicon-32x32.png")},"icon32"),(0,t.tZ)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(n.basePath,"/favicon-16x16.png")},"icon16"),(0,t.tZ)("link",{rel:"icon",href:"".concat(n.basePath,"/favicon.ico")},"favicon")]}),(0,t.tZ)(a.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:o.Z.locale,site_name:o.Z.site_name}})]})}},5542:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(7997),a=r(1664),c=r(1163),i=r(6e3);function o(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(){var e=o([""]);return u=function(){return e},e}function s(){var e=o([""]);return s=function(){return e},e}var l=i.Z.div(u()),f=i.Z.div(s()),d=r(5125),p=function(e){var n=(0,c.useRouter)().pathname;return(0,t.BX)(l,{className:"p-2 border-2 border-black",children:[e.meta,(0,t.BX)("div",{className:"max-w-screen-sm w-full mx-auto relative",children:[(0,t.tZ)("div",{children:"/"!==n&&(0,t.tZ)("div",{className:"font-extrabold text-xl text-gray-900",children:(0,t.tZ)(a.default,{href:"/",children:(0,t.tZ)("a",{children:d.Z.title})})})}),(0,t.tZ)(f,{children:e.children})]})]})}},1661:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return _}});var t=r(7997),a=r(4051),c=r.n(a),i=r(8100),o=r(5125);var u=function(e,n,r){return new Promise((function(t,a){return e().then(t).catch((function(c){return r>0?(i=n,new Promise((function(e){return setTimeout(e,i)}))).then(u.bind(null,e,n,r-1)).then(t).catch((function(e){var n,r,t="Operation failed";n=e,(null!=(r=Error)&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r)&&(t=e.message),a(t)})):a(c);var i}))}))};function s(e,n,r,t,a,c,i){try{var o=e[c](i),u=o.value}catch(s){return void r(s)}o.done?n(u):Promise.resolve(u).then(t,a)}var l=function(){var e,n=(e=c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,e.next=5,null===(r=window.pywebview)||void 0===r||null===(t=r.api)||void 0===t?void 0:t.log(n);case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(1),console.error("Logging error ".concat(e.t0)),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})),function(){var n=this,r=arguments;return new Promise((function(t,a){var c=e.apply(n,r);function i(e){s(c,t,a,i,o,"next",e)}function o(e){s(c,t,a,i,o,"throw",e)}i(void 0)}))});return function(e){return n.apply(this,arguments)}}(),f=l;function d(e,n,r,t,a,c,i){try{var o=e[c](i),u=o.value}catch(s){return void r(s)}o.done?n(u):Promise.resolve(u).then(t,a)}function p(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var c=e.apply(n,r);function i(e){d(c,t,a,i,o,"next",e)}function o(e){d(c,t,a,i,o,"throw",e)}i(void 0)}))}}function v(e,n){return null!=n&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n}var h=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return u(p(c().mark((function r(){var t,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f("PyCall ".concat(e));case 3:return r.next=5,window.pywebview.api[e](n);case 5:return t=r.sent,r.abrupt("return",t);case 9:throw r.prev=9,r.t0=r.catch(0),a="PyCall ".concat(e," failed: ").concat(r.t0),v(r.t0,Error)&&(a=r.t0.message),new Error(a);case 14:case"end":return r.stop()}}),r,null,[[0,9]])}))),o.Z.RETRY_DELAY,o.Z.MAX_RETRIES).then(function(){var e=p(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=JSON.parse(n),e.next=4,f("PyCall returned object ".concat(r.message));case 4:return e.abrupt("return",r.message);case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,f("PyCall returned ".concat(n));case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}()).catch(function(){var n=p(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:throw t="PyCall ".concat(e," failed: ").concat(r),v(r,Error)&&(t=r.message),new Error(t);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())};function m(e,n,r,t,a,c,i){try{var o=e[c](i),u=o.value}catch(s){return void r(s)}o.done?n(u):Promise.resolve(u).then(t,a)}function w(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var c=e.apply(n,r);function i(e){m(c,t,a,i,o,"next",e)}function o(e){m(c,t,a,i,o,"throw",e)}i(void 0)}))}}var Z=function(){var e=w(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h("getHardwareId").catch((function(){return"XXXXXXX"})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=w(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h("getIpAddress").catch((function(){return"XXXXXXX"}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function b(e,n,r,t,a,c,i){try{var o=e[c](i),u=o.value}catch(s){return void r(s)}o.done?n(u):Promise.resolve(u).then(t,a)}var x=function(){var e,n=(0,i.ZP)("/ip-address",(e=c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y(),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})),function(){var n=this,r=arguments;return new Promise((function(t,a){var c=e.apply(n,r);function i(e){b(c,t,a,i,o,"next",e)}function o(e){b(c,t,a,i,o,"throw",e)}i(void 0)}))})),r=n.data,a=n.error;return(0,t.tZ)("p",{children:a?"Error":r||"loading"})},g=r(9452),P=r(9770),X=function(){var e=(0,i.ZP)("/ip-address",y),n=e.data,r=e.error;return{device:{ip:n,hwId:(0,P.Z)("/hardware-id",Z).data},isLoading:!r&&!n,isError:r}},E=r(5542),_=function(){var e=X().device;return(0,t.BX)(E.Z,{meta:(0,t.tZ)(g.Z,{title:"Smartcloud | ".concat(o.Z.title,": ").concat(o.Z.tagline),description:o.Z.description}),children:[(0,t.tZ)(g.Z,{title:"".concat(o.Z.title,": ").concat(o.Z.tagline),description:o.Z.description}),(0,t.BX)("div",{className:"flex flex-col content-center justify-center text-center",children:[(0,t.BX)("p",{children:["device: ",e.ip," hw ",e.hwId]}),(0,t.tZ)("button",{onClick:y,children:"Reload"}),(0,t.tZ)(x,{})]})]})}},5125:function(e,n){"use strict";var r={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"SmartCloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};r.errorMessage='There was an error, please email <a href="mailto:'.concat(r.email,'">').concat(r.email,"</a>"),n.Z=r}},function(e){e.O(0,[370,770,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);