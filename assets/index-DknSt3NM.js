const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cs-1adw4.js","assets/gameData-CQNlQFbq.js","assets/arrow-up-down-C08tEYAH.js","assets/medal-B_GR2Ye5.js","assets/map-pin-BBVaAxfB.js","assets/book-open-B_r6_oLl.js","assets/timer-CLBNU-8b.js","assets/calculator-J_j3t4Cc.js","assets/calendar-days-Dmpx4njM.js","assets/calendar-pV-YnwuI.js","assets/circle-check-ChLIeNdS.js","assets/circle-question-mark-883ce3CB.js","assets/spell-check-B5rUaAzk.js","assets/eye-VMBR1zxO.js","assets/grid-3x3-CH4sRkFy.js","assets/hash-s7AYM4Ku.js","assets/heart-pulse-DAfRSWFI.js","assets/zap-Ckjof_iT.js","assets/info-DhAkLpSA.js","assets/languages-3eap_hc-.js","assets/user-plus-BlRovf5u.js","assets/scale-gAbfhl_w.js","assets/search-K0gHe9Fe.js","assets/shapes-BmaThUtT.js","assets/trash-2-Deoq-Zmf.js","assets/wand-sparkles-C5Ddb2x9.js","assets/index-Blk5G6ta.js","assets/index-DshOJkVM.js","assets/index--gyivwIA.js","assets/SpeakIcon-CVKllE2l.js","assets/index-TgxMRlWw.js","assets/PreviousIcon-B_T2_Ix6.js","assets/SurpriseCard-BBKmxpe0.js","assets/ChallengeHeader-CVOM2qcV.js","assets/DifficultyPicker-BrEqK9T0.js","assets/index-BWavmKtG.js","assets/wordUtils-DPgh885X.js","assets/index-C69T1_wK.js","assets/confetti.module-ONDKWxYZ.js","assets/index-P6-M2V5u.js","assets/index-CaYIasAy.js","assets/index-BbKYP2BQ.js","assets/index-LCMlDJZS.js","assets/weeksData-C7SqtnuX.js","assets/learnStyles-C2W9A748.js","assets/index-DPxDVcXz.js","assets/monthsData-CEA7U3aY.js","assets/index-B94x57yA.js","assets/index-tQLyB__p.js","assets/index-C6cv2xT9.js","assets/index-DTXUWOro.js","assets/numbersData-Dr7ACkQG.js","assets/index-4IwYsUhV.js","assets/index-DInEPZw8.js","assets/index-DXNcMz3T.js","assets/index-Bj-95oRI.js","assets/index-BsoTD1WA.js","assets/index-A4U31mb2.js","assets/scienceData-CCsDxGZ3.js","assets/index-Bo53bul_.js","assets/index-Bx2yxCdK.js","assets/FeedbackDisplay-DDLgZzQJ.js","assets/index-uLuyy9Uj.js","assets/mathUtils-B1Q27TTV.js","assets/index-BtOeE9gJ.js","assets/index-KJ2dVqb_.js","assets/index-_WG428Dt.js","assets/testService-U80onXDx.js","assets/index-KFQI9pjC.js","assets/index-BcbucBYf.js"])))=>i.map(i=>d[i]);
var tD=Object.defineProperty;var nD=(t,e,n)=>e in t?tD(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var dE=(t,e,n)=>nD(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();const rD="modulepreload",iD=function(t){return"/kiddoo/"+t},pE={},tt=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(n.map(h=>{if(h=iD(h),h in pE)return;pE[h]=!0;const p=h.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${m}`))return;const y=document.createElement("link");if(y.rel=p?"stylesheet":rD,p||(y.as="script"),y.crossOrigin="",y.href=h,c&&y.setAttribute("nonce",c),document.head.appendChild(y),p)return new Promise((w,T)=>{y.addEventListener("load",w),y.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return e().catch(a)})};function F1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zm={exports:{}},bu={},eg={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mE;function sD(){if(mE)return Le;mE=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),y=Symbol.iterator;function w(W){return W===null||typeof W!="object"?null:(W=y&&W[y]||W["@@iterator"],typeof W=="function"?W:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,P={};function k(W,J,Ae){this.props=W,this.context=J,this.refs=P,this.updater=Ae||T}k.prototype.isReactComponent={},k.prototype.setState=function(W,J){if(typeof W!="object"&&typeof W!="function"&&W!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,W,J,"setState")},k.prototype.forceUpdate=function(W){this.updater.enqueueForceUpdate(this,W,"forceUpdate")};function b(){}b.prototype=k.prototype;function O(W,J,Ae){this.props=W,this.context=J,this.refs=P,this.updater=Ae||T}var U=O.prototype=new b;U.constructor=O,x(U,k.prototype),U.isPureReactComponent=!0;var $=Array.isArray,H=Object.prototype.hasOwnProperty,X={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function I(W,J,Ae){var Ie,De={},be=null,$e=null;if(J!=null)for(Ie in J.ref!==void 0&&($e=J.ref),J.key!==void 0&&(be=""+J.key),J)H.call(J,Ie)&&!C.hasOwnProperty(Ie)&&(De[Ie]=J[Ie]);var Me=arguments.length-2;if(Me===1)De.children=Ae;else if(1<Me){for(var Ue=Array(Me),Vt=0;Vt<Me;Vt++)Ue[Vt]=arguments[Vt+2];De.children=Ue}if(W&&W.defaultProps)for(Ie in Me=W.defaultProps,Me)De[Ie]===void 0&&(De[Ie]=Me[Ie]);return{$$typeof:t,type:W,key:be,ref:$e,props:De,_owner:X.current}}function R(W,J){return{$$typeof:t,type:W.type,key:J,ref:W.ref,props:W.props,_owner:W._owner}}function D(W){return typeof W=="object"&&W!==null&&W.$$typeof===t}function L(W){var J={"=":"=0",":":"=2"};return"$"+W.replace(/[=:]/g,function(Ae){return J[Ae]})}var B=/\/+/g;function V(W,J){return typeof W=="object"&&W!==null&&W.key!=null?L(""+W.key):J.toString(36)}function ke(W,J,Ae,Ie,De){var be=typeof W;(be==="undefined"||be==="boolean")&&(W=null);var $e=!1;if(W===null)$e=!0;else switch(be){case"string":case"number":$e=!0;break;case"object":switch(W.$$typeof){case t:case e:$e=!0}}if($e)return $e=W,De=De($e),W=Ie===""?"."+V($e,0):Ie,$(De)?(Ae="",W!=null&&(Ae=W.replace(B,"$&/")+"/"),ke(De,J,Ae,"",function(Vt){return Vt})):De!=null&&(D(De)&&(De=R(De,Ae+(!De.key||$e&&$e.key===De.key?"":(""+De.key).replace(B,"$&/")+"/")+W)),J.push(De)),1;if($e=0,Ie=Ie===""?".":Ie+":",$(W))for(var Me=0;Me<W.length;Me++){be=W[Me];var Ue=Ie+V(be,Me);$e+=ke(be,J,Ae,Ue,De)}else if(Ue=w(W),typeof Ue=="function")for(W=Ue.call(W),Me=0;!(be=W.next()).done;)be=be.value,Ue=Ie+V(be,Me++),$e+=ke(be,J,Ae,Ue,De);else if(be==="object")throw J=String(W),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(W).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return $e}function Ge(W,J,Ae){if(W==null)return W;var Ie=[],De=0;return ke(W,Ie,"","",function(be){return J.call(Ae,be,De++)}),Ie}function Xe(W){if(W._status===-1){var J=W._result;J=J(),J.then(function(Ae){(W._status===0||W._status===-1)&&(W._status=1,W._result=Ae)},function(Ae){(W._status===0||W._status===-1)&&(W._status=2,W._result=Ae)}),W._status===-1&&(W._status=0,W._result=J)}if(W._status===1)return W._result.default;throw W._result}var Je={current:null},re={transition:null},ce={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:re,ReactCurrentOwner:X};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:Ge,forEach:function(W,J,Ae){Ge(W,function(){J.apply(this,arguments)},Ae)},count:function(W){var J=0;return Ge(W,function(){J++}),J},toArray:function(W){return Ge(W,function(J){return J})||[]},only:function(W){if(!D(W))throw Error("React.Children.only expected to receive a single React element child.");return W}},Le.Component=k,Le.Fragment=n,Le.Profiler=i,Le.PureComponent=O,Le.StrictMode=r,Le.Suspense=h,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Le.act=ue,Le.cloneElement=function(W,J,Ae){if(W==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+W+".");var Ie=x({},W.props),De=W.key,be=W.ref,$e=W._owner;if(J!=null){if(J.ref!==void 0&&(be=J.ref,$e=X.current),J.key!==void 0&&(De=""+J.key),W.type&&W.type.defaultProps)var Me=W.type.defaultProps;for(Ue in J)H.call(J,Ue)&&!C.hasOwnProperty(Ue)&&(Ie[Ue]=J[Ue]===void 0&&Me!==void 0?Me[Ue]:J[Ue])}var Ue=arguments.length-2;if(Ue===1)Ie.children=Ae;else if(1<Ue){Me=Array(Ue);for(var Vt=0;Vt<Ue;Vt++)Me[Vt]=arguments[Vt+2];Ie.children=Me}return{$$typeof:t,type:W.type,key:De,ref:be,props:Ie,_owner:$e}},Le.createContext=function(W){return W={$$typeof:l,_currentValue:W,_currentValue2:W,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},W.Provider={$$typeof:a,_context:W},W.Consumer=W},Le.createElement=I,Le.createFactory=function(W){var J=I.bind(null,W);return J.type=W,J},Le.createRef=function(){return{current:null}},Le.forwardRef=function(W){return{$$typeof:c,render:W}},Le.isValidElement=D,Le.lazy=function(W){return{$$typeof:m,_payload:{_status:-1,_result:W},_init:Xe}},Le.memo=function(W,J){return{$$typeof:p,type:W,compare:J===void 0?null:J}},Le.startTransition=function(W){var J=re.transition;re.transition={};try{W()}finally{re.transition=J}},Le.unstable_act=ue,Le.useCallback=function(W,J){return Je.current.useCallback(W,J)},Le.useContext=function(W){return Je.current.useContext(W)},Le.useDebugValue=function(){},Le.useDeferredValue=function(W){return Je.current.useDeferredValue(W)},Le.useEffect=function(W,J){return Je.current.useEffect(W,J)},Le.useId=function(){return Je.current.useId()},Le.useImperativeHandle=function(W,J,Ae){return Je.current.useImperativeHandle(W,J,Ae)},Le.useInsertionEffect=function(W,J){return Je.current.useInsertionEffect(W,J)},Le.useLayoutEffect=function(W,J){return Je.current.useLayoutEffect(W,J)},Le.useMemo=function(W,J){return Je.current.useMemo(W,J)},Le.useReducer=function(W,J,Ae){return Je.current.useReducer(W,J,Ae)},Le.useRef=function(W){return Je.current.useRef(W)},Le.useState=function(W){return Je.current.useState(W)},Le.useSyncExternalStore=function(W,J,Ae){return Je.current.useSyncExternalStore(W,J,Ae)},Le.useTransition=function(){return Je.current.useTransition()},Le.version="18.3.1",Le}var gE;function Bd(){return gE||(gE=1,eg.exports=sD()),eg.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE;function oD(){if(yE)return bu;yE=1;var t=Bd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(c,h,p){var m,y={},w=null,T=null;p!==void 0&&(w=""+p),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(T=h.ref);for(m in h)r.call(h,m)&&!a.hasOwnProperty(m)&&(y[m]=h[m]);if(c&&c.defaultProps)for(m in h=c.defaultProps,h)y[m]===void 0&&(y[m]=h[m]);return{$$typeof:e,type:c,key:w,ref:T,props:y,_owner:i.current}}return bu.Fragment=n,bu.jsx=l,bu.jsxs=l,bu}var vE;function aD(){return vE||(vE=1,Zm.exports=oD()),Zm.exports}var F=aD(),M=Bd();const er=F1(M);var nf={},tg={exports:{}},In={},ng={exports:{}},rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _E;function lD(){return _E||(_E=1,function(t){function e(re,ce){var ue=re.length;re.push(ce);e:for(;0<ue;){var W=ue-1>>>1,J=re[W];if(0<i(J,ce))re[W]=ce,re[ue]=J,ue=W;else break e}}function n(re){return re.length===0?null:re[0]}function r(re){if(re.length===0)return null;var ce=re[0],ue=re.pop();if(ue!==ce){re[0]=ue;e:for(var W=0,J=re.length,Ae=J>>>1;W<Ae;){var Ie=2*(W+1)-1,De=re[Ie],be=Ie+1,$e=re[be];if(0>i(De,ue))be<J&&0>i($e,De)?(re[W]=$e,re[be]=ue,W=be):(re[W]=De,re[Ie]=ue,W=Ie);else if(be<J&&0>i($e,ue))re[W]=$e,re[be]=ue,W=be;else break e}}return ce}function i(re,ce){var ue=re.sortIndex-ce.sortIndex;return ue!==0?ue:re.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var h=[],p=[],m=1,y=null,w=3,T=!1,x=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(re){for(var ce=n(p);ce!==null;){if(ce.callback===null)r(p);else if(ce.startTime<=re)r(p),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=n(p)}}function $(re){if(P=!1,U(re),!x)if(n(h)!==null)x=!0,Xe(H);else{var ce=n(p);ce!==null&&Je($,ce.startTime-re)}}function H(re,ce){x=!1,P&&(P=!1,b(I),I=-1),T=!0;var ue=w;try{for(U(ce),y=n(h);y!==null&&(!(y.expirationTime>ce)||re&&!L());){var W=y.callback;if(typeof W=="function"){y.callback=null,w=y.priorityLevel;var J=W(y.expirationTime<=ce);ce=t.unstable_now(),typeof J=="function"?y.callback=J:y===n(h)&&r(h),U(ce)}else r(h);y=n(h)}if(y!==null)var Ae=!0;else{var Ie=n(p);Ie!==null&&Je($,Ie.startTime-ce),Ae=!1}return Ae}finally{y=null,w=ue,T=!1}}var X=!1,C=null,I=-1,R=5,D=-1;function L(){return!(t.unstable_now()-D<R)}function B(){if(C!==null){var re=t.unstable_now();D=re;var ce=!0;try{ce=C(!0,re)}finally{ce?V():(X=!1,C=null)}}else X=!1}var V;if(typeof O=="function")V=function(){O(B)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Ge=ke.port2;ke.port1.onmessage=B,V=function(){Ge.postMessage(null)}}else V=function(){k(B,0)};function Xe(re){C=re,X||(X=!0,V())}function Je(re,ce){I=k(function(){re(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(re){re.callback=null},t.unstable_continueExecution=function(){x||T||(x=!0,Xe(H))},t.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(re){switch(w){case 1:case 2:case 3:var ce=3;break;default:ce=w}var ue=w;w=ce;try{return re()}finally{w=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(re,ce){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var ue=w;w=re;try{return ce()}finally{w=ue}},t.unstable_scheduleCallback=function(re,ce,ue){var W=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?W+ue:W):ue=W,re){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ue+J,re={id:m++,callback:ce,priorityLevel:re,startTime:ue,expirationTime:J,sortIndex:-1},ue>W?(re.sortIndex=ue,e(p,re),n(h)===null&&re===n(p)&&(P?(b(I),I=-1):P=!0,Je($,ue-W))):(re.sortIndex=J,e(h,re),x||T||(x=!0,Xe(H))),re},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(re){var ce=w;return function(){var ue=w;w=ce;try{return re.apply(this,arguments)}finally{w=ue}}}}(rg)),rg}var wE;function uD(){return wE||(wE=1,ng.exports=lD()),ng.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var EE;function cD(){if(EE)return In;EE=1;var t=Bd(),e=uD();function n(s){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+s,u=1;u<arguments.length;u++)o+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+s+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function a(s,o){l(s,o),l(s+"Capture",o)}function l(s,o){for(i[s]=o,s=0;s<o.length;s++)r.add(o[s])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},y={};function w(s){return h.call(y,s)?!0:h.call(m,s)?!1:p.test(s)?y[s]=!0:(m[s]=!0,!1)}function T(s,o,u,d){if(u!==null&&u.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return d?!1:u!==null?!u.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function x(s,o,u,d){if(o===null||typeof o>"u"||T(s,o,u,d))return!0;if(d)return!1;if(u!==null)switch(u.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function P(s,o,u,d,g,v,S){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=d,this.attributeNamespace=g,this.mustUseProperty=u,this.propertyName=s,this.type=o,this.sanitizeURL=v,this.removeEmptyString=S}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){k[s]=new P(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var o=s[0];k[o]=new P(o,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){k[s]=new P(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){k[s]=new P(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){k[s]=new P(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){k[s]=new P(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){k[s]=new P(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){k[s]=new P(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){k[s]=new P(s,5,!1,s.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function O(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var o=s.replace(b,O);k[o]=new P(o,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var o=s.replace(b,O);k[o]=new P(o,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var o=s.replace(b,O);k[o]=new P(o,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){k[s]=new P(s,1,!1,s.toLowerCase(),null,!1,!1)}),k.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){k[s]=new P(s,1,!1,s.toLowerCase(),null,!0,!0)});function U(s,o,u,d){var g=k.hasOwnProperty(o)?k[o]:null;(g!==null?g.type!==0:d||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(x(o,u,g,d)&&(u=null),d||g===null?w(o)&&(u===null?s.removeAttribute(o):s.setAttribute(o,""+u)):g.mustUseProperty?s[g.propertyName]=u===null?g.type===3?!1:"":u:(o=g.attributeName,d=g.attributeNamespace,u===null?s.removeAttribute(o):(g=g.type,u=g===3||g===4&&u===!0?"":""+u,d?s.setAttributeNS(d,o,u):s.setAttribute(o,u))))}var $=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,H=Symbol.for("react.element"),X=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),L=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),Ge=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),Je=Symbol.for("react.offscreen"),re=Symbol.iterator;function ce(s){return s===null||typeof s!="object"?null:(s=re&&s[re]||s["@@iterator"],typeof s=="function"?s:null)}var ue=Object.assign,W;function J(s){if(W===void 0)try{throw Error()}catch(u){var o=u.stack.trim().match(/\n( *(at )?)/);W=o&&o[1]||""}return`
`+W+s}var Ae=!1;function Ie(s,o){if(!s||Ae)return"";Ae=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(Q){var d=Q}Reflect.construct(s,[],o)}else{try{o.call()}catch(Q){d=Q}s.call(o.prototype)}else{try{throw Error()}catch(Q){d=Q}s()}}catch(Q){if(Q&&d&&typeof Q.stack=="string"){for(var g=Q.stack.split(`
`),v=d.stack.split(`
`),S=g.length-1,N=v.length-1;1<=S&&0<=N&&g[S]!==v[N];)N--;for(;1<=S&&0<=N;S--,N--)if(g[S]!==v[N]){if(S!==1||N!==1)do if(S--,N--,0>N||g[S]!==v[N]){var j=`
`+g[S].replace(" at new "," at ");return s.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",s.displayName)),j}while(1<=S&&0<=N);break}}}finally{Ae=!1,Error.prepareStackTrace=u}return(s=s?s.displayName||s.name:"")?J(s):""}function De(s){switch(s.tag){case 5:return J(s.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return s=Ie(s.type,!1),s;case 11:return s=Ie(s.type.render,!1),s;case 1:return s=Ie(s.type,!0),s;default:return""}}function be(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case C:return"Fragment";case X:return"Portal";case R:return"Profiler";case I:return"StrictMode";case V:return"Suspense";case ke:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case L:return(s.displayName||"Context")+".Consumer";case D:return(s._context.displayName||"Context")+".Provider";case B:var o=s.render;return s=s.displayName,s||(s=o.displayName||o.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case Ge:return o=s.displayName||null,o!==null?o:be(s.type)||"Memo";case Xe:o=s._payload,s=s._init;try{return be(s(o))}catch{}}return null}function $e(s){var o=s.type;switch(s.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=o.render,s=s.displayName||s.name||"",o.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(o);case 8:return o===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Me(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Ue(s){var o=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function Vt(s){var o=Ue(s)?"checked":"value",u=Object.getOwnPropertyDescriptor(s.constructor.prototype,o),d=""+s[o];if(!s.hasOwnProperty(o)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var g=u.get,v=u.set;return Object.defineProperty(s,o,{configurable:!0,get:function(){return g.call(this)},set:function(S){d=""+S,v.call(this,S)}}),Object.defineProperty(s,o,{enumerable:u.enumerable}),{getValue:function(){return d},setValue:function(S){d=""+S},stopTracking:function(){s._valueTracker=null,delete s[o]}}}}function ar(s){s._valueTracker||(s._valueTracker=Vt(s))}function _n(s){if(!s)return!1;var o=s._valueTracker;if(!o)return!0;var u=o.getValue(),d="";return s&&(d=Ue(s)?s.checked?"true":"false":s.value),s=d,s!==u?(o.setValue(s),!0):!1}function zi(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function ta(s,o){var u=o.checked;return ue({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??s._wrapperState.initialChecked})}function Uc(s,o){var u=o.defaultValue==null?"":o.defaultValue,d=o.checked!=null?o.checked:o.defaultChecked;u=Me(o.value!=null?o.value:u),s._wrapperState={initialChecked:d,initialValue:u,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function na(s,o){o=o.checked,o!=null&&U(s,"checked",o,!1)}function Xs(s,o){na(s,o);var u=Me(o.value),d=o.type;if(u!=null)d==="number"?(u===0&&s.value===""||s.value!=u)&&(s.value=""+u):s.value!==""+u&&(s.value=""+u);else if(d==="submit"||d==="reset"){s.removeAttribute("value");return}o.hasOwnProperty("value")?It(s,o.type,u):o.hasOwnProperty("defaultValue")&&It(s,o.type,Me(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(s.defaultChecked=!!o.defaultChecked)}function Fl(s,o,u){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var d=o.type;if(!(d!=="submit"&&d!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+s._wrapperState.initialValue,u||o===s.value||(s.value=o),s.defaultValue=o}u=s.name,u!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,u!==""&&(s.name=u)}function It(s,o,u){(o!=="number"||zi(s.ownerDocument)!==s)&&(u==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+u&&(s.defaultValue=""+u))}var Et=Array.isArray;function lr(s,o,u,d){if(s=s.options,o){o={};for(var g=0;g<u.length;g++)o["$"+u[g]]=!0;for(u=0;u<s.length;u++)g=o.hasOwnProperty("$"+s[u].value),s[u].selected!==g&&(s[u].selected=g),g&&d&&(s[u].defaultSelected=!0)}else{for(u=""+Me(u),o=null,g=0;g<s.length;g++){if(s[g].value===u){s[g].selected=!0,d&&(s[g].defaultSelected=!0);return}o!==null||s[g].disabled||(o=s[g])}o!==null&&(o.selected=!0)}}function jl(s,o){if(o.dangerouslySetInnerHTML!=null)throw Error(n(91));return ue({},o,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function $l(s,o){var u=o.value;if(u==null){if(u=o.children,o=o.defaultValue,u!=null){if(o!=null)throw Error(n(92));if(Et(u)){if(1<u.length)throw Error(n(93));u=u[0]}o=u}o==null&&(o=""),u=o}s._wrapperState={initialValue:Me(u)}}function zc(s,o){var u=Me(o.value),d=Me(o.defaultValue);u!=null&&(u=""+u,u!==s.value&&(s.value=u),o.defaultValue==null&&s.defaultValue!==u&&(s.defaultValue=u)),d!=null&&(s.defaultValue=""+d)}function Bi(s){var o=s.textContent;o===s._wrapperState.initialValue&&o!==""&&o!==null&&(s.value=o)}function Ul(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ra(s,o){return s==null||s==="http://www.w3.org/1999/xhtml"?Ul(o):s==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Wi,Bc=function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,u,d,g){MSApp.execUnsafeLocalFunction(function(){return s(o,u,d,g)})}:s}(function(s,o){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=o;else{for(Wi=Wi||document.createElement("div"),Wi.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Wi.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;o.firstChild;)s.appendChild(o.firstChild)}});function Js(s,o){if(o){var u=s.firstChild;if(u&&u===s.lastChild&&u.nodeType===3){u.nodeValue=o;return}}s.textContent=o}var Hi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wc=["Webkit","ms","Moz","O"];Object.keys(Hi).forEach(function(s){Wc.forEach(function(o){o=o+s.charAt(0).toUpperCase()+s.substring(1),Hi[o]=Hi[s]})});function qi(s,o,u){return o==null||typeof o=="boolean"||o===""?"":u||typeof o!="number"||o===0||Hi.hasOwnProperty(s)&&Hi[s]?(""+o).trim():o+"px"}function ia(s,o){s=s.style;for(var u in o)if(o.hasOwnProperty(u)){var d=u.indexOf("--")===0,g=qi(u,o[u],d);u==="float"&&(u="cssFloat"),d?s.setProperty(u,g):s[u]=g}}var zl=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ur(s,o){if(o){if(zl[s]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(n(137,s));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(n(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(n(61))}if(o.style!=null&&typeof o.style!="object")throw Error(n(62))}}function sa(s,o){if(s.indexOf("-")===-1)return typeof o.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ki=null;function oa(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var li=null,ui=null,vt=null;function Bl(s){if(s=gu(s)){if(typeof li!="function")throw Error(n(280));var o=s.stateNode;o&&(o=yh(o),li(s.stateNode,s.type,o))}}function Gi(s){ui?vt?vt.push(s):vt=[s]:ui=s}function Qi(){if(ui){var s=ui,o=vt;if(vt=ui=null,Bl(s),o)for(s=0;s<o.length;s++)Bl(o[s])}}function Hc(s,o){return s(o)}function qc(){}var br=!1;function Kc(s,o,u){if(br)return s(o,u);br=!0;try{return Hc(s,o,u)}finally{br=!1,(ui!==null||vt!==null)&&(qc(),Qi())}}function Zs(s,o){var u=s.stateNode;if(u===null)return null;var d=yh(u);if(d===null)return null;u=d[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(s=s.type,d=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!d;break e;default:s=!1}if(s)return null;if(u&&typeof u!="function")throw Error(n(231,o,typeof u));return u}var Yi=!1;if(c)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{Yi=!1}function Gc(s,o,u,d,g,v,S,N,j){var Q=Array.prototype.slice.call(arguments,3);try{o.apply(u,Q)}catch(ne){this.onError(ne)}}var ci=!1,Dr=null,aa=!1,Wn=null,Qc={onError:function(s){ci=!0,Dr=s}};function Yc(s,o,u,d,g,v,S,N,j){ci=!1,Dr=null,Gc.apply(Qc,arguments)}function Wl(s,o,u,d,g,v,S,N,j){if(Yc.apply(this,arguments),ci){if(ci){var Q=Dr;ci=!1,Dr=null}else throw Error(n(198));aa||(aa=!0,Wn=Q)}}function cr(s){var o=s,u=s;if(s.alternate)for(;o.return;)o=o.return;else{s=o;do o=s,o.flags&4098&&(u=o.return),s=o.return;while(s)}return o.tag===3?u:null}function Hl(s){if(s.tag===13){var o=s.memoizedState;if(o===null&&(s=s.alternate,s!==null&&(o=s.memoizedState)),o!==null)return o.dehydrated}return null}function Xc(s){if(cr(s)!==s)throw Error(n(188))}function Jc(s){var o=s.alternate;if(!o){if(o=cr(s),o===null)throw Error(n(188));return o!==s?null:s}for(var u=s,d=o;;){var g=u.return;if(g===null)break;var v=g.alternate;if(v===null){if(d=g.return,d!==null){u=d;continue}break}if(g.child===v.child){for(v=g.child;v;){if(v===u)return Xc(g),s;if(v===d)return Xc(g),o;v=v.sibling}throw Error(n(188))}if(u.return!==d.return)u=g,d=v;else{for(var S=!1,N=g.child;N;){if(N===u){S=!0,u=g,d=v;break}if(N===d){S=!0,d=g,u=v;break}N=N.sibling}if(!S){for(N=v.child;N;){if(N===u){S=!0,u=v,d=g;break}if(N===d){S=!0,d=v,u=g;break}N=N.sibling}if(!S)throw Error(n(189))}}if(u.alternate!==d)throw Error(n(190))}if(u.tag!==3)throw Error(n(188));return u.stateNode.current===u?s:o}function Zc(s){return s=Jc(s),s!==null?eo(s):null}function eo(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var o=eo(s);if(o!==null)return o;s=s.sibling}return null}var ql=e.unstable_scheduleCallback,la=e.unstable_cancelCallback,to=e.unstable_shouldYield,hi=e.unstable_requestPaint,ot=e.unstable_now,kp=e.unstable_getCurrentPriorityLevel,ua=e.unstable_ImmediatePriority,Kl=e.unstable_UserBlockingPriority,no=e.unstable_NormalPriority,Gl=e.unstable_LowPriority,ca=e.unstable_IdlePriority,ro=null,Rn=null;function eh(s){if(Rn&&typeof Rn.onCommitFiberRoot=="function")try{Rn.onCommitFiberRoot(ro,s,void 0,(s.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:io,Vr=Math.log,Hn=Math.LN2;function io(s){return s>>>=0,s===0?32:31-(Vr(s)/Hn|0)|0}var Nr=64,Ji=4194304;function Ke(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function fi(s,o){var u=s.pendingLanes;if(u===0)return 0;var d=0,g=s.suspendedLanes,v=s.pingedLanes,S=u&268435455;if(S!==0){var N=S&~g;N!==0?d=Ke(N):(v&=S,v!==0&&(d=Ke(v)))}else S=u&~g,S!==0?d=Ke(S):v!==0&&(d=Ke(v));if(d===0)return 0;if(o!==0&&o!==d&&!(o&g)&&(g=d&-d,v=o&-o,g>=v||g===16&&(v&4194240)!==0))return o;if(d&4&&(d|=u&16),o=s.entangledLanes,o!==0)for(s=s.entanglements,o&=d;0<o;)u=31-kn(o),g=1<<u,d|=s[u],o&=~g;return d}function so(s,o){switch(s){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oo(s,o){for(var u=s.suspendedLanes,d=s.pingedLanes,g=s.expirationTimes,v=s.pendingLanes;0<v;){var S=31-kn(v),N=1<<S,j=g[S];j===-1?(!(N&u)||N&d)&&(g[S]=so(N,o)):j<=o&&(s.expiredLanes|=N),v&=~N}}function Ql(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function Yl(){var s=Nr;return Nr<<=1,!(Nr&4194240)&&(Nr=64),s}function Xl(s){for(var o=[],u=0;31>u;u++)o.push(s);return o}function ao(s,o,u){s.pendingLanes|=o,o!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,o=31-kn(o),s[o]=u}function bp(s,o){var u=s.pendingLanes&~o;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=o,s.mutableReadLanes&=o,s.entangledLanes&=o,o=s.entanglements;var d=s.eventTimes;for(s=s.expirationTimes;0<u;){var g=31-kn(u),v=1<<g;o[g]=0,d[g]=-1,s[g]=-1,u&=~v}}function Jl(s,o){var u=s.entangledLanes|=o;for(s=s.entanglements;u;){var d=31-kn(u),g=1<<d;g&o|s[d]&o&&(s[d]|=o),u&=~g}}var ze=0;function Mr(s){return s&=-s,1<s?4<s?s&268435455?16:536870912:4:1}var Zl,ha,eu,tu,nu,Lr=!1,fa=[],Or=null,Fr=null,qt=null,lo=new Map,di=new Map,bn=[],th="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zi(s,o){switch(s){case"focusin":case"focusout":Or=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":lo.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(o.pointerId)}}function hr(s,o,u,d,g,v){return s===null||s.nativeEvent!==v?(s={blockedOn:o,domEventName:u,eventSystemFlags:d,nativeEvent:v,targetContainers:[g]},o!==null&&(o=gu(o),o!==null&&ha(o)),s):(s.eventSystemFlags|=d,o=s.targetContainers,g!==null&&o.indexOf(g)===-1&&o.push(g),s)}function nh(s,o,u,d,g){switch(o){case"focusin":return Or=hr(Or,s,o,u,d,g),!0;case"dragenter":return Fr=hr(Fr,s,o,u,d,g),!0;case"mouseover":return qt=hr(qt,s,o,u,d,g),!0;case"pointerover":var v=g.pointerId;return lo.set(v,hr(lo.get(v)||null,s,o,u,d,g)),!0;case"gotpointercapture":return v=g.pointerId,di.set(v,hr(di.get(v)||null,s,o,u,d,g)),!0}return!1}function da(s){var o=fo(s.target);if(o!==null){var u=cr(o);if(u!==null){if(o=u.tag,o===13){if(o=Hl(u),o!==null){s.blockedOn=o,nu(s.priority,function(){eu(u)});return}}else if(o===3&&u.stateNode.current.memoizedState.isDehydrated){s.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}s.blockedOn=null}function nt(s){if(s.blockedOn!==null)return!1;for(var o=s.targetContainers;0<o.length;){var u=pa(s.domEventName,s.eventSystemFlags,o[0],s.nativeEvent);if(u===null){u=s.nativeEvent;var d=new u.constructor(u.type,u);Ki=d,u.target.dispatchEvent(d),Ki=null}else return o=gu(u),o!==null&&ha(o),s.blockedOn=u,!1;o.shift()}return!0}function rh(s,o,u){nt(s)&&u.delete(o)}function Dp(){Lr=!1,Or!==null&&nt(Or)&&(Or=null),Fr!==null&&nt(Fr)&&(Fr=null),qt!==null&&nt(qt)&&(qt=null),lo.forEach(rh),di.forEach(rh)}function es(s,o){s.blockedOn===o&&(s.blockedOn=null,Lr||(Lr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Dp)))}function ts(s){function o(g){return es(g,s)}if(0<fa.length){es(fa[0],s);for(var u=1;u<fa.length;u++){var d=fa[u];d.blockedOn===s&&(d.blockedOn=null)}}for(Or!==null&&es(Or,s),Fr!==null&&es(Fr,s),qt!==null&&es(qt,s),lo.forEach(o),di.forEach(o),u=0;u<bn.length;u++)d=bn[u],d.blockedOn===s&&(d.blockedOn=null);for(;0<bn.length&&(u=bn[0],u.blockedOn===null);)da(u),u.blockedOn===null&&bn.shift()}var pi=$.ReactCurrentBatchConfig,mi=!0;function jr(s,o,u,d){var g=ze,v=pi.transition;pi.transition=null;try{ze=1,ru(s,o,u,d)}finally{ze=g,pi.transition=v}}function ih(s,o,u,d){var g=ze,v=pi.transition;pi.transition=null;try{ze=4,ru(s,o,u,d)}finally{ze=g,pi.transition=v}}function ru(s,o,u,d){if(mi){var g=pa(s,o,u,d);if(g===null)Bp(s,o,d,$r,u),Zi(s,d);else if(nh(g,s,o,u,d))d.stopPropagation();else if(Zi(s,d),o&4&&-1<th.indexOf(s)){for(;g!==null;){var v=gu(g);if(v!==null&&Zl(v),v=pa(s,o,u,d),v===null&&Bp(s,o,d,$r,u),v===g)break;g=v}g!==null&&d.stopPropagation()}else Bp(s,o,d,null,u)}}var $r=null;function pa(s,o,u,d){if($r=null,s=oa(d),s=fo(s),s!==null)if(o=cr(s),o===null)s=null;else if(u=o.tag,u===13){if(s=Hl(o),s!==null)return s;s=null}else if(u===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;s=null}else o!==s&&(s=null);return $r=s,null}function ma(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kp()){case ua:return 1;case Kl:return 4;case no:case Gl:return 16;case ca:return 536870912;default:return 16}default:return 16}}var Dn=null,ga=null,gi=null;function sh(){if(gi)return gi;var s,o=ga,u=o.length,d,g="value"in Dn?Dn.value:Dn.textContent,v=g.length;for(s=0;s<u&&o[s]===g[s];s++);var S=u-s;for(d=1;d<=S&&o[u-d]===g[v-d];d++);return gi=g.slice(s,1<d?1-d:void 0)}function uo(s){var o=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&o===13&&(s=13)):s=o,s===10&&(s=13),32<=s||s===13?s:0}function Ur(){return!0}function iu(){return!1}function rn(s){function o(u,d,g,v,S){this._reactName=u,this._targetInst=g,this.type=d,this.nativeEvent=v,this.target=S,this.currentTarget=null;for(var N in s)s.hasOwnProperty(N)&&(u=s[N],this[N]=u?u(v):v[N]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ur:iu,this.isPropagationStopped=iu,this}return ue(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Ur)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Ur)},persist:function(){},isPersistent:Ur}),o}var zr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=rn(zr),ns=ue({},zr,{view:0,detail:0}),ya=rn(ns),va,_a,Vn,ho=ue({},ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pe,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Vn&&(Vn&&s.type==="mousemove"?(va=s.screenX-Vn.screenX,_a=s.screenY-Vn.screenY):_a=va=0,Vn=s),va)},movementY:function(s){return"movementY"in s?s.movementY:_a}}),su=rn(ho),oh=ue({},ho,{dataTransfer:0}),ah=rn(oh),wa=ue({},ns,{relatedTarget:0}),Kt=rn(wa),lh=ue({},zr,{animationName:0,elapsedTime:0,pseudoElement:0}),uh=rn(lh),rs=ue({},zr,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),f=rn(rs),_=ue({},zr,{data:0}),E=rn(_),A={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},K={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function le(s){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(s):(s=Y[s])?!!o[s]:!1}function Pe(){return le}var Tt=ue({},ns,{key:function(s){if(s.key){var o=A[s.key]||s.key;if(o!=="Unidentified")return o}return s.type==="keypress"?(s=uo(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?K[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pe,charCode:function(s){return s.type==="keypress"?uo(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?uo(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),Ze=rn(Tt),At=ue({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nn=rn(At),yi=ue({},ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pe}),Br=rn(yi),Wr=ue({},zr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ea=rn(Wr),ou=ue({},ho,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),Yk=rn(ou),Xk=[9,13,27,32],Vp=c&&"CompositionEvent"in window,au=null;c&&"documentMode"in document&&(au=document.documentMode);var Jk=c&&"TextEvent"in window&&!au,sw=c&&(!Vp||au&&8<au&&11>=au),ow=" ",aw=!1;function lw(s,o){switch(s){case"keyup":return Xk.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uw(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Ta=!1;function Zk(s,o){switch(s){case"compositionend":return uw(o);case"keypress":return o.which!==32?null:(aw=!0,ow);case"textInput":return s=o.data,s===ow&&aw?null:s;default:return null}}function eb(s,o){if(Ta)return s==="compositionend"||!Vp&&lw(s,o)?(s=sh(),gi=ga=Dn=null,Ta=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return sw&&o.locale!=="ko"?null:o.data;default:return null}}var tb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cw(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o==="input"?!!tb[s.type]:o==="textarea"}function hw(s,o,u,d){Gi(d),o=ph(o,"onChange"),0<o.length&&(u=new co("onChange","change",null,u,d),s.push({event:u,listeners:o}))}var lu=null,uu=null;function nb(s){Rw(s,0)}function ch(s){var o=Ca(s);if(_n(o))return s}function rb(s,o){if(s==="change")return o}var fw=!1;if(c){var Np;if(c){var Mp="oninput"in document;if(!Mp){var dw=document.createElement("div");dw.setAttribute("oninput","return;"),Mp=typeof dw.oninput=="function"}Np=Mp}else Np=!1;fw=Np&&(!document.documentMode||9<document.documentMode)}function pw(){lu&&(lu.detachEvent("onpropertychange",mw),uu=lu=null)}function mw(s){if(s.propertyName==="value"&&ch(uu)){var o=[];hw(o,uu,s,oa(s)),Kc(nb,o)}}function ib(s,o,u){s==="focusin"?(pw(),lu=o,uu=u,lu.attachEvent("onpropertychange",mw)):s==="focusout"&&pw()}function sb(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return ch(uu)}function ob(s,o){if(s==="click")return ch(o)}function ab(s,o){if(s==="input"||s==="change")return ch(o)}function lb(s,o){return s===o&&(s!==0||1/s===1/o)||s!==s&&o!==o}var fr=typeof Object.is=="function"?Object.is:lb;function cu(s,o){if(fr(s,o))return!0;if(typeof s!="object"||s===null||typeof o!="object"||o===null)return!1;var u=Object.keys(s),d=Object.keys(o);if(u.length!==d.length)return!1;for(d=0;d<u.length;d++){var g=u[d];if(!h.call(o,g)||!fr(s[g],o[g]))return!1}return!0}function gw(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function yw(s,o){var u=gw(s);s=0;for(var d;u;){if(u.nodeType===3){if(d=s+u.textContent.length,s<=o&&d>=o)return{node:u,offset:o-s};s=d}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=gw(u)}}function vw(s,o){return s&&o?s===o?!0:s&&s.nodeType===3?!1:o&&o.nodeType===3?vw(s,o.parentNode):"contains"in s?s.contains(o):s.compareDocumentPosition?!!(s.compareDocumentPosition(o)&16):!1:!1}function _w(){for(var s=window,o=zi();o instanceof s.HTMLIFrameElement;){try{var u=typeof o.contentWindow.location.href=="string"}catch{u=!1}if(u)s=o.contentWindow;else break;o=zi(s.document)}return o}function Lp(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o&&(o==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||o==="textarea"||s.contentEditable==="true")}function ub(s){var o=_w(),u=s.focusedElem,d=s.selectionRange;if(o!==u&&u&&u.ownerDocument&&vw(u.ownerDocument.documentElement,u)){if(d!==null&&Lp(u)){if(o=d.start,s=d.end,s===void 0&&(s=o),"selectionStart"in u)u.selectionStart=o,u.selectionEnd=Math.min(s,u.value.length);else if(s=(o=u.ownerDocument||document)&&o.defaultView||window,s.getSelection){s=s.getSelection();var g=u.textContent.length,v=Math.min(d.start,g);d=d.end===void 0?v:Math.min(d.end,g),!s.extend&&v>d&&(g=d,d=v,v=g),g=yw(u,v);var S=yw(u,d);g&&S&&(s.rangeCount!==1||s.anchorNode!==g.node||s.anchorOffset!==g.offset||s.focusNode!==S.node||s.focusOffset!==S.offset)&&(o=o.createRange(),o.setStart(g.node,g.offset),s.removeAllRanges(),v>d?(s.addRange(o),s.extend(S.node,S.offset)):(o.setEnd(S.node,S.offset),s.addRange(o)))}}for(o=[],s=u;s=s.parentNode;)s.nodeType===1&&o.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<o.length;u++)s=o[u],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var cb=c&&"documentMode"in document&&11>=document.documentMode,Sa=null,Op=null,hu=null,Fp=!1;function ww(s,o,u){var d=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Fp||Sa==null||Sa!==zi(d)||(d=Sa,"selectionStart"in d&&Lp(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),hu&&cu(hu,d)||(hu=d,d=ph(Op,"onSelect"),0<d.length&&(o=new co("onSelect","select",null,o,u),s.push({event:o,listeners:d}),o.target=Sa)))}function hh(s,o){var u={};return u[s.toLowerCase()]=o.toLowerCase(),u["Webkit"+s]="webkit"+o,u["Moz"+s]="moz"+o,u}var xa={animationend:hh("Animation","AnimationEnd"),animationiteration:hh("Animation","AnimationIteration"),animationstart:hh("Animation","AnimationStart"),transitionend:hh("Transition","TransitionEnd")},jp={},Ew={};c&&(Ew=document.createElement("div").style,"AnimationEvent"in window||(delete xa.animationend.animation,delete xa.animationiteration.animation,delete xa.animationstart.animation),"TransitionEvent"in window||delete xa.transitionend.transition);function fh(s){if(jp[s])return jp[s];if(!xa[s])return s;var o=xa[s],u;for(u in o)if(o.hasOwnProperty(u)&&u in Ew)return jp[s]=o[u];return s}var Tw=fh("animationend"),Sw=fh("animationiteration"),xw=fh("animationstart"),Iw=fh("transitionend"),Aw=new Map,Cw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function is(s,o){Aw.set(s,o),a(o,[s])}for(var $p=0;$p<Cw.length;$p++){var Up=Cw[$p],hb=Up.toLowerCase(),fb=Up[0].toUpperCase()+Up.slice(1);is(hb,"on"+fb)}is(Tw,"onAnimationEnd"),is(Sw,"onAnimationIteration"),is(xw,"onAnimationStart"),is("dblclick","onDoubleClick"),is("focusin","onFocus"),is("focusout","onBlur"),is(Iw,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),db=new Set("cancel close invalid load scroll toggle".split(" ").concat(fu));function Pw(s,o,u){var d=s.type||"unknown-event";s.currentTarget=u,Wl(d,o,void 0,s),s.currentTarget=null}function Rw(s,o){o=(o&4)!==0;for(var u=0;u<s.length;u++){var d=s[u],g=d.event;d=d.listeners;e:{var v=void 0;if(o)for(var S=d.length-1;0<=S;S--){var N=d[S],j=N.instance,Q=N.currentTarget;if(N=N.listener,j!==v&&g.isPropagationStopped())break e;Pw(g,N,Q),v=j}else for(S=0;S<d.length;S++){if(N=d[S],j=N.instance,Q=N.currentTarget,N=N.listener,j!==v&&g.isPropagationStopped())break e;Pw(g,N,Q),v=j}}}if(aa)throw s=Wn,aa=!1,Wn=null,s}function at(s,o){var u=o[Qp];u===void 0&&(u=o[Qp]=new Set);var d=s+"__bubble";u.has(d)||(kw(o,s,2,!1),u.add(d))}function zp(s,o,u){var d=0;o&&(d|=4),kw(u,s,d,o)}var dh="_reactListening"+Math.random().toString(36).slice(2);function du(s){if(!s[dh]){s[dh]=!0,r.forEach(function(u){u!=="selectionchange"&&(db.has(u)||zp(u,!1,s),zp(u,!0,s))});var o=s.nodeType===9?s:s.ownerDocument;o===null||o[dh]||(o[dh]=!0,zp("selectionchange",!1,o))}}function kw(s,o,u,d){switch(ma(o)){case 1:var g=jr;break;case 4:g=ih;break;default:g=ru}u=g.bind(null,o,u,s),g=void 0,!Yi||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(g=!0),d?g!==void 0?s.addEventListener(o,u,{capture:!0,passive:g}):s.addEventListener(o,u,!0):g!==void 0?s.addEventListener(o,u,{passive:g}):s.addEventListener(o,u,!1)}function Bp(s,o,u,d,g){var v=d;if(!(o&1)&&!(o&2)&&d!==null)e:for(;;){if(d===null)return;var S=d.tag;if(S===3||S===4){var N=d.stateNode.containerInfo;if(N===g||N.nodeType===8&&N.parentNode===g)break;if(S===4)for(S=d.return;S!==null;){var j=S.tag;if((j===3||j===4)&&(j=S.stateNode.containerInfo,j===g||j.nodeType===8&&j.parentNode===g))return;S=S.return}for(;N!==null;){if(S=fo(N),S===null)return;if(j=S.tag,j===5||j===6){d=v=S;continue e}N=N.parentNode}}d=d.return}Kc(function(){var Q=v,ne=oa(u),ie=[];e:{var te=Aw.get(s);if(te!==void 0){var he=co,me=s;switch(s){case"keypress":if(uo(u)===0)break e;case"keydown":case"keyup":he=Ze;break;case"focusin":me="focus",he=Kt;break;case"focusout":me="blur",he=Kt;break;case"beforeblur":case"afterblur":he=Kt;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":he=su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":he=ah;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":he=Br;break;case Tw:case Sw:case xw:he=uh;break;case Iw:he=Ea;break;case"scroll":he=ya;break;case"wheel":he=Yk;break;case"copy":case"cut":case"paste":he=f;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":he=Nn}var ye=(o&4)!==0,St=!ye&&s==="scroll",q=ye?te!==null?te+"Capture":null:te;ye=[];for(var z=Q,G;z!==null;){G=z;var ae=G.stateNode;if(G.tag===5&&ae!==null&&(G=ae,q!==null&&(ae=Zs(z,q),ae!=null&&ye.push(pu(z,ae,G)))),St)break;z=z.return}0<ye.length&&(te=new he(te,me,null,u,ne),ie.push({event:te,listeners:ye}))}}if(!(o&7)){e:{if(te=s==="mouseover"||s==="pointerover",he=s==="mouseout"||s==="pointerout",te&&u!==Ki&&(me=u.relatedTarget||u.fromElement)&&(fo(me)||me[vi]))break e;if((he||te)&&(te=ne.window===ne?ne:(te=ne.ownerDocument)?te.defaultView||te.parentWindow:window,he?(me=u.relatedTarget||u.toElement,he=Q,me=me?fo(me):null,me!==null&&(St=cr(me),me!==St||me.tag!==5&&me.tag!==6)&&(me=null)):(he=null,me=Q),he!==me)){if(ye=su,ae="onMouseLeave",q="onMouseEnter",z="mouse",(s==="pointerout"||s==="pointerover")&&(ye=Nn,ae="onPointerLeave",q="onPointerEnter",z="pointer"),St=he==null?te:Ca(he),G=me==null?te:Ca(me),te=new ye(ae,z+"leave",he,u,ne),te.target=St,te.relatedTarget=G,ae=null,fo(ne)===Q&&(ye=new ye(q,z+"enter",me,u,ne),ye.target=G,ye.relatedTarget=St,ae=ye),St=ae,he&&me)t:{for(ye=he,q=me,z=0,G=ye;G;G=Ia(G))z++;for(G=0,ae=q;ae;ae=Ia(ae))G++;for(;0<z-G;)ye=Ia(ye),z--;for(;0<G-z;)q=Ia(q),G--;for(;z--;){if(ye===q||q!==null&&ye===q.alternate)break t;ye=Ia(ye),q=Ia(q)}ye=null}else ye=null;he!==null&&bw(ie,te,he,ye,!1),me!==null&&St!==null&&bw(ie,St,me,ye,!0)}}e:{if(te=Q?Ca(Q):window,he=te.nodeName&&te.nodeName.toLowerCase(),he==="select"||he==="input"&&te.type==="file")var ve=rb;else if(cw(te))if(fw)ve=ab;else{ve=sb;var we=ib}else(he=te.nodeName)&&he.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(ve=ob);if(ve&&(ve=ve(s,Q))){hw(ie,ve,u,ne);break e}we&&we(s,te,Q),s==="focusout"&&(we=te._wrapperState)&&we.controlled&&te.type==="number"&&It(te,"number",te.value)}switch(we=Q?Ca(Q):window,s){case"focusin":(cw(we)||we.contentEditable==="true")&&(Sa=we,Op=Q,hu=null);break;case"focusout":hu=Op=Sa=null;break;case"mousedown":Fp=!0;break;case"contextmenu":case"mouseup":case"dragend":Fp=!1,ww(ie,u,ne);break;case"selectionchange":if(cb)break;case"keydown":case"keyup":ww(ie,u,ne)}var Ee;if(Vp)e:{switch(s){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Ta?lw(s,u)&&(xe="onCompositionEnd"):s==="keydown"&&u.keyCode===229&&(xe="onCompositionStart");xe&&(sw&&u.locale!=="ko"&&(Ta||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Ta&&(Ee=sh()):(Dn=ne,ga="value"in Dn?Dn.value:Dn.textContent,Ta=!0)),we=ph(Q,xe),0<we.length&&(xe=new E(xe,s,null,u,ne),ie.push({event:xe,listeners:we}),Ee?xe.data=Ee:(Ee=uw(u),Ee!==null&&(xe.data=Ee)))),(Ee=Jk?Zk(s,u):eb(s,u))&&(Q=ph(Q,"onBeforeInput"),0<Q.length&&(ne=new E("onBeforeInput","beforeinput",null,u,ne),ie.push({event:ne,listeners:Q}),ne.data=Ee))}Rw(ie,o)})}function pu(s,o,u){return{instance:s,listener:o,currentTarget:u}}function ph(s,o){for(var u=o+"Capture",d=[];s!==null;){var g=s,v=g.stateNode;g.tag===5&&v!==null&&(g=v,v=Zs(s,u),v!=null&&d.unshift(pu(s,v,g)),v=Zs(s,o),v!=null&&d.push(pu(s,v,g))),s=s.return}return d}function Ia(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function bw(s,o,u,d,g){for(var v=o._reactName,S=[];u!==null&&u!==d;){var N=u,j=N.alternate,Q=N.stateNode;if(j!==null&&j===d)break;N.tag===5&&Q!==null&&(N=Q,g?(j=Zs(u,v),j!=null&&S.unshift(pu(u,j,N))):g||(j=Zs(u,v),j!=null&&S.push(pu(u,j,N)))),u=u.return}S.length!==0&&s.push({event:o,listeners:S})}var pb=/\r\n?/g,mb=/\u0000|\uFFFD/g;function Dw(s){return(typeof s=="string"?s:""+s).replace(pb,`
`).replace(mb,"")}function mh(s,o,u){if(o=Dw(o),Dw(s)!==o&&u)throw Error(n(425))}function gh(){}var Wp=null,Hp=null;function qp(s,o){return s==="textarea"||s==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Kp=typeof setTimeout=="function"?setTimeout:void 0,gb=typeof clearTimeout=="function"?clearTimeout:void 0,Vw=typeof Promise=="function"?Promise:void 0,yb=typeof queueMicrotask=="function"?queueMicrotask:typeof Vw<"u"?function(s){return Vw.resolve(null).then(s).catch(vb)}:Kp;function vb(s){setTimeout(function(){throw s})}function Gp(s,o){var u=o,d=0;do{var g=u.nextSibling;if(s.removeChild(u),g&&g.nodeType===8)if(u=g.data,u==="/$"){if(d===0){s.removeChild(g),ts(o);return}d--}else u!=="$"&&u!=="$?"&&u!=="$!"||d++;u=g}while(u);ts(o)}function ss(s){for(;s!=null;s=s.nextSibling){var o=s.nodeType;if(o===1||o===3)break;if(o===8){if(o=s.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return s}function Nw(s){s=s.previousSibling;for(var o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="$"||u==="$!"||u==="$?"){if(o===0)return s;o--}else u==="/$"&&o++}s=s.previousSibling}return null}var Aa=Math.random().toString(36).slice(2),Hr="__reactFiber$"+Aa,mu="__reactProps$"+Aa,vi="__reactContainer$"+Aa,Qp="__reactEvents$"+Aa,_b="__reactListeners$"+Aa,wb="__reactHandles$"+Aa;function fo(s){var o=s[Hr];if(o)return o;for(var u=s.parentNode;u;){if(o=u[vi]||u[Hr]){if(u=o.alternate,o.child!==null||u!==null&&u.child!==null)for(s=Nw(s);s!==null;){if(u=s[Hr])return u;s=Nw(s)}return o}s=u,u=s.parentNode}return null}function gu(s){return s=s[Hr]||s[vi],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function Ca(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(n(33))}function yh(s){return s[mu]||null}var Yp=[],Pa=-1;function os(s){return{current:s}}function lt(s){0>Pa||(s.current=Yp[Pa],Yp[Pa]=null,Pa--)}function it(s,o){Pa++,Yp[Pa]=s.current,s.current=o}var as={},sn=os(as),wn=os(!1),po=as;function Ra(s,o){var u=s.type.contextTypes;if(!u)return as;var d=s.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===o)return d.__reactInternalMemoizedMaskedChildContext;var g={},v;for(v in u)g[v]=o[v];return d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=o,s.__reactInternalMemoizedMaskedChildContext=g),g}function En(s){return s=s.childContextTypes,s!=null}function vh(){lt(wn),lt(sn)}function Mw(s,o,u){if(sn.current!==as)throw Error(n(168));it(sn,o),it(wn,u)}function Lw(s,o,u){var d=s.stateNode;if(o=o.childContextTypes,typeof d.getChildContext!="function")return u;d=d.getChildContext();for(var g in d)if(!(g in o))throw Error(n(108,$e(s)||"Unknown",g));return ue({},u,d)}function _h(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||as,po=sn.current,it(sn,s),it(wn,wn.current),!0}function Ow(s,o,u){var d=s.stateNode;if(!d)throw Error(n(169));u?(s=Lw(s,o,po),d.__reactInternalMemoizedMergedChildContext=s,lt(wn),lt(sn),it(sn,s)):lt(wn),it(wn,u)}var _i=null,wh=!1,Xp=!1;function Fw(s){_i===null?_i=[s]:_i.push(s)}function Eb(s){wh=!0,Fw(s)}function ls(){if(!Xp&&_i!==null){Xp=!0;var s=0,o=ze;try{var u=_i;for(ze=1;s<u.length;s++){var d=u[s];do d=d(!0);while(d!==null)}_i=null,wh=!1}catch(g){throw _i!==null&&(_i=_i.slice(s+1)),ql(ua,ls),g}finally{ze=o,Xp=!1}}return null}var ka=[],ba=0,Eh=null,Th=0,qn=[],Kn=0,mo=null,wi=1,Ei="";function go(s,o){ka[ba++]=Th,ka[ba++]=Eh,Eh=s,Th=o}function jw(s,o,u){qn[Kn++]=wi,qn[Kn++]=Ei,qn[Kn++]=mo,mo=s;var d=wi;s=Ei;var g=32-kn(d)-1;d&=~(1<<g),u+=1;var v=32-kn(o)+g;if(30<v){var S=g-g%5;v=(d&(1<<S)-1).toString(32),d>>=S,g-=S,wi=1<<32-kn(o)+g|u<<g|d,Ei=v+s}else wi=1<<v|u<<g|d,Ei=s}function Jp(s){s.return!==null&&(go(s,1),jw(s,1,0))}function Zp(s){for(;s===Eh;)Eh=ka[--ba],ka[ba]=null,Th=ka[--ba],ka[ba]=null;for(;s===mo;)mo=qn[--Kn],qn[Kn]=null,Ei=qn[--Kn],qn[Kn]=null,wi=qn[--Kn],qn[Kn]=null}var Mn=null,Ln=null,ft=!1,dr=null;function $w(s,o){var u=Xn(5,null,null,0);u.elementType="DELETED",u.stateNode=o,u.return=s,o=s.deletions,o===null?(s.deletions=[u],s.flags|=16):o.push(u)}function Uw(s,o){switch(s.tag){case 5:var u=s.type;return o=o.nodeType!==1||u.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(s.stateNode=o,Mn=s,Ln=ss(o.firstChild),!0):!1;case 6:return o=s.pendingProps===""||o.nodeType!==3?null:o,o!==null?(s.stateNode=o,Mn=s,Ln=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(u=mo!==null?{id:wi,overflow:Ei}:null,s.memoizedState={dehydrated:o,treeContext:u,retryLane:1073741824},u=Xn(18,null,null,0),u.stateNode=o,u.return=s,s.child=u,Mn=s,Ln=null,!0):!1;default:return!1}}function em(s){return(s.mode&1)!==0&&(s.flags&128)===0}function tm(s){if(ft){var o=Ln;if(o){var u=o;if(!Uw(s,o)){if(em(s))throw Error(n(418));o=ss(u.nextSibling);var d=Mn;o&&Uw(s,o)?$w(d,u):(s.flags=s.flags&-4097|2,ft=!1,Mn=s)}}else{if(em(s))throw Error(n(418));s.flags=s.flags&-4097|2,ft=!1,Mn=s}}}function zw(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Mn=s}function Sh(s){if(s!==Mn)return!1;if(!ft)return zw(s),ft=!0,!1;var o;if((o=s.tag!==3)&&!(o=s.tag!==5)&&(o=s.type,o=o!=="head"&&o!=="body"&&!qp(s.type,s.memoizedProps)),o&&(o=Ln)){if(em(s))throw Bw(),Error(n(418));for(;o;)$w(s,o),o=ss(o.nextSibling)}if(zw(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(n(317));e:{for(s=s.nextSibling,o=0;s;){if(s.nodeType===8){var u=s.data;if(u==="/$"){if(o===0){Ln=ss(s.nextSibling);break e}o--}else u!=="$"&&u!=="$!"&&u!=="$?"||o++}s=s.nextSibling}Ln=null}}else Ln=Mn?ss(s.stateNode.nextSibling):null;return!0}function Bw(){for(var s=Ln;s;)s=ss(s.nextSibling)}function Da(){Ln=Mn=null,ft=!1}function nm(s){dr===null?dr=[s]:dr.push(s)}var Tb=$.ReactCurrentBatchConfig;function yu(s,o,u){if(s=u.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(n(309));var d=u.stateNode}if(!d)throw Error(n(147,s));var g=d,v=""+s;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===v?o.ref:(o=function(S){var N=g.refs;S===null?delete N[v]:N[v]=S},o._stringRef=v,o)}if(typeof s!="string")throw Error(n(284));if(!u._owner)throw Error(n(290,s))}return s}function xh(s,o){throw s=Object.prototype.toString.call(o),Error(n(31,s==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":s))}function Ww(s){var o=s._init;return o(s._payload)}function Hw(s){function o(q,z){if(s){var G=q.deletions;G===null?(q.deletions=[z],q.flags|=16):G.push(z)}}function u(q,z){if(!s)return null;for(;z!==null;)o(q,z),z=z.sibling;return null}function d(q,z){for(q=new Map;z!==null;)z.key!==null?q.set(z.key,z):q.set(z.index,z),z=z.sibling;return q}function g(q,z){return q=gs(q,z),q.index=0,q.sibling=null,q}function v(q,z,G){return q.index=G,s?(G=q.alternate,G!==null?(G=G.index,G<z?(q.flags|=2,z):G):(q.flags|=2,z)):(q.flags|=1048576,z)}function S(q){return s&&q.alternate===null&&(q.flags|=2),q}function N(q,z,G,ae){return z===null||z.tag!==6?(z=Km(G,q.mode,ae),z.return=q,z):(z=g(z,G),z.return=q,z)}function j(q,z,G,ae){var ve=G.type;return ve===C?ne(q,z,G.props.children,ae,G.key):z!==null&&(z.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Xe&&Ww(ve)===z.type)?(ae=g(z,G.props),ae.ref=yu(q,z,G),ae.return=q,ae):(ae=Gh(G.type,G.key,G.props,null,q.mode,ae),ae.ref=yu(q,z,G),ae.return=q,ae)}function Q(q,z,G,ae){return z===null||z.tag!==4||z.stateNode.containerInfo!==G.containerInfo||z.stateNode.implementation!==G.implementation?(z=Gm(G,q.mode,ae),z.return=q,z):(z=g(z,G.children||[]),z.return=q,z)}function ne(q,z,G,ae,ve){return z===null||z.tag!==7?(z=xo(G,q.mode,ae,ve),z.return=q,z):(z=g(z,G),z.return=q,z)}function ie(q,z,G){if(typeof z=="string"&&z!==""||typeof z=="number")return z=Km(""+z,q.mode,G),z.return=q,z;if(typeof z=="object"&&z!==null){switch(z.$$typeof){case H:return G=Gh(z.type,z.key,z.props,null,q.mode,G),G.ref=yu(q,null,z),G.return=q,G;case X:return z=Gm(z,q.mode,G),z.return=q,z;case Xe:var ae=z._init;return ie(q,ae(z._payload),G)}if(Et(z)||ce(z))return z=xo(z,q.mode,G,null),z.return=q,z;xh(q,z)}return null}function te(q,z,G,ae){var ve=z!==null?z.key:null;if(typeof G=="string"&&G!==""||typeof G=="number")return ve!==null?null:N(q,z,""+G,ae);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case H:return G.key===ve?j(q,z,G,ae):null;case X:return G.key===ve?Q(q,z,G,ae):null;case Xe:return ve=G._init,te(q,z,ve(G._payload),ae)}if(Et(G)||ce(G))return ve!==null?null:ne(q,z,G,ae,null);xh(q,G)}return null}function he(q,z,G,ae,ve){if(typeof ae=="string"&&ae!==""||typeof ae=="number")return q=q.get(G)||null,N(z,q,""+ae,ve);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case H:return q=q.get(ae.key===null?G:ae.key)||null,j(z,q,ae,ve);case X:return q=q.get(ae.key===null?G:ae.key)||null,Q(z,q,ae,ve);case Xe:var we=ae._init;return he(q,z,G,we(ae._payload),ve)}if(Et(ae)||ce(ae))return q=q.get(G)||null,ne(z,q,ae,ve,null);xh(z,ae)}return null}function me(q,z,G,ae){for(var ve=null,we=null,Ee=z,xe=z=0,Ut=null;Ee!==null&&xe<G.length;xe++){Ee.index>xe?(Ut=Ee,Ee=null):Ut=Ee.sibling;var He=te(q,Ee,G[xe],ae);if(He===null){Ee===null&&(Ee=Ut);break}s&&Ee&&He.alternate===null&&o(q,Ee),z=v(He,z,xe),we===null?ve=He:we.sibling=He,we=He,Ee=Ut}if(xe===G.length)return u(q,Ee),ft&&go(q,xe),ve;if(Ee===null){for(;xe<G.length;xe++)Ee=ie(q,G[xe],ae),Ee!==null&&(z=v(Ee,z,xe),we===null?ve=Ee:we.sibling=Ee,we=Ee);return ft&&go(q,xe),ve}for(Ee=d(q,Ee);xe<G.length;xe++)Ut=he(Ee,q,xe,G[xe],ae),Ut!==null&&(s&&Ut.alternate!==null&&Ee.delete(Ut.key===null?xe:Ut.key),z=v(Ut,z,xe),we===null?ve=Ut:we.sibling=Ut,we=Ut);return s&&Ee.forEach(function(ys){return o(q,ys)}),ft&&go(q,xe),ve}function ye(q,z,G,ae){var ve=ce(G);if(typeof ve!="function")throw Error(n(150));if(G=ve.call(G),G==null)throw Error(n(151));for(var we=ve=null,Ee=z,xe=z=0,Ut=null,He=G.next();Ee!==null&&!He.done;xe++,He=G.next()){Ee.index>xe?(Ut=Ee,Ee=null):Ut=Ee.sibling;var ys=te(q,Ee,He.value,ae);if(ys===null){Ee===null&&(Ee=Ut);break}s&&Ee&&ys.alternate===null&&o(q,Ee),z=v(ys,z,xe),we===null?ve=ys:we.sibling=ys,we=ys,Ee=Ut}if(He.done)return u(q,Ee),ft&&go(q,xe),ve;if(Ee===null){for(;!He.done;xe++,He=G.next())He=ie(q,He.value,ae),He!==null&&(z=v(He,z,xe),we===null?ve=He:we.sibling=He,we=He);return ft&&go(q,xe),ve}for(Ee=d(q,Ee);!He.done;xe++,He=G.next())He=he(Ee,q,xe,He.value,ae),He!==null&&(s&&He.alternate!==null&&Ee.delete(He.key===null?xe:He.key),z=v(He,z,xe),we===null?ve=He:we.sibling=He,we=He);return s&&Ee.forEach(function(eD){return o(q,eD)}),ft&&go(q,xe),ve}function St(q,z,G,ae){if(typeof G=="object"&&G!==null&&G.type===C&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case H:e:{for(var ve=G.key,we=z;we!==null;){if(we.key===ve){if(ve=G.type,ve===C){if(we.tag===7){u(q,we.sibling),z=g(we,G.props.children),z.return=q,q=z;break e}}else if(we.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Xe&&Ww(ve)===we.type){u(q,we.sibling),z=g(we,G.props),z.ref=yu(q,we,G),z.return=q,q=z;break e}u(q,we);break}else o(q,we);we=we.sibling}G.type===C?(z=xo(G.props.children,q.mode,ae,G.key),z.return=q,q=z):(ae=Gh(G.type,G.key,G.props,null,q.mode,ae),ae.ref=yu(q,z,G),ae.return=q,q=ae)}return S(q);case X:e:{for(we=G.key;z!==null;){if(z.key===we)if(z.tag===4&&z.stateNode.containerInfo===G.containerInfo&&z.stateNode.implementation===G.implementation){u(q,z.sibling),z=g(z,G.children||[]),z.return=q,q=z;break e}else{u(q,z);break}else o(q,z);z=z.sibling}z=Gm(G,q.mode,ae),z.return=q,q=z}return S(q);case Xe:return we=G._init,St(q,z,we(G._payload),ae)}if(Et(G))return me(q,z,G,ae);if(ce(G))return ye(q,z,G,ae);xh(q,G)}return typeof G=="string"&&G!==""||typeof G=="number"?(G=""+G,z!==null&&z.tag===6?(u(q,z.sibling),z=g(z,G),z.return=q,q=z):(u(q,z),z=Km(G,q.mode,ae),z.return=q,q=z),S(q)):u(q,z)}return St}var Va=Hw(!0),qw=Hw(!1),Ih=os(null),Ah=null,Na=null,rm=null;function im(){rm=Na=Ah=null}function sm(s){var o=Ih.current;lt(Ih),s._currentValue=o}function om(s,o,u){for(;s!==null;){var d=s.alternate;if((s.childLanes&o)!==o?(s.childLanes|=o,d!==null&&(d.childLanes|=o)):d!==null&&(d.childLanes&o)!==o&&(d.childLanes|=o),s===u)break;s=s.return}}function Ma(s,o){Ah=s,rm=Na=null,s=s.dependencies,s!==null&&s.firstContext!==null&&(s.lanes&o&&(Tn=!0),s.firstContext=null)}function Gn(s){var o=s._currentValue;if(rm!==s)if(s={context:s,memoizedValue:o,next:null},Na===null){if(Ah===null)throw Error(n(308));Na=s,Ah.dependencies={lanes:0,firstContext:s}}else Na=Na.next=s;return o}var yo=null;function am(s){yo===null?yo=[s]:yo.push(s)}function Kw(s,o,u,d){var g=o.interleaved;return g===null?(u.next=u,am(o)):(u.next=g.next,g.next=u),o.interleaved=u,Ti(s,d)}function Ti(s,o){s.lanes|=o;var u=s.alternate;for(u!==null&&(u.lanes|=o),u=s,s=s.return;s!==null;)s.childLanes|=o,u=s.alternate,u!==null&&(u.childLanes|=o),u=s,s=s.return;return u.tag===3?u.stateNode:null}var us=!1;function lm(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gw(s,o){s=s.updateQueue,o.updateQueue===s&&(o.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function Si(s,o){return{eventTime:s,lane:o,tag:0,payload:null,callback:null,next:null}}function cs(s,o,u){var d=s.updateQueue;if(d===null)return null;if(d=d.shared,We&2){var g=d.pending;return g===null?o.next=o:(o.next=g.next,g.next=o),d.pending=o,Ti(s,u)}return g=d.interleaved,g===null?(o.next=o,am(d)):(o.next=g.next,g.next=o),d.interleaved=o,Ti(s,u)}function Ch(s,o,u){if(o=o.updateQueue,o!==null&&(o=o.shared,(u&4194240)!==0)){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,Jl(s,u)}}function Qw(s,o){var u=s.updateQueue,d=s.alternate;if(d!==null&&(d=d.updateQueue,u===d)){var g=null,v=null;if(u=u.firstBaseUpdate,u!==null){do{var S={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};v===null?g=v=S:v=v.next=S,u=u.next}while(u!==null);v===null?g=v=o:v=v.next=o}else g=v=o;u={baseState:d.baseState,firstBaseUpdate:g,lastBaseUpdate:v,shared:d.shared,effects:d.effects},s.updateQueue=u;return}s=u.lastBaseUpdate,s===null?u.firstBaseUpdate=o:s.next=o,u.lastBaseUpdate=o}function Ph(s,o,u,d){var g=s.updateQueue;us=!1;var v=g.firstBaseUpdate,S=g.lastBaseUpdate,N=g.shared.pending;if(N!==null){g.shared.pending=null;var j=N,Q=j.next;j.next=null,S===null?v=Q:S.next=Q,S=j;var ne=s.alternate;ne!==null&&(ne=ne.updateQueue,N=ne.lastBaseUpdate,N!==S&&(N===null?ne.firstBaseUpdate=Q:N.next=Q,ne.lastBaseUpdate=j))}if(v!==null){var ie=g.baseState;S=0,ne=Q=j=null,N=v;do{var te=N.lane,he=N.eventTime;if((d&te)===te){ne!==null&&(ne=ne.next={eventTime:he,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var me=s,ye=N;switch(te=o,he=u,ye.tag){case 1:if(me=ye.payload,typeof me=="function"){ie=me.call(he,ie,te);break e}ie=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ye.payload,te=typeof me=="function"?me.call(he,ie,te):me,te==null)break e;ie=ue({},ie,te);break e;case 2:us=!0}}N.callback!==null&&N.lane!==0&&(s.flags|=64,te=g.effects,te===null?g.effects=[N]:te.push(N))}else he={eventTime:he,lane:te,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ne===null?(Q=ne=he,j=ie):ne=ne.next=he,S|=te;if(N=N.next,N===null){if(N=g.shared.pending,N===null)break;te=N,N=te.next,te.next=null,g.lastBaseUpdate=te,g.shared.pending=null}}while(!0);if(ne===null&&(j=ie),g.baseState=j,g.firstBaseUpdate=Q,g.lastBaseUpdate=ne,o=g.shared.interleaved,o!==null){g=o;do S|=g.lane,g=g.next;while(g!==o)}else v===null&&(g.shared.lanes=0);wo|=S,s.lanes=S,s.memoizedState=ie}}function Yw(s,o,u){if(s=o.effects,o.effects=null,s!==null)for(o=0;o<s.length;o++){var d=s[o],g=d.callback;if(g!==null){if(d.callback=null,d=u,typeof g!="function")throw Error(n(191,g));g.call(d)}}}var vu={},qr=os(vu),_u=os(vu),wu=os(vu);function vo(s){if(s===vu)throw Error(n(174));return s}function um(s,o){switch(it(wu,o),it(_u,s),it(qr,vu),s=o.nodeType,s){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:ra(null,"");break;default:s=s===8?o.parentNode:o,o=s.namespaceURI||null,s=s.tagName,o=ra(o,s)}lt(qr),it(qr,o)}function La(){lt(qr),lt(_u),lt(wu)}function Xw(s){vo(wu.current);var o=vo(qr.current),u=ra(o,s.type);o!==u&&(it(_u,s),it(qr,u))}function cm(s){_u.current===s&&(lt(qr),lt(_u))}var mt=os(0);function Rh(s){for(var o=s;o!==null;){if(o.tag===13){var u=o.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if(o.flags&128)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var hm=[];function fm(){for(var s=0;s<hm.length;s++)hm[s]._workInProgressVersionPrimary=null;hm.length=0}var kh=$.ReactCurrentDispatcher,dm=$.ReactCurrentBatchConfig,_o=0,gt=null,Nt=null,jt=null,bh=!1,Eu=!1,Tu=0,Sb=0;function on(){throw Error(n(321))}function pm(s,o){if(o===null)return!1;for(var u=0;u<o.length&&u<s.length;u++)if(!fr(s[u],o[u]))return!1;return!0}function mm(s,o,u,d,g,v){if(_o=v,gt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,kh.current=s===null||s.memoizedState===null?Cb:Pb,s=u(d,g),Eu){v=0;do{if(Eu=!1,Tu=0,25<=v)throw Error(n(301));v+=1,jt=Nt=null,o.updateQueue=null,kh.current=Rb,s=u(d,g)}while(Eu)}if(kh.current=Nh,o=Nt!==null&&Nt.next!==null,_o=0,jt=Nt=gt=null,bh=!1,o)throw Error(n(300));return s}function gm(){var s=Tu!==0;return Tu=0,s}function Kr(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?gt.memoizedState=jt=s:jt=jt.next=s,jt}function Qn(){if(Nt===null){var s=gt.alternate;s=s!==null?s.memoizedState:null}else s=Nt.next;var o=jt===null?gt.memoizedState:jt.next;if(o!==null)jt=o,Nt=s;else{if(s===null)throw Error(n(310));Nt=s,s={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},jt===null?gt.memoizedState=jt=s:jt=jt.next=s}return jt}function Su(s,o){return typeof o=="function"?o(s):o}function ym(s){var o=Qn(),u=o.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=s;var d=Nt,g=d.baseQueue,v=u.pending;if(v!==null){if(g!==null){var S=g.next;g.next=v.next,v.next=S}d.baseQueue=g=v,u.pending=null}if(g!==null){v=g.next,d=d.baseState;var N=S=null,j=null,Q=v;do{var ne=Q.lane;if((_o&ne)===ne)j!==null&&(j=j.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),d=Q.hasEagerState?Q.eagerState:s(d,Q.action);else{var ie={lane:ne,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};j===null?(N=j=ie,S=d):j=j.next=ie,gt.lanes|=ne,wo|=ne}Q=Q.next}while(Q!==null&&Q!==v);j===null?S=d:j.next=N,fr(d,o.memoizedState)||(Tn=!0),o.memoizedState=d,o.baseState=S,o.baseQueue=j,u.lastRenderedState=d}if(s=u.interleaved,s!==null){g=s;do v=g.lane,gt.lanes|=v,wo|=v,g=g.next;while(g!==s)}else g===null&&(u.lanes=0);return[o.memoizedState,u.dispatch]}function vm(s){var o=Qn(),u=o.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=s;var d=u.dispatch,g=u.pending,v=o.memoizedState;if(g!==null){u.pending=null;var S=g=g.next;do v=s(v,S.action),S=S.next;while(S!==g);fr(v,o.memoizedState)||(Tn=!0),o.memoizedState=v,o.baseQueue===null&&(o.baseState=v),u.lastRenderedState=v}return[v,d]}function Jw(){}function Zw(s,o){var u=gt,d=Qn(),g=o(),v=!fr(d.memoizedState,g);if(v&&(d.memoizedState=g,Tn=!0),d=d.queue,_m(n0.bind(null,u,d,s),[s]),d.getSnapshot!==o||v||jt!==null&&jt.memoizedState.tag&1){if(u.flags|=2048,xu(9,t0.bind(null,u,d,g,o),void 0,null),$t===null)throw Error(n(349));_o&30||e0(u,o,g)}return g}function e0(s,o,u){s.flags|=16384,s={getSnapshot:o,value:u},o=gt.updateQueue,o===null?(o={lastEffect:null,stores:null},gt.updateQueue=o,o.stores=[s]):(u=o.stores,u===null?o.stores=[s]:u.push(s))}function t0(s,o,u,d){o.value=u,o.getSnapshot=d,r0(o)&&i0(s)}function n0(s,o,u){return u(function(){r0(o)&&i0(s)})}function r0(s){var o=s.getSnapshot;s=s.value;try{var u=o();return!fr(s,u)}catch{return!0}}function i0(s){var o=Ti(s,1);o!==null&&yr(o,s,1,-1)}function s0(s){var o=Kr();return typeof s=="function"&&(s=s()),o.memoizedState=o.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Su,lastRenderedState:s},o.queue=s,s=s.dispatch=Ab.bind(null,gt,s),[o.memoizedState,s]}function xu(s,o,u,d){return s={tag:s,create:o,destroy:u,deps:d,next:null},o=gt.updateQueue,o===null?(o={lastEffect:null,stores:null},gt.updateQueue=o,o.lastEffect=s.next=s):(u=o.lastEffect,u===null?o.lastEffect=s.next=s:(d=u.next,u.next=s,s.next=d,o.lastEffect=s)),s}function o0(){return Qn().memoizedState}function Dh(s,o,u,d){var g=Kr();gt.flags|=s,g.memoizedState=xu(1|o,u,void 0,d===void 0?null:d)}function Vh(s,o,u,d){var g=Qn();d=d===void 0?null:d;var v=void 0;if(Nt!==null){var S=Nt.memoizedState;if(v=S.destroy,d!==null&&pm(d,S.deps)){g.memoizedState=xu(o,u,v,d);return}}gt.flags|=s,g.memoizedState=xu(1|o,u,v,d)}function a0(s,o){return Dh(8390656,8,s,o)}function _m(s,o){return Vh(2048,8,s,o)}function l0(s,o){return Vh(4,2,s,o)}function u0(s,o){return Vh(4,4,s,o)}function c0(s,o){if(typeof o=="function")return s=s(),o(s),function(){o(null)};if(o!=null)return s=s(),o.current=s,function(){o.current=null}}function h0(s,o,u){return u=u!=null?u.concat([s]):null,Vh(4,4,c0.bind(null,o,s),u)}function wm(){}function f0(s,o){var u=Qn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&pm(o,d[1])?d[0]:(u.memoizedState=[s,o],s)}function d0(s,o){var u=Qn();o=o===void 0?null:o;var d=u.memoizedState;return d!==null&&o!==null&&pm(o,d[1])?d[0]:(s=s(),u.memoizedState=[s,o],s)}function p0(s,o,u){return _o&21?(fr(u,o)||(u=Yl(),gt.lanes|=u,wo|=u,s.baseState=!0),o):(s.baseState&&(s.baseState=!1,Tn=!0),s.memoizedState=u)}function xb(s,o){var u=ze;ze=u!==0&&4>u?u:4,s(!0);var d=dm.transition;dm.transition={};try{s(!1),o()}finally{ze=u,dm.transition=d}}function m0(){return Qn().memoizedState}function Ib(s,o,u){var d=ps(s);if(u={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null},g0(s))y0(o,u);else if(u=Kw(s,o,u,d),u!==null){var g=mn();yr(u,s,d,g),v0(u,o,d)}}function Ab(s,o,u){var d=ps(s),g={lane:d,action:u,hasEagerState:!1,eagerState:null,next:null};if(g0(s))y0(o,g);else{var v=s.alternate;if(s.lanes===0&&(v===null||v.lanes===0)&&(v=o.lastRenderedReducer,v!==null))try{var S=o.lastRenderedState,N=v(S,u);if(g.hasEagerState=!0,g.eagerState=N,fr(N,S)){var j=o.interleaved;j===null?(g.next=g,am(o)):(g.next=j.next,j.next=g),o.interleaved=g;return}}catch{}finally{}u=Kw(s,o,g,d),u!==null&&(g=mn(),yr(u,s,d,g),v0(u,o,d))}}function g0(s){var o=s.alternate;return s===gt||o!==null&&o===gt}function y0(s,o){Eu=bh=!0;var u=s.pending;u===null?o.next=o:(o.next=u.next,u.next=o),s.pending=o}function v0(s,o,u){if(u&4194240){var d=o.lanes;d&=s.pendingLanes,u|=d,o.lanes=u,Jl(s,u)}}var Nh={readContext:Gn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Cb={readContext:Gn,useCallback:function(s,o){return Kr().memoizedState=[s,o===void 0?null:o],s},useContext:Gn,useEffect:a0,useImperativeHandle:function(s,o,u){return u=u!=null?u.concat([s]):null,Dh(4194308,4,c0.bind(null,o,s),u)},useLayoutEffect:function(s,o){return Dh(4194308,4,s,o)},useInsertionEffect:function(s,o){return Dh(4,2,s,o)},useMemo:function(s,o){var u=Kr();return o=o===void 0?null:o,s=s(),u.memoizedState=[s,o],s},useReducer:function(s,o,u){var d=Kr();return o=u!==void 0?u(o):o,d.memoizedState=d.baseState=o,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:o},d.queue=s,s=s.dispatch=Ib.bind(null,gt,s),[d.memoizedState,s]},useRef:function(s){var o=Kr();return s={current:s},o.memoizedState=s},useState:s0,useDebugValue:wm,useDeferredValue:function(s){return Kr().memoizedState=s},useTransition:function(){var s=s0(!1),o=s[0];return s=xb.bind(null,s[1]),Kr().memoizedState=s,[o,s]},useMutableSource:function(){},useSyncExternalStore:function(s,o,u){var d=gt,g=Kr();if(ft){if(u===void 0)throw Error(n(407));u=u()}else{if(u=o(),$t===null)throw Error(n(349));_o&30||e0(d,o,u)}g.memoizedState=u;var v={value:u,getSnapshot:o};return g.queue=v,a0(n0.bind(null,d,v,s),[s]),d.flags|=2048,xu(9,t0.bind(null,d,v,u,o),void 0,null),u},useId:function(){var s=Kr(),o=$t.identifierPrefix;if(ft){var u=Ei,d=wi;u=(d&~(1<<32-kn(d)-1)).toString(32)+u,o=":"+o+"R"+u,u=Tu++,0<u&&(o+="H"+u.toString(32)),o+=":"}else u=Sb++,o=":"+o+"r"+u.toString(32)+":";return s.memoizedState=o},unstable_isNewReconciler:!1},Pb={readContext:Gn,useCallback:f0,useContext:Gn,useEffect:_m,useImperativeHandle:h0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:d0,useReducer:ym,useRef:o0,useState:function(){return ym(Su)},useDebugValue:wm,useDeferredValue:function(s){var o=Qn();return p0(o,Nt.memoizedState,s)},useTransition:function(){var s=ym(Su)[0],o=Qn().memoizedState;return[s,o]},useMutableSource:Jw,useSyncExternalStore:Zw,useId:m0,unstable_isNewReconciler:!1},Rb={readContext:Gn,useCallback:f0,useContext:Gn,useEffect:_m,useImperativeHandle:h0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:d0,useReducer:vm,useRef:o0,useState:function(){return vm(Su)},useDebugValue:wm,useDeferredValue:function(s){var o=Qn();return Nt===null?o.memoizedState=s:p0(o,Nt.memoizedState,s)},useTransition:function(){var s=vm(Su)[0],o=Qn().memoizedState;return[s,o]},useMutableSource:Jw,useSyncExternalStore:Zw,useId:m0,unstable_isNewReconciler:!1};function pr(s,o){if(s&&s.defaultProps){o=ue({},o),s=s.defaultProps;for(var u in s)o[u]===void 0&&(o[u]=s[u]);return o}return o}function Em(s,o,u,d){o=s.memoizedState,u=u(d,o),u=u==null?o:ue({},o,u),s.memoizedState=u,s.lanes===0&&(s.updateQueue.baseState=u)}var Mh={isMounted:function(s){return(s=s._reactInternals)?cr(s)===s:!1},enqueueSetState:function(s,o,u){s=s._reactInternals;var d=mn(),g=ps(s),v=Si(d,g);v.payload=o,u!=null&&(v.callback=u),o=cs(s,v,g),o!==null&&(yr(o,s,g,d),Ch(o,s,g))},enqueueReplaceState:function(s,o,u){s=s._reactInternals;var d=mn(),g=ps(s),v=Si(d,g);v.tag=1,v.payload=o,u!=null&&(v.callback=u),o=cs(s,v,g),o!==null&&(yr(o,s,g,d),Ch(o,s,g))},enqueueForceUpdate:function(s,o){s=s._reactInternals;var u=mn(),d=ps(s),g=Si(u,d);g.tag=2,o!=null&&(g.callback=o),o=cs(s,g,d),o!==null&&(yr(o,s,d,u),Ch(o,s,d))}};function _0(s,o,u,d,g,v,S){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(d,v,S):o.prototype&&o.prototype.isPureReactComponent?!cu(u,d)||!cu(g,v):!0}function w0(s,o,u){var d=!1,g=as,v=o.contextType;return typeof v=="object"&&v!==null?v=Gn(v):(g=En(o)?po:sn.current,d=o.contextTypes,v=(d=d!=null)?Ra(s,g):as),o=new o(u,v),s.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Mh,s.stateNode=o,o._reactInternals=s,d&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=g,s.__reactInternalMemoizedMaskedChildContext=v),o}function E0(s,o,u,d){s=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(u,d),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(u,d),o.state!==s&&Mh.enqueueReplaceState(o,o.state,null)}function Tm(s,o,u,d){var g=s.stateNode;g.props=u,g.state=s.memoizedState,g.refs={},lm(s);var v=o.contextType;typeof v=="object"&&v!==null?g.context=Gn(v):(v=En(o)?po:sn.current,g.context=Ra(s,v)),g.state=s.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Em(s,o,v,u),g.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(o=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),o!==g.state&&Mh.enqueueReplaceState(g,g.state,null),Ph(s,u,g,d),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308)}function Oa(s,o){try{var u="",d=o;do u+=De(d),d=d.return;while(d);var g=u}catch(v){g=`
Error generating stack: `+v.message+`
`+v.stack}return{value:s,source:o,stack:g,digest:null}}function Sm(s,o,u){return{value:s,source:null,stack:u??null,digest:o??null}}function xm(s,o){try{console.error(o.value)}catch(u){setTimeout(function(){throw u})}}var kb=typeof WeakMap=="function"?WeakMap:Map;function T0(s,o,u){u=Si(-1,u),u.tag=3,u.payload={element:null};var d=o.value;return u.callback=function(){zh||(zh=!0,jm=d),xm(s,o)},u}function S0(s,o,u){u=Si(-1,u),u.tag=3;var d=s.type.getDerivedStateFromError;if(typeof d=="function"){var g=o.value;u.payload=function(){return d(g)},u.callback=function(){xm(s,o)}}var v=s.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(u.callback=function(){xm(s,o),typeof d!="function"&&(fs===null?fs=new Set([this]):fs.add(this));var S=o.stack;this.componentDidCatch(o.value,{componentStack:S!==null?S:""})}),u}function x0(s,o,u){var d=s.pingCache;if(d===null){d=s.pingCache=new kb;var g=new Set;d.set(o,g)}else g=d.get(o),g===void 0&&(g=new Set,d.set(o,g));g.has(u)||(g.add(u),s=Wb.bind(null,s,o,u),o.then(s,s))}function I0(s){do{var o;if((o=s.tag===13)&&(o=s.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return s;s=s.return}while(s!==null);return null}function A0(s,o,u,d,g){return s.mode&1?(s.flags|=65536,s.lanes=g,s):(s===o?s.flags|=65536:(s.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(o=Si(-1,1),o.tag=2,cs(u,o,1))),u.lanes|=1),s)}var bb=$.ReactCurrentOwner,Tn=!1;function pn(s,o,u,d){o.child=s===null?qw(o,null,u,d):Va(o,s.child,u,d)}function C0(s,o,u,d,g){u=u.render;var v=o.ref;return Ma(o,g),d=mm(s,o,u,d,v,g),u=gm(),s!==null&&!Tn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~g,xi(s,o,g)):(ft&&u&&Jp(o),o.flags|=1,pn(s,o,d,g),o.child)}function P0(s,o,u,d,g){if(s===null){var v=u.type;return typeof v=="function"&&!qm(v)&&v.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(o.tag=15,o.type=v,R0(s,o,v,d,g)):(s=Gh(u.type,null,d,o,o.mode,g),s.ref=o.ref,s.return=o,o.child=s)}if(v=s.child,!(s.lanes&g)){var S=v.memoizedProps;if(u=u.compare,u=u!==null?u:cu,u(S,d)&&s.ref===o.ref)return xi(s,o,g)}return o.flags|=1,s=gs(v,d),s.ref=o.ref,s.return=o,o.child=s}function R0(s,o,u,d,g){if(s!==null){var v=s.memoizedProps;if(cu(v,d)&&s.ref===o.ref)if(Tn=!1,o.pendingProps=d=v,(s.lanes&g)!==0)s.flags&131072&&(Tn=!0);else return o.lanes=s.lanes,xi(s,o,g)}return Im(s,o,u,d,g)}function k0(s,o,u){var d=o.pendingProps,g=d.children,v=s!==null?s.memoizedState:null;if(d.mode==="hidden")if(!(o.mode&1))o.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ja,On),On|=u;else{if(!(u&1073741824))return s=v!==null?v.baseLanes|u:u,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:s,cachePool:null,transitions:null},o.updateQueue=null,it(ja,On),On|=s,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=v!==null?v.baseLanes:u,it(ja,On),On|=d}else v!==null?(d=v.baseLanes|u,o.memoizedState=null):d=u,it(ja,On),On|=d;return pn(s,o,g,u),o.child}function b0(s,o){var u=o.ref;(s===null&&u!==null||s!==null&&s.ref!==u)&&(o.flags|=512,o.flags|=2097152)}function Im(s,o,u,d,g){var v=En(u)?po:sn.current;return v=Ra(o,v),Ma(o,g),u=mm(s,o,u,d,v,g),d=gm(),s!==null&&!Tn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~g,xi(s,o,g)):(ft&&d&&Jp(o),o.flags|=1,pn(s,o,u,g),o.child)}function D0(s,o,u,d,g){if(En(u)){var v=!0;_h(o)}else v=!1;if(Ma(o,g),o.stateNode===null)Oh(s,o),w0(o,u,d),Tm(o,u,d,g),d=!0;else if(s===null){var S=o.stateNode,N=o.memoizedProps;S.props=N;var j=S.context,Q=u.contextType;typeof Q=="object"&&Q!==null?Q=Gn(Q):(Q=En(u)?po:sn.current,Q=Ra(o,Q));var ne=u.getDerivedStateFromProps,ie=typeof ne=="function"||typeof S.getSnapshotBeforeUpdate=="function";ie||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(N!==d||j!==Q)&&E0(o,S,d,Q),us=!1;var te=o.memoizedState;S.state=te,Ph(o,d,S,g),j=o.memoizedState,N!==d||te!==j||wn.current||us?(typeof ne=="function"&&(Em(o,u,ne,d),j=o.memoizedState),(N=us||_0(o,u,N,d,te,j,Q))?(ie||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(o.flags|=4194308)):(typeof S.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=d,o.memoizedState=j),S.props=d,S.state=j,S.context=Q,d=N):(typeof S.componentDidMount=="function"&&(o.flags|=4194308),d=!1)}else{S=o.stateNode,Gw(s,o),N=o.memoizedProps,Q=o.type===o.elementType?N:pr(o.type,N),S.props=Q,ie=o.pendingProps,te=S.context,j=u.contextType,typeof j=="object"&&j!==null?j=Gn(j):(j=En(u)?po:sn.current,j=Ra(o,j));var he=u.getDerivedStateFromProps;(ne=typeof he=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(N!==ie||te!==j)&&E0(o,S,d,j),us=!1,te=o.memoizedState,S.state=te,Ph(o,d,S,g);var me=o.memoizedState;N!==ie||te!==me||wn.current||us?(typeof he=="function"&&(Em(o,u,he,d),me=o.memoizedState),(Q=us||_0(o,u,Q,d,te,me,j)||!1)?(ne||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(d,me,j),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(d,me,j)),typeof S.componentDidUpdate=="function"&&(o.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof S.componentDidUpdate!="function"||N===s.memoizedProps&&te===s.memoizedState||(o.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||N===s.memoizedProps&&te===s.memoizedState||(o.flags|=1024),o.memoizedProps=d,o.memoizedState=me),S.props=d,S.state=me,S.context=j,d=Q):(typeof S.componentDidUpdate!="function"||N===s.memoizedProps&&te===s.memoizedState||(o.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||N===s.memoizedProps&&te===s.memoizedState||(o.flags|=1024),d=!1)}return Am(s,o,u,d,v,g)}function Am(s,o,u,d,g,v){b0(s,o);var S=(o.flags&128)!==0;if(!d&&!S)return g&&Ow(o,u,!1),xi(s,o,v);d=o.stateNode,bb.current=o;var N=S&&typeof u.getDerivedStateFromError!="function"?null:d.render();return o.flags|=1,s!==null&&S?(o.child=Va(o,s.child,null,v),o.child=Va(o,null,N,v)):pn(s,o,N,v),o.memoizedState=d.state,g&&Ow(o,u,!0),o.child}function V0(s){var o=s.stateNode;o.pendingContext?Mw(s,o.pendingContext,o.pendingContext!==o.context):o.context&&Mw(s,o.context,!1),um(s,o.containerInfo)}function N0(s,o,u,d,g){return Da(),nm(g),o.flags|=256,pn(s,o,u,d),o.child}var Cm={dehydrated:null,treeContext:null,retryLane:0};function Pm(s){return{baseLanes:s,cachePool:null,transitions:null}}function M0(s,o,u){var d=o.pendingProps,g=mt.current,v=!1,S=(o.flags&128)!==0,N;if((N=S)||(N=s!==null&&s.memoizedState===null?!1:(g&2)!==0),N?(v=!0,o.flags&=-129):(s===null||s.memoizedState!==null)&&(g|=1),it(mt,g&1),s===null)return tm(o),s=o.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?(o.mode&1?s.data==="$!"?o.lanes=8:o.lanes=1073741824:o.lanes=1,null):(S=d.children,s=d.fallback,v?(d=o.mode,v=o.child,S={mode:"hidden",children:S},!(d&1)&&v!==null?(v.childLanes=0,v.pendingProps=S):v=Qh(S,d,0,null),s=xo(s,d,u,null),v.return=o,s.return=o,v.sibling=s,o.child=v,o.child.memoizedState=Pm(u),o.memoizedState=Cm,s):Rm(o,S));if(g=s.memoizedState,g!==null&&(N=g.dehydrated,N!==null))return Db(s,o,S,d,N,g,u);if(v){v=d.fallback,S=o.mode,g=s.child,N=g.sibling;var j={mode:"hidden",children:d.children};return!(S&1)&&o.child!==g?(d=o.child,d.childLanes=0,d.pendingProps=j,o.deletions=null):(d=gs(g,j),d.subtreeFlags=g.subtreeFlags&14680064),N!==null?v=gs(N,v):(v=xo(v,S,u,null),v.flags|=2),v.return=o,d.return=o,d.sibling=v,o.child=d,d=v,v=o.child,S=s.child.memoizedState,S=S===null?Pm(u):{baseLanes:S.baseLanes|u,cachePool:null,transitions:S.transitions},v.memoizedState=S,v.childLanes=s.childLanes&~u,o.memoizedState=Cm,d}return v=s.child,s=v.sibling,d=gs(v,{mode:"visible",children:d.children}),!(o.mode&1)&&(d.lanes=u),d.return=o,d.sibling=null,s!==null&&(u=o.deletions,u===null?(o.deletions=[s],o.flags|=16):u.push(s)),o.child=d,o.memoizedState=null,d}function Rm(s,o){return o=Qh({mode:"visible",children:o},s.mode,0,null),o.return=s,s.child=o}function Lh(s,o,u,d){return d!==null&&nm(d),Va(o,s.child,null,u),s=Rm(o,o.pendingProps.children),s.flags|=2,o.memoizedState=null,s}function Db(s,o,u,d,g,v,S){if(u)return o.flags&256?(o.flags&=-257,d=Sm(Error(n(422))),Lh(s,o,S,d)):o.memoizedState!==null?(o.child=s.child,o.flags|=128,null):(v=d.fallback,g=o.mode,d=Qh({mode:"visible",children:d.children},g,0,null),v=xo(v,g,S,null),v.flags|=2,d.return=o,v.return=o,d.sibling=v,o.child=d,o.mode&1&&Va(o,s.child,null,S),o.child.memoizedState=Pm(S),o.memoizedState=Cm,v);if(!(o.mode&1))return Lh(s,o,S,null);if(g.data==="$!"){if(d=g.nextSibling&&g.nextSibling.dataset,d)var N=d.dgst;return d=N,v=Error(n(419)),d=Sm(v,d,void 0),Lh(s,o,S,d)}if(N=(S&s.childLanes)!==0,Tn||N){if(d=$t,d!==null){switch(S&-S){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=g&(d.suspendedLanes|S)?0:g,g!==0&&g!==v.retryLane&&(v.retryLane=g,Ti(s,g),yr(d,s,g,-1))}return Hm(),d=Sm(Error(n(421))),Lh(s,o,S,d)}return g.data==="$?"?(o.flags|=128,o.child=s.child,o=Hb.bind(null,s),g._reactRetry=o,null):(s=v.treeContext,Ln=ss(g.nextSibling),Mn=o,ft=!0,dr=null,s!==null&&(qn[Kn++]=wi,qn[Kn++]=Ei,qn[Kn++]=mo,wi=s.id,Ei=s.overflow,mo=o),o=Rm(o,d.children),o.flags|=4096,o)}function L0(s,o,u){s.lanes|=o;var d=s.alternate;d!==null&&(d.lanes|=o),om(s.return,o,u)}function km(s,o,u,d,g){var v=s.memoizedState;v===null?s.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:d,tail:u,tailMode:g}:(v.isBackwards=o,v.rendering=null,v.renderingStartTime=0,v.last=d,v.tail=u,v.tailMode=g)}function O0(s,o,u){var d=o.pendingProps,g=d.revealOrder,v=d.tail;if(pn(s,o,d.children,u),d=mt.current,d&2)d=d&1|2,o.flags|=128;else{if(s!==null&&s.flags&128)e:for(s=o.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&L0(s,u,o);else if(s.tag===19)L0(s,u,o);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===o)break e;for(;s.sibling===null;){if(s.return===null||s.return===o)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}d&=1}if(it(mt,d),!(o.mode&1))o.memoizedState=null;else switch(g){case"forwards":for(u=o.child,g=null;u!==null;)s=u.alternate,s!==null&&Rh(s)===null&&(g=u),u=u.sibling;u=g,u===null?(g=o.child,o.child=null):(g=u.sibling,u.sibling=null),km(o,!1,g,u,v);break;case"backwards":for(u=null,g=o.child,o.child=null;g!==null;){if(s=g.alternate,s!==null&&Rh(s)===null){o.child=g;break}s=g.sibling,g.sibling=u,u=g,g=s}km(o,!0,u,null,v);break;case"together":km(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function Oh(s,o){!(o.mode&1)&&s!==null&&(s.alternate=null,o.alternate=null,o.flags|=2)}function xi(s,o,u){if(s!==null&&(o.dependencies=s.dependencies),wo|=o.lanes,!(u&o.childLanes))return null;if(s!==null&&o.child!==s.child)throw Error(n(153));if(o.child!==null){for(s=o.child,u=gs(s,s.pendingProps),o.child=u,u.return=o;s.sibling!==null;)s=s.sibling,u=u.sibling=gs(s,s.pendingProps),u.return=o;u.sibling=null}return o.child}function Vb(s,o,u){switch(o.tag){case 3:V0(o),Da();break;case 5:Xw(o);break;case 1:En(o.type)&&_h(o);break;case 4:um(o,o.stateNode.containerInfo);break;case 10:var d=o.type._context,g=o.memoizedProps.value;it(Ih,d._currentValue),d._currentValue=g;break;case 13:if(d=o.memoizedState,d!==null)return d.dehydrated!==null?(it(mt,mt.current&1),o.flags|=128,null):u&o.child.childLanes?M0(s,o,u):(it(mt,mt.current&1),s=xi(s,o,u),s!==null?s.sibling:null);it(mt,mt.current&1);break;case 19:if(d=(u&o.childLanes)!==0,s.flags&128){if(d)return O0(s,o,u);o.flags|=128}if(g=o.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),it(mt,mt.current),d)break;return null;case 22:case 23:return o.lanes=0,k0(s,o,u)}return xi(s,o,u)}var F0,bm,j0,$0;F0=function(s,o){for(var u=o.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===o)break;for(;u.sibling===null;){if(u.return===null||u.return===o)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},bm=function(){},j0=function(s,o,u,d){var g=s.memoizedProps;if(g!==d){s=o.stateNode,vo(qr.current);var v=null;switch(u){case"input":g=ta(s,g),d=ta(s,d),v=[];break;case"select":g=ue({},g,{value:void 0}),d=ue({},d,{value:void 0}),v=[];break;case"textarea":g=jl(s,g),d=jl(s,d),v=[];break;default:typeof g.onClick!="function"&&typeof d.onClick=="function"&&(s.onclick=gh)}ur(u,d);var S;u=null;for(Q in g)if(!d.hasOwnProperty(Q)&&g.hasOwnProperty(Q)&&g[Q]!=null)if(Q==="style"){var N=g[Q];for(S in N)N.hasOwnProperty(S)&&(u||(u={}),u[S]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(i.hasOwnProperty(Q)?v||(v=[]):(v=v||[]).push(Q,null));for(Q in d){var j=d[Q];if(N=g!=null?g[Q]:void 0,d.hasOwnProperty(Q)&&j!==N&&(j!=null||N!=null))if(Q==="style")if(N){for(S in N)!N.hasOwnProperty(S)||j&&j.hasOwnProperty(S)||(u||(u={}),u[S]="");for(S in j)j.hasOwnProperty(S)&&N[S]!==j[S]&&(u||(u={}),u[S]=j[S])}else u||(v||(v=[]),v.push(Q,u)),u=j;else Q==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,N=N?N.__html:void 0,j!=null&&N!==j&&(v=v||[]).push(Q,j)):Q==="children"?typeof j!="string"&&typeof j!="number"||(v=v||[]).push(Q,""+j):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(i.hasOwnProperty(Q)?(j!=null&&Q==="onScroll"&&at("scroll",s),v||N===j||(v=[])):(v=v||[]).push(Q,j))}u&&(v=v||[]).push("style",u);var Q=v;(o.updateQueue=Q)&&(o.flags|=4)}},$0=function(s,o,u,d){u!==d&&(o.flags|=4)};function Iu(s,o){if(!ft)switch(s.tailMode){case"hidden":o=s.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s.tail=null:u.sibling=null;break;case"collapsed":u=s.tail;for(var d=null;u!==null;)u.alternate!==null&&(d=u),u=u.sibling;d===null?o||s.tail===null?s.tail=null:s.tail.sibling=null:d.sibling=null}}function an(s){var o=s.alternate!==null&&s.alternate.child===s.child,u=0,d=0;if(o)for(var g=s.child;g!==null;)u|=g.lanes|g.childLanes,d|=g.subtreeFlags&14680064,d|=g.flags&14680064,g.return=s,g=g.sibling;else for(g=s.child;g!==null;)u|=g.lanes|g.childLanes,d|=g.subtreeFlags,d|=g.flags,g.return=s,g=g.sibling;return s.subtreeFlags|=d,s.childLanes=u,o}function Nb(s,o,u){var d=o.pendingProps;switch(Zp(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(o),null;case 1:return En(o.type)&&vh(),an(o),null;case 3:return d=o.stateNode,La(),lt(wn),lt(sn),fm(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(s===null||s.child===null)&&(Sh(o)?o.flags|=4:s===null||s.memoizedState.isDehydrated&&!(o.flags&256)||(o.flags|=1024,dr!==null&&(zm(dr),dr=null))),bm(s,o),an(o),null;case 5:cm(o);var g=vo(wu.current);if(u=o.type,s!==null&&o.stateNode!=null)j0(s,o,u,d,g),s.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!d){if(o.stateNode===null)throw Error(n(166));return an(o),null}if(s=vo(qr.current),Sh(o)){d=o.stateNode,u=o.type;var v=o.memoizedProps;switch(d[Hr]=o,d[mu]=v,s=(o.mode&1)!==0,u){case"dialog":at("cancel",d),at("close",d);break;case"iframe":case"object":case"embed":at("load",d);break;case"video":case"audio":for(g=0;g<fu.length;g++)at(fu[g],d);break;case"source":at("error",d);break;case"img":case"image":case"link":at("error",d),at("load",d);break;case"details":at("toggle",d);break;case"input":Uc(d,v),at("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!v.multiple},at("invalid",d);break;case"textarea":$l(d,v),at("invalid",d)}ur(u,v),g=null;for(var S in v)if(v.hasOwnProperty(S)){var N=v[S];S==="children"?typeof N=="string"?d.textContent!==N&&(v.suppressHydrationWarning!==!0&&mh(d.textContent,N,s),g=["children",N]):typeof N=="number"&&d.textContent!==""+N&&(v.suppressHydrationWarning!==!0&&mh(d.textContent,N,s),g=["children",""+N]):i.hasOwnProperty(S)&&N!=null&&S==="onScroll"&&at("scroll",d)}switch(u){case"input":ar(d),Fl(d,v,!0);break;case"textarea":ar(d),Bi(d);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(d.onclick=gh)}d=g,o.updateQueue=d,d!==null&&(o.flags|=4)}else{S=g.nodeType===9?g:g.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=Ul(u)),s==="http://www.w3.org/1999/xhtml"?u==="script"?(s=S.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof d.is=="string"?s=S.createElement(u,{is:d.is}):(s=S.createElement(u),u==="select"&&(S=s,d.multiple?S.multiple=!0:d.size&&(S.size=d.size))):s=S.createElementNS(s,u),s[Hr]=o,s[mu]=d,F0(s,o,!1,!1),o.stateNode=s;e:{switch(S=sa(u,d),u){case"dialog":at("cancel",s),at("close",s),g=d;break;case"iframe":case"object":case"embed":at("load",s),g=d;break;case"video":case"audio":for(g=0;g<fu.length;g++)at(fu[g],s);g=d;break;case"source":at("error",s),g=d;break;case"img":case"image":case"link":at("error",s),at("load",s),g=d;break;case"details":at("toggle",s),g=d;break;case"input":Uc(s,d),g=ta(s,d),at("invalid",s);break;case"option":g=d;break;case"select":s._wrapperState={wasMultiple:!!d.multiple},g=ue({},d,{value:void 0}),at("invalid",s);break;case"textarea":$l(s,d),g=jl(s,d),at("invalid",s);break;default:g=d}ur(u,g),N=g;for(v in N)if(N.hasOwnProperty(v)){var j=N[v];v==="style"?ia(s,j):v==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Bc(s,j)):v==="children"?typeof j=="string"?(u!=="textarea"||j!=="")&&Js(s,j):typeof j=="number"&&Js(s,""+j):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(i.hasOwnProperty(v)?j!=null&&v==="onScroll"&&at("scroll",s):j!=null&&U(s,v,j,S))}switch(u){case"input":ar(s),Fl(s,d,!1);break;case"textarea":ar(s),Bi(s);break;case"option":d.value!=null&&s.setAttribute("value",""+Me(d.value));break;case"select":s.multiple=!!d.multiple,v=d.value,v!=null?lr(s,!!d.multiple,v,!1):d.defaultValue!=null&&lr(s,!!d.multiple,d.defaultValue,!0);break;default:typeof g.onClick=="function"&&(s.onclick=gh)}switch(u){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return an(o),null;case 6:if(s&&o.stateNode!=null)$0(s,o,s.memoizedProps,d);else{if(typeof d!="string"&&o.stateNode===null)throw Error(n(166));if(u=vo(wu.current),vo(qr.current),Sh(o)){if(d=o.stateNode,u=o.memoizedProps,d[Hr]=o,(v=d.nodeValue!==u)&&(s=Mn,s!==null))switch(s.tag){case 3:mh(d.nodeValue,u,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&mh(d.nodeValue,u,(s.mode&1)!==0)}v&&(o.flags|=4)}else d=(u.nodeType===9?u:u.ownerDocument).createTextNode(d),d[Hr]=o,o.stateNode=d}return an(o),null;case 13:if(lt(mt),d=o.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(ft&&Ln!==null&&o.mode&1&&!(o.flags&128))Bw(),Da(),o.flags|=98560,v=!1;else if(v=Sh(o),d!==null&&d.dehydrated!==null){if(s===null){if(!v)throw Error(n(318));if(v=o.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(n(317));v[Hr]=o}else Da(),!(o.flags&128)&&(o.memoizedState=null),o.flags|=4;an(o),v=!1}else dr!==null&&(zm(dr),dr=null),v=!0;if(!v)return o.flags&65536?o:null}return o.flags&128?(o.lanes=u,o):(d=d!==null,d!==(s!==null&&s.memoizedState!==null)&&d&&(o.child.flags|=8192,o.mode&1&&(s===null||mt.current&1?Mt===0&&(Mt=3):Hm())),o.updateQueue!==null&&(o.flags|=4),an(o),null);case 4:return La(),bm(s,o),s===null&&du(o.stateNode.containerInfo),an(o),null;case 10:return sm(o.type._context),an(o),null;case 17:return En(o.type)&&vh(),an(o),null;case 19:if(lt(mt),v=o.memoizedState,v===null)return an(o),null;if(d=(o.flags&128)!==0,S=v.rendering,S===null)if(d)Iu(v,!1);else{if(Mt!==0||s!==null&&s.flags&128)for(s=o.child;s!==null;){if(S=Rh(s),S!==null){for(o.flags|=128,Iu(v,!1),d=S.updateQueue,d!==null&&(o.updateQueue=d,o.flags|=4),o.subtreeFlags=0,d=u,u=o.child;u!==null;)v=u,s=d,v.flags&=14680066,S=v.alternate,S===null?(v.childLanes=0,v.lanes=s,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=S.childLanes,v.lanes=S.lanes,v.child=S.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=S.memoizedProps,v.memoizedState=S.memoizedState,v.updateQueue=S.updateQueue,v.type=S.type,s=S.dependencies,v.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),u=u.sibling;return it(mt,mt.current&1|2),o.child}s=s.sibling}v.tail!==null&&ot()>$a&&(o.flags|=128,d=!0,Iu(v,!1),o.lanes=4194304)}else{if(!d)if(s=Rh(S),s!==null){if(o.flags|=128,d=!0,u=s.updateQueue,u!==null&&(o.updateQueue=u,o.flags|=4),Iu(v,!0),v.tail===null&&v.tailMode==="hidden"&&!S.alternate&&!ft)return an(o),null}else 2*ot()-v.renderingStartTime>$a&&u!==1073741824&&(o.flags|=128,d=!0,Iu(v,!1),o.lanes=4194304);v.isBackwards?(S.sibling=o.child,o.child=S):(u=v.last,u!==null?u.sibling=S:o.child=S,v.last=S)}return v.tail!==null?(o=v.tail,v.rendering=o,v.tail=o.sibling,v.renderingStartTime=ot(),o.sibling=null,u=mt.current,it(mt,d?u&1|2:u&1),o):(an(o),null);case 22:case 23:return Wm(),d=o.memoizedState!==null,s!==null&&s.memoizedState!==null!==d&&(o.flags|=8192),d&&o.mode&1?On&1073741824&&(an(o),o.subtreeFlags&6&&(o.flags|=8192)):an(o),null;case 24:return null;case 25:return null}throw Error(n(156,o.tag))}function Mb(s,o){switch(Zp(o),o.tag){case 1:return En(o.type)&&vh(),s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 3:return La(),lt(wn),lt(sn),fm(),s=o.flags,s&65536&&!(s&128)?(o.flags=s&-65537|128,o):null;case 5:return cm(o),null;case 13:if(lt(mt),s=o.memoizedState,s!==null&&s.dehydrated!==null){if(o.alternate===null)throw Error(n(340));Da()}return s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 19:return lt(mt),null;case 4:return La(),null;case 10:return sm(o.type._context),null;case 22:case 23:return Wm(),null;case 24:return null;default:return null}}var Fh=!1,ln=!1,Lb=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Fa(s,o){var u=s.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(d){_t(s,o,d)}else u.current=null}function Dm(s,o,u){try{u()}catch(d){_t(s,o,d)}}var U0=!1;function Ob(s,o){if(Wp=mi,s=_w(),Lp(s)){if("selectionStart"in s)var u={start:s.selectionStart,end:s.selectionEnd};else e:{u=(u=s.ownerDocument)&&u.defaultView||window;var d=u.getSelection&&u.getSelection();if(d&&d.rangeCount!==0){u=d.anchorNode;var g=d.anchorOffset,v=d.focusNode;d=d.focusOffset;try{u.nodeType,v.nodeType}catch{u=null;break e}var S=0,N=-1,j=-1,Q=0,ne=0,ie=s,te=null;t:for(;;){for(var he;ie!==u||g!==0&&ie.nodeType!==3||(N=S+g),ie!==v||d!==0&&ie.nodeType!==3||(j=S+d),ie.nodeType===3&&(S+=ie.nodeValue.length),(he=ie.firstChild)!==null;)te=ie,ie=he;for(;;){if(ie===s)break t;if(te===u&&++Q===g&&(N=S),te===v&&++ne===d&&(j=S),(he=ie.nextSibling)!==null)break;ie=te,te=ie.parentNode}ie=he}u=N===-1||j===-1?null:{start:N,end:j}}else u=null}u=u||{start:0,end:0}}else u=null;for(Hp={focusedElem:s,selectionRange:u},mi=!1,pe=o;pe!==null;)if(o=pe,s=o.child,(o.subtreeFlags&1028)!==0&&s!==null)s.return=o,pe=s;else for(;pe!==null;){o=pe;try{var me=o.alternate;if(o.flags&1024)switch(o.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ye=me.memoizedProps,St=me.memoizedState,q=o.stateNode,z=q.getSnapshotBeforeUpdate(o.elementType===o.type?ye:pr(o.type,ye),St);q.__reactInternalSnapshotBeforeUpdate=z}break;case 3:var G=o.stateNode.containerInfo;G.nodeType===1?G.textContent="":G.nodeType===9&&G.documentElement&&G.removeChild(G.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ae){_t(o,o.return,ae)}if(s=o.sibling,s!==null){s.return=o.return,pe=s;break}pe=o.return}return me=U0,U0=!1,me}function Au(s,o,u){var d=o.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var g=d=d.next;do{if((g.tag&s)===s){var v=g.destroy;g.destroy=void 0,v!==void 0&&Dm(o,u,v)}g=g.next}while(g!==d)}}function jh(s,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var u=o=o.next;do{if((u.tag&s)===s){var d=u.create;u.destroy=d()}u=u.next}while(u!==o)}}function Vm(s){var o=s.ref;if(o!==null){var u=s.stateNode;switch(s.tag){case 5:s=u;break;default:s=u}typeof o=="function"?o(s):o.current=s}}function z0(s){var o=s.alternate;o!==null&&(s.alternate=null,z0(o)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(o=s.stateNode,o!==null&&(delete o[Hr],delete o[mu],delete o[Qp],delete o[_b],delete o[wb])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function B0(s){return s.tag===5||s.tag===3||s.tag===4}function W0(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||B0(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Nm(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.nodeType===8?u.parentNode.insertBefore(s,o):u.insertBefore(s,o):(u.nodeType===8?(o=u.parentNode,o.insertBefore(s,u)):(o=u,o.appendChild(s)),u=u._reactRootContainer,u!=null||o.onclick!==null||(o.onclick=gh));else if(d!==4&&(s=s.child,s!==null))for(Nm(s,o,u),s=s.sibling;s!==null;)Nm(s,o,u),s=s.sibling}function Mm(s,o,u){var d=s.tag;if(d===5||d===6)s=s.stateNode,o?u.insertBefore(s,o):u.appendChild(s);else if(d!==4&&(s=s.child,s!==null))for(Mm(s,o,u),s=s.sibling;s!==null;)Mm(s,o,u),s=s.sibling}var Gt=null,mr=!1;function hs(s,o,u){for(u=u.child;u!==null;)H0(s,o,u),u=u.sibling}function H0(s,o,u){if(Rn&&typeof Rn.onCommitFiberUnmount=="function")try{Rn.onCommitFiberUnmount(ro,u)}catch{}switch(u.tag){case 5:ln||Fa(u,o);case 6:var d=Gt,g=mr;Gt=null,hs(s,o,u),Gt=d,mr=g,Gt!==null&&(mr?(s=Gt,u=u.stateNode,s.nodeType===8?s.parentNode.removeChild(u):s.removeChild(u)):Gt.removeChild(u.stateNode));break;case 18:Gt!==null&&(mr?(s=Gt,u=u.stateNode,s.nodeType===8?Gp(s.parentNode,u):s.nodeType===1&&Gp(s,u),ts(s)):Gp(Gt,u.stateNode));break;case 4:d=Gt,g=mr,Gt=u.stateNode.containerInfo,mr=!0,hs(s,o,u),Gt=d,mr=g;break;case 0:case 11:case 14:case 15:if(!ln&&(d=u.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){g=d=d.next;do{var v=g,S=v.destroy;v=v.tag,S!==void 0&&(v&2||v&4)&&Dm(u,o,S),g=g.next}while(g!==d)}hs(s,o,u);break;case 1:if(!ln&&(Fa(u,o),d=u.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=u.memoizedProps,d.state=u.memoizedState,d.componentWillUnmount()}catch(N){_t(u,o,N)}hs(s,o,u);break;case 21:hs(s,o,u);break;case 22:u.mode&1?(ln=(d=ln)||u.memoizedState!==null,hs(s,o,u),ln=d):hs(s,o,u);break;default:hs(s,o,u)}}function q0(s){var o=s.updateQueue;if(o!==null){s.updateQueue=null;var u=s.stateNode;u===null&&(u=s.stateNode=new Lb),o.forEach(function(d){var g=qb.bind(null,s,d);u.has(d)||(u.add(d),d.then(g,g))})}}function gr(s,o){var u=o.deletions;if(u!==null)for(var d=0;d<u.length;d++){var g=u[d];try{var v=s,S=o,N=S;e:for(;N!==null;){switch(N.tag){case 5:Gt=N.stateNode,mr=!1;break e;case 3:Gt=N.stateNode.containerInfo,mr=!0;break e;case 4:Gt=N.stateNode.containerInfo,mr=!0;break e}N=N.return}if(Gt===null)throw Error(n(160));H0(v,S,g),Gt=null,mr=!1;var j=g.alternate;j!==null&&(j.return=null),g.return=null}catch(Q){_t(g,o,Q)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)K0(o,s),o=o.sibling}function K0(s,o){var u=s.alternate,d=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(gr(o,s),Gr(s),d&4){try{Au(3,s,s.return),jh(3,s)}catch(ye){_t(s,s.return,ye)}try{Au(5,s,s.return)}catch(ye){_t(s,s.return,ye)}}break;case 1:gr(o,s),Gr(s),d&512&&u!==null&&Fa(u,u.return);break;case 5:if(gr(o,s),Gr(s),d&512&&u!==null&&Fa(u,u.return),s.flags&32){var g=s.stateNode;try{Js(g,"")}catch(ye){_t(s,s.return,ye)}}if(d&4&&(g=s.stateNode,g!=null)){var v=s.memoizedProps,S=u!==null?u.memoizedProps:v,N=s.type,j=s.updateQueue;if(s.updateQueue=null,j!==null)try{N==="input"&&v.type==="radio"&&v.name!=null&&na(g,v),sa(N,S);var Q=sa(N,v);for(S=0;S<j.length;S+=2){var ne=j[S],ie=j[S+1];ne==="style"?ia(g,ie):ne==="dangerouslySetInnerHTML"?Bc(g,ie):ne==="children"?Js(g,ie):U(g,ne,ie,Q)}switch(N){case"input":Xs(g,v);break;case"textarea":zc(g,v);break;case"select":var te=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!v.multiple;var he=v.value;he!=null?lr(g,!!v.multiple,he,!1):te!==!!v.multiple&&(v.defaultValue!=null?lr(g,!!v.multiple,v.defaultValue,!0):lr(g,!!v.multiple,v.multiple?[]:"",!1))}g[mu]=v}catch(ye){_t(s,s.return,ye)}}break;case 6:if(gr(o,s),Gr(s),d&4){if(s.stateNode===null)throw Error(n(162));g=s.stateNode,v=s.memoizedProps;try{g.nodeValue=v}catch(ye){_t(s,s.return,ye)}}break;case 3:if(gr(o,s),Gr(s),d&4&&u!==null&&u.memoizedState.isDehydrated)try{ts(o.containerInfo)}catch(ye){_t(s,s.return,ye)}break;case 4:gr(o,s),Gr(s);break;case 13:gr(o,s),Gr(s),g=s.child,g.flags&8192&&(v=g.memoizedState!==null,g.stateNode.isHidden=v,!v||g.alternate!==null&&g.alternate.memoizedState!==null||(Fm=ot())),d&4&&q0(s);break;case 22:if(ne=u!==null&&u.memoizedState!==null,s.mode&1?(ln=(Q=ln)||ne,gr(o,s),ln=Q):gr(o,s),Gr(s),d&8192){if(Q=s.memoizedState!==null,(s.stateNode.isHidden=Q)&&!ne&&s.mode&1)for(pe=s,ne=s.child;ne!==null;){for(ie=pe=ne;pe!==null;){switch(te=pe,he=te.child,te.tag){case 0:case 11:case 14:case 15:Au(4,te,te.return);break;case 1:Fa(te,te.return);var me=te.stateNode;if(typeof me.componentWillUnmount=="function"){d=te,u=te.return;try{o=d,me.props=o.memoizedProps,me.state=o.memoizedState,me.componentWillUnmount()}catch(ye){_t(d,u,ye)}}break;case 5:Fa(te,te.return);break;case 22:if(te.memoizedState!==null){Y0(ie);continue}}he!==null?(he.return=te,pe=he):Y0(ie)}ne=ne.sibling}e:for(ne=null,ie=s;;){if(ie.tag===5){if(ne===null){ne=ie;try{g=ie.stateNode,Q?(v=g.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(N=ie.stateNode,j=ie.memoizedProps.style,S=j!=null&&j.hasOwnProperty("display")?j.display:null,N.style.display=qi("display",S))}catch(ye){_t(s,s.return,ye)}}}else if(ie.tag===6){if(ne===null)try{ie.stateNode.nodeValue=Q?"":ie.memoizedProps}catch(ye){_t(s,s.return,ye)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===s)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===s)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===s)break e;ne===ie&&(ne=null),ie=ie.return}ne===ie&&(ne=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:gr(o,s),Gr(s),d&4&&q0(s);break;case 21:break;default:gr(o,s),Gr(s)}}function Gr(s){var o=s.flags;if(o&2){try{e:{for(var u=s.return;u!==null;){if(B0(u)){var d=u;break e}u=u.return}throw Error(n(160))}switch(d.tag){case 5:var g=d.stateNode;d.flags&32&&(Js(g,""),d.flags&=-33);var v=W0(s);Mm(s,v,g);break;case 3:case 4:var S=d.stateNode.containerInfo,N=W0(s);Nm(s,N,S);break;default:throw Error(n(161))}}catch(j){_t(s,s.return,j)}s.flags&=-3}o&4096&&(s.flags&=-4097)}function Fb(s,o,u){pe=s,G0(s)}function G0(s,o,u){for(var d=(s.mode&1)!==0;pe!==null;){var g=pe,v=g.child;if(g.tag===22&&d){var S=g.memoizedState!==null||Fh;if(!S){var N=g.alternate,j=N!==null&&N.memoizedState!==null||ln;N=Fh;var Q=ln;if(Fh=S,(ln=j)&&!Q)for(pe=g;pe!==null;)S=pe,j=S.child,S.tag===22&&S.memoizedState!==null?X0(g):j!==null?(j.return=S,pe=j):X0(g);for(;v!==null;)pe=v,G0(v),v=v.sibling;pe=g,Fh=N,ln=Q}Q0(s)}else g.subtreeFlags&8772&&v!==null?(v.return=g,pe=v):Q0(s)}}function Q0(s){for(;pe!==null;){var o=pe;if(o.flags&8772){var u=o.alternate;try{if(o.flags&8772)switch(o.tag){case 0:case 11:case 15:ln||jh(5,o);break;case 1:var d=o.stateNode;if(o.flags&4&&!ln)if(u===null)d.componentDidMount();else{var g=o.elementType===o.type?u.memoizedProps:pr(o.type,u.memoizedProps);d.componentDidUpdate(g,u.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var v=o.updateQueue;v!==null&&Yw(o,v,d);break;case 3:var S=o.updateQueue;if(S!==null){if(u=null,o.child!==null)switch(o.child.tag){case 5:u=o.child.stateNode;break;case 1:u=o.child.stateNode}Yw(o,S,u)}break;case 5:var N=o.stateNode;if(u===null&&o.flags&4){u=N;var j=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&u.focus();break;case"img":j.src&&(u.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var Q=o.alternate;if(Q!==null){var ne=Q.memoizedState;if(ne!==null){var ie=ne.dehydrated;ie!==null&&ts(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ln||o.flags&512&&Vm(o)}catch(te){_t(o,o.return,te)}}if(o===s){pe=null;break}if(u=o.sibling,u!==null){u.return=o.return,pe=u;break}pe=o.return}}function Y0(s){for(;pe!==null;){var o=pe;if(o===s){pe=null;break}var u=o.sibling;if(u!==null){u.return=o.return,pe=u;break}pe=o.return}}function X0(s){for(;pe!==null;){var o=pe;try{switch(o.tag){case 0:case 11:case 15:var u=o.return;try{jh(4,o)}catch(j){_t(o,u,j)}break;case 1:var d=o.stateNode;if(typeof d.componentDidMount=="function"){var g=o.return;try{d.componentDidMount()}catch(j){_t(o,g,j)}}var v=o.return;try{Vm(o)}catch(j){_t(o,v,j)}break;case 5:var S=o.return;try{Vm(o)}catch(j){_t(o,S,j)}}}catch(j){_t(o,o.return,j)}if(o===s){pe=null;break}var N=o.sibling;if(N!==null){N.return=o.return,pe=N;break}pe=o.return}}var jb=Math.ceil,$h=$.ReactCurrentDispatcher,Lm=$.ReactCurrentOwner,Yn=$.ReactCurrentBatchConfig,We=0,$t=null,Ct=null,Qt=0,On=0,ja=os(0),Mt=0,Cu=null,wo=0,Uh=0,Om=0,Pu=null,Sn=null,Fm=0,$a=1/0,Ii=null,zh=!1,jm=null,fs=null,Bh=!1,ds=null,Wh=0,Ru=0,$m=null,Hh=-1,qh=0;function mn(){return We&6?ot():Hh!==-1?Hh:Hh=ot()}function ps(s){return s.mode&1?We&2&&Qt!==0?Qt&-Qt:Tb.transition!==null?(qh===0&&(qh=Yl()),qh):(s=ze,s!==0||(s=window.event,s=s===void 0?16:ma(s.type)),s):1}function yr(s,o,u,d){if(50<Ru)throw Ru=0,$m=null,Error(n(185));ao(s,u,d),(!(We&2)||s!==$t)&&(s===$t&&(!(We&2)&&(Uh|=u),Mt===4&&ms(s,Qt)),xn(s,d),u===1&&We===0&&!(o.mode&1)&&($a=ot()+500,wh&&ls()))}function xn(s,o){var u=s.callbackNode;oo(s,o);var d=fi(s,s===$t?Qt:0);if(d===0)u!==null&&la(u),s.callbackNode=null,s.callbackPriority=0;else if(o=d&-d,s.callbackPriority!==o){if(u!=null&&la(u),o===1)s.tag===0?Eb(Z0.bind(null,s)):Fw(Z0.bind(null,s)),yb(function(){!(We&6)&&ls()}),u=null;else{switch(Mr(d)){case 1:u=ua;break;case 4:u=Kl;break;case 16:u=no;break;case 536870912:u=ca;break;default:u=no}u=aE(u,J0.bind(null,s))}s.callbackPriority=o,s.callbackNode=u}}function J0(s,o){if(Hh=-1,qh=0,We&6)throw Error(n(327));var u=s.callbackNode;if(Ua()&&s.callbackNode!==u)return null;var d=fi(s,s===$t?Qt:0);if(d===0)return null;if(d&30||d&s.expiredLanes||o)o=Kh(s,d);else{o=d;var g=We;We|=2;var v=tE();($t!==s||Qt!==o)&&(Ii=null,$a=ot()+500,To(s,o));do try{zb();break}catch(N){eE(s,N)}while(!0);im(),$h.current=v,We=g,Ct!==null?o=0:($t=null,Qt=0,o=Mt)}if(o!==0){if(o===2&&(g=Ql(s),g!==0&&(d=g,o=Um(s,g))),o===1)throw u=Cu,To(s,0),ms(s,d),xn(s,ot()),u;if(o===6)ms(s,d);else{if(g=s.current.alternate,!(d&30)&&!$b(g)&&(o=Kh(s,d),o===2&&(v=Ql(s),v!==0&&(d=v,o=Um(s,v))),o===1))throw u=Cu,To(s,0),ms(s,d),xn(s,ot()),u;switch(s.finishedWork=g,s.finishedLanes=d,o){case 0:case 1:throw Error(n(345));case 2:So(s,Sn,Ii);break;case 3:if(ms(s,d),(d&130023424)===d&&(o=Fm+500-ot(),10<o)){if(fi(s,0)!==0)break;if(g=s.suspendedLanes,(g&d)!==d){mn(),s.pingedLanes|=s.suspendedLanes&g;break}s.timeoutHandle=Kp(So.bind(null,s,Sn,Ii),o);break}So(s,Sn,Ii);break;case 4:if(ms(s,d),(d&4194240)===d)break;for(o=s.eventTimes,g=-1;0<d;){var S=31-kn(d);v=1<<S,S=o[S],S>g&&(g=S),d&=~v}if(d=g,d=ot()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*jb(d/1960))-d,10<d){s.timeoutHandle=Kp(So.bind(null,s,Sn,Ii),d);break}So(s,Sn,Ii);break;case 5:So(s,Sn,Ii);break;default:throw Error(n(329))}}}return xn(s,ot()),s.callbackNode===u?J0.bind(null,s):null}function Um(s,o){var u=Pu;return s.current.memoizedState.isDehydrated&&(To(s,o).flags|=256),s=Kh(s,o),s!==2&&(o=Sn,Sn=u,o!==null&&zm(o)),s}function zm(s){Sn===null?Sn=s:Sn.push.apply(Sn,s)}function $b(s){for(var o=s;;){if(o.flags&16384){var u=o.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var d=0;d<u.length;d++){var g=u[d],v=g.getSnapshot;g=g.value;try{if(!fr(v(),g))return!1}catch{return!1}}}if(u=o.child,o.subtreeFlags&16384&&u!==null)u.return=o,o=u;else{if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function ms(s,o){for(o&=~Om,o&=~Uh,s.suspendedLanes|=o,s.pingedLanes&=~o,s=s.expirationTimes;0<o;){var u=31-kn(o),d=1<<u;s[u]=-1,o&=~d}}function Z0(s){if(We&6)throw Error(n(327));Ua();var o=fi(s,0);if(!(o&1))return xn(s,ot()),null;var u=Kh(s,o);if(s.tag!==0&&u===2){var d=Ql(s);d!==0&&(o=d,u=Um(s,d))}if(u===1)throw u=Cu,To(s,0),ms(s,o),xn(s,ot()),u;if(u===6)throw Error(n(345));return s.finishedWork=s.current.alternate,s.finishedLanes=o,So(s,Sn,Ii),xn(s,ot()),null}function Bm(s,o){var u=We;We|=1;try{return s(o)}finally{We=u,We===0&&($a=ot()+500,wh&&ls())}}function Eo(s){ds!==null&&ds.tag===0&&!(We&6)&&Ua();var o=We;We|=1;var u=Yn.transition,d=ze;try{if(Yn.transition=null,ze=1,s)return s()}finally{ze=d,Yn.transition=u,We=o,!(We&6)&&ls()}}function Wm(){On=ja.current,lt(ja)}function To(s,o){s.finishedWork=null,s.finishedLanes=0;var u=s.timeoutHandle;if(u!==-1&&(s.timeoutHandle=-1,gb(u)),Ct!==null)for(u=Ct.return;u!==null;){var d=u;switch(Zp(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&vh();break;case 3:La(),lt(wn),lt(sn),fm();break;case 5:cm(d);break;case 4:La();break;case 13:lt(mt);break;case 19:lt(mt);break;case 10:sm(d.type._context);break;case 22:case 23:Wm()}u=u.return}if($t=s,Ct=s=gs(s.current,null),Qt=On=o,Mt=0,Cu=null,Om=Uh=wo=0,Sn=Pu=null,yo!==null){for(o=0;o<yo.length;o++)if(u=yo[o],d=u.interleaved,d!==null){u.interleaved=null;var g=d.next,v=u.pending;if(v!==null){var S=v.next;v.next=g,d.next=S}u.pending=d}yo=null}return s}function eE(s,o){do{var u=Ct;try{if(im(),kh.current=Nh,bh){for(var d=gt.memoizedState;d!==null;){var g=d.queue;g!==null&&(g.pending=null),d=d.next}bh=!1}if(_o=0,jt=Nt=gt=null,Eu=!1,Tu=0,Lm.current=null,u===null||u.return===null){Mt=1,Cu=o,Ct=null;break}e:{var v=s,S=u.return,N=u,j=o;if(o=Qt,N.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var Q=j,ne=N,ie=ne.tag;if(!(ne.mode&1)&&(ie===0||ie===11||ie===15)){var te=ne.alternate;te?(ne.updateQueue=te.updateQueue,ne.memoizedState=te.memoizedState,ne.lanes=te.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var he=I0(S);if(he!==null){he.flags&=-257,A0(he,S,N,v,o),he.mode&1&&x0(v,Q,o),o=he,j=Q;var me=o.updateQueue;if(me===null){var ye=new Set;ye.add(j),o.updateQueue=ye}else me.add(j);break e}else{if(!(o&1)){x0(v,Q,o),Hm();break e}j=Error(n(426))}}else if(ft&&N.mode&1){var St=I0(S);if(St!==null){!(St.flags&65536)&&(St.flags|=256),A0(St,S,N,v,o),nm(Oa(j,N));break e}}v=j=Oa(j,N),Mt!==4&&(Mt=2),Pu===null?Pu=[v]:Pu.push(v),v=S;do{switch(v.tag){case 3:v.flags|=65536,o&=-o,v.lanes|=o;var q=T0(v,j,o);Qw(v,q);break e;case 1:N=j;var z=v.type,G=v.stateNode;if(!(v.flags&128)&&(typeof z.getDerivedStateFromError=="function"||G!==null&&typeof G.componentDidCatch=="function"&&(fs===null||!fs.has(G)))){v.flags|=65536,o&=-o,v.lanes|=o;var ae=S0(v,N,o);Qw(v,ae);break e}}v=v.return}while(v!==null)}rE(u)}catch(ve){o=ve,Ct===u&&u!==null&&(Ct=u=u.return);continue}break}while(!0)}function tE(){var s=$h.current;return $h.current=Nh,s===null?Nh:s}function Hm(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),$t===null||!(wo&268435455)&&!(Uh&268435455)||ms($t,Qt)}function Kh(s,o){var u=We;We|=2;var d=tE();($t!==s||Qt!==o)&&(Ii=null,To(s,o));do try{Ub();break}catch(g){eE(s,g)}while(!0);if(im(),We=u,$h.current=d,Ct!==null)throw Error(n(261));return $t=null,Qt=0,Mt}function Ub(){for(;Ct!==null;)nE(Ct)}function zb(){for(;Ct!==null&&!to();)nE(Ct)}function nE(s){var o=oE(s.alternate,s,On);s.memoizedProps=s.pendingProps,o===null?rE(s):Ct=o,Lm.current=null}function rE(s){var o=s;do{var u=o.alternate;if(s=o.return,o.flags&32768){if(u=Mb(u,o),u!==null){u.flags&=32767,Ct=u;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{Mt=6,Ct=null;return}}else if(u=Nb(u,o,On),u!==null){Ct=u;return}if(o=o.sibling,o!==null){Ct=o;return}Ct=o=s}while(o!==null);Mt===0&&(Mt=5)}function So(s,o,u){var d=ze,g=Yn.transition;try{Yn.transition=null,ze=1,Bb(s,o,u,d)}finally{Yn.transition=g,ze=d}return null}function Bb(s,o,u,d){do Ua();while(ds!==null);if(We&6)throw Error(n(327));u=s.finishedWork;var g=s.finishedLanes;if(u===null)return null;if(s.finishedWork=null,s.finishedLanes=0,u===s.current)throw Error(n(177));s.callbackNode=null,s.callbackPriority=0;var v=u.lanes|u.childLanes;if(bp(s,v),s===$t&&(Ct=$t=null,Qt=0),!(u.subtreeFlags&2064)&&!(u.flags&2064)||Bh||(Bh=!0,aE(no,function(){return Ua(),null})),v=(u.flags&15990)!==0,u.subtreeFlags&15990||v){v=Yn.transition,Yn.transition=null;var S=ze;ze=1;var N=We;We|=4,Lm.current=null,Ob(s,u),K0(u,s),ub(Hp),mi=!!Wp,Hp=Wp=null,s.current=u,Fb(u),hi(),We=N,ze=S,Yn.transition=v}else s.current=u;if(Bh&&(Bh=!1,ds=s,Wh=g),v=s.pendingLanes,v===0&&(fs=null),eh(u.stateNode),xn(s,ot()),o!==null)for(d=s.onRecoverableError,u=0;u<o.length;u++)g=o[u],d(g.value,{componentStack:g.stack,digest:g.digest});if(zh)throw zh=!1,s=jm,jm=null,s;return Wh&1&&s.tag!==0&&Ua(),v=s.pendingLanes,v&1?s===$m?Ru++:(Ru=0,$m=s):Ru=0,ls(),null}function Ua(){if(ds!==null){var s=Mr(Wh),o=Yn.transition,u=ze;try{if(Yn.transition=null,ze=16>s?16:s,ds===null)var d=!1;else{if(s=ds,ds=null,Wh=0,We&6)throw Error(n(331));var g=We;for(We|=4,pe=s.current;pe!==null;){var v=pe,S=v.child;if(pe.flags&16){var N=v.deletions;if(N!==null){for(var j=0;j<N.length;j++){var Q=N[j];for(pe=Q;pe!==null;){var ne=pe;switch(ne.tag){case 0:case 11:case 15:Au(8,ne,v)}var ie=ne.child;if(ie!==null)ie.return=ne,pe=ie;else for(;pe!==null;){ne=pe;var te=ne.sibling,he=ne.return;if(z0(ne),ne===Q){pe=null;break}if(te!==null){te.return=he,pe=te;break}pe=he}}}var me=v.alternate;if(me!==null){var ye=me.child;if(ye!==null){me.child=null;do{var St=ye.sibling;ye.sibling=null,ye=St}while(ye!==null)}}pe=v}}if(v.subtreeFlags&2064&&S!==null)S.return=v,pe=S;else e:for(;pe!==null;){if(v=pe,v.flags&2048)switch(v.tag){case 0:case 11:case 15:Au(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,pe=q;break e}pe=v.return}}var z=s.current;for(pe=z;pe!==null;){S=pe;var G=S.child;if(S.subtreeFlags&2064&&G!==null)G.return=S,pe=G;else e:for(S=z;pe!==null;){if(N=pe,N.flags&2048)try{switch(N.tag){case 0:case 11:case 15:jh(9,N)}}catch(ve){_t(N,N.return,ve)}if(N===S){pe=null;break e}var ae=N.sibling;if(ae!==null){ae.return=N.return,pe=ae;break e}pe=N.return}}if(We=g,ls(),Rn&&typeof Rn.onPostCommitFiberRoot=="function")try{Rn.onPostCommitFiberRoot(ro,s)}catch{}d=!0}return d}finally{ze=u,Yn.transition=o}}return!1}function iE(s,o,u){o=Oa(u,o),o=T0(s,o,1),s=cs(s,o,1),o=mn(),s!==null&&(ao(s,1,o),xn(s,o))}function _t(s,o,u){if(s.tag===3)iE(s,s,u);else for(;o!==null;){if(o.tag===3){iE(o,s,u);break}else if(o.tag===1){var d=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(fs===null||!fs.has(d))){s=Oa(u,s),s=S0(o,s,1),o=cs(o,s,1),s=mn(),o!==null&&(ao(o,1,s),xn(o,s));break}}o=o.return}}function Wb(s,o,u){var d=s.pingCache;d!==null&&d.delete(o),o=mn(),s.pingedLanes|=s.suspendedLanes&u,$t===s&&(Qt&u)===u&&(Mt===4||Mt===3&&(Qt&130023424)===Qt&&500>ot()-Fm?To(s,0):Om|=u),xn(s,o)}function sE(s,o){o===0&&(s.mode&1?(o=Ji,Ji<<=1,!(Ji&130023424)&&(Ji=4194304)):o=1);var u=mn();s=Ti(s,o),s!==null&&(ao(s,o,u),xn(s,u))}function Hb(s){var o=s.memoizedState,u=0;o!==null&&(u=o.retryLane),sE(s,u)}function qb(s,o){var u=0;switch(s.tag){case 13:var d=s.stateNode,g=s.memoizedState;g!==null&&(u=g.retryLane);break;case 19:d=s.stateNode;break;default:throw Error(n(314))}d!==null&&d.delete(o),sE(s,u)}var oE;oE=function(s,o,u){if(s!==null)if(s.memoizedProps!==o.pendingProps||wn.current)Tn=!0;else{if(!(s.lanes&u)&&!(o.flags&128))return Tn=!1,Vb(s,o,u);Tn=!!(s.flags&131072)}else Tn=!1,ft&&o.flags&1048576&&jw(o,Th,o.index);switch(o.lanes=0,o.tag){case 2:var d=o.type;Oh(s,o),s=o.pendingProps;var g=Ra(o,sn.current);Ma(o,u),g=mm(null,o,d,s,g,u);var v=gm();return o.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,En(d)?(v=!0,_h(o)):v=!1,o.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,lm(o),g.updater=Mh,o.stateNode=g,g._reactInternals=o,Tm(o,d,s,u),o=Am(null,o,d,!0,v,u)):(o.tag=0,ft&&v&&Jp(o),pn(null,o,g,u),o=o.child),o;case 16:d=o.elementType;e:{switch(Oh(s,o),s=o.pendingProps,g=d._init,d=g(d._payload),o.type=d,g=o.tag=Gb(d),s=pr(d,s),g){case 0:o=Im(null,o,d,s,u);break e;case 1:o=D0(null,o,d,s,u);break e;case 11:o=C0(null,o,d,s,u);break e;case 14:o=P0(null,o,d,pr(d.type,s),u);break e}throw Error(n(306,d,""))}return o;case 0:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:pr(d,g),Im(s,o,d,g,u);case 1:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:pr(d,g),D0(s,o,d,g,u);case 3:e:{if(V0(o),s===null)throw Error(n(387));d=o.pendingProps,v=o.memoizedState,g=v.element,Gw(s,o),Ph(o,d,null,u);var S=o.memoizedState;if(d=S.element,v.isDehydrated)if(v={element:d,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},o.updateQueue.baseState=v,o.memoizedState=v,o.flags&256){g=Oa(Error(n(423)),o),o=N0(s,o,d,u,g);break e}else if(d!==g){g=Oa(Error(n(424)),o),o=N0(s,o,d,u,g);break e}else for(Ln=ss(o.stateNode.containerInfo.firstChild),Mn=o,ft=!0,dr=null,u=qw(o,null,d,u),o.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Da(),d===g){o=xi(s,o,u);break e}pn(s,o,d,u)}o=o.child}return o;case 5:return Xw(o),s===null&&tm(o),d=o.type,g=o.pendingProps,v=s!==null?s.memoizedProps:null,S=g.children,qp(d,g)?S=null:v!==null&&qp(d,v)&&(o.flags|=32),b0(s,o),pn(s,o,S,u),o.child;case 6:return s===null&&tm(o),null;case 13:return M0(s,o,u);case 4:return um(o,o.stateNode.containerInfo),d=o.pendingProps,s===null?o.child=Va(o,null,d,u):pn(s,o,d,u),o.child;case 11:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:pr(d,g),C0(s,o,d,g,u);case 7:return pn(s,o,o.pendingProps,u),o.child;case 8:return pn(s,o,o.pendingProps.children,u),o.child;case 12:return pn(s,o,o.pendingProps.children,u),o.child;case 10:e:{if(d=o.type._context,g=o.pendingProps,v=o.memoizedProps,S=g.value,it(Ih,d._currentValue),d._currentValue=S,v!==null)if(fr(v.value,S)){if(v.children===g.children&&!wn.current){o=xi(s,o,u);break e}}else for(v=o.child,v!==null&&(v.return=o);v!==null;){var N=v.dependencies;if(N!==null){S=v.child;for(var j=N.firstContext;j!==null;){if(j.context===d){if(v.tag===1){j=Si(-1,u&-u),j.tag=2;var Q=v.updateQueue;if(Q!==null){Q=Q.shared;var ne=Q.pending;ne===null?j.next=j:(j.next=ne.next,ne.next=j),Q.pending=j}}v.lanes|=u,j=v.alternate,j!==null&&(j.lanes|=u),om(v.return,u,o),N.lanes|=u;break}j=j.next}}else if(v.tag===10)S=v.type===o.type?null:v.child;else if(v.tag===18){if(S=v.return,S===null)throw Error(n(341));S.lanes|=u,N=S.alternate,N!==null&&(N.lanes|=u),om(S,u,o),S=v.sibling}else S=v.child;if(S!==null)S.return=v;else for(S=v;S!==null;){if(S===o){S=null;break}if(v=S.sibling,v!==null){v.return=S.return,S=v;break}S=S.return}v=S}pn(s,o,g.children,u),o=o.child}return o;case 9:return g=o.type,d=o.pendingProps.children,Ma(o,u),g=Gn(g),d=d(g),o.flags|=1,pn(s,o,d,u),o.child;case 14:return d=o.type,g=pr(d,o.pendingProps),g=pr(d.type,g),P0(s,o,d,g,u);case 15:return R0(s,o,o.type,o.pendingProps,u);case 17:return d=o.type,g=o.pendingProps,g=o.elementType===d?g:pr(d,g),Oh(s,o),o.tag=1,En(d)?(s=!0,_h(o)):s=!1,Ma(o,u),w0(o,d,g),Tm(o,d,g,u),Am(null,o,d,!0,s,u);case 19:return O0(s,o,u);case 22:return k0(s,o,u)}throw Error(n(156,o.tag))};function aE(s,o){return ql(s,o)}function Kb(s,o,u,d){this.tag=s,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(s,o,u,d){return new Kb(s,o,u,d)}function qm(s){return s=s.prototype,!(!s||!s.isReactComponent)}function Gb(s){if(typeof s=="function")return qm(s)?1:0;if(s!=null){if(s=s.$$typeof,s===B)return 11;if(s===Ge)return 14}return 2}function gs(s,o){var u=s.alternate;return u===null?(u=Xn(s.tag,o,s.key,s.mode),u.elementType=s.elementType,u.type=s.type,u.stateNode=s.stateNode,u.alternate=s,s.alternate=u):(u.pendingProps=o,u.type=s.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=s.flags&14680064,u.childLanes=s.childLanes,u.lanes=s.lanes,u.child=s.child,u.memoizedProps=s.memoizedProps,u.memoizedState=s.memoizedState,u.updateQueue=s.updateQueue,o=s.dependencies,u.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},u.sibling=s.sibling,u.index=s.index,u.ref=s.ref,u}function Gh(s,o,u,d,g,v){var S=2;if(d=s,typeof s=="function")qm(s)&&(S=1);else if(typeof s=="string")S=5;else e:switch(s){case C:return xo(u.children,g,v,o);case I:S=8,g|=8;break;case R:return s=Xn(12,u,o,g|2),s.elementType=R,s.lanes=v,s;case V:return s=Xn(13,u,o,g),s.elementType=V,s.lanes=v,s;case ke:return s=Xn(19,u,o,g),s.elementType=ke,s.lanes=v,s;case Je:return Qh(u,g,v,o);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case D:S=10;break e;case L:S=9;break e;case B:S=11;break e;case Ge:S=14;break e;case Xe:S=16,d=null;break e}throw Error(n(130,s==null?s:typeof s,""))}return o=Xn(S,u,o,g),o.elementType=s,o.type=d,o.lanes=v,o}function xo(s,o,u,d){return s=Xn(7,s,d,o),s.lanes=u,s}function Qh(s,o,u,d){return s=Xn(22,s,d,o),s.elementType=Je,s.lanes=u,s.stateNode={isHidden:!1},s}function Km(s,o,u){return s=Xn(6,s,null,o),s.lanes=u,s}function Gm(s,o,u){return o=Xn(4,s.children!==null?s.children:[],s.key,o),o.lanes=u,o.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},o}function Qb(s,o,u,d,g){this.tag=o,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xl(0),this.expirationTimes=Xl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xl(0),this.identifierPrefix=d,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Qm(s,o,u,d,g,v,S,N,j){return s=new Qb(s,o,u,N,j),o===1?(o=1,v===!0&&(o|=8)):o=0,v=Xn(3,null,null,o),s.current=v,v.stateNode=s,v.memoizedState={element:d,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},lm(v),s}function Yb(s,o,u){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:d==null?null:""+d,children:s,containerInfo:o,implementation:u}}function lE(s){if(!s)return as;s=s._reactInternals;e:{if(cr(s)!==s||s.tag!==1)throw Error(n(170));var o=s;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(En(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(n(171))}if(s.tag===1){var u=s.type;if(En(u))return Lw(s,u,o)}return o}function uE(s,o,u,d,g,v,S,N,j){return s=Qm(u,d,!0,s,g,v,S,N,j),s.context=lE(null),u=s.current,d=mn(),g=ps(u),v=Si(d,g),v.callback=o??null,cs(u,v,g),s.current.lanes=g,ao(s,g,d),xn(s,d),s}function Yh(s,o,u,d){var g=o.current,v=mn(),S=ps(g);return u=lE(u),o.context===null?o.context=u:o.pendingContext=u,o=Si(v,S),o.payload={element:s},d=d===void 0?null:d,d!==null&&(o.callback=d),s=cs(g,o,S),s!==null&&(yr(s,g,S,v),Ch(s,g,S)),S}function Xh(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function cE(s,o){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var u=s.retryLane;s.retryLane=u!==0&&u<o?u:o}}function Ym(s,o){cE(s,o),(s=s.alternate)&&cE(s,o)}var hE=typeof reportError=="function"?reportError:function(s){console.error(s)};function Xm(s){this._internalRoot=s}Jh.prototype.render=Xm.prototype.render=function(s){var o=this._internalRoot;if(o===null)throw Error(n(409));Yh(s,o,null,null)},Jh.prototype.unmount=Xm.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var o=s.containerInfo;Eo(function(){Yh(null,s,null,null)}),o[vi]=null}};function Jh(s){this._internalRoot=s}Jh.prototype.unstable_scheduleHydration=function(s){if(s){var o=tu();s={blockedOn:null,target:s,priority:o};for(var u=0;u<bn.length&&o!==0&&o<bn[u].priority;u++);bn.splice(u,0,s),u===0&&da(s)}};function Jm(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function Zh(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function fE(){}function Xb(s,o,u,d,g){if(g){if(typeof d=="function"){var v=d;d=function(){var Q=Xh(S);v.call(Q)}}var S=uE(o,d,s,0,null,!1,!1,"",fE);return s._reactRootContainer=S,s[vi]=S.current,du(s.nodeType===8?s.parentNode:s),Eo(),S}for(;g=s.lastChild;)s.removeChild(g);if(typeof d=="function"){var N=d;d=function(){var Q=Xh(j);N.call(Q)}}var j=Qm(s,0,!1,null,null,!1,!1,"",fE);return s._reactRootContainer=j,s[vi]=j.current,du(s.nodeType===8?s.parentNode:s),Eo(function(){Yh(o,j,u,d)}),j}function ef(s,o,u,d,g){var v=u._reactRootContainer;if(v){var S=v;if(typeof g=="function"){var N=g;g=function(){var j=Xh(S);N.call(j)}}Yh(o,S,s,g)}else S=Xb(u,o,s,g,d);return Xh(S)}Zl=function(s){switch(s.tag){case 3:var o=s.stateNode;if(o.current.memoizedState.isDehydrated){var u=Ke(o.pendingLanes);u!==0&&(Jl(o,u|1),xn(o,ot()),!(We&6)&&($a=ot()+500,ls()))}break;case 13:Eo(function(){var d=Ti(s,1);if(d!==null){var g=mn();yr(d,s,1,g)}}),Ym(s,1)}},ha=function(s){if(s.tag===13){var o=Ti(s,134217728);if(o!==null){var u=mn();yr(o,s,134217728,u)}Ym(s,134217728)}},eu=function(s){if(s.tag===13){var o=ps(s),u=Ti(s,o);if(u!==null){var d=mn();yr(u,s,o,d)}Ym(s,o)}},tu=function(){return ze},nu=function(s,o){var u=ze;try{return ze=s,o()}finally{ze=u}},li=function(s,o,u){switch(o){case"input":if(Xs(s,u),o=u.name,u.type==="radio"&&o!=null){for(u=s;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<u.length;o++){var d=u[o];if(d!==s&&d.form===s.form){var g=yh(d);if(!g)throw Error(n(90));_n(d),Xs(d,g)}}}break;case"textarea":zc(s,u);break;case"select":o=u.value,o!=null&&lr(s,!!u.multiple,o,!1)}},Hc=Bm,qc=Eo;var Jb={usingClientEntryPoint:!1,Events:[gu,Ca,yh,Gi,Qi,Bm]},ku={findFiberByHostInstance:fo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zb={bundleType:ku.bundleType,version:ku.version,rendererPackageName:ku.rendererPackageName,rendererConfig:ku.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=Zc(s),s===null?null:s.stateNode},findFiberByHostInstance:ku.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tf.isDisabled&&tf.supportsFiber)try{ro=tf.inject(Zb),Rn=tf}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jb,In.createPortal=function(s,o){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jm(o))throw Error(n(200));return Yb(s,o,null,u)},In.createRoot=function(s,o){if(!Jm(s))throw Error(n(299));var u=!1,d="",g=hE;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),o=Qm(s,1,!1,null,null,u,!1,d,g),s[vi]=o.current,du(s.nodeType===8?s.parentNode:s),new Xm(o)},In.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var o=s._reactInternals;if(o===void 0)throw typeof s.render=="function"?Error(n(188)):(s=Object.keys(s).join(","),Error(n(268,s)));return s=Zc(o),s=s===null?null:s.stateNode,s},In.flushSync=function(s){return Eo(s)},In.hydrate=function(s,o,u){if(!Zh(o))throw Error(n(200));return ef(null,s,o,!0,u)},In.hydrateRoot=function(s,o,u){if(!Jm(s))throw Error(n(405));var d=u!=null&&u.hydratedSources||null,g=!1,v="",S=hE;if(u!=null&&(u.unstable_strictMode===!0&&(g=!0),u.identifierPrefix!==void 0&&(v=u.identifierPrefix),u.onRecoverableError!==void 0&&(S=u.onRecoverableError)),o=uE(o,null,s,1,u??null,g,!1,v,S),s[vi]=o.current,du(s),d)for(s=0;s<d.length;s++)u=d[s],g=u._getVersion,g=g(u._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[u,g]:o.mutableSourceEagerHydrationData.push(u,g);return new Jh(o)},In.render=function(s,o,u){if(!Zh(o))throw Error(n(200));return ef(null,s,o,!1,u)},In.unmountComponentAtNode=function(s){if(!Zh(s))throw Error(n(40));return s._reactRootContainer?(Eo(function(){ef(null,null,s,!1,function(){s._reactRootContainer=null,s[vi]=null})}),!0):!1},In.unstable_batchedUpdates=Bm,In.unstable_renderSubtreeIntoContainer=function(s,o,u,d){if(!Zh(u))throw Error(n(200));if(s==null||s._reactInternals===void 0)throw Error(n(38));return ef(s,o,u,!1,d)},In.version="18.3.1-next-f1338f8080-20240426",In}var TE;function hD(){if(TE)return tg.exports;TE=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),tg.exports=cD(),tg.exports}var SE;function fD(){if(SE)return nf;SE=1;var t=hD();return nf.createRoot=t.createRoot,nf.hydrateRoot=t.hydrateRoot,nf}var dD=fD(),Du={},xE;function pD(){if(xE)return Du;xE=1,Object.defineProperty(Du,"__esModule",{value:!0}),Du.parse=l,Du.serialize=p;const t=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,i=Object.prototype.toString,a=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function l(w,T){const x=new a,P=w.length;if(P<2)return x;const k=(T==null?void 0:T.decode)||m;let b=0;do{const O=w.indexOf("=",b);if(O===-1)break;const U=w.indexOf(";",b),$=U===-1?P:U;if(O>$){b=w.lastIndexOf(";",O-1)+1;continue}const H=c(w,b,O),X=h(w,O,H),C=w.slice(H,X);if(x[C]===void 0){let I=c(w,O+1,$),R=h(w,$,I);const D=k(w.slice(I,R));x[C]=D}b=$+1}while(b<P);return x}function c(w,T,x){do{const P=w.charCodeAt(T);if(P!==32&&P!==9)return T}while(++T<x);return x}function h(w,T,x){for(;T>x;){const P=w.charCodeAt(--T);if(P!==32&&P!==9)return T+1}return x}function p(w,T,x){const P=(x==null?void 0:x.encode)||encodeURIComponent;if(!t.test(w))throw new TypeError(`argument name is invalid: ${w}`);const k=P(T);if(!e.test(k))throw new TypeError(`argument val is invalid: ${T}`);let b=w+"="+k;if(!x)return b;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);b+="; Max-Age="+x.maxAge}if(x.domain){if(!n.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);b+="; Domain="+x.domain}if(x.path){if(!r.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);b+="; Path="+x.path}if(x.expires){if(!y(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);b+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(b+="; HttpOnly"),x.secure&&(b+="; Secure"),x.partitioned&&(b+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":b+="; Priority=Low";break;case"medium":b+="; Priority=Medium";break;case"high":b+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":b+="; SameSite=Strict";break;case"lax":b+="; SameSite=Lax";break;case"none":b+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return b}function m(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function y(w){return i.call(w)==="[object Date]"}return Du}pD();/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var IE="popstate";function mD(t={}){function e(i,a){let{pathname:l="/",search:c="",hash:h=""}=Qo(i.location.hash.substring(1));return!l.startsWith("/")&&!l.startsWith(".")&&(l="/"+l),Yg("",{pathname:l,search:c,hash:h},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(i,a){let l=i.document.querySelector("base"),c="";if(l&&l.getAttribute("href")){let h=i.location.href,p=h.indexOf("#");c=p===-1?h:h.slice(0,p)}return c+"#"+(typeof a=="string"?a:rc(a))}function r(i,a){rr(i.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(a)})`)}return yD(e,n,r,t)}function pt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function rr(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gD(){return Math.random().toString(36).substring(2,10)}function AE(t,e){return{usr:t.state,key:t.key,idx:e}}function Yg(t,e,n=null,r){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?Qo(e):e,state:n,key:e&&e.key||r||gD()}}function rc({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Qo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function yD(t,e,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,l=i.history,c="POP",h=null,p=m();p==null&&(p=0,l.replaceState({...l.state,idx:p},""));function m(){return(l.state||{idx:null}).idx}function y(){c="POP";let k=m(),b=k==null?null:k-p;p=k,h&&h({action:c,location:P.location,delta:b})}function w(k,b){c="PUSH";let O=Yg(P.location,k,b);n(O,k),p=m()+1;let U=AE(O,p),$=P.createHref(O);try{l.pushState(U,"",$)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;i.location.assign($)}a&&h&&h({action:c,location:P.location,delta:1})}function T(k,b){c="REPLACE";let O=Yg(P.location,k,b);n(O,k),p=m();let U=AE(O,p),$=P.createHref(O);l.replaceState(U,"",$),a&&h&&h({action:c,location:P.location,delta:0})}function x(k){let b=i.location.origin!=="null"?i.location.origin:i.location.href,O=typeof k=="string"?k:rc(k);return O=O.replace(/ $/,"%20"),pt(b,`No window.location.(origin|href) available to create URL for href: ${O}`),new URL(O,b)}let P={get action(){return c},get location(){return t(i,l)},listen(k){if(h)throw new Error("A history only accepts one active listener");return i.addEventListener(IE,y),h=k,()=>{i.removeEventListener(IE,y),h=null}},createHref(k){return e(i,k)},createURL:x,encodeLocation(k){let b=x(k);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:w,replace:T,go(k){return l.go(k)}};return P}function j1(t,e,n="/"){return vD(t,e,n,!1)}function vD(t,e,n,r){let i=typeof e=="string"?Qo(e):e,a=Os(i.pathname||"/",n);if(a==null)return null;let l=$1(t);_D(l);let c=null;for(let h=0;c==null&&h<l.length;++h){let p=kD(a);c=PD(l[h],p,r)}return c}function $1(t,e=[],n=[],r=""){let i=(a,l,c)=>{let h={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};h.relativePath.startsWith("/")&&(pt(h.relativePath.startsWith(r),`Absolute route path "${h.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),h.relativePath=h.relativePath.slice(r.length));let p=bi([r,h.relativePath]),m=n.concat(h);a.children&&a.children.length>0&&(pt(a.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),$1(a.children,e,m,p)),!(a.path==null&&!a.index)&&e.push({path:p,score:AD(p,a.index),routesMeta:m})};return t.forEach((a,l)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))i(a,l);else for(let h of U1(a.path))i(a,l,h)}),e}function U1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let l=U1(r.join("/")),c=[];return c.push(...l.map(h=>h===""?a:[a,h].join("/"))),i&&c.push(...l),c.map(h=>t.startsWith("/")&&h===""?"/":h)}function _D(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:CD(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}var wD=/^:[\w-]+$/,ED=3,TD=2,SD=1,xD=10,ID=-2,CE=t=>t==="*";function AD(t,e){let n=t.split("/"),r=n.length;return n.some(CE)&&(r+=ID),e&&(r+=TD),n.filter(i=>!CE(i)).reduce((i,a)=>i+(wD.test(a)?ED:a===""?SD:xD),r)}function CD(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function PD(t,e,n=!1){let{routesMeta:r}=t,i={},a="/",l=[];for(let c=0;c<r.length;++c){let h=r[c],p=c===r.length-1,m=a==="/"?e:e.slice(a.length)||"/",y=Xf({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},m),w=h.route;if(!y&&p&&n&&!r[r.length-1].route.index&&(y=Xf({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},m)),!y)return null;Object.assign(i,y.params),l.push({params:i,pathname:bi([a,y.pathname]),pathnameBase:ND(bi([a,y.pathnameBase])),route:w}),y.pathnameBase!=="/"&&(a=bi([a,y.pathnameBase]))}return l}function Xf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=RD(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((p,{paramName:m,isOptional:y},w)=>{if(m==="*"){let x=c[w]||"";l=a.slice(0,a.length-x.length).replace(/(.)\/+$/,"$1")}const T=c[w];return y&&!T?p[m]=void 0:p[m]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:a,pathnameBase:l,pattern:t}}function RD(t,e=!1,n=!0){rr(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,h)=>(r.push({paramName:c,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function kD(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return rr(!1,`The URL path "${t}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Os(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function bD(t,e="/"){let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Qo(t):t;return{pathname:n?n.startsWith("/")?n:DD(n,e):e,search:MD(r),hash:LD(i)}}function DD(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ig(t,e,n,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function VD(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cv(t){let e=VD(t);return e.map((n,r)=>r===e.length-1?n.pathname:n.pathnameBase)}function hv(t,e,n,r=!1){let i;typeof t=="string"?i=Qo(t):(i={...t},pt(!i.pathname||!i.pathname.includes("?"),ig("?","pathname","search",i)),pt(!i.pathname||!i.pathname.includes("#"),ig("#","pathname","hash",i)),pt(!i.search||!i.search.includes("#"),ig("#","search","hash",i)));let a=t===""||i.pathname==="",l=a?"/":i.pathname,c;if(l==null)c=n;else{let y=e.length-1;if(!r&&l.startsWith("..")){let w=l.split("/");for(;w[0]==="..";)w.shift(),y-=1;i.pathname=w.join("/")}c=y>=0?e[y]:"/"}let h=bD(i,c),p=l&&l!=="/"&&l.endsWith("/"),m=(a||l===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(p||m)&&(h.pathname+="/"),h}var bi=t=>t.join("/").replace(/\/\/+/g,"/"),ND=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MD=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,LD=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function OD(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var z1=["POST","PUT","PATCH","DELETE"];new Set(z1);var FD=["GET",...z1];new Set(FD);var xl=M.createContext(null);xl.displayName="DataRouter";var Wd=M.createContext(null);Wd.displayName="DataRouterState";var B1=M.createContext({isTransitioning:!1});B1.displayName="ViewTransition";var jD=M.createContext(new Map);jD.displayName="Fetchers";var $D=M.createContext(null);$D.displayName="Await";var Rr=M.createContext(null);Rr.displayName="Navigation";var Ec=M.createContext(null);Ec.displayName="Location";var or=M.createContext({outlet:null,matches:[],isDataRoute:!1});or.displayName="Route";var fv=M.createContext(null);fv.displayName="RouteError";function UD(t,{relative:e}={}){pt(Il(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:r}=M.useContext(Rr),{hash:i,pathname:a,search:l}=Tc(t,{relative:e}),c=a;return n!=="/"&&(c=a==="/"?n:bi([n,a])),r.createHref({pathname:c,search:l,hash:i})}function Il(){return M.useContext(Ec)!=null}function oi(){return pt(Il(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(Ec).location}var W1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function H1(t){M.useContext(Rr).static||M.useLayoutEffect(t)}function dv(){let{isDataRoute:t}=M.useContext(or);return t?nV():zD()}function zD(){pt(Il(),"useNavigate() may be used only in the context of a <Router> component.");let t=M.useContext(xl),{basename:e,navigator:n}=M.useContext(Rr),{matches:r}=M.useContext(or),{pathname:i}=oi(),a=JSON.stringify(cv(r)),l=M.useRef(!1);return H1(()=>{l.current=!0}),M.useCallback((h,p={})=>{if(rr(l.current,W1),!l.current)return;if(typeof h=="number"){n.go(h);return}let m=hv(h,JSON.parse(a),i,p.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:bi([e,m.pathname])),(p.replace?n.replace:n.push)(m,p.state,p)},[e,n,a,i,t])}var BD=M.createContext(null);function WD(t){let e=M.useContext(or).outlet;return e&&M.createElement(BD.Provider,{value:t},e)}function c7(){let{matches:t}=M.useContext(or),e=t[t.length-1];return e?e.params:{}}function Tc(t,{relative:e}={}){let{matches:n}=M.useContext(or),{pathname:r}=oi(),i=JSON.stringify(cv(n));return M.useMemo(()=>hv(t,JSON.parse(i),r,e==="path"),[t,i,r,e])}function HD(t,e){return q1(t,e)}function q1(t,e,n,r){var b;pt(Il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=M.useContext(Rr),{matches:a}=M.useContext(or),l=a[a.length-1],c=l?l.params:{},h=l?l.pathname:"/",p=l?l.pathnameBase:"/",m=l&&l.route;{let O=m&&m.path||"";K1(h,!m||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let y=oi(),w;if(e){let O=typeof e=="string"?Qo(e):e;pt(p==="/"||((b=O.pathname)==null?void 0:b.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${O.pathname}" was given in the \`location\` prop.`),w=O}else w=y;let T=w.pathname||"/",x=T;if(p!=="/"){let O=p.replace(/^\//,"").split("/");x="/"+T.replace(/^\//,"").split("/").slice(O.length).join("/")}let P=j1(t,{pathname:x});rr(m||P!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),rr(P==null||P[P.length-1].route.element!==void 0||P[P.length-1].route.Component!==void 0||P[P.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=YD(P&&P.map(O=>Object.assign({},O,{params:Object.assign({},c,O.params),pathname:bi([p,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?p:bi([p,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),a,n,r);return e&&k?M.createElement(Ec.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},k):k}function qD(){let t=tV(),e=OD(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},a={padding:"2px 4px",backgroundColor:r},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:a},"ErrorBoundary")," or"," ",M.createElement("code",{style:a},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,l)}var KD=M.createElement(qD,null),GD=class extends M.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?M.createElement(or.Provider,{value:this.props.routeContext},M.createElement(fv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function QD({routeContext:t,match:e,children:n}){let r=M.useContext(xl);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),M.createElement(or.Provider,{value:t},n)}function YD(t,e=[],n=null,r=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let i=t,a=n==null?void 0:n.errors;if(a!=null){let h=i.findIndex(p=>p.route.id&&(a==null?void 0:a[p.route.id])!==void 0);pt(h>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),i=i.slice(0,Math.min(i.length,h+1))}let l=!1,c=-1;if(n)for(let h=0;h<i.length;h++){let p=i[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:m,errors:y}=n,w=p.route.loader&&!m.hasOwnProperty(p.route.id)&&(!y||y[p.route.id]===void 0);if(p.route.lazy||w){l=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((h,p,m)=>{let y,w=!1,T=null,x=null;n&&(y=a&&p.route.id?a[p.route.id]:void 0,T=p.route.errorElement||KD,l&&(c<0&&m===0?(K1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):c===m&&(w=!0,x=p.route.hydrateFallbackElement||null)));let P=e.concat(i.slice(0,m+1)),k=()=>{let b;return y?b=T:w?b=x:p.route.Component?b=M.createElement(p.route.Component,null):p.route.element?b=p.route.element:b=h,M.createElement(QD,{match:p,routeContext:{outlet:h,matches:P,isDataRoute:n!=null},children:b})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?M.createElement(GD,{location:n.location,revalidation:n.revalidation,component:T,error:y,children:k(),routeContext:{outlet:null,matches:P,isDataRoute:!0}}):k()},null)}function pv(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function XD(t){let e=M.useContext(xl);return pt(e,pv(t)),e}function JD(t){let e=M.useContext(Wd);return pt(e,pv(t)),e}function ZD(t){let e=M.useContext(or);return pt(e,pv(t)),e}function mv(t){let e=ZD(t),n=e.matches[e.matches.length-1];return pt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function eV(){return mv("useRouteId")}function tV(){var r;let t=M.useContext(fv),e=JD("useRouteError"),n=mv("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[n]}function nV(){let{router:t}=XD("useNavigate"),e=mv("useNavigate"),n=M.useRef(!1);return H1(()=>{n.current=!0}),M.useCallback(async(i,a={})=>{rr(n.current,W1),n.current&&(typeof i=="number"?t.navigate(i):await t.navigate(i,{fromRouteId:e,...a}))},[t,e])}var PE={};function K1(t,e,n){!e&&!PE[t]&&(PE[t]=!0,rr(!1,n))}M.memo(rV);function rV({routes:t,future:e,state:n}){return q1(t,void 0,n,e)}function iV({to:t,replace:e,state:n,relative:r}){pt(Il(),"<Navigate> may be used only in the context of a <Router> component.");let{static:i}=M.useContext(Rr);rr(!i,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:a}=M.useContext(or),{pathname:l}=oi(),c=dv(),h=hv(t,cv(a),l,r==="path"),p=JSON.stringify(h);return M.useEffect(()=>{c(JSON.parse(p),{replace:e,state:n,relative:r})},[c,p,r,e,n]),null}function h7(t){return WD(t.context)}function qe(t){pt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sV({basename:t="/",children:e=null,location:n,navigationType:r="POP",navigator:i,static:a=!1}){pt(!Il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=t.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:l,navigator:i,static:a,future:{}}),[l,i,a]);typeof n=="string"&&(n=Qo(n));let{pathname:h="/",search:p="",hash:m="",state:y=null,key:w="default"}=n,T=M.useMemo(()=>{let x=Os(h,l);return x==null?null:{location:{pathname:x,search:p,hash:m,state:y,key:w},navigationType:r}},[l,h,p,m,y,w,r]);return rr(T!=null,`<Router basename="${l}"> is not able to match the URL "${h}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:M.createElement(Rr.Provider,{value:c},M.createElement(Ec.Provider,{children:e,value:T}))}function oV({children:t,location:e}){return HD(Xg(t),e)}function Xg(t,e=[]){let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let a=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Xg(r.props.children,a));return}pt(r.type===qe,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),pt(!r.props.index||!r.props.children,"An index route cannot have child routes.");let l={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Xg(r.props.children,a)),n.push(l)}),n}var Tf="get",Sf="application/x-www-form-urlencoded";function Hd(t){return t!=null&&typeof t.tagName=="string"}function aV(t){return Hd(t)&&t.tagName.toLowerCase()==="button"}function lV(t){return Hd(t)&&t.tagName.toLowerCase()==="form"}function uV(t){return Hd(t)&&t.tagName.toLowerCase()==="input"}function cV(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hV(t,e){return t.button===0&&(!e||e==="_self")&&!cV(t)}var rf=null;function fV(){if(rf===null)try{new FormData(document.createElement("form"),0),rf=!1}catch{rf=!0}return rf}var dV=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function sg(t){return t!=null&&!dV.has(t)?(rr(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Sf}"`),null):t}function pV(t,e){let n,r,i,a,l;if(lV(t)){let c=t.getAttribute("action");r=c?Os(c,e):null,n=t.getAttribute("method")||Tf,i=sg(t.getAttribute("enctype"))||Sf,a=new FormData(t)}else if(aV(t)||uV(t)&&(t.type==="submit"||t.type==="image")){let c=t.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=t.getAttribute("formaction")||c.getAttribute("action");if(r=h?Os(h,e):null,n=t.getAttribute("formmethod")||c.getAttribute("method")||Tf,i=sg(t.getAttribute("formenctype"))||sg(c.getAttribute("enctype"))||Sf,a=new FormData(c,t),!fV()){let{name:p,type:m,value:y}=t;if(m==="image"){let w=p?`${p}.`:"";a.append(`${w}x`,"0"),a.append(`${w}y`,"0")}else p&&a.append(p,y)}}else{if(Hd(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Tf,r=null,i=Sf,l=t}return a&&i==="text/plain"&&(l=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:l}}function gv(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function mV(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function gV(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function yV(t,e,n){let r=await Promise.all(t.map(async i=>{let a=e.routes[i.route.id];if(a){let l=await mV(a,n);return l.links?l.links():[]}return[]}));return EV(r.flat(1).filter(gV).filter(i=>i.rel==="stylesheet"||i.rel==="preload").map(i=>i.rel==="stylesheet"?{...i,rel:"prefetch",as:"style"}:{...i,rel:"prefetch"}))}function RE(t,e,n,r,i,a){let l=(h,p)=>n[p]?h.route.id!==n[p].route.id:!0,c=(h,p)=>{var m;return n[p].pathname!==h.pathname||((m=n[p].route.path)==null?void 0:m.endsWith("*"))&&n[p].params["*"]!==h.params["*"]};return a==="assets"?e.filter((h,p)=>l(h,p)||c(h,p)):a==="data"?e.filter((h,p)=>{var y;let m=r.routes[h.route.id];if(!m||!m.hasLoader)return!1;if(l(h,p)||c(h,p))return!0;if(h.route.shouldRevalidate){let w=h.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:((y=n[0])==null?void 0:y.params)||{},nextUrl:new URL(t,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function vV(t,e){return _V(t.map(n=>{let r=e.routes[n.route.id];if(!r)return[];let i=[r.module];return r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function _V(t){return[...new Set(t)]}function wV(t){let e={},n=Object.keys(t).sort();for(let r of n)e[r]=t[r];return e}function EV(t,e){let n=new Set;return new Set(e),t.reduce((r,i)=>{let a=JSON.stringify(wV(i));return n.has(a)||(n.add(a),r.push({key:a,link:i})),r},[])}function TV(t){let e=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function SV(){let t=M.useContext(xl);return gv(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function xV(){let t=M.useContext(Wd);return gv(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var yv=M.createContext(void 0);yv.displayName="FrameworkContext";function G1(){let t=M.useContext(yv);return gv(t,"You must render this element inside a <HydratedRouter> element"),t}function IV(t,e){let n=M.useContext(yv),[r,i]=M.useState(!1),[a,l]=M.useState(!1),{onFocus:c,onBlur:h,onMouseEnter:p,onMouseLeave:m,onTouchStart:y}=e,w=M.useRef(null);M.useEffect(()=>{if(t==="render"&&l(!0),t==="viewport"){let P=b=>{b.forEach(O=>{l(O.isIntersecting)})},k=new IntersectionObserver(P,{threshold:.5});return w.current&&k.observe(w.current),()=>{k.disconnect()}}},[t]),M.useEffect(()=>{if(r){let P=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(P)}}},[r]);let T=()=>{i(!0)},x=()=>{i(!1),l(!1)};return n?t!=="intent"?[a,w,{}]:[a,w,{onFocus:Vu(c,T),onBlur:Vu(h,x),onMouseEnter:Vu(p,T),onMouseLeave:Vu(m,x),onTouchStart:Vu(y,T)}]:[!1,w,{}]}function Vu(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function AV({page:t,...e}){let{router:n}=SV(),r=M.useMemo(()=>j1(n.routes,t,n.basename),[n.routes,t,n.basename]);return r?M.createElement(PV,{page:t,matches:r,...e}):null}function CV(t){let{manifest:e,routeModules:n}=G1(),[r,i]=M.useState([]);return M.useEffect(()=>{let a=!1;return yV(t,e,n).then(l=>{a||i(l)}),()=>{a=!0}},[t,e,n]),r}function PV({page:t,matches:e,...n}){let r=oi(),{manifest:i,routeModules:a}=G1(),{loaderData:l,matches:c}=xV(),h=M.useMemo(()=>RE(t,e,c,i,r,"data"),[t,e,c,i,r]),p=M.useMemo(()=>RE(t,e,c,i,r,"assets"),[t,e,c,i,r]),m=M.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let T=new Set,x=!1;if(e.forEach(k=>{var O;let b=i.routes[k.route.id];!b||!b.hasLoader||(!h.some(U=>U.route.id===k.route.id)&&k.route.id in l&&((O=a[k.route.id])!=null&&O.shouldRevalidate)||b.hasClientLoader?x=!0:T.add(k.route.id))}),T.size===0)return[];let P=TV(t);return x&&T.size>0&&P.searchParams.set("_routes",e.filter(k=>T.has(k.route.id)).map(k=>k.route.id).join(",")),[P.pathname+P.search]},[l,r,i,h,e,t,a]),y=M.useMemo(()=>vV(p,i),[p,i]),w=CV(p);return M.createElement(M.Fragment,null,m.map(T=>M.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...n})),y.map(T=>M.createElement("link",{key:T,rel:"modulepreload",href:T,...n})),w.map(({key:T,link:x})=>M.createElement("link",{key:T,...x})))}function RV(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var Q1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Q1&&(window.__reactRouterVersion="7.1.1")}catch{}function kV({basename:t,children:e,window:n}){let r=M.useRef();r.current==null&&(r.current=mD({window:n,v5Compat:!0}));let i=r.current,[a,l]=M.useState({action:i.action,location:i.location}),c=M.useCallback(h=>{M.startTransition(()=>l(h))},[l]);return M.useLayoutEffect(()=>i.listen(c),[i,c]),M.createElement(sV,{basename:t,children:e,location:a.location,navigationType:a.action,navigator:i})}var Y1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jf=M.forwardRef(function({onClick:e,discover:n="render",prefetch:r="none",relative:i,reloadDocument:a,replace:l,state:c,target:h,to:p,preventScrollReset:m,viewTransition:y,...w},T){let{basename:x}=M.useContext(Rr),P=typeof p=="string"&&Y1.test(p),k,b=!1;if(typeof p=="string"&&P&&(k=p,Q1))try{let R=new URL(window.location.href),D=p.startsWith("//")?new URL(R.protocol+p):new URL(p),L=Os(D.pathname,x);D.origin===R.origin&&L!=null?p=L+D.search+D.hash:b=!0}catch{rr(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=UD(p,{relative:i}),[U,$,H]=IV(r,w),X=NV(p,{replace:l,state:c,target:h,preventScrollReset:m,relative:i,viewTransition:y});function C(R){e&&e(R),R.defaultPrevented||X(R)}let I=M.createElement("a",{...w,...H,href:k||O,onClick:b||a?e:C,ref:RV(T,$),target:h,"data-discover":!P&&n==="render"?"true":void 0});return U&&!P?M.createElement(M.Fragment,null,I,M.createElement(AV,{page:O})):I});Jf.displayName="Link";var bV=M.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:r="",end:i=!1,style:a,to:l,viewTransition:c,children:h,...p},m){let y=Tc(l,{relative:p.relative}),w=oi(),T=M.useContext(Wd),{navigator:x,basename:P}=M.useContext(Rr),k=T!=null&&jV(y)&&c===!0,b=x.encodeLocation?x.encodeLocation(y).pathname:y.pathname,O=w.pathname,U=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;n||(O=O.toLowerCase(),U=U?U.toLowerCase():null,b=b.toLowerCase()),U&&P&&(U=Os(U,P)||U);const $=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let H=O===b||!i&&O.startsWith(b)&&O.charAt($)==="/",X=U!=null&&(U===b||!i&&U.startsWith(b)&&U.charAt(b.length)==="/"),C={isActive:H,isPending:X,isTransitioning:k},I=H?e:void 0,R;typeof r=="function"?R=r(C):R=[r,H?"active":null,X?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let D=typeof a=="function"?a(C):a;return M.createElement(Jf,{...p,"aria-current":I,className:R,ref:m,style:D,to:l,viewTransition:c},typeof h=="function"?h(C):h)});bV.displayName="NavLink";var DV=M.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:r,replace:i,state:a,method:l=Tf,action:c,onSubmit:h,relative:p,preventScrollReset:m,viewTransition:y,...w},T)=>{let x=OV(),P=FV(c,{relative:p}),k=l.toLowerCase()==="get"?"get":"post",b=typeof c=="string"&&Y1.test(c),O=U=>{if(h&&h(U),U.defaultPrevented)return;U.preventDefault();let $=U.nativeEvent.submitter,H=($==null?void 0:$.getAttribute("formmethod"))||l;x($||U.currentTarget,{fetcherKey:e,method:H,navigate:n,replace:i,state:a,relative:p,preventScrollReset:m,viewTransition:y})};return M.createElement("form",{ref:T,method:k,action:P,onSubmit:r?h:O,...w,"data-discover":!b&&t==="render"?"true":void 0})});DV.displayName="Form";function VV(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function X1(t){let e=M.useContext(xl);return pt(e,VV(t)),e}function NV(t,{target:e,replace:n,state:r,preventScrollReset:i,relative:a,viewTransition:l}={}){let c=dv(),h=oi(),p=Tc(t,{relative:a});return M.useCallback(m=>{if(hV(m,e)){m.preventDefault();let y=n!==void 0?n:rc(h)===rc(p);c(t,{replace:y,state:r,preventScrollReset:i,relative:a,viewTransition:l})}},[h,c,p,n,r,e,t,i,a,l])}var MV=0,LV=()=>`__${String(++MV)}__`;function OV(){let{router:t}=X1("useSubmit"),{basename:e}=M.useContext(Rr),n=eV();return M.useCallback(async(r,i={})=>{let{action:a,method:l,encType:c,formData:h,body:p}=pV(r,e);if(i.navigate===!1){let m=i.fetcherKey||LV();await t.fetch(m,n,i.action||a,{preventScrollReset:i.preventScrollReset,formData:h,body:p,formMethod:i.method||l,formEncType:i.encType||c,flushSync:i.flushSync})}else await t.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:h,body:p,formMethod:i.method||l,formEncType:i.encType||c,replace:i.replace,state:i.state,fromRouteId:n,flushSync:i.flushSync,viewTransition:i.viewTransition})},[t,e,n])}function FV(t,{relative:e}={}){let{basename:n}=M.useContext(Rr),r=M.useContext(or);pt(r,"useFormAction must be used inside a RouteContext");let[i]=r.matches.slice(-1),a={...Tc(t||".",{relative:e})},l=oi();if(t==null){a.search=l.search;let c=new URLSearchParams(a.search),h=c.getAll("index");if(h.some(m=>m==="")){c.delete("index"),h.filter(y=>y).forEach(y=>c.append("index",y));let m=c.toString();a.search=m?`?${m}`:""}}return(!t||t===".")&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(a.pathname=a.pathname==="/"?n:bi([n,a.pathname])),rc(a)}function jV(t,e={}){let n=M.useContext(B1);pt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=X1("useViewTransitionState"),i=Tc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let a=Os(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Os(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Xf(i.pathname,l)!=null||Xf(i.pathname,a)!=null}new TextEncoder;var og={exports:{}},ag={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE;function $V(){if(kE)return ag;kE=1;var t=Bd();function e(h,p){return h===p&&(h!==0||1/h===1/p)||h!==h&&p!==p}var n=typeof Object.is=="function"?Object.is:e,r=t.useSyncExternalStore,i=t.useRef,a=t.useEffect,l=t.useMemo,c=t.useDebugValue;return ag.useSyncExternalStoreWithSelector=function(h,p,m,y,w){var T=i(null);if(T.current===null){var x={hasValue:!1,value:null};T.current=x}else x=T.current;T=l(function(){function k(H){if(!b){if(b=!0,O=H,H=y(H),w!==void 0&&x.hasValue){var X=x.value;if(w(X,H))return U=X}return U=H}if(X=U,n(O,H))return X;var C=y(H);return w!==void 0&&w(X,C)?(O=H,X):(O=H,U=C)}var b=!1,O,U,$=m===void 0?null:m;return[function(){return k(p())},$===null?void 0:function(){return k($())}]},[p,m,y,w]);var P=r(h,T[0],T[1]);return a(function(){x.hasValue=!0,x.value=P},[P]),c(P),P},ag}var bE;function UV(){return bE||(bE=1,og.exports=$V()),og.exports}var zV=UV();function BV(t){t()}function WV(){let t=null,e=null;return{clear(){t=null,e=null},notify(){BV(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}var DE={notify(){},get:()=>[]};function HV(t,e){let n,r=DE,i=0,a=!1;function l(P){m();const k=r.subscribe(P);let b=!1;return()=>{b||(b=!0,k(),y())}}function c(){r.notify()}function h(){x.onStateChange&&x.onStateChange()}function p(){return a}function m(){i++,n||(n=t.subscribe(h),r=WV())}function y(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=DE)}function w(){a||(a=!0,m())}function T(){a&&(a=!1,y())}const x={addNestedSub:l,notifyNestedSubs:c,handleChangeWrapper:h,isSubscribed:p,trySubscribe:w,tryUnsubscribe:T,getListeners:()=>r};return x}var qV=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",KV=qV(),GV=()=>typeof navigator<"u"&&navigator.product==="ReactNative",QV=GV(),YV=()=>KV||QV?M.useLayoutEffect:M.useEffect,XV=YV(),lg=Symbol.for("react-redux-context"),ug=typeof globalThis<"u"?globalThis:{};function JV(){if(!M.createContext)return{};const t=ug[lg]??(ug[lg]=new Map);let e=t.get(M.createContext);return e||(e=M.createContext(null),t.set(M.createContext,e)),e}var Fs=JV();function ZV(t){const{children:e,context:n,serverState:r,store:i}=t,a=M.useMemo(()=>{const h=HV(i);return{store:i,subscription:h,getServerState:r?()=>r:void 0}},[i,r]),l=M.useMemo(()=>i.getState(),[i]);XV(()=>{const{subscription:h}=a;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),l!==i.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[a,l]);const c=n||Fs;return M.createElement(c.Provider,{value:a},e)}var eN=ZV;function vv(t=Fs){return function(){return M.useContext(t)}}var J1=vv();function Z1(t=Fs){const e=t===Fs?J1:vv(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}var tN=Z1();function nN(t=Fs){const e=t===Fs?tN:Z1(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var _v=nN(),rN=(t,e)=>t===e;function iN(t=Fs){const e=t===Fs?J1:vv(t),n=(r,i={})=>{const{equalityFn:a=rN}=typeof i=="function"?{equalityFn:i}:i,l=e(),{store:c,subscription:h,getServerState:p}=l;M.useRef(!0);const m=M.useCallback({[r.name](w){return r(w)}}[r.name],[r]),y=zV.useSyncExternalStoreWithSelector(h.addNestedSub,c.getState,p||c.getState,m,a);return M.useDebugValue(y),y};return Object.assign(n,{withTypes:()=>n}),n}var Pi=iN();function Xt(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var sN=typeof Symbol=="function"&&Symbol.observable||"@@observable",VE=sN,cg=()=>Math.random().toString(36).substring(7).split("").join("."),oN={INIT:`@@redux/INIT${cg()}`,REPLACE:`@@redux/REPLACE${cg()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${cg()}`},Zf=oN;function wv(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function eI(t,e,n){if(typeof t!="function")throw new Error(Xt(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Xt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Xt(1));return n(eI)(t,e)}let r=t,i=e,a=new Map,l=a,c=0,h=!1;function p(){l===a&&(l=new Map,a.forEach((k,b)=>{l.set(b,k)}))}function m(){if(h)throw new Error(Xt(3));return i}function y(k){if(typeof k!="function")throw new Error(Xt(4));if(h)throw new Error(Xt(5));let b=!0;p();const O=c++;return l.set(O,k),function(){if(b){if(h)throw new Error(Xt(6));b=!1,p(),l.delete(O),a=null}}}function w(k){if(!wv(k))throw new Error(Xt(7));if(typeof k.type>"u")throw new Error(Xt(8));if(typeof k.type!="string")throw new Error(Xt(17));if(h)throw new Error(Xt(9));try{h=!0,i=r(i,k)}finally{h=!1}return(a=l).forEach(O=>{O()}),k}function T(k){if(typeof k!="function")throw new Error(Xt(10));r=k,w({type:Zf.REPLACE})}function x(){const k=y;return{subscribe(b){if(typeof b!="object"||b===null)throw new Error(Xt(11));function O(){const $=b;$.next&&$.next(m())}return O(),{unsubscribe:k(O)}},[VE](){return this}}}return w({type:Zf.INIT}),{dispatch:w,subscribe:y,getState:m,replaceReducer:T,[VE]:x}}function aN(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Zf.INIT})>"u")throw new Error(Xt(12));if(typeof n(void 0,{type:Zf.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Xt(13))})}function lN(t){const e=Object.keys(t),n={};for(let a=0;a<e.length;a++){const l=e[a];typeof t[l]=="function"&&(n[l]=t[l])}const r=Object.keys(n);let i;try{aN(n)}catch(a){i=a}return function(l={},c){if(i)throw i;let h=!1;const p={};for(let m=0;m<r.length;m++){const y=r[m],w=n[y],T=l[y],x=w(T,c);if(typeof x>"u")throw c&&c.type,new Error(Xt(14));p[y]=x,h=h||x!==T}return h=h||r.length!==Object.keys(l).length,h?p:l}}function ed(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function uN(...t){return e=>(n,r)=>{const i=e(n,r);let a=()=>{throw new Error(Xt(15))};const l={getState:i.getState,dispatch:(h,...p)=>a(h,...p)},c=t.map(h=>h(l));return a=ed(...c)(i.dispatch),{...i,dispatch:a}}}function cN(t){return wv(t)&&"type"in t&&typeof t.type=="string"}var tI=Symbol.for("immer-nothing"),NE=Symbol.for("immer-draftable"),zn=Symbol.for("immer-state");function Er(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var ul=Object.getPrototypeOf;function Fo(t){return!!t&&!!t[zn]}function Mi(t){var e;return t?nI(t)||Array.isArray(t)||!!t[NE]||!!((e=t.constructor)!=null&&e[NE])||Kd(t)||Gd(t):!1}var hN=Object.prototype.constructor.toString();function nI(t){if(!t||typeof t!="object")return!1;const e=ul(t);if(e===null)return!0;const n=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return n===Object?!0:typeof n=="function"&&Function.toString.call(n)===hN}function td(t,e){qd(t)===0?Reflect.ownKeys(t).forEach(n=>{e(n,t[n],t)}):t.forEach((n,r)=>e(r,n,t))}function qd(t){const e=t[zn];return e?e.type_:Array.isArray(t)?1:Kd(t)?2:Gd(t)?3:0}function Jg(t,e){return qd(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function rI(t,e,n){const r=qd(t);r===2?t.set(e,n):r===3?t.add(n):t[e]=n}function fN(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}function Kd(t){return t instanceof Map}function Gd(t){return t instanceof Set}function Ao(t){return t.copy_||t.base_}function Zg(t,e){if(Kd(t))return new Map(t);if(Gd(t))return new Set(t);if(Array.isArray(t))return Array.prototype.slice.call(t);const n=nI(t);if(e===!0||e==="class_only"&&!n){const r=Object.getOwnPropertyDescriptors(t);delete r[zn];let i=Reflect.ownKeys(r);for(let a=0;a<i.length;a++){const l=i[a],c=r[l];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[l]={configurable:!0,writable:!0,enumerable:c.enumerable,value:t[l]})}return Object.create(ul(t),r)}else{const r=ul(t);if(r!==null&&n)return{...t};const i=Object.create(r);return Object.assign(i,t)}}function Ev(t,e=!1){return Qd(t)||Fo(t)||!Mi(t)||(qd(t)>1&&(t.set=t.add=t.clear=t.delete=dN),Object.freeze(t),e&&Object.entries(t).forEach(([n,r])=>Ev(r,!0))),t}function dN(){Er(2)}function Qd(t){return Object.isFrozen(t)}var pN={};function jo(t){const e=pN[t];return e||Er(0,t),e}var ic;function iI(){return ic}function mN(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ME(t,e){e&&(jo("Patches"),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function ey(t){ty(t),t.drafts_.forEach(gN),t.drafts_=null}function ty(t){t===ic&&(ic=t.parent_)}function LE(t){return ic=mN(ic,t)}function gN(t){const e=t[zn];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function OE(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];return t!==void 0&&t!==n?(n[zn].modified_&&(ey(e),Er(4)),Mi(t)&&(t=nd(e,t),e.parent_||rd(e,t)),e.patches_&&jo("Patches").generateReplacementPatches_(n[zn].base_,t,e.patches_,e.inversePatches_)):t=nd(e,n,[]),ey(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==tI?t:void 0}function nd(t,e,n){if(Qd(e))return e;const r=e[zn];if(!r)return td(e,(i,a)=>FE(t,r,e,i,a,n)),e;if(r.scope_!==t)return e;if(!r.modified_)return rd(t,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const i=r.copy_;let a=i,l=!1;r.type_===3&&(a=new Set(i),i.clear(),l=!0),td(a,(c,h)=>FE(t,r,i,c,h,n,l)),rd(t,i,!1),n&&t.patches_&&jo("Patches").generatePatches_(r,n,t.patches_,t.inversePatches_)}return r.copy_}function FE(t,e,n,r,i,a,l){if(Fo(i)){const c=a&&e&&e.type_!==3&&!Jg(e.assigned_,r)?a.concat(r):void 0,h=nd(t,i,c);if(rI(n,r,h),Fo(h))t.canAutoFreeze_=!1;else return}else l&&n.add(i);if(Mi(i)&&!Qd(i)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1)return;nd(t,i),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(n,r)&&rd(t,i)}}function rd(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Ev(e,n)}function yN(t,e){const n=Array.isArray(t),r={type_:n?1:0,scope_:e?e.scope_:iI(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=r,a=Tv;n&&(i=[r],a=sc);const{revoke:l,proxy:c}=Proxy.revocable(i,a);return r.draft_=c,r.revoke_=l,c}var Tv={get(t,e){if(e===zn)return t;const n=Ao(t);if(!Jg(n,e))return vN(t,n,e);const r=n[e];return t.finalized_||!Mi(r)?r:r===hg(t.base_,e)?(fg(t),t.copy_[e]=ry(r,t)):r},has(t,e){return e in Ao(t)},ownKeys(t){return Reflect.ownKeys(Ao(t))},set(t,e,n){const r=sI(Ao(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=hg(Ao(t),e),a=i==null?void 0:i[zn];if(a&&a.base_===n)return t.copy_[e]=n,t.assigned_[e]=!1,!0;if(fN(n,i)&&(n!==void 0||Jg(t.base_,e)))return!0;fg(t),ny(t)}return t.copy_[e]===n&&(n!==void 0||e in t.copy_)||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_[e]=!0),!0},deleteProperty(t,e){return hg(t.base_,e)!==void 0||e in t.base_?(t.assigned_[e]=!1,fg(t),ny(t)):delete t.assigned_[e],t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Ao(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{writable:!0,configurable:t.type_!==1||e!=="length",enumerable:r.enumerable,value:n[e]}},defineProperty(){Er(11)},getPrototypeOf(t){return ul(t.base_)},setPrototypeOf(){Er(12)}},sc={};td(Tv,(t,e)=>{sc[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});sc.deleteProperty=function(t,e){return sc.set.call(this,t,e,void 0)};sc.set=function(t,e,n){return Tv.set.call(this,t[0],e,n,t[0])};function hg(t,e){const n=t[zn];return(n?Ao(n):t)[e]}function vN(t,e,n){var i;const r=sI(e,n);return r?"value"in r?r.value:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function sI(t,e){if(!(e in t))return;let n=ul(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=ul(n)}}function ny(t){t.modified_||(t.modified_=!0,t.parent_&&ny(t.parent_))}function fg(t){t.copy_||(t.copy_=Zg(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var _N=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,n,r)=>{if(typeof e=="function"&&typeof n!="function"){const a=n;n=e;const l=this;return function(h=a,...p){return l.produce(h,m=>n.call(this,m,...p))}}typeof n!="function"&&Er(6),r!==void 0&&typeof r!="function"&&Er(7);let i;if(Mi(e)){const a=LE(this),l=ry(e,void 0);let c=!0;try{i=n(l),c=!1}finally{c?ey(a):ty(a)}return ME(a,r),OE(i,a)}else if(!e||typeof e!="object"){if(i=n(e),i===void 0&&(i=e),i===tI&&(i=void 0),this.autoFreeze_&&Ev(i,!0),r){const a=[],l=[];jo("Patches").generateReplacementPatches_(e,i,a,l),r(a,l)}return i}else Er(1,e)},this.produceWithPatches=(e,n)=>{if(typeof e=="function")return(l,...c)=>this.produceWithPatches(l,h=>e(h,...c));let r,i;return[this.produce(e,n,(l,c)=>{r=l,i=c}),r,i]},typeof(t==null?void 0:t.autoFreeze)=="boolean"&&this.setAutoFreeze(t.autoFreeze),typeof(t==null?void 0:t.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){Mi(t)||Er(8),Fo(t)&&(t=wN(t));const e=LE(this),n=ry(t,void 0);return n[zn].isManual_=!0,ty(e),n}finishDraft(t,e){const n=t&&t[zn];(!n||!n.isManual_)&&Er(9);const{scope_:r}=n;return ME(r,e),OE(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=jo("Patches").applyPatches_;return Fo(t)?r(t,e):this.produce(t,i=>r(i,e))}};function ry(t,e){const n=Kd(t)?jo("MapSet").proxyMap_(t,e):Gd(t)?jo("MapSet").proxySet_(t,e):yN(t,e);return(e?e.scope_:iI()).drafts_.push(n),n}function wN(t){return Fo(t)||Er(10,t),oI(t)}function oI(t){if(!Mi(t)||Qd(t))return t;const e=t[zn];let n;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=Zg(t,e.scope_.immer_.useStrictShallowCopy_)}else n=Zg(t,!0);return td(n,(r,i)=>{rI(n,r,oI(i))}),e&&(e.finalized_=!1),n}var Bn=new _N,aI=Bn.produce;Bn.produceWithPatches.bind(Bn);Bn.setAutoFreeze.bind(Bn);Bn.setUseStrictShallowCopy.bind(Bn);Bn.applyPatches.bind(Bn);Bn.createDraft.bind(Bn);Bn.finishDraft.bind(Bn);function lI(t){return({dispatch:n,getState:r})=>i=>a=>typeof a=="function"?a(n,r,t):i(a)}var EN=lI(),TN=lI,SN=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ed:ed.apply(null,arguments)};function jE(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(Di(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>cN(r)&&r.type===t,n}var uI=class Lu extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,Lu.prototype)}static get[Symbol.species](){return Lu}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new Lu(...e[0].concat(this)):new Lu(...e.concat(this))}};function $E(t){return Mi(t)?aI(t,()=>{}):t}function sf(t,e,n){return t.has(e)?t.get(e):t.set(e,n(e)).get(e)}function xN(t){return typeof t=="boolean"}var IN=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:a=!0}=e??{};let l=new uI;return n&&(xN(n)?l.push(EN):l.push(TN(n.extraArgument))),l},AN="RTK_autoBatch",UE=t=>e=>{setTimeout(e,t)},CN=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,a=!1,l=!1;const c=new Set,h=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:UE(10):t.type==="callback"?t.queueNotification:UE(t.timeout),p=()=>{l=!1,a&&(a=!1,c.forEach(m=>m()))};return Object.assign({},r,{subscribe(m){const y=()=>i&&m(),w=r.subscribe(y);return c.add(m),()=>{w(),c.delete(m)}},dispatch(m){var y;try{return i=!((y=m==null?void 0:m.meta)!=null&&y[AN]),a=!i,a&&(l||(l=!0,h(p))),r.dispatch(m)}finally{i=!0}}})},PN=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new uI(t);return r&&i.push(CN(typeof r=="object"?r:void 0)),i};function RN(t){const e=IN(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:l=void 0,enhancers:c=void 0}=t;let h;if(typeof n=="function")h=n;else if(wv(n))h=lN(n);else throw new Error(Di(1));let p;typeof r=="function"?p=r(e):p=e();let m=ed;i&&(m=SN({trace:!1,...typeof i=="object"&&i}));const y=uN(...p),w=PN(y);let T=typeof c=="function"?c(w):w();const x=m(...T);return eI(h,l,x)}function cI(t){const e={},n=[];let r;const i={addCase(a,l){const c=typeof a=="string"?a:a.type;if(!c)throw new Error(Di(28));if(c in e)throw new Error(Di(29));return e[c]=l,i},addMatcher(a,l){return n.push({matcher:a,reducer:l}),i},addDefaultCase(a){return r=a,i}};return t(i),[e,n,r]}function kN(t){return typeof t=="function"}function bN(t,e){let[n,r,i]=cI(e),a;if(kN(t))a=()=>$E(t());else{const c=$E(t);a=()=>c}function l(c=a(),h){let p=[n[h.type],...r.filter(({matcher:m})=>m(h)).map(({reducer:m})=>m)];return p.filter(m=>!!m).length===0&&(p=[i]),p.reduce((m,y)=>{if(y)if(Fo(m)){const T=y(m,h);return T===void 0?m:T}else{if(Mi(m))return aI(m,w=>y(w,h));{const w=y(m,h);if(w===void 0){if(m===null)return m;throw Error("A case reducer on a non-draftable value must not return undefined")}return w}}return m},c)}return l.getInitialState=a,l}var DN=Symbol.for("rtk-slice-createasyncthunk");function VN(t,e){return`${t}/${e}`}function NN({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[DN];return function(i){const{name:a,reducerPath:l=a}=i;if(!a)throw new Error(Di(11));const c=(typeof i.reducers=="function"?i.reducers(ON()):i.reducers)||{},h=Object.keys(c),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},m={addCase($,H){const X=typeof $=="string"?$:$.type;if(!X)throw new Error(Di(12));if(X in p.sliceCaseReducersByType)throw new Error(Di(13));return p.sliceCaseReducersByType[X]=H,m},addMatcher($,H){return p.sliceMatchers.push({matcher:$,reducer:H}),m},exposeAction($,H){return p.actionCreators[$]=H,m},exposeCaseReducer($,H){return p.sliceCaseReducersByName[$]=H,m}};h.forEach($=>{const H=c[$],X={reducerName:$,type:VN(a,$),createNotation:typeof i.reducers=="function"};jN(H)?UN(X,H,m,e):FN(X,H,m)});function y(){const[$={},H=[],X=void 0]=typeof i.extraReducers=="function"?cI(i.extraReducers):[i.extraReducers],C={...$,...p.sliceCaseReducersByType};return bN(i.initialState,I=>{for(let R in C)I.addCase(R,C[R]);for(let R of p.sliceMatchers)I.addMatcher(R.matcher,R.reducer);for(let R of H)I.addMatcher(R.matcher,R.reducer);X&&I.addDefaultCase(X)})}const w=$=>$,T=new Map,x=new WeakMap;let P;function k($,H){return P||(P=y()),P($,H)}function b(){return P||(P=y()),P.getInitialState()}function O($,H=!1){function X(I){let R=I[$];return typeof R>"u"&&H&&(R=sf(x,X,b)),R}function C(I=w){const R=sf(T,H,()=>new WeakMap);return sf(R,I,()=>{const D={};for(const[L,B]of Object.entries(i.selectors??{}))D[L]=MN(B,I,()=>sf(x,I,b),H);return D})}return{reducerPath:$,getSelectors:C,get selectors(){return C(X)},selectSlice:X}}const U={name:a,reducer:k,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:b,...O(l),injectInto($,{reducerPath:H,...X}={}){const C=H??l;return $.inject({reducerPath:C,reducer:k},X),{...U,...O(C,!0)}}};return U}}function MN(t,e,n,r){function i(a,...l){let c=e(a);return typeof c>"u"&&r&&(c=n()),t(c,...l)}return i.unwrapped=t,i}var LN=NN();function ON(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function FN({type:t,reducerName:e,createNotation:n},r,i){let a,l;if("reducer"in r){if(n&&!$N(r))throw new Error(Di(17));a=r.reducer,l=r.prepare}else a=r;i.addCase(t,a).exposeCaseReducer(e,a).exposeAction(e,l?jE(t,l):jE(t))}function jN(t){return t._reducerDefinitionType==="asyncThunk"}function $N(t){return t._reducerDefinitionType==="reducerWithPrepare"}function UN({type:t,reducerName:e},n,r,i){if(!i)throw new Error(Di(18));const{payloadCreator:a,fulfilled:l,pending:c,rejected:h,settled:p,options:m}=n,y=i(t,a,m);r.exposeAction(e,y),l&&r.addCase(y.fulfilled,l),c&&r.addCase(y.pending,c),h&&r.addCase(y.rejected,h),p&&r.addMatcher(y.settled,p),r.exposeCaseReducer(e,{fulfilled:l||of,pending:c||of,rejected:h||of,settled:p||of})}function of(){}function Di(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var kr=function(e){return"@@redux-saga/"+e},zN=kr("CANCEL_PROMISE"),hI=kr("CHANNEL_END"),fI=kr("IO"),zE=kr("MATCH"),dI=kr("MULTICAST"),pI=kr("SAGA_ACTION"),BN=kr("SELF_CANCELLATION"),WN=kr("TASK"),el=kr("TASK_CANCEL"),mI=kr("TERMINATE"),HN=kr("LOCATION");function id(){return id=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},id.apply(null,arguments)}function qN(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}var gI=function(e){return e==null},xf=function(e){return e!=null},Pn=function(e){return typeof e=="function"},Sv=function(e){return typeof e=="string"},Ks=Array.isArray,Yd=function(e){return e&&Pn(e.then)},xv=function(e){return e&&Pn(e.next)&&Pn(e.throw)},BE=function t(e){return e&&(Sv(e)||vI(e)||Pn(e)||Ks(e)&&e.every(t))},Iv=function(e){return e&&Pn(e.take)&&Pn(e.close)},yI=function(e){return Pn(e)&&e.hasOwnProperty("toString")},vI=function(e){return!!e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype},KN=function(e){return Iv(e)&&e[dI]},GN=function(e){return function(){return e}},QN=GN(!0),gn=function(){},_I=function(e){return e},Av=function(e,n){id(e,n),Object.getOwnPropertySymbols&&Object.getOwnPropertySymbols(n).forEach(function(r){e[r]=n[r]})},YN=function(e,n){var r;return(r=[]).concat.apply(r,n.map(e))};function Xd(t,e){var n=t.indexOf(e);n>=0&&t.splice(n,1)}function XN(t){var e=!1;return function(){e||(e=!0,t())}}var JN=function(e){throw e},ZN=function(e){return{value:e,done:!0}};function iy(t,e,n){e===void 0&&(e=JN),n===void 0&&(n="iterator");var r={meta:{name:n},next:t,throw:e,return:ZN,isSagaIterator:!0};return typeof Symbol<"u"&&(r[Symbol.iterator]=function(){return r}),r}function e2(t,e){var n=e.sagaStack;console.error(t),console.error(n)}var wI=function(e){return Array.apply(null,new Array(e))},t2=function(e){return function(n){return e(Object.defineProperty(n,pI,{value:!0}))}},EI=function(e){return e===mI},TI=function(e){return e===el},SI=function(e){return EI(e)||TI(e)};function xI(t,e){var n=Object.keys(t),r=n.length,i=0,a,l=Ks(t)?wI(r):{},c={};function h(){i===r&&(a=!0,e(l))}return n.forEach(function(p){var m=function(w,T){a||(T||SI(w)?(e.cancel(),e(w,T)):(l[p]=w,i++,h()))};m.cancel=gn,c[p]=m}),e.cancel=function(){a||(a=!0,n.forEach(function(p){return c[p].cancel()}))},c}function Cv(t){return{name:t.name||"anonymous",location:II(t)}}function II(t){return t[HN]}function n2(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}var r2="Channel's Buffer overflow!",i2=1,s2=3,AI=4;function o2(t,e){t===void 0&&(t=10);var n=new Array(t),r=0,i=0,a=0,l=function(m){n[i]=m,i=(i+1)%t,r++},c=function(){if(r!=0){var m=n[a];return n[a]=null,r--,a=(a+1)%t,m}},h=function(){for(var m=[];r;)m.push(c());return m};return{isEmpty:function(){return r==0},put:function(m){if(r<t)l(m);else{var y;switch(e){case i2:throw new Error(r2);case s2:n[i]=m,i=(i+1)%t,a=i;break;case AI:y=2*t,n=h(),r=n.length,i=n.length,a=0,n.length=y,t=y,l(m);break}}},take:c,flush:h}}var a2=function(e){return o2(e,AI)},If="TAKE",CI="PUT",l2="ALL",u2="RACE",c2="CALL",h2="CPS",PI="FORK",f2="JOIN",d2="CANCEL",RI="SELECT",p2="ACTION_CHANNEL",m2="CANCELLED",g2="FLUSH",y2="GET_CONTEXT",v2="SET_CONTEXT",tl=function(e,n){var r;return r={},r[fI]=!0,r.combinator=!1,r.type=e,r.payload=n,r};function _2(t,e){if(t===void 0&&(t="*"),BE(t))return xf(e)&&console.warn("take(pattern) takes one argument but two were provided. Consider passing an array for listening to several action types"),tl(If,{pattern:t});if(KN(t)&&xf(e)&&BE(e))return tl(If,{channel:t,pattern:e});if(Iv(t))return xf(e)&&console.warn("take(channel) takes one argument but two were provided. Second argument is ignored."),tl(If,{channel:t})}function kI(t,e){return gI(e)&&(e=t,t=void 0),tl(CI,{channel:t,action:e})}function w2(t,e){var n=null,r;return Pn(t)?r=t:(Ks(t)?(n=t[0],r=t[1]):(n=t.context,r=t.fn),n&&Sv(r)&&Pn(n[r])&&(r=n[r])),{context:n,fn:r,args:e}}function bI(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return tl(PI,w2(t,n))}function DI(t){t===void 0&&(t=_I);for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return tl(RI,{selector:t,args:n})}function E2(){var t={};return t.promise=new Promise(function(e,n){t.resolve=e,t.reject=n}),t}var VI=[],Jd=0;function T2(t){try{Pv(),t()}finally{LI()}}function NI(t){VI.push(t),Jd||(Pv(),OI())}function MI(t){try{return Pv(),t()}finally{OI()}}function Pv(){Jd++}function LI(){Jd--}function OI(){LI();for(var t;!Jd&&(t=VI.shift())!==void 0;)T2(t)}var S2=function(e){return function(n){return e.some(function(r){return Rv(r)(n)})}},x2=function(e){return function(n){return e(n)}},WE=function(e){return function(n){return n.type===String(e)}},I2=function(e){return function(n){return n.type===e}},FI=function(){return QN};function Rv(t){var e=t==="*"?FI:Sv(t)?WE:Ks(t)?S2:yI(t)?WE:Pn(t)?x2:vI(t)?I2:null;if(e===null)throw new Error("invalid pattern: "+t);return e(t)}var Wu={type:hI},kv=function(e){return e&&e.type===hI};function A2(t){t===void 0&&(t=a2());var e=!1,n=[];function r(c){if(!e){if(n.length===0)return t.put(c);var h=n.shift();h(c)}}function i(c){e&&t.isEmpty()?c(Wu):t.isEmpty()?(n.push(c),c.cancel=function(){Xd(n,c)}):c(t.take())}function a(c){if(e&&t.isEmpty()){c(Wu);return}c(t.flush())}function l(){if(!e){e=!0;var c=n;n=[];for(var h=0,p=c.length;h<p;h++){var m=c[h];m(Wu)}}}return{take:i,put:r,flush:a,close:l}}function C2(){var t,e=!1,n=[],r=n,i=function(){r===n&&(r=n.slice())},a=function(){e=!0;var c=n=r;r=[],c.forEach(function(h){h(Wu)})};return t={},t[dI]=!0,t.put=function(c){if(!e){if(kv(c)){a();return}for(var h=n=r,p=0,m=h.length;p<m;p++){var y=h[p];y[zE](c)&&(y.cancel(),y(c))}}},t.take=function(c,h){if(h===void 0&&(h=FI),e){c(Wu);return}c[zE]=h,i(),r.push(c),c.cancel=XN(function(){i(),Xd(r,c)})},t.close=a,t}function jI(){var t=C2(),e=t.put;return t.put=function(n){if(n[pI]){e(n);return}NI(function(){e(n)})},t}var Ro=0,Ci=1,Af=2,$I=3;function bv(t,e){var n=t[zN];Pn(n)&&(e.cancel=n),t.then(e,function(r){e(r,!0)})}var Sc=0,UI=function(){return++Sc},Yt;function P2(t,e){return t.isSagaIterator?{name:t.meta.name}:Cv(e)}function R2(t){var e=t.context,n=t.fn,r=t.args;try{var i=n.apply(e,r);if(xv(i))return i;var a=!1,l=function(h){return a?{value:h,done:!0}:(a=!0,{value:i,done:!Yd(i)})};return iy(l)}catch(c){return iy(function(){throw c})}}function k2(t,e,n){var r=e.channel,i=e.action,a=e.resolve;NI(function(){var l;try{l=(r?r.put:t.dispatch)(i)}catch(c){n(c,!0);return}a&&Yd(l)?bv(l,n):n(l)})}function b2(t,e,n){var r=e.channel,i=r===void 0?t.channel:r,a=e.pattern,l=e.maybe,c=function(p){if(p instanceof Error){n(p,!0);return}if(kv(p)&&!l){n(mI);return}n(p)};try{i.take(c,xf(a)?Rv(a):null)}catch(h){n(h,!0);return}n.cancel=c.cancel}function D2(t,e,n,r){var i=e.context,a=e.fn,l=e.args,c=r.task;try{var h=a.apply(i,l);if(Yd(h)){bv(h,n);return}if(xv(h)){Zd(t,h,c.context,Sc,Cv(a),!1,n);return}n(h)}catch(p){n(p,!0)}}function V2(t,e,n){var r=e.context,i=e.fn,a=e.args;try{var l=function(h,p){gI(h)?n(p):n(h,!0)};i.apply(r,a.concat(l)),l.cancel&&(n.cancel=l.cancel)}catch(c){n(c,!0)}}function N2(t,e,n,r){var i=e.context,a=e.fn,l=e.args,c=e.detached,h=r.task,p=R2({context:i,fn:a,args:l}),m=P2(p,a);MI(function(){var y=Zd(t,p,h.context,Sc,m,c,void 0);c?n(y):y.isRunning()?(h.queue.addTask(y),n(y)):y.isAborted()?h.queue.abort(y.error()):n(y)})}function M2(t,e,n,r){var i=r.task,a=function(h,p){if(h.isRunning()){var m={task:i,cb:p};p.cancel=function(){h.isRunning()&&Xd(h.joiners,m)},h.joiners.push(m)}else h.isAborted()?p(h.error(),!0):p(h.result())};if(Ks(e)){if(e.length===0){n([]);return}var l=xI(e,n);e.forEach(function(c,h){a(c,l[h])})}else a(e,n)}function dg(t){t.isRunning()&&t.cancel()}function L2(t,e,n,r){var i=r.task;e===BN?dg(i):Ks(e)?e.forEach(dg):dg(e),n()}function O2(t,e,n,r){var i=r.digestEffect,a=Sc,l=Object.keys(e);if(l.length===0){n(Ks(e)?[]:{});return}var c=xI(e,n);l.forEach(function(h){i(e[h],a,c[h],h)})}function F2(t,e,n,r){var i=r.digestEffect,a=Sc,l=Object.keys(e),c=Ks(e)?wI(l.length):{},h={},p=!1;l.forEach(function(m){var y=function(T,x){p||(x||SI(T)?(n.cancel(),n(T,x)):(n.cancel(),p=!0,c[m]=T,n(c)))};y.cancel=gn,h[m]=y}),n.cancel=function(){p||(p=!0,l.forEach(function(m){return h[m].cancel()}))},l.forEach(function(m){p||i(e[m],a,h[m],m)})}function j2(t,e,n){var r=e.selector,i=e.args;try{var a=r.apply(void 0,[t.getState()].concat(i));n(a)}catch(l){n(l,!0)}}function $2(t,e,n){var r=e.pattern,i=e.buffer,a=A2(i),l=Rv(r),c=function p(m){kv(m)||t.channel.take(p,l),a.put(m)},h=a.close;a.close=function(){c.cancel(),h()},t.channel.take(c,l),n(a)}function U2(t,e,n,r){var i=r.task;n(i.isCancelled())}function z2(t,e,n){e.flush(n)}function B2(t,e,n,r){var i=r.task;n(i.context[e])}function W2(t,e,n,r){var i=r.task;Av(i.context,e),n()}var H2=(Yt={},Yt[If]=b2,Yt[CI]=k2,Yt[l2]=O2,Yt[u2]=F2,Yt[c2]=D2,Yt[h2]=V2,Yt[PI]=N2,Yt[f2]=M2,Yt[d2]=L2,Yt[RI]=j2,Yt[p2]=$2,Yt[m2]=U2,Yt[g2]=z2,Yt[y2]=B2,Yt[v2]=W2,Yt);function q2(t,e,n){var r=[],i,a=!1;h(t);var l=function(){return r};function c(m){e(),p(),n(m,!0)}function h(m){r.push(m),m.cont=function(y,w){a||(Xd(r,m),m.cont=gn,w?c(y):(m===t&&(i=y),r.length||(a=!0,n(i))))}}function p(){a||(a=!0,r.forEach(function(m){m.cont=gn,m.cancel()}),r=[])}return{addTask:h,cancelAll:p,abort:c,getTasks:l}}function zI(t,e){return t+"?"+e}function K2(t){var e=II(t);if(e){var n=e.code,r=e.fileName,i=e.lineNumber,a=n+"  "+zI(r,i);return a}return""}function HE(t){var e=t.name,n=t.location;return n?e+"  "+zI(n.fileName,n.lineNumber):e}function G2(t){var e=YN(function(n){return n.cancelledTasks},t);return e.length?["Tasks cancelled due to error:"].concat(e).join(`
`):""}var Dv=null,Hu=[],Q2=function(e){e.crashedEffect=Dv,Hu.push(e)},BI=function(){Dv=null,Hu.length=0},Y2=function(e){Dv=e},X2=function(){var e=Hu[0],n=Hu.slice(1),r=e.crashedEffect?K2(e.crashedEffect):null,i="The above error occurred in task "+HE(e.meta)+(r?` 
 when executing effect `+r:"");return[i].concat(n.map(function(a){return"    created by "+HE(a.meta)}),[G2(Hu)]).join(`
`)};function J2(t,e,n,r,i,a,l){var c;l===void 0&&(l=gn);var h=Ro,p,m,y=null,w=[],T=Object.create(n),x=q2(e,function(){w.push.apply(w,x.getTasks().map(function(H){return H.meta.name}))},k);function P(){h===Ro&&(h=Ci,x.cancelAll(),k(el,!1))}function k($,H){if(!H)$===el?h=Ci:h!==Ci&&(h=$I),p=$,y&&y.resolve($);else{if(h=Af,Q2({meta:i,cancelledTasks:w}),U.isRoot){var X=X2();BI(),t.onError($,{sagaStack:X})}m=$,y&&y.reject($)}U.cont($,H),U.joiners.forEach(function(C){C.cb($,H)}),U.joiners=null}function b($){Av(T,$)}function O(){return y||(y=E2(),h===Af?y.reject(m):h!==Ro&&y.resolve(p)),y.promise}var U=(c={},c[WN]=!0,c.id=r,c.meta=i,c.isRoot=a,c.context=T,c.joiners=[],c.queue=x,c.cancel=P,c.cont=l,c.end=k,c.setContext=b,c.toPromise=O,c.isRunning=function(){return h===Ro},c.isCancelled=function(){return h===Ci||h===Ro&&e.status===Ci},c.isAborted=function(){return h===Af},c.result=function(){return p},c.error=function(){return m},c);return U}function Zd(t,e,n,r,i,a,l){var c=t.finalizeRunEffect(T);w.cancel=gn;var h={meta:i,cancel:y,status:Ro},p=J2(t,h,n,r,i,a,l),m={task:p,digestEffect:x};function y(){h.status===Ro&&(h.status=Ci,w(el))}return l&&(l.cancel=p.cancel),w(),p;function w(P,k){try{var b;k?(b=e.throw(P),BI()):TI(P)?(h.status=Ci,w.cancel(),b=Pn(e.return)?e.return(el):{done:!0,value:el}):EI(P)?b=Pn(e.return)?e.return():{done:!0}:b=e.next(P),b.done?(h.status!==Ci&&(h.status=$I),h.cont(b.value)):x(b.value,r,w)}catch(O){if(h.status===Ci)throw O;h.status=Af,h.cont(O,!0)}}function T(P,k,b){if(Yd(P))bv(P,b);else if(xv(P))Zd(t,P,p.context,k,i,!1,b);else if(P&&P[fI]){var O=H2[P.type];O(t,P.payload,b,m)}else b(P)}function x(P,k,b,O){O===void 0&&(O="");var U=UI();t.sagaMonitor&&t.sagaMonitor.effectTriggered({effectId:U,parentEffectId:k,label:O,effect:P});var $;function H(X,C){$||($=!0,b.cancel=gn,t.sagaMonitor&&(C?t.sagaMonitor.effectRejected(U,X):t.sagaMonitor.effectResolved(U,X)),C&&Y2(P),b(X,C))}H.cancel=gn,b.cancel=function(){$||($=!0,H.cancel(),H.cancel=gn,t.sagaMonitor&&t.sagaMonitor.effectCancelled(U))},c(P,U,H)}}function Z2(t,e){for(var n=t.channel,r=n===void 0?jI():n,i=t.dispatch,a=t.getState,l=t.context,c=l===void 0?{}:l,h=t.sagaMonitor,p=t.effectMiddlewares,m=t.onError,y=m===void 0?e2:m,w=arguments.length,T=new Array(w>2?w-2:0),x=2;x<w;x++)T[x-2]=arguments[x];var P=e.apply(void 0,T),k=UI();h&&(h.rootSagaStarted=h.rootSagaStarted||gn,h.effectTriggered=h.effectTriggered||gn,h.effectResolved=h.effectResolved||gn,h.effectRejected=h.effectRejected||gn,h.effectCancelled=h.effectCancelled||gn,h.actionDispatched=h.actionDispatched||gn,h.rootSagaStarted({effectId:k,saga:e,args:T}));var b;if(p){var O=n2.apply(void 0,p);b=function(H){return function(X,C,I){var R=function(L){return H(L,C,I)};return O(R)(X)}}}else b=_I;var U={channel:r,dispatch:t2(i),getState:a,sagaMonitor:h,onError:y,finalizeRunEffect:b};return MI(function(){var $=Zd(U,P,c,k,Cv(e),!0,void 0);return h&&h.effectResolved(k,$),$})}function eM(t){var e={},n=e.context,r=n===void 0?{}:n,i=e.channel,a=i===void 0?jI():i,l=e.sagaMonitor,c=qN(e,["context","channel","sagaMonitor"]),h;function p(m){var y=m.getState,w=m.dispatch;return h=Z2.bind(null,id({},c,{context:r,channel:a,dispatch:w,getState:y,sagaMonitor:l})),function(T){return function(x){l&&l.actionDispatched&&l.actionDispatched(x);var P=T(x);return a.put(x),P}}}return p.run=function(){return h.apply(void 0,arguments)},p.setContext=function(m){Av(r,m)},p}const tM="abcdefghijklmnopqrstuvwxyz".split(""),nM="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),WI="kiddoo_app_state",rM=()=>{try{const t=localStorage.getItem(WI);return t===null?void 0:JSON.parse(t)}catch{return}},vr=t=>{try{const e=JSON.stringify(t);localStorage.setItem(WI,e)}catch{}},dt={score:0,streak:0},oe=rM();var p1,m1,g1,y1,v1,_1,w1,E1,T1,S1,x1,I1,A1,C1,P1,R1,k1,b1,D1,V1,N1,M1,L1,O1;const iM={selectedAlphabet:"",bigAlphabets:nM,smallAlphabets:tM,alphabets:[],loading:!1,userStats:(oe==null?void 0:oe.userStats)||{score:0,streak:0,lastPlayed:null},gameStats:{math:{...dt,...(p1=oe==null?void 0:oe.gameStats)==null?void 0:p1.math},spelling:{...dt,...(m1=oe==null?void 0:oe.gameStats)==null?void 0:m1.spelling},missing_letters:{...dt,...(g1=oe==null?void 0:oe.gameStats)==null?void 0:g1.missing_letters},comparison:{...dt,...(y1=oe==null?void 0:oe.gameStats)==null?void 0:y1.comparison},sorting:{...dt,...(v1=oe==null?void 0:oe.gameStats)==null?void 0:v1.sorting},alphabet:{...dt,...(_1=oe==null?void 0:oe.gameStats)==null?void 0:_1.alphabet},sight_words:{...dt,...(w1=oe==null?void 0:oe.gameStats)==null?void 0:w1.sight_words},sudoku:{...dt,...(E1=oe==null?void 0:oe.gameStats)==null?void 0:E1.sudoku},alphabet_hindi:{...dt,...(T1=oe==null?void 0:oe.gameStats)==null?void 0:T1.alphabet_hindi},alphabet_telugu:{...dt,...(S1=oe==null?void 0:oe.gameStats)==null?void 0:S1.alphabet_telugu},weeks_english:{...dt,...(x1=oe==null?void 0:oe.gameStats)==null?void 0:x1.weeks_english},weeks_telugu:{...dt,...(I1=oe==null?void 0:oe.gameStats)==null?void 0:I1.weeks_telugu},months_english:{...dt,...(A1=oe==null?void 0:oe.gameStats)==null?void 0:A1.months_english},shapes:{...dt,...(C1=oe==null?void 0:oe.gameStats)==null?void 0:C1.shapes},body_parts:{...dt,...(P1=oe==null?void 0:oe.gameStats)==null?void 0:P1.body_parts},sense_organs:{...dt,...(R1=oe==null?void 0:oe.gameStats)==null?void 0:R1.sense_organs},weeks_hindi:{...dt,...(k1=oe==null?void 0:oe.gameStats)==null?void 0:k1.weeks_hindi},numbers_english_spelling:{...dt,...(b1=oe==null?void 0:oe.gameStats)==null?void 0:b1.numbers_english_spelling},numbers_hindi:{...dt,...(D1=oe==null?void 0:oe.gameStats)==null?void 0:D1.numbers_hindi},numbers_telugu:{...dt,...(V1=oe==null?void 0:oe.gameStats)==null?void 0:V1.numbers_telugu},months_telugu:{...dt,...(N1=oe==null?void 0:oe.gameStats)==null?void 0:N1.months_telugu},months_hindi:{...dt,...(M1=oe==null?void 0:oe.gameStats)==null?void 0:M1.months_hindi},place_values:{...dt,...(L1=oe==null?void 0:oe.gameStats)==null?void 0:L1.place_values},master_test:{...dt,...(O1=oe==null?void 0:oe.gameStats)==null?void 0:O1.master_test}},isMobileMenuOpen:!1,isMuted:(oe==null?void 0:oe.isMuted)??!1,currentMode:(oe==null?void 0:oe.currentMode)??null,theme:(oe==null?void 0:oe.theme)||"light",fontSizeLevel:(oe==null?void 0:oe.fontSizeLevel)||"large",userName:(oe==null?void 0:oe.userName)||"",user:null},HI=LN({name:"alphabet",initialState:iM,reducers:{getAlphabets:t=>{t.loading=!0},setAlphabets:(t,e)=>{t.loading=!1,t.alphabets=e.payload},getSelectedAlphabet:t=>{t.loading=!0},setSelectedAlphabet:(t,e)=>{t.selectedAlphabet=e.payload,t.loading=!1},incrementScore:(t,e)=>{const n=e==null?void 0:e.payload;t.userStats.score+=10,t.userStats.streak+=1,t.userStats.lastPlayed=new Date().toISOString(),n&&t.gameStats&&t.gameStats[n]&&(t.gameStats[n].score+=10,t.gameStats[n].streak+=1),vr(t)},resetStreak:(t,e)=>{const n=e==null?void 0:e.payload;t.userStats.streak=0,n&&t.gameStats&&t.gameStats[n]&&(t.gameStats[n].streak=0),vr(t)},toggleMobileMenu:t=>{t.isMobileMenuOpen=!t.isMobileMenuOpen},closeMobileMenu:t=>{t.isMobileMenuOpen=!1},toggleMute:t=>{t.isMuted=!t.isMuted,vr(t)},toggleTheme:t=>{t.theme=t.theme==="light"?"dark":"light",vr(t)},setFontSizeLevel:(t,e)=>{t.fontSizeLevel=e.payload,vr(t)},setMode:(t,e)=>{t.currentMode=e.payload,vr(t)},setUserName:(t,e)=>{t.userName=e.payload,vr(t)},setUser:(t,e)=>{var n;t.user=e.payload,(n=e.payload)!=null&&n.displayName&&(t.userName=e.payload.displayName),vr(t)},logout:t=>{t.user=null,t.userName="",vr(t)},resetAll:t=>{t.userStats={score:0,streak:0,lastPlayed:null},t.gameStats={math:{score:0,streak:0},spelling:{score:0,streak:0},missing_letters:{score:0,streak:0},comparison:{score:0,streak:0},sorting:{score:0,streak:0},alphabet:{score:0,streak:0},sight_words:{score:0,streak:0},sudoku:{score:0,streak:0},alphabet_hindi:{score:0,streak:0},alphabet_telugu:{score:0,streak:0},weeks_english:{score:0,streak:0},weeks_telugu:{score:0,streak:0},months_english:{score:0,streak:0},shapes:{score:0,streak:0},body_parts:{score:0,streak:0},sense_organs:{score:0,streak:0},weeks_hindi:{score:0,streak:0},numbers_english_spelling:{score:0,streak:0},numbers_hindi:{score:0,streak:0},numbers_telugu:{score:0,streak:0},months_telugu:{score:0,streak:0},months_hindi:{score:0,streak:0},place_values:{score:0,streak:0},master_test:{score:0,streak:0}},vr(t)},setStreak:(t,e)=>{const{gameId:n,streak:r}=e.payload;t.gameStats&&t.gameStats[n]&&(t.gameStats[n].streak=r),vr(t)}}}),{getAlphabets:sM,setAlphabets:oM,getSelectedAlphabet:aM,setSelectedAlphabet:lM,incrementScore:f7,resetStreak:d7,toggleMobileMenu:uM,closeMobileMenu:p7,toggleMute:cM,toggleTheme:hM,setFontSizeLevel:pg,setMode:m7,setUserName:fM,setUser:qE,logout:dM,resetAll:g7,setStreak:y7}=HI.actions,pM=HI.reducer;var KE=function(e){return{done:!0,value:e}},mg={};function mM(t){return Iv(t)?"channel":yI(t)?String(t):Pn(t)?t.name:String(t)}function gM(t,e,n){var r,i,a,l=e;function c(h,p){if(l===mg)return KE(h);if(p&&!i)throw l=mg,p;r&&r(h);var m=p?t[i](p):t[l]();return l=m.nextState,a=m.effect,r=m.stateUpdater,i=m.errorState,l===mg?KE(h):a}return iy(c,function(h){return c(null,h)},n)}function yM(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var a={done:!1,value:_2(t)},l=function(m){return{done:!1,value:bI.apply(void 0,[e].concat(r,[m]))}},c,h=function(m){return c=m};return gM({q1:function(){return{nextState:"q2",effect:a,stateUpdater:h}},q2:function(){return{nextState:"q1",effect:l(c)}}},"q1","takeEvery("+mM(t)+", "+e.name+")")}function GE(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return bI.apply(void 0,[yM,t,e].concat(r))}function*vM(){const t=yield DI(e=>e.alphabet.bigAlphabets.concat(e.alphabet.smallAlphabets));yield kI(oM(t))}function*_M(){const t=yield DI(r=>r.alphabet.bigAlphabets.concat(r.alphabet.smallAlphabets)),e=Math.floor(Math.random()*t.length),n=t[e];yield kI(lM(n))}function*wM(){yield GE(sM.type,vM),yield GE(aM.type,_M)}const qI=eM(),EM=RN({reducer:{alphabet:pM},middleware:t=>t({thunk:!1}).concat(qI)});qI.run(wM);var Wt=function(){return Wt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Wt.apply(this,arguments)};function cl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,a;r<i;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return t.concat(a||Array.prototype.slice.call(e))}var ut="-ms-",qu="-moz-",Qe="-webkit-",KI="comm",ep="rule",Vv="decl",TM="@import",GI="@keyframes",SM="@layer",QI=Math.abs,Nv=String.fromCharCode,sy=Object.assign;function xM(t,e){return Bt(t,0)^45?(((e<<2^Bt(t,0))<<2^Bt(t,1))<<2^Bt(t,2))<<2^Bt(t,3):0}function YI(t){return t.trim()}function Ai(t,e){return(t=e.exec(t))?t[0]:t}function Ne(t,e,n){return t.replace(e,n)}function Cf(t,e,n){return t.indexOf(e,n)}function Bt(t,e){return t.charCodeAt(e)|0}function hl(t,e,n){return t.slice(e,n)}function Xr(t){return t.length}function XI(t){return t.length}function Ou(t,e){return e.push(t),t}function IM(t,e){return t.map(e).join("")}function QE(t,e){return t.filter(function(n){return!Ai(n,e)})}var tp=1,fl=1,JI=0,ir=0,kt=0,Al="";function np(t,e,n,r,i,a,l,c){return{value:t,root:e,parent:n,type:r,props:i,children:a,line:tp,column:fl,length:l,return:"",siblings:c}}function _s(t,e){return sy(np("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function za(t){for(;t.root;)t=_s(t.root,{children:[t]});Ou(t,t.siblings)}function AM(){return kt}function CM(){return kt=ir>0?Bt(Al,--ir):0,fl--,kt===10&&(fl=1,tp--),kt}function xr(){return kt=ir<JI?Bt(Al,ir++):0,fl++,kt===10&&(fl=1,tp++),kt}function Mo(){return Bt(Al,ir)}function Pf(){return ir}function rp(t,e){return hl(Al,t,e)}function oy(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function PM(t){return tp=fl=1,JI=Xr(Al=t),ir=0,[]}function RM(t){return Al="",t}function gg(t){return YI(rp(ir-1,ay(t===91?t+2:t===40?t+1:t)))}function kM(t){for(;(kt=Mo())&&kt<33;)xr();return oy(t)>2||oy(kt)>3?"":" "}function bM(t,e){for(;--e&&xr()&&!(kt<48||kt>102||kt>57&&kt<65||kt>70&&kt<97););return rp(t,Pf()+(e<6&&Mo()==32&&xr()==32))}function ay(t){for(;xr();)switch(kt){case t:return ir;case 34:case 39:t!==34&&t!==39&&ay(kt);break;case 40:t===41&&ay(t);break;case 92:xr();break}return ir}function DM(t,e){for(;xr()&&t+kt!==57;)if(t+kt===84&&Mo()===47)break;return"/*"+rp(e,ir-1)+"*"+Nv(t===47?t:xr())}function VM(t){for(;!oy(Mo());)xr();return rp(t,ir)}function NM(t){return RM(Rf("",null,null,null,[""],t=PM(t),0,[0],t))}function Rf(t,e,n,r,i,a,l,c,h){for(var p=0,m=0,y=l,w=0,T=0,x=0,P=1,k=1,b=1,O=0,U="",$=i,H=a,X=r,C=U;k;)switch(x=O,O=xr()){case 40:if(x!=108&&Bt(C,y-1)==58){Cf(C+=Ne(gg(O),"&","&\f"),"&\f",QI(p?c[p-1]:0))!=-1&&(b=-1);break}case 34:case 39:case 91:C+=gg(O);break;case 9:case 10:case 13:case 32:C+=kM(x);break;case 92:C+=bM(Pf()-1,7);continue;case 47:switch(Mo()){case 42:case 47:Ou(MM(DM(xr(),Pf()),e,n,h),h);break;default:C+="/"}break;case 123*P:c[p++]=Xr(C)*b;case 125*P:case 59:case 0:switch(O){case 0:case 125:k=0;case 59+m:b==-1&&(C=Ne(C,/\f/g,"")),T>0&&Xr(C)-y&&Ou(T>32?XE(C+";",r,n,y-1,h):XE(Ne(C," ","")+";",r,n,y-2,h),h);break;case 59:C+=";";default:if(Ou(X=YE(C,e,n,p,m,i,c,U,$=[],H=[],y,a),a),O===123)if(m===0)Rf(C,e,X,X,$,a,y,c,H);else switch(w===99&&Bt(C,3)===110?100:w){case 100:case 108:case 109:case 115:Rf(t,X,X,r&&Ou(YE(t,X,X,0,0,i,c,U,i,$=[],y,H),H),i,H,y,c,r?$:H);break;default:Rf(C,X,X,X,[""],H,0,c,H)}}p=m=T=0,P=b=1,U=C="",y=l;break;case 58:y=1+Xr(C),T=x;default:if(P<1){if(O==123)--P;else if(O==125&&P++==0&&CM()==125)continue}switch(C+=Nv(O),O*P){case 38:b=m>0?1:(C+="\f",-1);break;case 44:c[p++]=(Xr(C)-1)*b,b=1;break;case 64:Mo()===45&&(C+=gg(xr())),w=Mo(),m=y=Xr(U=C+=VM(Pf())),O++;break;case 45:x===45&&Xr(C)==2&&(P=0)}}return a}function YE(t,e,n,r,i,a,l,c,h,p,m,y){for(var w=i-1,T=i===0?a:[""],x=XI(T),P=0,k=0,b=0;P<r;++P)for(var O=0,U=hl(t,w+1,w=QI(k=l[P])),$=t;O<x;++O)($=YI(k>0?T[O]+" "+U:Ne(U,/&\f/g,T[O])))&&(h[b++]=$);return np(t,e,n,i===0?ep:c,h,p,m,y)}function MM(t,e,n,r){return np(t,e,n,KI,Nv(AM()),hl(t,2,-2),0,r)}function XE(t,e,n,r,i){return np(t,e,n,Vv,hl(t,0,r),hl(t,r+1,-1),r,i)}function ZI(t,e,n){switch(xM(t,e)){case 5103:return Qe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Qe+t+t;case 4789:return qu+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Qe+t+qu+t+ut+t+t;case 5936:switch(Bt(t,e+11)){case 114:return Qe+t+ut+Ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Qe+t+ut+Ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Qe+t+ut+Ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Qe+t+ut+t+t;case 6165:return Qe+t+ut+"flex-"+t+t;case 5187:return Qe+t+Ne(t,/(\w+).+(:[^]+)/,Qe+"box-$1$2"+ut+"flex-$1$2")+t;case 5443:return Qe+t+ut+"flex-item-"+Ne(t,/flex-|-self/g,"")+(Ai(t,/flex-|baseline/)?"":ut+"grid-row-"+Ne(t,/flex-|-self/g,""))+t;case 4675:return Qe+t+ut+"flex-line-pack"+Ne(t,/align-content|flex-|-self/g,"")+t;case 5548:return Qe+t+ut+Ne(t,"shrink","negative")+t;case 5292:return Qe+t+ut+Ne(t,"basis","preferred-size")+t;case 6060:return Qe+"box-"+Ne(t,"-grow","")+Qe+t+ut+Ne(t,"grow","positive")+t;case 4554:return Qe+Ne(t,/([^-])(transform)/g,"$1"+Qe+"$2")+t;case 6187:return Ne(Ne(Ne(t,/(zoom-|grab)/,Qe+"$1"),/(image-set)/,Qe+"$1"),t,"")+t;case 5495:case 3959:return Ne(t,/(image-set\([^]*)/,Qe+"$1$`$1");case 4968:return Ne(Ne(t,/(.+:)(flex-)?(.*)/,Qe+"box-pack:$3"+ut+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Qe+t+t;case 4200:if(!Ai(t,/flex-|baseline/))return ut+"grid-column-align"+hl(t,e)+t;break;case 2592:case 3360:return ut+Ne(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Ai(r.props,/grid-\w+-end/)})?~Cf(t+(n=n[e].value),"span",0)?t:ut+Ne(t,"-start","")+t+ut+"grid-row-span:"+(~Cf(n,"span",0)?Ai(n,/\d+/):+Ai(n,/\d+/)-+Ai(t,/\d+/))+";":ut+Ne(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Ai(r.props,/grid-\w+-start/)})?t:ut+Ne(Ne(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Ne(t,/(.+)-inline(.+)/,Qe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Xr(t)-1-e>6)switch(Bt(t,e+1)){case 109:if(Bt(t,e+4)!==45)break;case 102:return Ne(t,/(.+:)(.+)-([^]+)/,"$1"+Qe+"$2-$3$1"+qu+(Bt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Cf(t,"stretch",0)?ZI(Ne(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Ne(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,a,l,c,h,p){return ut+i+":"+a+p+(l?ut+i+"-span:"+(c?h:+h-+a)+p:"")+t});case 4949:if(Bt(t,e+6)===121)return Ne(t,":",":"+Qe)+t;break;case 6444:switch(Bt(t,Bt(t,14)===45?18:11)){case 120:return Ne(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Qe+(Bt(t,14)===45?"inline-":"")+"box$3$1"+Qe+"$2$3$1"+ut+"$2box$3")+t;case 100:return Ne(t,":",":"+ut)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ne(t,"scroll-","scroll-snap-")+t}return t}function sd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function LM(t,e,n,r){switch(t.type){case SM:if(t.children.length)break;case TM:case Vv:return t.return=t.return||t.value;case KI:return"";case GI:return t.return=t.value+"{"+sd(t.children,r)+"}";case ep:if(!Xr(t.value=t.props.join(",")))return""}return Xr(n=sd(t.children,r))?t.return=t.value+"{"+n+"}":""}function OM(t){var e=XI(t);return function(n,r,i,a){for(var l="",c=0;c<e;c++)l+=t[c](n,r,i,a)||"";return l}}function FM(t){return function(e){e.root||(e=e.return)&&t(e)}}function jM(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Vv:t.return=ZI(t.value,t.length,n);return;case GI:return sd([_s(t,{value:Ne(t.value,"@","@"+Qe)})],r);case ep:if(t.length)return IM(n=t.props,function(i){switch(Ai(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":za(_s(t,{props:[Ne(i,/:(read-\w+)/,":"+qu+"$1")]})),za(_s(t,{props:[i]})),sy(t,{props:QE(n,r)});break;case"::placeholder":za(_s(t,{props:[Ne(i,/:(plac\w+)/,":"+Qe+"input-$1")]})),za(_s(t,{props:[Ne(i,/:(plac\w+)/,":"+qu+"$1")]})),za(_s(t,{props:[Ne(i,/:(plac\w+)/,ut+"input-$1")]})),za(_s(t,{props:[i]})),sy(t,{props:QE(n,r)});break}return""})}}var $M={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},jn={},dl=typeof process<"u"&&jn!==void 0&&(jn.REACT_APP_SC_ATTR||jn.SC_ATTR)||"data-styled",eA="active",tA="data-styled-version",ip="6.1.14",Mv=`/*!sc*/
`,od=typeof window<"u"&&"HTMLElement"in window,UM=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&jn!==void 0&&jn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&jn.REACT_APP_SC_DISABLE_SPEEDY!==""?jn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&jn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&jn!==void 0&&jn.SC_DISABLE_SPEEDY!==void 0&&jn.SC_DISABLE_SPEEDY!==""&&jn.SC_DISABLE_SPEEDY!=="false"&&jn.SC_DISABLE_SPEEDY),zM={},sp=Object.freeze([]),pl=Object.freeze({});function nA(t,e,n){return n===void 0&&(n=pl),t.theme!==n.theme&&t.theme||e||n.theme}var rA=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),BM=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,WM=/(^-|-$)/g;function JE(t){return t.replace(BM,"-").replace(WM,"")}var HM=/(a)(d)/gi,af=52,ZE=function(t){return String.fromCharCode(t+(t>25?39:97))};function ly(t){var e,n="";for(e=Math.abs(t);e>af;e=e/af|0)n=ZE(e%af)+n;return(ZE(e%af)+n).replace(HM,"$1-$2")}var yg,iA=5381,Ya=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},sA=function(t){return Ya(iA,t)};function Lv(t){return ly(sA(t)>>>0)}function qM(t){return t.displayName||t.name||"Component"}function vg(t){return typeof t=="string"&&!0}var oA=typeof Symbol=="function"&&Symbol.for,aA=oA?Symbol.for("react.memo"):60115,KM=oA?Symbol.for("react.forward_ref"):60112,GM={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},QM={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},YM=((yg={})[KM]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yg[aA]=lA,yg);function eT(t){return("type"in(e=t)&&e.type.$$typeof)===aA?lA:"$$typeof"in t?YM[t.$$typeof]:GM;var e}var XM=Object.defineProperty,JM=Object.getOwnPropertyNames,tT=Object.getOwnPropertySymbols,ZM=Object.getOwnPropertyDescriptor,eL=Object.getPrototypeOf,nT=Object.prototype;function uA(t,e,n){if(typeof e!="string"){if(nT){var r=eL(e);r&&r!==nT&&uA(t,r,n)}var i=JM(e);tT&&(i=i.concat(tT(e)));for(var a=eT(t),l=eT(e),c=0;c<i.length;++c){var h=i[c];if(!(h in QM||n&&n[h]||l&&h in l||a&&h in a)){var p=ZM(e,h);try{XM(t,h,p)}catch{}}}}return t}function $o(t){return typeof t=="function"}function Ov(t){return typeof t=="object"&&"styledComponentId"in t}function ko(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function ad(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function oc(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function uy(t,e,n){if(n===void 0&&(n=!1),!n&&!oc(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=uy(t[r],e[r]);else if(oc(e))for(var r in e)t[r]=uy(t[r],e[r]);return t}function Fv(t,e){Object.defineProperty(t,"toString",{value:e})}function Uo(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var tL=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,a=i;e>=a;)if((a<<=1)<0)throw Uo(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var l=i;l<a;l++)this.groupSizes[l]=0}for(var c=this.indexOfGroup(e+1),h=(l=0,n.length);l<h;l++)this.tag.insertRule(c,n[l])&&(this.groupSizes[e]++,c++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var a=r;a<i;a++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),a=i+r,l=i;l<a;l++)n+="".concat(this.tag.getRule(l)).concat(Mv);return n},t}(),kf=new Map,ld=new Map,bf=1,lf=function(t){if(kf.has(t))return kf.get(t);for(;ld.has(bf);)bf++;var e=bf++;return kf.set(t,e),ld.set(e,t),e},nL=function(t,e){bf=e+1,kf.set(t,e),ld.set(e,t)},rL="style[".concat(dl,"][").concat(tA,'="').concat(ip,'"]'),iL=new RegExp("^".concat(dl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),sL=function(t,e,n){for(var r,i=n.split(","),a=0,l=i.length;a<l;a++)(r=i[a])&&t.registerName(e,r)},oL=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Mv),i=[],a=0,l=r.length;a<l;a++){var c=r[a].trim();if(c){var h=c.match(iL);if(h){var p=0|parseInt(h[1],10),m=h[2];p!==0&&(nL(m,p),sL(t,m,h[3]),t.getTag().insertRules(p,i)),i.length=0}else i.push(c)}}},rT=function(t){for(var e=document.querySelectorAll(rL),n=0,r=e.length;n<r;n++){var i=e[n];i&&i.getAttribute(dl)!==eA&&(oL(t,i),i.parentNode&&i.parentNode.removeChild(i))}};function aL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cA=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(c){var h=Array.from(c.querySelectorAll("style[".concat(dl,"]")));return h[h.length-1]}(n),a=i!==void 0?i.nextSibling:null;r.setAttribute(dl,eA),r.setAttribute(tA,ip);var l=aL();return l&&r.setAttribute("nonce",l),n.insertBefore(r,a),r},lL=function(){function t(e){this.element=cA(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,a=r.length;i<a;i++){var l=r[i];if(l.ownerNode===n)return l}throw Uo(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),uL=function(){function t(e){this.element=cA(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),cL=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),iT=od,hL={isServer:!od,useCSSOMInjection:!UM},ud=function(){function t(e,n,r){e===void 0&&(e=pl),n===void 0&&(n={});var i=this;this.options=Wt(Wt({},hL),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&od&&iT&&(iT=!1,rT(this)),Fv(this,function(){return function(a){for(var l=a.getTag(),c=l.length,h="",p=function(y){var w=function(b){return ld.get(b)}(y);if(w===void 0)return"continue";var T=a.names.get(w),x=l.getGroup(y);if(T===void 0||!T.size||x.length===0)return"continue";var P="".concat(dl,".g").concat(y,'[id="').concat(w,'"]'),k="";T!==void 0&&T.forEach(function(b){b.length>0&&(k+="".concat(b,","))}),h+="".concat(x).concat(P,'{content:"').concat(k,'"}').concat(Mv)},m=0;m<c;m++)p(m);return h}(i)})}return t.registerId=function(e){return lf(e)},t.prototype.rehydrate=function(){!this.server&&od&&rT(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Wt(Wt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new cL(i):r?new lL(i):new uL(i)}(this.options),new tL(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(lf(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(lf(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(lf(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),fL=/&/g,dL=/^\s*\/\/.*$/gm;function hA(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=hA(n.children,e)),n})}function pL(t){var e,n,r,i=pl,a=i.options,l=a===void 0?pl:a,c=i.plugins,h=c===void 0?sp:c,p=function(w,T,x){return x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(e):w},m=h.slice();m.push(function(w){w.type===ep&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(fL,n).replace(r,p))}),l.prefix&&m.push(jM),m.push(LM);var y=function(w,T,x,P){T===void 0&&(T=""),x===void 0&&(x=""),P===void 0&&(P="&"),e=P,n=T,r=new RegExp("\\".concat(n,"\\b"),"g");var k=w.replace(dL,""),b=NM(x||T?"".concat(x," ").concat(T," { ").concat(k," }"):k);l.namespace&&(b=hA(b,l.namespace));var O=[];return sd(b,OM(m.concat(FM(function(U){return O.push(U)})))),O};return y.hash=h.length?h.reduce(function(w,T){return T.name||Uo(15),Ya(w,T.name)},iA).toString():"",y}var mL=new ud,cy=pL(),fA=er.createContext({shouldForwardProp:void 0,styleSheet:mL,stylis:cy});fA.Consumer;er.createContext(void 0);function hy(){return M.useContext(fA)}var dA=function(){function t(e,n){var r=this;this.inject=function(i,a){a===void 0&&(a=cy);var l=r.name+a.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,a(r.rules,l,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Fv(this,function(){throw Uo(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=cy),this.name+e.hash},t}(),gL=function(t){return t>="A"&&t<="Z"};function sT(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;gL(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var pA=function(t){return t==null||t===!1||t===""},mA=function(t){var e,n,r=[];for(var i in t){var a=t[i];t.hasOwnProperty(i)&&!pA(a)&&(Array.isArray(a)&&a.isCss||$o(a)?r.push("".concat(sT(i),":"),a,";"):oc(a)?r.push.apply(r,cl(cl(["".concat(i," {")],mA(a),!1),["}"],!1)):r.push("".concat(sT(i),": ").concat((e=i,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in $M||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Rs(t,e,n,r){if(pA(t))return[];if(Ov(t))return[".".concat(t.styledComponentId)];if($o(t)){if(!$o(a=t)||a.prototype&&a.prototype.isReactComponent||!e)return[t];var i=t(e);return Rs(i,e,n,r)}var a;return t instanceof dA?n?(t.inject(n,r),[t.getName(r)]):[t]:oc(t)?mA(t):Array.isArray(t)?Array.prototype.concat.apply(sp,t.map(function(l){return Rs(l,e,n,r)})):[t.toString()]}function gA(t){for(var e=0;e<t.length;e+=1){var n=t[e];if($o(n)&&!Ov(n))return!1}return!0}var yL=sA(ip),vL=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&gA(e),this.componentId=n,this.baseHash=Ya(yL,n),this.baseStyle=r,ud.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ko(i,this.staticRulesId);else{var a=ad(Rs(this.rules,e,n,r)),l=ly(Ya(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,l)){var c=r(a,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,c)}i=ko(i,l),this.staticRulesId=l}else{for(var h=Ya(this.baseHash,r.hash),p="",m=0;m<this.rules.length;m++){var y=this.rules[m];if(typeof y=="string")p+=y;else if(y){var w=ad(Rs(y,e,n,r));h=Ya(h,w+m),p+=w}}if(p){var T=ly(h>>>0);n.hasNameForId(this.componentId,T)||n.insertRules(this.componentId,T,r(p,".".concat(T),void 0,this.componentId)),i=ko(i,T)}}return i},t}(),ac=er.createContext(void 0);ac.Consumer;function _L(t){var e=er.useContext(ac),n=M.useMemo(function(){return function(r,i){if(!r)throw Uo(14);if($o(r)){var a=r(i);return a}if(Array.isArray(r)||typeof r!="object")throw Uo(8);return i?Wt(Wt({},i),r):r}(t.theme,e)},[t.theme,e]);return t.children?er.createElement(ac.Provider,{value:n},t.children):null}var _g={};function wL(t,e,n){var r=Ov(t),i=t,a=!vg(t),l=e.attrs,c=l===void 0?sp:l,h=e.componentId,p=h===void 0?function($,H){var X=typeof $!="string"?"sc":JE($);_g[X]=(_g[X]||0)+1;var C="".concat(X,"-").concat(Lv(ip+X+_g[X]));return H?"".concat(H,"-").concat(C):C}(e.displayName,e.parentComponentId):h,m=e.displayName,y=m===void 0?function($){return vg($)?"styled.".concat($):"Styled(".concat(qM($),")")}(t):m,w=e.displayName&&e.componentId?"".concat(JE(e.displayName),"-").concat(e.componentId):e.componentId||p,T=r&&i.attrs?i.attrs.concat(c).filter(Boolean):c,x=e.shouldForwardProp;if(r&&i.shouldForwardProp){var P=i.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;x=function($,H){return P($,H)&&k($,H)}}else x=P}var b=new vL(n,w,r?i.componentStyle:void 0);function O($,H){return function(X,C,I){var R=X.attrs,D=X.componentStyle,L=X.defaultProps,B=X.foldedComponentIds,V=X.styledComponentId,ke=X.target,Ge=er.useContext(ac),Xe=hy(),Je=X.shouldForwardProp||Xe.shouldForwardProp,re=nA(C,Ge,L)||pl,ce=function(De,be,$e){for(var Me,Ue=Wt(Wt({},be),{className:void 0,theme:$e}),Vt=0;Vt<De.length;Vt+=1){var ar=$o(Me=De[Vt])?Me(Ue):Me;for(var _n in ar)Ue[_n]=_n==="className"?ko(Ue[_n],ar[_n]):_n==="style"?Wt(Wt({},Ue[_n]),ar[_n]):ar[_n]}return be.className&&(Ue.className=ko(Ue.className,be.className)),Ue}(R,C,re),ue=ce.as||ke,W={};for(var J in ce)ce[J]===void 0||J[0]==="$"||J==="as"||J==="theme"&&ce.theme===re||(J==="forwardedAs"?W.as=ce.forwardedAs:Je&&!Je(J,ue)||(W[J]=ce[J]));var Ae=function(De,be){var $e=hy(),Me=De.generateAndInjectStyles(be,$e.styleSheet,$e.stylis);return Me}(D,ce),Ie=ko(B,V);return Ae&&(Ie+=" "+Ae),ce.className&&(Ie+=" "+ce.className),W[vg(ue)&&!rA.has(ue)?"class":"className"]=Ie,I&&(W.ref=I),M.createElement(ue,W)}(U,$,H)}O.displayName=y;var U=er.forwardRef(O);return U.attrs=T,U.componentStyle=b,U.displayName=y,U.shouldForwardProp=x,U.foldedComponentIds=r?ko(i.foldedComponentIds,i.styledComponentId):"",U.styledComponentId=w,U.target=r?i.target:t,Object.defineProperty(U,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=r?function(H){for(var X=[],C=1;C<arguments.length;C++)X[C-1]=arguments[C];for(var I=0,R=X;I<R.length;I++)uy(H,R[I],!0);return H}({},i.defaultProps,$):$}}),Fv(U,function(){return".".concat(U.styledComponentId)}),a&&uA(U,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),U}function oT(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var aT=function(t){return Object.assign(t,{isCss:!0})};function Cl(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if($o(t)||oc(t))return aT(Rs(oT(sp,cl([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Rs(r):aT(Rs(oT(r,e)))}function fy(t,e,n){if(n===void 0&&(n=pl),!e)throw Uo(1,e);var r=function(i){for(var a=[],l=1;l<arguments.length;l++)a[l-1]=arguments[l];return t(e,n,Cl.apply(void 0,cl([i],a,!1)))};return r.attrs=function(i){return fy(t,e,Wt(Wt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return fy(t,e,Wt(Wt({},n),i))},r}var yA=function(t){return fy(wL,t)},se=yA;rA.forEach(function(t){se[t]=yA(t)});var EL=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=gA(e),ud.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,i){var a=i(ad(Rs(this.rules,n,r,i)),""),l=this.componentId+e;r.insertRules(l,l,a)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,i){e>2&&ud.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,i)},t}();function TL(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Cl.apply(void 0,cl([t],e,!1)),i="sc-global-".concat(Lv(JSON.stringify(r))),a=new EL(r,i),l=function(h){var p=hy(),m=er.useContext(ac),y=er.useRef(p.styleSheet.allocateGSInstance(i)).current;return p.styleSheet.server&&c(y,h,p.styleSheet,m,p.stylis),er.useLayoutEffect(function(){if(!p.styleSheet.server)return c(y,h,p.styleSheet,m,p.stylis),function(){return a.removeStyles(y,p.styleSheet)}},[y,h,p.styleSheet,m,p.stylis]),null};function c(h,p,m,y,w){if(a.isStatic)a.renderStyles(h,zM,m,w);else{var T=Wt(Wt({},p),{theme:nA(p,y,l.defaultProps)});a.renderStyles(h,T,m,w)}}return er.memo(l)}function SL(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=ad(Cl.apply(void 0,cl([t],e,!1))),i=Lv(r);return new dA(i,r)}const xL=se.nav`
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
`,IL=se.div`
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
`,AL=se.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,CL=se.div`
  background: ${t=>t.theme.colors.primary};
  padding: 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px ${t=>t.theme.colors.primary}40;
`,PL=se.span`
  font-size: 1.8rem;
  letter-spacing: -1px;
`,RL=se.div`
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
`,kL=se.button`
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
`,bL=se.div`
  position: relative;
  display: flex;
  align-items: center;
`,lT=se.div`
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
`,DL=se.div`
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
`,VL=se.div`
  margin-left: auto;
  opacity: 0.5;
  display: flex;
  align-items: center;
`,NL=se(ws)`
  border-bottom: 1px solid ${t=>t.theme.colors.primary}10;
  margin-bottom: 5px;
`,ML=se.div`
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
`,LL=se.span`
  color: white;
  font-weight: 800;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: ${t=>t.theme.fonts.primary};
`,vA={en:{com_score:"Score",com_streak:"Streak",com_tryAgain:"Try Again",com_home:"Home",com_back:"Back",com_next:"Next",com_finish:"Finish",com_congrats:"Congratulations!",com_wellDone:"Well Done!",com_claimCertificate:"Claim Certificate 🏆",com_backToScore:"Back to Score",com_reviewAnswers:"Review Answers",com_getCertificate:"Get Certificate",com_goodEffort:"Good effort! 💪",com_genius:"You're a Genius! 🎉",com_masteredCurriculum:"You've mastered the curriculum! Your brain is officially a supercomputer.",com_keepPracticing:"Keep practicing and you'll get a perfect score next time!",com_testReview:"Test Review",com_seeWhatLearned:"See what you learned today!",com_yourAnswer:"Your answer:",com_correctAnswer:"Correct answer:",com_operation:"Operation",com_difficulty:"Difficulty",com_level:"Level",com_readyForTest:"Ready for the Big Test? 🏆",com_masterTryTrophy:"Once you master these sums, try the 'Math Hero' test to win a trophy!",com_checkAnswer:"Check Answer",com_allowDecimals:"Decimal Results",com_allowNegative:"Allow Negative Numbers",com_showRemainder:"Show Remainder",com_hint:"Need a hint?",com_easyWords:"Easy Words",com_mediumWords:"Medium Words",com_hardWords:"Hard Words",com_easy:"Easy",com_medium:"Medium",com_hard:"Hard",com_time:"Time",diff_beginner:"Beginner",diff_explorer:"Explorer",diff_achiever:"Achiever",diff_master:"Master",diff_elite:"Elite",nav_updateName:"Update Name",nav_setProgress:"Set Progress",nav_darkMode:"Dark Mode",nav_lightMode:"Light Mode",nav_fontSize:"Font Size",nav_muteSound:"Mute Sound",nav_unmuteSound:"Unmute Sound",nav_small:"Small",nav_medium:"Medium",nav_large:"Large",dash_welcome:"Hi",dash_readyToLearn:"Ready to learn something new today?",dash_english:"English",dash_hindi:"Hindi",dash_math:"Math",dash_logic:"Logic",dash_learn:"Learn",dash_practice:"Practice",dash_test:"Tests",math_mathMagic:"Math Magic",math_mathHero:"Math Hero",math_sorting:"Sorting",math_addition:"Addition",math_subtraction:"Subtraction",math_multiplication:"Multiplication",math_division:"Division",math_countingDesc:"Master numbers with fun addition and subtraction!",math_biggestNumber:"Tap the biggest number!",math_smallestNumber:"Tap the smallest number!",math_solveMath:"Solve the math!",math_sortAsc:"Sort these numbers from Smallest to Biggest!",math_sortDesc:"Sort these numbers from Biggest to Smallest!",eng_spellingHero:"Spelling Hero",eng_missingLetters:"Missing Letters",eng_listenAndFind:"Listen and Find",eng_tapTheWord:"Tap the word you hear!",eng_chooseMissing:"Choose the missing letter!",eng_tapSpeaker:"Tap the speaker below to hear",eng_missingLettersSubtitle:"Fill in the gap to complete the word!",eng_spellingHeroPromo:"Try the Spelling Hero exam!",log_grandLogic:"Grand Logic",log_whatNext:"What comes next?",hindi_hindiLegend:"Hindi Legend",hindi_tapLetter:"Tap the letter you hear!",mst_grandMaster:"Grand Master",mst_subtitle:"Take the challenge and prove your skills!",sdk_title:"Kid Sudoku",sdk_subtitle:"Fill the grid so every row and block has numbers 1-4!",sdk_almost:"Almost! Some numbers are repeated. Check again! 💪",sdk_tryAgain:"Try again",sdk_easyHints:"Easy (8 Hints)",sdk_hardHints:"Hard (4 Hints)",sdk_puzzleLevel:"Puzzle Level",sdk_howToPlay:"How to Play",sdk_step1:"Pick a white box",sdk_step2:"Tap a number to fill it",sdk_step3:"Every 2x2 box must have 1, 2, 3, and 4!",sdk_milestoneReached:"Milestone reached! 🎉",sdk_certProgress:"Certificate Progress",sdk_moreForCert:"more for a Certificate! 🏆",stm_title:"Set Game Progress",stm_subtitle:"Adjust the streak for any activity",stm_streak:"Streak:",stm_update:"Update Progress",game_math:"Math Magic",game_spelling:"Spelling Bee",game_missing_letters:"Missing Letters",game_comparison:"Big or Small",game_sorting:"Sorting Numbers",game_sudoku:"Kid Sudoku",game_alphabet_hindi:"Hindi Letters",game_master_test:"Grand Master",fb_keepTrying:"Keep trying! 💪",fb_tryAgain:"Keep trying",fb_oops:"Oops! Try again! 😅",fb_oopsRead:"Oops! Try again",gle_title:"Big or Small?",gle_subtitle:"Compare the numbers and pick the right sign!",gle_digits9:"Numbers to 9",gle_digits99:"Numbers to 99",gle_digits999:"Numbers to 999",gle_quickTips:"Quick Tips",gle_greater:"greater",gle_less:"less",gle_equal:"equal",gle_than:"than",gle_to:"to",gle_means:"means",cert_pro:"Hooray! You're a PRO!",cert_award:"Super Duper Achievement Award",cert_belongs:"This award belongs to our amazing...",cert_legend:"For being an absolute legend in the",cert_challenge:"challenge",cert_level:"level",cert_smashed:"You've smashed it with a score of",cert_inJust:"in just",cert_keepAwesome:"Keep being awesome! 🚀✨",cert_generating:"Generating...",cert_download:"Download",cert_share:"Share",cert_copied:"Achievement link copied to clipboard! 📋",cert_failed:"Sharing failed. You can download the image instead! 😊",test_instructions:"Test Instructions",test_qCount:"10 questions total",test_selectBest:"Select the best answer",test_timeRecorded:"Time will be recorded",test_scoreForCert:"8+ score for certificate",test_start:"START TEST",test_question:"QUESTION",test_of:"OF",test_results:"Test Results",test_perfect:"Perfect Score! 🏆",test_great:"Great Job! 🌟",test_good:"Good Effort! 👍",test_keepPracticing:"Keep practicing! 💪",test_review:"Review Answers",test_playAgain:"Play Again",test_home:"Back to Home",test_targetTime:"Target Time",test_noLimit:"No Limit",test_beatenTarget:"You beat the target time! ⚡",test_timeExceeded:"Target time exceeded. Keep practicing! 🐢",test_time30s:"30s",test_time1m:"1 Min",test_time2m:"2 Min",test_time3m:"3 Min",test_time4m:"4 Min",test_time5m:"5 Min",test_timeLimitInfo:{none:"Take all the time you need",s30:"Quick Sprint",m1:"Quick Challenge",m2:"Standard Pace",m3:"Relaxed Pace",m4:"Focused Pace",m5:"Taking it Slow"},fb_incredible10:"Incredible! 10 in a row! 🌟",fb_superstar:"Incredible! 10 in a row! You are a superstar!",fb_notQuite:"Not quite, try again! 😅",fb_tryAgainShort:"Try again",tel_teluguLegend:"Telugu Legend",tel_tapLetter:"Tap the letter you hear!",tel_title:"Telugu Alphabet",tel_subtitle:"Explore the beautiful Telugu Varnasala!",tel_achulu:"Vowels (Achulu)",tel_hallulu:"Consonants (Hallulu)",wee_title:"Days of the Week",wee_subtitle:"Learn the 7 days of the week!",wee_funFact:"Fun Fact! 📅",wee_funFactDetail:"There are 7 days in a week and 52 weeks in a year!",wee_pickDay:"Pick a Day",wee_didYouKnow:"Did You Know? 🌟",wee_facts:[{emoji:"📅",fact:"There are 7 days in a week."},{emoji:"🗓️",fact:"4 weeks make 1 month."},{emoji:"📆",fact:"52 weeks make 1 year."},{emoji:"☀️",fact:"The week starts on Sunday."},{emoji:"🎉",fact:"Saturday and Sunday are the weekend!"}],enc_messages:["Good Start!","Keep Going!","Well Done!","So Smart!","Half Way!","Great Job!","Amazing!","Brilliant!","Nearly There!","Almost Done!"],enc_default:"Keep going!",dash_telugu:"Telugu",game_alphabet_telugu:"Telugu Letters"}},OL=()=>{};var uT={};/**
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
 */const _A=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},FL=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=t[n++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=t[n++],l=t[n++],c=t[n++],h=((i&7)<<18|(a&63)<<12|(l&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const a=t[n++],l=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return e.join("")},wA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const a=t[i],l=i+1<t.length,c=l?t[i+1]:0,h=i+2<t.length,p=h?t[i+2]:0,m=a>>2,y=(a&3)<<4|c>>4;let w=(c&15)<<2|p>>6,T=p&63;h||(T=64,l||(w=64)),r.push(n[m],n[y],n[w],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_A(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):FL(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const a=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const p=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,a==null||c==null||p==null||y==null)throw new jL;const w=a<<2|c>>4;if(r.push(w),p!==64){const T=c<<4&240|p>>2;if(r.push(T),y!==64){const x=p<<6&192|y;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jL extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $L=function(t){const e=_A(t);return wA.encodeByteArray(e,!0)},cd=function(t){return $L(t).replace(/\./g,"")},EA=function(t){try{return wA.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function UL(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zL=()=>UL().__FIREBASE_DEFAULTS__,BL=()=>{if(typeof process>"u"||typeof uT>"u")return;const t=uT.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},WL=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&EA(t[1]);return e&&JSON.parse(e)},op=()=>{try{return OL()||zL()||BL()||WL()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},TA=t=>{var e,n;return(n=(e=op())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},HL=t=>{const e=TA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},SA=()=>{var t;return(t=op())==null?void 0:t.config},xA=t=>{var e;return(e=op())==null?void 0:e[`_${t}`]};/**
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
 */class qL{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function KL(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...t};return[cd(JSON.stringify(n)),cd(JSON.stringify(l)),""].join(".")}/**
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
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function GL(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function QL(){var e;const t=(e=op())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function YL(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function XL(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function JL(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZL(){const t=fn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function eO(){return!QL()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function tO(){try{return typeof indexedDB=="object"}catch{return!1}}function nO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var a;e(((a=i.error)==null?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const rO="FirebaseError";class $i extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rO,Object.setPrototypeOf(this,$i.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xc.prototype.create)}}class xc{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,a=this.errors[e],l=a?iO(a,r):"Error",c=`${this.serviceName}: ${l} (${i}).`;return new $i(i,c,r)}}function iO(t,e){return t.replace(sO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const sO=/\{\$([^}]+)}/g;function oO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const a=t[i],l=e[i];if(cT(a)&&cT(l)){if(!zo(a,l))return!1}else if(a!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function cT(t){return t!==null&&typeof t=="object"}/**
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
 */function Ic(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Fu(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function ju(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function aO(t,e){const n=new lO(t,e);return n.subscribe.bind(n)}class lO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");uO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wg),i.error===void 0&&(i.error=wg),i.complete===void 0&&(i.complete=wg);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wg(){}/**
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
 */function Ac(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function IA(t){return(await fetch(t,{credentials:"include"})).ok}class Bo{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class cO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qL;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fO(e))try{this.getOrInitializeService({instanceIdentifier:Co})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Co){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Co){return this.instances.has(e)}getOptions(e=Co){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,l]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);r===c&&l.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Co){return this.component?this.component.multipleInstances?e:Co:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hO(t){return t===Co?void 0:t}function fO(t){return t.instantiationMode==="EAGER"}/**
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
 */class dO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const pO={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},mO=Oe.INFO,gO={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},yO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=gO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jv{constructor(e){this.name=e,this._logLevel=mO,this._logHandler=yO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const vO=(t,e)=>e.some(n=>t instanceof n);let hT,fT;function _O(){return hT||(hT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wO(){return fT||(fT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const AA=new WeakMap,dy=new WeakMap,CA=new WeakMap,Eg=new WeakMap,$v=new WeakMap;function EO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",a),t.removeEventListener("error",l)},a=()=>{n(ks(t.result)),i()},l=()=>{r(t.error),i()};t.addEventListener("success",a),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&AA.set(n,t)}).catch(()=>{}),$v.set(e,t),e}function TO(t){if(dy.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",l),t.removeEventListener("abort",l)},a=()=>{n(),i()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",a),t.addEventListener("error",l),t.addEventListener("abort",l)});dy.set(t,e)}let py={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dy.get(t);if(e==="objectStoreNames")return t.objectStoreNames||CA.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ks(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SO(t){py=t(py)}function xO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Tg(this),e,...n);return CA.set(r,e.sort?e.sort():[e]),ks(r)}:wO().includes(t)?function(...e){return t.apply(Tg(this),e),ks(AA.get(this))}:function(...e){return ks(t.apply(Tg(this),e))}}function IO(t){return typeof t=="function"?xO(t):(t instanceof IDBTransaction&&TO(t),vO(t,_O())?new Proxy(t,py):t)}function ks(t){if(t instanceof IDBRequest)return EO(t);if(Eg.has(t))return Eg.get(t);const e=IO(t);return e!==t&&(Eg.set(t,e),$v.set(e,t)),e}const Tg=t=>$v.get(t);function AO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:a}={}){const l=indexedDB.open(t,e),c=ks(l);return r&&l.addEventListener("upgradeneeded",h=>{r(ks(l.result),h.oldVersion,h.newVersion,ks(l.transaction),h)}),n&&l.addEventListener("blocked",h=>n(h.oldVersion,h.newVersion,h)),c.then(h=>{a&&h.addEventListener("close",()=>a()),i&&h.addEventListener("versionchange",p=>i(p.oldVersion,p.newVersion,p))}).catch(()=>{}),c}const CO=["get","getKey","getAll","getAllKeys","count"],PO=["put","add","delete","clear"],Sg=new Map;function dT(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Sg.get(e))return Sg.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=PO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||CO.includes(n)))return;const a=async function(l,...c){const h=this.transaction(l,i?"readwrite":"readonly");let p=h.store;return r&&(p=p.index(c.shift())),(await Promise.all([p[n](...c),i&&h.done]))[0]};return Sg.set(e,a),a}SO(t=>({...t,get:(e,n,r)=>dT(e,n)||t.get(e,n,r),has:(e,n)=>!!dT(e,n)||t.has(e,n)}));/**
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
 */class RO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const my="@firebase/app",pT="0.14.11";/**
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
 */const Li=new jv("@firebase/app"),bO="@firebase/app-compat",DO="@firebase/analytics-compat",VO="@firebase/analytics",NO="@firebase/app-check-compat",MO="@firebase/app-check",LO="@firebase/auth",OO="@firebase/auth-compat",FO="@firebase/database",jO="@firebase/data-connect",$O="@firebase/database-compat",UO="@firebase/functions",zO="@firebase/functions-compat",BO="@firebase/installations",WO="@firebase/installations-compat",HO="@firebase/messaging",qO="@firebase/messaging-compat",KO="@firebase/performance",GO="@firebase/performance-compat",QO="@firebase/remote-config",YO="@firebase/remote-config-compat",XO="@firebase/storage",JO="@firebase/storage-compat",ZO="@firebase/firestore",eF="@firebase/ai",tF="@firebase/firestore-compat",nF="firebase",rF="12.12.0";/**
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
 */const gy="[DEFAULT]",iF={[my]:"fire-core",[bO]:"fire-core-compat",[VO]:"fire-analytics",[DO]:"fire-analytics-compat",[MO]:"fire-app-check",[NO]:"fire-app-check-compat",[LO]:"fire-auth",[OO]:"fire-auth-compat",[FO]:"fire-rtdb",[jO]:"fire-data-connect",[$O]:"fire-rtdb-compat",[UO]:"fire-fn",[zO]:"fire-fn-compat",[BO]:"fire-iid",[WO]:"fire-iid-compat",[HO]:"fire-fcm",[qO]:"fire-fcm-compat",[KO]:"fire-perf",[GO]:"fire-perf-compat",[QO]:"fire-rc",[YO]:"fire-rc-compat",[XO]:"fire-gcs",[JO]:"fire-gcs-compat",[ZO]:"fire-fst",[tF]:"fire-fst-compat",[eF]:"fire-vertex","fire-js":"fire-js",[nF]:"fire-js-all"};/**
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
 */const hd=new Map,sF=new Map,yy=new Map;function mT(t,e){try{t.container.addComponent(e)}catch(n){Li.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ml(t){const e=t.name;if(yy.has(e))return Li.debug(`There were multiple attempts to register component ${e}.`),!1;yy.set(e,t);for(const n of hd.values())mT(n,t);for(const n of sF.values())mT(n,t);return!0}function Uv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $n(t){return t==null?!1:t.settings!==void 0}/**
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
 */const oF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},bs=new xc("app","Firebase",oF);/**
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
 */class aF{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Bo("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bs.create("app-deleted",{appName:this._name})}}/**
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
 */const Pl=rF;function PA(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:gy,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw bs.create("bad-app-name",{appName:String(i)});if(n||(n=SA()),!n)throw bs.create("no-options");const a=hd.get(i);if(a){if(zo(n,a.options)&&zo(r,a.config))return a;throw bs.create("duplicate-app",{appName:i})}const l=new dO(i);for(const h of yy.values())l.addComponent(h);const c=new aF(n,r,l);return hd.set(i,c),c}function RA(t=gy){const e=hd.get(t);if(!e&&t===gy&&SA())return PA();if(!e)throw bs.create("no-app",{appName:t});return e}function Ds(t,e,n){let r=iF[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Li.warn(l.join(" "));return}ml(new Bo(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const lF="firebase-heartbeat-database",uF=1,lc="firebase-heartbeat-store";let xg=null;function kA(){return xg||(xg=AO(lF,uF,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(lc)}catch(n){console.warn(n)}}}}).catch(t=>{throw bs.create("idb-open",{originalErrorMessage:t.message})})),xg}async function cF(t){try{const n=(await kA()).transaction(lc),r=await n.objectStore(lc).get(bA(t));return await n.done,r}catch(e){if(e instanceof $i)Li.warn(e.message);else{const n=bs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Li.warn(n.message)}}}async function gT(t,e){try{const r=(await kA()).transaction(lc,"readwrite");await r.objectStore(lc).put(e,bA(t)),await r.done}catch(n){if(n instanceof $i)Li.warn(n.message);else{const r=bs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Li.warn(r.message)}}}function bA(t){return`${t.name}!${t.options.appId}`}/**
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
 */const hF=1024,fF=30;class dF{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=yT();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>fF){const l=gF(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Li.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yT(),{heartbeatsToSend:r,unsentEntries:i}=pF(this._heartbeatsCache.heartbeats),a=cd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return Li.warn(n),""}}}function yT(){return new Date().toISOString().substring(0,10)}function pF(t,e=hF){const n=[];let r=t.slice();for(const i of t){const a=n.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),vT(n)>e){a.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vT(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mF{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tO()?nO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return gT(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vT(t){return cd(JSON.stringify({version:2,heartbeats:t})).length}function gF(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function yF(t){ml(new Bo("platform-logger",e=>new RO(e),"PRIVATE")),ml(new Bo("heartbeat",e=>new dF(e),"PRIVATE")),Ds(my,pT,t),Ds(my,pT,"esm2020"),Ds("fire-js","")}yF("");var vF="firebase",_F="12.12.1";/**
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
 */Ds(vF,_F,"app");function DA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wF=DA,VA=new xc("auth","Firebase",DA());/**
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
 */const fd=new jv("@firebase/auth");function EF(t,...e){fd.logLevel<=Oe.WARN&&fd.warn(`Auth (${Pl}): ${t}`,...e)}function Df(t,...e){fd.logLevel<=Oe.ERROR&&fd.error(`Auth (${Pl}): ${t}`,...e)}/**
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
 */function sr(t,...e){throw Bv(t,...e)}function Ir(t,...e){return Bv(t,...e)}function zv(t,e,n){const r={...wF(),[e]:n};return new xc("auth","Firebase",r).create(e,{appName:t.name})}function Vi(t){return zv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function TF(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sr(t,"argument-error"),zv(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Bv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return VA.create(t,...e)}function Te(t,e,...n){if(!t)throw Bv(e,...n)}function Ri(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Df(e),new Error(e)}function Oi(t,e){t||Ri(e)}/**
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
 */function vy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function SF(){return _T()==="http:"||_T()==="https:"}function _T(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function xF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SF()||XL()||"connection"in navigator)?navigator.onLine:!0}function IF(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Cc{constructor(e,n){this.shortDelay=e,this.longDelay=n,Oi(n>e,"Short delay should be less than long delay!"),this.isMobile=GL()||JL()}get(){return xF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */class NA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ri("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ri("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ri("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const CF=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PF=new Cc(3e4,6e4);function Gs(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ui(t,e,n,r,i={}){return MA(t,i,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const c=Ic({key:t.config.apiKey,...l}).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const p={method:e,headers:h,...a};return YL()||(p.referrerPolicy="no-referrer"),t.emulatorConfig&&Ac(t.emulatorConfig.host)&&(p.credentials="include"),NA.fetch()(await LA(t,t.config.apiHost,n,c),p)})}async function MA(t,e,n){t._canInitEmulator=!1;const r={...AF,...e};try{const i=new kF(t),a=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw uf(t,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const c=a.ok?l.errorMessage:l.error.message,[h,p]=c.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw uf(t,"credential-already-in-use",l);if(h==="EMAIL_EXISTS")throw uf(t,"email-already-in-use",l);if(h==="USER_DISABLED")throw uf(t,"user-disabled",l);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw zv(t,m,p);sr(t,m)}}catch(i){if(i instanceof $i)throw i;sr(t,"network-request-failed",{message:String(i)})}}async function Pc(t,e,n,r,i={}){const a=await Ui(t,e,n,r,i);return"mfaPendingCredential"in a&&sr(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function LA(t,e,n,r){const i=`${e}${n}?${r}`,a=t,l=a.config.emulator?Wv(t.config,i):`${t.config.apiScheme}://${i}`;return CF.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}function RF(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kF{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ir(this.auth,"network-request-failed")),PF.get())})}}function uf(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ir(t,e,r);return i.customData._tokenResponse=n,i}function wT(t){return t!==void 0&&t.enterprise!==void 0}class bF{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return RF(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function DF(t,e){return Ui(t,"GET","/v2/recaptchaConfig",Gs(t,e))}/**
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
 */async function VF(t,e){return Ui(t,"POST","/v1/accounts:delete",e)}async function dd(t,e){return Ui(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ku(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NF(t,e=!1){const n=dn(t),r=await n.getIdToken(e),i=Hv(r);Te(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:Ku(Ig(i.auth_time)),issuedAtTime:Ku(Ig(i.iat)),expirationTime:Ku(Ig(i.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function Ig(t){return Number(t)*1e3}function Hv(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Df("JWT malformed, contained fewer than 3 sections"),null;try{const i=EA(n);return i?JSON.parse(i):(Df("Failed to decode base64 JWT payload"),null)}catch(i){return Df("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ET(t){const e=Hv(t);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof $i&&MF(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function MF({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class LF{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _y{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ku(this.lastLoginAt),this.creationTime=Ku(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pd(t){var y;const e=t.auth,n=await t.getIdToken(),r=await gl(t,dd(e,{idToken:n}));Te(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const a=(y=i.providerUserInfo)!=null&&y.length?OA(i.providerUserInfo):[],l=FF(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=c?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new _y(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function OF(t){const e=dn(t);await pd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function FF(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function OA(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function jF(t,e){const n=await MA(t,{},async()=>{const r=Ic({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=t.config,l=await LA(t,i,"/v1/token",`key=${a}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:c,body:r};return t.emulatorConfig&&Ac(t.emulatorConfig.host)&&(h.credentials="include"),NA.fetch()(l,h)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $F(t,e){return Ui(t,"POST","/v2/accounts:revokeToken",Gs(t,e))}/**
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
 */class nl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ET(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const n=ET(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:a}=await jF(e,n);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:a}=n,l=new nl;return r&&(Te(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(Te(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),a&&(Te(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nl,this.toJSON())}_performRefresh(){return Ri("not implemented")}}/**
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
 */function vs(t,e){Te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tr{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new LF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gl(this,this.stsTokenManager.getToken(this.auth,e));return Te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NF(this,e)}reload(){return OF(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tr({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($n(this.auth.app))return Promise.reject(Vi(this.auth));const e=await this.getIdToken();return await gl(this,VF(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,a=n.phoneNumber??void 0,l=n.photoURL??void 0,c=n.tenantId??void 0,h=n._redirectEventId??void 0,p=n.createdAt??void 0,m=n.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:T,providerData:x,stsTokenManager:P}=n;Te(y&&P,e,"internal-error");const k=nl.fromJSON(this.name,P);Te(typeof y=="string",e,"internal-error"),vs(r,e.name),vs(i,e.name),Te(typeof w=="boolean",e,"internal-error"),Te(typeof T=="boolean",e,"internal-error"),vs(a,e.name),vs(l,e.name),vs(c,e.name),vs(h,e.name),vs(p,e.name),vs(m,e.name);const b=new Tr({uid:y,auth:e,email:i,emailVerified:w,displayName:r,isAnonymous:T,photoURL:l,phoneNumber:a,tenantId:c,stsTokenManager:k,createdAt:p,lastLoginAt:m});return x&&Array.isArray(x)&&(b.providerData=x.map(O=>({...O}))),h&&(b._redirectEventId=h),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new nl;i.updateFromServerResponse(n);const a=new Tr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pd(a),a}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Te(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?OA(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(a!=null&&a.length),c=new nl;c.updateFromIdToken(r);const h=new Tr({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:l}),p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _y(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(a!=null&&a.length)};return Object.assign(h,p),h}}/**
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
 */const TT=new Map;function ki(t){Oi(t instanceof Function,"Expected a class definition");let e=TT.get(t);return e?(Oi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,TT.set(t,e),e)}/**
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
 */class FA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}FA.type="NONE";const ST=FA;/**
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
 */function Vf(t,e,n){return`firebase:${t}:${e}:${n}`}class rl{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Vf(this.userKey,i.apiKey,a),this.fullPersistenceKey=Vf("persistence",i.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await dd(this.auth,{idToken:e}).catch(()=>{});return n?Tr._fromGetAccountInfoResponse(this.auth,n,e):null}return Tr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rl(ki(ST),e,r);const i=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=i[0]||ki(ST);const l=Vf(r,e.config.apiKey,e.name);let c=null;for(const p of n)try{const m=await p._get(l);if(m){let y;if(typeof m=="string"){const w=await dd(e,{idToken:m}).catch(()=>{});if(!w)break;y=await Tr._fromGetAccountInfoResponse(e,w,m)}else y=Tr._fromJSON(e,m);p!==a&&(c=y),a=p;break}}catch{}const h=i.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!h.length?new rl(a,e,r):(a=h[0],c&&await a._set(l,c.toJSON()),await Promise.all(n.map(async p=>{if(p!==a)try{await p._remove(l)}catch{}})),new rl(a,e,r))}}/**
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
 */function xT(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WA(e))return"Blackberry";if(HA(e))return"Webos";if($A(e))return"Safari";if((e.includes("chrome/")||UA(e))&&!e.includes("edge/"))return"Chrome";if(BA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function jA(t=fn()){return/firefox\//i.test(t)}function $A(t=fn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function UA(t=fn()){return/crios\//i.test(t)}function zA(t=fn()){return/iemobile/i.test(t)}function BA(t=fn()){return/android/i.test(t)}function WA(t=fn()){return/blackberry/i.test(t)}function HA(t=fn()){return/webos/i.test(t)}function qv(t=fn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function UF(t=fn()){var e;return qv(t)&&!!((e=window.navigator)!=null&&e.standalone)}function zF(){return ZL()&&document.documentMode===10}function qA(t=fn()){return qv(t)||BA(t)||HA(t)||WA(t)||/windows phone/i.test(t)||zA(t)}/**
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
 */function KA(t,e=[]){let n;switch(t){case"Browser":n=xT(fn());break;case"Worker":n=`${xT(fn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pl}/${r}`}/**
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
 */class BF{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=a=>new Promise((l,c)=>{try{const h=e(a);l(h)}catch(h){c(h)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function WF(t,e={}){return Ui(t,"GET","/v2/passwordPolicy",Gs(t,e))}/**
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
 */const HF=6;class qF{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??HF,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class KF{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new IT(this),this.idTokenSubscription=new IT(this),this.beforeStateQueue=new BF(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=VA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ki(n)),this._initializationPromise=this.queue(async()=>{var r,i,a;if(!this._deleted&&(this.persistenceManager=await rl.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)==null?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dd(this,{idToken:e}),r=await Tr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var a;if($n(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(a=this.redirectUser)==null?void 0:a._redirectEventId,c=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!l||l===c)&&(h!=null&&h.user)&&(r=h.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(l){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=IF()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($n(this.app))return Promise.reject(Vi(this));const n=e?dn(e):null;return n&&Te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $n(this.app)?Promise.reject(Vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $n(this.app)?Promise.reject(Vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ki(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WF(this),n=new qF(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xc("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $F(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ki(e)||this._popupRedirectResolver;Te(n,this,"argument-error"),this.redirectPersistenceManager=await rl.create(this,[ki(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let l=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(c,this,"internal-error"),c.then(()=>{l||a(this.currentUser)}),typeof n=="function"){const h=e.addObserver(n,r,i);return()=>{l=!0,h()}}else{const h=e.addObserver(n);return()=>{l=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=KA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if($n(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&EF(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Qs(t){return dn(t)}class IT{constructor(e){this.auth=e,this.observer=null,this.addObserver=aO(n=>this.observer=n)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ap={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GF(t){ap=t}function GA(t){return ap.loadJS(t)}function QF(){return ap.recaptchaEnterpriseScript}function YF(){return ap.gapiScript}function XF(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class JF{constructor(){this.enterprise=new ZF}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ZF{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const e4="recaptcha-enterprise",QA="NO_RECAPTCHA";class t4{constructor(e){this.type=e4,this.auth=Qs(e)}async verify(e="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,c)=>{DF(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const p=new bF(h);return a.tenantId==null?a._agentRecaptchaConfig=p:a._tenantRecaptchaConfigs[a.tenantId]=p,l(p.siteKey)}}).catch(h=>{c(h)})})}function i(a,l,c){const h=window.grecaptcha;wT(h)?h.enterprise.ready(()=>{h.enterprise.execute(a,{action:e}).then(p=>{l(p)}).catch(()=>{l(QA)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JF().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{r(this.auth).then(c=>{if(!n&&wT(window.grecaptcha))i(c,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let h=QF();h.length!==0&&(h+=c),GA(h).then(()=>{i(c,a,l)}).catch(p=>{l(p)})}}).catch(c=>{l(c)})})}}async function AT(t,e,n,r=!1,i=!1){const a=new t4(t);let l;if(i)l=QA;else try{l=await a.verify(n)}catch{l=await a.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const h=c.phoneEnrollmentInfo.phoneNumber,p=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:p,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const h=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function wy(t,e,n,r,i){var a;if((a=t._getRecaptchaConfig())!=null&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await AT(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await AT(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(l)})}/**
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
 */function n4(t,e){const n=Uv(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),a=n.getOptions();if(zo(a,e))return i;sr(i,"already-initialized")}return n.initialize({options:e})}function r4(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ki);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function i4(t,e,n){const r=Qs(t);Te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=YA(e),{host:l,port:c}=s4(e),h=c===null?"":`:${c}`,p={url:`${a}//${l}${h}/`},m=Object.freeze({host:l,port:c,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Te(zo(p,r.config.emulator)&&zo(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=p,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Ac(l)?IA(`${a}//${l}${h}`):o4()}function YA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function s4(t){const e=YA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:CT(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:CT(l)}}}function CT(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function o4(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Kv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ri("not implemented")}_getIdTokenResponse(e){return Ri("not implemented")}_linkToIdToken(e,n){return Ri("not implemented")}_getReauthenticationResolver(e){return Ri("not implemented")}}async function a4(t,e){return Ui(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function l4(t,e){return Pc(t,"POST","/v1/accounts:signInWithPassword",Gs(t,e))}/**
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
 */async function u4(t,e){return Pc(t,"POST","/v1/accounts:signInWithEmailLink",Gs(t,e))}async function c4(t,e){return Pc(t,"POST","/v1/accounts:signInWithEmailLink",Gs(t,e))}/**
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
 */class uc extends Kv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new uc(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new uc(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wy(e,n,"signInWithPassword",l4);case"emailLink":return u4(e,{email:this._email,oobCode:this._password});default:sr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wy(e,r,"signUpPassword",a4);case"emailLink":return c4(e,{idToken:n,email:this._email,oobCode:this._password});default:sr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function il(t,e){return Pc(t,"POST","/v1/accounts:signInWithIdp",Gs(t,e))}/**
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
 */const h4="http://localhost";class Wo extends Kv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=n;if(!r||!i)return null;const l=new Wo(r,i);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return il(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,il(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,il(e,n)}buildRequest(){const e={requestUri:h4,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ic(n)}return e}}/**
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
 */function f4(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function d4(t){const e=Fu(ju(t)).link,n=e?Fu(ju(e)).deep_link_id:null,r=Fu(ju(t)).deep_link_id;return(r?Fu(ju(r)).link:null)||r||n||e||t}class Gv{constructor(e){const n=Fu(ju(e)),r=n.apiKey??null,i=n.oobCode??null,a=f4(n.mode??null);Te(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=d4(e);try{return new Gv(n)}catch{return null}}}/**
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
 */class Rl{constructor(){this.providerId=Rl.PROVIDER_ID}static credential(e,n){return uc._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gv.parseLink(n);return Te(r,"argument-error"),uc._fromEmailAndCode(e,r.code,r.tenantId)}}Rl.PROVIDER_ID="password";Rl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rc extends Qv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ss extends Rc{constructor(){super("facebook.com")}static credential(e){return Wo._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ss.credential(e.oauthAccessToken)}catch{return null}}}Ss.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ss.PROVIDER_ID="facebook.com";/**
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
 */class xs extends Rc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wo._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return xs.credential(n,r)}catch{return null}}}xs.GOOGLE_SIGN_IN_METHOD="google.com";xs.PROVIDER_ID="google.com";/**
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
 */class Is extends Rc{constructor(){super("github.com")}static credential(e){return Wo._fromParams({providerId:Is.PROVIDER_ID,signInMethod:Is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Is.credentialFromTaggedObject(e)}static credentialFromError(e){return Is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Is.credential(e.oauthAccessToken)}catch{return null}}}Is.GITHUB_SIGN_IN_METHOD="github.com";Is.PROVIDER_ID="github.com";/**
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
 */class As extends Rc{constructor(){super("twitter.com")}static credential(e,n){return Wo._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return As.credential(n,r)}catch{return null}}}As.TWITTER_SIGN_IN_METHOD="twitter.com";As.PROVIDER_ID="twitter.com";/**
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
 */async function p4(t,e){return Pc(t,"POST","/v1/accounts:signUp",Gs(t,e))}/**
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
 */class Ho{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const a=await Tr._fromIdTokenResponse(e,r,i),l=PT(r);return new Ho({user:a,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=PT(r);return new Ho({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function PT(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class md extends $i{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,md.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new md(e,n,r,i)}}function XA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?md._fromErrorAndOperation(t,a,e,r):a})}async function m4(t,e,n=!1){const r=await gl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ho._forOperation(t,"link",r)}/**
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
 */async function g4(t,e,n=!1){const{auth:r}=t;if($n(r.app))return Promise.reject(Vi(r));const i="reauthenticate";try{const a=await gl(t,XA(r,i,e,t),n);Te(a.idToken,r,"internal-error");const l=Hv(a.idToken);Te(l,r,"internal-error");const{sub:c}=l;return Te(t.uid===c,r,"user-mismatch"),Ho._forOperation(t,i,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&sr(r,"user-mismatch"),a}}/**
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
 */async function JA(t,e,n=!1){if($n(t.app))return Promise.reject(Vi(t));const r="signIn",i=await XA(t,r,e),a=await Ho._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(a.user),a}async function y4(t,e){return JA(Qs(t),e)}/**
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
 */async function ZA(t){const e=Qs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function v7(t,e,n){if($n(t.app))return Promise.reject(Vi(t));const r=Qs(t),l=await wy(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",p4).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&ZA(t),h}),c=await Ho._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(c.user),c}function _7(t,e,n){return $n(t.app)?Promise.reject(Vi(t)):y4(dn(t),Rl.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ZA(t),r})}/**
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
 */async function v4(t,e){return Ui(t,"POST","/v1/accounts:update",e)}/**
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
 */async function w7(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=dn(t),a={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},l=await gl(r,v4(r.auth,a));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const c=r.providerData.find(({providerId:h})=>h==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function _4(t,e,n,r){return dn(t).onIdTokenChanged(e,n,r)}function w4(t,e,n){return dn(t).beforeAuthStateChanged(e,n)}function E4(t,e,n,r){return dn(t).onAuthStateChanged(e,n,r)}function T4(t){return dn(t).signOut()}const gd="__sak";/**
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
 */class eC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gd,"1"),this.storage.removeItem(gd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const S4=1e3,x4=10;class tC extends eC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=qA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,c,h)=>{this.notifyListeners(l,h)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);zF()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,x4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},S4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tC.type="LOCAL";const I4=tC;/**
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
 */class nC extends eC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nC.type="SESSION";const rC=nC;/**
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
 */function A4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class lp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lp(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:a}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(l).map(async p=>p(n.origin,a)),h=await A4(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lp.receivers=[];/**
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
 */function Yv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class C4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,l;return new Promise((c,h)=>{const p=Yv("",20);i.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(y){const w=y;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(m),a=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),c(w.data.response);break;default:clearTimeout(m),clearTimeout(a),h(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:p,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function Zr(){return window}function P4(t){Zr().location.href=t}/**
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
 */function iC(){return typeof Zr().WorkerGlobalScope<"u"&&typeof Zr().importScripts=="function"}async function R4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function b4(){return iC()?self:null}/**
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
 */const sC="firebaseLocalStorageDb",D4=1,yd="firebaseLocalStorage",oC="fbase_key";class kc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function up(t,e){return t.transaction([yd],e?"readwrite":"readonly").objectStore(yd)}function V4(){const t=indexedDB.deleteDatabase(sC);return new kc(t).toPromise()}function Ey(){const t=indexedDB.open(sC,D4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yd,{keyPath:oC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yd)?e(r):(r.close(),await V4(),e(await Ey()))})})}async function RT(t,e,n){const r=up(t,!0).put({[oC]:e,value:n});return new kc(r).toPromise()}async function N4(t,e){const n=up(t,!1).get(e),r=await new kc(n).toPromise();return r===void 0?null:r.value}function kT(t,e){const n=up(t,!0).delete(e);return new kc(n).toPromise()}const M4=800,L4=3;class aC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ey(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>L4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lp._getInstance(b4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await R4(),!this.activeServiceWorker)return;this.sender=new C4(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||k4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ey();return await RT(e,gd,"1"),await kT(e,gd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>RT(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>N4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>kT(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=up(i,!1).getAll();return new kc(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),M4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aC.type="LOCAL";const O4=aC;new Cc(3e4,6e4);/**
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
 */function lC(t,e){return e?ki(e):(Te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Xv extends Kv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return il(e,this._buildIdpRequest())}_linkToIdToken(e,n){return il(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return il(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function F4(t){return JA(t.auth,new Xv(t),t.bypassAuthState)}function j4(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),g4(n,new Xv(t),t.bypassAuthState)}async function $4(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),m4(n,new Xv(t),t.bypassAuthState)}/**
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
 */class uC{constructor(e,n,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:a,error:l,type:c}=e;if(l){this.reject(l);return}const h={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(h))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F4;case"linkViaPopup":case"linkViaRedirect":return $4;case"reauthViaPopup":case"reauthViaRedirect":return j4;default:sr(this.auth,"internal-error")}}resolve(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Oi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const U4=new Cc(2e3,1e4);async function E7(t,e,n){if($n(t.app))return Promise.reject(Ir(t,"operation-not-supported-in-this-environment"));const r=Qs(t);TF(t,e,Qv);const i=lC(r,n);return new bo(r,"signInViaPopup",e,i).executeNotNull()}class bo extends uC{constructor(e,n,r,i,a){super(e,n,i,a),this.provider=r,this.authWindow=null,this.pollId=null,bo.currentPopupAction&&bo.currentPopupAction.cancel(),bo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Oi(this.filter.length===1,"Popup operations only handle one event");const e=Yv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U4.get())};e()}}bo.currentPopupAction=null;/**
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
 */const z4="pendingRedirect",Nf=new Map;class B4 extends uC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Nf.get(this.auth._key());if(!e){try{const r=await W4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Nf.set(this.auth._key(),e)}return this.bypassAuthState||Nf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function W4(t,e){const n=K4(e),r=q4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function H4(t,e){Nf.set(t._key(),e)}function q4(t){return ki(t._redirectPersistence)}function K4(t){return Vf(z4,t.config.apiKey,t.name)}async function G4(t,e,n=!1){if($n(t.app))return Promise.reject(Vi(t));const r=Qs(t),i=lC(r,e),l=await new B4(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const Q4=10*60*1e3;class Y4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!X4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cC(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ir(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q4&&this.cachedEventUids.clear(),this.cachedEventUids.has(bT(e))}saveEventToCache(e){this.cachedEventUids.add(bT(e)),this.lastProcessedEventTime=Date.now()}}function bT(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function X4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cC(t);default:return!1}}/**
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
 */async function J4(t,e={}){return Ui(t,"GET","/v1/projects",e)}/**
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
 */const Z4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ej=/^https?/;async function tj(t){if(t.config.emulator)return;const{authorizedDomains:e}=await J4(t);for(const n of e)try{if(nj(n))return}catch{}sr(t,"unauthorized-domain")}function nj(t){const e=vy(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!ej.test(n))return!1;if(Z4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const rj=new Cc(3e4,6e4);function DT(){const t=Zr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ij(t){return new Promise((e,n)=>{var i,a,l;function r(){DT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{DT(),n(Ir(t,"network-request-failed"))},timeout:rj.get()})}if((a=(i=Zr().gapi)==null?void 0:i.iframes)!=null&&a.Iframe)e(gapi.iframes.getContext());else if((l=Zr().gapi)!=null&&l.load)r();else{const c=XF("iframefcb");return Zr()[c]=()=>{gapi.load?r():n(Ir(t,"network-request-failed"))},GA(`${YF()}?onload=${c}`).catch(h=>n(h))}}).catch(e=>{throw Mf=null,e})}let Mf=null;function sj(t){return Mf=Mf||ij(t),Mf}/**
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
 */const oj=new Cc(5e3,15e3),aj="__/auth/iframe",lj="emulator/auth/iframe",uj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hj(t){const e=t.config;Te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wv(e,lj):`https://${t.config.authDomain}/${aj}`,r={apiKey:e.apiKey,appName:t.name,v:Pl},i=cj.get(t.config.apiHost);i&&(r.eid=i);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Ic(r).slice(1)}`}async function fj(t){const e=await sj(t),n=Zr().gapi;return Te(n,t,"internal-error"),e.open({where:document.body,url:hj(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uj,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const l=Ir(t,"network-request-failed"),c=Zr().setTimeout(()=>{a(l)},oj.get());function h(){Zr().clearTimeout(c),i(r)}r.ping(h).then(h,()=>{a(l)})}))}/**
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
 */const dj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pj=500,mj=600,gj="_blank",yj="http://localhost";class VT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vj(t,e,n,r=pj,i=mj){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const h={...dj,width:r.toString(),height:i.toString(),top:a,left:l},p=fn().toLowerCase();n&&(c=UA(p)?gj:n),jA(p)&&(e=e||yj,h.scrollbars="yes");const m=Object.entries(h).reduce((w,[T,x])=>`${w}${T}=${x},`,"");if(UF(p)&&c!=="_self")return _j(e||"",c),new VT(null);const y=window.open(e||"",c,m);Te(y,t,"popup-blocked");try{y.focus()}catch{}return new VT(y)}function _j(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const wj="__/auth/handler",Ej="emulator/auth/handler",Tj=encodeURIComponent("fac");async function NT(t,e,n,r,i,a){Te(t.config.authDomain,t,"auth-domain-config-required"),Te(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pl,eventId:i};if(e instanceof Qv){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",oO(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))l[m]=y}if(e instanceof Rc){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(l.scopes=m.join(","))}t.tenantId&&(l.tid=t.tenantId);const c=l;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const h=await t._getAppCheckToken(),p=h?`#${Tj}=${encodeURIComponent(h)}`:"";return`${Sj(t)}?${Ic(c).slice(1)}${p}`}function Sj({config:t}){return t.emulator?Wv(t,Ej):`https://${t.authDomain}/${wj}`}/**
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
 */const Ag="webStorageSupport";class xj{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rC,this._completeRedirectFn=G4,this._overrideRedirectResult=H4}async _openPopup(e,n,r,i){var l;Oi((l=this.eventManagers[e._key()])==null?void 0:l.manager,"_initialize() not called before _openPopup()");const a=await NT(e,n,r,vy(),i);return vj(e,a,Yv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const a=await NT(e,n,r,vy(),i);return P4(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:a}=this.eventManagers[n];return i?Promise.resolve(i):(Oi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fj(e),r=new Y4(e);return n.register("authEvent",i=>(Te(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ag,{type:Ag},i=>{var l;const a=(l=i==null?void 0:i[0])==null?void 0:l[Ag];a!==void 0&&n(!!a),sr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=tj(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qA()||$A()||qv()}}const Ij=xj;var MT="@firebase/auth",LT="1.13.0";/**
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
 */class Aj{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Cj(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Pj(t){ml(new Bo("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:c}=r.options;Te(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:l,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:KA(t)},p=new KF(r,i,a,h);return r4(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ml(new Bo("auth-internal",e=>{const n=Qs(e.getProvider("auth").getImmediate());return(r=>new Aj(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ds(MT,LT,Cj(t)),Ds(MT,LT,"esm2020")}/**
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
 */const Rj=5*60,kj=xA("authIdTokenMaxAge")||Rj;let OT=null;const bj=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kj)return;const i=n==null?void 0:n.token;OT!==i&&(OT=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dj(t=RA()){const e=Uv(t,"auth");if(e.isInitialized())return e.getImmediate();const n=n4(t,{popupRedirectResolver:Ij,persistence:[O4,I4,rC]}),r=xA("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=bj(a.toString());w4(n,l,()=>l(n.currentUser)),_4(n,c=>l(c))}}const i=TA("auth");return i&&i4(n,`http://${i}`),n}function Vj(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}GF({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const a=Ir("internal-error");a.customData=i,n(a)},r.type="text/javascript",r.charset="UTF-8",Vj().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Pj("Browser");var FT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vs,hC;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,I){function R(){}R.prototype=I.prototype,C.F=I.prototype,C.prototype=new R,C.prototype.constructor=C,C.D=function(D,L,B){for(var V=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)V[ke-2]=arguments[ke];return I.prototype[L].apply(D,V)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(C,I,R){R||(R=0);const D=Array(16);if(typeof I=="string")for(var L=0;L<16;++L)D[L]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(L=0;L<16;++L)D[L]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=C.g[0],R=C.g[1],L=C.g[2];let B=C.g[3],V;V=I+(B^R&(L^B))+D[0]+3614090360&4294967295,I=R+(V<<7&4294967295|V>>>25),V=B+(L^I&(R^L))+D[1]+3905402710&4294967295,B=I+(V<<12&4294967295|V>>>20),V=L+(R^B&(I^R))+D[2]+606105819&4294967295,L=B+(V<<17&4294967295|V>>>15),V=R+(I^L&(B^I))+D[3]+3250441966&4294967295,R=L+(V<<22&4294967295|V>>>10),V=I+(B^R&(L^B))+D[4]+4118548399&4294967295,I=R+(V<<7&4294967295|V>>>25),V=B+(L^I&(R^L))+D[5]+1200080426&4294967295,B=I+(V<<12&4294967295|V>>>20),V=L+(R^B&(I^R))+D[6]+2821735955&4294967295,L=B+(V<<17&4294967295|V>>>15),V=R+(I^L&(B^I))+D[7]+4249261313&4294967295,R=L+(V<<22&4294967295|V>>>10),V=I+(B^R&(L^B))+D[8]+1770035416&4294967295,I=R+(V<<7&4294967295|V>>>25),V=B+(L^I&(R^L))+D[9]+2336552879&4294967295,B=I+(V<<12&4294967295|V>>>20),V=L+(R^B&(I^R))+D[10]+4294925233&4294967295,L=B+(V<<17&4294967295|V>>>15),V=R+(I^L&(B^I))+D[11]+2304563134&4294967295,R=L+(V<<22&4294967295|V>>>10),V=I+(B^R&(L^B))+D[12]+1804603682&4294967295,I=R+(V<<7&4294967295|V>>>25),V=B+(L^I&(R^L))+D[13]+4254626195&4294967295,B=I+(V<<12&4294967295|V>>>20),V=L+(R^B&(I^R))+D[14]+2792965006&4294967295,L=B+(V<<17&4294967295|V>>>15),V=R+(I^L&(B^I))+D[15]+1236535329&4294967295,R=L+(V<<22&4294967295|V>>>10),V=I+(L^B&(R^L))+D[1]+4129170786&4294967295,I=R+(V<<5&4294967295|V>>>27),V=B+(R^L&(I^R))+D[6]+3225465664&4294967295,B=I+(V<<9&4294967295|V>>>23),V=L+(I^R&(B^I))+D[11]+643717713&4294967295,L=B+(V<<14&4294967295|V>>>18),V=R+(B^I&(L^B))+D[0]+3921069994&4294967295,R=L+(V<<20&4294967295|V>>>12),V=I+(L^B&(R^L))+D[5]+3593408605&4294967295,I=R+(V<<5&4294967295|V>>>27),V=B+(R^L&(I^R))+D[10]+38016083&4294967295,B=I+(V<<9&4294967295|V>>>23),V=L+(I^R&(B^I))+D[15]+3634488961&4294967295,L=B+(V<<14&4294967295|V>>>18),V=R+(B^I&(L^B))+D[4]+3889429448&4294967295,R=L+(V<<20&4294967295|V>>>12),V=I+(L^B&(R^L))+D[9]+568446438&4294967295,I=R+(V<<5&4294967295|V>>>27),V=B+(R^L&(I^R))+D[14]+3275163606&4294967295,B=I+(V<<9&4294967295|V>>>23),V=L+(I^R&(B^I))+D[3]+4107603335&4294967295,L=B+(V<<14&4294967295|V>>>18),V=R+(B^I&(L^B))+D[8]+1163531501&4294967295,R=L+(V<<20&4294967295|V>>>12),V=I+(L^B&(R^L))+D[13]+2850285829&4294967295,I=R+(V<<5&4294967295|V>>>27),V=B+(R^L&(I^R))+D[2]+4243563512&4294967295,B=I+(V<<9&4294967295|V>>>23),V=L+(I^R&(B^I))+D[7]+1735328473&4294967295,L=B+(V<<14&4294967295|V>>>18),V=R+(B^I&(L^B))+D[12]+2368359562&4294967295,R=L+(V<<20&4294967295|V>>>12),V=I+(R^L^B)+D[5]+4294588738&4294967295,I=R+(V<<4&4294967295|V>>>28),V=B+(I^R^L)+D[8]+2272392833&4294967295,B=I+(V<<11&4294967295|V>>>21),V=L+(B^I^R)+D[11]+1839030562&4294967295,L=B+(V<<16&4294967295|V>>>16),V=R+(L^B^I)+D[14]+4259657740&4294967295,R=L+(V<<23&4294967295|V>>>9),V=I+(R^L^B)+D[1]+2763975236&4294967295,I=R+(V<<4&4294967295|V>>>28),V=B+(I^R^L)+D[4]+1272893353&4294967295,B=I+(V<<11&4294967295|V>>>21),V=L+(B^I^R)+D[7]+4139469664&4294967295,L=B+(V<<16&4294967295|V>>>16),V=R+(L^B^I)+D[10]+3200236656&4294967295,R=L+(V<<23&4294967295|V>>>9),V=I+(R^L^B)+D[13]+681279174&4294967295,I=R+(V<<4&4294967295|V>>>28),V=B+(I^R^L)+D[0]+3936430074&4294967295,B=I+(V<<11&4294967295|V>>>21),V=L+(B^I^R)+D[3]+3572445317&4294967295,L=B+(V<<16&4294967295|V>>>16),V=R+(L^B^I)+D[6]+76029189&4294967295,R=L+(V<<23&4294967295|V>>>9),V=I+(R^L^B)+D[9]+3654602809&4294967295,I=R+(V<<4&4294967295|V>>>28),V=B+(I^R^L)+D[12]+3873151461&4294967295,B=I+(V<<11&4294967295|V>>>21),V=L+(B^I^R)+D[15]+530742520&4294967295,L=B+(V<<16&4294967295|V>>>16),V=R+(L^B^I)+D[2]+3299628645&4294967295,R=L+(V<<23&4294967295|V>>>9),V=I+(L^(R|~B))+D[0]+4096336452&4294967295,I=R+(V<<6&4294967295|V>>>26),V=B+(R^(I|~L))+D[7]+1126891415&4294967295,B=I+(V<<10&4294967295|V>>>22),V=L+(I^(B|~R))+D[14]+2878612391&4294967295,L=B+(V<<15&4294967295|V>>>17),V=R+(B^(L|~I))+D[5]+4237533241&4294967295,R=L+(V<<21&4294967295|V>>>11),V=I+(L^(R|~B))+D[12]+1700485571&4294967295,I=R+(V<<6&4294967295|V>>>26),V=B+(R^(I|~L))+D[3]+2399980690&4294967295,B=I+(V<<10&4294967295|V>>>22),V=L+(I^(B|~R))+D[10]+4293915773&4294967295,L=B+(V<<15&4294967295|V>>>17),V=R+(B^(L|~I))+D[1]+2240044497&4294967295,R=L+(V<<21&4294967295|V>>>11),V=I+(L^(R|~B))+D[8]+1873313359&4294967295,I=R+(V<<6&4294967295|V>>>26),V=B+(R^(I|~L))+D[15]+4264355552&4294967295,B=I+(V<<10&4294967295|V>>>22),V=L+(I^(B|~R))+D[6]+2734768916&4294967295,L=B+(V<<15&4294967295|V>>>17),V=R+(B^(L|~I))+D[13]+1309151649&4294967295,R=L+(V<<21&4294967295|V>>>11),V=I+(L^(R|~B))+D[4]+4149444226&4294967295,I=R+(V<<6&4294967295|V>>>26),V=B+(R^(I|~L))+D[11]+3174756917&4294967295,B=I+(V<<10&4294967295|V>>>22),V=L+(I^(B|~R))+D[2]+718787259&4294967295,L=B+(V<<15&4294967295|V>>>17),V=R+(B^(L|~I))+D[9]+3951481745&4294967295,C.g[0]=C.g[0]+I&4294967295,C.g[1]=C.g[1]+(L+(V<<21&4294967295|V>>>11))&4294967295,C.g[2]=C.g[2]+L&4294967295,C.g[3]=C.g[3]+B&4294967295}r.prototype.v=function(C,I){I===void 0&&(I=C.length);const R=I-this.blockSize,D=this.C;let L=this.h,B=0;for(;B<I;){if(L==0)for(;B<=R;)i(this,C,B),B+=this.blockSize;if(typeof C=="string"){for(;B<I;)if(D[L++]=C.charCodeAt(B++),L==this.blockSize){i(this,D),L=0;break}}else for(;B<I;)if(D[L++]=C[B++],L==this.blockSize){i(this,D),L=0;break}}this.h=L,this.o+=I},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var I=1;I<C.length-8;++I)C[I]=0;I=this.o*8;for(var R=C.length-8;R<C.length;++R)C[R]=I&255,I/=256;for(this.v(C),C=Array(16),I=0,R=0;R<4;++R)for(let D=0;D<32;D+=8)C[I++]=this.g[R]>>>D&255;return C};function a(C,I){var R=c;return Object.prototype.hasOwnProperty.call(R,C)?R[C]:R[C]=I(C)}function l(C,I){this.h=I;const R=[];let D=!0;for(let L=C.length-1;L>=0;L--){const B=C[L]|0;D&&B==I||(R[L]=B,D=!1)}this.g=R}var c={};function h(C){return-128<=C&&C<128?a(C,function(I){return new l([I|0],I<0?-1:0)}):new l([C|0],C<0?-1:0)}function p(C){if(isNaN(C)||!isFinite(C))return y;if(C<0)return k(p(-C));const I=[];let R=1;for(let D=0;C>=R;D++)I[D]=C/R|0,R*=4294967296;return new l(I,0)}function m(C,I){if(C.length==0)throw Error("number format error: empty string");if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C.charAt(0)=="-")return k(m(C.substring(1),I));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=p(Math.pow(I,8));let D=y;for(let B=0;B<C.length;B+=8){var L=Math.min(8,C.length-B);const V=parseInt(C.substring(B,B+L),I);L<8?(L=p(Math.pow(I,L)),D=D.j(L).add(p(V))):(D=D.j(R),D=D.add(p(V)))}return D}var y=h(0),w=h(1),T=h(16777216);t=l.prototype,t.m=function(){if(P(this))return-k(this).m();let C=0,I=1;for(let R=0;R<this.g.length;R++){const D=this.i(R);C+=(D>=0?D:4294967296+D)*I,I*=4294967296}return C},t.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(x(this))return"0";if(P(this))return"-"+k(this).toString(C);const I=p(Math.pow(C,6));var R=this;let D="";for(;;){const L=$(R,I).g;R=b(R,L.j(I));let B=((R.g.length>0?R.g[0]:R.h)>>>0).toString(C);if(R=L,x(R))return B+D;for(;B.length<6;)B="0"+B;D=B+D}},t.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function x(C){if(C.h!=0)return!1;for(let I=0;I<C.g.length;I++)if(C.g[I]!=0)return!1;return!0}function P(C){return C.h==-1}t.l=function(C){return C=b(this,C),P(C)?-1:x(C)?0:1};function k(C){const I=C.g.length,R=[];for(let D=0;D<I;D++)R[D]=~C.g[D];return new l(R,~C.h).add(w)}t.abs=function(){return P(this)?k(this):this},t.add=function(C){const I=Math.max(this.g.length,C.g.length),R=[];let D=0;for(let L=0;L<=I;L++){let B=D+(this.i(L)&65535)+(C.i(L)&65535),V=(B>>>16)+(this.i(L)>>>16)+(C.i(L)>>>16);D=V>>>16,B&=65535,V&=65535,R[L]=V<<16|B}return new l(R,R[R.length-1]&-2147483648?-1:0)};function b(C,I){return C.add(k(I))}t.j=function(C){if(x(this)||x(C))return y;if(P(this))return P(C)?k(this).j(k(C)):k(k(this).j(C));if(P(C))return k(this.j(k(C)));if(this.l(T)<0&&C.l(T)<0)return p(this.m()*C.m());const I=this.g.length+C.g.length,R=[];for(var D=0;D<2*I;D++)R[D]=0;for(D=0;D<this.g.length;D++)for(let L=0;L<C.g.length;L++){const B=this.i(D)>>>16,V=this.i(D)&65535,ke=C.i(L)>>>16,Ge=C.i(L)&65535;R[2*D+2*L]+=V*Ge,O(R,2*D+2*L),R[2*D+2*L+1]+=B*Ge,O(R,2*D+2*L+1),R[2*D+2*L+1]+=V*ke,O(R,2*D+2*L+1),R[2*D+2*L+2]+=B*ke,O(R,2*D+2*L+2)}for(C=0;C<I;C++)R[C]=R[2*C+1]<<16|R[2*C];for(C=I;C<2*I;C++)R[C]=0;return new l(R,0)};function O(C,I){for(;(C[I]&65535)!=C[I];)C[I+1]+=C[I]>>>16,C[I]&=65535,I++}function U(C,I){this.g=C,this.h=I}function $(C,I){if(x(I))throw Error("division by zero");if(x(C))return new U(y,y);if(P(C))return I=$(k(C),I),new U(k(I.g),k(I.h));if(P(I))return I=$(C,k(I)),new U(k(I.g),I.h);if(C.g.length>30){if(P(C)||P(I))throw Error("slowDivide_ only works with positive integers.");for(var R=w,D=I;D.l(C)<=0;)R=H(R),D=H(D);var L=X(R,1),B=X(D,1);for(D=X(D,2),R=X(R,2);!x(D);){var V=B.add(D);V.l(C)<=0&&(L=L.add(R),B=V),D=X(D,1),R=X(R,1)}return I=b(C,L.j(I)),new U(L,I)}for(L=y;C.l(I)>=0;){for(R=Math.max(1,Math.floor(C.m()/I.m())),D=Math.ceil(Math.log(R)/Math.LN2),D=D<=48?1:Math.pow(2,D-48),B=p(R),V=B.j(I);P(V)||V.l(C)>0;)R-=D,B=p(R),V=B.j(I);x(B)&&(B=w),L=L.add(B),C=b(C,V)}return new U(L,C)}t.B=function(C){return $(this,C).h},t.and=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let D=0;D<I;D++)R[D]=this.i(D)&C.i(D);return new l(R,this.h&C.h)},t.or=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let D=0;D<I;D++)R[D]=this.i(D)|C.i(D);return new l(R,this.h|C.h)},t.xor=function(C){const I=Math.max(this.g.length,C.g.length),R=[];for(let D=0;D<I;D++)R[D]=this.i(D)^C.i(D);return new l(R,this.h^C.h)};function H(C){const I=C.g.length+1,R=[];for(let D=0;D<I;D++)R[D]=C.i(D)<<1|C.i(D-1)>>>31;return new l(R,C.h)}function X(C,I){const R=I>>5;I%=32;const D=C.g.length-R,L=[];for(let B=0;B<D;B++)L[B]=I>0?C.i(B+R)>>>I|C.i(B+R+1)<<32-I:C.i(B+R);return new l(L,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,hC=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=p,l.fromString=m,Vs=l}).apply(typeof FT<"u"?FT:typeof self<"u"?self:typeof window<"u"?window:{});var cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fC,$u,dC,Lf,Ty,pC,mC,gC;(function(){var t,e=Object.defineProperty;function n(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof cf=="object"&&cf];for(var _=0;_<f.length;++_){var E=f[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=n(this);function i(f,_){if(_)e:{var E=r;f=f.split(".");for(var A=0;A<f.length-1;A++){var K=f[A];if(!(K in E))break e;E=E[K]}f=f[f.length-1],A=E[f],_=_(A),_!=A&&_!=null&&e(E,f,{configurable:!0,writable:!0,value:_})}}i("Symbol.dispose",function(f){return f||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(f){return f||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(f){return f||function(_){var E=[],A;for(A in _)Object.prototype.hasOwnProperty.call(_,A)&&E.push([A,_[A]]);return E}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(f){var _=typeof f;return _=="object"&&f!=null||_=="function"}function h(f,_,E){return f.call.apply(f.bind,arguments)}function p(f,_,E){return p=h,p.apply(null,arguments)}function m(f,_){var E=Array.prototype.slice.call(arguments,1);return function(){var A=E.slice();return A.push.apply(A,arguments),f.apply(this,A)}}function y(f,_){function E(){}E.prototype=_.prototype,f.Z=_.prototype,f.prototype=new E,f.prototype.constructor=f,f.Ob=function(A,K,Y){for(var le=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)le[Pe-2]=arguments[Pe];return _.prototype[K].apply(A,le)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?f=>f&&AsyncContext.Snapshot.wrap(f):f=>f;function T(f){const _=f.length;if(_>0){const E=Array(_);for(let A=0;A<_;A++)E[A]=f[A];return E}return[]}function x(f,_){for(let A=1;A<arguments.length;A++){const K=arguments[A];var E=typeof K;if(E=E!="object"?E:K?Array.isArray(K)?"array":E:"null",E=="array"||E=="object"&&typeof K.length=="number"){E=f.length||0;const Y=K.length||0;f.length=E+Y;for(let le=0;le<Y;le++)f[E+le]=K[le]}else f.push(K)}}class P{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return this.h>0?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function k(f){l.setTimeout(()=>{throw f},0)}function b(){var f=C;let _=null;return f.g&&(_=f.g,f.g=f.g.next,f.g||(f.h=null),_.next=null),_}class O{constructor(){this.h=this.g=null}add(_,E){const A=U.get();A.set(_,E),this.h?this.h.next=A:this.g=A,this.h=A}}var U=new P(()=>new $,f=>f.reset());class ${constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let H,X=!1,C=new O,I=()=>{const f=Promise.resolve(void 0);H=()=>{f.then(R)}};function R(){for(var f;f=b();){try{f.h.call(f.g)}catch(E){k(E)}var _=U;_.j(f),_.h<100&&(_.h++,f.next=_.g,_.g=f)}X=!1}function D(){this.u=this.u,this.C=this.C}D.prototype.u=!1,D.prototype.dispose=function(){this.u||(this.u=!0,this.N())},D.prototype[Symbol.dispose]=function(){this.dispose()},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function L(f,_){this.type=f,this.g=this.target=_,this.defaultPrevented=!1}L.prototype.h=function(){this.defaultPrevented=!0};var B=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var f=!1,_=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const E=()=>{};l.addEventListener("test",E,_),l.removeEventListener("test",E,_)}catch{}return f}();function V(f){return/^[\s\xa0]*$/.test(f)}function ke(f,_){L.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f&&this.init(f,_)}y(ke,L),ke.prototype.init=function(f,_){const E=this.type=f.type,A=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;this.target=f.target||f.srcElement,this.g=_,_=f.relatedTarget,_||(E=="mouseover"?_=f.fromElement:E=="mouseout"&&(_=f.toElement)),this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=f.pointerType,this.state=f.state,this.i=f,f.defaultPrevented&&ke.Z.h.call(this)},ke.prototype.h=function(){ke.Z.h.call(this);const f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var Ge="closure_listenable_"+(Math.random()*1e6|0),Xe=0;function Je(f,_,E,A,K){this.listener=f,this.proxy=null,this.src=_,this.type=E,this.capture=!!A,this.ha=K,this.key=++Xe,this.da=this.fa=!1}function re(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function ce(f,_,E){for(const A in f)_.call(E,f[A],A,f)}function ue(f,_){for(const E in f)_.call(void 0,f[E],E,f)}function W(f){const _={};for(const E in f)_[E]=f[E];return _}const J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ae(f,_){let E,A;for(let K=1;K<arguments.length;K++){A=arguments[K];for(E in A)f[E]=A[E];for(let Y=0;Y<J.length;Y++)E=J[Y],Object.prototype.hasOwnProperty.call(A,E)&&(f[E]=A[E])}}function Ie(f){this.src=f,this.g={},this.h=0}Ie.prototype.add=function(f,_,E,A,K){const Y=f.toString();f=this.g[Y],f||(f=this.g[Y]=[],this.h++);const le=be(f,_,A,K);return le>-1?(_=f[le],E||(_.fa=!1)):(_=new Je(_,this.src,Y,!!A,K),_.fa=E,f.push(_)),_};function De(f,_){const E=_.type;if(E in f.g){var A=f.g[E],K=Array.prototype.indexOf.call(A,_,void 0),Y;(Y=K>=0)&&Array.prototype.splice.call(A,K,1),Y&&(re(_),f.g[E].length==0&&(delete f.g[E],f.h--))}}function be(f,_,E,A){for(let K=0;K<f.length;++K){const Y=f[K];if(!Y.da&&Y.listener==_&&Y.capture==!!E&&Y.ha==A)return K}return-1}var $e="closure_lm_"+(Math.random()*1e6|0),Me={};function Ue(f,_,E,A,K){if(Array.isArray(_)){for(let Y=0;Y<_.length;Y++)Ue(f,_[Y],E,A,K);return null}return E=Fl(E),f&&f[Ge]?f.J(_,E,c(A)?!!A.capture:!1,K):Vt(f,_,E,!1,A,K)}function Vt(f,_,E,A,K,Y){if(!_)throw Error("Invalid event type");const le=c(K)?!!K.capture:!!K;let Pe=na(f);if(Pe||(f[$e]=Pe=new Ie(f)),E=Pe.add(_,E,A,le,Y),E.proxy)return E;if(A=ar(),E.proxy=A,A.src=f,A.listener=E,f.addEventListener)B||(K=le),K===void 0&&(K=!1),f.addEventListener(_.toString(),A,K);else if(f.attachEvent)f.attachEvent(ta(_.toString()),A);else if(f.addListener&&f.removeListener)f.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return E}function ar(){function f(E){return _.call(f.src,f.listener,E)}const _=Uc;return f}function _n(f,_,E,A,K){if(Array.isArray(_))for(var Y=0;Y<_.length;Y++)_n(f,_[Y],E,A,K);else A=c(A)?!!A.capture:!!A,E=Fl(E),f&&f[Ge]?(f=f.i,Y=String(_).toString(),Y in f.g&&(_=f.g[Y],E=be(_,E,A,K),E>-1&&(re(_[E]),Array.prototype.splice.call(_,E,1),_.length==0&&(delete f.g[Y],f.h--)))):f&&(f=na(f))&&(_=f.g[_.toString()],f=-1,_&&(f=be(_,E,A,K)),(E=f>-1?_[f]:null)&&zi(E))}function zi(f){if(typeof f!="number"&&f&&!f.da){var _=f.src;if(_&&_[Ge])De(_.i,f);else{var E=f.type,A=f.proxy;_.removeEventListener?_.removeEventListener(E,A,f.capture):_.detachEvent?_.detachEvent(ta(E),A):_.addListener&&_.removeListener&&_.removeListener(A),(E=na(_))?(De(E,f),E.h==0&&(E.src=null,_[$e]=null)):re(f)}}}function ta(f){return f in Me?Me[f]:Me[f]="on"+f}function Uc(f,_){if(f.da)f=!0;else{_=new ke(_,this);const E=f.listener,A=f.ha||f.src;f.fa&&zi(f),f=E.call(A,_)}return f}function na(f){return f=f[$e],f instanceof Ie?f:null}var Xs="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fl(f){return typeof f=="function"?f:(f[Xs]||(f[Xs]=function(_){return f.handleEvent(_)}),f[Xs])}function It(){D.call(this),this.i=new Ie(this),this.M=this,this.G=null}y(It,D),It.prototype[Ge]=!0,It.prototype.removeEventListener=function(f,_,E,A){_n(this,f,_,E,A)};function Et(f,_){var E,A=f.G;if(A)for(E=[];A;A=A.G)E.push(A);if(f=f.M,A=_.type||_,typeof _=="string")_=new L(_,f);else if(_ instanceof L)_.target=_.target||f;else{var K=_;_=new L(A,f),Ae(_,K)}K=!0;let Y,le;if(E)for(le=E.length-1;le>=0;le--)Y=_.g=E[le],K=lr(Y,A,!0,_)&&K;if(Y=_.g=f,K=lr(Y,A,!0,_)&&K,K=lr(Y,A,!1,_)&&K,E)for(le=0;le<E.length;le++)Y=_.g=E[le],K=lr(Y,A,!1,_)&&K}It.prototype.N=function(){if(It.Z.N.call(this),this.i){var f=this.i;for(const _ in f.g){const E=f.g[_];for(let A=0;A<E.length;A++)re(E[A]);delete f.g[_],f.h--}}this.G=null},It.prototype.J=function(f,_,E,A){return this.i.add(String(f),_,!1,E,A)},It.prototype.K=function(f,_,E,A){return this.i.add(String(f),_,!0,E,A)};function lr(f,_,E,A){if(_=f.i.g[String(_)],!_)return!0;_=_.concat();let K=!0;for(let Y=0;Y<_.length;++Y){const le=_[Y];if(le&&!le.da&&le.capture==E){const Pe=le.listener,Tt=le.ha||le.src;le.fa&&De(f.i,le),K=Pe.call(Tt,A)!==!1&&K}}return K&&!A.defaultPrevented}function jl(f,_){if(typeof f!="function")if(f&&typeof f.handleEvent=="function")f=p(f.handleEvent,f);else throw Error("Invalid listener argument");return Number(_)>2147483647?-1:l.setTimeout(f,_||0)}function $l(f){f.g=jl(()=>{f.g=null,f.i&&(f.i=!1,$l(f))},f.l);const _=f.h;f.h=null,f.m.apply(null,_)}class zc extends D{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:$l(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bi(f){D.call(this),this.h=f,this.g={}}y(Bi,D);var Ul=[];function ra(f){ce(f.g,function(_,E){this.g.hasOwnProperty(E)&&zi(_)},f),f.g={}}Bi.prototype.N=function(){Bi.Z.N.call(this),ra(this)},Bi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Wi=l.JSON.stringify,Bc=l.JSON.parse,Js=class{stringify(f){return l.JSON.stringify(f,void 0)}parse(f){return l.JSON.parse(f,void 0)}};function Hi(){}function Wc(){}var qi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ia(){L.call(this,"d")}y(ia,L);function zl(){L.call(this,"c")}y(zl,L);var ur={},sa=null;function Ki(){return sa=sa||new It}ur.Ia="serverreachability";function oa(f){L.call(this,ur.Ia,f)}y(oa,L);function li(f){const _=Ki();Et(_,new oa(_))}ur.STAT_EVENT="statevent";function ui(f,_){L.call(this,ur.STAT_EVENT,f),this.stat=_}y(ui,L);function vt(f){const _=Ki();Et(_,new ui(_,f))}ur.Ja="timingevent";function Bl(f,_){L.call(this,ur.Ja,f),this.size=_}y(Bl,L);function Gi(f,_){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){f()},_)}function Qi(){this.g=!0}Qi.prototype.ua=function(){this.g=!1};function Hc(f,_,E,A,K,Y){f.info(function(){if(f.g)if(Y){var le="",Pe=Y.split("&");for(let Ze=0;Ze<Pe.length;Ze++){var Tt=Pe[Ze].split("=");if(Tt.length>1){const At=Tt[0];Tt=Tt[1];const Nn=At.split("_");le=Nn.length>=2&&Nn[1]=="type"?le+(At+"="+Tt+"&"):le+(At+"=redacted&")}}}else le=null;else le=Y;return"XMLHTTP REQ ("+A+") [attempt "+K+"]: "+_+`
`+E+`
`+le})}function qc(f,_,E,A,K,Y,le){f.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+K+"]: "+_+`
`+E+`
`+Y+" "+le})}function br(f,_,E,A){f.info(function(){return"XMLHTTP TEXT ("+_+"): "+Zs(f,E)+(A?" "+A:"")})}function Kc(f,_){f.info(function(){return"TIMEOUT: "+_})}Qi.prototype.info=function(){};function Zs(f,_){if(!f.g)return _;if(!_)return null;try{const Y=JSON.parse(_);if(Y){for(f=0;f<Y.length;f++)if(Array.isArray(Y[f])){var E=Y[f];if(!(E.length<2)){var A=E[1];if(Array.isArray(A)&&!(A.length<1)){var K=A[0];if(K!="noop"&&K!="stop"&&K!="close")for(let le=1;le<A.length;le++)A[le]=""}}}}return Wi(Y)}catch{return _}}var Yi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xi={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Gc;function ci(){}y(ci,Hi),ci.prototype.g=function(){return new XMLHttpRequest},Gc=new ci;function Dr(f){return encodeURIComponent(String(f))}function aa(f){var _=1;f=f.split(":");const E=[];for(;_>0&&f.length;)E.push(f.shift()),_--;return f.length&&E.push(f.join(":")),E}function Wn(f,_,E,A){this.j=f,this.i=_,this.l=E,this.S=A||1,this.V=new Bi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Qc}function Qc(){this.i=null,this.g="",this.h=!1}var Yc={},Wl={};function cr(f,_,E){f.M=1,f.A=fi(Hn(_)),f.u=E,f.R=!0,Hl(f,null)}function Hl(f,_){f.F=Date.now(),eo(f),f.B=Hn(f.A);var E=f.B,A=f.S;Array.isArray(A)||(A=[String(A)]),tu(E.i,"t",A),f.C=0,E=f.j.L,f.h=new Qc,f.g=oh(f.j,E?_:null,!f.u),f.P>0&&(f.O=new zc(p(f.Y,f,f.g),f.P)),_=f.V,E=f.g,A=f.ba;var K="readystatechange";Array.isArray(K)||(K&&(Ul[0]=K.toString()),K=Ul);for(let Y=0;Y<K.length;Y++){const le=Ue(E,K[Y],A||_.handleEvent,!1,_.h||_);if(!le)break;_.g[le.key]=le}_=f.J?W(f.J):{},f.u?(f.v||(f.v="POST"),_["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.B,f.v,f.u,_)):(f.v="GET",f.g.ea(f.B,f.v,null,_)),li(),Hc(f.i,f.v,f.B,f.l,f.S,f.u)}Wn.prototype.ba=function(f){f=f.target;const _=this.O;_&&jr(f)==3?_.j():this.Y(f)},Wn.prototype.Y=function(f){try{if(f==this.g)e:{const Pe=jr(this.g),Tt=this.g.ya(),Ze=this.g.ca();if(!(Pe<3)&&(Pe!=3||this.g&&(this.h.h||this.g.la()||ih(this.g)))){this.K||Pe!=4||Tt==7||(Tt==8||Ze<=0?li(3):li(2)),la(this);var _=this.g.ca();this.X=_;var E=Xc(this);if(this.o=_==200,qc(this.i,this.v,this.B,this.l,this.S,Pe,_),this.o){if(this.U&&!this.L){t:{if(this.g){var A,K=this.g;if((A=K.g?K.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(A)){var Y=A;break t}}Y=null}if(f=Y)br(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ot(this,f);else{this.o=!1,this.m=3,vt(12),hi(this),to(this);break e}}if(this.R){f=!0;let At;for(;!this.K&&this.C<E.length;)if(At=Zc(this,E),At==Wl){Pe==4&&(this.m=4,vt(14),f=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(At==Yc){this.m=4,vt(15),br(this.i,this.l,E,"[Invalid Chunk]"),f=!1;break}else br(this.i,this.l,At,null),ot(this,At);if(Jc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pe!=4||E.length!=0||this.h.h||(this.m=1,vt(16),f=!1),this.o=this.o&&f,!f)br(this.i,this.l,E,"[Invalid Chunked Response]"),hi(this),to(this);else if(E.length>0&&!this.W){this.W=!0;var le=this.j;le.g==this&&le.aa&&!le.P&&(le.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),co(le),le.P=!0,vt(11))}}else br(this.i,this.l,E,null),ot(this,E);Pe==4&&hi(this),this.o&&!this.K&&(Pe==4?va(this.j,this):(this.o=!1,eo(this)))}else ru(this.g),_==400&&E.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),hi(this),to(this)}}}catch{}finally{}};function Xc(f){if(!Jc(f))return f.g.la();const _=ih(f.g);if(_==="")return"";let E="";const A=_.length,K=jr(f.g)==4;if(!f.h.i){if(typeof TextDecoder>"u")return hi(f),to(f),"";f.h.i=new l.TextDecoder}for(let Y=0;Y<A;Y++)f.h.h=!0,E+=f.h.i.decode(_[Y],{stream:!(K&&Y==A-1)});return _.length=0,f.h.g+=E,f.C=0,f.h.g}function Jc(f){return f.g?f.v=="GET"&&f.M!=2&&f.j.Aa:!1}function Zc(f,_){var E=f.C,A=_.indexOf(`
`,E);return A==-1?Wl:(E=Number(_.substring(E,A)),isNaN(E)?Yc:(A+=1,A+E>_.length?Wl:(_=_.slice(A,A+E),f.C=A+E,_)))}Wn.prototype.cancel=function(){this.K=!0,hi(this)};function eo(f){f.T=Date.now()+f.H,ql(f,f.H)}function ql(f,_){if(f.D!=null)throw Error("WatchDog timer not null");f.D=Gi(p(f.aa,f),_)}function la(f){f.D&&(l.clearTimeout(f.D),f.D=null)}Wn.prototype.aa=function(){this.D=null;const f=Date.now();f-this.T>=0?(Kc(this.i,this.B),this.M!=2&&(li(),vt(17)),hi(this),this.m=2,to(this)):ql(this,this.T-f)};function to(f){f.j.I==0||f.K||va(f.j,f)}function hi(f){la(f);var _=f.O;_&&typeof _.dispose=="function"&&_.dispose(),f.O=null,ra(f.V),f.g&&(_=f.g,f.g=null,_.abort(),_.dispose())}function ot(f,_){try{var E=f.j;if(E.I!=0&&(E.g==f||Gl(E.h,f))){if(!f.L&&Gl(E.h,f)&&E.I==3){try{var A=E.Ba.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var K=A;if(K[0]==0){e:if(!E.v){if(E.g)if(E.g.F+3e3<f.F)ya(E),Dn(E);else break e;zr(E),vt(18)}}else E.xa=K[1],0<E.xa-E.K&&K[2]<37500&&E.F&&E.A==0&&!E.C&&(E.C=Gi(p(E.Va,E),6e3));no(E.h)<=1&&E.ta&&(E.ta=void 0)}else Vn(E,11)}else if((f.L||E.g==f)&&ya(E),!V(_))for(K=E.Ba.g.parse(_),_=0;_<K.length;_++){let Ze=K[_];const At=Ze[0];if(!(At<=E.K))if(E.K=At,Ze=Ze[1],E.I==2)if(Ze[0]=="c"){E.M=Ze[1],E.ba=Ze[2];const Nn=Ze[3];Nn!=null&&(E.ka=Nn,E.j.info("VER="+E.ka));const yi=Ze[4];yi!=null&&(E.za=yi,E.j.info("SVER="+E.za));const Br=Ze[5];Br!=null&&typeof Br=="number"&&Br>0&&(A=1.5*Br,E.O=A,E.j.info("backChannelRequestTimeoutMs_="+A)),A=E;const Wr=f.g;if(Wr){const Ea=Wr.g?Wr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ea){var Y=A.h;Y.g||Ea.indexOf("spdy")==-1&&Ea.indexOf("quic")==-1&&Ea.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(ca(Y,Y.h),Y.h=null))}if(A.G){const ou=Wr.g?Wr.g.getResponseHeader("X-HTTP-Session-Id"):null;ou&&(A.wa=ou,Ke(A.J,A.G,ou))}}E.I=3,E.l&&E.l.ra(),E.aa&&(E.T=Date.now()-f.F,E.j.info("Handshake RTT: "+E.T+"ms")),A=E;var le=f;if(A.na=su(A,A.L?A.ba:null,A.W),le.L){ro(A.h,le);var Pe=le,Tt=A.O;Tt&&(Pe.H=Tt),Pe.D&&(la(Pe),eo(Pe)),A.g=le}else rn(A);E.i.length>0&&gi(E)}else Ze[0]!="stop"&&Ze[0]!="close"||Vn(E,7);else E.I==3&&(Ze[0]=="stop"||Ze[0]=="close"?Ze[0]=="stop"?Vn(E,7):ma(E):Ze[0]!="noop"&&E.l&&E.l.qa(Ze),E.A=0)}}li(4)}catch{}}var kp=class{constructor(f,_){this.g=f,this.map=_}};function ua(f){this.l=f||10,l.PerformanceNavigationTiming?(f=l.performance.getEntriesByType("navigation"),f=f.length>0&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Kl(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function no(f){return f.h?1:f.g?f.g.size:0}function Gl(f,_){return f.h?f.h==_:f.g?f.g.has(_):!1}function ca(f,_){f.g?f.g.add(_):f.h=_}function ro(f,_){f.h&&f.h==_?f.h=null:f.g&&f.g.has(_)&&f.g.delete(_)}ua.prototype.cancel=function(){if(this.i=Rn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function Rn(f){if(f.h!=null)return f.i.concat(f.h.G);if(f.g!=null&&f.g.size!==0){let _=f.i;for(const E of f.g.values())_=_.concat(E.G);return _}return T(f.i)}var eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kn(f,_){if(f){f=f.split("&");for(let E=0;E<f.length;E++){const A=f[E].indexOf("=");let K,Y=null;A>=0?(K=f[E].substring(0,A),Y=f[E].substring(A+1)):K=f[E],_(K,Y?decodeURIComponent(Y.replace(/\+/g," ")):"")}}}function Vr(f){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let _;f instanceof Vr?(this.l=f.l,io(this,f.j),this.o=f.o,this.g=f.g,Nr(this,f.u),this.h=f.h,Ji(this,nu(f.i)),this.m=f.m):f&&(_=String(f).match(eh))?(this.l=!1,io(this,_[1]||"",!0),this.o=so(_[2]||""),this.g=so(_[3]||"",!0),Nr(this,_[4]),this.h=so(_[5]||"",!0),Ji(this,_[6]||"",!0),this.m=so(_[7]||"")):(this.l=!1,this.i=new ze(null,this.l))}Vr.prototype.toString=function(){const f=[];var _=this.j;_&&f.push(oo(_,Yl,!0),":");var E=this.g;return(E||_=="file")&&(f.push("//"),(_=this.o)&&f.push(oo(_,Yl,!0),"@"),f.push(Dr(E).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.u,E!=null&&f.push(":",String(E))),(E=this.h)&&(this.g&&E.charAt(0)!="/"&&f.push("/"),f.push(oo(E,E.charAt(0)=="/"?ao:Xl,!0))),(E=this.i.toString())&&f.push("?",E),(E=this.m)&&f.push("#",oo(E,Jl)),f.join("")},Vr.prototype.resolve=function(f){const _=Hn(this);let E=!!f.j;E?io(_,f.j):E=!!f.o,E?_.o=f.o:E=!!f.g,E?_.g=f.g:E=f.u!=null;var A=f.h;if(E)Nr(_,f.u);else if(E=!!f.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var K=_.h.lastIndexOf("/");K!=-1&&(A=_.h.slice(0,K+1)+A)}if(K=A,K==".."||K==".")A="";else if(K.indexOf("./")!=-1||K.indexOf("/.")!=-1){A=K.lastIndexOf("/",0)==0,K=K.split("/");const Y=[];for(let le=0;le<K.length;){const Pe=K[le++];Pe=="."?A&&le==K.length&&Y.push(""):Pe==".."?((Y.length>1||Y.length==1&&Y[0]!="")&&Y.pop(),A&&le==K.length&&Y.push("")):(Y.push(Pe),A=!0)}A=Y.join("/")}else A=K}return E?_.h=A:E=f.i.toString()!=="",E?Ji(_,nu(f.i)):E=!!f.m,E&&(_.m=f.m),_};function Hn(f){return new Vr(f)}function io(f,_,E){f.j=E?so(_,!0):_,f.j&&(f.j=f.j.replace(/:$/,""))}function Nr(f,_){if(_){if(_=Number(_),isNaN(_)||_<0)throw Error("Bad port number "+_);f.u=_}else f.u=null}function Ji(f,_,E){_ instanceof ze?(f.i=_,fa(f.i,f.l)):(E||(_=oo(_,bp)),f.i=new ze(_,f.l))}function Ke(f,_,E){f.i.set(_,E)}function fi(f){return Ke(f,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),f}function so(f,_){return f?_?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function oo(f,_,E){return typeof f=="string"?(f=encodeURI(f).replace(_,Ql),E&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function Ql(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var Yl=/[#\/\?@]/g,Xl=/[#\?:]/g,ao=/[#\?]/g,bp=/[#\?@]/g,Jl=/#/g;function ze(f,_){this.h=this.g=null,this.i=f||null,this.j=!!_}function Mr(f){f.g||(f.g=new Map,f.h=0,f.i&&kn(f.i,function(_,E){f.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}t=ze.prototype,t.add=function(f,_){Mr(this),this.i=null,f=Lr(this,f);let E=this.g.get(f);return E||this.g.set(f,E=[]),E.push(_),this.h+=1,this};function Zl(f,_){Mr(f),_=Lr(f,_),f.g.has(_)&&(f.i=null,f.h-=f.g.get(_).length,f.g.delete(_))}function ha(f,_){return Mr(f),_=Lr(f,_),f.g.has(_)}t.forEach=function(f,_){Mr(this),this.g.forEach(function(E,A){E.forEach(function(K){f.call(_,K,A,this)},this)},this)};function eu(f,_){Mr(f);let E=[];if(typeof _=="string")ha(f,_)&&(E=E.concat(f.g.get(Lr(f,_))));else for(f=Array.from(f.g.values()),_=0;_<f.length;_++)E=E.concat(f[_]);return E}t.set=function(f,_){return Mr(this),this.i=null,f=Lr(this,f),ha(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[_]),this.h+=1,this},t.get=function(f,_){return f?(f=eu(this,f),f.length>0?String(f[0]):_):_};function tu(f,_,E){Zl(f,_),E.length>0&&(f.i=null,f.g.set(Lr(f,_),T(E)),f.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],_=Array.from(this.g.keys());for(let A=0;A<_.length;A++){var E=_[A];const K=Dr(E);E=eu(this,E);for(let Y=0;Y<E.length;Y++){let le=K;E[Y]!==""&&(le+="="+Dr(E[Y])),f.push(le)}}return this.i=f.join("&")};function nu(f){const _=new ze;return _.i=f.i,f.g&&(_.g=new Map(f.g),_.h=f.h),_}function Lr(f,_){return _=String(_),f.j&&(_=_.toLowerCase()),_}function fa(f,_){_&&!f.j&&(Mr(f),f.i=null,f.g.forEach(function(E,A){const K=A.toLowerCase();A!=K&&(Zl(this,A),tu(this,K,E))},f)),f.j=_}function Or(f,_){const E=new Qi;if(l.Image){const A=new Image;A.onload=m(qt,E,"TestLoadImage: loaded",!0,_,A),A.onerror=m(qt,E,"TestLoadImage: error",!1,_,A),A.onabort=m(qt,E,"TestLoadImage: abort",!1,_,A),A.ontimeout=m(qt,E,"TestLoadImage: timeout",!1,_,A),l.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=f}else _(!1)}function Fr(f,_){const E=new Qi,A=new AbortController,K=setTimeout(()=>{A.abort(),qt(E,"TestPingServer: timeout",!1,_)},1e4);fetch(f,{signal:A.signal}).then(Y=>{clearTimeout(K),Y.ok?qt(E,"TestPingServer: ok",!0,_):qt(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(K),qt(E,"TestPingServer: error",!1,_)})}function qt(f,_,E,A,K){try{K&&(K.onload=null,K.onerror=null,K.onabort=null,K.ontimeout=null),A(E)}catch{}}function lo(){this.g=new Js}function di(f){this.i=f.Sb||null,this.h=f.ab||!1}y(di,Hi),di.prototype.g=function(){return new bn(this.i,this.h)};function bn(f,_){It.call(this),this.H=f,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(bn,It),t=bn.prototype,t.open=function(f,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=f,this.D=_,this.readyState=1,hr(this)},t.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const _={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};f&&(_.body=f),(this.H||l).fetch(new Request(this.D,_)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=0},t.Pa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,hr(this)),this.g&&(this.readyState=3,hr(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;th(this)}else f.text().then(this.Oa.bind(this),this.ga.bind(this))};function th(f){f.j.read().then(f.Ma.bind(f)).catch(f.ga.bind(f))}t.Ma=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var _=f.value?f.value:new Uint8Array(0);(_=this.B.decode(_,{stream:!f.done}))&&(this.response=this.responseText+=_)}f.done?Zi(this):hr(this),this.readyState==3&&th(this)}},t.Oa=function(f){this.g&&(this.response=this.responseText=f,Zi(this))},t.Na=function(f){this.g&&(this.response=f,Zi(this))},t.ga=function(){this.g&&Zi(this)};function Zi(f){f.readyState=4,f.l=null,f.j=null,f.B=null,hr(f)}t.setRequestHeader=function(f,_){this.A.append(f,_)},t.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,f.push(E[0]+": "+E[1]),E=_.next();return f.join(`\r
`)};function hr(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(bn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function nh(f){let _="";return ce(f,function(E,A){_+=A,_+=":",_+=E,_+=`\r
`}),_}function da(f,_,E){e:{for(A in E){var A=!1;break e}A=!0}A||(E=nh(E),typeof f=="string"?E!=null&&Dr(E):Ke(f,_,E))}function nt(f){It.call(this),this.headers=new Map,this.L=f||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(nt,It);var rh=/^https?$/i,Dp=["POST","PUT"];t=nt.prototype,t.Fa=function(f){this.H=f},t.ea=function(f,_,E,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);_=_?_.toUpperCase():"GET",this.D=f,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Gc.g(),this.g.onreadystatechange=w(p(this.Ca,this));try{this.B=!0,this.g.open(_,String(f),!0),this.B=!1}catch(Y){es(this,Y);return}if(f=E||"",E=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var K in A)E.set(K,A[K]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Y of A.keys())E.set(Y,A.get(Y));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(E.keys()).find(Y=>Y.toLowerCase()=="content-type"),K=l.FormData&&f instanceof l.FormData,!(Array.prototype.indexOf.call(Dp,_,void 0)>=0)||A||K||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,le]of E)this.g.setRequestHeader(Y,le);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(f),this.v=!1}catch(Y){es(this,Y)}};function es(f,_){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=_,f.o=5,ts(f),mi(f)}function ts(f){f.A||(f.A=!0,Et(f,"complete"),Et(f,"error"))}t.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=f||7,Et(this,"complete"),Et(this,"abort"),mi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mi(this,!0)),nt.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?pi(this):this.Xa())},t.Xa=function(){pi(this)};function pi(f){if(f.h&&typeof a<"u"){if(f.v&&jr(f)==4)setTimeout(f.Ca.bind(f),0);else if(Et(f,"readystatechange"),jr(f)==4){f.h=!1;try{const Y=f.ca();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var A;if(A=Y===0){let le=String(f.D).match(eh)[1]||null;!le&&l.self&&l.self.location&&(le=l.self.location.protocol.slice(0,-1)),A=!rh.test(le?le.toLowerCase():"")}E=A}if(E)Et(f,"complete"),Et(f,"success");else{f.o=6;try{var K=jr(f)>2?f.g.statusText:""}catch{K=""}f.l=K+" ["+f.ca()+"]",ts(f)}}finally{mi(f)}}}}function mi(f,_){if(f.g){f.m&&(clearTimeout(f.m),f.m=null);const E=f.g;f.g=null,_||Et(f,"ready");try{E.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function jr(f){return f.g?f.g.readyState:0}t.ca=function(){try{return jr(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(f){if(this.g){var _=this.g.responseText;return f&&_.indexOf(f)==0&&(_=_.substring(f.length)),Bc(_)}};function ih(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.F){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function ru(f){const _={};f=(f.g&&jr(f)>=2&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<f.length;A++){if(V(f[A]))continue;var E=aa(f[A]);const K=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Y=_[K]||[];_[K]=Y,Y.push(E)}ue(_,function(A){return A.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $r(f,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[f]||_}function pa(f){this.za=0,this.i=[],this.j=new Qi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$r("failFast",!1,f),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$r("baseRetryDelayMs",5e3,f),this.Za=$r("retryDelaySeedMs",1e4,f),this.Ta=$r("forwardChannelMaxRetries",2,f),this.va=$r("forwardChannelRequestTimeoutMs",2e4,f),this.ma=f&&f.xmlHttpFactory||void 0,this.Ua=f&&f.Rb||void 0,this.Aa=f&&f.useFetchStreams||!1,this.O=void 0,this.L=f&&f.supportsCrossDomainXhr||!1,this.M="",this.h=new ua(f&&f.concurrentRequestLimit),this.Ba=new lo,this.S=f&&f.fastHandshake||!1,this.R=f&&f.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=f&&f.Pb||!1,f&&f.ua&&this.j.ua(),f&&f.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&f&&f.detectBufferingProxy||!1,this.ia=void 0,f&&f.longPollingTimeout&&f.longPollingTimeout>0&&(this.ia=f.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=pa.prototype,t.ka=8,t.I=1,t.connect=function(f,_,E,A){vt(0),this.W=f,this.H=_||{},E&&A!==void 0&&(this.H.OSID=E,this.H.OAID=A),this.F=this.X,this.J=su(this,null,this.W),gi(this)};function ma(f){if(ga(f),f.I==3){var _=f.V++,E=Hn(f.J);if(Ke(E,"SID",f.M),Ke(E,"RID",_),Ke(E,"TYPE","terminate"),Ur(f,E),_=new Wn(f,f.j,_),_.M=2,_.A=fi(Hn(E)),E=!1,l.navigator&&l.navigator.sendBeacon)try{E=l.navigator.sendBeacon(_.A.toString(),"")}catch{}!E&&l.Image&&(new Image().src=_.A,E=!0),E||(_.g=oh(_.j,null),_.g.ea(_.A)),_.F=Date.now(),eo(_)}ho(f)}function Dn(f){f.g&&(co(f),f.g.cancel(),f.g=null)}function ga(f){Dn(f),f.v&&(l.clearTimeout(f.v),f.v=null),ya(f),f.h.cancel(),f.m&&(typeof f.m=="number"&&l.clearTimeout(f.m),f.m=null)}function gi(f){if(!Kl(f.h)&&!f.m){f.m=!0;var _=f.Ea;H||I(),X||(H(),X=!0),C.add(_,f),f.D=0}}function sh(f,_){return no(f.h)>=f.h.j-(f.m?1:0)?!1:f.m?(f.i=_.G.concat(f.i),!0):f.I==1||f.I==2||f.D>=(f.Sa?0:f.Ta)?!1:(f.m=Gi(p(f.Ea,f,_),_a(f,f.D)),f.D++,!0)}t.Ea=function(f){if(this.m)if(this.m=null,this.I==1){if(!f){this.V=Math.floor(Math.random()*1e5),f=this.V++;const K=new Wn(this,this.j,f);let Y=this.o;if(this.U&&(Y?(Y=W(Y),Ae(Y,this.U)):Y=this.U),this.u!==null||this.R||(K.J=Y,Y=null),this.S)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var A=this.i[E];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,_>4096){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=iu(this,K,_),E=Hn(this.J),Ke(E,"RID",f),Ke(E,"CVER",22),this.G&&Ke(E,"X-HTTP-Session-Id",this.G),Ur(this,E),Y&&(this.R?_="headers="+Dr(nh(Y))+"&"+_:this.u&&da(E,this.u,Y)),ca(this.h,K),this.Ra&&Ke(E,"TYPE","init"),this.S?(Ke(E,"$req",_),Ke(E,"SID","null"),K.U=!0,cr(K,E,null)):cr(K,E,_),this.I=2}}else this.I==3&&(f?uo(this,f):this.i.length==0||Kl(this.h)||uo(this))};function uo(f,_){var E;_?E=_.l:E=f.V++;const A=Hn(f.J);Ke(A,"SID",f.M),Ke(A,"RID",E),Ke(A,"AID",f.K),Ur(f,A),f.u&&f.o&&da(A,f.u,f.o),E=new Wn(f,f.j,E,f.D+1),f.u===null&&(E.J=f.o),_&&(f.i=_.G.concat(f.i)),_=iu(f,E,1e3),E.H=Math.round(f.va*.5)+Math.round(f.va*.5*Math.random()),ca(f.h,E),cr(E,A,_)}function Ur(f,_){f.H&&ce(f.H,function(E,A){Ke(_,A,E)}),f.l&&ce({},function(E,A){Ke(_,A,E)})}function iu(f,_,E){E=Math.min(f.i.length,E);const A=f.l?p(f.l.Ka,f.l,f):null;e:{var K=f.i;let Pe=-1;for(;;){const Tt=["count="+E];Pe==-1?E>0?(Pe=K[0].g,Tt.push("ofs="+Pe)):Pe=0:Tt.push("ofs="+Pe);let Ze=!0;for(let At=0;At<E;At++){var Y=K[At].g;const Nn=K[At].map;if(Y-=Pe,Y<0)Pe=Math.max(0,K[At].g-100),Ze=!1;else try{Y="req"+Y+"_"||"";try{var le=Nn instanceof Map?Nn:Object.entries(Nn);for(const[yi,Br]of le){let Wr=Br;c(Br)&&(Wr=Wi(Br)),Tt.push(Y+yi+"="+encodeURIComponent(Wr))}}catch(yi){throw Tt.push(Y+"type="+encodeURIComponent("_badmap")),yi}}catch{A&&A(Nn)}}if(Ze){le=Tt.join("&");break e}}le=void 0}return f=f.i.splice(0,E),_.G=f,le}function rn(f){if(!f.g&&!f.v){f.Y=1;var _=f.Da;H||I(),X||(H(),X=!0),C.add(_,f),f.A=0}}function zr(f){return f.g||f.v||f.A>=3?!1:(f.Y++,f.v=Gi(p(f.Da,f),_a(f,f.A)),f.A++,!0)}t.Da=function(){if(this.v=null,ns(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var f=4*this.T;this.j.info("BP detection timer enabled: "+f),this.B=Gi(p(this.Wa,this),f)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),Dn(this),ns(this))};function co(f){f.B!=null&&(l.clearTimeout(f.B),f.B=null)}function ns(f){f.g=new Wn(f,f.j,"rpc",f.Y),f.u===null&&(f.g.J=f.o),f.g.P=0;var _=Hn(f.na);Ke(_,"RID","rpc"),Ke(_,"SID",f.M),Ke(_,"AID",f.K),Ke(_,"CI",f.F?"0":"1"),!f.F&&f.ia&&Ke(_,"TO",f.ia),Ke(_,"TYPE","xmlhttp"),Ur(f,_),f.u&&f.o&&da(_,f.u,f.o),f.O&&(f.g.H=f.O);var E=f.g;f=f.ba,E.M=1,E.A=fi(Hn(_)),E.u=null,E.R=!0,Hl(E,f)}t.Va=function(){this.C!=null&&(this.C=null,Dn(this),zr(this),vt(19))};function ya(f){f.C!=null&&(l.clearTimeout(f.C),f.C=null)}function va(f,_){var E=null;if(f.g==_){ya(f),co(f),f.g=null;var A=2}else if(Gl(f.h,_))E=_.G,ro(f.h,_),A=1;else return;if(f.I!=0){if(_.o)if(A==1){E=_.u?_.u.length:0,_=Date.now()-_.F;var K=f.D;A=Ki(),Et(A,new Bl(A,E)),gi(f)}else rn(f);else if(K=_.m,K==3||K==0&&_.X>0||!(A==1&&sh(f,_)||A==2&&zr(f)))switch(E&&E.length>0&&(_=f.h,_.i=_.i.concat(E)),K){case 1:Vn(f,5);break;case 4:Vn(f,10);break;case 3:Vn(f,6);break;default:Vn(f,2)}}}function _a(f,_){let E=f.Qa+Math.floor(Math.random()*f.Za);return f.isActive()||(E*=2),E*_}function Vn(f,_){if(f.j.info("Error code "+_),_==2){var E=p(f.bb,f),A=f.Ua;const K=!A;A=new Vr(A||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||io(A,"https"),fi(A),K?Or(A.toString(),E):Fr(A.toString(),E)}else vt(2);f.I=0,f.l&&f.l.pa(_),ho(f),ga(f)}t.bb=function(f){f?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function ho(f){if(f.I=0,f.ja=[],f.l){const _=Rn(f.h);(_.length!=0||f.i.length!=0)&&(x(f.ja,_),x(f.ja,f.i),f.h.i.length=0,T(f.i),f.i.length=0),f.l.oa()}}function su(f,_,E){var A=E instanceof Vr?Hn(E):new Vr(E);if(A.g!="")_&&(A.g=_+"."+A.g),Nr(A,A.u);else{var K=l.location;A=K.protocol,_=_?_+"."+K.hostname:K.hostname,K=+K.port;const Y=new Vr(null);A&&io(Y,A),_&&(Y.g=_),K&&Nr(Y,K),E&&(Y.h=E),A=Y}return E=f.G,_=f.wa,E&&_&&Ke(A,E,_),Ke(A,"VER",f.ka),Ur(f,A),A}function oh(f,_,E){if(_&&!f.L)throw Error("Can't create secondary domain capable XhrIo object.");return _=f.Aa&&!f.ma?new nt(new di({ab:E})):new nt(f.ma),_.Fa(f.L),_}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ah(){}t=ah.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function wa(){}wa.prototype.g=function(f,_){return new Kt(f,_)};function Kt(f,_){It.call(this),this.g=new pa(_),this.l=f,this.h=_&&_.messageUrlParams||null,f=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(f?f["X-WebChannel-Content-Type"]=_.messageContentType:f={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.sa&&(f?f["X-WebChannel-Client-Profile"]=_.sa:f={"X-WebChannel-Client-Profile":_.sa}),this.g.U=f,(f=_&&_.Qb)&&!V(f)&&(this.g.u=f),this.A=_&&_.supportsCrossDomainXhr||!1,this.v=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!V(_)&&(this.g.G=_,f=this.h,f!==null&&_ in f&&(f=this.h,_ in f&&delete f[_])),this.j=new rs(this)}y(Kt,It),Kt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){ma(this.g)},Kt.prototype.o=function(f){var _=this.g;if(typeof f=="string"){var E={};E.__data__=f,f=E}else this.v&&(E={},E.__data__=Wi(f),f=E);_.i.push(new kp(_.Ya++,f)),_.I==3&&gi(_)},Kt.prototype.N=function(){this.g.l=null,delete this.j,ma(this.g),delete this.g,Kt.Z.N.call(this)};function lh(f){ia.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var _=f.__sm__;if(_){e:{for(const E in _){f=E;break e}f=void 0}(this.i=f)&&(f=this.i,_=_!==null&&f in _?_[f]:void 0),this.data=_}else this.data=f}y(lh,ia);function uh(){zl.call(this),this.status=1}y(uh,zl);function rs(f){this.g=f}y(rs,ah),rs.prototype.ra=function(){Et(this.g,"a")},rs.prototype.qa=function(f){Et(this.g,new lh(f))},rs.prototype.pa=function(f){Et(this.g,new uh)},rs.prototype.oa=function(){Et(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,gC=function(){return new wa},mC=function(){return Ki()},pC=ur,Ty={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Yi.NO_ERROR=0,Yi.TIMEOUT=8,Yi.HTTP_ERROR=6,Lf=Yi,Xi.COMPLETE="complete",dC=Xi,Wc.EventType=qi,qi.OPEN="a",qi.CLOSE="b",qi.ERROR="c",qi.MESSAGE="d",It.prototype.listen=It.prototype.J,$u=Wc,nt.prototype.listenOnce=nt.prototype.K,nt.prototype.getLastError=nt.prototype.Ha,nt.prototype.getLastErrorCode=nt.prototype.ya,nt.prototype.getStatus=nt.prototype.ca,nt.prototype.getResponseJson=nt.prototype.La,nt.prototype.getResponseText=nt.prototype.la,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Fa,fC=nt}).apply(typeof cf<"u"?cf:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let kl="12.12.0";function Nj(t){kl=t}/**
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
 */const qo=new jv("@firebase/firestore");function Ha(){return qo.logLevel}function de(t,...e){if(qo.logLevel<=Oe.DEBUG){const n=e.map(Jv);qo.debug(`Firestore (${kl}): ${t}`,...n)}}function Fi(t,...e){if(qo.logLevel<=Oe.ERROR){const n=e.map(Jv);qo.error(`Firestore (${kl}): ${t}`,...n)}}function Ko(t,...e){if(qo.logLevel<=Oe.WARN){const n=e.map(Jv);qo.warn(`Firestore (${kl}): ${t}`,...n)}}function Jv(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,yC(t,r,n)}function yC(t,e,n){let r=`FIRESTORE (${kl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Fi(r),new Error(r)}function Ye(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||yC(e,i,r)}function Re(t,e){return t}/**
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
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends $i{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ns{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Mj{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(cn.UNAUTHENTICATED))}shutdown(){}}class Lj{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Oj{constructor(e){this.t=e,this.currentUser=cn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ye(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,n(h)):Promise.resolve();let a=new Ns;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ns,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const h=a;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},c=h=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ns)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ye(typeof r.accessToken=="string",31837,{l:r}),new vC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new cn(e)}}class Fj{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=cn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class jj{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Fj(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(cn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $j{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$n(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ye(this.o===void 0,3512);const r=a=>{a.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,de("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const i=a=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>i(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new jT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new jT(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Uj(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Zv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Uj(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<n&&(r+=e.charAt(i[a]%62))}return r}}function Fe(t,e){return t<e?-1:t>e?1:0}function Sy(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),a=e.charAt(r);if(i!==a)return Cg(i)===Cg(a)?Fe(i,a):Cg(i)?1:-1}return Fe(t.length,e.length)}const zj=55296,Bj=57343;function Cg(t){const e=t.charCodeAt(0);return e>=zj&&e<=Bj}function yl(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const $T="__name__";class Yr{constructor(e,n,r){n===void 0?n=0:n>e.length&&Se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Yr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Yr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const a=Yr.compareSegments(e.get(i),n.get(i));if(a!==0)return a}return Fe(e.length,n.length)}static compareSegments(e,n){const r=Yr.isNumericId(e),i=Yr.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Yr.extractNumericId(e).compare(Yr.extractNumericId(n)):Sy(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vs.fromString(e.substring(4,e.length-2))}}class st extends Yr{construct(e,n,r){return new st(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new fe(Z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new st(n)}static emptyPath(){return new st([])}}const Wj=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends Yr{construct(e,n,r){return new en(e,n,r)}static isValidIdentifier(e){return Wj.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===$T}static keyField(){return new en([$T])}static fromServerFormat(e){const n=[];let r="",i=0;const a=()=>{if(r.length===0)throw new fe(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let l=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new fe(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new fe(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else c==="`"?(l=!l,i++):c!=="."||l?(r+=c,i++):(a(),i++)}if(a(),l)throw new fe(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(n)}static emptyPath(){return new en([])}}/**
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
 */function _C(t,e,n){if(!n)throw new fe(Z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Hj(t,e,n,r){if(e===!0&&r===!0)throw new fe(Z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function UT(t){if(!_e.isDocumentKey(t))throw new fe(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function zT(t){if(_e.isDocumentKey(t))throw new fe(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wC(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function cp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Se(12329,{type:typeof t})}function vd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new fe(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cp(t);throw new fe(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Dt(t,e){const n={typeString:t};return e&&(n.value=e),n}function bc(t,e){if(!wC(t))throw new fe(Z.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const l=t[r];if(i&&typeof l!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&l!==a.value){n=`Expected '${r}' field to equal '${a.value}'`;break}}if(n)throw new fe(Z.INVALID_ARGUMENT,n);return!0}/**
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
 */const BT=-62135596800,WT=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*WT);return new ct(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new fe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new fe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<BT)throw new fe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/WT}_compareTo(e){return this.seconds===e.seconds?Fe(this.nanoseconds,e.nanoseconds):Fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ct._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(bc(e,ct._jsonSchema))return new ct(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-BT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ct._jsonSchemaVersion="firestore/timestamp/1.0",ct._jsonSchema={type:Dt("string",ct._jsonSchemaVersion),seconds:Dt("number"),nanoseconds:Dt("number")};/**
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
 */const cc=-1;function qj(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new js(i,_e.empty(),e)}function Kj(t){return new js(t.readTime,t.key,cc)}class js{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new js(Ce.min(),_e.empty(),cc)}static max(){return new js(Ce.max(),_e.empty(),cc)}}function Gj(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=_e.comparator(t.documentKey,e.documentKey),n!==0?n:Fe(t.largestBatchId,e.largestBatchId))}/**
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
 */const Qj="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yj{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bl(t){if(t.code!==Z.FAILED_PRECONDITION||t.message!==Qj)throw t;de("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ee((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(n,a).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ee?n:ee.resolve(n)}catch(n){return ee.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ee.reject(n)}static resolve(e){return new ee((n,r)=>{n(e)})}static reject(e){return new ee((n,r)=>{r(e)})}static waitFor(e){return new ee((n,r)=>{let i=0,a=0,l=!1;e.forEach(c=>{++i,c.next(()=>{++a,l&&a===i&&n()},h=>r(h))}),l=!0,a===i&&n()})}static or(e){let n=ee.resolve(!1);for(const r of e)n=n.next(i=>i?ee.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,a)=>{r.push(n.call(this,i,a))}),this.waitFor(r)}static mapArray(e,n){return new ee((r,i)=>{const a=e.length,l=new Array(a);let c=0;for(let h=0;h<a;h++){const p=h;n(e[p]).next(m=>{l[p]=m,++c,c===a&&r(l)},m=>i(m))}})}static doWhile(e,n){return new ee((r,i)=>{const a=()=>{e()===!0?n().next(()=>{a()},i):r()};a()})}}function Xj(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Dl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class hp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}hp.ce=-1;/**
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
 */const e_=-1;function fp(t){return t==null}function _d(t){return t===0&&1/t==-1/0}function Jj(t){return typeof t=="number"&&Number.isInteger(t)&&!_d(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const EC="";function Zj(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=HT(e)),e=e5(t.get(n),e);return HT(e)}function e5(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const a=t.charAt(i);switch(a){case"\0":n+="";break;case EC:n+="";break;default:n+=a}}return n}function HT(t){return t+EC+""}/**
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
 */function qT(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function TC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class yt{constructor(e,n){this.comparator=e,this.root=n||Zt.EMPTY}insert(e,n){return new yt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Zt.BLACK,null,null))}remove(e){return new yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Zt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hf(this.root,e,this.comparator,!1)}getReverseIterator(){return new hf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hf(this.root,e,this.comparator,!0)}}class hf{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=n?r(e.key,n):1,n&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Zt{constructor(e,n,r,i,a){this.key=e,this.value=n,this.color=r??Zt.RED,this.left=i??Zt.EMPTY,this.right=a??Zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,a){return new Zt(e??this.key,n??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,n,r),null):a===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Zt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Zt.EMPTY=null,Zt.RED=!0,Zt.BLACK=!1;Zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,n,r,i,a){return this}insert(e,n,r){return new Zt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ot{constructor(e){this.comparator=e,this.data=new yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new KT(this.data.getIterator())}getIteratorFrom(e){return new KT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ot(this.comparator);return n.data=e,n}}class KT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Sr{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new Sr([])}unionWith(e){let n=new Ot(en.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Sr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yl(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class SC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new SC("Invalid base64 string: "+a):a}}(e);return new nn(n)}static fromUint8Array(e){const n=function(i){let a="";for(let l=0;l<i.length;++l)a+=String.fromCharCode(i[l]);return a}(e);return new nn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const t5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $s(t){if(Ye(!!t,39018),typeof t=="string"){let e=0;const n=t5.exec(t);if(Ye(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xt(t.seconds),nanos:xt(t.nanos)}}function xt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Us(t){return typeof t=="string"?nn.fromBase64String(t):nn.fromUint8Array(t)}/**
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
 */const xC="server_timestamp",IC="__type__",AC="__previous_value__",CC="__local_write_time__";function t_(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[IC])==null?void 0:r.stringValue)===xC}function dp(t){const e=t.mapValue.fields[AC];return t_(e)?dp(e):e}function hc(t){const e=$s(t.mapValue.fields[CC].timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class n5{constructor(e,n,r,i,a,l,c,h,p,m,y){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=p,this.isUsingEmulator=m,this.apiKey=y}}const wd="(default)";class fc{constructor(e,n){this.projectId=e,this.database=n||wd}static empty(){return new fc("","")}get isDefaultDatabase(){return this.database===wd}isEqual(e){return e instanceof fc&&e.projectId===this.projectId&&e.database===this.database}}function r5(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new fe(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fc(t.options.projectId,e)}/**
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
 */const PC="__type__",RC="__max__",ff={mapValue:{fields:{__type__:{stringValue:RC}}}},kC="__vector__",Ed="value";function zs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?t_(t)?4:s5(t)?9007199254740991:i5(t)?10:11:Se(28295,{value:t})}function ii(t,e){if(t===e)return!0;const n=zs(t);if(n!==zs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return hc(t).isEqual(hc(e));case 3:return function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=$s(i.timestampValue),c=$s(a.timestampValue);return l.seconds===c.seconds&&l.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,a){return Us(i.bytesValue).isEqual(Us(a.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,a){return xt(i.geoPointValue.latitude)===xt(a.geoPointValue.latitude)&&xt(i.geoPointValue.longitude)===xt(a.geoPointValue.longitude)}(t,e);case 2:return function(i,a){if("integerValue"in i&&"integerValue"in a)return xt(i.integerValue)===xt(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const l=xt(i.doubleValue),c=xt(a.doubleValue);return l===c?_d(l)===_d(c):isNaN(l)&&isNaN(c)}return!1}(t,e);case 9:return yl(t.arrayValue.values||[],e.arrayValue.values||[],ii);case 10:case 11:return function(i,a){const l=i.mapValue.fields||{},c=a.mapValue.fields||{};if(qT(l)!==qT(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!ii(l[h],c[h])))return!1;return!0}(t,e);default:return Se(52216,{left:t})}}function dc(t,e){return(t.values||[]).find(n=>ii(n,e))!==void 0}function vl(t,e){if(t===e)return 0;const n=zs(t),r=zs(e);if(n!==r)return Fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fe(t.booleanValue,e.booleanValue);case 2:return function(a,l){const c=xt(a.integerValue||a.doubleValue),h=xt(l.integerValue||l.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(t,e);case 3:return GT(t.timestampValue,e.timestampValue);case 4:return GT(hc(t),hc(e));case 5:return Sy(t.stringValue,e.stringValue);case 6:return function(a,l){const c=Us(a),h=Us(l);return c.compareTo(h)}(t.bytesValue,e.bytesValue);case 7:return function(a,l){const c=a.split("/"),h=l.split("/");for(let p=0;p<c.length&&p<h.length;p++){const m=Fe(c[p],h[p]);if(m!==0)return m}return Fe(c.length,h.length)}(t.referenceValue,e.referenceValue);case 8:return function(a,l){const c=Fe(xt(a.latitude),xt(l.latitude));return c!==0?c:Fe(xt(a.longitude),xt(l.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return QT(t.arrayValue,e.arrayValue);case 10:return function(a,l){var w,T,x,P;const c=a.fields||{},h=l.fields||{},p=(w=c[Ed])==null?void 0:w.arrayValue,m=(T=h[Ed])==null?void 0:T.arrayValue,y=Fe(((x=p==null?void 0:p.values)==null?void 0:x.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return y!==0?y:QT(p,m)}(t.mapValue,e.mapValue);case 11:return function(a,l){if(a===ff.mapValue&&l===ff.mapValue)return 0;if(a===ff.mapValue)return 1;if(l===ff.mapValue)return-1;const c=a.fields||{},h=Object.keys(c),p=l.fields||{},m=Object.keys(p);h.sort(),m.sort();for(let y=0;y<h.length&&y<m.length;++y){const w=Sy(h[y],m[y]);if(w!==0)return w;const T=vl(c[h[y]],p[m[y]]);if(T!==0)return T}return Fe(h.length,m.length)}(t.mapValue,e.mapValue);default:throw Se(23264,{he:n})}}function GT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Fe(t,e);const n=$s(t),r=$s(e),i=Fe(n.seconds,r.seconds);return i!==0?i:Fe(n.nanos,r.nanos)}function QT(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const a=vl(n[i],r[i]);if(a)return a}return Fe(n.length,r.length)}function _l(t){return xy(t)}function xy(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=$s(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Us(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return _e.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const a of n.values||[])i?i=!1:r+=",",r+=xy(a);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",a=!0;for(const l of r)a?a=!1:i+=",",i+=`${l}:${xy(n.fields[l])}`;return i+"}"}(t.mapValue):Se(61005,{value:t})}function Of(t){switch(zs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=dp(t);return e?16+Of(e):16;case 5:return 2*t.stringValue.length;case 6:return Us(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,a)=>i+Of(a),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Yo(r.fields,(a,l)=>{i+=a.length+Of(l)}),i}(t.mapValue);default:throw Se(13486,{value:t})}}function YT(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Iy(t){return!!t&&"integerValue"in t}function n_(t){return!!t&&"arrayValue"in t}function XT(t){return!!t&&"nullValue"in t}function JT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ff(t){return!!t&&"mapValue"in t}function i5(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[PC])==null?void 0:r.stringValue)===kC}function Gu(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Yo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gu(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gu(t.arrayValue.values[n]);return e}return{...t}}function s5(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===RC}/**
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
 */class Jn{constructor(e){this.value=e}static empty(){return new Jn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ff(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gu(n)}setAll(e){let n=en.emptyPath(),r={},i=[];e.forEach((l,c)=>{if(!n.isImmediateParentOf(c)){const h=this.getFieldsMap(n);this.applyChanges(h,r,i),r={},i=[],n=c.popLast()}l?r[c.lastSegment()]=Gu(l):i.push(c.lastSegment())});const a=this.getFieldsMap(n);this.applyChanges(a,r,i)}delete(e){const n=this.field(e.popLast());Ff(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ii(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ff(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yo(n,(i,a)=>e[i]=a);for(const i of r)delete e[i]}clone(){return new Jn(Gu(this.value))}}function bC(t){const e=[];return Yo(t.fields,(n,r)=>{const i=new en([n]);if(Ff(r)){const a=bC(r.mapValue).fields;if(a.length===0)e.push(i);else for(const l of a)e.push(i.child(l))}else e.push(i)}),new Sr(e)}/**
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
 */class Td{constructor(e,n){this.position=e,this.inclusive=n}}function ZT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const a=e[i],l=t.position[i];if(a.field.isKeyField()?r=_e.comparator(_e.fromName(l.referenceValue),n.key):r=vl(l,n.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function eS(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ii(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pc{constructor(e,n="asc"){this.field=e,this.dir=n}}function o5(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class DC{}class bt extends DC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new l5(e,n,r):n==="array-contains"?new h5(e,r):n==="in"?new f5(e,r):n==="not-in"?new d5(e,r):n==="array-contains-any"?new p5(e,r):new bt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new u5(e,r):new c5(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(vl(n,this.value)):n!==null&&zs(this.value)===zs(n)&&this.matchesComparison(vl(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pr extends DC{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Pr(e,n)}matches(e){return VC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function VC(t){return t.op==="and"}function NC(t){return a5(t)&&VC(t)}function a5(t){for(const e of t.filters)if(e instanceof Pr)return!1;return!0}function Ay(t){if(t instanceof bt)return t.field.canonicalString()+t.op.toString()+_l(t.value);if(NC(t))return t.filters.map(e=>Ay(e)).join(",");{const e=t.filters.map(n=>Ay(n)).join(",");return`${t.op}(${e})`}}function MC(t,e){return t instanceof bt?function(r,i){return i instanceof bt&&r.op===i.op&&r.field.isEqual(i.field)&&ii(r.value,i.value)}(t,e):t instanceof Pr?function(r,i){return i instanceof Pr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((a,l,c)=>a&&MC(l,i.filters[c]),!0):!1}(t,e):void Se(19439)}function LC(t){return t instanceof bt?function(n){return`${n.field.canonicalString()} ${n.op} ${_l(n.value)}`}(t):t instanceof Pr?function(n){return n.op.toString()+" {"+n.getFilters().map(LC).join(" ,")+"}"}(t):"Filter"}class l5 extends bt{constructor(e,n,r){super(e,n,r),this.key=_e.fromName(r.referenceValue)}matches(e){const n=_e.comparator(e.key,this.key);return this.matchesComparison(n)}}class u5 extends bt{constructor(e,n){super(e,"in",n),this.keys=OC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class c5 extends bt{constructor(e,n){super(e,"not-in",n),this.keys=OC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function OC(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>_e.fromName(r.referenceValue))}class h5 extends bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return n_(n)&&dc(n.arrayValue,this.value)}}class f5 extends bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&dc(this.value.arrayValue,n)}}class d5 extends bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(dc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!dc(this.value.arrayValue,n)}}class p5 extends bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!n_(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>dc(this.value.arrayValue,r))}}/**
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
 */class m5{constructor(e,n=null,r=[],i=[],a=null,l=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=l,this.endAt=c,this.Te=null}}function tS(t,e=null,n=[],r=[],i=null,a=null,l=null){return new m5(t,e,n,r,i,a,l)}function r_(t){const e=Re(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ay(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),fp(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_l(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_l(r)).join(",")),e.Te=n}return e.Te}function i_(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!o5(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!MC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!eS(t.startAt,e.startAt)&&eS(t.endAt,e.endAt)}function Cy(t){return _e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Vl{constructor(e,n=null,r=[],i=[],a=null,l="F",c=null,h=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=l,this.startAt=c,this.endAt=h,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function g5(t,e,n,r,i,a,l,c){return new Vl(t,e,n,r,i,a,l,c)}function FC(t){return new Vl(t)}function nS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function y5(t){return _e.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function jC(t){return t.collectionGroup!==null}function Qu(t){const e=Re(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const a of e.explicitOrderBy)e.Ee.push(a),n.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let c=new Ot(en.comparator);return l.filters.forEach(h=>{h.getFlattenedFilters().forEach(p=>{p.isInequality()&&(c=c.add(p.field))})}),c})(e).forEach(a=>{n.has(a.canonicalString())||a.isKeyField()||e.Ee.push(new pc(a,r))}),n.has(en.keyField().canonicalString())||e.Ee.push(new pc(en.keyField(),r))}return e.Ee}function ei(t){const e=Re(t);return e.Ie||(e.Ie=v5(e,Qu(t))),e.Ie}function v5(t,e){if(t.limitType==="F")return tS(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const a=i.dir==="desc"?"asc":"desc";return new pc(i.field,a)});const n=t.endAt?new Td(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Td(t.startAt.position,t.startAt.inclusive):null;return tS(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Py(t,e){const n=t.filters.concat([e]);return new Vl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function _5(t,e){const n=t.explicitOrderBy.concat([e]);return new Vl(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function Ry(t,e,n){return new Vl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pp(t,e){return i_(ei(t),ei(e))&&t.limitType===e.limitType}function $C(t){return`${r_(ei(t))}|lt:${t.limitType}`}function qa(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>LC(i)).join(", ")}]`),fp(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(l){return`${l.field.canonicalString()} (${l.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_l(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_l(i)).join(",")),`Target(${r})`}(ei(t))}; limitType=${t.limitType})`}function mp(t,e){return e.isFoundDocument()&&function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):_e.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(t,e)&&function(r,i){for(const a of Qu(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(l,c,h){const p=ZT(l,c,h);return l.inclusive?p<=0:p<0}(r.startAt,Qu(r),i)||r.endAt&&!function(l,c,h){const p=ZT(l,c,h);return l.inclusive?p>=0:p>0}(r.endAt,Qu(r),i))}(t,e)}function w5(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function UC(t){return(e,n)=>{let r=!1;for(const i of Qu(t)){const a=E5(i,e,n);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function E5(t,e,n){const r=t.field.isKeyField()?_e.comparator(e.key,n.key):function(a,l,c){const h=l.data.field(a),p=c.data.field(a);return h!==null&&p!==null?vl(h,p):Se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Se(19790,{direction:t.dir})}}/**
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
 */class Xo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yo(this.inner,(n,r)=>{for(const[i,a]of r)e(i,a)})}isEmpty(){return TC(this.inner)}size(){return this.innerSize}}/**
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
 */const T5=new yt(_e.comparator);function ji(){return T5}const zC=new yt(_e.comparator);function Uu(...t){let e=zC;for(const n of t)e=e.insert(n.key,n);return e}function BC(t){let e=zC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Do(){return Yu()}function WC(){return Yu()}function Yu(){return new Xo(t=>t.toString(),(t,e)=>t.isEqual(e))}const S5=new yt(_e.comparator),x5=new Ot(_e.comparator);function je(...t){let e=x5;for(const n of t)e=e.add(n);return e}const I5=new Ot(Fe);function A5(){return I5}/**
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
 */function s_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_d(e)?"-0":e}}function HC(t){return{integerValue:""+t}}function C5(t,e){return Jj(e)?HC(e):s_(t,e)}/**
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
 */class gp{constructor(){this._=void 0}}function P5(t,e,n){return t instanceof Sd?function(i,a){const l={fields:{[IC]:{stringValue:xC},[CC]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&t_(a)&&(a=dp(a)),a&&(l.fields[AC]=a),{mapValue:l}}(n,e):t instanceof mc?KC(t,e):t instanceof gc?GC(t,e):function(i,a){const l=qC(i,a),c=rS(l)+rS(i.Ae);return Iy(l)&&Iy(i.Ae)?HC(c):s_(i.serializer,c)}(t,e)}function R5(t,e,n){return t instanceof mc?KC(t,e):t instanceof gc?GC(t,e):n}function qC(t,e){return t instanceof xd?function(r){return Iy(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class Sd extends gp{}class mc extends gp{constructor(e){super(),this.elements=e}}function KC(t,e){const n=QC(e);for(const r of t.elements)n.some(i=>ii(i,r))||n.push(r);return{arrayValue:{values:n}}}class gc extends gp{constructor(e){super(),this.elements=e}}function GC(t,e){let n=QC(e);for(const r of t.elements)n=n.filter(i=>!ii(i,r));return{arrayValue:{values:n}}}class xd extends gp{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function rS(t){return xt(t.integerValue||t.doubleValue)}function QC(t){return n_(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function k5(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof mc&&i instanceof mc||r instanceof gc&&i instanceof gc?yl(r.elements,i.elements,ii):r instanceof xd&&i instanceof xd?ii(r.Ae,i.Ae):r instanceof Sd&&i instanceof Sd}(t.transform,e.transform)}class b5{constructor(e,n){this.version=e,this.transformResults=n}}class Ni{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ni}static exists(e){return new Ni(void 0,e)}static updateTime(e){return new Ni(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jf(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yp{}function YC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new JC(t.key,Ni.none()):new Dc(t.key,t.data,Ni.none());{const n=t.data,r=Jn.empty();let i=new Ot(en.comparator);for(let a of e.fields)if(!i.has(a)){let l=n.field(a);l===null&&a.length>1&&(a=a.popLast(),l=n.field(a)),l===null?r.delete(a):r.set(a,l),i=i.add(a)}return new Jo(t.key,r,new Sr(i.toArray()),Ni.none())}}function D5(t,e,n){t instanceof Dc?function(i,a,l){const c=i.value.clone(),h=sS(i.fieldTransforms,a,l.transformResults);c.setAll(h),a.convertToFoundDocument(l.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Jo?function(i,a,l){if(!jf(i.precondition,a))return void a.convertToUnknownDocument(l.version);const c=sS(i.fieldTransforms,a,l.transformResults),h=a.data;h.setAll(XC(i)),h.setAll(c),a.convertToFoundDocument(l.version,h).setHasCommittedMutations()}(t,e,n):function(i,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()}(0,e,n)}function Xu(t,e,n,r){return t instanceof Dc?function(a,l,c,h){if(!jf(a.precondition,l))return c;const p=a.value.clone(),m=oS(a.fieldTransforms,h,l);return p.setAll(m),l.convertToFoundDocument(l.version,p).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jo?function(a,l,c,h){if(!jf(a.precondition,l))return c;const p=oS(a.fieldTransforms,h,l),m=l.data;return m.setAll(XC(a)),m.setAll(p),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),c===null?null:c.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(a,l,c){return jf(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):c}(t,e,n)}function V5(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),a=qC(r.transform,i||null);a!=null&&(n===null&&(n=Jn.empty()),n.set(r.field,a))}return n||null}function iS(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&yl(r,i,(a,l)=>k5(a,l))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Dc extends yp{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jo extends yp{constructor(e,n,r,i,a=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function XC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sS(t,e,n){const r=new Map;Ye(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const a=t[i],l=a.transform,c=e.data.field(a.field);r.set(a.field,R5(l,c,n[i]))}return r}function oS(t,e,n){const r=new Map;for(const i of t){const a=i.transform,l=n.data.field(i.field);r.set(i.field,P5(a,l,e))}return r}class JC extends yp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class N5 extends yp{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class M5{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&D5(a,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xu(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xu(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=WC();return this.mutations.forEach(i=>{const a=e.get(i.key),l=a.overlayedDocument;let c=this.applyToLocalView(l,a.mutatedFields);c=n.has(i.key)?null:c;const h=YC(l,c);h!==null&&r.set(i.key,h),l.isValidDocument()||l.convertToNoDocument(Ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),je())}isEqual(e){return this.batchId===e.batchId&&yl(this.mutations,e.mutations,(n,r)=>iS(n,r))&&yl(this.baseMutations,e.baseMutations,(n,r)=>iS(n,r))}}class o_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ye(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return S5}();const a=e.mutations;for(let l=0;l<a.length;l++)i=i.insert(a[l].key,r[l].version);return new o_(e,n,r,i)}}/**
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
 */let L5=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class O5{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Pt,Be;function F5(t){switch(t){case Z.OK:return Se(64938);case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0;default:return Se(15467,{code:t})}}function ZC(t){if(t===void 0)return Fi("GRPC error has no .code"),Z.UNKNOWN;switch(t){case Pt.OK:return Z.OK;case Pt.CANCELLED:return Z.CANCELLED;case Pt.UNKNOWN:return Z.UNKNOWN;case Pt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case Pt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case Pt.INTERNAL:return Z.INTERNAL;case Pt.UNAVAILABLE:return Z.UNAVAILABLE;case Pt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case Pt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case Pt.NOT_FOUND:return Z.NOT_FOUND;case Pt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case Pt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case Pt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case Pt.ABORTED:return Z.ABORTED;case Pt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case Pt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case Pt.DATA_LOSS:return Z.DATA_LOSS;default:return Se(39323,{code:t})}}(Be=Pt||(Pt={}))[Be.OK=0]="OK",Be[Be.CANCELLED=1]="CANCELLED",Be[Be.UNKNOWN=2]="UNKNOWN",Be[Be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Be[Be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Be[Be.NOT_FOUND=5]="NOT_FOUND",Be[Be.ALREADY_EXISTS=6]="ALREADY_EXISTS",Be[Be.PERMISSION_DENIED=7]="PERMISSION_DENIED",Be[Be.UNAUTHENTICATED=16]="UNAUTHENTICATED",Be[Be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Be[Be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Be[Be.ABORTED=10]="ABORTED",Be[Be.OUT_OF_RANGE=11]="OUT_OF_RANGE",Be[Be.UNIMPLEMENTED=12]="UNIMPLEMENTED",Be[Be.INTERNAL=13]="INTERNAL",Be[Be.UNAVAILABLE=14]="UNAVAILABLE",Be[Be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function j5(){return new TextEncoder}/**
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
 */const $5=new Vs([4294967295,4294967295],0);function aS(t){const e=j5().encode(t),n=new hC;return n.update(e),new Uint8Array(n.digest())}function lS(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Vs([n,r],0),new Vs([i,a],0)]}class a_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zu(`Invalid padding: ${n}`);if(r<0)throw new zu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zu(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zu(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Vs.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(Vs.fromNumber(r)));return i.compare($5)===1&&(i=new Vs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=aS(e),[r,i]=lS(n);for(let a=0;a<this.hashCount;a++){const l=this.ye(r,i,a);if(!this.we(l))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new a_(a,i,n);return r.forEach(c=>l.insert(c)),l}insert(e){if(this.ge===0)return;const n=aS(e),[r,i]=lS(n);for(let a=0;a<this.hashCount;a++){const l=this.ye(r,i,a);this.Se(l)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class zu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class vp{constructor(e,n,r,i,a){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Vc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vp(Ce.min(),i,new yt(Fe),ji(),je())}}class Vc{constructor(e,n,r,i,a){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vc(r,n,je(),je(),je())}}/**
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
 */class $f{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class eP{constructor(e,n){this.targetId=e,this.Ce=n}}class tP{constructor(e,n,r=nn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class uS{constructor(){this.ve=0,this.Fe=cS(),this.Me=nn.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=je(),n=je(),r=je();return this.Fe.forEach((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Se(38017,{changeType:a})}}),new Vc(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=cS()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class U5{constructor(e){this.Ge=e,this.ze=new Map,this.je=ji(),this.Je=df(),this.He=df(),this.Ze=new yt(Fe)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const a=i.target;if(Cy(a))if(r===0){const l=new _e(a.path);this.et(n,l,hn.newNoDocument(l,Ce.min()))}else Ye(r===1,20013,{expectedCount:r});else{const l=this._t(n);if(l!==r){const c=this.ut(e),h=c?this.ct(c,e,l):1;if(h!==0){this.it(n);const p=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,p)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=n;let l,c;try{l=Us(r).toUint8Array()}catch(h){if(h instanceof SC)return Ko("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new a_(l,i,a)}catch(h){return Ko(h instanceof zu?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(a=>{const l=this.Ge.ht(),c=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(c)||(this.et(n,a,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((a,l)=>{const c=this.ot(l);if(c){if(a.current&&Cy(c.target)){const h=new _e(c.target.path);this.Et(h).has(l)||this.It(l,h)||this.et(l,h,hn.newNoDocument(h,e))}a.Be&&(n.set(l,a.ke()),a.qe())}});let r=je();this.He.forEach((a,l)=>{let c=!0;l.forEachWhile(h=>{const p=this.ot(h);return!p||p.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(a))}),this.je.forEach((a,l)=>l.setReadTime(e));const i=new vp(e,n,this.Ze,this.je,r);return this.je=ji(),this.Je=df(),this.He=df(),this.Ze=new yt(Fe),i}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.It(e,n)?i.Ke(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new uS,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new Ot(Fe),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ot(Fe),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||de("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new uS),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function df(){return new yt(_e.comparator)}function cS(){return new yt(_e.comparator)}const z5={asc:"ASCENDING",desc:"DESCENDING"},B5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},W5={and:"AND",or:"OR"};class H5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ky(t,e){return t.useProto3Json||fp(e)?e:{value:e}}function Id(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nP(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function q5(t,e){return Id(t,e.toTimestamp())}function ti(t){return Ye(!!t,49232),Ce.fromTimestamp(function(n){const r=$s(n);return new ct(r.seconds,r.nanos)}(t))}function l_(t,e){return by(t,e).canonicalString()}function by(t,e){const n=function(i){return new st(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function rP(t){const e=st.fromString(t);return Ye(lP(e),10190,{key:e.toString()}),e}function Dy(t,e){return l_(t.databaseId,e.path)}function Pg(t,e){const n=rP(e);if(n.get(1)!==t.databaseId.projectId)throw new fe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new fe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new _e(sP(n))}function iP(t,e){return l_(t.databaseId,e)}function K5(t){const e=rP(t);return e.length===4?st.emptyPath():sP(e)}function Vy(t){return new st(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sP(t){return Ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function hS(t,e,n){return{name:Dy(t,e),fields:n.value.mapValue.fields}}function G5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:Se(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=function(p,m){return p.useProto3Json?(Ye(m===void 0||typeof m=="string",58123),nn.fromBase64String(m||"")):(Ye(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),nn.fromUint8Array(m||new Uint8Array))}(t,e.targetChange.resumeToken),l=e.targetChange.cause,c=l&&function(p){const m=p.code===void 0?Z.UNKNOWN:ZC(p.code);return new fe(m,p.message||"")}(l);n=new tP(r,i,a,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pg(t,r.document.name),a=ti(r.document.updateTime),l=r.document.createTime?ti(r.document.createTime):Ce.min(),c=new Jn({mapValue:{fields:r.document.fields}}),h=hn.newFoundDocument(i,a,l,c),p=r.targetIds||[],m=r.removedTargetIds||[];n=new $f(p,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pg(t,r.document),a=r.readTime?ti(r.readTime):Ce.min(),l=hn.newNoDocument(i,a),c=r.removedTargetIds||[];n=new $f([],c,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pg(t,r.document),a=r.removedTargetIds||[];n=new $f([],a,i,null)}else{if(!("filter"in e))return Se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,l=new O5(i,a),c=r.targetId;n=new eP(c,l)}}return n}function Q5(t,e){let n;if(e instanceof Dc)n={update:hS(t,e.key,e.value)};else if(e instanceof JC)n={delete:Dy(t,e.key)};else if(e instanceof Jo)n={update:hS(t,e.key,e.data),updateMask:i$(e.fieldMask)};else{if(!(e instanceof N5))return Se(16599,{dt:e.type});n={verify:Dy(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(a,l){const c=l.transform;if(c instanceof Sd)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mc)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gc)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof xd)return{fieldPath:l.field.canonicalString(),increment:c.Ae};throw Se(20930,{transform:l.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,a){return a.updateTime!==void 0?{updateTime:q5(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Se(27497)}(t,e.precondition)),n}function Y5(t,e){return t&&t.length>0?(Ye(e!==void 0,14353),t.map(n=>function(i,a){let l=i.updateTime?ti(i.updateTime):ti(a);return l.isEqual(Ce.min())&&(l=ti(a)),new b5(l,i.transformResults||[])}(n,e))):[]}function X5(t,e){return{documents:[iP(t,e.path)]}}function J5(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=iP(t,i);const a=function(p){if(p.length!==0)return aP(Pr.create(p,"and"))}(e.filters);a&&(n.structuredQuery.where=a);const l=function(p){if(p.length!==0)return p.map(m=>function(w){return{field:Ka(w.field),direction:t$(w.dir)}}(m))}(e.orderBy);l&&(n.structuredQuery.orderBy=l);const c=ky(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{ft:n,parent:i}}function Z5(t){let e=K5(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ye(r===1,65062);const m=n.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let a=[];n.where&&(a=function(y){const w=oP(y);return w instanceof Pr&&NC(w)?w.getFilters():[w]}(n.where));let l=[];n.orderBy&&(l=function(y){return y.map(w=>function(x){return new pc(Ga(x.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(n.orderBy));let c=null;n.limit&&(c=function(y){let w;return w=typeof y=="object"?y.value:y,fp(w)?null:w}(n.limit));let h=null;n.startAt&&(h=function(y){const w=!!y.before,T=y.values||[];return new Td(T,w)}(n.startAt));let p=null;return n.endAt&&(p=function(y){const w=!y.before,T=y.values||[];return new Td(T,w)}(n.endAt)),g5(e,i,l,a,c,"F",h,p)}function e$(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function oP(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ga(n.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ga(n.unaryFilter.field);return bt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ga(n.unaryFilter.field);return bt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Ga(n.unaryFilter.field);return bt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}}(t):t.fieldFilter!==void 0?function(n){return bt.create(Ga(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Pr.create(n.compositeFilter.filters.map(r=>oP(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Se(1026)}}(n.compositeFilter.op))}(t):Se(30097,{filter:t})}function t$(t){return z5[t]}function n$(t){return B5[t]}function r$(t){return W5[t]}function Ka(t){return{fieldPath:t.canonicalString()}}function Ga(t){return en.fromServerFormat(t.fieldPath)}function aP(t){return t instanceof bt?function(n){if(n.op==="=="){if(JT(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NAN"}};if(XT(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(JT(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NOT_NAN"}};if(XT(n.value))return{unaryFilter:{field:Ka(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ka(n.field),op:n$(n.op),value:n.value}}}(t):t instanceof Pr?function(n){const r=n.getFilters().map(i=>aP(i));return r.length===1?r[0]:{compositeFilter:{op:r$(n.op),filters:r}}}(t):Se(54877,{filter:t})}function i$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lP(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function uP(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class s${constructor(e){this.yt=e}}function o$(t){const e=Z5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ry(e,e.limit,"L"):e}/**
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
 */class a${constructor(){this.bn=new l$}addToCollectionParentIndex(e,n){return this.bn.add(n),ee.resolve()}getCollectionParents(e,n){return ee.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return ee.resolve()}deleteFieldIndex(e,n){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,n){return ee.resolve()}getDocumentsMatchingTarget(e,n){return ee.resolve(null)}getIndexType(e,n){return ee.resolve(0)}getFieldIndexes(e,n){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,n){return ee.resolve(js.min())}getMinOffsetFromCollectionGroup(e,n){return ee.resolve(js.min())}updateCollectionGroup(e,n,r){return ee.resolve()}updateIndexEntries(e,n){return ee.resolve()}}class l${constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ot(st.comparator),a=!i.has(r);return this.index[n]=i.add(r),a}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ot(st.comparator)).toArray()}}/**
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
 */const fS={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},cP=41943040;class An{static withCacheSize(e){return new An(e,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */An.DEFAULT_COLLECTION_PERCENTILE=10,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,An.DEFAULT=new An(cP,An.DEFAULT_COLLECTION_PERCENTILE,An.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),An.DISABLED=new An(-1,0,0);/**
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
 */class wl{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new wl(0)}static ar(){return new wl(-1)}}/**
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
 */const dS="LruGarbageCollector",u$=1048576;function pS([t,e],[n,r]){const i=Fe(t,n);return i===0?Fe(e,r):i}class c${constructor(e){this.Pr=e,this.buffer=new Ot(pS),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();pS(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class h${constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){de(dS,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Dl(n)?de(dS,"Ignoring IndexedDB error during garbage collection: ",n):await bl(n)}await this.Ar(3e5)})}}class f${constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return ee.resolve(hp.ce);const r=new c$(n);return this.Vr.forEachTarget(e,i=>r.Ir(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Ir(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(fS)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fS):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,a,l,c,h,p;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(y=>(y>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,l=Date.now(),this.nthSequenceNumber(e,i))).next(y=>(r=y,c=Date.now(),this.removeTargets(e,r,n))).next(y=>(a=y,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(y=>(p=Date.now(),Ha()<=Oe.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-m}ms
	Determined least recently used ${i} in `+(c-l)+`ms
	Removed ${a} targets in `+(h-c)+`ms
	Removed ${y} documents in `+(p-h)+`ms
Total Duration: ${p-m}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:y})))}}function d$(t,e){return new f$(t,e)}/**
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
 */class p${constructor(){this.changes=new Xo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?ee.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class m${constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class g${constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Xu(r.mutation,i,Sr.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,je()).next(()=>r))}getLocalViewOfDocuments(e,n,r=je()){const i=Do();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(a=>{let l=Uu();return a.forEach((c,h)=>{l=l.insert(c,h.overlayedDocument)}),l}))}getOverlayedDocuments(e,n){const r=Do();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,je()))}populateOverlays(e,n,r){const i=[];return r.forEach(a=>{n.has(a)||i.push(a)}),this.documentOverlayCache.getOverlays(e,i).next(a=>{a.forEach((l,c)=>{n.set(l,c)})})}computeViews(e,n,r,i){let a=ji();const l=Yu(),c=function(){return Yu()}();return n.forEach((h,p)=>{const m=r.get(p.key);i.has(p.key)&&(m===void 0||m.mutation instanceof Jo)?a=a.insert(p.key,p):m!==void 0?(l.set(p.key,m.mutation.getFieldMask()),Xu(m.mutation,p,m.mutation.getFieldMask(),ct.now())):l.set(p.key,Sr.empty())}),this.recalculateAndSaveOverlays(e,a).next(h=>(h.forEach((p,m)=>l.set(p,m)),n.forEach((p,m)=>c.set(p,new m$(m,l.get(p)??null))),c))}recalculateAndSaveOverlays(e,n){const r=Yu();let i=new yt((l,c)=>l-c),a=je();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(l=>{for(const c of l)c.keys().forEach(h=>{const p=n.get(h);if(p===null)return;let m=r.get(h)||Sr.empty();m=c.applyToLocalView(p,m),r.set(h,m);const y=(i.get(c.batchId)||je()).add(h);i=i.insert(c.batchId,y)})}).next(()=>{const l=[],c=i.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),p=h.key,m=h.value,y=WC();m.forEach(w=>{if(!a.has(w)){const T=YC(n.get(w),r.get(w));T!==null&&y.set(w,T),a=a.add(w)}}),l.push(this.documentOverlayCache.saveOverlays(e,p,y))}return ee.waitFor(l)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return y5(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(a=>{const l=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-a.size):ee.resolve(Do());let c=cc,h=a;return l.next(p=>ee.forEach(p,(m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),a.get(m)?ee.resolve():this.remoteDocumentCache.getEntry(e,m).next(w=>{h=h.insert(m,w)}))).next(()=>this.populateOverlays(e,p,a)).next(()=>this.computeViews(e,h,p,je())).next(m=>({batchId:c,changes:BC(m)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new _e(n)).next(r=>{let i=Uu();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const a=n.collectionGroup;let l=Uu();return this.indexManager.getCollectionParents(e,a).next(c=>ee.forEach(c,h=>{const p=function(y,w){return new Vl(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,h.child(a));return this.getDocumentsMatchingCollectionQuery(e,p,r,i).next(m=>{m.forEach((y,w)=>{l=l.insert(y,w)})})}).next(()=>l))}getDocumentsMatchingCollectionQuery(e,n,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,a,i))).next(l=>{a.forEach((h,p)=>{const m=p.getKey();l.get(m)===null&&(l=l.insert(m,hn.newInvalidDocument(m)))});let c=Uu();return l.forEach((h,p)=>{const m=a.get(h);m!==void 0&&Xu(m.mutation,p,Sr.empty(),ct.now()),mp(n,p)&&(c=c.insert(h,p))}),c})}}/**
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
 */class y${constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return ee.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ti(i.createTime)}}(n)),ee.resolve()}getNamedQuery(e,n){return ee.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:o$(i.bundledQuery),readTime:ti(i.readTime)}}(n)),ee.resolve()}}/**
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
 */class v${constructor(){this.overlays=new yt(_e.comparator),this.Lr=new Map}getOverlay(e,n){return ee.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Do();return ee.forEach(n,i=>this.getOverlay(e,i).next(a=>{a!==null&&r.set(i,a)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,a)=>{this.St(e,n,a)}),ee.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(a=>this.overlays=this.overlays.remove(a)),this.Lr.delete(r)),ee.resolve()}getOverlaysForCollection(e,n,r){const i=Do(),a=n.length+1,l=new _e(n.child("")),c=this.overlays.getIteratorFrom(l);for(;c.hasNext();){const h=c.getNext().value,p=h.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===a&&h.largestBatchId>r&&i.set(h.getKey(),h)}return ee.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let a=new yt((p,m)=>p-m);const l=this.overlays.getIterator();for(;l.hasNext();){const p=l.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>r){let m=a.get(p.largestBatchId);m===null&&(m=Do(),a=a.insert(p.largestBatchId,m)),m.set(p.getKey(),p)}}const c=Do(),h=a.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((p,m)=>c.set(p,m)),!(c.size()>=i)););return ee.resolve(c)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new L5(n,r));let a=this.Lr.get(n);a===void 0&&(a=je(),this.Lr.set(n,a)),this.Lr.set(n,a.add(r.key))}}/**
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
 */class _${constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,ee.resolve()}}/**
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
 */class w${constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ot(zt.qr)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const a=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new M5(a,n,r,i);this.mutationQueue.push(l);for(const c of i)this.Hr=this.Hr.add(new zt(c.key,a)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return ee.resolve(l)}lookupMutationBatch(e,n){return ee.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),a=i<0?0:i;return ee.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?e_:this.Yn-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new zt(n,0),i=new zt(n,Number.POSITIVE_INFINITY),a=[];return this.Hr.forEachInRange([r,i],l=>{const c=this.Zr(l.Jr);a.push(c)}),ee.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ot(Fe);return n.forEach(i=>{const a=new zt(i,0),l=new zt(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([a,l],c=>{r=r.add(c.Jr)})}),ee.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let a=r;_e.isDocumentKey(a)||(a=a.child(""));const l=new zt(new _e(a),0);let c=new Ot(Fe);return this.Hr.forEachWhile(h=>{const p=h.key.path;return!!r.isPrefixOf(p)&&(p.length===i&&(c=c.add(h.Jr)),!0)},l),ee.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ye(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return ee.forEach(n.mutations,i=>{const a=new zt(i.key,n.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new zt(n,0),i=this.Hr.firstAfterOrEqual(r);return ee.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class E${constructor(e){this.ti=e,this.docs=function(){return new yt(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),a=i?i.size:0,l=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return ee.resolve(r?r.document.mutableCopy():hn.newInvalidDocument(n))}getEntries(e,n){let r=ji();return n.forEach(i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():hn.newInvalidDocument(i))}),ee.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let a=ji();const l=n.path,c=new _e(l.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:p,value:{document:m}}=h.getNext();if(!l.isPrefixOf(p.path))break;p.path.length>l.length+1||Gj(Kj(m),r)<=0||(i.has(m.key)||mp(n,m))&&(a=a.insert(m.key,m.mutableCopy()))}return ee.resolve(a)}getAllFromCollectionGroup(e,n,r,i){Se(9500)}ni(e,n){return ee.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new T$(this)}getSize(e){return ee.resolve(this.size)}}class T$ extends p${constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),ee.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class S${constructor(e){this.persistence=e,this.ri=new Xo(n=>r_(n),i_),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.ii=0,this.si=new u_,this.targetCount=0,this.oi=wl._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),ee.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new wl(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,ee.resolve()}updateTargetData(e,n){return this.lr(n),ee.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,n,r){let i=0;const a=[];return this.ri.forEach((l,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(l),a.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),ee.waitFor(a).next(()=>i)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return ee.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),ee.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,a=[];return i&&n.forEach(l=>{a.push(i.markPotentiallyOrphaned(e,l))}),ee.waitFor(a)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),ee.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return ee.resolve(r)}containsKey(e,n){return ee.resolve(this.si.containsKey(n))}}/**
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
 */class hP{constructor(e,n){this._i={},this.overlays={},this.ai=new hp(0),this.ui=!1,this.ui=!0,this.ci=new _$,this.referenceDelegate=e(this),this.li=new S$(this),this.indexManager=new a$,this.remoteDocumentCache=function(i){return new E$(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new s$(n),this.Pi=new y$(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new v$,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new w$(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){de("MemoryPersistence","Starting transaction:",e);const i=new x$(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(a=>this.referenceDelegate.Ei(i).next(()=>a)).toPromise().then(a=>(i.raiseOnCommittedEvent(),a))}Ii(e,n){return ee.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class x$ extends Yj{constructor(e){super(),this.currentSequenceNumber=e}}class c_{constructor(e){this.persistence=e,this.Ri=new u_,this.Ai=null}static Vi(e){return new c_(e)}get di(){if(this.Ai)return this.Ai;throw Se(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),ee.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),ee.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),ee.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(a=>this.di.add(a.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.di,r=>{const i=_e.fromPath(r);return this.mi(e,i).next(a=>{a||n.removeEntry(i,Ce.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return ee.or([()=>ee.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Ad{constructor(e,n){this.persistence=e,this.fi=new Xo(r=>Zj(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=d$(this,n)}static Vi(e,n){return new Ad(e,n)}Ti(){}Ei(e){return ee.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return ee.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(a=>a?ee.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ni(e,l=>this.wr(e,l,n).next(c=>{c||(r++,a.removeEntry(l,Ce.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),ee.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),ee.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),ee.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Of(e.data.value)),n}wr(e,n,r){return ee.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return ee.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class I${constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class A${constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return eO()?8:Xj(fn())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const a={result:null};return this.gs(e,n).next(l=>{a.result=l}).next(()=>{if(!a.result)return this.ps(e,n,i,r).next(l=>{a.result=l})}).next(()=>{if(a.result)return;const l=new I$;return this.ys(e,n,l).next(c=>{if(a.result=c,this.As)return this.ws(e,n,l,c.size)})}).next(()=>a.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Ha()<=Oe.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",qa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ee.resolve()):(Ha()<=Oe.DEBUG&&de("QueryEngine","Query:",qa(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Ha()<=Oe.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",qa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ei(n))):ee.resolve())}gs(e,n){if(nS(n))return ee.resolve(null);let r=ei(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ry(n,null,"F"),r=ei(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const l=je(...a);return this.fs.getDocuments(e,l).next(c=>this.indexManager.getMinOffset(e,r).next(h=>{const p=this.Ss(n,c);return this.bs(n,p,l,h.readTime)?this.gs(e,Ry(n,null,"F")):this.Ds(e,p,n,h)}))})))}ps(e,n,r,i){return nS(n)||i.isEqual(Ce.min())?ee.resolve(null):this.fs.getDocuments(e,r).next(a=>{const l=this.Ss(n,a);return this.bs(n,l,r,i)?ee.resolve(null):(Ha()<=Oe.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qa(n)),this.Ds(e,l,n,qj(i,cc)).next(c=>c))})}Ss(e,n){let r=new Ot(UC(e));return n.forEach((i,a)=>{mp(e,a)&&(r=r.add(a))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const a=e.limitType==="F"?n.last():n.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}ys(e,n,r){return Ha()<=Oe.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",qa(n)),this.fs.getDocumentsMatchingQuery(e,n,js.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(a=>(n.forEach(l=>{a=a.insert(l.key,l)}),a))}}/**
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
 */const f_="LocalStore",C$=3e8;class P${constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new yt(Fe),this.Fs=new Xo(a=>r_(a),i_),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new g$(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function R$(t,e,n,r){return new P$(t,e,n,r)}async function fP(t,e){const n=Re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(a=>(i=a,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(a=>{const l=[],c=[];let h=je();for(const p of i){l.push(p.batchId);for(const m of p.mutations)h=h.add(m.key)}for(const p of a){c.push(p.batchId);for(const m of p.mutations)h=h.add(m.key)}return n.localDocuments.getDocuments(r,h).next(p=>({Ns:p,removedBatchIds:l,addedBatchIds:c}))})})}function k$(t,e){const n=Re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),a=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,h,p,m){const y=p.batch,w=y.keys();let T=ee.resolve();return w.forEach(x=>{T=T.next(()=>m.getEntry(h,x)).next(P=>{const k=p.docVersions.get(x);Ye(k!==null,48541),P.version.compareTo(k)<0&&(y.applyToRemoteDocument(P,p),P.isValidDocument()&&(P.setReadTime(p.commitVersion),m.addEntry(P)))})}),T.next(()=>c.mutationQueue.removeMutationBatch(h,y))}(n,r,e,a).next(()=>a.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=je();for(let p=0;p<c.mutationResults.length;++p)c.mutationResults[p].transformResults.length>0&&(h=h.add(c.batch.mutations[p].key));return h}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dP(t){const e=Re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function b$(t,e){const n=Re(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const l=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const c=[];e.targetChanges.forEach((m,y)=>{const w=i.get(y);if(!w)return;c.push(n.li.removeMatchingKeys(a,m.removedDocuments,y).next(()=>n.li.addMatchingKeys(a,m.addedDocuments,y)));let T=w.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(y)!==null?T=T.withResumeToken(nn.EMPTY_BYTE_STRING,Ce.min()).withLastLimboFreeSnapshotVersion(Ce.min()):m.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(m.resumeToken,r)),i=i.insert(y,T),function(P,k,b){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=C$?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(w,T,m)&&c.push(n.li.updateTargetData(a,T))});let h=ji(),p=je();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(a,m))}),c.push(D$(a,l,e.documentUpdates).next(m=>{h=m.Bs,p=m.Ls})),!r.isEqual(Ce.min())){const m=n.li.getLastRemoteSnapshotVersion(a).next(y=>n.li.setTargetsMetadata(a,a.currentSequenceNumber,r));c.push(m)}return ee.waitFor(c).next(()=>l.apply(a)).next(()=>n.localDocuments.getLocalViewOfDocuments(a,h,p)).next(()=>h)}).then(a=>(n.vs=i,a))}function D$(t,e,n){let r=je(),i=je();return n.forEach(a=>r=r.add(a)),e.getEntries(t,r).next(a=>{let l=ji();return n.forEach((c,h)=>{const p=a.get(c);h.isFoundDocument()!==p.isFoundDocument()&&(i=i.add(c)),h.isNoDocument()&&h.version.isEqual(Ce.min())?(e.removeEntry(c,h.readTime),l=l.insert(c,h)):!p.isValidDocument()||h.version.compareTo(p.version)>0||h.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(h),l=l.insert(c,h)):de(f_,"Ignoring outdated watch update for ",c,". Current version:",p.version," Watch version:",h.version)}),{Bs:l,Ls:i}})}function V$(t,e){const n=Re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=e_),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function N$(t,e){const n=Re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(a=>a?(i=a,ee.resolve(i)):n.li.allocateTargetId(r).next(l=>(i=new Cs(e,l,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Ny(t,e,n){const r=Re(t),i=r.vs.get(e),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,l=>r.persistence.referenceDelegate.removeTarget(l,i))}catch(l){if(!Dl(l))throw l;de(f_,`Failed to update sequence numbers for target ${e}: ${l}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function mS(t,e,n){const r=Re(t);let i=Ce.min(),a=je();return r.persistence.runTransaction("Execute query","readwrite",l=>function(h,p,m){const y=Re(h),w=y.Fs.get(m);return w!==void 0?ee.resolve(y.vs.get(w)):y.li.getTargetData(p,m)}(r,l,ei(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(l,c.targetId).next(h=>{a=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(l,e,n?i:Ce.min(),n?a:je())).next(c=>(M$(r,w5(e),c),{documents:c,ks:a})))}function M$(t,e,n){let r=t.Ms.get(e)||Ce.min();n.forEach((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),t.Ms.set(e,r)}class gS{constructor(){this.activeTargetIds=A5()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class L${constructor(){this.vo=new gS,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new gS,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class O${Mo(e){}shutdown(){}}/**
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
 */const yS="ConnectivityMonitor";class vS{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){de(yS,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){de(yS,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let pf=null;function My(){return pf===null?pf=function(){return 268435456+Math.round(2147483648*Math.random())}():pf++,"0x"+pf.toString(16)}/**
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
 */const Rg="RestConnection",F$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class j${get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===wd?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,a){const l=My(),c=this.Qo(e,n.toUriEncodedString());de(Rg,`Sending RPC '${e}' ${l}:`,c,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,i,a);const{host:p}=new URL(c),m=Ac(p);return this.zo(e,c,h,r,m).then(y=>(de(Rg,`Received RPC '${e}' ${l}: `,y),y),y=>{throw Ko(Rg,`RPC '${e}' ${l} failed with error: `,y,"url: ",c,"request:",r),y})}jo(e,n,r,i,a,l){return this.Wo(e,n,r,i,a)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+kl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>e[a]=i),r&&r.headers.forEach((i,a)=>e[a]=i)}Qo(e,n){const r=F$[e];let i=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class $${constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const un="WebChannelConnection",Nu=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class sl extends j${constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!sl.c_){const e=mC();Nu(e,pC.STAT_EVENT,n=>{n.stat===Ty.PROXY?de(un,"STAT_EVENT: detected buffering proxy"):n.stat===Ty.NOPROXY&&de(un,"STAT_EVENT: detected no buffering proxy")}),sl.c_=!0}}zo(e,n,r,i,a){const l=My();return new Promise((c,h)=>{const p=new fC;p.setWithCredentials(!0),p.listenOnce(dC.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Lf.NO_ERROR:const y=p.getResponseJson();de(un,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(y)),c(y);break;case Lf.TIMEOUT:de(un,`RPC '${e}' ${l} timed out`),h(new fe(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Lf.HTTP_ERROR:const w=p.getStatus();if(de(un,`RPC '${e}' ${l} failed with status:`,w,"response text:",p.getResponseText()),w>0){let T=p.getResponseJson();Array.isArray(T)&&(T=T[0]);const x=T==null?void 0:T.error;if(x&&x.status&&x.message){const P=function(b){const O=b.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(O)>=0?O:Z.UNKNOWN}(x.status);h(new fe(P,x.message))}else h(new fe(Z.UNKNOWN,"Server responded with status "+p.getStatus()))}else h(new fe(Z.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{l_:e,streamId:l,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{de(un,`RPC '${e}' ${l} completed.`)}});const m=JSON.stringify(i);de(un,`RPC '${e}' ${l} sending request:`,i),p.send(n,"POST",m,r,15)})}T_(e,n,r){const i=My(),a=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const p=a.join("");de(un,`Creating RPC '${e}' stream ${i}: ${p}`,c);const m=l.createWebChannel(p,c);this.E_(m);let y=!1,w=!1;const T=new $$({Jo:x=>{w?de(un,`Not sending because RPC '${e}' stream ${i} is closed:`,x):(y||(de(un,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),de(un,`RPC '${e}' stream ${i} sending:`,x),m.send(x))},Ho:()=>m.close()});return Nu(m,$u.EventType.OPEN,()=>{w||(de(un,`RPC '${e}' stream ${i} transport opened.`),T.i_())}),Nu(m,$u.EventType.CLOSE,()=>{w||(w=!0,de(un,`RPC '${e}' stream ${i} transport closed`),T.o_(),this.I_(m))}),Nu(m,$u.EventType.ERROR,x=>{w||(w=!0,Ko(un,`RPC '${e}' stream ${i} transport errored. Name:`,x.name,"Message:",x.message),T.o_(new fe(Z.UNAVAILABLE,"The operation could not be completed")))}),Nu(m,$u.EventType.MESSAGE,x=>{var P;if(!w){const k=x.data[0];Ye(!!k,16349);const b=k,O=(b==null?void 0:b.error)||((P=b[0])==null?void 0:P.error);if(O){de(un,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let $=function(C){const I=Pt[C];if(I!==void 0)return ZC(I)}(U),H=O.message;U==="NOT_FOUND"&&H.includes("database")&&H.includes("does not exist")&&H.includes(this.databaseId.database)&&Ko(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),$===void 0&&($=Z.INTERNAL,H="Unknown error status: "+U+" with message "+O.message),w=!0,T.o_(new fe($,H)),m.close()}else de(un,`RPC '${e}' stream ${i} received:`,k),T.__(k)}}),sl.u_(),setTimeout(()=>{T.s_()},0),T}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return gC()}}/**
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
 */function U$(t){return new sl(t)}function kg(){return typeof document<"u"?document:null}/**
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
 */function _p(t){return new H5(t,!0)}/**
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
 */sl.c_=!1;class pP{constructor(e,n,r=1e3,i=1.5,a=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=a,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&de("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const _S="PersistentStream";class mP{constructor(e,n,r,i,a,l,c,h){this.Ci=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new pP(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===Z.RESOURCE_EXHAUSTED?(Fi(n.toString()),Fi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new fe(Z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return de(_S,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(de(_S,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class z$ extends mP{constructor(e,n,r,i,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,l),this.serializer=a}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=G5(this.serializer,e),r=function(a){if(!("targetChange"in a))return Ce.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Ce.min():l.readTime?ti(l.readTime):Ce.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Vy(this.serializer),n.addTarget=function(a,l){let c;const h=l.target;if(c=Cy(h)?{documents:X5(a,h)}:{query:J5(a,h).ft},c.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){c.resumeToken=nP(a,l.resumeToken);const p=ky(a,l.expectedCount);p!==null&&(c.expectedCount=p)}else if(l.snapshotVersion.compareTo(Ce.min())>0){c.readTime=Id(a,l.snapshotVersion.toTimestamp());const p=ky(a,l.expectedCount);p!==null&&(c.expectedCount=p)}return c}(this.serializer,e);const r=e$(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=Vy(this.serializer),n.removeTarget=e,this.q_(n)}}class B$ extends mP{constructor(e,n,r,i,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,l),this.serializer=a}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=Y5(e.writeResults,e.commitTime),r=ti(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Vy(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Q5(this.serializer,r))};this.q_(n)}}/**
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
 */class W${}class H$ extends W${constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new fe(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Wo(e,by(n,r),i,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new fe(Z.UNKNOWN,a.toString())})}jo(e,n,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.jo(e,by(n,r),i,l,c,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new fe(Z.UNKNOWN,l.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function q$(t,e,n,r){return new H$(t,e,n,r)}class K${constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fi(n),this.aa=!1):de("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Go="RemoteStore";class G${constructor(e,n,r,i,a){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=a,this.Aa.Mo(l=>{r.enqueueAndForget(async()=>{Zo(this)&&(de(Go,"Restarting streams for network reachability change."),await async function(h){const p=Re(h);p.Ia.add(4),await Nc(p),p.Va.set("Unknown"),p.Ia.delete(4),await wp(p)}(this))})}),this.Va=new K$(r,i)}}async function wp(t){if(Zo(t))for(const e of t.Ra)await e(!0)}async function Nc(t){for(const e of t.Ra)await e(!1)}function gP(t,e){const n=Re(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),g_(n)?m_(n):Nl(n).O_()&&p_(n,e))}function d_(t,e){const n=Re(t),r=Nl(n);n.Ea.delete(e),r.O_()&&yP(n,e),n.Ea.size===0&&(r.O_()?r.L_():Zo(n)&&n.Va.set("Unknown"))}function p_(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Nl(t).Z_(e)}function yP(t,e){t.da.$e(e),Nl(t).X_(e)}function m_(t){t.da=new U5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Nl(t).start(),t.Va.ua()}function g_(t){return Zo(t)&&!Nl(t).x_()&&t.Ea.size>0}function Zo(t){return Re(t).Ia.size===0}function vP(t){t.da=void 0}async function Q$(t){t.Va.set("Online")}async function Y$(t){t.Ea.forEach((e,n)=>{p_(t,e)})}async function X$(t,e){vP(t),g_(t)?(t.Va.ha(e),m_(t)):t.Va.set("Unknown")}async function J$(t,e,n){if(t.Va.set("Online"),e instanceof tP&&e.state===2&&e.cause)try{await async function(i,a){const l=a.cause;for(const c of a.targetIds)i.Ea.has(c)&&(await i.remoteSyncer.rejectListen(c,l),i.Ea.delete(c),i.da.removeTarget(c))}(t,e)}catch(r){de(Go,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Cd(t,r)}else if(e instanceof $f?t.da.Xe(e):e instanceof eP?t.da.st(e):t.da.tt(e),!n.isEqual(Ce.min()))try{const r=await dP(t.localStore);n.compareTo(r)>=0&&await function(a,l){const c=a.da.Tt(l);return c.targetChanges.forEach((h,p)=>{if(h.resumeToken.approximateByteSize()>0){const m=a.Ea.get(p);m&&a.Ea.set(p,m.withResumeToken(h.resumeToken,l))}}),c.targetMismatches.forEach((h,p)=>{const m=a.Ea.get(h);if(!m)return;a.Ea.set(h,m.withResumeToken(nn.EMPTY_BYTE_STRING,m.snapshotVersion)),yP(a,h);const y=new Cs(m.target,h,p,m.sequenceNumber);p_(a,y)}),a.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){de(Go,"Failed to raise snapshot:",r),await Cd(t,r)}}async function Cd(t,e,n){if(!Dl(e))throw e;t.Ia.add(1),await Nc(t),t.Va.set("Offline"),n||(n=()=>dP(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{de(Go,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await wp(t)})}function _P(t,e){return e().catch(n=>Cd(t,n,e))}async function Ep(t){const e=Re(t),n=Bs(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:e_;for(;Z$(e);)try{const i=await V$(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,eU(e,i)}catch(i){await Cd(e,i)}wP(e)&&EP(e)}function Z$(t){return Zo(t)&&t.Ta.length<10}function eU(t,e){t.Ta.push(e);const n=Bs(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function wP(t){return Zo(t)&&!Bs(t).x_()&&t.Ta.length>0}function EP(t){Bs(t).start()}async function tU(t){Bs(t).ra()}async function nU(t){const e=Bs(t);for(const n of t.Ta)e.ea(n.mutations)}async function rU(t,e,n){const r=t.Ta.shift(),i=o_.from(r,e,n);await _P(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ep(t)}async function iU(t,e){e&&Bs(t).Y_&&await async function(r,i){if(function(l){return F5(l)&&l!==Z.ABORTED}(i.code)){const a=r.Ta.shift();Bs(r).B_(),await _P(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i)),await Ep(r)}}(t,e),wP(t)&&EP(t)}async function wS(t,e){const n=Re(t);n.asyncQueue.verifyOperationInProgress(),de(Go,"RemoteStore received new credentials");const r=Zo(n);n.Ia.add(3),await Nc(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await wp(n)}async function sU(t,e){const n=Re(t);e?(n.Ia.delete(2),await wp(n)):e||(n.Ia.add(2),await Nc(n),n.Va.set("Unknown"))}function Nl(t){return t.ma||(t.ma=function(n,r,i){const a=Re(n);return a.sa(),new z$(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(t.datastore,t.asyncQueue,{Zo:Q$.bind(null,t),Yo:Y$.bind(null,t),t_:X$.bind(null,t),H_:J$.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),g_(t)?m_(t):t.Va.set("Unknown")):(await t.ma.stop(),vP(t))})),t.ma}function Bs(t){return t.fa||(t.fa=function(n,r,i){const a=Re(n);return a.sa(),new B$(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:tU.bind(null,t),t_:iU.bind(null,t),ta:nU.bind(null,t),na:rU.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Ep(t)):(await t.fa.stop(),t.Ta.length>0&&(de(Go,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
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
 */class y_{constructor(e,n,r,i,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new Ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,a){const l=Date.now()+r,c=new y_(e,n,l,i,a);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function v_(t,e){if(Fi("AsyncQueue",`${e}: ${t}`),Dl(t))return new fe(Z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ol{static emptySet(e){return new ol(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||_e.comparator(n.key,r.key):(n,r)=>_e.comparator(n.key,r.key),this.keyedMap=Uu(),this.sortedSet=new yt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ol)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ol;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ES{constructor(){this.ga=new yt(_e.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Se(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class El{constructor(e,n,r,i,a,l,c,h,p){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=p}static fromInitialDocuments(e,n,r,i,a){const l=[];return n.forEach(c=>{l.push({type:0,doc:c})}),new El(e,n,ol.emptySet(n),l,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pp(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class oU{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class aU{constructor(){this.queries=TS(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=Re(n),a=i.queries;i.queries=TS(),a.forEach((l,c)=>{for(const h of c.Sa)h.onError(r)})})(this,new fe(Z.ABORTED,"Firestore shutting down"))}}function TS(){return new Xo(t=>$C(t),pp)}async function lU(t,e){const n=Re(t);let r=3;const i=e.query;let a=n.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new oU,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await n.onListen(i,!0);break;case 1:a.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(l){const c=v_(l,`Initialization of query '${qa(e.query)}' failed`);return void e.onError(c)}n.queries.set(i,a),a.Sa.push(e),e.va(n.onlineState),a.wa&&e.Fa(a.wa)&&__(n)}async function uU(t,e){const n=Re(t),r=e.query;let i=3;const a=n.queries.get(r);if(a){const l=a.Sa.indexOf(e);l>=0&&(a.Sa.splice(l,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function cU(t,e){const n=Re(t);let r=!1;for(const i of e){const a=i.query,l=n.queries.get(a);if(l){for(const c of l.Sa)c.Fa(i)&&(r=!0);l.wa=i}}r&&__(n)}function hU(t,e,n){const r=Re(t),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(n);r.queries.delete(e)}function __(t){t.Ca.forEach(e=>{e.next()})}var Ly,SS;(SS=Ly||(Ly={})).Ma="default",SS.Cache="cache";class fU{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new El(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=El.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ly.Cache}}/**
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
 */class TP{constructor(e){this.key=e}}class SP{constructor(e){this.key=e}}class dU{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=je(),this.mutatedKeys=je(),this.eu=UC(e),this.tu=new ol(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new ES,i=n?n.tu:this.tu;let a=n?n.mutatedKeys:this.mutatedKeys,l=i,c=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,p=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,y)=>{const w=i.get(m),T=mp(this.query,y)?y:null,x=!!w&&this.mutatedKeys.has(w.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let k=!1;w&&T?w.data.isEqual(T.data)?x!==P&&(r.track({type:3,doc:T}),k=!0):this.su(w,T)||(r.track({type:2,doc:T}),k=!0,(h&&this.eu(T,h)>0||p&&this.eu(T,p)<0)&&(c=!0)):!w&&T?(r.track({type:0,doc:T}),k=!0):w&&!T&&(r.track({type:1,doc:w}),k=!0,(h||p)&&(c=!0)),k&&(T?(l=l.add(T),a=P?a.add(m):a.delete(m)):(l=l.delete(m),a=a.delete(m)))}),this.query.limit!==null)for(;l.size>this.query.limit;){const m=this.query.limitType==="F"?l.last():l.first();l=l.delete(m.key),a=a.delete(m.key),r.track({type:1,doc:m})}return{tu:l,iu:r,bs:c,mutatedKeys:a}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const l=e.iu.ya();l.sort((m,y)=>function(T,x){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{Vt:k})}};return P(T)-P(x)}(m.type,y.type)||this.eu(m.doc,y.doc)),this.ou(r),i=i??!1;const c=n&&!i?this._u():[],h=this.Ya.size===0&&this.current&&!i?1:0,p=h!==this.Xa;return this.Xa=h,l.length!==0||p?{snapshot:new El(this.query,e.tu,a,l,e.mutatedKeys,h===0,p,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ES,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=je(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new SP(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new TP(r))}),n}cu(e){this.Za=e.ks,this.Ya=je();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return El.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const w_="SyncEngine";class pU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mU{constructor(e){this.key=e,this.hu=!1}}class gU{constructor(e,n,r,i,a,l){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.Pu={},this.Tu=new Xo(c=>$C(c),pp),this.Eu=new Map,this.Iu=new Set,this.Ru=new yt(_e.comparator),this.Au=new Map,this.Vu=new u_,this.du={},this.mu=new Map,this.fu=wl.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function yU(t,e,n=!0){const r=RP(t);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await xP(r,e,n,!0),i}async function vU(t,e){const n=RP(t);await xP(n,e,!0,!1)}async function xP(t,e,n,r){const i=await N$(t.localStore,ei(e)),a=i.targetId,l=t.sharedClientState.addLocalQueryTarget(a,n);let c;return r&&(c=await _U(t,e,a,l==="current",i.resumeToken)),t.isPrimaryClient&&n&&gP(t.remoteStore,i),c}async function _U(t,e,n,r,i){t.pu=(y,w,T)=>async function(P,k,b,O){let U=k.view.ru(b);U.bs&&(U=await mS(P.localStore,k.query,!1).then(({documents:C})=>k.view.ru(C,U)));const $=O&&O.targetChanges.get(k.targetId),H=O&&O.targetMismatches.get(k.targetId)!=null,X=k.view.applyChanges(U,P.isPrimaryClient,$,H);return IS(P,k.targetId,X.au),X.snapshot}(t,y,w,T);const a=await mS(t.localStore,e,!0),l=new dU(e,a.ks),c=l.ru(a.documents),h=Vc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),p=l.applyChanges(c,t.isPrimaryClient,h);IS(t,n,p.au);const m=new pU(e,n,l);return t.Tu.set(e,m),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),p.snapshot}async function wU(t,e,n){const r=Re(t),i=r.Tu.get(e),a=r.Eu.get(i.targetId);if(a.length>1)return r.Eu.set(i.targetId,a.filter(l=>!pp(l,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Ny(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&d_(r.remoteStore,i.targetId),Oy(r,i.targetId)}).catch(bl)):(Oy(r,i.targetId),await Ny(r.localStore,i.targetId,!0))}async function EU(t,e){const n=Re(t),r=n.Tu.get(e),i=n.Eu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),d_(n.remoteStore,r.targetId))}async function TU(t,e,n){const r=RU(t);try{const i=await function(l,c){const h=Re(l),p=ct.now(),m=c.reduce((T,x)=>T.add(x.key),je());let y,w;return h.persistence.runTransaction("Locally write mutations","readwrite",T=>{let x=ji(),P=je();return h.xs.getEntries(T,m).next(k=>{x=k,x.forEach((b,O)=>{O.isValidDocument()||(P=P.add(b))})}).next(()=>h.localDocuments.getOverlayedDocuments(T,x)).next(k=>{y=k;const b=[];for(const O of c){const U=V5(O,y.get(O.key).overlayedDocument);U!=null&&b.push(new Jo(O.key,U,bC(U.value.mapValue),Ni.exists(!0)))}return h.mutationQueue.addMutationBatch(T,p,b,c)}).next(k=>{w=k;const b=k.applyToLocalDocumentSet(y,P);return h.documentOverlayCache.saveOverlays(T,k.batchId,b)})}).then(()=>({batchId:w.batchId,changes:BC(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(l,c,h){let p=l.du[l.currentUser.toKey()];p||(p=new yt(Fe)),p=p.insert(c,h),l.du[l.currentUser.toKey()]=p}(r,i.batchId,n),await Mc(r,i.changes),await Ep(r.remoteStore)}catch(i){const a=v_(i,"Failed to persist write");n.reject(a)}}async function IP(t,e){const n=Re(t);try{const r=await b$(n.localStore,e);e.targetChanges.forEach((i,a)=>{const l=n.Au.get(a);l&&(Ye(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?l.hu=!0:i.modifiedDocuments.size>0?Ye(l.hu,14607):i.removedDocuments.size>0&&(Ye(l.hu,42227),l.hu=!1))}),await Mc(n,r,e)}catch(r){await bl(r)}}function xS(t,e,n){const r=Re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Tu.forEach((a,l)=>{const c=l.view.va(e);c.snapshot&&i.push(c.snapshot)}),function(l,c){const h=Re(l);h.onlineState=c;let p=!1;h.queries.forEach((m,y)=>{for(const w of y.Sa)w.va(c)&&(p=!0)}),p&&__(h)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SU(t,e,n){const r=Re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),a=i&&i.key;if(a){let l=new yt(_e.comparator);l=l.insert(a,hn.newNoDocument(a,Ce.min()));const c=je().add(a),h=new vp(Ce.min(),new Map,new yt(Fe),l,c);await IP(r,h),r.Ru=r.Ru.remove(a),r.Au.delete(e),E_(r)}else await Ny(r.localStore,e,!1).then(()=>Oy(r,e,n)).catch(bl)}async function xU(t,e){const n=Re(t),r=e.batch.batchId;try{const i=await k$(n.localStore,e);CP(n,r,null),AP(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Mc(n,i)}catch(i){await bl(i)}}async function IU(t,e,n){const r=Re(t);try{const i=await function(l,c){const h=Re(l);return h.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let m;return h.mutationQueue.lookupMutationBatch(p,c).next(y=>(Ye(y!==null,37113),m=y.keys(),h.mutationQueue.removeMutationBatch(p,y))).next(()=>h.mutationQueue.performConsistencyCheck(p)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(p,m,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,m)).next(()=>h.localDocuments.getDocuments(p,m))})}(r.localStore,e);CP(r,e,n),AP(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Mc(r,i)}catch(i){await bl(i)}}function AP(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function CP(t,e,n){const r=Re(t);let i=r.du[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(n?a.reject(n):a.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Oy(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||PP(t,r)})}function PP(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(d_(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),E_(t))}function IS(t,e,n){for(const r of n)r instanceof TP?(t.Vu.addReference(r.key,e),AU(t,r)):r instanceof SP?(de(w_,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||PP(t,r.key)):Se(19791,{wu:r})}function AU(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(de(w_,"New document in limbo: "+n),t.Iu.add(r),E_(t))}function E_(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new _e(st.fromString(e)),r=t.fu.next();t.Au.set(r,new mU(n)),t.Ru=t.Ru.insert(n,r),gP(t.remoteStore,new Cs(ei(FC(n.path)),r,"TargetPurposeLimboResolution",hp.ce))}}async function Mc(t,e,n){const r=Re(t),i=[],a=[],l=[];r.Tu.isEmpty()||(r.Tu.forEach((c,h)=>{l.push(r.pu(h,e,n).then(p=>{var m;if((p||n)&&r.isPrimaryClient){const y=p?!p.fromCache:(m=n==null?void 0:n.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,y?"current":"not-current")}if(p){i.push(p);const y=h_.Is(h.targetId,p);a.push(y)}}))}),await Promise.all(l),r.Pu.H_(i),await async function(h,p){const m=Re(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>ee.forEach(p,w=>ee.forEach(w.Ts,T=>m.persistence.referenceDelegate.addReference(y,w.targetId,T)).next(()=>ee.forEach(w.Es,T=>m.persistence.referenceDelegate.removeReference(y,w.targetId,T)))))}catch(y){if(!Dl(y))throw y;de(f_,"Failed to update sequence numbers: "+y)}for(const y of p){const w=y.targetId;if(!y.fromCache){const T=m.vs.get(w),x=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(x);m.vs=m.vs.insert(w,P)}}}(r.localStore,a))}async function CU(t,e){const n=Re(t);if(!n.currentUser.isEqual(e)){de(w_,"User change. New user:",e.toKey());const r=await fP(n.localStore,e);n.currentUser=e,function(a,l){a.mu.forEach(c=>{c.forEach(h=>{h.reject(new fe(Z.CANCELLED,l))})}),a.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Mc(n,r.Ns)}}function PU(t,e){const n=Re(t),r=n.Au.get(e);if(r&&r.hu)return je().add(r.key);{let i=je();const a=n.Eu.get(e);if(!a)return i;for(const l of a){const c=n.Tu.get(l);i=i.unionWith(c.view.nu)}return i}}function RP(t){const e=Re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=IP.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SU.bind(null,e),e.Pu.H_=cU.bind(null,e.eventManager),e.Pu.yu=hU.bind(null,e.eventManager),e}function RU(t){const e=Re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xU.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IU.bind(null,e),e}class Pd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_p(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return R$(this.persistence,new A$,e.initialUser,this.serializer)}Cu(e){return new hP(c_.Vi,this.serializer)}Du(e){return new L$}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pd.provider={build:()=>new Pd};class kU extends Pd{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ye(this.persistence.referenceDelegate instanceof Ad,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new h$(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?An.withCacheSize(this.cacheSizeBytes):An.DEFAULT;return new hP(r=>Ad.Vi(r,n),this.serializer)}}class Fy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CU.bind(null,this.syncEngine),await sU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new aU}()}createDatastore(e){const n=_p(e.databaseInfo.databaseId),r=U$(e.databaseInfo);return q$(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,a,l,c){return new G$(r,i,a,l,c)}(this.localStore,this.datastore,e.asyncQueue,n=>xS(this.syncEngine,n,0),function(){return vS.v()?new vS:new O$}())}createSyncEngine(e,n){return function(i,a,l,c,h,p,m){const y=new gU(i,a,l,c,h,p);return m&&(y.gu=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const a=Re(i);de(Go,"RemoteStore shutting down."),a.Ia.add(5),await Nc(a),a.Aa.shutdown(),a.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Fy.provider={build:()=>new Fy};/**
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
 */class bU{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Fi("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Ws="FirestoreClient";class DU{constructor(e,n,r,i,a){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=cn.UNAUTHENTICATED,this.clientId=Zv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async l=>{de(Ws,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l}),this.appCheckCredentials.start(r,l=>(de(Ws,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=v_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bg(t,e){t.asyncQueue.verifyOperationInProgress(),de(Ws,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fP(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function AS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await VU(t);de(Ws,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>wS(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>wS(e.remoteStore,i)),t._onlineComponents=e}async function VU(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){de(Ws,"Using user provided OfflineComponentProvider");try{await bg(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===Z.FAILED_PRECONDITION||i.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ko("Error using user provided cache. Falling back to memory cache: "+n),await bg(t,new Pd)}}else de(Ws,"Using default OfflineComponentProvider"),await bg(t,new kU(void 0));return t._offlineComponents}async function kP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(de(Ws,"Using user provided OnlineComponentProvider"),await AS(t,t._uninitializedComponentsProvider._online)):(de(Ws,"Using default OnlineComponentProvider"),await AS(t,new Fy))),t._onlineComponents}function NU(t){return kP(t).then(e=>e.syncEngine)}async function MU(t){const e=await kP(t),n=e.eventManager;return n.onListen=yU.bind(null,e.syncEngine),n.onUnlisten=wU.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vU.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=EU.bind(null,e.syncEngine),n}function LU(t,e,n={}){const r=new Ns;return t.asyncQueue.enqueueAndForget(async()=>function(a,l,c,h,p){const m=new bU({next:w=>{m.Nu(),l.enqueueAndForget(()=>uU(a,y)),w.fromCache&&h.source==="server"?p.reject(new fe(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),y=new fU(c,m,{includeMetadataChanges:!0,qa:!0});return lU(a,y)}(await MU(t),t.asyncQueue,e,n,r)),r.promise}function OU(t,e){const n=new Ns;return t.asyncQueue.enqueueAndForget(async()=>TU(await NU(t),e,n)),n.promise}/**
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
 */function bP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const FU="ComponentProvider",CS=new Map;function jU(t,e,n,r,i){return new n5(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,bP(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const DP="firestore.googleapis.com",PS=!0;class RS{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new fe(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=DP,this.ssl=PS}else this.host=e.host,this.ssl=e.ssl??PS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=cP;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<u$)throw new fe(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hj("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bP(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tp{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new RS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new RS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Mj;switch(r.type){case"firstParty":return new jj(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new fe(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=CS.get(n);r&&(de(FU,"Removing Datastore"),CS.delete(n),r.terminate())}(this),Promise.resolve()}}function $U(t,e,n,r={}){var p;t=vd(t,Tp);const i=Ac(e),a=t._getSettings(),l={...a,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&IA(`https://${c}`),a.host!==DP&&a.host!==c&&Ko("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...a,host:c,ssl:i,emulatorOptions:r};if(!zo(h,l)&&(t._setSettings(h),r.mockUserToken)){let m,y;if(typeof r.mockUserToken=="string")m=r.mockUserToken,y=cn.MOCK_USER;else{m=KL(r.mockUserToken,(p=t._app)==null?void 0:p.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new fe(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new cn(w)}t._authCredentials=new Lj(new vC(m,y))}}/**
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
 */class ea{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ea(this.firestore,e,this._query)}}class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ms(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}toJSON(){return{type:Ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(bc(n,Ht._jsonSchema))return new Ht(e,r||null,new _e(st.fromString(n.referencePath)))}}Ht._jsonSchemaVersion="firestore/documentReference/1.0",Ht._jsonSchema={type:Dt("string",Ht._jsonSchemaVersion),referencePath:Dt("string")};class Ms extends ea{constructor(e,n,r){super(e,n,FC(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new _e(e))}withConverter(e){return new Ms(this.firestore,e,this._path)}}function I7(t,e,...n){if(t=dn(t),_C("collection","path",e),t instanceof Tp){const r=st.fromString(e,...n);return zT(r),new Ms(t,null,r)}{if(!(t instanceof Ht||t instanceof Ms))throw new fe(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return zT(r),new Ms(t.firestore,null,r)}}function UU(t,e,...n){if(t=dn(t),arguments.length===1&&(e=Zv.newId()),_C("doc","path",e),t instanceof Tp){const r=st.fromString(e,...n);return UT(r),new Ht(t,null,new _e(r))}{if(!(t instanceof Ht||t instanceof Ms))throw new fe(Z.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(st.fromString(e,...n));return UT(r),new Ht(t.firestore,t instanceof Ms?t.converter:null,new _e(r))}}/**
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
 */const kS="AsyncQueue";class bS{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new pP(this,"async_queue_retry"),this._c=()=>{const r=kg();r&&de(kS,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=kg();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=kg();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new Ns;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Dl(e))throw e;de(kS,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,Fi("INTERNAL UNHANDLED ERROR: ",DS(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const i=y_.createAndSchedule(this,e,n,r,a=>this.hc(a));return this.tc.push(i),i}uc(){this.nc&&Se(47125,{Pc:DS(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function DS(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class T_ extends Tp{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new bS,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bS(e),this._firestoreClient=void 0,await e}}}function zU(t,e){const n=typeof t=="object"?t:RA(),r=typeof t=="string"?t:wd,i=Uv(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=HL("firestore");a&&$U(i,...a)}return i}function VP(t){if(t._terminated)throw new fe(Z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||BU(t),t._firestoreClient}function BU(t){var r,i,a,l;const e=t._freezeSettings(),n=jU(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(a=e.localCache)!=null&&a._offlineComponentProvider&&((l=e.localCache)!=null&&l._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new DU(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(h){const p=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(p),_online:p}}(t._componentsProvider))}/**
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
 */class Zn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zn(nn.fromBase64String(e))}catch(n){throw new fe(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zn(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Zn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(bc(e,Zn._jsonSchema))return Zn.fromBase64String(e.bytes)}}Zn._jsonSchemaVersion="firestore/bytes/1.0",Zn._jsonSchema={type:Dt("string",Zn._jsonSchemaVersion),bytes:Dt("string")};/**
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
 */class NP{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new fe(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class MP{constructor(e){this._methodName=e}}/**
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
 */class ni{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new fe(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new fe(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Fe(this._lat,e._lat)||Fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ni._jsonSchemaVersion}}static fromJSON(e){if(bc(e,ni._jsonSchema))return new ni(e.latitude,e.longitude)}}ni._jsonSchemaVersion="firestore/geoPoint/1.0",ni._jsonSchema={type:Dt("string",ni._jsonSchemaVersion),latitude:Dt("number"),longitude:Dt("number")};/**
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
 */class Ar{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ar._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(bc(e,Ar._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ar(e.vectorValues);throw new fe(Z.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ar._jsonSchemaVersion="firestore/vectorValue/1.0",Ar._jsonSchema={type:Dt("string",Ar._jsonSchemaVersion),vectorValues:Dt("object")};/**
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
 */const WU=/^__.*__$/;class HU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Jo(e,this.data,this.fieldMask,n,this.fieldTransforms):new Dc(e,this.data,n,this.fieldTransforms)}}function LP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{dataSource:t})}}class S_{constructor(e,n,r,i,a,l){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new S_({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Rd(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(LP(this.dataSource)&&WU.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class qU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_p(e)}I(e,n,r,i=!1){return new S_({dataSource:e,methodName:n,targetDoc:r,path:en.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function OP(t){const e=t._freezeSettings(),n=_p(t._databaseId);return new qU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KU(t,e,n,r,i,a={}){const l=t.I(a.merge||a.mergeFields?2:0,e,n,i);$P("Data must be an object, but it was:",l,r);const c=FP(r,l);let h,p;if(a.merge)h=new Sr(l.fieldMask),p=l.fieldTransforms;else if(a.mergeFields){const m=[];for(const y of a.mergeFields){const w=Lc(e,y,n);if(!l.contains(w))throw new fe(Z.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);XU(m,w)||m.push(w)}h=new Sr(m),p=l.fieldTransforms.filter(y=>h.covers(y.field))}else h=null,p=l.fieldTransforms;return new HU(new Jn(c),h,p)}function GU(t,e,n,r=!1){return x_(n,t.I(r?4:3,e))}function x_(t,e){if(jP(t=dn(t)))return $P("Unsupported field value:",e,t),FP(t,e);if(t instanceof MP)return function(r,i){if(!LP(i.dataSource))throw i.yc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.yc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,i){const a=[];let l=0;for(const c of r){let h=x_(c,i.gc(l));h==null&&(h={nullValue:"NULL_VALUE"}),a.push(h),l++}return{arrayValue:{values:a}}}(t,e)}return function(r,i){if((r=dn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return C5(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=ct.fromDate(r);return{timestampValue:Id(i.serializer,a)}}if(r instanceof ct){const a=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Id(i.serializer,a)}}if(r instanceof ni)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zn)return{bytesValue:nP(i.serializer,r._byteString)};if(r instanceof Ht){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.yc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:l_(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Ar)return function(l,c){const h=l instanceof Ar?l.toArray():l;return{mapValue:{fields:{[PC]:{stringValue:kC},[Ed]:{arrayValue:{values:h.map(m=>{if(typeof m!="number")throw c.yc("VectorValues must only contain numeric values.");return s_(c.serializer,m)})}}}}}}(r,i);if(uP(r))return r._toProto(i.serializer);throw i.yc(`Unsupported field value: ${cp(r)}`)}(t,e)}function FP(t,e){const n={};return TC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yo(t,(r,i)=>{const a=x_(i,e.dc(r));a!=null&&(n[r]=a)}),{mapValue:{fields:n}}}function jP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof ni||t instanceof Zn||t instanceof Ht||t instanceof MP||t instanceof Ar||uP(t))}function $P(t,e,n){if(!jP(n)||!wC(n)){const r=cp(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function Lc(t,e,n){if((e=dn(e))instanceof NP)return e._internalPath;if(typeof e=="string")return YU(t,e);throw Rd("Field path arguments must be of type string or ",t,!1,void 0,n)}const QU=new RegExp("[~\\*/\\[\\]]");function YU(t,e,n){if(e.search(QU)>=0)throw Rd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new NP(...e.split("."))._internalPath}catch{throw Rd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rd(t,e,n,r,i){const a=r&&!r.isEmpty(),l=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(a||l)&&(h+=" (found",a&&(h+=` in field ${r}`),l&&(h+=` in document ${i}`),h+=")"),new fe(Z.INVALID_ARGUMENT,c+t+h)}function XU(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class JU{convertValue(e,n="none"){switch(zs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Yo(e,(i,a)=>{r[i]=this.convertValue(a,n)}),r}convertVectorValue(e){var r,i,a;const n=(a=(i=(r=e.fields)==null?void 0:r[Ed].arrayValue)==null?void 0:i.values)==null?void 0:a.map(l=>xt(l.doubleValue));return new Ar(n)}convertGeoPoint(e){return new ni(xt(e.latitude),xt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(hc(e));default:return null}}convertTimestamp(e){const n=$s(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=st.fromString(e);Ye(lP(r),9688,{name:e});const i=new fc(r.get(1),r.get(3)),a=new _e(r.popFirst(5));return i.isEqual(n)||Fi(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),a}}/**
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
 */class ZU extends JU{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}const VS="@firebase/firestore",NS="4.14.0";/**
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
 */class UP{constructor(e,n,r,i,a){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e9(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Lc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e9 extends UP{data(){return super.data()}}/**
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
 */function t9(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new fe(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class I_{}class zP extends I_{}function A7(t,e,...n){let r=[];e instanceof I_&&r.push(e),r=r.concat(n),function(a){const l=a.filter(h=>h instanceof A_).length,c=a.filter(h=>h instanceof Sp).length;if(l>1||l>0&&c>0)throw new fe(Z.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Sp extends zP{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sp(e,n,r)}_apply(e){const n=this._parse(e);return BP(e._query,n),new ea(e.firestore,e.converter,Py(e._query,n))}_parse(e){const n=OP(e.firestore);return function(a,l,c,h,p,m,y){let w;if(p.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new fe(Z.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){LS(y,m);const x=[];for(const P of y)x.push(MS(h,a,P));w={arrayValue:{values:x}}}else w=MS(h,a,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||LS(y,m),w=GU(c,l,y,m==="in"||m==="not-in");return bt.create(p,m,w)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function C7(t,e,n){const r=e,i=Lc("where",t);return Sp._create(i,r,n)}class A_ extends I_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new A_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Pr.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,a){let l=i;const c=a.getFlattenedFilters();for(const h of c)BP(l,h),l=Py(l,h)}(e._query,n),new ea(e.firestore,e.converter,Py(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class C_ extends zP{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new C_(e,n)}_apply(e){const n=function(i,a,l){if(i.startAt!==null)throw new fe(Z.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new fe(Z.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new pc(a,l)}(e._query,this._field,this._direction);return new ea(e.firestore,e.converter,_5(e._query,n))}}function P7(t,e="asc"){const n=e,r=Lc("orderBy",t);return C_._create(r,n)}function MS(t,e,n){if(typeof(n=dn(n))=="string"){if(n==="")throw new fe(Z.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jC(e)&&n.indexOf("/")!==-1)throw new fe(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(st.fromString(n));if(!_e.isDocumentKey(r))throw new fe(Z.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return YT(t,new _e(r))}if(n instanceof Ht)return YT(t,n._key);throw new fe(Z.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${cp(n)}.`)}function LS(t,e){if(!Array.isArray(t)||t.length===0)throw new fe(Z.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BP(t,e){const n=function(i,a){for(const l of i)for(const c of l.getFlattenedFilters())if(a.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new fe(Z.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new fe(Z.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function n9(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class mf{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class al extends UP{constructor(e,n,r,i,a,l){super(e,n,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Lc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(Z.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=al._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}al._jsonSchemaVersion="firestore/documentSnapshot/1.0",al._jsonSchema={type:Dt("string",al._jsonSchemaVersion),bundleSource:Dt("string","DocumentSnapshot"),bundleName:Dt("string"),bundle:Dt("string")};class Uf extends al{data(e={}){return super.data(e)}}class ll{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new mf(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Uf(this._firestore,this._userDataWriter,r.key,r,new mf(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new fe(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,a){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map(c=>{const h=new Uf(i._firestore,i._userDataWriter,c.doc.key,c.doc,new mf(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:l++}})}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>a||c.type!==3).map(c=>{const h=new Uf(i._firestore,i._userDataWriter,c.doc.key,c.doc,new mf(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let p=-1,m=-1;return c.type!==0&&(p=l.indexOf(c.doc.key),l=l.delete(c.doc.key)),c.type!==1&&(l=l.add(c.doc),m=l.indexOf(c.doc.key)),{type:r9(c.type),doc:h,oldIndex:p,newIndex:m}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(Z.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ll._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Zv.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(a=>{a._document!==null&&(n.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function r9(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:t})}}/**
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
 */ll._jsonSchemaVersion="firestore/querySnapshot/1.0",ll._jsonSchema={type:Dt("string",ll._jsonSchemaVersion),bundleSource:Dt("string","QuerySnapshot"),bundleName:Dt("string"),bundle:Dt("string")};function R7(t){t=vd(t,ea);const e=vd(t.firestore,T_),n=VP(e),r=new ZU(e);return t9(t._query),LU(n,t._query).then(i=>new ll(e,r,t,i))}function k7(t,e){const n=vd(t.firestore,T_),r=UU(t),i=n9(t.converter,e),a=OP(t.firestore);return i9(n,[KU(a,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Ni.exists(!1))]).then(()=>r)}function i9(t,e){const n=VP(t);return OU(n,e)}(function(e,n=!0){Nj(Pl),ml(new Bo("firestore",(r,{instanceIdentifier:i,options:a})=>{const l=r.getProvider("app").getImmediate(),c=new T_(new Oj(r.getProvider("auth-internal")),new $j(l,r.getProvider("app-check-internal")),r5(l,i),l);return a={useFetchStreams:n,...a},c._setSettings(a),c},"PUBLIC").setMultipleInstances(!0)),Ds(VS,NS,e),Ds(VS,NS,"esm2020")})();const s9={apiKey:"AIzaSyCDMkgubFQ7JkTR9-TSWy-dXu2R9eFfYEk",authDomain:"kiddoo-0551.firebaseapp.com",projectId:"kiddoo-0551",storageBucket:"kiddoo-0551.firebasestorage.app",messagingSenderId:"325747061629",appId:"1:325747061629:web:98990a5ee753b531abd214"},WP=PA(s9),HP=Dj(WP),b7=zU(WP);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qP=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OS=t=>{const e=a9(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Dg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},KP=M.createContext({});function D7({children:t,size:e,color:n,strokeWidth:r,absoluteStrokeWidth:i,className:a}){const l=M.useMemo(()=>({size:e,color:n,strokeWidth:r,absoluteStrokeWidth:i,className:a}),[e,n,r,i,a]);return M.createElement(KP.Provider,{value:l},t)}const u9=()=>M.useContext(KP),c9=M.forwardRef(({color:t,size:e,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:a,iconNode:l,...c},h)=>{const{size:p=24,strokeWidth:m=2,absoluteStrokeWidth:y=!1,color:w="currentColor",className:T=""}=u9()??{},x=r??y?Number(n??m)*24/Number(e??p):n??m;return M.createElement("svg",{ref:h,...Dg,width:e??p??Dg.width,height:e??p??Dg.height,stroke:t??w,strokeWidth:x,className:qP("lucide",T,i),...!a&&!l9(c)&&{"aria-hidden":"true"},...c},[...l.map(([P,k])=>M.createElement(P,k)),...Array.isArray(a)?a:[a]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=(t,e)=>{const n=M.forwardRef(({className:r,...i},a)=>M.createElement(c9,{ref:a,iconNode:e,className:qP(`lucide-${o9(OS(t))}`,`lucide-${t}`,r),...i}));return n.displayName=OS(t),n};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=[["path",{d:"M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1",key:"2nz4b"}],["path",{d:"M12 6a2 2 0 0 1 2 2",key:"7y7d82"}],["path",{d:"M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0",key:"vqb5s3"}]],f9=Ft("balloon",h9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],p9=Ft("chevron-down",d9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],g9=Ft("chevron-left",m9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],v9=Ft("chevron-right",y9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],w9=Ft("circle-alert",_9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],T9=Ft("download",E9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],x9=Ft("history",S9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],A9=Ft("loader-circle",I9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],P9=Ft("log-out",C9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],k9=Ft("menu",R9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],D9=Ft("moon",b9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],GP=Ft("share-2",V9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],M9=Ft("sun",N9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],O9=Ft("trophy",L9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=[["path",{d:"M12 4v16",key:"1654pz"}],["path",{d:"M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2",key:"e0r10z"}],["path",{d:"M9 20h6",key:"s66wpe"}]],gf=Ft("type",F9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],$9=Ft("user",j9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],z9=Ft("volume-2",U9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],W9=Ft("volume-x",B9);/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],QP=Ft("x",H9),q9=()=>{const t=_v(),e=oi(),n=Pi(x=>x.alphabet.isMobileMenuOpen),r=Pi(x=>x.alphabet.isMuted),i=Pi(x=>x.alphabet.theme),a=Pi(x=>x.alphabet.user),[l,c]=M.useState(!1),[h,p]=M.useState(null),m=vA.en,y=M.useRef(null);M.useEffect(()=>{const x=P=>{y.current&&!y.current.contains(P.target)&&(c(!1),p(null))};return l&&document.addEventListener("mousedown",x),()=>{document.removeEventListener("mousedown",x)}},[l]);const w=e.pathname==="/"||!e.pathname;if(!a)return null;const T=a.displayName?a.displayName[0]:a.email?a.email[0]:"U";return F.jsxs(xL,{"data-testid":"layout-navbar",children:[F.jsxs(AL,{children:[F.jsx(kL,{$isVisible:!w,onClick:()=>t(uM()),children:n?F.jsx(QP,{size:24}):F.jsx(k9,{size:24})}),F.jsxs(IL,{as:Jf,to:"/",children:[F.jsx(CL,{children:F.jsx(f9,{size:24,color:"white",strokeWidth:2.5,fill:"rgba(255, 255, 255, 0.2)"})}),F.jsx(PL,{children:"kiddoo"})]})]}),F.jsxs(RL,{children:[F.jsx(lT,{as:Jf,to:"/test_history",title:"Test History",children:F.jsx(x9,{size:20})}),F.jsx(lT,{onClick:async()=>{const x={title:"Kiddoo - Fun Learning for Kids",text:"Check out Kiddoo, a fun and interactive learning platform for kids! 🚀",url:"https://dnshariprasad.github.io/kiddoo/"};try{navigator.share?await navigator.share(x):(await navigator.clipboard.writeText(`${x.text} ${x.url}`),alert("Link copied to clipboard! 📋"))}catch(P){console.error("Error sharing:",P)}},title:"Share Kiddoo",children:F.jsx(GP,{size:20})}),F.jsxs(bL,{ref:y,children:[F.jsxs(ML,{onClick:()=>c(!l),children:[F.jsx(LL,{children:T}),F.jsx(p9,{size:16,color:"white"})]}),l&&F.jsx(DL,{children:h?F.jsxs(F.Fragment,{children:[F.jsxs(NL,{onClick:()=>p(null),children:[F.jsx(g9,{size:20}),F.jsx("span",{children:m.com_back})]}),F.jsxs(ws,{onClick:()=>{t(pg("small")),c(!1),p(null)},children:[F.jsx(gf,{size:16}),F.jsx("span",{children:m.nav_small})]}),F.jsxs(ws,{onClick:()=>{t(pg("medium")),c(!1),p(null)},children:[F.jsx(gf,{size:20}),F.jsx("span",{children:m.nav_medium})]}),F.jsxs(ws,{onClick:()=>{t(pg("large")),c(!1),p(null)},children:[F.jsx(gf,{size:24}),F.jsx("span",{children:m.nav_large})]})]}):F.jsxs(F.Fragment,{children:[F.jsxs(ws,{onClick:()=>{t(cM()),c(!1)},children:[r?F.jsx(W9,{size:20}):F.jsx(z9,{size:20}),F.jsx("span",{children:r?m.nav_unmuteSound:m.nav_muteSound})]}),F.jsxs(ws,{onClick:()=>{t(hM()),c(!1)},children:[i==="light"?F.jsx(D9,{size:20}):F.jsx(M9,{size:20}),F.jsx("span",{children:i==="light"?m.nav_darkMode:m.nav_lightMode})]}),F.jsxs(ws,{onClick:()=>p("fontSize"),children:[F.jsx(gf,{size:20}),F.jsx("span",{children:m.nav_fontSize}),F.jsx(VL,{children:F.jsx(v9,{size:18})})]}),F.jsxs(ws,{onClick:async()=>{try{await T4(HP),t(dM()),c(!1)}catch(x){console.error("Logout error:",x)}},children:[F.jsx(P9,{size:20}),F.jsx("span",{children:"Logout"})]})]})})]})]})]})},P_=M.createContext({});function R_(t){const e=M.useRef(null);return e.current===null&&(e.current=t()),e.current}const K9=typeof window<"u",YP=K9?M.useLayoutEffect:M.useEffect,xp=M.createContext(null);function k_(t,e){t.indexOf(e)===-1&&t.push(e)}function kd(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}function V7([...t],e,n){const r=e<0?t.length+e:e;if(r>=0&&r<t.length){const i=n<0?t.length+n:n,[a]=t.splice(e,1);t.splice(i,0,a)}return t}const si=(t,e,n)=>n>e?e:n<t?t:n;let bd=()=>{};const Hs={},XP=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function JP(t){return typeof t=="object"&&t!==null}const ZP=t=>/^0[^.\s]+$/u.test(t);function eR(t){let e;return()=>(e===void 0&&(e=t()),e)}const nr=t=>t,G9=(t,e)=>n=>e(t(n)),Oc=(...t)=>t.reduce(G9),yc=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r};class b_{constructor(){this.subscriptions=[]}add(e){return k_(this.subscriptions,e),()=>kd(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let a=0;a<i;a++){const l=this.subscriptions[a];l&&l(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Un=t=>t*1e3,tr=t=>t/1e3;function tR(t,e){return e?t*(1e3/e):0}const nR=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Q9=1e-7,Y9=12;function X9(t,e,n,r,i){let a,l,c=0;do l=e+(n-e)/2,a=nR(l,r,i)-t,a>0?n=l:e=l;while(Math.abs(a)>Q9&&++c<Y9);return l}function Fc(t,e,n,r){if(t===e&&n===r)return nr;const i=a=>X9(a,0,1,t,n);return a=>a===0||a===1?a:nR(i(a),e,r)}const rR=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,iR=t=>e=>1-t(1-e),sR=Fc(.33,1.53,.69,.99),D_=iR(sR),oR=rR(D_),aR=t=>t>=1?1:(t*=2)<1?.5*D_(t):.5*(2-Math.pow(2,-10*(t-1))),V_=t=>1-Math.sin(Math.acos(t)),lR=iR(V_),uR=rR(V_),J9=Fc(.42,0,1,1),Z9=Fc(0,0,.58,1),cR=Fc(.42,0,.58,1),e6=t=>Array.isArray(t)&&typeof t[0]!="number",hR=t=>Array.isArray(t)&&typeof t[0]=="number",FS={linear:nr,easeIn:J9,easeInOut:cR,easeOut:Z9,circIn:V_,circInOut:uR,circOut:lR,backIn:D_,backInOut:oR,backOut:sR,anticipate:aR},t6=t=>typeof t=="string",jS=t=>{if(hR(t)){bd(t.length===4);const[e,n,r,i]=t;return Fc(e,n,r,i)}else if(t6(t))return bd(FS[t]!==void 0),FS[t];return t},yf=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function n6(t,e){let n=new Set,r=new Set,i=!1,a=!1;const l=new WeakSet;let c={delta:0,timestamp:0,isProcessing:!1};function h(m){l.has(m)&&(p.schedule(m),t()),m(c)}const p={schedule:(m,y=!1,w=!1)=>{const x=w&&i?n:r;return y&&l.add(m),x.add(m),m},cancel:m=>{r.delete(m),l.delete(m)},process:m=>{if(c=m,i){a=!0;return}i=!0;const y=n;n=r,r=y,n.forEach(h),n.clear(),i=!1,a&&(a=!1,p.process(m))}};return p}const r6=40;function fR(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,l=yf.reduce((U,$)=>(U[$]=n6(a),U),{}),{setup:c,read:h,resolveKeyframes:p,preUpdate:m,update:y,preRender:w,render:T,postRender:x}=l,P=()=>{const U=Hs.useManualTiming,$=U?i.timestamp:performance.now();n=!1,U||(i.delta=r?1e3/60:Math.max(Math.min($-i.timestamp,r6),1)),i.timestamp=$,i.isProcessing=!0,c.process(i),h.process(i),p.process(i),m.process(i),y.process(i),w.process(i),T.process(i),x.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(P))},k=()=>{n=!0,r=!0,i.isProcessing||t(P)};return{schedule:yf.reduce((U,$)=>{const H=l[$];return U[$]=(X,C=!1,I=!1)=>(n||k(),H.schedule(X,C,I)),U},{}),cancel:U=>{for(let $=0;$<yf.length;$++)l[yf[$]].cancel(U)},state:i,steps:l}}const{schedule:rt,cancel:qs,state:Jt,steps:Vg}=fR(typeof requestAnimationFrame<"u"?requestAnimationFrame:nr,!0);let zf;function i6(){zf=void 0}const yn={now:()=>(zf===void 0&&yn.set(Jt.isProcessing||Hs.useManualTiming?Jt.timestamp:performance.now()),zf),set:t=>{zf=t,queueMicrotask(i6)}},dR=t=>e=>typeof e=="string"&&e.startsWith(t),pR=dR("--"),s6=dR("var(--"),N_=t=>s6(t)?o6.test(t.split("/*")[0].trim()):!1,o6=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function $S(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Ml={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},vc={...Ml,transform:t=>si(0,1,t)},vf={...Ml,default:1},Ju=t=>Math.round(t*1e5)/1e5,M_=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function a6(t){return t==null}const l6=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,L_=(t,e)=>n=>!!(typeof n=="string"&&l6.test(n)&&n.startsWith(t)||e&&!a6(n)&&Object.prototype.hasOwnProperty.call(n,e)),mR=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,a,l,c]=r.match(M_);return{[t]:parseFloat(i),[e]:parseFloat(a),[n]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},u6=t=>si(0,255,t),Ng={...Ml,transform:t=>Math.round(u6(t))},Vo={test:L_("rgb","red"),parse:mR("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Ng.transform(t)+", "+Ng.transform(e)+", "+Ng.transform(n)+", "+Ju(vc.transform(r))+")"};function c6(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const jy={test:L_("#"),parse:c6,transform:Vo.transform},jc=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Es=jc("deg"),ri=jc("%"),ge=jc("px"),h6=jc("vh"),f6=jc("vw"),US={...ri,parse:t=>ri.parse(t)/100,transform:t=>ri.transform(t*100)},Xa={test:L_("hsl","hue"),parse:mR("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+ri.transform(Ju(e))+", "+ri.transform(Ju(n))+", "+Ju(vc.transform(r))+")"},Rt={test:t=>Vo.test(t)||jy.test(t)||Xa.test(t),parse:t=>Vo.test(t)?Vo.parse(t):Xa.test(t)?Xa.parse(t):jy.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Vo.transform(t):Xa.transform(t),getAnimatableNone:t=>{const e=Rt.parse(t);return e.alpha=0,Rt.transform(e)}},d6=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function p6(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(M_))==null?void 0:e.length)||0)+(((n=t.match(d6))==null?void 0:n.length)||0)>0}const gR="number",yR="color",m6="var",g6="var(",zS="${}",y6=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Tl(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const c=e.replace(y6,h=>(Rt.test(h)?(r.color.push(a),i.push(yR),n.push(Rt.parse(h))):h.startsWith(g6)?(r.var.push(a),i.push(m6),n.push(h)):(r.number.push(a),i.push(gR),n.push(parseFloat(h))),++a,zS)).split(zS);return{values:n,split:c,indexes:r,types:i}}function v6(t){return Tl(t).values}function vR({split:t,types:e}){const n=t.length;return r=>{let i="";for(let a=0;a<n;a++)if(i+=t[a],r[a]!==void 0){const l=e[a];l===gR?i+=Ju(r[a]):l===yR?i+=Rt.transform(r[a]):i+=r[a]}return i}}function _6(t){return vR(Tl(t))}const w6=t=>typeof t=="number"?0:Rt.test(t)?Rt.getAnimatableNone(t):t,E6=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:w6(t);function T6(t){const e=Tl(t);return vR(e)(e.values.map((r,i)=>E6(r,e.split[i])))}const Cr={test:p6,parse:v6,createTransformer:_6,getAnimatableNone:T6};function Mg(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function S6({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,a=0,l=0;if(!e)i=a=l=n;else{const c=n<.5?n*(1+e):n+e-n*e,h=2*n-c;i=Mg(h,c,t+1/3),a=Mg(h,c,t),l=Mg(h,c,t-1/3)}return{red:Math.round(i*255),green:Math.round(a*255),blue:Math.round(l*255),alpha:r}}function Dd(t,e){return n=>n>0?e:t}const ht=(t,e,n)=>t+(e-t)*n,Lg=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},x6=[jy,Vo,Xa],I6=t=>x6.find(e=>e.test(t));function BS(t){const e=I6(t);if(!e)return!1;let n=e.parse(t);return e===Xa&&(n=S6(n)),n}const WS=(t,e)=>{const n=BS(t),r=BS(e);if(!n||!r)return Dd(t,e);const i={...n};return a=>(i.red=Lg(n.red,r.red,a),i.green=Lg(n.green,r.green,a),i.blue=Lg(n.blue,r.blue,a),i.alpha=ht(n.alpha,r.alpha,a),Vo.transform(i))},$y=new Set(["none","hidden"]);function A6(t,e){return $y.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function C6(t,e){return n=>ht(t,e,n)}function O_(t){return typeof t=="number"?C6:typeof t=="string"?N_(t)?Dd:Rt.test(t)?WS:k6:Array.isArray(t)?_R:typeof t=="object"?Rt.test(t)?WS:P6:Dd}function _R(t,e){const n=[...t],r=n.length,i=t.map((a,l)=>O_(a)(a,e[l]));return a=>{for(let l=0;l<r;l++)n[l]=i[l](a);return n}}function P6(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=O_(t[i])(t[i],e[i]));return i=>{for(const a in r)n[a]=r[a](i);return n}}function R6(t,e){const n=[],r={color:0,var:0,number:0};for(let i=0;i<e.values.length;i++){const a=e.types[i],l=t.indexes[a][r[a]],c=t.values[l]??0;n[i]=c,r[a]++}return n}const k6=(t,e)=>{const n=Cr.createTransformer(e),r=Tl(t),i=Tl(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?$y.has(t)&&!i.values.length||$y.has(e)&&!r.values.length?A6(t,e):Oc(_R(R6(r,i),i.values),n):Dd(t,e)};function wR(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ht(t,e,n):O_(t)(t,e)}const b6=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>rt.update(e,n),stop:()=>qs(e),now:()=>Jt.isProcessing?Jt.timestamp:yn.now()}},ER=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let a=0;a<i;a++)r+=Math.round(t(a/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},Vd=2e4;function F_(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<Vd;)e+=n,r=t.next(e);return e>=Vd?1/0:e}function D6(t,e=100,n){const r=n({...t,keyframes:[0,e]}),i=Math.min(F_(r),Vd);return{type:"keyframes",ease:a=>r.next(i*a).value/e,duration:tr(i)}}const wt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Uy(t,e){return t*Math.sqrt(1-e*e)}const V6=12;function N6(t,e,n){let r=n;for(let i=1;i<V6;i++)r=r-t(r)/e(r);return r}const HS=.001;function M6({duration:t=wt.duration,bounce:e=wt.bounce,velocity:n=wt.velocity,mass:r=wt.mass}){let i,a,l=1-e;l=si(wt.minDamping,wt.maxDamping,l),t=si(wt.minDuration,wt.maxDuration,tr(t)),l<1?(i=p=>{const m=p*l,y=m*t,w=m-n,T=Uy(p,l),x=Math.exp(-y);return HS-w/T*x},a=p=>{const y=p*l*t,w=y*n+n,T=Math.pow(l,2)*Math.pow(p,2)*t,x=Math.exp(-y),P=Uy(Math.pow(p,2),l);return(-i(p)+HS>0?-1:1)*((w-T)*x)/P}):(i=p=>{const m=Math.exp(-p*t),y=(p-n)*t+1;return-.001+m*y},a=p=>{const m=Math.exp(-p*t),y=(n-p)*(t*t);return m*y});const c=5/t,h=N6(i,a,c);if(t=Un(t),isNaN(h))return{stiffness:wt.stiffness,damping:wt.damping,duration:t};{const p=Math.pow(h,2)*r;return{stiffness:p,damping:l*2*Math.sqrt(r*p),duration:t}}}const L6=["duration","bounce"],O6=["stiffness","damping","mass"];function qS(t,e){return e.some(n=>t[n]!==void 0)}function F6(t){let e={velocity:wt.velocity,stiffness:wt.stiffness,damping:wt.damping,mass:wt.mass,isResolvedFromDuration:!1,...t};if(!qS(t,O6)&&qS(t,L6))if(e.velocity=0,t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,a=2*si(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:wt.mass,stiffness:i,damping:a}}else{const n=M6({...t,velocity:0});e={...e,...n,mass:wt.mass},e.isResolvedFromDuration=!0}return e}function Nd(t=wt.visualDuration,e=wt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],l=n.keyframes[n.keyframes.length-1],c={done:!1,value:a},{stiffness:h,damping:p,mass:m,duration:y,velocity:w,isResolvedFromDuration:T}=F6({...n,velocity:-tr(n.velocity||0)}),x=w||0,P=p/(2*Math.sqrt(h*m)),k=l-a,b=tr(Math.sqrt(h/m)),O=Math.abs(k)<5;r||(r=O?wt.restSpeed.granular:wt.restSpeed.default),i||(i=O?wt.restDelta.granular:wt.restDelta.default);let U,$,H,X,C,I;if(P<1)H=Uy(b,P),X=(x+P*b*k)/H,U=D=>{const L=Math.exp(-P*b*D);return l-L*(X*Math.sin(H*D)+k*Math.cos(H*D))},C=P*b*X+k*H,I=P*b*k-X*H,$=D=>Math.exp(-P*b*D)*(C*Math.sin(H*D)+I*Math.cos(H*D));else if(P===1){U=L=>l-Math.exp(-b*L)*(k+(x+b*k)*L);const D=x+b*k;$=L=>Math.exp(-b*L)*(b*D*L-x)}else{const D=b*Math.sqrt(P*P-1);U=ke=>{const Ge=Math.exp(-P*b*ke),Xe=Math.min(D*ke,300);return l-Ge*((x+P*b*k)*Math.sinh(Xe)+D*k*Math.cosh(Xe))/D};const L=(x+P*b*k)/D,B=P*b*L-k*D,V=P*b*k-L*D;$=ke=>{const Ge=Math.exp(-P*b*ke),Xe=Math.min(D*ke,300);return Ge*(B*Math.sinh(Xe)+V*Math.cosh(Xe))}}const R={calculatedDuration:T&&y||null,velocity:D=>Un($(D)),next:D=>{if(!T&&P<1){const B=Math.exp(-P*b*D),V=Math.sin(H*D),ke=Math.cos(H*D),Ge=l-B*(X*V+k*ke),Xe=Un(B*(C*V+I*ke));return c.done=Math.abs(Xe)<=r&&Math.abs(l-Ge)<=i,c.value=c.done?l:Ge,c}const L=U(D);if(T)c.done=D>=y;else{const B=Un($(D));c.done=Math.abs(B)<=r&&Math.abs(l-L)<=i}return c.value=c.done?l:L,c},toString:()=>{const D=Math.min(F_(R),Vd),L=ER(B=>R.next(D*B).value,D,30);return D+"ms "+L},toTransition:()=>{}};return R}Nd.applyToOptions=t=>{const e=D6(t,100,Nd);return t.ease=e.ease,t.duration=Un(e.duration),t.type="keyframes",t};const j6=5;function TR(t,e,n){const r=Math.max(e-j6,0);return tR(n-t(r),e-r)}function zy({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:l,min:c,max:h,restDelta:p=.5,restSpeed:m}){const y=t[0],w={done:!1,value:y},T=I=>c!==void 0&&I<c||h!==void 0&&I>h,x=I=>c===void 0?h:h===void 0||Math.abs(c-I)<Math.abs(h-I)?c:h;let P=n*e;const k=y+P,b=l===void 0?k:l(k);b!==k&&(P=b-y);const O=I=>-P*Math.exp(-I/r),U=I=>b+O(I),$=I=>{const R=O(I),D=U(I);w.done=Math.abs(R)<=p,w.value=w.done?b:D};let H,X;const C=I=>{T(w.value)&&(H=I,X=Nd({keyframes:[w.value,x(w.value)],velocity:TR(U,I,w.value),damping:i,stiffness:a,restDelta:p,restSpeed:m}))};return C(0),{calculatedDuration:null,next:I=>{let R=!1;return!X&&H===void 0&&(R=!0,$(I),C(I)),H!==void 0&&I>=H?X.next(I-H):(!R&&$(I),w)}}}function $6(t,e,n){const r=[],i=n||Hs.mix||wR,a=t.length-1;for(let l=0;l<a;l++){let c=i(t[l],t[l+1]);if(e){const h=Array.isArray(e)?e[l]||nr:e;c=Oc(h,c)}r.push(c)}return r}function U6(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const a=t.length;if(bd(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const l=t[0]===t[1];t[0]>t[a-1]&&(t=[...t].reverse(),e=[...e].reverse());const c=$6(e,r,i),h=c.length,p=m=>{if(l&&m<t[0])return e[0];let y=0;if(h>1)for(;y<t.length-2&&!(m<t[y+1]);y++);const w=yc(t[y],t[y+1],m);return c[y](w)};return n?m=>p(si(t[0],t[a-1],m)):p}function z6(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=yc(0,e,r);t.push(ht(n,1,i))}}function B6(t){const e=[0];return z6(e,t.length-1),e}function W6(t,e){return t.map(n=>n*e)}function H6(t,e){return t.map(()=>e||cR).splice(0,t.length-1)}function Zu({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=e6(r)?r.map(jS):jS(r),a={done:!1,value:e[0]},l=W6(n&&n.length===e.length?n:B6(e),t),c=U6(l,e,{ease:Array.isArray(i)?i:H6(e,i)});return{calculatedDuration:t,next:h=>(a.value=c(h),a.done=h>=t,a)}}const q6=t=>t!==null;function Ip(t,{repeat:e,repeatType:n="loop"},r,i=1){const a=t.filter(q6),c=i<0||e&&n!=="loop"&&e%2===1?0:a.length-1;return!c||r===void 0?a[c]:r}const K6={decay:zy,inertia:zy,tween:Zu,keyframes:Zu,spring:Nd};function SR(t){typeof t.type=="string"&&(t.type=K6[t.type])}class j_{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const G6=t=>t/100;class Md extends j_{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==yn.now()&&this.tick(yn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;SR(e);const{type:n=Zu,repeat:r=0,repeatDelay:i=0,repeatType:a,velocity:l=0}=e;let{keyframes:c}=e;const h=n||Zu;h!==Zu&&typeof c[0]!="number"&&(this.mixKeyframes=Oc(G6,wR(c[0],c[1])),c=[0,100]);const p=h({...e,keyframes:c});a==="mirror"&&(this.mirroredGenerator=h({...e,keyframes:[...c].reverse(),velocity:-l})),p.calculatedDuration===null&&(p.calculatedDuration=F_(p));const{calculatedDuration:m}=p;this.calculatedDuration=m,this.resolvedDuration=m+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=p}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:r,totalDuration:i,mixKeyframes:a,mirroredGenerator:l,resolvedDuration:c,calculatedDuration:h}=this;if(this.startTime===null)return r.next(0);const{delay:p=0,keyframes:m,repeat:y,repeatType:w,repeatDelay:T,type:x,onUpdate:P,finalKeyframe:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-i/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const b=this.currentTime-p*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?b<0:b>i;this.currentTime=Math.max(b,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let U=this.currentTime,$=r;if(y){const I=Math.min(this.currentTime,i)/c;let R=Math.floor(I),D=I%1;!D&&I>=1&&(D=1),D===1&&R--,R=Math.min(R,y+1),!!(R%2)&&(w==="reverse"?(D=1-D,T&&(D-=T/c)):w==="mirror"&&($=l)),U=si(0,1,D)*c}let H;O?(this.delayState.value=m[0],H=this.delayState):H=$.next(U),a&&!O&&(H.value=a(H.value));let{done:X}=H;!O&&h!==null&&(X=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&X);return C&&x!==zy&&(H.value=Ip(m,this.options,k,this.speed)),P&&P(H.value),C&&this.finish(),H}then(e,n){return this.finished.then(e,n)}get duration(){return tr(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+tr(e)}get time(){return tr(this.currentTime)}set time(e){e=Un(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const n=this.generator.next(e).value;return TR(r=>this.generator.next(r).value,e,n)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;n&&this.driver&&this.updateTime(yn.now()),this.playbackSpeed=e,n&&this.driver&&(this.time=tr(this.currentTime))}play(){var i,a;if(this.isStopped)return;const{driver:e=b6,startTime:n}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),(a=(i=this.options).onPlay)==null||a.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(yn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function Q6(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const No=t=>t*180/Math.PI,By=t=>{const e=No(Math.atan2(t[1],t[0]));return Wy(e)},Y6={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:By,rotateZ:By,skewX:t=>No(Math.atan(t[1])),skewY:t=>No(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Wy=t=>(t=t%360,t<0&&(t+=360),t),KS=By,GS=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),QS=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),X6={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:GS,scaleY:QS,scale:t=>(GS(t)+QS(t))/2,rotateX:t=>Wy(No(Math.atan2(t[6],t[5]))),rotateY:t=>Wy(No(Math.atan2(-t[2],t[0]))),rotateZ:KS,rotate:KS,skewX:t=>No(Math.atan(t[4])),skewY:t=>No(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Hy(t){return t.includes("scale")?1:0}function qy(t,e){if(!t||t==="none")return Hy(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=X6,i=n;else{const c=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Y6,i=c}if(!i)return Hy(e);const a=r[e],l=i[1].split(",").map(Z6);return typeof a=="function"?a(l):l[a]}const J6=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return qy(n,e)};function Z6(t){return parseFloat(t.trim())}const Ll=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ol=new Set(Ll),YS=t=>t===Ml||t===ge,ez=new Set(["x","y","z"]),tz=Ll.filter(t=>!ez.has(t));function nz(t){const e=[];return tz.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Ps={width:({x:t},{paddingLeft:e="0",paddingRight:n="0",boxSizing:r})=>{const i=t.max-t.min;return r==="border-box"?i:i-parseFloat(e)-parseFloat(n)},height:({y:t},{paddingTop:e="0",paddingBottom:n="0",boxSizing:r})=>{const i=t.max-t.min;return r==="border-box"?i:i-parseFloat(e)-parseFloat(n)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>qy(e,"x"),y:(t,{transform:e})=>qy(e,"y")};Ps.translateX=Ps.x;Ps.translateY=Ps.y;const Lo=new Set;let Ky=!1,Gy=!1,Qy=!1;function xR(){if(Gy){const t=Array.from(Lo).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=nz(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([a,l])=>{var c;(c=r.getValue(a))==null||c.set(l)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Gy=!1,Ky=!1,Lo.forEach(t=>t.complete(Qy)),Lo.clear()}function IR(){Lo.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Gy=!0)})}function rz(){Qy=!0,IR(),xR(),Qy=!1}class $_{constructor(e,n,r,i,a,l=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=a,this.isAsync=l}scheduleResolve(){this.state="scheduled",this.isAsync?(Lo.add(this),Ky||(Ky=!0,rt.read(IR),rt.resolveKeyframes(xR))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;if(e[0]===null){const a=i==null?void 0:i.get(),l=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&n){const c=r.readValue(n,l);c!=null&&(e[0]=c)}e[0]===void 0&&(e[0]=l),i&&a===void 0&&i.set(e[0])}Q6(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Lo.delete(this)}cancel(){this.state==="scheduled"&&(Lo.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const iz=t=>t.startsWith("--");function AR(t,e,n){iz(e)?t.style.setProperty(e,n):t.style[e]=n}const sz={};function CR(t,e){const n=eR(t);return()=>sz[e]??n()}const oz=CR(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),PR=CR(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Bu=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,XS={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bu([0,.65,.55,1]),circOut:Bu([.55,0,1,.45]),backIn:Bu([.31,.01,.66,-.59]),backOut:Bu([.33,1.53,.69,.99])};function RR(t,e){if(t)return typeof t=="function"?PR()?ER(t,e):"ease-out":hR(t)?Bu(t):Array.isArray(t)?t.map(n=>RR(n,e)||XS.easeOut):XS[t]}function az(t,e,n,{delay:r=0,duration:i=300,repeat:a=0,repeatType:l="loop",ease:c="easeOut",times:h}={},p=void 0){const m={[e]:n};h&&(m.offset=h);const y=RR(c,i);Array.isArray(y)&&(m.easing=y);const w={delay:r,duration:i,easing:Array.isArray(y)?"linear":y,fill:"both",iterations:a+1,direction:l==="reverse"?"alternate":"normal"};return p&&(w.pseudoElement=p),t.animate(m,w)}function kR(t){return typeof t=="function"&&"applyToOptions"in t}function lz({type:t,...e}){return kR(t)&&PR()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class bR extends j_{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:r,keyframes:i,pseudoElement:a,allowFlatten:l=!1,finalKeyframe:c,onComplete:h}=e;this.isPseudoElement=!!a,this.allowFlatten=l,this.options=e,bd(typeof e.type!="string");const p=lz(e);this.animation=az(n,r,i,p,a),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const m=Ip(i,this.options,c,this.speed);this.updateMotionValue&&this.updateMotionValue(m),AR(n,r,m),this.animation.cancel()}h==null||h(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const e=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return tr(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+tr(e)}get time(){return tr(Number(this.animation.currentTime)||0)}set time(e){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Un(e),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:n,rangeEnd:r,observe:i}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&oz()?(this.animation.timeline=e,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),nr):i(this)}}const DR={anticipate:aR,backInOut:oR,circInOut:uR};function uz(t){return t in DR}function cz(t){typeof t.ease=="string"&&uz(t.ease)&&(t.ease=DR[t.ease])}const Og=10;class hz extends bR{constructor(e){cz(e),SR(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:r,onComplete:i,element:a,...l}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const c=new Md({...l,autoplay:!1}),h=Math.max(Og,yn.now()-this.startTime),p=si(0,Og,h-Og),m=c.sample(h).value,{name:y}=this.options;a&&y&&AR(a,y,m),n.setWithVelocity(c.sample(Math.max(0,h-p)).value,m,p),c.stop()}}const JS=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Cr.test(t)||t==="0")&&!t.startsWith("url("));function fz(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function dz(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const a=t[t.length-1],l=JS(i,e),c=JS(a,e);return!l||!c?!1:fz(t)||(n==="spring"||kR(n))&&r}function Yy(t){t.duration=0,t.type="keyframes"}const VR=new Set(["opacity","clipPath","filter","transform"]),pz=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function mz(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&pz.test(t[e]))return!0;return!1}const gz=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),yz=eR(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function vz(t){var y;const{motionValue:e,name:n,repeatDelay:r,repeatType:i,damping:a,type:l,keyframes:c}=t;if(!(((y=e==null?void 0:e.owner)==null?void 0:y.current)instanceof HTMLElement))return!1;const{onUpdate:p,transformTemplate:m}=e.owner.getProps();return yz()&&n&&(VR.has(n)||gz.has(n)&&mz(c))&&(n!=="transform"||!m)&&!p&&!r&&i!=="mirror"&&a!==0&&l!=="inertia"}const _z=40;class wz extends j_{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:l="loop",keyframes:c,name:h,motionValue:p,element:m,...y}){var x;super(),this.stop=()=>{var P,k;this._animation&&(this._animation.stop(),(P=this.stopTimeline)==null||P.call(this)),(k=this.keyframeResolver)==null||k.cancel()},this.createdAt=yn.now();const w={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:l,name:h,motionValue:p,element:m,...y},T=(m==null?void 0:m.KeyframeResolver)||$_;this.keyframeResolver=new T(c,(P,k,b)=>this.onKeyframesResolved(P,k,w,!b),h,p,m),(x=this.keyframeResolver)==null||x.scheduleResolve()}onKeyframesResolved(e,n,r,i){var b,O;this.keyframeResolver=void 0;const{name:a,type:l,velocity:c,delay:h,isHandoff:p,onUpdate:m}=r;this.resolvedAt=yn.now();let y=!0;dz(e,a,l,c)||(y=!1,(Hs.instantAnimations||!h)&&(m==null||m(Ip(e,r,n))),e[0]=e[e.length-1],Yy(r),r.repeat=0);const T={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>_z?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:e},x=y&&!p&&vz(T),P=(O=(b=T.motionValue)==null?void 0:b.owner)==null?void 0:O.current;let k;if(x)try{k=new hz({...T,element:P})}catch{k=new Md(T)}else k=new Md(T);k.finished.then(()=>{this.notifyFinished()}).catch(nr),this.pendingTimeline&&(this.stopTimeline=k.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=k}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),rz()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function NR(t,e,n,r=0,i=1){const a=Array.from(t).sort((p,m)=>p.sortNodePosition(m)).indexOf(e),l=t.size,c=(l-1)*r;return typeof n=="function"?n(a,l):i===1?a*r:c-a*r}const Ez=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Tz(t){const e=Ez.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function MR(t,e,n=1){const[r,i]=Tz(t);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const l=a.trim();return XP(l)?parseFloat(l):l}return N_(i)?MR(i,e,n+1):i}const Sz={type:"spring",stiffness:500,damping:25,restSpeed:10},xz=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Iz={type:"keyframes",duration:.8},Az={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Cz=(t,{keyframes:e})=>e.length>2?Iz:Ol.has(t)?t.startsWith("scale")?xz(e[1]):Sz:Az;function LR(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...r}=t;return{...e,...r}}return t}function U_(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?LR(n,t):n}const Pz=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Rz(t){for(const e in t)if(!Pz.has(e))return!0;return!1}const z_=(t,e,n,r={},i,a)=>l=>{const c=U_(r,t)||{},h=c.delay||r.delay||0;let{elapsed:p=0}=r;p=p-Un(h);const m={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-p,onUpdate:w=>{e.set(w),c.onUpdate&&c.onUpdate(w)},onComplete:()=>{l(),c.onComplete&&c.onComplete()},name:t,motionValue:e,element:a?void 0:i};Rz(c)||Object.assign(m,Cz(t,m)),m.duration&&(m.duration=Un(m.duration)),m.repeatDelay&&(m.repeatDelay=Un(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let y=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Yy(m),m.delay===0&&(y=!0)),(Hs.instantAnimations||Hs.skipAnimations||i!=null&&i.shouldSkipAnimations)&&(y=!0,Yy(m),m.delay=0),m.allowFlatten=!c.type&&!c.ease,y&&!a&&e.get()!==void 0){const w=Ip(m.keyframes,c);if(w!==void 0){rt.update(()=>{m.onUpdate(w),m.onComplete()});return}}return c.isSync?new Md(m):new wz(m)};function ZS(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function B_(t,e,n,r){if(typeof e=="function"){const[i,a]=ZS(r);e=e(n!==void 0?n:t.custom,i,a)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,a]=ZS(r);e=e(n!==void 0?n:t.custom,i,a)}return e}function Oo(t,e,n){const r=t.getProps();return B_(r,e,n!==void 0?n:r.custom,t)}const OR=new Set(["width","height","top","left","right","bottom",...Ll]),ex=30,kz=t=>!isNaN(parseFloat(t)),tx={current:void 0};class bz{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const i=yn.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=yn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=kz(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new b_);const r=this.events[e].add(n);return e==="change"?()=>{r(),rt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return tx.current&&tx.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=yn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>ex)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ex);return tR(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Sl(t,e){return new bz(t,e)}const Xy=t=>Array.isArray(t);function Dz(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Sl(n))}function Vz(t){return Xy(t)?t[t.length-1]||0:t}function Nz(t,e){const n=Oo(t,e);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const l in a){const c=Vz(a[l]);Dz(t,l,c)}}const tn=t=>!!(t&&t.getVelocity);function Mz(t){return!!(tn(t)&&t.add)}function Jy(t,e){const n=t.getValue("willChange");if(Mz(n))return n.add(e);if(!n&&Hs.WillChange){const r=new Hs.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function W_(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const Lz="framerAppearId",FR="data-"+W_(Lz);function jR(t){return t.props[FR]}function Oz({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function $R(t,e,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:a,transitionEnd:l,...c}=e;const h=t.getDefaultTransition();a=a?LR(a,h):h;const p=a==null?void 0:a.reduceMotion;r&&(a=r);const m=[],y=i&&t.animationState&&t.animationState.getState()[i];for(const w in c){const T=t.getValue(w,t.latestValues[w]??null),x=c[w];if(x===void 0||y&&Oz(y,w))continue;const P={delay:n,...U_(a||{},w)},k=T.get();if(k!==void 0&&!T.isAnimating()&&!Array.isArray(x)&&x===k&&!P.velocity){rt.update(()=>T.set(x));continue}let b=!1;if(window.MotionHandoffAnimation){const $=jR(t);if($){const H=window.MotionHandoffAnimation($,w,rt);H!==null&&(P.startTime=H,b=!0)}}Jy(t,w);const O=p??t.shouldReduceMotion;T.start(z_(w,T,x,O&&OR.has(w)?{type:!1}:P,t,b));const U=T.animation;U&&m.push(U)}if(l){const w=()=>rt.update(()=>{l&&Nz(t,l)});m.length?Promise.all(m).then(w):w()}return m}function Zy(t,e,n={}){var h;const r=Oo(t,e,n.type==="exit"?(h=t.presenceContext)==null?void 0:h.custom:void 0);let{transition:i=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all($R(t,r,n)):()=>Promise.resolve(),l=t.variantChildren&&t.variantChildren.size?(p=0)=>{const{delayChildren:m=0,staggerChildren:y,staggerDirection:w}=i;return Fz(t,e,p,m,y,w,n)}:()=>Promise.resolve(),{when:c}=i;if(c){const[p,m]=c==="beforeChildren"?[a,l]:[l,a];return p().then(()=>m())}else return Promise.all([a(),l(n.delay)])}function Fz(t,e,n=0,r=0,i=0,a=1,l){const c=[];for(const h of t.variantChildren)h.notify("AnimationStart",e),c.push(Zy(h,e,{...l,delay:n+(typeof r=="function"?0:r)+NR(t.variantChildren,h,r,i,a)}).then(()=>h.notify("AnimationComplete",e)));return Promise.all(c)}function jz(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(a=>Zy(t,a,n));r=Promise.all(i)}else if(typeof e=="string")r=Zy(t,e,n);else{const i=typeof e=="function"?Oo(t,e,n.custom):e;r=Promise.all($R(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const $z={test:t=>t==="auto",parse:t=>t},UR=t=>e=>e.test(t),zR=[Ml,ge,ri,Es,f6,h6,$z],nx=t=>zR.find(UR(t));function Uz(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ZP(t):!0}const zz=new Set(["brightness","contrast","saturate","opacity"]);function Bz(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(M_)||[];if(!r)return t;const i=n.replace(r,"");let a=zz.has(e)?1:0;return r!==n&&(a*=100),e+"("+a+i+")"}const Wz=/\b([a-z-]*)\(.*?\)/gu,ev={...Cr,getAnimatableNone:t=>{const e=t.match(Wz);return e?e.map(Bz).join(" "):t}},tv={...Cr,getAnimatableNone:t=>{const e=Cr.parse(t);return Cr.createTransformer(t)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},rx={...Ml,transform:Math.round},Hz={rotate:Es,rotateX:Es,rotateY:Es,rotateZ:Es,scale:vf,scaleX:vf,scaleY:vf,scaleZ:vf,skew:Es,skewX:Es,skewY:Es,distance:ge,translateX:ge,translateY:ge,translateZ:ge,x:ge,y:ge,z:ge,perspective:ge,transformPerspective:ge,opacity:vc,originX:US,originY:US,originZ:ge},H_={borderWidth:ge,borderTopWidth:ge,borderRightWidth:ge,borderBottomWidth:ge,borderLeftWidth:ge,borderRadius:ge,borderTopLeftRadius:ge,borderTopRightRadius:ge,borderBottomRightRadius:ge,borderBottomLeftRadius:ge,width:ge,maxWidth:ge,height:ge,maxHeight:ge,top:ge,right:ge,bottom:ge,left:ge,inset:ge,insetBlock:ge,insetBlockStart:ge,insetBlockEnd:ge,insetInline:ge,insetInlineStart:ge,insetInlineEnd:ge,padding:ge,paddingTop:ge,paddingRight:ge,paddingBottom:ge,paddingLeft:ge,paddingBlock:ge,paddingBlockStart:ge,paddingBlockEnd:ge,paddingInline:ge,paddingInlineStart:ge,paddingInlineEnd:ge,margin:ge,marginTop:ge,marginRight:ge,marginBottom:ge,marginLeft:ge,marginBlock:ge,marginBlockStart:ge,marginBlockEnd:ge,marginInline:ge,marginInlineStart:ge,marginInlineEnd:ge,fontSize:ge,backgroundPositionX:ge,backgroundPositionY:ge,...Hz,zIndex:rx,fillOpacity:vc,strokeOpacity:vc,numOctaves:rx},qz={...H_,color:Rt,backgroundColor:Rt,outlineColor:Rt,fill:Rt,stroke:Rt,borderColor:Rt,borderTopColor:Rt,borderRightColor:Rt,borderBottomColor:Rt,borderLeftColor:Rt,filter:ev,WebkitFilter:ev,mask:tv,WebkitMask:tv},BR=t=>qz[t],Kz=new Set([ev,tv]);function WR(t,e){let n=BR(t);return Kz.has(n)||(n=Cr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const Gz=new Set(["auto","none","0"]);function Qz(t,e,n){let r=0,i;for(;r<t.length&&!i;){const a=t[r];typeof a=="string"&&!Gz.has(a)&&Tl(a).values.length&&(i=t[r]),r++}if(i&&n)for(const a of e)t[a]=WR(n,i)}class Yz extends $_{constructor(e,n,r,i,a){super(e,n,r,i,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let y=e[m];if(typeof y=="string"&&(y=y.trim(),N_(y))){const w=MR(y,n.current);w!==void 0&&(e[m]=w),m===e.length-1&&(this.finalKeyframe=y)}}if(this.resolveNoneKeyframes(),!OR.has(r)||e.length!==2)return;const[i,a]=e,l=nx(i),c=nx(a),h=$S(i),p=$S(a);if(h!==p&&Ps[r]){this.needsMeasurement=!0;return}if(l!==c)if(YS(l)&&YS(c))for(let m=0;m<e.length;m++){const y=e[m];typeof y=="string"&&(e[m]=parseFloat(y))}else Ps[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)(e[i]===null||Uz(e[i]))&&r.push(i);r.length&&Qz(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ps[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var c;const{element:e,name:n,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const i=e.getValue(n);i&&i.jump(this.measuredOrigin,!1);const a=r.length-1,l=r[a];r[a]=Ps[n](e.measureViewportBox(),window.getComputedStyle(e.current)),l!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=l),(c=this.removedTransforms)!=null&&c.length&&this.removedTransforms.forEach(([h,p])=>{e.getValue(h).set(p)}),this.resolveNoneKeyframes()}}function HR(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const i=document.querySelectorAll(t);return i?Array.from(i):[]}return Array.from(t).filter(r=>r!=null)}const qR=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function Bf(t){return JP(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:q_,cancel:N7}=fR(queueMicrotask,!1),wr={x:!1,y:!1};function KR(){return wr.x||wr.y}function Xz(t){return t==="x"||t==="y"?wr[t]?null:(wr[t]=!0,()=>{wr[t]=!1}):wr.x||wr.y?null:(wr.x=wr.y=!0,()=>{wr.x=wr.y=!1})}function GR(t,e){const n=HR(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function Jz(t){return!(t.pointerType==="touch"||KR())}function Zz(t,e,n={}){const[r,i,a]=GR(t,n);return r.forEach(l=>{let c=!1,h=!1,p;const m=()=>{l.removeEventListener("pointerleave",x)},y=k=>{p&&(p(k),p=void 0),m()},w=k=>{c=!1,window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),h&&(h=!1,y(k))},T=()=>{c=!0,window.addEventListener("pointerup",w,i),window.addEventListener("pointercancel",w,i)},x=k=>{if(k.pointerType!=="touch"){if(c){h=!0;return}y(k)}},P=k=>{if(!Jz(k))return;h=!1;const b=e(l,k);typeof b=="function"&&(p=b,l.addEventListener("pointerleave",x,i))};l.addEventListener("pointerenter",P,i),l.addEventListener("pointerdown",T,i)}),a}const QR=(t,e)=>e?t===e?!0:QR(t,e.parentElement):!1,K_=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,e3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function t3(t){return e3.has(t.tagName)||t.isContentEditable===!0}const n3=new Set(["INPUT","SELECT","TEXTAREA"]);function r3(t){return n3.has(t.tagName)||t.isContentEditable===!0}const Wf=new WeakSet;function ix(t){return e=>{e.key==="Enter"&&t(e)}}function Fg(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const i3=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=ix(()=>{if(Wf.has(n))return;Fg(n,"down");const i=ix(()=>{Fg(n,"up")}),a=()=>Fg(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",a,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)};function sx(t){return K_(t)&&!KR()}const ox=new WeakSet;function s3(t,e,n={}){const[r,i,a]=GR(t,n),l=c=>{const h=c.currentTarget;if(!sx(c)||ox.has(c))return;Wf.add(h),n.stopPropagation&&ox.add(c);const p=e(h,c),m=(T,x)=>{window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",w),Wf.has(h)&&Wf.delete(h),sx(T)&&typeof p=="function"&&p(T,{success:x})},y=T=>{m(T,h===window||h===document||n.useGlobalTarget||QR(h,T.target))},w=T=>{m(T,!1)};window.addEventListener("pointerup",y,i),window.addEventListener("pointercancel",w,i)};return r.forEach(c=>{(n.useGlobalTarget?window:c).addEventListener("pointerdown",l,i),Bf(c)&&(c.addEventListener("focus",p=>i3(p,i)),!t3(c)&&!c.hasAttribute("tabindex")&&(c.tabIndex=0))}),a}function G_(t){return JP(t)&&"ownerSVGElement"in t}const Hf=new WeakMap;let Ts;const YR=(t,e,n)=>(r,i)=>i&&i[0]?i[0][t+"Size"]:G_(r)&&"getBBox"in r?r.getBBox()[e]:r[n],o3=YR("inline","width","offsetWidth"),a3=YR("block","height","offsetHeight");function l3({target:t,borderBoxSize:e}){var n;(n=Hf.get(t))==null||n.forEach(r=>{r(t,{get width(){return o3(t,e)},get height(){return a3(t,e)}})})}function u3(t){t.forEach(l3)}function c3(){typeof ResizeObserver>"u"||(Ts=new ResizeObserver(u3))}function h3(t,e){Ts||c3();const n=HR(t);return n.forEach(r=>{let i=Hf.get(r);i||(i=new Set,Hf.set(r,i)),i.add(e),Ts==null||Ts.observe(r)}),()=>{n.forEach(r=>{const i=Hf.get(r);i==null||i.delete(e),i!=null&&i.size||Ts==null||Ts.unobserve(r)})}}const qf=new Set;let Ja;function f3(){Ja=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};qf.forEach(e=>e(t))},window.addEventListener("resize",Ja)}function d3(t){return qf.add(t),Ja||f3(),()=>{qf.delete(t),!qf.size&&typeof Ja=="function"&&(window.removeEventListener("resize",Ja),Ja=void 0)}}function ax(t,e){return typeof t=="function"?d3(t):h3(t,e)}function p3(t){return G_(t)&&t.tagName==="svg"}const m3=[...zR,Rt,Cr],g3=t=>m3.find(UR(t)),lx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Za=()=>({x:lx(),y:lx()}),ux=()=>({min:0,max:0}),Lt=()=>({x:ux(),y:ux()}),y3=new WeakMap;function Ap(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function _c(t){return typeof t=="string"||Array.isArray(t)}const Q_=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Y_=["initial",...Q_];function Cp(t){return Ap(t.animate)||Y_.some(e=>_c(t[e]))}function XR(t){return!!(Cp(t)||t.variants)}function v3(t,e,n){for(const r in e){const i=e[r],a=n[r];if(tn(i))t.addValue(r,i);else if(tn(a))t.addValue(r,Sl(i,{owner:t}));else if(a!==i)if(t.hasValue(r)){const l=t.getValue(r);l.liveStyle===!0?l.jump(i):l.hasAnimated||l.set(i)}else{const l=t.getStaticValue(r);t.addValue(r,Sl(l!==void 0?l:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const nv={current:null},JR={current:!1},_3=typeof window<"u";function w3(){if(JR.current=!0,!!_3)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>nv.current=t.matches;t.addEventListener("change",e),e()}else nv.current=!1}const cx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ld={};function ZR(t){Ld=t}function E3(){return Ld}class T3{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:a,blockInitialAnimation:l,visualState:c},h={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=$_,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const T=yn.now();this.renderScheduledAt<T&&(this.renderScheduledAt=T,rt.render(this.render,!1,!0))};const{latestValues:p,renderState:m}=c;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=m,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=a,this.options=h,this.blockInitialAnimation=!!l,this.isControllingVariants=Cp(n),this.isVariantNode=XR(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:y,...w}=this.scrapeMotionValuesFromProps(n,{},this);for(const T in w){const x=w[T];p[T]!==void 0&&tn(x)&&x.set(p[T])}}mount(e){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=e,y3.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,a)=>this.bindToMotionValue(a,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(JR.current||w3(),this.shouldReduceMotion=nv.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),qs(this.notifyUpdate),qs(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&VR.has(e)&&this.current instanceof HTMLElement){const{factory:l,keyframes:c,times:h,ease:p,duration:m}=n.accelerate,y=new bR({element:this.current,name:e,keyframes:c,times:h,ease:p,duration:Un(m)}),w=l(y);this.valueSubscriptions.set(e,()=>{w(),y.cancel()});return}const r=Ol.has(e);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",l=>{this.latestValues[e]=l,this.props.onUpdate&&rt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),a&&a(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Ld){const n=Ld[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Lt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<cx.length;r++){const i=cx[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const a="on"+i,l=e[a];l&&(this.propEventSubscriptions[i]=this.on(i,l))}this.prevMotionValues=v3(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Sl(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(XP(r)||ZP(r))?r=parseFloat(r):!g3(r)&&Cr.test(n)&&(r=WR(e,n)),this.setBaseTarget(e,tn(r)?r.get():r)),tn(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var a;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const l=B_(this.props,n,(a=this.presenceContext)==null?void 0:a.custom);l&&(r=l[e])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,e);return i!==void 0&&!tn(i)?i:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new b_),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){q_.render(this.render)}}class ek extends T3{constructor(){super(...arguments),this.KeyframeResolver=Yz}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const r=e.style;return r?r[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;tn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Ys{constructor(e){this.isMounted=!1,this.node=e}update(){}}function tk({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function S3({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function x3(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function jg(t){return t===void 0||t===1}function rv({scale:t,scaleX:e,scaleY:n}){return!jg(t)||!jg(e)||!jg(n)}function Po(t){return rv(t)||nk(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function nk(t){return hx(t.x)||hx(t.y)}function hx(t){return t&&t!=="0%"}function Od(t,e,n){const r=t-n,i=e*r;return n+i}function fx(t,e,n,r,i){return i!==void 0&&(t=Od(t,i,r)),Od(t,n,r)+e}function iv(t,e=0,n=1,r,i){t.min=fx(t.min,e,n,r,i),t.max=fx(t.max,e,n,r,i)}function rk(t,{x:e,y:n}){iv(t.x,e.translate,e.scale,e.originPoint),iv(t.y,n.translate,n.scale,n.originPoint)}const dx=.999999999999,px=1.0000000000001;function I3(t,e,n,r=!1){var c;const i=n.length;if(!i)return;e.x=e.y=1;let a,l;for(let h=0;h<i;h++){a=n[h],l=a.projectionDelta;const{visualElement:p}=a.options;p&&p.props.style&&p.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Jr(t.x,-a.scroll.offset.x),Jr(t.y,-a.scroll.offset.y)),l&&(e.x*=l.x.scale,e.y*=l.y.scale,rk(t,l)),r&&Po(a.latestValues)&&Kf(t,a.latestValues,(c=a.layout)==null?void 0:c.layoutBox))}e.x<px&&e.x>dx&&(e.x=1),e.y<px&&e.y>dx&&(e.y=1)}function Jr(t,e){t.min+=e,t.max+=e}function mx(t,e,n,r,i=.5){const a=ht(t.min,t.max,i);iv(t,e,n,a,r)}function gx(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Kf(t,e,n){const r=n??t;mx(t.x,gx(e.x,r.x),e.scaleX,e.scale,e.originX),mx(t.y,gx(e.y,r.y),e.scaleY,e.scale,e.originY)}function ik(t,e){return tk(x3(t.getBoundingClientRect(),e))}function A3(t,e,n){const r=ik(t,n),{scroll:i}=e;return i&&(Jr(r.x,i.offset.x),Jr(r.y,i.offset.y)),r}const C3={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},P3=Ll.length;function R3(t,e,n){let r="",i=!0;for(let a=0;a<P3;a++){const l=Ll[a],c=t[l];if(c===void 0)continue;let h=!0;if(typeof c=="number")h=c===(l.startsWith("scale")?1:0);else{const p=parseFloat(c);h=l.startsWith("scale")?p===1:p===0}if(!h||n){const p=qR(c,H_[l]);if(!h){i=!1;const m=C3[l]||l;r+=`${m}(${p}) `}n&&(e[l]=p)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function X_(t,e,n){const{style:r,vars:i,transformOrigin:a}=t;let l=!1,c=!1;for(const h in e){const p=e[h];if(Ol.has(h)){l=!0;continue}else if(pR(h)){i[h]=p;continue}else{const m=qR(p,H_[h]);h.startsWith("origin")?(c=!0,a[h]=m):r[h]=m}}if(e.transform||(l||n?r.transform=R3(e,t.transform,n):r.transform&&(r.transform="none")),c){const{originX:h="50%",originY:p="50%",originZ:m=0}=a;r.transformOrigin=`${h} ${p} ${m}`}}function sk(t,{style:e,vars:n},r,i){const a=t.style;let l;for(l in e)a[l]=e[l];i==null||i.applyProjectionStyles(a,r);for(l in n)a.setProperty(l,n[l])}function yx(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Mu={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ge.test(t))t=parseFloat(t);else return t;const n=yx(t,e.target.x),r=yx(t,e.target.y);return`${n}% ${r}%`}},k3={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=Cr.parse(t);if(i.length>5)return r;const a=Cr.createTransformer(t),l=typeof i[0]!="number"?1:0,c=n.x.scale*e.x,h=n.y.scale*e.y;i[0+l]/=c,i[1+l]/=h;const p=ht(c,h,.5);return typeof i[2+l]=="number"&&(i[2+l]/=p),typeof i[3+l]=="number"&&(i[3+l]/=p),a(i)}},sv={borderRadius:{...Mu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Mu,borderTopRightRadius:Mu,borderBottomLeftRadius:Mu,borderBottomRightRadius:Mu,boxShadow:k3};function ok(t,{layout:e,layoutId:n}){return Ol.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!sv[t]||t==="opacity")}function J_(t,e,n){var l;const r=t.style,i=e==null?void 0:e.style,a={};if(!r)return a;for(const c in r)(tn(r[c])||i&&tn(i[c])||ok(c,t)||((l=n==null?void 0:n.getValue(c))==null?void 0:l.liveStyle)!==void 0)&&(a[c]=r[c]);return a}function b3(t){return window.getComputedStyle(t)}class D3 extends ek{constructor(){super(...arguments),this.type="html",this.renderInstance=sk}readValueFromInstance(e,n){var r;if(Ol.has(n))return(r=this.projection)!=null&&r.isProjecting?Hy(n):J6(e,n);{const i=b3(e),a=(pR(n)?i.getPropertyValue(n):i[n])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:n}){return ik(e,n)}build(e,n,r){X_(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return J_(e,n,r)}}const V3={offset:"stroke-dashoffset",array:"stroke-dasharray"},N3={offset:"strokeDashoffset",array:"strokeDasharray"};function M3(t,e,n=1,r=0,i=!0){t.pathLength=1;const a=i?V3:N3;t[a.offset]=`${-r}`,t[a.array]=`${e} ${n}`}const L3=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function ak(t,{attrX:e,attrY:n,attrScale:r,pathLength:i,pathSpacing:a=1,pathOffset:l=0,...c},h,p,m){if(X_(t,c,p),h){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:y,style:w}=t;y.transform&&(w.transform=y.transform,delete y.transform),(w.transform||y.transformOrigin)&&(w.transformOrigin=y.transformOrigin??"50% 50%",delete y.transformOrigin),w.transform&&(w.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete y.transformBox);for(const T of L3)y[T]!==void 0&&(w[T]=y[T],delete y[T]);e!==void 0&&(y.x=e),n!==void 0&&(y.y=n),r!==void 0&&(y.scale=r),i!==void 0&&M3(y,i,a,l,!1)}const lk=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),uk=t=>typeof t=="string"&&t.toLowerCase()==="svg";function O3(t,e,n,r){sk(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(lk.has(i)?i:W_(i),e.attrs[i])}function ck(t,e,n){const r=J_(t,e,n);for(const i in t)if(tn(t[i])||tn(e[i])){const a=Ll.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[a]=t[i]}return r}class F3 extends ek{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Lt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Ol.has(n)){const r=BR(n);return r&&r.default||0}return n=lk.has(n)?n:W_(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return ck(e,n,r)}build(e,n,r){ak(e,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,n,r,i){O3(e,n,r,i)}mount(e){this.isSVGTag=uk(e.tagName),super.mount(e)}}const j3=Y_.length;function hk(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?hk(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<j3;n++){const r=Y_[n],i=t.props[r];(_c(i)||i===!1)&&(e[r]=i)}return e}function fk(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}const $3=[...Q_].reverse(),U3=Q_.length;function z3(t){return e=>Promise.all(e.map(({animation:n,options:r})=>jz(t,n,r)))}function B3(t){let e=z3(t),n=vx(),r=!0,i=!1;const a=p=>(m,y)=>{var T;const w=Oo(t,y,p==="exit"?(T=t.presenceContext)==null?void 0:T.custom:void 0);if(w){const{transition:x,transitionEnd:P,...k}=w;m={...m,...k,...P}}return m};function l(p){e=p(t)}function c(p){const{props:m}=t,y=hk(t.parent)||{},w=[],T=new Set;let x={},P=1/0;for(let b=0;b<U3;b++){const O=$3[b],U=n[O],$=m[O]!==void 0?m[O]:y[O],H=_c($),X=O===p?U.isActive:null;X===!1&&(P=b);let C=$===y[O]&&$!==m[O]&&H;if(C&&(r||i)&&t.manuallyAnimateOnMount&&(C=!1),U.protectedKeys={...x},!U.isActive&&X===null||!$&&!U.prevProp||Ap($)||typeof $=="boolean")continue;if(O==="exit"&&U.isActive&&X!==!0){U.prevResolvedValues&&(x={...x,...U.prevResolvedValues});continue}const I=W3(U.prevProp,$);let R=I||O===p&&U.isActive&&!C&&H||b>P&&H,D=!1;const L=Array.isArray($)?$:[$];let B=L.reduce(a(O),{});X===!1&&(B={});const{prevResolvedValues:V={}}=U,ke={...V,...B},Ge=re=>{R=!0,T.has(re)&&(D=!0,T.delete(re)),U.needsAnimating[re]=!0;const ce=t.getValue(re);ce&&(ce.liveStyle=!1)};for(const re in ke){const ce=B[re],ue=V[re];if(x.hasOwnProperty(re))continue;let W=!1;Xy(ce)&&Xy(ue)?W=!fk(ce,ue):W=ce!==ue,W?ce!=null?Ge(re):T.add(re):ce!==void 0&&T.has(re)?Ge(re):U.protectedKeys[re]=!0}U.prevProp=$,U.prevResolvedValues=B,U.isActive&&(x={...x,...B}),(r||i)&&t.blockInitialAnimation&&(R=!1);const Xe=C&&I;R&&(!Xe||D)&&w.push(...L.map(re=>{const ce={type:O};if(typeof re=="string"&&(r||i)&&!Xe&&t.manuallyAnimateOnMount&&t.parent){const{parent:ue}=t,W=Oo(ue,re);if(ue.enteringChildren&&W){const{delayChildren:J}=W.transition||{};ce.delay=NR(ue.enteringChildren,t,J)}}return{animation:re,options:ce}}))}if(T.size){const b={};if(typeof m.initial!="boolean"){const O=Oo(t,Array.isArray(m.initial)?m.initial[0]:m.initial);O&&O.transition&&(b.transition=O.transition)}T.forEach(O=>{const U=t.getBaseTarget(O),$=t.getValue(O);$&&($.liveStyle=!0),b[O]=U??null}),w.push({animation:b})}let k=!!w.length;return r&&(m.initial===!1||m.initial===m.animate)&&!t.manuallyAnimateOnMount&&(k=!1),r=!1,i=!1,k?e(w):Promise.resolve()}function h(p,m){var w;if(n[p].isActive===m)return Promise.resolve();(w=t.variantChildren)==null||w.forEach(T=>{var x;return(x=T.animationState)==null?void 0:x.setActive(p,m)}),n[p].isActive=m;const y=c(p);for(const T in n)n[T].protectedKeys={};return y}return{animateChanges:c,setActive:h,setAnimateFunction:l,getState:()=>n,reset:()=>{n=vx(),i=!0}}}function W3(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!fk(e,t):!1}function Io(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function vx(){return{animate:Io(!0),whileInView:Io(),whileHover:Io(),whileTap:Io(),whileDrag:Io(),whileFocus:Io(),exit:Io()}}function ov(t,e){t.min=e.min,t.max=e.max}function _r(t,e){ov(t.x,e.x),ov(t.y,e.y)}function _x(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const dk=1e-4,H3=1-dk,q3=1+dk,pk=.01,K3=0-pk,G3=0+pk;function vn(t){return t.max-t.min}function Q3(t,e,n){return Math.abs(t-e)<=n}function wx(t,e,n,r=.5){t.origin=r,t.originPoint=ht(e.min,e.max,t.origin),t.scale=vn(n)/vn(e),t.translate=ht(n.min,n.max,t.origin)-t.originPoint,(t.scale>=H3&&t.scale<=q3||isNaN(t.scale))&&(t.scale=1),(t.translate>=K3&&t.translate<=G3||isNaN(t.translate))&&(t.translate=0)}function ec(t,e,n,r){wx(t.x,e.x,n.x,r?r.originX:void 0),wx(t.y,e.y,n.y,r?r.originY:void 0)}function Ex(t,e,n,r=0){const i=r?ht(n.min,n.max,r):n.min;t.min=i+e.min,t.max=t.min+vn(e)}function Y3(t,e,n,r){Ex(t.x,e.x,n.x,r==null?void 0:r.x),Ex(t.y,e.y,n.y,r==null?void 0:r.y)}function Tx(t,e,n,r=0){const i=r?ht(n.min,n.max,r):n.min;t.min=e.min-i,t.max=t.min+vn(e)}function Fd(t,e,n,r){Tx(t.x,e.x,n.x,r==null?void 0:r.x),Tx(t.y,e.y,n.y,r==null?void 0:r.y)}function Sx(t,e,n,r,i){return t-=e,t=Od(t,1/n,r),i!==void 0&&(t=Od(t,1/i,r)),t}function X3(t,e=0,n=1,r=.5,i,a=t,l=t){if(ri.test(e)&&(e=parseFloat(e),e=ht(l.min,l.max,e/100)-l.min),typeof e!="number")return;let c=ht(a.min,a.max,r);t===a&&(c-=e),t.min=Sx(t.min,e,n,c,i),t.max=Sx(t.max,e,n,c,i)}function xx(t,e,[n,r,i],a,l){X3(t,e[n],e[r],e[i],e.scale,a,l)}const J3=["x","scaleX","originX"],Z3=["y","scaleY","originY"];function Ix(t,e,n,r){xx(t.x,e,J3,n?n.x:void 0,r?r.x:void 0),xx(t.y,e,Z3,n?n.y:void 0,r?r.y:void 0)}function Ax(t){return t.translate===0&&t.scale===1}function mk(t){return Ax(t.x)&&Ax(t.y)}function Cx(t,e){return t.min===e.min&&t.max===e.max}function eB(t,e){return Cx(t.x,e.x)&&Cx(t.y,e.y)}function Px(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function gk(t,e){return Px(t.x,e.x)&&Px(t.y,e.y)}function Rx(t){return vn(t.x)/vn(t.y)}function kx(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Qr(t){return[t("x"),t("y")]}function tB(t,e,n){let r="";const i=t.x.translate/e.x,a=t.y.translate/e.y,l=(n==null?void 0:n.z)||0;if((i||a||l)&&(r=`translate3d(${i}px, ${a}px, ${l}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:p,rotate:m,rotateX:y,rotateY:w,skewX:T,skewY:x}=n;p&&(r=`perspective(${p}px) ${r}`),m&&(r+=`rotate(${m}deg) `),y&&(r+=`rotateX(${y}deg) `),w&&(r+=`rotateY(${w}deg) `),T&&(r+=`skewX(${T}deg) `),x&&(r+=`skewY(${x}deg) `)}const c=t.x.scale*e.x,h=t.y.scale*e.y;return(c!==1||h!==1)&&(r+=`scale(${c}, ${h})`),r||"none"}const yk=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],nB=yk.length,bx=t=>typeof t=="string"?parseFloat(t):t,Dx=t=>typeof t=="number"||ge.test(t);function rB(t,e,n,r,i,a){i?(t.opacity=ht(0,n.opacity??1,iB(r)),t.opacityExit=ht(e.opacity??1,0,sB(r))):a&&(t.opacity=ht(e.opacity??1,n.opacity??1,r));for(let l=0;l<nB;l++){const c=yk[l];let h=Vx(e,c),p=Vx(n,c);if(h===void 0&&p===void 0)continue;h||(h=0),p||(p=0),h===0||p===0||Dx(h)===Dx(p)?(t[c]=Math.max(ht(bx(h),bx(p),r),0),(ri.test(p)||ri.test(h))&&(t[c]+="%")):t[c]=p}(e.rotate||n.rotate)&&(t.rotate=ht(e.rotate||0,n.rotate||0,r))}function Vx(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const iB=vk(0,.5,lR),sB=vk(.5,.95,nr);function vk(t,e,n){return r=>r<t?0:r>e?1:n(yc(t,e,r))}function oB(t,e,n){const r=tn(t)?t:Sl(t);return r.start(z_("",r,e,n)),r.animation}function wc(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}const aB=(t,e)=>t.depth-e.depth;class lB{constructor(){this.children=[],this.isDirty=!1}add(e){k_(this.children,e),this.isDirty=!0}remove(e){kd(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(aB),this.isDirty=!1,this.children.forEach(e)}}function uB(t,e){const n=yn.now(),r=({timestamp:i})=>{const a=i-n;a>=e&&(qs(r),t(a-e))};return rt.setup(r,!0),()=>qs(r)}function Gf(t){return tn(t)?t.get():t}class cB{constructor(){this.members=[]}add(e){k_(this.members,e);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===e||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(kd(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(kd(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){var n;for(let r=this.members.indexOf(e)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(e,n){var i;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:l}=e.options;(a===void 0||a!==l)&&(e.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(i=e.root)!=null&&i.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var n,r,i,a,l;(r=(n=e.options).onExitComplete)==null||r.call(n),(l=(i=e.resumingFrom)==null?void 0:(a=i.options).onExitComplete)==null||l.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Qf={hasAnimatedSinceResize:!0,hasEverUpdated:!1},$g=["","X","Y","Z"],hB=1e3;let fB=0;function Ug(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function _k(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=jR(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:a}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",rt,!(i||a))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&_k(r)}function wk({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(l={},c=e==null?void 0:e()){this.id=fB++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(mB),this.nodes.forEach(EB),this.nodes.forEach(TB),this.nodes.forEach(gB)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=l,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new lB)}addEventListener(l,c){return this.eventHandlers.has(l)||this.eventHandlers.set(l,new b_),this.eventHandlers.get(l).add(c)}notifyListeners(l,...c){const h=this.eventHandlers.get(l);h&&h.notify(...c)}hasListeners(l){return this.eventHandlers.has(l)}mount(l){if(this.instance)return;this.isSVG=G_(l)&&!p3(l),this.instance=l;const{layoutId:c,layout:h,visualElement:p}=this.options;if(p&&!p.current&&p.mount(l),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(h||c)&&(this.isLayoutDirty=!0),t){let m,y=0;const w=()=>this.root.updateBlockedByResize=!1;rt.read(()=>{y=window.innerWidth}),t(l,()=>{const T=window.innerWidth;T!==y&&(y=T,this.root.updateBlockedByResize=!0,m&&m(),m=uB(w,250),Qf.hasAnimatedSinceResize&&(Qf.hasAnimatedSinceResize=!1,this.nodes.forEach(Lx)))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&p&&(c||h)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:y,hasRelativeLayoutChanged:w,layout:T})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||p.getDefaultTransition()||CB,{onLayoutAnimationStart:P,onLayoutAnimationComplete:k}=p.getProps(),b=!this.targetLayout||!gk(this.targetLayout,T),O=!y&&w;if(this.options.layoutRoot||this.resumeFrom||O||y&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const U={...U_(x,"layout"),onPlay:P,onComplete:k};(p.shouldReduceMotion||this.options.layoutRoot)&&(U.delay=0,U.type=!1),this.startAnimation(U),this.setAnimationOrigin(m,O)}else y||Lx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=T})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const l=this.getStack();l&&l.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),qs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(SB),this.animationId++)}getTransformTemplate(){const{visualElement:l}=this.options;return l&&l.getProps().transformTemplate}willUpdate(l=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&_k(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const y=this.path[m];y.shouldResetTransform=!0,(typeof y.latestValues.x=="string"||typeof y.latestValues.y=="string")&&(y.isLayoutDirty=!0),y.updateScroll("snapshot"),y.options.layoutRoot&&y.willUpdate(!1)}const{layoutId:c,layout:h}=this.options;if(c===void 0&&!h)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),l&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const h=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),h&&this.nodes.forEach(vB),this.nodes.forEach(Nx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Mx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(_B),this.nodes.forEach(wB),this.nodes.forEach(dB),this.nodes.forEach(pB)):this.nodes.forEach(Mx),this.clearAllSnapshots();const c=yn.now();Jt.delta=si(0,1e3/60,c-Jt.timestamp),Jt.timestamp=c,Jt.isProcessing=!0,Vg.update.process(Jt),Vg.preRender.process(Jt),Vg.render.process(Jt),Jt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,q_.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yB),this.sharedNodes.forEach(xB)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,rt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){rt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!vn(this.snapshot.measuredBox.x)&&!vn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const l=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Lt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,l?l.layoutBox:void 0)}updateScroll(l="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===l&&(c=!1),c&&this.instance){const h=r(this.instance);this.scroll={animationId:this.root.animationId,phase:l,isRoot:h,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!i)return;const l=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!mk(this.projectionDelta),h=this.getTransformTemplate(),p=h?h(this.latestValues,""):void 0,m=p!==this.prevTransformTemplateValue;l&&this.instance&&(c||Po(this.latestValues)||m)&&(i(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(l=!0){const c=this.measurePageBox();let h=this.removeElementScroll(c);return l&&(h=this.removeTransform(h)),PB(h),{animationId:this.root.animationId,measuredBox:c,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:l}=this.options;if(!l)return Lt();const c=l.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(RB))){const{scroll:m}=this.root;m&&(Jr(c.x,m.offset.x),Jr(c.y,m.offset.y))}return c}removeElementScroll(l){var h;const c=Lt();if(_r(c,l),(h=this.scroll)!=null&&h.wasRoot)return c;for(let p=0;p<this.path.length;p++){const m=this.path[p],{scroll:y,options:w}=m;m!==this.root&&y&&w.layoutScroll&&(y.wasRoot&&_r(c,l),Jr(c.x,y.offset.x),Jr(c.y,y.offset.y))}return c}applyTransform(l,c=!1,h){var m,y;const p=h||Lt();_r(p,l);for(let w=0;w<this.path.length;w++){const T=this.path[w];!c&&T.options.layoutScroll&&T.scroll&&T!==T.root&&(Jr(p.x,-T.scroll.offset.x),Jr(p.y,-T.scroll.offset.y)),Po(T.latestValues)&&Kf(p,T.latestValues,(m=T.layout)==null?void 0:m.layoutBox)}return Po(this.latestValues)&&Kf(p,this.latestValues,(y=this.layout)==null?void 0:y.layoutBox),p}removeTransform(l){var h;const c=Lt();_r(c,l);for(let p=0;p<this.path.length;p++){const m=this.path[p];if(!Po(m.latestValues))continue;let y;m.instance&&(rv(m.latestValues)&&m.updateSnapshot(),y=Lt(),_r(y,m.measurePageBox())),Ix(c,m.latestValues,(h=m.snapshot)==null?void 0:h.layoutBox,y)}return Po(this.latestValues)&&Ix(c,this.latestValues),c}setTargetDelta(l){this.targetDelta=l,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(l){this.options={...this.options,...l,crossfade:l.crossfade!==void 0?l.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Jt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(l=!1){var T;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==c;if(!(l||h&&this.isSharedProjectionDirty||this.isProjectionDirty||(T=this.parent)!=null&&T.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:y}=this.options;if(!this.layout||!(m||y))return;this.resolvedRelativeTargetAt=Jt.timestamp;const w=this.getClosestProjectingParent();w&&this.linkedParentVersion!==w.layoutVersion&&!w.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&w&&w.layout?this.createRelativeTarget(w,this.layout.layoutBox,w.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Lt(),this.targetWithTransforms=Lt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Y3(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):_r(this.target,this.layout.layoutBox),rk(this.target,this.targetDelta)):_r(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?this.createRelativeTarget(w,this.target,w.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||rv(this.parent.latestValues)||nk(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(l,c,h){this.relativeParent=l,this.linkedParentVersion=l.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Lt(),this.relativeTargetOrigin=Lt(),Fd(this.relativeTargetOrigin,c,h,this.options.layoutAnchor||void 0),_r(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var x;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let h=!0;if((this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty)&&(h=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Jt.timestamp&&(h=!1),h)return;const{layout:p,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||m))return;_r(this.layoutCorrected,this.layout.layoutBox);const y=this.treeScale.x,w=this.treeScale.y;I3(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox,l.targetWithTransforms=Lt());const{target:T}=l;if(!T){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(_x(this.prevProjectionDelta.x,this.projectionDelta.x),_x(this.prevProjectionDelta.y,this.projectionDelta.y)),ec(this.projectionDelta,this.layoutCorrected,T,this.latestValues),(this.treeScale.x!==y||this.treeScale.y!==w||!kx(this.projectionDelta.x,this.prevProjectionDelta.x)||!kx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",T))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(l=!0){var c;if((c=this.options.visualElement)==null||c.scheduleRender(),l){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Za(),this.projectionDelta=Za(),this.projectionDeltaWithTransform=Za()}setAnimationOrigin(l,c=!1){const h=this.snapshot,p=h?h.latestValues:{},m={...this.latestValues},y=Za();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const w=Lt(),T=h?h.source:void 0,x=this.layout?this.layout.source:void 0,P=T!==x,k=this.getStack(),b=!k||k.members.length<=1,O=!!(P&&!b&&this.options.crossfade===!0&&!this.path.some(AB));this.animationProgress=0;let U;this.mixTargetDelta=$=>{const H=$/1e3;Ox(y.x,l.x,H),Ox(y.y,l.y,H),this.setTargetDelta(y),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Fd(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),IB(this.relativeTarget,this.relativeTargetOrigin,w,H),U&&eB(this.relativeTarget,U)&&(this.isProjectionDirty=!1),U||(U=Lt()),_r(U,this.relativeTarget)),P&&(this.animationValues=m,rB(m,p,this.latestValues,H,O,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=H},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(l){var c,h,p;this.notifyListeners("animationStart"),(c=this.currentAnimation)==null||c.stop(),(p=(h=this.resumingFrom)==null?void 0:h.currentAnimation)==null||p.stop(),this.pendingAnimation&&(qs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=rt.update(()=>{Qf.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Sl(0)),this.motionValue.jump(0,!1),this.currentAnimation=oB(this.motionValue,[0,1e3],{...l,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),l.onUpdate&&l.onUpdate(m)},onStop:()=>{},onComplete:()=>{l.onComplete&&l.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const l=this.getStack();l&&l.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(hB),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const l=this.getLead();let{targetWithTransforms:c,target:h,layout:p,latestValues:m}=l;if(!(!c||!h||!p)){if(this!==l&&this.layout&&p&&Ek(this.options.animationType,this.layout.layoutBox,p.layoutBox)){h=this.target||Lt();const y=vn(this.layout.layoutBox.x);h.x.min=l.target.x.min,h.x.max=h.x.min+y;const w=vn(this.layout.layoutBox.y);h.y.min=l.target.y.min,h.y.max=h.y.min+w}_r(c,h),Kf(c,m),ec(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(l,c){this.sharedNodes.has(l)||this.sharedNodes.set(l,new cB),this.sharedNodes.get(l).add(c);const p=c.options.initialPromotionConfig;c.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(c):void 0})}isLead(){const l=this.getStack();return l?l.lead===this:!0}getLead(){var c;const{layoutId:l}=this.options;return l?((c=this.getStack())==null?void 0:c.lead)||this:this}getPrevLead(){var c;const{layoutId:l}=this.options;return l?(c=this.getStack())==null?void 0:c.prevLead:void 0}getStack(){const{layoutId:l}=this.options;if(l)return this.root.sharedNodes.get(l)}promote({needsReset:l,transition:c,preserveFollowOpacity:h}={}){const p=this.getStack();p&&p.promote(this,h),l&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const l=this.getStack();return l?l.relegate(this):!1}resetSkewAndRotation(){const{visualElement:l}=this.options;if(!l)return;let c=!1;const{latestValues:h}=l;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(c=!0),!c)return;const p={};h.z&&Ug("z",l,p,this.animationValues);for(let m=0;m<$g.length;m++)Ug(`rotate${$g[m]}`,l,p,this.animationValues),Ug(`skew${$g[m]}`,l,p,this.animationValues);l.render();for(const m in p)l.setStaticValue(m,p[m]),this.animationValues&&(this.animationValues[m]=p[m]);l.scheduleRender()}applyProjectionStyles(l,c){if(!this.instance||this.isSVG)return;if(!this.isVisible){l.visibility="hidden";return}const h=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,l.visibility="",l.opacity="",l.pointerEvents=Gf(c==null?void 0:c.pointerEvents)||"",l.transform=h?h(this.latestValues,""):"none";return}const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){this.options.layoutId&&(l.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,l.pointerEvents=Gf(c==null?void 0:c.pointerEvents)||""),this.hasProjected&&!Po(this.latestValues)&&(l.transform=h?h({},""):"none",this.hasProjected=!1);return}l.visibility="";const m=p.animationValues||p.latestValues;this.applyTransformsToTarget();let y=tB(this.projectionDeltaWithTransform,this.treeScale,m);h&&(y=h(m,y)),l.transform=y;const{x:w,y:T}=this.projectionDelta;l.transformOrigin=`${w.origin*100}% ${T.origin*100}% 0`,p.animationValues?l.opacity=p===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:l.opacity=p===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const x in sv){if(m[x]===void 0)continue;const{correct:P,applyTo:k,isCSSVariable:b}=sv[x],O=y==="none"?m[x]:P(m[x],p);if(k){const U=k.length;for(let $=0;$<U;$++)l[k[$]]=O}else b?this.options.visualElement.renderState.vars[x]=O:l[x]=O}this.options.layoutId&&(l.pointerEvents=p===this?Gf(c==null?void 0:c.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(l=>{var c;return(c=l.currentAnimation)==null?void 0:c.stop()}),this.root.nodes.forEach(Nx),this.root.sharedNodes.clear()}}}function dB(t){t.updateLayout()}function pB(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:a}=t.options,l=e.source!==t.layout.source;if(a==="size")Qr(y=>{const w=l?e.measuredBox[y]:e.layoutBox[y],T=vn(w);w.min=r[y].min,w.max=w.min+T});else if(a==="x"||a==="y"){const y=a==="x"?"y":"x";ov(l?e.measuredBox[y]:e.layoutBox[y],r[y])}else Ek(a,e.layoutBox,r)&&Qr(y=>{const w=l?e.measuredBox[y]:e.layoutBox[y],T=vn(r[y]);w.max=w.min+T,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[y].max=t.relativeTarget[y].min+T)});const c=Za();ec(c,r,e.layoutBox);const h=Za();l?ec(h,t.applyTransform(i,!0),e.measuredBox):ec(h,r,e.layoutBox);const p=!mk(c);let m=!1;if(!t.resumeFrom){const y=t.getClosestProjectingParent();if(y&&!y.resumeFrom){const{snapshot:w,layout:T}=y;if(w&&T){const x=t.options.layoutAnchor||void 0,P=Lt();Fd(P,e.layoutBox,w.layoutBox,x);const k=Lt();Fd(k,r,T.layoutBox,x),gk(P,k)||(m=!0),y.options.layoutRoot&&(t.relativeTarget=k,t.relativeTargetOrigin=P,t.relativeParent=y)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:h,layoutDelta:c,hasLayoutChanged:p,hasRelativeLayoutChanged:m})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function mB(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function gB(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function yB(t){t.clearSnapshot()}function Nx(t){t.clearMeasurements()}function vB(t){t.isLayoutDirty=!0,t.updateLayout()}function Mx(t){t.isLayoutDirty=!1}function _B(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function wB(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Lx(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function EB(t){t.resolveTargetDelta()}function TB(t){t.calcProjection()}function SB(t){t.resetSkewAndRotation()}function xB(t){t.removeLeadSnapshot()}function Ox(t,e,n){t.translate=ht(e.translate,0,n),t.scale=ht(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Fx(t,e,n,r){t.min=ht(e.min,n.min,r),t.max=ht(e.max,n.max,r)}function IB(t,e,n,r){Fx(t.x,e.x,n.x,r),Fx(t.y,e.y,n.y,r)}function AB(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const CB={duration:.45,ease:[.4,0,.1,1]},jx=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),$x=jx("applewebkit/")&&!jx("chrome/")?Math.round:nr;function Ux(t){t.min=$x(t.min),t.max=$x(t.max)}function PB(t){Ux(t.x),Ux(t.y)}function Ek(t,e,n){return t==="position"||t==="preserve-aspect"&&!Q3(Rx(e),Rx(n),.2)}function RB(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const kB=wk({attachResizeListener:(t,e)=>wc(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),zg={current:void 0},Tk=wk({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!zg.current){const t=new kB({});t.mount(window),t.setOptions({layoutScroll:!0}),zg.current=t}return zg.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Z_=M.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function zx(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function bB(...t){return e=>{let n=!1;const r=t.map(i=>{const a=zx(i,e);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():zx(t[i],null)}}}}function DB(...t){return M.useCallback(bB(...t),t)}class VB extends M.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(Bf(n)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=n.offsetParent,i=Bf(r)&&r.offsetWidth||0,a=Bf(r)&&r.offsetHeight||0,l=getComputedStyle(n),c=this.props.sizeRef.current;c.height=parseFloat(l.height),c.width=parseFloat(l.width),c.top=n.offsetTop,c.left=n.offsetLeft,c.right=i-c.width-c.left,c.bottom=a-c.height-c.top}return null}componentDidUpdate(){}render(){return this.props.children}}function NB({children:t,isPresent:e,anchorX:n,anchorY:r,root:i,pop:a}){var w;const l=M.useId(),c=M.useRef(null),h=M.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:p}=M.useContext(Z_),m=((w=t.props)==null?void 0:w.ref)??(t==null?void 0:t.ref),y=DB(c,m);return M.useInsertionEffect(()=>{const{width:T,height:x,top:P,left:k,right:b,bottom:O}=h.current;if(e||a===!1||!c.current||!T||!x)return;const U=n==="left"?`left: ${k}`:`right: ${b}`,$=r==="bottom"?`bottom: ${O}`:`top: ${P}`;c.current.dataset.motionPopId=l;const H=document.createElement("style");p&&(H.nonce=p);const X=i??document.head;return X.appendChild(H),H.sheet&&H.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${T}px !important;
            height: ${x}px !important;
            ${U}px !important;
            ${$}px !important;
          }
        `),()=>{var C;(C=c.current)==null||C.removeAttribute("data-motion-pop-id"),X.contains(H)&&X.removeChild(H)}},[e]),F.jsx(VB,{isPresent:e,childRef:c,sizeRef:h,pop:a,children:a===!1?t:M.cloneElement(t,{ref:y})})}const MB=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:a,mode:l,anchorX:c,anchorY:h,root:p})=>{const m=R_(LB),y=M.useId();let w=!0,T=M.useMemo(()=>(w=!1,{id:y,initial:e,isPresent:n,custom:i,onExitComplete:x=>{m.set(x,!0);for(const P of m.values())if(!P)return;r&&r()},register:x=>(m.set(x,!1),()=>m.delete(x))}),[n,m,r]);return a&&w&&(T={...T}),M.useMemo(()=>{m.forEach((x,P)=>m.set(P,!1))},[n]),M.useEffect(()=>{!n&&!m.size&&r&&r()},[n]),t=F.jsx(NB,{pop:l==="popLayout",isPresent:n,anchorX:c,anchorY:h,root:p,children:t}),F.jsx(xp.Provider,{value:T,children:t})};function LB(){return new Map}function Sk(t=!0){const e=M.useContext(xp);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,a=M.useId();M.useEffect(()=>{if(t)return i(a)},[t]);const l=M.useCallback(()=>t&&r&&r(a),[a,r,t]);return!n&&r?[!1,l]:[!0]}const _f=t=>t.key||"";function Bx(t){const e=[];return M.Children.forEach(t,n=>{M.isValidElement(n)&&e.push(n)}),e}const xk=({children:t,custom:e,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:a="sync",propagate:l=!1,anchorX:c="left",anchorY:h="top",root:p})=>{const[m,y]=Sk(l),w=M.useMemo(()=>Bx(t),[t]),T=l&&!m?[]:w.map(_f),x=M.useRef(!0),P=M.useRef(w),k=R_(()=>new Map),b=M.useRef(new Set),[O,U]=M.useState(w),[$,H]=M.useState(w);YP(()=>{x.current=!1,P.current=w;for(let I=0;I<$.length;I++){const R=_f($[I]);T.includes(R)?(k.delete(R),b.current.delete(R)):k.get(R)!==!0&&k.set(R,!1)}},[$,T.length,T.join("-")]);const X=[];if(w!==O){let I=[...w];for(let R=0;R<$.length;R++){const D=$[R],L=_f(D);T.includes(L)||(I.splice(R,0,D),X.push(D))}return a==="wait"&&X.length&&(I=X),H(Bx(I)),U(w),null}const{forceRender:C}=M.useContext(P_);return F.jsx(F.Fragment,{children:$.map(I=>{const R=_f(I),D=l&&!m?!1:w===$||T.includes(R),L=()=>{if(b.current.has(R))return;if(k.has(R))b.current.add(R),k.set(R,!0);else return;let B=!0;k.forEach(V=>{V||(B=!1)}),B&&(C==null||C(),H(P.current),l&&(y==null||y()),r&&r())};return F.jsx(MB,{isPresent:D,initial:!x.current||n?void 0:!1,custom:e,presenceAffectsLayout:i,mode:a,root:p,onExitComplete:D?void 0:L,anchorX:c,anchorY:h,children:I},R)})})},Ik=M.createContext({strict:!1}),Wx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Hx=!1;function OB(){if(Hx)return;const t={};for(const e in Wx)t[e]={isEnabled:n=>Wx[e].some(r=>!!n[r])};ZR(t),Hx=!0}function Ak(){return OB(),E3()}function FB(t){const e=Ak();for(const n in t)e[n]={...e[n],...t[n]};ZR(e)}const jB=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function jd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||jB.has(t)}let Ck=t=>!jd(t);function $B(t){typeof t=="function"&&(Ck=e=>e.startsWith("on")?!jd(e):t(e))}try{$B(require("@emotion/is-prop-valid").default)}catch{}function UB(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||tn(t[i])||(Ck(i)||n===!0&&jd(i)||!e&&!jd(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}const Pp=M.createContext({});function zB(t,e){if(Cp(t)){const{initial:n,animate:r}=t;return{initial:n===!1||_c(n)?n:void 0,animate:_c(r)?r:void 0}}return t.inherit!==!1?e:{}}function BB(t){const{initial:e,animate:n}=zB(t,M.useContext(Pp));return M.useMemo(()=>({initial:e,animate:n}),[qx(e),qx(n)])}function qx(t){return Array.isArray(t)?t.join(" "):t}const ew=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Pk(t,e,n){for(const r in e)!tn(e[r])&&!ok(r,n)&&(t[r]=e[r])}function WB({transformTemplate:t},e){return M.useMemo(()=>{const n=ew();return X_(n,e,t),Object.assign({},n.vars,n.style)},[e])}function HB(t,e){const n=t.style||{},r={};return Pk(r,n,t),Object.assign(r,WB(t,e)),r}function qB(t,e){const n={},r=HB(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const Rk=()=>({...ew(),attrs:{}});function KB(t,e,n,r){const i=M.useMemo(()=>{const a=Rk();return ak(a,e,uk(r),t.transformTemplate,t.style),{...a.attrs,style:{...a.style}}},[e]);if(t.style){const a={};Pk(a,t.style,t),i.style={...a,...i.style}}return i}const GB=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function tw(t){return typeof t!="string"||t.includes("-")?!1:!!(GB.indexOf(t)>-1||/[A-Z]/u.test(t))}function QB(t,e,n,{latestValues:r},i,a=!1,l){const h=(l??tw(t)?KB:qB)(e,r,i,t),p=UB(e,typeof t=="string",a),m=t!==M.Fragment?{...p,...h,ref:n}:{},{children:y}=e,w=M.useMemo(()=>tn(y)?y.get():y,[y]);return M.createElement(t,{...m,children:w})}function YB({scrapeMotionValuesFromProps:t,createRenderState:e},n,r,i){return{latestValues:XB(n,r,i,t),renderState:e()}}function XB(t,e,n,r){const i={},a=r(t,{});for(const w in a)i[w]=Gf(a[w]);let{initial:l,animate:c}=t;const h=Cp(t),p=XR(t);e&&p&&!h&&t.inherit!==!1&&(l===void 0&&(l=e.initial),c===void 0&&(c=e.animate));let m=n?n.initial===!1:!1;m=m||l===!1;const y=m?c:l;if(y&&typeof y!="boolean"&&!Ap(y)){const w=Array.isArray(y)?y:[y];for(let T=0;T<w.length;T++){const x=B_(t,w[T]);if(x){const{transitionEnd:P,transition:k,...b}=x;for(const O in b){let U=b[O];if(Array.isArray(U)){const $=m?U.length-1:0;U=U[$]}U!==null&&(i[O]=U)}for(const O in P)i[O]=P[O]}}}return i}const kk=t=>(e,n)=>{const r=M.useContext(Pp),i=M.useContext(xp),a=()=>YB(t,e,r,i);return n?a():R_(a)},JB=kk({scrapeMotionValuesFromProps:J_,createRenderState:ew}),ZB=kk({scrapeMotionValuesFromProps:ck,createRenderState:Rk}),e8=Symbol.for("motionComponentSymbol");function t8(t,e,n){const r=M.useRef(n);M.useInsertionEffect(()=>{r.current=n});const i=M.useRef(null);return M.useCallback(a=>{var c;a&&((c=t.onMount)==null||c.call(t,a));const l=r.current;if(typeof l=="function")if(a){const h=l(a);typeof h=="function"&&(i.current=h)}else i.current?(i.current(),i.current=null):l(a);else l&&(l.current=a);e&&(a?e.mount(a):e.unmount())},[e])}const bk=M.createContext({});function Qa(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function n8(t,e,n,r,i,a){var U,$;const{visualElement:l}=M.useContext(Pp),c=M.useContext(Ik),h=M.useContext(xp),p=M.useContext(Z_),m=p.reducedMotion,y=p.skipAnimations,w=M.useRef(null),T=M.useRef(!1);r=r||c.renderer,!w.current&&r&&(w.current=r(t,{visualState:e,parent:l,props:n,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m,skipAnimations:y,isSVG:a}),T.current&&w.current&&(w.current.manuallyAnimateOnMount=!0));const x=w.current,P=M.useContext(bk);x&&!x.projection&&i&&(x.type==="html"||x.type==="svg")&&r8(w.current,n,i,P);const k=M.useRef(!1);M.useInsertionEffect(()=>{x&&k.current&&x.update(n,h)});const b=n[FR],O=M.useRef(!!b&&typeof window<"u"&&!((U=window.MotionHandoffIsComplete)!=null&&U.call(window,b))&&(($=window.MotionHasOptimisedAnimation)==null?void 0:$.call(window,b)));return YP(()=>{T.current=!0,x&&(k.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),x.scheduleRenderMicrotask(),O.current&&x.animationState&&x.animationState.animateChanges())}),M.useEffect(()=>{x&&(!O.current&&x.animationState&&x.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var H;(H=window.MotionHandoffMarkAsComplete)==null||H.call(window,b)}),O.current=!1),x.enteringChildren=void 0)}),x}function r8(t,e,n,r){const{layoutId:i,layout:a,drag:l,dragConstraints:c,layoutScroll:h,layoutRoot:p,layoutAnchor:m,layoutCrossfade:y}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Dk(t.parent)),t.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:!!l||c&&Qa(c),visualElement:t,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:y,layoutScroll:h,layoutRoot:p,layoutAnchor:m})}function Dk(t){if(t)return t.options.allowProjection!==!1?t.projection:Dk(t.parent)}function Bg(t,{forwardMotionProps:e=!1,type:n}={},r,i){r&&FB(r);const a=n?n==="svg":tw(t),l=a?ZB:JB;function c(p,m){let y;const w={...M.useContext(Z_),...p,layoutId:i8(p)},{isStatic:T}=w,x=BB(p),P=l(p,T);if(!T&&typeof window<"u"){s8();const k=o8(w);y=k.MeasureLayout,x.visualElement=n8(t,P,w,i,k.ProjectionNode,a)}return F.jsxs(Pp.Provider,{value:x,children:[y&&x.visualElement?F.jsx(y,{visualElement:x.visualElement,...w}):null,QB(t,p,t8(P,x.visualElement,m),P,T,e,a)]})}c.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const h=M.forwardRef(c);return h[e8]=t,h}function i8({layoutId:t}){const e=M.useContext(P_).id;return e&&t!==void 0?e+"-"+t:t}function s8(t,e){M.useContext(Ik).strict}function o8(t){const e=Ak(),{drag:n,layout:r}=e;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(t)||r!=null&&r.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function a8(t,e){if(typeof Proxy>"u")return Bg;const n=new Map,r=(a,l)=>Bg(a,l,t,e),i=(a,l)=>r(a,l);return new Proxy(i,{get:(a,l)=>l==="create"?r:(n.has(l)||n.set(l,Bg(l,void 0,t,e)),n.get(l))})}const l8=(t,e)=>e.isSVG??tw(t)?new F3(e):new D3(e,{allowProjection:t!==M.Fragment});class u8 extends Ys{constructor(e){super(e),e.animationState||(e.animationState=B3(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ap(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let c8=0;class h8 extends Ys{constructor(){super(...arguments),this.id=c8++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:l,custom:c}=this.node.getProps();if(typeof l=="string"){const h=Oo(this.node,l,c);if(h){const{transition:p,transitionEnd:m,...y}=h;for(const w in y)(a=this.node.getValue(w))==null||a.jump(y[w])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const f8={animation:{Feature:u8},exit:{Feature:h8}};function $c(t){return{point:{x:t.pageX,y:t.pageY}}}const d8=t=>e=>K_(e)&&t(e,$c(e));function tc(t,e,n,r){return wc(t,e,d8(n),r)}const Vk=({current:t})=>t?t.ownerDocument.defaultView:null,Kx=(t,e)=>Math.abs(t-e);function p8(t,e){const n=Kx(t.x,e.x),r=Kx(t.y,e.y);return Math.sqrt(n**2+r**2)}const Gx=new Set(["auto","scroll"]);class Nk{constructor(e,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:a=!1,distanceThreshold:l=3,element:c}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=T=>{this.handleScroll(T.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=wf(this.lastRawMoveEventInfo,this.transformPagePoint));const T=Wg(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,P=p8(T.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!P)return;const{point:k}=T,{timestamp:b}=Jt;this.history.push({...k,timestamp:b});const{onStart:O,onMove:U}=this.handlers;x||(O&&O(this.lastMoveEvent,T),this.startEvent=this.lastMoveEvent),U&&U(this.lastMoveEvent,T)},this.handlePointerMove=(T,x)=>{this.lastMoveEvent=T,this.lastRawMoveEventInfo=x,this.lastMoveEventInfo=wf(x,this.transformPagePoint),rt.update(this.updatePoint,!0)},this.handlePointerUp=(T,x)=>{this.end();const{onEnd:P,onSessionEnd:k,resumeAnimation:b}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=Wg(T.type==="pointercancel"?this.lastMoveEventInfo:wf(x,this.transformPagePoint),this.history);this.startEvent&&P&&P(T,O),k&&k(T,O)},!K_(e))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=l,this.contextWindow=i||window;const h=$c(e),p=wf(h,this.transformPagePoint),{point:m}=p,{timestamp:y}=Jt;this.history=[{...m,timestamp:y}];const{onSessionStart:w}=n;w&&w(e,Wg(p,this.history)),this.removeListeners=Oc(tc(this.contextWindow,"pointermove",this.handlePointerMove),tc(this.contextWindow,"pointerup",this.handlePointerUp),tc(this.contextWindow,"pointercancel",this.handlePointerUp)),c&&this.startScrollTracking(c)}startScrollTracking(e){let n=e.parentElement;for(;n;){const r=getComputedStyle(n);(Gx.has(r.overflowX)||Gx.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const r=e===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:i.x-n.x,y:i.y-n.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,i),rt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),qs(this.updatePoint)}}function wf(t,e){return e?{point:e(t.point)}:t}function Qx(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Wg({point:t},e){return{point:t,delta:Qx(t,Mk(e)),offset:Qx(t,m8(e)),velocity:g8(e,.1)}}function m8(t){return t[0]}function Mk(t){return t[t.length-1]}function g8(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=Mk(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>Un(e)));)n--;if(!r)return{x:0,y:0};r===t[0]&&t.length>2&&i.timestamp-r.timestamp>Un(e)*2&&(r=t[1]);const a=tr(i.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const l={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return l.x===1/0&&(l.x=0),l.y===1/0&&(l.y=0),l}function y8(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?ht(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?ht(n,t,r.max):Math.min(t,n)),t}function Yx(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function v8(t,{top:e,left:n,bottom:r,right:i}){return{x:Yx(t.x,n,i),y:Yx(t.y,e,r)}}function Xx(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function _8(t,e){return{x:Xx(t.x,e.x),y:Xx(t.y,e.y)}}function w8(t,e){let n=.5;const r=vn(t),i=vn(e);return i>r?n=yc(e.min,e.max-r,t.min):r>i&&(n=yc(t.min,t.max-i,e.min)),si(0,1,n)}function E8(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const av=.35;function T8(t=av){return t===!1?t=0:t===!0&&(t=av),{x:Jx(t,"left","right"),y:Jx(t,"top","bottom")}}function Jx(t,e,n){return{min:Zx(t,e),max:Zx(t,n)}}function Zx(t,e){return typeof t=="number"?t:t[e]||0}const S8=new WeakMap;class x8{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Lt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const a=y=>{n&&this.snapToCursor($c(y).point),this.stopAnimation()},l=(y,w)=>{const{drag:T,dragPropagation:x,onDragStart:P}=this.getProps();if(T&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Xz(T),!this.openDragLock))return;this.latestPointerEvent=y,this.latestPanInfo=w,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qr(b=>{let O=this.getAxisMotionValue(b).get()||0;if(ri.test(O)){const{projection:U}=this.visualElement;if(U&&U.layout){const $=U.layout.layoutBox[b];$&&(O=vn($)*(parseFloat(O)/100))}}this.originPoint[b]=O}),P&&rt.update(()=>P(y,w),!1,!0),Jy(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},c=(y,w)=>{this.latestPointerEvent=y,this.latestPanInfo=w;const{dragPropagation:T,dragDirectionLock:x,onDirectionLock:P,onDrag:k}=this.getProps();if(!T&&!this.openDragLock)return;const{offset:b}=w;if(x&&this.currentDirection===null){this.currentDirection=A8(b),this.currentDirection!==null&&P&&P(this.currentDirection);return}this.updateAxis("x",w.point,b),this.updateAxis("y",w.point,b),this.visualElement.render(),k&&rt.update(()=>k(y,w),!1,!0)},h=(y,w)=>{this.latestPointerEvent=y,this.latestPanInfo=w,this.stop(y,w),this.latestPointerEvent=null,this.latestPanInfo=null},p=()=>{const{dragSnapToOrigin:y}=this.getProps();(y||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new Nk(e,{onSessionStart:a,onStart:l,onMove:c,onSessionEnd:h,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:r,contextWindow:Vk(this.visualElement),element:this.visualElement.current})}stop(e,n){const r=e||this.latestPointerEvent,i=n||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!i||!r)return;const{velocity:l}=i;this.startAnimation(l);const{onDragEnd:c}=this.getProps();c&&rt.postRender(()=>c(r,i))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!Ef(e,i,this.currentDirection))return;const a=this.getAxisMotionValue(e);let l=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(l=y8(l,this.constraints[e],this.elastic[e])),a.set(l)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,i=this.constraints;e&&Qa(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=v8(r.layoutBox,e):this.constraints=!1,this.elastic=T8(n),i!==this.constraints&&!Qa(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Qr(l=>{this.constraints!==!1&&this.getAxisMotionValue(l)&&(this.constraints[l]=E8(r.layoutBox[l],this.constraints[l]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Qa(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const a=A3(r,i.root,this.visualElement.getTransformPagePoint());let l=_8(i.layout.layoutBox,a);if(n){const c=n(S3(l));this.hasMutatedConstraints=!!c,c&&(l=tk(c))}return l}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:a,dragSnapToOrigin:l,onDragTransitionEnd:c}=this.getProps(),h=this.constraints||{},p=Qr(m=>{if(!Ef(m,n,this.currentDirection))return;let y=h[m]||{};(l===!0||l===m)&&(y={min:0,max:0});const w=i?200:1e6,T=i?40:1e7,x={type:"inertia",velocity:r?e[m]:0,bounceStiffness:w,bounceDamping:T,timeConstant:750,restDelta:1,restSpeed:10,...a,...y};return this.startAxisValueAnimation(m,x)});return Promise.all(p).then(c)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return Jy(this.visualElement,e),r.start(z_(e,r,0,n,this.visualElement,!1))}stopAnimation(){Qr(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Qr(n=>{const{drag:r}=this.getProps();if(!Ef(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,a=this.getAxisMotionValue(n);if(i&&i.layout){const{min:l,max:c}=i.layout.layoutBox[n],h=a.get()||0;a.set(e[n]-ht(l,c,.5)+h)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Qa(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Qr(l=>{const c=this.getAxisMotionValue(l);if(c&&this.constraints!==!1){const h=c.get();i[l]=w8({min:h,max:h},this.constraints[l])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Qr(l=>{if(!Ef(l,e,null))return;const c=this.getAxisMotionValue(l),{min:h,max:p}=this.constraints[l];c.set(ht(h,p,i[l]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;S8.set(this.visualElement,this);const e=this.visualElement.current,n=tc(e,"pointerdown",p=>{const{drag:m,dragListener:y=!0}=this.getProps(),w=p.target,T=w!==e&&r3(w);m&&y&&!T&&this.start(p)});let r;const i=()=>{const{dragConstraints:p}=this.getProps();Qa(p)&&p.current&&(this.constraints=this.resolveRefConstraints(),r||(r=I8(e,p.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,l=a.addEventListener("measure",i);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),rt.read(i);const c=wc(window,"resize",()=>this.scalePositionWithinConstraints()),h=a.addEventListener("didUpdate",({delta:p,hasLayoutChanged:m})=>{this.isDragging&&m&&(Qr(y=>{const w=this.getAxisMotionValue(y);w&&(this.originPoint[y]+=p[y].translate,w.set(w.get()+p[y].translate))}),this.visualElement.render())});return()=>{c(),n(),l(),h&&h(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:a=!1,dragElastic:l=av,dragMomentum:c=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:a,dragElastic:l,dragMomentum:c}}}function e1(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function I8(t,e,n){const r=ax(t,e1(n)),i=ax(e,e1(n));return()=>{r(),i()}}function Ef(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function A8(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class C8 extends Ys{constructor(e){super(e),this.removeGroupControls=nr,this.removeListeners=nr,this.controls=new x8(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||nr}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Hg=t=>(e,n)=>{t&&rt.update(()=>t(e,n),!1,!0)};class P8 extends Ys{constructor(){super(...arguments),this.removePointerDownListener=nr}onPointerDown(e){this.session=new Nk(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Vk(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Hg(e),onStart:Hg(n),onMove:Hg(r),onEnd:(a,l)=>{delete this.session,i&&rt.postRender(()=>i(a,l))}}}mount(){this.removePointerDownListener=tc(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let qg=!1;class R8 extends M.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:a}=e;a&&(n.group&&n.group.add(a),r&&r.register&&i&&r.register(a),qg&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Qf.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:a}=this.props,{projection:l}=r;return l&&(l.isPresent=a,e.layoutDependency!==n&&l.setOptions({...l.options,layoutDependency:n}),qg=!0,i||e.layoutDependency!==n||n===void 0||e.isPresent!==a?l.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?l.promote():l.relegate()||rt.postRender(()=>{const c=l.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:n}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),q_.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;qg=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function Lk(t){const[e,n]=Sk(),r=M.useContext(P_);return F.jsx(R8,{...t,layoutGroup:r,switchLayoutGroup:M.useContext(bk),isPresent:e,safeToRemove:n})}const k8={pan:{Feature:P8},drag:{Feature:C8,ProjectionNode:Tk,MeasureLayout:Lk}};function t1(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,a=r[i];a&&rt.postRender(()=>a(e,$c(e)))}class b8 extends Ys{mount(){const{current:e}=this.node;e&&(this.unmount=Zz(e,(n,r)=>(t1(this.node,r,"Start"),i=>t1(this.node,i,"End"))))}unmount(){}}class D8 extends Ys{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Oc(wc(this.node.current,"focus",()=>this.onFocus()),wc(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function n1(t,e,n){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),a=r[i];a&&rt.postRender(()=>a(e,$c(e)))}class V8 extends Ys{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=s3(e,(i,a)=>(n1(this.node,a,"Start"),(l,{success:c})=>n1(this.node,l,c?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const lv=new WeakMap,Kg=new WeakMap,N8=t=>{const e=lv.get(t.target);e&&e(t)},M8=t=>{t.forEach(N8)};function L8({root:t,...e}){const n=t||document;Kg.has(n)||Kg.set(n,{});const r=Kg.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(M8,{root:t,...e})),r[i]}function O8(t,e,n){const r=L8(e);return lv.set(t,n),r.observe(t),()=>{lv.delete(t),r.unobserve(t)}}const F8={some:0,all:1};class j8 extends Ys{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var h;(h=this.stopObserver)==null||h.call(this);const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:a}=e,l={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:F8[i]},c=p=>{const{isIntersecting:m}=p;if(this.isInView===m||(this.isInView=m,a&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:y,onViewportLeave:w}=this.node.getProps(),T=m?y:w;T&&T(p)};this.stopObserver=O8(this.node.current,l,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some($8(e,n))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function $8({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const U8={inView:{Feature:j8},tap:{Feature:V8},focus:{Feature:D8},hover:{Feature:b8}},z8={layout:{ProjectionNode:Tk,MeasureLayout:Lk}},B8={...f8,...U8,...k8,...z8},ai=a8(B8,l8),W8=se(ai.button)`
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
`,$d=({title:t,onClick:e,isActive:n=!0,variant:r="primary",children:i,size:a,width:l,minWidth:c,fontSize:h,icon:p,disabled:m,type:y="button"})=>F.jsxs(W8,{"data-testid":"comp-kid-button",$variant:n?r:"sub",$size:a,$width:l,$minWidth:c,$fontSize:h,onClick:e,disabled:m,type:y,whileHover:m?{}:{scale:1.02,y:-1},whileTap:{scale:.98},initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:400,damping:20},children:[p,t,i]}),nc=se.p`
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
`,H8=se.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 40px;
  text-align: center;
  background-color: ${t=>t.theme.colors.background};
`,q8=se(ai.div)`
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
`,K8=se.div`
  color: ${t=>t.theme.colors.accent};
  margin-bottom: 8px;
`;class G8 extends M.Component{constructor(){super(...arguments);dE(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n,r){console.error("Uncaught error:",n,r)}render(){return this.state.hasError?F.jsx(H8,{children:F.jsxs(q8,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},transition:{type:"spring",damping:20},children:[F.jsx(K8,{children:F.jsx(w9,{size:80,strokeWidth:2.5})}),F.jsx(nc,{fontSize:"2.5rem",color:"primary",fontWeight:900,children:"Oops! 😅"}),F.jsx(nc,{fontSize:"xl",color:"textSecondary",fontWeight:"bold",children:"Something went wrong!"}),F.jsx(nc,{fontSize:"lg",color:"textSecondary",children:"Don't worry, even magic balloons pop sometimes! Let's try going back home to start fresh."}),F.jsx($d,{title:"Return to Home",variant:"primary",onClick:()=>{window.location.hash="/",window.location.reload()},minWidth:"240px"})]})}):this.props.children}}const Q8=se(ai.div)`
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
`,Y8=se(ai.div)`
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
`,X8=se.div`
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
`,J8=se.div`
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
`,Z8=se.h1`
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
`,eW=se.h2`
  font-family: ${t=>t.theme.fonts.secondary};
  font-size: 1.2rem;
  color: #475569 !important; /* Fixed dark slate */
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`,tW=se.div`
  font-family: ${t=>t.theme.fonts.secondary};
  font-size: ${t=>t.theme.fontSize.sm};
  color: #64748b !important; /* Fixed slate */
  z-index: 1;
`,nW=se.div`
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
`,rW=se.p`
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
`;const iW=se.div`
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
`;const r1=se.div`
  font-weight: 900;
  font-size: ${t=>t.$variant==="small"?"0.8rem":t.$variant==="tiny"?"0.6rem":"1rem"};
  color: #1e293b !important;
  font-family: ${t=>t.theme.fonts.secondary};
  opacity: 1 !important;
  letter-spacing: ${t=>t.$variant==="tiny"?"1px":"normal"};
`,sW=se.div`
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
`,oW=se.button`
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
`;function aW(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),e&&(r.href=e),i.href=t,i.href}const lW=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function Ls(t){const e=[];for(let n=0,r=t.length;n<r;n++)e.push(t[n]);return e}let Ba=null;function Ok(t={}){return Ba||(t.includeStyleProperties?(Ba=t.includeStyleProperties,Ba):(Ba=Ls(window.getComputedStyle(document.documentElement)),Ba))}function Ud(t,e){const r=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return r?parseFloat(r.replace("px","")):0}function uW(t){const e=Ud(t,"border-left-width"),n=Ud(t,"border-right-width");return t.clientWidth+e+n}function cW(t){const e=Ud(t,"border-top-width"),n=Ud(t,"border-bottom-width");return t.clientHeight+e+n}function Fk(t,e={}){const n=e.width||uW(t),r=e.height||cW(t);return{width:n,height:r}}function hW(){let t,e;try{e=process}catch{}const n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const Fn=16384;function fW(t){(t.width>Fn||t.height>Fn)&&(t.width>Fn&&t.height>Fn?t.width>t.height?(t.height*=Fn/t.width,t.width=Fn):(t.width*=Fn/t.height,t.height=Fn):t.width>Fn?(t.height*=Fn/t.width,t.width=Fn):(t.width*=Fn/t.height,t.height=Fn))}function zd(t){return new Promise((e,n)=>{const r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>e(r))})},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=t})}async function dW(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function pW(t,e,n){const r="http://www.w3.org/2000/svg",i=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return i.setAttribute("width",`${e}`),i.setAttribute("height",`${n}`),i.setAttribute("viewBox",`0 0 ${e} ${n}`),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("x","0"),a.setAttribute("y","0"),a.setAttribute("externalResourcesRequired","true"),i.appendChild(a),a.appendChild(t),dW(i)}const Cn=(t,e)=>{if(t instanceof e)return!0;const n=Object.getPrototypeOf(t);return n===null?!1:n.constructor.name===e.name||Cn(n,e)};function mW(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function gW(t,e){return Ok(e).map(n=>{const r=t.getPropertyValue(n),i=t.getPropertyPriority(n);return`${n}: ${r}${i?" !important":""};`}).join(" ")}function yW(t,e,n,r){const i=`.${t}:${e}`,a=n.cssText?mW(n):gW(n,r);return document.createTextNode(`${i}{${a}}`)}function i1(t,e,n,r){const i=window.getComputedStyle(t,n),a=i.getPropertyValue("content");if(a===""||a==="none")return;const l=lW();try{e.className=`${e.className} ${l}`}catch{return}const c=document.createElement("style");c.appendChild(yW(l,n,i,r)),e.appendChild(c)}function vW(t,e,n){i1(t,e,":before",n),i1(t,e,":after",n)}const s1="application/font-woff",o1="image/jpeg",_W={woff:s1,woff2:s1,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:o1,jpeg:o1,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function wW(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function nw(t){const e=wW(t).toLowerCase();return _W[e]||""}function EW(t){return t.split(/,/)[1]}function uv(t){return t.search(/^(data:)/)!==-1}function TW(t,e){return`data:${e};base64,${t}`}async function jk(t,e,n){const r=await fetch(t,e);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const i=await r.blob();return new Promise((a,l)=>{const c=new FileReader;c.onerror=l,c.onloadend=()=>{try{a(n({res:r,result:c.result}))}catch(h){l(h)}},c.readAsDataURL(i)})}const Gg={};function SW(t,e,n){let r=t.replace(/\?.*/,"");return n&&(r=t),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),e?`[${e}]${r}`:r}async function rw(t,e,n){const r=SW(t,e,n.includeQueryParams);if(Gg[r]!=null)return Gg[r];n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let i;try{const a=await jk(t,n.fetchRequestInit,({res:l,result:c})=>(e||(e=l.headers.get("Content-Type")||""),EW(c)));i=TW(a,e)}catch(a){i=n.imagePlaceholder||"";let l=`Failed to fetch resource: ${t}`;a&&(l=typeof a=="string"?a:a.message),l&&console.warn(l)}return Gg[r]=i,i}async function xW(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):zd(e)}async function IW(t,e){if(t.currentSrc){const a=document.createElement("canvas"),l=a.getContext("2d");a.width=t.clientWidth,a.height=t.clientHeight,l==null||l.drawImage(t,0,0,a.width,a.height);const c=a.toDataURL();return zd(c)}const n=t.poster,r=nw(n),i=await rw(n,r,e);return zd(i)}async function AW(t,e){var n;try{if(!((n=t==null?void 0:t.contentDocument)===null||n===void 0)&&n.body)return await Rp(t.contentDocument.body,e,!0)}catch{}return t.cloneNode(!1)}async function CW(t,e){return Cn(t,HTMLCanvasElement)?xW(t):Cn(t,HTMLVideoElement)?IW(t,e):Cn(t,HTMLIFrameElement)?AW(t,e):t.cloneNode($k(t))}const PW=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT",$k=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SVG";async function RW(t,e,n){var r,i;if($k(e))return e;let a=[];return PW(t)&&t.assignedNodes?a=Ls(t.assignedNodes()):Cn(t,HTMLIFrameElement)&&(!((r=t.contentDocument)===null||r===void 0)&&r.body)?a=Ls(t.contentDocument.body.childNodes):a=Ls(((i=t.shadowRoot)!==null&&i!==void 0?i:t).childNodes),a.length===0||Cn(t,HTMLVideoElement)||await a.reduce((l,c)=>l.then(()=>Rp(c,n)).then(h=>{h&&e.appendChild(h)}),Promise.resolve()),e}function kW(t,e,n){const r=e.style;if(!r)return;const i=window.getComputedStyle(t);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):Ok(n).forEach(a=>{let l=i.getPropertyValue(a);a==="font-size"&&l.endsWith("px")&&(l=`${Math.floor(parseFloat(l.substring(0,l.length-2)))-.1}px`),Cn(t,HTMLIFrameElement)&&a==="display"&&l==="inline"&&(l="block"),a==="d"&&e.getAttribute("d")&&(l=`path(${e.getAttribute("d")})`),r.setProperty(a,l,i.getPropertyPriority(a))})}function bW(t,e){Cn(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),Cn(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function DW(t,e){if(Cn(t,HTMLSelectElement)){const n=e,r=Array.from(n.children).find(i=>t.value===i.getAttribute("value"));r&&r.setAttribute("selected","")}}function VW(t,e,n){return Cn(e,Element)&&(kW(t,e,n),vW(t,e,n),bW(t,e),DW(t,e)),e}async function NW(t,e){const n=t.querySelectorAll?t.querySelectorAll("use"):[];if(n.length===0)return t;const r={};for(let a=0;a<n.length;a++){const c=n[a].getAttribute("xlink:href");if(c){const h=t.querySelector(c),p=document.querySelector(c);!h&&p&&!r[c]&&(r[c]=await Rp(p,e,!0))}}const i=Object.values(r);if(i.length){const a="http://www.w3.org/1999/xhtml",l=document.createElementNS(a,"svg");l.setAttribute("xmlns",a),l.style.position="absolute",l.style.width="0",l.style.height="0",l.style.overflow="hidden",l.style.display="none";const c=document.createElementNS(a,"defs");l.appendChild(c);for(let h=0;h<i.length;h++)c.appendChild(i[h]);t.appendChild(l)}return t}async function Rp(t,e,n){return!n&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(r=>CW(r,e)).then(r=>RW(t,r,e)).then(r=>VW(t,r,e)).then(r=>NW(r,e))}const Uk=/url\((['"]?)([^'"]+?)\1\)/g,MW=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,LW=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function OW(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function FW(t){const e=[];return t.replace(Uk,(n,r,i)=>(e.push(i),n)),e.filter(n=>!uv(n))}async function jW(t,e,n,r,i){try{const a=n?aW(e,n):e,l=nw(e);let c;return i||(c=await rw(a,l,r)),t.replace(OW(e),`$1${c}$3`)}catch{}return t}function $W(t,{preferredFontFormat:e}){return e?t.replace(LW,n=>{for(;;){const[r,,i]=MW.exec(n)||[];if(!i)return"";if(i===e)return`src: ${r};`}}):t}function zk(t){return t.search(Uk)!==-1}async function Bk(t,e,n){if(!zk(t))return t;const r=$W(t,n);return FW(r).reduce((a,l)=>a.then(c=>jW(c,l,e,n)),Promise.resolve(r))}async function Wa(t,e,n){var r;const i=(r=e.style)===null||r===void 0?void 0:r.getPropertyValue(t);if(i){const a=await Bk(i,null,n);return e.style.setProperty(t,a,e.style.getPropertyPriority(t)),!0}return!1}async function UW(t,e){await Wa("background",t,e)||await Wa("background-image",t,e),await Wa("mask",t,e)||await Wa("-webkit-mask",t,e)||await Wa("mask-image",t,e)||await Wa("-webkit-mask-image",t,e)}async function zW(t,e){const n=Cn(t,HTMLImageElement);if(!(n&&!uv(t.src))&&!(Cn(t,SVGImageElement)&&!uv(t.href.baseVal)))return;const r=n?t.src:t.href.baseVal,i=await rw(r,nw(r),e);await new Promise((a,l)=>{t.onload=a,t.onerror=e.onImageErrorHandler?(...h)=>{try{a(e.onImageErrorHandler(...h))}catch(p){l(p)}}:l;const c=t;c.decode&&(c.decode=a),c.loading==="lazy"&&(c.loading="eager"),n?(t.srcset="",t.src=i):t.href.baseVal=i})}async function BW(t,e){const r=Ls(t.childNodes).map(i=>Wk(i,e));await Promise.all(r).then(()=>t)}async function Wk(t,e){Cn(t,Element)&&(await UW(t,e),await zW(t,e),await BW(t,e))}function WW(t,e){const{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);const r=e.style;return r!=null&&Object.keys(r).forEach(i=>{n[i]=r[i]}),t}const a1={};async function l1(t){let e=a1[t];if(e!=null)return e;const r=await(await fetch(t)).text();return e={url:t,cssText:r},a1[t]=e,e}async function u1(t,e){let n=t.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,a=(n.match(/url\([^)]+\)/g)||[]).map(async l=>{let c=l.replace(r,"$1");return c.startsWith("https://")||(c=new URL(c,t.url).href),jk(c,e.fetchRequestInit,({result:h})=>(n=n.replace(l,`url(${h})`),[l,h]))});return Promise.all(a).then(()=>n)}function c1(t){if(t==null)return[];const e=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=t.replace(n,"");const i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const h=i.exec(r);if(h===null)break;e.push(h[0])}r=r.replace(i,"");const a=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,l="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",c=new RegExp(l,"gi");for(;;){let h=a.exec(r);if(h===null){if(h=c.exec(r),h===null)break;a.lastIndex=c.lastIndex}else c.lastIndex=a.lastIndex;e.push(h[0])}return e}async function HW(t,e){const n=[],r=[];return t.forEach(i=>{if("cssRules"in i)try{Ls(i.cssRules||[]).forEach((a,l)=>{if(a.type===CSSRule.IMPORT_RULE){let c=l+1;const h=a.href,p=l1(h).then(m=>u1(m,e)).then(m=>c1(m).forEach(y=>{try{i.insertRule(y,y.startsWith("@import")?c+=1:i.cssRules.length)}catch(w){console.error("Error inserting rule from remote css",{rule:y,error:w})}})).catch(m=>{console.error("Error loading remote css",m.toString())});r.push(p)}})}catch(a){const l=t.find(c=>c.href==null)||document.styleSheets[0];i.href!=null&&r.push(l1(i.href).then(c=>u1(c,e)).then(c=>c1(c).forEach(h=>{l.insertRule(h,l.cssRules.length)})).catch(c=>{console.error("Error loading remote stylesheet",c)})),console.error("Error inlining remote css file",a)}}),Promise.all(r).then(()=>(t.forEach(i=>{if("cssRules"in i)try{Ls(i.cssRules||[]).forEach(a=>{n.push(a)})}catch(a){console.error(`Error while reading CSS rules from ${i.href}`,a)}}),n))}function qW(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>zk(e.style.getPropertyValue("src")))}async function KW(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=Ls(t.ownerDocument.styleSheets),r=await HW(n,e);return qW(r)}function Hk(t){return t.trim().replace(/["']/g,"")}function GW(t){const e=new Set;function n(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(a=>{e.add(Hk(a))}),Array.from(r.children).forEach(a=>{a instanceof HTMLElement&&n(a)})}return n(t),e}async function QW(t,e){const n=await KW(t,e),r=GW(t);return(await Promise.all(n.filter(a=>r.has(Hk(a.style.fontFamily))).map(a=>{const l=a.parentStyleSheet?a.parentStyleSheet.href:null;return Bk(a.cssText,l,e)}))).join(`
`)}async function YW(t,e){const n=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await QW(t,e);if(n){const r=document.createElement("style"),i=document.createTextNode(n);r.appendChild(i),t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r)}}async function XW(t,e={}){const{width:n,height:r}=Fk(t,e),i=await Rp(t,e,!0);return await YW(i,e),await Wk(i,e),WW(i,e),await pW(i,n,r)}async function JW(t,e={}){const{width:n,height:r}=Fk(t,e),i=await XW(t,e),a=await zd(i),l=document.createElement("canvas"),c=l.getContext("2d"),h=e.pixelRatio||hW(),p=e.canvasWidth||n,m=e.canvasHeight||r;return l.width=p*h,l.height=m*h,e.skipAutoScale||fW(l),l.style.width=`${p}`,l.style.height=`${m}`,e.backgroundColor&&(c.fillStyle=e.backgroundColor,c.fillRect(0,0,l.width,l.height)),c.drawImage(a,0,0,l.width,l.height),l}async function qk(t,e={}){return(await JW(t,e)).toDataURL()}var Yf={exports:{}},ZW=Yf.exports,h1;function eH(){return h1||(h1=1,function(t,e){(function(n,r){t.exports=r()})(ZW,function(){return function n(r,i,a){var l=window,c="application/octet-stream",h=a||c,p=r,m=!i&&!a&&p,y=document.createElement("a"),w=function(C){return String(C)},T=l.Blob||l.MozBlob||l.WebKitBlob||w,x=i||"download",P,k;if(T=T.call?T.bind(l):Blob,String(this)==="true"&&(p=[p,h],h=p[0],p=p[1]),m&&m.length<2048&&(x=m.split("/").pop().split("?")[0],y.href=m,y.href.indexOf(m)!==-1)){var b=new XMLHttpRequest;return b.open("GET",m,!0),b.responseType="blob",b.onload=function(C){n(C.target.response,x,c)},setTimeout(function(){b.send()},0),b}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(p))if(p.length>1024*1024*1.999&&T!==w)p=H(p),h=p.type||c;else return navigator.msSaveBlob?navigator.msSaveBlob(H(p),x):X(p);else if(/([\x80-\xff])/.test(p)){var O=0,U=new Uint8Array(p.length),$=U.length;for(O;O<$;++O)U[O]=p.charCodeAt(O);p=new T([U],{type:h})}P=p instanceof T?p:new T([p],{type:h});function H(C){var I=C.split(/[:;,]/),R=I[1],D=I[2]=="base64"?atob:decodeURIComponent,L=D(I.pop()),B=L.length,V=0,ke=new Uint8Array(B);for(V;V<B;++V)ke[V]=L.charCodeAt(V);return new T([ke],{type:R})}function X(C,I){if("download"in y)return y.href=C,y.setAttribute("download",x),y.className="download-js-link",y.innerHTML="downloading...",y.style.display="none",document.body.appendChild(y),setTimeout(function(){y.click(),document.body.removeChild(y),I===!0&&setTimeout(function(){l.URL.revokeObjectURL(y.href)},250)},66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(C)&&(C="data:"+C.replace(/^data:([\w\/\-\+]+)/,c)),window.open(C)||confirm(`Displaying New Document

Use Save As... to download, then click back to return to this page.`)&&(location.href=C),!0;var R=document.createElement("iframe");document.body.appendChild(R),!I&&/^data:/.test(C)&&(C="data:"+C.replace(/^data:([\w\/\-\+]+)/,c)),R.src=C,setTimeout(function(){document.body.removeChild(R)},333)}if(navigator.msSaveBlob)return navigator.msSaveBlob(P,x);if(l.URL)X(l.URL.createObjectURL(P),!0);else{if(typeof P=="string"||P.constructor===w)try{return X("data:"+h+";base64,"+l.btoa(P))}catch{return X("data:"+h+","+encodeURIComponent(P))}k=new FileReader,k.onload=function(C){X(this.result)},k.readAsDataURL(P)}return!0}})}(Yf)),Yf.exports}var tH=eH();const nH=F1(tH),rH=async(t,e)=>{const n=document.getElementById(t);if(!n)return;const r=n.style.width;n.style.width="1000px";try{await document.fonts.ready,await new Promise(a=>setTimeout(a,300));const i=await qk(n,{cacheBust:!0,backgroundColor:"#ffffff",pixelRatio:2,canvasWidth:1200,canvasHeight:900});nH(i,`Kiddoo_Certificate_${e}.png`)}finally{n.style.width=r}},iH=async(t,e,n)=>{const r=document.getElementById(t);if(!r)return;const i=r.style.width;r.style.width="1000px";try{await document.fonts.ready,await new Promise(m=>setTimeout(m,300));const a=await qk(r,{cacheBust:!0,backgroundColor:"#ffffff",pixelRatio:2,canvasWidth:1200,canvasHeight:900}),c=await(await fetch(a)).blob(),h=new File([c],`Kiddoo_Certificate_${e}.png`,{type:"image/png"}),p={title:"My Kiddoo Achievement!",text:`I just achieved a score of ${n}/10 in the ${e} test on Kiddoo! 🏆 Try it yourself at: https://dnshariprasad.github.io/kiddoo/`,files:[h]};if(navigator.canShare&&navigator.canShare({files:[h]}))await navigator.share(p);else{const y=`${window.location.origin+window.location.pathname}#/?certName=${encodeURIComponent(e)}&certScore=${n}`;if(navigator.share)await navigator.share({title:p.title,text:p.text,url:y});else return await navigator.clipboard.writeText(`${p.text} Check it out here: ${y}`),"copied"}}finally{r.style.width=i}return"shared"},sH=(t=new Date)=>t.toLocaleDateString(),oH=(t=new Date)=>t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",timeZoneName:"short"}),aH=()=>{const t=new Date().toISOString().split("T")[0].replace(/-/g,""),e=Date.now().toString().slice(-6),n=Math.random().toString(36).substring(7).toUpperCase();return`KIDDOO-${t}-${e}-${n}`},lH=({onClose:t,challengeName:e,score:n,level:r,timeTaken:i})=>{const a=vA.en,l=Pi(y=>y.alphabet.userName),[c,h]=er.useState(!1),p=async()=>{h(!0);try{await rH("certificate-content",e)}catch(y){console.error("Error generating image:",y),window.print()}finally{h(!1)}},m=async()=>{h(!0);try{await iH("certificate-content",e,n)==="copied"&&alert(a.cert_copied)}catch(y){console.error("Error sharing:",y),alert(a.cert_failed)}finally{h(!1)}};return F.jsx(Q8,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:F.jsxs(Y8,{initial:{scale:.8,y:50},animate:{scale:1,y:0},exit:{scale:.8,y:50},onClick:y=>y.stopPropagation(),children:[F.jsx(oW,{onClick:t,title:"Close",className:"no-print",children:F.jsx(QP,{size:24})}),F.jsxs(X8,{id:"certificate-content",children:[F.jsx(J8,{}),F.jsx(Z8,{children:a.cert_pro}),F.jsx(eW,{children:a.cert_award}),F.jsx(tW,{children:a.cert_belongs}),F.jsxs(nW,{children:[F.jsx(O9,{size:48,color:"#6366f1"}),l||"Super Star"]}),F.jsxs(rW,{children:[a.cert_legend," ",F.jsx("b",{children:e})," ",a.cert_challenge,r?` (${r} ${a.cert_level})`:"","! ",a.cert_smashed," ",F.jsxs("b",{children:[n,"/10"]}),i?F.jsxs(F.Fragment,{children:[" ",a.cert_inJust," ",F.jsx("b",{children:i})]}):"","! ",a.cert_keepAwesome]}),F.jsxs(iW,{children:[F.jsxs(r1,{$variant:"small",children:[sH()," | ",oH()]}),F.jsx(r1,{$variant:"tiny",children:aH()})]})]}),F.jsxs(sW,{className:"no-print",children:[F.jsx($d,{title:c?a.cert_generating:a.cert_download,variant:"primary",onClick:p,icon:c?F.jsx(A9,{size:20,className:"animate-spin"}):F.jsx(T9,{size:20})}),F.jsx($d,{title:a.cert_share,variant:"secondary",onClick:m,icon:F.jsx(GP,{size:20})})]})]})})},uH=()=>{const t=oi(),e=dv(),[n,r]=M.useState(null);return M.useEffect(()=>{const i=new URLSearchParams(t.search),a=i.get("certName"),l=i.get("certScore");a&&l&&r({name:a,score:parseInt(l,10)})},[t]),n?F.jsx(xk,{children:F.jsx(lH,{onClose:()=>{r(null),e(t.pathname,{replace:!0})},challengeName:n.name,score:n.score})}):null},Ve={primary:"#6366F1",primaryDark:"#4F46E5",primaryLight:"#818CF8",onPrimary:"#FFFFFF",primaryContainer:"#EEF2FF",primaryContainerDark:"#312E81",secondary:"#6366F1",onSecondary:"#FFFFFF",accent:"#6366F1",accentLight:"#FF7675",success:"#10B981",successDark:"#34D399",warning:"#F59E0B",warningDark:"#FBBF24",error:"#EF4444",background:"#F8FAFC",backgroundDark:"#0F172A",surface:"#FFFFFF",surfaceDark:"#1E293B",surfaceVariant:"#F1F5F9",surfaceVariantDark:"#334155",textPrimary:"#1E293B",textPrimaryDark:"#F1F5F9",textSecondary:"#64748B",textSecondaryDark:"#94A3B8",border:"#E2E8F0",borderDark:"#334155",borderLight:"#F0F0F0",shadow:"rgba(99, 102, 241, 0.1)",shadowDark:"rgba(0, 0, 0, 0.3)",cellFixedBg:"#F8F9FA",cellFixedText:"#636E72",tipBoxBg:"rgba(99, 102, 241, 0.05)",operator:"#FF7675",equalSign:"#6366F1",questionMark:"#DFE6E9",gold:"#FFD700",goldDark:"#D97706",goldLight:"#FDE68A",slate:"#94A3B8",slateDark:"#475569",slateLight:"#E2E8F0",math:"#6366F1",english:"#6366F1",hindi:"#6366F1"},cH={primary:"'Nunito', sans-serif",secondary:"'Quicksand', sans-serif"},hH={small:"12px",medium:"20px",large:"28px",round:"50%"},fH={sm:"0 2px 4px rgba(0,0,0,0.05)",md:"0 4px 12px rgba(0,0,0,0.08)",lg:"0 8px 24px rgba(0,0,0,0.12)"},dH={small:{xs:"0.75rem",sm:"0.85rem",base:"0.9rem",md:"1rem",lg:"1.2rem",xl:"1.5rem",xxl:"2rem",huge:"3rem"},medium:{xs:"0.85rem",sm:"0.95rem",base:"1rem",md:"1.2rem",lg:"1.5rem",xl:"2rem",xxl:"2.5rem",huge:"4rem"},large:{xs:"1rem",sm:"1.1rem",base:"1.2rem",md:"1.5rem",lg:"2rem",xl:"2.5rem",xxl:"3.5rem",huge:"6rem"}},Kk={fonts:cH,borderRadius:hH,shadows:fH,fontSizes:dH},pH={...Kk,colors:{primary:Ve.primary,onPrimary:Ve.onPrimary,primaryContainer:Ve.primaryContainer,secondary:Ve.secondary,onSecondary:Ve.onSecondary,accent:Ve.accent,success:Ve.success,warning:Ve.warning,math:Ve.math,english:Ve.english,hindi:Ve.hindi,background:Ve.background,surface:Ve.surface,surfaceVariant:Ve.surfaceVariant,textPrimary:Ve.textPrimary,textSecondary:Ve.textSecondary,border:Ve.border,shadow:Ve.shadow,cellFixedBg:Ve.cellFixedBg,cellFixedText:Ve.cellFixedText,tipBoxBg:Ve.tipBoxBg}},mH={...Kk,colors:{primary:Ve.primaryLight,onPrimary:Ve.onPrimary,primaryContainer:Ve.primaryContainerDark,secondary:Ve.primaryLight,onSecondary:Ve.onPrimary,accent:Ve.primaryLight,success:Ve.successDark,warning:Ve.warningDark,math:Ve.primaryLight,english:Ve.primaryLight,hindi:Ve.primaryLight,background:Ve.backgroundDark,surface:Ve.surfaceDark,surfaceVariant:Ve.surfaceVariantDark,textPrimary:Ve.textPrimaryDark,textSecondary:Ve.textSecondaryDark,border:Ve.borderDark,shadow:Ve.shadowDark,cellFixedBg:Ve.surfaceVariantDark,cellFixedText:Ve.textSecondaryDark,tipBoxBg:"rgba(255, 255, 255, 0.05)"}},gH=SL`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;Cl`
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
`;Cl`
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`;Cl`
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
`;const yH=TL`
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
`,iw=se.div`
  background: ${t=>t.theme.colors.surfaceVariant}40;
  background-image: linear-gradient(
    90deg,
    ${t=>t.theme.colors.surfaceVariant}40 0%,
    ${t=>t.theme.colors.surfaceVariant}80 50%,
    ${t=>t.theme.colors.surfaceVariant}40 100%
  );
  background-size: 200% 100%;
  animation: ${gH} 1.5s infinite;
  border-radius: 12px;
`,L7=se.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`,Gk=se.div`
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
`,O7=se.input.attrs({onFocus:t=>{setTimeout(()=>{t.target.scrollIntoView({behavior:"smooth",block:"center"})},300)}})`
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
`,F7=se.span`
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
`;const j7=se.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`,vH=se.div`
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
`;const _H=se.div`
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
`,$7=se(_H)`
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
`;const U7=se.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 0;
  gap: 4px;
`,z7=se.h1`
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
`,B7=se.p`
  font-family: ${t=>t.theme.fonts.secondary};
  font-size: ${t=>t.theme.fontSize.sm};
  color: ${t=>t.theme.colors.textSecondary};
  margin: 0;
  opacity: 0.9;
  max-width: 600px;
  text-align: center;
  font-weight: 500;
`,wH=se(Gk)`
  background: ${t=>t.theme.colors.surface};
  border: 1px solid ${t=>t.theme.colors.primary}20;
  max-width: none;
  padding: 15px 25px;

  &:hover {
    transform: translateY(-4px);
  }
`,EH=se(Gk)`
  /* This represents the primary educational content module */
`,W7=se(EH)`
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
`,TH=se(ai.span)`
  font-size: ${t=>t.theme.fontSize.lg};
`,H7=se(TH)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,q7=se.span`
  position: absolute;
  font-size: 0.7rem;
  font-weight: 900;
  color: #1e293b;
  margin-top: 2px;
`,K7=se.span`
  font-size: 1.5rem;
`,G7=se.span`
  margin-left: 5px;
  font-weight: 800;
  color: #ffd700;
`,Q7=se(ai.div)`
  margin-top: 15px;
`,SH=se(wH)`
  /* This represents the configuration/settings module */
`;se(SH)`
  /* This represents the configuration/settings module */
`;const xH=se.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 10px;
  }
`,Y7=se(xH)`
  margin-top: 15px;
`,X7=se.div`
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
`;se.div`
  display: contents;
`;se.div`
  display: contents;
`;const J7=se.div`
  opacity: ${t=>t.$disabled?.5:1};
  pointer-events: ${t=>t.$disabled?"none":"auto"};
`,Z7=se.h4`
  color: ${t=>t.theme.colors.primary};
  font-family: ${t=>t.theme.fonts.primary};
  font-size: 1.1rem;
  font-weight: 800;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`,eq=se.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
  margin: 8px 0 0;
  box-sizing: border-box;
`,tq=se.label`
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
`,nq=se.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  background: transparent;
`,rq=se(ai.div)`
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
`,iq=se.button`
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
`,sq=se.label`
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
`,oq=se.input`
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
`,aq=se.div`
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
`,IH=se(ai.div)`
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
`,AH=se(ai.div)`
  background: ${t=>t.theme.colors.surface};
  padding: 40px;
  border-radius: 32px;
  width: 100%;
  max-width: 450px;
  text-align: center;
  border: 4px solid ${t=>t.theme.colors.primary}20;
`,CH=se.div`
  width: 80px;
  height: 80px;
  background: ${t=>t.theme.colors.primary}15;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 24px;
  color: ${t=>t.theme.colors.primary};
`,PH=se.input.attrs({onFocus:t=>{setTimeout(()=>{t.target.scrollIntoView({behavior:"smooth",block:"center"})},300)}})`
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
`,RH=({onComplete:t})=>{const[e,n]=M.useState(""),r=_v(),i=a=>{a==null||a.preventDefault(),e.trim()&&(r(fM(e.trim())),t())};return F.jsx(xk,{children:F.jsx(IH,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:F.jsxs(AH,{initial:{scale:.9,y:20,opacity:0},animate:{scale:1,y:0,opacity:1},transition:{type:"spring",damping:25,stiffness:300},children:[F.jsx(CH,{children:F.jsx($9,{size:40})}),F.jsx(nc,{fontSize:"xl",color:"primary",fontWeight:"bold",children:"Hi there!"}),F.jsx(nc,{fontSize:"md",color:"textSecondary",margin:"8px 0 0",children:"What is your name?"}),F.jsxs("form",{onSubmit:i,children:[F.jsx(PH,{autoFocus:!0,placeholder:"Enter your name...",value:e,onChange:a=>n(a.target.value),maxLength:20}),F.jsx($d,{title:"Start Learning! 🚀",onClick:i,variant:"primary",width:"100%",isActive:e.trim().length>0})]})]})})})},kH=se(iw)`
  width: 300px;
  height: 48px;
  margin-bottom: 12px;
`,bH=se(iw)`
  width: 500px;
  height: 24px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 90%;
  }
`,Qg=se(iw)`
  width: 100%;
  height: 400px;
  border-radius: 28px;
`,DH=se.div`
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
`,Qk=()=>F.jsx(vH,{children:F.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",marginTop:"40px"},children:[F.jsx(kH,{}),F.jsx(bH,{}),F.jsxs(DH,{children:[F.jsx(Qg,{}),F.jsx(Qg,{}),F.jsx(Qg,{})]})]})}),VH=({children:t})=>{const e=Pi(a=>a.alphabet.theme),n=Pi(a=>a.alphabet.fontSizeLevel),r=e==="dark"?mH:pH,i={...r,fontSize:r.fontSizes[n]};return F.jsxs(_L,{theme:i,children:[F.jsx(yH,{}),t]})},NH=({children:t})=>{const e=_v(),[n,r]=M.useState(!0);return M.useEffect(()=>E4(HP,a=>{e(qE(a?{uid:a.uid,email:a.email,displayName:a.displayName}:null)),r(!1)}),[e]),n?F.jsx(Qk,{}):F.jsx(F.Fragment,{children:t})},et=({children:t})=>{const e=Pi(a=>a.alphabet.user),n=Pi(a=>a.alphabet.userName),[r,i]=M.useState(!n);return e?!n&&r?F.jsx(RH,{onComplete:()=>i(!1)}):F.jsx(F.Fragment,{children:t}):F.jsx(iV,{to:"/login"})},MH=()=>F.jsx(Qk,{}),LH=M.lazy(()=>tt(()=>import("./index-Cs-1adw4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]))),OH=M.lazy(()=>tt(()=>import("./index-Blk5G6ta.js"),__vite__mapDeps([26,1,5,10,7,2,14,22,19]))),FH=M.lazy(()=>tt(()=>import("./index-DshOJkVM.js"),__vite__mapDeps([27,20]))),jH=M.lazy(()=>tt(()=>import("./index--gyivwIA.js"),__vite__mapDeps([28,29,30,31,32,33,34,18]))),$H=M.lazy(()=>tt(()=>import("./index-BWavmKtG.js"),__vite__mapDeps([35,29,30,31,32,36,33,34,18,5,25]))),UH=M.lazy(()=>tt(()=>import("./index-C69T1_wK.js"),__vite__mapDeps([37,29,30,32,36,38,33,34,18,12,11,10]))),zH=M.lazy(()=>tt(()=>import("./index-P6-M2V5u.js"),__vite__mapDeps([39,32,33,34,18,30,38,14,24]))),BH=M.lazy(()=>tt(()=>import("./index-CaYIasAy.js"),__vite__mapDeps([40,29,30,31,32,33,34,18,19]))),WH=M.lazy(()=>tt(()=>import("./index-BbKYP2BQ.js"),__vite__mapDeps([41,29,30,31,32,33,34,18,19]))),HH=M.lazy(()=>tt(()=>import("./index-LCMlDJZS.js"),__vite__mapDeps([42,29,30,31,33,32,43,44,9]))),qH=M.lazy(()=>tt(()=>import("./index-DPxDVcXz.js"),__vite__mapDeps([45,29,30,31,33,32,46,44,8]))),KH=M.lazy(()=>tt(()=>import("./index-B94x57yA.js"),__vite__mapDeps([47,29,30,31,33,32,43,44,9]))),GH=M.lazy(()=>tt(()=>import("./index-tQLyB__p.js"),__vite__mapDeps([48,29,30,31,33,32,43,44,9]))),QH=M.lazy(()=>tt(()=>import("./index-C6cv2xT9.js"),__vite__mapDeps([49,29,30,31,33,32,44,23]))),YH=M.lazy(()=>tt(()=>import("./index-DTXUWOro.js"),__vite__mapDeps([50,29,30,31,33,51,44,32,15]))),XH=M.lazy(()=>tt(()=>import("./index-4IwYsUhV.js"),__vite__mapDeps([52,29,30,31,33,51,44,32,15]))),JH=M.lazy(()=>tt(()=>import("./index-DInEPZw8.js"),__vite__mapDeps([53,29,30,31,33,51,44,32,15]))),ZH=M.lazy(()=>tt(()=>import("./index-DXNcMz3T.js"),__vite__mapDeps([54,29,30,31,33,32,46,44,8]))),e7=M.lazy(()=>tt(()=>import("./index-Bj-95oRI.js"),__vite__mapDeps([55,29,30,31,33,32,46,44,8]))),t7=M.lazy(()=>tt(()=>import("./index-BsoTD1WA.js"),__vite__mapDeps([56,33,32,4,11]))),n7=M.lazy(()=>tt(()=>import("./index-A4U31mb2.js"),__vite__mapDeps([57,29,30,31,33,32,58,44,16]))),r7=M.lazy(()=>tt(()=>import("./index-Bo53bul_.js"),__vite__mapDeps([59,29,30,31,33,32,58,44,13]))),f1=M.lazy(()=>tt(()=>import("./index-Bx2yxCdK.js"),__vite__mapDeps([60,32,30,36,38,33,34,18,61,11]))),i7=M.lazy(()=>tt(()=>import("./index-uLuyy9Uj.js"),__vite__mapDeps([62,32,30,38,33,34,18,61,63,21]))),s7=M.lazy(()=>tt(()=>import("./index-BtOeE9gJ.js"),__vite__mapDeps([64,32,30,38,33,34,18,61,63,7]))),o7=M.lazy(()=>tt(()=>import("./index-KJ2dVqb_.js"),__vite__mapDeps([65,32,30,38,63,33,34,18,61,2]))),d1=M.lazy(()=>tt(()=>import("./index-_WG428Dt.js"),__vite__mapDeps([66,67,38,29,30,31,34,18,36,63,10,6,17,22,12,7,5,19,21,2]))),a7=M.lazy(()=>tt(()=>import("./index-KFQI9pjC.js"),__vite__mapDeps([68,33,32,29,30,31,15]))),l7=M.lazy(()=>tt(()=>import("./index-BcbucBYf.js"),__vite__mapDeps([69,67,33,3,9,6])));dD.createRoot(document.getElementById("root")).render(F.jsx(M.StrictMode,{children:F.jsx(eN,{store:EM,children:F.jsx(VH,{children:F.jsx(G8,{children:F.jsx(kV,{children:F.jsxs(NH,{children:[F.jsx(q9,{}),F.jsx(uH,{}),F.jsx(M.Suspense,{fallback:F.jsx(MH,{}),children:F.jsxs(oV,{children:[F.jsx(qe,{path:"/login",element:F.jsx(FH,{})}),F.jsxs(qe,{path:"/",element:F.jsx(et,{children:F.jsx(LH,{})}),children:[F.jsx(qe,{index:!0,element:F.jsx(OH,{})}),F.jsx(qe,{path:"alphabet",element:F.jsx(et,{children:F.jsx(jH,{})})}),F.jsx(qe,{path:"counting",element:F.jsx(et,{children:F.jsx(s7,{})})}),F.jsx(qe,{path:"learn_numbers",element:F.jsx(et,{children:F.jsx(a7,{})})}),F.jsx(qe,{path:"sight_words",element:F.jsx(et,{children:F.jsx($H,{})})}),F.jsx(qe,{path:"spelling",element:F.jsx(et,{children:F.jsx(UH,{})})}),F.jsx(qe,{path:"comparison",element:F.jsx(et,{children:F.jsx(i7,{})})}),F.jsx(qe,{path:"sudoku",element:F.jsx(et,{children:F.jsx(zH,{})})}),F.jsx(qe,{path:"missing_letters",element:F.jsx(et,{children:F.jsx(f1,{})})}),F.jsx(qe,{path:"sorting_numbers",element:F.jsx(et,{children:F.jsx(o7,{})})}),F.jsx(qe,{path:"missing_numbers",element:F.jsx(et,{children:F.jsx(f1,{})})}),F.jsx(qe,{path:"alphabet_hindi",element:F.jsx(et,{children:F.jsx(BH,{})})}),F.jsx(qe,{path:"alphabet_telugu",element:F.jsx(et,{children:F.jsx(WH,{})})}),F.jsx(qe,{path:"weeks_english",element:F.jsx(et,{children:F.jsx(HH,{})})}),F.jsx(qe,{path:"months_english",element:F.jsx(et,{children:F.jsx(qH,{})})}),F.jsx(qe,{path:"weeks_telugu",element:F.jsx(et,{children:F.jsx(KH,{})})}),F.jsx(qe,{path:"weeks_hindi",element:F.jsx(et,{children:F.jsx(GH,{})})}),F.jsx(qe,{path:"shapes",element:F.jsx(et,{children:F.jsx(QH,{})})}),F.jsx(qe,{path:"place_values",element:F.jsx(et,{children:F.jsx(t7,{})})}),F.jsx(qe,{path:"numbers_english_spelling",element:F.jsx(et,{children:F.jsx(YH,{})})}),F.jsx(qe,{path:"numbers_hindi",element:F.jsx(et,{children:F.jsx(XH,{})})}),F.jsx(qe,{path:"numbers_telugu",element:F.jsx(et,{children:F.jsx(JH,{})})}),F.jsx(qe,{path:"months_telugu",element:F.jsx(et,{children:F.jsx(ZH,{})})}),F.jsx(qe,{path:"months_hindi",element:F.jsx(et,{children:F.jsx(e7,{})})}),F.jsx(qe,{path:"body_parts",element:F.jsx(et,{children:F.jsx(n7,{})})}),F.jsx(qe,{path:"sense_organs",element:F.jsx(et,{children:F.jsx(r7,{})})}),F.jsx(qe,{path:"test/:testId",element:F.jsx(et,{children:F.jsx(d1,{})})}),F.jsx(qe,{path:"master_test",element:F.jsx(et,{children:F.jsx(d1,{})})}),F.jsx(qe,{path:"test_history",element:F.jsx(et,{children:F.jsx(l7,{})})})]})]})})]})})})})})}));export{SH as $,_7 as A,f9 as B,p9 as C,T9 as D,HP as E,qE as F,v7 as G,x9 as H,c9 as I,w7 as J,nc as K,A9 as L,k9 as M,xs as N,h7 as O,vH as P,E7 as Q,X7 as R,GP as S,O9 as T,$9 as U,z9 as V,W7 as W,QP as X,xk as Y,Y7 as Z,F7 as _,g9 as a,J7 as a0,Z7 as a1,j7 as a2,d7 as a3,L7 as a4,H7 as a5,K7 as a6,q7 as a7,G7 as a8,f7 as a9,aq as aA,$7 as aB,EM as aC,Qk as aD,k7 as aE,I7 as aF,b7 as aG,ct as aH,A7 as aI,C7 as aJ,P7 as aK,R7 as aL,_H as aM,vA as aa,Ve as ab,O7 as ac,xH as ad,er as ae,sq as af,oq as ag,U6 as ah,R_ as ai,Sl as aj,Z_ as ak,YP as al,qs as am,rt as an,tx as ao,ht as ap,V7 as aq,tn as ar,Q7 as as,c7 as at,nq as au,rq as av,iq as aw,lH as ax,eq as ay,tq as az,v9 as b,Ft as c,w9 as d,P9 as e,D9 as f,M9 as g,gf as h,W9 as i,D7 as j,se as k,dv as l,oi as m,_v as n,Pi as o,F as p,p7 as q,ai as r,Gk as s,U7 as t,u9 as u,z7 as v,B7 as w,$d as x,m7 as y,M as z};
