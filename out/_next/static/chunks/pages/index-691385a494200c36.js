(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{452:function(e,t,n){"use strict";var r=n(8169),a=n(5893);t.Z=(0,r.Z)((0,a.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext")},3217:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(4297);let a=(0,r.Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7925)}])},7793:function(e,t,n){"use strict";var r=n(5893),a=n(7294),o=n(2592),i=n(8893);t.Z=e=>{let{data:t}=e,n=(0,a.useRef)(null);return(0,a.useEffect)(()=>{t&&"undefined"!==t&&o.toCanvas(n.current,t,async e=>{var n,r;e&&await (null===(r=window.pywebview)||void 0===r?void 0:null===(n=r.api)||void 0===n?void 0:n.log(e)),await (0,i.Z)("Created QR: ".concat(t))})},[t]),(0,r.jsx)("canvas",{ref:n})}},802:function(e,t,n){"use strict";n.d(t,{d:function(){return s},z:function(){return u}});var r=n(5893),a=n(7294),o=n(8426),i=n(2003),c=n(7537);let s=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=a.forwardRef((e,t)=>{let{className:n,variant:a,size:i,asChild:u=!1,...l}=e,d=u?o.g7:"button";return(0,r.jsx)(d,{className:(0,c.cn)(s({variant:a,size:i,className:n})),ref:t,...l})});u.displayName="Button"},4334:function(e,t,n){"use strict";var r=n(9734),a=n(1473);t.Z=e=>{let{data:t,error:n}=(0,r.ZP)("/hardware-id",a.Od,{revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1,...e});return{hwid:t,isLoading:!n&&!t,isError:n}}},1473:function(e,t,n){"use strict";n.d(t,{uT:function(){return f},Od:function(){return w},I_:function(){return v},GI:function(){return h},M7:function(){return g},sc:function(){return y},wl:function(){return p},Sj:function(){return m},b:function(){return b},Hu:function(){return E},Cz:function(){return x}});var r=n(9734),a=n(5752),o=n(7478),i=n(8893),c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return(0,o.H_)(async()=>{try{var n,r;if(!(null===(r=window.pywebview)||void 0===r?void 0:null===(n=r.api)||void 0===n?void 0:n[e]))throw Error("API endpoint not found");await (0,i.Z)("PyCall ".concat(e),t);let a=await window.pywebview.api[e](t).then(e=>JSON.parse(e)).then(async t=>{if(null==t?void 0:t.error)throw t.error;if(void 0===t.message)throw Error("Response message was empty ".concat(t));return await (0,i.Z)("Pycall ".concat(e," returned: ").concat(t.message),t),t.message});return a}catch(n){let t="".concat(n);throw n instanceof Error&&(t=n.message),await (0,i.Z)("Pycall ".concat(e," (retrying): ").concat(t)),Error(t)}},a.Z.RETRY_DELAY,a.Z.MAX_RETRIES).catch(async t=>{let n="".concat(e," - ").concat(t);throw t instanceof Error&&(n=t.message),await (0,i.Z)("Pycall ".concat(e," - FATAL ERROR: ").concat(n)),Error(n)})};let s=e=>c("get",{key:e}).then(e=>{console.log("Got: ",e);try{return JSON.parse(e)}catch(t){return e}}).catch(e=>(console.log("pyget error: ".concat(e)),"")),u=(e,t)=>(console.log("Setting: ".concat(e,", ").concat(t)),c("set",{key:e,data:t}).catch(e=>(console.log("Pyset error: ",e),""))),l=()=>c("deviceOn").catch(()=>"error"),d=()=>c("deviceOff").catch(()=>"error"),f=()=>c("getDeviceStatus").catch(()=>"error"),w=()=>c("getHardwareId").catch(()=>""),h=async()=>{let e=await (0,o.Vs)(c("checkWifiConnection").catch(()=>!1),a.Z.NETWORK_TIMEOUT);return e},v=()=>c("getIpAddress").catch(()=>""),g=()=>s("network_list"),y=async()=>{let e=await c("getTemperatureHumidity").catch(()=>({temperature:"---",humidity:"---"}));return e},p=async()=>{let e=await c("getWifiInfo").catch(()=>({ssid:"error",quality:0})),t=Math.round(Number.parseInt(e.quality,10)/70*100);return{ssid:e.ssid,quality:t}},m=async()=>{let e=await c("getWifiNetworks").catch(()=>""),t=e.split("ESSID:").map(e=>e.trim().replace(/^"|"$/g,"")).filter((e,t,n)=>n.indexOf(e)===t).filter(e=>e);return t},b=async e=>{console.log("setDevicePower> Setting device power to ".concat(e)),await (0,r.JG)("/device-power",e),e?console.log(await l()):console.log(await d())},x=async(e,t)=>{let n=await c("setWifiNetwork",{ssid:e,password:t});return n},E=async(e,t)=>{let n=await s("network_list"),r="object"==typeof n?await u("network_list",{...n,[e]:t}):await u("network_list",{[e]:t});return r}},8893:function(e,t,n){"use strict";var r=n(5752),a=n(7478);let o=async function(e){for(var t,n,o=arguments.length,i=Array(o>1?o-1:0),c=1;c<o;c++)i[c-1]=arguments[c];(null===(n=window.pywebview)||void 0===n?void 0:null===(t=n.api)||void 0===t?void 0:t.log)?(console.log("[Pylog] ".concat(e),...i),await (0,a.Vs)((async()=>(await window.pywebview.api.log(e),!0))(),r.Z.TIMEOUT).catch(t=>console.log("[Pylog] ".concat(e," error: ").concat(t)))):console.log("[Pylog Error] ".concat(e),...i)};t.Z=o},7925:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7294),o=n(452),i=n(3217),c=n(1664),s=n.n(c),u=n(1163),l=n(802),d=n(7793),f=n(4334);t.default=()=>{let[e,t]=(0,a.useState)("Initializing..."),{hwid:n}=(0,f.Z)(),c=(0,u.useRouter)();return(0,a.useEffect)(()=>{if(n){let e=5,n=setInterval(()=>{t("Starting in ".concat(e," seconds...")),e-=1},1e3);setTimeout(()=>{clearInterval(n),t("starting..."),c.push("/dashboard")},5e3)}},[n,c]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"flex flex-col content-center justify-center text-center",children:[(0,r.jsx)("h3",{children:e}),(0,r.jsx)("div",{className:"mx-auto flex content-center justify-center",children:(0,r.jsx)(d.Z,{data:n})}),(0,r.jsx)(l.z,{asChild:!0,...n?{}:{disabled:!0},children:(0,r.jsxs)(s(),{href:"/dashboard",children:["Dashboard"," ",n?(0,r.jsx)(o.Z,{}):(0,r.jsx)(i.Z,{className:"ml-2 h-4 w-4 animate-spin"})]})})]})})}},7478:function(e,t,n){"use strict";n.d(t,{H_:function(){return o},Vs:function(){return r}});let r=(e,t)=>{let n;return Promise.race([e,new Promise((e,r)=>n=setTimeout(()=>r(Error("timeout")),t))]).finally(()=>clearTimeout(n))},a=e=>new Promise(t=>setTimeout(t,e)),o=(e,t,n)=>new Promise((r,i)=>e().then(r).catch(c=>n>0?a(t).then(o.bind(null,e,t,n-1)).then(r).catch(e=>{let t="Operation failed";e instanceof Error&&(t=e.message),i(t)}):i(c)))}},function(e){e.O(0,[664,734,646,592,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);