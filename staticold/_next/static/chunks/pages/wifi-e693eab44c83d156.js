(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[281],{1295:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wifi",function(){return e(1745)}])},1745:function(n,t,e){"use strict";e.r(t);var r=e(4051),i=e.n(r),u=e(5893),o=e(7294),c=e(9452),s=e(5542),a=e(8851),l=e(5125);function f(n,t,e,r,i,u,o){try{var c=n[u](o),s=c.value}catch(a){return void e(a)}c.done?t(s):Promise.resolve(s).then(r,i)}function d(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var u=n.apply(t,e);function o(n){f(u,r,i,o,c,"next",n)}function c(n){f(u,r,i,o,c,"throw",n)}o(void 0)}))}}t.default=function(){var n=(0,o.useState)({ssid:"",quality:0}),t=n[0],e=n[1],r=(0,o.useState)(""),f=r[0],p=r[1],h=(0,o.useState)([]),v=h[0],w=h[1],x=(0,o.useState)(""),j=x[0],k=x[1],_=(0,o.useState)(!0),y=_[0],m=_[1],C=function(){var n=d(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.wl)();case 2:t=n.sent,e(t),p(t.ssid);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),S=function(){var n=d(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Sj)();case 2:t=n.sent,w(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g=function(){var n=d(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,a.Cz)(f,j);case 2:t=n.sent,console.log(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){C(),S()}),[]),(0,u.jsx)(s.Z,{meta:(0,u.jsx)(c.Z,{title:"Wifi | ".concat(l.Z.title,": ").concat(l.Z.tagline),description:l.Z.description}),children:(0,u.jsxs)("div",{className:"block text-center ",children:[(0,u.jsx)("h4",{children:"Wifi Setup"}),t.ssid?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{children:"You are connected to the internet."}),(0,u.jsxs)("p",{children:["Current network: ",t.ssid," quality: ",t.quality]})]}):(0,u.jsx)("p",{children:"Enter your WiFi name (SSID) and password to connect to your network."}),v&&(0,u.jsx)("select",{value:f,onChange:function(n){p(n.target.value)},children:v.map((function(n,t){return(0,u.jsx)("option",{value:n,children:n},t)}))}),(0,u.jsx)("button",{onClick:S,children:"Reload WiFi Networks"}),(0,u.jsx)("input",{type:y?"password":"text",value:j,onChange:function(n){var t;k(null===n||void 0===n||null===(t=n.target)||void 0===t?void 0:t.value)}}),(0,u.jsxs)("button",{onClick:function(){return m(!y)},children:[y?"Show":"Hide"," Password"]}),(0,u.jsx)("button",{onClick:g,children:"Connect"})]})})}}},function(n){n.O(0,[525,607,774,888,179],(function(){return t=1295,n(n.s=t);var t}));var t=n.O();_N_E=t}]);