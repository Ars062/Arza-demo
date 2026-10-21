(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function GE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ey={exports:{}},gu={},ty={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),WE=Symbol.for("react.portal"),XE=Symbol.for("react.fragment"),YE=Symbol.for("react.strict_mode"),$E=Symbol.for("react.profiler"),jE=Symbol.for("react.provider"),qE=Symbol.for("react.context"),KE=Symbol.for("react.forward_ref"),ZE=Symbol.for("react.suspense"),JE=Symbol.for("react.memo"),QE=Symbol.for("react.lazy"),wg=Symbol.iterator;function eT(t){return t===null||typeof t!="object"?null:(t=wg&&t[wg]||t["@@iterator"],typeof t=="function"?t:null)}var ny={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iy=Object.assign,ry={};function So(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ny}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function sy(){}sy.prototype=So.prototype;function Tp(t,e,n){this.props=t,this.context=e,this.refs=ry,this.updater=n||ny}var wp=Tp.prototype=new sy;wp.constructor=Tp;iy(wp,So.prototype);wp.isPureReactComponent=!0;var Ag=Array.isArray,oy=Object.prototype.hasOwnProperty,Ap={current:null},ay={key:!0,ref:!0,__self:!0,__source:!0};function ly(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)oy.call(e,i)&&!ay.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ga,type:t,key:s,ref:o,props:r,_owner:Ap.current}}function tT(t,e){return{$$typeof:Ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Cp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga}function nT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cg=/\/+/g;function Xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nT(""+t.key):e.toString(36)}function Zl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ga:case WE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Xu(o,0):i,Ag(r)?(n="",t!=null&&(n=t.replace(Cg,"$&/")+"/"),Zl(r,e,n,"",function(c){return c})):r!=null&&(Cp(r)&&(r=tT(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ag(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Xu(s,a);o+=Zl(s,e,n,l,r)}else if(l=eT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Xu(s,a++),o+=Zl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function il(t,e,n){if(t==null)return t;var i=[],r=0;return Zl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function iT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pn={current:null},Jl={transition:null},rT={ReactCurrentDispatcher:pn,ReactCurrentBatchConfig:Jl,ReactCurrentOwner:Ap};function cy(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:il,forEach:function(t,e,n){il(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return il(t,function(){e++}),e},toArray:function(t){return il(t,function(e){return e})||[]},only:function(t){if(!Cp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=So;Ye.Fragment=XE;Ye.Profiler=$E;Ye.PureComponent=Tp;Ye.StrictMode=YE;Ye.Suspense=ZE;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rT;Ye.act=cy;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=iy({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ap.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)oy.call(e,l)&&!ay.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ga,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:qE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jE,_context:t},t.Consumer=t};Ye.createElement=ly;Ye.createFactory=function(t){var e=ly.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:KE,render:t}};Ye.isValidElement=Cp;Ye.lazy=function(t){return{$$typeof:QE,_payload:{_status:-1,_result:t},_init:iT}};Ye.memo=function(t,e){return{$$typeof:JE,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=Jl.transition;Jl.transition={};try{t()}finally{Jl.transition=e}};Ye.unstable_act=cy;Ye.useCallback=function(t,e){return pn.current.useCallback(t,e)};Ye.useContext=function(t){return pn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return pn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return pn.current.useEffect(t,e)};Ye.useId=function(){return pn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return pn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return pn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return pn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return pn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return pn.current.useReducer(t,e,n)};Ye.useRef=function(t){return pn.current.useRef(t)};Ye.useState=function(t){return pn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return pn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return pn.current.useTransition()};Ye.version="18.3.1";ty.exports=Ye;var ce=ty.exports;const sT=GE(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oT=ce,aT=Symbol.for("react.element"),lT=Symbol.for("react.fragment"),cT=Object.prototype.hasOwnProperty,uT=oT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fT={key:!0,ref:!0,__self:!0,__source:!0};function uy(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)cT.call(e,i)&&!fT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:aT,type:t,key:s,ref:o,props:r,_owner:uT.current}}gu.Fragment=lT;gu.jsx=uy;gu.jsxs=uy;ey.exports=gu;var W=ey.exports,_d={},fy={exports:{}},Nn={},dy={exports:{}},hy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,O){var H=N.length;N.push(O);e:for(;0<H;){var U=H-1>>>1,J=N[U];if(0<r(J,O))N[U]=O,N[H]=J,H=U;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var O=N[0],H=N.pop();if(H!==O){N[0]=H;e:for(var U=0,J=N.length,re=J>>>1;U<re;){var ae=2*(U+1)-1,Ae=N[ae],Ne=ae+1,Z=N[Ne];if(0>r(Ae,H))Ne<J&&0>r(Z,Ae)?(N[U]=Z,N[Ne]=H,U=Ne):(N[U]=Ae,N[ae]=H,U=ae);else if(Ne<J&&0>r(Z,H))N[U]=Z,N[Ne]=H,U=Ne;else break e}}return O}function r(N,O){var H=N.sortIndex-O.sortIndex;return H!==0?H:N.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,p=!1,m=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(N){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=N)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function x(N){if(y=!1,S(N),!m)if(n(l)!==null)m=!0,z(E);else{var O=n(c);O!==null&&k(x,O.startTime-N)}}function E(N,O){m=!1,y&&(y=!1,h(_),_=-1),p=!0;var H=f;try{for(S(O),d=n(l);d!==null&&(!(d.expirationTime>O)||N&&!I());){var U=d.callback;if(typeof U=="function"){d.callback=null,f=d.priorityLevel;var J=U(d.expirationTime<=O);O=t.unstable_now(),typeof J=="function"?d.callback=J:d===n(l)&&i(l),S(O)}else i(l);d=n(l)}if(d!==null)var re=!0;else{var ae=n(c);ae!==null&&k(x,ae.startTime-O),re=!1}return re}finally{d=null,f=H,p=!1}}var A=!1,w=null,_=-1,C=5,P=-1;function I(){return!(t.unstable_now()-P<C)}function F(){if(w!==null){var N=t.unstable_now();P=N;var O=!0;try{O=w(!0,N)}finally{O?L():(A=!1,w=null)}}else A=!1}var L;if(typeof v=="function")L=function(){v(F)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,D=b.port2;b.port1.onmessage=F,L=function(){D.postMessage(null)}}else L=function(){g(F,0)};function z(N){w=N,A||(A=!0,L())}function k(N,O){_=g(function(){N(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,z(E))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var H=f;f=O;try{return N()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,O){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var H=f;f=N;try{return O()}finally{f=H}},t.unstable_scheduleCallback=function(N,O,H){var U=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?U+H:U):H=U,N){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=H+J,N={id:u++,callback:O,priorityLevel:N,startTime:H,expirationTime:J,sortIndex:-1},H>U?(N.sortIndex=H,e(c,N),n(l)===null&&N===n(c)&&(y?(h(_),_=-1):y=!0,k(x,H-U))):(N.sortIndex=J,e(l,N),m||p||(m=!0,z(E))),N},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(N){var O=f;return function(){var H=f;f=O;try{return N.apply(this,arguments)}finally{f=H}}}})(hy);dy.exports=hy;var dT=dy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hT=ce,In=dT;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var py=new Set,da={};function gs(t,e){co(t,e),co(t+"Capture",e)}function co(t,e){for(da[t]=e,t=0;t<e.length;t++)py.add(e[t])}var qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yd=Object.prototype.hasOwnProperty,pT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bg={},Rg={};function mT(t){return yd.call(Rg,t)?!0:yd.call(bg,t)?!1:pT.test(t)?Rg[t]=!0:(bg[t]=!0,!1)}function gT(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function vT(t,e,n,i){if(e===null||typeof e>"u"||gT(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bp=/[\-:]([a-z])/g;function Rp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bp,Rp);Kt[e]=new mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bp,Rp);Kt[e]=new mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bp,Rp);Kt[e]=new mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new mn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Pp(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(vT(e,n,r,i)&&(n=null),i||r===null?mT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var tr=hT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rl=Symbol.for("react.element"),Fs=Symbol.for("react.portal"),Os=Symbol.for("react.fragment"),Lp=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),my=Symbol.for("react.provider"),gy=Symbol.for("react.context"),Dp=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Md=Symbol.for("react.suspense_list"),Ip=Symbol.for("react.memo"),hr=Symbol.for("react.lazy"),vy=Symbol.for("react.offscreen"),Pg=Symbol.iterator;function bo(t){return t===null||typeof t!="object"?null:(t=Pg&&t[Pg]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Object.assign,Yu;function $o(t){if(Yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yu=e&&e[1]||""}return`
`+Yu+t}var $u=!1;function ju(t,e){if(!t||$u)return"";$u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$u=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$o(t):""}function _T(t){switch(t.tag){case 5:return $o(t.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return t=ju(t.type,!1),t;case 11:return t=ju(t.type.render,!1),t;case 1:return t=ju(t.type,!0),t;default:return""}}function Ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Os:return"Fragment";case Fs:return"Portal";case xd:return"Profiler";case Lp:return"StrictMode";case Sd:return"Suspense";case Md:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gy:return(t.displayName||"Context")+".Consumer";case my:return(t._context.displayName||"Context")+".Provider";case Dp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Ip:return e=t.displayName||null,e!==null?e:Ed(t.type)||"Memo";case hr:e=t._payload,t=t._init;try{return Ed(t(e))}catch{}}return null}function yT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ed(e);case 8:return e===Lp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _y(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xT(t){var e=_y(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=xT(t))}function yy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=_y(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function wc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Td(t,e){var n=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function xy(t,e){e=e.checked,e!=null&&Pp(t,"checked",e,!1)}function wd(t,e){xy(t,e);var n=Lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ad(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ad(t,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ad(t,e,n){(e!=="number"||wc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var jo=Array.isArray;function eo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ig(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(jo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Lr(n)}}function Sy(t,e){var n=Lr(e.value),i=Lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ng(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function My(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?My(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ol,Ey=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ol=ol||document.createElement("div"),ol.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ol.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ea={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ST=["Webkit","ms","Moz","O"];Object.keys(ea).forEach(function(t){ST.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ea[e]=ea[t]})});function Ty(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ea.hasOwnProperty(t)&&ea[t]?(""+e).trim():e+"px"}function wy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ty(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var MT=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(t,e){if(e){if(MT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ld=null;function Np(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dd=null,to=null,no=null;function Ug(t){if(t=Ya(t)){if(typeof Dd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Su(e),Dd(t.stateNode,t.type,e))}}function Ay(t){to?no?no.push(t):no=[t]:to=t}function Cy(){if(to){var t=to,e=no;if(no=to=null,Ug(t),e)for(t=0;t<e.length;t++)Ug(e[t])}}function by(t,e){return t(e)}function Ry(){}var qu=!1;function Py(t,e,n){if(qu)return t(e,n);qu=!0;try{return by(t,e,n)}finally{qu=!1,(to!==null||no!==null)&&(Ry(),Cy())}}function pa(t,e){var n=t.stateNode;if(n===null)return null;var i=Su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Id=!1;if(qi)try{var Ro={};Object.defineProperty(Ro,"passive",{get:function(){Id=!0}}),window.addEventListener("test",Ro,Ro),window.removeEventListener("test",Ro,Ro)}catch{Id=!1}function ET(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ta=!1,Ac=null,Cc=!1,Nd=null,TT={onError:function(t){ta=!0,Ac=t}};function wT(t,e,n,i,r,s,o,a,l){ta=!1,Ac=null,ET.apply(TT,arguments)}function AT(t,e,n,i,r,s,o,a,l){if(wT.apply(this,arguments),ta){if(ta){var c=Ac;ta=!1,Ac=null}else throw Error(oe(198));Cc||(Cc=!0,Nd=c)}}function vs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ly(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fg(t){if(vs(t)!==t)throw Error(oe(188))}function CT(t){var e=t.alternate;if(!e){if(e=vs(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fg(r),t;if(s===i)return Fg(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Dy(t){return t=CT(t),t!==null?Iy(t):null}function Iy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Iy(t);if(e!==null)return e;t=t.sibling}return null}var Ny=In.unstable_scheduleCallback,Og=In.unstable_cancelCallback,bT=In.unstable_shouldYield,RT=In.unstable_requestPaint,bt=In.unstable_now,PT=In.unstable_getCurrentPriorityLevel,Up=In.unstable_ImmediatePriority,Uy=In.unstable_UserBlockingPriority,bc=In.unstable_NormalPriority,LT=In.unstable_LowPriority,Fy=In.unstable_IdlePriority,vu=null,Ti=null;function DT(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}}var li=Math.clz32?Math.clz32:UT,IT=Math.log,NT=Math.LN2;function UT(t){return t>>>=0,t===0?32:31-(IT(t)/NT|0)|0}var al=64,ll=4194304;function qo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=qo(a):(s&=o,s!==0&&(i=qo(s)))}else o=n&~r,o!==0?i=qo(o):s!==0&&(i=qo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-li(e),r=1<<n,i|=t[n],e&=~r;return i}function FT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-li(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=FT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ud(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Oy(){var t=al;return al<<=1,!(al&4194240)&&(al=64),t}function Ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-li(e),t[e]=n}function kT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-li(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Fp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-li(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function ky(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var By,Op,Vy,zy,Hy,Fd=!1,cl=[],Sr=null,Mr=null,Er=null,ma=new Map,ga=new Map,gr=[],BT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ga.delete(e.pointerId)}}function Po(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ya(e),e!==null&&Op(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function VT(t,e,n,i,r){switch(e){case"focusin":return Sr=Po(Sr,t,e,n,i,r),!0;case"dragenter":return Mr=Po(Mr,t,e,n,i,r),!0;case"mouseover":return Er=Po(Er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ma.set(s,Po(ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ga.set(s,Po(ga.get(s)||null,t,e,n,i,r)),!0}return!1}function Gy(t){var e=jr(t.target);if(e!==null){var n=vs(e);if(n!==null){if(e=n.tag,e===13){if(e=Ly(n),e!==null){t.blockedOn=e,Hy(t.priority,function(){Vy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ql(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ld=i,n.target.dispatchEvent(i),Ld=null}else return e=Ya(n),e!==null&&Op(e),t.blockedOn=n,!1;e.shift()}return!0}function Bg(t,e,n){Ql(t)&&n.delete(e)}function zT(){Fd=!1,Sr!==null&&Ql(Sr)&&(Sr=null),Mr!==null&&Ql(Mr)&&(Mr=null),Er!==null&&Ql(Er)&&(Er=null),ma.forEach(Bg),ga.forEach(Bg)}function Lo(t,e){t.blockedOn===e&&(t.blockedOn=null,Fd||(Fd=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,zT)))}function va(t){function e(r){return Lo(r,t)}if(0<cl.length){Lo(cl[0],t);for(var n=1;n<cl.length;n++){var i=cl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Sr!==null&&Lo(Sr,t),Mr!==null&&Lo(Mr,t),Er!==null&&Lo(Er,t),ma.forEach(e),ga.forEach(e),n=0;n<gr.length;n++)i=gr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)Gy(n),n.blockedOn===null&&gr.shift()}var io=tr.ReactCurrentBatchConfig,Pc=!0;function HT(t,e,n,i){var r=ot,s=io.transition;io.transition=null;try{ot=1,kp(t,e,n,i)}finally{ot=r,io.transition=s}}function GT(t,e,n,i){var r=ot,s=io.transition;io.transition=null;try{ot=4,kp(t,e,n,i)}finally{ot=r,io.transition=s}}function kp(t,e,n,i){if(Pc){var r=Od(t,e,n,i);if(r===null)af(t,e,i,Lc,n),kg(t,i);else if(VT(r,t,e,n,i))i.stopPropagation();else if(kg(t,i),e&4&&-1<BT.indexOf(t)){for(;r!==null;){var s=Ya(r);if(s!==null&&By(s),s=Od(t,e,n,i),s===null&&af(t,e,i,Lc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else af(t,e,i,null,n)}}var Lc=null;function Od(t,e,n,i){if(Lc=null,t=Np(i),t=jr(t),t!==null)if(e=vs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ly(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lc=t,null}function Wy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(PT()){case Up:return 1;case Uy:return 4;case bc:case LT:return 16;case Fy:return 536870912;default:return 16}default:return 16}}var yr=null,Bp=null,ec=null;function Xy(){if(ec)return ec;var t,e=Bp,n=e.length,i,r="value"in yr?yr.value:yr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return ec=r.slice(t,1<i?1-i:void 0)}function tc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function Vg(){return!1}function Un(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ul:Vg,this.isPropagationStopped=Vg,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var Mo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vp=Un(Mo),Xa=Tt({},Mo,{view:0,detail:0}),WT=Un(Xa),Zu,Ju,Do,_u=Tt({},Xa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(Zu=t.screenX-Do.screenX,Ju=t.screenY-Do.screenY):Ju=Zu=0,Do=t),Zu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),zg=Un(_u),XT=Tt({},_u,{dataTransfer:0}),YT=Un(XT),$T=Tt({},Xa,{relatedTarget:0}),Qu=Un($T),jT=Tt({},Mo,{animationName:0,elapsedTime:0,pseudoElement:0}),qT=Un(jT),KT=Tt({},Mo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ZT=Un(KT),JT=Tt({},Mo,{data:0}),Hg=Un(JT),QT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ew={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tw[t])?!!e[t]:!1}function zp(){return nw}var iw=Tt({},Xa,{key:function(t){if(t.key){var e=QT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=tc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ew[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zp,charCode:function(t){return t.type==="keypress"?tc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?tc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rw=Un(iw),sw=Tt({},_u,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gg=Un(sw),ow=Tt({},Xa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zp}),aw=Un(ow),lw=Tt({},Mo,{propertyName:0,elapsedTime:0,pseudoElement:0}),cw=Un(lw),uw=Tt({},_u,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fw=Un(uw),dw=[9,13,27,32],Hp=qi&&"CompositionEvent"in window,na=null;qi&&"documentMode"in document&&(na=document.documentMode);var hw=qi&&"TextEvent"in window&&!na,Yy=qi&&(!Hp||na&&8<na&&11>=na),Wg=" ",Xg=!1;function $y(t,e){switch(t){case"keyup":return dw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function pw(t,e){switch(t){case"compositionend":return jy(e);case"keypress":return e.which!==32?null:(Xg=!0,Wg);case"textInput":return t=e.data,t===Wg&&Xg?null:t;default:return null}}function mw(t,e){if(ks)return t==="compositionend"||!Hp&&$y(t,e)?(t=Xy(),ec=Bp=yr=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yy&&e.locale!=="ko"?null:e.data;default:return null}}var gw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gw[t.type]:e==="textarea"}function qy(t,e,n,i){Ay(i),e=Dc(e,"onChange"),0<e.length&&(n=new Vp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ia=null,_a=null;function vw(t){ox(t,0)}function yu(t){var e=zs(t);if(yy(e))return t}function _w(t,e){if(t==="change")return e}var Ky=!1;if(qi){var ef;if(qi){var tf="oninput"in document;if(!tf){var $g=document.createElement("div");$g.setAttribute("oninput","return;"),tf=typeof $g.oninput=="function"}ef=tf}else ef=!1;Ky=ef&&(!document.documentMode||9<document.documentMode)}function jg(){ia&&(ia.detachEvent("onpropertychange",Zy),_a=ia=null)}function Zy(t){if(t.propertyName==="value"&&yu(_a)){var e=[];qy(e,_a,t,Np(t)),Py(vw,e)}}function yw(t,e,n){t==="focusin"?(jg(),ia=e,_a=n,ia.attachEvent("onpropertychange",Zy)):t==="focusout"&&jg()}function xw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yu(_a)}function Sw(t,e){if(t==="click")return yu(e)}function Mw(t,e){if(t==="input"||t==="change")return yu(e)}function Ew(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:Ew;function ya(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!yd.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function qg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kg(t,e){var n=qg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qg(n)}}function Jy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qy(){for(var t=window,e=wc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wc(t.document)}return e}function Gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tw(t){var e=Qy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jy(n.ownerDocument.documentElement,n)){if(i!==null&&Gp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kg(n,s);var o=Kg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ww=qi&&"documentMode"in document&&11>=document.documentMode,Bs=null,kd=null,ra=null,Bd=!1;function Zg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bd||Bs==null||Bs!==wc(i)||(i=Bs,"selectionStart"in i&&Gp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ra&&ya(ra,i)||(ra=i,i=Dc(kd,"onSelect"),0<i.length&&(e=new Vp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Bs)))}function fl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vs={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},nf={},ex={};qi&&(ex=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function xu(t){if(nf[t])return nf[t];if(!Vs[t])return t;var e=Vs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ex)return nf[t]=e[n];return t}var tx=xu("animationend"),nx=xu("animationiteration"),ix=xu("animationstart"),rx=xu("transitionend"),sx=new Map,Jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){sx.set(t,e),gs(e,[t])}for(var rf=0;rf<Jg.length;rf++){var sf=Jg[rf],Aw=sf.toLowerCase(),Cw=sf[0].toUpperCase()+sf.slice(1);Nr(Aw,"on"+Cw)}Nr(tx,"onAnimationEnd");Nr(nx,"onAnimationIteration");Nr(ix,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(rx,"onTransitionEnd");co("onMouseEnter",["mouseout","mouseover"]);co("onMouseLeave",["mouseout","mouseover"]);co("onPointerEnter",["pointerout","pointerover"]);co("onPointerLeave",["pointerout","pointerover"]);gs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));gs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));gs("onBeforeInput",["compositionend","keypress","textInput","paste"]);gs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));gs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function Qg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,AT(i,e,void 0,t),t.currentTarget=null}function ox(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Qg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Qg(r,a,c),s=l}}}if(Cc)throw t=Nd,Cc=!1,Nd=null,t}function mt(t,e){var n=e[Wd];n===void 0&&(n=e[Wd]=new Set);var i=t+"__bubble";n.has(i)||(ax(e,t,2,!1),n.add(i))}function of(t,e,n){var i=0;e&&(i|=4),ax(n,t,i,e)}var dl="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[dl]){t[dl]=!0,py.forEach(function(n){n!=="selectionchange"&&(bw.has(n)||of(n,!1,t),of(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[dl]||(e[dl]=!0,of("selectionchange",!1,e))}}function ax(t,e,n,i){switch(Wy(e)){case 1:var r=HT;break;case 4:r=GT;break;default:r=kp}n=r.bind(null,e,n,t),r=void 0,!Id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function af(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Py(function(){var c=s,u=Np(n),d=[];e:{var f=sx.get(t);if(f!==void 0){var p=Vp,m=t;switch(t){case"keypress":if(tc(n)===0)break e;case"keydown":case"keyup":p=rw;break;case"focusin":m="focus",p=Qu;break;case"focusout":m="blur",p=Qu;break;case"beforeblur":case"afterblur":p=Qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=YT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=aw;break;case tx:case nx:case ix:p=qT;break;case rx:p=cw;break;case"scroll":p=WT;break;case"wheel":p=fw;break;case"copy":case"cut":case"paste":p=ZT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Gg}var y=(e&4)!==0,g=!y&&t==="scroll",h=y?f!==null?f+"Capture":null:f;y=[];for(var v=c,S;v!==null;){S=v;var x=S.stateNode;if(S.tag===5&&x!==null&&(S=x,h!==null&&(x=pa(v,h),x!=null&&y.push(Sa(v,x,S)))),g)break;v=v.return}0<y.length&&(f=new p(f,m,null,n,u),d.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Ld&&(m=n.relatedTarget||n.fromElement)&&(jr(m)||m[Ki]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=c,m=m?jr(m):null,m!==null&&(g=vs(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=c),p!==m)){if(y=zg,x="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Gg,x="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?f:zs(p),S=m==null?f:zs(m),f=new y(x,v+"leave",p,n,u),f.target=g,f.relatedTarget=S,x=null,jr(u)===c&&(y=new y(h,v+"enter",m,n,u),y.target=S,y.relatedTarget=g,x=y),g=x,p&&m)t:{for(y=p,h=m,v=0,S=y;S;S=Ss(S))v++;for(S=0,x=h;x;x=Ss(x))S++;for(;0<v-S;)y=Ss(y),v--;for(;0<S-v;)h=Ss(h),S--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=Ss(y),h=Ss(h)}y=null}else y=null;p!==null&&e0(d,f,p,y,!1),m!==null&&g!==null&&e0(d,g,m,y,!0)}}e:{if(f=c?zs(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var E=_w;else if(Yg(f))if(Ky)E=Mw;else{E=xw;var A=yw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Sw);if(E&&(E=E(t,c))){qy(d,E,n,u);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Ad(f,"number",f.value)}switch(A=c?zs(c):window,t){case"focusin":(Yg(A)||A.contentEditable==="true")&&(Bs=A,kd=c,ra=null);break;case"focusout":ra=kd=Bs=null;break;case"mousedown":Bd=!0;break;case"contextmenu":case"mouseup":case"dragend":Bd=!1,Zg(d,n,u);break;case"selectionchange":if(ww)break;case"keydown":case"keyup":Zg(d,n,u)}var w;if(Hp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ks?$y(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Yy&&n.locale!=="ko"&&(ks||_!=="onCompositionStart"?_==="onCompositionEnd"&&ks&&(w=Xy()):(yr=u,Bp="value"in yr?yr.value:yr.textContent,ks=!0)),A=Dc(c,_),0<A.length&&(_=new Hg(_,t,null,n,u),d.push({event:_,listeners:A}),w?_.data=w:(w=jy(n),w!==null&&(_.data=w)))),(w=hw?pw(t,n):mw(t,n))&&(c=Dc(c,"onBeforeInput"),0<c.length&&(u=new Hg("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=w))}ox(d,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Dc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=pa(t,n),s!=null&&i.unshift(Sa(t,s,r)),s=pa(t,e),s!=null&&i.push(Sa(t,s,r))),t=t.return}return i}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function e0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=pa(n,s),l!=null&&o.unshift(Sa(n,l,a))):r||(l=pa(n,s),l!=null&&o.push(Sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Rw=/\r\n?/g,Pw=/\u0000|\uFFFD/g;function t0(t){return(typeof t=="string"?t:""+t).replace(Rw,`
`).replace(Pw,"")}function hl(t,e,n){if(e=t0(e),t0(t)!==e&&n)throw Error(oe(425))}function Ic(){}var Vd=null,zd=null;function Hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gd=typeof setTimeout=="function"?setTimeout:void 0,Lw=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,Dw=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(Iw)}:Gd;function Iw(t){setTimeout(function(){throw t})}function lf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),va(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);va(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function i0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Eo=Math.random().toString(36).slice(2),Si="__reactFiber$"+Eo,Ma="__reactProps$"+Eo,Ki="__reactContainer$"+Eo,Wd="__reactEvents$"+Eo,Nw="__reactListeners$"+Eo,Uw="__reactHandles$"+Eo;function jr(t){var e=t[Si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ki]||n[Si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=i0(t);t!==null;){if(n=t[Si])return n;t=i0(t)}return e}t=n,n=t.parentNode}return null}function Ya(t){return t=t[Si]||t[Ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Su(t){return t[Ma]||null}var Xd=[],Hs=-1;function Ur(t){return{current:t}}function gt(t){0>Hs||(t.current=Xd[Hs],Xd[Hs]=null,Hs--)}function ht(t,e){Hs++,Xd[Hs]=t.current,t.current=e}var Dr={},an=Ur(Dr),xn=Ur(!1),os=Dr;function uo(t,e){var n=t.type.contextTypes;if(!n)return Dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Sn(t){return t=t.childContextTypes,t!=null}function Nc(){gt(xn),gt(an)}function r0(t,e,n){if(an.current!==Dr)throw Error(oe(168));ht(an,e),ht(xn,n)}function lx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,yT(t)||"Unknown",r));return Tt({},n,i)}function Uc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,os=an.current,ht(an,t),ht(xn,xn.current),!0}function s0(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=lx(t,e,os),i.__reactInternalMemoizedMergedChildContext=t,gt(xn),gt(an),ht(an,t)):gt(xn),ht(xn,n)}var zi=null,Mu=!1,cf=!1;function cx(t){zi===null?zi=[t]:zi.push(t)}function Fw(t){Mu=!0,cx(t)}function Fr(){if(!cf&&zi!==null){cf=!0;var t=0,e=ot;try{var n=zi;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}zi=null,Mu=!1}catch(r){throw zi!==null&&(zi=zi.slice(t+1)),Ny(Up,Fr),r}finally{ot=e,cf=!1}}return null}var Gs=[],Ws=0,Fc=null,Oc=0,Bn=[],Vn=0,as=null,Gi=1,Wi="";function Xr(t,e){Gs[Ws++]=Oc,Gs[Ws++]=Fc,Fc=t,Oc=e}function ux(t,e,n){Bn[Vn++]=Gi,Bn[Vn++]=Wi,Bn[Vn++]=as,as=t;var i=Gi;t=Wi;var r=32-li(i)-1;i&=~(1<<r),n+=1;var s=32-li(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gi=1<<32-li(e)+r|n<<r|i,Wi=s+t}else Gi=1<<s|n<<r|i,Wi=t}function Wp(t){t.return!==null&&(Xr(t,1),ux(t,1,0))}function Xp(t){for(;t===Fc;)Fc=Gs[--Ws],Gs[Ws]=null,Oc=Gs[--Ws],Gs[Ws]=null;for(;t===as;)as=Bn[--Vn],Bn[Vn]=null,Wi=Bn[--Vn],Bn[Vn]=null,Gi=Bn[--Vn],Bn[Vn]=null}var Pn=null,bn=null,_t=!1,ri=null;function fx(t,e){var n=Gn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function o0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,bn=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Gi,overflow:Wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Gn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,bn=null,!0):!1;default:return!1}}function Yd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $d(t){if(_t){var e=bn;if(e){var n=e;if(!o0(t,e)){if(Yd(t))throw Error(oe(418));e=Tr(n.nextSibling);var i=Pn;e&&o0(t,e)?fx(i,n):(t.flags=t.flags&-4097|2,_t=!1,Pn=t)}}else{if(Yd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,_t=!1,Pn=t}}}function a0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function pl(t){if(t!==Pn)return!1;if(!_t)return a0(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hd(t.type,t.memoizedProps)),e&&(e=bn)){if(Yd(t))throw dx(),Error(oe(418));for(;e;)fx(t,e),e=Tr(e.nextSibling)}if(a0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Pn?Tr(t.stateNode.nextSibling):null;return!0}function dx(){for(var t=bn;t;)t=Tr(t.nextSibling)}function fo(){bn=Pn=null,_t=!1}function Yp(t){ri===null?ri=[t]:ri.push(t)}var Ow=tr.ReactCurrentBatchConfig;function Io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function ml(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function l0(t){var e=t._init;return e(t._payload)}function hx(t){function e(h,v){if(t){var S=h.deletions;S===null?(h.deletions=[v],h.flags|=16):S.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=br(h,v),h.index=0,h.sibling=null,h}function s(h,v,S){return h.index=S,t?(S=h.alternate,S!==null?(S=S.index,S<v?(h.flags|=2,v):S):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,S,x){return v===null||v.tag!==6?(v=gf(S,h.mode,x),v.return=h,v):(v=r(v,S),v.return=h,v)}function l(h,v,S,x){var E=S.type;return E===Os?u(h,v,S.props.children,x,S.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===hr&&l0(E)===v.type)?(x=r(v,S.props),x.ref=Io(h,v,S),x.return=h,x):(x=lc(S.type,S.key,S.props,null,h.mode,x),x.ref=Io(h,v,S),x.return=h,x)}function c(h,v,S,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=vf(S,h.mode,x),v.return=h,v):(v=r(v,S.children||[]),v.return=h,v)}function u(h,v,S,x,E){return v===null||v.tag!==7?(v=ns(S,h.mode,x,E),v.return=h,v):(v=r(v,S),v.return=h,v)}function d(h,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=gf(""+v,h.mode,S),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rl:return S=lc(v.type,v.key,v.props,null,h.mode,S),S.ref=Io(h,null,v),S.return=h,S;case Fs:return v=vf(v,h.mode,S),v.return=h,v;case hr:var x=v._init;return d(h,x(v._payload),S)}if(jo(v)||bo(v))return v=ns(v,h.mode,S,null),v.return=h,v;ml(h,v)}return null}function f(h,v,S,x){var E=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return E!==null?null:a(h,v,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case rl:return S.key===E?l(h,v,S,x):null;case Fs:return S.key===E?c(h,v,S,x):null;case hr:return E=S._init,f(h,v,E(S._payload),x)}if(jo(S)||bo(S))return E!==null?null:u(h,v,S,x,null);ml(h,S)}return null}function p(h,v,S,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(S)||null,a(v,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rl:return h=h.get(x.key===null?S:x.key)||null,l(v,h,x,E);case Fs:return h=h.get(x.key===null?S:x.key)||null,c(v,h,x,E);case hr:var A=x._init;return p(h,v,S,A(x._payload),E)}if(jo(x)||bo(x))return h=h.get(S)||null,u(v,h,x,E,null);ml(v,x)}return null}function m(h,v,S,x){for(var E=null,A=null,w=v,_=v=0,C=null;w!==null&&_<S.length;_++){w.index>_?(C=w,w=null):C=w.sibling;var P=f(h,w,S[_],x);if(P===null){w===null&&(w=C);break}t&&w&&P.alternate===null&&e(h,w),v=s(P,v,_),A===null?E=P:A.sibling=P,A=P,w=C}if(_===S.length)return n(h,w),_t&&Xr(h,_),E;if(w===null){for(;_<S.length;_++)w=d(h,S[_],x),w!==null&&(v=s(w,v,_),A===null?E=w:A.sibling=w,A=w);return _t&&Xr(h,_),E}for(w=i(h,w);_<S.length;_++)C=p(w,h,_,S[_],x),C!==null&&(t&&C.alternate!==null&&w.delete(C.key===null?_:C.key),v=s(C,v,_),A===null?E=C:A.sibling=C,A=C);return t&&w.forEach(function(I){return e(h,I)}),_t&&Xr(h,_),E}function y(h,v,S,x){var E=bo(S);if(typeof E!="function")throw Error(oe(150));if(S=E.call(S),S==null)throw Error(oe(151));for(var A=E=null,w=v,_=v=0,C=null,P=S.next();w!==null&&!P.done;_++,P=S.next()){w.index>_?(C=w,w=null):C=w.sibling;var I=f(h,w,P.value,x);if(I===null){w===null&&(w=C);break}t&&w&&I.alternate===null&&e(h,w),v=s(I,v,_),A===null?E=I:A.sibling=I,A=I,w=C}if(P.done)return n(h,w),_t&&Xr(h,_),E;if(w===null){for(;!P.done;_++,P=S.next())P=d(h,P.value,x),P!==null&&(v=s(P,v,_),A===null?E=P:A.sibling=P,A=P);return _t&&Xr(h,_),E}for(w=i(h,w);!P.done;_++,P=S.next())P=p(w,h,_,P.value,x),P!==null&&(t&&P.alternate!==null&&w.delete(P.key===null?_:P.key),v=s(P,v,_),A===null?E=P:A.sibling=P,A=P);return t&&w.forEach(function(F){return e(h,F)}),_t&&Xr(h,_),E}function g(h,v,S,x){if(typeof S=="object"&&S!==null&&S.type===Os&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case rl:e:{for(var E=S.key,A=v;A!==null;){if(A.key===E){if(E=S.type,E===Os){if(A.tag===7){n(h,A.sibling),v=r(A,S.props.children),v.return=h,h=v;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===hr&&l0(E)===A.type){n(h,A.sibling),v=r(A,S.props),v.ref=Io(h,A,S),v.return=h,h=v;break e}n(h,A);break}else e(h,A);A=A.sibling}S.type===Os?(v=ns(S.props.children,h.mode,x,S.key),v.return=h,h=v):(x=lc(S.type,S.key,S.props,null,h.mode,x),x.ref=Io(h,v,S),x.return=h,h=x)}return o(h);case Fs:e:{for(A=S.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(h,v.sibling),v=r(v,S.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=vf(S,h.mode,x),v.return=h,h=v}return o(h);case hr:return A=S._init,g(h,v,A(S._payload),x)}if(jo(S))return m(h,v,S,x);if(bo(S))return y(h,v,S,x);ml(h,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,S),v.return=h,h=v):(n(h,v),v=gf(S,h.mode,x),v.return=h,h=v),o(h)):n(h,v)}return g}var ho=hx(!0),px=hx(!1),kc=Ur(null),Bc=null,Xs=null,$p=null;function jp(){$p=Xs=Bc=null}function qp(t){var e=kc.current;gt(kc),t._currentValue=e}function jd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ro(t,e){Bc=t,$p=Xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if($p!==t)if(t={context:t,memoizedValue:e,next:null},Xs===null){if(Bc===null)throw Error(oe(308));Xs=t,Bc.dependencies={lanes:0,firstContext:t}}else Xs=Xs.next=t;return e}var qr=null;function Kp(t){qr===null?qr=[t]:qr.push(t)}function mx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Zi(t,i)}function Zi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pr=!1;function Zp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Zi(t,n)}return r=i.interleaved,r===null?(e.next=e,Kp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Zi(t,n)}function nc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fp(t,n)}}function c0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vc(t,e,n,i){var r=t.updateQueue;pr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,y=a;switch(f=e,p=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=Tt({},d,f);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);cs|=o,t.lanes=o,t.memoizedState=d}}function u0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var $a={},wi=Ur($a),Ea=Ur($a),Ta=Ur($a);function Kr(t){if(t===$a)throw Error(oe(174));return t}function Jp(t,e){switch(ht(Ta,e),ht(Ea,t),ht(wi,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bd(e,t)}gt(wi),ht(wi,e)}function po(){gt(wi),gt(Ea),gt(Ta)}function vx(t){Kr(Ta.current);var e=Kr(wi.current),n=bd(e,t.type);e!==n&&(ht(Ea,t),ht(wi,n))}function Qp(t){Ea.current===t&&(gt(wi),gt(Ea))}var xt=Ur(0);function zc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uf=[];function em(){for(var t=0;t<uf.length;t++)uf[t]._workInProgressVersionPrimary=null;uf.length=0}var ic=tr.ReactCurrentDispatcher,ff=tr.ReactCurrentBatchConfig,ls=0,Mt=null,Ot=null,Gt=null,Hc=!1,sa=!1,wa=0,kw=0;function Qt(){throw Error(oe(321))}function tm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function nm(t,e,n,i,r,s){if(ls=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?Hw:Gw,t=n(i,r),sa){s=0;do{if(sa=!1,wa=0,25<=s)throw Error(oe(301));s+=1,Gt=Ot=null,e.updateQueue=null,ic.current=Ww,t=n(i,r)}while(sa)}if(ic.current=Gc,e=Ot!==null&&Ot.next!==null,ls=0,Gt=Ot=Mt=null,Hc=!1,e)throw Error(oe(300));return t}function im(){var t=wa!==0;return wa=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function $n(){if(Ot===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Gt===null?Mt.memoizedState:Gt.next;if(e!==null)Gt=e,Ot=t;else{if(t===null)throw Error(oe(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Gt===null?Mt.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function Aa(t,e){return typeof e=="function"?e(t):e}function df(t){var e=$n(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((ls&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Mt.lanes|=u,cs|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,hi(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,cs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hf(t){var e=$n(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);hi(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function _x(){}function yx(t,e){var n=Mt,i=$n(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,rm(Mx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Ca(9,Sx.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(oe(349));ls&30||xx(n,e,r)}return r}function xx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sx(t,e,n,i){e.value=n,e.getSnapshot=i,Ex(e)&&Tx(t)}function Mx(t,e,n){return n(function(){Ex(e)&&Tx(t)})}function Ex(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function Tx(t){var e=Zi(t,1);e!==null&&ci(e,t,1,-1)}function f0(t){var e=yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},e.queue=t,t=t.dispatch=zw.bind(null,Mt,t),[e.memoizedState,t]}function Ca(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function wx(){return $n().memoizedState}function rc(t,e,n,i){var r=yi();Mt.flags|=t,r.memoizedState=Ca(1|e,n,void 0,i===void 0?null:i)}function Eu(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&tm(i,o.deps)){r.memoizedState=Ca(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Ca(1|e,n,s,i)}function d0(t,e){return rc(8390656,8,t,e)}function rm(t,e){return Eu(2048,8,t,e)}function Ax(t,e){return Eu(4,2,t,e)}function Cx(t,e){return Eu(4,4,t,e)}function bx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rx(t,e,n){return n=n!=null?n.concat([t]):null,Eu(4,4,bx.bind(null,e,t),n)}function sm(){}function Px(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Lx(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Dx(t,e,n){return ls&21?(hi(n,e)||(n=Oy(),Mt.lanes|=n,cs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function Bw(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=ff.transition;ff.transition={};try{t(!1),e()}finally{ot=n,ff.transition=i}}function Ix(){return $n().memoizedState}function Vw(t,e,n){var i=Cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Nx(t))Ux(e,n);else if(n=mx(t,e,n,i),n!==null){var r=dn();ci(n,t,i,r),Fx(n,e,i)}}function zw(t,e,n){var i=Cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nx(t))Ux(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,hi(a,o)){var l=e.interleaved;l===null?(r.next=r,Kp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=mx(t,e,r,i),n!==null&&(r=dn(),ci(n,t,i,r),Fx(n,e,i))}}function Nx(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Ux(t,e){sa=Hc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fp(t,n)}}var Gc={readContext:Yn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},Hw={readContext:Yn,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:d0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,rc(4194308,4,bx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return rc(4194308,4,t,e)},useInsertionEffect:function(t,e){return rc(4,2,t,e)},useMemo:function(t,e){var n=yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Vw.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:f0,useDebugValue:sm,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=f0(!1),e=t[0];return t=Bw.bind(null,t[1]),yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=yi();if(_t){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Wt===null)throw Error(oe(349));ls&30||xx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,d0(Mx.bind(null,i,s,t),[t]),i.flags|=2048,Ca(9,Sx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=yi(),e=Wt.identifierPrefix;if(_t){var n=Wi,i=Gi;n=(i&~(1<<32-li(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=kw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gw={readContext:Yn,useCallback:Px,useContext:Yn,useEffect:rm,useImperativeHandle:Rx,useInsertionEffect:Ax,useLayoutEffect:Cx,useMemo:Lx,useReducer:df,useRef:wx,useState:function(){return df(Aa)},useDebugValue:sm,useDeferredValue:function(t){var e=$n();return Dx(e,Ot.memoizedState,t)},useTransition:function(){var t=df(Aa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:_x,useSyncExternalStore:yx,useId:Ix,unstable_isNewReconciler:!1},Ww={readContext:Yn,useCallback:Px,useContext:Yn,useEffect:rm,useImperativeHandle:Rx,useInsertionEffect:Ax,useLayoutEffect:Cx,useMemo:Lx,useReducer:hf,useRef:wx,useState:function(){return hf(Aa)},useDebugValue:sm,useDeferredValue:function(t){var e=$n();return Ot===null?e.memoizedState=t:Dx(e,Ot.memoizedState,t)},useTransition:function(){var t=hf(Aa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:_x,useSyncExternalStore:yx,useId:Ix,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=Tt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Tt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?vs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Cr(t),s=Yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(ci(e,t,r,i),nc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Cr(t),s=Yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(ci(e,t,r,i),nc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=Cr(t),r=Yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=wr(t,r,i),e!==null&&(ci(e,t,i,n),nc(e,t,i))}};function h0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ya(n,i)||!ya(r,s):!0}function Ox(t,e,n){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=Sn(e)?os:an.current,i=e.contextTypes,s=(i=i!=null)?uo(t,r):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function p0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function Kd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=Sn(e)?os:an.current,r.context=uo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tu.enqueueReplaceState(r,r.state,null),Vc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function mo(t,e){try{var n="",i=e;do n+=_T(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Xw=typeof WeakMap=="function"?WeakMap:Map;function kx(t,e,n){n=Yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Xc||(Xc=!0,ah=i),Zd(t,e)},n}function Bx(t,e,n){n=Yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zd(t,e),typeof i!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function m0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Xw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=sA.bind(null,t,e,n),e.then(t,t))}function g0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function v0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yi(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var Yw=tr.ReactCurrentOwner,yn=!1;function un(t,e,n,i){e.child=t===null?px(e,null,n,i):ho(e,t.child,n,i)}function _0(t,e,n,i,r){n=n.render;var s=e.ref;return ro(e,r),i=nm(t,e,n,i,s,r),n=im(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(_t&&n&&Wp(e),e.flags|=1,un(t,e,i,r),e.child)}function y0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vx(t,e,s,i,r)):(t=lc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ya,n(o,i)&&t.ref===e.ref)return Ji(t,e,r)}return e.flags|=1,t=br(s,i),t.ref=e.ref,t.return=e,e.child=t}function Vx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ya(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Ji(t,e,r)}return Jd(t,e,n,i,r)}function zx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht($s,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht($s,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht($s,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht($s,Cn),Cn|=i;return un(t,e,r,n),e.child}function Hx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jd(t,e,n,i,r){var s=Sn(n)?os:an.current;return s=uo(e,s),ro(e,r),n=nm(t,e,n,i,s,r),i=im(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ji(t,e,r)):(_t&&i&&Wp(e),e.flags|=1,un(t,e,n,r),e.child)}function x0(t,e,n,i,r){if(Sn(n)){var s=!0;Uc(e)}else s=!1;if(ro(e,r),e.stateNode===null)sc(t,e),Ox(e,n,i),Kd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Yn(c):(c=Sn(n)?os:an.current,c=uo(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&p0(e,o,i,c),pr=!1;var f=e.memoizedState;o.state=f,Vc(e,i,o,r),l=e.memoizedState,a!==i||f!==l||xn.current||pr?(typeof u=="function"&&(qd(e,n,u,i),l=e.memoizedState),(a=pr||h0(e,n,a,i,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,gx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ti(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=Sn(n)?os:an.current,l=uo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&p0(e,o,i,l),pr=!1,f=e.memoizedState,o.state=f,Vc(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||xn.current||pr?(typeof p=="function"&&(qd(e,n,p,i),m=e.memoizedState),(c=pr||h0(e,n,c,i,f,m,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Qd(t,e,n,i,s,r)}function Qd(t,e,n,i,r,s){Hx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&s0(e,n,!1),Ji(t,e,s);i=e.stateNode,Yw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=ho(e,t.child,null,s),e.child=ho(e,null,a,s)):un(t,e,a,s),e.memoizedState=i.state,r&&s0(e,n,!0),e.child}function Gx(t){var e=t.stateNode;e.pendingContext?r0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&r0(t,e.context,!1),Jp(t,e.containerInfo)}function S0(t,e,n,i,r){return fo(),Yp(r),e.flags|=256,un(t,e,n,i),e.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wx(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(xt,r&1),t===null)return $d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cu(o,i,0,null),t=ns(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=th(n),e.memoizedState=eh,t):om(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return $w(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=br(a,s):(s=ns(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=eh,i}return s=t.child,t=s.sibling,i=br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function om(t,e){return e=Cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function gl(t,e,n,i){return i!==null&&Yp(i),ho(e,t.child,null,n),t=om(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $w(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=pf(Error(oe(422))),gl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cu({mode:"visible",children:i.children},r,0,null),s=ns(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ho(e,t.child,null,o),e.child.memoizedState=th(o),e.memoizedState=eh,s);if(!(e.mode&1))return gl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=pf(s,i,void 0),gl(t,e,o,i)}if(a=(o&t.childLanes)!==0,yn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Zi(t,r),ci(i,t,r,-1))}return dm(),i=pf(Error(oe(421))),gl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=oA.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,bn=Tr(r.nextSibling),Pn=e,_t=!0,ri=null,t!==null&&(Bn[Vn++]=Gi,Bn[Vn++]=Wi,Bn[Vn++]=as,Gi=t.id,Wi=t.overflow,as=e),e=om(e,i.children),e.flags|=4096,e)}function M0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),jd(t.return,e,n)}function mf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Xx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(un(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&M0(t,n,e);else if(t.tag===19)M0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&zc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&zc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mf(e,!0,n,null,s);break;case"together":mf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),cs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=br(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=br(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function jw(t,e,n){switch(e.tag){case 3:Gx(e),fo();break;case 5:vx(e);break;case 1:Sn(e.type)&&Uc(e);break;case 4:Jp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(kc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?Wx(t,e,n):(ht(xt,xt.current&1),t=Ji(t,e,n),t!==null?t.sibling:null);ht(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Xx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,zx(t,e,n)}return Ji(t,e,n)}var Yx,nh,$x,jx;Yx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nh=function(){};$x=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Kr(wi.current);var s=null;switch(n){case"input":r=Td(t,r),i=Td(t,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=Cd(t,r),i=Cd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ic)}Rd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(da.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(da.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};jx=function(t,e,n,i){n!==i&&(e.flags|=4)};function No(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qw(t,e,n){var i=e.pendingProps;switch(Xp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return Sn(e.type)&&Nc(),en(e),null;case 3:return i=e.stateNode,po(),gt(xn),gt(an),em(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ri!==null&&(uh(ri),ri=null))),nh(t,e),en(e),null;case 5:Qp(e);var r=Kr(Ta.current);if(n=e.type,t!==null&&e.stateNode!=null)$x(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return en(e),null}if(t=Kr(wi.current),pl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Ko.length;r++)mt(Ko[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":Lg(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":Ig(i,s),mt("invalid",i)}Rd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&hl(i.textContent,a,t),r=["children",""+a]):da.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":sl(i),Dg(i,s,!0);break;case"textarea":sl(i),Ng(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ic)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=My(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Si]=e,t[Ma]=i,Yx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pd(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ko.length;r++)mt(Ko[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":Lg(t,i),r=Td(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":Ig(t,i),r=Cd(t,i),mt("invalid",t);break;default:r=i}Rd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ey(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ha(t,l):typeof l=="number"&&ha(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Pp(t,s,l,o))}switch(n){case"input":sl(t),Dg(t,i,!1);break;case"textarea":sl(t),Ng(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?eo(t,!!i.multiple,s,!1):i.defaultValue!=null&&eo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ic)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)jx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Kr(Ta.current),Kr(wi.current),pl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:hl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&hl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return en(e),null;case 13:if(gt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&bn!==null&&e.mode&1&&!(e.flags&128))dx(),fo(),e.flags|=98560,s=!1;else if(s=pl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Si]=e}else fo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ri!==null&&(uh(ri),ri=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?kt===0&&(kt=3):dm())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return po(),nh(t,e),t===null&&xa(e.stateNode.containerInfo),en(e),null;case 10:return qp(e.type._context),en(e),null;case 17:return Sn(e.type)&&Nc(),en(e),null;case 19:if(gt(xt),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)No(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=zc(t),o!==null){for(e.flags|=128,No(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>go&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304)}else{if(!i)if(t=zc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),No(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return en(e),null}else 2*bt()-s.renderingStartTime>go&&n!==1073741824&&(e.flags|=128,i=!0,No(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=xt.current,ht(xt,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return fm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function Kw(t,e){switch(Xp(e),e.tag){case 1:return Sn(e.type)&&Nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return po(),gt(xn),gt(an),em(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qp(e),null;case 13:if(gt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));fo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(xt),null;case 4:return po(),null;case 10:return qp(e.type._context),null;case 22:case 23:return fm(),null;case 24:return null;default:return null}}var vl=!1,rn=!1,Zw=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Ys(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function ih(t,e,n){try{n()}catch(i){wt(t,e,i)}}var E0=!1;function Jw(t,e){if(Vd=Pc,t=Qy(),Gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(zd={focusedElem:t,selectionRange:n},Pc=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,g=m.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:ti(e.type,y),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(x){wt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return m=E0,E0=!1,m}function oa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ih(e,n,s)}r=r.next}while(r!==i)}}function wu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function rh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qx(t){var e=t.alternate;e!==null&&(t.alternate=null,qx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Si],delete e[Ma],delete e[Wd],delete e[Nw],delete e[Uw])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kx(t){return t.tag===5||t.tag===3||t.tag===4}function T0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ic));else if(i!==4&&(t=t.child,t!==null))for(sh(t,e,n),t=t.sibling;t!==null;)sh(t,e,n),t=t.sibling}function oh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(oh(t,e,n),t=t.sibling;t!==null;)oh(t,e,n),t=t.sibling}var Xt=null,ii=!1;function sr(t,e,n){for(n=n.child;n!==null;)Zx(t,e,n),n=n.sibling}function Zx(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 5:rn||Ys(n,e);case 6:var i=Xt,r=ii;Xt=null,sr(t,e,n),Xt=i,ii=r,Xt!==null&&(ii?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(ii?(t=Xt,n=n.stateNode,t.nodeType===8?lf(t.parentNode,n):t.nodeType===1&&lf(t,n),va(t)):lf(Xt,n.stateNode));break;case 4:i=Xt,r=ii,Xt=n.stateNode.containerInfo,ii=!0,sr(t,e,n),Xt=i,ii=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ih(n,e,o),r=r.next}while(r!==i)}sr(t,e,n);break;case 1:if(!rn&&(Ys(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}sr(t,e,n);break;case 21:sr(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,sr(t,e,n),rn=i):sr(t,e,n);break;default:sr(t,e,n)}}function w0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zw),e.forEach(function(i){var r=aA.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function qn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,ii=!1;break e;case 3:Xt=a.stateNode.containerInfo,ii=!0;break e;case 4:Xt=a.stateNode.containerInfo,ii=!0;break e}a=a.return}if(Xt===null)throw Error(oe(160));Zx(s,o,r),Xt=null,ii=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){wt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jx(e,t),e=e.sibling}function Jx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(qn(e,t),gi(t),i&4){try{oa(3,t,t.return),wu(3,t)}catch(y){wt(t,t.return,y)}try{oa(5,t,t.return)}catch(y){wt(t,t.return,y)}}break;case 1:qn(e,t),gi(t),i&512&&n!==null&&Ys(n,n.return);break;case 5:if(qn(e,t),gi(t),i&512&&n!==null&&Ys(n,n.return),t.flags&32){var r=t.stateNode;try{ha(r,"")}catch(y){wt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&xy(r,s),Pd(a,o);var c=Pd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?wy(r,d):u==="dangerouslySetInnerHTML"?Ey(r,d):u==="children"?ha(r,d):Pp(r,u,d,c)}switch(a){case"input":wd(r,s);break;case"textarea":Sy(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?eo(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?eo(r,!!s.multiple,s.defaultValue,!0):eo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ma]=s}catch(y){wt(t,t.return,y)}}break;case 6:if(qn(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){wt(t,t.return,y)}}break;case 3:if(qn(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(y){wt(t,t.return,y)}break;case 4:qn(e,t),gi(t);break;case 13:qn(e,t),gi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cm=bt())),i&4&&w0(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||u,qn(e,t),rn=c):qn(e,t),gi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Te=t,u=t.child;u!==null;){for(d=Te=u;Te!==null;){switch(f=Te,p=f.child,f.tag){case 0:case 11:case 14:case 15:oa(4,f,f.return);break;case 1:Ys(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(y){wt(i,n,y)}}break;case 5:Ys(f,f.return);break;case 22:if(f.memoizedState!==null){C0(d);continue}}p!==null?(p.return=f,Te=p):C0(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ty("display",o))}catch(y){wt(t,t.return,y)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){wt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:qn(e,t),gi(t),i&4&&w0(t);break;case 21:break;default:qn(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kx(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ha(r,""),i.flags&=-33);var s=T0(t);oh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=T0(t);sh(t,a,o);break;default:throw Error(oe(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qw(t,e,n){Te=t,Qx(t)}function Qx(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||vl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=vl;var c=rn;if(vl=o,(rn=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?b0(r):l!==null?(l.return=o,Te=l):b0(r);for(;s!==null;)Te=s,Qx(s),s=s.sibling;Te=r,vl=a,rn=c}A0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):A0(t)}}function A0(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||wu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&u0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}u0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&va(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}rn||e.flags&512&&rh(e)}catch(f){wt(e,e.return,f)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function C0(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function b0(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wu(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{rh(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{rh(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var eA=Math.ceil,Wc=tr.ReactCurrentDispatcher,am=tr.ReactCurrentOwner,Wn=tr.ReactCurrentBatchConfig,Ze=0,Wt=null,It=null,jt=0,Cn=0,$s=Ur(0),kt=0,ba=null,cs=0,Au=0,lm=0,aa=null,_n=null,cm=0,go=1/0,Vi=null,Xc=!1,ah=null,Ar=null,_l=!1,xr=null,Yc=0,la=0,lh=null,oc=-1,ac=0;function dn(){return Ze&6?bt():oc!==-1?oc:oc=bt()}function Cr(t){return t.mode&1?Ze&2&&jt!==0?jt&-jt:Ow.transition!==null?(ac===0&&(ac=Oy()),ac):(t=ot,t!==0||(t=window.event,t=t===void 0?16:Wy(t.type)),t):1}function ci(t,e,n,i){if(50<la)throw la=0,lh=null,Error(oe(185));Wa(t,n,i),(!(Ze&2)||t!==Wt)&&(t===Wt&&(!(Ze&2)&&(Au|=n),kt===4&&vr(t,jt)),Mn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(go=bt()+500,Mu&&Fr()))}function Mn(t,e){var n=t.callbackNode;OT(t,e);var i=Rc(t,t===Wt?jt:0);if(i===0)n!==null&&Og(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Og(n),e===1)t.tag===0?Fw(R0.bind(null,t)):cx(R0.bind(null,t)),Dw(function(){!(Ze&6)&&Fr()}),n=null;else{switch(ky(i)){case 1:n=Up;break;case 4:n=Uy;break;case 16:n=bc;break;case 536870912:n=Fy;break;default:n=bc}n=aS(n,eS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function eS(t,e){if(oc=-1,ac=0,Ze&6)throw Error(oe(327));var n=t.callbackNode;if(so()&&t.callbackNode!==n)return null;var i=Rc(t,t===Wt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=$c(t,i);else{e=i;var r=Ze;Ze|=2;var s=nS();(Wt!==t||jt!==e)&&(Vi=null,go=bt()+500,ts(t,e));do try{iA();break}catch(a){tS(t,a)}while(!0);jp(),Wc.current=s,Ze=r,It!==null?e=0:(Wt=null,jt=0,e=kt)}if(e!==0){if(e===2&&(r=Ud(t),r!==0&&(i=r,e=ch(t,r))),e===1)throw n=ba,ts(t,0),vr(t,i),Mn(t,bt()),n;if(e===6)vr(t,i);else{if(r=t.current.alternate,!(i&30)&&!tA(r)&&(e=$c(t,i),e===2&&(s=Ud(t),s!==0&&(i=s,e=ch(t,s))),e===1))throw n=ba,ts(t,0),vr(t,i),Mn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Yr(t,_n,Vi);break;case 3:if(vr(t,i),(i&130023424)===i&&(e=cm+500-bt(),10<e)){if(Rc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gd(Yr.bind(null,t,_n,Vi),e);break}Yr(t,_n,Vi);break;case 4:if(vr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-li(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*eA(i/1960))-i,10<i){t.timeoutHandle=Gd(Yr.bind(null,t,_n,Vi),i);break}Yr(t,_n,Vi);break;case 5:Yr(t,_n,Vi);break;default:throw Error(oe(329))}}}return Mn(t,bt()),t.callbackNode===n?eS.bind(null,t):null}function ch(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(ts(t,e).flags|=256),t=$c(t,e),t!==2&&(e=_n,_n=n,e!==null&&uh(e)),t}function uh(t){_n===null?_n=t:_n.push.apply(_n,t)}function tA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vr(t,e){for(e&=~lm,e&=~Au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-li(e),i=1<<n;t[n]=-1,e&=~i}}function R0(t){if(Ze&6)throw Error(oe(327));so();var e=Rc(t,0);if(!(e&1))return Mn(t,bt()),null;var n=$c(t,e);if(t.tag!==0&&n===2){var i=Ud(t);i!==0&&(e=i,n=ch(t,i))}if(n===1)throw n=ba,ts(t,0),vr(t,e),Mn(t,bt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,_n,Vi),Mn(t,bt()),null}function um(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(go=bt()+500,Mu&&Fr())}}function us(t){xr!==null&&xr.tag===0&&!(Ze&6)&&so();var e=Ze;Ze|=1;var n=Wn.transition,i=ot;try{if(Wn.transition=null,ot=1,t)return t()}finally{ot=i,Wn.transition=n,Ze=e,!(Ze&6)&&Fr()}}function fm(){Cn=$s.current,gt($s)}function ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lw(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(Xp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nc();break;case 3:po(),gt(xn),gt(an),em();break;case 5:Qp(i);break;case 4:po();break;case 13:gt(xt);break;case 19:gt(xt);break;case 10:qp(i.type._context);break;case 22:case 23:fm()}n=n.return}if(Wt=t,It=t=br(t.current,null),jt=Cn=e,kt=0,ba=null,lm=Au=cs=0,_n=aa=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}qr=null}return t}function tS(t,e){do{var n=It;try{if(jp(),ic.current=Gc,Hc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Hc=!1}if(ls=0,Gt=Ot=Mt=null,sa=!1,wa=0,am.current=null,n===null||n.return===null){kt=1,ba=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=g0(o);if(p!==null){p.flags&=-257,v0(p,o,a,s,e),p.mode&1&&m0(s,c,e),e=p,l=c;var m=e.updateQueue;if(m===null){var y=new Set;y.add(l),e.updateQueue=y}else m.add(l);break e}else{if(!(e&1)){m0(s,c,e),dm();break e}l=Error(oe(426))}}else if(_t&&a.mode&1){var g=g0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),v0(g,o,a,s,e),Yp(mo(l,a));break e}}s=l=mo(l,a),kt!==4&&(kt=2),aa===null?aa=[s]:aa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=kx(s,l,e);c0(s,h);break e;case 1:a=l;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Ar===null||!Ar.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Bx(s,a,e);c0(s,x);break e}}s=s.return}while(s!==null)}rS(n)}catch(E){e=E,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function nS(){var t=Wc.current;return Wc.current=Gc,t===null?Gc:t}function dm(){(kt===0||kt===3||kt===2)&&(kt=4),Wt===null||!(cs&268435455)&&!(Au&268435455)||vr(Wt,jt)}function $c(t,e){var n=Ze;Ze|=2;var i=nS();(Wt!==t||jt!==e)&&(Vi=null,ts(t,e));do try{nA();break}catch(r){tS(t,r)}while(!0);if(jp(),Ze=n,Wc.current=i,It!==null)throw Error(oe(261));return Wt=null,jt=0,kt}function nA(){for(;It!==null;)iS(It)}function iA(){for(;It!==null&&!bT();)iS(It)}function iS(t){var e=oS(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?rS(t):It=e,am.current=null}function rS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kw(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,It=null;return}}else if(n=qw(n,e,Cn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);kt===0&&(kt=5)}function Yr(t,e,n){var i=ot,r=Wn.transition;try{Wn.transition=null,ot=1,rA(t,e,n,i)}finally{Wn.transition=r,ot=i}return null}function rA(t,e,n,i){do so();while(xr!==null);if(Ze&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(kT(t,s),t===Wt&&(It=Wt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||_l||(_l=!0,aS(bc,function(){return so(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var o=ot;ot=1;var a=Ze;Ze|=4,am.current=null,Jw(t,n),Jx(n,t),Tw(zd),Pc=!!Vd,zd=Vd=null,t.current=n,Qw(n),RT(),Ze=a,ot=o,Wn.transition=s}else t.current=n;if(_l&&(_l=!1,xr=t,Yc=r),s=t.pendingLanes,s===0&&(Ar=null),DT(n.stateNode),Mn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xc)throw Xc=!1,t=ah,ah=null,t;return Yc&1&&t.tag!==0&&so(),s=t.pendingLanes,s&1?t===lh?la++:(la=0,lh=t):la=0,Fr(),null}function so(){if(xr!==null){var t=ky(Yc),e=Wn.transition,n=ot;try{if(Wn.transition=null,ot=16>t?16:t,xr===null)var i=!1;else{if(t=xr,xr=null,Yc=0,Ze&6)throw Error(oe(331));var r=Ze;for(Ze|=4,Te=t.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var u=Te;switch(u.tag){case 0:case 11:case 15:oa(8,u,s)}var d=u.child;if(d!==null)d.return=u,Te=d;else for(;Te!==null;){u=Te;var f=u.sibling,p=u.return;if(qx(u),u===c){Te=null;break}if(f!==null){f.return=p,Te=f;break}Te=p}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Te=h;break e}Te=s.return}}var v=t.current;for(Te=v;Te!==null;){o=Te;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,Te=S;else e:for(o=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wu(9,a)}}catch(E){wt(a,a.return,E)}if(a===o){Te=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Te=x;break e}Te=a.return}}if(Ze=r,Fr(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(vu,t)}catch{}i=!0}return i}finally{ot=n,Wn.transition=e}}return!1}function P0(t,e,n){e=mo(n,e),e=kx(t,e,1),t=wr(t,e,1),e=dn(),t!==null&&(Wa(t,1,e),Mn(t,e))}function wt(t,e,n){if(t.tag===3)P0(t,t,n);else for(;e!==null;){if(e.tag===3){P0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ar===null||!Ar.has(i))){t=mo(n,t),t=Bx(e,t,1),e=wr(e,t,1),t=dn(),e!==null&&(Wa(e,1,t),Mn(e,t));break}}e=e.return}}function sA(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(jt&n)===n&&(kt===4||kt===3&&(jt&130023424)===jt&&500>bt()-cm?ts(t,0):lm|=n),Mn(t,e)}function sS(t,e){e===0&&(t.mode&1?(e=ll,ll<<=1,!(ll&130023424)&&(ll=4194304)):e=1);var n=dn();t=Zi(t,e),t!==null&&(Wa(t,e,n),Mn(t,n))}function oA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),sS(t,n)}function aA(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),sS(t,n)}var oS;oS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,jw(t,e,n);yn=!!(t.flags&131072)}else yn=!1,_t&&e.flags&1048576&&ux(e,Oc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;sc(t,e),t=e.pendingProps;var r=uo(e,an.current);ro(e,n),r=nm(null,e,i,t,r,n);var s=im();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Sn(i)?(s=!0,Uc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zp(e),r.updater=Tu,e.stateNode=r,r._reactInternals=e,Kd(e,i,t,n),e=Qd(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&Wp(e),un(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=cA(i),t=ti(i,t),r){case 0:e=Jd(null,e,i,t,n);break e;case 1:e=x0(null,e,i,t,n);break e;case 11:e=_0(null,e,i,t,n);break e;case 14:e=y0(null,e,i,ti(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Jd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),x0(t,e,i,r,n);case 3:e:{if(Gx(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,gx(t,e),Vc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=mo(Error(oe(423)),e),e=S0(t,e,i,n,r);break e}else if(i!==r){r=mo(Error(oe(424)),e),e=S0(t,e,i,n,r);break e}else for(bn=Tr(e.stateNode.containerInfo.firstChild),Pn=e,_t=!0,ri=null,n=px(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fo(),i===r){e=Ji(t,e,n);break e}un(t,e,i,n)}e=e.child}return e;case 5:return vx(e),t===null&&$d(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Hd(i,r)?o=null:s!==null&&Hd(i,s)&&(e.flags|=32),Hx(t,e),un(t,e,o,n),e.child;case 6:return t===null&&$d(e),null;case 13:return Wx(t,e,n);case 4:return Jp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ho(e,null,i,n):un(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),_0(t,e,i,r,n);case 7:return un(t,e,e.pendingProps,n),e.child;case 8:return un(t,e,e.pendingProps.children,n),e.child;case 12:return un(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(kc,i._currentValue),i._currentValue=o,s!==null)if(hi(s.value,o)){if(s.children===r.children&&!xn.current){e=Ji(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),jd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),jd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}un(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ro(e,n),r=Yn(r),i=i(r),e.flags|=1,un(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),y0(t,e,i,r,n);case 15:return Vx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),sc(t,e),e.tag=1,Sn(i)?(t=!0,Uc(e)):t=!1,ro(e,n),Ox(e,i,r),Kd(e,i,r,n),Qd(null,e,i,!0,t,n);case 19:return Xx(t,e,n);case 22:return zx(t,e,n)}throw Error(oe(156,e.tag))};function aS(t,e){return Ny(t,e)}function lA(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,e,n,i){return new lA(t,e,n,i)}function hm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cA(t){if(typeof t=="function")return hm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dp)return 11;if(t===Ip)return 14}return 2}function br(t,e){var n=t.alternate;return n===null?(n=Gn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function lc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")hm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Os:return ns(n.children,r,s,e);case Lp:o=8,r|=8;break;case xd:return t=Gn(12,n,e,r|2),t.elementType=xd,t.lanes=s,t;case Sd:return t=Gn(13,n,e,r),t.elementType=Sd,t.lanes=s,t;case Md:return t=Gn(19,n,e,r),t.elementType=Md,t.lanes=s,t;case vy:return Cu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case my:o=10;break e;case gy:o=9;break e;case Dp:o=11;break e;case Ip:o=14;break e;case hr:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Gn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ns(t,e,n,i){return t=Gn(7,t,i,e),t.lanes=n,t}function Cu(t,e,n,i){return t=Gn(22,t,i,e),t.elementType=vy,t.lanes=n,t.stateNode={isHidden:!1},t}function gf(t,e,n){return t=Gn(6,t,null,e),t.lanes=n,t}function vf(t,e,n){return e=Gn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uA(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pm(t,e,n,i,r,s,o,a,l){return t=new uA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Gn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zp(s),t}function fA(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function lS(t){if(!t)return Dr;t=t._reactInternals;e:{if(vs(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(Sn(n))return lx(t,n,e)}return e}function cS(t,e,n,i,r,s,o,a,l){return t=pm(n,i,!0,t,r,s,o,a,l),t.context=lS(null),n=t.current,i=dn(),r=Cr(n),s=Yi(i,r),s.callback=e??null,wr(n,s,r),t.current.lanes=r,Wa(t,r,i),Mn(t,i),t}function bu(t,e,n,i){var r=e.current,s=dn(),o=Cr(r);return n=lS(n),e.context===null?e.context=n:e.pendingContext=n,e=Yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=wr(r,e,o),t!==null&&(ci(t,r,o,s),nc(t,r,o)),o}function jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function L0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mm(t,e){L0(t,e),(t=t.alternate)&&L0(t,e)}function dA(){return null}var uS=typeof reportError=="function"?reportError:function(t){console.error(t)};function gm(t){this._internalRoot=t}Ru.prototype.render=gm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));bu(t,e,null,null)};Ru.prototype.unmount=gm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;us(function(){bu(null,t,null,null)}),e[Ki]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=zy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gr.length&&e!==0&&e<gr[n].priority;n++);gr.splice(n,0,t),n===0&&Gy(t)}};function vm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function D0(){}function hA(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=jc(o);s.call(c)}}var o=cS(e,i,t,0,null,!1,!1,"",D0);return t._reactRootContainer=o,t[Ki]=o.current,xa(t.nodeType===8?t.parentNode:t),us(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=jc(l);a.call(c)}}var l=pm(t,0,!1,null,null,!1,!1,"",D0);return t._reactRootContainer=l,t[Ki]=l.current,xa(t.nodeType===8?t.parentNode:t),us(function(){bu(e,l,n,i)}),l}function Lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=jc(o);a.call(l)}}bu(e,o,t,r)}else o=hA(n,e,t,r,i);return jc(o)}By=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=qo(e.pendingLanes);n!==0&&(Fp(e,n|1),Mn(e,bt()),!(Ze&6)&&(go=bt()+500,Fr()))}break;case 13:us(function(){var i=Zi(t,1);if(i!==null){var r=dn();ci(i,t,1,r)}}),mm(t,1)}};Op=function(t){if(t.tag===13){var e=Zi(t,134217728);if(e!==null){var n=dn();ci(e,t,134217728,n)}mm(t,134217728)}};Vy=function(t){if(t.tag===13){var e=Cr(t),n=Zi(t,e);if(n!==null){var i=dn();ci(n,t,e,i)}mm(t,e)}};zy=function(){return ot};Hy=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Dd=function(t,e,n){switch(e){case"input":if(wd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Su(i);if(!r)throw Error(oe(90));yy(i),wd(i,r)}}}break;case"textarea":Sy(t,n);break;case"select":e=n.value,e!=null&&eo(t,!!n.multiple,e,!1)}};by=um;Ry=us;var pA={usingClientEntryPoint:!1,Events:[Ya,zs,Su,Ay,Cy,um]},Uo={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mA={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dy(t),t===null?null:t.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||dA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{vu=yl.inject(mA),Ti=yl}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pA;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vm(e))throw Error(oe(200));return fA(t,e,null,n)};Nn.createRoot=function(t,e){if(!vm(t))throw Error(oe(299));var n=!1,i="",r=uS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pm(t,1,!1,null,null,n,!1,i,r),t[Ki]=e.current,xa(t.nodeType===8?t.parentNode:t),new gm(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Dy(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return us(t)};Nn.hydrate=function(t,e,n){if(!Pu(e))throw Error(oe(200));return Lu(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!vm(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=uS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cS(e,null,t,1,n??null,r,!1,s,o),t[Ki]=e.current,xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ru(e)};Nn.render=function(t,e,n){if(!Pu(e))throw Error(oe(200));return Lu(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!Pu(t))throw Error(oe(40));return t._reactRootContainer?(us(function(){Lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ki]=null})}),!0):!1};Nn.unstable_batchedUpdates=um;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pu(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Lu(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function fS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fS)}catch(t){console.error(t)}}fS(),fy.exports=Nn;var gA=fy.exports,I0=gA;_d.createRoot=I0.createRoot,_d.hydrateRoot=I0.hydrateRoot;function vA({words:t,typeSpeed:e=70,deleteSpeed:n=35,pause:i=1500,className:r=""}){const s=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,[o,a]=ce.useState(0),[l,c]=ce.useState(s?t[0]:""),[u,d]=ce.useState(!1);return ce.useEffect(()=>{if(s)return;const f=t[o%t.length];let p;return!u&&l===f?p=setTimeout(()=>d(!0),i):u&&l===""?(d(!1),a(m=>(m+1)%t.length)):p=setTimeout(()=>{c(m=>u?f.slice(0,m.length-1):f.slice(0,m.length+1))},u?n:e),()=>clearTimeout(p)},[l,u,o,t,e,n,i,s]),W.jsxs("span",{className:`typewriter ${r}`,children:[W.jsx("span",{className:"typewriter-text",children:l}),!s&&W.jsx("span",{className:"typewriter-cursor","aria-hidden":"true"})]})}const _m=ce.createContext({});function ym(t){const e=ce.useRef(null);return e.current===null&&(e.current=t()),e.current}const _A=typeof window<"u",Ra=_A?ce.useLayoutEffect:ce.useEffect,Du=ce.createContext(null);function xm(t,e){t.indexOf(e)===-1&&t.push(e)}function qc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Ii=(t,e,n)=>n>e?e:n<t?t:n;let Iu=()=>{};const bi={},Sm=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),dS=t=>typeof t=="object"&&t!==null,Mm=t=>/^0[^.\s]+$/u.test(t);function hS(t){let e;return()=>(e===void 0&&(e=t()),e)}const ui=t=>t,ja=(...t)=>t.reduce((e,n)=>i=>n(e(i))),fs=(t,e,n)=>{const i=e-t;return i?(n-t)/i:1};class Kc{constructor(){this.subscriptions=[]}add(e){return xm(this.subscriptions,e),()=>this.remove(e)}remove(e){qc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Xn=t=>t*1e3,Rn=t=>t/1e3,pS=(t,e)=>e?t*(1e3/e):0,_f=(t,e,n)=>t*(3*(1-t)*((1-t)*e+t*n)+t*t);function qa(t,e,n,i){return t===e&&n===i?ui:r=>{let s=0,o=1,a=r;for(let l=0;;l++){a>=s&&a<=o||(a=(s+o)/2);const c=_f(a,t,n)-r;if(c*c<1e-28||l===40)break;c>0?o=a:s=a,a-=c*1e-7/(_f(a+1e-7,t,n)-r-c)}return _f(a,e,i)}}const mS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,gS=t=>e=>1-t(1-e),vS=qa(.33,1.53,.69,.99),Em=gS(vS),_S=mS(Em),yS=t=>t>=1?1:(t*=2)<1?.5*Em(t):.5*(2-Math.pow(2,-10*(t-1))),Tm=t=>1-Math.sin(Math.acos(t)),xS=gS(Tm),SS=mS(Tm),yA=qa(.42,0,1,1),xA=qa(0,0,.58,1),wm=qa(.42,0,.58,1),SA=t=>Array.isArray(t)&&typeof t[0]!="number",Am=t=>Array.isArray(t)&&typeof t[0]=="number",MA={linear:ui,easeIn:yA,easeInOut:wm,easeOut:xA,circIn:Tm,circInOut:SS,circOut:xS,backIn:Em,backInOut:_S,backOut:vS,anticipate:yS},EA=t=>typeof t=="string",N0=t=>{if(Am(t)){Iu(t.length===4);const[e,n,i,r]=t;return qa(e,n,i,r)}else if(EA(t))return MA[t];return t},Dt={delta:0,timestamp:0,isProcessing:!1};let cc;function TA(){cc=void 0}const St={now:()=>(cc===void 0&&St.set(Dt.isProcessing||bi.useManualTiming?Dt.timestamp:performance.now()),cc),set:t=>{cc=t,queueMicrotask(TA)}},oo=t=>Math.round(t*1e5)/1e5,MS=t=>e=>typeof e=="string"&&e.startsWith(t),ES=MS("--"),wA=MS("var(--"),Nu=t=>wA(t)?AA.test(t.split("/*")[0].trim()):!1,AA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function yf(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const To={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Pa={...To,transform:t=>Ii(0,1,t)},xl={...To,default:1},Cm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function CA(t){return t==null}const bA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,bm=(t,e)=>n=>!!(typeof n=="string"&&bA.test(n)&&n.startsWith(t)||e&&!CA(n)&&Object.prototype.hasOwnProperty.call(n,e)),TS=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Cm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},RA=t=>Ii(0,255,t),xf={...To,transform:t=>Math.round(RA(t))},Zr={test:bm("rgb","red"),parse:TS("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+xf.transform(t)+", "+xf.transform(e)+", "+xf.transform(n)+", "+oo(Pa.transform(i))+")"};function PA(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const fh={test:bm("#"),parse:PA,transform:Zr.transform},Ka=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Bi=Ka("deg"),Ai=Ka("%"),we=Ka("px"),LA=Ka("vh"),DA=Ka("vw"),U0={...Ai,parse:t=>Ai.parse(t)/100,transform:t=>Ai.transform(t*100)},js={test:bm("hsl","hue"),parse:TS("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ai.transform(oo(e))+", "+Ai.transform(oo(n))+", "+oo(Pa.transform(i))+")"},Ft={test:t=>Zr.test(t)||fh.test(t)||js.test(t),parse:t=>Zr.test(t)?Zr.parse(t):js.test(t)?js.parse(t):fh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Zr.transform(t):js.transform(t),getAnimatableNone:t=>{const e=Ft.parse(t);return e.alpha=0,Ft.transform(e)}},IA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,wS=new RegExp(Cm.source),AS=new RegExp(IA.source,"i");function NA(t){return isNaN(t)&&typeof t=="string"&&(wS.test(t)||AS.test(t))}const CS="number",bS="color",UA="var",FA="var(",F0="${}",OA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;function kA(t){const e=t.toString();return wS.test(e)||AS.test(e)}function La(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(OA,l=>(Ft.test(l)?(i.color.push(s),r.push(bS),n.push(Ft.parse(l))):l.startsWith(FA)?(i.var.push(s),r.push(UA),n.push(l)):(i.number.push(s),r.push(CS),n.push(parseFloat(l))),++s,F0)).split(F0);return{values:n,split:a,indexes:i,types:r}}function BA(t){return La(t).values}function RS({split:t,types:e}){const n=t.length;return i=>{let r="";for(let s=0;s<n;s++)if(r+=t[s],i[s]!==void 0){const o=e[s];o===CS?r+=oo(i[s]):o===bS?r+=Ft.transform(i[s]):r+=i[s]}return r}}function VA(t){return RS(La(t))}const zA=t=>typeof t=="number"?0:Ft.test(t)?Ft.getAnimatableNone(t):t,HA=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:zA(t);function GA(t){const e=La(t);return RS(e)(e.values.map((i,r)=>HA(i,e.split[r])))}const Ln={test:NA,parse:BA,createTransformer:VA,getAnimatableNone:GA};function Sf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function WA({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Sf(l,a,t+1/3),s=Sf(l,a,t),o=Sf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function Zc(t,e){return n=>n>0?e:t}const st=(t,e,n)=>t+(e-t)*n,Mf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},XA=[fh,Zr,js],YA=t=>XA.find(e=>e.test(t));function O0(t){const e=YA(t);if(!e)return!1;let n=e.parse(t);return e===js&&(n=WA(n)),n}const k0=(t,e)=>{const n=O0(t),i=O0(e);if(!n||!i)return Zc(t,e);const r={...n};return s=>(r.red=Mf(n.red,i.red,s),r.green=Mf(n.green,i.green,s),r.blue=Mf(n.blue,i.blue,s),r.alpha=st(n.alpha,i.alpha,s),Zr.transform(r))},dh=new Set(["none","hidden"]);function $A(t,e){return dh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function jA(t,e){return n=>st(t,e,n)}function Rm(t){return typeof t=="number"?jA:typeof t=="string"?Nu(t)?Zc:Ft.test(t)?k0:ZA:Array.isArray(t)?PS:typeof t=="object"?Ft.test(t)?k0:qA:Zc}function PS(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Rm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function qA(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Rm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function KA(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const ZA=(t,e)=>{const n=Ln.createTransformer(e),i=La(t),r=La(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?dh.has(t)&&!r.values.length||dh.has(e)&&!i.values.length?$A(t,e):ja(PS(KA(i,r),r.values),n):Zc(t,e)},B0=/^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;function JA(t,e){const n=B0.exec(t);if(!n)return;const i=B0.exec(e);if(!i||n[2]!==i[2])return;const r=n[2],s=parseFloat(n[1]),o=parseFloat(i[1]);return a=>oo(st(s,o,a))+r}function Pm(t,e,n){if(typeof t=="number"&&typeof e=="number"&&typeof n=="number")return st(t,e,n);if(typeof t=="string"&&typeof e=="string"){const r=JA(t,e);if(r)return r}return Rm(t)(t,e)}const Sl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function QA(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new Set;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(n.add(c),t()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const p=d&&i?e:n;return u&&s.add(c),p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0;const u=e;e=n,n=u,e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const e1=40;function LS(t,e,n={delta:0,timestamp:0,isProcessing:!1}){let i=!1,r=!0;const s=()=>i=!0,o=Sl.reduce((S,x)=>(S[x]=QA(s),S),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:u,update:d,preRender:f,render:p,postRender:m}=o,y=()=>{const S=bi.useManualTiming,x=S?n.timestamp:performance.now();i=!1,S||(n.delta=r?1e3/60:Math.max(Math.min(x-n.timestamp,e1),1)),n.timestamp=x,n.isProcessing=!0,a.process(n),l.process(n),c.process(n),u.process(n),d.process(n),f.process(n),p.process(n),m.process(n),n.isProcessing=!1,i&&e&&(r=!1,t(y))},g=()=>{i=!0,r=!0,n.isProcessing||t(y)};return{schedule:Sl.reduce((S,x)=>{const E=o[x];return S[x]=(A,w=!1,_=!1)=>(i||g(),E.schedule(A,w,_)),S},{}),cancel:S=>{for(let x=0;x<Sl.length;x++)o[Sl[x]].cancel(S)},state:n,steps:o}}const{schedule:lt,cancel:Ir,steps:Ef}=LS(typeof requestAnimationFrame<"u"?requestAnimationFrame:ui,!0,Dt),DS=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>lt.update(e,n),stop:()=>Ir(e),now:()=>Dt.isProcessing?Dt.timestamp:St.now()}},IS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Lm=2e4;function Dm(t,e=50,n=Lm,i){let r=0,s=t.next(r);for(;!s.done&&r<n;)r+=e,s=t.next(r);return r>=n?1/0:r}function t1(t,e=100,n){const{keyframes:i,velocity:r}=t,s=i&&i[i.length-1]-i[0],o=n({...t,velocity:r&&s?r*e/s:r,keyframes:[0,e]}),a=Math.min(Dm(o),Lm);return{type:"keyframes",ease:l=>o.next(a*l).value/e,duration:Rn(a)}}const Yt={stiffness:100,damping:10,mass:1,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05},NS=t=>t<0?1/Math.max(1+t,Yt.minDamping):Math.max(1-t,Yt.minDamping);function US(t,e){if(!(t>1))return 1;const n=Math.sqrt(t*t-1),i=t-n,r=t+n,s=2*n*Math.exp(-e)*(1+e);return FS(o=>r*Math.exp(-i*o)-i*Math.exp(-r*o)-s,o=>Math.exp(-r*o)-Math.exp(-i*o),e)/e}function hh(t,e){return t*Math.sqrt(1-e*e)}const n1=12;function FS(t,e,n){let i=n;for(let r=1;r<n1;r++)i=i-t(i)/e(i);return i}const Tf=.001;function i1({duration:t=Yt.duration,bounce:e=Yt.bounce}){let n,i;const r=NS(e);t=Ii(Yt.minDuration,Yt.maxDuration,Rn(t)),r<1?(n=c=>{const u=c*r,d=u*t,f=hh(c,r),p=Math.exp(-d);return Tf-u/f*p},i=c=>{const d=c*r*t,f=r*r*c*c*t,p=Math.exp(-d),m=hh(c*c,r);return(-n(c)+Tf>0?-1:1)*-f*p/m}):(n=c=>{const u=Math.exp(-c*t),d=c*t+1;return-Tf+u*d},i=c=>{const u=Math.exp(-c*t),d=-c*(t*t);return u*d});const s=5/t,o=FS(n,i,s),a=o*US(r,o*t),l=a*a;return{stiffness:l,damping:r*2*Math.sqrt(l),duration:Xn(t)}}const ph=(t,e)=>(e?t>=0:t>0)&&t<1/0;function wf(t,e){if(ph(t,e))return t}function r1(t){const e=wf(t.stiffness),n=wf(t.damping,!0),i=wf(t.mass),r={...t,stiffness:e??Yt.stiffness,damping:n??Yt.damping,mass:i??Yt.mass,isResolvedFromDuration:!1,isTimeDefined:(e??n??i)===void 0&&(t.duration!==void 0||t.bounce!==void 0)};if(r.isTimeDefined){if(t.visualDuration){const s=NS(t.bounce||0),o=2*Math.PI/(t.visualDuration*1.2)*US(s,2*Math.PI/1.2);r.stiffness=o*o,r.damping=2*s*Math.sqrt(r.stiffness)}else Object.assign(r,i1(r)),r.isResolvedFromDuration=!0;(!ph(r.stiffness)||!ph(r.damping,!0))&&(r.stiffness=Yt.stiffness,r.damping=Yt.damping)}return r}function Jc(t=Yt.visualDuration,e=Yt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t,i=n.keyframes[0],r=n.keyframes[n.keyframes.length-1],s={done:!1,value:i},{stiffness:o,damping:a,mass:l,duration:c,isResolvedFromDuration:u,isTimeDefined:d}=r1({...n}),f=w=>d?0:-Rn(w),p=a/(2*Math.sqrt(o*l)),m=Rn(Math.sqrt(o/l)),y=p*m,g={target:r,delta:r-i,velocity:f(n.velocity||0)||0,restSpeed:0,restDelta:0},h=()=>{const w=Math.abs(g.delta)<5;g.restSpeed=n.restSpeed||(w?Yt.restSpeed.granular:Yt.restSpeed.default),g.restDelta=n.restDelta||(w?Yt.restDelta.granular:Yt.restDelta.default)};h();let v,S,x;if(p<1){const w=hh(m,p),_={A:0,sinC:0,cosC:0,t:-1,env:0,sin:0,cos:0};x=()=>{_.A=(g.velocity+y*g.delta)/w,_.sinC=y*_.A+g.delta*w,_.cosC=y*g.delta-_.A*w};const C=P=>{P!==_.t&&(_.t=P,_.env=Math.exp(-y*P),_.sin=Math.sin(w*P),_.cos=Math.cos(w*P))};v=P=>(C(P),g.target-_.env*(_.A*_.sin+g.delta*_.cos)),S=P=>(C(P),_.env*(_.sinC*_.sin+_.cosC*_.cos))}else if(p===1){v=_=>g.target-Math.exp(-m*_)*(g.delta+(g.velocity+m*g.delta)*_);const w={C:0};x=()=>{w.C=g.velocity+m*g.delta},S=_=>Math.exp(-m*_)*(m*w.C*_-g.velocity)}else{const w=m*Math.sqrt(p*p-1),_=y-w,C=y+w,P=d?1/0:300/w,I=(L,b)=>Math.exp(b>P?-L*P-y*(b-P):-L*b),F={S:0,F:0};x=()=>{const L=(g.velocity+y*g.delta)/w;F.S=(g.delta+L)/2,F.F=(g.delta-L)/2},v=L=>g.target-F.S*I(_,L)-F.F*I(C,L),S=L=>_*F.S*I(_,L)+C*F.F*I(C,L)}x();const E=u&&c||null,A={calculatedDuration:E,retarget:(w,_)=>{g.target=w[w.length-1],g.delta=g.target-w[0],g.velocity=f(_),n.restSpeed&&n.restDelta||h(),A.calculatedDuration=E,s.done=!1,x()},velocity:w=>Xn(S(w)),next:w=>{const _=v(w);if(u)s.done=w>=c;else{const C=Xn(S(w));s.done=Math.abs(C)<=g.restSpeed&&Math.abs(g.target-_)<=g.restDelta}return s.value=s.done?g.target:_,s},toString:()=>{const w=Math.min(Dm(A),Lm),_=IS(C=>A.next(w*C).value,w,30);return w+"ms "+_},toTransition:()=>{}};return A}Jc.applyToOptions=t=>{const e=t1(t,100,Jc);return t.ease=e.ease,t.duration=Xn(e.duration),t.type="keyframes",t};function Qc({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],f={done:!1,value:d},p=w=>w<a||w>l,m=w=>a===void 0?l:l===void 0||Math.abs(a-w)<Math.abs(l-w)?a:l;let y=n*e;const g=d+y,h=o===void 0?g:o(g);h!==g&&(y=h-d);const v=w=>-y*Math.exp(-w/i),S=w=>{const _=v(w);f.done=Math.abs(_)<=c,f.value=f.done?h:h+_};let x,E;const A=w=>{p(f.value)&&(x=w,E=Jc({keyframes:[f.value,m(f.value)],velocity:-v(w)/i*1e3,damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return A(0),{calculatedDuration:null,next:w=>{let _=!1;return!E&&x===void 0&&(_=!0,S(w),A(w)),x!==void 0&&w>=x?E.next(w-x):(!_&&S(w),f)}}}function s1(t,e,n){const i=[],r=n||bi.mix||Pm,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||ui:e;a=ja(l,a)}i.push(a)}return i}function o1(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Iu(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=s1(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const f=fs(t[d],t[d+1],u);return a[d](f)};return n?u=>c(Ii(t[0],t[s-1],u)):c}function a1(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=fs(0,e,i);t.push(st(n,1,r))}}function OS(t){const e=[0];return a1(e,t.length-1),e}function l1(t,e){return t.map(n=>n*e)}function c1(t,e){return t.map(()=>e||wm).splice(0,t.length-1)}function Rr({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=SA(i)?i.map(N0):N0(i)||wm,s={done:!1,value:e[0]};if(e.length===2&&!Array.isArray(r)&&(!n||n.length!==2||n[0]===0&&n[1]===1)){const[l,c]=e,u=l===c?void 0:(bi.mix||Pm)(l,c);return{calculatedDuration:t,next:d=>(s.value=u?u(r(t>0?Ii(0,1,d/t):1)):c,s.done=d>=t,s)}}const o=l1(n&&n.length===e.length?n:OS(e),t),a=o1(o,e,{ease:Array.isArray(r)?r:c1(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const u1=5;function f1(t,e,n){const i=Math.max(e-u1,0);return pS(n-t(i),e-i)}function d1(t,e,n=0){return e<=0?n:t.velocity?t.velocity(e):f1(i=>t.next(i).value,e,t.next(e).value)}const h1=t=>t!==null;function Da(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(h1),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const p1={decay:Qc,inertia:Qc,tween:Rr,keyframes:Rr,spring:Jc};function kS(t){typeof t.type=="string"&&(t.type=p1[t.type])}const m1=40,BS=(t,e)=>e-t>m1&&!bi.useManualTiming?e:t;function VS(t,e){return{kind:t,animation:e,timestamp:St.now(),frameTimestamp:Dt.timestamp,frameIsProcessing:Dt.isProcessing}}function zS(t,e,n){const i=globalThis.__MOTION_INSPECT__;if(i)try{i({...VS("animation-start",t),options:n?{...e,...n}:e})}catch{}}function g1(t,e){const n=globalThis.__MOTION_INSPECT__;if(n)try{n({...VS("layout-animation-start",t),node:e})}catch{}}class Im{constructor(){this.isResolved=!1}get finished(){return this._finished||(this._finished=this.isResolved?Promise.resolve():new Promise(e=>{this._resolve=e})),this._finished}updateFinished(){this._finished=this._resolve=void 0,this.isResolved=!1}notifyFinished(){var e;this.isResolved=!0,(e=this._resolve)==null||e.call(this)}then(e,n){return this.finished.then(e,n)}}const v1=t=>t/100,mh=t=>Math.round(t*1e4)/1e4;class Ia extends Im{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==St.now()&&this.tick(St.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause(),zS(this,this.options)}initAnimation(){const{options:e}=this;kS(e);const{type:n=Rr,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||Rr;l!==Rr&&typeof a[0]!="number"&&(this.mixKeyframes=ja(v1,Pm(a[0],a[1])),a=[0,100]);const c=l(a===e.keyframes?e:{...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Dm(c));const{calculatedDuration:u}=c;this.calculatedDuration=u,this.resolvedDuration=u+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,calculatedDuration:s}=this;if(this.startTime===null)return i.next(0);const{delay:o=0,keyframes:a,type:l,onUpdate:c,finalKeyframe:u}=this.options;this.startTime===this.pendingStartTime&&(this.startTime=BS(this.startTime,e)),this.pendingStartTime=void 0,this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const d=this.currentTime-o*(this.playbackSpeed>=0?1:-1),f=this.playbackSpeed>=0?d<0:d>r;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);const p=this.generate(this.currentTime,f);let{done:m}=p;!f&&s!==null&&(m=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const y=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&m);return y&&l!==Qc&&(p.value=Da(a,this.options,u,this.speed)),c&&c(p.value),y&&this.finish(),p}at(e){return this.holdTime??mh((e-this.startTime)*this.playbackSpeed)}sampleAt(e,n){const{options:i,totalDuration:r}=this,s=this.at(e)-(i.delay||0);return s>=r&&i.type!==Qc?Da(i.keyframes,i,n?void 0:i.finalKeyframe):this.generate(Math.max(s,0),s<0).value}generate(e,n){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a}=this,{keyframes:l,repeat:c,repeatType:u,repeatDelay:d}=this.options;let f=e,p=i;if(c){const y=Math.min(e,r)/a;let g=Math.floor(y),h=y%1;!h&&y>=1&&(h=1),h===1&&g--,g=Math.min(g,c+1),!!(g%2)&&(u==="reverse"?(h=1-h,d&&(h-=d/a)):u==="mirror"&&(p=o)),f=Ii(0,1,h)*a}let m;return n?(this.delayState.value=l[0],m=this.delayState):m=p.next(f),s&&!n&&(m.value=s(m.value)),m}then(e,n){return this.finished.then(e,n)}get duration(){return Rn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Rn(e)}get time(){return Rn(this.currentTime)}set time(e){e=Xn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){return d1(this.generator,this.currentTime,this.options.velocity)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(St.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=Rn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=DS,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime/(this.playbackSpeed||1):this.startTime||(this.startTime=n??(this.pendingStartTime=i)),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(St.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}const _1=new Set(["brightness","contrast","saturate","opacity"]);function y1(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Cm)||[];if(!i)return t;const r=n.replace(i,"");let s=_1.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const x1=/\b([a-z-]*)\(.*?\)/gu,gh={...Ln,getAnimatableNone:t=>{const e=t.match(x1);return e?e.map(y1).join(" "):t}},vh={...Ln,getAnimatableNone:t=>{const e=Ln.parse(t);return Ln.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},V0={...To,transform:Math.round},S1={rotate:Bi,pathRotation:Bi,rotateX:Bi,rotateY:Bi,rotateZ:Bi,scale:xl,scaleX:xl,scaleY:xl,scaleZ:xl,skew:Bi,skewX:Bi,skewY:Bi,distance:we,translateX:we,translateY:we,translateZ:we,x:we,y:we,z:we,perspective:we,transformPerspective:we,opacity:Pa,originX:U0,originY:U0,originZ:we},Na={borderWidth:we,borderTopWidth:we,borderRightWidth:we,borderBottomWidth:we,borderLeftWidth:we,borderRadius:we,borderTopLeftRadius:we,borderTopRightRadius:we,borderBottomRightRadius:we,borderBottomLeftRadius:we,width:we,maxWidth:we,height:we,maxHeight:we,top:we,right:we,bottom:we,left:we,inset:we,insetBlock:we,insetBlockStart:we,insetBlockEnd:we,insetInline:we,insetInlineStart:we,insetInlineEnd:we,padding:we,paddingTop:we,paddingRight:we,paddingBottom:we,paddingLeft:we,paddingBlock:we,paddingBlockStart:we,paddingBlockEnd:we,paddingInline:we,paddingInlineStart:we,paddingInlineEnd:we,margin:we,marginTop:we,marginRight:we,marginBottom:we,marginLeft:we,marginBlock:we,marginBlockStart:we,marginBlockEnd:we,marginInline:we,marginInlineStart:we,marginInlineEnd:we,fontSize:we,backgroundPositionX:we,backgroundPositionY:we,...S1,zIndex:V0,fillOpacity:Pa,strokeOpacity:Pa,numOctaves:V0},M1={...Na,color:Ft,backgroundColor:Ft,outlineColor:Ft,fill:Ft,stroke:Ft,borderColor:Ft,borderTopColor:Ft,borderRightColor:Ft,borderBottomColor:Ft,borderLeftColor:Ft,filter:gh,WebkitFilter:gh,mask:vh,WebkitMask:vh},HS=t=>M1[t],E1=new Set([gh,vh]);function Nm(t,e){let n=HS(t);return E1.has(n)||(n=Ln),n.getAnimatableNone?n.getAnimatableNone(e):void 0}function T1(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Jr=t=>t*180/Math.PI,_h=t=>{const e=Jr(Math.atan2(t[1],t[0]));return yh(e)},w1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scaleZ:()=>1,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:_h,rotateZ:_h,skewX:t=>Jr(Math.atan(t[1])),skewY:t=>Jr(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},yh=t=>(t=t%360,t<0&&(t+=360),t),z0=_h,H0=t=>Math.hypot(t[0],t[1]),G0=t=>Math.hypot(t[4],t[5]),A1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:H0,scaleY:G0,scaleZ:t=>Math.hypot(t[8],t[9],t[10]),scale:t=>(H0(t)+G0(t))/2,rotateX:t=>yh(Jr(Math.atan2(t[6],t[5]))),rotateY:t=>yh(Jr(Math.atan2(-t[2],t[0]))),rotateZ:z0,rotate:z0,skewX:t=>Jr(Math.atan(t[4])),skewY:t=>Jr(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Ua(t){return t.includes("scale")?1:0}function xh(t,e){if(!t||t==="none")return Ua(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=A1,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=w1,r=a}if(!r)return Ua(e);const s=i[e],o=r[1].split(",").map(b1);return typeof s=="function"?s(o):o[s]}const C1=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return xh(n,e)};function b1(t){return parseFloat(t.trim())}const Qi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","scaleZ","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Pr=new Set([...Qi,"pathRotation"]),W0=t=>t===To||t===we,R1=new Set(["x","y","z"]),P1=Qi.filter(t=>!R1.has(t));function L1(t){const e=[];return P1.forEach(n=>{const i=t.getValue(n);if(i!==void 0){const r=i.get(),s=n.startsWith("scale")?1:0;if(r===s)return;e.push([n,r]),i.set(s)}}),e}const D1=new Set(["bottom","right"]);function X0(t,e,n,i,r,s){const o=parseFloat(t);if(!isNaN(o))return o;const{min:a,max:l}=e()[n],c=l-a;return s==="border-box"?c:c-parseFloat(i)-parseFloat(r)}const is={width:({width:t,paddingLeft:e="0",paddingRight:n="0",boxSizing:i},r)=>X0(t,r,"x",e,n,i),height:({height:t,paddingTop:e="0",paddingBottom:n="0",boxSizing:i},r)=>X0(t,r,"y",e,n,i),top:({top:t})=>parseFloat(t),left:({left:t})=>parseFloat(t),bottom:({top:t},e)=>{const{y:n}=e();return parseFloat(t)+(n.max-n.min)},right:({left:t},e)=>{const{x:n}=e();return parseFloat(t)+(n.max-n.min)},x:({transform:t})=>xh(t,"x"),y:({transform:t})=>xh(t,"y")};is.translateX=is.x;is.translateY=is.y;const rs=new Set;let Sh=!1,Mh=!1,Eh=!1;function GS(){if(Mh){const t=[],e=new Set,n=new Set;rs.forEach(r=>{r.needsMeasurement&&(t.push(r),e.add(r.element),D1.has(r.name)&&n.add(r.element))});const i=new Map;n.forEach(r=>{const s=L1(r);s.length&&(i.set(r,s),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const s=i.get(r);s&&s.forEach(([o,a])=>{var l;(l=r.getValue(o))==null||l.set(a)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Mh=!1,Sh=!1,rs.forEach(t=>t.complete(Eh)),rs.clear()}function WS(){rs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Mh=!0)})}function I1(){Eh=!0,WS(),GS(),Eh=!1}function N1(t,e,n){if(typeof t=="string"){if(Sm(t)||Mm(t))return parseFloat(t);if(!Ln.test(t)&&Ln.test(n))return Nm(e,n)}return t??void 0}class Um{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(rs.add(this),Sh||(Sh=!0,lt.read(WS),lt.resolveKeyframes(GS))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=N1(i.readValue(n,o),n,o);a!==void 0&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}T1(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),rs.delete(this)}cancel(){this.state==="scheduled"&&(rs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const U1=t=>t.startsWith("--");function XS(t,e,n){U1(e)?t.style.setProperty(e,n):t.style[e]=n}const F1={};function YS(t,e){const n=hS(t);return()=>F1[e]??n()}const O1=YS(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Fm=YS(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),qs=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Th={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:qs([0,.65,.55,1]),circOut:qs([.55,0,1,.45]),backIn:qs([.31,.01,.66,-.59]),backOut:qs([.33,1.53,.69,.99])};function $S(t,e){if(t)return typeof t=="function"?Fm()?IS(t,e):"ease-out":Am(t)?qs(t):Array.isArray(t)?t.map(n=>$S(n,e)||Th.easeOut):Th[t]}function k1(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const u={[e]:n};l&&(u.offset=l);const d=$S(a,r);Array.isArray(d)&&(u.easing=d);const f={delay:i,duration:r,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(f.pseudoElement=c),t.animate(u,f)}function jS(t){return typeof t=="function"&&"applyToOptions"in t}function B1({type:t,...e}){return jS(t)&&Fm()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class qS extends Im{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Iu(typeof e.type!="string");const c=B1(e);this.animation=k1(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const u=Da(r,this.options,a,this.speed);this.updateMotionValue&&this.updateMotionValue(u),XS(n,i,u),this.animation.cancel()}l==null||l(),this.notifyFinished()},zS(this,e,c)}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Rn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Rn(e)}get time(){return Rn(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Xn(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,onAttach:n,observe:i}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&O1()?(this.animation.timeline=e,n==null||n(this.animation),ui):i(this)}}const KS={anticipate:yS,backInOut:_S,circInOut:SS};function V1(t){return t in KS}function z1(t){typeof t.ease=="string"&&V1(t.ease)&&(t.ease=KS[t.ease])}const eu=10;class H1 extends qS{constructor(e){z1(e),kS(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}elapsed(){return this.state==="running"?(St.now()-this.startTime)*this.speed:this.time*1e3}sample(e){if(!this.sampler){const{motionValue:n,onUpdate:i,onComplete:r,onPlay:s,onStop:o,element:a,...l}=this.options;this.sampler=new Ia({...l,autoplay:!1}),this.sampler.stop()}return this.sampler.sample(Math.max(0,e)).value}liveValue(){const{state:e}=this;if(e==="running"||e==="paused")return this.sample(this.elapsed())}updateMotionValue(e){const{motionValue:n,element:i,name:r}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const{speed:s}=this,o=this.elapsed(),a=this.state==="running"&&s?Ii(0,eu,o):0,l=this.sample(o);i&&r&&XS(i,r,l),n.setWithVelocity(this.sample(o-a*Math.sign(s)),l,a/Math.abs(s||1))}}const Y0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Ln.test(t)||t==="0")&&!t.startsWith("url("));function G1(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function W1(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Y0(r,e),a=Y0(s,e);return!o||!a?!1:G1(t)||(n==="spring"||jS(n))&&i}function wh(t){t.duration=0,t.type="keyframes"}const Ah=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),X1=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Y1(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&X1.test(t[e]))return!0;return!1}const $0=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),ZS=hS(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function $1(t){var d;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o,keyframes:a}=t;if(!n||!(Ah.has(n)||$0.has(n)))return!1;const l=(d=e==null?void 0:e.owner)==null?void 0:d.current;if(!(l instanceof HTMLElement)&&!(l instanceof SVGElement))return!1;const{onUpdate:c,transformTemplate:u}=e.owner.getProps();return ZS()&&(Ah.has(n)||$0.has(n)&&Y1(a))&&(n!=="transform"||!u)&&!c&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const tu=(t,e)=>e&&typeof t=="number"?e.transform(t):t,JS={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},j1=Qi.length;function QS(t,e,n){let i="",r=!0;for(let o=0;o<j1;o++){const a=Qi[o],l=t[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{const u=parseFloat(l);c=a.startsWith("scale")?u===1:u===0}if(!c||n){const u=tu(l,Na[a]);if(!c){r=!1;const d=JS[a]||a;i+=`${d}(${u}) `}n&&(e[a]=u)}}const s=t.pathRotation;return s&&(r=!1,i+=`rotate(${tu(s,Na.pathRotation)}) `),i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}const vo=new WeakMap,q1=200,Ml=.001,K1=.1,Z1=.001,J1=100,Q1=t=>/^(linear|ease(In|Out|InOut))$/.test(t),Af=(t,e)=>t-e,j0=(t,e,n)=>{const i=[];for(let r=0;r<=n;r++)i.push(st(t,e,r/n));return i},uc=t=>t.motionValue.owner,fc=t=>vo.get(t),Ks=(t,e)=>{var n;return t.latestValues?t.latestValues[e]:(n=t.getValue(e))==null?void 0:n.get()},eC=({name:t,motionValue:e})=>{var n;return t&&Qi.includes(t)&&((n=e==null?void 0:e.owner)==null?void 0:n.current)instanceof HTMLElement&&ZS()&&Fm()};function tC(t){var r;const e=uc(t),{onUpdate:n,transformTemplate:i}=e.getProps();return!t.isHandoff&&!n&&!t.hasOnUpdate&&!i&&t.type!=="inertia"&&(Ks(e,"transform")||"none")==="none"&&!Ks(e,"pathRotation")&&!((r=e.projection)!=null&&r.isProjecting())}class nC extends Ia{constructor(e){const n=uc(e).current,{driver:i=DS}=e;let r;const s=tC(e);e.driver=a=>{const l=i(a);return{js:l,now:l.now,start:(c=!0)=>{const u=fc(n);!u||u.isJS?l.start(c):u.schedule(!1,!c)},stop:()=>{l.stop();const c=fc(n);c&&!c.isFinishing&&c.release(r)}}},super(e),r=this,this.canAccelerate=s;const{stop:o}=this;this.stop=()=>{this.isAccelerated()&&this.sync(),o()}}get group(){return fc(uc(this.options).current)}get js(){var e;return(e=this.driver)==null?void 0:e.js}get name(){return this.options.name}timing(){const{startTime:e,speed:n,totalDuration:i}=this,{delay:r=0,repeatType:s}=this.options;return this.holdTime!==null?[1/0,0]:i===1/0?[e+r/n,this.resolvedDuration*(s==="loop"?1:2)/n||1]:[e+(r+i)/n,0]}isAccelerated(){const{group:e,state:n}=this;return(e==null?void 0:e.tracks.has(this))&&!e.isJS&&this.canAccelerate&&(n==="running"||n==="paused")}liveValue(){return this.isAccelerated()?this.sampleAt(St.now()):void 0}tween(){const{keyframes:e,type:n,ease:i,times:r,repeat:s,delay:o=0}=this.options,a=Am(i)?qs(i):Q1(i)&&Th[i];if(a&&!s&&!r&&e.length===2&&n===Rr&&this.holdTime===null){const l=this.startTime+o/this.speed;return[l,l+this.resolvedDuration/this.speed,a]}}boundaries(e,n){const{startTime:i,speed:r,resolvedDuration:s,options:o}=this,{delay:a=0,repeat:l=0,repeatDelay:c=0,repeatType:u,times:d,keyframes:f,type:p}=o,m=(p||Rr)===Rr?d||OS(f):[0,1],y=i+a/r,g=[];if(this.holdTime!==null||!(s>0))return g;for(let h=Math.max(0,Math.floor((e-y)*r/s));h<=l;h++){const v=y+h*s/r;if(v>n)break;for(const S of m){const x=v+(h%2&&u&&u!=="loop"?1-S:S)*(s-c)/r;x>e&&x<n&&g.push(x)}}return g}numberAt(e){return parseFloat(this.sampleAt(e,!0))}sync(){const e=St.now();this.options.motionValue.setWithVelocity(this.sampleAt(e-eu,!0),this.sampleAt(e,!0),eu)}play(){this.isStopped||((this.group||iC(uc(this.options))).tracks.add(this),super.play())}pause(){super.pause(),this.isAccelerated()&&(this.sync(),this.group.schedule(!1))}complete(){super.complete();const{group:e}=this;e&&!e.isJS&&this.canAccelerate&&this.tick(St.now())}get time(){return this.isAccelerated()?Rn(Ii(0,this.totalDuration,this.at(St.now())-(this.options.delay||0))):super.time}set time(e){super.time=e,this.isAccelerated()&&this.sync()}attachTimeline(e){var n;return this.canAccelerate=!1,(n=this.group)==null||n.demote(!0),super.attachTimeline(e)}}function iC(t){const e=t.current,n=new Set,i=new Map;let r={},s=[],o=new Map,a=[],l=!1,c=!1,u=!1,d=!1,f=-1/0;const p=L=>{for(const b of n)if(b.name===L)return!0},m=(L,b)=>{const D={};for(const z of L===void 0?Qi:s){const k=i.get(z),N=L===void 0?Ks(t,z):k?k.sampleAt(b>L&&!k.timing()[1]?b:L):r[z];N!==void 0&&(D[z]=N)}return D},y=(L,b)=>{let D="";const z=m(L,b);for(const k in z)D+=(JS[k]||k)+"("+tu(z[k],Na[k])+") ";return D||"none"},g=(L=m())=>{e.style.transform=QS(L,{})},h=(L=!0)=>{L&&g(),a.forEach(({animation:b})=>b.cancel()),a=[]},v=(L,b,D=1/0)=>{const z={animation:L,offset:b,end:D};L.startTime=St.now()+b,D<1/0&&(L.onfinish=()=>{z.isDone=!0,a.some(k=>k.end===1/0)&&(L.cancel(),a=a.filter(k=>k!==z)),F.schedule(!1)}),L.oncancel=()=>a.includes(z)&&F.demote(),a.push(z)},S=(L,b,D)=>{const z=(N,O)=>Math.abs(L(O)-L(N)),k=z(b,D);for(;D-b>.01;){const N=(b+D)/2;z(b,N)>z(N,D)?D=N:b=N}return z(b,D)>k/2?[b,D]:[]},x=(L,b,D,z)=>{const k=Math.min(q1,Math.max(2,Math.ceil((D-b)/eu)));if(z.length*4>k)return;const N=j0(b,D,k).concat(z).sort(Af),O=ae=>fs(b,D,ae);let H,U;for(const ae of L){const Ae=N.map(ue=>ae.numberAt(ue)),[Ne]=Ae,Z=Ae.map(ue=>ue-Ne),te=Z[Z.length-1],Se=Z.some(ue=>Math.abs(ue)*Ml>Math.abs(te))?0:te,Fe=Z.map(ue=>Se?ue/Se:ue);if(Se){if(!H)H=Fe,U=ue=>(ae.numberAt(ue)-Ne)/Se;else if(Fe.some((ue,Be)=>!(Math.abs(ue-H[Be])<=Ml)))return}else if(Fe.some(ue=>!(Math.abs(ue)<=Ml)))return}if(!H||H.every((ae,Ae)=>Math.abs(ae-O(N[Ae]))<=Ml))return"linear";const J=[],re=(ae,Ae=U(ae))=>J.push(mh(Ae)+" "+mh(O(ae)*100)+"%");return H.forEach((ae,Ae)=>{Ae&&Math.abs(ae-H[Ae-1])>.2&&S(U,N[Ae-1],N[Ae]).forEach(Ne=>re(Ne)),re(N[Ae],ae)}),"linear("+J+")"},E=(L,b,D,z)=>{const k=[b],N=(J,re)=>L.every(ae=>!(Math.abs(ae.numberAt((J+re)/2)-(ae.numberAt(J)+ae.numberAt(re))/2)>(ae.name.startsWith("scale")?Z1:K1))),O=(J,re,ae)=>{if(re-J<1||N(J,re))k.push(re);else if(ae<4)O(J,(J+re)/2,ae+1),O((J+re)/2,re,ae+1);else{for(const Ae of L)k.push(...S(Ne=>Ae.numberAt(Ne),J,re));k.push(re)}},H=j0(b,D,Math.ceil((D-b)/100));for(const J of z)H.push(J,Math.min(J+.01,D));let U=b;for(const J of H.sort(Af))J>U&&O(U,J,0),U=J;return k.sort(Af)},A=L=>{let b;for(const D of L){const z=D.tween();if(!z||b!=null&&b.some((k,N)=>N<2?Math.abs(z[N]-k)>1:z[N]!==k))return;b=z}return b},w=(L,b,D,z={fill:"both"},k,N)=>{const O=L.flatMap(ae=>ae.boundaries(b,D)),H=N||x(L,b,D,O),U=H?[b,D]:E(L,b,D,O),J=U.map(ae=>y(ae,k));let re={transform:J};return H||(re.offset=U.map(ae=>fs(b,D,ae))),J.every(ae=>ae===J[0])&&(g(m(b,k)),re=null),e.animate(re,{...z,duration:D-b,easing:H||"linear"})},_=L=>{let b=L,D=0,z=0;const k=[],N=[],O=new Set;i.clear(),o=new Map;for(const U of n){i.set(U.name,U);const[J,re]=U.timing(),ae=J===1/0;if(o.set(U,[U.at(L),U.speed,ae]),ae){U.sync();continue}if(U.speed<0)return;if(re){if(D){const Ae=(J-z)/re;if(Math.abs(re-D)>1||Math.abs(Ae-Math.round(Ae))*D>1)return}else D=re,z=J;N.push(U)}else O.add(J);k.push(U),b=Math.max(b,J)}r={},s=Qi.filter(U=>{if(i.has(U))return!0;const J=r[U]=Ks(t,U);return J!==void 0&&parseFloat(J)!==(U.startsWith("scale")?1:0)}),h(!1);const H=!D&&A(k);try{if(H&&H[1]>L){const[U,J,re]=H;v(w(k,U,J,void 0,void 0,re),U-L,J-U)}else b>L&&(v(w(k,L,b),0,b-L),O.forEach(U=>U<b-1&&v(e.animate(null,{duration:U-L}),0,U-L)));if(D){const U=z+Math.floor((b-z)/D)*D;v(w(N,U,U+D,{iterations:1/0,iterationStart:(b-U)/D,fill:"forwards"},b),b-L)}}catch{return}return a.length||h(),!0},C=L=>{let b,D=0;for(const z of n){const k=o.get(z);if(!k)return!1;const[N,O,H]=k,U=z.at(L),J=z.timing()[0]===1/0;if(H){if(J&&U===N)continue;return!1}const re=(U-N)/O,ae=J?0:z.speed/O;if(b===void 0)b=re,D=ae;else if(Math.abs(re-b)>1||ae!==D)return!1}if(b===void 0)return!0;if(!a.length)return!1;for(const{offset:z,end:k,isDone:N}of a){const O=b-z;if(k<1/0&&(N?O<k-1:O<0||O>=k))return!1}for(const{animation:z,offset:k,isDone:N}of a){if(N)continue;const O=b-k;D?(z.playbackRate=D,z.startTime=L-O/D):(z.pause(),z.currentTime=O)}return!0},P=()=>n.size?!1:(u=!0,fc(e)===F&&vo.delete(e),F.isJS||h(),!0),I=()=>{const L=St.now();if(F.isJS||(F.isFinishing=!0,n.forEach(z=>{const[k,N]=z.timing();z.state==="running"&&z.speed>0&&!N&&k<=L+1&&(z.complete(),r[z.name]=Ks(t,z.name),o.has(z)||(l=!0))}),F.isFinishing=!1),c=!1,u||(n.forEach(({state:z},k)=>{(z==="idle"||z==="finished")&&n.delete(k)}),P()))return;for(const z of n)if(!z.canAccelerate)return F.demote(!0);F.isJS&&(F.isJS=!1,l=!0,n.forEach(z=>{var k;return(k=z.js)==null?void 0:k.stop()}));const b=l,D=d;if(l=d=!1,b||!C(L)){if(D){if(L-f<J1)return F.demote();f=L}if(!_(L))return F.demote()}},F={tracks:n,isJS:!1,isFinishing:!1,schedule(L,b){u||(l||(l=L),d||(d=!!b),c||(c=!0,Dt.isProcessing?lt.render(I,!1,!0):queueMicrotask(I)))},release(L){const{state:b}=L;(b==="idle"||b==="finished")&&n.delete(L),P()||F.schedule(!0)},check(){if(!F.isJS){for(const L in r)if(Ks(t,L)!==r[L]&&!p(L))return F.schedule(!0,!0)}},demote(L){F.isJS||u||(n.forEach(b=>{b.isAccelerated()&&b.sync(),L||(b.canAccelerate=!1)}),F.isJS=!0,o=new Map,h(),n.forEach(b=>{var D;return b.state==="running"&&((D=b.js)==null?void 0:D.start())}))}};return vo.set(e,F),F}class rC extends Im{constructor(e){var l;super(),this.stop=()=>{var c,u;this._animation&&(this._animation.stop(),(c=this.stopTimeline)==null||c.call(this)),(u=this.keyframeResolver)==null||u.cancel()},this.createdAt=St.now();const{keyframes:n,name:i,motionValue:r,element:s}=e,o=e;o.autoplay??(o.autoplay=!0),o.delay??(o.delay=0),o.type??(o.type="keyframes"),o.repeat??(o.repeat=0),o.repeatDelay??(o.repeatDelay=0),o.repeatType??(o.repeatType="loop");const a=(s==null?void 0:s.KeyframeResolver)||Um;this.keyframeResolver=new a(n,(c,u,d)=>this.onKeyframesResolved(c,u,o,!d),i,r,s),(l=this.keyframeResolver)==null||l.scheduleResolve()}onKeyframesResolved(e,n,i,r){var g,h;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:u}=i;this.resolvedAt=St.now();let d=!0;W1(e,s,o,a)||(d=!1,(bi.instantAnimations||!l)&&(u==null||u(Da(e,i,n))),e[0]=e[e.length-1],wh(i),i.repeat=0);const{onComplete:f}=i;i.finalKeyframe=n,i.keyframes=e,i.onComplete=()=>{f==null||f(),this.notifyFinished()};const p=d&&!c&&$1(i),m=!p&&eC(i);r&&(p||m||this.resolvedAt!==this.createdAt)&&(i.startTime??(i.startTime=BS(this.createdAt,this.resolvedAt)));let y;if(p){i.element=(h=(g=i.motionValue)==null?void 0:g.owner)==null?void 0:h.current;try{y=new H1(i)}catch{y=new Ia(i)}}else m?y=new nC(i):y=new Ia(i);this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this._animation.finished:super.finished}then(e,n){return this.finished.finally(e).then(()=>{})}liveValue(){var e,n;return(n=(e=this._animation)==null?void 0:e.liveValue)==null?void 0:n.call(e)}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),I1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function eM(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,u)=>c.sortNodePosition(u)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const q0=30,sC=t=>!isNaN(parseFloat(t));class oC{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{const r=St.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&(this.notifyChange(),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=St.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=sC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){var i;return e==="change"?this.onChangeSubscribe(n):((i=this.events)[e]||(i[e]=new Kc)).add(n)}onChangeSubscribe(e){const{events:n}=this;return!n.change&&!this.changeSubscriber?this.changeSubscriber=e:(n.change||(n.change=new Kc,n.change.add(this.changeSubscriber),this.changeSubscriber=void 0),n.change.add(e)),()=>{var i;this.changeSubscriber===e?this.changeSubscriber=void 0:(i=n.change)==null||i.remove(e),this.stopIfUnobserved()}}stopIfUnobserved(){lt.read(()=>{var e;!this.changeSubscriber&&!((e=this.events.change)!=null&&e.getSize())&&this.stop()})}clearListeners(){this.changeSubscriber=void 0;for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.notifyChange()}notifyChange(){var i;const{current:e,changeSubscriber:n}=this;n?n(e):(i=this.events.change)==null||i.notify(e)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){var n,i;const e=(i=(n=this.animation)==null?void 0:n.liveValue)==null?void 0:i.call(n);return e===void 0?this.current:e}getCurrent(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=St.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>q0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,q0);return pS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{var s;this.hasAnimated=!0;let i=!1,r;r=e(()=>{var o;i=!0,(o=this.events.animationComplete)==null||o.notify(),this.animation===r&&this.clearAnimation(),n()}),i||(this.animation=r),(s=this.events.animationStart)==null||s.notify()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){this.animation=void 0}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function _o(t,e){return new oC(t,e)}function tM(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Om(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?tM(n,t):n}const aC={type:"spring",stiffness:500,damping:25,restSpeed:10},lC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),cC={type:"keyframes",duration:.8},uC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},fC=(t,{keyframes:e})=>e.length>2?cC:Pr.has(t)?t.startsWith("scale")?lC(e[1]):aC:uC,dC=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function hC(t){for(const e in t)if(!dC.has(e))return!0;return!1}const km=(t,e,n,i={},r,s)=>o=>{const a=Om(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-Xn(l);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r,hasOnUpdate:!!a.onUpdate};hC(a)||Object.assign(u,fC(t,u)),u.duration&&(u.duration=Xn(u.duration)),u.repeatDelay&&(u.repeatDelay=Xn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(wh(u),u.delay===0&&(d=!0)),(bi.instantAnimations||bi.skipAnimations||r!=null&&r.shouldSkipAnimations||a.skipAnimations)&&(d=!0,wh(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!s&&e.get()!==void 0){const f=Da(u.keyframes,a);if(f!==void 0){lt.update(()=>{u.onUpdate(f),u.onComplete()});return}}return a.isSync?new Ia(u):new rC(u)},pC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function mC(t){const e=pC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function Bm(t,e,n=1){const[i,r]=mC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return Sm(o)?parseFloat(o):o}return Nu(r)?Bm(r,e,n+1):r}function gC(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function nM(t,e,n,i){const r=s=>typeof s=="function"?s(n!==void 0?n:t.custom,...gC(i)):s;return e=r(e),typeof e=="string"&&(e=t.variants&&t.variants[e]),r(e)}function ss(t,e,n){return nM(t.getProps(),e,n,t)}const iM=(t,e)=>{var n;return e==="exit"?(n=t.presenceContext)==null?void 0:n.custom:void 0},rM=new Set(["width","height","top","left","right","bottom",...Qi]),vC=t=>Array.isArray(t);function _C(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,_o(n))}function yC(t){return vC(t)?t[t.length-1]||0:t}function xC(t,e){const n=ss(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=yC(s[o]);_C(t,o,a)}}const qt=t=>!!(t&&t.getVelocity);function SC(t){return!!(qt(t)&&t.add)}function Ch(t,e){const n=t.getValue("willChange");if(SC(n))return n.add(e);if(!n&&bi.WillChange){const i=new bi.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Vm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const MC="framerAppearId",sM="data-"+Vm(MC);function oM(t){return t.props[sM]}const EC=typeof window<"u";function TC({protectedKeys:t,needsAnimating:e},n){const i=n in t&&!e[n];return e[n]=!1,i}function aM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var m,y;let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?tM(s,l):l;const c=s==null?void 0:s.reduceMotion,u=s==null?void 0:s.skipAnimations;i&&(s=i);const d=[],f=r&&((m=t.animationState)==null?void 0:m.getState()[r]),p=s==null?void 0:s.path;p&&(p.animateValues?p.animateValues(g=>t.getValue(g,t.latestValues[g]??0),a,s,n,d):(y=p.animateVisualElement)==null||y.call(p,t,a,s,n,d));for(const g in a){const h=t.getValue(g,t.latestValues[g]??null),v=a[g];if(v===void 0||f&&TC(f,g))continue;const S={delay:n,...Om(s||{},g)};u&&(S.skipAnimations=!0);const x=h.get();if(x!==void 0&&!h.isAnimating()&&!Array.isArray(v)&&v===x&&!S.velocity){lt.update(()=>h.set(v));continue}let E=!1;if(EC&&window.MotionHandoffAnimation){const _=oM(t);if(_){const C=window.MotionHandoffAnimation(_,g,lt);C!==null&&(S.startTime=C,E=!0)}}Ch(t,g);const A=c??t.shouldReduceMotion;h.start(km(g,h,v,A&&rM.has(g)?{type:!1}:S,t,E));const w=h.animation;w&&d.push(w)}if(o){const g=()=>lt.update(()=>{o&&xC(t,o)});d.length?Promise.all(d).then(g):g()}return d}function bh(t,e,n={}){const i=ss(t,e,iM(t,n.type)),r=n.transitionOverride||((i==null?void 0:i.transition)??(t.getDefaultTransition()||{})),s=()=>Promise.all(i?aM(t,i,n):[]),o=(l=0)=>{const{variantChildren:c}=t,{delayChildren:u=0,staggerChildren:d,staggerDirection:f}=r,p=[];return c==null||c.forEach(m=>{m.notify("AnimationStart",e),p.push(bh(m,e,{...n,delay:l+(typeof u=="function"?0:u)+eM(c,m,u,d,f)}).then(()=>m.notify("AnimationComplete",e)))}),Promise.all(p)},{when:a}=r;return a?a==="beforeChildren"?s().then(()=>o()):o().then(s):Promise.all([s(),o(n.delay)])}function wC(t,e,n={}){return t.notify("AnimationStart",e),(Array.isArray(e)?Promise.all(e.map(r=>bh(t,r,n))):typeof e=="string"?bh(t,e,n):Promise.all(aM(t,ss(t,e,n.custom),n))).then(()=>{t.notify("AnimationComplete",e)})}const AC={test:t=>t==="auto",parse:t=>t},CC=t=>e=>e.test(t),bC=[To,we,Ai,Bi,DA,LA,AC],K0=t=>bC.find(CC(t));function RC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Mm(t):!0}const PC=new Set(["auto","none","0"]);function LC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!PC.has(s)&&kA(s)&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]!==r&&(t[s]=Nm(n,r))}class DC extends Um{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}scheduleResolve(){if(this.canReadNow()&&(this.readKeyframes(),!this.needsMeasurement))return this.complete();super.scheduleResolve()}canReadNow(){const{unresolvedKeyframes:e,element:n,motionValue:i}=this,r=e[0]??(i==null?void 0:i.get());if(!(n!=null&&n.current)||r===void 0)return!1;for(let s=0;s<e.length;s++)if(yf(s?e[s]:r))return!1;return!0}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let u=0;u<e.length;u++){let d=e[u];if(typeof d=="string"&&(d=d.trim(),Nu(d))){const f=Bm(d,n.current);f!==void 0&&(e[u]=f),u===e.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!rM.has(i)||e.length!==2)return;const[r,s]=e;if(typeof r=="number"&&typeof s=="number")return;const o=K0(r),a=K0(s),l=yf(r),c=yf(s);if(l!==c&&is[i]){this.needsMeasurement=!0;return}if(o!==a)if(W0(o)&&W0(a))for(let u=0;u<e.length;u++){const d=e[u];typeof d=="string"&&(e[u]=parseFloat(d))}else is[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||RC(e[r]))&&i.push(r);i.length&&LC(e,i,n)}measure(){const{element:e,name:n}=this;return is[n](window.getComputedStyle(e.current),()=>e.measureViewportBox())}measureInitialState(){var s;const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=this.measure(),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&((s=this.motionValue)==null||s.jump(r,!1))}measureEndState(){var s,o;const{element:e,unresolvedKeyframes:n}=this;if(!e||!e.current)return;(s=this.motionValue)==null||s.jump(this.measuredOrigin,!1);const i=n.length-1,r=n[i];n[i]=this.measure(),r!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=r),(o=this.removedTransforms)!=null&&o.length&&this.removedTransforms.forEach(([a,l])=>{e.getValue(a).set(l)}),this.resolveNoneKeyframes()}}const zm=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function dc(t){return dS(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}function Hm(t){return dS(t)&&"ownerSVGElement"in t}function lM(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const r=(n==null?void 0:n[t])??i.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}function Gm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Pr.has(l)){o=!0;continue}else if(ES(l)){r[l]=c;continue}else{const u=tu(c,Na[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=QS(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const IC={offset:"stroke-dashoffset",array:"stroke-dasharray"},NC={offset:"strokeDashoffset",array:"strokeDasharray"};function UC(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?IC:NC;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const cM=["transform","opacity","clipPath","filter","offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function uM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,u){if(Gm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:d,style:f}=t;for(const p of cM)d[p]!==void 0&&(f[p]=d[p],delete d[p]);(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),f.transform&&(f.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox),e!==void 0&&(d.x=e),n!==void 0&&(d.y=n),i!==void 0&&(d.scale=i),r!==void 0&&UC(d,r,s,o,!1)}function fM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function FC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function OC(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Cf(t){return t===void 0||t===1}function Rh({scale:t,scaleX:e,scaleY:n}){return!Cf(t)||!Cf(e)||!Cf(n)}function $r(t){return Rh(t)||dM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.rotateZ||t.skewX||t.skewY}function dM(t){return Z0(t.x)||Z0(t.y)}function Z0(t){return t&&t!=="0%"}function nu(t,e,n){const i=t-n,r=e*i;return n+r}function J0(t,e,n,i,r){return r!==void 0&&(t=nu(t,r,i)),nu(t,n,i)+e}function Ph(t,e=0,n=1,i,r){t.min=J0(t.min,e,n,i,r),t.max=J0(t.max,e,n,i,r)}function hM(t,{x:e,y:n}){Ph(t.x,e.translate,e.scale,e.originPoint),Ph(t.y,n.translate,n.scale,n.originPoint)}const Q0=.999999999999,ev=1.0000000000001;function kC(t,e,n,i=!1){var a;const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let l=0;l<r;l++){s=n[l],o=s.projectionDelta;const{visualElement:c}=s.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(si(t.x,-s.scroll.offset.x),si(t.y,-s.scroll.offset.y)),o&&(e.x*=o.x.scale,e.y*=o.y.scale,hM(t,o)),i&&$r(s.latestValues)&&hc(t,s.latestValues,(a=s.layout)==null?void 0:a.layoutBox))}e.x<ev&&e.x>Q0&&(e.x=1),e.y<ev&&e.y>Q0&&(e.y=1)}function si(t,e){t.min+=e,t.max+=e}function tv(t,e,n,i,r=.5){const s=st(t.min,t.max,r);Ph(t,e,n,s,i)}function nv(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function hc(t,e,n){const i=n??t;tv(t.x,nv(e.x,i.x),e.scaleX,e.scale,e.originX),tv(t.y,nv(e.y,i.y),e.scaleY,e.scale,e.originY)}function pM(t,e){return fM(OC(t.getBoundingClientRect(),e))}function BC(t,e,n){const i=pM(t,n),{scroll:r}=e;return r&&(si(i.x,r.offset.x),si(i.y,r.offset.y)),i}const{schedule:Wm}=LS(queueMicrotask,!1);function VC(t,e,n){const i=qt(t)?t:_o(t);return i.start(km("",i,e,n)),i.animation}const Fa={};function zC(t,e){const n=St.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Ir(i),t(s-e))};return lt.setup(i,!0),()=>Ir(i)}function HC(t){return Hm(t)&&t.tagName==="svg"}function pc(t){return qt(t)?t.get():t}const iv=t=>typeof t=="number"?t:parseFloat(t),GC=zm.length,mM=["rotate","rotateX","rotateY","rotateZ","skewX","skewY"],WC=mM.length,rv=t=>typeof t=="number"||we.test(t);function XC(t,e,n,i,r,s){r?(t.opacity=st(0,n.opacity??1,YC(i)),t.opacityExit=st(e.opacity??1,0,$C(i))):s&&(t.opacity=st(e.opacity??1,n.opacity??1,i));for(let o=0;o<GC;o++){const a=zm[o];let l=sv(e,a),c=sv(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||rv(l)===rv(c)?(t[a]=Math.max(st(iv(l),iv(c),i),0),(Ai.test(c)||Ai.test(l))&&(t[a]+="%")):t[a]=c}for(let o=0;o<WC;o++){const a=mM[o];(e[a]||n[a])&&(t[a]=st(e[a]||0,n[a]||0,i))}}function sv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const YC=gM(0,.5,xS),$C=gM(.5,.95,ui);function gM(t,e,n){return i=>i<t?0:i>e?1:n(fs(t,e,i))}function Lh(t,e){t.min=e.min,t.max=e.max}function Kn(t,e){Lh(t.x,e.x),Lh(t.y,e.y)}function ov(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const vM=1e-4,jC=1-vM,qC=1+vM,_M=.01,KC=0-_M,ZC=0+_M;function fn(t){return t.max-t.min}function JC(t,e,n){return Math.abs(t-e)<=n}function av(t,e,n,i=.5){t.origin=i,t.originPoint=st(e.min,e.max,t.origin),t.scale=fn(n)/fn(e),t.translate=st(n.min,n.max,t.origin)-t.originPoint,(t.scale>=jC&&t.scale<=qC||isNaN(t.scale))&&(t.scale=1),(t.translate>=KC&&t.translate<=ZC||isNaN(t.translate))&&(t.translate=0)}function ca(t,e,n,i){av(t.x,e.x,n.x,i?i.originX:void 0),av(t.y,e.y,n.y,i?i.originY:void 0)}function lv(t,e,n,i=0){const r=i?st(n.min,n.max,i):n.min;t.min=r+e.min,t.max=t.min+fn(e)}function QC(t,e,n,i){lv(t.x,e.x,n.x,i==null?void 0:i.x),lv(t.y,e.y,n.y,i==null?void 0:i.y)}function cv(t,e,n,i=0){const r=i?st(n.min,n.max,i):n.min;t.min=e.min-r,t.max=t.min+fn(e)}function iu(t,e,n,i){cv(t.x,e.x,n.x,i==null?void 0:i.x),cv(t.y,e.y,n.y,i==null?void 0:i.y)}function uv(t,e,n,i,r){return t-=e,t=nu(t,1/n,i),r!==void 0&&(t=nu(t,1/r,i)),t}function eb(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ai.test(e)&&(e=parseFloat(e),e=st(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=st(s.min,s.max,i);t===s&&(a-=e),t.min=uv(t.min,e,n,a,r),t.max=uv(t.max,e,n,a,r)}function fv(t,e,[n,i,r],s,o){eb(t,e[n],e[i],e[r],e.scale,s,o)}const tb=["x","scaleX","originX"],nb=["y","scaleY","originY"];function dv(t,e,n,i){fv(t.x,e,tb,n?n.x:void 0,i?i.x:void 0),fv(t.y,e,nb,n?n.y:void 0,i?i.y:void 0)}const hv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Zs=()=>({x:hv(),y:hv()}),pv=()=>({min:0,max:0}),Ut=()=>({x:pv(),y:pv()});function mv(t){return t.translate===0&&t.scale===1}function yM(t){return mv(t.x)&&mv(t.y)}function gv(t,e){return t.min===e.min&&t.max===e.max}function ib(t,e){return gv(t.x,e.x)&&gv(t.y,e.y)}function vv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function xM(t,e){return vv(t.x,e.x)&&vv(t.y,e.y)}function _v(t){return fn(t.x)/fn(t.y)}function yv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class rb{constructor(){this.members=[]}add(e){xm(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;(!r||r.isConnected===!1)&&!i.snapshot&&(qc(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(qc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let i=this.members.indexOf(e)-1;i>=0;i--){const r=this.members[i];if(r.isPresent!==!1&&((n=r.instance)==null?void 0:n.isConnected)!==!1)return this.promote(r),!0}return!1}promote(e,n){var r;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:s}=i.options,{layoutDependency:o}=e.options;(s===void 0||s!==o)&&(e.resumeFrom=i,n&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(r=e.root)!=null&&r.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,i,r,s,o;(i=(n=e.options).onExitComplete)==null||i.call(n),(o=(r=e.resumingFrom)==null?void 0:(s=r.options).onExitComplete)==null||o.call(s)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}function xv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Fo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(we.test(t))t=parseFloat(t);else return t;const n=xv(t,e.target.x),i=xv(t,e.target.y);return`${n}% ${i}%`}},sb={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Ln.parse(t);if(r.length>5)return i;const s=Ln.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=st(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},ob={borderRadius:{...Fo,applyTo:[...zm]},borderTopLeftRadius:Fo,borderTopRightRadius:Fo,borderBottomLeftRadius:Fo,borderBottomRightRadius:Fo,boxShadow:sb};function ab(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,pathRotation:d,rotateX:f,rotateY:p,rotateZ:m,skewX:y,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotate(${d}deg) `),f&&(i+=`rotateX(${f}deg) `),p&&(i+=`rotateY(${p}deg) `),m&&(i+=`rotateZ(${m}deg) `),y&&(i+=`skewX(${y}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}function ni(t){return[t("x"),t("y")]}const lb=(t,e)=>t.depth-e.depth;class cb{constructor(){this.children=[],this.isDirty=!1}add(e){xm(this.children,e),this.isDirty=!0}remove(e){qc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(lb),this.isDirty=!1,this.children.forEach(e)}}const mc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};Object.assign(Fa,{...ob,...Fa});const bf=["","X","Y","Z"],ub=1e3;let fb=0;function Rf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}const Pf=({instance:t})=>{var e;return t&&((e=vo.get(t))==null?void 0:e.demote())};function SM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=oM(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",lt,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&SM(i)}function MM({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=fb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(pb),this.nodes.forEach(Mb),this.nodes.forEach(Eb),this.nodes.forEach(mb)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new cb)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Kc),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Hm(o)&&!HC(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let u,d=0;const f=()=>this.root.updateBlockedByResize=!1;lt.read(()=>{d=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==d&&(d=p,this.root.updateBlockedByResize=!0,u&&u(),u=zC(f,250),mc.hasAnimatedSinceResize&&(mc.hasAnimatedSinceResize=!1,this.nodes.forEach(Ev)))})}a&&this.root.registerSharedNode(a,this),this.addLayoutListener()}addLayoutListener(){const{layoutId:o,layout:a,visualElement:l,animate:c}=this.options;!this.instance||this.hasLayoutListener||c===!1||!l||!(o||a)||(this.hasLayoutListener=!0,this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:f,layout:p})=>{if(this.isAnimationBlocked){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||l.getDefaultTransition()||Cb,{onLayoutAnimationStart:y,onLayoutAnimationComplete:g}=l.getProps(),h=!this.targetLayout||!xM(this.targetLayout,p),v=!d&&f;if(this.options.layoutRoot||this.resumeFrom||v||d&&(h||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const S={...Om(m,"layout"),onPlay:y,onComplete:g};(l.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S),this.setAnimationOrigin(u,v,S.path)}else d||Ev(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),this.hasLayoutListener=!1,Ir(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Tb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&SM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;Pf(this),this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,Pf(d),(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1),d.isAnimationBlocked&&(d.dragSnapshot||(d.dragSnapshot=d.measure()),this.dragAncestor=d)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const l=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),l&&this.nodes.forEach(vb),this.nodes.forEach(Sv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Mv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(yb),this.nodes.forEach(xb),this.nodes.forEach(Sb),this.nodes.forEach(db),this.nodes.forEach(hb)):this.nodes.forEach(Mv),this.clearAllSnapshots();const a=St.now();Dt.delta=Ii(0,1e3/60,a-Dt.timestamp),Dt.timestamp=a,Dt.isProcessing=!0,Ef.update.process(Dt),Ef.preRender.process(Dt),Ef.render.process(Dt),Dt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Wm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(gb),this.sharedNodes.forEach((o,a)=>o.members.length?o.removeLeadSnapshot():this.sharedNodes.delete(a))}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,lt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){lt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!fn(this.snapshot.measuredBox.x)&&!fn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected||(this.layoutCorrected=Ut()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout;o&&Pf(this);const a=this.projectionDelta&&!yM(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||$r(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),bb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return Ut();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(Rb))){const{scroll:u}=this.root;u&&(si(a.x,u.offset.x),si(a.y,u.offset.y))}return a}removeElementScroll(o){var l;const a=Ut();if(Kn(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:f}=u;u!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Kn(a,o),si(a.x,d.offset.x),si(a.y,d.offset.y))}return a}applyTransform(o,a=!1,l){var u,d;const c=l||Ut();Kn(c,o);for(let f=0;f<this.path.length;f++){const p=this.path[f];!a&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(si(c.x,-p.scroll.offset.x),si(c.y,-p.scroll.offset.y)),$r(p.latestValues)&&hc(c,p.latestValues,(u=p.layout)==null?void 0:u.layoutBox)}return $r(this.latestValues)&&hc(c,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),c}removeTransform(o){var l;const a=Ut();Kn(a,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!$r(u.latestValues))continue;let d;u.instance&&(Rh(u.latestValues)&&u.updateSnapshot(),d=Ut(),Kn(d,u.measurePageBox())),dv(a,u.latestValues,(l=u.snapshot)==null?void 0:l.layoutBox,d)}return $r(this.latestValues)&&dv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0},this.addLayoutListener()}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Dt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!this.layout||!(u||d))return;this.resolvedRelativeTargetAt=Dt.timestamp;const f=this.getClosestProjectingParent();!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ut(),this.targetWithTransforms=Ut()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),QC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Kn(this.target,this.layout.layoutBox),hM(this.target,this.targetDelta)):Kn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Rh(this.parent.latestValues)||dM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ut(),this.relativeTargetOrigin=Ut(),iu(this.relativeTargetOrigin,a,l,this.options.layoutAnchor||void 0),Kn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var m;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Dt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||u))return;Kn(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;kC(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ut());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ov(this.prevProjectionDelta.x,this.projectionDelta.x),ov(this.prevProjectionDelta.y,this.projectionDelta.y)),ca(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!yv(this.projectionDelta.x,this.prevProjectionDelta.x)||!yv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Zs(),this.projectionDelta=Zs(),this.projectionDeltaWithTransform=Zs()}setAnimationOrigin(o,a=!1,l){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},f=Zs();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=Ut(),m=c?c.source:void 0,y=this.layout?this.layout.source:void 0,g=m!==y,h=this.getStack(),v=!h||h.members.length<=1,S=!!(g&&!v&&this.options.crossfade===!0&&!this.path.some(Ab));this.animationProgress=0;let x;const E=l==null?void 0:l.interpolateProjection(o);this.mixTargetDelta=A=>{const w=A/1e3,_=E==null?void 0:E(w);_?(f.x.translate=_.x,f.x.scale=st(o.x.scale,1,w),f.x.origin=o.x.origin,f.x.originPoint=o.x.originPoint,f.y.translate=_.y,f.y.scale=st(o.y.scale,1,w),f.y.origin=o.y.origin,f.y.originPoint=o.y.originPoint):(Tv(f.x,o.x,w),Tv(f.y,o.y,w)),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(iu(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),wb(this.relativeTarget,this.relativeTargetOrigin,p,w),x&&ib(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Ut()),Kn(x,this.relativeTarget)),g&&(this.animationValues=d,XC(d,u,this.latestValues,w,S,v)),_&&_.rotate!==void 0&&(this.animationValues||(this.animationValues=d),this.animationValues.pathRotation=_.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=w},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(Ir(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=lt.update(()=>{mc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=_o(0)),this.motionValue.jump(0,!1),this.currentAnimation=VC(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),o.onUpdate&&o.onUpdate(u)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),g1(this.currentAnimation,this),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ub),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead(),{targetWithTransforms:a,layout:l,latestValues:c}=o;let{target:u}=o;if(!(!a||!u||!l)){if(this!==o&&this.layout&&l&&EM(this.options.animationType,this.layout.layoutBox,l.layoutBox)){u=this.target||Ut();const d=fn(this.layout.layoutBox.x);u.x.min=o.target.x.min,u.x.max=u.x.min+d;const f=fn(this.layout.layoutBox.y);u.y.min=o.target.y.min,u.y.max=u.y.min+f}Kn(a,u),hc(a,c),ca(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new rb),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Rf("z",o,c,this.animationValues);for(let u=0;u<bf.length;u++)Rf(`rotate${bf[u]}`,o,c,this.animationValues),Rf(`skew${bf[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=pc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=pc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!$r(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const u=c.animationValues||c.latestValues;this.applyTransformsToTarget();let d=ab(this.projectionDeltaWithTransform,this.treeScale,u);l&&(d=l(u,d)),o.transform=d;const{x:f,y:p}=this.projectionDelta;o.transformOrigin=`${f.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:o.opacity=c===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const m in Fa){if(u[m]===void 0)continue;const{correct:y,applyTo:g,isCSSVariable:h}=Fa[m],v=d==="none"?u[m]:y(u[m],c);if(g){const S=g.length;for(let x=0;x<S;x++)o[g[x]]=v}else h?this.options.visualElement.renderState.vars[m]=v:o[m]=v}this.options.layoutId&&(o.pointerEvents=c===this?pc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=this.dragSnapshot=this.dragAncestor=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(Sv),this.root.sharedNodes.clear()}}}function db(t){t.updateLayout(),_b(t)}function hb(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;if(s==="size")ni(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=fn(f);f.min=i[d].min,f.max=f.min+p});else if(s==="x"||s==="y"){const d=s==="x"?"y":"x";Lh(o?e.measuredBox[d]:e.layoutBox[d],i[d])}else EM(s,e.layoutBox,i)&&ni(d=>{const f=o?e.measuredBox[d]:e.layoutBox[d],p=fn(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Zs();ca(a,i,e.layoutBox);const l=Zs();o?ca(l,t.applyTransform(r,!0),e.measuredBox):ca(l,i,e.layoutBox);const c=!yM(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const m=t.options.layoutAnchor||void 0,y=Ut();iu(y,e.layoutBox,f.layoutBox,m);const g=Ut();iu(g,i,p.layoutBox,m),xM(y,g)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=g,t.relativeTargetOrigin=y,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function pb(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function mb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function gb(t){t.clearSnapshot()}function Sv(t){t.clearMeasurements()}function vb(t){t.isLayoutDirty=!0,t.updateLayout()}function Mv(t){t.isLayoutDirty=!1}function _b(t){const{snapshot:e,dragAncestor:n}=t,i=n==null?void 0:n.layout;if(!e||!i||t.resumeFrom||t.isAnimationBlocked)return;const r=n.dragSnapshot;ni(s=>si(e.layoutBox[s],i.layoutBox[s].min-r.layoutBox[s].min))}function yb(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.dragSnapshot||t.layout,t.isLayoutDirty=!0)}function xb(t){var e;t.relativeTarget&&((e=t.relativeParent)!=null&&e.isLayoutDirty)&&(t.currentAnimation?t.isLayoutDirty=!0:(t.targetDelta=void 0,t.removeRelativeTarget()))}function Sb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Ev(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Mb(t){t.resolveTargetDelta()}function Eb(t){t.calcProjection()}function Tb(t){t.resetSkewAndRotation()}function Tv(t,e,n){t.translate=st(e.translate,0,n),t.scale=st(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function wv(t,e,n,i){t.min=st(e.min,n.min,i),t.max=st(e.max,n.max,i)}function wb(t,e,n,i){wv(t.x,e.x,n.x,i),wv(t.y,e.y,n.y,i)}function Ab(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Cb={duration:.45,ease:[.4,0,.1,1]},Av=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Cv=Av("applewebkit/")&&!Av("chrome/")?Math.round:ui;function bv(t){t.min=Cv(t.min),t.max=Cv(t.max)}function bb(t){bv(t.x),bv(t.y)}function EM(t,e,n){return t==="position"||t==="preserve-aspect"&&!JC(_v(e),_v(n),.2)}function Rb(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}function Oa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}const Pb=MM({attachResizeListener:(t,e)=>Oa(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Lf={current:void 0},TM=MM({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Lf.current){const t=new Pb({});t.mount(window),t.setOptions({layoutScroll:!0}),Lf.current=t}return Lf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Lb=new WeakMap;function Uu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function ka(t){return typeof t=="string"||Array.isArray(t)}const Xm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Rv=["initial",...Xm];function Fu(t){if(Uu(t.animate))return!0;for(let e=0;e<Rv.length;e++)if(ka(t[Rv[e]]))return!0;return!1}function wM(t){return!!(Fu(t)||t.variants)}function Db(t,e,n){for(const i in e){const r=e[i],s=n[i];if(qt(r))t.addValue(i,r);else if(qt(s))t.addValue(i,_o(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,_o(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Dh={current:null},AM={current:!1},Ib=typeof window<"u";function Nb(){if(AM.current=!0,!!Ib)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Dh.current=t.matches;t.addEventListener("change",e),e()}else Dh.current=!1}const Pv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ru={};function CM(t){ru=t}function Ub(){return ru}class Fb{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Um,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=St.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,lt.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Fu(n),this.isVariantNode=wM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const m=f[p];c[p]!==void 0&&qt(m)&&m.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];if(this.current=e,Lb.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.isVariantNode&&!this.isControllingVariants){let r=this;do r=r.props.inherit!==!1&&r.parent;while(r&&!r.isVariantNode);if(r){const{variantChildren:s}=r;s.add(this),this.removeFromVariantTree=()=>s.delete(this)}}this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(AM.current||Nb(),this.shouldReduceMotion=Dh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Ir(this.notifyUpdate),Ir(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&Ah.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:u}=n.accelerate,d=new qS({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:Xn(u)}),f=o(d);this.valueSubscriptions.set(e,()=>{f(),d.cancel()});return}const i=Pr.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{var a;this.latestValues[e]=o,this.props.onUpdate&&lt.preRender(this.notifyUpdate),i&&(this.projection&&(this.projection.isTransformDirty=!0),(a=vo.get(this.current))==null||a.check()),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s()})}sortNodePosition(e){return!this.current||!e.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in ru){const n=ru[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ut()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){var s;const{transformTemplate:i,onUpdate:r}=this.props;(e.transformTemplate||i)&&this.scheduleRender(),(e.transformTemplate&&!i||e.onUpdate&&!r)&&((s=vo.get(this.current))==null||s.demote()),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let o=0;o<Pv.length;o++){const a=Pv[o];this.propEventSubscriptions[a]&&(this.propEventSubscriptions[a](),delete this.propEventSubscriptions[a]);const l="on"+a,c=e[l];c&&(this.propEventSubscriptions[a]=this.on(a,c))}this.prevMotionValues=Db(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}addValue(e,n){const i=this.values.get(e);if(n!==i){i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n);const r=n.get();r!==void 0&&(this.latestValues[e]=r)}}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){var r;if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=_o(n??((r=this.getDefaultValue)==null?void 0:r.call(this,e)),{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Sm(i)||Mm(i))?i=parseFloat(i):typeof i!="number"&&!Ln.test(i)&&Ln.test(n)&&(i=Nm(e,n)),this.setBaseTarget(e,qt(i)?i.get():i)),qt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}on(e,n){return this.events[e]||(this.events[e]=new Kc),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){Wm.render(this.render)}}class bM extends Fb{constructor(){super(...arguments),this.KeyframeResolver=DC}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;qt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function RM(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function PM(t,{layout:e,layoutId:n}){return Pr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Fa[t]||t==="opacity")}function Ym(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(qt(i[a])||r&&qt(r[a])||PM(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function Ob(t){return window.getComputedStyle(t)}class kb extends bM{constructor(){super(...arguments),this.type="html",this.renderInstance=RM}mount(e){Iu(!!e.style),super.mount(e)}readValueFromInstance(e,n){var i;if(Pr.has(n))return(i=this.projection)!=null&&i.isProjecting?Ua(n):C1(e,n);{const r=Ob(e),s=(ES(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return pM(e,n)}build(e,n,i){Gm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Ym(e,n,i)}}const $m=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Ou(t){return{point:{x:t.pageX,y:t.pageY}}}const Bb=t=>e=>$m(e)&&t(e,Ou(e));function ua(t,e,n,i){return Oa(t,e,Bb(n),i)}const gc=new WeakMap;let dr;const LM=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Hm(i)&&"getBBox"in i?i.getBBox()[e]:i[n],Vb=LM("inline","width","offsetWidth"),zb=LM("block","height","offsetHeight");function Hb({target:t,borderBoxSize:e}){var n;(n=gc.get(t))==null||n.forEach(i=>{i(t,{get width(){return Vb(t,e)},get height(){return zb(t,e)}})})}function Gb(t){t.forEach(Hb)}function Wb(){typeof ResizeObserver>"u"||(dr=new ResizeObserver(Gb))}function Xb(t,e){dr||Wb();const n=lM(t);return n.forEach(i=>{let r=gc.get(i);r||(r=new Set,gc.set(i,r)),r.add(e),dr==null||dr.observe(i)}),()=>{n.forEach(i=>{const r=gc.get(i);r==null||r.delete(e),r!=null&&r.size||dr==null||dr.unobserve(i)})}}const vc=new Set;let Js;function Yb(){Js=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};vc.forEach(e=>e(t))},window.addEventListener("resize",Js)}function $b(t){return vc.add(t),Js||Yb(),()=>{vc.delete(t),!vc.size&&typeof Js=="function"&&(window.removeEventListener("resize",Js),Js=void 0)}}function Lv(t,e){return typeof t=="function"?$b(t):Xb(t,e)}const Dv=(t,e)=>Math.abs(t-e);function jb(t,e){const n=Dv(t.x,e.x),i=Dv(t.y,e.y);return Math.sqrt(n**2+i**2)}const Iv=new Set(["auto","scroll"]);class DM{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.hasPendingMove=!1,this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=El(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Df(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,g=jb(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!y&&!g)return;const{point:h}=m;this.history.push({...h,timestamp:St.now()});const{onStart:v,onMove:S}=this.handlers;y||(v&&v(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),S&&S(this.lastMoveEvent,m)},this.handlePointerMove=(m,y)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=y,this.lastMoveEventInfo=El(y,this.transformPagePoint),this.hasPendingMove=!0,lt.update(this.updatePoint,!0)},this.handlePointerUp=(m,y)=>{this.hasPendingMove&&this.updatePoint(),this.end();const{onEnd:g,onSessionEnd:h,resumeAnimation:v}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Df(m.type==="pointercancel"?this.lastMoveEventInfo:El(y,this.transformPagePoint),this.history);this.startEvent&&g&&g(m,S),h&&h(m,S)},!$m(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=Ou(e),c=El(l,this.transformPagePoint),{point:u}=c,{timestamp:d}=Dt;this.history=[{...u,timestamp:d}];const{onSessionStart:f}=n;f&&f(e,Df(c,this.history));const p={passive:!0,capture:!0};this.removeListeners=ja(ua(this.contextWindow,"pointermove",this.handlePointerMove,p),ua(this.contextWindow,"pointerup",this.handlePointerUp,p),ua(this.contextWindow,"pointercancel",this.handlePointerUp,p)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(Iv.has(i.overflowX)||Iv.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),lt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ir(this.updatePoint)}}function El(t,e){return e?{point:e(t.point)}:t}function Nv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Df({point:t},e){return{point:t,delta:Nv(t,IM(e)),offset:Nv(t,qb(e)),velocity:Kb(e,.1)}}function qb(t){return t[0]}function IM(t){return t[t.length-1]}function Kb(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=IM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Xn(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>Xn(e)*2&&(i=t[1]);const s=Rn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Zb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Jb(t){return Zb.has(t.tagName)||t.isContentEditable===!0}const Qb=new Set(["INPUT","SELECT","TEXTAREA"]);function eR(t){return Qb.has(t.tagName)||t.isContentEditable===!0}const ei={x:!1,y:!1};function NM(){return ei.x||ei.y}function tR(t){return t==="x"||t==="y"?ei[t]?null:(ei[t]=!0,()=>{ei[t]=!1}):ei.x||ei.y?null:(ei.x=ei.y=!0,()=>{ei.x=ei.y=!1})}function nR(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?st(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?st(n,t,i.max):Math.min(t,n)),t}function Uv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function iR(t,{top:e,left:n,bottom:i,right:r}){return{x:Uv(t.x,n,r),y:Uv(t.y,e,i)}}function Fv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function rR(t,e){return{x:Fv(t.x,e.x),y:Fv(t.y,e.y)}}function sR(t,e){let n=.5;const i=fn(t),r=fn(e);return r>i?n=fs(e.min,e.max-i,t.min):i>r&&(n=fs(t.min,t.max-r,e.min)),Ii(0,1,n)}function oR(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ih=.35;function aR(t=Ih){return t===!1?t=0:t===!0&&(t=Ih),{x:Ov(t,"left","right"),y:Ov(t,"top","bottom")}}function Ov(t,e,n){return{min:kv(t,e),max:kv(t,n)}}function kv(t,e){return typeof t=="number"?t:t[e]||0}const lR=new WeakMap;class cR{constructor(e,n=()=>e.getProps()){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ut(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e,this.readProps=n}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){var d;const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=f=>{n&&this.snapToCursor(f),this.stopAnimation()},o=(f,p)=>{const{drag:m,dragPropagation:y,onDragStart:g}=this.getProps();if(m&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=tR(m),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ni(v=>{let S=this.getAxisMotionValue(v).get()||0;if(Nu(S)&&(S=Bm(S,this.visualElement.current)||0),we.test(S))S=parseFloat(S);else if(Ai.test(S)){const{projection:x}=this.visualElement;if(x&&x.layout){const E=x.layout.layoutBox[v];E&&(S=fn(E)*(parseFloat(S)/100))}}this.originPoint[v]=S}),g&&lt.update(()=>g(f,p),!1,!0),Ch(this.visualElement,"transform");const{animationState:h}=this.visualElement;h&&h.setActive("whileDrag",!0)},a=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p;const{dragPropagation:m,dragDirectionLock:y,onDirectionLock:g,onDrag:h}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:v}=p;if(y&&this.currentDirection===null){if(this.currentDirection=fR(v),this.currentDirection===null)return;g&&g(this.currentDirection)}this.updateAxis("x",p.point,v),this.updateAxis("y",p.point,v),this.visualElement.render(),h&&lt.update(()=>h(f,p),!1,!0)},l=(f,p)=>{this.latestPointerEvent=f,this.latestPanInfo=p,this.stop(f,p),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:u}=this.getProps();this.panSession=new DM(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:i,contextWindow:(d=this.visualElement.current)==null?void 0:d.ownerDocument.defaultView,element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&lt.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Tl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=nR(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;Oo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=iR(i.layoutBox,e):this.constraints=!1,this.elastic=aR(n),r!==this.constraints&&!Oo(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&ni(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=oR(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!Oo(e))return!1;const i=Bv(e),{projection:r}=this.visualElement;if(!r||!r.layout)return!1;r.root&&(r.root.scroll=void 0,r.root.updateScroll());const s=BC(i,r.root,this.visualElement.getTransformPagePoint());let o=rR(r.layout.layoutBox,s);if(n){const a=n(FC(o));this.hasMutatedConstraints=!!a,a&&(o=fM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=ni(u=>{if(!Tl(u,n,this.currentDirection))return;let d=l&&l[u]||{};(o===!0||o===u)&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,m)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return Ch(this.visualElement,e),i.start(km(e,i,0,n,this.visualElement,!1))}stopAnimation(){ni(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.readProps()[n];return r||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor({clientX:e,clientY:n}){var a;const{drag:i}=this.getProps(),r={x:e,y:n},s=((a=this.visualElement.getTransformPagePoint())==null?void 0:a(r))||r,o=this.visualElement.measureViewportBox();ni(l=>{if(!Tl(l,i,this.currentDirection))return;const c=this.getAxisMotionValue(l),{min:u,max:d}=o[l];c.set((c.get()||0)+s[l]-st(u,d,.5))})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Oo(n)||!i||!this.constraints)return;this.stopAnimation();const r=this.constraints,s={x:0,y:0};ni(a=>{const l=this.getAxisMotionValue(a).get();s[a]=sR({min:l,max:l},r[a])});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),ni(a=>{const l=this.getAxisMotionValue(a);if(!Tl(a,e,null)||!l.get())return;const{min:c,max:u}=this.constraints[a];l.set(st(c,u,s[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;lR.set(this.visualElement,this);const e=this.visualElement.current,n=ua(e,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps(),f=c.target,p=f!==e&&eR(f);u&&d&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps(),u=Oo(c)&&Bv(c);u&&(this.constraints=this.resolveRefConstraints(),i||(i=uR(e,u,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),lt.read(r);const a=Oa(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(ni(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=c[d].translate,f.set(f.get()+c[d].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.readProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Ih,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function Oo(t){return!!t&&typeof t=="object"&&("current"in t||"nodeType"in t)}const Bv=t=>"current"in t?t.current:t;function Vv(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function uR(t,e,n){const i=Lv(t,Vv(n)),r=Lv(e,Vv(n));return()=>{i(),r()}}function Tl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function fR(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}function UM(t,e){const n=lM(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function dR(t){return!(t.pointerType==="touch"||NM())}function hR(t,e,n={}){const[i,r,s]=UM(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const u=()=>{o.removeEventListener("pointerleave",m)},d=g=>{c&&(c(g),c=void 0),u()},f=g=>{a=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),l&&(l=!1,d(g))},p=()=>{a=!0,window.addEventListener("pointerup",f,r),window.addEventListener("pointercancel",f,r)},m=g=>{if(g.pointerType!=="touch"){if(a){l=!0;return}d(g)}},y=g=>{if(!dR(g))return;l=!1;const h=e(o,g);typeof h=="function"&&(c=h,o.addEventListener("pointerleave",m,r))};o.addEventListener("pointerenter",y,r),o.addEventListener("pointerdown",p,r)}),s}const FM=(t,e)=>e?t===e?!0:FM(t,e.parentElement):!1,_c=new WeakSet;function zv(t){return e=>{e.key==="Enter"&&t(e)}}function If(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const pR=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=zv(()=>{if(_c.has(n))return;If(n,"down");const r=zv(()=>{If(n,"up")}),s=()=>If(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Hv(t){return $m(t)&&!NM()}const Gv=new WeakSet;function mR(t,e,n={}){const[i,r,s]=UM(t,n),o=a=>{const l=a.currentTarget;if(!Hv(a)||Gv.has(a))return;_c.add(l),n.stopPropagation&&Gv.add(a);const c=e(l,a),u={...r,capture:!0},d=(m,y)=>{window.removeEventListener("pointerup",f,u),window.removeEventListener("pointercancel",p,u),_c.has(l)&&_c.delete(l),Hv(m)&&typeof c=="function"&&c(m,{success:y})},f=m=>{d(m,l===window||l===document||n.useGlobalTarget||FM(l,m.target))},p=m=>{d(m,!1)};window.addEventListener("pointerup",f,u),window.addEventListener("pointercancel",p,u)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),dc(a)&&(a.addEventListener("focus",c=>pR(c,r)),!Jb(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}class Or{constructor(e){this.isMounted=!1,this.node=e}update(){}}const OM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),kM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function gR(t,e,n,i){RM(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(OM.has(r)?r:Vm(r),e.attrs[r])}function BM(t,e,n){const i=Ym(t,e,n);for(const r in t)if(r!=="children"&&(qt(t[r])||qt(e[r]))){const s=Qi.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class vR extends bM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ut}getBaseTargetFromProps(e,n){return Pr.has(n)?super.getBaseTargetFromProps(e,n)??Ua(n):e[n]}getDefaultValue(e){return Pr.has(e)?this.latestValues[e]??Ua(e):void 0}readValueFromInstance(e,n){if(Pr.has(n)){const i=HS(n);return i&&i.default||0}if(cM.includes(n)){const r=getComputedStyle(e)[n];if(typeof r=="string"&&r)return r.trim()}return n=OM.has(n)?n:Vm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return BM(e,n,i)}build(e,n,i){uM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){gR(e,n,i,r)}mount(e){this.isSVGTag=kM(e.tagName),super.mount(e)}}function VM(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const _R=[...Xm].reverse();function yR(t){let e=a=>Promise.all(a.map(({animation:l,options:c})=>wC(t,l,c))),n=Wv(),i=!0,r=!1;function s(a){var v;const{props:l,parent:c,manuallyAnimateOnMount:u}=t,d=i||r,f=[],p=new Set;let m={},y=1/0,g=t;do g=g.props.inherit!==!1&&g.parent;while(g&&!g.isControllingVariants);if(_R.forEach((S,x)=>{var N,O;const E=n[S],A=l[S],w=g&&g.props[S],_=A!==void 0?A:ka(w)||w===!1?w:void 0,C=ka(_),P=S===a?E.isActive:null;P===!1&&(y=x);const I=C&&A===void 0&&!(d&&u);if(E.protectedKeys={...m},!E.isActive&&P===null||!_&&!E.prevProp||Uu(_)||typeof _=="boolean")return;if(S==="exit"&&E.isActive&&P!==!0){m={...m,...E.prevResolvedValues};return}const F=xR(E.prevProp,_);let L=F||C&&(P&&!I||x>y),b=!1;const D=Array.isArray(_)?_:[_];let z={};if(P!==!1)for(const H of D){const{transition:U,transitionEnd:J,...re}=ss(t,H,iM(t,S))||{};z={...z,...re,...J}}const{prevResolvedValues:k}=E;for(const H in{...k,...z}){if(H in m)continue;const U=z[H],J=k[H],re=Array.isArray(U)&&Array.isArray(J)?!VM(U,J)||F:U!==J;if(re&&U==null)p.add(H);else if(re||U!==void 0&&p.has(H)){L=!0,p.delete(H)&&(b=!0),E.needsAnimating[H]=!0;const ae=t.getValue(H);ae&&(ae.liveStyle=!1)}else E.protectedKeys[H]=!0}if(E.prevProp=_,E.prevResolvedValues=z,E.isActive&&(m={...m,...z}),L&&(!(I&&F)||b))for(const H of D){const U={type:S};if(typeof H=="string"&&d&&u&&(c!=null&&c.enteringChildren)){const J=(O=(N=ss(c,H))==null?void 0:N.transition)==null?void 0:O.delayChildren;U.delay=eM(c.enteringChildren,t,J)}f.push({animation:H,options:U})}}),p.size){const{initial:S}=l,x={},E=typeof S!="boolean"&&ss(t,Array.isArray(S)?S[0]:S,(v=t.presenceContext)==null?void 0:v.custom);E&&E.transition&&(x.transition=E.transition),p.forEach(A=>{const w=t.getValue(A);w&&(w.liveStyle=!0);const _=E&&!Array.isArray(S)?E[A]:void 0,C=t.getBaseTargetFromProps(l,A);x[A]=(_!==void 0?_:C!==void 0&&!qt(C)?C:t.initialValues[A]===void 0?t.baseTarget[A]:void 0)??null}),f.push({animation:x})}const h=d&&t.blockInitialAnimation||i&&!u&&(l.initial===!1||l.initial===l.animate);return i=r=!1,!h&&f.length?e(f):Promise.resolve()}function o(a,l){var u;if(n[a].isActive===l)return Promise.resolve();(u=t.variantChildren)==null||u.forEach(d=>{var f;return(f=d.animationState)==null?void 0:f.setActive(a,l)}),n[a].isActive=l;const c=s(a);for(const d in n)n[d].protectedKeys={};return c}return{animateChanges:s,setActive:o,setAnimateFunction:a=>{e=a(t)},getState:()=>n,reset:()=>{n=Wv(),r=!0}}}function xR(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!VM(e,t):!1}function Wv(){const t={};for(const e of Xm)t[e]={isActive:e==="animate",protectedKeys:{},needsAnimating:{},prevResolvedValues:{}};return t}const jm=ce.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Xv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function SR(...t){return e=>{let n=!1;const i=t.map(r=>{const s=Xv(r,e);return!n&&typeof s=="function"&&(n=!0),s});if(n)return()=>{for(let r=0;r<i.length;r++){const s=i[r];typeof s=="function"?s():Xv(t[r],null)}}}}function MR(...t){return ce.useCallback(SR(...t),t)}class ER extends ce.Component{getSnapshotBeforeUpdate(e){const n=this.props.getElement();if(dc(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=n.offsetParent,r=dc(i)&&i.offsetWidth||0,s=dc(i)&&i.offsetHeight||0,o=getComputedStyle(n),a=this.props.sizeRef.current;a.height=parseFloat(o.height),a.width=parseFloat(o.width),a.top=n.offsetTop,a.left=n.offsetLeft,a.right=r-a.width-a.left,a.bottom=s-a.height-a.top,a.direction=o.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function TR({children:t,isPresent:e,anchorX:n,anchorY:i,root:r,pop:s,popNode:o}){var m;const a=ce.useId(),l=ce.useRef(null),c=ce.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:u}=ce.useContext(jm),d=s!==!1?((m=t.props)==null?void 0:m.ref)??(t==null?void 0:t.ref):void 0,f=MR(l,d),p=()=>{var y;return l.current||((y=o==null?void 0:o.current)==null?void 0:y.current)};return ce.useInsertionEffect(()=>{const{width:y,height:g,top:h,left:v,right:S,bottom:x,direction:E}=c.current,A=p();if(e||s===!1||!A||!y||!g)return;const w=E==="rtl",_=n==="left"?w?`right: ${S}`:`left: ${v}`:w?`left: ${v}`:`right: ${S}`,C=i==="bottom"?`bottom: ${x}`:`top: ${h}`;A.dataset.motionPopId=a;const P=A.ownerDocument,I=P.createElement("style");u&&(I.nonce=u);const F=r??P.head;return F.appendChild(I),I.sheet&&I.sheet.insertRule(`
          [data-motion-pop-id="${a}"] {
            position: absolute !important;
            width: ${y}px !important;
            height: ${g}px !important;
            ${_}px !important;
            ${C}px !important;
          }
        `),()=>{A.removeAttribute("data-motion-pop-id"),F.contains(I)&&F.removeChild(I)}},[e]),W.jsx(ER,{isPresent:e,getElement:p,sizeRef:c,pop:s,children:s===!1?t:ce.cloneElement(t,{ref:f})})}const wR=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o,anchorX:a,anchorY:l,root:c})=>{const u=ym(AR),d=ce.useId(),f=ce.useRef(),p=ce.useRef(n),m=ce.useRef(i);Ra(()=>{p.current=n,m.current=i});let y=!0,g=ce.useMemo(()=>(y=!1,{id:d,initial:e,isPresent:n,custom:r,onExitComplete:h=>{u.set(h,!0);for(const v of u.values())if(!v)return;i&&i()},register:(h,v)=>{var S,x;return u.set(h,!1),v&&((x=(S=v.parent)==null?void 0:S.presenceContext)==null?void 0:x.id)!==d&&(f.current=v),()=>{var E;u.delete(h),!p.current&&!u.size&&((E=m.current)==null||E.call(m))}}}),[n,u,i]);return s&&y&&(g={...g}),ce.useMemo(()=>{u.forEach((h,v)=>u.set(v,!1))},[n]),ce.useEffect(()=>{!n&&!u.size&&i&&i()},[n]),t=W.jsx(TR,{pop:o==="popLayout",isPresent:n,anchorX:a,anchorY:l,root:c,popNode:f,children:t}),W.jsx(Du.Provider,{value:g,children:t})};function AR(){return new Map}function zM(t=!0){const e=ce.useContext(Du);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ce.useId();ce.useEffect(()=>{if(t)return r(s)},[t]);const o=ce.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const ko=t=>t.key||"";function Yv(t){const e=[];return ce.Children.forEach(t,n=>{ce.isValidElement(n)&&e.push(n)}),e}const $v=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1,anchorX:a="left",anchorY:l="top",root:c})=>{const[u,d]=zM(o),f=ce.useMemo(()=>Yv(t),[t]),p=o&&!u?[]:f.map(ko),m=ce.useRef(!0),y=ym(()=>new Map),g=ce.useRef(new Set),[h,v]=ce.useState(f),[S,x]=ce.useState(f);Ra(()=>{o&&!u&&!S.length&&(d==null||d())},[u,o,S.length,d]);const E=ce.useRef();ce.useEffect(()=>()=>{const _=E.current;E.current=void 0,_==null||_()},[S]),Ra(()=>{m.current=!1;for(let _=0;_<S.length;_++){const C=ko(S[_]);p.includes(C)?(y.delete(C),g.current.delete(C)):y.get(C)!==!0&&y.set(C,!1)}},[S,p.length,p.join("-")]);const A=[];if(f!==h){let _=[...f],C=0;for(const P of S){const I=p.indexOf(ko(P));I===-1?(_.splice(C++,0,P),A.push(P)):C=I+A.length+1}return A.every(P=>y.get(ko(P)))?_=f:s==="wait"&&(_=A),x(Yv(_)),v(f),null}const{forceRender:w}=ce.useContext(_m);return W.jsx(W.Fragment,{children:S.map(_=>{const C=ko(_),P=o&&!u?!1:f===S||p.includes(C),I=()=>{if(g.current.has(C))return;if(y.has(C))g.current.add(C),y.set(C,!0);else return;let F=!0;y.forEach(L=>{L||(F=!1)}),F&&(w==null||w(),v([]),o&&(d==null||d()),E.current=i)};return W.jsx(wR,{isPresent:P,initial:!m.current||n?void 0:!1,custom:e,presenceAffectsLayout:r,mode:s,root:c,onExitComplete:P?void 0:I,anchorX:a,anchorY:l,children:_},C)})})},HM=ce.createContext({strict:!1}),jv={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let qv=!1;function CR(){if(qv)return;const t={};for(const e in jv)t[e]={isEnabled:n=>jv[e].some(i=>!!n[i])};CM(t),qv=!0}function GM(){return CR(),Ub()}function bR(t){const e=GM();for(const n in t)e[n]={...e[n],...t[n]};CM(e)}const ku=ce.createContext({});function RR(t,e){if(Fu(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ka(n)?n:void 0,animate:ka(i)?i:void 0}}return t.inherit!==!1?e:{}}function PR(t){const{initial:e,animate:n}=RR(t,ce.useContext(ku));return ce.useMemo(()=>({initial:e,animate:n}),[Kv(e),Kv(n)])}function Kv(t){return Array.isArray(t)?t.join(" "):t}const qm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function WM(t,e,n){for(const i in e)!qt(e[i])&&!PM(i,n)&&(t[i]=e[i])}function LR({transformTemplate:t},e){return ce.useMemo(()=>{const n=qm();return Gm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function DR(t,e){const n=t.style||{},i={};return WM(i,n,t),Object.assign(i,LR(t,e)),i}function IR(t,e){const n={},i=DR(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const XM=()=>({...qm(),attrs:{}});function NR(t,e,n,i){const r=ce.useMemo(()=>{const s=XM();return uM(s,e,kM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};WM(s,t.style,t),r.style={...s,...r.style}}return r}const UR=new Set(["animate","exit","variants","initial","style","values","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function su(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||UR.has(t)}function FR(t,e){return t.startsWith("on")?!su(t):(e==null?void 0:e(t))??!su(t)}function OR(t,e,n,i){const r={};for(const s in t)s==="values"&&typeof t.values=="object"||qt(t[s])||(FR(s,i)||n===!0&&su(s)||!e&&!su(s)||t.draggable&&s.startsWith("onDrag"))&&(r[s]=t[s]);return r}const kR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Km(t){return typeof t!="string"||t.includes("-")?!1:!!(kR.indexOf(t)>-1||/[A-Z]/u.test(t))}function BR(t,e,n,{latestValues:i},r,s=!1,o,a){const c=(o??Km(t)?NR:IR)(e,i,r,t),u=OR(e,typeof t=="string",s,a),d=t!==ce.Fragment?{...u,...c,ref:n}:{},{children:f}=e,p=ce.useMemo(()=>qt(f)?f.get():f,[f]);return ce.createElement(t,{...d,children:p})}function VR({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:zR(n,i,r,t),renderState:e()}}function zR(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=pc(s[f]);let{initial:o,animate:a}=t;const l=Fu(t),c=wM(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!Uu(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const m=nM(t,f[p]);if(m){const{transitionEnd:y,transition:g,...h}=m;for(const v in h){let S=h[v];if(Array.isArray(S)){const x=u?S.length-1:0;S=S[x]}S!==null&&(r[v]=S)}for(const v in y)r[v]=y[v]}}}return r}const YM=t=>(e,n)=>{const i=ce.useContext(ku),r=ce.useContext(Du),s=()=>VR(t,e,i,r);return n?s():ym(s)},HR=YM({scrapeMotionValuesFromProps:Ym,createRenderState:qm}),GR=YM({scrapeMotionValuesFromProps:BM,createRenderState:XM}),WR=Symbol.for("motionComponentSymbol");function XR(t,e,n){const i=ce.useRef(n);ce.useInsertionEffect(()=>{i.current=n});const r=ce.useRef(null);return ce.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s)),e&&(s?e.mount(s):e.unmount());const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s)},[e])}const $M=ce.createContext({});function YR(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function $R(t,e,n,i,r,s){var S,x;const{visualElement:o}=ce.useContext(ku),a=ce.useContext(HM),l=ce.useContext(Du),c=ce.useContext(jm),u=c.reducedMotion,d=c.skipAnimations,f=ce.useRef(null),p=ce.useRef(!1);i=i||a.renderer,!f.current&&i&&(f.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:u,skipAnimations:d,isSVG:s}),p.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const m=f.current,y=ce.useContext($M);m&&!m.projection&&r&&(m.type==="html"||m.type==="svg")&&jR(f.current,n,r,y);const g=ce.useRef(!1);ce.useInsertionEffect(()=>{m&&g.current&&m.update(n,l)});const h=n[sM],v=ce.useRef(!!h&&typeof window<"u"&&!((S=window.MotionHandoffIsComplete)!=null&&S.call(window,h))&&((x=window.MotionHasOptimisedAnimation)==null?void 0:x.call(window,h)));return Ra(()=>{var E;!p.current||!m||((E=m.animationState)==null||E.animateChanges(),m.enteringChildren=void 0)},[]),Ra(()=>{p.current=!0,m&&(g.current=!0,window.MotionIsMounted=!0,m.updateFeatures(),m.scheduleRenderMicrotask(),v.current&&m.animationState&&m.animationState.animateChanges())}),ce.useEffect(()=>{m&&(!v.current&&m.animationState&&m.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)==null||E.call(window,h)}),v.current=!1),m.enteringChildren=void 0)}),m}function jR(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutAnchor:u,layoutCrossfade:d}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:jM(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&YR(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:l,layoutRoot:c,layoutAnchor:u})}function jM(t){if(t)return t.options.allowProjection!==!1?t.projection:jM(t.parent)}function Nf(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&bR(i);const s=n?n==="svg":Km(t),o=s?GR:HR;function a(c,u){let d;const f={...ce.useContext(jm),...c,layoutId:qR(c)},{isStatic:p,isValidProp:m}=f,y=PR(c),g=o(c,p);if(!p&&typeof window<"u"){KR();const h=ZR(f);d=h.MeasureLayout,y.visualElement=$R(t,g,f,r,h.ProjectionNode,s)}return W.jsxs(ku.Provider,{value:y,children:[d&&y.visualElement?W.jsx(d,{visualElement:y.visualElement,...f}):null,BR(t,c,XR(g,y.visualElement,u),g,p,e,s,m)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=ce.forwardRef(a);return l[WR]=t,l}function qR({layoutId:t}){const e=ce.useContext(_m).id;return e&&t!==void 0?e+"-"+t:t}function KR(t,e){ce.useContext(HM).strict}function ZR(t){const e=GM(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function JR(t,e){if(typeof Proxy>"u")return Nf;const n=new Map,i=(s,o)=>Nf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Nf(o,void 0,t,e)),n.get(o))})}const QR=(t,e)=>e.isSVG??Km(t)?new vR(e):new kb(e,{allowProjection:t!==ce.Fragment});class eP extends Or{constructor(e){super(e),e.animationState||(e.animationState=yR(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Uu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let tP=0;class nP extends Or{constructor(){super(...arguments),this.id=tP++}update(){var l;const{presenceContext:e,prevPresenceContext:n,animationState:i}=this.node;if(!e||!i)return;const{isPresent:r,onExitComplete:s}=e,o=n==null?void 0:n.isPresent;if(r===o)return;if(r&&o===!1){if(this.exit===!0){const{initial:c}=this.node.getProps();if(c&&!Array.isArray(c)){const{transition:u,transitionEnd:d,...f}=ss(this.node,c)||{};for(const p in f)(l=this.node.getValue(p))==null||l.jump(f[p])}this.node.blockInitialAnimation=!1,i.reset(),i.animateChanges()}else i.setActive("exit",!1);this.exit=void 0;return}const a=this.exit=i.setActive("exit",!r);s&&!r&&a.then(()=>{this.exit===a&&(this.exit=!0,s(this.id))})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id,this.node))}unmount(){}}const iP={animation:{Feature:eP},exit:{Feature:nP}};class rP extends Or{constructor(e){super(e),this.removeGroupControls=ui,this.removeListeners=ui,this.controls=new cR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ui}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const sP=({current:t})=>t?t.ownerDocument.defaultView:null,Uf=t=>(e,n)=>{t&&lt.update(()=>t(e,n),!1,!0)};class oP extends Or{constructor(){super(...arguments),this.removePointerDownListener=ui}onPointerDown(e){this.session=new DM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:sP(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Uf(e),onStart:Uf(n),onMove:Uf(i),onEnd:(s,o)=>{delete this.session,r&&lt.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=ua(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ff=!1;const Zv=({layout:t,layoutDependency:e})=>({layout:t,layoutDependency:e,animationType:typeof t=="string"?t:"both"});class aP extends ce.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),Ff&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,...Zv(this.props),onExitComplete:()=>this.safeToRemove()})),mc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layout:n,layoutDependency:i,visualElement:r,drag:s,isPresent:o}=this.props,{projection:a}=r;return a&&(a.isPresent=o,(e.layoutDependency!==i||e.layout!==n)&&a.setOptions({...a.options,...Zv(this.props)}),Ff=!0,s||e.layoutDependency!==i||i===void 0||e.isPresent!==o?a.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?a.promote():a.relegate()||lt.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=n,i.root.didUpdate(),Wm.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;Ff=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function qM(t){const[e,n]=zM(),i=ce.useContext(_m);return W.jsx(aP,{...t,layoutGroup:i,switchLayoutGroup:ce.useContext($M),isPresent:e,safeToRemove:n})}const lP={pan:{Feature:oP},drag:{Feature:rP,ProjectionNode:TM,MeasureLayout:qM}};function Jv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&lt.postRender(()=>s(e,Ou(e)))}class cP extends Or{mount(){const{current:e}=this.node;e&&(this.unmount=hR(e,(n,i)=>(Jv(this.node,i,"Start"),r=>Jv(this.node,r,"End"))))}unmount(){}}class uP extends Or{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ja(Oa(this.node.current,"focus",()=>this.onFocus()),Oa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qv(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&lt.postRender(()=>s(e,Ou(e)))}class fP extends Or{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=mR(e,(r,s)=>(Qv(this.node,s,"Start"),(o,{success:a})=>Qv(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const Nh=new WeakMap,Of=new WeakMap,dP=t=>{const e=Nh.get(t.target);e&&e(t)},hP=t=>{t.forEach(dP)};function pP({root:t,...e}){const n=t||document;Of.has(n)||Of.set(n,{});const i=Of.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(hP,{root:t,...e})),i[r]}function mP(t,e,n){const i=pP(e);return Nh.set(t,n),i.observe(t),()=>{Nh.delete(t),i.unobserve(t)}}const gP={some:0,all:1};class vP extends Or{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var l;(l=this.stopObserver)==null||l.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:gP[r]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),p=u?d:f;p&&p(c)};this.stopObserver=mP(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(_P(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function _P({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const yP={inView:{Feature:vP},tap:{Feature:fP},focus:{Feature:uP},hover:{Feature:cP}},xP={layout:{ProjectionNode:TM,MeasureLayout:qM}},SP={...iP,...yP,...lP,...xP},MP=JR(SP,QR),e_=MP;function EP({categories:t,skills:e}){const[n,i]=ce.useState("all"),[r,s]=ce.useState(null),o=ce.useMemo(()=>{const c={};return t.forEach(u=>c[u.id]=u),c},[t]),a=ce.useMemo(()=>n==="all"?e:e.filter(c=>c.cat===n),[e,n]),l=c=>{s(u=>u&&u.id===c.id?null:c)};return W.jsxs("div",{className:"cloud",children:[W.jsxs("div",{className:"cloud-head",children:[W.jsx("p",{className:"cloud-subtitle",children:"Click a skill for context. Filter by discipline to focus the set."}),W.jsxs("div",{className:"cloud-filters",role:"tablist","aria-label":"Skill categories",children:[W.jsx("button",{type:"button",className:`cloud-pill ${n==="all"?"is-active":""}`,onClick:()=>{i("all"),s(null)},children:"All"}),t.map(c=>W.jsxs("button",{type:"button",className:`cloud-pill ${n===c.id?"is-active":""}`,style:{"--c":c.color},onClick:()=>{i(u=>u===c.id?"all":c.id),s(null)},children:[W.jsx("span",{className:"cloud-pill-dot",style:{background:c.color}}),c.label]},c.id))]})]}),W.jsx("div",{className:"cloud-chips",children:W.jsx($v,{mode:"popLayout",initial:!1,children:a.map((c,u)=>{const d=o[c.cat],f=r&&r.id===c.id;return W.jsxs(e_.button,{type:"button",layout:!0,initial:{opacity:0,scale:.85,y:8},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.85},transition:{delay:Math.min(u*.015,.3),type:"spring",stiffness:320,damping:26},className:`cloud-chip ${f?"is-selected":""}`,style:{"--c":d?d.color:"#a6265a"},onClick:()=>l(c),"aria-pressed":f,children:[W.jsx("span",{className:"cloud-chip-dot",style:{background:d?d.color:"#a6265a"}}),c.name,c.endorsements?W.jsx("span",{className:"cloud-chip-count",children:c.endorsements}):null]},c.id)})})}),W.jsx($v,{mode:"wait",children:r&&W.jsxs(e_.div,{className:"cloud-detail",initial:{opacity:0,y:-6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.22},style:{"--c":o[r.cat]?o[r.cat].color:"#a6265a"},children:[W.jsx("span",{className:"cloud-detail-cat",children:o[r.cat]?o[r.cat].label:"Skill"}),W.jsx("h4",{className:"cloud-detail-name",children:r.name}),W.jsx("p",{className:"cloud-detail-desc",children:r.description}),r.context&&W.jsx("p",{className:"cloud-detail-context",children:r.context})]},r.id)}),W.jsx("p",{className:"cloud-hint",children:r?"Click the chip again to close.":"Pick a chip to read more."})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zm="186",TP=0,t_=1,wP=2,yc=1,AP=2,Zo=3,ds=0,En=1,Hi=2,$i=0,fa=1,ou=2,n_=3,i_=4,CP=5,Us=100,bP=101,RP=102,PP=103,LP=104,DP=200,IP=201,NP=202,UP=203,KM=204,ZM=205,FP=206,OP=207,kP=208,BP=209,VP=210,zP=211,HP=212,GP=213,WP=214,Uh=0,Fh=1,Oh=2,Ba=3,kh=4,Bh=5,Vh=6,zh=7,JM=0,XP=1,YP=2,Ci=0,QM=1,eE=2,tE=3,nE=4,iE=5,rE=6,sE=7,oE=300,hs=301,yo=302,kf=303,Bf=304,Bu=306,Hh=1e3,Xi=1001,Gh=1002,$t=1003,$P=1004,wl=1005,sn=1006,Vf=1007,Qr=1008,Hn=1009,aE=1010,lE=1011,Va=1012,Jm=1013,Ri=1014,Mi=1015,Pi=1016,Qm=1017,eg=1018,za=1020,cE=35902,uE=35899,fE=1021,dE=1022,ai=1023,er=1026,es=1027,hE=1028,tg=1029,ps=1030,ng=1031,ig=1033,xc=33776,Sc=33777,Mc=33778,Ec=33779,Wh=35840,Xh=35841,Yh=35842,$h=35843,jh=36196,qh=37492,Kh=37496,Zh=37488,Jh=37489,au=37490,Qh=37491,ep=37808,tp=37809,np=37810,ip=37811,rp=37812,sp=37813,op=37814,ap=37815,lp=37816,cp=37817,up=37818,fp=37819,dp=37820,hp=37821,pp=36492,mp=36494,gp=36495,vp=36283,_p=36284,lu=36285,yp=36286,jP=3200,r_=0,qP=1,_r="",kn="srgb",cu="srgb-linear",uu="linear",rt="srgb",zf=7680,KP=519,ZP=512,JP=513,QP=514,rg=515,eL=516,tL=517,sg=518,nL=519,iL=35044,s_="300 es",Ei=2e3,fu=2001;function rL(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function du(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sL(){const t=du("canvas");return t.style.display="block",t}const o_={};function a_(...t){const e="THREE."+t.shift();console.log(e,...t)}function pE(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=pE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=pE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ao(...t){const e=t.join(" ");e in o_||(o_[e]=!0,Oe(...t))}function oL(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const aL={[Uh]:Fh,[Oh]:Vh,[kh]:zh,[Ba]:Bh,[Fh]:Uh,[Vh]:Oh,[zh]:kh,[Bh]:Ba};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,xp=180/Math.PI;function Za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function lL(t,e){return(t%e+e)%e}function Gf(t,e,n){return(1-n)*t+n*e}function Bo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ug=class ug{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ug.prototype.isVector2=!0;let et=ug;class wo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],m=s[o+2],y=s[o+3];if(d!==y||l!==f||c!==p||u!==m){let g=l*f+c*p+u*m+d*y;g<0&&(f=-f,p=-p,m=-m,y=-y,g=-g);let h=1-a;if(g<.9995){const v=Math.acos(g),S=Math.sin(v);h=Math.sin(h*v)/S,a=Math.sin(a*v)/S,l=l*h+f*a,c=c*h+p*a,u=u*h+m*a,d=d*h+y*a}else{l=l*h+f*a,c=c*h+p*a,u=u*h+m*a,d=d*h+y*a;const v=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=v,c*=v,u*=v,d*=v}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+u*d+l*p-c*f,e[n+1]=l*m+u*f+c*d-a*p,e[n+2]=c*m+u*p+a*f-l*d,e[n+3]=u*m-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"YXZ":this._x=f*u*d+c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"ZXY":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d-f*p*m;break;case"ZYX":this._x=f*u*d-c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d+f*p*m;break;case"YZX":this._x=f*u*d+c*p*m,this._y=c*p*d+f*u*m,this._z=c*u*m-f*p*d,this._w=c*u*d-f*p*m;break;case"XZY":this._x=f*u*d-c*p*m,this._y=c*p*d-f*u*m,this._z=c*u*m+f*p*d,this._w=c*u*d+f*p*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const fg=class fg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(l_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(l_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fg.prototype.isVector3=!0;let Y=fg;const Wf=new Y,l_=new wo,dg=class dg{constructor(e,n,i,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],m=i[8],y=r[0],g=r[3],h=r[6],v=r[1],S=r[4],x=r[7],E=r[2],A=r[5],w=r[8];return s[0]=o*y+a*v+l*E,s[3]=o*g+a*S+l*A,s[6]=o*h+a*x+l*w,s[1]=c*y+u*v+d*E,s[4]=c*g+u*S+d*A,s[7]=c*h+u*x+d*w,s[2]=f*y+p*v+m*E,s[5]=f*g+p*S+m*A,s[8]=f*h+p*x+m*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,m=n*d+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/m;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return ao("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xf.makeScale(e,n)),this}rotate(e){return ao("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xf.makeRotation(-e)),this}translate(e,n){return ao("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};dg.prototype.isMatrix3=!0;let ke=dg;const Xf=new ke,c_=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),u_=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cL(){const t={enabled:!0,workingColorSpace:cu,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=lo(r.r),r.g=lo(r.g),r.b=lo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_r?uu:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ao("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ao("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[cu]:{primaries:e,whitePoint:i,transfer:uu,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:c_,fromXYZ:u_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),t}const je=cL();function ji(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function lo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ms;class uL{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ms===void 0&&(Ms=du("canvas")),Ms.width=e.width,Ms.height=e.height;const r=Ms.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ms}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=du("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ji(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ji(n[i]/255)*255):n[i]=ji(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fL=0;class og{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fL++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yf(r[o].image)):s.push(Yf(r[o]))}else s=Yf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?uL.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let dL=0;const $f=new Y;class on extends _s{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Xi,r=Xi,s=sn,o=Qr,a=ai,l=Hn,c=on.DEFAULT_ANISOTROPY,u=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dL++}),this.uuid=Za(),this.name="",this.source=new og(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=oE;on.DEFAULT_ANISOTROPY=1;const hg=class hg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],m=l[9],y=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,x=(p+1)/2,E=(h+1)/2,A=(u+f)/4,w=(d+y)/4,_=(m+g)/4;return S>x&&S>E?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=A/i,s=w/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=_/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=w/s,r=_/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-y)/v,this.z=(f-u)/v,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hg.prototype.isVector4=!0;let At=hg;class hL extends _s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new on(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new og(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends hL{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class mE extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pL extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const mu=class mu{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,m,y,g)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,m,y,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=y,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mu().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Es.setFromMatrixColumn(e,0).length(),s=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,m=a*u,y=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+m*c,n[5]=f-y*c,n[9]=-a*l,n[2]=y-f*c,n[6]=m+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,m=c*u,y=c*d;n[0]=f+y*a,n[4]=m*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-m,n[6]=y+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,m=c*u,y=c*d;n[0]=f-y*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*u,n[9]=y-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,m=a*u,y=a*d;n[0]=l*u,n[4]=m*c-p,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=p*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=y-f*d,n[8]=m*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+m,n[10]=f-y*d}else if(e.order==="XZY"){const f=o*l,p=o*c,m=a*l,y=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+y,n[5]=o*u,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mL,e,gL)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),or.crossVectors(i,wn),or.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),or.crossVectors(i,wn)),or.normalize(),Al.crossVectors(wn,or),r[0]=or.x,r[4]=Al.x,r[8]=wn.x,r[1]=or.y,r[5]=Al.y,r[9]=wn.y,r[2]=or.z,r[6]=Al.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],m=i[2],y=i[6],g=i[10],h=i[14],v=i[3],S=i[7],x=i[11],E=i[15],A=r[0],w=r[4],_=r[8],C=r[12],P=r[1],I=r[5],F=r[9],L=r[13],b=r[2],D=r[6],z=r[10],k=r[14],N=r[3],O=r[7],H=r[11],U=r[15];return s[0]=o*A+a*P+l*b+c*N,s[4]=o*w+a*I+l*D+c*O,s[8]=o*_+a*F+l*z+c*H,s[12]=o*C+a*L+l*k+c*U,s[1]=u*A+d*P+f*b+p*N,s[5]=u*w+d*I+f*D+p*O,s[9]=u*_+d*F+f*z+p*H,s[13]=u*C+d*L+f*k+p*U,s[2]=m*A+y*P+g*b+h*N,s[6]=m*w+y*I+g*D+h*O,s[10]=m*_+y*F+g*z+h*H,s[14]=m*C+y*L+g*k+h*U,s[3]=v*A+S*P+x*b+E*N,s[7]=v*w+S*I+x*D+E*O,s[11]=v*_+S*F+x*z+E*H,s[15]=v*C+S*L+x*k+E*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],m=e[3],y=e[7],g=e[11],h=e[15],v=l*p-c*f,S=a*p-c*d,x=a*f-l*d,E=o*p-c*u,A=o*f-l*u,w=o*d-a*u;return n*(y*v-g*S+h*x)-i*(m*v-g*E+h*A)+r*(m*S-y*E+h*w)-s*(m*x-y*A+g*w)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return n*(o*u-a*c)-i*(s*u-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],m=e[12],y=e[13],g=e[14],h=e[15],v=n*a-i*o,S=n*l-r*o,x=n*c-s*o,E=i*l-r*a,A=i*c-s*a,w=r*c-s*l,_=u*y-d*m,C=u*g-f*m,P=u*h-p*m,I=d*g-f*y,F=d*h-p*y,L=f*h-p*g,b=v*L-S*F+x*I+E*P-A*C+w*_;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/b;return e[0]=(a*L-l*F+c*I)*D,e[1]=(r*F-i*L-s*I)*D,e[2]=(y*w-g*A+h*E)*D,e[3]=(f*A-d*w-p*E)*D,e[4]=(l*P-o*L-c*C)*D,e[5]=(n*L-r*P+s*C)*D,e[6]=(g*x-m*w-h*S)*D,e[7]=(u*w-f*x+p*S)*D,e[8]=(o*F-a*P+c*_)*D,e[9]=(i*P-n*F-s*_)*D,e[10]=(m*A-y*x+h*v)*D,e[11]=(d*x-u*A-p*v)*D,e[12]=(a*C-o*I-l*_)*D,e[13]=(n*I-i*C+r*_)*D,e[14]=(y*S-m*E-g*v)*D,e[15]=(u*E-d*S+f*v)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,m=s*d,y=o*u,g=o*d,h=a*d,v=l*c,S=l*u,x=l*d,E=i.x,A=i.y,w=i.z;return r[0]=(1-(y+h))*E,r[1]=(p+x)*E,r[2]=(m-S)*E,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(f+h))*A,r[6]=(g+v)*A,r[7]=0,r[8]=(m+S)*w,r[9]=(g-v)*w,r[10]=(1-(f+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Es.set(r[0],r[1],r[2]).length();const a=Es.set(r[4],r[5],r[6]).length(),l=Es.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Zn.copy(this);const c=1/o,u=1/a,d=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=u,Zn.elements[5]*=u,Zn.elements[6]*=u,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let m,y;if(l)m=s/(o-s),y=o*s/(o-s);else if(a===Ei)m=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===fu)m=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,y;if(l)m=1/(o-s),y=o/(o-s);else if(a===Ei)m=-2/(o-s),y=-(o+s)/(o-s);else if(a===fu)m=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};mu.prototype.isMatrix4=!0;let Et=mu;const Es=new Y,Zn=new Et,mL=new Y(0,0,0),gL=new Y(1,1,1),or=new Y,Al=new Y,wn=new Y,f_=new Et,d_=new wo;class ms{constructor(e=0,n=0,i=0,r=ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return f_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(f_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return d_.setFromEuler(this),this.setFromQuaternion(d_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ms.DEFAULT_ORDER="XYZ";class gE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vL=0;const h_=new Y,Ts=new wo,Ni=new Et,Cl=new Y,Vo=new Y,_L=new Y,yL=new wo,p_=new Y(1,0,0),m_=new Y(0,1,0),g_=new Y(0,0,1),v_={type:"added"},xL={type:"removed"},ws={type:"childadded",child:null},jf={type:"childremoved",child:null};class hn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vL++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new Y,n=new ms,i=new wo,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new ke}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,n){return Ts.setFromAxisAngle(e,n),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(p_,e)}rotateY(e){return this.rotateOnAxis(m_,e)}rotateZ(e){return this.rotateOnAxis(g_,e)}translateOnAxis(e,n){return h_.copy(e).applyQuaternion(this.quaternion),this.position.add(h_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(p_,e)}translateY(e){return this.translateOnAxis(m_,e)}translateZ(e){return this.translateOnAxis(g_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Cl.copy(e):Cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Vo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Vo,Cl,this.up):Ni.lookAt(Cl,Vo,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),Ts.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(v_),ws.child=e,this.dispatchEvent(ws),ws.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xL),jf.child=e,this.dispatchEvent(jf),jf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(v_),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,e,_L),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vo,yL,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}hn.DEFAULT_UP=new Y(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jo extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SL={type:"move"};class qf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),h=this._getHandJoint(c,y);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(SL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Jo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const vE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},bl={h:0,s:0,l:0};function Kf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=lL(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Kf(o,s,e+1/3),this.g=Kf(o,s,e),this.b=Kf(o,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=kn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kn){const i=vE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return je.workingToColorSpace(nn.copy(this),e),Math.round(Xe(nn.r*255,0,255))*65536+Math.round(Xe(nn.g*255,0,255))*256+Math.round(Xe(nn.b*255,0,255))}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=kn){je.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==kn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(bl);const i=Gf(ar.h,bl.h,n),r=Gf(ar.s,bl.s,n),s=Gf(ar.l,bl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new qe;qe.NAMES=vE;class ML extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ms,this.environmentIntensity=1,this.environmentRotation=new ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new Y,Ui=new Y,Zf=new Y,Fi=new Y,As=new Y,Cs=new Y,__=new Y,Jf=new Y,Qf=new Y,ed=new Y,td=new At,nd=new At,id=new At;class oi{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Ui.subVectors(i,n),Zf.subVectors(e,n);const o=Jn.dot(Jn),a=Jn.dot(Ui),l=Jn.dot(Zf),c=Ui.dot(Ui),u=Ui.dot(Zf),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return td.setScalar(0),nd.setScalar(0),id.setScalar(0),td.fromBufferAttribute(e,n),nd.fromBufferAttribute(e,i),id.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(td,s.x),o.addScaledVector(nd,s.y),o.addScaledVector(id,s.z),o}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Ui.subVectors(e,n),Jn.cross(Ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ui.subVectors(this.a,this.b),Jn.cross(Ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;As.subVectors(r,i),Cs.subVectors(s,i),Jf.subVectors(e,i);const l=As.dot(Jf),c=Cs.dot(Jf);if(l<=0&&c<=0)return n.copy(i);Qf.subVectors(e,r);const u=As.dot(Qf),d=Cs.dot(Qf);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(As,o);ed.subVectors(e,s);const p=As.dot(ed),m=Cs.dot(ed);if(m>=0&&p<=m)return n.copy(s);const y=p*c-l*m;if(y<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Cs,a);const g=u*m-p*d;if(g<=0&&d-u>=0&&p-m>=0)return __.subVectors(s,r),a=(d-u)/(d-u+(p-m)),n.copy(r).addScaledVector(__,a);const h=1/(g+y+f);return o=y*h,a=f*h,n.copy(i).addScaledVector(As,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ja{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Qn):Qn.fromBufferAttribute(s,o),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rl.copy(i.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),Pl.subVectors(this.max,zo),bs.subVectors(e.a,zo),Rs.subVectors(e.b,zo),Ps.subVectors(e.c,zo),lr.subVectors(Rs,bs),cr.subVectors(Ps,Rs),Br.subVectors(bs,Ps);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Br.z,Br.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Br.z,0,-Br.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Br.y,Br.x,0];return!rd(n,bs,Rs,Ps,Pl)||(n=[1,0,0,0,1,0,0,0,1],!rd(n,bs,Rs,Ps,Pl))?!1:(Ll.crossVectors(lr,cr),n=[Ll.x,Ll.y,Ll.z],rd(n,bs,Rs,Ps,Pl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Oi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Qn=new Y,Rl=new Ja,bs=new Y,Rs=new Y,Ps=new Y,lr=new Y,cr=new Y,Br=new Y,zo=new Y,Pl=new Y,Ll=new Y,Vr=new Y;function rd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Vr.fromArray(t,s);const a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),c=n.dot(Vr),u=i.dot(Vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lt=new Y,Dl=new et;let EL=0;class di extends _s{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EL++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=iL,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Dl.fromBufferAttribute(this,n),Dl.applyMatrix3(e),this.setXY(n,Dl.x,Dl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bo(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bo(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bo(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class _E extends di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class yE extends di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Dn extends di{constructor(e,n,i){super(new Float32Array(e),n,i)}}const TL=new Ja,Ho=new Y,sd=new Y;class Qa{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):TL.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const n=Ho.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ho,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(sd)),this.expandByPoint(Ho.copy(e.center).sub(sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wL=0;const On=new Et,od=new hn,Ls=new Y,An=new Ja,Go=new Ja,Ht=new Y;class Tn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wL++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rL(e)?yE:_E)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,n,i){return On.makeTranslation(e,n,i),this.applyMatrix4(On),this}scale(e,n,i){return On.makeScale(e,n,i),this.applyMatrix4(On),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Dn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Go.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(An.min,Go.min),An.expandByPoint(Ht),Ht.addVectors(An.max,Go.max),An.expandByPoint(Ht)):(An.expandByPoint(Go.min),An.expandByPoint(Go.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),Ht.add(Ls)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new di(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new Y,l[_]=new Y;const c=new Y,u=new Y,d=new Y,f=new et,p=new et,m=new et,y=new Y,g=new Y;function h(_,C,P){c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,P),f.fromBufferAttribute(s,_),p.fromBufferAttribute(s,C),m.fromBufferAttribute(s,P),u.sub(c),d.sub(c),p.sub(f),m.sub(f);const I=1/(p.x*m.y-m.x*p.y);isFinite(I)&&(y.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(I),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(I),a[_].add(y),a[C].add(y),a[P].add(y),l[_].add(g),l[C].add(g),l[P].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,C=v.length;_<C;++_){const P=v[_],I=P.start,F=P.count;for(let L=I,b=I+F;L<b;L+=3)h(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const S=new Y,x=new Y,E=new Y,A=new Y;function w(_){E.fromBufferAttribute(r,_),A.copy(E);const C=a[_];S.copy(C),S.sub(E.multiplyScalar(E.dot(C))).normalize(),x.crossVectors(A,C);const I=x.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,I)}for(let _=0,C=v.length;_<C;++_){const P=v[_],I=P.start,F=P.count;for(let L=I,b=I+F;L<b;L+=3)w(e.getX(L+0)),w(e.getX(L+1)),w(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)f[m++]=c[p++]}return new di(f,u,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Tn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ad=new Y,AL=new Y,CL=new ke;class mr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ad.subVectors(i,n).cross(AL.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(ad),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||CL.getNormalMatrix(e),r=this.coplanarPoint(ad).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let bL=0;class Ao extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bL++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=fa,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=KM,this.blendDst=ZM,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=KP,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zf,this.stencilZFail=zf,this.stencilZPass=zf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new mr().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ki=new Y,ld=new Y,Il=new Y,Nl=new Y;class ag{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ld.copy(e).add(n).multiplyScalar(.5),Il.copy(n).sub(e).normalize(),Nl.copy(this.origin).sub(ld);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Il),a=Nl.dot(this.direction),l=-Nl.dot(Il),c=Nl.lengthSq(),u=Math.abs(1-o*o);let d,f,p,m;if(u>0)if(d=o*l-a,f=o*a-l,m=s*u,d>=0)if(f>=-m)if(f<=m){const y=1/u;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ld).addScaledVector(Il,f),p}intersectSphere(e,n){if(e.radius<0)return null;ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,d=e.x-o.x,f=e.y-o.y,p=e.z-o.z,m=n.x-o.x,y=n.y-o.y,g=n.z-o.z,h=i.x-o.x,v=i.y-o.y,S=i.z-o.z,x=Math.abs(l),E=Math.abs(c),A=Math.abs(u);let w,_,C,P,I,F,L,b,D,z,k,N;if(x>=E&&x>=A?(C=l,F=d,D=m,N=h,l>=0?(w=c,_=u,P=f,I=p,L=y,b=g,z=v,k=S):(w=u,_=c,P=p,I=f,L=g,b=y,z=S,k=v)):E>=A?(C=c,F=f,D=y,N=v,c>=0?(w=u,_=l,P=p,I=d,L=g,b=m,z=S,k=h):(w=l,_=u,P=d,I=p,L=m,b=g,z=h,k=S)):(C=u,F=p,D=g,N=S,u>=0?(w=l,_=c,P=d,I=f,L=m,b=y,z=h,k=v):(w=c,_=l,P=f,I=d,L=y,b=m,z=v,k=h)),C===0)return null;const O=w/C,H=_/C,U=1/C,J=P-O*F,re=I-H*F,ae=L-O*D,Ae=b-H*D,Ne=z-O*N,Z=k-H*N,te=Ne*Ae-Z*ae,Se=J*Z-re*Ne,Fe=ae*re-Ae*J;if(r){if(te<0||Se<0||Fe<0)return null}else if((te<0||Se<0||Fe<0)&&(te>0||Se>0||Fe>0))return null;const ue=te+Se+Fe;if(ue===0)return null;const Be=U*(te*F+Se*D+Fe*N);return(ue>0?Be<0:Be>0)?null:this.at(Be/ue,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lg extends Ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=JM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const y_=new Et,zr=new ag,Ul=new Qa,x_=new Y,Fl=new Y,Ol=new Y,kl=new Y,cd=new Y,Bl=new Y,S_=new Y,Vl=new Y;class Li extends hn{constructor(e=new Tn,n=new lg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(cd.fromBufferAttribute(d,e),o?Bl.addScaledVector(cd,u):Bl.addScaledVector(cd.sub(n),u))}n.add(Bl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(Ul.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Ul,x_)===null||zr.origin.distanceToSquared(x_)>(e.far-e.near)**2))&&(y_.copy(s).invert(),zr.copy(e.ray).applyMatrix4(y_),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){const g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,E=S;x<E;x+=3){const A=a.getX(x),w=a.getX(x+1),_=a.getX(x+2);r=zl(this,h,e,i,c,u,d,A,w,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=m,h=y;g<h;g+=3){const v=a.getX(g),S=a.getX(g+1),x=a.getX(g+2);r=zl(this,o,e,i,c,u,d,v,S,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=f.length;m<y;m++){const g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),S=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,E=S;x<E;x+=3){const A=x,w=x+1,_=x+2;r=zl(this,h,e,i,c,u,d,A,w,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=m,h=y;g<h;g+=3){const v=g,S=g+1,x=g+2;r=zl(this,o,e,i,c,u,d,v,S,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function RL(t,e,n,i,r,s,o,a){let l;if(e.side===En?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ds,a),l===null)return null;Vl.copy(a),Vl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Vl);return c<n.near||c>n.far?null:{distance:c,point:Vl.clone(),object:t}}function zl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Fl),t.getVertexPosition(l,Ol),t.getVertexPosition(c,kl);const u=RL(t,e,n,i,Fl,Ol,kl,S_);if(u){const d=new Y;oi.getBarycoord(S_,Fl,Ol,kl,d),r&&(u.uv=oi.getInterpolatedAttribute(r,a,l,c,d,new et)),s&&(u.uv1=oi.getInterpolatedAttribute(s,a,l,c,d,new et)),o&&(u.normal=oi.getInterpolatedAttribute(o,a,l,c,d,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};oi.getNormal(Fl,Ol,kl,f.normal),u.face=f,u.barycoord=d}return u}class PL extends on{constructor(e=null,n=1,i=1,r,s,o,a,l,c=$t,u=$t,d,f){super(null,o,a,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hr=new Qa,LL=new et(.5,.5),Hl=new Y;class xE{constructor(e=new mr,n=new mr,i=new mr,r=new mr,s=new mr,o=new mr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],m=s[8],y=s[9],g=s[10],h=s[11],v=s[12],S=s[13],x=s[14],E=s[15];if(r[0].setComponents(c-o,p-u,h-m,E-v).normalize(),r[1].setComponents(c+o,p+u,h+m,E+v).normalize(),r[2].setComponents(c+a,p+d,h+y,E+S).normalize(),r[3].setComponents(c-a,p-d,h-y,E-S).normalize(),i)r[4].setComponents(l,f,g,x).normalize(),r[5].setComponents(c-l,p-f,h-g,E-x).normalize();else if(r[4].setComponents(c-l,p-f,h-g,E-x).normalize(),n===Ei)r[5].setComponents(c+l,p+f,h+g,E+x).normalize();else if(n===fu)r[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const n=LL.distanceTo(e.center);return Hr.radius=.7071067811865476+n,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Hl.x=r.normal.x>0?e.max.x:e.min.x,Hl.y=r.normal.y>0?e.max.y:e.min.y,Hl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class SE extends Ao{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hu=new Y,pu=new Y,M_=new Et,Wo=new ag,Gl=new Qa,ud=new Y,E_=new Y;class DL extends hn{constructor(e=new Tn,n=new SE){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)hu.fromBufferAttribute(n,r-1),pu.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=hu.distanceTo(pu);e.setAttribute("lineDistance",new Dn(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Gl.copy(i.boundingSphere),Gl.applyMatrix4(r),Gl.radius+=s,e.ray.intersectsSphere(Gl)===!1)return;M_.copy(r).invert(),Wo.copy(e.ray).applyMatrix4(M_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let y=p,g=m-1;y<g;y+=c){const h=u.getX(y),v=u.getX(y+1),S=Wl(this,e,Wo,l,h,v,y);S&&n.push(S)}if(this.isLineLoop){const y=u.getX(m-1),g=u.getX(p),h=Wl(this,e,Wo,l,y,g,m-1);h&&n.push(h)}}else{const p=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let y=p,g=m-1;y<g;y+=c){const h=Wl(this,e,Wo,l,y,y+1,y);h&&n.push(h)}if(this.isLineLoop){const y=Wl(this,e,Wo,l,m-1,p,m-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wl(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(hu.fromBufferAttribute(a,r),pu.fromBufferAttribute(a,s),n.distanceSqToSegment(hu,pu,ud,E_)>i)return;ud.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(ud);if(!(c<e.near||c>e.far))return{distance:c,point:E_.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}class ME extends Ao{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const T_=new Et,Sp=new ag,Xl=new Qa,Yl=new Y;class IL extends hn{constructor(e=new Tn,n=new ME){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(r),Xl.radius+=s,e.ray.intersectsSphere(Xl)===!1)return;T_.copy(r).invert(),Sp.copy(e.ray).applyMatrix4(T_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let m=f,y=p;m<y;m++){const g=c.getX(m);Yl.fromBufferAttribute(d,g),w_(Yl,g,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let m=f,y=p;m<y;m++)Yl.fromBufferAttribute(d,m),w_(Yl,m,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function w_(t,e,n,i,r,s,o){const a=Sp.distanceSqToPoint(t);if(a<n){const l=new Y;Sp.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class EE extends on{constructor(e=[],n=hs,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class NL extends on{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ha extends on{constructor(e,n,i=Ri,r,s,o,a=$t,l=$t,c,u=er,d=1){if(u!==er&&u!==es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new og(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class UL extends Ha{constructor(e,n=Ri,i=hs,r,s,o=$t,a=$t,l,c=er){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class TE extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class el extends Tn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(u,3)),this.setAttribute("uv",new Dn(d,2));function m(y,g,h,v,S,x,E,A,w,_,C){const P=x/w,I=E/_,F=x/2,L=E/2,b=A/2,D=w+1,z=_+1;let k=0,N=0;const O=new Y;for(let H=0;H<z;H++){const U=H*I-L;for(let J=0;J<D;J++){const re=J*P-F;O[y]=re*v,O[g]=U*S,O[h]=b,c.push(O.x,O.y,O.z),O[y]=0,O[g]=0,O[h]=A>0?1:-1,u.push(O.x,O.y,O.z),d.push(J/w),d.push(1-H/_),k+=1}}for(let H=0;H<_;H++)for(let U=0;U<w;U++){const J=f+U+D*H,re=f+U+D*(H+1),ae=f+(U+1)+D*(H+1),Ae=f+(U+1)+D*H;l.push(J,re,Ae),l.push(re,ae,Ae),N+=6}a.addGroup(p,N,C),p+=N,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class FL{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new et:new Y);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new Y,r=[],s=[],o=[],a=new Y,l=new Et;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new Y)}s[0]=new Y,o[0]=new Y;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Xe(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Xe(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function OL(t,e){const n=1-t;return n*n*e}function kL(t,e){return 2*(1-t)*t*e}function BL(t,e){return t*t*e}function fd(t,e,n,i){return OL(t,e)+kL(t,n)+BL(t,i)}class VL extends FL{constructor(e=new Y,n=new Y,i=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Y){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(fd(e,r.x,s.x,o.x),fd(e,r.y,s.y,o.y),fd(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Vu extends Tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],m=[],y=[],g=[];for(let h=0;h<u;h++){const v=h*f-o;for(let S=0;S<c;S++){const x=S*d-s;m.push(x,-v,0),y.push(0,0,1),g.push(S/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const S=v+c*h,x=v+c*(h+1),E=v+1+c*(h+1),A=v+1+c*h;p.push(S,x,A),p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(y,3)),this.setAttribute("uv",new Dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.width,e.height,e.widthSegments,e.heightSegments)}}class cg extends Tn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new Y,f=new Y,p=[],m=[],y=[],g=[];for(let h=0;h<=i;h++){const v=[],S=h/i,x=o+S*a,E=e*Math.cos(x),A=Math.sqrt(e*e-E*E);let w=0;h===0&&o===0?w=.5/n:h===i&&l===Math.PI&&(w=-.5/n);for(let _=0;_<=n;_++){const C=_/n,P=r+C*s;d.x=-A*Math.cos(P),d.y=E,d.z=A*Math.sin(P),m.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),g.push(C+w,1-S),v.push(c++)}u.push(v)}for(let h=0;h<i;h++)for(let v=0;v<n;v++){const S=u[h][v+1],x=u[h][v],E=u[h+1][v],A=u[h+1][v+1];(h!==0||o>0)&&p.push(S,x,A),(h!==i-1||l<Math.PI)&&p.push(x,E,A)}this.setIndex(p),this.setAttribute("position",new Dn(m,3)),this.setAttribute("normal",new Dn(y,3)),this.setAttribute("uv",new Dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cg(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function xo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(A_(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(A_(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=xo(t[n]);for(const r in i)e[r]=i[r]}return e}function A_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function zL(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function wE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const HL={clone:xo,merge:cn};var GL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GL,this.fragmentShader=WL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=zL(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new et().fromArray(r.value);break;case"v3":this.uniforms[i].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class XL extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class YL extends Ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $L extends Ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $l=new Y,jl=new wo,vi=new Y;class AE extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($l,jl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,jl,vi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose($l,jl,vi),vi.x===1&&vi.y===1&&vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($l,jl,vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ur=new Y,C_=new et,b_=new et;class zn extends AE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xp*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ur.x,ur.y).multiplyScalar(-e/ur.z),ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ur.x,ur.y).multiplyScalar(-e/ur.z)}getViewSize(e,n){return this.getViewBounds(e,C_,b_),n.subVectors(b_,C_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class CE extends AE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=-90,Is=1;class jL extends hn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(Ds,Is,e,n);r.layers=this.layers,this.add(r);const s=new zn(Ds,Is,e,n);s.layers=this.layers,this.add(s);const o=new zn(Ds,Is,e,n);o.layers=this.layers,this.add(o);const a=new zn(Ds,Is,e,n);a.layers=this.layers,this.add(a);const l=new zn(Ds,Is,e,n);l.layers=this.layers,this.add(l);const c=new zn(Ds,Is,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class qL extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class KL{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Oe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const pg=class pg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};pg.prototype.isMatrix2=!0;let R_=pg;function P_(t,e,n,i){const r=ZL(i);switch(n){case fE:return t*e;case hE:return t*e/r.components*r.byteLength;case tg:return t*e/r.components*r.byteLength;case ps:return t*e*2/r.components*r.byteLength;case ng:return t*e*2/r.components*r.byteLength;case dE:return t*e*3/r.components*r.byteLength;case ai:return t*e*4/r.components*r.byteLength;case ig:return t*e*4/r.components*r.byteLength;case xc:case Sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xh:case $h:return Math.max(t,16)*Math.max(e,8)/4;case Wh:case Yh:return Math.max(t,8)*Math.max(e,8)/2;case jh:case qh:case Zh:case Jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kh:case au:case Qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tp:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case np:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ip:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case sp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case op:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ap:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case lp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case cp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case up:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case fp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case dp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pp:case mp:case gp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case vp:case _p:return Math.ceil(t/4)*Math.ceil(e/4)*8;case lu:case yp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZL(t){switch(t){case Hn:case aE:return{byteLength:1,components:1};case Va:case lE:case Pi:return{byteLength:2,components:1};case Qm:case eg:return{byteLength:2,components:4};case Ri:case Jm:case Mi:return{byteLength:4,components:1};case cE:case uE:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zm}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bE(){let t=null,e=!1,n=null,i=null;function r(s,o){i=t.requestAnimationFrame(r),n(s,o)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function JL(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){const m=d[f],y=d[p];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){const y=d[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var QL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eD=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aD=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,lD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fD=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_D=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SD=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,MD=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ED=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TD=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,wD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RD="gl_FragColor = linearToOutputTexel( gl_FragColor );",PD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,DD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ID=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ND=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,XD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,YD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$D=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZD=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,n3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,i3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,c3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,g3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,y3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,M3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,R3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,F3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,k3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,G3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,o2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,a2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,l2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,c2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,M2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:QL,alphahash_pars_fragment:eD,alphamap_fragment:tD,alphamap_pars_fragment:nD,alphatest_fragment:iD,alphatest_pars_fragment:rD,aomap_fragment:sD,aomap_pars_fragment:oD,batching_pars_vertex:aD,batching_vertex:lD,begin_vertex:cD,beginnormal_vertex:uD,bsdfs:fD,iridescence_fragment:dD,bumpmap_pars_fragment:hD,clipping_planes_fragment:pD,clipping_planes_pars_fragment:mD,clipping_planes_pars_vertex:gD,clipping_planes_vertex:vD,color_fragment:_D,color_pars_fragment:yD,color_pars_vertex:xD,color_vertex:SD,common:MD,cube_uv_reflection_fragment:ED,defaultnormal_vertex:TD,displacementmap_pars_vertex:wD,displacementmap_vertex:AD,emissivemap_fragment:CD,emissivemap_pars_fragment:bD,colorspace_fragment:RD,colorspace_pars_fragment:PD,envmap_fragment:LD,envmap_common_pars_fragment:DD,envmap_pars_fragment:ID,envmap_pars_vertex:ND,envmap_physical_pars_fragment:XD,envmap_vertex:UD,fog_vertex:FD,fog_pars_vertex:OD,fog_fragment:kD,fog_pars_fragment:BD,gradientmap_pars_fragment:VD,lightmap_pars_fragment:zD,lights_lambert_fragment:HD,lights_lambert_pars_fragment:GD,lights_pars_begin:WD,lights_toon_fragment:YD,lights_toon_pars_fragment:$D,lights_phong_fragment:jD,lights_phong_pars_fragment:qD,lights_physical_fragment:KD,lights_physical_pars_fragment:ZD,lights_fragment_begin:JD,lights_fragment_maps:QD,lights_fragment_end:e3,lightprobes_pars_fragment:t3,logdepthbuf_fragment:n3,logdepthbuf_pars_fragment:i3,logdepthbuf_pars_vertex:r3,logdepthbuf_vertex:s3,map_fragment:o3,map_pars_fragment:a3,map_particle_fragment:l3,map_particle_pars_fragment:c3,metalnessmap_fragment:u3,metalnessmap_pars_fragment:f3,morphinstance_vertex:d3,morphcolor_vertex:h3,morphnormal_vertex:p3,morphtarget_pars_vertex:m3,morphtarget_vertex:g3,normal_fragment_begin:v3,normal_fragment_maps:_3,normal_pars_fragment:y3,normal_pars_vertex:x3,normal_vertex:S3,normalmap_pars_fragment:M3,clearcoat_normal_fragment_begin:E3,clearcoat_normal_fragment_maps:T3,clearcoat_pars_fragment:w3,iridescence_pars_fragment:A3,opaque_fragment:C3,packing:b3,premultiplied_alpha_fragment:R3,project_vertex:P3,dithering_fragment:L3,dithering_pars_fragment:D3,roughnessmap_fragment:I3,roughnessmap_pars_fragment:N3,shadowmap_pars_fragment:U3,shadowmap_pars_vertex:F3,shadowmap_vertex:O3,shadowmask_pars_fragment:k3,skinbase_vertex:B3,skinning_pars_vertex:V3,skinning_vertex:z3,skinnormal_vertex:H3,specularmap_fragment:G3,specularmap_pars_fragment:W3,tonemapping_fragment:X3,tonemapping_pars_fragment:Y3,transmission_fragment:$3,transmission_pars_fragment:j3,uv_pars_fragment:q3,uv_pars_vertex:K3,uv_vertex:Z3,worldpos_vertex:J3,background_vert:Q3,background_frag:e2,backgroundCube_vert:t2,backgroundCube_frag:n2,cube_vert:i2,cube_frag:r2,depth_vert:s2,depth_frag:o2,distance_vert:a2,distance_frag:l2,equirect_vert:c2,equirect_frag:u2,linedashed_vert:f2,linedashed_frag:d2,meshbasic_vert:h2,meshbasic_frag:p2,meshlambert_vert:m2,meshlambert_frag:g2,meshmatcap_vert:v2,meshmatcap_frag:_2,meshnormal_vert:y2,meshnormal_frag:x2,meshphong_vert:S2,meshphong_frag:M2,meshphysical_vert:E2,meshphysical_frag:T2,meshtoon_vert:w2,meshtoon_frag:A2,points_vert:C2,points_frag:b2,shadow_vert:R2,shadow_frag:P2,sprite_vert:L2,sprite_frag:D2},ve={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},xi={basic:{uniforms:cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:cn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:cn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:cn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:cn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:cn([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:cn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:cn([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:cn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:cn([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:cn([ve.common,ve.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:cn([ve.lights,ve.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};xi.physical={uniforms:cn([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const ql={r:0,b:0,g:0},I2=new Et,RE=new ke;RE.set(-1,0,0,0,1,0,0,0,1);function N2(t,e,n,i,r,s){const o=new qe(0);let a=r===!0?0:1,l,c,u=null,d=0,f=null;function p(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const x=v.backgroundBlurriness>0;S=e.get(S,x)}return S}function m(v){let S=!1;const x=p(v);x===null?g(o,a):x&&x.isColor&&(g(x,1),S=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(v,S){const x=p(S);x&&(x.isCubeTexture||x.mapping===Bu)?(c===void 0&&(c=new Li(new el(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:xo(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(I2.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(RE),c.material.toneMapped=je.getTransfer(x.colorSpace)!==rt,(u!==x||d!==x.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Li(new Vu(2,2),new Di({name:"BackgroundMaterial",uniforms:xo(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=je.getTransfer(x.colorSpace)!==rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,S){v.getRGB(ql,wE(t)),n.buffers.color.setClear(ql.r,ql.g,ql.b,S,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:y,dispose:h}}function U2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(I,F,L,b,D){let z=!1;const k=d(I,b,L,F);s!==k&&(s=k,c(s.object)),z=p(I,b,L,D),z&&m(I,b,L,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,x(I,F,L,b),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function u(I){return t.deleteVertexArray(I)}function d(I,F,L,b){const D=b.wireframe===!0;let z=i[F.id];z===void 0&&(z={},i[F.id]=z);const k=I.isInstancedMesh===!0?I.id:0;let N=z[k];N===void 0&&(N={},z[k]=N);let O=N[L.id];O===void 0&&(O={},N[L.id]=O);let H=O[D];return H===void 0&&(H=f(l()),O[D]=H),H}function f(I){const F=[],L=[],b=[];for(let D=0;D<n;D++)F[D]=0,L[D]=0,b[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:L,attributeDivisors:b,object:I,attributes:{},index:null}}function p(I,F,L,b){const D=s.attributes,z=F.attributes;let k=0;const N=L.getAttributes();for(const O in N)if(N[O].location>=0){const U=D[O];let J=z[O];if(J===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;k++}return s.attributesNum!==k||s.index!==b}function m(I,F,L,b){const D={},z=F.attributes;let k=0;const N=L.getAttributes();for(const O in N)if(N[O].location>=0){let U=z[O];U===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(U=I.instanceColor));const J={};J.attribute=U,U&&U.data&&(J.data=U.data),D[O]=J,k++}s.attributes=D,s.attributesNum=k,s.index=b}function y(){const I=s.newAttributes;for(let F=0,L=I.length;F<L;F++)I[F]=0}function g(I){h(I,0)}function h(I,F){const L=s.newAttributes,b=s.enabledAttributes,D=s.attributeDivisors;L[I]=1,b[I]===0&&(t.enableVertexAttribArray(I),b[I]=1),D[I]!==F&&(t.vertexAttribDivisor(I,F),D[I]=F)}function v(){const I=s.newAttributes,F=s.enabledAttributes;for(let L=0,b=F.length;L<b;L++)F[L]!==I[L]&&(t.disableVertexAttribArray(L),F[L]=0)}function S(I,F,L,b,D,z,k){k===!0?t.vertexAttribIPointer(I,F,L,D,z):t.vertexAttribPointer(I,F,L,b,D,z)}function x(I,F,L,b){y();const D=b.attributes,z=L.getAttributes(),k=F.defaultAttributeValues;for(const N in z){const O=z[N];if(O.location>=0){let H=D[N];if(H===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),H!==void 0){const U=H.normalized,J=H.itemSize,re=e.get(H);if(re===void 0)continue;const ae=re.buffer,Ae=re.type,Ne=re.bytesPerElement,Z=Ae===t.INT||Ae===t.UNSIGNED_INT||H.gpuType===Jm;if(H.isInterleavedBufferAttribute){const te=H.data,Se=te.stride,Fe=H.offset;if(te.isInstancedInterleavedBuffer){for(let ue=0;ue<O.locationSize;ue++)h(O.location+ue,te.meshPerAttribute);I.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ue=0;ue<O.locationSize;ue++)g(O.location+ue);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let ue=0;ue<O.locationSize;ue++)S(O.location+ue,J/O.locationSize,Ae,U,Se*Ne,(Fe+J/O.locationSize*ue)*Ne,Z)}else{if(H.isInstancedBufferAttribute){for(let te=0;te<O.locationSize;te++)h(O.location+te,H.meshPerAttribute);I.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let te=0;te<O.locationSize;te++)g(O.location+te);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let te=0;te<O.locationSize;te++)S(O.location+te,J/O.locationSize,Ae,U,J*Ne,J/O.locationSize*te*Ne,Z)}}else if(k!==void 0){const U=k[N];if(U!==void 0)switch(U.length){case 2:t.vertexAttrib2fv(O.location,U);break;case 3:t.vertexAttrib3fv(O.location,U);break;case 4:t.vertexAttrib4fv(O.location,U);break;default:t.vertexAttrib1fv(O.location,U)}}}}v()}function E(){C();for(const I in i){const F=i[I];for(const L in F){const b=F[L];for(const D in b){const z=b[D];for(const k in z)u(z[k].object),delete z[k];delete b[D]}}delete i[I]}}function A(I){if(i[I.id]===void 0)return;const F=i[I.id];for(const L in F){const b=F[L];for(const D in b){const z=b[D];for(const k in z)u(z[k].object),delete z[k];delete b[D]}}delete i[I.id]}function w(I){for(const F in i){const L=i[F];for(const b in L){const D=L[b];if(D[I.id]===void 0)continue;const z=D[I.id];for(const k in z)u(z[k].object),delete z[k];delete D[I.id]}}}function _(I){for(const F in i){const L=i[F],b=I.isInstancedMesh===!0?I.id:0,D=L[b];if(D!==void 0){for(const z in D){const k=D[z];for(const N in k)u(k[N].object),delete k[N];delete D[z]}delete L[b],Object.keys(L).length===0&&delete i[F]}}}function C(){P(),o=!0,s!==r&&(s=r,c(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:g,disableUnusedAttributes:v}}function F2(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let p=0;p<u;p++)f+=c[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function O2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==ai&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const _=w===Pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Hn&&w!==Mi&&!_&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:E,samples:A}}function k2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new mr,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?u(null):c();else{const v=s?0:i,S=v*4;let x=h.clippingState||null;l.value=x,x=u(m,f,S,p);for(let E=0;E!==S;++E)x[E]=n[E];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,m){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,m!==!0||g===null){const h=p+y*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let S=0,x=p;S!==y;++S,x+=4)o.copy(d[S]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const Qs=4,B2=6,V2=20,z2=256,Xo=new CE,L_=new qe;let dd=null,hd=0,pd=0,md=!1;const H2=new Y,Gr=new Y;class D_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=H2}=s;dd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dd,hd,pd),this._renderer.xr.enabled=md,e.scissorTest=!1,Ns(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===hs||e.mapping===yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dd=this._renderer.getRenderTarget(),hd=this._renderer.getActiveCubeFace(),pd=this._renderer.getActiveMipmapLevel(),md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Pi,format:ai,colorSpace:cu,depthBuffer:!1},r=I_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=I_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=G2(s)),this._blurMaterial=X2(s,e,n),this._ggxMaterial=W2(s,e,n)}return r}_compileMaterial(e){const n=new Li(new Tn,e);this._renderer.compile(n,Xo)}_sceneToCubeUV(e,n,i,r,s){const l=new zn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(L_),d.toneMapping=Ci,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new el,new lg({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let h=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,h=!0):(g.color.copy(L_),h=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const E=this._cubeSize;Ns(r,x*E,S>2?E:0,E,E),d.setRenderTarget(r),h&&d.render(y,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===hs||e.mapping===yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=U_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ns(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Xo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=c*1.25,p=d*f,{_lodMax:m}=this,y=this._sizeLods[i],g=3*y*(i>m-Qs?i-m+Qs:0),h=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,Ns(s,g,h,3*y,2*y),r.setRenderTarget(s),r.render(a,Xo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,Ns(e,g,h,3*y,2*y),r.setRenderTarget(e),r.render(a,Xo)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,o),this._blurPass(s,e,i,i,o)}_blurPass(e,n,i,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;const u=this._sizeLods[r],d=3*u*(r>this._lodMax-Qs?r-this._lodMax+Qs:0),f=4*(this._cubeSize-u);Ns(n,d,f,3*u,2*u),o.setRenderTarget(n),o.render(l,Xo)}}function G2(t){const e=[],n=[];let i=t;const r=t-Qs+1+B2;for(let s=0;s<r;s++){const o=Math.pow(2,i);e.push(o);const a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,p=3,m=new Float32Array(p*f*d),y=new Float32Array(p*f*d);for(let h=0;h<d;h++){const v=h%3*2/3-1,S=h>2?0:-1,x=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];m.set(x,p*f*h);for(let E=0;E<f;E++){const A=u[E*2]*2-1,w=u[E*2+1]*2-1;h===0?Gr.set(1,w,A):h===1?Gr.set(-A,1,-w):h===2?Gr.set(-A,w,1):h===3?Gr.set(-1,w,-A):h===4?Gr.set(-A,-1,w):Gr.set(A,w,-1),Gr.toArray(y,(h*f+E)*p)}}const g=new Tn;g.setAttribute("position",new di(m,p)),g.setAttribute("outputDirection",new di(y,p)),n.push(new Li(g,null)),i>Qs&&i--}return{lodMeshes:n,sizeLods:e}}function I_(t,e,n){const i=new fi(t,e,n);return i.texture.mapping=Bu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ns(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function W2(t,e,n){return new Di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function X2(t,e,n){return new Di({name:"SphericalGaussianBlur",defines:{SAMPLES:V2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function N_(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function U_(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class PE extends fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new EE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new el(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:$i});s.uniforms.tEquirect.value=n;const o=new Li(r,s),a=n.minFilter;return n.minFilter===Qr&&(n.minFilter=sn),new jL(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function Y2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===kf||p===Bf)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const y=new PE(m.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",c),a(y.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,m=p===kf||p===Bf,y=p===hs||p===yo;if(m||y){let g=n.get(f);const h=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new D_(t)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return m&&v&&v.height>0||y&&v&&l(v)?(i===null&&(i=new D_(t)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function a(f,p){return p===kf?f.mapping=hs:p===Bf&&(f.mapping=yo),f}function l(f){let p=0;const m=6;for(let y=0;y<m;y++)f[y]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function $2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ao("WebGLRenderer: "+i+" extension not supported."),r}}}function j2(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,m=d.attributes.position;let y=0;if(m===void 0)return;if(p!==null){const v=p.array;y=p.version;for(let S=0,x=v.length;S<x;S+=3){const E=v[S+0],A=v[S+1],w=v[S+2];f.push(E,A,A,w,w,E)}}else{const v=m.array;y=m.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const E=S+0,A=S+1,w=S+2;f.push(E,A,A,w,w,E)}}const g=new(m.count>=65535?yE:_E)(f,1);g.version=y;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function q2(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function c(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*o,p),n.update(f,i,p))}function u(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let y=0;for(let g=0;g<p;g++)y+=f[g];n.update(y,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function K2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Qe("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Z2(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let P=function(){_.dispose(),i.delete(a),a.removeEventListener("dispose",P)};var p=P;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),y===!0&&(x=2),g===!0&&(x=3);let E=a.attributes.position.count*x,A=1;E>e.maxTextureSize&&(A=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const w=new Float32Array(E*A*4*d),_=new mE(w,E,A,d);_.type=Mi,_.needsUpdate=!0;const C=x*4;for(let I=0;I<d;I++){const F=h[I],L=v[I],b=S[I],D=E*A*4*I;for(let z=0;z<F.count;z++){const k=z*C;m===!0&&(r.fromBufferAttribute(F,z),w[D+k+0]=r.x,w[D+k+1]=r.y,w[D+k+2]=r.z,w[D+k+3]=0),y===!0&&(r.fromBufferAttribute(L,z),w[D+k+4]=r.x,w[D+k+5]=r.y,w[D+k+6]=r.z,w[D+k+7]=0),g===!0&&(r.fromBufferAttribute(b,z),w[D+k+8]=r.x,w[D+k+9]=r.y,w[D+k+10]=r.z,w[D+k+11]=b.itemSize===4?r.w:1)}}f={count:d,texture:_,size:new et(E,A)},i.set(a,f),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const y=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function J2(t,e,n,i,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return f}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const Q2={[QM]:"LINEAR_TONE_MAPPING",[eE]:"REINHARD_TONE_MAPPING",[tE]:"CINEON_TONE_MAPPING",[nE]:"ACES_FILMIC_TONE_MAPPING",[rE]:"AGX_TONE_MAPPING",[sE]:"NEUTRAL_TONE_MAPPING",[iE]:"CUSTOM_TONE_MAPPING"};function eI(t,e,n,i,r,s){const o=new fi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Tn;c.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const u=new XL({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Li(c,u),f=new CE(-1,1,1,-1,0,1);let p=null,m=null,y=!1,g,h=null,v=[],S=!1;this.setSize=function(x,E){o.setSize(x,E),a!==null&&a.setSize(x,E),l!==null&&l.setSize(x,E);for(let A=0;A<v.length;A++){const w=v[A];w.setSize&&w.setSize(x,E)}},this.setEffects=function(x){v=x,S=v.length>0&&v[0].isRenderPass===!0;const E=o.width,A=o.height;v.length>0&&a===null&&(a=new fi(E,A,{type:Pi,depthBuffer:!1,stencilBuffer:!1}),l=new fi(E,A,{type:Pi,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<v.length;w++){const _=v[w];_.setSize&&_.setSize(E,A)}},this.begin=function(x,E){if(y||x.toneMapping===Ci&&v.length===0)return!1;if(h=E,E!==null){const A=E.width,w=E.height;(o.width!==A||o.height!==w)&&this.setSize(A,w)}return S===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=Ci,!0},this.hasRenderPass=function(){return S},this.end=function(x,E){x.toneMapping=g,y=!0;let A=o,w=a;for(let _=0;_<v.length;_++){const C=v[_];C.enabled!==!1&&(C.render(x,w,A,E),C.needsSwap!==!1&&(A=w,w=w===a?l:a))}if(p!==x.outputColorSpace||m!==x.toneMapping){p=x.outputColorSpace,m=x.toneMapping,u.defines={},je.getTransfer(p)===rt&&(u.defines.SRGB_TRANSFER="");const _=Q2[m];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,x.setRenderTarget(h),x.render(d,f),h=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const LE=new on,Mp=new Ha(1,1),DE=new mE,IE=new pL,NE=new EE,F_=[],O_=[],k_=new Float32Array(16),B_=new Float32Array(9),V_=new Float32Array(4);function Co(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=F_[r];if(s===void 0&&(s=new Float32Array(r),F_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Vt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hu(t,e){let n=O_[e];n===void 0&&(n=new Int32Array(e),O_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function tI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function nI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),Vt(n,e)}}function iI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),Vt(n,e)}}function rI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),Vt(n,e)}}function sI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Vt(n,e)}else{if(Bt(n,i))return;V_.set(i),t.uniformMatrix2fv(this.addr,!1,V_),Vt(n,i)}}function oI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Vt(n,e)}else{if(Bt(n,i))return;B_.set(i),t.uniformMatrix3fv(this.addr,!1,B_),Vt(n,i)}}function aI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Vt(n,e)}else{if(Bt(n,i))return;k_.set(i),t.uniformMatrix4fv(this.addr,!1,k_),Vt(n,i)}}function lI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function cI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),Vt(n,e)}}function uI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),Vt(n,e)}}function fI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),Vt(n,e)}}function dI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),Vt(n,e)}}function pI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),Vt(n,e)}}function mI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),Vt(n,e)}}function gI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Mp.compareFunction=n.isReversedDepthBuffer()?sg:rg,s=Mp):s=LE,n.setTexture2D(e||s,r)}function vI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||IE,r)}function _I(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||NE,r)}function yI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||DE,r)}function xI(t){switch(t){case 5126:return tI;case 35664:return nI;case 35665:return iI;case 35666:return rI;case 35674:return sI;case 35675:return oI;case 35676:return aI;case 5124:case 35670:return lI;case 35667:case 35671:return cI;case 35668:case 35672:return uI;case 35669:case 35673:return fI;case 5125:return dI;case 36294:return hI;case 36295:return pI;case 36296:return mI;case 35678:case 36198:case 36298:case 36306:case 35682:return gI;case 35679:case 36299:case 36307:return vI;case 35680:case 36300:case 36308:case 36293:return _I;case 36289:case 36303:case 36311:case 36292:return yI}}function SI(t,e){t.uniform1fv(this.addr,e)}function MI(t,e){const n=Co(e,this.size,2);t.uniform2fv(this.addr,n)}function EI(t,e){const n=Co(e,this.size,3);t.uniform3fv(this.addr,n)}function TI(t,e){const n=Co(e,this.size,4);t.uniform4fv(this.addr,n)}function wI(t,e){const n=Co(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function AI(t,e){const n=Co(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function CI(t,e){const n=Co(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bI(t,e){t.uniform1iv(this.addr,e)}function RI(t,e){t.uniform2iv(this.addr,e)}function PI(t,e){t.uniform3iv(this.addr,e)}function LI(t,e){t.uniform4iv(this.addr,e)}function DI(t,e){t.uniform1uiv(this.addr,e)}function II(t,e){t.uniform2uiv(this.addr,e)}function NI(t,e){t.uniform3uiv(this.addr,e)}function UI(t,e){t.uniform4uiv(this.addr,e)}function FI(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Mp:o=LE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function OI(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||IE,s[o])}function kI(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||NE,s[o])}function BI(t,e,n){const i=this.cache,r=e.length,s=Hu(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),Vt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||DE,s[o])}function VI(t){switch(t){case 5126:return SI;case 35664:return MI;case 35665:return EI;case 35666:return TI;case 35674:return wI;case 35675:return AI;case 35676:return CI;case 5124:case 35670:return bI;case 35667:case 35671:return RI;case 35668:case 35672:return PI;case 35669:case 35673:return LI;case 5125:return DI;case 36294:return II;case 36295:return NI;case 36296:return UI;case 35678:case 36198:case 36298:case 36306:case 35682:return FI;case 35679:case 36299:case 36307:return OI;case 35680:case 36300:case 36308:case 36293:return kI;case 36289:case 36303:case 36311:case 36292:return BI}}class zI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xI(n.type)}}class HI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=VI(n.type)}}class GI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function z_(t,e){t.seq.push(e),t.map[e.id]=e}function WI(t,e,n){const i=t.name,r=i.length;for(gd.lastIndex=0;;){const s=gd.exec(i),o=gd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){z_(n,c===void 0?new zI(a,t,e):new HI(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new GI(a),z_(n,d)),n=d}}}class Tc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);WI(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function H_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const XI=37297;let YI=0;function $I(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const G_=new ke;function jI(t){je._getMatrix(G_,je.workingColorSpace,t);const e=`mat3( ${G_.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case uu:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function W_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+$I(t.getShaderSource(e),a)}else return s}function qI(t,e){const n=jI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const KI={[QM]:"Linear",[eE]:"Reinhard",[tE]:"Cineon",[nE]:"ACESFilmic",[rE]:"AgX",[sE]:"Neutral",[iE]:"Custom"};function ZI(t,e){const n=KI[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Kl=new Y;function JI(){je.getLuminanceCoefficients(Kl);const t=Kl.x.toFixed(4),e=Kl.y.toFixed(4),n=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QI(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function eN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function tN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Qo(t){return t!==""}function X_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(t){return t.replace(nN,rN)}const iN=new Map;function rN(t,e){let n=He[e];if(n===void 0){const i=iN.get(e);if(i!==void 0)n=He[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ep(n)}const sN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $_(t){return t.replace(sN,oN)}function oN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function j_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const aN={[yc]:"SHADOWMAP_TYPE_PCF",[Zo]:"SHADOWMAP_TYPE_VSM"};function lN(t){return aN[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cN={[hs]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE",[Bu]:"ENVMAP_TYPE_CUBE_UV"};function uN(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":cN[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const fN={[yo]:"ENVMAP_MODE_REFRACTION"};function dN(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":fN[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hN={[JM]:"ENVMAP_BLENDING_MULTIPLY",[XP]:"ENVMAP_BLENDING_MIX",[YP]:"ENVMAP_BLENDING_ADD"};function pN(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":hN[t.combine]||"ENVMAP_BLENDING_NONE"}function mN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function gN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=lN(n),c=uN(n),u=dN(n),d=pN(n),f=mN(n),p=QI(n),m=eN(s),y=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Qo).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(Qo).join(`
`),h.length>0&&(h+=`
`)):(g=[j_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),h=[j_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?He.tonemapping_pars_fragment:"",n.toneMapping!==Ci?ZI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,qI("linearToOutputTexel",n.outputColorSpace),JI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qo).join(`
`)),o=Ep(o),o=X_(o,n),o=Y_(o,n),a=Ep(a),a=X_(a,n),a=Y_(a,n),o=$_(o),a=$_(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===s_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===s_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=v+g+o,x=v+h+a,E=H_(r,r.VERTEX_SHADER,S),A=H_(r,r.FRAGMENT_SHADER,x);r.attachShader(y,E),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(I){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y)||"",L=r.getShaderInfoLog(E)||"",b=r.getShaderInfoLog(A)||"",D=F.trim(),z=L.trim(),k=b.trim();let N=!0,O=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,E,A);else{const H=W_(r,E,"vertex"),U=W_(r,A,"fragment");Qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+H+`
`+U)}else D!==""?Oe("WebGLProgram: Program Info Log:",D):(z===""||k==="")&&(O=!1);O&&(I.diagnostics={runnable:N,programLog:D,vertexShader:{log:z,prefix:g},fragmentShader:{log:k,prefix:h}})}r.deleteShader(E),r.deleteShader(A),_=new Tc(r,y),C=tN(r,y)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let C;this.getAttributes=function(){return C===void 0&&w(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(y,XI)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=YI++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=A,this}let vN=0;class _N{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yN(e),n.set(e,i)),i}}class yN{constructor(e){this.id=vN++,this.code=e,this.usedTimes=0}}function xN(t){return t===ps||t===au||t===lu}function SN(t,e,n,i,r,s){const o=new gE,a=new _N,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,C,P,I,F,L){const b=I.fog,D=F.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=e.get(_.envMap||z,k),O=N&&N.mapping===Bu?N.image.height:null,H=p[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Oe("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const U=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=U!==void 0?U.length:0;let re=0;D.morphAttributes.position!==void 0&&(re=1),D.morphAttributes.normal!==void 0&&(re=2),D.morphAttributes.color!==void 0&&(re=3);let ae,Ae,Ne,Z;if(H){const ft=xi[H];ae=ft.vertexShader,Ae=ft.fragmentShader}else{ae=_.vertexShader,Ae=_.fragmentShader;const ft=a.getVertexShaderStage(_),tt=a.getFragmentShaderStage(_);a.update(_,ft,tt),Ne=ft.id,Z=tt.id}const te=t.getRenderTarget(),Se=t.state.buffers.depth.getReversed(),Fe=F.isInstancedMesh===!0,ue=F.isBatchedMesh===!0,Be=!!_.map,Nt=!!_.matcap,Ge=!!N,Je=!!_.aoMap,ut=!!_.lightMap,$e=!!_.bumpMap&&_.wireframe===!1,vt=!!_.normalMap,zt=!!_.displacementMap,gn=!!_.emissiveMap,yt=!!_.metalnessMap,Rt=!!_.roughnessMap,G=_.anisotropy>0,Zt=_.clearcoat>0,it=_.dispersion>0,R=_.retroreflectivity>0,M=_.iridescence>0,X=_.sheen>0,q=_.transmission>0,Q=G&&!!_.anisotropyMap,le=Zt&&!!_.clearcoatMap,fe=Zt&&!!_.clearcoatNormalMap,ee=Zt&&!!_.clearcoatRoughnessMap,ie=M&&!!_.iridescenceMap,de=M&&!!_.iridescenceThicknessMap,Le=X&&!!_.sheenColorMap,ge=X&&!!_.sheenRoughnessMap,he=!!_.specularMap,De=!!_.specularColorMap,Ue=!!_.specularIntensityMap,Ve=q&&!!_.transmissionMap,V=q&&!!_.thicknessMap,pe=!!_.gradientMap,ne=!!_.alphaMap,me=_.alphaTest>0,xe=!!_.alphaHash,se=!!_.extensions;let Ie=Ci;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ie=t.toneMapping);const Re={shaderID:H,shaderType:_.type,shaderName:_.name,vertexShader:ae,fragmentShader:Ae,defines:_.defines,customVertexShaderID:Ne,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:ue,batchingColor:ue&&F._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&F.instanceColor!==null,instancingMorph:Fe&&F.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Be,matcap:Nt,envMap:Ge,envMapMode:Ge&&N.mapping,envMapCubeUVHeight:O,aoMap:Je,lightMap:ut,bumpMap:$e,normalMap:vt,displacementMap:zt,emissiveMap:gn,normalMapObjectSpace:vt&&_.normalMapType===qP,normalMapTangentSpace:vt&&_.normalMapType===r_,packedNormalMap:vt&&_.normalMapType===r_&&xN(_.normalMap.format),metalnessMap:yt,roughnessMap:Rt,anisotropy:G,anisotropyMap:Q,clearcoat:Zt,clearcoatMap:le,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:it,retroreflection:R,iridescence:M,iridescenceMap:ie,iridescenceThicknessMap:de,sheen:X,sheenColorMap:Le,sheenRoughnessMap:ge,specularMap:he,specularColorMap:De,specularIntensityMap:Ue,transmission:q,transmissionMap:Ve,thicknessMap:V,gradientMap:pe,opaque:_.transparent===!1&&_.blending===fa&&_.alphaToCoverage===!1,alphaMap:ne,alphaTest:me,alphaHash:xe,combine:_.combine,mapUv:Be&&m(_.map.channel),aoMapUv:Je&&m(_.aoMap.channel),lightMapUv:ut&&m(_.lightMap.channel),bumpMapUv:$e&&m(_.bumpMap.channel),normalMapUv:vt&&m(_.normalMap.channel),displacementMapUv:zt&&m(_.displacementMap.channel),emissiveMapUv:gn&&m(_.emissiveMap.channel),metalnessMapUv:yt&&m(_.metalnessMap.channel),roughnessMapUv:Rt&&m(_.roughnessMap.channel),anisotropyMapUv:Q&&m(_.anisotropyMap.channel),clearcoatMapUv:le&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:ge&&m(_.sheenRoughnessMap.channel),specularMapUv:he&&m(_.specularMap.channel),specularColorMapUv:De&&m(_.specularColorMap.channel),specularIntensityMapUv:Ue&&m(_.specularIntensityMap.channel),transmissionMapUv:Ve&&m(_.transmissionMap.channel),thicknessMapUv:V&&m(_.thicknessMap.channel),alphaMapUv:ne&&m(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(vt||G),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(Be||ne),fog:!!b,useFog:_.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&vt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:re,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Be&&_.map.isVideoTexture===!0&&je.getTransfer(_.map.colorSpace)===rt,decodeVideoTextureEmissive:gn&&_.emissiveMap.isVideoTexture===!0&&je.getTransfer(_.emissiveMap.colorSpace)===rt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hi,flipSided:_.side===En,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Re.vertexUv1s=l.has(1),Re.vertexUv2s=l.has(2),Re.vertexUv3s=l.has(3),l.clear(),Re}function g(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)C.push(P),C.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(h(C,_),v(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function h(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function v(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){const C=p[_.type];let P;if(C){const I=xi[C];P=HL.clone(I.uniforms)}else P=_.uniforms;return P}function x(_,C){let P=u.get(C);return P!==void 0?++P.usedTimes:(P=new gN(t,C,_,r),c.push(P),u.set(C,P)),P}function E(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function w(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:S,acquireProgram:x,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:w}}function MN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function EN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function q_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function K_(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,m,y,g,h){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:m,materialVariant:o(f),groupOrder:y,renderOrder:f.renderOrder,z:g,group:h},t[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=m,v.materialVariant=o(f),v.groupOrder=y,v.renderOrder=f.renderOrder,v.z=g,v.group=h),e++,v}function l(f,p,m,y,g,h,v){v.reversedDepth===!0&&(g=-g);const S=a(f,p,m,y,g,h);m.transmission>0?i.push(S):m.transparent===!0?r.push(S):n.push(S)}function c(f,p,m,y,g,h){const v=a(f,p,m,y,g,h);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function u(f,p){n.length>1&&n.sort(f||EN),i.length>1&&i.sort(p||q_),r.length>1&&r.sort(p||q_)}function d(){for(let f=e,p=t.length;f<p;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function TN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new K_,t.set(i,[o])):r>=s.length?(o=new K_,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function wN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new Y,color:new qe};break;case"SpotLight":n={position:new Y,direction:new Y,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function AN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let CN=0;function bN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RN(t){const e=new wN,n=AN(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new Et,o=new Et;function a(c){let u=0,d=0,f=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let p=0,m=0,y=0,g=0,h=0,v=0,S=0,x=0,E=0,A=0,w=0,_=0,C=0,P=0;c.sort(bN);for(let F=0,L=c.length;F<L;F++){const b=c[F],D=b.color,z=b.intensity,k=b.distance;let N=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===ps?N=b.shadow.map.texture:N=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)u+=D.r*z,d+=D.g*z,f+=D.b*z;else if(b.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(b.sh.coefficients[O],z);P++}else if(b.isSunLight){const O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const H=b.shadow,U=n.get(b);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[m]=U,i.sunShadowMap[m]=N;const J=H.getViewportCount();for(let re=0;re<J;re++)i.sunShadowMatrix[y+re]=H.getMatrix(re),i.sunShadowCascade[y+re]=H._cascadeData[re];y+=J,m++}i.sun[p]=O,p++}else if(b.isDirectionalLight){const O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const H=b.shadow,U=n.get(b);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.directionalShadow[g]=U,i.directionalShadowMap[g]=N,i.directionalShadowMatrix[g]=b.shadow.matrix,E++}i.directional[g]=O,g++}else if(b.isSpotLight){const O=e.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(D).multiplyScalar(z),O.distance=k,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,i.spot[v]=O;const H=b.shadow;if(b.map&&(i.spotLightMap[_]=b.map,_++,H.updateMatrices(b),b.castShadow&&C++),i.spotLightMatrix[v]=H.matrix,b.castShadow){const U=n.get(b);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.spotShadow[v]=U,i.spotShadowMap[v]=N,w++}v++}else if(b.isRectAreaLight){const O=e.get(b);O.color.copy(D).multiplyScalar(z),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),i.rectArea[S]=O,S++}else if(b.isPointLight){const O=e.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),O.distance=b.distance,O.decay=b.decay,b.castShadow){const H=b.shadow,U=n.get(b);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,U.shadowCameraNear=H.camera.near,U.shadowCameraFar=H.camera.far,i.pointShadow[h]=U,i.pointShadowMap[h]=N,i.pointShadowMatrix[h]=b.shadow.matrix,A++}i.point[h]=O,h++}else if(b.isHemisphereLight){const O=e.get(b);O.skyColor.copy(b.color).multiplyScalar(z),O.groundColor.copy(b.groundColor).multiplyScalar(z),i.hemi[x]=O,x++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const I=i.hash;(I.sunLength!==p||I.directionalLength!==g||I.pointLength!==h||I.spotLength!==v||I.rectAreaLength!==S||I.hemiLength!==x||I.numSunShadows!==m||I.numDirectionalShadows!==E||I.numPointShadows!==A||I.numSpotShadows!==w||I.numSpotMaps!==_||I.numLightProbes!==P)&&(i.sun.length=p,i.directional.length=g,i.spot.length=v,i.rectArea.length=S,i.point.length=h,i.hemi.length=x,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+_-C,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,I.sunLength=p,I.directionalLength=g,I.pointLength=h,I.spotLength=v,I.rectAreaLength=S,I.hemiLength=x,I.numSunShadows=m,I.numDirectionalShadows=E,I.numPointShadows=A,I.numSpotShadows=w,I.numSpotMaps=_,I.numLightProbes=P,i.version=CN++)}function l(c,u){let d=0,f=0,p=0,m=0,y=0,g=0;const h=u.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const x=c[v];if(x.isSunLight){const E=i.sun[d];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(h),d++}else if(x.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),f++}else if(x.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),m++}else if(x.isRectAreaLight){const E=i.rectArea[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),o.identity(),s.copy(x.matrixWorld),s.premultiply(h),o.extractRotation(s),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),y++}else if(x.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(h),g++}}}return{setup:a,setupView:l,state:i}}function Z_(t){const e=new RN(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function u(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function PN(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Z_(t),e.set(r,[a])):s>=o.length?(a=new Z_(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const LN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IN=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],NN=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],J_=new Et,Yo=new Y,vd=new Y;function UN(t,e,n){let i=new xE;const r=new et,s=new et,o=new At,a=new YL,l=new $L,c={},u=n.maxTextureSize,d={[ds]:En,[En]:ds,[Hi]:Hi},f=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:LN,fragmentShader:DN}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Tn;m.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Li(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let h=this.type;this.render=function(A,w,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===AP&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yc);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),F=t.state;F.setBlending($i),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const L=h!==this.type;L&&w.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(D=>D.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,D=A.length;b<D;b++){const z=A[b],k=z.shadow;if(k===void 0){Oe("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const N=k.getFrameExtents();r.multiply(N),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/N.x),r.x=s.x*N.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/N.y),r.y=s.y*N.y,k.mapSize.y=s.y));const O=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=O,k.map===null||L===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Zo){if(z.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new fi(r.x,r.y,{format:ps,type:Pi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new Ha(r.x,r.y,Mi),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=er,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=$t,k.map.depthTexture.magFilter=$t}else z.isPointLight?(k.map=new PE(r.x),k.map.depthTexture=new UL(r.x,Ri)):(k.map=new fi(r.x,r.y),k.map.depthTexture=new Ha(r.x,r.y,Ri)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=er,this.type===yc?(k.map.depthTexture.compareFunction=O?sg:rg,k.map.depthTexture.minFilter=sn,k.map.depthTexture.magFilter=sn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=$t,k.map.depthTexture.magFilter=$t);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==r.x||k.map.height!==r.y)&&k.map.setSize(r.x,r.y);const H=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();z.isPointLight!==!0&&k.updateMatrices(z,_);for(let U=0;U<H;U++){const J=k.getCamera(U);if(z.isPointLight){const re=k.camera,ae=k.matrix,Ae=z.distance||re.far;Ae!==re.far&&(re.far=Ae,re.updateProjectionMatrix()),Yo.setFromMatrixPosition(z.matrixWorld),re.position.copy(Yo),vd.copy(re.position),vd.add(IN[U]),re.up.copy(NN[U]),re.lookAt(vd),re.updateMatrixWorld(),ae.makeTranslation(-Yo.x,-Yo.y,-Yo.z),J_.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),k._frustum.setFromProjectionMatrix(J_,re.coordinateSystem,re.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,U),t.clear();else{U===0&&(t.setRenderTarget(k.map),t.clear());const re=k.getViewport(U);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),F.viewport(o)}i=k.getFrustum(U),x(w,_,J,z,this.type)}k.isPointLightShadow!==!0&&this.type===Zo&&v(k,_),k.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(C,P,I)};function v(A,w){const _=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new fi(r.x,r.y,{format:ps,type:Pi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,_,f,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,_,p,y,null)}function S(A,w,_,C){let P=null;const I=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const F=P.uuid,L=w.uuid;let b=c[F];b===void 0&&(b={},c[F]=b);let D=b[L];D===void 0&&(D=P.clone(),b[L]=D,w.addEventListener("dispose",E)),P=D}if(P.visible=w.visible,P.wireframe=w.wireframe,C===Zo?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const F=t.properties.get(P);F.light=_}return P}function x(A,w,_,C,P){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===Zo)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const L=e.update(A),b=A.material;if(Array.isArray(b)){const D=L.groups;for(let z=0,k=D.length;z<k;z++){const N=D[z],O=b[N.materialIndex];if(O&&O.visible){const H=S(A,O,C,P);A.onBeforeShadow(t,A,w,_,L,H,N),t.renderBufferDirect(_,null,L,H,A,N),A.onAfterShadow(t,A,w,_,L,H,N)}}}else if(b.visible){const D=S(A,b,C,P);A.onBeforeShadow(t,A,w,_,L,D,null),t.renderBufferDirect(_,null,L,D,A,null),A.onAfterShadow(t,A,w,_,L,D,null)}}const F=A.children;for(let L=0,b=F.length;L<b;L++)x(F[L],w,_,C,P)}function E(A){A.target.removeEventListener("dispose",E);for(const _ in c){const C=c[_],P=A.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function FN(t,e){function n(){let V=!1;const pe=new At;let ne=null;const me=new At(0,0,0,0);return{setMask:function(xe){ne!==xe&&!V&&(t.colorMask(xe,xe,xe,xe),ne=xe)},setLocked:function(xe){V=xe},setClear:function(xe,se,Ie,Re,ft){ft===!0&&(xe*=Re,se*=Re,Ie*=Re),pe.set(xe,se,Ie,Re),me.equals(pe)===!1&&(t.clearColor(xe,se,Ie,Re),me.copy(pe))},reset:function(){V=!1,ne=null,me.set(-1,0,0,0)}}}function i(){let V=!1,pe=!1,ne=null,me=null,xe=null;return{setReversed:function(se){if(pe!==se){const Ie=e.get("EXT_clip_control");se?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),pe=se;const Re=xe;xe=null,this.setClear(Re)}},getReversed:function(){return pe},setTest:function(se){se?te(t.DEPTH_TEST):Se(t.DEPTH_TEST)},setMask:function(se){ne!==se&&!V&&(t.depthMask(se),ne=se)},setFunc:function(se){if(pe&&(se=aL[se]),me!==se){switch(se){case Uh:t.depthFunc(t.NEVER);break;case Fh:t.depthFunc(t.ALWAYS);break;case Oh:t.depthFunc(t.LESS);break;case Ba:t.depthFunc(t.LEQUAL);break;case kh:t.depthFunc(t.EQUAL);break;case Bh:t.depthFunc(t.GEQUAL);break;case Vh:t.depthFunc(t.GREATER);break;case zh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=se}},setLocked:function(se){V=se},setClear:function(se){xe!==se&&(xe=se,pe&&(se=1-se),t.clearDepth(se))},reset:function(){V=!1,ne=null,me=null,xe=null,pe=!1}}}function r(){let V=!1,pe=null,ne=null,me=null,xe=null,se=null,Ie=null,Re=null,ft=null;return{setTest:function(tt){V||(tt?te(t.STENCIL_TEST):Se(t.STENCIL_TEST))},setMask:function(tt){pe!==tt&&!V&&(t.stencilMask(tt),pe=tt)},setFunc:function(tt,jn,pi){(ne!==tt||me!==jn||xe!==pi)&&(t.stencilFunc(tt,jn,pi),ne=tt,me=jn,xe=pi)},setOp:function(tt,jn,pi){(se!==tt||Ie!==jn||Re!==pi)&&(t.stencilOp(tt,jn,pi),se=tt,Ie=jn,Re=pi)},setLocked:function(tt){V=tt},setClear:function(tt){ft!==tt&&(t.clearStencil(tt),ft=tt)},reset:function(){V=!1,pe=null,ne=null,me=null,xe=null,se=null,Ie=null,Re=null,ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f={},p=new WeakMap,m=[],y=null,g=!1,h=null,v=null,S=null,x=null,E=null,A=null,w=null,_=new qe(0,0,0),C=0,P=!1,I=null,F=null,L=null,b=null,D=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,N=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(O)[1]),k=N>=1):O.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),k=N>=2);let H=null,U={};const J=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),ae=new At().fromArray(J),Ae=new At().fromArray(re);function Ne(V,pe,ne,me){const xe=new Uint8Array(4),se=t.createTexture();t.bindTexture(V,se),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<ne;Ie++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(pe+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return se}const Z={};Z[t.TEXTURE_2D]=Ne(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=Ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=Ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=Ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(t.DEPTH_TEST),o.setFunc(Ba),$e(!1),vt(t_),te(t.CULL_FACE),Je($i);function te(V){u[V]!==!0&&(t.enable(V),u[V]=!0)}function Se(V){u[V]!==!1&&(t.disable(V),u[V]=!1)}function Fe(V,pe){return f[V]!==pe?(t.bindFramebuffer(V,pe),f[V]=pe,V===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),V===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function ue(V,pe){let ne=m,me=!1;if(V){ne=p.get(pe),ne===void 0&&(ne=[],p.set(pe,ne));const xe=V.textures;if(ne.length!==xe.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Ie=xe.length;se<Ie;se++)ne[se]=t.COLOR_ATTACHMENT0+se;ne.length=xe.length,me=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,me=!0);me&&t.drawBuffers(ne)}function Be(V){return y!==V?(t.useProgram(V),y=V,!0):!1}const Nt={[Us]:t.FUNC_ADD,[bP]:t.FUNC_SUBTRACT,[RP]:t.FUNC_REVERSE_SUBTRACT};Nt[PP]=t.MIN,Nt[LP]=t.MAX;const Ge={[DP]:t.ZERO,[IP]:t.ONE,[NP]:t.SRC_COLOR,[KM]:t.SRC_ALPHA,[VP]:t.SRC_ALPHA_SATURATE,[kP]:t.DST_COLOR,[FP]:t.DST_ALPHA,[UP]:t.ONE_MINUS_SRC_COLOR,[ZM]:t.ONE_MINUS_SRC_ALPHA,[BP]:t.ONE_MINUS_DST_COLOR,[OP]:t.ONE_MINUS_DST_ALPHA,[zP]:t.CONSTANT_COLOR,[HP]:t.ONE_MINUS_CONSTANT_COLOR,[GP]:t.CONSTANT_ALPHA,[WP]:t.ONE_MINUS_CONSTANT_ALPHA};function Je(V,pe,ne,me,xe,se,Ie,Re,ft,tt){if(V===$i){g===!0&&(Se(t.BLEND),g=!1);return}if(g===!1&&(te(t.BLEND),g=!0),V!==CP){if(V!==h||tt!==P){if((v!==Us||E!==Us)&&(t.blendEquation(t.FUNC_ADD),v=Us,E=Us),tt)switch(V){case fa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ou:t.blendFunc(t.ONE,t.ONE);break;case n_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case i_:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",V);break}else switch(V){case fa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ou:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case n_:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case i_:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",V);break}S=null,x=null,A=null,w=null,_.set(0,0,0),C=0,h=V,P=tt}return}xe=xe||pe,se=se||ne,Ie=Ie||me,(pe!==v||xe!==E)&&(t.blendEquationSeparate(Nt[pe],Nt[xe]),v=pe,E=xe),(ne!==S||me!==x||se!==A||Ie!==w)&&(t.blendFuncSeparate(Ge[ne],Ge[me],Ge[se],Ge[Ie]),S=ne,x=me,A=se,w=Ie),(Re.equals(_)===!1||ft!==C)&&(t.blendColor(Re.r,Re.g,Re.b,ft),_.copy(Re),C=ft),h=V,P=!1}function ut(V,pe){V.side===Hi?Se(t.CULL_FACE):te(t.CULL_FACE);let ne=V.side===En;pe&&(ne=!ne),$e(ne),V.blending===fa&&V.transparent===!1?Je($i):Je(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const me=V.stencilWrite;a.setTest(me),me&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),gn(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):Se(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(V){I!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),I=V)}function vt(V){V!==TP?(te(t.CULL_FACE),V!==F&&(V===t_?t.cullFace(t.BACK):V===wP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Se(t.CULL_FACE),F=V}function zt(V){V!==L&&(k&&t.lineWidth(V),L=V)}function gn(V,pe,ne){V?(te(t.POLYGON_OFFSET_FILL),(b!==pe||D!==ne)&&(b=pe,D=ne,o.getReversed()&&(pe=-pe),t.polygonOffset(pe,ne))):Se(t.POLYGON_OFFSET_FILL)}function yt(V){V?te(t.SCISSOR_TEST):Se(t.SCISSOR_TEST)}function Rt(V){V===void 0&&(V=t.TEXTURE0+z-1),H!==V&&(t.activeTexture(V),H=V)}function G(V,pe,ne){ne===void 0&&(H===null?ne=t.TEXTURE0+z-1:ne=H);let me=U[ne];me===void 0&&(me={type:void 0,texture:void 0},U[ne]=me),(me.type!==V||me.texture!==pe)&&(H!==ne&&(t.activeTexture(ne),H=ne),t.bindTexture(V,pe||Z[V]),me.type=V,me.texture=pe)}function Zt(){const V=U[H];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function it(){try{t.compressedTexImage2D(...arguments)}catch(V){Qe("WebGLState:",V)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(V){Qe("WebGLState:",V)}}function M(){try{t.texSubImage2D(...arguments)}catch(V){Qe("WebGLState:",V)}}function X(){try{t.texSubImage3D(...arguments)}catch(V){Qe("WebGLState:",V)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(V){Qe("WebGLState:",V)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(V){Qe("WebGLState:",V)}}function le(){try{t.texStorage2D(...arguments)}catch(V){Qe("WebGLState:",V)}}function fe(){try{t.texStorage3D(...arguments)}catch(V){Qe("WebGLState:",V)}}function ee(){try{t.texImage2D(...arguments)}catch(V){Qe("WebGLState:",V)}}function ie(){try{t.texImage3D(...arguments)}catch(V){Qe("WebGLState:",V)}}function de(V){return d[V]!==void 0?d[V]:t.getParameter(V)}function Le(V,pe){d[V]!==pe&&(t.pixelStorei(V,pe),d[V]=pe)}function ge(V){ae.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),ae.copy(V))}function he(V){Ae.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),Ae.copy(V))}function De(V,pe){let ne=c.get(pe);ne===void 0&&(ne=new WeakMap,c.set(pe,ne));let me=ne.get(V);me===void 0&&(me=t.getUniformBlockIndex(pe,V.name),ne.set(V,me))}function Ue(V,pe){const me=c.get(pe).get(V);l.get(pe)!==me&&(t.uniformBlockBinding(pe,me,V.__bindingPointIndex),l.set(pe,me))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},H=null,U={},f={},p=new WeakMap,m=[],y=null,g=!1,h=null,v=null,S=null,x=null,E=null,A=null,w=null,_=new qe(0,0,0),C=0,P=!1,I=null,F=null,L=null,b=null,D=null,ae.set(0,0,t.canvas.width,t.canvas.height),Ae.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:Se,bindFramebuffer:Fe,drawBuffers:ue,useProgram:Be,setBlending:Je,setMaterial:ut,setFlipSided:$e,setCullFace:vt,setLineWidth:zt,setPolygonOffset:gn,setScissorTest:yt,activeTexture:Rt,bindTexture:G,unbindTexture:Zt,compressedTexImage2D:it,compressedTexImage3D:R,texImage2D:ee,texImage3D:ie,pixelStorei:Le,getParameter:de,updateUBOMapping:De,uniformBlockBinding:Ue,texStorage2D:le,texStorage3D:fe,texSubImage2D:M,texSubImage3D:X,compressedTexSubImage2D:q,compressedTexSubImage3D:Q,scissor:ge,viewport:he,reset:Ve}}function ON(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap,d=new Set;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,M){return m?new OffscreenCanvas(R,M):du("canvas")}function g(R,M,X){let q=1;const Q=it(R);if((Q.width>X||Q.height>X)&&(q=X/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const le=Math.floor(q*Q.width),fe=Math.floor(q*Q.height);f===void 0&&(f=y(le,fe));const ee=M?y(le,fe):f;return ee.width=le,ee.height=fe,ee.getContext("2d").drawImage(R,0,0,le,fe),Oe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+le+"x"+fe+")."),ee}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function h(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,M,X,q,Q,le=!1){if(R!==null){if(t[R]!==void 0)return t[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;q&&(fe=e.get("EXT_texture_norm16"),fe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=M;if(M===t.RED&&(X===t.FLOAT&&(ee=t.R32F),X===t.HALF_FLOAT&&(ee=t.R16F),X===t.UNSIGNED_BYTE&&(ee=t.R8),X===t.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),X===t.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),M===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.R8UI),X===t.UNSIGNED_SHORT&&(ee=t.R16UI),X===t.UNSIGNED_INT&&(ee=t.R32UI),X===t.BYTE&&(ee=t.R8I),X===t.SHORT&&(ee=t.R16I),X===t.INT&&(ee=t.R32I)),M===t.RG&&(X===t.FLOAT&&(ee=t.RG32F),X===t.HALF_FLOAT&&(ee=t.RG16F),X===t.UNSIGNED_BYTE&&(ee=t.RG8),X===t.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),X===t.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RG8UI),X===t.UNSIGNED_SHORT&&(ee=t.RG16UI),X===t.UNSIGNED_INT&&(ee=t.RG32UI),X===t.BYTE&&(ee=t.RG8I),X===t.SHORT&&(ee=t.RG16I),X===t.INT&&(ee=t.RG32I)),M===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),X===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),X===t.UNSIGNED_INT&&(ee=t.RGB32UI),X===t.BYTE&&(ee=t.RGB8I),X===t.SHORT&&(ee=t.RGB16I),X===t.INT&&(ee=t.RGB32I)),M===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),X===t.UNSIGNED_INT&&(ee=t.RGBA32UI),X===t.BYTE&&(ee=t.RGBA8I),X===t.SHORT&&(ee=t.RGBA16I),X===t.INT&&(ee=t.RGBA32I)),M===t.RGB&&(X===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),X===t.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),X===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),X===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),M===t.RGBA){const ie=le?uu:je.getTransfer(Q);X===t.FLOAT&&(ee=t.RGBA32F),X===t.HALF_FLOAT&&(ee=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ee=ie===rt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),X===t.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),X===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(R,M){let X;return R?M===null||M===Ri||M===za?X=t.DEPTH24_STENCIL8:M===Mi?X=t.DEPTH32F_STENCIL8:M===Va&&(X=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ri||M===za?X=t.DEPTH_COMPONENT24:M===Mi?X=t.DEPTH_COMPONENT32F:M===Va&&(X=t.DEPTH_COMPONENT16),X}function A(R,M){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==$t&&R.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){const M=R.target;M.removeEventListener("dispose",w),C(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function _(R){const M=R.target;M.removeEventListener("dispose",_),I(M)}function C(R){const M=i.get(R);if(M.__webglInit===void 0)return;const X=R.source,q=p.get(X);if(q){const Q=q[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(R),Object.keys(q).length===0&&p.delete(X)}i.remove(R)}function P(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const X=R.source,q=p.get(X);delete q[M.__cacheKey],o.memory.textures--}function I(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let Q=0;Q<M.__webglFramebuffer[q].length;Q++)t.deleteFramebuffer(M.__webglFramebuffer[q][Q]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const X=R.textures;for(let q=0,Q=X.length;q<Q;q++){const le=i.get(X[q]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),i.remove(X[q])}i.remove(R)}let F=0;function L(){F=0}function b(){return F}function D(R){F=R}function z(){const R=F;return R>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),F+=1,R}function k(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function N(R,M){const X=i.get(R);if(R.isVideoTexture&&G(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&X.__version!==R.version){const q=R.image;if(q===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(X,R,M);return}}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+M)}function O(R,M){const X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){Se(X,R,M);return}else R.isExternalTexture&&(X.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+M)}function H(R,M){const X=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){Se(X,R,M);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+M)}function U(R,M){const X=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&X.__version!==R.version){Fe(X,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+M)}const J={[Hh]:t.REPEAT,[Xi]:t.CLAMP_TO_EDGE,[Gh]:t.MIRRORED_REPEAT},re={[$t]:t.NEAREST,[$P]:t.NEAREST_MIPMAP_NEAREST,[wl]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Vf]:t.LINEAR_MIPMAP_NEAREST,[Qr]:t.LINEAR_MIPMAP_LINEAR},ae={[ZP]:t.NEVER,[nL]:t.ALWAYS,[JP]:t.LESS,[rg]:t.LEQUAL,[QP]:t.EQUAL,[sg]:t.GEQUAL,[eL]:t.GREATER,[tL]:t.NOTEQUAL};function Ae(R,M){if(M.type===Mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===sn||M.magFilter===Vf||M.magFilter===wl||M.magFilter===Qr||M.minFilter===sn||M.minFilter===Vf||M.minFilter===wl||M.minFilter===Qr)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,J[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,J[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,J[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,re[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ae[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$t||M.minFilter!==wl&&M.minFilter!==Qr||M.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ne(R,M){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));const q=M.source;let Q=p.get(q);Q===void 0&&(Q={},p.set(q,Q));const le=k(M);if(le!==R.__cacheKey){Q[le]===void 0&&(Q[le]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,X=!0),Q[le].usedTimes++;const fe=Q[R.__cacheKey];fe!==void 0&&(Q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&P(M)),R.__cacheKey=le,R.__webglTexture=Q[le].texture}return X}function Z(R,M,X){return Math.floor(Math.floor(R/X)/M)}function te(R,M,X,q){const le=R.updateRanges;if(le.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,X,q,M.data);else{le.sort((Le,ge)=>Le.start-ge.start);let fe=0;for(let Le=1;Le<le.length;Le++){const ge=le[fe],he=le[Le],De=ge.start+ge.count,Ue=Z(he.start,M.width,4),Ve=Z(ge.start,M.width,4);he.start<=De+1&&Ue===Ve&&Z(he.start+he.count-1,M.width,4)===Ue?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++fe,le[fe]=he)}le.length=fe+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),de=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Le=0,ge=le.length;Le<ge;Le++){const he=le[Le],De=Math.floor(he.start/4),Ue=Math.ceil(he.count/4),Ve=De%M.width,V=Math.floor(De/M.width),pe=Ue,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,V),n.texSubImage2D(t.TEXTURE_2D,0,Ve,V,pe,ne,X,q,M.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,de)}}function Se(R,M,X){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const Q=Ne(R,M),le=M.source;n.bindTexture(q,R.__webglTexture,t.TEXTURE0+X);const fe=i.get(le);if(le.version!==fe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+X),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const ne=je.getPrimaries(je.workingColorSpace),me=M.colorSpace===_r?null:je.getPrimaries(M.colorSpace),xe=M.colorSpace===_r||ne===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ie=g(M.image,!1,r.maxTextureSize);ie=Zt(M,ie);const de=s.convert(M.format,M.colorSpace),Le=s.convert(M.type);let ge=x(M.internalFormat,de,Le,M.normalized,M.colorSpace,M.isVideoTexture);Ae(q,M);let he;const De=M.mipmaps,Ue=M.isVideoTexture!==!0,Ve=fe.__version===void 0||Q===!0,V=le.dataReady,pe=A(M,ie);if(M.isDepthTexture)ge=E(M.format===es,M.type),Ve&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,ge,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,de,Le,null));else if(M.isDataTexture)if(De.length>0){Ue&&Ve&&n.texStorage2D(t.TEXTURE_2D,pe,ge,De[0].width,De[0].height);for(let ne=0,me=De.length;ne<me;ne++)he=De[ne],Ue?V&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,de,Le,he.data):n.texImage2D(t.TEXTURE_2D,ne,ge,he.width,he.height,0,de,Le,he.data);M.generateMipmaps=!1}else Ue?(Ve&&n.texStorage2D(t.TEXTURE_2D,pe,ge,ie.width,ie.height),V&&te(M,ie,de,Le)):n.texImage2D(t.TEXTURE_2D,0,ge,ie.width,ie.height,0,de,Le,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ge,De[0].width,De[0].height,ie.depth);for(let ne=0,me=De.length;ne<me;ne++)if(he=De[ne],M.format!==ai)if(de!==null)if(Ue){if(V)if(M.layerUpdates.size>0){const xe=P_(he.width,he.height,M.format,M.type);for(const se of M.layerUpdates){const Ie=he.data.subarray(se*xe/he.data.BYTES_PER_ELEMENT,(se+1)*xe/he.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,se,he.width,he.height,1,de,Ie)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,ie.depth,de,he.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,ie.depth,0,he.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?V&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,ie.depth,de,Le,he.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,ge,he.width,he.height,ie.depth,0,de,Le,he.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{Ue&&Ve&&n.texStorage2D(t.TEXTURE_2D,pe,ge,De[0].width,De[0].height);for(let ne=0,me=De.length;ne<me;ne++)he=De[ne],M.format!==ai?de!==null?Ue?V&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,de,he.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,ge,he.width,he.height,0,he.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?V&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,he.width,he.height,de,Le,he.data):n.texImage2D(t.TEXTURE_2D,ne,ge,he.width,he.height,0,de,Le,he.data)}else if(M.isDataArrayTexture)if(Ue){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,ge,ie.width,ie.height,ie.depth),V)if(M.layerUpdates.size>0){const ne=P_(ie.width,ie.height,M.format,M.type);for(const me of M.layerUpdates){const xe=ie.data.subarray(me*ne/ie.data.BYTES_PER_ELEMENT,(me+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,ie.width,ie.height,1,de,Le,xe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,Le,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ie.width,ie.height,ie.depth,0,de,Le,ie.data);else if(M.isData3DTexture)Ue?(Ve&&n.texStorage3D(t.TEXTURE_3D,pe,ge,ie.width,ie.height,ie.depth),V&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,Le,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ie.width,ie.height,ie.depth,0,de,Le,ie.data);else if(M.isFramebufferTexture){if(Ve)if(Ue)n.texStorage2D(t.TEXTURE_2D,pe,ge,ie.width,ie.height);else{let ne=ie.width,me=ie.height;for(let xe=0;xe<pe;xe++)n.texImage2D(t.TEXTURE_2D,xe,ge,ne,me,0,de,Le,null),ne>>=1,me>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),d.add(M),ne.onpaint=me=>{const xe=me.changedElements;for(const se of d)xe.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const xe=t.RGBA,se=t.RGBA,Ie=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,se,Ie,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ue&&Ve){const ne=it(De[0]);n.texStorage2D(t.TEXTURE_2D,pe,ge,ne.width,ne.height)}for(let ne=0,me=De.length;ne<me;ne++)he=De[ne],Ue?V&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,de,Le,he):n.texImage2D(t.TEXTURE_2D,ne,ge,de,Le,he);M.generateMipmaps=!1}else if(Ue){if(Ve){const ne=it(ie);n.texStorage2D(t.TEXTURE_2D,pe,ge,ne.width,ne.height)}V&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Le,ie)}else n.texImage2D(t.TEXTURE_2D,0,ge,de,Le,ie);h(M)&&v(q),fe.__version=le.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Fe(R,M,X){if(M.image.length!==6)return;const q=Ne(R,M),Q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+X);const le=i.get(Q);if(Q.version!==le.__version||q===!0){n.activeTexture(t.TEXTURE0+X);const fe=je.getPrimaries(je.workingColorSpace),ee=M.colorSpace===_r?null:je.getPrimaries(M.colorSpace),ie=M.colorSpace===_r||fe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const de=M.isCompressedTexture||M.image[0].isCompressedTexture,Le=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let se=0;se<6;se++)!de&&!Le?ge[se]=g(M.image[se],!0,r.maxCubemapSize):ge[se]=Le?M.image[se].image:M.image[se],ge[se]=Zt(M,ge[se]);const he=ge[0],De=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type),Ve=x(M.internalFormat,De,Ue,M.normalized,M.colorSpace),V=M.isVideoTexture!==!0,pe=le.__version===void 0||q===!0,ne=Q.dataReady;let me=A(M,he);Ae(t.TEXTURE_CUBE_MAP,M);let xe;if(de){V&&pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,he.width,he.height);for(let se=0;se<6;se++){xe=ge[se].mipmaps;for(let Ie=0;Ie<xe.length;Ie++){const Re=xe[Ie];M.format!==ai?De!==null?V?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Re.width,Re.height,De,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ve,Re.width,Re.height,0,Re.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,0,0,Re.width,Re.height,De,Ue,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie,Ve,Re.width,Re.height,0,De,Ue,Re.data)}}}else{if(xe=M.mipmaps,V&&pe){xe.length>0&&me++;const se=it(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,me,Ve,se.width,se.height)}for(let se=0;se<6;se++)if(Le){V?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ge[se].width,ge[se].height,De,Ue,ge[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,ge[se].width,ge[se].height,0,De,Ue,ge[se].data);for(let Ie=0;Ie<xe.length;Ie++){const ft=xe[Ie].image[se].image;V?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,ft.width,ft.height,De,Ue,ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ve,ft.width,ft.height,0,De,Ue,ft.data)}}else{V?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,De,Ue,ge[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ve,De,Ue,ge[se]);for(let Ie=0;Ie<xe.length;Ie++){const Re=xe[Ie];V?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,0,0,De,Ue,Re.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ie+1,Ve,De,Ue,Re.image[se])}}}h(M)&&v(t.TEXTURE_CUBE_MAP),le.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ue(R,M,X,q,Q,le){const fe=s.convert(X.format,X.colorSpace),ee=s.convert(X.type),ie=x(X.internalFormat,fe,ee,X.normalized,X.colorSpace),de=i.get(M),Le=i.get(X);if(Le.__renderTarget=M,!de.__hasExternalTextures){const ge=Math.max(1,M.width>>le),he=Math.max(1,M.height>>le);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,le,ie,ge,he,M.depth,0,fe,ee,null):n.texImage2D(Q,le,ie,ge,he,0,fe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Rt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,Q,Le.__webglTexture,0,yt(M)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,Q,Le.__webglTexture,le),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(R,M,X){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const q=M.depthTexture,Q=q&&q.isDepthTexture?q.type:null,le=E(M.stencilBuffer,Q),fe=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Rt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(M),le,M.width,M.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(M),le,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,le,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const q=M.textures;for(let Q=0;Q<q.length;Q++){const le=q[Q],fe=s.convert(le.format,le.colorSpace),ee=s.convert(le.type),ie=x(le.internalFormat,fe,ee,le.normalized,le.colorSpace);Rt(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,yt(M),ie,M.width,M.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,yt(M),ie,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Nt(R,M,X){const q=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(M.depthTexture);if(Q.__renderTarget=M,(!Q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),Ae(t.TEXTURE_CUBE_MAP,M.depthTexture);const de=s.convert(M.depthTexture.format),Le=s.convert(M.depthTexture.type);let ge;M.depthTexture.format===er?ge=t.DEPTH_COMPONENT24:M.depthTexture.format===es&&(ge=t.DEPTH24_STENCIL8);for(let he=0;he<6;he++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ge,M.width,M.height,0,de,Le,null)}}else N(M.depthTexture,0);const le=Q.__webglTexture,fe=yt(M),ee=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+X:t.TEXTURE_2D,ie=M.depthTexture.format===es?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===er)Rt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,le,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,le,0);else if(M.depthTexture.format===es)Rt(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,le,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ge(R){const M=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const q=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=q}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let q=0;q<6;q++)Nt(M.__webglFramebuffer[q],R,q);else{const q=R.texture.mipmaps;q&&q.length>0?Nt(M.__webglFramebuffer[0],R,0):Nt(M.__webglFramebuffer,R,0)}else if(X){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),Be(M.__webglDepthbuffer[q],R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,le)}}else{const q=R.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Be(M.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,le),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,le)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Je(R,M,X){const q=i.get(R);M!==void 0&&ue(q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&Ge(R)}function ut(R){const M=R.texture,X=i.get(R),q=i.get(M);R.addEventListener("dispose",_);const Q=R.textures,le=R.isWebGLCubeRenderTarget===!0,fe=Q.length>1;if(fe||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),le){X.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[ee]=[];for(let ie=0;ie<M.mipmaps.length;ie++)X.__webglFramebuffer[ee][ie]=t.createFramebuffer()}else X.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let ee=0;ee<M.mipmaps.length;ee++)X.__webglFramebuffer[ee]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(fe)for(let ee=0,ie=Q.length;ee<ie;ee++){const de=i.get(Q[ee]);de.__webglTexture===void 0&&(de.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Rt(R)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const ie=Q[ee];X.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[ee]);const de=s.convert(ie.format,ie.colorSpace),Le=s.convert(ie.type),ge=x(ie.internalFormat,de,Le,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),he=yt(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,he,ge,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,X.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),Be(X.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(le){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Ae(t.TEXTURE_CUBE_MAP,M);for(let ee=0;ee<6;ee++)if(M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)ue(X.__webglFramebuffer[ee][ie],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else ue(X.__webglFramebuffer[ee],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);h(M)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ee=0,ie=Q.length;ee<ie;ee++){const de=Q[ee],Le=i.get(de);let ge=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,Le.__webglTexture),Ae(ge,de),ue(X.__webglFramebuffer,R,de,t.COLOR_ATTACHMENT0+ee,ge,0),h(de)&&v(ge)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,q.__webglTexture),Ae(ee,M),M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)ue(X.__webglFramebuffer[ie],R,M,t.COLOR_ATTACHMENT0,ee,ie);else ue(X.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ee,0);h(M)&&v(ee),n.unbindTexture()}R.depthBuffer&&Ge(R)}function $e(R){const M=R.textures;for(let X=0,q=M.length;X<q;X++){const Q=M[X];if(h(Q)){const le=S(R),fe=i.get(Q).__webglTexture;n.bindTexture(le,fe),v(le),n.unbindTexture()}}}const vt=[],zt=[];function gn(R){if(R.samples>0){if(Rt(R)===!1){const M=R.textures,X=R.width,q=R.height;let Q=t.COLOR_BUFFER_BIT;const le=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),ee=M.length>1;if(ee)for(let de=0;de<M.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<M.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Le=i.get(M[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,X,q,0,0,X,q,Q,t.NEAREST),l===!0&&(vt.length=0,zt.length=0,vt.push(t.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(vt.push(le),zt.push(le),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,zt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,vt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let de=0;de<M.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Le=i.get(M[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,Le,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function yt(R){return Math.min(r.maxSamples,R.samples)}function Rt(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function G(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Zt(R,M){const X=R.colorSpace,q=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==cu&&X!==_r&&(je.getTransfer(X)===rt?(q!==ai||Q!==Hn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",X)),M}function it(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.getTextureUnits=b,this.setTextureUnits=D,this.setTexture2D=N,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=U,this.rebindTextures=Je,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=gn,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kN(t,e){function n(i,r=_r){let s;const o=je.getTransfer(r);if(i===Hn)return t.UNSIGNED_BYTE;if(i===Qm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===eg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===uE)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===aE)return t.BYTE;if(i===lE)return t.SHORT;if(i===Va)return t.UNSIGNED_SHORT;if(i===Jm)return t.INT;if(i===Ri)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===Pi)return t.HALF_FLOAT;if(i===fE)return t.ALPHA;if(i===dE)return t.RGB;if(i===ai)return t.RGBA;if(i===er)return t.DEPTH_COMPONENT;if(i===es)return t.DEPTH_STENCIL;if(i===hE)return t.RED;if(i===tg)return t.RED_INTEGER;if(i===ps)return t.RG;if(i===ng)return t.RG_INTEGER;if(i===ig)return t.RGBA_INTEGER;if(i===xc||i===Sc||i===Mc||i===Ec)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Sc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ec)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wh||i===Xh||i===Yh||i===$h)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$h)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jh||i===qh||i===Kh||i===Zh||i===Jh||i===au||i===Qh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jh||i===qh)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kh)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zh)return s.COMPRESSED_R11_EAC;if(i===Jh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===au)return s.COMPRESSED_RG11_EAC;if(i===Qh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op||i===ap||i===lp||i===cp||i===up||i===fp||i===dp||i===hp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ep)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===np)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ip)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===sp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===op)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ap)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===up)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hp)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pp||i===mp||i===gp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pp)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vp||i===_p||i===lu||i===yp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_p)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===za?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const BN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new TE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Di({vertexShader:BN,fragmentShader:VN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Li(new Vu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HN extends _s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,m=null;const y=typeof XRWebGLBinding<"u",g=new zN,h={},v=n.getContextAttributes();let S=null,x=null;const E=[],A=[],w=new et;let _=null,C=null;const P=new zn;P.viewport=new At;const I=new zn;I.viewport=new At;const F=[P,I],L=new qL;let b=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=E[Z];return te===void 0&&(te=new qf,E[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=E[Z];return te===void 0&&(te=new qf,E[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=E[Z];return te===void 0&&(te=new qf,E[Z]=te),te.getHandSpace()};function z(Z){const te=A.indexOf(Z.inputSource);if(te===-1)return;const Se=E[te];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,c||o),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function k(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",N);for(let Z=0;Z<E.length;Z++){const te=A[Z];te!==null&&(A[Z]=null,E[Z].disconnect(te))}b=null,D=null,g.reset();for(const Z in h)delete h[Z];if(e.setRenderTarget(S),p=null,f=null,d=null,r=null,x=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(w.width,w.height,!1),C!==null){const Z=C.camera;Z.fov=C.fov,Z.zoom=C.zoom,Z.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",k),r.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Fe=null,ue=null;v.depth&&(ue=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Se=v.stencil?es:er,Fe=v.stencil?za:Ri);const Be={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new fi(f.textureWidth,f.textureHeight,{format:ai,type:Hn,depthTexture:new Ha(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Se={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new fi(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(Z){for(let te=0;te<Z.removed.length;te++){const Se=Z.removed[te],Fe=A.indexOf(Se);Fe>=0&&(A[Fe]=null,E[Fe].disconnect(Se))}for(let te=0;te<Z.added.length;te++){const Se=Z.added[te];let Fe=A.indexOf(Se);if(Fe===-1){for(let Be=0;Be<E.length;Be++)if(Be>=A.length){A.push(Se),Fe=Be;break}else if(A[Be]===null){A[Be]=Se,Fe=Be;break}if(Fe===-1)break}const ue=E[Fe];ue&&ue.connect(Se)}}const O=new Y,H=new Y;function U(Z,te,Se){O.setFromMatrixPosition(te.matrixWorld),H.setFromMatrixPosition(Se.matrixWorld);const Fe=O.distanceTo(H),ue=te.projectionMatrix.elements,Be=Se.projectionMatrix.elements,Nt=ue[14]/(ue[10]-1),Ge=ue[14]/(ue[10]+1),Je=(ue[9]+1)/ue[5],ut=(ue[9]-1)/ue[5],$e=(ue[8]-1)/ue[0],vt=(Be[8]+1)/Be[0],zt=Nt*$e,gn=Nt*vt,yt=Fe/(-$e+vt),Rt=yt*-$e;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Rt),Z.translateZ(yt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),ue[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const G=Nt+yt,Zt=Ge+yt,it=zt-Rt,R=gn+(Fe-Rt),M=Je*Ge/Zt*G,X=ut*Ge/Zt*G;Z.projectionMatrix.makePerspective(it,R,M,X,G,Zt),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function J(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let te=Z.near,Se=Z.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(Se=g.depthFar)),L.near=I.near=P.near=te,L.far=I.far=P.far=Se,(b!==L.near||D!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),b=L.near,D=L.far),L.layers.mask=Z.layers.mask|6,P.layers.mask=L.layers.mask&-5,I.layers.mask=L.layers.mask&-3;const Fe=Z.parent,ue=L.cameras;J(L,Fe);for(let Be=0;Be<ue.length;Be++)J(ue[Be],Fe);ue.length===2?U(L,P,I):L.projectionMatrix.copy(P.projectionMatrix),C===null&&Z.isPerspectiveCamera&&(C={camera:Z,fov:Z.fov,zoom:Z.zoom}),re(Z,L,Fe)};function re(Z,te,Se){Se===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(Z){return h[Z]};let ae=null;function Ae(Z,te){if(u=te.getViewerPose(c||o),m=te,u!==null){const Se=u.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Fe=!1;Se.length!==L.cameras.length&&(L.cameras.length=0,Fe=!0);for(let Ge=0;Ge<Se.length;Ge++){const Je=Se[Ge];let ut=null;if(p!==null)ut=p.getViewport(Je);else{const vt=d.getViewSubImage(f,Je);ut=vt.viewport,Ge===0&&(e.setRenderTargetTextures(x,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(x))}let $e=F[Ge];$e===void 0&&($e=new zn,$e.layers.enable(Ge),$e.viewport=new At,F[Ge]=$e),$e.matrix.fromArray(Je.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(Je.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ut.x,ut.y,ut.width,ut.height),Ge===0&&(L.matrix.copy($e.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Fe===!0&&L.cameras.push($e)}const ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const Ge=d.getDepthInformation(Se[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,r.renderState)}if(ue&&ue.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let Ge=0;Ge<Se.length;Ge++){const Je=Se[Ge].camera;if(Je){let ut=h[Je];ut||(ut=new TE,h[Je]=ut);const $e=d.getCameraImage(Je);ut.sourceTexture=$e}}}}for(let Se=0;Se<E.length;Se++){const Fe=A[Se],ue=E[Se];Fe!==null&&ue!==void 0&&ue.update(Fe,te,c||o)}ae&&ae(Z,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),m=null}const Ne=new bE;Ne.setAnimationLoop(Ae),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}}const GN=new Et,UE=new ke;UE.set(-1,0,0,0,1,0,0,0,1);function WN(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,wE(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,S,x){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),u(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,x)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),y(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,S):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===En&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===En&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),S=v.envMap,x=v.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(GN.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(UE),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,S){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=S*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===En&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.retroreflectivity>0&&(g.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function y(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function XN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const A=E.program;i.uniformBlockBinding(x,A)}function c(x,E){let A=r[x.id];A===void 0&&(g(x),A=u(x),r[x.id]=A,x.addEventListener("dispose",v));const w=E.program;i.updateUBOMapping(x,w);const _=e.render.frame;s[x.id]!==_&&(f(x),s[x.id]=_)}function u(x){const E=d();x.__bindingPointIndex=E;const A=t.createBuffer(),w=x.__size,_=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,w,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,A),A}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=r[x.id],A=x.uniforms,w=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let _=0,C=A.length;_<C;_++){const P=A[_];if(Array.isArray(P))for(let I=0,F=P.length;I<F;I++)p(P[I],_,I,w);else p(P,_,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,E,A,w){if(y(x,E,A,w)===!0){const _=x.__offset,C=x.value;if(Array.isArray(C)){let P=0;for(let I=0;I<C.length;I++){const F=C[I],L=h(F);m(F,x.__data,P),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(P+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(C,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,x.__data)}}function m(x,E,A){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,A)}function y(x,E,A,w){const _=x.value,C=E+"_"+A;if(w[C]===void 0)return typeof _=="number"||typeof _=="boolean"?w[C]=_:ArrayBuffer.isView(_)?w[C]=_.slice():w[C]=_.clone(),!0;{const P=w[C];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return w[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function g(x){const E=x.uniforms;let A=0;const w=16;for(let C=0,P=E.length;C<P;C++){const I=Array.isArray(E[C])?E[C]:[E[C]];for(let F=0,L=I.length;F<L;F++){const b=I[F],D=Array.isArray(b.value)?b.value:[b.value];for(let z=0,k=D.length;z<k;z++){const N=D[z],O=h(N),H=A%w,U=H%O.boundary,J=H+U;A+=U,J!==0&&w-J<O.storage&&(A+=w-J),b.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=A,A+=O.storage}}}const _=A%w;return _>0&&(A+=w-_),x.__size=A,x.__cache={},this}function h(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",x),E}function v(x){const E=x.target;E.removeEventListener("dispose",v);const A=o.indexOf(E.__bindingPointIndex);o.splice(A,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function S(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:S}}const YN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function $N(){return _i===null&&(_i=new PL(YN,16,16,ps,Pi),_i.name="DFG_LUT",_i.minFilter=sn,_i.magFilter=sn,_i.wrapS=Xi,_i.wrapT=Xi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class jN{constructor(e={}){const{canvas:n=sL(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Hn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const y=p,g=new Set([ig,ng,tg]),h=new Set([Hn,Ri,Va,za,Qm,eg]),v=new Uint32Array(4),S=new Int32Array(4),x=new Y;let E=null,A=null;const w=[],_=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,F=null,L=null,b=null,D=null;this._outputColorSpace=kn;let z=0,k=0,N=null,O=-1,H=null;const U=new At,J=new At;let re=null;const ae=new qe(0);let Ae=0,Ne=n.width,Z=n.height,te=1,Se=null,Fe=null;const ue=new At(0,0,Ne,Z),Be=new At(0,0,Ne,Z);let Nt=!1;const Ge=new xE;let Je=!1,ut=!1;const $e=new Et,vt=new Y,zt=new At,gn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Rt(){return N===null?te:1}let G=i;function Zt(T,B){return n.getContext(T,B)}let it,R,M,X,q,Q,le,fe,ee,ie,de,Le,ge,he,De,Ue,Ve,V,pe,ne,me,xe,se;try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zm}`),n.addEventListener("webglcontextlost",ft,!1),n.addEventListener("webglcontextrestored",tt,!1),n.addEventListener("webglcontextcreationerror",jn,!1),G===null){const B="webgl2";if(G=Zt(B,T),G===null)throw Zt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ie()}catch(T){throw n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",tt,!1),n.removeEventListener("webglcontextcreationerror",jn,!1),Qe("WebGLRenderer: "+T.message),T}function Ie(){it=new $2(G),it.init(),me=new kN(G,it),R=new O2(G,it,e,me),M=new FN(G,it),R.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),L=G.createFramebuffer(),b=G.createFramebuffer(),D=G.createFramebuffer(),X=new K2(G),q=new MN,Q=new ON(G,it,M,q,R,me,X),le=new Y2(P),fe=new JL(G),xe=new U2(G,fe),ee=new j2(G,fe,X,xe),ie=new J2(G,ee,fe,xe,X),V=new Z2(G,R,Q),De=new k2(q),de=new SN(P,le,it,R,xe,De),Le=new WN(P,q),ge=new TN,he=new PN(it),Ve=new N2(P,le,M,ie,m,l),Ue=new UN(P,ie,R),se=new XN(G,X,R,M),pe=new F2(G,it,X),ne=new q2(G,it,X),X.programs=de.programs,P.capabilities=R,P.extensions=it,P.properties=q,P.renderLists=ge,P.shadowMap=Ue,P.state=M,P.info=X}y!==Hn&&(C=new eI(y,n.width,n.height,a,r,s));const Re=new HN(P,G);this.xr=Re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const T=it.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=it.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(Ne,Z,!1))},this.getSize=function(T){return T.set(Ne,Z)},this.setSize=function(T,B,K=!0){if(Re.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ne=T,Z=B,n.width=Math.floor(T*te),n.height=Math.floor(B*te),K===!0&&(n.style.width=T+"px",n.style.height=B+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(Ne*te,Z*te).floor()},this.setDrawingBufferSize=function(T,B,K){Ne=T,Z=B,te=K,n.width=Math.floor(T*K),n.height=Math.floor(B*K),this.setViewport(0,0,T,B)},this.setEffects=function(T){if(y===Hn){Qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let B=0;B<T.length;B++)if(T[B].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(U)},this.getViewport=function(T){return T.copy(ue)},this.setViewport=function(T,B,K,$){T.isVector4?ue.set(T.x,T.y,T.z,T.w):ue.set(T,B,K,$),M.viewport(U.copy(ue).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(Be)},this.setScissor=function(T,B,K,$){T.isVector4?Be.set(T.x,T.y,T.z,T.w):Be.set(T,B,K,$),M.scissor(J.copy(Be).multiplyScalar(te).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(T){M.setScissorTest(Nt=T)},this.setOpaqueSort=function(T){Se=T},this.setTransparentSort=function(T){Fe=T},this.getClearColor=function(T){return T.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,K=!0){let $=0;if(T){let j=!1;if(N!==null){const ye=N.texture.format;j=g.has(ye)}if(j){const ye=N.texture.type,Ee=h.has(ye),_e=Ve.getClearColor(),Ce=Ve.getClearAlpha(),Pe=_e.r,ze=_e.g,We=_e.b;Ee?(v[0]=Pe,v[1]=ze,v[2]=We,v[3]=Ce,G.clearBufferuiv(G.COLOR,0,v)):(S[0]=Pe,S[1]=ze,S[2]=We,S[3]=Ce,G.clearBufferiv(G.COLOR,0,S))}else $|=G.COLOR_BUFFER_BIT}B&&($|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),F=T},this.dispose=function(){n.removeEventListener("webglcontextlost",ft,!1),n.removeEventListener("webglcontextrestored",tt,!1),n.removeEventListener("webglcontextcreationerror",jn,!1),Ve.dispose(),ge.dispose(),he.dispose(),q.dispose(),le.dispose(),ie.dispose(),xe.dispose(),se.dispose(),de.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",gg),Re.removeEventListener("sessionend",vg),kr.stop()};function ft(T){T.preventDefault(),a_("WebGLRenderer: Context Lost."),I=!0}function tt(){a_("WebGLRenderer: Context Restored."),I=!1;const T=X.autoReset,B=Ue.enabled,K=Ue.autoUpdate,$=Ue.needsUpdate,j=Ue.type;Ie(),X.autoReset=T,Ue.enabled=B,Ue.autoUpdate=K,Ue.needsUpdate=$,Ue.type=j}function jn(T){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function pi(T){const B=T.target;B.removeEventListener("dispose",pi),FE(B)}function FE(T){OE(T),q.remove(T)}function OE(T){const B=q.get(T).programs;B!==void 0&&(B.forEach(function(K){de.releaseProgram(K)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,K,$,j,ye){B===null&&(B=gn);const Ee=j.isMesh&&j.matrixWorld.determinantAffine()<0,_e=VE(T,B,K,$,j);M.setMaterial($,Ee);let Ce=K.index,Pe=1;if($.wireframe===!0){if(Ce=ee.getWireframeAttribute(K),Ce===void 0)return;Pe=2}const ze=K.drawRange,We=K.attributes.position;let be=ze.start*Pe,nt=(ze.start+ze.count)*Pe;ye!==null&&(be=Math.max(be,ye.start*Pe),nt=Math.min(nt,(ye.start+ye.count)*Pe)),Ce!==null?(be=Math.max(be,0),nt=Math.min(nt,Ce.count)):We!=null&&(be=Math.max(be,0),nt=Math.min(nt,We.count));const Pt=nt-be;if(Pt<0||Pt===1/0)return;xe.setup(j,$,_e,K,Ce);let pt,ct=pe;if(Ce!==null&&(pt=fe.get(Ce),ct=ne,ct.setIndex(pt)),j.isMesh)$.wireframe===!0?(M.setLineWidth($.wireframeLinewidth*Rt()),ct.setMode(G.LINES)):ct.setMode(G.TRIANGLES);else if(j.isLine){let Jt=$.linewidth;Jt===void 0&&(Jt=1),M.setLineWidth(Jt*Rt()),j.isLineSegments?ct.setMode(G.LINES):j.isLineLoop?ct.setMode(G.LINE_LOOP):ct.setMode(G.LINE_STRIP)}else j.isPoints?ct.setMode(G.POINTS):j.isSprite&&ct.setMode(G.TRIANGLES);if(j.isBatchedMesh)if(it.get("WEBGL_multi_draw"))ct.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Jt=j._multiDrawStarts,Me=j._multiDrawCounts,ln=j._multiDrawCount,Ke=Ce?fe.get(Ce).bytesPerElement:1,Fn=q.get($).currentProgram.getUniforms();for(let mi=0;mi<ln;mi++)Fn.setValue(G,"_gl_DrawID",mi),ct.render(Jt[mi]/Ke,Me[mi])}else if(j.isInstancedMesh)ct.renderInstances(be,Pt,j.count);else if(K.isInstancedBufferGeometry){const Jt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Me=Math.min(K.instanceCount,Jt);ct.renderInstances(be,Pt,Me)}else ct.render(be,Pt)};function mg(T,B,K,$){F!==null&&T.isNodeMaterial&&F.setObject($,T),Je===!0&&De.setState(T,K,!1),T.transparent===!0&&T.side===Hi&&T.forceSinglePass===!1?(T.side=En,T.needsUpdate=!0,nl(T,B,$),T.side=ds,T.needsUpdate=!0,nl(T,B,$),T.side=Hi):nl(T,B,$)}this.compile=function(T,B,K=null){K===null&&(K=T),F!==null&&F.renderStart(T,B,K),A=he.get(K),A.init(B),_.push(A),K.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),T!==K&&T.traverseVisible(function(j){j.isLight&&j.layers.test(B.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),ut=this.localClippingEnabled,Je=De.init(this.clippingPlanes,ut),Je===!0&&De.setGlobalState(this.clippingPlanes,B),F!==null&&Ue.render(A.state.shadowsArray,K,B);const $=new Set;return T.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const ye=j.material;if(ye)if(Array.isArray(ye))for(let Ee=0;Ee<ye.length;Ee++){const _e=ye[Ee];mg(_e,K,B,j),$.add(_e)}else mg(ye,K,B,j),$.add(ye)}),A=_.pop(),F!==null&&F.renderEnd(),$},this.compileAsync=function(T,B,K=null){const $=this.compile(T,B,K);return new Promise(j=>{function ye(){if($.forEach(function(Ee){const Ce=q.get(Ee).currentProgram;(Ce===void 0||Ce.isReady())&&$.delete(Ee)}),$.size===0){j(T);return}setTimeout(ye,10)}it.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Gu=null;function kE(T){Gu&&Gu(T)}function gg(){kr.stop()}function vg(){kr.start()}const kr=new bE;kr.setAnimationLoop(kE),typeof self<"u"&&kr.setContext(self),this.setAnimationLoop=function(T){Gu=T,Re.setAnimationLoop(T),T===null?kr.stop():kr.start()},Re.addEventListener("sessionstart",gg),Re.addEventListener("sessionend",vg),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(T,B);const K=Re.enabled===!0&&Re.isPresenting===!0,$=C!==null&&(N===null||K)&&C.begin(P,N);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(B),B=Re.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,B,N),A=he.get(T,_.length),A.init(B),A.state.textureUnits=Q.getTextureUnits(),_.push(A),$e.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ge.setFromProjectionMatrix($e,Ei,B.reversedDepth),ut=this.localClippingEnabled,Je=De.init(this.clippingPlanes,ut),E=ge.get(T,w.length),E.init(),w.push(E),Re.enabled===!0&&Re.isPresenting===!0){const Ee=P.xr.getDepthSensingMesh();Ee!==null&&Wu(Ee,B,-1/0,P.sortObjects)}Wu(T,B,0,P.sortObjects),E.finish(),F!==null&&F.updateLights(A.state.lightsArray),P.sortObjects===!0&&E.sort(Se,Fe),yt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,yt&&Ve.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&De.beginShadows();const j=A.state.shadowsArray;if(Ue.render(j,T,B),Je===!0&&De.endShadows(),($&&C.hasRenderPass())===!1){const Ee=E.opaque,_e=E.transmissive;if(A.setupLights(),B.isArrayCamera){const Ce=B.cameras;if(_e.length>0)for(let Pe=0,ze=Ce.length;Pe<ze;Pe++){const We=Ce[Pe];yg(Ee,_e,T,We)}yt&&Ve.render(T);for(let Pe=0,ze=Ce.length;Pe<ze;Pe++){const We=Ce[Pe];_g(E,T,We,We.viewport)}}else _e.length>0&&yg(Ee,_e,T,B),yt&&Ve.render(T),_g(E,T,B)}N!==null&&k===0&&(Q.updateMultisampleRenderTarget(N),Q.updateRenderTargetMipmap(N)),$&&C.end(P),T.isScene===!0&&T.onAfterRender(P,T,B),xe.resetDefaultState(),O=-1,H=null,_.pop(),_.length>0?(A=_[_.length-1],Q.setTextureUnits(A.state.textureUnits),Je===!0&&De.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,F!==null&&F.renderEnd()};function Wu(T,B,K,$){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLightProbeGrid)A.pushLightProbeGrid(T);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Ge)){$&&zt.setFromMatrixPosition(T.matrixWorld).applyMatrix4($e);const Ee=ie.update(T),_e=T.material;_e.visible&&E.push(T,Ee,_e,K,zt.z,null,B)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Ge))){const Ee=ie.update(T),_e=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),zt.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),zt.copy(Ee.boundingSphere.center)),zt.applyMatrix4(T.matrixWorld).applyMatrix4($e)),Array.isArray(_e)){const Ce=Ee.groups;for(let Pe=0,ze=Ce.length;Pe<ze;Pe++){const We=Ce[Pe],be=_e[We.materialIndex];be&&be.visible&&E.push(T,Ee,be,K,zt.z,We,B)}}else _e.visible&&E.push(T,Ee,_e,K,zt.z,null,B)}}const ye=T.children;for(let Ee=0,_e=ye.length;Ee<_e;Ee++)Wu(ye[Ee],B,K,$)}function _g(T,B,K,$){const{opaque:j,transmissive:ye,transparent:Ee}=T;A.setupLightsView(K),Je===!0&&De.setGlobalState(P.clippingPlanes,K),$&&M.viewport(U.copy($)),j.length>0&&tl(j,B,K),ye.length>0&&tl(ye,B,K),Ee.length>0&&tl(Ee,B,K),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function yg(T,B,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){const be=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new fi(1,1,{generateMipmaps:!0,type:be?Pi:Hn,minFilter:Qr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ye=A.state.transmissionRenderTarget[$.id],Ee=$.viewport||U;ye.setSize(Ee.z*P.transmissionResolutionScale,Ee.w*P.transmissionResolutionScale);const _e=P.getRenderTarget(),Ce=P.getActiveCubeFace(),Pe=P.getActiveMipmapLevel();P.setRenderTarget(ye),P.getClearColor(ae),Ae=P.getClearAlpha(),Ae<1&&P.setClearColor(16777215,.5),P.clear(),yt&&Ve.render(K);const ze=P.toneMapping;P.toneMapping=Ci;const We=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),Je===!0&&De.setGlobalState(P.clippingPlanes,$),tl(T,K,$),Q.updateMultisampleRenderTarget(ye),Q.updateRenderTargetMipmap(ye),it.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let nt=0,Pt=B.length;nt<Pt;nt++){const pt=B[nt],{object:ct,geometry:Jt,material:Me,group:ln}=pt;if(Me.side===Hi&&ct.layers.test($.layers)){const Ke=Me.side;Me.side=En,Me.needsUpdate=!0,xg(ct,K,$,Jt,Me,ln),Me.side=Ke,Me.needsUpdate=!0,be=!0}}be===!0&&(Q.updateMultisampleRenderTarget(ye),Q.updateRenderTargetMipmap(ye))}P.setRenderTarget(_e,Ce,Pe),P.setClearColor(ae,Ae),We!==void 0&&($.viewport=We),P.toneMapping=ze}function tl(T,B,K){const $=B.isScene===!0?B.overrideMaterial:null;for(let j=0,ye=T.length;j<ye;j++){const Ee=T[j],{object:_e,geometry:Ce,group:Pe}=Ee;let ze=Ee.material;ze.allowOverride===!0&&$!==null&&(ze=$),_e.layers.test(K.layers)&&xg(_e,B,K,Ce,ze,Pe)}}function xg(T,B,K,$,j,ye){F!==null&&j.isNodeMaterial&&F.setObject(T,j),T.onBeforeRender(P,B,K,$,j,ye),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(P,B,K,$,T,ye),j.transparent===!0&&j.side===Hi&&j.forceSinglePass===!1?(j.side=En,j.needsUpdate=!0,P.renderBufferDirect(K,B,$,j,T,ye),j.side=ds,j.needsUpdate=!0,P.renderBufferDirect(K,B,$,j,T,ye),j.side=Hi):P.renderBufferDirect(K,B,$,j,T,ye),T.onAfterRender(P,B,K,$,j,ye)}function nl(T,B,K){B.isScene!==!0&&(B=gn);const $=q.get(T),j=A.state.lights,ye=A.state.shadowsArray,Ee=j.state.version,_e=de.getParameters(T,j.state,ye,B,K,A.state.lightProbeGridArray),Ce=de.getProgramCacheKey(_e);let Pe=$.programs;$.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,$.fog=B.fog;const ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;$.envMap=le.get(T.envMap||$.environment,ze),$.envMapRotation=$.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Pe===void 0&&(T.addEventListener("dispose",pi),Pe=new Map,$.programs=Pe);let We=Pe.get(Ce);if(We!==void 0){if($.currentProgram===We&&$.lightsStateVersion===Ee)return Mg(T,_e),We}else _e.uniforms=de.getUniforms(T),F!==null&&T.isNodeMaterial&&F.build(T,K,_e),T.onBeforeCompile(_e,P),We=de.acquireProgram(_e,Ce),Pe.set(Ce,We),$.uniforms=_e.uniforms;const be=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=De.uniform),Mg(T,_e),$.needsLights=HE(T),$.lightsStateVersion=Ee,$.needsLights&&(be.ambientLightColor.value=j.state.ambient,be.lightProbe.value=j.state.probe,be.sunLights.value=j.state.sun,be.sunLightShadows.value=j.state.sunShadow,be.directionalLights.value=j.state.directional,be.directionalLightShadows.value=j.state.directionalShadow,be.spotLights.value=j.state.spot,be.spotLightShadows.value=j.state.spotShadow,be.rectAreaLights.value=j.state.rectArea,be.ltc_1.value=j.state.rectAreaLTC1,be.ltc_2.value=j.state.rectAreaLTC2,be.pointLights.value=j.state.point,be.pointLightShadows.value=j.state.pointShadow,be.hemisphereLights.value=j.state.hemi,be.sunShadowMatrix.value=j.state.sunShadowMatrix,be.sunShadowCascade.value=j.state.sunShadowCascade,be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,be.spotLightMatrix.value=j.state.spotLightMatrix,be.spotLightMap.value=j.state.spotLightMap,be.pointShadowMatrix.value=j.state.pointShadowMatrix),$.lightProbeGrid=A.state.lightProbeGridArray.length>0,$.currentProgram=We,$.uniformsList=null,We}function Sg(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=Tc.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Mg(T,B){const K=q.get(T);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.batchingColor=B.batchingColor,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.instancingMorph=B.instancingMorph,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function BE(T,B){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(B.matrixWorld);for(let K=0,$=T.length;K<$;K++){const j=T[K];if(j.texture!==null&&j.boundingBox.containsPoint(x))return j}return null}function VE(T,B,K,$,j){B.isScene!==!0&&(B=gn),Q.resetTextureUnits();const ye=B.fog,Ee=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?B.environment:null,_e=N===null?P.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:je.workingColorSpace,Ce=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Pe=le.get($.envMap||Ee,Ce),ze=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,We=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),be=!!K.morphAttributes.position,nt=!!K.morphAttributes.normal,Pt=!!K.morphAttributes.color;let pt=Ci;$.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(pt=P.toneMapping);const ct=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Jt=ct!==void 0?ct.length:0,Me=q.get($),ln=A.state.lights;if(Je===!0&&(ut===!0||T!==H)){const dt=T===H&&$.id===O;De.setState($,T,dt)}let Ke=!1;$.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==ln.state.version||Me.outputColorSpace!==_e||j.isBatchedMesh&&Me.batching===!1||!j.isBatchedMesh&&Me.batching===!0||j.isBatchedMesh&&Me.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Me.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Me.instancing===!1||!j.isInstancedMesh&&Me.instancing===!0||j.isSkinnedMesh&&Me.skinning===!1||!j.isSkinnedMesh&&Me.skinning===!0||j.isInstancedMesh&&Me.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Me.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Me.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Me.instancingMorph===!1&&j.morphTexture!==null||Me.envMap!==Pe||$.fog===!0&&Me.fog!==ye||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==De.numPlanes||Me.numIntersection!==De.numIntersection)||Me.vertexAlphas!==ze||Me.vertexTangents!==We||Me.morphTargets!==be||Me.morphNormals!==nt||Me.morphColors!==Pt||Me.toneMapping!==pt||Me.morphTargetsCount!==Jt||!!Me.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,Me.__version=$.version);let Fn=Me.currentProgram;Ke===!0&&(Fn=nl($,B,j),F&&$.isNodeMaterial&&F.onUpdateProgram($,Fn,Me));let mi=!1,nr=!1,ys=!1;const at=Fn.getUniforms(),Ct=Me.uniforms;if(M.useProgram(Fn.program)&&(mi=!0,nr=!0,ys=!0),$.id!==O&&(O=$.id,nr=!0),Me.needsLights){const dt=BE(A.state.lightProbeGridArray,j);Me.lightProbeGrid!==dt&&(Me.lightProbeGrid=dt,nr=!0)}if(mi||H!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),at.setValue(G,"projectionMatrix",T.projectionMatrix),at.setValue(G,"viewMatrix",T.matrixWorldInverse);const rr=at.map.cameraPosition;rr!==void 0&&rr.setValue(G,vt.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&at.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&at.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),H!==T&&(H=T,nr=!0,ys=!0)}if(Me.needsLights&&(ln.state.sunShadowMap.length>0&&at.setValue(G,"sunShadowMap",ln.state.sunShadowMap,Q),ln.state.directionalShadowMap.length>0&&at.setValue(G,"directionalShadowMap",ln.state.directionalShadowMap,Q),ln.state.spotShadowMap.length>0&&at.setValue(G,"spotShadowMap",ln.state.spotShadowMap,Q),ln.state.pointShadowMap.length>0&&at.setValue(G,"pointShadowMap",ln.state.pointShadowMap,Q)),j.isSkinnedMesh){at.setOptional(G,j,"bindMatrix"),at.setOptional(G,j,"bindMatrixInverse");const dt=j.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),at.setValue(G,"boneTexture",dt.boneTexture,Q))}j.isBatchedMesh&&(at.setOptional(G,j,"batchingTexture"),at.setValue(G,"batchingTexture",j._matricesTexture,Q),at.setOptional(G,j,"batchingIdTexture"),at.setValue(G,"batchingIdTexture",j._indirectTexture,Q),at.setOptional(G,j,"batchingColorTexture"),j._colorsTexture!==null&&at.setValue(G,"batchingColorTexture",j._colorsTexture,Q));const ir=K.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&V.update(j,K,Fn),(nr||Me.receiveShadow!==j.receiveShadow)&&(Me.receiveShadow=j.receiveShadow,at.setValue(G,"receiveShadow",j.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&B.environment!==null&&(Ct.envMapIntensity.value=B.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=$N()),nr){if(at.setValue(G,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&zE(Ct,ys),ye&&$.fog===!0&&Le.refreshFogUniforms(Ct,ye),Le.refreshMaterialUniforms(Ct,$,te,Z,A.state.transmissionRenderTarget[T.id]),Me.needsLights&&Me.lightProbeGrid){const dt=Me.lightProbeGrid;Ct.probesSH.value=dt.texture,Ct.probesMin.value.copy(dt.boundingBox.min),Ct.probesMax.value.copy(dt.boundingBox.max),Ct.probesResolution.value.copy(dt.resolution)}Tc.upload(G,Sg(Me),Ct,Q)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Tc.upload(G,Sg(Me),Ct,Q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&at.setValue(G,"center",j.center),at.setValue(G,"modelViewMatrix",j.modelViewMatrix),at.setValue(G,"normalMatrix",j.normalMatrix),at.setValue(G,"modelMatrix",j.matrixWorld),$.uniformsGroups!==void 0){const dt=$.uniformsGroups;for(let rr=0,xs=dt.length;rr<xs;rr++){const Tg=dt[rr];se.update(Tg,Fn),se.bind(Tg,Fn)}}return Fn}function zE(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.sunLights.needsUpdate=B,T.sunLightShadows.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function HE(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,B,K){const $=q.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=B,q.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){const K=q.get(T);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,K=0){N=T,z=B,k=K;let $=null,j=!1,ye=!1;if(T){const _e=q.get(T);if(_e.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(G.FRAMEBUFFER,_e.__webglFramebuffer),U.copy(T.viewport),J.copy(T.scissor),re=T.scissorTest,M.viewport(U),M.scissor(J),M.setScissorTest(re),O=-1;return}else if(_e.__webglFramebuffer===void 0)Q.setupRenderTarget(T);else if(_e.__hasExternalTextures)Q.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ze=T.depthTexture;if(_e.__boundDepthTexture!==ze){if(ze!==null&&q.has(ze)&&(T.width!==ze.image.width||T.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(T)}}const Ce=T.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ye=!0);const Pe=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Pe[B])?$=Pe[B][K]:$=Pe[B],j=!0):T.samples>0&&Q.useMultisampledRTT(T)===!1?$=q.get(T).__webglMultisampledFramebuffer:Array.isArray(Pe)?$=Pe[K]:$=Pe,U.copy(T.viewport),J.copy(T.scissor),re=T.scissorTest}else U.copy(ue).multiplyScalar(te).floor(),J.copy(Be).multiplyScalar(te).floor(),re=Nt;if(K!==0&&($=L),M.bindFramebuffer(G.FRAMEBUFFER,$)&&M.drawBuffers(T,$),M.viewport(U),M.scissor(J),M.setScissorTest(re),j){const _e=q.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,_e.__webglTexture,K)}else if(ye){const _e=B;for(let Ce=0;Ce<T.textures.length;Ce++){const Pe=q.get(T.textures[Ce]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ce,Pe.__webglTexture,K,_e)}}else if(T!==null&&K!==0){const _e=q.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,_e.__webglTexture,K)}O=-1};function Eg(T){const B=q.get(T);return(B.__readFormat!==T.format||B.__readType!==T.type)&&(B.__readFormat=T.format,B.__readType=T.type,B.__formatReadable=R.textureFormatReadable(T.format),B.__typeReadable=R.textureTypeReadable(T.type)),B}this.readRenderTargetPixels=function(T,B,K,$,j,ye,Ee,_e=0){if(!(T&&T.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce){M.bindFramebuffer(G.FRAMEBUFFER,Ce);try{const Pe=T.textures[_e],ze=Pe.format,We=Pe.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+_e);const be=Eg(Pe);if(be.__formatReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-$&&K>=0&&K<=T.height-j&&G.readPixels(B,K,$,j,me.convert(ze),me.convert(We),ye)}finally{const Pe=N!==null?q.get(N).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,B,K,$,j,ye,Ee,_e=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Ce=Ce[Ee]),Ce)if(B>=0&&B<=T.width-$&&K>=0&&K<=T.height-j){M.bindFramebuffer(G.FRAMEBUFFER,Ce);const Pe=T.textures[_e],ze=Pe.format,We=Pe.type;T.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+_e);const be=Eg(Pe);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,nt),G.bufferData(G.PIXEL_PACK_BUFFER,ye.byteLength,G.STREAM_READ),G.readPixels(B,K,$,j,me.convert(ze),me.convert(We),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);const Pt=N!==null?q.get(N).__webglFramebuffer:null;M.bindFramebuffer(G.FRAMEBUFFER,Pt);const pt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await oL(G,pt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,nt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,ye),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(nt),G.deleteSync(pt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,K=0){const $=Math.pow(2,-K),j=Math.floor(T.image.width*$),ye=Math.floor(T.image.height*$),Ee=B!==null?B.x:0,_e=B!==null?B.y:0;Q.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,K,0,0,Ee,_e,j,ye),M.unbindTexture()},this.copyTextureToTexture=function(T,B,K=null,$=null,j=0,ye=0){let Ee,_e,Ce,Pe,ze,We,be,nt,Pt;const pt=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(K!==null)Ee=K.max.x-K.min.x,_e=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,Pe=K.min.x,ze=K.min.y,We=K.isBox3?K.min.z:0;else{const Ct=Math.pow(2,-j);Ee=Math.floor(pt.width*Ct),_e=Math.floor(pt.height*Ct),T.isDataArrayTexture?Ce=pt.depth:T.isData3DTexture?Ce=Math.floor(pt.depth*Ct):Ce=1,Pe=0,ze=0,We=0}$!==null?(be=$.x,nt=$.y,Pt=$.z):(be=0,nt=0,Pt=0);const ct=me.convert(B.format),Jt=me.convert(B.type);let Me;B.isData3DTexture?(Q.setTexture3D(B,0),Me=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Q.setTexture2DArray(B,0),Me=G.TEXTURE_2D_ARRAY):(Q.setTexture2D(B,0),Me=G.TEXTURE_2D),M.activeTexture(G.TEXTURE0),M.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),M.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),M.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);const ln=M.getParameter(G.UNPACK_ROW_LENGTH),Ke=M.getParameter(G.UNPACK_IMAGE_HEIGHT),Fn=M.getParameter(G.UNPACK_SKIP_PIXELS),mi=M.getParameter(G.UNPACK_SKIP_ROWS),nr=M.getParameter(G.UNPACK_SKIP_IMAGES);M.pixelStorei(G.UNPACK_ROW_LENGTH,pt.width),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pt.height),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Pe),M.pixelStorei(G.UNPACK_SKIP_ROWS,ze),M.pixelStorei(G.UNPACK_SKIP_IMAGES,We);const ys=T.isDataArrayTexture||T.isData3DTexture,at=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){const Ct=q.get(T),ir=q.get(B),dt=q.get(Ct.__renderTarget),rr=q.get(ir.__renderTarget);M.bindFramebuffer(G.READ_FRAMEBUFFER,dt.__webglFramebuffer),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let xs=0;xs<Ce;xs++)ys&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(T).__webglTexture,j,We+xs),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,q.get(B).__webglTexture,ye,Pt+xs)),G.blitFramebuffer(Pe,ze,Ee,_e,be,nt,Ee,_e,G.DEPTH_BUFFER_BIT,G.NEAREST);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(j!==0||T.isRenderTargetTexture||q.has(T)){const Ct=q.get(T),ir=q.get(B);M.bindFramebuffer(G.READ_FRAMEBUFFER,b),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,D);for(let dt=0;dt<Ce;dt++)ys?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ct.__webglTexture,j,We+dt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ct.__webglTexture,j),at?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ir.__webglTexture,ye,Pt+dt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ir.__webglTexture,ye),j!==0?G.blitFramebuffer(Pe,ze,Ee,_e,be,nt,Ee,_e,G.COLOR_BUFFER_BIT,G.NEAREST):at?G.copyTexSubImage3D(Me,ye,be,nt,Pt+dt,Pe,ze,Ee,_e):G.copyTexSubImage2D(Me,ye,be,nt,Pe,ze,Ee,_e);M.bindFramebuffer(G.READ_FRAMEBUFFER,null),M.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else at?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Me,ye,be,nt,Pt,Ee,_e,Ce,ct,Jt,pt.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(Me,ye,be,nt,Pt,Ee,_e,Ce,ct,pt.data):G.texSubImage3D(Me,ye,be,nt,Pt,Ee,_e,Ce,ct,Jt,pt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,ye,be,nt,Ee,_e,ct,Jt,pt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,ye,be,nt,pt.width,pt.height,ct,pt.data):G.texSubImage2D(G.TEXTURE_2D,ye,be,nt,Ee,_e,ct,Jt,pt);M.pixelStorei(G.UNPACK_ROW_LENGTH,ln),M.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ke),M.pixelStorei(G.UNPACK_SKIP_PIXELS,Fn),M.pixelStorei(G.UNPACK_SKIP_ROWS,mi),M.pixelStorei(G.UNPACK_SKIP_IMAGES,nr),ye===0&&B.generateMipmaps&&G.generateMipmap(Me),M.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&Q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Q.setTextureCube(T,0):T.isData3DTexture?Q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Q.setTexture2DArray(T,0):Q.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){z=0,k=0,N=null,M.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}function Q_({variant:t="hero"}){const e=ce.useRef(null);return ce.useEffect(()=>{const n=e.current;if(!n)return;const i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=new ML,s=new zn(50,n.clientWidth/n.clientHeight,.1,200),o=t==="hero";s.position.z=o?30:40;const a=new jN({antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,2)),a.setSize(n.clientWidth,n.clientHeight),n.appendChild(a.domElement);const l=new Jo;r.add(l);const c=o?9:12,u=new qe("#a6265a"),d=new qe("#f0a6c0"),f=new qe("#ffb35c"),p=i?90:190,m=new Float32Array(p*3),y=new Float32Array(p*3),g=[];for(let U=0;U<p;U++){const J=Math.acos(1-2*(U+.5)/p),re=Math.PI*(1+Math.sqrt(5))*U,ae=Math.sin(J)*Math.cos(re),Ae=Math.sin(J)*Math.sin(re),Ne=Math.cos(J);m[U*3]=ae*c,m[U*3+1]=Ae*c,m[U*3+2]=Ne*c,g.push(new Y(ae,Ae,Ne));const Z=Math.random(),te=Z<.55?u:Z<.85?d:f;y[U*3]=te.r,y[U*3+1]=te.g,y[U*3+2]=te.b}const h=new Tn;h.setAttribute("position",new di(m,3)),h.setAttribute("color",new di(y,3));const v=(()=>{const J=document.createElement("canvas");J.width=64,J.height=64;const re=J.getContext("2d"),ae=re.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return ae.addColorStop(0,"rgba(255,255,255,1)"),ae.addColorStop(.4,"rgba(255,255,255,0.55)"),ae.addColorStop(1,"rgba(255,255,255,0)"),re.fillStyle=ae,re.fillRect(0,0,64,64),new NL(J)})(),S=new ME({size:o?.85:.7,map:v,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1,blending:ou,sizeAttenuation:!0}),x=new IL(h,S);l.add(x);const E=new SE({color:15771328,transparent:!0,opacity:.28,blending:ou}),A=i?20:46,w=[];for(let U=0;U<A;U++){const J=Math.floor(Math.random()*p),re=Math.floor(Math.random()*p);if(J===re)continue;const ae=g[J].clone().multiplyScalar(c),Ae=g[re].clone().multiplyScalar(c),Ne=ae.clone().add(Ae).multiplyScalar(.5),Z=ae.distanceTo(Ae),te=Ne.clone().normalize().multiplyScalar(Z*.55);Ne.add(te);const Fe=new VL(ae,Ne,Ae).getPoints(28),ue=new Tn().setFromPoints(Fe),Be=new DL(ue,E);E.needsUpdate=!0,l.add(Be),w.push(ue)}const _=new lg({color:10888794,transparent:!0,opacity:.04,wireframe:!0}),C=new cg(c,18,14),P=new Li(C,_);l.add(P),l.rotation.z=.18;const I={x:0,y:0},F={x:0,y:0},L=U=>{I.x=(U.clientX/window.innerWidth-.5)*2,I.y=(U.clientY/window.innerHeight-.5)*2};window.addEventListener("pointermove",L);const b={progress:0,current:0},D=()=>{const U=document.documentElement.scrollHeight-window.innerHeight;b.progress=U>0?Math.min(1,Math.max(0,window.scrollY/U)):0};D(),window.addEventListener("scroll",D,{passive:!0});const z=new KL;let k;const N=()=>{const U=z.getElapsedTime(),J=!o;if(!i){F.x+=(I.x-F.x)*.03,F.y+=(I.y-F.y)*.03,b.current+=(b.progress-b.current)*.06;const re=J?U*.16+b.current*Math.PI*1.4:U*.12;l.rotation.y=re+F.x*.5,l.rotation.x=Math.sin(U*.2)*.08-F.y*.3+(J?b.current*.5:0),J&&(s.position.z=c*2.4+b.current*10,s.position.y=-F.y*2.2-b.current*4,l.position.y=-b.current*3),s.position.x=F.x*3,s.lookAt(0,0,0)}a.render(r,s),k=requestAnimationFrame(N)};N();const O=()=>{n&&(s.aspect=n.clientWidth/n.clientHeight,s.updateProjectionMatrix(),a.setSize(n.clientWidth,n.clientHeight))};window.addEventListener("resize",O);const H=()=>{document.hidden?cancelAnimationFrame(k):(z.start(),N())};return document.addEventListener("visibilitychange",H),()=>{cancelAnimationFrame(k),window.removeEventListener("pointermove",L),window.removeEventListener("scroll",D),window.removeEventListener("resize",O),document.removeEventListener("visibilitychange",H),h.dispose(),S.dispose(),v.dispose(),C.dispose(),_.dispose(),w.forEach(U=>U.dispose()),E.dispose(),a.dispose(),a.domElement.parentNode===n&&n.removeChild(a.domElement)}},[t]),W.jsx("div",{className:`globe-3d globe-3d--${t}`,ref:e,"aria-hidden":"true"})}const fr={name:"Azra Fayaz",pronouns:"She/Her",headline:"University of Delhi | Sales & Marketing | FMCG | Event Management | Content Writing | Social Media Management",location:"India",education:"Indian Institute of Management Rohtak",company:"Bambuyu"},qN=[{id:"social",label:"Social Media",color:"#a6265a"},{id:"content",label:"Content & Copy",color:"#c2410c"},{id:"email",label:"Email Marketing",color:"#0f766e"},{id:"influencer",label:"Influencer",color:"#7c3aed"},{id:"events",label:"Events",color:"#b45309"},{id:"partnerships",label:"Partnerships",color:"#1d4ed8"},{id:"strategy",label:"Brand Strategy",color:"#0891b2"}],KN=[{id:"social-media-management",name:"Social Media Management",cat:"social",endorsements:1,description:"Running day-to-day social presence end-to-end: planning, publishing and community engagement across channels.",context:"Daily practice at Bambuyu."},{id:"content-planning",name:"Content Planning",cat:"social",description:"Building content calendars that map posts to launches, campaigns and marketing objectives.",context:"Bambuyu"},{id:"community-engagement",name:"Community Engagement",cat:"social",description:"Nurturing an active audience through replies, DMs and conversation-led community building.",context:"Bambuyu"},{id:"audience-growth",name:"Audience Growth",cat:"social",description:"Growing reach and followers through consistent storytelling and audience-first content.",context:"Gramiyaa LinkedIn — 40% follower increase."},{id:"content-creation",name:"Content Creation & Design",cat:"content",description:"Designing and producing social content, campaign creatives and brand communication assets.",context:"Bambuyu"},{id:"copywriting",name:"Copywriting",cat:"content",endorsements:1,description:"Writing clear, persuasive copy for campaigns, captions, landing pages and brand messaging.",context:"Marketing Intern at Oliveboard."},{id:"content-writing",name:"Content Writing",cat:"content",description:"Long-form and short-form writing for brand storytelling, blogs and debatable content pieces.",context:"Content Writer at AWAAZ."},{id:"storytelling",name:"Brand Storytelling",cat:"content",description:"Turning product and founder stories into narratives audiences actually follow and share.",context:"Gramiyaa"},{id:"email-strategy",name:"Email Strategy",cat:"email",description:"Planning email programmes end-to-end — from strategy and segmentation to timing.",context:"Bambuyu"},{id:"email-campaigns",name:"Email Campaigns",cat:"email",description:"Designing, executing and tracking email campaigns with performance reporting.",context:"Bambuyu"},{id:"email-design",name:"Email Design",cat:"email",description:"Building on-brand, responsive email layouts that hold up across clients.",context:"Bambuyu"},{id:"performance-tracking",name:"Performance Tracking",cat:"email",description:"Measuring opens, clicks and conversions, then iterating on what the data shows.",context:"Bambuyu"},{id:"influencer-marketing",name:"Influencer Marketing",cat:"influencer",description:"Identifying and managing creators, coordinating collaborations and overseeing content execution.",context:"Bambuyu"},{id:"creator-management",name:"Creator Management",cat:"influencer",description:"Running creator relationships end-to-end: sourcing, briefing, review and follow-up.",context:"Bambuyu"},{id:"deliverable-negotiation",name:"Deliverable Negotiation",cat:"influencer",description:"Negotiating deliverables, timelines and rates that work for both brand and creator.",context:"Bambuyu"},{id:"event-management",name:"Event Management",cat:"events",endorsements:1,description:"Planning and running brand events, pop-ups, activations and on-ground marketing initiatives.",context:"Endorsed skill. Gramiyaa — 4 on-ground events every month."},{id:"marketing-event-planning",name:"Marketing Event Planning",cat:"events",endorsements:1,description:"Planning events as marketing instruments — designed around awareness and consumer education.",context:"Endorsed skill. Gramiyaa."},{id:"activations",name:"On-ground Activations",cat:"events",description:"Executing consumer-facing activations that drive trial and brand recall.",context:"Gramiyaa"},{id:"brand-partnerships",name:"Brand Partnerships",cat:"partnerships",description:"Building and managing collaborations with brands and partners to drive awareness and engagement.",context:"Bambuyu"},{id:"barter-collaborations",name:"Barter Collaborations",cat:"partnerships",description:"Running strategic offline barter deals with academies, universities and event partners.",context:"Gramiyaa — 10+ partners."},{id:"b2b-onboarding",name:"B2B Onboarding",cat:"partnerships",description:"Turning partners into paying B2B customers and keeping long-term accounts alive.",context:"Gramiyaa — cooking academies as a new sales channel."},{id:"content-strategy",name:"Content Strategy",cat:"strategy",description:"Developing content ideas and campaigns aligned to brand positioning and launch objectives.",context:"Bambuyu"},{id:"business-marketing",name:"Business Marketing",cat:"strategy",endorsements:1,description:"Commercial marketing thinking — connecting activity to pipeline, sales and business goals.",context:"Marketing Intern at Oliveboard."},{id:"marketing-support",name:"Marketing Support",cat:"strategy",description:"Cross-functional marketing support across campaigns, collateral and coordination.",context:"Marketing Intern at Oliveboard."},{id:"consumer-education",name:"Consumer Education",cat:"strategy",description:"Educating consumers on category and product value, especially in health and wellness.",context:"Gramiyaa — wood cold-pressed oils."},{id:"fmcg",name:"FMCG Marketing",cat:"strategy",description:"Marketing fast-moving consumer goods to mass audiences across online and offline channels.",context:"Gramiyaa, Bambuyu."}],ZN=[{company:"Bambuyu",icon:"bag-handle-outline",role:"Marketing Executive",location:"On-site",date:"Feb 2026 — Present",duration:"9 mos",type:"Full-time",summary:"Running marketing end-to-end — social media, content, email, influencer, partnerships and on-ground activations.",responsibilities:[{title:"Social Media Management",desc:"Managing day-to-day social media presence, content planning, publishing and community engagement."},{title:"Content Creation & Design",desc:"Creating and designing social media content, campaigns, creatives and brand communication."},{title:"Email Marketing",desc:"Managing email marketing end-to-end, from strategy and content creation to design, execution and performance tracking."},{title:"Influencer Marketing",desc:"Identifying and managing creators, coordinating collaborations, negotiating deliverables and overseeing content execution."},{title:"Brand Partnerships",desc:"Building and managing collaborations with relevant brands and partners to drive awareness and engagement."},{title:"Events & Activations",desc:"Planning and managing brand events, pop-ups, activations and on-ground marketing initiatives."},{title:"Content Strategy",desc:"Developing content ideas and campaigns aligned with brand positioning, launches and marketing objectives."}]},{company:"Gramiyaa",icon:"leaf-outline",role:"Brand Executive",location:"On-site",date:"Aug 2024 — Jan 2026",duration:"1 yr 6 mos",type:"Full-time",summary:"Drove offline brand growth through events, barter partnerships and a new B2B channel — while growing the brand's LinkedIn presence.",responsibilities:[{title:"On-ground Events",desc:"Executed 4 on-ground events every month, focused on community engagement and consumer education around wood cold-pressed oils."},{title:"Barter Partnerships",desc:"Led strategic offline barter collaborations with 10+ cooking class academies, universities and event partners, expanding visibility among students, food enthusiasts and health-conscious audiences."},{title:"New Sales Channel",desc:"Identified and unlocked a new sales channel by onboarding cooking class academies as B2B customers, enabling consistent product sales and long-term partnerships."},{title:"LinkedIn Growth",desc:"Managed and grew Gramiyaa's LinkedIn presence through content strategy, storytelling and audience-first communication."}],metrics:[{value:"40%",label:"Follower count increase"},{value:"147%",label:"Impressions growth"},{value:"93.8%",label:"Rise in reactions"}],metricsNote:"LinkedIn results over a 6-month period."},{company:"Circle Health",icon:"heart-outline",role:"Marketing Associate",location:"Internship",date:"Sep 2024 — Dec 2024",duration:"4 mos",type:"Internship",summary:"Marketing associate internship supporting campaigns and brand communication.",responsibilities:[]},{company:"Oliveboard",icon:"school-outline",role:"Marketing Intern",location:"On-site",date:"Jun 2024 — Aug 2024",duration:"3 mos",type:"Internship",summary:"Marketing internship focused on business marketing, copywriting and marketing support.",responsibilities:[]},{company:"SPIC MACAY — Ram Lal Anand College Chapter",icon:"color-palette-outline",role:"President · Art and Craft Head",location:"Delhi, India · On-site",date:"Apr 2022 — Jun 2024",duration:"2 yrs 3 mos",type:"Part-time",summary:"Led the college chapter as President, and earlier as Art and Craft Head, organising cultural and artistic programmes.",responsibilities:[{title:"President",desc:"Led the chapter Nov 2023 – Jun 2024 (8 mos), steering events, members and college-level coordination."},{title:"Art and Craft Head",desc:"Handled art and craft initiatives Apr 2022 – Oct 2023 (1 yr 7 mos)."}]},{company:"Women Welfare Advisory Committee (WWAC)",icon:"people-outline",role:"Student Coordinator",location:"Delhi, India · On-site",date:"Nov 2023 — Jun 2024",duration:"8 mos",type:"Part-time",summary:"Coordinated student-level initiatives and outreach for the committee.",responsibilities:[]},{company:"Hirav — The Green Society",icon:"flower-outline",role:"Vice President · Student Ambassador",location:"Delhi, India · On-site",date:"Jan 2023 — Jun 2024",duration:"1 yr 6 mos",type:"Part-time",summary:"Served as Vice President and, before that, as Student Ambassador for the environmental society.",responsibilities:[{title:"Vice President",desc:"Led initiatives and members Nov 2023 – Jun 2024 (8 mos)."},{title:"Student Ambassador",desc:"Represented the society Jan 2023 – Oct 2023 (10 mos)."}]},{company:"National Service Scheme",icon:"hand-left-outline",role:"Volunteer",location:"Delhi, India · On-site",date:"Nov 2021 — Nov 2023",duration:"2 yrs 1 mo",type:"Part-time",summary:"Volunteered across community service drives and campus outreach programmes.",responsibilities:[]},{company:"AWAAZ — The English Debating Society",icon:"mic-outline",role:"Content Writer",location:"Delhi, India · On-site",date:"May 2022 — Jul 2023",duration:"1 yr 3 mos",type:"Part-time",summary:"Wrote and edited content for the debating society's events, posts and publications.",responsibilities:[]}],JN="/Arza-demo/assets/azra%20profile-CBGpO8IX.png";function Wr(t){const e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})}const QN=[{code:"+1",country:"United States"},{code:"+1",country:"Canada"},{code:"+7",country:"Russia / Kazakhstan"},{code:"+20",country:"Egypt"},{code:"+27",country:"South Africa"},{code:"+30",country:"Greece"},{code:"+31",country:"Netherlands"},{code:"+32",country:"Belgium"},{code:"+33",country:"France"},{code:"+34",country:"Spain"},{code:"+36",country:"Hungary"},{code:"+39",country:"Italy"},{code:"+40",country:"Romania"},{code:"+41",country:"Switzerland"},{code:"+43",country:"Austria"},{code:"+44",country:"United Kingdom"},{code:"+45",country:"Denmark"},{code:"+46",country:"Sweden"},{code:"+47",country:"Norway"},{code:"+48",country:"Poland"},{code:"+49",country:"Germany"},{code:"+51",country:"Peru"},{code:"+52",country:"Mexico"},{code:"+54",country:"Argentina"},{code:"+55",country:"Brazil"},{code:"+56",country:"Chile"},{code:"+57",country:"Colombia"},{code:"+60",country:"Malaysia"},{code:"+61",country:"Australia"},{code:"+62",country:"Indonesia"},{code:"+63",country:"Philippines"},{code:"+64",country:"New Zealand"},{code:"+65",country:"Singapore"},{code:"+66",country:"Thailand"},{code:"+81",country:"Japan"},{code:"+82",country:"South Korea"},{code:"+84",country:"Vietnam"},{code:"+86",country:"China"},{code:"+90",country:"Turkey"},{code:"+91",country:"India"},{code:"+92",country:"Pakistan"},{code:"+93",country:"Afghanistan"},{code:"+94",country:"Sri Lanka"},{code:"+95",country:"Myanmar"},{code:"+98",country:"Iran"},{code:"+212",country:"Morocco"},{code:"+213",country:"Algeria"},{code:"+216",country:"Tunisia"},{code:"+218",country:"Libya"},{code:"+220",country:"Gambia"},{code:"+233",country:"Ghana"},{code:"+234",country:"Nigeria"},{code:"+249",country:"Sudan"},{code:"+250",country:"Rwanda"},{code:"+251",country:"Ethiopia"},{code:"+254",country:"Kenya"},{code:"+255",country:"Tanzania"},{code:"+256",country:"Uganda"},{code:"+260",country:"Zambia"},{code:"+263",country:"Zimbabwe"},{code:"+351",country:"Portugal"},{code:"+352",country:"Luxembourg"},{code:"+353",country:"Ireland"},{code:"+354",country:"Iceland"},{code:"+358",country:"Finland"},{code:"+359",country:"Bulgaria"},{code:"+370",country:"Lithuania"},{code:"+371",country:"Latvia"},{code:"+372",country:"Estonia"},{code:"+380",country:"Ukraine"},{code:"+381",country:"Serbia"},{code:"+385",country:"Croatia"},{code:"+420",country:"Czech Republic"},{code:"+421",country:"Slovakia"},{code:"+852",country:"Hong Kong"},{code:"+853",country:"Macau"},{code:"+855",country:"Cambodia"},{code:"+880",country:"Bangladesh"},{code:"+886",country:"Taiwan"},{code:"+960",country:"Maldives"},{code:"+962",country:"Jordan"},{code:"+963",country:"Syria"},{code:"+964",country:"Iraq"},{code:"+965",country:"Kuwait"},{code:"+966",country:"Saudi Arabia"},{code:"+967",country:"Yemen"},{code:"+968",country:"Oman"},{code:"+971",country:"United Arab Emirates"},{code:"+972",country:"Israel"},{code:"+973",country:"Bahrain"},{code:"+974",country:"Qatar"},{code:"+975",country:"Bhutan"},{code:"+976",country:"Mongolia"},{code:"+977",country:"Nepal"},{code:"+992",country:"Tajikistan"},{code:"+993",country:"Turkmenistan"},{code:"+994",country:"Azerbaijan"},{code:"+995",country:"Georgia"},{code:"+998",country:"Uzbekistan"}];function eU(){const[t,e]=ce.useState(null),[n,i]=ce.useState("+91"),r=a=>{a.preventDefault();{e("contact");return}},s=()=>{var u,d,f,p;const a=(u=document.getElementById("name"))==null?void 0:u.value.trim(),l=(d=document.getElementById("email"))==null?void 0:d.value.trim();(f=document.getElementById("phone"))==null||f.value.trim();const c=(p=document.getElementById("message"))==null?void 0:p.value.trim();if(!a||!l||!c){alert("Please fill in your name, email and message before sending a WhatsApp message.");return}{alert("WhatsApp number is being added soon. Please use the Email button for now.");return}},o=()=>{var a,l,c,u;(a=document.getElementById("name"))==null||a.value.trim(),(l=document.getElementById("email"))==null||l.value.trim(),(c=document.getElementById("phone"))==null||c.value.trim(),(u=document.getElementById("message"))==null||u.value.trim();{alert("Email is being added soon. Please reach out on LinkedIn in the meantime.");return}};return W.jsxs("div",{className:"page",children:[W.jsxs("header",{className:"hero",id:"home",children:[W.jsx(Q_,{variant:"hero"}),W.jsxs("nav",{className:"navbar",children:[W.jsx("a",{className:"brand",href:"#home",onClick:a=>{a.preventDefault(),Wr("home")},"aria-label":"Azra home",children:"Azra"}),W.jsxs("div",{className:"nav-links",children:[W.jsx("a",{href:"#about",onClick:a=>{a.preventDefault(),Wr("about")},children:"About"}),W.jsx("a",{href:"#experience",onClick:a=>{a.preventDefault(),Wr("experience")},children:"Experience"}),W.jsx("a",{href:"#skills",onClick:a=>{a.preventDefault(),Wr("skills")},children:"Skills"}),W.jsx("a",{href:"#work",onClick:a=>{a.preventDefault(),Wr("work")},children:"Work"}),W.jsx("a",{href:"#contact",onClick:a=>{a.preventDefault(),Wr("contact")},children:"Contact"})]})]}),W.jsxs("div",{className:"hero-content",children:[W.jsx("div",{className:"hero-left",children:W.jsx("div",{className:"hero-photo",children:W.jsx("img",{src:JN,alt:"Azra Fayaz"})})}),W.jsxs("div",{className:"hero-right",children:[W.jsx("p",{className:"eyebrow",children:"Greetings and warm regards"}),W.jsxs("h1",{children:["I’m",W.jsx("br",{}),W.jsx("span",{className:"full-name",children:"AZRA FAYAZ"}),W.jsx("span",{className:"pronouns",children:fr.pronouns}),W.jsx("br",{}),W.jsx("span",{className:"title-line",children:W.jsx(vA,{words:["Marketing Executive","Social Media Manager","Brand & Content Strategist","Influencer Marketing","Events & Partnerships"]})})]}),W.jsx("p",{className:"hero-headline",children:fr.headline}),W.jsxs("p",{children:["Based in ",fr.location,". Currently Marketing Executive at ",fr.company,", building brands across social, content, email and on-ground activations."]}),W.jsx("a",{className:"primary-btn",href:"#contact",onClick:a=>{a.preventDefault(),Wr("contact")},children:"Let’s talk"})]})]})]}),W.jsx(Q_,{variant:"page"}),W.jsxs("main",{children:[W.jsx("section",{className:"section section-about",id:"about",children:W.jsxs("div",{className:"section-inner",children:[W.jsx("h2",{children:"Who am I?"}),W.jsxs("div",{className:"prose",children:[W.jsx("p",{className:"lead",children:"A marketer who builds brands across screens and streets — social feeds, inboxes, creator partnerships and real-world activations."}),W.jsxs("p",{children:["I’m ",fr.name,", a Marketing Executive at ",fr.company,", working across social media management, content creation and design, email marketing, influencer marketing, brand partnerships, on-ground events and content strategy. My work sits where brand positioning meets day-to-day execution — planning the calendar, making the creatives, running the campaigns and reading the numbers afterwards."]}),W.jsx("p",{children:"Before Bambuyu I spent a year and a half as Brand Executive at Gramiyaa, driving offline brand growth with four on-ground events every month, strategic barter collaborations with 10+ cooking academies, universities and event partners, and a new B2B sales channel built by onboarding those academies as customers. Over six months that work grew the brand’s LinkedIn presence by 40% in followers, 147% in impressions and 93.8% in reactions — through content strategy, storytelling and audience-first communication."}),W.jsx("p",{children:"Alongside brand work I have always stayed close to people and community — as President of SPIC MACAY’s Ram Lal Anand College chapter, Vice President of Hirav (The Green Society), Student Coordinator of the Women Welfare Advisory Committee, a volunteer with the National Service Scheme and Content Writer with AWAAZ, the English Debating Society. It is where I learned to organise, persuade and lead."}),W.jsxs("p",{children:["I studied at ",fr.education," and the University of Delhi, and I work across sales and marketing, FMCG, event management, content writing and social media management. Open to relocation and always up for a brand that wants to grow the interesting way."]})]}),W.jsxs("ul",{className:"fact-row",children:[W.jsxs("li",{children:[W.jsx("span",{className:"fact-value",children:"9"}),W.jsx("span",{className:"fact-label",children:"roles across brand, campus & community"})]}),W.jsxs("li",{children:[W.jsx("span",{className:"fact-value",children:"10+"}),W.jsx("span",{className:"fact-label",children:"barter partnerships led"})]}),W.jsxs("li",{children:[W.jsx("span",{className:"fact-value",children:"48"}),W.jsx("span",{className:"fact-label",children:"on-ground events in a year"})]}),W.jsxs("li",{children:[W.jsx("span",{className:"fact-value",children:"147%"}),W.jsx("span",{className:"fact-label",children:"LinkedIn impressions growth"})]})]})]})}),W.jsx("section",{className:"section section-experience",id:"experience",children:W.jsxs("div",{className:"section-inner",children:[W.jsx("h2",{children:"Experience"}),W.jsx("ol",{className:"timeline",children:ZN.map(a=>W.jsxs("li",{className:"tl-item",children:[W.jsx("span",{className:"tl-marker","aria-hidden":"true",children:W.jsx("ion-icon",{name:a.icon})}),W.jsxs("div",{className:"tl-body",children:[W.jsxs("div",{className:"tl-head",children:[W.jsxs("div",{className:"tl-company",children:[a.company,W.jsx("span",{className:"tl-type",children:a.type})]}),W.jsxs("div",{className:"tl-date",children:[a.date," · ",a.duration]})]}),W.jsx("div",{className:"tl-role",children:a.role}),W.jsx("div",{className:"tl-location",children:a.location}),W.jsx("p",{className:"tl-summary",children:a.summary}),a.responsibilities.length>0&&W.jsx("ul",{className:"tl-points",children:a.responsibilities.map(l=>W.jsxs("li",{children:[W.jsx("strong",{children:l.title}),W.jsx("span",{children:l.desc})]},l.title))}),a.metrics&&W.jsxs("div",{className:"tl-metrics",children:[a.metrics.map(l=>W.jsxs("div",{className:"tl-metric",children:[W.jsx("span",{className:"tl-metric-value",children:l.value}),W.jsx("span",{className:"tl-metric-label",children:l.label})]},l.label)),W.jsx("p",{className:"tl-metrics-note",children:a.metricsNote})]})]})]},a.company))})]})}),W.jsx("section",{className:"section section-skills",id:"skills",children:W.jsxs("div",{className:"section-inner",children:[W.jsx("h2",{children:"Skills"}),W.jsx(EP,{categories:qN,skills:KN})]})}),W.jsx("section",{className:"section section-work",id:"work",children:W.jsxs("div",{className:"section-inner",children:[W.jsx("h2",{children:"Selected Work"}),W.jsxs("div",{className:"work-feature",children:[W.jsx("div",{className:"work-feature-tag",children:"Gramiyaa · Brand growth"}),W.jsx("h3",{children:"Growing an offline-first oil brand into a connected community"}),W.jsx("p",{children:"A year and a half of compounding brand work: monthly on-ground events for consumer education around wood cold-pressed oils, a barter network with cooking academies, universities and event partners, and a B2B channel that turned those partners into repeat customers."}),W.jsxs("div",{className:"work-metrics",children:[W.jsxs("div",{className:"work-metric",children:[W.jsx("span",{className:"work-metric-value",children:"4 / mo"}),W.jsx("span",{className:"work-metric-label",children:"on-ground events executed"})]}),W.jsxs("div",{className:"work-metric",children:[W.jsx("span",{className:"work-metric-value",children:"10+"}),W.jsx("span",{className:"work-metric-label",children:"barter partners onboarded"})]}),W.jsxs("div",{className:"work-metric",children:[W.jsx("span",{className:"work-metric-value",children:"40%"}),W.jsx("span",{className:"work-metric-label",children:"follower growth"})]}),W.jsxs("div",{className:"work-metric",children:[W.jsx("span",{className:"work-metric-value",children:"93.8%"}),W.jsx("span",{className:"work-metric-label",children:"rise in reactions"})]})]}),W.jsxs("ul",{className:"work-tags",children:[W.jsx("li",{children:"Event Management"}),W.jsx("li",{children:"Barter Collaborations"}),W.jsx("li",{children:"B2B Onboarding"}),W.jsx("li",{children:"LinkedIn Strategy"}),W.jsx("li",{children:"FMCG"})]})]}),W.jsx("h3",{className:"work-subheading",children:"What I actually do"}),W.jsxs("ul",{className:"work-list",children:[W.jsxs("li",{children:[W.jsx("strong",{children:"Social & content."})," Plan the calendar, make the creatives, publish, engage and report back on what moved."]}),W.jsxs("li",{children:[W.jsx("strong",{children:"Email."})," Run campaigns end-to-end — strategy, copy, design, send and performance tracking."]}),W.jsxs("li",{children:[W.jsx("strong",{children:"Influencer."})," Source creators, negotiate deliverables and manage the collaboration through to published content."]}),W.jsxs("li",{children:[W.jsx("strong",{children:"Partnerships."})," Build barter and brand collaborations that trade reach and relevance instead of just budget."]}),W.jsxs("li",{children:[W.jsx("strong",{children:"Events."})," Take brand activations offline — pop-ups, campus drives and on-ground consumer education."]})]}),W.jsx("h3",{className:"work-subheading",children:"Education"}),W.jsxs("ul",{className:"work-list work-list-plain",children:[W.jsx("li",{children:fr.education}),W.jsx("li",{children:"University of Delhi"})]})]})}),W.jsx("section",{className:"section section-contact",id:"contact",children:W.jsxs("div",{className:"section-inner",children:[W.jsx("h2",{children:"Contact"}),W.jsx("p",{className:"contact-intro",children:"Open to marketing roles and brand collaborations. Phone and email are being added soon — for now, the quickest way to reach me is the form or LinkedIn."}),W.jsxs("form",{className:"contact-form",onSubmit:r,children:[W.jsx("label",{htmlFor:"name",children:"Name"}),W.jsx("input",{id:"name",name:"name",type:"text",required:!0}),W.jsx("label",{htmlFor:"email",children:"Email"}),W.jsx("input",{id:"email",name:"email",type:"email",required:!0}),W.jsx("label",{htmlFor:"phone",children:"Phone"}),W.jsxs("div",{className:"phone-field",children:[W.jsx("select",{className:"country-select",value:n,onChange:a=>i(a.target.value),"aria-label":"Country code",children:QN.map(a=>W.jsxs("option",{value:a.code,children:[a.country," (",a.code,")"]},`${a.code}-${a.country}`))}),W.jsx("input",{id:"phone",name:"phone",type:"tel",placeholder:"Phone number",required:!0})]}),W.jsx("input",{type:"hidden",name:"country_code",value:n}),W.jsx("label",{htmlFor:"message",children:"Message"}),W.jsx("textarea",{id:"message",name:"message",rows:"5",required:!0}),W.jsxs("div",{className:"button-row",children:[W.jsxs("button",{type:"button",onClick:s,children:[W.jsx("ion-icon",{name:"logo-whatsapp"})," WhatsApp"]}),W.jsxs("button",{type:"button",onClick:o,children:[W.jsx("ion-icon",{name:"mail-outline"})," Email"]})]}),t==="contact"&&W.jsx("p",{className:"submit-message","data-status":"info",children:"The form is being connected to an inbox. Please reach out on LinkedIn in the meantime."}),t==="ok"&&W.jsx("p",{className:"submit-message","data-status":"success",children:"Thanks for reaching out. I’ll get back to you soon."})]}),W.jsx("div",{className:"social-row",children:W.jsx("a",{href:"https://www.linkedin.com/in/azra-fayaz-4307bb378/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:W.jsx("ion-icon",{name:"logo-linkedin"})})})]})})]})]})}function tU(){return W.jsx(eU,{})}_d.createRoot(document.getElementById("root")).render(W.jsx(sT.StrictMode,{children:W.jsx(tU,{})}));
