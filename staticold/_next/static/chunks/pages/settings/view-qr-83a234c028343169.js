(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{3267:function(e,n,t){"use strict";var r=t(8169),o=t(5893);n.Z=(0,r.Z)((0,o.jsx)("path",{d:"M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore")},6447:function(e,n,t){"use strict";var r=t(3366),o=t(7462),s=t(7294),i=t(5408),c=t(8700),a=t(9707),u=t(9766),l=t(7088),d=t(7623),f=t(5893);const p=["component","direction","spacing","divider","children"];function h(e,n){const t=s.Children.toArray(e).filter(Boolean);return t.reduce(((e,r,o)=>(e.push(r),o<t.length-1&&e.push(s.cloneElement(n,{key:`separator-${o}`})),e)),[])}const v=(0,l.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,n)=>[n.root]})((({ownerState:e,theme:n})=>{let t=(0,o.Z)({display:"flex"},(0,i.k9)({theme:n},(0,i.P$)({values:e.direction,breakpoints:n.breakpoints.values}),(e=>({flexDirection:e}))));if(e.spacing){const r=(0,c.hB)(n),o=Object.keys(n.breakpoints.values).reduce(((n,t)=>(null==e.spacing[t]&&null==e.direction[t]||(n[t]=!0),n)),{}),s=(0,i.P$)({values:e.direction,base:o}),a=(0,i.P$)({values:e.spacing,base:o}),l=(n,t)=>{return{"& > :not(style) + :not(style)":{margin:0,[`margin${o=t?s[t]:e.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o]}`]:(0,c.NA)(r,n)}};var o};t=(0,u.Z)(t,(0,i.k9)({theme:n},a,l))}return t})),m=s.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiStack"}),s=(0,a.Z)(t),{component:i="div",direction:c="column",spacing:u=0,divider:l,children:m}=s,Z=(0,r.Z)(s,p),y={direction:c,spacing:u};return(0,f.jsx)(v,(0,o.Z)({as:i,ownerState:y,ref:n},Z,{children:l?h(m,l):m}))}));n.Z=m},9707:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(7462),o=t(3366),s=t(9766),i=t(8528);const c=["sx"];function a(e){const{sx:n}=e,t=(0,o.Z)(e,c),{systemProps:a,otherProps:u}=(e=>{const n={systemProps:{},otherProps:{}};return Object.keys(e).forEach((t=>{i.Gc[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]})),n})(t);let l;return l=Array.isArray(n)?[a,...n]:"function"===typeof n?(...e)=>{const t=n(...e);return(0,s.P)(t)?(0,r.Z)({},a,t):a}:(0,r.Z)({},a,n),(0,r.Z)({},u,{sx:l})}},7634:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/settings/view-qr",function(){return t(6734)}])},6734:function(e,n,t){"use strict";t.r(n);var r=t(4051),o=t.n(r),s=t(5893),i=t(7294),c=t(3267),a=t(6447),u=t(3321),l=t(1664),d=t(9452),f=t(1906),p=t(5542),h=t(8851),v=t(5125);function m(e,n,t,r,o,s,i){try{var c=e[s](i),a=c.value}catch(u){return void t(u)}c.done?n(a):Promise.resolve(a).then(r,o)}n.default=function(){var e=(0,i.useState)(""),n=e[0],t=e[1],r=function(){var e,n=(e=o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.Od)();case 2:n=e.sent,t(n);case 4:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(r,o){var s=e.apply(n,t);function i(e){m(s,r,o,i,c,"next",e)}function c(e){m(s,r,o,i,c,"throw",e)}i(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,i.useEffect)((function(){r()}),[]),(0,s.jsx)(p.Z,{meta:(0,s.jsx)(d.Z,{title:"Pair | ".concat(v.Z.title,": ").concat(v.Z.tagline),description:v.Z.description}),children:(0,s.jsxs)(a.Z,{spacing:2,children:[(0,s.jsx)("h4",{className:"my-0",children:"Control your device"}),(0,s.jsx)("p",{children:"Scan the QR code with your phone or laptop to control your device from anywhere."}),(0,s.jsx)(f.Z,{data:n}),(0,s.jsx)(l.default,{href:"/dashboard",passHref:!0,children:(0,s.jsx)(u.Z,{sx:{width:"100%"},startIcon:(0,s.jsx)(c.Z,{}),variant:"contained",children:"Back"})})]})})}}},function(e){e.O(0,[838,108,413,774,888,179],(function(){return n=7634,e(e.s=n);var n}));var n=e.O();_N_E=n}]);