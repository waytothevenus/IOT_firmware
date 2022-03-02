(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[397],{3267:function(e,t,n){"use strict";var r=n(8169),i=n(5893);t.Z=(0,r.Z)((0,i.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore")},6447:function(e,t,n){"use strict";var r=n(3366),i=n(7462),o=n(7294),c=n(5408),s=n(8700),a=n(9707),l=n(9766),u=n(2151),d=n(7623),p=n(5893);const h=["component","direction","spacing","divider","children"];function f(e,t){const n=o.Children.toArray(e).filter(Boolean);return n.reduce(((e,r,i)=>(e.push(r),i<n.length-1&&e.push(o.cloneElement(t,{key:`separator-${i}`})),e)),[])}const m=(0,u.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>[t.root]})((({ownerState:e,theme:t})=>{let n=(0,i.Z)({display:"flex"},(0,c.k9)({theme:t},(0,c.P$)({values:e.direction,breakpoints:t.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,s.hB)(t),i=Object.keys(t.breakpoints.values).reduce(((t,n)=>(null==e.spacing[n]&&null==e.direction[n]||(t[n]=!0),t)),{}),o=(0,c.P$)({values:e.direction,base:i}),a=(0,c.P$)({values:e.spacing,base:i}),u=(t,n)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${i=n?o[n]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i]}`]:(0,s.NA)(r,t)}};var i};n=(0,l.Z)(n,(0,c.k9)({theme:t},a,u))}return n})),v=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiStack"}),o=(0,a.Z)(n),{component:c="div",direction:s="column",spacing:l=0,divider:u,children:v}=o,x=(0,r.Z)(o,h),Z={direction:s,spacing:l};return(0,p.jsx)(m,(0,i.Z)({as:c,ownerState:Z,ref:t},x,{children:u?f(v,u):v}))}));t.Z=v},9707:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7462),i=n(3366),o=n(9766),c=n(8528);const s=["sx"];function a(e){const{sx:t}=e,n=(0,i.Z)(e,s),{systemProps:a,otherProps:l}=(e=>{const t={systemProps:{},otherProps:{}};return Object.keys(e).forEach((n=>{c.Gc[n]?t.systemProps[n]=e[n]:t.otherProps[n]=e[n]})),t})(n);let u;return u=Array.isArray(t)?[a,...t]:"function"===typeof t?(...e)=>{const n=t(...e);return(0,o.P)(n)?(0,r.Z)({},a,n):a}:(0,r.Z)({},a,t),(0,r.Z)({},l,{sx:u})}},4912:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/pair",function(){return n(5730)}])},9452:function(e,t,n){"use strict";var r=n(5893),i=n(2962),o=n(9008),c=n(1163),s=n(5125);t.Z=function(e){var t=(0,c.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("meta",{charSet:"UTF-8"},"charset"),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"},"viewport"),(0,r.jsx)("link",{rel:"apple-touch-icon",href:"".concat(t.basePath,"/apple-touch-icon.png")},"apple"),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat(t.basePath,"/favicon-32x32.png")},"icon32"),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat(t.basePath,"/favicon-16x16.png")},"icon16"),(0,r.jsx)("link",{rel:"icon",href:"".concat(t.basePath,"/favicon.ico")},"favicon")]}),(0,r.jsx)(i.PB,{title:e.title,description:e.description,canonical:e.canonical,openGraph:{title:e.title,description:e.description,url:e.canonical,locale:s.Z.locale,site_name:s.Z.site_name}})]})}},3292:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){return(0,r.jsxs)("div",{className:"h-[320px] w-[480px] border-solid border-2 border-black p-2",children:[e.meta,(0,r.jsx)("div",{className:"w-full relative",children:(0,r.jsx)("div",{children:e.children})})]})}},5730:function(e,t,n){"use strict";n.r(t);var r=n(5893),i=n(3267),o=n(6447),c=n(3321),s=n(1664),a=n(9452),l=n(3292),u=n(5125);t.default=function(){return(0,r.jsx)(l.Z,{meta:(0,r.jsx)(a.Z,{title:"Pair | ".concat(u.Z.title,": ").concat(u.Z.tagline),description:u.Z.description}),children:(0,r.jsxs)(o.Z,{spacing:2,children:[(0,r.jsx)("h4",{className:"my-0",children:"Pair Smartcloud"}),(0,r.jsx)(s.default,{href:"/dashboard",passHref:!0,children:(0,r.jsx)(c.Z,{sx:{width:"100%"},startIcon:(0,r.jsx)(i.Z,{}),variant:"contained",children:"Back"})})]})})}},5125:function(e,t){"use strict";var n={totalImages:5,site_name:"iot-cloud",email:"me@lacymorrow.com",title:"Smartcloud",tagline:"Firmware for iot scheduler",description:"Firmware for iot scheduler",locale:"en",errorMessage:"",MAX_RETRIES:3,RETRY_DELAY:1e3,BACKOFF_DELAY:3e3,TIMEOUT:1500,NETWORK_TIMEOUT:1e4};n.errorMessage='There was an error, please email <a href="mailto:'.concat(n.email,'">').concat(n.email,"</a>"),t.Z=n}},function(e){e.O(0,[118,774,888,179],(function(){return t=4912,e(e.s=t);var t}));var t=e.O();_N_E=t}]);