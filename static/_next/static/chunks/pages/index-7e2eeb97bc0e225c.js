(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{452:function(t,n,r){"use strict";var e=r(8169),i=r(5893);n.Z=(0,e.Z)((0,i.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext")},8987:function(t,n,r){"use strict";r.d(n,{Z:function(){return _}});var e=r(3366),i=r(7462),o=r(7294),a=r(8216),s=r(7909),c=r(7192),d=r(2151),l=r(7623),u=r(3321),f=r(6010),g=r(917),v=r(8979),h=r(6087);function p(t){return(0,v.Z)("MuiCircularProgress",t)}(0,h.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var m=r(5893);const Z=["className","color","disableShrink","size","style","thickness","value","variant"];let x,w,b,S,I=t=>t;const P=44,y=(0,g.F4)(x||(x=I`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),k=(0,g.F4)(w||(w=I`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),j=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.root,n[r.variant],n[`color${(0,a.Z)(r.color)}`]]}})((({ownerState:t,theme:n})=>(0,i.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:n.transitions.create("transform")},"inherit"!==t.color&&{color:n.palette[t.color].main})),(({ownerState:t})=>"indeterminate"===t.variant&&(0,g.iv)(b||(b=I`
      animation: ${0} 1.4s linear infinite;
    `),y))),L=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,n)=>n.svg})({display:"block"}),$=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.circle,n[`circle${(0,a.Z)(r.variant)}`],r.disableShrink&&n.circleDisableShrink]}})((({ownerState:t,theme:n})=>(0,i.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:t})=>"indeterminate"===t.variant&&!t.disableShrink&&(0,g.iv)(S||(S=I`
      animation: ${0} 1.4s ease-in-out infinite;
    `),k)));var E=o.forwardRef((function(t,n){const r=(0,l.Z)({props:t,name:"MuiCircularProgress"}),{className:o,color:s="primary",disableShrink:d=!1,size:u=40,style:g,thickness:v=3.6,value:h=0,variant:x="indeterminate"}=r,w=(0,e.Z)(r,Z),b=(0,i.Z)({},r,{color:s,disableShrink:d,size:u,thickness:v,value:h,variant:x}),S=(t=>{const{classes:n,variant:r,color:e,disableShrink:i}=t,o={root:["root",r,`color${(0,a.Z)(e)}`],svg:["svg"],circle:["circle",`circle${(0,a.Z)(r)}`,i&&"circleDisableShrink"]};return(0,c.Z)(o,p,n)})(b),I={},y={},k={};if("determinate"===x){const t=2*Math.PI*((P-v)/2);I.strokeDasharray=t.toFixed(3),k["aria-valuenow"]=Math.round(h),I.strokeDashoffset=`${((100-h)/100*t).toFixed(3)}px`,y.transform="rotate(-90deg)"}return(0,m.jsx)(j,(0,i.Z)({className:(0,f.Z)(S.root,o),style:(0,i.Z)({width:u,height:u},y,g),ownerState:b,ref:n,role:"progressbar"},k,w,{children:(0,m.jsx)(L,{className:S.svg,ownerState:b,viewBox:"22 22 44 44",children:(0,m.jsx)($,{className:S.circle,style:I,ownerState:b,cx:P,cy:P,r:(P-v)/2,fill:"none",strokeWidth:v})})}))}));function N(t){return(0,v.Z)("MuiLoadingButton",t)}var M=(0,h.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);const R=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],C=(0,d.ZP)(u.Z,{shouldForwardProp:t=>(t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t)(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,n)=>[n.root,n.startIconLoadingStart&&{[`& .${M.startIconLoadingStart}`]:n.startIconLoadingStart},n.endIconLoadingEnd&&{[`& .${M.endIconLoadingEnd}`]:n.endIconLoadingEnd}]})((({ownerState:t,theme:n})=>(0,i.Z)({[`& .${M.startIconLoadingStart}, & .${M.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),[`&.${M.loading}`]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{[`& .${M.startIconLoadingStart}, & .${M.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{[`& .${M.startIconLoadingStart}, & .${M.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginLeft:-8}}))),O=(0,d.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,n)=>{const{ownerState:r}=t;return[n.loadingIndicator,n[`loadingIndicator${(0,a.Z)(r.loadingPosition)}`]]}})((({theme:t,ownerState:n})=>(0,i.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{left:14},"start"===n.loadingPosition&&"text"===n.variant&&{left:6},"center"===n.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{right:14},"end"===n.loadingPosition&&"text"===n.variant&&{right:6},"start"===n.loadingPosition&&n.fullWidth&&{position:"relative",left:-10},"end"===n.loadingPosition&&n.fullWidth&&{position:"relative",right:-10})));var _=o.forwardRef((function(t,n){const r=(0,l.Z)({props:t,name:"MuiLoadingButton"}),{children:d,disabled:u=!1,id:f,loading:g=!1,loadingIndicator:v,loadingPosition:h="center",variant:p="text"}=r,Z=(0,e.Z)(r,R),x=(0,s.Z)(f),w=null!=v?v:(0,m.jsx)(E,{"aria-labelledby":x,color:"inherit",size:16}),b=(0,i.Z)({},r,{disabled:u,loading:g,loadingIndicator:w,loadingPosition:h,variant:p}),S=(t=>{const{loading:n,loadingPosition:r,classes:e}=t,o={root:["root",n&&"loading"],startIcon:[n&&`startIconLoading${(0,a.Z)(r)}`],endIcon:[n&&`endIconLoading${(0,a.Z)(r)}`],loadingIndicator:["loadingIndicator",n&&`loadingIndicator${(0,a.Z)(r)}`]},s=(0,c.Z)(o,N,e);return(0,i.Z)({},e,s)})(b);return(0,m.jsx)(C,(0,i.Z)({disabled:u||g,id:x,ref:n},Z,{variant:p,classes:S,ownerState:b,children:"end"===b.loadingPosition?(0,m.jsxs)(o.Fragment,{children:[d,g&&(0,m.jsx)(O,{className:S.loadingIndicator,ownerState:b,children:w})]}):(0,m.jsxs)(o.Fragment,{children:[g&&(0,m.jsx)(O,{className:S.loadingIndicator,ownerState:b,children:w}),d]})}))}))},7909:function(t,n,r){"use strict";var e=r(7579);n.Z=e.Z},7579:function(t,n,r){"use strict";var e;r.d(n,{Z:function(){return s}});var i=r(7294);let o=0;const a=(e||(e=r.t(i,2))).useId;function s(t){if(void 0!==a){const n=a();return null!=t?t:n}return function(t){const[n,r]=i.useState(t),e=t||n;return i.useEffect((()=>{null==n&&(o+=1,r(`mui-${o}`))}),[n]),e}(t)}},5301:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(441)}])},1906:function(t,n,r){"use strict";var e=r(4051),i=r.n(e),o=r(5893),a=r(7294),s=r(2592),c=r(2435);function d(t,n,r,e,i,o,a){try{var s=t[o](a),c=s.value}catch(d){return void r(d)}s.done?n(c):Promise.resolve(c).then(e,i)}n.Z=function(t){var n=t.data,r=(0,a.useRef)(null);return(0,a.useEffect)((function(){s.toCanvas(r.current,n,function(){var t,r=(t=i().mark((function t(r){var e,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=4;break}return t.next=4,null===(e=window.pywebview)||void 0===e||null===(o=e.api)||void 0===o?void 0:o.log(r);case 4:return t.next=6,(0,c.Z)("Created QR: ".concat(n));case 6:case"end":return t.stop()}}),t)})),function(){var n=this,r=arguments;return new Promise((function(e,i){var o=t.apply(n,r);function a(t){d(o,e,i,a,s,"next",t)}function s(t){d(o,e,i,a,s,"throw",t)}a(void 0)}))});return function(t){return r.apply(this,arguments)}}())}),[n]),(0,o.jsx)("canvas",{ref:r})}},3448:function(t,n,r){"use strict";var e=r(8100),i=r(1303);function o(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}n.Z=function(t){var n=(0,e.ZP)("/hardware-id",i.Od,function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},e=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),e.forEach((function(n){o(t,n,r[n])}))}return t}({revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1},t)),r=n.data,a=n.error;return{hwid:r,isLoading:!a&&!r,isError:a}}},441:function(t,n,r){"use strict";r.r(n);var e=r(5893),i=r(7294),o=r(452),a=r(8987),s=r(1664),c=r(1163),d=r(9452),l=r(1906),u=r(3448),f=r(3292),g=r(5125);n.default=function(){var t=(0,i.useState)("initializing..."),n=t[0],r=t[1],v=(0,u.Z)().hwid,h=(0,c.useRouter)();return(0,i.useEffect)((function(){if(v){var t=5,n=setInterval((function(){r("starting in ".concat(t," seconds...")),t-=1}),1e3);setTimeout((function(){clearInterval(n),r("starting..."),h.push("/dashboard")}),5e3)}}),[v]),(0,e.jsxs)(f.Z,{meta:(0,e.jsx)(d.Z,{title:"Smartcloud | ".concat(g.Z.title,": ").concat(g.Z.tagline),description:g.Z.description}),children:[(0,e.jsx)(d.Z,{title:"".concat(g.Z.title,": ").concat(g.Z.tagline),description:g.Z.description}),(0,e.jsxs)("div",{className:"flex flex-col content-center justify-center text-center",children:[(0,e.jsx)("h3",{children:n}),(0,e.jsx)("div",{className:"max-w-72 mx-auto flex content-center justify-center",children:(0,e.jsx)(l.Z,{data:v})}),(0,e.jsx)(s.default,{href:"/dashboard",passHref:!0,children:(0,e.jsx)(a.Z,{endIcon:(0,e.jsx)(o.Z,{}),loading:!v,loadingPosition:"end",variant:"contained",children:"Dashboard"})})]})]})}}},function(t){t.O(0,[118,100,592,827,774,888,179],(function(){return n=5301,t(t.s=n);var n}));var n=t.O();_N_E=n}]);