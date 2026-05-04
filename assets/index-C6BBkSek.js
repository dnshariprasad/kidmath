const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Dfd_ia4-.js","assets/gameData-BVeNWOk-.js","assets/arrow-up-down-Cgp5Q29m.js","assets/trending-up-CksS9YlV.js","assets/map-pin-BxSyGXFm.js","assets/book-open-DZwDn8Hr.js","assets/zap-DC0lkfO1.js","assets/calculator-5JmEZPPB.js","assets/calendar-days-CBW4h8FP.js","assets/calendar-D_PXZMWM.js","assets/circle-check-DrRZFkKn.js","assets/circle-question-mark-DphEFziJ.js","assets/spell-check-s-0lTbOc.js","assets/eye-BUKC7R9i.js","assets/grid-3x3-DC3zQf2m.js","assets/hash-BkiftMwg.js","assets/heart-pulse-8NdcaG5G.js","assets/info-BdRtwLd7.js","assets/languages-B2l58rdZ.js","assets/user-plus-DUoxZSbs.js","assets/scale-o9rwRpo7.js","assets/search-D5YkJGzT.js","assets/shapes-4fbucOa-.js","assets/star-BTkdRGG2.js","assets/timer-DHL-USXm.js","assets/trash-2-kDINk3n2.js","assets/wand-sparkles-hj3x1Slk.js","assets/index-HG6gkJ_F.js","assets/testService-BIKzA5g1.js","assets/index-lWtpt7I_.js","assets/index-nQR5GfkN.js","assets/SpeakIcon-B6whbVHe.js","assets/index-DW3S6kjG.js","assets/PreviousIcon-DfacNgST.js","assets/styles-DD24Syx1.js","assets/ChallengeHeader-6svzIyZI.js","assets/DifficultyPicker-A9_M6bsr.js","assets/index-BS7r9f_Q.js","assets/wordUtils-DPgh885X.js","assets/learnStyles-62br4M05.js","assets/index-Dep-JkuO.js","assets/confetti.module-ONDKWxYZ.js","assets/index-D4e8cizR.js","assets/index-CHhQVzEd.js","assets/index-D2GA_ZHd.js","assets/index-Dh9oJK1B.js","assets/weeksData-C7SqtnuX.js","assets/index-CUBW12Y1.js","assets/monthsData-CEA7U3aY.js","assets/index-BTrJXviz.js","assets/index-IfmKg3Vg.js","assets/index-_OnPTunI.js","assets/index-BsuC3-BU.js","assets/numbersData-Dr7ACkQG.js","assets/index-BVqtdfT_.js","assets/index-B9Gi3jjc.js","assets/index-BxCzhY9d.js","assets/index-CfY6o2bd.js","assets/index-Cm1SqbB4.js","assets/index-CqliOpJ4.js","assets/scienceData-DTEOid_Y.js","assets/index-DX4A-8wY.js","assets/index-BfzbrDOU.js","assets/FeedbackDisplay-B5mFdknA.js","assets/index-DMkxg6z8.js","assets/mathUtils-B1Q27TTV.js","assets/index-GB5m5RjJ.js","assets/index-DnbB-Bpw.js","assets/index-Byr80xOG.js","assets/index-CI6vCLHm.js","assets/index-BQRopjPE.js"])))=>i.map(i=>d[i]);
var Zb=Object.defineProperty;var eD=(t,e,n)=>e in t?Zb(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var fE=(t,e,n)=>eD(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const tD="modulepreload",nD=function(t){return"/kiddoo/"+t},dE={},tt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(n.map(h=>{if(h=nD(h),h in dE)return;dE[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const y=document.createElement("link");if(y.rel=p?"stylesheet":tD,p||(y.as="script"),y.crossOrigin="",y.href=h,c&&y.setAttribute("nonce",c),document.head.appendChild(y),p)return new Promise((w,T)=>{y.addEventListener("load",w),y.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};function O1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zm={exports:{}},Ru={},eg={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pE;function rD(){if(pE)return Me;pE=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function w(W){return W===null||typeof W!="object"?null:(W=y&&W[y]||W["@@iterator"],typeof W=="function"?W:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,P={};function R(W,J,Ae){this.props=W,this.context=J,this.refs=P,this.updater=Ae||T}R.prototype.isReactComponent={},R.prototype.setState=function(W,J){if(typeof W!="object"&&typeof W!="function"&&W!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,W,J,"setState")},R.prototype.forceUpdate=function(W){this.updater.enqueueForceUpdate(this,W,"forceUpdate")};function b(){}b.prototype=R.prototype;function O(W,J,Ae){this.props=W,this.context=J,this.refs=P,this.updater=Ae||T}var $=O.prototype=new b;$.constructor=O,x($,R.prototype),$.isPureReactComponent=!0;var U=Array.isArray,H=Object.prototype.hasOwnProperty,X={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function I(W,J,Ae){var Ie,De={},be=null,Ue=null;if(J!=null)for(Ie in J.ref!==void 0&&(Ue=J.ref),J.key!==void 0&&(be=""+J.key),J)H.call(J,Ie)&&!C.hasOwnProperty(Ie)&&(De[Ie]=J[Ie]);var Le=arguments.length-2;if(Le===1)De.children=Ae;else if(1<Le){for(var $e=Array(Le),Nt=0;Nt<Le;Nt++)$e[Nt]=arguments[Nt+2];De.children=$e}if(W&&W.defaultProps)for(Ie in Le=W.defaultProps,Le)De[Ie]===void 0&&(De[Ie]=Le[Ie]);return{$$typeof:t,type:W,key:be,ref:Ue,props:De,_owner:X.current}}function k(W,J){return{$$typeof:t,type:W.type,key:J,ref:W.ref,props:W.props,_owner:W._owner}}function D(W){return typeof W=="object"&&W!==null&&W.$$typeof===t}function M(W){var J={"=":"=0",":":"=2"};return"$"+W.replace(/[=:]/g,function(Ae){return J[Ae]})}var B=/\/+/g;function N(W,J){return typeof W=="object"&&W!==null&&W.key!=null?M(""+W.key):J.toString(36)}function Re(W,J,Ae,Ie,De){var be=typeof W;(be==="undefined"||be==="boolean")&&(W=null);var Ue=!1;if(W===null)Ue=!0;else switch(be){case"string":case"number":Ue=!0;break;case"object":switch(W.$$typeof){case t:case e:Ue=!0}}if(Ue)return Ue=W,De=De(Ue),W=Ie===""?"."+N(Ue,0):Ie,U(De)?(Ae="",W!=null&&(Ae=W.replace(B,"$&/")+"/"),Re(De,J,Ae,"",function(Nt){return Nt})):De!=null&&(D(De)&&(De=k(De,Ae+(!De.key||Ue&&Ue.key===De.key?"":(""+De.key).replace(B,"$&/")+"/")+W)),J.push(De)),1;if(Ue=0,Ie=Ie===""?".":Ie+":",U(W))for(var Le=0;Le<W.length;Le++){be=W[Le];var $e=Ie+N(be,Le);Ue+=Re(be,J,Ae,$e,De)}else if($e=w(W),typeof $e=="function")for(W=$e.call(W),Le=0;!(be=W.next()).done;)be=be.value,$e=Ie+N(be,Le++),Ue+=Re(be,J,Ae,$e,De);else if(be==="object")throw J=String(W),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(W).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Ge(W,J,Ae){if(W==null)return W;var Ie=[],De=0;return Re(W,Ie,"","",function(be){return J.call(Ae,be,De++)}),Ie}function Xe(W){if(W._status===-1){var J=W._result;J=J(),J.then(function(Ae){(W._status===0||W._status===-1)&&(W._status=1,W._result=Ae)},function(Ae){(W._status===0||W._status===-1)&&(W._status=2,W._result=Ae)}),W._status===-1&&(W._status=0,W._result=J)}if(W._status===1)return W._result.default;throw W._result}var Je={current:null},re={transition:null},ce={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:re,ReactCurrentOwner:X};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Me.Children={map:Ge,forEach:function(W,J,Ae){Ge(W,function(){J.apply(this,arguments)},Ae)},count:function(W){var J=0;return Ge(W,function(){J++}),J},toArray:function(W){return Ge(W,function(J){return J})||[]},only:function(W){if(!D(W))throw Error("React.Children.only expected to receive a single React element child.");return W}},Me.Component=R,Me.Fragment=n,Me.Profiler=i,Me.PureComponent=O,Me.StrictMode=r,Me.Suspense=h,Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Me.act=ue,Me.cloneElement=function(W,J,Ae){if(W==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+W+".");var Ie=x({},W.props),De=W.key,be=W.ref,Ue=W._owner;if(J!=null){if(J.ref!==void 0&&(be=J.ref,Ue=X.current),J.key!==void 0&&(De=""+J.key),W.type&&W.type.defaultProps)var Le=W.type.defaultProps;for($e in J)H.call(J,$e)&&!C.hasOwnProperty($e)&&(Ie[$e]=J[$e]===void 0&&Le!==void 0?Le[$e]:J[$e])}var $e=arguments.length-2;if($e===1)Ie.children=Ae;else if(1<$e){Le=Array($e);for(var Nt=0;Nt<$e;Nt++)Le[Nt]=arguments[Nt+2];Ie.children=Le}return{$$typeof:t,type:W.type,key:De,ref:be,props:Ie,_owner:Ue}},Me.createContext=function(W){return W={$$typeof:l,_currentValue:W,_currentValue2:W,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},W.Provider={$$typeof:a,_context:W},W.Consumer=W},Me.createElement=I,Me.createFactory=function(W){var J=I.bind(null,W);return J.type=W,J},Me.createRef=function(){return{current:null}},Me.forwardRef=function(W){return{$$typeof:c,render:W}},Me.isValidElement=D,Me.lazy=function(W){return{$$typeof:m,_payload:{_status:-1,_result:W},_init:Xe}},Me.memo=function(W,J){return{$$typeof:p,type:W,compare:J===void 0?null:J}},Me.startTransition=function(W){var J=re.transition;re.transition={};try{W()}finally{re.transition=J}},Me.unstable_act=ue,Me.useCallback=function(W,J){return Je.current.useCallback(W,J)},Me.useContext=function(W){return Je.current.useContext(W)},Me.useDebugValue=function(){},Me.useDeferredValue=function(W){return Je.current.useDeferredValue(W)},Me.useEffect=function(W,J){return Je.current.useEffect(W,J)},Me.useId=function(){return Je.current.useId()},Me.useImperativeHandle=function(W,J,Ae){return Je.current.useImperativeHandle(W,J,Ae)},Me.useInsertionEffect=function(W,J){return Je.current.useInsertionEffect(W,J)},Me.useLayoutEffect=function(W,J){return Je.current.useLayoutEffect(W,J)},Me.useMemo=function(W,J){return Je.current.useMemo(W,J)},Me.useReducer=function(W,J,Ae){return Je.current.useReducer(W,J,Ae)},Me.useRef=function(W){return Je.current.useRef(W)},Me.useState=function(W){return Je.current.useState(W)},Me.useSyncExternalStore=function(W,J,Ae){return Je.current.useSyncExternalStore(W,J,Ae)},Me.useTransition=function(){return Je.current.useTransition()},Me.version="18.3.1",Me}var mE;function zd(){return mE||(mE=1,eg.exports=rD()),eg.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gE;function iD(){if(gE)return Ru;gE=1;var t=zd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,h,p){var m,y={},w=null,T=null;p!==void 0&&(w=""+p),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(T=h.ref);for(m in h)r.call(h,m)&&!a.hasOwnProperty(m)&&(y[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)y[m]===void 0&&(y[m]=h[m]);return{$$typeof:e,type:c,key:w,ref:T,props:y,_owner:i.current}}return Ru.Fragment=n,Ru.jsx=l,Ru.jsxs=l,Ru}var yE;function sD(){return yE||(yE=1,Zm.exports=iD()),Zm.exports}var F=sD(),V=zd();const er=O1(V);var ef={},tg={exports:{}},In={},ng={exports:{}},rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vE;function oD(){return vE||(vE=1,function(t){function e(re,ce){var ue=re.length;re.push(ce);e:for(;0<ue;){var W=ue-1>>>1,J=re[W];if(0<i(J,ce))re[W]=ce,re[ue]=J,ue=W;else break e}}function n(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var ce=re[0],ue=re.pop();if(ue!==ce){re[0]=ue;e:for(var W=0,J=re.length,Ae=J>>>1;W<Ae;){var Ie=2*(W+1)-1,De=re[Ie],be=Ie+1,Ue=re[be];if(0>i(De,ue))be<J&&0>i(Ue,De)?(re[W]=Ue,re[be]=ue,W=be):(re[W]=De,re[Ie]=ue,W=Ie);else if(be<J&&0>i(Ue,ue))re[W]=Ue,re[be]=ue,W=be;else break e}}return ce}function i(re,ce){var ue=re.sortIndex-ce.sortIndex;return ue!==0?ue:re.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var h=[],p=[],m=1,y=null,w=3,T=!1,x=!1,P=!1,R=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function $(re){for(var ce=n(p);ce!==null;){if(ce.callback===null)r(p);else if(ce.startTime<=re)r(p),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=n(p)}}function U(re){if(P=!1,$(re),!x)if(n(h)!==null)x=!0,Xe(H);else{var ce=n(p);ce!==null&&Je(U,ce.startTime-re)}}function H(re,ce){x=!1,P&&(P=!1,b(I),I=-1),T=!0;var ue=w;try{for($(ce),y=n(h);y!==null&&(!(y.expirationTime>ce)||re&&!M());){var W=y.callback;if(typeof W=="function"){y.callback=null,w=y.priorityLevel;var J=W(y.expirationTime<=ce);ce=t.unstable_now(),typeof J=="function"?y.callback=J:y===n(h)&&r(h),$(ce)}else r(h);y=n(h)}if(y!==null)var Ae=!0;else{var Ie=n(p);Ie!==null&&Je(U,Ie.startTime-ce),Ae=!1}return Ae}finally{y=null,w=ue,T=!1}}var X=!1,C=null,I=-1,k=5,D=-1;function M(){return!(t.unstable_now()-D<k)}function B(){if(C!==null){var re=t.unstable_now();D=re;var ce=!0;try{ce=C(!0,re)}finally{ce?N():(X=!1,C=null)}}else X=!1}var N;if(typeof O=="function")N=function(){O(B)};else if(typeof MessageChannel<"u"){var Re=new MessageChannel,Ge=Re.port2;Re.port1.onmessage=B,N=function(){Ge.postMessage(null)}}else N=function(){R(B,0)};function Xe(re){C=re,X||(X=!0,N())}function Je(re,ce){I=R(function(){re(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(re){re.callback=null},t.unstable_continueExecution=function(){x||T||(x=!0,Xe(H))},t.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<re?Math.floor(1e3/re):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(re){switch(w){case 1:case 2:case 3:var ce=3;break;default:ce=w}var ue=w;w=ce;try{return re()}finally{w=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(re,ce){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ue=w;w=re;try{return ce()}finally{w=ue}},t.unstable_scheduleCallback=function(re,ce,ue){var W=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?W+ue:W):ue=W,re){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ue+J,re={id:m++,callback:ce,priorityLevel:re,startTime:ue,expirationTime:J,sortIndex:-1},ue>W?(re.sortIndex=ue,e(p,re),n(h)===null&&re===n(p)&&(P?(b(I),I=-1):P=!0,Je(U,ue-W))):(re.sortIndex=J,e(h,re),x||T||(x=!0,Xe(H))),re},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(re){var ce=w;return function(){var ue=w;w=ce;try{return re.apply(this,arguments)}finally{w=ue}}}}(rg)),rg}var _E;function aD(){return _E||(_E=1,ng.exports=oD()),ng.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wE;function lD(){if(wE)return In;wE=1;var t=zd(),e=aD();function n(s){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+s,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+s+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function a(s,o){l(s,o),l(s+"Capture",o)}function l(s,o){for(i[s]=o,s=0;s<o.length;s++)r.add(o[s])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},y={};function w(s){return h.call(y,s)?!0:h.call(m,s)?!1:p.test(s)?y[s]=!0:(m[s]=!0,!1)}function T(s,o,u,d){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:u!==null?!u.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function x(s,o,u,d){if(o===null||typeof o>"u"||T(s,o,u,d))return!0;if(d)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function P(s,o,u,d,g,v,S){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=u,this.propertyName=s,this.type=o,this.sanitizeURL=v,this.removeEmptyString=S}var R={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){R[s]=new P(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var o=s[0];R[o]=new P(o,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){R[s]=new P(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){R[s]=new P(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){R[s]=new P(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){R[s]=new P(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){R[s]=new P(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){R[s]=new P(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){R[s]=new P(s,5,!1,s.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function O(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var o=s.replace(b,O);R[o]=new P(o,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var o=s.replace(b,O);R[o]=new P(o,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var o=s.replace(b,O);R[o]=new P(o,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){R[s]=new P(s,1,!1,s.toLowerCase(),null,!1,!1)}),R.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){R[s]=new P(s,1,!1,s.toLowerCase(),null,!0,!0)});function $(s,o,u,d){var g=R.hasOwnProperty(o)?R[o]:null;(g!==null?g.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(x(o,u,g,d)&&(u=null),d||g===null?w(o)&&(u===null?s.removeAttribute(o):s.setAttribute(o,""+u)):g.mustUseProperty?s[g.propertyName]=u===null?g.type===3?!1:"":u:(o=g.attributeName,d=g.attributeNamespace,u===null?s.removeAttribute(o):(g=g.type,u=g===3||g===4&&u===!0?"":""+u,d?s.setAttributeNS(d,o,u):s.setAttribute(o,u))))}var U=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),X=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),M=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),Re=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),re=Symbol.iterator;function ce(s){return s===null||typeof s!="object"?null:(s=re&&s[re]||s["@@iterator"],typeof s=="function"?s:null)}var ue=Object.assign,W;function J(s){if(W===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);W=o&&o[1]||""}return`
`+W+s}var Ae=!1;function Ie(s,o){if(!s||Ae)return"";Ae=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(Y){var d=Y}Reflect.construct(s,[],o)}else{try{o.call()}catch(Y){d=Y}s.call(o.prototype)}else{try{throw Error()}catch(Y){d=Y}s()}}catch(Y){if(Y&&d&&typeof Y.stack=="string"){for(var g=Y.stack.split(`
`),v=d.stack.split(`
`),S=g.length-1,L=v.length-1;1<=S&&0<=L&&g[S]!==v[L];)L--;for(;1<=S&&0<=L;S--,L--)if(g[S]!==v[L]){if(S!==1||L!==1)do if(S--,L--,0>L||g[S]!==v[L]){var j=`
`+g[S].replace(" at new "," at ");return s.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",s.displayName)),j}while(1<=S&&0<=L);break}}}finally{Ae=!1,Error.prepareStackTrace=u}return(s=s?s.displayName||s.name:"")?J(s):""}function De(s){switch(s.tag){case 5:return J(s.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return s=Ie(s.type,!1),s;case 11:return s=Ie(s.type.render,!1),s;case 1:return s=Ie(s.type,!0),s;default:return""}}function be(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case C:return"Fragment";case X:return"Portal";case k:return"Profiler";case I:return"StrictMode";case N:return"Suspense";case Re:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case M:return(s.displayName||"Context")+".Consumer";case D:return(s._context.displayName||"Context")+".Provider";case B:var o=s.render;return s=s.displayName,s||(s=o.displayName||o.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case Ge:return o=s.displayName||null,o!==null?o:be(s.type)||"Memo";case Xe:o=s._payload,s=s._init;try{return be(s(o))}catch{}}return null}function Ue(s){var o=s.type;switch(s.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=o.render,s=s.displayName||s.name||"",o.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(o);case 8:return o===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Le(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function $e(s){var o=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Nt(s){var o=$e(s)?"checked":"value",u=Object.getOwnPropertyDescriptor(s.constructor.prototype,o),d=""+s[o];if(!s.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var g=u.get,v=u.set;return Object.defineProperty(s,o,{configurable:!0,get:function(){return g.call(this)},set:function(S){d=""+S,v.call(this,S)}}),Object.defineProperty(s,o,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(S){d=""+S},stopTracking:function(){s._valueTracker=null,delete s[o]}}}}function ar(s){s._valueTracker||(s._valueTracker=Nt(s))}function _n(s){if(!s)return!1;var o=s._valueTracker;if(!o)return!0;var u=o.getValue(),d="";return s&&(d=$e(s)?s.checked?"true":"false":s.value),s=d,s!==u?(o.setValue(s),!0):!1}function zi(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function ea(s,o){var u=o.checked;return ue({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??s._wrapperState.initialChecked})}function jc(s,o){var u=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;u=Le(o.value!=null?o.value:u),s._wrapperState={initialChecked:d,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ta(s,o){o=o.checked,o!=null&&$(s,"checked",o,!1)}function Xs(s,o){ta(s,o);var u=Le(o.value),d=o.type;if(u!=null)d==="number"?(u===0&&s.value===""||s.value!=u)&&(s.value=""+u):s.value!==""+u&&(s.value=""+u);else if(d==="submit"||d==="reset"){s.removeAttribute("value");return}o.hasOwnProperty("value")?It(s,o.type,u):o.hasOwnProperty("defaultValue")&&It(s,o.type,Le(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(s.defaultChecked=!!o.defaultChecked)}function Ol(s,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+s._wrapperState.initialValue,u||o===s.value||(s.value=o),s.defaultValue=o}u=s.name,u!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,u!==""&&(s.name=u)}function It(s,o,u){(o!=="number"||zi(s.ownerDocument)!==s)&&(u==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+u&&(s.defaultValue=""+u))}var Et=Array.isArray;function lr(s,o,u,d){if(s=s.options,o){o={};for(var g=0;g<u.length;g++)o["$"+u[g]]=!0;for(u=0;u<s.length;u++)g=o.hasOwnProperty("$"+s[u].value),s[u].selected!==g&&(s[u].selected=g),g&&d&&(s[u].defaultSelected=!0)}else{for(u=""+Le(u),o=null,g=0;g<s.length;g++){if(s[g].value===u){s[g].selected=!0,d&&(s[g].defaultSelected=!0);return}o!==null||s[g].disabled||(o=s[g])}o!==null&&(o.selected=!0)}}function Fl(s,o){if(o.dangerouslySetInnerHTML!=null)throw Error(n(91));return ue({},o,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function jl(s,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(n(92));if(Et(u)){if(1<u.length)throw Error(n(93));u=u[0]}o=u}o==null&&(o=""),u=o}s._wrapperState={initialValue:Le(u)}}function Uc(s,o){var u=Le(o.value),d=Le(o.defaultValue);u!=null&&(u=""+u,u!==s.value&&(s.value=u),o.defaultValue==null&&s.defaultValue!==u&&(s.defaultValue=u)),d!=null&&(s.defaultValue=""+d)}function Bi(s){var o=s.textContent;o===s._wrapperState.initialValue&&o!==""&&o!==null&&(s.value=o)}function Ul(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function na(s,o){return s==null||s==="http://www.w3.org/1999/xhtml"?Ul(o):s==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Wi,$c=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,d,g){MSApp.execUnsafeLocalFunction(function(){return s(o,u,d,g)})}:s}(function(s,o){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=o;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Wi.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;o.firstChild;)s.appendChild(o.firstChild)}});function Js(s,o){if(o){var u=s.firstChild;if(u&&u===s.lastChild&&u.nodeType===3){u.nodeValue=o;return}}s.textContent=o}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zc=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(s){zc.forEach(function(o){o=o+s.charAt(0).toUpperCase()+s.substring(1),Hi[o]=Hi[s]})});function qi(s,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||Hi.hasOwnProperty(s)&&Hi[s]?(""+o).trim():o+"px"}function ra(s,o){s=s.style;for(var u in o)if(o.hasOwnProperty(u)){var d=u.indexOf("--")===0,g=qi(u,o[u],d);u==="float"&&(u="cssFloat"),d?s.setProperty(u,g):s[u]=g}}var $l=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ur(s,o){if(o){if($l[s]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(n(137,s));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(n(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(n(61))}if(o.style!=null&&typeof o.style!="object")throw Error(n(62))}}function ia(s,o){if(s.indexOf("-")===-1)return typeof o.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ki=null;function sa(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var li=null,ui=null,vt=null;function zl(s){if(s=mu(s)){if(typeof li!="function")throw Error(n(280));var o=s.stateNode;o&&(o=mh(o),li(s.stateNode,s.type,o))}}function Gi(s){ui?vt?vt.push(s):vt=[s]:ui=s}function Yi(){if(ui){var s=ui,o=vt;if(vt=ui=null,zl(s),o)for(s=0;s<o.length;s++)zl(o[s])}}function Bc(s,o){return s(o)}function Wc(){}var Dr=!1;function Hc(s,o,u){if(Dr)return s(o,u);Dr=!0;try{return Bc(s,o,u)}finally{Dr=!1,(ui!==null||vt!==null)&&(Wc(),Yi())}}function Zs(s,o){var u=s.stateNode;if(u===null)return null;var d=mh(u);if(d===null)return null;u=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(s=s.type,d=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!d;break e;default:s=!1}if(s)return null;if(u&&typeof u!="function")throw Error(n(231,o,typeof u));return u}var Qi=!1;if(c)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){Qi=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{Qi=!1}function qc(s,o,u,d,g,v,S,L,j){var Y=Array.prototype.slice.call(arguments,3);try{o.apply(u,Y)}catch(ne){this.onError(ne)}}var ci=!1,Nr=null,oa=!1,Wn=null,Kc={onError:function(s){ci=!0,Nr=s}};function Gc(s,o,u,d,g,v,S,L,j){ci=!1,Nr=null,qc.apply(Kc,arguments)}function Bl(s,o,u,d,g,v,S,L,j){if(Gc.apply(this,arguments),ci){if(ci){var Y=Nr;ci=!1,Nr=null}else throw Error(n(198));oa||(oa=!0,Wn=Y)}}function cr(s){var o=s,u=s;if(s.alternate)for(;o.return;)o=o.return;else{s=o;do o=s,o.flags&4098&&(u=o.return),s=o.return;while(s)}return o.tag===3?u:null}function Wl(s){if(s.tag===13){var o=s.memoizedState;if(o===null&&(s=s.alternate,s!==null&&(o=s.memoizedState)),o!==null)return o.dehydrated}return null}function Yc(s){if(cr(s)!==s)throw Error(n(188))}function Qc(s){var o=s.alternate;if(!o){if(o=cr(s),o===null)throw Error(n(188));return o!==s?null:s}for(var u=s,d=o;;){var g=u.return;if(g===null)break;var v=g.alternate;if(v===null){if(d=g.return,d!==null){u=d;continue}break}if(g.child===v.child){for(v=g.child;v;){if(v===u)return Yc(g),s;if(v===d)return Yc(g),o;v=v.sibling}throw Error(n(188))}if(u.return!==d.return)u=g,d=v;else{for(var S=!1,L=g.child;L;){if(L===u){S=!0,u=g,d=v;break}if(L===d){S=!0,d=g,u=v;break}L=L.sibling}if(!S){for(L=v.child;L;){if(L===u){S=!0,u=v,d=g;break}if(L===d){S=!0,d=v,u=g;break}L=L.sibling}if(!S)throw Error(n(189))}}if(u.alternate!==d)throw Error(n(190))}if(u.tag!==3)throw Error(n(188));return u.stateNode.current===u?s:o}function Xc(s){return s=Qc(s),s!==null?eo(s):null}function eo(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var o=eo(s);if(o!==null)return o;s=s.sibling}return null}var Hl=e.unstable_scheduleCallback,aa=e.unstable_cancelCallback,to=e.unstable_shouldYield,hi=e.unstable_requestPaint,ot=e.unstable_now,Rp=e.unstable_getCurrentPriorityLevel,la=e.unstable_ImmediatePriority,ql=e.unstable_UserBlockingPriority,no=e.unstable_NormalPriority,Kl=e.unstable_LowPriority,ua=e.unstable_IdlePriority,ro=null,kn=null;function Jc(s){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(ro,s,void 0,(s.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:io,Vr=Math.log,Hn=Math.LN2;function io(s){return s>>>=0,s===0?32:31-(Vr(s)/Hn|0)|0}var Lr=64,Ji=4194304;function Ke(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function fi(s,o){var u=s.pendingLanes;if(u===0)return 0;var d=0,g=s.suspendedLanes,v=s.pingedLanes,S=u&268435455;if(S!==0){var L=S&~g;L!==0?d=Ke(L):(v&=S,v!==0&&(d=Ke(v)))}else S=u&~g,S!==0?d=Ke(S):v!==0&&(d=Ke(v));if(d===0)return 0;if(o!==0&&o!==d&&!(o&g)&&(g=d&-d,v=o&-o,g>=v||g===16&&(v&4194240)!==0))return o;if(d&4&&(d|=u&16),o=s.entangledLanes,o!==0)for(s=s.entanglements,o&=d;0<o;)u=31-Rn(o),g=1<<u,d|=s[u],o&=~g;return d}function so(s,o){switch(s){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oo(s,o){for(var u=s.suspendedLanes,d=s.pingedLanes,g=s.expirationTimes,v=s.pendingLanes;0<v;){var S=31-Rn(v),L=1<<S,j=g[S];j===-1?(!(L&u)||L&d)&&(g[S]=so(L,o)):j<=o&&(s.expiredLanes|=L),v&=~L}}function Gl(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function Yl(){var s=Lr;return Lr<<=1,!(Lr&4194240)&&(Lr=64),s}function Ql(s){for(var o=[],u=0;31>u;u++)o.push(s);return o}function ao(s,o,u){s.pendingLanes|=o,o!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,o=31-Rn(o),s[o]=u}function bp(s,o){var u=s.pendingLanes&~o;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=o,s.mutableReadLanes&=o,s.entangledLanes&=o,o=s.entanglements;var d=s.eventTimes;for(s=s.expirationTimes;0<u;){var g=31-Rn(u),v=1<<g;o[g]=0,d[g]=-1,s[g]=-1,u&=~v}}function Xl(s,o){var u=s.entangledLanes|=o;for(s=s.entanglements;u;){var d=31-Rn(u),g=1<<d;g&o|s[d]&o&&(s[d]|=o),u&=~g}}var ze=0;function Mr(s){return s&=-s,1<s?4<s?s&268435455?16:536870912:4:1}var Jl,ca,Zl,eu,tu,Or=!1,ha=[],Fr=null,jr=null,qt=null,lo=new Map,di=new Map,bn=[],Zc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zi(s,o){switch(s){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":lo.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(o.pointerId)}}function hr(s,o,u,d,g,v){return s===null||s.nativeEvent!==v?(s={blockedOn:o,domEventName:u,eventSystemFlags:d,nativeEvent:v,targetContainers:[g]},o!==null&&(o=mu(o),o!==null&&ca(o)),s):(s.eventSystemFlags|=d,o=s.targetContainers,g!==null&&o.indexOf(g)===-1&&o.push(g),s)}function eh(s,o,u,d,g){switch(o){case"focusin":return Fr=hr(Fr,s,o,u,d,g),!0;case"dragenter":return jr=hr(jr,s,o,u,d,g),!0;case"mouseover":return qt=hr(qt,s,o,u,d,g),!0;case"pointerover":var v=g.pointerId;return lo.set(v,hr(lo.get(v)||null,s,o,u,d,g)),!0;case"gotpointercapture":return v=g.pointerId,di.set(v,hr(di.get(v)||null,s,o,u,d,g)),!0}return!1}function fa(s){var o=fo(s.target);if(o!==null){var u=cr(o);if(u!==null){if(o=u.tag,o===13){if(o=Wl(u),o!==null){s.blockedOn=o,tu(s.priority,function(){Zl(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){s.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}s.blockedOn=null}function nt(s){if(s.blockedOn!==null)return!1;for(var o=s.targetContainers;0<o.length;){var u=da(s.domEventName,s.eventSystemFlags,o[0],s.nativeEvent);if(u===null){u=s.nativeEvent;var d=new u.constructor(u.type,u);Ki=d,u.target.dispatchEvent(d),Ki=null}else return o=mu(u),o!==null&&ca(o),s.blockedOn=u,!1;o.shift()}return!0}function th(s,o,u){nt(s)&&u.delete(o)}function Dp(){Or=!1,Fr!==null&&nt(Fr)&&(Fr=null),jr!==null&&nt(jr)&&(jr=null),qt!==null&&nt(qt)&&(qt=null),lo.forEach(th),di.forEach(th)}function es(s,o){s.blockedOn===o&&(s.blockedOn=null,Or||(Or=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dp)))}function ts(s){function o(g){return es(g,s)}if(0<ha.length){es(ha[0],s);for(var u=1;u<ha.length;u++){var d=ha[u];d.blockedOn===s&&(d.blockedOn=null)}}for(Fr!==null&&es(Fr,s),jr!==null&&es(jr,s),qt!==null&&es(qt,s),lo.forEach(o),di.forEach(o),u=0;u<bn.length;u++)d=bn[u],d.blockedOn===s&&(d.blockedOn=null);for(;0<bn.length&&(u=bn[0],u.blockedOn===null);)fa(u),u.blockedOn===null&&bn.shift()}var pi=U.ReactCurrentBatchConfig,mi=!0;function Ur(s,o,u,d){var g=ze,v=pi.transition;pi.transition=null;try{ze=1,nu(s,o,u,d)}finally{ze=g,pi.transition=v}}function nh(s,o,u,d){var g=ze,v=pi.transition;pi.transition=null;try{ze=4,nu(s,o,u,d)}finally{ze=g,pi.transition=v}}function nu(s,o,u,d){if(mi){var g=da(s,o,u,d);if(g===null)Bp(s,o,d,$r,u),Zi(s,d);else if(eh(g,s,o,u,d))d.stopPropagation();else if(Zi(s,d),o&4&&-1<Zc.indexOf(s)){for(;g!==null;){var v=mu(g);if(v!==null&&Jl(v),v=da(s,o,u,d),v===null&&Bp(s,o,d,$r,u),v===g)break;g=v}g!==null&&d.stopPropagation()}else Bp(s,o,d,null,u)}}var $r=null;function da(s,o,u,d){if($r=null,s=sa(d),s=fo(s),s!==null)if(o=cr(s),o===null)s=null;else if(u=o.tag,u===13){if(s=Wl(o),s!==null)return s;s=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;s=null}else o!==s&&(s=null);return $r=s,null}function pa(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rp()){case la:return 1;case ql:return 4;case no:case Kl:return 16;case ua:return 536870912;default:return 16}default:return 16}}var Dn=null,ma=null,gi=null;function rh(){if(gi)return gi;var s,o=ma,u=o.length,d,g="value"in Dn?Dn.value:Dn.textContent,v=g.length;for(s=0;s<u&&o[s]===g[s];s++);var S=u-s;for(d=1;d<=S&&o[u-d]===g[v-d];d++);return gi=g.slice(s,1<d?1-d:void 0)}function uo(s){var o=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&o===13&&(s=13)):s=o,s===10&&(s=13),32<=s||s===13?s:0}function zr(){return!0}function ru(){return!1}function rn(s){function o(u,d,g,v,S){this._reactName=u,this._targetInst=g,this.type=d,this.nativeEvent=v,this.target=S,this.currentTarget=null;for(var L in s)s.hasOwnProperty(L)&&(u=s[L],this[L]=u?u(v):v[L]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?zr:ru,this.isPropagationStopped=ru,this}return ue(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=zr)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=zr)},persist:function(){},isPersistent:zr}),o}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=rn(Br),ns=ue({},Br,{view:0,detail:0}),ga=rn(ns),ya,va,Nn,ho=ue({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pe,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Nn&&(Nn&&s.type==="mousemove"?(ya=s.screenX-Nn.screenX,va=s.screenY-Nn.screenY):va=ya=0,Nn=s),ya)},movementY:function(s){return"movementY"in s?s.movementY:va}}),iu=rn(ho),ih=ue({},ho,{dataTransfer:0}),sh=rn(ih),_a=ue({},ns,{relatedTarget:0}),Kt=rn(_a),oh=ue({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),ah=rn(oh),rs=ue({},Br,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),f=rn(rs),_=ue({},Br,{data:0}),E=rn(_),A={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Q={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function le(s){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(s):(s=Q[s])?!!o[s]:!1}function Pe(){return le}var Tt=ue({},ns,{key:function(s){if(s.key){var o=A[s.key]||s.key;if(o!=="Unidentified")return o}return s.type==="keypress"?(s=uo(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?K[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pe,charCode:function(s){return s.type==="keypress"?uo(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?uo(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),Ze=rn(Tt),At=ue({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vn=rn(At),yi=ue({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pe}),Wr=rn(yi),Hr=ue({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),wa=rn(Hr),su=ue({},ho,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),GR=rn(su),YR=[9,13,27,32],Np=c&&"CompositionEvent"in window,ou=null;c&&"documentMode"in document&&(ou=document.documentMode);var QR=c&&"TextEvent"in window&&!ou,iw=c&&(!Np||ou&&8<ou&&11>=ou),sw=" ",ow=!1;function aw(s,o){switch(s){case"keyup":return YR.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lw(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Ea=!1;function XR(s,o){switch(s){case"compositionend":return lw(o);case"keypress":return o.which!==32?null:(ow=!0,sw);case"textInput":return s=o.data,s===sw&&ow?null:s;default:return null}}function JR(s,o){if(Ea)return s==="compositionend"||!Np&&aw(s,o)?(s=rh(),gi=ma=Dn=null,Ea=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return iw&&o.locale!=="ko"?null:o.data;default:return null}}var ZR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function uw(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o==="input"?!!ZR[s.type]:o==="textarea"}function cw(s,o,u,d){Gi(d),o=fh(o,"onChange"),0<o.length&&(u=new co("onChange","change",null,u,d),s.push({event:u,listeners:o}))}var au=null,lu=null;function eb(s){Pw(s,0)}function lh(s){var o=Aa(s);if(_n(o))return s}function tb(s,o){if(s==="change")return o}var hw=!1;if(c){var Vp;if(c){var Lp="oninput"in document;if(!Lp){var fw=document.createElement("div");fw.setAttribute("oninput","return;"),Lp=typeof fw.oninput=="function"}Vp=Lp}else Vp=!1;hw=Vp&&(!document.documentMode||9<document.documentMode)}function dw(){au&&(au.detachEvent("onpropertychange",pw),lu=au=null)}function pw(s){if(s.propertyName==="value"&&lh(lu)){var o=[];cw(o,lu,s,sa(s)),Hc(eb,o)}}function nb(s,o,u){s==="focusin"?(dw(),au=o,lu=u,au.attachEvent("onpropertychange",pw)):s==="focusout"&&dw()}function rb(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return lh(lu)}function ib(s,o){if(s==="click")return lh(o)}function sb(s,o){if(s==="input"||s==="change")return lh(o)}function ob(s,o){return s===o&&(s!==0||1/s===1/o)||s!==s&&o!==o}var fr=typeof Object.is=="function"?Object.is:ob;function uu(s,o){if(fr(s,o))return!0;if(typeof s!="object"||s===null||typeof o!="object"||o===null)return!1;var u=Object.keys(s),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var g=u[d];if(!h.call(o,g)||!fr(s[g],o[g]))return!1}return!0}function mw(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function gw(s,o){var u=mw(s);s=0;for(var d;u;){if(u.nodeType===3){if(d=s+u.textContent.length,s<=o&&d>=o)return{node:u,offset:o-s};s=d}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=mw(u)}}function yw(s,o){return s&&o?s===o?!0:s&&s.nodeType===3?!1:o&&o.nodeType===3?yw(s,o.parentNode):"contains"in s?s.contains(o):s.compareDocumentPosition?!!(s.compareDocumentPosition(o)&16):!1:!1}function vw(){for(var s=window,o=zi();o instanceof s.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)s=o.contentWindow;else break;o=zi(s.document)}return o}function Mp(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o&&(o==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||o==="textarea"||s.contentEditable==="true")}function ab(s){var o=vw(),u=s.focusedElem,d=s.selectionRange;if(o!==u&&u&&u.ownerDocument&&yw(u.ownerDocument.documentElement,u)){if(d!==null&&Mp(u)){if(o=d.start,s=d.end,s===void 0&&(s=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(s,u.value.length);else if(s=(o=u.ownerDocument||document)&&o.defaultView||window,s.getSelection){s=s.getSelection();var g=u.textContent.length,v=Math.min(d.start,g);d=d.end===void 0?v:Math.min(d.end,g),!s.extend&&v>d&&(g=d,d=v,v=g),g=gw(u,v);var S=gw(u,d);g&&S&&(s.rangeCount!==1||s.anchorNode!==g.node||s.anchorOffset!==g.offset||s.focusNode!==S.node||s.focusOffset!==S.offset)&&(o=o.createRange(),o.setStart(g.node,g.offset),s.removeAllRanges(),v>d?(s.addRange(o),s.extend(S.node,S.offset)):(o.setEnd(S.node,S.offset),s.addRange(o)))}}for(o=[],s=u;s=s.parentNode;)s.nodeType===1&&o.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)s=o[u],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var lb=c&&"documentMode"in document&&11>=document.documentMode,Ta=null,Op=null,cu=null,Fp=!1;function _w(s,o,u){var d=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Fp||Ta==null||Ta!==zi(d)||(d=Ta,"selectionStart"in d&&Mp(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),cu&&uu(cu,d)||(cu=d,d=fh(Op,"onSelect"),0<d.length&&(o=new co("onSelect","select",null,o,u),s.push({event:o,listeners:d}),o.target=Ta)))}function uh(s,o){var u={};return u[s.toLowerCase()]=o.toLowerCase(),u["Webkit"+s]="webkit"+o,u["Moz"+s]="moz"+o,u}var Sa={animationend:uh("Animation","AnimationEnd"),animationiteration:uh("Animation","AnimationIteration"),animationstart:uh("Animation","AnimationStart"),transitionend:uh("Transition","TransitionEnd")},jp={},ww={};c&&(ww=document.createElement("div").style,"AnimationEvent"in window||(delete Sa.animationend.animation,delete Sa.animationiteration.animation,delete Sa.animationstart.animation),"TransitionEvent"in window||delete Sa.transitionend.transition);function ch(s){if(jp[s])return jp[s];if(!Sa[s])return s;var o=Sa[s],u;for(u in o)if(o.hasOwnProperty(u)&&u in ww)return jp[s]=o[u];return s}var Ew=ch("animationend"),Tw=ch("animationiteration"),Sw=ch("animationstart"),xw=ch("transitionend"),Iw=new Map,Aw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function is(s,o){Iw.set(s,o),a(o,[s])}for(var Up=0;Up<Aw.length;Up++){var $p=Aw[Up],ub=$p.toLowerCase(),cb=$p[0].toUpperCase()+$p.slice(1);is(ub,"on"+cb)}is(Ew,"onAnimationEnd"),is(Tw,"onAnimationIteration"),is(Sw,"onAnimationStart"),is("dblclick","onDoubleClick"),is("focusin","onFocus"),is("focusout","onBlur"),is(xw,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hb=new Set("cancel close invalid load scroll toggle".split(" ").concat(hu));function Cw(s,o,u){var d=s.type||"unknown-event";s.currentTarget=u,Bl(d,o,void 0,s),s.currentTarget=null}function Pw(s,o){o=(o&4)!==0;for(var u=0;u<s.length;u++){var d=s[u],g=d.event;d=d.listeners;e:{var v=void 0;if(o)for(var S=d.length-1;0<=S;S--){var L=d[S],j=L.instance,Y=L.currentTarget;if(L=L.listener,j!==v&&g.isPropagationStopped())break e;Cw(g,L,Y),v=j}else for(S=0;S<d.length;S++){if(L=d[S],j=L.instance,Y=L.currentTarget,L=L.listener,j!==v&&g.isPropagationStopped())break e;Cw(g,L,Y),v=j}}}if(oa)throw s=Wn,oa=!1,Wn=null,s}function at(s,o){var u=o[Yp];u===void 0&&(u=o[Yp]=new Set);var d=s+"__bubble";u.has(d)||(kw(o,s,2,!1),u.add(d))}function zp(s,o,u){var d=0;o&&(d|=4),kw(u,s,d,o)}var hh="_reactListening"+Math.random().toString(36).slice(2);function fu(s){if(!s[hh]){s[hh]=!0,r.forEach(function(u){u!=="selectionchange"&&(hb.has(u)||zp(u,!1,s),zp(u,!0,s))});var o=s.nodeType===9?s:s.ownerDocument;o===null||o[hh]||(o[hh]=!0,zp("selectionchange",!1,o))}}function kw(s,o,u,d){switch(pa(o)){case 1:var g=Ur;break;case 4:g=nh;break;default:g=nu}u=g.bind(null,o,u,s),g=void 0,!Qi||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(g=!0),d?g!==void 0?s.addEventListener(o,u,{capture:!0,passive:g}):s.addEventListener(o,u,!0):g!==void 0?s.addEventListener(o,u,{passive:g}):s.addEventListener(o,u,!1)}function Bp(s,o,u,d,g){var v=d;if(!(o&1)&&!(o&2)&&d!==null)e:for(;;){if(d===null)return;var S=d.tag;if(S===3||S===4){var L=d.stateNode.containerInfo;if(L===g||L.nodeType===8&&L.parentNode===g)break;if(S===4)for(S=d.return;S!==null;){var j=S.tag;if((j===3||j===4)&&(j=S.stateNode.containerInfo,j===g||j.nodeType===8&&j.parentNode===g))return;S=S.return}for(;L!==null;){if(S=fo(L),S===null)return;if(j=S.tag,j===5||j===6){d=v=S;continue e}L=L.parentNode}}d=d.return}Hc(function(){var Y=v,ne=sa(u),ie=[];e:{var te=Iw.get(s);if(te!==void 0){var he=co,me=s;switch(s){case"keypress":if(uo(u)===0)break e;case"keydown":case"keyup":he=Ze;break;case"focusin":me="focus",he=Kt;break;case"focusout":me="blur",he=Kt;break;case"beforeblur":case"afterblur":he=Kt;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=Wr;break;case Ew:case Tw:case Sw:he=ah;break;case xw:he=wa;break;case"scroll":he=ga;break;case"wheel":he=GR;break;case"copy":case"cut":case"paste":he=f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Vn}var ye=(o&4)!==0,St=!ye&&s==="scroll",q=ye?te!==null?te+"Capture":null:te;ye=[];for(var z=Y,G;z!==null;){G=z;var ae=G.stateNode;if(G.tag===5&&ae!==null&&(G=ae,q!==null&&(ae=Zs(z,q),ae!=null&&ye.push(du(z,ae,G)))),St)break;z=z.return}0<ye.length&&(te=new he(te,me,null,u,ne),ie.push({event:te,listeners:ye}))}}if(!(o&7)){e:{if(te=s==="mouseover"||s==="pointerover",he=s==="mouseout"||s==="pointerout",te&&u!==Ki&&(me=u.relatedTarget||u.fromElement)&&(fo(me)||me[vi]))break e;if((he||te)&&(te=ne.window===ne?ne:(te=ne.ownerDocument)?te.defaultView||te.parentWindow:window,he?(me=u.relatedTarget||u.toElement,he=Y,me=me?fo(me):null,me!==null&&(St=cr(me),me!==St||me.tag!==5&&me.tag!==6)&&(me=null)):(he=null,me=Y),he!==me)){if(ye=iu,ae="onMouseLeave",q="onMouseEnter",z="mouse",(s==="pointerout"||s==="pointerover")&&(ye=Vn,ae="onPointerLeave",q="onPointerEnter",z="pointer"),St=he==null?te:Aa(he),G=me==null?te:Aa(me),te=new ye(ae,z+"leave",he,u,ne),te.target=St,te.relatedTarget=G,ae=null,fo(ne)===Y&&(ye=new ye(q,z+"enter",me,u,ne),ye.target=G,ye.relatedTarget=St,ae=ye),St=ae,he&&me)t:{for(ye=he,q=me,z=0,G=ye;G;G=xa(G))z++;for(G=0,ae=q;ae;ae=xa(ae))G++;for(;0<z-G;)ye=xa(ye),z--;for(;0<G-z;)q=xa(q),G--;for(;z--;){if(ye===q||q!==null&&ye===q.alternate)break t;ye=xa(ye),q=xa(q)}ye=null}else ye=null;he!==null&&Rw(ie,te,he,ye,!1),me!==null&&St!==null&&Rw(ie,St,me,ye,!0)}}e:{if(te=Y?Aa(Y):window,he=te.nodeName&&te.nodeName.toLowerCase(),he==="select"||he==="input"&&te.type==="file")var ve=tb;else if(uw(te))if(hw)ve=sb;else{ve=rb;var we=nb}else(he=te.nodeName)&&he.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(ve=ib);if(ve&&(ve=ve(s,Y))){cw(ie,ve,u,ne);break e}we&&we(s,te,Y),s==="focusout"&&(we=te._wrapperState)&&we.controlled&&te.type==="number"&&It(te,"number",te.value)}switch(we=Y?Aa(Y):window,s){case"focusin":(uw(we)||we.contentEditable==="true")&&(Ta=we,Op=Y,cu=null);break;case"focusout":cu=Op=Ta=null;break;case"mousedown":Fp=!0;break;case"contextmenu":case"mouseup":case"dragend":Fp=!1,_w(ie,u,ne);break;case"selectionchange":if(lb)break;case"keydown":case"keyup":_w(ie,u,ne)}var Ee;if(Np)e:{switch(s){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Ea?aw(s,u)&&(xe="onCompositionEnd"):s==="keydown"&&u.keyCode===229&&(xe="onCompositionStart");xe&&(iw&&u.locale!=="ko"&&(Ea||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Ea&&(Ee=rh()):(Dn=ne,ma="value"in Dn?Dn.value:Dn.textContent,Ea=!0)),we=fh(Y,xe),0<we.length&&(xe=new E(xe,s,null,u,ne),ie.push({event:xe,listeners:we}),Ee?xe.data=Ee:(Ee=lw(u),Ee!==null&&(xe.data=Ee)))),(Ee=QR?XR(s,u):JR(s,u))&&(Y=fh(Y,"onBeforeInput"),0<Y.length&&(ne=new E("onBeforeInput","beforeinput",null,u,ne),ie.push({event:ne,listeners:Y}),ne.data=Ee))}Pw(ie,o)})}function du(s,o,u){return{instance:s,listener:o,currentTarget:u}}function fh(s,o){for(var u=o+"Capture",d=[];s!==null;){var g=s,v=g.stateNode;g.tag===5&&v!==null&&(g=v,v=Zs(s,u),v!=null&&d.unshift(du(s,v,g)),v=Zs(s,o),v!=null&&d.push(du(s,v,g))),s=s.return}return d}function xa(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function Rw(s,o,u,d,g){for(var v=o._reactName,S=[];u!==null&&u!==d;){var L=u,j=L.alternate,Y=L.stateNode;if(j!==null&&j===d)break;L.tag===5&&Y!==null&&(L=Y,g?(j=Zs(u,v),j!=null&&S.unshift(du(u,j,L))):g||(j=Zs(u,v),j!=null&&S.push(du(u,j,L)))),u=u.return}S.length!==0&&s.push({event:o,listeners:S})}var fb=/\r\n?/g,db=/\u0000|\uFFFD/g;function bw(s){return(typeof s=="string"?s:""+s).replace(fb,`
`).replace(db,"")}function dh(s,o,u){if(o=bw(o),bw(s)!==o&&u)throw Error(n(425))}function ph(){}var Wp=null,Hp=null;function qp(s,o){return s==="textarea"||s==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Kp=typeof setTimeout=="function"?setTimeout:void 0,pb=typeof clearTimeout=="function"?clearTimeout:void 0,Dw=typeof Promise=="function"?Promise:void 0,mb=typeof queueMicrotask=="function"?queueMicrotask:typeof Dw<"u"?function(s){return Dw.resolve(null).then(s).catch(gb)}:Kp;function gb(s){setTimeout(function(){throw s})}function Gp(s,o){var u=o,d=0;do{var g=u.nextSibling;if(s.removeChild(u),g&&g.nodeType===8)if(u=g.data,u==="/$"){if(d===0){s.removeChild(g),ts(o);return}d--}else u!=="$"&&u!=="$?"&&u!=="$!"||d++;u=g}while(u);ts(o)}function ss(s){for(;s!=null;s=s.nextSibling){var o=s.nodeType;if(o===1||o===3)break;if(o===8){if(o=s.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return s}function Nw(s){s=s.previousSibling;for(var o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return s;o--}else u==="/$"&&o++}s=s.previousSibling}return null}var Ia=Math.random().toString(36).slice(2),qr="__reactFiber$"+Ia,pu="__reactProps$"+Ia,vi="__reactContainer$"+Ia,Yp="__reactEvents$"+Ia,yb="__reactListeners$"+Ia,vb="__reactHandles$"+Ia;function fo(s){var o=s[qr];if(o)return o;for(var u=s.parentNode;u;){if(o=u[vi]||u[qr]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(s=Nw(s);s!==null;){if(u=s[qr])return u;s=Nw(s)}return o}s=u,u=s.parentNode}return null}function mu(s){return s=s[qr]||s[vi],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function Aa(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(n(33))}function mh(s){return s[pu]||null}var Qp=[],Ca=-1;function os(s){return{current:s}}function lt(s){0>Ca||(s.current=Qp[Ca],Qp[Ca]=null,Ca--)}function it(s,o){Ca++,Qp[Ca]=s.current,s.current=o}var as={},sn=os(as),wn=os(!1),po=as;function Pa(s,o){var u=s.type.contextTypes;if(!u)return as;var d=s.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var g={},v;for(v in u)g[v]=o[v];return d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=o,s.__reactInternalMemoizedMaskedChildContext=g),g}function En(s){return s=s.childContextTypes,s!=null}function gh(){lt(wn),lt(sn)}function Vw(s,o,u){if(sn.current!==as)throw Error(n(168));it(sn,o),it(wn,u)}function Lw(s,o,u){var d=s.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return u;d=d.getChildContext();for(var g in d)if(!(g in o))throw Error(n(108,Ue(s)||"Unknown",g));return ue({},u,d)}function yh(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||as,po=sn.current,it(sn,s),it(wn,wn.current),!0}function Mw(s,o,u){var d=s.stateNode;if(!d)throw Error(n(169));u?(s=Lw(s,o,po),d.__reactInternalMemoizedMergedChildContext=s,lt(wn),lt(sn),it(sn,s)):lt(wn),it(wn,u)}var _i=null,vh=!1,Xp=!1;function Ow(s){_i===null?_i=[s]:_i.push(s)}function _b(s){vh=!0,Ow(s)}function ls(){if(!Xp&&_i!==null){Xp=!0;var s=0,o=ze;try{var u=_i;for(ze=1;s<u.length;s++){var d=u[s];do d=d(!0);while(d!==null)}_i=null,vh=!1}catch(g){throw _i!==null&&(_i=_i.slice(s+1)),Hl(la,ls),g}finally{ze=o,Xp=!1}}return null}var ka=[],Ra=0,_h=null,wh=0,qn=[],Kn=0,mo=null,wi=1,Ei="";function go(s,o){ka[Ra++]=wh,ka[Ra++]=_h,_h=s,wh=o}function Fw(s,o,u){qn[Kn++]=wi,qn[Kn++]=Ei,qn[Kn++]=mo,mo=s;var d=wi;s=Ei;var g=32-Rn(d)-1;d&=~(1<<g),u+=1;var v=32-Rn(o)+g;if(30<v){var S=g-g%5;v=(d&(1<<S)-1).toString(32),d>>=S,g-=S,wi=1<<32-Rn(o)+g|u<<g|d,Ei=v+s}else wi=1<<v|u<<g|d,Ei=s}function Jp(s){s.return!==null&&(go(s,1),Fw(s,1,0))}function Zp(s){for(;s===_h;)_h=ka[--Ra],ka[Ra]=null,wh=ka[--Ra],ka[Ra]=null;for(;s===mo;)mo=qn[--Kn],qn[Kn]=null,Ei=qn[--Kn],qn[Kn]=null,wi=qn[--Kn],qn[Kn]=null}var Ln=null,Mn=null,ft=!1,dr=null;function jw(s,o){var u=Xn(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=s,o=s.deletions,o===null?(s.deletions=[u],s.flags|=16):o.push(u)}function Uw(s,o){switch(s.tag){case 5:var u=s.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(s.stateNode=o,Ln=s,Mn=ss(o.firstChild),!0):!1;case 6:return o=s.pendingProps===""||o.nodeType!==3?null:o,o!==null?(s.stateNode=o,Ln=s,Mn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=mo!==null?{id:wi,overflow:Ei}:null,s.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=Xn(18,null,null,0),u.stateNode=o,u.return=s,s.child=u,Ln=s,Mn=null,!0):!1;default:return!1}}function em(s){return(s.mode&1)!==0&&(s.flags&128)===0}function tm(s){if(ft){var o=Mn;if(o){var u=o;if(!Uw(s,o)){if(em(s))throw Error(n(418));o=ss(u.nextSibling);var d=Ln;o&&Uw(s,o)?jw(d,u):(s.flags=s.flags&-4097|2,ft=!1,Ln=s)}}else{if(em(s))throw Error(n(418));s.flags=s.flags&-4097|2,ft=!1,Ln=s}}}function $w(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Ln=s}function Eh(s){if(s!==Ln)return!1;if(!ft)return $w(s),ft=!0,!1;var o;if((o=s.tag!==3)&&!(o=s.tag!==5)&&(o=s.type,o=o!=="head"&&o!=="body"&&!qp(s.type,s.memoizedProps)),o&&(o=Mn)){if(em(s))throw zw(),Error(n(418));for(;o;)jw(s,o),o=ss(o.nextSibling)}if($w(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(n(317));e:{for(s=s.nextSibling,o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="/$"){if(o===0){Mn=ss(s.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}s=s.nextSibling}Mn=null}}else Mn=Ln?ss(s.stateNode.nextSibling):null;return!0}function zw(){for(var s=Mn;s;)s=ss(s.nextSibling)}function ba(){Mn=Ln=null,ft=!1}function nm(s){dr===null?dr=[s]:dr.push(s)}var wb=U.ReactCurrentBatchConfig;function gu(s,o,u){if(s=u.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(n(309));var d=u.stateNode}if(!d)throw Error(n(147,s));var g=d,v=""+s;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===v?o.ref:(o=function(S){var L=g.refs;S===null?delete L[v]:L[v]=S},o._stringRef=v,o)}if(typeof s!="string")throw Error(n(284));if(!u._owner)throw Error(n(290,s))}return s}function Th(s,o){throw s=Object.prototype.toString.call(o),Error(n(31,s==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":s))}function Bw(s){var o=s._init;return o(s._payload)}function Ww(s){function o(q,z){if(s){var G=q.deletions;G===null?(q.deletions=[z],q.flags|=16):G.push(z)}}function u(q,z){if(!s)return null;for(;z!==null;)o(q,z),z=z.sibling;return null}function d(q,z){for(q=new Map;z!==null;)z.key!==null?q.set(z.key,z):q.set(z.index,z),z=z.sibling;return q}function g(q,z){return q=gs(q,z),q.index=0,q.sibling=null,q}function v(q,z,G){return q.index=G,s?(G=q.alternate,G!==null?(G=G.index,G<z?(q.flags|=2,z):G):(q.flags|=2,z)):(q.flags|=1048576,z)}function S(q){return s&&q.alternate===null&&(q.flags|=2),q}function L(q,z,G,ae){return z===null||z.tag!==6?(z=Km(G,q.mode,ae),z.return=q,z):(z=g(z,G),z.return=q,z)}function j(q,z,G,ae){var ve=G.type;return ve===C?ne(q,z,G.props.children,ae,G.key):z!==null&&(z.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Xe&&Bw(ve)===z.type)?(ae=g(z,G.props),ae.ref=gu(q,z,G),ae.return=q,ae):(ae=qh(G.type,G.key,G.props,null,q.mode,ae),ae.ref=gu(q,z,G),ae.return=q,ae)}function Y(q,z,G,ae){return z===null||z.tag!==4||z.stateNode.containerInfo!==G.containerInfo||z.stateNode.implementation!==G.implementation?(z=Gm(G,q.mode,ae),z.return=q,z):(z=g(z,G.children||[]),z.return=q,z)}function ne(q,z,G,ae,ve){return z===null||z.tag!==7?(z=xo(G,q.mode,ae,ve),z.return=q,z):(z=g(z,G),z.return=q,z)}function ie(q,z,G){if(typeof z=="string"&&z!==""||typeof z=="number")return z=Km(""+z,q.mode,G),z.return=q,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case H:return G=qh(z.type,z.key,z.props,null,q.mode,G),G.ref=gu(q,null,z),G.return=q,G;case X:return z=Gm(z,q.mode,G),z.return=q,z;case Xe:var ae=z._init;return ie(q,ae(z._payload),G)}if(Et(z)||ce(z))return z=xo(z,q.mode,G,null),z.return=q,z;Th(q,z)}return null}function te(q,z,G,ae){var ve=z!==null?z.key:null;if(typeof G=="string"&&G!==""||typeof G=="number")return ve!==null?null:L(q,z,""+G,ae);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case H:return G.key===ve?j(q,z,G,ae):null;case X:return G.key===ve?Y(q,z,G,ae):null;case Xe:return ve=G._init,te(q,z,ve(G._payload),ae)}if(Et(G)||ce(G))return ve!==null?null:ne(q,z,G,ae,null);Th(q,G)}return null}function he(q,z,G,ae,ve){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return q=q.get(G)||null,L(z,q,""+ae,ve);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case H:return q=q.get(ae.key===null?G:ae.key)||null,j(z,q,ae,ve);case X:return q=q.get(ae.key===null?G:ae.key)||null,Y(z,q,ae,ve);case Xe:var we=ae._init;return he(q,z,G,we(ae._payload),ve)}if(Et(ae)||ce(ae))return q=q.get(G)||null,ne(z,q,ae,ve,null);Th(z,ae)}return null}function me(q,z,G,ae){for(var ve=null,we=null,Ee=z,xe=z=0,$t=null;Ee!==null&&xe<G.length;xe++){Ee.index>xe?($t=Ee,Ee=null):$t=Ee.sibling;var He=te(q,Ee,G[xe],ae);if(He===null){Ee===null&&(Ee=$t);break}s&&Ee&&He.alternate===null&&o(q,Ee),z=v(He,z,xe),we===null?ve=He:we.sibling=He,we=He,Ee=$t}if(xe===G.length)return u(q,Ee),ft&&go(q,xe),ve;if(Ee===null){for(;xe<G.length;xe++)Ee=ie(q,G[xe],ae),Ee!==null&&(z=v(Ee,z,xe),we===null?ve=Ee:we.sibling=Ee,we=Ee);return ft&&go(q,xe),ve}for(Ee=d(q,Ee);xe<G.length;xe++)$t=he(Ee,q,xe,G[xe],ae),$t!==null&&(s&&$t.alternate!==null&&Ee.delete($t.key===null?xe:$t.key),z=v($t,z,xe),we===null?ve=$t:we.sibling=$t,we=$t);return s&&Ee.forEach(function(ys){return o(q,ys)}),ft&&go(q,xe),ve}function ye(q,z,G,ae){var ve=ce(G);if(typeof ve!="function")throw Error(n(150));if(G=ve.call(G),G==null)throw Error(n(151));for(var we=ve=null,Ee=z,xe=z=0,$t=null,He=G.next();Ee!==null&&!He.done;xe++,He=G.next()){Ee.index>xe?($t=Ee,Ee=null):$t=Ee.sibling;var ys=te(q,Ee,He.value,ae);if(ys===null){Ee===null&&(Ee=$t);break}s&&Ee&&ys.alternate===null&&o(q,Ee),z=v(ys,z,xe),we===null?ve=ys:we.sibling=ys,we=ys,Ee=$t}if(He.done)return u(q,Ee),ft&&go(q,xe),ve;if(Ee===null){for(;!He.done;xe++,He=G.next())He=ie(q,He.value,ae),He!==null&&(z=v(He,z,xe),we===null?ve=He:we.sibling=He,we=He);return ft&&go(q,xe),ve}for(Ee=d(q,Ee);!He.done;xe++,He=G.next())He=he(Ee,q,xe,He.value,ae),He!==null&&(s&&He.alternate!==null&&Ee.delete(He.key===null?xe:He.key),z=v(He,z,xe),we===null?ve=He:we.sibling=He,we=He);return s&&Ee.forEach(function(Jb){return o(q,Jb)}),ft&&go(q,xe),ve}function St(q,z,G,ae){if(typeof G=="object"&&G!==null&&G.type===C&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case H:e:{for(var ve=G.key,we=z;we!==null;){if(we.key===ve){if(ve=G.type,ve===C){if(we.tag===7){u(q,we.sibling),z=g(we,G.props.children),z.return=q,q=z;break e}}else if(we.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Xe&&Bw(ve)===we.type){u(q,we.sibling),z=g(we,G.props),z.ref=gu(q,we,G),z.return=q,q=z;break e}u(q,we);break}else o(q,we);we=we.sibling}G.type===C?(z=xo(G.props.children,q.mode,ae,G.key),z.return=q,q=z):(ae=qh(G.type,G.key,G.props,null,q.mode,ae),ae.ref=gu(q,z,G),ae.return=q,q=ae)}return S(q);case X:e:{for(we=G.key;z!==null;){if(z.key===we)if(z.tag===4&&z.stateNode.containerInfo===G.containerInfo&&z.stateNode.implementation===G.implementation){u(q,z.sibling),z=g(z,G.children||[]),z.return=q,q=z;break e}else{u(q,z);break}else o(q,z);z=z.sibling}z=Gm(G,q.mode,ae),z.return=q,q=z}return S(q);case Xe:return we=G._init,St(q,z,we(G._payload),ae)}if(Et(G))return me(q,z,G,ae);if(ce(G))return ye(q,z,G,ae);Th(q,G)}return typeof G=="string"&&G!==""||typeof G=="number"?(G=""+G,z!==null&&z.tag===6?(u(q,z.sibling),z=g(z,G),z.return=q,q=z):(u(q,z),z=Km(G,q.mode,ae),z.return=q,q=z),S(q)):u(q,z)}return St}var Da=Ww(!0),Hw=Ww(!1),Sh=os(null),xh=null,Na=null,rm=null;function im(){rm=Na=xh=null}function sm(s){var o=Sh.current;lt(Sh),s._currentValue=o}function om(s,o,u){for(;s!==null;){var d=s.alternate;if((s.childLanes&o)!==o?(s.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),s===u)break;s=s.return}}function Va(s,o){xh=s,rm=Na=null,s=s.dependencies,s!==null&&s.firstContext!==null&&(s.lanes&o&&(Tn=!0),s.firstContext=null)}function Gn(s){var o=s._currentValue;if(rm!==s)if(s={context:s,memoizedValue:o,next:null},Na===null){if(xh===null)throw Error(n(308));Na=s,xh.dependencies={lanes:0,firstContext:s}}else Na=Na.next=s;return o}var yo=null;function am(s){yo===null?yo=[s]:yo.push(s)}function qw(s,o,u,d){var g=o.interleaved;return g===null?(u.next=u,am(o)):(u.next=g.next,g.next=u),o.interleaved=u,Ti(s,d)}function Ti(s,o){s.lanes|=o;var u=s.alternate;for(u!==null&&(u.lanes|=o),u=s,s=s.return;s!==null;)s.childLanes|=o,u=s.alternate,u!==null&&(u.childLanes|=o),u=s,s=s.return;return u.tag===3?u.stateNode:null}var us=!1;function lm(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kw(s,o){s=s.updateQueue,o.updateQueue===s&&(o.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function Si(s,o){return{eventTime:s,lane:o,tag:0,payload:null,callback:null,next:null}}function cs(s,o,u){var d=s.updateQueue;if(d===null)return null;if(d=d.shared,We&2){var g=d.pending;return g===null?o.next=o:(o.next=g.next,g.next=o),d.pending=o,Ti(s,u)}return g=d.interleaved,g===null?(o.next=o,am(d)):(o.next=g.next,g.next=o),d.interleaved=o,Ti(s,u)}function Ih(s,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,Xl(s,u)}}function Gw(s,o){var u=s.updateQueue,d=s.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var g=null,v=null;if(u=u.firstBaseUpdate,u!==null){do{var S={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};v===null?g=v=S:v=v.next=S,u=u.next}while(u!==null);v===null?g=v=o:v=v.next=o}else g=v=o;u={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:v,shared:d.shared,effects:d.effects},s.updateQueue=u;return}s=u.lastBaseUpdate,s===null?u.firstBaseUpdate=o:s.next=o,u.lastBaseUpdate=o}function Ah(s,o,u,d){var g=s.updateQueue;us=!1;var v=g.firstBaseUpdate,S=g.lastBaseUpdate,L=g.shared.pending;if(L!==null){g.shared.pending=null;var j=L,Y=j.next;j.next=null,S===null?v=Y:S.next=Y,S=j;var ne=s.alternate;ne!==null&&(ne=ne.updateQueue,L=ne.lastBaseUpdate,L!==S&&(L===null?ne.firstBaseUpdate=Y:L.next=Y,ne.lastBaseUpdate=j))}if(v!==null){var ie=g.baseState;S=0,ne=Y=j=null,L=v;do{var te=L.lane,he=L.eventTime;if((d&te)===te){ne!==null&&(ne=ne.next={eventTime:he,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var me=s,ye=L;switch(te=o,he=u,ye.tag){case 1:if(me=ye.payload,typeof me=="function"){ie=me.call(he,ie,te);break e}ie=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ye.payload,te=typeof me=="function"?me.call(he,ie,te):me,te==null)break e;ie=ue({},ie,te);break e;case 2:us=!0}}L.callback!==null&&L.lane!==0&&(s.flags|=64,te=g.effects,te===null?g.effects=[L]:te.push(L))}else he={eventTime:he,lane:te,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ne===null?(Y=ne=he,j=ie):ne=ne.next=he,S|=te;if(L=L.next,L===null){if(L=g.shared.pending,L===null)break;te=L,L=te.next,te.next=null,g.lastBaseUpdate=te,g.shared.pending=null}}while(!0);if(ne===null&&(j=ie),g.baseState=j,g.firstBaseUpdate=Y,g.lastBaseUpdate=ne,o=g.shared.interleaved,o!==null){g=o;do S|=g.lane,g=g.next;while(g!==o)}else v===null&&(g.shared.lanes=0);wo|=S,s.lanes=S,s.memoizedState=ie}}function Yw(s,o,u){if(s=o.effects,o.effects=null,s!==null)for(o=0;o<s.length;o++){var d=s[o],g=d.callback;if(g!==null){if(d.callback=null,d=u,typeof g!="function")throw Error(n(191,g));g.call(d)}}}var yu={},Kr=os(yu),vu=os(yu),_u=os(yu);function vo(s){if(s===yu)throw Error(n(174));return s}function um(s,o){switch(it(_u,o),it(vu,s),it(Kr,yu),s=o.nodeType,s){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:na(null,"");break;default:s=s===8?o.parentNode:o,o=s.namespaceURI||null,s=s.tagName,o=na(o,s)}lt(Kr),it(Kr,o)}function La(){lt(Kr),lt(vu),lt(_u)}function Qw(s){vo(_u.current);var o=vo(Kr.current),u=na(o,s.type);o!==u&&(it(vu,s),it(Kr,u))}function cm(s){vu.current===s&&(lt(Kr),lt(vu))}var mt=os(0);function Ch(s){for(var o=s;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var hm=[];function fm(){for(var s=0;s<hm.length;s++)hm[s]._workInProgressVersionPrimary=null;hm.length=0}var Ph=U.ReactCurrentDispatcher,dm=U.ReactCurrentBatchConfig,_o=0,gt=null,Vt=null,jt=null,kh=!1,wu=!1,Eu=0,Eb=0;function on(){throw Error(n(321))}function pm(s,o){if(o===null)return!1;for(var u=0;u<o.length&&u<s.length;u++)if(!fr(s[u],o[u]))return!1;return!0}function mm(s,o,u,d,g,v){if(_o=v,gt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Ph.current=s===null||s.memoizedState===null?Ib:Ab,s=u(d,g),wu){v=0;do{if(wu=!1,Eu=0,25<=v)throw Error(n(301));v+=1,jt=Vt=null,o.updateQueue=null,Ph.current=Cb,s=u(d,g)}while(wu)}if(Ph.current=Dh,o=Vt!==null&&Vt.next!==null,_o=0,jt=Vt=gt=null,kh=!1,o)throw Error(n(300));return s}function gm(){var s=Eu!==0;return Eu=0,s}function Gr(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?gt.memoizedState=jt=s:jt=jt.next=s,jt}function Yn(){if(Vt===null){var s=gt.alternate;s=s!==null?s.memoizedState:null}else s=Vt.next;var o=jt===null?gt.memoizedState:jt.next;if(o!==null)jt=o,Vt=s;else{if(s===null)throw Error(n(310));Vt=s,s={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},jt===null?gt.memoizedState=jt=s:jt=jt.next=s}return jt}function Tu(s,o){return typeof o=="function"?o(s):o}function ym(s){var o=Yn(),u=o.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=s;var d=Vt,g=d.baseQueue,v=u.pending;if(v!==null){if(g!==null){var S=g.next;g.next=v.next,v.next=S}d.baseQueue=g=v,u.pending=null}if(g!==null){v=g.next,d=d.baseState;var L=S=null,j=null,Y=v;do{var ne=Y.lane;if((_o&ne)===ne)j!==null&&(j=j.next={lane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),d=Y.hasEagerState?Y.eagerState:s(d,Y.action);else{var ie={lane:ne,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null};j===null?(L=j=ie,S=d):j=j.next=ie,gt.lanes|=ne,wo|=ne}Y=Y.next}while(Y!==null&&Y!==v);j===null?S=d:j.next=L,fr(d,o.memoizedState)||(Tn=!0),o.memoizedState=d,o.baseState=S,o.baseQueue=j,u.lastRenderedState=d}if(s=u.interleaved,s!==null){g=s;do v=g.lane,gt.lanes|=v,wo|=v,g=g.next;while(g!==s)}else g===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function vm(s){var o=Yn(),u=o.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=s;var d=u.dispatch,g=u.pending,v=o.memoizedState;if(g!==null){u.pending=null;var S=g=g.next;do v=s(v,S.action),S=S.next;while(S!==g);fr(v,o.memoizedState)||(Tn=!0),o.memoizedState=v,o.baseQueue===null&&(o.baseState=v),u.lastRenderedState=v}return[v,d]}function Xw(){}function Jw(s,o){var u=gt,d=Yn(),g=o(),v=!fr(d.memoizedState,g);if(v&&(d.memoizedState=g,Tn=!0),d=d.queue,_m(t0.bind(null,u,d,s),[s]),d.getSnapshot!==o||v||jt!==null&&jt.memoizedState.tag&1){if(u.flags|=2048,Su(9,e0.bind(null,u,d,g,o),void 0,null),Ut===null)throw Error(n(349));_o&30||Zw(u,o,g)}return g}function Zw(s,o,u){s.flags|=16384,s={getSnapshot:o,value:u},o=gt.updateQueue,o===null?(o={lastEffect:null,stores:null},gt.updateQueue=o,o.stores=[s]):(u=o.stores,u===null?o.stores=[s]:u.push(s))}function e0(s,o,u,d){o.value=u,o.getSnapshot=d,n0(o)&&r0(s)}function t0(s,o,u){return u(function(){n0(o)&&r0(s)})}function n0(s){var o=s.getSnapshot;s=s.value;try{var u=o();return!fr(s,u)}catch{return!0}}function r0(s){var o=Ti(s,1);o!==null&&yr(o,s,1,-1)}function i0(s){var o=Gr();return typeof s=="function"&&(s=s()),o.memoizedState=o.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tu,lastRenderedState:s},o.queue=s,s=s.dispatch=xb.bind(null,gt,s),[o.memoizedState,s]}function Su(s,o,u,d){return s={tag:s,create:o,destroy:u,deps:d,next:null},o=gt.updateQueue,o===null?(o={lastEffect:null,stores:null},gt.updateQueue=o,o.lastEffect=s.next=s):(u=o.lastEffect,u===null?o.lastEffect=s.next=s:(d=u.next,u.next=s,s.next=d,o.lastEffect=s)),s}function s0(){return Yn().memoizedState}function Rh(s,o,u,d){var g=Gr();gt.flags|=s,g.memoizedState=Su(1|o,u,void 0,d===void 0?null:d)}function bh(s,o,u,d){var g=Yn();d=d===void 0?null:d;var v=void 0;if(Vt!==null){var S=Vt.memoizedState;if(v=S.destroy,d!==null&&pm(d,S.deps)){g.memoizedState=Su(o,u,v,d);return}}gt.flags|=s,g.memoizedState=Su(1|o,u,v,d)}function o0(s,o){return Rh(8390656,8,s,o)}function _m(s,o){return bh(2048,8,s,o)}function a0(s,o){return bh(4,2,s,o)}function l0(s,o){return bh(4,4,s,o)}function u0(s,o){if(typeof o=="function")return s=s(),o(s),function(){o(null)};if(o!=null)return s=s(),o.current=s,function(){o.current=null}}function c0(s,o,u){return u=u!=null?u.concat([s]):null,bh(4,4,u0.bind(null,o,s),u)}function wm(){}function h0(s,o){var u=Yn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&pm(o,d[1])?d[0]:(u.memoizedState=[s,o],s)}function f0(s,o){var u=Yn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&pm(o,d[1])?d[0]:(s=s(),u.memoizedState=[s,o],s)}function d0(s,o,u){return _o&21?(fr(u,o)||(u=Yl(),gt.lanes|=u,wo|=u,s.baseState=!0),o):(s.baseState&&(s.baseState=!1,Tn=!0),s.memoizedState=u)}function Tb(s,o){var u=ze;ze=u!==0&&4>u?u:4,s(!0);var d=dm.transition;dm.transition={};try{s(!1),o()}finally{ze=u,dm.transition=d}}function p0(){return Yn().memoizedState}function Sb(s,o,u){var d=ps(s);if(u={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null},m0(s))g0(o,u);else if(u=qw(s,o,u,d),u!==null){var g=mn();yr(u,s,d,g),y0(u,o,d)}}function xb(s,o,u){var d=ps(s),g={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null};if(m0(s))g0(o,g);else{var v=s.alternate;if(s.lanes===0&&(v===null||v.lanes===0)&&(v=o.lastRenderedReducer,v!==null))try{var S=o.lastRenderedState,L=v(S,u);if(g.hasEagerState=!0,g.eagerState=L,fr(L,S)){var j=o.interleaved;j===null?(g.next=g,am(o)):(g.next=j.next,j.next=g),o.interleaved=g;return}}catch{}finally{}u=qw(s,o,g,d),u!==null&&(g=mn(),yr(u,s,d,g),y0(u,o,d))}}function m0(s){var o=s.alternate;return s===gt||o!==null&&o===gt}function g0(s,o){wu=kh=!0;var u=s.pending;u===null?o.next=o:(o.next=u.next,u.next=o),s.pending=o}function y0(s,o,u){if(u&4194240){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,Xl(s,u)}}var Dh={readContext:Gn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Ib={readContext:Gn,useCallback:function(s,o){return Gr().memoizedState=[s,o===void 0?null:o],s},useContext:Gn,useEffect:o0,useImperativeHandle:function(s,o,u){return u=u!=null?u.concat([s]):null,Rh(4194308,4,u0.bind(null,o,s),u)},useLayoutEffect:function(s,o){return Rh(4194308,4,s,o)},useInsertionEffect:function(s,o){return Rh(4,2,s,o)},useMemo:function(s,o){var u=Gr();return o=o===void 0?null:o,s=s(),u.memoizedState=[s,o],s},useReducer:function(s,o,u){var d=Gr();return o=u!==void 0?u(o):o,d.memoizedState=d.baseState=o,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:o},d.queue=s,s=s.dispatch=Sb.bind(null,gt,s),[d.memoizedState,s]},useRef:function(s){var o=Gr();return s={current:s},o.memoizedState=s},useState:i0,useDebugValue:wm,useDeferredValue:function(s){return Gr().memoizedState=s},useTransition:function(){var s=i0(!1),o=s[0];return s=Tb.bind(null,s[1]),Gr().memoizedState=s,[o,s]},useMutableSource:function(){},useSyncExternalStore:function(s,o,u){var d=gt,g=Gr();if(ft){if(u===void 0)throw Error(n(407));u=u()}else{if(u=o(),Ut===null)throw Error(n(349));_o&30||Zw(d,o,u)}g.memoizedState=u;var v={value:u,getSnapshot:o};return g.queue=v,o0(t0.bind(null,d,v,s),[s]),d.flags|=2048,Su(9,e0.bind(null,d,v,u,o),void 0,null),u},useId:function(){var s=Gr(),o=Ut.identifierPrefix;if(ft){var u=Ei,d=wi;u=(d&~(1<<32-Rn(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=Eu++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=Eb++,o=":"+o+"r"+u.toString(32)+":";return s.memoizedState=o},unstable_isNewReconciler:!1},Ab={readContext:Gn,useCallback:h0,useContext:Gn,useEffect:_m,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:f0,useReducer:ym,useRef:s0,useState:function(){return ym(Tu)},useDebugValue:wm,useDeferredValue:function(s){var o=Yn();return d0(o,Vt.memoizedState,s)},useTransition:function(){var s=ym(Tu)[0],o=Yn().memoizedState;return[s,o]},useMutableSource:Xw,useSyncExternalStore:Jw,useId:p0,unstable_isNewReconciler:!1},Cb={readContext:Gn,useCallback:h0,useContext:Gn,useEffect:_m,useImperativeHandle:c0,useInsertionEffect:a0,useLayoutEffect:l0,useMemo:f0,useReducer:vm,useRef:s0,useState:function(){return vm(Tu)},useDebugValue:wm,useDeferredValue:function(s){var o=Yn();return Vt===null?o.memoizedState=s:d0(o,Vt.memoizedState,s)},useTransition:function(){var s=vm(Tu)[0],o=Yn().memoizedState;return[s,o]},useMutableSource:Xw,useSyncExternalStore:Jw,useId:p0,unstable_isNewReconciler:!1};function pr(s,o){if(s&&s.defaultProps){o=ue({},o),s=s.defaultProps;for(var u in s)o[u]===void 0&&(o[u]=s[u]);return o}return o}function Em(s,o,u,d){o=s.memoizedState,u=u(d,o),u=u==null?o:ue({},o,u),s.memoizedState=u,s.lanes===0&&(s.updateQueue.baseState=u)}var Nh={isMounted:function(s){return(s=s._reactInternals)?cr(s)===s:!1},enqueueSetState:function(s,o,u){s=s._reactInternals;var d=mn(),g=ps(s),v=Si(d,g);v.payload=o,u!=null&&(v.callback=u),o=cs(s,v,g),o!==null&&(yr(o,s,g,d),Ih(o,s,g))},enqueueReplaceState:function(s,o,u){s=s._reactInternals;var d=mn(),g=ps(s),v=Si(d,g);v.tag=1,v.payload=o,u!=null&&(v.callback=u),o=cs(s,v,g),o!==null&&(yr(o,s,g,d),Ih(o,s,g))},enqueueForceUpdate:function(s,o){s=s._reactInternals;var u=mn(),d=ps(s),g=Si(u,d);g.tag=2,o!=null&&(g.callback=o),o=cs(s,g,d),o!==null&&(yr(o,s,d,u),Ih(o,s,d))}};function v0(s,o,u,d,g,v,S){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(d,v,S):o.prototype&&o.prototype.isPureReactComponent?!uu(u,d)||!uu(g,v):!0}function _0(s,o,u){var d=!1,g=as,v=o.contextType;return typeof v=="object"&&v!==null?v=Gn(v):(g=En(o)?po:sn.current,d=o.contextTypes,v=(d=d!=null)?Pa(s,g):as),o=new o(u,v),s.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Nh,s.stateNode=o,o._reactInternals=s,d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=g,s.__reactInternalMemoizedMaskedChildContext=v),o}function w0(s,o,u,d){s=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==s&&Nh.enqueueReplaceState(o,o.state,null)}function Tm(s,o,u,d){var g=s.stateNode;g.props=u,g.state=s.memoizedState,g.refs={},lm(s);var v=o.contextType;typeof v=="object"&&v!==null?g.context=Gn(v):(v=En(o)?po:sn.current,g.context=Pa(s,v)),g.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Em(s,o,v,u),g.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(o=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),o!==g.state&&Nh.enqueueReplaceState(g,g.state,null),Ah(s,u,g,d),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308)}function Ma(s,o){try{var u="",d=o;do u+=De(d),d=d.return;while(d);var g=u}catch(v){g=`
Error generating stack: `+v.message+`
`+v.stack}return{value:s,source:o,stack:g,digest:null}}function Sm(s,o,u){return{value:s,source:null,stack:u??null,digest:o??null}}function xm(s,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var Pb=typeof WeakMap=="function"?WeakMap:Map;function E0(s,o,u){u=Si(-1,u),u.tag=3,u.payload={element:null};var d=o.value;return u.callback=function(){Uh||(Uh=!0,jm=d),xm(s,o)},u}function T0(s,o,u){u=Si(-1,u),u.tag=3;var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var g=o.value;u.payload=function(){return d(g)},u.callback=function(){xm(s,o)}}var v=s.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(u.callback=function(){xm(s,o),typeof d!="function"&&(fs===null?fs=new Set([this]):fs.add(this));var S=o.stack;this.componentDidCatch(o.value,{componentStack:S!==null?S:""})}),u}function S0(s,o,u){var d=s.pingCache;if(d===null){d=s.pingCache=new Pb;var g=new Set;d.set(o,g)}else g=d.get(o),g===void 0&&(g=new Set,d.set(o,g));g.has(u)||(g.add(u),s=zb.bind(null,s,o,u),o.then(s,s))}function x0(s){do{var o;if((o=s.tag===13)&&(o=s.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return s;s=s.return}while(s!==null);return null}function I0(s,o,u,d,g){return s.mode&1?(s.flags|=65536,s.lanes=g,s):(s===o?s.flags|=65536:(s.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=Si(-1,1),o.tag=2,cs(u,o,1))),u.lanes|=1),s)}var kb=U.ReactCurrentOwner,Tn=!1;function pn(s,o,u,d){o.child=s===null?Hw(o,null,u,d):Da(o,s.child,u,d)}function A0(s,o,u,d,g){u=u.render;var v=o.ref;return Va(o,g),d=mm(s,o,u,d,v,g),u=gm(),s!==null&&!Tn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~g,xi(s,o,g)):(ft&&u&&Jp(o),o.flags|=1,pn(s,o,d,g),o.child)}function C0(s,o,u,d,g){if(s===null){var v=u.type;return typeof v=="function"&&!qm(v)&&v.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=v,P0(s,o,v,d,g)):(s=qh(u.type,null,d,o,o.mode,g),s.ref=o.ref,s.return=o,o.child=s)}if(v=s.child,!(s.lanes&g)){var S=v.memoizedProps;if(u=u.compare,u=u!==null?u:uu,u(S,d)&&s.ref===o.ref)return xi(s,o,g)}return o.flags|=1,s=gs(v,d),s.ref=o.ref,s.return=o,o.child=s}function P0(s,o,u,d,g){if(s!==null){var v=s.memoizedProps;if(uu(v,d)&&s.ref===o.ref)if(Tn=!1,o.pendingProps=d=v,(s.lanes&g)!==0)s.flags&131072&&(Tn=!0);else return o.lanes=s.lanes,xi(s,o,g)}return Im(s,o,u,d,g)}function k0(s,o,u){var d=o.pendingProps,g=d.children,v=s!==null?s.memoizedState:null;if(d.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(Fa,On),On|=u;else{if(!(u&1073741824))return s=v!==null?v.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:s,cachePool:null,transitions:null},o.updateQueue=null,it(Fa,On),On|=s,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:u,it(Fa,On),On|=d}else v!==null?(d=v.baseLanes|u,o.memoizedState=null):d=u,it(Fa,On),On|=d;return pn(s,o,g,u),o.child}function R0(s,o){var u=o.ref;(s===null&&u!==null||s!==null&&s.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Im(s,o,u,d,g){var v=En(u)?po:sn.current;return v=Pa(o,v),Va(o,g),u=mm(s,o,u,d,v,g),d=gm(),s!==null&&!Tn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~g,xi(s,o,g)):(ft&&d&&Jp(o),o.flags|=1,pn(s,o,u,g),o.child)}function b0(s,o,u,d,g){if(En(u)){var v=!0;yh(o)}else v=!1;if(Va(o,g),o.stateNode===null)Lh(s,o),_0(o,u,d),Tm(o,u,d,g),d=!0;else if(s===null){var S=o.stateNode,L=o.memoizedProps;S.props=L;var j=S.context,Y=u.contextType;typeof Y=="object"&&Y!==null?Y=Gn(Y):(Y=En(u)?po:sn.current,Y=Pa(o,Y));var ne=u.getDerivedStateFromProps,ie=typeof ne=="function"||typeof S.getSnapshotBeforeUpdate=="function";ie||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==d||j!==Y)&&w0(o,S,d,Y),us=!1;var te=o.memoizedState;S.state=te,Ah(o,d,S,g),j=o.memoizedState,L!==d||te!==j||wn.current||us?(typeof ne=="function"&&(Em(o,u,ne,d),j=o.memoizedState),(L=us||v0(o,u,L,d,te,j,Y))?(ie||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(o.flags|=4194308)):(typeof S.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=j),S.props=d,S.state=j,S.context=Y,d=L):(typeof S.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{S=o.stateNode,Kw(s,o),L=o.memoizedProps,Y=o.type===o.elementType?L:pr(o.type,L),S.props=Y,ie=o.pendingProps,te=S.context,j=u.contextType,typeof j=="object"&&j!==null?j=Gn(j):(j=En(u)?po:sn.current,j=Pa(o,j));var he=u.getDerivedStateFromProps;(ne=typeof he=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(L!==ie||te!==j)&&w0(o,S,d,j),us=!1,te=o.memoizedState,S.state=te,Ah(o,d,S,g);var me=o.memoizedState;L!==ie||te!==me||wn.current||us?(typeof he=="function"&&(Em(o,u,he,d),me=o.memoizedState),(Y=us||v0(o,u,Y,d,te,me,j)||!1)?(ne||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(d,me,j),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(d,me,j)),typeof S.componentDidUpdate=="function"&&(o.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof S.componentDidUpdate!="function"||L===s.memoizedProps&&te===s.memoizedState||(o.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===s.memoizedProps&&te===s.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=me),S.props=d,S.state=me,S.context=j,d=Y):(typeof S.componentDidUpdate!="function"||L===s.memoizedProps&&te===s.memoizedState||(o.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||L===s.memoizedProps&&te===s.memoizedState||(o.flags|=1024),d=!1)}return Am(s,o,u,d,v,g)}function Am(s,o,u,d,g,v){R0(s,o);var S=(o.flags&128)!==0;if(!d&&!S)return g&&Mw(o,u,!1),xi(s,o,v);d=o.stateNode,kb.current=o;var L=S&&typeof u.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,s!==null&&S?(o.child=Da(o,s.child,null,v),o.child=Da(o,null,L,v)):pn(s,o,L,v),o.memoizedState=d.state,g&&Mw(o,u,!0),o.child}function D0(s){var o=s.stateNode;o.pendingContext?Vw(s,o.pendingContext,o.pendingContext!==o.context):o.context&&Vw(s,o.context,!1),um(s,o.containerInfo)}function N0(s,o,u,d,g){return ba(),nm(g),o.flags|=256,pn(s,o,u,d),o.child}var Cm={dehydrated:null,treeContext:null,retryLane:0};function Pm(s){return{baseLanes:s,cachePool:null,transitions:null}}function V0(s,o,u){var d=o.pendingProps,g=mt.current,v=!1,S=(o.flags&128)!==0,L;if((L=S)||(L=s!==null&&s.memoizedState===null?!1:(g&2)!==0),L?(v=!0,o.flags&=-129):(s===null||s.memoizedState!==null)&&(g|=1),it(mt,g&1),s===null)return tm(o),s=o.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?(o.mode&1?s.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(S=d.children,s=d.fallback,v?(d=o.mode,v=o.child,S={mode:"hidden",children:S},!(d&1)&&v!==null?(v.childLanes=0,v.pendingProps=S):v=Kh(S,d,0,null),s=xo(s,d,u,null),v.return=o,s.return=o,v.sibling=s,o.child=v,o.child.memoizedState=Pm(u),o.memoizedState=Cm,s):km(o,S));if(g=s.memoizedState,g!==null&&(L=g.dehydrated,L!==null))return Rb(s,o,S,d,L,g,u);if(v){v=d.fallback,S=o.mode,g=s.child,L=g.sibling;var j={mode:"hidden",children:d.children};return!(S&1)&&o.child!==g?(d=o.child,d.childLanes=0,d.pendingProps=j,o.deletions=null):(d=gs(g,j),d.subtreeFlags=g.subtreeFlags&14680064),L!==null?v=gs(L,v):(v=xo(v,S,u,null),v.flags|=2),v.return=o,d.return=o,d.sibling=v,o.child=d,d=v,v=o.child,S=s.child.memoizedState,S=S===null?Pm(u):{baseLanes:S.baseLanes|u,cachePool:null,transitions:S.transitions},v.memoizedState=S,v.childLanes=s.childLanes&~u,o.memoizedState=Cm,d}return v=s.child,s=v.sibling,d=gs(v,{mode:"visible",children:d.children}),!(o.mode&1)&&(d.lanes=u),d.return=o,d.sibling=null,s!==null&&(u=o.deletions,u===null?(o.deletions=[s],o.flags|=16):u.push(s)),o.child=d,o.memoizedState=null,d}function km(s,o){return o=Kh({mode:"visible",children:o},s.mode,0,null),o.return=s,s.child=o}function Vh(s,o,u,d){return d!==null&&nm(d),Da(o,s.child,null,u),s=km(o,o.pendingProps.children),s.flags|=2,o.memoizedState=null,s}function Rb(s,o,u,d,g,v,S){if(u)return o.flags&256?(o.flags&=-257,d=Sm(Error(n(422))),Vh(s,o,S,d)):o.memoizedState!==null?(o.child=s.child,o.flags|=128,null):(v=d.fallback,g=o.mode,d=Kh({mode:"visible",children:d.children},g,0,null),v=xo(v,g,S,null),v.flags|=2,d.return=o,v.return=o,d.sibling=v,o.child=d,o.mode&1&&Da(o,s.child,null,S),o.child.memoizedState=Pm(S),o.memoizedState=Cm,v);if(!(o.mode&1))return Vh(s,o,S,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var L=d.dgst;return d=L,v=Error(n(419)),d=Sm(v,d,void 0),Vh(s,o,S,d)}if(L=(S&s.childLanes)!==0,Tn||L){if(d=Ut,d!==null){switch(S&-S){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=g&(d.suspendedLanes|S)?0:g,g!==0&&g!==v.retryLane&&(v.retryLane=g,Ti(s,g),yr(d,s,g,-1))}return Hm(),d=Sm(Error(n(421))),Vh(s,o,S,d)}return g.data==="$?"?(o.flags|=128,o.child=s.child,o=Bb.bind(null,s),g._reactRetry=o,null):(s=v.treeContext,Mn=ss(g.nextSibling),Ln=o,ft=!0,dr=null,s!==null&&(qn[Kn++]=wi,qn[Kn++]=Ei,qn[Kn++]=mo,wi=s.id,Ei=s.overflow,mo=o),o=km(o,d.children),o.flags|=4096,o)}function L0(s,o,u){s.lanes|=o;var d=s.alternate;d!==null&&(d.lanes|=o),om(s.return,o,u)}function Rm(s,o,u,d,g){var v=s.memoizedState;v===null?s.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:g}:(v.isBackwards=o,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=u,v.tailMode=g)}function M0(s,o,u){var d=o.pendingProps,g=d.revealOrder,v=d.tail;if(pn(s,o,d.children,u),d=mt.current,d&2)d=d&1|2,o.flags|=128;else{if(s!==null&&s.flags&128)e:for(s=o.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&L0(s,u,o);else if(s.tag===19)L0(s,u,o);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===o)break e;for(;s.sibling===null;){if(s.return===null||s.return===o)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}d&=1}if(it(mt,d),!(o.mode&1))o.memoizedState=null;else switch(g){case"forwards":for(u=o.child,g=null;u!==null;)s=u.alternate,s!==null&&Ch(s)===null&&(g=u),u=u.sibling;u=g,u===null?(g=o.child,o.child=null):(g=u.sibling,u.sibling=null),Rm(o,!1,g,u,v);break;case"backwards":for(u=null,g=o.child,o.child=null;g!==null;){if(s=g.alternate,s!==null&&Ch(s)===null){o.child=g;break}s=g.sibling,g.sibling=u,u=g,g=s}Rm(o,!0,u,null,v);break;case"together":Rm(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Lh(s,o){!(o.mode&1)&&s!==null&&(s.alternate=null,o.alternate=null,o.flags|=2)}function xi(s,o,u){if(s!==null&&(o.dependencies=s.dependencies),wo|=o.lanes,!(u&o.childLanes))return null;if(s!==null&&o.child!==s.child)throw Error(n(153));if(o.child!==null){for(s=o.child,u=gs(s,s.pendingProps),o.child=u,u.return=o;s.sibling!==null;)s=s.sibling,u=u.sibling=gs(s,s.pendingProps),u.return=o;u.sibling=null}return o.child}function bb(s,o,u){switch(o.tag){case 3:D0(o),ba();break;case 5:Qw(o);break;case 1:En(o.type)&&yh(o);break;case 4:um(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,g=o.memoizedProps.value;it(Sh,d._currentValue),d._currentValue=g;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(it(mt,mt.current&1),o.flags|=128,null):u&o.child.childLanes?V0(s,o,u):(it(mt,mt.current&1),s=xi(s,o,u),s!==null?s.sibling:null);it(mt,mt.current&1);break;case 19:if(d=(u&o.childLanes)!==0,s.flags&128){if(d)return M0(s,o,u);o.flags|=128}if(g=o.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),it(mt,mt.current),d)break;return null;case 22:case 23:return o.lanes=0,k0(s,o,u)}return xi(s,o,u)}var O0,bm,F0,j0;O0=function(s,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},bm=function(){},F0=function(s,o,u,d){var g=s.memoizedProps;if(g!==d){s=o.stateNode,vo(Kr.current);var v=null;switch(u){case"input":g=ea(s,g),d=ea(s,d),v=[];break;case"select":g=ue({},g,{value:void 0}),d=ue({},d,{value:void 0}),v=[];break;case"textarea":g=Fl(s,g),d=Fl(s,d),v=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(s.onclick=ph)}ur(u,d);var S;u=null;for(Y in g)if(!d.hasOwnProperty(Y)&&g.hasOwnProperty(Y)&&g[Y]!=null)if(Y==="style"){var L=g[Y];for(S in L)L.hasOwnProperty(S)&&(u||(u={}),u[S]="")}else Y!=="dangerouslySetInnerHTML"&&Y!=="children"&&Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&Y!=="autoFocus"&&(i.hasOwnProperty(Y)?v||(v=[]):(v=v||[]).push(Y,null));for(Y in d){var j=d[Y];if(L=g!=null?g[Y]:void 0,d.hasOwnProperty(Y)&&j!==L&&(j!=null||L!=null))if(Y==="style")if(L){for(S in L)!L.hasOwnProperty(S)||j&&j.hasOwnProperty(S)||(u||(u={}),u[S]="");for(S in j)j.hasOwnProperty(S)&&L[S]!==j[S]&&(u||(u={}),u[S]=j[S])}else u||(v||(v=[]),v.push(Y,u)),u=j;else Y==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,L=L?L.__html:void 0,j!=null&&L!==j&&(v=v||[]).push(Y,j)):Y==="children"?typeof j!="string"&&typeof j!="number"||(v=v||[]).push(Y,""+j):Y!=="suppressContentEditableWarning"&&Y!=="suppressHydrationWarning"&&(i.hasOwnProperty(Y)?(j!=null&&Y==="onScroll"&&at("scroll",s),v||L===j||(v=[])):(v=v||[]).push(Y,j))}u&&(v=v||[]).push("style",u);var Y=v;(o.updateQueue=Y)&&(o.flags|=4)}},j0=function(s,o,u,d){u!==d&&(o.flags|=4)};function xu(s,o){if(!ft)switch(s.tailMode){case"hidden":o=s.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s.tail=null:u.sibling=null;break;case"collapsed":u=s.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||s.tail===null?s.tail=null:s.tail.sibling=null:d.sibling=null}}function an(s){var o=s.alternate!==null&&s.alternate.child===s.child,u=0,d=0;if(o)for(var g=s.child;g!==null;)u|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=s,g=g.sibling;else for(g=s.child;g!==null;)u|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=s,g=g.sibling;return s.subtreeFlags|=d,s.childLanes=u,o}function Db(s,o,u){var d=o.pendingProps;switch(Zp(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(o),null;case 1:return En(o.type)&&gh(),an(o),null;case 3:return d=o.stateNode,La(),lt(wn),lt(sn),fm(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(s===null||s.child===null)&&(Eh(o)?o.flags|=4:s===null||s.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,dr!==null&&(zm(dr),dr=null))),bm(s,o),an(o),null;case 5:cm(o);var g=vo(_u.current);if(u=o.type,s!==null&&o.stateNode!=null)F0(s,o,u,d,g),s.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(n(166));return an(o),null}if(s=vo(Kr.current),Eh(o)){d=o.stateNode,u=o.type;var v=o.memoizedProps;switch(d[qr]=o,d[pu]=v,s=(o.mode&1)!==0,u){case"dialog":at("cancel",d),at("close",d);break;case"iframe":case"object":case"embed":at("load",d);break;case"video":case"audio":for(g=0;g<hu.length;g++)at(hu[g],d);break;case"source":at("error",d);break;case"img":case"image":case"link":at("error",d),at("load",d);break;case"details":at("toggle",d);break;case"input":jc(d,v),at("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},at("invalid",d);break;case"textarea":jl(d,v),at("invalid",d)}ur(u,v),g=null;for(var S in v)if(v.hasOwnProperty(S)){var L=v[S];S==="children"?typeof L=="string"?d.textContent!==L&&(v.suppressHydrationWarning!==!0&&dh(d.textContent,L,s),g=["children",L]):typeof L=="number"&&d.textContent!==""+L&&(v.suppressHydrationWarning!==!0&&dh(d.textContent,L,s),g=["children",""+L]):i.hasOwnProperty(S)&&L!=null&&S==="onScroll"&&at("scroll",d)}switch(u){case"input":ar(d),Ol(d,v,!0);break;case"textarea":ar(d),Bi(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=ph)}d=g,o.updateQueue=d,d!==null&&(o.flags|=4)}else{S=g.nodeType===9?g:g.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=Ul(u)),s==="http://www.w3.org/1999/xhtml"?u==="script"?(s=S.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof d.is=="string"?s=S.createElement(u,{is:d.is}):(s=S.createElement(u),u==="select"&&(S=s,d.multiple?S.multiple=!0:d.size&&(S.size=d.size))):s=S.createElementNS(s,u),s[qr]=o,s[pu]=d,O0(s,o,!1,!1),o.stateNode=s;e:{switch(S=ia(u,d),u){case"dialog":at("cancel",s),at("close",s),g=d;break;case"iframe":case"object":case"embed":at("load",s),g=d;break;case"video":case"audio":for(g=0;g<hu.length;g++)at(hu[g],s);g=d;break;case"source":at("error",s),g=d;break;case"img":case"image":case"link":at("error",s),at("load",s),g=d;break;case"details":at("toggle",s),g=d;break;case"input":jc(s,d),g=ea(s,d),at("invalid",s);break;case"option":g=d;break;case"select":s._wrapperState={wasMultiple:!!d.multiple},g=ue({},d,{value:void 0}),at("invalid",s);break;case"textarea":jl(s,d),g=Fl(s,d),at("invalid",s);break;default:g=d}ur(u,g),L=g;for(v in L)if(L.hasOwnProperty(v)){var j=L[v];v==="style"?ra(s,j):v==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&$c(s,j)):v==="children"?typeof j=="string"?(u!=="textarea"||j!=="")&&Js(s,j):typeof j=="number"&&Js(s,""+j):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(i.hasOwnProperty(v)?j!=null&&v==="onScroll"&&at("scroll",s):j!=null&&$(s,v,j,S))}switch(u){case"input":ar(s),Ol(s,d,!1);break;case"textarea":ar(s),Bi(s);break;case"option":d.value!=null&&s.setAttribute("value",""+Le(d.value));break;case"select":s.multiple=!!d.multiple,v=d.value,v!=null?lr(s,!!d.multiple,v,!1):d.defaultValue!=null&&lr(s,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(s.onclick=ph)}switch(u){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return an(o),null;case 6:if(s&&o.stateNode!=null)j0(s,o,s.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(n(166));if(u=vo(_u.current),vo(Kr.current),Eh(o)){if(d=o.stateNode,u=o.memoizedProps,d[qr]=o,(v=d.nodeValue!==u)&&(s=Ln,s!==null))switch(s.tag){case 3:dh(d.nodeValue,u,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&dh(d.nodeValue,u,(s.mode&1)!==0)}v&&(o.flags|=4)}else d=(u.nodeType===9?u:u.ownerDocument).createTextNode(d),d[qr]=o,o.stateNode=d}return an(o),null;case 13:if(lt(mt),d=o.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(ft&&Mn!==null&&o.mode&1&&!(o.flags&128))zw(),ba(),o.flags|=98560,v=!1;else if(v=Eh(o),d!==null&&d.dehydrated!==null){if(s===null){if(!v)throw Error(n(318));if(v=o.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(n(317));v[qr]=o}else ba(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;an(o),v=!1}else dr!==null&&(zm(dr),dr=null),v=!0;if(!v)return o.flags&65536?o:null}return o.flags&128?(o.lanes=u,o):(d=d!==null,d!==(s!==null&&s.memoizedState!==null)&&d&&(o.child.flags|=8192,o.mode&1&&(s===null||mt.current&1?Lt===0&&(Lt=3):Hm())),o.updateQueue!==null&&(o.flags|=4),an(o),null);case 4:return La(),bm(s,o),s===null&&fu(o.stateNode.containerInfo),an(o),null;case 10:return sm(o.type._context),an(o),null;case 17:return En(o.type)&&gh(),an(o),null;case 19:if(lt(mt),v=o.memoizedState,v===null)return an(o),null;if(d=(o.flags&128)!==0,S=v.rendering,S===null)if(d)xu(v,!1);else{if(Lt!==0||s!==null&&s.flags&128)for(s=o.child;s!==null;){if(S=Ch(s),S!==null){for(o.flags|=128,xu(v,!1),d=S.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=u,u=o.child;u!==null;)v=u,s=d,v.flags&=14680066,S=v.alternate,S===null?(v.childLanes=0,v.lanes=s,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=S.childLanes,v.lanes=S.lanes,v.child=S.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=S.memoizedProps,v.memoizedState=S.memoizedState,v.updateQueue=S.updateQueue,v.type=S.type,s=S.dependencies,v.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),u=u.sibling;return it(mt,mt.current&1|2),o.child}s=s.sibling}v.tail!==null&&ot()>ja&&(o.flags|=128,d=!0,xu(v,!1),o.lanes=4194304)}else{if(!d)if(s=Ch(S),s!==null){if(o.flags|=128,d=!0,u=s.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),xu(v,!0),v.tail===null&&v.tailMode==="hidden"&&!S.alternate&&!ft)return an(o),null}else 2*ot()-v.renderingStartTime>ja&&u!==1073741824&&(o.flags|=128,d=!0,xu(v,!1),o.lanes=4194304);v.isBackwards?(S.sibling=o.child,o.child=S):(u=v.last,u!==null?u.sibling=S:o.child=S,v.last=S)}return v.tail!==null?(o=v.tail,v.rendering=o,v.tail=o.sibling,v.renderingStartTime=ot(),o.sibling=null,u=mt.current,it(mt,d?u&1|2:u&1),o):(an(o),null);case 22:case 23:return Wm(),d=o.memoizedState!==null,s!==null&&s.memoizedState!==null!==d&&(o.flags|=8192),d&&o.mode&1?On&1073741824&&(an(o),o.subtreeFlags&6&&(o.flags|=8192)):an(o),null;case 24:return null;case 25:return null}throw Error(n(156,o.tag))}function Nb(s,o){switch(Zp(o),o.tag){case 1:return En(o.type)&&gh(),s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 3:return La(),lt(wn),lt(sn),fm(),s=o.flags,s&65536&&!(s&128)?(o.flags=s&-65537|128,o):null;case 5:return cm(o),null;case 13:if(lt(mt),s=o.memoizedState,s!==null&&s.dehydrated!==null){if(o.alternate===null)throw Error(n(340));ba()}return s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 19:return lt(mt),null;case 4:return La(),null;case 10:return sm(o.type._context),null;case 22:case 23:return Wm(),null;case 24:return null;default:return null}}var Mh=!1,ln=!1,Vb=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Oa(s,o){var u=s.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(d){_t(s,o,d)}else u.current=null}function Dm(s,o,u){try{u()}catch(d){_t(s,o,d)}}var U0=!1;function Lb(s,o){if(Wp=mi,s=vw(),Mp(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{u=(u=s.ownerDocument)&&u.defaultView||window;var d=u.getSelection&&u.getSelection();if(d&&d.rangeCount!==0){u=d.anchorNode;var g=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{u.nodeType,v.nodeType}catch{u=null;break e}var S=0,L=-1,j=-1,Y=0,ne=0,ie=s,te=null;t:for(;;){for(var he;ie!==u||g!==0&&ie.nodeType!==3||(L=S+g),ie!==v||d!==0&&ie.nodeType!==3||(j=S+d),ie.nodeType===3&&(S+=ie.nodeValue.length),(he=ie.firstChild)!==null;)te=ie,ie=he;for(;;){if(ie===s)break t;if(te===u&&++Y===g&&(L=S),te===v&&++ne===d&&(j=S),(he=ie.nextSibling)!==null)break;ie=te,te=ie.parentNode}ie=he}u=L===-1||j===-1?null:{start:L,end:j}}else u=null}u=u||{start:0,end:0}}else u=null;for(Hp={focusedElem:s,selectionRange:u},mi=!1,pe=o;pe!==null;)if(o=pe,s=o.child,(o.subtreeFlags&1028)!==0&&s!==null)s.return=o,pe=s;else for(;pe!==null;){o=pe;try{var me=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ye=me.memoizedProps,St=me.memoizedState,q=o.stateNode,z=q.getSnapshotBeforeUpdate(o.elementType===o.type?ye:pr(o.type,ye),St);q.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var G=o.stateNode.containerInfo;G.nodeType===1?G.textContent="":G.nodeType===9&&G.documentElement&&G.removeChild(G.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ae){_t(o,o.return,ae)}if(s=o.sibling,s!==null){s.return=o.return,pe=s;break}pe=o.return}return me=U0,U0=!1,me}function Iu(s,o,u){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&s)===s){var v=g.destroy;g.destroy=void 0,v!==void 0&&Dm(o,u,v)}g=g.next}while(g!==d)}}function Oh(s,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&s)===s){var d=u.create;u.destroy=d()}u=u.next}while(u!==o)}}function Nm(s){var o=s.ref;if(o!==null){var u=s.stateNode;switch(s.tag){case 5:s=u;break;default:s=u}typeof o=="function"?o(s):o.current=s}}function $0(s){var o=s.alternate;o!==null&&(s.alternate=null,$0(o)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(o=s.stateNode,o!==null&&(delete o[qr],delete o[pu],delete o[Yp],delete o[yb],delete o[vb])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function z0(s){return s.tag===5||s.tag===3||s.tag===4}function B0(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||z0(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Vm(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(s,o):u.insertBefore(s,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(s,u)):(o=u,o.appendChild(s)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=ph));else if(d!==4&&(s=s.child,s!==null))for(Vm(s,o,u),s=s.sibling;s!==null;)Vm(s,o,u),s=s.sibling}function Lm(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.insertBefore(s,o):u.appendChild(s);else if(d!==4&&(s=s.child,s!==null))for(Lm(s,o,u),s=s.sibling;s!==null;)Lm(s,o,u),s=s.sibling}var Gt=null,mr=!1;function hs(s,o,u){for(u=u.child;u!==null;)W0(s,o,u),u=u.sibling}function W0(s,o,u){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(ro,u)}catch{}switch(u.tag){case 5:ln||Oa(u,o);case 6:var d=Gt,g=mr;Gt=null,hs(s,o,u),Gt=d,mr=g,Gt!==null&&(mr?(s=Gt,u=u.stateNode,s.nodeType===8?s.parentNode.removeChild(u):s.removeChild(u)):Gt.removeChild(u.stateNode));break;case 18:Gt!==null&&(mr?(s=Gt,u=u.stateNode,s.nodeType===8?Gp(s.parentNode,u):s.nodeType===1&&Gp(s,u),ts(s)):Gp(Gt,u.stateNode));break;case 4:d=Gt,g=mr,Gt=u.stateNode.containerInfo,mr=!0,hs(s,o,u),Gt=d,mr=g;break;case 0:case 11:case 14:case 15:if(!ln&&(d=u.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var v=g,S=v.destroy;v=v.tag,S!==void 0&&(v&2||v&4)&&Dm(u,o,S),g=g.next}while(g!==d)}hs(s,o,u);break;case 1:if(!ln&&(Oa(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=u.memoizedProps,d.state=u.memoizedState,d.componentWillUnmount()}catch(L){_t(u,o,L)}hs(s,o,u);break;case 21:hs(s,o,u);break;case 22:u.mode&1?(ln=(d=ln)||u.memoizedState!==null,hs(s,o,u),ln=d):hs(s,o,u);break;default:hs(s,o,u)}}function H0(s){var o=s.updateQueue;if(o!==null){s.updateQueue=null;var u=s.stateNode;u===null&&(u=s.stateNode=new Vb),o.forEach(function(d){var g=Wb.bind(null,s,d);u.has(d)||(u.add(d),d.then(g,g))})}}function gr(s,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var g=u[d];try{var v=s,S=o,L=S;e:for(;L!==null;){switch(L.tag){case 5:Gt=L.stateNode,mr=!1;break e;case 3:Gt=L.stateNode.containerInfo,mr=!0;break e;case 4:Gt=L.stateNode.containerInfo,mr=!0;break e}L=L.return}if(Gt===null)throw Error(n(160));W0(v,S,g),Gt=null,mr=!1;var j=g.alternate;j!==null&&(j.return=null),g.return=null}catch(Y){_t(g,o,Y)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)q0(o,s),o=o.sibling}function q0(s,o){var u=s.alternate,d=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(gr(o,s),Yr(s),d&4){try{Iu(3,s,s.return),Oh(3,s)}catch(ye){_t(s,s.return,ye)}try{Iu(5,s,s.return)}catch(ye){_t(s,s.return,ye)}}break;case 1:gr(o,s),Yr(s),d&512&&u!==null&&Oa(u,u.return);break;case 5:if(gr(o,s),Yr(s),d&512&&u!==null&&Oa(u,u.return),s.flags&32){var g=s.stateNode;try{Js(g,"")}catch(ye){_t(s,s.return,ye)}}if(d&4&&(g=s.stateNode,g!=null)){var v=s.memoizedProps,S=u!==null?u.memoizedProps:v,L=s.type,j=s.updateQueue;if(s.updateQueue=null,j!==null)try{L==="input"&&v.type==="radio"&&v.name!=null&&ta(g,v),ia(L,S);var Y=ia(L,v);for(S=0;S<j.length;S+=2){var ne=j[S],ie=j[S+1];ne==="style"?ra(g,ie):ne==="dangerouslySetInnerHTML"?$c(g,ie):ne==="children"?Js(g,ie):$(g,ne,ie,Y)}switch(L){case"input":Xs(g,v);break;case"textarea":Uc(g,v);break;case"select":var te=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!v.multiple;var he=v.value;he!=null?lr(g,!!v.multiple,he,!1):te!==!!v.multiple&&(v.defaultValue!=null?lr(g,!!v.multiple,v.defaultValue,!0):lr(g,!!v.multiple,v.multiple?[]:"",!1))}g[pu]=v}catch(ye){_t(s,s.return,ye)}}break;case 6:if(gr(o,s),Yr(s),d&4){if(s.stateNode===null)throw Error(n(162));g=s.stateNode,v=s.memoizedProps;try{g.nodeValue=v}catch(ye){_t(s,s.return,ye)}}break;case 3:if(gr(o,s),Yr(s),d&4&&u!==null&&u.memoizedState.isDehydrated)try{ts(o.containerInfo)}catch(ye){_t(s,s.return,ye)}break;case 4:gr(o,s),Yr(s);break;case 13:gr(o,s),Yr(s),g=s.child,g.flags&8192&&(v=g.memoizedState!==null,g.stateNode.isHidden=v,!v||g.alternate!==null&&g.alternate.memoizedState!==null||(Fm=ot())),d&4&&H0(s);break;case 22:if(ne=u!==null&&u.memoizedState!==null,s.mode&1?(ln=(Y=ln)||ne,gr(o,s),ln=Y):gr(o,s),Yr(s),d&8192){if(Y=s.memoizedState!==null,(s.stateNode.isHidden=Y)&&!ne&&s.mode&1)for(pe=s,ne=s.child;ne!==null;){for(ie=pe=ne;pe!==null;){switch(te=pe,he=te.child,te.tag){case 0:case 11:case 14:case 15:Iu(4,te,te.return);break;case 1:Oa(te,te.return);var me=te.stateNode;if(typeof me.componentWillUnmount=="function"){d=te,u=te.return;try{o=d,me.props=o.memoizedProps,me.state=o.memoizedState,me.componentWillUnmount()}catch(ye){_t(d,u,ye)}}break;case 5:Oa(te,te.return);break;case 22:if(te.memoizedState!==null){Y0(ie);continue}}he!==null?(he.return=te,pe=he):Y0(ie)}ne=ne.sibling}e:for(ne=null,ie=s;;){if(ie.tag===5){if(ne===null){ne=ie;try{g=ie.stateNode,Y?(v=g.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(L=ie.stateNode,j=ie.memoizedProps.style,S=j!=null&&j.hasOwnProperty("display")?j.display:null,L.style.display=qi("display",S))}catch(ye){_t(s,s.return,ye)}}}else if(ie.tag===6){if(ne===null)try{ie.stateNode.nodeValue=Y?"":ie.memoizedProps}catch(ye){_t(s,s.return,ye)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===s)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===s)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===s)break e;ne===ie&&(ne=null),ie=ie.return}ne===ie&&(ne=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:gr(o,s),Yr(s),d&4&&H0(s);break;case 21:break;default:gr(o,s),Yr(s)}}function Yr(s){var o=s.flags;if(o&2){try{e:{for(var u=s.return;u!==null;){if(z0(u)){var d=u;break e}u=u.return}throw Error(n(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(Js(g,""),d.flags&=-33);var v=B0(s);Lm(s,v,g);break;case 3:case 4:var S=d.stateNode.containerInfo,L=B0(s);Vm(s,L,S);break;default:throw Error(n(161))}}catch(j){_t(s,s.return,j)}s.flags&=-3}o&4096&&(s.flags&=-4097)}function Mb(s,o,u){pe=s,K0(s)}function K0(s,o,u){for(var d=(s.mode&1)!==0;pe!==null;){var g=pe,v=g.child;if(g.tag===22&&d){var S=g.memoizedState!==null||Mh;if(!S){var L=g.alternate,j=L!==null&&L.memoizedState!==null||ln;L=Mh;var Y=ln;if(Mh=S,(ln=j)&&!Y)for(pe=g;pe!==null;)S=pe,j=S.child,S.tag===22&&S.memoizedState!==null?Q0(g):j!==null?(j.return=S,pe=j):Q0(g);for(;v!==null;)pe=v,K0(v),v=v.sibling;pe=g,Mh=L,ln=Y}G0(s)}else g.subtreeFlags&8772&&v!==null?(v.return=g,pe=v):G0(s)}}function G0(s){for(;pe!==null;){var o=pe;if(o.flags&8772){var u=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:ln||Oh(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!ln)if(u===null)d.componentDidMount();else{var g=o.elementType===o.type?u.memoizedProps:pr(o.type,u.memoizedProps);d.componentDidUpdate(g,u.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=o.updateQueue;v!==null&&Yw(o,v,d);break;case 3:var S=o.updateQueue;if(S!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}Yw(o,S,u)}break;case 5:var L=o.stateNode;if(u===null&&o.flags&4){u=L;var j=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&u.focus();break;case"img":j.src&&(u.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var Y=o.alternate;if(Y!==null){var ne=Y.memoizedState;if(ne!==null){var ie=ne.dehydrated;ie!==null&&ts(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ln||o.flags&512&&Nm(o)}catch(te){_t(o,o.return,te)}}if(o===s){pe=null;break}if(u=o.sibling,u!==null){u.return=o.return,pe=u;break}pe=o.return}}function Y0(s){for(;pe!==null;){var o=pe;if(o===s){pe=null;break}var u=o.sibling;if(u!==null){u.return=o.return,pe=u;break}pe=o.return}}function Q0(s){for(;pe!==null;){var o=pe;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{Oh(4,o)}catch(j){_t(o,u,j)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var g=o.return;try{d.componentDidMount()}catch(j){_t(o,g,j)}}var v=o.return;try{Nm(o)}catch(j){_t(o,v,j)}break;case 5:var S=o.return;try{Nm(o)}catch(j){_t(o,S,j)}}}catch(j){_t(o,o.return,j)}if(o===s){pe=null;break}var L=o.sibling;if(L!==null){L.return=o.return,pe=L;break}pe=o.return}}var Ob=Math.ceil,Fh=U.ReactCurrentDispatcher,Mm=U.ReactCurrentOwner,Qn=U.ReactCurrentBatchConfig,We=0,Ut=null,Ct=null,Yt=0,On=0,Fa=os(0),Lt=0,Au=null,wo=0,jh=0,Om=0,Cu=null,Sn=null,Fm=0,ja=1/0,Ii=null,Uh=!1,jm=null,fs=null,$h=!1,ds=null,zh=0,Pu=0,Um=null,Bh=-1,Wh=0;function mn(){return We&6?ot():Bh!==-1?Bh:Bh=ot()}function ps(s){return s.mode&1?We&2&&Yt!==0?Yt&-Yt:wb.transition!==null?(Wh===0&&(Wh=Yl()),Wh):(s=ze,s!==0||(s=window.event,s=s===void 0?16:pa(s.type)),s):1}function yr(s,o,u,d){if(50<Pu)throw Pu=0,Um=null,Error(n(185));ao(s,u,d),(!(We&2)||s!==Ut)&&(s===Ut&&(!(We&2)&&(jh|=u),Lt===4&&ms(s,Yt)),xn(s,d),u===1&&We===0&&!(o.mode&1)&&(ja=ot()+500,vh&&ls()))}function xn(s,o){var u=s.callbackNode;oo(s,o);var d=fi(s,s===Ut?Yt:0);if(d===0)u!==null&&aa(u),s.callbackNode=null,s.callbackPriority=0;else if(o=d&-d,s.callbackPriority!==o){if(u!=null&&aa(u),o===1)s.tag===0?_b(J0.bind(null,s)):Ow(J0.bind(null,s)),mb(function(){!(We&6)&&ls()}),u=null;else{switch(Mr(d)){case 1:u=la;break;case 4:u=ql;break;case 16:u=no;break;case 536870912:u=ua;break;default:u=no}u=oE(u,X0.bind(null,s))}s.callbackPriority=o,s.callbackNode=u}}function X0(s,o){if(Bh=-1,Wh=0,We&6)throw Error(n(327));var u=s.callbackNode;if(Ua()&&s.callbackNode!==u)return null;var d=fi(s,s===Ut?Yt:0);if(d===0)return null;if(d&30||d&s.expiredLanes||o)o=Hh(s,d);else{o=d;var g=We;We|=2;var v=eE();(Ut!==s||Yt!==o)&&(Ii=null,ja=ot()+500,To(s,o));do try{Ub();break}catch(L){Z0(s,L)}while(!0);im(),Fh.current=v,We=g,Ct!==null?o=0:(Ut=null,Yt=0,o=Lt)}if(o!==0){if(o===2&&(g=Gl(s),g!==0&&(d=g,o=$m(s,g))),o===1)throw u=Au,To(s,0),ms(s,d),xn(s,ot()),u;if(o===6)ms(s,d);else{if(g=s.current.alternate,!(d&30)&&!Fb(g)&&(o=Hh(s,d),o===2&&(v=Gl(s),v!==0&&(d=v,o=$m(s,v))),o===1))throw u=Au,To(s,0),ms(s,d),xn(s,ot()),u;switch(s.finishedWork=g,s.finishedLanes=d,o){case 0:case 1:throw Error(n(345));case 2:So(s,Sn,Ii);break;case 3:if(ms(s,d),(d&130023424)===d&&(o=Fm+500-ot(),10<o)){if(fi(s,0)!==0)break;if(g=s.suspendedLanes,(g&d)!==d){mn(),s.pingedLanes|=s.suspendedLanes&g;break}s.timeoutHandle=Kp(So.bind(null,s,Sn,Ii),o);break}So(s,Sn,Ii);break;case 4:if(ms(s,d),(d&4194240)===d)break;for(o=s.eventTimes,g=-1;0<d;){var S=31-Rn(d);v=1<<S,S=o[S],S>g&&(g=S),d&=~v}if(d=g,d=ot()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Ob(d/1960))-d,10<d){s.timeoutHandle=Kp(So.bind(null,s,Sn,Ii),d);break}So(s,Sn,Ii);break;case 5:So(s,Sn,Ii);break;default:throw Error(n(329))}}}return xn(s,ot()),s.callbackNode===u?X0.bind(null,s):null}function $m(s,o){var u=Cu;return s.current.memoizedState.isDehydrated&&(To(s,o).flags|=256),s=Hh(s,o),s!==2&&(o=Sn,Sn=u,o!==null&&zm(o)),s}function zm(s){Sn===null?Sn=s:Sn.push.apply(Sn,s)}function Fb(s){for(var o=s;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var d=0;d<u.length;d++){var g=u[d],v=g.getSnapshot;g=g.value;try{if(!fr(v(),g))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ms(s,o){for(o&=~Om,o&=~jh,s.suspendedLanes|=o,s.pingedLanes&=~o,s=s.expirationTimes;0<o;){var u=31-Rn(o),d=1<<u;s[u]=-1,o&=~d}}function J0(s){if(We&6)throw Error(n(327));Ua();var o=fi(s,0);if(!(o&1))return xn(s,ot()),null;var u=Hh(s,o);if(s.tag!==0&&u===2){var d=Gl(s);d!==0&&(o=d,u=$m(s,d))}if(u===1)throw u=Au,To(s,0),ms(s,o),xn(s,ot()),u;if(u===6)throw Error(n(345));return s.finishedWork=s.current.alternate,s.finishedLanes=o,So(s,Sn,Ii),xn(s,ot()),null}function Bm(s,o){var u=We;We|=1;try{return s(o)}finally{We=u,We===0&&(ja=ot()+500,vh&&ls())}}function Eo(s){ds!==null&&ds.tag===0&&!(We&6)&&Ua();var o=We;We|=1;var u=Qn.transition,d=ze;try{if(Qn.transition=null,ze=1,s)return s()}finally{ze=d,Qn.transition=u,We=o,!(We&6)&&ls()}}function Wm(){On=Fa.current,lt(Fa)}function To(s,o){s.finishedWork=null,s.finishedLanes=0;var u=s.timeoutHandle;if(u!==-1&&(s.timeoutHandle=-1,pb(u)),Ct!==null)for(u=Ct.return;u!==null;){var d=u;switch(Zp(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&gh();break;case 3:La(),lt(wn),lt(sn),fm();break;case 5:cm(d);break;case 4:La();break;case 13:lt(mt);break;case 19:lt(mt);break;case 10:sm(d.type._context);break;case 22:case 23:Wm()}u=u.return}if(Ut=s,Ct=s=gs(s.current,null),Yt=On=o,Lt=0,Au=null,Om=jh=wo=0,Sn=Cu=null,yo!==null){for(o=0;o<yo.length;o++)if(u=yo[o],d=u.interleaved,d!==null){u.interleaved=null;var g=d.next,v=u.pending;if(v!==null){var S=v.next;v.next=g,d.next=S}u.pending=d}yo=null}return s}function Z0(s,o){do{var u=Ct;try{if(im(),Ph.current=Dh,kh){for(var d=gt.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}kh=!1}if(_o=0,jt=Vt=gt=null,wu=!1,Eu=0,Mm.current=null,u===null||u.return===null){Lt=1,Au=o,Ct=null;break}e:{var v=s,S=u.return,L=u,j=o;if(o=Yt,L.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var Y=j,ne=L,ie=ne.tag;if(!(ne.mode&1)&&(ie===0||ie===11||ie===15)){var te=ne.alternate;te?(ne.updateQueue=te.updateQueue,ne.memoizedState=te.memoizedState,ne.lanes=te.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var he=x0(S);if(he!==null){he.flags&=-257,I0(he,S,L,v,o),he.mode&1&&S0(v,Y,o),o=he,j=Y;var me=o.updateQueue;if(me===null){var ye=new Set;ye.add(j),o.updateQueue=ye}else me.add(j);break e}else{if(!(o&1)){S0(v,Y,o),Hm();break e}j=Error(n(426))}}else if(ft&&L.mode&1){var St=x0(S);if(St!==null){!(St.flags&65536)&&(St.flags|=256),I0(St,S,L,v,o),nm(Ma(j,L));break e}}v=j=Ma(j,L),Lt!==4&&(Lt=2),Cu===null?Cu=[v]:Cu.push(v),v=S;do{switch(v.tag){case 3:v.flags|=65536,o&=-o,v.lanes|=o;var q=E0(v,j,o);Gw(v,q);break e;case 1:L=j;var z=v.type,G=v.stateNode;if(!(v.flags&128)&&(typeof z.getDerivedStateFromError=="function"||G!==null&&typeof G.componentDidCatch=="function"&&(fs===null||!fs.has(G)))){v.flags|=65536,o&=-o,v.lanes|=o;var ae=T0(v,L,o);Gw(v,ae);break e}}v=v.return}while(v!==null)}nE(u)}catch(ve){o=ve,Ct===u&&u!==null&&(Ct=u=u.return);continue}break}while(!0)}function eE(){var s=Fh.current;return Fh.current=Dh,s===null?Dh:s}function Hm(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ut===null||!(wo&268435455)&&!(jh&268435455)||ms(Ut,Yt)}function Hh(s,o){var u=We;We|=2;var d=eE();(Ut!==s||Yt!==o)&&(Ii=null,To(s,o));do try{jb();break}catch(g){Z0(s,g)}while(!0);if(im(),We=u,Fh.current=d,Ct!==null)throw Error(n(261));return Ut=null,Yt=0,Lt}function jb(){for(;Ct!==null;)tE(Ct)}function Ub(){for(;Ct!==null&&!to();)tE(Ct)}function tE(s){var o=sE(s.alternate,s,On);s.memoizedProps=s.pendingProps,o===null?nE(s):Ct=o,Mm.current=null}function nE(s){var o=s;do{var u=o.alternate;if(s=o.return,o.flags&32768){if(u=Nb(u,o),u!==null){u.flags&=32767,Ct=u;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{Lt=6,Ct=null;return}}else if(u=Db(u,o,On),u!==null){Ct=u;return}if(o=o.sibling,o!==null){Ct=o;return}Ct=o=s}while(o!==null);Lt===0&&(Lt=5)}function So(s,o,u){var d=ze,g=Qn.transition;try{Qn.transition=null,ze=1,$b(s,o,u,d)}finally{Qn.transition=g,ze=d}return null}function $b(s,o,u,d){do Ua();while(ds!==null);if(We&6)throw Error(n(327));u=s.finishedWork;var g=s.finishedLanes;if(u===null)return null;if(s.finishedWork=null,s.finishedLanes=0,u===s.current)throw Error(n(177));s.callbackNode=null,s.callbackPriority=0;var v=u.lanes|u.childLanes;if(bp(s,v),s===Ut&&(Ct=Ut=null,Yt=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||$h||($h=!0,oE(no,function(){return Ua(),null})),v=(u.flags&15990)!==0,u.subtreeFlags&15990||v){v=Qn.transition,Qn.transition=null;var S=ze;ze=1;var L=We;We|=4,Mm.current=null,Lb(s,u),q0(u,s),ab(Hp),mi=!!Wp,Hp=Wp=null,s.current=u,Mb(u),hi(),We=L,ze=S,Qn.transition=v}else s.current=u;if($h&&($h=!1,ds=s,zh=g),v=s.pendingLanes,v===0&&(fs=null),Jc(u.stateNode),xn(s,ot()),o!==null)for(d=s.onRecoverableError,u=0;u<o.length;u++)g=o[u],d(g.value,{componentStack:g.stack,digest:g.digest});if(Uh)throw Uh=!1,s=jm,jm=null,s;return zh&1&&s.tag!==0&&Ua(),v=s.pendingLanes,v&1?s===Um?Pu++:(Pu=0,Um=s):Pu=0,ls(),null}function Ua(){if(ds!==null){var s=Mr(zh),o=Qn.transition,u=ze;try{if(Qn.transition=null,ze=16>s?16:s,ds===null)var d=!1;else{if(s=ds,ds=null,zh=0,We&6)throw Error(n(331));var g=We;for(We|=4,pe=s.current;pe!==null;){var v=pe,S=v.child;if(pe.flags&16){var L=v.deletions;if(L!==null){for(var j=0;j<L.length;j++){var Y=L[j];for(pe=Y;pe!==null;){var ne=pe;switch(ne.tag){case 0:case 11:case 15:Iu(8,ne,v)}var ie=ne.child;if(ie!==null)ie.return=ne,pe=ie;else for(;pe!==null;){ne=pe;var te=ne.sibling,he=ne.return;if($0(ne),ne===Y){pe=null;break}if(te!==null){te.return=he,pe=te;break}pe=he}}}var me=v.alternate;if(me!==null){var ye=me.child;if(ye!==null){me.child=null;do{var St=ye.sibling;ye.sibling=null,ye=St}while(ye!==null)}}pe=v}}if(v.subtreeFlags&2064&&S!==null)S.return=v,pe=S;else e:for(;pe!==null;){if(v=pe,v.flags&2048)switch(v.tag){case 0:case 11:case 15:Iu(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,pe=q;break e}pe=v.return}}var z=s.current;for(pe=z;pe!==null;){S=pe;var G=S.child;if(S.subtreeFlags&2064&&G!==null)G.return=S,pe=G;else e:for(S=z;pe!==null;){if(L=pe,L.flags&2048)try{switch(L.tag){case 0:case 11:case 15:Oh(9,L)}}catch(ve){_t(L,L.return,ve)}if(L===S){pe=null;break e}var ae=L.sibling;if(ae!==null){ae.return=L.return,pe=ae;break e}pe=L.return}}if(We=g,ls(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(ro,s)}catch{}d=!0}return d}finally{ze=u,Qn.transition=o}}return!1}function rE(s,o,u){o=Ma(u,o),o=E0(s,o,1),s=cs(s,o,1),o=mn(),s!==null&&(ao(s,1,o),xn(s,o))}function _t(s,o,u){if(s.tag===3)rE(s,s,u);else for(;o!==null;){if(o.tag===3){rE(o,s,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(fs===null||!fs.has(d))){s=Ma(u,s),s=T0(o,s,1),o=cs(o,s,1),s=mn(),o!==null&&(ao(o,1,s),xn(o,s));break}}o=o.return}}function zb(s,o,u){var d=s.pingCache;d!==null&&d.delete(o),o=mn(),s.pingedLanes|=s.suspendedLanes&u,Ut===s&&(Yt&u)===u&&(Lt===4||Lt===3&&(Yt&130023424)===Yt&&500>ot()-Fm?To(s,0):Om|=u),xn(s,o)}function iE(s,o){o===0&&(s.mode&1?(o=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):o=1);var u=mn();s=Ti(s,o),s!==null&&(ao(s,o,u),xn(s,u))}function Bb(s){var o=s.memoizedState,u=0;o!==null&&(u=o.retryLane),iE(s,u)}function Wb(s,o){var u=0;switch(s.tag){case 13:var d=s.stateNode,g=s.memoizedState;g!==null&&(u=g.retryLane);break;case 19:d=s.stateNode;break;default:throw Error(n(314))}d!==null&&d.delete(o),iE(s,u)}var sE;sE=function(s,o,u){if(s!==null)if(s.memoizedProps!==o.pendingProps||wn.current)Tn=!0;else{if(!(s.lanes&u)&&!(o.flags&128))return Tn=!1,bb(s,o,u);Tn=!!(s.flags&131072)}else Tn=!1,ft&&o.flags&1048576&&Fw(o,wh,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;Lh(s,o),s=o.pendingProps;var g=Pa(o,sn.current);Va(o,u),g=mm(null,o,d,s,g,u);var v=gm();return o.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,En(d)?(v=!0,yh(o)):v=!1,o.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,lm(o),g.updater=Nh,o.stateNode=g,g._reactInternals=o,Tm(o,d,s,u),o=Am(null,o,d,!0,v,u)):(o.tag=0,ft&&v&&Jp(o),pn(null,o,g,u),o=o.child),o;case 16:d=o.elementType;e:{switch(Lh(s,o),s=o.pendingProps,g=d._init,d=g(d._payload),o.type=d,g=o.tag=qb(d),s=pr(d,s),g){case 0:o=Im(null,o,d,s,u);break e;case 1:o=b0(null,o,d,s,u);break e;case 11:o=A0(null,o,d,s,u);break e;case 14:o=C0(null,o,d,pr(d.type,s),u);break e}throw Error(n(306,d,""))}return o;case 0:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:pr(d,g),Im(s,o,d,g,u);case 1:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:pr(d,g),b0(s,o,d,g,u);case 3:e:{if(D0(o),s===null)throw Error(n(387));d=o.pendingProps,v=o.memoizedState,g=v.element,Kw(s,o),Ah(o,d,null,u);var S=o.memoizedState;if(d=S.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},o.updateQueue.baseState=v,o.memoizedState=v,o.flags&256){g=Ma(Error(n(423)),o),o=N0(s,o,d,u,g);break e}else if(d!==g){g=Ma(Error(n(424)),o),o=N0(s,o,d,u,g);break e}else for(Mn=ss(o.stateNode.containerInfo.firstChild),Ln=o,ft=!0,dr=null,u=Hw(o,null,d,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(ba(),d===g){o=xi(s,o,u);break e}pn(s,o,d,u)}o=o.child}return o;case 5:return Qw(o),s===null&&tm(o),d=o.type,g=o.pendingProps,v=s!==null?s.memoizedProps:null,S=g.children,qp(d,g)?S=null:v!==null&&qp(d,v)&&(o.flags|=32),R0(s,o),pn(s,o,S,u),o.child;case 6:return s===null&&tm(o),null;case 13:return V0(s,o,u);case 4:return um(o,o.stateNode.containerInfo),d=o.pendingProps,s===null?o.child=Da(o,null,d,u):pn(s,o,d,u),o.child;case 11:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:pr(d,g),A0(s,o,d,g,u);case 7:return pn(s,o,o.pendingProps,u),o.child;case 8:return pn(s,o,o.pendingProps.children,u),o.child;case 12:return pn(s,o,o.pendingProps.children,u),o.child;case 10:e:{if(d=o.type._context,g=o.pendingProps,v=o.memoizedProps,S=g.value,it(Sh,d._currentValue),d._currentValue=S,v!==null)if(fr(v.value,S)){if(v.children===g.children&&!wn.current){o=xi(s,o,u);break e}}else for(v=o.child,v!==null&&(v.return=o);v!==null;){var L=v.dependencies;if(L!==null){S=v.child;for(var j=L.firstContext;j!==null;){if(j.context===d){if(v.tag===1){j=Si(-1,u&-u),j.tag=2;var Y=v.updateQueue;if(Y!==null){Y=Y.shared;var ne=Y.pending;ne===null?j.next=j:(j.next=ne.next,ne.next=j),Y.pending=j}}v.lanes|=u,j=v.alternate,j!==null&&(j.lanes|=u),om(v.return,u,o),L.lanes|=u;break}j=j.next}}else if(v.tag===10)S=v.type===o.type?null:v.child;else if(v.tag===18){if(S=v.return,S===null)throw Error(n(341));S.lanes|=u,L=S.alternate,L!==null&&(L.lanes|=u),om(S,u,o),S=v.sibling}else S=v.child;if(S!==null)S.return=v;else for(S=v;S!==null;){if(S===o){S=null;break}if(v=S.sibling,v!==null){v.return=S.return,S=v;break}S=S.return}v=S}pn(s,o,g.children,u),o=o.child}return o;case 9:return g=o.type,d=o.pendingProps.children,Va(o,u),g=Gn(g),d=d(g),o.flags|=1,pn(s,o,d,u),o.child;case 14:return d=o.type,g=pr(d,o.pendingProps),g=pr(d.type,g),C0(s,o,d,g,u);case 15:return P0(s,o,o.type,o.pendingProps,u);case 17:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:pr(d,g),Lh(s,o),o.tag=1,En(d)?(s=!0,yh(o)):s=!1,Va(o,u),_0(o,d,g),Tm(o,d,g,u),Am(null,o,d,!0,s,u);case 19:return M0(s,o,u);case 22:return k0(s,o,u)}throw Error(n(156,o.tag))};function oE(s,o){return Hl(s,o)}function Hb(s,o,u,d){this.tag=s,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(s,o,u,d){return new Hb(s,o,u,d)}function qm(s){return s=s.prototype,!(!s||!s.isReactComponent)}function qb(s){if(typeof s=="function")return qm(s)?1:0;if(s!=null){if(s=s.$$typeof,s===B)return 11;if(s===Ge)return 14}return 2}function gs(s,o){var u=s.alternate;return u===null?(u=Xn(s.tag,o,s.key,s.mode),u.elementType=s.elementType,u.type=s.type,u.stateNode=s.stateNode,u.alternate=s,s.alternate=u):(u.pendingProps=o,u.type=s.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=s.flags&14680064,u.childLanes=s.childLanes,u.lanes=s.lanes,u.child=s.child,u.memoizedProps=s.memoizedProps,u.memoizedState=s.memoizedState,u.updateQueue=s.updateQueue,o=s.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=s.sibling,u.index=s.index,u.ref=s.ref,u}function qh(s,o,u,d,g,v){var S=2;if(d=s,typeof s=="function")qm(s)&&(S=1);else if(typeof s=="string")S=5;else e:switch(s){case C:return xo(u.children,g,v,o);case I:S=8,g|=8;break;case k:return s=Xn(12,u,o,g|2),s.elementType=k,s.lanes=v,s;case N:return s=Xn(13,u,o,g),s.elementType=N,s.lanes=v,s;case Re:return s=Xn(19,u,o,g),s.elementType=Re,s.lanes=v,s;case Je:return Kh(u,g,v,o);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case D:S=10;break e;case M:S=9;break e;case B:S=11;break e;case Ge:S=14;break e;case Xe:S=16,d=null;break e}throw Error(n(130,s==null?s:typeof s,""))}return o=Xn(S,u,o,g),o.elementType=s,o.type=d,o.lanes=v,o}function xo(s,o,u,d){return s=Xn(7,s,d,o),s.lanes=u,s}function Kh(s,o,u,d){return s=Xn(22,s,d,o),s.elementType=Je,s.lanes=u,s.stateNode={isHidden:!1},s}function Km(s,o,u){return s=Xn(6,s,null,o),s.lanes=u,s}function Gm(s,o,u){return o=Xn(4,s.children!==null?s.children:[],s.key,o),o.lanes=u,o.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},o}function Kb(s,o,u,d,g){this.tag=o,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Ym(s,o,u,d,g,v,S,L,j){return s=new Kb(s,o,u,L,j),o===1?(o=1,v===!0&&(o|=8)):o=0,v=Xn(3,null,null,o),s.current=v,v.stateNode=s,v.memoizedState={element:d,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},lm(v),s}function Gb(s,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:d==null?null:""+d,children:s,containerInfo:o,implementation:u}}function aE(s){if(!s)return as;s=s._reactInternals;e:{if(cr(s)!==s||s.tag!==1)throw Error(n(170));var o=s;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(En(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(n(171))}if(s.tag===1){var u=s.type;if(En(u))return Lw(s,u,o)}return o}function lE(s,o,u,d,g,v,S,L,j){return s=Ym(u,d,!0,s,g,v,S,L,j),s.context=aE(null),u=s.current,d=mn(),g=ps(u),v=Si(d,g),v.callback=o??null,cs(u,v,g),s.current.lanes=g,ao(s,g,d),xn(s,d),s}function Gh(s,o,u,d){var g=o.current,v=mn(),S=ps(g);return u=aE(u),o.context===null?o.context=u:o.pendingContext=u,o=Si(v,S),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=cs(g,o,S),s!==null&&(yr(s,g,S,v),Ih(s,g,S)),S}function Yh(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function uE(s,o){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var u=s.retryLane;s.retryLane=u!==0&&u<o?u:o}}function Qm(s,o){uE(s,o),(s=s.alternate)&&uE(s,o)}var cE=typeof reportError=="function"?reportError:function(s){console.error(s)};function Xm(s){this._internalRoot=s}Qh.prototype.render=Xm.prototype.render=function(s){var o=this._internalRoot;if(o===null)throw Error(n(409));Gh(s,o,null,null)},Qh.prototype.unmount=Xm.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var o=s.containerInfo;Eo(function(){Gh(null,s,null,null)}),o[vi]=null}};function Qh(s){this._internalRoot=s}Qh.prototype.unstable_scheduleHydration=function(s){if(s){var o=eu();s={blockedOn:null,target:s,priority:o};for(var u=0;u<bn.length&&o!==0&&o<bn[u].priority;u++);bn.splice(u,0,s),u===0&&fa(s)}};function Jm(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function Xh(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function hE(){}function Yb(s,o,u,d,g){if(g){if(typeof d=="function"){var v=d;d=function(){var Y=Yh(S);v.call(Y)}}var S=lE(o,d,s,0,null,!1,!1,"",hE);return s._reactRootContainer=S,s[vi]=S.current,fu(s.nodeType===8?s.parentNode:s),Eo(),S}for(;g=s.lastChild;)s.removeChild(g);if(typeof d=="function"){var L=d;d=function(){var Y=Yh(j);L.call(Y)}}var j=Ym(s,0,!1,null,null,!1,!1,"",hE);return s._reactRootContainer=j,s[vi]=j.current,fu(s.nodeType===8?s.parentNode:s),Eo(function(){Gh(o,j,u,d)}),j}function Jh(s,o,u,d,g){var v=u._reactRootContainer;if(v){var S=v;if(typeof g=="function"){var L=g;g=function(){var j=Yh(S);L.call(j)}}Gh(o,S,s,g)}else S=Yb(u,o,s,g,d);return Yh(S)}Jl=function(s){switch(s.tag){case 3:var o=s.stateNode;if(o.current.memoizedState.isDehydrated){var u=Ke(o.pendingLanes);u!==0&&(Xl(o,u|1),xn(o,ot()),!(We&6)&&(ja=ot()+500,ls()))}break;case 13:Eo(function(){var d=Ti(s,1);if(d!==null){var g=mn();yr(d,s,1,g)}}),Qm(s,1)}},ca=function(s){if(s.tag===13){var o=Ti(s,134217728);if(o!==null){var u=mn();yr(o,s,134217728,u)}Qm(s,134217728)}},Zl=function(s){if(s.tag===13){var o=ps(s),u=Ti(s,o);if(u!==null){var d=mn();yr(u,s,o,d)}Qm(s,o)}},eu=function(){return ze},tu=function(s,o){var u=ze;try{return ze=s,o()}finally{ze=u}},li=function(s,o,u){switch(o){case"input":if(Xs(s,u),o=u.name,u.type==="radio"&&o!=null){for(u=s;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var d=u[o];if(d!==s&&d.form===s.form){var g=mh(d);if(!g)throw Error(n(90));_n(d),Xs(d,g)}}}break;case"textarea":Uc(s,u);break;case"select":o=u.value,o!=null&&lr(s,!!u.multiple,o,!1)}},Bc=Bm,Wc=Eo;var Qb={usingClientEntryPoint:!1,Events:[mu,Aa,mh,Gi,Yi,Bm]},ku={findFiberByHostInstance:fo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Xb={bundleType:ku.bundleType,version:ku.version,rendererPackageName:ku.rendererPackageName,rendererConfig:ku.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:U.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=Xc(s),s===null?null:s.stateNode},findFiberByHostInstance:ku.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zh.isDisabled&&Zh.supportsFiber)try{ro=Zh.inject(Xb),kn=Zh}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qb,In.createPortal=function(s,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jm(o))throw Error(n(200));return Gb(s,o,null,u)},In.createRoot=function(s,o){if(!Jm(s))throw Error(n(299));var u=!1,d="",g=cE;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),o=Ym(s,1,!1,null,null,u,!1,d,g),s[vi]=o.current,fu(s.nodeType===8?s.parentNode:s),new Xm(o)},In.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var o=s._reactInternals;if(o===void 0)throw typeof s.render=="function"?Error(n(188)):(s=Object.keys(s).join(","),Error(n(268,s)));return s=Xc(o),s=s===null?null:s.stateNode,s},In.flushSync=function(s){return Eo(s)},In.hydrate=function(s,o,u){if(!Xh(o))throw Error(n(200));return Jh(null,s,o,!0,u)},In.hydrateRoot=function(s,o,u){if(!Jm(s))throw Error(n(405));var d=u!=null&&u.hydratedSources||null,g=!1,v="",S=cE;if(u!=null&&(u.unstable_strictMode===!0&&(g=!0),u.identifierPrefix!==void 0&&(v=u.identifierPrefix),u.onRecoverableError!==void 0&&(S=u.onRecoverableError)),o=lE(o,null,s,1,u??null,g,!1,v,S),s[vi]=o.current,fu(s),d)for(s=0;s<d.length;s++)u=d[s],g=u._getVersion,g=g(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,g]:o.mutableSourceEagerHydrationData.push(u,g);return new Qh(o)},In.render=function(s,o,u){if(!Xh(o))throw Error(n(200));return Jh(null,s,o,!1,u)},In.unmountComponentAtNode=function(s){if(!Xh(s))throw Error(n(40));return s._reactRootContainer?(Eo(function(){Jh(null,null,s,!1,function(){s._reactRootContainer=null,s[vi]=null})}),!0):!1},In.unstable_batchedUpdates=Bm,In.unstable_renderSubtreeIntoContainer=function(s,o,u,d){if(!Xh(u))throw Error(n(200));if(s==null||s._reactInternals===void 0)throw Error(n(38));return Jh(s,o,u,!1,d)},In.version="18.3.1-next-f1338f8080-20240426",In}var EE;function uD(){if(EE)return tg.exports;EE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),tg.exports=lD(),tg.exports}var TE;function cD(){if(TE)return ef;TE=1;var t=uD();return ef.createRoot=t.createRoot,ef.hydrateRoot=t.hydrateRoot,ef}var hD=cD(),bu={},SE;function fD(){if(SE)return bu;SE=1,Object.defineProperty(bu,"__esModule",{value:!0}),bu.parse=l,bu.serialize=p;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,a=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function l(w,T){const x=new a,P=w.length;if(P<2)return x;const R=(T==null?void 0:T.decode)||m;let b=0;do{const O=w.indexOf("=",b);if(O===-1)break;const $=w.indexOf(";",b),U=$===-1?P:$;if(O>U){b=w.lastIndexOf(";",O-1)+1;continue}const H=c(w,b,O),X=h(w,O,H),C=w.slice(H,X);if(x[C]===void 0){let I=c(w,O+1,U),k=h(w,U,I);const D=R(w.slice(I,k));x[C]=D}b=U+1}while(b<P);return x}function c(w,T,x){do{const P=w.charCodeAt(T);if(P!==32&&P!==9)return T}while(++T<x);return x}function h(w,T,x){for(;T>x;){const P=w.charCodeAt(--T);if(P!==32&&P!==9)return T+1}return x}function p(w,T,x){const P=(x==null?void 0:x.encode)||encodeURIComponent;if(!t.test(w))throw new TypeError(`argument name is invalid: ${w}`);const R=P(T);if(!e.test(R))throw new TypeError(`argument val is invalid: ${T}`);let b=w+"="+R;if(!x)return b;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);b+="; Max-Age="+x.maxAge}if(x.domain){if(!n.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);b+="; Domain="+x.domain}if(x.path){if(!r.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);b+="; Path="+x.path}if(x.expires){if(!y(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);b+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(b+="; HttpOnly"),x.secure&&(b+="; Secure"),x.partitioned&&(b+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":b+="; Priority=Low";break;case"medium":b+="; Priority=Medium";break;case"high":b+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":b+="; SameSite=Strict";break;case"lax":b+="; SameSite=Lax";break;case"none":b+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return b}function m(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function y(w){return i.call(w)==="[object Date]"}return bu}fD();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xE="popstate";function dD(t={}){function e(i,a){let{pathname:l="/",search:c="",hash:h=""}=Yo(i.location.hash.substring(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Qg("",{pathname:l,search:c,hash:h},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){let l=i.document.querySelector("base"),c="";if(l&&l.getAttribute("href")){let h=i.location.href,p=h.indexOf("#");c=p===-1?h:h.slice(0,p)}return c+"#"+(typeof a=="string"?a:nc(a))}function r(i,a){rr(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return mD(e,n,r,t)}function pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pD(){return Math.random().toString(36).substring(2,10)}function IE(t,e){return{usr:t.state,key:t.key,idx:e}}function Qg(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Yo(e):e,state:n,key:e&&e.key||r||pD()}}function nc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Yo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function mD(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,c="POP",h=null,p=m();p==null&&(p=0,l.replaceState({...l.state,idx:p},""));function m(){return(l.state||{idx:null}).idx}function y(){c="POP";let R=m(),b=R==null?null:R-p;p=R,h&&h({action:c,location:P.location,delta:b})}function w(R,b){c="PUSH";let O=Qg(P.location,R,b);n(O,R),p=m()+1;let $=IE(O,p),U=P.createHref(O);try{l.pushState($,"",U)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;i.location.assign(U)}a&&h&&h({action:c,location:P.location,delta:1})}function T(R,b){c="REPLACE";let O=Qg(P.location,R,b);n(O,R),p=m();let $=IE(O,p),U=P.createHref(O);l.replaceState($,"",U),a&&h&&h({action:c,location:P.location,delta:0})}function x(R){let b=i.location.origin!=="null"?i.location.origin:i.location.href,O=typeof R=="string"?R:nc(R);return O=O.replace(/ $/,"%20"),pt(b,`No window.location.(origin|href) available to create URL for href: ${O}`),new URL(O,b)}let P={get action(){return c},get location(){return t(i,l)},listen(R){if(h)throw new Error("A history only accepts one active listener");return i.addEventListener(xE,y),h=R,()=>{i.removeEventListener(xE,y),h=null}},createHref(R){return e(i,R)},createURL:x,encodeLocation(R){let b=x(R);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:w,replace:T,go(R){return l.go(R)}};return P}function F1(t,e,n="/"){return gD(t,e,n,!1)}function gD(t,e,n,r){let i=typeof e=="string"?Yo(e):e,a=Os(i.pathname||"/",n);if(a==null)return null;let l=j1(t);yD(l);let c=null;for(let h=0;c==null&&h<l.length;++h){let p=PD(a);c=AD(l[h],p,r)}return c}function j1(t,e=[],n=[],r=""){let i=(a,l,c)=>{let h={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};h.relativePath.startsWith("/")&&(pt(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length));let p=bi([r,h.relativePath]),m=n.concat(h);a.children&&a.children.length>0&&(pt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),j1(a.children,e,m,p)),!(a.path==null&&!a.index)&&e.push({path:p,score:xD(p,a.index),routesMeta:m})};return t.forEach((a,l)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))i(a,l);else for(let h of U1(a.path))i(a,l,h)}),e}function U1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=U1(r.join("/")),c=[];return c.push(...l.map(h=>h===""?a:[a,h].join("/"))),i&&c.push(...l),c.map(h=>t.startsWith("/")&&h===""?"/":h)}function yD(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ID(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var vD=/^:[\w-]+$/,_D=3,wD=2,ED=1,TD=10,SD=-2,AE=t=>t==="*";function xD(t,e){let n=t.split("/"),r=n.length;return n.some(AE)&&(r+=SD),e&&(r+=wD),n.filter(i=>!AE(i)).reduce((i,a)=>i+(vD.test(a)?_D:a===""?ED:TD),r)}function ID(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function AD(t,e,n=!1){let{routesMeta:r}=t,i={},a="/",l=[];for(let c=0;c<r.length;++c){let h=r[c],p=c===r.length-1,m=a==="/"?e:e.slice(a.length)||"/",y=Yf({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m),w=h.route;if(!y&&p&&n&&!r[r.length-1].route.index&&(y=Yf({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},m)),!y)return null;Object.assign(i,y.params),l.push({params:i,pathname:bi([a,y.pathname]),pathnameBase:DD(bi([a,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(a=bi([a,y.pathnameBase]))}return l}function Yf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=CD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((p,{paramName:m,isOptional:y},w)=>{if(m==="*"){let x=c[w]||"";l=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const T=c[w];return y&&!T?p[m]=void 0:p[m]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:l,pattern:t}}function CD(t,e=!1,n=!0){rr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,h)=>(r.push({paramName:c,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function PD(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return rr(!1,`The URL path "${t}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Os(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function kD(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Yo(t):t;return{pathname:n?n.startsWith("/")?n:RD(n,e):e,search:ND(r),hash:VD(i)}}function RD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ig(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bD(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cv(t){let e=bD(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function hv(t,e,n,r=!1){let i;typeof t=="string"?i=Yo(t):(i={...t},pt(!i.pathname||!i.pathname.includes("?"),ig("?","pathname","search",i)),pt(!i.pathname||!i.pathname.includes("#"),ig("#","pathname","hash",i)),pt(!i.search||!i.search.includes("#"),ig("#","search","hash",i)));let a=t===""||i.pathname==="",l=a?"/":i.pathname,c;if(l==null)c=n;else{let y=e.length-1;if(!r&&l.startsWith("..")){let w=l.split("/");for(;w[0]==="..";)w.shift(),y-=1;i.pathname=w.join("/")}c=y>=0?e[y]:"/"}let h=kD(i,c),p=l&&l!=="/"&&l.endsWith("/"),m=(a||l===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||m)&&(h.pathname+="/"),h}var bi=t=>t.join("/").replace(/\/\/+/g,"/"),DD=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ND=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,VD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var $1=["POST","PUT","PATCH","DELETE"];new Set($1);var MD=["GET",...$1];new Set(MD);var Sl=V.createContext(null);Sl.displayName="DataRouter";var Bd=V.createContext(null);Bd.displayName="DataRouterState";var z1=V.createContext({isTransitioning:!1});z1.displayName="ViewTransition";var OD=V.createContext(new Map);OD.displayName="Fetchers";var FD=V.createContext(null);FD.displayName="Await";var kr=V.createContext(null);kr.displayName="Navigation";var _c=V.createContext(null);_c.displayName="Location";var or=V.createContext({outlet:null,matches:[],isDataRoute:!1});or.displayName="Route";var fv=V.createContext(null);fv.displayName="RouteError";function jD(t,{relative:e}={}){pt(xl(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=V.useContext(kr),{hash:i,pathname:a,search:l}=wc(t,{relative:e}),c=a;return n!=="/"&&(c=a==="/"?n:bi([n,a])),r.createHref({pathname:c,search:l,hash:i})}function xl(){return V.useContext(_c)!=null}function Rr(){return pt(xl(),"useLocation() may be used only in the context of a <Router> component."),V.useContext(_c).location}var B1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function W1(t){V.useContext(kr).static||V.useLayoutEffect(t)}function dv(){let{isDataRoute:t}=V.useContext(or);return t?eN():UD()}function UD(){pt(xl(),"useNavigate() may be used only in the context of a <Router> component.");let t=V.useContext(Sl),{basename:e,navigator:n}=V.useContext(kr),{matches:r}=V.useContext(or),{pathname:i}=Rr(),a=JSON.stringify(cv(r)),l=V.useRef(!1);return W1(()=>{l.current=!0}),V.useCallback((h,p={})=>{if(rr(l.current,B1),!l.current)return;if(typeof h=="number"){n.go(h);return}let m=hv(h,JSON.parse(a),i,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:bi([e,m.pathname])),(p.replace?n.replace:n.push)(m,p.state,p)},[e,n,a,i,t])}var $D=V.createContext(null);function zD(t){let e=V.useContext(or).outlet;return e&&V.createElement($D.Provider,{value:t},e)}function l7(){let{matches:t}=V.useContext(or),e=t[t.length-1];return e?e.params:{}}function wc(t,{relative:e}={}){let{matches:n}=V.useContext(or),{pathname:r}=Rr(),i=JSON.stringify(cv(n));return V.useMemo(()=>hv(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function BD(t,e){return H1(t,e)}function H1(t,e,n,r){var b;pt(xl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=V.useContext(kr),{matches:a}=V.useContext(or),l=a[a.length-1],c=l?l.params:{},h=l?l.pathname:"/",p=l?l.pathnameBase:"/",m=l&&l.route;{let O=m&&m.path||"";q1(h,!m||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let y=Rr(),w;if(e){let O=typeof e=="string"?Yo(e):e;pt(p==="/"||((b=O.pathname)==null?void 0:b.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${O.pathname}" was given in the \`location\` prop.`),w=O}else w=y;let T=w.pathname||"/",x=T;if(p!=="/"){let O=p.replace(/^\//,"").split("/");x="/"+T.replace(/^\//,"").split("/").slice(O.length).join("/")}let P=F1(t,{pathname:x});rr(m||P!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),rr(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let R=GD(P&&P.map(O=>Object.assign({},O,{params:Object.assign({},c,O.params),pathname:bi([p,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?p:bi([p,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),a,n,r);return e&&R?V.createElement(_c.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},R):R}function WD(){let t=ZD(),e=LD(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=V.createElement(V.Fragment,null,V.createElement("p",null,"💿 Hey developer 👋"),V.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",V.createElement("code",{style:a},"ErrorBoundary")," or"," ",V.createElement("code",{style:a},"errorElement")," prop on your route.")),V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},e),n?V.createElement("pre",{style:i},n):null,l)}var HD=V.createElement(WD,null),qD=class extends V.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?V.createElement(or.Provider,{value:this.props.routeContext},V.createElement(fv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function KD({routeContext:t,match:e,children:n}){let r=V.useContext(Sl);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),V.createElement(or.Provider,{value:t},n)}function GD(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,a=n==null?void 0:n.errors;if(a!=null){let h=i.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);pt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let l=!1,c=-1;if(n)for(let h=0;h<i.length;h++){let p=i[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:m,errors:y}=n,w=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||w){l=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,p,m)=>{let y,w=!1,T=null,x=null;n&&(y=a&&p.route.id?a[p.route.id]:void 0,T=p.route.errorElement||HD,l&&(c<0&&m===0?(q1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):c===m&&(w=!0,x=p.route.hydrateFallbackElement||null)));let P=e.concat(i.slice(0,m+1)),R=()=>{let b;return y?b=T:w?b=x:p.route.Component?b=V.createElement(p.route.Component,null):p.route.element?b=p.route.element:b=h,V.createElement(KD,{match:p,routeContext:{outlet:h,matches:P,isDataRoute:n!=null},children:b})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?V.createElement(qD,{location:n.location,revalidation:n.revalidation,component:T,error:y,children:R(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):R()},null)}function pv(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function YD(t){let e=V.useContext(Sl);return pt(e,pv(t)),e}function QD(t){let e=V.useContext(Bd);return pt(e,pv(t)),e}function XD(t){let e=V.useContext(or);return pt(e,pv(t)),e}function mv(t){let e=XD(t),n=e.matches[e.matches.length-1];return pt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function JD(){return mv("useRouteId")}function ZD(){var r;let t=V.useContext(fv),e=QD("useRouteError"),n=mv("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function eN(){let{router:t}=YD("useNavigate"),e=mv("useNavigate"),n=V.useRef(!1);return W1(()=>{n.current=!0}),V.useCallback(async(i,a={})=>{rr(n.current,B1),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...a}))},[t,e])}var CE={};function q1(t,e,n){!e&&!CE[t]&&(CE[t]=!0,rr(!1,n))}V.memo(tN);function tN({routes:t,future:e,state:n}){return H1(t,void 0,n,e)}function nN({to:t,replace:e,state:n,relative:r}){pt(xl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=V.useContext(kr);rr(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=V.useContext(or),{pathname:l}=Rr(),c=dv(),h=hv(t,cv(a),l,r==="path"),p=JSON.stringify(h);return V.useEffect(()=>{c(JSON.parse(p),{replace:e,state:n,relative:r})},[c,p,r,e,n]),null}function u7(t){return zD(t.context)}function qe(t){pt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function rN({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:a=!1}){pt(!xl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),c=V.useMemo(()=>({basename:l,navigator:i,static:a,future:{}}),[l,i,a]);typeof n=="string"&&(n=Yo(n));let{pathname:h="/",search:p="",hash:m="",state:y=null,key:w="default"}=n,T=V.useMemo(()=>{let x=Os(h,l);return x==null?null:{location:{pathname:x,search:p,hash:m,state:y,key:w},navigationType:r}},[l,h,p,m,y,w,r]);return rr(T!=null,`<Router basename="${l}"> is not able to match the URL "${h}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:V.createElement(kr.Provider,{value:c},V.createElement(_c.Provider,{children:e,value:T}))}function iN({children:t,location:e}){return BD(Xg(t),e)}function Xg(t,e=[]){let n=[];return V.Children.forEach(t,(r,i)=>{if(!V.isValidElement(r))return;let a=[...e,i];if(r.type===V.Fragment){n.push.apply(n,Xg(r.props.children,a));return}pt(r.type===qe,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),pt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Xg(r.props.children,a)),n.push(l)}),n}var wf="get",Ef="application/x-www-form-urlencoded";function Wd(t){return t!=null&&typeof t.tagName=="string"}function sN(t){return Wd(t)&&t.tagName.toLowerCase()==="button"}function oN(t){return Wd(t)&&t.tagName.toLowerCase()==="form"}function aN(t){return Wd(t)&&t.tagName.toLowerCase()==="input"}function lN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function uN(t,e){return t.button===0&&(!e||e==="_self")&&!lN(t)}var tf=null;function cN(){if(tf===null)try{new FormData(document.createElement("form"),0),tf=!1}catch{tf=!0}return tf}var hN=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sg(t){return t!=null&&!hN.has(t)?(rr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ef}"`),null):t}function fN(t,e){let n,r,i,a,l;if(oN(t)){let c=t.getAttribute("action");r=c?Os(c,e):null,n=t.getAttribute("method")||wf,i=sg(t.getAttribute("enctype"))||Ef,a=new FormData(t)}else if(sN(t)||aN(t)&&(t.type==="submit"||t.type==="image")){let c=t.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=t.getAttribute("formaction")||c.getAttribute("action");if(r=h?Os(h,e):null,n=t.getAttribute("formmethod")||c.getAttribute("method")||wf,i=sg(t.getAttribute("formenctype"))||sg(c.getAttribute("enctype"))||Ef,a=new FormData(c,t),!cN()){let{name:p,type:m,value:y}=t;if(m==="image"){let w=p?`${p}.`:"";a.append(`${w}x`,"0"),a.append(`${w}y`,"0")}else p&&a.append(p,y)}}else{if(Wd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=wf,r=null,i=Ef,l=t}return a&&i==="text/plain"&&(l=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:l}}function gv(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function dN(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pN(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function mN(t,e,n){let r=await Promise.all(t.map(async i=>{let a=e.routes[i.route.id];if(a){let l=await dN(a,n);return l.links?l.links():[]}return[]}));return _N(r.flat(1).filter(pN).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function PE(t,e,n,r,i,a){let l=(h,p)=>n[p]?h.route.id!==n[p].route.id:!0,c=(h,p)=>{var m;return n[p].pathname!==h.pathname||((m=n[p].route.path)==null?void 0:m.endsWith("*"))&&n[p].params["*"]!==h.params["*"]};return a==="assets"?e.filter((h,p)=>l(h,p)||c(h,p)):a==="data"?e.filter((h,p)=>{var y;let m=r.routes[h.route.id];if(!m||!m.hasLoader)return!1;if(l(h,p)||c(h,p))return!0;if(h.route.shouldRevalidate){let w=h.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((y=n[0])==null?void 0:y.params)||{},nextUrl:new URL(t,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function gN(t,e){return yN(t.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function yN(t){return[...new Set(t)]}function vN(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function _N(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let a=JSON.stringify(vN(i));return n.has(a)||(n.add(a),r.push({key:a,link:i})),r},[])}function wN(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function EN(){let t=V.useContext(Sl);return gv(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function TN(){let t=V.useContext(Bd);return gv(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var yv=V.createContext(void 0);yv.displayName="FrameworkContext";function K1(){let t=V.useContext(yv);return gv(t,"You must render this element inside a <HydratedRouter> element"),t}function SN(t,e){let n=V.useContext(yv),[r,i]=V.useState(!1),[a,l]=V.useState(!1),{onFocus:c,onBlur:h,onMouseEnter:p,onMouseLeave:m,onTouchStart:y}=e,w=V.useRef(null);V.useEffect(()=>{if(t==="render"&&l(!0),t==="viewport"){let P=b=>{b.forEach(O=>{l(O.isIntersecting)})},R=new IntersectionObserver(P,{threshold:.5});return w.current&&R.observe(w.current),()=>{R.disconnect()}}},[t]),V.useEffect(()=>{if(r){let P=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(P)}}},[r]);let T=()=>{i(!0)},x=()=>{i(!1),l(!1)};return n?t!=="intent"?[a,w,{}]:[a,w,{onFocus:Du(c,T),onBlur:Du(h,x),onMouseEnter:Du(p,T),onMouseLeave:Du(m,x),onTouchStart:Du(y,T)}]:[!1,w,{}]}function Du(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function xN({page:t,...e}){let{router:n}=EN(),r=V.useMemo(()=>F1(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?V.createElement(AN,{page:t,matches:r,...e}):null}function IN(t){let{manifest:e,routeModules:n}=K1(),[r,i]=V.useState([]);return V.useEffect(()=>{let a=!1;return mN(t,e,n).then(l=>{a||i(l)}),()=>{a=!0}},[t,e,n]),r}function AN({page:t,matches:e,...n}){let r=Rr(),{manifest:i,routeModules:a}=K1(),{loaderData:l,matches:c}=TN(),h=V.useMemo(()=>PE(t,e,c,i,r,"data"),[t,e,c,i,r]),p=V.useMemo(()=>PE(t,e,c,i,r,"assets"),[t,e,c,i,r]),m=V.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let T=new Set,x=!1;if(e.forEach(R=>{var O;let b=i.routes[R.route.id];!b||!b.hasLoader||(!h.some($=>$.route.id===R.route.id)&&R.route.id in l&&((O=a[R.route.id])!=null&&O.shouldRevalidate)||b.hasClientLoader?x=!0:T.add(R.route.id))}),T.size===0)return[];let P=wN(t);return x&&T.size>0&&P.searchParams.set("_routes",e.filter(R=>T.has(R.route.id)).map(R=>R.route.id).join(",")),[P.pathname+P.search]},[l,r,i,h,e,t,a]),y=V.useMemo(()=>gN(p,i),[p,i]),w=IN(p);return V.createElement(V.Fragment,null,m.map(T=>V.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...n})),y.map(T=>V.createElement("link",{key:T,rel:"modulepreload",href:T,...n})),w.map(({key:T,link:x})=>V.createElement("link",{key:T,...x})))}function CN(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var G1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{G1&&(window.__reactRouterVersion="7.1.1")}catch{}function PN({basename:t,children:e,window:n}){let r=V.useRef();r.current==null&&(r.current=dD({window:n,v5Compat:!0}));let i=r.current,[a,l]=V.useState({action:i.action,location:i.location}),c=V.useCallback(h=>{V.startTransition(()=>l(h))},[l]);return V.useLayoutEffect(()=>i.listen(c),[i,c]),V.createElement(rN,{basename:t,children:e,location:a.location,navigationType:a.action,navigator:i})}var Y1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qf=V.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:a,replace:l,state:c,target:h,to:p,preventScrollReset:m,viewTransition:y,...w},T){let{basename:x}=V.useContext(kr),P=typeof p=="string"&&Y1.test(p),R,b=!1;if(typeof p=="string"&&P&&(R=p,G1))try{let k=new URL(window.location.href),D=p.startsWith("//")?new URL(k.protocol+p):new URL(p),M=Os(D.pathname,x);D.origin===k.origin&&M!=null?p=M+D.search+D.hash:b=!0}catch{rr(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=jD(p,{relative:i}),[$,U,H]=SN(r,w),X=DN(p,{replace:l,state:c,target:h,preventScrollReset:m,relative:i,viewTransition:y});function C(k){e&&e(k),k.defaultPrevented||X(k)}let I=V.createElement("a",{...w,...H,href:R||O,onClick:b||a?e:C,ref:CN(T,U),target:h,"data-discover":!P&&n==="render"?"true":void 0});return $&&!P?V.createElement(V.Fragment,null,I,V.createElement(xN,{page:O})):I});Qf.displayName="Link";var kN=V.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:a,to:l,viewTransition:c,children:h,...p},m){let y=wc(l,{relative:p.relative}),w=Rr(),T=V.useContext(Bd),{navigator:x,basename:P}=V.useContext(kr),R=T!=null&&ON(y)&&c===!0,b=x.encodeLocation?x.encodeLocation(y).pathname:y.pathname,O=w.pathname,$=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;n||(O=O.toLowerCase(),$=$?$.toLowerCase():null,b=b.toLowerCase()),$&&P&&($=Os($,P)||$);const U=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let H=O===b||!i&&O.startsWith(b)&&O.charAt(U)==="/",X=$!=null&&($===b||!i&&$.startsWith(b)&&$.charAt(b.length)==="/"),C={isActive:H,isPending:X,isTransitioning:R},I=H?e:void 0,k;typeof r=="function"?k=r(C):k=[r,H?"active":null,X?"pending":null,R?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(C):a;return V.createElement(Qf,{...p,"aria-current":I,className:k,ref:m,style:D,to:l,viewTransition:c},typeof h=="function"?h(C):h)});kN.displayName="NavLink";var RN=V.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:a,method:l=wf,action:c,onSubmit:h,relative:p,preventScrollReset:m,viewTransition:y,...w},T)=>{let x=LN(),P=MN(c,{relative:p}),R=l.toLowerCase()==="get"?"get":"post",b=typeof c=="string"&&Y1.test(c),O=$=>{if(h&&h($),$.defaultPrevented)return;$.preventDefault();let U=$.nativeEvent.submitter,H=(U==null?void 0:U.getAttribute("formmethod"))||l;x(U||$.currentTarget,{fetcherKey:e,method:H,navigate:n,replace:i,state:a,relative:p,preventScrollReset:m,viewTransition:y})};return V.createElement("form",{ref:T,method:R,action:P,onSubmit:r?h:O,...w,"data-discover":!b&&t==="render"?"true":void 0})});RN.displayName="Form";function bN(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Q1(t){let e=V.useContext(Sl);return pt(e,bN(t)),e}function DN(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:a,viewTransition:l}={}){let c=dv(),h=Rr(),p=wc(t,{relative:a});return V.useCallback(m=>{if(uN(m,e)){m.preventDefault();let y=n!==void 0?n:nc(h)===nc(p);c(t,{replace:y,state:r,preventScrollReset:i,relative:a,viewTransition:l})}},[h,c,p,n,r,e,t,i,a,l])}var NN=0,VN=()=>`__${String(++NN)}__`;function LN(){let{router:t}=Q1("useSubmit"),{basename:e}=V.useContext(kr),n=JD();return V.useCallback(async(r,i={})=>{let{action:a,method:l,encType:c,formData:h,body:p}=fN(r,e);if(i.navigate===!1){let m=i.fetcherKey||VN();await t.fetch(m,n,i.action||a,{preventScrollReset:i.preventScrollReset,formData:h,body:p,formMethod:i.method||l,formEncType:i.encType||c,flushSync:i.flushSync})}else await t.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:h,body:p,formMethod:i.method||l,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function MN(t,{relative:e}={}){let{basename:n}=V.useContext(kr),r=V.useContext(or);pt(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),a={...wc(t||".",{relative:e})},l=Rr();if(t==null){a.search=l.search;let c=new URLSearchParams(a.search),h=c.getAll("index");if(h.some(m=>m==="")){c.delete("index"),h.filter(y=>y).forEach(y=>c.append("index",y));let m=c.toString();a.search=m?`?${m}`:""}}return(!t||t===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:bi([n,a.pathname])),nc(a)}function ON(t,e={}){let n=V.useContext(z1);pt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Q1("useViewTransitionState"),i=wc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let a=Os(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Os(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Yf(i.pathname,l)!=null||Yf(i.pathname,a)!=null}new TextEncoder;var og={exports:{}},ag={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE;function FN(){if(kE)return ag;kE=1;var t=zd();function e(h,p){return h===p&&(h!==0||1/h===1/p)||h!==h&&p!==p}var n=typeof Object.is=="function"?Object.is:e,r=t.useSyncExternalStore,i=t.useRef,a=t.useEffect,l=t.useMemo,c=t.useDebugValue;return ag.useSyncExternalStoreWithSelector=function(h,p,m,y,w){var T=i(null);if(T.current===null){var x={hasValue:!1,value:null};T.current=x}else x=T.current;T=l(function(){function R(H){if(!b){if(b=!0,O=H,H=y(H),w!==void 0&&x.hasValue){var X=x.value;if(w(X,H))return $=X}return $=H}if(X=$,n(O,H))return X;var C=y(H);return w!==void 0&&w(X,C)?(O=H,X):(O=H,$=C)}var b=!1,O,$,U=m===void 0?null:m;return[function(){return R(p())},U===null?void 0:function(){return R(U())}]},[p,m,y,w]);var P=r(h,T[0],T[1]);return a(function(){x.hasValue=!0,x.value=P},[P]),c(P),P},ag}var RE;function jN(){return RE||(RE=1,og.exports=FN()),og.exports}var UN=jN();function $N(t){t()}function zN(){let t=null,e=null;return{clear(){t=null,e=null},notify(){$N(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var bE={notify(){},get:()=>[]};function BN(t,e){let n,r=bE,i=0,a=!1;function l(P){m();const R=r.subscribe(P);let b=!1;return()=>{b||(b=!0,R(),y())}}function c(){r.notify()}function h(){x.onStateChange&&x.onStateChange()}function p(){return a}function m(){i++,n||(n=t.subscribe(h),r=zN())}function y(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=bE)}function w(){a||(a=!0,m())}function T(){a&&(a=!1,y())}const x={addNestedSub:l,notifyNestedSubs:c,handleChangeWrapper:h,isSubscribed:p,trySubscribe:w,tryUnsubscribe:T,getListeners:()=>r};return x}var WN=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",HN=WN(),qN=()=>typeof navigator<"u"&&navigator.product==="ReactNative",KN=qN(),GN=()=>HN||KN?V.useLayoutEffect:V.useEffect,YN=GN(),lg=Symbol.for("react-redux-context"),ug=typeof globalThis<"u"?globalThis:{};function QN(){if(!V.createContext)return{};const t=ug[lg]??(ug[lg]=new Map);let e=t.get(V.createContext);return e||(e=V.createContext(null),t.set(V.createContext,e)),e}var Fs=QN();function XN(t){const{children:e,context:n,serverState:r,store:i}=t,a=V.useMemo(()=>{const h=BN(i);return{store:i,subscription:h,getServerState:r?()=>r:void 0}},[i,r]),l=V.useMemo(()=>i.getState(),[i]);YN(()=>{const{subscription:h}=a;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),l!==i.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[a,l]);const c=n||Fs;return V.createElement(c.Provider,{value:a},e)}var JN=XN;function vv(t=Fs){return function(){return V.useContext(t)}}var X1=vv();function J1(t=Fs){const e=t===Fs?X1:vv(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var ZN=J1();function eV(t=Fs){const e=t===Fs?ZN:J1(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var _v=eV(),tV=(t,e)=>t===e;function nV(t=Fs){const e=t===Fs?X1:vv(t),n=(r,i={})=>{const{equalityFn:a=tV}=typeof i=="function"?{equalityFn:i}:i,l=e(),{store:c,subscription:h,getServerState:p}=l;V.useRef(!0);const m=V.useCallback({[r.name](w){return r(w)}}[r.name],[r]),y=UN.useSyncExternalStoreWithSelector(h.addNestedSub,c.getState,p||c.getState,m,a);return V.useDebugValue(y),y};return Object.assign(n,{withTypes:()=>n}),n}var Pi=nV();function Xt(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var rV=typeof Symbol=="function"&&Symbol.observable||"@@observable",DE=rV,cg=()=>Math.random().toString(36).substring(7).split("").join("."),iV={INIT:`@@redux/INIT${cg()}`,REPLACE:`@@redux/REPLACE${cg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${cg()}`},Xf=iV;function wv(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function Z1(t,e,n){if(typeof t!="function")throw new Error(Xt(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Xt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Xt(1));return n(Z1)(t,e)}let r=t,i=e,a=new Map,l=a,c=0,h=!1;function p(){l===a&&(l=new Map,a.forEach((R,b)=>{l.set(b,R)}))}function m(){if(h)throw new Error(Xt(3));return i}function y(R){if(typeof R!="function")throw new Error(Xt(4));if(h)throw new Error(Xt(5));let b=!0;p();const O=c++;return l.set(O,R),function(){if(b){if(h)throw new Error(Xt(6));b=!1,p(),l.delete(O),a=null}}}function w(R){if(!wv(R))throw new Error(Xt(7));if(typeof R.type>"u")throw new Error(Xt(8));if(typeof R.type!="string")throw new Error(Xt(17));if(h)throw new Error(Xt(9));try{h=!0,i=r(i,R)}finally{h=!1}return(a=l).forEach(O=>{O()}),R}function T(R){if(typeof R!="function")throw new Error(Xt(10));r=R,w({type:Xf.REPLACE})}function x(){const R=y;return{subscribe(b){if(typeof b!="object"||b===null)throw new Error(Xt(11));function O(){const U=b;U.next&&U.next(m())}return O(),{unsubscribe:R(O)}},[DE](){return this}}}return w({type:Xf.INIT}),{dispatch:w,subscribe:y,getState:m,replaceReducer:T,[DE]:x}}function sV(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Xf.INIT})>"u")throw new Error(Xt(12));if(typeof n(void 0,{type:Xf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Xt(13))})}function oV(t){const e=Object.keys(t),n={};for(let a=0;a<e.length;a++){const l=e[a];typeof t[l]=="function"&&(n[l]=t[l])}const r=Object.keys(n);let i;try{sV(n)}catch(a){i=a}return function(l={},c){if(i)throw i;let h=!1;const p={};for(let m=0;m<r.length;m++){const y=r[m],w=n[y],T=l[y],x=w(T,c);if(typeof x>"u")throw c&&c.type,new Error(Xt(14));p[y]=x,h=h||x!==T}return h=h||r.length!==Object.keys(l).length,h?p:l}}function Jf(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function aV(...t){return e=>(n,r)=>{const i=e(n,r);let a=()=>{throw new Error(Xt(15))};const l={getState:i.getState,dispatch:(h,...p)=>a(h,...p)},c=t.map(h=>h(l));return a=Jf(...c)(i.dispatch),{...i,dispatch:a}}}function lV(t){return wv(t)&&"type"in t&&typeof t.type=="string"}var eI=Symbol.for("immer-nothing"),NE=Symbol.for("immer-draftable"),zn=Symbol.for("immer-state");function Er(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var ll=Object.getPrototypeOf;function Fo(t){return!!t&&!!t[zn]}function Li(t){var e;return t?tI(t)||Array.isArray(t)||!!t[NE]||!!((e=t.constructor)!=null&&e[NE])||qd(t)||Kd(t):!1}var uV=Object.prototype.constructor.toString();function tI(t){if(!t||typeof t!="object")return!1;const e=ll(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===uV}function Zf(t,e){Hd(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function Hd(t){const e=t[zn];return e?e.type_:Array.isArray(t)?1:qd(t)?2:Kd(t)?3:0}function Jg(t,e){return Hd(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function nI(t,e,n){const r=Hd(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function cV(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function qd(t){return t instanceof Map}function Kd(t){return t instanceof Set}function Ao(t){return t.copy_||t.base_}function Zg(t,e){if(qd(t))return new Map(t);if(Kd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=tI(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[zn];let i=Reflect.ownKeys(r);for(let a=0;a<i.length;a++){const l=i[a],c=r[l];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[l]={configurable:!0,writable:!0,enumerable:c.enumerable,value:t[l]})}return Object.create(ll(t),r)}else{const r=ll(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function Ev(t,e=!1){return Gd(t)||Fo(t)||!Li(t)||(Hd(t)>1&&(t.set=t.add=t.clear=t.delete=hV),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Ev(r,!0))),t}function hV(){Er(2)}function Gd(t){return Object.isFrozen(t)}var fV={};function jo(t){const e=fV[t];return e||Er(0,t),e}var rc;function rI(){return rc}function dV(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function VE(t,e){e&&(jo("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function ey(t){ty(t),t.drafts_.forEach(pV),t.drafts_=null}function ty(t){t===rc&&(rc=t.parent_)}function LE(t){return rc=dV(rc,t)}function pV(t){const e=t[zn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function ME(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[zn].modified_&&(ey(e),Er(4)),Li(t)&&(t=ed(e,t),e.parent_||td(e,t)),e.patches_&&jo("Patches").generateReplacementPatches_(n[zn].base_,t,e.patches_,e.inversePatches_)):t=ed(e,n,[]),ey(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==eI?t:void 0}function ed(t,e,n){if(Gd(e))return e;const r=e[zn];if(!r)return Zf(e,(i,a)=>OE(t,r,e,i,a,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return td(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let a=i,l=!1;r.type_===3&&(a=new Set(i),i.clear(),l=!0),Zf(a,(c,h)=>OE(t,r,i,c,h,n,l)),td(t,i,!1),n&&t.patches_&&jo("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function OE(t,e,n,r,i,a,l){if(Fo(i)){const c=a&&e&&e.type_!==3&&!Jg(e.assigned_,r)?a.concat(r):void 0,h=ed(t,i,c);if(nI(n,r,h),Fo(h))t.canAutoFreeze_=!1;else return}else l&&n.add(i);if(Li(i)&&!Gd(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;ed(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&td(t,i)}}function td(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Ev(e,n)}function mV(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:rI(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=Tv;n&&(i=[r],a=ic);const{revoke:l,proxy:c}=Proxy.revocable(i,a);return r.draft_=c,r.revoke_=l,c}var Tv={get(t,e){if(e===zn)return t;const n=Ao(t);if(!Jg(n,e))return gV(t,n,e);const r=n[e];return t.finalized_||!Li(r)?r:r===hg(t.base_,e)?(fg(t),t.copy_[e]=ry(r,t)):r},has(t,e){return e in Ao(t)},ownKeys(t){return Reflect.ownKeys(Ao(t))},set(t,e,n){const r=iI(Ao(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=hg(Ao(t),e),a=i==null?void 0:i[zn];if(a&&a.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(cV(n,i)&&(n!==void 0||Jg(t.base_,e)))return!0;fg(t),ny(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return hg(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,fg(t),ny(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Ao(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Er(11)},getPrototypeOf(t){return ll(t.base_)},setPrototypeOf(){Er(12)}},ic={};Zf(Tv,(t,e)=>{ic[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});ic.deleteProperty=function(t,e){return ic.set.call(this,t,e,void 0)};ic.set=function(t,e,n){return Tv.set.call(this,t[0],e,n,t[0])};function hg(t,e){const n=t[zn];return(n?Ao(n):t)[e]}function gV(t,e,n){var i;const r=iI(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function iI(t,e){if(!(e in t))return;let n=ll(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=ll(n)}}function ny(t){t.modified_||(t.modified_=!0,t.parent_&&ny(t.parent_))}function fg(t){t.copy_||(t.copy_=Zg(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var yV=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const a=n;n=e;const l=this;return function(h=a,...p){return l.produce(h,m=>n.call(this,m,...p))}}typeof n!="function"&&Er(6),r!==void 0&&typeof r!="function"&&Er(7);let i;if(Li(e)){const a=LE(this),l=ry(e,void 0);let c=!0;try{i=n(l),c=!1}finally{c?ey(a):ty(a)}return VE(a,r),ME(i,a)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===eI&&(i=void 0),this.autoFreeze_&&Ev(i,!0),r){const a=[],l=[];jo("Patches").generateReplacementPatches_(e,i,a,l),r(a,l)}return i}else Er(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(l,...c)=>this.produceWithPatches(l,h=>e(h,...c));let r,i;return[this.produce(e,n,(l,c)=>{r=l,i=c}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Li(t)||Er(8),Fo(t)&&(t=vV(t));const e=LE(this),n=ry(t,void 0);return n[zn].isManual_=!0,ty(e),n}finishDraft(t,e){const n=t&&t[zn];(!n||!n.isManual_)&&Er(9);const{scope_:r}=n;return VE(r,e),ME(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=jo("Patches").applyPatches_;return Fo(t)?r(t,e):this.produce(t,i=>r(i,e))}};function ry(t,e){const n=qd(t)?jo("MapSet").proxyMap_(t,e):Kd(t)?jo("MapSet").proxySet_(t,e):mV(t,e);return(e?e.scope_:rI()).drafts_.push(n),n}function vV(t){return Fo(t)||Er(10,t),sI(t)}function sI(t){if(!Li(t)||Gd(t))return t;const e=t[zn];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Zg(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Zg(t,!0);return Zf(n,(r,i)=>{nI(n,r,sI(i))}),e&&(e.finalized_=!1),n}var Bn=new yV,oI=Bn.produce;Bn.produceWithPatches.bind(Bn);Bn.setAutoFreeze.bind(Bn);Bn.setUseStrictShallowCopy.bind(Bn);Bn.applyPatches.bind(Bn);Bn.createDraft.bind(Bn);Bn.finishDraft.bind(Bn);function aI(t){return({dispatch:n,getState:r})=>i=>a=>typeof a=="function"?a(n,r,t):i(a)}var _V=aI(),wV=aI,EV=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Jf:Jf.apply(null,arguments)};function FE(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(Di(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>lV(r)&&r.type===t,n}var lI=class Lu extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Lu.prototype)}static get[Symbol.species](){return Lu}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Lu(...e[0].concat(this)):new Lu(...e.concat(this))}};function jE(t){return Li(t)?oI(t,()=>{}):t}function nf(t,e,n){return t.has(e)?t.get(e):t.set(e,n(e)).get(e)}function TV(t){return typeof t=="boolean"}var SV=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:a=!0}=e??{};let l=new lI;return n&&(TV(n)?l.push(_V):l.push(wV(n.extraArgument))),l},xV="RTK_autoBatch",UE=t=>e=>{setTimeout(e,t)},IV=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,a=!1,l=!1;const c=new Set,h=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:UE(10):t.type==="callback"?t.queueNotification:UE(t.timeout),p=()=>{l=!1,a&&(a=!1,c.forEach(m=>m()))};return Object.assign({},r,{subscribe(m){const y=()=>i&&m(),w=r.subscribe(y);return c.add(m),()=>{w(),c.delete(m)}},dispatch(m){var y;try{return i=!((y=m==null?void 0:m.meta)!=null&&y[xV]),a=!i,a&&(l||(l=!0,h(p))),r.dispatch(m)}finally{i=!0}}})},AV=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new lI(t);return r&&i.push(IV(typeof r=="object"?r:void 0)),i};function CV(t){const e=SV(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:l=void 0,enhancers:c=void 0}=t;let h;if(typeof n=="function")h=n;else if(wv(n))h=oV(n);else throw new Error(Di(1));let p;typeof r=="function"?p=r(e):p=e();let m=Jf;i&&(m=EV({trace:!1,...typeof i=="object"&&i}));const y=aV(...p),w=AV(y);let T=typeof c=="function"?c(w):w();const x=m(...T);return Z1(h,l,x)}function uI(t){const e={},n=[];let r;const i={addCase(a,l){const c=typeof a=="string"?a:a.type;if(!c)throw new Error(Di(28));if(c in e)throw new Error(Di(29));return e[c]=l,i},addMatcher(a,l){return n.push({matcher:a,reducer:l}),i},addDefaultCase(a){return r=a,i}};return t(i),[e,n,r]}function PV(t){return typeof t=="function"}function kV(t,e){let[n,r,i]=uI(e),a;if(PV(t))a=()=>jE(t());else{const c=jE(t);a=()=>c}function l(c=a(),h){let p=[n[h.type],...r.filter(({matcher:m})=>m(h)).map(({reducer:m})=>m)];return p.filter(m=>!!m).length===0&&(p=[i]),p.reduce((m,y)=>{if(y)if(Fo(m)){const T=y(m,h);return T===void 0?m:T}else{if(Li(m))return oI(m,w=>y(w,h));{const w=y(m,h);if(w===void 0){if(m===null)return m;throw Error("A case reducer on a non-draftable value must not return undefined")}return w}}return m},c)}return l.getInitialState=a,l}var RV=Symbol.for("rtk-slice-createasyncthunk");function bV(t,e){return`${t}/${e}`}function DV({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[RV];return function(i){const{name:a,reducerPath:l=a}=i;if(!a)throw new Error(Di(11));const c=(typeof i.reducers=="function"?i.reducers(LV()):i.reducers)||{},h=Object.keys(c),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},m={addCase(U,H){const X=typeof U=="string"?U:U.type;if(!X)throw new Error(Di(12));if(X in p.sliceCaseReducersByType)throw new Error(Di(13));return p.sliceCaseReducersByType[X]=H,m},addMatcher(U,H){return p.sliceMatchers.push({matcher:U,reducer:H}),m},exposeAction(U,H){return p.actionCreators[U]=H,m},exposeCaseReducer(U,H){return p.sliceCaseReducersByName[U]=H,m}};h.forEach(U=>{const H=c[U],X={reducerName:U,type:bV(a,U),createNotation:typeof i.reducers=="function"};OV(H)?jV(X,H,m,e):MV(X,H,m)});function y(){const[U={},H=[],X=void 0]=typeof i.extraReducers=="function"?uI(i.extraReducers):[i.extraReducers],C={...U,...p.sliceCaseReducersByType};return kV(i.initialState,I=>{for(let k in C)I.addCase(k,C[k]);for(let k of p.sliceMatchers)I.addMatcher(k.matcher,k.reducer);for(let k of H)I.addMatcher(k.matcher,k.reducer);X&&I.addDefaultCase(X)})}const w=U=>U,T=new Map,x=new WeakMap;let P;function R(U,H){return P||(P=y()),P(U,H)}function b(){return P||(P=y()),P.getInitialState()}function O(U,H=!1){function X(I){let k=I[U];return typeof k>"u"&&H&&(k=nf(x,X,b)),k}function C(I=w){const k=nf(T,H,()=>new WeakMap);return nf(k,I,()=>{const D={};for(const[M,B]of Object.entries(i.selectors??{}))D[M]=NV(B,I,()=>nf(x,I,b),H);return D})}return{reducerPath:U,getSelectors:C,get selectors(){return C(X)},selectSlice:X}}const $={name:a,reducer:R,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:b,...O(l),injectInto(U,{reducerPath:H,...X}={}){const C=H??l;return U.inject({reducerPath:C,reducer:R},X),{...$,...O(C,!0)}}};return $}}function NV(t,e,n,r){function i(a,...l){let c=e(a);return typeof c>"u"&&r&&(c=n()),t(c,...l)}return i.unwrapped=t,i}var VV=DV();function LV(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function MV({type:t,reducerName:e,createNotation:n},r,i){let a,l;if("reducer"in r){if(n&&!FV(r))throw new Error(Di(17));a=r.reducer,l=r.prepare}else a=r;i.addCase(t,a).exposeCaseReducer(e,a).exposeAction(e,l?FE(t,l):FE(t))}function OV(t){return t._reducerDefinitionType==="asyncThunk"}function FV(t){return t._reducerDefinitionType==="reducerWithPrepare"}function jV({type:t,reducerName:e},n,r,i){if(!i)throw new Error(Di(18));const{payloadCreator:a,fulfilled:l,pending:c,rejected:h,settled:p,options:m}=n,y=i(t,a,m);r.exposeAction(e,y),l&&r.addCase(y.fulfilled,l),c&&r.addCase(y.pending,c),h&&r.addCase(y.rejected,h),p&&r.addMatcher(y.settled,p),r.exposeCaseReducer(e,{fulfilled:l||rf,pending:c||rf,rejected:h||rf,settled:p||rf})}function rf(){}function Di(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var br=function(e){return"@@redux-saga/"+e},UV=br("CANCEL_PROMISE"),cI=br("CHANNEL_END"),hI=br("IO"),$E=br("MATCH"),fI=br("MULTICAST"),dI=br("SAGA_ACTION"),$V=br("SELF_CANCELLATION"),zV=br("TASK"),Za=br("TASK_CANCEL"),pI=br("TERMINATE"),BV=br("LOCATION");function nd(){return nd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},nd.apply(null,arguments)}function WV(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}var mI=function(e){return e==null},Tf=function(e){return e!=null},Pn=function(e){return typeof e=="function"},Sv=function(e){return typeof e=="string"},Ks=Array.isArray,Yd=function(e){return e&&Pn(e.then)},xv=function(e){return e&&Pn(e.next)&&Pn(e.throw)},zE=function t(e){return e&&(Sv(e)||yI(e)||Pn(e)||Ks(e)&&e.every(t))},Iv=function(e){return e&&Pn(e.take)&&Pn(e.close)},gI=function(e){return Pn(e)&&e.hasOwnProperty("toString")},yI=function(e){return!!e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype},HV=function(e){return Iv(e)&&e[fI]},qV=function(e){return function(){return e}},KV=qV(!0),gn=function(){},vI=function(e){return e},Av=function(e,n){nd(e,n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(n).forEach(function(r){e[r]=n[r]})},GV=function(e,n){var r;return(r=[]).concat.apply(r,n.map(e))};function Qd(t,e){var n=t.indexOf(e);n>=0&&t.splice(n,1)}function YV(t){var e=!1;return function(){e||(e=!0,t())}}var QV=function(e){throw e},XV=function(e){return{value:e,done:!0}};function iy(t,e,n){e===void 0&&(e=QV),n===void 0&&(n="iterator");var r={meta:{name:n},next:t,throw:e,return:XV,isSagaIterator:!0};return typeof Symbol<"u"&&(r[Symbol.iterator]=function(){return r}),r}function JV(t,e){var n=e.sagaStack;console.error(t),console.error(n)}var _I=function(e){return Array.apply(null,new Array(e))},ZV=function(e){return function(n){return e(Object.defineProperty(n,dI,{value:!0}))}},wI=function(e){return e===pI},EI=function(e){return e===Za},TI=function(e){return wI(e)||EI(e)};function SI(t,e){var n=Object.keys(t),r=n.length,i=0,a,l=Ks(t)?_I(r):{},c={};function h(){i===r&&(a=!0,e(l))}return n.forEach(function(p){var m=function(w,T){a||(T||TI(w)?(e.cancel(),e(w,T)):(l[p]=w,i++,h()))};m.cancel=gn,c[p]=m}),e.cancel=function(){a||(a=!0,n.forEach(function(p){return c[p].cancel()}))},c}function Cv(t){return{name:t.name||"anonymous",location:xI(t)}}function xI(t){return t[BV]}function eL(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}var tL="Channel's Buffer overflow!",nL=1,rL=3,II=4;function iL(t,e){t===void 0&&(t=10);var n=new Array(t),r=0,i=0,a=0,l=function(m){n[i]=m,i=(i+1)%t,r++},c=function(){if(r!=0){var m=n[a];return n[a]=null,r--,a=(a+1)%t,m}},h=function(){for(var m=[];r;)m.push(c());return m};return{isEmpty:function(){return r==0},put:function(m){if(r<t)l(m);else{var y;switch(e){case nL:throw new Error(tL);case rL:n[i]=m,i=(i+1)%t,a=i;break;case II:y=2*t,n=h(),r=n.length,i=n.length,a=0,n.length=y,t=y,l(m);break}}},take:c,flush:h}}var sL=function(e){return iL(e,II)},Sf="TAKE",AI="PUT",oL="ALL",aL="RACE",lL="CALL",uL="CPS",CI="FORK",cL="JOIN",hL="CANCEL",PI="SELECT",fL="ACTION_CHANNEL",dL="CANCELLED",pL="FLUSH",mL="GET_CONTEXT",gL="SET_CONTEXT",el=function(e,n){var r;return r={},r[hI]=!0,r.combinator=!1,r.type=e,r.payload=n,r};function yL(t,e){if(t===void 0&&(t="*"),zE(t))return Tf(e)&&console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"),el(Sf,{pattern:t});if(HV(t)&&Tf(e)&&zE(e))return el(Sf,{channel:t,pattern:e});if(Iv(t))return Tf(e)&&console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."),el(Sf,{channel:t})}function kI(t,e){return mI(e)&&(e=t,t=void 0),el(AI,{channel:t,action:e})}function vL(t,e){var n=null,r;return Pn(t)?r=t:(Ks(t)?(n=t[0],r=t[1]):(n=t.context,r=t.fn),n&&Sv(r)&&Pn(n[r])&&(r=n[r])),{context:n,fn:r,args:e}}function RI(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return el(CI,vL(t,n))}function bI(t){t===void 0&&(t=vI);for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return el(PI,{selector:t,args:n})}function _L(){var t={};return t.promise=new Promise(function(e,n){t.resolve=e,t.reject=n}),t}var DI=[],Xd=0;function wL(t){try{Pv(),t()}finally{LI()}}function NI(t){DI.push(t),Xd||(Pv(),MI())}function VI(t){try{return Pv(),t()}finally{MI()}}function Pv(){Xd++}function LI(){Xd--}function MI(){LI();for(var t;!Xd&&(t=DI.shift())!==void 0;)wL(t)}var EL=function(e){return function(n){return e.some(function(r){return kv(r)(n)})}},TL=function(e){return function(n){return e(n)}},BE=function(e){return function(n){return n.type===String(e)}},SL=function(e){return function(n){return n.type===e}},OI=function(){return KV};function kv(t){var e=t==="*"?OI:Sv(t)?BE:Ks(t)?EL:gI(t)?BE:Pn(t)?TL:yI(t)?SL:null;if(e===null)throw new Error("invalid pattern: "+t);return e(t)}var Bu={type:cI},Rv=function(e){return e&&e.type===cI};function xL(t){t===void 0&&(t=sL());var e=!1,n=[];function r(c){if(!e){if(n.length===0)return t.put(c);var h=n.shift();h(c)}}function i(c){e&&t.isEmpty()?c(Bu):t.isEmpty()?(n.push(c),c.cancel=function(){Qd(n,c)}):c(t.take())}function a(c){if(e&&t.isEmpty()){c(Bu);return}c(t.flush())}function l(){if(!e){e=!0;var c=n;n=[];for(var h=0,p=c.length;h<p;h++){var m=c[h];m(Bu)}}}return{take:i,put:r,flush:a,close:l}}function IL(){var t,e=!1,n=[],r=n,i=function(){r===n&&(r=n.slice())},a=function(){e=!0;var c=n=r;r=[],c.forEach(function(h){h(Bu)})};return t={},t[fI]=!0,t.put=function(c){if(!e){if(Rv(c)){a();return}for(var h=n=r,p=0,m=h.length;p<m;p++){var y=h[p];y[$E](c)&&(y.cancel(),y(c))}}},t.take=function(c,h){if(h===void 0&&(h=OI),e){c(Bu);return}c[$E]=h,i(),r.push(c),c.cancel=YV(function(){i(),Qd(r,c)})},t.close=a,t}function FI(){var t=IL(),e=t.put;return t.put=function(n){if(n[dI]){e(n);return}NI(function(){e(n)})},t}var ko=0,Ci=1,xf=2,jI=3;function bv(t,e){var n=t[UV];Pn(n)&&(e.cancel=n),t.then(e,function(r){e(r,!0)})}var Ec=0,UI=function(){return++Ec},Qt;function AL(t,e){return t.isSagaIterator?{name:t.meta.name}:Cv(e)}function CL(t){var e=t.context,n=t.fn,r=t.args;try{var i=n.apply(e,r);if(xv(i))return i;var a=!1,l=function(h){return a?{value:h,done:!0}:(a=!0,{value:i,done:!Yd(i)})};return iy(l)}catch(c){return iy(function(){throw c})}}function PL(t,e,n){var r=e.channel,i=e.action,a=e.resolve;NI(function(){var l;try{l=(r?r.put:t.dispatch)(i)}catch(c){n(c,!0);return}a&&Yd(l)?bv(l,n):n(l)})}function kL(t,e,n){var r=e.channel,i=r===void 0?t.channel:r,a=e.pattern,l=e.maybe,c=function(p){if(p instanceof Error){n(p,!0);return}if(Rv(p)&&!l){n(pI);return}n(p)};try{i.take(c,Tf(a)?kv(a):null)}catch(h){n(h,!0);return}n.cancel=c.cancel}function RL(t,e,n,r){var i=e.context,a=e.fn,l=e.args,c=r.task;try{var h=a.apply(i,l);if(Yd(h)){bv(h,n);return}if(xv(h)){Jd(t,h,c.context,Ec,Cv(a),!1,n);return}n(h)}catch(p){n(p,!0)}}function bL(t,e,n){var r=e.context,i=e.fn,a=e.args;try{var l=function(h,p){mI(h)?n(p):n(h,!0)};i.apply(r,a.concat(l)),l.cancel&&(n.cancel=l.cancel)}catch(c){n(c,!0)}}function DL(t,e,n,r){var i=e.context,a=e.fn,l=e.args,c=e.detached,h=r.task,p=CL({context:i,fn:a,args:l}),m=AL(p,a);VI(function(){var y=Jd(t,p,h.context,Ec,m,c,void 0);c?n(y):y.isRunning()?(h.queue.addTask(y),n(y)):y.isAborted()?h.queue.abort(y.error()):n(y)})}function NL(t,e,n,r){var i=r.task,a=function(h,p){if(h.isRunning()){var m={task:i,cb:p};p.cancel=function(){h.isRunning()&&Qd(h.joiners,m)},h.joiners.push(m)}else h.isAborted()?p(h.error(),!0):p(h.result())};if(Ks(e)){if(e.length===0){n([]);return}var l=SI(e,n);e.forEach(function(c,h){a(c,l[h])})}else a(e,n)}function dg(t){t.isRunning()&&t.cancel()}function VL(t,e,n,r){var i=r.task;e===$V?dg(i):Ks(e)?e.forEach(dg):dg(e),n()}function LL(t,e,n,r){var i=r.digestEffect,a=Ec,l=Object.keys(e);if(l.length===0){n(Ks(e)?[]:{});return}var c=SI(e,n);l.forEach(function(h){i(e[h],a,c[h],h)})}function ML(t,e,n,r){var i=r.digestEffect,a=Ec,l=Object.keys(e),c=Ks(e)?_I(l.length):{},h={},p=!1;l.forEach(function(m){var y=function(T,x){p||(x||TI(T)?(n.cancel(),n(T,x)):(n.cancel(),p=!0,c[m]=T,n(c)))};y.cancel=gn,h[m]=y}),n.cancel=function(){p||(p=!0,l.forEach(function(m){return h[m].cancel()}))},l.forEach(function(m){p||i(e[m],a,h[m],m)})}function OL(t,e,n){var r=e.selector,i=e.args;try{var a=r.apply(void 0,[t.getState()].concat(i));n(a)}catch(l){n(l,!0)}}function FL(t,e,n){var r=e.pattern,i=e.buffer,a=xL(i),l=kv(r),c=function p(m){Rv(m)||t.channel.take(p,l),a.put(m)},h=a.close;a.close=function(){c.cancel(),h()},t.channel.take(c,l),n(a)}function jL(t,e,n,r){var i=r.task;n(i.isCancelled())}function UL(t,e,n){e.flush(n)}function $L(t,e,n,r){var i=r.task;n(i.context[e])}function zL(t,e,n,r){var i=r.task;Av(i.context,e),n()}var BL=(Qt={},Qt[Sf]=kL,Qt[AI]=PL,Qt[oL]=LL,Qt[aL]=ML,Qt[lL]=RL,Qt[uL]=bL,Qt[CI]=DL,Qt[cL]=NL,Qt[hL]=VL,Qt[PI]=OL,Qt[fL]=FL,Qt[dL]=jL,Qt[pL]=UL,Qt[mL]=$L,Qt[gL]=zL,Qt);function WL(t,e,n){var r=[],i,a=!1;h(t);var l=function(){return r};function c(m){e(),p(),n(m,!0)}function h(m){r.push(m),m.cont=function(y,w){a||(Qd(r,m),m.cont=gn,w?c(y):(m===t&&(i=y),r.length||(a=!0,n(i))))}}function p(){a||(a=!0,r.forEach(function(m){m.cont=gn,m.cancel()}),r=[])}return{addTask:h,cancelAll:p,abort:c,getTasks:l}}function $I(t,e){return t+"?"+e}function HL(t){var e=xI(t);if(e){var n=e.code,r=e.fileName,i=e.lineNumber,a=n+"  "+$I(r,i);return a}return""}function WE(t){var e=t.name,n=t.location;return n?e+"  "+$I(n.fileName,n.lineNumber):e}function qL(t){var e=GV(function(n){return n.cancelledTasks},t);return e.length?["Tasks cancelled due to error:"].concat(e).join(`
`):""}var Dv=null,Wu=[],KL=function(e){e.crashedEffect=Dv,Wu.push(e)},zI=function(){Dv=null,Wu.length=0},GL=function(e){Dv=e},YL=function(){var e=Wu[0],n=Wu.slice(1),r=e.crashedEffect?HL(e.crashedEffect):null,i="The above error occurred in task "+WE(e.meta)+(r?` 
 when executing effect `+r:"");return[i].concat(n.map(function(a){return"    created by "+WE(a.meta)}),[qL(Wu)]).join(`
`)};function QL(t,e,n,r,i,a,l){var c;l===void 0&&(l=gn);var h=ko,p,m,y=null,w=[],T=Object.create(n),x=WL(e,function(){w.push.apply(w,x.getTasks().map(function(H){return H.meta.name}))},R);function P(){h===ko&&(h=Ci,x.cancelAll(),R(Za,!1))}function R(U,H){if(!H)U===Za?h=Ci:h!==Ci&&(h=jI),p=U,y&&y.resolve(U);else{if(h=xf,KL({meta:i,cancelledTasks:w}),$.isRoot){var X=YL();zI(),t.onError(U,{sagaStack:X})}m=U,y&&y.reject(U)}$.cont(U,H),$.joiners.forEach(function(C){C.cb(U,H)}),$.joiners=null}function b(U){Av(T,U)}function O(){return y||(y=_L(),h===xf?y.reject(m):h!==ko&&y.resolve(p)),y.promise}var $=(c={},c[zV]=!0,c.id=r,c.meta=i,c.isRoot=a,c.context=T,c.joiners=[],c.queue=x,c.cancel=P,c.cont=l,c.end=R,c.setContext=b,c.toPromise=O,c.isRunning=function(){return h===ko},c.isCancelled=function(){return h===Ci||h===ko&&e.status===Ci},c.isAborted=function(){return h===xf},c.result=function(){return p},c.error=function(){return m},c);return $}function Jd(t,e,n,r,i,a,l){var c=t.finalizeRunEffect(T);w.cancel=gn;var h={meta:i,cancel:y,status:ko},p=QL(t,h,n,r,i,a,l),m={task:p,digestEffect:x};function y(){h.status===ko&&(h.status=Ci,w(Za))}return l&&(l.cancel=p.cancel),w(),p;function w(P,R){try{var b;R?(b=e.throw(P),zI()):EI(P)?(h.status=Ci,w.cancel(),b=Pn(e.return)?e.return(Za):{done:!0,value:Za}):wI(P)?b=Pn(e.return)?e.return():{done:!0}:b=e.next(P),b.done?(h.status!==Ci&&(h.status=jI),h.cont(b.value)):x(b.value,r,w)}catch(O){if(h.status===Ci)throw O;h.status=xf,h.cont(O,!0)}}function T(P,R,b){if(Yd(P))bv(P,b);else if(xv(P))Jd(t,P,p.context,R,i,!1,b);else if(P&&P[hI]){var O=BL[P.type];O(t,P.payload,b,m)}else b(P)}function x(P,R,b,O){O===void 0&&(O="");var $=UI();t.sagaMonitor&&t.sagaMonitor.effectTriggered({effectId:$,parentEffectId:R,label:O,effect:P});var U;function H(X,C){U||(U=!0,b.cancel=gn,t.sagaMonitor&&(C?t.sagaMonitor.effectRejected($,X):t.sagaMonitor.effectResolved($,X)),C&&GL(P),b(X,C))}H.cancel=gn,b.cancel=function(){U||(U=!0,H.cancel(),H.cancel=gn,t.sagaMonitor&&t.sagaMonitor.effectCancelled($))},c(P,$,H)}}function XL(t,e){for(var n=t.channel,r=n===void 0?FI():n,i=t.dispatch,a=t.getState,l=t.context,c=l===void 0?{}:l,h=t.sagaMonitor,p=t.effectMiddlewares,m=t.onError,y=m===void 0?JV:m,w=arguments.length,T=new Array(w>2?w-2:0),x=2;x<w;x++)T[x-2]=arguments[x];var P=e.apply(void 0,T),R=UI();h&&(h.rootSagaStarted=h.rootSagaStarted||gn,h.effectTriggered=h.effectTriggered||gn,h.effectResolved=h.effectResolved||gn,h.effectRejected=h.effectRejected||gn,h.effectCancelled=h.effectCancelled||gn,h.actionDispatched=h.actionDispatched||gn,h.rootSagaStarted({effectId:R,saga:e,args:T}));var b;if(p){var O=eL.apply(void 0,p);b=function(H){return function(X,C,I){var k=function(M){return H(M,C,I)};return O(k)(X)}}}else b=vI;var $={channel:r,dispatch:ZV(i),getState:a,sagaMonitor:h,onError:y,finalizeRunEffect:b};return VI(function(){var U=Jd($,P,c,R,Cv(e),!0,void 0);return h&&h.effectResolved(R,U),U})}function JL(t){var e={},n=e.context,r=n===void 0?{}:n,i=e.channel,a=i===void 0?FI():i,l=e.sagaMonitor,c=WV(e,["context","channel","sagaMonitor"]),h;function p(m){var y=m.getState,w=m.dispatch;return h=XL.bind(null,nd({},c,{context:r,channel:a,dispatch:w,getState:y,sagaMonitor:l})),function(T){return function(x){l&&l.actionDispatched&&l.actionDispatched(x);var P=T(x);return a.put(x),P}}}return p.run=function(){return h.apply(void 0,arguments)},p.setContext=function(m){Av(r,m)},p}const ZL="abcdefghijklmnopqrstuvwxyz".split(""),eM="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),BI="kiddoo_app_state",tM=()=>{try{const t=localStorage.getItem(BI);return t===null?void 0:JSON.parse(t)}catch{return}},vr=t=>{try{const e=JSON.stringify(t);localStorage.setItem(BI,e)}catch{}},dt={score:0,streak:0},oe=tM();var d1,p1,m1,g1,y1,v1,_1,w1,E1,T1,S1,x1,I1,A1,C1,P1,k1,R1,b1,D1,N1,V1,L1,M1;const nM={selectedAlphabet:"",bigAlphabets:eM,smallAlphabets:ZL,alphabets:[],loading:!1,userStats:(oe==null?void 0:oe.userStats)||{score:0,streak:0,lastPlayed:null},gameStats:{math:{...dt,...(d1=oe==null?void 0:oe.gameStats)==null?void 0:d1.math},spelling:{...dt,...(p1=oe==null?void 0:oe.gameStats)==null?void 0:p1.spelling},missing_letters:{...dt,...(m1=oe==null?void 0:oe.gameStats)==null?void 0:m1.missing_letters},comparison:{...dt,...(g1=oe==null?void 0:oe.gameStats)==null?void 0:g1.comparison},sorting:{...dt,...(y1=oe==null?void 0:oe.gameStats)==null?void 0:y1.sorting},alphabet:{...dt,...(v1=oe==null?void 0:oe.gameStats)==null?void 0:v1.alphabet},sight_words:{...dt,...(_1=oe==null?void 0:oe.gameStats)==null?void 0:_1.sight_words},sudoku:{...dt,...(w1=oe==null?void 0:oe.gameStats)==null?void 0:w1.sudoku},alphabet_hindi:{...dt,...(E1=oe==null?void 0:oe.gameStats)==null?void 0:E1.alphabet_hindi},alphabet_telugu:{...dt,...(T1=oe==null?void 0:oe.gameStats)==null?void 0:T1.alphabet_telugu},weeks_english:{...dt,...(S1=oe==null?void 0:oe.gameStats)==null?void 0:S1.weeks_english},weeks_telugu:{...dt,...(x1=oe==null?void 0:oe.gameStats)==null?void 0:x1.weeks_telugu},months_english:{...dt,...(I1=oe==null?void 0:oe.gameStats)==null?void 0:I1.months_english},shapes:{...dt,...(A1=oe==null?void 0:oe.gameStats)==null?void 0:A1.shapes},body_parts:{...dt,...(C1=oe==null?void 0:oe.gameStats)==null?void 0:C1.body_parts},sense_organs:{...dt,...(P1=oe==null?void 0:oe.gameStats)==null?void 0:P1.sense_organs},weeks_hindi:{...dt,...(k1=oe==null?void 0:oe.gameStats)==null?void 0:k1.weeks_hindi},numbers_english_spelling:{...dt,...(R1=oe==null?void 0:oe.gameStats)==null?void 0:R1.numbers_english_spelling},numbers_hindi:{...dt,...(b1=oe==null?void 0:oe.gameStats)==null?void 0:b1.numbers_hindi},numbers_telugu:{...dt,...(D1=oe==null?void 0:oe.gameStats)==null?void 0:D1.numbers_telugu},months_telugu:{...dt,...(N1=oe==null?void 0:oe.gameStats)==null?void 0:N1.months_telugu},months_hindi:{...dt,...(V1=oe==null?void 0:oe.gameStats)==null?void 0:V1.months_hindi},place_values:{...dt,...(L1=oe==null?void 0:oe.gameStats)==null?void 0:L1.place_values},master_test:{...dt,...(M1=oe==null?void 0:oe.gameStats)==null?void 0:M1.master_test}},isMobileMenuOpen:!1,isMuted:(oe==null?void 0:oe.isMuted)??!1,currentMode:(oe==null?void 0:oe.currentMode)??null,theme:(oe==null?void 0:oe.theme)||"light",fontSizeLevel:(oe==null?void 0:oe.fontSizeLevel)||"large",userName:(oe==null?void 0:oe.userName)||"",user:null},WI=VV({name:"alphabet",initialState:nM,reducers:{getAlphabets:t=>{t.loading=!0},setAlphabets:(t,e)=>{t.loading=!1,t.alphabets=e.payload},getSelectedAlphabet:t=>{t.loading=!0},setSelectedAlphabet:(t,e)=>{t.selectedAlphabet=e.payload,t.loading=!1},incrementScore:(t,e)=>{const n=e==null?void 0:e.payload;t.userStats.score+=10,t.userStats.streak+=1,t.userStats.lastPlayed=new Date().toISOString(),n&&t.gameStats&&t.gameStats[n]&&(t.gameStats[n].score+=10,t.gameStats[n].streak+=1),vr(t)},resetStreak:(t,e)=>{const n=e==null?void 0:e.payload;t.userStats.streak=0,n&&t.gameStats&&t.gameStats[n]&&(t.gameStats[n].streak=0),vr(t)},toggleMobileMenu:t=>{t.isMobileMenuOpen=!t.isMobileMenuOpen},closeMobileMenu:t=>{t.isMobileMenuOpen=!1},toggleMute:t=>{t.isMuted=!t.isMuted,vr(t)},toggleTheme:t=>{t.theme=t.theme==="light"?"dark":"light",vr(t)},setFontSizeLevel:(t,e)=>{t.fontSizeLevel=e.payload,vr(t)},setMode:(t,e)=>{t.currentMode=e.payload,vr(t)},setUserName:(t,e)=>{t.userName=e.payload,vr(t)},setUser:(t,e)=>{var n;t.user=e.payload,(n=e.payload)!=null&&n.displayName&&(!t.userName||t.userName==="Explorer")&&(t.userName=e.payload.displayName),vr(t)},logout:t=>{t.user=null,t.userName="",vr(t)},resetAll:t=>{t.userStats={score:0,streak:0,lastPlayed:null},t.gameStats={math:{score:0,streak:0},spelling:{score:0,streak:0},missing_letters:{score:0,streak:0},comparison:{score:0,streak:0},sorting:{score:0,streak:0},alphabet:{score:0,streak:0},sight_words:{score:0,streak:0},sudoku:{score:0,streak:0},alphabet_hindi:{score:0,streak:0},alphabet_telugu:{score:0,streak:0},weeks_english:{score:0,streak:0},weeks_telugu:{score:0,streak:0},months_english:{score:0,streak:0},shapes:{score:0,streak:0},body_parts:{score:0,streak:0},sense_organs:{score:0,streak:0},weeks_hindi:{score:0,streak:0},numbers_english_spelling:{score:0,streak:0},numbers_hindi:{score:0,streak:0},numbers_telugu:{score:0,streak:0},months_telugu:{score:0,streak:0},months_hindi:{score:0,streak:0},place_values:{score:0,streak:0},master_test:{score:0,streak:0}},vr(t)},setStreak:(t,e)=>{const{gameId:n,streak:r}=e.payload;t.gameStats&&t.gameStats[n]&&(t.gameStats[n].streak=r),vr(t)}}}),{getAlphabets:rM,setAlphabets:iM,getSelectedAlphabet:sM,setSelectedAlphabet:oM,incrementScore:c7,resetStreak:h7,toggleMobileMenu:aM,closeMobileMenu:f7,toggleMute:lM,toggleTheme:uM,setFontSizeLevel:pg,setMode:d7,setUserName:cM,setUser:HE,logout:hM,resetAll:p7,setStreak:m7}=WI.actions,fM=WI.reducer;var qE=function(e){return{done:!0,value:e}},mg={};function dM(t){return Iv(t)?"channel":gI(t)?String(t):Pn(t)?t.name:String(t)}function pM(t,e,n){var r,i,a,l=e;function c(h,p){if(l===mg)return qE(h);if(p&&!i)throw l=mg,p;r&&r(h);var m=p?t[i](p):t[l]();return l=m.nextState,a=m.effect,r=m.stateUpdater,i=m.errorState,l===mg?qE(h):a}return iy(c,function(h){return c(null,h)},n)}function mM(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a={done:!1,value:yL(t)},l=function(m){return{done:!1,value:RI.apply(void 0,[e].concat(r,[m]))}},c,h=function(m){return c=m};return pM({q1:function(){return{nextState:"q2",effect:a,stateUpdater:h}},q2:function(){return{nextState:"q1",effect:l(c)}}},"q1","takeEvery("+dM(t)+", "+e.name+")")}function KE(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return RI.apply(void 0,[mM,t,e].concat(r))}function*gM(){const t=yield bI(e=>e.alphabet.bigAlphabets.concat(e.alphabet.smallAlphabets));yield kI(iM(t))}function*yM(){const t=yield bI(r=>r.alphabet.bigAlphabets.concat(r.alphabet.smallAlphabets)),e=Math.floor(Math.random()*t.length),n=t[e];yield kI(oM(n))}function*vM(){yield KE(rM.type,gM),yield KE(sM.type,yM)}const HI=JL(),_M=CV({reducer:{alphabet:fM},middleware:t=>t({thunk:!1}).concat(HI)});HI.run(vM);var Wt=function(){return Wt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Wt.apply(this,arguments)};function ul(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,a;r<i;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return t.concat(a||Array.prototype.slice.call(e))}var ut="-ms-",Hu="-moz-",Ye="-webkit-",qI="comm",Zd="rule",Nv="decl",wM="@import",KI="@keyframes",EM="@layer",GI=Math.abs,Vv=String.fromCharCode,sy=Object.assign;function TM(t,e){return Bt(t,0)^45?(((e<<2^Bt(t,0))<<2^Bt(t,1))<<2^Bt(t,2))<<2^Bt(t,3):0}function YI(t){return t.trim()}function Ai(t,e){return(t=e.exec(t))?t[0]:t}function Ve(t,e,n){return t.replace(e,n)}function If(t,e,n){return t.indexOf(e,n)}function Bt(t,e){return t.charCodeAt(e)|0}function cl(t,e,n){return t.slice(e,n)}function Jr(t){return t.length}function QI(t){return t.length}function Mu(t,e){return e.push(t),t}function SM(t,e){return t.map(e).join("")}function GE(t,e){return t.filter(function(n){return!Ai(n,e)})}var ep=1,hl=1,XI=0,ir=0,Rt=0,Il="";function tp(t,e,n,r,i,a,l,c){return{value:t,root:e,parent:n,type:r,props:i,children:a,line:ep,column:hl,length:l,return:"",siblings:c}}function _s(t,e){return sy(tp("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function $a(t){for(;t.root;)t=_s(t.root,{children:[t]});Mu(t,t.siblings)}function xM(){return Rt}function IM(){return Rt=ir>0?Bt(Il,--ir):0,hl--,Rt===10&&(hl=1,ep--),Rt}function xr(){return Rt=ir<XI?Bt(Il,ir++):0,hl++,Rt===10&&(hl=1,ep++),Rt}function Lo(){return Bt(Il,ir)}function Af(){return ir}function np(t,e){return cl(Il,t,e)}function oy(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function AM(t){return ep=hl=1,XI=Jr(Il=t),ir=0,[]}function CM(t){return Il="",t}function gg(t){return YI(np(ir-1,ay(t===91?t+2:t===40?t+1:t)))}function PM(t){for(;(Rt=Lo())&&Rt<33;)xr();return oy(t)>2||oy(Rt)>3?"":" "}function kM(t,e){for(;--e&&xr()&&!(Rt<48||Rt>102||Rt>57&&Rt<65||Rt>70&&Rt<97););return np(t,Af()+(e<6&&Lo()==32&&xr()==32))}function ay(t){for(;xr();)switch(Rt){case t:return ir;case 34:case 39:t!==34&&t!==39&&ay(Rt);break;case 40:t===41&&ay(t);break;case 92:xr();break}return ir}function RM(t,e){for(;xr()&&t+Rt!==57;)if(t+Rt===84&&Lo()===47)break;return"/*"+np(e,ir-1)+"*"+Vv(t===47?t:xr())}function bM(t){for(;!oy(Lo());)xr();return np(t,ir)}function DM(t){return CM(Cf("",null,null,null,[""],t=AM(t),0,[0],t))}function Cf(t,e,n,r,i,a,l,c,h){for(var p=0,m=0,y=l,w=0,T=0,x=0,P=1,R=1,b=1,O=0,$="",U=i,H=a,X=r,C=$;R;)switch(x=O,O=xr()){case 40:if(x!=108&&Bt(C,y-1)==58){If(C+=Ve(gg(O),"&","&\f"),"&\f",GI(p?c[p-1]:0))!=-1&&(b=-1);break}case 34:case 39:case 91:C+=gg(O);break;case 9:case 10:case 13:case 32:C+=PM(x);break;case 92:C+=kM(Af()-1,7);continue;case 47:switch(Lo()){case 42:case 47:Mu(NM(RM(xr(),Af()),e,n,h),h);break;default:C+="/"}break;case 123*P:c[p++]=Jr(C)*b;case 125*P:case 59:case 0:switch(O){case 0:case 125:R=0;case 59+m:b==-1&&(C=Ve(C,/\f/g,"")),T>0&&Jr(C)-y&&Mu(T>32?QE(C+";",r,n,y-1,h):QE(Ve(C," ","")+";",r,n,y-2,h),h);break;case 59:C+=";";default:if(Mu(X=YE(C,e,n,p,m,i,c,$,U=[],H=[],y,a),a),O===123)if(m===0)Cf(C,e,X,X,U,a,y,c,H);else switch(w===99&&Bt(C,3)===110?100:w){case 100:case 108:case 109:case 115:Cf(t,X,X,r&&Mu(YE(t,X,X,0,0,i,c,$,i,U=[],y,H),H),i,H,y,c,r?U:H);break;default:Cf(C,X,X,X,[""],H,0,c,H)}}p=m=T=0,P=b=1,$=C="",y=l;break;case 58:y=1+Jr(C),T=x;default:if(P<1){if(O==123)--P;else if(O==125&&P++==0&&IM()==125)continue}switch(C+=Vv(O),O*P){case 38:b=m>0?1:(C+="\f",-1);break;case 44:c[p++]=(Jr(C)-1)*b,b=1;break;case 64:Lo()===45&&(C+=gg(xr())),w=Lo(),m=y=Jr($=C+=bM(Af())),O++;break;case 45:x===45&&Jr(C)==2&&(P=0)}}return a}function YE(t,e,n,r,i,a,l,c,h,p,m,y){for(var w=i-1,T=i===0?a:[""],x=QI(T),P=0,R=0,b=0;P<r;++P)for(var O=0,$=cl(t,w+1,w=GI(R=l[P])),U=t;O<x;++O)(U=YI(R>0?T[O]+" "+$:Ve($,/&\f/g,T[O])))&&(h[b++]=U);return tp(t,e,n,i===0?Zd:c,h,p,m,y)}function NM(t,e,n,r){return tp(t,e,n,qI,Vv(xM()),cl(t,2,-2),0,r)}function QE(t,e,n,r,i){return tp(t,e,n,Nv,cl(t,0,r),cl(t,r+1,-1),r,i)}function JI(t,e,n){switch(TM(t,e)){case 5103:return Ye+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ye+t+t;case 4789:return Hu+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ye+t+Hu+t+ut+t+t;case 5936:switch(Bt(t,e+11)){case 114:return Ye+t+ut+Ve(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ye+t+ut+Ve(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ye+t+ut+Ve(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Ye+t+ut+t+t;case 6165:return Ye+t+ut+"flex-"+t+t;case 5187:return Ye+t+Ve(t,/(\w+).+(:[^]+)/,Ye+"box-$1$2"+ut+"flex-$1$2")+t;case 5443:return Ye+t+ut+"flex-item-"+Ve(t,/flex-|-self/g,"")+(Ai(t,/flex-|baseline/)?"":ut+"grid-row-"+Ve(t,/flex-|-self/g,""))+t;case 4675:return Ye+t+ut+"flex-line-pack"+Ve(t,/align-content|flex-|-self/g,"")+t;case 5548:return Ye+t+ut+Ve(t,"shrink","negative")+t;case 5292:return Ye+t+ut+Ve(t,"basis","preferred-size")+t;case 6060:return Ye+"box-"+Ve(t,"-grow","")+Ye+t+ut+Ve(t,"grow","positive")+t;case 4554:return Ye+Ve(t,/([^-])(transform)/g,"$1"+Ye+"$2")+t;case 6187:return Ve(Ve(Ve(t,/(zoom-|grab)/,Ye+"$1"),/(image-set)/,Ye+"$1"),t,"")+t;case 5495:case 3959:return Ve(t,/(image-set\([^]*)/,Ye+"$1$`$1");case 4968:return Ve(Ve(t,/(.+:)(flex-)?(.*)/,Ye+"box-pack:$3"+ut+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ye+t+t;case 4200:if(!Ai(t,/flex-|baseline/))return ut+"grid-column-align"+cl(t,e)+t;break;case 2592:case 3360:return ut+Ve(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Ai(r.props,/grid-\w+-end/)})?~If(t+(n=n[e].value),"span",0)?t:ut+Ve(t,"-start","")+t+ut+"grid-row-span:"+(~If(n,"span",0)?Ai(n,/\d+/):+Ai(n,/\d+/)-+Ai(t,/\d+/))+";":ut+Ve(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Ai(r.props,/grid-\w+-start/)})?t:ut+Ve(Ve(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Ve(t,/(.+)-inline(.+)/,Ye+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Jr(t)-1-e>6)switch(Bt(t,e+1)){case 109:if(Bt(t,e+4)!==45)break;case 102:return Ve(t,/(.+:)(.+)-([^]+)/,"$1"+Ye+"$2-$3$1"+Hu+(Bt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~If(t,"stretch",0)?JI(Ve(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Ve(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,l,c,h,p){return ut+i+":"+a+p+(l?ut+i+"-span:"+(c?h:+h-+a)+p:"")+t});case 4949:if(Bt(t,e+6)===121)return Ve(t,":",":"+Ye)+t;break;case 6444:switch(Bt(t,Bt(t,14)===45?18:11)){case 120:return Ve(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ye+(Bt(t,14)===45?"inline-":"")+"box$3$1"+Ye+"$2$3$1"+ut+"$2box$3")+t;case 100:return Ve(t,":",":"+ut)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ve(t,"scroll-","scroll-snap-")+t}return t}function rd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function VM(t,e,n,r){switch(t.type){case EM:if(t.children.length)break;case wM:case Nv:return t.return=t.return||t.value;case qI:return"";case KI:return t.return=t.value+"{"+rd(t.children,r)+"}";case Zd:if(!Jr(t.value=t.props.join(",")))return""}return Jr(n=rd(t.children,r))?t.return=t.value+"{"+n+"}":""}function LM(t){var e=QI(t);return function(n,r,i,a){for(var l="",c=0;c<e;c++)l+=t[c](n,r,i,a)||"";return l}}function MM(t){return function(e){e.root||(e=e.return)&&t(e)}}function OM(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Nv:t.return=JI(t.value,t.length,n);return;case KI:return rd([_s(t,{value:Ve(t.value,"@","@"+Ye)})],r);case Zd:if(t.length)return SM(n=t.props,function(i){switch(Ai(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$a(_s(t,{props:[Ve(i,/:(read-\w+)/,":"+Hu+"$1")]})),$a(_s(t,{props:[i]})),sy(t,{props:GE(n,r)});break;case"::placeholder":$a(_s(t,{props:[Ve(i,/:(plac\w+)/,":"+Ye+"input-$1")]})),$a(_s(t,{props:[Ve(i,/:(plac\w+)/,":"+Hu+"$1")]})),$a(_s(t,{props:[Ve(i,/:(plac\w+)/,ut+"input-$1")]})),$a(_s(t,{props:[i]})),sy(t,{props:GE(n,r)});break}return""})}}var FM={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jn={},fl=typeof process<"u"&&jn!==void 0&&(jn.REACT_APP_SC_ATTR||jn.SC_ATTR)||"data-styled",ZI="active",eA="data-styled-version",rp="6.1.14",Lv=`/*!sc*/
`,id=typeof window<"u"&&"HTMLElement"in window,jM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&jn!==void 0&&jn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&jn.REACT_APP_SC_DISABLE_SPEEDY!==""?jn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&jn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&jn!==void 0&&jn.SC_DISABLE_SPEEDY!==void 0&&jn.SC_DISABLE_SPEEDY!==""&&jn.SC_DISABLE_SPEEDY!=="false"&&jn.SC_DISABLE_SPEEDY),UM={},ip=Object.freeze([]),dl=Object.freeze({});function tA(t,e,n){return n===void 0&&(n=dl),t.theme!==n.theme&&t.theme||e||n.theme}var nA=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),$M=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,zM=/(^-|-$)/g;function XE(t){return t.replace($M,"-").replace(zM,"")}var BM=/(a)(d)/gi,sf=52,JE=function(t){return String.fromCharCode(t+(t>25?39:97))};function ly(t){var e,n="";for(e=Math.abs(t);e>sf;e=e/sf|0)n=JE(e%sf)+n;return(JE(e%sf)+n).replace(BM,"$1-$2")}var yg,rA=5381,Ya=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},iA=function(t){return Ya(rA,t)};function Mv(t){return ly(iA(t)>>>0)}function WM(t){return t.displayName||t.name||"Component"}function vg(t){return typeof t=="string"&&!0}var sA=typeof Symbol=="function"&&Symbol.for,oA=sA?Symbol.for("react.memo"):60115,HM=sA?Symbol.for("react.forward_ref"):60112,qM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},aA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},GM=((yg={})[HM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yg[oA]=aA,yg);function ZE(t){return("type"in(e=t)&&e.type.$$typeof)===oA?aA:"$$typeof"in t?GM[t.$$typeof]:qM;var e}var YM=Object.defineProperty,QM=Object.getOwnPropertyNames,eT=Object.getOwnPropertySymbols,XM=Object.getOwnPropertyDescriptor,JM=Object.getPrototypeOf,tT=Object.prototype;function lA(t,e,n){if(typeof e!="string"){if(tT){var r=JM(e);r&&r!==tT&&lA(t,r,n)}var i=QM(e);eT&&(i=i.concat(eT(e)));for(var a=ZE(t),l=ZE(e),c=0;c<i.length;++c){var h=i[c];if(!(h in KM||n&&n[h]||l&&h in l||a&&h in a)){var p=XM(e,h);try{YM(t,h,p)}catch{}}}}return t}function Uo(t){return typeof t=="function"}function Ov(t){return typeof t=="object"&&"styledComponentId"in t}function Ro(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function sd(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function sc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function uy(t,e,n){if(n===void 0&&(n=!1),!n&&!sc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=uy(t[r],e[r]);else if(sc(e))for(var r in e)t[r]=uy(t[r],e[r]);return t}function Fv(t,e){Object.defineProperty(t,"toString",{value:e})}function $o(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var ZM=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;e>=a;)if((a<<=1)<0)throw $o(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var c=this.indexOfGroup(e+1),h=(l=0,n.length);l<h;l++)this.tag.insertRule(c,n[l])&&(this.groupSizes[e]++,c++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),a=i+r,l=i;l<a;l++)n+="".concat(this.tag.getRule(l)).concat(Lv);return n},t}(),Pf=new Map,od=new Map,kf=1,of=function(t){if(Pf.has(t))return Pf.get(t);for(;od.has(kf);)kf++;var e=kf++;return Pf.set(t,e),od.set(e,t),e},e2=function(t,e){kf=e+1,Pf.set(t,e),od.set(e,t)},t2="style[".concat(fl,"][").concat(eA,'="').concat(rp,'"]'),n2=new RegExp("^".concat(fl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),r2=function(t,e,n){for(var r,i=n.split(","),a=0,l=i.length;a<l;a++)(r=i[a])&&t.registerName(e,r)},i2=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Lv),i=[],a=0,l=r.length;a<l;a++){var c=r[a].trim();if(c){var h=c.match(n2);if(h){var p=0|parseInt(h[1],10),m=h[2];p!==0&&(e2(m,p),r2(t,m,h[3]),t.getTag().insertRules(p,i)),i.length=0}else i.push(c)}}},nT=function(t){for(var e=document.querySelectorAll(t2),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(fl)!==ZI&&(i2(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function s2(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var uA=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(c){var h=Array.from(c.querySelectorAll("style[".concat(fl,"]")));return h[h.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(fl,ZI),r.setAttribute(eA,rp);var l=s2();return l&&r.setAttribute("nonce",l),n.insertBefore(r,a),r},o2=function(){function t(e){this.element=uA(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var l=r[i];if(l.ownerNode===n)return l}throw $o(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),a2=function(){function t(e){this.element=uA(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),l2=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),rT=id,u2={isServer:!id,useCSSOMInjection:!jM},ad=function(){function t(e,n,r){e===void 0&&(e=dl),n===void 0&&(n={});var i=this;this.options=Wt(Wt({},u2),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&id&&rT&&(rT=!1,nT(this)),Fv(this,function(){return function(a){for(var l=a.getTag(),c=l.length,h="",p=function(y){var w=function(b){return od.get(b)}(y);if(w===void 0)return"continue";var T=a.names.get(w),x=l.getGroup(y);if(T===void 0||!T.size||x.length===0)return"continue";var P="".concat(fl,".g").concat(y,'[id="').concat(w,'"]'),R="";T!==void 0&&T.forEach(function(b){b.length>0&&(R+="".concat(b,","))}),h+="".concat(x).concat(P,'{content:"').concat(R,'"}').concat(Lv)},m=0;m<c;m++)p(m);return h}(i)})}return t.registerId=function(e){return of(e)},t.prototype.rehydrate=function(){!this.server&&id&&nT(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Wt(Wt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new l2(i):r?new o2(i):new a2(i)}(this.options),new ZM(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(of(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(of(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(of(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),c2=/&/g,h2=/^\s*\/\/.*$/gm;function cA(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=cA(n.children,e)),n})}function f2(t){var e,n,r,i=dl,a=i.options,l=a===void 0?dl:a,c=i.plugins,h=c===void 0?ip:c,p=function(w,T,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):w},m=h.slice();m.push(function(w){w.type===Zd&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(c2,n).replace(r,p))}),l.prefix&&m.push(OM),m.push(VM);var y=function(w,T,x,P){T===void 0&&(T=""),x===void 0&&(x=""),P===void 0&&(P="&"),e=P,n=T,r=new RegExp("\\".concat(n,"\\b"),"g");var R=w.replace(h2,""),b=DM(x||T?"".concat(x," ").concat(T," { ").concat(R," }"):R);l.namespace&&(b=cA(b,l.namespace));var O=[];return rd(b,LM(m.concat(MM(function($){return O.push($)})))),O};return y.hash=h.length?h.reduce(function(w,T){return T.name||$o(15),Ya(w,T.name)},rA).toString():"",y}var d2=new ad,cy=f2(),hA=er.createContext({shouldForwardProp:void 0,styleSheet:d2,stylis:cy});hA.Consumer;er.createContext(void 0);function hy(){return V.useContext(hA)}var fA=function(){function t(e,n){var r=this;this.inject=function(i,a){a===void 0&&(a=cy);var l=r.name+a.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,a(r.rules,l,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Fv(this,function(){throw $o(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=cy),this.name+e.hash},t}(),p2=function(t){return t>="A"&&t<="Z"};function iT(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;p2(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var dA=function(t){return t==null||t===!1||t===""},pA=function(t){var e,n,r=[];for(var i in t){var a=t[i];t.hasOwnProperty(i)&&!dA(a)&&(Array.isArray(a)&&a.isCss||Uo(a)?r.push("".concat(iT(i),":"),a,";"):sc(a)?r.push.apply(r,ul(ul(["".concat(i," {")],pA(a),!1),["}"],!1)):r.push("".concat(iT(i),": ").concat((e=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in FM||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ks(t,e,n,r){if(dA(t))return[];if(Ov(t))return[".".concat(t.styledComponentId)];if(Uo(t)){if(!Uo(a=t)||a.prototype&&a.prototype.isReactComponent||!e)return[t];var i=t(e);return ks(i,e,n,r)}var a;return t instanceof fA?n?(t.inject(n,r),[t.getName(r)]):[t]:sc(t)?pA(t):Array.isArray(t)?Array.prototype.concat.apply(ip,t.map(function(l){return ks(l,e,n,r)})):[t.toString()]}function mA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Uo(n)&&!Ov(n))return!1}return!0}var m2=iA(rp),g2=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&mA(e),this.componentId=n,this.baseHash=Ya(m2,n),this.baseStyle=r,ad.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Ro(i,this.staticRulesId);else{var a=sd(ks(this.rules,e,n,r)),l=ly(Ya(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,l)){var c=r(a,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,c)}i=Ro(i,l),this.staticRulesId=l}else{for(var h=Ya(this.baseHash,r.hash),p="",m=0;m<this.rules.length;m++){var y=this.rules[m];if(typeof y=="string")p+=y;else if(y){var w=sd(ks(y,e,n,r));h=Ya(h,w+m),p+=w}}if(p){var T=ly(h>>>0);n.hasNameForId(this.componentId,T)||n.insertRules(this.componentId,T,r(p,".".concat(T),void 0,this.componentId)),i=Ro(i,T)}}return i},t}(),oc=er.createContext(void 0);oc.Consumer;function y2(t){var e=er.useContext(oc),n=V.useMemo(function(){return function(r,i){if(!r)throw $o(14);if(Uo(r)){var a=r(i);return a}if(Array.isArray(r)||typeof r!="object")throw $o(8);return i?Wt(Wt({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?er.createElement(oc.Provider,{value:n},t.children):null}var _g={};function v2(t,e,n){var r=Ov(t),i=t,a=!vg(t),l=e.attrs,c=l===void 0?ip:l,h=e.componentId,p=h===void 0?function(U,H){var X=typeof U!="string"?"sc":XE(U);_g[X]=(_g[X]||0)+1;var C="".concat(X,"-").concat(Mv(rp+X+_g[X]));return H?"".concat(H,"-").concat(C):C}(e.displayName,e.parentComponentId):h,m=e.displayName,y=m===void 0?function(U){return vg(U)?"styled.".concat(U):"Styled(".concat(WM(U),")")}(t):m,w=e.displayName&&e.componentId?"".concat(XE(e.displayName),"-").concat(e.componentId):e.componentId||p,T=r&&i.attrs?i.attrs.concat(c).filter(Boolean):c,x=e.shouldForwardProp;if(r&&i.shouldForwardProp){var P=i.shouldForwardProp;if(e.shouldForwardProp){var R=e.shouldForwardProp;x=function(U,H){return P(U,H)&&R(U,H)}}else x=P}var b=new g2(n,w,r?i.componentStyle:void 0);function O(U,H){return function(X,C,I){var k=X.attrs,D=X.componentStyle,M=X.defaultProps,B=X.foldedComponentIds,N=X.styledComponentId,Re=X.target,Ge=er.useContext(oc),Xe=hy(),Je=X.shouldForwardProp||Xe.shouldForwardProp,re=tA(C,Ge,M)||dl,ce=function(De,be,Ue){for(var Le,$e=Wt(Wt({},be),{className:void 0,theme:Ue}),Nt=0;Nt<De.length;Nt+=1){var ar=Uo(Le=De[Nt])?Le($e):Le;for(var _n in ar)$e[_n]=_n==="className"?Ro($e[_n],ar[_n]):_n==="style"?Wt(Wt({},$e[_n]),ar[_n]):ar[_n]}return be.className&&($e.className=Ro($e.className,be.className)),$e}(k,C,re),ue=ce.as||Re,W={};for(var J in ce)ce[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&ce.theme===re||(J==="forwardedAs"?W.as=ce.forwardedAs:Je&&!Je(J,ue)||(W[J]=ce[J]));var Ae=function(De,be){var Ue=hy(),Le=De.generateAndInjectStyles(be,Ue.styleSheet,Ue.stylis);return Le}(D,ce),Ie=Ro(B,N);return Ae&&(Ie+=" "+Ae),ce.className&&(Ie+=" "+ce.className),W[vg(ue)&&!nA.has(ue)?"class":"className"]=Ie,I&&(W.ref=I),V.createElement(ue,W)}($,U,H)}O.displayName=y;var $=er.forwardRef(O);return $.attrs=T,$.componentStyle=b,$.displayName=y,$.shouldForwardProp=x,$.foldedComponentIds=r?Ro(i.foldedComponentIds,i.styledComponentId):"",$.styledComponentId=w,$.target=r?i.target:t,Object.defineProperty($,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(U){this._foldedDefaultProps=r?function(H){for(var X=[],C=1;C<arguments.length;C++)X[C-1]=arguments[C];for(var I=0,k=X;I<k.length;I++)uy(H,k[I],!0);return H}({},i.defaultProps,U):U}}),Fv($,function(){return".".concat($.styledComponentId)}),a&&lA($,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),$}function sT(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var oT=function(t){return Object.assign(t,{isCss:!0})};function Al(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Uo(t)||sc(t))return oT(ks(sT(ip,ul([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?ks(r):oT(ks(sT(r,e)))}function fy(t,e,n){if(n===void 0&&(n=dl),!e)throw $o(1,e);var r=function(i){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return t(e,n,Al.apply(void 0,ul([i],a,!1)))};return r.attrs=function(i){return fy(t,e,Wt(Wt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return fy(t,e,Wt(Wt({},n),i))},r}var gA=function(t){return fy(v2,t)},se=gA;nA.forEach(function(t){se[t]=gA(t)});var _2=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=mA(e),ad.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var a=i(sd(ks(this.rules,n,r,i)),""),l=this.componentId+e;r.insertRules(l,l,a)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&ad.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function w2(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Al.apply(void 0,ul([t],e,!1)),i="sc-global-".concat(Mv(JSON.stringify(r))),a=new _2(r,i),l=function(h){var p=hy(),m=er.useContext(oc),y=er.useRef(p.styleSheet.allocateGSInstance(i)).current;return p.styleSheet.server&&c(y,h,p.styleSheet,m,p.stylis),er.useLayoutEffect(function(){if(!p.styleSheet.server)return c(y,h,p.styleSheet,m,p.stylis),function(){return a.removeStyles(y,p.styleSheet)}},[y,h,p.styleSheet,m,p.stylis]),null};function c(h,p,m,y,w){if(a.isStatic)a.renderStyles(h,UM,m,w);else{var T=Wt(Wt({},p),{theme:tA(p,y,l.defaultProps)});a.renderStyles(h,T,m,w)}}return er.memo(l)}function E2(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=sd(Al.apply(void 0,ul([t],e,!1))),i=Mv(r);return new fA(i,r)}const T2=se.nav`
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
`,S2=se.div`
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
`,x2=se.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,I2=se.div`
  background: ${t=>t.theme.colors.primary};
  padding: 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px ${t=>t.theme.colors.primary}40;
`,A2=se.span`
  font-size: 1.8rem;
  letter-spacing: -1px;
`,C2=se.div`
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
`,P2=se.button`
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
`,k2=se.div`
  position: relative;
  display: flex;
  align-items: center;
`,aT=se.div`
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
`,R2=se.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 10px;
  background: ${t=>t.theme.colors.surface};
  border-radius: 16px;
  box-shadow: 0 10px 25px ${t=>t.theme.colors.shadow};
  padding: 8px;
  min-width: 220px;
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
`,ws=se.div`
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
`,b2=se.div`
  margin-left: auto;
  opacity: 0.5;
  display: flex;
  align-items: center;
`,D2=se(ws)`
  border-bottom: 1px solid ${t=>t.theme.colors.primary}10;
  margin-bottom: 5px;
`,N2=se.div`
  min-width: 65px;
  height: 40px;
  border-radius: 20px;
  background: ${t=>t.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  cursor: pointer;
  box-shadow: 0 4px 10px ${t=>t.theme.colors.primary}40;
  transition: all 0.2s ease;
  border: 2px solid ${t=>t.theme.colors.surface};
  gap: 5px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px ${t=>t.theme.colors.primary}60;
  }
`,V2=se.span`
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: ${t=>t.theme.fonts.primary};
`,yA={en:{com_score:"Points",com_streak:"Streak",com_task:"Task",com_taskOf:"of",com_tryAgain:"Try Again",com_home:"Home",com_back:"Back",com_next:"Next",com_finish:"Done",com_congrats:"Yay! You did it!",com_wellDone:"Great Job!",com_claimCertificate:"Get Your Trophy! 🏆",com_backToScore:"Back to Points",com_reviewAnswers:"Check Answers",com_getCertificate:"Get Your Trophy",com_goodEffort:"Good job! 💪",com_genius:"You are a Star! 🌟",com_masteredCurriculum:"You learned everything! You are so smart!",com_keepPracticing:"Keep playing to get more points!",com_testReview:"Check Work",com_seeWhatLearned:"See what you did!",com_yourAnswer:"You picked:",com_correctAnswer:"Right answer:",com_operation:"Math Game (+ - x ÷)",com_difficulty:"How Hard?",com_level:"Level",com_readyForTest:"Ready for the Big Game? 🏆",com_masterTryTrophy:"Win this to get a trophy!",com_checkAnswer:"Is it Right?",com_allowDecimals:"Dot Numbers (1.5)",com_allowNegative:"Below Zero",com_showRemainder:"Leftover",com_hint:"Need help?",com_easyWords:"Easy Words",com_mediumWords:"Fun Words",com_hardWords:"Big Words",com_easy:"Easy",com_medium:"Medium",com_hard:"Hard",com_time:"Timer",diff_beginner:"Baby Shark 🦈",diff_explorer:"Explorer 🎒",diff_achiever:"Super Hero 💪",diff_master:"Pikachu ⚡",diff_elite:"Sonic Speed 👟",nav_updateName:"Change Name",nav_setProgress:"Set Level",nav_darkMode:"Night Mode 🌙",nav_lightMode:"Day Mode ☀️",nav_fontSize:"Text Size",nav_muteSound:"Sound Off",nav_unmuteSound:"Sound On",nav_small:"Small",nav_medium:"Medium",nav_large:"Big",dash_welcome:"Hi",dash_welcomeBack:"Welcome back",dash_subtitle:"Fun learning for kids! 🌟",dash_english:"ABC Play",dash_hindi:"Hindi Play",dash_math:"123 Play",dash_logic:"Brain Play",dash_learn:"Learn Park",dash_practice:"Practice Zone",dash_test:"Big Adventure 🚀",dash_leaderboard:"Star Board 🌟",dash_exploreAll:"SEE ALL",dash_takeChallenge:"START GAME",dash_achievementTitle:"Win Trophies! 🏆",dash_achievementDesc:"Play to win stars and trophies!",dash_startLearning:"LET'S GO! 🚀",math_mathMagic:"Math Magic",math_mathHero:"Math Hero",math_sorting:"Ordering",math_addition:"Adding (+)",math_subtraction:"Taking Away (-)",math_multiplication:"Times (x)",math_division:"Sharing (÷)",math_countingDesc:"Play with numbers and master adding!",math_biggestNumber:"Which is the Biggest?",math_smallestNumber:"Which is the Smallest?",math_solveMath:"Solve the Puzzle!",math_sortAsc:"Order from Smallest to Biggest!",math_sortDesc:"Order from Biggest to Smallest!",eng_spellingHero:"Word Wizard",eng_missingLetters:"Secret Letters",eng_listenAndFind:"Listen & Find",eng_tapTheWord:"Tap the word you hear!",eng_chooseMissing:"Find the missing letter!",eng_tapSpeaker:"Tap the speaker to listen",eng_missingLettersSubtitle:"Fill the gap to find the word!",eng_spellingHeroPromo:"Try the Word Wizard challenge!",eng_alphabetTitle:"ABC Alphabet",eng_alphabetSubtitle:"Learn letters and phonics!",eng_bigLetters:"BIG LETTERS (A)",eng_smallLetters:"small letters (a)",eng_letterCase:"Letter Style",log_grandLogic:"Brain Master",log_whatNext:"What's the Pattern?",hindi_hindiLegend:"Hindi Hero",hindi_tapLetter:"Tap the letter you hear!",mst_grandMaster:"Grand Champion",mst_subtitle:"Take the challenge and show your skills!",sdk_title:"Magic Squares",sdk_subtitle:"Fill the boxes with magic numbers 1-4!",sdk_almost:"So close! Try one more time! 💪",sdk_tryAgain:"Give it another go",sdk_easyHints:"Helper Mode (8 Hints)",sdk_hardHints:"Expert Mode (4 Hints)",sdk_puzzleLevel:"Puzzle Level",sdk_howToPlay:"How to Play",sdk_step1:"Pick an empty box",sdk_step2:"Tap a number to fill it",sdk_step3:"Every small box must have 1, 2, 3, and 4!",sdk_milestoneReached:"New Record! 🎉",sdk_certProgress:"Trophy Progress",sdk_moreForCert:"more for a Trophy! 🏆",stm_title:"Set Your Level",stm_subtitle:"Pick where you want to start",stm_streak:"Stars:",stm_update:"Update Now",game_math:"Math Magic",game_spelling:"Word Wizard",game_missing_letters:"Secret Letters",game_comparison:"Big vs Small",game_sorting:"Ordering Numbers",game_sudoku:"Magic Squares",game_alphabet_hindi:"Hindi Fun",game_master_test:"Grand Champion",fb_keepTrying:"You can do it! 💪",fb_tryAgain:"Try once more",fb_oops:"Oops! Give it another try! 😅",fb_oopsRead:"Try again, you got this!",gle_title:"Big vs Small?",gle_subtitle:"Compare the numbers and pick the sign!",gle_digits9:"Numbers up to 9",gle_digits99:"Numbers up to 99",gle_digits999:"Big Numbers to 999",gle_quickTips:"Learning Tips",gle_greater:"is bigger",gle_less:"is smaller",gle_equal:"is same",gle_than:"than",gle_to:"as",gle_means:"means",cert_pro:"Hooray! You're a PRO!",cert_award:"Super Star Award! ⭐",cert_belongs:"This trophy belongs to our amazing...",cert_legend:"For being a total superstar in",cert_challenge:"Challenge",cert_level:"Level",cert_smashed:"You did amazing with a score of",cert_inJust:"in only",cert_keepAwesome:"Keep being a star! 🚀✨",cert_generating:"Making your trophy...",cert_download:"Save It",cert_share:"Show Friends",cert_copied:"Link copied! Now show everyone! 📋",cert_failed:"Oops! Try saving the picture instead! 😊",test_instructions:"Challenge Rules",test_qCount:"10 fun tasks",test_selectBest:"Pick the best answer",test_timeRecorded:"Clock is ticking!",test_scoreForCert:"Get 8+ to win a trophy!",test_start:"LET'S PLAY!",test_question:"Task",test_of:"of",test_results:"Your Results",test_perfect:"Perfect! 🏆",test_great:"Super Job! 🌟",test_good:"Good Try! 👍",test_keepPracticing:"Keep playing! 💪",test_review:"Check Answers",test_playAgain:"Play Again",test_home:"Back Home",test_targetTime:"Goal Time",test_noLimit:"Take Your Time",test_beatenTarget:"You were super fast! ⚡",test_timeExceeded:"Goal time missed. Try again! 🐢",test_time30s:"30s",test_time1m:"1 Min",test_time2m:"2 Min",test_time3m:"3 Min",test_time4m:"4 Min",test_time5m:"5 Min",test_timeLimitInfo:{none:"Take all the time you need",s30:"Super Speed",m1:"Quick Play",m2:"Normal Speed",m3:"Relaxed Play",m4:"Focused Play",m5:"Slow and Steady"},fb_incredible10:"Incredible! 10 in a row! 🌟",fb_superstar:"Wow! 10 in a row! You are a superstar!",fb_notQuite:"Not quite, try again! 😅",fb_tryAgainShort:"Try again",tel_teluguLegend:"Telugu Hero",tel_tapLetter:"Tap the letter you hear!",tel_title:"Telugu Fun",tel_subtitle:"Explore beautiful Telugu letters!",tel_achulu:"Vowels (Achulu)",tel_hallulu:"Consonants (Hallulu)",wee_title:"Days of the Week",wee_subtitle:"Learn the 7 days of the week!",wee_funFact:"Did you know? 📅",wee_funFactDetail:"There are 7 days in a week and 52 weeks in a year!",wee_pickDay:"Pick a Day",wee_didYouKnow:"Fun Fact! 🌟",wee_facts:[{emoji:"📅",fact:"There are 7 days in a week."},{emoji:"🗓️",fact:"4 weeks make 1 month."},{emoji:"📆",fact:"52 weeks make 1 year."},{emoji:"☀️",fact:"The week starts on Sunday."},{emoji:"🎉",fact:"Saturday and Sunday are for fun!"}],sci_bodyParts:"Body Parts",sci_bodySubtitle:"Learn about your amazing body!",sci_amazingFacts:"Amazing Body Facts! 🌟",sci_groupHead:"Head",sci_groupTorso:"Middle",sci_groupArms:"Arms",sci_groupLegs:"Legs",sci_facts:[{emoji:"🦴",fact:"Adults have 206 bones in their body!"},{emoji:"🧠",fact:"Your brain controls everything you do."},{emoji:"❤️",fact:"Your heart pumps blood all day and night."},{emoji:"💪",fact:"There are over 600 muscles in your body."},{emoji:"🦷",fact:"Enamel on your teeth is the hardest part!"},{emoji:"🖐️",fact:"Your skin is the largest part of your body!"}],sci_senseTitle:"Sense Organs",sci_senseSubtitle:"Our 5 amazing sense organs!",sci_senseFactsTitle:"Sense Facts! 🌟",sci_senseFacts:[{emoji:"👁️",fact:"Humans blink about 15-20 times every minute!"},{emoji:"👂",fact:"Your ears never stop hearing, even when you sleep!"},{emoji:"👃",fact:"Your nose can remember 50,000 different smells!"},{emoji:"👅",fact:"The tongue is a very strong muscle in your body!"},{emoji:"🤚",fact:"Fingertips are super sensitive to touch!"}],sci_senseLabel:"sense",enc_messages:["Mickey says Great Job!","Elsa is proud of you!","Spiderman says Awesome!","Barbie says You're Smart!","Buzz says To Infinity!","Simba says You're Brave!","Olaf loves your work!","Woody says Great Start!","Moana says Way to Go!","Iron Man says Genius!"],enc_default:"Keep going!",dash_telugu:"Telugu",game_alphabet_telugu:"Telugu Letters",lead_title:"Star Heroes 🌟",lead_subtitle:"See our best players!",lead_tabAll:"Everyone",lead_tabMath:"Math Stars",lead_tabEnglish:"ABC Stars",lead_tabSpelling:"Spelling Stars",lead_tabLogic:"Brain Stars",lead_rank:"Place",lead_user:"Pic",lead_name:"Name",lead_score:"Stars",lead_time:"Speed",lead_loading:"Looking for our Heroes... 🚀",lead_noRankings:"No Heroes yet. Be the first! 🚀",lead_waiting:"Waiting...",nav_logout:"See You Soon!",nav_appName:"Kiddoo",nav_shareTitle:"Share Kiddoo",nav_shareText:"Look at this fun game! 🚀",nav_historyTitle:"Trophies",math_placeValues:"Place Values",math_numbersTitle:"Learn Numbers",math_numbersSubtitle:"Let's count and play with numbers!",math_numberSorterTitle:"Number Sorter",math_numberSorterSubtitle:"Drag and drop numbers to put them in order!",math_checkOrder:"Check Order",math_orderType:"Order Type",eng_numbersTitle:"Numbers",eng_numbersSubtitle:"Learn to write numbers!",eng_spellingBeeTitle:"Spelling Bee",eng_spellingBeeSubtitle:"Listen and spell the word!",eng_needHint:"Need a hint?",eng_skipToNext:"Skip to next",eng_sightWordsTitle:"Sight Words",eng_sightWordsSubtitle:"Read and say the words out loud!",eng_readingLevel:"Reading Level",eng_monthsTitle:"Months of the Year",eng_monthsSubtitle:"Learn the months of the year!",eng_sudokuTitle:"Sudoku",tel_numbersTitle:"అంకెలు (1-100)",tel_numbersSubtitle:"Learn numbers in Telugu!",tel_monthsTitle:"నెలల పేర్లు",tel_monthsSubtitle:"Learn months in Telugu!",tel_weeksTitle:"వారాల పేర్లు",tel_weeksSubtitle:"Learn days in Telugu!",hin_numbersTitle:"गिनती (1-100)",hin_numbersSubtitle:"Learn numbers in Hindi!",hin_monthsTitle:"महीनों के नाम",hin_monthsSubtitle:"Learn months in Hindi!",hin_weeksTitle:"सप्ताह के दिन",hin_weeksSubtitle:"Learn days in Hindi!",common_filter:"Filter",pv_subtitle:"Fun with Big Numbers!",pv_number:"Number",pv_indian:"Indian Style",pv_international:"World Style",pv_comparisonTable:"COMPARISON TABLE",pv_commaRule:"Comma Rule",pv_quickTip:"Quick Tip! 💡",pv_lakhs:"Lakhs",pv_millions:"Millions",his_title:"My Trophies 🏆",his_subtitle:"See your stars and medals!",his_totalTime:"Total Time",his_score:"Stars",his_time:"Speed",his_recentTests:"Recent Games",his_myAchievements:"My Achievements",his_myDesc:"Your progress and history",his_emptyMsg:"Your Trophy Cabinet is empty! Go on an Adventure to win stars! 🚀",his_champion:"CURRENT CHAMPION 👑",his_checkSoon:"Check back soon to see the top scorers!",mst_chooseSubject:"Pick Your Adventure",mst_includedOperations:"Adventure Games",mst_ready:"Ready for an Adventure? Let's Go!",mst_questionCount:"How many tasks?",mst_targetTime:"Super Speed or Slow?",mst_options:"Game Rules",mst_timesUp:"TIME IS OVER! ⏰",mst_questionsShort:"Tasks",mst_rank1:"CHAMPION! 👑",mst_rank2:"SUPERSTAR! 🌟",mst_rank3:"SMARTY! 🚀",mst_rank4:"GOOD JOB! 👍",auth_email:"Email",auth_password:"Secret Code",auth_or:"OR",auth_login:"Login",auth_signUp:"Sign Up",auth_welcomeBack:"Welcome back!",auth_join:"Join Kiddoo",auth_kidsName:"Kid's Name",auth_enterName:"Enter name",auth_enterEmail:"Enter email",auth_enterPassword:"Enter password",auth_pleaseWait:"Please wait...",auth_googleSignIn:"Sign in with Google",auth_noAccount:"Don't have an account? ",auth_hasAccount:"Already have an account? "}},L2=()=>{};var lT={};/**
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
 */const vA=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},M2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[n++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[n++],l=t[n++],c=t[n++],h=((i&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const a=t[n++],l=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return e.join("")},_A={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const a=t[i],l=i+1<t.length,c=l?t[i+1]:0,h=i+2<t.length,p=h?t[i+2]:0,m=a>>2,y=(a&3)<<4|c>>4;let w=(c&15)<<2|p>>6,T=p&63;h||(T=64,l||(w=64)),r.push(n[m],n[y],n[w],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vA(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):M2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const a=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const p=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,a==null||c==null||p==null||y==null)throw new O2;const w=a<<2|c>>4;if(r.push(w),p!==64){const T=c<<4&240|p>>2;if(r.push(T),y!==64){const x=p<<6&192|y;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class O2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const F2=function(t){const e=vA(t);return _A.encodeByteArray(e,!0)},ld=function(t){return F2(t).replace(/\./g,"")},wA=function(t){try{return _A.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function j2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const U2=()=>j2().__FIREBASE_DEFAULTS__,$2=()=>{if(typeof process>"u"||typeof lT>"u")return;const t=lT.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},z2=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wA(t[1]);return e&&JSON.parse(e)},sp=()=>{try{return L2()||U2()||$2()||z2()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EA=t=>{var e,n;return(n=(e=sp())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},B2=t=>{const e=EA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},TA=()=>{var t;return(t=sp())==null?void 0:t.config},SA=t=>{var e;return(e=sp())==null?void 0:e[`_${t}`]};/**
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
 */class W2{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function H2(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ld(JSON.stringify(n)),ld(JSON.stringify(l)),""].join(".")}/**
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
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function q2(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function K2(){var e;const t=(e=sp())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function G2(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Y2(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Q2(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function X2(){const t=fn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function J2(){return!K2()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Z2(){try{return typeof indexedDB=="object"}catch{return!1}}function eO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;e(((a=i.error)==null?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const tO="FirebaseError";class Ui extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tO,Object.setPrototypeOf(this,Ui.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tc.prototype.create)}}class Tc{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,a=this.errors[e],l=a?nO(a,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new Ui(i,c,r)}}function nO(t,e){return t.replace(rO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rO=/\{\$([^}]+)}/g;function iO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const a=t[i],l=e[i];if(uT(a)&&uT(l)){if(!zo(a,l))return!1}else if(a!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uT(t){return t!==null&&typeof t=="object"}/**
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
 */function Sc(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ou(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function Fu(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sO(t,e){const n=new oO(t,e);return n.subscribe.bind(n)}class oO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");aO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wg),i.error===void 0&&(i.error=wg),i.complete===void 0&&(i.complete=wg);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wg(){}/**
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
 */function xc(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function xA(t){return(await fetch(t,{credentials:"include"})).ok}class Bo{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Co="[DEFAULT]";/**
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
 */class lO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new W2;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cO(e))try{this.getOrInitializeService({instanceIdentifier:Co})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Co){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Co){return this.instances.has(e)}getOptions(e=Co){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);r===c&&l.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:uO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Co){return this.component?this.component.multipleInstances?e:Co:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uO(t){return t===Co?void 0:t}function cO(t){return t.instantiationMode==="EAGER"}/**
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
 */class hO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const fO={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},dO=Oe.INFO,pO={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},mO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=pO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jv{constructor(e){this.name=e,this._logLevel=dO,this._logHandler=mO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const gO=(t,e)=>e.some(n=>t instanceof n);let cT,hT;function yO(){return cT||(cT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vO(){return hT||(hT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const IA=new WeakMap,dy=new WeakMap,AA=new WeakMap,Eg=new WeakMap,Uv=new WeakMap;function _O(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",l)},a=()=>{n(Rs(t.result)),i()},l=()=>{r(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&IA.set(n,t)}).catch(()=>{}),Uv.set(e,t),e}function wO(t){if(dy.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",l),t.removeEventListener("abort",l)},a=()=>{n(),i()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",l),t.addEventListener("abort",l)});dy.set(t,e)}let py={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dy.get(t);if(e==="objectStoreNames")return t.objectStoreNames||AA.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function EO(t){py=t(py)}function TO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tg(this),e,...n);return AA.set(r,e.sort?e.sort():[e]),Rs(r)}:vO().includes(t)?function(...e){return t.apply(Tg(this),e),Rs(IA.get(this))}:function(...e){return Rs(t.apply(Tg(this),e))}}function SO(t){return typeof t=="function"?TO(t):(t instanceof IDBTransaction&&wO(t),gO(t,yO())?new Proxy(t,py):t)}function Rs(t){if(t instanceof IDBRequest)return _O(t);if(Eg.has(t))return Eg.get(t);const e=SO(t);return e!==t&&(Eg.set(t,e),Uv.set(e,t)),e}const Tg=t=>Uv.get(t);function xO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const l=indexedDB.open(t,e),c=Rs(l);return r&&l.addEventListener("upgradeneeded",h=>{r(Rs(l.result),h.oldVersion,h.newVersion,Rs(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),c.then(h=>{a&&h.addEventListener("close",()=>a()),i&&h.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const IO=["get","getKey","getAll","getAllKeys","count"],AO=["put","add","delete","clear"],Sg=new Map;function fT(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sg.get(e))return Sg.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=AO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||IO.includes(n)))return;const a=async function(l,...c){const h=this.transaction(l,i?"readwrite":"readonly");let p=h.store;return r&&(p=p.index(c.shift())),(await Promise.all([p[n](...c),i&&h.done]))[0]};return Sg.set(e,a),a}EO(t=>({...t,get:(e,n,r)=>fT(e,n)||t.get(e,n,r),has:(e,n)=>!!fT(e,n)||t.has(e,n)}));/**
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
 */class CO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const my="@firebase/app",dT="0.14.11";/**
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
 */const Mi=new jv("@firebase/app"),kO="@firebase/app-compat",RO="@firebase/analytics-compat",bO="@firebase/analytics",DO="@firebase/app-check-compat",NO="@firebase/app-check",VO="@firebase/auth",LO="@firebase/auth-compat",MO="@firebase/database",OO="@firebase/data-connect",FO="@firebase/database-compat",jO="@firebase/functions",UO="@firebase/functions-compat",$O="@firebase/installations",zO="@firebase/installations-compat",BO="@firebase/messaging",WO="@firebase/messaging-compat",HO="@firebase/performance",qO="@firebase/performance-compat",KO="@firebase/remote-config",GO="@firebase/remote-config-compat",YO="@firebase/storage",QO="@firebase/storage-compat",XO="@firebase/firestore",JO="@firebase/ai",ZO="@firebase/firestore-compat",eF="firebase",tF="12.12.0";/**
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
 */const gy="[DEFAULT]",nF={[my]:"fire-core",[kO]:"fire-core-compat",[bO]:"fire-analytics",[RO]:"fire-analytics-compat",[NO]:"fire-app-check",[DO]:"fire-app-check-compat",[VO]:"fire-auth",[LO]:"fire-auth-compat",[MO]:"fire-rtdb",[OO]:"fire-data-connect",[FO]:"fire-rtdb-compat",[jO]:"fire-fn",[UO]:"fire-fn-compat",[$O]:"fire-iid",[zO]:"fire-iid-compat",[BO]:"fire-fcm",[WO]:"fire-fcm-compat",[HO]:"fire-perf",[qO]:"fire-perf-compat",[KO]:"fire-rc",[GO]:"fire-rc-compat",[YO]:"fire-gcs",[QO]:"fire-gcs-compat",[XO]:"fire-fst",[ZO]:"fire-fst-compat",[JO]:"fire-vertex","fire-js":"fire-js",[eF]:"fire-js-all"};/**
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
 */const ud=new Map,rF=new Map,yy=new Map;function pT(t,e){try{t.container.addComponent(e)}catch(n){Mi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function pl(t){const e=t.name;if(yy.has(e))return Mi.debug(`There were multiple attempts to register component ${e}.`),!1;yy.set(e,t);for(const n of ud.values())pT(n,t);for(const n of rF.values())pT(n,t);return!0}function $v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Un(t){return t==null?!1:t.settings!==void 0}/**
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
 */const iF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bs=new Tc("app","Firebase",iF);/**
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
 */class sF{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bs.create("app-deleted",{appName:this._name})}}/**
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
 */const Cl=tF;function CA(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gy,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw bs.create("bad-app-name",{appName:String(i)});if(n||(n=TA()),!n)throw bs.create("no-options");const a=ud.get(i);if(a){if(zo(n,a.options)&&zo(r,a.config))return a;throw bs.create("duplicate-app",{appName:i})}const l=new hO(i);for(const h of yy.values())l.addComponent(h);const c=new sF(n,r,l);return ud.set(i,c),c}function PA(t=gy){const e=ud.get(t);if(!e&&t===gy&&TA())return CA();if(!e)throw bs.create("no-app",{appName:t});return e}function Ds(t,e,n){let r=nF[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mi.warn(l.join(" "));return}pl(new Bo(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const oF="firebase-heartbeat-database",aF=1,ac="firebase-heartbeat-store";let xg=null;function kA(){return xg||(xg=xO(oF,aF,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ac)}catch(n){console.warn(n)}}}}).catch(t=>{throw bs.create("idb-open",{originalErrorMessage:t.message})})),xg}async function lF(t){try{const n=(await kA()).transaction(ac),r=await n.objectStore(ac).get(RA(t));return await n.done,r}catch(e){if(e instanceof Ui)Mi.warn(e.message);else{const n=bs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mi.warn(n.message)}}}async function mT(t,e){try{const r=(await kA()).transaction(ac,"readwrite");await r.objectStore(ac).put(e,RA(t)),await r.done}catch(n){if(n instanceof Ui)Mi.warn(n.message);else{const r=bs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mi.warn(r.message)}}}function RA(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uF=1024,cF=30;class hF{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new dF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=gT();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>cF){const l=pF(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Mi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gT(),{heartbeatsToSend:r,unsentEntries:i}=fF(this._heartbeatsCache.heartbeats),a=ld(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return Mi.warn(n),""}}}function gT(){return new Date().toISOString().substring(0,10)}function fF(t,e=uF){const n=[];let r=t.slice();for(const i of t){const a=n.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),yT(n)>e){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yT(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class dF{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Z2()?eO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function yT(t){return ld(JSON.stringify({version:2,heartbeats:t})).length}function pF(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function mF(t){pl(new Bo("platform-logger",e=>new CO(e),"PRIVATE")),pl(new Bo("heartbeat",e=>new hF(e),"PRIVATE")),Ds(my,dT,t),Ds(my,dT,"esm2020"),Ds("fire-js","")}mF("");var gF="firebase",yF="12.12.1";/**
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
 */Ds(gF,yF,"app");function bA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vF=bA,DA=new Tc("auth","Firebase",bA());/**
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
 */const cd=new jv("@firebase/auth");function _F(t,...e){cd.logLevel<=Oe.WARN&&cd.warn(`Auth (${Cl}): ${t}`,...e)}function Rf(t,...e){cd.logLevel<=Oe.ERROR&&cd.error(`Auth (${Cl}): ${t}`,...e)}/**
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
 */function sr(t,...e){throw Bv(t,...e)}function Ir(t,...e){return Bv(t,...e)}function zv(t,e,n){const r={...vF(),[e]:n};return new Tc("auth","Firebase",r).create(e,{appName:t.name})}function Ni(t){return zv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wF(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sr(t,"argument-error"),zv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return DA.create(t,...e)}function Te(t,e,...n){if(!t)throw Bv(e,...n)}function ki(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rf(e),new Error(e)}function Oi(t,e){t||ki(e)}/**
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
 */function vy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function EF(){return vT()==="http:"||vT()==="https:"}function vT(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function TF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EF()||Y2()||"connection"in navigator)?navigator.onLine:!0}function SF(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ic{constructor(e,n){this.shortDelay=e,this.longDelay=n,Oi(n>e,"Short delay should be less than long delay!"),this.isMobile=q2()||Q2()}get(){return TF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Wv(t,e){Oi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class NA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ki("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ki("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ki("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IF=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],AF=new Ic(3e4,6e4);function Gs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function $i(t,e,n,r,i={}){return VA(t,i,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const c=Sc({key:t.config.apiKey,...l}).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const p={method:e,headers:h,...a};return G2()||(p.referrerPolicy="no-referrer"),t.emulatorConfig&&xc(t.emulatorConfig.host)&&(p.credentials="include"),NA.fetch()(await LA(t,t.config.apiHost,n,c),p)})}async function VA(t,e,n){t._canInitEmulator=!1;const r={...xF,...e};try{const i=new PF(t),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw af(t,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const c=a.ok?l.errorMessage:l.error.message,[h,p]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw af(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw af(t,"email-already-in-use",l);if(h==="USER_DISABLED")throw af(t,"user-disabled",l);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw zv(t,m,p);sr(t,m)}}catch(i){if(i instanceof Ui)throw i;sr(t,"network-request-failed",{message:String(i)})}}async function Ac(t,e,n,r,i={}){const a=await $i(t,e,n,r,i);return"mfaPendingCredential"in a&&sr(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function LA(t,e,n,r){const i=`${e}${n}?${r}`,a=t,l=a.config.emulator?Wv(t.config,i):`${t.config.apiScheme}://${i}`;return IF.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}function CF(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class PF{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ir(this.auth,"network-request-failed")),AF.get())})}}function af(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ir(t,e,r);return i.customData._tokenResponse=n,i}function _T(t){return t!==void 0&&t.enterprise!==void 0}class kF{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return CF(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function RF(t,e){return $i(t,"GET","/v2/recaptchaConfig",Gs(t,e))}/**
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
 */async function bF(t,e){return $i(t,"POST","/v1/accounts:delete",e)}async function hd(t,e){return $i(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function qu(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DF(t,e=!1){const n=dn(t),r=await n.getIdToken(e),i=Hv(r);Te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:qu(Ig(i.auth_time)),issuedAtTime:qu(Ig(i.iat)),expirationTime:qu(Ig(i.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ig(t){return Number(t)*1e3}function Hv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rf("JWT malformed, contained fewer than 3 sections"),null;try{const i=wA(n);return i?JSON.parse(i):(Rf("Failed to decode base64 JWT payload"),null)}catch(i){return Rf("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function wT(t){const e=Hv(t);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ml(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ui&&NF(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function NF({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VF{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _y{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qu(this.lastLoginAt),this.creationTime=qu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function fd(t){var y;const e=t.auth,n=await t.getIdToken(),r=await ml(t,hd(e,{idToken:n}));Te(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const a=(y=i.providerUserInfo)!=null&&y.length?MA(i.providerUserInfo):[],l=MF(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=c?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new _y(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function LF(t){const e=dn(t);await fd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MF(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function MA(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function OF(t,e){const n=await VA(t,{},async()=>{const r=Sc({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,l=await LA(t,i,"/v1/token",`key=${a}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:r};return t.emulatorConfig&&xc(t.emulatorConfig.host)&&(h.credentials="include"),NA.fetch()(l,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FF(t,e){return $i(t,"POST","/v2/accounts:revokeToken",Gs(t,e))}/**
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
 */class tl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const n=wT(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await OF(e,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,l=new tl;return r&&(Te(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(Te(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),a&&(Te(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tl,this.toJSON())}_performRefresh(){return ki("not implemented")}}/**
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
 */function vs(t,e){Te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tr{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new VF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ml(this,this.stsTokenManager.getToken(this.auth,e));return Te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DF(this,e)}reload(){return LF(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(Ni(this.auth));const e=await this.getIdToken();return await ml(this,bF(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,a=n.phoneNumber??void 0,l=n.photoURL??void 0,c=n.tenantId??void 0,h=n._redirectEventId??void 0,p=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:T,providerData:x,stsTokenManager:P}=n;Te(y&&P,e,"internal-error");const R=tl.fromJSON(this.name,P);Te(typeof y=="string",e,"internal-error"),vs(r,e.name),vs(i,e.name),Te(typeof w=="boolean",e,"internal-error"),Te(typeof T=="boolean",e,"internal-error"),vs(a,e.name),vs(l,e.name),vs(c,e.name),vs(h,e.name),vs(p,e.name),vs(m,e.name);const b=new Tr({uid:y,auth:e,email:i,emailVerified:w,displayName:r,isAnonymous:T,photoURL:l,phoneNumber:a,tenantId:c,stsTokenManager:R,createdAt:p,lastLoginAt:m});return x&&Array.isArray(x)&&(b.providerData=x.map(O=>({...O}))),h&&(b._redirectEventId=h),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new tl;i.updateFromServerResponse(n);const a=new Tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await fd(a),a}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Te(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?MA(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),c=new tl;c.updateFromIdToken(r);const h=new Tr({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:l}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _y(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,p),h}}/**
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
 */const ET=new Map;function Ri(t){Oi(t instanceof Function,"Expected a class definition");let e=ET.get(t);return e?(Oi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ET.set(t,e),e)}/**
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
 */class OA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OA.type="NONE";const TT=OA;/**
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
 */function bf(t,e,n){return`firebase:${t}:${e}:${n}`}class nl{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=bf(this.userKey,i.apiKey,a),this.fullPersistenceKey=bf("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await hd(this.auth,{idToken:e}).catch(()=>{});return n?Tr._fromGetAccountInfoResponse(this.auth,n,e):null}return Tr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new nl(Ri(TT),e,r);const i=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=i[0]||Ri(TT);const l=bf(r,e.config.apiKey,e.name);let c=null;for(const p of n)try{const m=await p._get(l);if(m){let y;if(typeof m=="string"){const w=await hd(e,{idToken:m}).catch(()=>{});if(!w)break;y=await Tr._fromGetAccountInfoResponse(e,w,m)}else y=Tr._fromJSON(e,m);p!==a&&(c=y),a=p;break}}catch{}const h=i.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new nl(a,e,r):(a=h[0],c&&await a._set(l,c.toJSON()),await Promise.all(n.map(async p=>{if(p!==a)try{await p._remove(l)}catch{}})),new nl(a,e,r))}}/**
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
 */function ST(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($A(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(BA(e))return"Blackberry";if(WA(e))return"Webos";if(jA(e))return"Safari";if((e.includes("chrome/")||UA(e))&&!e.includes("edge/"))return"Chrome";if(zA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function FA(t=fn()){return/firefox\//i.test(t)}function jA(t=fn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UA(t=fn()){return/crios\//i.test(t)}function $A(t=fn()){return/iemobile/i.test(t)}function zA(t=fn()){return/android/i.test(t)}function BA(t=fn()){return/blackberry/i.test(t)}function WA(t=fn()){return/webos/i.test(t)}function qv(t=fn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jF(t=fn()){var e;return qv(t)&&!!((e=window.navigator)!=null&&e.standalone)}function UF(){return X2()&&document.documentMode===10}function HA(t=fn()){return qv(t)||zA(t)||WA(t)||BA(t)||/windows phone/i.test(t)||$A(t)}/**
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
 */function qA(t,e=[]){let n;switch(t){case"Browser":n=ST(fn());break;case"Worker":n=`${ST(fn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Cl}/${r}`}/**
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
 */class $F{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=a=>new Promise((l,c)=>{try{const h=e(a);l(h)}catch(h){c(h)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function zF(t,e={}){return $i(t,"GET","/v2/passwordPolicy",Gs(t,e))}/**
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
 */const BF=6;class WF{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??BF,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class HF{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xT(this),this.idTokenSubscription=new xT(this),this.beforeStateQueue=new $F(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ri(n)),this._initializationPromise=this.queue(async()=>{var r,i,a;if(!this._deleted&&(this.persistenceManager=await nl.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hd(this,{idToken:e}),r=await Tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if(Un(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(a=this.redirectUser)==null?void 0:a._redirectEventId,c=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===c)&&(h!=null&&h.user)&&(r=h.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SF()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Un(this.app))return Promise.reject(Ni(this));const n=e?dn(e):null;return n&&Te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(Ni(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Un(this.app)?Promise.reject(Ni(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ri(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await zF(this),n=new WF(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Tc("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FF(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ri(e)||this._popupRedirectResolver;Te(n,this,"argument-error"),this.redirectPersistenceManager=await nl.create(this,[Ri(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(c,this,"internal-error"),c.then(()=>{l||a(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,i);return()=>{l=!0,h()}}else{const h=e.addObserver(n);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&_F(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ys(t){return dn(t)}class xT{constructor(e){this.auth=e,this.observer=null,this.addObserver=sO(n=>this.observer=n)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let op={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qF(t){op=t}function KA(t){return op.loadJS(t)}function KF(){return op.recaptchaEnterpriseScript}function GF(){return op.gapiScript}function YF(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class QF{constructor(){this.enterprise=new XF}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class XF{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const JF="recaptcha-enterprise",GA="NO_RECAPTCHA";class ZF{constructor(e){this.type=JF,this.auth=Ys(e)}async verify(e="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,c)=>{RF(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const p=new kF(h);return a.tenantId==null?a._agentRecaptchaConfig=p:a._tenantRecaptchaConfigs[a.tenantId]=p,l(p.siteKey)}}).catch(h=>{c(h)})})}function i(a,l,c){const h=window.grecaptcha;_T(h)?h.enterprise.ready(()=>{h.enterprise.execute(a,{action:e}).then(p=>{l(p)}).catch(()=>{l(GA)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QF().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{r(this.auth).then(c=>{if(!n&&_T(window.grecaptcha))i(c,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=KF();h.length!==0&&(h+=c),KA(h).then(()=>{i(c,a,l)}).catch(p=>{l(p)})}}).catch(c=>{l(c)})})}}async function IT(t,e,n,r=!1,i=!1){const a=new ZF(t);let l;if(i)l=GA;else try{l=await a.verify(n)}catch{l=await a.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,p=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:p,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function wy(t,e,n,r,i){var a;if((a=t._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await IT(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await IT(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(l)})}/**
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
 */function e4(t,e){const n=$v(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(zo(a,e))return i;sr(i,"already-initialized")}return n.initialize({options:e})}function t4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ri);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function n4(t,e,n){const r=Ys(t);Te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=YA(e),{host:l,port:c}=r4(e),h=c===null?"":`:${c}`,p={url:`${a}//${l}${h}/`},m=Object.freeze({host:l,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Te(zo(p,r.config.emulator)&&zo(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,xc(l)?xA(`${a}//${l}${h}`):i4()}function YA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function r4(t){const e=YA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:AT(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:AT(l)}}}function AT(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function i4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Kv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ki("not implemented")}_getIdTokenResponse(e){return ki("not implemented")}_linkToIdToken(e,n){return ki("not implemented")}_getReauthenticationResolver(e){return ki("not implemented")}}async function s4(t,e){return $i(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function o4(t,e){return Ac(t,"POST","/v1/accounts:signInWithPassword",Gs(t,e))}/**
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
 */async function a4(t,e){return Ac(t,"POST","/v1/accounts:signInWithEmailLink",Gs(t,e))}async function l4(t,e){return Ac(t,"POST","/v1/accounts:signInWithEmailLink",Gs(t,e))}/**
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
 */class lc extends Kv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new lc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new lc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wy(e,n,"signInWithPassword",o4);case"emailLink":return a4(e,{email:this._email,oobCode:this._password});default:sr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wy(e,r,"signUpPassword",s4);case"emailLink":return l4(e,{idToken:n,email:this._email,oobCode:this._password});default:sr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function rl(t,e){return Ac(t,"POST","/v1/accounts:signInWithIdp",Gs(t,e))}/**
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
 */const u4="http://localhost";class Wo extends Kv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=n;if(!r||!i)return null;const l=new Wo(r,i);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return rl(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rl(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rl(e,n)}buildRequest(){const e={requestUri:u4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Sc(n)}return e}}/**
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
 */function c4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function h4(t){const e=Ou(Fu(t)).link,n=e?Ou(Fu(e)).deep_link_id:null,r=Ou(Fu(t)).deep_link_id;return(r?Ou(Fu(r)).link:null)||r||n||e||t}class Gv{constructor(e){const n=Ou(Fu(e)),r=n.apiKey??null,i=n.oobCode??null,a=c4(n.mode??null);Te(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=h4(e);try{return new Gv(n)}catch{return null}}}/**
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
 */class Pl{constructor(){this.providerId=Pl.PROVIDER_ID}static credential(e,n){return lc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gv.parseLink(n);return Te(r,"argument-error"),lc._fromEmailAndCode(e,r.code,r.tenantId)}}Pl.PROVIDER_ID="password";Pl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Yv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Cc extends Yv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ss extends Cc{constructor(){super("facebook.com")}static credential(e){return Wo._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ss.credential(e.oauthAccessToken)}catch{return null}}}Ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ss.PROVIDER_ID="facebook.com";/**
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
 */class xs extends Cc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wo._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xs.credential(n,r)}catch{return null}}}xs.GOOGLE_SIGN_IN_METHOD="google.com";xs.PROVIDER_ID="google.com";/**
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
 */class Is extends Cc{constructor(){super("github.com")}static credential(e){return Wo._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.GITHUB_SIGN_IN_METHOD="github.com";Is.PROVIDER_ID="github.com";/**
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
 */class As extends Cc{constructor(){super("twitter.com")}static credential(e,n){return Wo._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return As.credential(n,r)}catch{return null}}}As.TWITTER_SIGN_IN_METHOD="twitter.com";As.PROVIDER_ID="twitter.com";/**
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
 */async function f4(t,e){return Ac(t,"POST","/v1/accounts:signUp",Gs(t,e))}/**
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
 */class Ho{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const a=await Tr._fromIdTokenResponse(e,r,i),l=CT(r);return new Ho({user:a,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=CT(r);return new Ho({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function CT(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class dd extends Ui{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,dd.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new dd(e,n,r,i)}}function QA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?dd._fromErrorAndOperation(t,a,e,r):a})}async function d4(t,e,n=!1){const r=await ml(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ho._forOperation(t,"link",r)}/**
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
 */async function p4(t,e,n=!1){const{auth:r}=t;if(Un(r.app))return Promise.reject(Ni(r));const i="reauthenticate";try{const a=await ml(t,QA(r,i,e,t),n);Te(a.idToken,r,"internal-error");const l=Hv(a.idToken);Te(l,r,"internal-error");const{sub:c}=l;return Te(t.uid===c,r,"user-mismatch"),Ho._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&sr(r,"user-mismatch"),a}}/**
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
 */async function XA(t,e,n=!1){if(Un(t.app))return Promise.reject(Ni(t));const r="signIn",i=await QA(t,r,e),a=await Ho._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(a.user),a}async function m4(t,e){return XA(Ys(t),e)}/**
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
 */async function JA(t){const e=Ys(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function g7(t,e,n){if(Un(t.app))return Promise.reject(Ni(t));const r=Ys(t),l=await wy(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",f4).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&JA(t),h}),c=await Ho._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function y7(t,e,n){return Un(t.app)?Promise.reject(Ni(t)):m4(dn(t),Pl.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&JA(t),r})}/**
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
 */async function g4(t,e){return $i(t,"POST","/v1/accounts:update",e)}/**
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
 */async function v7(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=dn(t),a={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},l=await ml(r,g4(r.auth,a));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:h})=>h==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function y4(t,e,n,r){return dn(t).onIdTokenChanged(e,n,r)}function v4(t,e,n){return dn(t).beforeAuthStateChanged(e,n)}function _4(t,e,n,r){return dn(t).onAuthStateChanged(e,n,r)}function w4(t){return dn(t).signOut()}const pd="__sak";/**
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
 */class ZA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pd,"1"),this.storage.removeItem(pd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const E4=1e3,T4=10;class eC extends ZA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=HA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,c,h)=>{this.notifyListeners(l,h)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);UF()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,T4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},E4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}eC.type="LOCAL";const S4=eC;/**
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
 */class tC extends ZA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tC.type="SESSION";const nC=tC;/**
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
 */function x4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ap{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ap(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:a}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async p=>p(n.origin,a)),h=await x4(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ap.receivers=[];/**
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
 */function Qv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class I4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,l;return new Promise((c,h)=>{const p=Qv("",20);i.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(y){const w=y;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(m),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(w.data.response);break;default:clearTimeout(m),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:p,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function ei(){return window}function A4(t){ei().location.href=t}/**
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
 */function rC(){return typeof ei().WorkerGlobalScope<"u"&&typeof ei().importScripts=="function"}async function C4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function k4(){return rC()?self:null}/**
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
 */const iC="firebaseLocalStorageDb",R4=1,md="firebaseLocalStorage",sC="fbase_key";class Pc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lp(t,e){return t.transaction([md],e?"readwrite":"readonly").objectStore(md)}function b4(){const t=indexedDB.deleteDatabase(iC);return new Pc(t).toPromise()}function Ey(){const t=indexedDB.open(iC,R4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(md,{keyPath:sC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(md)?e(r):(r.close(),await b4(),e(await Ey()))})})}async function PT(t,e,n){const r=lp(t,!0).put({[sC]:e,value:n});return new Pc(r).toPromise()}async function D4(t,e){const n=lp(t,!1).get(e),r=await new Pc(n).toPromise();return r===void 0?null:r.value}function kT(t,e){const n=lp(t,!0).delete(e);return new Pc(n).toPromise()}const N4=800,V4=3;class oC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ey(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>V4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ap._getInstance(k4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await C4(),!this.activeServiceWorker)return;this.sender=new I4(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||P4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ey();return await PT(e,pd,"1"),await kT(e,pd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>PT(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>D4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kT(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=lp(i,!1).getAll();return new Pc(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),N4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}oC.type="LOCAL";const L4=oC;new Ic(3e4,6e4);/**
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
 */function aC(t,e){return e?Ri(e):(Te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xv extends Kv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rl(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rl(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rl(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function M4(t){return XA(t.auth,new Xv(t),t.bypassAuthState)}function O4(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),p4(n,new Xv(t),t.bypassAuthState)}async function F4(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),d4(n,new Xv(t),t.bypassAuthState)}/**
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
 */class lC{constructor(e,n,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:l,type:c}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M4;case"linkViaPopup":case"linkViaRedirect":return F4;case"reauthViaPopup":case"reauthViaRedirect":return O4;default:sr(this.auth,"internal-error")}}resolve(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const j4=new Ic(2e3,1e4);async function _7(t,e,n){if(Un(t.app))return Promise.reject(Ir(t,"operation-not-supported-in-this-environment"));const r=Ys(t);wF(t,e,Yv);const i=aC(r,n);return new bo(r,"signInViaPopup",e,i).executeNotNull()}class bo extends lC{constructor(e,n,r,i,a){super(e,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,bo.currentPopupAction&&bo.currentPopupAction.cancel(),bo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Oi(this.filter.length===1,"Popup operations only handle one event");const e=Qv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,j4.get())};e()}}bo.currentPopupAction=null;/**
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
 */const U4="pendingRedirect",Df=new Map;class $4 extends lC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Df.get(this.auth._key());if(!e){try{const r=await z4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Df.set(this.auth._key(),e)}return this.bypassAuthState||Df.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z4(t,e){const n=H4(e),r=W4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function B4(t,e){Df.set(t._key(),e)}function W4(t){return Ri(t._redirectPersistence)}function H4(t){return bf(U4,t.config.apiKey,t.name)}async function q4(t,e,n=!1){if(Un(t.app))return Promise.reject(Ni(t));const r=Ys(t),i=aC(r,e),l=await new $4(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const K4=10*60*1e3;class G4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uC(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ir(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K4&&this.cachedEventUids.clear(),this.cachedEventUids.has(RT(e))}saveEventToCache(e){this.cachedEventUids.add(RT(e)),this.lastProcessedEventTime=Date.now()}}function RT(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uC(t);default:return!1}}/**
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
 */async function Q4(t,e={}){return $i(t,"GET","/v1/projects",e)}/**
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
 */const X4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,J4=/^https?/;async function Z4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Q4(t);for(const n of e)try{if(ej(n))return}catch{}sr(t,"unauthorized-domain")}function ej(t){const e=vy(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!J4.test(n))return!1;if(X4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const tj=new Ic(3e4,6e4);function bT(){const t=ei().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nj(t){return new Promise((e,n)=>{var i,a,l;function r(){bT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bT(),n(Ir(t,"network-request-failed"))},timeout:tj.get()})}if((a=(i=ei().gapi)==null?void 0:i.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((l=ei().gapi)!=null&&l.load)r();else{const c=YF("iframefcb");return ei()[c]=()=>{gapi.load?r():n(Ir(t,"network-request-failed"))},KA(`${GF()}?onload=${c}`).catch(h=>n(h))}}).catch(e=>{throw Nf=null,e})}let Nf=null;function rj(t){return Nf=Nf||nj(t),Nf}/**
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
 */const ij=new Ic(5e3,15e3),sj="__/auth/iframe",oj="emulator/auth/iframe",aj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uj(t){const e=t.config;Te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wv(e,oj):`https://${t.config.authDomain}/${sj}`,r={apiKey:e.apiKey,appName:t.name,v:Cl},i=lj.get(t.config.apiHost);i&&(r.eid=i);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Sc(r).slice(1)}`}async function cj(t){const e=await rj(t),n=ei().gapi;return Te(n,t,"internal-error"),e.open({where:document.body,url:uj(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aj,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const l=Ir(t,"network-request-failed"),c=ei().setTimeout(()=>{a(l)},ij.get());function h(){ei().clearTimeout(c),i(r)}r.ping(h).then(h,()=>{a(l)})}))}/**
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
 */const hj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fj=500,dj=600,pj="_blank",mj="http://localhost";class DT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gj(t,e,n,r=fj,i=dj){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h={...hj,width:r.toString(),height:i.toString(),top:a,left:l},p=fn().toLowerCase();n&&(c=UA(p)?pj:n),FA(p)&&(e=e||mj,h.scrollbars="yes");const m=Object.entries(h).reduce((w,[T,x])=>`${w}${T}=${x},`,"");if(jF(p)&&c!=="_self")return yj(e||"",c),new DT(null);const y=window.open(e||"",c,m);Te(y,t,"popup-blocked");try{y.focus()}catch{}return new DT(y)}function yj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const vj="__/auth/handler",_j="emulator/auth/handler",wj=encodeURIComponent("fac");async function NT(t,e,n,r,i,a){Te(t.config.authDomain,t,"auth-domain-config-required"),Te(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Cl,eventId:i};if(e instanceof Yv){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",iO(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))l[m]=y}if(e instanceof Cc){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(l.scopes=m.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const h=await t._getAppCheckToken(),p=h?`#${wj}=${encodeURIComponent(h)}`:"";return`${Ej(t)}?${Sc(c).slice(1)}${p}`}function Ej({config:t}){return t.emulator?Wv(t,_j):`https://${t.authDomain}/${vj}`}/**
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
 */const Ag="webStorageSupport";class Tj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nC,this._completeRedirectFn=q4,this._overrideRedirectResult=B4}async _openPopup(e,n,r,i){var l;Oi((l=this.eventManagers[e._key()])==null?void 0:l.manager,"_initialize() not called before _openPopup()");const a=await NT(e,n,r,vy(),i);return gj(e,a,Qv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const a=await NT(e,n,r,vy(),i);return A4(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(Oi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cj(e),r=new G4(e);return n.register("authEvent",i=>(Te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ag,{type:Ag},i=>{var l;const a=(l=i==null?void 0:i[0])==null?void 0:l[Ag];a!==void 0&&n(!!a),sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Z4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return HA()||jA()||qv()}}const Sj=Tj;var VT="@firebase/auth",LT="1.13.0";/**
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
 */class xj{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ij(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Aj(t){pl(new Bo("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;Te(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:l,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qA(t)},p=new HF(r,i,a,h);return t4(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),pl(new Bo("auth-internal",e=>{const n=Ys(e.getProvider("auth").getImmediate());return(r=>new xj(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ds(VT,LT,Ij(t)),Ds(VT,LT,"esm2020")}/**
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
 */const Cj=5*60,Pj=SA("authIdTokenMaxAge")||Cj;let MT=null;const kj=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Pj)return;const i=n==null?void 0:n.token;MT!==i&&(MT=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Rj(t=PA()){const e=$v(t,"auth");if(e.isInitialized())return e.getImmediate();const n=e4(t,{popupRedirectResolver:Sj,persistence:[L4,S4,nC]}),r=SA("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=kj(a.toString());v4(n,l,()=>l(n.currentUser)),y4(n,c=>l(c))}}const i=EA("auth");return i&&n4(n,`http://${i}`),n}function bj(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}qF({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const a=Ir("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",bj().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Aj("Browser");var OT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ns,cC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,I){function k(){}k.prototype=I.prototype,C.F=I.prototype,C.prototype=new k,C.prototype.constructor=C,C.D=function(D,M,B){for(var N=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)N[Re-2]=arguments[Re];return I.prototype[M].apply(D,N)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,I,k){k||(k=0);const D=Array(16);if(typeof I=="string")for(var M=0;M<16;++M)D[M]=I.charCodeAt(k++)|I.charCodeAt(k++)<<8|I.charCodeAt(k++)<<16|I.charCodeAt(k++)<<24;else for(M=0;M<16;++M)D[M]=I[k++]|I[k++]<<8|I[k++]<<16|I[k++]<<24;I=C.g[0],k=C.g[1],M=C.g[2];let B=C.g[3],N;N=I+(B^k&(M^B))+D[0]+3614090360&4294967295,I=k+(N<<7&4294967295|N>>>25),N=B+(M^I&(k^M))+D[1]+3905402710&4294967295,B=I+(N<<12&4294967295|N>>>20),N=M+(k^B&(I^k))+D[2]+606105819&4294967295,M=B+(N<<17&4294967295|N>>>15),N=k+(I^M&(B^I))+D[3]+3250441966&4294967295,k=M+(N<<22&4294967295|N>>>10),N=I+(B^k&(M^B))+D[4]+4118548399&4294967295,I=k+(N<<7&4294967295|N>>>25),N=B+(M^I&(k^M))+D[5]+1200080426&4294967295,B=I+(N<<12&4294967295|N>>>20),N=M+(k^B&(I^k))+D[6]+2821735955&4294967295,M=B+(N<<17&4294967295|N>>>15),N=k+(I^M&(B^I))+D[7]+4249261313&4294967295,k=M+(N<<22&4294967295|N>>>10),N=I+(B^k&(M^B))+D[8]+1770035416&4294967295,I=k+(N<<7&4294967295|N>>>25),N=B+(M^I&(k^M))+D[9]+2336552879&4294967295,B=I+(N<<12&4294967295|N>>>20),N=M+(k^B&(I^k))+D[10]+4294925233&4294967295,M=B+(N<<17&4294967295|N>>>15),N=k+(I^M&(B^I))+D[11]+2304563134&4294967295,k=M+(N<<22&4294967295|N>>>10),N=I+(B^k&(M^B))+D[12]+1804603682&4294967295,I=k+(N<<7&4294967295|N>>>25),N=B+(M^I&(k^M))+D[13]+4254626195&4294967295,B=I+(N<<12&4294967295|N>>>20),N=M+(k^B&(I^k))+D[14]+2792965006&4294967295,M=B+(N<<17&4294967295|N>>>15),N=k+(I^M&(B^I))+D[15]+1236535329&4294967295,k=M+(N<<22&4294967295|N>>>10),N=I+(M^B&(k^M))+D[1]+4129170786&4294967295,I=k+(N<<5&4294967295|N>>>27),N=B+(k^M&(I^k))+D[6]+3225465664&4294967295,B=I+(N<<9&4294967295|N>>>23),N=M+(I^k&(B^I))+D[11]+643717713&4294967295,M=B+(N<<14&4294967295|N>>>18),N=k+(B^I&(M^B))+D[0]+3921069994&4294967295,k=M+(N<<20&4294967295|N>>>12),N=I+(M^B&(k^M))+D[5]+3593408605&4294967295,I=k+(N<<5&4294967295|N>>>27),N=B+(k^M&(I^k))+D[10]+38016083&4294967295,B=I+(N<<9&4294967295|N>>>23),N=M+(I^k&(B^I))+D[15]+3634488961&4294967295,M=B+(N<<14&4294967295|N>>>18),N=k+(B^I&(M^B))+D[4]+3889429448&4294967295,k=M+(N<<20&4294967295|N>>>12),N=I+(M^B&(k^M))+D[9]+568446438&4294967295,I=k+(N<<5&4294967295|N>>>27),N=B+(k^M&(I^k))+D[14]+3275163606&4294967295,B=I+(N<<9&4294967295|N>>>23),N=M+(I^k&(B^I))+D[3]+4107603335&4294967295,M=B+(N<<14&4294967295|N>>>18),N=k+(B^I&(M^B))+D[8]+1163531501&4294967295,k=M+(N<<20&4294967295|N>>>12),N=I+(M^B&(k^M))+D[13]+2850285829&4294967295,I=k+(N<<5&4294967295|N>>>27),N=B+(k^M&(I^k))+D[2]+4243563512&4294967295,B=I+(N<<9&4294967295|N>>>23),N=M+(I^k&(B^I))+D[7]+1735328473&4294967295,M=B+(N<<14&4294967295|N>>>18),N=k+(B^I&(M^B))+D[12]+2368359562&4294967295,k=M+(N<<20&4294967295|N>>>12),N=I+(k^M^B)+D[5]+4294588738&4294967295,I=k+(N<<4&4294967295|N>>>28),N=B+(I^k^M)+D[8]+2272392833&4294967295,B=I+(N<<11&4294967295|N>>>21),N=M+(B^I^k)+D[11]+1839030562&4294967295,M=B+(N<<16&4294967295|N>>>16),N=k+(M^B^I)+D[14]+4259657740&4294967295,k=M+(N<<23&4294967295|N>>>9),N=I+(k^M^B)+D[1]+2763975236&4294967295,I=k+(N<<4&4294967295|N>>>28),N=B+(I^k^M)+D[4]+1272893353&4294967295,B=I+(N<<11&4294967295|N>>>21),N=M+(B^I^k)+D[7]+4139469664&4294967295,M=B+(N<<16&4294967295|N>>>16),N=k+(M^B^I)+D[10]+3200236656&4294967295,k=M+(N<<23&4294967295|N>>>9),N=I+(k^M^B)+D[13]+681279174&4294967295,I=k+(N<<4&4294967295|N>>>28),N=B+(I^k^M)+D[0]+3936430074&4294967295,B=I+(N<<11&4294967295|N>>>21),N=M+(B^I^k)+D[3]+3572445317&4294967295,M=B+(N<<16&4294967295|N>>>16),N=k+(M^B^I)+D[6]+76029189&4294967295,k=M+(N<<23&4294967295|N>>>9),N=I+(k^M^B)+D[9]+3654602809&4294967295,I=k+(N<<4&4294967295|N>>>28),N=B+(I^k^M)+D[12]+3873151461&4294967295,B=I+(N<<11&4294967295|N>>>21),N=M+(B^I^k)+D[15]+530742520&4294967295,M=B+(N<<16&4294967295|N>>>16),N=k+(M^B^I)+D[2]+3299628645&4294967295,k=M+(N<<23&4294967295|N>>>9),N=I+(M^(k|~B))+D[0]+4096336452&4294967295,I=k+(N<<6&4294967295|N>>>26),N=B+(k^(I|~M))+D[7]+1126891415&4294967295,B=I+(N<<10&4294967295|N>>>22),N=M+(I^(B|~k))+D[14]+2878612391&4294967295,M=B+(N<<15&4294967295|N>>>17),N=k+(B^(M|~I))+D[5]+4237533241&4294967295,k=M+(N<<21&4294967295|N>>>11),N=I+(M^(k|~B))+D[12]+1700485571&4294967295,I=k+(N<<6&4294967295|N>>>26),N=B+(k^(I|~M))+D[3]+2399980690&4294967295,B=I+(N<<10&4294967295|N>>>22),N=M+(I^(B|~k))+D[10]+4293915773&4294967295,M=B+(N<<15&4294967295|N>>>17),N=k+(B^(M|~I))+D[1]+2240044497&4294967295,k=M+(N<<21&4294967295|N>>>11),N=I+(M^(k|~B))+D[8]+1873313359&4294967295,I=k+(N<<6&4294967295|N>>>26),N=B+(k^(I|~M))+D[15]+4264355552&4294967295,B=I+(N<<10&4294967295|N>>>22),N=M+(I^(B|~k))+D[6]+2734768916&4294967295,M=B+(N<<15&4294967295|N>>>17),N=k+(B^(M|~I))+D[13]+1309151649&4294967295,k=M+(N<<21&4294967295|N>>>11),N=I+(M^(k|~B))+D[4]+4149444226&4294967295,I=k+(N<<6&4294967295|N>>>26),N=B+(k^(I|~M))+D[11]+3174756917&4294967295,B=I+(N<<10&4294967295|N>>>22),N=M+(I^(B|~k))+D[2]+718787259&4294967295,M=B+(N<<15&4294967295|N>>>17),N=k+(B^(M|~I))+D[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(M+(N<<21&4294967295|N>>>11))&4294967295,C.g[2]=C.g[2]+M&4294967295,C.g[3]=C.g[3]+B&4294967295}r.prototype.v=function(C,I){I===void 0&&(I=C.length);const k=I-this.blockSize,D=this.C;let M=this.h,B=0;for(;B<I;){if(M==0)for(;B<=k;)i(this,C,B),B+=this.blockSize;if(typeof C=="string"){for(;B<I;)if(D[M++]=C.charCodeAt(B++),M==this.blockSize){i(this,D),M=0;break}}else for(;B<I;)if(D[M++]=C[B++],M==this.blockSize){i(this,D),M=0;break}}this.h=M,this.o+=I},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var k=C.length-8;k<C.length;++k)C[k]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,k=0;k<4;++k)for(let D=0;D<32;D+=8)C[I++]=this.g[k]>>>D&255;return C};function a(C,I){var k=c;return Object.prototype.hasOwnProperty.call(k,C)?k[C]:k[C]=I(C)}function l(C,I){this.h=I;const k=[];let D=!0;for(let M=C.length-1;M>=0;M--){const B=C[M]|0;D&&B==I||(k[M]=B,D=!1)}this.g=k}var c={};function h(C){return-128<=C&&C<128?a(C,function(I){return new l([I|0],I<0?-1:0)}):new l([C|0],C<0?-1:0)}function p(C){if(isNaN(C)||!isFinite(C))return y;if(C<0)return R(p(-C));const I=[];let k=1;for(let D=0;C>=k;D++)I[D]=C/k|0,k*=4294967296;return new l(I,0)}function m(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return R(m(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const k=p(Math.pow(I,8));let D=y;for(let B=0;B<C.length;B+=8){var M=Math.min(8,C.length-B);const N=parseInt(C.substring(B,B+M),I);M<8?(M=p(Math.pow(I,M)),D=D.j(M).add(p(N))):(D=D.j(k),D=D.add(p(N)))}return D}var y=h(0),w=h(1),T=h(16777216);t=l.prototype,t.m=function(){if(P(this))return-R(this).m();let C=0,I=1;for(let k=0;k<this.g.length;k++){const D=this.i(k);C+=(D>=0?D:4294967296+D)*I,I*=4294967296}return C},t.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(x(this))return"0";if(P(this))return"-"+R(this).toString(C);const I=p(Math.pow(C,6));var k=this;let D="";for(;;){const M=U(k,I).g;k=b(k,M.j(I));let B=((k.g.length>0?k.g[0]:k.h)>>>0).toString(C);if(k=M,x(k))return B+D;for(;B.length<6;)B="0"+B;D=B+D}},t.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function x(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function P(C){return C.h==-1}t.l=function(C){return C=b(this,C),P(C)?-1:x(C)?0:1};function R(C){const I=C.g.length,k=[];for(let D=0;D<I;D++)k[D]=~C.g[D];return new l(k,~C.h).add(w)}t.abs=function(){return P(this)?R(this):this},t.add=function(C){const I=Math.max(this.g.length,C.g.length),k=[];let D=0;for(let M=0;M<=I;M++){let B=D+(this.i(M)&65535)+(C.i(M)&65535),N=(B>>>16)+(this.i(M)>>>16)+(C.i(M)>>>16);D=N>>>16,B&=65535,N&=65535,k[M]=N<<16|B}return new l(k,k[k.length-1]&-2147483648?-1:0)};function b(C,I){return C.add(R(I))}t.j=function(C){if(x(this)||x(C))return y;if(P(this))return P(C)?R(this).j(R(C)):R(R(this).j(C));if(P(C))return R(this.j(R(C)));if(this.l(T)<0&&C.l(T)<0)return p(this.m()*C.m());const I=this.g.length+C.g.length,k=[];for(var D=0;D<2*I;D++)k[D]=0;for(D=0;D<this.g.length;D++)for(let M=0;M<C.g.length;M++){const B=this.i(D)>>>16,N=this.i(D)&65535,Re=C.i(M)>>>16,Ge=C.i(M)&65535;k[2*D+2*M]+=N*Ge,O(k,2*D+2*M),k[2*D+2*M+1]+=B*Ge,O(k,2*D+2*M+1),k[2*D+2*M+1]+=N*Re,O(k,2*D+2*M+1),k[2*D+2*M+2]+=B*Re,O(k,2*D+2*M+2)}for(C=0;C<I;C++)k[C]=k[2*C+1]<<16|k[2*C];for(C=I;C<2*I;C++)k[C]=0;return new l(k,0)};function O(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function $(C,I){this.g=C,this.h=I}function U(C,I){if(x(I))throw Error("division by zero");if(x(C))return new $(y,y);if(P(C))return I=U(R(C),I),new $(R(I.g),R(I.h));if(P(I))return I=U(C,R(I)),new $(R(I.g),I.h);if(C.g.length>30){if(P(C)||P(I))throw Error("slowDivide_ only works with positive integers.");for(var k=w,D=I;D.l(C)<=0;)k=H(k),D=H(D);var M=X(k,1),B=X(D,1);for(D=X(D,2),k=X(k,2);!x(D);){var N=B.add(D);N.l(C)<=0&&(M=M.add(k),B=N),D=X(D,1),k=X(k,1)}return I=b(C,M.j(I)),new $(M,I)}for(M=y;C.l(I)>=0;){for(k=Math.max(1,Math.floor(C.m()/I.m())),D=Math.ceil(Math.log(k)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),B=p(k),N=B.j(I);P(N)||N.l(C)>0;)k-=D,B=p(k),N=B.j(I);x(B)&&(B=w),M=M.add(B),C=b(C,N)}return new $(M,C)}t.B=function(C){return U(this,C).h},t.and=function(C){const I=Math.max(this.g.length,C.g.length),k=[];for(let D=0;D<I;D++)k[D]=this.i(D)&C.i(D);return new l(k,this.h&C.h)},t.or=function(C){const I=Math.max(this.g.length,C.g.length),k=[];for(let D=0;D<I;D++)k[D]=this.i(D)|C.i(D);return new l(k,this.h|C.h)},t.xor=function(C){const I=Math.max(this.g.length,C.g.length),k=[];for(let D=0;D<I;D++)k[D]=this.i(D)^C.i(D);return new l(k,this.h^C.h)};function H(C){const I=C.g.length+1,k=[];for(let D=0;D<I;D++)k[D]=C.i(D)<<1|C.i(D-1)>>>31;return new l(k,C.h)}function X(C,I){const k=I>>5;I%=32;const D=C.g.length-k,M=[];for(let B=0;B<D;B++)M[B]=I>0?C.i(B+k)>>>I|C.i(B+k+1)<<32-I:C.i(B+k);return new l(M,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,cC=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=m,Ns=l}).apply(typeof OT<"u"?OT:typeof self<"u"?self:typeof window<"u"?window:{});var lf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hC,ju,fC,Vf,Ty,dC,pC,mC;(function(){var t,e=Object.defineProperty;function n(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof lf=="object"&&lf];for(var _=0;_<f.length;++_){var E=f[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=n(this);function i(f,_){if(_)e:{var E=r;f=f.split(".");for(var A=0;A<f.length-1;A++){var K=f[A];if(!(K in E))break e;E=E[K]}f=f[f.length-1],A=E[f],_=_(A),_!=A&&_!=null&&e(E,f,{configurable:!0,writable:!0,value:_})}}i("Symbol.dispose",function(f){return f||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(f){return f||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(f){return f||function(_){var E=[],A;for(A in _)Object.prototype.hasOwnProperty.call(_,A)&&E.push([A,_[A]]);return E}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(f){var _=typeof f;return _=="object"&&f!=null||_=="function"}function h(f,_,E){return f.call.apply(f.bind,arguments)}function p(f,_,E){return p=h,p.apply(null,arguments)}function m(f,_){var E=Array.prototype.slice.call(arguments,1);return function(){var A=E.slice();return A.push.apply(A,arguments),f.apply(this,A)}}function y(f,_){function E(){}E.prototype=_.prototype,f.Z=_.prototype,f.prototype=new E,f.prototype.constructor=f,f.Ob=function(A,K,Q){for(var le=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)le[Pe-2]=arguments[Pe];return _.prototype[K].apply(A,le)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?f=>f&&AsyncContext.Snapshot.wrap(f):f=>f;function T(f){const _=f.length;if(_>0){const E=Array(_);for(let A=0;A<_;A++)E[A]=f[A];return E}return[]}function x(f,_){for(let A=1;A<arguments.length;A++){const K=arguments[A];var E=typeof K;if(E=E!="object"?E:K?Array.isArray(K)?"array":E:"null",E=="array"||E=="object"&&typeof K.length=="number"){E=f.length||0;const Q=K.length||0;f.length=E+Q;for(let le=0;le<Q;le++)f[E+le]=K[le]}else f.push(K)}}class P{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return this.h>0?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function R(f){l.setTimeout(()=>{throw f},0)}function b(){var f=C;let _=null;return f.g&&(_=f.g,f.g=f.g.next,f.g||(f.h=null),_.next=null),_}class O{constructor(){this.h=this.g=null}add(_,E){const A=$.get();A.set(_,E),this.h?this.h.next=A:this.g=A,this.h=A}}var $=new P(()=>new U,f=>f.reset());class U{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let H,X=!1,C=new O,I=()=>{const f=Promise.resolve(void 0);H=()=>{f.then(k)}};function k(){for(var f;f=b();){try{f.h.call(f.g)}catch(E){R(E)}var _=$;_.j(f),_.h<100&&(_.h++,f.next=_.g,_.g=f)}X=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function M(f,_){this.type=f,this.g=this.target=_,this.defaultPrevented=!1}M.prototype.h=function(){this.defaultPrevented=!0};var B=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var f=!1,_=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const E=()=>{};l.addEventListener("test",E,_),l.removeEventListener("test",E,_)}catch{}return f}();function N(f){return/^[\s\xa0]*$/.test(f)}function Re(f,_){M.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f&&this.init(f,_)}y(Re,M),Re.prototype.init=function(f,_){const E=this.type=f.type,A=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;this.target=f.target||f.srcElement,this.g=_,_=f.relatedTarget,_||(E=="mouseover"?_=f.fromElement:E=="mouseout"&&(_=f.toElement)),this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=f.pointerType,this.state=f.state,this.i=f,f.defaultPrevented&&Re.Z.h.call(this)},Re.prototype.h=function(){Re.Z.h.call(this);const f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var Ge="closure_listenable_"+(Math.random()*1e6|0),Xe=0;function Je(f,_,E,A,K){this.listener=f,this.proxy=null,this.src=_,this.type=E,this.capture=!!A,this.ha=K,this.key=++Xe,this.da=this.fa=!1}function re(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function ce(f,_,E){for(const A in f)_.call(E,f[A],A,f)}function ue(f,_){for(const E in f)_.call(void 0,f[E],E,f)}function W(f){const _={};for(const E in f)_[E]=f[E];return _}const J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ae(f,_){let E,A;for(let K=1;K<arguments.length;K++){A=arguments[K];for(E in A)f[E]=A[E];for(let Q=0;Q<J.length;Q++)E=J[Q],Object.prototype.hasOwnProperty.call(A,E)&&(f[E]=A[E])}}function Ie(f){this.src=f,this.g={},this.h=0}Ie.prototype.add=function(f,_,E,A,K){const Q=f.toString();f=this.g[Q],f||(f=this.g[Q]=[],this.h++);const le=be(f,_,A,K);return le>-1?(_=f[le],E||(_.fa=!1)):(_=new Je(_,this.src,Q,!!A,K),_.fa=E,f.push(_)),_};function De(f,_){const E=_.type;if(E in f.g){var A=f.g[E],K=Array.prototype.indexOf.call(A,_,void 0),Q;(Q=K>=0)&&Array.prototype.splice.call(A,K,1),Q&&(re(_),f.g[E].length==0&&(delete f.g[E],f.h--))}}function be(f,_,E,A){for(let K=0;K<f.length;++K){const Q=f[K];if(!Q.da&&Q.listener==_&&Q.capture==!!E&&Q.ha==A)return K}return-1}var Ue="closure_lm_"+(Math.random()*1e6|0),Le={};function $e(f,_,E,A,K){if(Array.isArray(_)){for(let Q=0;Q<_.length;Q++)$e(f,_[Q],E,A,K);return null}return E=Ol(E),f&&f[Ge]?f.J(_,E,c(A)?!!A.capture:!1,K):Nt(f,_,E,!1,A,K)}function Nt(f,_,E,A,K,Q){if(!_)throw Error("Invalid event type");const le=c(K)?!!K.capture:!!K;let Pe=ta(f);if(Pe||(f[Ue]=Pe=new Ie(f)),E=Pe.add(_,E,A,le,Q),E.proxy)return E;if(A=ar(),E.proxy=A,A.src=f,A.listener=E,f.addEventListener)B||(K=le),K===void 0&&(K=!1),f.addEventListener(_.toString(),A,K);else if(f.attachEvent)f.attachEvent(ea(_.toString()),A);else if(f.addListener&&f.removeListener)f.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return E}function ar(){function f(E){return _.call(f.src,f.listener,E)}const _=jc;return f}function _n(f,_,E,A,K){if(Array.isArray(_))for(var Q=0;Q<_.length;Q++)_n(f,_[Q],E,A,K);else A=c(A)?!!A.capture:!!A,E=Ol(E),f&&f[Ge]?(f=f.i,Q=String(_).toString(),Q in f.g&&(_=f.g[Q],E=be(_,E,A,K),E>-1&&(re(_[E]),Array.prototype.splice.call(_,E,1),_.length==0&&(delete f.g[Q],f.h--)))):f&&(f=ta(f))&&(_=f.g[_.toString()],f=-1,_&&(f=be(_,E,A,K)),(E=f>-1?_[f]:null)&&zi(E))}function zi(f){if(typeof f!="number"&&f&&!f.da){var _=f.src;if(_&&_[Ge])De(_.i,f);else{var E=f.type,A=f.proxy;_.removeEventListener?_.removeEventListener(E,A,f.capture):_.detachEvent?_.detachEvent(ea(E),A):_.addListener&&_.removeListener&&_.removeListener(A),(E=ta(_))?(De(E,f),E.h==0&&(E.src=null,_[Ue]=null)):re(f)}}}function ea(f){return f in Le?Le[f]:Le[f]="on"+f}function jc(f,_){if(f.da)f=!0;else{_=new Re(_,this);const E=f.listener,A=f.ha||f.src;f.fa&&zi(f),f=E.call(A,_)}return f}function ta(f){return f=f[Ue],f instanceof Ie?f:null}var Xs="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ol(f){return typeof f=="function"?f:(f[Xs]||(f[Xs]=function(_){return f.handleEvent(_)}),f[Xs])}function It(){D.call(this),this.i=new Ie(this),this.M=this,this.G=null}y(It,D),It.prototype[Ge]=!0,It.prototype.removeEventListener=function(f,_,E,A){_n(this,f,_,E,A)};function Et(f,_){var E,A=f.G;if(A)for(E=[];A;A=A.G)E.push(A);if(f=f.M,A=_.type||_,typeof _=="string")_=new M(_,f);else if(_ instanceof M)_.target=_.target||f;else{var K=_;_=new M(A,f),Ae(_,K)}K=!0;let Q,le;if(E)for(le=E.length-1;le>=0;le--)Q=_.g=E[le],K=lr(Q,A,!0,_)&&K;if(Q=_.g=f,K=lr(Q,A,!0,_)&&K,K=lr(Q,A,!1,_)&&K,E)for(le=0;le<E.length;le++)Q=_.g=E[le],K=lr(Q,A,!1,_)&&K}It.prototype.N=function(){if(It.Z.N.call(this),this.i){var f=this.i;for(const _ in f.g){const E=f.g[_];for(let A=0;A<E.length;A++)re(E[A]);delete f.g[_],f.h--}}this.G=null},It.prototype.J=function(f,_,E,A){return this.i.add(String(f),_,!1,E,A)},It.prototype.K=function(f,_,E,A){return this.i.add(String(f),_,!0,E,A)};function lr(f,_,E,A){if(_=f.i.g[String(_)],!_)return!0;_=_.concat();let K=!0;for(let Q=0;Q<_.length;++Q){const le=_[Q];if(le&&!le.da&&le.capture==E){const Pe=le.listener,Tt=le.ha||le.src;le.fa&&De(f.i,le),K=Pe.call(Tt,A)!==!1&&K}}return K&&!A.defaultPrevented}function Fl(f,_){if(typeof f!="function")if(f&&typeof f.handleEvent=="function")f=p(f.handleEvent,f);else throw Error("Invalid listener argument");return Number(_)>2147483647?-1:l.setTimeout(f,_||0)}function jl(f){f.g=Fl(()=>{f.g=null,f.i&&(f.i=!1,jl(f))},f.l);const _=f.h;f.h=null,f.m.apply(null,_)}class Uc extends D{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:jl(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bi(f){D.call(this),this.h=f,this.g={}}y(Bi,D);var Ul=[];function na(f){ce(f.g,function(_,E){this.g.hasOwnProperty(E)&&zi(_)},f),f.g={}}Bi.prototype.N=function(){Bi.Z.N.call(this),na(this)},Bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wi=l.JSON.stringify,$c=l.JSON.parse,Js=class{stringify(f){return l.JSON.stringify(f,void 0)}parse(f){return l.JSON.parse(f,void 0)}};function Hi(){}function zc(){}var qi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ra(){M.call(this,"d")}y(ra,M);function $l(){M.call(this,"c")}y($l,M);var ur={},ia=null;function Ki(){return ia=ia||new It}ur.Ia="serverreachability";function sa(f){M.call(this,ur.Ia,f)}y(sa,M);function li(f){const _=Ki();Et(_,new sa(_))}ur.STAT_EVENT="statevent";function ui(f,_){M.call(this,ur.STAT_EVENT,f),this.stat=_}y(ui,M);function vt(f){const _=Ki();Et(_,new ui(_,f))}ur.Ja="timingevent";function zl(f,_){M.call(this,ur.Ja,f),this.size=_}y(zl,M);function Gi(f,_){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){f()},_)}function Yi(){this.g=!0}Yi.prototype.ua=function(){this.g=!1};function Bc(f,_,E,A,K,Q){f.info(function(){if(f.g)if(Q){var le="",Pe=Q.split("&");for(let Ze=0;Ze<Pe.length;Ze++){var Tt=Pe[Ze].split("=");if(Tt.length>1){const At=Tt[0];Tt=Tt[1];const Vn=At.split("_");le=Vn.length>=2&&Vn[1]=="type"?le+(At+"="+Tt+"&"):le+(At+"=redacted&")}}}else le=null;else le=Q;return"XMLHTTP REQ ("+A+") [attempt "+K+"]: "+_+`
`+E+`
`+le})}function Wc(f,_,E,A,K,Q,le){f.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+K+"]: "+_+`
`+E+`
`+Q+" "+le})}function Dr(f,_,E,A){f.info(function(){return"XMLHTTP TEXT ("+_+"): "+Zs(f,E)+(A?" "+A:"")})}function Hc(f,_){f.info(function(){return"TIMEOUT: "+_})}Yi.prototype.info=function(){};function Zs(f,_){if(!f.g)return _;if(!_)return null;try{const Q=JSON.parse(_);if(Q){for(f=0;f<Q.length;f++)if(Array.isArray(Q[f])){var E=Q[f];if(!(E.length<2)){var A=E[1];if(Array.isArray(A)&&!(A.length<1)){var K=A[0];if(K!="noop"&&K!="stop"&&K!="close")for(let le=1;le<A.length;le++)A[le]=""}}}}return Wi(Q)}catch{return _}}var Qi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qc;function ci(){}y(ci,Hi),ci.prototype.g=function(){return new XMLHttpRequest},qc=new ci;function Nr(f){return encodeURIComponent(String(f))}function oa(f){var _=1;f=f.split(":");const E=[];for(;_>0&&f.length;)E.push(f.shift()),_--;return f.length&&E.push(f.join(":")),E}function Wn(f,_,E,A){this.j=f,this.i=_,this.l=E,this.S=A||1,this.V=new Bi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Kc}function Kc(){this.i=null,this.g="",this.h=!1}var Gc={},Bl={};function cr(f,_,E){f.M=1,f.A=fi(Hn(_)),f.u=E,f.R=!0,Wl(f,null)}function Wl(f,_){f.F=Date.now(),eo(f),f.B=Hn(f.A);var E=f.B,A=f.S;Array.isArray(A)||(A=[String(A)]),eu(E.i,"t",A),f.C=0,E=f.j.L,f.h=new Kc,f.g=ih(f.j,E?_:null,!f.u),f.P>0&&(f.O=new Uc(p(f.Y,f,f.g),f.P)),_=f.V,E=f.g,A=f.ba;var K="readystatechange";Array.isArray(K)||(K&&(Ul[0]=K.toString()),K=Ul);for(let Q=0;Q<K.length;Q++){const le=$e(E,K[Q],A||_.handleEvent,!1,_.h||_);if(!le)break;_.g[le.key]=le}_=f.J?W(f.J):{},f.u?(f.v||(f.v="POST"),_["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.B,f.v,f.u,_)):(f.v="GET",f.g.ea(f.B,f.v,null,_)),li(),Bc(f.i,f.v,f.B,f.l,f.S,f.u)}Wn.prototype.ba=function(f){f=f.target;const _=this.O;_&&Ur(f)==3?_.j():this.Y(f)},Wn.prototype.Y=function(f){try{if(f==this.g)e:{const Pe=Ur(this.g),Tt=this.g.ya(),Ze=this.g.ca();if(!(Pe<3)&&(Pe!=3||this.g&&(this.h.h||this.g.la()||nh(this.g)))){this.K||Pe!=4||Tt==7||(Tt==8||Ze<=0?li(3):li(2)),aa(this);var _=this.g.ca();this.X=_;var E=Yc(this);if(this.o=_==200,Wc(this.i,this.v,this.B,this.l,this.S,Pe,_),this.o){if(this.U&&!this.L){t:{if(this.g){var A,K=this.g;if((A=K.g?K.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(A)){var Q=A;break t}}Q=null}if(f=Q)Dr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ot(this,f);else{this.o=!1,this.m=3,vt(12),hi(this),to(this);break e}}if(this.R){f=!0;let At;for(;!this.K&&this.C<E.length;)if(At=Xc(this,E),At==Bl){Pe==4&&(this.m=4,vt(14),f=!1),Dr(this.i,this.l,null,"[Incomplete Response]");break}else if(At==Gc){this.m=4,vt(15),Dr(this.i,this.l,E,"[Invalid Chunk]"),f=!1;break}else Dr(this.i,this.l,At,null),ot(this,At);if(Qc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||E.length!=0||this.h.h||(this.m=1,vt(16),f=!1),this.o=this.o&&f,!f)Dr(this.i,this.l,E,"[Invalid Chunked Response]"),hi(this),to(this);else if(E.length>0&&!this.W){this.W=!0;var le=this.j;le.g==this&&le.aa&&!le.P&&(le.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),co(le),le.P=!0,vt(11))}}else Dr(this.i,this.l,E,null),ot(this,E);Pe==4&&hi(this),this.o&&!this.K&&(Pe==4?ya(this.j,this):(this.o=!1,eo(this)))}else nu(this.g),_==400&&E.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),hi(this),to(this)}}}catch{}finally{}};function Yc(f){if(!Qc(f))return f.g.la();const _=nh(f.g);if(_==="")return"";let E="";const A=_.length,K=Ur(f.g)==4;if(!f.h.i){if(typeof TextDecoder>"u")return hi(f),to(f),"";f.h.i=new l.TextDecoder}for(let Q=0;Q<A;Q++)f.h.h=!0,E+=f.h.i.decode(_[Q],{stream:!(K&&Q==A-1)});return _.length=0,f.h.g+=E,f.C=0,f.h.g}function Qc(f){return f.g?f.v=="GET"&&f.M!=2&&f.j.Aa:!1}function Xc(f,_){var E=f.C,A=_.indexOf(`
`,E);return A==-1?Bl:(E=Number(_.substring(E,A)),isNaN(E)?Gc:(A+=1,A+E>_.length?Bl:(_=_.slice(A,A+E),f.C=A+E,_)))}Wn.prototype.cancel=function(){this.K=!0,hi(this)};function eo(f){f.T=Date.now()+f.H,Hl(f,f.H)}function Hl(f,_){if(f.D!=null)throw Error("WatchDog timer not null");f.D=Gi(p(f.aa,f),_)}function aa(f){f.D&&(l.clearTimeout(f.D),f.D=null)}Wn.prototype.aa=function(){this.D=null;const f=Date.now();f-this.T>=0?(Hc(this.i,this.B),this.M!=2&&(li(),vt(17)),hi(this),this.m=2,to(this)):Hl(this,this.T-f)};function to(f){f.j.I==0||f.K||ya(f.j,f)}function hi(f){aa(f);var _=f.O;_&&typeof _.dispose=="function"&&_.dispose(),f.O=null,na(f.V),f.g&&(_=f.g,f.g=null,_.abort(),_.dispose())}function ot(f,_){try{var E=f.j;if(E.I!=0&&(E.g==f||Kl(E.h,f))){if(!f.L&&Kl(E.h,f)&&E.I==3){try{var A=E.Ba.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var K=A;if(K[0]==0){e:if(!E.v){if(E.g)if(E.g.F+3e3<f.F)ga(E),Dn(E);else break e;Br(E),vt(18)}}else E.xa=K[1],0<E.xa-E.K&&K[2]<37500&&E.F&&E.A==0&&!E.C&&(E.C=Gi(p(E.Va,E),6e3));no(E.h)<=1&&E.ta&&(E.ta=void 0)}else Nn(E,11)}else if((f.L||E.g==f)&&ga(E),!N(_))for(K=E.Ba.g.parse(_),_=0;_<K.length;_++){let Ze=K[_];const At=Ze[0];if(!(At<=E.K))if(E.K=At,Ze=Ze[1],E.I==2)if(Ze[0]=="c"){E.M=Ze[1],E.ba=Ze[2];const Vn=Ze[3];Vn!=null&&(E.ka=Vn,E.j.info("VER="+E.ka));const yi=Ze[4];yi!=null&&(E.za=yi,E.j.info("SVER="+E.za));const Wr=Ze[5];Wr!=null&&typeof Wr=="number"&&Wr>0&&(A=1.5*Wr,E.O=A,E.j.info("backChannelRequestTimeoutMs_="+A)),A=E;const Hr=f.g;if(Hr){const wa=Hr.g?Hr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wa){var Q=A.h;Q.g||wa.indexOf("spdy")==-1&&wa.indexOf("quic")==-1&&wa.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(ua(Q,Q.h),Q.h=null))}if(A.G){const su=Hr.g?Hr.g.getResponseHeader("X-HTTP-Session-Id"):null;su&&(A.wa=su,Ke(A.J,A.G,su))}}E.I=3,E.l&&E.l.ra(),E.aa&&(E.T=Date.now()-f.F,E.j.info("Handshake RTT: "+E.T+"ms")),A=E;var le=f;if(A.na=iu(A,A.L?A.ba:null,A.W),le.L){ro(A.h,le);var Pe=le,Tt=A.O;Tt&&(Pe.H=Tt),Pe.D&&(aa(Pe),eo(Pe)),A.g=le}else rn(A);E.i.length>0&&gi(E)}else Ze[0]!="stop"&&Ze[0]!="close"||Nn(E,7);else E.I==3&&(Ze[0]=="stop"||Ze[0]=="close"?Ze[0]=="stop"?Nn(E,7):pa(E):Ze[0]!="noop"&&E.l&&E.l.qa(Ze),E.A=0)}}li(4)}catch{}}var Rp=class{constructor(f,_){this.g=f,this.map=_}};function la(f){this.l=f||10,l.PerformanceNavigationTiming?(f=l.performance.getEntriesByType("navigation"),f=f.length>0&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ql(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function no(f){return f.h?1:f.g?f.g.size:0}function Kl(f,_){return f.h?f.h==_:f.g?f.g.has(_):!1}function ua(f,_){f.g?f.g.add(_):f.h=_}function ro(f,_){f.h&&f.h==_?f.h=null:f.g&&f.g.has(_)&&f.g.delete(_)}la.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function kn(f){if(f.h!=null)return f.i.concat(f.h.G);if(f.g!=null&&f.g.size!==0){let _=f.i;for(const E of f.g.values())_=_.concat(E.G);return _}return T(f.i)}var Jc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rn(f,_){if(f){f=f.split("&");for(let E=0;E<f.length;E++){const A=f[E].indexOf("=");let K,Q=null;A>=0?(K=f[E].substring(0,A),Q=f[E].substring(A+1)):K=f[E],_(K,Q?decodeURIComponent(Q.replace(/\+/g," ")):"")}}}function Vr(f){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let _;f instanceof Vr?(this.l=f.l,io(this,f.j),this.o=f.o,this.g=f.g,Lr(this,f.u),this.h=f.h,Ji(this,tu(f.i)),this.m=f.m):f&&(_=String(f).match(Jc))?(this.l=!1,io(this,_[1]||"",!0),this.o=so(_[2]||""),this.g=so(_[3]||"",!0),Lr(this,_[4]),this.h=so(_[5]||"",!0),Ji(this,_[6]||"",!0),this.m=so(_[7]||"")):(this.l=!1,this.i=new ze(null,this.l))}Vr.prototype.toString=function(){const f=[];var _=this.j;_&&f.push(oo(_,Yl,!0),":");var E=this.g;return(E||_=="file")&&(f.push("//"),(_=this.o)&&f.push(oo(_,Yl,!0),"@"),f.push(Nr(E).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.u,E!=null&&f.push(":",String(E))),(E=this.h)&&(this.g&&E.charAt(0)!="/"&&f.push("/"),f.push(oo(E,E.charAt(0)=="/"?ao:Ql,!0))),(E=this.i.toString())&&f.push("?",E),(E=this.m)&&f.push("#",oo(E,Xl)),f.join("")},Vr.prototype.resolve=function(f){const _=Hn(this);let E=!!f.j;E?io(_,f.j):E=!!f.o,E?_.o=f.o:E=!!f.g,E?_.g=f.g:E=f.u!=null;var A=f.h;if(E)Lr(_,f.u);else if(E=!!f.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var K=_.h.lastIndexOf("/");K!=-1&&(A=_.h.slice(0,K+1)+A)}if(K=A,K==".."||K==".")A="";else if(K.indexOf("./")!=-1||K.indexOf("/.")!=-1){A=K.lastIndexOf("/",0)==0,K=K.split("/");const Q=[];for(let le=0;le<K.length;){const Pe=K[le++];Pe=="."?A&&le==K.length&&Q.push(""):Pe==".."?((Q.length>1||Q.length==1&&Q[0]!="")&&Q.pop(),A&&le==K.length&&Q.push("")):(Q.push(Pe),A=!0)}A=Q.join("/")}else A=K}return E?_.h=A:E=f.i.toString()!=="",E?Ji(_,tu(f.i)):E=!!f.m,E&&(_.m=f.m),_};function Hn(f){return new Vr(f)}function io(f,_,E){f.j=E?so(_,!0):_,f.j&&(f.j=f.j.replace(/:$/,""))}function Lr(f,_){if(_){if(_=Number(_),isNaN(_)||_<0)throw Error("Bad port number "+_);f.u=_}else f.u=null}function Ji(f,_,E){_ instanceof ze?(f.i=_,ha(f.i,f.l)):(E||(_=oo(_,bp)),f.i=new ze(_,f.l))}function Ke(f,_,E){f.i.set(_,E)}function fi(f){return Ke(f,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),f}function so(f,_){return f?_?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function oo(f,_,E){return typeof f=="string"?(f=encodeURI(f).replace(_,Gl),E&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function Gl(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var Yl=/[#\/\?@]/g,Ql=/[#\?:]/g,ao=/[#\?]/g,bp=/[#\?@]/g,Xl=/#/g;function ze(f,_){this.h=this.g=null,this.i=f||null,this.j=!!_}function Mr(f){f.g||(f.g=new Map,f.h=0,f.i&&Rn(f.i,function(_,E){f.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}t=ze.prototype,t.add=function(f,_){Mr(this),this.i=null,f=Or(this,f);let E=this.g.get(f);return E||this.g.set(f,E=[]),E.push(_),this.h+=1,this};function Jl(f,_){Mr(f),_=Or(f,_),f.g.has(_)&&(f.i=null,f.h-=f.g.get(_).length,f.g.delete(_))}function ca(f,_){return Mr(f),_=Or(f,_),f.g.has(_)}t.forEach=function(f,_){Mr(this),this.g.forEach(function(E,A){E.forEach(function(K){f.call(_,K,A,this)},this)},this)};function Zl(f,_){Mr(f);let E=[];if(typeof _=="string")ca(f,_)&&(E=E.concat(f.g.get(Or(f,_))));else for(f=Array.from(f.g.values()),_=0;_<f.length;_++)E=E.concat(f[_]);return E}t.set=function(f,_){return Mr(this),this.i=null,f=Or(this,f),ca(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[_]),this.h+=1,this},t.get=function(f,_){return f?(f=Zl(this,f),f.length>0?String(f[0]):_):_};function eu(f,_,E){Jl(f,_),E.length>0&&(f.i=null,f.g.set(Or(f,_),T(E)),f.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],_=Array.from(this.g.keys());for(let A=0;A<_.length;A++){var E=_[A];const K=Nr(E);E=Zl(this,E);for(let Q=0;Q<E.length;Q++){let le=K;E[Q]!==""&&(le+="="+Nr(E[Q])),f.push(le)}}return this.i=f.join("&")};function tu(f){const _=new ze;return _.i=f.i,f.g&&(_.g=new Map(f.g),_.h=f.h),_}function Or(f,_){return _=String(_),f.j&&(_=_.toLowerCase()),_}function ha(f,_){_&&!f.j&&(Mr(f),f.i=null,f.g.forEach(function(E,A){const K=A.toLowerCase();A!=K&&(Jl(this,A),eu(this,K,E))},f)),f.j=_}function Fr(f,_){const E=new Yi;if(l.Image){const A=new Image;A.onload=m(qt,E,"TestLoadImage: loaded",!0,_,A),A.onerror=m(qt,E,"TestLoadImage: error",!1,_,A),A.onabort=m(qt,E,"TestLoadImage: abort",!1,_,A),A.ontimeout=m(qt,E,"TestLoadImage: timeout",!1,_,A),l.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=f}else _(!1)}function jr(f,_){const E=new Yi,A=new AbortController,K=setTimeout(()=>{A.abort(),qt(E,"TestPingServer: timeout",!1,_)},1e4);fetch(f,{signal:A.signal}).then(Q=>{clearTimeout(K),Q.ok?qt(E,"TestPingServer: ok",!0,_):qt(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(K),qt(E,"TestPingServer: error",!1,_)})}function qt(f,_,E,A,K){try{K&&(K.onload=null,K.onerror=null,K.onabort=null,K.ontimeout=null),A(E)}catch{}}function lo(){this.g=new Js}function di(f){this.i=f.Sb||null,this.h=f.ab||!1}y(di,Hi),di.prototype.g=function(){return new bn(this.i,this.h)};function bn(f,_){It.call(this),this.H=f,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(bn,It),t=bn.prototype,t.open=function(f,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=f,this.D=_,this.readyState=1,hr(this)},t.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const _={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};f&&(_.body=f),(this.H||l).fetch(new Request(this.D,_)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=0},t.Pa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,hr(this)),this.g&&(this.readyState=3,hr(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Zc(this)}else f.text().then(this.Oa.bind(this),this.ga.bind(this))};function Zc(f){f.j.read().then(f.Ma.bind(f)).catch(f.ga.bind(f))}t.Ma=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var _=f.value?f.value:new Uint8Array(0);(_=this.B.decode(_,{stream:!f.done}))&&(this.response=this.responseText+=_)}f.done?Zi(this):hr(this),this.readyState==3&&Zc(this)}},t.Oa=function(f){this.g&&(this.response=this.responseText=f,Zi(this))},t.Na=function(f){this.g&&(this.response=f,Zi(this))},t.ga=function(){this.g&&Zi(this)};function Zi(f){f.readyState=4,f.l=null,f.j=null,f.B=null,hr(f)}t.setRequestHeader=function(f,_){this.A.append(f,_)},t.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,f.push(E[0]+": "+E[1]),E=_.next();return f.join(`\r
`)};function hr(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function eh(f){let _="";return ce(f,function(E,A){_+=A,_+=":",_+=E,_+=`\r
`}),_}function fa(f,_,E){e:{for(A in E){var A=!1;break e}A=!0}A||(E=eh(E),typeof f=="string"?E!=null&&Nr(E):Ke(f,_,E))}function nt(f){It.call(this),this.headers=new Map,this.L=f||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(nt,It);var th=/^https?$/i,Dp=["POST","PUT"];t=nt.prototype,t.Fa=function(f){this.H=f},t.ea=function(f,_,E,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);_=_?_.toUpperCase():"GET",this.D=f,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qc.g(),this.g.onreadystatechange=w(p(this.Ca,this));try{this.B=!0,this.g.open(_,String(f),!0),this.B=!1}catch(Q){es(this,Q);return}if(f=E||"",E=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var K in A)E.set(K,A[K]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Q of A.keys())E.set(Q,A.get(Q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(E.keys()).find(Q=>Q.toLowerCase()=="content-type"),K=l.FormData&&f instanceof l.FormData,!(Array.prototype.indexOf.call(Dp,_,void 0)>=0)||A||K||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,le]of E)this.g.setRequestHeader(Q,le);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(f),this.v=!1}catch(Q){es(this,Q)}};function es(f,_){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=_,f.o=5,ts(f),mi(f)}function ts(f){f.A||(f.A=!0,Et(f,"complete"),Et(f,"error"))}t.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=f||7,Et(this,"complete"),Et(this,"abort"),mi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mi(this,!0)),nt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?pi(this):this.Xa())},t.Xa=function(){pi(this)};function pi(f){if(f.h&&typeof a<"u"){if(f.v&&Ur(f)==4)setTimeout(f.Ca.bind(f),0);else if(Et(f,"readystatechange"),Ur(f)==4){f.h=!1;try{const Q=f.ca();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var A;if(A=Q===0){let le=String(f.D).match(Jc)[1]||null;!le&&l.self&&l.self.location&&(le=l.self.location.protocol.slice(0,-1)),A=!th.test(le?le.toLowerCase():"")}E=A}if(E)Et(f,"complete"),Et(f,"success");else{f.o=6;try{var K=Ur(f)>2?f.g.statusText:""}catch{K=""}f.l=K+" ["+f.ca()+"]",ts(f)}}finally{mi(f)}}}}function mi(f,_){if(f.g){f.m&&(clearTimeout(f.m),f.m=null);const E=f.g;f.g=null,_||Et(f,"ready");try{E.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Ur(f){return f.g?f.g.readyState:0}t.ca=function(){try{return Ur(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(f){if(this.g){var _=this.g.responseText;return f&&_.indexOf(f)==0&&(_=_.substring(f.length)),$c(_)}};function nh(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.F){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function nu(f){const _={};f=(f.g&&Ur(f)>=2&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<f.length;A++){if(N(f[A]))continue;var E=oa(f[A]);const K=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Q=_[K]||[];_[K]=Q,Q.push(E)}ue(_,function(A){return A.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $r(f,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[f]||_}function da(f){this.za=0,this.i=[],this.j=new Yi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$r("failFast",!1,f),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$r("baseRetryDelayMs",5e3,f),this.Za=$r("retryDelaySeedMs",1e4,f),this.Ta=$r("forwardChannelMaxRetries",2,f),this.va=$r("forwardChannelRequestTimeoutMs",2e4,f),this.ma=f&&f.xmlHttpFactory||void 0,this.Ua=f&&f.Rb||void 0,this.Aa=f&&f.useFetchStreams||!1,this.O=void 0,this.L=f&&f.supportsCrossDomainXhr||!1,this.M="",this.h=new la(f&&f.concurrentRequestLimit),this.Ba=new lo,this.S=f&&f.fastHandshake||!1,this.R=f&&f.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=f&&f.Pb||!1,f&&f.ua&&this.j.ua(),f&&f.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&f&&f.detectBufferingProxy||!1,this.ia=void 0,f&&f.longPollingTimeout&&f.longPollingTimeout>0&&(this.ia=f.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=da.prototype,t.ka=8,t.I=1,t.connect=function(f,_,E,A){vt(0),this.W=f,this.H=_||{},E&&A!==void 0&&(this.H.OSID=E,this.H.OAID=A),this.F=this.X,this.J=iu(this,null,this.W),gi(this)};function pa(f){if(ma(f),f.I==3){var _=f.V++,E=Hn(f.J);if(Ke(E,"SID",f.M),Ke(E,"RID",_),Ke(E,"TYPE","terminate"),zr(f,E),_=new Wn(f,f.j,_),_.M=2,_.A=fi(Hn(E)),E=!1,l.navigator&&l.navigator.sendBeacon)try{E=l.navigator.sendBeacon(_.A.toString(),"")}catch{}!E&&l.Image&&(new Image().src=_.A,E=!0),E||(_.g=ih(_.j,null),_.g.ea(_.A)),_.F=Date.now(),eo(_)}ho(f)}function Dn(f){f.g&&(co(f),f.g.cancel(),f.g=null)}function ma(f){Dn(f),f.v&&(l.clearTimeout(f.v),f.v=null),ga(f),f.h.cancel(),f.m&&(typeof f.m=="number"&&l.clearTimeout(f.m),f.m=null)}function gi(f){if(!ql(f.h)&&!f.m){f.m=!0;var _=f.Ea;H||I(),X||(H(),X=!0),C.add(_,f),f.D=0}}function rh(f,_){return no(f.h)>=f.h.j-(f.m?1:0)?!1:f.m?(f.i=_.G.concat(f.i),!0):f.I==1||f.I==2||f.D>=(f.Sa?0:f.Ta)?!1:(f.m=Gi(p(f.Ea,f,_),va(f,f.D)),f.D++,!0)}t.Ea=function(f){if(this.m)if(this.m=null,this.I==1){if(!f){this.V=Math.floor(Math.random()*1e5),f=this.V++;const K=new Wn(this,this.j,f);let Q=this.o;if(this.U&&(Q?(Q=W(Q),Ae(Q,this.U)):Q=this.U),this.u!==null||this.R||(K.J=Q,Q=null),this.S)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var A=this.i[E];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,_>4096){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=ru(this,K,_),E=Hn(this.J),Ke(E,"RID",f),Ke(E,"CVER",22),this.G&&Ke(E,"X-HTTP-Session-Id",this.G),zr(this,E),Q&&(this.R?_="headers="+Nr(eh(Q))+"&"+_:this.u&&fa(E,this.u,Q)),ua(this.h,K),this.Ra&&Ke(E,"TYPE","init"),this.S?(Ke(E,"$req",_),Ke(E,"SID","null"),K.U=!0,cr(K,E,null)):cr(K,E,_),this.I=2}}else this.I==3&&(f?uo(this,f):this.i.length==0||ql(this.h)||uo(this))};function uo(f,_){var E;_?E=_.l:E=f.V++;const A=Hn(f.J);Ke(A,"SID",f.M),Ke(A,"RID",E),Ke(A,"AID",f.K),zr(f,A),f.u&&f.o&&fa(A,f.u,f.o),E=new Wn(f,f.j,E,f.D+1),f.u===null&&(E.J=f.o),_&&(f.i=_.G.concat(f.i)),_=ru(f,E,1e3),E.H=Math.round(f.va*.5)+Math.round(f.va*.5*Math.random()),ua(f.h,E),cr(E,A,_)}function zr(f,_){f.H&&ce(f.H,function(E,A){Ke(_,A,E)}),f.l&&ce({},function(E,A){Ke(_,A,E)})}function ru(f,_,E){E=Math.min(f.i.length,E);const A=f.l?p(f.l.Ka,f.l,f):null;e:{var K=f.i;let Pe=-1;for(;;){const Tt=["count="+E];Pe==-1?E>0?(Pe=K[0].g,Tt.push("ofs="+Pe)):Pe=0:Tt.push("ofs="+Pe);let Ze=!0;for(let At=0;At<E;At++){var Q=K[At].g;const Vn=K[At].map;if(Q-=Pe,Q<0)Pe=Math.max(0,K[At].g-100),Ze=!1;else try{Q="req"+Q+"_"||"";try{var le=Vn instanceof Map?Vn:Object.entries(Vn);for(const[yi,Wr]of le){let Hr=Wr;c(Wr)&&(Hr=Wi(Wr)),Tt.push(Q+yi+"="+encodeURIComponent(Hr))}}catch(yi){throw Tt.push(Q+"type="+encodeURIComponent("_badmap")),yi}}catch{A&&A(Vn)}}if(Ze){le=Tt.join("&");break e}}le=void 0}return f=f.i.splice(0,E),_.G=f,le}function rn(f){if(!f.g&&!f.v){f.Y=1;var _=f.Da;H||I(),X||(H(),X=!0),C.add(_,f),f.A=0}}function Br(f){return f.g||f.v||f.A>=3?!1:(f.Y++,f.v=Gi(p(f.Da,f),va(f,f.A)),f.A++,!0)}t.Da=function(){if(this.v=null,ns(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var f=4*this.T;this.j.info("BP detection timer enabled: "+f),this.B=Gi(p(this.Wa,this),f)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),Dn(this),ns(this))};function co(f){f.B!=null&&(l.clearTimeout(f.B),f.B=null)}function ns(f){f.g=new Wn(f,f.j,"rpc",f.Y),f.u===null&&(f.g.J=f.o),f.g.P=0;var _=Hn(f.na);Ke(_,"RID","rpc"),Ke(_,"SID",f.M),Ke(_,"AID",f.K),Ke(_,"CI",f.F?"0":"1"),!f.F&&f.ia&&Ke(_,"TO",f.ia),Ke(_,"TYPE","xmlhttp"),zr(f,_),f.u&&f.o&&fa(_,f.u,f.o),f.O&&(f.g.H=f.O);var E=f.g;f=f.ba,E.M=1,E.A=fi(Hn(_)),E.u=null,E.R=!0,Wl(E,f)}t.Va=function(){this.C!=null&&(this.C=null,Dn(this),Br(this),vt(19))};function ga(f){f.C!=null&&(l.clearTimeout(f.C),f.C=null)}function ya(f,_){var E=null;if(f.g==_){ga(f),co(f),f.g=null;var A=2}else if(Kl(f.h,_))E=_.G,ro(f.h,_),A=1;else return;if(f.I!=0){if(_.o)if(A==1){E=_.u?_.u.length:0,_=Date.now()-_.F;var K=f.D;A=Ki(),Et(A,new zl(A,E)),gi(f)}else rn(f);else if(K=_.m,K==3||K==0&&_.X>0||!(A==1&&rh(f,_)||A==2&&Br(f)))switch(E&&E.length>0&&(_=f.h,_.i=_.i.concat(E)),K){case 1:Nn(f,5);break;case 4:Nn(f,10);break;case 3:Nn(f,6);break;default:Nn(f,2)}}}function va(f,_){let E=f.Qa+Math.floor(Math.random()*f.Za);return f.isActive()||(E*=2),E*_}function Nn(f,_){if(f.j.info("Error code "+_),_==2){var E=p(f.bb,f),A=f.Ua;const K=!A;A=new Vr(A||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||io(A,"https"),fi(A),K?Fr(A.toString(),E):jr(A.toString(),E)}else vt(2);f.I=0,f.l&&f.l.pa(_),ho(f),ma(f)}t.bb=function(f){f?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function ho(f){if(f.I=0,f.ja=[],f.l){const _=kn(f.h);(_.length!=0||f.i.length!=0)&&(x(f.ja,_),x(f.ja,f.i),f.h.i.length=0,T(f.i),f.i.length=0),f.l.oa()}}function iu(f,_,E){var A=E instanceof Vr?Hn(E):new Vr(E);if(A.g!="")_&&(A.g=_+"."+A.g),Lr(A,A.u);else{var K=l.location;A=K.protocol,_=_?_+"."+K.hostname:K.hostname,K=+K.port;const Q=new Vr(null);A&&io(Q,A),_&&(Q.g=_),K&&Lr(Q,K),E&&(Q.h=E),A=Q}return E=f.G,_=f.wa,E&&_&&Ke(A,E,_),Ke(A,"VER",f.ka),zr(f,A),A}function ih(f,_,E){if(_&&!f.L)throw Error("Can't create secondary domain capable XhrIo object.");return _=f.Aa&&!f.ma?new nt(new di({ab:E})):new nt(f.ma),_.Fa(f.L),_}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}t=sh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function _a(){}_a.prototype.g=function(f,_){return new Kt(f,_)};function Kt(f,_){It.call(this),this.g=new da(_),this.l=f,this.h=_&&_.messageUrlParams||null,f=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(f?f["X-WebChannel-Content-Type"]=_.messageContentType:f={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.sa&&(f?f["X-WebChannel-Client-Profile"]=_.sa:f={"X-WebChannel-Client-Profile":_.sa}),this.g.U=f,(f=_&&_.Qb)&&!N(f)&&(this.g.u=f),this.A=_&&_.supportsCrossDomainXhr||!1,this.v=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!N(_)&&(this.g.G=_,f=this.h,f!==null&&_ in f&&(f=this.h,_ in f&&delete f[_])),this.j=new rs(this)}y(Kt,It),Kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){pa(this.g)},Kt.prototype.o=function(f){var _=this.g;if(typeof f=="string"){var E={};E.__data__=f,f=E}else this.v&&(E={},E.__data__=Wi(f),f=E);_.i.push(new Rp(_.Ya++,f)),_.I==3&&gi(_)},Kt.prototype.N=function(){this.g.l=null,delete this.j,pa(this.g),delete this.g,Kt.Z.N.call(this)};function oh(f){ra.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var _=f.__sm__;if(_){e:{for(const E in _){f=E;break e}f=void 0}(this.i=f)&&(f=this.i,_=_!==null&&f in _?_[f]:void 0),this.data=_}else this.data=f}y(oh,ra);function ah(){$l.call(this),this.status=1}y(ah,$l);function rs(f){this.g=f}y(rs,sh),rs.prototype.ra=function(){Et(this.g,"a")},rs.prototype.qa=function(f){Et(this.g,new oh(f))},rs.prototype.pa=function(f){Et(this.g,new ah)},rs.prototype.oa=function(){Et(this.g,"b")},_a.prototype.createWebChannel=_a.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,mC=function(){return new _a},pC=function(){return Ki()},dC=ur,Ty={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Qi.NO_ERROR=0,Qi.TIMEOUT=8,Qi.HTTP_ERROR=6,Vf=Qi,Xi.COMPLETE="complete",fC=Xi,zc.EventType=qi,qi.OPEN="a",qi.CLOSE="b",qi.ERROR="c",qi.MESSAGE="d",It.prototype.listen=It.prototype.J,ju=zc,nt.prototype.listenOnce=nt.prototype.K,nt.prototype.getLastError=nt.prototype.Ha,nt.prototype.getLastErrorCode=nt.prototype.ya,nt.prototype.getStatus=nt.prototype.ca,nt.prototype.getResponseJson=nt.prototype.La,nt.prototype.getResponseText=nt.prototype.la,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Fa,hC=nt}).apply(typeof lf<"u"?lf:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let cn=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};cn.UNAUTHENTICATED=new cn(null),cn.GOOGLE_CREDENTIALS=new cn("google-credentials-uid"),cn.FIRST_PARTY=new cn("first-party-uid"),cn.MOCK_USER=new cn("mock-user");/**
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
 */let kl="12.12.0";function Dj(t){kl=t}/**
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
 */const qo=new jv("@firebase/firestore");function Wa(){return qo.logLevel}function fe(t,...e){if(qo.logLevel<=Oe.DEBUG){const n=e.map(Jv);qo.debug(`Firestore (${kl}): ${t}`,...n)}}function Fi(t,...e){if(qo.logLevel<=Oe.ERROR){const n=e.map(Jv);qo.error(`Firestore (${kl}): ${t}`,...n)}}function Ko(t,...e){if(qo.logLevel<=Oe.WARN){const n=e.map(Jv);qo.warn(`Firestore (${kl}): ${t}`,...n)}}function Jv(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,gC(t,r,n)}function gC(t,e,n){let r=`FIRESTORE (${kl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Fi(r),new Error(r)}function Qe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||gC(e,i,r)}function ke(t,e){return t}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends Ui{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Vs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class yC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Nj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(cn.UNAUTHENTICATED))}shutdown(){}}class Vj{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Lj{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Qe(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let a=new Vs;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Vs,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=a;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Vs)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Qe(typeof r.accessToken=="string",31837,{l:r}),new yC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class Mj{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Oj{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Mj(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fj{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Qe(this.o===void 0,3512);const r=a=>{a.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,fe("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const i=a=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new FT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new FT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function jj(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Zv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=jj(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<n&&(r+=e.charAt(i[a]%62))}return r}}function Fe(t,e){return t<e?-1:t>e?1:0}function Sy(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),a=e.charAt(r);if(i!==a)return Cg(i)===Cg(a)?Fe(i,a):Cg(i)?1:-1}return Fe(t.length,e.length)}const Uj=55296,$j=57343;function Cg(t){const e=t.charCodeAt(0);return e>=Uj&&e<=$j}function gl(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const jT="__name__";class Xr{constructor(e,n,r){n===void 0?n=0:n>e.length&&Se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const a=Xr.compareSegments(e.get(i),n.get(i));if(a!==0)return a}return Fe(e.length,n.length)}static compareSegments(e,n){const r=Xr.isNumericId(e),i=Xr.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Xr.extractNumericId(e).compare(Xr.extractNumericId(n)):Sy(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ns.fromString(e.substring(4,e.length-2))}}class st extends Xr{construct(e,n,r){return new st(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new de(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new st(n)}static emptyPath(){return new st([])}}const zj=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends Xr{construct(e,n,r){return new en(e,n,r)}static isValidIdentifier(e){return zj.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jT}static keyField(){return new en([jT])}static fromServerFormat(e){const n=[];let r="",i=0;const a=()=>{if(r.length===0)throw new de(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let l=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new de(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new de(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(r+=c,i++):(a(),i++)}if(a(),l)throw new de(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(n)}static emptyPath(){return new en([])}}/**
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
 */function vC(t,e,n){if(!n)throw new de(Z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Bj(t,e,n,r){if(e===!0&&r===!0)throw new de(Z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function UT(t){if(!_e.isDocumentKey(t))throw new de(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $T(t){if(_e.isDocumentKey(t))throw new de(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _C(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function up(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Se(12329,{type:typeof t})}function gd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new de(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=up(t);throw new de(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Dt(t,e){const n={typeString:t};return e&&(n.value=e),n}function kc(t,e){if(!_C(t))throw new de(Z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const l=t[r];if(i&&typeof l!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&l!==a.value){n=`Expected '${r}' field to equal '${a.value}'`;break}}if(n)throw new de(Z.INVALID_ARGUMENT,n);return!0}/**
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
 */const zT=-62135596800,BT=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*BT);return new ct(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new de(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new de(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<zT)throw new de(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new de(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/BT}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(kc(e,ct._jsonSchema))return new ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-zT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ct._jsonSchemaVersion="firestore/timestamp/1.0",ct._jsonSchema={type:Dt("string",ct._jsonSchemaVersion),seconds:Dt("number"),nanoseconds:Dt("number")};/**
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
 */const uc=-1;function Wj(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new js(i,_e.empty(),e)}function Hj(t){return new js(t.readTime,t.key,uc)}class js{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new js(Ce.min(),_e.empty(),uc)}static max(){return new js(Ce.max(),_e.empty(),uc)}}function qj(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(t.documentKey,e.documentKey),n!==0?n:Fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Kj="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gj{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Rl(t){if(t.code!==Z.FAILED_PRECONDITION||t.message!==Kj)throw t;fe("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ee((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(n,a).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ee?n:ee.resolve(n)}catch(n){return ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.reject(n)}static resolve(e){return new ee((n,r)=>{n(e)})}static reject(e){return new ee((n,r)=>{r(e)})}static waitFor(e){return new ee((n,r)=>{let i=0,a=0,l=!1;e.forEach(c=>{++i,c.next(()=>{++a,l&&a===i&&n()},h=>r(h))}),l=!0,a===i&&n()})}static or(e){let n=ee.resolve(!1);for(const r of e)n=n.next(i=>i?ee.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,a)=>{r.push(n.call(this,i,a))}),this.waitFor(r)}static mapArray(e,n){return new ee((r,i)=>{const a=e.length,l=new Array(a);let c=0;for(let h=0;h<a;h++){const p=h;n(e[p]).next(m=>{l[p]=m,++c,c===a&&r(l)},m=>i(m))}})}static doWhile(e,n){return new ee((r,i)=>{const a=()=>{e()===!0?n().next(()=>{a()},i):r()};a()})}}function Yj(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class cp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}cp.ce=-1;/**
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
 */const e_=-1;function hp(t){return t==null}function yd(t){return t===0&&1/t==-1/0}function Qj(t){return typeof t=="number"&&Number.isInteger(t)&&!yd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const wC="";function Xj(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=WT(e)),e=Jj(t.get(n),e);return WT(e)}function Jj(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const a=t.charAt(i);switch(a){case"\0":n+="";break;case wC:n+="";break;default:n+=a}}return n}function WT(t){return t+wC+""}/**
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
 */function HT(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function EC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class yt{constructor(e,n){this.comparator=e,this.root=n||Zt.EMPTY}insert(e,n){return new yt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(e){return new yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new uf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new uf(this.root,e,this.comparator,!1)}getReverseIterator(){return new uf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new uf(this.root,e,this.comparator,!0)}}class uf{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=n?r(e.key,n):1,n&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Zt{constructor(e,n,r,i,a){this.key=e,this.value=n,this.color=r??Zt.RED,this.left=i??Zt.EMPTY,this.right=a??Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,a){return new Zt(e??this.key,n??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,n,r),null):a===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Zt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,n,r,i,a){return this}insert(e,n,r){return new Zt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(e){this.comparator=e,this.data=new yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qT(this.data.getIterator())}getIteratorFrom(e){return new qT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ot(this.comparator);return n.data=e,n}}class qT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Sr{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new Sr([])}unionWith(e){let n=new Ot(en.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Sr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gl(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class TC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new TC("Invalid base64 string: "+a):a}}(e);return new nn(n)}static fromUint8Array(e){const n=function(i){let a="";for(let l=0;l<i.length;++l)a+=String.fromCharCode(i[l]);return a}(e);return new nn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const Zj=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Us(t){if(Qe(!!t,39018),typeof t=="string"){let e=0;const n=Zj.exec(t);if(Qe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xt(t.seconds),nanos:xt(t.nanos)}}function xt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $s(t){return typeof t=="string"?nn.fromBase64String(t):nn.fromUint8Array(t)}/**
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
 */const SC="server_timestamp",xC="__type__",IC="__previous_value__",AC="__local_write_time__";function t_(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[xC])==null?void 0:r.stringValue)===SC}function fp(t){const e=t.mapValue.fields[IC];return t_(e)?fp(e):e}function cc(t){const e=Us(t.mapValue.fields[AC].timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class e5{constructor(e,n,r,i,a,l,c,h,p,m,y){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=p,this.isUsingEmulator=m,this.apiKey=y}}const vd="(default)";class hc{constructor(e,n){this.projectId=e,this.database=n||vd}static empty(){return new hc("","")}get isDefaultDatabase(){return this.database===vd}isEqual(e){return e instanceof hc&&e.projectId===this.projectId&&e.database===this.database}}function t5(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new de(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hc(t.options.projectId,e)}/**
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
 */const CC="__type__",PC="__max__",cf={mapValue:{fields:{__type__:{stringValue:PC}}}},kC="__vector__",_d="value";function zs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?t_(t)?4:r5(t)?9007199254740991:n5(t)?10:11:Se(28295,{value:t})}function si(t,e){if(t===e)return!0;const n=zs(t);if(n!==zs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return cc(t).isEqual(cc(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=Us(i.timestampValue),c=Us(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,a){return $s(i.bytesValue).isEqual($s(a.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,a){return xt(i.geoPointValue.latitude)===xt(a.geoPointValue.latitude)&&xt(i.geoPointValue.longitude)===xt(a.geoPointValue.longitude)}(t,e);case 2:return function(i,a){if("integerValue"in i&&"integerValue"in a)return xt(i.integerValue)===xt(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const l=xt(i.doubleValue),c=xt(a.doubleValue);return l===c?yd(l)===yd(c):isNaN(l)&&isNaN(c)}return!1}(t,e);case 9:return gl(t.arrayValue.values||[],e.arrayValue.values||[],si);case 10:case 11:return function(i,a){const l=i.mapValue.fields||{},c=a.mapValue.fields||{};if(HT(l)!==HT(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!si(l[h],c[h])))return!1;return!0}(t,e);default:return Se(52216,{left:t})}}function fc(t,e){return(t.values||[]).find(n=>si(n,e))!==void 0}function yl(t,e){if(t===e)return 0;const n=zs(t),r=zs(e);if(n!==r)return Fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return function(a,l){const c=xt(a.integerValue||a.doubleValue),h=xt(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(t,e);case 3:return KT(t.timestampValue,e.timestampValue);case 4:return KT(cc(t),cc(e));case 5:return Sy(t.stringValue,e.stringValue);case 6:return function(a,l){const c=$s(a),h=$s(l);return c.compareTo(h)}(t.bytesValue,e.bytesValue);case 7:return function(a,l){const c=a.split("/"),h=l.split("/");for(let p=0;p<c.length&&p<h.length;p++){const m=Fe(c[p],h[p]);if(m!==0)return m}return Fe(c.length,h.length)}(t.referenceValue,e.referenceValue);case 8:return function(a,l){const c=Fe(xt(a.latitude),xt(l.latitude));return c!==0?c:Fe(xt(a.longitude),xt(l.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return GT(t.arrayValue,e.arrayValue);case 10:return function(a,l){var w,T,x,P;const c=a.fields||{},h=l.fields||{},p=(w=c[_d])==null?void 0:w.arrayValue,m=(T=h[_d])==null?void 0:T.arrayValue,y=Fe(((x=p==null?void 0:p.values)==null?void 0:x.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return y!==0?y:GT(p,m)}(t.mapValue,e.mapValue);case 11:return function(a,l){if(a===cf.mapValue&&l===cf.mapValue)return 0;if(a===cf.mapValue)return 1;if(l===cf.mapValue)return-1;const c=a.fields||{},h=Object.keys(c),p=l.fields||{},m=Object.keys(p);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const w=Sy(h[y],m[y]);if(w!==0)return w;const T=yl(c[h[y]],p[m[y]]);if(T!==0)return T}return Fe(h.length,m.length)}(t.mapValue,e.mapValue);default:throw Se(23264,{he:n})}}function KT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Fe(t,e);const n=Us(t),r=Us(e),i=Fe(n.seconds,r.seconds);return i!==0?i:Fe(n.nanos,r.nanos)}function GT(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const a=yl(n[i],r[i]);if(a)return a}return Fe(n.length,r.length)}function vl(t){return xy(t)}function xy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Us(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $s(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return _e.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const a of n.values||[])i?i=!1:r+=",",r+=xy(a);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",a=!0;for(const l of r)a?a=!1:i+=",",i+=`${l}:${xy(n.fields[l])}`;return i+"}"}(t.mapValue):Se(61005,{value:t})}function Lf(t){switch(zs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fp(t);return e?16+Lf(e):16;case 5:return 2*t.stringValue.length;case 6:return $s(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,a)=>i+Lf(a),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Qo(r.fields,(a,l)=>{i+=a.length+Lf(l)}),i}(t.mapValue);default:throw Se(13486,{value:t})}}function YT(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Iy(t){return!!t&&"integerValue"in t}function n_(t){return!!t&&"arrayValue"in t}function QT(t){return!!t&&"nullValue"in t}function XT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mf(t){return!!t&&"mapValue"in t}function n5(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[CC])==null?void 0:r.stringValue)===kC}function Ku(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Qo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ku(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ku(t.arrayValue.values[n]);return e}return{...t}}function r5(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===PC}/**
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
 */class Jn{constructor(e){this.value=e}static empty(){return new Jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ku(n)}setAll(e){let n=en.emptyPath(),r={},i=[];e.forEach((l,c)=>{if(!n.isImmediateParentOf(c)){const h=this.getFieldsMap(n);this.applyChanges(h,r,i),r={},i=[],n=c.popLast()}l?r[c.lastSegment()]=Ku(l):i.push(c.lastSegment())});const a=this.getFieldsMap(n);this.applyChanges(a,r,i)}delete(e){const n=this.field(e.popLast());Mf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return si(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Mf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Qo(n,(i,a)=>e[i]=a);for(const i of r)delete e[i]}clone(){return new Jn(Ku(this.value))}}function RC(t){const e=[];return Qo(t.fields,(n,r)=>{const i=new en([n]);if(Mf(r)){const a=RC(r.mapValue).fields;if(a.length===0)e.push(i);else for(const l of a)e.push(i.child(l))}else e.push(i)}),new Sr(e)}/**
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
 */class hn{constructor(e,n,r,i,a,l,c){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=a,this.data=l,this.documentState=c}static newInvalidDocument(e){return new hn(e,0,Ce.min(),Ce.min(),Ce.min(),Jn.empty(),0)}static newFoundDocument(e,n,r,i){return new hn(e,1,n,Ce.min(),r,i,0)}static newNoDocument(e,n){return new hn(e,2,n,Ce.min(),Ce.min(),Jn.empty(),0)}static newUnknownDocument(e,n){return new hn(e,3,n,Ce.min(),Ce.min(),Jn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wd{constructor(e,n){this.position=e,this.inclusive=n}}function JT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const a=e[i],l=t.position[i];if(a.field.isKeyField()?r=_e.comparator(_e.fromName(l.referenceValue),n.key):r=yl(l,n.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function ZT(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!si(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ed{constructor(e,n="asc"){this.field=e,this.dir=n}}function i5(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class bC{}class bt extends bC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new o5(e,n,r):n==="array-contains"?new u5(e,r):n==="in"?new c5(e,r):n==="not-in"?new h5(e,r):n==="array-contains-any"?new f5(e,r):new bt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new a5(e,r):new l5(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(yl(n,this.value)):n!==null&&zs(this.value)===zs(n)&&this.matchesComparison(yl(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pr extends bC{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Pr(e,n)}matches(e){return DC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function DC(t){return t.op==="and"}function NC(t){return s5(t)&&DC(t)}function s5(t){for(const e of t.filters)if(e instanceof Pr)return!1;return!0}function Ay(t){if(t instanceof bt)return t.field.canonicalString()+t.op.toString()+vl(t.value);if(NC(t))return t.filters.map(e=>Ay(e)).join(",");{const e=t.filters.map(n=>Ay(n)).join(",");return`${t.op}(${e})`}}function VC(t,e){return t instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.field.isEqual(i.field)&&si(r.value,i.value)}(t,e):t instanceof Pr?function(r,i){return i instanceof Pr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((a,l,c)=>a&&VC(l,i.filters[c]),!0):!1}(t,e):void Se(19439)}function LC(t){return t instanceof bt?function(n){return`${n.field.canonicalString()} ${n.op} ${vl(n.value)}`}(t):t instanceof Pr?function(n){return n.op.toString()+" {"+n.getFilters().map(LC).join(" ,")+"}"}(t):"Filter"}class o5 extends bt{constructor(e,n,r){super(e,n,r),this.key=_e.fromName(r.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.matchesComparison(n)}}class a5 extends bt{constructor(e,n){super(e,"in",n),this.keys=MC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class l5 extends bt{constructor(e,n){super(e,"not-in",n),this.keys=MC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function MC(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>_e.fromName(r.referenceValue))}class u5 extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return n_(n)&&fc(n.arrayValue,this.value)}}class c5 extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&fc(this.value.arrayValue,n)}}class h5 extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(fc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!fc(this.value.arrayValue,n)}}class f5 extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!n_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>fc(this.value.arrayValue,r))}}/**
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
 */class d5{constructor(e,n=null,r=[],i=[],a=null,l=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=l,this.endAt=c,this.Te=null}}function eS(t,e=null,n=[],r=[],i=null,a=null,l=null){return new d5(t,e,n,r,i,a,l)}function r_(t){const e=ke(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ay(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),hp(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vl(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vl(r)).join(",")),e.Te=n}return e.Te}function i_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!i5(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!VC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ZT(t.startAt,e.startAt)&&ZT(t.endAt,e.endAt)}function Cy(t){return _e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Rc{constructor(e,n=null,r=[],i=[],a=null,l="F",c=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=l,this.startAt=c,this.endAt=h,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function p5(t,e,n,r,i,a,l,c){return new Rc(t,e,n,r,i,a,l,c)}function OC(t){return new Rc(t)}function tS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function m5(t){return _e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function FC(t){return t.collectionGroup!==null}function Gu(t){const e=ke(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const a of e.explicitOrderBy)e.Ee.push(a),n.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new Ot(en.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(e).forEach(a=>{n.has(a.canonicalString())||a.isKeyField()||e.Ee.push(new Ed(a,r))}),n.has(en.keyField().canonicalString())||e.Ee.push(new Ed(en.keyField(),r))}return e.Ee}function ti(t){const e=ke(t);return e.Ie||(e.Ie=g5(e,Gu(t))),e.Ie}function g5(t,e){if(t.limitType==="F")return eS(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const a=i.dir==="desc"?"asc":"desc";return new Ed(i.field,a)});const n=t.endAt?new wd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wd(t.startAt.position,t.startAt.inclusive):null;return eS(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Py(t,e){const n=t.filters.concat([e]);return new Rc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function ky(t,e,n){return new Rc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dp(t,e){return i_(ti(t),ti(e))&&t.limitType===e.limitType}function jC(t){return`${r_(ti(t))}|lt:${t.limitType}`}function Ha(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>LC(i)).join(", ")}]`),hp(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>vl(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>vl(i)).join(",")),`Target(${r})`}(ti(t))}; limitType=${t.limitType})`}function pp(t,e){return e.isFoundDocument()&&function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):_e.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(t,e)&&function(r,i){for(const a of Gu(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(l,c,h){const p=JT(l,c,h);return l.inclusive?p<=0:p<0}(r.startAt,Gu(r),i)||r.endAt&&!function(l,c,h){const p=JT(l,c,h);return l.inclusive?p>=0:p>0}(r.endAt,Gu(r),i))}(t,e)}function y5(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function UC(t){return(e,n)=>{let r=!1;for(const i of Gu(t)){const a=v5(i,e,n);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function v5(t,e,n){const r=t.field.isKeyField()?_e.comparator(e.key,n.key):function(a,l,c){const h=l.data.field(a),p=c.data.field(a);return h!==null&&p!==null?yl(h,p):Se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Se(19790,{direction:t.dir})}}/**
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
 */class Xo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Qo(this.inner,(n,r)=>{for(const[i,a]of r)e(i,a)})}isEmpty(){return EC(this.inner)}size(){return this.innerSize}}/**
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
 */const _5=new yt(_e.comparator);function ji(){return _5}const $C=new yt(_e.comparator);function Uu(...t){let e=$C;for(const n of t)e=e.insert(n.key,n);return e}function zC(t){let e=$C;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Do(){return Yu()}function BC(){return Yu()}function Yu(){return new Xo(t=>t.toString(),(t,e)=>t.isEqual(e))}const w5=new yt(_e.comparator),E5=new Ot(_e.comparator);function je(...t){let e=E5;for(const n of t)e=e.add(n);return e}const T5=new Ot(Fe);function S5(){return T5}/**
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
 */function s_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yd(e)?"-0":e}}function WC(t){return{integerValue:""+t}}function x5(t,e){return Qj(e)?WC(e):s_(t,e)}/**
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
 */class mp{constructor(){this._=void 0}}function I5(t,e,n){return t instanceof Td?function(i,a){const l={fields:{[xC]:{stringValue:SC},[AC]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&t_(a)&&(a=fp(a)),a&&(l.fields[IC]=a),{mapValue:l}}(n,e):t instanceof dc?qC(t,e):t instanceof pc?KC(t,e):function(i,a){const l=HC(i,a),c=nS(l)+nS(i.Ae);return Iy(l)&&Iy(i.Ae)?WC(c):s_(i.serializer,c)}(t,e)}function A5(t,e,n){return t instanceof dc?qC(t,e):t instanceof pc?KC(t,e):n}function HC(t,e){return t instanceof Sd?function(r){return Iy(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class Td extends mp{}class dc extends mp{constructor(e){super(),this.elements=e}}function qC(t,e){const n=GC(e);for(const r of t.elements)n.some(i=>si(i,r))||n.push(r);return{arrayValue:{values:n}}}class pc extends mp{constructor(e){super(),this.elements=e}}function KC(t,e){let n=GC(e);for(const r of t.elements)n=n.filter(i=>!si(i,r));return{arrayValue:{values:n}}}class Sd extends mp{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function nS(t){return xt(t.integerValue||t.doubleValue)}function GC(t){return n_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function C5(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof dc&&i instanceof dc||r instanceof pc&&i instanceof pc?gl(r.elements,i.elements,si):r instanceof Sd&&i instanceof Sd?si(r.Ae,i.Ae):r instanceof Td&&i instanceof Td}(t.transform,e.transform)}class P5{constructor(e,n){this.version=e,this.transformResults=n}}class Vi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vi}static exists(e){return new Vi(void 0,e)}static updateTime(e){return new Vi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Of(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gp{}function YC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new XC(t.key,Vi.none()):new bc(t.key,t.data,Vi.none());{const n=t.data,r=Jn.empty();let i=new Ot(en.comparator);for(let a of e.fields)if(!i.has(a)){let l=n.field(a);l===null&&a.length>1&&(a=a.popLast(),l=n.field(a)),l===null?r.delete(a):r.set(a,l),i=i.add(a)}return new Jo(t.key,r,new Sr(i.toArray()),Vi.none())}}function k5(t,e,n){t instanceof bc?function(i,a,l){const c=i.value.clone(),h=iS(i.fieldTransforms,a,l.transformResults);c.setAll(h),a.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Jo?function(i,a,l){if(!Of(i.precondition,a))return void a.convertToUnknownDocument(l.version);const c=iS(i.fieldTransforms,a,l.transformResults),h=a.data;h.setAll(QC(i)),h.setAll(c),a.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(t,e,n):function(i,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,n)}function Qu(t,e,n,r){return t instanceof bc?function(a,l,c,h){if(!Of(a.precondition,l))return c;const p=a.value.clone(),m=sS(a.fieldTransforms,h,l);return p.setAll(m),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jo?function(a,l,c,h){if(!Of(a.precondition,l))return c;const p=sS(a.fieldTransforms,h,l),m=l.data;return m.setAll(QC(a)),m.setAll(p),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(a,l,c){return Of(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(t,e,n)}function R5(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),a=HC(r.transform,i||null);a!=null&&(n===null&&(n=Jn.empty()),n.set(r.field,a))}return n||null}function rS(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&gl(r,i,(a,l)=>C5(a,l))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class bc extends gp{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jo extends gp{constructor(e,n,r,i,a=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function QC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function iS(t,e,n){const r=new Map;Qe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const a=t[i],l=a.transform,c=e.data.field(a.field);r.set(a.field,A5(l,c,n[i]))}return r}function sS(t,e,n){const r=new Map;for(const i of t){const a=i.transform,l=n.data.field(i.field);r.set(i.field,I5(a,l,e))}return r}class XC extends gp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class b5 extends gp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class D5{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&k5(a,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qu(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qu(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=BC();return this.mutations.forEach(i=>{const a=e.get(i.key),l=a.overlayedDocument;let c=this.applyToLocalView(l,a.mutatedFields);c=n.has(i.key)?null:c;const h=YC(l,c);h!==null&&r.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),je())}isEqual(e){return this.batchId===e.batchId&&gl(this.mutations,e.mutations,(n,r)=>rS(n,r))&&gl(this.baseMutations,e.baseMutations,(n,r)=>rS(n,r))}}class o_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Qe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return w5}();const a=e.mutations;for(let l=0;l<a.length;l++)i=i.insert(a[l].key,r[l].version);return new o_(e,n,r,i)}}/**
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
 */let N5=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};/**
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
 */class V5{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pt,Be;function L5(t){switch(t){case Z.OK:return Se(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return Se(15467,{code:t})}}function JC(t){if(t===void 0)return Fi("GRPC error has no .code"),Z.UNKNOWN;switch(t){case Pt.OK:return Z.OK;case Pt.CANCELLED:return Z.CANCELLED;case Pt.UNKNOWN:return Z.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return Z.INTERNAL;case Pt.UNAVAILABLE:return Z.UNAVAILABLE;case Pt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Pt.NOT_FOUND:return Z.NOT_FOUND;case Pt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Pt.ABORTED:return Z.ABORTED;case Pt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Pt.DATA_LOSS:return Z.DATA_LOSS;default:return Se(39323,{code:t})}}(Be=Pt||(Pt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function M5(){return new TextEncoder}/**
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
 */const O5=new Ns([4294967295,4294967295],0);function oS(t){const e=M5().encode(t),n=new cC;return n.update(e),new Uint8Array(n.digest())}function aS(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Ns([n,r],0),new Ns([i,a],0)]}class a_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $u(`Invalid padding: ${n}`);if(r<0)throw new $u(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $u(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $u(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ns.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Ns.fromNumber(r)));return i.compare(O5)===1&&(i=new Ns([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=oS(e),[r,i]=aS(n);for(let a=0;a<this.hashCount;a++){const l=this.ye(r,i,a);if(!this.we(l))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new a_(a,i,n);return r.forEach(c=>l.insert(c)),l}insert(e){if(this.ge===0)return;const n=oS(e),[r,i]=aS(n);for(let a=0;a<this.hashCount;a++){const l=this.ye(r,i,a);this.Se(l)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $u extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yp{constructor(e,n,r,i,a){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Dc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new yp(Ce.min(),i,new yt(Fe),ji(),je())}}class Dc{constructor(e,n,r,i,a){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Dc(r,n,je(),je(),je())}}/**
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
 */class Ff{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class ZC{constructor(e,n){this.targetId=e,this.Ce=n}}class eP{constructor(e,n,r=nn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class lS{constructor(){this.ve=0,this.Fe=uS(),this.Me=nn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=je(),n=je(),r=je();return this.Fe.forEach((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Se(38017,{changeType:a})}}),new Dc(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=uS()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Qe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class F5{constructor(e){this.Ge=e,this.ze=new Map,this.je=ji(),this.Je=hf(),this.He=hf(),this.Ze=new yt(Fe)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const a=i.target;if(Cy(a))if(r===0){const l=new _e(a.path);this.et(n,l,hn.newNoDocument(l,Ce.min()))}else Qe(r===1,20013,{expectedCount:r});else{const l=this._t(n);if(l!==r){const c=this.ut(e),h=c?this.ct(c,e,l):1;if(h!==0){this.it(n);const p=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,p)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=n;let l,c;try{l=$s(r).toUint8Array()}catch(h){if(h instanceof TC)return Ko("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new a_(l,i,a)}catch(h){return Ko(h instanceof $u?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(a=>{const l=this.Ge.ht(),c=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(c)||(this.et(n,a,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((a,l)=>{const c=this.ot(l);if(c){if(a.current&&Cy(c.target)){const h=new _e(c.target.path);this.Et(h).has(l)||this.It(l,h)||this.et(l,h,hn.newNoDocument(h,e))}a.Be&&(n.set(l,a.ke()),a.qe())}});let r=je();this.He.forEach((a,l)=>{let c=!0;l.forEachWhile(h=>{const p=this.ot(h);return!p||p.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(a))}),this.je.forEach((a,l)=>l.setReadTime(e));const i=new yp(e,n,this.Ze,this.je,r);return this.je=ji(),this.Je=hf(),this.He=hf(),this.Ze=new yt(Fe),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new lS,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ot(Fe),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ot(Fe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||fe("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new lS),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function hf(){return new yt(_e.comparator)}function uS(){return new yt(_e.comparator)}const j5={asc:"ASCENDING",desc:"DESCENDING"},U5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$5={and:"AND",or:"OR"};class z5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ry(t,e){return t.useProto3Json||hp(e)?e:{value:e}}function xd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function B5(t,e){return xd(t,e.toTimestamp())}function ni(t){return Qe(!!t,49232),Ce.fromTimestamp(function(n){const r=Us(n);return new ct(r.seconds,r.nanos)}(t))}function l_(t,e){return by(t,e).canonicalString()}function by(t,e){const n=function(i){return new st(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function nP(t){const e=st.fromString(t);return Qe(aP(e),10190,{key:e.toString()}),e}function Dy(t,e){return l_(t.databaseId,e.path)}function Pg(t,e){const n=nP(e);if(n.get(1)!==t.databaseId.projectId)throw new de(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new de(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _e(iP(n))}function rP(t,e){return l_(t.databaseId,e)}function W5(t){const e=nP(t);return e.length===4?st.emptyPath():iP(e)}function Ny(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iP(t){return Qe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function cS(t,e,n){return{name:Dy(t,e),fields:n.value.mapValue.fields}}function H5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Se(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=function(p,m){return p.useProto3Json?(Qe(m===void 0||typeof m=="string",58123),nn.fromBase64String(m||"")):(Qe(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),nn.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),l=e.targetChange.cause,c=l&&function(p){const m=p.code===void 0?Z.UNKNOWN:JC(p.code);return new de(m,p.message||"")}(l);n=new eP(r,i,a,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pg(t,r.document.name),a=ni(r.document.updateTime),l=r.document.createTime?ni(r.document.createTime):Ce.min(),c=new Jn({mapValue:{fields:r.document.fields}}),h=hn.newFoundDocument(i,a,l,c),p=r.targetIds||[],m=r.removedTargetIds||[];n=new Ff(p,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pg(t,r.document),a=r.readTime?ni(r.readTime):Ce.min(),l=hn.newNoDocument(i,a),c=r.removedTargetIds||[];n=new Ff([],c,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pg(t,r.document),a=r.removedTargetIds||[];n=new Ff([],a,i,null)}else{if(!("filter"in e))return Se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,l=new V5(i,a),c=r.targetId;n=new ZC(c,l)}}return n}function q5(t,e){let n;if(e instanceof bc)n={update:cS(t,e.key,e.value)};else if(e instanceof XC)n={delete:Dy(t,e.key)};else if(e instanceof Jo)n={update:cS(t,e.key,e.data),updateMask:tU(e.fieldMask)};else{if(!(e instanceof b5))return Se(16599,{dt:e.type});n={verify:Dy(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(a,l){const c=l.transform;if(c instanceof Td)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof dc)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof pc)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Sd)return{fieldPath:l.field.canonicalString(),increment:c.Ae};throw Se(20930,{transform:l.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,a){return a.updateTime!==void 0?{updateTime:B5(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Se(27497)}(t,e.precondition)),n}function K5(t,e){return t&&t.length>0?(Qe(e!==void 0,14353),t.map(n=>function(i,a){let l=i.updateTime?ni(i.updateTime):ni(a);return l.isEqual(Ce.min())&&(l=ni(a)),new P5(l,i.transformResults||[])}(n,e))):[]}function G5(t,e){return{documents:[rP(t,e.path)]}}function Y5(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=rP(t,i);const a=function(p){if(p.length!==0)return oP(Pr.create(p,"and"))}(e.filters);a&&(n.structuredQuery.where=a);const l=function(p){if(p.length!==0)return p.map(m=>function(w){return{field:qa(w.field),direction:J5(w.dir)}}(m))}(e.orderBy);l&&(n.structuredQuery.orderBy=l);const c=Ry(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ft:n,parent:i}}function Q5(t){let e=W5(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Qe(r===1,65062);const m=n.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let a=[];n.where&&(a=function(y){const w=sP(y);return w instanceof Pr&&NC(w)?w.getFilters():[w]}(n.where));let l=[];n.orderBy&&(l=function(y){return y.map(w=>function(x){return new Ed(Ka(x.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(n.orderBy));let c=null;n.limit&&(c=function(y){let w;return w=typeof y=="object"?y.value:y,hp(w)?null:w}(n.limit));let h=null;n.startAt&&(h=function(y){const w=!!y.before,T=y.values||[];return new wd(T,w)}(n.startAt));let p=null;return n.endAt&&(p=function(y){const w=!y.before,T=y.values||[];return new wd(T,w)}(n.endAt)),p5(e,i,l,a,c,"F",h,p)}function X5(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ka(n.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ka(n.unaryFilter.field);return bt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ka(n.unaryFilter.field);return bt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Ka(n.unaryFilter.field);return bt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}}(t):t.fieldFilter!==void 0?function(n){return bt.create(Ka(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Pr.create(n.compositeFilter.filters.map(r=>sP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Se(1026)}}(n.compositeFilter.op))}(t):Se(30097,{filter:t})}function J5(t){return j5[t]}function Z5(t){return U5[t]}function eU(t){return $5[t]}function qa(t){return{fieldPath:t.canonicalString()}}function Ka(t){return en.fromServerFormat(t.fieldPath)}function oP(t){return t instanceof bt?function(n){if(n.op==="=="){if(XT(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NAN"}};if(QT(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(XT(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NAN"}};if(QT(n.value))return{unaryFilter:{field:qa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:qa(n.field),op:Z5(n.op),value:n.value}}}(t):t instanceof Pr?function(n){const r=n.getFilters().map(i=>oP(i));return r.length===1?r[0]:{compositeFilter:{op:eU(n.op),filters:r}}}(t):Se(54877,{filter:t})}function tU(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function aP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function lP(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Cs{constructor(e,n,r,i,a=Ce.min(),l=Ce.min(),c=nn.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(e){return new Cs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nU{constructor(e){this.yt=e}}function rU(t){const e=Q5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ky(e,e.limit,"L"):e}/**
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
 */class iU{constructor(){this.bn=new sU}addToCollectionParentIndex(e,n){return this.bn.add(n),ee.resolve()}getCollectionParents(e,n){return ee.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return ee.resolve()}deleteFieldIndex(e,n){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,n){return ee.resolve()}getDocumentsMatchingTarget(e,n){return ee.resolve(null)}getIndexType(e,n){return ee.resolve(0)}getFieldIndexes(e,n){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,n){return ee.resolve(js.min())}getMinOffsetFromCollectionGroup(e,n){return ee.resolve(js.min())}updateCollectionGroup(e,n,r){return ee.resolve()}updateIndexEntries(e,n){return ee.resolve()}}class sU{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ot(st.comparator),a=!i.has(r);return this.index[n]=i.add(r),a}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ot(st.comparator)).toArray()}}/**
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
 */const hS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},uP=41943040;class An{static withCacheSize(e){return new An(e,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */An.DEFAULT_COLLECTION_PERCENTILE=10,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,An.DEFAULT=new An(uP,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),An.DISABLED=new An(-1,0,0);/**
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
 */class _l{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new _l(0)}static ar(){return new _l(-1)}}/**
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
 */const fS="LruGarbageCollector",oU=1048576;function dS([t,e],[n,r]){const i=Fe(t,n);return i===0?Fe(e,r):i}class aU{constructor(e){this.Pr=e,this.buffer=new Ot(dS),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();dS(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class lU{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){fe(fS,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bl(n)?fe(fS,"Ignoring IndexedDB error during garbage collection: ",n):await Rl(n)}await this.Ar(3e5)})}}class uU{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return ee.resolve(cp.ce);const r=new aU(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(hS)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hS):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,a,l,c,h,p;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,l=Date.now(),this.nthSequenceNumber(e,i))).next(y=>(r=y,c=Date.now(),this.removeTargets(e,r,n))).next(y=>(a=y,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(p=Date.now(),Wa()<=Oe.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-m}ms
	Determined least recently used ${i} in `+(c-l)+`ms
	Removed ${a} targets in `+(h-c)+`ms
	Removed ${y} documents in `+(p-h)+`ms
Total Duration: ${p-m}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:y})))}}function cU(t,e){return new uU(t,e)}/**
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
 */class hU{constructor(){this.changes=new Xo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?ee.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class dU{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Qu(r.mutation,i,Sr.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,je()).next(()=>r))}getLocalViewOfDocuments(e,n,r=je()){const i=Do();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(a=>{let l=Uu();return a.forEach((c,h)=>{l=l.insert(c,h.overlayedDocument)}),l}))}getOverlayedDocuments(e,n){const r=Do();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,je()))}populateOverlays(e,n,r){const i=[];return r.forEach(a=>{n.has(a)||i.push(a)}),this.documentOverlayCache.getOverlays(e,i).next(a=>{a.forEach((l,c)=>{n.set(l,c)})})}computeViews(e,n,r,i){let a=ji();const l=Yu(),c=function(){return Yu()}();return n.forEach((h,p)=>{const m=r.get(p.key);i.has(p.key)&&(m===void 0||m.mutation instanceof Jo)?a=a.insert(p.key,p):m!==void 0?(l.set(p.key,m.mutation.getFieldMask()),Qu(m.mutation,p,m.mutation.getFieldMask(),ct.now())):l.set(p.key,Sr.empty())}),this.recalculateAndSaveOverlays(e,a).next(h=>(h.forEach((p,m)=>l.set(p,m)),n.forEach((p,m)=>c.set(p,new fU(m,l.get(p)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Yu();let i=new yt((l,c)=>l-c),a=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(l=>{for(const c of l)c.keys().forEach(h=>{const p=n.get(h);if(p===null)return;let m=r.get(h)||Sr.empty();m=c.applyToLocalView(p,m),r.set(h,m);const y=(i.get(c.batchId)||je()).add(h);i=i.insert(c.batchId,y)})}).next(()=>{const l=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),p=h.key,m=h.value,y=BC();m.forEach(w=>{if(!a.has(w)){const T=YC(n.get(w),r.get(w));T!==null&&y.set(w,T),a=a.add(w)}}),l.push(this.documentOverlayCache.saveOverlays(e,p,y))}return ee.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return m5(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):FC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(a=>{const l=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-a.size):ee.resolve(Do());let c=uc,h=a;return l.next(p=>ee.forEach(p,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),a.get(m)?ee.resolve():this.remoteDocumentCache.getEntry(e,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(e,p,a)).next(()=>this.computeViews(e,h,p,je())).next(m=>({batchId:c,changes:zC(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next(r=>{let i=Uu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const a=n.collectionGroup;let l=Uu();return this.indexManager.getCollectionParents(e,a).next(c=>ee.forEach(c,h=>{const p=function(y,w){return new Rc(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,h.child(a));return this.getDocumentsMatchingCollectionQuery(e,p,r,i).next(m=>{m.forEach((y,w)=>{l=l.insert(y,w)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,n,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,a,i))).next(l=>{a.forEach((h,p)=>{const m=p.getKey();l.get(m)===null&&(l=l.insert(m,hn.newInvalidDocument(m)))});let c=Uu();return l.forEach((h,p)=>{const m=a.get(h);m!==void 0&&Qu(m.mutation,p,Sr.empty(),ct.now()),pp(n,p)&&(c=c.insert(h,p))}),c})}}/**
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
 */class pU{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return ee.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ni(i.createTime)}}(n)),ee.resolve()}getNamedQuery(e,n){return ee.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:rU(i.bundledQuery),readTime:ni(i.readTime)}}(n)),ee.resolve()}}/**
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
 */class mU{constructor(){this.overlays=new yt(_e.comparator),this.Lr=new Map}getOverlay(e,n){return ee.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Do();return ee.forEach(n,i=>this.getOverlay(e,i).next(a=>{a!==null&&r.set(i,a)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,a)=>{this.St(e,n,a)}),ee.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(a=>this.overlays=this.overlays.remove(a)),this.Lr.delete(r)),ee.resolve()}getOverlaysForCollection(e,n,r){const i=Do(),a=n.length+1,l=new _e(n.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,p=h.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===a&&h.largestBatchId>r&&i.set(h.getKey(),h)}return ee.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let a=new yt((p,m)=>p-m);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>r){let m=a.get(p.largestBatchId);m===null&&(m=Do(),a=a.insert(p.largestBatchId,m)),m.set(p.getKey(),p)}}const c=Do(),h=a.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((p,m)=>c.set(p,m)),!(c.size()>=i)););return ee.resolve(c)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new N5(n,r));let a=this.Lr.get(n);a===void 0&&(a=je(),this.Lr.set(n,a)),this.Lr.set(n,a.add(r.key))}}/**
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
 */class gU{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ee.resolve()}}/**
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
 */class u_{constructor(){this.kr=new Ot(zt.qr),this.Kr=new Ot(zt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new zt(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new zt(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new _e(new st([])),r=new zt(n,e),i=new zt(n,e+1),a=[];return this.Kr.forEachInRange([r,i],l=>{this.Wr(l),a.push(l.key)}),a}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new _e(new st([])),r=new zt(n,e),i=new zt(n,e+1);let a=je();return this.Kr.forEachInRange([r,i],l=>{a=a.add(l.key)}),a}containsKey(e){const n=new zt(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class zt{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return _e.comparator(e.key,n.key)||Fe(e.Jr,n.Jr)}static Ur(e,n){return Fe(e.Jr,n.Jr)||_e.comparator(e.key,n.key)}}/**
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
 */class yU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ot(zt.qr)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new D5(a,n,r,i);this.mutationQueue.push(l);for(const c of i)this.Hr=this.Hr.add(new zt(c.key,a)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return ee.resolve(l)}lookupMutationBatch(e,n){return ee.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),a=i<0?0:i;return ee.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?e_:this.Yn-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new zt(n,0),i=new zt(n,Number.POSITIVE_INFINITY),a=[];return this.Hr.forEachInRange([r,i],l=>{const c=this.Zr(l.Jr);a.push(c)}),ee.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ot(Fe);return n.forEach(i=>{const a=new zt(i,0),l=new zt(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([a,l],c=>{r=r.add(c.Jr)})}),ee.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let a=r;_e.isDocumentKey(a)||(a=a.child(""));const l=new zt(new _e(a),0);let c=new Ot(Fe);return this.Hr.forEachWhile(h=>{const p=h.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(c=c.add(h.Jr)),!0)},l),ee.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Qe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return ee.forEach(n.mutations,i=>{const a=new zt(i.key,n.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new zt(n,0),i=this.Hr.firstAfterOrEqual(r);return ee.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class vU{constructor(e){this.ti=e,this.docs=function(){return new yt(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),a=i?i.size:0,l=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return ee.resolve(r?r.document.mutableCopy():hn.newInvalidDocument(n))}getEntries(e,n){let r=ji();return n.forEach(i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():hn.newInvalidDocument(i))}),ee.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let a=ji();const l=n.path,c=new _e(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:p,value:{document:m}}=h.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||qj(Hj(m),r)<=0||(i.has(m.key)||pp(n,m))&&(a=a.insert(m.key,m.mutableCopy()))}return ee.resolve(a)}getAllFromCollectionGroup(e,n,r,i){Se(9500)}ni(e,n){return ee.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new _U(this)}getSize(e){return ee.resolve(this.size)}}class _U extends hU{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),ee.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class wU{constructor(e){this.persistence=e,this.ri=new Xo(n=>r_(n),i_),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.ii=0,this.si=new u_,this.targetCount=0,this.oi=_l._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),ee.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new _l(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,ee.resolve()}updateTargetData(e,n){return this.lr(n),ee.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,n,r){let i=0;const a=[];return this.ri.forEach((l,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(l),a.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),ee.waitFor(a).next(()=>i)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return ee.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),ee.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,a=[];return i&&n.forEach(l=>{a.push(i.markPotentiallyOrphaned(e,l))}),ee.waitFor(a)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),ee.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return ee.resolve(r)}containsKey(e,n){return ee.resolve(this.si.containsKey(n))}}/**
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
 */class cP{constructor(e,n){this._i={},this.overlays={},this.ai=new cp(0),this.ui=!1,this.ui=!0,this.ci=new gU,this.referenceDelegate=e(this),this.li=new wU(this),this.indexManager=new iU,this.remoteDocumentCache=function(i){return new vU(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new nU(n),this.Pi=new pU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new mU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new yU(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){fe("MemoryPersistence","Starting transaction:",e);const i=new EU(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(a=>this.referenceDelegate.Ei(i).next(()=>a)).toPromise().then(a=>(i.raiseOnCommittedEvent(),a))}Ii(e,n){return ee.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class EU extends Gj{constructor(e){super(),this.currentSequenceNumber=e}}class c_{constructor(e){this.persistence=e,this.Ri=new u_,this.Ai=null}static Vi(e){return new c_(e)}get di(){if(this.Ai)return this.Ai;throw Se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),ee.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),ee.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),ee.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(a=>this.di.add(a.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.di,r=>{const i=_e.fromPath(r);return this.mi(e,i).next(a=>{a||n.removeEntry(i,Ce.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return ee.or([()=>ee.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Id{constructor(e,n){this.persistence=e,this.fi=new Xo(r=>Xj(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=cU(this,n)}static Vi(e,n){return new Id(e,n)}Ti(){}Ei(e){return ee.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return ee.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(a=>a?ee.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ni(e,l=>this.wr(e,l,n).next(c=>{c||(r++,a.removeEntry(l,Ce.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),ee.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),ee.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),ee.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Lf(e.data.value)),n}wr(e,n,r){return ee.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return ee.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class h_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=i}static Is(e,n){let r=je(),i=je();for(const a of n.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new h_(e,n.fromCache,r,i)}}/**
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
 */class TU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class SU{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return J2()?8:Yj(fn())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const a={result:null};return this.gs(e,n).next(l=>{a.result=l}).next(()=>{if(!a.result)return this.ps(e,n,i,r).next(l=>{a.result=l})}).next(()=>{if(a.result)return;const l=new TU;return this.ys(e,n,l).next(c=>{if(a.result=c,this.As)return this.ws(e,n,l,c.size)})}).next(()=>a.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Wa()<=Oe.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Ha(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ee.resolve()):(Wa()<=Oe.DEBUG&&fe("QueryEngine","Query:",Ha(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Wa()<=Oe.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Ha(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ti(n))):ee.resolve())}gs(e,n){if(tS(n))return ee.resolve(null);let r=ti(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ky(n,null,"F"),r=ti(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const l=je(...a);return this.fs.getDocuments(e,l).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const p=this.Ss(n,c);return this.bs(n,p,l,h.readTime)?this.gs(e,ky(n,null,"F")):this.Ds(e,p,n,h)}))})))}ps(e,n,r,i){return tS(n)||i.isEqual(Ce.min())?ee.resolve(null):this.fs.getDocuments(e,r).next(a=>{const l=this.Ss(n,a);return this.bs(n,l,r,i)?ee.resolve(null):(Wa()<=Oe.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ha(n)),this.Ds(e,l,n,Wj(i,uc)).next(c=>c))})}Ss(e,n){let r=new Ot(UC(e));return n.forEach((i,a)=>{pp(e,a)&&(r=r.add(a))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const a=e.limitType==="F"?n.last():n.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}ys(e,n,r){return Wa()<=Oe.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Ha(n)),this.fs.getDocumentsMatchingQuery(e,n,js.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(a=>(n.forEach(l=>{a=a.insert(l.key,l)}),a))}}/**
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
 */const f_="LocalStore",xU=3e8;class IU{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new yt(Fe),this.Fs=new Xo(a=>r_(a),i_),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dU(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function AU(t,e,n,r){return new IU(t,e,n,r)}async function hP(t,e){const n=ke(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(a=>(i=a,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(a=>{const l=[],c=[];let h=je();for(const p of i){l.push(p.batchId);for(const m of p.mutations)h=h.add(m.key)}for(const p of a){c.push(p.batchId);for(const m of p.mutations)h=h.add(m.key)}return n.localDocuments.getDocuments(r,h).next(p=>({Ns:p,removedBatchIds:l,addedBatchIds:c}))})})}function CU(t,e){const n=ke(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),a=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,h,p,m){const y=p.batch,w=y.keys();let T=ee.resolve();return w.forEach(x=>{T=T.next(()=>m.getEntry(h,x)).next(P=>{const R=p.docVersions.get(x);Qe(R!==null,48541),P.version.compareTo(R)<0&&(y.applyToRemoteDocument(P,p),P.isValidDocument()&&(P.setReadTime(p.commitVersion),m.addEntry(P)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(h,y))}(n,r,e,a).next(()=>a.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=je();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(h=h.add(c.batch.mutations[p].key));return h}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function fP(t){const e=ke(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function PU(t,e){const n=ke(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const l=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const c=[];e.targetChanges.forEach((m,y)=>{const w=i.get(y);if(!w)return;c.push(n.li.removeMatchingKeys(a,m.removedDocuments,y).next(()=>n.li.addMatchingKeys(a,m.addedDocuments,y)));let T=w.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(y)!==null?T=T.withResumeToken(nn.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):m.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(m.resumeToken,r)),i=i.insert(y,T),function(P,R,b){return P.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=xU?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(w,T,m)&&c.push(n.li.updateTargetData(a,T))});let h=ji(),p=je();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(a,m))}),c.push(kU(a,l,e.documentUpdates).next(m=>{h=m.Bs,p=m.Ls})),!r.isEqual(Ce.min())){const m=n.li.getLastRemoteSnapshotVersion(a).next(y=>n.li.setTargetsMetadata(a,a.currentSequenceNumber,r));c.push(m)}return ee.waitFor(c).next(()=>l.apply(a)).next(()=>n.localDocuments.getLocalViewOfDocuments(a,h,p)).next(()=>h)}).then(a=>(n.vs=i,a))}function kU(t,e,n){let r=je(),i=je();return n.forEach(a=>r=r.add(a)),e.getEntries(t,r).next(a=>{let l=ji();return n.forEach((c,h)=>{const p=a.get(c);h.isFoundDocument()!==p.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(Ce.min())?(e.removeEntry(c,h.readTime),l=l.insert(c,h)):!p.isValidDocument()||h.version.compareTo(p.version)>0||h.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(h),l=l.insert(c,h)):fe(f_,"Ignoring outdated watch update for ",c,". Current version:",p.version," Watch version:",h.version)}),{Bs:l,Ls:i}})}function RU(t,e){const n=ke(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=e_),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bU(t,e){const n=ke(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(a=>a?(i=a,ee.resolve(i)):n.li.allocateTargetId(r).next(l=>(i=new Cs(e,l,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Vy(t,e,n){const r=ke(t),i=r.vs.get(e),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!bl(l))throw l;fe(f_,`Failed to update sequence numbers for target ${e}: ${l}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function pS(t,e,n){const r=ke(t);let i=Ce.min(),a=je();return r.persistence.runTransaction("Execute query","readwrite",l=>function(h,p,m){const y=ke(h),w=y.Fs.get(m);return w!==void 0?ee.resolve(y.vs.get(w)):y.li.getTargetData(p,m)}(r,l,ti(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(l,c.targetId).next(h=>{a=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(l,e,n?i:Ce.min(),n?a:je())).next(c=>(DU(r,y5(e),c),{documents:c,ks:a})))}function DU(t,e,n){let r=t.Ms.get(e)||Ce.min();n.forEach((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),t.Ms.set(e,r)}class mS{constructor(){this.activeTargetIds=S5()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NU{constructor(){this.vo=new mS,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new mS,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class VU{Mo(e){}shutdown(){}}/**
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
 */const gS="ConnectivityMonitor";class yS{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){fe(gS,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){fe(gS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ff=null;function Ly(){return ff===null?ff=function(){return 268435456+Math.round(2147483648*Math.random())}():ff++,"0x"+ff.toString(16)}/**
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
 */const kg="RestConnection",LU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class MU{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===vd?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,a){const l=Ly(),c=this.Qo(e,n.toUriEncodedString());fe(kg,`Sending RPC '${e}' ${l}:`,c,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,i,a);const{host:p}=new URL(c),m=xc(p);return this.zo(e,c,h,r,m).then(y=>(fe(kg,`Received RPC '${e}' ${l}: `,y),y),y=>{throw Ko(kg,`RPC '${e}' ${l} failed with error: `,y,"url: ",c,"request:",r),y})}jo(e,n,r,i,a,l){return this.Wo(e,n,r,i,a)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>e[a]=i),r&&r.headers.forEach((i,a)=>e[a]=i)}Qo(e,n){const r=LU[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class OU{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const un="WebChannelConnection",Nu=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class il extends MU{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!il.c_){const e=pC();Nu(e,dC.STAT_EVENT,n=>{n.stat===Ty.PROXY?fe(un,"STAT_EVENT: detected buffering proxy"):n.stat===Ty.NOPROXY&&fe(un,"STAT_EVENT: detected no buffering proxy")}),il.c_=!0}}zo(e,n,r,i,a){const l=Ly();return new Promise((c,h)=>{const p=new hC;p.setWithCredentials(!0),p.listenOnce(fC.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Vf.NO_ERROR:const y=p.getResponseJson();fe(un,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(y)),c(y);break;case Vf.TIMEOUT:fe(un,`RPC '${e}' ${l} timed out`),h(new de(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Vf.HTTP_ERROR:const w=p.getStatus();if(fe(un,`RPC '${e}' ${l} failed with status:`,w,"response text:",p.getResponseText()),w>0){let T=p.getResponseJson();Array.isArray(T)&&(T=T[0]);const x=T==null?void 0:T.error;if(x&&x.status&&x.message){const P=function(b){const O=b.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(O)>=0?O:Z.UNKNOWN}(x.status);h(new de(P,x.message))}else h(new de(Z.UNKNOWN,"Server responded with status "+p.getStatus()))}else h(new de(Z.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{l_:e,streamId:l,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{fe(un,`RPC '${e}' ${l} completed.`)}});const m=JSON.stringify(i);fe(un,`RPC '${e}' ${l} sending request:`,i),p.send(n,"POST",m,r,15)})}T_(e,n,r){const i=Ly(),a=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const p=a.join("");fe(un,`Creating RPC '${e}' stream ${i}: ${p}`,c);const m=l.createWebChannel(p,c);this.E_(m);let y=!1,w=!1;const T=new OU({Jo:x=>{w?fe(un,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(y||(fe(un,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),fe(un,`RPC '${e}' stream ${i} sending:`,x),m.send(x))},Ho:()=>m.close()});return Nu(m,ju.EventType.OPEN,()=>{w||(fe(un,`RPC '${e}' stream ${i} transport opened.`),T.i_())}),Nu(m,ju.EventType.CLOSE,()=>{w||(w=!0,fe(un,`RPC '${e}' stream ${i} transport closed`),T.o_(),this.I_(m))}),Nu(m,ju.EventType.ERROR,x=>{w||(w=!0,Ko(un,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),T.o_(new de(Z.UNAVAILABLE,"The operation could not be completed")))}),Nu(m,ju.EventType.MESSAGE,x=>{var P;if(!w){const R=x.data[0];Qe(!!R,16349);const b=R,O=(b==null?void 0:b.error)||((P=b[0])==null?void 0:P.error);if(O){fe(un,`RPC '${e}' stream ${i} received error:`,O);const $=O.status;let U=function(C){const I=Pt[C];if(I!==void 0)return JC(I)}($),H=O.message;$==="NOT_FOUND"&&H.includes("database")&&H.includes("does not exist")&&H.includes(this.databaseId.database)&&Ko(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),U===void 0&&(U=Z.INTERNAL,H="Unknown error status: "+$+" with message "+O.message),w=!0,T.o_(new de(U,H)),m.close()}else fe(un,`RPC '${e}' stream ${i} received:`,R),T.__(R)}}),il.u_(),setTimeout(()=>{T.s_()},0),T}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return mC()}}/**
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
 */function FU(t){return new il(t)}function Rg(){return typeof document<"u"?document:null}/**
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
 */function vp(t){return new z5(t,!0)}/**
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
 */il.c_=!1;class dP{constructor(e,n,r=1e3,i=1.5,a=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&fe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const vS="PersistentStream";class pP{constructor(e,n,r,i,a,l,c,h){this.Ci=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new dP(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(Fi(n.toString()),Fi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new de(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return fe(vS,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(fe(vS,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jU extends pP{constructor(e,n,r,i,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,l),this.serializer=a}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=H5(this.serializer,e),r=function(a){if(!("targetChange"in a))return Ce.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Ce.min():l.readTime?ni(l.readTime):Ce.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Ny(this.serializer),n.addTarget=function(a,l){let c;const h=l.target;if(c=Cy(h)?{documents:G5(a,h)}:{query:Y5(a,h).ft},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=tP(a,l.resumeToken);const p=Ry(a,l.expectedCount);p!==null&&(c.expectedCount=p)}else if(l.snapshotVersion.compareTo(Ce.min())>0){c.readTime=xd(a,l.snapshotVersion.toTimestamp());const p=Ry(a,l.expectedCount);p!==null&&(c.expectedCount=p)}return c}(this.serializer,e);const r=X5(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Ny(this.serializer),n.removeTarget=e,this.q_(n)}}class UU extends pP{constructor(e,n,r,i,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,l),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=K5(e.writeResults,e.commitTime),r=ni(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ny(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>q5(this.serializer,r))};this.q_(n)}}/**
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
 */class $U{}class zU extends $U{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new de(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Wo(e,by(n,r),i,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new de(Z.UNKNOWN,a.toString())})}jo(e,n,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.jo(e,by(n,r),i,l,c,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new de(Z.UNKNOWN,l.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function BU(t,e,n,r){return new zU(t,e,n,r)}class WU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fi(n),this.aa=!1):fe("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Go="RemoteStore";class HU{constructor(e,n,r,i,a){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=a,this.Aa.Mo(l=>{r.enqueueAndForget(async()=>{Zo(this)&&(fe(Go,"Restarting streams for network reachability change."),await async function(h){const p=ke(h);p.Ia.add(4),await Nc(p),p.Va.set("Unknown"),p.Ia.delete(4),await _p(p)}(this))})}),this.Va=new WU(r,i)}}async function _p(t){if(Zo(t))for(const e of t.Ra)await e(!0)}async function Nc(t){for(const e of t.Ra)await e(!1)}function mP(t,e){const n=ke(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),g_(n)?m_(n):Dl(n).O_()&&p_(n,e))}function d_(t,e){const n=ke(t),r=Dl(n);n.Ea.delete(e),r.O_()&&gP(n,e),n.Ea.size===0&&(r.O_()?r.L_():Zo(n)&&n.Va.set("Unknown"))}function p_(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Dl(t).Z_(e)}function gP(t,e){t.da.$e(e),Dl(t).X_(e)}function m_(t){t.da=new F5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Dl(t).start(),t.Va.ua()}function g_(t){return Zo(t)&&!Dl(t).x_()&&t.Ea.size>0}function Zo(t){return ke(t).Ia.size===0}function yP(t){t.da=void 0}async function qU(t){t.Va.set("Online")}async function KU(t){t.Ea.forEach((e,n)=>{p_(t,e)})}async function GU(t,e){yP(t),g_(t)?(t.Va.ha(e),m_(t)):t.Va.set("Unknown")}async function YU(t,e,n){if(t.Va.set("Online"),e instanceof eP&&e.state===2&&e.cause)try{await async function(i,a){const l=a.cause;for(const c of a.targetIds)i.Ea.has(c)&&(await i.remoteSyncer.rejectListen(c,l),i.Ea.delete(c),i.da.removeTarget(c))}(t,e)}catch(r){fe(Go,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ad(t,r)}else if(e instanceof Ff?t.da.Xe(e):e instanceof ZC?t.da.st(e):t.da.tt(e),!n.isEqual(Ce.min()))try{const r=await fP(t.localStore);n.compareTo(r)>=0&&await function(a,l){const c=a.da.Tt(l);return c.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const m=a.Ea.get(p);m&&a.Ea.set(p,m.withResumeToken(h.resumeToken,l))}}),c.targetMismatches.forEach((h,p)=>{const m=a.Ea.get(h);if(!m)return;a.Ea.set(h,m.withResumeToken(nn.EMPTY_BYTE_STRING,m.snapshotVersion)),gP(a,h);const y=new Cs(m.target,h,p,m.sequenceNumber);p_(a,y)}),a.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){fe(Go,"Failed to raise snapshot:",r),await Ad(t,r)}}async function Ad(t,e,n){if(!bl(e))throw e;t.Ia.add(1),await Nc(t),t.Va.set("Offline"),n||(n=()=>fP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{fe(Go,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await _p(t)})}function vP(t,e){return e().catch(n=>Ad(t,n,e))}async function wp(t){const e=ke(t),n=Bs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:e_;for(;QU(e);)try{const i=await RU(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,XU(e,i)}catch(i){await Ad(e,i)}_P(e)&&wP(e)}function QU(t){return Zo(t)&&t.Ta.length<10}function XU(t,e){t.Ta.push(e);const n=Bs(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function _P(t){return Zo(t)&&!Bs(t).x_()&&t.Ta.length>0}function wP(t){Bs(t).start()}async function JU(t){Bs(t).ra()}async function ZU(t){const e=Bs(t);for(const n of t.Ta)e.ea(n.mutations)}async function e$(t,e,n){const r=t.Ta.shift(),i=o_.from(r,e,n);await vP(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await wp(t)}async function t$(t,e){e&&Bs(t).Y_&&await async function(r,i){if(function(l){return L5(l)&&l!==Z.ABORTED}(i.code)){const a=r.Ta.shift();Bs(r).B_(),await vP(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i)),await wp(r)}}(t,e),_P(t)&&wP(t)}async function _S(t,e){const n=ke(t);n.asyncQueue.verifyOperationInProgress(),fe(Go,"RemoteStore received new credentials");const r=Zo(n);n.Ia.add(3),await Nc(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await _p(n)}async function n$(t,e){const n=ke(t);e?(n.Ia.delete(2),await _p(n)):e||(n.Ia.add(2),await Nc(n),n.Va.set("Unknown"))}function Dl(t){return t.ma||(t.ma=function(n,r,i){const a=ke(n);return a.sa(),new jU(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(t.datastore,t.asyncQueue,{Zo:qU.bind(null,t),Yo:KU.bind(null,t),t_:GU.bind(null,t),H_:YU.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),g_(t)?m_(t):t.Va.set("Unknown")):(await t.ma.stop(),yP(t))})),t.ma}function Bs(t){return t.fa||(t.fa=function(n,r,i){const a=ke(n);return a.sa(),new UU(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:JU.bind(null,t),t_:t$.bind(null,t),ta:ZU.bind(null,t),na:e$.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await wp(t)):(await t.fa.stop(),t.Ta.length>0&&(fe(Go,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class y_{constructor(e,n,r,i,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new Vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,a){const l=Date.now()+r,c=new y_(e,n,l,i,a);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new de(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function v_(t,e){if(Fi("AsyncQueue",`${e}: ${t}`),bl(t))return new de(Z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class sl{static emptySet(e){return new sl(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||_e.comparator(n.key,r.key):(n,r)=>_e.comparator(n.key,r.key),this.keyedMap=Uu(),this.sortedSet=new yt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof sl)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new sl;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class wS{constructor(){this.ga=new yt(_e.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Se(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class wl{constructor(e,n,r,i,a,l,c,h,p){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=p}static fromInitialDocuments(e,n,r,i,a){const l=[];return n.forEach(c=>{l.push({type:0,doc:c})}),new wl(e,n,sl.emptySet(n),l,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dp(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class r${constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class i${constructor(){this.queries=ES(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ke(n),a=i.queries;i.queries=ES(),a.forEach((l,c)=>{for(const h of c.Sa)h.onError(r)})})(this,new de(Z.ABORTED,"Firestore shutting down"))}}function ES(){return new Xo(t=>jC(t),dp)}async function s$(t,e){const n=ke(t);let r=3;const i=e.query;let a=n.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new r$,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await n.onListen(i,!0);break;case 1:a.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(l){const c=v_(l,`Initialization of query '${Ha(e.query)}' failed`);return void e.onError(c)}n.queries.set(i,a),a.Sa.push(e),e.va(n.onlineState),a.wa&&e.Fa(a.wa)&&__(n)}async function o$(t,e){const n=ke(t),r=e.query;let i=3;const a=n.queries.get(r);if(a){const l=a.Sa.indexOf(e);l>=0&&(a.Sa.splice(l,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function a$(t,e){const n=ke(t);let r=!1;for(const i of e){const a=i.query,l=n.queries.get(a);if(l){for(const c of l.Sa)c.Fa(i)&&(r=!0);l.wa=i}}r&&__(n)}function l$(t,e,n){const r=ke(t),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(n);r.queries.delete(e)}function __(t){t.Ca.forEach(e=>{e.next()})}var My,TS;(TS=My||(My={})).Ma="default",TS.Cache="cache";class u${constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wl(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=wl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==My.Cache}}/**
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
 */class EP{constructor(e){this.key=e}}class TP{constructor(e){this.key=e}}class c${constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=je(),this.mutatedKeys=je(),this.eu=UC(e),this.tu=new sl(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new wS,i=n?n.tu:this.tu;let a=n?n.mutatedKeys:this.mutatedKeys,l=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,p=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,y)=>{const w=i.get(m),T=pp(this.query,y)?y:null,x=!!w&&this.mutatedKeys.has(w.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let R=!1;w&&T?w.data.isEqual(T.data)?x!==P&&(r.track({type:3,doc:T}),R=!0):this.su(w,T)||(r.track({type:2,doc:T}),R=!0,(h&&this.eu(T,h)>0||p&&this.eu(T,p)<0)&&(c=!0)):!w&&T?(r.track({type:0,doc:T}),R=!0):w&&!T&&(r.track({type:1,doc:w}),R=!0,(h||p)&&(c=!0)),R&&(T?(l=l.add(T),a=P?a.add(m):a.delete(m)):(l=l.delete(m),a=a.delete(m)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const m=this.query.limitType==="F"?l.last():l.first();l=l.delete(m.key),a=a.delete(m.key),r.track({type:1,doc:m})}return{tu:l,iu:r,bs:c,mutatedKeys:a}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const l=e.iu.ya();l.sort((m,y)=>function(T,x){const P=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{Vt:R})}};return P(T)-P(x)}(m.type,y.type)||this.eu(m.doc,y.doc)),this.ou(r),i=i??!1;const c=n&&!i?this._u():[],h=this.Ya.size===0&&this.current&&!i?1:0,p=h!==this.Xa;return this.Xa=h,l.length!==0||p?{snapshot:new wl(this.query,e.tu,a,l,e.mutatedKeys,h===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new wS,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=je(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new TP(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new EP(r))}),n}cu(e){this.Za=e.ks,this.Ya=je();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return wl.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const w_="SyncEngine";class h${constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class f${constructor(e){this.key=e,this.hu=!1}}class d${constructor(e,n,r,i,a,l){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new Xo(c=>jC(c),dp),this.Eu=new Map,this.Iu=new Set,this.Ru=new yt(_e.comparator),this.Au=new Map,this.Vu=new u_,this.du={},this.mu=new Map,this.fu=_l.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function p$(t,e,n=!0){const r=PP(t);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await SP(r,e,n,!0),i}async function m$(t,e){const n=PP(t);await SP(n,e,!0,!1)}async function SP(t,e,n,r){const i=await bU(t.localStore,ti(e)),a=i.targetId,l=t.sharedClientState.addLocalQueryTarget(a,n);let c;return r&&(c=await g$(t,e,a,l==="current",i.resumeToken)),t.isPrimaryClient&&n&&mP(t.remoteStore,i),c}async function g$(t,e,n,r,i){t.pu=(y,w,T)=>async function(P,R,b,O){let $=R.view.ru(b);$.bs&&($=await pS(P.localStore,R.query,!1).then(({documents:C})=>R.view.ru(C,$)));const U=O&&O.targetChanges.get(R.targetId),H=O&&O.targetMismatches.get(R.targetId)!=null,X=R.view.applyChanges($,P.isPrimaryClient,U,H);return xS(P,R.targetId,X.au),X.snapshot}(t,y,w,T);const a=await pS(t.localStore,e,!0),l=new c$(e,a.ks),c=l.ru(a.documents),h=Dc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),p=l.applyChanges(c,t.isPrimaryClient,h);xS(t,n,p.au);const m=new h$(e,n,l);return t.Tu.set(e,m),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),p.snapshot}async function y$(t,e,n){const r=ke(t),i=r.Tu.get(e),a=r.Eu.get(i.targetId);if(a.length>1)return r.Eu.set(i.targetId,a.filter(l=>!dp(l,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Vy(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&d_(r.remoteStore,i.targetId),Oy(r,i.targetId)}).catch(Rl)):(Oy(r,i.targetId),await Vy(r.localStore,i.targetId,!0))}async function v$(t,e){const n=ke(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),d_(n.remoteStore,r.targetId))}async function _$(t,e,n){const r=A$(t);try{const i=await function(l,c){const h=ke(l),p=ct.now(),m=c.reduce((T,x)=>T.add(x.key),je());let y,w;return h.persistence.runTransaction("Locally write mutations","readwrite",T=>{let x=ji(),P=je();return h.xs.getEntries(T,m).next(R=>{x=R,x.forEach((b,O)=>{O.isValidDocument()||(P=P.add(b))})}).next(()=>h.localDocuments.getOverlayedDocuments(T,x)).next(R=>{y=R;const b=[];for(const O of c){const $=R5(O,y.get(O.key).overlayedDocument);$!=null&&b.push(new Jo(O.key,$,RC($.value.mapValue),Vi.exists(!0)))}return h.mutationQueue.addMutationBatch(T,p,b,c)}).next(R=>{w=R;const b=R.applyToLocalDocumentSet(y,P);return h.documentOverlayCache.saveOverlays(T,R.batchId,b)})}).then(()=>({batchId:w.batchId,changes:zC(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(l,c,h){let p=l.du[l.currentUser.toKey()];p||(p=new yt(Fe)),p=p.insert(c,h),l.du[l.currentUser.toKey()]=p}(r,i.batchId,n),await Vc(r,i.changes),await wp(r.remoteStore)}catch(i){const a=v_(i,"Failed to persist write");n.reject(a)}}async function xP(t,e){const n=ke(t);try{const r=await PU(n.localStore,e);e.targetChanges.forEach((i,a)=>{const l=n.Au.get(a);l&&(Qe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?l.hu=!0:i.modifiedDocuments.size>0?Qe(l.hu,14607):i.removedDocuments.size>0&&(Qe(l.hu,42227),l.hu=!1))}),await Vc(n,r,e)}catch(r){await Rl(r)}}function SS(t,e,n){const r=ke(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((a,l)=>{const c=l.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(l,c){const h=ke(l);h.onlineState=c;let p=!1;h.queries.forEach((m,y)=>{for(const w of y.Sa)w.va(c)&&(p=!0)}),p&&__(h)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function w$(t,e,n){const r=ke(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),a=i&&i.key;if(a){let l=new yt(_e.comparator);l=l.insert(a,hn.newNoDocument(a,Ce.min()));const c=je().add(a),h=new yp(Ce.min(),new Map,new yt(Fe),l,c);await xP(r,h),r.Ru=r.Ru.remove(a),r.Au.delete(e),E_(r)}else await Vy(r.localStore,e,!1).then(()=>Oy(r,e,n)).catch(Rl)}async function E$(t,e){const n=ke(t),r=e.batch.batchId;try{const i=await CU(n.localStore,e);AP(n,r,null),IP(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vc(n,i)}catch(i){await Rl(i)}}async function T$(t,e,n){const r=ke(t);try{const i=await function(l,c){const h=ke(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let m;return h.mutationQueue.lookupMutationBatch(p,c).next(y=>(Qe(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(p,y))).next(()=>h.mutationQueue.performConsistencyCheck(p)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(p,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,m)).next(()=>h.localDocuments.getDocuments(p,m))})}(r.localStore,e);AP(r,e,n),IP(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vc(r,i)}catch(i){await Rl(i)}}function IP(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function AP(t,e,n){const r=ke(t);let i=r.du[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(n?a.reject(n):a.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Oy(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||CP(t,r)})}function CP(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(d_(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),E_(t))}function xS(t,e,n){for(const r of n)r instanceof EP?(t.Vu.addReference(r.key,e),S$(t,r)):r instanceof TP?(fe(w_,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||CP(t,r.key)):Se(19791,{wu:r})}function S$(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(fe(w_,"New document in limbo: "+n),t.Iu.add(r),E_(t))}function E_(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new _e(st.fromString(e)),r=t.fu.next();t.Au.set(r,new f$(n)),t.Ru=t.Ru.insert(n,r),mP(t.remoteStore,new Cs(ti(OC(n.path)),r,"TargetPurposeLimboResolution",cp.ce))}}async function Vc(t,e,n){const r=ke(t),i=[],a=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach((c,h)=>{l.push(r.pu(h,e,n).then(p=>{var m;if((p||n)&&r.isPrimaryClient){const y=p?!p.fromCache:(m=n==null?void 0:n.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(p){i.push(p);const y=h_.Is(h.targetId,p);a.push(y)}}))}),await Promise.all(l),r.Pu.H_(i),await async function(h,p){const m=ke(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>ee.forEach(p,w=>ee.forEach(w.Ts,T=>m.persistence.referenceDelegate.addReference(y,w.targetId,T)).next(()=>ee.forEach(w.Es,T=>m.persistence.referenceDelegate.removeReference(y,w.targetId,T)))))}catch(y){if(!bl(y))throw y;fe(f_,"Failed to update sequence numbers: "+y)}for(const y of p){const w=y.targetId;if(!y.fromCache){const T=m.vs.get(w),x=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(x);m.vs=m.vs.insert(w,P)}}}(r.localStore,a))}async function x$(t,e){const n=ke(t);if(!n.currentUser.isEqual(e)){fe(w_,"User change. New user:",e.toKey());const r=await hP(n.localStore,e);n.currentUser=e,function(a,l){a.mu.forEach(c=>{c.forEach(h=>{h.reject(new de(Z.CANCELLED,l))})}),a.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vc(n,r.Ns)}}function I$(t,e){const n=ke(t),r=n.Au.get(e);if(r&&r.hu)return je().add(r.key);{let i=je();const a=n.Eu.get(e);if(!a)return i;for(const l of a){const c=n.Tu.get(l);i=i.unionWith(c.view.nu)}return i}}function PP(t){const e=ke(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=I$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=w$.bind(null,e),e.Pu.H_=a$.bind(null,e.eventManager),e.Pu.yu=l$.bind(null,e.eventManager),e}function A$(t){const e=ke(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=E$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=T$.bind(null,e),e}class Cd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vp(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return AU(this.persistence,new SU,e.initialUser,this.serializer)}Cu(e){return new cP(c_.Vi,this.serializer)}Du(e){return new NU}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cd.provider={build:()=>new Cd};class C$ extends Cd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Qe(this.persistence.referenceDelegate instanceof Id,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lU(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?An.withCacheSize(this.cacheSizeBytes):An.DEFAULT;return new cP(r=>Id.Vi(r,n),this.serializer)}}class Fy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>SS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=x$.bind(null,this.syncEngine),await n$(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new i$}()}createDatastore(e){const n=vp(e.databaseInfo.databaseId),r=FU(e.databaseInfo);return BU(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,a,l,c){return new HU(r,i,a,l,c)}(this.localStore,this.datastore,e.asyncQueue,n=>SS(this.syncEngine,n,0),function(){return yS.v()?new yS:new VU}())}createSyncEngine(e,n){return function(i,a,l,c,h,p,m){const y=new d$(i,a,l,c,h,p);return m&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const a=ke(i);fe(Go,"RemoteStore shutting down."),a.Ia.add(5),await Nc(a),a.Aa.shutdown(),a.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Fy.provider={build:()=>new Fy};/**
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
 */class P${constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fi("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ws="FirestoreClient";class k${constructor(e,n,r,i,a){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=cn.UNAUTHENTICATED,this.clientId=Zv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async l=>{fe(Ws,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(fe(Ws,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=v_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bg(t,e){t.asyncQueue.verifyOperationInProgress(),fe(Ws,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hP(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function IS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await R$(t);fe(Ws,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_S(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>_S(e.remoteStore,i)),t._onlineComponents=e}async function R$(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){fe(Ws,"Using user provided OfflineComponentProvider");try{await bg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===Z.FAILED_PRECONDITION||i.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ko("Error using user provided cache. Falling back to memory cache: "+n),await bg(t,new Cd)}}else fe(Ws,"Using default OfflineComponentProvider"),await bg(t,new C$(void 0));return t._offlineComponents}async function kP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(fe(Ws,"Using user provided OnlineComponentProvider"),await IS(t,t._uninitializedComponentsProvider._online)):(fe(Ws,"Using default OnlineComponentProvider"),await IS(t,new Fy))),t._onlineComponents}function b$(t){return kP(t).then(e=>e.syncEngine)}async function D$(t){const e=await kP(t),n=e.eventManager;return n.onListen=p$.bind(null,e.syncEngine),n.onUnlisten=y$.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=m$.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=v$.bind(null,e.syncEngine),n}function N$(t,e,n={}){const r=new Vs;return t.asyncQueue.enqueueAndForget(async()=>function(a,l,c,h,p){const m=new P$({next:w=>{m.Nu(),l.enqueueAndForget(()=>o$(a,y)),w.fromCache&&h.source==="server"?p.reject(new de(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),y=new u$(c,m,{includeMetadataChanges:!0,qa:!0});return s$(a,y)}(await D$(t),t.asyncQueue,e,n,r)),r.promise}function V$(t,e){const n=new Vs;return t.asyncQueue.enqueueAndForget(async()=>_$(await b$(t),e,n)),n.promise}/**
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
 */function RP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const L$="ComponentProvider",AS=new Map;function M$(t,e,n,r,i){return new e5(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,RP(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const bP="firestore.googleapis.com",CS=!0;class PS{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new de(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bP,this.ssl=CS}else this.host=e.host,this.ssl=e.ssl??CS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uP;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oU)throw new de(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RP(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new de(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ep{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new PS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new de(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new PS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Nj;switch(r.type){case"firstParty":return new Oj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new de(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=AS.get(n);r&&(fe(L$,"Removing Datastore"),AS.delete(n),r.terminate())}(this),Promise.resolve()}}function O$(t,e,n,r={}){var p;t=gd(t,Ep);const i=xc(e),a=t._getSettings(),l={...a,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&xA(`https://${c}`),a.host!==bP&&a.host!==c&&Ko("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:c,ssl:i,emulatorOptions:r};if(!zo(h,l)&&(t._setSettings(h),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=cn.MOCK_USER;else{m=H2(r.mockUserToken,(p=t._app)==null?void 0:p.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new de(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new cn(w)}t._authCredentials=new Vj(new yC(m,y))}}/**
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
 */class Nl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nl(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ls(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}toJSON(){return{type:Ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(kc(n,Ht._jsonSchema))return new Ht(e,r||null,new _e(st.fromString(n.referencePath)))}}Ht._jsonSchemaVersion="firestore/documentReference/1.0",Ht._jsonSchema={type:Dt("string",Ht._jsonSchemaVersion),referencePath:Dt("string")};class Ls extends Nl{constructor(e,n,r){super(e,n,OC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new _e(e))}withConverter(e){return new Ls(this.firestore,e,this._path)}}function S7(t,e,...n){if(t=dn(t),vC("collection","path",e),t instanceof Ep){const r=st.fromString(e,...n);return $T(r),new Ls(t,null,r)}{if(!(t instanceof Ht||t instanceof Ls))throw new de(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return $T(r),new Ls(t.firestore,null,r)}}function F$(t,e,...n){if(t=dn(t),arguments.length===1&&(e=Zv.newId()),vC("doc","path",e),t instanceof Ep){const r=st.fromString(e,...n);return UT(r),new Ht(t,null,new _e(r))}{if(!(t instanceof Ht||t instanceof Ls))throw new de(Z.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return UT(r),new Ht(t.firestore,t instanceof Ls?t.converter:null,new _e(r))}}/**
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
 */const kS="AsyncQueue";class RS{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new dP(this,"async_queue_retry"),this._c=()=>{const r=Rg();r&&fe(kS,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Rg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Rg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Vs;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!bl(e))throw e;fe(kS,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Fi("INTERNAL UNHANDLED ERROR: ",bS(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=y_.createAndSchedule(this,e,n,r,a=>this.hc(a));return this.tc.push(i),i}uc(){this.nc&&Se(47125,{Pc:bS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function bS(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class T_ extends Ep{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new RS,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new RS(e),this._firestoreClient=void 0,await e}}}function j$(t,e){const n=typeof t=="object"?t:PA(),r=typeof t=="string"?t:vd,i=$v(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=B2("firestore");a&&O$(i,...a)}return i}function DP(t){if(t._terminated)throw new de(Z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||U$(t),t._firestoreClient}function U$(t){var r,i,a,l;const e=t._freezeSettings(),n=M$(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new k$(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}}(t._componentsProvider))}/**
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
 */class Zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zn(nn.fromBase64String(e))}catch(n){throw new de(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zn(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Zn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(kc(e,Zn._jsonSchema))return Zn.fromBase64String(e.bytes)}}Zn._jsonSchemaVersion="firestore/bytes/1.0",Zn._jsonSchema={type:Dt("string",Zn._jsonSchemaVersion),bytes:Dt("string")};/**
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
 */class NP{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new de(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class VP{constructor(e){this._methodName=e}}/**
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
 */class ri{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new de(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new de(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ri._jsonSchemaVersion}}static fromJSON(e){if(kc(e,ri._jsonSchema))return new ri(e.latitude,e.longitude)}}ri._jsonSchemaVersion="firestore/geoPoint/1.0",ri._jsonSchema={type:Dt("string",ri._jsonSchemaVersion),latitude:Dt("number"),longitude:Dt("number")};/**
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
 */class Ar{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ar._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(kc(e,Ar._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ar(e.vectorValues);throw new de(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ar._jsonSchemaVersion="firestore/vectorValue/1.0",Ar._jsonSchema={type:Dt("string",Ar._jsonSchemaVersion),vectorValues:Dt("object")};/**
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
 */const $$=/^__.*__$/;class z${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jo(e,this.data,this.fieldMask,n,this.fieldTransforms):new bc(e,this.data,n,this.fieldTransforms)}}function LP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{dataSource:t})}}class S_{constructor(e,n,r,i,a,l){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new S_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Pd(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(LP(this.dataSource)&&$$.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class B${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vp(e)}I(e,n,r,i=!1){return new S_({dataSource:e,methodName:n,targetDoc:r,path:en.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function MP(t){const e=t._freezeSettings(),n=vp(t._databaseId);return new B$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function W$(t,e,n,r,i,a={}){const l=t.I(a.merge||a.mergeFields?2:0,e,n,i);jP("Data must be an object, but it was:",l,r);const c=OP(r,l);let h,p;if(a.merge)h=new Sr(l.fieldMask),p=l.fieldTransforms;else if(a.mergeFields){const m=[];for(const y of a.mergeFields){const w=Tp(e,y,n);if(!l.contains(w))throw new de(Z.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);G$(m,w)||m.push(w)}h=new Sr(m),p=l.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,p=l.fieldTransforms;return new z$(new Jn(c),h,p)}function H$(t,e,n,r=!1){return x_(n,t.I(r?4:3,e))}function x_(t,e){if(FP(t=dn(t)))return jP("Unsupported field value:",e,t),OP(t,e);if(t instanceof VP)return function(r,i){if(!LP(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const a=[];let l=0;for(const c of r){let h=x_(c,i.gc(l));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),l++}return{arrayValue:{values:a}}}(t,e)}return function(r,i){if((r=dn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return x5(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=ct.fromDate(r);return{timestampValue:xd(i.serializer,a)}}if(r instanceof ct){const a=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xd(i.serializer,a)}}if(r instanceof ri)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zn)return{bytesValue:tP(i.serializer,r._byteString)};if(r instanceof Ht){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.yc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:l_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ar)return function(l,c){const h=l instanceof Ar?l.toArray():l;return{mapValue:{fields:{[CC]:{stringValue:kC},[_d]:{arrayValue:{values:h.map(m=>{if(typeof m!="number")throw c.yc("VectorValues must only contain numeric values.");return s_(c.serializer,m)})}}}}}}(r,i);if(lP(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${up(r)}`)}(t,e)}function OP(t,e){const n={};return EC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qo(t,(r,i)=>{const a=x_(i,e.dc(r));a!=null&&(n[r]=a)}),{mapValue:{fields:n}}}function FP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof ri||t instanceof Zn||t instanceof Ht||t instanceof VP||t instanceof Ar||lP(t))}function jP(t,e,n){if(!FP(n)||!_C(n)){const r=up(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Tp(t,e,n){if((e=dn(e))instanceof NP)return e._internalPath;if(typeof e=="string")return K$(t,e);throw Pd("Field path arguments must be of type string or ",t,!1,void 0,n)}const q$=new RegExp("[~\\*/\\[\\]]");function K$(t,e,n){if(e.search(q$)>=0)throw Pd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new NP(...e.split("."))._internalPath}catch{throw Pd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Pd(t,e,n,r,i){const a=r&&!r.isEmpty(),l=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(a||l)&&(h+=" (found",a&&(h+=` in field ${r}`),l&&(h+=` in document ${i}`),h+=")"),new de(Z.INVALID_ARGUMENT,c+t+h)}function G$(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Y${convertValue(e,n="none"){switch(zs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Qo(e,(i,a)=>{r[i]=this.convertValue(a,n)}),r}convertVectorValue(e){var r,i,a;const n=(a=(i=(r=e.fields)==null?void 0:r[_d].arrayValue)==null?void 0:i.values)==null?void 0:a.map(l=>xt(l.doubleValue));return new Ar(n)}convertGeoPoint(e){return new ri(xt(e.latitude),xt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=fp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(cc(e));default:return null}}convertTimestamp(e){const n=Us(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=st.fromString(e);Qe(aP(r),9688,{name:e});const i=new hc(r.get(1),r.get(3)),a=new _e(r.popFirst(5));return i.isEqual(n)||Fi(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),a}}/**
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
 */class Q$ extends Y${constructor(e){super(),this.firestore=e}convertBytes(e){return new Zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}const DS="@firebase/firestore",NS="4.14.0";/**
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
 */class UP{constructor(e,n,r,i,a){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Tp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class X$ extends UP{data(){return super.data()}}/**
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
 */function J$(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new de(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class I_{}class Z$ extends I_{}function x7(t,e,...n){let r=[];e instanceof I_&&r.push(e),r=r.concat(n),function(a){const l=a.filter(h=>h instanceof A_).length,c=a.filter(h=>h instanceof Sp).length;if(l>1||l>0&&c>0)throw new de(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Sp extends Z${constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sp(e,n,r)}_apply(e){const n=this._parse(e);return $P(e._query,n),new Nl(e.firestore,e.converter,Py(e._query,n))}_parse(e){const n=MP(e.firestore);return function(a,l,c,h,p,m,y){let w;if(p.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new de(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){LS(y,m);const x=[];for(const P of y)x.push(VS(h,a,P));w={arrayValue:{values:x}}}else w=VS(h,a,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||LS(y,m),w=H$(c,l,y,m==="in"||m==="not-in");return bt.create(p,m,w)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function I7(t,e,n){const r=e,i=Tp("where",t);return Sp._create(i,r,n)}class A_ extends I_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new A_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,a){let l=i;const c=a.getFlattenedFilters();for(const h of c)$P(l,h),l=Py(l,h)}(e._query,n),new Nl(e.firestore,e.converter,Py(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function VS(t,e,n){if(typeof(n=dn(n))=="string"){if(n==="")throw new de(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!FC(e)&&n.indexOf("/")!==-1)throw new de(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(st.fromString(n));if(!_e.isDocumentKey(r))throw new de(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return YT(t,new _e(r))}if(n instanceof Ht)return YT(t,n._key);throw new de(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${up(n)}.`)}function LS(t,e){if(!Array.isArray(t)||t.length===0)throw new de(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $P(t,e){const n=function(i,a){for(const l of i)for(const c of l.getFlattenedFilters())if(a.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new de(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new de(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function e9(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class df{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ol extends UP{constructor(e,n,r,i,a,l){super(e,n,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new jf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Tp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=ol._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}ol._jsonSchemaVersion="firestore/documentSnapshot/1.0",ol._jsonSchema={type:Dt("string",ol._jsonSchemaVersion),bundleSource:Dt("string","DocumentSnapshot"),bundleName:Dt("string"),bundle:Dt("string")};class jf extends ol{data(e={}){return super.data(e)}}class al{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new df(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new jf(this._firestore,this._userDataWriter,r.key,r,new df(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new de(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,a){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(c=>{const h=new jf(i._firestore,i._userDataWriter,c.doc.key,c.doc,new df(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>a||c.type!==3).map(c=>{const h=new jf(i._firestore,i._userDataWriter,c.doc.key,c.doc,new df(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let p=-1,m=-1;return c.type!==0&&(p=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),m=l.indexOf(c.doc.key)),{type:t9(c.type),doc:h,oldIndex:p,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=al._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zv.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(a=>{a._document!==null&&(n.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function t9(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:t})}}/**
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
 */al._jsonSchemaVersion="firestore/querySnapshot/1.0",al._jsonSchema={type:Dt("string",al._jsonSchemaVersion),bundleSource:Dt("string","QuerySnapshot"),bundleName:Dt("string"),bundle:Dt("string")};function A7(t){t=gd(t,Nl);const e=gd(t.firestore,T_),n=DP(e),r=new Q$(e);return J$(t._query),N$(n,t._query).then(i=>new al(e,r,t,i))}function C7(t,e){const n=gd(t.firestore,T_),r=F$(t),i=e9(t.converter,e),a=MP(t.firestore);return n9(n,[W$(a,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Vi.exists(!1))]).then(()=>r)}function n9(t,e){const n=DP(t);return V$(n,e)}(function(e,n=!0){Dj(Cl),pl(new Bo("firestore",(r,{instanceIdentifier:i,options:a})=>{const l=r.getProvider("app").getImmediate(),c=new T_(new Lj(r.getProvider("auth-internal")),new Fj(l,r.getProvider("app-check-internal")),t5(l,i),l);return a={useFetchStreams:n,...a},c._setSettings(a),c},"PUBLIC").setMultipleInstances(!0)),Ds(DS,NS,e),Ds(DS,NS,"esm2020")})();const r9={apiKey:"AIzaSyCDMkgubFQ7JkTR9-TSWy-dXu2R9eFfYEk",authDomain:"kiddoo-0551.firebaseapp.com",projectId:"kiddoo-0551",storageBucket:"kiddoo-0551.firebasestorage.app",messagingSenderId:"325747061629",appId:"1:325747061629:web:98990a5ee753b531abd214"},zP=CA(r9),BP=Rj(zP),P7=j$(zP);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WP=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=t=>{const e=s9(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},HP=V.createContext({});function k7({children:t,size:e,color:n,strokeWidth:r,absoluteStrokeWidth:i,className:a}){const l=V.useMemo(()=>({size:e,color:n,strokeWidth:r,absoluteStrokeWidth:i,className:a}),[e,n,r,i,a]);return V.createElement(HP.Provider,{value:l},t)}const a9=()=>V.useContext(HP),l9=V.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:a,iconNode:l,...c},h)=>{const{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:y=!1,color:w="currentColor",className:T=""}=a9()??{},x=r??y?Number(n??m)*24/Number(e??p):n??m;return V.createElement("svg",{ref:h,...Dg,width:e??p??Dg.width,height:e??p??Dg.height,stroke:t??w,strokeWidth:x,className:WP("lucide",T,i),...!a&&!o9(c)&&{"aria-hidden":"true"},...c},[...l.map(([P,R])=>V.createElement(P,R)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=(t,e)=>{const n=V.forwardRef(({className:r,...i},a)=>V.createElement(l9,{ref:a,iconNode:e,className:WP(`lucide-${i9(MS(t))}`,`lucide-${t}`,r),...i}));return n.displayName=MS(t),n};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=[["path",{d:"M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1",key:"2nz4b"}],["path",{d:"M12 6a2 2 0 0 1 2 2",key:"7y7d82"}],["path",{d:"M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0",key:"vqb5s3"}]],c9=Ft("balloon",u9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],f9=Ft("chevron-down",h9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],p9=Ft("chevron-left",d9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],g9=Ft("chevron-right",m9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],v9=Ft("circle-alert",y9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],w9=Ft("download",_9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],T9=Ft("history",E9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],x9=Ft("loader-circle",S9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],A9=Ft("log-out",I9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],P9=Ft("menu",C9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],R9=Ft("moon",k9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],qP=Ft("share-2",b9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],N9=Ft("sun",D9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],L9=Ft("trophy",V9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],pf=Ft("type",M9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],F9=Ft("user",O9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],U9=Ft("volume-2",j9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],z9=Ft("volume-x",$9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],KP=Ft("x",B9),W9=()=>{const t=_v(),e=Rr(),n=Pi(x=>x.alphabet.isMobileMenuOpen),r=Pi(x=>x.alphabet.isMuted),i=Pi(x=>x.alphabet.theme),a=Pi(x=>x.alphabet.user),[l,c]=V.useState(!1),[h,p]=V.useState(null),m=yA.en,y=V.useRef(null);V.useEffect(()=>{const x=P=>{y.current&&!y.current.contains(P.target)&&(c(!1),p(null))};return l&&document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}},[l]);const w=e.pathname==="/"||!e.pathname;if(!a)return null;const T=a.displayName?a.displayName[0]:a.email?a.email[0]:"U";return F.jsxs(T2,{"data-testid":"layout-navbar",children:[F.jsxs(x2,{children:[F.jsx(P2,{$isVisible:!w,onClick:()=>t(aM()),children:n?F.jsx(KP,{size:24}):F.jsx(P9,{size:24})}),F.jsxs(S2,{as:Qf,to:"/",children:[F.jsx(I2,{children:F.jsx(c9,{size:24,color:"white",strokeWidth:2.5,fill:"rgba(255, 255, 255, 0.2)"})}),F.jsx(A2,{children:m.nav_appName})]})]}),F.jsxs(C2,{children:[F.jsx(aT,{as:Qf,to:"/test_history",title:m.nav_historyTitle,children:F.jsx(T9,{size:20})}),F.jsx(aT,{onClick:async()=>{const x={title:m.nav_appName,text:m.nav_shareText,url:"https://dnshariprasad.github.io/kiddoo/"};try{navigator.share?await navigator.share(x):(await navigator.clipboard.writeText(`${x.text} ${x.url}`),alert(m.cert_copied))}catch(P){console.error("Error sharing:",P)}},title:m.nav_shareTitle,children:F.jsx(qP,{size:20})}),F.jsxs(k2,{ref:y,children:[F.jsxs(N2,{onClick:()=>c(!l),children:[F.jsx(V2,{children:T}),F.jsx(f9,{size:16,color:"white"})]}),l&&F.jsx(R2,{children:h?F.jsxs(F.Fragment,{children:[F.jsxs(D2,{onClick:()=>p(null),children:[F.jsx(p9,{size:20}),F.jsx("span",{children:m.com_back})]}),F.jsxs(ws,{onClick:()=>{t(pg("small")),c(!1),p(null)},children:[F.jsx(pf,{size:16}),F.jsx("span",{children:m.nav_small})]}),F.jsxs(ws,{onClick:()=>{t(pg("medium")),c(!1),p(null)},children:[F.jsx(pf,{size:20}),F.jsx("span",{children:m.nav_medium})]}),F.jsxs(ws,{onClick:()=>{t(pg("large")),c(!1),p(null)},children:[F.jsx(pf,{size:24}),F.jsx("span",{children:m.nav_large})]})]}):F.jsxs(F.Fragment,{children:[F.jsxs(ws,{onClick:()=>{t(lM()),c(!1)},children:[r?F.jsx(z9,{size:20}):F.jsx(U9,{size:20}),F.jsx("span",{children:r?m.nav_unmuteSound:m.nav_muteSound})]}),F.jsxs(ws,{onClick:()=>{t(uM()),c(!1)},children:[i==="light"?F.jsx(R9,{size:20}):F.jsx(N9,{size:20}),F.jsx("span",{children:i==="light"?m.nav_darkMode:m.nav_lightMode})]}),F.jsxs(ws,{onClick:()=>p("fontSize"),children:[F.jsx(pf,{size:20}),F.jsx("span",{children:m.nav_fontSize}),F.jsx(b2,{children:F.jsx(g9,{size:18})})]}),F.jsxs(ws,{onClick:async()=>{try{await w4(BP),t(hM()),c(!1)}catch(x){console.error("Logout error:",x)}},children:[F.jsx(A9,{size:20}),F.jsx("span",{children:m.nav_logout})]})]})})]})]})]})},C_=V.createContext({});function P_(t){const e=V.useRef(null);return e.current===null&&(e.current=t()),e.current}const H9=typeof window<"u",GP=H9?V.useLayoutEffect:V.useEffect,xp=V.createContext(null);function k_(t,e){t.indexOf(e)===-1&&t.push(e)}function kd(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}function R7([...t],e,n){const r=e<0?t.length+e:e;if(r>=0&&r<t.length){const i=n<0?t.length+n:n,[a]=t.splice(e,1);t.splice(i,0,a)}return t}const oi=(t,e,n)=>n>e?e:n<t?t:n;let Rd=()=>{};const Hs={},YP=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function QP(t){return typeof t=="object"&&t!==null}const XP=t=>/^0[^.\s]+$/u.test(t);function JP(t){let e;return()=>(e===void 0&&(e=t()),e)}const nr=t=>t,q9=(t,e)=>n=>e(t(n)),Lc=(...t)=>t.reduce(q9),mc=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r};class R_{constructor(){this.subscriptions=[]}add(e){return k_(this.subscriptions,e),()=>kd(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let a=0;a<i;a++){const l=this.subscriptions[a];l&&l(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const $n=t=>t*1e3,tr=t=>t/1e3;function ZP(t,e){return e?t*(1e3/e):0}const ek=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,K9=1e-7,G9=12;function Y9(t,e,n,r,i){let a,l,c=0;do l=e+(n-e)/2,a=ek(l,r,i)-t,a>0?n=l:e=l;while(Math.abs(a)>K9&&++c<G9);return l}function Mc(t,e,n,r){if(t===e&&n===r)return nr;const i=a=>Y9(a,0,1,t,n);return a=>a===0||a===1?a:ek(i(a),e,r)}const tk=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,nk=t=>e=>1-t(1-e),rk=Mc(.33,1.53,.69,.99),b_=nk(rk),ik=tk(b_),sk=t=>t>=1?1:(t*=2)<1?.5*b_(t):.5*(2-Math.pow(2,-10*(t-1))),D_=t=>1-Math.sin(Math.acos(t)),ok=nk(D_),ak=tk(D_),Q9=Mc(.42,0,1,1),X9=Mc(0,0,.58,1),lk=Mc(.42,0,.58,1),J9=t=>Array.isArray(t)&&typeof t[0]!="number",uk=t=>Array.isArray(t)&&typeof t[0]=="number",OS={linear:nr,easeIn:Q9,easeInOut:lk,easeOut:X9,circIn:D_,circInOut:ak,circOut:ok,backIn:b_,backInOut:ik,backOut:rk,anticipate:sk},Z9=t=>typeof t=="string",FS=t=>{if(uk(t)){Rd(t.length===4);const[e,n,r,i]=t;return Mc(e,n,r,i)}else if(Z9(t))return Rd(OS[t]!==void 0),OS[t];return t},mf=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function e6(t,e){let n=new Set,r=new Set,i=!1,a=!1;const l=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function h(m){l.has(m)&&(p.schedule(m),t()),m(c)}const p={schedule:(m,y=!1,w=!1)=>{const x=w&&i?n:r;return y&&l.add(m),x.add(m),m},cancel:m=>{r.delete(m),l.delete(m)},process:m=>{if(c=m,i){a=!0;return}i=!0;const y=n;n=r,r=y,n.forEach(h),n.clear(),i=!1,a&&(a=!1,p.process(m))}};return p}const t6=40;function ck(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,l=mf.reduce(($,U)=>($[U]=e6(a),$),{}),{setup:c,read:h,resolveKeyframes:p,preUpdate:m,update:y,preRender:w,render:T,postRender:x}=l,P=()=>{const $=Hs.useManualTiming,U=$?i.timestamp:performance.now();n=!1,$||(i.delta=r?1e3/60:Math.max(Math.min(U-i.timestamp,t6),1)),i.timestamp=U,i.isProcessing=!0,c.process(i),h.process(i),p.process(i),m.process(i),y.process(i),w.process(i),T.process(i),x.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(P))},R=()=>{n=!0,r=!0,i.isProcessing||t(P)};return{schedule:mf.reduce(($,U)=>{const H=l[U];return $[U]=(X,C=!1,I=!1)=>(n||R(),H.schedule(X,C,I)),$},{}),cancel:$=>{for(let U=0;U<mf.length;U++)l[mf[U]].cancel($)},state:i,steps:l}}const{schedule:rt,cancel:qs,state:Jt,steps:Ng}=ck(typeof requestAnimationFrame<"u"?requestAnimationFrame:nr,!0);let Uf;function n6(){Uf=void 0}const yn={now:()=>(Uf===void 0&&yn.set(Jt.isProcessing||Hs.useManualTiming?Jt.timestamp:performance.now()),Uf),set:t=>{Uf=t,queueMicrotask(n6)}},hk=t=>e=>typeof e=="string"&&e.startsWith(t),fk=hk("--"),r6=hk("var(--"),N_=t=>r6(t)?i6.test(t.split("/*")[0].trim()):!1,i6=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function jS(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Vl={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},gc={...Vl,transform:t=>oi(0,1,t)},gf={...Vl,default:1},Xu=t=>Math.round(t*1e5)/1e5,V_=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function s6(t){return t==null}const o6=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,L_=(t,e)=>n=>!!(typeof n=="string"&&o6.test(n)&&n.startsWith(t)||e&&!s6(n)&&Object.prototype.hasOwnProperty.call(n,e)),dk=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,a,l,c]=r.match(V_);return{[t]:parseFloat(i),[e]:parseFloat(a),[n]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},a6=t=>oi(0,255,t),Vg={...Vl,transform:t=>Math.round(a6(t))},No={test:L_("rgb","red"),parse:dk("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Vg.transform(t)+", "+Vg.transform(e)+", "+Vg.transform(n)+", "+Xu(gc.transform(r))+")"};function l6(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const jy={test:L_("#"),parse:l6,transform:No.transform},Oc=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Es=Oc("deg"),ii=Oc("%"),ge=Oc("px"),u6=Oc("vh"),c6=Oc("vw"),US={...ii,parse:t=>ii.parse(t)/100,transform:t=>ii.transform(t*100)},Qa={test:L_("hsl","hue"),parse:dk("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+ii.transform(Xu(e))+", "+ii.transform(Xu(n))+", "+Xu(gc.transform(r))+")"},kt={test:t=>No.test(t)||jy.test(t)||Qa.test(t),parse:t=>No.test(t)?No.parse(t):Qa.test(t)?Qa.parse(t):jy.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?No.transform(t):Qa.transform(t),getAnimatableNone:t=>{const e=kt.parse(t);return e.alpha=0,kt.transform(e)}},h6=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function f6(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(V_))==null?void 0:e.length)||0)+(((n=t.match(h6))==null?void 0:n.length)||0)>0}const pk="number",mk="color",d6="var",p6="var(",$S="${}",m6=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function El(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const c=e.replace(m6,h=>(kt.test(h)?(r.color.push(a),i.push(mk),n.push(kt.parse(h))):h.startsWith(p6)?(r.var.push(a),i.push(d6),n.push(h)):(r.number.push(a),i.push(pk),n.push(parseFloat(h))),++a,$S)).split($S);return{values:n,split:c,indexes:r,types:i}}function g6(t){return El(t).values}function gk({split:t,types:e}){const n=t.length;return r=>{let i="";for(let a=0;a<n;a++)if(i+=t[a],r[a]!==void 0){const l=e[a];l===pk?i+=Xu(r[a]):l===mk?i+=kt.transform(r[a]):i+=r[a]}return i}}function y6(t){return gk(El(t))}const v6=t=>typeof t=="number"?0:kt.test(t)?kt.getAnimatableNone(t):t,_6=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:v6(t);function w6(t){const e=El(t);return gk(e)(e.values.map((r,i)=>_6(r,e.split[i])))}const Cr={test:f6,parse:g6,createTransformer:y6,getAnimatableNone:w6};function Lg(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function E6({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,a=0,l=0;if(!e)i=a=l=n;else{const c=n<.5?n*(1+e):n+e-n*e,h=2*n-c;i=Lg(h,c,t+1/3),a=Lg(h,c,t),l=Lg(h,c,t-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(l*255),alpha:r}}function bd(t,e){return n=>n>0?e:t}const ht=(t,e,n)=>t+(e-t)*n,Mg=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},T6=[jy,No,Qa],S6=t=>T6.find(e=>e.test(t));function zS(t){const e=S6(t);if(!e)return!1;let n=e.parse(t);return e===Qa&&(n=E6(n)),n}const BS=(t,e)=>{const n=zS(t),r=zS(e);if(!n||!r)return bd(t,e);const i={...n};return a=>(i.red=Mg(n.red,r.red,a),i.green=Mg(n.green,r.green,a),i.blue=Mg(n.blue,r.blue,a),i.alpha=ht(n.alpha,r.alpha,a),No.transform(i))},Uy=new Set(["none","hidden"]);function x6(t,e){return Uy.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function I6(t,e){return n=>ht(t,e,n)}function M_(t){return typeof t=="number"?I6:typeof t=="string"?N_(t)?bd:kt.test(t)?BS:P6:Array.isArray(t)?yk:typeof t=="object"?kt.test(t)?BS:A6:bd}function yk(t,e){const n=[...t],r=n.length,i=t.map((a,l)=>M_(a)(a,e[l]));return a=>{for(let l=0;l<r;l++)n[l]=i[l](a);return n}}function A6(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=M_(t[i])(t[i],e[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function C6(t,e){const n=[],r={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const a=e.types[i],l=t.indexes[a][r[a]],c=t.values[l]??0;n[i]=c,r[a]++}return n}const P6=(t,e)=>{const n=Cr.createTransformer(e),r=El(t),i=El(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Uy.has(t)&&!i.values.length||Uy.has(e)&&!r.values.length?x6(t,e):Lc(yk(C6(r,i),i.values),n):bd(t,e)};function vk(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ht(t,e,n):M_(t)(t,e)}const k6=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>rt.update(e,n),stop:()=>qs(e),now:()=>Jt.isProcessing?Jt.timestamp:yn.now()}},_k=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let a=0;a<i;a++)r+=Math.round(t(a/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Dd=2e4;function O_(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<Dd;)e+=n,r=t.next(e);return e>=Dd?1/0:e}function R6(t,e=100,n){const r=n({...t,keyframes:[0,e]}),i=Math.min(O_(r),Dd);return{type:"keyframes",ease:a=>r.next(i*a).value/e,duration:tr(i)}}const wt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function $y(t,e){return t*Math.sqrt(1-e*e)}const b6=12;function D6(t,e,n){let r=n;for(let i=1;i<b6;i++)r=r-t(r)/e(r);return r}const WS=.001;function N6({duration:t=wt.duration,bounce:e=wt.bounce,velocity:n=wt.velocity,mass:r=wt.mass}){let i,a,l=1-e;l=oi(wt.minDamping,wt.maxDamping,l),t=oi(wt.minDuration,wt.maxDuration,tr(t)),l<1?(i=p=>{const m=p*l,y=m*t,w=m-n,T=$y(p,l),x=Math.exp(-y);return WS-w/T*x},a=p=>{const y=p*l*t,w=y*n+n,T=Math.pow(l,2)*Math.pow(p,2)*t,x=Math.exp(-y),P=$y(Math.pow(p,2),l);return(-i(p)+WS>0?-1:1)*((w-T)*x)/P}):(i=p=>{const m=Math.exp(-p*t),y=(p-n)*t+1;return-.001+m*y},a=p=>{const m=Math.exp(-p*t),y=(n-p)*(t*t);return m*y});const c=5/t,h=D6(i,a,c);if(t=$n(t),isNaN(h))return{stiffness:wt.stiffness,damping:wt.damping,duration:t};{const p=Math.pow(h,2)*r;return{stiffness:p,damping:l*2*Math.sqrt(r*p),duration:t}}}const V6=["duration","bounce"],L6=["stiffness","damping","mass"];function HS(t,e){return e.some(n=>t[n]!==void 0)}function M6(t){let e={velocity:wt.velocity,stiffness:wt.stiffness,damping:wt.damping,mass:wt.mass,isResolvedFromDuration:!1,...t};if(!HS(t,L6)&&HS(t,V6))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*oi(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:wt.mass,stiffness:i,damping:a}}else{const n=N6({...t,velocity:0});e={...e,...n,mass:wt.mass},e.isResolvedFromDuration=!0}return e}function Nd(t=wt.visualDuration,e=wt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],l=n.keyframes[n.keyframes.length-1],c={done:!1,value:a},{stiffness:h,damping:p,mass:m,duration:y,velocity:w,isResolvedFromDuration:T}=M6({...n,velocity:-tr(n.velocity||0)}),x=w||0,P=p/(2*Math.sqrt(h*m)),R=l-a,b=tr(Math.sqrt(h/m)),O=Math.abs(R)<5;r||(r=O?wt.restSpeed.granular:wt.restSpeed.default),i||(i=O?wt.restDelta.granular:wt.restDelta.default);let $,U,H,X,C,I;if(P<1)H=$y(b,P),X=(x+P*b*R)/H,$=D=>{const M=Math.exp(-P*b*D);return l-M*(X*Math.sin(H*D)+R*Math.cos(H*D))},C=P*b*X+R*H,I=P*b*R-X*H,U=D=>Math.exp(-P*b*D)*(C*Math.sin(H*D)+I*Math.cos(H*D));else if(P===1){$=M=>l-Math.exp(-b*M)*(R+(x+b*R)*M);const D=x+b*R;U=M=>Math.exp(-b*M)*(b*D*M-x)}else{const D=b*Math.sqrt(P*P-1);$=Re=>{const Ge=Math.exp(-P*b*Re),Xe=Math.min(D*Re,300);return l-Ge*((x+P*b*R)*Math.sinh(Xe)+D*R*Math.cosh(Xe))/D};const M=(x+P*b*R)/D,B=P*b*M-R*D,N=P*b*R-M*D;U=Re=>{const Ge=Math.exp(-P*b*Re),Xe=Math.min(D*Re,300);return Ge*(B*Math.sinh(Xe)+N*Math.cosh(Xe))}}const k={calculatedDuration:T&&y||null,velocity:D=>$n(U(D)),next:D=>{if(!T&&P<1){const B=Math.exp(-P*b*D),N=Math.sin(H*D),Re=Math.cos(H*D),Ge=l-B*(X*N+R*Re),Xe=$n(B*(C*N+I*Re));return c.done=Math.abs(Xe)<=r&&Math.abs(l-Ge)<=i,c.value=c.done?l:Ge,c}const M=$(D);if(T)c.done=D>=y;else{const B=$n(U(D));c.done=Math.abs(B)<=r&&Math.abs(l-M)<=i}return c.value=c.done?l:M,c},toString:()=>{const D=Math.min(O_(k),Dd),M=_k(B=>k.next(D*B).value,D,30);return D+"ms "+M},toTransition:()=>{}};return k}Nd.applyToOptions=t=>{const e=R6(t,100,Nd);return t.ease=e.ease,t.duration=$n(e.duration),t.type="keyframes",t};const O6=5;function wk(t,e,n){const r=Math.max(e-O6,0);return ZP(n-t(r),e-r)}function zy({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:l,min:c,max:h,restDelta:p=.5,restSpeed:m}){const y=t[0],w={done:!1,value:y},T=I=>c!==void 0&&I<c||h!==void 0&&I>h,x=I=>c===void 0?h:h===void 0||Math.abs(c-I)<Math.abs(h-I)?c:h;let P=n*e;const R=y+P,b=l===void 0?R:l(R);b!==R&&(P=b-y);const O=I=>-P*Math.exp(-I/r),$=I=>b+O(I),U=I=>{const k=O(I),D=$(I);w.done=Math.abs(k)<=p,w.value=w.done?b:D};let H,X;const C=I=>{T(w.value)&&(H=I,X=Nd({keyframes:[w.value,x(w.value)],velocity:wk($,I,w.value),damping:i,stiffness:a,restDelta:p,restSpeed:m}))};return C(0),{calculatedDuration:null,next:I=>{let k=!1;return!X&&H===void 0&&(k=!0,U(I),C(I)),H!==void 0&&I>=H?X.next(I-H):(!k&&U(I),w)}}}function F6(t,e,n){const r=[],i=n||Hs.mix||vk,a=t.length-1;for(let l=0;l<a;l++){let c=i(t[l],t[l+1]);if(e){const h=Array.isArray(e)?e[l]||nr:e;c=Lc(h,c)}r.push(c)}return r}function j6(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const a=t.length;if(Rd(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const l=t[0]===t[1];t[0]>t[a-1]&&(t=[...t].reverse(),e=[...e].reverse());const c=F6(e,r,i),h=c.length,p=m=>{if(l&&m<t[0])return e[0];let y=0;if(h>1)for(;y<t.length-2&&!(m<t[y+1]);y++);const w=mc(t[y],t[y+1],m);return c[y](w)};return n?m=>p(oi(t[0],t[a-1],m)):p}function U6(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=mc(0,e,r);t.push(ht(n,1,i))}}function $6(t){const e=[0];return U6(e,t.length-1),e}function z6(t,e){return t.map(n=>n*e)}function B6(t,e){return t.map(()=>e||lk).splice(0,t.length-1)}function Ju({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=J9(r)?r.map(FS):FS(r),a={done:!1,value:e[0]},l=z6(n&&n.length===e.length?n:$6(e),t),c=j6(l,e,{ease:Array.isArray(i)?i:B6(e,i)});return{calculatedDuration:t,next:h=>(a.value=c(h),a.done=h>=t,a)}}const W6=t=>t!==null;function Ip(t,{repeat:e,repeatType:n="loop"},r,i=1){const a=t.filter(W6),c=i<0||e&&n!=="loop"&&e%2===1?0:a.length-1;return!c||r===void 0?a[c]:r}const H6={decay:zy,inertia:zy,tween:Ju,keyframes:Ju,spring:Nd};function Ek(t){typeof t.type=="string"&&(t.type=H6[t.type])}class F_{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const q6=t=>t/100;class Vd extends F_{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==yn.now()&&this.tick(yn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Ek(e);const{type:n=Ju,repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:l=0}=e;let{keyframes:c}=e;const h=n||Ju;h!==Ju&&typeof c[0]!="number"&&(this.mixKeyframes=Lc(q6,vk(c[0],c[1])),c=[0,100]);const p=h({...e,keyframes:c});a==="mirror"&&(this.mirroredGenerator=h({...e,keyframes:[...c].reverse(),velocity:-l})),p.calculatedDuration===null&&(p.calculatedDuration=O_(p));const{calculatedDuration:m}=p;this.calculatedDuration=m,this.resolvedDuration=m+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=p}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:r,totalDuration:i,mixKeyframes:a,mirroredGenerator:l,resolvedDuration:c,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:p=0,keyframes:m,repeat:y,repeatType:w,repeatDelay:T,type:x,onUpdate:P,finalKeyframe:R}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const b=this.currentTime-p*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?b<0:b>i;this.currentTime=Math.max(b,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let $=this.currentTime,U=r;if(y){const I=Math.min(this.currentTime,i)/c;let k=Math.floor(I),D=I%1;!D&&I>=1&&(D=1),D===1&&k--,k=Math.min(k,y+1),!!(k%2)&&(w==="reverse"?(D=1-D,T&&(D-=T/c)):w==="mirror"&&(U=l)),$=oi(0,1,D)*c}let H;O?(this.delayState.value=m[0],H=this.delayState):H=U.next($),a&&!O&&(H.value=a(H.value));let{done:X}=H;!O&&h!==null&&(X=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&X);return C&&x!==zy&&(H.value=Ip(m,this.options,R,this.speed)),P&&P(H.value),C&&this.finish(),H}then(e,n){return this.finished.then(e,n)}get duration(){return tr(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+tr(e)}get time(){return tr(this.currentTime)}set time(e){e=$n(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return wk(r=>this.generator.next(r).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(yn.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=tr(this.currentTime))}play(){var i,a;if(this.isStopped)return;const{driver:e=k6,startTime:n}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),(a=(i=this.options).onPlay)==null||a.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(yn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function K6(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const Vo=t=>t*180/Math.PI,By=t=>{const e=Vo(Math.atan2(t[1],t[0]));return Wy(e)},G6={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:By,rotateZ:By,skewX:t=>Vo(Math.atan(t[1])),skewY:t=>Vo(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Wy=t=>(t=t%360,t<0&&(t+=360),t),qS=By,KS=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),GS=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),Y6={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:KS,scaleY:GS,scale:t=>(KS(t)+GS(t))/2,rotateX:t=>Wy(Vo(Math.atan2(t[6],t[5]))),rotateY:t=>Wy(Vo(Math.atan2(-t[2],t[0]))),rotateZ:qS,rotate:qS,skewX:t=>Vo(Math.atan(t[4])),skewY:t=>Vo(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Hy(t){return t.includes("scale")?1:0}function qy(t,e){if(!t||t==="none")return Hy(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Y6,i=n;else{const c=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=G6,i=c}if(!i)return Hy(e);const a=r[e],l=i[1].split(",").map(X6);return typeof a=="function"?a(l):l[a]}const Q6=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return qy(n,e)};function X6(t){return parseFloat(t.trim())}const Ll=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ml=new Set(Ll),YS=t=>t===Vl||t===ge,J6=new Set(["x","y","z"]),Z6=Ll.filter(t=>!J6.has(t));function ez(t){const e=[];return Z6.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Ps={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:r})=>{const i=t.max-t.min;return r==="border-box"?i:i-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:r})=>{const i=t.max-t.min;return r==="border-box"?i:i-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>qy(e,"x"),y:(t,{transform:e})=>qy(e,"y")};Ps.translateX=Ps.x;Ps.translateY=Ps.y;const Mo=new Set;let Ky=!1,Gy=!1,Yy=!1;function Tk(){if(Gy){const t=Array.from(Mo).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=ez(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,l])=>{var c;(c=r.getValue(a))==null||c.set(l)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Gy=!1,Ky=!1,Mo.forEach(t=>t.complete(Yy)),Mo.clear()}function Sk(){Mo.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Gy=!0)})}function tz(){Yy=!0,Sk(),Tk(),Yy=!1}class j_{constructor(e,n,r,i,a,l=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=l}scheduleResolve(){this.state="scheduled",this.isAsync?(Mo.add(this),Ky||(Ky=!0,rt.read(Sk),rt.resolveKeyframes(Tk))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;if(e[0]===null){const a=i==null?void 0:i.get(),l=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&n){const c=r.readValue(n,l);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=l),i&&a===void 0&&i.set(e[0])}K6(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Mo.delete(this)}cancel(){this.state==="scheduled"&&(Mo.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const nz=t=>t.startsWith("--");function xk(t,e,n){nz(e)?t.style.setProperty(e,n):t.style[e]=n}const rz={};function Ik(t,e){const n=JP(t);return()=>rz[e]??n()}const iz=Ik(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ak=Ik(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),zu=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,QS={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zu([0,.65,.55,1]),circOut:zu([.55,0,1,.45]),backIn:zu([.31,.01,.66,-.59]),backOut:zu([.33,1.53,.69,.99])};function Ck(t,e){if(t)return typeof t=="function"?Ak()?_k(t,e):"ease-out":uk(t)?zu(t):Array.isArray(t)?t.map(n=>Ck(n,e)||QS.easeOut):QS[t]}function sz(t,e,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:l="loop",ease:c="easeOut",times:h}={},p=void 0){const m={[e]:n};h&&(m.offset=h);const y=Ck(c,i);Array.isArray(y)&&(m.easing=y);const w={delay:r,duration:i,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:a+1,direction:l==="reverse"?"alternate":"normal"};return p&&(w.pseudoElement=p),t.animate(m,w)}function Pk(t){return typeof t=="function"&&"applyToOptions"in t}function oz({type:t,...e}){return Pk(t)&&Ak()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class kk extends F_{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:r,keyframes:i,pseudoElement:a,allowFlatten:l=!1,finalKeyframe:c,onComplete:h}=e;this.isPseudoElement=!!a,this.allowFlatten=l,this.options=e,Rd(typeof e.type!="string");const p=oz(e);this.animation=sz(n,r,i,p,a),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const m=Ip(i,this.options,c,this.speed);this.updateMotionValue&&this.updateMotionValue(m),xk(n,r,m),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const e=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return tr(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+tr(e)}get time(){return tr(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=$n(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:r,observe:i}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&iz()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),nr):i(this)}}const Rk={anticipate:sk,backInOut:ik,circInOut:ak};function az(t){return t in Rk}function lz(t){typeof t.ease=="string"&&az(t.ease)&&(t.ease=Rk[t.ease])}const Og=10;class uz extends kk{constructor(e){lz(e),Ek(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:r,onComplete:i,element:a,...l}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const c=new Vd({...l,autoplay:!1}),h=Math.max(Og,yn.now()-this.startTime),p=oi(0,Og,h-Og),m=c.sample(h).value,{name:y}=this.options;a&&y&&xk(a,y,m),n.setWithVelocity(c.sample(Math.max(0,h-p)).value,m,p),c.stop()}}const XS=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Cr.test(t)||t==="0")&&!t.startsWith("url("));function cz(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function hz(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const a=t[t.length-1],l=XS(i,e),c=XS(a,e);return!l||!c?!1:cz(t)||(n==="spring"||Pk(n))&&r}function Qy(t){t.duration=0,t.type="keyframes"}const bk=new Set(["opacity","clipPath","filter","transform"]),fz=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function dz(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&fz.test(t[e]))return!0;return!1}const pz=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),mz=JP(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function gz(t){var y;const{motionValue:e,name:n,repeatDelay:r,repeatType:i,damping:a,type:l,keyframes:c}=t;if(!(((y=e==null?void 0:e.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=e.owner.getProps();return mz()&&n&&(bk.has(n)||pz.has(n)&&dz(c))&&(n!=="transform"||!m)&&!p&&!r&&i!=="mirror"&&a!==0&&l!=="inertia"}const yz=40;class vz extends F_{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:l="loop",keyframes:c,name:h,motionValue:p,element:m,...y}){var x;super(),this.stop=()=>{var P,R;this._animation&&(this._animation.stop(),(P=this.stopTimeline)==null||P.call(this)),(R=this.keyframeResolver)==null||R.cancel()},this.createdAt=yn.now();const w={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:l,name:h,motionValue:p,element:m,...y},T=(m==null?void 0:m.KeyframeResolver)||j_;this.keyframeResolver=new T(c,(P,R,b)=>this.onKeyframesResolved(P,R,w,!b),h,p,m),(x=this.keyframeResolver)==null||x.scheduleResolve()}onKeyframesResolved(e,n,r,i){var b,O;this.keyframeResolver=void 0;const{name:a,type:l,velocity:c,delay:h,isHandoff:p,onUpdate:m}=r;this.resolvedAt=yn.now();let y=!0;hz(e,a,l,c)||(y=!1,(Hs.instantAnimations||!h)&&(m==null||m(Ip(e,r,n))),e[0]=e[e.length-1],Qy(r),r.repeat=0);const T={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>yz?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:e},x=y&&!p&&gz(T),P=(O=(b=T.motionValue)==null?void 0:b.owner)==null?void 0:O.current;let R;if(x)try{R=new uz({...T,element:P})}catch{R=new Vd(T)}else R=new Vd(T);R.finished.then(()=>{this.notifyFinished()}).catch(nr),this.pendingTimeline&&(this.stopTimeline=R.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=R}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),tz()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function Dk(t,e,n,r=0,i=1){const a=Array.from(t).sort((p,m)=>p.sortNodePosition(m)).indexOf(e),l=t.size,c=(l-1)*r;return typeof n=="function"?n(a,l):i===1?a*r:c-a*r}const _z=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wz(t){const e=_z.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function Nk(t,e,n=1){const[r,i]=wz(t);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const l=a.trim();return YP(l)?parseFloat(l):l}return N_(i)?Nk(i,e,n+1):i}const Ez={type:"spring",stiffness:500,damping:25,restSpeed:10},Tz=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Sz={type:"keyframes",duration:.8},xz={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Iz=(t,{keyframes:e})=>e.length>2?Sz:Ml.has(t)?t.startsWith("scale")?Tz(e[1]):Ez:xz;function Vk(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...r}=t;return{...e,...r}}return t}function U_(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?Vk(n,t):n}const Az=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Cz(t){for(const e in t)if(!Az.has(e))return!0;return!1}const $_=(t,e,n,r={},i,a)=>l=>{const c=U_(r,t)||{},h=c.delay||r.delay||0;let{elapsed:p=0}=r;p=p-$n(h);const m={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-p,onUpdate:w=>{e.set(w),c.onUpdate&&c.onUpdate(w)},onComplete:()=>{l(),c.onComplete&&c.onComplete()},name:t,motionValue:e,element:a?void 0:i};Cz(c)||Object.assign(m,Iz(t,m)),m.duration&&(m.duration=$n(m.duration)),m.repeatDelay&&(m.repeatDelay=$n(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let y=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Qy(m),m.delay===0&&(y=!0)),(Hs.instantAnimations||Hs.skipAnimations||i!=null&&i.shouldSkipAnimations)&&(y=!0,Qy(m),m.delay=0),m.allowFlatten=!c.type&&!c.ease,y&&!a&&e.get()!==void 0){const w=Ip(m.keyframes,c);if(w!==void 0){rt.update(()=>{m.onUpdate(w),m.onComplete()});return}}return c.isSync?new Vd(m):new vz(m)};function JS(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function z_(t,e,n,r){if(typeof e=="function"){const[i,a]=JS(r);e=e(n!==void 0?n:t.custom,i,a)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,a]=JS(r);e=e(n!==void 0?n:t.custom,i,a)}return e}function Oo(t,e,n){const r=t.getProps();return z_(r,e,n!==void 0?n:r.custom,t)}const Lk=new Set(["width","height","top","left","right","bottom",...Ll]),ZS=30,Pz=t=>!isNaN(parseFloat(t)),ex={current:void 0};class kz{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const i=yn.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=yn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Pz(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new R_);const r=this.events[e].add(n);return e==="change"?()=>{r(),rt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return ex.current&&ex.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=yn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ZS)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ZS);return ZP(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Tl(t,e){return new kz(t,e)}const Xy=t=>Array.isArray(t);function Rz(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Tl(n))}function bz(t){return Xy(t)?t[t.length-1]||0:t}function Dz(t,e){const n=Oo(t,e);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const l in a){const c=bz(a[l]);Rz(t,l,c)}}const tn=t=>!!(t&&t.getVelocity);function Nz(t){return!!(tn(t)&&t.add)}function Jy(t,e){const n=t.getValue("willChange");if(Nz(n))return n.add(e);if(!n&&Hs.WillChange){const r=new Hs.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function B_(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const Vz="framerAppearId",Mk="data-"+B_(Vz);function Ok(t){return t.props[Mk]}function Lz({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function Fk(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:l,...c}=e;const h=t.getDefaultTransition();a=a?Vk(a,h):h;const p=a==null?void 0:a.reduceMotion;r&&(a=r);const m=[],y=i&&t.animationState&&t.animationState.getState()[i];for(const w in c){const T=t.getValue(w,t.latestValues[w]??null),x=c[w];if(x===void 0||y&&Lz(y,w))continue;const P={delay:n,...U_(a||{},w)},R=T.get();if(R!==void 0&&!T.isAnimating()&&!Array.isArray(x)&&x===R&&!P.velocity){rt.update(()=>T.set(x));continue}let b=!1;if(window.MotionHandoffAnimation){const U=Ok(t);if(U){const H=window.MotionHandoffAnimation(U,w,rt);H!==null&&(P.startTime=H,b=!0)}}Jy(t,w);const O=p??t.shouldReduceMotion;T.start($_(w,T,x,O&&Lk.has(w)?{type:!1}:P,t,b));const $=T.animation;$&&m.push($)}if(l){const w=()=>rt.update(()=>{l&&Dz(t,l)});m.length?Promise.all(m).then(w):w()}return m}function Zy(t,e,n={}){var h;const r=Oo(t,e,n.type==="exit"?(h=t.presenceContext)==null?void 0:h.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(Fk(t,r,n)):()=>Promise.resolve(),l=t.variantChildren&&t.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:w}=i;return Mz(t,e,p,m,y,w,n)}:()=>Promise.resolve(),{when:c}=i;if(c){const[p,m]=c==="beforeChildren"?[a,l]:[l,a];return p().then(()=>m())}else return Promise.all([a(),l(n.delay)])}function Mz(t,e,n=0,r=0,i=0,a=1,l){const c=[];for(const h of t.variantChildren)h.notify("AnimationStart",e),c.push(Zy(h,e,{...l,delay:n+(typeof r=="function"?0:r)+Dk(t.variantChildren,h,r,i,a)}).then(()=>h.notify("AnimationComplete",e)));return Promise.all(c)}function Oz(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(a=>Zy(t,a,n));r=Promise.all(i)}else if(typeof e=="string")r=Zy(t,e,n);else{const i=typeof e=="function"?Oo(t,e,n.custom):e;r=Promise.all(Fk(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const Fz={test:t=>t==="auto",parse:t=>t},jk=t=>e=>e.test(t),Uk=[Vl,ge,ii,Es,c6,u6,Fz],tx=t=>Uk.find(jk(t));function jz(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||XP(t):!0}const Uz=new Set(["brightness","contrast","saturate","opacity"]);function $z(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(V_)||[];if(!r)return t;const i=n.replace(r,"");let a=Uz.has(e)?1:0;return r!==n&&(a*=100),e+"("+a+i+")"}const zz=/\b([a-z-]*)\(.*?\)/gu,ev={...Cr,getAnimatableNone:t=>{const e=t.match(zz);return e?e.map($z).join(" "):t}},tv={...Cr,getAnimatableNone:t=>{const e=Cr.parse(t);return Cr.createTransformer(t)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},nx={...Vl,transform:Math.round},Bz={rotate:Es,rotateX:Es,rotateY:Es,rotateZ:Es,scale:gf,scaleX:gf,scaleY:gf,scaleZ:gf,skew:Es,skewX:Es,skewY:Es,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:gc,originX:US,originY:US,originZ:ge},W_={borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,top:ge,right:ge,bottom:ge,left:ge,inset:ge,insetBlock:ge,insetBlockStart:ge,insetBlockEnd:ge,insetInline:ge,insetInlineStart:ge,insetInlineEnd:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,paddingBlock:ge,paddingBlockStart:ge,paddingBlockEnd:ge,paddingInline:ge,paddingInlineStart:ge,paddingInlineEnd:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,marginBlock:ge,marginBlockStart:ge,marginBlockEnd:ge,marginInline:ge,marginInlineStart:ge,marginInlineEnd:ge,fontSize:ge,backgroundPositionX:ge,backgroundPositionY:ge,...Bz,zIndex:nx,fillOpacity:gc,strokeOpacity:gc,numOctaves:nx},Wz={...W_,color:kt,backgroundColor:kt,outlineColor:kt,fill:kt,stroke:kt,borderColor:kt,borderTopColor:kt,borderRightColor:kt,borderBottomColor:kt,borderLeftColor:kt,filter:ev,WebkitFilter:ev,mask:tv,WebkitMask:tv},$k=t=>Wz[t],Hz=new Set([ev,tv]);function zk(t,e){let n=$k(t);return Hz.has(n)||(n=Cr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const qz=new Set(["auto","none","0"]);function Kz(t,e,n){let r=0,i;for(;r<t.length&&!i;){const a=t[r];typeof a=="string"&&!qz.has(a)&&El(a).values.length&&(i=t[r]),r++}if(i&&n)for(const a of e)t[a]=zk(n,i)}class Gz extends j_{constructor(e,n,r,i,a){super(e,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let y=e[m];if(typeof y=="string"&&(y=y.trim(),N_(y))){const w=Nk(y,n.current);w!==void 0&&(e[m]=w),m===e.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!Lk.has(r)||e.length!==2)return;const[i,a]=e,l=tx(i),c=tx(a),h=jS(i),p=jS(a);if(h!==p&&Ps[r]){this.needsMeasurement=!0;return}if(l!==c)if(YS(l)&&YS(c))for(let m=0;m<e.length;m++){const y=e[m];typeof y=="string"&&(e[m]=parseFloat(y))}else Ps[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)(e[i]===null||jz(e[i]))&&r.push(i);r.length&&Kz(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ps[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var c;const{element:e,name:n,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const a=r.length-1,l=r[a];r[a]=Ps[n](e.measureViewportBox(),window.getComputedStyle(e.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),(c=this.removedTransforms)!=null&&c.length&&this.removedTransforms.forEach(([h,p])=>{e.getValue(h).set(p)}),this.resolveNoneKeyframes()}}function Bk(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const i=document.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t).filter(r=>r!=null)}const Wk=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function $f(t){return QP(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:H_,cancel:b7}=ck(queueMicrotask,!1),wr={x:!1,y:!1};function Hk(){return wr.x||wr.y}function Yz(t){return t==="x"||t==="y"?wr[t]?null:(wr[t]=!0,()=>{wr[t]=!1}):wr.x||wr.y?null:(wr.x=wr.y=!0,()=>{wr.x=wr.y=!1})}function qk(t,e){const n=Bk(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function Qz(t){return!(t.pointerType==="touch"||Hk())}function Xz(t,e,n={}){const[r,i,a]=qk(t,n);return r.forEach(l=>{let c=!1,h=!1,p;const m=()=>{l.removeEventListener("pointerleave",x)},y=R=>{p&&(p(R),p=void 0),m()},w=R=>{c=!1,window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),h&&(h=!1,y(R))},T=()=>{c=!0,window.addEventListener("pointerup",w,i),window.addEventListener("pointercancel",w,i)},x=R=>{if(R.pointerType!=="touch"){if(c){h=!0;return}y(R)}},P=R=>{if(!Qz(R))return;h=!1;const b=e(l,R);typeof b=="function"&&(p=b,l.addEventListener("pointerleave",x,i))};l.addEventListener("pointerenter",P,i),l.addEventListener("pointerdown",T,i)}),a}const Kk=(t,e)=>e?t===e?!0:Kk(t,e.parentElement):!1,q_=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,Jz=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Zz(t){return Jz.has(t.tagName)||t.isContentEditable===!0}const e3=new Set(["INPUT","SELECT","TEXTAREA"]);function t3(t){return e3.has(t.tagName)||t.isContentEditable===!0}const zf=new WeakSet;function rx(t){return e=>{e.key==="Enter"&&t(e)}}function Fg(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const n3=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=rx(()=>{if(zf.has(n))return;Fg(n,"down");const i=rx(()=>{Fg(n,"up")}),a=()=>Fg(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",a,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)};function ix(t){return q_(t)&&!Hk()}const sx=new WeakSet;function r3(t,e,n={}){const[r,i,a]=qk(t,n),l=c=>{const h=c.currentTarget;if(!ix(c)||sx.has(c))return;zf.add(h),n.stopPropagation&&sx.add(c);const p=e(h,c),m=(T,x)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",w),zf.has(h)&&zf.delete(h),ix(T)&&typeof p=="function"&&p(T,{success:x})},y=T=>{m(T,h===window||h===document||n.useGlobalTarget||Kk(h,T.target))},w=T=>{m(T,!1)};window.addEventListener("pointerup",y,i),window.addEventListener("pointercancel",w,i)};return r.forEach(c=>{(n.useGlobalTarget?window:c).addEventListener("pointerdown",l,i),$f(c)&&(c.addEventListener("focus",p=>n3(p,i)),!Zz(c)&&!c.hasAttribute("tabindex")&&(c.tabIndex=0))}),a}function K_(t){return QP(t)&&"ownerSVGElement"in t}const Bf=new WeakMap;let Ts;const Gk=(t,e,n)=>(r,i)=>i&&i[0]?i[0][t+"Size"]:K_(r)&&"getBBox"in r?r.getBBox()[e]:r[n],i3=Gk("inline","width","offsetWidth"),s3=Gk("block","height","offsetHeight");function o3({target:t,borderBoxSize:e}){var n;(n=Bf.get(t))==null||n.forEach(r=>{r(t,{get width(){return i3(t,e)},get height(){return s3(t,e)}})})}function a3(t){t.forEach(o3)}function l3(){typeof ResizeObserver>"u"||(Ts=new ResizeObserver(a3))}function u3(t,e){Ts||l3();const n=Bk(t);return n.forEach(r=>{let i=Bf.get(r);i||(i=new Set,Bf.set(r,i)),i.add(e),Ts==null||Ts.observe(r)}),()=>{n.forEach(r=>{const i=Bf.get(r);i==null||i.delete(e),i!=null&&i.size||Ts==null||Ts.unobserve(r)})}}const Wf=new Set;let Xa;function c3(){Xa=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Wf.forEach(e=>e(t))},window.addEventListener("resize",Xa)}function h3(t){return Wf.add(t),Xa||c3(),()=>{Wf.delete(t),!Wf.size&&typeof Xa=="function"&&(window.removeEventListener("resize",Xa),Xa=void 0)}}function ox(t,e){return typeof t=="function"?h3(t):u3(t,e)}function f3(t){return K_(t)&&t.tagName==="svg"}const d3=[...Uk,kt,Cr],p3=t=>d3.find(jk(t)),ax=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ja=()=>({x:ax(),y:ax()}),lx=()=>({min:0,max:0}),Mt=()=>({x:lx(),y:lx()}),m3=new WeakMap;function Ap(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function yc(t){return typeof t=="string"||Array.isArray(t)}const G_=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Y_=["initial",...G_];function Cp(t){return Ap(t.animate)||Y_.some(e=>yc(t[e]))}function Yk(t){return!!(Cp(t)||t.variants)}function g3(t,e,n){for(const r in e){const i=e[r],a=n[r];if(tn(i))t.addValue(r,i);else if(tn(a))t.addValue(r,Tl(i,{owner:t}));else if(a!==i)if(t.hasValue(r)){const l=t.getValue(r);l.liveStyle===!0?l.jump(i):l.hasAnimated||l.set(i)}else{const l=t.getStaticValue(r);t.addValue(r,Tl(l!==void 0?l:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const nv={current:null},Qk={current:!1},y3=typeof window<"u";function v3(){if(Qk.current=!0,!!y3)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>nv.current=t.matches;t.addEventListener("change",e),e()}else nv.current=!1}const ux=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ld={};function Xk(t){Ld=t}function _3(){return Ld}class w3{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:a,blockInitialAnimation:l,visualState:c},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=j_,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=yn.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,rt.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=c;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=m,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=a,this.options=h,this.blockInitialAnimation=!!l,this.isControllingVariants=Cp(n),this.isVariantNode=Yk(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:y,...w}=this.scrapeMotionValuesFromProps(n,{},this);for(const T in w){const x=w[T];p[T]!==void 0&&tn(x)&&x.set(p[T])}}mount(e){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,m3.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,a)=>this.bindToMotionValue(a,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Qk.current||v3(),this.shouldReduceMotion=nv.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),qs(this.notifyUpdate),qs(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&bk.has(e)&&this.current instanceof HTMLElement){const{factory:l,keyframes:c,times:h,ease:p,duration:m}=n.accelerate,y=new kk({element:this.current,name:e,keyframes:c,times:h,ease:p,duration:$n(m)}),w=l(y);this.valueSubscriptions.set(e,()=>{w(),y.cancel()});return}const r=Ml.has(e);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",l=>{this.latestValues[e]=l,this.props.onUpdate&&rt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),a&&a(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ld){const n=Ld[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Mt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<ux.length;r++){const i=ux[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,l=e[a];l&&(this.propEventSubscriptions[i]=this.on(i,l))}this.prevMotionValues=g3(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Tl(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(YP(r)||XP(r))?r=parseFloat(r):!p3(r)&&Cr.test(n)&&(r=zk(e,n)),this.setBaseTarget(e,tn(r)?r.get():r)),tn(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var a;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const l=z_(this.props,n,(a=this.presenceContext)==null?void 0:a.custom);l&&(r=l[e])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!tn(i)?i:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new R_),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){H_.render(this.render)}}class Jk extends w3{constructor(){super(...arguments),this.KeyframeResolver=Gz}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const r=e.style;return r?r[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;tn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Qs{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Zk({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function E3({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function T3(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function jg(t){return t===void 0||t===1}function rv({scale:t,scaleX:e,scaleY:n}){return!jg(t)||!jg(e)||!jg(n)}function Po(t){return rv(t)||eR(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function eR(t){return cx(t.x)||cx(t.y)}function cx(t){return t&&t!=="0%"}function Md(t,e,n){const r=t-n,i=e*r;return n+i}function hx(t,e,n,r,i){return i!==void 0&&(t=Md(t,i,r)),Md(t,n,r)+e}function iv(t,e=0,n=1,r,i){t.min=hx(t.min,e,n,r,i),t.max=hx(t.max,e,n,r,i)}function tR(t,{x:e,y:n}){iv(t.x,e.translate,e.scale,e.originPoint),iv(t.y,n.translate,n.scale,n.originPoint)}const fx=.999999999999,dx=1.0000000000001;function S3(t,e,n,r=!1){var c;const i=n.length;if(!i)return;e.x=e.y=1;let a,l;for(let h=0;h<i;h++){a=n[h],l=a.projectionDelta;const{visualElement:p}=a.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Zr(t.x,-a.scroll.offset.x),Zr(t.y,-a.scroll.offset.y)),l&&(e.x*=l.x.scale,e.y*=l.y.scale,tR(t,l)),r&&Po(a.latestValues)&&Hf(t,a.latestValues,(c=a.layout)==null?void 0:c.layoutBox))}e.x<dx&&e.x>fx&&(e.x=1),e.y<dx&&e.y>fx&&(e.y=1)}function Zr(t,e){t.min+=e,t.max+=e}function px(t,e,n,r,i=.5){const a=ht(t.min,t.max,i);iv(t,e,n,a,r)}function mx(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Hf(t,e,n){const r=n??t;px(t.x,mx(e.x,r.x),e.scaleX,e.scale,e.originX),px(t.y,mx(e.y,r.y),e.scaleY,e.scale,e.originY)}function nR(t,e){return Zk(T3(t.getBoundingClientRect(),e))}function x3(t,e,n){const r=nR(t,n),{scroll:i}=e;return i&&(Zr(r.x,i.offset.x),Zr(r.y,i.offset.y)),r}const I3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},A3=Ll.length;function C3(t,e,n){let r="",i=!0;for(let a=0;a<A3;a++){const l=Ll[a],c=t[l];if(c===void 0)continue;let h=!0;if(typeof c=="number")h=c===(l.startsWith("scale")?1:0);else{const p=parseFloat(c);h=l.startsWith("scale")?p===1:p===0}if(!h||n){const p=Wk(c,W_[l]);if(!h){i=!1;const m=I3[l]||l;r+=`${m}(${p}) `}n&&(e[l]=p)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function Q_(t,e,n){const{style:r,vars:i,transformOrigin:a}=t;let l=!1,c=!1;for(const h in e){const p=e[h];if(Ml.has(h)){l=!0;continue}else if(fk(h)){i[h]=p;continue}else{const m=Wk(p,W_[h]);h.startsWith("origin")?(c=!0,a[h]=m):r[h]=m}}if(e.transform||(l||n?r.transform=C3(e,t.transform,n):r.transform&&(r.transform="none")),c){const{originX:h="50%",originY:p="50%",originZ:m=0}=a;r.transformOrigin=`${h} ${p} ${m}`}}function rR(t,{style:e,vars:n},r,i){const a=t.style;let l;for(l in e)a[l]=e[l];i==null||i.applyProjectionStyles(a,r);for(l in n)a.setProperty(l,n[l])}function gx(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Vu={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ge.test(t))t=parseFloat(t);else return t;const n=gx(t,e.target.x),r=gx(t,e.target.y);return`${n}% ${r}%`}},P3={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Cr.parse(t);if(i.length>5)return r;const a=Cr.createTransformer(t),l=typeof i[0]!="number"?1:0,c=n.x.scale*e.x,h=n.y.scale*e.y;i[0+l]/=c,i[1+l]/=h;const p=ht(c,h,.5);return typeof i[2+l]=="number"&&(i[2+l]/=p),typeof i[3+l]=="number"&&(i[3+l]/=p),a(i)}},sv={borderRadius:{...Vu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Vu,borderTopRightRadius:Vu,borderBottomLeftRadius:Vu,borderBottomRightRadius:Vu,boxShadow:P3};function iR(t,{layout:e,layoutId:n}){return Ml.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!sv[t]||t==="opacity")}function X_(t,e,n){var l;const r=t.style,i=e==null?void 0:e.style,a={};if(!r)return a;for(const c in r)(tn(r[c])||i&&tn(i[c])||iR(c,t)||((l=n==null?void 0:n.getValue(c))==null?void 0:l.liveStyle)!==void 0)&&(a[c]=r[c]);return a}function k3(t){return window.getComputedStyle(t)}class R3 extends Jk{constructor(){super(...arguments),this.type="html",this.renderInstance=rR}readValueFromInstance(e,n){var r;if(Ml.has(n))return(r=this.projection)!=null&&r.isProjecting?Hy(n):Q6(e,n);{const i=k3(e),a=(fk(n)?i.getPropertyValue(n):i[n])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:n}){return nR(e,n)}build(e,n,r){Q_(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return X_(e,n,r)}}const b3={offset:"stroke-dashoffset",array:"stroke-dasharray"},D3={offset:"strokeDashoffset",array:"strokeDasharray"};function N3(t,e,n=1,r=0,i=!0){t.pathLength=1;const a=i?b3:D3;t[a.offset]=`${-r}`,t[a.array]=`${e} ${n}`}const V3=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function sR(t,{attrX:e,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:l=0,...c},h,p,m){if(Q_(t,c,p),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:y,style:w}=t;y.transform&&(w.transform=y.transform,delete y.transform),(w.transform||y.transformOrigin)&&(w.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),w.transform&&(w.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete y.transformBox);for(const T of V3)y[T]!==void 0&&(w[T]=y[T],delete y[T]);e!==void 0&&(y.x=e),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),i!==void 0&&N3(y,i,a,l,!1)}const oR=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),aR=t=>typeof t=="string"&&t.toLowerCase()==="svg";function L3(t,e,n,r){rR(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(oR.has(i)?i:B_(i),e.attrs[i])}function lR(t,e,n){const r=X_(t,e,n);for(const i in t)if(tn(t[i])||tn(e[i])){const a=Ll.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=t[i]}return r}class M3 extends Jk{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Mt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ml.has(n)){const r=$k(n);return r&&r.default||0}return n=oR.has(n)?n:B_(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return lR(e,n,r)}build(e,n,r){sR(e,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,n,r,i){L3(e,n,r,i)}mount(e){this.isSVGTag=aR(e.tagName),super.mount(e)}}const O3=Y_.length;function uR(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?uR(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<O3;n++){const r=Y_[n],i=t.props[r];(yc(i)||i===!1)&&(e[r]=i)}return e}function cR(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}const F3=[...G_].reverse(),j3=G_.length;function U3(t){return e=>Promise.all(e.map(({animation:n,options:r})=>Oz(t,n,r)))}function $3(t){let e=U3(t),n=yx(),r=!0,i=!1;const a=p=>(m,y)=>{var T;const w=Oo(t,y,p==="exit"?(T=t.presenceContext)==null?void 0:T.custom:void 0);if(w){const{transition:x,transitionEnd:P,...R}=w;m={...m,...R,...P}}return m};function l(p){e=p(t)}function c(p){const{props:m}=t,y=uR(t.parent)||{},w=[],T=new Set;let x={},P=1/0;for(let b=0;b<j3;b++){const O=F3[b],$=n[O],U=m[O]!==void 0?m[O]:y[O],H=yc(U),X=O===p?$.isActive:null;X===!1&&(P=b);let C=U===y[O]&&U!==m[O]&&H;if(C&&(r||i)&&t.manuallyAnimateOnMount&&(C=!1),$.protectedKeys={...x},!$.isActive&&X===null||!U&&!$.prevProp||Ap(U)||typeof U=="boolean")continue;if(O==="exit"&&$.isActive&&X!==!0){$.prevResolvedValues&&(x={...x,...$.prevResolvedValues});continue}const I=z3($.prevProp,U);let k=I||O===p&&$.isActive&&!C&&H||b>P&&H,D=!1;const M=Array.isArray(U)?U:[U];let B=M.reduce(a(O),{});X===!1&&(B={});const{prevResolvedValues:N={}}=$,Re={...N,...B},Ge=re=>{k=!0,T.has(re)&&(D=!0,T.delete(re)),$.needsAnimating[re]=!0;const ce=t.getValue(re);ce&&(ce.liveStyle=!1)};for(const re in Re){const ce=B[re],ue=N[re];if(x.hasOwnProperty(re))continue;let W=!1;Xy(ce)&&Xy(ue)?W=!cR(ce,ue):W=ce!==ue,W?ce!=null?Ge(re):T.add(re):ce!==void 0&&T.has(re)?Ge(re):$.protectedKeys[re]=!0}$.prevProp=U,$.prevResolvedValues=B,$.isActive&&(x={...x,...B}),(r||i)&&t.blockInitialAnimation&&(k=!1);const Xe=C&&I;k&&(!Xe||D)&&w.push(...M.map(re=>{const ce={type:O};if(typeof re=="string"&&(r||i)&&!Xe&&t.manuallyAnimateOnMount&&t.parent){const{parent:ue}=t,W=Oo(ue,re);if(ue.enteringChildren&&W){const{delayChildren:J}=W.transition||{};ce.delay=Dk(ue.enteringChildren,t,J)}}return{animation:re,options:ce}}))}if(T.size){const b={};if(typeof m.initial!="boolean"){const O=Oo(t,Array.isArray(m.initial)?m.initial[0]:m.initial);O&&O.transition&&(b.transition=O.transition)}T.forEach(O=>{const $=t.getBaseTarget(O),U=t.getValue(O);U&&(U.liveStyle=!0),b[O]=$??null}),w.push({animation:b})}let R=!!w.length;return r&&(m.initial===!1||m.initial===m.animate)&&!t.manuallyAnimateOnMount&&(R=!1),r=!1,i=!1,R?e(w):Promise.resolve()}function h(p,m){var w;if(n[p].isActive===m)return Promise.resolve();(w=t.variantChildren)==null||w.forEach(T=>{var x;return(x=T.animationState)==null?void 0:x.setActive(p,m)}),n[p].isActive=m;const y=c(p);for(const T in n)n[T].protectedKeys={};return y}return{animateChanges:c,setActive:h,setAnimateFunction:l,getState:()=>n,reset:()=>{n=yx(),i=!0}}}function z3(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!cR(e,t):!1}function Io(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function yx(){return{animate:Io(!0),whileInView:Io(),whileHover:Io(),whileTap:Io(),whileDrag:Io(),whileFocus:Io(),exit:Io()}}function ov(t,e){t.min=e.min,t.max=e.max}function _r(t,e){ov(t.x,e.x),ov(t.y,e.y)}function vx(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const hR=1e-4,B3=1-hR,W3=1+hR,fR=.01,H3=0-fR,q3=0+fR;function vn(t){return t.max-t.min}function K3(t,e,n){return Math.abs(t-e)<=n}function _x(t,e,n,r=.5){t.origin=r,t.originPoint=ht(e.min,e.max,t.origin),t.scale=vn(n)/vn(e),t.translate=ht(n.min,n.max,t.origin)-t.originPoint,(t.scale>=B3&&t.scale<=W3||isNaN(t.scale))&&(t.scale=1),(t.translate>=H3&&t.translate<=q3||isNaN(t.translate))&&(t.translate=0)}function Zu(t,e,n,r){_x(t.x,e.x,n.x,r?r.originX:void 0),_x(t.y,e.y,n.y,r?r.originY:void 0)}function wx(t,e,n,r=0){const i=r?ht(n.min,n.max,r):n.min;t.min=i+e.min,t.max=t.min+vn(e)}function G3(t,e,n,r){wx(t.x,e.x,n.x,r==null?void 0:r.x),wx(t.y,e.y,n.y,r==null?void 0:r.y)}function Ex(t,e,n,r=0){const i=r?ht(n.min,n.max,r):n.min;t.min=e.min-i,t.max=t.min+vn(e)}function Od(t,e,n,r){Ex(t.x,e.x,n.x,r==null?void 0:r.x),Ex(t.y,e.y,n.y,r==null?void 0:r.y)}function Tx(t,e,n,r,i){return t-=e,t=Md(t,1/n,r),i!==void 0&&(t=Md(t,1/i,r)),t}function Y3(t,e=0,n=1,r=.5,i,a=t,l=t){if(ii.test(e)&&(e=parseFloat(e),e=ht(l.min,l.max,e/100)-l.min),typeof e!="number")return;let c=ht(a.min,a.max,r);t===a&&(c-=e),t.min=Tx(t.min,e,n,c,i),t.max=Tx(t.max,e,n,c,i)}function Sx(t,e,[n,r,i],a,l){Y3(t,e[n],e[r],e[i],e.scale,a,l)}const Q3=["x","scaleX","originX"],X3=["y","scaleY","originY"];function xx(t,e,n,r){Sx(t.x,e,Q3,n?n.x:void 0,r?r.x:void 0),Sx(t.y,e,X3,n?n.y:void 0,r?r.y:void 0)}function Ix(t){return t.translate===0&&t.scale===1}function dR(t){return Ix(t.x)&&Ix(t.y)}function Ax(t,e){return t.min===e.min&&t.max===e.max}function J3(t,e){return Ax(t.x,e.x)&&Ax(t.y,e.y)}function Cx(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function pR(t,e){return Cx(t.x,e.x)&&Cx(t.y,e.y)}function Px(t){return vn(t.x)/vn(t.y)}function kx(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Qr(t){return[t("x"),t("y")]}function Z3(t,e,n){let r="";const i=t.x.translate/e.x,a=t.y.translate/e.y,l=(n==null?void 0:n.z)||0;if((i||a||l)&&(r=`translate3d(${i}px, ${a}px, ${l}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:p,rotate:m,rotateX:y,rotateY:w,skewX:T,skewY:x}=n;p&&(r=`perspective(${p}px) ${r}`),m&&(r+=`rotate(${m}deg) `),y&&(r+=`rotateX(${y}deg) `),w&&(r+=`rotateY(${w}deg) `),T&&(r+=`skewX(${T}deg) `),x&&(r+=`skewY(${x}deg) `)}const c=t.x.scale*e.x,h=t.y.scale*e.y;return(c!==1||h!==1)&&(r+=`scale(${c}, ${h})`),r||"none"}const mR=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],eB=mR.length,Rx=t=>typeof t=="string"?parseFloat(t):t,bx=t=>typeof t=="number"||ge.test(t);function tB(t,e,n,r,i,a){i?(t.opacity=ht(0,n.opacity??1,nB(r)),t.opacityExit=ht(e.opacity??1,0,rB(r))):a&&(t.opacity=ht(e.opacity??1,n.opacity??1,r));for(let l=0;l<eB;l++){const c=mR[l];let h=Dx(e,c),p=Dx(n,c);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||bx(h)===bx(p)?(t[c]=Math.max(ht(Rx(h),Rx(p),r),0),(ii.test(p)||ii.test(h))&&(t[c]+="%")):t[c]=p}(e.rotate||n.rotate)&&(t.rotate=ht(e.rotate||0,n.rotate||0,r))}function Dx(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const nB=gR(0,.5,ok),rB=gR(.5,.95,nr);function gR(t,e,n){return r=>r<t?0:r>e?1:n(mc(t,e,r))}function iB(t,e,n){const r=tn(t)?t:Tl(t);return r.start($_("",r,e,n)),r.animation}function vc(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const sB=(t,e)=>t.depth-e.depth;class oB{constructor(){this.children=[],this.isDirty=!1}add(e){k_(this.children,e),this.isDirty=!0}remove(e){kd(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(sB),this.isDirty=!1,this.children.forEach(e)}}function aB(t,e){const n=yn.now(),r=({timestamp:i})=>{const a=i-n;a>=e&&(qs(r),t(a-e))};return rt.setup(r,!0),()=>qs(r)}function qf(t){return tn(t)?t.get():t}class lB{constructor(){this.members=[]}add(e){k_(this.members,e);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===e||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(kd(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(kd(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let r=this.members.indexOf(e)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(e,n){var i;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:l}=e.options;(a===void 0||a!==l)&&(e.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(i=e.root)!=null&&i.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,r,i,a,l;(r=(n=e.options).onExitComplete)==null||r.call(n),(l=(i=e.resumingFrom)==null?void 0:(a=i.options).onExitComplete)==null||l.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Kf={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Ug=["","X","Y","Z"],uB=1e3;let cB=0;function $g(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function yR(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=Ok(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",rt,!(i||a))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&yR(r)}function vR({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(l={},c=e==null?void 0:e()){this.id=cB++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(dB),this.nodes.forEach(_B),this.nodes.forEach(wB),this.nodes.forEach(pB)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new oB)}addEventListener(l,c){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new R_),this.eventHandlers.get(l).add(c)}notifyListeners(l,...c){const h=this.eventHandlers.get(l);h&&h.notify(...c)}hasListeners(l){return this.eventHandlers.has(l)}mount(l){if(this.instance)return;this.isSVG=K_(l)&&!f3(l),this.instance=l;const{layoutId:c,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||c)&&(this.isLayoutDirty=!0),t){let m,y=0;const w=()=>this.root.updateBlockedByResize=!1;rt.read(()=>{y=window.innerWidth}),t(l,()=>{const T=window.innerWidth;T!==y&&(y=T,this.root.updateBlockedByResize=!0,m&&m(),m=aB(w,250),Kf.hasAnimatedSinceResize&&(Kf.hasAnimatedSinceResize=!1,this.nodes.forEach(Lx)))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&p&&(c||h)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:y,hasRelativeLayoutChanged:w,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||p.getDefaultTransition()||IB,{onLayoutAnimationStart:P,onLayoutAnimationComplete:R}=p.getProps(),b=!this.targetLayout||!pR(this.targetLayout,T),O=!y&&w;if(this.options.layoutRoot||this.resumeFrom||O||y&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const $={...U_(x,"layout"),onPlay:P,onComplete:R};(p.shouldReduceMotion||this.options.layoutRoot)&&($.delay=0,$.type=!1),this.startAnimation($),this.setAnimationOrigin(m,O)}else y||Lx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),qs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(EB),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&yR(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,(typeof y.latestValues.x=="string"||typeof y.latestValues.y=="string")&&(y.isLayoutDirty=!0),y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:c,layout:h}=this.options;if(c===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const h=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),h&&this.nodes.forEach(gB),this.nodes.forEach(Nx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Vx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(yB),this.nodes.forEach(vB),this.nodes.forEach(hB),this.nodes.forEach(fB)):this.nodes.forEach(Vx),this.clearAllSnapshots();const c=yn.now();Jt.delta=oi(0,1e3/60,c-Jt.timestamp),Jt.timestamp=c,Jt.isProcessing=!0,Ng.update.process(Jt),Ng.preRender.process(Jt),Ng.render.process(Jt),Jt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,H_.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mB),this.sharedNodes.forEach(TB)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,rt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){rt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!vn(this.snapshot.measuredBox.x)&&!vn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Mt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(c=!1),c&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:l,isRoot:h,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!i)return;const l=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!dR(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,m=p!==this.prevTransformTemplateValue;l&&this.instance&&(c||Po(this.latestValues)||m)&&(i(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const c=this.measurePageBox();let h=this.removeElementScroll(c);return l&&(h=this.removeTransform(h)),AB(h),{animationId:this.root.animationId,measuredBox:c,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:l}=this.options;if(!l)return Mt();const c=l.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(CB))){const{scroll:m}=this.root;m&&(Zr(c.x,m.offset.x),Zr(c.y,m.offset.y))}return c}removeElementScroll(l){var h;const c=Mt();if(_r(c,l),(h=this.scroll)!=null&&h.wasRoot)return c;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:y,options:w}=m;m!==this.root&&y&&w.layoutScroll&&(y.wasRoot&&_r(c,l),Zr(c.x,y.offset.x),Zr(c.y,y.offset.y))}return c}applyTransform(l,c=!1,h){var m,y;const p=h||Mt();_r(p,l);for(let w=0;w<this.path.length;w++){const T=this.path[w];!c&&T.options.layoutScroll&&T.scroll&&T!==T.root&&(Zr(p.x,-T.scroll.offset.x),Zr(p.y,-T.scroll.offset.y)),Po(T.latestValues)&&Hf(p,T.latestValues,(m=T.layout)==null?void 0:m.layoutBox)}return Po(this.latestValues)&&Hf(p,this.latestValues,(y=this.layout)==null?void 0:y.layoutBox),p}removeTransform(l){var h;const c=Mt();_r(c,l);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!Po(m.latestValues))continue;let y;m.instance&&(rv(m.latestValues)&&m.updateSnapshot(),y=Mt(),_r(y,m.measurePageBox())),xx(c,m.latestValues,(h=m.snapshot)==null?void 0:h.layoutBox,y)}return Po(this.latestValues)&&xx(c,this.latestValues),c}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Jt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var T;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==c;if(!(l||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:y}=this.options;if(!this.layout||!(m||y))return;this.resolvedRelativeTargetAt=Jt.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Mt(),this.targetWithTransforms=Mt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),G3(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):_r(this.target,this.layout.layoutBox),tR(this.target,this.targetDelta)):_r(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||rv(this.parent.latestValues)||eR(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(l,c,h){this.relativeParent=l,this.linkedParentVersion=l.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Mt(),this.relativeTargetOrigin=Mt(),Od(this.relativeTargetOrigin,c,h,this.options.layoutAnchor||void 0),_r(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var x;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let h=!0;if((this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty)&&(h=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Jt.timestamp&&(h=!1),h)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;_r(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,w=this.treeScale.y;S3(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=Mt());const{target:T}=l;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(vx(this.prevProjectionDelta.x,this.projectionDelta.x),vx(this.prevProjectionDelta.y,this.projectionDelta.y)),Zu(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==w||!kx(this.projectionDelta.x,this.prevProjectionDelta.x)||!kx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){var c;if((c=this.options.visualElement)==null||c.scheduleRender(),l){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ja(),this.projectionDelta=Ja(),this.projectionDeltaWithTransform=Ja()}setAnimationOrigin(l,c=!1){const h=this.snapshot,p=h?h.latestValues:{},m={...this.latestValues},y=Ja();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const w=Mt(),T=h?h.source:void 0,x=this.layout?this.layout.source:void 0,P=T!==x,R=this.getStack(),b=!R||R.members.length<=1,O=!!(P&&!b&&this.options.crossfade===!0&&!this.path.some(xB));this.animationProgress=0;let $;this.mixTargetDelta=U=>{const H=U/1e3;Mx(y.x,l.x,H),Mx(y.y,l.y,H),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Od(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),SB(this.relativeTarget,this.relativeTargetOrigin,w,H),$&&J3(this.relativeTarget,$)&&(this.isProjectionDirty=!1),$||($=Mt()),_r($,this.relativeTarget)),P&&(this.animationValues=m,tB(m,p,this.latestValues,H,O,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=H},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){var c,h,p;this.notifyListeners("animationStart"),(c=this.currentAnimation)==null||c.stop(),(p=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||p.stop(),this.pendingAnimation&&(qs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=rt.update(()=>{Kf.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Tl(0)),this.motionValue.jump(0,!1),this.currentAnimation=iB(this.motionValue,[0,1e3],{...l,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),l.onUpdate&&l.onUpdate(m)},onStop:()=>{},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(uB),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:c,target:h,layout:p,latestValues:m}=l;if(!(!c||!h||!p)){if(this!==l&&this.layout&&p&&_R(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||Mt();const y=vn(this.layout.layoutBox.x);h.x.min=l.target.x.min,h.x.max=h.x.min+y;const w=vn(this.layout.layoutBox.y);h.y.min=l.target.y.min,h.y.max=h.y.min+w}_r(c,h),Hf(c,m),Zu(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(l,c){this.sharedNodes.has(l)||this.sharedNodes.set(l,new lB),this.sharedNodes.get(l).add(c);const p=c.options.initialPromotionConfig;c.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(c):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var c;const{layoutId:l}=this.options;return l?((c=this.getStack())==null?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:l}=this.options;return l?(c=this.getStack())==null?void 0:c.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:c,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),l&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetSkewAndRotation(){const{visualElement:l}=this.options;if(!l)return;let c=!1;const{latestValues:h}=l;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(c=!0),!c)return;const p={};h.z&&$g("z",l,p,this.animationValues);for(let m=0;m<Ug.length;m++)$g(`rotate${Ug[m]}`,l,p,this.animationValues),$g(`skew${Ug[m]}`,l,p,this.animationValues);l.render();for(const m in p)l.setStaticValue(m,p[m]),this.animationValues&&(this.animationValues[m]=p[m]);l.scheduleRender()}applyProjectionStyles(l,c){if(!this.instance||this.isSVG)return;if(!this.isVisible){l.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,l.visibility="",l.opacity="",l.pointerEvents=qf(c==null?void 0:c.pointerEvents)||"",l.transform=h?h(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(l.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,l.pointerEvents=qf(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Po(this.latestValues)&&(l.transform=h?h({},""):"none",this.hasProjected=!1);return}l.visibility="";const m=p.animationValues||p.latestValues;this.applyTransformsToTarget();let y=Z3(this.projectionDeltaWithTransform,this.treeScale,m);h&&(y=h(m,y)),l.transform=y;const{x:w,y:T}=this.projectionDelta;l.transformOrigin=`${w.origin*100}% ${T.origin*100}% 0`,p.animationValues?l.opacity=p===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:l.opacity=p===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const x in sv){if(m[x]===void 0)continue;const{correct:P,applyTo:R,isCSSVariable:b}=sv[x],O=y==="none"?m[x]:P(m[x],p);if(R){const $=R.length;for(let U=0;U<$;U++)l[R[U]]=O}else b?this.options.visualElement.renderState.vars[x]=O:l[x]=O}this.options.layoutId&&(l.pointerEvents=p===this?qf(c==null?void 0:c.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var c;return(c=l.currentAnimation)==null?void 0:c.stop()}),this.root.nodes.forEach(Nx),this.root.sharedNodes.clear()}}}function hB(t){t.updateLayout()}function fB(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:a}=t.options,l=e.source!==t.layout.source;if(a==="size")Qr(y=>{const w=l?e.measuredBox[y]:e.layoutBox[y],T=vn(w);w.min=r[y].min,w.max=w.min+T});else if(a==="x"||a==="y"){const y=a==="x"?"y":"x";ov(l?e.measuredBox[y]:e.layoutBox[y],r[y])}else _R(a,e.layoutBox,r)&&Qr(y=>{const w=l?e.measuredBox[y]:e.layoutBox[y],T=vn(r[y]);w.max=w.min+T,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+T)});const c=Ja();Zu(c,r,e.layoutBox);const h=Ja();l?Zu(h,t.applyTransform(i,!0),e.measuredBox):Zu(h,r,e.layoutBox);const p=!dR(c);let m=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:w,layout:T}=y;if(w&&T){const x=t.options.layoutAnchor||void 0,P=Mt();Od(P,e.layoutBox,w.layoutBox,x);const R=Mt();Od(R,r,T.layoutBox,x),pR(P,R)||(m=!0),y.options.layoutRoot&&(t.relativeTarget=R,t.relativeTargetOrigin=P,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:h,layoutDelta:c,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function dB(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function pB(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function mB(t){t.clearSnapshot()}function Nx(t){t.clearMeasurements()}function gB(t){t.isLayoutDirty=!0,t.updateLayout()}function Vx(t){t.isLayoutDirty=!1}function yB(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function vB(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Lx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function _B(t){t.resolveTargetDelta()}function wB(t){t.calcProjection()}function EB(t){t.resetSkewAndRotation()}function TB(t){t.removeLeadSnapshot()}function Mx(t,e,n){t.translate=ht(e.translate,0,n),t.scale=ht(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Ox(t,e,n,r){t.min=ht(e.min,n.min,r),t.max=ht(e.max,n.max,r)}function SB(t,e,n,r){Ox(t.x,e.x,n.x,r),Ox(t.y,e.y,n.y,r)}function xB(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const IB={duration:.45,ease:[.4,0,.1,1]},Fx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),jx=Fx("applewebkit/")&&!Fx("chrome/")?Math.round:nr;function Ux(t){t.min=jx(t.min),t.max=jx(t.max)}function AB(t){Ux(t.x),Ux(t.y)}function _R(t,e,n){return t==="position"||t==="preserve-aspect"&&!K3(Px(e),Px(n),.2)}function CB(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const PB=vR({attachResizeListener:(t,e)=>vc(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),zg={current:void 0},wR=vR({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!zg.current){const t=new PB({});t.mount(window),t.setOptions({layoutScroll:!0}),zg.current=t}return zg.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),J_=V.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function $x(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function kB(...t){return e=>{let n=!1;const r=t.map(i=>{const a=$x(i,e);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():$x(t[i],null)}}}}function RB(...t){return V.useCallback(kB(...t),t)}class bB extends V.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if($f(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,i=$f(r)&&r.offsetWidth||0,a=$f(r)&&r.offsetHeight||0,l=getComputedStyle(n),c=this.props.sizeRef.current;c.height=parseFloat(l.height),c.width=parseFloat(l.width),c.top=n.offsetTop,c.left=n.offsetLeft,c.right=i-c.width-c.left,c.bottom=a-c.height-c.top}return null}componentDidUpdate(){}render(){return this.props.children}}function DB({children:t,isPresent:e,anchorX:n,anchorY:r,root:i,pop:a}){var w;const l=V.useId(),c=V.useRef(null),h=V.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=V.useContext(J_),m=((w=t.props)==null?void 0:w.ref)??(t==null?void 0:t.ref),y=RB(c,m);return V.useInsertionEffect(()=>{const{width:T,height:x,top:P,left:R,right:b,bottom:O}=h.current;if(e||a===!1||!c.current||!T||!x)return;const $=n==="left"?`left: ${R}`:`right: ${b}`,U=r==="bottom"?`bottom: ${O}`:`top: ${P}`;c.current.dataset.motionPopId=l;const H=document.createElement("style");p&&(H.nonce=p);const X=i??document.head;return X.appendChild(H),H.sheet&&H.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${T}px !important;
            height: ${x}px !important;
            ${$}px !important;
            ${U}px !important;
          }
        `),()=>{var C;(C=c.current)==null||C.removeAttribute("data-motion-pop-id"),X.contains(H)&&X.removeChild(H)}},[e]),F.jsx(bB,{isPresent:e,childRef:c,sizeRef:h,pop:a,children:a===!1?t:V.cloneElement(t,{ref:y})})}const NB=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:l,anchorX:c,anchorY:h,root:p})=>{const m=P_(VB),y=V.useId();let w=!0,T=V.useMemo(()=>(w=!1,{id:y,initial:e,isPresent:n,custom:i,onExitComplete:x=>{m.set(x,!0);for(const P of m.values())if(!P)return;r&&r()},register:x=>(m.set(x,!1),()=>m.delete(x))}),[n,m,r]);return a&&w&&(T={...T}),V.useMemo(()=>{m.forEach((x,P)=>m.set(P,!1))},[n]),V.useEffect(()=>{!n&&!m.size&&r&&r()},[n]),t=F.jsx(DB,{pop:l==="popLayout",isPresent:n,anchorX:c,anchorY:h,root:p,children:t}),F.jsx(xp.Provider,{value:T,children:t})};function VB(){return new Map}function ER(t=!0){const e=V.useContext(xp);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,a=V.useId();V.useEffect(()=>{if(t)return i(a)},[t]);const l=V.useCallback(()=>t&&r&&r(a),[a,r,t]);return!n&&r?[!1,l]:[!0]}const yf=t=>t.key||"";function zx(t){const e=[];return V.Children.forEach(t,n=>{V.isValidElement(n)&&e.push(n)}),e}const TR=({children:t,custom:e,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a="sync",propagate:l=!1,anchorX:c="left",anchorY:h="top",root:p})=>{const[m,y]=ER(l),w=V.useMemo(()=>zx(t),[t]),T=l&&!m?[]:w.map(yf),x=V.useRef(!0),P=V.useRef(w),R=P_(()=>new Map),b=V.useRef(new Set),[O,$]=V.useState(w),[U,H]=V.useState(w);GP(()=>{x.current=!1,P.current=w;for(let I=0;I<U.length;I++){const k=yf(U[I]);T.includes(k)?(R.delete(k),b.current.delete(k)):R.get(k)!==!0&&R.set(k,!1)}},[U,T.length,T.join("-")]);const X=[];if(w!==O){let I=[...w];for(let k=0;k<U.length;k++){const D=U[k],M=yf(D);T.includes(M)||(I.splice(k,0,D),X.push(D))}return a==="wait"&&X.length&&(I=X),H(zx(I)),$(w),null}const{forceRender:C}=V.useContext(C_);return F.jsx(F.Fragment,{children:U.map(I=>{const k=yf(I),D=l&&!m?!1:w===U||T.includes(k),M=()=>{if(b.current.has(k))return;if(R.has(k))b.current.add(k),R.set(k,!0);else return;let B=!0;R.forEach(N=>{N||(B=!1)}),B&&(C==null||C(),H(P.current),l&&(y==null||y()),r&&r())};return F.jsx(NB,{isPresent:D,initial:!x.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:a,root:p,onExitComplete:D?void 0:M,anchorX:c,anchorY:h,children:I},k)})})},SR=V.createContext({strict:!1}),Bx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Wx=!1;function LB(){if(Wx)return;const t={};for(const e in Bx)t[e]={isEnabled:n=>Bx[e].some(r=>!!n[r])};Xk(t),Wx=!0}function xR(){return LB(),_3()}function MB(t){const e=xR();for(const n in t)e[n]={...e[n],...t[n]};Xk(e)}const OB=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Fd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||OB.has(t)}let IR=t=>!Fd(t);function FB(t){typeof t=="function"&&(IR=e=>e.startsWith("on")?!Fd(e):t(e))}try{FB(require("@emotion/is-prop-valid").default)}catch{}function jB(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||tn(t[i])||(IR(i)||n===!0&&Fd(i)||!e&&!Fd(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}const Pp=V.createContext({});function UB(t,e){if(Cp(t)){const{initial:n,animate:r}=t;return{initial:n===!1||yc(n)?n:void 0,animate:yc(r)?r:void 0}}return t.inherit!==!1?e:{}}function $B(t){const{initial:e,animate:n}=UB(t,V.useContext(Pp));return V.useMemo(()=>({initial:e,animate:n}),[Hx(e),Hx(n)])}function Hx(t){return Array.isArray(t)?t.join(" "):t}const Z_=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function AR(t,e,n){for(const r in e)!tn(e[r])&&!iR(r,n)&&(t[r]=e[r])}function zB({transformTemplate:t},e){return V.useMemo(()=>{const n=Z_();return Q_(n,e,t),Object.assign({},n.vars,n.style)},[e])}function BB(t,e){const n=t.style||{},r={};return AR(r,n,t),Object.assign(r,zB(t,e)),r}function WB(t,e){const n={},r=BB(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const CR=()=>({...Z_(),attrs:{}});function HB(t,e,n,r){const i=V.useMemo(()=>{const a=CR();return sR(a,e,aR(r),t.transformTemplate,t.style),{...a.attrs,style:{...a.style}}},[e]);if(t.style){const a={};AR(a,t.style,t),i.style={...a,...i.style}}return i}const qB=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ew(t){return typeof t!="string"||t.includes("-")?!1:!!(qB.indexOf(t)>-1||/[A-Z]/u.test(t))}function KB(t,e,n,{latestValues:r},i,a=!1,l){const h=(l??ew(t)?HB:WB)(e,r,i,t),p=jB(e,typeof t=="string",a),m=t!==V.Fragment?{...p,...h,ref:n}:{},{children:y}=e,w=V.useMemo(()=>tn(y)?y.get():y,[y]);return V.createElement(t,{...m,children:w})}function GB({scrapeMotionValuesFromProps:t,createRenderState:e},n,r,i){return{latestValues:YB(n,r,i,t),renderState:e()}}function YB(t,e,n,r){const i={},a=r(t,{});for(const w in a)i[w]=qf(a[w]);let{initial:l,animate:c}=t;const h=Cp(t),p=Yk(t);e&&p&&!h&&t.inherit!==!1&&(l===void 0&&(l=e.initial),c===void 0&&(c=e.animate));let m=n?n.initial===!1:!1;m=m||l===!1;const y=m?c:l;if(y&&typeof y!="boolean"&&!Ap(y)){const w=Array.isArray(y)?y:[y];for(let T=0;T<w.length;T++){const x=z_(t,w[T]);if(x){const{transitionEnd:P,transition:R,...b}=x;for(const O in b){let $=b[O];if(Array.isArray($)){const U=m?$.length-1:0;$=$[U]}$!==null&&(i[O]=$)}for(const O in P)i[O]=P[O]}}}return i}const PR=t=>(e,n)=>{const r=V.useContext(Pp),i=V.useContext(xp),a=()=>GB(t,e,r,i);return n?a():P_(a)},QB=PR({scrapeMotionValuesFromProps:X_,createRenderState:Z_}),XB=PR({scrapeMotionValuesFromProps:lR,createRenderState:CR}),JB=Symbol.for("motionComponentSymbol");function ZB(t,e,n){const r=V.useRef(n);V.useInsertionEffect(()=>{r.current=n});const i=V.useRef(null);return V.useCallback(a=>{var c;a&&((c=t.onMount)==null||c.call(t,a));const l=r.current;if(typeof l=="function")if(a){const h=l(a);typeof h=="function"&&(i.current=h)}else i.current?(i.current(),i.current=null):l(a);else l&&(l.current=a);e&&(a?e.mount(a):e.unmount())},[e])}const kR=V.createContext({});function Ga(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function e8(t,e,n,r,i,a){var $,U;const{visualElement:l}=V.useContext(Pp),c=V.useContext(SR),h=V.useContext(xp),p=V.useContext(J_),m=p.reducedMotion,y=p.skipAnimations,w=V.useRef(null),T=V.useRef(!1);r=r||c.renderer,!w.current&&r&&(w.current=r(t,{visualState:e,parent:l,props:n,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m,skipAnimations:y,isSVG:a}),T.current&&w.current&&(w.current.manuallyAnimateOnMount=!0));const x=w.current,P=V.useContext(kR);x&&!x.projection&&i&&(x.type==="html"||x.type==="svg")&&t8(w.current,n,i,P);const R=V.useRef(!1);V.useInsertionEffect(()=>{x&&R.current&&x.update(n,h)});const b=n[Mk],O=V.useRef(!!b&&typeof window<"u"&&!(($=window.MotionHandoffIsComplete)!=null&&$.call(window,b))&&((U=window.MotionHasOptimisedAnimation)==null?void 0:U.call(window,b)));return GP(()=>{T.current=!0,x&&(R.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),x.scheduleRenderMicrotask(),O.current&&x.animationState&&x.animationState.animateChanges())}),V.useEffect(()=>{x&&(!O.current&&x.animationState&&x.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var H;(H=window.MotionHandoffMarkAsComplete)==null||H.call(window,b)}),O.current=!1),x.enteringChildren=void 0)}),x}function t8(t,e,n,r){const{layoutId:i,layout:a,drag:l,dragConstraints:c,layoutScroll:h,layoutRoot:p,layoutAnchor:m,layoutCrossfade:y}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:RR(t.parent)),t.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!l||c&&Ga(c),visualElement:t,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:h,layoutRoot:p,layoutAnchor:m})}function RR(t){if(t)return t.options.allowProjection!==!1?t.projection:RR(t.parent)}function Bg(t,{forwardMotionProps:e=!1,type:n}={},r,i){r&&MB(r);const a=n?n==="svg":ew(t),l=a?XB:QB;function c(p,m){let y;const w={...V.useContext(J_),...p,layoutId:n8(p)},{isStatic:T}=w,x=$B(p),P=l(p,T);if(!T&&typeof window<"u"){r8();const R=i8(w);y=R.MeasureLayout,x.visualElement=e8(t,P,w,i,R.ProjectionNode,a)}return F.jsxs(Pp.Provider,{value:x,children:[y&&x.visualElement?F.jsx(y,{visualElement:x.visualElement,...w}):null,KB(t,p,ZB(P,x.visualElement,m),P,T,e,a)]})}c.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const h=V.forwardRef(c);return h[JB]=t,h}function n8({layoutId:t}){const e=V.useContext(C_).id;return e&&t!==void 0?e+"-"+t:t}function r8(t,e){V.useContext(SR).strict}function i8(t){const e=xR(),{drag:n,layout:r}=e;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(t)||r!=null&&r.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function s8(t,e){if(typeof Proxy>"u")return Bg;const n=new Map,r=(a,l)=>Bg(a,l,t,e),i=(a,l)=>r(a,l);return new Proxy(i,{get:(a,l)=>l==="create"?r:(n.has(l)||n.set(l,Bg(l,void 0,t,e)),n.get(l))})}const o8=(t,e)=>e.isSVG??ew(t)?new M3(e):new R3(e,{allowProjection:t!==V.Fragment});class a8 extends Qs{constructor(e){super(e),e.animationState||(e.animationState=$3(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ap(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let l8=0;class u8 extends Qs{constructor(){super(...arguments),this.id=l8++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:l,custom:c}=this.node.getProps();if(typeof l=="string"){const h=Oo(this.node,l,c);if(h){const{transition:p,transitionEnd:m,...y}=h;for(const w in y)(a=this.node.getValue(w))==null||a.jump(y[w])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const c8={animation:{Feature:a8},exit:{Feature:u8}};function Fc(t){return{point:{x:t.pageX,y:t.pageY}}}const h8=t=>e=>q_(e)&&t(e,Fc(e));function ec(t,e,n,r){return vc(t,e,h8(n),r)}const bR=({current:t})=>t?t.ownerDocument.defaultView:null,qx=(t,e)=>Math.abs(t-e);function f8(t,e){const n=qx(t.x,e.x),r=qx(t.y,e.y);return Math.sqrt(n**2+r**2)}const Kx=new Set(["auto","scroll"]);class DR{constructor(e,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:a=!1,distanceThreshold:l=3,element:c}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=T=>{this.handleScroll(T.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=vf(this.lastRawMoveEventInfo,this.transformPagePoint));const T=Wg(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,P=f8(T.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!P)return;const{point:R}=T,{timestamp:b}=Jt;this.history.push({...R,timestamp:b});const{onStart:O,onMove:$}=this.handlers;x||(O&&O(this.lastMoveEvent,T),this.startEvent=this.lastMoveEvent),$&&$(this.lastMoveEvent,T)},this.handlePointerMove=(T,x)=>{this.lastMoveEvent=T,this.lastRawMoveEventInfo=x,this.lastMoveEventInfo=vf(x,this.transformPagePoint),rt.update(this.updatePoint,!0)},this.handlePointerUp=(T,x)=>{this.end();const{onEnd:P,onSessionEnd:R,resumeAnimation:b}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=Wg(T.type==="pointercancel"?this.lastMoveEventInfo:vf(x,this.transformPagePoint),this.history);this.startEvent&&P&&P(T,O),R&&R(T,O)},!q_(e))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=l,this.contextWindow=i||window;const h=Fc(e),p=vf(h,this.transformPagePoint),{point:m}=p,{timestamp:y}=Jt;this.history=[{...m,timestamp:y}];const{onSessionStart:w}=n;w&&w(e,Wg(p,this.history)),this.removeListeners=Lc(ec(this.contextWindow,"pointermove",this.handlePointerMove),ec(this.contextWindow,"pointerup",this.handlePointerUp),ec(this.contextWindow,"pointercancel",this.handlePointerUp)),c&&this.startScrollTracking(c)}startScrollTracking(e){let n=e.parentElement;for(;n;){const r=getComputedStyle(n);(Kx.has(r.overflowX)||Kx.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const r=e===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:i.x-n.x,y:i.y-n.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,i),rt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),qs(this.updatePoint)}}function vf(t,e){return e?{point:e(t.point)}:t}function Gx(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Wg({point:t},e){return{point:t,delta:Gx(t,NR(e)),offset:Gx(t,d8(e)),velocity:p8(e,.1)}}function d8(t){return t[0]}function NR(t){return t[t.length-1]}function p8(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=NR(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>$n(e)));)n--;if(!r)return{x:0,y:0};r===t[0]&&t.length>2&&i.timestamp-r.timestamp>$n(e)*2&&(r=t[1]);const a=tr(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const l={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function m8(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?ht(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?ht(n,t,r.max):Math.min(t,n)),t}function Yx(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function g8(t,{top:e,left:n,bottom:r,right:i}){return{x:Yx(t.x,n,i),y:Yx(t.y,e,r)}}function Qx(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function y8(t,e){return{x:Qx(t.x,e.x),y:Qx(t.y,e.y)}}function v8(t,e){let n=.5;const r=vn(t),i=vn(e);return i>r?n=mc(e.min,e.max-r,t.min):r>i&&(n=mc(t.min,t.max-i,e.min)),oi(0,1,n)}function _8(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const av=.35;function w8(t=av){return t===!1?t=0:t===!0&&(t=av),{x:Xx(t,"left","right"),y:Xx(t,"top","bottom")}}function Xx(t,e,n){return{min:Jx(t,e),max:Jx(t,n)}}function Jx(t,e){return typeof t=="number"?t:t[e]||0}const E8=new WeakMap;class T8{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Mt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const a=y=>{n&&this.snapToCursor(Fc(y).point),this.stopAnimation()},l=(y,w)=>{const{drag:T,dragPropagation:x,onDragStart:P}=this.getProps();if(T&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Yz(T),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qr(b=>{let O=this.getAxisMotionValue(b).get()||0;if(ii.test(O)){const{projection:$}=this.visualElement;if($&&$.layout){const U=$.layout.layoutBox[b];U&&(O=vn(U)*(parseFloat(O)/100))}}this.originPoint[b]=O}),P&&rt.update(()=>P(y,w),!1,!0),Jy(this.visualElement,"transform");const{animationState:R}=this.visualElement;R&&R.setActive("whileDrag",!0)},c=(y,w)=>{this.latestPointerEvent=y,this.latestPanInfo=w;const{dragPropagation:T,dragDirectionLock:x,onDirectionLock:P,onDrag:R}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:b}=w;if(x&&this.currentDirection===null){this.currentDirection=x8(b),this.currentDirection!==null&&P&&P(this.currentDirection);return}this.updateAxis("x",w.point,b),this.updateAxis("y",w.point,b),this.visualElement.render(),R&&rt.update(()=>R(y,w),!1,!0)},h=(y,w)=>{this.latestPointerEvent=y,this.latestPanInfo=w,this.stop(y,w),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>{const{dragSnapToOrigin:y}=this.getProps();(y||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new DR(e,{onSessionStart:a,onStart:l,onMove:c,onSessionEnd:h,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:bR(this.visualElement),element:this.visualElement.current})}stop(e,n){const r=e||this.latestPointerEvent,i=n||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!i||!r)return;const{velocity:l}=i;this.startAnimation(l);const{onDragEnd:c}=this.getProps();c&&rt.postRender(()=>c(r,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!_f(e,i,this.currentDirection))return;const a=this.getAxisMotionValue(e);let l=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(l=m8(l,this.constraints[e],this.elastic[e])),a.set(l)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,i=this.constraints;e&&Ga(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=g8(r.layoutBox,e):this.constraints=!1,this.elastic=w8(n),i!==this.constraints&&!Ga(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Qr(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=_8(r.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ga(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=x3(r,i.root,this.visualElement.getTransformPagePoint());let l=y8(i.layout.layoutBox,a);if(n){const c=n(E3(l));this.hasMutatedConstraints=!!c,c&&(l=Zk(c))}return l}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:l,onDragTransitionEnd:c}=this.getProps(),h=this.constraints||{},p=Qr(m=>{if(!_f(m,n,this.currentDirection))return;let y=h[m]||{};(l===!0||l===m)&&(y={min:0,max:0});const w=i?200:1e6,T=i?40:1e7,x={type:"inertia",velocity:r?e[m]:0,bounceStiffness:w,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...a,...y};return this.startAxisValueAnimation(m,x)});return Promise.all(p).then(c)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return Jy(this.visualElement,e),r.start($_(e,r,0,n,this.visualElement,!1))}stopAnimation(){Qr(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Qr(n=>{const{drag:r}=this.getProps();if(!_f(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:l,max:c}=i.layout.layoutBox[n],h=a.get()||0;a.set(e[n]-ht(l,c,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Ga(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Qr(l=>{const c=this.getAxisMotionValue(l);if(c&&this.constraints!==!1){const h=c.get();i[l]=v8({min:h,max:h},this.constraints[l])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Qr(l=>{if(!_f(l,e,null))return;const c=this.getAxisMotionValue(l),{min:h,max:p}=this.constraints[l];c.set(ht(h,p,i[l]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;E8.set(this.visualElement,this);const e=this.visualElement.current,n=ec(e,"pointerdown",p=>{const{drag:m,dragListener:y=!0}=this.getProps(),w=p.target,T=w!==e&&t3(w);m&&y&&!T&&this.start(p)});let r;const i=()=>{const{dragConstraints:p}=this.getProps();Ga(p)&&p.current&&(this.constraints=this.resolveRefConstraints(),r||(r=S8(e,p.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,l=a.addEventListener("measure",i);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),rt.read(i);const c=vc(window,"resize",()=>this.scalePositionWithinConstraints()),h=a.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(Qr(y=>{const w=this.getAxisMotionValue(y);w&&(this.originPoint[y]+=p[y].translate,w.set(w.get()+p[y].translate))}),this.visualElement.render())});return()=>{c(),n(),l(),h&&h(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:l=av,dragMomentum:c=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:l,dragMomentum:c}}}function Zx(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function S8(t,e,n){const r=ox(t,Zx(n)),i=ox(e,Zx(n));return()=>{r(),i()}}function _f(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function x8(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class I8 extends Qs{constructor(e){super(e),this.removeGroupControls=nr,this.removeListeners=nr,this.controls=new T8(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||nr}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Hg=t=>(e,n)=>{t&&rt.update(()=>t(e,n),!1,!0)};class A8 extends Qs{constructor(){super(...arguments),this.removePointerDownListener=nr}onPointerDown(e){this.session=new DR(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:bR(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Hg(e),onStart:Hg(n),onMove:Hg(r),onEnd:(a,l)=>{delete this.session,i&&rt.postRender(()=>i(a,l))}}}mount(){this.removePointerDownListener=ec(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let qg=!1;class C8 extends V.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=e;a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),qg&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Kf.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,{projection:l}=r;return l&&(l.isPresent=a,e.layoutDependency!==n&&l.setOptions({...l.options,layoutDependency:n}),qg=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==a?l.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?l.promote():l.relegate()||rt.postRender(()=>{const c=l.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),H_.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;qg=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function VR(t){const[e,n]=ER(),r=V.useContext(C_);return F.jsx(C8,{...t,layoutGroup:r,switchLayoutGroup:V.useContext(kR),isPresent:e,safeToRemove:n})}const P8={pan:{Feature:A8},drag:{Feature:I8,ProjectionNode:wR,MeasureLayout:VR}};function e1(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,a=r[i];a&&rt.postRender(()=>a(e,Fc(e)))}class k8 extends Qs{mount(){const{current:e}=this.node;e&&(this.unmount=Xz(e,(n,r)=>(e1(this.node,r,"Start"),i=>e1(this.node,i,"End"))))}unmount(){}}class R8 extends Qs{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Lc(vc(this.node.current,"focus",()=>this.onFocus()),vc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function t1(t,e,n){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),a=r[i];a&&rt.postRender(()=>a(e,Fc(e)))}class b8 extends Qs{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=r3(e,(i,a)=>(t1(this.node,a,"Start"),(l,{success:c})=>t1(this.node,l,c?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const lv=new WeakMap,Kg=new WeakMap,D8=t=>{const e=lv.get(t.target);e&&e(t)},N8=t=>{t.forEach(D8)};function V8({root:t,...e}){const n=t||document;Kg.has(n)||Kg.set(n,{});const r=Kg.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(N8,{root:t,...e})),r[i]}function L8(t,e,n){const r=V8(e);return lv.set(t,n),r.observe(t),()=>{lv.delete(t),r.unobserve(t)}}const M8={some:0,all:1};class O8 extends Qs{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var h;(h=this.stopObserver)==null||h.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=e,l={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:M8[i]},c=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,a&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:w}=this.node.getProps(),T=m?y:w;T&&T(p)};this.stopObserver=L8(this.node.current,l,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(F8(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function F8({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const j8={inView:{Feature:O8},tap:{Feature:b8},focus:{Feature:R8},hover:{Feature:k8}},U8={layout:{ProjectionNode:wR,MeasureLayout:VR}},$8={...c8,...j8,...P8,...U8},ai=s8($8,o8),z8=se(ai.button)`
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

  opacity: ${t=>t.disabled?.6:1};
  pointer-events: ${t=>t.disabled?"none":"auto"};
`,jd=({title:t,onClick:e,isActive:n=!0,variant:r="primary",children:i,size:a,width:l,minWidth:c,fontSize:h,icon:p,disabled:m,type:y="button"})=>F.jsxs(z8,{"data-testid":"comp-kid-button",$variant:n?r:"sub",$size:a,$width:l,$minWidth:c,$fontSize:h,onClick:e,disabled:m,type:y,whileHover:m?{}:{scale:1.02,y:-1},whileTap:{scale:.98},initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:400,damping:20},children:[p,t,i]}),tc=se.p`
  font-family: ${t=>t.theme.fonts.primary};
  font-size: ${({$fontSize:t,fontSize:e,theme:n})=>{const r=t||e,i=r;return n.fontSize[i]||r||n.fontSize.base}};
  font-weight: ${({$fontWeight:t,fontWeight:e})=>t||e||"700"};
  color: ${({$color:t,color:e,theme:n})=>{const r=t||e,i=r;return n.colors[i]||r||n.colors.textPrimary}};
  text-align: ${({$textAlign:t,textAlign:e})=>t||e||"center"};
  margin: ${({$margin:t,margin:e})=>t||e||"0"};
  padding: ${({$padding:t,padding:e})=>t||e||"0"};
  width: ${({$width:t,width:e})=>t||e||"100%"};
  line-height: 1.5;
  display: block;

  @media (max-width: 768px) {
    font-size: ${({$mobileFontSize:t,$fontSize:e,fontSize:n,theme:r})=>{const i=e||n,a=t,l=a,c=i;return r.fontSize[l]||r.fontSize[c]||a||i||r.fontSize.sm}};
  }
`,B8=se.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 40px;
  text-align: center;
  background-color: ${t=>t.theme.colors.background};
`,W8=se(ai.div)`
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
`,H8=se.div`
  color: ${t=>t.theme.colors.accent};
  margin-bottom: 8px;
`;class q8 extends V.Component{constructor(){super(...arguments);fE(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n,r){console.error("Uncaught error:",n,r)}render(){return this.state.hasError?F.jsx(B8,{children:F.jsxs(W8,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",damping:20},children:[F.jsx(H8,{children:F.jsx(v9,{size:80,strokeWidth:2.5})}),F.jsx(tc,{fontSize:"2.5rem",color:"primary",fontWeight:900,children:"Oops! 😅"}),F.jsx(tc,{fontSize:"xl",color:"textSecondary",fontWeight:"bold",children:"Something went wrong!"}),F.jsx(tc,{fontSize:"lg",color:"textSecondary",children:"Don't worry, even magic balloons pop sometimes! Let's try going back home to start fresh."}),F.jsx(jd,{title:"Return to Home",variant:"primary",onClick:()=>{window.location.hash="/",window.location.reload()},minWidth:"240px"})]})}):this.props.children}}const K8=se(ai.div)`
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
`,G8=se(ai.div)`
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
`,Y8=se.div`
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
`,Q8=se.div`
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
`,X8=se.h1`
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
`,J8=se.h2`
  font-family: ${t=>t.theme.fonts.secondary};
  font-size: 1.2rem;
  color: #475569 !important; /* Fixed dark slate */
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,Z8=se.div`
  font-family: ${t=>t.theme.fonts.secondary};
  font-size: ${t=>t.theme.fontSize.sm};
  color: #64748b !important; /* Fixed slate */
  z-index: 1;
`,eW=se.div`
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
`,tW=se.p`
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
`;se.div`
  margin-top: 10px;
  margin-bottom: 20px;
  z-index: 1;
`;se.div`
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
`;const nW=se.div`
  display: flex;
  justify-content: space-between;
  align-items: center; /* Center align for better balance */
  width: 100%;
  margin-top: 20px;
  padding: 0 10px 0;
  z-index: 1;
`;se.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  min-width: 80px;
  width: ${t=>t.fullWidth?"100%":"auto"};
`;const n1=se.div`
  font-weight: 900;
  font-size: ${t=>t.$variant==="small"?"0.8rem":t.$variant==="tiny"?"0.6rem":"1rem"};
  color: #1e293b !important;
  font-family: ${t=>t.theme.fonts.secondary};
  opacity: 1 !important;
  letter-spacing: ${t=>t.$variant==="tiny"?"1px":"normal"};
`,rW=se.div`
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
`,iW=se.button`
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
`;function sW(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}const oW=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function Ms(t){const e=[];for(let n=0,r=t.length;n<r;n++)e.push(t[n]);return e}let za=null;function LR(t={}){return za||(t.includeStyleProperties?(za=t.includeStyleProperties,za):(za=Ms(window.getComputedStyle(document.documentElement)),za))}function Ud(t,e){const r=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return r?parseFloat(r.replace("px","")):0}function aW(t){const e=Ud(t,"border-left-width"),n=Ud(t,"border-right-width");return t.clientWidth+e+n}function lW(t){const e=Ud(t,"border-top-width"),n=Ud(t,"border-bottom-width");return t.clientHeight+e+n}function MR(t,e={}){const n=e.width||aW(t),r=e.height||lW(t);return{width:n,height:r}}function uW(){let t,e;try{e=process}catch{}const n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const Fn=16384;function cW(t){(t.width>Fn||t.height>Fn)&&(t.width>Fn&&t.height>Fn?t.width>t.height?(t.height*=Fn/t.width,t.width=Fn):(t.width*=Fn/t.height,t.height=Fn):t.width>Fn?(t.height*=Fn/t.width,t.width=Fn):(t.width*=Fn/t.height,t.height=Fn))}function $d(t){return new Promise((e,n)=>{const r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>e(r))})},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t})}async function hW(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function fW(t,e,n){const r="http://www.w3.org/2000/svg",i=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return i.setAttribute("width",`${e}`),i.setAttribute("height",`${n}`),i.setAttribute("viewBox",`0 0 ${e} ${n}`),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("x","0"),a.setAttribute("y","0"),a.setAttribute("externalResourcesRequired","true"),i.appendChild(a),a.appendChild(t),hW(i)}const Cn=(t,e)=>{if(t instanceof e)return!0;const n=Object.getPrototypeOf(t);return n===null?!1:n.constructor.name===e.name||Cn(n,e)};function dW(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function pW(t,e){return LR(e).map(n=>{const r=t.getPropertyValue(n),i=t.getPropertyPriority(n);return`${n}: ${r}${i?" !important":""};`}).join(" ")}function mW(t,e,n,r){const i=`.${t}:${e}`,a=n.cssText?dW(n):pW(n,r);return document.createTextNode(`${i}{${a}}`)}function r1(t,e,n,r){const i=window.getComputedStyle(t,n),a=i.getPropertyValue("content");if(a===""||a==="none")return;const l=oW();try{e.className=`${e.className} ${l}`}catch{return}const c=document.createElement("style");c.appendChild(mW(l,n,i,r)),e.appendChild(c)}function gW(t,e,n){r1(t,e,":before",n),r1(t,e,":after",n)}const i1="application/font-woff",s1="image/jpeg",yW={woff:i1,woff2:i1,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:s1,jpeg:s1,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function vW(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function tw(t){const e=vW(t).toLowerCase();return yW[e]||""}function _W(t){return t.split(/,/)[1]}function uv(t){return t.search(/^(data:)/)!==-1}function wW(t,e){return`data:${e};base64,${t}`}async function OR(t,e,n){const r=await fetch(t,e);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const i=await r.blob();return new Promise((a,l)=>{const c=new FileReader;c.onerror=l,c.onloadend=()=>{try{a(n({res:r,result:c.result}))}catch(h){l(h)}},c.readAsDataURL(i)})}const Gg={};function EW(t,e,n){let r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?`[${e}]${r}`:r}async function nw(t,e,n){const r=EW(t,e,n.includeQueryParams);if(Gg[r]!=null)return Gg[r];n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let i;try{const a=await OR(t,n.fetchRequestInit,({res:l,result:c})=>(e||(e=l.headers.get("Content-Type")||""),_W(c)));i=wW(a,e)}catch(a){i=n.imagePlaceholder||"";let l=`Failed to fetch resource: ${t}`;a&&(l=typeof a=="string"?a:a.message),l&&console.warn(l)}return Gg[r]=i,i}async function TW(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):$d(e)}async function SW(t,e){if(t.currentSrc){const a=document.createElement("canvas"),l=a.getContext("2d");a.width=t.clientWidth,a.height=t.clientHeight,l==null||l.drawImage(t,0,0,a.width,a.height);const c=a.toDataURL();return $d(c)}const n=t.poster,r=tw(n),i=await nw(n,r,e);return $d(i)}async function xW(t,e){var n;try{if(!((n=t==null?void 0:t.contentDocument)===null||n===void 0)&&n.body)return await kp(t.contentDocument.body,e,!0)}catch{}return t.cloneNode(!1)}async function IW(t,e){return Cn(t,HTMLCanvasElement)?TW(t):Cn(t,HTMLVideoElement)?SW(t,e):Cn(t,HTMLIFrameElement)?xW(t,e):t.cloneNode(FR(t))}const AW=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT",FR=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SVG";async function CW(t,e,n){var r,i;if(FR(e))return e;let a=[];return AW(t)&&t.assignedNodes?a=Ms(t.assignedNodes()):Cn(t,HTMLIFrameElement)&&(!((r=t.contentDocument)===null||r===void 0)&&r.body)?a=Ms(t.contentDocument.body.childNodes):a=Ms(((i=t.shadowRoot)!==null&&i!==void 0?i:t).childNodes),a.length===0||Cn(t,HTMLVideoElement)||await a.reduce((l,c)=>l.then(()=>kp(c,n)).then(h=>{h&&e.appendChild(h)}),Promise.resolve()),e}function PW(t,e,n){const r=e.style;if(!r)return;const i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):LR(n).forEach(a=>{let l=i.getPropertyValue(a);a==="font-size"&&l.endsWith("px")&&(l=`${Math.floor(parseFloat(l.substring(0,l.length-2)))-.1}px`),Cn(t,HTMLIFrameElement)&&a==="display"&&l==="inline"&&(l="block"),a==="d"&&e.getAttribute("d")&&(l=`path(${e.getAttribute("d")})`),r.setProperty(a,l,i.getPropertyPriority(a))})}function kW(t,e){Cn(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),Cn(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function RW(t,e){if(Cn(t,HTMLSelectElement)){const n=e,r=Array.from(n.children).find(i=>t.value===i.getAttribute("value"));r&&r.setAttribute("selected","")}}function bW(t,e,n){return Cn(e,Element)&&(PW(t,e,n),gW(t,e,n),kW(t,e),RW(t,e)),e}async function DW(t,e){const n=t.querySelectorAll?t.querySelectorAll("use"):[];if(n.length===0)return t;const r={};for(let a=0;a<n.length;a++){const c=n[a].getAttribute("xlink:href");if(c){const h=t.querySelector(c),p=document.querySelector(c);!h&&p&&!r[c]&&(r[c]=await kp(p,e,!0))}}const i=Object.values(r);if(i.length){const a="http://www.w3.org/1999/xhtml",l=document.createElementNS(a,"svg");l.setAttribute("xmlns",a),l.style.position="absolute",l.style.width="0",l.style.height="0",l.style.overflow="hidden",l.style.display="none";const c=document.createElementNS(a,"defs");l.appendChild(c);for(let h=0;h<i.length;h++)c.appendChild(i[h]);t.appendChild(l)}return t}async function kp(t,e,n){return!n&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(r=>IW(r,e)).then(r=>CW(t,r,e)).then(r=>bW(t,r,e)).then(r=>DW(r,e))}const jR=/url\((['"]?)([^'"]+?)\1\)/g,NW=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,VW=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function LW(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function MW(t){const e=[];return t.replace(jR,(n,r,i)=>(e.push(i),n)),e.filter(n=>!uv(n))}async function OW(t,e,n,r,i){try{const a=n?sW(e,n):e,l=tw(e);let c;return i||(c=await nw(a,l,r)),t.replace(LW(e),`$1${c}$3`)}catch{}return t}function FW(t,{preferredFontFormat:e}){return e?t.replace(VW,n=>{for(;;){const[r,,i]=NW.exec(n)||[];if(!i)return"";if(i===e)return`src: ${r};`}}):t}function UR(t){return t.search(jR)!==-1}async function $R(t,e,n){if(!UR(t))return t;const r=FW(t,n);return MW(r).reduce((a,l)=>a.then(c=>OW(c,l,e,n)),Promise.resolve(r))}async function Ba(t,e,n){var r;const i=(r=e.style)===null||r===void 0?void 0:r.getPropertyValue(t);if(i){const a=await $R(i,null,n);return e.style.setProperty(t,a,e.style.getPropertyPriority(t)),!0}return!1}async function jW(t,e){await Ba("background",t,e)||await Ba("background-image",t,e),await Ba("mask",t,e)||await Ba("-webkit-mask",t,e)||await Ba("mask-image",t,e)||await Ba("-webkit-mask-image",t,e)}async function UW(t,e){const n=Cn(t,HTMLImageElement);if(!(n&&!uv(t.src))&&!(Cn(t,SVGImageElement)&&!uv(t.href.baseVal)))return;const r=n?t.src:t.href.baseVal,i=await nw(r,tw(r),e);await new Promise((a,l)=>{t.onload=a,t.onerror=e.onImageErrorHandler?(...h)=>{try{a(e.onImageErrorHandler(...h))}catch(p){l(p)}}:l;const c=t;c.decode&&(c.decode=a),c.loading==="lazy"&&(c.loading="eager"),n?(t.srcset="",t.src=i):t.href.baseVal=i})}async function $W(t,e){const r=Ms(t.childNodes).map(i=>zR(i,e));await Promise.all(r).then(()=>t)}async function zR(t,e){Cn(t,Element)&&(await jW(t,e),await UW(t,e),await $W(t,e))}function zW(t,e){const{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);const r=e.style;return r!=null&&Object.keys(r).forEach(i=>{n[i]=r[i]}),t}const o1={};async function a1(t){let e=o1[t];if(e!=null)return e;const r=await(await fetch(t)).text();return e={url:t,cssText:r},o1[t]=e,e}async function l1(t,e){let n=t.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,a=(n.match(/url\([^)]+\)/g)||[]).map(async l=>{let c=l.replace(r,"$1");return c.startsWith("https://")||(c=new URL(c,t.url).href),OR(c,e.fetchRequestInit,({result:h})=>(n=n.replace(l,`url(${h})`),[l,h]))});return Promise.all(a).then(()=>n)}function u1(t){if(t==null)return[];const e=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=t.replace(n,"");const i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const h=i.exec(r);if(h===null)break;e.push(h[0])}r=r.replace(i,"");const a=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,l="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",c=new RegExp(l,"gi");for(;;){let h=a.exec(r);if(h===null){if(h=c.exec(r),h===null)break;a.lastIndex=c.lastIndex}else c.lastIndex=a.lastIndex;e.push(h[0])}return e}async function BW(t,e){const n=[],r=[];return t.forEach(i=>{if("cssRules"in i)try{Ms(i.cssRules||[]).forEach((a,l)=>{if(a.type===CSSRule.IMPORT_RULE){let c=l+1;const h=a.href,p=a1(h).then(m=>l1(m,e)).then(m=>u1(m).forEach(y=>{try{i.insertRule(y,y.startsWith("@import")?c+=1:i.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:y,error:w})}})).catch(m=>{console.error("Error loading remote css",m.toString())});r.push(p)}})}catch(a){const l=t.find(c=>c.href==null)||document.styleSheets[0];i.href!=null&&r.push(a1(i.href).then(c=>l1(c,e)).then(c=>u1(c).forEach(h=>{l.insertRule(h,l.cssRules.length)})).catch(c=>{console.error("Error loading remote stylesheet",c)})),console.error("Error inlining remote css file",a)}}),Promise.all(r).then(()=>(t.forEach(i=>{if("cssRules"in i)try{Ms(i.cssRules||[]).forEach(a=>{n.push(a)})}catch(a){console.error(`Error while reading CSS rules from ${i.href}`,a)}}),n))}function WW(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>UR(e.style.getPropertyValue("src")))}async function HW(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=Ms(t.ownerDocument.styleSheets),r=await BW(n,e);return WW(r)}function BR(t){return t.trim().replace(/["']/g,"")}function qW(t){const e=new Set;function n(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(a=>{e.add(BR(a))}),Array.from(r.children).forEach(a=>{a instanceof HTMLElement&&n(a)})}return n(t),e}async function KW(t,e){const n=await HW(t,e),r=qW(t);return(await Promise.all(n.filter(a=>r.has(BR(a.style.fontFamily))).map(a=>{const l=a.parentStyleSheet?a.parentStyleSheet.href:null;return $R(a.cssText,l,e)}))).join(`
`)}async function GW(t,e){const n=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await KW(t,e);if(n){const r=document.createElement("style"),i=document.createTextNode(n);r.appendChild(i),t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r)}}async function YW(t,e={}){const{width:n,height:r}=MR(t,e),i=await kp(t,e,!0);return await GW(i,e),await zR(i,e),zW(i,e),await fW(i,n,r)}async function QW(t,e={}){const{width:n,height:r}=MR(t,e),i=await YW(t,e),a=await $d(i),l=document.createElement("canvas"),c=l.getContext("2d"),h=e.pixelRatio||uW(),p=e.canvasWidth||n,m=e.canvasHeight||r;return l.width=p*h,l.height=m*h,e.skipAutoScale||cW(l),l.style.width=`${p}`,l.style.height=`${m}`,e.backgroundColor&&(c.fillStyle=e.backgroundColor,c.fillRect(0,0,l.width,l.height)),c.drawImage(a,0,0,l.width,l.height),l}async function WR(t,e={}){return(await QW(t,e)).toDataURL()}var Gf={exports:{}},XW=Gf.exports,c1;function JW(){return c1||(c1=1,function(t,e){(function(n,r){t.exports=r()})(XW,function(){return function n(r,i,a){var l=window,c="application/octet-stream",h=a||c,p=r,m=!i&&!a&&p,y=document.createElement("a"),w=function(C){return String(C)},T=l.Blob||l.MozBlob||l.WebKitBlob||w,x=i||"download",P,R;if(T=T.call?T.bind(l):Blob,String(this)==="true"&&(p=[p,h],h=p[0],p=p[1]),m&&m.length<2048&&(x=m.split("/").pop().split("?")[0],y.href=m,y.href.indexOf(m)!==-1)){var b=new XMLHttpRequest;return b.open("GET",m,!0),b.responseType="blob",b.onload=function(C){n(C.target.response,x,c)},setTimeout(function(){b.send()},0),b}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(p))if(p.length>1024*1024*1.999&&T!==w)p=H(p),h=p.type||c;else return navigator.msSaveBlob?navigator.msSaveBlob(H(p),x):X(p);else if(/([\x80-\xff])/.test(p)){var O=0,$=new Uint8Array(p.length),U=$.length;for(O;O<U;++O)$[O]=p.charCodeAt(O);p=new T([$],{type:h})}P=p instanceof T?p:new T([p],{type:h});function H(C){var I=C.split(/[:;,]/),k=I[1],D=I[2]=="base64"?atob:decodeURIComponent,M=D(I.pop()),B=M.length,N=0,Re=new Uint8Array(B);for(N;N<B;++N)Re[N]=M.charCodeAt(N);return new T([Re],{type:k})}function X(C,I){if("download"in y)return y.href=C,y.setAttribute("download",x),y.className="download-js-link",y.innerHTML="downloading...",y.style.display="none",document.body.appendChild(y),setTimeout(function(){y.click(),document.body.removeChild(y),I===!0&&setTimeout(function(){l.URL.revokeObjectURL(y.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(C)&&(C="data:"+C.replace(/^data:([\w\/\-\+]+)/,c)),window.open(C)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=C),!0;var k=document.createElement("iframe");document.body.appendChild(k),!I&&/^data:/.test(C)&&(C="data:"+C.replace(/^data:([\w\/\-\+]+)/,c)),k.src=C,setTimeout(function(){document.body.removeChild(k)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(P,x);if(l.URL)X(l.URL.createObjectURL(P),!0);else{if(typeof P=="string"||P.constructor===w)try{return X("data:"+h+";base64,"+l.btoa(P))}catch{return X("data:"+h+","+encodeURIComponent(P))}R=new FileReader,R.onload=function(C){X(this.result)},R.readAsDataURL(P)}return!0}})}(Gf)),Gf.exports}var ZW=JW();const eH=O1(ZW),tH=async(t,e)=>{const n=document.getElementById(t);if(!n)return;const r=n.style.width;n.style.width="1000px";try{await document.fonts.ready,await new Promise(a=>setTimeout(a,300));const i=await WR(n,{cacheBust:!0,backgroundColor:"#ffffff",pixelRatio:2,canvasWidth:1200,canvasHeight:900});eH(i,`Kiddoo_Certificate_${e}.png`)}finally{n.style.width=r}},nH=async(t,e,n)=>{const r=document.getElementById(t);if(!r)return;const i=r.style.width;r.style.width="1000px";try{await document.fonts.ready,await new Promise(m=>setTimeout(m,300));const a=await WR(r,{cacheBust:!0,backgroundColor:"#ffffff",pixelRatio:2,canvasWidth:1200,canvasHeight:900}),c=await(await fetch(a)).blob(),h=new File([c],`Kiddoo_Certificate_${e}.png`,{type:"image/png"}),p={title:"My Kiddoo Achievement!",text:`I just achieved a score of ${n}/10 in the ${e} test on Kiddoo! 🏆 Try it yourself at: https://dnshariprasad.github.io/kiddoo/`,files:[h]};if(navigator.canShare&&navigator.canShare({files:[h]}))await navigator.share(p);else{const y=`${window.location.origin+window.location.pathname}#/?certName=${encodeURIComponent(e)}&certScore=${n}`;if(navigator.share)await navigator.share({title:p.title,text:p.text,url:y});else return await navigator.clipboard.writeText(`${p.text} Check it out here: ${y}`),"copied"}}finally{r.style.width=i}return"shared"},rH=(t=new Date)=>t.toLocaleDateString(),iH=(t=new Date)=>t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",timeZoneName:"short"}),sH=()=>{const t=new Date().toISOString().split("T")[0].replace(/-/g,""),e=Date.now().toString().slice(-6),n=Math.random().toString(36).substring(7).toUpperCase();return`KIDDOO-${t}-${e}-${n}`},oH=({onClose:t,challengeName:e,score:n,level:r,timeTaken:i})=>{const a=yA.en,l=Pi(y=>y.alphabet.userName),[c,h]=er.useState(!1),p=async()=>{h(!0);try{await tH("certificate-content",e)}catch(y){console.error("Error generating image:",y),window.print()}finally{h(!1)}},m=async()=>{h(!0);try{await nH("certificate-content",e,n)==="copied"&&alert(a.cert_copied)}catch(y){console.error("Error sharing:",y),alert(a.cert_failed)}finally{h(!1)}};return F.jsx(K8,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:F.jsxs(G8,{initial:{scale:.8,y:50},animate:{scale:1,y:0},exit:{scale:.8,y:50},onClick:y=>y.stopPropagation(),children:[F.jsx(iW,{onClick:t,title:"Close",className:"no-print",children:F.jsx(KP,{size:24})}),F.jsxs(Y8,{id:"certificate-content",children:[F.jsx(Q8,{}),F.jsx(X8,{children:a.cert_pro}),F.jsx(J8,{children:a.cert_award}),F.jsx(Z8,{children:a.cert_belongs}),F.jsxs(eW,{children:[F.jsx(L9,{size:48,color:"#6366f1"}),l||"Super Star"]}),F.jsxs(tW,{children:[a.cert_legend," ",F.jsx("b",{children:e})," ",a.cert_challenge,r?` (${r} ${a.cert_level})`:"","! ",a.cert_smashed," ",F.jsxs("b",{children:[n,"/10"]}),i?F.jsxs(F.Fragment,{children:[" ",a.cert_inJust," ",F.jsx("b",{children:i})]}):"","! ",a.cert_keepAwesome]}),F.jsxs(nW,{children:[F.jsxs(n1,{$variant:"small",children:[rH()," | ",iH()]}),F.jsx(n1,{$variant:"tiny",children:sH()})]})]}),F.jsxs(rW,{className:"no-print",children:[F.jsx(jd,{title:c?a.cert_generating:a.cert_download,variant:"primary",onClick:p,icon:c?F.jsx(x9,{size:20,className:"animate-spin"}):F.jsx(w9,{size:20})}),F.jsx(jd,{title:a.cert_share,variant:"secondary",onClick:m,icon:F.jsx(qP,{size:20})})]})]})})},aH=()=>{const t=Rr(),e=dv(),[n,r]=V.useState(null);return V.useEffect(()=>{const i=new URLSearchParams(t.search),a=i.get("certName"),l=i.get("certScore");a&&l&&r({name:a,score:parseInt(l,10)})},[t]),n?F.jsx(TR,{children:F.jsx(oH,{onClose:()=>{r(null),e(t.pathname,{replace:!0})},challengeName:n.name,score:n.score})}):null},Ne={primary:"#6366F1",primaryDark:"#4F46E5",primaryLight:"#818CF8",onPrimary:"#FFFFFF",primaryContainer:"#EEF2FF",primaryContainerDark:"#312E81",secondary:"#6366F1",onSecondary:"#FFFFFF",accent:"#6366F1",accentLight:"#FF7675",success:"#10B981",successDark:"#34D399",warning:"#F59E0B",warningDark:"#FBBF24",error:"#EF4444",background:"#F8FAFC",backgroundDark:"#0F172A",surface:"#FFFFFF",surfaceDark:"#1E293B",surfaceVariant:"#F1F5F9",surfaceVariantDark:"#334155",textPrimary:"#1E293B",textPrimaryDark:"#F1F5F9",textSecondary:"#64748B",textSecondaryDark:"#94A3B8",border:"#E2E8F0",borderDark:"#334155",borderLight:"#F0F0F0",shadow:"rgba(99, 102, 241, 0.1)",shadowDark:"rgba(0, 0, 0, 0.3)",cellFixedBg:"#F8F9FA",cellFixedText:"#636E72",tipBoxBg:"rgba(99, 102, 241, 0.05)",operator:"#FF7675",equalSign:"#6366F1",questionMark:"#DFE6E9",gold:"#FFD700",goldDark:"#D97706",goldLight:"#FDE68A",slate:"#94A3B8",slateDark:"#475569",slateLight:"#E2E8F0",math:"#6366F1",english:"#6366F1",hindi:"#6366F1"},lH={primary:"'Nunito', sans-serif",secondary:"'Quicksand', sans-serif"},uH={small:"12px",medium:"20px",large:"28px",round:"50%"},cH={sm:"0 2px 4px rgba(0,0,0,0.05)",md:"0 4px 12px rgba(0,0,0,0.08)",lg:"0 8px 24px rgba(0,0,0,0.12)"},hH={small:{xs:"0.75rem",sm:"0.85rem",base:"0.9rem",md:"1rem",lg:"1.2rem",xl:"1.5rem",xxl:"2rem",huge:"3rem"},medium:{xs:"0.85rem",sm:"0.95rem",base:"1rem",md:"1.2rem",lg:"1.5rem",xl:"2rem",xxl:"2.5rem",huge:"4rem"},large:{xs:"1rem",sm:"1.1rem",base:"1.2rem",md:"1.5rem",lg:"2rem",xl:"2.5rem",xxl:"3.5rem",huge:"6rem"}},HR={fonts:lH,borderRadius:uH,shadows:cH,fontSizes:hH},fH={...HR,colors:{primary:Ne.primary,onPrimary:Ne.onPrimary,primaryContainer:Ne.primaryContainer,secondary:Ne.secondary,onSecondary:Ne.onSecondary,accent:Ne.accent,success:Ne.success,warning:Ne.warning,math:Ne.math,english:Ne.english,hindi:Ne.hindi,background:Ne.background,surface:Ne.surface,surfaceVariant:Ne.surfaceVariant,textPrimary:Ne.textPrimary,textSecondary:Ne.textSecondary,border:Ne.border,shadow:Ne.shadow,cellFixedBg:Ne.cellFixedBg,cellFixedText:Ne.cellFixedText,tipBoxBg:Ne.tipBoxBg}},dH={...HR,colors:{primary:Ne.primaryLight,onPrimary:Ne.onPrimary,primaryContainer:Ne.primaryContainerDark,secondary:Ne.primaryLight,onSecondary:Ne.onPrimary,accent:Ne.primaryLight,success:Ne.successDark,warning:Ne.warningDark,math:Ne.primaryLight,english:Ne.primaryLight,hindi:Ne.primaryLight,background:Ne.backgroundDark,surface:Ne.surfaceDark,surfaceVariant:Ne.surfaceVariantDark,textPrimary:Ne.textPrimaryDark,textSecondary:Ne.textSecondaryDark,border:Ne.borderDark,shadow:Ne.shadowDark,cellFixedBg:Ne.surfaceVariantDark,cellFixedText:Ne.textSecondaryDark,tipBoxBg:"rgba(255, 255, 255, 0.05)"}},pH=E2`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;Al`
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`;Al`
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`;Al`
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
`;const mH=w2`
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
    display: flex;
    flex-direction: column;
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
`,rw=se.div`
  background: ${t=>t.theme.colors.surfaceVariant}40;
  background-image: linear-gradient(
    90deg,
    ${t=>t.theme.colors.surfaceVariant}40 0%,
    ${t=>t.theme.colors.surfaceVariant}80 50%,
    ${t=>t.theme.colors.surfaceVariant}40 100%
  );
  background-size: 200% 100%;
  animation: ${pH} 1.5s infinite;
  border-radius: 12px;
`,N7=se.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`,qR=se.div`
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
`,V7=se.input.attrs({onFocus:t=>{setTimeout(()=>{t.target.scrollIntoView({behavior:"smooth",block:"center"})},300)}})`
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
`,L7=se.span`
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
`;se.h4`
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
`;se.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;const gH=se.div`
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
`;se.div`
  padding: ${t=>t.padding||"20px"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;se.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;se.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
  width: 100%;
  max-width: 400px;
`;se.li`
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
`;se.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;se.div`
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
`;se.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;se.div`
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
  padding: 15px 30px;
  margin-bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 992px) {
    height: auto;
    min-height: 80px;
    padding: 10px 15px;
    margin-bottom: 0;
  }
`;se(ai.button)`
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
`;const M7=se.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  gap: 4px;
`,O7=se.h1`
  font-family: ${t=>t.theme.fonts.primary};
  font-size: ${t=>t.theme.fontSize.lg};
  font-weight: 800;
  color: ${t=>t.theme.colors.primary};
  margin: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: -0.2px;
  text-align: center;
  position: relative;

  &::after {
    display: none;
  }
`,F7=se.p`
  font-family: ${t=>t.theme.fonts.secondary};
  font-size: ${t=>t.theme.fontSize.sm};
  color: ${t=>t.theme.colors.textSecondary};
  margin: 0;
  line-height: 1;
  opacity: 0.9;
  max-width: 600px;
  text-align: center;
  font-weight: 500;
`,yH=se(qR)`
  background: ${t=>t.theme.colors.surface};
  border: 1px solid ${t=>t.theme.colors.primary}20;
  max-width: none;
  padding: 15px 25px;

  &:hover {
    transform: translateY(-4px);
  }
`,vH=se(qR)`
  /* This represents the primary educational content module */
`,j7=se(vH)`
  text-align: center;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 32px 40px 16px !important;
  gap: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    min-height: 300px;
    padding: 32px 15px 16px !important;
    gap: 16px;
  }
`,_H=se(ai.span)`
  font-size: ${t=>t.theme.fontSize.lg};
`,U7=se(_H)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,$7=se.span`
  position: absolute;
  font-size: 0.7rem;
  font-weight: 900;
  color: #1e293b;
  margin-top: 2px;
`,z7=se.span`
  font-size: 1.5rem;
`,B7=se.span`
  margin-left: 5px;
  font-weight: 800;
  color: #ffd700;
`,W7=se(ai.div)`
  margin-top: 16px;
`,wH=se(yH)`
  /* This represents the configuration/settings module */
`;se(wH)`
  /* This represents the configuration/settings module */
`;const EH=se.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
  }
`,H7=se(EH)`
  margin-bottom: 16px;
`,q7=se.div`
  display: grid;
  grid-template-columns: 3fr 1.2fr;
  gap: 25px;
  width: 100%;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;se.div`
  display: contents;
`;se.div`
  display: contents;
`;const K7=se.div`
  opacity: ${t=>t.$disabled?.5:1};
  pointer-events: ${t=>t.$disabled?"none":"auto"};
`,G7=se.h4`
  color: ${t=>t.theme.colors.primary};
  font-family: ${t=>t.theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`,Y7=se.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
  margin: 8px 0 0;
  box-sizing: border-box;
`,Q7=se.label`
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
`,X7=se.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  background: transparent;
`,J7=se(ai.div)`
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
`,Z7=se.button`
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
`,eq=se.label`
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
`,tq=se.input`
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
`,nq=se.div`
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
`,TH=se(rw)`
  width: 300px;
  height: 48px;
  margin-bottom: 12px;
`,SH=se(rw)`
  width: 500px;
  height: 24px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 90%;
  }
`,Yg=se(rw)`
  width: 100%;
  height: 400px;
  border-radius: 28px;
`,xH=se.div`
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
`,KR=()=>F.jsx(gH,{children:F.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",marginTop:"40px"},children:[F.jsx(TH,{}),F.jsx(SH,{}),F.jsxs(xH,{children:[F.jsx(Yg,{}),F.jsx(Yg,{}),F.jsx(Yg,{})]})]})}),IH=({children:t})=>{const e=Pi(a=>a.alphabet.theme),n=Pi(a=>a.alphabet.fontSizeLevel),r=e==="dark"?dH:fH,i={...r,fontSize:r.fontSizes[n]};return F.jsxs(y2,{theme:i,children:[F.jsx(mH,{}),t]})},AH=({children:t})=>{const e=_v(),[n,r]=V.useState(!0);return V.useEffect(()=>_4(BP,a=>{e(HE(a?{uid:a.uid,email:a.email,displayName:a.displayName}:null)),r(!1)}),[e]),n?F.jsx(KR,{}):F.jsx(F.Fragment,{children:t})},CH=()=>F.jsx(KR,{}),PH=se(ai.div)`
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
`,kH=se(ai.div)`
  background: ${t=>t.theme.colors.surface};
  padding: 40px;
  border-radius: 32px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  border: 4px solid ${t=>t.theme.colors.primary}20;
`,RH=se.div`
  width: 80px;
  height: 80px;
  background: ${t=>t.theme.colors.primary}15;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 24px;
  color: ${t=>t.theme.colors.primary};
`,bH=se.input.attrs({onFocus:t=>{setTimeout(()=>{t.target.scrollIntoView({behavior:"smooth",block:"center"})},300)}})`
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
`,DH=({onComplete:t})=>{const[e,n]=V.useState(""),r=_v(),i=a=>{a==null||a.preventDefault(),e.trim()&&(r(cM(e.trim())),t())};return F.jsx(TR,{children:F.jsx(PH,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:F.jsxs(kH,{initial:{scale:.9,y:20,opacity:0},animate:{scale:1,y:0,opacity:1},transition:{type:"spring",damping:25,stiffness:300},children:[F.jsx(RH,{children:F.jsx(F9,{size:40})}),F.jsx(tc,{fontSize:"xl",color:"primary",fontWeight:"bold",children:"Hi there!"}),F.jsx(tc,{fontSize:"md",color:"textSecondary",margin:"8px 0 0",children:"What is your name?"}),F.jsxs("form",{onSubmit:i,children:[F.jsx(bH,{autoFocus:!0,placeholder:"Enter your name...",value:e,onChange:a=>n(a.target.value),maxLength:20}),F.jsx(jd,{title:"Start Learning! 🚀",onClick:i,variant:"primary",width:"100%",isActive:e.trim().length>0})]})]})})})},et=({children:t})=>{const e=Pi(a=>a.alphabet.user),n=Pi(a=>a.alphabet.userName),[r,i]=V.useState(!n);return e?!n&&r?F.jsx(DH,{onComplete:()=>i(!1)}):F.jsx(F.Fragment,{children:t}):F.jsx(nN,{to:"/login"})},NH=()=>{const{pathname:t}=Rr();return V.useEffect(()=>{window.scrollTo(0,0)},[t]),null},VH=V.lazy(()=>tt(()=>import("./index-Dfd_ia4-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]))),LH=V.lazy(()=>tt(()=>import("./index-HG6gkJ_F.js"),__vite__mapDeps([27,1,28,23,24,5,10,7,2,14,21,18]))),MH=V.lazy(()=>tt(()=>import("./index-lWtpt7I_.js"),__vite__mapDeps([29,19]))),OH=V.lazy(()=>tt(()=>import("./index-nQR5GfkN.js"),__vite__mapDeps([30,31,32,33,34,35,36,17]))),FH=V.lazy(()=>tt(()=>import("./index-BS7r9f_Q.js"),__vite__mapDeps([37,31,32,33,38,35,36,17,39,5,26]))),jH=V.lazy(()=>tt(()=>import("./index-Dep-JkuO.js"),__vite__mapDeps([40,31,32,38,41,35,36,17,12,11,10]))),UH=V.lazy(()=>tt(()=>import("./index-D4e8cizR.js"),__vite__mapDeps([42,35,36,17,32,41,14,25]))),$H=V.lazy(()=>tt(()=>import("./index-CHhQVzEd.js"),__vite__mapDeps([43,31,32,33,35,36,17,18]))),zH=V.lazy(()=>tt(()=>import("./index-D2GA_ZHd.js"),__vite__mapDeps([44,31,32,33,35,36,17,18]))),BH=V.lazy(()=>tt(()=>import("./index-Dh9oJK1B.js"),__vite__mapDeps([45,31,32,33,35,46,39,9]))),WH=V.lazy(()=>tt(()=>import("./index-CUBW12Y1.js"),__vite__mapDeps([47,31,32,33,35,48,39,8]))),HH=V.lazy(()=>tt(()=>import("./index-BTrJXviz.js"),__vite__mapDeps([49,31,32,33,35,46,39,9]))),qH=V.lazy(()=>tt(()=>import("./index-IfmKg3Vg.js"),__vite__mapDeps([50,31,32,33,35,46,39,9]))),KH=V.lazy(()=>tt(()=>import("./index-_OnPTunI.js"),__vite__mapDeps([51,31,32,33,35,39,22]))),GH=V.lazy(()=>tt(()=>import("./index-BsuC3-BU.js"),__vite__mapDeps([52,31,32,33,35,53,39,34,15]))),YH=V.lazy(()=>tt(()=>import("./index-BVqtdfT_.js"),__vite__mapDeps([54,31,32,33,35,53,39,34,15]))),QH=V.lazy(()=>tt(()=>import("./index-B9Gi3jjc.js"),__vite__mapDeps([55,31,32,33,35,53,39,34,15]))),XH=V.lazy(()=>tt(()=>import("./index-BxCzhY9d.js"),__vite__mapDeps([56,31,32,33,35,48,39,8]))),JH=V.lazy(()=>tt(()=>import("./index-CfY6o2bd.js"),__vite__mapDeps([57,31,32,33,35,48,39,8]))),ZH=V.lazy(()=>tt(()=>import("./index-Cm1SqbB4.js"),__vite__mapDeps([58,35,39,4,11]))),e7=V.lazy(()=>tt(()=>import("./index-CqliOpJ4.js"),__vite__mapDeps([59,31,32,33,35,60,39,16]))),t7=V.lazy(()=>tt(()=>import("./index-DX4A-8wY.js"),__vite__mapDeps([61,31,32,33,35,60,39,13]))),h1=V.lazy(()=>tt(()=>import("./index-BfzbrDOU.js"),__vite__mapDeps([62,32,38,41,35,36,17,63,11]))),n7=V.lazy(()=>tt(()=>import("./index-DMkxg6z8.js"),__vite__mapDeps([64,32,41,35,36,17,63,65,20]))),r7=V.lazy(()=>tt(()=>import("./index-GB5m5RjJ.js"),__vite__mapDeps([66,32,41,35,36,17,63,65,7]))),i7=V.lazy(()=>tt(()=>import("./index-DnbB-Bpw.js"),__vite__mapDeps([67,32,41,65,35,36,17,63,2]))),f1=V.lazy(()=>tt(()=>import("./index-Byr80xOG.js"),__vite__mapDeps([68,28,41,31,32,33,36,17,38,65,10,24,6,21,12,7,5,18,20,2]))),s7=V.lazy(()=>tt(()=>import("./index-CI6vCLHm.js"),__vite__mapDeps([69,35,31,32,33,15]))),o7=V.lazy(()=>tt(()=>import("./index-BQRopjPE.js"),__vite__mapDeps([70,28,35,3,9,23,24])));hD.createRoot(document.getElementById("root")).render(F.jsx(V.StrictMode,{children:F.jsx(JN,{store:_M,children:F.jsx(IH,{children:F.jsx(q8,{children:F.jsxs(PN,{children:[F.jsx(NH,{}),F.jsxs(AH,{children:[F.jsx(W9,{}),F.jsx(aH,{}),F.jsx(V.Suspense,{fallback:F.jsx(CH,{}),children:F.jsxs(iN,{children:[F.jsx(qe,{path:"/login",element:F.jsx(MH,{})}),F.jsxs(qe,{path:"/",element:F.jsx(et,{children:F.jsx(VH,{})}),children:[F.jsx(qe,{index:!0,element:F.jsx(LH,{})}),F.jsx(qe,{path:"alphabet",element:F.jsx(et,{children:F.jsx(OH,{})})}),F.jsx(qe,{path:"counting",element:F.jsx(et,{children:F.jsx(r7,{})})}),F.jsx(qe,{path:"learn_numbers",element:F.jsx(et,{children:F.jsx(s7,{})})}),F.jsx(qe,{path:"sight_words",element:F.jsx(et,{children:F.jsx(FH,{})})}),F.jsx(qe,{path:"spelling",element:F.jsx(et,{children:F.jsx(jH,{})})}),F.jsx(qe,{path:"comparison",element:F.jsx(et,{children:F.jsx(n7,{})})}),F.jsx(qe,{path:"sudoku",element:F.jsx(et,{children:F.jsx(UH,{})})}),F.jsx(qe,{path:"missing_letters",element:F.jsx(et,{children:F.jsx(h1,{})})}),F.jsx(qe,{path:"sorting_numbers",element:F.jsx(et,{children:F.jsx(i7,{})})}),F.jsx(qe,{path:"missing_numbers",element:F.jsx(et,{children:F.jsx(h1,{})})}),F.jsx(qe,{path:"alphabet_hindi",element:F.jsx(et,{children:F.jsx($H,{})})}),F.jsx(qe,{path:"alphabet_telugu",element:F.jsx(et,{children:F.jsx(zH,{})})}),F.jsx(qe,{path:"weeks_english",element:F.jsx(et,{children:F.jsx(BH,{})})}),F.jsx(qe,{path:"months_english",element:F.jsx(et,{children:F.jsx(WH,{})})}),F.jsx(qe,{path:"weeks_telugu",element:F.jsx(et,{children:F.jsx(HH,{})})}),F.jsx(qe,{path:"weeks_hindi",element:F.jsx(et,{children:F.jsx(qH,{})})}),F.jsx(qe,{path:"shapes",element:F.jsx(et,{children:F.jsx(KH,{})})}),F.jsx(qe,{path:"place_values",element:F.jsx(et,{children:F.jsx(ZH,{})})}),F.jsx(qe,{path:"numbers_english_spelling",element:F.jsx(et,{children:F.jsx(GH,{})})}),F.jsx(qe,{path:"numbers_hindi",element:F.jsx(et,{children:F.jsx(YH,{})})}),F.jsx(qe,{path:"numbers_telugu",element:F.jsx(et,{children:F.jsx(QH,{})})}),F.jsx(qe,{path:"months_telugu",element:F.jsx(et,{children:F.jsx(XH,{})})}),F.jsx(qe,{path:"months_hindi",element:F.jsx(et,{children:F.jsx(JH,{})})}),F.jsx(qe,{path:"body_parts",element:F.jsx(et,{children:F.jsx(e7,{})})}),F.jsx(qe,{path:"sense_organs",element:F.jsx(et,{children:F.jsx(t7,{})})}),F.jsx(qe,{path:"test/:testId",element:F.jsx(et,{children:F.jsx(f1,{})})}),F.jsx(qe,{path:"master_test",element:F.jsx(et,{children:F.jsx(f1,{})})}),F.jsx(qe,{path:"test_history",element:F.jsx(et,{children:F.jsx(o7,{})})})]})]})})]})]})})})})}));export{wH as $,d7 as A,c9 as B,f9 as C,w9 as D,y7 as E,BP as F,HE as G,T9 as H,l9 as I,g7 as J,tc as K,x9 as L,P9 as M,v7 as N,u7 as O,gH as P,xs as Q,_7 as R,qP as S,L9 as T,F9 as U,U9 as V,q7 as W,KP as X,j7 as Y,TR as Z,H7 as _,p9 as a,L7 as a0,K7 as a1,G7 as a2,h7 as a3,N7 as a4,U7 as a5,z7 as a6,$7 as a7,B7 as a8,c7 as a9,_M as aA,KR as aB,C7 as aC,S7 as aD,P7 as aE,ct as aF,x7 as aG,I7 as aH,A7 as aI,Ne as aa,V7 as ab,EH as ac,er as ad,eq as ae,tq as af,j6 as ag,P_ as ah,Tl as ai,J_ as aj,GP as ak,qs as al,rt as am,ex as an,ht as ao,R7 as ap,tn as aq,W7 as ar,l7 as as,X7 as at,J7 as au,Z7 as av,oH as aw,Y7 as ax,Q7 as ay,nq as az,g9 as b,Ft as c,v9 as d,A9 as e,R9 as f,N9 as g,pf as h,z9 as i,k7 as j,se as k,dv as l,Rr as m,_v as n,Pi as o,F as p,f7 as q,V as r,ai as s,qR as t,a9 as u,yA as v,M7 as w,O7 as x,F7 as y,jd as z};
