"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[338],{2007:function(e,t,n){n.d(t,{p4:function(){return i},qO:function(){return l}});let r=e=>null!=e,l=e=>!!r(e)&&(1===e.length&&"text"in e[0]?!!e[0].text:!!e.length),i=e=>r(e)&&("id"in e||"url"in e)},4803:function(e,t,n){n.d(t,{g:function(){return i}});var r=n(7437),l=n(7042);function i(e){let{as:t="div",size:n="base",className:i,children:u}=e;return(0,r.jsx)(t,{className:(0,l.Z)("px-4 py-8 md:px-6 md:py-10 lg:py-12",i),children:(0,r.jsx)("div",{className:(0,l.Z)("mx-auto w-full","small"===n&&"max-w-xl","base"===n&&"max-w-3xl","wide"===n&&"max-w-4xl","widest"===n&&"max-w-6xl"),children:u})})}},4338:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var r=n(7437),l=n(5444),i=n(2265),u=n(2007);let a=(e,t=" ")=>{let n="";for(let r=0;r<e.length;r++)"text"in e[r]&&(n+=(n?t:"")+e[r].text);return n},s=(e,...t)=>{if(!e)return null;{let[n]=t;return a(e,("string"==typeof n?{separator:n}:{...n}).separator)}};n(2601);let f=e=>i.useMemo(()=>{if(!(0,u.qO)(e.field))return null!=e.fallback?(0,r.jsx)(r.Fragment,{children:e.fallback}):null;{let t=s(e.field,e.separator);return(0,r.jsx)(r.Fragment,{children:t})}},[e.field,e.fallback,e.separator]);var c=n(4803),o=e=>{let{slice:t}=e;return(0,r.jsx)(c.g,{as:"section",size:"wide",children:l.qO(t.primary.quote)&&(0,r.jsxs)("div",{className:"font-serif text-3xl italic leading-relaxed",children:["“",(0,r.jsx)(f,{field:t.primary.quote}),"”",l.Nn(t.primary.source)&&(0,r.jsxs)(r.Fragment,{children:[" — ",t.primary.source]})]})})}},5444:function(e,t,n){n.d(t,{BH:function(){return i},Nn:function(){return u},qO:function(){return l}});let r=e=>null!=e,l=e=>!!r(e)&&(1===e.length&&"text"in e[0]?!!e[0].text:!!e.length),i=e=>r(e)&&!!e.url,u=e=>r(u)&&!!e},7042:function(e,t,n){t.Z=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(l&&(l+=" "),l+=r);else for(n in t)t[n]&&(l&&(l+=" "),l+=n)}return l}(e))&&(r&&(r+=" "),r+=t);return r}}}]);