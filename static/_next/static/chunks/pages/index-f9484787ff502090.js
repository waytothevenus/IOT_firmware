(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{452:function(t,n,i){"use strict";var r=i(8169),o=i(5893);n.Z=(0,r.Z)((0,o.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext")},6319:function(t,n,i){"use strict";i.d(n,{Z:function(){return D}});var r=i(3366),o=i(7462),e=i(7294),a=i(7579).Z,s=i(8216),c=i(7192),d=i(7088),l=i(7623),u=i(3321),g=i(6010),f=i(8012),h=i(3620),v=i(6087);function m(t){return(0,h.Z)("MuiCircularProgress",t)}(0,v.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var p=i(5893);const Z=["className","color","disableShrink","size","style","thickness","value","variant"];let x,S,I,w,P=t=>t;const k=44,y=(0,f.F4)(x||(x=P`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),b=(0,f.F4)(S||(S=P`
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
`)),L=(0,d.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.root,n[i.variant],n[`color${(0,s.Z)(i.color)}`]]}})((({ownerState:t,theme:n})=>(0,o.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:n.transitions.create("transform")},"inherit"!==t.color&&{color:n.palette[t.color].main})),(({ownerState:t})=>"indeterminate"===t.variant&&(0,f.iv)(I||(I=P`
      animation: ${0} 1.4s linear infinite;
    `),y))),j=(0,d.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,n)=>n.svg})({display:"block"}),$=(0,d.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.circle,n[`circle${(0,s.Z)(i.variant)}`],i.disableShrink&&n.circleDisableShrink]}})((({ownerState:t,theme:n})=>(0,o.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:n.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})),(({ownerState:t})=>"indeterminate"===t.variant&&!t.disableShrink&&(0,f.iv)(w||(w=P`
      animation: ${0} 1.4s ease-in-out infinite;
    `),b)));var N=e.forwardRef((function(t,n){const i=(0,l.Z)({props:t,name:"MuiCircularProgress"}),{className:e,color:a="primary",disableShrink:d=!1,size:u=40,style:f,thickness:h=3.6,value:v=0,variant:x="indeterminate"}=i,S=(0,r.Z)(i,Z),I=(0,o.Z)({},i,{color:a,disableShrink:d,size:u,thickness:h,value:v,variant:x}),w=(t=>{const{classes:n,variant:i,color:r,disableShrink:o}=t,e={root:["root",i,`color${(0,s.Z)(r)}`],svg:["svg"],circle:["circle",`circle${(0,s.Z)(i)}`,o&&"circleDisableShrink"]};return(0,c.Z)(e,m,n)})(I),P={},y={},b={};if("determinate"===x){const t=2*Math.PI*((k-h)/2);P.strokeDasharray=t.toFixed(3),b["aria-valuenow"]=Math.round(v),P.strokeDashoffset=`${((100-v)/100*t).toFixed(3)}px`,y.transform="rotate(-90deg)"}return(0,p.jsx)(L,(0,o.Z)({className:(0,g.Z)(w.root,e),style:(0,o.Z)({width:u,height:u},y,f),ownerState:I,ref:n,role:"progressbar"},b,S,{children:(0,p.jsx)(j,{className:w.svg,ownerState:I,viewBox:"22 22 44 44",children:(0,p.jsx)($,{className:w.circle,style:P,ownerState:I,cx:k,cy:k,r:(k-h)/2,fill:"none",strokeWidth:h})})}))}));function E(t){return(0,h.Z)("MuiLoadingButton",t)}var M=(0,v.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]);const _=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],C=(0,d.ZP)(u.Z,{shouldForwardProp:t=>(t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t)(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,n)=>[n.root,n.startIconLoadingStart&&{[`& .${M.startIconLoadingStart}`]:n.startIconLoadingStart},n.endIconLoadingEnd&&{[`& .${M.endIconLoadingEnd}`]:n.endIconLoadingEnd}]})((({ownerState:t,theme:n})=>(0,o.Z)({[`& .${M.startIconLoadingStart}, & .${M.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:n.transitions.create(["background-color","box-shadow","border-color"],{duration:n.transitions.duration.short}),[`&.${M.loading}`]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{[`& .${M.startIconLoadingStart}, & .${M.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{[`& .${M.startIconLoadingStart}, & .${M.endIconLoadingEnd}`]:{transition:n.transitions.create(["opacity"],{duration:n.transitions.duration.short}),opacity:0,marginLeft:-8}}))),R=(0,d.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,n)=>{const{ownerState:i}=t;return[n.loadingIndicator,n[`loadingIndicator${(0,s.Z)(i.loadingPosition)}`]]}})((({theme:t,ownerState:n})=>(0,o.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{left:14},"start"===n.loadingPosition&&"text"===n.variant&&{left:6},"center"===n.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:t.palette.action.disabled},"end"===n.loadingPosition&&("outlined"===n.variant||"contained"===n.variant)&&{right:14},"end"===n.loadingPosition&&"text"===n.variant&&{right:6},"start"===n.loadingPosition&&n.fullWidth&&{position:"relative",left:-10},"end"===n.loadingPosition&&n.fullWidth&&{position:"relative",right:-10})));var D=e.forwardRef((function(t,n){const i=(0,l.Z)({props:t,name:"MuiLoadingButton"}),{children:d,disabled:u=!1,id:g,loading:f=!1,loadingIndicator:h,loadingPosition:v="center",variant:m="text"}=i,Z=(0,r.Z)(i,_),x=a(g),S=null!=h?h:(0,p.jsx)(N,{"aria-labelledby":x,color:"inherit",size:16}),I=(0,o.Z)({},i,{disabled:u,loading:f,loadingIndicator:S,loadingPosition:v,variant:m}),w=(t=>{const{loading:n,loadingPosition:i,classes:r}=t,e={root:["root",n&&"loading"],startIcon:[n&&`startIconLoading${(0,s.Z)(i)}`],endIcon:[n&&`endIconLoading${(0,s.Z)(i)}`],loadingIndicator:["loadingIndicator",n&&`loadingIndicator${(0,s.Z)(i)}`]},a=(0,c.Z)(e,E,r);return(0,o.Z)({},r,a)})(I);return(0,p.jsx)(C,(0,o.Z)({disabled:u||f,id:x,ref:n},Z,{variant:m,classes:w,ownerState:I,children:"end"===I.loadingPosition?(0,p.jsxs)(e.Fragment,{children:[d,f&&(0,p.jsx)(R,{className:w.loadingIndicator,ownerState:I,children:S})]}):(0,p.jsxs)(e.Fragment,{children:[f&&(0,p.jsx)(R,{className:w.loadingIndicator,ownerState:I,children:S}),d]})}))}))},7579:function(t,n,i){"use strict";var r;i.d(n,{Z:function(){return s}});var o=i(7294);let e=0;const a=(r||(r=i.t(o,2))).useId;function s(t){if(void 0!==a){const n=a();return null!=t?t:n}return function(t){const[n,i]=o.useState(t),r=t||n;return o.useEffect((()=>{null==n&&(e+=1,i(`mui-${e}`))}),[n]),r}(t)}},5301:function(t,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(441)}])},441:function(t,n,i){"use strict";i.r(n);var r=i(4051),o=i.n(r),e=i(5893),a=i(7294),s=i(452),c=i(6319),d=i(1664),l=i(9452),u=i(1906),g=i(5542),f=i(1303),h=i(5125);function v(t,n,i,r,o,e,a){try{var s=t[e](a),c=s.value}catch(d){return void i(d)}s.done?n(c):Promise.resolve(c).then(r,o)}function m(t){return function(){var n=this,i=arguments;return new Promise((function(r,o){var e=t.apply(n,i);function a(t){v(e,r,o,a,s,"next",t)}function s(t){v(e,r,o,a,s,"throw",t)}a(void 0)}))}}n.default=function(){var t=(0,a.useState)(""),n=t[0],i=t[1];return(0,a.useEffect)((function(){function t(){return(t=m(o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.Od)();case 2:n=t.sent,i(n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,e.jsxs)(g.Z,{meta:(0,e.jsx)(l.Z,{title:"Smartcloud | ".concat(h.Z.title,": ").concat(h.Z.tagline),description:h.Z.description}),children:[(0,e.jsx)(l.Z,{title:"".concat(h.Z.title,": ").concat(h.Z.tagline),description:h.Z.description}),(0,e.jsxs)("div",{className:"flex flex-col content-center justify-center text-center",children:[(0,e.jsxs)("h3",{children:["Device ",n]}),(0,e.jsx)("div",{className:"max-w-72 mx-auto flex content-center justify-center",children:(0,e.jsx)(u.Z,{data:n})}),(0,e.jsx)(d.default,{href:"/wifi",passHref:!0,children:(0,e.jsx)(c.Z,{endIcon:(0,e.jsx)(s.Z,{}),loading:!n,loadingPosition:"end",variant:"contained",children:"WiFi Setup"})})]})]})}}},function(t){t.O(0,[838,108,445,774,888,179],(function(){return n=5301,t(t.s=n);var n}));var n=t.O();_N_E=n}]);