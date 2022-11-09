(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{1295:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wifi",function(){return t(9864)}])},9864:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return _}});var r=t(4051),i=t.n(r),o=t(5893),c=t(7294),a=t(2456),s=t(2186),u=t(5697),l=t(745),f=t(452),d=t(7920),h=t(8987),p=t(6886),v=t(1713),x=t(8340),w=t(3321),j=t(1664),m=t(8100),b=t(9452),Z=t(1303),g=t(5125);function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var O=function(n){var e=(0,m.ZP)("/wifi-info",Z.wl,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){y(n,e,t[e])}))}return n}({refreshInterval:g.Z.NETWORK_TIMEOUT,refreshWhenHidden:!1,refreshWhenOffline:!0,revalidateIfStale:!0,revalidateOnFocus:!0,revalidateOnReconnect:!0},n)),t=e.data,r=e.error;return{data:t,mutate:e.mutate,isLoading:!r&&!t,isError:r}},P=t(3292),k=t(2435);function E(n,e,t,r,i,o,c){try{var a=n[o](c),s=a.value}catch(u){return void t(u)}a.done?e(s):Promise.resolve(s).then(r,i)}function S(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var o=n.apply(e,t);function c(n){E(o,r,i,c,a,"next",n)}function a(n){E(o,r,i,c,a,"throw",n)}c(void 0)}))}}function C(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var _=function(){var n=O(),e=n.data,t=n.mutate,r=n.isError,y=(0,m.ZP)("/saved-networks",Z.M7).data,E=(0,c.useRef)(null),_=(0,c.useRef)(null),I=(0,c.useState)(""),W=I[0],N=I[1],T=(0,c.useState)([]),F=T[0],H=T[1],R=(0,c.useState)(""),D=R[0],M=R[1],G=(0,c.useState)(!0),K=G[0],U=G[1],X=(0,c.useState)(!0),q=X[0],z=X[1],B=(0,c.useState)(!1),L=B[0],V=B[1],A=function(){var n=S(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return z(!0),n.next=3,(0,Z.Sj)();case 3:e=n.sent,console.log(e),H(e),z(!1);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),J=function(){!D&&(null===e||void 0===e?void 0:e.ssid)&&y[e.ssid]&&M(y[e.ssid])},Q=function(){var n=S(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!W){n.next=9;break}return V(!0),n.next=4,(0,k.Z)("WiFi Connect ".concat(W,":").concat(D));case 4:return n.next=6,(0,Z.Cz)(W,D).then((function(n){return(0,k.Z)("Connect WiFi: ".concat(n))})).catch(function(){var n=S(i().mark((function n(e){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,k.Z)("WiFi Error: ".concat(e));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 6:setTimeout((function(){(0,Z.GI)().then(S(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,Z.Hu)(W,D);case 2:console.log("Connected, saved network".concat(W,":").concat(D));case 3:case"end":return n.stop()}}),n)})))).finally((function(){t(),V(!1)}))}),g.Z.NETWORK_TIMEOUT),n.next=10;break;case 9:case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,c.useEffect)((function(){A()}),[]),(0,c.useEffect)((function(){!W&&(null===e||void 0===e?void 0:e.ssid)?N(e.ssid):!W&&F&&F[0]&&N(F[0])}),[e,F]),(0,o.jsx)(P.Z,{meta:(0,o.jsx)(b.Z,{title:"Wifi | ".concat(g.Z.title,": ").concat(g.Z.tagline),description:g.Z.description}),children:(0,o.jsxs)("div",{className:"block text-center ",children:[(0,o.jsx)("h4",{className:"my-0",onClick:S(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,Z.Hu)(W,D));case 1:case"end":return n.stop()}}),n)}))),children:"Wifi Setup"}),(0,o.jsx)("h4",{className:"my-0",onClick:S(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=console,n.next=3,(0,Z.M7)();case 3:return n.t1=n.sent,n.abrupt("return",n.t0.log.call(n.t0,n.t1));case 5:case"end":return n.stop()}}),n)}))),children:"Wifi Setup"}),!e&&!r&&(0,o.jsx)("p",{children:"Getting WiFi information..."})||r?(0,o.jsx)("p",{children:"Enter your WiFi name (SSID) and password to connect."}):(0,o.jsxs)("h3",{children:[null===e||void 0===e?void 0:e.ssid," ",null===e||void 0===e?void 0:e.quality," ",(0,o.jsx)(d.Z,{})]}),(0,o.jsxs)(p.ZP,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",spacing:2,children:[(0,o.jsx)(p.ZP,{item:!0,xs:9,children:F&&(0,o.jsx)(v.Z,{autoComplete:!0,autoHighlight:!0,clearOnEscape:!0,freeSolo:!0,openOnFocus:!0,ref:E,disabled:q||L,options:F,sx:{width:"100%"},renderInput:function(n){return(0,o.jsx)(x.Z,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){C(n,e,t[e])}))}return n}({},n,{label:"Network"}))},inputValue:W,onChange:function(n,e){e&&(N(e),J())},onBlur:J,onInputChange:function(n,e){N(e)}})}),(0,o.jsx)(p.ZP,{item:!0,xs:3,children:(0,o.jsx)(h.Z,{loading:q,loadingPosition:"start",sx:{width:"100%"},startIcon:(0,o.jsx)(a.Z,{}),onClick:A,variant:"outlined",children:"Refresh"})}),(0,o.jsx)(p.ZP,{item:!0,xs:9,children:(0,o.jsx)(x.Z,{ref:_,label:"Password",variant:"outlined",value:D,sx:{width:"100%"},type:K?"password":"text",onChange:function(n){var e;M(null===n||void 0===n||null===(e=n.target)||void 0===e?void 0:e.value)}})}),(0,o.jsx)(p.ZP,{item:!0,xs:3,children:(0,o.jsx)(w.Z,{variant:"outlined",sx:{width:"100%"},startIcon:K?(0,o.jsx)(s.Z,{}):(0,o.jsx)(u.Z,{}),onClick:function(){return U(!K)},children:K?"Show":"Hide"})}),(0,o.jsx)(p.ZP,{item:!0,xs:6,children:(0,o.jsx)(h.Z,{loading:q||L,loadingPosition:"end",sx:{width:"100%"},endIcon:(0,o.jsx)(l.Z,{}),variant:"contained",onClick:Q,children:"Connect"})}),(0,o.jsx)(p.ZP,{item:!0,xs:6,children:(0,o.jsx)(j.default,{href:"/dashboard",passHref:!0,children:(0,o.jsx)(w.Z,{disabled:!(null===e||void 0===e?void 0:e.ssid),sx:{width:"100%"},endIcon:(0,o.jsx)(f.Z,{}),variant:"contained",children:"Done"})})})]})]})})}}},function(n){n.O(0,[118,100,204,927,827,774,888,179],(function(){return e=1295,n(n.s=e);var e}));var e=n.O();_N_E=e}]);