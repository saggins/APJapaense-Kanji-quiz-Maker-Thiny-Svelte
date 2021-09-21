var app=function(t){"use strict";function n(){}function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function c(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function f(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function h(){return p(" ")}function $(){return p("")}function g(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function _(t,n){for(let e=0;e<t.options.length;e+=1){const o=t.options[e];if(o.__value===n)return void(o.selected=!0)}t.selectedIndex=-1}let b;function w(t){b=t}function v(){if(!b)throw new Error("Function called outside component initialization");return b}function x(t){v().$$.on_mount.push(t)}function E(){const t=v();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function k(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const j=[],O=[],C=[],S=[],A=Promise.resolve();let M=!1;function R(){M||(M=!0,A.then(N))}function L(){return R(),A}function T(t){C.push(t)}let I=!1;const q=new Set;function N(){if(!I){I=!0;do{for(let t=0;t<j.length;t+=1){const n=j[t];w(n),D(n.$$)}for(w(null),j.length=0;O.length;)O.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];q.has(n)||(q.add(n),n())}C.length=0}while(j.length);for(;S.length;)S.pop()();M=!1,I=!1,q.clear()}}function D(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(T)}}const P=new Set;let z;function H(){z={r:0,c:[],p:z}}function U(){z.r||s(z.c),z=z.p}function Y(t,n){t&&t.i&&(P.delete(t),t.i(n))}function F(t,n,e,o){if(t&&t.o){if(P.has(t))return;P.add(t),z.c.push((()=>{P.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function X(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],l=n[s];if(l){for(const t in c)t in l||(o[t]=1);for(const t in l)r[t]||(e[t]=l[t],r[t]=1);t[s]=l}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function K(t){return"object"==typeof t&&null!==t?t:{}}function B(t){t&&t.c()}function J(t,n,e,r){const{fragment:l,on_mount:i,on_destroy:u,after_update:a}=t.$$;l&&l.m(n,e),r||T((()=>{const n=i.map(o).filter(c);u?u.push(...n):s(n),t.$$.on_mount=[]})),a.forEach(T)}function W(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function G(t,e,o,c,l,i,u,f=[-1]){const d=b;w(t);const p=t.$$={fragment:null,ctx:null,props:i,update:n,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:e.context||[]),callbacks:r(),dirty:f,skip_bound:!1,root:e.target||d.$$.root};u&&u(p.root);let h=!1;if(p.ctx=o?o(t,e.props||{},((n,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&l(p.ctx[n],p.ctx[n]=r)&&(!p.skip_bound&&p.bound[n]&&p.bound[n](r),h&&function(t,n){-1===t.$$.dirty[0]&&(j.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}(t,n)),e})):[],p.update(),h=!0,s(p.before_update),p.fragment=!!c&&c(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(a)}else p.fragment&&p.fragment.c();e.intro&&Y(t.$$.fragment),J(t,e.target,e.anchor,e.customElement),N()}w(d)}class Q{$destroy(){W(this,1),this.$destroy=n}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const V=[];function Z(t,n){return{subscribe:tt(t,n).subscribe}}function tt(t,e=n){let o;const r=new Set;function s(n){if(l(t,n)&&(t=n,o)){const n=!V.length;for(const n of r)n[1](),V.push(n,t);if(n){for(let t=0;t<V.length;t+=2)V[t][0](V[t+1]);V.length=0}}}return{set:s,update:function(n){s(n(t))},subscribe:function(c,l=n){const i=[c,l];return r.add(i),1===r.size&&(o=e(s)||n),c(t),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function nt(t,e,o){const r=!Array.isArray(t),l=r?[t]:t,i=e.length<2;return Z(o,(t=>{let o=!1;const u=[];let a=0,f=n;const d=()=>{if(a)return;f();const o=e(r?u[0]:u,t);i?t(o):f=c(o)?o:n},p=l.map(((t,e)=>function(t,...e){if(null==t)return n;const o=t.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(t,(t=>{u[e]=t,a&=~(1<<e),o&&d()}),(()=>{a|=1<<e}))));return o=!0,d(),function(){s(p),f()}}))}function et(t){let n,o,r;const s=[t[2]];var c=t[0];function l(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(l()),n.$on("routeEvent",t[7])),{c(){n&&B(n.$$.fragment),o=$()},m(t,e){n&&J(n,t,e),u(t,o,e),r=!0},p(t,e){const r=4&e?X(s,[K(t[2])]):{};if(c!==(c=t[0])){if(n){H();const t=n;F(t.$$.fragment,1,0,(()=>{W(t,1)})),U()}c?(n=new c(l()),n.$on("routeEvent",t[7]),B(n.$$.fragment),Y(n.$$.fragment,1),J(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&Y(n.$$.fragment,t),r=!0)},o(t){n&&F(n.$$.fragment,t),r=!1},d(t){t&&a(o),n&&W(n,t)}}}function ot(t){let n,o,r;const s=[{params:t[1]},t[2]];var c=t[0];function l(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(l()),n.$on("routeEvent",t[6])),{c(){n&&B(n.$$.fragment),o=$()},m(t,e){n&&J(n,t,e),u(t,o,e),r=!0},p(t,e){const r=6&e?X(s,[2&e&&{params:t[1]},4&e&&K(t[2])]):{};if(c!==(c=t[0])){if(n){H();const t=n;F(t.$$.fragment,1,0,(()=>{W(t,1)})),U()}c?(n=new c(l()),n.$on("routeEvent",t[6]),B(n.$$.fragment),Y(n.$$.fragment,1),J(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&Y(n.$$.fragment,t),r=!0)},o(t){n&&F(n.$$.fragment,t),r=!1},d(t){t&&a(o),n&&W(n,t)}}}function rt(t){let n,e,o,r;const s=[ot,et],c=[];function l(t,n){return t[1]?0:1}return n=l(t),e=c[n]=s[n](t),{c(){e.c(),o=$()},m(t,e){c[n].m(t,e),u(t,o,e),r=!0},p(t,[r]){let i=n;n=l(t),n===i?c[n].p(t,r):(H(),F(c[i],1,1,(()=>{c[i]=null})),U(),e=c[n],e?e.p(t,r):(e=c[n]=s[n](t),e.c()),Y(e,1),e.m(o.parentNode,o))},i(t){r||(Y(e),r=!0)},o(t){F(e),r=!1},d(t){c[n].d(t),t&&a(o)}}}function st(){const t=window.location.href.indexOf("#/");let n=t>-1?window.location.href.substr(t+1):"/";const e=n.indexOf("?");let o="";return e>-1&&(o=n.substr(e+1),n=n.substr(0,e)),{location:n,querystring:o}}const ct=Z(null,(function(t){t(st());const n=()=>{t(st())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}}));nt(ct,(t=>t.location)),nt(ct,(t=>t.querystring));const lt=tt(void 0);function it(t,n,e){let{routes:o={}}=n,{prefix:r=""}=n,{restoreScrollState:s=!1}=n;class c{constructor(t,n){if(!n||"function"!=typeof n&&("object"!=typeof n||!0!==n._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:e,keys:o}=function(t,n){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,o,r,s,c=[],l="",i=t.split("/");for(i[0]||i.shift();r=i.shift();)"*"===(e=r[0])?(c.push("wild"),l+="/(.*)"):":"===e?(o=r.indexOf("?",1),s=r.indexOf(".",1),c.push(r.substring(1,~o?o:~s?s:r.length)),l+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(l+=(~o?"?":"")+"\\"+r.substring(s))):l+="/"+r;return{keys:c,pattern:new RegExp("^"+l+(n?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof n&&!0===n._sveltesparouter?(this.component=n.component,this.conditions=n.conditions||[],this.userData=n.userData,this.props=n.props||{}):(this.component=()=>Promise.resolve(n),this.conditions=[],this.props={}),this._pattern=e,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const n=t.match(r);if(!n||!n[0])return null;t=t.substr(n[0].length)||"/"}const n=this._pattern.exec(t);if(null===n)return null;if(!1===this._keys)return n;const e={};let o=0;for(;o<this._keys.length;){try{e[this._keys[o]]=decodeURIComponent(n[o+1]||"")||null}catch(t){e[this._keys[o]]=null}o++}return e}async checkConditions(t){for(let n=0;n<this.conditions.length;n++)if(!await this.conditions[n](t))return!1;return!0}}const l=[];o instanceof Map?o.forEach(((t,n)=>{l.push(new c(n,t))})):Object.keys(o).forEach((t=>{l.push(new c(t,o[t]))}));let i=null,u=null,a={};const f=E();async function d(t,n){await L(),f(t,n)}let p=null,h=null;var $;s&&(h=t=>{p=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),$=()=>{p?window.scrollTo(p.__svelte_spa_router_scrollX,p.__svelte_spa_router_scrollY):window.scrollTo(0,0)},v().$$.after_update.push($));let g=null,m=null;const y=ct.subscribe((async t=>{g=t;let n=0;for(;n<l.length;){const o=l[n].match(t.location);if(!o){n++;continue}const r={route:l[n].path,location:t.location,querystring:t.querystring,userData:l[n].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await l[n].checkConditions(r))return e(0,i=null),m=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=l[n].component;if(m!=s){s.loading?(e(0,i=s.loading),m=s,e(1,u=s.loadingParams),e(2,a={}),d("routeLoaded",Object.assign({},r,{component:i,name:i.name,params:u}))):(e(0,i=null),m=null);const n=await s();if(t!=g)return;e(0,i=n&&n.default||n),m=s}return o&&"object"==typeof o&&Object.keys(o).length?e(1,u=o):e(1,u=null),e(2,a=l[n].props),void d("routeLoaded",Object.assign({},r,{component:i,name:i.name,params:u})).then((()=>{lt.set(u)}))}e(0,i=null),m=null,lt.set(void 0)}));return function(t){v().$$.on_destroy.push(t)}((()=>{y(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&e(3,o=t.routes),"prefix"in t&&e(4,r=t.prefix),"restoreScrollState"in t&&e(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[i,u,a,o,r,s,function(n){k.call(this,t,n)},function(n){k.call(this,t,n)}]}class ut extends Q{constructor(t){super(),G(this,t,it,rt,l,{routes:3,prefix:4,restoreScrollState:5})}}function at(t,n,e){const o=t.slice();return o[4]=n[e],o}function ft(t,n,e){const o=t.slice();return o[4]=n[e],o}function dt(t){let n,e;return{c(){n=d("h4"),n.textContent="Fill in the blank",e=p("\n            Things and stuff with stuff and things."),m(n,"class","alert-heading text-capitalize")},m(t,o){u(t,n,o),u(t,e,o)},d(t){t&&a(n),t&&a(e)}}}function pt(n){let e,o;return e=new t.Alert({props:{color:"dark",$$slots:{default:[dt]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment)},m(t,n){J(e,t,n),o=!0},p(t,n){const o={};512&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(Y(e.$$.fragment,t),o=!0)},o(t){F(e.$$.fragment,t),o=!1},d(t){W(e,t)}}}function ht(t){let n;return{c(){n=d("p"),n.textContent="loading..."},m(t,e){u(t,n,e)},d(t){t&&a(n)}}}function $t(t){let n,e,o,r,s,c,l,f,$=t[4].kanji+"";return{c(){n=d("tr"),e=d("td"),o=p($),r=h(),s=d("td"),c=h(),l=d("td"),f=h()},m(t,a){u(t,n,a),i(n,e),i(e,o),i(n,r),i(n,s),i(n,c),i(n,l),i(n,f)},p(t,n){1&n&&$!==($=t[4].kanji+"")&&y(o,$)},d(t){t&&a(n)}}}function gt(t){let n,e,o,r=t[0],s=[];for(let n=0;n<r.length;n+=1)s[n]=$t(ft(t,r,n));let c=null;return r.length||(c=ht()),{c(){n=d("thead"),n.innerHTML="<tr><th>Kanji</th> \n                <th>Hirigana</th> \n                <th>English</th></tr>",e=h(),o=d("tbody");for(let t=0;t<s.length;t+=1)s[t].c();c&&c.c()},m(t,r){u(t,n,r),u(t,e,r),u(t,o,r);for(let t=0;t<s.length;t+=1)s[t].m(o,null);c&&c.m(o,null)},p(t,n){if(1&n){let e;for(r=t[0],e=0;e<r.length;e+=1){const c=ft(t,r,e);s[e]?s[e].p(c,n):(s[e]=$t(c),s[e].c(),s[e].m(o,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=r.length,r.length?c&&(c.d(1),c=null):c||(c=ht(),c.c(),c.m(o,null))}},d(t){t&&a(n),t&&a(e),t&&a(o),f(s,t),c&&c.d()}}}function mt(t){let n;return{c(){n=d("p"),n.textContent="loading..."},m(t,e){u(t,n,e)},d(t){t&&a(n)}}}function yt(t){let n,e,o,r,s,c,l,f,$=t[4].hirigana+"";return{c(){n=d("tr"),e=d("td"),o=h(),r=d("td"),s=p($),c=h(),l=d("td"),f=h()},m(t,a){u(t,n,a),i(n,e),i(n,o),i(n,r),i(r,s),i(n,c),i(n,l),i(n,f)},p(t,n){2&n&&$!==($=t[4].hirigana+"")&&y(s,$)},d(t){t&&a(n)}}}function _t(t){let n,e,o,r=t[1],s=[];for(let n=0;n<r.length;n+=1)s[n]=yt(at(t,r,n));let c=null;return r.length||(c=mt()),{c(){n=d("thead"),n.innerHTML="<tr><th>Kanji</th> \n                <th>Hirigana</th> \n                <th>English</th></tr>",e=h(),o=d("tbody");for(let t=0;t<s.length;t+=1)s[t].c();c&&c.c()},m(t,r){u(t,n,r),u(t,e,r),u(t,o,r);for(let t=0;t<s.length;t+=1)s[t].m(o,null);c&&c.m(o,null)},p(t,n){if(2&n){let e;for(r=t[1],e=0;e<r.length;e+=1){const c=at(t,r,e);s[e]?s[e].p(c,n):(s[e]=yt(c),s[e].c(),s[e].m(o,null))}for(;e<s.length;e+=1)s[e].d(1);s.length=r.length,r.length?c&&(c.d(1),c=null):c||(c=mt(),c.c(),c.m(o,null))}},d(t){t&&a(n),t&&a(e),t&&a(o),f(s,t),c&&c.d()}}}function bt(n){let e,o,r,s;return e=new t.Table({props:{$$slots:{default:[gt]},$$scope:{ctx:n}}}),r=new t.Table({props:{$$slots:{default:[_t]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment),o=h(),B(r.$$.fragment)},m(t,n){J(e,t,n),u(t,o,n),J(r,t,n),s=!0},p(t,n){const o={};513&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};514&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){s||(Y(e.$$.fragment,t),Y(r.$$.fragment,t),s=!0)},o(t){F(e.$$.fragment,t),F(r.$$.fragment,t),s=!1},d(t){W(e,t),t&&a(o),W(r,t)}}}function wt(n){let e,o,r,s;return e=new t.Row({props:{$$slots:{default:[pt]},$$scope:{ctx:n}}}),r=new t.Row({props:{$$slots:{default:[bt]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment),o=h(),B(r.$$.fragment)},m(t,n){J(e,t,n),u(t,o,n),J(r,t,n),s=!0},p(t,n){const o={};512&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o);const s={};515&n&&(s.$$scope={dirty:n,ctx:t}),r.$set(s)},i(t){s||(Y(e.$$.fragment,t),Y(r.$$.fragment,t),s=!0)},o(t){F(e.$$.fragment,t),F(r.$$.fragment,t),s=!1},d(t){W(e,t),t&&a(o),W(r,t)}}}function vt(n){let e,o,r,s;return e=new t.Container({props:{$$slots:{default:[wt]},$$scope:{ctx:n}}}),{c(){B(e.$$.fragment),o=h(),r=d("main")},m(t,n){J(e,t,n),u(t,o,n),u(t,r,n),s=!0},p(t,[n]){const o={};515&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){s||(Y(e.$$.fragment,t),s=!0)},o(t){F(e.$$.fragment,t),s=!1},d(t){W(e,t),t&&a(o),t&&a(r)}}}function xt(t,n,e){let{params:o={}}=n,r=[],s=[],c=[];return x((async function(){const t=await fetch("cardData/"+o.id+".json");let n=await t.json();r=n.list;let l=[];for(let t=0;t<12;t++){let n=Math.floor(Math.random()*r.length);for(;l.includes(n);)n=Math.floor(Math.random()*r.length);e(0,s[t]=r[n],s),l.push(n)}for(let t=0;t<6;t++){let n=Math.floor(Math.random()*r.length);for(;l.includes(n);)n=Math.floor(Math.random()*r.length);e(1,c[t]=r[n],c),l.push(n)}})),t.$$set=t=>{"params"in t&&e(2,o=t.params)},[s,c,o]}function Et(t,n,e){const o=t.slice();return o[3]=n[e],o}function kt(t){let n;return{c(){n=d("p"),n.textContent="loading..."},m(t,e){u(t,n,e)},d(t){t&&a(n)}}}function jt(t){let n,e,o,r,s=decodeURIComponent(t[3])+"";return{c(){n=d("option"),e=p(s),o=p(";\n        "),n.__value=r=t[3],n.value=n.__value},m(t,r){u(t,n,r),i(n,e),i(n,o)},p(t,o){2&o&&s!==(s=decodeURIComponent(t[3])+"")&&y(e,s),2&o&&r!==(r=t[3])&&(n.__value=r,n.value=n.__value)},d(t){t&&a(n)}}}function Ot(t){let e,o,r,s=t[1],c=[];for(let n=0;n<s.length;n+=1)c[n]=jt(Et(t,s,n));let l=null;return s.length||(l=kt()),{c(){e=d("select");for(let t=0;t<c.length;t+=1)c[t].c();l&&l.c(),void 0===t[0]&&T((()=>t[2].call(e)))},m(n,s){u(n,e,s);for(let t=0;t<c.length;t+=1)c[t].m(e,null);l&&l.m(e,null),_(e,t[0]),o||(r=g(e,"change",t[2]),o=!0)},p(t,[n]){if(2&n){let o;for(s=t[1],o=0;o<s.length;o+=1){const r=Et(t,s,o);c[o]?c[o].p(r,n):(c[o]=jt(r),c[o].c(),c[o].m(e,null))}for(;o<c.length;o+=1)c[o].d(1);c.length=s.length,s.length?l&&(l.d(1),l=null):l||(l=kt(),l.c(),l.m(e,null))}3&n&&_(e,t[0])},i:n,o:n,d(t){t&&a(e),f(c,t),l&&l.d(),o=!1,r()}}}function Ct(t,n,e){let o=[];x((async function(){const t=await fetch("cardData/index.json");let n=await t.json();e(1,o=n.list)}));let{listOption:r=""}=n;return t.$$set=t=>{"listOption"in t&&e(0,r=t.listOption)},[r,o,function(){r=function(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}(this),e(0,r),e(1,o)}]}class St extends Q{constructor(t){super(),G(this,t,Ct,Ot,l,{listOption:0})}}function At(t){let n,e,o,r,s,c,l,f,$,_,b,w,v,x,E=decodeURIComponent(t[0])+"";function k(n){t[1](n)}let j={};return void 0!==t[0]&&(j.listOption=t[0]),c=new St({props:j}),O.push((()=>function(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}(c,"listOption",k))),{c(){n=d("main"),e=d("h1"),e.textContent="Hello AP JAPENSE!",o=h(),r=d("p"),r.textContent="Please select any quizlet you want to study",s=h(),B(c.$$.fragment),f=h(),$=d("button"),_=p("Construct Test for "),b=p(E),m(e,"class","svelte-1tky8bj"),m(n,"class","svelte-1tky8bj")},m(l,a){u(l,n,a),i(n,e),i(n,o),i(n,r),i(n,s),J(c,n,null),i(n,f),i(n,$),i($,_),i($,b),w=!0,v||(x=g($,"click",t[2]),v=!0)},p(t,[n]){const e={};var o;!l&&1&n&&(l=!0,e.listOption=t[0],o=()=>l=!1,S.push(o)),c.$set(e),(!w||1&n)&&E!==(E=decodeURIComponent(t[0])+"")&&y(b,E)},i(t){w||(Y(c.$$.fragment,t),w=!0)},o(t){F(c.$$.fragment,t),w=!1},d(t){t&&a(n),W(c),v=!1,x()}}}function Mt(t,n,e){let o;return e(0,o=""),[o,function(t){o=t,e(0,o)},()=>async function(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await L(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0,void 0),window.location.hash=("#"==t.charAt(0)?"":"#")+t}("/test/"+o)]}const Rt={"/":class extends Q{constructor(t){super(),G(this,t,Mt,At,l,{})}},"/test/:id":class extends Q{constructor(t){super(),G(this,t,xt,vt,l,{params:2})}}};function Lt(t){let e,o;return e=new ut({props:{routes:Rt}}),{c(){B(e.$$.fragment)},m(t,n){J(e,t,n),o=!0},p:n,i(t){o||(Y(e.$$.fragment,t),o=!0)},o(t){F(e.$$.fragment,t),o=!1},d(t){W(e,t)}}}function Tt(t){return[]}return new class extends Q{constructor(t){super(),G(this,t,Tt,Lt,l,{})}}({target:document.body,props:{}})}(sveltestrap);
//# sourceMappingURL=bundle.js.map
