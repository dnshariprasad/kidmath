const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-D5DBoTFW.js","assets/gameData-CSuRBhAl.js","assets/arrow-up-down-Ci-tZlyT.js","assets/award-BgCW9t3J.js","assets/map-pin-Dsr4Ztuv.js","assets/book-open-OKdlXGhw.js","assets/timer-BNkGhE6w.js","assets/calculator-BZ0OlEVT.js","assets/calendar-days-DfuwDCYd.js","assets/calendar-DTSSIGW9.js","assets/rotate-ccw-CNQFLi9P.js","assets/circle-check-BzJcfKOg.js","assets/circle-question-mark-DIYmu3r6.js","assets/spell-check-7VH4VW7_.js","assets/eye-CnaHSvEK.js","assets/grid-3x3-VxyzfSFZ.js","assets/hash-UnKXaxu6.js","assets/heart-pulse-D7utvON9.js","assets/info-CUGjh8Hh.js","assets/languages-D6b-aWzH.js","assets/user-plus-CiVhzPF0.js","assets/scale-HMRWkU4g.js","assets/search-BYy0EfCC.js","assets/shapes-CKZvW5jm.js","assets/trash-2-B9e1ZXDM.js","assets/wand-sparkles-DiOZxu3q.js","assets/index-CmMhpEQv.js","assets/index-HBIaM-fr.js","assets/index-BE5QsrKe.js","assets/SpeakIcon-B2dlRdpW.js","assets/index-CEYcl8J1.js","assets/PreviousIcon-Hi7xVtmc.js","assets/ChallengeHeader-DZVXCHyh.js","assets/DifficultyPicker-CuuJKZSt.js","assets/index-CPZcoY5f.js","assets/wordUtils-DPgh885X.js","assets/index-CkrqFw9e.js","assets/confetti.module-ONDKWxYZ.js","assets/index-Dtt2ZUCR.js","assets/index-_uJkVNX8.js","assets/index-DopNI3XC.js","assets/index-DkE7dyud.js","assets/weeksData-C7SqtnuX.js","assets/learnStyles-DndA0zwu.js","assets/index-DWa9PX-Y.js","assets/monthsData-CEA7U3aY.js","assets/index-BHIgxQsQ.js","assets/index-CRitOND-.js","assets/index-CmXwuIfF.js","assets/index-DDImc0Ve.js","assets/numbersData-Dr7ACkQG.js","assets/index-DP46__mA.js","assets/index-CPrFlBw_.js","assets/index-Cdgn9B1C.js","assets/index-BoFlNC0G.js","assets/index-C_m3YLw8.js","assets/index-CQ9nnqLS.js","assets/scienceData-CCsDxGZ3.js","assets/index-ncCWvrSw.js","assets/index-gXFTGNU1.js","assets/FeedbackDisplay-BPXdYUxz.js","assets/index-BvL6zFx6.js","assets/mathUtils-B1Q27TTV.js","assets/index-B_iTRZnE.js","assets/index-CKhKfy0O.js","assets/index-BjIEFDyK.js","assets/testService-CTrRxNIP.js","assets/index-DROca__h.js","assets/index-dXDFAUt1.js"])))=>i.map(i=>d[i]);
var rD=Object.defineProperty;var iD=(t,e,n)=>e in t?rD(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var gE=(t,e,n)=>iD(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const sD="modulepreload",oD=function(t){return"/kiddoo/"+t},yE={},tt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(n.map(h=>{if(h=oD(h),h in yE)return;yE[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const y=document.createElement("link");if(y.rel=p?"stylesheet":sD,p||(y.as="script"),y.crossOrigin="",y.href=h,c&&y.setAttribute("nonce",c),document.head.appendChild(y),p)return new Promise((w,T)=>{y.addEventListener("load",w),y.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};function $1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var eg={exports:{}},Du={},tg={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vE;function aD(){if(vE)return Le;vE=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function w(W){return W===null||typeof W!="object"?null:(W=y&&W[y]||W["@@iterator"],typeof W=="function"?W:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,P={};function k(W,J,Ae){this.props=W,this.context=J,this.refs=P,this.updater=Ae||T}k.prototype.isReactComponent={},k.prototype.setState=function(W,J){if(typeof W!="object"&&typeof W!="function"&&W!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,W,J,"setState")},k.prototype.forceUpdate=function(W){this.updater.enqueueForceUpdate(this,W,"forceUpdate")};function b(){}b.prototype=k.prototype;function F(W,J,Ae){this.props=W,this.context=J,this.refs=P,this.updater=Ae||T}var U=F.prototype=new b;U.constructor=F,x(U,k.prototype),U.isPureReactComponent=!0;var $=Array.isArray,H=Object.prototype.hasOwnProperty,X={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function I(W,J,Ae){var Ie,De={},be=null,$e=null;if(J!=null)for(Ie in J.ref!==void 0&&($e=J.ref),J.key!==void 0&&(be=""+J.key),J)H.call(J,Ie)&&!C.hasOwnProperty(Ie)&&(De[Ie]=J[Ie]);var Me=arguments.length-2;if(Me===1)De.children=Ae;else if(1<Me){for(var Ue=Array(Me),Nt=0;Nt<Me;Nt++)Ue[Nt]=arguments[Nt+2];De.children=Ue}if(W&&W.defaultProps)for(Ie in Me=W.defaultProps,Me)De[Ie]===void 0&&(De[Ie]=Me[Ie]);return{$$typeof:t,type:W,key:be,ref:$e,props:De,_owner:X.current}}function R(W,J){return{$$typeof:t,type:W.type,key:J,ref:W.ref,props:W.props,_owner:W._owner}}function D(W){return typeof W=="object"&&W!==null&&W.$$typeof===t}function O(W){var J={"=":"=0",":":"=2"};return"$"+W.replace(/[=:]/g,function(Ae){return J[Ae]})}var B=/\/+/g;function M(W,J){return typeof W=="object"&&W!==null&&W.key!=null?O(""+W.key):J.toString(36)}function Re(W,J,Ae,Ie,De){var be=typeof W;(be==="undefined"||be==="boolean")&&(W=null);var $e=!1;if(W===null)$e=!0;else switch(be){case"string":case"number":$e=!0;break;case"object":switch(W.$$typeof){case t:case e:$e=!0}}if($e)return $e=W,De=De($e),W=Ie===""?"."+M($e,0):Ie,$(De)?(Ae="",W!=null&&(Ae=W.replace(B,"$&/")+"/"),Re(De,J,Ae,"",function(Nt){return Nt})):De!=null&&(D(De)&&(De=R(De,Ae+(!De.key||$e&&$e.key===De.key?"":(""+De.key).replace(B,"$&/")+"/")+W)),J.push(De)),1;if($e=0,Ie=Ie===""?".":Ie+":",$(W))for(var Me=0;Me<W.length;Me++){be=W[Me];var Ue=Ie+M(be,Me);$e+=Re(be,J,Ae,Ue,De)}else if(Ue=w(W),typeof Ue=="function")for(W=Ue.call(W),Me=0;!(be=W.next()).done;)be=be.value,Ue=Ie+M(be,Me++),$e+=Re(be,J,Ae,Ue,De);else if(be==="object")throw J=String(W),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(W).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return $e}function Ge(W,J,Ae){if(W==null)return W;var Ie=[],De=0;return Re(W,Ie,"","",function(be){return J.call(Ae,be,De++)}),Ie}function Xe(W){if(W._status===-1){var J=W._result;J=J(),J.then(function(Ae){(W._status===0||W._status===-1)&&(W._status=1,W._result=Ae)},function(Ae){(W._status===0||W._status===-1)&&(W._status=2,W._result=Ae)}),W._status===-1&&(W._status=0,W._result=J)}if(W._status===1)return W._result.default;throw W._result}var Je={current:null},re={transition:null},ce={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:re,ReactCurrentOwner:X};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:Ge,forEach:function(W,J,Ae){Ge(W,function(){J.apply(this,arguments)},Ae)},count:function(W){var J=0;return Ge(W,function(){J++}),J},toArray:function(W){return Ge(W,function(J){return J})||[]},only:function(W){if(!D(W))throw Error("React.Children.only expected to receive a single React element child.");return W}},Le.Component=k,Le.Fragment=n,Le.Profiler=i,Le.PureComponent=F,Le.StrictMode=r,Le.Suspense=h,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Le.act=ue,Le.cloneElement=function(W,J,Ae){if(W==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+W+".");var Ie=x({},W.props),De=W.key,be=W.ref,$e=W._owner;if(J!=null){if(J.ref!==void 0&&(be=J.ref,$e=X.current),J.key!==void 0&&(De=""+J.key),W.type&&W.type.defaultProps)var Me=W.type.defaultProps;for(Ue in J)H.call(J,Ue)&&!C.hasOwnProperty(Ue)&&(Ie[Ue]=J[Ue]===void 0&&Me!==void 0?Me[Ue]:J[Ue])}var Ue=arguments.length-2;if(Ue===1)Ie.children=Ae;else if(1<Ue){Me=Array(Ue);for(var Nt=0;Nt<Ue;Nt++)Me[Nt]=arguments[Nt+2];Ie.children=Me}return{$$typeof:t,type:W.type,key:De,ref:be,props:Ie,_owner:$e}},Le.createContext=function(W){return W={$$typeof:l,_currentValue:W,_currentValue2:W,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},W.Provider={$$typeof:a,_context:W},W.Consumer=W},Le.createElement=I,Le.createFactory=function(W){var J=I.bind(null,W);return J.type=W,J},Le.createRef=function(){return{current:null}},Le.forwardRef=function(W){return{$$typeof:c,render:W}},Le.isValidElement=D,Le.lazy=function(W){return{$$typeof:m,_payload:{_status:-1,_result:W},_init:Xe}},Le.memo=function(W,J){return{$$typeof:p,type:W,compare:J===void 0?null:J}},Le.startTransition=function(W){var J=re.transition;re.transition={};try{W()}finally{re.transition=J}},Le.unstable_act=ue,Le.useCallback=function(W,J){return Je.current.useCallback(W,J)},Le.useContext=function(W){return Je.current.useContext(W)},Le.useDebugValue=function(){},Le.useDeferredValue=function(W){return Je.current.useDeferredValue(W)},Le.useEffect=function(W,J){return Je.current.useEffect(W,J)},Le.useId=function(){return Je.current.useId()},Le.useImperativeHandle=function(W,J,Ae){return Je.current.useImperativeHandle(W,J,Ae)},Le.useInsertionEffect=function(W,J){return Je.current.useInsertionEffect(W,J)},Le.useLayoutEffect=function(W,J){return Je.current.useLayoutEffect(W,J)},Le.useMemo=function(W,J){return Je.current.useMemo(W,J)},Le.useReducer=function(W,J,Ae){return Je.current.useReducer(W,J,Ae)},Le.useRef=function(W){return Je.current.useRef(W)},Le.useState=function(W){return Je.current.useState(W)},Le.useSyncExternalStore=function(W,J,Ae){return Je.current.useSyncExternalStore(W,J,Ae)},Le.useTransition=function(){return Je.current.useTransition()},Le.version="18.3.1",Le}var _E;function Bd(){return _E||(_E=1,tg.exports=aD()),tg.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wE;function lD(){if(wE)return Du;wE=1;var t=Bd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,h,p){var m,y={},w=null,T=null;p!==void 0&&(w=""+p),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(T=h.ref);for(m in h)r.call(h,m)&&!a.hasOwnProperty(m)&&(y[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)y[m]===void 0&&(y[m]=h[m]);return{$$typeof:e,type:c,key:w,ref:T,props:y,_owner:i.current}}return Du.Fragment=n,Du.jsx=l,Du.jsxs=l,Du}var EE;function uD(){return EE||(EE=1,eg.exports=lD()),eg.exports}var V=uD(),N=Bd();const tr=$1(N);var rf={},ng={exports:{}},In={},rg={exports:{}},ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var TE;function cD(){return TE||(TE=1,function(t){function e(re,ce){var ue=re.length;re.push(ce);e:for(;0<ue;){var W=ue-1>>>1,J=re[W];if(0<i(J,ce))re[W]=ce,re[ue]=J,ue=W;else break e}}function n(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var ce=re[0],ue=re.pop();if(ue!==ce){re[0]=ue;e:for(var W=0,J=re.length,Ae=J>>>1;W<Ae;){var Ie=2*(W+1)-1,De=re[Ie],be=Ie+1,$e=re[be];if(0>i(De,ue))be<J&&0>i($e,De)?(re[W]=$e,re[be]=ue,W=be):(re[W]=De,re[Ie]=ue,W=Ie);else if(be<J&&0>i($e,ue))re[W]=$e,re[be]=ue,W=be;else break e}}return ce}function i(re,ce){var ue=re.sortIndex-ce.sortIndex;return ue!==0?ue:re.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var h=[],p=[],m=1,y=null,w=3,T=!1,x=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(re){for(var ce=n(p);ce!==null;){if(ce.callback===null)r(p);else if(ce.startTime<=re)r(p),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=n(p)}}function $(re){if(P=!1,U(re),!x)if(n(h)!==null)x=!0,Xe(H);else{var ce=n(p);ce!==null&&Je($,ce.startTime-re)}}function H(re,ce){x=!1,P&&(P=!1,b(I),I=-1),T=!0;var ue=w;try{for(U(ce),y=n(h);y!==null&&(!(y.expirationTime>ce)||re&&!O());){var W=y.callback;if(typeof W=="function"){y.callback=null,w=y.priorityLevel;var J=W(y.expirationTime<=ce);ce=t.unstable_now(),typeof J=="function"?y.callback=J:y===n(h)&&r(h),U(ce)}else r(h);y=n(h)}if(y!==null)var Ae=!0;else{var Ie=n(p);Ie!==null&&Je($,Ie.startTime-ce),Ae=!1}return Ae}finally{y=null,w=ue,T=!1}}var X=!1,C=null,I=-1,R=5,D=-1;function O(){return!(t.unstable_now()-D<R)}function B(){if(C!==null){var re=t.unstable_now();D=re;var ce=!0;try{ce=C(!0,re)}finally{ce?M():(X=!1,C=null)}}else X=!1}var M;if(typeof F=="function")M=function(){F(B)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Ge=Re.port2;Re.port1.onmessage=B,M=function(){Ge.postMessage(null)}}else M=function(){k(B,0)};function Xe(re){C=re,X||(X=!0,M())}function Je(re,ce){I=k(function(){re(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(re){re.callback=null},t.unstable_continueExecution=function(){x||T||(x=!0,Xe(H))},t.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(re){switch(w){case 1:case 2:case 3:var ce=3;break;default:ce=w}var ue=w;w=ce;try{return re()}finally{w=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(re,ce){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ue=w;w=re;try{return ce()}finally{w=ue}},t.unstable_scheduleCallback=function(re,ce,ue){var W=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?W+ue:W):ue=W,re){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ue+J,re={id:m++,callback:ce,priorityLevel:re,startTime:ue,expirationTime:J,sortIndex:-1},ue>W?(re.sortIndex=ue,e(p,re),n(h)===null&&re===n(p)&&(P?(b(I),I=-1):P=!0,Je($,ue-W))):(re.sortIndex=J,e(h,re),x||T||(x=!0,Xe(H))),re},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(re){var ce=w;return function(){var ue=w;w=ce;try{return re.apply(this,arguments)}finally{w=ue}}}}(ig)),ig}var SE;function hD(){return SE||(SE=1,rg.exports=cD()),rg.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xE;function fD(){if(xE)return In;xE=1;var t=Bd(),e=hD();function n(s){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+s,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+s+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function a(s,o){l(s,o),l(s+"Capture",o)}function l(s,o){for(i[s]=o,s=0;s<o.length;s++)r.add(o[s])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},y={};function w(s){return h.call(y,s)?!0:h.call(m,s)?!1:p.test(s)?y[s]=!0:(m[s]=!0,!1)}function T(s,o,u,d){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:u!==null?!u.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function x(s,o,u,d){if(o===null||typeof o>"u"||T(s,o,u,d))return!0;if(d)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function P(s,o,u,d,g,v,S){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=u,this.propertyName=s,this.type=o,this.sanitizeURL=v,this.removeEmptyString=S}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){k[s]=new P(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var o=s[0];k[o]=new P(o,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){k[s]=new P(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){k[s]=new P(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){k[s]=new P(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){k[s]=new P(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){k[s]=new P(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){k[s]=new P(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){k[s]=new P(s,5,!1,s.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function F(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var o=s.replace(b,F);k[o]=new P(o,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var o=s.replace(b,F);k[o]=new P(o,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var o=s.replace(b,F);k[o]=new P(o,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){k[s]=new P(s,1,!1,s.toLowerCase(),null,!1,!1)}),k.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){k[s]=new P(s,1,!1,s.toLowerCase(),null,!0,!0)});function U(s,o,u,d){var g=k.hasOwnProperty(o)?k[o]:null;(g!==null?g.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(x(o,u,g,d)&&(u=null),d||g===null?w(o)&&(u===null?s.removeAttribute(o):s.setAttribute(o,""+u)):g.mustUseProperty?s[g.propertyName]=u===null?g.type===3?!1:"":u:(o=g.attributeName,d=g.attributeNamespace,u===null?s.removeAttribute(o):(g=g.type,u=g===3||g===4&&u===!0?"":""+u,d?s.setAttributeNS(d,o,u):s.setAttribute(o,u))))}var $=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),X=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),O=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),re=Symbol.iterator;function ce(s){return s===null||typeof s!="object"?null:(s=re&&s[re]||s["@@iterator"],typeof s=="function"?s:null)}var ue=Object.assign,W;function J(s){if(W===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);W=o&&o[1]||""}return`
`+W+s}var Ae=!1;function Ie(s,o){if(!s||Ae)return"";Ae=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(Q){var d=Q}Reflect.construct(s,[],o)}else{try{o.call()}catch(Q){d=Q}s.call(o.prototype)}else{try{throw Error()}catch(Q){d=Q}s()}}catch(Q){if(Q&&d&&typeof Q.stack=="string"){for(var g=Q.stack.split(`
`),v=d.stack.split(`
`),S=g.length-1,L=v.length-1;1<=S&&0<=L&&g[S]!==v[L];)L--;for(;1<=S&&0<=L;S--,L--)if(g[S]!==v[L]){if(S!==1||L!==1)do if(S--,L--,0>L||g[S]!==v[L]){var j=`
`+g[S].replace(" at new "," at ");return s.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",s.displayName)),j}while(1<=S&&0<=L);break}}}finally{Ae=!1,Error.prepareStackTrace=u}return(s=s?s.displayName||s.name:"")?J(s):""}function De(s){switch(s.tag){case 5:return J(s.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return s=Ie(s.type,!1),s;case 11:return s=Ie(s.type.render,!1),s;case 1:return s=Ie(s.type,!0),s;default:return""}}function be(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case C:return"Fragment";case X:return"Portal";case R:return"Profiler";case I:return"StrictMode";case M:return"Suspense";case Re:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case O:return(s.displayName||"Context")+".Consumer";case D:return(s._context.displayName||"Context")+".Provider";case B:var o=s.render;return s=s.displayName,s||(s=o.displayName||o.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case Ge:return o=s.displayName||null,o!==null?o:be(s.type)||"Memo";case Xe:o=s._payload,s=s._init;try{return be(s(o))}catch{}}return null}function $e(s){var o=s.type;switch(s.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=o.render,s=s.displayName||s.name||"",o.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(o);case 8:return o===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Me(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Ue(s){var o=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Nt(s){var o=Ue(s)?"checked":"value",u=Object.getOwnPropertyDescriptor(s.constructor.prototype,o),d=""+s[o];if(!s.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var g=u.get,v=u.set;return Object.defineProperty(s,o,{configurable:!0,get:function(){return g.call(this)},set:function(S){d=""+S,v.call(this,S)}}),Object.defineProperty(s,o,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(S){d=""+S},stopTracking:function(){s._valueTracker=null,delete s[o]}}}}function ur(s){s._valueTracker||(s._valueTracker=Nt(s))}function _n(s){if(!s)return!1;var o=s._valueTracker;if(!o)return!0;var u=o.getValue(),d="";return s&&(d=Ue(s)?s.checked?"true":"false":s.value),s=d,s!==u?(o.setValue(s),!0):!1}function Bi(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function na(s,o){var u=o.checked;return ue({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??s._wrapperState.initialChecked})}function zc(s,o){var u=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;u=Me(o.value!=null?o.value:u),s._wrapperState={initialChecked:d,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ra(s,o){o=o.checked,o!=null&&U(s,"checked",o,!1)}function Js(s,o){ra(s,o);var u=Me(o.value),d=o.type;if(u!=null)d==="number"?(u===0&&s.value===""||s.value!=u)&&(s.value=""+u):s.value!==""+u&&(s.value=""+u);else if(d==="submit"||d==="reset"){s.removeAttribute("value");return}o.hasOwnProperty("value")?It(s,o.type,u):o.hasOwnProperty("defaultValue")&&It(s,o.type,Me(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(s.defaultChecked=!!o.defaultChecked)}function jl(s,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+s._wrapperState.initialValue,u||o===s.value||(s.value=o),s.defaultValue=o}u=s.name,u!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,u!==""&&(s.name=u)}function It(s,o,u){(o!=="number"||Bi(s.ownerDocument)!==s)&&(u==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+u&&(s.defaultValue=""+u))}var Et=Array.isArray;function cr(s,o,u,d){if(s=s.options,o){o={};for(var g=0;g<u.length;g++)o["$"+u[g]]=!0;for(u=0;u<s.length;u++)g=o.hasOwnProperty("$"+s[u].value),s[u].selected!==g&&(s[u].selected=g),g&&d&&(s[u].defaultSelected=!0)}else{for(u=""+Me(u),o=null,g=0;g<s.length;g++){if(s[g].value===u){s[g].selected=!0,d&&(s[g].defaultSelected=!0);return}o!==null||s[g].disabled||(o=s[g])}o!==null&&(o.selected=!0)}}function $l(s,o){if(o.dangerouslySetInnerHTML!=null)throw Error(n(91));return ue({},o,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function Ul(s,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(n(92));if(Et(u)){if(1<u.length)throw Error(n(93));u=u[0]}o=u}o==null&&(o=""),u=o}s._wrapperState={initialValue:Me(u)}}function Bc(s,o){var u=Me(o.value),d=Me(o.defaultValue);u!=null&&(u=""+u,u!==s.value&&(s.value=u),o.defaultValue==null&&s.defaultValue!==u&&(s.defaultValue=u)),d!=null&&(s.defaultValue=""+d)}function Wi(s){var o=s.textContent;o===s._wrapperState.initialValue&&o!==""&&o!==null&&(s.value=o)}function zl(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ia(s,o){return s==null||s==="http://www.w3.org/1999/xhtml"?zl(o):s==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Hi,Wc=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,d,g){MSApp.execUnsafeLocalFunction(function(){return s(o,u,d,g)})}:s}(function(s,o){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=o;else{for(Hi=Hi||document.createElement("div"),Hi.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Hi.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;o.firstChild;)s.appendChild(o.firstChild)}});function Zs(s,o){if(o){var u=s.firstChild;if(u&&u===s.lastChild&&u.nodeType===3){u.nodeValue=o;return}}s.textContent=o}var qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Hc=["Webkit","ms","Moz","O"];Object.keys(qi).forEach(function(s){Hc.forEach(function(o){o=o+s.charAt(0).toUpperCase()+s.substring(1),qi[o]=qi[s]})});function Ki(s,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||qi.hasOwnProperty(s)&&qi[s]?(""+o).trim():o+"px"}function sa(s,o){s=s.style;for(var u in o)if(o.hasOwnProperty(u)){var d=u.indexOf("--")===0,g=Ki(u,o[u],d);u==="float"&&(u="cssFloat"),d?s.setProperty(u,g):s[u]=g}}var Bl=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hr(s,o){if(o){if(Bl[s]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(n(137,s));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(n(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(n(61))}if(o.style!=null&&typeof o.style!="object")throw Error(n(62))}}function oa(s,o){if(s.indexOf("-")===-1)return typeof o.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gi=null;function aa(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var ci=null,hi=null,vt=null;function Wl(s){if(s=yu(s)){if(typeof ci!="function")throw Error(n(280));var o=s.stateNode;o&&(o=vh(o),ci(s.stateNode,s.type,o))}}function Qi(s){hi?vt?vt.push(s):vt=[s]:hi=s}function Yi(){if(hi){var s=hi,o=vt;if(vt=hi=null,Wl(s),o)for(s=0;s<o.length;s++)Wl(o[s])}}function qc(s,o){return s(o)}function Kc(){}var Vr=!1;function Gc(s,o,u){if(Vr)return s(o,u);Vr=!0;try{return qc(s,o,u)}finally{Vr=!1,(hi!==null||vt!==null)&&(Kc(),Yi())}}function eo(s,o){var u=s.stateNode;if(u===null)return null;var d=vh(u);if(d===null)return null;u=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(s=s.type,d=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!d;break e;default:s=!1}if(s)return null;if(u&&typeof u!="function")throw Error(n(231,o,typeof u));return u}var Xi=!1;if(c)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{Xi=!1}function Qc(s,o,u,d,g,v,S,L,j){var Q=Array.prototype.slice.call(arguments,3);try{o.apply(u,Q)}catch(ne){this.onError(ne)}}var fi=!1,Nr=null,la=!1,Wn=null,Yc={onError:function(s){fi=!0,Nr=s}};function Xc(s,o,u,d,g,v,S,L,j){fi=!1,Nr=null,Qc.apply(Yc,arguments)}function Hl(s,o,u,d,g,v,S,L,j){if(Xc.apply(this,arguments),fi){if(fi){var Q=Nr;fi=!1,Nr=null}else throw Error(n(198));la||(la=!0,Wn=Q)}}function fr(s){var o=s,u=s;if(s.alternate)for(;o.return;)o=o.return;else{s=o;do o=s,o.flags&4098&&(u=o.return),s=o.return;while(s)}return o.tag===3?u:null}function ql(s){if(s.tag===13){var o=s.memoizedState;if(o===null&&(s=s.alternate,s!==null&&(o=s.memoizedState)),o!==null)return o.dehydrated}return null}function Jc(s){if(fr(s)!==s)throw Error(n(188))}function Zc(s){var o=s.alternate;if(!o){if(o=fr(s),o===null)throw Error(n(188));return o!==s?null:s}for(var u=s,d=o;;){var g=u.return;if(g===null)break;var v=g.alternate;if(v===null){if(d=g.return,d!==null){u=d;continue}break}if(g.child===v.child){for(v=g.child;v;){if(v===u)return Jc(g),s;if(v===d)return Jc(g),o;v=v.sibling}throw Error(n(188))}if(u.return!==d.return)u=g,d=v;else{for(var S=!1,L=g.child;L;){if(L===u){S=!0,u=g,d=v;break}if(L===d){S=!0,d=g,u=v;break}L=L.sibling}if(!S){for(L=v.child;L;){if(L===u){S=!0,u=v,d=g;break}if(L===d){S=!0,d=v,u=g;break}L=L.sibling}if(!S)throw Error(n(189))}}if(u.alternate!==d)throw Error(n(190))}if(u.tag!==3)throw Error(n(188));return u.stateNode.current===u?s:o}function eh(s){return s=Zc(s),s!==null?to(s):null}function to(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var o=to(s);if(o!==null)return o;s=s.sibling}return null}var Kl=e.unstable_scheduleCallback,ua=e.unstable_cancelCallback,no=e.unstable_shouldYield,di=e.unstable_requestPaint,ot=e.unstable_now,bp=e.unstable_getCurrentPriorityLevel,ca=e.unstable_ImmediatePriority,Gl=e.unstable_UserBlockingPriority,ro=e.unstable_NormalPriority,Ql=e.unstable_LowPriority,ha=e.unstable_IdlePriority,io=null,Pn=null;function th(s){if(Pn&&typeof Pn.onCommitFiberRoot=="function")try{Pn.onCommitFiberRoot(io,s,void 0,(s.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:so,Mr=Math.log,Hn=Math.LN2;function so(s){return s>>>=0,s===0?32:31-(Mr(s)/Hn|0)|0}var Lr=64,Zi=4194304;function Ke(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function pi(s,o){var u=s.pendingLanes;if(u===0)return 0;var d=0,g=s.suspendedLanes,v=s.pingedLanes,S=u&268435455;if(S!==0){var L=S&~g;L!==0?d=Ke(L):(v&=S,v!==0&&(d=Ke(v)))}else S=u&~g,S!==0?d=Ke(S):v!==0&&(d=Ke(v));if(d===0)return 0;if(o!==0&&o!==d&&!(o&g)&&(g=d&-d,v=o&-o,g>=v||g===16&&(v&4194240)!==0))return o;if(d&4&&(d|=u&16),o=s.entangledLanes,o!==0)for(s=s.entanglements,o&=d;0<o;)u=31-Rn(o),g=1<<u,d|=s[u],o&=~g;return d}function oo(s,o){switch(s){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ao(s,o){for(var u=s.suspendedLanes,d=s.pingedLanes,g=s.expirationTimes,v=s.pendingLanes;0<v;){var S=31-Rn(v),L=1<<S,j=g[S];j===-1?(!(L&u)||L&d)&&(g[S]=oo(L,o)):j<=o&&(s.expiredLanes|=L),v&=~L}}function Yl(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function Xl(){var s=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),s}function Jl(s){for(var o=[],u=0;31>u;u++)o.push(s);return o}function lo(s,o,u){s.pendingLanes|=o,o!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,o=31-Rn(o),s[o]=u}function Dp(s,o){var u=s.pendingLanes&~o;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=o,s.mutableReadLanes&=o,s.entangledLanes&=o,o=s.entanglements;var d=s.eventTimes;for(s=s.expirationTimes;0<u;){var g=31-Rn(u),v=1<<g;o[g]=0,d[g]=-1,s[g]=-1,u&=~v}}function Zl(s,o){var u=s.entangledLanes|=o;for(s=s.entanglements;u;){var d=31-Rn(u),g=1<<d;g&o|s[d]&o&&(s[d]|=o),u&=~g}}var ze=0;function Or(s){return s&=-s,1<s?4<s?s&268435455?16:536870912:4:1}var eu,fa,tu,nu,ru,Fr=!1,da=[],jr=null,$r=null,qt=null,uo=new Map,mi=new Map,bn=[],nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function es(s,o){switch(s){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":$r=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":uo.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":mi.delete(o.pointerId)}}function dr(s,o,u,d,g,v){return s===null||s.nativeEvent!==v?(s={blockedOn:o,domEventName:u,eventSystemFlags:d,nativeEvent:v,targetContainers:[g]},o!==null&&(o=yu(o),o!==null&&fa(o)),s):(s.eventSystemFlags|=d,o=s.targetContainers,g!==null&&o.indexOf(g)===-1&&o.push(g),s)}function rh(s,o,u,d,g){switch(o){case"focusin":return jr=dr(jr,s,o,u,d,g),!0;case"dragenter":return $r=dr($r,s,o,u,d,g),!0;case"mouseover":return qt=dr(qt,s,o,u,d,g),!0;case"pointerover":var v=g.pointerId;return uo.set(v,dr(uo.get(v)||null,s,o,u,d,g)),!0;case"gotpointercapture":return v=g.pointerId,mi.set(v,dr(mi.get(v)||null,s,o,u,d,g)),!0}return!1}function pa(s){var o=po(s.target);if(o!==null){var u=fr(o);if(u!==null){if(o=u.tag,o===13){if(o=ql(u),o!==null){s.blockedOn=o,ru(s.priority,function(){tu(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){s.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}s.blockedOn=null}function nt(s){if(s.blockedOn!==null)return!1;for(var o=s.targetContainers;0<o.length;){var u=ma(s.domEventName,s.eventSystemFlags,o[0],s.nativeEvent);if(u===null){u=s.nativeEvent;var d=new u.constructor(u.type,u);Gi=d,u.target.dispatchEvent(d),Gi=null}else return o=yu(u),o!==null&&fa(o),s.blockedOn=u,!1;o.shift()}return!0}function ih(s,o,u){nt(s)&&u.delete(o)}function Vp(){Fr=!1,jr!==null&&nt(jr)&&(jr=null),$r!==null&&nt($r)&&($r=null),qt!==null&&nt(qt)&&(qt=null),uo.forEach(ih),mi.forEach(ih)}function ts(s,o){s.blockedOn===o&&(s.blockedOn=null,Fr||(Fr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vp)))}function ns(s){function o(g){return ts(g,s)}if(0<da.length){ts(da[0],s);for(var u=1;u<da.length;u++){var d=da[u];d.blockedOn===s&&(d.blockedOn=null)}}for(jr!==null&&ts(jr,s),$r!==null&&ts($r,s),qt!==null&&ts(qt,s),uo.forEach(o),mi.forEach(o),u=0;u<bn.length;u++)d=bn[u],d.blockedOn===s&&(d.blockedOn=null);for(;0<bn.length&&(u=bn[0],u.blockedOn===null);)pa(u),u.blockedOn===null&&bn.shift()}var gi=$.ReactCurrentBatchConfig,yi=!0;function Ur(s,o,u,d){var g=ze,v=gi.transition;gi.transition=null;try{ze=1,iu(s,o,u,d)}finally{ze=g,gi.transition=v}}function sh(s,o,u,d){var g=ze,v=gi.transition;gi.transition=null;try{ze=4,iu(s,o,u,d)}finally{ze=g,gi.transition=v}}function iu(s,o,u,d){if(yi){var g=ma(s,o,u,d);if(g===null)Wp(s,o,d,zr,u),es(s,d);else if(rh(g,s,o,u,d))d.stopPropagation();else if(es(s,d),o&4&&-1<nh.indexOf(s)){for(;g!==null;){var v=yu(g);if(v!==null&&eu(v),v=ma(s,o,u,d),v===null&&Wp(s,o,d,zr,u),v===g)break;g=v}g!==null&&d.stopPropagation()}else Wp(s,o,d,null,u)}}var zr=null;function ma(s,o,u,d){if(zr=null,s=aa(d),s=po(s),s!==null)if(o=fr(s),o===null)s=null;else if(u=o.tag,u===13){if(s=ql(o),s!==null)return s;s=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;s=null}else o!==s&&(s=null);return zr=s,null}function ga(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bp()){case ca:return 1;case Gl:return 4;case ro:case Ql:return 16;case ha:return 536870912;default:return 16}default:return 16}}var Dn=null,ya=null,vi=null;function oh(){if(vi)return vi;var s,o=ya,u=o.length,d,g="value"in Dn?Dn.value:Dn.textContent,v=g.length;for(s=0;s<u&&o[s]===g[s];s++);var S=u-s;for(d=1;d<=S&&o[u-d]===g[v-d];d++);return vi=g.slice(s,1<d?1-d:void 0)}function co(s){var o=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&o===13&&(s=13)):s=o,s===10&&(s=13),32<=s||s===13?s:0}function Br(){return!0}function su(){return!1}function rn(s){function o(u,d,g,v,S){this._reactName=u,this._targetInst=g,this.type=d,this.nativeEvent=v,this.target=S,this.currentTarget=null;for(var L in s)s.hasOwnProperty(L)&&(u=s[L],this[L]=u?u(v):v[L]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Br:su,this.isPropagationStopped=su,this}return ue(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Br)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Br)},persist:function(){},isPersistent:Br}),o}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ho=rn(Wr),rs=ue({},Wr,{view:0,detail:0}),va=rn(rs),_a,wa,Vn,fo=ue({},rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ke,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Vn&&(Vn&&s.type==="mousemove"?(_a=s.screenX-Vn.screenX,wa=s.screenY-Vn.screenY):wa=_a=0,Vn=s),_a)},movementY:function(s){return"movementY"in s?s.movementY:wa}}),ou=rn(fo),ah=ue({},fo,{dataTransfer:0}),lh=rn(ah),Ea=ue({},rs,{relatedTarget:0}),Kt=rn(Ea),uh=ue({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),ch=rn(uh),is=ue({},Wr,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),f=rn(is),_=ue({},Wr,{data:0}),E=rn(_),A={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function le(s){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(s):(s=Y[s])?!!o[s]:!1}function ke(){return le}var Tt=ue({},rs,{key:function(s){if(s.key){var o=A[s.key]||s.key;if(o!=="Unidentified")return o}return s.type==="keypress"?(s=co(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?K[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ke,charCode:function(s){return s.type==="keypress"?co(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?co(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),Ze=rn(Tt),At=ue({},fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nn=rn(At),_i=ue({},rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ke}),Hr=rn(_i),qr=ue({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ta=rn(qr),au=ue({},fo,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),JR=rn(au),ZR=[9,13,27,32],Np=c&&"CompositionEvent"in window,lu=null;c&&"documentMode"in document&&(lu=document.documentMode);var eb=c&&"TextEvent"in window&&!lu,lw=c&&(!Np||lu&&8<lu&&11>=lu),uw=" ",cw=!1;function hw(s,o){switch(s){case"keyup":return ZR.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fw(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Sa=!1;function tb(s,o){switch(s){case"compositionend":return fw(o);case"keypress":return o.which!==32?null:(cw=!0,uw);case"textInput":return s=o.data,s===uw&&cw?null:s;default:return null}}function nb(s,o){if(Sa)return s==="compositionend"||!Np&&hw(s,o)?(s=oh(),vi=ya=Dn=null,Sa=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return lw&&o.locale!=="ko"?null:o.data;default:return null}}var rb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dw(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o==="input"?!!rb[s.type]:o==="textarea"}function pw(s,o,u,d){Qi(d),o=mh(o,"onChange"),0<o.length&&(u=new ho("onChange","change",null,u,d),s.push({event:u,listeners:o}))}var uu=null,cu=null;function ib(s){Dw(s,0)}function hh(s){var o=ka(s);if(_n(o))return s}function sb(s,o){if(s==="change")return o}var mw=!1;if(c){var Mp;if(c){var Lp="oninput"in document;if(!Lp){var gw=document.createElement("div");gw.setAttribute("oninput","return;"),Lp=typeof gw.oninput=="function"}Mp=Lp}else Mp=!1;mw=Mp&&(!document.documentMode||9<document.documentMode)}function yw(){uu&&(uu.detachEvent("onpropertychange",vw),cu=uu=null)}function vw(s){if(s.propertyName==="value"&&hh(cu)){var o=[];pw(o,cu,s,aa(s)),Gc(ib,o)}}function ob(s,o,u){s==="focusin"?(yw(),uu=o,cu=u,uu.attachEvent("onpropertychange",vw)):s==="focusout"&&yw()}function ab(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return hh(cu)}function lb(s,o){if(s==="click")return hh(o)}function ub(s,o){if(s==="input"||s==="change")return hh(o)}function cb(s,o){return s===o&&(s!==0||1/s===1/o)||s!==s&&o!==o}var pr=typeof Object.is=="function"?Object.is:cb;function hu(s,o){if(pr(s,o))return!0;if(typeof s!="object"||s===null||typeof o!="object"||o===null)return!1;var u=Object.keys(s),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var g=u[d];if(!h.call(o,g)||!pr(s[g],o[g]))return!1}return!0}function _w(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function ww(s,o){var u=_w(s);s=0;for(var d;u;){if(u.nodeType===3){if(d=s+u.textContent.length,s<=o&&d>=o)return{node:u,offset:o-s};s=d}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=_w(u)}}function Ew(s,o){return s&&o?s===o?!0:s&&s.nodeType===3?!1:o&&o.nodeType===3?Ew(s,o.parentNode):"contains"in s?s.contains(o):s.compareDocumentPosition?!!(s.compareDocumentPosition(o)&16):!1:!1}function Tw(){for(var s=window,o=Bi();o instanceof s.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)s=o.contentWindow;else break;o=Bi(s.document)}return o}function Op(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o&&(o==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||o==="textarea"||s.contentEditable==="true")}function hb(s){var o=Tw(),u=s.focusedElem,d=s.selectionRange;if(o!==u&&u&&u.ownerDocument&&Ew(u.ownerDocument.documentElement,u)){if(d!==null&&Op(u)){if(o=d.start,s=d.end,s===void 0&&(s=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(s,u.value.length);else if(s=(o=u.ownerDocument||document)&&o.defaultView||window,s.getSelection){s=s.getSelection();var g=u.textContent.length,v=Math.min(d.start,g);d=d.end===void 0?v:Math.min(d.end,g),!s.extend&&v>d&&(g=d,d=v,v=g),g=ww(u,v);var S=ww(u,d);g&&S&&(s.rangeCount!==1||s.anchorNode!==g.node||s.anchorOffset!==g.offset||s.focusNode!==S.node||s.focusOffset!==S.offset)&&(o=o.createRange(),o.setStart(g.node,g.offset),s.removeAllRanges(),v>d?(s.addRange(o),s.extend(S.node,S.offset)):(o.setEnd(S.node,S.offset),s.addRange(o)))}}for(o=[],s=u;s=s.parentNode;)s.nodeType===1&&o.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)s=o[u],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var fb=c&&"documentMode"in document&&11>=document.documentMode,xa=null,Fp=null,fu=null,jp=!1;function Sw(s,o,u){var d=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;jp||xa==null||xa!==Bi(d)||(d=xa,"selectionStart"in d&&Op(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),fu&&hu(fu,d)||(fu=d,d=mh(Fp,"onSelect"),0<d.length&&(o=new ho("onSelect","select",null,o,u),s.push({event:o,listeners:d}),o.target=xa)))}function fh(s,o){var u={};return u[s.toLowerCase()]=o.toLowerCase(),u["Webkit"+s]="webkit"+o,u["Moz"+s]="moz"+o,u}var Ia={animationend:fh("Animation","AnimationEnd"),animationiteration:fh("Animation","AnimationIteration"),animationstart:fh("Animation","AnimationStart"),transitionend:fh("Transition","TransitionEnd")},$p={},xw={};c&&(xw=document.createElement("div").style,"AnimationEvent"in window||(delete Ia.animationend.animation,delete Ia.animationiteration.animation,delete Ia.animationstart.animation),"TransitionEvent"in window||delete Ia.transitionend.transition);function dh(s){if($p[s])return $p[s];if(!Ia[s])return s;var o=Ia[s],u;for(u in o)if(o.hasOwnProperty(u)&&u in xw)return $p[s]=o[u];return s}var Iw=dh("animationend"),Aw=dh("animationiteration"),Cw=dh("animationstart"),kw=dh("transitionend"),Pw=new Map,Rw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ss(s,o){Pw.set(s,o),a(o,[s])}for(var Up=0;Up<Rw.length;Up++){var zp=Rw[Up],db=zp.toLowerCase(),pb=zp[0].toUpperCase()+zp.slice(1);ss(db,"on"+pb)}ss(Iw,"onAnimationEnd"),ss(Aw,"onAnimationIteration"),ss(Cw,"onAnimationStart"),ss("dblclick","onDoubleClick"),ss("focusin","onFocus"),ss("focusout","onBlur"),ss(kw,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var du="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mb=new Set("cancel close invalid load scroll toggle".split(" ").concat(du));function bw(s,o,u){var d=s.type||"unknown-event";s.currentTarget=u,Hl(d,o,void 0,s),s.currentTarget=null}function Dw(s,o){o=(o&4)!==0;for(var u=0;u<s.length;u++){var d=s[u],g=d.event;d=d.listeners;e:{var v=void 0;if(o)for(var S=d.length-1;0<=S;S--){var L=d[S],j=L.instance,Q=L.currentTarget;if(L=L.listener,j!==v&&g.isPropagationStopped())break e;bw(g,L,Q),v=j}else for(S=0;S<d.length;S++){if(L=d[S],j=L.instance,Q=L.currentTarget,L=L.listener,j!==v&&g.isPropagationStopped())break e;bw(g,L,Q),v=j}}}if(la)throw s=Wn,la=!1,Wn=null,s}function at(s,o){var u=o[Yp];u===void 0&&(u=o[Yp]=new Set);var d=s+"__bubble";u.has(d)||(Vw(o,s,2,!1),u.add(d))}function Bp(s,o,u){var d=0;o&&(d|=4),Vw(u,s,d,o)}var ph="_reactListening"+Math.random().toString(36).slice(2);function pu(s){if(!s[ph]){s[ph]=!0,r.forEach(function(u){u!=="selectionchange"&&(mb.has(u)||Bp(u,!1,s),Bp(u,!0,s))});var o=s.nodeType===9?s:s.ownerDocument;o===null||o[ph]||(o[ph]=!0,Bp("selectionchange",!1,o))}}function Vw(s,o,u,d){switch(ga(o)){case 1:var g=Ur;break;case 4:g=sh;break;default:g=iu}u=g.bind(null,o,u,s),g=void 0,!Xi||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(g=!0),d?g!==void 0?s.addEventListener(o,u,{capture:!0,passive:g}):s.addEventListener(o,u,!0):g!==void 0?s.addEventListener(o,u,{passive:g}):s.addEventListener(o,u,!1)}function Wp(s,o,u,d,g){var v=d;if(!(o&1)&&!(o&2)&&d!==null)e:for(;;){if(d===null)return;var S=d.tag;if(S===3||S===4){var L=d.stateNode.containerInfo;if(L===g||L.nodeType===8&&L.parentNode===g)break;if(S===4)for(S=d.return;S!==null;){var j=S.tag;if((j===3||j===4)&&(j=S.stateNode.containerInfo,j===g||j.nodeType===8&&j.parentNode===g))return;S=S.return}for(;L!==null;){if(S=po(L),S===null)return;if(j=S.tag,j===5||j===6){d=v=S;continue e}L=L.parentNode}}d=d.return}Gc(function(){var Q=v,ne=aa(u),se=[];e:{var te=Pw.get(s);if(te!==void 0){var he=ho,me=s;switch(s){case"keypress":if(co(u)===0)break e;case"keydown":case"keyup":he=Ze;break;case"focusin":me="focus",he=Kt;break;case"focusout":me="blur",he=Kt;break;case"beforeblur":case"afterblur":he=Kt;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=lh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=Hr;break;case Iw:case Aw:case Cw:he=ch;break;case kw:he=Ta;break;case"scroll":he=va;break;case"wheel":he=JR;break;case"copy":case"cut":case"paste":he=f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Nn}var ye=(o&4)!==0,St=!ye&&s==="scroll",q=ye?te!==null?te+"Capture":null:te;ye=[];for(var z=Q,G;z!==null;){G=z;var ae=G.stateNode;if(G.tag===5&&ae!==null&&(G=ae,q!==null&&(ae=eo(z,q),ae!=null&&ye.push(mu(z,ae,G)))),St)break;z=z.return}0<ye.length&&(te=new he(te,me,null,u,ne),se.push({event:te,listeners:ye}))}}if(!(o&7)){e:{if(te=s==="mouseover"||s==="pointerover",he=s==="mouseout"||s==="pointerout",te&&u!==Gi&&(me=u.relatedTarget||u.fromElement)&&(po(me)||me[wi]))break e;if((he||te)&&(te=ne.window===ne?ne:(te=ne.ownerDocument)?te.defaultView||te.parentWindow:window,he?(me=u.relatedTarget||u.toElement,he=Q,me=me?po(me):null,me!==null&&(St=fr(me),me!==St||me.tag!==5&&me.tag!==6)&&(me=null)):(he=null,me=Q),he!==me)){if(ye=ou,ae="onMouseLeave",q="onMouseEnter",z="mouse",(s==="pointerout"||s==="pointerover")&&(ye=Nn,ae="onPointerLeave",q="onPointerEnter",z="pointer"),St=he==null?te:ka(he),G=me==null?te:ka(me),te=new ye(ae,z+"leave",he,u,ne),te.target=St,te.relatedTarget=G,ae=null,po(ne)===Q&&(ye=new ye(q,z+"enter",me,u,ne),ye.target=G,ye.relatedTarget=St,ae=ye),St=ae,he&&me)t:{for(ye=he,q=me,z=0,G=ye;G;G=Aa(G))z++;for(G=0,ae=q;ae;ae=Aa(ae))G++;for(;0<z-G;)ye=Aa(ye),z--;for(;0<G-z;)q=Aa(q),G--;for(;z--;){if(ye===q||q!==null&&ye===q.alternate)break t;ye=Aa(ye),q=Aa(q)}ye=null}else ye=null;he!==null&&Nw(se,te,he,ye,!1),me!==null&&St!==null&&Nw(se,St,me,ye,!0)}}e:{if(te=Q?ka(Q):window,he=te.nodeName&&te.nodeName.toLowerCase(),he==="select"||he==="input"&&te.type==="file")var ve=sb;else if(dw(te))if(mw)ve=ub;else{ve=ab;var we=ob}else(he=te.nodeName)&&he.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(ve=lb);if(ve&&(ve=ve(s,Q))){pw(se,ve,u,ne);break e}we&&we(s,te,Q),s==="focusout"&&(we=te._wrapperState)&&we.controlled&&te.type==="number"&&It(te,"number",te.value)}switch(we=Q?ka(Q):window,s){case"focusin":(dw(we)||we.contentEditable==="true")&&(xa=we,Fp=Q,fu=null);break;case"focusout":fu=Fp=xa=null;break;case"mousedown":jp=!0;break;case"contextmenu":case"mouseup":case"dragend":jp=!1,Sw(se,u,ne);break;case"selectionchange":if(fb)break;case"keydown":case"keyup":Sw(se,u,ne)}var Ee;if(Np)e:{switch(s){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Sa?hw(s,u)&&(xe="onCompositionEnd"):s==="keydown"&&u.keyCode===229&&(xe="onCompositionStart");xe&&(lw&&u.locale!=="ko"&&(Sa||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Sa&&(Ee=oh()):(Dn=ne,ya="value"in Dn?Dn.value:Dn.textContent,Sa=!0)),we=mh(Q,xe),0<we.length&&(xe=new E(xe,s,null,u,ne),se.push({event:xe,listeners:we}),Ee?xe.data=Ee:(Ee=fw(u),Ee!==null&&(xe.data=Ee)))),(Ee=eb?tb(s,u):nb(s,u))&&(Q=mh(Q,"onBeforeInput"),0<Q.length&&(ne=new E("onBeforeInput","beforeinput",null,u,ne),se.push({event:ne,listeners:Q}),ne.data=Ee))}Dw(se,o)})}function mu(s,o,u){return{instance:s,listener:o,currentTarget:u}}function mh(s,o){for(var u=o+"Capture",d=[];s!==null;){var g=s,v=g.stateNode;g.tag===5&&v!==null&&(g=v,v=eo(s,u),v!=null&&d.unshift(mu(s,v,g)),v=eo(s,o),v!=null&&d.push(mu(s,v,g))),s=s.return}return d}function Aa(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function Nw(s,o,u,d,g){for(var v=o._reactName,S=[];u!==null&&u!==d;){var L=u,j=L.alternate,Q=L.stateNode;if(j!==null&&j===d)break;L.tag===5&&Q!==null&&(L=Q,g?(j=eo(u,v),j!=null&&S.unshift(mu(u,j,L))):g||(j=eo(u,v),j!=null&&S.push(mu(u,j,L)))),u=u.return}S.length!==0&&s.push({event:o,listeners:S})}var gb=/\r\n?/g,yb=/\u0000|\uFFFD/g;function Mw(s){return(typeof s=="string"?s:""+s).replace(gb,`
`).replace(yb,"")}function gh(s,o,u){if(o=Mw(o),Mw(s)!==o&&u)throw Error(n(425))}function yh(){}var Hp=null,qp=null;function Kp(s,o){return s==="textarea"||s==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Gp=typeof setTimeout=="function"?setTimeout:void 0,vb=typeof clearTimeout=="function"?clearTimeout:void 0,Lw=typeof Promise=="function"?Promise:void 0,_b=typeof queueMicrotask=="function"?queueMicrotask:typeof Lw<"u"?function(s){return Lw.resolve(null).then(s).catch(wb)}:Gp;function wb(s){setTimeout(function(){throw s})}function Qp(s,o){var u=o,d=0;do{var g=u.nextSibling;if(s.removeChild(u),g&&g.nodeType===8)if(u=g.data,u==="/$"){if(d===0){s.removeChild(g),ns(o);return}d--}else u!=="$"&&u!=="$?"&&u!=="$!"||d++;u=g}while(u);ns(o)}function os(s){for(;s!=null;s=s.nextSibling){var o=s.nodeType;if(o===1||o===3)break;if(o===8){if(o=s.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return s}function Ow(s){s=s.previousSibling;for(var o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return s;o--}else u==="/$"&&o++}s=s.previousSibling}return null}var Ca=Math.random().toString(36).slice(2),Kr="__reactFiber$"+Ca,gu="__reactProps$"+Ca,wi="__reactContainer$"+Ca,Yp="__reactEvents$"+Ca,Eb="__reactListeners$"+Ca,Tb="__reactHandles$"+Ca;function po(s){var o=s[Kr];if(o)return o;for(var u=s.parentNode;u;){if(o=u[wi]||u[Kr]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(s=Ow(s);s!==null;){if(u=s[Kr])return u;s=Ow(s)}return o}s=u,u=s.parentNode}return null}function yu(s){return s=s[Kr]||s[wi],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function ka(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(n(33))}function vh(s){return s[gu]||null}var Xp=[],Pa=-1;function as(s){return{current:s}}function lt(s){0>Pa||(s.current=Xp[Pa],Xp[Pa]=null,Pa--)}function it(s,o){Pa++,Xp[Pa]=s.current,s.current=o}var ls={},sn=as(ls),wn=as(!1),mo=ls;function Ra(s,o){var u=s.type.contextTypes;if(!u)return ls;var d=s.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var g={},v;for(v in u)g[v]=o[v];return d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=o,s.__reactInternalMemoizedMaskedChildContext=g),g}function En(s){return s=s.childContextTypes,s!=null}function _h(){lt(wn),lt(sn)}function Fw(s,o,u){if(sn.current!==ls)throw Error(n(168));it(sn,o),it(wn,u)}function jw(s,o,u){var d=s.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return u;d=d.getChildContext();for(var g in d)if(!(g in o))throw Error(n(108,$e(s)||"Unknown",g));return ue({},u,d)}function wh(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||ls,mo=sn.current,it(sn,s),it(wn,wn.current),!0}function $w(s,o,u){var d=s.stateNode;if(!d)throw Error(n(169));u?(s=jw(s,o,mo),d.__reactInternalMemoizedMergedChildContext=s,lt(wn),lt(sn),it(sn,s)):lt(wn),it(wn,u)}var Ei=null,Eh=!1,Jp=!1;function Uw(s){Ei===null?Ei=[s]:Ei.push(s)}function Sb(s){Eh=!0,Uw(s)}function us(){if(!Jp&&Ei!==null){Jp=!0;var s=0,o=ze;try{var u=Ei;for(ze=1;s<u.length;s++){var d=u[s];do d=d(!0);while(d!==null)}Ei=null,Eh=!1}catch(g){throw Ei!==null&&(Ei=Ei.slice(s+1)),Kl(ca,us),g}finally{ze=o,Jp=!1}}return null}var ba=[],Da=0,Th=null,Sh=0,qn=[],Kn=0,go=null,Ti=1,Si="";function yo(s,o){ba[Da++]=Sh,ba[Da++]=Th,Th=s,Sh=o}function zw(s,o,u){qn[Kn++]=Ti,qn[Kn++]=Si,qn[Kn++]=go,go=s;var d=Ti;s=Si;var g=32-Rn(d)-1;d&=~(1<<g),u+=1;var v=32-Rn(o)+g;if(30<v){var S=g-g%5;v=(d&(1<<S)-1).toString(32),d>>=S,g-=S,Ti=1<<32-Rn(o)+g|u<<g|d,Si=v+s}else Ti=1<<v|u<<g|d,Si=s}function Zp(s){s.return!==null&&(yo(s,1),zw(s,1,0))}function em(s){for(;s===Th;)Th=ba[--Da],ba[Da]=null,Sh=ba[--Da],ba[Da]=null;for(;s===go;)go=qn[--Kn],qn[Kn]=null,Si=qn[--Kn],qn[Kn]=null,Ti=qn[--Kn],qn[Kn]=null}var Mn=null,Ln=null,ft=!1,mr=null;function Bw(s,o){var u=Xn(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=s,o=s.deletions,o===null?(s.deletions=[u],s.flags|=16):o.push(u)}function Ww(s,o){switch(s.tag){case 5:var u=s.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(s.stateNode=o,Mn=s,Ln=os(o.firstChild),!0):!1;case 6:return o=s.pendingProps===""||o.nodeType!==3?null:o,o!==null?(s.stateNode=o,Mn=s,Ln=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=go!==null?{id:Ti,overflow:Si}:null,s.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=Xn(18,null,null,0),u.stateNode=o,u.return=s,s.child=u,Mn=s,Ln=null,!0):!1;default:return!1}}function tm(s){return(s.mode&1)!==0&&(s.flags&128)===0}function nm(s){if(ft){var o=Ln;if(o){var u=o;if(!Ww(s,o)){if(tm(s))throw Error(n(418));o=os(u.nextSibling);var d=Mn;o&&Ww(s,o)?Bw(d,u):(s.flags=s.flags&-4097|2,ft=!1,Mn=s)}}else{if(tm(s))throw Error(n(418));s.flags=s.flags&-4097|2,ft=!1,Mn=s}}}function Hw(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Mn=s}function xh(s){if(s!==Mn)return!1;if(!ft)return Hw(s),ft=!0,!1;var o;if((o=s.tag!==3)&&!(o=s.tag!==5)&&(o=s.type,o=o!=="head"&&o!=="body"&&!Kp(s.type,s.memoizedProps)),o&&(o=Ln)){if(tm(s))throw qw(),Error(n(418));for(;o;)Bw(s,o),o=os(o.nextSibling)}if(Hw(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(n(317));e:{for(s=s.nextSibling,o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="/$"){if(o===0){Ln=os(s.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}s=s.nextSibling}Ln=null}}else Ln=Mn?os(s.stateNode.nextSibling):null;return!0}function qw(){for(var s=Ln;s;)s=os(s.nextSibling)}function Va(){Ln=Mn=null,ft=!1}function rm(s){mr===null?mr=[s]:mr.push(s)}var xb=$.ReactCurrentBatchConfig;function vu(s,o,u){if(s=u.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(n(309));var d=u.stateNode}if(!d)throw Error(n(147,s));var g=d,v=""+s;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===v?o.ref:(o=function(S){var L=g.refs;S===null?delete L[v]:L[v]=S},o._stringRef=v,o)}if(typeof s!="string")throw Error(n(284));if(!u._owner)throw Error(n(290,s))}return s}function Ih(s,o){throw s=Object.prototype.toString.call(o),Error(n(31,s==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":s))}function Kw(s){var o=s._init;return o(s._payload)}function Gw(s){function o(q,z){if(s){var G=q.deletions;G===null?(q.deletions=[z],q.flags|=16):G.push(z)}}function u(q,z){if(!s)return null;for(;z!==null;)o(q,z),z=z.sibling;return null}function d(q,z){for(q=new Map;z!==null;)z.key!==null?q.set(z.key,z):q.set(z.index,z),z=z.sibling;return q}function g(q,z){return q=ys(q,z),q.index=0,q.sibling=null,q}function v(q,z,G){return q.index=G,s?(G=q.alternate,G!==null?(G=G.index,G<z?(q.flags|=2,z):G):(q.flags|=2,z)):(q.flags|=1048576,z)}function S(q){return s&&q.alternate===null&&(q.flags|=2),q}function L(q,z,G,ae){return z===null||z.tag!==6?(z=Gm(G,q.mode,ae),z.return=q,z):(z=g(z,G),z.return=q,z)}function j(q,z,G,ae){var ve=G.type;return ve===C?ne(q,z,G.props.children,ae,G.key):z!==null&&(z.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Xe&&Kw(ve)===z.type)?(ae=g(z,G.props),ae.ref=vu(q,z,G),ae.return=q,ae):(ae=Qh(G.type,G.key,G.props,null,q.mode,ae),ae.ref=vu(q,z,G),ae.return=q,ae)}function Q(q,z,G,ae){return z===null||z.tag!==4||z.stateNode.containerInfo!==G.containerInfo||z.stateNode.implementation!==G.implementation?(z=Qm(G,q.mode,ae),z.return=q,z):(z=g(z,G.children||[]),z.return=q,z)}function ne(q,z,G,ae,ve){return z===null||z.tag!==7?(z=Io(G,q.mode,ae,ve),z.return=q,z):(z=g(z,G),z.return=q,z)}function se(q,z,G){if(typeof z=="string"&&z!==""||typeof z=="number")return z=Gm(""+z,q.mode,G),z.return=q,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case H:return G=Qh(z.type,z.key,z.props,null,q.mode,G),G.ref=vu(q,null,z),G.return=q,G;case X:return z=Qm(z,q.mode,G),z.return=q,z;case Xe:var ae=z._init;return se(q,ae(z._payload),G)}if(Et(z)||ce(z))return z=Io(z,q.mode,G,null),z.return=q,z;Ih(q,z)}return null}function te(q,z,G,ae){var ve=z!==null?z.key:null;if(typeof G=="string"&&G!==""||typeof G=="number")return ve!==null?null:L(q,z,""+G,ae);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case H:return G.key===ve?j(q,z,G,ae):null;case X:return G.key===ve?Q(q,z,G,ae):null;case Xe:return ve=G._init,te(q,z,ve(G._payload),ae)}if(Et(G)||ce(G))return ve!==null?null:ne(q,z,G,ae,null);Ih(q,G)}return null}function he(q,z,G,ae,ve){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return q=q.get(G)||null,L(z,q,""+ae,ve);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case H:return q=q.get(ae.key===null?G:ae.key)||null,j(z,q,ae,ve);case X:return q=q.get(ae.key===null?G:ae.key)||null,Q(z,q,ae,ve);case Xe:var we=ae._init;return he(q,z,G,we(ae._payload),ve)}if(Et(ae)||ce(ae))return q=q.get(G)||null,ne(z,q,ae,ve,null);Ih(z,ae)}return null}function me(q,z,G,ae){for(var ve=null,we=null,Ee=z,xe=z=0,Ut=null;Ee!==null&&xe<G.length;xe++){Ee.index>xe?(Ut=Ee,Ee=null):Ut=Ee.sibling;var He=te(q,Ee,G[xe],ae);if(He===null){Ee===null&&(Ee=Ut);break}s&&Ee&&He.alternate===null&&o(q,Ee),z=v(He,z,xe),we===null?ve=He:we.sibling=He,we=He,Ee=Ut}if(xe===G.length)return u(q,Ee),ft&&yo(q,xe),ve;if(Ee===null){for(;xe<G.length;xe++)Ee=se(q,G[xe],ae),Ee!==null&&(z=v(Ee,z,xe),we===null?ve=Ee:we.sibling=Ee,we=Ee);return ft&&yo(q,xe),ve}for(Ee=d(q,Ee);xe<G.length;xe++)Ut=he(Ee,q,xe,G[xe],ae),Ut!==null&&(s&&Ut.alternate!==null&&Ee.delete(Ut.key===null?xe:Ut.key),z=v(Ut,z,xe),we===null?ve=Ut:we.sibling=Ut,we=Ut);return s&&Ee.forEach(function(vs){return o(q,vs)}),ft&&yo(q,xe),ve}function ye(q,z,G,ae){var ve=ce(G);if(typeof ve!="function")throw Error(n(150));if(G=ve.call(G),G==null)throw Error(n(151));for(var we=ve=null,Ee=z,xe=z=0,Ut=null,He=G.next();Ee!==null&&!He.done;xe++,He=G.next()){Ee.index>xe?(Ut=Ee,Ee=null):Ut=Ee.sibling;var vs=te(q,Ee,He.value,ae);if(vs===null){Ee===null&&(Ee=Ut);break}s&&Ee&&vs.alternate===null&&o(q,Ee),z=v(vs,z,xe),we===null?ve=vs:we.sibling=vs,we=vs,Ee=Ut}if(He.done)return u(q,Ee),ft&&yo(q,xe),ve;if(Ee===null){for(;!He.done;xe++,He=G.next())He=se(q,He.value,ae),He!==null&&(z=v(He,z,xe),we===null?ve=He:we.sibling=He,we=He);return ft&&yo(q,xe),ve}for(Ee=d(q,Ee);!He.done;xe++,He=G.next())He=he(Ee,q,xe,He.value,ae),He!==null&&(s&&He.alternate!==null&&Ee.delete(He.key===null?xe:He.key),z=v(He,z,xe),we===null?ve=He:we.sibling=He,we=He);return s&&Ee.forEach(function(nD){return o(q,nD)}),ft&&yo(q,xe),ve}function St(q,z,G,ae){if(typeof G=="object"&&G!==null&&G.type===C&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case H:e:{for(var ve=G.key,we=z;we!==null;){if(we.key===ve){if(ve=G.type,ve===C){if(we.tag===7){u(q,we.sibling),z=g(we,G.props.children),z.return=q,q=z;break e}}else if(we.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Xe&&Kw(ve)===we.type){u(q,we.sibling),z=g(we,G.props),z.ref=vu(q,we,G),z.return=q,q=z;break e}u(q,we);break}else o(q,we);we=we.sibling}G.type===C?(z=Io(G.props.children,q.mode,ae,G.key),z.return=q,q=z):(ae=Qh(G.type,G.key,G.props,null,q.mode,ae),ae.ref=vu(q,z,G),ae.return=q,q=ae)}return S(q);case X:e:{for(we=G.key;z!==null;){if(z.key===we)if(z.tag===4&&z.stateNode.containerInfo===G.containerInfo&&z.stateNode.implementation===G.implementation){u(q,z.sibling),z=g(z,G.children||[]),z.return=q,q=z;break e}else{u(q,z);break}else o(q,z);z=z.sibling}z=Qm(G,q.mode,ae),z.return=q,q=z}return S(q);case Xe:return we=G._init,St(q,z,we(G._payload),ae)}if(Et(G))return me(q,z,G,ae);if(ce(G))return ye(q,z,G,ae);Ih(q,G)}return typeof G=="string"&&G!==""||typeof G=="number"?(G=""+G,z!==null&&z.tag===6?(u(q,z.sibling),z=g(z,G),z.return=q,q=z):(u(q,z),z=Gm(G,q.mode,ae),z.return=q,q=z),S(q)):u(q,z)}return St}var Na=Gw(!0),Qw=Gw(!1),Ah=as(null),Ch=null,Ma=null,im=null;function sm(){im=Ma=Ch=null}function om(s){var o=Ah.current;lt(Ah),s._currentValue=o}function am(s,o,u){for(;s!==null;){var d=s.alternate;if((s.childLanes&o)!==o?(s.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),s===u)break;s=s.return}}function La(s,o){Ch=s,im=Ma=null,s=s.dependencies,s!==null&&s.firstContext!==null&&(s.lanes&o&&(Tn=!0),s.firstContext=null)}function Gn(s){var o=s._currentValue;if(im!==s)if(s={context:s,memoizedValue:o,next:null},Ma===null){if(Ch===null)throw Error(n(308));Ma=s,Ch.dependencies={lanes:0,firstContext:s}}else Ma=Ma.next=s;return o}var vo=null;function lm(s){vo===null?vo=[s]:vo.push(s)}function Yw(s,o,u,d){var g=o.interleaved;return g===null?(u.next=u,lm(o)):(u.next=g.next,g.next=u),o.interleaved=u,xi(s,d)}function xi(s,o){s.lanes|=o;var u=s.alternate;for(u!==null&&(u.lanes|=o),u=s,s=s.return;s!==null;)s.childLanes|=o,u=s.alternate,u!==null&&(u.childLanes|=o),u=s,s=s.return;return u.tag===3?u.stateNode:null}var cs=!1;function um(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xw(s,o){s=s.updateQueue,o.updateQueue===s&&(o.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function Ii(s,o){return{eventTime:s,lane:o,tag:0,payload:null,callback:null,next:null}}function hs(s,o,u){var d=s.updateQueue;if(d===null)return null;if(d=d.shared,We&2){var g=d.pending;return g===null?o.next=o:(o.next=g.next,g.next=o),d.pending=o,xi(s,u)}return g=d.interleaved,g===null?(o.next=o,lm(d)):(o.next=g.next,g.next=o),d.interleaved=o,xi(s,u)}function kh(s,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,Zl(s,u)}}function Jw(s,o){var u=s.updateQueue,d=s.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var g=null,v=null;if(u=u.firstBaseUpdate,u!==null){do{var S={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};v===null?g=v=S:v=v.next=S,u=u.next}while(u!==null);v===null?g=v=o:v=v.next=o}else g=v=o;u={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:v,shared:d.shared,effects:d.effects},s.updateQueue=u;return}s=u.lastBaseUpdate,s===null?u.firstBaseUpdate=o:s.next=o,u.lastBaseUpdate=o}function Ph(s,o,u,d){var g=s.updateQueue;cs=!1;var v=g.firstBaseUpdate,S=g.lastBaseUpdate,L=g.shared.pending;if(L!==null){g.shared.pending=null;var j=L,Q=j.next;j.next=null,S===null?v=Q:S.next=Q,S=j;var ne=s.alternate;ne!==null&&(ne=ne.updateQueue,L=ne.lastBaseUpdate,L!==S&&(L===null?ne.firstBaseUpdate=Q:L.next=Q,ne.lastBaseUpdate=j))}if(v!==null){var se=g.baseState;S=0,ne=Q=j=null,L=v;do{var te=L.lane,he=L.eventTime;if((d&te)===te){ne!==null&&(ne=ne.next={eventTime:he,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var me=s,ye=L;switch(te=o,he=u,ye.tag){case 1:if(me=ye.payload,typeof me=="function"){se=me.call(he,se,te);break e}se=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ye.payload,te=typeof me=="function"?me.call(he,se,te):me,te==null)break e;se=ue({},se,te);break e;case 2:cs=!0}}L.callback!==null&&L.lane!==0&&(s.flags|=64,te=g.effects,te===null?g.effects=[L]:te.push(L))}else he={eventTime:he,lane:te,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ne===null?(Q=ne=he,j=se):ne=ne.next=he,S|=te;if(L=L.next,L===null){if(L=g.shared.pending,L===null)break;te=L,L=te.next,te.next=null,g.lastBaseUpdate=te,g.shared.pending=null}}while(!0);if(ne===null&&(j=se),g.baseState=j,g.firstBaseUpdate=Q,g.lastBaseUpdate=ne,o=g.shared.interleaved,o!==null){g=o;do S|=g.lane,g=g.next;while(g!==o)}else v===null&&(g.shared.lanes=0);Eo|=S,s.lanes=S,s.memoizedState=se}}function Zw(s,o,u){if(s=o.effects,o.effects=null,s!==null)for(o=0;o<s.length;o++){var d=s[o],g=d.callback;if(g!==null){if(d.callback=null,d=u,typeof g!="function")throw Error(n(191,g));g.call(d)}}}var _u={},Gr=as(_u),wu=as(_u),Eu=as(_u);function _o(s){if(s===_u)throw Error(n(174));return s}function cm(s,o){switch(it(Eu,o),it(wu,s),it(Gr,_u),s=o.nodeType,s){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:ia(null,"");break;default:s=s===8?o.parentNode:o,o=s.namespaceURI||null,s=s.tagName,o=ia(o,s)}lt(Gr),it(Gr,o)}function Oa(){lt(Gr),lt(wu),lt(Eu)}function e0(s){_o(Eu.current);var o=_o(Gr.current),u=ia(o,s.type);o!==u&&(it(wu,s),it(Gr,u))}function hm(s){wu.current===s&&(lt(Gr),lt(wu))}var mt=as(0);function Rh(s){for(var o=s;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var fm=[];function dm(){for(var s=0;s<fm.length;s++)fm[s]._workInProgressVersionPrimary=null;fm.length=0}var bh=$.ReactCurrentDispatcher,pm=$.ReactCurrentBatchConfig,wo=0,gt=null,Mt=null,jt=null,Dh=!1,Tu=!1,Su=0,Ib=0;function on(){throw Error(n(321))}function mm(s,o){if(o===null)return!1;for(var u=0;u<o.length&&u<s.length;u++)if(!pr(s[u],o[u]))return!1;return!0}function gm(s,o,u,d,g,v){if(wo=v,gt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,bh.current=s===null||s.memoizedState===null?Pb:Rb,s=u(d,g),Tu){v=0;do{if(Tu=!1,Su=0,25<=v)throw Error(n(301));v+=1,jt=Mt=null,o.updateQueue=null,bh.current=bb,s=u(d,g)}while(Tu)}if(bh.current=Mh,o=Mt!==null&&Mt.next!==null,wo=0,jt=Mt=gt=null,Dh=!1,o)throw Error(n(300));return s}function ym(){var s=Su!==0;return Su=0,s}function Qr(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?gt.memoizedState=jt=s:jt=jt.next=s,jt}function Qn(){if(Mt===null){var s=gt.alternate;s=s!==null?s.memoizedState:null}else s=Mt.next;var o=jt===null?gt.memoizedState:jt.next;if(o!==null)jt=o,Mt=s;else{if(s===null)throw Error(n(310));Mt=s,s={memoizedState:Mt.memoizedState,baseState:Mt.baseState,baseQueue:Mt.baseQueue,queue:Mt.queue,next:null},jt===null?gt.memoizedState=jt=s:jt=jt.next=s}return jt}function xu(s,o){return typeof o=="function"?o(s):o}function vm(s){var o=Qn(),u=o.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=s;var d=Mt,g=d.baseQueue,v=u.pending;if(v!==null){if(g!==null){var S=g.next;g.next=v.next,v.next=S}d.baseQueue=g=v,u.pending=null}if(g!==null){v=g.next,d=d.baseState;var L=S=null,j=null,Q=v;do{var ne=Q.lane;if((wo&ne)===ne)j!==null&&(j=j.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),d=Q.hasEagerState?Q.eagerState:s(d,Q.action);else{var se={lane:ne,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};j===null?(L=j=se,S=d):j=j.next=se,gt.lanes|=ne,Eo|=ne}Q=Q.next}while(Q!==null&&Q!==v);j===null?S=d:j.next=L,pr(d,o.memoizedState)||(Tn=!0),o.memoizedState=d,o.baseState=S,o.baseQueue=j,u.lastRenderedState=d}if(s=u.interleaved,s!==null){g=s;do v=g.lane,gt.lanes|=v,Eo|=v,g=g.next;while(g!==s)}else g===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function _m(s){var o=Qn(),u=o.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=s;var d=u.dispatch,g=u.pending,v=o.memoizedState;if(g!==null){u.pending=null;var S=g=g.next;do v=s(v,S.action),S=S.next;while(S!==g);pr(v,o.memoizedState)||(Tn=!0),o.memoizedState=v,o.baseQueue===null&&(o.baseState=v),u.lastRenderedState=v}return[v,d]}function t0(){}function n0(s,o){var u=gt,d=Qn(),g=o(),v=!pr(d.memoizedState,g);if(v&&(d.memoizedState=g,Tn=!0),d=d.queue,wm(s0.bind(null,u,d,s),[s]),d.getSnapshot!==o||v||jt!==null&&jt.memoizedState.tag&1){if(u.flags|=2048,Iu(9,i0.bind(null,u,d,g,o),void 0,null),$t===null)throw Error(n(349));wo&30||r0(u,o,g)}return g}function r0(s,o,u){s.flags|=16384,s={getSnapshot:o,value:u},o=gt.updateQueue,o===null?(o={lastEffect:null,stores:null},gt.updateQueue=o,o.stores=[s]):(u=o.stores,u===null?o.stores=[s]:u.push(s))}function i0(s,o,u,d){o.value=u,o.getSnapshot=d,o0(o)&&a0(s)}function s0(s,o,u){return u(function(){o0(o)&&a0(s)})}function o0(s){var o=s.getSnapshot;s=s.value;try{var u=o();return!pr(s,u)}catch{return!0}}function a0(s){var o=xi(s,1);o!==null&&_r(o,s,1,-1)}function l0(s){var o=Qr();return typeof s=="function"&&(s=s()),o.memoizedState=o.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xu,lastRenderedState:s},o.queue=s,s=s.dispatch=kb.bind(null,gt,s),[o.memoizedState,s]}function Iu(s,o,u,d){return s={tag:s,create:o,destroy:u,deps:d,next:null},o=gt.updateQueue,o===null?(o={lastEffect:null,stores:null},gt.updateQueue=o,o.lastEffect=s.next=s):(u=o.lastEffect,u===null?o.lastEffect=s.next=s:(d=u.next,u.next=s,s.next=d,o.lastEffect=s)),s}function u0(){return Qn().memoizedState}function Vh(s,o,u,d){var g=Qr();gt.flags|=s,g.memoizedState=Iu(1|o,u,void 0,d===void 0?null:d)}function Nh(s,o,u,d){var g=Qn();d=d===void 0?null:d;var v=void 0;if(Mt!==null){var S=Mt.memoizedState;if(v=S.destroy,d!==null&&mm(d,S.deps)){g.memoizedState=Iu(o,u,v,d);return}}gt.flags|=s,g.memoizedState=Iu(1|o,u,v,d)}function c0(s,o){return Vh(8390656,8,s,o)}function wm(s,o){return Nh(2048,8,s,o)}function h0(s,o){return Nh(4,2,s,o)}function f0(s,o){return Nh(4,4,s,o)}function d0(s,o){if(typeof o=="function")return s=s(),o(s),function(){o(null)};if(o!=null)return s=s(),o.current=s,function(){o.current=null}}function p0(s,o,u){return u=u!=null?u.concat([s]):null,Nh(4,4,d0.bind(null,o,s),u)}function Em(){}function m0(s,o){var u=Qn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&mm(o,d[1])?d[0]:(u.memoizedState=[s,o],s)}function g0(s,o){var u=Qn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&mm(o,d[1])?d[0]:(s=s(),u.memoizedState=[s,o],s)}function y0(s,o,u){return wo&21?(pr(u,o)||(u=Xl(),gt.lanes|=u,Eo|=u,s.baseState=!0),o):(s.baseState&&(s.baseState=!1,Tn=!0),s.memoizedState=u)}function Ab(s,o){var u=ze;ze=u!==0&&4>u?u:4,s(!0);var d=pm.transition;pm.transition={};try{s(!1),o()}finally{ze=u,pm.transition=d}}function v0(){return Qn().memoizedState}function Cb(s,o,u){var d=ms(s);if(u={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null},_0(s))w0(o,u);else if(u=Yw(s,o,u,d),u!==null){var g=mn();_r(u,s,d,g),E0(u,o,d)}}function kb(s,o,u){var d=ms(s),g={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null};if(_0(s))w0(o,g);else{var v=s.alternate;if(s.lanes===0&&(v===null||v.lanes===0)&&(v=o.lastRenderedReducer,v!==null))try{var S=o.lastRenderedState,L=v(S,u);if(g.hasEagerState=!0,g.eagerState=L,pr(L,S)){var j=o.interleaved;j===null?(g.next=g,lm(o)):(g.next=j.next,j.next=g),o.interleaved=g;return}}catch{}finally{}u=Yw(s,o,g,d),u!==null&&(g=mn(),_r(u,s,d,g),E0(u,o,d))}}function _0(s){var o=s.alternate;return s===gt||o!==null&&o===gt}function w0(s,o){Tu=Dh=!0;var u=s.pending;u===null?o.next=o:(o.next=u.next,u.next=o),s.pending=o}function E0(s,o,u){if(u&4194240){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,Zl(s,u)}}var Mh={readContext:Gn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Pb={readContext:Gn,useCallback:function(s,o){return Qr().memoizedState=[s,o===void 0?null:o],s},useContext:Gn,useEffect:c0,useImperativeHandle:function(s,o,u){return u=u!=null?u.concat([s]):null,Vh(4194308,4,d0.bind(null,o,s),u)},useLayoutEffect:function(s,o){return Vh(4194308,4,s,o)},useInsertionEffect:function(s,o){return Vh(4,2,s,o)},useMemo:function(s,o){var u=Qr();return o=o===void 0?null:o,s=s(),u.memoizedState=[s,o],s},useReducer:function(s,o,u){var d=Qr();return o=u!==void 0?u(o):o,d.memoizedState=d.baseState=o,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:o},d.queue=s,s=s.dispatch=Cb.bind(null,gt,s),[d.memoizedState,s]},useRef:function(s){var o=Qr();return s={current:s},o.memoizedState=s},useState:l0,useDebugValue:Em,useDeferredValue:function(s){return Qr().memoizedState=s},useTransition:function(){var s=l0(!1),o=s[0];return s=Ab.bind(null,s[1]),Qr().memoizedState=s,[o,s]},useMutableSource:function(){},useSyncExternalStore:function(s,o,u){var d=gt,g=Qr();if(ft){if(u===void 0)throw Error(n(407));u=u()}else{if(u=o(),$t===null)throw Error(n(349));wo&30||r0(d,o,u)}g.memoizedState=u;var v={value:u,getSnapshot:o};return g.queue=v,c0(s0.bind(null,d,v,s),[s]),d.flags|=2048,Iu(9,i0.bind(null,d,v,u,o),void 0,null),u},useId:function(){var s=Qr(),o=$t.identifierPrefix;if(ft){var u=Si,d=Ti;u=(d&~(1<<32-Rn(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=Su++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=Ib++,o=":"+o+"r"+u.toString(32)+":";return s.memoizedState=o},unstable_isNewReconciler:!1},Rb={readContext:Gn,useCallback:m0,useContext:Gn,useEffect:wm,useImperativeHandle:p0,useInsertionEffect:h0,useLayoutEffect:f0,useMemo:g0,useReducer:vm,useRef:u0,useState:function(){return vm(xu)},useDebugValue:Em,useDeferredValue:function(s){var o=Qn();return y0(o,Mt.memoizedState,s)},useTransition:function(){var s=vm(xu)[0],o=Qn().memoizedState;return[s,o]},useMutableSource:t0,useSyncExternalStore:n0,useId:v0,unstable_isNewReconciler:!1},bb={readContext:Gn,useCallback:m0,useContext:Gn,useEffect:wm,useImperativeHandle:p0,useInsertionEffect:h0,useLayoutEffect:f0,useMemo:g0,useReducer:_m,useRef:u0,useState:function(){return _m(xu)},useDebugValue:Em,useDeferredValue:function(s){var o=Qn();return Mt===null?o.memoizedState=s:y0(o,Mt.memoizedState,s)},useTransition:function(){var s=_m(xu)[0],o=Qn().memoizedState;return[s,o]},useMutableSource:t0,useSyncExternalStore:n0,useId:v0,unstable_isNewReconciler:!1};function gr(s,o){if(s&&s.defaultProps){o=ue({},o),s=s.defaultProps;for(var u in s)o[u]===void 0&&(o[u]=s[u]);return o}return o}function Tm(s,o,u,d){o=s.memoizedState,u=u(d,o),u=u==null?o:ue({},o,u),s.memoizedState=u,s.lanes===0&&(s.updateQueue.baseState=u)}var Lh={isMounted:function(s){return(s=s._reactInternals)?fr(s)===s:!1},enqueueSetState:function(s,o,u){s=s._reactInternals;var d=mn(),g=ms(s),v=Ii(d,g);v.payload=o,u!=null&&(v.callback=u),o=hs(s,v,g),o!==null&&(_r(o,s,g,d),kh(o,s,g))},enqueueReplaceState:function(s,o,u){s=s._reactInternals;var d=mn(),g=ms(s),v=Ii(d,g);v.tag=1,v.payload=o,u!=null&&(v.callback=u),o=hs(s,v,g),o!==null&&(_r(o,s,g,d),kh(o,s,g))},enqueueForceUpdate:function(s,o){s=s._reactInternals;var u=mn(),d=ms(s),g=Ii(u,d);g.tag=2,o!=null&&(g.callback=o),o=hs(s,g,d),o!==null&&(_r(o,s,d,u),kh(o,s,d))}};function T0(s,o,u,d,g,v,S){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(d,v,S):o.prototype&&o.prototype.isPureReactComponent?!hu(u,d)||!hu(g,v):!0}function S0(s,o,u){var d=!1,g=ls,v=o.contextType;return typeof v=="object"&&v!==null?v=Gn(v):(g=En(o)?mo:sn.current,d=o.contextTypes,v=(d=d!=null)?Ra(s,g):ls),o=new o(u,v),s.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Lh,s.stateNode=o,o._reactInternals=s,d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=g,s.__reactInternalMemoizedMaskedChildContext=v),o}function x0(s,o,u,d){s=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==s&&Lh.enqueueReplaceState(o,o.state,null)}function Sm(s,o,u,d){var g=s.stateNode;g.props=u,g.state=s.memoizedState,g.refs={},um(s);var v=o.contextType;typeof v=="object"&&v!==null?g.context=Gn(v):(v=En(o)?mo:sn.current,g.context=Ra(s,v)),g.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Tm(s,o,v,u),g.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(o=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),o!==g.state&&Lh.enqueueReplaceState(g,g.state,null),Ph(s,u,g,d),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308)}function Fa(s,o){try{var u="",d=o;do u+=De(d),d=d.return;while(d);var g=u}catch(v){g=`
Error generating stack: `+v.message+`
`+v.stack}return{value:s,source:o,stack:g,digest:null}}function xm(s,o,u){return{value:s,source:null,stack:u??null,digest:o??null}}function Im(s,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var Db=typeof WeakMap=="function"?WeakMap:Map;function I0(s,o,u){u=Ii(-1,u),u.tag=3,u.payload={element:null};var d=o.value;return u.callback=function(){Bh||(Bh=!0,$m=d),Im(s,o)},u}function A0(s,o,u){u=Ii(-1,u),u.tag=3;var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var g=o.value;u.payload=function(){return d(g)},u.callback=function(){Im(s,o)}}var v=s.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(u.callback=function(){Im(s,o),typeof d!="function"&&(ds===null?ds=new Set([this]):ds.add(this));var S=o.stack;this.componentDidCatch(o.value,{componentStack:S!==null?S:""})}),u}function C0(s,o,u){var d=s.pingCache;if(d===null){d=s.pingCache=new Db;var g=new Set;d.set(o,g)}else g=d.get(o),g===void 0&&(g=new Set,d.set(o,g));g.has(u)||(g.add(u),s=qb.bind(null,s,o,u),o.then(s,s))}function k0(s){do{var o;if((o=s.tag===13)&&(o=s.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return s;s=s.return}while(s!==null);return null}function P0(s,o,u,d,g){return s.mode&1?(s.flags|=65536,s.lanes=g,s):(s===o?s.flags|=65536:(s.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=Ii(-1,1),o.tag=2,hs(u,o,1))),u.lanes|=1),s)}var Vb=$.ReactCurrentOwner,Tn=!1;function pn(s,o,u,d){o.child=s===null?Qw(o,null,u,d):Na(o,s.child,u,d)}function R0(s,o,u,d,g){u=u.render;var v=o.ref;return La(o,g),d=gm(s,o,u,d,v,g),u=ym(),s!==null&&!Tn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~g,Ai(s,o,g)):(ft&&u&&Zp(o),o.flags|=1,pn(s,o,d,g),o.child)}function b0(s,o,u,d,g){if(s===null){var v=u.type;return typeof v=="function"&&!Km(v)&&v.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=v,D0(s,o,v,d,g)):(s=Qh(u.type,null,d,o,o.mode,g),s.ref=o.ref,s.return=o,o.child=s)}if(v=s.child,!(s.lanes&g)){var S=v.memoizedProps;if(u=u.compare,u=u!==null?u:hu,u(S,d)&&s.ref===o.ref)return Ai(s,o,g)}return o.flags|=1,s=ys(v,d),s.ref=o.ref,s.return=o,o.child=s}function D0(s,o,u,d,g){if(s!==null){var v=s.memoizedProps;if(hu(v,d)&&s.ref===o.ref)if(Tn=!1,o.pendingProps=d=v,(s.lanes&g)!==0)s.flags&131072&&(Tn=!0);else return o.lanes=s.lanes,Ai(s,o,g)}return Am(s,o,u,d,g)}function V0(s,o,u){var d=o.pendingProps,g=d.children,v=s!==null?s.memoizedState:null;if(d.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},it($a,On),On|=u;else{if(!(u&1073741824))return s=v!==null?v.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:s,cachePool:null,transitions:null},o.updateQueue=null,it($a,On),On|=s,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:u,it($a,On),On|=d}else v!==null?(d=v.baseLanes|u,o.memoizedState=null):d=u,it($a,On),On|=d;return pn(s,o,g,u),o.child}function N0(s,o){var u=o.ref;(s===null&&u!==null||s!==null&&s.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Am(s,o,u,d,g){var v=En(u)?mo:sn.current;return v=Ra(o,v),La(o,g),u=gm(s,o,u,d,v,g),d=ym(),s!==null&&!Tn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~g,Ai(s,o,g)):(ft&&d&&Zp(o),o.flags|=1,pn(s,o,u,g),o.child)}function M0(s,o,u,d,g){if(En(u)){var v=!0;wh(o)}else v=!1;if(La(o,g),o.stateNode===null)Fh(s,o),S0(o,u,d),Sm(o,u,d,g),d=!0;else if(s===null){var S=o.stateNode,L=o.memoizedProps;S.props=L;var j=S.context,Q=u.contextType;typeof Q=="object"&&Q!==null?Q=Gn(Q):(Q=En(u)?mo:sn.current,Q=Ra(o,Q));var ne=u.getDerivedStateFromProps,se=typeof ne=="function"||typeof S.getSnapshotBeforeUpdate=="function";se||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==d||j!==Q)&&x0(o,S,d,Q),cs=!1;var te=o.memoizedState;S.state=te,Ph(o,d,S,g),j=o.memoizedState,L!==d||te!==j||wn.current||cs?(typeof ne=="function"&&(Tm(o,u,ne,d),j=o.memoizedState),(L=cs||T0(o,u,L,d,te,j,Q))?(se||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(o.flags|=4194308)):(typeof S.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=j),S.props=d,S.state=j,S.context=Q,d=L):(typeof S.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{S=o.stateNode,Xw(s,o),L=o.memoizedProps,Q=o.type===o.elementType?L:gr(o.type,L),S.props=Q,se=o.pendingProps,te=S.context,j=u.contextType,typeof j=="object"&&j!==null?j=Gn(j):(j=En(u)?mo:sn.current,j=Ra(o,j));var he=u.getDerivedStateFromProps;(ne=typeof he=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==se||te!==j)&&x0(o,S,d,j),cs=!1,te=o.memoizedState,S.state=te,Ph(o,d,S,g);var me=o.memoizedState;L!==se||te!==me||wn.current||cs?(typeof he=="function"&&(Tm(o,u,he,d),me=o.memoizedState),(Q=cs||T0(o,u,Q,d,te,me,j)||!1)?(ne||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(d,me,j),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(d,me,j)),typeof S.componentDidUpdate=="function"&&(o.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof S.componentDidUpdate!="function"||L===s.memoizedProps&&te===s.memoizedState||(o.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===s.memoizedProps&&te===s.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=me),S.props=d,S.state=me,S.context=j,d=Q):(typeof S.componentDidUpdate!="function"||L===s.memoizedProps&&te===s.memoizedState||(o.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===s.memoizedProps&&te===s.memoizedState||(o.flags|=1024),d=!1)}return Cm(s,o,u,d,v,g)}function Cm(s,o,u,d,g,v){N0(s,o);var S=(o.flags&128)!==0;if(!d&&!S)return g&&$w(o,u,!1),Ai(s,o,v);d=o.stateNode,Vb.current=o;var L=S&&typeof u.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,s!==null&&S?(o.child=Na(o,s.child,null,v),o.child=Na(o,null,L,v)):pn(s,o,L,v),o.memoizedState=d.state,g&&$w(o,u,!0),o.child}function L0(s){var o=s.stateNode;o.pendingContext?Fw(s,o.pendingContext,o.pendingContext!==o.context):o.context&&Fw(s,o.context,!1),cm(s,o.containerInfo)}function O0(s,o,u,d,g){return Va(),rm(g),o.flags|=256,pn(s,o,u,d),o.child}var km={dehydrated:null,treeContext:null,retryLane:0};function Pm(s){return{baseLanes:s,cachePool:null,transitions:null}}function F0(s,o,u){var d=o.pendingProps,g=mt.current,v=!1,S=(o.flags&128)!==0,L;if((L=S)||(L=s!==null&&s.memoizedState===null?!1:(g&2)!==0),L?(v=!0,o.flags&=-129):(s===null||s.memoizedState!==null)&&(g|=1),it(mt,g&1),s===null)return nm(o),s=o.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?(o.mode&1?s.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(S=d.children,s=d.fallback,v?(d=o.mode,v=o.child,S={mode:"hidden",children:S},!(d&1)&&v!==null?(v.childLanes=0,v.pendingProps=S):v=Yh(S,d,0,null),s=Io(s,d,u,null),v.return=o,s.return=o,v.sibling=s,o.child=v,o.child.memoizedState=Pm(u),o.memoizedState=km,s):Rm(o,S));if(g=s.memoizedState,g!==null&&(L=g.dehydrated,L!==null))return Nb(s,o,S,d,L,g,u);if(v){v=d.fallback,S=o.mode,g=s.child,L=g.sibling;var j={mode:"hidden",children:d.children};return!(S&1)&&o.child!==g?(d=o.child,d.childLanes=0,d.pendingProps=j,o.deletions=null):(d=ys(g,j),d.subtreeFlags=g.subtreeFlags&14680064),L!==null?v=ys(L,v):(v=Io(v,S,u,null),v.flags|=2),v.return=o,d.return=o,d.sibling=v,o.child=d,d=v,v=o.child,S=s.child.memoizedState,S=S===null?Pm(u):{baseLanes:S.baseLanes|u,cachePool:null,transitions:S.transitions},v.memoizedState=S,v.childLanes=s.childLanes&~u,o.memoizedState=km,d}return v=s.child,s=v.sibling,d=ys(v,{mode:"visible",children:d.children}),!(o.mode&1)&&(d.lanes=u),d.return=o,d.sibling=null,s!==null&&(u=o.deletions,u===null?(o.deletions=[s],o.flags|=16):u.push(s)),o.child=d,o.memoizedState=null,d}function Rm(s,o){return o=Yh({mode:"visible",children:o},s.mode,0,null),o.return=s,s.child=o}function Oh(s,o,u,d){return d!==null&&rm(d),Na(o,s.child,null,u),s=Rm(o,o.pendingProps.children),s.flags|=2,o.memoizedState=null,s}function Nb(s,o,u,d,g,v,S){if(u)return o.flags&256?(o.flags&=-257,d=xm(Error(n(422))),Oh(s,o,S,d)):o.memoizedState!==null?(o.child=s.child,o.flags|=128,null):(v=d.fallback,g=o.mode,d=Yh({mode:"visible",children:d.children},g,0,null),v=Io(v,g,S,null),v.flags|=2,d.return=o,v.return=o,d.sibling=v,o.child=d,o.mode&1&&Na(o,s.child,null,S),o.child.memoizedState=Pm(S),o.memoizedState=km,v);if(!(o.mode&1))return Oh(s,o,S,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var L=d.dgst;return d=L,v=Error(n(419)),d=xm(v,d,void 0),Oh(s,o,S,d)}if(L=(S&s.childLanes)!==0,Tn||L){if(d=$t,d!==null){switch(S&-S){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=g&(d.suspendedLanes|S)?0:g,g!==0&&g!==v.retryLane&&(v.retryLane=g,xi(s,g),_r(d,s,g,-1))}return qm(),d=xm(Error(n(421))),Oh(s,o,S,d)}return g.data==="$?"?(o.flags|=128,o.child=s.child,o=Kb.bind(null,s),g._reactRetry=o,null):(s=v.treeContext,Ln=os(g.nextSibling),Mn=o,ft=!0,mr=null,s!==null&&(qn[Kn++]=Ti,qn[Kn++]=Si,qn[Kn++]=go,Ti=s.id,Si=s.overflow,go=o),o=Rm(o,d.children),o.flags|=4096,o)}function j0(s,o,u){s.lanes|=o;var d=s.alternate;d!==null&&(d.lanes|=o),am(s.return,o,u)}function bm(s,o,u,d,g){var v=s.memoizedState;v===null?s.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:g}:(v.isBackwards=o,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=u,v.tailMode=g)}function $0(s,o,u){var d=o.pendingProps,g=d.revealOrder,v=d.tail;if(pn(s,o,d.children,u),d=mt.current,d&2)d=d&1|2,o.flags|=128;else{if(s!==null&&s.flags&128)e:for(s=o.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&j0(s,u,o);else if(s.tag===19)j0(s,u,o);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===o)break e;for(;s.sibling===null;){if(s.return===null||s.return===o)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}d&=1}if(it(mt,d),!(o.mode&1))o.memoizedState=null;else switch(g){case"forwards":for(u=o.child,g=null;u!==null;)s=u.alternate,s!==null&&Rh(s)===null&&(g=u),u=u.sibling;u=g,u===null?(g=o.child,o.child=null):(g=u.sibling,u.sibling=null),bm(o,!1,g,u,v);break;case"backwards":for(u=null,g=o.child,o.child=null;g!==null;){if(s=g.alternate,s!==null&&Rh(s)===null){o.child=g;break}s=g.sibling,g.sibling=u,u=g,g=s}bm(o,!0,u,null,v);break;case"together":bm(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Fh(s,o){!(o.mode&1)&&s!==null&&(s.alternate=null,o.alternate=null,o.flags|=2)}function Ai(s,o,u){if(s!==null&&(o.dependencies=s.dependencies),Eo|=o.lanes,!(u&o.childLanes))return null;if(s!==null&&o.child!==s.child)throw Error(n(153));if(o.child!==null){for(s=o.child,u=ys(s,s.pendingProps),o.child=u,u.return=o;s.sibling!==null;)s=s.sibling,u=u.sibling=ys(s,s.pendingProps),u.return=o;u.sibling=null}return o.child}function Mb(s,o,u){switch(o.tag){case 3:L0(o),Va();break;case 5:e0(o);break;case 1:En(o.type)&&wh(o);break;case 4:cm(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,g=o.memoizedProps.value;it(Ah,d._currentValue),d._currentValue=g;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(it(mt,mt.current&1),o.flags|=128,null):u&o.child.childLanes?F0(s,o,u):(it(mt,mt.current&1),s=Ai(s,o,u),s!==null?s.sibling:null);it(mt,mt.current&1);break;case 19:if(d=(u&o.childLanes)!==0,s.flags&128){if(d)return $0(s,o,u);o.flags|=128}if(g=o.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),it(mt,mt.current),d)break;return null;case 22:case 23:return o.lanes=0,V0(s,o,u)}return Ai(s,o,u)}var U0,Dm,z0,B0;U0=function(s,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Dm=function(){},z0=function(s,o,u,d){var g=s.memoizedProps;if(g!==d){s=o.stateNode,_o(Gr.current);var v=null;switch(u){case"input":g=na(s,g),d=na(s,d),v=[];break;case"select":g=ue({},g,{value:void 0}),d=ue({},d,{value:void 0}),v=[];break;case"textarea":g=$l(s,g),d=$l(s,d),v=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(s.onclick=yh)}hr(u,d);var S;u=null;for(Q in g)if(!d.hasOwnProperty(Q)&&g.hasOwnProperty(Q)&&g[Q]!=null)if(Q==="style"){var L=g[Q];for(S in L)L.hasOwnProperty(S)&&(u||(u={}),u[S]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(i.hasOwnProperty(Q)?v||(v=[]):(v=v||[]).push(Q,null));for(Q in d){var j=d[Q];if(L=g!=null?g[Q]:void 0,d.hasOwnProperty(Q)&&j!==L&&(j!=null||L!=null))if(Q==="style")if(L){for(S in L)!L.hasOwnProperty(S)||j&&j.hasOwnProperty(S)||(u||(u={}),u[S]="");for(S in j)j.hasOwnProperty(S)&&L[S]!==j[S]&&(u||(u={}),u[S]=j[S])}else u||(v||(v=[]),v.push(Q,u)),u=j;else Q==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,L=L?L.__html:void 0,j!=null&&L!==j&&(v=v||[]).push(Q,j)):Q==="children"?typeof j!="string"&&typeof j!="number"||(v=v||[]).push(Q,""+j):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(i.hasOwnProperty(Q)?(j!=null&&Q==="onScroll"&&at("scroll",s),v||L===j||(v=[])):(v=v||[]).push(Q,j))}u&&(v=v||[]).push("style",u);var Q=v;(o.updateQueue=Q)&&(o.flags|=4)}},B0=function(s,o,u,d){u!==d&&(o.flags|=4)};function Au(s,o){if(!ft)switch(s.tailMode){case"hidden":o=s.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s.tail=null:u.sibling=null;break;case"collapsed":u=s.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||s.tail===null?s.tail=null:s.tail.sibling=null:d.sibling=null}}function an(s){var o=s.alternate!==null&&s.alternate.child===s.child,u=0,d=0;if(o)for(var g=s.child;g!==null;)u|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=s,g=g.sibling;else for(g=s.child;g!==null;)u|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=s,g=g.sibling;return s.subtreeFlags|=d,s.childLanes=u,o}function Lb(s,o,u){var d=o.pendingProps;switch(em(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(o),null;case 1:return En(o.type)&&_h(),an(o),null;case 3:return d=o.stateNode,Oa(),lt(wn),lt(sn),dm(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(s===null||s.child===null)&&(xh(o)?o.flags|=4:s===null||s.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,mr!==null&&(Bm(mr),mr=null))),Dm(s,o),an(o),null;case 5:hm(o);var g=_o(Eu.current);if(u=o.type,s!==null&&o.stateNode!=null)z0(s,o,u,d,g),s.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(n(166));return an(o),null}if(s=_o(Gr.current),xh(o)){d=o.stateNode,u=o.type;var v=o.memoizedProps;switch(d[Kr]=o,d[gu]=v,s=(o.mode&1)!==0,u){case"dialog":at("cancel",d),at("close",d);break;case"iframe":case"object":case"embed":at("load",d);break;case"video":case"audio":for(g=0;g<du.length;g++)at(du[g],d);break;case"source":at("error",d);break;case"img":case"image":case"link":at("error",d),at("load",d);break;case"details":at("toggle",d);break;case"input":zc(d,v),at("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},at("invalid",d);break;case"textarea":Ul(d,v),at("invalid",d)}hr(u,v),g=null;for(var S in v)if(v.hasOwnProperty(S)){var L=v[S];S==="children"?typeof L=="string"?d.textContent!==L&&(v.suppressHydrationWarning!==!0&&gh(d.textContent,L,s),g=["children",L]):typeof L=="number"&&d.textContent!==""+L&&(v.suppressHydrationWarning!==!0&&gh(d.textContent,L,s),g=["children",""+L]):i.hasOwnProperty(S)&&L!=null&&S==="onScroll"&&at("scroll",d)}switch(u){case"input":ur(d),jl(d,v,!0);break;case"textarea":ur(d),Wi(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=yh)}d=g,o.updateQueue=d,d!==null&&(o.flags|=4)}else{S=g.nodeType===9?g:g.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=zl(u)),s==="http://www.w3.org/1999/xhtml"?u==="script"?(s=S.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof d.is=="string"?s=S.createElement(u,{is:d.is}):(s=S.createElement(u),u==="select"&&(S=s,d.multiple?S.multiple=!0:d.size&&(S.size=d.size))):s=S.createElementNS(s,u),s[Kr]=o,s[gu]=d,U0(s,o,!1,!1),o.stateNode=s;e:{switch(S=oa(u,d),u){case"dialog":at("cancel",s),at("close",s),g=d;break;case"iframe":case"object":case"embed":at("load",s),g=d;break;case"video":case"audio":for(g=0;g<du.length;g++)at(du[g],s);g=d;break;case"source":at("error",s),g=d;break;case"img":case"image":case"link":at("error",s),at("load",s),g=d;break;case"details":at("toggle",s),g=d;break;case"input":zc(s,d),g=na(s,d),at("invalid",s);break;case"option":g=d;break;case"select":s._wrapperState={wasMultiple:!!d.multiple},g=ue({},d,{value:void 0}),at("invalid",s);break;case"textarea":Ul(s,d),g=$l(s,d),at("invalid",s);break;default:g=d}hr(u,g),L=g;for(v in L)if(L.hasOwnProperty(v)){var j=L[v];v==="style"?sa(s,j):v==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Wc(s,j)):v==="children"?typeof j=="string"?(u!=="textarea"||j!=="")&&Zs(s,j):typeof j=="number"&&Zs(s,""+j):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(i.hasOwnProperty(v)?j!=null&&v==="onScroll"&&at("scroll",s):j!=null&&U(s,v,j,S))}switch(u){case"input":ur(s),jl(s,d,!1);break;case"textarea":ur(s),Wi(s);break;case"option":d.value!=null&&s.setAttribute("value",""+Me(d.value));break;case"select":s.multiple=!!d.multiple,v=d.value,v!=null?cr(s,!!d.multiple,v,!1):d.defaultValue!=null&&cr(s,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(s.onclick=yh)}switch(u){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return an(o),null;case 6:if(s&&o.stateNode!=null)B0(s,o,s.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(n(166));if(u=_o(Eu.current),_o(Gr.current),xh(o)){if(d=o.stateNode,u=o.memoizedProps,d[Kr]=o,(v=d.nodeValue!==u)&&(s=Mn,s!==null))switch(s.tag){case 3:gh(d.nodeValue,u,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&gh(d.nodeValue,u,(s.mode&1)!==0)}v&&(o.flags|=4)}else d=(u.nodeType===9?u:u.ownerDocument).createTextNode(d),d[Kr]=o,o.stateNode=d}return an(o),null;case 13:if(lt(mt),d=o.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(ft&&Ln!==null&&o.mode&1&&!(o.flags&128))qw(),Va(),o.flags|=98560,v=!1;else if(v=xh(o),d!==null&&d.dehydrated!==null){if(s===null){if(!v)throw Error(n(318));if(v=o.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(n(317));v[Kr]=o}else Va(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;an(o),v=!1}else mr!==null&&(Bm(mr),mr=null),v=!0;if(!v)return o.flags&65536?o:null}return o.flags&128?(o.lanes=u,o):(d=d!==null,d!==(s!==null&&s.memoizedState!==null)&&d&&(o.child.flags|=8192,o.mode&1&&(s===null||mt.current&1?Lt===0&&(Lt=3):qm())),o.updateQueue!==null&&(o.flags|=4),an(o),null);case 4:return Oa(),Dm(s,o),s===null&&pu(o.stateNode.containerInfo),an(o),null;case 10:return om(o.type._context),an(o),null;case 17:return En(o.type)&&_h(),an(o),null;case 19:if(lt(mt),v=o.memoizedState,v===null)return an(o),null;if(d=(o.flags&128)!==0,S=v.rendering,S===null)if(d)Au(v,!1);else{if(Lt!==0||s!==null&&s.flags&128)for(s=o.child;s!==null;){if(S=Rh(s),S!==null){for(o.flags|=128,Au(v,!1),d=S.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=u,u=o.child;u!==null;)v=u,s=d,v.flags&=14680066,S=v.alternate,S===null?(v.childLanes=0,v.lanes=s,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=S.childLanes,v.lanes=S.lanes,v.child=S.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=S.memoizedProps,v.memoizedState=S.memoizedState,v.updateQueue=S.updateQueue,v.type=S.type,s=S.dependencies,v.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),u=u.sibling;return it(mt,mt.current&1|2),o.child}s=s.sibling}v.tail!==null&&ot()>Ua&&(o.flags|=128,d=!0,Au(v,!1),o.lanes=4194304)}else{if(!d)if(s=Rh(S),s!==null){if(o.flags|=128,d=!0,u=s.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),Au(v,!0),v.tail===null&&v.tailMode==="hidden"&&!S.alternate&&!ft)return an(o),null}else 2*ot()-v.renderingStartTime>Ua&&u!==1073741824&&(o.flags|=128,d=!0,Au(v,!1),o.lanes=4194304);v.isBackwards?(S.sibling=o.child,o.child=S):(u=v.last,u!==null?u.sibling=S:o.child=S,v.last=S)}return v.tail!==null?(o=v.tail,v.rendering=o,v.tail=o.sibling,v.renderingStartTime=ot(),o.sibling=null,u=mt.current,it(mt,d?u&1|2:u&1),o):(an(o),null);case 22:case 23:return Hm(),d=o.memoizedState!==null,s!==null&&s.memoizedState!==null!==d&&(o.flags|=8192),d&&o.mode&1?On&1073741824&&(an(o),o.subtreeFlags&6&&(o.flags|=8192)):an(o),null;case 24:return null;case 25:return null}throw Error(n(156,o.tag))}function Ob(s,o){switch(em(o),o.tag){case 1:return En(o.type)&&_h(),s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 3:return Oa(),lt(wn),lt(sn),dm(),s=o.flags,s&65536&&!(s&128)?(o.flags=s&-65537|128,o):null;case 5:return hm(o),null;case 13:if(lt(mt),s=o.memoizedState,s!==null&&s.dehydrated!==null){if(o.alternate===null)throw Error(n(340));Va()}return s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 19:return lt(mt),null;case 4:return Oa(),null;case 10:return om(o.type._context),null;case 22:case 23:return Hm(),null;case 24:return null;default:return null}}var jh=!1,ln=!1,Fb=typeof WeakSet=="function"?WeakSet:Set,pe=null;function ja(s,o){var u=s.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(d){_t(s,o,d)}else u.current=null}function Vm(s,o,u){try{u()}catch(d){_t(s,o,d)}}var W0=!1;function jb(s,o){if(Hp=yi,s=Tw(),Op(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{u=(u=s.ownerDocument)&&u.defaultView||window;var d=u.getSelection&&u.getSelection();if(d&&d.rangeCount!==0){u=d.anchorNode;var g=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{u.nodeType,v.nodeType}catch{u=null;break e}var S=0,L=-1,j=-1,Q=0,ne=0,se=s,te=null;t:for(;;){for(var he;se!==u||g!==0&&se.nodeType!==3||(L=S+g),se!==v||d!==0&&se.nodeType!==3||(j=S+d),se.nodeType===3&&(S+=se.nodeValue.length),(he=se.firstChild)!==null;)te=se,se=he;for(;;){if(se===s)break t;if(te===u&&++Q===g&&(L=S),te===v&&++ne===d&&(j=S),(he=se.nextSibling)!==null)break;se=te,te=se.parentNode}se=he}u=L===-1||j===-1?null:{start:L,end:j}}else u=null}u=u||{start:0,end:0}}else u=null;for(qp={focusedElem:s,selectionRange:u},yi=!1,pe=o;pe!==null;)if(o=pe,s=o.child,(o.subtreeFlags&1028)!==0&&s!==null)s.return=o,pe=s;else for(;pe!==null;){o=pe;try{var me=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ye=me.memoizedProps,St=me.memoizedState,q=o.stateNode,z=q.getSnapshotBeforeUpdate(o.elementType===o.type?ye:gr(o.type,ye),St);q.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var G=o.stateNode.containerInfo;G.nodeType===1?G.textContent="":G.nodeType===9&&G.documentElement&&G.removeChild(G.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ae){_t(o,o.return,ae)}if(s=o.sibling,s!==null){s.return=o.return,pe=s;break}pe=o.return}return me=W0,W0=!1,me}function Cu(s,o,u){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&s)===s){var v=g.destroy;g.destroy=void 0,v!==void 0&&Vm(o,u,v)}g=g.next}while(g!==d)}}function $h(s,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&s)===s){var d=u.create;u.destroy=d()}u=u.next}while(u!==o)}}function Nm(s){var o=s.ref;if(o!==null){var u=s.stateNode;switch(s.tag){case 5:s=u;break;default:s=u}typeof o=="function"?o(s):o.current=s}}function H0(s){var o=s.alternate;o!==null&&(s.alternate=null,H0(o)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(o=s.stateNode,o!==null&&(delete o[Kr],delete o[gu],delete o[Yp],delete o[Eb],delete o[Tb])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function q0(s){return s.tag===5||s.tag===3||s.tag===4}function K0(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||q0(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Mm(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(s,o):u.insertBefore(s,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(s,u)):(o=u,o.appendChild(s)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=yh));else if(d!==4&&(s=s.child,s!==null))for(Mm(s,o,u),s=s.sibling;s!==null;)Mm(s,o,u),s=s.sibling}function Lm(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.insertBefore(s,o):u.appendChild(s);else if(d!==4&&(s=s.child,s!==null))for(Lm(s,o,u),s=s.sibling;s!==null;)Lm(s,o,u),s=s.sibling}var Gt=null,yr=!1;function fs(s,o,u){for(u=u.child;u!==null;)G0(s,o,u),u=u.sibling}function G0(s,o,u){if(Pn&&typeof Pn.onCommitFiberUnmount=="function")try{Pn.onCommitFiberUnmount(io,u)}catch{}switch(u.tag){case 5:ln||ja(u,o);case 6:var d=Gt,g=yr;Gt=null,fs(s,o,u),Gt=d,yr=g,Gt!==null&&(yr?(s=Gt,u=u.stateNode,s.nodeType===8?s.parentNode.removeChild(u):s.removeChild(u)):Gt.removeChild(u.stateNode));break;case 18:Gt!==null&&(yr?(s=Gt,u=u.stateNode,s.nodeType===8?Qp(s.parentNode,u):s.nodeType===1&&Qp(s,u),ns(s)):Qp(Gt,u.stateNode));break;case 4:d=Gt,g=yr,Gt=u.stateNode.containerInfo,yr=!0,fs(s,o,u),Gt=d,yr=g;break;case 0:case 11:case 14:case 15:if(!ln&&(d=u.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var v=g,S=v.destroy;v=v.tag,S!==void 0&&(v&2||v&4)&&Vm(u,o,S),g=g.next}while(g!==d)}fs(s,o,u);break;case 1:if(!ln&&(ja(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=u.memoizedProps,d.state=u.memoizedState,d.componentWillUnmount()}catch(L){_t(u,o,L)}fs(s,o,u);break;case 21:fs(s,o,u);break;case 22:u.mode&1?(ln=(d=ln)||u.memoizedState!==null,fs(s,o,u),ln=d):fs(s,o,u);break;default:fs(s,o,u)}}function Q0(s){var o=s.updateQueue;if(o!==null){s.updateQueue=null;var u=s.stateNode;u===null&&(u=s.stateNode=new Fb),o.forEach(function(d){var g=Gb.bind(null,s,d);u.has(d)||(u.add(d),d.then(g,g))})}}function vr(s,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var g=u[d];try{var v=s,S=o,L=S;e:for(;L!==null;){switch(L.tag){case 5:Gt=L.stateNode,yr=!1;break e;case 3:Gt=L.stateNode.containerInfo,yr=!0;break e;case 4:Gt=L.stateNode.containerInfo,yr=!0;break e}L=L.return}if(Gt===null)throw Error(n(160));G0(v,S,g),Gt=null,yr=!1;var j=g.alternate;j!==null&&(j.return=null),g.return=null}catch(Q){_t(g,o,Q)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Y0(o,s),o=o.sibling}function Y0(s,o){var u=s.alternate,d=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(vr(o,s),Yr(s),d&4){try{Cu(3,s,s.return),$h(3,s)}catch(ye){_t(s,s.return,ye)}try{Cu(5,s,s.return)}catch(ye){_t(s,s.return,ye)}}break;case 1:vr(o,s),Yr(s),d&512&&u!==null&&ja(u,u.return);break;case 5:if(vr(o,s),Yr(s),d&512&&u!==null&&ja(u,u.return),s.flags&32){var g=s.stateNode;try{Zs(g,"")}catch(ye){_t(s,s.return,ye)}}if(d&4&&(g=s.stateNode,g!=null)){var v=s.memoizedProps,S=u!==null?u.memoizedProps:v,L=s.type,j=s.updateQueue;if(s.updateQueue=null,j!==null)try{L==="input"&&v.type==="radio"&&v.name!=null&&ra(g,v),oa(L,S);var Q=oa(L,v);for(S=0;S<j.length;S+=2){var ne=j[S],se=j[S+1];ne==="style"?sa(g,se):ne==="dangerouslySetInnerHTML"?Wc(g,se):ne==="children"?Zs(g,se):U(g,ne,se,Q)}switch(L){case"input":Js(g,v);break;case"textarea":Bc(g,v);break;case"select":var te=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!v.multiple;var he=v.value;he!=null?cr(g,!!v.multiple,he,!1):te!==!!v.multiple&&(v.defaultValue!=null?cr(g,!!v.multiple,v.defaultValue,!0):cr(g,!!v.multiple,v.multiple?[]:"",!1))}g[gu]=v}catch(ye){_t(s,s.return,ye)}}break;case 6:if(vr(o,s),Yr(s),d&4){if(s.stateNode===null)throw Error(n(162));g=s.stateNode,v=s.memoizedProps;try{g.nodeValue=v}catch(ye){_t(s,s.return,ye)}}break;case 3:if(vr(o,s),Yr(s),d&4&&u!==null&&u.memoizedState.isDehydrated)try{ns(o.containerInfo)}catch(ye){_t(s,s.return,ye)}break;case 4:vr(o,s),Yr(s);break;case 13:vr(o,s),Yr(s),g=s.child,g.flags&8192&&(v=g.memoizedState!==null,g.stateNode.isHidden=v,!v||g.alternate!==null&&g.alternate.memoizedState!==null||(jm=ot())),d&4&&Q0(s);break;case 22:if(ne=u!==null&&u.memoizedState!==null,s.mode&1?(ln=(Q=ln)||ne,vr(o,s),ln=Q):vr(o,s),Yr(s),d&8192){if(Q=s.memoizedState!==null,(s.stateNode.isHidden=Q)&&!ne&&s.mode&1)for(pe=s,ne=s.child;ne!==null;){for(se=pe=ne;pe!==null;){switch(te=pe,he=te.child,te.tag){case 0:case 11:case 14:case 15:Cu(4,te,te.return);break;case 1:ja(te,te.return);var me=te.stateNode;if(typeof me.componentWillUnmount=="function"){d=te,u=te.return;try{o=d,me.props=o.memoizedProps,me.state=o.memoizedState,me.componentWillUnmount()}catch(ye){_t(d,u,ye)}}break;case 5:ja(te,te.return);break;case 22:if(te.memoizedState!==null){Z0(se);continue}}he!==null?(he.return=te,pe=he):Z0(se)}ne=ne.sibling}e:for(ne=null,se=s;;){if(se.tag===5){if(ne===null){ne=se;try{g=se.stateNode,Q?(v=g.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(L=se.stateNode,j=se.memoizedProps.style,S=j!=null&&j.hasOwnProperty("display")?j.display:null,L.style.display=Ki("display",S))}catch(ye){_t(s,s.return,ye)}}}else if(se.tag===6){if(ne===null)try{se.stateNode.nodeValue=Q?"":se.memoizedProps}catch(ye){_t(s,s.return,ye)}}else if((se.tag!==22&&se.tag!==23||se.memoizedState===null||se===s)&&se.child!==null){se.child.return=se,se=se.child;continue}if(se===s)break e;for(;se.sibling===null;){if(se.return===null||se.return===s)break e;ne===se&&(ne=null),se=se.return}ne===se&&(ne=null),se.sibling.return=se.return,se=se.sibling}}break;case 19:vr(o,s),Yr(s),d&4&&Q0(s);break;case 21:break;default:vr(o,s),Yr(s)}}function Yr(s){var o=s.flags;if(o&2){try{e:{for(var u=s.return;u!==null;){if(q0(u)){var d=u;break e}u=u.return}throw Error(n(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(Zs(g,""),d.flags&=-33);var v=K0(s);Lm(s,v,g);break;case 3:case 4:var S=d.stateNode.containerInfo,L=K0(s);Mm(s,L,S);break;default:throw Error(n(161))}}catch(j){_t(s,s.return,j)}s.flags&=-3}o&4096&&(s.flags&=-4097)}function $b(s,o,u){pe=s,X0(s)}function X0(s,o,u){for(var d=(s.mode&1)!==0;pe!==null;){var g=pe,v=g.child;if(g.tag===22&&d){var S=g.memoizedState!==null||jh;if(!S){var L=g.alternate,j=L!==null&&L.memoizedState!==null||ln;L=jh;var Q=ln;if(jh=S,(ln=j)&&!Q)for(pe=g;pe!==null;)S=pe,j=S.child,S.tag===22&&S.memoizedState!==null?eE(g):j!==null?(j.return=S,pe=j):eE(g);for(;v!==null;)pe=v,X0(v),v=v.sibling;pe=g,jh=L,ln=Q}J0(s)}else g.subtreeFlags&8772&&v!==null?(v.return=g,pe=v):J0(s)}}function J0(s){for(;pe!==null;){var o=pe;if(o.flags&8772){var u=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:ln||$h(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!ln)if(u===null)d.componentDidMount();else{var g=o.elementType===o.type?u.memoizedProps:gr(o.type,u.memoizedProps);d.componentDidUpdate(g,u.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=o.updateQueue;v!==null&&Zw(o,v,d);break;case 3:var S=o.updateQueue;if(S!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}Zw(o,S,u)}break;case 5:var L=o.stateNode;if(u===null&&o.flags&4){u=L;var j=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&u.focus();break;case"img":j.src&&(u.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var Q=o.alternate;if(Q!==null){var ne=Q.memoizedState;if(ne!==null){var se=ne.dehydrated;se!==null&&ns(se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ln||o.flags&512&&Nm(o)}catch(te){_t(o,o.return,te)}}if(o===s){pe=null;break}if(u=o.sibling,u!==null){u.return=o.return,pe=u;break}pe=o.return}}function Z0(s){for(;pe!==null;){var o=pe;if(o===s){pe=null;break}var u=o.sibling;if(u!==null){u.return=o.return,pe=u;break}pe=o.return}}function eE(s){for(;pe!==null;){var o=pe;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{$h(4,o)}catch(j){_t(o,u,j)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var g=o.return;try{d.componentDidMount()}catch(j){_t(o,g,j)}}var v=o.return;try{Nm(o)}catch(j){_t(o,v,j)}break;case 5:var S=o.return;try{Nm(o)}catch(j){_t(o,S,j)}}}catch(j){_t(o,o.return,j)}if(o===s){pe=null;break}var L=o.sibling;if(L!==null){L.return=o.return,pe=L;break}pe=o.return}}var Ub=Math.ceil,Uh=$.ReactCurrentDispatcher,Om=$.ReactCurrentOwner,Yn=$.ReactCurrentBatchConfig,We=0,$t=null,Ct=null,Qt=0,On=0,$a=as(0),Lt=0,ku=null,Eo=0,zh=0,Fm=0,Pu=null,Sn=null,jm=0,Ua=1/0,Ci=null,Bh=!1,$m=null,ds=null,Wh=!1,ps=null,Hh=0,Ru=0,Um=null,qh=-1,Kh=0;function mn(){return We&6?ot():qh!==-1?qh:qh=ot()}function ms(s){return s.mode&1?We&2&&Qt!==0?Qt&-Qt:xb.transition!==null?(Kh===0&&(Kh=Xl()),Kh):(s=ze,s!==0||(s=window.event,s=s===void 0?16:ga(s.type)),s):1}function _r(s,o,u,d){if(50<Ru)throw Ru=0,Um=null,Error(n(185));lo(s,u,d),(!(We&2)||s!==$t)&&(s===$t&&(!(We&2)&&(zh|=u),Lt===4&&gs(s,Qt)),xn(s,d),u===1&&We===0&&!(o.mode&1)&&(Ua=ot()+500,Eh&&us()))}function xn(s,o){var u=s.callbackNode;ao(s,o);var d=pi(s,s===$t?Qt:0);if(d===0)u!==null&&ua(u),s.callbackNode=null,s.callbackPriority=0;else if(o=d&-d,s.callbackPriority!==o){if(u!=null&&ua(u),o===1)s.tag===0?Sb(nE.bind(null,s)):Uw(nE.bind(null,s)),_b(function(){!(We&6)&&us()}),u=null;else{switch(Or(d)){case 1:u=ca;break;case 4:u=Gl;break;case 16:u=ro;break;case 536870912:u=ha;break;default:u=ro}u=cE(u,tE.bind(null,s))}s.callbackPriority=o,s.callbackNode=u}}function tE(s,o){if(qh=-1,Kh=0,We&6)throw Error(n(327));var u=s.callbackNode;if(za()&&s.callbackNode!==u)return null;var d=pi(s,s===$t?Qt:0);if(d===0)return null;if(d&30||d&s.expiredLanes||o)o=Gh(s,d);else{o=d;var g=We;We|=2;var v=iE();($t!==s||Qt!==o)&&(Ci=null,Ua=ot()+500,So(s,o));do try{Wb();break}catch(L){rE(s,L)}while(!0);sm(),Uh.current=v,We=g,Ct!==null?o=0:($t=null,Qt=0,o=Lt)}if(o!==0){if(o===2&&(g=Yl(s),g!==0&&(d=g,o=zm(s,g))),o===1)throw u=ku,So(s,0),gs(s,d),xn(s,ot()),u;if(o===6)gs(s,d);else{if(g=s.current.alternate,!(d&30)&&!zb(g)&&(o=Gh(s,d),o===2&&(v=Yl(s),v!==0&&(d=v,o=zm(s,v))),o===1))throw u=ku,So(s,0),gs(s,d),xn(s,ot()),u;switch(s.finishedWork=g,s.finishedLanes=d,o){case 0:case 1:throw Error(n(345));case 2:xo(s,Sn,Ci);break;case 3:if(gs(s,d),(d&130023424)===d&&(o=jm+500-ot(),10<o)){if(pi(s,0)!==0)break;if(g=s.suspendedLanes,(g&d)!==d){mn(),s.pingedLanes|=s.suspendedLanes&g;break}s.timeoutHandle=Gp(xo.bind(null,s,Sn,Ci),o);break}xo(s,Sn,Ci);break;case 4:if(gs(s,d),(d&4194240)===d)break;for(o=s.eventTimes,g=-1;0<d;){var S=31-Rn(d);v=1<<S,S=o[S],S>g&&(g=S),d&=~v}if(d=g,d=ot()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Ub(d/1960))-d,10<d){s.timeoutHandle=Gp(xo.bind(null,s,Sn,Ci),d);break}xo(s,Sn,Ci);break;case 5:xo(s,Sn,Ci);break;default:throw Error(n(329))}}}return xn(s,ot()),s.callbackNode===u?tE.bind(null,s):null}function zm(s,o){var u=Pu;return s.current.memoizedState.isDehydrated&&(So(s,o).flags|=256),s=Gh(s,o),s!==2&&(o=Sn,Sn=u,o!==null&&Bm(o)),s}function Bm(s){Sn===null?Sn=s:Sn.push.apply(Sn,s)}function zb(s){for(var o=s;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var d=0;d<u.length;d++){var g=u[d],v=g.getSnapshot;g=g.value;try{if(!pr(v(),g))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function gs(s,o){for(o&=~Fm,o&=~zh,s.suspendedLanes|=o,s.pingedLanes&=~o,s=s.expirationTimes;0<o;){var u=31-Rn(o),d=1<<u;s[u]=-1,o&=~d}}function nE(s){if(We&6)throw Error(n(327));za();var o=pi(s,0);if(!(o&1))return xn(s,ot()),null;var u=Gh(s,o);if(s.tag!==0&&u===2){var d=Yl(s);d!==0&&(o=d,u=zm(s,d))}if(u===1)throw u=ku,So(s,0),gs(s,o),xn(s,ot()),u;if(u===6)throw Error(n(345));return s.finishedWork=s.current.alternate,s.finishedLanes=o,xo(s,Sn,Ci),xn(s,ot()),null}function Wm(s,o){var u=We;We|=1;try{return s(o)}finally{We=u,We===0&&(Ua=ot()+500,Eh&&us())}}function To(s){ps!==null&&ps.tag===0&&!(We&6)&&za();var o=We;We|=1;var u=Yn.transition,d=ze;try{if(Yn.transition=null,ze=1,s)return s()}finally{ze=d,Yn.transition=u,We=o,!(We&6)&&us()}}function Hm(){On=$a.current,lt($a)}function So(s,o){s.finishedWork=null,s.finishedLanes=0;var u=s.timeoutHandle;if(u!==-1&&(s.timeoutHandle=-1,vb(u)),Ct!==null)for(u=Ct.return;u!==null;){var d=u;switch(em(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&_h();break;case 3:Oa(),lt(wn),lt(sn),dm();break;case 5:hm(d);break;case 4:Oa();break;case 13:lt(mt);break;case 19:lt(mt);break;case 10:om(d.type._context);break;case 22:case 23:Hm()}u=u.return}if($t=s,Ct=s=ys(s.current,null),Qt=On=o,Lt=0,ku=null,Fm=zh=Eo=0,Sn=Pu=null,vo!==null){for(o=0;o<vo.length;o++)if(u=vo[o],d=u.interleaved,d!==null){u.interleaved=null;var g=d.next,v=u.pending;if(v!==null){var S=v.next;v.next=g,d.next=S}u.pending=d}vo=null}return s}function rE(s,o){do{var u=Ct;try{if(sm(),bh.current=Mh,Dh){for(var d=gt.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}Dh=!1}if(wo=0,jt=Mt=gt=null,Tu=!1,Su=0,Om.current=null,u===null||u.return===null){Lt=1,ku=o,Ct=null;break}e:{var v=s,S=u.return,L=u,j=o;if(o=Qt,L.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var Q=j,ne=L,se=ne.tag;if(!(ne.mode&1)&&(se===0||se===11||se===15)){var te=ne.alternate;te?(ne.updateQueue=te.updateQueue,ne.memoizedState=te.memoizedState,ne.lanes=te.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var he=k0(S);if(he!==null){he.flags&=-257,P0(he,S,L,v,o),he.mode&1&&C0(v,Q,o),o=he,j=Q;var me=o.updateQueue;if(me===null){var ye=new Set;ye.add(j),o.updateQueue=ye}else me.add(j);break e}else{if(!(o&1)){C0(v,Q,o),qm();break e}j=Error(n(426))}}else if(ft&&L.mode&1){var St=k0(S);if(St!==null){!(St.flags&65536)&&(St.flags|=256),P0(St,S,L,v,o),rm(Fa(j,L));break e}}v=j=Fa(j,L),Lt!==4&&(Lt=2),Pu===null?Pu=[v]:Pu.push(v),v=S;do{switch(v.tag){case 3:v.flags|=65536,o&=-o,v.lanes|=o;var q=I0(v,j,o);Jw(v,q);break e;case 1:L=j;var z=v.type,G=v.stateNode;if(!(v.flags&128)&&(typeof z.getDerivedStateFromError=="function"||G!==null&&typeof G.componentDidCatch=="function"&&(ds===null||!ds.has(G)))){v.flags|=65536,o&=-o,v.lanes|=o;var ae=A0(v,L,o);Jw(v,ae);break e}}v=v.return}while(v!==null)}oE(u)}catch(ve){o=ve,Ct===u&&u!==null&&(Ct=u=u.return);continue}break}while(!0)}function iE(){var s=Uh.current;return Uh.current=Mh,s===null?Mh:s}function qm(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),$t===null||!(Eo&268435455)&&!(zh&268435455)||gs($t,Qt)}function Gh(s,o){var u=We;We|=2;var d=iE();($t!==s||Qt!==o)&&(Ci=null,So(s,o));do try{Bb();break}catch(g){rE(s,g)}while(!0);if(sm(),We=u,Uh.current=d,Ct!==null)throw Error(n(261));return $t=null,Qt=0,Lt}function Bb(){for(;Ct!==null;)sE(Ct)}function Wb(){for(;Ct!==null&&!no();)sE(Ct)}function sE(s){var o=uE(s.alternate,s,On);s.memoizedProps=s.pendingProps,o===null?oE(s):Ct=o,Om.current=null}function oE(s){var o=s;do{var u=o.alternate;if(s=o.return,o.flags&32768){if(u=Ob(u,o),u!==null){u.flags&=32767,Ct=u;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{Lt=6,Ct=null;return}}else if(u=Lb(u,o,On),u!==null){Ct=u;return}if(o=o.sibling,o!==null){Ct=o;return}Ct=o=s}while(o!==null);Lt===0&&(Lt=5)}function xo(s,o,u){var d=ze,g=Yn.transition;try{Yn.transition=null,ze=1,Hb(s,o,u,d)}finally{Yn.transition=g,ze=d}return null}function Hb(s,o,u,d){do za();while(ps!==null);if(We&6)throw Error(n(327));u=s.finishedWork;var g=s.finishedLanes;if(u===null)return null;if(s.finishedWork=null,s.finishedLanes=0,u===s.current)throw Error(n(177));s.callbackNode=null,s.callbackPriority=0;var v=u.lanes|u.childLanes;if(Dp(s,v),s===$t&&(Ct=$t=null,Qt=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||Wh||(Wh=!0,cE(ro,function(){return za(),null})),v=(u.flags&15990)!==0,u.subtreeFlags&15990||v){v=Yn.transition,Yn.transition=null;var S=ze;ze=1;var L=We;We|=4,Om.current=null,jb(s,u),Y0(u,s),hb(qp),yi=!!Hp,qp=Hp=null,s.current=u,$b(u),di(),We=L,ze=S,Yn.transition=v}else s.current=u;if(Wh&&(Wh=!1,ps=s,Hh=g),v=s.pendingLanes,v===0&&(ds=null),th(u.stateNode),xn(s,ot()),o!==null)for(d=s.onRecoverableError,u=0;u<o.length;u++)g=o[u],d(g.value,{componentStack:g.stack,digest:g.digest});if(Bh)throw Bh=!1,s=$m,$m=null,s;return Hh&1&&s.tag!==0&&za(),v=s.pendingLanes,v&1?s===Um?Ru++:(Ru=0,Um=s):Ru=0,us(),null}function za(){if(ps!==null){var s=Or(Hh),o=Yn.transition,u=ze;try{if(Yn.transition=null,ze=16>s?16:s,ps===null)var d=!1;else{if(s=ps,ps=null,Hh=0,We&6)throw Error(n(331));var g=We;for(We|=4,pe=s.current;pe!==null;){var v=pe,S=v.child;if(pe.flags&16){var L=v.deletions;if(L!==null){for(var j=0;j<L.length;j++){var Q=L[j];for(pe=Q;pe!==null;){var ne=pe;switch(ne.tag){case 0:case 11:case 15:Cu(8,ne,v)}var se=ne.child;if(se!==null)se.return=ne,pe=se;else for(;pe!==null;){ne=pe;var te=ne.sibling,he=ne.return;if(H0(ne),ne===Q){pe=null;break}if(te!==null){te.return=he,pe=te;break}pe=he}}}var me=v.alternate;if(me!==null){var ye=me.child;if(ye!==null){me.child=null;do{var St=ye.sibling;ye.sibling=null,ye=St}while(ye!==null)}}pe=v}}if(v.subtreeFlags&2064&&S!==null)S.return=v,pe=S;else e:for(;pe!==null;){if(v=pe,v.flags&2048)switch(v.tag){case 0:case 11:case 15:Cu(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,pe=q;break e}pe=v.return}}var z=s.current;for(pe=z;pe!==null;){S=pe;var G=S.child;if(S.subtreeFlags&2064&&G!==null)G.return=S,pe=G;else e:for(S=z;pe!==null;){if(L=pe,L.flags&2048)try{switch(L.tag){case 0:case 11:case 15:$h(9,L)}}catch(ve){_t(L,L.return,ve)}if(L===S){pe=null;break e}var ae=L.sibling;if(ae!==null){ae.return=L.return,pe=ae;break e}pe=L.return}}if(We=g,us(),Pn&&typeof Pn.onPostCommitFiberRoot=="function")try{Pn.onPostCommitFiberRoot(io,s)}catch{}d=!0}return d}finally{ze=u,Yn.transition=o}}return!1}function aE(s,o,u){o=Fa(u,o),o=I0(s,o,1),s=hs(s,o,1),o=mn(),s!==null&&(lo(s,1,o),xn(s,o))}function _t(s,o,u){if(s.tag===3)aE(s,s,u);else for(;o!==null;){if(o.tag===3){aE(o,s,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(ds===null||!ds.has(d))){s=Fa(u,s),s=A0(o,s,1),o=hs(o,s,1),s=mn(),o!==null&&(lo(o,1,s),xn(o,s));break}}o=o.return}}function qb(s,o,u){var d=s.pingCache;d!==null&&d.delete(o),o=mn(),s.pingedLanes|=s.suspendedLanes&u,$t===s&&(Qt&u)===u&&(Lt===4||Lt===3&&(Qt&130023424)===Qt&&500>ot()-jm?So(s,0):Fm|=u),xn(s,o)}function lE(s,o){o===0&&(s.mode&1?(o=Zi,Zi<<=1,!(Zi&130023424)&&(Zi=4194304)):o=1);var u=mn();s=xi(s,o),s!==null&&(lo(s,o,u),xn(s,u))}function Kb(s){var o=s.memoizedState,u=0;o!==null&&(u=o.retryLane),lE(s,u)}function Gb(s,o){var u=0;switch(s.tag){case 13:var d=s.stateNode,g=s.memoizedState;g!==null&&(u=g.retryLane);break;case 19:d=s.stateNode;break;default:throw Error(n(314))}d!==null&&d.delete(o),lE(s,u)}var uE;uE=function(s,o,u){if(s!==null)if(s.memoizedProps!==o.pendingProps||wn.current)Tn=!0;else{if(!(s.lanes&u)&&!(o.flags&128))return Tn=!1,Mb(s,o,u);Tn=!!(s.flags&131072)}else Tn=!1,ft&&o.flags&1048576&&zw(o,Sh,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;Fh(s,o),s=o.pendingProps;var g=Ra(o,sn.current);La(o,u),g=gm(null,o,d,s,g,u);var v=ym();return o.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,En(d)?(v=!0,wh(o)):v=!1,o.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,um(o),g.updater=Lh,o.stateNode=g,g._reactInternals=o,Sm(o,d,s,u),o=Cm(null,o,d,!0,v,u)):(o.tag=0,ft&&v&&Zp(o),pn(null,o,g,u),o=o.child),o;case 16:d=o.elementType;e:{switch(Fh(s,o),s=o.pendingProps,g=d._init,d=g(d._payload),o.type=d,g=o.tag=Yb(d),s=gr(d,s),g){case 0:o=Am(null,o,d,s,u);break e;case 1:o=M0(null,o,d,s,u);break e;case 11:o=R0(null,o,d,s,u);break e;case 14:o=b0(null,o,d,gr(d.type,s),u);break e}throw Error(n(306,d,""))}return o;case 0:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:gr(d,g),Am(s,o,d,g,u);case 1:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:gr(d,g),M0(s,o,d,g,u);case 3:e:{if(L0(o),s===null)throw Error(n(387));d=o.pendingProps,v=o.memoizedState,g=v.element,Xw(s,o),Ph(o,d,null,u);var S=o.memoizedState;if(d=S.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},o.updateQueue.baseState=v,o.memoizedState=v,o.flags&256){g=Fa(Error(n(423)),o),o=O0(s,o,d,u,g);break e}else if(d!==g){g=Fa(Error(n(424)),o),o=O0(s,o,d,u,g);break e}else for(Ln=os(o.stateNode.containerInfo.firstChild),Mn=o,ft=!0,mr=null,u=Qw(o,null,d,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Va(),d===g){o=Ai(s,o,u);break e}pn(s,o,d,u)}o=o.child}return o;case 5:return e0(o),s===null&&nm(o),d=o.type,g=o.pendingProps,v=s!==null?s.memoizedProps:null,S=g.children,Kp(d,g)?S=null:v!==null&&Kp(d,v)&&(o.flags|=32),N0(s,o),pn(s,o,S,u),o.child;case 6:return s===null&&nm(o),null;case 13:return F0(s,o,u);case 4:return cm(o,o.stateNode.containerInfo),d=o.pendingProps,s===null?o.child=Na(o,null,d,u):pn(s,o,d,u),o.child;case 11:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:gr(d,g),R0(s,o,d,g,u);case 7:return pn(s,o,o.pendingProps,u),o.child;case 8:return pn(s,o,o.pendingProps.children,u),o.child;case 12:return pn(s,o,o.pendingProps.children,u),o.child;case 10:e:{if(d=o.type._context,g=o.pendingProps,v=o.memoizedProps,S=g.value,it(Ah,d._currentValue),d._currentValue=S,v!==null)if(pr(v.value,S)){if(v.children===g.children&&!wn.current){o=Ai(s,o,u);break e}}else for(v=o.child,v!==null&&(v.return=o);v!==null;){var L=v.dependencies;if(L!==null){S=v.child;for(var j=L.firstContext;j!==null;){if(j.context===d){if(v.tag===1){j=Ii(-1,u&-u),j.tag=2;var Q=v.updateQueue;if(Q!==null){Q=Q.shared;var ne=Q.pending;ne===null?j.next=j:(j.next=ne.next,ne.next=j),Q.pending=j}}v.lanes|=u,j=v.alternate,j!==null&&(j.lanes|=u),am(v.return,u,o),L.lanes|=u;break}j=j.next}}else if(v.tag===10)S=v.type===o.type?null:v.child;else if(v.tag===18){if(S=v.return,S===null)throw Error(n(341));S.lanes|=u,L=S.alternate,L!==null&&(L.lanes|=u),am(S,u,o),S=v.sibling}else S=v.child;if(S!==null)S.return=v;else for(S=v;S!==null;){if(S===o){S=null;break}if(v=S.sibling,v!==null){v.return=S.return,S=v;break}S=S.return}v=S}pn(s,o,g.children,u),o=o.child}return o;case 9:return g=o.type,d=o.pendingProps.children,La(o,u),g=Gn(g),d=d(g),o.flags|=1,pn(s,o,d,u),o.child;case 14:return d=o.type,g=gr(d,o.pendingProps),g=gr(d.type,g),b0(s,o,d,g,u);case 15:return D0(s,o,o.type,o.pendingProps,u);case 17:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:gr(d,g),Fh(s,o),o.tag=1,En(d)?(s=!0,wh(o)):s=!1,La(o,u),S0(o,d,g),Sm(o,d,g,u),Cm(null,o,d,!0,s,u);case 19:return $0(s,o,u);case 22:return V0(s,o,u)}throw Error(n(156,o.tag))};function cE(s,o){return Kl(s,o)}function Qb(s,o,u,d){this.tag=s,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(s,o,u,d){return new Qb(s,o,u,d)}function Km(s){return s=s.prototype,!(!s||!s.isReactComponent)}function Yb(s){if(typeof s=="function")return Km(s)?1:0;if(s!=null){if(s=s.$$typeof,s===B)return 11;if(s===Ge)return 14}return 2}function ys(s,o){var u=s.alternate;return u===null?(u=Xn(s.tag,o,s.key,s.mode),u.elementType=s.elementType,u.type=s.type,u.stateNode=s.stateNode,u.alternate=s,s.alternate=u):(u.pendingProps=o,u.type=s.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=s.flags&14680064,u.childLanes=s.childLanes,u.lanes=s.lanes,u.child=s.child,u.memoizedProps=s.memoizedProps,u.memoizedState=s.memoizedState,u.updateQueue=s.updateQueue,o=s.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=s.sibling,u.index=s.index,u.ref=s.ref,u}function Qh(s,o,u,d,g,v){var S=2;if(d=s,typeof s=="function")Km(s)&&(S=1);else if(typeof s=="string")S=5;else e:switch(s){case C:return Io(u.children,g,v,o);case I:S=8,g|=8;break;case R:return s=Xn(12,u,o,g|2),s.elementType=R,s.lanes=v,s;case M:return s=Xn(13,u,o,g),s.elementType=M,s.lanes=v,s;case Re:return s=Xn(19,u,o,g),s.elementType=Re,s.lanes=v,s;case Je:return Yh(u,g,v,o);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case D:S=10;break e;case O:S=9;break e;case B:S=11;break e;case Ge:S=14;break e;case Xe:S=16,d=null;break e}throw Error(n(130,s==null?s:typeof s,""))}return o=Xn(S,u,o,g),o.elementType=s,o.type=d,o.lanes=v,o}function Io(s,o,u,d){return s=Xn(7,s,d,o),s.lanes=u,s}function Yh(s,o,u,d){return s=Xn(22,s,d,o),s.elementType=Je,s.lanes=u,s.stateNode={isHidden:!1},s}function Gm(s,o,u){return s=Xn(6,s,null,o),s.lanes=u,s}function Qm(s,o,u){return o=Xn(4,s.children!==null?s.children:[],s.key,o),o.lanes=u,o.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},o}function Xb(s,o,u,d,g){this.tag=o,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jl(0),this.expirationTimes=Jl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jl(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Ym(s,o,u,d,g,v,S,L,j){return s=new Xb(s,o,u,L,j),o===1?(o=1,v===!0&&(o|=8)):o=0,v=Xn(3,null,null,o),s.current=v,v.stateNode=s,v.memoizedState={element:d,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},um(v),s}function Jb(s,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:d==null?null:""+d,children:s,containerInfo:o,implementation:u}}function hE(s){if(!s)return ls;s=s._reactInternals;e:{if(fr(s)!==s||s.tag!==1)throw Error(n(170));var o=s;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(En(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(n(171))}if(s.tag===1){var u=s.type;if(En(u))return jw(s,u,o)}return o}function fE(s,o,u,d,g,v,S,L,j){return s=Ym(u,d,!0,s,g,v,S,L,j),s.context=hE(null),u=s.current,d=mn(),g=ms(u),v=Ii(d,g),v.callback=o??null,hs(u,v,g),s.current.lanes=g,lo(s,g,d),xn(s,d),s}function Xh(s,o,u,d){var g=o.current,v=mn(),S=ms(g);return u=hE(u),o.context===null?o.context=u:o.pendingContext=u,o=Ii(v,S),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=hs(g,o,S),s!==null&&(_r(s,g,S,v),kh(s,g,S)),S}function Jh(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function dE(s,o){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var u=s.retryLane;s.retryLane=u!==0&&u<o?u:o}}function Xm(s,o){dE(s,o),(s=s.alternate)&&dE(s,o)}var pE=typeof reportError=="function"?reportError:function(s){console.error(s)};function Jm(s){this._internalRoot=s}Zh.prototype.render=Jm.prototype.render=function(s){var o=this._internalRoot;if(o===null)throw Error(n(409));Xh(s,o,null,null)},Zh.prototype.unmount=Jm.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var o=s.containerInfo;To(function(){Xh(null,s,null,null)}),o[wi]=null}};function Zh(s){this._internalRoot=s}Zh.prototype.unstable_scheduleHydration=function(s){if(s){var o=nu();s={blockedOn:null,target:s,priority:o};for(var u=0;u<bn.length&&o!==0&&o<bn[u].priority;u++);bn.splice(u,0,s),u===0&&pa(s)}};function Zm(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function ef(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function mE(){}function Zb(s,o,u,d,g){if(g){if(typeof d=="function"){var v=d;d=function(){var Q=Jh(S);v.call(Q)}}var S=fE(o,d,s,0,null,!1,!1,"",mE);return s._reactRootContainer=S,s[wi]=S.current,pu(s.nodeType===8?s.parentNode:s),To(),S}for(;g=s.lastChild;)s.removeChild(g);if(typeof d=="function"){var L=d;d=function(){var Q=Jh(j);L.call(Q)}}var j=Ym(s,0,!1,null,null,!1,!1,"",mE);return s._reactRootContainer=j,s[wi]=j.current,pu(s.nodeType===8?s.parentNode:s),To(function(){Xh(o,j,u,d)}),j}function tf(s,o,u,d,g){var v=u._reactRootContainer;if(v){var S=v;if(typeof g=="function"){var L=g;g=function(){var j=Jh(S);L.call(j)}}Xh(o,S,s,g)}else S=Zb(u,o,s,g,d);return Jh(S)}eu=function(s){switch(s.tag){case 3:var o=s.stateNode;if(o.current.memoizedState.isDehydrated){var u=Ke(o.pendingLanes);u!==0&&(Zl(o,u|1),xn(o,ot()),!(We&6)&&(Ua=ot()+500,us()))}break;case 13:To(function(){var d=xi(s,1);if(d!==null){var g=mn();_r(d,s,1,g)}}),Xm(s,1)}},fa=function(s){if(s.tag===13){var o=xi(s,134217728);if(o!==null){var u=mn();_r(o,s,134217728,u)}Xm(s,134217728)}},tu=function(s){if(s.tag===13){var o=ms(s),u=xi(s,o);if(u!==null){var d=mn();_r(u,s,o,d)}Xm(s,o)}},nu=function(){return ze},ru=function(s,o){var u=ze;try{return ze=s,o()}finally{ze=u}},ci=function(s,o,u){switch(o){case"input":if(Js(s,u),o=u.name,u.type==="radio"&&o!=null){for(u=s;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var d=u[o];if(d!==s&&d.form===s.form){var g=vh(d);if(!g)throw Error(n(90));_n(d),Js(d,g)}}}break;case"textarea":Bc(s,u);break;case"select":o=u.value,o!=null&&cr(s,!!u.multiple,o,!1)}},qc=Wm,Kc=To;var eD={usingClientEntryPoint:!1,Events:[yu,ka,vh,Qi,Yi,Wm]},bu={findFiberByHostInstance:po,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tD={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=eh(s),s===null?null:s.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nf.isDisabled&&nf.supportsFiber)try{io=nf.inject(tD),Pn=nf}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eD,In.createPortal=function(s,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zm(o))throw Error(n(200));return Jb(s,o,null,u)},In.createRoot=function(s,o){if(!Zm(s))throw Error(n(299));var u=!1,d="",g=pE;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),o=Ym(s,1,!1,null,null,u,!1,d,g),s[wi]=o.current,pu(s.nodeType===8?s.parentNode:s),new Jm(o)},In.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var o=s._reactInternals;if(o===void 0)throw typeof s.render=="function"?Error(n(188)):(s=Object.keys(s).join(","),Error(n(268,s)));return s=eh(o),s=s===null?null:s.stateNode,s},In.flushSync=function(s){return To(s)},In.hydrate=function(s,o,u){if(!ef(o))throw Error(n(200));return tf(null,s,o,!0,u)},In.hydrateRoot=function(s,o,u){if(!Zm(s))throw Error(n(405));var d=u!=null&&u.hydratedSources||null,g=!1,v="",S=pE;if(u!=null&&(u.unstable_strictMode===!0&&(g=!0),u.identifierPrefix!==void 0&&(v=u.identifierPrefix),u.onRecoverableError!==void 0&&(S=u.onRecoverableError)),o=fE(o,null,s,1,u??null,g,!1,v,S),s[wi]=o.current,pu(s),d)for(s=0;s<d.length;s++)u=d[s],g=u._getVersion,g=g(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,g]:o.mutableSourceEagerHydrationData.push(u,g);return new Zh(o)},In.render=function(s,o,u){if(!ef(o))throw Error(n(200));return tf(null,s,o,!1,u)},In.unmountComponentAtNode=function(s){if(!ef(s))throw Error(n(40));return s._reactRootContainer?(To(function(){tf(null,null,s,!1,function(){s._reactRootContainer=null,s[wi]=null})}),!0):!1},In.unstable_batchedUpdates=Wm,In.unstable_renderSubtreeIntoContainer=function(s,o,u,d){if(!ef(u))throw Error(n(200));if(s==null||s._reactInternals===void 0)throw Error(n(38));return tf(s,o,u,!1,d)},In.version="18.3.1-next-f1338f8080-20240426",In}var IE;function dD(){if(IE)return ng.exports;IE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),ng.exports=fD(),ng.exports}var AE;function pD(){if(AE)return rf;AE=1;var t=dD();return rf.createRoot=t.createRoot,rf.hydrateRoot=t.hydrateRoot,rf}var mD=pD(),Vu={},CE;function gD(){if(CE)return Vu;CE=1,Object.defineProperty(Vu,"__esModule",{value:!0}),Vu.parse=l,Vu.serialize=p;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,a=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function l(w,T){const x=new a,P=w.length;if(P<2)return x;const k=(T==null?void 0:T.decode)||m;let b=0;do{const F=w.indexOf("=",b);if(F===-1)break;const U=w.indexOf(";",b),$=U===-1?P:U;if(F>$){b=w.lastIndexOf(";",F-1)+1;continue}const H=c(w,b,F),X=h(w,F,H),C=w.slice(H,X);if(x[C]===void 0){let I=c(w,F+1,$),R=h(w,$,I);const D=k(w.slice(I,R));x[C]=D}b=$+1}while(b<P);return x}function c(w,T,x){do{const P=w.charCodeAt(T);if(P!==32&&P!==9)return T}while(++T<x);return x}function h(w,T,x){for(;T>x;){const P=w.charCodeAt(--T);if(P!==32&&P!==9)return T+1}return x}function p(w,T,x){const P=(x==null?void 0:x.encode)||encodeURIComponent;if(!t.test(w))throw new TypeError(`argument name is invalid: ${w}`);const k=P(T);if(!e.test(k))throw new TypeError(`argument val is invalid: ${T}`);let b=w+"="+k;if(!x)return b;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);b+="; Max-Age="+x.maxAge}if(x.domain){if(!n.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);b+="; Domain="+x.domain}if(x.path){if(!r.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);b+="; Path="+x.path}if(x.expires){if(!y(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);b+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(b+="; HttpOnly"),x.secure&&(b+="; Secure"),x.partitioned&&(b+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":b+="; Priority=Low";break;case"medium":b+="; Priority=Medium";break;case"high":b+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":b+="; SameSite=Strict";break;case"lax":b+="; SameSite=Lax";break;case"none":b+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return b}function m(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function y(w){return i.call(w)==="[object Date]"}return Vu}gD();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var kE="popstate";function yD(t={}){function e(i,a){let{pathname:l="/",search:c="",hash:h=""}=Yo(i.location.hash.substring(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Xg("",{pathname:l,search:c,hash:h},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){let l=i.document.querySelector("base"),c="";if(l&&l.getAttribute("href")){let h=i.location.href,p=h.indexOf("#");c=p===-1?h:h.slice(0,p)}return c+"#"+(typeof a=="string"?a:rc(a))}function r(i,a){ir(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return _D(e,n,r,t)}function pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ir(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function vD(){return Math.random().toString(36).substring(2,10)}function PE(t,e){return{usr:t.state,key:t.key,idx:e}}function Xg(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Yo(e):e,state:n,key:e&&e.key||r||vD()}}function rc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Yo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function _D(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,c="POP",h=null,p=m();p==null&&(p=0,l.replaceState({...l.state,idx:p},""));function m(){return(l.state||{idx:null}).idx}function y(){c="POP";let k=m(),b=k==null?null:k-p;p=k,h&&h({action:c,location:P.location,delta:b})}function w(k,b){c="PUSH";let F=Xg(P.location,k,b);n(F,k),p=m()+1;let U=PE(F,p),$=P.createHref(F);try{l.pushState(U,"",$)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;i.location.assign($)}a&&h&&h({action:c,location:P.location,delta:1})}function T(k,b){c="REPLACE";let F=Xg(P.location,k,b);n(F,k),p=m();let U=PE(F,p),$=P.createHref(F);l.replaceState(U,"",$),a&&h&&h({action:c,location:P.location,delta:0})}function x(k){let b=i.location.origin!=="null"?i.location.origin:i.location.href,F=typeof k=="string"?k:rc(k);return F=F.replace(/ $/,"%20"),pt(b,`No window.location.(origin|href) available to create URL for href: ${F}`),new URL(F,b)}let P={get action(){return c},get location(){return t(i,l)},listen(k){if(h)throw new Error("A history only accepts one active listener");return i.addEventListener(kE,y),h=k,()=>{i.removeEventListener(kE,y),h=null}},createHref(k){return e(i,k)},createURL:x,encodeLocation(k){let b=x(k);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:w,replace:T,go(k){return l.go(k)}};return P}function U1(t,e,n="/"){return wD(t,e,n,!1)}function wD(t,e,n,r){let i=typeof e=="string"?Yo(e):e,a=Fs(i.pathname||"/",n);if(a==null)return null;let l=z1(t);ED(l);let c=null;for(let h=0;c==null&&h<l.length;++h){let p=DD(a);c=RD(l[h],p,r)}return c}function z1(t,e=[],n=[],r=""){let i=(a,l,c)=>{let h={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};h.relativePath.startsWith("/")&&(pt(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length));let p=Di([r,h.relativePath]),m=n.concat(h);a.children&&a.children.length>0&&(pt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),z1(a.children,e,m,p)),!(a.path==null&&!a.index)&&e.push({path:p,score:kD(p,a.index),routesMeta:m})};return t.forEach((a,l)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))i(a,l);else for(let h of B1(a.path))i(a,l,h)}),e}function B1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=B1(r.join("/")),c=[];return c.push(...l.map(h=>h===""?a:[a,h].join("/"))),i&&c.push(...l),c.map(h=>t.startsWith("/")&&h===""?"/":h)}function ED(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var TD=/^:[\w-]+$/,SD=3,xD=2,ID=1,AD=10,CD=-2,RE=t=>t==="*";function kD(t,e){let n=t.split("/"),r=n.length;return n.some(RE)&&(r+=CD),e&&(r+=xD),n.filter(i=>!RE(i)).reduce((i,a)=>i+(TD.test(a)?SD:a===""?ID:AD),r)}function PD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function RD(t,e,n=!1){let{routesMeta:r}=t,i={},a="/",l=[];for(let c=0;c<r.length;++c){let h=r[c],p=c===r.length-1,m=a==="/"?e:e.slice(a.length)||"/",y=Jf({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m),w=h.route;if(!y&&p&&n&&!r[r.length-1].route.index&&(y=Jf({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},m)),!y)return null;Object.assign(i,y.params),l.push({params:i,pathname:Di([a,y.pathname]),pathnameBase:LD(Di([a,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(a=Di([a,y.pathnameBase]))}return l}function Jf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=bD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((p,{paramName:m,isOptional:y},w)=>{if(m==="*"){let x=c[w]||"";l=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const T=c[w];return y&&!T?p[m]=void 0:p[m]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:l,pattern:t}}function bD(t,e=!1,n=!0){ir(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,h)=>(r.push({paramName:c,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function DD(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ir(!1,`The URL path "${t}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Fs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function VD(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yo(t):t;return{pathname:n?n.startsWith("/")?n:ND(n,e):e,search:OD(r),hash:FD(i)}}function ND(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function sg(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function MD(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function hv(t){let e=MD(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function fv(t,e,n,r=!1){let i;typeof t=="string"?i=Yo(t):(i={...t},pt(!i.pathname||!i.pathname.includes("?"),sg("?","pathname","search",i)),pt(!i.pathname||!i.pathname.includes("#"),sg("#","pathname","hash",i)),pt(!i.search||!i.search.includes("#"),sg("#","search","hash",i)));let a=t===""||i.pathname==="",l=a?"/":i.pathname,c;if(l==null)c=n;else{let y=e.length-1;if(!r&&l.startsWith("..")){let w=l.split("/");for(;w[0]==="..";)w.shift(),y-=1;i.pathname=w.join("/")}c=y>=0?e[y]:"/"}let h=VD(i,c),p=l&&l!=="/"&&l.endsWith("/"),m=(a||l===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||m)&&(h.pathname+="/"),h}var Di=t=>t.join("/").replace(/\/\/+/g,"/"),LD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),OD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,FD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var W1=["POST","PUT","PATCH","DELETE"];new Set(W1);var $D=["GET",...W1];new Set($D);var Il=N.createContext(null);Il.displayName="DataRouter";var Wd=N.createContext(null);Wd.displayName="DataRouterState";var H1=N.createContext({isTransitioning:!1});H1.displayName="ViewTransition";var UD=N.createContext(new Map);UD.displayName="Fetchers";var zD=N.createContext(null);zD.displayName="Await";var br=N.createContext(null);br.displayName="Navigation";var Tc=N.createContext(null);Tc.displayName="Location";var ar=N.createContext({outlet:null,matches:[],isDataRoute:!1});ar.displayName="Route";var dv=N.createContext(null);dv.displayName="RouteError";function BD(t,{relative:e}={}){pt(Al(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=N.useContext(br),{hash:i,pathname:a,search:l}=Sc(t,{relative:e}),c=a;return n!=="/"&&(c=a==="/"?n:Di([n,a])),r.createHref({pathname:c,search:l,hash:i})}function Al(){return N.useContext(Tc)!=null}function ui(){return pt(Al(),"useLocation() may be used only in the context of a <Router> component."),N.useContext(Tc).location}var q1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function K1(t){N.useContext(br).static||N.useLayoutEffect(t)}function pv(){let{isDataRoute:t}=N.useContext(ar);return t?iV():WD()}function WD(){pt(Al(),"useNavigate() may be used only in the context of a <Router> component.");let t=N.useContext(Il),{basename:e,navigator:n}=N.useContext(br),{matches:r}=N.useContext(ar),{pathname:i}=ui(),a=JSON.stringify(hv(r)),l=N.useRef(!1);return K1(()=>{l.current=!0}),N.useCallback((h,p={})=>{if(ir(l.current,q1),!l.current)return;if(typeof h=="number"){n.go(h);return}let m=fv(h,JSON.parse(a),i,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:Di([e,m.pathname])),(p.replace?n.replace:n.push)(m,p.state,p)},[e,n,a,i,t])}var HD=N.createContext(null);function qD(t){let e=N.useContext(ar).outlet;return e&&N.createElement(HD.Provider,{value:t},e)}function w7(){let{matches:t}=N.useContext(ar),e=t[t.length-1];return e?e.params:{}}function Sc(t,{relative:e}={}){let{matches:n}=N.useContext(ar),{pathname:r}=ui(),i=JSON.stringify(hv(n));return N.useMemo(()=>fv(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function KD(t,e){return G1(t,e)}function G1(t,e,n,r){var b;pt(Al(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=N.useContext(br),{matches:a}=N.useContext(ar),l=a[a.length-1],c=l?l.params:{},h=l?l.pathname:"/",p=l?l.pathnameBase:"/",m=l&&l.route;{let F=m&&m.path||"";Q1(h,!m||F.endsWith("*")||F.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${F}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${F}"> to <Route path="${F==="/"?"*":`${F}/*`}">.`)}let y=ui(),w;if(e){let F=typeof e=="string"?Yo(e):e;pt(p==="/"||((b=F.pathname)==null?void 0:b.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${F.pathname}" was given in the \`location\` prop.`),w=F}else w=y;let T=w.pathname||"/",x=T;if(p!=="/"){let F=p.replace(/^\//,"").split("/");x="/"+T.replace(/^\//,"").split("/").slice(F.length).join("/")}let P=U1(t,{pathname:x});ir(m||P!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),ir(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=JD(P&&P.map(F=>Object.assign({},F,{params:Object.assign({},c,F.params),pathname:Di([p,i.encodeLocation?i.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?p:Di([p,i.encodeLocation?i.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),a,n,r);return e&&k?N.createElement(Tc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},k):k}function GD(){let t=rV(),e=jD(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=N.createElement(N.Fragment,null,N.createElement("p",null,"💿 Hey developer 👋"),N.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",N.createElement("code",{style:a},"ErrorBoundary")," or"," ",N.createElement("code",{style:a},"errorElement")," prop on your route.")),N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,l)}var QD=N.createElement(GD,null),YD=class extends N.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?N.createElement(ar.Provider,{value:this.props.routeContext},N.createElement(dv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function XD({routeContext:t,match:e,children:n}){let r=N.useContext(Il);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),N.createElement(ar.Provider,{value:t},n)}function JD(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,a=n==null?void 0:n.errors;if(a!=null){let h=i.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);pt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let l=!1,c=-1;if(n)for(let h=0;h<i.length;h++){let p=i[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:m,errors:y}=n,w=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||w){l=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,p,m)=>{let y,w=!1,T=null,x=null;n&&(y=a&&p.route.id?a[p.route.id]:void 0,T=p.route.errorElement||QD,l&&(c<0&&m===0?(Q1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):c===m&&(w=!0,x=p.route.hydrateFallbackElement||null)));let P=e.concat(i.slice(0,m+1)),k=()=>{let b;return y?b=T:w?b=x:p.route.Component?b=N.createElement(p.route.Component,null):p.route.element?b=p.route.element:b=h,N.createElement(XD,{match:p,routeContext:{outlet:h,matches:P,isDataRoute:n!=null},children:b})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?N.createElement(YD,{location:n.location,revalidation:n.revalidation,component:T,error:y,children:k(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):k()},null)}function mv(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ZD(t){let e=N.useContext(Il);return pt(e,mv(t)),e}function eV(t){let e=N.useContext(Wd);return pt(e,mv(t)),e}function tV(t){let e=N.useContext(ar);return pt(e,mv(t)),e}function gv(t){let e=tV(t),n=e.matches[e.matches.length-1];return pt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function nV(){return gv("useRouteId")}function rV(){var r;let t=N.useContext(dv),e=eV("useRouteError"),n=gv("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function iV(){let{router:t}=ZD("useNavigate"),e=gv("useNavigate"),n=N.useRef(!1);return K1(()=>{n.current=!0}),N.useCallback(async(i,a={})=>{ir(n.current,q1),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...a}))},[t,e])}var bE={};function Q1(t,e,n){!e&&!bE[t]&&(bE[t]=!0,ir(!1,n))}N.memo(sV);function sV({routes:t,future:e,state:n}){return G1(t,void 0,n,e)}function oV({to:t,replace:e,state:n,relative:r}){pt(Al(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=N.useContext(br);ir(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=N.useContext(ar),{pathname:l}=ui(),c=pv(),h=fv(t,hv(a),l,r==="path"),p=JSON.stringify(h);return N.useEffect(()=>{c(JSON.parse(p),{replace:e,state:n,relative:r})},[c,p,r,e,n]),null}function E7(t){return qD(t.context)}function qe(t){pt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function aV({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:a=!1}){pt(!Al(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),c=N.useMemo(()=>({basename:l,navigator:i,static:a,future:{}}),[l,i,a]);typeof n=="string"&&(n=Yo(n));let{pathname:h="/",search:p="",hash:m="",state:y=null,key:w="default"}=n,T=N.useMemo(()=>{let x=Fs(h,l);return x==null?null:{location:{pathname:x,search:p,hash:m,state:y,key:w},navigationType:r}},[l,h,p,m,y,w,r]);return ir(T!=null,`<Router basename="${l}"> is not able to match the URL "${h}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:N.createElement(br.Provider,{value:c},N.createElement(Tc.Provider,{children:e,value:T}))}function lV({children:t,location:e}){return KD(Jg(t),e)}function Jg(t,e=[]){let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let a=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Jg(r.props.children,a));return}pt(r.type===qe,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),pt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Jg(r.props.children,a)),n.push(l)}),n}var Sf="get",xf="application/x-www-form-urlencoded";function Hd(t){return t!=null&&typeof t.tagName=="string"}function uV(t){return Hd(t)&&t.tagName.toLowerCase()==="button"}function cV(t){return Hd(t)&&t.tagName.toLowerCase()==="form"}function hV(t){return Hd(t)&&t.tagName.toLowerCase()==="input"}function fV(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dV(t,e){return t.button===0&&(!e||e==="_self")&&!fV(t)}var sf=null;function pV(){if(sf===null)try{new FormData(document.createElement("form"),0),sf=!1}catch{sf=!0}return sf}var mV=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function og(t){return t!=null&&!mV.has(t)?(ir(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xf}"`),null):t}function gV(t,e){let n,r,i,a,l;if(cV(t)){let c=t.getAttribute("action");r=c?Fs(c,e):null,n=t.getAttribute("method")||Sf,i=og(t.getAttribute("enctype"))||xf,a=new FormData(t)}else if(uV(t)||hV(t)&&(t.type==="submit"||t.type==="image")){let c=t.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=t.getAttribute("formaction")||c.getAttribute("action");if(r=h?Fs(h,e):null,n=t.getAttribute("formmethod")||c.getAttribute("method")||Sf,i=og(t.getAttribute("formenctype"))||og(c.getAttribute("enctype"))||xf,a=new FormData(c,t),!pV()){let{name:p,type:m,value:y}=t;if(m==="image"){let w=p?`${p}.`:"";a.append(`${w}x`,"0"),a.append(`${w}y`,"0")}else p&&a.append(p,y)}}else{if(Hd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Sf,r=null,i=xf,l=t}return a&&i==="text/plain"&&(l=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:l}}function yv(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function yV(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vV(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function _V(t,e,n){let r=await Promise.all(t.map(async i=>{let a=e.routes[i.route.id];if(a){let l=await yV(a,n);return l.links?l.links():[]}return[]}));return SV(r.flat(1).filter(vV).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function DE(t,e,n,r,i,a){let l=(h,p)=>n[p]?h.route.id!==n[p].route.id:!0,c=(h,p)=>{var m;return n[p].pathname!==h.pathname||((m=n[p].route.path)==null?void 0:m.endsWith("*"))&&n[p].params["*"]!==h.params["*"]};return a==="assets"?e.filter((h,p)=>l(h,p)||c(h,p)):a==="data"?e.filter((h,p)=>{var y;let m=r.routes[h.route.id];if(!m||!m.hasLoader)return!1;if(l(h,p)||c(h,p))return!0;if(h.route.shouldRevalidate){let w=h.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((y=n[0])==null?void 0:y.params)||{},nextUrl:new URL(t,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function wV(t,e){return EV(t.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function EV(t){return[...new Set(t)]}function TV(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function SV(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let a=JSON.stringify(TV(i));return n.has(a)||(n.add(a),r.push({key:a,link:i})),r},[])}function xV(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function IV(){let t=N.useContext(Il);return yv(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function AV(){let t=N.useContext(Wd);return yv(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var vv=N.createContext(void 0);vv.displayName="FrameworkContext";function Y1(){let t=N.useContext(vv);return yv(t,"You must render this element inside a <HydratedRouter> element"),t}function CV(t,e){let n=N.useContext(vv),[r,i]=N.useState(!1),[a,l]=N.useState(!1),{onFocus:c,onBlur:h,onMouseEnter:p,onMouseLeave:m,onTouchStart:y}=e,w=N.useRef(null);N.useEffect(()=>{if(t==="render"&&l(!0),t==="viewport"){let P=b=>{b.forEach(F=>{l(F.isIntersecting)})},k=new IntersectionObserver(P,{threshold:.5});return w.current&&k.observe(w.current),()=>{k.disconnect()}}},[t]),N.useEffect(()=>{if(r){let P=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(P)}}},[r]);let T=()=>{i(!0)},x=()=>{i(!1),l(!1)};return n?t!=="intent"?[a,w,{}]:[a,w,{onFocus:Nu(c,T),onBlur:Nu(h,x),onMouseEnter:Nu(p,T),onMouseLeave:Nu(m,x),onTouchStart:Nu(y,T)}]:[!1,w,{}]}function Nu(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function kV({page:t,...e}){let{router:n}=IV(),r=N.useMemo(()=>U1(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?N.createElement(RV,{page:t,matches:r,...e}):null}function PV(t){let{manifest:e,routeModules:n}=Y1(),[r,i]=N.useState([]);return N.useEffect(()=>{let a=!1;return _V(t,e,n).then(l=>{a||i(l)}),()=>{a=!0}},[t,e,n]),r}function RV({page:t,matches:e,...n}){let r=ui(),{manifest:i,routeModules:a}=Y1(),{loaderData:l,matches:c}=AV(),h=N.useMemo(()=>DE(t,e,c,i,r,"data"),[t,e,c,i,r]),p=N.useMemo(()=>DE(t,e,c,i,r,"assets"),[t,e,c,i,r]),m=N.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let T=new Set,x=!1;if(e.forEach(k=>{var F;let b=i.routes[k.route.id];!b||!b.hasLoader||(!h.some(U=>U.route.id===k.route.id)&&k.route.id in l&&((F=a[k.route.id])!=null&&F.shouldRevalidate)||b.hasClientLoader?x=!0:T.add(k.route.id))}),T.size===0)return[];let P=xV(t);return x&&T.size>0&&P.searchParams.set("_routes",e.filter(k=>T.has(k.route.id)).map(k=>k.route.id).join(",")),[P.pathname+P.search]},[l,r,i,h,e,t,a]),y=N.useMemo(()=>wV(p,i),[p,i]),w=PV(p);return N.createElement(N.Fragment,null,m.map(T=>N.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...n})),y.map(T=>N.createElement("link",{key:T,rel:"modulepreload",href:T,...n})),w.map(({key:T,link:x})=>N.createElement("link",{key:T,...x})))}function bV(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var X1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{X1&&(window.__reactRouterVersion="7.1.1")}catch{}function DV({basename:t,children:e,window:n}){let r=N.useRef();r.current==null&&(r.current=yD({window:n,v5Compat:!0}));let i=r.current,[a,l]=N.useState({action:i.action,location:i.location}),c=N.useCallback(h=>{N.startTransition(()=>l(h))},[l]);return N.useLayoutEffect(()=>i.listen(c),[i,c]),N.createElement(aV,{basename:t,children:e,location:a.location,navigationType:a.action,navigator:i})}var J1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zf=N.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:a,replace:l,state:c,target:h,to:p,preventScrollReset:m,viewTransition:y,...w},T){let{basename:x}=N.useContext(br),P=typeof p=="string"&&J1.test(p),k,b=!1;if(typeof p=="string"&&P&&(k=p,X1))try{let R=new URL(window.location.href),D=p.startsWith("//")?new URL(R.protocol+p):new URL(p),O=Fs(D.pathname,x);D.origin===R.origin&&O!=null?p=O+D.search+D.hash:b=!0}catch{ir(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let F=BD(p,{relative:i}),[U,$,H]=CV(r,w),X=LV(p,{replace:l,state:c,target:h,preventScrollReset:m,relative:i,viewTransition:y});function C(R){e&&e(R),R.defaultPrevented||X(R)}let I=N.createElement("a",{...w,...H,href:k||F,onClick:b||a?e:C,ref:bV(T,$),target:h,"data-discover":!P&&n==="render"?"true":void 0});return U&&!P?N.createElement(N.Fragment,null,I,N.createElement(kV,{page:F})):I});Zf.displayName="Link";var VV=N.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:a,to:l,viewTransition:c,children:h,...p},m){let y=Sc(l,{relative:p.relative}),w=ui(),T=N.useContext(Wd),{navigator:x,basename:P}=N.useContext(br),k=T!=null&&UV(y)&&c===!0,b=x.encodeLocation?x.encodeLocation(y).pathname:y.pathname,F=w.pathname,U=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;n||(F=F.toLowerCase(),U=U?U.toLowerCase():null,b=b.toLowerCase()),U&&P&&(U=Fs(U,P)||U);const $=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let H=F===b||!i&&F.startsWith(b)&&F.charAt($)==="/",X=U!=null&&(U===b||!i&&U.startsWith(b)&&U.charAt(b.length)==="/"),C={isActive:H,isPending:X,isTransitioning:k},I=H?e:void 0,R;typeof r=="function"?R=r(C):R=[r,H?"active":null,X?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(C):a;return N.createElement(Zf,{...p,"aria-current":I,className:R,ref:m,style:D,to:l,viewTransition:c},typeof h=="function"?h(C):h)});VV.displayName="NavLink";var NV=N.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:a,method:l=Sf,action:c,onSubmit:h,relative:p,preventScrollReset:m,viewTransition:y,...w},T)=>{let x=jV(),P=$V(c,{relative:p}),k=l.toLowerCase()==="get"?"get":"post",b=typeof c=="string"&&J1.test(c),F=U=>{if(h&&h(U),U.defaultPrevented)return;U.preventDefault();let $=U.nativeEvent.submitter,H=($==null?void 0:$.getAttribute("formmethod"))||l;x($||U.currentTarget,{fetcherKey:e,method:H,navigate:n,replace:i,state:a,relative:p,preventScrollReset:m,viewTransition:y})};return N.createElement("form",{ref:T,method:k,action:P,onSubmit:r?h:F,...w,"data-discover":!b&&t==="render"?"true":void 0})});NV.displayName="Form";function MV(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Z1(t){let e=N.useContext(Il);return pt(e,MV(t)),e}function LV(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:a,viewTransition:l}={}){let c=pv(),h=ui(),p=Sc(t,{relative:a});return N.useCallback(m=>{if(dV(m,e)){m.preventDefault();let y=n!==void 0?n:rc(h)===rc(p);c(t,{replace:y,state:r,preventScrollReset:i,relative:a,viewTransition:l})}},[h,c,p,n,r,e,t,i,a,l])}var OV=0,FV=()=>`__${String(++OV)}__`;function jV(){let{router:t}=Z1("useSubmit"),{basename:e}=N.useContext(br),n=nV();return N.useCallback(async(r,i={})=>{let{action:a,method:l,encType:c,formData:h,body:p}=gV(r,e);if(i.navigate===!1){let m=i.fetcherKey||FV();await t.fetch(m,n,i.action||a,{preventScrollReset:i.preventScrollReset,formData:h,body:p,formMethod:i.method||l,formEncType:i.encType||c,flushSync:i.flushSync})}else await t.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:h,body:p,formMethod:i.method||l,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function $V(t,{relative:e}={}){let{basename:n}=N.useContext(br),r=N.useContext(ar);pt(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),a={...Sc(t||".",{relative:e})},l=ui();if(t==null){a.search=l.search;let c=new URLSearchParams(a.search),h=c.getAll("index");if(h.some(m=>m==="")){c.delete("index"),h.filter(y=>y).forEach(y=>c.append("index",y));let m=c.toString();a.search=m?`?${m}`:""}}return(!t||t===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:Di([n,a.pathname])),rc(a)}function UV(t,e={}){let n=N.useContext(H1);pt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Z1("useViewTransitionState"),i=Sc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let a=Fs(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Fs(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Jf(i.pathname,l)!=null||Jf(i.pathname,a)!=null}new TextEncoder;var ag={exports:{}},lg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE;function zV(){if(VE)return lg;VE=1;var t=Bd();function e(h,p){return h===p&&(h!==0||1/h===1/p)||h!==h&&p!==p}var n=typeof Object.is=="function"?Object.is:e,r=t.useSyncExternalStore,i=t.useRef,a=t.useEffect,l=t.useMemo,c=t.useDebugValue;return lg.useSyncExternalStoreWithSelector=function(h,p,m,y,w){var T=i(null);if(T.current===null){var x={hasValue:!1,value:null};T.current=x}else x=T.current;T=l(function(){function k(H){if(!b){if(b=!0,F=H,H=y(H),w!==void 0&&x.hasValue){var X=x.value;if(w(X,H))return U=X}return U=H}if(X=U,n(F,H))return X;var C=y(H);return w!==void 0&&w(X,C)?(F=H,X):(F=H,U=C)}var b=!1,F,U,$=m===void 0?null:m;return[function(){return k(p())},$===null?void 0:function(){return k($())}]},[p,m,y,w]);var P=r(h,T[0],T[1]);return a(function(){x.hasValue=!0,x.value=P},[P]),c(P),P},lg}var NE;function BV(){return NE||(NE=1,ag.exports=zV()),ag.exports}var WV=BV();function HV(t){t()}function qV(){let t=null,e=null;return{clear(){t=null,e=null},notify(){HV(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var ME={notify(){},get:()=>[]};function KV(t,e){let n,r=ME,i=0,a=!1;function l(P){m();const k=r.subscribe(P);let b=!1;return()=>{b||(b=!0,k(),y())}}function c(){r.notify()}function h(){x.onStateChange&&x.onStateChange()}function p(){return a}function m(){i++,n||(n=t.subscribe(h),r=qV())}function y(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=ME)}function w(){a||(a=!0,m())}function T(){a&&(a=!1,y())}const x={addNestedSub:l,notifyNestedSubs:c,handleChangeWrapper:h,isSubscribed:p,trySubscribe:w,tryUnsubscribe:T,getListeners:()=>r};return x}var GV=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QV=GV(),YV=()=>typeof navigator<"u"&&navigator.product==="ReactNative",XV=YV(),JV=()=>QV||XV?N.useLayoutEffect:N.useEffect,ZV=JV(),ug=Symbol.for("react-redux-context"),cg=typeof globalThis<"u"?globalThis:{};function eN(){if(!N.createContext)return{};const t=cg[ug]??(cg[ug]=new Map);let e=t.get(N.createContext);return e||(e=N.createContext(null),t.set(N.createContext,e)),e}var js=eN();function tN(t){const{children:e,context:n,serverState:r,store:i}=t,a=N.useMemo(()=>{const h=KV(i);return{store:i,subscription:h,getServerState:r?()=>r:void 0}},[i,r]),l=N.useMemo(()=>i.getState(),[i]);ZV(()=>{const{subscription:h}=a;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),l!==i.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[a,l]);const c=n||js;return N.createElement(c.Provider,{value:a},e)}var nN=tN;function _v(t=js){return function(){return N.useContext(t)}}var eI=_v();function tI(t=js){const e=t===js?eI:_v(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var rN=tI();function iN(t=js){const e=t===js?rN:tI(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var qd=iN(),sN=(t,e)=>t===e;function oN(t=js){const e=t===js?eI:_v(t),n=(r,i={})=>{const{equalityFn:a=sN}=typeof i=="function"?{equalityFn:i}:i,l=e(),{store:c,subscription:h,getServerState:p}=l;N.useRef(!0);const m=N.useCallback({[r.name](w){return r(w)}}[r.name],[r]),y=WV.useSyncExternalStoreWithSelector(h.addNestedSub,c.getState,p||c.getState,m,a);return N.useDebugValue(y),y};return Object.assign(n,{withTypes:()=>n}),n}var ti=oN();function Xt(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var aN=typeof Symbol=="function"&&Symbol.observable||"@@observable",LE=aN,hg=()=>Math.random().toString(36).substring(7).split("").join("."),lN={INIT:`@@redux/INIT${hg()}`,REPLACE:`@@redux/REPLACE${hg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${hg()}`},ed=lN;function wv(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function nI(t,e,n){if(typeof t!="function")throw new Error(Xt(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Xt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Xt(1));return n(nI)(t,e)}let r=t,i=e,a=new Map,l=a,c=0,h=!1;function p(){l===a&&(l=new Map,a.forEach((k,b)=>{l.set(b,k)}))}function m(){if(h)throw new Error(Xt(3));return i}function y(k){if(typeof k!="function")throw new Error(Xt(4));if(h)throw new Error(Xt(5));let b=!0;p();const F=c++;return l.set(F,k),function(){if(b){if(h)throw new Error(Xt(6));b=!1,p(),l.delete(F),a=null}}}function w(k){if(!wv(k))throw new Error(Xt(7));if(typeof k.type>"u")throw new Error(Xt(8));if(typeof k.type!="string")throw new Error(Xt(17));if(h)throw new Error(Xt(9));try{h=!0,i=r(i,k)}finally{h=!1}return(a=l).forEach(F=>{F()}),k}function T(k){if(typeof k!="function")throw new Error(Xt(10));r=k,w({type:ed.REPLACE})}function x(){const k=y;return{subscribe(b){if(typeof b!="object"||b===null)throw new Error(Xt(11));function F(){const $=b;$.next&&$.next(m())}return F(),{unsubscribe:k(F)}},[LE](){return this}}}return w({type:ed.INIT}),{dispatch:w,subscribe:y,getState:m,replaceReducer:T,[LE]:x}}function uN(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:ed.INIT})>"u")throw new Error(Xt(12));if(typeof n(void 0,{type:ed.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Xt(13))})}function cN(t){const e=Object.keys(t),n={};for(let a=0;a<e.length;a++){const l=e[a];typeof t[l]=="function"&&(n[l]=t[l])}const r=Object.keys(n);let i;try{uN(n)}catch(a){i=a}return function(l={},c){if(i)throw i;let h=!1;const p={};for(let m=0;m<r.length;m++){const y=r[m],w=n[y],T=l[y],x=w(T,c);if(typeof x>"u")throw c&&c.type,new Error(Xt(14));p[y]=x,h=h||x!==T}return h=h||r.length!==Object.keys(l).length,h?p:l}}function td(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function hN(...t){return e=>(n,r)=>{const i=e(n,r);let a=()=>{throw new Error(Xt(15))};const l={getState:i.getState,dispatch:(h,...p)=>a(h,...p)},c=t.map(h=>h(l));return a=td(...c)(i.dispatch),{...i,dispatch:a}}}function fN(t){return wv(t)&&"type"in t&&typeof t.type=="string"}var rI=Symbol.for("immer-nothing"),OE=Symbol.for("immer-draftable"),zn=Symbol.for("immer-state");function Sr(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var cl=Object.getPrototypeOf;function jo(t){return!!t&&!!t[zn]}function Li(t){var e;return t?iI(t)||Array.isArray(t)||!!t[OE]||!!((e=t.constructor)!=null&&e[OE])||Gd(t)||Qd(t):!1}var dN=Object.prototype.constructor.toString();function iI(t){if(!t||typeof t!="object")return!1;const e=cl(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===dN}function nd(t,e){Kd(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Kd(t){const e=t[zn];return e?e.type_:Array.isArray(t)?1:Gd(t)?2:Qd(t)?3:0}function Zg(t,e){return Kd(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function sI(t,e,n){const r=Kd(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function pN(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Gd(t){return t instanceof Map}function Qd(t){return t instanceof Set}function Co(t){return t.copy_||t.base_}function ey(t,e){if(Gd(t))return new Map(t);if(Qd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=iI(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[zn];let i=Reflect.ownKeys(r);for(let a=0;a<i.length;a++){const l=i[a],c=r[l];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[l]={configurable:!0,writable:!0,enumerable:c.enumerable,value:t[l]})}return Object.create(cl(t),r)}else{const r=cl(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function Ev(t,e=!1){return Yd(t)||jo(t)||!Li(t)||(Kd(t)>1&&(t.set=t.add=t.clear=t.delete=mN),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Ev(r,!0))),t}function mN(){Sr(2)}function Yd(t){return Object.isFrozen(t)}var gN={};function $o(t){const e=gN[t];return e||Sr(0,t),e}var ic;function oI(){return ic}function yN(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function FE(t,e){e&&($o("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function ty(t){ny(t),t.drafts_.forEach(vN),t.drafts_=null}function ny(t){t===ic&&(ic=t.parent_)}function jE(t){return ic=yN(ic,t)}function vN(t){const e=t[zn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function $E(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[zn].modified_&&(ty(e),Sr(4)),Li(t)&&(t=rd(e,t),e.parent_||id(e,t)),e.patches_&&$o("Patches").generateReplacementPatches_(n[zn].base_,t,e.patches_,e.inversePatches_)):t=rd(e,n,[]),ty(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==rI?t:void 0}function rd(t,e,n){if(Yd(e))return e;const r=e[zn];if(!r)return nd(e,(i,a)=>UE(t,r,e,i,a,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return id(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let a=i,l=!1;r.type_===3&&(a=new Set(i),i.clear(),l=!0),nd(a,(c,h)=>UE(t,r,i,c,h,n,l)),id(t,i,!1),n&&t.patches_&&$o("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function UE(t,e,n,r,i,a,l){if(jo(i)){const c=a&&e&&e.type_!==3&&!Zg(e.assigned_,r)?a.concat(r):void 0,h=rd(t,i,c);if(sI(n,r,h),jo(h))t.canAutoFreeze_=!1;else return}else l&&n.add(i);if(Li(i)&&!Yd(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;rd(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&id(t,i)}}function id(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Ev(e,n)}function _N(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:oI(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=Tv;n&&(i=[r],a=sc);const{revoke:l,proxy:c}=Proxy.revocable(i,a);return r.draft_=c,r.revoke_=l,c}var Tv={get(t,e){if(e===zn)return t;const n=Co(t);if(!Zg(n,e))return wN(t,n,e);const r=n[e];return t.finalized_||!Li(r)?r:r===fg(t.base_,e)?(dg(t),t.copy_[e]=iy(r,t)):r},has(t,e){return e in Co(t)},ownKeys(t){return Reflect.ownKeys(Co(t))},set(t,e,n){const r=aI(Co(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=fg(Co(t),e),a=i==null?void 0:i[zn];if(a&&a.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(pN(n,i)&&(n!==void 0||Zg(t.base_,e)))return!0;dg(t),ry(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return fg(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,dg(t),ry(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Co(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Sr(11)},getPrototypeOf(t){return cl(t.base_)},setPrototypeOf(){Sr(12)}},sc={};nd(Tv,(t,e)=>{sc[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});sc.deleteProperty=function(t,e){return sc.set.call(this,t,e,void 0)};sc.set=function(t,e,n){return Tv.set.call(this,t[0],e,n,t[0])};function fg(t,e){const n=t[zn];return(n?Co(n):t)[e]}function wN(t,e,n){var i;const r=aI(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function aI(t,e){if(!(e in t))return;let n=cl(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=cl(n)}}function ry(t){t.modified_||(t.modified_=!0,t.parent_&&ry(t.parent_))}function dg(t){t.copy_||(t.copy_=ey(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var EN=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const a=n;n=e;const l=this;return function(h=a,...p){return l.produce(h,m=>n.call(this,m,...p))}}typeof n!="function"&&Sr(6),r!==void 0&&typeof r!="function"&&Sr(7);let i;if(Li(e)){const a=jE(this),l=iy(e,void 0);let c=!0;try{i=n(l),c=!1}finally{c?ty(a):ny(a)}return FE(a,r),$E(i,a)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===rI&&(i=void 0),this.autoFreeze_&&Ev(i,!0),r){const a=[],l=[];$o("Patches").generateReplacementPatches_(e,i,a,l),r(a,l)}return i}else Sr(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(l,...c)=>this.produceWithPatches(l,h=>e(h,...c));let r,i;return[this.produce(e,n,(l,c)=>{r=l,i=c}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Li(t)||Sr(8),jo(t)&&(t=TN(t));const e=jE(this),n=iy(t,void 0);return n[zn].isManual_=!0,ny(e),n}finishDraft(t,e){const n=t&&t[zn];(!n||!n.isManual_)&&Sr(9);const{scope_:r}=n;return FE(r,e),$E(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=$o("Patches").applyPatches_;return jo(t)?r(t,e):this.produce(t,i=>r(i,e))}};function iy(t,e){const n=Gd(t)?$o("MapSet").proxyMap_(t,e):Qd(t)?$o("MapSet").proxySet_(t,e):_N(t,e);return(e?e.scope_:oI()).drafts_.push(n),n}function TN(t){return jo(t)||Sr(10,t),lI(t)}function lI(t){if(!Li(t)||Yd(t))return t;const e=t[zn];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=ey(t,e.scope_.immer_.useStrictShallowCopy_)}else n=ey(t,!0);return nd(n,(r,i)=>{sI(n,r,lI(i))}),e&&(e.finalized_=!1),n}var Bn=new EN,uI=Bn.produce;Bn.produceWithPatches.bind(Bn);Bn.setAutoFreeze.bind(Bn);Bn.setUseStrictShallowCopy.bind(Bn);Bn.applyPatches.bind(Bn);Bn.createDraft.bind(Bn);Bn.finishDraft.bind(Bn);function cI(t){return({dispatch:n,getState:r})=>i=>a=>typeof a=="function"?a(n,r,t):i(a)}var SN=cI(),xN=cI,IN=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?td:td.apply(null,arguments)};function zE(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(Vi(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>fN(r)&&r.type===t,n}var hI=class Ou extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Ou.prototype)}static get[Symbol.species](){return Ou}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Ou(...e[0].concat(this)):new Ou(...e.concat(this))}};function BE(t){return Li(t)?uI(t,()=>{}):t}function of(t,e,n){return t.has(e)?t.get(e):t.set(e,n(e)).get(e)}function AN(t){return typeof t=="boolean"}var CN=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:a=!0}=e??{};let l=new hI;return n&&(AN(n)?l.push(SN):l.push(xN(n.extraArgument))),l},kN="RTK_autoBatch",WE=t=>e=>{setTimeout(e,t)},PN=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,a=!1,l=!1;const c=new Set,h=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:WE(10):t.type==="callback"?t.queueNotification:WE(t.timeout),p=()=>{l=!1,a&&(a=!1,c.forEach(m=>m()))};return Object.assign({},r,{subscribe(m){const y=()=>i&&m(),w=r.subscribe(y);return c.add(m),()=>{w(),c.delete(m)}},dispatch(m){var y;try{return i=!((y=m==null?void 0:m.meta)!=null&&y[kN]),a=!i,a&&(l||(l=!0,h(p))),r.dispatch(m)}finally{i=!0}}})},RN=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new hI(t);return r&&i.push(PN(typeof r=="object"?r:void 0)),i};function bN(t){const e=CN(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:l=void 0,enhancers:c=void 0}=t;let h;if(typeof n=="function")h=n;else if(wv(n))h=cN(n);else throw new Error(Vi(1));let p;typeof r=="function"?p=r(e):p=e();let m=td;i&&(m=IN({trace:!1,...typeof i=="object"&&i}));const y=hN(...p),w=RN(y);let T=typeof c=="function"?c(w):w();const x=m(...T);return nI(h,l,x)}function fI(t){const e={},n=[];let r;const i={addCase(a,l){const c=typeof a=="string"?a:a.type;if(!c)throw new Error(Vi(28));if(c in e)throw new Error(Vi(29));return e[c]=l,i},addMatcher(a,l){return n.push({matcher:a,reducer:l}),i},addDefaultCase(a){return r=a,i}};return t(i),[e,n,r]}function DN(t){return typeof t=="function"}function VN(t,e){let[n,r,i]=fI(e),a;if(DN(t))a=()=>BE(t());else{const c=BE(t);a=()=>c}function l(c=a(),h){let p=[n[h.type],...r.filter(({matcher:m})=>m(h)).map(({reducer:m})=>m)];return p.filter(m=>!!m).length===0&&(p=[i]),p.reduce((m,y)=>{if(y)if(jo(m)){const T=y(m,h);return T===void 0?m:T}else{if(Li(m))return uI(m,w=>y(w,h));{const w=y(m,h);if(w===void 0){if(m===null)return m;throw Error("A case reducer on a non-draftable value must not return undefined")}return w}}return m},c)}return l.getInitialState=a,l}var NN=Symbol.for("rtk-slice-createasyncthunk");function MN(t,e){return`${t}/${e}`}function LN({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[NN];return function(i){const{name:a,reducerPath:l=a}=i;if(!a)throw new Error(Vi(11));const c=(typeof i.reducers=="function"?i.reducers(jN()):i.reducers)||{},h=Object.keys(c),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},m={addCase($,H){const X=typeof $=="string"?$:$.type;if(!X)throw new Error(Vi(12));if(X in p.sliceCaseReducersByType)throw new Error(Vi(13));return p.sliceCaseReducersByType[X]=H,m},addMatcher($,H){return p.sliceMatchers.push({matcher:$,reducer:H}),m},exposeAction($,H){return p.actionCreators[$]=H,m},exposeCaseReducer($,H){return p.sliceCaseReducersByName[$]=H,m}};h.forEach($=>{const H=c[$],X={reducerName:$,type:MN(a,$),createNotation:typeof i.reducers=="function"};UN(H)?BN(X,H,m,e):$N(X,H,m)});function y(){const[$={},H=[],X=void 0]=typeof i.extraReducers=="function"?fI(i.extraReducers):[i.extraReducers],C={...$,...p.sliceCaseReducersByType};return VN(i.initialState,I=>{for(let R in C)I.addCase(R,C[R]);for(let R of p.sliceMatchers)I.addMatcher(R.matcher,R.reducer);for(let R of H)I.addMatcher(R.matcher,R.reducer);X&&I.addDefaultCase(X)})}const w=$=>$,T=new Map,x=new WeakMap;let P;function k($,H){return P||(P=y()),P($,H)}function b(){return P||(P=y()),P.getInitialState()}function F($,H=!1){function X(I){let R=I[$];return typeof R>"u"&&H&&(R=of(x,X,b)),R}function C(I=w){const R=of(T,H,()=>new WeakMap);return of(R,I,()=>{const D={};for(const[O,B]of Object.entries(i.selectors??{}))D[O]=ON(B,I,()=>of(x,I,b),H);return D})}return{reducerPath:$,getSelectors:C,get selectors(){return C(X)},selectSlice:X}}const U={name:a,reducer:k,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:b,...F(l),injectInto($,{reducerPath:H,...X}={}){const C=H??l;return $.inject({reducerPath:C,reducer:k},X),{...U,...F(C,!0)}}};return U}}function ON(t,e,n,r){function i(a,...l){let c=e(a);return typeof c>"u"&&r&&(c=n()),t(c,...l)}return i.unwrapped=t,i}var FN=LN();function jN(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function $N({type:t,reducerName:e,createNotation:n},r,i){let a,l;if("reducer"in r){if(n&&!zN(r))throw new Error(Vi(17));a=r.reducer,l=r.prepare}else a=r;i.addCase(t,a).exposeCaseReducer(e,a).exposeAction(e,l?zE(t,l):zE(t))}function UN(t){return t._reducerDefinitionType==="asyncThunk"}function zN(t){return t._reducerDefinitionType==="reducerWithPrepare"}function BN({type:t,reducerName:e},n,r,i){if(!i)throw new Error(Vi(18));const{payloadCreator:a,fulfilled:l,pending:c,rejected:h,settled:p,options:m}=n,y=i(t,a,m);r.exposeAction(e,y),l&&r.addCase(y.fulfilled,l),c&&r.addCase(y.pending,c),h&&r.addCase(y.rejected,h),p&&r.addMatcher(y.settled,p),r.exposeCaseReducer(e,{fulfilled:l||af,pending:c||af,rejected:h||af,settled:p||af})}function af(){}function Vi(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var Dr=function(e){return"@@redux-saga/"+e},WN=Dr("CANCEL_PROMISE"),dI=Dr("CHANNEL_END"),pI=Dr("IO"),HE=Dr("MATCH"),mI=Dr("MULTICAST"),gI=Dr("SAGA_ACTION"),HN=Dr("SELF_CANCELLATION"),qN=Dr("TASK"),tl=Dr("TASK_CANCEL"),yI=Dr("TERMINATE"),KN=Dr("LOCATION");function sd(){return sd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sd.apply(null,arguments)}function GN(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}var vI=function(e){return e==null},If=function(e){return e!=null},kn=function(e){return typeof e=="function"},Sv=function(e){return typeof e=="string"},Gs=Array.isArray,Xd=function(e){return e&&kn(e.then)},xv=function(e){return e&&kn(e.next)&&kn(e.throw)},qE=function t(e){return e&&(Sv(e)||wI(e)||kn(e)||Gs(e)&&e.every(t))},Iv=function(e){return e&&kn(e.take)&&kn(e.close)},_I=function(e){return kn(e)&&e.hasOwnProperty("toString")},wI=function(e){return!!e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype},QN=function(e){return Iv(e)&&e[mI]},YN=function(e){return function(){return e}},XN=YN(!0),gn=function(){},EI=function(e){return e},Av=function(e,n){sd(e,n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(n).forEach(function(r){e[r]=n[r]})},JN=function(e,n){var r;return(r=[]).concat.apply(r,n.map(e))};function Jd(t,e){var n=t.indexOf(e);n>=0&&t.splice(n,1)}function ZN(t){var e=!1;return function(){e||(e=!0,t())}}var e2=function(e){throw e},t2=function(e){return{value:e,done:!0}};function sy(t,e,n){e===void 0&&(e=e2),n===void 0&&(n="iterator");var r={meta:{name:n},next:t,throw:e,return:t2,isSagaIterator:!0};return typeof Symbol<"u"&&(r[Symbol.iterator]=function(){return r}),r}function n2(t,e){var n=e.sagaStack;console.error(t),console.error(n)}var TI=function(e){return Array.apply(null,new Array(e))},r2=function(e){return function(n){return e(Object.defineProperty(n,gI,{value:!0}))}},SI=function(e){return e===yI},xI=function(e){return e===tl},II=function(e){return SI(e)||xI(e)};function AI(t,e){var n=Object.keys(t),r=n.length,i=0,a,l=Gs(t)?TI(r):{},c={};function h(){i===r&&(a=!0,e(l))}return n.forEach(function(p){var m=function(w,T){a||(T||II(w)?(e.cancel(),e(w,T)):(l[p]=w,i++,h()))};m.cancel=gn,c[p]=m}),e.cancel=function(){a||(a=!0,n.forEach(function(p){return c[p].cancel()}))},c}function Cv(t){return{name:t.name||"anonymous",location:CI(t)}}function CI(t){return t[KN]}function i2(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}var s2="Channel's Buffer overflow!",o2=1,a2=3,kI=4;function l2(t,e){t===void 0&&(t=10);var n=new Array(t),r=0,i=0,a=0,l=function(m){n[i]=m,i=(i+1)%t,r++},c=function(){if(r!=0){var m=n[a];return n[a]=null,r--,a=(a+1)%t,m}},h=function(){for(var m=[];r;)m.push(c());return m};return{isEmpty:function(){return r==0},put:function(m){if(r<t)l(m);else{var y;switch(e){case o2:throw new Error(s2);case a2:n[i]=m,i=(i+1)%t,a=i;break;case kI:y=2*t,n=h(),r=n.length,i=n.length,a=0,n.length=y,t=y,l(m);break}}},take:c,flush:h}}var u2=function(e){return l2(e,kI)},Af="TAKE",PI="PUT",c2="ALL",h2="RACE",f2="CALL",d2="CPS",RI="FORK",p2="JOIN",m2="CANCEL",bI="SELECT",g2="ACTION_CHANNEL",y2="CANCELLED",v2="FLUSH",_2="GET_CONTEXT",w2="SET_CONTEXT",nl=function(e,n){var r;return r={},r[pI]=!0,r.combinator=!1,r.type=e,r.payload=n,r};function E2(t,e){if(t===void 0&&(t="*"),qE(t))return If(e)&&console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"),nl(Af,{pattern:t});if(QN(t)&&If(e)&&qE(e))return nl(Af,{channel:t,pattern:e});if(Iv(t))return If(e)&&console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."),nl(Af,{channel:t})}function DI(t,e){return vI(e)&&(e=t,t=void 0),nl(PI,{channel:t,action:e})}function T2(t,e){var n=null,r;return kn(t)?r=t:(Gs(t)?(n=t[0],r=t[1]):(n=t.context,r=t.fn),n&&Sv(r)&&kn(n[r])&&(r=n[r])),{context:n,fn:r,args:e}}function VI(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return nl(RI,T2(t,n))}function NI(t){t===void 0&&(t=EI);for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return nl(bI,{selector:t,args:n})}function S2(){var t={};return t.promise=new Promise(function(e,n){t.resolve=e,t.reject=n}),t}var MI=[],Zd=0;function x2(t){try{kv(),t()}finally{FI()}}function LI(t){MI.push(t),Zd||(kv(),jI())}function OI(t){try{return kv(),t()}finally{jI()}}function kv(){Zd++}function FI(){Zd--}function jI(){FI();for(var t;!Zd&&(t=MI.shift())!==void 0;)x2(t)}var I2=function(e){return function(n){return e.some(function(r){return Pv(r)(n)})}},A2=function(e){return function(n){return e(n)}},KE=function(e){return function(n){return n.type===String(e)}},C2=function(e){return function(n){return n.type===e}},$I=function(){return XN};function Pv(t){var e=t==="*"?$I:Sv(t)?KE:Gs(t)?I2:_I(t)?KE:kn(t)?A2:wI(t)?C2:null;if(e===null)throw new Error("invalid pattern: "+t);return e(t)}var Hu={type:dI},Rv=function(e){return e&&e.type===dI};function k2(t){t===void 0&&(t=u2());var e=!1,n=[];function r(c){if(!e){if(n.length===0)return t.put(c);var h=n.shift();h(c)}}function i(c){e&&t.isEmpty()?c(Hu):t.isEmpty()?(n.push(c),c.cancel=function(){Jd(n,c)}):c(t.take())}function a(c){if(e&&t.isEmpty()){c(Hu);return}c(t.flush())}function l(){if(!e){e=!0;var c=n;n=[];for(var h=0,p=c.length;h<p;h++){var m=c[h];m(Hu)}}}return{take:i,put:r,flush:a,close:l}}function P2(){var t,e=!1,n=[],r=n,i=function(){r===n&&(r=n.slice())},a=function(){e=!0;var c=n=r;r=[],c.forEach(function(h){h(Hu)})};return t={},t[mI]=!0,t.put=function(c){if(!e){if(Rv(c)){a();return}for(var h=n=r,p=0,m=h.length;p<m;p++){var y=h[p];y[HE](c)&&(y.cancel(),y(c))}}},t.take=function(c,h){if(h===void 0&&(h=$I),e){c(Hu);return}c[HE]=h,i(),r.push(c),c.cancel=ZN(function(){i(),Jd(r,c)})},t.close=a,t}function UI(){var t=P2(),e=t.put;return t.put=function(n){if(n[gI]){e(n);return}LI(function(){e(n)})},t}var Ro=0,Pi=1,Cf=2,zI=3;function bv(t,e){var n=t[WN];kn(n)&&(e.cancel=n),t.then(e,function(r){e(r,!0)})}var xc=0,BI=function(){return++xc},Yt;function R2(t,e){return t.isSagaIterator?{name:t.meta.name}:Cv(e)}function b2(t){var e=t.context,n=t.fn,r=t.args;try{var i=n.apply(e,r);if(xv(i))return i;var a=!1,l=function(h){return a?{value:h,done:!0}:(a=!0,{value:i,done:!Xd(i)})};return sy(l)}catch(c){return sy(function(){throw c})}}function D2(t,e,n){var r=e.channel,i=e.action,a=e.resolve;LI(function(){var l;try{l=(r?r.put:t.dispatch)(i)}catch(c){n(c,!0);return}a&&Xd(l)?bv(l,n):n(l)})}function V2(t,e,n){var r=e.channel,i=r===void 0?t.channel:r,a=e.pattern,l=e.maybe,c=function(p){if(p instanceof Error){n(p,!0);return}if(Rv(p)&&!l){n(yI);return}n(p)};try{i.take(c,If(a)?Pv(a):null)}catch(h){n(h,!0);return}n.cancel=c.cancel}function N2(t,e,n,r){var i=e.context,a=e.fn,l=e.args,c=r.task;try{var h=a.apply(i,l);if(Xd(h)){bv(h,n);return}if(xv(h)){ep(t,h,c.context,xc,Cv(a),!1,n);return}n(h)}catch(p){n(p,!0)}}function M2(t,e,n){var r=e.context,i=e.fn,a=e.args;try{var l=function(h,p){vI(h)?n(p):n(h,!0)};i.apply(r,a.concat(l)),l.cancel&&(n.cancel=l.cancel)}catch(c){n(c,!0)}}function L2(t,e,n,r){var i=e.context,a=e.fn,l=e.args,c=e.detached,h=r.task,p=b2({context:i,fn:a,args:l}),m=R2(p,a);OI(function(){var y=ep(t,p,h.context,xc,m,c,void 0);c?n(y):y.isRunning()?(h.queue.addTask(y),n(y)):y.isAborted()?h.queue.abort(y.error()):n(y)})}function O2(t,e,n,r){var i=r.task,a=function(h,p){if(h.isRunning()){var m={task:i,cb:p};p.cancel=function(){h.isRunning()&&Jd(h.joiners,m)},h.joiners.push(m)}else h.isAborted()?p(h.error(),!0):p(h.result())};if(Gs(e)){if(e.length===0){n([]);return}var l=AI(e,n);e.forEach(function(c,h){a(c,l[h])})}else a(e,n)}function pg(t){t.isRunning()&&t.cancel()}function F2(t,e,n,r){var i=r.task;e===HN?pg(i):Gs(e)?e.forEach(pg):pg(e),n()}function j2(t,e,n,r){var i=r.digestEffect,a=xc,l=Object.keys(e);if(l.length===0){n(Gs(e)?[]:{});return}var c=AI(e,n);l.forEach(function(h){i(e[h],a,c[h],h)})}function $2(t,e,n,r){var i=r.digestEffect,a=xc,l=Object.keys(e),c=Gs(e)?TI(l.length):{},h={},p=!1;l.forEach(function(m){var y=function(T,x){p||(x||II(T)?(n.cancel(),n(T,x)):(n.cancel(),p=!0,c[m]=T,n(c)))};y.cancel=gn,h[m]=y}),n.cancel=function(){p||(p=!0,l.forEach(function(m){return h[m].cancel()}))},l.forEach(function(m){p||i(e[m],a,h[m],m)})}function U2(t,e,n){var r=e.selector,i=e.args;try{var a=r.apply(void 0,[t.getState()].concat(i));n(a)}catch(l){n(l,!0)}}function z2(t,e,n){var r=e.pattern,i=e.buffer,a=k2(i),l=Pv(r),c=function p(m){Rv(m)||t.channel.take(p,l),a.put(m)},h=a.close;a.close=function(){c.cancel(),h()},t.channel.take(c,l),n(a)}function B2(t,e,n,r){var i=r.task;n(i.isCancelled())}function W2(t,e,n){e.flush(n)}function H2(t,e,n,r){var i=r.task;n(i.context[e])}function q2(t,e,n,r){var i=r.task;Av(i.context,e),n()}var K2=(Yt={},Yt[Af]=V2,Yt[PI]=D2,Yt[c2]=j2,Yt[h2]=$2,Yt[f2]=N2,Yt[d2]=M2,Yt[RI]=L2,Yt[p2]=O2,Yt[m2]=F2,Yt[bI]=U2,Yt[g2]=z2,Yt[y2]=B2,Yt[v2]=W2,Yt[_2]=H2,Yt[w2]=q2,Yt);function G2(t,e,n){var r=[],i,a=!1;h(t);var l=function(){return r};function c(m){e(),p(),n(m,!0)}function h(m){r.push(m),m.cont=function(y,w){a||(Jd(r,m),m.cont=gn,w?c(y):(m===t&&(i=y),r.length||(a=!0,n(i))))}}function p(){a||(a=!0,r.forEach(function(m){m.cont=gn,m.cancel()}),r=[])}return{addTask:h,cancelAll:p,abort:c,getTasks:l}}function WI(t,e){return t+"?"+e}function Q2(t){var e=CI(t);if(e){var n=e.code,r=e.fileName,i=e.lineNumber,a=n+"  "+WI(r,i);return a}return""}function GE(t){var e=t.name,n=t.location;return n?e+"  "+WI(n.fileName,n.lineNumber):e}function Y2(t){var e=JN(function(n){return n.cancelledTasks},t);return e.length?["Tasks cancelled due to error:"].concat(e).join(`
`):""}var Dv=null,qu=[],X2=function(e){e.crashedEffect=Dv,qu.push(e)},HI=function(){Dv=null,qu.length=0},J2=function(e){Dv=e},Z2=function(){var e=qu[0],n=qu.slice(1),r=e.crashedEffect?Q2(e.crashedEffect):null,i="The above error occurred in task "+GE(e.meta)+(r?` 
 when executing effect `+r:"");return[i].concat(n.map(function(a){return"    created by "+GE(a.meta)}),[Y2(qu)]).join(`
`)};function eM(t,e,n,r,i,a,l){var c;l===void 0&&(l=gn);var h=Ro,p,m,y=null,w=[],T=Object.create(n),x=G2(e,function(){w.push.apply(w,x.getTasks().map(function(H){return H.meta.name}))},k);function P(){h===Ro&&(h=Pi,x.cancelAll(),k(tl,!1))}function k($,H){if(!H)$===tl?h=Pi:h!==Pi&&(h=zI),p=$,y&&y.resolve($);else{if(h=Cf,X2({meta:i,cancelledTasks:w}),U.isRoot){var X=Z2();HI(),t.onError($,{sagaStack:X})}m=$,y&&y.reject($)}U.cont($,H),U.joiners.forEach(function(C){C.cb($,H)}),U.joiners=null}function b($){Av(T,$)}function F(){return y||(y=S2(),h===Cf?y.reject(m):h!==Ro&&y.resolve(p)),y.promise}var U=(c={},c[qN]=!0,c.id=r,c.meta=i,c.isRoot=a,c.context=T,c.joiners=[],c.queue=x,c.cancel=P,c.cont=l,c.end=k,c.setContext=b,c.toPromise=F,c.isRunning=function(){return h===Ro},c.isCancelled=function(){return h===Pi||h===Ro&&e.status===Pi},c.isAborted=function(){return h===Cf},c.result=function(){return p},c.error=function(){return m},c);return U}function ep(t,e,n,r,i,a,l){var c=t.finalizeRunEffect(T);w.cancel=gn;var h={meta:i,cancel:y,status:Ro},p=eM(t,h,n,r,i,a,l),m={task:p,digestEffect:x};function y(){h.status===Ro&&(h.status=Pi,w(tl))}return l&&(l.cancel=p.cancel),w(),p;function w(P,k){try{var b;k?(b=e.throw(P),HI()):xI(P)?(h.status=Pi,w.cancel(),b=kn(e.return)?e.return(tl):{done:!0,value:tl}):SI(P)?b=kn(e.return)?e.return():{done:!0}:b=e.next(P),b.done?(h.status!==Pi&&(h.status=zI),h.cont(b.value)):x(b.value,r,w)}catch(F){if(h.status===Pi)throw F;h.status=Cf,h.cont(F,!0)}}function T(P,k,b){if(Xd(P))bv(P,b);else if(xv(P))ep(t,P,p.context,k,i,!1,b);else if(P&&P[pI]){var F=K2[P.type];F(t,P.payload,b,m)}else b(P)}function x(P,k,b,F){F===void 0&&(F="");var U=BI();t.sagaMonitor&&t.sagaMonitor.effectTriggered({effectId:U,parentEffectId:k,label:F,effect:P});var $;function H(X,C){$||($=!0,b.cancel=gn,t.sagaMonitor&&(C?t.sagaMonitor.effectRejected(U,X):t.sagaMonitor.effectResolved(U,X)),C&&J2(P),b(X,C))}H.cancel=gn,b.cancel=function(){$||($=!0,H.cancel(),H.cancel=gn,t.sagaMonitor&&t.sagaMonitor.effectCancelled(U))},c(P,U,H)}}function tM(t,e){for(var n=t.channel,r=n===void 0?UI():n,i=t.dispatch,a=t.getState,l=t.context,c=l===void 0?{}:l,h=t.sagaMonitor,p=t.effectMiddlewares,m=t.onError,y=m===void 0?n2:m,w=arguments.length,T=new Array(w>2?w-2:0),x=2;x<w;x++)T[x-2]=arguments[x];var P=e.apply(void 0,T),k=BI();h&&(h.rootSagaStarted=h.rootSagaStarted||gn,h.effectTriggered=h.effectTriggered||gn,h.effectResolved=h.effectResolved||gn,h.effectRejected=h.effectRejected||gn,h.effectCancelled=h.effectCancelled||gn,h.actionDispatched=h.actionDispatched||gn,h.rootSagaStarted({effectId:k,saga:e,args:T}));var b;if(p){var F=i2.apply(void 0,p);b=function(H){return function(X,C,I){var R=function(O){return H(O,C,I)};return F(R)(X)}}}else b=EI;var U={channel:r,dispatch:r2(i),getState:a,sagaMonitor:h,onError:y,finalizeRunEffect:b};return OI(function(){var $=ep(U,P,c,k,Cv(e),!0,void 0);return h&&h.effectResolved(k,$),$})}function nM(t){var e={},n=e.context,r=n===void 0?{}:n,i=e.channel,a=i===void 0?UI():i,l=e.sagaMonitor,c=GN(e,["context","channel","sagaMonitor"]),h;function p(m){var y=m.getState,w=m.dispatch;return h=tM.bind(null,sd({},c,{context:r,channel:a,dispatch:w,getState:y,sagaMonitor:l})),function(T){return function(x){l&&l.actionDispatched&&l.actionDispatched(x);var P=T(x);return a.put(x),P}}}return p.run=function(){return h.apply(void 0,arguments)},p.setContext=function(m){Av(r,m)},p}const rM="abcdefghijklmnopqrstuvwxyz".split(""),iM="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),qI="kiddoo_app_state",sM=()=>{try{const t=localStorage.getItem(qI);return t===null?void 0:JSON.parse(t)}catch{return}},wr=t=>{try{const e=JSON.stringify(t);localStorage.setItem(qI,e)}catch{}},dt={score:0,streak:0},oe=sM();var g1,y1,v1,_1,w1,E1,T1,S1,x1,I1,A1,C1,k1,P1,R1,b1,D1,V1,N1,M1,L1,O1,F1,j1;const oM={selectedAlphabet:"",bigAlphabets:iM,smallAlphabets:rM,alphabets:[],loading:!1,userStats:(oe==null?void 0:oe.userStats)||{score:0,streak:0,lastPlayed:null},gameStats:{math:{...dt,...(g1=oe==null?void 0:oe.gameStats)==null?void 0:g1.math},spelling:{...dt,...(y1=oe==null?void 0:oe.gameStats)==null?void 0:y1.spelling},missing_letters:{...dt,...(v1=oe==null?void 0:oe.gameStats)==null?void 0:v1.missing_letters},comparison:{...dt,...(_1=oe==null?void 0:oe.gameStats)==null?void 0:_1.comparison},sorting:{...dt,...(w1=oe==null?void 0:oe.gameStats)==null?void 0:w1.sorting},alphabet:{...dt,...(E1=oe==null?void 0:oe.gameStats)==null?void 0:E1.alphabet},sight_words:{...dt,...(T1=oe==null?void 0:oe.gameStats)==null?void 0:T1.sight_words},sudoku:{...dt,...(S1=oe==null?void 0:oe.gameStats)==null?void 0:S1.sudoku},alphabet_hindi:{...dt,...(x1=oe==null?void 0:oe.gameStats)==null?void 0:x1.alphabet_hindi},alphabet_telugu:{...dt,...(I1=oe==null?void 0:oe.gameStats)==null?void 0:I1.alphabet_telugu},weeks_english:{...dt,...(A1=oe==null?void 0:oe.gameStats)==null?void 0:A1.weeks_english},weeks_telugu:{...dt,...(C1=oe==null?void 0:oe.gameStats)==null?void 0:C1.weeks_telugu},months_english:{...dt,...(k1=oe==null?void 0:oe.gameStats)==null?void 0:k1.months_english},shapes:{...dt,...(P1=oe==null?void 0:oe.gameStats)==null?void 0:P1.shapes},body_parts:{...dt,...(R1=oe==null?void 0:oe.gameStats)==null?void 0:R1.body_parts},sense_organs:{...dt,...(b1=oe==null?void 0:oe.gameStats)==null?void 0:b1.sense_organs},weeks_hindi:{...dt,...(D1=oe==null?void 0:oe.gameStats)==null?void 0:D1.weeks_hindi},numbers_english_spelling:{...dt,...(V1=oe==null?void 0:oe.gameStats)==null?void 0:V1.numbers_english_spelling},numbers_hindi:{...dt,...(N1=oe==null?void 0:oe.gameStats)==null?void 0:N1.numbers_hindi},numbers_telugu:{...dt,...(M1=oe==null?void 0:oe.gameStats)==null?void 0:M1.numbers_telugu},months_telugu:{...dt,...(L1=oe==null?void 0:oe.gameStats)==null?void 0:L1.months_telugu},months_hindi:{...dt,...(O1=oe==null?void 0:oe.gameStats)==null?void 0:O1.months_hindi},place_values:{...dt,...(F1=oe==null?void 0:oe.gameStats)==null?void 0:F1.place_values},master_test:{...dt,...(j1=oe==null?void 0:oe.gameStats)==null?void 0:j1.master_test}},isMobileMenuOpen:!1,isMuted:(oe==null?void 0:oe.isMuted)??!1,currentMode:(oe==null?void 0:oe.currentMode)??null,theme:(oe==null?void 0:oe.theme)||"light",fontSizeLevel:(oe==null?void 0:oe.fontSizeLevel)||"large",userName:(oe==null?void 0:oe.userName)||"",user:null},KI=FN({name:"alphabet",initialState:oM,reducers:{getAlphabets:t=>{t.loading=!0},setAlphabets:(t,e)=>{t.loading=!1,t.alphabets=e.payload},getSelectedAlphabet:t=>{t.loading=!0},setSelectedAlphabet:(t,e)=>{t.selectedAlphabet=e.payload,t.loading=!1},incrementScore:(t,e)=>{const n=e==null?void 0:e.payload;t.userStats.score+=10,t.userStats.streak+=1,t.userStats.lastPlayed=new Date().toISOString(),n&&t.gameStats&&t.gameStats[n]&&(t.gameStats[n].score+=10,t.gameStats[n].streak+=1),wr(t)},resetStreak:(t,e)=>{const n=e==null?void 0:e.payload;t.userStats.streak=0,n&&t.gameStats&&t.gameStats[n]&&(t.gameStats[n].streak=0),wr(t)},toggleMobileMenu:t=>{t.isMobileMenuOpen=!t.isMobileMenuOpen},closeMobileMenu:t=>{t.isMobileMenuOpen=!1},toggleMute:t=>{t.isMuted=!t.isMuted,wr(t)},toggleTheme:t=>{t.theme=t.theme==="light"?"dark":"light",wr(t)},setFontSizeLevel:(t,e)=>{t.fontSizeLevel=e.payload,wr(t)},setMode:(t,e)=>{t.currentMode=e.payload,wr(t)},setUserName:(t,e)=>{t.userName=e.payload,wr(t)},setUser:(t,e)=>{var n;t.user=e.payload,(n=e.payload)!=null&&n.displayName&&(t.userName=e.payload.displayName),wr(t)},logout:t=>{t.user=null,t.userName="",wr(t)},resetAll:t=>{t.userStats={score:0,streak:0,lastPlayed:null},t.gameStats={math:{score:0,streak:0},spelling:{score:0,streak:0},missing_letters:{score:0,streak:0},comparison:{score:0,streak:0},sorting:{score:0,streak:0},alphabet:{score:0,streak:0},sight_words:{score:0,streak:0},sudoku:{score:0,streak:0},alphabet_hindi:{score:0,streak:0},alphabet_telugu:{score:0,streak:0},weeks_english:{score:0,streak:0},weeks_telugu:{score:0,streak:0},months_english:{score:0,streak:0},shapes:{score:0,streak:0},body_parts:{score:0,streak:0},sense_organs:{score:0,streak:0},weeks_hindi:{score:0,streak:0},numbers_english_spelling:{score:0,streak:0},numbers_hindi:{score:0,streak:0},numbers_telugu:{score:0,streak:0},months_telugu:{score:0,streak:0},months_hindi:{score:0,streak:0},place_values:{score:0,streak:0},master_test:{score:0,streak:0}},wr(t)},setStreak:(t,e)=>{const{gameId:n,streak:r}=e.payload;t.gameStats&&t.gameStats[n]&&(t.gameStats[n].streak=r),wr(t)}}}),{getAlphabets:aM,setAlphabets:lM,getSelectedAlphabet:uM,setSelectedAlphabet:cM,incrementScore:T7,resetStreak:S7,toggleMobileMenu:hM,closeMobileMenu:x7,toggleMute:fM,toggleTheme:dM,setFontSizeLevel:mg,setMode:I7,setUserName:pM,setUser:QE,logout:mM,resetAll:A7,setStreak:gM}=KI.actions,yM=KI.reducer;var YE=function(e){return{done:!0,value:e}},gg={};function vM(t){return Iv(t)?"channel":_I(t)?String(t):kn(t)?t.name:String(t)}function _M(t,e,n){var r,i,a,l=e;function c(h,p){if(l===gg)return YE(h);if(p&&!i)throw l=gg,p;r&&r(h);var m=p?t[i](p):t[l]();return l=m.nextState,a=m.effect,r=m.stateUpdater,i=m.errorState,l===gg?YE(h):a}return sy(c,function(h){return c(null,h)},n)}function wM(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a={done:!1,value:E2(t)},l=function(m){return{done:!1,value:VI.apply(void 0,[e].concat(r,[m]))}},c,h=function(m){return c=m};return _M({q1:function(){return{nextState:"q2",effect:a,stateUpdater:h}},q2:function(){return{nextState:"q1",effect:l(c)}}},"q1","takeEvery("+vM(t)+", "+e.name+")")}function XE(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return VI.apply(void 0,[wM,t,e].concat(r))}function*EM(){const t=yield NI(e=>e.alphabet.bigAlphabets.concat(e.alphabet.smallAlphabets));yield DI(lM(t))}function*TM(){const t=yield NI(r=>r.alphabet.bigAlphabets.concat(r.alphabet.smallAlphabets)),e=Math.floor(Math.random()*t.length),n=t[e];yield DI(cM(n))}function*SM(){yield XE(aM.type,EM),yield XE(uM.type,TM)}const GI=nM(),xM=bN({reducer:{alphabet:yM},middleware:t=>t({thunk:!1}).concat(GI)});GI.run(SM);var Wt=function(){return Wt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Wt.apply(this,arguments)};function hl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,a;r<i;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return t.concat(a||Array.prototype.slice.call(e))}var ut="-ms-",Ku="-moz-",Qe="-webkit-",QI="comm",tp="rule",Vv="decl",IM="@import",YI="@keyframes",AM="@layer",XI=Math.abs,Nv=String.fromCharCode,oy=Object.assign;function CM(t,e){return Bt(t,0)^45?(((e<<2^Bt(t,0))<<2^Bt(t,1))<<2^Bt(t,2))<<2^Bt(t,3):0}function JI(t){return t.trim()}function ki(t,e){return(t=e.exec(t))?t[0]:t}function Ne(t,e,n){return t.replace(e,n)}function kf(t,e,n){return t.indexOf(e,n)}function Bt(t,e){return t.charCodeAt(e)|0}function fl(t,e,n){return t.slice(e,n)}function Zr(t){return t.length}function ZI(t){return t.length}function Fu(t,e){return e.push(t),t}function kM(t,e){return t.map(e).join("")}function JE(t,e){return t.filter(function(n){return!ki(n,e)})}var np=1,dl=1,eA=0,sr=0,Rt=0,Cl="";function rp(t,e,n,r,i,a,l,c){return{value:t,root:e,parent:n,type:r,props:i,children:a,line:np,column:dl,length:l,return:"",siblings:c}}function ws(t,e){return oy(rp("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ba(t){for(;t.root;)t=ws(t.root,{children:[t]});Fu(t,t.siblings)}function PM(){return Rt}function RM(){return Rt=sr>0?Bt(Cl,--sr):0,dl--,Rt===10&&(dl=1,np--),Rt}function Ar(){return Rt=sr<eA?Bt(Cl,sr++):0,dl++,Rt===10&&(dl=1,np++),Rt}function Lo(){return Bt(Cl,sr)}function Pf(){return sr}function ip(t,e){return fl(Cl,t,e)}function ay(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bM(t){return np=dl=1,eA=Zr(Cl=t),sr=0,[]}function DM(t){return Cl="",t}function yg(t){return JI(ip(sr-1,ly(t===91?t+2:t===40?t+1:t)))}function VM(t){for(;(Rt=Lo())&&Rt<33;)Ar();return ay(t)>2||ay(Rt)>3?"":" "}function NM(t,e){for(;--e&&Ar()&&!(Rt<48||Rt>102||Rt>57&&Rt<65||Rt>70&&Rt<97););return ip(t,Pf()+(e<6&&Lo()==32&&Ar()==32))}function ly(t){for(;Ar();)switch(Rt){case t:return sr;case 34:case 39:t!==34&&t!==39&&ly(Rt);break;case 40:t===41&&ly(t);break;case 92:Ar();break}return sr}function MM(t,e){for(;Ar()&&t+Rt!==57;)if(t+Rt===84&&Lo()===47)break;return"/*"+ip(e,sr-1)+"*"+Nv(t===47?t:Ar())}function LM(t){for(;!ay(Lo());)Ar();return ip(t,sr)}function OM(t){return DM(Rf("",null,null,null,[""],t=bM(t),0,[0],t))}function Rf(t,e,n,r,i,a,l,c,h){for(var p=0,m=0,y=l,w=0,T=0,x=0,P=1,k=1,b=1,F=0,U="",$=i,H=a,X=r,C=U;k;)switch(x=F,F=Ar()){case 40:if(x!=108&&Bt(C,y-1)==58){kf(C+=Ne(yg(F),"&","&\f"),"&\f",XI(p?c[p-1]:0))!=-1&&(b=-1);break}case 34:case 39:case 91:C+=yg(F);break;case 9:case 10:case 13:case 32:C+=VM(x);break;case 92:C+=NM(Pf()-1,7);continue;case 47:switch(Lo()){case 42:case 47:Fu(FM(MM(Ar(),Pf()),e,n,h),h);break;default:C+="/"}break;case 123*P:c[p++]=Zr(C)*b;case 125*P:case 59:case 0:switch(F){case 0:case 125:k=0;case 59+m:b==-1&&(C=Ne(C,/\f/g,"")),T>0&&Zr(C)-y&&Fu(T>32?eT(C+";",r,n,y-1,h):eT(Ne(C," ","")+";",r,n,y-2,h),h);break;case 59:C+=";";default:if(Fu(X=ZE(C,e,n,p,m,i,c,U,$=[],H=[],y,a),a),F===123)if(m===0)Rf(C,e,X,X,$,a,y,c,H);else switch(w===99&&Bt(C,3)===110?100:w){case 100:case 108:case 109:case 115:Rf(t,X,X,r&&Fu(ZE(t,X,X,0,0,i,c,U,i,$=[],y,H),H),i,H,y,c,r?$:H);break;default:Rf(C,X,X,X,[""],H,0,c,H)}}p=m=T=0,P=b=1,U=C="",y=l;break;case 58:y=1+Zr(C),T=x;default:if(P<1){if(F==123)--P;else if(F==125&&P++==0&&RM()==125)continue}switch(C+=Nv(F),F*P){case 38:b=m>0?1:(C+="\f",-1);break;case 44:c[p++]=(Zr(C)-1)*b,b=1;break;case 64:Lo()===45&&(C+=yg(Ar())),w=Lo(),m=y=Zr(U=C+=LM(Pf())),F++;break;case 45:x===45&&Zr(C)==2&&(P=0)}}return a}function ZE(t,e,n,r,i,a,l,c,h,p,m,y){for(var w=i-1,T=i===0?a:[""],x=ZI(T),P=0,k=0,b=0;P<r;++P)for(var F=0,U=fl(t,w+1,w=XI(k=l[P])),$=t;F<x;++F)($=JI(k>0?T[F]+" "+U:Ne(U,/&\f/g,T[F])))&&(h[b++]=$);return rp(t,e,n,i===0?tp:c,h,p,m,y)}function FM(t,e,n,r){return rp(t,e,n,QI,Nv(PM()),fl(t,2,-2),0,r)}function eT(t,e,n,r,i){return rp(t,e,n,Vv,fl(t,0,r),fl(t,r+1,-1),r,i)}function tA(t,e,n){switch(CM(t,e)){case 5103:return Qe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Qe+t+t;case 4789:return Ku+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Qe+t+Ku+t+ut+t+t;case 5936:switch(Bt(t,e+11)){case 114:return Qe+t+ut+Ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Qe+t+ut+Ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Qe+t+ut+Ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Qe+t+ut+t+t;case 6165:return Qe+t+ut+"flex-"+t+t;case 5187:return Qe+t+Ne(t,/(\w+).+(:[^]+)/,Qe+"box-$1$2"+ut+"flex-$1$2")+t;case 5443:return Qe+t+ut+"flex-item-"+Ne(t,/flex-|-self/g,"")+(ki(t,/flex-|baseline/)?"":ut+"grid-row-"+Ne(t,/flex-|-self/g,""))+t;case 4675:return Qe+t+ut+"flex-line-pack"+Ne(t,/align-content|flex-|-self/g,"")+t;case 5548:return Qe+t+ut+Ne(t,"shrink","negative")+t;case 5292:return Qe+t+ut+Ne(t,"basis","preferred-size")+t;case 6060:return Qe+"box-"+Ne(t,"-grow","")+Qe+t+ut+Ne(t,"grow","positive")+t;case 4554:return Qe+Ne(t,/([^-])(transform)/g,"$1"+Qe+"$2")+t;case 6187:return Ne(Ne(Ne(t,/(zoom-|grab)/,Qe+"$1"),/(image-set)/,Qe+"$1"),t,"")+t;case 5495:case 3959:return Ne(t,/(image-set\([^]*)/,Qe+"$1$`$1");case 4968:return Ne(Ne(t,/(.+:)(flex-)?(.*)/,Qe+"box-pack:$3"+ut+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Qe+t+t;case 4200:if(!ki(t,/flex-|baseline/))return ut+"grid-column-align"+fl(t,e)+t;break;case 2592:case 3360:return ut+Ne(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,ki(r.props,/grid-\w+-end/)})?~kf(t+(n=n[e].value),"span",0)?t:ut+Ne(t,"-start","")+t+ut+"grid-row-span:"+(~kf(n,"span",0)?ki(n,/\d+/):+ki(n,/\d+/)-+ki(t,/\d+/))+";":ut+Ne(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return ki(r.props,/grid-\w+-start/)})?t:ut+Ne(Ne(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Ne(t,/(.+)-inline(.+)/,Qe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Zr(t)-1-e>6)switch(Bt(t,e+1)){case 109:if(Bt(t,e+4)!==45)break;case 102:return Ne(t,/(.+:)(.+)-([^]+)/,"$1"+Qe+"$2-$3$1"+Ku+(Bt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~kf(t,"stretch",0)?tA(Ne(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Ne(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,l,c,h,p){return ut+i+":"+a+p+(l?ut+i+"-span:"+(c?h:+h-+a)+p:"")+t});case 4949:if(Bt(t,e+6)===121)return Ne(t,":",":"+Qe)+t;break;case 6444:switch(Bt(t,Bt(t,14)===45?18:11)){case 120:return Ne(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Qe+(Bt(t,14)===45?"inline-":"")+"box$3$1"+Qe+"$2$3$1"+ut+"$2box$3")+t;case 100:return Ne(t,":",":"+ut)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ne(t,"scroll-","scroll-snap-")+t}return t}function od(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function jM(t,e,n,r){switch(t.type){case AM:if(t.children.length)break;case IM:case Vv:return t.return=t.return||t.value;case QI:return"";case YI:return t.return=t.value+"{"+od(t.children,r)+"}";case tp:if(!Zr(t.value=t.props.join(",")))return""}return Zr(n=od(t.children,r))?t.return=t.value+"{"+n+"}":""}function $M(t){var e=ZI(t);return function(n,r,i,a){for(var l="",c=0;c<e;c++)l+=t[c](n,r,i,a)||"";return l}}function UM(t){return function(e){e.root||(e=e.return)&&t(e)}}function zM(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Vv:t.return=tA(t.value,t.length,n);return;case YI:return od([ws(t,{value:Ne(t.value,"@","@"+Qe)})],r);case tp:if(t.length)return kM(n=t.props,function(i){switch(ki(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ba(ws(t,{props:[Ne(i,/:(read-\w+)/,":"+Ku+"$1")]})),Ba(ws(t,{props:[i]})),oy(t,{props:JE(n,r)});break;case"::placeholder":Ba(ws(t,{props:[Ne(i,/:(plac\w+)/,":"+Qe+"input-$1")]})),Ba(ws(t,{props:[Ne(i,/:(plac\w+)/,":"+Ku+"$1")]})),Ba(ws(t,{props:[Ne(i,/:(plac\w+)/,ut+"input-$1")]})),Ba(ws(t,{props:[i]})),oy(t,{props:JE(n,r)});break}return""})}}var BM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jn={},pl=typeof process<"u"&&jn!==void 0&&(jn.REACT_APP_SC_ATTR||jn.SC_ATTR)||"data-styled",nA="active",rA="data-styled-version",sp="6.1.14",Mv=`/*!sc*/
`,ad=typeof window<"u"&&"HTMLElement"in window,WM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&jn!==void 0&&jn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&jn.REACT_APP_SC_DISABLE_SPEEDY!==""?jn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&jn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&jn!==void 0&&jn.SC_DISABLE_SPEEDY!==void 0&&jn.SC_DISABLE_SPEEDY!==""&&jn.SC_DISABLE_SPEEDY!=="false"&&jn.SC_DISABLE_SPEEDY),HM={},op=Object.freeze([]),ml=Object.freeze({});function iA(t,e,n){return n===void 0&&(n=ml),t.theme!==n.theme&&t.theme||e||n.theme}var sA=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),qM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,KM=/(^-|-$)/g;function tT(t){return t.replace(qM,"-").replace(KM,"")}var GM=/(a)(d)/gi,lf=52,nT=function(t){return String.fromCharCode(t+(t>25?39:97))};function uy(t){var e,n="";for(e=Math.abs(t);e>lf;e=e/lf|0)n=nT(e%lf)+n;return(nT(e%lf)+n).replace(GM,"$1-$2")}var vg,oA=5381,Xa=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},aA=function(t){return Xa(oA,t)};function Lv(t){return uy(aA(t)>>>0)}function QM(t){return t.displayName||t.name||"Component"}function _g(t){return typeof t=="string"&&!0}var lA=typeof Symbol=="function"&&Symbol.for,uA=lA?Symbol.for("react.memo"):60115,YM=lA?Symbol.for("react.forward_ref"):60112,XM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},JM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},cA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ZM=((vg={})[YM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vg[uA]=cA,vg);function rT(t){return("type"in(e=t)&&e.type.$$typeof)===uA?cA:"$$typeof"in t?ZM[t.$$typeof]:XM;var e}var eL=Object.defineProperty,tL=Object.getOwnPropertyNames,iT=Object.getOwnPropertySymbols,nL=Object.getOwnPropertyDescriptor,rL=Object.getPrototypeOf,sT=Object.prototype;function hA(t,e,n){if(typeof e!="string"){if(sT){var r=rL(e);r&&r!==sT&&hA(t,r,n)}var i=tL(e);iT&&(i=i.concat(iT(e)));for(var a=rT(t),l=rT(e),c=0;c<i.length;++c){var h=i[c];if(!(h in JM||n&&n[h]||l&&h in l||a&&h in a)){var p=nL(e,h);try{eL(t,h,p)}catch{}}}}return t}function Uo(t){return typeof t=="function"}function Ov(t){return typeof t=="object"&&"styledComponentId"in t}function bo(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ld(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function oc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function cy(t,e,n){if(n===void 0&&(n=!1),!n&&!oc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=cy(t[r],e[r]);else if(oc(e))for(var r in e)t[r]=cy(t[r],e[r]);return t}function Fv(t,e){Object.defineProperty(t,"toString",{value:e})}function zo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var iL=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;e>=a;)if((a<<=1)<0)throw zo(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var c=this.indexOfGroup(e+1),h=(l=0,n.length);l<h;l++)this.tag.insertRule(c,n[l])&&(this.groupSizes[e]++,c++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),a=i+r,l=i;l<a;l++)n+="".concat(this.tag.getRule(l)).concat(Mv);return n},t}(),bf=new Map,ud=new Map,Df=1,uf=function(t){if(bf.has(t))return bf.get(t);for(;ud.has(Df);)Df++;var e=Df++;return bf.set(t,e),ud.set(e,t),e},sL=function(t,e){Df=e+1,bf.set(t,e),ud.set(e,t)},oL="style[".concat(pl,"][").concat(rA,'="').concat(sp,'"]'),aL=new RegExp("^".concat(pl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),lL=function(t,e,n){for(var r,i=n.split(","),a=0,l=i.length;a<l;a++)(r=i[a])&&t.registerName(e,r)},uL=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Mv),i=[],a=0,l=r.length;a<l;a++){var c=r[a].trim();if(c){var h=c.match(aL);if(h){var p=0|parseInt(h[1],10),m=h[2];p!==0&&(sL(m,p),lL(t,m,h[3]),t.getTag().insertRules(p,i)),i.length=0}else i.push(c)}}},oT=function(t){for(var e=document.querySelectorAll(oL),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(pl)!==nA&&(uL(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function cL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var fA=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(c){var h=Array.from(c.querySelectorAll("style[".concat(pl,"]")));return h[h.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(pl,nA),r.setAttribute(rA,sp);var l=cL();return l&&r.setAttribute("nonce",l),n.insertBefore(r,a),r},hL=function(){function t(e){this.element=fA(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var l=r[i];if(l.ownerNode===n)return l}throw zo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),fL=function(){function t(e){this.element=fA(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),dL=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),aT=ad,pL={isServer:!ad,useCSSOMInjection:!WM},cd=function(){function t(e,n,r){e===void 0&&(e=ml),n===void 0&&(n={});var i=this;this.options=Wt(Wt({},pL),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ad&&aT&&(aT=!1,oT(this)),Fv(this,function(){return function(a){for(var l=a.getTag(),c=l.length,h="",p=function(y){var w=function(b){return ud.get(b)}(y);if(w===void 0)return"continue";var T=a.names.get(w),x=l.getGroup(y);if(T===void 0||!T.size||x.length===0)return"continue";var P="".concat(pl,".g").concat(y,'[id="').concat(w,'"]'),k="";T!==void 0&&T.forEach(function(b){b.length>0&&(k+="".concat(b,","))}),h+="".concat(x).concat(P,'{content:"').concat(k,'"}').concat(Mv)},m=0;m<c;m++)p(m);return h}(i)})}return t.registerId=function(e){return uf(e)},t.prototype.rehydrate=function(){!this.server&&ad&&oT(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Wt(Wt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new dL(i):r?new hL(i):new fL(i)}(this.options),new iL(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(uf(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(uf(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(uf(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),mL=/&/g,gL=/^\s*\/\/.*$/gm;function dA(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=dA(n.children,e)),n})}function yL(t){var e,n,r,i=ml,a=i.options,l=a===void 0?ml:a,c=i.plugins,h=c===void 0?op:c,p=function(w,T,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):w},m=h.slice();m.push(function(w){w.type===tp&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(mL,n).replace(r,p))}),l.prefix&&m.push(zM),m.push(jM);var y=function(w,T,x,P){T===void 0&&(T=""),x===void 0&&(x=""),P===void 0&&(P="&"),e=P,n=T,r=new RegExp("\\".concat(n,"\\b"),"g");var k=w.replace(gL,""),b=OM(x||T?"".concat(x," ").concat(T," { ").concat(k," }"):k);l.namespace&&(b=dA(b,l.namespace));var F=[];return od(b,$M(m.concat(UM(function(U){return F.push(U)})))),F};return y.hash=h.length?h.reduce(function(w,T){return T.name||zo(15),Xa(w,T.name)},oA).toString():"",y}var vL=new cd,hy=yL(),pA=tr.createContext({shouldForwardProp:void 0,styleSheet:vL,stylis:hy});pA.Consumer;tr.createContext(void 0);function fy(){return N.useContext(pA)}var mA=function(){function t(e,n){var r=this;this.inject=function(i,a){a===void 0&&(a=hy);var l=r.name+a.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,a(r.rules,l,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Fv(this,function(){throw zo(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=hy),this.name+e.hash},t}(),_L=function(t){return t>="A"&&t<="Z"};function lT(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;_L(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var gA=function(t){return t==null||t===!1||t===""},yA=function(t){var e,n,r=[];for(var i in t){var a=t[i];t.hasOwnProperty(i)&&!gA(a)&&(Array.isArray(a)&&a.isCss||Uo(a)?r.push("".concat(lT(i),":"),a,";"):oc(a)?r.push.apply(r,hl(hl(["".concat(i," {")],yA(a),!1),["}"],!1)):r.push("".concat(lT(i),": ").concat((e=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in BM||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ps(t,e,n,r){if(gA(t))return[];if(Ov(t))return[".".concat(t.styledComponentId)];if(Uo(t)){if(!Uo(a=t)||a.prototype&&a.prototype.isReactComponent||!e)return[t];var i=t(e);return Ps(i,e,n,r)}var a;return t instanceof mA?n?(t.inject(n,r),[t.getName(r)]):[t]:oc(t)?yA(t):Array.isArray(t)?Array.prototype.concat.apply(op,t.map(function(l){return Ps(l,e,n,r)})):[t.toString()]}function vA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Uo(n)&&!Ov(n))return!1}return!0}var wL=aA(sp),EL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&vA(e),this.componentId=n,this.baseHash=Xa(wL,n),this.baseStyle=r,cd.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=bo(i,this.staticRulesId);else{var a=ld(Ps(this.rules,e,n,r)),l=uy(Xa(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,l)){var c=r(a,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,c)}i=bo(i,l),this.staticRulesId=l}else{for(var h=Xa(this.baseHash,r.hash),p="",m=0;m<this.rules.length;m++){var y=this.rules[m];if(typeof y=="string")p+=y;else if(y){var w=ld(Ps(y,e,n,r));h=Xa(h,w+m),p+=w}}if(p){var T=uy(h>>>0);n.hasNameForId(this.componentId,T)||n.insertRules(this.componentId,T,r(p,".".concat(T),void 0,this.componentId)),i=bo(i,T)}}return i},t}(),ac=tr.createContext(void 0);ac.Consumer;function TL(t){var e=tr.useContext(ac),n=N.useMemo(function(){return function(r,i){if(!r)throw zo(14);if(Uo(r)){var a=r(i);return a}if(Array.isArray(r)||typeof r!="object")throw zo(8);return i?Wt(Wt({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?tr.createElement(ac.Provider,{value:n},t.children):null}var wg={};function SL(t,e,n){var r=Ov(t),i=t,a=!_g(t),l=e.attrs,c=l===void 0?op:l,h=e.componentId,p=h===void 0?function($,H){var X=typeof $!="string"?"sc":tT($);wg[X]=(wg[X]||0)+1;var C="".concat(X,"-").concat(Lv(sp+X+wg[X]));return H?"".concat(H,"-").concat(C):C}(e.displayName,e.parentComponentId):h,m=e.displayName,y=m===void 0?function($){return _g($)?"styled.".concat($):"Styled(".concat(QM($),")")}(t):m,w=e.displayName&&e.componentId?"".concat(tT(e.displayName),"-").concat(e.componentId):e.componentId||p,T=r&&i.attrs?i.attrs.concat(c).filter(Boolean):c,x=e.shouldForwardProp;if(r&&i.shouldForwardProp){var P=i.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;x=function($,H){return P($,H)&&k($,H)}}else x=P}var b=new EL(n,w,r?i.componentStyle:void 0);function F($,H){return function(X,C,I){var R=X.attrs,D=X.componentStyle,O=X.defaultProps,B=X.foldedComponentIds,M=X.styledComponentId,Re=X.target,Ge=tr.useContext(ac),Xe=fy(),Je=X.shouldForwardProp||Xe.shouldForwardProp,re=iA(C,Ge,O)||ml,ce=function(De,be,$e){for(var Me,Ue=Wt(Wt({},be),{className:void 0,theme:$e}),Nt=0;Nt<De.length;Nt+=1){var ur=Uo(Me=De[Nt])?Me(Ue):Me;for(var _n in ur)Ue[_n]=_n==="className"?bo(Ue[_n],ur[_n]):_n==="style"?Wt(Wt({},Ue[_n]),ur[_n]):ur[_n]}return be.className&&(Ue.className=bo(Ue.className,be.className)),Ue}(R,C,re),ue=ce.as||Re,W={};for(var J in ce)ce[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&ce.theme===re||(J==="forwardedAs"?W.as=ce.forwardedAs:Je&&!Je(J,ue)||(W[J]=ce[J]));var Ae=function(De,be){var $e=fy(),Me=De.generateAndInjectStyles(be,$e.styleSheet,$e.stylis);return Me}(D,ce),Ie=bo(B,M);return Ae&&(Ie+=" "+Ae),ce.className&&(Ie+=" "+ce.className),W[_g(ue)&&!sA.has(ue)?"class":"className"]=Ie,I&&(W.ref=I),N.createElement(ue,W)}(U,$,H)}F.displayName=y;var U=tr.forwardRef(F);return U.attrs=T,U.componentStyle=b,U.displayName=y,U.shouldForwardProp=x,U.foldedComponentIds=r?bo(i.foldedComponentIds,i.styledComponentId):"",U.styledComponentId=w,U.target=r?i.target:t,Object.defineProperty(U,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=r?function(H){for(var X=[],C=1;C<arguments.length;C++)X[C-1]=arguments[C];for(var I=0,R=X;I<R.length;I++)cy(H,R[I],!0);return H}({},i.defaultProps,$):$}}),Fv(U,function(){return".".concat(U.styledComponentId)}),a&&hA(U,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),U}function uT(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var cT=function(t){return Object.assign(t,{isCss:!0})};function kl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Uo(t)||oc(t))return cT(Ps(uT(op,hl([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Ps(r):cT(Ps(uT(r,e)))}function dy(t,e,n){if(n===void 0&&(n=ml),!e)throw zo(1,e);var r=function(i){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return t(e,n,kl.apply(void 0,hl([i],a,!1)))};return r.attrs=function(i){return dy(t,e,Wt(Wt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return dy(t,e,Wt(Wt({},n),i))},r}var _A=function(t){return dy(SL,t)},ie=_A;sA.forEach(function(t){ie[t]=_A(t)});var xL=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=vA(e),cd.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var a=i(ld(Ps(this.rules,n,r,i)),""),l=this.componentId+e;r.insertRules(l,l,a)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&cd.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function IL(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=kl.apply(void 0,hl([t],e,!1)),i="sc-global-".concat(Lv(JSON.stringify(r))),a=new xL(r,i),l=function(h){var p=fy(),m=tr.useContext(ac),y=tr.useRef(p.styleSheet.allocateGSInstance(i)).current;return p.styleSheet.server&&c(y,h,p.styleSheet,m,p.stylis),tr.useLayoutEffect(function(){if(!p.styleSheet.server)return c(y,h,p.styleSheet,m,p.stylis),function(){return a.removeStyles(y,p.styleSheet)}},[y,h,p.styleSheet,m,p.stylis]),null};function c(h,p,m,y,w){if(a.isStatic)a.renderStyles(h,HM,m,w);else{var T=Wt(Wt({},p),{theme:iA(p,y,l.defaultProps)});a.renderStyles(h,T,m,w)}}return tr.memo(l)}function AL(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=ld(kl.apply(void 0,hl([t],e,!1))),i=Lv(r);return new mA(i,r)}const CL=ie.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background-color: ${t=>t.theme.colors.surface};
  color: ${t=>t.theme.colors.textPrimary};
  box-shadow: 0 2px 10px ${t=>t.theme.colors.shadow};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 12px 20px;
  }
`,kL=ie.div`
  font-family: ${t=>t.theme.fonts.primary};
  font-size: 1.8rem;
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
  color: ${t=>t.theme.colors.primary};
  display: flex;
  align-items: center;
  gap: 10px;
  letter-spacing: -1px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    color: ${t=>t.theme.colors.secondary};
  }
`,PL=ie.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,RL=ie.div`
  background: ${t=>t.theme.colors.primary};
  padding: 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px ${t=>t.theme.colors.primary}40;
`,bL=ie.span`
  font-size: 1.8rem;
  letter-spacing: -1px;
`,DL=ie.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-family: ${t=>t.theme.fonts.secondary};
  font-weight: 600;
  color: ${t=>t.theme.colors.textSecondary};

  @media (max-width: 768px) {
    font-size: 0.9rem;
    gap: 8px;
  }
`,VL=ie.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px;
  color: ${t=>t.theme.colors.primary};
  display: none;

  @media (max-width: 768px) {
    display: ${t=>t.$isVisible?"block":"none"};
  }
`,NL=ie.div`
  position: relative;
  display: flex;
  align-items: center;
`,ML=ie.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: ${t=>t.theme.colors.primary}20;
  border-radius: 12px;
  color: ${t=>t.theme.colors.primary};
  transition: all 0.2s ease;

  &:hover {
    background: ${t=>t.theme.colors.primary}30;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,LL=ie.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  background: ${t=>t.theme.colors.surface};
  border-radius: 16px;
  box-shadow: 0 10px 25px ${t=>t.theme.colors.shadow};
  padding: 8px;
  min-width: 160px;
  z-index: 1100;
  border: 1px solid ${t=>t.theme.colors.primary}10;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Jn=ie.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${t=>t.theme.colors.textPrimary};
  transition: all 0.2s ease;

  &:hover {
    background: ${t=>t.theme.colors.surfaceVariant};
    color: ${t=>t.theme.colors.primary};
  }

  svg {
    color: ${t=>t.theme.colors.primary};
  }
`,OL=ie.div`
  margin-left: auto;
  opacity: 0.5;
  display: flex;
  align-items: center;
`,FL=ie(Jn)`
  border-bottom: 1px solid ${t=>t.theme.colors.primary}10;
  margin-bottom: 5px;
`,jv=N.createContext({});function $v(t){const e=N.useRef(null);return e.current===null&&(e.current=t()),e.current}const jL=typeof window<"u",wA=jL?N.useLayoutEffect:N.useEffect,ap=N.createContext(null);function Uv(t,e){t.indexOf(e)===-1&&t.push(e)}function hd(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}function C7([...t],e,n){const r=e<0?t.length+e:e;if(r>=0&&r<t.length){const i=n<0?t.length+n:n,[a]=t.splice(e,1);t.splice(i,0,a)}return t}const ai=(t,e,n)=>n>e?e:n<t?t:n;let fd=()=>{};const $s={},EA=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function TA(t){return typeof t=="object"&&t!==null}const SA=t=>/^0[^.\s]+$/u.test(t);function xA(t){let e;return()=>(e===void 0&&(e=t()),e)}const rr=t=>t,$L=(t,e)=>n=>e(t(n)),Ic=(...t)=>t.reduce($L),lc=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r};class zv{constructor(){this.subscriptions=[]}add(e){return Uv(this.subscriptions,e),()=>hd(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let a=0;a<i;a++){const l=this.subscriptions[a];l&&l(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Un=t=>t*1e3,nr=t=>t/1e3;function IA(t,e){return e?t*(1e3/e):0}const AA=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,UL=1e-7,zL=12;function BL(t,e,n,r,i){let a,l,c=0;do l=e+(n-e)/2,a=AA(l,r,i)-t,a>0?n=l:e=l;while(Math.abs(a)>UL&&++c<zL);return l}function Ac(t,e,n,r){if(t===e&&n===r)return rr;const i=a=>BL(a,0,1,t,n);return a=>a===0||a===1?a:AA(i(a),e,r)}const CA=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,kA=t=>e=>1-t(1-e),PA=Ac(.33,1.53,.69,.99),Bv=kA(PA),RA=CA(Bv),bA=t=>t>=1?1:(t*=2)<1?.5*Bv(t):.5*(2-Math.pow(2,-10*(t-1))),Wv=t=>1-Math.sin(Math.acos(t)),DA=kA(Wv),VA=CA(Wv),WL=Ac(.42,0,1,1),HL=Ac(0,0,.58,1),NA=Ac(.42,0,.58,1),qL=t=>Array.isArray(t)&&typeof t[0]!="number",MA=t=>Array.isArray(t)&&typeof t[0]=="number",hT={linear:rr,easeIn:WL,easeInOut:NA,easeOut:HL,circIn:Wv,circInOut:VA,circOut:DA,backIn:Bv,backInOut:RA,backOut:PA,anticipate:bA},KL=t=>typeof t=="string",fT=t=>{if(MA(t)){fd(t.length===4);const[e,n,r,i]=t;return Ac(e,n,r,i)}else if(KL(t))return fd(hT[t]!==void 0),hT[t];return t},cf=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function GL(t,e){let n=new Set,r=new Set,i=!1,a=!1;const l=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function h(m){l.has(m)&&(p.schedule(m),t()),m(c)}const p={schedule:(m,y=!1,w=!1)=>{const x=w&&i?n:r;return y&&l.add(m),x.add(m),m},cancel:m=>{r.delete(m),l.delete(m)},process:m=>{if(c=m,i){a=!0;return}i=!0;const y=n;n=r,r=y,n.forEach(h),n.clear(),i=!1,a&&(a=!1,p.process(m))}};return p}const QL=40;function LA(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,l=cf.reduce((U,$)=>(U[$]=GL(a),U),{}),{setup:c,read:h,resolveKeyframes:p,preUpdate:m,update:y,preRender:w,render:T,postRender:x}=l,P=()=>{const U=$s.useManualTiming,$=U?i.timestamp:performance.now();n=!1,U||(i.delta=r?1e3/60:Math.max(Math.min($-i.timestamp,QL),1)),i.timestamp=$,i.isProcessing=!0,c.process(i),h.process(i),p.process(i),m.process(i),y.process(i),w.process(i),T.process(i),x.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(P))},k=()=>{n=!0,r=!0,i.isProcessing||t(P)};return{schedule:cf.reduce((U,$)=>{const H=l[$];return U[$]=(X,C=!1,I=!1)=>(n||k(),H.schedule(X,C,I)),U},{}),cancel:U=>{for(let $=0;$<cf.length;$++)l[cf[$]].cancel(U)},state:i,steps:l}}const{schedule:rt,cancel:Us,state:Jt,steps:Eg}=LA(typeof requestAnimationFrame<"u"?requestAnimationFrame:rr,!0);let Vf;function YL(){Vf=void 0}const yn={now:()=>(Vf===void 0&&yn.set(Jt.isProcessing||$s.useManualTiming?Jt.timestamp:performance.now()),Vf),set:t=>{Vf=t,queueMicrotask(YL)}},OA=t=>e=>typeof e=="string"&&e.startsWith(t),FA=OA("--"),XL=OA("var(--"),Hv=t=>XL(t)?JL.test(t.split("/*")[0].trim()):!1,JL=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function dT(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Pl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},uc={...Pl,transform:t=>ai(0,1,t)},hf={...Pl,default:1},Gu=t=>Math.round(t*1e5)/1e5,qv=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ZL(t){return t==null}const eO=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Kv=(t,e)=>n=>!!(typeof n=="string"&&eO.test(n)&&n.startsWith(t)||e&&!ZL(n)&&Object.prototype.hasOwnProperty.call(n,e)),jA=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,a,l,c]=r.match(qv);return{[t]:parseFloat(i),[e]:parseFloat(a),[n]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},tO=t=>ai(0,255,t),Tg={...Pl,transform:t=>Math.round(tO(t))},Do={test:Kv("rgb","red"),parse:jA("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Tg.transform(t)+", "+Tg.transform(e)+", "+Tg.transform(n)+", "+Gu(uc.transform(r))+")"};function nO(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const py={test:Kv("#"),parse:nO,transform:Do.transform},Cc=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Es=Cc("deg"),ni=Cc("%"),ge=Cc("px"),rO=Cc("vh"),iO=Cc("vw"),pT={...ni,parse:t=>ni.parse(t)/100,transform:t=>ni.transform(t*100)},Ja={test:Kv("hsl","hue"),parse:jA("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+ni.transform(Gu(e))+", "+ni.transform(Gu(n))+", "+Gu(uc.transform(r))+")"},Pt={test:t=>Do.test(t)||py.test(t)||Ja.test(t),parse:t=>Do.test(t)?Do.parse(t):Ja.test(t)?Ja.parse(t):py.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Do.transform(t):Ja.transform(t),getAnimatableNone:t=>{const e=Pt.parse(t);return e.alpha=0,Pt.transform(e)}},sO=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function oO(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(qv))==null?void 0:e.length)||0)+(((n=t.match(sO))==null?void 0:n.length)||0)>0}const $A="number",UA="color",aO="var",lO="var(",mT="${}",uO=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function gl(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const c=e.replace(uO,h=>(Pt.test(h)?(r.color.push(a),i.push(UA),n.push(Pt.parse(h))):h.startsWith(lO)?(r.var.push(a),i.push(aO),n.push(h)):(r.number.push(a),i.push($A),n.push(parseFloat(h))),++a,mT)).split(mT);return{values:n,split:c,indexes:r,types:i}}function cO(t){return gl(t).values}function zA({split:t,types:e}){const n=t.length;return r=>{let i="";for(let a=0;a<n;a++)if(i+=t[a],r[a]!==void 0){const l=e[a];l===$A?i+=Gu(r[a]):l===UA?i+=Pt.transform(r[a]):i+=r[a]}return i}}function hO(t){return zA(gl(t))}const fO=t=>typeof t=="number"?0:Pt.test(t)?Pt.getAnimatableNone(t):t,dO=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:fO(t);function pO(t){const e=gl(t);return zA(e)(e.values.map((r,i)=>dO(r,e.split[i])))}const Cr={test:oO,parse:cO,createTransformer:hO,getAnimatableNone:pO};function Sg(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function mO({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,a=0,l=0;if(!e)i=a=l=n;else{const c=n<.5?n*(1+e):n+e-n*e,h=2*n-c;i=Sg(h,c,t+1/3),a=Sg(h,c,t),l=Sg(h,c,t-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(l*255),alpha:r}}function dd(t,e){return n=>n>0?e:t}const ht=(t,e,n)=>t+(e-t)*n,xg=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},gO=[py,Do,Ja],yO=t=>gO.find(e=>e.test(t));function gT(t){const e=yO(t);if(!e)return!1;let n=e.parse(t);return e===Ja&&(n=mO(n)),n}const yT=(t,e)=>{const n=gT(t),r=gT(e);if(!n||!r)return dd(t,e);const i={...n};return a=>(i.red=xg(n.red,r.red,a),i.green=xg(n.green,r.green,a),i.blue=xg(n.blue,r.blue,a),i.alpha=ht(n.alpha,r.alpha,a),Do.transform(i))},my=new Set(["none","hidden"]);function vO(t,e){return my.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function _O(t,e){return n=>ht(t,e,n)}function Gv(t){return typeof t=="number"?_O:typeof t=="string"?Hv(t)?dd:Pt.test(t)?yT:TO:Array.isArray(t)?BA:typeof t=="object"?Pt.test(t)?yT:wO:dd}function BA(t,e){const n=[...t],r=n.length,i=t.map((a,l)=>Gv(a)(a,e[l]));return a=>{for(let l=0;l<r;l++)n[l]=i[l](a);return n}}function wO(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=Gv(t[i])(t[i],e[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function EO(t,e){const n=[],r={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const a=e.types[i],l=t.indexes[a][r[a]],c=t.values[l]??0;n[i]=c,r[a]++}return n}const TO=(t,e)=>{const n=Cr.createTransformer(e),r=gl(t),i=gl(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?my.has(t)&&!i.values.length||my.has(e)&&!r.values.length?vO(t,e):Ic(BA(EO(r,i),i.values),n):dd(t,e)};function WA(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ht(t,e,n):Gv(t)(t,e)}const SO=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>rt.update(e,n),stop:()=>Us(e),now:()=>Jt.isProcessing?Jt.timestamp:yn.now()}},HA=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let a=0;a<i;a++)r+=Math.round(t(a/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},pd=2e4;function Qv(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<pd;)e+=n,r=t.next(e);return e>=pd?1/0:e}function xO(t,e=100,n){const r=n({...t,keyframes:[0,e]}),i=Math.min(Qv(r),pd);return{type:"keyframes",ease:a=>r.next(i*a).value/e,duration:nr(i)}}const wt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function gy(t,e){return t*Math.sqrt(1-e*e)}const IO=12;function AO(t,e,n){let r=n;for(let i=1;i<IO;i++)r=r-t(r)/e(r);return r}const vT=.001;function CO({duration:t=wt.duration,bounce:e=wt.bounce,velocity:n=wt.velocity,mass:r=wt.mass}){let i,a,l=1-e;l=ai(wt.minDamping,wt.maxDamping,l),t=ai(wt.minDuration,wt.maxDuration,nr(t)),l<1?(i=p=>{const m=p*l,y=m*t,w=m-n,T=gy(p,l),x=Math.exp(-y);return vT-w/T*x},a=p=>{const y=p*l*t,w=y*n+n,T=Math.pow(l,2)*Math.pow(p,2)*t,x=Math.exp(-y),P=gy(Math.pow(p,2),l);return(-i(p)+vT>0?-1:1)*((w-T)*x)/P}):(i=p=>{const m=Math.exp(-p*t),y=(p-n)*t+1;return-.001+m*y},a=p=>{const m=Math.exp(-p*t),y=(n-p)*(t*t);return m*y});const c=5/t,h=AO(i,a,c);if(t=Un(t),isNaN(h))return{stiffness:wt.stiffness,damping:wt.damping,duration:t};{const p=Math.pow(h,2)*r;return{stiffness:p,damping:l*2*Math.sqrt(r*p),duration:t}}}const kO=["duration","bounce"],PO=["stiffness","damping","mass"];function _T(t,e){return e.some(n=>t[n]!==void 0)}function RO(t){let e={velocity:wt.velocity,stiffness:wt.stiffness,damping:wt.damping,mass:wt.mass,isResolvedFromDuration:!1,...t};if(!_T(t,PO)&&_T(t,kO))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*ai(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:wt.mass,stiffness:i,damping:a}}else{const n=CO({...t,velocity:0});e={...e,...n,mass:wt.mass},e.isResolvedFromDuration=!0}return e}function md(t=wt.visualDuration,e=wt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],l=n.keyframes[n.keyframes.length-1],c={done:!1,value:a},{stiffness:h,damping:p,mass:m,duration:y,velocity:w,isResolvedFromDuration:T}=RO({...n,velocity:-nr(n.velocity||0)}),x=w||0,P=p/(2*Math.sqrt(h*m)),k=l-a,b=nr(Math.sqrt(h/m)),F=Math.abs(k)<5;r||(r=F?wt.restSpeed.granular:wt.restSpeed.default),i||(i=F?wt.restDelta.granular:wt.restDelta.default);let U,$,H,X,C,I;if(P<1)H=gy(b,P),X=(x+P*b*k)/H,U=D=>{const O=Math.exp(-P*b*D);return l-O*(X*Math.sin(H*D)+k*Math.cos(H*D))},C=P*b*X+k*H,I=P*b*k-X*H,$=D=>Math.exp(-P*b*D)*(C*Math.sin(H*D)+I*Math.cos(H*D));else if(P===1){U=O=>l-Math.exp(-b*O)*(k+(x+b*k)*O);const D=x+b*k;$=O=>Math.exp(-b*O)*(b*D*O-x)}else{const D=b*Math.sqrt(P*P-1);U=Re=>{const Ge=Math.exp(-P*b*Re),Xe=Math.min(D*Re,300);return l-Ge*((x+P*b*k)*Math.sinh(Xe)+D*k*Math.cosh(Xe))/D};const O=(x+P*b*k)/D,B=P*b*O-k*D,M=P*b*k-O*D;$=Re=>{const Ge=Math.exp(-P*b*Re),Xe=Math.min(D*Re,300);return Ge*(B*Math.sinh(Xe)+M*Math.cosh(Xe))}}const R={calculatedDuration:T&&y||null,velocity:D=>Un($(D)),next:D=>{if(!T&&P<1){const B=Math.exp(-P*b*D),M=Math.sin(H*D),Re=Math.cos(H*D),Ge=l-B*(X*M+k*Re),Xe=Un(B*(C*M+I*Re));return c.done=Math.abs(Xe)<=r&&Math.abs(l-Ge)<=i,c.value=c.done?l:Ge,c}const O=U(D);if(T)c.done=D>=y;else{const B=Un($(D));c.done=Math.abs(B)<=r&&Math.abs(l-O)<=i}return c.value=c.done?l:O,c},toString:()=>{const D=Math.min(Qv(R),pd),O=HA(B=>R.next(D*B).value,D,30);return D+"ms "+O},toTransition:()=>{}};return R}md.applyToOptions=t=>{const e=xO(t,100,md);return t.ease=e.ease,t.duration=Un(e.duration),t.type="keyframes",t};const bO=5;function qA(t,e,n){const r=Math.max(e-bO,0);return IA(n-t(r),e-r)}function yy({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:l,min:c,max:h,restDelta:p=.5,restSpeed:m}){const y=t[0],w={done:!1,value:y},T=I=>c!==void 0&&I<c||h!==void 0&&I>h,x=I=>c===void 0?h:h===void 0||Math.abs(c-I)<Math.abs(h-I)?c:h;let P=n*e;const k=y+P,b=l===void 0?k:l(k);b!==k&&(P=b-y);const F=I=>-P*Math.exp(-I/r),U=I=>b+F(I),$=I=>{const R=F(I),D=U(I);w.done=Math.abs(R)<=p,w.value=w.done?b:D};let H,X;const C=I=>{T(w.value)&&(H=I,X=md({keyframes:[w.value,x(w.value)],velocity:qA(U,I,w.value),damping:i,stiffness:a,restDelta:p,restSpeed:m}))};return C(0),{calculatedDuration:null,next:I=>{let R=!1;return!X&&H===void 0&&(R=!0,$(I),C(I)),H!==void 0&&I>=H?X.next(I-H):(!R&&$(I),w)}}}function DO(t,e,n){const r=[],i=n||$s.mix||WA,a=t.length-1;for(let l=0;l<a;l++){let c=i(t[l],t[l+1]);if(e){const h=Array.isArray(e)?e[l]||rr:e;c=Ic(h,c)}r.push(c)}return r}function VO(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const a=t.length;if(fd(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const l=t[0]===t[1];t[0]>t[a-1]&&(t=[...t].reverse(),e=[...e].reverse());const c=DO(e,r,i),h=c.length,p=m=>{if(l&&m<t[0])return e[0];let y=0;if(h>1)for(;y<t.length-2&&!(m<t[y+1]);y++);const w=lc(t[y],t[y+1],m);return c[y](w)};return n?m=>p(ai(t[0],t[a-1],m)):p}function NO(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=lc(0,e,r);t.push(ht(n,1,i))}}function MO(t){const e=[0];return NO(e,t.length-1),e}function LO(t,e){return t.map(n=>n*e)}function OO(t,e){return t.map(()=>e||NA).splice(0,t.length-1)}function Qu({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=qL(r)?r.map(fT):fT(r),a={done:!1,value:e[0]},l=LO(n&&n.length===e.length?n:MO(e),t),c=VO(l,e,{ease:Array.isArray(i)?i:OO(e,i)});return{calculatedDuration:t,next:h=>(a.value=c(h),a.done=h>=t,a)}}const FO=t=>t!==null;function lp(t,{repeat:e,repeatType:n="loop"},r,i=1){const a=t.filter(FO),c=i<0||e&&n!=="loop"&&e%2===1?0:a.length-1;return!c||r===void 0?a[c]:r}const jO={decay:yy,inertia:yy,tween:Qu,keyframes:Qu,spring:md};function KA(t){typeof t.type=="string"&&(t.type=jO[t.type])}class Yv{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const $O=t=>t/100;class gd extends Yv{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==yn.now()&&this.tick(yn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;KA(e);const{type:n=Qu,repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:l=0}=e;let{keyframes:c}=e;const h=n||Qu;h!==Qu&&typeof c[0]!="number"&&(this.mixKeyframes=Ic($O,WA(c[0],c[1])),c=[0,100]);const p=h({...e,keyframes:c});a==="mirror"&&(this.mirroredGenerator=h({...e,keyframes:[...c].reverse(),velocity:-l})),p.calculatedDuration===null&&(p.calculatedDuration=Qv(p));const{calculatedDuration:m}=p;this.calculatedDuration=m,this.resolvedDuration=m+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=p}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:r,totalDuration:i,mixKeyframes:a,mirroredGenerator:l,resolvedDuration:c,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:p=0,keyframes:m,repeat:y,repeatType:w,repeatDelay:T,type:x,onUpdate:P,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const b=this.currentTime-p*(this.playbackSpeed>=0?1:-1),F=this.playbackSpeed>=0?b<0:b>i;this.currentTime=Math.max(b,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let U=this.currentTime,$=r;if(y){const I=Math.min(this.currentTime,i)/c;let R=Math.floor(I),D=I%1;!D&&I>=1&&(D=1),D===1&&R--,R=Math.min(R,y+1),!!(R%2)&&(w==="reverse"?(D=1-D,T&&(D-=T/c)):w==="mirror"&&($=l)),U=ai(0,1,D)*c}let H;F?(this.delayState.value=m[0],H=this.delayState):H=$.next(U),a&&!F&&(H.value=a(H.value));let{done:X}=H;!F&&h!==null&&(X=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&X);return C&&x!==yy&&(H.value=lp(m,this.options,k,this.speed)),P&&P(H.value),C&&this.finish(),H}then(e,n){return this.finished.then(e,n)}get duration(){return nr(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+nr(e)}get time(){return nr(this.currentTime)}set time(e){e=Un(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return qA(r=>this.generator.next(r).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(yn.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=nr(this.currentTime))}play(){var i,a;if(this.isStopped)return;const{driver:e=SO,startTime:n}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),(a=(i=this.options).onPlay)==null||a.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(yn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function UO(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Vo=t=>t*180/Math.PI,vy=t=>{const e=Vo(Math.atan2(t[1],t[0]));return _y(e)},zO={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:vy,rotateZ:vy,skewX:t=>Vo(Math.atan(t[1])),skewY:t=>Vo(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},_y=t=>(t=t%360,t<0&&(t+=360),t),wT=vy,ET=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),TT=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),BO={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ET,scaleY:TT,scale:t=>(ET(t)+TT(t))/2,rotateX:t=>_y(Vo(Math.atan2(t[6],t[5]))),rotateY:t=>_y(Vo(Math.atan2(-t[2],t[0]))),rotateZ:wT,rotate:wT,skewX:t=>Vo(Math.atan(t[4])),skewY:t=>Vo(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function wy(t){return t.includes("scale")?1:0}function Ey(t,e){if(!t||t==="none")return wy(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=BO,i=n;else{const c=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=zO,i=c}if(!i)return wy(e);const a=r[e],l=i[1].split(",").map(HO);return typeof a=="function"?a(l):l[a]}const WO=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return Ey(n,e)};function HO(t){return parseFloat(t.trim())}const Rl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],bl=new Set(Rl),ST=t=>t===Pl||t===ge,qO=new Set(["x","y","z"]),KO=Rl.filter(t=>!qO.has(t));function GO(t){const e=[];return KO.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Cs={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:r})=>{const i=t.max-t.min;return r==="border-box"?i:i-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:r})=>{const i=t.max-t.min;return r==="border-box"?i:i-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Ey(e,"x"),y:(t,{transform:e})=>Ey(e,"y")};Cs.translateX=Cs.x;Cs.translateY=Cs.y;const Oo=new Set;let Ty=!1,Sy=!1,xy=!1;function GA(){if(Sy){const t=Array.from(Oo).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=GO(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,l])=>{var c;(c=r.getValue(a))==null||c.set(l)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Sy=!1,Ty=!1,Oo.forEach(t=>t.complete(xy)),Oo.clear()}function QA(){Oo.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Sy=!0)})}function QO(){xy=!0,QA(),GA(),xy=!1}class Xv{constructor(e,n,r,i,a,l=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=l}scheduleResolve(){this.state="scheduled",this.isAsync?(Oo.add(this),Ty||(Ty=!0,rt.read(QA),rt.resolveKeyframes(GA))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;if(e[0]===null){const a=i==null?void 0:i.get(),l=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&n){const c=r.readValue(n,l);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=l),i&&a===void 0&&i.set(e[0])}UO(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Oo.delete(this)}cancel(){this.state==="scheduled"&&(Oo.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const YO=t=>t.startsWith("--");function YA(t,e,n){YO(e)?t.style.setProperty(e,n):t.style[e]=n}const XO={};function XA(t,e){const n=xA(t);return()=>XO[e]??n()}const JO=XA(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),JA=XA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ju=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,xT={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ju([0,.65,.55,1]),circOut:ju([.55,0,1,.45]),backIn:ju([.31,.01,.66,-.59]),backOut:ju([.33,1.53,.69,.99])};function ZA(t,e){if(t)return typeof t=="function"?JA()?HA(t,e):"ease-out":MA(t)?ju(t):Array.isArray(t)?t.map(n=>ZA(n,e)||xT.easeOut):xT[t]}function ZO(t,e,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:l="loop",ease:c="easeOut",times:h}={},p=void 0){const m={[e]:n};h&&(m.offset=h);const y=ZA(c,i);Array.isArray(y)&&(m.easing=y);const w={delay:r,duration:i,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:a+1,direction:l==="reverse"?"alternate":"normal"};return p&&(w.pseudoElement=p),t.animate(m,w)}function eC(t){return typeof t=="function"&&"applyToOptions"in t}function eF({type:t,...e}){return eC(t)&&JA()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class tC extends Yv{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:r,keyframes:i,pseudoElement:a,allowFlatten:l=!1,finalKeyframe:c,onComplete:h}=e;this.isPseudoElement=!!a,this.allowFlatten=l,this.options=e,fd(typeof e.type!="string");const p=eF(e);this.animation=ZO(n,r,i,p,a),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const m=lp(i,this.options,c,this.speed);this.updateMotionValue&&this.updateMotionValue(m),YA(n,r,m),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const e=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return nr(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+nr(e)}get time(){return nr(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Un(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:r,observe:i}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&JO()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),rr):i(this)}}const nC={anticipate:bA,backInOut:RA,circInOut:VA};function tF(t){return t in nC}function nF(t){typeof t.ease=="string"&&tF(t.ease)&&(t.ease=nC[t.ease])}const Ig=10;class rF extends tC{constructor(e){nF(e),KA(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:r,onComplete:i,element:a,...l}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const c=new gd({...l,autoplay:!1}),h=Math.max(Ig,yn.now()-this.startTime),p=ai(0,Ig,h-Ig),m=c.sample(h).value,{name:y}=this.options;a&&y&&YA(a,y,m),n.setWithVelocity(c.sample(Math.max(0,h-p)).value,m,p),c.stop()}}const IT=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Cr.test(t)||t==="0")&&!t.startsWith("url("));function iF(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function sF(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const a=t[t.length-1],l=IT(i,e),c=IT(a,e);return!l||!c?!1:iF(t)||(n==="spring"||eC(n))&&r}function Iy(t){t.duration=0,t.type="keyframes"}const rC=new Set(["opacity","clipPath","filter","transform"]),oF=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function aF(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&oF.test(t[e]))return!0;return!1}const lF=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),uF=xA(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function cF(t){var y;const{motionValue:e,name:n,repeatDelay:r,repeatType:i,damping:a,type:l,keyframes:c}=t;if(!(((y=e==null?void 0:e.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=e.owner.getProps();return uF()&&n&&(rC.has(n)||lF.has(n)&&aF(c))&&(n!=="transform"||!m)&&!p&&!r&&i!=="mirror"&&a!==0&&l!=="inertia"}const hF=40;class fF extends Yv{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:l="loop",keyframes:c,name:h,motionValue:p,element:m,...y}){var x;super(),this.stop=()=>{var P,k;this._animation&&(this._animation.stop(),(P=this.stopTimeline)==null||P.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=yn.now();const w={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:l,name:h,motionValue:p,element:m,...y},T=(m==null?void 0:m.KeyframeResolver)||Xv;this.keyframeResolver=new T(c,(P,k,b)=>this.onKeyframesResolved(P,k,w,!b),h,p,m),(x=this.keyframeResolver)==null||x.scheduleResolve()}onKeyframesResolved(e,n,r,i){var b,F;this.keyframeResolver=void 0;const{name:a,type:l,velocity:c,delay:h,isHandoff:p,onUpdate:m}=r;this.resolvedAt=yn.now();let y=!0;sF(e,a,l,c)||(y=!1,($s.instantAnimations||!h)&&(m==null||m(lp(e,r,n))),e[0]=e[e.length-1],Iy(r),r.repeat=0);const T={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>hF?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:e},x=y&&!p&&cF(T),P=(F=(b=T.motionValue)==null?void 0:b.owner)==null?void 0:F.current;let k;if(x)try{k=new rF({...T,element:P})}catch{k=new gd(T)}else k=new gd(T);k.finished.then(()=>{this.notifyFinished()}).catch(rr),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),QO()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function iC(t,e,n,r=0,i=1){const a=Array.from(t).sort((p,m)=>p.sortNodePosition(m)).indexOf(e),l=t.size,c=(l-1)*r;return typeof n=="function"?n(a,l):i===1?a*r:c-a*r}const dF=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function pF(t){const e=dF.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function sC(t,e,n=1){const[r,i]=pF(t);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const l=a.trim();return EA(l)?parseFloat(l):l}return Hv(i)?sC(i,e,n+1):i}const mF={type:"spring",stiffness:500,damping:25,restSpeed:10},gF=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),yF={type:"keyframes",duration:.8},vF={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},_F=(t,{keyframes:e})=>e.length>2?yF:bl.has(t)?t.startsWith("scale")?gF(e[1]):mF:vF;function oC(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...r}=t;return{...e,...r}}return t}function Jv(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?oC(n,t):n}const wF=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function EF(t){for(const e in t)if(!wF.has(e))return!0;return!1}const Zv=(t,e,n,r={},i,a)=>l=>{const c=Jv(r,t)||{},h=c.delay||r.delay||0;let{elapsed:p=0}=r;p=p-Un(h);const m={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-p,onUpdate:w=>{e.set(w),c.onUpdate&&c.onUpdate(w)},onComplete:()=>{l(),c.onComplete&&c.onComplete()},name:t,motionValue:e,element:a?void 0:i};EF(c)||Object.assign(m,_F(t,m)),m.duration&&(m.duration=Un(m.duration)),m.repeatDelay&&(m.repeatDelay=Un(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let y=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Iy(m),m.delay===0&&(y=!0)),($s.instantAnimations||$s.skipAnimations||i!=null&&i.shouldSkipAnimations)&&(y=!0,Iy(m),m.delay=0),m.allowFlatten=!c.type&&!c.ease,y&&!a&&e.get()!==void 0){const w=lp(m.keyframes,c);if(w!==void 0){rt.update(()=>{m.onUpdate(w),m.onComplete()});return}}return c.isSync?new gd(m):new fF(m)};function AT(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function e_(t,e,n,r){if(typeof e=="function"){const[i,a]=AT(r);e=e(n!==void 0?n:t.custom,i,a)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,a]=AT(r);e=e(n!==void 0?n:t.custom,i,a)}return e}function Fo(t,e,n){const r=t.getProps();return e_(r,e,n!==void 0?n:r.custom,t)}const aC=new Set(["width","height","top","left","right","bottom",...Rl]),CT=30,TF=t=>!isNaN(parseFloat(t)),kT={current:void 0};class SF{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const i=yn.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=yn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=TF(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new zv);const r=this.events[e].add(n);return e==="change"?()=>{r(),rt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return kT.current&&kT.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=yn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>CT)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,CT);return IA(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yl(t,e){return new SF(t,e)}const Ay=t=>Array.isArray(t);function xF(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,yl(n))}function IF(t){return Ay(t)?t[t.length-1]||0:t}function AF(t,e){const n=Fo(t,e);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const l in a){const c=IF(a[l]);xF(t,l,c)}}const tn=t=>!!(t&&t.getVelocity);function CF(t){return!!(tn(t)&&t.add)}function Cy(t,e){const n=t.getValue("willChange");if(CF(n))return n.add(e);if(!n&&$s.WillChange){const r=new $s.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function t_(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const kF="framerAppearId",lC="data-"+t_(kF);function uC(t){return t.props[lC]}function PF({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function cC(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:l,...c}=e;const h=t.getDefaultTransition();a=a?oC(a,h):h;const p=a==null?void 0:a.reduceMotion;r&&(a=r);const m=[],y=i&&t.animationState&&t.animationState.getState()[i];for(const w in c){const T=t.getValue(w,t.latestValues[w]??null),x=c[w];if(x===void 0||y&&PF(y,w))continue;const P={delay:n,...Jv(a||{},w)},k=T.get();if(k!==void 0&&!T.isAnimating()&&!Array.isArray(x)&&x===k&&!P.velocity){rt.update(()=>T.set(x));continue}let b=!1;if(window.MotionHandoffAnimation){const $=uC(t);if($){const H=window.MotionHandoffAnimation($,w,rt);H!==null&&(P.startTime=H,b=!0)}}Cy(t,w);const F=p??t.shouldReduceMotion;T.start(Zv(w,T,x,F&&aC.has(w)?{type:!1}:P,t,b));const U=T.animation;U&&m.push(U)}if(l){const w=()=>rt.update(()=>{l&&AF(t,l)});m.length?Promise.all(m).then(w):w()}return m}function ky(t,e,n={}){var h;const r=Fo(t,e,n.type==="exit"?(h=t.presenceContext)==null?void 0:h.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(cC(t,r,n)):()=>Promise.resolve(),l=t.variantChildren&&t.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:w}=i;return RF(t,e,p,m,y,w,n)}:()=>Promise.resolve(),{when:c}=i;if(c){const[p,m]=c==="beforeChildren"?[a,l]:[l,a];return p().then(()=>m())}else return Promise.all([a(),l(n.delay)])}function RF(t,e,n=0,r=0,i=0,a=1,l){const c=[];for(const h of t.variantChildren)h.notify("AnimationStart",e),c.push(ky(h,e,{...l,delay:n+(typeof r=="function"?0:r)+iC(t.variantChildren,h,r,i,a)}).then(()=>h.notify("AnimationComplete",e)));return Promise.all(c)}function bF(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(a=>ky(t,a,n));r=Promise.all(i)}else if(typeof e=="string")r=ky(t,e,n);else{const i=typeof e=="function"?Fo(t,e,n.custom):e;r=Promise.all(cC(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const DF={test:t=>t==="auto",parse:t=>t},hC=t=>e=>e.test(t),fC=[Pl,ge,ni,Es,iO,rO,DF],PT=t=>fC.find(hC(t));function VF(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||SA(t):!0}const NF=new Set(["brightness","contrast","saturate","opacity"]);function MF(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(qv)||[];if(!r)return t;const i=n.replace(r,"");let a=NF.has(e)?1:0;return r!==n&&(a*=100),e+"("+a+i+")"}const LF=/\b([a-z-]*)\(.*?\)/gu,Py={...Cr,getAnimatableNone:t=>{const e=t.match(LF);return e?e.map(MF).join(" "):t}},Ry={...Cr,getAnimatableNone:t=>{const e=Cr.parse(t);return Cr.createTransformer(t)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},RT={...Pl,transform:Math.round},OF={rotate:Es,rotateX:Es,rotateY:Es,rotateZ:Es,scale:hf,scaleX:hf,scaleY:hf,scaleZ:hf,skew:Es,skewX:Es,skewY:Es,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:uc,originX:pT,originY:pT,originZ:ge},n_={borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,top:ge,right:ge,bottom:ge,left:ge,inset:ge,insetBlock:ge,insetBlockStart:ge,insetBlockEnd:ge,insetInline:ge,insetInlineStart:ge,insetInlineEnd:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,paddingBlock:ge,paddingBlockStart:ge,paddingBlockEnd:ge,paddingInline:ge,paddingInlineStart:ge,paddingInlineEnd:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,marginBlock:ge,marginBlockStart:ge,marginBlockEnd:ge,marginInline:ge,marginInlineStart:ge,marginInlineEnd:ge,fontSize:ge,backgroundPositionX:ge,backgroundPositionY:ge,...OF,zIndex:RT,fillOpacity:uc,strokeOpacity:uc,numOctaves:RT},FF={...n_,color:Pt,backgroundColor:Pt,outlineColor:Pt,fill:Pt,stroke:Pt,borderColor:Pt,borderTopColor:Pt,borderRightColor:Pt,borderBottomColor:Pt,borderLeftColor:Pt,filter:Py,WebkitFilter:Py,mask:Ry,WebkitMask:Ry},dC=t=>FF[t],jF=new Set([Py,Ry]);function pC(t,e){let n=dC(t);return jF.has(n)||(n=Cr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const $F=new Set(["auto","none","0"]);function UF(t,e,n){let r=0,i;for(;r<t.length&&!i;){const a=t[r];typeof a=="string"&&!$F.has(a)&&gl(a).values.length&&(i=t[r]),r++}if(i&&n)for(const a of e)t[a]=pC(n,i)}class zF extends Xv{constructor(e,n,r,i,a){super(e,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let y=e[m];if(typeof y=="string"&&(y=y.trim(),Hv(y))){const w=sC(y,n.current);w!==void 0&&(e[m]=w),m===e.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!aC.has(r)||e.length!==2)return;const[i,a]=e,l=PT(i),c=PT(a),h=dT(i),p=dT(a);if(h!==p&&Cs[r]){this.needsMeasurement=!0;return}if(l!==c)if(ST(l)&&ST(c))for(let m=0;m<e.length;m++){const y=e[m];typeof y=="string"&&(e[m]=parseFloat(y))}else Cs[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)(e[i]===null||VF(e[i]))&&r.push(i);r.length&&UF(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Cs[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var c;const{element:e,name:n,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const a=r.length-1,l=r[a];r[a]=Cs[n](e.measureViewportBox(),window.getComputedStyle(e.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),(c=this.removedTransforms)!=null&&c.length&&this.removedTransforms.forEach(([h,p])=>{e.getValue(h).set(p)}),this.resolveNoneKeyframes()}}function mC(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const i=document.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t).filter(r=>r!=null)}const gC=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function Nf(t){return TA(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:r_,cancel:k7}=LA(queueMicrotask,!1),Tr={x:!1,y:!1};function yC(){return Tr.x||Tr.y}function BF(t){return t==="x"||t==="y"?Tr[t]?null:(Tr[t]=!0,()=>{Tr[t]=!1}):Tr.x||Tr.y?null:(Tr.x=Tr.y=!0,()=>{Tr.x=Tr.y=!1})}function vC(t,e){const n=mC(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function WF(t){return!(t.pointerType==="touch"||yC())}function HF(t,e,n={}){const[r,i,a]=vC(t,n);return r.forEach(l=>{let c=!1,h=!1,p;const m=()=>{l.removeEventListener("pointerleave",x)},y=k=>{p&&(p(k),p=void 0),m()},w=k=>{c=!1,window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),h&&(h=!1,y(k))},T=()=>{c=!0,window.addEventListener("pointerup",w,i),window.addEventListener("pointercancel",w,i)},x=k=>{if(k.pointerType!=="touch"){if(c){h=!0;return}y(k)}},P=k=>{if(!WF(k))return;h=!1;const b=e(l,k);typeof b=="function"&&(p=b,l.addEventListener("pointerleave",x,i))};l.addEventListener("pointerenter",P,i),l.addEventListener("pointerdown",T,i)}),a}const _C=(t,e)=>e?t===e?!0:_C(t,e.parentElement):!1,i_=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,qF=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function KF(t){return qF.has(t.tagName)||t.isContentEditable===!0}const GF=new Set(["INPUT","SELECT","TEXTAREA"]);function QF(t){return GF.has(t.tagName)||t.isContentEditable===!0}const Mf=new WeakSet;function bT(t){return e=>{e.key==="Enter"&&t(e)}}function Ag(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const YF=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=bT(()=>{if(Mf.has(n))return;Ag(n,"down");const i=bT(()=>{Ag(n,"up")}),a=()=>Ag(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",a,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)};function DT(t){return i_(t)&&!yC()}const VT=new WeakSet;function XF(t,e,n={}){const[r,i,a]=vC(t,n),l=c=>{const h=c.currentTarget;if(!DT(c)||VT.has(c))return;Mf.add(h),n.stopPropagation&&VT.add(c);const p=e(h,c),m=(T,x)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",w),Mf.has(h)&&Mf.delete(h),DT(T)&&typeof p=="function"&&p(T,{success:x})},y=T=>{m(T,h===window||h===document||n.useGlobalTarget||_C(h,T.target))},w=T=>{m(T,!1)};window.addEventListener("pointerup",y,i),window.addEventListener("pointercancel",w,i)};return r.forEach(c=>{(n.useGlobalTarget?window:c).addEventListener("pointerdown",l,i),Nf(c)&&(c.addEventListener("focus",p=>YF(p,i)),!KF(c)&&!c.hasAttribute("tabindex")&&(c.tabIndex=0))}),a}function s_(t){return TA(t)&&"ownerSVGElement"in t}const Lf=new WeakMap;let Ts;const wC=(t,e,n)=>(r,i)=>i&&i[0]?i[0][t+"Size"]:s_(r)&&"getBBox"in r?r.getBBox()[e]:r[n],JF=wC("inline","width","offsetWidth"),ZF=wC("block","height","offsetHeight");function e4({target:t,borderBoxSize:e}){var n;(n=Lf.get(t))==null||n.forEach(r=>{r(t,{get width(){return JF(t,e)},get height(){return ZF(t,e)}})})}function t4(t){t.forEach(e4)}function n4(){typeof ResizeObserver>"u"||(Ts=new ResizeObserver(t4))}function r4(t,e){Ts||n4();const n=mC(t);return n.forEach(r=>{let i=Lf.get(r);i||(i=new Set,Lf.set(r,i)),i.add(e),Ts==null||Ts.observe(r)}),()=>{n.forEach(r=>{const i=Lf.get(r);i==null||i.delete(e),i!=null&&i.size||Ts==null||Ts.unobserve(r)})}}const Of=new Set;let Za;function i4(){Za=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Of.forEach(e=>e(t))},window.addEventListener("resize",Za)}function s4(t){return Of.add(t),Za||i4(),()=>{Of.delete(t),!Of.size&&typeof Za=="function"&&(window.removeEventListener("resize",Za),Za=void 0)}}function NT(t,e){return typeof t=="function"?s4(t):r4(t,e)}function o4(t){return s_(t)&&t.tagName==="svg"}const a4=[...fC,Pt,Cr],l4=t=>a4.find(hC(t)),MT=()=>({translate:0,scale:1,origin:0,originPoint:0}),el=()=>({x:MT(),y:MT()}),LT=()=>({min:0,max:0}),Ot=()=>({x:LT(),y:LT()}),u4=new WeakMap;function up(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function cc(t){return typeof t=="string"||Array.isArray(t)}const o_=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],a_=["initial",...o_];function cp(t){return up(t.animate)||a_.some(e=>cc(t[e]))}function EC(t){return!!(cp(t)||t.variants)}function c4(t,e,n){for(const r in e){const i=e[r],a=n[r];if(tn(i))t.addValue(r,i);else if(tn(a))t.addValue(r,yl(i,{owner:t}));else if(a!==i)if(t.hasValue(r)){const l=t.getValue(r);l.liveStyle===!0?l.jump(i):l.hasAnimated||l.set(i)}else{const l=t.getStaticValue(r);t.addValue(r,yl(l!==void 0?l:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const by={current:null},TC={current:!1},h4=typeof window<"u";function f4(){if(TC.current=!0,!!h4)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>by.current=t.matches;t.addEventListener("change",e),e()}else by.current=!1}const OT=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let yd={};function SC(t){yd=t}function d4(){return yd}class p4{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:a,blockInitialAnimation:l,visualState:c},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Xv,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=yn.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,rt.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=c;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=m,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=a,this.options=h,this.blockInitialAnimation=!!l,this.isControllingVariants=cp(n),this.isVariantNode=EC(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:y,...w}=this.scrapeMotionValuesFromProps(n,{},this);for(const T in w){const x=w[T];p[T]!==void 0&&tn(x)&&x.set(p[T])}}mount(e){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,u4.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,a)=>this.bindToMotionValue(a,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(TC.current||f4(),this.shouldReduceMotion=by.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Us(this.notifyUpdate),Us(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&rC.has(e)&&this.current instanceof HTMLElement){const{factory:l,keyframes:c,times:h,ease:p,duration:m}=n.accelerate,y=new tC({element:this.current,name:e,keyframes:c,times:h,ease:p,duration:Un(m)}),w=l(y);this.valueSubscriptions.set(e,()=>{w(),y.cancel()});return}const r=bl.has(e);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",l=>{this.latestValues[e]=l,this.props.onUpdate&&rt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),a&&a(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in yd){const n=yd[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ot()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<OT.length;r++){const i=OT[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,l=e[a];l&&(this.propEventSubscriptions[i]=this.on(i,l))}this.prevMotionValues=c4(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=yl(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(EA(r)||SA(r))?r=parseFloat(r):!l4(r)&&Cr.test(n)&&(r=pC(e,n)),this.setBaseTarget(e,tn(r)?r.get():r)),tn(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var a;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const l=e_(this.props,n,(a=this.presenceContext)==null?void 0:a.custom);l&&(r=l[e])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!tn(i)?i:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new zv),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){r_.render(this.render)}}class xC extends p4{constructor(){super(...arguments),this.KeyframeResolver=zF}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const r=e.style;return r?r[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;tn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Qs{constructor(e){this.isMounted=!1,this.node=e}update(){}}function IC({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function m4({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function g4(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Cg(t){return t===void 0||t===1}function Dy({scale:t,scaleX:e,scaleY:n}){return!Cg(t)||!Cg(e)||!Cg(n)}function ko(t){return Dy(t)||AC(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function AC(t){return FT(t.x)||FT(t.y)}function FT(t){return t&&t!=="0%"}function vd(t,e,n){const r=t-n,i=e*r;return n+i}function jT(t,e,n,r,i){return i!==void 0&&(t=vd(t,i,r)),vd(t,n,r)+e}function Vy(t,e=0,n=1,r,i){t.min=jT(t.min,e,n,r,i),t.max=jT(t.max,e,n,r,i)}function CC(t,{x:e,y:n}){Vy(t.x,e.translate,e.scale,e.originPoint),Vy(t.y,n.translate,n.scale,n.originPoint)}const $T=.999999999999,UT=1.0000000000001;function y4(t,e,n,r=!1){var c;const i=n.length;if(!i)return;e.x=e.y=1;let a,l;for(let h=0;h<i;h++){a=n[h],l=a.projectionDelta;const{visualElement:p}=a.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(ei(t.x,-a.scroll.offset.x),ei(t.y,-a.scroll.offset.y)),l&&(e.x*=l.x.scale,e.y*=l.y.scale,CC(t,l)),r&&ko(a.latestValues)&&Ff(t,a.latestValues,(c=a.layout)==null?void 0:c.layoutBox))}e.x<UT&&e.x>$T&&(e.x=1),e.y<UT&&e.y>$T&&(e.y=1)}function ei(t,e){t.min+=e,t.max+=e}function zT(t,e,n,r,i=.5){const a=ht(t.min,t.max,i);Vy(t,e,n,a,r)}function BT(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Ff(t,e,n){const r=n??t;zT(t.x,BT(e.x,r.x),e.scaleX,e.scale,e.originX),zT(t.y,BT(e.y,r.y),e.scaleY,e.scale,e.originY)}function kC(t,e){return IC(g4(t.getBoundingClientRect(),e))}function v4(t,e,n){const r=kC(t,n),{scroll:i}=e;return i&&(ei(r.x,i.offset.x),ei(r.y,i.offset.y)),r}const _4={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},w4=Rl.length;function E4(t,e,n){let r="",i=!0;for(let a=0;a<w4;a++){const l=Rl[a],c=t[l];if(c===void 0)continue;let h=!0;if(typeof c=="number")h=c===(l.startsWith("scale")?1:0);else{const p=parseFloat(c);h=l.startsWith("scale")?p===1:p===0}if(!h||n){const p=gC(c,n_[l]);if(!h){i=!1;const m=_4[l]||l;r+=`${m}(${p}) `}n&&(e[l]=p)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function l_(t,e,n){const{style:r,vars:i,transformOrigin:a}=t;let l=!1,c=!1;for(const h in e){const p=e[h];if(bl.has(h)){l=!0;continue}else if(FA(h)){i[h]=p;continue}else{const m=gC(p,n_[h]);h.startsWith("origin")?(c=!0,a[h]=m):r[h]=m}}if(e.transform||(l||n?r.transform=E4(e,t.transform,n):r.transform&&(r.transform="none")),c){const{originX:h="50%",originY:p="50%",originZ:m=0}=a;r.transformOrigin=`${h} ${p} ${m}`}}function PC(t,{style:e,vars:n},r,i){const a=t.style;let l;for(l in e)a[l]=e[l];i==null||i.applyProjectionStyles(a,r);for(l in n)a.setProperty(l,n[l])}function WT(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Mu={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ge.test(t))t=parseFloat(t);else return t;const n=WT(t,e.target.x),r=WT(t,e.target.y);return`${n}% ${r}%`}},T4={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Cr.parse(t);if(i.length>5)return r;const a=Cr.createTransformer(t),l=typeof i[0]!="number"?1:0,c=n.x.scale*e.x,h=n.y.scale*e.y;i[0+l]/=c,i[1+l]/=h;const p=ht(c,h,.5);return typeof i[2+l]=="number"&&(i[2+l]/=p),typeof i[3+l]=="number"&&(i[3+l]/=p),a(i)}},Ny={borderRadius:{...Mu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Mu,borderTopRightRadius:Mu,borderBottomLeftRadius:Mu,borderBottomRightRadius:Mu,boxShadow:T4};function RC(t,{layout:e,layoutId:n}){return bl.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Ny[t]||t==="opacity")}function u_(t,e,n){var l;const r=t.style,i=e==null?void 0:e.style,a={};if(!r)return a;for(const c in r)(tn(r[c])||i&&tn(i[c])||RC(c,t)||((l=n==null?void 0:n.getValue(c))==null?void 0:l.liveStyle)!==void 0)&&(a[c]=r[c]);return a}function S4(t){return window.getComputedStyle(t)}class x4 extends xC{constructor(){super(...arguments),this.type="html",this.renderInstance=PC}readValueFromInstance(e,n){var r;if(bl.has(n))return(r=this.projection)!=null&&r.isProjecting?wy(n):WO(e,n);{const i=S4(e),a=(FA(n)?i.getPropertyValue(n):i[n])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:n}){return kC(e,n)}build(e,n,r){l_(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return u_(e,n,r)}}const I4={offset:"stroke-dashoffset",array:"stroke-dasharray"},A4={offset:"strokeDashoffset",array:"strokeDasharray"};function C4(t,e,n=1,r=0,i=!0){t.pathLength=1;const a=i?I4:A4;t[a.offset]=`${-r}`,t[a.array]=`${e} ${n}`}const k4=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function bC(t,{attrX:e,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:l=0,...c},h,p,m){if(l_(t,c,p),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:y,style:w}=t;y.transform&&(w.transform=y.transform,delete y.transform),(w.transform||y.transformOrigin)&&(w.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),w.transform&&(w.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete y.transformBox);for(const T of k4)y[T]!==void 0&&(w[T]=y[T],delete y[T]);e!==void 0&&(y.x=e),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),i!==void 0&&C4(y,i,a,l,!1)}const DC=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),VC=t=>typeof t=="string"&&t.toLowerCase()==="svg";function P4(t,e,n,r){PC(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(DC.has(i)?i:t_(i),e.attrs[i])}function NC(t,e,n){const r=u_(t,e,n);for(const i in t)if(tn(t[i])||tn(e[i])){const a=Rl.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=t[i]}return r}class R4 extends xC{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ot}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(bl.has(n)){const r=dC(n);return r&&r.default||0}return n=DC.has(n)?n:t_(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return NC(e,n,r)}build(e,n,r){bC(e,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,n,r,i){P4(e,n,r,i)}mount(e){this.isSVGTag=VC(e.tagName),super.mount(e)}}const b4=a_.length;function MC(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?MC(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<b4;n++){const r=a_[n],i=t.props[r];(cc(i)||i===!1)&&(e[r]=i)}return e}function LC(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}const D4=[...o_].reverse(),V4=o_.length;function N4(t){return e=>Promise.all(e.map(({animation:n,options:r})=>bF(t,n,r)))}function M4(t){let e=N4(t),n=HT(),r=!0,i=!1;const a=p=>(m,y)=>{var T;const w=Fo(t,y,p==="exit"?(T=t.presenceContext)==null?void 0:T.custom:void 0);if(w){const{transition:x,transitionEnd:P,...k}=w;m={...m,...k,...P}}return m};function l(p){e=p(t)}function c(p){const{props:m}=t,y=MC(t.parent)||{},w=[],T=new Set;let x={},P=1/0;for(let b=0;b<V4;b++){const F=D4[b],U=n[F],$=m[F]!==void 0?m[F]:y[F],H=cc($),X=F===p?U.isActive:null;X===!1&&(P=b);let C=$===y[F]&&$!==m[F]&&H;if(C&&(r||i)&&t.manuallyAnimateOnMount&&(C=!1),U.protectedKeys={...x},!U.isActive&&X===null||!$&&!U.prevProp||up($)||typeof $=="boolean")continue;if(F==="exit"&&U.isActive&&X!==!0){U.prevResolvedValues&&(x={...x,...U.prevResolvedValues});continue}const I=L4(U.prevProp,$);let R=I||F===p&&U.isActive&&!C&&H||b>P&&H,D=!1;const O=Array.isArray($)?$:[$];let B=O.reduce(a(F),{});X===!1&&(B={});const{prevResolvedValues:M={}}=U,Re={...M,...B},Ge=re=>{R=!0,T.has(re)&&(D=!0,T.delete(re)),U.needsAnimating[re]=!0;const ce=t.getValue(re);ce&&(ce.liveStyle=!1)};for(const re in Re){const ce=B[re],ue=M[re];if(x.hasOwnProperty(re))continue;let W=!1;Ay(ce)&&Ay(ue)?W=!LC(ce,ue):W=ce!==ue,W?ce!=null?Ge(re):T.add(re):ce!==void 0&&T.has(re)?Ge(re):U.protectedKeys[re]=!0}U.prevProp=$,U.prevResolvedValues=B,U.isActive&&(x={...x,...B}),(r||i)&&t.blockInitialAnimation&&(R=!1);const Xe=C&&I;R&&(!Xe||D)&&w.push(...O.map(re=>{const ce={type:F};if(typeof re=="string"&&(r||i)&&!Xe&&t.manuallyAnimateOnMount&&t.parent){const{parent:ue}=t,W=Fo(ue,re);if(ue.enteringChildren&&W){const{delayChildren:J}=W.transition||{};ce.delay=iC(ue.enteringChildren,t,J)}}return{animation:re,options:ce}}))}if(T.size){const b={};if(typeof m.initial!="boolean"){const F=Fo(t,Array.isArray(m.initial)?m.initial[0]:m.initial);F&&F.transition&&(b.transition=F.transition)}T.forEach(F=>{const U=t.getBaseTarget(F),$=t.getValue(F);$&&($.liveStyle=!0),b[F]=U??null}),w.push({animation:b})}let k=!!w.length;return r&&(m.initial===!1||m.initial===m.animate)&&!t.manuallyAnimateOnMount&&(k=!1),r=!1,i=!1,k?e(w):Promise.resolve()}function h(p,m){var w;if(n[p].isActive===m)return Promise.resolve();(w=t.variantChildren)==null||w.forEach(T=>{var x;return(x=T.animationState)==null?void 0:x.setActive(p,m)}),n[p].isActive=m;const y=c(p);for(const T in n)n[T].protectedKeys={};return y}return{animateChanges:c,setActive:h,setAnimateFunction:l,getState:()=>n,reset:()=>{n=HT(),i=!0}}}function L4(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!LC(e,t):!1}function Ao(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function HT(){return{animate:Ao(!0),whileInView:Ao(),whileHover:Ao(),whileTap:Ao(),whileDrag:Ao(),whileFocus:Ao(),exit:Ao()}}function My(t,e){t.min=e.min,t.max=e.max}function Er(t,e){My(t.x,e.x),My(t.y,e.y)}function qT(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const OC=1e-4,O4=1-OC,F4=1+OC,FC=.01,j4=0-FC,$4=0+FC;function vn(t){return t.max-t.min}function U4(t,e,n){return Math.abs(t-e)<=n}function KT(t,e,n,r=.5){t.origin=r,t.originPoint=ht(e.min,e.max,t.origin),t.scale=vn(n)/vn(e),t.translate=ht(n.min,n.max,t.origin)-t.originPoint,(t.scale>=O4&&t.scale<=F4||isNaN(t.scale))&&(t.scale=1),(t.translate>=j4&&t.translate<=$4||isNaN(t.translate))&&(t.translate=0)}function Yu(t,e,n,r){KT(t.x,e.x,n.x,r?r.originX:void 0),KT(t.y,e.y,n.y,r?r.originY:void 0)}function GT(t,e,n,r=0){const i=r?ht(n.min,n.max,r):n.min;t.min=i+e.min,t.max=t.min+vn(e)}function z4(t,e,n,r){GT(t.x,e.x,n.x,r==null?void 0:r.x),GT(t.y,e.y,n.y,r==null?void 0:r.y)}function QT(t,e,n,r=0){const i=r?ht(n.min,n.max,r):n.min;t.min=e.min-i,t.max=t.min+vn(e)}function _d(t,e,n,r){QT(t.x,e.x,n.x,r==null?void 0:r.x),QT(t.y,e.y,n.y,r==null?void 0:r.y)}function YT(t,e,n,r,i){return t-=e,t=vd(t,1/n,r),i!==void 0&&(t=vd(t,1/i,r)),t}function B4(t,e=0,n=1,r=.5,i,a=t,l=t){if(ni.test(e)&&(e=parseFloat(e),e=ht(l.min,l.max,e/100)-l.min),typeof e!="number")return;let c=ht(a.min,a.max,r);t===a&&(c-=e),t.min=YT(t.min,e,n,c,i),t.max=YT(t.max,e,n,c,i)}function XT(t,e,[n,r,i],a,l){B4(t,e[n],e[r],e[i],e.scale,a,l)}const W4=["x","scaleX","originX"],H4=["y","scaleY","originY"];function JT(t,e,n,r){XT(t.x,e,W4,n?n.x:void 0,r?r.x:void 0),XT(t.y,e,H4,n?n.y:void 0,r?r.y:void 0)}function ZT(t){return t.translate===0&&t.scale===1}function jC(t){return ZT(t.x)&&ZT(t.y)}function eS(t,e){return t.min===e.min&&t.max===e.max}function q4(t,e){return eS(t.x,e.x)&&eS(t.y,e.y)}function tS(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function $C(t,e){return tS(t.x,e.x)&&tS(t.y,e.y)}function nS(t){return vn(t.x)/vn(t.y)}function rS(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Xr(t){return[t("x"),t("y")]}function K4(t,e,n){let r="";const i=t.x.translate/e.x,a=t.y.translate/e.y,l=(n==null?void 0:n.z)||0;if((i||a||l)&&(r=`translate3d(${i}px, ${a}px, ${l}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:p,rotate:m,rotateX:y,rotateY:w,skewX:T,skewY:x}=n;p&&(r=`perspective(${p}px) ${r}`),m&&(r+=`rotate(${m}deg) `),y&&(r+=`rotateX(${y}deg) `),w&&(r+=`rotateY(${w}deg) `),T&&(r+=`skewX(${T}deg) `),x&&(r+=`skewY(${x}deg) `)}const c=t.x.scale*e.x,h=t.y.scale*e.y;return(c!==1||h!==1)&&(r+=`scale(${c}, ${h})`),r||"none"}const UC=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],G4=UC.length,iS=t=>typeof t=="string"?parseFloat(t):t,sS=t=>typeof t=="number"||ge.test(t);function Q4(t,e,n,r,i,a){i?(t.opacity=ht(0,n.opacity??1,Y4(r)),t.opacityExit=ht(e.opacity??1,0,X4(r))):a&&(t.opacity=ht(e.opacity??1,n.opacity??1,r));for(let l=0;l<G4;l++){const c=UC[l];let h=oS(e,c),p=oS(n,c);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||sS(h)===sS(p)?(t[c]=Math.max(ht(iS(h),iS(p),r),0),(ni.test(p)||ni.test(h))&&(t[c]+="%")):t[c]=p}(e.rotate||n.rotate)&&(t.rotate=ht(e.rotate||0,n.rotate||0,r))}function oS(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const Y4=zC(0,.5,DA),X4=zC(.5,.95,rr);function zC(t,e,n){return r=>r<t?0:r>e?1:n(lc(t,e,r))}function J4(t,e,n){const r=tn(t)?t:yl(t);return r.start(Zv("",r,e,n)),r.animation}function hc(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const Z4=(t,e)=>t.depth-e.depth;class ej{constructor(){this.children=[],this.isDirty=!1}add(e){Uv(this.children,e),this.isDirty=!0}remove(e){hd(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Z4),this.isDirty=!1,this.children.forEach(e)}}function tj(t,e){const n=yn.now(),r=({timestamp:i})=>{const a=i-n;a>=e&&(Us(r),t(a-e))};return rt.setup(r,!0),()=>Us(r)}function jf(t){return tn(t)?t.get():t}class nj{constructor(){this.members=[]}add(e){Uv(this.members,e);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===e||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(hd(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(hd(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let r=this.members.indexOf(e)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(e,n){var i;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:l}=e.options;(a===void 0||a!==l)&&(e.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(i=e.root)!=null&&i.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,r,i,a,l;(r=(n=e.options).onExitComplete)==null||r.call(n),(l=(i=e.resumingFrom)==null?void 0:(a=i.options).onExitComplete)==null||l.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const $f={hasAnimatedSinceResize:!0,hasEverUpdated:!1},kg=["","X","Y","Z"],rj=1e3;let ij=0;function Pg(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function BC(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=uC(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",rt,!(i||a))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&BC(r)}function WC({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(l={},c=e==null?void 0:e()){this.id=ij++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(aj),this.nodes.forEach(dj),this.nodes.forEach(pj),this.nodes.forEach(lj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new ej)}addEventListener(l,c){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new zv),this.eventHandlers.get(l).add(c)}notifyListeners(l,...c){const h=this.eventHandlers.get(l);h&&h.notify(...c)}hasListeners(l){return this.eventHandlers.has(l)}mount(l){if(this.instance)return;this.isSVG=s_(l)&&!o4(l),this.instance=l;const{layoutId:c,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||c)&&(this.isLayoutDirty=!0),t){let m,y=0;const w=()=>this.root.updateBlockedByResize=!1;rt.read(()=>{y=window.innerWidth}),t(l,()=>{const T=window.innerWidth;T!==y&&(y=T,this.root.updateBlockedByResize=!0,m&&m(),m=tj(w,250),$f.hasAnimatedSinceResize&&($f.hasAnimatedSinceResize=!1,this.nodes.forEach(uS)))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&p&&(c||h)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:y,hasRelativeLayoutChanged:w,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||p.getDefaultTransition()||_j,{onLayoutAnimationStart:P,onLayoutAnimationComplete:k}=p.getProps(),b=!this.targetLayout||!$C(this.targetLayout,T),F=!y&&w;if(this.options.layoutRoot||this.resumeFrom||F||y&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const U={...Jv(x,"layout"),onPlay:P,onComplete:k};(p.shouldReduceMotion||this.options.layoutRoot)&&(U.delay=0,U.type=!1),this.startAnimation(U),this.setAnimationOrigin(m,F)}else y||uS(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Us(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(mj),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&BC(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,(typeof y.latestValues.x=="string"||typeof y.latestValues.y=="string")&&(y.isLayoutDirty=!0),y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:c,layout:h}=this.options;if(c===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const h=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),h&&this.nodes.forEach(cj),this.nodes.forEach(aS);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(lS);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(hj),this.nodes.forEach(fj),this.nodes.forEach(sj),this.nodes.forEach(oj)):this.nodes.forEach(lS),this.clearAllSnapshots();const c=yn.now();Jt.delta=ai(0,1e3/60,c-Jt.timestamp),Jt.timestamp=c,Jt.isProcessing=!0,Eg.update.process(Jt),Eg.preRender.process(Jt),Eg.render.process(Jt),Jt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,r_.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(uj),this.sharedNodes.forEach(gj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,rt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){rt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!vn(this.snapshot.measuredBox.x)&&!vn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ot()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(c=!1),c&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:l,isRoot:h,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!i)return;const l=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!jC(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,m=p!==this.prevTransformTemplateValue;l&&this.instance&&(c||ko(this.latestValues)||m)&&(i(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const c=this.measurePageBox();let h=this.removeElementScroll(c);return l&&(h=this.removeTransform(h)),wj(h),{animationId:this.root.animationId,measuredBox:c,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:l}=this.options;if(!l)return Ot();const c=l.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(Ej))){const{scroll:m}=this.root;m&&(ei(c.x,m.offset.x),ei(c.y,m.offset.y))}return c}removeElementScroll(l){var h;const c=Ot();if(Er(c,l),(h=this.scroll)!=null&&h.wasRoot)return c;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:y,options:w}=m;m!==this.root&&y&&w.layoutScroll&&(y.wasRoot&&Er(c,l),ei(c.x,y.offset.x),ei(c.y,y.offset.y))}return c}applyTransform(l,c=!1,h){var m,y;const p=h||Ot();Er(p,l);for(let w=0;w<this.path.length;w++){const T=this.path[w];!c&&T.options.layoutScroll&&T.scroll&&T!==T.root&&(ei(p.x,-T.scroll.offset.x),ei(p.y,-T.scroll.offset.y)),ko(T.latestValues)&&Ff(p,T.latestValues,(m=T.layout)==null?void 0:m.layoutBox)}return ko(this.latestValues)&&Ff(p,this.latestValues,(y=this.layout)==null?void 0:y.layoutBox),p}removeTransform(l){var h;const c=Ot();Er(c,l);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!ko(m.latestValues))continue;let y;m.instance&&(Dy(m.latestValues)&&m.updateSnapshot(),y=Ot(),Er(y,m.measurePageBox())),JT(c,m.latestValues,(h=m.snapshot)==null?void 0:h.layoutBox,y)}return ko(this.latestValues)&&JT(c,this.latestValues),c}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Jt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var T;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==c;if(!(l||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:y}=this.options;if(!this.layout||!(m||y))return;this.resolvedRelativeTargetAt=Jt.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ot(),this.targetWithTransforms=Ot()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),z4(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Er(this.target,this.layout.layoutBox),CC(this.target,this.targetDelta)):Er(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Dy(this.parent.latestValues)||AC(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(l,c,h){this.relativeParent=l,this.linkedParentVersion=l.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ot(),this.relativeTargetOrigin=Ot(),_d(this.relativeTargetOrigin,c,h,this.options.layoutAnchor||void 0),Er(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var x;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let h=!0;if((this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty)&&(h=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Jt.timestamp&&(h=!1),h)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;Er(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,w=this.treeScale.y;y4(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=Ot());const{target:T}=l;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(qT(this.prevProjectionDelta.x,this.projectionDelta.x),qT(this.prevProjectionDelta.y,this.projectionDelta.y)),Yu(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==w||!rS(this.projectionDelta.x,this.prevProjectionDelta.x)||!rS(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){var c;if((c=this.options.visualElement)==null||c.scheduleRender(),l){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=el(),this.projectionDelta=el(),this.projectionDeltaWithTransform=el()}setAnimationOrigin(l,c=!1){const h=this.snapshot,p=h?h.latestValues:{},m={...this.latestValues},y=el();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const w=Ot(),T=h?h.source:void 0,x=this.layout?this.layout.source:void 0,P=T!==x,k=this.getStack(),b=!k||k.members.length<=1,F=!!(P&&!b&&this.options.crossfade===!0&&!this.path.some(vj));this.animationProgress=0;let U;this.mixTargetDelta=$=>{const H=$/1e3;cS(y.x,l.x,H),cS(y.y,l.y,H),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(_d(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),yj(this.relativeTarget,this.relativeTargetOrigin,w,H),U&&q4(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=Ot()),Er(U,this.relativeTarget)),P&&(this.animationValues=m,Q4(m,p,this.latestValues,H,F,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=H},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){var c,h,p;this.notifyListeners("animationStart"),(c=this.currentAnimation)==null||c.stop(),(p=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||p.stop(),this.pendingAnimation&&(Us(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=rt.update(()=>{$f.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=yl(0)),this.motionValue.jump(0,!1),this.currentAnimation=J4(this.motionValue,[0,1e3],{...l,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),l.onUpdate&&l.onUpdate(m)},onStop:()=>{},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(rj),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:c,target:h,layout:p,latestValues:m}=l;if(!(!c||!h||!p)){if(this!==l&&this.layout&&p&&HC(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||Ot();const y=vn(this.layout.layoutBox.x);h.x.min=l.target.x.min,h.x.max=h.x.min+y;const w=vn(this.layout.layoutBox.y);h.y.min=l.target.y.min,h.y.max=h.y.min+w}Er(c,h),Ff(c,m),Yu(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(l,c){this.sharedNodes.has(l)||this.sharedNodes.set(l,new nj),this.sharedNodes.get(l).add(c);const p=c.options.initialPromotionConfig;c.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(c):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var c;const{layoutId:l}=this.options;return l?((c=this.getStack())==null?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:l}=this.options;return l?(c=this.getStack())==null?void 0:c.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:c,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),l&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetSkewAndRotation(){const{visualElement:l}=this.options;if(!l)return;let c=!1;const{latestValues:h}=l;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(c=!0),!c)return;const p={};h.z&&Pg("z",l,p,this.animationValues);for(let m=0;m<kg.length;m++)Pg(`rotate${kg[m]}`,l,p,this.animationValues),Pg(`skew${kg[m]}`,l,p,this.animationValues);l.render();for(const m in p)l.setStaticValue(m,p[m]),this.animationValues&&(this.animationValues[m]=p[m]);l.scheduleRender()}applyProjectionStyles(l,c){if(!this.instance||this.isSVG)return;if(!this.isVisible){l.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,l.visibility="",l.opacity="",l.pointerEvents=jf(c==null?void 0:c.pointerEvents)||"",l.transform=h?h(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(l.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,l.pointerEvents=jf(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!ko(this.latestValues)&&(l.transform=h?h({},""):"none",this.hasProjected=!1);return}l.visibility="";const m=p.animationValues||p.latestValues;this.applyTransformsToTarget();let y=K4(this.projectionDeltaWithTransform,this.treeScale,m);h&&(y=h(m,y)),l.transform=y;const{x:w,y:T}=this.projectionDelta;l.transformOrigin=`${w.origin*100}% ${T.origin*100}% 0`,p.animationValues?l.opacity=p===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:l.opacity=p===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const x in Ny){if(m[x]===void 0)continue;const{correct:P,applyTo:k,isCSSVariable:b}=Ny[x],F=y==="none"?m[x]:P(m[x],p);if(k){const U=k.length;for(let $=0;$<U;$++)l[k[$]]=F}else b?this.options.visualElement.renderState.vars[x]=F:l[x]=F}this.options.layoutId&&(l.pointerEvents=p===this?jf(c==null?void 0:c.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var c;return(c=l.currentAnimation)==null?void 0:c.stop()}),this.root.nodes.forEach(aS),this.root.sharedNodes.clear()}}}function sj(t){t.updateLayout()}function oj(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:a}=t.options,l=e.source!==t.layout.source;if(a==="size")Xr(y=>{const w=l?e.measuredBox[y]:e.layoutBox[y],T=vn(w);w.min=r[y].min,w.max=w.min+T});else if(a==="x"||a==="y"){const y=a==="x"?"y":"x";My(l?e.measuredBox[y]:e.layoutBox[y],r[y])}else HC(a,e.layoutBox,r)&&Xr(y=>{const w=l?e.measuredBox[y]:e.layoutBox[y],T=vn(r[y]);w.max=w.min+T,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+T)});const c=el();Yu(c,r,e.layoutBox);const h=el();l?Yu(h,t.applyTransform(i,!0),e.measuredBox):Yu(h,r,e.layoutBox);const p=!jC(c);let m=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:w,layout:T}=y;if(w&&T){const x=t.options.layoutAnchor||void 0,P=Ot();_d(P,e.layoutBox,w.layoutBox,x);const k=Ot();_d(k,r,T.layoutBox,x),$C(P,k)||(m=!0),y.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=P,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:h,layoutDelta:c,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function aj(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function lj(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function uj(t){t.clearSnapshot()}function aS(t){t.clearMeasurements()}function cj(t){t.isLayoutDirty=!0,t.updateLayout()}function lS(t){t.isLayoutDirty=!1}function hj(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function fj(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function uS(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function dj(t){t.resolveTargetDelta()}function pj(t){t.calcProjection()}function mj(t){t.resetSkewAndRotation()}function gj(t){t.removeLeadSnapshot()}function cS(t,e,n){t.translate=ht(e.translate,0,n),t.scale=ht(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function hS(t,e,n,r){t.min=ht(e.min,n.min,r),t.max=ht(e.max,n.max,r)}function yj(t,e,n,r){hS(t.x,e.x,n.x,r),hS(t.y,e.y,n.y,r)}function vj(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const _j={duration:.45,ease:[.4,0,.1,1]},fS=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),dS=fS("applewebkit/")&&!fS("chrome/")?Math.round:rr;function pS(t){t.min=dS(t.min),t.max=dS(t.max)}function wj(t){pS(t.x),pS(t.y)}function HC(t,e,n){return t==="position"||t==="preserve-aspect"&&!U4(nS(e),nS(n),.2)}function Ej(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const Tj=WC({attachResizeListener:(t,e)=>hc(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Rg={current:void 0},qC=WC({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Rg.current){const t=new Tj({});t.mount(window),t.setOptions({layoutScroll:!0}),Rg.current=t}return Rg.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),c_=N.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function mS(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function Sj(...t){return e=>{let n=!1;const r=t.map(i=>{const a=mS(i,e);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():mS(t[i],null)}}}}function xj(...t){return N.useCallback(Sj(...t),t)}class Ij extends N.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(Nf(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,i=Nf(r)&&r.offsetWidth||0,a=Nf(r)&&r.offsetHeight||0,l=getComputedStyle(n),c=this.props.sizeRef.current;c.height=parseFloat(l.height),c.width=parseFloat(l.width),c.top=n.offsetTop,c.left=n.offsetLeft,c.right=i-c.width-c.left,c.bottom=a-c.height-c.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Aj({children:t,isPresent:e,anchorX:n,anchorY:r,root:i,pop:a}){var w;const l=N.useId(),c=N.useRef(null),h=N.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=N.useContext(c_),m=((w=t.props)==null?void 0:w.ref)??(t==null?void 0:t.ref),y=xj(c,m);return N.useInsertionEffect(()=>{const{width:T,height:x,top:P,left:k,right:b,bottom:F}=h.current;if(e||a===!1||!c.current||!T||!x)return;const U=n==="left"?`left: ${k}`:`right: ${b}`,$=r==="bottom"?`bottom: ${F}`:`top: ${P}`;c.current.dataset.motionPopId=l;const H=document.createElement("style");p&&(H.nonce=p);const X=i??document.head;return X.appendChild(H),H.sheet&&H.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${T}px !important;
            height: ${x}px !important;
            ${U}px !important;
            ${$}px !important;
          }
        `),()=>{var C;(C=c.current)==null||C.removeAttribute("data-motion-pop-id"),X.contains(H)&&X.removeChild(H)}},[e]),V.jsx(Ij,{isPresent:e,childRef:c,sizeRef:h,pop:a,children:a===!1?t:N.cloneElement(t,{ref:y})})}const Cj=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:l,anchorX:c,anchorY:h,root:p})=>{const m=$v(kj),y=N.useId();let w=!0,T=N.useMemo(()=>(w=!1,{id:y,initial:e,isPresent:n,custom:i,onExitComplete:x=>{m.set(x,!0);for(const P of m.values())if(!P)return;r&&r()},register:x=>(m.set(x,!1),()=>m.delete(x))}),[n,m,r]);return a&&w&&(T={...T}),N.useMemo(()=>{m.forEach((x,P)=>m.set(P,!1))},[n]),N.useEffect(()=>{!n&&!m.size&&r&&r()},[n]),t=V.jsx(Aj,{pop:l==="popLayout",isPresent:n,anchorX:c,anchorY:h,root:p,children:t}),V.jsx(ap.Provider,{value:T,children:t})};function kj(){return new Map}function KC(t=!0){const e=N.useContext(ap);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,a=N.useId();N.useEffect(()=>{if(t)return i(a)},[t]);const l=N.useCallback(()=>t&&r&&r(a),[a,r,t]);return!n&&r?[!1,l]:[!0]}const ff=t=>t.key||"";function gS(t){const e=[];return N.Children.forEach(t,n=>{N.isValidElement(n)&&e.push(n)}),e}const h_=({children:t,custom:e,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a="sync",propagate:l=!1,anchorX:c="left",anchorY:h="top",root:p})=>{const[m,y]=KC(l),w=N.useMemo(()=>gS(t),[t]),T=l&&!m?[]:w.map(ff),x=N.useRef(!0),P=N.useRef(w),k=$v(()=>new Map),b=N.useRef(new Set),[F,U]=N.useState(w),[$,H]=N.useState(w);wA(()=>{x.current=!1,P.current=w;for(let I=0;I<$.length;I++){const R=ff($[I]);T.includes(R)?(k.delete(R),b.current.delete(R)):k.get(R)!==!0&&k.set(R,!1)}},[$,T.length,T.join("-")]);const X=[];if(w!==F){let I=[...w];for(let R=0;R<$.length;R++){const D=$[R],O=ff(D);T.includes(O)||(I.splice(R,0,D),X.push(D))}return a==="wait"&&X.length&&(I=X),H(gS(I)),U(w),null}const{forceRender:C}=N.useContext(jv);return V.jsx(V.Fragment,{children:$.map(I=>{const R=ff(I),D=l&&!m?!1:w===$||T.includes(R),O=()=>{if(b.current.has(R))return;if(k.has(R))b.current.add(R),k.set(R,!0);else return;let B=!0;k.forEach(M=>{M||(B=!1)}),B&&(C==null||C(),H(P.current),l&&(y==null||y()),r&&r())};return V.jsx(Cj,{isPresent:D,initial:!x.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:a,root:p,onExitComplete:D?void 0:O,anchorX:c,anchorY:h,children:I},R)})})},GC=N.createContext({strict:!1}),yS={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let vS=!1;function Pj(){if(vS)return;const t={};for(const e in yS)t[e]={isEnabled:n=>yS[e].some(r=>!!n[r])};SC(t),vS=!0}function QC(){return Pj(),d4()}function Rj(t){const e=QC();for(const n in t)e[n]={...e[n],...t[n]};SC(e)}const bj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function wd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||bj.has(t)}let YC=t=>!wd(t);function Dj(t){typeof t=="function"&&(YC=e=>e.startsWith("on")?!wd(e):t(e))}try{Dj(require("@emotion/is-prop-valid").default)}catch{}function Vj(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||tn(t[i])||(YC(i)||n===!0&&wd(i)||!e&&!wd(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}const hp=N.createContext({});function Nj(t,e){if(cp(t)){const{initial:n,animate:r}=t;return{initial:n===!1||cc(n)?n:void 0,animate:cc(r)?r:void 0}}return t.inherit!==!1?e:{}}function Mj(t){const{initial:e,animate:n}=Nj(t,N.useContext(hp));return N.useMemo(()=>({initial:e,animate:n}),[_S(e),_S(n)])}function _S(t){return Array.isArray(t)?t.join(" "):t}const f_=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function XC(t,e,n){for(const r in e)!tn(e[r])&&!RC(r,n)&&(t[r]=e[r])}function Lj({transformTemplate:t},e){return N.useMemo(()=>{const n=f_();return l_(n,e,t),Object.assign({},n.vars,n.style)},[e])}function Oj(t,e){const n=t.style||{},r={};return XC(r,n,t),Object.assign(r,Lj(t,e)),r}function Fj(t,e){const n={},r=Oj(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const JC=()=>({...f_(),attrs:{}});function jj(t,e,n,r){const i=N.useMemo(()=>{const a=JC();return bC(a,e,VC(r),t.transformTemplate,t.style),{...a.attrs,style:{...a.style}}},[e]);if(t.style){const a={};XC(a,t.style,t),i.style={...a,...i.style}}return i}const $j=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function d_(t){return typeof t!="string"||t.includes("-")?!1:!!($j.indexOf(t)>-1||/[A-Z]/u.test(t))}function Uj(t,e,n,{latestValues:r},i,a=!1,l){const h=(l??d_(t)?jj:Fj)(e,r,i,t),p=Vj(e,typeof t=="string",a),m=t!==N.Fragment?{...p,...h,ref:n}:{},{children:y}=e,w=N.useMemo(()=>tn(y)?y.get():y,[y]);return N.createElement(t,{...m,children:w})}function zj({scrapeMotionValuesFromProps:t,createRenderState:e},n,r,i){return{latestValues:Bj(n,r,i,t),renderState:e()}}function Bj(t,e,n,r){const i={},a=r(t,{});for(const w in a)i[w]=jf(a[w]);let{initial:l,animate:c}=t;const h=cp(t),p=EC(t);e&&p&&!h&&t.inherit!==!1&&(l===void 0&&(l=e.initial),c===void 0&&(c=e.animate));let m=n?n.initial===!1:!1;m=m||l===!1;const y=m?c:l;if(y&&typeof y!="boolean"&&!up(y)){const w=Array.isArray(y)?y:[y];for(let T=0;T<w.length;T++){const x=e_(t,w[T]);if(x){const{transitionEnd:P,transition:k,...b}=x;for(const F in b){let U=b[F];if(Array.isArray(U)){const $=m?U.length-1:0;U=U[$]}U!==null&&(i[F]=U)}for(const F in P)i[F]=P[F]}}}return i}const ZC=t=>(e,n)=>{const r=N.useContext(hp),i=N.useContext(ap),a=()=>zj(t,e,r,i);return n?a():$v(a)},Wj=ZC({scrapeMotionValuesFromProps:u_,createRenderState:f_}),Hj=ZC({scrapeMotionValuesFromProps:NC,createRenderState:JC}),qj=Symbol.for("motionComponentSymbol");function Kj(t,e,n){const r=N.useRef(n);N.useInsertionEffect(()=>{r.current=n});const i=N.useRef(null);return N.useCallback(a=>{var c;a&&((c=t.onMount)==null||c.call(t,a));const l=r.current;if(typeof l=="function")if(a){const h=l(a);typeof h=="function"&&(i.current=h)}else i.current?(i.current(),i.current=null):l(a);else l&&(l.current=a);e&&(a?e.mount(a):e.unmount())},[e])}const ek=N.createContext({});function qa(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Gj(t,e,n,r,i,a){var U,$;const{visualElement:l}=N.useContext(hp),c=N.useContext(GC),h=N.useContext(ap),p=N.useContext(c_),m=p.reducedMotion,y=p.skipAnimations,w=N.useRef(null),T=N.useRef(!1);r=r||c.renderer,!w.current&&r&&(w.current=r(t,{visualState:e,parent:l,props:n,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m,skipAnimations:y,isSVG:a}),T.current&&w.current&&(w.current.manuallyAnimateOnMount=!0));const x=w.current,P=N.useContext(ek);x&&!x.projection&&i&&(x.type==="html"||x.type==="svg")&&Qj(w.current,n,i,P);const k=N.useRef(!1);N.useInsertionEffect(()=>{x&&k.current&&x.update(n,h)});const b=n[lC],F=N.useRef(!!b&&typeof window<"u"&&!((U=window.MotionHandoffIsComplete)!=null&&U.call(window,b))&&(($=window.MotionHasOptimisedAnimation)==null?void 0:$.call(window,b)));return wA(()=>{T.current=!0,x&&(k.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),x.scheduleRenderMicrotask(),F.current&&x.animationState&&x.animationState.animateChanges())}),N.useEffect(()=>{x&&(!F.current&&x.animationState&&x.animationState.animateChanges(),F.current&&(queueMicrotask(()=>{var H;(H=window.MotionHandoffMarkAsComplete)==null||H.call(window,b)}),F.current=!1),x.enteringChildren=void 0)}),x}function Qj(t,e,n,r){const{layoutId:i,layout:a,drag:l,dragConstraints:c,layoutScroll:h,layoutRoot:p,layoutAnchor:m,layoutCrossfade:y}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:tk(t.parent)),t.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!l||c&&qa(c),visualElement:t,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:h,layoutRoot:p,layoutAnchor:m})}function tk(t){if(t)return t.options.allowProjection!==!1?t.projection:tk(t.parent)}function bg(t,{forwardMotionProps:e=!1,type:n}={},r,i){r&&Rj(r);const a=n?n==="svg":d_(t),l=a?Hj:Wj;function c(p,m){let y;const w={...N.useContext(c_),...p,layoutId:Yj(p)},{isStatic:T}=w,x=Mj(p),P=l(p,T);if(!T&&typeof window<"u"){Xj();const k=Jj(w);y=k.MeasureLayout,x.visualElement=Gj(t,P,w,i,k.ProjectionNode,a)}return V.jsxs(hp.Provider,{value:x,children:[y&&x.visualElement?V.jsx(y,{visualElement:x.visualElement,...w}):null,Uj(t,p,Kj(P,x.visualElement,m),P,T,e,a)]})}c.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const h=N.forwardRef(c);return h[qj]=t,h}function Yj({layoutId:t}){const e=N.useContext(jv).id;return e&&t!==void 0?e+"-"+t:t}function Xj(t,e){N.useContext(GC).strict}function Jj(t){const e=QC(),{drag:n,layout:r}=e;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(t)||r!=null&&r.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function Zj(t,e){if(typeof Proxy>"u")return bg;const n=new Map,r=(a,l)=>bg(a,l,t,e),i=(a,l)=>r(a,l);return new Proxy(i,{get:(a,l)=>l==="create"?r:(n.has(l)||n.set(l,bg(l,void 0,t,e)),n.get(l))})}const e5=(t,e)=>e.isSVG??d_(t)?new R4(e):new x4(e,{allowProjection:t!==N.Fragment});class t5 extends Qs{constructor(e){super(e),e.animationState||(e.animationState=M4(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();up(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let n5=0;class r5 extends Qs{constructor(){super(...arguments),this.id=n5++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:l,custom:c}=this.node.getProps();if(typeof l=="string"){const h=Fo(this.node,l,c);if(h){const{transition:p,transitionEnd:m,...y}=h;for(const w in y)(a=this.node.getValue(w))==null||a.jump(y[w])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const i5={animation:{Feature:t5},exit:{Feature:r5}};function kc(t){return{point:{x:t.pageX,y:t.pageY}}}const s5=t=>e=>i_(e)&&t(e,kc(e));function Xu(t,e,n,r){return hc(t,e,s5(n),r)}const nk=({current:t})=>t?t.ownerDocument.defaultView:null,wS=(t,e)=>Math.abs(t-e);function o5(t,e){const n=wS(t.x,e.x),r=wS(t.y,e.y);return Math.sqrt(n**2+r**2)}const ES=new Set(["auto","scroll"]);class rk{constructor(e,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:a=!1,distanceThreshold:l=3,element:c}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=T=>{this.handleScroll(T.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=df(this.lastRawMoveEventInfo,this.transformPagePoint));const T=Dg(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,P=o5(T.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!P)return;const{point:k}=T,{timestamp:b}=Jt;this.history.push({...k,timestamp:b});const{onStart:F,onMove:U}=this.handlers;x||(F&&F(this.lastMoveEvent,T),this.startEvent=this.lastMoveEvent),U&&U(this.lastMoveEvent,T)},this.handlePointerMove=(T,x)=>{this.lastMoveEvent=T,this.lastRawMoveEventInfo=x,this.lastMoveEventInfo=df(x,this.transformPagePoint),rt.update(this.updatePoint,!0)},this.handlePointerUp=(T,x)=>{this.end();const{onEnd:P,onSessionEnd:k,resumeAnimation:b}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const F=Dg(T.type==="pointercancel"?this.lastMoveEventInfo:df(x,this.transformPagePoint),this.history);this.startEvent&&P&&P(T,F),k&&k(T,F)},!i_(e))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=l,this.contextWindow=i||window;const h=kc(e),p=df(h,this.transformPagePoint),{point:m}=p,{timestamp:y}=Jt;this.history=[{...m,timestamp:y}];const{onSessionStart:w}=n;w&&w(e,Dg(p,this.history)),this.removeListeners=Ic(Xu(this.contextWindow,"pointermove",this.handlePointerMove),Xu(this.contextWindow,"pointerup",this.handlePointerUp),Xu(this.contextWindow,"pointercancel",this.handlePointerUp)),c&&this.startScrollTracking(c)}startScrollTracking(e){let n=e.parentElement;for(;n;){const r=getComputedStyle(n);(ES.has(r.overflowX)||ES.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const r=e===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:i.x-n.x,y:i.y-n.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,i),rt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Us(this.updatePoint)}}function df(t,e){return e?{point:e(t.point)}:t}function TS(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Dg({point:t},e){return{point:t,delta:TS(t,ik(e)),offset:TS(t,a5(e)),velocity:l5(e,.1)}}function a5(t){return t[0]}function ik(t){return t[t.length-1]}function l5(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=ik(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>Un(e)));)n--;if(!r)return{x:0,y:0};r===t[0]&&t.length>2&&i.timestamp-r.timestamp>Un(e)*2&&(r=t[1]);const a=nr(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const l={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function u5(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?ht(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?ht(n,t,r.max):Math.min(t,n)),t}function SS(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function c5(t,{top:e,left:n,bottom:r,right:i}){return{x:SS(t.x,n,i),y:SS(t.y,e,r)}}function xS(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function h5(t,e){return{x:xS(t.x,e.x),y:xS(t.y,e.y)}}function f5(t,e){let n=.5;const r=vn(t),i=vn(e);return i>r?n=lc(e.min,e.max-r,t.min):r>i&&(n=lc(t.min,t.max-i,e.min)),ai(0,1,n)}function d5(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ly=.35;function p5(t=Ly){return t===!1?t=0:t===!0&&(t=Ly),{x:IS(t,"left","right"),y:IS(t,"top","bottom")}}function IS(t,e,n){return{min:AS(t,e),max:AS(t,n)}}function AS(t,e){return typeof t=="number"?t:t[e]||0}const m5=new WeakMap;class g5{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ot(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const a=y=>{n&&this.snapToCursor(kc(y).point),this.stopAnimation()},l=(y,w)=>{const{drag:T,dragPropagation:x,onDragStart:P}=this.getProps();if(T&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=BF(T),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xr(b=>{let F=this.getAxisMotionValue(b).get()||0;if(ni.test(F)){const{projection:U}=this.visualElement;if(U&&U.layout){const $=U.layout.layoutBox[b];$&&(F=vn($)*(parseFloat(F)/100))}}this.originPoint[b]=F}),P&&rt.update(()=>P(y,w),!1,!0),Cy(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},c=(y,w)=>{this.latestPointerEvent=y,this.latestPanInfo=w;const{dragPropagation:T,dragDirectionLock:x,onDirectionLock:P,onDrag:k}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:b}=w;if(x&&this.currentDirection===null){this.currentDirection=v5(b),this.currentDirection!==null&&P&&P(this.currentDirection);return}this.updateAxis("x",w.point,b),this.updateAxis("y",w.point,b),this.visualElement.render(),k&&rt.update(()=>k(y,w),!1,!0)},h=(y,w)=>{this.latestPointerEvent=y,this.latestPanInfo=w,this.stop(y,w),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>{const{dragSnapToOrigin:y}=this.getProps();(y||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new rk(e,{onSessionStart:a,onStart:l,onMove:c,onSessionEnd:h,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:nk(this.visualElement),element:this.visualElement.current})}stop(e,n){const r=e||this.latestPointerEvent,i=n||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!i||!r)return;const{velocity:l}=i;this.startAnimation(l);const{onDragEnd:c}=this.getProps();c&&rt.postRender(()=>c(r,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!pf(e,i,this.currentDirection))return;const a=this.getAxisMotionValue(e);let l=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(l=u5(l,this.constraints[e],this.elastic[e])),a.set(l)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,i=this.constraints;e&&qa(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=c5(r.layoutBox,e):this.constraints=!1,this.elastic=p5(n),i!==this.constraints&&!qa(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Xr(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=d5(r.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!qa(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=v4(r,i.root,this.visualElement.getTransformPagePoint());let l=h5(i.layout.layoutBox,a);if(n){const c=n(m4(l));this.hasMutatedConstraints=!!c,c&&(l=IC(c))}return l}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:l,onDragTransitionEnd:c}=this.getProps(),h=this.constraints||{},p=Xr(m=>{if(!pf(m,n,this.currentDirection))return;let y=h[m]||{};(l===!0||l===m)&&(y={min:0,max:0});const w=i?200:1e6,T=i?40:1e7,x={type:"inertia",velocity:r?e[m]:0,bounceStiffness:w,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...a,...y};return this.startAxisValueAnimation(m,x)});return Promise.all(p).then(c)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return Cy(this.visualElement,e),r.start(Zv(e,r,0,n,this.visualElement,!1))}stopAnimation(){Xr(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Xr(n=>{const{drag:r}=this.getProps();if(!pf(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:l,max:c}=i.layout.layoutBox[n],h=a.get()||0;a.set(e[n]-ht(l,c,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!qa(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Xr(l=>{const c=this.getAxisMotionValue(l);if(c&&this.constraints!==!1){const h=c.get();i[l]=f5({min:h,max:h},this.constraints[l])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Xr(l=>{if(!pf(l,e,null))return;const c=this.getAxisMotionValue(l),{min:h,max:p}=this.constraints[l];c.set(ht(h,p,i[l]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;m5.set(this.visualElement,this);const e=this.visualElement.current,n=Xu(e,"pointerdown",p=>{const{drag:m,dragListener:y=!0}=this.getProps(),w=p.target,T=w!==e&&QF(w);m&&y&&!T&&this.start(p)});let r;const i=()=>{const{dragConstraints:p}=this.getProps();qa(p)&&p.current&&(this.constraints=this.resolveRefConstraints(),r||(r=y5(e,p.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,l=a.addEventListener("measure",i);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),rt.read(i);const c=hc(window,"resize",()=>this.scalePositionWithinConstraints()),h=a.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(Xr(y=>{const w=this.getAxisMotionValue(y);w&&(this.originPoint[y]+=p[y].translate,w.set(w.get()+p[y].translate))}),this.visualElement.render())});return()=>{c(),n(),l(),h&&h(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:l=Ly,dragMomentum:c=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:l,dragMomentum:c}}}function CS(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function y5(t,e,n){const r=NT(t,CS(n)),i=NT(e,CS(n));return()=>{r(),i()}}function pf(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function v5(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class _5 extends Qs{constructor(e){super(e),this.removeGroupControls=rr,this.removeListeners=rr,this.controls=new g5(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||rr}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Vg=t=>(e,n)=>{t&&rt.update(()=>t(e,n),!1,!0)};class w5 extends Qs{constructor(){super(...arguments),this.removePointerDownListener=rr}onPointerDown(e){this.session=new rk(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:nk(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Vg(e),onStart:Vg(n),onMove:Vg(r),onEnd:(a,l)=>{delete this.session,i&&rt.postRender(()=>i(a,l))}}}mount(){this.removePointerDownListener=Xu(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ng=!1;class E5 extends N.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=e;a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),Ng&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),$f.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,{projection:l}=r;return l&&(l.isPresent=a,e.layoutDependency!==n&&l.setOptions({...l.options,layoutDependency:n}),Ng=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==a?l.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?l.promote():l.relegate()||rt.postRender(()=>{const c=l.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),r_.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;Ng=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function sk(t){const[e,n]=KC(),r=N.useContext(jv);return V.jsx(E5,{...t,layoutGroup:r,switchLayoutGroup:N.useContext(ek),isPresent:e,safeToRemove:n})}const T5={pan:{Feature:w5},drag:{Feature:_5,ProjectionNode:qC,MeasureLayout:sk}};function kS(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,a=r[i];a&&rt.postRender(()=>a(e,kc(e)))}class S5 extends Qs{mount(){const{current:e}=this.node;e&&(this.unmount=HF(e,(n,r)=>(kS(this.node,r,"Start"),i=>kS(this.node,i,"End"))))}unmount(){}}class x5 extends Qs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ic(hc(this.node.current,"focus",()=>this.onFocus()),hc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function PS(t,e,n){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),a=r[i];a&&rt.postRender(()=>a(e,kc(e)))}class I5 extends Qs{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=XF(e,(i,a)=>(PS(this.node,a,"Start"),(l,{success:c})=>PS(this.node,l,c?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Oy=new WeakMap,Mg=new WeakMap,A5=t=>{const e=Oy.get(t.target);e&&e(t)},C5=t=>{t.forEach(A5)};function k5({root:t,...e}){const n=t||document;Mg.has(n)||Mg.set(n,{});const r=Mg.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(C5,{root:t,...e})),r[i]}function P5(t,e,n){const r=k5(e);return Oy.set(t,n),r.observe(t),()=>{Oy.delete(t),r.unobserve(t)}}const R5={some:0,all:1};class b5 extends Qs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var h;(h=this.stopObserver)==null||h.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=e,l={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:R5[i]},c=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,a&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:w}=this.node.getProps(),T=m?y:w;T&&T(p)};this.stopObserver=P5(this.node.current,l,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(D5(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function D5({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const V5={inView:{Feature:b5},tap:{Feature:I5},focus:{Feature:x5},hover:{Feature:S5}},N5={layout:{ProjectionNode:qC,MeasureLayout:sk}},M5={...i5,...V5,...T5,...N5},lr=Zj(M5,e5),Rs=ie.p`
  font-family: ${t=>t.theme.fonts.primary};
  font-size: ${({fontSize:t,theme:e})=>{const n=t;return e.fontSize[n]||t||e.fontSize.base}};
  font-weight: ${({fontWeight:t})=>t||"700"};
  color: ${({color:t,theme:e})=>{const n=t;return e.colors[n]||t||e.colors.textPrimary}};
  text-align: ${({textAlign:t})=>t||"center"};
  margin: ${({margin:t})=>t||"0"};
  padding: ${({padding:t})=>t||"0"};
  width: ${({width:t})=>t||"100%"};
  line-height: 1.5;
  display: block;

  @media (max-width: 768px) {
    font-size: ${({mobileFontSize:t,fontSize:e,theme:n})=>{const r=t,i=e;return n.fontSize[r]||n.fontSize[i]||t||e||n.fontSize.sm}};
  }
`,L5=ie(lr.button)`
  padding: ${t=>{switch(t.$size){case"sm":return"10px 20px";case"lg":return"20px 40px";case"xl":return"24px 48px";default:return"16px 32px"}}};
  width: ${t=>t.$width||"auto"};
  min-width: ${t=>t.$minWidth||"auto"};
  font-size: ${t=>{if(t.$size==="sm")return"0.85rem";if(t.$size==="lg")return"1.1rem";if(t.$size==="xl")return"1.25rem";const e=t.$fontSize;return t.theme.fontSize[e]||t.$fontSize||t.theme.fontSize.md}};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: ${t=>{switch(t.$variant){case"success":return"#10B981";case"accent":return"#F59E0B";case"primary":return t.theme.colors.primary;case"secondary":return t.theme.colors.primary+"10";case"sub":return"#F0F0F0";default:return t.theme.colors.primary}}};
  color: ${t=>{switch(t.$variant){case"secondary":return t.theme.colors.primary;case"sub":return"#999";default:return"white"}}};
  border: ${t=>t.$variant==="secondary"?`2px solid ${t.theme.colors.primary}40`:"none"};
  border-radius: 24px;
  cursor: pointer;
  font-family: ${t=>t.theme.fonts.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  white-space: nowrap;
  outline: none;
  position: relative;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${t=>t.$variant==="primary"?t.theme.shadows.md:"none"};

  &:hover {
    background: ${t=>t.$variant==="secondary"?t.theme.colors.primary+"15":t.theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${t=>t.theme.shadows.lg};
  }

  &:active {
    transform: translateY(0);
  }
`,fc=({title:t,onClick:e,isActive:n=!0,variant:r="primary",children:i,size:a,width:l,minWidth:c,fontSize:h,icon:p,disabled:m,type:y="button"})=>V.jsxs(L5,{"data-testid":"comp-kid-button",$variant:n?r:"sub",$size:a,$width:l,$minWidth:c,$fontSize:h,onClick:e,disabled:m,type:y,style:{opacity:m?.6:1,pointerEvents:m?"none":"auto"},whileHover:m?{}:{scale:1.02,y:-1},whileTap:{scale:.98},initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:400,damping:20},children:[p,t,i]});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RS=t=>{const e=F5(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Lg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},ak=N.createContext({});function R7({children:t,size:e,color:n,strokeWidth:r,absoluteStrokeWidth:i,className:a}){const l=N.useMemo(()=>({size:e,color:n,strokeWidth:r,absoluteStrokeWidth:i,className:a}),[e,n,r,i,a]);return N.createElement(ak.Provider,{value:l},t)}const $5=()=>N.useContext(ak),U5=N.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:a,iconNode:l,...c},h)=>{const{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:y=!1,color:w="currentColor",className:T=""}=$5()??{},x=r??y?Number(n??m)*24/Number(e??p):n??m;return N.createElement("svg",{ref:h,...Lg,width:e??p??Lg.width,height:e??p??Lg.height,stroke:t??w,strokeWidth:x,className:ok("lucide",T,i),...!a&&!j5(c)&&{"aria-hidden":"true"},...c},[...l.map(([P,k])=>N.createElement(P,k)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(t,e)=>{const n=N.forwardRef(({className:r,...i},a)=>N.createElement(U5,{ref:a,iconNode:e,className:ok(`lucide-${O5(RS(t))}`,`lucide-${t}`,r),...i}));return n.displayName=RS(t),n};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=[["path",{d:"M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1",key:"2nz4b"}],["path",{d:"M12 6a2 2 0 0 1 2 2",key:"7y7d82"}],["path",{d:"M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0",key:"vqb5s3"}]],B5=Vt("balloon",z5);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],H5=Vt("chevron-left",W5);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],K5=Vt("chevron-right",q5);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Q5=Vt("circle-alert",G5);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],X5=Vt("download",Y5);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Z5=Vt("ellipsis-vertical",J5);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e$=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],t$=Vt("history",e$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n$=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],r$=Vt("loader-circle",n$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i$=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],s$=Vt("log-out",i$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o$=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],a$=Vt("menu",o$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l$=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],u$=Vt("moon",l$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c$=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],lk=Vt("share-2",c$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h$=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],f$=Vt("sun",h$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d$=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],p$=Vt("trophy",d$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m$=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],mf=Vt("type",m$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g$=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],uk=Vt("user",g$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y$=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],v$=Vt("volume-2",y$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _$=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],w$=Vt("volume-x",_$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E$=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],p_=Vt("x",E$);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T$=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ck=Vt("zap",T$),S$=ie(lr.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`,x$=ie(lr.div)`
  background: ${t=>t.theme.colors.surface};
  padding: 40px;
  border-radius: 32px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  border: 4px solid ${t=>t.theme.colors.primary}20;
`,I$=ie.div`
  width: 80px;
  height: 80px;
  background: ${t=>t.theme.colors.primary}15;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 24px;
  color: ${t=>t.theme.colors.primary};
`,A$=ie.input.attrs({onFocus:t=>{setTimeout(()=>{t.target.scrollIntoView({behavior:"smooth",block:"center"})},300)}})`
  width: 100%;
  padding: 16px 24px;
  border-radius: 16px;
  border: 3px solid ${t=>t.theme.colors.primary}20;
  font-family: ${t=>t.theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  margin: 24px 0;
  outline: none;
  transition: all 0.2s ease;
  background: ${t=>t.theme.colors.surfaceVariant};
  color: ${t=>t.theme.colors.textPrimary};

  &:focus {
    border-color: ${t=>t.theme.colors.primary};
    box-shadow: 0 0 0 4px ${t=>t.theme.colors.primary}10;
  }

  &::placeholder {
    color: #ccc;
  }
`,hk=({onComplete:t})=>{const[e,n]=N.useState(""),r=qd(),i=a=>{a==null||a.preventDefault(),e.trim()&&(r(pM(e.trim())),t())};return V.jsx(h_,{children:V.jsx(S$,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:V.jsxs(x$,{initial:{scale:.9,y:20,opacity:0},animate:{scale:1,y:0,opacity:1},transition:{type:"spring",damping:25,stiffness:300},children:[V.jsx(I$,{children:V.jsx(uk,{size:40})}),V.jsx(Rs,{fontSize:"xl",color:"primary",fontWeight:"bold",children:"Hi there!"}),V.jsx(Rs,{fontSize:"md",color:"textSecondary",margin:"8px 0 0",children:"What is your name?"}),V.jsxs("form",{onSubmit:i,children:[V.jsx(A$,{autoFocus:!0,placeholder:"Enter your name...",value:e,onChange:a=>n(a.target.value),maxLength:20}),V.jsx(fc,{title:"Start Learning! 🚀",onClick:i,variant:"primary",width:"100%",isActive:e.trim().length>0})]})]})})})},m_={en:{com_score:"Score",com_streak:"Streak",com_tryAgain:"Try Again",com_home:"Home",com_back:"Back",com_next:"Next",com_finish:"Finish",com_congrats:"Congratulations!",com_wellDone:"Well Done!",com_claimCertificate:"Claim Certificate 🏆",com_backToScore:"Back to Score",com_reviewAnswers:"Review Answers",com_getCertificate:"Get Certificate",com_goodEffort:"Good effort! 💪",com_genius:"You're a Genius! 🎉",com_masteredCurriculum:"You've mastered the curriculum! Your brain is officially a supercomputer.",com_keepPracticing:"Keep practicing and you'll get a perfect score next time!",com_testReview:"Test Review",com_seeWhatLearned:"See what you learned today!",com_yourAnswer:"Your answer:",com_correctAnswer:"Correct answer:",com_operation:"Operation",com_difficulty:"Difficulty",com_level:"Level",com_readyForTest:"Ready for the Big Test? 🏆",com_masterTryTrophy:"Once you master these sums, try the 'Math Hero' test to win a trophy!",com_checkAnswer:"Check Answer",com_allowDecimals:"Decimal Results",com_allowNegative:"Allow Negative Numbers",com_showRemainder:"Show Remainder",com_hint:"Need a hint?",com_easyWords:"Easy Words",com_mediumWords:"Medium Words",com_hardWords:"Hard Words",com_easy:"Easy",com_medium:"Medium",com_hard:"Hard",com_time:"Time",diff_beginner:"Beginner",diff_explorer:"Explorer",diff_achiever:"Achiever",diff_master:"Master",diff_elite:"Elite",nav_updateName:"Update Name",nav_setProgress:"Set Progress",nav_darkMode:"Dark Mode",nav_lightMode:"Light Mode",nav_fontSize:"Font Size",nav_muteSound:"Mute Sound",nav_unmuteSound:"Unmute Sound",nav_small:"Small",nav_medium:"Medium",nav_large:"Large",dash_welcome:"Hi",dash_readyToLearn:"Ready to learn something new today?",dash_english:"English",dash_hindi:"Hindi",dash_math:"Math",dash_logic:"Logic",dash_learn:"Learn",dash_practice:"Practice",dash_test:"Tests",math_mathMagic:"Math Magic",math_mathHero:"Math Hero",math_sorting:"Sorting",math_addition:"Addition",math_subtraction:"Subtraction",math_multiplication:"Multiplication",math_division:"Division",math_countingDesc:"Master numbers with fun addition and subtraction!",math_biggestNumber:"Tap the biggest number!",math_smallestNumber:"Tap the smallest number!",math_solveMath:"Solve the math!",math_sortAsc:"Sort these numbers from Smallest to Biggest!",math_sortDesc:"Sort these numbers from Biggest to Smallest!",eng_spellingHero:"Spelling Hero",eng_missingLetters:"Missing Letters",eng_listenAndFind:"Listen and Find",eng_tapTheWord:"Tap the word you hear!",eng_chooseMissing:"Choose the missing letter!",eng_tapSpeaker:"Tap the speaker below to hear",eng_missingLettersSubtitle:"Fill in the gap to complete the word!",eng_spellingHeroPromo:"Try the Spelling Hero exam!",log_grandLogic:"Grand Logic",log_whatNext:"What comes next?",hindi_hindiLegend:"Hindi Legend",hindi_tapLetter:"Tap the letter you hear!",mst_grandMaster:"Grand Master",mst_subtitle:"Take the challenge and prove your skills!",sdk_title:"Kid Sudoku",sdk_subtitle:"Fill the grid so every row and block has numbers 1-4!",sdk_almost:"Almost! Some numbers are repeated. Check again! 💪",sdk_tryAgain:"Try again",sdk_easyHints:"Easy (8 Hints)",sdk_hardHints:"Hard (4 Hints)",sdk_puzzleLevel:"Puzzle Level",sdk_howToPlay:"How to Play",sdk_step1:"Pick a white box",sdk_step2:"Tap a number to fill it",sdk_step3:"Every 2x2 box must have 1, 2, 3, and 4!",sdk_milestoneReached:"Milestone reached! 🎉",sdk_certProgress:"Certificate Progress",sdk_moreForCert:"more for a Certificate! 🏆",stm_title:"Set Game Progress",stm_subtitle:"Adjust the streak for any activity",stm_streak:"Streak:",stm_update:"Update Progress",game_math:"Math Magic",game_spelling:"Spelling Bee",game_missing_letters:"Missing Letters",game_comparison:"Big or Small",game_sorting:"Sorting Numbers",game_sudoku:"Kid Sudoku",game_alphabet_hindi:"Hindi Letters",game_master_test:"Grand Master",fb_keepTrying:"Keep trying! 💪",fb_tryAgain:"Keep trying",fb_oops:"Oops! Try again! 😅",fb_oopsRead:"Oops! Try again",gle_title:"Big or Small?",gle_subtitle:"Compare the numbers and pick the right sign!",gle_digits9:"Numbers to 9",gle_digits99:"Numbers to 99",gle_digits999:"Numbers to 999",gle_quickTips:"Quick Tips",gle_greater:"greater",gle_less:"less",gle_equal:"equal",gle_than:"than",gle_to:"to",gle_means:"means",cert_pro:"Hooray! You're a PRO!",cert_award:"Super Duper Achievement Award",cert_belongs:"This award belongs to our amazing...",cert_legend:"For being an absolute legend in the",cert_challenge:"challenge",cert_level:"level",cert_smashed:"You've smashed it with a score of",cert_inJust:"in just",cert_keepAwesome:"Keep being awesome! 🚀✨",cert_generating:"Generating...",cert_download:"Download",cert_share:"Share",cert_copied:"Achievement link copied to clipboard! 📋",cert_failed:"Sharing failed. You can download the image instead! 😊",test_instructions:"Test Instructions",test_qCount:"10 questions total",test_selectBest:"Select the best answer",test_timeRecorded:"Time will be recorded",test_scoreForCert:"8+ score for certificate",test_start:"START TEST",test_question:"QUESTION",test_of:"OF",test_results:"Test Results",test_perfect:"Perfect Score! 🏆",test_great:"Great Job! 🌟",test_good:"Good Effort! 👍",test_keepPracticing:"Keep practicing! 💪",test_review:"Review Answers",test_playAgain:"Play Again",test_home:"Back to Home",test_targetTime:"Target Time",test_noLimit:"No Limit",test_beatenTarget:"You beat the target time! ⚡",test_timeExceeded:"Target time exceeded. Keep practicing! 🐢",test_time30s:"30s",test_time1m:"1 Min",test_time2m:"2 Min",test_time3m:"3 Min",test_time4m:"4 Min",test_time5m:"5 Min",test_timeLimitInfo:{none:"Take all the time you need",s30:"Quick Sprint",m1:"Quick Challenge",m2:"Standard Pace",m3:"Relaxed Pace",m4:"Focused Pace",m5:"Taking it Slow"},fb_incredible10:"Incredible! 10 in a row! 🌟",fb_superstar:"Incredible! 10 in a row! You are a superstar!",fb_notQuite:"Not quite, try again! 😅",fb_tryAgainShort:"Try again",tel_teluguLegend:"Telugu Legend",tel_tapLetter:"Tap the letter you hear!",tel_title:"Telugu Alphabet",tel_subtitle:"Explore the beautiful Telugu Varnasala!",tel_achulu:"Vowels (Achulu)",tel_hallulu:"Consonants (Hallulu)",wee_title:"Days of the Week",wee_subtitle:"Learn the 7 days of the week!",wee_funFact:"Fun Fact! 📅",wee_funFactDetail:"There are 7 days in a week and 52 weeks in a year!",wee_pickDay:"Pick a Day",wee_didYouKnow:"Did You Know? 🌟",wee_facts:[{emoji:"📅",fact:"There are 7 days in a week."},{emoji:"🗓️",fact:"4 weeks make 1 month."},{emoji:"📆",fact:"52 weeks make 1 year."},{emoji:"☀️",fact:"The week starts on Sunday."},{emoji:"🎉",fact:"Saturday and Sunday are the weekend!"}],enc_messages:["Good Start!","Keep Going!","Well Done!","So Smart!","Half Way!","Great Job!","Amazing!","Brilliant!","Nearly There!","Almost Done!"],enc_default:"Keep going!",dash_telugu:"Telugu",game_alphabet_telugu:"Telugu Letters"}},C$=ie(lr.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`,k$=ie(lr.div)`
  background: ${t=>t.theme.colors.surface};
  padding: 30px;
  border-radius: ${t=>t.theme.borderRadius.large};
  width: 100%;
  max-width: 450px;
  text-align: center;
  border: 4px solid ${t=>t.theme.colors.primary}20;
  position: relative;
`,P$=ie.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${t=>t.theme.colors.textSecondary};
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${t=>t.theme.borderRadius.round};
  transition: all 0.2s ease;

  &:hover {
    background: ${t=>t.theme.colors.primary}10;
    color: ${t=>t.theme.colors.primary};
  }
`,R$=ie.div`
  width: 60px;
  height: 60px;
  background: ${t=>t.theme.colors.warning}15;
  border-radius: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  color: ${t=>t.theme.colors.warning};
`,b$=ie.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`,D$=ie.select`
  width: 100%;
  padding: 12px 16px;
  border-radius: ${t=>t.theme.borderRadius.small};
  border: 2px solid ${t=>t.theme.colors.primary}20;
  font-family: ${t=>t.theme.fonts.primary};
  font-size: 1rem;
  background: ${t=>t.theme.colors.surfaceVariant};
  color: ${t=>t.theme.colors.textPrimary};
  outline: none;

  &:focus {
    border-color: ${t=>t.theme.colors.primary};
  }
`,V$=ie.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
`,N$=ie.input`
  width: 80px;
  padding: 12px;
  border-radius: ${t=>t.theme.borderRadius.small};
  border: 2px solid ${t=>t.theme.colors.primary}20;
  font-family: ${t=>t.theme.fonts.primary};
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  background: ${t=>t.theme.colors.surfaceVariant};
  color: ${t=>t.theme.colors.textPrimary};
  outline: none;

  &:focus {
    border-color: ${t=>t.theme.colors.primary};
  }
`,M$=({onClose:t})=>{var y;const e=qd(),n=m_.en,r=ti(w=>w.alphabet.gameStats),i={math:n.game_math,spelling:n.game_spelling,missing_letters:n.game_missing_letters,comparison:n.game_comparison,sorting:n.game_sorting,sudoku:n.game_sudoku,alphabet_hindi:n.game_alphabet_hindi,master_test:n.game_master_test},[a,l]=N.useState("math"),[c,h]=N.useState(((y=r.math)==null?void 0:y.streak)||0),p=w=>{var x;const T=w.target.value;l(T),h(((x=r[T])==null?void 0:x.streak)||0)},m=()=>{e(gM({gameId:a,streak:c})),t()};return V.jsx(h_,{children:V.jsx(C$,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:V.jsxs(k$,{initial:{scale:.9,y:20,opacity:0},animate:{scale:1,y:0,opacity:1},transition:{type:"spring",damping:25,stiffness:300},children:[V.jsx(P$,{onClick:t,children:V.jsx(p_,{size:20})}),V.jsx(R$,{children:V.jsx(ck,{size:30,fill:"currentColor"})}),V.jsx(Rs,{fontSize:"lg",color:"primary",fontWeight:"bold",children:n.stm_title}),V.jsx(Rs,{fontSize:"sm",color:"textSecondary",children:n.stm_subtitle}),V.jsxs(b$,{children:[V.jsx(D$,{value:a,onChange:p,children:Object.keys(i).map(w=>V.jsx("option",{value:w,children:i[w]},w))}),V.jsxs(V$,{children:[V.jsx(Rs,{fontSize:"md",fontWeight:"bold",children:n.stm_streak}),V.jsx(N$,{type:"number",min:"0",max:"999",value:c,onChange:w=>h(parseInt(w.target.value)||0)})]}),V.jsx(fc,{title:n.stm_update,onClick:m,variant:"primary",width:"100%"})]})]})})})},L$=()=>{};var bS={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},O$=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[n++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[n++],l=t[n++],c=t[n++],h=((i&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const a=t[n++],l=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return e.join("")},dk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const a=t[i],l=i+1<t.length,c=l?t[i+1]:0,h=i+2<t.length,p=h?t[i+2]:0,m=a>>2,y=(a&3)<<4|c>>4;let w=(c&15)<<2|p>>6,T=p&63;h||(T=64,l||(w=64)),r.push(n[m],n[y],n[w],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fk(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):O$(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const a=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const p=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,a==null||c==null||p==null||y==null)throw new F$;const w=a<<2|c>>4;if(r.push(w),p!==64){const T=c<<4&240|p>>2;if(r.push(T),y!==64){const x=p<<6&192|y;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class F$ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const j$=function(t){const e=fk(t);return dk.encodeByteArray(e,!0)},Ed=function(t){return j$(t).replace(/\./g,"")},pk=function(t){try{return dk.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $$(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U$=()=>$$().__FIREBASE_DEFAULTS__,z$=()=>{if(typeof process>"u"||typeof bS>"u")return;const t=bS.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},B$=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pk(t[1]);return e&&JSON.parse(e)},fp=()=>{try{return L$()||U$()||z$()||B$()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mk=t=>{var e,n;return(n=(e=fp())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},W$=t=>{const e=mk(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},gk=()=>{var t;return(t=fp())==null?void 0:t.config},yk=t=>{var e;return(e=fp())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H${constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q$(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ed(JSON.stringify(n)),Ed(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function K$(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function G$(){var e;const t=(e=fp())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Q$(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Y$(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function X$(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function J$(){const t=fn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Z$(){return!G$()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function eU(){try{return typeof indexedDB=="object"}catch{return!1}}function tU(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;e(((a=i.error)==null?void 0:a.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nU="FirebaseError";class Ui extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=nU,Object.setPrototypeOf(this,Ui.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pc.prototype.create)}}class Pc{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,a=this.errors[e],l=a?rU(a,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Ui(i,c,r)}}function rU(t,e){return t.replace(iU,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const iU=/\{\$([^}]+)}/g;function sU(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const a=t[i],l=e[i];if(DS(a)&&DS(l)){if(!Bo(a,l))return!1}else if(a!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function DS(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $u(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function Uu(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function oU(t,e){const n=new aU(t,e);return n.subscribe.bind(n)}class aU{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lU(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Og),i.error===void 0&&(i.error=Og),i.complete===void 0&&(i.complete=Og);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lU(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Og(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function vk(t){return(await fetch(t,{credentials:"include"})).ok}class Wo{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new H$;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hU(e))try{this.getOrInitializeService({instanceIdentifier:Po})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Po){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Po){return this.instances.has(e)}getOptions(e=Po){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);r===c&&l.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cU(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Po){return this.component?this.component.multipleInstances?e:Po:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cU(t){return t===Po?void 0:t}function hU(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uU(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const dU={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},pU=Oe.INFO,mU={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},gU=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=mU[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class g_{constructor(e){this.name=e,this._logLevel=pU,this._logHandler=gU,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dU[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const yU=(t,e)=>e.some(n=>t instanceof n);let VS,NS;function vU(){return VS||(VS=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _U(){return NS||(NS=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _k=new WeakMap,Fy=new WeakMap,wk=new WeakMap,Fg=new WeakMap,y_=new WeakMap;function wU(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",l)},a=()=>{n(bs(t.result)),i()},l=()=>{r(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&_k.set(n,t)}).catch(()=>{}),y_.set(e,t),e}function EU(t){if(Fy.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",l),t.removeEventListener("abort",l)},a=()=>{n(),i()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",l),t.addEventListener("abort",l)});Fy.set(t,e)}let jy={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fy.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wk.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function TU(t){jy=t(jy)}function SU(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jg(this),e,...n);return wk.set(r,e.sort?e.sort():[e]),bs(r)}:_U().includes(t)?function(...e){return t.apply(jg(this),e),bs(_k.get(this))}:function(...e){return bs(t.apply(jg(this),e))}}function xU(t){return typeof t=="function"?SU(t):(t instanceof IDBTransaction&&EU(t),yU(t,vU())?new Proxy(t,jy):t)}function bs(t){if(t instanceof IDBRequest)return wU(t);if(Fg.has(t))return Fg.get(t);const e=xU(t);return e!==t&&(Fg.set(t,e),y_.set(e,t)),e}const jg=t=>y_.get(t);function IU(t,e,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const l=indexedDB.open(t,e),c=bs(l);return r&&l.addEventListener("upgradeneeded",h=>{r(bs(l.result),h.oldVersion,h.newVersion,bs(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),c.then(h=>{a&&h.addEventListener("close",()=>a()),i&&h.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const AU=["get","getKey","getAll","getAllKeys","count"],CU=["put","add","delete","clear"],$g=new Map;function MS(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($g.get(e))return $g.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=CU.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AU.includes(n)))return;const a=async function(l,...c){const h=this.transaction(l,i?"readwrite":"readonly");let p=h.store;return r&&(p=p.index(c.shift())),(await Promise.all([p[n](...c),i&&h.done]))[0]};return $g.set(e,a),a}TU(t=>({...t,get:(e,n,r)=>MS(e,n)||t.get(e,n,r),has:(e,n)=>!!MS(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kU{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PU(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PU(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $y="@firebase/app",LS="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new g_("@firebase/app"),RU="@firebase/app-compat",bU="@firebase/analytics-compat",DU="@firebase/analytics",VU="@firebase/app-check-compat",NU="@firebase/app-check",MU="@firebase/auth",LU="@firebase/auth-compat",OU="@firebase/database",FU="@firebase/data-connect",jU="@firebase/database-compat",$U="@firebase/functions",UU="@firebase/functions-compat",zU="@firebase/installations",BU="@firebase/installations-compat",WU="@firebase/messaging",HU="@firebase/messaging-compat",qU="@firebase/performance",KU="@firebase/performance-compat",GU="@firebase/remote-config",QU="@firebase/remote-config-compat",YU="@firebase/storage",XU="@firebase/storage-compat",JU="@firebase/firestore",ZU="@firebase/ai",e9="@firebase/firestore-compat",t9="firebase",n9="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="[DEFAULT]",r9={[$y]:"fire-core",[RU]:"fire-core-compat",[DU]:"fire-analytics",[bU]:"fire-analytics-compat",[NU]:"fire-app-check",[VU]:"fire-app-check-compat",[MU]:"fire-auth",[LU]:"fire-auth-compat",[OU]:"fire-rtdb",[FU]:"fire-data-connect",[jU]:"fire-rtdb-compat",[$U]:"fire-fn",[UU]:"fire-fn-compat",[zU]:"fire-iid",[BU]:"fire-iid-compat",[WU]:"fire-fcm",[HU]:"fire-fcm-compat",[qU]:"fire-perf",[KU]:"fire-perf-compat",[GU]:"fire-rc",[QU]:"fire-rc-compat",[YU]:"fire-gcs",[XU]:"fire-gcs-compat",[JU]:"fire-fst",[e9]:"fire-fst-compat",[ZU]:"fire-vertex","fire-js":"fire-js",[t9]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new Map,i9=new Map,zy=new Map;function OS(t,e){try{t.container.addComponent(e)}catch(n){Oi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vl(t){const e=t.name;if(zy.has(e))return Oi.debug(`There were multiple attempts to register component ${e}.`),!1;zy.set(e,t);for(const n of Td.values())OS(n,t);for(const n of i9.values())OS(n,t);return!0}function v_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $n(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s9={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ds=new Pc("app","Firebase",s9);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o9{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ds.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=n9;function Ek(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Uy,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Ds.create("bad-app-name",{appName:String(i)});if(n||(n=gk()),!n)throw Ds.create("no-options");const a=Td.get(i);if(a){if(Bo(n,a.options)&&Bo(r,a.config))return a;throw Ds.create("duplicate-app",{appName:i})}const l=new fU(i);for(const h of zy.values())l.addComponent(h);const c=new o9(n,r,l);return Td.set(i,c),c}function Tk(t=Uy){const e=Td.get(t);if(!e&&t===Uy&&gk())return Ek();if(!e)throw Ds.create("no-app",{appName:t});return e}function Vs(t,e,n){let r=r9[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Oi.warn(l.join(" "));return}vl(new Wo(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a9="firebase-heartbeat-database",l9=1,dc="firebase-heartbeat-store";let Ug=null;function Sk(){return Ug||(Ug=IU(a9,l9,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(dc)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ds.create("idb-open",{originalErrorMessage:t.message})})),Ug}async function u9(t){try{const n=(await Sk()).transaction(dc),r=await n.objectStore(dc).get(xk(t));return await n.done,r}catch(e){if(e instanceof Ui)Oi.warn(e.message);else{const n=Ds.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Oi.warn(n.message)}}}async function FS(t,e){try{const r=(await Sk()).transaction(dc,"readwrite");await r.objectStore(dc).put(e,xk(t)),await r.done}catch(n){if(n instanceof Ui)Oi.warn(n.message);else{const r=Ds.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Oi.warn(r.message)}}}function xk(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c9=1024,h9=30;class f9{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p9(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=jS();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>h9){const l=m9(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Oi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=jS(),{heartbeatsToSend:r,unsentEntries:i}=d9(this._heartbeatsCache.heartbeats),a=Ed(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return Oi.warn(n),""}}}function jS(){return new Date().toISOString().substring(0,10)}function d9(t,e=c9){const n=[];let r=t.slice();for(const i of t){const a=n.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),$S(n)>e){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$S(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class p9{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eU()?tU().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await u9(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return FS(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return FS(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $S(t){return Ed(JSON.stringify({version:2,heartbeats:t})).length}function m9(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g9(t){vl(new Wo("platform-logger",e=>new kU(e),"PRIVATE")),vl(new Wo("heartbeat",e=>new f9(e),"PRIVATE")),Vs($y,LS,t),Vs($y,LS,"esm2020"),Vs("fire-js","")}g9("");var y9="firebase",v9="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vs(y9,v9,"app");function Ik(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _9=Ik,Ak=new Pc("auth","Firebase",Ik());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=new g_("@firebase/auth");function w9(t,...e){Sd.logLevel<=Oe.WARN&&Sd.warn(`Auth (${Dl}): ${t}`,...e)}function Uf(t,...e){Sd.logLevel<=Oe.ERROR&&Sd.error(`Auth (${Dl}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,...e){throw w_(t,...e)}function kr(t,...e){return w_(t,...e)}function __(t,e,n){const r={..._9(),[e]:n};return new Pc("auth","Firebase",r).create(e,{appName:t.name})}function Ni(t){return __(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function E9(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&or(t,"argument-error"),__(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function w_(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ak.create(t,...e)}function Te(t,e,...n){if(!t)throw w_(e,...n)}function Ri(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Uf(e),new Error(e)}function Fi(t,e){t||Ri(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function T9(){return US()==="http:"||US()==="https:"}function US(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S9(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(T9()||Y$()||"connection"in navigator)?navigator.onLine:!0}function x9(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fi(n>e,"Short delay should be less than long delay!"),this.isMobile=K$()||X$()}get(){return S9()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t,e){Fi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ri("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ri("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ri("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I9={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A9=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C9=new Dc(3e4,6e4);function Ys(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function zi(t,e,n,r,i={}){return kk(t,i,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const c=Rc({key:t.config.apiKey,...l}).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const p={method:e,headers:h,...a};return Q$()||(p.referrerPolicy="no-referrer"),t.emulatorConfig&&bc(t.emulatorConfig.host)&&(p.credentials="include"),Ck.fetch()(await Pk(t,t.config.apiHost,n,c),p)})}async function kk(t,e,n){t._canInitEmulator=!1;const r={...I9,...e};try{const i=new P9(t),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw gf(t,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const c=a.ok?l.errorMessage:l.error.message,[h,p]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw gf(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw gf(t,"email-already-in-use",l);if(h==="USER_DISABLED")throw gf(t,"user-disabled",l);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw __(t,m,p);or(t,m)}}catch(i){if(i instanceof Ui)throw i;or(t,"network-request-failed",{message:String(i)})}}async function Vc(t,e,n,r,i={}){const a=await zi(t,e,n,r,i);return"mfaPendingCredential"in a&&or(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function Pk(t,e,n,r){const i=`${e}${n}?${r}`,a=t,l=a.config.emulator?E_(t.config,i):`${t.config.apiScheme}://${i}`;return A9.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}function k9(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class P9{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kr(this.auth,"network-request-failed")),C9.get())})}}function gf(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=kr(t,e,r);return i.customData._tokenResponse=n,i}function zS(t){return t!==void 0&&t.enterprise!==void 0}class R9{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return k9(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function b9(t,e){return zi(t,"GET","/v2/recaptchaConfig",Ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D9(t,e){return zi(t,"POST","/v1/accounts:delete",e)}async function xd(t,e){return zi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function V9(t,e=!1){const n=dn(t),r=await n.getIdToken(e),i=T_(r);Te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Ju(zg(i.auth_time)),issuedAtTime:Ju(zg(i.iat)),expirationTime:Ju(zg(i.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function zg(t){return Number(t)*1e3}function T_(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Uf("JWT malformed, contained fewer than 3 sections"),null;try{const i=pk(n);return i?JSON.parse(i):(Uf("Failed to decode base64 JWT payload"),null)}catch(i){return Uf("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function BS(t){const e=T_(t);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ui&&N9(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function N9({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M9{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ju(this.lastLoginAt),this.creationTime=Ju(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Id(t){var y;const e=t.auth,n=await t.getIdToken(),r=await _l(t,xd(e,{idToken:n}));Te(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const a=(y=i.providerUserInfo)!=null&&y.length?Rk(i.providerUserInfo):[],l=O9(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=c?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Wy(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function L9(t){const e=dn(t);await Id(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function O9(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Rk(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F9(t,e){const n=await kk(t,{},async()=>{const r=Rc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,l=await Pk(t,i,"/v1/token",`key=${a}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:r};return t.emulatorConfig&&bc(t.emulatorConfig.host)&&(h.credentials="include"),Ck.fetch()(l,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function j9(t,e){return zi(t,"POST","/v2/accounts:revokeToken",Ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):BS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const n=BS(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await F9(e,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,l=new rl;return r&&(Te(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(Te(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),a&&(Te(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rl,this.toJSON())}_performRefresh(){return Ri("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(t,e){Te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xr{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new M9(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _l(this,this.stsTokenManager.getToken(this.auth,e));return Te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return V9(this,e)}reload(){return L9(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Id(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($n(this.auth.app))return Promise.reject(Ni(this.auth));const e=await this.getIdToken();return await _l(this,D9(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,a=n.phoneNumber??void 0,l=n.photoURL??void 0,c=n.tenantId??void 0,h=n._redirectEventId??void 0,p=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:T,providerData:x,stsTokenManager:P}=n;Te(y&&P,e,"internal-error");const k=rl.fromJSON(this.name,P);Te(typeof y=="string",e,"internal-error"),_s(r,e.name),_s(i,e.name),Te(typeof w=="boolean",e,"internal-error"),Te(typeof T=="boolean",e,"internal-error"),_s(a,e.name),_s(l,e.name),_s(c,e.name),_s(h,e.name),_s(p,e.name),_s(m,e.name);const b=new xr({uid:y,auth:e,email:i,emailVerified:w,displayName:r,isAnonymous:T,photoURL:l,phoneNumber:a,tenantId:c,stsTokenManager:k,createdAt:p,lastLoginAt:m});return x&&Array.isArray(x)&&(b.providerData=x.map(F=>({...F}))),h&&(b._redirectEventId=h),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new rl;i.updateFromServerResponse(n);const a=new xr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Id(a),a}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Te(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Rk(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),c=new rl;c.updateFromIdToken(r);const h=new xr({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:l}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wy(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,p),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS=new Map;function bi(t){Fi(t instanceof Function,"Expected a class definition");let e=WS.get(t);return e?(Fi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,WS.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bk.type="NONE";const HS=bk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(t,e,n){return`firebase:${t}:${e}:${n}`}class il{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=zf(this.userKey,i.apiKey,a),this.fullPersistenceKey=zf("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await xd(this.auth,{idToken:e}).catch(()=>{});return n?xr._fromGetAccountInfoResponse(this.auth,n,e):null}return xr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new il(bi(HS),e,r);const i=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=i[0]||bi(HS);const l=zf(r,e.config.apiKey,e.name);let c=null;for(const p of n)try{const m=await p._get(l);if(m){let y;if(typeof m=="string"){const w=await xd(e,{idToken:m}).catch(()=>{});if(!w)break;y=await xr._fromGetAccountInfoResponse(e,w,m)}else y=xr._fromJSON(e,m);p!==a&&(c=y),a=p;break}}catch{}const h=i.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new il(a,e,r):(a=h[0],c&&await a._set(l,c.toJSON()),await Promise.all(n.map(async p=>{if(p!==a)try{await p._remove(l)}catch{}})),new il(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Mk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ok(e))return"Blackberry";if(Fk(e))return"Webos";if(Vk(e))return"Safari";if((e.includes("chrome/")||Nk(e))&&!e.includes("edge/"))return"Chrome";if(Lk(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dk(t=fn()){return/firefox\//i.test(t)}function Vk(t=fn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Nk(t=fn()){return/crios\//i.test(t)}function Mk(t=fn()){return/iemobile/i.test(t)}function Lk(t=fn()){return/android/i.test(t)}function Ok(t=fn()){return/blackberry/i.test(t)}function Fk(t=fn()){return/webos/i.test(t)}function S_(t=fn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $9(t=fn()){var e;return S_(t)&&!!((e=window.navigator)!=null&&e.standalone)}function U9(){return J$()&&document.documentMode===10}function jk(t=fn()){return S_(t)||Lk(t)||Fk(t)||Ok(t)||/windows phone/i.test(t)||Mk(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t,e=[]){let n;switch(t){case"Browser":n=qS(fn());break;case"Worker":n=`${qS(fn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Dl}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z9{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=a=>new Promise((l,c)=>{try{const h=e(a);l(h)}catch(h){c(h)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B9(t,e={}){return zi(t,"GET","/v2/passwordPolicy",Ys(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W9=6;class H9{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??W9,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q9{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new KS(this),this.idTokenSubscription=new KS(this),this.beforeStateQueue=new z9(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ak,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=bi(n)),this._initializationPromise=this.queue(async()=>{var r,i,a;if(!this._deleted&&(this.persistenceManager=await il.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await xd(this,{idToken:e}),r=await xr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if($n(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(a=this.redirectUser)==null?void 0:a._redirectEventId,c=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===c)&&(h!=null&&h.user)&&(r=h.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Id(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x9()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($n(this.app))return Promise.reject(Ni(this));const n=e?dn(e):null;return n&&Te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $n(this.app)?Promise.reject(Ni(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $n(this.app)?Promise.reject(Ni(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await B9(this),n=new H9(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Pc("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await j9(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&bi(e)||this._popupRedirectResolver;Te(n,this,"argument-error"),this.redirectPersistenceManager=await il.create(this,[bi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(c,this,"internal-error"),c.then(()=>{l||a(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,i);return()=>{l=!0,h()}}else{const h=e.addObserver(n);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$k(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if($n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&w9(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Xs(t){return dn(t)}class KS{constructor(e){this.auth=e,this.observer=null,this.addObserver=oU(n=>this.observer=n)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K9(t){dp=t}function Uk(t){return dp.loadJS(t)}function G9(){return dp.recaptchaEnterpriseScript}function Q9(){return dp.gapiScript}function Y9(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class X9{constructor(){this.enterprise=new J9}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class J9{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Z9="recaptcha-enterprise",zk="NO_RECAPTCHA";class e6{constructor(e){this.type=Z9,this.auth=Xs(e)}async verify(e="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,c)=>{b9(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const p=new R9(h);return a.tenantId==null?a._agentRecaptchaConfig=p:a._tenantRecaptchaConfigs[a.tenantId]=p,l(p.siteKey)}}).catch(h=>{c(h)})})}function i(a,l,c){const h=window.grecaptcha;zS(h)?h.enterprise.ready(()=>{h.enterprise.execute(a,{action:e}).then(p=>{l(p)}).catch(()=>{l(zk)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new X9().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{r(this.auth).then(c=>{if(!n&&zS(window.grecaptcha))i(c,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=G9();h.length!==0&&(h+=c),Uk(h).then(()=>{i(c,a,l)}).catch(p=>{l(p)})}}).catch(c=>{l(c)})})}}async function GS(t,e,n,r=!1,i=!1){const a=new e6(t);let l;if(i)l=zk;else try{l=await a.verify(n)}catch{l=await a.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,p=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:p,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Hy(t,e,n,r,i){var a;if((a=t._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await GS(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await GS(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(l)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t6(t,e){const n=v_(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(Bo(a,e))return i;or(i,"already-initialized")}return n.initialize({options:e})}function n6(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(bi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function r6(t,e,n){const r=Xs(t);Te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=Bk(e),{host:l,port:c}=i6(e),h=c===null?"":`:${c}`,p={url:`${a}//${l}${h}/`},m=Object.freeze({host:l,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Te(Bo(p,r.config.emulator)&&Bo(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,bc(l)?vk(`${a}//${l}${h}`):s6()}function Bk(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function i6(t){const e=Bk(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:QS(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:QS(l)}}}function QS(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function s6(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ri("not implemented")}_getIdTokenResponse(e){return Ri("not implemented")}_linkToIdToken(e,n){return Ri("not implemented")}_getReauthenticationResolver(e){return Ri("not implemented")}}async function o6(t,e){return zi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a6(t,e){return Vc(t,"POST","/v1/accounts:signInWithPassword",Ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l6(t,e){return Vc(t,"POST","/v1/accounts:signInWithEmailLink",Ys(t,e))}async function u6(t,e){return Vc(t,"POST","/v1/accounts:signInWithEmailLink",Ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends x_{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new pc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new pc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hy(e,n,"signInWithPassword",a6);case"emailLink":return l6(e,{email:this._email,oobCode:this._password});default:or(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hy(e,r,"signUpPassword",o6);case"emailLink":return u6(e,{idToken:n,email:this._email,oobCode:this._password});default:or(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t,e){return Vc(t,"POST","/v1/accounts:signInWithIdp",Ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c6="http://localhost";class Ho extends x_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ho(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):or("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=n;if(!r||!i)return null;const l=new Ho(r,i);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return sl(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,sl(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,sl(e,n)}buildRequest(){const e={requestUri:c6,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Rc(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h6(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function f6(t){const e=$u(Uu(t)).link,n=e?$u(Uu(e)).deep_link_id:null,r=$u(Uu(t)).deep_link_id;return(r?$u(Uu(r)).link:null)||r||n||e||t}class I_{constructor(e){const n=$u(Uu(e)),r=n.apiKey??null,i=n.oobCode??null,a=h6(n.mode??null);Te(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=f6(e);try{return new I_(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this.providerId=Vl.PROVIDER_ID}static credential(e,n){return pc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=I_.parseLink(n);return Te(r,"argument-error"),pc._fromEmailAndCode(e,r.code,r.tenantId)}}Vl.PROVIDER_ID="password";Vl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends A_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Nc{constructor(){super("facebook.com")}static credential(e){return Ho._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ss.credential(e.oauthAccessToken)}catch{return null}}}Ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ss.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Nc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ho._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xs.credential(n,r)}catch{return null}}}xs.GOOGLE_SIGN_IN_METHOD="google.com";xs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Nc{constructor(){super("github.com")}static credential(e){return Ho._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.GITHUB_SIGN_IN_METHOD="github.com";Is.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends Nc{constructor(){super("twitter.com")}static credential(e,n){return Ho._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return As.credential(n,r)}catch{return null}}}As.TWITTER_SIGN_IN_METHOD="twitter.com";As.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d6(t,e){return Vc(t,"POST","/v1/accounts:signUp",Ys(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const a=await xr._fromIdTokenResponse(e,r,i),l=YS(r);return new qo({user:a,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=YS(r);return new qo({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function YS(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends Ui{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ad.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ad(e,n,r,i)}}function Wk(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ad._fromErrorAndOperation(t,a,e,r):a})}async function p6(t,e,n=!1){const r=await _l(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qo._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m6(t,e,n=!1){const{auth:r}=t;if($n(r.app))return Promise.reject(Ni(r));const i="reauthenticate";try{const a=await _l(t,Wk(r,i,e,t),n);Te(a.idToken,r,"internal-error");const l=T_(a.idToken);Te(l,r,"internal-error");const{sub:c}=l;return Te(t.uid===c,r,"user-mismatch"),qo._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&or(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(t,e,n=!1){if($n(t.app))return Promise.reject(Ni(t));const r="signIn",i=await Wk(t,r,e),a=await qo._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(a.user),a}async function g6(t,e){return Hk(Xs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(t){const e=Xs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function b7(t,e,n){if($n(t.app))return Promise.reject(Ni(t));const r=Xs(t),l=await Hy(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",d6).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&qk(t),h}),c=await qo._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function D7(t,e,n){return $n(t.app)?Promise.reject(Ni(t)):g6(dn(t),Vl.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qk(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y6(t,e){return zi(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V7(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=dn(t),a={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},l=await _l(r,y6(r.auth,a));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:h})=>h==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function v6(t,e,n,r){return dn(t).onIdTokenChanged(e,n,r)}function _6(t,e,n){return dn(t).beforeAuthStateChanged(e,n)}function w6(t,e,n,r){return dn(t).onAuthStateChanged(e,n,r)}function E6(t){return dn(t).signOut()}const Cd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Cd,"1"),this.storage.removeItem(Cd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T6=1e3,S6=10;class Gk extends Kk{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jk(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,c,h)=>{this.notifyListeners(l,h)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);U9()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,S6):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},T6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gk.type="LOCAL";const x6=Gk;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk extends Kk{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qk.type="SESSION";const Yk=Qk;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I6(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new pp(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:a}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async p=>p(n.origin,a)),h=await I6(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pp.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A6{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,l;return new Promise((c,h)=>{const p=C_("",20);i.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(y){const w=y;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(m),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(w.data.response);break;default:clearTimeout(m),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:p,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(){return window}function C6(t){ri().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(){return typeof ri().WorkerGlobalScope<"u"&&typeof ri().importScripts=="function"}async function k6(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P6(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function R6(){return Xk()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk="firebaseLocalStorageDb",b6=1,kd="firebaseLocalStorage",Zk="fbase_key";class Mc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mp(t,e){return t.transaction([kd],e?"readwrite":"readonly").objectStore(kd)}function D6(){const t=indexedDB.deleteDatabase(Jk);return new Mc(t).toPromise()}function qy(){const t=indexedDB.open(Jk,b6);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kd,{keyPath:Zk})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kd)?e(r):(r.close(),await D6(),e(await qy()))})})}async function XS(t,e,n){const r=mp(t,!0).put({[Zk]:e,value:n});return new Mc(r).toPromise()}async function V6(t,e){const n=mp(t,!1).get(e),r=await new Mc(n).toPromise();return r===void 0?null:r.value}function JS(t,e){const n=mp(t,!0).delete(e);return new Mc(n).toPromise()}const N6=800,M6=3;class eP{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qy(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>M6)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pp._getInstance(R6()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await k6(),!this.activeServiceWorker)return;this.sender=new A6(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||P6()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qy();return await XS(e,Cd,"1"),await JS(e,Cd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>XS(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>V6(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>JS(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=mp(i,!1).getAll();return new Mc(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N6)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}eP.type="LOCAL";const L6=eP;new Dc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(t,e){return e?bi(e):(Te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_ extends x_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sl(e,this._buildIdpRequest())}_linkToIdToken(e,n){return sl(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return sl(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function O6(t){return Hk(t.auth,new k_(t),t.bypassAuthState)}function F6(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),m6(n,new k_(t),t.bypassAuthState)}async function j6(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),p6(n,new k_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:l,type:c}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return O6;case"linkViaPopup":case"linkViaRedirect":return j6;case"reauthViaPopup":case"reauthViaRedirect":return F6;default:or(this.auth,"internal-error")}}resolve(e){Fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $6=new Dc(2e3,1e4);async function N7(t,e,n){if($n(t.app))return Promise.reject(kr(t,"operation-not-supported-in-this-environment"));const r=Xs(t);E9(t,e,A_);const i=tP(r,n);return new No(r,"signInViaPopup",e,i).executeNotNull()}class No extends nP{constructor(e,n,r,i,a){super(e,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,No.currentPopupAction&&No.currentPopupAction.cancel(),No.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Fi(this.filter.length===1,"Popup operations only handle one event");const e=C_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(kr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,No.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$6.get())};e()}}No.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U6="pendingRedirect",Bf=new Map;class z6 extends nP{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bf.get(this.auth._key());if(!e){try{const r=await B6(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bf.set(this.auth._key(),e)}return this.bypassAuthState||Bf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function B6(t,e){const n=q6(e),r=H6(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function W6(t,e){Bf.set(t._key(),e)}function H6(t){return bi(t._redirectPersistence)}function q6(t){return zf(U6,t.config.apiKey,t.name)}async function K6(t,e,n=!1){if($n(t.app))return Promise.reject(Ni(t));const r=Xs(t),i=tP(r,e),l=await new z6(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G6=10*60*1e3;class Q6{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y6(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rP(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(kr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=G6&&this.cachedEventUids.clear(),this.cachedEventUids.has(ZS(e))}saveEventToCache(e){this.cachedEventUids.add(ZS(e)),this.lastProcessedEventTime=Date.now()}}function ZS(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rP({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y6(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rP(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X6(t,e={}){return zi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J6=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Z6=/^https?/;async function ez(t){if(t.config.emulator)return;const{authorizedDomains:e}=await X6(t);for(const n of e)try{if(tz(n))return}catch{}or(t,"unauthorized-domain")}function tz(t){const e=By(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!Z6.test(n))return!1;if(J6.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nz=new Dc(3e4,6e4);function ex(){const t=ri().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rz(t){return new Promise((e,n)=>{var i,a,l;function r(){ex(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ex(),n(kr(t,"network-request-failed"))},timeout:nz.get()})}if((a=(i=ri().gapi)==null?void 0:i.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((l=ri().gapi)!=null&&l.load)r();else{const c=Y9("iframefcb");return ri()[c]=()=>{gapi.load?r():n(kr(t,"network-request-failed"))},Uk(`${Q9()}?onload=${c}`).catch(h=>n(h))}}).catch(e=>{throw Wf=null,e})}let Wf=null;function iz(t){return Wf=Wf||rz(t),Wf}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sz=new Dc(5e3,15e3),oz="__/auth/iframe",az="emulator/auth/iframe",lz={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uz=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cz(t){const e=t.config;Te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?E_(e,az):`https://${t.config.authDomain}/${oz}`,r={apiKey:e.apiKey,appName:t.name,v:Dl},i=uz.get(t.config.apiHost);i&&(r.eid=i);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Rc(r).slice(1)}`}async function hz(t){const e=await iz(t),n=ri().gapi;return Te(n,t,"internal-error"),e.open({where:document.body,url:cz(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lz,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const l=kr(t,"network-request-failed"),c=ri().setTimeout(()=>{a(l)},sz.get());function h(){ri().clearTimeout(c),i(r)}r.ping(h).then(h,()=>{a(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fz={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dz=500,pz=600,mz="_blank",gz="http://localhost";class tx{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yz(t,e,n,r=dz,i=pz){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h={...fz,width:r.toString(),height:i.toString(),top:a,left:l},p=fn().toLowerCase();n&&(c=Nk(p)?mz:n),Dk(p)&&(e=e||gz,h.scrollbars="yes");const m=Object.entries(h).reduce((w,[T,x])=>`${w}${T}=${x},`,"");if($9(p)&&c!=="_self")return vz(e||"",c),new tx(null);const y=window.open(e||"",c,m);Te(y,t,"popup-blocked");try{y.focus()}catch{}return new tx(y)}function vz(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _z="__/auth/handler",wz="emulator/auth/handler",Ez=encodeURIComponent("fac");async function nx(t,e,n,r,i,a){Te(t.config.authDomain,t,"auth-domain-config-required"),Te(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Dl,eventId:i};if(e instanceof A_){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",sU(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))l[m]=y}if(e instanceof Nc){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(l.scopes=m.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const h=await t._getAppCheckToken(),p=h?`#${Ez}=${encodeURIComponent(h)}`:"";return`${Tz(t)}?${Rc(c).slice(1)}${p}`}function Tz({config:t}){return t.emulator?E_(t,wz):`https://${t.authDomain}/${_z}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="webStorageSupport";class Sz{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yk,this._completeRedirectFn=K6,this._overrideRedirectResult=W6}async _openPopup(e,n,r,i){var l;Fi((l=this.eventManagers[e._key()])==null?void 0:l.manager,"_initialize() not called before _openPopup()");const a=await nx(e,n,r,By(),i);return yz(e,a,C_())}async _openRedirect(e,n,r,i){await this._originValidation(e);const a=await nx(e,n,r,By(),i);return C6(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(Fi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hz(e),r=new Q6(e);return n.register("authEvent",i=>(Te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bg,{type:Bg},i=>{var l;const a=(l=i==null?void 0:i[0])==null?void 0:l[Bg];a!==void 0&&n(!!a),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ez(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jk()||Vk()||S_()}}const xz=Sz;var rx="@firebase/auth",ix="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iz{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Az(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Cz(t){vl(new Wo("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;Te(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:l,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$k(t)},p=new q9(r,i,a,h);return n6(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vl(new Wo("auth-internal",e=>{const n=Xs(e.getProvider("auth").getImmediate());return(r=>new Iz(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vs(rx,ix,Az(t)),Vs(rx,ix,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kz=5*60,Pz=yk("authIdTokenMaxAge")||kz;let sx=null;const Rz=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Pz)return;const i=n==null?void 0:n.token;sx!==i&&(sx=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function bz(t=Tk()){const e=v_(t,"auth");if(e.isInitialized())return e.getImmediate();const n=t6(t,{popupRedirectResolver:xz,persistence:[L6,x6,Yk]}),r=yk("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=Rz(a.toString());_6(n,l,()=>l(n.currentUser)),v6(n,c=>l(c))}}const i=mk("auth");return i&&r6(n,`http://${i}`),n}function Dz(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}K9({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const a=kr("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",Dz().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Cz("Browser");var ox=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ns,iP;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,I){function R(){}R.prototype=I.prototype,C.F=I.prototype,C.prototype=new R,C.prototype.constructor=C,C.D=function(D,O,B){for(var M=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)M[Re-2]=arguments[Re];return I.prototype[O].apply(D,M)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,I,R){R||(R=0);const D=Array(16);if(typeof I=="string")for(var O=0;O<16;++O)D[O]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(O=0;O<16;++O)D[O]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=C.g[0],R=C.g[1],O=C.g[2];let B=C.g[3],M;M=I+(B^R&(O^B))+D[0]+3614090360&4294967295,I=R+(M<<7&4294967295|M>>>25),M=B+(O^I&(R^O))+D[1]+3905402710&4294967295,B=I+(M<<12&4294967295|M>>>20),M=O+(R^B&(I^R))+D[2]+606105819&4294967295,O=B+(M<<17&4294967295|M>>>15),M=R+(I^O&(B^I))+D[3]+3250441966&4294967295,R=O+(M<<22&4294967295|M>>>10),M=I+(B^R&(O^B))+D[4]+4118548399&4294967295,I=R+(M<<7&4294967295|M>>>25),M=B+(O^I&(R^O))+D[5]+1200080426&4294967295,B=I+(M<<12&4294967295|M>>>20),M=O+(R^B&(I^R))+D[6]+2821735955&4294967295,O=B+(M<<17&4294967295|M>>>15),M=R+(I^O&(B^I))+D[7]+4249261313&4294967295,R=O+(M<<22&4294967295|M>>>10),M=I+(B^R&(O^B))+D[8]+1770035416&4294967295,I=R+(M<<7&4294967295|M>>>25),M=B+(O^I&(R^O))+D[9]+2336552879&4294967295,B=I+(M<<12&4294967295|M>>>20),M=O+(R^B&(I^R))+D[10]+4294925233&4294967295,O=B+(M<<17&4294967295|M>>>15),M=R+(I^O&(B^I))+D[11]+2304563134&4294967295,R=O+(M<<22&4294967295|M>>>10),M=I+(B^R&(O^B))+D[12]+1804603682&4294967295,I=R+(M<<7&4294967295|M>>>25),M=B+(O^I&(R^O))+D[13]+4254626195&4294967295,B=I+(M<<12&4294967295|M>>>20),M=O+(R^B&(I^R))+D[14]+2792965006&4294967295,O=B+(M<<17&4294967295|M>>>15),M=R+(I^O&(B^I))+D[15]+1236535329&4294967295,R=O+(M<<22&4294967295|M>>>10),M=I+(O^B&(R^O))+D[1]+4129170786&4294967295,I=R+(M<<5&4294967295|M>>>27),M=B+(R^O&(I^R))+D[6]+3225465664&4294967295,B=I+(M<<9&4294967295|M>>>23),M=O+(I^R&(B^I))+D[11]+643717713&4294967295,O=B+(M<<14&4294967295|M>>>18),M=R+(B^I&(O^B))+D[0]+3921069994&4294967295,R=O+(M<<20&4294967295|M>>>12),M=I+(O^B&(R^O))+D[5]+3593408605&4294967295,I=R+(M<<5&4294967295|M>>>27),M=B+(R^O&(I^R))+D[10]+38016083&4294967295,B=I+(M<<9&4294967295|M>>>23),M=O+(I^R&(B^I))+D[15]+3634488961&4294967295,O=B+(M<<14&4294967295|M>>>18),M=R+(B^I&(O^B))+D[4]+3889429448&4294967295,R=O+(M<<20&4294967295|M>>>12),M=I+(O^B&(R^O))+D[9]+568446438&4294967295,I=R+(M<<5&4294967295|M>>>27),M=B+(R^O&(I^R))+D[14]+3275163606&4294967295,B=I+(M<<9&4294967295|M>>>23),M=O+(I^R&(B^I))+D[3]+4107603335&4294967295,O=B+(M<<14&4294967295|M>>>18),M=R+(B^I&(O^B))+D[8]+1163531501&4294967295,R=O+(M<<20&4294967295|M>>>12),M=I+(O^B&(R^O))+D[13]+2850285829&4294967295,I=R+(M<<5&4294967295|M>>>27),M=B+(R^O&(I^R))+D[2]+4243563512&4294967295,B=I+(M<<9&4294967295|M>>>23),M=O+(I^R&(B^I))+D[7]+1735328473&4294967295,O=B+(M<<14&4294967295|M>>>18),M=R+(B^I&(O^B))+D[12]+2368359562&4294967295,R=O+(M<<20&4294967295|M>>>12),M=I+(R^O^B)+D[5]+4294588738&4294967295,I=R+(M<<4&4294967295|M>>>28),M=B+(I^R^O)+D[8]+2272392833&4294967295,B=I+(M<<11&4294967295|M>>>21),M=O+(B^I^R)+D[11]+1839030562&4294967295,O=B+(M<<16&4294967295|M>>>16),M=R+(O^B^I)+D[14]+4259657740&4294967295,R=O+(M<<23&4294967295|M>>>9),M=I+(R^O^B)+D[1]+2763975236&4294967295,I=R+(M<<4&4294967295|M>>>28),M=B+(I^R^O)+D[4]+1272893353&4294967295,B=I+(M<<11&4294967295|M>>>21),M=O+(B^I^R)+D[7]+4139469664&4294967295,O=B+(M<<16&4294967295|M>>>16),M=R+(O^B^I)+D[10]+3200236656&4294967295,R=O+(M<<23&4294967295|M>>>9),M=I+(R^O^B)+D[13]+681279174&4294967295,I=R+(M<<4&4294967295|M>>>28),M=B+(I^R^O)+D[0]+3936430074&4294967295,B=I+(M<<11&4294967295|M>>>21),M=O+(B^I^R)+D[3]+3572445317&4294967295,O=B+(M<<16&4294967295|M>>>16),M=R+(O^B^I)+D[6]+76029189&4294967295,R=O+(M<<23&4294967295|M>>>9),M=I+(R^O^B)+D[9]+3654602809&4294967295,I=R+(M<<4&4294967295|M>>>28),M=B+(I^R^O)+D[12]+3873151461&4294967295,B=I+(M<<11&4294967295|M>>>21),M=O+(B^I^R)+D[15]+530742520&4294967295,O=B+(M<<16&4294967295|M>>>16),M=R+(O^B^I)+D[2]+3299628645&4294967295,R=O+(M<<23&4294967295|M>>>9),M=I+(O^(R|~B))+D[0]+4096336452&4294967295,I=R+(M<<6&4294967295|M>>>26),M=B+(R^(I|~O))+D[7]+1126891415&4294967295,B=I+(M<<10&4294967295|M>>>22),M=O+(I^(B|~R))+D[14]+2878612391&4294967295,O=B+(M<<15&4294967295|M>>>17),M=R+(B^(O|~I))+D[5]+4237533241&4294967295,R=O+(M<<21&4294967295|M>>>11),M=I+(O^(R|~B))+D[12]+1700485571&4294967295,I=R+(M<<6&4294967295|M>>>26),M=B+(R^(I|~O))+D[3]+2399980690&4294967295,B=I+(M<<10&4294967295|M>>>22),M=O+(I^(B|~R))+D[10]+4293915773&4294967295,O=B+(M<<15&4294967295|M>>>17),M=R+(B^(O|~I))+D[1]+2240044497&4294967295,R=O+(M<<21&4294967295|M>>>11),M=I+(O^(R|~B))+D[8]+1873313359&4294967295,I=R+(M<<6&4294967295|M>>>26),M=B+(R^(I|~O))+D[15]+4264355552&4294967295,B=I+(M<<10&4294967295|M>>>22),M=O+(I^(B|~R))+D[6]+2734768916&4294967295,O=B+(M<<15&4294967295|M>>>17),M=R+(B^(O|~I))+D[13]+1309151649&4294967295,R=O+(M<<21&4294967295|M>>>11),M=I+(O^(R|~B))+D[4]+4149444226&4294967295,I=R+(M<<6&4294967295|M>>>26),M=B+(R^(I|~O))+D[11]+3174756917&4294967295,B=I+(M<<10&4294967295|M>>>22),M=O+(I^(B|~R))+D[2]+718787259&4294967295,O=B+(M<<15&4294967295|M>>>17),M=R+(B^(O|~I))+D[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(O+(M<<21&4294967295|M>>>11))&4294967295,C.g[2]=C.g[2]+O&4294967295,C.g[3]=C.g[3]+B&4294967295}r.prototype.v=function(C,I){I===void 0&&(I=C.length);const R=I-this.blockSize,D=this.C;let O=this.h,B=0;for(;B<I;){if(O==0)for(;B<=R;)i(this,C,B),B+=this.blockSize;if(typeof C=="string"){for(;B<I;)if(D[O++]=C.charCodeAt(B++),O==this.blockSize){i(this,D),O=0;break}}else for(;B<I;)if(D[O++]=C[B++],O==this.blockSize){i(this,D),O=0;break}}this.h=O,this.o+=I},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var R=C.length-8;R<C.length;++R)C[R]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,R=0;R<4;++R)for(let D=0;D<32;D+=8)C[I++]=this.g[R]>>>D&255;return C};function a(C,I){var R=c;return Object.prototype.hasOwnProperty.call(R,C)?R[C]:R[C]=I(C)}function l(C,I){this.h=I;const R=[];let D=!0;for(let O=C.length-1;O>=0;O--){const B=C[O]|0;D&&B==I||(R[O]=B,D=!1)}this.g=R}var c={};function h(C){return-128<=C&&C<128?a(C,function(I){return new l([I|0],I<0?-1:0)}):new l([C|0],C<0?-1:0)}function p(C){if(isNaN(C)||!isFinite(C))return y;if(C<0)return k(p(-C));const I=[];let R=1;for(let D=0;C>=R;D++)I[D]=C/R|0,R*=4294967296;return new l(I,0)}function m(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return k(m(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=p(Math.pow(I,8));let D=y;for(let B=0;B<C.length;B+=8){var O=Math.min(8,C.length-B);const M=parseInt(C.substring(B,B+O),I);O<8?(O=p(Math.pow(I,O)),D=D.j(O).add(p(M))):(D=D.j(R),D=D.add(p(M)))}return D}var y=h(0),w=h(1),T=h(16777216);t=l.prototype,t.m=function(){if(P(this))return-k(this).m();let C=0,I=1;for(let R=0;R<this.g.length;R++){const D=this.i(R);C+=(D>=0?D:4294967296+D)*I,I*=4294967296}return C},t.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(x(this))return"0";if(P(this))return"-"+k(this).toString(C);const I=p(Math.pow(C,6));var R=this;let D="";for(;;){const O=$(R,I).g;R=b(R,O.j(I));let B=((R.g.length>0?R.g[0]:R.h)>>>0).toString(C);if(R=O,x(R))return B+D;for(;B.length<6;)B="0"+B;D=B+D}},t.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function x(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function P(C){return C.h==-1}t.l=function(C){return C=b(this,C),P(C)?-1:x(C)?0:1};function k(C){const I=C.g.length,R=[];for(let D=0;D<I;D++)R[D]=~C.g[D];return new l(R,~C.h).add(w)}t.abs=function(){return P(this)?k(this):this},t.add=function(C){const I=Math.max(this.g.length,C.g.length),R=[];let D=0;for(let O=0;O<=I;O++){let B=D+(this.i(O)&65535)+(C.i(O)&65535),M=(B>>>16)+(this.i(O)>>>16)+(C.i(O)>>>16);D=M>>>16,B&=65535,M&=65535,R[O]=M<<16|B}return new l(R,R[R.length-1]&-2147483648?-1:0)};function b(C,I){return C.add(k(I))}t.j=function(C){if(x(this)||x(C))return y;if(P(this))return P(C)?k(this).j(k(C)):k(k(this).j(C));if(P(C))return k(this.j(k(C)));if(this.l(T)<0&&C.l(T)<0)return p(this.m()*C.m());const I=this.g.length+C.g.length,R=[];for(var D=0;D<2*I;D++)R[D]=0;for(D=0;D<this.g.length;D++)for(let O=0;O<C.g.length;O++){const B=this.i(D)>>>16,M=this.i(D)&65535,Re=C.i(O)>>>16,Ge=C.i(O)&65535;R[2*D+2*O]+=M*Ge,F(R,2*D+2*O),R[2*D+2*O+1]+=B*Ge,F(R,2*D+2*O+1),R[2*D+2*O+1]+=M*Re,F(R,2*D+2*O+1),R[2*D+2*O+2]+=B*Re,F(R,2*D+2*O+2)}for(C=0;C<I;C++)R[C]=R[2*C+1]<<16|R[2*C];for(C=I;C<2*I;C++)R[C]=0;return new l(R,0)};function F(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function U(C,I){this.g=C,this.h=I}function $(C,I){if(x(I))throw Error("division by zero");if(x(C))return new U(y,y);if(P(C))return I=$(k(C),I),new U(k(I.g),k(I.h));if(P(I))return I=$(C,k(I)),new U(k(I.g),I.h);if(C.g.length>30){if(P(C)||P(I))throw Error("slowDivide_ only works with positive integers.");for(var R=w,D=I;D.l(C)<=0;)R=H(R),D=H(D);var O=X(R,1),B=X(D,1);for(D=X(D,2),R=X(R,2);!x(D);){var M=B.add(D);M.l(C)<=0&&(O=O.add(R),B=M),D=X(D,1),R=X(R,1)}return I=b(C,O.j(I)),new U(O,I)}for(O=y;C.l(I)>=0;){for(R=Math.max(1,Math.floor(C.m()/I.m())),D=Math.ceil(Math.log(R)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),B=p(R),M=B.j(I);P(M)||M.l(C)>0;)R-=D,B=p(R),M=B.j(I);x(B)&&(B=w),O=O.add(B),C=b(C,M)}return new U(O,C)}t.B=function(C){return $(this,C).h},t.and=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let D=0;D<I;D++)R[D]=this.i(D)&C.i(D);return new l(R,this.h&C.h)},t.or=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let D=0;D<I;D++)R[D]=this.i(D)|C.i(D);return new l(R,this.h|C.h)},t.xor=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let D=0;D<I;D++)R[D]=this.i(D)^C.i(D);return new l(R,this.h^C.h)};function H(C){const I=C.g.length+1,R=[];for(let D=0;D<I;D++)R[D]=C.i(D)<<1|C.i(D-1)>>>31;return new l(R,C.h)}function X(C,I){const R=I>>5;I%=32;const D=C.g.length-R,O=[];for(let B=0;B<D;B++)O[B]=I>0?C.i(B+R)>>>I|C.i(B+R+1)<<32-I:C.i(B+R);return new l(O,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,iP=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=m,Ns=l}).apply(typeof ox<"u"?ox:typeof self<"u"?self:typeof window<"u"?window:{});var yf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sP,zu,oP,Hf,Ky,aP,lP,uP;(function(){var t,e=Object.defineProperty;function n(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof yf=="object"&&yf];for(var _=0;_<f.length;++_){var E=f[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=n(this);function i(f,_){if(_)e:{var E=r;f=f.split(".");for(var A=0;A<f.length-1;A++){var K=f[A];if(!(K in E))break e;E=E[K]}f=f[f.length-1],A=E[f],_=_(A),_!=A&&_!=null&&e(E,f,{configurable:!0,writable:!0,value:_})}}i("Symbol.dispose",function(f){return f||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(f){return f||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(f){return f||function(_){var E=[],A;for(A in _)Object.prototype.hasOwnProperty.call(_,A)&&E.push([A,_[A]]);return E}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(f){var _=typeof f;return _=="object"&&f!=null||_=="function"}function h(f,_,E){return f.call.apply(f.bind,arguments)}function p(f,_,E){return p=h,p.apply(null,arguments)}function m(f,_){var E=Array.prototype.slice.call(arguments,1);return function(){var A=E.slice();return A.push.apply(A,arguments),f.apply(this,A)}}function y(f,_){function E(){}E.prototype=_.prototype,f.Z=_.prototype,f.prototype=new E,f.prototype.constructor=f,f.Ob=function(A,K,Y){for(var le=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)le[ke-2]=arguments[ke];return _.prototype[K].apply(A,le)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?f=>f&&AsyncContext.Snapshot.wrap(f):f=>f;function T(f){const _=f.length;if(_>0){const E=Array(_);for(let A=0;A<_;A++)E[A]=f[A];return E}return[]}function x(f,_){for(let A=1;A<arguments.length;A++){const K=arguments[A];var E=typeof K;if(E=E!="object"?E:K?Array.isArray(K)?"array":E:"null",E=="array"||E=="object"&&typeof K.length=="number"){E=f.length||0;const Y=K.length||0;f.length=E+Y;for(let le=0;le<Y;le++)f[E+le]=K[le]}else f.push(K)}}class P{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return this.h>0?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function k(f){l.setTimeout(()=>{throw f},0)}function b(){var f=C;let _=null;return f.g&&(_=f.g,f.g=f.g.next,f.g||(f.h=null),_.next=null),_}class F{constructor(){this.h=this.g=null}add(_,E){const A=U.get();A.set(_,E),this.h?this.h.next=A:this.g=A,this.h=A}}var U=new P(()=>new $,f=>f.reset());class ${constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let H,X=!1,C=new F,I=()=>{const f=Promise.resolve(void 0);H=()=>{f.then(R)}};function R(){for(var f;f=b();){try{f.h.call(f.g)}catch(E){k(E)}var _=U;_.j(f),_.h<100&&(_.h++,f.next=_.g,_.g=f)}X=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(f,_){this.type=f,this.g=this.target=_,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var B=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var f=!1,_=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const E=()=>{};l.addEventListener("test",E,_),l.removeEventListener("test",E,_)}catch{}return f}();function M(f){return/^[\s\xa0]*$/.test(f)}function Re(f,_){O.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f&&this.init(f,_)}y(Re,O),Re.prototype.init=function(f,_){const E=this.type=f.type,A=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;this.target=f.target||f.srcElement,this.g=_,_=f.relatedTarget,_||(E=="mouseover"?_=f.fromElement:E=="mouseout"&&(_=f.toElement)),this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=f.pointerType,this.state=f.state,this.i=f,f.defaultPrevented&&Re.Z.h.call(this)},Re.prototype.h=function(){Re.Z.h.call(this);const f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var Ge="closure_listenable_"+(Math.random()*1e6|0),Xe=0;function Je(f,_,E,A,K){this.listener=f,this.proxy=null,this.src=_,this.type=E,this.capture=!!A,this.ha=K,this.key=++Xe,this.da=this.fa=!1}function re(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function ce(f,_,E){for(const A in f)_.call(E,f[A],A,f)}function ue(f,_){for(const E in f)_.call(void 0,f[E],E,f)}function W(f){const _={};for(const E in f)_[E]=f[E];return _}const J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ae(f,_){let E,A;for(let K=1;K<arguments.length;K++){A=arguments[K];for(E in A)f[E]=A[E];for(let Y=0;Y<J.length;Y++)E=J[Y],Object.prototype.hasOwnProperty.call(A,E)&&(f[E]=A[E])}}function Ie(f){this.src=f,this.g={},this.h=0}Ie.prototype.add=function(f,_,E,A,K){const Y=f.toString();f=this.g[Y],f||(f=this.g[Y]=[],this.h++);const le=be(f,_,A,K);return le>-1?(_=f[le],E||(_.fa=!1)):(_=new Je(_,this.src,Y,!!A,K),_.fa=E,f.push(_)),_};function De(f,_){const E=_.type;if(E in f.g){var A=f.g[E],K=Array.prototype.indexOf.call(A,_,void 0),Y;(Y=K>=0)&&Array.prototype.splice.call(A,K,1),Y&&(re(_),f.g[E].length==0&&(delete f.g[E],f.h--))}}function be(f,_,E,A){for(let K=0;K<f.length;++K){const Y=f[K];if(!Y.da&&Y.listener==_&&Y.capture==!!E&&Y.ha==A)return K}return-1}var $e="closure_lm_"+(Math.random()*1e6|0),Me={};function Ue(f,_,E,A,K){if(Array.isArray(_)){for(let Y=0;Y<_.length;Y++)Ue(f,_[Y],E,A,K);return null}return E=jl(E),f&&f[Ge]?f.J(_,E,c(A)?!!A.capture:!1,K):Nt(f,_,E,!1,A,K)}function Nt(f,_,E,A,K,Y){if(!_)throw Error("Invalid event type");const le=c(K)?!!K.capture:!!K;let ke=ra(f);if(ke||(f[$e]=ke=new Ie(f)),E=ke.add(_,E,A,le,Y),E.proxy)return E;if(A=ur(),E.proxy=A,A.src=f,A.listener=E,f.addEventListener)B||(K=le),K===void 0&&(K=!1),f.addEventListener(_.toString(),A,K);else if(f.attachEvent)f.attachEvent(na(_.toString()),A);else if(f.addListener&&f.removeListener)f.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return E}function ur(){function f(E){return _.call(f.src,f.listener,E)}const _=zc;return f}function _n(f,_,E,A,K){if(Array.isArray(_))for(var Y=0;Y<_.length;Y++)_n(f,_[Y],E,A,K);else A=c(A)?!!A.capture:!!A,E=jl(E),f&&f[Ge]?(f=f.i,Y=String(_).toString(),Y in f.g&&(_=f.g[Y],E=be(_,E,A,K),E>-1&&(re(_[E]),Array.prototype.splice.call(_,E,1),_.length==0&&(delete f.g[Y],f.h--)))):f&&(f=ra(f))&&(_=f.g[_.toString()],f=-1,_&&(f=be(_,E,A,K)),(E=f>-1?_[f]:null)&&Bi(E))}function Bi(f){if(typeof f!="number"&&f&&!f.da){var _=f.src;if(_&&_[Ge])De(_.i,f);else{var E=f.type,A=f.proxy;_.removeEventListener?_.removeEventListener(E,A,f.capture):_.detachEvent?_.detachEvent(na(E),A):_.addListener&&_.removeListener&&_.removeListener(A),(E=ra(_))?(De(E,f),E.h==0&&(E.src=null,_[$e]=null)):re(f)}}}function na(f){return f in Me?Me[f]:Me[f]="on"+f}function zc(f,_){if(f.da)f=!0;else{_=new Re(_,this);const E=f.listener,A=f.ha||f.src;f.fa&&Bi(f),f=E.call(A,_)}return f}function ra(f){return f=f[$e],f instanceof Ie?f:null}var Js="__closure_events_fn_"+(Math.random()*1e9>>>0);function jl(f){return typeof f=="function"?f:(f[Js]||(f[Js]=function(_){return f.handleEvent(_)}),f[Js])}function It(){D.call(this),this.i=new Ie(this),this.M=this,this.G=null}y(It,D),It.prototype[Ge]=!0,It.prototype.removeEventListener=function(f,_,E,A){_n(this,f,_,E,A)};function Et(f,_){var E,A=f.G;if(A)for(E=[];A;A=A.G)E.push(A);if(f=f.M,A=_.type||_,typeof _=="string")_=new O(_,f);else if(_ instanceof O)_.target=_.target||f;else{var K=_;_=new O(A,f),Ae(_,K)}K=!0;let Y,le;if(E)for(le=E.length-1;le>=0;le--)Y=_.g=E[le],K=cr(Y,A,!0,_)&&K;if(Y=_.g=f,K=cr(Y,A,!0,_)&&K,K=cr(Y,A,!1,_)&&K,E)for(le=0;le<E.length;le++)Y=_.g=E[le],K=cr(Y,A,!1,_)&&K}It.prototype.N=function(){if(It.Z.N.call(this),this.i){var f=this.i;for(const _ in f.g){const E=f.g[_];for(let A=0;A<E.length;A++)re(E[A]);delete f.g[_],f.h--}}this.G=null},It.prototype.J=function(f,_,E,A){return this.i.add(String(f),_,!1,E,A)},It.prototype.K=function(f,_,E,A){return this.i.add(String(f),_,!0,E,A)};function cr(f,_,E,A){if(_=f.i.g[String(_)],!_)return!0;_=_.concat();let K=!0;for(let Y=0;Y<_.length;++Y){const le=_[Y];if(le&&!le.da&&le.capture==E){const ke=le.listener,Tt=le.ha||le.src;le.fa&&De(f.i,le),K=ke.call(Tt,A)!==!1&&K}}return K&&!A.defaultPrevented}function $l(f,_){if(typeof f!="function")if(f&&typeof f.handleEvent=="function")f=p(f.handleEvent,f);else throw Error("Invalid listener argument");return Number(_)>2147483647?-1:l.setTimeout(f,_||0)}function Ul(f){f.g=$l(()=>{f.g=null,f.i&&(f.i=!1,Ul(f))},f.l);const _=f.h;f.h=null,f.m.apply(null,_)}class Bc extends D{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Ul(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wi(f){D.call(this),this.h=f,this.g={}}y(Wi,D);var zl=[];function ia(f){ce(f.g,function(_,E){this.g.hasOwnProperty(E)&&Bi(_)},f),f.g={}}Wi.prototype.N=function(){Wi.Z.N.call(this),ia(this)},Wi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hi=l.JSON.stringify,Wc=l.JSON.parse,Zs=class{stringify(f){return l.JSON.stringify(f,void 0)}parse(f){return l.JSON.parse(f,void 0)}};function qi(){}function Hc(){}var Ki={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function sa(){O.call(this,"d")}y(sa,O);function Bl(){O.call(this,"c")}y(Bl,O);var hr={},oa=null;function Gi(){return oa=oa||new It}hr.Ia="serverreachability";function aa(f){O.call(this,hr.Ia,f)}y(aa,O);function ci(f){const _=Gi();Et(_,new aa(_))}hr.STAT_EVENT="statevent";function hi(f,_){O.call(this,hr.STAT_EVENT,f),this.stat=_}y(hi,O);function vt(f){const _=Gi();Et(_,new hi(_,f))}hr.Ja="timingevent";function Wl(f,_){O.call(this,hr.Ja,f),this.size=_}y(Wl,O);function Qi(f,_){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){f()},_)}function Yi(){this.g=!0}Yi.prototype.ua=function(){this.g=!1};function qc(f,_,E,A,K,Y){f.info(function(){if(f.g)if(Y){var le="",ke=Y.split("&");for(let Ze=0;Ze<ke.length;Ze++){var Tt=ke[Ze].split("=");if(Tt.length>1){const At=Tt[0];Tt=Tt[1];const Nn=At.split("_");le=Nn.length>=2&&Nn[1]=="type"?le+(At+"="+Tt+"&"):le+(At+"=redacted&")}}}else le=null;else le=Y;return"XMLHTTP REQ ("+A+") [attempt "+K+"]: "+_+`
`+E+`
`+le})}function Kc(f,_,E,A,K,Y,le){f.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+K+"]: "+_+`
`+E+`
`+Y+" "+le})}function Vr(f,_,E,A){f.info(function(){return"XMLHTTP TEXT ("+_+"): "+eo(f,E)+(A?" "+A:"")})}function Gc(f,_){f.info(function(){return"TIMEOUT: "+_})}Yi.prototype.info=function(){};function eo(f,_){if(!f.g)return _;if(!_)return null;try{const Y=JSON.parse(_);if(Y){for(f=0;f<Y.length;f++)if(Array.isArray(Y[f])){var E=Y[f];if(!(E.length<2)){var A=E[1];if(Array.isArray(A)&&!(A.length<1)){var K=A[0];if(K!="noop"&&K!="stop"&&K!="close")for(let le=1;le<A.length;le++)A[le]=""}}}}return Hi(Y)}catch{return _}}var Xi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ji={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Qc;function fi(){}y(fi,qi),fi.prototype.g=function(){return new XMLHttpRequest},Qc=new fi;function Nr(f){return encodeURIComponent(String(f))}function la(f){var _=1;f=f.split(":");const E=[];for(;_>0&&f.length;)E.push(f.shift()),_--;return f.length&&E.push(f.join(":")),E}function Wn(f,_,E,A){this.j=f,this.i=_,this.l=E,this.S=A||1,this.V=new Wi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yc}function Yc(){this.i=null,this.g="",this.h=!1}var Xc={},Hl={};function fr(f,_,E){f.M=1,f.A=pi(Hn(_)),f.u=E,f.R=!0,ql(f,null)}function ql(f,_){f.F=Date.now(),to(f),f.B=Hn(f.A);var E=f.B,A=f.S;Array.isArray(A)||(A=[String(A)]),nu(E.i,"t",A),f.C=0,E=f.j.L,f.h=new Yc,f.g=ah(f.j,E?_:null,!f.u),f.P>0&&(f.O=new Bc(p(f.Y,f,f.g),f.P)),_=f.V,E=f.g,A=f.ba;var K="readystatechange";Array.isArray(K)||(K&&(zl[0]=K.toString()),K=zl);for(let Y=0;Y<K.length;Y++){const le=Ue(E,K[Y],A||_.handleEvent,!1,_.h||_);if(!le)break;_.g[le.key]=le}_=f.J?W(f.J):{},f.u?(f.v||(f.v="POST"),_["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.B,f.v,f.u,_)):(f.v="GET",f.g.ea(f.B,f.v,null,_)),ci(),qc(f.i,f.v,f.B,f.l,f.S,f.u)}Wn.prototype.ba=function(f){f=f.target;const _=this.O;_&&Ur(f)==3?_.j():this.Y(f)},Wn.prototype.Y=function(f){try{if(f==this.g)e:{const ke=Ur(this.g),Tt=this.g.ya(),Ze=this.g.ca();if(!(ke<3)&&(ke!=3||this.g&&(this.h.h||this.g.la()||sh(this.g)))){this.K||ke!=4||Tt==7||(Tt==8||Ze<=0?ci(3):ci(2)),ua(this);var _=this.g.ca();this.X=_;var E=Jc(this);if(this.o=_==200,Kc(this.i,this.v,this.B,this.l,this.S,ke,_),this.o){if(this.U&&!this.L){t:{if(this.g){var A,K=this.g;if((A=K.g?K.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(A)){var Y=A;break t}}Y=null}if(f=Y)Vr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ot(this,f);else{this.o=!1,this.m=3,vt(12),di(this),no(this);break e}}if(this.R){f=!0;let At;for(;!this.K&&this.C<E.length;)if(At=eh(this,E),At==Hl){ke==4&&(this.m=4,vt(14),f=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(At==Xc){this.m=4,vt(15),Vr(this.i,this.l,E,"[Invalid Chunk]"),f=!1;break}else Vr(this.i,this.l,At,null),ot(this,At);if(Zc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ke!=4||E.length!=0||this.h.h||(this.m=1,vt(16),f=!1),this.o=this.o&&f,!f)Vr(this.i,this.l,E,"[Invalid Chunked Response]"),di(this),no(this);else if(E.length>0&&!this.W){this.W=!0;var le=this.j;le.g==this&&le.aa&&!le.P&&(le.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),ho(le),le.P=!0,vt(11))}}else Vr(this.i,this.l,E,null),ot(this,E);ke==4&&di(this),this.o&&!this.K&&(ke==4?_a(this.j,this):(this.o=!1,to(this)))}else iu(this.g),_==400&&E.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),di(this),no(this)}}}catch{}finally{}};function Jc(f){if(!Zc(f))return f.g.la();const _=sh(f.g);if(_==="")return"";let E="";const A=_.length,K=Ur(f.g)==4;if(!f.h.i){if(typeof TextDecoder>"u")return di(f),no(f),"";f.h.i=new l.TextDecoder}for(let Y=0;Y<A;Y++)f.h.h=!0,E+=f.h.i.decode(_[Y],{stream:!(K&&Y==A-1)});return _.length=0,f.h.g+=E,f.C=0,f.h.g}function Zc(f){return f.g?f.v=="GET"&&f.M!=2&&f.j.Aa:!1}function eh(f,_){var E=f.C,A=_.indexOf(`
`,E);return A==-1?Hl:(E=Number(_.substring(E,A)),isNaN(E)?Xc:(A+=1,A+E>_.length?Hl:(_=_.slice(A,A+E),f.C=A+E,_)))}Wn.prototype.cancel=function(){this.K=!0,di(this)};function to(f){f.T=Date.now()+f.H,Kl(f,f.H)}function Kl(f,_){if(f.D!=null)throw Error("WatchDog timer not null");f.D=Qi(p(f.aa,f),_)}function ua(f){f.D&&(l.clearTimeout(f.D),f.D=null)}Wn.prototype.aa=function(){this.D=null;const f=Date.now();f-this.T>=0?(Gc(this.i,this.B),this.M!=2&&(ci(),vt(17)),di(this),this.m=2,no(this)):Kl(this,this.T-f)};function no(f){f.j.I==0||f.K||_a(f.j,f)}function di(f){ua(f);var _=f.O;_&&typeof _.dispose=="function"&&_.dispose(),f.O=null,ia(f.V),f.g&&(_=f.g,f.g=null,_.abort(),_.dispose())}function ot(f,_){try{var E=f.j;if(E.I!=0&&(E.g==f||Ql(E.h,f))){if(!f.L&&Ql(E.h,f)&&E.I==3){try{var A=E.Ba.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var K=A;if(K[0]==0){e:if(!E.v){if(E.g)if(E.g.F+3e3<f.F)va(E),Dn(E);else break e;Wr(E),vt(18)}}else E.xa=K[1],0<E.xa-E.K&&K[2]<37500&&E.F&&E.A==0&&!E.C&&(E.C=Qi(p(E.Va,E),6e3));ro(E.h)<=1&&E.ta&&(E.ta=void 0)}else Vn(E,11)}else if((f.L||E.g==f)&&va(E),!M(_))for(K=E.Ba.g.parse(_),_=0;_<K.length;_++){let Ze=K[_];const At=Ze[0];if(!(At<=E.K))if(E.K=At,Ze=Ze[1],E.I==2)if(Ze[0]=="c"){E.M=Ze[1],E.ba=Ze[2];const Nn=Ze[3];Nn!=null&&(E.ka=Nn,E.j.info("VER="+E.ka));const _i=Ze[4];_i!=null&&(E.za=_i,E.j.info("SVER="+E.za));const Hr=Ze[5];Hr!=null&&typeof Hr=="number"&&Hr>0&&(A=1.5*Hr,E.O=A,E.j.info("backChannelRequestTimeoutMs_="+A)),A=E;const qr=f.g;if(qr){const Ta=qr.g?qr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ta){var Y=A.h;Y.g||Ta.indexOf("spdy")==-1&&Ta.indexOf("quic")==-1&&Ta.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(ha(Y,Y.h),Y.h=null))}if(A.G){const au=qr.g?qr.g.getResponseHeader("X-HTTP-Session-Id"):null;au&&(A.wa=au,Ke(A.J,A.G,au))}}E.I=3,E.l&&E.l.ra(),E.aa&&(E.T=Date.now()-f.F,E.j.info("Handshake RTT: "+E.T+"ms")),A=E;var le=f;if(A.na=ou(A,A.L?A.ba:null,A.W),le.L){io(A.h,le);var ke=le,Tt=A.O;Tt&&(ke.H=Tt),ke.D&&(ua(ke),to(ke)),A.g=le}else rn(A);E.i.length>0&&vi(E)}else Ze[0]!="stop"&&Ze[0]!="close"||Vn(E,7);else E.I==3&&(Ze[0]=="stop"||Ze[0]=="close"?Ze[0]=="stop"?Vn(E,7):ga(E):Ze[0]!="noop"&&E.l&&E.l.qa(Ze),E.A=0)}}ci(4)}catch{}}var bp=class{constructor(f,_){this.g=f,this.map=_}};function ca(f){this.l=f||10,l.PerformanceNavigationTiming?(f=l.performance.getEntriesByType("navigation"),f=f.length>0&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Gl(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function ro(f){return f.h?1:f.g?f.g.size:0}function Ql(f,_){return f.h?f.h==_:f.g?f.g.has(_):!1}function ha(f,_){f.g?f.g.add(_):f.h=_}function io(f,_){f.h&&f.h==_?f.h=null:f.g&&f.g.has(_)&&f.g.delete(_)}ca.prototype.cancel=function(){if(this.i=Pn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function Pn(f){if(f.h!=null)return f.i.concat(f.h.G);if(f.g!=null&&f.g.size!==0){let _=f.i;for(const E of f.g.values())_=_.concat(E.G);return _}return T(f.i)}var th=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rn(f,_){if(f){f=f.split("&");for(let E=0;E<f.length;E++){const A=f[E].indexOf("=");let K,Y=null;A>=0?(K=f[E].substring(0,A),Y=f[E].substring(A+1)):K=f[E],_(K,Y?decodeURIComponent(Y.replace(/\+/g," ")):"")}}}function Mr(f){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let _;f instanceof Mr?(this.l=f.l,so(this,f.j),this.o=f.o,this.g=f.g,Lr(this,f.u),this.h=f.h,Zi(this,ru(f.i)),this.m=f.m):f&&(_=String(f).match(th))?(this.l=!1,so(this,_[1]||"",!0),this.o=oo(_[2]||""),this.g=oo(_[3]||"",!0),Lr(this,_[4]),this.h=oo(_[5]||"",!0),Zi(this,_[6]||"",!0),this.m=oo(_[7]||"")):(this.l=!1,this.i=new ze(null,this.l))}Mr.prototype.toString=function(){const f=[];var _=this.j;_&&f.push(ao(_,Xl,!0),":");var E=this.g;return(E||_=="file")&&(f.push("//"),(_=this.o)&&f.push(ao(_,Xl,!0),"@"),f.push(Nr(E).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.u,E!=null&&f.push(":",String(E))),(E=this.h)&&(this.g&&E.charAt(0)!="/"&&f.push("/"),f.push(ao(E,E.charAt(0)=="/"?lo:Jl,!0))),(E=this.i.toString())&&f.push("?",E),(E=this.m)&&f.push("#",ao(E,Zl)),f.join("")},Mr.prototype.resolve=function(f){const _=Hn(this);let E=!!f.j;E?so(_,f.j):E=!!f.o,E?_.o=f.o:E=!!f.g,E?_.g=f.g:E=f.u!=null;var A=f.h;if(E)Lr(_,f.u);else if(E=!!f.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var K=_.h.lastIndexOf("/");K!=-1&&(A=_.h.slice(0,K+1)+A)}if(K=A,K==".."||K==".")A="";else if(K.indexOf("./")!=-1||K.indexOf("/.")!=-1){A=K.lastIndexOf("/",0)==0,K=K.split("/");const Y=[];for(let le=0;le<K.length;){const ke=K[le++];ke=="."?A&&le==K.length&&Y.push(""):ke==".."?((Y.length>1||Y.length==1&&Y[0]!="")&&Y.pop(),A&&le==K.length&&Y.push("")):(Y.push(ke),A=!0)}A=Y.join("/")}else A=K}return E?_.h=A:E=f.i.toString()!=="",E?Zi(_,ru(f.i)):E=!!f.m,E&&(_.m=f.m),_};function Hn(f){return new Mr(f)}function so(f,_,E){f.j=E?oo(_,!0):_,f.j&&(f.j=f.j.replace(/:$/,""))}function Lr(f,_){if(_){if(_=Number(_),isNaN(_)||_<0)throw Error("Bad port number "+_);f.u=_}else f.u=null}function Zi(f,_,E){_ instanceof ze?(f.i=_,da(f.i,f.l)):(E||(_=ao(_,Dp)),f.i=new ze(_,f.l))}function Ke(f,_,E){f.i.set(_,E)}function pi(f){return Ke(f,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),f}function oo(f,_){return f?_?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function ao(f,_,E){return typeof f=="string"?(f=encodeURI(f).replace(_,Yl),E&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function Yl(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var Xl=/[#\/\?@]/g,Jl=/[#\?:]/g,lo=/[#\?]/g,Dp=/[#\?@]/g,Zl=/#/g;function ze(f,_){this.h=this.g=null,this.i=f||null,this.j=!!_}function Or(f){f.g||(f.g=new Map,f.h=0,f.i&&Rn(f.i,function(_,E){f.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}t=ze.prototype,t.add=function(f,_){Or(this),this.i=null,f=Fr(this,f);let E=this.g.get(f);return E||this.g.set(f,E=[]),E.push(_),this.h+=1,this};function eu(f,_){Or(f),_=Fr(f,_),f.g.has(_)&&(f.i=null,f.h-=f.g.get(_).length,f.g.delete(_))}function fa(f,_){return Or(f),_=Fr(f,_),f.g.has(_)}t.forEach=function(f,_){Or(this),this.g.forEach(function(E,A){E.forEach(function(K){f.call(_,K,A,this)},this)},this)};function tu(f,_){Or(f);let E=[];if(typeof _=="string")fa(f,_)&&(E=E.concat(f.g.get(Fr(f,_))));else for(f=Array.from(f.g.values()),_=0;_<f.length;_++)E=E.concat(f[_]);return E}t.set=function(f,_){return Or(this),this.i=null,f=Fr(this,f),fa(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[_]),this.h+=1,this},t.get=function(f,_){return f?(f=tu(this,f),f.length>0?String(f[0]):_):_};function nu(f,_,E){eu(f,_),E.length>0&&(f.i=null,f.g.set(Fr(f,_),T(E)),f.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],_=Array.from(this.g.keys());for(let A=0;A<_.length;A++){var E=_[A];const K=Nr(E);E=tu(this,E);for(let Y=0;Y<E.length;Y++){let le=K;E[Y]!==""&&(le+="="+Nr(E[Y])),f.push(le)}}return this.i=f.join("&")};function ru(f){const _=new ze;return _.i=f.i,f.g&&(_.g=new Map(f.g),_.h=f.h),_}function Fr(f,_){return _=String(_),f.j&&(_=_.toLowerCase()),_}function da(f,_){_&&!f.j&&(Or(f),f.i=null,f.g.forEach(function(E,A){const K=A.toLowerCase();A!=K&&(eu(this,A),nu(this,K,E))},f)),f.j=_}function jr(f,_){const E=new Yi;if(l.Image){const A=new Image;A.onload=m(qt,E,"TestLoadImage: loaded",!0,_,A),A.onerror=m(qt,E,"TestLoadImage: error",!1,_,A),A.onabort=m(qt,E,"TestLoadImage: abort",!1,_,A),A.ontimeout=m(qt,E,"TestLoadImage: timeout",!1,_,A),l.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=f}else _(!1)}function $r(f,_){const E=new Yi,A=new AbortController,K=setTimeout(()=>{A.abort(),qt(E,"TestPingServer: timeout",!1,_)},1e4);fetch(f,{signal:A.signal}).then(Y=>{clearTimeout(K),Y.ok?qt(E,"TestPingServer: ok",!0,_):qt(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(K),qt(E,"TestPingServer: error",!1,_)})}function qt(f,_,E,A,K){try{K&&(K.onload=null,K.onerror=null,K.onabort=null,K.ontimeout=null),A(E)}catch{}}function uo(){this.g=new Zs}function mi(f){this.i=f.Sb||null,this.h=f.ab||!1}y(mi,qi),mi.prototype.g=function(){return new bn(this.i,this.h)};function bn(f,_){It.call(this),this.H=f,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(bn,It),t=bn.prototype,t.open=function(f,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=f,this.D=_,this.readyState=1,dr(this)},t.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const _={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};f&&(_.body=f),(this.H||l).fetch(new Request(this.D,_)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,es(this)),this.readyState=0},t.Pa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,dr(this)),this.g&&(this.readyState=3,dr(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;nh(this)}else f.text().then(this.Oa.bind(this),this.ga.bind(this))};function nh(f){f.j.read().then(f.Ma.bind(f)).catch(f.ga.bind(f))}t.Ma=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var _=f.value?f.value:new Uint8Array(0);(_=this.B.decode(_,{stream:!f.done}))&&(this.response=this.responseText+=_)}f.done?es(this):dr(this),this.readyState==3&&nh(this)}},t.Oa=function(f){this.g&&(this.response=this.responseText=f,es(this))},t.Na=function(f){this.g&&(this.response=f,es(this))},t.ga=function(){this.g&&es(this)};function es(f){f.readyState=4,f.l=null,f.j=null,f.B=null,dr(f)}t.setRequestHeader=function(f,_){this.A.append(f,_)},t.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,f.push(E[0]+": "+E[1]),E=_.next();return f.join(`\r
`)};function dr(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function rh(f){let _="";return ce(f,function(E,A){_+=A,_+=":",_+=E,_+=`\r
`}),_}function pa(f,_,E){e:{for(A in E){var A=!1;break e}A=!0}A||(E=rh(E),typeof f=="string"?E!=null&&Nr(E):Ke(f,_,E))}function nt(f){It.call(this),this.headers=new Map,this.L=f||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(nt,It);var ih=/^https?$/i,Vp=["POST","PUT"];t=nt.prototype,t.Fa=function(f){this.H=f},t.ea=function(f,_,E,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);_=_?_.toUpperCase():"GET",this.D=f,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Qc.g(),this.g.onreadystatechange=w(p(this.Ca,this));try{this.B=!0,this.g.open(_,String(f),!0),this.B=!1}catch(Y){ts(this,Y);return}if(f=E||"",E=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var K in A)E.set(K,A[K]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Y of A.keys())E.set(Y,A.get(Y));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(E.keys()).find(Y=>Y.toLowerCase()=="content-type"),K=l.FormData&&f instanceof l.FormData,!(Array.prototype.indexOf.call(Vp,_,void 0)>=0)||A||K||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,le]of E)this.g.setRequestHeader(Y,le);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(f),this.v=!1}catch(Y){ts(this,Y)}};function ts(f,_){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=_,f.o=5,ns(f),yi(f)}function ns(f){f.A||(f.A=!0,Et(f,"complete"),Et(f,"error"))}t.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=f||7,Et(this,"complete"),Et(this,"abort"),yi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),nt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?gi(this):this.Xa())},t.Xa=function(){gi(this)};function gi(f){if(f.h&&typeof a<"u"){if(f.v&&Ur(f)==4)setTimeout(f.Ca.bind(f),0);else if(Et(f,"readystatechange"),Ur(f)==4){f.h=!1;try{const Y=f.ca();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var A;if(A=Y===0){let le=String(f.D).match(th)[1]||null;!le&&l.self&&l.self.location&&(le=l.self.location.protocol.slice(0,-1)),A=!ih.test(le?le.toLowerCase():"")}E=A}if(E)Et(f,"complete"),Et(f,"success");else{f.o=6;try{var K=Ur(f)>2?f.g.statusText:""}catch{K=""}f.l=K+" ["+f.ca()+"]",ns(f)}}finally{yi(f)}}}}function yi(f,_){if(f.g){f.m&&(clearTimeout(f.m),f.m=null);const E=f.g;f.g=null,_||Et(f,"ready");try{E.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Ur(f){return f.g?f.g.readyState:0}t.ca=function(){try{return Ur(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(f){if(this.g){var _=this.g.responseText;return f&&_.indexOf(f)==0&&(_=_.substring(f.length)),Wc(_)}};function sh(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.F){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function iu(f){const _={};f=(f.g&&Ur(f)>=2&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<f.length;A++){if(M(f[A]))continue;var E=la(f[A]);const K=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Y=_[K]||[];_[K]=Y,Y.push(E)}ue(_,function(A){return A.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function zr(f,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[f]||_}function ma(f){this.za=0,this.i=[],this.j=new Yi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=zr("failFast",!1,f),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=zr("baseRetryDelayMs",5e3,f),this.Za=zr("retryDelaySeedMs",1e4,f),this.Ta=zr("forwardChannelMaxRetries",2,f),this.va=zr("forwardChannelRequestTimeoutMs",2e4,f),this.ma=f&&f.xmlHttpFactory||void 0,this.Ua=f&&f.Rb||void 0,this.Aa=f&&f.useFetchStreams||!1,this.O=void 0,this.L=f&&f.supportsCrossDomainXhr||!1,this.M="",this.h=new ca(f&&f.concurrentRequestLimit),this.Ba=new uo,this.S=f&&f.fastHandshake||!1,this.R=f&&f.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=f&&f.Pb||!1,f&&f.ua&&this.j.ua(),f&&f.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&f&&f.detectBufferingProxy||!1,this.ia=void 0,f&&f.longPollingTimeout&&f.longPollingTimeout>0&&(this.ia=f.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=ma.prototype,t.ka=8,t.I=1,t.connect=function(f,_,E,A){vt(0),this.W=f,this.H=_||{},E&&A!==void 0&&(this.H.OSID=E,this.H.OAID=A),this.F=this.X,this.J=ou(this,null,this.W),vi(this)};function ga(f){if(ya(f),f.I==3){var _=f.V++,E=Hn(f.J);if(Ke(E,"SID",f.M),Ke(E,"RID",_),Ke(E,"TYPE","terminate"),Br(f,E),_=new Wn(f,f.j,_),_.M=2,_.A=pi(Hn(E)),E=!1,l.navigator&&l.navigator.sendBeacon)try{E=l.navigator.sendBeacon(_.A.toString(),"")}catch{}!E&&l.Image&&(new Image().src=_.A,E=!0),E||(_.g=ah(_.j,null),_.g.ea(_.A)),_.F=Date.now(),to(_)}fo(f)}function Dn(f){f.g&&(ho(f),f.g.cancel(),f.g=null)}function ya(f){Dn(f),f.v&&(l.clearTimeout(f.v),f.v=null),va(f),f.h.cancel(),f.m&&(typeof f.m=="number"&&l.clearTimeout(f.m),f.m=null)}function vi(f){if(!Gl(f.h)&&!f.m){f.m=!0;var _=f.Ea;H||I(),X||(H(),X=!0),C.add(_,f),f.D=0}}function oh(f,_){return ro(f.h)>=f.h.j-(f.m?1:0)?!1:f.m?(f.i=_.G.concat(f.i),!0):f.I==1||f.I==2||f.D>=(f.Sa?0:f.Ta)?!1:(f.m=Qi(p(f.Ea,f,_),wa(f,f.D)),f.D++,!0)}t.Ea=function(f){if(this.m)if(this.m=null,this.I==1){if(!f){this.V=Math.floor(Math.random()*1e5),f=this.V++;const K=new Wn(this,this.j,f);let Y=this.o;if(this.U&&(Y?(Y=W(Y),Ae(Y,this.U)):Y=this.U),this.u!==null||this.R||(K.J=Y,Y=null),this.S)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var A=this.i[E];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,_>4096){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=su(this,K,_),E=Hn(this.J),Ke(E,"RID",f),Ke(E,"CVER",22),this.G&&Ke(E,"X-HTTP-Session-Id",this.G),Br(this,E),Y&&(this.R?_="headers="+Nr(rh(Y))+"&"+_:this.u&&pa(E,this.u,Y)),ha(this.h,K),this.Ra&&Ke(E,"TYPE","init"),this.S?(Ke(E,"$req",_),Ke(E,"SID","null"),K.U=!0,fr(K,E,null)):fr(K,E,_),this.I=2}}else this.I==3&&(f?co(this,f):this.i.length==0||Gl(this.h)||co(this))};function co(f,_){var E;_?E=_.l:E=f.V++;const A=Hn(f.J);Ke(A,"SID",f.M),Ke(A,"RID",E),Ke(A,"AID",f.K),Br(f,A),f.u&&f.o&&pa(A,f.u,f.o),E=new Wn(f,f.j,E,f.D+1),f.u===null&&(E.J=f.o),_&&(f.i=_.G.concat(f.i)),_=su(f,E,1e3),E.H=Math.round(f.va*.5)+Math.round(f.va*.5*Math.random()),ha(f.h,E),fr(E,A,_)}function Br(f,_){f.H&&ce(f.H,function(E,A){Ke(_,A,E)}),f.l&&ce({},function(E,A){Ke(_,A,E)})}function su(f,_,E){E=Math.min(f.i.length,E);const A=f.l?p(f.l.Ka,f.l,f):null;e:{var K=f.i;let ke=-1;for(;;){const Tt=["count="+E];ke==-1?E>0?(ke=K[0].g,Tt.push("ofs="+ke)):ke=0:Tt.push("ofs="+ke);let Ze=!0;for(let At=0;At<E;At++){var Y=K[At].g;const Nn=K[At].map;if(Y-=ke,Y<0)ke=Math.max(0,K[At].g-100),Ze=!1;else try{Y="req"+Y+"_"||"";try{var le=Nn instanceof Map?Nn:Object.entries(Nn);for(const[_i,Hr]of le){let qr=Hr;c(Hr)&&(qr=Hi(Hr)),Tt.push(Y+_i+"="+encodeURIComponent(qr))}}catch(_i){throw Tt.push(Y+"type="+encodeURIComponent("_badmap")),_i}}catch{A&&A(Nn)}}if(Ze){le=Tt.join("&");break e}}le=void 0}return f=f.i.splice(0,E),_.G=f,le}function rn(f){if(!f.g&&!f.v){f.Y=1;var _=f.Da;H||I(),X||(H(),X=!0),C.add(_,f),f.A=0}}function Wr(f){return f.g||f.v||f.A>=3?!1:(f.Y++,f.v=Qi(p(f.Da,f),wa(f,f.A)),f.A++,!0)}t.Da=function(){if(this.v=null,rs(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var f=4*this.T;this.j.info("BP detection timer enabled: "+f),this.B=Qi(p(this.Wa,this),f)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),Dn(this),rs(this))};function ho(f){f.B!=null&&(l.clearTimeout(f.B),f.B=null)}function rs(f){f.g=new Wn(f,f.j,"rpc",f.Y),f.u===null&&(f.g.J=f.o),f.g.P=0;var _=Hn(f.na);Ke(_,"RID","rpc"),Ke(_,"SID",f.M),Ke(_,"AID",f.K),Ke(_,"CI",f.F?"0":"1"),!f.F&&f.ia&&Ke(_,"TO",f.ia),Ke(_,"TYPE","xmlhttp"),Br(f,_),f.u&&f.o&&pa(_,f.u,f.o),f.O&&(f.g.H=f.O);var E=f.g;f=f.ba,E.M=1,E.A=pi(Hn(_)),E.u=null,E.R=!0,ql(E,f)}t.Va=function(){this.C!=null&&(this.C=null,Dn(this),Wr(this),vt(19))};function va(f){f.C!=null&&(l.clearTimeout(f.C),f.C=null)}function _a(f,_){var E=null;if(f.g==_){va(f),ho(f),f.g=null;var A=2}else if(Ql(f.h,_))E=_.G,io(f.h,_),A=1;else return;if(f.I!=0){if(_.o)if(A==1){E=_.u?_.u.length:0,_=Date.now()-_.F;var K=f.D;A=Gi(),Et(A,new Wl(A,E)),vi(f)}else rn(f);else if(K=_.m,K==3||K==0&&_.X>0||!(A==1&&oh(f,_)||A==2&&Wr(f)))switch(E&&E.length>0&&(_=f.h,_.i=_.i.concat(E)),K){case 1:Vn(f,5);break;case 4:Vn(f,10);break;case 3:Vn(f,6);break;default:Vn(f,2)}}}function wa(f,_){let E=f.Qa+Math.floor(Math.random()*f.Za);return f.isActive()||(E*=2),E*_}function Vn(f,_){if(f.j.info("Error code "+_),_==2){var E=p(f.bb,f),A=f.Ua;const K=!A;A=new Mr(A||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||so(A,"https"),pi(A),K?jr(A.toString(),E):$r(A.toString(),E)}else vt(2);f.I=0,f.l&&f.l.pa(_),fo(f),ya(f)}t.bb=function(f){f?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function fo(f){if(f.I=0,f.ja=[],f.l){const _=Pn(f.h);(_.length!=0||f.i.length!=0)&&(x(f.ja,_),x(f.ja,f.i),f.h.i.length=0,T(f.i),f.i.length=0),f.l.oa()}}function ou(f,_,E){var A=E instanceof Mr?Hn(E):new Mr(E);if(A.g!="")_&&(A.g=_+"."+A.g),Lr(A,A.u);else{var K=l.location;A=K.protocol,_=_?_+"."+K.hostname:K.hostname,K=+K.port;const Y=new Mr(null);A&&so(Y,A),_&&(Y.g=_),K&&Lr(Y,K),E&&(Y.h=E),A=Y}return E=f.G,_=f.wa,E&&_&&Ke(A,E,_),Ke(A,"VER",f.ka),Br(f,A),A}function ah(f,_,E){if(_&&!f.L)throw Error("Can't create secondary domain capable XhrIo object.");return _=f.Aa&&!f.ma?new nt(new mi({ab:E})):new nt(f.ma),_.Fa(f.L),_}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function lh(){}t=lh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ea(){}Ea.prototype.g=function(f,_){return new Kt(f,_)};function Kt(f,_){It.call(this),this.g=new ma(_),this.l=f,this.h=_&&_.messageUrlParams||null,f=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(f?f["X-WebChannel-Content-Type"]=_.messageContentType:f={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.sa&&(f?f["X-WebChannel-Client-Profile"]=_.sa:f={"X-WebChannel-Client-Profile":_.sa}),this.g.U=f,(f=_&&_.Qb)&&!M(f)&&(this.g.u=f),this.A=_&&_.supportsCrossDomainXhr||!1,this.v=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!M(_)&&(this.g.G=_,f=this.h,f!==null&&_ in f&&(f=this.h,_ in f&&delete f[_])),this.j=new is(this)}y(Kt,It),Kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){ga(this.g)},Kt.prototype.o=function(f){var _=this.g;if(typeof f=="string"){var E={};E.__data__=f,f=E}else this.v&&(E={},E.__data__=Hi(f),f=E);_.i.push(new bp(_.Ya++,f)),_.I==3&&vi(_)},Kt.prototype.N=function(){this.g.l=null,delete this.j,ga(this.g),delete this.g,Kt.Z.N.call(this)};function uh(f){sa.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var _=f.__sm__;if(_){e:{for(const E in _){f=E;break e}f=void 0}(this.i=f)&&(f=this.i,_=_!==null&&f in _?_[f]:void 0),this.data=_}else this.data=f}y(uh,sa);function ch(){Bl.call(this),this.status=1}y(ch,Bl);function is(f){this.g=f}y(is,lh),is.prototype.ra=function(){Et(this.g,"a")},is.prototype.qa=function(f){Et(this.g,new uh(f))},is.prototype.pa=function(f){Et(this.g,new ch)},is.prototype.oa=function(){Et(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,uP=function(){return new Ea},lP=function(){return Gi()},aP=hr,Ky={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Xi.NO_ERROR=0,Xi.TIMEOUT=8,Xi.HTTP_ERROR=6,Hf=Xi,Ji.COMPLETE="complete",oP=Ji,Hc.EventType=Ki,Ki.OPEN="a",Ki.CLOSE="b",Ki.ERROR="c",Ki.MESSAGE="d",It.prototype.listen=It.prototype.J,zu=Hc,nt.prototype.listenOnce=nt.prototype.K,nt.prototype.getLastError=nt.prototype.Ha,nt.prototype.getLastErrorCode=nt.prototype.ya,nt.prototype.getStatus=nt.prototype.ca,nt.prototype.getResponseJson=nt.prototype.La,nt.prototype.getResponseText=nt.prototype.la,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Fa,sP=nt}).apply(typeof yf<"u"?yf:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nl="12.12.0";function Vz(t){Nl=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new g_("@firebase/firestore");function Ka(){return Ko.logLevel}function de(t,...e){if(Ko.logLevel<=Oe.DEBUG){const n=e.map(P_);Ko.debug(`Firestore (${Nl}): ${t}`,...n)}}function ji(t,...e){if(Ko.logLevel<=Oe.ERROR){const n=e.map(P_);Ko.error(`Firestore (${Nl}): ${t}`,...n)}}function Go(t,...e){if(Ko.logLevel<=Oe.WARN){const n=e.map(P_);Ko.warn(`Firestore (${Nl}): ${t}`,...n)}}function P_(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,cP(t,r,n)}function cP(t,e,n){let r=`FIRESTORE (${Nl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ji(r),new Error(r)}function Ye(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||cP(e,i,r)}function Pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Ui{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nz{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(cn.UNAUTHENTICATED))}shutdown(){}}class Mz{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Lz{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ye(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let a=new Ms;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ms,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=a;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ms)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ye(typeof r.accessToken=="string",31837,{l:r}),new hP(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class Oz{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Fz{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Oz(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ax{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jz{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ye(this.o===void 0,3512);const r=a=>{a.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,de("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const i=a=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ax(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ax(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $z(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=$z(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<n&&(r+=e.charAt(i[a]%62))}return r}}function Fe(t,e){return t<e?-1:t>e?1:0}function Gy(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),a=e.charAt(r);if(i!==a)return Wg(i)===Wg(a)?Fe(i,a):Wg(i)?1:-1}return Fe(t.length,e.length)}const Uz=55296,zz=57343;function Wg(t){const e=t.charCodeAt(0);return e>=Uz&&e<=zz}function wl(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx="__name__";class Jr{constructor(e,n,r){n===void 0?n=0:n>e.length&&Se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const a=Jr.compareSegments(e.get(i),n.get(i));if(a!==0)return a}return Fe(e.length,n.length)}static compareSegments(e,n){const r=Jr.isNumericId(e),i=Jr.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Jr.extractNumericId(e).compare(Jr.extractNumericId(n)):Gy(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ns.fromString(e.substring(4,e.length-2))}}class st extends Jr{construct(e,n,r){return new st(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new fe(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new st(n)}static emptyPath(){return new st([])}}const Bz=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends Jr{construct(e,n,r){return new en(e,n,r)}static isValidIdentifier(e){return Bz.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lx}static keyField(){return new en([lx])}static fromServerFormat(e){const n=[];let r="",i=0;const a=()=>{if(r.length===0)throw new fe(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let l=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new fe(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new fe(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(r+=c,i++):(a(),i++)}if(a(),l)throw new fe(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(n)}static emptyPath(){return new en([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(st.fromString(e))}static fromName(e){return new _e(st.fromString(e).popFirst(5))}static empty(){return new _e(st.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&st.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return st.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new st(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e,n){if(!n)throw new fe(Z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wz(t,e,n,r){if(e===!0&&r===!0)throw new fe(Z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ux(t){if(!_e.isDocumentKey(t))throw new fe(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function cx(t){if(_e.isDocumentKey(t))throw new fe(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dP(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function gp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Se(12329,{type:typeof t})}function Pd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=gp(t);throw new fe(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Lc(t,e){if(!dP(t))throw new fe(Z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const l=t[r];if(i&&typeof l!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&l!==a.value){n=`Expected '${r}' field to equal '${a.value}'`;break}}if(n)throw new fe(Z.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=-62135596800,fx=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*fx);return new ct(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hx)throw new fe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fx}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lc(e,ct._jsonSchema))return new ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-hx;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ct._jsonSchemaVersion="firestore/timestamp/1.0",ct._jsonSchema={type:Dt("string",ct._jsonSchemaVersion),seconds:Dt("number"),nanoseconds:Dt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{static fromTimestamp(e){return new Ce(e)}static min(){return new Ce(new ct(0,0))}static max(){return new Ce(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=-1;function Hz(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new zs(i,_e.empty(),e)}function qz(t){return new zs(t.readTime,t.key,mc)}class zs{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zs(Ce.min(),_e.empty(),mc)}static max(){return new zs(Ce.max(),_e.empty(),mc)}}function Kz(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(t.documentKey,e.documentKey),n!==0?n:Fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gz="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qz{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(t){if(t.code!==Z.FAILED_PRECONDITION||t.message!==Gz)throw t;de("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ee((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(n,a).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ee?n:ee.resolve(n)}catch(n){return ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.reject(n)}static resolve(e){return new ee((n,r)=>{n(e)})}static reject(e){return new ee((n,r)=>{r(e)})}static waitFor(e){return new ee((n,r)=>{let i=0,a=0,l=!1;e.forEach(c=>{++i,c.next(()=>{++a,l&&a===i&&n()},h=>r(h))}),l=!0,a===i&&n()})}static or(e){let n=ee.resolve(!1);for(const r of e)n=n.next(i=>i?ee.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,a)=>{r.push(n.call(this,i,a))}),this.waitFor(r)}static mapArray(e,n){return new ee((r,i)=>{const a=e.length,l=new Array(a);let c=0;for(let h=0;h<a;h++){const p=h;n(e[p]).next(m=>{l[p]=m,++c,c===a&&r(l)},m=>i(m))}})}static doWhile(e,n){return new ee((r,i)=>{const a=()=>{e()===!0?n().next(()=>{a()},i):r()};a()})}}function Yz(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ll(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}yp.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=-1;function vp(t){return t==null}function Rd(t){return t===0&&1/t==-1/0}function Xz(t){return typeof t=="number"&&Number.isInteger(t)&&!Rd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP="";function Jz(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dx(e)),e=Zz(t.get(n),e);return dx(e)}function Zz(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const a=t.charAt(i);switch(a){case"\0":n+="";break;case pP:n+="";break;default:n+=a}}return n}function dx(t){return t+pP+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n){this.comparator=e,this.root=n||Zt.EMPTY}insert(e,n){return new yt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(e){return new yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vf(this.root,e,this.comparator,!1)}getReverseIterator(){return new vf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vf(this.root,e,this.comparator,!0)}}class vf{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=n?r(e.key,n):1,n&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Zt{constructor(e,n,r,i,a){this.key=e,this.value=n,this.color=r??Zt.RED,this.left=i??Zt.EMPTY,this.right=a??Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,a){return new Zt(e??this.key,n??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,n,r),null):a===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Zt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,n,r,i,a){return this}insert(e,n,r){return new Zt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.comparator=e,this.data=new yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mx(this.data.getIterator())}getIteratorFrom(e){return new mx(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ft(this.comparator);return n.data=e,n}}class mx{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new Ir([])}unionWith(e){let n=new Ft(en.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ir(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wl(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new gP("Invalid base64 string: "+a):a}}(e);return new nn(n)}static fromUint8Array(e){const n=function(i){let a="";for(let l=0;l<i.length;++l)a+=String.fromCharCode(i[l]);return a}(e);return new nn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const e3=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bs(t){if(Ye(!!t,39018),typeof t=="string"){let e=0;const n=e3.exec(t);if(Ye(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xt(t.seconds),nanos:xt(t.nanos)}}function xt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ws(t){return typeof t=="string"?nn.fromBase64String(t):nn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yP="server_timestamp",vP="__type__",_P="__previous_value__",wP="__local_write_time__";function D_(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[vP])==null?void 0:r.stringValue)===yP}function _p(t){const e=t.mapValue.fields[_P];return D_(e)?_p(e):e}function gc(t){const e=Bs(t.mapValue.fields[wP].timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t3{constructor(e,n,r,i,a,l,c,h,p,m,y){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=p,this.isUsingEmulator=m,this.apiKey=y}}const bd="(default)";class yc{constructor(e,n){this.projectId=e,this.database=n||bd}static empty(){return new yc("","")}get isDefaultDatabase(){return this.database===bd}isEqual(e){return e instanceof yc&&e.projectId===this.projectId&&e.database===this.database}}function n3(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new fe(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yc(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP="__type__",TP="__max__",_f={mapValue:{fields:{__type__:{stringValue:TP}}}},SP="__vector__",Dd="value";function Hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?D_(t)?4:i3(t)?9007199254740991:r3(t)?10:11:Se(28295,{value:t})}function li(t,e){if(t===e)return!0;const n=Hs(t);if(n!==Hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return gc(t).isEqual(gc(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=Bs(i.timestampValue),c=Bs(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,a){return Ws(i.bytesValue).isEqual(Ws(a.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,a){return xt(i.geoPointValue.latitude)===xt(a.geoPointValue.latitude)&&xt(i.geoPointValue.longitude)===xt(a.geoPointValue.longitude)}(t,e);case 2:return function(i,a){if("integerValue"in i&&"integerValue"in a)return xt(i.integerValue)===xt(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const l=xt(i.doubleValue),c=xt(a.doubleValue);return l===c?Rd(l)===Rd(c):isNaN(l)&&isNaN(c)}return!1}(t,e);case 9:return wl(t.arrayValue.values||[],e.arrayValue.values||[],li);case 10:case 11:return function(i,a){const l=i.mapValue.fields||{},c=a.mapValue.fields||{};if(px(l)!==px(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!li(l[h],c[h])))return!1;return!0}(t,e);default:return Se(52216,{left:t})}}function vc(t,e){return(t.values||[]).find(n=>li(n,e))!==void 0}function El(t,e){if(t===e)return 0;const n=Hs(t),r=Hs(e);if(n!==r)return Fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return function(a,l){const c=xt(a.integerValue||a.doubleValue),h=xt(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(t,e);case 3:return gx(t.timestampValue,e.timestampValue);case 4:return gx(gc(t),gc(e));case 5:return Gy(t.stringValue,e.stringValue);case 6:return function(a,l){const c=Ws(a),h=Ws(l);return c.compareTo(h)}(t.bytesValue,e.bytesValue);case 7:return function(a,l){const c=a.split("/"),h=l.split("/");for(let p=0;p<c.length&&p<h.length;p++){const m=Fe(c[p],h[p]);if(m!==0)return m}return Fe(c.length,h.length)}(t.referenceValue,e.referenceValue);case 8:return function(a,l){const c=Fe(xt(a.latitude),xt(l.latitude));return c!==0?c:Fe(xt(a.longitude),xt(l.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yx(t.arrayValue,e.arrayValue);case 10:return function(a,l){var w,T,x,P;const c=a.fields||{},h=l.fields||{},p=(w=c[Dd])==null?void 0:w.arrayValue,m=(T=h[Dd])==null?void 0:T.arrayValue,y=Fe(((x=p==null?void 0:p.values)==null?void 0:x.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return y!==0?y:yx(p,m)}(t.mapValue,e.mapValue);case 11:return function(a,l){if(a===_f.mapValue&&l===_f.mapValue)return 0;if(a===_f.mapValue)return 1;if(l===_f.mapValue)return-1;const c=a.fields||{},h=Object.keys(c),p=l.fields||{},m=Object.keys(p);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const w=Gy(h[y],m[y]);if(w!==0)return w;const T=El(c[h[y]],p[m[y]]);if(T!==0)return T}return Fe(h.length,m.length)}(t.mapValue,e.mapValue);default:throw Se(23264,{he:n})}}function gx(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Fe(t,e);const n=Bs(t),r=Bs(e),i=Fe(n.seconds,r.seconds);return i!==0?i:Fe(n.nanos,r.nanos)}function yx(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const a=El(n[i],r[i]);if(a)return a}return Fe(n.length,r.length)}function Tl(t){return Qy(t)}function Qy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Bs(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ws(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return _e.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const a of n.values||[])i?i=!1:r+=",",r+=Qy(a);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",a=!0;for(const l of r)a?a=!1:i+=",",i+=`${l}:${Qy(n.fields[l])}`;return i+"}"}(t.mapValue):Se(61005,{value:t})}function qf(t){switch(Hs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_p(t);return e?16+qf(e):16;case 5:return 2*t.stringValue.length;case 6:return Ws(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,a)=>i+qf(a),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Xo(r.fields,(a,l)=>{i+=a.length+qf(l)}),i}(t.mapValue);default:throw Se(13486,{value:t})}}function vx(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Yy(t){return!!t&&"integerValue"in t}function V_(t){return!!t&&"arrayValue"in t}function _x(t){return!!t&&"nullValue"in t}function wx(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Kf(t){return!!t&&"mapValue"in t}function r3(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[EP])==null?void 0:r.stringValue)===SP}function Zu(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Xo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zu(t.arrayValue.values[n]);return e}return{...t}}function i3(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===TP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.value=e}static empty(){return new Zn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Kf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zu(n)}setAll(e){let n=en.emptyPath(),r={},i=[];e.forEach((l,c)=>{if(!n.isImmediateParentOf(c)){const h=this.getFieldsMap(n);this.applyChanges(h,r,i),r={},i=[],n=c.popLast()}l?r[c.lastSegment()]=Zu(l):i.push(c.lastSegment())});const a=this.getFieldsMap(n);this.applyChanges(a,r,i)}delete(e){const n=this.field(e.popLast());Kf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return li(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Kf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xo(n,(i,a)=>e[i]=a);for(const i of r)delete e[i]}clone(){return new Zn(Zu(this.value))}}function xP(t){const e=[];return Xo(t.fields,(n,r)=>{const i=new en([n]);if(Kf(r)){const a=xP(r.mapValue).fields;if(a.length===0)e.push(i);else for(const l of a)e.push(i.child(l))}else e.push(i)}),new Ir(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n,r,i,a,l,c){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=a,this.data=l,this.documentState=c}static newInvalidDocument(e){return new hn(e,0,Ce.min(),Ce.min(),Ce.min(),Zn.empty(),0)}static newFoundDocument(e,n,r,i){return new hn(e,1,n,Ce.min(),r,i,0)}static newNoDocument(e,n){return new hn(e,2,n,Ce.min(),Ce.min(),Zn.empty(),0)}static newUnknownDocument(e,n){return new hn(e,3,n,Ce.min(),Ce.min(),Zn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.position=e,this.inclusive=n}}function Ex(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const a=e[i],l=t.position[i];if(a.field.isKeyField()?r=_e.comparator(_e.fromName(l.referenceValue),n.key):r=El(l,n.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tx(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!li(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n="asc"){this.field=e,this.dir=n}}function s3(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{}class bt extends IP{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new a3(e,n,r):n==="array-contains"?new c3(e,r):n==="in"?new h3(e,r):n==="not-in"?new f3(e,r):n==="array-contains-any"?new d3(e,r):new bt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new l3(e,r):new u3(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(El(n,this.value)):n!==null&&Hs(this.value)===Hs(n)&&this.matchesComparison(El(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Rr extends IP{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Rr(e,n)}matches(e){return AP(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function AP(t){return t.op==="and"}function CP(t){return o3(t)&&AP(t)}function o3(t){for(const e of t.filters)if(e instanceof Rr)return!1;return!0}function Xy(t){if(t instanceof bt)return t.field.canonicalString()+t.op.toString()+Tl(t.value);if(CP(t))return t.filters.map(e=>Xy(e)).join(",");{const e=t.filters.map(n=>Xy(n)).join(",");return`${t.op}(${e})`}}function kP(t,e){return t instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.field.isEqual(i.field)&&li(r.value,i.value)}(t,e):t instanceof Rr?function(r,i){return i instanceof Rr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((a,l,c)=>a&&kP(l,i.filters[c]),!0):!1}(t,e):void Se(19439)}function PP(t){return t instanceof bt?function(n){return`${n.field.canonicalString()} ${n.op} ${Tl(n.value)}`}(t):t instanceof Rr?function(n){return n.op.toString()+" {"+n.getFilters().map(PP).join(" ,")+"}"}(t):"Filter"}class a3 extends bt{constructor(e,n,r){super(e,n,r),this.key=_e.fromName(r.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.matchesComparison(n)}}class l3 extends bt{constructor(e,n){super(e,"in",n),this.keys=RP("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class u3 extends bt{constructor(e,n){super(e,"not-in",n),this.keys=RP("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function RP(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>_e.fromName(r.referenceValue))}class c3 extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return V_(n)&&vc(n.arrayValue,this.value)}}class h3 extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&vc(this.value.arrayValue,n)}}class f3 extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(vc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!vc(this.value.arrayValue,n)}}class d3 extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!V_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>vc(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p3{constructor(e,n=null,r=[],i=[],a=null,l=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=l,this.endAt=c,this.Te=null}}function Sx(t,e=null,n=[],r=[],i=null,a=null,l=null){return new p3(t,e,n,r,i,a,l)}function N_(t){const e=Pe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xy(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),vp(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Tl(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Tl(r)).join(",")),e.Te=n}return e.Te}function M_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!s3(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!kP(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tx(t.startAt,e.startAt)&&Tx(t.endAt,e.endAt)}function Jy(t){return _e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,n=null,r=[],i=[],a=null,l="F",c=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=l,this.startAt=c,this.endAt=h,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function m3(t,e,n,r,i,a,l,c){return new Ol(t,e,n,r,i,a,l,c)}function bP(t){return new Ol(t)}function xx(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function g3(t){return _e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function DP(t){return t.collectionGroup!==null}function ec(t){const e=Pe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const a of e.explicitOrderBy)e.Ee.push(a),n.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new Ft(en.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(e).forEach(a=>{n.has(a.canonicalString())||a.isKeyField()||e.Ee.push(new _c(a,r))}),n.has(en.keyField().canonicalString())||e.Ee.push(new _c(en.keyField(),r))}return e.Ee}function ii(t){const e=Pe(t);return e.Ie||(e.Ie=y3(e,ec(t))),e.Ie}function y3(t,e){if(t.limitType==="F")return Sx(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const a=i.dir==="desc"?"asc":"desc";return new _c(i.field,a)});const n=t.endAt?new Vd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vd(t.startAt.position,t.startAt.inclusive):null;return Sx(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Zy(t,e){const n=t.filters.concat([e]);return new Ol(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function v3(t,e){const n=t.explicitOrderBy.concat([e]);return new Ol(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function ev(t,e,n){return new Ol(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wp(t,e){return M_(ii(t),ii(e))&&t.limitType===e.limitType}function VP(t){return`${N_(ii(t))}|lt:${t.limitType}`}function Ga(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>PP(i)).join(", ")}]`),vp(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Tl(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Tl(i)).join(",")),`Target(${r})`}(ii(t))}; limitType=${t.limitType})`}function Ep(t,e){return e.isFoundDocument()&&function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):_e.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(t,e)&&function(r,i){for(const a of ec(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(l,c,h){const p=Ex(l,c,h);return l.inclusive?p<=0:p<0}(r.startAt,ec(r),i)||r.endAt&&!function(l,c,h){const p=Ex(l,c,h);return l.inclusive?p>=0:p>0}(r.endAt,ec(r),i))}(t,e)}function _3(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function NP(t){return(e,n)=>{let r=!1;for(const i of ec(t)){const a=w3(i,e,n);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function w3(t,e,n){const r=t.field.isKeyField()?_e.comparator(e.key,n.key):function(a,l,c){const h=l.data.field(a),p=c.data.field(a);return h!==null&&p!==null?El(h,p):Se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Se(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xo(this.inner,(n,r)=>{for(const[i,a]of r)e(i,a)})}isEmpty(){return mP(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E3=new yt(_e.comparator);function $i(){return E3}const MP=new yt(_e.comparator);function Bu(...t){let e=MP;for(const n of t)e=e.insert(n.key,n);return e}function LP(t){let e=MP;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mo(){return tc()}function OP(){return tc()}function tc(){return new Jo(t=>t.toString(),(t,e)=>t.isEqual(e))}const T3=new yt(_e.comparator),S3=new Ft(_e.comparator);function je(...t){let e=S3;for(const n of t)e=e.add(n);return e}const x3=new Ft(Fe);function I3(){return x3}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rd(e)?"-0":e}}function FP(t){return{integerValue:""+t}}function A3(t,e){return Xz(e)?FP(e):L_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this._=void 0}}function C3(t,e,n){return t instanceof Nd?function(i,a){const l={fields:{[vP]:{stringValue:yP},[wP]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&D_(a)&&(a=_p(a)),a&&(l.fields[_P]=a),{mapValue:l}}(n,e):t instanceof wc?$P(t,e):t instanceof Ec?UP(t,e):function(i,a){const l=jP(i,a),c=Ix(l)+Ix(i.Ae);return Yy(l)&&Yy(i.Ae)?FP(c):L_(i.serializer,c)}(t,e)}function k3(t,e,n){return t instanceof wc?$P(t,e):t instanceof Ec?UP(t,e):n}function jP(t,e){return t instanceof Md?function(r){return Yy(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class Nd extends Tp{}class wc extends Tp{constructor(e){super(),this.elements=e}}function $P(t,e){const n=zP(e);for(const r of t.elements)n.some(i=>li(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ec extends Tp{constructor(e){super(),this.elements=e}}function UP(t,e){let n=zP(e);for(const r of t.elements)n=n.filter(i=>!li(i,r));return{arrayValue:{values:n}}}class Md extends Tp{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Ix(t){return xt(t.integerValue||t.doubleValue)}function zP(t){return V_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function P3(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof wc&&i instanceof wc||r instanceof Ec&&i instanceof Ec?wl(r.elements,i.elements,li):r instanceof Md&&i instanceof Md?li(r.Ae,i.Ae):r instanceof Nd&&i instanceof Nd}(t.transform,e.transform)}class R3{constructor(e,n){this.version=e,this.transformResults=n}}class Mi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mi}static exists(e){return new Mi(void 0,e)}static updateTime(e){return new Mi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sp{}function BP(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new HP(t.key,Mi.none()):new Oc(t.key,t.data,Mi.none());{const n=t.data,r=Zn.empty();let i=new Ft(en.comparator);for(let a of e.fields)if(!i.has(a)){let l=n.field(a);l===null&&a.length>1&&(a=a.popLast(),l=n.field(a)),l===null?r.delete(a):r.set(a,l),i=i.add(a)}return new Zo(t.key,r,new Ir(i.toArray()),Mi.none())}}function b3(t,e,n){t instanceof Oc?function(i,a,l){const c=i.value.clone(),h=Cx(i.fieldTransforms,a,l.transformResults);c.setAll(h),a.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Zo?function(i,a,l){if(!Gf(i.precondition,a))return void a.convertToUnknownDocument(l.version);const c=Cx(i.fieldTransforms,a,l.transformResults),h=a.data;h.setAll(WP(i)),h.setAll(c),a.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(t,e,n):function(i,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,n)}function nc(t,e,n,r){return t instanceof Oc?function(a,l,c,h){if(!Gf(a.precondition,l))return c;const p=a.value.clone(),m=kx(a.fieldTransforms,h,l);return p.setAll(m),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(t,e,n,r):t instanceof Zo?function(a,l,c,h){if(!Gf(a.precondition,l))return c;const p=kx(a.fieldTransforms,h,l),m=l.data;return m.setAll(WP(a)),m.setAll(p),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(a,l,c){return Gf(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(t,e,n)}function D3(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),a=jP(r.transform,i||null);a!=null&&(n===null&&(n=Zn.empty()),n.set(r.field,a))}return n||null}function Ax(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&wl(r,i,(a,l)=>P3(a,l))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oc extends Sp{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Zo extends Sp{constructor(e,n,r,i,a=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function WP(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cx(t,e,n){const r=new Map;Ye(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const a=t[i],l=a.transform,c=e.data.field(a.field);r.set(a.field,k3(l,c,n[i]))}return r}function kx(t,e,n){const r=new Map;for(const i of t){const a=i.transform,l=n.data.field(i.field);r.set(i.field,C3(a,l,e))}return r}class HP extends Sp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class V3 extends Sp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&b3(a,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=nc(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=nc(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=OP();return this.mutations.forEach(i=>{const a=e.get(i.key),l=a.overlayedDocument;let c=this.applyToLocalView(l,a.mutatedFields);c=n.has(i.key)?null:c;const h=BP(l,c);h!==null&&r.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),je())}isEqual(e){return this.batchId===e.batchId&&wl(this.mutations,e.mutations,(n,r)=>Ax(n,r))&&wl(this.baseMutations,e.baseMutations,(n,r)=>Ax(n,r))}}class O_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ye(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return T3}();const a=e.mutations;for(let l=0;l<a.length;l++)i=i.insert(a[l].key,r[l].version);return new O_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L3{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt,Be;function O3(t){switch(t){case Z.OK:return Se(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return Se(15467,{code:t})}}function qP(t){if(t===void 0)return ji("GRPC error has no .code"),Z.UNKNOWN;switch(t){case kt.OK:return Z.OK;case kt.CANCELLED:return Z.CANCELLED;case kt.UNKNOWN:return Z.UNKNOWN;case kt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case kt.INTERNAL:return Z.INTERNAL;case kt.UNAVAILABLE:return Z.UNAVAILABLE;case kt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case kt.NOT_FOUND:return Z.NOT_FOUND;case kt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case kt.ABORTED:return Z.ABORTED;case kt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case kt.DATA_LOSS:return Z.DATA_LOSS;default:return Se(39323,{code:t})}}(Be=kt||(kt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F3(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j3=new Ns([4294967295,4294967295],0);function Px(t){const e=F3().encode(t),n=new iP;return n.update(e),new Uint8Array(n.digest())}function Rx(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ns([n,r],0),new Ns([i,a],0)]}class F_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Wu(`Invalid padding: ${n}`);if(r<0)throw new Wu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wu(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Wu(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ns.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Ns.fromNumber(r)));return i.compare(j3)===1&&(i=new Ns([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Px(e),[r,i]=Rx(n);for(let a=0;a<this.hashCount;a++){const l=this.ye(r,i,a);if(!this.we(l))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new F_(a,i,n);return r.forEach(c=>l.insert(c)),l}insert(e){if(this.ge===0)return;const n=Px(e),[r,i]=Rx(n);for(let a=0;a<this.hashCount;a++){const l=this.ye(r,i,a);this.Se(l)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Wu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,r,i,a){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Fc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xp(Ce.min(),i,new yt(Fe),$i(),je())}}class Fc{constructor(e,n,r,i,a){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fc(r,n,je(),je(),je())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class KP{constructor(e,n){this.targetId=e,this.Ce=n}}class GP{constructor(e,n,r=nn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bx{constructor(){this.ve=0,this.Fe=Dx(),this.Me=nn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=je(),n=je(),r=je();return this.Fe.forEach((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Se(38017,{changeType:a})}}),new Fc(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Dx()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class $3{constructor(e){this.Ge=e,this.ze=new Map,this.je=$i(),this.Je=wf(),this.He=wf(),this.Ze=new yt(Fe)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const a=i.target;if(Jy(a))if(r===0){const l=new _e(a.path);this.et(n,l,hn.newNoDocument(l,Ce.min()))}else Ye(r===1,20013,{expectedCount:r});else{const l=this._t(n);if(l!==r){const c=this.ut(e),h=c?this.ct(c,e,l):1;if(h!==0){this.it(n);const p=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,p)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=n;let l,c;try{l=Ws(r).toUint8Array()}catch(h){if(h instanceof gP)return Go("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new F_(l,i,a)}catch(h){return Go(h instanceof Wu?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(a=>{const l=this.Ge.ht(),c=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(c)||(this.et(n,a,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((a,l)=>{const c=this.ot(l);if(c){if(a.current&&Jy(c.target)){const h=new _e(c.target.path);this.Et(h).has(l)||this.It(l,h)||this.et(l,h,hn.newNoDocument(h,e))}a.Be&&(n.set(l,a.ke()),a.qe())}});let r=je();this.He.forEach((a,l)=>{let c=!0;l.forEachWhile(h=>{const p=this.ot(h);return!p||p.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(a))}),this.je.forEach((a,l)=>l.setReadTime(e));const i=new xp(e,n,this.Ze,this.je,r);return this.je=$i(),this.Je=wf(),this.He=wf(),this.Ze=new yt(Fe),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new bx,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ft(Fe),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ft(Fe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||de("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new bx),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function wf(){return new yt(_e.comparator)}function Dx(){return new yt(_e.comparator)}const U3={asc:"ASCENDING",desc:"DESCENDING"},z3={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},B3={and:"AND",or:"OR"};class W3{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tv(t,e){return t.useProto3Json||vp(e)?e:{value:e}}function Ld(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function H3(t,e){return Ld(t,e.toTimestamp())}function si(t){return Ye(!!t,49232),Ce.fromTimestamp(function(n){const r=Bs(n);return new ct(r.seconds,r.nanos)}(t))}function j_(t,e){return nv(t,e).canonicalString()}function nv(t,e){const n=function(i){return new st(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function YP(t){const e=st.fromString(t);return Ye(tR(e),10190,{key:e.toString()}),e}function rv(t,e){return j_(t.databaseId,e.path)}function Hg(t,e){const n=YP(e);if(n.get(1)!==t.databaseId.projectId)throw new fe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new fe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _e(JP(n))}function XP(t,e){return j_(t.databaseId,e)}function q3(t){const e=YP(t);return e.length===4?st.emptyPath():JP(e)}function iv(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function JP(t){return Ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Vx(t,e,n){return{name:rv(t,e),fields:n.value.mapValue.fields}}function K3(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Se(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=function(p,m){return p.useProto3Json?(Ye(m===void 0||typeof m=="string",58123),nn.fromBase64String(m||"")):(Ye(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),nn.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),l=e.targetChange.cause,c=l&&function(p){const m=p.code===void 0?Z.UNKNOWN:qP(p.code);return new fe(m,p.message||"")}(l);n=new GP(r,i,a,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hg(t,r.document.name),a=si(r.document.updateTime),l=r.document.createTime?si(r.document.createTime):Ce.min(),c=new Zn({mapValue:{fields:r.document.fields}}),h=hn.newFoundDocument(i,a,l,c),p=r.targetIds||[],m=r.removedTargetIds||[];n=new Qf(p,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Hg(t,r.document),a=r.readTime?si(r.readTime):Ce.min(),l=hn.newNoDocument(i,a),c=r.removedTargetIds||[];n=new Qf([],c,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Hg(t,r.document),a=r.removedTargetIds||[];n=new Qf([],a,i,null)}else{if(!("filter"in e))return Se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,l=new L3(i,a),c=r.targetId;n=new KP(c,l)}}return n}function G3(t,e){let n;if(e instanceof Oc)n={update:Vx(t,e.key,e.value)};else if(e instanceof HP)n={delete:rv(t,e.key)};else if(e instanceof Zo)n={update:Vx(t,e.key,e.data),updateMask:rB(e.fieldMask)};else{if(!(e instanceof V3))return Se(16599,{dt:e.type});n={verify:rv(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(a,l){const c=l.transform;if(c instanceof Nd)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof wc)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ec)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Md)return{fieldPath:l.field.canonicalString(),increment:c.Ae};throw Se(20930,{transform:l.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,a){return a.updateTime!==void 0?{updateTime:H3(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Se(27497)}(t,e.precondition)),n}function Q3(t,e){return t&&t.length>0?(Ye(e!==void 0,14353),t.map(n=>function(i,a){let l=i.updateTime?si(i.updateTime):si(a);return l.isEqual(Ce.min())&&(l=si(a)),new R3(l,i.transformResults||[])}(n,e))):[]}function Y3(t,e){return{documents:[XP(t,e.path)]}}function X3(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=XP(t,i);const a=function(p){if(p.length!==0)return eR(Rr.create(p,"and"))}(e.filters);a&&(n.structuredQuery.where=a);const l=function(p){if(p.length!==0)return p.map(m=>function(w){return{field:Qa(w.field),direction:eB(w.dir)}}(m))}(e.orderBy);l&&(n.structuredQuery.orderBy=l);const c=tv(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ft:n,parent:i}}function J3(t){let e=q3(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ye(r===1,65062);const m=n.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let a=[];n.where&&(a=function(y){const w=ZP(y);return w instanceof Rr&&CP(w)?w.getFilters():[w]}(n.where));let l=[];n.orderBy&&(l=function(y){return y.map(w=>function(x){return new _c(Ya(x.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(n.orderBy));let c=null;n.limit&&(c=function(y){let w;return w=typeof y=="object"?y.value:y,vp(w)?null:w}(n.limit));let h=null;n.startAt&&(h=function(y){const w=!!y.before,T=y.values||[];return new Vd(T,w)}(n.startAt));let p=null;return n.endAt&&(p=function(y){const w=!y.before,T=y.values||[];return new Vd(T,w)}(n.endAt)),m3(e,i,l,a,c,"F",h,p)}function Z3(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ZP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ya(n.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ya(n.unaryFilter.field);return bt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ya(n.unaryFilter.field);return bt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Ya(n.unaryFilter.field);return bt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}}(t):t.fieldFilter!==void 0?function(n){return bt.create(Ya(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Rr.create(n.compositeFilter.filters.map(r=>ZP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Se(1026)}}(n.compositeFilter.op))}(t):Se(30097,{filter:t})}function eB(t){return U3[t]}function tB(t){return z3[t]}function nB(t){return B3[t]}function Qa(t){return{fieldPath:t.canonicalString()}}function Ya(t){return en.fromServerFormat(t.fieldPath)}function eR(t){return t instanceof bt?function(n){if(n.op==="=="){if(wx(n.value))return{unaryFilter:{field:Qa(n.field),op:"IS_NAN"}};if(_x(n.value))return{unaryFilter:{field:Qa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wx(n.value))return{unaryFilter:{field:Qa(n.field),op:"IS_NOT_NAN"}};if(_x(n.value))return{unaryFilter:{field:Qa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qa(n.field),op:tB(n.op),value:n.value}}}(t):t instanceof Rr?function(n){const r=n.getFilters().map(i=>eR(i));return r.length===1?r[0]:{compositeFilter:{op:nB(n.op),filters:r}}}(t):Se(54877,{filter:t})}function rB(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function tR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function nR(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n,r,i,a=Ce.min(),l=Ce.min(),c=nn.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new ks(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e){this.yt=e}}function sB(t){const e=J3({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ev(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oB{constructor(){this.bn=new aB}addToCollectionParentIndex(e,n){return this.bn.add(n),ee.resolve()}getCollectionParents(e,n){return ee.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return ee.resolve()}deleteFieldIndex(e,n){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,n){return ee.resolve()}getDocumentsMatchingTarget(e,n){return ee.resolve(null)}getIndexType(e,n){return ee.resolve(0)}getFieldIndexes(e,n){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,n){return ee.resolve(zs.min())}getMinOffsetFromCollectionGroup(e,n){return ee.resolve(zs.min())}updateCollectionGroup(e,n,r){return ee.resolve()}updateIndexEntries(e,n){return ee.resolve()}}class aB{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ft(st.comparator),a=!i.has(r);return this.index[n]=i.add(r),a}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ft(st.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rR=41943040;class An{static withCacheSize(e){return new An(e,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An.DEFAULT_COLLECTION_PERCENTILE=10,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,An.DEFAULT=new An(rR,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),An.DISABLED=new An(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Sl(0)}static ar(){return new Sl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx="LruGarbageCollector",lB=1048576;function Lx([t,e],[n,r]){const i=Fe(t,n);return i===0?Fe(e,r):i}class uB{constructor(e){this.Pr=e,this.buffer=new Ft(Lx),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Lx(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class cB{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){de(Mx,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ll(n)?de(Mx,"Ignoring IndexedDB error during garbage collection: ",n):await Ml(n)}await this.Ar(3e5)})}}class hB{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return ee.resolve(yp.ce);const r=new uB(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(Nx)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Nx):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,a,l,c,h,p;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,l=Date.now(),this.nthSequenceNumber(e,i))).next(y=>(r=y,c=Date.now(),this.removeTargets(e,r,n))).next(y=>(a=y,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(p=Date.now(),Ka()<=Oe.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-m}ms
	Determined least recently used ${i} in `+(c-l)+`ms
	Removed ${a} targets in `+(h-c)+`ms
	Removed ${y} documents in `+(p-h)+`ms
Total Duration: ${p-m}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:y})))}}function fB(t,e){return new hB(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dB{constructor(){this.changes=new Jo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?ee.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pB{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mB{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&nc(r.mutation,i,Ir.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,je()).next(()=>r))}getLocalViewOfDocuments(e,n,r=je()){const i=Mo();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(a=>{let l=Bu();return a.forEach((c,h)=>{l=l.insert(c,h.overlayedDocument)}),l}))}getOverlayedDocuments(e,n){const r=Mo();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,je()))}populateOverlays(e,n,r){const i=[];return r.forEach(a=>{n.has(a)||i.push(a)}),this.documentOverlayCache.getOverlays(e,i).next(a=>{a.forEach((l,c)=>{n.set(l,c)})})}computeViews(e,n,r,i){let a=$i();const l=tc(),c=function(){return tc()}();return n.forEach((h,p)=>{const m=r.get(p.key);i.has(p.key)&&(m===void 0||m.mutation instanceof Zo)?a=a.insert(p.key,p):m!==void 0?(l.set(p.key,m.mutation.getFieldMask()),nc(m.mutation,p,m.mutation.getFieldMask(),ct.now())):l.set(p.key,Ir.empty())}),this.recalculateAndSaveOverlays(e,a).next(h=>(h.forEach((p,m)=>l.set(p,m)),n.forEach((p,m)=>c.set(p,new pB(m,l.get(p)??null))),c))}recalculateAndSaveOverlays(e,n){const r=tc();let i=new yt((l,c)=>l-c),a=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(l=>{for(const c of l)c.keys().forEach(h=>{const p=n.get(h);if(p===null)return;let m=r.get(h)||Ir.empty();m=c.applyToLocalView(p,m),r.set(h,m);const y=(i.get(c.batchId)||je()).add(h);i=i.insert(c.batchId,y)})}).next(()=>{const l=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),p=h.key,m=h.value,y=OP();m.forEach(w=>{if(!a.has(w)){const T=BP(n.get(w),r.get(w));T!==null&&y.set(w,T),a=a.add(w)}}),l.push(this.documentOverlayCache.saveOverlays(e,p,y))}return ee.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return g3(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):DP(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(a=>{const l=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-a.size):ee.resolve(Mo());let c=mc,h=a;return l.next(p=>ee.forEach(p,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),a.get(m)?ee.resolve():this.remoteDocumentCache.getEntry(e,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(e,p,a)).next(()=>this.computeViews(e,h,p,je())).next(m=>({batchId:c,changes:LP(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next(r=>{let i=Bu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const a=n.collectionGroup;let l=Bu();return this.indexManager.getCollectionParents(e,a).next(c=>ee.forEach(c,h=>{const p=function(y,w){return new Ol(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,h.child(a));return this.getDocumentsMatchingCollectionQuery(e,p,r,i).next(m=>{m.forEach((y,w)=>{l=l.insert(y,w)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,n,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,a,i))).next(l=>{a.forEach((h,p)=>{const m=p.getKey();l.get(m)===null&&(l=l.insert(m,hn.newInvalidDocument(m)))});let c=Bu();return l.forEach((h,p)=>{const m=a.get(h);m!==void 0&&nc(m.mutation,p,Ir.empty(),ct.now()),Ep(n,p)&&(c=c.insert(h,p))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gB{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return ee.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:si(i.createTime)}}(n)),ee.resolve()}getNamedQuery(e,n){return ee.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:sB(i.bundledQuery),readTime:si(i.readTime)}}(n)),ee.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yB{constructor(){this.overlays=new yt(_e.comparator),this.Lr=new Map}getOverlay(e,n){return ee.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mo();return ee.forEach(n,i=>this.getOverlay(e,i).next(a=>{a!==null&&r.set(i,a)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,a)=>{this.St(e,n,a)}),ee.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(a=>this.overlays=this.overlays.remove(a)),this.Lr.delete(r)),ee.resolve()}getOverlaysForCollection(e,n,r){const i=Mo(),a=n.length+1,l=new _e(n.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,p=h.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===a&&h.largestBatchId>r&&i.set(h.getKey(),h)}return ee.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let a=new yt((p,m)=>p-m);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>r){let m=a.get(p.largestBatchId);m===null&&(m=Mo(),a=a.insert(p.largestBatchId,m)),m.set(p.getKey(),p)}}const c=Mo(),h=a.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((p,m)=>c.set(p,m)),!(c.size()>=i)););return ee.resolve(c)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new M3(n,r));let a=this.Lr.get(n);a===void 0&&(a=je(),this.Lr.set(n,a)),this.Lr.set(n,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vB{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.kr=new Ft(zt.qr),this.Kr=new Ft(zt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new zt(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new zt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new _e(new st([])),r=new zt(n,e),i=new zt(n,e+1),a=[];return this.Kr.forEachInRange([r,i],l=>{this.Wr(l),a.push(l.key)}),a}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new _e(new st([])),r=new zt(n,e),i=new zt(n,e+1);let a=je();return this.Kr.forEachInRange([r,i],l=>{a=a.add(l.key)}),a}containsKey(e){const n=new zt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class zt{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return _e.comparator(e.key,n.key)||Fe(e.Jr,n.Jr)}static Ur(e,n){return Fe(e.Jr,n.Jr)||_e.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _B{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ft(zt.qr)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new N3(a,n,r,i);this.mutationQueue.push(l);for(const c of i)this.Hr=this.Hr.add(new zt(c.key,a)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return ee.resolve(l)}lookupMutationBatch(e,n){return ee.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),a=i<0?0:i;return ee.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?b_:this.Yn-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new zt(n,0),i=new zt(n,Number.POSITIVE_INFINITY),a=[];return this.Hr.forEachInRange([r,i],l=>{const c=this.Zr(l.Jr);a.push(c)}),ee.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ft(Fe);return n.forEach(i=>{const a=new zt(i,0),l=new zt(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([a,l],c=>{r=r.add(c.Jr)})}),ee.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let a=r;_e.isDocumentKey(a)||(a=a.child(""));const l=new zt(new _e(a),0);let c=new Ft(Fe);return this.Hr.forEachWhile(h=>{const p=h.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(c=c.add(h.Jr)),!0)},l),ee.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ye(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return ee.forEach(n.mutations,i=>{const a=new zt(i.key,n.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new zt(n,0),i=this.Hr.firstAfterOrEqual(r);return ee.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wB{constructor(e){this.ti=e,this.docs=function(){return new yt(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),a=i?i.size:0,l=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return ee.resolve(r?r.document.mutableCopy():hn.newInvalidDocument(n))}getEntries(e,n){let r=$i();return n.forEach(i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():hn.newInvalidDocument(i))}),ee.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let a=$i();const l=n.path,c=new _e(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:p,value:{document:m}}=h.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||Kz(qz(m),r)<=0||(i.has(m.key)||Ep(n,m))&&(a=a.insert(m.key,m.mutableCopy()))}return ee.resolve(a)}getAllFromCollectionGroup(e,n,r,i){Se(9500)}ni(e,n){return ee.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new EB(this)}getSize(e){return ee.resolve(this.size)}}class EB extends dB{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),ee.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TB{constructor(e){this.persistence=e,this.ri=new Jo(n=>N_(n),M_),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.ii=0,this.si=new $_,this.targetCount=0,this.oi=Sl._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),ee.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Sl(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,ee.resolve()}updateTargetData(e,n){return this.lr(n),ee.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,n,r){let i=0;const a=[];return this.ri.forEach((l,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(l),a.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),ee.waitFor(a).next(()=>i)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return ee.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),ee.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,a=[];return i&&n.forEach(l=>{a.push(i.markPotentiallyOrphaned(e,l))}),ee.waitFor(a)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),ee.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return ee.resolve(r)}containsKey(e,n){return ee.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n){this._i={},this.overlays={},this.ai=new yp(0),this.ui=!1,this.ui=!0,this.ci=new vB,this.referenceDelegate=e(this),this.li=new TB(this),this.indexManager=new oB,this.remoteDocumentCache=function(i){return new wB(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new iB(n),this.Pi=new gB(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yB,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new _B(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){de("MemoryPersistence","Starting transaction:",e);const i=new SB(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(a=>this.referenceDelegate.Ei(i).next(()=>a)).toPromise().then(a=>(i.raiseOnCommittedEvent(),a))}Ii(e,n){return ee.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class SB extends Qz{constructor(e){super(),this.currentSequenceNumber=e}}class U_{constructor(e){this.persistence=e,this.Ri=new $_,this.Ai=null}static Vi(e){return new U_(e)}get di(){if(this.Ai)return this.Ai;throw Se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),ee.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),ee.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),ee.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(a=>this.di.add(a.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.di,r=>{const i=_e.fromPath(r);return this.mi(e,i).next(a=>{a||n.removeEntry(i,Ce.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return ee.or([()=>ee.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Od{constructor(e,n){this.persistence=e,this.fi=new Jo(r=>Jz(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=fB(this,n)}static Vi(e,n){return new Od(e,n)}Ti(){}Ei(e){return ee.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return ee.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(a=>a?ee.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ni(e,l=>this.wr(e,l,n).next(c=>{c||(r++,a.removeEntry(l,Ce.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),ee.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),ee.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),ee.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=qf(e.data.value)),n}wr(e,n,r){return ee.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return ee.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=je(),i=je();for(const a of n.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new z_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xB{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IB{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Z$()?8:Yz(fn())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const a={result:null};return this.gs(e,n).next(l=>{a.result=l}).next(()=>{if(!a.result)return this.ps(e,n,i,r).next(l=>{a.result=l})}).next(()=>{if(a.result)return;const l=new xB;return this.ys(e,n,l).next(c=>{if(a.result=c,this.As)return this.ws(e,n,l,c.size)})}).next(()=>a.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Ka()<=Oe.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",Ga(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ee.resolve()):(Ka()<=Oe.DEBUG&&de("QueryEngine","Query:",Ga(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Ka()<=Oe.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",Ga(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ii(n))):ee.resolve())}gs(e,n){if(xx(n))return ee.resolve(null);let r=ii(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ev(n,null,"F"),r=ii(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const l=je(...a);return this.fs.getDocuments(e,l).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const p=this.Ss(n,c);return this.bs(n,p,l,h.readTime)?this.gs(e,ev(n,null,"F")):this.Ds(e,p,n,h)}))})))}ps(e,n,r,i){return xx(n)||i.isEqual(Ce.min())?ee.resolve(null):this.fs.getDocuments(e,r).next(a=>{const l=this.Ss(n,a);return this.bs(n,l,r,i)?ee.resolve(null):(Ka()<=Oe.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ga(n)),this.Ds(e,l,n,Hz(i,mc)).next(c=>c))})}Ss(e,n){let r=new Ft(NP(e));return n.forEach((i,a)=>{Ep(e,a)&&(r=r.add(a))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const a=e.limitType==="F"?n.last():n.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}ys(e,n,r){return Ka()<=Oe.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",Ga(n)),this.fs.getDocumentsMatchingQuery(e,n,zs.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(a=>(n.forEach(l=>{a=a.insert(l.key,l)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_="LocalStore",AB=3e8;class CB{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new yt(Fe),this.Fs=new Jo(a=>N_(a),M_),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mB(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function kB(t,e,n,r){return new CB(t,e,n,r)}async function sR(t,e){const n=Pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(a=>(i=a,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(a=>{const l=[],c=[];let h=je();for(const p of i){l.push(p.batchId);for(const m of p.mutations)h=h.add(m.key)}for(const p of a){c.push(p.batchId);for(const m of p.mutations)h=h.add(m.key)}return n.localDocuments.getDocuments(r,h).next(p=>({Ns:p,removedBatchIds:l,addedBatchIds:c}))})})}function PB(t,e){const n=Pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),a=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,h,p,m){const y=p.batch,w=y.keys();let T=ee.resolve();return w.forEach(x=>{T=T.next(()=>m.getEntry(h,x)).next(P=>{const k=p.docVersions.get(x);Ye(k!==null,48541),P.version.compareTo(k)<0&&(y.applyToRemoteDocument(P,p),P.isValidDocument()&&(P.setReadTime(p.commitVersion),m.addEntry(P)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(h,y))}(n,r,e,a).next(()=>a.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=je();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(h=h.add(c.batch.mutations[p].key));return h}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oR(t){const e=Pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function RB(t,e){const n=Pe(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const l=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const c=[];e.targetChanges.forEach((m,y)=>{const w=i.get(y);if(!w)return;c.push(n.li.removeMatchingKeys(a,m.removedDocuments,y).next(()=>n.li.addMatchingKeys(a,m.addedDocuments,y)));let T=w.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(y)!==null?T=T.withResumeToken(nn.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):m.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(m.resumeToken,r)),i=i.insert(y,T),function(P,k,b){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=AB?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(w,T,m)&&c.push(n.li.updateTargetData(a,T))});let h=$i(),p=je();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(a,m))}),c.push(bB(a,l,e.documentUpdates).next(m=>{h=m.Bs,p=m.Ls})),!r.isEqual(Ce.min())){const m=n.li.getLastRemoteSnapshotVersion(a).next(y=>n.li.setTargetsMetadata(a,a.currentSequenceNumber,r));c.push(m)}return ee.waitFor(c).next(()=>l.apply(a)).next(()=>n.localDocuments.getLocalViewOfDocuments(a,h,p)).next(()=>h)}).then(a=>(n.vs=i,a))}function bB(t,e,n){let r=je(),i=je();return n.forEach(a=>r=r.add(a)),e.getEntries(t,r).next(a=>{let l=$i();return n.forEach((c,h)=>{const p=a.get(c);h.isFoundDocument()!==p.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(Ce.min())?(e.removeEntry(c,h.readTime),l=l.insert(c,h)):!p.isValidDocument()||h.version.compareTo(p.version)>0||h.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(h),l=l.insert(c,h)):de(B_,"Ignoring outdated watch update for ",c,". Current version:",p.version," Watch version:",h.version)}),{Bs:l,Ls:i}})}function DB(t,e){const n=Pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=b_),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VB(t,e){const n=Pe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(a=>a?(i=a,ee.resolve(i)):n.li.allocateTargetId(r).next(l=>(i=new ks(e,l,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function sv(t,e,n){const r=Pe(t),i=r.vs.get(e),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!Ll(l))throw l;de(B_,`Failed to update sequence numbers for target ${e}: ${l}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Ox(t,e,n){const r=Pe(t);let i=Ce.min(),a=je();return r.persistence.runTransaction("Execute query","readwrite",l=>function(h,p,m){const y=Pe(h),w=y.Fs.get(m);return w!==void 0?ee.resolve(y.vs.get(w)):y.li.getTargetData(p,m)}(r,l,ii(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(l,c.targetId).next(h=>{a=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(l,e,n?i:Ce.min(),n?a:je())).next(c=>(NB(r,_3(e),c),{documents:c,ks:a})))}function NB(t,e,n){let r=t.Ms.get(e)||Ce.min();n.forEach((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),t.Ms.set(e,r)}class Fx{constructor(){this.activeTargetIds=I3()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MB{constructor(){this.vo=new Fx,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Fx,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LB{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx="ConnectivityMonitor";class $x{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){de(jx,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){de(jx,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ef=null;function ov(){return Ef===null?Ef=function(){return 268435456+Math.round(2147483648*Math.random())}():Ef++,"0x"+Ef.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="RestConnection",OB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class FB{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===bd?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,a){const l=ov(),c=this.Qo(e,n.toUriEncodedString());de(qg,`Sending RPC '${e}' ${l}:`,c,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,i,a);const{host:p}=new URL(c),m=bc(p);return this.zo(e,c,h,r,m).then(y=>(de(qg,`Received RPC '${e}' ${l}: `,y),y),y=>{throw Go(qg,`RPC '${e}' ${l} failed with error: `,y,"url: ",c,"request:",r),y})}jo(e,n,r,i,a,l){return this.Wo(e,n,r,i,a)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>e[a]=i),r&&r.headers.forEach((i,a)=>e[a]=i)}Qo(e,n){const r=OB[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jB{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="WebChannelConnection",Lu=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ol extends FB{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ol.c_){const e=lP();Lu(e,aP.STAT_EVENT,n=>{n.stat===Ky.PROXY?de(un,"STAT_EVENT: detected buffering proxy"):n.stat===Ky.NOPROXY&&de(un,"STAT_EVENT: detected no buffering proxy")}),ol.c_=!0}}zo(e,n,r,i,a){const l=ov();return new Promise((c,h)=>{const p=new sP;p.setWithCredentials(!0),p.listenOnce(oP.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Hf.NO_ERROR:const y=p.getResponseJson();de(un,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(y)),c(y);break;case Hf.TIMEOUT:de(un,`RPC '${e}' ${l} timed out`),h(new fe(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Hf.HTTP_ERROR:const w=p.getStatus();if(de(un,`RPC '${e}' ${l} failed with status:`,w,"response text:",p.getResponseText()),w>0){let T=p.getResponseJson();Array.isArray(T)&&(T=T[0]);const x=T==null?void 0:T.error;if(x&&x.status&&x.message){const P=function(b){const F=b.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(F)>=0?F:Z.UNKNOWN}(x.status);h(new fe(P,x.message))}else h(new fe(Z.UNKNOWN,"Server responded with status "+p.getStatus()))}else h(new fe(Z.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{l_:e,streamId:l,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{de(un,`RPC '${e}' ${l} completed.`)}});const m=JSON.stringify(i);de(un,`RPC '${e}' ${l} sending request:`,i),p.send(n,"POST",m,r,15)})}T_(e,n,r){const i=ov(),a=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const p=a.join("");de(un,`Creating RPC '${e}' stream ${i}: ${p}`,c);const m=l.createWebChannel(p,c);this.E_(m);let y=!1,w=!1;const T=new jB({Jo:x=>{w?de(un,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(y||(de(un,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),de(un,`RPC '${e}' stream ${i} sending:`,x),m.send(x))},Ho:()=>m.close()});return Lu(m,zu.EventType.OPEN,()=>{w||(de(un,`RPC '${e}' stream ${i} transport opened.`),T.i_())}),Lu(m,zu.EventType.CLOSE,()=>{w||(w=!0,de(un,`RPC '${e}' stream ${i} transport closed`),T.o_(),this.I_(m))}),Lu(m,zu.EventType.ERROR,x=>{w||(w=!0,Go(un,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),T.o_(new fe(Z.UNAVAILABLE,"The operation could not be completed")))}),Lu(m,zu.EventType.MESSAGE,x=>{var P;if(!w){const k=x.data[0];Ye(!!k,16349);const b=k,F=(b==null?void 0:b.error)||((P=b[0])==null?void 0:P.error);if(F){de(un,`RPC '${e}' stream ${i} received error:`,F);const U=F.status;let $=function(C){const I=kt[C];if(I!==void 0)return qP(I)}(U),H=F.message;U==="NOT_FOUND"&&H.includes("database")&&H.includes("does not exist")&&H.includes(this.databaseId.database)&&Go(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),$===void 0&&($=Z.INTERNAL,H="Unknown error status: "+U+" with message "+F.message),w=!0,T.o_(new fe($,H)),m.close()}else de(un,`RPC '${e}' stream ${i} received:`,k),T.__(k)}}),ol.u_(),setTimeout(()=>{T.s_()},0),T}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return uP()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $B(t){return new ol(t)}function Kg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t){return new W3(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ol.c_=!1;class aR{constructor(e,n,r=1e3,i=1.5,a=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&de("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="PersistentStream";class lR{constructor(e,n,r,i,a,l,c,h){this.Ci=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new aR(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(ji(n.toString()),ji("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new fe(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return de(Ux,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(de(Ux,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UB extends lR{constructor(e,n,r,i,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,l),this.serializer=a}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=K3(this.serializer,e),r=function(a){if(!("targetChange"in a))return Ce.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Ce.min():l.readTime?si(l.readTime):Ce.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=iv(this.serializer),n.addTarget=function(a,l){let c;const h=l.target;if(c=Jy(h)?{documents:Y3(a,h)}:{query:X3(a,h).ft},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=QP(a,l.resumeToken);const p=tv(a,l.expectedCount);p!==null&&(c.expectedCount=p)}else if(l.snapshotVersion.compareTo(Ce.min())>0){c.readTime=Ld(a,l.snapshotVersion.toTimestamp());const p=tv(a,l.expectedCount);p!==null&&(c.expectedCount=p)}return c}(this.serializer,e);const r=Z3(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=iv(this.serializer),n.removeTarget=e,this.q_(n)}}class zB extends lR{constructor(e,n,r,i,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,l),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Q3(e.writeResults,e.commitTime),r=si(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=iv(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>G3(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BB{}class WB extends BB{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new fe(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Wo(e,nv(n,r),i,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new fe(Z.UNKNOWN,a.toString())})}jo(e,n,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.jo(e,nv(n,r),i,l,c,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new fe(Z.UNKNOWN,l.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function HB(t,e,n,r){return new WB(t,e,n,r)}class qB{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ji(n),this.aa=!1):de("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="RemoteStore";class KB{constructor(e,n,r,i,a){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=a,this.Aa.Mo(l=>{r.enqueueAndForget(async()=>{ea(this)&&(de(Qo,"Restarting streams for network reachability change."),await async function(h){const p=Pe(h);p.Ia.add(4),await jc(p),p.Va.set("Unknown"),p.Ia.delete(4),await Ap(p)}(this))})}),this.Va=new qB(r,i)}}async function Ap(t){if(ea(t))for(const e of t.Ra)await e(!0)}async function jc(t){for(const e of t.Ra)await e(!1)}function uR(t,e){const n=Pe(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),K_(n)?q_(n):Fl(n).O_()&&H_(n,e))}function W_(t,e){const n=Pe(t),r=Fl(n);n.Ea.delete(e),r.O_()&&cR(n,e),n.Ea.size===0&&(r.O_()?r.L_():ea(n)&&n.Va.set("Unknown"))}function H_(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fl(t).Z_(e)}function cR(t,e){t.da.$e(e),Fl(t).X_(e)}function q_(t){t.da=new $3({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Fl(t).start(),t.Va.ua()}function K_(t){return ea(t)&&!Fl(t).x_()&&t.Ea.size>0}function ea(t){return Pe(t).Ia.size===0}function hR(t){t.da=void 0}async function GB(t){t.Va.set("Online")}async function QB(t){t.Ea.forEach((e,n)=>{H_(t,e)})}async function YB(t,e){hR(t),K_(t)?(t.Va.ha(e),q_(t)):t.Va.set("Unknown")}async function XB(t,e,n){if(t.Va.set("Online"),e instanceof GP&&e.state===2&&e.cause)try{await async function(i,a){const l=a.cause;for(const c of a.targetIds)i.Ea.has(c)&&(await i.remoteSyncer.rejectListen(c,l),i.Ea.delete(c),i.da.removeTarget(c))}(t,e)}catch(r){de(Qo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fd(t,r)}else if(e instanceof Qf?t.da.Xe(e):e instanceof KP?t.da.st(e):t.da.tt(e),!n.isEqual(Ce.min()))try{const r=await oR(t.localStore);n.compareTo(r)>=0&&await function(a,l){const c=a.da.Tt(l);return c.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const m=a.Ea.get(p);m&&a.Ea.set(p,m.withResumeToken(h.resumeToken,l))}}),c.targetMismatches.forEach((h,p)=>{const m=a.Ea.get(h);if(!m)return;a.Ea.set(h,m.withResumeToken(nn.EMPTY_BYTE_STRING,m.snapshotVersion)),cR(a,h);const y=new ks(m.target,h,p,m.sequenceNumber);H_(a,y)}),a.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){de(Qo,"Failed to raise snapshot:",r),await Fd(t,r)}}async function Fd(t,e,n){if(!Ll(e))throw e;t.Ia.add(1),await jc(t),t.Va.set("Offline"),n||(n=()=>oR(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{de(Qo,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Ap(t)})}function fR(t,e){return e().catch(n=>Fd(t,n,e))}async function Cp(t){const e=Pe(t),n=qs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:b_;for(;JB(e);)try{const i=await DB(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,ZB(e,i)}catch(i){await Fd(e,i)}dR(e)&&pR(e)}function JB(t){return ea(t)&&t.Ta.length<10}function ZB(t,e){t.Ta.push(e);const n=qs(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function dR(t){return ea(t)&&!qs(t).x_()&&t.Ta.length>0}function pR(t){qs(t).start()}async function e8(t){qs(t).ra()}async function t8(t){const e=qs(t);for(const n of t.Ta)e.ea(n.mutations)}async function n8(t,e,n){const r=t.Ta.shift(),i=O_.from(r,e,n);await fR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Cp(t)}async function r8(t,e){e&&qs(t).Y_&&await async function(r,i){if(function(l){return O3(l)&&l!==Z.ABORTED}(i.code)){const a=r.Ta.shift();qs(r).B_(),await fR(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i)),await Cp(r)}}(t,e),dR(t)&&pR(t)}async function zx(t,e){const n=Pe(t);n.asyncQueue.verifyOperationInProgress(),de(Qo,"RemoteStore received new credentials");const r=ea(n);n.Ia.add(3),await jc(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Ap(n)}async function i8(t,e){const n=Pe(t);e?(n.Ia.delete(2),await Ap(n)):e||(n.Ia.add(2),await jc(n),n.Va.set("Unknown"))}function Fl(t){return t.ma||(t.ma=function(n,r,i){const a=Pe(n);return a.sa(),new UB(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(t.datastore,t.asyncQueue,{Zo:GB.bind(null,t),Yo:QB.bind(null,t),t_:YB.bind(null,t),H_:XB.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),K_(t)?q_(t):t.Va.set("Unknown")):(await t.ma.stop(),hR(t))})),t.ma}function qs(t){return t.fa||(t.fa=function(n,r,i){const a=Pe(n);return a.sa(),new zB(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:e8.bind(null,t),t_:r8.bind(null,t),ta:t8.bind(null,t),na:n8.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Cp(t)):(await t.fa.stop(),t.Ta.length>0&&(de(Qo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n,r,i,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new Ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,a){const l=Date.now()+r,c=new G_(e,n,l,i,a);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Q_(t,e){if(ji("AsyncQueue",`${e}: ${t}`),Ll(t))return new fe(Z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{static emptySet(e){return new al(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||_e.comparator(n.key,r.key):(n,r)=>_e.comparator(n.key,r.key),this.keyedMap=Bu(),this.sortedSet=new yt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof al)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new al;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bx{constructor(){this.ga=new yt(_e.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Se(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class xl{constructor(e,n,r,i,a,l,c,h,p){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=p}static fromInitialDocuments(e,n,r,i,a){const l=[];return n.forEach(c=>{l.push({type:0,doc:c})}),new xl(e,n,al.emptySet(n),l,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wp(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s8{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class o8{constructor(){this.queries=Wx(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Pe(n),a=i.queries;i.queries=Wx(),a.forEach((l,c)=>{for(const h of c.Sa)h.onError(r)})})(this,new fe(Z.ABORTED,"Firestore shutting down"))}}function Wx(){return new Jo(t=>VP(t),wp)}async function a8(t,e){const n=Pe(t);let r=3;const i=e.query;let a=n.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new s8,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await n.onListen(i,!0);break;case 1:a.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(l){const c=Q_(l,`Initialization of query '${Ga(e.query)}' failed`);return void e.onError(c)}n.queries.set(i,a),a.Sa.push(e),e.va(n.onlineState),a.wa&&e.Fa(a.wa)&&Y_(n)}async function l8(t,e){const n=Pe(t),r=e.query;let i=3;const a=n.queries.get(r);if(a){const l=a.Sa.indexOf(e);l>=0&&(a.Sa.splice(l,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function u8(t,e){const n=Pe(t);let r=!1;for(const i of e){const a=i.query,l=n.queries.get(a);if(l){for(const c of l.Sa)c.Fa(i)&&(r=!0);l.wa=i}}r&&Y_(n)}function c8(t,e,n){const r=Pe(t),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(n);r.queries.delete(e)}function Y_(t){t.Ca.forEach(e=>{e.next()})}var av,Hx;(Hx=av||(av={})).Ma="default",Hx.Cache="cache";class h8{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xl(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=xl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==av.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.key=e}}class gR{constructor(e){this.key=e}}class f8{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=je(),this.mutatedKeys=je(),this.eu=NP(e),this.tu=new al(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new Bx,i=n?n.tu:this.tu;let a=n?n.mutatedKeys:this.mutatedKeys,l=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,p=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,y)=>{const w=i.get(m),T=Ep(this.query,y)?y:null,x=!!w&&this.mutatedKeys.has(w.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let k=!1;w&&T?w.data.isEqual(T.data)?x!==P&&(r.track({type:3,doc:T}),k=!0):this.su(w,T)||(r.track({type:2,doc:T}),k=!0,(h&&this.eu(T,h)>0||p&&this.eu(T,p)<0)&&(c=!0)):!w&&T?(r.track({type:0,doc:T}),k=!0):w&&!T&&(r.track({type:1,doc:w}),k=!0,(h||p)&&(c=!0)),k&&(T?(l=l.add(T),a=P?a.add(m):a.delete(m)):(l=l.delete(m),a=a.delete(m)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const m=this.query.limitType==="F"?l.last():l.first();l=l.delete(m.key),a=a.delete(m.key),r.track({type:1,doc:m})}return{tu:l,iu:r,bs:c,mutatedKeys:a}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const l=e.iu.ya();l.sort((m,y)=>function(T,x){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{Vt:k})}};return P(T)-P(x)}(m.type,y.type)||this.eu(m.doc,y.doc)),this.ou(r),i=i??!1;const c=n&&!i?this._u():[],h=this.Ya.size===0&&this.current&&!i?1:0,p=h!==this.Xa;return this.Xa=h,l.length!==0||p?{snapshot:new xl(this.query,e.tu,a,l,e.mutatedKeys,h===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bx,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=je(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new gR(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new mR(r))}),n}cu(e){this.Za=e.ks,this.Ya=je();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return xl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const X_="SyncEngine";class d8{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class p8{constructor(e){this.key=e,this.hu=!1}}class m8{constructor(e,n,r,i,a,l){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new Jo(c=>VP(c),wp),this.Eu=new Map,this.Iu=new Set,this.Ru=new yt(_e.comparator),this.Au=new Map,this.Vu=new $_,this.du={},this.mu=new Map,this.fu=Sl.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function g8(t,e,n=!0){const r=TR(t);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await yR(r,e,n,!0),i}async function y8(t,e){const n=TR(t);await yR(n,e,!0,!1)}async function yR(t,e,n,r){const i=await VB(t.localStore,ii(e)),a=i.targetId,l=t.sharedClientState.addLocalQueryTarget(a,n);let c;return r&&(c=await v8(t,e,a,l==="current",i.resumeToken)),t.isPrimaryClient&&n&&uR(t.remoteStore,i),c}async function v8(t,e,n,r,i){t.pu=(y,w,T)=>async function(P,k,b,F){let U=k.view.ru(b);U.bs&&(U=await Ox(P.localStore,k.query,!1).then(({documents:C})=>k.view.ru(C,U)));const $=F&&F.targetChanges.get(k.targetId),H=F&&F.targetMismatches.get(k.targetId)!=null,X=k.view.applyChanges(U,P.isPrimaryClient,$,H);return Kx(P,k.targetId,X.au),X.snapshot}(t,y,w,T);const a=await Ox(t.localStore,e,!0),l=new f8(e,a.ks),c=l.ru(a.documents),h=Fc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),p=l.applyChanges(c,t.isPrimaryClient,h);Kx(t,n,p.au);const m=new d8(e,n,l);return t.Tu.set(e,m),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),p.snapshot}async function _8(t,e,n){const r=Pe(t),i=r.Tu.get(e),a=r.Eu.get(i.targetId);if(a.length>1)return r.Eu.set(i.targetId,a.filter(l=>!wp(l,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await sv(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&W_(r.remoteStore,i.targetId),lv(r,i.targetId)}).catch(Ml)):(lv(r,i.targetId),await sv(r.localStore,i.targetId,!0))}async function w8(t,e){const n=Pe(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),W_(n.remoteStore,r.targetId))}async function E8(t,e,n){const r=k8(t);try{const i=await function(l,c){const h=Pe(l),p=ct.now(),m=c.reduce((T,x)=>T.add(x.key),je());let y,w;return h.persistence.runTransaction("Locally write mutations","readwrite",T=>{let x=$i(),P=je();return h.xs.getEntries(T,m).next(k=>{x=k,x.forEach((b,F)=>{F.isValidDocument()||(P=P.add(b))})}).next(()=>h.localDocuments.getOverlayedDocuments(T,x)).next(k=>{y=k;const b=[];for(const F of c){const U=D3(F,y.get(F.key).overlayedDocument);U!=null&&b.push(new Zo(F.key,U,xP(U.value.mapValue),Mi.exists(!0)))}return h.mutationQueue.addMutationBatch(T,p,b,c)}).next(k=>{w=k;const b=k.applyToLocalDocumentSet(y,P);return h.documentOverlayCache.saveOverlays(T,k.batchId,b)})}).then(()=>({batchId:w.batchId,changes:LP(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(l,c,h){let p=l.du[l.currentUser.toKey()];p||(p=new yt(Fe)),p=p.insert(c,h),l.du[l.currentUser.toKey()]=p}(r,i.batchId,n),await $c(r,i.changes),await Cp(r.remoteStore)}catch(i){const a=Q_(i,"Failed to persist write");n.reject(a)}}async function vR(t,e){const n=Pe(t);try{const r=await RB(n.localStore,e);e.targetChanges.forEach((i,a)=>{const l=n.Au.get(a);l&&(Ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?l.hu=!0:i.modifiedDocuments.size>0?Ye(l.hu,14607):i.removedDocuments.size>0&&(Ye(l.hu,42227),l.hu=!1))}),await $c(n,r,e)}catch(r){await Ml(r)}}function qx(t,e,n){const r=Pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((a,l)=>{const c=l.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(l,c){const h=Pe(l);h.onlineState=c;let p=!1;h.queries.forEach((m,y)=>{for(const w of y.Sa)w.va(c)&&(p=!0)}),p&&Y_(h)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function T8(t,e,n){const r=Pe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),a=i&&i.key;if(a){let l=new yt(_e.comparator);l=l.insert(a,hn.newNoDocument(a,Ce.min()));const c=je().add(a),h=new xp(Ce.min(),new Map,new yt(Fe),l,c);await vR(r,h),r.Ru=r.Ru.remove(a),r.Au.delete(e),J_(r)}else await sv(r.localStore,e,!1).then(()=>lv(r,e,n)).catch(Ml)}async function S8(t,e){const n=Pe(t),r=e.batch.batchId;try{const i=await PB(n.localStore,e);wR(n,r,null),_R(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $c(n,i)}catch(i){await Ml(i)}}async function x8(t,e,n){const r=Pe(t);try{const i=await function(l,c){const h=Pe(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let m;return h.mutationQueue.lookupMutationBatch(p,c).next(y=>(Ye(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(p,y))).next(()=>h.mutationQueue.performConsistencyCheck(p)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(p,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,m)).next(()=>h.localDocuments.getDocuments(p,m))})}(r.localStore,e);wR(r,e,n),_R(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $c(r,i)}catch(i){await Ml(i)}}function _R(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function wR(t,e,n){const r=Pe(t);let i=r.du[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(n?a.reject(n):a.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function lv(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||ER(t,r)})}function ER(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(W_(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),J_(t))}function Kx(t,e,n){for(const r of n)r instanceof mR?(t.Vu.addReference(r.key,e),I8(t,r)):r instanceof gR?(de(X_,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||ER(t,r.key)):Se(19791,{wu:r})}function I8(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(de(X_,"New document in limbo: "+n),t.Iu.add(r),J_(t))}function J_(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new _e(st.fromString(e)),r=t.fu.next();t.Au.set(r,new p8(n)),t.Ru=t.Ru.insert(n,r),uR(t.remoteStore,new ks(ii(bP(n.path)),r,"TargetPurposeLimboResolution",yp.ce))}}async function $c(t,e,n){const r=Pe(t),i=[],a=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach((c,h)=>{l.push(r.pu(h,e,n).then(p=>{var m;if((p||n)&&r.isPrimaryClient){const y=p?!p.fromCache:(m=n==null?void 0:n.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(p){i.push(p);const y=z_.Is(h.targetId,p);a.push(y)}}))}),await Promise.all(l),r.Pu.H_(i),await async function(h,p){const m=Pe(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>ee.forEach(p,w=>ee.forEach(w.Ts,T=>m.persistence.referenceDelegate.addReference(y,w.targetId,T)).next(()=>ee.forEach(w.Es,T=>m.persistence.referenceDelegate.removeReference(y,w.targetId,T)))))}catch(y){if(!Ll(y))throw y;de(B_,"Failed to update sequence numbers: "+y)}for(const y of p){const w=y.targetId;if(!y.fromCache){const T=m.vs.get(w),x=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(x);m.vs=m.vs.insert(w,P)}}}(r.localStore,a))}async function A8(t,e){const n=Pe(t);if(!n.currentUser.isEqual(e)){de(X_,"User change. New user:",e.toKey());const r=await sR(n.localStore,e);n.currentUser=e,function(a,l){a.mu.forEach(c=>{c.forEach(h=>{h.reject(new fe(Z.CANCELLED,l))})}),a.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $c(n,r.Ns)}}function C8(t,e){const n=Pe(t),r=n.Au.get(e);if(r&&r.hu)return je().add(r.key);{let i=je();const a=n.Eu.get(e);if(!a)return i;for(const l of a){const c=n.Tu.get(l);i=i.unionWith(c.view.nu)}return i}}function TR(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=C8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=T8.bind(null,e),e.Pu.H_=u8.bind(null,e.eventManager),e.Pu.yu=c8.bind(null,e.eventManager),e}function k8(t){const e=Pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=S8.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=x8.bind(null,e),e}class jd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ip(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return kB(this.persistence,new IB,e.initialUser,this.serializer)}Cu(e){return new iR(U_.Vi,this.serializer)}Du(e){return new MB}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}jd.provider={build:()=>new jd};class P8 extends jd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ye(this.persistence.referenceDelegate instanceof Od,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cB(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?An.withCacheSize(this.cacheSizeBytes):An.DEFAULT;return new iR(r=>Od.Vi(r,n),this.serializer)}}class uv{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qx(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=A8.bind(null,this.syncEngine),await i8(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new o8}()}createDatastore(e){const n=Ip(e.databaseInfo.databaseId),r=$B(e.databaseInfo);return HB(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,a,l,c){return new KB(r,i,a,l,c)}(this.localStore,this.datastore,e.asyncQueue,n=>qx(this.syncEngine,n,0),function(){return $x.v()?new $x:new LB}())}createSyncEngine(e,n){return function(i,a,l,c,h,p,m){const y=new m8(i,a,l,c,h,p);return m&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const a=Pe(i);de(Qo,"RemoteStore shutting down."),a.Ia.add(5),await jc(a),a.Aa.shutdown(),a.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}uv.provider={build:()=>new uv};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R8{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ji("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="FirestoreClient";class b8{constructor(e,n,r,i,a){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=cn.UNAUTHENTICATED,this.clientId=R_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async l=>{de(Ks,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(de(Ks,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Q_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gg(t,e){t.asyncQueue.verifyOperationInProgress(),de(Ks,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sR(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await D8(t);de(Ks,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>zx(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>zx(e.remoteStore,i)),t._onlineComponents=e}async function D8(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){de(Ks,"Using user provided OfflineComponentProvider");try{await Gg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===Z.FAILED_PRECONDITION||i.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Go("Error using user provided cache. Falling back to memory cache: "+n),await Gg(t,new jd)}}else de(Ks,"Using default OfflineComponentProvider"),await Gg(t,new P8(void 0));return t._offlineComponents}async function SR(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(de(Ks,"Using user provided OnlineComponentProvider"),await Gx(t,t._uninitializedComponentsProvider._online)):(de(Ks,"Using default OnlineComponentProvider"),await Gx(t,new uv))),t._onlineComponents}function V8(t){return SR(t).then(e=>e.syncEngine)}async function N8(t){const e=await SR(t),n=e.eventManager;return n.onListen=g8.bind(null,e.syncEngine),n.onUnlisten=_8.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=y8.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=w8.bind(null,e.syncEngine),n}function M8(t,e,n={}){const r=new Ms;return t.asyncQueue.enqueueAndForget(async()=>function(a,l,c,h,p){const m=new R8({next:w=>{m.Nu(),l.enqueueAndForget(()=>l8(a,y)),w.fromCache&&h.source==="server"?p.reject(new fe(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),y=new h8(c,m,{includeMetadataChanges:!0,qa:!0});return a8(a,y)}(await N8(t),t.asyncQueue,e,n,r)),r.promise}function L8(t,e){const n=new Ms;return t.asyncQueue.enqueueAndForget(async()=>E8(await V8(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O8="ComponentProvider",Qx=new Map;function F8(t,e,n,r,i){return new t3(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,xR(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="firestore.googleapis.com",Yx=!0;class Xx{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=IR,this.ssl=Yx}else this.host=e.host,this.ssl=e.ssl??Yx;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rR;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lB)throw new fe(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wz("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xR(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class kp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xx({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xx(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nz;switch(r.type){case"firstParty":return new Fz(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new fe(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Qx.get(n);r&&(de(O8,"Removing Datastore"),Qx.delete(n),r.terminate())}(this),Promise.resolve()}}function j8(t,e,n,r={}){var p;t=Pd(t,kp);const i=bc(e),a=t._getSettings(),l={...a,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&vk(`https://${c}`),a.host!==IR&&a.host!==c&&Go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:c,ssl:i,emulatorOptions:r};if(!Bo(h,l)&&(t._setSettings(h),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=cn.MOCK_USER;else{m=q$(r.mockUserToken,(p=t._app)==null?void 0:p.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new fe(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new cn(w)}t._authCredentials=new Mz(new hP(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ta(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}toJSON(){return{type:Ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Lc(n,Ht._jsonSchema))return new Ht(e,r||null,new _e(st.fromString(n.referencePath)))}}Ht._jsonSchemaVersion="firestore/documentReference/1.0",Ht._jsonSchema={type:Dt("string",Ht._jsonSchemaVersion),referencePath:Dt("string")};class Ls extends ta{constructor(e,n,r){super(e,n,bP(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new _e(e))}withConverter(e){return new Ls(this.firestore,e,this._path)}}function L7(t,e,...n){if(t=dn(t),fP("collection","path",e),t instanceof kp){const r=st.fromString(e,...n);return cx(r),new Ls(t,null,r)}{if(!(t instanceof Ht||t instanceof Ls))throw new fe(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return cx(r),new Ls(t.firestore,null,r)}}function $8(t,e,...n){if(t=dn(t),arguments.length===1&&(e=R_.newId()),fP("doc","path",e),t instanceof kp){const r=st.fromString(e,...n);return ux(r),new Ht(t,null,new _e(r))}{if(!(t instanceof Ht||t instanceof Ls))throw new fe(Z.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return ux(r),new Ht(t.firestore,t instanceof Ls?t.converter:null,new _e(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx="AsyncQueue";class Zx{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new aR(this,"async_queue_retry"),this._c=()=>{const r=Kg();r&&de(Jx,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Kg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Kg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Ms;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ll(e))throw e;de(Jx,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ji("INTERNAL UNHANDLED ERROR: ",e1(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=G_.createAndSchedule(this,e,n,r,a=>this.hc(a));return this.tc.push(i),i}uc(){this.nc&&Se(47125,{Pc:e1(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function e1(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Z_ extends kp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Zx,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zx(e),this._firestoreClient=void 0,await e}}}function U8(t,e){const n=typeof t=="object"?t:Tk(),r=typeof t=="string"?t:bd,i=v_(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=W$("firestore");a&&j8(i,...a)}return i}function AR(t){if(t._terminated)throw new fe(Z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||z8(t),t._firestoreClient}function z8(t){var r,i,a,l;const e=t._freezeSettings(),n=F8(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new b8(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(nn.fromBase64String(e))}catch(n){throw new fe(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new er(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:er._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lc(e,er._jsonSchema))return er.fromBase64String(e.bytes)}}er._jsonSchemaVersion="firestore/bytes/1.0",er._jsonSchema={type:Dt("string",er._jsonSchemaVersion),bytes:Dt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:oi._jsonSchemaVersion}}static fromJSON(e){if(Lc(e,oi._jsonSchema))return new oi(e.latitude,e.longitude)}}oi._jsonSchemaVersion="firestore/geoPoint/1.0",oi._jsonSchema={type:Dt("string",oi._jsonSchemaVersion),latitude:Dt("number"),longitude:Dt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Pr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lc(e,Pr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Pr(e.vectorValues);throw new fe(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Pr._jsonSchemaVersion="firestore/vectorValue/1.0",Pr._jsonSchema={type:Dt("string",Pr._jsonSchemaVersion),vectorValues:Dt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B8=/^__.*__$/;class W8{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Zo(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oc(e,this.data,n,this.fieldTransforms)}}function PR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{dataSource:t})}}class ew{constructor(e,n,r,i,a,l){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ew({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return $d(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(PR(this.dataSource)&&B8.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class H8{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ip(e)}I(e,n,r,i=!1){return new ew({dataSource:e,methodName:n,targetDoc:r,path:en.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function RR(t){const e=t._freezeSettings(),n=Ip(t._databaseId);return new H8(t._databaseId,!!e.ignoreUndefinedProperties,n)}function q8(t,e,n,r,i,a={}){const l=t.I(a.merge||a.mergeFields?2:0,e,n,i);VR("Data must be an object, but it was:",l,r);const c=bR(r,l);let h,p;if(a.merge)h=new Ir(l.fieldMask),p=l.fieldTransforms;else if(a.mergeFields){const m=[];for(const y of a.mergeFields){const w=Uc(e,y,n);if(!l.contains(w))throw new fe(Z.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Y8(m,w)||m.push(w)}h=new Ir(m),p=l.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,p=l.fieldTransforms;return new W8(new Zn(c),h,p)}function K8(t,e,n,r=!1){return tw(n,t.I(r?4:3,e))}function tw(t,e){if(DR(t=dn(t)))return VR("Unsupported field value:",e,t),bR(t,e);if(t instanceof kR)return function(r,i){if(!PR(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const a=[];let l=0;for(const c of r){let h=tw(c,i.gc(l));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),l++}return{arrayValue:{values:a}}}(t,e)}return function(r,i){if((r=dn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return A3(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=ct.fromDate(r);return{timestampValue:Ld(i.serializer,a)}}if(r instanceof ct){const a=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ld(i.serializer,a)}}if(r instanceof oi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof er)return{bytesValue:QP(i.serializer,r._byteString)};if(r instanceof Ht){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.yc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:j_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Pr)return function(l,c){const h=l instanceof Pr?l.toArray():l;return{mapValue:{fields:{[EP]:{stringValue:SP},[Dd]:{arrayValue:{values:h.map(m=>{if(typeof m!="number")throw c.yc("VectorValues must only contain numeric values.");return L_(c.serializer,m)})}}}}}}(r,i);if(nR(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${gp(r)}`)}(t,e)}function bR(t,e){const n={};return mP(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xo(t,(r,i)=>{const a=tw(i,e.dc(r));a!=null&&(n[r]=a)}),{mapValue:{fields:n}}}function DR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof oi||t instanceof er||t instanceof Ht||t instanceof kR||t instanceof Pr||nR(t))}function VR(t,e,n){if(!DR(n)||!dP(n)){const r=gp(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Uc(t,e,n){if((e=dn(e))instanceof CR)return e._internalPath;if(typeof e=="string")return Q8(t,e);throw $d("Field path arguments must be of type string or ",t,!1,void 0,n)}const G8=new RegExp("[~\\*/\\[\\]]");function Q8(t,e,n){if(e.search(G8)>=0)throw $d(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new CR(...e.split("."))._internalPath}catch{throw $d(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $d(t,e,n,r,i){const a=r&&!r.isEmpty(),l=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(a||l)&&(h+=" (found",a&&(h+=` in field ${r}`),l&&(h+=` in document ${i}`),h+=")"),new fe(Z.INVALID_ARGUMENT,c+t+h)}function Y8(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X8{convertValue(e,n="none"){switch(Hs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xo(e,(i,a)=>{r[i]=this.convertValue(a,n)}),r}convertVectorValue(e){var r,i,a;const n=(a=(i=(r=e.fields)==null?void 0:r[Dd].arrayValue)==null?void 0:i.values)==null?void 0:a.map(l=>xt(l.doubleValue));return new Pr(n)}convertGeoPoint(e){return new oi(xt(e.latitude),xt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_p(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(gc(e));default:return null}}convertTimestamp(e){const n=Bs(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=st.fromString(e);Ye(tR(r),9688,{name:e});const i=new yc(r.get(1),r.get(3)),a=new _e(r.popFirst(5));return i.isEqual(n)||ji(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),a}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J8 extends X8{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}const t1="@firebase/firestore",n1="4.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n,r,i,a){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Z8(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Uc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Z8 extends NR{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eW(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new fe(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nw{}class MR extends nw{}function O7(t,e,...n){let r=[];e instanceof nw&&r.push(e),r=r.concat(n),function(a){const l=a.filter(h=>h instanceof rw).length,c=a.filter(h=>h instanceof Pp).length;if(l>1||l>0&&c>0)throw new fe(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Pp extends MR{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pp(e,n,r)}_apply(e){const n=this._parse(e);return LR(e._query,n),new ta(e.firestore,e.converter,Zy(e._query,n))}_parse(e){const n=RR(e.firestore);return function(a,l,c,h,p,m,y){let w;if(p.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new fe(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){i1(y,m);const x=[];for(const P of y)x.push(r1(h,a,P));w={arrayValue:{values:x}}}else w=r1(h,a,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||i1(y,m),w=K8(c,l,y,m==="in"||m==="not-in");return bt.create(p,m,w)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function F7(t,e,n){const r=e,i=Uc("where",t);return Pp._create(i,r,n)}class rw extends nw{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new rw(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Rr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,a){let l=i;const c=a.getFlattenedFilters();for(const h of c)LR(l,h),l=Zy(l,h)}(e._query,n),new ta(e.firestore,e.converter,Zy(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class iw extends MR{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new iw(e,n)}_apply(e){const n=function(i,a,l){if(i.startAt!==null)throw new fe(Z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new fe(Z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _c(a,l)}(e._query,this._field,this._direction);return new ta(e.firestore,e.converter,v3(e._query,n))}}function j7(t,e="asc"){const n=e,r=Uc("orderBy",t);return iw._create(r,n)}function r1(t,e,n){if(typeof(n=dn(n))=="string"){if(n==="")throw new fe(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!DP(e)&&n.indexOf("/")!==-1)throw new fe(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(st.fromString(n));if(!_e.isDocumentKey(r))throw new fe(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return vx(t,new _e(r))}if(n instanceof Ht)return vx(t,n._key);throw new fe(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${gp(n)}.`)}function i1(t,e){if(!Array.isArray(t)||t.length===0)throw new fe(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function LR(t,e){const n=function(i,a){for(const l of i)for(const c of l.getFlattenedFilters())if(a.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new fe(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new fe(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function tW(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Tf{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ll extends NR{constructor(e,n,r,i,a,l){super(e,n,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Uc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ll._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ll._jsonSchemaVersion="firestore/documentSnapshot/1.0",ll._jsonSchema={type:Dt("string",ll._jsonSchemaVersion),bundleSource:Dt("string","DocumentSnapshot"),bundleName:Dt("string"),bundle:Dt("string")};class Yf extends ll{data(e={}){return super.data(e)}}class ul{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Tf(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yf(this._firestore,this._userDataWriter,r.key,r,new Tf(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,a){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(c=>{const h=new Yf(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Tf(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>a||c.type!==3).map(c=>{const h=new Yf(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Tf(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let p=-1,m=-1;return c.type!==0&&(p=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),m=l.indexOf(c.doc.key)),{type:nW(c.type),doc:h,oldIndex:p,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ul._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=R_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(a=>{a._document!==null&&(n.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nW(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ul._jsonSchemaVersion="firestore/querySnapshot/1.0",ul._jsonSchema={type:Dt("string",ul._jsonSchemaVersion),bundleSource:Dt("string","QuerySnapshot"),bundleName:Dt("string"),bundle:Dt("string")};function $7(t){t=Pd(t,ta);const e=Pd(t.firestore,Z_),n=AR(e),r=new J8(e);return eW(t._query),M8(n,t._query).then(i=>new ul(e,r,t,i))}function U7(t,e){const n=Pd(t.firestore,Z_),r=$8(t),i=tW(t.converter,e),a=RR(t.firestore);return rW(n,[q8(a,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Mi.exists(!1))]).then(()=>r)}function rW(t,e){const n=AR(t);return L8(n,e)}(function(e,n=!0){Vz(Dl),vl(new Wo("firestore",(r,{instanceIdentifier:i,options:a})=>{const l=r.getProvider("app").getImmediate(),c=new Z_(new Lz(r.getProvider("auth-internal")),new jz(l,r.getProvider("app-check-internal")),n3(l,i),l);return a={useFetchStreams:n,...a},c._setSettings(a),c},"PUBLIC").setMultipleInstances(!0)),Vs(t1,n1,e),Vs(t1,n1,"esm2020")})();const iW={apiKey:"AIzaSyCDMkgubFQ7JkTR9-TSWy-dXu2R9eFfYEk",authDomain:"kiddoo-0551.firebaseapp.com",projectId:"kiddoo-0551",storageBucket:"kiddoo-0551.firebasestorage.app",messagingSenderId:"325747061629",appId:"1:325747061629:web:98990a5ee753b531abd214"},OR=Ek(iW),FR=bz(OR),z7=U8(OR),sW=()=>{const t=qd(),e=ui(),n=ti(b=>b.alphabet.isMobileMenuOpen),r=ti(b=>b.alphabet.isMuted),i=ti(b=>b.alphabet.theme),a=ti(b=>b.alphabet.user),[l,c]=N.useState(!1),[h,p]=N.useState(null),[m,y]=N.useState(!1),[w,T]=N.useState(!1),x=m_.en,P=N.useRef(null);N.useEffect(()=>{const b=F=>{P.current&&!P.current.contains(F.target)&&(c(!1),p(null))};return l&&document.addEventListener("mousedown",b),()=>{document.removeEventListener("mousedown",b)}},[l]);const k=e.pathname==="/"||!e.pathname;return a?V.jsxs(CL,{"data-testid":"layout-navbar",children:[V.jsxs(PL,{children:[V.jsx(VL,{$isVisible:!k,onClick:()=>t(hM()),children:n?V.jsx(p_,{size:24}):V.jsx(a$,{size:24})}),V.jsxs(kL,{as:Zf,to:"/",children:[V.jsx(RL,{children:V.jsx(B5,{size:24,color:"white",strokeWidth:2.5,fill:"rgba(255, 255, 255, 0.2)"})}),V.jsx(bL,{children:"kiddoo"})]})]}),V.jsx(DL,{children:V.jsxs(NL,{ref:P,children:[V.jsx(ML,{onClick:()=>c(!l),children:V.jsx(Z5,{size:22})}),l&&V.jsx(LL,{children:h?V.jsxs(V.Fragment,{children:[V.jsxs(FL,{onClick:()=>p(null),children:[V.jsx(H5,{size:20}),V.jsx("span",{children:x.com_back})]}),V.jsxs(Jn,{onClick:()=>{t(mg("small")),c(!1),p(null)},children:[V.jsx(mf,{size:16}),V.jsx("span",{children:x.nav_small})]}),V.jsxs(Jn,{onClick:()=>{t(mg("medium")),c(!1),p(null)},children:[V.jsx(mf,{size:20}),V.jsx("span",{children:x.nav_medium})]}),V.jsxs(Jn,{onClick:()=>{t(mg("large")),c(!1),p(null)},children:[V.jsx(mf,{size:24}),V.jsx("span",{children:x.nav_large})]})]}):V.jsxs(V.Fragment,{children:[V.jsxs(Jn,{onClick:()=>{t(fM()),c(!1)},children:[r?V.jsx(w$,{size:20}):V.jsx(v$,{size:20}),V.jsx("span",{children:r?x.nav_unmuteSound:x.nav_muteSound})]}),V.jsxs(Jn,{onClick:()=>{t(dM()),c(!1)},children:[i==="light"?V.jsx(u$,{size:20}):V.jsx(f$,{size:20}),V.jsx("span",{children:i==="light"?x.nav_darkMode:x.nav_lightMode})]}),V.jsxs(Jn,{onClick:()=>p("fontSize"),children:[V.jsx(mf,{size:20}),V.jsx("span",{children:x.nav_fontSize}),V.jsx(OL,{children:V.jsx(K5,{size:18})})]}),V.jsxs(Jn,{onClick:()=>{y(!0),c(!1)},children:[V.jsx(uk,{size:20}),V.jsx("span",{children:x.nav_updateName})]}),V.jsxs(Jn,{onClick:()=>{T(!0),c(!1)},children:[V.jsx(ck,{size:20}),V.jsx("span",{children:x.nav_setProgress})]}),V.jsxs(Jn,{as:Zf,to:"/test_history",onClick:()=>c(!1),children:[V.jsx(t$,{size:20}),V.jsx("span",{children:"Test History"})]}),V.jsxs(Jn,{onClick:async()=>{try{await E6(FR),t(mM()),c(!1)}catch(b){console.error("Logout error:",b)}},children:[V.jsx(s$,{size:20}),V.jsx("span",{children:"Logout"})]}),V.jsxs(Jn,{onClick:async()=>{c(!1);const b={title:"Kiddoo - Fun Learning for Kids",text:"Check out Kiddoo, a fun and interactive learning platform for kids! 🚀",url:"https://dnshariprasad.github.io/kiddoo/"};try{navigator.share?await navigator.share(b):(await navigator.clipboard.writeText(`${b.text} ${b.url}`),alert("Link copied to clipboard! 📋"))}catch(F){console.error("Error sharing:",F)}},children:[V.jsx(lk,{size:20}),V.jsx("span",{children:"Share Kiddoo"})]})]})})]})}),m&&V.jsx(hk,{onComplete:()=>y(!1)}),w&&V.jsx(M$,{onClose:()=>T(!1)})]}):null},oW=ie.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 40px;
  text-align: center;
  background-color: ${t=>t.theme.colors.background};
`,aW=ie(lr.div)`
  background: ${t=>t.theme.colors.surface};
  padding: 60px;
  border-radius: 40px;
  box-shadow: 0 20px 40px ${t=>t.theme.colors.shadow};
  max-width: 600px;
  width: 100%;
  border: 4px solid ${t=>t.theme.colors.primary}15;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`,lW=ie.div`
  color: ${t=>t.theme.colors.accent};
  margin-bottom: 8px;
`;class uW extends N.Component{constructor(){super(...arguments);gE(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n,r){console.error("Uncaught error:",n,r)}render(){return this.state.hasError?V.jsx(oW,{children:V.jsxs(aW,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",damping:20},children:[V.jsx(lW,{children:V.jsx(Q5,{size:80,strokeWidth:2.5})}),V.jsx(Rs,{fontSize:"2.5rem",color:"primary",fontWeight:900,children:"Oops! 😅"}),V.jsx(Rs,{fontSize:"xl",color:"textSecondary",fontWeight:"bold",children:"Something went wrong!"}),V.jsx(Rs,{fontSize:"lg",color:"textSecondary",children:"Don't worry, even magic balloons pop sometimes! Let's try going back home to start fresh."}),V.jsx(fc,{title:"Return to Home",variant:"primary",onClick:()=>{window.location.hash="/",window.location.reload()},minWidth:"240px"})]})}):this.props.children}}const cW=ie(lr.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 40px 20px; /* Increased vertical padding to avoid edge-to-edge filling */
`,hW=ie(lr.div)`
  background: ${t=>t.theme.theme==="dark"?"#1e293b":"#ffffff"};
  width: 95%;
  max-width: 700px;
  max-height: 95vh;
  padding: 24px;
  border-radius: 32px;
  position: relative;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid ${t=>t.theme.colors.primary}15;

  @media (max-width: 480px) {
    padding: 12px;
    border-radius: 24px;
    width: 98%;
  }

  /* Hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,fW=ie.div`
  width: 100%;
  border: 14px solid #ffd700; /* Gold */
  border-radius: 32px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: radial-gradient(circle, #ffffff 0%, #fffdf0 100%);
  position: relative;
  overflow: hidden;
  box-shadow:
    0 0 0 4px #ffd70040,
    inset 0 0 100px #ffd70010;

  @media (max-width: 480px) {
    padding: 60px 20px 40px;
    border-width: 10px;
    border-radius: 20px;
  }
`,dW=ie.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    #ffd70015 20deg,
    transparent 40deg,
    #ffd70015 60deg,
    transparent 80deg,
    #ffd70015 100deg,
    transparent 120deg,
    #ffd70015 140deg,
    transparent 160deg,
    #ffd70015 180deg,
    transparent 200deg,
    #ffd70015 220deg,
    transparent 240deg,
    #ffd70015 260deg,
    transparent 280deg,
    #ffd70015 300deg,
    transparent 320deg,
    #ffd70015 340deg,
    transparent 360deg
  );
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
  animation: rotate 20s linear infinite;

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`,pW=ie.h1`
  font-family: ${t=>t.theme.fonts.primary};
  font-size: 2.5rem;
  color: #f59e0b; /* Bright Orange/Gold */
  text-transform: uppercase;
  z-index: 1;
  font-weight: 900;
  text-shadow: 2px 4px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
  margin: 0;
`,mW=ie.h2`
  font-family: ${t=>t.theme.fonts.secondary};
  font-size: 1.2rem;
  color: #475569 !important; /* Fixed dark slate */
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,gW=ie.div`
  font-family: ${t=>t.theme.fonts.secondary};
  font-size: ${t=>t.theme.fontSize.sm};
  color: #64748b !important; /* Fixed slate */
  z-index: 1;
`,yW=ie.div`
  font-family: ${t=>t.theme.fonts.primary};
  font-size: 3.5rem;
  color: ${t=>t.theme.colors.primary};
  font-weight: 900;
  z-index: 1;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #6366f1; /* Fallback for engines that don't support clip-text */
  letter-spacing: -1px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
  margin-top: 10px;
`,vW=ie.p`
  font-family: ${t=>t.theme.fonts.secondary};
  font-size: ${t=>t.theme.fontSize.lg};
  color: #1e293b !important; /* Fixed very dark slate */
  max-width: 500px;
  line-height: 1.5;
  z-index: 1;
  font-weight: 600;
  margin: 0;
  b {
    color: #6366f1; /* Indigo */
    font-size: 1.2em;
  }

  @media (max-width: 480px) {
    font-size: ${t=>t.theme.fontSize.base};
  }
`;ie.div`
  margin-top: 10px;
  margin-bottom: 20px;
  z-index: 1;
`;ie.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #ffd700 0%, #f59e0b 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  box-shadow: 0 10px 25px #f59e0b40;
  border: 4px solid white;

  &::after {
    content: "★";
    position: absolute;
    bottom: -15px;
    background: #ef4444;
    color: white;
    padding: 2px 12px;
    border-radius: 20px;
    font-size: 1.2rem;
    font-weight: 900;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 60px;
    height: 60px;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.1));
  }

  @media (max-width: 480px) {
    width: 90px;
    height: 90px;

    svg {
      width: 45px;
      height: 45px;
    }

    &::after {
      bottom: -10px;
      font-size: 1rem;
    }
  }
`;const _W=ie.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center align for better balance */
  width: 100%;
  margin-top: 20px;
  padding: 0 10px 0;
  z-index: 1;
`;ie.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  min-width: 80px;
  width: ${t=>t.fullWidth?"100%":"auto"};
`;const s1=ie.div`
  font-weight: 900;
  font-size: ${t=>t.$variant==="small"?"0.8rem":t.$variant==="tiny"?"0.6rem":"1rem"};
  color: #1e293b !important;
  font-family: ${t=>t.theme.fonts.secondary};
  opacity: 1 !important;
  letter-spacing: ${t=>t.$variant==="tiny"?"1px":"normal"};
`,wW=ie.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  width: 100%;
  justify-content: center;
  padding: 15px;
  background: ${t=>t.theme.theme==="dark"?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.02)"};
  border-radius: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 10px;
  }
`,EW=ie.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: ${t=>t.theme.theme==="dark"?"#334155":"white"};
  border: 1px solid ${t=>t.theme.theme==="dark"?"#475569":"#e2e8f0"};
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${t=>t.theme.theme==="dark"?"#cbd5e1":"#64748b"};
  z-index: 10;

  &:hover {
    background: ${t=>t.theme.theme==="dark"?"#475569":"#f1f5f9"};
    color: #ef4444;
    transform: rotate(90deg);
  }
`;function TW(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}const SW=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function Os(t){const e=[];for(let n=0,r=t.length;n<r;n++)e.push(t[n]);return e}let Wa=null;function jR(t={}){return Wa||(t.includeStyleProperties?(Wa=t.includeStyleProperties,Wa):(Wa=Os(window.getComputedStyle(document.documentElement)),Wa))}function Ud(t,e){const r=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return r?parseFloat(r.replace("px","")):0}function xW(t){const e=Ud(t,"border-left-width"),n=Ud(t,"border-right-width");return t.clientWidth+e+n}function IW(t){const e=Ud(t,"border-top-width"),n=Ud(t,"border-bottom-width");return t.clientHeight+e+n}function $R(t,e={}){const n=e.width||xW(t),r=e.height||IW(t);return{width:n,height:r}}function AW(){let t,e;try{e=process}catch{}const n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const Fn=16384;function CW(t){(t.width>Fn||t.height>Fn)&&(t.width>Fn&&t.height>Fn?t.width>t.height?(t.height*=Fn/t.width,t.width=Fn):(t.width*=Fn/t.height,t.height=Fn):t.width>Fn?(t.height*=Fn/t.width,t.width=Fn):(t.width*=Fn/t.height,t.height=Fn))}function zd(t){return new Promise((e,n)=>{const r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>e(r))})},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t})}async function kW(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function PW(t,e,n){const r="http://www.w3.org/2000/svg",i=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return i.setAttribute("width",`${e}`),i.setAttribute("height",`${n}`),i.setAttribute("viewBox",`0 0 ${e} ${n}`),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("x","0"),a.setAttribute("y","0"),a.setAttribute("externalResourcesRequired","true"),i.appendChild(a),a.appendChild(t),kW(i)}const Cn=(t,e)=>{if(t instanceof e)return!0;const n=Object.getPrototypeOf(t);return n===null?!1:n.constructor.name===e.name||Cn(n,e)};function RW(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function bW(t,e){return jR(e).map(n=>{const r=t.getPropertyValue(n),i=t.getPropertyPriority(n);return`${n}: ${r}${i?" !important":""};`}).join(" ")}function DW(t,e,n,r){const i=`.${t}:${e}`,a=n.cssText?RW(n):bW(n,r);return document.createTextNode(`${i}{${a}}`)}function o1(t,e,n,r){const i=window.getComputedStyle(t,n),a=i.getPropertyValue("content");if(a===""||a==="none")return;const l=SW();try{e.className=`${e.className} ${l}`}catch{return}const c=document.createElement("style");c.appendChild(DW(l,n,i,r)),e.appendChild(c)}function VW(t,e,n){o1(t,e,":before",n),o1(t,e,":after",n)}const a1="application/font-woff",l1="image/jpeg",NW={woff:a1,woff2:a1,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:l1,jpeg:l1,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function MW(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function sw(t){const e=MW(t).toLowerCase();return NW[e]||""}function LW(t){return t.split(/,/)[1]}function cv(t){return t.search(/^(data:)/)!==-1}function OW(t,e){return`data:${e};base64,${t}`}async function UR(t,e,n){const r=await fetch(t,e);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const i=await r.blob();return new Promise((a,l)=>{const c=new FileReader;c.onerror=l,c.onloadend=()=>{try{a(n({res:r,result:c.result}))}catch(h){l(h)}},c.readAsDataURL(i)})}const Qg={};function FW(t,e,n){let r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?`[${e}]${r}`:r}async function ow(t,e,n){const r=FW(t,e,n.includeQueryParams);if(Qg[r]!=null)return Qg[r];n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let i;try{const a=await UR(t,n.fetchRequestInit,({res:l,result:c})=>(e||(e=l.headers.get("Content-Type")||""),LW(c)));i=OW(a,e)}catch(a){i=n.imagePlaceholder||"";let l=`Failed to fetch resource: ${t}`;a&&(l=typeof a=="string"?a:a.message),l&&console.warn(l)}return Qg[r]=i,i}async function jW(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):zd(e)}async function $W(t,e){if(t.currentSrc){const a=document.createElement("canvas"),l=a.getContext("2d");a.width=t.clientWidth,a.height=t.clientHeight,l==null||l.drawImage(t,0,0,a.width,a.height);const c=a.toDataURL();return zd(c)}const n=t.poster,r=sw(n),i=await ow(n,r,e);return zd(i)}async function UW(t,e){var n;try{if(!((n=t==null?void 0:t.contentDocument)===null||n===void 0)&&n.body)return await Rp(t.contentDocument.body,e,!0)}catch{}return t.cloneNode(!1)}async function zW(t,e){return Cn(t,HTMLCanvasElement)?jW(t):Cn(t,HTMLVideoElement)?$W(t,e):Cn(t,HTMLIFrameElement)?UW(t,e):t.cloneNode(zR(t))}const BW=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT",zR=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SVG";async function WW(t,e,n){var r,i;if(zR(e))return e;let a=[];return BW(t)&&t.assignedNodes?a=Os(t.assignedNodes()):Cn(t,HTMLIFrameElement)&&(!((r=t.contentDocument)===null||r===void 0)&&r.body)?a=Os(t.contentDocument.body.childNodes):a=Os(((i=t.shadowRoot)!==null&&i!==void 0?i:t).childNodes),a.length===0||Cn(t,HTMLVideoElement)||await a.reduce((l,c)=>l.then(()=>Rp(c,n)).then(h=>{h&&e.appendChild(h)}),Promise.resolve()),e}function HW(t,e,n){const r=e.style;if(!r)return;const i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):jR(n).forEach(a=>{let l=i.getPropertyValue(a);a==="font-size"&&l.endsWith("px")&&(l=`${Math.floor(parseFloat(l.substring(0,l.length-2)))-.1}px`),Cn(t,HTMLIFrameElement)&&a==="display"&&l==="inline"&&(l="block"),a==="d"&&e.getAttribute("d")&&(l=`path(${e.getAttribute("d")})`),r.setProperty(a,l,i.getPropertyPriority(a))})}function qW(t,e){Cn(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),Cn(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function KW(t,e){if(Cn(t,HTMLSelectElement)){const n=e,r=Array.from(n.children).find(i=>t.value===i.getAttribute("value"));r&&r.setAttribute("selected","")}}function GW(t,e,n){return Cn(e,Element)&&(HW(t,e,n),VW(t,e,n),qW(t,e),KW(t,e)),e}async function QW(t,e){const n=t.querySelectorAll?t.querySelectorAll("use"):[];if(n.length===0)return t;const r={};for(let a=0;a<n.length;a++){const c=n[a].getAttribute("xlink:href");if(c){const h=t.querySelector(c),p=document.querySelector(c);!h&&p&&!r[c]&&(r[c]=await Rp(p,e,!0))}}const i=Object.values(r);if(i.length){const a="http://www.w3.org/1999/xhtml",l=document.createElementNS(a,"svg");l.setAttribute("xmlns",a),l.style.position="absolute",l.style.width="0",l.style.height="0",l.style.overflow="hidden",l.style.display="none";const c=document.createElementNS(a,"defs");l.appendChild(c);for(let h=0;h<i.length;h++)c.appendChild(i[h]);t.appendChild(l)}return t}async function Rp(t,e,n){return!n&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(r=>zW(r,e)).then(r=>WW(t,r,e)).then(r=>GW(t,r,e)).then(r=>QW(r,e))}const BR=/url\((['"]?)([^'"]+?)\1\)/g,YW=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,XW=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function JW(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function ZW(t){const e=[];return t.replace(BR,(n,r,i)=>(e.push(i),n)),e.filter(n=>!cv(n))}async function eH(t,e,n,r,i){try{const a=n?TW(e,n):e,l=sw(e);let c;return i||(c=await ow(a,l,r)),t.replace(JW(e),`$1${c}$3`)}catch{}return t}function tH(t,{preferredFontFormat:e}){return e?t.replace(XW,n=>{for(;;){const[r,,i]=YW.exec(n)||[];if(!i)return"";if(i===e)return`src: ${r};`}}):t}function WR(t){return t.search(BR)!==-1}async function HR(t,e,n){if(!WR(t))return t;const r=tH(t,n);return ZW(r).reduce((a,l)=>a.then(c=>eH(c,l,e,n)),Promise.resolve(r))}async function Ha(t,e,n){var r;const i=(r=e.style)===null||r===void 0?void 0:r.getPropertyValue(t);if(i){const a=await HR(i,null,n);return e.style.setProperty(t,a,e.style.getPropertyPriority(t)),!0}return!1}async function nH(t,e){await Ha("background",t,e)||await Ha("background-image",t,e),await Ha("mask",t,e)||await Ha("-webkit-mask",t,e)||await Ha("mask-image",t,e)||await Ha("-webkit-mask-image",t,e)}async function rH(t,e){const n=Cn(t,HTMLImageElement);if(!(n&&!cv(t.src))&&!(Cn(t,SVGImageElement)&&!cv(t.href.baseVal)))return;const r=n?t.src:t.href.baseVal,i=await ow(r,sw(r),e);await new Promise((a,l)=>{t.onload=a,t.onerror=e.onImageErrorHandler?(...h)=>{try{a(e.onImageErrorHandler(...h))}catch(p){l(p)}}:l;const c=t;c.decode&&(c.decode=a),c.loading==="lazy"&&(c.loading="eager"),n?(t.srcset="",t.src=i):t.href.baseVal=i})}async function iH(t,e){const r=Os(t.childNodes).map(i=>qR(i,e));await Promise.all(r).then(()=>t)}async function qR(t,e){Cn(t,Element)&&(await nH(t,e),await rH(t,e),await iH(t,e))}function sH(t,e){const{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);const r=e.style;return r!=null&&Object.keys(r).forEach(i=>{n[i]=r[i]}),t}const u1={};async function c1(t){let e=u1[t];if(e!=null)return e;const r=await(await fetch(t)).text();return e={url:t,cssText:r},u1[t]=e,e}async function h1(t,e){let n=t.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,a=(n.match(/url\([^)]+\)/g)||[]).map(async l=>{let c=l.replace(r,"$1");return c.startsWith("https://")||(c=new URL(c,t.url).href),UR(c,e.fetchRequestInit,({result:h})=>(n=n.replace(l,`url(${h})`),[l,h]))});return Promise.all(a).then(()=>n)}function f1(t){if(t==null)return[];const e=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=t.replace(n,"");const i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const h=i.exec(r);if(h===null)break;e.push(h[0])}r=r.replace(i,"");const a=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,l="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",c=new RegExp(l,"gi");for(;;){let h=a.exec(r);if(h===null){if(h=c.exec(r),h===null)break;a.lastIndex=c.lastIndex}else c.lastIndex=a.lastIndex;e.push(h[0])}return e}async function oH(t,e){const n=[],r=[];return t.forEach(i=>{if("cssRules"in i)try{Os(i.cssRules||[]).forEach((a,l)=>{if(a.type===CSSRule.IMPORT_RULE){let c=l+1;const h=a.href,p=c1(h).then(m=>h1(m,e)).then(m=>f1(m).forEach(y=>{try{i.insertRule(y,y.startsWith("@import")?c+=1:i.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:y,error:w})}})).catch(m=>{console.error("Error loading remote css",m.toString())});r.push(p)}})}catch(a){const l=t.find(c=>c.href==null)||document.styleSheets[0];i.href!=null&&r.push(c1(i.href).then(c=>h1(c,e)).then(c=>f1(c).forEach(h=>{l.insertRule(h,l.cssRules.length)})).catch(c=>{console.error("Error loading remote stylesheet",c)})),console.error("Error inlining remote css file",a)}}),Promise.all(r).then(()=>(t.forEach(i=>{if("cssRules"in i)try{Os(i.cssRules||[]).forEach(a=>{n.push(a)})}catch(a){console.error(`Error while reading CSS rules from ${i.href}`,a)}}),n))}function aH(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>WR(e.style.getPropertyValue("src")))}async function lH(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=Os(t.ownerDocument.styleSheets),r=await oH(n,e);return aH(r)}function KR(t){return t.trim().replace(/["']/g,"")}function uH(t){const e=new Set;function n(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(a=>{e.add(KR(a))}),Array.from(r.children).forEach(a=>{a instanceof HTMLElement&&n(a)})}return n(t),e}async function cH(t,e){const n=await lH(t,e),r=uH(t);return(await Promise.all(n.filter(a=>r.has(KR(a.style.fontFamily))).map(a=>{const l=a.parentStyleSheet?a.parentStyleSheet.href:null;return HR(a.cssText,l,e)}))).join(`
`)}async function hH(t,e){const n=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await cH(t,e);if(n){const r=document.createElement("style"),i=document.createTextNode(n);r.appendChild(i),t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r)}}async function fH(t,e={}){const{width:n,height:r}=$R(t,e),i=await Rp(t,e,!0);return await hH(i,e),await qR(i,e),sH(i,e),await PW(i,n,r)}async function dH(t,e={}){const{width:n,height:r}=$R(t,e),i=await fH(t,e),a=await zd(i),l=document.createElement("canvas"),c=l.getContext("2d"),h=e.pixelRatio||AW(),p=e.canvasWidth||n,m=e.canvasHeight||r;return l.width=p*h,l.height=m*h,e.skipAutoScale||CW(l),l.style.width=`${p}`,l.style.height=`${m}`,e.backgroundColor&&(c.fillStyle=e.backgroundColor,c.fillRect(0,0,l.width,l.height)),c.drawImage(a,0,0,l.width,l.height),l}async function GR(t,e={}){return(await dH(t,e)).toDataURL()}var Xf={exports:{}},pH=Xf.exports,d1;function mH(){return d1||(d1=1,function(t,e){(function(n,r){t.exports=r()})(pH,function(){return function n(r,i,a){var l=window,c="application/octet-stream",h=a||c,p=r,m=!i&&!a&&p,y=document.createElement("a"),w=function(C){return String(C)},T=l.Blob||l.MozBlob||l.WebKitBlob||w,x=i||"download",P,k;if(T=T.call?T.bind(l):Blob,String(this)==="true"&&(p=[p,h],h=p[0],p=p[1]),m&&m.length<2048&&(x=m.split("/").pop().split("?")[0],y.href=m,y.href.indexOf(m)!==-1)){var b=new XMLHttpRequest;return b.open("GET",m,!0),b.responseType="blob",b.onload=function(C){n(C.target.response,x,c)},setTimeout(function(){b.send()},0),b}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(p))if(p.length>1024*1024*1.999&&T!==w)p=H(p),h=p.type||c;else return navigator.msSaveBlob?navigator.msSaveBlob(H(p),x):X(p);else if(/([\x80-\xff])/.test(p)){var F=0,U=new Uint8Array(p.length),$=U.length;for(F;F<$;++F)U[F]=p.charCodeAt(F);p=new T([U],{type:h})}P=p instanceof T?p:new T([p],{type:h});function H(C){var I=C.split(/[:;,]/),R=I[1],D=I[2]=="base64"?atob:decodeURIComponent,O=D(I.pop()),B=O.length,M=0,Re=new Uint8Array(B);for(M;M<B;++M)Re[M]=O.charCodeAt(M);return new T([Re],{type:R})}function X(C,I){if("download"in y)return y.href=C,y.setAttribute("download",x),y.className="download-js-link",y.innerHTML="downloading...",y.style.display="none",document.body.appendChild(y),setTimeout(function(){y.click(),document.body.removeChild(y),I===!0&&setTimeout(function(){l.URL.revokeObjectURL(y.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(C)&&(C="data:"+C.replace(/^data:([\w\/\-\+]+)/,c)),window.open(C)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=C),!0;var R=document.createElement("iframe");document.body.appendChild(R),!I&&/^data:/.test(C)&&(C="data:"+C.replace(/^data:([\w\/\-\+]+)/,c)),R.src=C,setTimeout(function(){document.body.removeChild(R)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(P,x);if(l.URL)X(l.URL.createObjectURL(P),!0);else{if(typeof P=="string"||P.constructor===w)try{return X("data:"+h+";base64,"+l.btoa(P))}catch{return X("data:"+h+","+encodeURIComponent(P))}k=new FileReader,k.onload=function(C){X(this.result)},k.readAsDataURL(P)}return!0}})}(Xf)),Xf.exports}var gH=mH();const yH=$1(gH),vH=async(t,e)=>{const n=document.getElementById(t);if(!n)return;const r=n.style.width;n.style.width="1000px";try{await document.fonts.ready,await new Promise(a=>setTimeout(a,300));const i=await GR(n,{cacheBust:!0,backgroundColor:"#ffffff",pixelRatio:2,canvasWidth:1200,canvasHeight:900});yH(i,`Kiddoo_Certificate_${e}.png`)}finally{n.style.width=r}},_H=async(t,e,n)=>{const r=document.getElementById(t);if(!r)return;const i=r.style.width;r.style.width="1000px";try{await document.fonts.ready,await new Promise(m=>setTimeout(m,300));const a=await GR(r,{cacheBust:!0,backgroundColor:"#ffffff",pixelRatio:2,canvasWidth:1200,canvasHeight:900}),c=await(await fetch(a)).blob(),h=new File([c],`Kiddoo_Certificate_${e}.png`,{type:"image/png"}),p={title:"My Kiddoo Achievement!",text:`I just achieved a score of ${n}/10 in the ${e} test on Kiddoo! 🏆 Try it yourself at: https://dnshariprasad.github.io/kiddoo/`,files:[h]};if(navigator.canShare&&navigator.canShare({files:[h]}))await navigator.share(p);else{const y=`${window.location.origin+window.location.pathname}#/?certName=${encodeURIComponent(e)}&certScore=${n}`;if(navigator.share)await navigator.share({title:p.title,text:p.text,url:y});else return await navigator.clipboard.writeText(`${p.text} Check it out here: ${y}`),"copied"}}finally{r.style.width=i}return"shared"},wH=(t=new Date)=>t.toLocaleDateString(),EH=(t=new Date)=>t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",timeZoneName:"short"}),TH=()=>{const t=new Date().toISOString().split("T")[0].replace(/-/g,""),e=Date.now().toString().slice(-6),n=Math.random().toString(36).substring(7).toUpperCase();return`KIDDOO-${t}-${e}-${n}`},SH=({onClose:t,challengeName:e,score:n,level:r,timeTaken:i})=>{const a=m_.en,l=ti(y=>y.alphabet.userName),[c,h]=tr.useState(!1),p=async()=>{h(!0);try{await vH("certificate-content",e)}catch(y){console.error("Error generating image:",y),window.print()}finally{h(!1)}},m=async()=>{h(!0);try{await _H("certificate-content",e,n)==="copied"&&alert(a.cert_copied)}catch(y){console.error("Error sharing:",y),alert(a.cert_failed)}finally{h(!1)}};return V.jsx(cW,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:V.jsxs(hW,{initial:{scale:.8,y:50},animate:{scale:1,y:0},exit:{scale:.8,y:50},onClick:y=>y.stopPropagation(),children:[V.jsx(EW,{onClick:t,title:"Close",className:"no-print",children:V.jsx(p_,{size:24})}),V.jsxs(fW,{id:"certificate-content",children:[V.jsx(dW,{}),V.jsx(pW,{children:a.cert_pro}),V.jsx(mW,{children:a.cert_award}),V.jsx(gW,{children:a.cert_belongs}),V.jsxs(yW,{children:[V.jsx(p$,{size:48,color:"#6366f1"}),l||"Super Star"]}),V.jsxs(vW,{children:[a.cert_legend," ",V.jsx("b",{children:e})," ",a.cert_challenge,r?` (${r} ${a.cert_level})`:"","! ",a.cert_smashed," ",V.jsxs("b",{children:[n,"/10"]}),i?V.jsxs(V.Fragment,{children:[" ",a.cert_inJust," ",V.jsx("b",{children:i})]}):"","! ",a.cert_keepAwesome]}),V.jsxs(_W,{children:[V.jsxs(s1,{$variant:"small",children:[wH()," | ",EH()]}),V.jsx(s1,{$variant:"tiny",children:TH()})]})]}),V.jsxs(wW,{className:"no-print",children:[V.jsx(fc,{title:c?a.cert_generating:a.cert_download,variant:"primary",onClick:p,icon:c?V.jsx(r$,{size:20,className:"animate-spin"}):V.jsx(X5,{size:20})}),V.jsx(fc,{title:a.cert_share,variant:"secondary",onClick:m,icon:V.jsx(lk,{size:20})})]})]})})},xH=()=>{const t=ui(),e=pv(),[n,r]=N.useState(null);return N.useEffect(()=>{const i=new URLSearchParams(t.search),a=i.get("certName"),l=i.get("certScore");a&&l&&r({name:a,score:parseInt(l,10)})},[t]),n?V.jsx(h_,{children:V.jsx(SH,{onClose:()=>{r(null),e(t.pathname,{replace:!0})},challengeName:n.name,score:n.score})}):null},Ve={primary:"#6366F1",primaryDark:"#4F46E5",primaryLight:"#818CF8",onPrimary:"#FFFFFF",primaryContainer:"#EEF2FF",primaryContainerDark:"#312E81",secondary:"#6366F1",onSecondary:"#FFFFFF",accent:"#6366F1",accentLight:"#FF7675",success:"#10B981",successDark:"#34D399",warning:"#F59E0B",warningDark:"#FBBF24",error:"#EF4444",background:"#F8FAFC",backgroundDark:"#0F172A",surface:"#FFFFFF",surfaceDark:"#1E293B",surfaceVariant:"#F1F5F9",surfaceVariantDark:"#334155",textPrimary:"#1E293B",textPrimaryDark:"#F1F5F9",textSecondary:"#64748B",textSecondaryDark:"#94A3B8",border:"#E2E8F0",borderDark:"#334155",borderLight:"#F0F0F0",shadow:"rgba(99, 102, 241, 0.1)",shadowDark:"rgba(0, 0, 0, 0.3)",cellFixedBg:"#F8F9FA",cellFixedText:"#636E72",tipBoxBg:"rgba(99, 102, 241, 0.05)",operator:"#FF7675",equalSign:"#6366F1",questionMark:"#DFE6E9",gold:"#FFD700",goldDark:"#D97706",goldLight:"#FDE68A",slate:"#94A3B8",slateDark:"#475569",slateLight:"#E2E8F0",math:"#6366F1",english:"#6366F1",hindi:"#6366F1"},IH={primary:"'Nunito', sans-serif",secondary:"'Quicksand', sans-serif"},AH={small:"12px",medium:"20px",large:"28px",round:"50%"},CH={sm:"0 2px 4px rgba(0,0,0,0.05)",md:"0 4px 12px rgba(0,0,0,0.08)",lg:"0 8px 24px rgba(0,0,0,0.12)"},kH={small:{xs:"0.75rem",sm:"0.85rem",base:"0.9rem",md:"1rem",lg:"1.2rem",xl:"1.5rem",xxl:"2rem",huge:"3rem"},medium:{xs:"0.85rem",sm:"0.95rem",base:"1rem",md:"1.2rem",lg:"1.5rem",xl:"2rem",xxl:"2.5rem",huge:"4rem"},large:{xs:"1rem",sm:"1.1rem",base:"1.2rem",md:"1.5rem",lg:"2rem",xl:"2.5rem",xxl:"3.5rem",huge:"6rem"}},QR={fonts:IH,borderRadius:AH,shadows:CH,fontSizes:kH},PH={...QR,colors:{primary:Ve.primary,onPrimary:Ve.onPrimary,primaryContainer:Ve.primaryContainer,secondary:Ve.secondary,onSecondary:Ve.onSecondary,accent:Ve.accent,success:Ve.success,warning:Ve.warning,math:Ve.math,english:Ve.english,hindi:Ve.hindi,background:Ve.background,surface:Ve.surface,surfaceVariant:Ve.surfaceVariant,textPrimary:Ve.textPrimary,textSecondary:Ve.textSecondary,border:Ve.border,shadow:Ve.shadow,cellFixedBg:Ve.cellFixedBg,cellFixedText:Ve.cellFixedText,tipBoxBg:Ve.tipBoxBg}},RH={...QR,colors:{primary:Ve.primaryLight,onPrimary:Ve.onPrimary,primaryContainer:Ve.primaryContainerDark,secondary:Ve.primaryLight,onSecondary:Ve.onPrimary,accent:Ve.primaryLight,success:Ve.successDark,warning:Ve.warningDark,math:Ve.primaryLight,english:Ve.primaryLight,hindi:Ve.primaryLight,background:Ve.backgroundDark,surface:Ve.surfaceDark,surfaceVariant:Ve.surfaceVariantDark,textPrimary:Ve.textPrimaryDark,textSecondary:Ve.textSecondaryDark,border:Ve.borderDark,shadow:Ve.shadowDark,cellFixedBg:Ve.surfaceVariantDark,cellFixedText:Ve.textSecondaryDark,tipBoxBg:"rgba(255, 255, 255, 0.05)"}},bH=AL`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;kl`
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`;kl`
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`;kl`
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
`;const DH=IL`
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${t=>t.theme.colors.background};
    overflow-x: hidden;
    min-height: 100vh;
    color: ${t=>t.theme.colors.textPrimary};
    font-family: ${t=>t.theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
    position: relative;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  /* Remove Arrows from Number Input for a cleaner professional look */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  /* Material 3 Styled Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${t=>t.theme.colors.border};
    border-radius: 10px;
    border: 2px solid ${t=>t.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${t=>t.theme.colors.primary}80;
  }

  @media print {
    body * {
      visibility: hidden;
    }
    #certificate-content,
    #certificate-content * {
      visibility: visible;
    }
    #certificate-content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100% !important;
      height: 100% !important;
      margin: 0 !important;
      padding: 20px !important;
      border: 10px double ${t=>t.theme.colors.primary} !important;
    }
    .no-print {
      display: none !important;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-spin {
    animation: spin 1s linear infinite;
  }
`,aw=ie.div`
  background: ${t=>t.theme.colors.surfaceVariant}40;
  background-image: linear-gradient(
    90deg,
    ${t=>t.theme.colors.surfaceVariant}40 0%,
    ${t=>t.theme.colors.surfaceVariant}80 50%,
    ${t=>t.theme.colors.surfaceVariant}40 100%
  );
  background-size: 200% 100%;
  animation: ${bH} 1.5s infinite;
  border-radius: 12px;
`,B7=ie.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`,YR=ie.div`
  background: ${t=>t.theme.colors.surface};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 28px;
  padding: 30px 40px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  width: 100%;
  box-sizing: border-box;
  max-width: none;
  transition: all 0.3s ease;
  border: 1px solid ${t=>t.theme.colors.primary}15;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    border-color: ${t=>t.theme.colors.primary}30;
  }

  @media (max-width: 768px) {
    padding: 20px 20px;
    border-radius: 20px;
  }
`,W7=ie.input.attrs({onFocus:t=>{setTimeout(()=>{t.target.scrollIntoView({behavior:"smooth",block:"center"})},300)}})`
  padding: 10px 20px;
  margin: 15px 0;
  background: ${t=>t.theme.colors.surface};
  border: 3px solid ${t=>t.theme.colors.primary}15;
  border-radius: 16px;
  font-size: ${t=>t.theme.fontSize.xl};
  font-weight: 800;
  font-family: ${t=>t.theme.fonts.primary};
  width: ${t=>t.width||"120px"};
  height: 80px;
  color: ${t=>t.theme.colors.primary};
  text-align: center;
  outline: none;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &::placeholder {
    color: ${t=>t.theme.colors.textSecondary}40;
  }

  &:focus {
    border-color: ${t=>t.theme.colors.primary};
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    height: 64px;
    font-size: ${t=>t.theme.fontSize.lg};
    width: ${t=>t.width||"100px"};
  }
`,H7=ie.span`
  color: ${t=>t.$color||(t.$isActive?"white":t.theme.colors.textSecondary)};
  background: ${t=>t.$bg||(t.$isActive?t.theme.colors.primary:t.theme.colors.surfaceVariant)};
  padding: 10px 18px;
  border-radius: 12px;
  font-size: ${t=>t.theme.fontSize.base};
  font-weight: 700;
  font-family: ${t=>t.theme.fonts.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  cursor: pointer;
  min-width: 44px;
  min-height: 44px;
  border: 1px solid
    ${t=>t.$isActive?t.theme.colors.primary:t.theme.colors.primary+"10"};

  &:hover {
    background: ${t=>t.$isActive?t.theme.colors.primary:t.theme.colors.primary+"15"};
    color: ${t=>t.$isActive?"white":t.theme.colors.primary};
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }
`;ie.h4`
  color: ${t=>t.theme.colors.primary};
  font-family: ${t=>t.theme.fonts.primary};
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.2px;
  font-size: ${t=>t.theme.fontSize.md};
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 60px; /* Matches the visual height of the PageTitle line */
  padding-top: 5px;
`;const q7=ie.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`,VH=ie.div`
  padding: 0 30px 24px; /* Standardized side/bottom padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${t=>t.theme.colors.background};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`;ie.div`
  padding: ${t=>t.padding||"20px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;ie.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;ie.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
  max-width: 400px;
`;ie.li`
  padding: 16px 24px;
  margin-bottom: 12px;
  background: ${t=>t.theme.colors.surfaceVariant}CC;
  backdrop-filter: blur(8px);
  border-radius: 16px;
  border: 1px solid ${t=>t.theme.colors.primary}15;
  color: ${t=>t.theme.colors.textPrimary};
  font-family: ${t=>t.theme.fonts.secondary};
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.03);
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(5px);
    background: ${t=>t.theme.colors.surface};
    box-shadow: 0 6px 16px rgba(99, 102, 241, 0.06);
  }
`;ie.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;ie.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background: ${t=>t.theme.colors.surface};
  backdrop-filter: blur(10px);
  border-radius: 28px;
  padding: 30px;
  box-shadow:
    0 8px 16px rgba(99, 102, 241, 0.04),
    0 16px 32px rgba(99, 102, 241, 0.06);
  border: 1px solid ${t=>t.theme.colors.primary}15;
`;ie.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;const NH=ie.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  height: auto;
  background: ${t=>t.theme.colors.surface};
  border-radius: 24px;
  border: 1px solid ${t=>t.theme.colors.primary}15;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  padding: 12px 24px;
  margin-bottom: 0;
  box-sizing: border-box;

  @media (max-width: 992px) {
    height: auto;
    min-height: 80px;
    padding: 10px 15px;
    margin-bottom: 0;
  }
`,K7=ie(NH)`
  background: linear-gradient(
    135deg,
    ${t=>t.theme.colors.primary} 0%,
    ${t=>t.theme.colors.primary}CC 100%
  );
  border: none;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.02),
    0 8px 24px rgba(0, 0, 0, 0.04);
  margin-bottom: 0;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
    animation: rotate 10s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 992px) {
    order: 10;
    min-height: 100px;
    height: auto;
    margin-top: 20px;
  }
`;ie(lr.button)`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 800;
  font-size: ${t=>t.theme.fontSize.md};
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
  }
`;const G7=ie.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 0;
  gap: 4px;
`,Q7=ie.h1`
  font-family: ${t=>t.theme.fonts.primary};
  font-size: ${t=>t.theme.fontSize.lg};
  font-weight: 800;
  color: ${t=>t.theme.colors.primary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.2px;
  text-align: center;
  position: relative;

  &::after {
    display: none;
  }
`,Y7=ie.p`
  font-family: ${t=>t.theme.fonts.secondary};
  font-size: ${t=>t.theme.fontSize.sm};
  color: ${t=>t.theme.colors.textSecondary};
  margin: 0;
  opacity: 0.9;
  max-width: 600px;
  text-align: center;
  font-weight: 500;
`,MH=ie(YR)`
  background: ${t=>t.theme.colors.surface};
  border: 1px solid ${t=>t.theme.colors.primary}20;
  max-width: none;
  padding: 15px 25px;

  &:hover {
    transform: translateY(-4px);
  }
`,LH=ie(YR)`
  /* This represents the primary educational content module */
`,X7=ie(LH)`
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  gap: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 10px 15px;
    gap: 10px;
  }
`,OH=ie(lr.span)`
  font-size: ${t=>t.theme.fontSize.lg};
`,J7=ie(OH)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,Z7=ie.span`
  position: absolute;
  font-size: 0.7rem;
  font-weight: 900;
  color: #1e293b;
  margin-top: 2px;
`,eq=ie.span`
  font-size: 1.5rem;
`,tq=ie.span`
  margin-left: 5px;
  font-weight: 800;
  color: #ffd700;
`,nq=ie(lr.div)`
  margin-top: 15px;
`,FH=ie(MH)`
  /* This represents the configuration/settings module */
`;ie(FH)`
  /* This represents the configuration/settings module */
`;const jH=ie.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
  }
`,rq=ie(jH)`
  margin-top: 15px;
`,iq=ie.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 20px 25px;
  width: 100%;
  align-items: start;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;ie.div`
  display: contents;
`;ie.div`
  display: contents;
`;const sq=ie.div`
  margin-bottom: 12px;
  opacity: ${t=>t.$disabled?.5:1};
  pointer-events: ${t=>t.$disabled?"none":"auto"};

  &:last-child {
    margin-bottom: 0;
  }
`,oq=ie.h4`
  color: ${t=>t.theme.colors.primary};
  font-family: ${t=>t.theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`,aq=ie.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
  margin: 8px 0 0;
  box-sizing: border-box;
`,lq=ie.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: ${t=>t.$isActive?t.theme.colors.primary+"15":"transparent"};
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid ${t=>t.$isActive?t.theme.colors.primary:"transparent"};
  font-size: ${t=>t.theme.fontSize.sm};
  color: ${t=>t.theme.colors.textPrimary};
  font-weight: 700;
  justify-content: flex-start;
  text-align: left;
  min-height: 48px;
  padding: 8px 16px;

  &:hover {
    background: ${t=>t.theme.colors.primary}08;
    transform: translateY(-1px);
  }

  input {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid ${t=>t.theme.colors.primary}40;
    border-radius: 50%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    background: ${t=>t.theme.colors.surface};
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      background: ${t=>t.theme.colors.primary};
      border-radius: 50%;
      transform: scale(0);
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      border: 4px solid ${t=>t.theme.colors.surface};
      box-sizing: border-box;
    }

    &:checked {
      border-color: ${t=>t.theme.colors.primary};
    }

    &:checked::after {
      transform: scale(1);
    }
  }
`,uq=ie.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  background: transparent;
`,cq=ie(lr.div)`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: ${t=>t.theme.colors.surface};
  border: 2px solid ${t=>t.theme.colors.primary}20;
  border-radius: 24px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  z-index: 100;
  min-width: 220px;
  overflow: hidden;
`,hq=ie.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  border: none;
  background: ${t=>t.theme.colors.surface};
  border-radius: 12px;
  color: ${t=>t.theme.colors.textPrimary};
  font-family: ${t=>t.theme.fonts.secondary};
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${t=>t.theme.colors.primary}15;
    color: ${t=>t.theme.colors.primary};
  }
`,fq=ie.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: ${t=>t.$disabled?"not-allowed":"pointer"};
  opacity: ${t=>t.$disabled?.6:1};
  color: ${t=>t.theme.colors.textSecondary};
  font-family: ${t=>t.theme.fonts.secondary};
  font-weight: 700;
  font-size: 1rem;
  padding: 8px 12px;
  background: ${t=>t.theme.colors.surface};
  border: 2px solid ${t=>t.theme.colors.primary}15;
  border-radius: 16px;
  transition: all 0.2s ease;
  margin-top: 5px;

  &:hover {
    border-color: ${t=>t.$disabled?t.theme.colors.border:t.theme.colors.primary};
  }
`,dq=ie.input`
  appearance: none;
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border: 2px solid ${t=>t.theme.colors.primary}40;
  border-radius: 6px;
  background: ${t=>t.theme.colors.surface};
  cursor: inherit;
  position: relative;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:checked {
    background: ${t=>t.theme.colors.primary};
    border-color: ${t=>t.theme.colors.primary};
  }

  &::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    color: white;
    font-size: 14px;
    font-weight: 900;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:checked::after {
    transform: translate(-50%, -50%) scale(1);
  }

  &:focus {
    box-shadow: 0 0 0 3px ${t=>t.theme.colors.primary}30;
  }
`,pq=ie.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${t=>t.theme.colors.textSecondary};
  cursor: help;
  transition: all 0.2s ease;
  margin-left: 6px;
  position: relative;

  &:hover {
    color: ${t=>t.theme.colors.primary};
  }

  &:hover::after {
    content: attr(data-info);
    position: absolute;
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%);
    background: ${t=>t.theme.colors.surface};
    color: ${t=>t.theme.colors.textPrimary};
    padding: 8px 12px;
    border-radius: 10px;
    font-size: 0.85rem;
    font-weight: 600;
    white-space: nowrap;
    z-index: 1000;
    pointer-events: none;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    border: 1px solid ${t=>t.theme.colors.border};
    animation: fadeIn 0.2s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`,$H=ie(aw)`
  width: 300px;
  height: 48px;
  margin-bottom: 12px;
`,UH=ie(aw)`
  width: 500px;
  height: 24px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 90%;
  }
`,Yg=ie(aw)`
  width: 100%;
  height: 400px;
  border-radius: 28px;
`,zH=ie.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 25px;
  width: 100%;
  max-width: 1200px;
  margin-top: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
`,XR=()=>V.jsx(VH,{children:V.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",marginTop:"40px"},children:[V.jsx($H,{}),V.jsx(UH,{}),V.jsxs(zH,{children:[V.jsx(Yg,{}),V.jsx(Yg,{}),V.jsx(Yg,{})]})]})}),BH=({children:t})=>{const e=ti(a=>a.alphabet.theme),n=ti(a=>a.alphabet.fontSizeLevel),r=e==="dark"?RH:PH,i={...r,fontSize:r.fontSizes[n]};return V.jsxs(TL,{theme:i,children:[V.jsx(DH,{}),t]})},WH=({children:t})=>{const e=qd(),[n,r]=N.useState(!0);return N.useEffect(()=>w6(FR,a=>{e(QE(a?{uid:a.uid,email:a.email,displayName:a.displayName}:null)),r(!1)}),[e]),n?V.jsx(XR,{}):V.jsx(V.Fragment,{children:t})},et=({children:t})=>{const e=ti(a=>a.alphabet.user),n=ti(a=>a.alphabet.userName),[r,i]=N.useState(!n);return e?!n&&r?V.jsx(hk,{onComplete:()=>i(!1)}):V.jsx(V.Fragment,{children:t}):V.jsx(oV,{to:"/login"})},HH=()=>V.jsx(XR,{}),qH=N.lazy(()=>tt(()=>import("./index-D5DBoTFW.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]))),KH=N.lazy(()=>tt(()=>import("./index-CmMhpEQv.js"),__vite__mapDeps([26,1,5,11,7,2,15,22,19]))),GH=N.lazy(()=>tt(()=>import("./index-HBIaM-fr.js"),__vite__mapDeps([27,20]))),QH=N.lazy(()=>tt(()=>import("./index-BE5QsrKe.js"),__vite__mapDeps([28,29,30,31,32,33,18]))),YH=N.lazy(()=>tt(()=>import("./index-CPZcoY5f.js"),__vite__mapDeps([34,29,30,31,32,35,33,18,5,25]))),XH=N.lazy(()=>tt(()=>import("./index-CkrqFw9e.js"),__vite__mapDeps([36,29,30,32,35,37,33,18,13,12,11]))),JH=N.lazy(()=>tt(()=>import("./index-Dtt2ZUCR.js"),__vite__mapDeps([38,32,33,18,30,37,15,24]))),ZH=N.lazy(()=>tt(()=>import("./index-_uJkVNX8.js"),__vite__mapDeps([39,29,30,31,32,33,18,19]))),e7=N.lazy(()=>tt(()=>import("./index-DopNI3XC.js"),__vite__mapDeps([40,29,30,31,32,33,18,19]))),t7=N.lazy(()=>tt(()=>import("./index-DkE7dyud.js"),__vite__mapDeps([41,29,30,31,32,42,43,9]))),n7=N.lazy(()=>tt(()=>import("./index-DWa9PX-Y.js"),__vite__mapDeps([44,29,30,31,32,45,43,8]))),r7=N.lazy(()=>tt(()=>import("./index-BHIgxQsQ.js"),__vite__mapDeps([46,29,30,31,32,42,43,9]))),i7=N.lazy(()=>tt(()=>import("./index-CRitOND-.js"),__vite__mapDeps([47,29,30,31,32,42,43,9]))),s7=N.lazy(()=>tt(()=>import("./index-CmXwuIfF.js"),__vite__mapDeps([48,29,30,31,32,43,23]))),o7=N.lazy(()=>tt(()=>import("./index-DDImc0Ve.js"),__vite__mapDeps([49,29,30,31,32,50,43,16]))),a7=N.lazy(()=>tt(()=>import("./index-DP46__mA.js"),__vite__mapDeps([51,29,30,31,32,50,43,16]))),l7=N.lazy(()=>tt(()=>import("./index-CPrFlBw_.js"),__vite__mapDeps([52,29,30,31,32,50,43,16]))),u7=N.lazy(()=>tt(()=>import("./index-Cdgn9B1C.js"),__vite__mapDeps([53,29,30,31,32,45,43,8]))),c7=N.lazy(()=>tt(()=>import("./index-BoFlNC0G.js"),__vite__mapDeps([54,29,30,31,32,45,43,8]))),h7=N.lazy(()=>tt(()=>import("./index-C_m3YLw8.js"),__vite__mapDeps([55,32,4,12]))),f7=N.lazy(()=>tt(()=>import("./index-CQ9nnqLS.js"),__vite__mapDeps([56,29,30,31,32,57,43,17]))),d7=N.lazy(()=>tt(()=>import("./index-ncCWvrSw.js"),__vite__mapDeps([58,29,30,31,32,57,43,14]))),p1=N.lazy(()=>tt(()=>import("./index-gXFTGNU1.js"),__vite__mapDeps([59,32,30,35,37,33,18,60,12]))),p7=N.lazy(()=>tt(()=>import("./index-BvL6zFx6.js"),__vite__mapDeps([61,32,30,37,33,18,60,62,21]))),m7=N.lazy(()=>tt(()=>import("./index-B_iTRZnE.js"),__vite__mapDeps([63,32,30,37,33,18,60,62,7]))),g7=N.lazy(()=>tt(()=>import("./index-CKhKfy0O.js"),__vite__mapDeps([64,32,30,37,62,33,18,60,2]))),m1=N.lazy(()=>tt(()=>import("./index-BjIEFDyK.js"),__vite__mapDeps([65,66,37,29,30,31,33,18,35,62,11,6,10,22,13,7,5,19,21,2]))),y7=N.lazy(()=>tt(()=>import("./index-DROca__h.js"),__vite__mapDeps([67,32,29,30,31,16]))),v7=N.lazy(()=>tt(()=>import("./index-dXDFAUt1.js"),__vite__mapDeps([68,66,9,6,3])));mD.createRoot(document.getElementById("root")).render(V.jsx(N.StrictMode,{children:V.jsx(nN,{store:xM,children:V.jsx(BH,{children:V.jsx(uW,{children:V.jsx(DV,{children:V.jsxs(WH,{children:[V.jsx(sW,{}),V.jsx(xH,{}),V.jsx(N.Suspense,{fallback:V.jsx(HH,{}),children:V.jsxs(lV,{children:[V.jsx(qe,{path:"/login",element:V.jsx(GH,{})}),V.jsxs(qe,{path:"/",element:V.jsx(et,{children:V.jsx(qH,{})}),children:[V.jsx(qe,{index:!0,element:V.jsx(KH,{})}),V.jsx(qe,{path:"alphabet",element:V.jsx(et,{children:V.jsx(QH,{})})}),V.jsx(qe,{path:"counting",element:V.jsx(et,{children:V.jsx(m7,{})})}),V.jsx(qe,{path:"learn_numbers",element:V.jsx(et,{children:V.jsx(y7,{})})}),V.jsx(qe,{path:"sight_words",element:V.jsx(et,{children:V.jsx(YH,{})})}),V.jsx(qe,{path:"spelling",element:V.jsx(et,{children:V.jsx(XH,{})})}),V.jsx(qe,{path:"comparison",element:V.jsx(et,{children:V.jsx(p7,{})})}),V.jsx(qe,{path:"sudoku",element:V.jsx(et,{children:V.jsx(JH,{})})}),V.jsx(qe,{path:"missing_letters",element:V.jsx(et,{children:V.jsx(p1,{})})}),V.jsx(qe,{path:"sorting_numbers",element:V.jsx(et,{children:V.jsx(g7,{})})}),V.jsx(qe,{path:"missing_numbers",element:V.jsx(et,{children:V.jsx(p1,{})})}),V.jsx(qe,{path:"alphabet_hindi",element:V.jsx(et,{children:V.jsx(ZH,{})})}),V.jsx(qe,{path:"alphabet_telugu",element:V.jsx(et,{children:V.jsx(e7,{})})}),V.jsx(qe,{path:"weeks_english",element:V.jsx(et,{children:V.jsx(t7,{})})}),V.jsx(qe,{path:"months_english",element:V.jsx(et,{children:V.jsx(n7,{})})}),V.jsx(qe,{path:"weeks_telugu",element:V.jsx(et,{children:V.jsx(r7,{})})}),V.jsx(qe,{path:"weeks_hindi",element:V.jsx(et,{children:V.jsx(i7,{})})}),V.jsx(qe,{path:"shapes",element:V.jsx(et,{children:V.jsx(s7,{})})}),V.jsx(qe,{path:"place_values",element:V.jsx(et,{children:V.jsx(h7,{})})}),V.jsx(qe,{path:"numbers_english_spelling",element:V.jsx(et,{children:V.jsx(o7,{})})}),V.jsx(qe,{path:"numbers_hindi",element:V.jsx(et,{children:V.jsx(a7,{})})}),V.jsx(qe,{path:"numbers_telugu",element:V.jsx(et,{children:V.jsx(l7,{})})}),V.jsx(qe,{path:"months_telugu",element:V.jsx(et,{children:V.jsx(u7,{})})}),V.jsx(qe,{path:"months_hindi",element:V.jsx(et,{children:V.jsx(c7,{})})}),V.jsx(qe,{path:"body_parts",element:V.jsx(et,{children:V.jsx(f7,{})})}),V.jsx(qe,{path:"sense_organs",element:V.jsx(et,{children:V.jsx(d7,{})})}),V.jsx(qe,{path:"test/:testId",element:V.jsx(et,{children:V.jsx(m1,{})})}),V.jsx(qe,{path:"master_test",element:V.jsx(et,{children:V.jsx(m1,{})})}),V.jsx(qe,{path:"test_history",element:V.jsx(et,{children:V.jsx(v7,{})})})]})]})})]})})})})})}));export{H7 as $,FR as A,B5 as B,H5 as C,X5 as D,Z5 as E,QE as F,b7 as G,t$ as H,U5 as I,V7 as J,Rs as K,r$ as L,a$ as M,xs as N,E7 as O,VH as P,N7 as Q,iq as R,lk as S,p$ as T,uk as U,v$ as V,X7 as W,p_ as X,h_ as Y,ck as Z,rq as _,K5 as a,FH as a0,sq as a1,oq as a2,q7 as a3,S7 as a4,B7 as a5,J7 as a6,eq as a7,Z7 as a8,tq as a9,lq as aA,pq as aB,K7 as aC,NH as aD,xM as aE,XR as aF,U7 as aG,L7 as aH,z7 as aI,ct as aJ,O7 as aK,F7 as aL,j7 as aM,$7 as aN,T7 as aa,m_ as ab,Ve as ac,W7 as ad,jH as ae,tr as af,fq as ag,dq as ah,VO as ai,$v as aj,yl as ak,c_ as al,wA as am,Us as an,rt as ao,kT as ap,ht as aq,C7 as ar,tn as as,nq as at,w7 as au,uq as av,cq as aw,hq as ax,SH as ay,aq as az,Q5 as b,Vt as c,s$ as d,u$ as e,f$ as f,mf as g,w$ as h,R7 as i,ie as j,pv as k,ui as l,qd as m,ti as n,V as o,x7 as p,lr as q,YR as r,G7 as s,Q7 as t,$5 as u,Y7 as v,fc as w,I7 as x,N as y,D7 as z};
