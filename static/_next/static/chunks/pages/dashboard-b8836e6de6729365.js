(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6886:function(n,r,t){"use strict";t.d(r,{ZP:function(){return y}});var e=t(3366),i=t(7462),o=t(7294),a=t(6010),c=t(5408),s=t(9707),u=t(7192),l=t(7088),p=t(7623);var f=o.createContext(),d=t(3620);function m(n){return(0,d.Z)("MuiGrid",n)}const h=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var g=(0,t(6087).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((n=>`spacing-xs-${n}`)),...["column-reverse","column","row-reverse","row"].map((n=>`direction-xs-${n}`)),...["nowrap","wrap-reverse","wrap"].map((n=>`wrap-xs-${n}`)),...h.map((n=>`grid-xs-${n}`)),...h.map((n=>`grid-sm-${n}`)),...h.map((n=>`grid-md-${n}`)),...h.map((n=>`grid-lg-${n}`)),...h.map((n=>`grid-xl-${n}`))]),x=t(5893);const v=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function w(n){const r=parseFloat(n);return`${r}${String(n).replace(String(r),"")||"px"}`}function b(n,r,t={}){if(!r||!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t[`spacing-xs-${String(n)}`]||`spacing-xs-${String(n)}`];const{xs:e,sm:i,md:o,lg:a,xl:c}=n;return[Number(e)>0&&(t[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`),Number(i)>0&&(t[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(o)>0&&(t[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(t[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(c)>0&&(t[`spacing-xl-${String(c)}`]||`spacing-xl-${String(c)}`)]}const S=(0,l.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(n,r)=>{const{container:t,direction:e,item:i,lg:o,md:a,sm:c,spacing:s,wrap:u,xl:l,xs:p,zeroMinWidth:f}=n.ownerState;return[r.root,t&&r.container,i&&r.item,f&&r.zeroMinWidth,...b(s,t,r),"row"!==e&&r[`direction-xs-${String(e)}`],"wrap"!==u&&r[`wrap-xs-${String(u)}`],!1!==p&&r[`grid-xs-${String(p)}`],!1!==c&&r[`grid-sm-${String(c)}`],!1!==a&&r[`grid-md-${String(a)}`],!1!==o&&r[`grid-lg-${String(o)}`],!1!==l&&r[`grid-xl-${String(l)}`]]}})((({ownerState:n})=>(0,i.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"wrap"!==n.wrap&&{flexWrap:n.wrap})),(function({theme:n,ownerState:r}){const t=(0,c.P$)({values:r.direction,breakpoints:n.breakpoints.values});return(0,c.k9)({theme:n},t,(n=>{const r={flexDirection:n};return 0===n.indexOf("column")&&(r[`& > .${g.item}`]={maxWidth:"none"}),r}))}),(function({theme:n,ownerState:r}){const{container:t,rowSpacing:e}=r;let i={};if(t&&0!==e){const r=(0,c.P$)({values:e,breakpoints:n.breakpoints.values});i=(0,c.k9)({theme:n},r,(r=>{const t=n.spacing(r);return"0px"!==t?{marginTop:`-${w(t)}`,[`& > .${g.item}`]:{paddingTop:w(t)}}:{}}))}return i}),(function({theme:n,ownerState:r}){const{container:t,columnSpacing:e}=r;let i={};if(t&&0!==e){const r=(0,c.P$)({values:e,breakpoints:n.breakpoints.values});i=(0,c.k9)({theme:n},r,(r=>{const t=n.spacing(r);return"0px"!==t?{width:`calc(100% + ${w(t)})`,marginLeft:`-${w(t)}`,[`& > .${g.item}`]:{paddingLeft:w(t)}}:{}}))}return i}),(function({theme:n,ownerState:r}){let t;return n.breakpoints.keys.reduce(((e,o)=>{let a={};if(r[o]&&(t=r[o]),!t)return e;if(!0===t)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const s=(0,c.P$)({values:r.columns,breakpoints:n.breakpoints.values}),u="object"===typeof s?s[o]:s;if(void 0===u||null===u)return e;const l=Math.round(t/u*1e8)/1e6+"%";let p={};if(r.container&&r.item&&0!==r.columnSpacing){const t=n.spacing(r.columnSpacing);if("0px"!==t){const n=`calc(${l} + ${w(t)})`;p={flexBasis:n,maxWidth:n}}}a=(0,i.Z)({flexBasis:l,flexGrow:0,maxWidth:l},p)}return 0===n.breakpoints.values[o]?Object.assign(e,a):e[n.breakpoints.up(o)]=a,e}),{})}));var y=o.forwardRef((function(n,r){const t=(0,p.Z)({props:n,name:"MuiGrid"}),c=(0,s.Z)(t),{className:l,columns:d,columnSpacing:h,component:g="div",container:w=!1,direction:y="row",item:$=!1,lg:Z=!1,md:P=!1,rowSpacing:j,sm:k=!1,spacing:N=0,wrap:W="wrap",xl:_=!1,xs:E=!1,zeroMinWidth:M=!1}=c,z=(0,e.Z)(c,v),O=j||N,I=h||N,C=o.useContext(f),G=d||C||12,R=(0,i.Z)({},c,{columns:G,container:w,direction:y,item:$,lg:Z,md:P,sm:k,rowSpacing:O,columnSpacing:I,wrap:W,xl:_,xs:E,zeroMinWidth:M}),T=(n=>{const{classes:r,container:t,direction:e,item:i,lg:o,md:a,sm:c,spacing:s,wrap:l,xl:p,xs:f,zeroMinWidth:d}=n,h={root:["root",t&&"container",i&&"item",d&&"zeroMinWidth",...b(s,t),"row"!==e&&`direction-xs-${String(e)}`,"wrap"!==l&&`wrap-xs-${String(l)}`,!1!==f&&`grid-xs-${String(f)}`,!1!==c&&`grid-sm-${String(c)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==p&&`grid-xl-${String(p)}`]};return(0,u.Z)(h,m,r)})(R);return D=(0,x.jsx)(S,(0,i.Z)({ownerState:R,className:(0,a.Z)(T.root,l),as:g,ref:r},z)),12!==G?(0,x.jsx)(f.Provider,{value:G,children:D}):D;var D}))},9707:function(n,r,t){"use strict";t.d(r,{Z:function(){return s}});var e=t(7462),i=t(3366),o=t(9766),a=t(8528);const c=["sx"];function s(n){const{sx:r}=n,t=(0,i.Z)(n,c),{systemProps:s,otherProps:u}=(n=>{const r={systemProps:{},otherProps:{}};return Object.keys(n).forEach((t=>{a.Gc[t]?r.systemProps[t]=n[t]:r.otherProps[t]=n[t]})),r})(t);let l;return l=Array.isArray(r)?[s,...r]:"function"===typeof r?(...n)=>{const t=r(...n);return(0,o.P)(t)?(0,e.Z)({},s,t):s}:(0,e.Z)({},s,r),(0,e.Z)({},u,{sx:l})}},5058:function(n,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(8520)}])},9452:function(n,r,t){"use strict";var e=t(5893),i=t(2962),o=t(9008),a=t(1163),c=t(5125);r.Z=function(n){var r=(0,a.useRouter)();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(o.default,{children:[(0,e.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,e.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,e.jsx)("link",{rel:"apple-touch-icon",href:"".concat(r.basePath,"/apple-touch-icon.png")},"apple"),(0,e.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(r.basePath,"/favicon-32x32.png")},"icon32"),(0,e.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(r.basePath,"/favicon-16x16.png")},"icon16"),(0,e.jsx)("link",{rel:"icon",href:"".concat(r.basePath,"/favicon.ico")},"favicon")]}),(0,e.jsx)(i.PB,{title:n.title,description:n.description,canonical:n.canonical,openGraph:{title:n.title,description:n.description,url:n.canonical,locale:c.Z.locale,site_name:c.Z.site_name}})]})}},5542:function(n,r,t){"use strict";t.d(r,{Z:function(){return l}});var e=t(5893),i=t(386);function o(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}function a(){var n=o([""]);return a=function(){return n},n}function c(){var n=o([""]);return c=function(){return n},n}var s=i.Z.div(a()),u=i.Z.div(c()),l=function(n){return(0,e.jsxs)(s,{className:"h-[320px] w-[480px] border-solid border-2 border-black p-2",children:[n.meta,(0,e.jsx)("div",{className:"w-full relative",children:(0,e.jsx)(u,{children:n.children})})]})}},1303:function(n,r,t){"use strict";t.d(r,{Od:function(){return d},I_:function(){return m},wl:function(){return h},Sj:function(){return g},Cz:function(){return x}});var e=t(4051),i=t.n(e),o=t(2435);function a(n,r,t,e,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void t(u)}c.done?r(s):Promise.resolve(s).then(e,i)}function c(n){return function(){var r=this,t=arguments;return new Promise((function(e,i){var o=n.apply(r,t);function c(n){a(o,e,i,c,s,"next",n)}function s(n){a(o,e,i,c,s,"throw",n)}c(void 0)}))}}function s(n,r){return null!=r&&"undefined"!==typeof Symbol&&r[Symbol.hasInstance]?r[Symbol.hasInstance](n):n instanceof r}var u=function(){var n=c(i().mark((function n(r){var t,e,a=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:{},console.log("a"),n.next=4,(0,o.Z)("PyCall ".concat(r));case 4:return console.log("b"),n.next=7,window.pywebview.api[r](t).then(function(){var n=c(i().mark((function n(r){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=JSON.parse(String(r)),n.next=4,(0,o.Z)("PyCall returned object ".concat(t.message));case 4:return n.abrupt("return",t.message);case 7:return n.prev=7,n.t0=n.catch(0),n.next=11,(0,o.Z)("PyCall returned ".concat(r));case 11:return n.abrupt("return",r);case 12:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(r){return n.apply(this,arguments)}}()).catch(function(){var n=c(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="PyCall ".concat(r," failed: ").concat(t),s(t,Error)&&(e=t.message),n.next=4,(0,o.Z)("Pycall Error: ".concat(e));case 4:throw new Error(e);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}());case 7:return e=n.sent,n.abrupt("return",e);case 9:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=u;function p(n,r,t,e,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void t(u)}c.done?r(s):Promise.resolve(s).then(e,i)}function f(n){return function(){var r=this,t=arguments;return new Promise((function(e,i){var o=n.apply(r,t);function a(n){p(o,e,i,a,c,"next",n)}function c(n){p(o,e,i,a,c,"throw",n)}a(void 0)}))}}var d=function(){return l("getHardwareId").catch((function(){return""}))},m=function(){return l("getIpAddress").catch((function(){return""}))},h=function(){var n=f(i().mark((function n(){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("getWifiInfo").catch((function(){return{ssid:"",quality:0}}));case 2:return r=n.sent,t=Math.round(Number.parseInt(r.quality,10)/70*100),n.abrupt("return",{ssid:r.ssid,quality:t});case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=f(i().mark((function n(){var r,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("getWifiNetworks").catch((function(){return""}));case 2:return r=n.sent,t=r.split("ESSID:").map((function(n){return n.trim().replace(/^"|"$/g,"")})).filter((function(n,r,t){return t.indexOf(n)===r})).filter((function(n){return n})),n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),x=function(){var n=f(i().mark((function n(r,t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l("setWifiNetwork",{ssid:r,password:t}).catch((function(){return[]}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(r,t){return n.apply(this,arguments)}}()},2435:function(n,r,t){"use strict";var e=t(4051),i=t.n(e);function o(n,r,t,e,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void t(u)}c.done?r(s):Promise.resolve(s).then(e,i)}var a=function(){var n,r=(n=i().mark((function n(r){var t,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("[Pylog] ".concat(r)),n.prev=1,n.next=5,null===(t=window.pywebview)||void 0===t||null===(e=t.api)||void 0===e?void 0:e.log(r).then((function(n){return console.log("Log end: ".concat(n))}));case 5:return n.abrupt("return",!0);case 8:return n.prev=8,n.t0=n.catch(1),n.abrupt("return",new Error("Logging Error: ".concat(r)));case 11:case"end":return n.stop()}}),n,null,[[1,8]])})),function(){var r=this,t=arguments;return new Promise((function(e,i){var a=n.apply(r,t);function c(n){o(a,e,i,c,s,"next",n)}function s(n){o(a,e,i,c,s,"throw",n)}c(void 0)}))});return function(n){return r.apply(this,arguments)}}();r.Z=a},8520:function(n,r,t){"use strict";t.r(r);var e=t(4051),i=t.n(e),o=t(5893),a=t(7294),c=t(6886),s=t(3321),u=t(1664),l=t(9452),p=t(5542),f=t(1303),d=t(5125);function m(n,r,t,e,i,o,a){try{var c=n[o](a),s=c.value}catch(u){return void t(u)}c.done?r(s):Promise.resolve(s).then(e,i)}function h(n){return function(){var r=this,t=arguments;return new Promise((function(e,i){var o=n.apply(r,t);function a(n){m(o,e,i,a,c,"next",n)}function c(n){m(o,e,i,a,c,"throw",n)}a(void 0)}))}}r.default=function(){var n=(0,a.useState)(""),r=n[0],t=n[1],e=(0,a.useState)(""),m=e[0],g=e[1];return(0,a.useEffect)((function(){function n(){return(n=h(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.Od)();case 2:r=n.sent,g(r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,a.useEffect)((function(){function n(){return(n=h(i().mark((function n(){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.I_)();case 2:r=n.sent,t(r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,o.jsxs)(p.Z,{meta:(0,o.jsx)(l.Z,{title:"Dashboard | ".concat(d.Z.title,": ").concat(d.Z.tagline),description:d.Z.description}),children:[(0,o.jsx)("h1",{children:"Dashboard"}),(0,o.jsx)("h3",{children:"Device Name"}),(0,o.jsxs)("h4",{children:["Device ",m]}),r&&(0,o.jsxs)("p",{children:["IP: ",r]}),(0,o.jsx)("button",{children:"Toggle On/Off"}),(0,o.jsxs)(c.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,o.jsx)(c.ZP,{item:!0,xs:6,children:(0,o.jsx)(u.default,{href:"/wifi",passHref:!0,children:(0,o.jsx)(s.Z,{sx:{width:"100%"},variant:"contained",children:"WiFi"})})}),(0,o.jsx)(c.ZP,{item:!0,xs:6,children:(0,o.jsx)(u.default,{href:"/settings/about",passHref:!0,children:(0,o.jsx)(s.Z,{sx:{width:"100%"},variant:"outlined",children:"About"})})}),(0,o.jsx)(c.ZP,{item:!0,xs:6,children:(0,o.jsx)(u.default,{href:"/settings/view-qr",passHref:!0,children:(0,o.jsx)(s.Z,{sx:{width:"100%"},variant:"outlined",children:"View QR"})})})]})]})}},5125:function(n,r){"use strict";var t={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"Smartcloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:10,RETRY_DELAY:500};t.errorMessage='There was an error, please email <a href="mailto:'.concat(t.email,'">').concat(t.email,"</a>"),r.Z=t}},function(n){n.O(0,[838,774,888,179],(function(){return r=5058,n(n.s=r);var r}));var r=n.O();_N_E=r}]);