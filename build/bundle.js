var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function u(t){t.parentNode.removeChild(t)}function a(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function f(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function d(){return p(" ")}function h(){return p("")}function m(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function _(t,n){for(let e=0;e<t.options.length;e+=1){const o=t.options[e];if(o.__value===n)return void(o.selected=!0)}t.selectedIndex=-1}let y;function b(t){y=t}function v(){if(!y)throw new Error("Function called outside component initialization");return y}function w(t){v().$$.on_mount.push(t)}function x(){const t=v();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function E(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const k=[],j=[],O=[],C=[],S=Promise.resolve();let A=!1;function R(){A||(A=!0,S.then(D))}function I(){return R(),S}function L(t){O.push(t)}let q=!1;const N=new Set;function D(){if(!q){q=!0;do{for(let t=0;t<k.length;t+=1){const n=k[t];b(n),P(n.$$)}for(b(null),k.length=0;j.length;)j.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];N.has(n)||(N.add(n),n())}O.length=0}while(k.length);for(;C.length;)C.pop()();A=!1,q=!1,N.clear()}}function P(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const T=new Set;let U;function z(){U={r:0,c:[],p:U}}function Y(){U.r||r(U.c),U=U.p}function X(t,n){t&&t.i&&(T.delete(t),t.i(n))}function F(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),U.c.push((()=>{T.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function M(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=n[s];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[s]=i}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function B(t){return"object"==typeof t&&null!==t?t:{}}function H(t){t&&t.c()}function J(t,n,o,c){const{fragment:i,on_mount:l,on_destroy:u,after_update:a}=t.$$;i&&i.m(n,o),c||L((()=>{const n=l.map(e).filter(s);u?u.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(L)}function W(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function G(n,e,s,c,i,l,a,f=[-1]){const p=y;b(n);const d=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:e.context||[]),callbacks:o(),dirty:f,skip_bound:!1,root:e.target||p.$$.root};a&&a(d.root);let h=!1;if(d.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&function(t,n){-1===t.$$.dirty[0]&&(k.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(n,t)),e})):[],d.update(),h=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(u)}else d.fragment&&d.fragment.c();e.intro&&X(n.$$.fragment),J(n,e.target,e.anchor,e.customElement),D()}b(p)}class K{$destroy(){W(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=[];function V(t,n){return{subscribe:Z(t,n).subscribe}}function Z(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!Q.length;for(const t of r)t[1](),Q.push(t,n);if(t){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,i=t){const l=[c,i];return r.add(l),1===r.size&&(o=e(s)||t),c(n),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}function tt(n,e,o){const c=!Array.isArray(n),i=c?[n]:n,l=e.length<2;return V(o,(n=>{let o=!1;const u=[];let a=0,f=t;const p=()=>{if(a)return;f();const o=e(c?u[0]:u,n);l?n(o):f=s(o)?o:t},d=i.map(((n,e)=>function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(n,(t=>{u[e]=t,a&=~(1<<e),o&&p()}),(()=>{a|=1<<e}))));return o=!0,p(),function(){r(d),f()}}))}function nt(t){let e,o,r;const s=[t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[7])),{c(){e&&H(e.$$.fragment),o=h()},m(t,n){e&&J(e,t,n),l(t,o,n),r=!0},p(t,n){const r=4&n?M(s,[B(t[2])]):{};if(c!==(c=t[0])){if(e){z();const t=e;F(t.$$.fragment,1,0,(()=>{W(t,1)})),Y()}c?(e=new c(i()),e.$on("routeEvent",t[7]),H(e.$$.fragment),X(e.$$.fragment,1),J(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&X(e.$$.fragment,t),r=!0)},o(t){e&&F(e.$$.fragment,t),r=!1},d(t){t&&u(o),e&&W(e,t)}}}function et(t){let e,o,r;const s=[{params:t[1]},t[2]];var c=t[0];function i(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return c&&(e=new c(i()),e.$on("routeEvent",t[6])),{c(){e&&H(e.$$.fragment),o=h()},m(t,n){e&&J(e,t,n),l(t,o,n),r=!0},p(t,n){const r=6&n?M(s,[2&n&&{params:t[1]},4&n&&B(t[2])]):{};if(c!==(c=t[0])){if(e){z();const t=e;F(t.$$.fragment,1,0,(()=>{W(t,1)})),Y()}c?(e=new c(i()),e.$on("routeEvent",t[6]),H(e.$$.fragment),X(e.$$.fragment,1),J(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&X(e.$$.fragment,t),r=!0)},o(t){e&&F(e.$$.fragment,t),r=!1},d(t){t&&u(o),e&&W(e,t)}}}function ot(t){let n,e,o,r;const s=[et,nt],c=[];function i(t,n){return t[1]?0:1}return n=i(t),e=c[n]=s[n](t),{c(){e.c(),o=h()},m(t,e){c[n].m(t,e),l(t,o,e),r=!0},p(t,[r]){let l=n;n=i(t),n===l?c[n].p(t,r):(z(),F(c[l],1,1,(()=>{c[l]=null})),Y(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),X(e,1),e.m(o.parentNode,o))},i(t){r||(X(e),r=!0)},o(t){F(e),r=!1},d(t){c[n].d(t),t&&u(o)}}}function rt(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const st=V(null,(function(t){t(rt());const n=()=>{t(rt())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));tt(st,(t=>t.location)),tt(st,(t=>t.querystring));const ct=Z(void 0);function it(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class c{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,c=[],i="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)"*"===(e=r[0])?(c.push("wild"),i+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),i+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(i+=(~o?"?":"")+"\\"+r.substring(s))):i+="/"+r;return{keys:c,pattern:new RegExp("^"+i+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const i=[];o instanceof Map?o.forEach(((t,n)=>{i.push(new c(n,t))})):Object.keys(o).forEach((t=>{i.push(new c(t,o[t]))}));let l=null,u=null,a={};const f=x();async function p(t,n){await I(),f(t,n)}let d=null,h=null;var m;s&&(h=t=>{d=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),m=()=>{d?window.scrollTo(d.__svelte_spa_router_scrollX,d.__svelte_spa_router_scrollY):window.scrollTo(0,0)},v().$$.after_update.push(m));let g=null,$=null;const _=st.subscribe((async t=>{g=t;let n=0;for(;n<i.length;){const o=i[n].match(t.location);if(!o){n++;continue}const r={route:i[n].path,location:t.location,querystring:t.querystring,userData:i[n].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await i[n].checkConditions(r))return e(0,l=null),$=null,void p("conditionsFailed",r);p("routeLoading",Object.assign({},r));const s=i[n].component;if($!=s){s.loading?(e(0,l=s.loading),$=s,e(1,u=s.loadingParams),e(2,a={}),p("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:u}))):(e(0,l=null),$=null);const n=await s();if(t!=g)return;e(0,l=n&&n.default||n),$=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,u=o):e(1,u=null),e(2,a=i[n].props),void p("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:u})).then((()=>{ct.set(u)}))}e(0,l=null),$=null,ct.set(void 0)}));return function(t){v().$$.on_destroy.push(t)}((()=>{_(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[l,u,a,o,r,s,function(n){E.call(this,t,n)},function(n){E.call(this,t,n)}]}class lt extends K{constructor(t){super(),G(this,t,it,ot,c,{routes:3,prefix:4,restoreScrollState:5})}}function ut(t,n,e){const o=t.slice();return o[2]=n[e],o}function at(t){let n;return{c(){n=f("p"),n.textContent="loading..."},m(t,e){l(t,n,e)},d(t){t&&u(n)}}}function ft(t){let n,e,o=t[2].kanji+"";return{c(){n=f("p"),e=p(o)},m(t,o){l(t,n,o),i(n,e)},p(t,n){1&n&&o!==(o=t[2].kanji+"")&&$(e,o)},d(t){t&&u(n)}}}function pt(n){let e,o=n[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=ft(ut(n,o,t));let s=null;return o.length||(s=at()),{c(){e=f("main");for(let t=0;t<r.length;t+=1)r[t].c();s&&s.c()},m(t,n){l(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null);s&&s.m(e,null)},p(t,[n]){if(1&n){let c;for(o=t[0],c=0;c<o.length;c+=1){const s=ut(t,o,c);r[c]?r[c].p(s,n):(r[c]=ft(s),r[c].c(),r[c].m(e,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length,o.length?s&&(s.d(1),s=null):s||(s=at(),s.c(),s.m(e,null))}},i:t,o:t,d(t){t&&u(e),a(r,t),s&&s.d()}}}function dt(t,n,e){let{params:o={}}=n,r=[];return w((async function(){const t=await fetch("cardData/"+o.id+".json");let n=await t.json();e(0,r=n.list)})),t.$$set=t=>{"params"in t&&e(1,o=t.params)},[r,o]}function ht(t,n,e){const o=t.slice();return o[3]=n[e],o}function mt(t){let n;return{c(){n=f("p"),n.textContent="loading..."},m(t,e){l(t,n,e)},d(t){t&&u(n)}}}function gt(t){let n,e,o,r,s=decodeURIComponent(t[3])+"";return{c(){n=f("option"),e=p(s),o=p(";\n        "),n.__value=r=t[3],n.value=n.__value},m(t,r){l(t,n,r),i(n,e),i(n,o)},p(t,o){2&o&&s!==(s=decodeURIComponent(t[3])+"")&&$(e,s),2&o&&r!==(r=t[3])&&(n.__value=r,n.value=n.__value)},d(t){t&&u(n)}}}function $t(n){let e,o,r,s=n[1],c=[];for(let t=0;t<s.length;t+=1)c[t]=gt(ht(n,s,t));let i=null;return s.length||(i=mt()),{c(){e=f("select");for(let t=0;t<c.length;t+=1)c[t].c();i&&i.c(),void 0===n[0]&&L((()=>n[2].call(e)))},m(t,s){l(t,e,s);for(let t=0;t<c.length;t+=1)c[t].m(e,null);i&&i.m(e,null),_(e,n[0]),o||(r=m(e,"change",n[2]),o=!0)},p(t,[n]){if(2&n){let o;for(s=t[1],o=0;o<s.length;o+=1){const r=ht(t,s,o);c[o]?c[o].p(r,n):(c[o]=gt(r),c[o].c(),c[o].m(e,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=s.length,s.length?i&&(i.d(1),i=null):i||(i=mt(),i.c(),i.m(e,null))}3&n&&_(e,t[0])},i:t,o:t,d(t){t&&u(e),a(c,t),i&&i.d(),o=!1,r()}}}function _t(t,n,e){let o=[];w((async function(){const t=await fetch("cardData/index.json");let n=await t.json();e(1,o=n.list)}));let{listOption:r=""}=n;return t.$$set=t=>{"listOption"in t&&e(0,r=t.listOption)},[r,o,function(){r=function(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}(this),e(0,r),e(1,o)}]}class yt extends K{constructor(t){super(),G(this,t,_t,$t,c,{listOption:0})}}function bt(t){let n,e,o,r,s,c,a,h,_,y,b,v,w,x,E=decodeURIComponent(t[0])+"";function k(n){t[1](n)}let O={};return void 0!==t[0]&&(O.listOption=t[0]),c=new yt({props:O}),j.push((()=>function(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}(c,"listOption",k))),{c(){n=f("main"),e=f("h1"),e.textContent="Hello AP JAPENSE!",o=d(),r=f("p"),r.textContent="Please select any quizlet you want to study",s=d(),H(c.$$.fragment),h=d(),_=f("button"),y=p("Construct Test for "),b=p(E),g(e,"class","svelte-1tky8bj"),g(n,"class","svelte-1tky8bj")},m(u,a){l(u,n,a),i(n,e),i(n,o),i(n,r),i(n,s),J(c,n,null),i(n,h),i(n,_),i(_,y),i(_,b),v=!0,w||(x=m(_,"click",t[2]),w=!0)},p(t,[n]){const e={};var o;!a&&1&n&&(a=!0,e.listOption=t[0],o=()=>a=!1,C.push(o)),c.$set(e),(!v||1&n)&&E!==(E=decodeURIComponent(t[0])+"")&&$(b,E)},i(t){v||(X(c.$$.fragment,t),v=!0)},o(t){F(c.$$.fragment,t),v=!1},d(t){t&&u(n),W(c),w=!1,x()}}}function vt(t,n,e){let o;return e(0,o=""),[o,function(t){o=t,e(0,o)},()=>async function(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await I(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0,void 0),window.location.hash=("#"==t.charAt(0)?"":"#")+t}("/test/"+o)]}const wt={"/":class extends K{constructor(t){super(),G(this,t,vt,bt,c,{})}},"/test/:id":class extends K{constructor(t){super(),G(this,t,dt,pt,c,{params:1})}}};function xt(n){let e,o;return e=new lt({props:{routes:wt}}),{c(){H(e.$$.fragment)},m(t,n){J(e,t,n),o=!0},p:t,i(t){o||(X(e.$$.fragment,t),o=!0)},o(t){F(e.$$.fragment,t),o=!1},d(t){W(e,t)}}}function Et(t){return[]}return new class extends K{constructor(t){super(),G(this,t,Et,xt,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
