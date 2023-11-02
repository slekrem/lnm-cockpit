!// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
function(t,e,i,n,r){/* eslint-disable no-undef */var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof s[n]&&s[n],o=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function h(e,i){if(!o[e]){if(!t[e]){// if we cannot find the module within our internal map or
// cache jump to the current global require ie. the last bundle
// that was added to the page.
var r="function"==typeof s[n]&&s[n];if(!i&&r)return r(e,!0);// If there are other bundles on this page the require from the
// previous one is saved to 'previousRequire'. Repeat this as
// many times as there are bundles until the module is found or
// we exhaust the require chain.
if(a)return a(e,!0);// Try the node require function if it exists.
if(l&&"string"==typeof e)return l(e);var u=Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}d.resolve=function(i){var n=t[e][1][i];return null!=n?n:i},d.cache={};var c=o[e]=new h.Module(e);t[e][0].call(c.exports,d,c,c.exports,this)}return o[e].exports;function d(t){var e=d.resolve(t);return!1===e?{}:h(e)}}h.isParcelRequire=!0,h.Module=function(t){this.id=t,this.bundle=h,this.exports={}},h.modules=t,h.cache=o,h.parent=a,h.register=function(e,i){t[e]=[function(t,e){e.exports=i},{}]},Object.defineProperty(h,"root",{get:function(){return s[n]}}),s[n]=h;for(var u=0;u<e.length;u++)h(e[u]);if(i){// Expose entry point to Node, AMD or browser globals
// Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
var c=h(i);// CommonJS
"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):r&&(this[r]=c)}}({"8CgKt":[function(t,e,i){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);var n=t("lit");t("./views/app-view"),t("./components/lnmc-navbar");class r extends n.LitElement{static properties={_isAuthenticated:Boolean};createRenderRoot=()=>this;render=()=>(0,n.html)`
        <lnmc-navbar .isAuthenticated="${this._isAuthenticated}"></lnmc-navbar>
        <app-view .isAuthenticated="${this._isAuthenticated}"></app-view>`;firstUpdated=async()=>{let t=await fetch("/api/auth/is-authenticated"),e=await t.json();this._isAuthenticated=e.isAuthenticated}}i.default=r,customElements.define("app-shell",r)},{lit:"aCmte","./views/app-view":"6FOVO","./components/lnmc-navbar":"9btay","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],aCmte:[function(t,e,i){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i),t("@lit/reactive-element"),t("lit-html");var r=t("lit-element/lit-element.js");n.exportAll(r,i);var s=t("lit-html/is-server.js");n.exportAll(s,i)},{"@lit/reactive-element":"hUcCl","lit-html":"4A25t","lit-element/lit-element.js":"8BOF1","lit-html/is-server.js":"2Mmwb","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hUcCl:[function(t,e,i){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i),n.export(i,"CSSResult",()=>r.CSSResult),n.export(i,"adoptStyles",()=>r.adoptStyles),n.export(i,"css",()=>r.css),n.export(i,"getCompatibleStyle",()=>r.getCompatibleStyle),n.export(i,"supportsAdoptingStyleSheets",()=>r.supportsAdoptingStyleSheets),n.export(i,"unsafeCSS",()=>r.unsafeCSS),n.export(i,"ReactiveElement",()=>y),n.export(i,"defaultConverter",()=>g),n.export(i,"notEqual",()=>b);var r=t("./css-tag.js");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{is:s,defineProperty:a,getOwnPropertyDescriptor:o,getOwnPropertyNames:l,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,c=globalThis,d=c.trustedTypes,f=d?d.emptyScript:"",p=c.reactiveElementPolyfillSupport,m=(t,e)=>t,g={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},b=(t,e)=>!s(t,e),v={attribute:!0,type:String,converter:g,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),c.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&a(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){let{get:n,set:r}=o(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return n?.call(this)},set(e){let s=n?.call(this);r.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??v}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;let t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){let t=this.properties,e=[...l(t),...h(t)];for(let i of e)this.createProperty(i,t[i])}let t=this[Symbol.metadata];if(null!==t){let e=litPropertyMetadata.get(t);if(void 0!==e)for(let[t,i]of e)this.elementProperties.set(t,i)}for(let[t,e]of(this._$Eh=new Map,this.elementProperties)){let i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let t of i)e.unshift((0,r.getCompatibleStyle)(t))}else void 0!==t&&e.push((0,r.getCompatibleStyle)(t));return e}static _$Eu(t,e){let i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return(0,r.adoptStyles)(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){let i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){let r=(void 0!==i.converter?.toAttribute?i.converter:g).toAttribute(e,i.type);this._$Em=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(t,e){let i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){let t=i.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:g;this._$Em=n,this[n]=r.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,n=!1,r){if(void 0!==t){if(!((i??=this.constructor.getPropertyOptions(t)).hasChanged??b)(n?r:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}let t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}let t=this.constructor.elementProperties;if(t.size>0)for(let[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1,e=this._$AL;try{(t=this.shouldUpdate(e))?(this.willUpdate(e),this._$ES?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(t=>this._$EO(t,this[t])),this._$ET()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[m("elementProperties")]=new Map,y[m("finalized")]=new Map,p?.({ReactiveElement:y}),(c.reactiveElementVersions??=[]).push("2.0.0")},{"./css-tag.js":"gSCbb","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gSCbb:[function(t,e,i){/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i),n.export(i,"CSSResult",()=>l),n.export(i,"adoptStyles",()=>c),n.export(i,"css",()=>u),n.export(i,"getCompatibleStyle",()=>d),n.export(i,"supportsAdoptingStyleSheets",()=>s),n.export(i,"unsafeCSS",()=>h);let r=globalThis,s=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class l{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(s&&void 0===t){let i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}let h=t=>new l("string"==typeof t?t:t+"",void 0,a),u=(t,...e)=>{let i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new l(i,t,a)},c=(t,e)=>{if(s)t.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let i of e){let e=document.createElement("style"),n=r.litNonce;void 0!==n&&e.setAttribute("nonce",n),e.textContent=i.cssText,t.appendChild(e)}},d=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return h(e)})(t):t},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(t,e,i){i.interopDefault=function(t){return t&&t.__esModule?t:{default:t}},i.defineInteropFlag=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.exportAll=function(t,e){return Object.keys(t).forEach(function(i){"default"===i||"__esModule"===i||e.hasOwnProperty(i)||Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[i]}})}),e},i.export=function(t,e,i){Object.defineProperty(t,e,{enumerable:!0,get:i})}},{}],"4A25t":[function(t,e,i){/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i),n.export(i,"_$LH",()=>H),n.export(i,"html",()=>S),n.export(i,"noChange",()=>C),n.export(i,"nothing",()=>O),n.export(i,"render",()=>W),n.export(i,"svg",()=>T);let r=globalThis,s=r.trustedTypes,a=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,o="$lit$",l=`lit$${(Math.random()+"").slice(9)}$`,h="?"+l,u=`<${h}>`,c=document,d=()=>c.createComment(""),f=t=>null===t||"object"!=typeof t&&"function"!=typeof t,p=Array.isArray,m=t=>p(t)||"function"==typeof t?.[Symbol.iterator],g="[ 	\n\f\r]",b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,y=/>/g,x=RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,w=/"/g,k=/^(?:script|style|textarea|title)$/i,M=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),S=M(1),T=M(2),C=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),D=new WeakMap,E=c.createTreeWalker(c,129);function P(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(e):e}let A=(t,e)=>{let i=t.length-1,n=[],r,s=2===e?"<svg>":"",a=b;for(let e=0;e<i;e++){let i=t[e],h,c,d=-1,f=0;for(;f<i.length&&(a.lastIndex=f,null!==(c=a.exec(i)));)f=a.lastIndex,a===b?"!--"===c[1]?a=v:void 0!==c[1]?a=y:void 0!==c[2]?(k.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=x):void 0!==c[3]&&(a=x):a===x?">"===c[0]?(a=r??b,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,h=c[1],a=void 0===c[3]?x:'"'===c[3]?w:_):a===w||a===_?a=x:a===v||a===y?a=b:(a=x,r=void 0);let p=a===x&&t[e+1].startsWith("/>")?" ":"";s+=a===b?i+u:d>=0?(n.push(h),i.slice(0,d)+o+i.slice(d)+l+p):i+l+(-2===d?e:p)}return[P(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),n]};class I{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,a=0,u=t.length-1,c=this.parts,[f,p]=A(t,e);if(this.el=I.createElement(f,i),E.currentNode=this.el.content,2===e){let t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=E.nextNode())&&c.length<u;){if(1===n.nodeType){if(n.hasAttributes())for(let t of n.getAttributeNames())if(t.endsWith(o)){let e=p[a++],i=n.getAttribute(t).split(l),s=/([.?@])?(.*)/.exec(e);c.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?N:"?"===s[1]?z:"@"===s[1]?j:F}),n.removeAttribute(t)}else t.startsWith(l)&&(c.push({type:6,index:r}),n.removeAttribute(t));if(k.test(n.tagName)){let t=n.textContent.split(l),e=t.length-1;if(e>0){n.textContent=s?s.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],d()),E.nextNode(),c.push({type:2,index:++r});n.append(t[e],d())}}}else if(8===n.nodeType){if(n.data===h)c.push({type:2,index:r});else{let t=-1;for(;-1!==(t=n.data.indexOf(l,t+1));)c.push({type:7,index:r}),t+=l.length-1}}r++}}static createElement(t,e){let i=c.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,n){if(e===C)return e;let r=void 0!==n?i._$Co?.[n]:i._$Cl,s=f(e)?void 0:e._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(t))._$AT(t,i,n),void 0!==n?(i._$Co??=[])[n]=r:i._$Cl=r),void 0!==r&&(e=L(t,r._$AS(t,e.values),r,n)),e}class ${constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??c).importNode(e,!0);E.currentNode=n;let r=E.nextNode(),s=0,a=0,o=i[0];for(;void 0!==o;){if(s===o.index){let e;2===o.type?e=new R(r,r.nextSibling,this,t):1===o.type?e=new o.ctor(r,o.name,o.strings,this,t):6===o.type&&(e=new V(r,this,t)),this._$AV.push(e),o=i[++a]}s!==o?.index&&(r=E.nextNode(),s++)}return E.currentNode=c,n}p(t){let e=0;for(let i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){f(t=L(this,t,e))?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==C&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):m(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==O&&f(this._$AH)?this._$AA.nextSibling.data=t:this.$(c.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=I.createElement(P(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{let t=new $(n,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new I(t)),e}T(t){p(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,n=0;for(let r of t)n===e.length?e.push(i=new R(this.k(d()),this.k(d()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}_$AI(t,e=this,i,n){let r=this.strings,s=!1;if(void 0===r)(s=!f(t=L(this,t,e,0))||t!==this._$AH&&t!==C)&&(this._$AH=t);else{let n,a;let o=t;for(t=r[0],n=0;n<r.length-1;n++)(a=L(this,o[i+n],e,n))===C&&(a=this._$AH[n]),s||=!f(a)||a!==this._$AH[n],a===O?t=O:t!==O&&(t+=(a??"")+r[n+1]),this._$AH[n]=a}s&&!n&&this.j(t)}j(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class N extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===O?void 0:t}}class z extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==O)}}class j extends F{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=L(this,t,e,0)??O)===C)return;let i=this._$AH,n=t===O&&i!==O||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==O&&(i===O||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}let H={S:o,A:l,P:h,C:1,M:A,L:$,R:m,V:L,D:R,I:F,H:z,N:j,U:N,B:V},B=r.litHtmlPolyfillSupport;B?.(I,R),(r.litHtmlVersions??=[]).push("3.0.0");let W=(t,e,i)=>{let n=i?.renderBefore??e,r=n._$litPart$;if(void 0===r){let t=i?.renderBefore??null;n._$litPart$=r=new R(e.insertBefore(d(),t),t,void 0,i??{})}return r._$AI(t),r}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"8BOF1":[function(t,e,i){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i),n.export(i,"LitElement",()=>a),n.export(i,"_$LE",()=>l);var r=t("@lit/reactive-element");n.exportAll(r,i);var s=t("lit-html");n.exportAll(s,i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class a extends r.ReactiveElement{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=(0,s.render)(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return s.noChange}}a._$litElement$=!0,a.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:a});let o=globalThis.litElementPolyfillSupport;o?.({LitElement:a});let l={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(globalThis.litElementVersions??=[]).push("4.0.0")},{"@lit/reactive-element":"hUcCl","lit-html":"4A25t","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"2Mmwb":[function(t,e,i){/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i),n.export(i,"isServer",()=>r);let r=!1},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6FOVO":[function(t,e,i){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);var n=t("lit");t("../components/dark-mode-btn"),t("../components/chart-time-btn"),t("../components/lnm-websocket"),t("../components/lnm-chart"),t("../components/trades-tables"),t("../components/chart-trades-btn-group");class r extends n.LitElement{static properties={isAuthenticated:Boolean,_data:Object,_intervalId:Number,_ohlcChartView:String};_renderTradesTable=()=>this.isAuthenticated&&this._data?.tradesData?(0,n.html)`
        <div class="card-body">
            <trades-tables class="mb-5" .data="${this._data}"></trades-tables>
        </div>`:(0,n.html)``;createRenderRoot=()=>this;render=()=>{let t="";switch(this._ohlcChartView){case"24h1m":t="1 day at 1 minute intervals";break;case"48h5m":t="2 days at 5 minute intervals";break;case"7d1h":t="7 days at 1 hour intervals";break;case"2w4h":t="2 weeks at 4 hour intervals";break;case"1m8h":t="1 month at 8 hour intervals"}return(0,n.html)`
        <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                    <div class="card mt-5">
                        <div class="card-header">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex align-items-center">
                                    <chart-trades-btn-group @trade-vis-click="${this._onTradeVisClick}"></chart-trades-btn-group>
                                </div>
                                <div class="flex-column text-center">
                                    <p class="lead m-0">LN Markets price chart</p>
                                    <p class="m-0"><small>${t}</small></p>
                                </div>
                                <div class="d-flex align-items-center">
                                    <chart-time-btn @time-click="${this._onTimeClick}"></chart-time-btn>
                                </div>
                            </div>
                        </div>
                        <lnm-websocket @price="${this._onPrice}"></lnm-websocket>
                        <lnm-chart class="card-img-top"></lnm-chart>
                        ${this._renderTradesTable()}
                    </div>
                </div>
            </div>
        </div>
        `};firstUpdated=async()=>{this.querySelector("chart-time-btn")?.setAttribute("disabled","true"),this._ohlcChartView="1m8h",await this._updateData(),this.querySelector("chart-time-btn").removeAttribute("disabled"),this._intervalId=setInterval(this._intervalDataFetch,288e4)};_onPrice=t=>{if(!this._data?.chartData?.ohlcChartData)return;let e=this._data.chartData.ohlcChartData.pop();t.detail>e.h&&(e.h=t.detail),t.detail<e.l&&(e.l=t.detail),e.c=t.detail,this._data.chartData.ohlcChartData.push(e),this._data.chartData.runningTradesChartData.filter(t=>"Running"===t.label).map(t=>t.data.filter(t=>"price"==t.type&&!t.start)).map(e=>e.forEach(e=>e.y=t.detail)),this.querySelector("lnm-chart").updateChartData(this._data.chartData)};_onTimeClick=async t=>{switch(t.preventDefault(),t.target.setAttribute("disabled","true"),this._ohlcChartView=t.detail,await this._updateData(!0),clearInterval(this._intervalId),this._ohlcChartView){case"24h1m":this._intervalId=setInterval(this._intervalDataFetch,6e4);break;case"48h5m":this._intervalId=setInterval(this._intervalDataFetch,3e5);break;case"7d1h":this._intervalId=setInterval(this._intervalDataFetch,36e5);break;case"2w4h":this._intervalId=setInterval(this._intervalDataFetch,144e4);break;default:this._intervalId=setInterval(this._intervalDataFetch,288e4)}t.target.removeAttribute("disabled")};_intervalDataFetch=async()=>{this.querySelector("chart-time-btn").setAttribute("disabled","true"),await this._updateData(),this.querySelector("chart-time-btn").removeAttribute("disabled")};_updateData=async t=>{let e=await fetch(`/api/chart/data?view=${this._ohlcChartView}`);if(!e.ok){location.reload();return}this._data=await e.json(),this.querySelector("lnm-chart").updateChartData(this._data.chartData,t);let i=this.querySelector("trades-tables");i&&i.requestUpdate(),this.requestUpdate()};_onTradeVisClick=t=>{t.preventDefault(),this.querySelector("lnm-chart").updateChartDatasetVis(t.detail)}}i.default=r,customElements.define("app-view",r)},{lit:"aCmte","../components/dark-mode-btn":"l5ThZ","../components/chart-time-btn":"gt06F","../components/lnm-websocket":"7bRR1","../components/lnm-chart":"18aHk","../components/trades-tables":"842Ta","../components/chart-trades-btn-group":"6OAhW","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],l5ThZ:[function(t,e,i){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);var n=t("lit");class r extends n.LitElement{createRenderRoot=()=>this;render=()=>{let t="";return t="dark"===this._getStoredTheme()?"bi-brightness-high-fill":"bi-moon-fill",(0,n.html)`
        <button class="btn btn-link" @click="${this._onToggleModeBtnClick}">
            <i class="bi ${t}"></i>
        </button>
        `};firstUpdated=()=>{this._setTheme(this._getPreferredTheme()),this._getStoredTheme()||this._setStoredTheme(this._getPreferredTheme())};_onToggleModeBtnClick=t=>{(t.preventDefault(),"dark"===this._getStoredTheme())?(this._setStoredTheme("light"),this._setTheme("light")):(this._setStoredTheme("dark"),this._setTheme("dark")),this.requestUpdate()};_getStoredTheme=()=>localStorage.getItem("theme");_setStoredTheme=t=>localStorage.setItem("theme",t);_getPreferredTheme=()=>{let t=this._getStoredTheme();return t||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")};_setTheme=t=>{"auto"===t&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-bs-theme","dark"):document.documentElement.setAttribute("data-bs-theme",t)}}i.default=r,customElements.define("dark-mode-btn",r)},{lit:"aCmte","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gt06F:[function(t,e,i){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);var n=t("lit");class r extends n.LitElement{static properties={disabled:Boolean,_activeView:String};createRenderRoot=()=>this;render=()=>{let t=this.disabled?"disabled":"",e=t=>this._activeView===t?"active":"";return(0,n.html)`
        <div class="dropdown">
            <button class="btn btn-link link-underline link-underline-opacity-0 dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <i class="bi bi-clock"></i>
            </button>
            <ul class="dropdown-menu">
                <li>
                    <a class="dropdown-item chart-view ${e("24h1m")} ${t}"
                        href="#"
                        data-view="24h1m"
                        @click="${this._onChartViewClick}">24h in 1min chart</a>
                </li>
                <li>
                    <a class="dropdown-item chart-view ${e("48h5m")} ${t}"
                        href="#"
                        data-view="48h5m"
                        @click="${this._onChartViewClick}">48h in 5min chart</a>
                </li>
                <li>
                    <a class="dropdown-item chart-view ${e("7d1h")} ${t}"
                        href="#"
                        data-view="7d1h"
                        @click="${this._onChartViewClick}">7d in 1h chart</a>
                </li>
                <li>
                    <a class="dropdown-item chart-view ${e("2w4h")} ${t}"
                        href="#"
                        data-view="2w4h" @click="${this._onChartViewClick}">2w in 4h chart</a>
                </li>
                <li>
                    <a class="dropdown-item chart-view ${e("1m8h")} ${t}"
                        href="#"
                        data-view="1m8h"
                        @click="${this._onChartViewClick}">1M in 8h chart</a>
                </li>
            </ul>
        </div>
        `};firstUpdated=()=>this._activeView="1m8h";_onChartViewClick=async t=>{t.preventDefault(),this._activeView=t.target.dataset.view,this.dispatchEvent(new CustomEvent("time-click",{detail:this._activeView}))}}i.default=r,customElements.define("chart-time-btn",r)},{lit:"aCmte","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7bRR1":[function(t,e,i){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);var n=t("lit");class r extends n.LitElement{static properties={_websocket:Object};connectedCallback(){super.connectedCallback(),this._websocket=new WebSocket("wss://api.lnmarkets.com"),this._websocket.onopen=this._onWebSocketOpen,this._websocket.onmessage=this._onWebSocketMessage,this._websocket.onclose=this._onWebSocketClose}disconnectedCallback=()=>{super.disconnectedCallback(),this._websocket.close()};_generateUUID=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){let e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)});_onWebSocketOpen=()=>{let t={jsonrpc:"2.0",id:this._generateUUID(),method:"v1/public/subscribe",params:["futures:btc_usd:last-price","futures:btc_usd:index"]};this._websocket.send(JSON.stringify(t))};_onWebSocketClose=t=>console.warn("ws close",t);_onWebSocketError=t=>console.warn("ws error",t);_onWebSocketMessage=t=>{let e=JSON.parse(t.data);if("subscription"==e.method&&e.params)switch(e?.params?.channel){case"futures:btc_usd:last-price":this._onFuturesBtcUsdLastPrice(e.params.data);break;case"futures:btc_usd:index":this._onFuturesBtcUsdIndex(e.params.data)}};_onFuturesBtcUsdLastPrice=t=>this._dispatchPriceEvent(t.lastPrice);_onFuturesBtcUsdIndex=t=>this._dispatchPriceEvent(t.index);_dispatchPriceEvent=t=>this.dispatchEvent(new CustomEvent("price",{detail:t}))}i.default=r,customElements.define("lnm-websocket",r)},{lit:"aCmte","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"18aHk":[function(t,e,i){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i);var r=t("lit"),s=t("chart.js"),a=t("chartjs-chart-financial");t("chartjs-adapter-luxon");var o=t("chartjs-plugin-zoom"),l=n.interopDefault(o);class h extends r.LitElement{static properties={data:Object,_chart:Object};createRenderRoot=()=>this;render=()=>(0,r.html)`<canvas></canvas>`;firstUpdated=()=>{(0,s.Chart).register(...s.registerables,l.default,a.OhlcElement,a.OhlcController,a.CandlestickElement,a.CandlestickController),this._chart=new s.Chart(this.querySelector("canvas").getContext("2d"),{type:"ohlc",options:{plugins:{zoom:{zoom:{wheel:{enabled:!0},pinch:{enabled:!1},mode:"xy"},pan:{enabled:!0}},title:{display:!1,text:"LNM Chart"},subtitle:{display:!1,text:"1 month at 8 hour intervals"},legend:{display:!1},scalesPlugin:{topLeft:"red",topRight:"blue",bottomRight:"green",bottomLeft:"yellow"}},scales:{x:{display:!1,grid:{color:"orange"},ticks:{display:!1}},y:{display:!1,grid:{color:t=>"h"===t.tick.type?"green":"red"},ticks:{display:!1}}}},data:{datasets:[{id:"ohlcChartData",label:"Bitcoin / U.S. Dollar",data:[]},{id:"openTradesChartData",type:"line",label:"Open",hidden:!0,data:[],pointBackgroundColor:"rgba(0, 0, 0, 0)",pointBorderColor:"rgba(0, 0, 0, 0)",segment:{borderColor:t=>t.p0.parsed.hide?"rgba(0,0,0,0)":t.p0.raw.start?t.p0.raw.borderColor:"rgba(0,0,0,0)"}},{id:"runningTradesChartData",type:"line",label:"Running",hidden:!0,data:[],pointBackgroundColor:"rgba(0, 0, 0, 0)",pointBorderColor:"rgba(0, 0, 0, 0)",segment:{borderColor:t=>t.p0.parsed.hide?"rgba(0,0,0,0)":t.p0.raw.start?t.p0.raw.borderColor:"rgba(0,0,0,0)"}},{id:"closedTradesChartData",type:"line",label:"Closed",hidden:!0,data:[],pointBackgroundColor:"rgba(0, 0, 0, 0)",pointBorderColor:"rgba(0, 0, 0, 0)",segment:{borderColor:t=>t.p0.parsed.hide?"rgba(0,0,0,0)":t.p0.raw.start?t.p0.raw.borderColor:"rgba(0,0,0,0)"}}]},plugins:[{id:"scalesPlugin",beforeDraw:(t,e,i)=>{let{ctx:n,chartArea:{left:r,top:s,right:a,bottom:o},scales:{x:l,y:h}}=t;//chart.scales.x.ticks = this._chartScalesXTicks;
//chart.scales.y.ticks = this._chartScalesYTicks;
}}]})};updateChartData=(t,e)=>{Object.keys(t).forEach(e=>{if(!t[e])return;let i=this._chart.data.datasets.filter(t=>t.id===e)[0];i.data=t[e]}),this._chart.update(),e&&this._chart.resetZoom()};updateChartDatasetVis=t=>{let e=t.split("-"),i=e[0],n="false"===e[1].toLowerCase();this._chart.data.datasets.filter(t=>t.id===i).forEach(t=>t.hidden=n),this._chart.update()};_someCodeForToDo=()=>{let t={"24h1m":(t,e,i,n)=>[0,4,8,12,16,20].includes(e)&&0===i,"48h5m":(t,e,i,n)=>[0,6,12,18].includes(e)&&0===i,"7d1h":(t,e,i,n)=>0===e&&0===i&&0===n,"2w4h":(t,e,i,n)=>["Montag","Mittwoch","Freitag"].includes(t)&&0===e&&0===i&&0===n,"1m8h":(t,e,i,n)=>"Montag"===t&&0===e&&0===i&&0===n};this._chartScalesXTicks=this._data.ohlcChartData.filter(e=>{let i=new Date(e.x),n=["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"][i.getUTCDay()],r=i.getUTCHours(),s=i.getUTCMinutes(),a=i.getUTCSeconds();return t[this._chartView](n,r,s,a)}).map(t=>{let e=new Date(t.x);return{label:e.toLocaleString(),major:!0,value:t.x}});let e=this._data.ohlcChartData.reduce((t,e)=>t&&t.h>e.h?t:e);this._chartScalesYTicks=[{label:e.h,value:e.h,type:"h"}];for(var i=1;i<this._chartScalesXTicks.length;++i){let t=this._chartScalesXTicks[i-1],e=this._chartScalesXTicks[i],n=this._data.ohlcChartData.filter(i=>i.x>t.value&&i.x<e.value).reduce((t,e)=>t&&t.h>e.h?t:e);this._chartScalesYTicks.push({label:n.h,value:n.h,type:"h"});let r=this._data.ohlcChartData.filter(i=>i.x>t.value&&i.x<e.value).reduce((t,e)=>t&&t.l<e.l?t:e);this._chartScalesYTicks.push({label:r.l,value:r.l,type:"l"})}let n=this._data.ohlcChartData.reduce((t,e)=>t&&t.l<e.l?t:e);this._chartScalesYTicks.push({label:n.l,value:n.l,type:"l"})}}i.default=h,customElements.define("lnm-chart",h)},{lit:"aCmte","chart.js":"l4dY5","chartjs-chart-financial":"htqeP","chartjs-adapter-luxon":"jk3UW","chartjs-plugin-zoom":"cT5Ad","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],l4dY5:[function(t,e,i){/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i),n.export(i,"defaults",()=>r.d),n.export(i,"Animation",()=>l),n.export(i,"Animations",()=>u),n.export(i,"ArcElement",()=>t2),n.export(i,"BarController",()=>O),n.export(i,"BarElement",()=>el),n.export(i,"BasePlatform",()=>tf),n.export(i,"BasicPlatform",()=>tp),n.export(i,"BubbleController",()=>D),n.export(i,"CategoryScale",()=>eU),n.export(i,"Chart",()=>tJ),n.export(i,"DatasetController",()=>w),n.export(i,"Decimation",()=>ed),n.export(i,"DomPlatform",()=>tD),n.export(i,"DoughnutController",()=>E),n.export(i,"Element",()=>$),n.export(i,"Filler",()=>ek),n.export(i,"Interaction",()=>ti),n.export(i,"Legend",()=>eC),n.export(i,"LineController",()=>P),n.export(i,"LineElement",()=>et),n.export(i,"LinearScale",()=>eY),n.export(i,"LogarithmicScale",()=>eK),n.export(i,"PieController",()=>I),n.export(i,"PointElement",()=>ei),n.export(i,"PolarAreaController",()=>A),n.export(i,"RadarController",()=>L),n.export(i,"RadialLinearScale",()=>e0),n.export(i,"Scale",()=>W),n.export(i,"ScatterController",()=>Z),n.export(i,"SubTitle",()=>eP),n.export(i,"Ticks",()=>F),n.export(i,"TimeScale",()=>e7),n.export(i,"TimeSeriesScale",()=>it),n.export(i,"Title",()=>eD),n.export(i,"Tooltip",()=>eV),n.export(i,"_adapters",()=>J),n.export(i,"_detectPlatform",()=>tE),n.export(i,"animator",()=>s),n.export(i,"controllers",()=>Y),n.export(i,"elements",()=>eh),n.export(i,"layouts",()=>td),n.export(i,"plugins",()=>eH),n.export(i,"registerables",()=>ii),n.export(i,"registry",()=>q),n.export(i,"scales",()=>ie);var r=t("./chunks/helpers.segment.mjs"),s=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(t,e,i,n){let r=e.listeners[n],s=e.duration;r.forEach(n=>n({chart:t,initial:e.initial,numSteps:s,currentStep:Math.min(i-e.start,s)}))}_refresh(){this._request||(this._running=!0,this._request=(0,r.r).call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(t=Date.now()){let e=0;this._charts.forEach((i,n)=>{let r;if(!i.running||!i.items.length)return;let s=i.items,a=s.length-1,o=!1;for(;a>=0;--a)(r=s[a])._active?(r._total>i.duration&&(i.duration=r._total),r.tick(t),o=!0):(s[a]=s[s.length-1],s.pop());o&&(n.draw(),this._notify(n,i,t,"progress")),s.length||(i.running=!1,this._notify(n,i,t,"complete"),i.initial=!1),e+=s.length}),this._lastDate=t,0===e&&(this._running=!1)}_getAnims(t){let e=this._charts,i=e.get(t);return i||(i={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},e.set(t,i)),i}listen(t,e,i){this._getAnims(t).listeners[e].push(i)}add(t,e){e&&e.length&&this._getAnims(t).items.push(...e)}has(t){return this._getAnims(t).items.length>0}start(t){let e=this._charts.get(t);e&&(e.running=!0,e.start=Date.now(),e.duration=e.items.reduce((t,e)=>Math.max(t,e._duration),0),this._refresh())}running(t){if(!this._running)return!1;let e=this._charts.get(t);return!!e&&!!e.running&&!!e.items.length}stop(t){let e=this._charts.get(t);if(!e||!e.items.length)return;let i=e.items,n=i.length-1;for(;n>=0;--n)i[n].cancel();e.items=[],this._notify(t,e,Date.now(),"complete")}remove(t){return this._charts.delete(t)}};let a="transparent",o={boolean:(t,e,i)=>i>.5?e:t,color(t,e,i){let n=(0,r.c)(t||a),s=n.valid&&(0,r.c)(e||a);return s&&s.valid?s.mix(n,i).hexString():e},number:(t,e,i)=>t+(e-t)*i};class l{constructor(t,e,i,n){let s=e[i];n=(0,r.a)([t.to,n,s,t.from]);let a=(0,r.a)([t.from,s,n]);this._active=!0,this._fn=t.fn||o[t.type||typeof a],this._easing=r.e[t.easing]||r.e.linear,this._start=Math.floor(Date.now()+(t.delay||0)),this._duration=this._total=Math.floor(t.duration),this._loop=!!t.loop,this._target=e,this._prop=i,this._from=a,this._to=n,this._promises=void 0}active(){return this._active}update(t,e,i){if(this._active){this._notify(!1);let n=this._target[this._prop],s=i-this._start,a=this._duration-s;this._start=i,this._duration=Math.floor(Math.max(a,t.duration)),this._total+=s,this._loop=!!t.loop,this._to=(0,r.a)([t.to,e,n,t.from]),this._from=(0,r.a)([t.from,n,e])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(t){let e;let i=t-this._start,n=this._duration,r=this._prop,s=this._from,a=this._loop,o=this._to;if(this._active=s!==o&&(a||i<n),!this._active){this._target[r]=o,this._notify(!0);return}if(i<0){this._target[r]=s;return}e=i/n%2,e=a&&e>1?2-e:e,e=this._easing(Math.min(1,Math.max(0,e))),this._target[r]=this._fn(s,o,e)}wait(){let t=this._promises||(this._promises=[]);return new Promise((e,i)=>{t.push({res:e,rej:i})})}_notify(t){let e=t?"res":"rej",i=this._promises||[];for(let t=0;t<i.length;t++)i[t][e]()}}(0,r.d).set("animation",{delay:void 0,duration:1e3,easing:"easeOutQuart",fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0});let h=Object.keys(r.d.animation);(0,r.d).describe("animation",{_fallback:!1,_indexable:!1,_scriptable:t=>"onProgress"!==t&&"onComplete"!==t&&"fn"!==t}),(0,r.d).set("animations",{colors:{type:"color",properties:["color","borderColor","backgroundColor"]},numbers:{type:"number",properties:["x","y","borderWidth","radius","tension"]}}),(0,r.d).describe("animations",{_fallback:"animation"}),(0,r.d).set("transitions",{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:"transparent"},visible:{type:"boolean",duration:0}}},hide:{animations:{colors:{to:"transparent"},visible:{type:"boolean",easing:"linear",fn:t=>0|t}}}});class u{constructor(t,e){this._chart=t,this._properties=new Map,this.configure(e)}configure(t){if(!(0,r.i)(t))return;let e=this._properties;Object.getOwnPropertyNames(t).forEach(i=>{let n=t[i];if(!(0,r.i)(n))return;let s={};for(let t of h)s[t]=n[t];((0,r.b)(n.properties)&&n.properties||[i]).forEach(t=>{t!==i&&e.has(t)||e.set(t,s)})})}_animateOptions(t,e){let i=e.options,n=function(t,e){if(!e)return;let i=t.options;if(!i){t.options=e;return}return i.$shared&&(t.options=i=Object.assign({},i,{$shared:!1,$animations:{}})),i}(t,i);if(!n)return[];let r=this._createAnimations(n,i);return i.$shared&&(function(t,e){let i=[],n=Object.keys(e);for(let e=0;e<n.length;e++){let r=t[n[e]];r&&r.active()&&i.push(r.wait())}return Promise.all(i)})(t.options.$animations,i).then(()=>{t.options=i},()=>{}),r}_createAnimations(t,e){let i;let n=this._properties,r=[],s=t.$animations||(t.$animations={}),a=Object.keys(e),o=Date.now();for(i=a.length-1;i>=0;--i){let h=a[i];if("$"===h.charAt(0))continue;if("options"===h){r.push(...this._animateOptions(t,e));continue}let u=e[h],c=s[h],d=n.get(h);if(c){if(d&&c.active()){c.update(d,u,o);continue}c.cancel()}if(!d||!d.duration){t[h]=u;continue}s[h]=c=new l(d,t,h,u),r.push(c)}return r}update(t,e){if(0===this._properties.size){Object.assign(t,e);return}let i=this._createAnimations(t,e);if(i.length)return s.add(this._chart,i),!0}}function c(t,e){let i=t&&t.options||{},n=i.reverse,r=void 0===i.min?e:0,s=void 0===i.max?e:0;return{start:n?s:r,end:n?r:s}}function d(t,e){let i,n;let r=[],s=t._getSortedDatasetMetas(e);for(i=0,n=s.length;i<n;++i)r.push(s[i].index);return r}function f(t,e,i,n={}){let s,a,o,l;let h=t.keys,u="single"===n.mode;if(null!==e){for(s=0,a=h.length;s<a;++s){if((o=+h[s])===i){if(n.all)continue;break}l=t.values[o],(0,r.g)(l)&&(u||0===e||(0,r.s)(e)===(0,r.s)(l))&&(e+=l)}return e}}function p(t,e){let i=t&&t.options.stacked;return i||void 0===i&&void 0!==e.stack}function m(t,e,i,n){for(let r of e.getMatchingVisibleMetas(n).reverse()){let e=t[r.index];if(i&&e>0||!i&&e<0)return r.index}return null}function g(t,e){let i;let{chart:n,_cachedMeta:r}=t,s=n._stacks||(n._stacks={}),{iScale:a,vScale:o,index:l}=r,h=a.axis,u=o.axis,c=`${a.id}.${o.id}.${r.stack||r.type}`,d=e.length;for(let t=0;t<d;++t){let n=e[t],{[h]:a,[u]:d}=n,f=n._stacks||(n._stacks={});(i=f[u]=function(t,e,i){let n=t[e]||(t[e]={});return n[i]||(n[i]={})}(s,c,a))[l]=d,i._top=m(i,o,!0,r.type),i._bottom=m(i,o,!1,r.type)}}function b(t,e){let i=t.scales;return Object.keys(i).filter(t=>i[t].axis===e).shift()}function v(t,e){let i=t.controller.index,n=t.vScale&&t.vScale.axis;if(n)for(let r of e=e||t._parsed){let t=r._stacks;if(!t||void 0===t[n]||void 0===t[n][i])return;delete t[n][i]}}let y=t=>"reset"===t||"none"===t,x=(t,e)=>e?t:Object.assign({},t),_=(t,e,i)=>t&&!e.hidden&&e._stacked&&{keys:d(i,!0),values:null};class w{constructor(t,e){this.chart=t,this._ctx=t.ctx,this.index=e,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.initialize()}initialize(){let t=this._cachedMeta;this.configure(),this.linkScales(),t._stacked=p(t.vScale,t),this.addElements()}updateIndex(t){this.index!==t&&v(this._cachedMeta),this.index=t}linkScales(){let t=this.chart,e=this._cachedMeta,i=this.getDataset(),n=(t,e,i,n)=>"x"===t?e:"r"===t?n:i,s=e.xAxisID=(0,r.v)(i.xAxisID,b(t,"x")),a=e.yAxisID=(0,r.v)(i.yAxisID,b(t,"y")),o=e.rAxisID=(0,r.v)(i.rAxisID,b(t,"r")),l=e.indexAxis,h=e.iAxisID=n(l,s,a,o),u=e.vAxisID=n(l,a,s,o);e.xScale=this.getScaleForId(s),e.yScale=this.getScaleForId(a),e.rScale=this.getScaleForId(o),e.iScale=this.getScaleForId(h),e.vScale=this.getScaleForId(u)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(t){return this.chart.scales[t]}_getOtherScale(t){let e=this._cachedMeta;return t===e.iScale?e.vScale:e.iScale}reset(){this._update("reset")}_destroy(){let t=this._cachedMeta;this._data&&(0,r.u)(this._data,this),t._stacked&&v(t)}_dataCheck(){let t=this.getDataset(),e=t.data||(t.data=[]),i=this._data;if((0,r.i)(e))this._data=function(t){let e,i,n;let r=Object.keys(t),s=Array(r.length);for(e=0,i=r.length;e<i;++e)n=r[e],s[e]={x:n,y:t[n]};return s}(e);else if(i!==e){if(i){(0,r.u)(i,this);let t=this._cachedMeta;v(t),t._parsed=[]}e&&Object.isExtensible(e)&&(0,r.l)(e,this),this._syncList=[],this._data=e}}addElements(){let t=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(t.dataset=new this.datasetElementType)}buildOrUpdateElements(t){let e=this._cachedMeta,i=this.getDataset(),n=!1;this._dataCheck();let r=e._stacked;e._stacked=p(e.vScale,e),e.stack!==i.stack&&(n=!0,v(e),e.stack=i.stack),this._resyncElements(t),(n||r!==e._stacked)&&g(this,e._parsed)}configure(){let t=this.chart.config,e=t.datasetScopeKeys(this._type),i=t.getOptionScopes(this.getDataset(),e,!0);this.options=t.createResolver(i,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(t,e){let i,n,s;let{_cachedMeta:a,_data:o}=this,{iScale:l,_stacked:h}=a,u=l.axis,c=0===t&&e===o.length||a._sorted,d=t>0&&a._parsed[t-1];if(!1===this._parsing)a._parsed=o,a._sorted=!0,s=o;else{s=(0,r.b)(o[t])?this.parseArrayData(a,o,t,e):(0,r.i)(o[t])?this.parseObjectData(a,o,t,e):this.parsePrimitiveData(a,o,t,e);let l=()=>null===n[u]||d&&n[u]<d[u];for(i=0;i<e;++i)a._parsed[i+t]=n=s[i],c&&(l()&&(c=!1),d=n);a._sorted=c}h&&g(this,s)}parsePrimitiveData(t,e,i,n){let r,s;let{iScale:a,vScale:o}=t,l=a.axis,h=o.axis,u=a.getLabels(),c=a===o,d=Array(n);for(r=0;r<n;++r)s=r+i,d[r]={[l]:c||a.parse(u[s],s),[h]:o.parse(e[s],s)};return d}parseArrayData(t,e,i,n){let r,s,a;let{xScale:o,yScale:l}=t,h=Array(n);for(r=0;r<n;++r)a=e[s=r+i],h[r]={x:o.parse(a[0],s),y:l.parse(a[1],s)};return h}parseObjectData(t,e,i,n){let s,a,o;let{xScale:l,yScale:h}=t,{xAxisKey:u="x",yAxisKey:c="y"}=this._parsing,d=Array(n);for(s=0;s<n;++s)o=e[a=s+i],d[s]={x:l.parse((0,r.f)(o,u),a),y:h.parse((0,r.f)(o,c),a)};return d}getParsed(t){return this._cachedMeta._parsed[t]}getDataElement(t){return this._cachedMeta.data[t]}applyStack(t,e,i){let n=this.chart,r=this._cachedMeta,s=e[t.axis],a={keys:d(n,!0),values:e._stacks[t.axis]};return f(a,s,r.index,{mode:i})}updateRangeFromParsed(t,e,i,n){let r=i[e.axis],s=null===r?NaN:r,a=n&&i._stacks[e.axis];n&&a&&(n.values=a,s=f(n,r,this._cachedMeta.index)),t.min=Math.min(t.min,s),t.max=Math.max(t.max,s)}getMinMax(t,e){let i,n;let s=this._cachedMeta,a=s._parsed,o=s._sorted&&t===s.iScale,l=a.length,h=this._getOtherScale(t),u=_(e,s,this.chart),c={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY},{min:d,max:f}=function(t){let{min:e,max:i,minDefined:n,maxDefined:r}=t.getUserBounds();return{min:n?e:Number.NEGATIVE_INFINITY,max:r?i:Number.POSITIVE_INFINITY}}(h);function p(){n=a[i];let e=n[h.axis];return!(0,r.g)(n[t.axis])||d>e||f<e}for(i=0;i<l&&(p()||(this.updateRangeFromParsed(c,t,n,u),!o));++i);if(o){for(i=l-1;i>=0;--i)if(!p()){this.updateRangeFromParsed(c,t,n,u);break}}return c}getAllParsedValues(t){let e,i,n;let s=this._cachedMeta._parsed,a=[];for(e=0,i=s.length;e<i;++e)n=s[e][t.axis],(0,r.g)(n)&&a.push(n);return a}getMaxOverflow(){return!1}getLabelAndValue(t){let e=this._cachedMeta,i=e.iScale,n=e.vScale,r=this.getParsed(t);return{label:i?""+i.getLabelForValue(r[i.axis]):"",value:n?""+n.getLabelForValue(r[n.axis]):""}}_update(t){var e;let i,n,s,a;let o=this._cachedMeta;this.update(t||"default"),o._clip=(e=(0,r.v)(this.options.clip,function(t,e,i){if(!1===i)return!1;let n=c(t,i),r=c(e,i);return{top:r.end,right:n.end,bottom:r.start,left:n.start}}(o.xScale,o.yScale,this.getMaxOverflow())),(0,r.i)(e)?(i=e.top,n=e.right,s=e.bottom,a=e.left):i=n=s=a=e,{top:i,right:n,bottom:s,left:a,disabled:!1===e})}update(t){}draw(){let t;let e=this._ctx,i=this.chart,n=this._cachedMeta,r=n.data||[],s=i.chartArea,a=[],o=this._drawStart||0,l=this._drawCount||r.length-o,h=this.options.drawActiveElementsOnTop;for(n.dataset&&n.dataset.draw(e,s,o,l),t=o;t<o+l;++t){let i=r[t];i.hidden||(i.active&&h?a.push(i):i.draw(e,s))}for(t=0;t<a.length;++t)a[t].draw(e,s)}getStyle(t,e){let i=e?"active":"default";return void 0===t&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(i):this.resolveDataElementOptions(t||0,i)}getContext(t,e,i){var n,s,a;let o;let l=this.getDataset();if(t>=0&&t<this._cachedMeta.data.length){let e=this._cachedMeta.data[t];(o=e.$context||(e.$context=(n=this.getContext(),(0,r.h)(n,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:e,index:t,mode:"default",type:"data"})))).parsed=this.getParsed(t),o.raw=l.data[t],o.index=o.dataIndex=t}else(o=this.$context||(this.$context=(s=this.chart.getContext(),a=this.index,(0,r.h)(s,{active:!1,dataset:void 0,datasetIndex:a,index:a,mode:"default",type:"dataset"})))).dataset=l,o.index=o.datasetIndex=this.index;return o.active=!!e,o.mode=i,o}resolveDatasetElementOptions(t){return this._resolveElementOptions(this.datasetElementType.id,t)}resolveDataElementOptions(t,e){return this._resolveElementOptions(this.dataElementType.id,e,t)}_resolveElementOptions(t,e="default",i){let n="active"===e,s=this._cachedDataOpts,a=t+"-"+e,o=s[a],l=this.enableOptionSharing&&(0,r.j)(i);if(o)return x(o,l);let h=this.chart.config,u=h.datasetElementScopeKeys(this._type,t),c=n?[`${t}Hover`,"hover",t,""]:[t,""],d=h.getOptionScopes(this.getDataset(),u),f=Object.keys(r.d.elements[t]),p=h.resolveNamedOptions(d,f,()=>this.getContext(i,n),c);return p.$shared&&(p.$shared=l,s[a]=Object.freeze(x(p,l))),p}_resolveAnimations(t,e,i){let n;let r=this.chart,s=this._cachedDataOpts,a=`animation-${e}`,o=s[a];if(o)return o;if(!1!==r.options.animation){let r=this.chart.config,s=r.datasetAnimationScopeKeys(this._type,e),a=r.getOptionScopes(this.getDataset(),s);n=r.createResolver(a,this.getContext(t,i,e))}let l=new u(r,n&&n.animations);return n&&n._cacheable&&(s[a]=Object.freeze(l)),l}getSharedOptions(t){if(t.$shared)return this._sharedOptions||(this._sharedOptions=Object.assign({},t))}includeOptions(t,e){return!e||y(t)||this.chart._animationsDisabled}_getSharedOptions(t,e){let i=this.resolveDataElementOptions(t,e),n=this._sharedOptions,r=this.getSharedOptions(i),s=this.includeOptions(e,r)||r!==n;return this.updateSharedOptions(r,e,i),{sharedOptions:r,includeOptions:s}}updateElement(t,e,i,n){y(n)?Object.assign(t,i):this._resolveAnimations(e,n).update(t,i)}updateSharedOptions(t,e,i){t&&!y(e)&&this._resolveAnimations(void 0,e).update(t,i)}_setStyle(t,e,i,n){t.active=n;let r=this.getStyle(e,n);this._resolveAnimations(e,i,n).update(t,{options:!n&&this.getSharedOptions(r)||r})}removeHoverStyle(t,e,i){this._setStyle(t,i,"active",!1)}setHoverStyle(t,e,i){this._setStyle(t,i,"active",!0)}_removeDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!1)}_setDatasetHoverStyle(){let t=this._cachedMeta.dataset;t&&this._setStyle(t,void 0,"active",!0)}_resyncElements(t){let e=this._data,i=this._cachedMeta.data;for(let[t,e,i]of this._syncList)this[t](e,i);this._syncList=[];let n=i.length,r=e.length,s=Math.min(r,n);s&&this.parse(0,s),r>n?this._insertElements(n,r-n,t):r<n&&this._removeElements(r,n-r)}_insertElements(t,e,i=!0){let n;let r=this._cachedMeta,s=r.data,a=t+e,o=t=>{for(t.length+=e,n=t.length-1;n>=a;n--)t[n]=t[n-e]};for(o(s),n=t;n<a;++n)s[n]=new this.dataElementType;this._parsing&&o(r._parsed),this.parse(t,e),i&&this.updateElements(s,t,e,"reset")}updateElements(t,e,i,n){}_removeElements(t,e){let i=this._cachedMeta;if(this._parsing){let n=i._parsed.splice(t,e);i._stacked&&v(i,n)}i.data.splice(t,e)}_sync(t){if(this._parsing)this._syncList.push(t);else{let[e,i,n]=t;this[e](i,n)}this.chart._dataChanges.push([this.index,...t])}_onDataPush(){let t=arguments.length;this._sync(["_insertElements",this.getDataset().data.length-t,t])}_onDataPop(){this._sync(["_removeElements",this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync(["_removeElements",0,1])}_onDataSplice(t,e){e&&this._sync(["_removeElements",t,e]);let i=arguments.length-2;i&&this._sync(["_insertElements",t,i])}_onDataUnshift(){this._sync(["_insertElements",0,arguments.length])}}function k(t,e,i,n){return(0,r.b)(t)?function(t,e,i,n){let r=i.parse(t[0],n),s=i.parse(t[1],n),a=Math.min(r,s),o=Math.max(r,s),l=a,h=o;Math.abs(a)>Math.abs(o)&&(l=o,h=a),e[i.axis]=h,e._custom={barStart:l,barEnd:h,start:r,end:s,min:a,max:o}}(t,e,i,n):e[i.axis]=i.parse(t,n),e}function M(t,e,i,n){let r,s,a,o;let l=t.iScale,h=t.vScale,u=l.getLabels(),c=l===h,d=[];for(r=i,s=i+n;r<s;++r)o=e[r],(a={})[l.axis]=c||l.parse(u[r],r),d.push(k(o,a,h,r));return d}function S(t){return t&&void 0!==t.barStart&&void 0!==t.barEnd}function T(t,e,i,n){var r;return t=n?C(t=(r=t)===e?i:r===i?e:r,i,e):C(t,e,i)}function C(t,e,i){return"start"===t?e:"end"===t?i:t}w.defaults={},w.prototype.datasetElementType=null,w.prototype.dataElementType=null;class O extends w{parsePrimitiveData(t,e,i,n){return M(t,e,i,n)}parseArrayData(t,e,i,n){return M(t,e,i,n)}parseObjectData(t,e,i,n){let s,a,o,l;let{iScale:h,vScale:u}=t,{xAxisKey:c="x",yAxisKey:d="y"}=this._parsing,f="x"===h.axis?c:d,p="x"===u.axis?c:d,m=[];for(s=i,a=i+n;s<a;++s)l=e[s],(o={})[h.axis]=h.parse((0,r.f)(l,f),s),m.push(k((0,r.f)(l,p),o,u,s));return m}updateRangeFromParsed(t,e,i,n){super.updateRangeFromParsed(t,e,i,n);let r=i._custom;r&&e===this._cachedMeta.vScale&&(t.min=Math.min(t.min,r.min),t.max=Math.max(t.max,r.max))}getMaxOverflow(){return 0}getLabelAndValue(t){let e=this._cachedMeta,{iScale:i,vScale:n}=e,r=this.getParsed(t),s=r._custom,a=S(s)?"["+s.start+", "+s.end+"]":""+n.getLabelForValue(r[n.axis]);return{label:""+i.getLabelForValue(r[i.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();let t=this._cachedMeta;t.stack=this.getDataset().stack}update(t){let e=this._cachedMeta;this.updateElements(e.data,0,e.data.length,t)}updateElements(t,e,i,n){let s="reset"===n,{index:a,_cachedMeta:{vScale:o}}=this,l=o.getBasePixel(),h=o.isHorizontal(),u=this._getRuler(),{sharedOptions:c,includeOptions:d}=this._getSharedOptions(e,n);for(let f=e;f<e+i;f++){let e=this.getParsed(f),i=s||(0,r.k)(e[o.axis])?{base:l,head:l}:this._calculateBarValuePixels(f),p=this._calculateBarIndexPixels(f,u),m=(e._stacks||{})[o.axis],g={horizontal:h,base:i.base,enableBorderRadius:!m||S(e._custom)||a===m._top||a===m._bottom,x:h?i.head:p.center,y:h?p.center:i.head,height:h?p.size:Math.abs(i.size),width:h?Math.abs(i.size):p.size};d&&(g.options=c||this.resolveDataElementOptions(f,t[f].active?"active":n));let b=g.options||t[f].options;!function(t,e,i,n){let r,s,a,o,l,h=e.borderSkipped,u={};if(!h){t.borderSkipped=u;return}if(!0===h){t.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:c,end:d,reverse:f,top:p,bottom:m}=(t.horizontal?(r=t.base>t.x,s="left",a="right"):(r=t.base<t.y,s="bottom",a="top"),r?(o="end",l="start"):(o="start",l="end"),{start:s,end:a,reverse:r,top:o,bottom:l});"middle"===h&&i&&(t.enableBorderRadius=!0,(i._top||0)===n?h=p:(i._bottom||0)===n?h=m:(u[T(m,c,d,f)]=!0,h=p)),u[T(h,c,d,f)]=!0,t.borderSkipped=u}(g,b,m,a),function(t,{inflateAmount:e},i){t.inflateAmount="auto"===e?1===i?.33:0:e}(g,b,u.ratio),this.updateElement(t[f],f,g,n)}}_getStacks(t,e){let{iScale:i}=this._cachedMeta,n=i.getMatchingVisibleMetas(this._type).filter(t=>t.controller.options.grouped),s=i.options.stacked,a=[],o=t=>{let i=t.controller.getParsed(e),n=i&&i[t.vScale.axis];if((0,r.k)(n)||isNaN(n))return!0};for(let i of n)if(!(void 0!==e&&o(i))&&((!1===s||-1===a.indexOf(i.stack)||void 0===s&&void 0===i.stack)&&a.push(i.stack),i.index===t))break;return a.length||a.push(void 0),a}_getStackCount(t){return this._getStacks(void 0,t).length}_getStackIndex(t,e,i){let n=this._getStacks(t,i),r=void 0!==e?n.indexOf(e):-1;return -1===r?n.length-1:r}_getRuler(){let t,e;let i=this.options,n=this._cachedMeta,s=n.iScale,a=[];for(t=0,e=n.data.length;t<e;++t)a.push(s.getPixelForValue(this.getParsed(t)[s.axis],t));let o=i.barThickness,l=o||function(t){let e,i,n,s;let a=t.iScale,o=function(t,e){if(!t._cache.$bar){let i=t.getMatchingVisibleMetas(e),n=[];for(let e=0,r=i.length;e<r;e++)n=n.concat(i[e].controller.getAllParsedValues(t));t._cache.$bar=(0,r._)(n.sort((t,e)=>t-e))}return t._cache.$bar}(a,t.type),l=a._length,h=()=>{32767!==n&&-32768!==n&&((0,r.j)(s)&&(l=Math.min(l,Math.abs(n-s)||l)),s=n)};for(e=0,i=o.length;e<i;++e)n=a.getPixelForValue(o[e]),h();for(e=0,s=void 0,i=a.ticks.length;e<i;++e)n=a.getPixelForTick(e),h();return l}(n);return{min:l,pixels:a,start:s._startPixel,end:s._endPixel,stackCount:this._getStackCount(),scale:s,grouped:i.grouped,ratio:o?1:i.categoryPercentage*i.barPercentage}}_calculateBarValuePixels(t){let e,i;let{_cachedMeta:{vScale:n,_stacked:s},options:{base:a,minBarLength:o}}=this,l=a||0,h=this.getParsed(t),u=h._custom,c=S(u),d=h[n.axis],f=0,p=s?this.applyStack(n,h,s):d;p!==d&&(f=p-d,p=d),c&&(d=u.barStart,p=u.barEnd-u.barStart,0!==d&&(0,r.s)(d)!==(0,r.s)(u.barEnd)&&(f=0),f+=d);let m=(0,r.k)(a)||c?f:a,g=n.getPixelForValue(m);if(Math.abs(i=(e=this.chart.getDataVisibility(t)?n.getPixelForValue(f+p):g)-g)<o){var b;i=(0!==(b=i)?(0,r.s)(b):(n.isHorizontal()?1:-1)*(n.min>=l?1:-1))*o,d===l&&(g-=i/2);let t=n.getPixelForDecimal(0),s=n.getPixelForDecimal(1);e=(g=Math.max(Math.min(g,Math.max(t,s)),Math.min(t,s)))+i}if(g===n.getPixelForValue(l)){let t=(0,r.s)(i)*n.getLineWidthForValue(l)/2;g+=t,i-=t}return{size:i,base:g,head:e,center:e+i/2}}_calculateBarIndexPixels(t,e){let i,n;let s=e.scale,a=this.options,o=a.skipNull,l=(0,r.v)(a.maxBarThickness,1/0);if(e.grouped){let s=o?this._getStackCount(t):e.stackCount,h="flex"===a.barThickness?function(t,e,i,n){let r=e.pixels,s=r[t],a=t>0?r[t-1]:null,o=t<r.length-1?r[t+1]:null,l=i.categoryPercentage;null===a&&(a=s-(null===o?e.end-e.start:o-s)),null===o&&(o=s+s-a);let h=s-(s-Math.min(a,o))/2*l,u=Math.abs(o-a)/2*l;return{chunk:u/n,ratio:i.barPercentage,start:h}}(t,e,a,s):function(t,e,i,n){let s,a;let o=i.barThickness;return(0,r.k)(o)?(s=e.min*i.categoryPercentage,a=i.barPercentage):(s=o*n,a=1),{chunk:s/n,ratio:a,start:e.pixels[t]-s/2}}(t,e,a,s),u=this._getStackIndex(this.index,this._cachedMeta.stack,o?t:void 0);i=h.start+h.chunk*u+h.chunk/2,n=Math.min(l,h.chunk*h.ratio)}else i=s.getPixelForValue(this.getParsed(t)[s.axis],t),n=Math.min(l,e.min*e.ratio);return{base:i-n/2,head:i+n/2,center:i,size:n}}draw(){let t=this._cachedMeta,e=t.vScale,i=t.data,n=i.length,r=0;for(;r<n;++r)null!==this.getParsed(r)[e.axis]&&i[r].draw(this._ctx)}}O.id="bar",O.defaults={datasetElementType:!1,dataElementType:"bar",categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:"number",properties:["x","y","base","width","height"]}}},O.overrides={scales:{_index_:{type:"category",offset:!0,grid:{offset:!0}},_value_:{type:"linear",beginAtZero:!0}}};class D extends w{initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(t,e,i,n){let r=super.parsePrimitiveData(t,e,i,n);for(let t=0;t<r.length;t++)r[t]._custom=this.resolveDataElementOptions(t+i).radius;return r}parseArrayData(t,e,i,n){let s=super.parseArrayData(t,e,i,n);for(let t=0;t<s.length;t++){let n=e[i+t];s[t]._custom=(0,r.v)(n[2],this.resolveDataElementOptions(t+i).radius)}return s}parseObjectData(t,e,i,n){let s=super.parseObjectData(t,e,i,n);for(let t=0;t<s.length;t++){let n=e[i+t];s[t]._custom=(0,r.v)(n&&n.r&&+n.r,this.resolveDataElementOptions(t+i).radius)}return s}getMaxOverflow(){let t=this._cachedMeta.data,e=0;for(let i=t.length-1;i>=0;--i)e=Math.max(e,t[i].size(this.resolveDataElementOptions(i))/2);return e>0&&e}getLabelAndValue(t){let e=this._cachedMeta,{xScale:i,yScale:n}=e,r=this.getParsed(t),s=i.getLabelForValue(r.x),a=n.getLabelForValue(r.y),o=r._custom;return{label:e.label,value:"("+s+", "+a+(o?", "+o:"")+")"}}update(t){let e=this._cachedMeta.data;this.updateElements(e,0,e.length,t)}updateElements(t,e,i,n){let r="reset"===n,{iScale:s,vScale:a}=this._cachedMeta,{sharedOptions:o,includeOptions:l}=this._getSharedOptions(e,n),h=s.axis,u=a.axis;for(let c=e;c<e+i;c++){let e=t[c],i=!r&&this.getParsed(c),d={},f=d[h]=r?s.getPixelForDecimal(.5):s.getPixelForValue(i[h]),p=d[u]=r?a.getBasePixel():a.getPixelForValue(i[u]);d.skip=isNaN(f)||isNaN(p),l&&(d.options=o||this.resolveDataElementOptions(c,e.active?"active":n),r&&(d.options.radius=0)),this.updateElement(e,c,d,n)}}resolveDataElementOptions(t,e){let i=this.getParsed(t),n=super.resolveDataElementOptions(t,e);n.$shared&&(n=Object.assign({},n,{$shared:!1}));let s=n.radius;return"active"!==e&&(n.radius=0),n.radius+=(0,r.v)(i&&i._custom,s),n}}D.id="bubble",D.defaults={datasetElementType:!1,dataElementType:"point",animations:{numbers:{type:"number",properties:["x","y","borderWidth","radius"]}}},D.overrides={scales:{x:{type:"linear"},y:{type:"linear"}},plugins:{tooltip:{callbacks:{title:()=>""}}}};class E extends w{constructor(t,e){super(t,e),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(t,e){let i=this.getDataset().data,n=this._cachedMeta;if(!1===this._parsing)n._parsed=i;else{let s,a,o=t=>+i[t];if((0,r.i)(i[t])){let{key:t="value"}=this._parsing;o=e=>+(0,r.f)(i[e],t)}for(s=t,a=t+e;s<a;++s)n._parsed[s]=o(s)}}_getRotation(){return(0,r.t)(this.options.rotation-90)}_getCircumference(){return(0,r.t)(this.options.circumference)}_getRotationExtents(){let t=r.T,e=-r.T;for(let i=0;i<this.chart.data.datasets.length;++i)if(this.chart.isDatasetVisible(i)){let n=this.chart.getDatasetMeta(i).controller,r=n._getRotation(),s=n._getCircumference();t=Math.min(t,r),e=Math.max(e,r+s)}return{rotation:t,circumference:e-t}}update(t){let e=this.chart,{chartArea:i}=e,n=this._cachedMeta,s=n.data,a=this.getMaxBorderWidth()+this.getMaxOffset(s)+this.options.spacing,o=Math.max((Math.min(i.width,i.height)-a)/2,0),l=Math.min((0,r.m)(this.options.cutout,o),1),h=this._getRingWeight(this.index),{circumference:u,rotation:c}=this._getRotationExtents(),{ratioX:d,ratioY:f,offsetX:p,offsetY:m}=function(t,e,i){let n=1,s=1,a=0,o=0;if(e<r.T){let l=t+e,h=Math.cos(t),u=Math.sin(t),c=Math.cos(l),d=Math.sin(l),f=(e,n,s)=>(0,r.p)(e,t,l,!0)?1:Math.max(n,n*i,s,s*i),p=(e,n,s)=>(0,r.p)(e,t,l,!0)?-1:Math.min(n,n*i,s,s*i),m=f(0,h,c),g=f(r.H,u,d),b=p(r.P,h,c),v=p(r.P+r.H,u,d);n=(m-b)/2,s=(g-v)/2,a=-(m+b)/2,o=-(g+v)/2}return{ratioX:n,ratioY:s,offsetX:a,offsetY:o}}(c,u,l),g=(i.width-a)/d,b=(i.height-a)/f,v=(0,r.n)(this.options.radius,Math.max(Math.min(g,b)/2,0)),y=Math.max(v*l,0),x=(v-y)/this._getVisibleDatasetWeightTotal();this.offsetX=p*v,this.offsetY=m*v,n.total=this.calculateTotal(),this.outerRadius=v-x*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-x*h,0),this.updateElements(s,0,s.length,t)}_circumference(t,e){let i=this.options,n=this._cachedMeta,s=this._getCircumference();return e&&i.animation.animateRotate||!this.chart.getDataVisibility(t)||null===n._parsed[t]||n.data[t].hidden?0:this.calculateCircumference(n._parsed[t]*s/r.T)}updateElements(t,e,i,n){let r;let s="reset"===n,a=this.chart,o=a.chartArea,l=a.options,h=l.animation,u=(o.left+o.right)/2,c=(o.top+o.bottom)/2,d=s&&h.animateScale,f=d?0:this.innerRadius,p=d?0:this.outerRadius,{sharedOptions:m,includeOptions:g}=this._getSharedOptions(e,n),b=this._getRotation();for(r=0;r<e;++r)b+=this._circumference(r,s);for(r=e;r<e+i;++r){let e=this._circumference(r,s),i=t[r],a={x:u+this.offsetX,y:c+this.offsetY,startAngle:b,endAngle:b+e,circumference:e,outerRadius:p,innerRadius:f};g&&(a.options=m||this.resolveDataElementOptions(r,i.active?"active":n)),b+=e,this.updateElement(i,r,a,n)}}calculateTotal(){let t;let e=this._cachedMeta,i=e.data,n=0;for(t=0;t<i.length;t++){let r=e._parsed[t];null!==r&&!isNaN(r)&&this.chart.getDataVisibility(t)&&!i[t].hidden&&(n+=Math.abs(r))}return n}calculateCircumference(t){let e=this._cachedMeta.total;return e>0&&!isNaN(t)?r.T*(Math.abs(t)/e):0}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart,n=i.data.labels||[],s=(0,r.o)(e._parsed[t],i.options.locale);return{label:n[t]||"",value:s}}getMaxBorderWidth(t){let e,i,n,r,s,a=0,o=this.chart;if(!t){for(e=0,i=o.data.datasets.length;e<i;++e)if(o.isDatasetVisible(e)){t=(n=o.getDatasetMeta(e)).data,r=n.controller;break}}if(!t)return 0;for(e=0,i=t.length;e<i;++e)"inner"!==(s=r.resolveDataElementOptions(e)).borderAlign&&(a=Math.max(a,s.borderWidth||0,s.hoverBorderWidth||0));return a}getMaxOffset(t){let e=0;for(let i=0,n=t.length;i<n;++i){let t=this.resolveDataElementOptions(i);e=Math.max(e,t.offset||0,t.hoverOffset||0)}return e}_getRingWeightOffset(t){let e=0;for(let i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e}_getRingWeight(t){return Math.max((0,r.v)(this.chart.data.datasets[t].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}}E.id="doughnut",E.defaults={datasetElementType:!1,dataElementType:"arc",animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:"number",properties:["circumference","endAngle","innerRadius","outerRadius","startAngle","x","y","offset","borderWidth","spacing"]}},cutout:"50%",rotation:0,circumference:360,radius:"100%",spacing:0,indexAxis:"r"},E.descriptors={_scriptable:t=>"spacing"!==t,_indexable:t=>"spacing"!==t},E.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let e=t.data;if(e.labels.length&&e.datasets.length){let{labels:{pointStyle:i}}=t.legend.options;return e.labels.map((e,n)=>{let r=t.getDatasetMeta(0),s=r.controller.getStyle(n);return{text:e,fillStyle:s.backgroundColor,strokeStyle:s.borderColor,lineWidth:s.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(n),index:n}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label(t){let e=t.label,i=": "+t.formattedValue;return(0,r.b)(e)?(e=e.slice(),e[0]+=i):e+=i,e}}}}};class P extends w{initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(t){let e=this._cachedMeta,{dataset:i,data:n=[],_dataset:s}=e,a=this.chart._animationsDisabled,{start:o,count:l}=(0,r.q)(e,n,a);this._drawStart=o,this._drawCount=l,(0,r.w)(e)&&(o=0,l=n.length),i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!s._decimated,i.points=n;let h=this.resolveDatasetElementOptions(t);this.options.showLine||(h.borderWidth=0),h.segment=this.options.segment,this.updateElement(i,void 0,{animated:!a,options:h},t),this.updateElements(n,o,l,t)}updateElements(t,e,i,n){let s="reset"===n,{iScale:a,vScale:o,_stacked:l,_dataset:h}=this._cachedMeta,{sharedOptions:u,includeOptions:c}=this._getSharedOptions(e,n),d=a.axis,f=o.axis,{spanGaps:p,segment:m}=this.options,g=(0,r.x)(p)?p:Number.POSITIVE_INFINITY,b=this.chart._animationsDisabled||s||"none"===n,v=e>0&&this.getParsed(e-1);for(let p=e;p<e+i;++p){let e=t[p],i=this.getParsed(p),y=b?e:{},x=(0,r.k)(i[f]),_=y[d]=a.getPixelForValue(i[d],p),w=y[f]=s||x?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,i,l):i[f],p);y.skip=isNaN(_)||isNaN(w)||x,y.stop=p>0&&Math.abs(i[d]-v[d])>g,m&&(y.parsed=i,y.raw=h.data[p]),c&&(y.options=u||this.resolveDataElementOptions(p,e.active?"active":n)),b||this.updateElement(e,p,y,n),v=i}}getMaxOverflow(){let t=this._cachedMeta,e=t.dataset,i=e.options&&e.options.borderWidth||0,n=t.data||[];if(!n.length)return i;let r=n[0].size(this.resolveDataElementOptions(0)),s=n[n.length-1].size(this.resolveDataElementOptions(n.length-1));return Math.max(i,r,s)/2}draw(){let t=this._cachedMeta;t.dataset.updateControlPoints(this.chart.chartArea,t.iScale.axis),super.draw()}}P.id="line",P.defaults={datasetElementType:"line",dataElementType:"point",showLine:!0,spanGaps:!1},P.overrides={scales:{_index_:{type:"category"},_value_:{type:"linear"}}};class A extends w{constructor(t,e){super(t,e),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(t){let e=this._cachedMeta,i=this.chart,n=i.data.labels||[],s=(0,r.o)(e._parsed[t].r,i.options.locale);return{label:n[t]||"",value:s}}parseObjectData(t,e,i,n){return(0,r.y).bind(this)(t,e,i,n)}update(t){let e=this._cachedMeta.data;this._updateRadius(),this.updateElements(e,0,e.length,t)}getMinMax(){let t=this._cachedMeta,e={min:Number.POSITIVE_INFINITY,max:Number.NEGATIVE_INFINITY};return t.data.forEach((t,i)=>{let n=this.getParsed(i).r;!isNaN(n)&&this.chart.getDataVisibility(i)&&(n<e.min&&(e.min=n),n>e.max&&(e.max=n))}),e}_updateRadius(){let t=this.chart,e=t.chartArea,i=t.options,n=Math.min(e.right-e.left,e.bottom-e.top),r=Math.max(n/2,0),s=Math.max(i.cutoutPercentage?r/100*i.cutoutPercentage:1,0),a=(r-s)/t.getVisibleDatasetCount();this.outerRadius=r-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(t,e,i,n){let s;let a="reset"===n,o=this.chart,l=o.options,h=l.animation,u=this._cachedMeta.rScale,c=u.xCenter,d=u.yCenter,f=u.getIndexAngle(0)-.5*r.P,p=f,m=360/this.countVisibleElements();for(s=0;s<e;++s)p+=this._computeAngle(s,n,m);for(s=e;s<e+i;s++){let e=t[s],i=p,r=p+this._computeAngle(s,n,m),l=o.getDataVisibility(s)?u.getDistanceFromCenterForValue(this.getParsed(s).r):0;p=r,a&&(h.animateScale&&(l=0),h.animateRotate&&(i=r=f));let g={x:c,y:d,innerRadius:0,outerRadius:l,startAngle:i,endAngle:r,options:this.resolveDataElementOptions(s,e.active?"active":n)};this.updateElement(e,s,g,n)}}countVisibleElements(){let t=this._cachedMeta,e=0;return t.data.forEach((t,i)=>{!isNaN(this.getParsed(i).r)&&this.chart.getDataVisibility(i)&&e++}),e}_computeAngle(t,e,i){return this.chart.getDataVisibility(t)?(0,r.t)(this.resolveDataElementOptions(t,e).angle||i):0}}A.id="polarArea",A.defaults={dataElementType:"arc",animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:"number",properties:["x","y","startAngle","endAngle","innerRadius","outerRadius"]}},indexAxis:"r",startAngle:0},A.overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(t){let e=t.data;if(e.labels.length&&e.datasets.length){let{labels:{pointStyle:i}}=t.legend.options;return e.labels.map((e,n)=>{let r=t.getDatasetMeta(0),s=r.controller.getStyle(n);return{text:e,fillStyle:s.backgroundColor,strokeStyle:s.borderColor,lineWidth:s.borderWidth,pointStyle:i,hidden:!t.getDataVisibility(n),index:n}})}return[]}},onClick(t,e,i){i.chart.toggleDataVisibility(e.index),i.chart.update()}},tooltip:{callbacks:{title:()=>"",label:t=>t.chart.data.labels[t.dataIndex]+": "+t.formattedValue}}},scales:{r:{type:"radialLinear",angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};class I extends E{}I.id="pie",I.defaults={cutout:0,rotation:0,circumference:360,radius:"100%"};class L extends w{getLabelAndValue(t){let e=this._cachedMeta.vScale,i=this.getParsed(t);return{label:e.getLabels()[t],value:""+e.getLabelForValue(i[e.axis])}}parseObjectData(t,e,i,n){return(0,r.y).bind(this)(t,e,i,n)}update(t){let e=this._cachedMeta,i=e.dataset,n=e.data||[],r=e.iScale.getLabels();if(i.points=n,"resize"!==t){let e=this.resolveDatasetElementOptions(t);this.options.showLine||(e.borderWidth=0);let s={_loop:!0,_fullLoop:r.length===n.length,options:e};this.updateElement(i,void 0,s,t)}this.updateElements(n,0,n.length,t)}updateElements(t,e,i,n){let r=this._cachedMeta.rScale,s="reset"===n;for(let a=e;a<e+i;a++){let e=t[a],i=this.resolveDataElementOptions(a,e.active?"active":n),o=r.getPointPositionForValue(a,this.getParsed(a).r),l=s?r.xCenter:o.x,h=s?r.yCenter:o.y,u={x:l,y:h,angle:o.angle,skip:isNaN(l)||isNaN(h),options:i};this.updateElement(e,a,u,n)}}}L.id="radar",L.defaults={datasetElementType:"line",dataElementType:"point",indexAxis:"r",showLine:!0,elements:{line:{fill:"start"}}},L.overrides={aspectRatio:1,scales:{r:{type:"radialLinear"}}};class ${constructor(){this.x=void 0,this.y=void 0,this.active=!1,this.options=void 0,this.$animations=void 0}tooltipPosition(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}hasValue(){return(0,r.x)(this.x)&&(0,r.x)(this.y)}getProps(t,e){let i=this.$animations;if(!e||!i)return this;let n={};return t.forEach(t=>{n[t]=i[t]&&i[t].active()?i[t]._to:this[t]}),n}}$.defaults={},$.defaultRoutes=void 0;let R={values:t=>(0,r.b)(t)?t:""+t,numeric(t,e,i){let n;if(0===t)return"0";let s=this.chart.options.locale,a=t;if(i.length>1){let e;let r=Math.max(Math.abs(i[0].value),Math.abs(i[i.length-1].value));(r<1e-4||r>1e15)&&(n="scientific"),Math.abs(e=i.length>3?i[2].value-i[1].value:i[1].value-i[0].value)>=1&&t!==Math.floor(t)&&(e=t-Math.floor(t)),a=e}let o=(0,r.z)(Math.abs(a)),l=Math.max(Math.min(-1*Math.floor(o),20),0),h={notation:n,minimumFractionDigits:l,maximumFractionDigits:l};return Object.assign(h,this.options.ticks.format),(0,r.o)(t,s,h)},logarithmic(t,e,i){if(0===t)return"0";let n=t/Math.pow(10,Math.floor((0,r.z)(t)));return 1===n||2===n||5===n?R.numeric.call(this,t,e,i):""}};var F={formatters:R};function N(t,e,i,n,s){let a,o,l;let h=(0,r.v)(n,0),u=Math.min((0,r.v)(s,t.length),t.length),c=0;for(i=Math.ceil(i),s&&(i=(a=s-n)/Math.floor(a/i)),l=h;l<0;)l=Math.round(h+ ++c*i);for(o=Math.max(h,0);o<u;o++)o===l&&(e.push(t[o]),l=Math.round(h+ ++c*i))}(0,r.d).set("scale",{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:"ticks",grace:0,grid:{display:!0,lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(t,e)=>e.lineWidth,tickColor:(t,e)=>e.color,offset:!1,borderDash:[],borderDashOffset:0,borderWidth:1},title:{display:!1,text:"",padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:"",padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:F.formatters.values,minor:{},major:{},align:"center",crossAlign:"near",showLabelBackdrop:!1,backdropColor:"rgba(255, 255, 255, 0.75)",backdropPadding:2}}),(0,r.d).route("scale.ticks","color","","color"),(0,r.d).route("scale.grid","color","","borderColor"),(0,r.d).route("scale.grid","borderColor","","borderColor"),(0,r.d).route("scale.title","color","","color"),(0,r.d).describe("scale",{_fallback:!1,_scriptable:t=>!t.startsWith("before")&&!t.startsWith("after")&&"callback"!==t&&"parser"!==t,_indexable:t=>"borderDash"!==t&&"tickBorderDash"!==t}),(0,r.d).describe("scales",{_fallback:"scale"}),(0,r.d).describe("scale.ticks",{_scriptable:t=>"backdropPadding"!==t&&"callback"!==t,_indexable:t=>"backdropPadding"!==t});let z=t=>"left"===t?"right":"right"===t?"left":t,j=(t,e,i)=>"top"===e||"left"===e?t[e]+i:t[e]-i;function V(t,e){let i=[],n=t.length/e,r=t.length,s=0;for(;s<r;s+=n)i.push(t[Math.floor(s)]);return i}function H(t){return t.drawTicks?t.tickLength:0}function B(t,e){if(!t.display)return 0;let i=(0,r.O)(t.font,e),n=(0,r.K)(t.padding),s=(0,r.b)(t.text)?t.text.length:1;return s*i.lineHeight+n.height}class W extends ${constructor(t){super(),this.id=t.id,this.type=t.type,this.options=void 0,this.ctx=t.ctx,this.chart=t.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(t){this.options=t.setContext(this.getContext()),this.axis=t.axis,this._userMin=this.parse(t.min),this._userMax=this.parse(t.max),this._suggestedMin=this.parse(t.suggestedMin),this._suggestedMax=this.parse(t.suggestedMax)}parse(t,e){return t}getUserBounds(){let{_userMin:t,_userMax:e,_suggestedMin:i,_suggestedMax:n}=this;return t=(0,r.B)(t,Number.POSITIVE_INFINITY),e=(0,r.B)(e,Number.NEGATIVE_INFINITY),i=(0,r.B)(i,Number.POSITIVE_INFINITY),n=(0,r.B)(n,Number.NEGATIVE_INFINITY),{min:(0,r.B)(t,i),max:(0,r.B)(e,n),minDefined:(0,r.g)(t),maxDefined:(0,r.g)(e)}}getMinMax(t){let e,{min:i,max:n,minDefined:s,maxDefined:a}=this.getUserBounds();if(s&&a)return{min:i,max:n};let o=this.getMatchingVisibleMetas();for(let r=0,l=o.length;r<l;++r)e=o[r].controller.getMinMax(this,t),s||(i=Math.min(i,e.min)),a||(n=Math.max(n,e.max));return i=a&&i>n?n:i,n=s&&i>n?i:n,{min:(0,r.B)(i,(0,r.B)(n,i)),max:(0,r.B)(n,(0,r.B)(i,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels||[]}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){(0,r.C)(this.options.beforeUpdate,[this])}update(t,e,i){let{beginAtZero:n,grace:s,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=t,this.maxHeight=e,this._margins=i=Object.assign({left:0,right:0,top:0,bottom:0},i),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+i.left+i.right:this.height+i.top+i.bottom,this._dataLimitsCached||(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=(0,r.D)(this,s,n),this._dataLimitsCached=!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let l=o<this.ticks.length;this._convertTicksToLabels(l?V(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||"auto"===a.source)&&(this.ticks=function(t,e){let i=t.options.ticks,n=i.maxTicksLimit||function(t){let e=t.options.offset,i=t._tickSize(),n=t._length/i+(e?0:1),r=t._maxLength/i;return Math.floor(Math.min(n,r))}(t),s=i.major.enabled?function(t){let e,i;let n=[];for(e=0,i=t.length;e<i;e++)t[e].major&&n.push(e);return n}(e):[],a=s.length,o=s[0],l=s[a-1],h=[];if(a>n)return function(t,e,i,n){let r,s=0,a=i[0];for(r=0,n=Math.ceil(n);r<t.length;r++)r===a&&(e.push(t[r]),a=i[++s*n])}(e,h,s,a/n),h;let u=function(t,e,i){let n=function(t){let e,i;let n=t.length;if(n<2)return!1;for(i=t[0],e=1;e<n;++e)if(t[e]-t[e-1]!==i)return!1;return i}(t),s=e.length/i;if(!n)return Math.max(s,1);let a=(0,r.A)(n);for(let t=0,e=a.length-1;t<e;t++){let e=a[t];if(e>s)return e}return Math.max(s,1)}(s,e,n);if(a>0){let t,i;let n=a>1?Math.round((l-o)/(a-1)):null;for(N(e,h,u,(0,r.k)(n)?0:o-n,o),t=0,i=a-1;t<i;t++)N(e,h,u,s[t],s[t+1]);return N(e,h,u,l,(0,r.k)(n)?e.length:l+n),h}return N(e,h,u),h}(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),l&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let t,e,i=this.options.reverse;this.isHorizontal()?(t=this.left,e=this.right):(t=this.top,e=this.bottom,i=!i),this._startPixel=t,this._endPixel=e,this._reversePixels=i,this._length=e-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){(0,r.C)(this.options.afterUpdate,[this])}beforeSetDimensions(){(0,r.C)(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){(0,r.C)(this.options.afterSetDimensions,[this])}_callHooks(t){this.chart.notifyPlugins(t,this.getContext()),(0,r.C)(this.options[t],[this])}beforeDataLimits(){this._callHooks("beforeDataLimits")}determineDataLimits(){}afterDataLimits(){this._callHooks("afterDataLimits")}beforeBuildTicks(){this._callHooks("beforeBuildTicks")}buildTicks(){return[]}afterBuildTicks(){this._callHooks("afterBuildTicks")}beforeTickToLabelConversion(){(0,r.C)(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(t){let e,i,n;let s=this.options.ticks;for(e=0,i=t.length;e<i;e++)(n=t[e]).label=(0,r.C)(s.callback,[n.value,e,t],this)}afterTickToLabelConversion(){(0,r.C)(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){(0,r.C)(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let t,e,i;let n=this.options,s=n.ticks,a=this.ticks.length,o=s.minRotation||0,l=s.maxRotation,h=o;if(!this._isVisible()||!s.display||o>=l||a<=1||!this.isHorizontal()){this.labelRotation=o;return}let u=this._getLabelSizes(),c=u.widest.width,d=u.highest.height,f=(0,r.E)(this.chart.width-c,0,this.maxWidth);c+6>(t=n.offset?this.maxWidth/a:f/(a-1))&&(t=f/(a-(n.offset?.5:1)),e=this.maxHeight-H(n.grid)-s.padding-B(n.title,this.chart.options.font),i=Math.sqrt(c*c+d*d),h=Math.max(o,Math.min(l,h=(0,r.F)(Math.min(Math.asin((0,r.E)((u.highest.height+6)/t,-1,1)),Math.asin((0,r.E)(e/i,-1,1))-Math.asin((0,r.E)(d/i,-1,1))))))),this.labelRotation=h}afterCalculateLabelRotation(){(0,r.C)(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){(0,r.C)(this.options.beforeFit,[this])}fit(){let t={width:0,height:0},{chart:e,options:{ticks:i,title:n,grid:s}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){let a=B(n,e.options.font);if(o?(t.width=this.maxWidth,t.height=H(s)+a):(t.height=this.maxHeight,t.width=H(s)+a),i.display&&this.ticks.length){let{first:e,last:n,widest:s,highest:a}=this._getLabelSizes(),l=2*i.padding,h=(0,r.t)(this.labelRotation),u=Math.cos(h),c=Math.sin(h);if(o){let e=i.mirror?0:c*s.width+u*a.height;t.height=Math.min(this.maxHeight,t.height+e+l)}else{let e=i.mirror?0:u*s.width+c*a.height;t.width=Math.min(this.maxWidth,t.width+e+l)}this._calculatePadding(e,n,c,u)}}this._handleMargins(),o?(this.width=this._length=e.width-this._margins.left-this._margins.right,this.height=t.height):(this.width=t.width,this.height=this._length=e.height-this._margins.top-this._margins.bottom)}_calculatePadding(t,e,i,n){let{ticks:{align:r,padding:s},position:a}=this.options,o=0!==this.labelRotation,l="top"!==a&&"x"===this.axis;if(this.isHorizontal()){let a=this.getPixelForTick(0)-this.left,h=this.right-this.getPixelForTick(this.ticks.length-1),u=0,c=0;o?l?(u=n*t.width,c=i*e.height):(u=i*t.height,c=n*e.width):"start"===r?c=e.width:"end"===r?u=t.width:"inner"!==r&&(u=t.width/2,c=e.width/2),this.paddingLeft=Math.max((u-a+s)*this.width/(this.width-a),0),this.paddingRight=Math.max((c-h+s)*this.width/(this.width-h),0)}else{let i=e.height/2,n=t.height/2;"start"===r?(i=0,n=t.height):"end"===r&&(i=e.height,n=0),this.paddingTop=i+s,this.paddingBottom=n+s}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){(0,r.C)(this.options.afterFit,[this])}isHorizontal(){let{axis:t,position:e}=this.options;return"top"===e||"bottom"===e||"x"===t}isFullSize(){return this.options.fullSize}_convertTicksToLabels(t){let e,i;for(this.beforeTickToLabelConversion(),this.generateTickLabels(t),e=0,i=t.length;e<i;e++)(0,r.k)(t[e].label)&&(t.splice(e,1),i--,e--);this.afterTickToLabelConversion()}_getLabelSizes(){let t=this._labelSizes;if(!t){let e=this.options.ticks.sampleSize,i=this.ticks;e<i.length&&(i=V(i,e)),this._labelSizes=t=this._computeLabelSizes(i,i.length)}return t}_computeLabelSizes(t,e){let i,n,s,a,o,l,h,u,c,d,f;let{ctx:p,_longestTextCache:m}=this,g=[],b=[],v=0,y=0;for(i=0;i<e;++i){if(a=t[i].label,o=this._resolveTickFontOptions(i),p.font=l=o.string,h=m[l]=m[l]||{data:{},gc:[]},u=o.lineHeight,c=d=0,(0,r.k)(a)||(0,r.b)(a)){if((0,r.b)(a))for(n=0,s=a.length;n<s;++n)f=a[n],(0,r.k)(f)||(0,r.b)(f)||(c=(0,r.G)(p,h.data,h.gc,c,f),d+=u)}else c=(0,r.G)(p,h.data,h.gc,c,a),d=u;g.push(c),b.push(d),v=Math.max(c,v),y=Math.max(d,y)}(0,r.Q)(m,t=>{let i;let n=t.gc,r=n.length/2;if(r>e){for(i=0;i<r;++i)delete t.data[n[i]];n.splice(0,r)}});let x=g.indexOf(v),_=b.indexOf(y),w=t=>({width:g[t]||0,height:b[t]||0});return{first:w(0),last:w(e-1),widest:w(x),highest:w(_),widths:g,heights:b}}getLabelForValue(t){return t}getPixelForValue(t,e){return NaN}getValueForPixel(t){}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getPixelForDecimal(t){this._reversePixels&&(t=1-t);let e=this._startPixel+t*this._length;return(0,r.I)(this._alignToPixels?(0,r.J)(this.chart,e,0):e)}getDecimalForPixel(t){let e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:t,max:e}=this;return t<0&&e<0?e:t>0&&e>0?t:0}getContext(t){var e,i;let n=this.ticks||[];if(t>=0&&t<n.length){let i=n[t];return i.$context||(i.$context=(e=this.getContext(),(0,r.h)(e,{tick:i,index:t,type:"tick"})))}return this.$context||(this.$context=(i=this.chart.getContext(),(0,r.h)(i,{scale:this,type:"scale"})))}_tickSize(){let t=this.options.ticks,e=(0,r.t)(this.labelRotation),i=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),s=this._getLabelSizes(),a=t.autoSkipPadding||0,o=s?s.widest.width+a:0,l=s?s.highest.height+a:0;return this.isHorizontal()?l*i>o*n?o/i:l/n:l*n<o*i?l/i:o/n}_isVisible(){let t=this.options.display;return"auto"!==t?!!t:this.getMatchingVisibleMetas().length>0}_computeGridLineItems(t){let e,i,n,s,a,o,l,h,u,c,d,f;let p=this.axis,m=this.chart,g=this.options,{grid:b,position:v}=g,y=b.offset,x=this.isHorizontal(),_=this.ticks,w=_.length+(y?1:0),k=H(b),M=[],S=b.setContext(this.getContext()),T=S.drawBorder?S.borderWidth:0,C=T/2,O=function(t){return(0,r.J)(m,t,T)};if("top"===v)e=O(this.bottom),o=this.bottom-k,h=e-C,c=O(t.top)+C,f=t.bottom;else if("bottom"===v)e=O(this.top),c=t.top,f=O(t.bottom)-C,o=e+C,h=this.top+k;else if("left"===v)e=O(this.right),a=this.right-k,l=e-C,u=O(t.left)+C,d=t.right;else if("right"===v)e=O(this.left),u=t.left,d=O(t.right)-C,a=e+C,l=this.left+k;else if("x"===p){if("center"===v)e=O((t.top+t.bottom)/2+.5);else if((0,r.i)(v)){let t=Object.keys(v)[0],i=v[t];e=O(this.chart.scales[t].getPixelForValue(i))}c=t.top,f=t.bottom,h=(o=e+C)+k}else if("y"===p){if("center"===v)e=O((t.left+t.right)/2);else if((0,r.i)(v)){let t=Object.keys(v)[0],i=v[t];e=O(this.chart.scales[t].getPixelForValue(i))}l=(a=e-C)-k,u=t.left,d=t.right}let D=(0,r.v)(g.ticks.maxTicksLimit,w),E=Math.max(1,Math.ceil(w/D));for(i=0;i<w;i+=E){let t=b.setContext(this.getContext(i)),e=t.lineWidth,p=t.color,g=t.borderDash||[],v=t.borderDashOffset,_=t.tickWidth,w=t.tickColor,k=t.tickBorderDash||[],S=t.tickBorderDashOffset;void 0!==(n=function(t,e,i){let n;let r=t.ticks.length,s=Math.min(e,r-1),a=t._startPixel,o=t._endPixel,l=t.getPixelForTick(s);if(!i||(n=1===r?Math.max(l-a,o-l):0===e?(t.getPixelForTick(1)-l)/2:(l-t.getPixelForTick(s-1))/2,!((l+=s<e?n:-n)<a-1e-6)&&!(l>o+1e-6)))return l}(this,i,y))&&(s=(0,r.J)(m,n,e),x?a=l=u=d=s:o=h=c=f=s,M.push({tx1:a,ty1:o,tx2:l,ty2:h,x1:u,y1:c,x2:d,y2:f,width:e,color:p,borderDash:g,borderDashOffset:v,tickWidth:_,tickColor:w,tickBorderDash:k,tickBorderDashOffset:S}))}return this._ticksLength=w,this._borderValue=e,M}_computeLabelItems(t){let e,i,n,s,a,o,l,h,u,c,d;let f=this.axis,p=this.options,{position:m,ticks:g}=p,b=this.isHorizontal(),v=this.ticks,{align:y,crossAlign:x,padding:_,mirror:w}=g,k=H(p.grid),M=k+_,S=w?-_:M,T=-(0,r.t)(this.labelRotation),C=[],O="middle";if("top"===m)a=this.bottom-S,o=this._getXAxisLabelAlignment();else if("bottom"===m)a=this.top+S,o=this._getXAxisLabelAlignment();else if("left"===m){let t=this._getYAxisLabelAlignment(k);o=t.textAlign,s=t.x}else if("right"===m){let t=this._getYAxisLabelAlignment(k);o=t.textAlign,s=t.x}else if("x"===f){if("center"===m)a=(t.top+t.bottom)/2+M;else if((0,r.i)(m)){let t=Object.keys(m)[0],e=m[t];a=this.chart.scales[t].getPixelForValue(e)+M}o=this._getXAxisLabelAlignment()}else if("y"===f){if("center"===m)s=(t.left+t.right)/2-M;else if((0,r.i)(m)){let t=Object.keys(m)[0],e=m[t];s=this.chart.scales[t].getPixelForValue(e)}o=this._getYAxisLabelAlignment(k).textAlign}"y"===f&&("start"===y?O="top":"end"===y&&(O="bottom"));let D=this._getLabelSizes();for(e=0,i=v.length;e<i;++e){let t;n=v[e].label;let f=g.setContext(this.getContext(e));l=this.getPixelForTick(e)+g.labelOffset,u=(h=this._resolveTickFontOptions(e)).lineHeight,c=(0,r.b)(n)?n.length:1;let p=c/2,y=f.color,_=f.textStrokeColor,k=f.textStrokeWidth,M=o;if(b?(s=l,"inner"===o&&(M=e===i-1?this.options.reverse?"left":"right":0===e?this.options.reverse?"right":"left":"center"),d="top"===m?"near"===x||0!==T?-c*u+u/2:"center"===x?-D.highest.height/2-p*u+u:-D.highest.height+u/2:"near"===x||0!==T?u/2:"center"===x?D.highest.height/2-p*u:D.highest.height-c*u,w&&(d*=-1)):(a=l,d=(1-c)*u/2),f.showLabelBackdrop){let i=(0,r.K)(f.backdropPadding),n=D.heights[e],l=D.widths[e],h=a+d-i.top,u=s-i.left;switch(O){case"middle":h-=n/2;break;case"bottom":h-=n}switch(o){case"center":u-=l/2;break;case"right":u-=l}t={left:u,top:h,width:l+i.width,height:n+i.height,color:f.backdropColor}}C.push({rotation:T,label:n,font:h,color:y,strokeColor:_,strokeWidth:k,textOffset:d,textAlign:M,textBaseline:O,translation:[s,a],backdrop:t})}return C}_getXAxisLabelAlignment(){let{position:t,ticks:e}=this.options,i=-(0,r.t)(this.labelRotation);if(i)return"top"===t?"left":"right";let n="center";return"start"===e.align?n="left":"end"===e.align?n="right":"inner"===e.align&&(n="inner"),n}_getYAxisLabelAlignment(t){let e,i;let{position:n,ticks:{crossAlign:r,mirror:s,padding:a}}=this.options,o=this._getLabelSizes(),l=t+a,h=o.widest.width;return"left"===n?s?(i=this.right+a,"near"===r?e="left":"center"===r?(e="center",i+=h/2):(e="right",i+=h)):(i=this.right-l,"near"===r?e="right":"center"===r?(e="center",i-=h/2):(e="left",i=this.left)):"right"===n?s?(i=this.left+a,"near"===r?e="right":"center"===r?(e="center",i-=h/2):(e="left",i-=h)):(i=this.left+l,"near"===r?e="left":"center"===r?(e="center",i+=h/2):(e="right",i=this.right)):e="right",{textAlign:e,x:i}}_computeLabelArea(){if(this.options.ticks.mirror)return;let t=this.chart,e=this.options.position;return"left"===e||"right"===e?{top:0,left:this.left,bottom:t.height,right:this.right}:"top"===e||"bottom"===e?{top:this.top,left:0,bottom:this.bottom,right:t.width}:void 0}drawBackground(){let{ctx:t,options:{backgroundColor:e},left:i,top:n,width:r,height:s}=this;e&&(t.save(),t.fillStyle=e,t.fillRect(i,n,r,s),t.restore())}getLineWidthForValue(t){let e=this.options.grid;if(!this._isVisible()||!e.display)return 0;let i=this.ticks,n=i.findIndex(e=>e.value===t);if(n>=0){let t=e.setContext(this.getContext(n));return t.lineWidth}return 0}drawGrid(t){let e,i;let n=this.options.grid,r=this.ctx,s=this._gridLineItems||(this._gridLineItems=this._computeGridLineItems(t)),a=(t,e,i)=>{i.width&&i.color&&(r.save(),r.lineWidth=i.width,r.strokeStyle=i.color,r.setLineDash(i.borderDash||[]),r.lineDashOffset=i.borderDashOffset,r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(e.x,e.y),r.stroke(),r.restore())};if(n.display)for(e=0,i=s.length;e<i;++e){let t=s[e];n.drawOnChartArea&&a({x:t.x1,y:t.y1},{x:t.x2,y:t.y2},t),n.drawTicks&&a({x:t.tx1,y:t.ty1},{x:t.tx2,y:t.ty2},{color:t.tickColor,width:t.tickWidth,borderDash:t.tickBorderDash,borderDashOffset:t.tickBorderDashOffset})}}drawBorder(){let t,e,i,n;let{chart:s,ctx:a,options:{grid:o}}=this,l=o.setContext(this.getContext()),h=o.drawBorder?l.borderWidth:0;if(!h)return;let u=o.setContext(this.getContext(0)).lineWidth,c=this._borderValue;this.isHorizontal()?(t=(0,r.J)(s,this.left,h)-h/2,e=(0,r.J)(s,this.right,u)+u/2,i=n=c):(i=(0,r.J)(s,this.top,h)-h/2,n=(0,r.J)(s,this.bottom,u)+u/2,t=e=c),a.save(),a.lineWidth=l.borderWidth,a.strokeStyle=l.borderColor,a.beginPath(),a.moveTo(t,i),a.lineTo(e,n),a.stroke(),a.restore()}drawLabels(t){let e,i;let n=this.options.ticks;if(!n.display)return;let s=this.ctx,a=this._computeLabelArea();a&&(0,r.L)(s,a);let o=this._labelItems||(this._labelItems=this._computeLabelItems(t));for(e=0,i=o.length;e<i;++e){let t=o[e],i=t.font,n=t.label;t.backdrop&&(s.fillStyle=t.backdrop.color,s.fillRect(t.backdrop.left,t.backdrop.top,t.backdrop.width,t.backdrop.height));let a=t.textOffset;(0,r.M)(s,n,0,a,i,t)}a&&(0,r.N)(s)}drawTitle(){let t;let{ctx:e,options:{position:i,title:n,reverse:s}}=this;if(!n.display)return;let a=(0,r.O)(n.font),o=(0,r.K)(n.padding),l=n.align,h=a.lineHeight/2;"bottom"===i||"center"===i||(0,r.i)(i)?(h+=o.bottom,(0,r.b)(n.text)&&(h+=a.lineHeight*(n.text.length-1))):h+=o.top;let{titleX:u,titleY:c,maxWidth:d,rotation:f}=function(t,e,i,n){let s,a,o;let{top:l,left:h,bottom:u,right:c,chart:d}=t,{chartArea:f,scales:p}=d,m=0,g=u-l,b=c-h;if(t.isHorizontal()){if(a=(0,r.S)(n,h,c),(0,r.i)(i)){let t=Object.keys(i)[0],n=i[t];o=p[t].getPixelForValue(n)+g-e}else o="center"===i?(f.bottom+f.top)/2+g-e:j(t,i,e);s=c-h}else{if((0,r.i)(i)){let t=Object.keys(i)[0],n=i[t];a=p[t].getPixelForValue(n)-b+e}else a="center"===i?(f.left+f.right)/2-b+e:j(t,i,e);o=(0,r.S)(n,u,l),m="left"===i?-r.H:r.H}return{titleX:a,titleY:o,maxWidth:s,rotation:m}}(this,h,i,l);(0,r.M)(e,n.text,0,0,a,{color:n.color,maxWidth:d,rotation:f,textAlign:(t=(0,r.R)(l),(s&&"right"!==i||!s&&"right"===i)&&(t=z(t)),t),textBaseline:"middle",translation:[u,c]})}draw(t){this._isVisible()&&(this.drawBackground(),this.drawGrid(t),this.drawBorder(),this.drawTitle(),this.drawLabels(t))}_layers(){let t=this.options,e=t.ticks&&t.ticks.z||0,i=(0,r.v)(t.grid&&t.grid.z,-1);return this._isVisible()&&this.draw===W.prototype.draw?[{z:i,draw:t=>{this.drawBackground(),this.drawGrid(t),this.drawTitle()}},{z:i+1,draw:()=>{this.drawBorder()}},{z:e,draw:t=>{this.drawLabels(t)}}]:[{z:e,draw:t=>{this.draw(t)}}]}getMatchingVisibleMetas(t){let e,i;let n=this.chart.getSortedVisibleDatasetMetas(),r=this.axis+"AxisID",s=[];for(e=0,i=n.length;e<i;++e){let i=n[e];i[r]!==this.id||t&&i.type!==t||s.push(i)}return s}_resolveTickFontOptions(t){let e=this.options.ticks.setContext(this.getContext(t));return(0,r.O)(e.font)}_maxDigits(){let t=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/t}}class U{constructor(t,e,i){this.type=t,this.scope=e,this.override=i,this.items=Object.create(null)}isForType(t){return Object.prototype.isPrototypeOf.call(this.type.prototype,t.prototype)}register(t){let e;let i=Object.getPrototypeOf(t);"id"in i&&"defaults"in i&&(e=this.register(i));let n=this.items,s=t.id,a=this.scope+"."+s;if(!s)throw Error("class does not have id: "+t);return s in n||(n[s]=t,function(t,e,i){let n=(0,r.V)(Object.create(null),[i?(0,r.d).get(i):{},(0,r.d).get(e),t.defaults]);(0,r.d).set(e,n),t.defaultRoutes&&function(t,e){Object.keys(e).forEach(i=>{let n=i.split("."),s=n.pop(),a=[t].concat(n).join("."),o=e[i].split("."),l=o.pop(),h=o.join(".");(0,r.d).route(a,s,h,l)})}(e,t.defaultRoutes),t.descriptors&&(0,r.d).describe(e,t.descriptors)}(t,a,e),this.override&&(0,r.d).override(t.id,t.overrides)),a}get(t){return this.items[t]}unregister(t){let e=this.items,i=t.id,n=this.scope;i in e&&delete e[i],n&&i in r.d[n]&&(delete r.d[n][i],this.override&&delete r.U[i])}}var q=new class{constructor(){this.controllers=new U(w,"datasets",!0),this.elements=new U($,"elements"),this.plugins=new U(Object,"plugins"),this.scales=new U(W,"scales"),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...t){this._each("register",t)}remove(...t){this._each("unregister",t)}addControllers(...t){this._each("register",t,this.controllers)}addElements(...t){this._each("register",t,this.elements)}addPlugins(...t){this._each("register",t,this.plugins)}addScales(...t){this._each("register",t,this.scales)}getController(t){return this._get(t,this.controllers,"controller")}getElement(t){return this._get(t,this.elements,"element")}getPlugin(t){return this._get(t,this.plugins,"plugin")}getScale(t){return this._get(t,this.scales,"scale")}removeControllers(...t){this._each("unregister",t,this.controllers)}removeElements(...t){this._each("unregister",t,this.elements)}removePlugins(...t){this._each("unregister",t,this.plugins)}removeScales(...t){this._each("unregister",t,this.scales)}_each(t,e,i){[...e].forEach(e=>{let n=i||this._getRegistryForType(e);i||n.isForType(e)||n===this.plugins&&e.id?this._exec(t,n,e):(0,r.Q)(e,e=>{let n=i||this._getRegistryForType(e);this._exec(t,n,e)})})}_exec(t,e,i){let n=(0,r.W)(t);(0,r.C)(i["before"+n],[],i),e[t](i),(0,r.C)(i["after"+n],[],i)}_getRegistryForType(t){for(let e=0;e<this._typedRegistries.length;e++){let i=this._typedRegistries[e];if(i.isForType(t))return i}return this.plugins}_get(t,e,i){let n=e.get(t);if(void 0===n)throw Error('"'+t+'" is not a registered '+i+".");return n}};class Z extends w{update(t){let e=this._cachedMeta,{data:i=[]}=e,n=this.chart._animationsDisabled,{start:s,count:a}=(0,r.q)(e,i,n);if(this._drawStart=s,this._drawCount=a,(0,r.w)(e)&&(s=0,a=i.length),this.options.showLine){let{dataset:r,_dataset:s}=e;r._chart=this.chart,r._datasetIndex=this.index,r._decimated=!!s._decimated,r.points=i;let a=this.resolveDatasetElementOptions(t);a.segment=this.options.segment,this.updateElement(r,void 0,{animated:!n,options:a},t)}this.updateElements(i,s,a,t)}addElements(){let{showLine:t}=this.options;!this.datasetElementType&&t&&(this.datasetElementType=q.getElement("line")),super.addElements()}updateElements(t,e,i,n){let s="reset"===n,{iScale:a,vScale:o,_stacked:l,_dataset:h}=this._cachedMeta,u=this.resolveDataElementOptions(e,n),c=this.getSharedOptions(u),d=this.includeOptions(n,c),f=a.axis,p=o.axis,{spanGaps:m,segment:g}=this.options,b=(0,r.x)(m)?m:Number.POSITIVE_INFINITY,v=this.chart._animationsDisabled||s||"none"===n,y=e>0&&this.getParsed(e-1);for(let u=e;u<e+i;++u){let e=t[u],i=this.getParsed(u),m=v?e:{},x=(0,r.k)(i[p]),_=m[f]=a.getPixelForValue(i[f],u),w=m[p]=s||x?o.getBasePixel():o.getPixelForValue(l?this.applyStack(o,i,l):i[p],u);m.skip=isNaN(_)||isNaN(w)||x,m.stop=u>0&&Math.abs(i[f]-y[f])>b,g&&(m.parsed=i,m.raw=h.data[u]),d&&(m.options=c||this.resolveDataElementOptions(u,e.active?"active":n)),v||this.updateElement(e,u,m,n),y=i}this.updateSharedOptions(c,n,u)}getMaxOverflow(){let t=this._cachedMeta,e=t.data||[];if(!this.options.showLine){let t=0;for(let i=e.length-1;i>=0;--i)t=Math.max(t,e[i].size(this.resolveDataElementOptions(i))/2);return t>0&&t}let i=t.dataset,n=i.options&&i.options.borderWidth||0;if(!e.length)return n;let r=e[0].size(this.resolveDataElementOptions(0)),s=e[e.length-1].size(this.resolveDataElementOptions(e.length-1));return Math.max(n,r,s)/2}}Z.id="scatter",Z.defaults={datasetElementType:!1,dataElementType:"point",showLine:!1,fill:!1},Z.overrides={interaction:{mode:"point"},plugins:{tooltip:{callbacks:{title:()=>"",label:t=>"("+t.label+", "+t.formattedValue+")"}}},scales:{x:{type:"linear"},y:{type:"linear"}}};var Y=/*#__PURE__*/Object.freeze({__proto__:null,BarController:O,BubbleController:D,DoughnutController:E,LineController:P,PolarAreaController:A,PieController:I,RadarController:L,ScatterController:Z});function X(){throw Error("This method is not implemented: Check that a complete date adapter is provided.")}class K{constructor(t){this.options=t||{}}init(t){}formats(){return X()}parse(t,e){return X()}format(t,e){return X()}add(t,e,i){return X()}diff(t,e,i){return X()}startOf(t,e,i){return X()}endOf(t,e){return X()}}K.override=function(t){Object.assign(K.prototype,t)};var J={_date:K};function G(t,e,i,n,s){let a=t.getSortedVisibleDatasetMetas(),o=i[e];for(let t=0,i=a.length;t<i;++t){let{index:i,data:l}=a[t],{lo:h,hi:u}=function(t,e,i,n){let{controller:s,data:a,_sorted:o}=t,l=s._cachedMeta.iScale;if(l&&e===l.axis&&"r"!==e&&o&&a.length){let t=l._reversePixels?r.Y:r.Z;if(!n)return t(a,e,i);if(s._sharedOptions){let n=a[0],r="function"==typeof n.getRange&&n.getRange(e);if(r){let n=t(a,e,i-r),s=t(a,e,i+r);return{lo:n.lo,hi:s.hi}}}}return{lo:0,hi:a.length-1}}(a[t],e,o,s);for(let t=h;t<=u;++t){let e=l[t];e.skip||n(e,i,t)}}}function Q(t,e,i,n,s){let a=[];return(s||t.isPointInArea(e))&&G(t,i,e,function(i,o,l){(s||(0,r.$)(i,t.chartArea,0))&&i.inRange(e.x,e.y,n)&&a.push({element:i,datasetIndex:o,index:l})},!0),a}function tt(t,e,i,n,s,a){let o;return a||t.isPointInArea(e)?"r"!==i||n?function(t,e,i,n,r,s){let a=[],o=function(t){let e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){let r=e?Math.abs(t.x-n.x):0,s=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(r,2)+Math.pow(s,2))}}(i),l=Number.POSITIVE_INFINITY;return G(t,i,e,function(i,h,u){let c=i.inRange(e.x,e.y,r);if(n&&!c)return;let d=i.getCenterPoint(r),f=!!s||t.isPointInArea(d);if(!f&&!c)return;let p=o(e,d);p<l?(a=[{element:i,datasetIndex:h,index:u}],l=p):p===l&&a.push({element:i,datasetIndex:h,index:u})}),a}(t,e,i,n,s,a):(o=[],G(t,i,e,function(t,i,n){let{startAngle:a,endAngle:l}=t.getProps(["startAngle","endAngle"],s),{angle:h}=(0,r.a0)(t,{x:e.x,y:e.y});(0,r.p)(h,a,l)&&o.push({element:t,datasetIndex:i,index:n})}),o):[]}function te(t,e,i,n,r){let s=[],a="x"===i?"inXRange":"inYRange",o=!1;return(G(t,i,e,(t,n,l)=>{t[a](e[i],r)&&(s.push({element:t,datasetIndex:n,index:l}),o=o||t.inRange(e.x,e.y,r))}),n&&!o)?[]:s}var ti={evaluateInteractionItems:G,modes:{index(t,e,i,n){let s=(0,r.X)(e,t),a=i.axis||"x",o=i.includeInvisible||!1,l=i.intersect?Q(t,s,a,n,o):tt(t,s,a,!1,n,o),h=[];return l.length?(t.getSortedVisibleDatasetMetas().forEach(t=>{let e=l[0].index,i=t.data[e];i&&!i.skip&&h.push({element:i,datasetIndex:t.index,index:e})}),h):[]},dataset(t,e,i,n){let s=(0,r.X)(e,t),a=i.axis||"xy",o=i.includeInvisible||!1,l=i.intersect?Q(t,s,a,n,o):tt(t,s,a,!1,n,o);if(l.length>0){let e=l[0].datasetIndex,i=t.getDatasetMeta(e).data;l=[];for(let t=0;t<i.length;++t)l.push({element:i[t],datasetIndex:e,index:t})}return l},point(t,e,i,n){let s=(0,r.X)(e,t),a=i.axis||"xy",o=i.includeInvisible||!1;return Q(t,s,a,n,o)},nearest(t,e,i,n){let s=(0,r.X)(e,t),a=i.axis||"xy",o=i.includeInvisible||!1;return tt(t,s,a,i.intersect,n,o)},x(t,e,i,n){let s=(0,r.X)(e,t);return te(t,s,"x",i.intersect,n)},y(t,e,i,n){let s=(0,r.X)(e,t);return te(t,s,"y",i.intersect,n)}}};let tn=["left","top","right","bottom"];function tr(t,e){return t.filter(t=>t.pos===e)}function ts(t,e){return t.filter(t=>-1===tn.indexOf(t.pos)&&t.box.axis===e)}function ta(t,e){return t.sort((t,i)=>{let n=e?i:t,r=e?t:i;return n.weight===r.weight?n.index-r.index:n.weight-r.weight})}function to(t,e,i,n){return Math.max(t[i],e[i])+Math.max(t[n],e[n])}function tl(t,e){t.top=Math.max(t.top,e.top),t.left=Math.max(t.left,e.left),t.bottom=Math.max(t.bottom,e.bottom),t.right=Math.max(t.right,e.right)}function th(t,e,i,n){let s,a,o,l,h,u;let c=[];for(s=0,a=t.length,h=0;s<a;++s){(l=(o=t[s]).box).update(o.width||e.w,o.height||e.h,function(t,e){let i=e.maxPadding;return function(t){let n={left:0,top:0,right:0,bottom:0};return t.forEach(t=>{n[t]=Math.max(e[t],i[t])}),n}(t?["left","right"]:["top","bottom"])}(o.horizontal,e));let{same:a,other:d}=function(t,e,i,n){let{pos:s,box:a}=i,o=t.maxPadding;if(!(0,r.i)(s)){i.size&&(t[s]-=i.size);let e=n[i.stack]||{size:0,count:1};e.size=Math.max(e.size,i.horizontal?a.height:a.width),i.size=e.size/e.count,t[s]+=i.size}a.getPadding&&tl(o,a.getPadding());let l=Math.max(0,e.outerWidth-to(o,t,"left","right")),h=Math.max(0,e.outerHeight-to(o,t,"top","bottom")),u=l!==t.w,c=h!==t.h;return t.w=l,t.h=h,i.horizontal?{same:u,other:c}:{same:c,other:u}}(e,i,o,n);h|=a&&c.length,u=u||d,l.fullSize||c.push(o)}return h&&th(c,e,i,n)||u}function tu(t,e,i,n,r){t.top=i,t.left=e,t.right=e+n,t.bottom=i+r,t.width=n,t.height=r}function tc(t,e,i,n){let s=i.padding,{x:a,y:o}=e;for(let l of t){let t=l.box,h=n[l.stack]||{count:1,placed:0,weight:1},u=l.stackWeight/h.weight||1;if(l.horizontal){let n=e.w*u,a=h.size||t.height;(0,r.j)(h.start)&&(o=h.start),t.fullSize?tu(t,s.left,o,i.outerWidth-s.right-s.left,a):tu(t,e.left+h.placed,o,n,a),h.start=o,h.placed+=n,o=t.bottom}else{let n=e.h*u,o=h.size||t.width;(0,r.j)(h.start)&&(a=h.start),t.fullSize?tu(t,a,s.top,o,i.outerHeight-s.bottom-s.top):tu(t,a,e.top+h.placed,o,n),h.start=a,h.placed+=n,a=t.right}}e.x=a,e.y=o}(0,r.d).set("layout",{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}});var td={addBox(t,e){t.boxes||(t.boxes=[]),e.fullSize=e.fullSize||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw(t){e.draw(t)}}]},t.boxes.push(e)},removeBox(t,e){let i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure(t,e,i){e.fullSize=i.fullSize,e.position=i.position,e.weight=i.weight},update(t,e,i,n){if(!t)return;let s=(0,r.K)(t.options.layout.padding),a=Math.max(e-s.width,0),o=Math.max(i-s.height,0),l=function(t){let e=function(t){let e,i,n,r,s,a;let o=[];for(e=0,i=(t||[]).length;e<i;++e)n=t[e],({position:r,options:{stack:s,stackWeight:a=1}}=n),o.push({index:e,box:n,pos:r,horizontal:n.isHorizontal(),weight:n.weight,stack:s&&r+s,stackWeight:a});return o}(t),i=ta(e.filter(t=>t.box.fullSize),!0),n=ta(tr(e,"left"),!0),r=ta(tr(e,"right")),s=ta(tr(e,"top"),!0),a=ta(tr(e,"bottom")),o=ts(e,"x"),l=ts(e,"y");return{fullSize:i,leftAndTop:n.concat(s),rightAndBottom:r.concat(l).concat(a).concat(o),chartArea:tr(e,"chartArea"),vertical:n.concat(r).concat(l),horizontal:s.concat(a).concat(o)}}(t.boxes),h=l.vertical,u=l.horizontal;(0,r.Q)(t.boxes,t=>{"function"==typeof t.beforeLayout&&t.beforeLayout()});let c=h.reduce((t,e)=>e.box.options&&!1===e.box.options.display?t:t+1,0)||1,d=Object.freeze({outerWidth:e,outerHeight:i,padding:s,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/c,hBoxMaxHeight:o/2}),f=Object.assign({},s);tl(f,(0,r.K)(n));let p=Object.assign({maxPadding:f,w:a,h:o,x:s.left,y:s.top},s),m=function(t,e){let i,n,r;let s=function(t){let e={};for(let i of t){let{stack:t,pos:n,stackWeight:r}=i;if(!t||!tn.includes(n))continue;let s=e[t]||(e[t]={count:0,placed:0,weight:0,size:0});s.count++,s.weight+=r}return e}(t),{vBoxMaxWidth:a,hBoxMaxHeight:o}=e;for(i=0,n=t.length;i<n;++i){r=t[i];let{fullSize:n}=r.box,l=s[r.stack],h=l&&r.stackWeight/l.weight;r.horizontal?(r.width=h?h*a:n&&e.availableWidth,r.height=o):(r.width=a,r.height=h?h*o:n&&e.availableHeight)}return s}(h.concat(u),d);th(l.fullSize,p,d,m),th(h,p,d,m),th(u,p,d,m)&&th(h,p,d,m),function(t){let e=t.maxPadding;function i(i){let n=Math.max(e[i]-t[i],0);return t[i]+=n,n}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(p),tc(l.leftAndTop,p,d,m),p.x+=p.w,p.y+=p.h,tc(l.rightAndBottom,p,d,m),t.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},(0,r.Q)(l.chartArea,e=>{let i=e.box;Object.assign(i,t.chartArea),i.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}};class tf{acquireContext(t,e){}releaseContext(t){return!1}addEventListener(t,e,i){}removeEventListener(t,e,i){}getDevicePixelRatio(){return 1}getMaximumSize(t,e,i,n){return e=Math.max(0,e||t.width),i=i||t.height,{width:e,height:Math.max(0,n?Math.floor(e/n):i)}}isAttached(t){return!0}updateConfig(t){}}class tp extends tf{acquireContext(t){return t&&t.getContext&&t.getContext("2d")||null}updateConfig(t){t.options.animation=!1}}let tm="$chartjs",tg={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},tb=t=>null===t||""===t,tv=!!r.a5&&{passive:!0};function ty(t,e,i){t.canvas.removeEventListener(e,i,tv)}function tx(t,e){for(let i of t)if(i===e||i.contains(e))return!0}function t_(t,e,i){let n=t.canvas,r=new MutationObserver(t=>{let e=!1;for(let i of t)e=(e=e||tx(i.addedNodes,n))&&!tx(i.removedNodes,n);e&&i()});return r.observe(document,{childList:!0,subtree:!0}),r}function tw(t,e,i){let n=t.canvas,r=new MutationObserver(t=>{let e=!1;for(let i of t)e=(e=e||tx(i.removedNodes,n))&&!tx(i.addedNodes,n);e&&i()});return r.observe(document,{childList:!0,subtree:!0}),r}let tk=new Map,tM=0;function tS(){let t=window.devicePixelRatio;t!==tM&&(tM=t,tk.forEach((e,i)=>{i.currentDevicePixelRatio!==t&&e()}))}function tT(t,e,i){let n=t.canvas,s=n&&(0,r.a2)(n);if(!s)return;let a=(0,r.a4)((t,e)=>{let n=s.clientWidth;i(t,e),n<s.clientWidth&&i()},window),o=new ResizeObserver(t=>{let e=t[0],i=e.contentRect.width,n=e.contentRect.height;(0!==i||0!==n)&&a(i,n)});return o.observe(s),tk.size||window.addEventListener("resize",tS),tk.set(t,a),o}function tC(t,e,i){i&&i.disconnect(),"resize"===e&&(tk.delete(t),tk.size||window.removeEventListener("resize",tS))}function tO(t,e,i){let n=t.canvas,s=(0,r.a4)(e=>{null!==t.ctx&&i(function(t,e){let i=tg[t.type]||t.type,{x:n,y:s}=(0,r.X)(t,e);return{type:i,chart:e,native:t,x:void 0!==n?n:null,y:void 0!==s?s:null}}(e,t))},t,t=>{let e=t[0];return[e,e.offsetX,e.offsetY]});return!function(t,e,i){t.addEventListener(e,i,tv)}(n,e,s),s}class tD extends tf{acquireContext(t,e){let i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(!function(t,e){let i=t.style,n=t.getAttribute("height"),s=t.getAttribute("width");if(t[tm]={initial:{height:n,width:s,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",i.boxSizing=i.boxSizing||"border-box",tb(s)){let e=(0,r.a3)(t,"width");void 0!==e&&(t.width=e)}if(tb(n)){if(""===t.style.height)t.height=t.width/(e||2);else{let e=(0,r.a3)(t,"height");void 0!==e&&(t.height=e)}}}(t,e),i):null}releaseContext(t){let e=t.canvas;if(!e[tm])return!1;let i=e[tm].initial;["height","width"].forEach(t=>{let n=i[t];(0,r.k)(n)?e.removeAttribute(t):e.setAttribute(t,n)});let n=i.style||{};return Object.keys(n).forEach(t=>{e.style[t]=n[t]}),e.width=e.width,delete e[tm],!0}addEventListener(t,e,i){this.removeEventListener(t,e);let n=t.$proxies||(t.$proxies={}),r={attach:t_,detach:tw,resize:tT}[e]||tO;n[e]=r(t,e,i)}removeEventListener(t,e){let i=t.$proxies||(t.$proxies={}),n=i[e];if(!n)return;let r={attach:tC,detach:tC,resize:tC}[e]||ty;r(t,e,n),i[e]=void 0}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(t,e,i,n){return(0,r.a1)(t,e,i,n)}isAttached(t){let e=(0,r.a2)(t);return!!(e&&e.isConnected)}}function tE(t){return!(0,r.a6)()||"undefined"!=typeof OffscreenCanvas&&t instanceof OffscreenCanvas?tp:tD}class tP{constructor(){this._init=[]}notify(t,e,i,n){"beforeInit"===e&&(this._init=this._createDescriptors(t,!0),this._notify(this._init,t,"install"));let r=n?this._descriptors(t).filter(n):this._descriptors(t),s=this._notify(r,t,e,i);return"afterDestroy"===e&&(this._notify(r,t,"stop"),this._notify(this._init,t,"uninstall")),s}_notify(t,e,i,n){for(let s of(n=n||{},t)){let t=s.plugin,a=t[i],o=[e,n,s.options];if(!1===(0,r.C)(a,o,t)&&n.cancelable)return!1}return!0}invalidate(){(0,r.k)(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(t){if(this._cache)return this._cache;let e=this._cache=this._createDescriptors(t);return this._notifyStateChanges(t),e}_createDescriptors(t,e){let i=t&&t.config,n=(0,r.v)(i.options&&i.options.plugins,{}),s=function(t){let e={},i=[],n=Object.keys(q.plugins.items);for(let t=0;t<n.length;t++)i.push(q.getPlugin(n[t]));let r=t.plugins||[];for(let t=0;t<r.length;t++){let n=r[t];-1===i.indexOf(n)&&(i.push(n),e[n.id]=!0)}return{plugins:i,localIds:e}}(i);return!1!==n||e?function(t,{plugins:e,localIds:i},n,r){let s=[],a=t.getContext();for(let l of e){var o;let e=l.id,h=(o=n[e],r||!1!==o?!0===o?{}:o:null);null!==h&&s.push({plugin:l,options:function(t,{plugin:e,local:i},n,r){let s=t.pluginScopeKeys(e),a=t.getOptionScopes(n,s);return i&&e.defaults&&a.push(e.defaults),t.createResolver(a,r,[""],{scriptable:!1,indexable:!1,allKeys:!0})}(t.config,{plugin:l,local:i[e]},h,a)})}return s}(t,s,n,e):[]}_notifyStateChanges(t){let e=this._oldCache||[],i=this._cache,n=(t,e)=>t.filter(t=>!e.some(e=>t.plugin.id===e.plugin.id));this._notify(n(e,i),t,"stop"),this._notify(n(i,e),t,"start")}}function tA(t,e){let i=r.d.datasets[t]||{},n=(e.datasets||{})[t]||{};return n.indexAxis||e.indexAxis||i.indexAxis||"x"}function tI(t,e){var i;return"x"===t||"y"===t?t:e.axis||("top"===(i=e.position)||"bottom"===i?"x":"left"===i||"right"===i?"y":void 0)||t.charAt(0).toLowerCase()}function tL(t){let e=t.options||(t.options={});e.plugins=(0,r.v)(e.plugins,{}),e.scales=function(t,e){let i=r.U[t.type]||{scales:{}},n=e.scales||{},s=tA(t.type,e),a=Object.create(null),o=Object.create(null);return Object.keys(n).forEach(t=>{let e=n[t];if(!(0,r.i)(e))return console.error(`Invalid scale configuration for scale: ${t}`);if(e._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);let l=tI(t,e),h=l===s?"_index_":"_value_",u=i.scales||{};a[l]=a[l]||t,o[t]=(0,r.ac)(Object.create(null),[{axis:l},e,u[l],u[h]])}),t.data.datasets.forEach(i=>{let s=i.type||t.type,l=i.indexAxis||tA(s,e),h=r.U[s]||{},u=h.scales||{};Object.keys(u).forEach(t=>{let e;let s=(e=t,"_index_"===t?e=l:"_value_"===t&&(e="x"===l?"y":"x"),e),h=i[s+"AxisID"]||a[s]||s;o[h]=o[h]||Object.create(null),(0,r.ac)(o[h],[{axis:s},n[h],u[t]])})}),Object.keys(o).forEach(t=>{let e=o[t];(0,r.ac)(e,[r.d.scales[e.type],r.d.scale])}),o}(t,e)}function t$(t){return(t=t||{}).datasets=t.datasets||[],t.labels=t.labels||[],t}let tR=new Map,tF=new Set;function tN(t,e){let i=tR.get(t);return i||(i=e(),tR.set(t,i),tF.add(i)),i}let tz=(t,e,i)=>{let n=(0,r.f)(e,i);void 0!==n&&t.add(n)};class tj{constructor(t){var e;this._config=((e=(e=t)||{}).data=t$(e.data),tL(e),e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(t){this._config.type=t}get data(){return this._config.data}set data(t){this._config.data=t$(t)}get options(){return this._config.options}set options(t){this._config.options=t}get plugins(){return this._config.plugins}update(){let t=this._config;this.clearCache(),tL(t)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(t){return tN(t,()=>[[`datasets.${t}`,""]])}datasetAnimationScopeKeys(t,e){return tN(`${t}.transition.${e}`,()=>[[`datasets.${t}.transitions.${e}`,`transitions.${e}`],[`datasets.${t}`,""]])}datasetElementScopeKeys(t,e){return tN(`${t}-${e}`,()=>[[`datasets.${t}.elements.${e}`,`datasets.${t}`,`elements.${e}`,""]])}pluginScopeKeys(t){let e=t.id,i=this.type;return tN(`${i}-plugin-${e}`,()=>[[`plugins.${e}`,...t.additionalOptionScopes||[]]])}_cachedScopes(t,e){let i=this._scopeCache,n=i.get(t);return(!n||e)&&(n=new Map,i.set(t,n)),n}getOptionScopes(t,e,i){let{options:n,type:s}=this,a=this._cachedScopes(t,i),o=a.get(e);if(o)return o;let l=new Set;e.forEach(e=>{t&&(l.add(t),e.forEach(e=>tz(l,t,e))),e.forEach(t=>tz(l,n,t)),e.forEach(t=>tz(l,r.U[s]||{},t)),e.forEach(t=>tz(l,r.d,t)),e.forEach(t=>tz(l,r.a7,t))});let h=Array.from(l);return 0===h.length&&h.push(Object.create(null)),tF.has(e)&&a.set(e,h),h}chartOptionScopes(){let{options:t,type:e}=this;return[t,r.U[e]||{},r.d.datasets[e]||{},{type:e},r.d,r.a7]}resolveNamedOptions(t,e,i,n=[""]){let s={$shared:!0},{resolver:a,subPrefixes:o}=tV(this._resolverCache,t,n),l=a;if(function(t,e){let{isScriptable:i,isIndexable:n}=(0,r.ab)(t);for(let s of e){let e=i(s),a=n(s),o=(a||e)&&t[s];if(e&&((0,r.a8)(o)||tH(o))||a&&(0,r.b)(o))return!0}return!1}(a,e)){s.$shared=!1,i=(0,r.a8)(i)?i():i;let e=this.createResolver(t,i,o);l=(0,r.a9)(a,i,e)}for(let t of e)s[t]=l[t];return s}createResolver(t,e,i=[""],n){let{resolver:s}=tV(this._resolverCache,t,i);return(0,r.i)(e)?(0,r.a9)(s,e,void 0,n):s}}function tV(t,e,i){let n=t.get(e);n||(n=new Map,t.set(e,n));let s=i.join(),a=n.get(s);if(!a){let t=(0,r.aa)(e,i);a={resolver:t,subPrefixes:i.filter(t=>!t.toLowerCase().includes("hover"))},n.set(s,a)}return a}let tH=t=>(0,r.i)(t)&&Object.getOwnPropertyNames(t).reduce((e,i)=>e||(0,r.a8)(t[i]),!1),tB=["top","bottom","left","right","chartArea"];function tW(t,e){return"top"===t||"bottom"===t||-1===tB.indexOf(t)&&"x"===e}function tU(t,e){return function(i,n){return i[t]===n[t]?i[e]-n[e]:i[t]-n[t]}}function tq(t){let e=t.chart,i=e.options.animation;e.notifyPlugins("afterRender"),(0,r.C)(i&&i.onComplete,[t],e)}function tZ(t){let e=t.chart,i=e.options.animation;(0,r.C)(i&&i.onProgress,[t],e)}function tY(t){return(0,r.a6)()&&"string"==typeof t?t=document.getElementById(t):t&&t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas),t}let tX={},tK=t=>{let e=tY(t);return Object.values(tX).filter(t=>t.canvas===e).pop()};class tJ{constructor(t,e){let i=this.config=new tj(e),n=tY(t),a=tK(n);if(a)throw Error("Canvas is already in use. Chart with ID '"+a.id+"' must be destroyed before the canvas with ID '"+a.canvas.id+"' can be reused.");let o=i.createResolver(i.chartOptionScopes(),this.getContext());this.platform=new(i.platform||tE(n)),this.platform.updateConfig(i);let l=this.platform.acquireContext(n,o.aspectRatio),h=l&&l.canvas,u=h&&h.height,c=h&&h.width;if(this.id=(0,r.ad)(),this.ctx=l,this.canvas=h,this.width=c,this.height=u,this._options=o,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new tP,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=(0,r.ae)(t=>this.update(t),o.resizeDelay||0),this._dataChanges=[],tX[this.id]=this,!l||!h){console.error("Failed to create chart: can't acquire context from the given item");return}s.listen(this,"complete",tq),s.listen(this,"progress",tZ),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:t,maintainAspectRatio:e},width:i,height:n,_aspectRatio:s}=this;return(0,r.k)(t)?e&&s?s:n?i/n:null:t}get data(){return this.config.data}set data(t){this.config.data=t}get options(){return this._options}set options(t){this.config.options=t}_initialize(){return this.notifyPlugins("beforeInit"),this.options.responsive?this.resize():(0,r.af)(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins("afterInit"),this}clear(){return(0,r.ag)(this.canvas,this.ctx),this}stop(){return s.stop(this),this}resize(t,e){s.running(this)?this._resizeBeforeDraw={width:t,height:e}:this._resize(t,e)}_resize(t,e){let i=this.options,n=this.canvas,s=i.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(n,t,e,s),o=i.devicePixelRatio||this.platform.getDevicePixelRatio(),l=this.width?"resize":"attach";this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,(0,r.af)(this,o,!0)&&(this.notifyPlugins("resize",{size:a}),(0,r.C)(i.onResize,[this,a],this),this.attached&&this._doResize(l)&&this.render())}ensureScalesHaveIDs(){let t=this.options,e=t.scales||{};(0,r.Q)(e,(t,e)=>{t.id=e})}buildOrUpdateScales(){let t=this.options,e=t.scales,i=this.scales,n=Object.keys(i).reduce((t,e)=>(t[e]=!1,t),{}),s=[];e&&(s=s.concat(Object.keys(e).map(t=>{let i=e[t],n=tI(t,i),r="r"===n,s="x"===n;return{options:i,dposition:r?"chartArea":s?"bottom":"left",dtype:r?"radialLinear":s?"category":"linear"}}))),(0,r.Q)(s,e=>{let s=e.options,a=s.id,o=tI(a,s),l=(0,r.v)(s.type,e.dtype);(void 0===s.position||tW(s.position,o)!==tW(e.dposition))&&(s.position=e.dposition),n[a]=!0;let h=null;if(a in i&&i[a].type===l)h=i[a];else{let t=q.getScale(l);i[(h=new t({id:a,type:l,ctx:this.ctx,chart:this})).id]=h}h.init(s,t)}),(0,r.Q)(n,(t,e)=>{t||delete i[e]}),(0,r.Q)(i,t=>{td.configure(this,t,t.options),td.addBox(this,t)})}_updateMetasets(){let t=this._metasets,e=this.data.datasets.length,i=t.length;if(t.sort((t,e)=>t.index-e.index),i>e){for(let t=e;t<i;++t)this._destroyDatasetMeta(t);t.splice(e,i-e)}this._sortedMetasets=t.slice(0).sort(tU("order","index"))}_removeUnreferencedMetasets(){let{_metasets:t,data:{datasets:e}}=this;t.length>e.length&&delete this._stacks,t.forEach((t,i)=>{0===e.filter(e=>e===t._dataset).length&&this._destroyDatasetMeta(i)})}buildOrUpdateControllers(){let t,e;let i=[],n=this.data.datasets;for(this._removeUnreferencedMetasets(),t=0,e=n.length;t<e;t++){let e=n[t],s=this.getDatasetMeta(t),a=e.type||this.config.type;if(s.type&&s.type!==a&&(this._destroyDatasetMeta(t),s=this.getDatasetMeta(t)),s.type=a,s.indexAxis=e.indexAxis||tA(a,this.options),s.order=e.order||0,s.index=t,s.label=""+e.label,s.visible=this.isDatasetVisible(t),s.controller)s.controller.updateIndex(t),s.controller.linkScales();else{let e=q.getController(a),{datasetElementType:n,dataElementType:o}=r.d.datasets[a];Object.assign(e.prototype,{dataElementType:q.getElement(o),datasetElementType:n&&q.getElement(n)}),s.controller=new e(this,t),i.push(s.controller)}}return this._updateMetasets(),i}_resetElements(){(0,r.Q)(this.data.datasets,(t,e)=>{this.getDatasetMeta(e).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins("reset")}update(t){let e=this.config;e.update();let i=this._options=e.createResolver(e.chartOptionScopes(),this.getContext()),n=this._animationsDisabled=!i.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),!1===this.notifyPlugins("beforeUpdate",{mode:t,cancelable:!0}))return;let s=this.buildOrUpdateControllers();this.notifyPlugins("beforeElementsUpdate");let a=0;for(let t=0,e=this.data.datasets.length;t<e;t++){let{controller:e}=this.getDatasetMeta(t),i=!n&&-1===s.indexOf(e);e.buildOrUpdateElements(i),a=Math.max(+e.getMaxOverflow(),a)}a=this._minPadding=i.layout.autoPadding?a:0,this._updateLayout(a),n||(0,r.Q)(s,t=>{t.reset()}),this._updateDatasets(t),this.notifyPlugins("afterUpdate",{mode:t}),this._layers.sort(tU("z","_idx"));let{_active:o,_lastEvent:l}=this;l?this._eventHandler(l,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){(0,r.Q)(this.scales,t=>{td.removeBox(this,t)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let t=this.options,e=new Set(Object.keys(this._listeners)),i=new Set(t.events);(0,r.ah)(e,i)&&!!this._responsiveListeners===t.responsive||(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:t}=this,e=this._getUniformDataChanges()||[];for(let{method:i,start:n,count:r}of e){let e="_removeElements"===i?-r:r;!function(t,e,i){let n=Object.keys(t);for(let r of n){let n=+r;if(n>=e){let s=t[r];delete t[r],(i>0||n>e)&&(t[n+i]=s)}}}(t,n,e)}}_getUniformDataChanges(){let t=this._dataChanges;if(!t||!t.length)return;this._dataChanges=[];let e=this.data.datasets.length,i=e=>new Set(t.filter(t=>t[0]===e).map((t,e)=>e+","+t.splice(1).join(","))),n=i(0);for(let t=1;t<e;t++)if(!(0,r.ah)(n,i(t)))return;return Array.from(n).map(t=>t.split(",")).map(t=>({method:t[1],start:+t[2],count:+t[3]}))}_updateLayout(t){if(!1===this.notifyPlugins("beforeLayout",{cancelable:!0}))return;td.update(this,this.width,this.height,t);let e=this.chartArea,i=e.width<=0||e.height<=0;this._layers=[],(0,r.Q)(this.boxes,t=>{i&&"chartArea"===t.position||(t.configure&&t.configure(),this._layers.push(...t._layers()))},this),this._layers.forEach((t,e)=>{t._idx=e}),this.notifyPlugins("afterLayout")}_updateDatasets(t){if(!1!==this.notifyPlugins("beforeDatasetsUpdate",{mode:t,cancelable:!0})){for(let t=0,e=this.data.datasets.length;t<e;++t)this.getDatasetMeta(t).controller.configure();for(let e=0,i=this.data.datasets.length;e<i;++e)this._updateDataset(e,(0,r.a8)(t)?t({datasetIndex:e}):t);this.notifyPlugins("afterDatasetsUpdate",{mode:t})}}_updateDataset(t,e){let i=this.getDatasetMeta(t),n={meta:i,index:t,mode:e,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetUpdate",n)&&(i.controller._update(e),n.cancelable=!1,this.notifyPlugins("afterDatasetUpdate",n))}render(){!1!==this.notifyPlugins("beforeRender",{cancelable:!0})&&(s.has(this)?this.attached&&!s.running(this)&&s.start(this):(this.draw(),tq({chart:this})))}draw(){let t;if(this._resizeBeforeDraw){let{width:t,height:e}=this._resizeBeforeDraw;this._resize(t,e),this._resizeBeforeDraw=null}if(this.clear(),this.width<=0||this.height<=0||!1===this.notifyPlugins("beforeDraw",{cancelable:!0}))return;let e=this._layers;for(t=0;t<e.length&&e[t].z<=0;++t)e[t].draw(this.chartArea);for(this._drawDatasets();t<e.length;++t)e[t].draw(this.chartArea);this.notifyPlugins("afterDraw")}_getSortedDatasetMetas(t){let e,i;let n=this._sortedMetasets,r=[];for(e=0,i=n.length;e<i;++e){let i=n[e];(!t||i.visible)&&r.push(i)}return r}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(!1===this.notifyPlugins("beforeDatasetsDraw",{cancelable:!0}))return;let t=this.getSortedVisibleDatasetMetas();for(let e=t.length-1;e>=0;--e)this._drawDataset(t[e]);this.notifyPlugins("afterDatasetsDraw")}_drawDataset(t){let e=this.ctx,i=t._clip,n=!i.disabled,s=this.chartArea,a={meta:t,index:t.index,cancelable:!0};!1!==this.notifyPlugins("beforeDatasetDraw",a)&&(n&&(0,r.L)(e,{left:!1===i.left?0:s.left-i.left,right:!1===i.right?this.width:s.right+i.right,top:!1===i.top?0:s.top-i.top,bottom:!1===i.bottom?this.height:s.bottom+i.bottom}),t.controller.draw(),n&&(0,r.N)(e),a.cancelable=!1,this.notifyPlugins("afterDatasetDraw",a))}isPointInArea(t){return(0,r.$)(t,this.chartArea,this._minPadding)}getElementsAtEventForMode(t,e,i,n){let r=ti.modes[e];return"function"==typeof r?r(this,t,i,n):[]}getDatasetMeta(t){let e=this.data.datasets[t],i=this._metasets,n=i.filter(t=>t&&t._dataset===e).pop();return n||(n={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e&&e.order||0,index:t,_dataset:e,_parsed:[],_sorted:!1},i.push(n)),n}getContext(){return this.$context||(this.$context=(0,r.h)(null,{chart:this,type:"chart"}))}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(t){let e=this.data.datasets[t];if(!e)return!1;let i=this.getDatasetMeta(t);return"boolean"==typeof i.hidden?!i.hidden:!e.hidden}setDatasetVisibility(t,e){let i=this.getDatasetMeta(t);i.hidden=!e}toggleDataVisibility(t){this._hiddenIndices[t]=!this._hiddenIndices[t]}getDataVisibility(t){return!this._hiddenIndices[t]}_updateVisibility(t,e,i){let n=i?"show":"hide",s=this.getDatasetMeta(t),a=s.controller._resolveAnimations(void 0,n);(0,r.j)(e)?(s.data[e].hidden=!i,this.update()):(this.setDatasetVisibility(t,i),a.update(s,{visible:i}),this.update(e=>e.datasetIndex===t?n:void 0))}hide(t,e){this._updateVisibility(t,e,!1)}show(t,e){this._updateVisibility(t,e,!0)}_destroyDatasetMeta(t){let e=this._metasets[t];e&&e.controller&&e.controller._destroy(),delete this._metasets[t]}_stop(){let t,e;for(this.stop(),s.remove(this),t=0,e=this.data.datasets.length;t<e;++t)this._destroyDatasetMeta(t)}destroy(){this.notifyPlugins("beforeDestroy");let{canvas:t,ctx:e}=this;this._stop(),this.config.clearCache(),t&&(this.unbindEvents(),(0,r.ag)(t,e),this.platform.releaseContext(e),this.canvas=null,this.ctx=null),this.notifyPlugins("destroy"),delete tX[this.id],this.notifyPlugins("afterDestroy")}toBase64Image(...t){return this.canvas.toDataURL(...t)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let t=this._listeners,e=this.platform,i=(i,n)=>{e.addEventListener(this,i,n),t[i]=n},n=(t,e,i)=>{t.offsetX=e,t.offsetY=i,this._eventHandler(t)};(0,r.Q)(this.options.events,t=>i(t,n))}bindResponsiveEvents(){let t;this._responsiveListeners||(this._responsiveListeners={});let e=this._responsiveListeners,i=this.platform,n=(t,n)=>{i.addEventListener(this,t,n),e[t]=n},r=(t,n)=>{e[t]&&(i.removeEventListener(this,t,n),delete e[t])},s=(t,e)=>{this.canvas&&this.resize(t,e)},a=()=>{r("attach",a),this.attached=!0,this.resize(),n("resize",s),n("detach",t)};t=()=>{this.attached=!1,r("resize",s),this._stop(),this._resize(0,0),n("attach",a)},i.isAttached(this.canvas)?a():t()}unbindEvents(){(0,r.Q)(this._listeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._listeners={},(0,r.Q)(this._responsiveListeners,(t,e)=>{this.platform.removeEventListener(this,e,t)}),this._responsiveListeners=void 0}updateHoverStyle(t,e,i){let n,r,s;let a=i?"set":"remove";for("dataset"===e&&this.getDatasetMeta(t[0].datasetIndex).controller["_"+a+"DatasetHoverStyle"](),r=0,s=t.length;r<s;++r){n=t[r];let e=n&&this.getDatasetMeta(n.datasetIndex).controller;e&&e[a+"HoverStyle"](n.element,n.datasetIndex,n.index)}}getActiveElements(){return this._active||[]}setActiveElements(t){let e=this._active||[],i=t.map(({datasetIndex:t,index:e})=>{let i=this.getDatasetMeta(t);if(!i)throw Error("No dataset found at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),n=!(0,r.ai)(i,e);n&&(this._active=i,this._lastEvent=null,this._updateHoverStyles(i,e))}notifyPlugins(t,e,i){return this._plugins.notify(this,t,e,i)}_updateHoverStyles(t,e,i){let n=this.options.hover,r=(t,e)=>t.filter(t=>!e.some(e=>t.datasetIndex===e.datasetIndex&&t.index===e.index)),s=r(e,t),a=i?t:r(t,e);s.length&&this.updateHoverStyle(s,n.mode,!1),a.length&&n.mode&&this.updateHoverStyle(a,n.mode,!0)}_eventHandler(t,e){let i={event:t,replay:e,cancelable:!0,inChartArea:this.isPointInArea(t)},n=e=>(e.options.events||this.options.events).includes(t.native.type);if(!1===this.notifyPlugins("beforeEvent",i,n))return;let r=this._handleEvent(t,e,i.inChartArea);return i.cancelable=!1,this.notifyPlugins("afterEvent",i,n),(r||i.changed)&&this.render(),this}_handleEvent(t,e,i){var n;let{_active:s=[],options:a}=this,o=this._getActiveElements(t,s,i,e),l=(0,r.aj)(t),h=(n=this._lastEvent,i&&"mouseout"!==t.type?l?n:t:null);i&&(this._lastEvent=null,(0,r.C)(a.onHover,[t,o,this],this),l&&(0,r.C)(a.onClick,[t,o,this],this));let u=!(0,r.ai)(o,s);return(u||e)&&(this._active=o,this._updateHoverStyles(o,s,e)),this._lastEvent=h,u}_getActiveElements(t,e,i,n){if("mouseout"===t.type)return[];if(!i)return e;let r=this.options.hover;return this.getElementsAtEventForMode(t,r.mode,r,n)}}let tG=()=>(0,r.Q)(tJ.instances,t=>t._plugins.invalidate());function tQ(t,e,i){let{startAngle:n,pixelMargin:s,x:a,y:o,outerRadius:l,innerRadius:h}=e,u=s/l;t.beginPath(),t.arc(a,o,l,n-u,i+u),h>s?(u=s/h,t.arc(a,o,h,i+u,n-u,!0)):t.arc(a,o,s,i+r.H,n-r.H),t.closePath(),t.clip()}function t0(t,e,i,n){return{x:i+t*Math.cos(e),y:n+t*Math.sin(e)}}function t1(t,e,i,n,s,a){let{x:o,y:l,startAngle:h,pixelMargin:u,innerRadius:c}=e,d=Math.max(e.outerRadius+n+i-u,0),f=c>0?c+n+i+u:0,p=0,m=s-h;if(n){let t=d>0?d-n:0,e=((c>0?c-n:0)+t)/2;p=(m-(0!==e?m*e/(e+n):m))/2}let g=Math.max(.001,m*d-i/r.P)/d,b=(m-g)/2,v=h+b+p,y=s-b-p,{outerStart:x,outerEnd:_,innerStart:w,innerEnd:k}=function(t,e,i,n){var s;let a=(s=t.options.borderRadius,(0,r.al)(s,["outerStart","outerEnd","innerStart","innerEnd"])),o=(i-e)/2,l=Math.min(o,n*e/2),h=t=>{let e=(i-Math.min(o,t))*n/2;return(0,r.E)(t,0,Math.min(o,e))};return{outerStart:h(a.outerStart),outerEnd:h(a.outerEnd),innerStart:(0,r.E)(a.innerStart,0,l),innerEnd:(0,r.E)(a.innerEnd,0,l)}}(e,f,d,y-v),M=d-x,S=d-_,T=v+x/M,C=y-_/S,O=f+w,D=f+k,E=v+w/O,P=y-k/D;if(t.beginPath(),a){if(t.arc(o,l,d,T,C),_>0){let e=t0(S,C,o,l);t.arc(e.x,e.y,_,C,y+r.H)}let e=t0(D,y,o,l);if(t.lineTo(e.x,e.y),k>0){let e=t0(D,P,o,l);t.arc(e.x,e.y,k,y+r.H,P+Math.PI)}if(t.arc(o,l,f,y-k/f,v+w/f,!0),w>0){let e=t0(O,E,o,l);t.arc(e.x,e.y,w,E+Math.PI,v-r.H)}let i=t0(M,v,o,l);if(t.lineTo(i.x,i.y),x>0){let e=t0(M,T,o,l);t.arc(e.x,e.y,x,v-r.H,T)}}else{t.moveTo(o,l);let e=Math.cos(T)*d+o,i=Math.sin(T)*d+l;t.lineTo(e,i);let n=Math.cos(C)*d+o,r=Math.sin(C)*d+l;t.lineTo(n,r)}t.closePath()}Object.defineProperties(tJ,{defaults:{enumerable:!0,value:r.d},instances:{enumerable:!0,value:tX},overrides:{enumerable:!0,value:r.U},registry:{enumerable:!0,value:q},version:{enumerable:!0,value:"3.9.1"},getChart:{enumerable:!0,value:tK},register:{enumerable:!0,value:(...t)=>{q.add(...t),tG()}},unregister:{enumerable:!0,value:(...t)=>{q.remove(...t),tG()}}});class t2 extends ${constructor(t){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,t&&Object.assign(this,t)}inRange(t,e,i){let n=this.getProps(["x","y"],i),{angle:s,distance:a}=(0,r.a0)(n,{x:t,y:e}),{startAngle:o,endAngle:l,innerRadius:h,outerRadius:u,circumference:c}=this.getProps(["startAngle","endAngle","innerRadius","outerRadius","circumference"],i),d=this.options.spacing/2,f=(0,r.v)(c,l-o),p=f>=r.T||(0,r.p)(s,o,l),m=(0,r.ak)(a,h+d,u+d);return p&&m}getCenterPoint(t){let{x:e,y:i,startAngle:n,endAngle:r,innerRadius:s,outerRadius:a}=this.getProps(["x","y","startAngle","endAngle","innerRadius","outerRadius","circumference"],t),{offset:o,spacing:l}=this.options,h=(n+r)/2,u=(s+a+l+o)/2;return{x:e+Math.cos(h)*u,y:i+Math.sin(h)*u}}tooltipPosition(t){return this.getCenterPoint(t)}draw(t){let{options:e,circumference:i}=this,n=(e.offset||0)/2,s=(e.spacing||0)/2,a=e.circular;if(this.pixelMargin="inner"===e.borderAlign?.33:0,this.fullCircles=i>r.T?Math.floor(i/r.T):0,0===i||this.innerRadius<0||this.outerRadius<0)return;t.save();let o=0;if(n){o=n/2;let e=(this.startAngle+this.endAngle)/2;t.translate(Math.cos(e)*o,Math.sin(e)*o),this.circumference>=r.P&&(o=n)}t.fillStyle=e.backgroundColor,t.strokeStyle=e.borderColor;let l=function(t,e,i,n,s){let{fullCircles:a,startAngle:o,circumference:l}=e,h=e.endAngle;if(a){t1(t,e,i,n,o+r.T,s);for(let e=0;e<a;++e)t.fill();isNaN(l)||(h=o+l%r.T,l%r.T!=0||(h+=r.T))}return t1(t,e,i,n,h,s),t.fill(),h}(t,this,o,s,a);!function(t,e,i,n,s,a){let{options:o}=e,{borderWidth:l,borderJoinStyle:h}=o,u="inner"===o.borderAlign;l&&(u?(t.lineWidth=2*l,t.lineJoin=h||"round"):(t.lineWidth=l,t.lineJoin=h||"bevel"),e.fullCircles&&function(t,e,i){let n;let{x:s,y:a,startAngle:o,pixelMargin:l,fullCircles:h}=e,u=Math.max(e.outerRadius-l,0),c=e.innerRadius+l;for(i&&tQ(t,e,o+r.T),t.beginPath(),t.arc(s,a,c,o+r.T,o,!0),n=0;n<h;++n)t.stroke();for(t.beginPath(),t.arc(s,a,u,o,o+r.T),n=0;n<h;++n)t.stroke()}(t,e,u),u&&tQ(t,e,s),t1(t,e,i,n,s,a),t.stroke())}(t,this,o,s,l,a),t.restore()}}function t5(t,e,i=e){t.lineCap=(0,r.v)(i.borderCapStyle,e.borderCapStyle),t.setLineDash((0,r.v)(i.borderDash,e.borderDash)),t.lineDashOffset=(0,r.v)(i.borderDashOffset,e.borderDashOffset),t.lineJoin=(0,r.v)(i.borderJoinStyle,e.borderJoinStyle),t.lineWidth=(0,r.v)(i.borderWidth,e.borderWidth),t.strokeStyle=(0,r.v)(i.borderColor,e.borderColor)}function t3(t,e,i){t.lineTo(i.x,i.y)}function t4(t,e,i={}){let n=t.length,{start:r=0,end:s=n-1}=i,{start:a,end:o}=e,l=Math.max(r,a),h=Math.min(s,o);return{count:n,start:l,loop:e.loop,ilen:h<l&&!(r<a&&s<a||r>o&&s>o)?n+h-l:h-l}}function t6(t,e,i,n){let s,a,o;let{points:l,options:h}=e,{count:u,start:c,loop:d,ilen:f}=t4(l,i,n),p=h.stepped?r.as:h.tension||"monotone"===h.cubicInterpolationMode?r.at:t3,{move:m=!0,reverse:g}=n||{};for(s=0;s<=f;++s)(a=l[(c+(g?f-s:s))%u]).skip||(m?(t.moveTo(a.x,a.y),m=!1):p(t,o,a,g,h.stepped),o=a);return d&&p(t,o,a=l[(c+(g?f:0))%u],g,h.stepped),!!d}function t8(t,e,i,n){let r,s,a,o,l,h;let u=e.points,{count:c,start:d,ilen:f}=t4(u,i,n),{move:p=!0,reverse:m}=n||{},g=0,b=0,v=t=>(d+(m?f-t:t))%c,y=()=>{o!==l&&(t.lineTo(g,l),t.lineTo(g,o),t.lineTo(g,h))};for(p&&(s=u[v(0)],t.moveTo(s.x,s.y)),r=0;r<=f;++r){if((s=u[v(r)]).skip)continue;let e=s.x,i=s.y,n=0|e;n===a?(i<o?o=i:i>l&&(l=i),g=(b*g+e)/++b):(y(),t.lineTo(e,i),a=n,b=0,o=l=i),h=i}y()}function t7(t){let e=t.options,i=e.borderDash&&e.borderDash.length,n=!t._decimated&&!t._loop&&!e.tension&&"monotone"!==e.cubicInterpolationMode&&!e.stepped&&!i;return n?t8:t6}t2.id="arc",t2.defaults={borderAlign:"center",borderColor:"#fff",borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0},t2.defaultRoutes={backgroundColor:"backgroundColor"};let t9="function"==typeof Path2D;class et extends ${constructor(t){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,t&&Object.assign(this,t)}updateControlPoints(t,e){let i=this.options;if((i.tension||"monotone"===i.cubicInterpolationMode)&&!i.stepped&&!this._pointsUpdated){let n=i.spanGaps?this._loop:this._fullLoop;(0,r.am)(this._points,i,t,n,e),this._pointsUpdated=!0}}set points(t){this._points=t,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||(this._segments=(0,r.an)(this,this.options.segment))}first(){let t=this.segments,e=this.points;return t.length&&e[t[0].start]}last(){let t=this.segments,e=this.points,i=t.length;return i&&e[t[i-1].end]}interpolate(t,e){let i,n;let s=this.options,a=t[e],o=this.points,l=(0,r.ao)(this,{property:e,start:a,end:a});if(!l.length)return;let h=[],u=s.stepped?r.ap:s.tension||"monotone"===s.cubicInterpolationMode?r.aq:r.ar;for(i=0,n=l.length;i<n;++i){let{start:n,end:r}=l[i],c=o[n],d=o[r];if(c===d){h.push(c);continue}let f=Math.abs((a-c[e])/(d[e]-c[e])),p=u(c,d,f,s.stepped);p[e]=t[e],h.push(p)}return 1===h.length?h[0]:h}pathSegment(t,e,i){let n=t7(this);return n(t,this,e,i)}path(t,e,i){let n=this.segments,r=t7(this),s=this._loop;for(let a of(e=e||0,i=i||this.points.length-e,n))s&=r(t,this,a,{start:e,end:e+i-1});return!!s}draw(t,e,i,n){let r=this.options||{},s=this.points||[];s.length&&r.borderWidth&&(t.save(),function(t,e,i,n){if(t9&&!e.options.segment){let r;(r=e._path)||(r=e._path=new Path2D,e.path(r,i,n)&&r.closePath()),t5(t,e.options),t.stroke(r)}else!function(t,e,i,n){let{segments:r,options:s}=e,a=t7(e);for(let o of r)t5(t,s,o.style),t.beginPath(),a(t,e,o,{start:i,end:i+n-1})&&t.closePath(),t.stroke()}(t,e,i,n)}(t,this,i,n),t.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}}function ee(t,e,i,n){let r=t.options,{[i]:s}=t.getProps([i],n);return Math.abs(e-s)<r.radius+r.hitRadius}et.id="line",et.defaults={borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:"default",fill:!1,spanGaps:!1,stepped:!1,tension:0},et.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"},et.descriptors={_scriptable:!0,_indexable:t=>"borderDash"!==t&&"fill"!==t};class ei extends ${constructor(t){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,t&&Object.assign(this,t)}inRange(t,e,i){let n=this.options,{x:r,y:s}=this.getProps(["x","y"],i);return Math.pow(t-r,2)+Math.pow(e-s,2)<Math.pow(n.hitRadius+n.radius,2)}inXRange(t,e){return ee(this,t,"x",e)}inYRange(t,e){return ee(this,t,"y",e)}getCenterPoint(t){let{x:e,y:i}=this.getProps(["x","y"],t);return{x:e,y:i}}size(t){let e=(t=t||this.options||{}).radius||0;e=Math.max(e,e&&t.hoverRadius||0);let i=e&&t.borderWidth||0;return(e+i)*2}draw(t,e){let i=this.options;!this.skip&&!(i.radius<.1)&&(0,r.$)(this,e,this.size(i)/2)&&(t.strokeStyle=i.borderColor,t.lineWidth=i.borderWidth,t.fillStyle=i.backgroundColor,(0,r.au)(t,i,this.x,this.y))}getRange(){let t=this.options||{};return t.radius+t.hitRadius}}function en(t,e){let i,n,r,s,a;let{x:o,y:l,base:h,width:u,height:c}=t.getProps(["x","y","base","width","height"],e);return t.horizontal?(a=c/2,i=Math.min(o,h),n=Math.max(o,h),r=l-a,s=l+a):(i=o-(a=u/2),n=o+a,r=Math.min(l,h),s=Math.max(l,h)),{left:i,top:r,right:n,bottom:s}}function er(t,e,i,n){return t?0:(0,r.E)(e,i,n)}function es(t,e,i,n){let s=null===e,a=null===i,o=t&&!(s&&a)&&en(t,n);return o&&(s||(0,r.ak)(e,o.left,o.right))&&(a||(0,r.ak)(i,o.top,o.bottom))}function ea(t,e){t.rect(e.x,e.y,e.w,e.h)}function eo(t,e,i={}){let n=t.x!==i.x?-e:0,r=t.y!==i.y?-e:0,s=(t.x+t.w!==i.x+i.w?e:0)-n,a=(t.y+t.h!==i.y+i.h?e:0)-r;return{x:t.x+n,y:t.y+r,w:t.w+s,h:t.h+a,radius:t.radius}}ei.id="point",ei.defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:"circle",radius:3,rotation:0},ei.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};class el extends ${constructor(t){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,t&&Object.assign(this,t)}draw(t){var e;let{inflateAmount:i,options:{borderColor:n,backgroundColor:s}}=this,{inner:a,outer:o}=function(t){let e=en(t),i=e.right-e.left,n=e.bottom-e.top,s=function(t,e,i){let n=t.options.borderWidth,s=t.borderSkipped,a=(0,r.aw)(n);return{t:er(s.top,a.top,0,i),r:er(s.right,a.right,0,e),b:er(s.bottom,a.bottom,0,i),l:er(s.left,a.left,0,e)}}(t,i/2,n/2),a=function(t,e,i){let{enableBorderRadius:n}=t.getProps(["enableBorderRadius"]),s=t.options.borderRadius,a=(0,r.ax)(s),o=Math.min(e,i),l=t.borderSkipped,h=n||(0,r.i)(s);return{topLeft:er(!h||l.top||l.left,a.topLeft,0,o),topRight:er(!h||l.top||l.right,a.topRight,0,o),bottomLeft:er(!h||l.bottom||l.left,a.bottomLeft,0,o),bottomRight:er(!h||l.bottom||l.right,a.bottomRight,0,o)}}(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n,radius:a},inner:{x:e.left+s.l,y:e.top+s.t,w:i-s.l-s.r,h:n-s.t-s.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(s.t,s.l)),topRight:Math.max(0,a.topRight-Math.max(s.t,s.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(s.b,s.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(s.b,s.r))}}}}(this),l=(e=o.radius).topLeft||e.topRight||e.bottomLeft||e.bottomRight?r.av:ea;t.save(),(o.w!==a.w||o.h!==a.h)&&(t.beginPath(),l(t,eo(o,i,a)),t.clip(),l(t,eo(a,-i,o)),t.fillStyle=n,t.fill("evenodd")),t.beginPath(),l(t,eo(a,i)),t.fillStyle=s,t.fill(),t.restore()}inRange(t,e,i){return es(this,t,e,i)}inXRange(t,e){return es(this,t,null,e)}inYRange(t,e){return es(this,null,t,e)}getCenterPoint(t){let{x:e,y:i,base:n,horizontal:r}=this.getProps(["x","y","base","horizontal"],t);return{x:r?(e+n)/2:e,y:r?i:(i+n)/2}}getRange(t){return"x"===t?this.width/2:this.height/2}}el.id="bar",el.defaults={borderSkipped:"start",borderWidth:0,borderRadius:0,inflateAmount:"auto",pointStyle:void 0},el.defaultRoutes={backgroundColor:"backgroundColor",borderColor:"borderColor"};var eh=/*#__PURE__*/Object.freeze({__proto__:null,ArcElement:t2,LineElement:et,PointElement:ei,BarElement:el});function eu(t){if(t._decimated){let e=t._data;delete t._decimated,delete t._data,Object.defineProperty(t,"data",{value:e})}}function ec(t){t.data.datasets.forEach(t=>{eu(t)})}var ed={id:"decimation",defaults:{algorithm:"min-max",enabled:!1},beforeElementsUpdate:(t,e,i)=>{if(!i.enabled){ec(t);return}let n=t.width;t.data.datasets.forEach((e,s)=>{let a;let{_data:o,indexAxis:l}=e,h=t.getDatasetMeta(s),u=o||e.data;if("y"===(0,r.a)([l,t.options.indexAxis])||!h.controller.supportsDecimation)return;let c=t.scales[h.xAxisID];if("linear"!==c.type&&"time"!==c.type||t.options.parsing)return;let{start:d,count:f}=function(t,e){let i;let n=e.length,s=0,{iScale:a}=t,{min:o,max:l,minDefined:h,maxDefined:u}=a.getUserBounds();return h&&(s=(0,r.E)((0,r.Z)(e,a.axis,o).lo,0,n-1)),i=u?(0,r.E)((0,r.Z)(e,a.axis,l).hi+1,s,n)-s:n-s,{start:s,count:i}}(h,u),p=i.threshold||4*n;if(f<=p){eu(e);return}switch((0,r.k)(o)&&(e._data=u,delete e.data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(t){this._data=t}})),i.algorithm){case"lttb":a=function(t,e,i,n,r){let s,a,o,l,h;let u=r.samples||n;if(u>=i)return t.slice(e,e+i);let c=[],d=(i-2)/(u-2),f=0,p=e+i-1,m=e;for(s=0,c[f++]=t[m];s<u-2;s++){let n,r=0,u=0,p=Math.floor((s+1)*d)+1+e,g=Math.min(Math.floor((s+2)*d)+1,i)+e,b=g-p;for(n=p;n<g;n++)r+=t[n].x,u+=t[n].y;r/=b,u/=b;let v=Math.floor(s*d)+1+e,y=Math.min(Math.floor((s+1)*d)+1,i)+e,{x:x,y:_}=t[m];for(o=l=-1,n=v;n<y;n++)(l=.5*Math.abs((x-r)*(t[n].y-_)-(x-t[n].x)*(u-_)))>o&&(o=l,a=t[n],h=n);c[f++]=a,m=h}return c[f++]=t[p],c}(u,d,f,n,i);break;case"min-max":a=function(t,e,i,n){let s,a,o,l,h,u,c,d,f,p,m=0,g=0,b=[],v=t[e].x,y=t[e+i-1].x,x=y-v;for(s=e;s<e+i;++s){o=((a=t[s]).x-v)/x*n,l=a.y;let e=0|o;if(e===h)l<f?(f=l,u=s):l>p&&(p=l,c=s),m=(g*m+a.x)/++g;else{let i=s-1;if(!(0,r.k)(u)&&!(0,r.k)(c)){let e=Math.min(u,c),n=Math.max(u,c);e!==d&&e!==i&&b.push({...t[e],x:m}),n!==d&&n!==i&&b.push({...t[n],x:m})}s>0&&i!==d&&b.push(t[i]),b.push(a),h=e,g=0,f=p=l,u=c=d=s}}return b}(u,d,f,n);break;default:throw Error(`Unsupported decimation algorithm '${i.algorithm}'`)}e._decimated=a})},destroy(t){ec(t)}};function ef(t,e,i,n){if(n)return;let s=e[t],a=i[t];return"angle"===t&&(s=(0,r.az)(s),a=(0,r.az)(a)),{property:t,start:s,end:a}}function ep(t,e,i){for(;e>t;e--){let t=i[e];if(!isNaN(t.x)&&!isNaN(t.y))break}return e}function em(t,e,i,n){return t&&e?n(t[i],e[i]):t?t[i]:e?e[i]:0}function eg(t,e){let i=[],n=!1;return(0,r.b)(t)?(n=!0,i=t):i=function(t,e){let{x:i=null,y:n=null}=t||{},r=e.points,s=[];return e.segments.forEach(({start:t,end:e})=>{e=ep(t,e,r);let a=r[t],o=r[e];null!==n?(s.push({x:a.x,y:n}),s.push({x:o.x,y:n})):null!==i&&(s.push({x:i,y:a.y}),s.push({x:i,y:o.y}))}),s}(t,e),i.length?new et({points:i,options:{tension:0},_loop:n,_fullLoop:n}):null}function eb(t){return t&&!1!==t.fill}class ev{constructor(t){this.x=t.x,this.y=t.y,this.radius=t.radius}pathSegment(t,e,i){let{x:n,y:s,radius:a}=this;return e=e||{start:0,end:r.T},t.arc(n,s,a,e.end,e.start,!0),!i.bounds}interpolate(t){let{x:e,y:i,radius:n}=this,r=t.angle;return{x:e+Math.cos(r)*n,y:i+Math.sin(r)*n,angle:r}}}function ey(t,e,i){let n=function(t){let{chart:e,fill:i,line:n}=t;if((0,r.g)(i))return function(t,e){let i=t.getDatasetMeta(e),n=i&&t.isDatasetVisible(e);return n?i.dataset:null}(e,i);if("stack"===i)return function(t){let{scale:e,index:i,line:n}=t,s=[],a=n.segments,o=n.points,l=function(t,e){let i=[],n=t.getMatchingVisibleMetas("line");for(let t=0;t<n.length;t++){let r=n[t];if(r.index===e)break;r.hidden||i.unshift(r.dataset)}return i}(e,i);l.push(eg({x:null,y:e.bottom},n));for(let t=0;t<a.length;t++){let e=a[t];for(let t=e.start;t<=e.end;t++)!function(t,e,i){let n=[];for(let s=0;s<i.length;s++){let a=i[s],{first:o,last:l,point:h}=function(t,e,i){let n=t.interpolate(e,i);if(!n)return{};let s=n[i],a=t.segments,o=t.points,l=!1,h=!1;for(let t=0;t<a.length;t++){let e=a[t],n=o[e.start][i],u=o[e.end][i];if((0,r.ak)(s,n,u)){l=s===n,h=s===u;break}}return{first:l,last:h,point:n}}(a,e,"x");if(h&&(!o||!l)){if(o)n.unshift(h);else if(t.push(h),!l)break}}t.push(...n)}(s,o[t],l)}return new et({points:s,options:{}})}(t);if("shape"===i)return!0;let s=function(t){let e=t.scale||{};return e.getPointPositionForValue?function(t){let{scale:e,fill:i}=t,n=e.options,s=e.getLabels().length,a=n.reverse?e.max:e.min,o="start"===i?a:"end"===i?e.options.reverse?e.min:e.max:(0,r.i)(i)?i.value:e.getBaseValue(),l=[];if(n.grid.circular){let t=e.getPointPositionForValue(0,a);return new ev({x:t.x,y:t.y,radius:e.getDistanceFromCenterForValue(o)})}for(let t=0;t<s;++t)l.push(e.getPointPositionForValue(t,o));return l}(t):function(t){let e;let{scale:i={},fill:n}=t,s=(e=null,"start"===n?e=i.bottom:"end"===n?e=i.top:(0,r.i)(n)?e=i.getPixelForValue(n.value):i.getBasePixel&&(e=i.getBasePixel()),e);if((0,r.g)(s)){let t=i.isHorizontal();return{x:t?s:null,y:t?null:s}}return null}(t)}(t);return s instanceof ev?s:eg(s,n)}(e),{line:s,scale:a,axis:o}=e,l=s.options,h=l.fill,u=l.backgroundColor,{above:c=u,below:d=u}=h||{};n&&s.points.length&&((0,r.L)(t,i),function(t,e){let{line:i,target:n,above:r,below:s,area:a,scale:o}=e,l=i._loop?"angle":e.axis;t.save(),"x"===l&&s!==r&&(ex(t,n,a.top),e_(t,{line:i,target:n,color:r,scale:o,property:l}),t.restore(),t.save(),ex(t,n,a.bottom)),e_(t,{line:i,target:n,color:s,scale:o,property:l}),t.restore()}(t,{line:s,target:n,above:c,below:d,area:i,scale:a,axis:o}),(0,r.N)(t))}function ex(t,e,i){let{segments:n,points:r}=e,s=!0,a=!1;for(let o of(t.beginPath(),n)){let{start:n,end:l}=o,h=r[n],u=r[ep(n,l,r)];s?(t.moveTo(h.x,h.y),s=!1):(t.lineTo(h.x,i),t.lineTo(h.x,h.y)),(a=!!e.pathSegment(t,o,{move:a}))?t.closePath():t.lineTo(u.x,i)}t.lineTo(e.first().x,i),t.closePath(),t.clip()}function e_(t,e){let{line:i,target:n,property:s,color:a,scale:o}=e,l=function(t,e,i){let n=t.segments,s=t.points,a=e.points,o=[];for(let t of n){let{start:n,end:l}=t;l=ep(n,l,s);let h=ef(i,s[n],s[l],t.loop);if(!e.segments){o.push({source:t,target:h,start:s[n],end:s[l]});continue}let u=(0,r.ao)(e,h);for(let e of u){let n=ef(i,a[e.start],a[e.end],e.loop),l=(0,r.ay)(t,s,n);for(let t of l)o.push({source:t,target:e,start:{[i]:em(h,n,"start",Math.max)},end:{[i]:em(h,n,"end",Math.min)}})}}return o}(i,n,s);for(let{source:e,target:r,start:h,end:u}of l){let l;let{style:{backgroundColor:c=a}={}}=e,d=!0!==n;t.save(),t.fillStyle=c,function(t,e,i){let{top:n,bottom:r}=e.chart.chartArea,{property:s,start:a,end:o}=i||{};"x"===s&&(t.beginPath(),t.rect(a,n,o-a,r-n),t.clip())}(t,o,d&&ef(s,h,u)),t.beginPath();let f=!!i.pathSegment(t,e);if(d){f?t.closePath():ew(t,n,u,s);let e=!!n.pathSegment(t,r,{move:f,reverse:!0});(l=f&&e)||ew(t,n,h,s)}t.closePath(),t.fill(l?"evenodd":"nonzero"),t.restore()}}function ew(t,e,i,n){let r=e.interpolate(i,n);r&&t.lineTo(r.x,r.y)}var ek={id:"filler",afterDatasetsUpdate(t,e,i){let n,s,a,o;let l=(t.data.datasets||[]).length,h=[];for(s=0;s<l;++s)a=(n=t.getDatasetMeta(s)).dataset,o=null,a&&a.options&&a instanceof et&&(o={visible:t.isDatasetVisible(s),index:s,fill:function(t,e,i){var n,s;let a=function(t){let e=t.options,i=e.fill,n=(0,r.v)(i&&i.target,i);return void 0===n&&(n=!!e.backgroundColor),!1!==n&&null!==n&&(!0===n?"origin":n)}(t);if((0,r.i)(a))return!isNaN(a.value)&&a;let o=parseFloat(a);return(0,r.g)(o)&&Math.floor(o)===o?(n=a[0],s=o,("-"===n||"+"===n)&&(s=e+s),s!==e&&!(s<0)&&!(s>=i)&&s):["origin","start","end","stack","shape"].indexOf(a)>=0&&a}(a,s,l),chart:t,axis:n.controller.options.indexAxis,scale:n.vScale,line:a}),n.$filler=o,h.push(o);for(s=0;s<l;++s)(o=h[s])&&!1!==o.fill&&(o.fill=function(t,e,i){let n;let s=t[e],a=s.fill,o=[e];if(!i)return a;for(;!1!==a&&-1===o.indexOf(a);){if(!(0,r.g)(a))return a;if(!(n=t[a]))break;if(n.visible)return a;o.push(a),a=n.fill}return!1}(h,s,i.propagate))},beforeDraw(t,e,i){let n="beforeDraw"===i.drawTime,r=t.getSortedVisibleDatasetMetas(),s=t.chartArea;for(let e=r.length-1;e>=0;--e){let i=r[e].$filler;i&&(i.line.updateControlPoints(s,i.axis),n&&i.fill&&ey(t.ctx,i,s))}},beforeDatasetsDraw(t,e,i){if("beforeDatasetsDraw"!==i.drawTime)return;let n=t.getSortedVisibleDatasetMetas();for(let e=n.length-1;e>=0;--e){let i=n[e].$filler;eb(i)&&ey(t.ctx,i,t.chartArea)}},beforeDatasetDraw(t,e,i){let n=e.meta.$filler;eb(n)&&"beforeDatasetDraw"===i.drawTime&&ey(t.ctx,n,t.chartArea)},defaults:{propagate:!0,drawTime:"beforeDatasetDraw"}};let eM=(t,e)=>{let{boxHeight:i=e,boxWidth:n=e}=t;return t.usePointStyle&&(i=Math.min(i,e),n=t.pointStyleWidth||Math.min(n,e)),{boxWidth:n,boxHeight:i,itemHeight:Math.max(e,i)}},eS=(t,e)=>null!==t&&null!==e&&t.datasetIndex===e.datasetIndex&&t.index===e.index;class eT extends ${constructor(t){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e,i){this.maxWidth=t,this.maxHeight=e,this._margins=i,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let t=this.options.labels||{},e=(0,r.C)(t.generateLabels,[this.chart],this)||[];t.filter&&(e=e.filter(e=>t.filter(e,this.chart.data))),t.sort&&(e=e.sort((e,i)=>t.sort(e,i,this.chart.data))),this.options.reverse&&e.reverse(),this.legendItems=e}fit(){let t,e;let{options:i,ctx:n}=this;if(!i.display){this.width=this.height=0;return}let s=i.labels,a=(0,r.O)(s.font),o=a.size,l=this._computeTitleHeight(),{boxWidth:h,itemHeight:u}=eM(s,o);n.font=a.string,this.isHorizontal()?(t=this.maxWidth,e=this._fitRows(l,o,h,u)+10):(e=this.maxHeight,t=this._fitCols(l,o,h,u)+10),this.width=Math.min(t,i.maxWidth||this.maxWidth),this.height=Math.min(e,i.maxHeight||this.maxHeight)}_fitRows(t,e,i,n){let{ctx:r,maxWidth:s,options:{labels:{padding:a}}}=this,o=this.legendHitBoxes=[],l=this.lineWidths=[0],h=n+a,u=t;r.textAlign="left",r.textBaseline="middle";let c=-1,d=-h;return this.legendItems.forEach((t,f)=>{let p=i+e/2+r.measureText(t.text).width;(0===f||l[l.length-1]+p+2*a>s)&&(u+=h,l[l.length-(f>0?0:1)]=0,d+=h,c++),o[f]={left:0,top:d,row:c,width:p,height:n},l[l.length-1]+=p+a}),u}_fitCols(t,e,i,n){let{ctx:r,maxHeight:s,options:{labels:{padding:a}}}=this,o=this.legendHitBoxes=[],l=this.columnSizes=[],h=s-t,u=a,c=0,d=0,f=0,p=0;return this.legendItems.forEach((t,s)=>{let m=i+e/2+r.measureText(t.text).width;s>0&&d+n+2*a>h&&(u+=c+a,l.push({width:c,height:d}),f+=c+a,p++,c=d=0),o[s]={left:f,top:d,col:p,width:m,height:n},c=Math.max(c,m),d+=n+a}),u+=c,l.push({width:c,height:d}),u}adjustHitBoxes(){if(!this.options.display)return;let t=this._computeTitleHeight(),{legendHitBoxes:e,options:{align:i,labels:{padding:n},rtl:s}}=this,a=(0,r.aA)(s,this.left,this.width);if(this.isHorizontal()){let s=0,o=(0,r.S)(i,this.left+n,this.right-this.lineWidths[s]);for(let l of e)s!==l.row&&(s=l.row,o=(0,r.S)(i,this.left+n,this.right-this.lineWidths[s])),l.top+=this.top+t+n,l.left=a.leftForLtr(a.x(o),l.width),o+=l.width+n}else{let s=0,o=(0,r.S)(i,this.top+t+n,this.bottom-this.columnSizes[s].height);for(let l of e)l.col!==s&&(s=l.col,o=(0,r.S)(i,this.top+t+n,this.bottom-this.columnSizes[s].height)),l.top=o,l.left+=this.left+n,l.left=a.leftForLtr(a.x(l.left),l.width),o+=l.height+n}}isHorizontal(){return"top"===this.options.position||"bottom"===this.options.position}draw(){if(this.options.display){let t=this.ctx;(0,r.L)(t,this),this._draw(),(0,r.N)(t)}}_draw(){let t;let{options:e,columnSizes:i,lineWidths:n,ctx:s}=this,{align:a,labels:o}=e,l=r.d.color,h=(0,r.aA)(e.rtl,this.left,this.width),u=(0,r.O)(o.font),{color:c,padding:d}=o,f=u.size,p=f/2;this.drawTitle(),s.textAlign=h.textAlign("left"),s.textBaseline="middle",s.lineWidth=.5,s.font=u.string;let{boxWidth:m,boxHeight:g,itemHeight:b}=eM(o,f),v=function(t,e,i){if(isNaN(m)||m<=0||isNaN(g)||g<0)return;s.save();let n=(0,r.v)(i.lineWidth,1);if(s.fillStyle=(0,r.v)(i.fillStyle,l),s.lineCap=(0,r.v)(i.lineCap,"butt"),s.lineDashOffset=(0,r.v)(i.lineDashOffset,0),s.lineJoin=(0,r.v)(i.lineJoin,"miter"),s.lineWidth=n,s.strokeStyle=(0,r.v)(i.strokeStyle,l),s.setLineDash((0,r.v)(i.lineDash,[])),o.usePointStyle){let a={radius:g*Math.SQRT2/2,pointStyle:i.pointStyle,rotation:i.rotation,borderWidth:n},l=h.xPlus(t,m/2),u=e+p;(0,r.aE)(s,a,l,u,o.pointStyleWidth&&m)}else{let a=e+Math.max((f-g)/2,0),o=h.leftForLtr(t,m),l=(0,r.ax)(i.borderRadius);s.beginPath(),Object.values(l).some(t=>0!==t)?(0,r.av)(s,{x:o,y:a,w:m,h:g,radius:l}):s.rect(o,a,m,g),s.fill(),0!==n&&s.stroke()}s.restore()},y=function(t,e,i){(0,r.M)(s,i.text,t,e+b/2,u,{strikethrough:i.hidden,textAlign:h.textAlign(i.textAlign)})},x=this.isHorizontal(),_=this._computeTitleHeight();t=x?{x:(0,r.S)(a,this.left+d,this.right-n[0]),y:this.top+d+_,line:0}:{x:this.left+d,y:(0,r.S)(a,this.top+_+d,this.bottom-i[0].height),line:0},(0,r.aB)(this.ctx,e.textDirection);let w=b+d;this.legendItems.forEach((l,u)=>{s.strokeStyle=l.fontColor||c,s.fillStyle=l.fontColor||c;let f=s.measureText(l.text).width,g=h.textAlign(l.textAlign||(l.textAlign=o.textAlign)),b=m+p+f,k=t.x,M=t.y;h.setWidth(this.width),x?u>0&&k+b+d>this.right&&(M=t.y+=w,t.line++,k=t.x=(0,r.S)(a,this.left+d,this.right-n[t.line])):u>0&&M+w>this.bottom&&(k=t.x=k+i[t.line].width+d,t.line++,M=t.y=(0,r.S)(a,this.top+_+d,this.bottom-i[t.line].height));let S=h.x(k);v(S,M,l),k=(0,r.aC)(g,k+m+p,x?k+b:this.right,e.rtl),y(h.x(k),M,l),x?t.x+=b+d:t.y+=w}),(0,r.aD)(this.ctx,e.textDirection)}drawTitle(){let t;let e=this.options,i=e.title,n=(0,r.O)(i.font),s=(0,r.K)(i.padding);if(!i.display)return;let a=(0,r.aA)(e.rtl,this.left,this.width),o=this.ctx,l=i.position,h=n.size/2,u=s.top+h,c=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),t=this.top+u,c=(0,r.S)(e.align,c,this.right-d);else{let i=this.columnSizes.reduce((t,e)=>Math.max(t,e.height),0);t=u+(0,r.S)(e.align,this.top,this.bottom-i-e.labels.padding-this._computeTitleHeight())}let f=(0,r.S)(l,c,c+d);o.textAlign=a.textAlign((0,r.R)(l)),o.textBaseline="middle",o.strokeStyle=i.color,o.fillStyle=i.color,o.font=n.string,(0,r.M)(o,i.text,f,t,n)}_computeTitleHeight(){let t=this.options.title,e=(0,r.O)(t.font),i=(0,r.K)(t.padding);return t.display?e.lineHeight+i.height:0}_getLegendItemAt(t,e){let i,n,s;if((0,r.ak)(t,this.left,this.right)&&(0,r.ak)(e,this.top,this.bottom)){for(i=0,s=this.legendHitBoxes;i<s.length;++i)if(n=s[i],(0,r.ak)(t,n.left,n.left+n.width)&&(0,r.ak)(e,n.top,n.top+n.height))return this.legendItems[i]}return null}handleEvent(t){var e;let i=this.options;if(("mousemove"!==(e=t.type)&&"mouseout"!==e||!i.onHover&&!i.onLeave)&&(!i.onClick||"click"!==e&&"mouseup"!==e))return;let n=this._getLegendItemAt(t.x,t.y);if("mousemove"===t.type||"mouseout"===t.type){let e=this._hoveredItem,s=eS(e,n);e&&!s&&(0,r.C)(i.onLeave,[t,e,this],this),this._hoveredItem=n,n&&!s&&(0,r.C)(i.onHover,[t,n,this],this)}else n&&(0,r.C)(i.onClick,[t,n,this],this)}}var eC={id:"legend",_element:eT,start(t,e,i){let n=t.legend=new eT({ctx:t.ctx,options:i,chart:t});td.configure(t,n,i),td.addBox(t,n)},stop(t){td.removeBox(t,t.legend),delete t.legend},beforeUpdate(t,e,i){let n=t.legend;td.configure(t,n,i),n.options=i},afterUpdate(t){let e=t.legend;e.buildLabels(),e.adjustHitBoxes()},afterEvent(t,e){e.replay||t.legend.handleEvent(e.event)},defaults:{display:!0,position:"top",align:"center",fullSize:!0,reverse:!1,weight:1e3,onClick(t,e,i){let n=e.datasetIndex,r=i.chart;r.isDatasetVisible(n)?(r.hide(n),e.hidden=!0):(r.show(n),e.hidden=!1)},onHover:null,onLeave:null,labels:{color:t=>t.chart.options.color,boxWidth:40,padding:10,generateLabels(t){let e=t.data.datasets,{labels:{usePointStyle:i,pointStyle:n,textAlign:s,color:a}}=t.legend.options;return t._getSortedDatasetMetas().map(t=>{let o=t.controller.getStyle(i?0:void 0),l=(0,r.K)(o.borderWidth);return{text:e[t.index].label,fillStyle:o.backgroundColor,fontColor:a,hidden:!t.visible,lineCap:o.borderCapStyle,lineDash:o.borderDash,lineDashOffset:o.borderDashOffset,lineJoin:o.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:o.borderColor,pointStyle:n||o.pointStyle,rotation:o.rotation,textAlign:s||o.textAlign,borderRadius:0,datasetIndex:t.index}},this)}},title:{color:t=>t.chart.options.color,display:!1,position:"center",text:""}},descriptors:{_scriptable:t=>!t.startsWith("on"),labels:{_scriptable:t=>!["generateLabels","filter","sort"].includes(t)}}};class eO extends ${constructor(t){super(),this.chart=t.chart,this.options=t.options,this.ctx=t.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(t,e){let i=this.options;if(this.left=0,this.top=0,!i.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=t,this.height=this.bottom=e;let n=(0,r.b)(i.text)?i.text.length:1;this._padding=(0,r.K)(i.padding);let s=n*(0,r.O)(i.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=s:this.width=s}isHorizontal(){let t=this.options.position;return"top"===t||"bottom"===t}_drawArgs(t){let e,i,n;let{top:s,left:a,bottom:o,right:l,options:h}=this,u=h.align,c=0;return this.isHorizontal()?(i=(0,r.S)(u,a,l),n=s+t,e=l-a):("left"===h.position?(i=a+t,n=(0,r.S)(u,o,s),c=-.5*r.P):(i=l-t,n=(0,r.S)(u,s,o),c=.5*r.P),e=o-s),{titleX:i,titleY:n,maxWidth:e,rotation:c}}draw(){let t=this.ctx,e=this.options;if(!e.display)return;let i=(0,r.O)(e.font),n=i.lineHeight,s=n/2+this._padding.top,{titleX:a,titleY:o,maxWidth:l,rotation:h}=this._drawArgs(s);(0,r.M)(t,e.text,0,0,i,{color:e.color,maxWidth:l,rotation:h,textAlign:(0,r.R)(e.align),textBaseline:"middle",translation:[a,o]})}}var eD={id:"title",_element:eO,start(t,e,i){!function(t,e){let i=new eO({ctx:t.ctx,options:e,chart:t});td.configure(t,i,e),td.addBox(t,i),t.titleBlock=i}(t,i)},stop(t){let e=t.titleBlock;td.removeBox(t,e),delete t.titleBlock},beforeUpdate(t,e,i){let n=t.titleBlock;td.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"bold"},fullSize:!0,padding:10,position:"top",text:"",weight:2e3},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};let eE=new WeakMap;var eP={id:"subtitle",start(t,e,i){let n=new eO({ctx:t.ctx,options:i,chart:t});td.configure(t,n,i),td.addBox(t,n),eE.set(t,n)},stop(t){td.removeBox(t,eE.get(t)),eE.delete(t)},beforeUpdate(t,e,i){let n=eE.get(t);td.configure(t,n,i),n.options=i},defaults:{align:"center",display:!1,font:{weight:"normal"},fullSize:!0,padding:0,position:"top",text:"",weight:1500},defaultRoutes:{color:"color"},descriptors:{_scriptable:!0,_indexable:!1}};let eA={average(t){let e,i;if(!t.length)return!1;let n=0,r=0,s=0;for(e=0,i=t.length;e<i;++e){let i=t[e].element;if(i&&i.hasValue()){let t=i.tooltipPosition();n+=t.x,r+=t.y,++s}}return{x:n/s,y:r/s}},nearest(t,e){let i,n,s;if(!t.length)return!1;let a=e.x,o=e.y,l=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){let n=t[i].element;if(n&&n.hasValue()){let t=n.getCenterPoint(),i=(0,r.aG)(e,t);i<l&&(l=i,s=n)}}if(s){let t=s.tooltipPosition();a=t.x,o=t.y}return{x:a,y:o}}};function eI(t,e){return e&&((0,r.b)(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function eL(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function e$(t,e){let i=t.chart.ctx,{body:n,footer:s,title:a}=t,{boxWidth:o,boxHeight:l}=e,h=(0,r.O)(e.bodyFont),u=(0,r.O)(e.titleFont),c=(0,r.O)(e.footerFont),d=a.length,f=s.length,p=n.length,m=(0,r.K)(e.padding),g=m.height,b=0,v=n.reduce((t,e)=>t+e.before.length+e.lines.length+e.after.length,0);if(v+=t.beforeBody.length+t.afterBody.length,d&&(g+=d*u.lineHeight+(d-1)*e.titleSpacing+e.titleMarginBottom),v){let t=e.displayColors?Math.max(l,h.lineHeight):h.lineHeight;g+=p*t+(v-p)*h.lineHeight+(v-1)*e.bodySpacing}f&&(g+=e.footerMarginTop+f*c.lineHeight+(f-1)*e.footerSpacing);let y=0,x=function(t){b=Math.max(b,i.measureText(t).width+y)};return i.save(),i.font=u.string,(0,r.Q)(t.title,x),i.font=h.string,(0,r.Q)(t.beforeBody.concat(t.afterBody),x),y=e.displayColors?o+2+e.boxPadding:0,(0,r.Q)(n,t=>{(0,r.Q)(t.before,x),(0,r.Q)(t.lines,x),(0,r.Q)(t.after,x)}),y=0,i.font=c.string,(0,r.Q)(t.footer,x),i.restore(),{width:b+=m.width,height:g}}function eR(t,e,i){let n=i.yAlign||e.yAlign||function(t,e){let{y:i,height:n}=e;return i<n/2?"top":i>t.height-n/2?"bottom":"center"}(t,i);return{xAlign:i.xAlign||e.xAlign||function(t,e,i,n){let{x:r,width:s}=i,{width:a,chartArea:{left:o,right:l}}=t,h="center";return"center"===n?h=r<=(o+l)/2?"left":"right":r<=s/2?h="left":r>=a-s/2&&(h="right"),function(t,e,i,n){let{x:r,width:s}=n,a=i.caretSize+i.caretPadding;if("left"===t&&r+s+a>e.width||"right"===t&&r-s-a<0)return!0}(h,t,e,i)&&(h="center"),h}(t,e,i,n),yAlign:n}}function eF(t,e,i,n){let{caretSize:s,caretPadding:a,cornerRadius:o}=t,{xAlign:l,yAlign:h}=i,u=s+a,{topLeft:c,topRight:d,bottomLeft:f,bottomRight:p}=(0,r.ax)(o),m=function(t,e){let{x:i,width:n}=t;return"right"===e?i-=n:"center"===e&&(i-=n/2),i}(e,l),g=function(t,e,i){let{y:n,height:r}=t;return"top"===e?n+=i:"bottom"===e?n-=r+i:n-=r/2,n}(e,h,u);return"center"===h?"left"===l?m+=u:"right"===l&&(m-=u):"left"===l?m-=Math.max(c,f)+s:"right"===l&&(m+=Math.max(d,p)+s),{x:(0,r.E)(m,0,n.width-e.width),y:(0,r.E)(g,0,n.height-e.height)}}function eN(t,e,i){let n=(0,r.K)(i.padding);return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-n.right:t.x+n.left}function ez(t,e){let i=e&&e.dataset&&e.dataset.tooltip&&e.dataset.tooltip.callbacks;return i?t.override(i):t}class ej extends ${constructor(t){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=t.chart||t._chart,this._chart=this.chart,this.options=t.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(t){this.options=t,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let t=this._cachedAnimations;if(t)return t;let e=this.chart,i=this.options.setContext(this.getContext()),n=i.enabled&&e.options.animation&&i.animations,r=new u(this.chart,n);return n._cacheable&&(this._cachedAnimations=Object.freeze(r)),r}getContext(){var t,e;return this.$context||(this.$context=(t=this.chart.getContext(),e=this._tooltipItems,(0,r.h)(t,{tooltip:this,tooltipItems:e,type:"tooltip"})))}getTitle(t,e){let{callbacks:i}=e,n=i.beforeTitle.apply(this,[t]),r=i.title.apply(this,[t]),s=i.afterTitle.apply(this,[t]),a=[];return a=eI(a,eL(n)),a=eI(a,eL(r)),a=eI(a,eL(s))}getBeforeBody(t,e){return eI([],eL(e.callbacks.beforeBody.apply(this,[t])))}getBody(t,e){let{callbacks:i}=e,n=[];return(0,r.Q)(t,t=>{let e={before:[],lines:[],after:[]},r=ez(i,t);eI(e.before,eL(r.beforeLabel.call(this,t))),eI(e.lines,r.label.call(this,t)),eI(e.after,eL(r.afterLabel.call(this,t))),n.push(e)}),n}getAfterBody(t,e){return eI([],eL(e.callbacks.afterBody.apply(this,[t])))}getFooter(t,e){let{callbacks:i}=e,n=i.beforeFooter.apply(this,[t]),r=i.footer.apply(this,[t]),s=i.afterFooter.apply(this,[t]),a=[];return a=eI(a,eL(n)),a=eI(a,eL(r)),a=eI(a,eL(s))}_createItems(t){let e,i;let n=this._active,s=this.chart.data,a=[],o=[],l=[],h=[];for(e=0,i=n.length;e<i;++e)h.push(function(t,e){let{element:i,datasetIndex:n,index:r}=e,s=t.getDatasetMeta(n).controller,{label:a,value:o}=s.getLabelAndValue(r);return{chart:t,label:a,parsed:s.getParsed(r),raw:t.data.datasets[n].data[r],formattedValue:o,dataset:s.getDataset(),dataIndex:r,datasetIndex:n,element:i}}(this.chart,n[e]));return t.filter&&(h=h.filter((e,i,n)=>t.filter(e,i,n,s))),t.itemSort&&(h=h.sort((e,i)=>t.itemSort(e,i,s))),(0,r.Q)(h,e=>{let i=ez(t.callbacks,e);a.push(i.labelColor.call(this,e)),o.push(i.labelPointStyle.call(this,e)),l.push(i.labelTextColor.call(this,e))}),this.labelColors=a,this.labelPointStyles=o,this.labelTextColors=l,this.dataPoints=h,h}update(t,e){let i;let n=this.options.setContext(this.getContext()),r=this._active,s=[];if(r.length){let t=eA[n.position].call(this,r,this._eventPosition);s=this._createItems(n),this.title=this.getTitle(s,n),this.beforeBody=this.getBeforeBody(s,n),this.body=this.getBody(s,n),this.afterBody=this.getAfterBody(s,n),this.footer=this.getFooter(s,n);let e=this._size=e$(this,n),a=Object.assign({},t,e),o=eR(this.chart,n,a),l=eF(n,a,o,this.chart);this.xAlign=o.xAlign,this.yAlign=o.yAlign,i={opacity:1,x:l.x,y:l.y,width:e.width,height:e.height,caretX:t.x,caretY:t.y}}else 0!==this.opacity&&(i={opacity:0});this._tooltipItems=s,this.$context=void 0,i&&this._resolveAnimations().update(this,i),t&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:e})}drawCaret(t,e,i,n){let r=this.getCaretPosition(t,i,n);e.lineTo(r.x1,r.y1),e.lineTo(r.x2,r.y2),e.lineTo(r.x3,r.y3)}getCaretPosition(t,e,i){let n,s,a,o,l,h;let{xAlign:u,yAlign:c}=this,{caretSize:d,cornerRadius:f}=i,{topLeft:p,topRight:m,bottomLeft:g,bottomRight:b}=(0,r.ax)(f),{x:v,y:y}=t,{width:x,height:_}=e;return"center"===c?(l=y+_/2,"left"===u?(s=(n=v)-d,o=l+d,h=l-d):(s=(n=v+x)+d,o=l-d,h=l+d),a=n):(s="left"===u?v+Math.max(p,g)+d:"right"===u?v+x-Math.max(m,b)-d:this.caretX,"top"===c?(l=(o=y)-d,n=s-d,a=s+d):(l=(o=y+_)+d,n=s+d,a=s-d),h=o),{x1:n,x2:s,x3:a,y1:o,y2:l,y3:h}}drawTitle(t,e,i){let n,s,a;let o=this.title,l=o.length;if(l){let h=(0,r.aA)(i.rtl,this.x,this.width);for(a=0,t.x=eN(this,i.titleAlign,i),e.textAlign=h.textAlign(i.titleAlign),e.textBaseline="middle",n=(0,r.O)(i.titleFont),s=i.titleSpacing,e.fillStyle=i.titleColor,e.font=n.string;a<l;++a)e.fillText(o[a],h.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+s,a+1===l&&(t.y+=i.titleMarginBottom-s)}}_drawColorBox(t,e,i,n,s){let a=this.labelColors[i],o=this.labelPointStyles[i],{boxHeight:l,boxWidth:h,boxPadding:u}=s,c=(0,r.O)(s.bodyFont),d=eN(this,"left",s),f=n.x(d),p=l<c.lineHeight?(c.lineHeight-l)/2:0,m=e.y+p;if(s.usePointStyle){let e={radius:Math.min(h,l)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},i=n.leftForLtr(f,h)+h/2,u=m+l/2;t.strokeStyle=s.multiKeyBackground,t.fillStyle=s.multiKeyBackground,(0,r.au)(t,e,i,u),t.strokeStyle=a.borderColor,t.fillStyle=a.backgroundColor,(0,r.au)(t,e,i,u)}else{t.lineWidth=(0,r.i)(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,t.strokeStyle=a.borderColor,t.setLineDash(a.borderDash||[]),t.lineDashOffset=a.borderDashOffset||0;let e=n.leftForLtr(f,h-u),i=n.leftForLtr(n.xPlus(f,1),h-u-2),o=(0,r.ax)(a.borderRadius);Object.values(o).some(t=>0!==t)?(t.beginPath(),t.fillStyle=s.multiKeyBackground,(0,r.av)(t,{x:e,y:m,w:h,h:l,radius:o}),t.fill(),t.stroke(),t.fillStyle=a.backgroundColor,t.beginPath(),(0,r.av)(t,{x:i,y:m+1,w:h-2,h:l-2,radius:o}),t.fill()):(t.fillStyle=s.multiKeyBackground,t.fillRect(e,m,h,l),t.strokeRect(e,m,h,l),t.fillStyle=a.backgroundColor,t.fillRect(i,m+1,h-2,l-2))}t.fillStyle=this.labelTextColors[i]}drawBody(t,e,i){let n,s,a,o,l,h,u;let{body:c}=this,{bodySpacing:d,bodyAlign:f,displayColors:p,boxHeight:m,boxWidth:g,boxPadding:b}=i,v=(0,r.O)(i.bodyFont),y=v.lineHeight,x=0,_=(0,r.aA)(i.rtl,this.x,this.width),w=function(i){e.fillText(i,_.x(t.x+x),t.y+y/2),t.y+=y+d},k=_.textAlign(f);for(e.textAlign=f,e.textBaseline="middle",e.font=v.string,t.x=eN(this,k,i),e.fillStyle=i.bodyColor,(0,r.Q)(this.beforeBody,w),x=p&&"right"!==k?"center"===f?g/2+b:g+2+b:0,o=0,h=c.length;o<h;++o){for(n=c[o],s=this.labelTextColors[o],e.fillStyle=s,(0,r.Q)(n.before,w),a=n.lines,p&&a.length&&(this._drawColorBox(e,t,o,_,i),y=Math.max(v.lineHeight,m)),l=0,u=a.length;l<u;++l)w(a[l]),y=v.lineHeight;(0,r.Q)(n.after,w)}x=0,y=v.lineHeight,(0,r.Q)(this.afterBody,w),t.y-=d}drawFooter(t,e,i){let n,s;let a=this.footer,o=a.length;if(o){let l=(0,r.aA)(i.rtl,this.x,this.width);for(t.x=eN(this,i.footerAlign,i),t.y+=i.footerMarginTop,e.textAlign=l.textAlign(i.footerAlign),e.textBaseline="middle",n=(0,r.O)(i.footerFont),e.fillStyle=i.footerColor,e.font=n.string,s=0;s<o;++s)e.fillText(a[s],l.x(t.x),t.y+n.lineHeight/2),t.y+=n.lineHeight+i.footerSpacing}}drawBackground(t,e,i,n){let{xAlign:s,yAlign:a}=this,{x:o,y:l}=t,{width:h,height:u}=i,{topLeft:c,topRight:d,bottomLeft:f,bottomRight:p}=(0,r.ax)(n.cornerRadius);e.fillStyle=n.backgroundColor,e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.beginPath(),e.moveTo(o+c,l),"top"===a&&this.drawCaret(t,e,i,n),e.lineTo(o+h-d,l),e.quadraticCurveTo(o+h,l,o+h,l+d),"center"===a&&"right"===s&&this.drawCaret(t,e,i,n),e.lineTo(o+h,l+u-p),e.quadraticCurveTo(o+h,l+u,o+h-p,l+u),"bottom"===a&&this.drawCaret(t,e,i,n),e.lineTo(o+f,l+u),e.quadraticCurveTo(o,l+u,o,l+u-f),"center"===a&&"left"===s&&this.drawCaret(t,e,i,n),e.lineTo(o,l+c),e.quadraticCurveTo(o,l,o+c,l),e.closePath(),e.fill(),n.borderWidth>0&&e.stroke()}_updateAnimationTarget(t){let e=this.chart,i=this.$animations,n=i&&i.x,r=i&&i.y;if(n||r){let i=eA[t.position].call(this,this._active,this._eventPosition);if(!i)return;let s=this._size=e$(this,t),a=Object.assign({},i,this._size),o=eR(e,t,a),l=eF(t,a,o,e);(n._to!==l.x||r._to!==l.y)&&(this.xAlign=o.xAlign,this.yAlign=o.yAlign,this.width=s.width,this.height=s.height,this.caretX=i.x,this.caretY=i.y,this._resolveAnimations().update(this,l))}}_willRender(){return!!this.opacity}draw(t){let e=this.options.setContext(this.getContext()),i=this.opacity;if(!i)return;this._updateAnimationTarget(e);let n={width:this.width,height:this.height},s={x:this.x,y:this.y};i=.001>Math.abs(i)?0:i;let a=(0,r.K)(e.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;e.enabled&&o&&(t.save(),t.globalAlpha=i,this.drawBackground(s,t,n,e),(0,r.aB)(t,e.textDirection),s.y+=a.top,this.drawTitle(s,t,e),this.drawBody(s,t,e),this.drawFooter(s,t,e),(0,r.aD)(t,e.textDirection),t.restore())}getActiveElements(){return this._active||[]}setActiveElements(t,e){let i=this._active,n=t.map(({datasetIndex:t,index:e})=>{let i=this.chart.getDatasetMeta(t);if(!i)throw Error("Cannot find a dataset at index "+t);return{datasetIndex:t,element:i.data[e],index:e}}),s=!(0,r.ai)(i,n),a=this._positionChanged(n,e);(s||a)&&(this._active=n,this._eventPosition=e,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(t,e,i=!0){if(e&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let n=this.options,s=this._active||[],a=this._getActiveElements(t,s,e,i),o=this._positionChanged(a,t),l=e||!(0,r.ai)(a,s)||o;return l&&(this._active=a,(n.enabled||n.external)&&(this._eventPosition={x:t.x,y:t.y},this.update(!0,e))),l}_getActiveElements(t,e,i,n){let r=this.options;if("mouseout"===t.type)return[];if(!n)return e;let s=this.chart.getElementsAtEventForMode(t,r.mode,r,i);return r.reverse&&s.reverse(),s}_positionChanged(t,e){let{caretX:i,caretY:n,options:r}=this,s=eA[r.position].call(this,t,e);return!1!==s&&(i!==s.x||n!==s.y)}}ej.positioners=eA;var eV={id:"tooltip",_element:ej,positioners:eA,afterInit(t,e,i){i&&(t.tooltip=new ej({chart:t,options:i}))},beforeUpdate(t,e,i){t.tooltip&&t.tooltip.initialize(i)},reset(t,e,i){t.tooltip&&t.tooltip.initialize(i)},afterDraw(t){let e=t.tooltip;if(e&&e._willRender()){let i={tooltip:e};if(!1===t.notifyPlugins("beforeTooltipDraw",i))return;e.draw(t.ctx),t.notifyPlugins("afterTooltipDraw",i)}},afterEvent(t,e){if(t.tooltip){let i=e.replay;t.tooltip.handleEvent(e.event,i,e.inChartArea)&&(e.changed=!0)}},defaults:{enabled:!0,external:null,position:"average",backgroundColor:"rgba(0,0,0,0.8)",titleColor:"#fff",titleFont:{weight:"bold"},titleSpacing:2,titleMarginBottom:6,titleAlign:"left",bodyColor:"#fff",bodySpacing:2,bodyFont:{},bodyAlign:"left",footerColor:"#fff",footerSpacing:2,footerMarginTop:6,footerFont:{weight:"bold"},footerAlign:"left",padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(t,e)=>e.bodyFont.size,boxWidth:(t,e)=>e.bodyFont.size,multiKeyBackground:"#fff",displayColors:!0,boxPadding:0,borderColor:"rgba(0,0,0,0)",borderWidth:0,animation:{duration:400,easing:"easeOutQuart"},animations:{numbers:{type:"number",properties:["x","y","width","height","caretX","caretY"]},opacity:{easing:"linear",duration:200}},callbacks:{beforeTitle:r.aF,title(t){if(t.length>0){let e=t[0],i=e.chart.data.labels,n=i?i.length:0;if(this&&this.options&&"dataset"===this.options.mode)return e.dataset.label||"";if(e.label)return e.label;if(n>0&&e.dataIndex<n)return i[e.dataIndex]}return""},afterTitle:r.aF,beforeBody:r.aF,beforeLabel:r.aF,label(t){if(this&&this.options&&"dataset"===this.options.mode)return t.label+": "+t.formattedValue||t.formattedValue;let e=t.dataset.label||"";e&&(e+=": ");let i=t.formattedValue;return(0,r.k)(i)||(e+=i),e},labelColor(t){let e=t.chart.getDatasetMeta(t.datasetIndex),i=e.controller.getStyle(t.dataIndex);return{borderColor:i.borderColor,backgroundColor:i.backgroundColor,borderWidth:i.borderWidth,borderDash:i.borderDash,borderDashOffset:i.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(t){let e=t.chart.getDatasetMeta(t.datasetIndex),i=e.controller.getStyle(t.dataIndex);return{pointStyle:i.pointStyle,rotation:i.rotation}},afterLabel:r.aF,afterBody:r.aF,beforeFooter:r.aF,footer:r.aF,afterFooter:r.aF}},defaultRoutes:{bodyFont:"font",footerFont:"font",titleFont:"font"},descriptors:{_scriptable:t=>"filter"!==t&&"itemSort"!==t&&"external"!==t,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:"animation"}},additionalOptionScopes:["interaction"]},eH=/*#__PURE__*/Object.freeze({__proto__:null,Decimation:ed,Filler:ek,Legend:eC,SubTitle:eP,Title:eD,Tooltip:eV});let eB=(t,e,i,n)=>("string"==typeof e?(i=t.push(e)-1,n.unshift({index:i,label:e})):isNaN(e)&&(i=null),i),eW=(t,e)=>null===t?null:(0,r.E)(Math.round(t),0,e);class eU extends W{constructor(t){super(t),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(t){let e=this._addedLabels;if(e.length){let t=this.getLabels();for(let{index:i,label:n}of e)t[i]===n&&t.splice(i,1);this._addedLabels=[]}super.init(t)}parse(t,e){if((0,r.k)(t))return null;let i=this.getLabels();return eW(e=isFinite(e)&&i[e]===t?e:function(t,e,i,n){let r=t.indexOf(e);if(-1===r)return eB(t,e,i,n);let s=t.lastIndexOf(e);return r!==s?i:r}(i,t,(0,r.v)(e,t),this._addedLabels),i.length-1)}determineDataLimits(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),{min:i,max:n}=this.getMinMax(!0);"ticks"!==this.options.bounds||(t||(i=0),e||(n=this.getLabels().length-1)),this.min=i,this.max=n}buildTicks(){let t=this.min,e=this.max,i=this.options.offset,n=[],r=this.getLabels();r=0===t&&e===r.length-1?r:r.slice(t,e+1),this._valueRange=Math.max(r.length-(i?0:1),1),this._startValue=this.min-(i?.5:0);for(let i=t;i<=e;i++)n.push({value:i});return n}getLabelForValue(t){let e=this.getLabels();return t>=0&&t<e.length?e[t]:t}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(t){return"number"!=typeof t&&(t=this.parse(t)),null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getPixelForTick(t){let e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t].value)}getValueForPixel(t){return Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange)}getBasePixel(){return this.bottom}}function eq(t,e,{horizontal:i,minRotation:n}){let s=(0,r.t)(n),a=.75*e*(""+t).length;return Math.min(e/((i?Math.sin(s):Math.cos(s))||.001),a)}eU.id="category",eU.defaults={ticks:{callback:eU.prototype.getLabelForValue}};class eZ extends W{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(t,e){return(0,r.k)(t)||("number"==typeof t||t instanceof Number)&&!isFinite(+t)?null:+t}handleTickRangeOptions(){let{beginAtZero:t}=this.options,{minDefined:e,maxDefined:i}=this.getUserBounds(),{min:n,max:s}=this,a=t=>n=e?n:t,o=t=>s=i?s:t;if(t){let t=(0,r.s)(n),e=(0,r.s)(s);t<0&&e<0?o(0):t>0&&e>0&&a(0)}if(n===s){let e=1;(s>=Number.MAX_SAFE_INTEGER||n<=Number.MIN_SAFE_INTEGER)&&(e=Math.abs(.05*s)),o(s+e),t||a(n-e)}this.min=n,this.max=s}getTickLimit(){let t;let e=this.options.ticks,{maxTicksLimit:i,stepSize:n}=e;return n?(t=Math.ceil(this.max/n)-Math.floor(this.min/n)+1)>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${n} would result generating up to ${t} ticks. Limiting to 1000.`),t=1e3):(t=this.computeTickLimit(),i=i||11),i&&(t=Math.min(i,t)),t}computeTickLimit(){return Number.POSITIVE_INFINITY}buildTicks(){let t=this.options,e=t.ticks,i=this.getTickLimit();i=Math.max(2,i);let n={maxTicks:i,bounds:t.bounds,min:t.min,max:t.max,precision:e.precision,step:e.stepSize,count:e.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:e.minRotation||0,includeBounds:!1!==e.includeBounds},s=this._range||this,a=function(t,e){let i,n,s,a;let o=[],{bounds:l,step:h,min:u,max:c,precision:d,count:f,maxTicks:p,maxDigits:m,includeBounds:g}=t,b=h||1,v=p-1,{min:y,max:x}=e,_=!(0,r.k)(u),w=!(0,r.k)(c),k=!(0,r.k)(f),M=(x-y)/(m+1),S=(0,r.aI)((x-y)/v/b)*b;if(S<1e-14&&!_&&!w)return[{value:y},{value:x}];(a=Math.ceil(x/S)-Math.floor(y/S))>v&&(S=(0,r.aI)(a*S/v/b)*b),(0,r.k)(d)||(S=Math.ceil(S*(i=Math.pow(10,d)))/i),"ticks"===l?(n=Math.floor(y/S)*S,s=Math.ceil(x/S)*S):(n=y,s=x),_&&w&&h&&(0,r.aJ)((c-u)/h,S/1e3)?(a=Math.round(Math.min((c-u)/S,p)),S=(c-u)/a,n=u,s=c):k?(n=_?u:n,S=((s=w?c:s)-n)/(a=f-1)):(a=(s-n)/S,a=(0,r.aK)(a,Math.round(a),S/1e3)?Math.round(a):Math.ceil(a));let T=Math.max((0,r.aL)(S),(0,r.aL)(n));n=Math.round(n*(i=Math.pow(10,(0,r.k)(d)?T:d)))/i,s=Math.round(s*i)/i;let C=0;for(_&&(g&&n!==u?(o.push({value:u}),n<u&&C++,(0,r.aK)(Math.round((n+C*S)*i)/i,u,eq(u,M,t))&&C++):n<u&&C++);C<a;++C)o.push({value:Math.round((n+C*S)*i)/i});return w&&g&&s!==c?o.length&&(0,r.aK)(o[o.length-1].value,c,eq(c,M,t))?o[o.length-1].value=c:o.push({value:c}):w&&s!==c||o.push({value:s}),o}(n,s);return"ticks"===t.bounds&&(0,r.aH)(a,this,"value"),t.reverse?(a.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),a}configure(){let t=this.ticks,e=this.min,i=this.max;if(super.configure(),this.options.offset&&t.length){let n=(i-e)/Math.max(t.length-1,1)/2;e-=n,i+=n}this._startValue=e,this._endValue=i,this._valueRange=i-e}getLabelForValue(t){return(0,r.o)(t,this.chart.options.locale,this.options.ticks.format)}}class eY extends eZ{determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=(0,r.g)(t)?t:0,this.max=(0,r.g)(e)?e:1,this.handleTickRangeOptions()}computeTickLimit(){let t=this.isHorizontal(),e=t?this.width:this.height,i=(0,r.t)(this.options.ticks.minRotation),n=this._resolveTickFontOptions(0);return Math.ceil(e/Math.min(40,n.lineHeight/((t?Math.sin(i):Math.cos(i))||.001)))}getPixelForValue(t){return null===t?NaN:this.getPixelForDecimal((t-this._startValue)/this._valueRange)}getValueForPixel(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange}}function eX(t){let e=t/Math.pow(10,Math.floor((0,r.z)(t)));return 1===e}eY.id="linear",eY.defaults={ticks:{callback:F.formatters.numeric}};class eK extends W{constructor(t){super(t),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(t,e){let i=eZ.prototype.parse.apply(this,[t,e]);if(0===i){this._zero=!0;return}return(0,r.g)(i)&&i>0?i:null}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!0);this.min=(0,r.g)(t)?Math.max(0,t):null,this.max=(0,r.g)(e)?Math.max(0,e):null,this.options.beginAtZero&&(this._zero=!0),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:t,maxDefined:e}=this.getUserBounds(),i=this.min,n=this.max,s=e=>i=t?i:e,a=t=>n=e?n:t,o=(t,e)=>Math.pow(10,Math.floor((0,r.z)(t))+e);i===n&&(i<=0?(s(1),a(10)):(s(o(i,-1)),a(o(n,1)))),i<=0&&s(o(n,-1)),n<=0&&a(o(i,1)),this._zero&&this.min!==this._suggestedMin&&i===o(this.min,0)&&s(o(i,-1)),this.min=i,this.max=n}buildTicks(){let t=this.options,e={min:this._userMin,max:this._userMax},i=function(t,e){let i=Math.floor((0,r.z)(e.max)),n=Math.ceil(e.max/Math.pow(10,i)),s=[],a=(0,r.B)(t.min,Math.pow(10,Math.floor((0,r.z)(e.min)))),o=Math.floor((0,r.z)(a)),l=Math.floor(a/Math.pow(10,o)),h=o<0?Math.pow(10,Math.abs(o)):1;do s.push({value:a,major:eX(a)}),10==++l&&(l=1,h=++o>=0?1:h),a=Math.round(l*Math.pow(10,o)*h)/h;while(o<i||o===i&&l<n)let u=(0,r.B)(t.max,a);return s.push({value:u,major:eX(a)}),s}(e,this);return"ticks"===t.bounds&&(0,r.aH)(i,this,"value"),t.reverse?(i.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),i}getLabelForValue(t){return void 0===t?"0":(0,r.o)(t,this.chart.options.locale,this.options.ticks.format)}configure(){let t=this.min;super.configure(),this._startValue=(0,r.z)(t),this._valueRange=(0,r.z)(this.max)-(0,r.z)(t)}getPixelForValue(t){return((void 0===t||0===t)&&(t=this.min),null===t||isNaN(t))?NaN:this.getPixelForDecimal(t===this.min?0:((0,r.z)(t)-this._startValue)/this._valueRange)}getValueForPixel(t){let e=this.getDecimalForPixel(t);return Math.pow(10,this._startValue+e*this._valueRange)}}function eJ(t){let e=t.ticks;if(e.display&&t.display){let t=(0,r.K)(e.backdropPadding);return(0,r.v)(e.font&&e.font.size,r.d.font.size)+t.height}return 0}function eG(t,e,i,n,r){return t===n||t===r?{start:e-i/2,end:e+i/2}:t<n||t>r?{start:e-i,end:e}:{start:e,end:e+i}}function eQ(t,e,i,n){let{ctx:s}=t;if(i)s.arc(t.xCenter,t.yCenter,e,0,r.T);else{let i=t.getPointPosition(0,e);s.moveTo(i.x,i.y);for(let r=1;r<n;r++)i=t.getPointPosition(r,e),s.lineTo(i.x,i.y)}}eK.id="logarithmic",eK.defaults={ticks:{callback:F.formatters.logarithmic,major:{enabled:!0}}};class e0 extends eZ{constructor(t){super(t),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let t=this._padding=(0,r.K)(eJ(this.options)/2),e=this.width=this.maxWidth-t.width,i=this.height=this.maxHeight-t.height;this.xCenter=Math.floor(this.left+e/2+t.left),this.yCenter=Math.floor(this.top+i/2+t.top),this.drawingArea=Math.floor(Math.min(e,i)/2)}determineDataLimits(){let{min:t,max:e}=this.getMinMax(!1);this.min=(0,r.g)(t)&&!isNaN(t)?t:0,this.max=(0,r.g)(e)&&!isNaN(e)?e:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/eJ(this.options))}generateTickLabels(t){eZ.prototype.generateTickLabels.call(this,t),this._pointLabels=this.getLabels().map((t,e)=>{let i=(0,r.C)(this.options.pointLabels.callback,[t,e],this);return i||0===i?i:""}).filter((t,e)=>this.chart.getDataVisibility(e))}fit(){let t=this.options;t.display&&t.pointLabels.display?function(t){let e={l:t.left+t._padding.left,r:t.right-t._padding.right,t:t.top+t._padding.top,b:t.bottom-t._padding.bottom},i=Object.assign({},e),n=[],s=[],a=t._pointLabels.length,o=t.options.pointLabels,l=o.centerPointLabels?r.P/a:0;for(let c=0;c<a;c++){var h,u;let a=o.setContext(t.getPointLabelContext(c));s[c]=a.padding;let d=t.getPointPosition(c,t.drawingArea+s[c],l),f=(0,r.O)(a.font),p=(h=t.ctx,u=t._pointLabels[c],u=(0,r.b)(u)?u:[u],{w:(0,r.aM)(h,f.string,u),h:u.length*f.lineHeight});n[c]=p;let m=(0,r.az)(t.getIndexAngle(c)+l),g=Math.round((0,r.F)(m)),b=eG(g,d.x,p.w,0,180),v=eG(g,d.y,p.h,90,270);!function(t,e,i,n,r){let s=Math.abs(Math.sin(i)),a=Math.abs(Math.cos(i)),o=0,l=0;n.start<e.l?(o=(e.l-n.start)/s,t.l=Math.min(t.l,e.l-o)):n.end>e.r&&(o=(n.end-e.r)/s,t.r=Math.max(t.r,e.r+o)),r.start<e.t?(l=(e.t-r.start)/a,t.t=Math.min(t.t,e.t-l)):r.end>e.b&&(l=(r.end-e.b)/a,t.b=Math.max(t.b,e.b+l))}(i,e,m,b,v)}t.setCenterPoint(e.l-i.l,i.r-e.r,e.t-i.t,i.b-e.b),t._pointLabelItems=function(t,e,i){let n=[],s=t._pointLabels.length,a=t.options,o=eJ(a)/2,l=t.drawingArea,h=a.pointLabels.centerPointLabels?r.P/s:0;for(let a=0;a<s;a++){var u,c,d,f;let s=t.getPointPosition(a,l+o+i[a],h),p=Math.round((0,r.F)((0,r.az)(s.angle+r.H))),m=e[a],g=(u=s.y,c=m.h,90===p||270===p?u-=c/2:(p>270||p<90)&&(u-=c),u),b=0===p||180===p?"center":p<180?"left":"right",v=(d=s.x,f=m.w,"right"===b?d-=f:"center"===b&&(d-=f/2),d);n.push({x:s.x,y:g,textAlign:b,left:v,top:g,right:v+m.w,bottom:g+m.h})}return n}(t,n,s)}(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(t,e,i,n){this.xCenter+=Math.floor((t-e)/2),this.yCenter+=Math.floor((i-n)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(t,e,i,n))}getIndexAngle(t){let e=r.T/(this._pointLabels.length||1),i=this.options.startAngle||0;return(0,r.az)(t*e+(0,r.t)(i))}getDistanceFromCenterForValue(t){if((0,r.k)(t))return NaN;let e=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-t)*e:(t-this.min)*e}getValueForDistanceFromCenter(t){if((0,r.k)(t))return NaN;let e=t/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-e:this.min+e}getPointLabelContext(t){let e=this._pointLabels||[];if(t>=0&&t<e.length){var i;let n=e[t];return i=this.getContext(),(0,r.h)(i,{label:n,index:t,type:"pointLabel"})}}getPointPosition(t,e,i=0){let n=this.getIndexAngle(t)-r.H+i;return{x:Math.cos(n)*e+this.xCenter,y:Math.sin(n)*e+this.yCenter,angle:n}}getPointPositionForValue(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))}getBasePosition(t){return this.getPointPositionForValue(t||0,this.getBaseValue())}getPointLabelPosition(t){let{left:e,top:i,right:n,bottom:r}=this._pointLabelItems[t];return{left:e,top:i,right:n,bottom:r}}drawBackground(){let{backgroundColor:t,grid:{circular:e}}=this.options;if(t){let i=this.ctx;i.save(),i.beginPath(),eQ(this,this.getDistanceFromCenterForValue(this._endValue),e,this._pointLabels.length),i.closePath(),i.fillStyle=t,i.fill(),i.restore()}}drawGrid(){let t,e,i;let n=this.ctx,s=this.options,{angleLines:a,grid:o}=s,l=this._pointLabels.length;if(s.pointLabels.display&&function(t,e){let{ctx:i,options:{pointLabels:n}}=t;for(let s=e-1;s>=0;s--){let e=n.setContext(t.getPointLabelContext(s)),a=(0,r.O)(e.font),{x:o,y:l,textAlign:h,left:u,top:c,right:d,bottom:f}=t._pointLabelItems[s],{backdropColor:p}=e;if(!(0,r.k)(p)){let t=(0,r.ax)(e.borderRadius),n=(0,r.K)(e.backdropPadding);i.fillStyle=p;let s=u-n.left,a=c-n.top,o=d-u+n.width,l=f-c+n.height;Object.values(t).some(t=>0!==t)?(i.beginPath(),(0,r.av)(i,{x:s,y:a,w:o,h:l,radius:t}),i.fill()):i.fillRect(s,a,o,l)}(0,r.M)(i,t._pointLabels[s],o,l+a.lineHeight/2,a,{color:e.color,textAlign:h,textBaseline:"middle"})}}(this,l),o.display&&this.ticks.forEach((t,i)=>{if(0!==i){e=this.getDistanceFromCenterForValue(t.value);let n=o.setContext(this.getContext(i-1));!function(t,e,i,n){let r=t.ctx,s=e.circular,{color:a,lineWidth:o}=e;(s||n)&&a&&o&&!(i<0)&&(r.save(),r.strokeStyle=a,r.lineWidth=o,r.setLineDash(e.borderDash),r.lineDashOffset=e.borderDashOffset,r.beginPath(),eQ(t,i,s,n),r.closePath(),r.stroke(),r.restore())}(this,n,e,l)}}),a.display){for(n.save(),t=l-1;t>=0;t--){let r=a.setContext(this.getPointLabelContext(t)),{color:o,lineWidth:l}=r;l&&o&&(n.lineWidth=l,n.strokeStyle=o,n.setLineDash(r.borderDash),n.lineDashOffset=r.borderDashOffset,e=this.getDistanceFromCenterForValue(s.ticks.reverse?this.min:this.max),i=this.getPointPosition(t,e),n.beginPath(),n.moveTo(this.xCenter,this.yCenter),n.lineTo(i.x,i.y),n.stroke())}n.restore()}}drawBorder(){}drawLabels(){let t,e;let i=this.ctx,n=this.options,s=n.ticks;if(!s.display)return;let a=this.getIndexAngle(0);i.save(),i.translate(this.xCenter,this.yCenter),i.rotate(a),i.textAlign="center",i.textBaseline="middle",this.ticks.forEach((a,o)=>{if(0===o&&!n.reverse)return;let l=s.setContext(this.getContext(o)),h=(0,r.O)(l.font);if(t=this.getDistanceFromCenterForValue(this.ticks[o].value),l.showLabelBackdrop){i.font=h.string,e=i.measureText(a.label).width,i.fillStyle=l.backdropColor;let n=(0,r.K)(l.backdropPadding);i.fillRect(-e/2-n.left,-t-h.size/2-n.top,e+n.width,h.size+n.height)}(0,r.M)(i,a.label,0,-t,h,{color:l.color})}),i.restore()}drawTitle(){}}e0.id="radialLinear",e0.defaults={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:F.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback:t=>t,padding:5,centerPointLabels:!1}},e0.defaultRoutes={"angleLines.color":"borderColor","pointLabels.color":"color","ticks.color":"color"},e0.descriptors={angleLines:{_fallback:"grid"}};let e1={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},e2=Object.keys(e1);function e5(t,e){return t-e}function e3(t,e){if((0,r.k)(e))return null;let i=t._adapter,{parser:n,round:s,isoWeekday:a}=t._parseOpts,o=e;return("function"==typeof n&&(o=n(o)),(0,r.g)(o)||(o="string"==typeof n?i.parse(o,n):i.parse(o)),null===o)?null:(s&&(o="week"===s&&((0,r.x)(a)||!0===a)?i.startOf(o,"isoWeek",a):i.startOf(o,s)),+o)}function e4(t,e,i,n){let r=e2.length;for(let s=e2.indexOf(t);s<r-1;++s){let t=e1[e2[s]],r=t.steps?t.steps:Number.MAX_SAFE_INTEGER;if(t.common&&Math.ceil((i-e)/(r*t.size))<=n)return e2[s]}return e2[r-1]}function e6(t,e,i){if(i){if(i.length){let{lo:n,hi:s}=(0,r.aO)(i,e),a=i[n]>=e?i[n]:i[s];t[a]=!0}}else t[e]=!0}function e8(t,e,i){let n,r;let s=[],a={},o=e.length;for(n=0;n<o;++n)a[r=e[n]]=n,s.push({value:r,major:!1});return 0!==o&&i?function(t,e,i,n){let r,s;let a=t._adapter,o=+a.startOf(e[0].value,n),l=e[e.length-1].value;for(r=o;r<=l;r=+a.add(r,1,n))(s=i[r])>=0&&(e[s].major=!0);return e}(t,s,a,i):s}class e7 extends W{constructor(t){super(t),this._cache={data:[],labels:[],all:[]},this._unit="day",this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(t,e){let i=t.time||(t.time={}),n=this._adapter=new J._date(t.adapters.date);n.init(e),(0,r.ac)(i.displayFormats,n.formats()),this._parseOpts={parser:i.parser,round:i.round,isoWeekday:i.isoWeekday},super.init(t),this._normalized=e.normalized}parse(t,e){return void 0===t?null:e3(this,t)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let t=this.options,e=this._adapter,i=t.time.unit||"day",{min:n,max:s,minDefined:a,maxDefined:o}=this.getUserBounds();function l(t){a||isNaN(t.min)||(n=Math.min(n,t.min)),o||isNaN(t.max)||(s=Math.max(s,t.max))}a&&o||(l(this._getLabelBounds()),("ticks"!==t.bounds||"labels"!==t.ticks.source)&&l(this.getMinMax(!1))),n=(0,r.g)(n)&&!isNaN(n)?n:+e.startOf(Date.now(),i),s=(0,r.g)(s)&&!isNaN(s)?s:+e.endOf(Date.now(),i)+1,this.min=Math.min(n,s-1),this.max=Math.max(n+1,s)}_getLabelBounds(){let t=this.getLabelTimestamps(),e=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;return t.length&&(e=t[0],i=t[t.length-1]),{min:e,max:i}}buildTicks(){let t=this.options,e=t.time,i=t.ticks,n="labels"===i.source?this.getLabelTimestamps():this._generate();"ticks"===t.bounds&&n.length&&(this.min=this._userMin||n[0],this.max=this._userMax||n[n.length-1]);let s=this.min,a=this.max,o=(0,r.aN)(n,s,a);return this._unit=e.unit||(i.autoSkip?e4(e.minUnit,this.min,this.max,this._getLabelCapacity(s)):function(t,e,i,n,r){for(let s=e2.length-1;s>=e2.indexOf(i);s--){let i=e2[s];if(e1[i].common&&t._adapter.diff(r,n,i)>=e-1)return i}return e2[i?e2.indexOf(i):0]}(this,o.length,e.minUnit,this.min,this.max)),this._majorUnit=i.major.enabled&&"year"!==this._unit?function(t){for(let e=e2.indexOf(t)+1,i=e2.length;e<i;++e)if(e1[e2[e]].common)return e2[e]}(this._unit):void 0,this.initOffsets(n),t.reverse&&o.reverse(),e8(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(t=>+t.value))}initOffsets(t){let e,i,n=0,s=0;this.options.offset&&t.length&&(e=this.getDecimalForValue(t[0]),n=1===t.length?1-e:(this.getDecimalForValue(t[1])-e)/2,i=this.getDecimalForValue(t[t.length-1]),s=1===t.length?i:(i-this.getDecimalForValue(t[t.length-2]))/2);let a=t.length<3?.5:.25;n=(0,r.E)(n,0,a),s=(0,r.E)(s,0,a),this._offsets={start:n,end:s,factor:1/(n+1+s)}}_generate(){let t,e;let i=this._adapter,n=this.min,s=this.max,a=this.options,o=a.time,l=o.unit||e4(o.minUnit,n,s,this._getLabelCapacity(n)),h=(0,r.v)(o.stepSize,1),u="week"===l&&o.isoWeekday,c=(0,r.x)(u)||!0===u,d={},f=n;if(c&&(f=+i.startOf(f,"isoWeek",u)),f=+i.startOf(f,c?"day":l),i.diff(s,n,l)>1e5*h)throw Error(n+" and "+s+" are too far apart with stepSize of "+h+" "+l);let p="data"===a.ticks.source&&this.getDataTimestamps();for(t=f,e=0;t<s;t=+i.add(t,h,l),e++)e6(d,t,p);return(t===s||"ticks"===a.bounds||1===e)&&e6(d,t,p),Object.keys(d).sort((t,e)=>t-e).map(t=>+t)}getLabelForValue(t){let e=this._adapter,i=this.options.time;return i.tooltipFormat?e.format(t,i.tooltipFormat):e.format(t,i.displayFormats.datetime)}_tickFormatFunction(t,e,i,n){let s=this.options,a=s.time.displayFormats,o=this._unit,l=this._majorUnit,h=o&&a[o],u=l&&a[l],c=i[e],d=l&&u&&c&&c.major,f=this._adapter.format(t,n||(d?u:h)),p=s.ticks.callback;return p?(0,r.C)(p,[f,e,i],this):f}generateTickLabels(t){let e,i,n;for(e=0,i=t.length;e<i;++e)(n=t[e]).label=this._tickFormatFunction(n.value,e,t)}getDecimalForValue(t){return null===t?NaN:(t-this.min)/(this.max-this.min)}getPixelForValue(t){let e=this._offsets,i=this.getDecimalForValue(t);return this.getPixelForDecimal((e.start+i)*e.factor)}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return this.min+i*(this.max-this.min)}_getLabelSize(t){let e=this.options.ticks,i=this.ctx.measureText(t).width,n=(0,r.t)(this.isHorizontal()?e.maxRotation:e.minRotation),s=Math.cos(n),a=Math.sin(n),o=this._resolveTickFontOptions(0).size;return{w:i*s+o*a,h:i*a+o*s}}_getLabelCapacity(t){let e=this.options.time,i=e.displayFormats,n=i[e.unit]||i.millisecond,r=this._tickFormatFunction(t,0,e8(this,[t],this._majorUnit),n),s=this._getLabelSize(r),a=Math.floor(this.isHorizontal()?this.width/s.w:this.height/s.h)-1;return a>0?a:1}getDataTimestamps(){let t,e,i=this._cache.data||[];if(i.length)return i;let n=this.getMatchingVisibleMetas();if(this._normalized&&n.length)return this._cache.data=n[0].controller.getAllParsedValues(this);for(t=0,e=n.length;t<e;++t)i=i.concat(n[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(i)}getLabelTimestamps(){let t,e;let i=this._cache.labels||[];if(i.length)return i;let n=this.getLabels();for(t=0,e=n.length;t<e;++t)i.push(e3(this,n[t]));return this._cache.labels=this._normalized?i:this.normalize(i)}normalize(t){return(0,r._)(t.sort(e5))}}function e9(t,e,i){let n,s,a,o,l=0,h=t.length-1;i?(e>=t[l].pos&&e<=t[h].pos&&({lo:l,hi:h}=(0,r.Z)(t,"pos",e)),{pos:n,time:a}=t[l],{pos:s,time:o}=t[h]):(e>=t[l].time&&e<=t[h].time&&({lo:l,hi:h}=(0,r.Z)(t,"time",e)),{time:n,pos:a}=t[l],{time:s,pos:o}=t[h]);let u=s-n;return u?a+(o-a)*(e-n)/u:a}e7.id="time",e7.defaults={bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{source:"auto",major:{enabled:!1}}};class it extends e7{constructor(t){super(t),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let t=this._getTimestampsForTable(),e=this._table=this.buildLookupTable(t);this._minPos=e9(e,this.min),this._tableRange=e9(e,this.max)-this._minPos,super.initOffsets(t)}buildLookupTable(t){let e,i,n;let{min:r,max:s}=this,a=[],o=[];for(e=0,i=t.length;e<i;++e)(n=t[e])>=r&&n<=s&&a.push(n);if(a.length<2)return[{time:r,pos:0},{time:s,pos:1}];for(e=0,i=a.length;e<i;++e)Math.round((a[e+1]+a[e-1])/2)!==(n=a[e])&&o.push({time:n,pos:e/(i-1)});return o}_getTimestampsForTable(){let t=this._cache.all||[];if(t.length)return t;let e=this.getDataTimestamps(),i=this.getLabelTimestamps();return t=e.length&&i.length?this.normalize(e.concat(i)):e.length?e:i,t=this._cache.all=t}getDecimalForValue(t){return(e9(this._table,t)-this._minPos)/this._tableRange}getValueForPixel(t){let e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end;return e9(this._table,i*this._tableRange+this._minPos,!0)}}it.id="timeseries",it.defaults=e7.defaults;var ie=/*#__PURE__*/Object.freeze({__proto__:null,CategoryScale:eU,LinearScale:eY,LogarithmicScale:eK,RadialLinearScale:e0,TimeScale:e7,TimeSeriesScale:it});let ii=[Y,eh,eH,ie]},{"./chunks/helpers.segment.mjs":"iqGi7","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],iqGi7:[function(t,e,i){let n,r;/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */var s=t("@parcel/transformer-js/src/esmodule-helpers.js");function a(){}s.defineInteropFlag(i),s.export(i,"$",()=>el),s.export(i,"A",()=>U),s.export(i,"B",()=>d),s.export(i,"C",()=>g),s.export(i,"D",()=>eS),s.export(i,"E",()=>tr),s.export(i,"F",()=>J),s.export(i,"G",()=>ei),s.export(i,"H",()=>z),s.export(i,"I",()=>ts),s.export(i,"J",()=>er),s.export(i,"K",()=>ew),s.export(i,"L",()=>eh),s.export(i,"M",()=>ef),s.export(i,"N",()=>eu),s.export(i,"O",()=>ek),s.export(i,"P",()=>L),s.export(i,"Q",()=>b),s.export(i,"R",()=>ty),s.export(i,"S",()=>tx),s.export(i,"T",()=>$),s.export(i,"U",()=>t6),s.export(i,"V",()=>w),s.export(i,"W",()=>D),s.export(i,"X",()=>eQ),s.export(i,"Y",()=>th),s.export(i,"Z",()=>tl),s.export(i,"_",()=>tp),s.export(i,"a",()=>eM),s.export(i,"a$",()=>eb),s.export(i,"a0",()=>Q),s.export(i,"a1",()=>e1),s.export(i,"a2",()=>eq),s.export(i,"a3",()=>e3),s.export(i,"a4",()=>tb),s.export(i,"a5",()=>e5),s.export(i,"a6",()=>eU),s.export(i,"a7",()=>t8),s.export(i,"a8",()=>P),s.export(i,"a9",()=>function t(e,i,n,r){let s={_cacheable:!1,_proxy:e,_context:i,_subProxy:n,_stack:new Set,_descriptors:eO(e,r),setContext:i=>t(e,i,n,r),override:s=>t(e.override(s),i,n,r)};return new Proxy(s,{deleteProperty:(t,i)=>(delete t[i],delete e[i],!0),get:(e,i,n)=>eP(e,i,()=>(function(e,i,n){let{_proxy:r,_context:s,_subProxy:a,_descriptors:o}=e,l=r[i];return P(l)&&o.isScriptable(i)&&(l=function(t,e,i,n){let{_proxy:r,_context:s,_subProxy:a,_stack:o}=i;if(o.has(t))throw Error("Recursion detected: "+Array.from(o).join("->")+"->"+t);return o.add(t),e=e(s,a||n),o.delete(t),eE(t,e)&&(e=eI(r._scopes,r,t,e)),e}(i,l,e,n)),h(l)&&l.length&&(l=function(e,i,n,r){let{_proxy:s,_context:a,_subProxy:o,_descriptors:l}=n;if(E(a.index)&&r(e))i=i[a.index%i.length];else if(u(i[0])){let n=i,r=s._scopes.filter(t=>t!==n);for(let h of(i=[],n)){let n=eI(r,s,e,h);i.push(t(n,a,o&&o[e],l))}}return i}(i,l,e,o.isIndexable)),eE(i,l)&&(l=t(l,s,a&&a[i],o)),l})(e,i,n)),getOwnPropertyDescriptor:(t,i)=>t._descriptors.allKeys?Reflect.has(e,i)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,i),getPrototypeOf:()=>Reflect.getPrototypeOf(e),has:(t,i)=>Reflect.has(e,i),ownKeys:()=>Reflect.ownKeys(e),set:(t,i,n)=>(e[i]=n,delete t[i],!0)})}),s.export(i,"aA",()=>it),s.export(i,"aB",()=>ie),s.export(i,"aC",()=>t_),s.export(i,"aD",()=>ii),s.export(i,"aE",()=>eo),s.export(i,"aF",()=>a),s.export(i,"aG",()=>tt),s.export(i,"aH",()=>X),s.export(i,"aI",()=>W),s.export(i,"aJ",()=>Y),s.export(i,"aK",()=>Z),s.export(i,"aL",()=>G),s.export(i,"aM",()=>en),s.export(i,"aN",()=>tu),s.export(i,"aO",()=>to),s.export(i,"aP",()=>t5),s.export(i,"aQ",()=>t4),s.export(i,"aR",()=>y),s.export(i,"aS",()=>_),s.export(i,"aT",()=>M),s.export(i,"aU",()=>S),s.export(i,"aV",()=>O),s.export(i,"aW",()=>ee),s.export(i,"aX",()=>eV),s.export(i,"aY",()=>eH),s.export(i,"aZ",()=>eX),s.export(i,"a_",()=>tm),s.export(i,"aa",()=>eC),s.export(i,"ab",()=>eO),s.export(i,"ac",()=>k),s.export(i,"ad",()=>o),s.export(i,"ae",()=>tv),s.export(i,"af",()=>e2),s.export(i,"ag",()=>es),s.export(i,"ah",()=>A),s.export(i,"ai",()=>v),s.export(i,"aj",()=>I),s.export(i,"ak",()=>ta),s.export(i,"al",()=>ey),s.export(i,"am",()=>eW),s.export(i,"an",()=>il),s.export(i,"ao",()=>io),s.export(i,"ap",()=>e6),s.export(i,"aq",()=>e8),s.export(i,"ar",()=>e4),s.export(i,"as",()=>ec),s.export(i,"at",()=>ed),s.export(i,"au",()=>ea),s.export(i,"av",()=>ep),s.export(i,"aw",()=>ex),s.export(i,"ax",()=>e_),s.export(i,"ay",()=>ia),s.export(i,"az",()=>ti),s.export(i,"b",()=>h),s.export(i,"b0",()=>R),s.export(i,"b1",()=>F),s.export(i,"b2",()=>N),s.export(i,"b3",()=>j),s.export(i,"b4",()=>V),s.export(i,"b5",()=>te),s.export(i,"c",()=>t3),s.export(i,"d",()=>et),s.export(i,"e",()=>tC),s.export(i,"f",()=>C),s.export(i,"g",()=>c),s.export(i,"h",()=>eT),s.export(i,"i",()=>u),s.export(i,"j",()=>E),s.export(i,"k",()=>l),s.export(i,"l",()=>td),s.export(i,"m",()=>p),s.export(i,"n",()=>m),s.export(i,"o",()=>e9),s.export(i,"p",()=>tn),s.export(i,"q",()=>tw),s.export(i,"r",()=>tg),s.export(i,"s",()=>B),s.export(i,"t",()=>K),s.export(i,"u",()=>tf),s.export(i,"v",()=>f),s.export(i,"w",()=>tk),s.export(i,"x",()=>q),s.export(i,"y",()=>eF),s.export(i,"z",()=>H);let o=(r=0,function(){return r++});function l(t){return null==t}function h(t){if(Array.isArray&&Array.isArray(t))return!0;let e=Object.prototype.toString.call(t);return"[object"===e.slice(0,7)&&"Array]"===e.slice(-6)}function u(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)}let c=t=>("number"==typeof t||t instanceof Number)&&isFinite(+t);function d(t,e){return c(t)?t:e}function f(t,e){return void 0===t?e:t}let p=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100:t/e,m=(t,e)=>"string"==typeof t&&t.endsWith("%")?parseFloat(t)/100*e:+t;function g(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)}function b(t,e,i,n){let r,s,a;if(h(t)){if(s=t.length,n)for(r=s-1;r>=0;r--)e.call(i,t[r],r);else for(r=0;r<s;r++)e.call(i,t[r],r)}else if(u(t))for(r=0,s=(a=Object.keys(t)).length;r<s;r++)e.call(i,t[a[r]],a[r])}function v(t,e){let i,n,r,s;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(r=t[i],s=e[i],r.datasetIndex!==s.datasetIndex||r.index!==s.index)return!1;return!0}function y(t){if(h(t))return t.map(y);if(u(t)){let e=Object.create(null),i=Object.keys(t),n=i.length,r=0;for(;r<n;++r)e[i[r]]=y(t[i[r]]);return e}return t}function x(t){return -1===["__proto__","prototype","constructor"].indexOf(t)}function _(t,e,i,n){if(!x(t))return;let r=e[t],s=i[t];u(r)&&u(s)?w(r,s,n):e[t]=y(s)}function w(t,e,i){let n=h(e)?e:[e],r=n.length;if(!u(t))return t;i=i||{};let s=i.merger||_;for(let a=0;a<r;++a){if(!u(e=n[a]))continue;let r=Object.keys(e);for(let n=0,a=r.length;n<a;++n)s(r[n],t,e,i)}return t}function k(t,e){return w(t,e,{merger:M})}function M(t,e,i){if(!x(t))return;let n=e[t],r=i[t];u(n)&&u(r)?k(n,r):Object.prototype.hasOwnProperty.call(e,t)||(e[t]=y(r))}function S(t,e,i,n){void 0!==e&&console.warn(t+': "'+i+'" is deprecated. Please use "'+n+'" instead')}let T={"":t=>t,x:t=>t.x,y:t=>t.y};function C(t,e){let i=T[e]||(T[e]=function(t){let e=O(t);return t=>{for(let i of e){if(""===i)break;t=t&&t[i]}return t}}(e));return i(t)}function O(t){let e=t.split("."),i=[],n="";for(let t of e)(n+=t).endsWith("\\")?n=n.slice(0,-1)+".":(i.push(n),n="");return i}function D(t){return t.charAt(0).toUpperCase()+t.slice(1)}let E=t=>void 0!==t,P=t=>"function"==typeof t,A=(t,e)=>{if(t.size!==e.size)return!1;for(let i of t)if(!e.has(i))return!1;return!0};function I(t){return"mouseup"===t.type||"click"===t.type||"contextmenu"===t.type}let L=Math.PI,$=2*L,R=$+L,F=Number.POSITIVE_INFINITY,N=L/180,z=L/2,j=L/4,V=2*L/3,H=Math.log10,B=Math.sign;function W(t){let e=Math.round(t);t=Z(t,e,t/1e3)?e:t;let i=Math.pow(10,Math.floor(H(t))),n=t/i;return(n<=1?1:n<=2?2:n<=5?5:10)*i}function U(t){let e;let i=[],n=Math.sqrt(t);for(e=1;e<n;e++)t%e==0&&(i.push(e),i.push(t/e));return n===(0|n)&&i.push(n),i.sort((t,e)=>t-e).pop(),i}function q(t){return!isNaN(parseFloat(t))&&isFinite(t)}function Z(t,e,i){return Math.abs(t-e)<i}function Y(t,e){let i=Math.round(t);return i-e<=t&&i+e>=t}function X(t,e,i){let n,r,s;for(n=0,r=t.length;n<r;n++)isNaN(s=t[n][i])||(e.min=Math.min(e.min,s),e.max=Math.max(e.max,s))}function K(t){return t*(L/180)}function J(t){return t*(180/L)}function G(t){if(!c(t))return;let e=1,i=0;for(;Math.round(t*e)/e!==t;)e*=10,i++;return i}function Q(t,e){let i=e.x-t.x,n=e.y-t.y,r=Math.atan2(n,i);return r<-.5*L&&(r+=$),{angle:r,distance:Math.sqrt(i*i+n*n)}}function tt(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function te(t,e){return(t-e+R)%$-L}function ti(t){return(t%$+$)%$}function tn(t,e,i,n){let r=ti(t),s=ti(e),a=ti(i),o=ti(s-r),l=ti(a-r),h=ti(r-s),u=ti(r-a);return r===s||r===a||n&&s===a||o>l&&h<u}function tr(t,e,i){return Math.max(e,Math.min(i,t))}function ts(t){return tr(t,-32768,32767)}function ta(t,e,i,n=1e-6){return t>=Math.min(e,i)-n&&t<=Math.max(e,i)+n}function to(t,e,i){let n;i=i||(i=>t[i]<e);let r=t.length-1,s=0;for(;r-s>1;)i(n=s+r>>1)?s=n:r=n;return{lo:s,hi:r}}let tl=(t,e,i,n)=>to(t,i,n?n=>t[n][e]<=i:n=>t[n][e]<i),th=(t,e,i)=>to(t,i,n=>t[n][e]>=i);function tu(t,e,i){let n=0,r=t.length;for(;n<r&&t[n]<e;)n++;for(;r>n&&t[r-1]>i;)r--;return n>0||r<t.length?t.slice(n,r):t}let tc=["push","pop","shift","splice","unshift"];function td(t,e){if(t._chartjs){t._chartjs.listeners.push(e);return}Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),tc.forEach(e=>{let i="_onData"+D(e),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value(...e){let r=n.apply(this,e);return t._chartjs.listeners.forEach(t=>{"function"==typeof t[i]&&t[i](...e)}),r}})})}function tf(t,e){let i=t._chartjs;if(!i)return;let n=i.listeners,r=n.indexOf(e);-1!==r&&n.splice(r,1),n.length>0||(tc.forEach(e=>{delete t[e]}),delete t._chartjs)}function tp(t){let e,i;let n=new Set;for(e=0,i=t.length;e<i;++e)n.add(t[e]);return n.size===i?t:Array.from(n)}function tm(t,e,i){return e+" "+t+"px "+i}let tg="undefined"==typeof window?function(t){return t()}:window.requestAnimationFrame;function tb(t,e,i){let n=i||(t=>Array.prototype.slice.call(t)),r=!1,s=[];return function(...i){s=n(i),r||(r=!0,tg.call(window,()=>{r=!1,t.apply(e,s)}))}}function tv(t,e){let i;return function(...n){return e?(clearTimeout(i),i=setTimeout(t,e,n)):t.apply(this,n),e}}let ty=t=>"start"===t?"left":"end"===t?"right":"center",tx=(t,e,i)=>"start"===t?e:"end"===t?i:(e+i)/2,t_=(t,e,i,n)=>t===(n?"left":"right")?i:"center"===t?(e+i)/2:e;function tw(t,e,i){let n=e.length,r=0,s=n;if(t._sorted){let{iScale:a,_parsed:o}=t,l=a.axis,{min:h,max:u,minDefined:c,maxDefined:d}=a.getUserBounds();c&&(r=tr(Math.min(tl(o,a.axis,h).lo,i?n:tl(e,l,a.getPixelForValue(h)).lo),0,n-1)),s=d?tr(Math.max(tl(o,a.axis,u,!0).hi+1,i?0:tl(e,l,a.getPixelForValue(u),!0).hi+1),r,n)-r:n-r}return{start:r,count:s}}function tk(t){let{xScale:e,yScale:i,_scaleRanges:n}=t,r={xmin:e.min,xmax:e.max,ymin:i.min,ymax:i.max};if(!n)return t._scaleRanges=r,!0;let s=n.xmin!==e.min||n.xmax!==e.max||n.ymin!==i.min||n.ymax!==i.max;return Object.assign(n,r),s}let tM=t=>0===t||1===t,tS=(t,e,i)=>-(Math.pow(2,10*(t-=1))*Math.sin((t-e)*$/i)),tT=(t,e,i)=>Math.pow(2,-10*t)*Math.sin((t-e)*$/i)+1,tC={linear:t=>t,easeInQuad:t=>t*t,easeOutQuad:t=>-t*(t-2),easeInOutQuad:t=>(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1),easeInCubic:t=>t*t*t,easeOutCubic:t=>(t-=1)*t*t+1,easeInOutCubic:t=>(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2),easeInQuart:t=>t*t*t*t,easeOutQuart:t=>-((t-=1)*t*t*t-1),easeInOutQuart:t=>(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2),easeInQuint:t=>t*t*t*t*t,easeOutQuint:t=>(t-=1)*t*t*t*t+1,easeInOutQuint:t=>(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2),easeInSine:t=>-Math.cos(t*z)+1,easeOutSine:t=>Math.sin(t*z),easeInOutSine:t=>-.5*(Math.cos(L*t)-1),easeInExpo:t=>0===t?0:Math.pow(2,10*(t-1)),easeOutExpo:t=>1===t?1:-Math.pow(2,-10*t)+1,easeInOutExpo:t=>tM(t)?t:t<.5?.5*Math.pow(2,10*(2*t-1)):.5*(-Math.pow(2,-10*(2*t-1))+2),easeInCirc:t=>t>=1?t:-(Math.sqrt(1-t*t)-1),easeOutCirc:t=>Math.sqrt(1-(t-=1)*t),easeInOutCirc:t=>(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),easeInElastic:t=>tM(t)?t:tS(t,.075,.3),easeOutElastic:t=>tM(t)?t:tT(t,.075,.3),easeInOutElastic:t=>tM(t)?t:t<.5?.5*tS(2*t,.1125,.45):.5+.5*tT(2*t-1,.1125,.45),easeInBack:t=>t*t*(2.70158*t-1.70158),easeOutBack:t=>(t-=1)*t*(2.70158*t+1.70158)+1,easeInOutBack(t){let e=1.70158;return(t/=.5)<1?.5*(t*t*(((e*=1.525)+1)*t-e)):.5*((t-=2)*t*(((e*=1.525)+1)*t+e)+2)},easeInBounce:t=>1-tC.easeOutBounce(1-t),easeOutBounce:t=>t<.36363636363636365?7.5625*t*t:t<.7272727272727273?7.5625*(t-=.5454545454545454)*t+.75:t<.9090909090909091?7.5625*(t-=.8181818181818182)*t+.9375:7.5625*(t-=.9545454545454546)*t+.984375,easeInOutBounce:t=>t<.5?.5*tC.easeInBounce(2*t):.5*tC.easeOutBounce(2*t-1)+.5};/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */function tO(t){return t+.5|0}let tD=(t,e,i)=>Math.max(Math.min(t,i),e);function tE(t){return tD(tO(2.55*t),0,255)}function tP(t){return tD(tO(255*t),0,255)}function tA(t){return tD(tO(t/2.55)/100,0,1)}function tI(t){return tD(tO(100*t),0,100)}let tL={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},t$=[..."0123456789ABCDEF"],tR=t=>t$[15&t],tF=t=>t$[(240&t)>>4]+t$[15&t],tN=t=>(240&t)>>4==(15&t),tz=t=>tN(t.r)&&tN(t.g)&&tN(t.b)&&tN(t.a),tj=(t,e)=>t<255?e(t):"",tV=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function tH(t,e,i){let n=e*Math.min(i,1-i),r=(e,r=(e+t/30)%12)=>i-n*Math.max(Math.min(r-3,9-r,1),-1);return[r(0),r(8),r(4)]}function tB(t,e,i){let n=(n,r=(n+t/60)%6)=>i-i*e*Math.max(Math.min(r,4-r,1),0);return[n(5),n(3),n(1)]}function tW(t,e,i){let n;let r=tH(t,1,.5);for(e+i>1&&(n=1/(e+i),e*=n,i*=n),n=0;n<3;n++)r[n]*=1-e-i,r[n]+=e;return r}function tU(t){let e,i,n;let r=t.r/255,s=t.g/255,a=t.b/255,o=Math.max(r,s,a),l=Math.min(r,s,a),h=(o+l)/2;return o!==l&&(n=o-l,i=h>.5?n/(2-o-l):n/(o+l),e=60*(e=r===o?(s-a)/n+(s<a?6:0):s===o?(a-r)/n+2:(r-s)/n+4)+.5),[0|e,i||0,h]}function tq(t,e,i,n){return(Array.isArray(e)?t(e[0],e[1],e[2]):t(e,i,n)).map(tP)}function tZ(t){return(t%360+360)%360}let tY={x:"dark",Z:"light",Y:"re",X:"blu",W:"gr",V:"medium",U:"slate",A:"ee",T:"ol",S:"or",B:"ra",C:"lateg",D:"ights",R:"in",Q:"turquois",E:"hi",P:"ro",O:"al",N:"le",M:"de",L:"yello",F:"en",K:"ch",G:"arks",H:"ea",I:"ightg",J:"wh"},tX={OiceXe:"f0f8ff",antiquewEte:"faebd7",aqua:"ffff",aquamarRe:"7fffd4",azuY:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"0",blanKedOmond:"ffebcd",Xe:"ff",XeviTet:"8a2be2",bPwn:"a52a2a",burlywood:"deb887",caMtXe:"5f9ea0",KartYuse:"7fff00",KocTate:"d2691e",cSO:"ff7f50",cSnflowerXe:"6495ed",cSnsilk:"fff8dc",crimson:"dc143c",cyan:"ffff",xXe:"8b",xcyan:"8b8b",xgTMnPd:"b8860b",xWay:"a9a9a9",xgYF:"6400",xgYy:"a9a9a9",xkhaki:"bdb76b",xmagFta:"8b008b",xTivegYF:"556b2f",xSange:"ff8c00",xScEd:"9932cc",xYd:"8b0000",xsOmon:"e9967a",xsHgYF:"8fbc8f",xUXe:"483d8b",xUWay:"2f4f4f",xUgYy:"2f4f4f",xQe:"ced1",xviTet:"9400d3",dAppRk:"ff1493",dApskyXe:"bfff",dimWay:"696969",dimgYy:"696969",dodgerXe:"1e90ff",fiYbrick:"b22222",flSOwEte:"fffaf0",foYstWAn:"228b22",fuKsia:"ff00ff",gaRsbSo:"dcdcdc",ghostwEte:"f8f8ff",gTd:"ffd700",gTMnPd:"daa520",Way:"808080",gYF:"8000",gYFLw:"adff2f",gYy:"808080",honeyMw:"f0fff0",hotpRk:"ff69b4",RdianYd:"cd5c5c",Rdigo:"4b0082",ivSy:"fffff0",khaki:"f0e68c",lavFMr:"e6e6fa",lavFMrXsh:"fff0f5",lawngYF:"7cfc00",NmoncEffon:"fffacd",ZXe:"add8e6",ZcSO:"f08080",Zcyan:"e0ffff",ZgTMnPdLw:"fafad2",ZWay:"d3d3d3",ZgYF:"90ee90",ZgYy:"d3d3d3",ZpRk:"ffb6c1",ZsOmon:"ffa07a",ZsHgYF:"20b2aa",ZskyXe:"87cefa",ZUWay:"778899",ZUgYy:"778899",ZstAlXe:"b0c4de",ZLw:"ffffe0",lime:"ff00",limegYF:"32cd32",lRF:"faf0e6",magFta:"ff00ff",maPon:"800000",VaquamarRe:"66cdaa",VXe:"cd",VScEd:"ba55d3",VpurpN:"9370db",VsHgYF:"3cb371",VUXe:"7b68ee",VsprRggYF:"fa9a",VQe:"48d1cc",VviTetYd:"c71585",midnightXe:"191970",mRtcYam:"f5fffa",mistyPse:"ffe4e1",moccasR:"ffe4b5",navajowEte:"ffdead",navy:"80",Tdlace:"fdf5e6",Tive:"808000",TivedBb:"6b8e23",Sange:"ffa500",SangeYd:"ff4500",ScEd:"da70d6",pOegTMnPd:"eee8aa",pOegYF:"98fb98",pOeQe:"afeeee",pOeviTetYd:"db7093",papayawEp:"ffefd5",pHKpuff:"ffdab9",peru:"cd853f",pRk:"ffc0cb",plum:"dda0dd",powMrXe:"b0e0e6",purpN:"800080",YbeccapurpN:"663399",Yd:"ff0000",Psybrown:"bc8f8f",PyOXe:"4169e1",saddNbPwn:"8b4513",sOmon:"fa8072",sandybPwn:"f4a460",sHgYF:"2e8b57",sHshell:"fff5ee",siFna:"a0522d",silver:"c0c0c0",skyXe:"87ceeb",UXe:"6a5acd",UWay:"708090",UgYy:"708090",snow:"fffafa",sprRggYF:"ff7f",stAlXe:"4682b4",tan:"d2b48c",teO:"8080",tEstN:"d8bfd8",tomato:"ff6347",Qe:"40e0d0",viTet:"ee82ee",JHt:"f5deb3",wEte:"ffffff",wEtesmoke:"f5f5f5",Lw:"ffff00",LwgYF:"9acd32"},tK=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,tJ=t=>t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055,tG=t=>t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4);function tQ(t,e,i){if(t){let n=tU(t);n[e]=Math.max(0,Math.min(n[e]+n[e]*i,0===e?360:1)),n=tq(tH,n,void 0,void 0),t.r=n[0],t.g=n[1],t.b=n[2]}}function t0(t,e){return t?Object.assign(e||{},t):t}function t1(t){var e={r:0,g:0,b:0,a:255};return Array.isArray(t)?t.length>=3&&(e={r:t[0],g:t[1],b:t[2],a:255},t.length>3&&(e.a=tP(t[3]))):(e=t0(t,{r:0,g:0,b:0,a:1})).a=tP(e.a),e}class t2{constructor(t){let e;if(t instanceof t2)return t;let i=typeof t;if("object"===i)e=t1(t);else if("string"===i){var r,s;s=t.length,"#"===t[0]&&(4===s||5===s?r={r:255&17*tL[t[1]],g:255&17*tL[t[2]],b:255&17*tL[t[3]],a:5===s?17*tL[t[4]]:255}:(7===s||9===s)&&(r={r:tL[t[1]]<<4|tL[t[2]],g:tL[t[3]]<<4|tL[t[4]],b:tL[t[5]]<<4|tL[t[6]],a:9===s?tL[t[7]]<<4|tL[t[8]]:255})),e=r||function(t){n||((n=function(){let t,e,i,n,r;let s={},a=Object.keys(tX),o=Object.keys(tY);for(t=0;t<a.length;t++){for(e=0,n=r=a[t];e<o.length;e++)i=o[e],r=r.replace(i,tY[i]);i=parseInt(tX[n],16),s[r]=[i>>16&255,i>>8&255,255&i]}return s}()).transparent=[0,0,0,0]);let e=n[t.toLowerCase()];return e&&{r:e[0],g:e[1],b:e[2],a:4===e.length?e[3]:255}}(t)||("r"===t.charAt(0)?function(t){let e,i,n;let r=tK.exec(t),s=255;if(r){if(r[7]!==e){let t=+r[7];s=r[8]?tE(t):tD(255*t,0,255)}return e=+r[1],i=+r[3],n=+r[5],{r:e=255&(r[2]?tE(e):tD(e,0,255)),g:i=255&(r[4]?tE(i):tD(i,0,255)),b:n=255&(r[6]?tE(n):tD(n,0,255)),a:s}}}(t):function(t){let e;let i=tV.exec(t),n=255;if(!i)return;i[5]!==e&&(n=i[6]?tE(+i[5]):tP(+i[5]));let r=tZ(+i[2]),s=+i[3]/100,a=+i[4]/100;return{r:(e="hwb"===i[1]?tq(tW,r,s,a):"hsv"===i[1]?tq(tB,r,s,a):tq(tH,r,s,a))[0],g:e[1],b:e[2],a:n}}(t))}this._rgb=e,this._valid=!!e}get valid(){return this._valid}get rgb(){var t=t0(this._rgb);return t&&(t.a=tA(t.a)),t}set rgb(t){this._rgb=t1(t)}rgbString(){var t;return this._valid?(t=this._rgb)&&(t.a<255?`rgba(${t.r}, ${t.g}, ${t.b}, ${tA(t.a)})`:`rgb(${t.r}, ${t.g}, ${t.b})`):void 0}hexString(){var t,e;return this._valid?(e=tz(t=this._rgb)?tR:tF,t?"#"+e(t.r)+e(t.g)+e(t.b)+tj(t.a,e):void 0):void 0}hslString(){return this._valid?function(t){if(!t)return;let e=tU(t),i=e[0],n=tI(e[1]),r=tI(e[2]);return t.a<255?`hsla(${i}, ${n}%, ${r}%, ${tA(t.a)})`:`hsl(${i}, ${n}%, ${r}%)`}(this._rgb):void 0}mix(t,e){if(t){let i;let n=this.rgb,r=t.rgb,s=e===i?.5:e,a=2*s-1,o=n.a-r.a,l=((a*o==-1?a:(a+o)/(1+a*o))+1)/2;i=1-l,n.r=255&l*n.r+i*r.r+.5,n.g=255&l*n.g+i*r.g+.5,n.b=255&l*n.b+i*r.b+.5,n.a=s*n.a+(1-s)*r.a,this.rgb=n}return this}interpolate(t,e){return t&&(this._rgb=function(t,e,i){let n=tG(tA(t.r)),r=tG(tA(t.g)),s=tG(tA(t.b));return{r:tP(tJ(n+i*(tG(tA(e.r))-n))),g:tP(tJ(r+i*(tG(tA(e.g))-r))),b:tP(tJ(s+i*(tG(tA(e.b))-s))),a:t.a+i*(e.a-t.a)}}(this._rgb,t._rgb,e)),this}clone(){return new t2(this.rgb)}alpha(t){return this._rgb.a=tP(t),this}clearer(t){let e=this._rgb;return e.a*=1-t,this}greyscale(){let t=this._rgb,e=tO(.3*t.r+.59*t.g+.11*t.b);return t.r=t.g=t.b=e,this}opaquer(t){let e=this._rgb;return e.a*=1+t,this}negate(){let t=this._rgb;return t.r=255-t.r,t.g=255-t.g,t.b=255-t.b,this}lighten(t){return tQ(this._rgb,2,t),this}darken(t){return tQ(this._rgb,2,-t),this}saturate(t){return tQ(this._rgb,1,t),this}desaturate(t){return tQ(this._rgb,1,-t),this}rotate(t){var e,i;return(i=tU(e=this._rgb))[0]=tZ(i[0]+t),i=tq(tH,i,void 0,void 0),e.r=i[0],e.g=i[1],e.b=i[2],this}}function t5(t){if(t&&"object"==typeof t){let e=t.toString();return"[object CanvasPattern]"===e||"[object CanvasGradient]"===e}return!1}function t3(t){return t5(t)?t:new t2(t)}function t4(t){return t5(t)?t:new t2(t).saturate(.5).darken(.1).hexString()}let t6=Object.create(null),t8=Object.create(null);function t7(t,e){if(!e)return t;let i=e.split(".");for(let e=0,n=i.length;e<n;++e){let n=i[e];t=t[n]||(t[n]=Object.create(null))}return t}function t9(t,e,i){return"string"==typeof e?w(t7(t,e),i):w(t7(t,""),e)}var et=new class{constructor(t){this.animation=void 0,this.backgroundColor="rgba(0,0,0,0.1)",this.borderColor="rgba(0,0,0,0.1)",this.color="#666",this.datasets={},this.devicePixelRatio=t=>t.chart.platform.getDevicePixelRatio(),this.elements={},this.events=["mousemove","mouseout","click","touchstart","touchmove"],this.font={family:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",size:12,style:"normal",lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(t,e)=>t4(e.backgroundColor),this.hoverBorderColor=(t,e)=>t4(e.borderColor),this.hoverColor=(t,e)=>t4(e.color),this.indexAxis="x",this.interaction={mode:"nearest",intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(t)}set(t,e){return t9(this,t,e)}get(t){return t7(this,t)}describe(t,e){return t9(t8,t,e)}override(t,e){return t9(t6,t,e)}route(t,e,i,n){let r=t7(this,t),s=t7(this,i),a="_"+e;Object.defineProperties(r,{[a]:{value:r[e],writable:!0},[e]:{enumerable:!0,get(){let t=this[a],e=s[n];return u(t)?Object.assign({},e,t):f(t,e)},set(t){this[a]=t}}})}}({_scriptable:t=>!t.startsWith("on"),_indexable:t=>"events"!==t,hover:{_fallback:"interaction"},interaction:{_scriptable:!1,_indexable:!1}});function ee(t){return!t||l(t.size)||l(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}function ei(t,e,i,n,r){let s=e[r];return s||(s=e[r]=t.measureText(r).width,i.push(r)),s>n&&(n=s),n}function en(t,e,i,n){let r,s,a,o,l;let u=(n=n||{}).data=n.data||{},c=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(u=n.data={},c=n.garbageCollect=[],n.font=e),t.save(),t.font=e;let d=0,f=i.length;for(r=0;r<f;r++)if(null!=(o=i[r])&&!0!==h(o))d=ei(t,u,c,d,o);else if(h(o))for(s=0,a=o.length;s<a;s++)null==(l=o[s])||h(l)||(d=ei(t,u,c,d,l));t.restore();let p=c.length/2;if(p>i.length){for(r=0;r<p;r++)delete u[c[r]];c.splice(0,p)}return d}function er(t,e,i){let n=t.currentDevicePixelRatio,r=0!==i?Math.max(i/2,.5):0;return Math.round((e-r)*n)/n+r}function es(t,e){(e=e||t.getContext("2d")).save(),e.resetTransform(),e.clearRect(0,0,t.width,t.height),e.restore()}function ea(t,e,i,n){eo(t,e,i,n,null)}function eo(t,e,i,n,r){let s,a,o,l,h,u;let c=e.pointStyle,d=e.rotation,f=e.radius,p=(d||0)*N;if(c&&"object"==typeof c&&("[object HTMLImageElement]"===(s=c.toString())||"[object HTMLCanvasElement]"===s)){t.save(),t.translate(i,n),t.rotate(p),t.drawImage(c,-c.width/2,-c.height/2,c.width,c.height),t.restore();return}if(!isNaN(f)&&!(f<=0)){switch(t.beginPath(),c){default:r?t.ellipse(i,n,r/2,f,0,0,$):t.arc(i,n,f,0,$),t.closePath();break;case"triangle":t.moveTo(i+Math.sin(p)*f,n-Math.cos(p)*f),p+=V,t.lineTo(i+Math.sin(p)*f,n-Math.cos(p)*f),p+=V,t.lineTo(i+Math.sin(p)*f,n-Math.cos(p)*f),t.closePath();break;case"rectRounded":h=.516*f,a=Math.cos(p+j)*(l=f-h),o=Math.sin(p+j)*l,t.arc(i-a,n-o,h,p-L,p-z),t.arc(i+o,n-a,h,p-z,p),t.arc(i+a,n+o,h,p,p+z),t.arc(i-o,n+a,h,p+z,p+L),t.closePath();break;case"rect":if(!d){l=Math.SQRT1_2*f,u=r?r/2:l,t.rect(i-u,n-l,2*u,2*l);break}p+=j;case"rectRot":a=Math.cos(p)*f,o=Math.sin(p)*f,t.moveTo(i-a,n-o),t.lineTo(i+o,n-a),t.lineTo(i+a,n+o),t.lineTo(i-o,n+a),t.closePath();break;case"crossRot":p+=j;case"cross":a=Math.cos(p)*f,o=Math.sin(p)*f,t.moveTo(i-a,n-o),t.lineTo(i+a,n+o),t.moveTo(i+o,n-a),t.lineTo(i-o,n+a);break;case"star":a=Math.cos(p)*f,o=Math.sin(p)*f,t.moveTo(i-a,n-o),t.lineTo(i+a,n+o),t.moveTo(i+o,n-a),t.lineTo(i-o,n+a),p+=j,a=Math.cos(p)*f,o=Math.sin(p)*f,t.moveTo(i-a,n-o),t.lineTo(i+a,n+o),t.moveTo(i+o,n-a),t.lineTo(i-o,n+a);break;case"line":a=r?r/2:Math.cos(p)*f,o=Math.sin(p)*f,t.moveTo(i-a,n-o),t.lineTo(i+a,n+o);break;case"dash":t.moveTo(i,n),t.lineTo(i+Math.cos(p)*f,n+Math.sin(p)*f)}t.fill(),e.borderWidth>0&&t.stroke()}}function el(t,e,i){return i=i||.5,!e||t&&t.x>e.left-i&&t.x<e.right+i&&t.y>e.top-i&&t.y<e.bottom+i}function eh(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()}function eu(t){t.restore()}function ec(t,e,i,n,r){if(!e)return t.lineTo(i.x,i.y);if("middle"===r){let n=(e.x+i.x)/2;t.lineTo(n,e.y),t.lineTo(n,i.y)}else"after"===r!=!!n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}function ed(t,e,i,n){if(!e)return t.lineTo(i.x,i.y);t.bezierCurveTo(n?e.cp1x:e.cp2x,n?e.cp1y:e.cp2y,n?i.cp2x:i.cp1x,n?i.cp2y:i.cp1y,i.x,i.y)}function ef(t,e,i,n,r,s={}){let a,o;let u=h(e)?e:[e],c=s.strokeWidth>0&&""!==s.strokeColor;for(t.save(),t.font=r.string,s.translation&&t.translate(s.translation[0],s.translation[1]),l(s.rotation)||t.rotate(s.rotation),s.color&&(t.fillStyle=s.color),s.textAlign&&(t.textAlign=s.textAlign),s.textBaseline&&(t.textBaseline=s.textBaseline),a=0;a<u.length;++a)o=u[a],c&&(s.strokeColor&&(t.strokeStyle=s.strokeColor),l(s.strokeWidth)||(t.lineWidth=s.strokeWidth),t.strokeText(o,i,n,s.maxWidth)),t.fillText(o,i,n,s.maxWidth),function(t,e,i,n,r){if(r.strikethrough||r.underline){let s=t.measureText(n),a=e-s.actualBoundingBoxLeft,o=e+s.actualBoundingBoxRight,l=i-s.actualBoundingBoxAscent,h=i+s.actualBoundingBoxDescent,u=r.strikethrough?(l+h)/2:h;t.strokeStyle=t.fillStyle,t.beginPath(),t.lineWidth=r.decorationWidth||2,t.moveTo(a,u),t.lineTo(o,u),t.stroke()}}(t,i,n,o,s),n+=r.lineHeight;t.restore()}function ep(t,e){let{x:i,y:n,w:r,h:s,radius:a}=e;t.arc(i+a.topLeft,n+a.topLeft,a.topLeft,-z,L,!0),t.lineTo(i,n+s-a.bottomLeft),t.arc(i+a.bottomLeft,n+s-a.bottomLeft,a.bottomLeft,L,z,!0),t.lineTo(i+r-a.bottomRight,n+s),t.arc(i+r-a.bottomRight,n+s-a.bottomRight,a.bottomRight,z,0,!0),t.lineTo(i+r,n+a.topRight),t.arc(i+r-a.topRight,n+a.topRight,a.topRight,0,-z,!0),t.lineTo(i+a.topLeft,n)}let em=new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),eg=new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/);function eb(t,e){let i=(""+t).match(em);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t}let ev=t=>+t||0;function ey(t,e){let i={},n=u(e),r=n?Object.keys(e):e,s=u(t)?n?i=>f(t[i],t[e[i]]):e=>t[e]:()=>t;for(let t of r)i[t]=ev(s(t));return i}function ex(t){return ey(t,{top:"y",right:"x",bottom:"y",left:"x"})}function e_(t){return ey(t,["topLeft","topRight","bottomLeft","bottomRight"])}function ew(t){let e=ex(t);return e.width=e.left+e.right,e.height=e.top+e.bottom,e}function ek(t,e){t=t||{},e=e||et.font;let i=f(t.size,e.size);"string"==typeof i&&(i=parseInt(i,10));let n=f(t.style,e.style);n&&!(""+n).match(eg)&&(console.warn('Invalid font style specified: "'+n+'"'),n="");let r={family:f(t.family,e.family),lineHeight:eb(f(t.lineHeight,e.lineHeight),i),size:i,style:n,weight:f(t.weight,e.weight),string:""};return r.string=ee(r),r}function eM(t,e,i,n){let r,s,a,o=!0;for(r=0,s=t.length;r<s;++r)if(void 0!==(a=t[r])&&(void 0!==e&&"function"==typeof a&&(a=a(e),o=!1),void 0!==i&&h(a)&&(a=a[i%a.length],o=!1),void 0!==a))return n&&!o&&(n.cacheable=!1),a}function eS(t,e,i){let{min:n,max:r}=t,s=m(e,(r-n)/2),a=(t,e)=>i&&0===t?0:t+e;return{min:a(n,-Math.abs(s)),max:a(r,s)}}function eT(t,e){return Object.assign(Object.create(t),e)}function eC(t,e=[""],i=t,n,r=()=>t[0]){E(n)||(n=e$("_fallback",t));let s={[Symbol.toStringTag]:"Object",_cacheable:!0,_scopes:t,_rootScopes:i,_fallback:n,_getTarget:r,override:r=>eC([r,...t],e,i,n)};return new Proxy(s,{deleteProperty:(e,i)=>(delete e[i],delete e._keys,delete t[0][i],!0),get:(i,n)=>eP(i,n,()=>(function(t,e,i,n){let r;for(let s of e)if(E(r=e$(eD(s,t),i)))return eE(t,r)?eI(i,n,t,r):r})(n,e,t,i)),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t._scopes[0],e),getPrototypeOf:()=>Reflect.getPrototypeOf(t[0]),has:(t,e)=>eR(t).includes(e),ownKeys:t=>eR(t),set(t,e,i){let n=t._storage||(t._storage=r());return t[e]=n[e]=i,delete t._keys,!0}})}function eO(t,e={scriptable:!0,indexable:!0}){let{_scriptable:i=e.scriptable,_indexable:n=e.indexable,_allKeys:r=e.allKeys}=t;return{allKeys:r,scriptable:i,indexable:n,isScriptable:P(i)?i:()=>i,isIndexable:P(n)?n:()=>n}}let eD=(t,e)=>t?t+D(e):e,eE=(t,e)=>u(e)&&"adapters"!==t&&(null===Object.getPrototypeOf(e)||e.constructor===Object);function eP(t,e,i){if(Object.prototype.hasOwnProperty.call(t,e))return t[e];let n=i();return t[e]=n,n}let eA=(t,e)=>!0===t?e:"string"==typeof t?C(e,t):void 0;function eI(t,e,i,n){var r;let s=e._rootScopes,a=P(r=e._fallback)?r(i,n):r,o=[...t,...s],l=new Set;l.add(n);let c=eL(l,o,i,a||i,n);return!(null===c||E(a)&&a!==i&&null===(c=eL(l,o,a,c,n)))&&eC(Array.from(l),[""],s,a,()=>(function(t,e,i){let n=t._getTarget();e in n||(n[e]={});let r=n[e];return h(r)&&u(i)?i:r})(e,i,n))}function eL(t,e,i,n,r){for(;i;)i=function(t,e,i,n,r){for(let a of e){let e=eA(i,a);if(e){var s;t.add(e);let a=P(s=e._fallback)?s(i,r):s;if(E(a)&&a!==i&&a!==n)return a}else if(!1===e&&E(n)&&i!==n)return null}return!1}(t,e,i,n,r);return i}function e$(t,e){for(let i of e){if(!i)continue;let e=i[t];if(E(e))return e}}function eR(t){let e=t._keys;return e||(e=t._keys=function(t){let e=new Set;for(let i of t)for(let t of Object.keys(i).filter(t=>!t.startsWith("_")))e.add(t);return Array.from(e)}(t._scopes)),e}function eF(t,e,i,n){let r,s,a;let{iScale:o}=t,{key:l="r"}=this._parsing,h=Array(n);for(r=0;r<n;++r)a=e[s=r+i],h[r]={r:o.parse(C(a,l),s)};return h}let eN=Number.EPSILON||1e-14,ez=(t,e)=>e<t.length&&!t[e].skip&&t[e],ej=t=>"x"===t?"y":"x";function eV(t,e,i,n){let r=t.skip?e:t,s=i.skip?e:i,a=tt(e,r),o=tt(s,e),l=a/(a+o),h=o/(a+o);l=isNaN(l)?0:l,h=isNaN(h)?0:h;let u=n*l,c=n*h;return{previous:{x:e.x-u*(s.x-r.x),y:e.y-u*(s.y-r.y)},next:{x:e.x+c*(s.x-r.x),y:e.y+c*(s.y-r.y)}}}function eH(t,e="x"){let i,n,r;let s=ej(e),a=t.length,o=Array(a).fill(0),l=Array(a),h=ez(t,0);for(i=0;i<a;++i)if(n=r,r=h,h=ez(t,i+1),r){if(h){let t=h[e]-r[e];o[i]=0!==t?(h[s]-r[s])/t:0}l[i]=n?h?B(o[i-1])!==B(o[i])?0:(o[i-1]+o[i])/2:o[i-1]:o[i]}!function(t,e,i){let n,r,s,a,o;let l=t.length,h=ez(t,0);for(let u=0;u<l-1;++u)if(o=h,h=ez(t,u+1),o&&h){if(Z(e[u],0,eN)){i[u]=i[u+1]=0;continue}(a=Math.pow(n=i[u]/e[u],2)+Math.pow(r=i[u+1]/e[u],2))<=9||(s=3/Math.sqrt(a),i[u]=n*s*e[u],i[u+1]=r*s*e[u])}}(t,o,l),function(t,e,i="x"){let n,r,s;let a=ej(i),o=t.length,l=ez(t,0);for(let h=0;h<o;++h){if(r=s,s=l,l=ez(t,h+1),!s)continue;let o=s[i],u=s[a];r&&(n=(o-r[i])/3,s[`cp1${i}`]=o-n,s[`cp1${a}`]=u-n*e[h]),l&&(n=(l[i]-o)/3,s[`cp2${i}`]=o+n,s[`cp2${a}`]=u+n*e[h])}}(t,l,e)}function eB(t,e,i){return Math.max(Math.min(t,i),e)}function eW(t,e,i,n,r){let s,a,o,l;if(e.spanGaps&&(t=t.filter(t=>!t.skip)),"monotone"===e.cubicInterpolationMode)eH(t,r);else{let i=n?t[t.length-1]:t[0];for(s=0,a=t.length;s<a;++s)l=eV(i,o=t[s],t[Math.min(s+1,a-(n?0:1))%a],e.tension),o.cp1x=l.previous.x,o.cp1y=l.previous.y,o.cp2x=l.next.x,o.cp2y=l.next.y,i=o}e.capBezierPoints&&function(t,e){let i,n,r,s,a;let o=el(t[0],e);for(i=0,n=t.length;i<n;++i)a=s,s=o,o=i<n-1&&el(t[i+1],e),s&&(r=t[i],a&&(r.cp1x=eB(r.cp1x,e.left,e.right),r.cp1y=eB(r.cp1y,e.top,e.bottom)),o&&(r.cp2x=eB(r.cp2x,e.left,e.right),r.cp2y=eB(r.cp2y,e.top,e.bottom)))}(t,i)}function eU(){return"undefined"!=typeof window&&"undefined"!=typeof document}function eq(t){let e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e}function eZ(t,e,i){let n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}let eY=t=>window.getComputedStyle(t,null);function eX(t,e){return eY(t).getPropertyValue(e)}let eK=["top","right","bottom","left"];function eJ(t,e,i){let n={};i=i?"-"+i:"";for(let r=0;r<4;r++){let s=eK[r];n[s]=parseFloat(t[e+"-"+s+i])||0}return n.width=n.left+n.right,n.height=n.top+n.bottom,n}let eG=(t,e,i)=>(t>0||e>0)&&(!i||!i.shadowRoot);function eQ(t,e){if("native"in t)return t;let{canvas:i,currentDevicePixelRatio:n}=e,r=eY(i),s="border-box"===r.boxSizing,a=eJ(r,"padding"),o=eJ(r,"border","width"),{x:l,y:h,box:u}=function(t,e){let i,n;let r=t.touches,s=r&&r.length?r[0]:t,{offsetX:a,offsetY:o}=s,l=!1;if(eG(a,o,t.target))i=a,n=o;else{let t=e.getBoundingClientRect();i=s.clientX-t.left,n=s.clientY-t.top,l=!0}return{x:i,y:n,box:l}}(t,i),c=a.left+(u&&o.left),d=a.top+(u&&o.top),{width:f,height:p}=e;return s&&(f-=a.width+o.width,p-=a.height+o.height),{x:Math.round((l-c)/f*i.width/n),y:Math.round((h-d)/p*i.height/n)}}let e0=t=>Math.round(10*t)/10;function e1(t,e,i,n){let r=eY(t),s=eJ(r,"margin"),a=eZ(r.maxWidth,t,"clientWidth")||F,o=eZ(r.maxHeight,t,"clientHeight")||F,l=function(t,e,i){let n,r;if(void 0===e||void 0===i){let s=eq(t);if(s){let t=s.getBoundingClientRect(),a=eY(s),o=eJ(a,"border","width"),l=eJ(a,"padding");e=t.width-l.width-o.width,i=t.height-l.height-o.height,n=eZ(a.maxWidth,s,"clientWidth"),r=eZ(a.maxHeight,s,"clientHeight")}else e=t.clientWidth,i=t.clientHeight}return{width:e,height:i,maxWidth:n||F,maxHeight:r||F}}(t,e,i),{width:h,height:u}=l;if("content-box"===r.boxSizing){let t=eJ(r,"border","width"),e=eJ(r,"padding");h-=e.width+t.width,u-=e.height+t.height}return h=Math.max(0,h-s.width),u=Math.max(0,n?Math.floor(h/n):u-s.height),h=e0(Math.min(h,a,l.maxWidth)),u=e0(Math.min(u,o,l.maxHeight)),h&&!u&&(u=e0(h/2)),{width:h,height:u}}function e2(t,e,i){let n=e||1,r=Math.floor(t.height*n),s=Math.floor(t.width*n);t.height=r/n,t.width=s/n;let a=t.canvas;return a.style&&(i||!a.style.height&&!a.style.width)&&(a.style.height=`${t.height}px`,a.style.width=`${t.width}px`),(t.currentDevicePixelRatio!==n||a.height!==r||a.width!==s)&&(t.currentDevicePixelRatio=n,a.height=r,a.width=s,t.ctx.setTransform(n,0,0,n,0,0),!0)}let e5=function(){let t=!1;try{let e={get passive(){return t=!0,!1}};window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}return t}();function e3(t,e){let i=eX(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?+n[1]:void 0}function e4(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:t.y+i*(e.y-t.y)}}function e6(t,e,i,n){return{x:t.x+i*(e.x-t.x),y:"middle"===n?i<.5?t.y:e.y:"after"===n?i<1?t.y:e.y:i>0?e.y:t.y}}function e8(t,e,i,n){let r={x:t.cp2x,y:t.cp2y},s={x:e.cp1x,y:e.cp1y},a=e4(t,r,i),o=e4(r,s,i),l=e4(s,e,i),h=e4(a,o,i),u=e4(o,l,i);return e4(h,u,i)}let e7=new Map;function e9(t,e,i){return(function(t,e){e=e||{};let i=t+JSON.stringify(e),n=e7.get(i);return n||(n=new Intl.NumberFormat(t,e),e7.set(i,n)),n})(e,i).format(t)}function it(t,e,i){var n;return t?(n=i,{x:t=>e+e+n-t,setWidth(t){n=t},textAlign:t=>"center"===t?t:"right"===t?"left":"right",xPlus:(t,e)=>t-e,leftForLtr:(t,e)=>t-e}):{x:t=>t,setWidth(t){},textAlign:t=>t,xPlus:(t,e)=>t+e,leftForLtr:(t,e)=>t}}function ie(t,e){let i,n;("ltr"===e||"rtl"===e)&&(n=[(i=t.canvas.style).getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=n)}function ii(t,e){void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}function ir(t){return"angle"===t?{between:tn,compare:te,normalize:ti}:{between:ta,compare:(t,e)=>t-e,normalize:t=>t}}function is({start:t,end:e,count:i,loop:n,style:r}){return{start:t%i,end:e%i,loop:n&&(e-t+1)%i==0,style:r}}function ia(t,e,i){let n,r,s;if(!i)return[t];let{property:a,start:o,end:l}=i,h=e.length,{compare:u,between:c,normalize:d}=ir(a),{start:f,end:p,loop:m,style:g}=function(t,e,i){let n;let{property:r,start:s,end:a}=i,{between:o,normalize:l}=ir(r),h=e.length,{start:u,end:c,loop:d}=t;if(d){for(u+=h,c+=h,n=0;n<h&&o(l(e[u%h][r]),s,a);++n)u--,c--;u%=h,c%=h}return c<u&&(c+=h),{start:u,end:c,loop:d,style:t.style}}(t,e,i),b=[],v=!1,y=null,x=()=>c(o,s,n)&&0!==u(o,s),_=()=>0===u(l,n)||c(l,s,n),w=()=>v||x(),k=()=>!v||_();for(let t=f,i=f;t<=p;++t)(r=e[t%h]).skip||(n=d(r[a]))===s||(v=c(n,o,l),null===y&&w()&&(y=0===u(n,o)?t:i),null!==y&&k()&&(b.push(is({start:y,end:t,loop:m,count:h,style:g})),y=null),i=t,s=n);return null!==y&&b.push(is({start:y,end:p,loop:m,count:h,style:g})),b}function io(t,e){let i=[],n=t.segments;for(let r=0;r<n.length;r++){let s=ia(n[r],t.points,e);s.length&&i.push(...s)}return i}function il(t,e){let i=t.points,n=t.options.spanGaps,r=i.length;if(!r)return[];let s=!!t._loop,{start:a,end:o}=function(t,e,i,n){let r=0,s=e-1;if(i&&!n)for(;r<e&&!t[r].skip;)r++;for(;r<e&&t[r].skip;)r++;for(r%=e,i&&(s+=r);s>r&&t[s%e].skip;)s--;return{start:r,end:s%=e}}(i,r,s,n);if(!0===n)return ih(t,[{start:a,end:o,loop:s}],i,e);let l=o<a?o+r:o,h=!!t._fullLoop&&0===a&&o===r-1;return ih(t,function(t,e,i,n){let r;let s=t.length,a=[],o=e,l=t[e];for(r=e+1;r<=i;++r){let i=t[r%s];i.skip||i.stop?l.skip||(n=!1,a.push({start:e%s,end:(r-1)%s,loop:n}),e=o=i.stop?r:null):(o=r,l.skip&&(e=r)),l=i}return null!==o&&a.push({start:e%s,end:o%s,loop:n}),a}(i,a,l,h),i,e)}function ih(t,e,i,n){return n&&n.setContext&&i?function(t,e,i,n){let r=t._chart.getContext(),s=iu(t.options),{_datasetIndex:a,options:{spanGaps:o}}=t,l=i.length,h=[],u=s,c=e[0].start,d=c;function f(t,e,n,r){let s=o?-1:1;if(t!==e){for(t+=l;i[t%l].skip;)t-=s;for(;i[e%l].skip;)e+=s;t%l!=e%l&&(h.push({start:t%l,end:e%l,loop:n,style:r}),u=r,c=e%l)}}for(let t of e){let e;let s=i[(c=o?c:t.start)%l];for(d=c+1;d<=t.end;d++){var p,m;let o=i[d%l];p=e=iu(n.setContext(eT(r,{type:"segment",p0:s,p1:o,p0DataIndex:(d-1)%l,p1DataIndex:d%l,datasetIndex:a}))),(m=u)&&JSON.stringify(p)!==JSON.stringify(m)&&f(c,d-1,t.loop,u),s=o,u=e}c<d-1&&f(c,d-1,t.loop,u)}return h}(t,e,i,n):e}function iu(t){return{backgroundColor:t.backgroundColor,borderCapStyle:t.borderCapStyle,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderJoinStyle:t.borderJoinStyle,borderWidth:t.borderWidth,borderColor:t.borderColor}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],htqeP:[function(t,e,i){/*!
 * @license
 * chartjs-chart-financial
 * http://chartjs.org/
 * Version: 0.1.1
 *
 * Copyright 2021 Chart.js Contributors
 * Released under the MIT license
 * https://github.com/chartjs/chartjs-chart-financial/blob/master/LICENSE.md
 */var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i),n.export(i,"CandlestickController",()=>m),n.export(i,"CandlestickElement",()=>p),n.export(i,"OhlcController",()=>d),n.export(i,"OhlcElement",()=>u);var r=t("chart.js"),s=t("chart.js/helpers");let a=r.Chart.defaults;function o(t,e,i,n){let r=null===e,s=null===i,a=!!t&&(!r||!s)&&/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param {Rectangle} bar the bar
 * @param {boolean} [useFinalPosition]
 * @return {object} bounds of the bar
 * @private
 */function(t,e){let i,n,r,s,a;let{x:o,y:l,base:h,width:u,height:c}=t.getProps(["x","low","high","width","height"],e);return t.horizontal?(a=c/2,i=Math.min(o,h),n=Math.max(o,h),r=l-a,s=l+a):(i=o-(a=u/2),n=o+a,r=Math.min(l,h),s=Math.max(l,h)),{left:i,top:r,right:n,bottom:s}}(t,n);return a&&(r||e>=a.left&&e<=a.right)&&(s||i>=a.top&&i<=a.bottom)}a.elements.financial={color:{up:"rgba(80, 160, 115, 1)",down:"rgba(215, 85, 65, 1)",unchanged:"rgba(90, 90, 90, 1)"}};class l extends r.Element{height(){return this.base-this.y}inRange(t,e,i){return o(this,t,e,i)}inXRange(t,e){return o(this,t,null,e)}inYRange(t,e){return o(this,null,t,e)}getRange(t){return"x"===t?this.width/2:this.height/2}getCenterPoint(t){let{x:e,low:i,high:n}=this.getProps(["x","low","high"],t);return{x:e,y:(n+i)/2}}tooltipPosition(t){let{x:e,open:i,close:n}=this.getProps(["x","open","close"],t);return{x:e,y:(i+n)/2}}}let h=r.Chart.defaults;class u extends l{draw(t){let{x:e,open:i,high:n,low:r,close:a}=this,o=(0,s.valueOrDefault)(this.armLengthRatio,h.elements.ohlc.armLengthRatio),l=(0,s.valueOrDefault)(this.armLength,h.elements.ohlc.armLength);null===l&&// This behavior is caused by extending controller.financial, which extends controller.bar
// barPercentage and categoryPercentage are now set to 1.0 (see controller.ohlc)
// and armLengthRatio is multipled by 0.5,
// so that when armLengthRatio=1.0, the arms from neighbour ohcl touch,
// and when armLengthRatio=0.0, ohcl are just vertical lines.
(l=this.width*o*.5),a<i?t.strokeStyle=(0,s.valueOrDefault)(this.color?this.color.up:void 0,h.elements.ohlc.color.up):a>i?t.strokeStyle=(0,s.valueOrDefault)(this.color?this.color.down:void 0,h.elements.ohlc.color.down):t.strokeStyle=(0,s.valueOrDefault)(this.color?this.color.unchanged:void 0,h.elements.ohlc.color.unchanged),t.lineWidth=(0,s.valueOrDefault)(this.lineWidth,h.elements.ohlc.lineWidth),t.beginPath(),t.moveTo(e,n),t.lineTo(e,r),t.moveTo(e-l,i),t.lineTo(e,i),t.moveTo(e+l,a),t.lineTo(e,a),t.stroke()}}u.id="ohlc",u.defaults=(0,s.merge)({},[h.elements.financial,{lineWidth:2,armLength:null,armLengthRatio:.8}]);/**
 * This class is based off controller.bar.js from the upstream Chart.js library
 */class c extends r.BarController{getLabelAndValue(t){let e=this.getParsed(t),i=this._cachedMeta.iScale.axis,{o:n,h:r,l:s,c:a}=e,o=`O: ${n}  H: ${r}  L: ${s}  C: ${a}`;return{label:`${this._cachedMeta.iScale.getLabelForValue(e[i])}`,value:o}}getAllParsedValues(){let t=this._cachedMeta,e=t.iScale.axis,i=t._parsed,n=[];for(let t=0;t<i.length;++t)n.push(i[t][e]);return n}/**
	 * Implement this ourselves since it doesn't handle high and low values
	 * https://github.com/chartjs/Chart.js/issues/7328
	 * @protected
	 */getMinMax(t){let e=this._cachedMeta,i=e._parsed,n=e.iScale.axis;if(i.length<2)return{min:0,max:1};if(t===e.iScale)return{min:i[0][n],max:i[i.length-1][n]};let r=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;for(let t=0;t<i.length;t++){let e=i[t];r=Math.min(r,e.l),s=Math.max(s,e.h)}return{min:r,max:s}}_getRuler(){let t=this.options,e=this._cachedMeta,i=e.iScale,n=i.axis,r=[];for(let t=0;t<e.data.length;++t)r.push(i.getPixelForValue(this.getParsed(t)[n]));let s=t.barThickness,a=/**
 * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
 * @private
 */function(t,e){let i,n,r,s,a=t._length;for(r=1,s=e.length;r<s;++r)a=Math.min(a,Math.abs(e[r]-e[r-1]));for(r=0,s=t.ticks.length;r<s;++r)n=t.getPixelForTick(r),a=r>0?Math.min(a,Math.abs(n-i)):a,i=n;return a}(i,r);return{min:a,pixels:r,start:i._startPixel,end:i._endPixel,stackCount:this._getStackCount(),scale:i,ratio:s?1:t.categoryPercentage*t.barPercentage}}/**
	 * @protected
	 */calculateElementProperties(t,e,i,n){let r=this._cachedMeta.vScale,s=r.getBasePixel(),a=this._calculateBarIndexPixels(t,e,n),o=this.chart.data.datasets[this.index].data[t],l=r.getPixelForValue(o.o),h=r.getPixelForValue(o.h),u=r.getPixelForValue(o.l),c=r.getPixelForValue(o.c);return{base:i?s:u,x:a.center,y:(u+h)/2,width:a.size,open:l,high:h,low:u,close:c}}draw(){let t=this.chart,e=this._cachedMeta.data;(0,s.clipArea)(t.ctx,t.chartArea);for(let t=0;t<e.length;++t)e[t].draw(this._ctx);(0,s.unclipArea)(t.ctx)}}c.overrides={label:"",parsing:!1,hover:{mode:"label"},datasets:{categoryPercentage:.8,barPercentage:.9,animation:{numbers:{type:"number",properties:["x","y","base","width","open","high","low","close"]}}},scales:{x:{type:"timeseries",offset:!0,ticks:{major:{enabled:!0},fontStyle:t=>t.tick.major?"bold":void 0,source:"data",maxRotation:0,autoSkip:!0,autoSkipPadding:75,sampleSize:100},afterBuildTicks:t=>{let e=window&&window.luxon&&window.luxon.DateTime;if(!e)return;let i=t._majorUnit,n=t.ticks,r=n[0];if(!r)return;let s=e.fromMillis(r.value);"minute"===i&&0===s.second||"hour"===i&&0===s.minute||"day"===i&&9===s.hour||"month"===i&&s.day<=3&&1===s.weekday||"year"===i&&1===s.month?r.major=!0:r.major=!1;let a=s.get(i);for(let t=1;t<n.length;t++){let r=n[t];s=e.fromMillis(r.value);let o=s.get(i);r.major=o!==a,a=o}t.ticks=n}},y:{type:"linear"}},plugins:{tooltip:{intersect:!1,mode:"index",callbacks:{label(t){let e=t.parsed;if(!(0,s.isNullOrUndef)(e.y))return(0,r.defaults).plugins.tooltip.callbacks.label(t);let{o:i,h:n,l:a,c:o}=e;return`O: ${i}  H: ${n}  L: ${a}  C: ${o}`}}}}};class d extends c{updateElements(t,e,i,n){let r=this.getDataset(),s=this._ruler||this._getRuler(),a=this.resolveDataElementOptions(e,n),o=this.getSharedOptions(a),l=this.includeOptions(n,o);for(let e=0;e<i;e++){let i=o||this.resolveDataElementOptions(e,n),a=this.calculateElementProperties(e,s,"reset"===n,i),h={...a,datasetLabel:r.label||"",lineWidth:r.lineWidth,armLength:r.armLength,armLengthRatio:r.armLengthRatio,color:r.color};l&&(h.options=i),this.updateElement(t[e],e,h,n)}}}d.id="ohlc",d.defaults=(0,s.merge)({dataElementType:u.id,datasets:{barPercentage:1,categoryPercentage:1}},r.Chart.defaults.financial);let f=r.Chart.defaults;class p extends l{draw(t){let e;let{x:i,open:n,high:r,low:a,close:o}=this,l=this.borderColor;"string"==typeof l&&(l={up:l,down:l,unchanged:l}),o<n?(e=(0,s.valueOrDefault)(l?l.up:void 0,f.elements.candlestick.borderColor),t.fillStyle=(0,s.valueOrDefault)(this.color?this.color.up:void 0,f.elements.candlestick.color.up)):o>n?(e=(0,s.valueOrDefault)(l?l.down:void 0,f.elements.candlestick.borderColor),t.fillStyle=(0,s.valueOrDefault)(this.color?this.color.down:void 0,f.elements.candlestick.color.down)):(e=(0,s.valueOrDefault)(l?l.unchanged:void 0,f.elements.candlestick.borderColor),t.fillStyle=(0,s.valueOrDefault)(this.color?this.color.unchanged:void 0,f.elements.candlestick.color.unchanged)),t.lineWidth=(0,s.valueOrDefault)(this.borderWidth,f.elements.candlestick.borderWidth),t.strokeStyle=(0,s.valueOrDefault)(e,f.elements.candlestick.borderColor),t.beginPath(),t.moveTo(i,r),t.lineTo(i,Math.min(n,o)),t.moveTo(i,a),t.lineTo(i,Math.max(n,o)),t.stroke(),t.fillRect(i-this.width/2,o,this.width,n-o),t.strokeRect(i-this.width/2,o,this.width,n-o),t.closePath()}}p.id="candlestick",p.defaults=(0,s.merge)({},[f.elements.financial,{borderColor:f.elements.financial.color.unchanged,borderWidth:1}]);class m extends c{updateElements(t,e,i,n){let r=this.getDataset(),s=this._ruler||this._getRuler(),a=this.resolveDataElementOptions(e,n),o=this.getSharedOptions(a),l=this.includeOptions(n,o);this.updateSharedOptions(o,n,a);for(let a=e;a<i;a++){let e=o||this.resolveDataElementOptions(a,n),i=this.calculateElementProperties(a,s,"reset"===n,e),h={...i,datasetLabel:r.label||"",// label: '', // to get label value please use dataset.data[index].label
// Appearance
color:r.color,borderColor:r.borderColor,borderWidth:r.borderWidth};l&&(h.options=e),this.updateElement(t[a],a,h,n)}}}m.id="candlestick",m.defaults=(0,s.merge)({dataElementType:p.id},r.Chart.defaults.financial)},{"chart.js":"l4dY5","chart.js/helpers":"11Eiz","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"11Eiz":[function(t,e,i){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i);var r=t("../dist/helpers.mjs");n.exportAll(r,i)},{"../dist/helpers.mjs":"gFZhr","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],gFZhr:[function(t,e,i){/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i),n.export(i,"HALF_PI",()=>r.H),n.export(i,"INFINITY",()=>r.b1),n.export(i,"PI",()=>r.P),n.export(i,"PITAU",()=>r.b0),n.export(i,"QUARTER_PI",()=>r.b3),n.export(i,"RAD_PER_DEG",()=>r.b2),n.export(i,"TAU",()=>r.T),n.export(i,"TWO_THIRDS_PI",()=>r.b4),n.export(i,"_addGrace",()=>r.D),n.export(i,"_alignPixel",()=>r.J),n.export(i,"_alignStartEnd",()=>r.S),n.export(i,"_angleBetween",()=>r.p),n.export(i,"_angleDiff",()=>r.b5),n.export(i,"_arrayUnique",()=>r._),n.export(i,"_attachContext",()=>r.a9),n.export(i,"_bezierCurveTo",()=>r.at),n.export(i,"_bezierInterpolation",()=>r.aq),n.export(i,"_boundSegment",()=>r.ay),n.export(i,"_boundSegments",()=>r.ao),n.export(i,"_capitalize",()=>r.W),n.export(i,"_computeSegments",()=>r.an),n.export(i,"_createResolver",()=>r.aa),n.export(i,"_decimalPlaces",()=>r.aL),n.export(i,"_deprecated",()=>r.aU),n.export(i,"_descriptors",()=>r.ab),n.export(i,"_elementsEqual",()=>r.ai),n.export(i,"_factorize",()=>r.A),n.export(i,"_filterBetween",()=>r.aN),n.export(i,"_getParentNode",()=>r.a2),n.export(i,"_getStartAndCountOfVisiblePoints",()=>r.q),n.export(i,"_int16Range",()=>r.I),n.export(i,"_isBetween",()=>r.ak),n.export(i,"_isClickEvent",()=>r.aj),n.export(i,"_isDomSupported",()=>r.a6),n.export(i,"_isPointInArea",()=>r.$),n.export(i,"_limitValue",()=>r.E),n.export(i,"_longestText",()=>r.aM),n.export(i,"_lookup",()=>r.aO),n.export(i,"_lookupByKey",()=>r.Z),n.export(i,"_measureText",()=>r.G),n.export(i,"_merger",()=>r.aS),n.export(i,"_mergerIf",()=>r.aT),n.export(i,"_normalizeAngle",()=>r.az),n.export(i,"_parseObjectDataRadialScale",()=>r.y),n.export(i,"_pointInLine",()=>r.ar),n.export(i,"_readValueToProps",()=>r.al),n.export(i,"_rlookupByKey",()=>r.Y),n.export(i,"_scaleRangesChanged",()=>r.w),n.export(i,"_setMinAndMaxByKey",()=>r.aH),n.export(i,"_splitKey",()=>r.aV),n.export(i,"_steppedInterpolation",()=>r.ap),n.export(i,"_steppedLineTo",()=>r.as),n.export(i,"_textX",()=>r.aC),n.export(i,"_toLeftRightCenter",()=>r.R),n.export(i,"_updateBezierControlPoints",()=>r.am),n.export(i,"addRoundedRectPath",()=>r.av),n.export(i,"almostEquals",()=>r.aK),n.export(i,"almostWhole",()=>r.aJ),n.export(i,"callback",()=>r.C),n.export(i,"clearCanvas",()=>r.ag),n.export(i,"clipArea",()=>r.L),n.export(i,"clone",()=>r.aR),n.export(i,"color",()=>r.c),n.export(i,"createContext",()=>r.h),n.export(i,"debounce",()=>r.ae),n.export(i,"defined",()=>r.j),n.export(i,"distanceBetweenPoints",()=>r.aG),n.export(i,"drawPoint",()=>r.au),n.export(i,"drawPointLegend",()=>r.aE),n.export(i,"each",()=>r.Q),n.export(i,"easingEffects",()=>r.e),n.export(i,"finiteOrDefault",()=>r.B),n.export(i,"fontString",()=>r.a_),n.export(i,"formatNumber",()=>r.o),n.export(i,"getAngleFromPoint",()=>r.a0),n.export(i,"getHoverColor",()=>r.aQ),n.export(i,"getMaximumSize",()=>r.a1),n.export(i,"getRelativePosition",()=>r.X),n.export(i,"getRtlAdapter",()=>r.aA),n.export(i,"getStyle",()=>r.aZ),n.export(i,"isArray",()=>r.b),n.export(i,"isFinite",()=>r.g),n.export(i,"isFunction",()=>r.a8),n.export(i,"isNullOrUndef",()=>r.k),n.export(i,"isNumber",()=>r.x),n.export(i,"isObject",()=>r.i),n.export(i,"isPatternOrGradient",()=>r.aP),n.export(i,"listenArrayEvents",()=>r.l),n.export(i,"log10",()=>r.z),n.export(i,"merge",()=>r.V),n.export(i,"mergeIf",()=>r.ac),n.export(i,"niceNum",()=>r.aI),n.export(i,"noop",()=>r.aF),n.export(i,"overrideTextDirection",()=>r.aB),n.export(i,"readUsedSize",()=>r.a3),n.export(i,"renderText",()=>r.M),n.export(i,"requestAnimFrame",()=>r.r),n.export(i,"resolve",()=>r.a),n.export(i,"resolveObjectKey",()=>r.f),n.export(i,"restoreTextDirection",()=>r.aD),n.export(i,"retinaScale",()=>r.af),n.export(i,"setsEqual",()=>r.ah),n.export(i,"sign",()=>r.s),n.export(i,"splineCurve",()=>r.aX),n.export(i,"splineCurveMonotone",()=>r.aY),n.export(i,"supportsEventListenerOptions",()=>r.a5),n.export(i,"throttled",()=>r.a4),n.export(i,"toDegrees",()=>r.F),n.export(i,"toDimension",()=>r.n),n.export(i,"toFont",()=>r.O),n.export(i,"toFontString",()=>r.aW),n.export(i,"toLineHeight",()=>r.a$),n.export(i,"toPadding",()=>r.K),n.export(i,"toPercentage",()=>r.m),n.export(i,"toRadians",()=>r.t),n.export(i,"toTRBL",()=>r.aw),n.export(i,"toTRBLCorners",()=>r.ax),n.export(i,"uid",()=>r.ad),n.export(i,"unclipArea",()=>r.N),n.export(i,"unlistenArrayEvents",()=>r.u),n.export(i,"valueOrDefault",()=>r.v);var r=t("./chunks/helpers.segment.mjs")},{"./chunks/helpers.segment.mjs":"iqGi7","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],jk3UW:[function(t,e,i){/*!
 * chartjs-adapter-luxon v1.3.1
 * https://www.chartjs.org
 * (c) 2023 chartjs-adapter-luxon Contributors
 * Released under the MIT license
 */var n=t("chart.js"),r=t("luxon");let s={datetime:r.DateTime.DATETIME_MED_WITH_SECONDS,millisecond:"h:mm:ss.SSS a",second:r.DateTime.TIME_WITH_SECONDS,minute:r.DateTime.TIME_SIMPLE,hour:{hour:"numeric"},day:{day:"numeric",month:"short"},week:"DD",month:{month:"short",year:"numeric"},quarter:"'Q'q - yyyy",year:{year:"numeric"}};(0,n._adapters)._date.override({_id:"luxon",/**
   * @private
   */_create:function(t){return(0,r.DateTime).fromMillis(t,this.options)},init(t){this.options.locale||(this.options.locale=t.locale)},formats:function(){return s},parse:function(t,e){let i=this.options,n=typeof t;return null===t||"undefined"===n?null:("number"===n?t=this._create(t):"string"===n?t="string"==typeof e?(0,r.DateTime).fromFormat(t,e,i):(0,r.DateTime).fromISO(t,i):t instanceof Date?t=(0,r.DateTime).fromJSDate(t,i):"object"!==n||t instanceof r.DateTime||(t=(0,r.DateTime).fromObject(t,i)),t.isValid?t.valueOf():null)},format:function(t,e){let i=this._create(t);return"string"==typeof e?i.toFormat(e):i.toLocaleString(e)},add:function(t,e,i){let n={};return n[i]=e,this._create(t).plus(n).valueOf()},diff:function(t,e,i){return this._create(t).diff(this._create(e)).as(i).valueOf()},startOf:function(t,e,i){if("isoWeek"===e){i=Math.trunc(Math.min(Math.max(0,i),6));let e=this._create(t);return e.minus({days:(e.weekday-i+7)%7}).startOf("day").valueOf()}return e?this._create(t).startOf(e).valueOf():t},endOf:function(t,e){return this._create(t).endOf(e).valueOf()}})},{"chart.js":"l4dY5",luxon:"hnmZj"}],hnmZj:[function(t,e,i){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(n.key),n)}}function r(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function a(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,l(t,e)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e,i){return(h=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}()?function(t,e,i){var n=[null];n.push.apply(n,e);var r=new(Function.bind.apply(t,n));return i&&l(r,i.prototype),r}:Reflect.construct.bind()).apply(null,arguments)}function u(t){var e="function"==typeof Map?new Map:void 0;return(u=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return h(t,arguments,o(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),l(i,t)})(t)}function c(t,e){if(null==t)return{};var i,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)i=s[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=Array(e);i<e;i++)n[i]=t[i];return n}function f(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,e){if(t){if("string"==typeof t)return d(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if("Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return d(t,e)}}(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(i,"__esModule",{value:!0});// these aren't really private, but nor are they really useful to document
/**
 * @private
 */var p=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return a(e,t),e}(/*#__PURE__*/u(Error)),m=/*#__PURE__*/function(t){function e(e){return t.call(this,"Invalid DateTime: "+e.toMessage())||this}return a(e,t),e}(p),g=/*#__PURE__*/function(t){function e(e){return t.call(this,"Invalid Interval: "+e.toMessage())||this}return a(e,t),e}(p),b=/*#__PURE__*/function(t){function e(e){return t.call(this,"Invalid Duration: "+e.toMessage())||this}return a(e,t),e}(p),v=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return a(e,t),e}(p),y=/*#__PURE__*/function(t){function e(e){return t.call(this,"Invalid unit "+e)||this}return a(e,t),e}(p),x=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}return a(e,t),e}(p),_=/*#__PURE__*/function(t){function e(){return t.call(this,"Zone is an abstract class")||this}return a(e,t),e}(p),w="numeric",k="short",M="long",S={year:w,month:w,day:w},T={year:w,month:k,day:w},C={year:w,month:k,day:w,weekday:k},O={year:w,month:M,day:w},D={year:w,month:M,day:w,weekday:M},E={hour:w,minute:w},P={hour:w,minute:w,second:w},A={hour:w,minute:w,second:w,timeZoneName:k},I={hour:w,minute:w,second:w,timeZoneName:M},L={hour:w,minute:w,hourCycle:"h23"},$={hour:w,minute:w,second:w,hourCycle:"h23"},R={hour:w,minute:w,second:w,hourCycle:"h23",timeZoneName:k},F={hour:w,minute:w,second:w,hourCycle:"h23",timeZoneName:M},N={year:w,month:w,day:w,hour:w,minute:w},z={year:w,month:w,day:w,hour:w,minute:w,second:w},j={year:w,month:k,day:w,hour:w,minute:w},V={year:w,month:k,day:w,hour:w,minute:w,second:w},H={year:w,month:k,day:w,weekday:k,hour:w,minute:w},B={year:w,month:M,day:w,hour:w,minute:w,timeZoneName:k},W={year:w,month:M,day:w,hour:w,minute:w,second:w,timeZoneName:k},U={year:w,month:M,day:w,weekday:M,hour:w,minute:w,timeZoneName:M},q={year:w,month:M,day:w,weekday:M,hour:w,minute:w,second:w,timeZoneName:M},Z=/*#__PURE__*/function(){function t(){}var e=t.prototype;return(/**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */e.offsetName=function(t,e){throw new _}/**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */,e.formatOffset=function(t,e){throw new _}/**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */,e.offset=function(t){throw new _}/**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */,e.equals=function(t){throw new _}/**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */,r(t,[{key:"type",get:/**
     * The type of zone
     * @abstract
     * @type {string}
     */function(){throw new _}},{key:"name",get:function(){throw new _}},{key:"ianaName",get:function(){return this.name}},{key:"isUniversal",get:function(){throw new _}},{key:"isValid",get:function(){throw new _}}]),t)}(),Y=null,X=/*#__PURE__*/function(t){function e(){return t.apply(this,arguments)||this}a(e,t);var i=e.prototype;return(/** @override **/i.offsetName=function(t,e){return tB(t,e.format,e.locale)}/** @override **/,i.formatOffset=function(t,e){return tZ(this.offset(t),e)}/** @override **/,i.offset=function(t){return-new Date(t).getTimezoneOffset()}/** @override **/,i.equals=function(t){return"system"===t.type}/** @override **/,r(e,[{key:"type",get:/** @override **/function(){return"system"}},{key:"name",get:function(){return new Intl.DateTimeFormat().resolvedOptions().timeZone}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!0}}],[{key:"instance",get:/**
     * Get a singleton instance of the local zone
     * @return {SystemZone}
     */function(){return null===Y&&(Y=new e),Y}}]),e)}(Z),K={},J={year:0,month:1,day:2,era:3,hour:4,minute:5,second:6},G={},Q=/*#__PURE__*/function(t){function e(i){var n;return(/** @private **/(n=t.call(this)||this).zoneName=i,/** @private **/n.valid=e.isValidZone(i),n)}a(e,t),/**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */e.create=function(t){return G[t]||(G[t]=new e(t)),G[t]}/**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */,e.resetCache=function(){G={},K={}}/**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated This method returns false for some valid IANA names. Use isValidZone instead.
   * @return {boolean}
   */,e.isValidSpecifier=function(t){return this.isValidZone(t)}/**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */,e.isValidZone=function(t){if(!t)return!1;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}).format(),!0}catch(t){return!1}};/** @override **/var i=e.prototype;return(/** @override **/i.offsetName=function(t,e){return tB(t,e.format,e.locale,this.name)}/** @override **/,i.formatOffset=function(t,e){return tZ(this.offset(t),e)}/** @override **/,i.offset=function(t){var e,i,n,r,s,a=new Date(t);if(isNaN(a))return NaN;var o=(K[e=this.name]||(K[e]=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",era:"short"})),K[e]),l=o.formatToParts?function(t,e){for(var i=t.formatToParts(e),n=[],r=0;r<i.length;r++){var s=i[r],a=s.type,o=s.value,l=J[a];"era"===a?n[l]=o:tS(l)||(n[l]=parseInt(o,10))}return n}(o,a):(i=o.format(a).replace(/\u200E/g,""),r=(n=/(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(i))[1],s=n[2],[n[3],r,s,n[4],n[5],n[6],n[7]]),h=l[0],u=l[1],c=l[2],d=l[3],f=l[4],p=l[5],m=l[6];"BC"===d&&(h=-Math.abs(h)+1);var g=tj({year:h,month:u,day:c,hour:24===f?0:f,minute:p,second:m,millisecond:0}),b=+a,v=b%1e3;return(g-(b-=v>=0?v:1e3+v))/6e4}/** @override **/,i.equals=function(t){return"iana"===t.type&&t.name===this.name}/** @override **/,r(e,[{key:"type",get:function(){return"iana"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return this.valid}}]),e)}(Z),tt=["base"],te=["padTo","floor"],ti={},tn={};function tr(t,e){void 0===e&&(e={});var i=JSON.stringify([t,e]),n=tn[i];return n||(n=new Intl.DateTimeFormat(t,e),tn[i]=n),n}var ts={},ta={},to=null;function tl(t,e,i,n){var r=t.listingMode();return"error"===r?null:"en"===r?i(e):n(e)}/**
 * @private
 */var th=/*#__PURE__*/function(){function t(t,e,i){this.padTo=i.padTo||0,this.floor=i.floor||!1,i.padTo,i.floor;var n=c(i,te);if(!e||Object.keys(n).length>0){var r,a,o,l=s({useGrouping:!1},i);i.padTo>0&&(l.minimumIntegerDigits=i.padTo),this.inf=(void 0===(r=l)&&(r={}),(o=ts[a=JSON.stringify([t,r])])||(o=new Intl.NumberFormat(t,r),ts[a]=o),o)}}return t.prototype.format=function(t){if(!this.inf)return tA(this.floor?Math.floor(t):tR(t,3),this.padTo);var e=this.floor?Math.floor(t):t;return this.inf.format(e)},t}(),tu=/*#__PURE__*/function(){function t(t,e,i){this.opts=i,this.originalZone=void 0;var n=void 0;if(this.opts.timeZone)this.dt=t;else if("fixed"===t.zone.type){// UTC-8 or Etc/UTC-8 are not part of tzdata, only Etc/GMT+8 and the like.
// That is why fixed-offset TZ is set to that unless it is:
// 1. Representing offset 0 when UTC is used to maintain previous behavior and does not become GMT.
// 2. Unsupported by the browser:
//    - some do not support Etc/
//    - < Etc/GMT-14, > Etc/GMT+12, and 30-minute or 45-minute offsets are not part of tzdata
var r=-1*(t.offset/60),a=r>=0?"Etc/GMT+"+r:"Etc/GMT"+r;0!==t.offset&&Q.create(a).valid?(n=a,this.dt=t):(// Not all fixed-offset zones like Etc/+4:30 are present in tzdata so
// we manually apply the offset and substitute the zone as needed.
n="UTC",this.dt=0===t.offset?t:t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone)}else"system"===t.zone.type?this.dt=t:"iana"===t.zone.type?(this.dt=t,n=t.zone.name):(// Custom zones can have any offset / offsetName so we just manually
// apply the offset and substitute the zone as needed.
n="UTC",this.dt=t.setZone("UTC").plus({minutes:t.offset}),this.originalZone=t.zone);var o=s({},this.opts);o.timeZone=o.timeZone||n,this.dtf=tr(e,o)}var e=t.prototype;return e.format=function(){return this.originalZone?this.formatToParts().map(function(t){return t.value}).join(""):this.dtf.format(this.dt.toJSDate())},e.formatToParts=function(){var t=this,e=this.dtf.formatToParts(this.dt.toJSDate());return this.originalZone?e.map(function(e){if("timeZoneName"!==e.type)return e;var i=t.originalZone.offsetName(t.dt.ts,{locale:t.dt.locale,format:t.opts.timeZoneName});return s({},e,{value:i})}):e},e.resolvedOptions=function(){return this.dtf.resolvedOptions()},t}(),tc=/*#__PURE__*/function(){function t(t,e,i){if(this.opts=s({style:"long"},i),!e&&tO()){var n,r,a,o;this.rtf=(void 0===(n=i)&&(n={}),(r=n).base,(o=ta[a=JSON.stringify([t,c(r,tt)])])||(o=new Intl.RelativeTimeFormat(t,n),ta[a]=o),o)}}var e=t.prototype;return e.format=function(t,e){return this.rtf?this.rtf.format(t,e):function(t,e,i,n){void 0===i&&(i="always"),void 0===n&&(n=!1);var r={years:["year","yr."],quarters:["quarter","qtr."],months:["month","mo."],weeks:["week","wk."],days:["day","day","days"],hours:["hour","hr."],minutes:["minute","min."],seconds:["second","sec."]},s=-1===["hours","minutes","seconds"].indexOf(t);if("auto"===i&&s){var a="days"===t;switch(e){case 1:return a?"tomorrow":"next "+r[t][0];case -1:return a?"yesterday":"last "+r[t][0];case 0:return a?"today":"this "+r[t][0]}}var o=Object.is(e,-0)||e<0,l=Math.abs(e),h=1===l,u=r[t],c=n?h?u[1]:u[2]||u[1]:h?r[t][0]:t;return o?l+" "+c+" ago":"in "+l+" "+c}(e,t,this.opts.numeric,"long"!==this.opts.style)},e.formatToParts=function(t,e){return this.rtf?this.rtf.formatToParts(t,e):[]},t}(),td=/*#__PURE__*/function(){function t(t,e,i,n){var r,s,a,o=function(t){// I really want to avoid writing a BCP 47 parser
// see, e.g. https://github.com/wooorm/bcp-47
// Instead, we'll do this:
// a) if the string has no -u extensions, just leave it alone
// b) if it does, use Intl to resolve everything
// c) if Intl fails, try again without the -u
// private subtags and unicode subtags have ordering requirements,
// and we're not properly parsing this, so just strip out the
// private ones if they exist.
var e=t.indexOf("-x-");-1!==e&&(t=t.substring(0,e));var i=t.indexOf("-u-");if(-1===i)return[t];try{n=tr(t).resolvedOptions(),r=t}catch(e){var n,r,s=t.substring(0,i);n=tr(s).resolvedOptions(),r=s}var a=n;return[r,a.numberingSystem,a.calendar]}(t),l=o[0],h=o[1],u=o[2];this.locale=l,this.numberingSystem=e||h||null,this.outputCalendar=i||u||null,this.intl=(r=this.locale,s=this.numberingSystem,((a=this.outputCalendar)||s)&&(r.includes("-u-")||(r+="-u"),a&&(r+="-ca-"+a),s&&(r+="-nu-"+s)),r),this.weekdaysCache={format:{},standalone:{}},this.monthsCache={format:{},standalone:{}},this.meridiemCache=null,this.eraCache={},this.specifiedLocale=n,this.fastNumbersCached=null}t.fromOpts=function(e){return t.create(e.locale,e.numberingSystem,e.outputCalendar,e.defaultToEN)},t.create=function(e,i,n,r){void 0===r&&(r=!1);var s=e||tM.defaultLocale,a=s||(r?"en-US":to||(to=new Intl.DateTimeFormat().resolvedOptions().locale)),o=i||tM.defaultNumberingSystem,l=n||tM.defaultOutputCalendar;return new t(a,o,l,s)},t.resetCache=function(){to=null,tn={},ts={},ta={}},t.fromObject=function(e){var i=void 0===e?{}:e,n=i.locale,r=i.numberingSystem,s=i.outputCalendar;return t.create(n,r,s)};var e=t.prototype;return e.listingMode=function(){var t=this.isEnglish(),e=(null===this.numberingSystem||"latn"===this.numberingSystem)&&(null===this.outputCalendar||"gregory"===this.outputCalendar);return t&&e?"en":"intl"},e.clone=function(e){return e&&0!==Object.getOwnPropertyNames(e).length?t.create(e.locale||this.specifiedLocale,e.numberingSystem||this.numberingSystem,e.outputCalendar||this.outputCalendar,e.defaultToEN||!1):this},e.redefaultToEN=function(t){return void 0===t&&(t={}),this.clone(s({},t,{defaultToEN:!0}))},e.redefaultToSystem=function(t){return void 0===t&&(t={}),this.clone(s({},t,{defaultToEN:!1}))},e.months=function(t,e){var i=this;return void 0===e&&(e=!1),tl(this,t,tG,function(){var n=e?{month:t,day:"numeric"}:{month:t},r=e?"format":"standalone";return i.monthsCache[r][t]||(i.monthsCache[r][t]=function(t){for(var e=[],i=1;i<=12;i++){var n=iW.utc(2009,i,1);e.push(t(n))}return e}(function(t){return i.extract(t,n,"month")})),i.monthsCache[r][t]})},e.weekdays=function(t,e){var i=this;return void 0===e&&(e=!1),tl(this,t,t2,function(){var n=e?{weekday:t,year:"numeric",month:"long",day:"numeric"}:{weekday:t},r=e?"format":"standalone";return i.weekdaysCache[r][t]||(i.weekdaysCache[r][t]=function(t){for(var e=[],i=1;i<=7;i++){var n=iW.utc(2016,11,13+i);e.push(t(n))}return e}(function(t){return i.extract(t,n,"weekday")})),i.weekdaysCache[r][t]})},e.meridiems=function(){var t=this;return tl(this,void 0,function(){return t5},function(){// In theory there could be aribitrary day periods. We're gonna assume there are exactly two
// for AM and PM. This is probably wrong, but it's makes parsing way easier.
if(!t.meridiemCache){var e={hour:"numeric",hourCycle:"h12"};t.meridiemCache=[iW.utc(2016,11,13,9),iW.utc(2016,11,13,19)].map(function(i){return t.extract(i,e,"dayperiod")})}return t.meridiemCache})},e.eras=function(t){var e=this;return tl(this,t,t8,function(){var i={era:t};return e.eraCache[t]||(e.eraCache[t]=[iW.utc(-40,1,1),iW.utc(2017,1,1)].map(function(t){return e.extract(t,i,"era")})),e.eraCache[t]})},e.extract=function(t,e,i){var n=this.dtFormatter(t,e).formatToParts().find(function(t){return t.type.toLowerCase()===i});return n?n.value:null},e.numberFormatter=function(t){// this forcesimple option is never used (the only caller short-circuits on it, but it seems safer to leave)
// (in contrast, the rest of the condition is used heavily)
return void 0===t&&(t={}),new th(this.intl,t.forceSimple||this.fastNumbers,t)},e.dtFormatter=function(t,e){return void 0===e&&(e={}),new tu(t,this.intl,e)},e.relFormatter=function(t){return void 0===t&&(t={}),new tc(this.intl,this.isEnglish(),t)},e.listFormatter=function(t){var e,i,n,r;return void 0===t&&(t={}),e=this.intl,void 0===(i=t)&&(i={}),(r=ti[n=JSON.stringify([e,i])])||(r=new Intl.ListFormat(e,i),ti[n]=r),r},e.isEnglish=function(){return"en"===this.locale||"en-us"===this.locale.toLowerCase()||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us")},e.equals=function(t){return this.locale===t.locale&&this.numberingSystem===t.numberingSystem&&this.outputCalendar===t.outputCalendar},r(t,[{key:"fastNumbers",get:function(){return null==this.fastNumbersCached&&(this.fastNumbersCached=(!this.numberingSystem||"latn"===this.numberingSystem)&&("latn"===this.numberingSystem||!this.locale||this.locale.startsWith("en")||"latn"===new Intl.DateTimeFormat(this.intl).resolvedOptions().numberingSystem)),this.fastNumbersCached}}]),t}(),tf=null,tp=/*#__PURE__*/function(t){function e(e){var i;return(/** @private **/(i=t.call(this)||this).fixed=e,i)}a(e,t),/**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */e.instance=function(t){return 0===t?e.utcInstance:new e(t)}/**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */,e.parseSpecifier=function(t){if(t){var i=t.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(i)return new e(tW(i[1],i[2]))}return null};/** @override **/var i=e.prototype;return(/** @override **/i.offsetName=function(){return this.name}/** @override **/,i.formatOffset=function(t,e){return tZ(this.fixed,e)}/** @override **/,/** @override **/i.offset=function(){return this.fixed}/** @override **/,i.equals=function(t){return"fixed"===t.type&&t.fixed===this.fixed}/** @override **/,r(e,[{key:"type",get:function(){return"fixed"}},{key:"name",get:function(){return 0===this.fixed?"UTC":"UTC"+tZ(this.fixed,"narrow")}},{key:"ianaName",get:function(){return 0===this.fixed?"Etc/UTC":"Etc/GMT"+tZ(-this.fixed,"narrow")}},{key:"isUniversal",get:function(){return!0}},{key:"isValid",get:function(){return!0}}],[{key:"utcInstance",get:/**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */function(){return null===tf&&(tf=new e(0)),tf}}]),e)}(Z),tm=/*#__PURE__*/function(t){function e(e){var i;return(/**  @private */(i=t.call(this)||this).zoneName=e,i)}a(e,t);/** @override **/var i=e.prototype;return(/** @override **/i.offsetName=function(){return null}/** @override **/,i.formatOffset=function(){return""}/** @override **/,i.offset=function(){return NaN}/** @override **/,i.equals=function(){return!1}/** @override **/,r(e,[{key:"type",get:function(){return"invalid"}},{key:"name",get:function(){return this.zoneName}},{key:"isUniversal",get:function(){return!1}},{key:"isValid",get:function(){return!1}}]),e)}(Z);/**
 * @private
 */function tg(t,e){if(tS(t)||null===t)return e;if(t instanceof Z)return t;if("string"==typeof t){var i=t.toLowerCase();return"default"===i?e:"local"===i||"system"===i?X.instance:"utc"===i||"gmt"===i?tp.utcInstance:tp.parseSpecifier(i)||Q.create(t)}return tT(t)?tp.instance(t):"object"==typeof t&&"offset"in t&&"function"==typeof t.offset?t:new tm(t)}var tb,tv=function(){return Date.now()},ty="system",tx=null,t_=null,tw=null,tk=60,tM=/*#__PURE__*/function(){function t(){}return(/**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */t.resetCaches=function(){td.resetCache(),Q.resetCache()},r(t,null,[{key:"now",get:/**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */function(){return tv},set:function(t){tv=t}},{key:"defaultZone",get:/**
     * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
     * The default value is the system's time zone (the one set on the machine that runs this code).
     * @type {Zone}
     */function(){return tg(ty,X.instance)},set:function(t){ty=t}},{key:"defaultLocale",get:function(){return tx},set:function(t){tx=t}},{key:"defaultNumberingSystem",get:function(){return t_},set:function(t){t_=t}},{key:"defaultOutputCalendar",get:function(){return tw},set:function(t){tw=t}},{key:"twoDigitCutoffYear",get:function(){return tk},set:function(t){tk=t%100}},{key:"throwOnInvalid",get:function(){return tb},set:function(t){tb=t}}]),t)}();/**
 * @private
 */// TYPES
function tS(t){return void 0===t}function tT(t){return"number"==typeof t}function tC(t){return"number"==typeof t&&t%1==0}// CAPABILITIES
function tO(){try{return"undefined"!=typeof Intl&&!!Intl.RelativeTimeFormat}catch(t){return!1}}function tD(t,e,i){if(0!==t.length)return t.reduce(function(t,n){var r=[e(n),n];return t&&i(t[0],r[0])===t[0]?t:r},null)[1]}function tE(t,e){return Object.prototype.hasOwnProperty.call(t,e)}// NUMBERS AND STRINGS
function tP(t,e,i){return tC(t)&&t>=e&&t<=i}function tA(t,e){return void 0===e&&(e=2),t<0?"-"+(""+-t).padStart(e,"0"):(""+t).padStart(e,"0")}function tI(t){if(!tS(t)&&null!==t&&""!==t)return parseInt(t,10)}function tL(t){if(!tS(t)&&null!==t&&""!==t)return parseFloat(t)}function t$(t){// Return undefined (instead of 0) in these cases, where fraction is not set
if(!tS(t)&&null!==t&&""!==t)return Math.floor(1e3*parseFloat("0."+t))}function tR(t,e,i){void 0===i&&(i=!1);var n=Math.pow(10,e);return(i?Math.trunc:Math.round)(t*n)/n}// DATE BASICS
function tF(t){return t%4==0&&(t%100!=0||t%400==0)}function tN(t){return tF(t)?366:365}function tz(t,e){var i,n=(i=e-1)-12*Math.floor(i/12)+1;return 2===n?tF(t+(e-n)/12)?29:28:[31,null,31,30,31,30,31,31,30,31,30,31][n-1]}// convert a calendar object to a local timestamp (epoch, but with the offset baked in)
function tj(t){var e=Date.UTC(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond);return t.year<100&&t.year>=0&&// set the month and day again, this is necessary because year 2000 is a leap year, but year 100 is not
// so if obj.year is in 99, but obj.day makes it roll over into year 100,
// the calculations done by Date.UTC are using year 2000 - which is incorrect
(e=new Date(e)).setUTCFullYear(t.year,t.month-1,t.day),+e}function tV(t){var e=t-1;return 4==(t+Math.floor(t/4)-Math.floor(t/100)+Math.floor(t/400))%7||3==(e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400))%7?53:52}function tH(t){return t>99?t:t>tM.twoDigitCutoffYear?1900+t:2e3+t}// PARSING
function tB(t,e,i,n){void 0===n&&(n=null);var r=new Date(t),a={hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};n&&(a.timeZone=n);var o=s({timeZoneName:e},a),l=new Intl.DateTimeFormat(i,o).formatToParts(r).find(function(t){return"timezonename"===t.type.toLowerCase()});return l?l.value:null}// signedOffset('-5', '30') -> -330
function tW(t,e){var i=parseInt(t,10);// don't || this because we want to preserve -0
Number.isNaN(i)&&(i=0);var n=parseInt(e,10)||0,r=i<0||Object.is(i,-0)?-n:n;return 60*i+r}// COERCION
function tU(t){var e=Number(t);if("boolean"==typeof t||""===t||Number.isNaN(e))throw new x("Invalid unit value "+t);return e}function tq(t,e){var i={};for(var n in t)if(tE(t,n)){var r=t[n];if(null==r)continue;i[e(n)]=tU(r)}return i}function tZ(t,e){var i=Math.trunc(Math.abs(t/60)),n=Math.trunc(Math.abs(t%60)),r=t>=0?"+":"-";switch(e){case"short":return""+r+tA(i,2)+":"+tA(n,2);case"narrow":return""+r+i+(n>0?":"+n:"");case"techie":return""+r+tA(i,2)+tA(n,2);default:throw RangeError("Value format "+e+" is out of range for property format")}}function tY(t){return["hour","minute","second","millisecond"].reduce(function(e,i){return e[i]=t[i],e},{})}/**
 * @private
 */var tX=["January","February","March","April","May","June","July","August","September","October","November","December"],tK=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tJ=["J","F","M","A","M","J","J","A","S","O","N","D"];function tG(t){switch(t){case"narrow":return[].concat(tJ);case"short":return[].concat(tK);case"long":return[].concat(tX);case"numeric":return["1","2","3","4","5","6","7","8","9","10","11","12"];case"2-digit":return["01","02","03","04","05","06","07","08","09","10","11","12"];default:return null}}var tQ=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],t0=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],t1=["M","T","W","T","F","S","S"];function t2(t){switch(t){case"narrow":return[].concat(t1);case"short":return[].concat(t0);case"long":return[].concat(tQ);case"numeric":return["1","2","3","4","5","6","7"];default:return null}}var t5=["AM","PM"],t3=["Before Christ","Anno Domini"],t4=["BC","AD"],t6=["B","A"];function t8(t){switch(t){case"narrow":return[].concat(t6);case"short":return[].concat(t4);case"long":return[].concat(t3);default:return null}}function t7(t,e){for(var i,n="",r=f(t);!(i=r()).done;){var s=i.value;s.literal?n+=s.val:n+=e(s.val)}return n}var t9={D:S,DD:T,DDD:O,DDDD:D,t:E,tt:P,ttt:A,tttt:I,T:L,TT:$,TTT:R,TTTT:F,f:N,ff:j,fff:B,ffff:U,F:z,FF:V,FFF:W,FFFF:q},et=/*#__PURE__*/function(){function t(t,e){this.opts=e,this.loc=t,this.systemLoc=null}t.create=function(e,i){return void 0===i&&(i={}),new t(e,i)},t.parseFormat=function(t){for(var e=null,i="",n=!1,r=[],s=0;s<t.length;s++){var a=t.charAt(s);"'"===a?(i.length>0&&r.push({literal:n||/^\s+$/.test(i),val:i}),e=null,i="",n=!n):n?i+=a:a===e?i+=a:(i.length>0&&r.push({literal:/^\s+$/.test(i),val:i}),i=a,e=a)}return i.length>0&&r.push({literal:n||/^\s+$/.test(i),val:i}),r},t.macroTokenToFormatOpts=function(t){return t9[t]};var e=t.prototype;return e.formatWithSystemDefault=function(t,e){return null===this.systemLoc&&(this.systemLoc=this.loc.redefaultToSystem()),this.systemLoc.dtFormatter(t,s({},this.opts,e)).format()},e.dtFormatter=function(t,e){return void 0===e&&(e={}),this.loc.dtFormatter(t,s({},this.opts,e))},e.formatDateTime=function(t,e){return this.dtFormatter(t,e).format()},e.formatDateTimeParts=function(t,e){return this.dtFormatter(t,e).formatToParts()},e.formatInterval=function(t,e){return this.dtFormatter(t.start,e).dtf.formatRange(t.start.toJSDate(),t.end.toJSDate())},e.resolvedOptions=function(t,e){return this.dtFormatter(t,e).resolvedOptions()},e.num=function(t,e){// we get some perf out of doing this here, annoyingly
if(void 0===e&&(e=0),this.opts.forceSimple)return tA(t,e);var i=s({},this.opts);return e>0&&(i.padTo=e),this.loc.numberFormatter(i).format(t)},e.formatDateTimeFromString=function(e,i){var n=this,r="en"===this.loc.listingMode(),s=this.loc.outputCalendar&&"gregory"!==this.loc.outputCalendar,a=function(t,i){return n.loc.extract(e,t,i)},o=function(t){return e.isOffsetFixed&&0===e.offset&&t.allowZ?"Z":e.isValid?e.zone.formatOffset(e.ts,t.format):""},l=function(t,i){return r?tG(t)[e.month-1]:a(i?{month:t}:{month:t,day:"numeric"},"month")},h=function(t,i){return r?t2(t)[e.weekday-1]:a(i?{weekday:t}:{weekday:t,month:"long",day:"numeric"},"weekday")},u=function(i){var r=t.macroTokenToFormatOpts(i);return r?n.formatWithSystemDefault(e,r):i},c=function(t){return r?t8(t)[e.year<0?0:1]:a({era:t},"era")};return t7(t.parseFormat(i),function(t){// Where possible: https://cldr.unicode.org/translation/date-time/date-time-symbols
switch(t){// ms
case"S":return n.num(e.millisecond);case"u":// falls through
case"SSS":return n.num(e.millisecond,3);// seconds
case"s":return n.num(e.second);case"ss":return n.num(e.second,2);// fractional seconds
case"uu":return n.num(Math.floor(e.millisecond/10),2);case"uuu":return n.num(Math.floor(e.millisecond/100));// minutes
case"m":return n.num(e.minute);case"mm":return n.num(e.minute,2);// hours
case"h":return n.num(e.hour%12==0?12:e.hour%12);case"hh":return n.num(e.hour%12==0?12:e.hour%12,2);case"H":return n.num(e.hour);case"HH":return n.num(e.hour,2);// offset
case"Z":// like +6
return o({format:"narrow",allowZ:n.opts.allowZ});case"ZZ":// like +06:00
return o({format:"short",allowZ:n.opts.allowZ});case"ZZZ":// like +0600
return o({format:"techie",allowZ:n.opts.allowZ});case"ZZZZ":// like EST
return e.zone.offsetName(e.ts,{format:"short",locale:n.loc.locale});case"ZZZZZ":// like Eastern Standard Time
return e.zone.offsetName(e.ts,{format:"long",locale:n.loc.locale});// zone
case"z":// like America/New_York
return e.zoneName;// meridiems
case"a":return r?t5[e.hour<12?0:1]:a({hour:"numeric",hourCycle:"h12"},"dayperiod");// dates
case"d":return s?a({day:"numeric"},"day"):n.num(e.day);case"dd":return s?a({day:"2-digit"},"day"):n.num(e.day,2);// weekdays - standalone
case"c":// weekdays - format
case"E":// like 1
return n.num(e.weekday);case"ccc":// like 'Tues'
return h("short",!0);case"cccc":// like 'Tuesday'
return h("long",!0);case"ccccc":// like 'T'
return h("narrow",!0);case"EEE":// like 'Tues'
return h("short",!1);case"EEEE":// like 'Tuesday'
return h("long",!1);case"EEEEE":// like 'T'
return h("narrow",!1);// months - standalone
case"L":// like 1
return s?a({month:"numeric",day:"numeric"},"month"):n.num(e.month);case"LL":// like 01, doesn't seem to work
return s?a({month:"2-digit",day:"numeric"},"month"):n.num(e.month,2);case"LLL":// like Jan
return l("short",!0);case"LLLL":// like January
return l("long",!0);case"LLLLL":// like J
return l("narrow",!0);// months - format
case"M":// like 1
return s?a({month:"numeric"},"month"):n.num(e.month);case"MM":// like 01
return s?a({month:"2-digit"},"month"):n.num(e.month,2);case"MMM":// like Jan
return l("short",!1);case"MMMM":// like January
return l("long",!1);case"MMMMM":// like J
return l("narrow",!1);// years
case"y":// like 2014
return s?a({year:"numeric"},"year"):n.num(e.year);case"yy":// like 14
return s?a({year:"2-digit"},"year"):n.num(e.year.toString().slice(-2),2);case"yyyy":// like 0012
return s?a({year:"numeric"},"year"):n.num(e.year,4);case"yyyyyy":// like 000012
return s?a({year:"numeric"},"year"):n.num(e.year,6);// eras
case"G":// like AD
return c("short");case"GG":// like Anno Domini
return c("long");case"GGGGG":return c("narrow");case"kk":return n.num(e.weekYear.toString().slice(-2),2);case"kkkk":return n.num(e.weekYear,4);case"W":return n.num(e.weekNumber);case"WW":return n.num(e.weekNumber,2);case"o":return n.num(e.ordinal);case"ooo":return n.num(e.ordinal,3);case"q":// like 1
return n.num(e.quarter);case"qq":// like 01
return n.num(e.quarter,2);case"X":return n.num(Math.floor(e.ts/1e3));case"x":return n.num(e.ts);default:return u(t)}})},e.formatDurationFromString=function(e,i){var n,r=this,s=function(t){switch(t[0]){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":return"hour";case"d":return"day";case"w":return"week";case"M":return"month";case"y":return"year";default:return null}},a=t.parseFormat(i),o=a.reduce(function(t,e){var i=e.literal,n=e.val;return i?t:t.concat(n)},[]);return t7(a,(n=e.shiftTo.apply(e,o.map(s).filter(function(t){return t})),function(t){var e=s(t);return e?r.num(n.get(e),t.length):t}))},t}(),ee=/*#__PURE__*/function(){function t(t,e){this.reason=t,this.explanation=e}return t.prototype.toMessage=function(){return this.explanation?this.reason+": "+this.explanation:this.reason},t}(),ei=/[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;function en(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return RegExp("^"+e.reduce(function(t,e){return t+e.source},"")+"$")}function er(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t){return e.reduce(function(e,i){var n=e[0],r=e[1],a=i(t,e[2]),o=a[0],l=a[1],h=a[2];return[s({},n,o),l||r,h]},[{},null,1]).slice(0,2)}}function es(t){if(null==t)return[null,null];for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];for(var r=0;r<i.length;r++){var s=i[r],a=s[0],o=s[1],l=a.exec(t);if(l)return o(l)}return[null,null]}function ea(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(t,i){var n,r={};for(n=0;n<e.length;n++)r[e[n]]=tI(t[i+n]);return[r,null,i+n]}}// ISO and SQL parsing
var eo=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,el=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,eh=RegExp(""+el.source+("(?:"+eo.source+"?(?:\\[(")+ei.source+")\\])?)?"),eu=RegExp("(?:T"+eh.source+")?"),ec=ea("weekYear","weekNumber","weekDay"),ed=ea("year","ordinal"),ef=RegExp(el.source+" ?(?:"+eo.source+"|("+ei.source+"))?"),ep=RegExp("(?: "+ef.source+")?");function em(t,e,i){var n=t[e];return tS(n)?i:tI(n)}function eg(t,e){return[{hours:em(t,e,0),minutes:em(t,e+1,0),seconds:em(t,e+2,0),milliseconds:t$(t[e+3])},null,e+4]}function eb(t,e){var i=!t[e]&&!t[e+1],n=tW(t[e+1],t[e+2]);return[{},i?null:tp.instance(n),e+3]}function ev(t,e){return[{},t[e]?Q.create(t[e]):null,e+1]}// ISO time parsing
var ey=RegExp("^T?"+el.source+"$"),ex=/^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;function e_(t){var e=t[0],i=t[1],n=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],h=t[8],u="-"===e[0],c=l&&"-"===l[0],d=function(t,e){return void 0===e&&(e=!1),void 0!==t&&(e||t&&u)?-t:t};return[{years:d(tL(i)),months:d(tL(n)),weeks:d(tL(r)),days:d(tL(s)),hours:d(tL(a)),minutes:d(tL(o)),seconds:d(tL(l),"-0"===l),milliseconds:d(t$(h),c)}]}// These are a little braindead. EDT *should* tell us that we're in, say, America/New_York
// and not just that we're in -240 *right now*. But since I don't think these are used that often
// I'm just going to ignore that
var ew={GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function ek(t,e,i,n,r,s,a){var o={year:2===e.length?tH(tI(e)):tI(e),month:tK.indexOf(i)+1,day:tI(n),hour:tI(r),minute:tI(s)};return a&&(o.second=tI(a)),t&&(o.weekday=t.length>3?tQ.indexOf(t)+1:t0.indexOf(t)+1),o}// RFC 2822/5322
var eM=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function eS(t){var e,i=t[1],n=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],h=t[8],u=t[9],c=t[10],d=t[11],f=ek(i,s,r,n,a,o,l);return e=h?ew[h]:u?0:tW(c,d),[f,new tp(e)]}// http date
var eT=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,eC=/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,eO=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function eD(t){var e=t[1],i=t[2],n=t[3];return[ek(e,t[4],n,i,t[5],t[6],t[7]),tp.utcInstance]}function eE(t){var e=t[1],i=t[2],n=t[3],r=t[4],s=t[5],a=t[6];return[ek(e,t[7],i,n,r,s,a),tp.utcInstance]}var eP=en(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,eu),eA=en(/(\d{4})-?W(\d\d)(?:-?(\d))?/,eu),eI=en(/(\d{4})-?(\d{3})/,eu),eL=en(eh),e$=er(function(t,e){return[{year:em(t,e),month:em(t,e+1,1),day:em(t,e+2,1)},null,e+3]},eg,eb,ev),eR=er(ec,eg,eb,ev),eF=er(ed,eg,eb,ev),eN=er(eg,eb,ev),ez=er(eg),ej=en(/(\d{4})-(\d\d)-(\d\d)/,ep),eV=en(ef),eH=er(eg,eb,ev),eB="Invalid Duration",eW={weeks:{days:7,hours:168,minutes:10080,seconds:604800,milliseconds:6048e5},days:{hours:24,minutes:1440,seconds:86400,milliseconds:864e5},hours:{minutes:60,seconds:3600,milliseconds:36e5},minutes:{seconds:60,milliseconds:6e4},seconds:{milliseconds:1e3}},eU=s({years:{quarters:4,months:12,weeks:52,days:365,hours:8760,minutes:525600,seconds:31536e3,milliseconds:31536e6},quarters:{months:3,weeks:13,days:91,hours:2184,minutes:131040,seconds:7862400,milliseconds:78624e5},months:{weeks:4,days:30,hours:720,minutes:43200,seconds:2592e3,milliseconds:2592e6}},eW),eq=s({years:{quarters:4,months:12,weeks:52.1775,days:365.2425,hours:8765.82,minutes:525949.2,seconds:31556952,milliseconds:31556952e3},quarters:{months:3,weeks:13.044375,days:91.310625,hours:2191.455,minutes:131487.3,seconds:7889238,milliseconds:7889238e3},months:{weeks:30.436875/7,days:30.436875,hours:730.485,minutes:43829.1,seconds:2629746,milliseconds:2629746e3}},eW),eZ=["years","quarters","months","weeks","days","hours","minutes","seconds","milliseconds"],eY=eZ.slice(0).reverse();// clone really means "create another instance just like this one, but with these changes"
function eX(t,e,i){void 0===i&&(i=!1);// deep merge for vals
var n={values:i?e.values:s({},t.values,e.values||{}),loc:t.loc.clone(e.loc),conversionAccuracy:e.conversionAccuracy||t.conversionAccuracy,matrix:e.matrix||t.matrix};return new eG(n)}function eK(t,e){for(var i,n,r=null!=(i=e.milliseconds)?i:0,s=f(eY.slice(1));!(n=s()).done;){var a=n.value;e[a]&&(r+=e[a]*t[a].milliseconds)}return r}// NB: mutates parameters
function eJ(t,e){// the logic below assumes the overall value of the duration is positive
// if this is not the case, factor is used to make it so
var i=0>eK(t,e)?-1:1;eZ.reduceRight(function(n,r){if(tS(e[r]))return n;if(n){var s=e[n]*i,a=t[r][n],o=Math.floor(s/a);e[r]+=o*i,e[n]-=o*a*i}return r},null),// try to convert any decimals into smaller units if possible
// for example for { years: 2.5, days: 0, seconds: 0 } we want to get { years: 2, days: 182, hours: 12 }
eZ.reduce(function(i,n){if(tS(e[n]))return i;if(i){var r=e[i]%1;e[i]-=r,e[n]+=r*t[i][n]}return n},null)}/**
 * A Duration object represents a period of time, like "2 months" or "1 day, 1 hour". Conceptually, it's just a map of units to their quantities, accompanied by some additional configuration and methods for creating, parsing, interrogating, transforming, and formatting them. They can be used on their own or in conjunction with other Luxon types; for example, you can use {@link DateTime#plus} to add a Duration object to a DateTime, producing another DateTime.
 *
 * Here is a brief overview of commonly used methods and getters in Duration:
 *
 * * **Creation** To create a Duration, use {@link Duration.fromMillis}, {@link Duration.fromObject}, or {@link Duration.fromISO}.
 * * **Unit values** See the {@link Duration#years}, {@link Duration#months}, {@link Duration#weeks}, {@link Duration#days}, {@link Duration#hours}, {@link Duration#minutes}, {@link Duration#seconds}, {@link Duration#milliseconds} accessors.
 * * **Configuration** See  {@link Duration#locale} and {@link Duration#numberingSystem} accessors.
 * * **Transformation** To create new Durations out of old ones use {@link Duration#plus}, {@link Duration#minus}, {@link Duration#normalize}, {@link Duration#set}, {@link Duration#reconfigure}, {@link Duration#shiftTo}, and {@link Duration#negate}.
 * * **Output** To convert the Duration into other representations, see {@link Duration#as}, {@link Duration#toISO}, {@link Duration#toFormat}, and {@link Duration#toJSON}
 *
 * There's are more methods documented below. In addition, for more information on subtler topics like internationalization and validity, see the external documentation.
 */var eG=/*#__PURE__*/function(){/**
   * @private
   */function t(t){var e="longterm"===t.conversionAccuracy,i=e?eq:eU;t.matrix&&(i=t.matrix),/**
     * @access private
     */this.values=t.values,/**
     * @access private
     */this.loc=t.loc||td.create(),/**
     * @access private
     */this.conversionAccuracy=e?"longterm":"casual",/**
     * @access private
     */this.invalid=t.invalid||null,/**
     * @access private
     */this.matrix=i,/**
     * @access private
     */this.isLuxonDuration=!0}/**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */t.fromMillis=function(e,i){return t.fromObject({milliseconds:e},i)}/**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */,t.fromObject=function(e,i){if(void 0===i&&(i={}),null==e||"object"!=typeof e)throw new x("Duration.fromObject: argument expected to be an object, got "+(null===e?"null":typeof e));return new t({values:tq(e,t.normalizeUnit),loc:td.fromObject(i),conversionAccuracy:i.conversionAccuracy,matrix:i.matrix})}/**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */,t.fromDurationLike=function(e){if(tT(e))return t.fromMillis(e);if(t.isDuration(e))return e;if("object"==typeof e)return t.fromObject(e);throw new x("Unknown duration argument "+e+" of type "+typeof e)}/**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */,t.fromISO=function(e,i){var n=es(e,[ex,e_])[0];return n?t.fromObject(n,i):t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")}/**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */,t.fromISOTime=function(e,i){var n=es(e,[ey,ez])[0];return n?t.fromObject(n,i):t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")}/**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */,t.invalid=function(e,i){if(void 0===i&&(i=null),!e)throw new x("need to specify a reason the Duration is invalid");var n=e instanceof ee?e:new ee(e,i);if(!tM.throwOnInvalid)return new t({invalid:n});throw new b(n)}/**
   * @private
   */,t.normalizeUnit=function(t){var e={year:"years",years:"years",quarter:"quarters",quarters:"quarters",month:"months",months:"months",week:"weeks",weeks:"weeks",day:"days",days:"days",hour:"hours",hours:"hours",minute:"minutes",minutes:"minutes",second:"seconds",seconds:"seconds",millisecond:"milliseconds",milliseconds:"milliseconds"}[t?t.toLowerCase():t];if(!e)throw new y(t);return e}/**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */,t.isDuration=function(t){return t&&t.isLuxonDuration||!1}/**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */;var e=t.prototype;return(/**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @return {string}
   */e.toFormat=function(t,e){void 0===e&&(e={});// reverse-compat since 1.2; we always round down now, never up, and we do it by default
var i=s({},e,{floor:!1!==e.round&&!1!==e.floor});return this.isValid?et.create(this.loc,i).formatDurationFromString(this,t):eB}/**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior use the `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
   * @param opts - On option object to override the formatting. Accepts the same keys as the options parameter of the native `Int.NumberFormat` constructor, as well as `listStyle`.
   * @example
   * ```js
   * var dur = Duration.fromObject({ days: 1, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 day, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 day, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 day, 5 hr, 6 min'
   * ```
   */,e.toHuman=function(t){var e=this;if(void 0===t&&(t={}),!this.isValid)return eB;var i=eZ.map(function(i){var n=e.values[i];return tS(n)?null:e.loc.numberFormatter(s({style:"unit",unitDisplay:"long"},t,{unit:i.slice(0,-1)})).format(n)}).filter(function(t){return t});return this.loc.listFormatter(s({type:"conjunction",style:t.listStyle||"narrow"},t)).format(i)}/**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */,e.toObject=function(){return this.isValid?s({},this.values):{}}/**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */,e.toISO=function(){// we could use the formatter, but this is an easier way to get the minimum string
if(!this.isValid)return null;var t="P";return 0!==this.years&&(t+=this.years+"Y"),(0!==this.months||0!==this.quarters)&&(t+=this.months+3*this.quarters+"M"),0!==this.weeks&&(t+=this.weeks+"W"),0!==this.days&&(t+=this.days+"D"),(0!==this.hours||0!==this.minutes||0!==this.seconds||0!==this.milliseconds)&&(t+="T"),0!==this.hours&&(t+=this.hours+"H"),0!==this.minutes&&(t+=this.minutes+"M"),(0!==this.seconds||0!==this.milliseconds)&&// https://stackoverflow.com/questions/588004/is-floating-point-math-broken
(t+=tR(this.seconds+this.milliseconds/1e3,3)+"S"),"P"===t&&(t+="T0S"),t}/**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */,e.toISOTime=function(t){if(void 0===t&&(t={}),!this.isValid)return null;var e=this.toMillis();return e<0||e>=864e5?null:(t=s({suppressMilliseconds:!1,suppressSeconds:!1,includePrefix:!1,format:"extended"},t,{includeOffset:!1}),iW.fromMillis(e,{zone:"UTC"}).toISOTime(t))}/**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */,e.toJSON=function(){return this.toISO()}/**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */,e.toString=function(){return this.toISO()}/**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */,e.toMillis=function(){return this.isValid?eK(this.matrix,this.values):NaN}/**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */,e.valueOf=function(){return this.toMillis()}/**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */,e.plus=function(e){if(!this.isValid)return this;for(var i=t.fromDurationLike(e),n={},r=0;r<eZ.length;r++){var s=eZ[r];(tE(i.values,s)||tE(this.values,s))&&(n[s]=i.get(s)+this.get(s))}return eX(this,{values:n},!0)}/**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */,e.minus=function(e){if(!this.isValid)return this;var i=t.fromDurationLike(e);return this.plus(i.negate())}/**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */,e.mapUnits=function(t){if(!this.isValid)return this;for(var e={},i=0,n=Object.keys(this.values);i<n.length;i++){var r=n[i];e[r]=tU(t(this.values[r],r))}return eX(this,{values:e},!0)}/**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */,e.get=function(e){return this[t.normalizeUnit(e)]}/**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */,e.set=function(e){return this.isValid?eX(this,{values:s({},this.values,tq(e,t.normalizeUnit))}):this}/**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */,e.reconfigure=function(t){var e=void 0===t?{}:t,i=e.locale,n=e.numberingSystem,r=e.conversionAccuracy,s=e.matrix;return eX(this,{loc:this.loc.clone({locale:i,numberingSystem:n}),matrix:s,conversionAccuracy:r})}/**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */,e.as=function(t){return this.isValid?this.shiftTo(t).get(t):NaN}/**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see second example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */,e.normalize=function(){if(!this.isValid)return this;var t=this.toObject();return eJ(this.matrix,t),eX(this,{values:t},!0)}/**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */,e.rescale=function(){return this.isValid?eX(this,{values:// Remove all properties with a value of 0 from an object
function(t){for(var e={},i=0,n=Object.entries(t);i<n.length;i++){var r=n[i],s=r[0],a=r[1];0!==a&&(e[s]=a)}return e}(this.normalize().shiftToAll().toObject())},!0):this}/**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */,e.shiftTo=function(){for(var e,i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r];if(!this.isValid||0===n.length)return this;n=n.map(function(e){return t.normalizeUnit(e)});for(var s={},a={},o=this.toObject(),l=0;l<eZ.length;l++){var h=eZ[l];if(n.indexOf(h)>=0){e=h;var u=0;// anything we haven't boiled down yet should get boiled to this unit
for(var c in a)u+=this.matrix[c][h]*a[c],a[c]=0;tT(o[h])&&(u+=o[h]);// only keep the integer part for now in the hopes of putting any decimal part
// into a smaller unit later
var d=Math.trunc(u);s[h]=d,a[h]=(1e3*u-1e3*d)/1e3;// otherwise, keep it in the wings to boil it later
}else tT(o[h])&&(a[h]=o[h])}// anything leftover becomes the decimal for the last unit
// lastUnit must be defined since units is not empty
for(var f in a)0!==a[f]&&(s[e]+=f===e?a[f]:a[f]/this.matrix[e][f]);return eJ(this.matrix,s),eX(this,{values:s},!0)}/**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */,e.shiftToAll=function(){return this.isValid?this.shiftTo("years","months","weeks","days","hours","minutes","seconds","milliseconds"):this}/**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */,e.negate=function(){if(!this.isValid)return this;for(var t={},e=0,i=Object.keys(this.values);e<i.length;e++){var n=i[e];t[n]=0===this.values[n]?0:-this.values[n]}return eX(this,{values:t},!0)}/**
   * Get the years.
   * @type {number}
   */,/**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */e.equals=function(t){if(!this.isValid||!t.isValid||!this.loc.equals(t.loc))return!1;for(var e=0;e<eZ.length;e++){var i,n,r=eZ[e];if(i=this.values[r],n=t.values[r],// Consider 0 and undefined as equal
void 0===i||0===i?void 0!==n&&0!==n:i!==n)return!1}return!0},r(t,[{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"years",get:function(){return this.isValid?this.values.years||0:NaN}},{key:"quarters",get:function(){return this.isValid?this.values.quarters||0:NaN}},{key:"months",get:function(){return this.isValid?this.values.months||0:NaN}},{key:"weeks",get:function(){return this.isValid?this.values.weeks||0:NaN}},{key:"days",get:function(){return this.isValid?this.values.days||0:NaN}},{key:"hours",get:function(){return this.isValid?this.values.hours||0:NaN}},{key:"minutes",get:function(){return this.isValid?this.values.minutes||0:NaN}},{key:"seconds",get:function(){return this.isValid?this.values.seconds||0:NaN}},{key:"milliseconds",get:function(){return this.isValid?this.values.milliseconds||0:NaN}},{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),t)}(),eQ="Invalid Interval",e0=/*#__PURE__*/function(){/**
   * @private
   */function t(t){/**
     * @access private
     */this.s=t.start,/**
     * @access private
     */this.e=t.end,/**
     * @access private
     */this.invalid=t.invalid||null,/**
     * @access private
     */this.isLuxonInterval=!0}/**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */t.invalid=function(e,i){if(void 0===i&&(i=null),!e)throw new x("need to specify a reason the Interval is invalid");var n=e instanceof ee?e:new ee(e,i);if(!tM.throwOnInvalid)return new t({invalid:n});throw new g(n)}/**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */,t.fromDateTimes=function(e,i){var n=iU(e),r=iU(i),s=n&&n.isValid?r&&r.isValid?r<n?e0.invalid("end before start","The end of an interval must be after its start, but you had start="+n.toISO()+" and end="+r.toISO()):null:e0.invalid("missing or invalid end"):e0.invalid("missing or invalid start");return null==s?new t({start:n,end:r}):s}/**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */,t.after=function(e,i){var n=eG.fromDurationLike(i),r=iU(e);return t.fromDateTimes(r,r.plus(n))}/**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */,t.before=function(e,i){var n=eG.fromDurationLike(i),r=iU(e);return t.fromDateTimes(r.minus(n),r)}/**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */,t.fromISO=function(e,i){var n=(e||"").split("/",2),r=n[0],s=n[1];if(r&&s){try{o=(a=iW.fromISO(r,i)).isValid}catch(t){o=!1}try{h=(l=iW.fromISO(s,i)).isValid}catch(t){h=!1}if(o&&h)return t.fromDateTimes(a,l);if(o){var a,o,l,h,u=eG.fromISO(s,i);if(u.isValid)return t.after(a,u)}else if(h){var c=eG.fromISO(r,i);if(c.isValid)return t.before(l,c)}}return t.invalid("unparsable",'the input "'+e+"\" can't be parsed as ISO 8601")}/**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */,t.isInterval=function(t){return t&&t.isLuxonInterval||!1}/**
   * Returns the start of the Interval
   * @type {DateTime}
   */;var e=t.prototype;return(/**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */e.length=function(t){return void 0===t&&(t="milliseconds"),this.isValid?this.toDuration.apply(this,[t]).get(t):NaN}/**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @return {number}
   */,e.count=function(t){if(void 0===t&&(t="milliseconds"),!this.isValid)return NaN;var e=this.start.startOf(t),i=this.end.startOf(t);return Math.floor(i.diff(e,t).get(t))+(i.valueOf()!==this.end.valueOf())}/**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */,e.hasSame=function(t){return!!this.isValid&&(this.isEmpty()||this.e.minus(1).hasSame(this.s,t))}/**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */,e.isEmpty=function(){return this.s.valueOf()===this.e.valueOf()}/**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */,e.isAfter=function(t){return!!this.isValid&&this.s>t}/**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */,e.isBefore=function(t){return!!this.isValid&&this.e<=t}/**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */,e.contains=function(t){return!!this.isValid&&this.s<=t&&this.e>t}/**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */,e.set=function(e){var i=void 0===e?{}:e,n=i.start,r=i.end;return this.isValid?t.fromDateTimes(n||this.s,r||this.e):this}/**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */,e.splitAt=function(){var e=this;if(!this.isValid)return[];for(var i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r];for(var s=n.map(iU).filter(function(t){return e.contains(t)}).sort(),a=[],o=this.s,l=0;o<this.e;){var h=s[l]||this.e,u=+h>+this.e?this.e:h;a.push(t.fromDateTimes(o,u)),o=u,l+=1}return a}/**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */,e.splitBy=function(e){var i=eG.fromDurationLike(e);if(!this.isValid||!i.isValid||0===i.as("milliseconds"))return[];for(var n,r=this.s,s=1,a=[];r<this.e;){var o=this.start.plus(i.mapUnits(function(t){return t*s}));n=+o>+this.e?this.e:o,a.push(t.fromDateTimes(r,n)),r=n,s+=1}return a}/**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */,e.divideEqually=function(t){return this.isValid?this.splitBy(this.length()/t).slice(0,t):[]}/**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */,e.overlaps=function(t){return this.e>t.s&&this.s<t.e}/**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */,e.abutsStart=function(t){return!!this.isValid&&+this.e==+t.s}/**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */,e.abutsEnd=function(t){return!!this.isValid&&+t.e==+this.s}/**
   * Return whether this Interval engulfs the start and end of the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */,e.engulfs=function(t){return!!this.isValid&&this.s<=t.s&&this.e>=t.e}/**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */,e.equals=function(t){return!!this.isValid&&!!t.isValid&&this.s.equals(t.s)&&this.e.equals(t.e)}/**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */,e.intersection=function(e){if(!this.isValid)return this;var i=this.s>e.s?this.s:e.s,n=this.e<e.e?this.e:e.e;return i>=n?null:t.fromDateTimes(i,n)}/**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */,e.union=function(e){if(!this.isValid)return this;var i=this.s<e.s?this.s:e.s,n=this.e>e.e?this.e:e.e;return t.fromDateTimes(i,n)}/**
   * Merge an array of Intervals into a equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * @param {Array} intervals
   * @return {Array}
   */,t.merge=function(t){var e=t.sort(function(t,e){return t.s-e.s}).reduce(function(t,e){var i=t[0],n=t[1];return n?n.overlaps(e)||n.abutsStart(e)?[i,n.union(e)]:[i.concat([n]),e]:[i,e]},[[],null]),i=e[0],n=e[1];return n&&i.push(n),i}/**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */,t.xor=function(e){for(var i,n,r=null,s=0,a=[],o=e.map(function(t){return[{time:t.s,type:"s"},{time:t.e,type:"e"}]}),l=(i=Array.prototype).concat.apply(i,o).sort(function(t,e){return t.time-e.time}),h=f(l);!(n=h()).done;){var u=n.value;1===(s+="s"===u.type?1:-1)?r=u.time:(r&&+r!=+u.time&&a.push(t.fromDateTimes(r,u.time)),r=null)}return t.merge(a)}/**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */,e.difference=function(){for(var e=this,i=arguments.length,n=Array(i),r=0;r<i;r++)n[r]=arguments[r];return t.xor([this].concat(n)).map(function(t){return e.intersection(t)}).filter(function(t){return t&&!t.isEmpty()})}/**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */,e.toString=function(){return this.isValid?"["+this.s.toISO()+" – "+this.e.toISO()+")":eQ}/**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */,e.toLocaleString=function(t,e){return void 0===t&&(t=S),void 0===e&&(e={}),this.isValid?et.create(this.s.loc.clone(e),t).formatInterval(this):eQ}/**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */,e.toISO=function(t){return this.isValid?this.s.toISO(t)+"/"+this.e.toISO(t):eQ}/**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */,e.toISODate=function(){return this.isValid?this.s.toISODate()+"/"+this.e.toISODate():eQ}/**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */,e.toISOTime=function(t){return this.isValid?this.s.toISOTime(t)+"/"+this.e.toISOTime(t):eQ}/**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */,e.toFormat=function(t,e){var i=(void 0===e?{}:e).separator;return this.isValid?""+this.s.toFormat(t)+(void 0===i?" – ":i)+this.e.toFormat(t):eQ}/**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */,e.toDuration=function(t,e){return this.isValid?this.e.diff(this.s,t,e):eG.invalid(this.invalidReason)}/**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */,e.mapEndpoints=function(e){return t.fromDateTimes(e(this.s),e(this.e))},r(t,[{key:"start",get:function(){return this.isValid?this.s:null}},{key:"end",get:function(){return this.isValid?this.e:null}},{key:"isValid",get:function(){return null===this.invalidReason}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}}]),t)}(),e1=/*#__PURE__*/function(){function t(){}return(/**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */t.hasDST=function(t){void 0===t&&(t=tM.defaultZone);var e=iW.now().setZone(t).set({month:12});return!t.isUniversal&&e.offset!==e.set({month:6}).offset}/**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */,t.isValidIANAZone=function(t){return Q.isValidZone(t)}/**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */,t.normalizeZone=function(t){return tg(t,tM.defaultZone)}/**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */,t.months=function(t,e){void 0===t&&(t="long");var i=void 0===e?{}:e,n=i.locale,r=void 0===n?null:n,s=i.numberingSystem,a=void 0===s?null:s,o=i.locObj,l=i.outputCalendar,h=void 0===l?"gregory":l;return((void 0===o?null:o)||td.create(r,a,h)).months(t)}/**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */,t.monthsFormat=function(t,e){void 0===t&&(t="long");var i=void 0===e?{}:e,n=i.locale,r=void 0===n?null:n,s=i.numberingSystem,a=void 0===s?null:s,o=i.locObj,l=i.outputCalendar,h=void 0===l?"gregory":l;return((void 0===o?null:o)||td.create(r,a,h)).months(t,!0)}/**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */,t.weekdays=function(t,e){void 0===t&&(t="long");var i=void 0===e?{}:e,n=i.locale,r=void 0===n?null:n,s=i.numberingSystem,a=void 0===s?null:s,o=i.locObj;return((void 0===o?null:o)||td.create(r,a,null)).weekdays(t)}/**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */,t.weekdaysFormat=function(t,e){void 0===t&&(t="long");var i=void 0===e?{}:e,n=i.locale,r=void 0===n?null:n,s=i.numberingSystem,a=void 0===s?null:s,o=i.locObj;return((void 0===o?null:o)||td.create(r,a,null)).weekdays(t,!0)}/**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */,t.meridiems=function(t){var e=(void 0===t?{}:t).locale,i=void 0===e?null:e;return td.create(i).meridiems()}/**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */,t.eras=function(t,e){void 0===t&&(t="short");var i=(void 0===e?{}:e).locale,n=void 0===i?null:i;return td.create(n,null,"gregory").eras(t)}/**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * @example Info.features() //=> { relative: false }
   * @return {Object}
   */,t.features=function(){return{relative:tO()}},t)}();function e2(t,e){var i=function(t){return t.toUTC(0,{keepLocalTime:!0}).startOf("day").valueOf()},n=i(e)-i(t);return Math.floor(eG.fromMillis(n).as("days"))}var e5={arab:"[٠-٩]",arabext:"[۰-۹]",bali:"[᭐-᭙]",beng:"[০-৯]",deva:"[०-९]",fullwide:"[０-９]",gujr:"[૦-૯]",hanidec:"[〇|一|二|三|四|五|六|七|八|九]",khmr:"[០-៩]",knda:"[೦-೯]",laoo:"[໐-໙]",limb:"[᥆-᥏]",mlym:"[൦-൯]",mong:"[᠐-᠙]",mymr:"[၀-၉]",orya:"[୦-୯]",tamldec:"[௦-௯]",telu:"[౦-౯]",thai:"[๐-๙]",tibt:"[༠-༩]",latn:"\\d"},e3={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]},e4=e5.hanidec.replace(/[\[|\]]/g,"").split("");function e6(t,e){return void 0===e&&(e=""),RegExp(""+e5[t.numberingSystem||"latn"]+e)}function e8(t,e){return void 0===e&&(e=function(t){return t}),{regex:t,deser:function(t){var i=t[0];return e(function(t){var e=parseInt(t,10);if(!isNaN(e))return e;e="";for(var i=0;i<t.length;i++){var n=t.charCodeAt(i);if(-1!==t[i].search(e5.hanidec))e+=e4.indexOf(t[i]);else for(var r in e3){var s=e3[r],a=s[0],o=s[1];n>=a&&n<=o&&(e+=n-a)}}return parseInt(e,10)}(i))}}}var e7="[ "+String.fromCharCode(160)+"]",e9=RegExp(e7,"g");function it(t){// make dots optional and also make them literal
// make space and non breakable space characters interchangeable
return t.replace(/\./g,"\\.?").replace(e9,e7)}function ie(t){return t.replace(/\./g,"")// ignore dots that were made optional
.replace(e9," ")// interchange space and nbsp
.toLowerCase()}function ii(t,e){return null===t?null:{regex:RegExp(t.map(it).join("|")),deser:function(i){var n=i[0];return t.findIndex(function(t){return ie(n)===ie(t)})+e}}}function ir(t,e){return{regex:t,deser:function(t){return tW(t[1],t[2])},groups:e}}function is(t){return{regex:t,deser:function(t){return t[0]}}}var ia={year:{"2-digit":"yy",numeric:"yyyyy"},month:{numeric:"M","2-digit":"MM",short:"MMM",long:"MMMM"},day:{numeric:"d","2-digit":"dd"},weekday:{short:"EEE",long:"EEEE"},dayperiod:"a",dayPeriod:"a",hour12:{numeric:"h","2-digit":"hh"},hour24:{numeric:"H","2-digit":"HH"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},timeZoneName:{long:"ZZZZZ",short:"ZZZ"}},io=null;function il(t,e){var i;return(i=Array.prototype).concat.apply(i,t.map(function(t){return function(t,e){if(t.literal)return t;var i=iu(et.macroTokenToFormatOpts(t.val),e);return null==i||i.includes(void 0)?t:i}(t,e)}))}/**
 * @private
 */function ih(t,e,i){var n,r,s,a=il(et.parseFormat(i),t),o=a.map(function(e){var i,n,r,s,a,o,l,h,u,c,d,f,p;return i=e6(t),n=e6(t,"{2}"),r=e6(t,"{3}"),s=e6(t,"{4}"),a=e6(t,"{6}"),o=e6(t,"{1,2}"),l=e6(t,"{1,3}"),h=e6(t,"{1,6}"),u=e6(t,"{1,9}"),c=e6(t,"{2,4}"),d=e6(t,"{4,6}"),f=function(t){return{regex:RegExp(t.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")),deser:function(t){return t[0]},literal:!0}},(p=function(p){if(e.literal)return f(p);switch(p.val){// era
case"G":return ii(t.eras("short"),0);case"GG":return ii(t.eras("long"),0);// years
case"y":return e8(h);case"yy":case"kk":return e8(c,tH);case"yyyy":// weekYear (k)
case"kkkk":return e8(s);case"yyyyy":return e8(d);case"yyyyyy":return e8(a);// months
case"M":case"L":// dates
case"d":case"H":case"h":case"m":case"q":case"s":// weekNumber (W)
case"W":return e8(o);case"MM":case"LL":case"dd":// time
case"HH":case"hh":case"mm":case"qq":case"ss":case"WW":return e8(n);case"MMM":return ii(t.months("short",!0),1);case"MMMM":return ii(t.months("long",!0),1);case"LLL":return ii(t.months("short",!1),1);case"LLLL":return ii(t.months("long",!1),1);// ordinals
case"o":case"S":return e8(l);case"ooo":case"SSS":return e8(r);case"u":return is(u);case"uu":return is(o);case"uuu":// weekdays
case"E":case"c":return e8(i);// meridiem
case"a":return ii(t.meridiems(),0);case"EEE":return ii(t.weekdays("short",!1),1);case"EEEE":return ii(t.weekdays("long",!1),1);case"ccc":return ii(t.weekdays("short",!0),1);case"cccc":return ii(t.weekdays("long",!0),1);// offset/zone
case"Z":case"ZZ":return ir(RegExp("([+-]"+o.source+")(?::("+n.source+"))?"),2);case"ZZZ":return ir(RegExp("([+-]"+o.source+")("+n.source+")?"),2);// we don't support ZZZZ (PST) or ZZZZZ (Pacific Standard Time) in parsing
// because we don't have any way to figure out what they are
case"z":return is(/[a-z_+-/]{1,256}?/i);// this special-case "token" represents a place where a macro-token expanded into a white-space literal
// in this case we accept any non-newline white-space
case" ":return is(/[^\S\n\r]/);default:return f(p)}}(e)||{invalidReason:"missing Intl.DateTimeFormat.formatToParts support"}).token=e,p}),l=o.find(function(t){return t.invalidReason});if(l)return{input:e,tokens:a,invalidReason:l.invalidReason};var h=["^"+o.map(function(t){return t.regex}).reduce(function(t,e){return t+"("+e.source+")"},"")+"$",o],u=h[0],c=h[1],d=RegExp(u,"i"),f=function(t,e,i){var n=t.match(e);if(!n)return[n,{}];var r={},s=1;for(var a in i)if(tE(i,a)){var o=i[a],l=o.groups?o.groups+1:1;!o.literal&&o.token&&(r[o.token.val[0]]=o.deser(n.slice(s,s+l))),s+=l}return[n,r]}(e,d,c),p=f[0],m=f[1],g=m?(r=function(t){switch(t){case"S":return"millisecond";case"s":return"second";case"m":return"minute";case"h":case"H":return"hour";case"d":return"day";case"o":return"ordinal";case"L":case"M":return"month";case"y":return"year";case"E":case"c":return"weekday";case"W":return"weekNumber";case"k":return"weekYear";case"q":return"quarter";default:return null}},s=null,tS(m.z)||(s=Q.create(m.z)),tS(m.Z)||(s||(s=new tp(m.Z)),n=m.Z),tS(m.q)||(m.M=(m.q-1)*3+1),tS(m.h)||(m.h<12&&1===m.a?m.h+=12:12!==m.h||0!==m.a||(m.h=0)),0===m.G&&m.y&&(m.y=-m.y),tS(m.u)||(m.S=t$(m.u)),[Object.keys(m).reduce(function(t,e){var i=r(e);return i&&(t[i]=m[e]),t},{}),s,n]):[null,null,void 0],b=g[0],y=g[1],x=g[2];if(tE(m,"a")&&tE(m,"H"))throw new v("Can't include meridiem when specifying 24-hour format");return{input:e,tokens:a,regex:d,rawMatches:p,matches:m,result:b,zone:y,specificOffset:x}}function iu(t,e){if(!t)return null;var i=et.create(e,t).dtFormatter((io||(io=iW.fromMillis(1555555555555)),io)),n=i.formatToParts(),r=i.resolvedOptions();return n.map(function(e){return function(t,e,i){var n=t.type,r=t.value;if("literal"===n){var s=/^\s+$/.test(r);return{literal:!s,val:s?" ":r}}var a=e[n],o=n;"hour"===n&&(o=null!=e.hour12?e.hour12?"hour12":"hour24":null!=e.hourCycle?"h11"===e.hourCycle||"h12"===e.hourCycle?"hour12":"hour24":i.hour12?"hour12":"hour24");var l=ia[o];if("object"==typeof l&&(l=l[a]),l)return{literal:!1,val:l}}(e,t,r)})}var ic=[0,31,59,90,120,151,181,212,243,273,304,334],id=[0,31,60,91,121,152,182,213,244,274,305,335];function ip(t,e){return new ee("unit out of range","you specified "+e+" (of type "+typeof e+") as a "+t+", which is invalid")}function im(t,e,i){var n=new Date(Date.UTC(t,e-1,i));t<100&&t>=0&&n.setUTCFullYear(n.getUTCFullYear()-1900);var r=n.getUTCDay();return 0===r?7:r}function ig(t,e){var i=tF(t)?id:ic,n=i.findIndex(function(t){return t<e}),r=e-i[n];return{month:n+1,day:r}}/**
 * @private
 */function ib(t){var e,i=t.year,n=t.month,r=t.day,a=r+(tF(i)?id:ic)[n-1],o=im(i,n,r),l=Math.floor((a-o+10)/7);return l<1?l=tV(e=i-1):l>tV(i)?(e=i+1,l=1):e=i,s({weekYear:e,weekNumber:l,weekday:o},tY(t))}function iv(t){var e,i=t.weekYear,n=t.weekNumber,r=t.weekday,a=im(i,1,4),o=tN(i),l=7*n+r-a-3;l<1?l+=tN(e=i-1):l>o?(e=i+1,l-=tN(i)):e=i;var h=ig(e,l),u=h.month,c=h.day;return s({year:e,month:u,day:c},tY(t))}function iy(t){var e=t.year,i=t.month,n=t.day+(tF(e)?id:ic)[i-1];return s({year:e,ordinal:n},tY(t))}function ix(t){var e=t.year,i=ig(e,t.ordinal),n=i.month,r=i.day;return s({year:e,month:n,day:r},tY(t))}function i_(t){var e=tC(t.year),i=tP(t.month,1,12),n=tP(t.day,1,tz(t.year,t.month));return e?i?!n&&ip("day",t.day):ip("month",t.month):ip("year",t.year)}function iw(t){var e=t.hour,i=t.minute,n=t.second,r=t.millisecond,s=tP(e,0,23)||24===e&&0===i&&0===n&&0===r,a=tP(i,0,59),o=tP(n,0,59),l=tP(r,0,999);return s?a?o?!l&&ip("millisecond",r):ip("second",n):ip("minute",i):ip("hour",e)}var ik="Invalid DateTime";function iM(t){return new ee("unsupported zone",'the zone "'+t.name+'" is not supported')}// we cache week data on the DT object and this intermediates the cache
function iS(t){return null===t.weekData&&(t.weekData=ib(t.c)),t.weekData}// clone really means, "make a new object with these modifications". all "setters" really use this
// to create a new object while only changing some of the properties
function iT(t,e){var i={ts:t.ts,zone:t.zone,c:t.c,o:t.o,loc:t.loc,invalid:t.invalid};return new iW(s({},i,e,{old:i}))}// find the right offset a given local time. The o input is our guess, which determines which
// offset we'll pick in ambiguous cases (e.g. there are two 3 AMs b/c Fallback DST)
function iC(t,e,i){// Our UTC time is just a guess because our offset is just a guess
var n=t-6e4*e,r=i.offset(n);// If so, offset didn't change and we're done
if(e===r)return[n,e];// If not, change the ts by the difference in the offset
n-=(r-e)*6e4;// If that gives us the local time we want, we're done
var s=i.offset(n);return r===s?[n,r]:[t-6e4*Math.min(r,s),Math.max(r,s)]}// convert an epoch timestamp into a calendar object with the given offset
function iO(t,e){t+=6e4*e;var i=new Date(t);return{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,day:i.getUTCDate(),hour:i.getUTCHours(),minute:i.getUTCMinutes(),second:i.getUTCSeconds(),millisecond:i.getUTCMilliseconds()}}// create a new DT instance by adding a duration, adjusting for DSTs
function iD(t,e){var i=t.o,n=t.c.year+Math.trunc(e.years),r=t.c.month+Math.trunc(e.months)+3*Math.trunc(e.quarters),a=s({},t.c,{year:n,month:r,day:Math.min(t.c.day,tz(n,r))+Math.trunc(e.days)+7*Math.trunc(e.weeks)}),o=eG.fromObject({years:e.years-Math.trunc(e.years),quarters:e.quarters-Math.trunc(e.quarters),months:e.months-Math.trunc(e.months),weeks:e.weeks-Math.trunc(e.weeks),days:e.days-Math.trunc(e.days),hours:e.hours,minutes:e.minutes,seconds:e.seconds,milliseconds:e.milliseconds}).as("milliseconds"),l=iC(tj(a),i,t.zone),h=l[0],u=l[1];return 0!==o&&(h+=o,// that could have changed the offset by going over a DST, but we want to keep the ts the same
u=t.zone.offset(h)),{ts:h,o:u}}// helper useful in turning the results of parsing into real dates
// by handling the zone options
function iE(t,e,i,n,r,a){var o=i.setZone,l=i.zone;if((!t||0===Object.keys(t).length)&&!e)return iW.invalid(new ee("unparsable",'the input "'+r+"\" can't be parsed as "+n));var h=e||l,u=iW.fromObject(t,s({},i,{zone:h,specificOffset:a}));return o?u:u.setZone(l)}// if you want to output a technical format (e.g. RFC 2822), this helper
// helps handle the details
function iP(t,e,i){return void 0===i&&(i=!0),t.isValid?et.create(td.create("en-US"),{allowZ:i,forceSimple:!0}).formatDateTimeFromString(t,e):null}function iA(t,e){var i=t.c.year>9999||t.c.year<0,n="";return i&&t.c.year>=0&&(n+="+"),n+=tA(t.c.year,i?6:4),e?n+="-"+tA(t.c.month)+"-"+tA(t.c.day):n+=tA(t.c.month)+tA(t.c.day),n}function iI(t,e,i,n,r,s){var a=tA(t.c.hour);return e?(a+=":"+tA(t.c.minute),0===t.c.millisecond&&0===t.c.second&&i||(a+=":")):a+=tA(t.c.minute),0===t.c.millisecond&&0===t.c.second&&i||(a+=tA(t.c.second),0===t.c.millisecond&&n||(a+="."+tA(t.c.millisecond,3))),r&&(t.isOffsetFixed&&0===t.offset&&!s?a+="Z":t.o<0?a+="-"+tA(Math.trunc(-t.o/60))+":"+tA(Math.trunc(-t.o%60)):a+="+"+tA(Math.trunc(t.o/60))+":"+tA(Math.trunc(t.o%60))),s&&(a+="["+t.zone.ianaName+"]"),a}// defaults for unspecified units in the supported calendars
var iL={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},i$={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},iR={ordinal:1,hour:0,minute:0,second:0,millisecond:0},iF=["year","month","day","hour","minute","second","millisecond"],iN=["weekYear","weekNumber","weekday","hour","minute","second","millisecond"],iz=["year","ordinal","hour","minute","second","millisecond"];// standardize case and plurality in units
function ij(t){var e={year:"year",years:"year",month:"month",months:"month",day:"day",days:"day",hour:"hour",hours:"hour",minute:"minute",minutes:"minute",quarter:"quarter",quarters:"quarter",second:"second",seconds:"second",millisecond:"millisecond",milliseconds:"millisecond",weekday:"weekday",weekdays:"weekday",weeknumber:"weekNumber",weeksnumber:"weekNumber",weeknumbers:"weekNumber",weekyear:"weekYear",weekyears:"weekYear",ordinal:"ordinal"}[t.toLowerCase()];if(!e)throw new y(t);return e}// this is a dumbed down version of fromObject() that runs about 60% faster
// but doesn't do any validation, makes a bunch of assumptions about what units
// are present, and so on.
function iV(t,e){var i,n,r=tg(e.zone,tM.defaultZone),s=td.fromObject(e),a=tM.now();// assume we have the higher-order units
if(tS(t.year))i=a;else{for(var o=0;o<iF.length;o++){var l=iF[o];tS(t[l])&&(t[l]=iL[l])}var h=i_(t)||iw(t);if(h)return iW.invalid(h);var u=r.offset(a),c=iC(tj(t),u,r);i=c[0],n=c[1]}return new iW({ts:i,zone:r,loc:s,o:n})}function iH(t,e,i){var n=!!tS(i.round)||i.round,r=function(t,r){return t=tR(t,n||i.calendary?0:2,!0),e.loc.clone(i).relFormatter(i).format(t,r)},s=function(n){return i.calendary?e.hasSame(t,n)?0:e.startOf(n).diff(t.startOf(n),n).get(n):e.diff(t,n).get(n)};if(i.unit)return r(s(i.unit),i.unit);for(var a,o=f(i.units);!(a=o()).done;){var l=a.value,h=s(l);if(Math.abs(h)>=1)return r(h,l)}return r(t>e?-0:0,i.units[i.units.length-1])}function iB(t){var e,i={};return t.length>0&&"object"==typeof t[t.length-1]?(i=t[t.length-1],e=Array.from(t).slice(0,t.length-1)):e=Array.from(t),[i,e]}/**
 * A DateTime is an immutable data structure representing a specific date and time and accompanying methods. It contains class and instance methods for creating, parsing, interrogating, transforming, and formatting them.
 *
 * A DateTime comprises of:
 * * A timestamp. Each DateTime instance refers to a specific millisecond of the Unix epoch.
 * * A time zone. Each instance is considered in the context of a specific zone (by default the local system's zone).
 * * Configuration properties that effect how output strings are formatted, such as `locale`, `numberingSystem`, and `outputCalendar`.
 *
 * Here is a brief overview of the most commonly used functionality it provides:
 *
 * * **Creation**: To create a DateTime from its components, use one of its factory class methods: {@link DateTime.local}, {@link DateTime.utc}, and (most flexibly) {@link DateTime.fromObject}. To create one from a standard string format, use {@link DateTime.fromISO}, {@link DateTime.fromHTTP}, and {@link DateTime.fromRFC2822}. To create one from a custom string format, use {@link DateTime.fromFormat}. To create one from a native JS date, use {@link DateTime.fromJSDate}.
 * * **Gregorian calendar and time**: To examine the Gregorian properties of a DateTime individually (i.e as opposed to collectively through {@link DateTime#toObject}), use the {@link DateTime#year}, {@link DateTime#month},
 * {@link DateTime#day}, {@link DateTime#hour}, {@link DateTime#minute}, {@link DateTime#second}, {@link DateTime#millisecond} accessors.
 * * **Week calendar**: For ISO week calendar attributes, see the {@link DateTime#weekYear}, {@link DateTime#weekNumber}, and {@link DateTime#weekday} accessors.
 * * **Configuration** See the {@link DateTime#locale} and {@link DateTime#numberingSystem} accessors.
 * * **Transformation**: To transform the DateTime into other DateTimes, use {@link DateTime#set}, {@link DateTime#reconfigure}, {@link DateTime#setZone}, {@link DateTime#setLocale}, {@link DateTime.plus}, {@link DateTime#minus}, {@link DateTime#endOf}, {@link DateTime#startOf}, {@link DateTime#toUTC}, and {@link DateTime#toLocal}.
 * * **Output**: To convert the DateTime to other representations, use the {@link DateTime#toRelative}, {@link DateTime#toRelativeCalendar}, {@link DateTime#toJSON}, {@link DateTime#toISO}, {@link DateTime#toHTTP}, {@link DateTime#toObject}, {@link DateTime#toRFC2822}, {@link DateTime#toString}, {@link DateTime#toLocaleString}, {@link DateTime#toFormat}, {@link DateTime#toMillis} and {@link DateTime#toJSDate}.
 *
 * There's plenty others documented below. In addition, for more information on subtler topics like internationalization, time zones, alternative calendars, validity, and so on, see the external documentation.
 */var iW=/*#__PURE__*/function(){/**
   * @access private
   */function t(t){var e=t.zone||tM.defaultZone,i=t.invalid||(Number.isNaN(t.ts)?new ee("invalid input"):null)||(e.isValid?null:iM(e));/**
     * @access private
     */this.ts=tS(t.ts)?tM.now():t.ts;var n=null,r=null;if(!i){if(t.old&&t.old.ts===this.ts&&t.old.zone.equals(e)){var s=[t.old.c,t.old.o];n=s[0],r=s[1]}else{var a=e.offset(this.ts);n=(i=Number.isNaN((n=iO(this.ts,a)).year)?new ee("invalid input"):null)?null:n,r=i?null:a}}/**
     * @access private
     */this._zone=e,/**
     * @access private
     */this.loc=t.loc||td.create(),/**
     * @access private
     */this.invalid=i,/**
     * @access private
     */this.weekData=null,/**
     * @access private
     */this.c=n,/**
     * @access private
     */this.o=r,/**
     * @access private
     */this.isLuxonDateTime=!0}// CONSTRUCT
/**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */t.now=function(){return new t({})}/**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */,t.local=function(){var t=iB(arguments),e=t[0],i=t[1];return iV({year:i[0],month:i[1],day:i[2],hour:i[3],minute:i[4],second:i[5],millisecond:i[6]},e)}/**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */,t.utc=function(){var t=iB(arguments),e=t[0],i=t[1],n=i[0],r=i[1],s=i[2],a=i[3],o=i[4],l=i[5],h=i[6];return e.zone=tp.utcInstance,iV({year:n,month:r,day:s,hour:a,minute:o,second:l,millisecond:h},e)}/**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */,t.fromJSDate=function(e,i){void 0===i&&(i={});var n="[object Date]"===Object.prototype.toString.call(e)?e.valueOf():NaN;if(Number.isNaN(n))return t.invalid("invalid input");var r=tg(i.zone,tM.defaultZone);return r.isValid?new t({ts:n,zone:r,loc:td.fromObject(i)}):t.invalid(iM(r))}/**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */,t.fromMillis=function(e,i){if(void 0===i&&(i={}),tT(e))return e<-864e13||e>864e13?t.invalid("Timestamp out of range"):new t({ts:e,zone:tg(i.zone,tM.defaultZone),loc:td.fromObject(i)});throw new x("fromMillis requires a numerical input, but received a "+typeof e+" with value "+e)}/**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @return {DateTime}
   */,t.fromSeconds=function(e,i){if(void 0===i&&(i={}),tT(e))return new t({ts:1e3*e,zone:tg(i.zone,tM.defaultZone),loc:td.fromObject(i)});throw new x("fromSeconds requires a numerical input")}/**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @return {DateTime}
   */,t.fromObject=function(e,i){void 0===i&&(i={}),e=e||{};var n,r,s,a,o,l=tg(i.zone,tM.defaultZone);if(!l.isValid)return t.invalid(iM(l));var h=tM.now(),u=tS(i.specificOffset)?l.offset(h):i.specificOffset,c=tq(e,ij),d=!tS(c.ordinal),p=!tS(c.year),m=!tS(c.month)||!tS(c.day),g=p||m,b=c.weekYear||c.weekNumber,y=td.fromObject(i);// cases:
// just a weekday -> this week's instance of that weekday, no worries
// (gregorian data or ordinal) + (weekYear or weekNumber) -> error
// (gregorian month or day) + ordinal -> error
// otherwise just use weeks or ordinals or gregorian, depending on what's specified
if((g||d)&&b)throw new v("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(m&&d)throw new v("Can't mix ordinal dates with month/day");var x,_,w=b||c.weekday&&!g,k=iO(h,u);w?(x=iN,_=i$,k=ib(k)):d?(x=iz,_=iR,k=iy(k)):(x=iF,_=iL);for(var M,S=!1,T=f(x);!(M=T()).done;){var C=M.value;tS(c[C])?S?c[C]=_[C]:c[C]=k[C]:S=!0}// make sure the values we have are in range
var O=(w?(n=tC(c.weekYear),r=tP(c.weekNumber,1,tV(c.weekYear)),s=tP(c.weekday,1,7),n?r?!s&&ip("weekday",c.weekday):ip("week",c.week):ip("weekYear",c.weekYear)):d?(a=tC(c.year),o=tP(c.ordinal,1,tN(c.year)),a?!o&&ip("ordinal",c.ordinal):ip("year",c.year)):i_(c))||iw(c);if(O)return t.invalid(O);// compute the actual time
var D=iC(tj(w?iv(c):d?ix(c):c),u,l),E=D[0],P=D[1],A=new t({ts:E,zone:l,o:P,loc:y});return(// gregorian data + weekday serves only to validate
c.weekday&&g&&e.weekday!==A.weekday?t.invalid("mismatched weekday","you can't specify both a weekday of "+c.weekday+" and a date of "+A.toISO()):A)}/**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */,t.fromISO=function(t,e){void 0===e&&(e={});var i=es(t,[eP,e$],[eA,eR],[eI,eF],[eL,eN]);return iE(i[0],i[1],e,"ISO 8601",t)}/**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */,t.fromRFC2822=function(t,e){void 0===e&&(e={});var i=es(t.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim(),[eM,eS]);return iE(i[0],i[1],e,"RFC 2822",t)}/**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */,t.fromHTTP=function(t,e){void 0===e&&(e={});var i=es(t,[eT,eD],[eC,eD],[eO,eE]);return iE(i[0],i[1],e,"HTTP",e)}/**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */,t.fromFormat=function(e,i,n){if(void 0===n&&(n={}),tS(e)||tS(i))throw new x("fromFormat requires an input string and a format");var r,s=n,a=s.locale,o=s.numberingSystem,l=[(r=ih(td.fromOpts({locale:void 0===a?null:a,numberingSystem:void 0===o?null:o,defaultToEN:!0}),e,i)).result,r.zone,r.specificOffset,r.invalidReason],h=l[0],u=l[1],c=l[2],d=l[3];return d?t.invalid(d):iE(h,u,n,"format "+i,e,c)}/**
   * @deprecated use fromFormat instead
   */,t.fromString=function(e,i,n){return void 0===n&&(n={}),t.fromFormat(e,i,n)}/**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */,t.fromSQL=function(t,e){void 0===e&&(e={});var i=es(t,[ej,e$],[eV,eH]);return iE(i[0],i[1],e,"SQL",t)}/**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */,t.invalid=function(e,i){if(void 0===i&&(i=null),!e)throw new x("need to specify a reason the DateTime is invalid");var n=e instanceof ee?e:new ee(e,i);if(!tM.throwOnInvalid)return new t({invalid:n});throw new m(n)}/**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */,t.isDateTime=function(t){return t&&t.isLuxonDateTime||!1}/**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */,t.parseFormatForOpts=function(t,e){void 0===e&&(e={});var i=iu(t,td.fromObject(e));return i?i.map(function(t){return t?t.val:null}).join(""):null}/**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */,t.expandFormat=function(t,e){return void 0===e&&(e={}),il(et.parseFormat(t),td.fromObject(e)).map(function(t){return t.val}).join("")}/**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */;var e=t.prototype;return e.get=function(t){return this[t]}/**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */,/**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */e.getPossibleOffsets=function(){if(!this.isValid||this.isOffsetFixed)return[this];var t=tj(this.c),e=this.zone.offset(t-864e5),i=this.zone.offset(t+864e5),n=this.zone.offset(t-6e4*e),r=this.zone.offset(t-6e4*i);if(n===r)return[this];var s=t-6e4*n,a=t-6e4*r,o=iO(s,n),l=iO(a,r);return o.hour===l.hour&&o.minute===l.minute&&o.second===l.second&&o.millisecond===l.millisecond?[iT(this,{ts:s}),iT(this,{ts:a})]:[this]}/**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */,/**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */e.resolvedLocaleOptions=function(t){void 0===t&&(t={});var e=et.create(this.loc.clone(t),t).resolvedOptions(this);return{locale:e.locale,numberingSystem:e.numberingSystem,outputCalendar:e.calendar}}/**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */,e.toUTC=function(t,e){return void 0===t&&(t=0),void 0===e&&(e={}),this.setZone(tp.instance(t),e)}/**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */,e.toLocal=function(){return this.setZone(tM.defaultZone)}/**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */,e.setZone=function(e,i){var n=void 0===i?{}:i,r=n.keepLocalTime,s=n.keepCalendarTime;if((e=tg(e,tM.defaultZone)).equals(this.zone))return this;if(!e.isValid)return t.invalid(iM(e));var a=this.ts;if(void 0!==r&&r||void 0!==s&&s){var o,l,h=e.offset(this.ts);a=(o=this.toObject(),l=e,iC(tj(o),h,l))[0]}return iT(this,{ts:a,zone:e})}/**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */,e.reconfigure=function(t){var e=void 0===t?{}:t,i=e.locale,n=e.numberingSystem,r=e.outputCalendar;return iT(this,{loc:this.loc.clone({locale:i,numberingSystem:n,outputCalendar:r})})}/**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */,e.setLocale=function(t){return this.reconfigure({locale:t})}/**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */,e.set=function(t){if(!this.isValid)return this;var e,i,n,r,a=tq(t,ij),o=!tS(a.weekYear)||!tS(a.weekNumber)||!tS(a.weekday),l=!tS(a.ordinal),h=!tS(a.year),u=!tS(a.month)||!tS(a.day),c=a.weekYear||a.weekNumber;if((h||u||l)&&c)throw new v("Can't mix weekYear/weekNumber units with year/month/day or ordinals");if(u&&l)throw new v("Can't mix ordinal dates with month/day");o?r=iv(s({},ib(this.c),a)):tS(a.ordinal)?(r=s({},this.toObject(),a),tS(a.day)&&(r.day=Math.min(tz(r.year,r.month),r.day))):r=ix(s({},iy(this.c),a));var d=(e=r,i=this.o,n=this.zone,iC(tj(e),i,n));return iT(this,{ts:d[0],o:d[1]})}/**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */,e.plus=function(t){return this.isValid?iT(this,iD(this,eG.fromDurationLike(t))):this}/**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */,e.minus=function(t){return this.isValid?iT(this,iD(this,eG.fromDurationLike(t).negate())):this}/**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */,e.startOf=function(t){if(!this.isValid)return this;var e={},i=eG.normalizeUnit(t);switch(i){case"years":e.month=1;// falls through
case"quarters":case"months":e.day=1;// falls through
case"weeks":case"days":e.hour=0;// falls through
case"hours":e.minute=0;// falls through
case"minutes":e.second=0;// falls through
case"seconds":e.millisecond=0}if("weeks"===i&&(e.weekday=1),"quarters"===i){var n=Math.ceil(this.month/3);e.month=(n-1)*3+1}return this.set(e)}/**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */,e.endOf=function(t){var e;return this.isValid?this.plus(((e={})[t]=1,e)).startOf(t).minus(1):this}/**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */,e.toFormat=function(t,e){return void 0===e&&(e={}),this.isValid?et.create(this.loc.redefaultToEN(e)).formatDateTimeFromString(this,t):ik}/**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */,e.toLocaleString=function(t,e){return void 0===t&&(t=S),void 0===e&&(e={}),this.isValid?et.create(this.loc.clone(e),t).formatDateTime(this):ik}/**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */,e.toLocaleParts=function(t){return void 0===t&&(t={}),this.isValid?et.create(this.loc.clone(t),t).formatDateTimeParts(this):[]}/**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @return {string}
   */,e.toISO=function(t){var e=void 0===t?{}:t,i=e.format,n=e.suppressSeconds,r=void 0!==n&&n,s=e.suppressMilliseconds,a=void 0!==s&&s,o=e.includeOffset,l=void 0===o||o,h=e.extendedZone,u=void 0!==h&&h;if(!this.isValid)return null;var c="extended"===(void 0===i?"extended":i);return iA(this,c)+"T"+iI(this,c,r,a,l,u)}/**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @return {string}
   */,e.toISODate=function(t){var e=(void 0===t?{}:t).format,i=void 0===e?"extended":e;return this.isValid?iA(this,"extended"===i):null}/**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */,e.toISOWeekDate=function(){return iP(this,"kkkk-'W'WW-c")}/**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @return {string}
   */,e.toISOTime=function(t){var e=void 0===t?{}:t,i=e.suppressMilliseconds,n=void 0!==i&&i,r=e.suppressSeconds,s=void 0!==r&&r,a=e.includeOffset,o=void 0===a||a,l=e.includePrefix,h=e.extendedZone,u=void 0!==h&&h,c=e.format,d=void 0===c?"extended":c;return this.isValid?(void 0!==l&&l?"T":"")+iI(this,"extended"===d,s,n,o,u):null}/**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */,e.toRFC2822=function(){return iP(this,"EEE, dd LLL yyyy HH:mm:ss ZZZ",!1)}/**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */,e.toHTTP=function(){return iP(this.toUTC(),"EEE, dd LLL yyyy HH:mm:ss 'GMT'")}/**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string}
   */,e.toSQLDate=function(){return this.isValid?iA(this,!0):null}/**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */,e.toSQLTime=function(t){var e=void 0===t?{}:t,i=e.includeOffset,n=void 0===i||i,r=e.includeZone,s=void 0!==r&&r,a=e.includeOffsetSpace,o="HH:mm:ss.SSS";return(s||n)&&((void 0===a||a)&&(o+=" "),s?o+="z":n&&(o+="ZZ")),iP(this,o,!0)}/**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */,e.toSQL=function(t){return(void 0===t&&(t={}),this.isValid)?this.toSQLDate()+" "+this.toSQLTime(t):null}/**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */,e.toString=function(){return this.isValid?this.toISO():ik}/**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */,e.valueOf=function(){return this.toMillis()}/**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */,e.toMillis=function(){return this.isValid?this.ts:NaN}/**
   * Returns the epoch seconds of this DateTime.
   * @return {number}
   */,e.toSeconds=function(){return this.isValid?this.ts/1e3:NaN}/**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */,e.toUnixInteger=function(){return this.isValid?Math.floor(this.ts/1e3):NaN}/**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */,e.toJSON=function(){return this.toISO()}/**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */,e.toBSON=function(){return this.toJSDate()}/**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */,e.toObject=function(t){if(void 0===t&&(t={}),!this.isValid)return{};var e=s({},this.c);return t.includeConfig&&(e.outputCalendar=this.outputCalendar,e.numberingSystem=this.loc.numberingSystem,e.locale=this.loc.locale),e}/**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */,e.toJSDate=function(){return new Date(this.isValid?this.ts:NaN)}/**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */,e.diff=function(t,e,i){if(void 0===e&&(e="milliseconds"),void 0===i&&(i={}),!this.isValid||!t.isValid)return eG.invalid("created by diffing an invalid DateTime");var n,r,a,o,l,h,u,c,d,f,p,m,g=s({locale:this.locale,numberingSystem:this.numberingSystem},i),b=(Array.isArray(n=e)?n:[n]).map(eG.normalizeUnit),v=t.valueOf()>this.valueOf(),y=(h=(l=function(t,e,i){/* This loop tries to diff using larger units first.
     If we overshoot, we backtrack and try the next smaller unit.
     "cursor" starts out at the earlier timestamp and moves closer and closer to "later"
     as we use smaller and smaller units.
     highWater keeps track of where we would be if we added one more of the smallest unit,
     this is used later to potentially convert any difference smaller than the smallest higher order unit
     into a fraction of that smallest higher order unit
  */for(var n,r,s=[["years",function(t,e){return e.year-t.year}],["quarters",function(t,e){return e.quarter-t.quarter+(e.year-t.year)*4}],["months",function(t,e){return e.month-t.month+(e.year-t.year)*12}],["weeks",function(t,e){var i=e2(t,e);return(i-i%7)/7}],["days",e2]],a={},o=t,l=0;l<s.length;l++){var h=s[l],u=h[0],c=h[1];i.indexOf(u)>=0&&(n=u,a[u]=c(t,e),(r=o.plus(a))>e?(// we overshot the end point, backtrack cursor by 1
a[u]--,(t=o.plus(a))>e&&(// keep the "overshot by 1" around as highWater
r=t,// backtrack cursor by 1
a[u]--,t=o.plus(a))):t=r)}return[t,a,r,n]}(v?this:t,r=v?t:this,b))[0],u=l[1],c=l[2],d=l[3],f=r-h,0===(p=b.filter(function(t){return["hours","minutes","seconds","milliseconds"].indexOf(t)>=0})).length&&(c<r&&(c=h.plus(((a={})[d]=1,a))),c!==h&&(u[d]=(u[d]||0)+f/(c-h))),m=eG.fromObject(u,g),p.length>0?(o=eG.fromMillis(f,g)).shiftTo.apply(o,p).plus(m):m);return v?y.negate():y}/**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */,e.diffNow=function(e,i){return void 0===e&&(e="milliseconds"),void 0===i&&(i={}),this.diff(t.now(),e,i)}/**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval}
   */,e.until=function(t){return this.isValid?e0.fromDateTimes(this,t):this}/**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */,e.hasSame=function(t,e){if(!this.isValid)return!1;var i=t.valueOf(),n=this.setZone(t.zone,{keepLocalTime:!0});return n.startOf(e)<=i&&i<=n.endOf(e)}/**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */,e.equals=function(t){return this.isValid&&t.isValid&&this.valueOf()===t.valueOf()&&this.zone.equals(t.zone)&&this.loc.equals(t.loc)}/**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds down by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */,e.toRelative=function(e){if(void 0===e&&(e={}),!this.isValid)return null;var i=e.base||t.fromObject({},{zone:this.zone}),n=e.padding?this<i?-e.padding:e.padding:0,r=["years","months","days","hours","minutes","seconds"],a=e.unit;return Array.isArray(e.unit)&&(r=e.unit,a=void 0),iH(i,this.plus(n),s({},e,{numeric:"always",units:r,unit:a}))}/**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */,e.toRelativeCalendar=function(e){return(void 0===e&&(e={}),this.isValid)?iH(e.base||t.fromObject({},{zone:this.zone}),this,s({},e,{numeric:"auto",units:["years","months","days"],calendary:!0})):null}/**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */,t.min=function(){for(var e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];if(!i.every(t.isDateTime))throw new x("min requires all arguments be DateTimes");return tD(i,function(t){return t.valueOf()},Math.min)}/**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */,t.max=function(){for(var e=arguments.length,i=Array(e),n=0;n<e;n++)i[n]=arguments[n];if(!i.every(t.isDateTime))throw new x("max requires all arguments be DateTimes");return tD(i,function(t){return t.valueOf()},Math.max)}/**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */,t.fromFormatExplain=function(t,e,i){void 0===i&&(i={});var n=i,r=n.locale,s=n.numberingSystem;return ih(td.fromOpts({locale:void 0===r?null:r,numberingSystem:void 0===s?null:s,defaultToEN:!0}),t,e)}/**
   * @deprecated use fromFormatExplain instead
   */,t.fromStringExplain=function(e,i,n){return void 0===n&&(n={}),t.fromFormatExplain(e,i,n)}/**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */,r(t,[{key:"isValid",get:function(){return null===this.invalid}},{key:"invalidReason",get:function(){return this.invalid?this.invalid.reason:null}},{key:"invalidExplanation",get:function(){return this.invalid?this.invalid.explanation:null}},{key:"locale",get:function(){return this.isValid?this.loc.locale:null}},{key:"numberingSystem",get:function(){return this.isValid?this.loc.numberingSystem:null}},{key:"outputCalendar",get:function(){return this.isValid?this.loc.outputCalendar:null}},{key:"zone",get:function(){return this._zone}},{key:"zoneName",get:function(){return this.isValid?this.zone.name:null}},{key:"year",get:function(){return this.isValid?this.c.year:NaN}},{key:"quarter",get:function(){return this.isValid?Math.ceil(this.c.month/3):NaN}},{key:"month",get:function(){return this.isValid?this.c.month:NaN}},{key:"day",get:function(){return this.isValid?this.c.day:NaN}},{key:"hour",get:function(){return this.isValid?this.c.hour:NaN}},{key:"minute",get:function(){return this.isValid?this.c.minute:NaN}},{key:"second",get:function(){return this.isValid?this.c.second:NaN}},{key:"millisecond",get:function(){return this.isValid?this.c.millisecond:NaN}},{key:"weekYear",get:function(){return this.isValid?iS(this).weekYear:NaN}},{key:"weekNumber",get:function(){return this.isValid?iS(this).weekNumber:NaN}},{key:"weekday",get:function(){return this.isValid?iS(this).weekday:NaN}},{key:"ordinal",get:function(){return this.isValid?iy(this.c).ordinal:NaN}},{key:"monthShort",get:function(){return this.isValid?e1.months("short",{locObj:this.loc})[this.month-1]:null}},{key:"monthLong",get:function(){return this.isValid?e1.months("long",{locObj:this.loc})[this.month-1]:null}},{key:"weekdayShort",get:function(){return this.isValid?e1.weekdays("short",{locObj:this.loc})[this.weekday-1]:null}},{key:"weekdayLong",get:function(){return this.isValid?e1.weekdays("long",{locObj:this.loc})[this.weekday-1]:null}},{key:"offset",get:function(){return this.isValid?+this.o:NaN}},{key:"offsetNameShort",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"short",locale:this.locale}):null}},{key:"offsetNameLong",get:function(){return this.isValid?this.zone.offsetName(this.ts,{format:"long",locale:this.locale}):null}},{key:"isOffsetFixed",get:function(){return this.isValid?this.zone.isUniversal:null}},{key:"isInDST",get:function(){return!this.isOffsetFixed&&(this.offset>this.set({month:1,day:1}).offset||this.offset>this.set({month:5}).offset)}},{key:"isInLeapYear",get:function(){return tF(this.year)}},{key:"daysInMonth",get:function(){return tz(this.year,this.month)}},{key:"daysInYear",get:function(){return this.isValid?tN(this.year):NaN}},{key:"weeksInWeekYear",get:function(){return this.isValid?tV(this.weekYear):NaN}}],[{key:"DATE_SHORT",get:function(){return S}},{key:"DATE_MED",get:function(){return T}},{key:"DATE_MED_WITH_WEEKDAY",get:function(){return C}},{key:"DATE_FULL",get:function(){return O}},{key:"DATE_HUGE",get:function(){return D}},{key:"TIME_SIMPLE",get:function(){return E}},{key:"TIME_WITH_SECONDS",get:function(){return P}},{key:"TIME_WITH_SHORT_OFFSET",get:function(){return A}},{key:"TIME_WITH_LONG_OFFSET",get:function(){return I}},{key:"TIME_24_SIMPLE",get:function(){return L}},{key:"TIME_24_WITH_SECONDS",get:function(){return $}},{key:"TIME_24_WITH_SHORT_OFFSET",get:function(){return R}},{key:"TIME_24_WITH_LONG_OFFSET",get:function(){return F}},{key:"DATETIME_SHORT",get:function(){return N}},{key:"DATETIME_SHORT_WITH_SECONDS",get:function(){return z}},{key:"DATETIME_MED",get:function(){return j}},{key:"DATETIME_MED_WITH_SECONDS",get:function(){return V}},{key:"DATETIME_MED_WITH_WEEKDAY",get:function(){return H}},{key:"DATETIME_FULL",get:function(){return B}},{key:"DATETIME_FULL_WITH_SECONDS",get:function(){return W}},{key:"DATETIME_HUGE",get:function(){return U}},{key:"DATETIME_HUGE_WITH_SECONDS",get:function(){return q}}]),t}();function iU(t){if(iW.isDateTime(t))return t;if(t&&t.valueOf&&tT(t.valueOf()))return iW.fromJSDate(t);if(t&&"object"==typeof t)return iW.fromObject(t);throw new x("Unknown datetime argument: "+t+", of type "+typeof t)}i.DateTime=iW,i.Duration=eG,i.FixedOffsetZone=tp,i.IANAZone=Q,i.Info=e1,i.Interval=e0,i.InvalidZone=tm,i.Settings=tM,i.SystemZone=X,i.VERSION="3.4.3",i.Zone=Z},{}],cT5Ad:[function(t,e,i){/*!
* chartjs-plugin-zoom v2.0.1
* undefined
 * (c) 2016-2023 chartjs-plugin-zoom Contributors
 * Released under the MIT License
 */var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i),n.export(i,"default",()=>X),n.export(i,"pan",()=>L),n.export(i,"resetZoom",()=>A),n.export(i,"zoom",()=>D),n.export(i,"zoomRect",()=>E),n.export(i,"zoomScale",()=>P);var r=t("hammerjs"),s=n.interopDefault(r),a=t("chart.js/helpers");let o=t=>t&&t.enabled&&t.modifierKey,l=(t,e)=>t&&e[t+"Key"],h=(t,e)=>t&&!e[t+"Key"];/**
 * @param {string|function} mode can be 'x', 'y' or 'xy'
 * @param {string} dir can be 'x' or 'y'
 * @param {import('chart.js').Chart} chart instance of the chart in question
 * @returns {boolean}
 */function u(t,e,i){return void 0===t||("string"==typeof t?-1!==t.indexOf(e):"function"==typeof t&&-1!==t({chart:i}).indexOf(e))}function c(t,e){return("function"==typeof t&&(t=t({chart:e})),"string"==typeof t)?{x:-1!==t.indexOf("x"),y:-1!==t.indexOf("y")}:{x:!1,y:!1}}/**
 * Evaluate the chart's mode, scaleMode, and overScaleMode properties to
 * determine which axes are eligible for scaling.
 * options.overScaleMode can be a function if user want zoom only one scale of many for example.
 * @param options - Zoom or pan options
 * @param {{x: number, y: number}} point - the mouse location
 * @param {import('chart.js').Chart} [chart] instance of the chart in question
 * @return {import('chart.js').Scale[]}
 */function d(t,e,i){let{mode:n="xy",scaleMode:r,overScaleMode:s}=t||{},o=/**
 * Checks which axis is under the mouse cursor.
 * @param {{x: number, y: number}} point - the mouse location
 * @param {import('chart.js').Chart} [chart] instance of the chart in question
 * @return {import('chart.js').Scale}
 */function({x:t,y:e},i){let n=i.scales,r=Object.keys(n);for(let i=0;i<r.length;i++){let s=n[r[i]];if(e>=s.top&&e<=s.bottom&&t>=s.left&&t<=s.right)return s}return null}(e,i),l=c(n,i),h=c(r,i);// Convert deprecated overScaleEnabled to new scaleEnabled.
if(s){let t=c(s,i);for(let e of["x","y"])t[e]&&(h[e]=l[e],l[e]=!1)}if(o&&h[o.axis])return[o];let u=[];return(0,a.each)(i.scales,function(t){l[t.axis]&&u.push(t)}),u}let f=new WeakMap;function p(t){let e=f.get(t);return e||(e={originalScaleLimits:{},updatedScaleLimits:{},handlers:{},panDelta:{}},f.set(t,e)),e}function m(t,e,i){let n=t.max-t.min,r=n*(e-1),s=t.isHorizontal()?i.x:i.y,a=Math.max(0,Math.min(1,(t.getValueForPixel(s)-t.min)/n||0));return{min:r*a,max:r*(1-a)}}function g(t,e,i,n,r){let s=i[n];if("original"===s){let i=t.originalScaleLimits[e.id][n];s=(0,a.valueOrDefault)(i.options,i.scale)}return(0,a.valueOrDefault)(s,r)}function b(t,{min:e,max:i},n,r=!1){let s=p(t.chart),{id:a,axis:o,options:l}=t,h=n&&(n[a]||n[o])||{},{minRange:u=0}=h,c=g(s,t,h,"min",-1/0),d=g(s,t,h,"max",1/0),f=r?Math.max(i-e,u):t.max-t.min,m=(f-i+e)/2;// return true if the scale range is changed
return e-=m,i+=m,e<c?(e=c,i=Math.min(c+f,d)):i>d&&(i=d,e=Math.max(d-f,c)),l.min=e,l.max=i,s.updatedScaleLimits[t.id]={min:e,max:i},t.parse(e)!==t.min||t.parse(i)!==t.max}let v=t=>0===t||isNaN(t)?0:t<0?Math.min(Math.round(t),-1):Math.max(Math.round(t),1),y={second:500,minute:3e4,hour:18e5,day:432e5,week:3024e5,month:1296e6,quarter:5184e6,year:157248e5// 182 d
};function x(t,e,i,n=!1){let{min:r,max:s,options:a}=t,o=a.time&&a.time.round,l=y[o]||0,h=t.getValueForPixel(t.getPixelForValue(r+l)-e),u=t.getValueForPixel(t.getPixelForValue(s+l)-e),{min:c=-1/0,max:d=1/0}=n&&i&&i[t.axis]||{};return!!(isNaN(h)||isNaN(u))||h<c||u>d||b(t,{min:h,max:u},i,n)}function _(t,e,i){return x(t,e,i,!0)}let w={category:function(t,e,i,n){let r=m(t,e,i);t.min===t.max&&e<1&&function(t){let e=t.getLabels(),i=e.length-1;t.min>0&&(t.min-=1),t.max<i&&(t.max+=1)}(t);let s={min:t.min+v(r.min),max:t.max-v(r.max)};return b(t,s,n,!0)},default:function(t,e,i,n){let r=m(t,e,i),s={min:t.min+r.min,max:t.max-r.max};return b(t,s,n,!0)}},k={default:function(t,e,i,n){b(t,function(t,e,i){let n=t.getValueForPixel(e),r=t.getValueForPixel(i);return{min:Math.min(n,r),max:Math.max(n,r)}}(t,e,i),n,!0)}},M={category:function(t,e,i){let n;let r=t.getLabels(),s=r.length-1,{min:a,max:o}=t,l=Math.max(o-a,1),h=Math.round((t.isHorizontal()?t.width:t.height)/Math.max(l,10)),u=Math.round(Math.abs(e/h));return e<-h?(o=Math.min(o+u,s),a=1===l?o:o-l,n=o===s):e>h&&(a=Math.max(0,a-u),o=1===l?a:a+l,n=0===a),b(t,{min:a,max:o},i)||n},default:x,logarithmic:_,timeseries:_};function S(t,e){(0,a.each)(t,(i,n)=>{e[n]||delete t[n]})}function T(t,e){let{scales:i}=t,{originalScaleLimits:n,updatedScaleLimits:r}=e;return(0,a.each)(i,function(t){(function(t,e,i){let{id:n,options:{min:r,max:s}}=t;if(!e[n]||!i[n])return!0;let a=i[n];return a.min!==r||a.max!==s})(t,n,r)&&(n[t.id]={min:{scale:t.min,options:t.options.min},max:{scale:t.max,options:t.options.max}})}),S(n,i),S(r,i),n}function C(t,e,i,n){let r=w[t.type]||w.default;(0,a.callback)(r,[t,e,i,n])}function O(t,e,i,n,r){let s=k[t.type]||k.default;(0,a.callback)(s,[t,e,i,n,r])}/**
 * @param chart The chart instance
 * @param {number | {x?: number, y?: number, focalPoint?: {x: number, y: number}}} amount The zoom percentage or percentages and focal point
 * @param {string} [transition] Which transition mode to use. Defaults to 'none'
 */function D(t,e,i="none"){let{x:n=1,y:r=1,focalPoint:s=function(t){let e=t.chartArea;return{x:(e.left+e.right)/2,y:(e.top+e.bottom)/2}}(t)}="number"==typeof e?{x:e,y:e}:e,o=p(t),{options:{limits:l,zoom:h}}=o;T(t,o);let u=1!==n,c=1!==r,f=d(h,s,t);(0,a.each)(f||t.scales,function(t){t.isHorizontal()&&u?C(t,n,s,l):!t.isHorizontal()&&c&&C(t,r,s,l)}),t.update(i),(0,a.callback)(h.onZoom,[{chart:t}])}function E(t,e,i,n="none"){let r=p(t),{options:{limits:s,zoom:o}}=r,{mode:l="xy"}=o;T(t,r);let h=u(l,"x",t),c=u(l,"y",t);(0,a.each)(t.scales,function(t){t.isHorizontal()&&h?O(t,e.x,i.x,s):!t.isHorizontal()&&c&&O(t,e.y,i.y,s)}),t.update(n),(0,a.callback)(o.onZoom,[{chart:t}])}function P(t,e,i,n="none"){T(t,p(t));let r=t.scales[e];b(r,i,void 0,!0),t.update(n)}function A(t,e="default"){let i=p(t),n=T(t,i);(0,a.each)(t.scales,function(t){let e=t.options;n[t.id]?(e.min=n[t.id].min.options,e.max=n[t.id].max.options):(delete e.min,delete e.max)}),t.update(e),(0,a.callback)(i.options.zoom.onZoomComplete,[{chart:t}])}function I(t,e,i,n){let{panDelta:r}=n,s=r[t.id]||0;(0,a.sign)(s)===(0,a.sign)(e)&&(e+=s);let o=M[t.type]||M.default;(0,a.callback)(o,[t,e,i])?r[t.id]=0:r[t.id]=e}function L(t,e,i,n="none"){let{x:r=0,y:s=0}="number"==typeof e?{x:e,y:e}:e,o=p(t),{options:{pan:l,limits:h}}=o,{onPan:u}=l||{};T(t,o);let c=0!==r,d=0!==s;(0,a.each)(i||t.scales,function(t){t.isHorizontal()&&c?I(t,r,h,o):!t.isHorizontal()&&d&&I(t,s,h,o)}),t.update(n),(0,a.callback)(u,[{chart:t}])}function $(t){let e=p(t);T(t,e);let i={};for(let n of Object.keys(t.scales)){let{min:t,max:r}=e.originalScaleLimits[n]||{min:{},max:{}};i[n]={min:t.scale,max:r.scale}}return i}function R(t,e){let{handlers:i}=p(t),n=i[e];n&&n.target&&(n.target.removeEventListener(e,n),delete i[e])}function F(t,e,i,n){let{handlers:r,options:s}=p(t),a=r[i];a&&a.target===e||(R(t,i),r[i]=e=>n(t,e,s),r[i].target=e,e.addEventListener(i,r[i]))}function N(t,e){let i=p(t);i.dragStart&&(i.dragging=!0,i.dragEnd=e,t.update("none"))}function z(t,e){let i=p(t);i.dragStart&&"Escape"===e.key&&(R(t,"keydown"),i.dragging=!1,i.dragStart=i.dragEnd=null,t.update("none"))}function j(t,e,i){let{onZoomStart:n,onZoomRejected:r}=i;if(n){let i=(0,a.getRelativePosition)(e,t);if(!1===(0,a.callback)(n,[{chart:t,event:e,point:i}]))return(0,a.callback)(r,[{chart:t,event:e}]),!1}}function V(t,e){let i=p(t),{pan:n,zoom:r={}}=i.options;if(0!==e.button||l(o(n),e)||h(o(r.drag),e))return(0,a.callback)(r.onZoomRejected,[{chart:t,event:e}]);!1!==j(t,e,r)&&(i.dragStart=e,F(t,t.canvas,"mousemove",N),F(t,window.document,"keydown",z))}function H(t,e,i,n){let r=u(e,"x",t),s=u(e,"y",t),{top:o,left:l,right:h,bottom:c,width:d,height:f}=t.chartArea,p=(0,a.getRelativePosition)(i,t),m=(0,a.getRelativePosition)(n,t);r&&(l=Math.min(p.x,m.x),h=Math.max(p.x,m.x)),s&&(o=Math.min(p.y,m.y),c=Math.max(p.y,m.y));let g=h-l,b=c-o;return{left:l,top:o,right:h,bottom:c,width:g,height:b,zoomX:r&&g?1+(d-g)/d:1,zoomY:s&&b?1+(f-b)/f:1}}function B(t,e){let i=p(t);if(!i.dragStart)return;R(t,"mousemove");let{mode:n,onZoomComplete:r,drag:{threshold:s=0}}=i.options.zoom,o=H(t,n,i.dragStart,e),l=u(n,"x",t)?o.width:0,h=u(n,"y",t)?o.height:0;if(// Remove drag start and end before chart update to stop drawing selected area
i.dragStart=i.dragEnd=null,Math.sqrt(l*l+h*h)<=s){i.dragging=!1,t.update("none");return}E(t,{x:o.left,y:o.top},{x:o.right,y:o.bottom},"zoom"),setTimeout(()=>i.dragging=!1,500),(0,a.callback)(r,[{chart:t}])}function W(t,e){let{handlers:{onZoomComplete:i},options:{zoom:n}}=p(t);if(!function(t,e,i){// Before preventDefault, check if the modifier key required and pressed
if(h(o(i.wheel),e)){(0,a.callback)(i.onZoomRejected,[{chart:t,event:e}]);return}if(!1!==j(t,e,i)&&(e.cancelable&&e.preventDefault(),void 0!==e.deltaY))return!0}(t,e,n))return;let r=e.target.getBoundingClientRect(),s=1+(e.deltaY>=0?-n.wheel.speed:n.wheel.speed),l={x:s,y:s,focalPoint:{x:e.clientX-r.left,y:e.clientY-r.top}};D(t,l),i&&i()}function U(t,e,i){if(e.scale){let{center:n,pointers:r}=i,s=1/e.scale*i.scale,a=i.target.getBoundingClientRect(),o=function(t,e){let i,n;// fingers position difference
let r=Math.abs(t.clientX-e.clientX),s=Math.abs(t.clientY-e.clientY),a=r/s;return a>.3&&a<1.7?i=n=!0:r>s?i=!0:n=!0,{x:i,y:n}}(r[0],r[1]),l=e.options.zoom.mode,h={x:o.x&&u(l,"x",t)?s:1,y:o.y&&u(l,"y",t)?s:1,focalPoint:{x:n.x-a.left,y:n.y-a.top}};D(t,h),// Keep track of overall scale
e.scale=i.scale}}function q(t,e,i){let n=e.delta;n&&(e.panning=!0,L(t,{x:i.deltaX-n.x,y:i.deltaY-n.y},e.panScales),e.delta={x:i.deltaX,y:i.deltaY})}let Z=new WeakMap;function Y(t,e,i){let n=i.zoom.drag,{dragStart:r,dragEnd:s}=p(t);if(n.drawTime!==e||!s)return;let{left:a,top:o,width:l,height:h}=H(t,i.zoom.mode,r,s),u=t.ctx;u.save(),u.beginPath(),u.fillStyle=n.backgroundColor||"rgba(225,225,225,0.3)",u.fillRect(a,o,l,h),n.borderWidth>0&&(u.lineWidth=n.borderWidth,u.strokeStyle=n.borderColor||"rgba(225,225,225)",u.strokeRect(a,o,l,h)),u.restore()}var X={id:"zoom",version:"2.0.1",defaults:{pan:{enabled:!1,mode:"xy",threshold:10,modifierKey:null},zoom:{wheel:{enabled:!1,speed:.1,modifierKey:null},drag:{enabled:!1,drawTime:"beforeDatasetsDraw",modifierKey:null},pinch:{enabled:!1},mode:"xy"}},start:function(t,e,i){let n=p(t);n.options=i,Object.prototype.hasOwnProperty.call(i.zoom,"enabled")&&console.warn("The option `zoom.enabled` is no longer supported. Please use `zoom.wheel.enabled`, `zoom.drag.enabled`, or `zoom.pinch.enabled`."),(Object.prototype.hasOwnProperty.call(i.zoom,"overScaleMode")||Object.prototype.hasOwnProperty.call(i.pan,"overScaleMode"))&&console.warn("The option `overScaleMode` is deprecated. Please use `scaleMode` instead (and update `mode` as desired)."),s.default&&function(t,e){let i=p(t),n=t.canvas,{pan:r,zoom:u}=e,c=new s.default.Manager(n);u&&u.pinch.enabled&&(c.add(new s.default.Pinch),c.on("pinchstart",()=>{i.options.zoom.pinch.enabled&&(i.scale=1)}),c.on("pinch",e=>U(t,i,e)),c.on("pinchend",e=>{i.scale&&(U(t,i,e),i.scale=null,(0,a.callback)(i.options.zoom.onZoomComplete,[{chart:t}]))})),r&&r.enabled&&(c.add(new s.default.Pan({threshold:r.threshold,enable:function(e,n){let{pan:r,zoom:s={}}=i.options;if(!r||!r.enabled)return!1;let u=n&&n.srcEvent;return!u||!(!i.panning&&"mouse"===n.pointerType&&(h(o(r),u)||l(o(s.drag),u)))||((0,a.callback)(r.onPanRejected,[{chart:t,event:n}]),!1)}})),c.on("panstart",e=>(function(t,e,i){let{enabled:n,onPanStart:r,onPanRejected:s}=e.options.pan;if(!n)return;let o=i.target.getBoundingClientRect(),l={x:i.center.x-o.left,y:i.center.y-o.top};if(!1===(0,a.callback)(r,[{chart:t,event:i,point:l}]))return(0,a.callback)(s,[{chart:t,event:i}]);e.panScales=d(e.options.pan,l,t),e.delta={x:0,y:0},clearTimeout(e.panEndTimeout),q(t,e,i)})(t,i,e)),c.on("panmove",e=>q(t,i,e)),c.on("panend",()=>{i.delta=null,i.panning&&(i.panEndTimeout=setTimeout(()=>i.panning=!1,500),(0,a.callback)(i.options.pan.onPanComplete,[{chart:t}]))})),Z.set(t,c)}(t,i),t.pan=(e,i,n)=>L(t,e,i,n),t.zoom=(e,i)=>D(t,e,i),t.zoomRect=(e,i,n)=>E(t,e,i,n),t.zoomScale=(e,i,n)=>P(t,e,i,n),t.resetZoom=e=>A(t,e),t.getZoomLevel=()=>(function(t){let e=p(t),i=1,n=1;return(0,a.each)(t.scales,function(t){let r=function(t,e){let i=t.originalScaleLimits[e];if(!i)return;let{min:n,max:r}=i;return(0,a.valueOrDefault)(r.options,r.scale)-(0,a.valueOrDefault)(n.options,n.scale)}(e,t.id);if(r){let e=Math.round(r/(t.max-t.min)*100)/100;i=Math.min(i,e),n=Math.max(n,e)}}),i<1?i:n})(t),t.getInitialScaleBounds=()=>$(t),t.isZoomedOrPanned=()=>(function(t){let e=$(t);for(let i of Object.keys(t.scales)){let{min:n,max:r}=e[i];if(void 0!==n&&t.scales[i].min!==n||void 0!==r&&t.scales[i].max!==r)return!0}return!1})(t)},beforeEvent(t){let e=p(t);if(e.panning||e.dragging)return!1},beforeUpdate:function(t,e,i){let n=p(t);n.options=i,function(t,e){let i=t.canvas,{wheel:n,drag:r,onZoomComplete:s}=e.zoom;n.enabled?(F(t,i,"wheel",W),function(t,e,i,n){if(i){var r;let n;p(t).handlers[e]=(r=()=>(0,a.callback)(i,[{chart:t}]),function(){return clearTimeout(n),n=setTimeout(r,250),250})}}(t,"onZoomComplete",s,0)):R(t,"wheel"),r.enabled?(F(t,i,"mousedown",V),F(t,i.ownerDocument,"mouseup",B)):(R(t,"mousedown"),R(t,"mousemove"),R(t,"mouseup"),R(t,"keydown"))}(t,i)},beforeDatasetsDraw(t,e,i){Y(t,"beforeDatasetsDraw",i)},afterDatasetsDraw(t,e,i){Y(t,"afterDatasetsDraw",i)},beforeDraw(t,e,i){Y(t,"beforeDraw",i)},afterDraw(t,e,i){Y(t,"afterDraw",i)},stop:function(t){R(t,"mousedown"),R(t,"mousemove"),R(t,"mouseup"),R(t,"wheel"),R(t,"click"),R(t,"keydown"),s.default&&function(t){let e=Z.get(t);e&&(e.remove("pinchstart"),e.remove("pinch"),e.remove("pinchend"),e.remove("panstart"),e.remove("pan"),e.remove("panend"),e.destroy(),Z.delete(t))}(t),f.delete(t)},panFunctions:M,zoomFunctions:w,zoomRectFunctions:k}},{hammerjs:"2smD5","chart.js/helpers":"11Eiz","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"2smD5":[function(t,e,i){!/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */function(t,i,n,r){var s,a=["","webkit","Moz","MS","ms","o"],o=i.createElement("div"),l=Math.round,h=Math.abs,u=Date.now;/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */function c(t,e,i){return setTimeout(v(t,i),e)}/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */function d(t,e,i){return!!Array.isArray(t)&&(f(t,i[e],i),!0)}/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */function f(t,e,i){var n;if(t){if(t.forEach)t.forEach(e,i);else if(t.length!==r)for(n=0;n<t.length;)e.call(i,t[n],n,t),n++;else for(n in t)t.hasOwnProperty(n)&&e.call(i,t[n],n,t)}}/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */function p(e,i,n){var r="DEPRECATED METHOD: "+i+"\n"+n+" AT \n";return function(){var i=Error("get-stack-trace"),n=i&&i.stack?i.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",s=t.console&&(t.console.warn||t.console.log);return s&&s.call(t.console,r,n),e.apply(this,arguments)}}s="function"!=typeof Object.assign?function(t){if(t===r||null===t)throw TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var n=arguments[i];if(n!==r&&null!==n)for(var s in n)n.hasOwnProperty(s)&&(e[s]=n[s])}return e}:Object.assign;/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */var m=p(function(t,e,i){for(var n=Object.keys(e),s=0;s<n.length;)(!i||i&&t[n[s]]===r)&&(t[n[s]]=e[n[s]]),s++;return t},"extend","Use `assign`."),g=p(function(t,e){return m(t,e,!0)},"merge","Use `assign`.");/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */function b(t,e,i){var n,r=e.prototype;(n=t.prototype=Object.create(r)).constructor=t,n._super=r,i&&s(n,i)}/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */function v(t,e){return function(){return t.apply(e,arguments)}}/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */function y(t,e){return"function"==typeof t?t.apply(e&&e[0]||r,e):t}/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */function x(t,e,i){f(M(e),function(e){t.addEventListener(e,i,!1)})}/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */function _(t,e,i){f(M(e),function(e){t.removeEventListener(e,i,!1)})}/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */function w(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */function k(t,e){return t.indexOf(e)>-1}/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */function M(t){return t.trim().split(/\s+/g)}/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */function S(t,e,i){if(t.indexOf&&!i)return t.indexOf(e);for(var n=0;n<t.length;){if(i&&t[n][i]==e||!i&&t[n]===e)return n;n++}return -1}/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */function T(t){return Array.prototype.slice.call(t,0)}/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */function C(t,e,i){for(var n=[],r=[],s=0;s<t.length;){var a=e?t[s][e]:t[s];0>S(r,a)&&n.push(t[s]),r[s]=a,s++}return i&&(n=e?n.sort(function(t,i){return t[e]>i[e]}):n.sort()),n}/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */function O(t,e){for(var i,n,s=e[0].toUpperCase()+e.slice(1),o=0;o<a.length;){if((n=(i=a[o])?i+s:e)in t)return n;o++}return r}/**
 * get a unique id
 * @returns {number} uniqueId
 */var D=1;/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */function E(e){var i=e.ownerDocument||e;return i.defaultView||i.parentWindow||t}var P="ontouchstart"in t,A=O(t,"PointerEvent")!==r,I=P&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),L="touch",$="mouse",R=["x","y"],F=["clientX","clientY"];/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */function N(t,e){var i=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,// smaller wrapper around the handler, for the scope and the enabled state of the manager,
// so when disabled the input events are completely bypassed.
this.domHandler=function(e){y(t.options.enable,[t])&&i.handler(e)},this.init()}/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */function z(t,e,i){var n,s,a,o,l,c,d,f,p,m,g,b,v,y,x,_=i.pointers.length,k=i.changedPointers.length,M=1&e&&_-k==0,S=12&e&&_-k==0;i.isFirst=!!M,i.isFinal=!!S,M&&(t.session={}),// source event is the normalized value of the domEvents
// like 'touchstart, mouseup, pointerdown'
i.eventType=e,n=t.session,a=(s=i.pointers).length,n.firstInput||(n.firstInput=j(i)),a>1&&!n.firstMultiple?n.firstMultiple=j(i):1===a&&(n.firstMultiple=!1),o=n.firstInput,c=(l=n.firstMultiple)?l.center:o.center,d=i.center=V(s),i.timeStamp=u(),i.deltaTime=i.timeStamp-o.timeStamp,i.angle=U(c,d),i.distance=W(c,d),f=i.center,p=n.offsetDelta||{},m=n.prevDelta||{},g=n.prevInput||{},(1===i.eventType||4===g.eventType)&&(m=n.prevDelta={x:g.deltaX||0,y:g.deltaY||0},p=n.offsetDelta={x:f.x,y:f.y}),i.deltaX=m.x+(f.x-p.x),i.deltaY=m.y+(f.y-p.y),i.offsetDirection=B(i.deltaX,i.deltaY),b=H(i.deltaTime,i.deltaX,i.deltaY),i.overallVelocityX=b.x,i.overallVelocityY=b.y,i.overallVelocity=h(b.x)>h(b.y)?b.x:b.y,i.scale=l?(v=l.pointers,W(s[0],s[1],F)/W(v[0],v[1],F)):1,i.rotation=l?(y=l.pointers,U(s[1],s[0],F)+U(y[1],y[0],F)):0,i.maxPointers=n.prevInput?i.pointers.length>n.prevInput.maxPointers?i.pointers.length:n.prevInput.maxPointers:i.pointers.length,/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */function(t,e){var i,n,s,a,o=t.lastInterval||e,l=e.timeStamp-o.timeStamp;if(8!=e.eventType&&(l>25||o.velocity===r)){var u=e.deltaX-o.deltaX,c=e.deltaY-o.deltaY,d=H(l,u,c);n=d.x,s=d.y,i=h(d.x)>h(d.y)?d.x:d.y,a=B(u,c),t.lastInterval=e}else // use latest velocity info if it doesn't overtake a minimum period
i=o.velocity,n=o.velocityX,s=o.velocityY,a=o.direction;e.velocity=i,e.velocityX=n,e.velocityY=s,e.direction=a}(n,i),x=t.element,w(i.srcEvent.target,x)&&(x=i.srcEvent.target),i.target=x,// emit secret event
t.emit("hammer.input",i),t.recognize(i),t.session.prevInput=i}/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */function j(t){for(// make a simple copy of the pointers because we will get a reference if we don't
// we only need clientXY for the calculations
var e=[],i=0;i<t.pointers.length;)e[i]={clientX:l(t.pointers[i].clientX),clientY:l(t.pointers[i].clientY)},i++;return{timeStamp:u(),pointers:e,center:V(e),deltaX:t.deltaX,deltaY:t.deltaY}}/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */function V(t){var e=t.length;// no need to loop when only one touch
if(1===e)return{x:l(t[0].clientX),y:l(t[0].clientY)};for(var i=0,n=0,r=0;r<e;)i+=t[r].clientX,n+=t[r].clientY,r++;return{x:l(i/e),y:l(n/e)}}/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */function H(t,e,i){return{x:e/t||0,y:i/t||0}}/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */function B(t,e){return t===e?1:h(t)>=h(e)?t<0?2:4:e<0?8:16}/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */function W(t,e,i){i||(i=R);var n=e[i[0]]-t[i[0]],r=e[i[1]]-t[i[1]];return Math.sqrt(n*n+r*r)}/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */function U(t,e,i){i||(i=R);var n=e[i[0]]-t[i[0]];return 180*Math.atan2(e[i[1]]-t[i[1]],n)/Math.PI}N.prototype={/**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */handler:function(){},/**
     * bind the events
     */init:function(){this.evEl&&x(this.element,this.evEl,this.domHandler),this.evTarget&&x(this.target,this.evTarget,this.domHandler),this.evWin&&x(E(this.element),this.evWin,this.domHandler)},/**
     * unbind the events
     */destroy:function(){this.evEl&&_(this.element,this.evEl,this.domHandler),this.evTarget&&_(this.target,this.evTarget,this.domHandler),this.evWin&&_(E(this.element),this.evWin,this.domHandler)}};var q={mousedown:1,mousemove:2,mouseup:4};/**
 * Mouse events input
 * @constructor
 * @extends Input
 */function Z(){this.evEl="mousedown",this.evWin="mousemove mouseup",this.pressed=!1,N.apply(this,arguments)}b(Z,N,{/**
     * handle mouse events
     * @param {Object} ev
     */handler:function(t){var e=q[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:$,srcEvent:t}))}});var Y={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},X={2:L,3:"pen",4:$,5:"kinect"},K="pointerdown",J="pointermove pointerup pointercancel";/**
 * Pointer events input
 * @constructor
 * @extends Input
 */function G(){this.evEl=K,this.evWin=J,N.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}t.MSPointerEvent&&!t.PointerEvent&&(K="MSPointerDown",J="MSPointerMove MSPointerUp MSPointerCancel"),b(G,N,{/**
     * handle mouse events
     * @param {Object} ev
     */handler:function(t){var e=this.store,i=!1,n=Y[t.type.toLowerCase().replace("ms","")],r=X[t.pointerType]||t.pointerType,s=S(e,t.pointerId,"pointerId");1&n&&(0===t.button||r==L)?s<0&&(e.push(t),s=e.length-1):12&n&&(i=!0),!(s<0)&&(// update the event in the store
e[s]=t,this.callback(this.manager,n,{pointers:e,changedPointers:[t],pointerType:r,srcEvent:t}),i&&e.splice(s,1))}});var Q={touchstart:1,touchmove:2,touchend:4,touchcancel:8};/**
 * Touch events input
 * @constructor
 * @extends Input
 */function tt(){this.evTarget="touchstart",this.evWin="touchstart touchmove touchend touchcancel",this.started=!1,N.apply(this,arguments)}/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */function te(t,e){var i=T(t.touches),n=T(t.changedTouches);return 12&e&&(i=C(i.concat(n),"identifier",!0)),[i,n]}b(tt,N,{handler:function(t){var e=Q[t.type];if(1===e&&(this.started=!0),this.started){var i=te.call(this,t,e);12&e&&i[0].length-i[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:L,srcEvent:t})}}});var ti={touchstart:1,touchmove:2,touchend:4,touchcancel:8};/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */function tn(){this.evTarget="touchstart touchmove touchend touchcancel",this.targetIds={},N.apply(this,arguments)}/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */function tr(t,e){var i=T(t.touches),n=this.targetIds;// when there is only one touch, the process can be simplified
if(3&e&&1===i.length)return n[i[0].identifier]=!0,[i,i];var r,s,a=T(t.changedTouches),o=[],l=this.target;// collect touches
if(// get target touches from touches
s=i.filter(function(t){return w(t.target,l)}),1===e)for(r=0;r<s.length;)n[s[r].identifier]=!0,r++;for(// filter changed touches to only contain touches that exist in the collected target ids
r=0;r<a.length;)n[a[r].identifier]&&o.push(a[r]),12&e&&delete n[a[r].identifier],r++;if(o.length)return[// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
C(s.concat(o),"identifier",!0),o]}function ts(){N.apply(this,arguments);var t=v(this.handler,this);this.touch=new tn(this.manager,t),this.mouse=new Z(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function ta(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,to.call(this,e)):12&t&&to.call(this,e)}function to(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var i={x:e.clientX,y:e.clientY};this.lastTouches.push(i);var n=this.lastTouches;setTimeout(function(){var t=n.indexOf(i);t>-1&&n.splice(t,1)},2500)}}function tl(t){for(var e=t.srcEvent.clientX,i=t.srcEvent.clientY,n=0;n<this.lastTouches.length;n++){var r=this.lastTouches[n],s=Math.abs(e-r.x),a=Math.abs(i-r.y);if(s<=25&&a<=25)return!0}return!1}b(tn,N,{handler:function(t){var e=ti[t.type],i=tr.call(this,t,e);i&&this.callback(this.manager,e,{pointers:i[0],changedPointers:i[1],pointerType:L,srcEvent:t})}}),b(ts,N,{/**
     * handle mouse and touch events
     * @param {Hammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */handler:function(t,e,i){var n=i.pointerType==L,r=i.pointerType==$;if(!r||!i.sourceCapabilities||!i.sourceCapabilities.firesTouchEvents){// when we're in a touch event, record touches to  de-dupe synthetic mouse event
if(n)ta.call(this,e,i);else if(r&&tl.call(this,i))return;this.callback(t,e,i)}},/**
     * remove the event listeners
     */destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var th=O(o.style,"touchAction"),tu=th!==r,tc="compute",td="auto",tf="manipulation",tp="none",tm="pan-x",tg="pan-y",tb=function(){if(!tu)return!1;var e={},i=t.CSS&&t.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){// If css.supports is not supported but there is native touch-action assume it supports
// all values. This is the case for IE 10 and 11.
e[n]=!i||t.CSS.supports("touch-action",n)}),e}();/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */function tv(t,e){this.manager=t,this.set(e)}/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */function ty(t){var e;this.options=s({},this.defaults,t||{}),this.id=D++,this.manager=null,// default is enable true
this.options.enable=(e=this.options.enable)===r||e,this.state=1,this.simultaneous={},this.requireFail=[]}/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */function tx(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */function t_(t){return 16==t?"down":8==t?"up":2==t?"left":4==t?"right":""}/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */function tw(t,e){var i=e.manager;return i?i.get(t):t}/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */function tk(){ty.apply(this,arguments)}/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */function tM(){tk.apply(this,arguments),this.pX=null,this.pY=null}/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */function tS(){tk.apply(this,arguments)}/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */function tT(){ty.apply(this,arguments),this._timer=null,this._input=null}/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */function tC(){tk.apply(this,arguments)}/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */function tO(){tk.apply(this,arguments)}/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */function tD(){ty.apply(this,arguments),// previous time and center,
// used for tap counting
this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */function tE(t,e){var i,n;return(e=e||{}).recognizers=(i=e.recognizers,n=tE.defaults.preset,i===r?n:i),new tP(t,e)}/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */function tP(t,e){var i;this.options=s({},tE.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((i=this.options.inputClass)?i:A?G:I?tn:P?ts:Z)(this,z),this.touchAction=new tv(this,this.options.touchAction),tA(this,!0),f(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */function tA(t,e){var i,n=t.element;n.style&&(f(t.options.cssProps,function(r,s){i=O(n.style,s),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={}))}tv.prototype={/**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */set:function(t){t==tc&&(t=this.compute()),tu&&this.manager.element.style&&tb[t]&&(this.manager.element.style[th]=t),this.actions=t.toLowerCase().trim()},/**
     * just re-set the touchAction value
     */update:function(){this.set(this.manager.options.touchAction)},/**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */compute:function(){var t=[];return f(this.manager.recognizers,function(e){y(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */function(t){// none
if(k(t,tp))return tp;var e=k(t,tm),i=k(t,tg);return(// if both pan-x and pan-y are set (different recognizers
// for different directions, e.g. horizontal pan but vertical swipe?)
// we need none (as otherwise with pan-x pan-y combined none of these
// recognizers will work, since the browser would handle all panning
e&&i?tp:e||i?e?tm:tg:k(t,tf)?tf:td)}(t.join(" "))},/**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */preventDefaults:function(t){var e=t.srcEvent,i=t.offsetDirection;// if the touch action did prevented once this session
if(this.manager.session.prevented){e.preventDefault();return}var n=this.actions,r=k(n,tp)&&!tb[tp],s=k(n,tg)&&!tb[tg],a=k(n,tm)&&!tb[tm];if(r){//do not prevent defaults if this is a tap gesture
var o=1===t.pointers.length,l=t.distance<2,h=t.deltaTime<250;if(o&&l&&h)return}if((!a||!s)&&(r||s&&6&i||a&&24&i))return this.preventSrc(e)},/**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}},ty.prototype={/**
     * @virtual
     * @type {Object}
     */defaults:{},/**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */set:function(t){return s(this.options,t),// also update the touchAction, in case something changed about the directions/enabled state
this.manager&&this.manager.touchAction.update(),this},/**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */recognizeWith:function(t){if(d(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=tw(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},/**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */dropRecognizeWith:function(t){return d(t,"dropRecognizeWith",this)||(t=tw(t,this),delete this.simultaneous[t.id]),this},/**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */requireFailure:function(t){if(d(t,"requireFailure",this))return this;var e=this.requireFail;return -1===S(e,t=tw(t,this))&&(e.push(t),t.requireFailure(this)),this},/**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */dropRequireFailure:function(t){if(d(t,"dropRequireFailure",this))return this;t=tw(t,this);var e=S(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},/**
     * has require failures boolean
     * @returns {boolean}
     */hasRequireFailures:function(){return this.requireFail.length>0},/**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */canRecognizeWith:function(t){return!!this.simultaneous[t.id]},/**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */emit:function(t){var e=this,i=this.state;function n(i){e.manager.emit(i,t)}i<8&&n(e.options.event+tx(i)),n(e.options.event),t.additionalEvent&&n(t.additionalEvent),i>=8&&n(e.options.event+tx(i))},/**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */tryEmit:function(t){if(this.canEmit())return this.emit(t);// it's failing anyway
this.state=32},/**
     * can we emit?
     * @returns {boolean}
     */canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},/**
     * update the recognizer
     * @param {Object} inputData
     */recognize:function(t){// make a new copy of the inputData
// so we can change the inputData without messing up the other recognizers
var e=s({},t);// is is enabled and allow recognizing?
if(!y(this.options.enable,[this,e])){this.reset(),this.state=32;return}56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},/**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */process:function(t){},/**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */getTouchAction:function(){},/**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */reset:function(){}},b(tk,ty,{/**
     * @namespace
     * @memberof AttrRecognizer
     */defaults:{/**
         * @type {Number}
         * @default 1
         */pointers:1},/**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},/**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */process:function(t){var e=this.state,i=t.eventType,n=6&e,r=this.attrTest(t);return(// on cancel input and we've recognized before, return STATE_CANCELLED
n&&(8&i||!r)?16|e:n||r?4&i?8|e:2&e?4|e:2:32)}}),b(tM,tk,{/**
     * @namespace
     * @memberof PanRecognizer
     */defaults:{event:"pan",threshold:10,pointers:1,direction:30},getTouchAction:function(){var t=this.options.direction,e=[];return 6&t&&e.push(tg),24&t&&e.push(tm),e},directionTest:function(t){var e=this.options,i=!0,n=t.distance,r=t.direction,s=t.deltaX,a=t.deltaY;return r&e.direction||(6&e.direction?(r=0===s?1:s<0?2:4,i=s!=this.pX,n=Math.abs(t.deltaX)):(r=0===a?1:a<0?8:16,i=a!=this.pY,n=Math.abs(t.deltaY))),t.direction=r,i&&n>e.threshold&&r&e.direction},attrTest:function(t){return tk.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=t_(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),b(tS,tk,{/**
     * @namespace
     * @memberof PinchRecognizer
     */defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[tp]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||2&this.state)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),b(tT,ty,{/**
     * @namespace
     * @memberof PressRecognizer
     */defaults:{event:"press",pointers:1,time:251,threshold:9// a minimal movement is ok, but keep it low
},getTouchAction:function(){return[td]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime>e.time;// we only allow little movement
// and we've reached an end event, so a tap is possible
if(this._input=t,n&&i&&(!(12&t.eventType)||r)){if(1&t.eventType)this.reset(),this._timer=c(function(){this.state=8,this.tryEmit()},e.time,this);else if(4&t.eventType)return 8}else this.reset();return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=u(),this.manager.emit(this.options.event,this._input)))}}),b(tC,tk,{/**
     * @namespace
     * @memberof RotateRecognizer
     */defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[tp]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||2&this.state)}}),b(tO,tk,{/**
     * @namespace
     * @memberof SwipeRecognizer
     */defaults:{event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},getTouchAction:function(){return tM.prototype.getTouchAction.call(this)},attrTest:function(t){var e,i=this.options.direction;return 30&i?e=t.overallVelocity:6&i?e=t.overallVelocityX:24&i&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&i&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&h(e)>this.options.velocity&&4&t.eventType},emit:function(t){var e=t_(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),b(tD,ty,{/**
     * @namespace
     * @memberof PinchRecognizer
     */defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10// a multi-tap can be a bit off the initial position
},getTouchAction:function(){return[tf]},process:function(t){var e=this.options,i=t.pointers.length===e.pointers,n=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();// we only allow little movement
// and we've reached an end event, so a tap is possible
if(n&&r&&i){if(4!=t.eventType)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<e.interval,a=!this.pCenter||W(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&s?this.count+=1:this.count=1,this._input=t,0==this.count%e.taps)return(// no failing requirements, immediately trigger the tap event
// or wait as long as the multitap interval to trigger
this.hasRequireFailures()?(this._timer=c(function(){this.state=8,this.tryEmit()},e.interval,this),2):8)}return 32},failTimeout:function(){return this._timer=c(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){8==this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),/**
 * @const {string}
 */tE.VERSION="2.0.7",/**
 * default settings
 * @namespace
 */tE.defaults={/**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */domEvents:!1,/**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */touchAction:tc,/**
     * @type {Boolean}
     * @default true
     */enable:!0,/**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */inputTarget:null,/**
     * force an input class
     * @type {Null|Function}
     * @default null
     */inputClass:null,/**
     * Default recognizer setup when calling `Hammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */preset:[// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
[tC,{enable:!1}],[tS,{enable:!1},["rotate"]],[tO,{direction:6}],[tM,{direction:6},["swipe"]],[tD],[tD,{event:"doubletap",taps:2},["tap"]],[tT]],/**
     * Some CSS properties can be used to improve the working of Hammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */cssProps:{/**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */userSelect:"none",/**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */touchSelect:"none",/**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */touchCallout:"none",/**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */contentZooming:"none",/**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */userDrag:"none",/**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */tapHighlightColor:"rgba(0,0,0,0)"}},tP.prototype={/**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */set:function(t){return s(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(// Clean up existing event listeners and reinitialize
this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},/**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */stop:function(t){this.session.stopped=t?2:1},/**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */recognize:function(t){var e,i=this.session;if(!i.stopped){// run the touch-action polyfill
this.touchAction.preventDefaults(t);var n=this.recognizers,r=i.curRecognizer;// reset when the last recognizer is recognized
// or when we're in a new session
(!r||r&&8&r.state)&&(r=i.curRecognizer=null);for(var s=0;s<n.length;)e=n[s],2!==i.stopped&&(!r||e==r||// 2
e.canRecognizeWith(r))?e.recognize(t):e.reset(),!r&&14&e.state&&(r=i.curRecognizer=e),s++}},/**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */get:function(t){if(t instanceof ty)return t;for(var e=this.recognizers,i=0;i<e.length;i++)if(e[i].options.event==t)return e[i];return null},/**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */add:function(t){if(d(t,"add",this))return this;// remove existing
var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},/**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */remove:function(t){if(d(t,"remove",this))return this;// let's make sure this recognizer exists
if(t=this.get(t)){var e=this.recognizers,i=S(e,t);-1!==i&&(e.splice(i,1),this.touchAction.update())}return this},/**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */on:function(t,e){if(t!==r&&e!==r){var i=this.handlers;return f(M(t),function(t){i[t]=i[t]||[],i[t].push(e)}),this}},/**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */off:function(t,e){if(t!==r){var i=this.handlers;return f(M(t),function(t){e?i[t]&&i[t].splice(S(i[t],e),1):delete i[t]}),this}},/**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */emit:function(t,e){// we also want to trigger dom events
this.options.domEvents&&((n=i.createEvent("Event")).initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n));// no handlers, so skip it all
var n,r=this.handlers[t]&&this.handlers[t].slice();if(r&&r.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var s=0;s<r.length;)r[s](e),s++}},/**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */destroy:function(){this.element&&tA(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},s(tE,{INPUT_START:1,INPUT_MOVE:2,INPUT_END:4,INPUT_CANCEL:8,STATE_POSSIBLE:1,STATE_BEGAN:2,STATE_CHANGED:4,STATE_ENDED:8,STATE_RECOGNIZED:8,STATE_CANCELLED:16,STATE_FAILED:32,DIRECTION_NONE:1,DIRECTION_LEFT:2,DIRECTION_RIGHT:4,DIRECTION_UP:8,DIRECTION_DOWN:16,DIRECTION_HORIZONTAL:6,DIRECTION_VERTICAL:24,DIRECTION_ALL:30,Manager:tP,Input:N,TouchAction:tv,TouchInput:tn,MouseInput:Z,PointerEventInput:G,TouchMouseInput:ts,SingleTouchInput:tt,Recognizer:ty,AttrRecognizer:tk,Tap:tD,Pan:tM,Swipe:tO,Pinch:tS,Rotate:tC,Press:tT,on:x,off:_,each:f,merge:g,extend:m,assign:s,inherit:b,bindFn:v,prefixed:O}),(void 0!==t?t:"undefined"!=typeof self?self:{}).Hammer=tE,"function"==typeof define&&define.amd?define(function(){return tE}):e.exports?e.exports=tE:t[n]=tE}(window,document,"Hammer")},{}],"842Ta":[function(t,e,i){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);var n=t("lit");t("./trades-open-table"),t("./trades-closed-table"),t("./trades-running-table");class r extends n.LitElement{static properties={data:Object,_table:String};_renderTradesTable=()=>{switch(this._table){case"running":return(0,n.html)`<trades-running-table .data="${this.data}"></trades-running-table>`;case"closed":return(0,n.html)`<trades-closed-table .data="${this.data}"></trades-closed-table>`;default:return(0,n.html)`<trades-open-table .data="${this.data}"></trades-open-table>`}};createRenderRoot=()=>this;render=()=>(0,n.html)`
    <ul class="nav nav-pills flex-column flex-sm-row justify-content-center">
        <li class="nav-item">
            <a class="nav-link trades-table active" aria-current="page" href="#" data-table="open" @click="${this._onTableClick}">Open Trades</a>
        </li>
        <li class="nav-item">
            <a class="nav-link trades-table" aria-current="page" href="#" data-table="running" @click="${this._onTableClick}">Running Trades</a>
        </li>
        <li class="nav-item">
            <a class="nav-link trades-table" aria-current="page" href="#" data-table="closed" @click="${this._onTableClick}">Closed Trades</a>
        </li>
    </ul>
    ${this._renderTradesTable()}
    `;requestUpdate=()=>{super.requestUpdate();let t="";switch(this._table){case"running":t="trades-running-table";break;case"closed":t="trades-closed-table";break;default:t="trades-open-table"}let e=this.querySelector(t);e&&e.requestUpdate()};_onTableClick=t=>{t.preventDefault(),[...this.querySelectorAll("a.nav-link.trades-table.active")].map(t=>t.classList.remove("active")),t.target.classList.add("active"),this._table=t.target.dataset.table}}i.default=r,customElements.define("trades-tables",r)},{lit:"aCmte","./trades-open-table":"TWKsJ","./trades-closed-table":"iGxik","./trades-running-table":"iOluz","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],TWKsJ:[function(t,e,i){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);var n=t("lit");class r extends n.LitElement{properties={data:Object};_renderTableRow=(t,e)=>{let i=t=>t?(0,n.html)`<i class="bi bi-eye-fill"></i>`:(0,n.html)`<i class="bi bi-eye-slash-fill"></i>`,r=(t,e)=>t?(0,n.html)`*****`:(0,n.html)`${e}`;var s=new Date(Date.now()-new Date(t.creation_ts));return(0,n.html)`
        <tr>
            <td class="text-nowrap">${e+1}</td>
            <td class="text-nowrap">${new Date(t.creation_ts).toLocaleString()}</td>
            <td class="text-nowrap">${Math.floor(s/36e5)}:${Math.floor(s%36e5/6e4)}:${Math.floor(s%6e4/1e3)}</td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="open" data-trade-id="${t.id}" data-name="quantity" class="btn btn-sm btn-link">
                    ${i(t.quantityHide)}
                </button> -->
                ${r(t.quantityHide,t.quantity)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="open" data-trade-id="${t.id}" data-name="side" class="btn btn-sm btn-link">
                    ${i(t.sideHide)}
                </button> -->
                ${r(t.sideHide,t.side)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="open" data-trade-id="${t.id}" data-name="leverage" class="btn btn-sm btn-link">
                    ${i(t.leverageHide)}
                </button> -->
                ${r(t.leverageHide,t.leverage)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="open" data-trade-id="${t.id}" data-name="margin" class="btn btn-sm btn-link">
                    ${i(t.marginHide)}
                </button> -->
                ${r(t.marginHide,t.margin)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="open" data-trade-id="${t.id}" data-name="price" class="btn btn-sm btn-link">
                    ${i(t.priceHide)}
                </button> -->
                ${r(t.priceHide,t.price)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="open" data-trade-id="${t.id}" data-name="liquidation" class="btn btn-sm btn-link">
                    ${i(t.liquidationHide)}
                </button> -->
                ${r(t.liquidationHide,t.liquidation)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="open" data-trade-id="${t.id}" data-name="stoploss" class="btn btn-sm btn-link">
                    ${i(t.stoplossHide)}
                </button> -->
                ${r(t.stoplossHide,t.stoploss)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="open" data-trade-id="${t.id}" data-name="takeprofit" class="btn btn-sm btn-link">
                    ${i(t.takeprofitHide)}
                </button> -->
                ${r(t.takeprofitHide,t.takeprofit)}
            </td>
        </tr>
        `};createRenderRoot=()=>this;render=()=>(0,n.html)`
    <div class="table-responsive mt-3">
        <table class="table table-sm table-striped">
            <tr>
                <th class="text-nowrap">#</th>
                <th class="text-nowrap">Creation</th>
                <th class="text-nowrap">Open Duration</th>
                <th class="text-nowrap">Quantity</th>
                <th class="text-nowrap">Side</th>
                <th class="text-nowrap">Leverage</th>
                <th class="text-nowrap">Margin</th>
                <th class="text-nowrap">Entry Price</th>
                <th class="text-nowrap">Liquidation Price</th>
                <th class="text-nowrap">Stoploss</th>
                <th class="text-nowrap">Takeprofit</th>
            </tr>
            ${this.data?.tradesData?.openTradesData?.map(this._renderTableRow)}
        </table>
    </div>
    `}i.default=r,customElements.define("trades-open-table",r)},{lit:"aCmte","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],iGxik:[function(t,e,i){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);var n=t("lit");class r extends n.LitElement{properties={data:Object};_renderTableRow=(t,e)=>{let i=t=>t?(0,n.html)`<i class="bi bi-eye-fill"></i>`:(0,n.html)`<i class="bi bi-eye-slash-fill"></i>`,r=(t,e)=>t?(0,n.html)`*****`:(0,n.html)`${e}`;var s=new Date(new Date(t.closed_ts)-new Date(t.market_filled_ts));return(0,n.html)`
        <tr>
            <td class="text-nowrap">${e+1}</td>
            <td class="text-nowrap">${new Date(t.market_filled_ts).toLocaleString()}</td>
            <td class="text-nowrap">${Math.floor(s/36e5)}:${Math.floor(s%36e5/6e4)}:${Math.floor(s%6e4/1e3)}</td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${t.id}" data-name="quantity" class="btn btn-sm btn-link">
                    ${i(t.quantityHide)}
                </button> -->
                ${r(t.quantityHide,t.quantity)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${t.id}" data-name="side" class="btn btn-sm btn-link">
                    ${i(t.sideHide)}
                </button> -->
                ${r(t.sideHide,t.side)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${t.id}" data-name="leverage" class="btn btn-sm btn-link">
                    ${i(t.leverageHide)}
                </button> -->
                ${r(t.leverageHide,t.leverage)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${t.id}" data-name="margin" class="btn btn-sm btn-link">
                    ${i(t.marginHide)}
                </button> -->
                ${r(t.marginHide,t.margin)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${t.id}" data-name="price" class="btn btn-sm btn-link">
                    ${i(t.priceHide)}
                </button> -->
                ${r(t.priceHide,t.price)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${t.id}" data-name="liquidation" class="btn btn-sm btn-link">
                    ${i(t.liquidationHide)}
                </button> -->
                ${r(t.liquidationHide,t.liquidation)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${t.id}" data-name="stoploss" class="btn btn-sm btn-link">
                    ${i(t.stoplossHide)}
                </button> -->
                ${r(t.stoplossHide,t.stoploss)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${t.id}" data-name="takeprofit" class="btn btn-sm btn-link">
                    ${i(t.takeprofitHide)}
                </button> -->
                ${r(t.takeprofitHide,t.takeprofit)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="closed" data-trade-id="${t.id}" data-name="pl" class="btn btn-sm btn-link">
                    ${i(t.plHide)}
                </button> -->
                ${r(t.plHide,t.pl)}
            </td>
        </tr>
        `};createRenderRoot=()=>this;render=()=>(0,n.html)`
    <div class="table-responsive mt-3">
        <table class="table table-sm table-striped ">
            <tr>
                <th class="text-nowrap">#</th>
                <th class="text-nowrap">Market Filled</th>
                <th class="text-nowrap">Trade Duration</th>
                <th class="text-nowrap">Quantity</th>
                <th class="text-nowrap">Side</th>
                <th class="text-nowrap">Leverage</th>
                <th class="text-nowrap">Margin</th>
                <th class="text-nowrap">Entry Price</th>
                <th class="text-nowrap">Liquidation Price</th>
                <th class="text-nowrap">Stoploss</th>
                <th class="text-nowrap">Takeprofit</th>
                <th class="text-nowrap">PL</th>
            </tr>
            ${this.data?.tradesData?.closedTradesData?.map(this._renderTableRow)}
        </table>
    </div>
    `}i.default=r,customElements.define("trades-closed-table",r)},{lit:"aCmte","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],iOluz:[function(t,e,i){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);var n=t("lit");class r extends n.LitElement{properties={data:Object};_renderTableRow=(t,e)=>{let i=t=>t?(0,n.html)`<i class="bi bi-eye-fill"></i>`:(0,n.html)`<i class="bi bi-eye-slash-fill"></i>`,r=(t,e)=>t?(0,n.html)`*****`:(0,n.html)`${e}`;var s=new Date(Date.now()-new Date(t.market_filled_ts));return(0,n.html)`
        <tr>
            <td class="text-nowrap">${e+1}</td>
            <td class="text-nowrap">${new Date(t.market_filled_ts).toLocaleString()}</td>
            <td class="text-nowrap">${Math.floor(s/36e5)}:${Math.floor(s%36e5/6e4)}:${Math.floor(s%6e4/1e3)}</td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="running" data-trade-id="${t.id}" data-name="quantity" class="btn btn-sm btn-link">
                    ${i(t.quantityHide)}
                </button> -->
                ${r(t.quantityHide,t.quantity)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="running" data-trade-id="${t.id}" data-name="side" class="btn btn-sm btn-link">
                    ${i(t.sideHide)}
                </button> -->
                ${r(t.sideHide,t.side)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="running" data-trade-id="${t.id}" data-name="leverage" class="btn btn-sm btn-link">
                    ${i(t.leverageHide)}
                </button> -->
                ${r(t.leverageHide,t.leverage)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="running" data-trade-id="${t.id}" data-name="margin" class="btn btn-sm btn-link">
                    ${i(t.marginHide)}
                </button> -->
                ${r(t.marginHide,t.margin)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="running" data-trade-id="${t.id}" data-name="price" class="btn btn-sm btn-link">
                    ${i(t.priceHide)}
                </button> -->
                ${r(t.priceHide,t.price)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="running" data-trade-id="${t.id}" data-name="liquidation" class="btn btn-sm btn-link">
                    ${i(t.liquidationHide)}
                </button> -->
                ${r(t.liquidationHide,t.liquidation)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="running" data-trade-id="${t.id}" data-name="stoploss" class="btn btn-sm btn-link">
                    ${i(t.stoplossHide)}
                </button> -->
                ${r(t.stoplossHide,t.stoploss)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="running" data-trade-id="${t.id}" data-name="takeprofit" class="btn btn-sm btn-link">
                    ${i(t.takeprofitHide)}
                </button> -->
                ${r(t.takeprofitHide,t.takeprofit)}
            </td>
            <td class="text-nowrap">
                <!-- <button @click="${this._onHideClick}" data-table="running" data-trade-id="${t.id}" data-name="pl" class="btn btn-sm btn-link">
                    ${i(t.plHide)}
                </button> -->
                ${r(t.plHide,t.pl)}
            </td>
        </tr>
        `};createRenderRoot=()=>this;render=()=>(0,n.html)`
    <div class="table-responsive mt-3">
        <table class="table table-sm table-striped">
            <tr>
                <th class="text-nowrap">#</th>
                <th class="text-nowrap">Market Filled</th>
                <th class="text-nowrap">Trade Duration</th>
                <th class="text-nowrap">Quantity</th>
                <th class="text-nowrap">Side</th>
                <th class="text-nowrap">Leverage</th>
                <th class="text-nowrap">Margin</th>
                <th class="text-nowrap">Entry Price</th>
                <th class="text-nowrap">Liquidation Price</th>
                <th class="text-nowrap">Stoploss</th>
                <th class="text-nowrap">Takeprofit</th>
                <th class="text-nowrap">PL</th>
            </tr>
            ${this.data?.tradesData?.runningTradesData?.map(this._renderTableRow)}
        </table>
    </div>
    `}i.default=r,customElements.define("trades-running-table",r)},{lit:"aCmte","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6OAhW":[function(t,e,i){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);var n=t("lit");class r extends n.LitElement{static properties={_showOpenTrades:Boolean,_showRunningTrades:Boolean,_showClosedTrades:Boolean};createRenderRoot=()=>this;render=()=>(0,n.html)`
        <button class="btn btn-sm btn-link" @click="${this._onOpenBtnClick}">
            <i class="bi ${this._showOpenTrades?"bi-record-fill":"bi-record"}"></i>
        </button >
        <button class="btn btn-sm btn-link" @click="${this._onRunningBtnClick}">
            <i class="bi ${this._showRunningTrades?"bi-play-fill":"bi-play"}"></i>
        </button>
        <button class="btn btn-sm btn-link" @click="${this._onClosedBtnClick}">
            <i class="bi ${this._showClosedTrades?"bi-stop-fill":"bi-stop"}"></i>
        </button>
    `;_onOpenBtnClick=t=>{t.preventDefault(),this._showOpenTrades=!this._showOpenTrades,this._dispatchEvent(`openTradesChartData-${this._showOpenTrades}`)};_onRunningBtnClick=t=>{t.preventDefault(),this._showRunningTrades=!this._showRunningTrades,this._dispatchEvent(`runningTradesChartData-${this._showRunningTrades}`)};_onClosedBtnClick=t=>{t.preventDefault(),this._showClosedTrades=!this._showClosedTrades,this._dispatchEvent(`closedTradesChartData-${this._showClosedTrades}`)};_dispatchEvent=t=>this.dispatchEvent(new CustomEvent("trade-vis-click",{detail:t}))}i.default=r,customElements.define("chart-trades-btn-group",r)},{lit:"aCmte","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"9btay":[function(t,e,i){t("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(i);var n=t("lit");t("./login-form");class r extends n.LitElement{static properties={isAuthenticated:Boolean};_renderOffcanvasBody=()=>this.isAuthenticated?(0,n.html)`<button class="btn btn-danger w-100" @click="${this._onLogOutClick}">Log out</button>
        `:(0,n.html)`<login-form class="w-100"></login-form>`;createRenderRoot=()=>this;render=()=>(0,n.html)`
        <nav class="navbar bg-body-tertiary fixed-top" data-bs-theme-value="light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">LNM Cockpit</a>
                <div class="d-flex">
                    <dark-mode-btn></dark-mode-btn>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">LNM Cockpit Menu</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="d-flex align-items-end justify-content-end h-100">
                            ${this._renderOffcanvasBody()}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        `;_onLogOutClick=async t=>{t.preventDefault(),await fetch("/api/auth/logout",{method:"POST"}),location.reload()}}i.default=r,customElements.define("lnmc-navbar",r)},{lit:"aCmte","./login-form":"f885W","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],f885W:[function(t,e,i){var n=t("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(i);var r=t("lit"),s=t("../../favicon/logo.png"),a=n.interopDefault(s);class o extends r.LitElement{_renderStyle=()=>(0,r.html)`
    <style>
        .form-floating:focus-within {
            z-index: 2;
        }

        .secret {
            margin-bottom: -1px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
        }

        .key {
            margin-bottom: -1px;
            border-radius: 0;
        }

        .passphrase {
            margin-bottom: -1px;
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    </style>
    `;createRenderRoot=()=>this;render=()=>(0,r.html)`
        ${this._renderStyle()}
        <form @submit="${this._onFormSubmit}">
            <div class="text-center">
                <img class="mb-4" src="${a.default}" alt="" width="250" height="250">
            </div>
            <h1 class="h3 mb-3 fw-normal text-center">Please sign in</h1>
                <div class="form-floating">
                    <input type="password" class="form-control secret" name="secret" placeholder="Secret" required>
                    <label>Secret</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control key" name="key" placeholder="Key" required>
                    <label>Key</label>
                </div>
                <div class="form-floating mb-2">
                    <input type="password" class="form-control passphrase" name="passphrase" placeholder="Passphrase" required>
                    <label>Passphrase</label>
                </div>
                <div class="form-check text-start my-3">
                    <input class="form-check-input" type="checkbox" required>
                    <label class="form-check-label">
                        I know it's only an Alpha version, and I'm using it at my own risk. 🚀🔥
                    </label>
                </div>
                <input class="btn btn-primary w-100 py-2" type="submit" value="Sign in">
                <p class="mt-3 mb-3 text-body-secondary text-center">
                    <a href="https://twitter.com/slekrem" target="_blank" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                        Made with ❤️‍🔥
                    </a>
                </p>
        </form>
        `;_onFormSubmit=async t=>{t.preventDefault();let e=new FormData(t.target);[...t.target.querySelectorAll("input")].map(t=>t.setAttribute("disabled","")),await fetch("/api/auth/login",{method:"POST",body:e}),location.reload()}}i.default=o,customElements.define("login-form",o)},{lit:"aCmte","../../favicon/logo.png":"k05ot","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k05ot:[function(t,e,i){e.exports=t("c925e95c46820dc2").getBundleURL("2fIiD")+"logo.64d2ac17.png"},{c925e95c46820dc2:"c7Tr5"}]},["8CgKt"],"8CgKt","parcelRequire2186")//# sourceMappingURL=index.4ccfcb2a.js.map
;
//# sourceMappingURL=index.4ccfcb2a.js.map
