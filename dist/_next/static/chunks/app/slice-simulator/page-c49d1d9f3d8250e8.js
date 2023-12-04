(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71],{2601:function(e,t,i){"use strict";var s,r;e.exports=(null==(s=i.g.process)?void 0:s.env)&&"object"==typeof(null==(r=i.g.process)?void 0:r.env)?i.g.process:i(8960)},906:function(e,t,i){Promise.resolve().then(i.bind(i,9367))},8811:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let s=i(1024);i(2265);let r=s._(i(7075));function n(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){let i=r.default,s={loading:e=>{let{error:t,isLoading:i,pastDelay:s}=e;return null}};"function"==typeof e&&(s.loader=e),Object.assign(s,t);let o=s.loader;return i({...s,loader:()=>null!=o?o().then(n):Promise.resolve(n(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9167:function(e,t,i){"use strict";function s(e){let{children:t}=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return s}}),i(1283)},7075:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let s=i(1024),r=s._(i(2265)),n=i(9167),o=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function i(e){let i=t.loading,s=r.default.createElement(i,{isLoading:!0,pastDelay:!0,error:null}),o=t.ssr?r.default.Fragment:n.NoSSR,a=t.lazy;return r.default.createElement(r.default.Suspense,{fallback:s},r.default.createElement(o,null,r.default.createElement(a,e)))}return t.lazy=r.default.lazy(t.loader),i.displayName="LoadableComponent",i}},9367:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return eP}});var s,r,n,o,a,l,c,u,d,_,h,p=i(7437),f=i(2265);let m=(e,t=16)=>{let i=0,s=null;return function(...r){let n=Date.now(),o=n-i;o>=t?(e.apply(this,r),i=n):(s&&clearTimeout(s),s=setTimeout(()=>{e.apply(this,r),i=Date.now()},t-o))}};(s=a||(a={})).SetActiveSlice="setActiveSlice",s.SetSliceZoneSize="setSliceZoneSize",(r=l||(l={})).Ping="ping",r.SetSliceZone="setSliceZone",r.ScrollToSlice="scrollToSlice",(n=c||(c={})).Slices="slices",n.ActiveSlice="activeSlice",n.Message="message";var y=i(8576);(u||(u={})).Connect="connect",(d||(d={})).Ready="ready";var g=Object.defineProperty,v=(e,t,i)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,b=(e,t,i)=>(v(e,"symbol"!=typeof t?t+"":t,i),i);class w extends Error{constructor(e){super(e.msg),b(this,"response"),this.response=e}}class S extends Error{constructor(e){super("Too many concurrent requests"),b(this,"request"),this.request=e}}class q extends Error{constructor(e){super(`Request \`${e.requestID}\` timed out`),b(this,"request"),this.request=e}}class x extends Error{}class I extends Error{constructor(){super("Port is not set")}}let T=0,R=(e,t,i="")=>({requestID:`${i}${T++}`,type:e,data:t}),P=(e,t,i=200)=>{var s;if(i>=400)throw TypeError(`Invalid success status code, expected status to be within \`[100;400[\`, got \`${i}\``);return{requestID:e,status:i,msg:(null==(s=y.message[i])?void 0:s.replace(/\.$/,"").toLowerCase())??"",data:t}},E=(e,t,i=400)=>{var s;if(i<400)throw TypeError(`Invalid error status code, expected status to be within \`[500;600[\`, got \`${i}\``);return{requestID:e,status:i,msg:(null==(s=y.message[i])?void 0:s.replace(/\.$/,"").toLowerCase())??"",error:t}},O=e=>{if("object"!=typeof e||null===e)throw TypeError(`Invalid message received, expected message to be of type \`object\`, got \`${typeof e}\``);if(Object.keys(e).every(e=>["requestID","type","data","status","msg","error"].includes(e))){if("string"!=typeof e.requestID)throw TypeError(`Invalid message received, expected \`message.requestID\` to be of type \`string\`, got \`${typeof e.id}\``)}else throw TypeError(`Invalid message received: ${JSON.stringify(e)}`);return e},j=e=>"type"in e,A=e=>!("type"in e),D=e=>A(e)&&!("error"in e);var M=Object.defineProperty,L=(e,t,i)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,N=(e,t,i)=>(L(e,"symbol"!=typeof t?t+"":t,i),i);let $={debug:!1,maximumRequestConcurrency:20,defaultTimeout:5e3,requestIDPrefix:"channel-"};class k{constructor(e,t){N(this,"requestHandlers"),N(this,"options"),N(this,"_port",null),N(this,"_pendingRequests",new Map),this.requestHandlers=e,this.options={...$,...t}}get port(){if(!this._port)throw new I;return this._port}set port(e){this._port&&(this._port.onmessage=null),this._port=e,this._port&&(this._port.onmessage=this.onMessage.bind(this))}createRequestMessage(e,t){return R(e,t,this.options.requestIDPrefix)}async onMessage(e){this.options.debug&&console.debug(e.data);try{let t=O(e.data);if(j(t)){if(this.requestHandlers[t.type])try{let e=await this.requestHandlers[t.type](t,{success:P.bind(this,t.requestID),error:E.bind(this,t.requestID)});this.postResponse(e)}catch(e){this.postResponse(E(t.requestID,e,500))}else this.postResponse(E(t.requestID,void 0,501))}else this._pendingRequests.has(t.requestID)?(this._pendingRequests.get(t.requestID)(t),this._pendingRequests.delete(t.requestID)):console.error(`Unknown request ID received in response: ${JSON.stringify(t)}`)}catch(e){if(e instanceof TypeError)console.warn(e.message);else throw e}}postRequest(e,t=e=>this.port.postMessage(e),i={}){if(this.options.debug&&console.debug(e),this._pendingRequests.size>=this.options.maximumRequestConcurrency)throw new S(e);return new Promise((s,r)=>{let n=setTimeout(()=>{this._pendingRequests.has(e.requestID)&&this._pendingRequests.delete(e.requestID),r(new q(e))},i.timeout||this.options.defaultTimeout);this._pendingRequests.set(e.requestID,e=>{clearTimeout(n),D(e)?s(e):r(new w(e))}),t(e)})}postResponse(e,t=e=>this.port.postMessage(e)){return this.options.debug&&console.debug(e),t(e),e}}var C=Object.defineProperty,z=(e,t,i)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,F=(e,t,i)=>(z(e,"symbol"!=typeof t?t+"":t,i),i);let Z={readyTimeout:2e4,requestIDPrefix:"receiver-"};class U extends k{constructor(e,t){super(e,{...Z,...t}),F(this,"_ready",!1),window.addEventListener("message",e=>{this._onPublicMessage(e)})}async ready(){if(window.parent===window)throw Error("Receiver is currently not embedded as an iframe");this._ready=!1;let e=this.createRequestMessage(d.Ready,void 0),t=await this.postRequest(e,e=>{window.parent.postMessage(e,"*")},{timeout:this.options.readyTimeout});return this._ready=!0,t}_onPublicMessage(e){try{let t=O(e.data);if(j(t)){if(this.options.debug&&console.debug(e.data),t.type===u.Connect){this.port=e.ports[0];let{data:i}=t;this.options={...this.options,...i,debug:this.options.debug,requestIDPrefix:this.options.requestIDPrefix,readyTimeout:this.options.readyTimeout};let s=P(t.requestID,void 0);this.postResponse(s)}else this.postResponse(E(t.requestID,void 0),t=>{e.source.postMessage(t,e.origin)})}else this._ready||this.onMessage(e)}catch(e){if(e instanceof TypeError);else throw e}}postFormattedRequest(e,t,i={}){if(!this._ready)throw new x("Receiver is not ready, use `ChannelReceiver.ready()` first");return this.postRequest(this.createRequestMessage(e,t),void 0,i)}}var H=Object.defineProperty,G=(e,t,i)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,B=(e,t,i)=>(G(e,"symbol"!=typeof t?t+"":t,i),i);let J={requestIDPrefix:"api-",activeSliceAPI:!1,sliceZoneSizeAPI:!1};class V extends U{constructor(e,t){var i,s;let r=(null==t?void 0:t.debug)||/[?&]debug=true/i.test(decodeURIComponent(window.location.search));super({[l.Ping]:(e,t)=>t.success("pong"),...e},{...J,...t,debug:r}),B(this,_,async e=>await this.postFormattedRequest(a.SetActiveSlice,e)),B(this,h,async e=>await this.postFormattedRequest(a.SetSliceZoneSize,e)),r&&(window.prismic||(window.prismic={}),(i=window.prismic).sliceSimulator||(i.sliceSimulator={}),(s=window.prismic.sliceSimulator).api||(s.api=[]),window.prismic.sliceSimulator.api.push(this))}}_=a.SetActiveSlice,h=a.SetSliceZoneSize;var Y=Object.defineProperty,K=(e,t,i)=>t in e?Y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,W=(e,t,i)=>(K(e,"symbol"!=typeof t?t+"":t,i),i);class X{constructor(){W(this,"_listeners",{})}on(e,t,i=null){this._listeners[e]=[...this._listeners[e]??[],[t,i]]}off(e,t){this._listeners[e]=(this._listeners[e]??[]).filter(([e,i])=>"function"==typeof t?e!==t:i!==t)}emit(e,t){(this._listeners[e]??[]).forEach(e=>e[0](t))}}let Q="slice-simulator",ee="slice-simulator--root",et=()=>document.querySelector(`.${Q}`),ei=()=>document.querySelector(`.${ee}`),es=e=>{let t=document.querySelector(`.${Q} [data-slice-zone]`);if(t)return t.children.length!==e&&console.warn(`Flagged SliceZone has an unexpected number of children, found ${t.children.length} but expected ${e}. This might lead to unexpected behaviors. Are you sure you tagged the right element?`),t;if(!(t=document.querySelector(`.${Q} .${ee}`)))return null;for(let i=0;i<5;i++){if(t.children.length===e)return t;if(t.children.length)t=t.children[0];else break}return null},er=(e,t)=>{let i=document.elementsFromPoint(t.x,t.y).reverse(),s=i.indexOf(e);if(-1===s)return null;let r=i[s+1];return r||null},en=()=>({zIndex:100,background:"#ffffff"}),eo=()=>[],ea=()=>"";var el=Object.defineProperty,ec=(e,t,i)=>t in e?el(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,eu=(e,t,i)=>(ec(e,"symbol"!=typeof t?t+"":t,i),i);class ed extends X{constructor(e){super(),eu(this,"_slices"),eu(this,"_activeSlice"),eu(this,"_message"),eu(this,"_mouse"),eu(this,"_setActiveSlice",()=>{if(0===this.slices.length){this.activeSlice=null;return}let e=es(this.slices.length);if(!e){this.activeSlice=null;return}let t=er(e,this._mouse);if(!t){this.activeSlice=null;return}let i=Array.prototype.indexOf.call(e.children,t);this.activeSlice={rect:t.getBoundingClientRect(),sliceID:this.slices[i].slice_type,variationID:this.slices[i].variation,index:i}}),eu(this,"setActiveSlice",m(this._setActiveSlice,16)),this._slices=(null==e?void 0:e.slices)||eo(),this._activeSlice=null,this._message="",this._mouse={x:0,y:0}}set slices(e){this._slices=e,this.message="",this.emit(c.Slices,e)}get slices(){return this._slices}set activeSlice(e){this._activeSlice=e,this.emit(c.ActiveSlice,e)}get activeSlice(){return this._activeSlice}set message(e){this._message=e,this.emit(c.Message,e)}get message(){return this._message}async init(){window.addEventListener("mousemove",e=>{this._mouse={x:e.clientX,y:e.clientY}})}setSliceZone(e){this.slices=e}}let e_=(e,t)=>`<a href="${e}" style="text-decoration: underline;">${t||e}<a>`,eh=(o=`   _____ ___          _____ _                 __      __            
  / ___// (_)_______ / ___/(_)___ ___  __  __/ /___ _/ /_____  _____
  \\__ \\/ / / ___/ _ \\\\__ \\/ / __ \`__ \\/ / / / / __ \`/ __/ __ \\/ ___/
 ___/ / / / /__/  __/__/ / / / / / / / /_/ / / /_/ / /_/ /_/ / /    
/____/_/_/\\___/\\___/____/_/_/ /_/ /_/\\__,_/_/\\__,_/\\__/\\____/_/     
                  / /_  __  __   / __ \\_____(_)________ ___  (_)____
                 / __ \\/ / / /  / /_/ / ___/ / ___/ __ \`__ \\/ / ___/
                / /_/ / /_/ /  / ____/ /  / (__  ) / / / / / / /__  
               /_.___/\\__, /  /_/   /_/  /_/____/_/ /_/ /_/_/\\___/  
                     /____/

You're seeing this page because you're accessing Slice simulator
directly, e.g:

  - ${e_("http://localhost:3000/slice-simulator")}



The Slice simulator can only be accessed through Slice Machine or the
Page Builder. To preview your Slices, head over to Slice Machine:

  - ${e_("http://localhost:9999")}



If you believe this is an error, please reach out to us:

  - ${e_("https://github.com/prismicio/slice-machine/issues/new/choose")}





                                                - The Prismic team`,`<div style="word-spacing: initial; white-space: pre; line-height: initial; font-family: monospace; color: #ffffff; mix-blend-mode: difference; padding: 1rem; font-size: 1rem;">${o}</div>`);var ep=Object.defineProperty,ef=(e,t,i)=>t in e?ep(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,em=(e,t,i)=>(ef(e,"symbol"!=typeof t?t+"":t,i),i);class ey{constructor(e){em(this,"state"),em(this,"_api"),em(this,"_initialized"),this.state=new ed(e),this._api=null,this._initialized=!1}async init(){if(!this._initialized){this._initialized=!0,await this.state.init();try{await this._initAPI()}catch(e){e instanceof Error&&"Receiver is currently not embedded as an iframe"===e.message&&!this.state.slices.length&&(this.state.message=eh),console.error(e);return}this._initListeners()}}async _initAPI(){this._api=new V({[l.SetSliceZone]:(e,t)=>(this.state.setSliceZone(e.data),t.success()),[l.ScrollToSlice]:(e,t)=>{var i;if(e.data.sliceIndex<0)return t.error("`sliceIndex` must be > 0",400);if(e.data.sliceIndex>=this.state.slices.length)return t.error(`\`sliceIndex\` must be < ${this.state.slices.length} (\`<SliceZone />\` current length)`,400);let s=es(this.state.slices.length);if(!s)return t.error("Failed to find `<SliceZone />`",500);this.state.activeSlice=null;let r=s.children[e.data.sliceIndex];return r?(r.scrollIntoView({behavior:e.data.behavior,block:e.data.block,inline:e.data.inline}),(null==(i=this._api)?void 0:i.options.activeSliceAPI)&&setTimeout(this.state.setActiveSlice,750),t.success()):t.error("Failed fo find slice at index $`{req.data.sliceIndex}` in `<SliceZone />`",500)}}),await this._api.ready()}_initListeners(){var e,t;if((null==(e=this._api)?void 0:e.options.activeSliceAPI)&&(window.addEventListener("mousemove",()=>{this.state.setActiveSlice()}),window.addEventListener("resize",()=>{this.state.setActiveSlice()}),window.addEventListener("mousewheel",()=>{setTimeout(this.state.setActiveSlice,200)}),this.state.on(c.Slices,()=>{this.state.setActiveSlice()}),this.state.on(c.ActiveSlice,async e=>{if(this._api)try{await this._api.setActiveSlice(e)}catch(e){if(e instanceof w&&400===e.response.status)console.error(e.response);else throw e}})),null==(t=this._api)?void 0:t.options.sliceZoneSizeAPI){let e=new ResizeObserver(m(async e=>{let[t]=e;if(this._api&&t)try{await this._api.setSliceZoneSize({rect:t.contentRect})}catch(e){if(e instanceof w&&400===e.response.status)console.error(e.response);else throw e}},16)),t=new MutationObserver(()=>{let t=ei();e.disconnect(),t&&e.observe(t)});t.observe(et(),{subtree:!1,childList:!0})}}}let eg=e=>{e.preventDefault(),e.stopPropagation()},ev=e=>{e.path&&e.path.slice(0,5).some(e=>e instanceof HTMLAnchorElement)&&(e.preventDefault(),e.stopPropagation())},eb=new ey,ew=({sliceZone:e,background:t,zIndex:i,className:s})=>{let r=en(),[n,o]=f.useState(()=>eo()),[a,l]=f.useState(()=>ea());return f.useEffect(()=>(eb.state.on(c.Slices,e=>{o(e)},"simulator-slices"),eb.state.on(c.Message,e=>{l(e)},"simulator-message"),eb.init(),()=>{eb.state.off(c.Slices,"simulator-slices"),eb.state.off(c.Message,"simulator-message")}),[]),(0,p.jsx)("div",{className:[Q,s].filter(Boolean).join(" "),style:{zIndex:void 0===i?r.zIndex:i??void 0,position:"fixed",top:0,left:0,width:"100%",height:"100vh",overflow:"auto",background:void 0===t?r.background:t??void 0},children:a?(0,p.jsx)("article",{dangerouslySetInnerHTML:{__html:a}}):n.length?(0,p.jsx)("div",{id:"root",className:ee,onClickCapture:ev,onSubmitCapture:eg,children:(0,p.jsx)(e,{slices:n})}):null})},eS=e=>{let t=e.replace(/(?:-|_)(\w)/g,(e,t)=>t?t.toUpperCase():"");return t[0].toUpperCase()+t.slice(1)};i(2601);let eq=({slice:e})=>null;function ex({slices:e=[],components:t={},resolver:i,defaultComponent:s=eq,context:r={}}){let n=e.map((n,o)=>{let a="slice_type"in n?n.slice_type:n.type,l=t[a]||s;if(i){let e=i({slice:n,sliceName:eS(a),i:o});e&&(l=e)}let c="id"in n&&n.id?n.id:`${o}-${JSON.stringify(n)}`;if(!n.__mapped)return(0,p.jsx)(l,{slice:n,index:o,slices:e,context:r},c);{let{__mapped:e,...t}=n;return(0,p.jsx)(l,{...t},c)}});return(0,p.jsx)(p.Fragment,{children:n})}var eI=i(8811),eT=i.n(eI);let eR={contact:eT()(()=>i.e(463).then(i.bind(i,5463)),{loadableGenerated:{webpack:()=>[5463]}}),contact_form:eT()(()=>i.e(588).then(i.bind(i,4588)),{loadableGenerated:{webpack:()=>[4588]}}),image:eT()(()=>Promise.all([i.e(733),i.e(346),i.e(962),i.e(878)]).then(i.bind(i,6463)),{loadableGenerated:{webpack:()=>[6463]}}),quote:eT()(()=>i.e(338).then(i.bind(i,4338)),{loadableGenerated:{webpack:()=>[4338]}}),text:eT()(()=>Promise.all([i.e(733),i.e(962),i.e(780)]).then(i.bind(i,2780)),{loadableGenerated:{webpack:()=>[2780]}})};function eP(){return(0,p.jsx)(ew,{sliceZone:e=>(0,p.jsx)(ex,{...e,components:eR})})}},8960:function(e){!function(){var t={229:function(e){var t,i,s,r=e.exports={};function n(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===n||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:n}catch(e){t=n}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l=[],c=!1,u=-1;function d(){c&&s&&(c=!1,s.length?l=s.concat(l):u=-1,l.length&&_())}function _(){if(!c){var e=a(d);c=!0;for(var t=l.length;t;){for(s=l,l=[];++u<t;)s&&s[u].run();u=-1,t=l.length}s=null,c=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];l.push(new h(e,t)),1!==l.length||c||a(_)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},i={};function s(e){var r=i[e];if(void 0!==r)return r.exports;var n=i[e]={exports:{}},o=!0;try{t[e](n,n.exports,s),o=!1}finally{o&&delete i[e]}return n.exports}s.ab="//";var r=s(229);e.exports=r}()},622:function(e,t,i){"use strict";var s=i(2265),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,i){var s,n={},c=null,u=null;for(s in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)o.call(t,s)&&!l.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:r,type:e,key:c,ref:u,props:n,_owner:a.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},7437:function(e,t,i){"use strict";e.exports=i(622)},8576:function(e,t,i){"use strict";/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var s,r=i(3197);function n(e){if(!Object.prototype.hasOwnProperty.call(o.message,e))throw Error("invalid status code: "+e);return o.message[e]}function o(e){if("number"==typeof e)return n(e);if("string"!=typeof e)throw TypeError("code must be a number or string");var t=parseInt(e,10);return isNaN(t)?function(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(o.code,t))throw Error('invalid status message: "'+e+'"');return o.code[t]}(e):n(t)}e.exports=o,o.message=r,o.code=(s={},Object.keys(r).forEach(function(e){var t=r[e],i=Number(e);s[t.toLowerCase()]=i}),s),o.codes=Object.keys(r).map(function(e){return Number(e)}),o.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0},o.empty={204:!0,205:!0,304:!0},o.retry={502:!0,503:!0,504:!0}},3197:function(e){"use strict";e.exports=JSON.parse('{"100":"Continue","101":"Switching Protocols","102":"Processing","103":"Early Hints","200":"OK","201":"Created","202":"Accepted","203":"Non-Authoritative Information","204":"No Content","205":"Reset Content","206":"Partial Content","207":"Multi-Status","208":"Already Reported","226":"IM Used","300":"Multiple Choices","301":"Moved Permanently","302":"Found","303":"See Other","304":"Not Modified","305":"Use Proxy","307":"Temporary Redirect","308":"Permanent Redirect","400":"Bad Request","401":"Unauthorized","402":"Payment Required","403":"Forbidden","404":"Not Found","405":"Method Not Allowed","406":"Not Acceptable","407":"Proxy Authentication Required","408":"Request Timeout","409":"Conflict","410":"Gone","411":"Length Required","412":"Precondition Failed","413":"Payload Too Large","414":"URI Too Long","415":"Unsupported Media Type","416":"Range Not Satisfiable","417":"Expectation Failed","418":"I\'m a Teapot","421":"Misdirected Request","422":"Unprocessable Entity","423":"Locked","424":"Failed Dependency","425":"Too Early","426":"Upgrade Required","428":"Precondition Required","429":"Too Many Requests","431":"Request Header Fields Too Large","451":"Unavailable For Legal Reasons","500":"Internal Server Error","501":"Not Implemented","502":"Bad Gateway","503":"Service Unavailable","504":"Gateway Timeout","505":"HTTP Version Not Supported","506":"Variant Also Negotiates","507":"Insufficient Storage","508":"Loop Detected","509":"Bandwidth Limit Exceeded","510":"Not Extended","511":"Network Authentication Required"}')}},function(e){e.O(0,[971,472,744],function(){return e(e.s=906)}),_N_E=e.O()}]);