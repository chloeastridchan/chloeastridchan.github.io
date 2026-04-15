(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();var l0={exports:{}},gu={};var $S;function lw(){if($S)return gu;$S=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function e(i,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:s,type:i,key:u,ref:a!==void 0?a:null,props:l}}return gu.Fragment=t,gu.jsx=e,gu.jsxs=e,gu}var tM;function cw(){return tM||(tM=1,l0.exports=lw()),l0.exports}var ht=cw(),c0={exports:{}},_u={},u0={exports:{}},f0={};var eM;function uw(){return eM||(eM=1,(function(s){function t(z,B){var tt=z.length;z.push(B);t:for(;0<tt;){var rt=tt-1>>>1,G=z[rt];if(0<a(G,B))z[rt]=B,z[tt]=G,tt=rt;else break t}}function e(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var B=z[0],tt=z.pop();if(tt!==B){z[0]=tt;t:for(var rt=0,G=z.length,F=G>>>1;rt<F;){var Q=2*(rt+1)-1,_t=z[Q],Mt=Q+1,Lt=z[Mt];if(0>a(_t,tt))Mt<G&&0>a(Lt,_t)?(z[rt]=Lt,z[Mt]=tt,rt=Mt):(z[rt]=_t,z[Q]=tt,rt=Q);else if(Mt<G&&0>a(Lt,tt))z[rt]=Lt,z[Mt]=tt,rt=Mt;else break t}}return B}function a(z,B){var tt=z.sortIndex-B.sortIndex;return tt!==0?tt:z.id-B.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var d=[],h=[],m=1,v=null,_=3,x=!1,S=!1,b=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function w(z){for(var B=e(h);B!==null;){if(B.callback===null)i(h);else if(B.startTime<=z)i(h),B.sortIndex=B.expirationTime,t(d,B);else break;B=e(h)}}function U(z){if(b=!1,w(z),!S)if(e(d)!==null)S=!0,O||(O=!0,V());else{var B=e(h);B!==null&&Y(U,B.startTime-z)}}var O=!1,R=-1,T=5,D=-1;function k(){return y?!0:!(s.unstable_now()-D<T)}function I(){if(y=!1,O){var z=s.unstable_now();D=z;var B=!0;try{t:{S=!1,b&&(b=!1,A(R),R=-1),x=!0;var tt=_;try{e:{for(w(z),v=e(d);v!==null&&!(v.expirationTime>z&&k());){var rt=v.callback;if(typeof rt=="function"){v.callback=null,_=v.priorityLevel;var G=rt(v.expirationTime<=z);if(z=s.unstable_now(),typeof G=="function"){v.callback=G,w(z),B=!0;break e}v===e(d)&&i(d),w(z)}else i(d);v=e(d)}if(v!==null)B=!0;else{var F=e(h);F!==null&&Y(U,F.startTime-z),B=!1}}break t}finally{v=null,_=tt,x=!1}B=void 0}}finally{B?V():O=!1}}}var V;if(typeof L=="function")V=function(){L(I)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,Z=$.port2;$.port1.onmessage=I,V=function(){Z.postMessage(null)}}else V=function(){M(I,0)};function Y(z,B){R=M(function(){z(s.unstable_now())},B)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_next=function(z){switch(_){case 1:case 2:case 3:var B=3;break;default:B=_}var tt=_;_=B;try{return z()}finally{_=tt}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,B){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var tt=_;_=z;try{return B()}finally{_=tt}},s.unstable_scheduleCallback=function(z,B,tt){var rt=s.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?rt+tt:rt):tt=rt,z){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=tt+G,z={id:m++,callback:B,priorityLevel:z,startTime:tt,expirationTime:G,sortIndex:-1},tt>rt?(z.sortIndex=tt,t(h,z),e(d)===null&&z===e(h)&&(b?(A(R),R=-1):b=!0,Y(U,tt-rt))):(z.sortIndex=G,t(d,z),S||x||(S=!0,O||(O=!0,V()))),z},s.unstable_shouldYield=k,s.unstable_wrapCallback=function(z){var B=_;return function(){var tt=_;_=B;try{return z.apply(this,arguments)}finally{_=tt}}}})(f0)),f0}var nM;function fw(){return nM||(nM=1,u0.exports=uw()),u0.exports}var h0={exports:{}},Ee={};var iM;function hw(){if(iM)return Ee;iM=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function M(F,Q,_t){this.props=F,this.context=Q,this.refs=y,this.updater=_t||S}M.prototype.isReactComponent={},M.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},M.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function A(){}A.prototype=M.prototype;function L(F,Q,_t){this.props=F,this.context=Q,this.refs=y,this.updater=_t||S}var w=L.prototype=new A;w.constructor=L,b(w,M.prototype),w.isPureReactComponent=!0;var U=Array.isArray;function O(){}var R={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function D(F,Q,_t){var Mt=_t.ref;return{$$typeof:s,type:F,key:Q,ref:Mt!==void 0?Mt:null,props:_t}}function k(F,Q){return D(F.type,Q,F.props)}function I(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function V(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(_t){return Q[_t]})}var $=/\/+/g;function Z(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):Q.toString(36)}function Y(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(O,O):(F.status="pending",F.then(function(Q){F.status==="pending"&&(F.status="fulfilled",F.value=Q)},function(Q){F.status==="pending"&&(F.status="rejected",F.reason=Q)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function z(F,Q,_t,Mt,Lt){var it=typeof F;(it==="undefined"||it==="boolean")&&(F=null);var gt=!1;if(F===null)gt=!0;else switch(it){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(F.$$typeof){case s:case t:gt=!0;break;case m:return gt=F._init,z(gt(F._payload),Q,_t,Mt,Lt)}}if(gt)return Lt=Lt(F),gt=Mt===""?"."+Z(F,0):Mt,U(Lt)?(_t="",gt!=null&&(_t=gt.replace($,"$&/")+"/"),z(Lt,Q,_t,"",function(ee){return ee})):Lt!=null&&(I(Lt)&&(Lt=k(Lt,_t+(Lt.key==null||F&&F.key===Lt.key?"":(""+Lt.key).replace($,"$&/")+"/")+gt)),Q.push(Lt)),1;gt=0;var Et=Mt===""?".":Mt+":";if(U(F))for(var zt=0;zt<F.length;zt++)Mt=F[zt],it=Et+Z(Mt,zt),gt+=z(Mt,Q,_t,it,Lt);else if(zt=x(F),typeof zt=="function")for(F=zt.call(F),zt=0;!(Mt=F.next()).done;)Mt=Mt.value,it=Et+Z(Mt,zt++),gt+=z(Mt,Q,_t,it,Lt);else if(it==="object"){if(typeof F.then=="function")return z(Y(F),Q,_t,Mt,Lt);throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return gt}function B(F,Q,_t){if(F==null)return F;var Mt=[],Lt=0;return z(F,Mt,"","",function(it){return Q.call(_t,it,Lt++)}),Mt}function tt(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(_t){(F._status===0||F._status===-1)&&(F._status=1,F._result=_t)},function(_t){(F._status===0||F._status===-1)&&(F._status=2,F._result=_t)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var rt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},G={map:B,forEach:function(F,Q,_t){B(F,function(){Q.apply(this,arguments)},_t)},count:function(F){var Q=0;return B(F,function(){Q++}),Q},toArray:function(F){return B(F,function(Q){return Q})||[]},only:function(F){if(!I(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return Ee.Activity=v,Ee.Children=G,Ee.Component=M,Ee.Fragment=e,Ee.Profiler=a,Ee.PureComponent=L,Ee.StrictMode=i,Ee.Suspense=d,Ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,Ee.__COMPILER_RUNTIME={__proto__:null,c:function(F){return R.H.useMemoCache(F)}},Ee.cache=function(F){return function(){return F.apply(null,arguments)}},Ee.cacheSignal=function(){return null},Ee.cloneElement=function(F,Q,_t){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Mt=b({},F.props),Lt=F.key;if(Q!=null)for(it in Q.key!==void 0&&(Lt=""+Q.key),Q)!T.call(Q,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&Q.ref===void 0||(Mt[it]=Q[it]);var it=arguments.length-2;if(it===1)Mt.children=_t;else if(1<it){for(var gt=Array(it),Et=0;Et<it;Et++)gt[Et]=arguments[Et+2];Mt.children=gt}return D(F.type,Lt,Mt)},Ee.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:l,_context:F},F},Ee.createElement=function(F,Q,_t){var Mt,Lt={},it=null;if(Q!=null)for(Mt in Q.key!==void 0&&(it=""+Q.key),Q)T.call(Q,Mt)&&Mt!=="key"&&Mt!=="__self"&&Mt!=="__source"&&(Lt[Mt]=Q[Mt]);var gt=arguments.length-2;if(gt===1)Lt.children=_t;else if(1<gt){for(var Et=Array(gt),zt=0;zt<gt;zt++)Et[zt]=arguments[zt+2];Lt.children=Et}if(F&&F.defaultProps)for(Mt in gt=F.defaultProps,gt)Lt[Mt]===void 0&&(Lt[Mt]=gt[Mt]);return D(F,it,Lt)},Ee.createRef=function(){return{current:null}},Ee.forwardRef=function(F){return{$$typeof:f,render:F}},Ee.isValidElement=I,Ee.lazy=function(F){return{$$typeof:m,_payload:{_status:-1,_result:F},_init:tt}},Ee.memo=function(F,Q){return{$$typeof:h,type:F,compare:Q===void 0?null:Q}},Ee.startTransition=function(F){var Q=R.T,_t={};R.T=_t;try{var Mt=F(),Lt=R.S;Lt!==null&&Lt(_t,Mt),typeof Mt=="object"&&Mt!==null&&typeof Mt.then=="function"&&Mt.then(O,rt)}catch(it){rt(it)}finally{Q!==null&&_t.types!==null&&(Q.types=_t.types),R.T=Q}},Ee.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},Ee.use=function(F){return R.H.use(F)},Ee.useActionState=function(F,Q,_t){return R.H.useActionState(F,Q,_t)},Ee.useCallback=function(F,Q){return R.H.useCallback(F,Q)},Ee.useContext=function(F){return R.H.useContext(F)},Ee.useDebugValue=function(){},Ee.useDeferredValue=function(F,Q){return R.H.useDeferredValue(F,Q)},Ee.useEffect=function(F,Q){return R.H.useEffect(F,Q)},Ee.useEffectEvent=function(F){return R.H.useEffectEvent(F)},Ee.useId=function(){return R.H.useId()},Ee.useImperativeHandle=function(F,Q,_t){return R.H.useImperativeHandle(F,Q,_t)},Ee.useInsertionEffect=function(F,Q){return R.H.useInsertionEffect(F,Q)},Ee.useLayoutEffect=function(F,Q){return R.H.useLayoutEffect(F,Q)},Ee.useMemo=function(F,Q){return R.H.useMemo(F,Q)},Ee.useOptimistic=function(F,Q){return R.H.useOptimistic(F,Q)},Ee.useReducer=function(F,Q,_t){return R.H.useReducer(F,Q,_t)},Ee.useRef=function(F){return R.H.useRef(F)},Ee.useState=function(F){return R.H.useState(F)},Ee.useSyncExternalStore=function(F,Q,_t){return R.H.useSyncExternalStore(F,Q,_t)},Ee.useTransition=function(){return R.H.useTransition()},Ee.version="19.2.5",Ee}var rM;function A_(){return rM||(rM=1,h0.exports=hw()),h0.exports}var d0={exports:{}},yi={};var aM;function dw(){if(aM)return yi;aM=1;var s=A_();function t(d){var h="https://react.dev/errors/"+d;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)h+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+d+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function e(){}var i={d:{f:e,r:function(){throw Error(t(522))},D:e,C:e,L:e,m:e,X:e,S:e,M:e},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(d,h,m){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:v==null?null:""+v,children:d,containerInfo:h,implementation:m}}var u=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,h){if(d==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return yi.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,yi.createPortal=function(d,h){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return l(d,h,null,m)},yi.flushSync=function(d){var h=u.T,m=i.p;try{if(u.T=null,i.p=2,d)return d()}finally{u.T=h,i.p=m,i.d.f()}},yi.preconnect=function(d,h){typeof d=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,i.d.C(d,h))},yi.prefetchDNS=function(d){typeof d=="string"&&i.d.D(d)},yi.preinit=function(d,h){if(typeof d=="string"&&h&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,x=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;m==="style"?i.d.S(d,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):m==="script"&&i.d.X(d,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},yi.preinitModule=function(d,h){if(typeof d=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var m=f(h.as,h.crossOrigin);i.d.M(d,{crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&i.d.M(d)},yi.preload=function(d,h){if(typeof d=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var m=h.as,v=f(m,h.crossOrigin);i.d.L(d,m,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},yi.preloadModule=function(d,h){if(typeof d=="string")if(h){var m=f(h.as,h.crossOrigin);i.d.m(d,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:m,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else i.d.m(d)},yi.requestFormReset=function(d){i.d.r(d)},yi.unstable_batchedUpdates=function(d,h){return d(h)},yi.useFormState=function(d,h,m){return u.H.useFormState(d,h,m)},yi.useFormStatus=function(){return u.H.useHostTransitionStatus()},yi.version="19.2.5",yi}var sM;function pw(){if(sM)return d0.exports;sM=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),d0.exports=dw(),d0.exports}var oM;function mw(){if(oM)return _u;oM=1;var s=fw(),t=A_(),e=pw();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function u(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function f(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(i(188))}function h(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(i(188));return r!==n?null:n}for(var o=n,c=r;;){var p=o.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){o=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===o)return d(p),n;if(g===c)return d(p),r;g=g.sibling}throw Error(i(188))}if(o.return!==c.return)o=p,c=g;else{for(var E=!1,P=p.child;P;){if(P===o){E=!0,o=p,c=g;break}if(P===c){E=!0,c=p,o=g;break}P=P.sibling}if(!E){for(P=g.child;P;){if(P===o){E=!0,o=g,c=p;break}if(P===c){E=!0,c=g,o=p;break}P=P.sibling}if(!E)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:r}function m(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=m(n),r!==null)return r;n=n.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),M=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),L=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),I=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=I&&n[I]||n["@@iterator"],typeof n=="function"?n:null)}var $=Symbol.for("react.client.reference");function Z(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===$?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case b:return"Fragment";case M:return"Profiler";case y:return"StrictMode";case U:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case L:return n.displayName||"Context";case A:return(n._context.displayName||"Context")+".Consumer";case w:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case R:return r=n.displayName||null,r!==null?r:Z(n.type)||"Memo";case T:r=n._payload,n=n._init;try{return Z(n(r))}catch{}}return null}var Y=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},rt=[],G=-1;function F(n){return{current:n}}function Q(n){0>G||(n.current=rt[G],rt[G]=null,G--)}function _t(n,r){G++,rt[G]=n.current,n.current=r}var Mt=F(null),Lt=F(null),it=F(null),gt=F(null);function Et(n,r){switch(_t(it,r),_t(Lt,n),_t(Mt,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?MS(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=MS(r),n=bS(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Q(Mt),_t(Mt,n)}function zt(){Q(Mt),Q(Lt),Q(it)}function ee(n){n.memoizedState!==null&&_t(gt,n);var r=Mt.current,o=bS(r,n.type);r!==o&&(_t(Lt,n),_t(Mt,o))}function Kt(n){Lt.current===n&&(Q(Mt),Q(Lt)),gt.current===n&&(Q(gt),hu._currentValue=tt)}var ze,qt;function ae(n){if(ze===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);ze=r&&r[1]||"",qt=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ze+n+qt}var _e=!1;function se(n,r){if(!n||_e)return"";_e=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(r){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(pt){var ft=pt}Reflect.construct(n,[],bt)}else{try{bt.call()}catch(pt){ft=pt}n.call(bt.prototype)}}else{try{throw Error()}catch(pt){ft=pt}(bt=n())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(pt){if(pt&&ft&&typeof pt.stack=="string")return[pt.stack,ft.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),E=g[0],P=g[1];if(E&&P){var W=E.split(`
`),lt=P.split(`
`);for(p=c=0;c<W.length&&!W[c].includes("DetermineComponentFrameRoot");)c++;for(;p<lt.length&&!lt[p].includes("DetermineComponentFrameRoot");)p++;if(c===W.length||p===lt.length)for(c=W.length-1,p=lt.length-1;1<=c&&0<=p&&W[c]!==lt[p];)p--;for(;1<=c&&0<=p;c--,p--)if(W[c]!==lt[p]){if(c!==1||p!==1)do if(c--,p--,0>p||W[c]!==lt[p]){var yt=`
`+W[c].replace(" at new "," at ");return n.displayName&&yt.includes("<anonymous>")&&(yt=yt.replace("<anonymous>",n.displayName)),yt}while(1<=c&&0<=p);break}}}finally{_e=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?ae(o):""}function ct(n,r){switch(n.tag){case 26:case 27:case 5:return ae(n.type);case 16:return ae("Lazy");case 13:return n.child!==r&&r!==null?ae("Suspense Fallback"):ae("Suspense");case 19:return ae("SuspenseList");case 0:case 15:return se(n.type,!1);case 11:return se(n.type.render,!1);case 1:return se(n.type,!0);case 31:return ae("Activity");default:return""}}function q(n){try{var r="",o=null;do r+=ct(n,o),o=n,n=n.return;while(n);return r}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var je=Object.prototype.hasOwnProperty,Te=s.unstable_scheduleCallback,ue=s.unstable_cancelCallback,Wt=s.unstable_shouldYield,H=s.unstable_requestPaint,C=s.unstable_now,K=s.unstable_getCurrentPriorityLevel,vt=s.unstable_ImmediatePriority,xt=s.unstable_UserBlockingPriority,dt=s.unstable_NormalPriority,Vt=s.unstable_LowPriority,Rt=s.unstable_IdlePriority,ie=s.log,Yt=s.unstable_setDisableYieldValue,wt=null,At=null;function Ht(n){if(typeof ie=="function"&&Yt(n),At&&typeof At.setStrictMode=="function")try{At.setStrictMode(wt,n)}catch{}}var Pt=Math.clz32?Math.clz32:X,Ft=Math.log,pe=Math.LN2;function X(n){return n>>>=0,n===0?32:31-(Ft(n)/pe|0)|0}var Dt=256,Ct=262144,Nt=4194304;function Tt(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function mt(n,r,o){var c=n.pendingLanes;if(c===0)return 0;var p=0,g=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var P=c&134217727;return P!==0?(c=P&~g,c!==0?p=Tt(c):(E&=P,E!==0?p=Tt(E):o||(o=P&~n,o!==0&&(p=Tt(o))))):(P=c&~g,P!==0?p=Tt(P):E!==0?p=Tt(E):o||(o=c&~n,o!==0&&(p=Tt(o)))),p===0?0:r!==0&&r!==p&&(r&g)===0&&(g=p&-p,o=r&-r,g>=o||g===32&&(o&4194048)!==0)?r:p}function Xt(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function le(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xe(){var n=Nt;return Nt<<=1,(Nt&62914560)===0&&(Nt=4194304),n}function kt(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Jt(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ae(n,r,o,c,p,g){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var P=n.entanglements,W=n.expirationTimes,lt=n.hiddenUpdates;for(o=E&~o;0<o;){var yt=31-Pt(o),bt=1<<yt;P[yt]=0,W[yt]=-1;var ft=lt[yt];if(ft!==null)for(lt[yt]=null,yt=0;yt<ft.length;yt++){var pt=ft[yt];pt!==null&&(pt.lane&=-536870913)}o&=~bt}c!==0&&Bt(n,c,0),g!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=g&~(E&~r))}function Bt(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var c=31-Pt(r);n.entangledLanes|=r,n.entanglements[c]=n.entanglements[c]|1073741824|o&261930}function he(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var c=31-Pt(o),p=1<<c;p&r|n[c]&r&&(n[c]|=r),o&=~p}}function oe(n,r){var o=r&-r;return o=(o&42)!==0?1:de(o),(o&(n.suspendedLanes|r))!==0?0:o}function de(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function xn(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function ve(){var n=B.p;return n!==0?n:(n=window.event,n===void 0?32:YS(n.type))}function cn(n,r){var o=B.p;try{return B.p=n,r()}finally{B.p=o}}var un=Math.random().toString(36).slice(2),we="__reactFiber$"+un,Me="__reactProps$"+un,Ie="__reactContainer$"+un,Hn="__reactEvents$"+un,fn="__reactListeners$"+un,ii="__reactHandles$"+un,Li="__reactResources$"+un,yn="__reactMarker$"+un;function Rn(n){delete n[we],delete n[Me],delete n[Hn],delete n[fn],delete n[ii]}function Sn(n){var r=n[we];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Ie]||o[we]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=DS(n);n!==null;){if(o=n[we])return o;n=DS(n)}return r}n=o,o=n.parentNode}return null}function xi(n){if(n=n[we]||n[Ie]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function Ur(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function N(n){var r=n[Li];return r||(r=n[Li]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function j(n){n[yn]=!0}var ut=new Set,ot={};function at(n,r){Ut(n,r),Ut(n+"Capture",r)}function Ut(n,r){for(ot[n]=r,n=0;n<r.length;n++)ut.add(r[n])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ot={},jt={};function Zt(n){return je.call(jt,n)?!0:je.call(Ot,n)?!1:It.test(n)?jt[n]=!0:(Ot[n]=!0,!1)}function me(n,r,o){if(Zt(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var c=r.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function be(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function Qt(n,r,o,c){if(c===null)n.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+c)}}function Le(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function En(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Tn(n,r,o){var c=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var p=c.get,g=c.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){o=""+E,g.call(this,E)}}),Object.defineProperty(n,r,{enumerable:c.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Qe(n){if(!n._valueTracker){var r=En(n)?"checked":"value";n._valueTracker=Tn(n,r,""+n[r])}}function Qn(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return n&&(c=En(n)?n.checked?"true":"false":n.value),n=c,n!==o?(r.setValue(n),!0):!1}function ne(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ui=/[\n"\\]/g;function Se(n){return n.replace(Ui,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Ni(n,r,o,c,p,g,E,P){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),r!=null?E==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+Le(r)):n.value!==""+Le(r)&&(n.value=""+Le(r)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),r!=null?Kr(n,E,Le(r)):o!=null?Kr(n,E,Le(o)):c!=null&&n.removeAttribute("value"),p==null&&g!=null&&(n.defaultChecked=!!g),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),P!=null&&typeof P!="function"&&typeof P!="symbol"&&typeof P!="boolean"?n.name=""+Le(P):n.removeAttribute("name")}function cr(n,r,o,c,p,g,E,P){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(n.type=g),r!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||r!=null)){Qe(n);return}o=o!=null?""+Le(o):"",r=r!=null?""+Le(r):o,P||r===n.value||(n.value=r),n.defaultValue=r}c=c??p,c=typeof c!="function"&&typeof c!="symbol"&&!!c,n.checked=P?n.checked:!!c,n.defaultChecked=!!c,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E),Qe(n)}function Kr(n,r,o){r==="number"&&ne(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function ur(n,r,o,c){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Le(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function nn(n,r,o){if(r!=null&&(r=""+Le(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+Le(o):""}function Gn(n,r,o,c){if(r==null){if(c!=null){if(o!=null)throw Error(i(92));if(Y(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),r=o}o=Le(r),n.defaultValue=o,c=n.textContent,c===o&&c!==""&&c!==null&&(n.value=c),Qe(n)}function Oi(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Vn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qr(n,r,o){var c=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":c?n.setProperty(r,o):typeof o!="number"||o===0||Vn.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function Ra(n,r,o){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||r!=null&&r.hasOwnProperty(c)||(c.indexOf("--")===0?n.setProperty(c,""):c==="float"?n.cssFloat="":n[c]="");for(var p in r)c=r[p],r.hasOwnProperty(p)&&o[p]!==c&&Qr(n,p,c)}else for(var g in r)r.hasOwnProperty(g)&&Qr(n,g,r[g])}function Jo(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rT=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),aT=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vf(n){return aT.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Da(){}var ap=null;function sp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $o=null,tl=null;function Sv(n){var r=xi(n);if(r&&(n=r.stateNode)){var o=n[Me]||null;t:switch(n=r.stateNode,r.type){case"input":if(Ni(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Se(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==n&&c.form===n.form){var p=c[Me]||null;if(!p)throw Error(i(90));Ni(c,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<o.length;r++)c=o[r],c.form===n.form&&Qn(c)}break t;case"textarea":nn(n,o.value,o.defaultValue);break t;case"select":r=o.value,r!=null&&ur(n,!!o.multiple,r,!1)}}}var op=!1;function Mv(n,r,o){if(op)return n(r,o);op=!0;try{var c=n(r);return c}finally{if(op=!1,($o!==null||tl!==null)&&(ah(),$o&&(r=$o,n=tl,tl=$o=null,Sv(r),n)))for(r=0;r<n.length;r++)Sv(n[r])}}function Rc(n,r){var o=n.stateNode;if(o===null)return null;var c=o[Me]||null;if(c===null)return null;o=c[r];t:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break t;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var La=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lp=!1;if(La)try{var Dc={};Object.defineProperty(Dc,"passive",{get:function(){lp=!0}}),window.addEventListener("test",Dc,Dc),window.removeEventListener("test",Dc,Dc)}catch{lp=!1}var cs=null,cp=null,xf=null;function bv(){if(xf)return xf;var n,r=cp,o=r.length,c,p="value"in cs?cs.value:cs.textContent,g=p.length;for(n=0;n<o&&r[n]===p[n];n++);var E=o-n;for(c=1;c<=E&&r[o-c]===p[g-c];c++);return xf=p.slice(n,1<c?1-c:void 0)}function yf(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Sf(){return!0}function Ev(){return!1}function Xi(n){function r(o,c,p,g,E){this._reactName=o,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var P in n)n.hasOwnProperty(P)&&(o=n[P],this[P]=o?o(g):g[P]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Sf:Ev,this.isPropagationStopped=Ev,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Sf)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Sf)},persist:function(){},isPersistent:Sf}),r}var io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Mf=Xi(io),Lc=v({},io,{view:0,detail:0}),sT=Xi(Lc),up,fp,Uc,bf=v({},Lc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Uc&&(Uc&&n.type==="mousemove"?(up=n.screenX-Uc.screenX,fp=n.screenY-Uc.screenY):fp=up=0,Uc=n),up)},movementY:function(n){return"movementY"in n?n.movementY:fp}}),Tv=Xi(bf),oT=v({},bf,{dataTransfer:0}),lT=Xi(oT),cT=v({},Lc,{relatedTarget:0}),hp=Xi(cT),uT=v({},io,{animationName:0,elapsedTime:0,pseudoElement:0}),fT=Xi(uT),hT=v({},io,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dT=Xi(hT),pT=v({},io,{data:0}),Av=Xi(pT),mT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_T={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vT(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=_T[n])?!!r[n]:!1}function dp(){return vT}var xT=v({},Lc,{key:function(n){if(n.key){var r=mT[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=yf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?gT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dp,charCode:function(n){return n.type==="keypress"?yf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?yf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),yT=Xi(xT),ST=v({},bf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wv=Xi(ST),MT=v({},Lc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dp}),bT=Xi(MT),ET=v({},io,{propertyName:0,elapsedTime:0,pseudoElement:0}),TT=Xi(ET),AT=v({},bf,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wT=Xi(AT),CT=v({},io,{newState:0,oldState:0}),RT=Xi(CT),DT=[9,13,27,32],pp=La&&"CompositionEvent"in window,Nc=null;La&&"documentMode"in document&&(Nc=document.documentMode);var LT=La&&"TextEvent"in window&&!Nc,Cv=La&&(!pp||Nc&&8<Nc&&11>=Nc),Rv=" ",Dv=!1;function Lv(n,r){switch(n){case"keyup":return DT.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var el=!1;function UT(n,r){switch(n){case"compositionend":return Uv(r);case"keypress":return r.which!==32?null:(Dv=!0,Rv);case"textInput":return n=r.data,n===Rv&&Dv?null:n;default:return null}}function NT(n,r){if(el)return n==="compositionend"||!pp&&Lv(n,r)?(n=bv(),xf=cp=cs=null,el=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Cv&&r.locale!=="ko"?null:r.data;default:return null}}var OT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nv(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!OT[n.type]:r==="textarea"}function Ov(n,r,o,c){$o?tl?tl.push(c):tl=[c]:$o=c,r=hh(r,"onChange"),0<r.length&&(o=new Mf("onChange","change",null,o,c),n.push({event:o,listeners:r}))}var Oc=null,Pc=null;function PT(n){gS(n,0)}function Ef(n){var r=Ur(n);if(Qn(r))return n}function Pv(n,r){if(n==="change")return r}var zv=!1;if(La){var mp;if(La){var gp="oninput"in document;if(!gp){var Fv=document.createElement("div");Fv.setAttribute("oninput","return;"),gp=typeof Fv.oninput=="function"}mp=gp}else mp=!1;zv=mp&&(!document.documentMode||9<document.documentMode)}function Bv(){Oc&&(Oc.detachEvent("onpropertychange",Iv),Pc=Oc=null)}function Iv(n){if(n.propertyName==="value"&&Ef(Pc)){var r=[];Ov(r,Pc,n,sp(n)),Mv(PT,r)}}function zT(n,r,o){n==="focusin"?(Bv(),Oc=r,Pc=o,Oc.attachEvent("onpropertychange",Iv)):n==="focusout"&&Bv()}function FT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ef(Pc)}function BT(n,r){if(n==="click")return Ef(r)}function IT(n,r){if(n==="input"||n==="change")return Ef(r)}function HT(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var fr=typeof Object.is=="function"?Object.is:HT;function zc(n,r){if(fr(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var p=o[c];if(!je.call(r,p)||!fr(n[p],r[p]))return!1}return!0}function Hv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Gv(n,r){var o=Hv(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=r&&c>=r)return{node:o,offset:r-n};n=c}t:{for(;o;){if(o.nextSibling){o=o.nextSibling;break t}o=o.parentNode}o=void 0}o=Hv(o)}}function Vv(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Vv(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function kv(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=ne(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=ne(n.document)}return r}function _p(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var GT=La&&"documentMode"in document&&11>=document.documentMode,nl=null,vp=null,Fc=null,xp=!1;function Xv(n,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;xp||nl==null||nl!==ne(c)||(c=nl,"selectionStart"in c&&_p(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Fc&&zc(Fc,c)||(Fc=c,c=hh(vp,"onSelect"),0<c.length&&(r=new Mf("onSelect","select",null,r,o),n.push({event:r,listeners:c}),r.target=nl)))}function ro(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var il={animationend:ro("Animation","AnimationEnd"),animationiteration:ro("Animation","AnimationIteration"),animationstart:ro("Animation","AnimationStart"),transitionrun:ro("Transition","TransitionRun"),transitionstart:ro("Transition","TransitionStart"),transitioncancel:ro("Transition","TransitionCancel"),transitionend:ro("Transition","TransitionEnd")},yp={},Wv={};La&&(Wv=document.createElement("div").style,"AnimationEvent"in window||(delete il.animationend.animation,delete il.animationiteration.animation,delete il.animationstart.animation),"TransitionEvent"in window||delete il.transitionend.transition);function ao(n){if(yp[n])return yp[n];if(!il[n])return n;var r=il[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Wv)return yp[n]=r[o];return n}var Yv=ao("animationend"),qv=ao("animationiteration"),jv=ao("animationstart"),VT=ao("transitionrun"),kT=ao("transitionstart"),XT=ao("transitioncancel"),Zv=ao("transitionend"),Kv=new Map,Sp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sp.push("scrollEnd");function Jr(n,r){Kv.set(n,r),at(r,[n])}var Tf=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Nr=[],rl=0,Mp=0;function Af(){for(var n=rl,r=Mp=rl=0;r<n;){var o=Nr[r];Nr[r++]=null;var c=Nr[r];Nr[r++]=null;var p=Nr[r];Nr[r++]=null;var g=Nr[r];if(Nr[r++]=null,c!==null&&p!==null){var E=c.pending;E===null?p.next=p:(p.next=E.next,E.next=p),c.pending=p}g!==0&&Qv(o,p,g)}}function wf(n,r,o,c){Nr[rl++]=n,Nr[rl++]=r,Nr[rl++]=o,Nr[rl++]=c,Mp|=c,n.lanes|=c,n=n.alternate,n!==null&&(n.lanes|=c)}function bp(n,r,o,c){return wf(n,r,o,c),Cf(n)}function so(n,r){return wf(n,null,null,r),Cf(n)}function Qv(n,r,o){n.lanes|=o;var c=n.alternate;c!==null&&(c.lanes|=o);for(var p=!1,g=n.return;g!==null;)g.childLanes|=o,c=g.alternate,c!==null&&(c.childLanes|=o),g.tag===22&&(n=g.stateNode,n===null||n._visibility&1||(p=!0)),n=g,g=g.return;return n.tag===3?(g=n.stateNode,p&&r!==null&&(p=31-Pt(o),n=g.hiddenUpdates,c=n[p],c===null?n[p]=[r]:c.push(r),r.lane=o|536870912),g):null}function Cf(n){if(50<au)throw au=0,Um=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var al={};function WT(n,r,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hr(n,r,o,c){return new WT(n,r,o,c)}function Ep(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ua(n,r){var o=n.alternate;return o===null?(o=hr(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function Jv(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Rf(n,r,o,c,p,g){var E=0;if(c=n,typeof n=="function")Ep(n)&&(E=1);else if(typeof n=="string")E=KA(n,o,Mt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else t:switch(n){case D:return n=hr(31,o,r,p),n.elementType=D,n.lanes=g,n;case b:return oo(o.children,p,g,r);case y:E=8,p|=24;break;case M:return n=hr(12,o,r,p|2),n.elementType=M,n.lanes=g,n;case U:return n=hr(13,o,r,p),n.elementType=U,n.lanes=g,n;case O:return n=hr(19,o,r,p),n.elementType=O,n.lanes=g,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case L:E=10;break t;case A:E=9;break t;case w:E=11;break t;case R:E=14;break t;case T:E=16,c=null;break t}E=29,o=Error(i(130,n===null?"null":typeof n,"")),c=null}return r=hr(E,o,r,p),r.elementType=n,r.type=c,r.lanes=g,r}function oo(n,r,o,c){return n=hr(7,n,c,r),n.lanes=o,n}function Tp(n,r,o){return n=hr(6,n,null,r),n.lanes=o,n}function $v(n){var r=hr(18,null,null,0);return r.stateNode=n,r}function Ap(n,r,o){return r=hr(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var tx=new WeakMap;function Or(n,r){if(typeof n=="object"&&n!==null){var o=tx.get(n);return o!==void 0?o:(r={value:n,source:r,stack:q(r)},tx.set(n,r),r)}return{value:n,source:r,stack:q(r)}}var sl=[],ol=0,Df=null,Bc=0,Pr=[],zr=0,us=null,aa=1,sa="";function Na(n,r){sl[ol++]=Bc,sl[ol++]=Df,Df=n,Bc=r}function ex(n,r,o){Pr[zr++]=aa,Pr[zr++]=sa,Pr[zr++]=us,us=n;var c=aa;n=sa;var p=32-Pt(c)-1;c&=~(1<<p),o+=1;var g=32-Pt(r)+p;if(30<g){var E=p-p%5;g=(c&(1<<E)-1).toString(32),c>>=E,p-=E,aa=1<<32-Pt(r)+p|o<<p|c,sa=g+n}else aa=1<<g|o<<p|c,sa=n}function wp(n){n.return!==null&&(Na(n,1),ex(n,1,0))}function Cp(n){for(;n===Df;)Df=sl[--ol],sl[ol]=null,Bc=sl[--ol],sl[ol]=null;for(;n===us;)us=Pr[--zr],Pr[zr]=null,sa=Pr[--zr],Pr[zr]=null,aa=Pr[--zr],Pr[zr]=null}function nx(n,r){Pr[zr++]=aa,Pr[zr++]=sa,Pr[zr++]=us,aa=r.id,sa=r.overflow,us=n}var hi=null,Mn=null,We=!1,fs=null,Fr=!1,Rp=Error(i(519));function hs(n){var r=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ic(Or(r,n)),Rp}function ix(n){var r=n.stateNode,o=n.type,c=n.memoizedProps;switch(r[we]=n,r[Me]=c,o){case"dialog":Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":case"embed":Ge("load",r);break;case"video":case"audio":for(o=0;o<ou.length;o++)Ge(ou[o],r);break;case"source":Ge("error",r);break;case"img":case"image":case"link":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"input":Ge("invalid",r),cr(r,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Ge("invalid",r);break;case"textarea":Ge("invalid",r),Gn(r,c.value,c.defaultValue,c.children)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||c.suppressHydrationWarning===!0||yS(r.textContent,o)?(c.popover!=null&&(Ge("beforetoggle",r),Ge("toggle",r)),c.onScroll!=null&&Ge("scroll",r),c.onScrollEnd!=null&&Ge("scrollend",r),c.onClick!=null&&(r.onclick=Da),r=!0):r=!1,r||hs(n,!0)}function rx(n){for(hi=n.return;hi;)switch(hi.tag){case 5:case 31:case 13:Fr=!1;return;case 27:case 3:Fr=!0;return;default:hi=hi.return}}function ll(n){if(n!==hi)return!1;if(!We)return rx(n),We=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||qm(n.type,n.memoizedProps)),o=!o),o&&Mn&&hs(n),rx(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));Mn=RS(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));Mn=RS(n)}else r===27?(r=Mn,As(n.type)?(n=Jm,Jm=null,Mn=n):Mn=r):Mn=hi?Ir(n.stateNode.nextSibling):null;return!0}function lo(){Mn=hi=null,We=!1}function Dp(){var n=fs;return n!==null&&(ji===null?ji=n:ji.push.apply(ji,n),fs=null),n}function Ic(n){fs===null?fs=[n]:fs.push(n)}var Lp=F(null),co=null,Oa=null;function ds(n,r,o){_t(Lp,r._currentValue),r._currentValue=o}function Pa(n){n._currentValue=Lp.current,Q(Lp)}function Up(n,r,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===o)break;n=n.return}}function Np(n,r,o,c){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var g=p.dependencies;if(g!==null){var E=p.child;g=g.firstContext;t:for(;g!==null;){var P=g;g=p;for(var W=0;W<r.length;W++)if(P.context===r[W]){g.lanes|=o,P=g.alternate,P!==null&&(P.lanes|=o),Up(g.return,o,n),c||(E=null);break t}g=P.next}}else if(p.tag===18){if(E=p.return,E===null)throw Error(i(341));E.lanes|=o,g=E.alternate,g!==null&&(g.lanes|=o),Up(E,o,n),E=null}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===n){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}}function cl(n,r,o,c){n=null;for(var p=r,g=!1;p!==null;){if(!g){if((p.flags&524288)!==0)g=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var E=p.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var P=p.type;fr(p.pendingProps.value,E.value)||(n!==null?n.push(P):n=[P])}}else if(p===gt.current){if(E=p.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(hu):n=[hu])}p=p.return}n!==null&&Np(r,n,o,c),r.flags|=262144}function Lf(n){for(n=n.firstContext;n!==null;){if(!fr(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function uo(n){co=n,Oa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function di(n){return ax(co,n)}function Uf(n,r){return co===null&&uo(n),ax(n,r)}function ax(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Oa===null){if(n===null)throw Error(i(308));Oa=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Oa=Oa.next=r;return o}var YT=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,c){n.push(c)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},qT=s.unstable_scheduleCallback,jT=s.unstable_NormalPriority,kn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Op(){return{controller:new YT,data:new Map,refCount:0}}function Hc(n){n.refCount--,n.refCount===0&&qT(jT,function(){n.controller.abort()})}var Gc=null,Pp=0,ul=0,fl=null;function ZT(n,r){if(Gc===null){var o=Gc=[];Pp=0,ul=Bm(),fl={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Pp++,r.then(sx,sx),r}function sx(){if(--Pp===0&&Gc!==null){fl!==null&&(fl.status="fulfilled");var n=Gc;Gc=null,ul=0,fl=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function KT(n,r){var o=[],c={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return n.then(function(){c.status="fulfilled",c.value=r;for(var p=0;p<o.length;p++)(0,o[p])(r)},function(p){for(c.status="rejected",c.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),c}var ox=z.S;z.S=function(n,r){Xy=C(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&ZT(n,r),ox!==null&&ox(n,r)};var fo=F(null);function zp(){var n=fo.current;return n!==null?n:mn.pooledCache}function Nf(n,r){r===null?_t(fo,fo.current):_t(fo,r.pool)}function lx(){var n=zp();return n===null?null:{parent:kn._currentValue,pool:n}}var hl=Error(i(460)),Fp=Error(i(474)),Of=Error(i(542)),Pf={then:function(){}};function cx(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ux(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(Da,Da),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,hx(n),n;default:if(typeof r.status=="string")r.then(Da,Da);else{if(n=mn,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(c){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=c}},function(c){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=c}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,hx(n),n}throw po=r,hl}}function ho(n){try{var r=n._init;return r(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(po=o,hl):o}}var po=null;function fx(){if(po===null)throw Error(i(459));var n=po;return po=null,n}function hx(n){if(n===hl||n===Of)throw Error(i(483))}var dl=null,Vc=0;function zf(n){var r=Vc;return Vc+=1,dl===null&&(dl=[]),ux(dl,n,r)}function kc(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Ff(n,r){throw r.$$typeof===_?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function dx(n){function r(et,J){if(n){var st=et.deletions;st===null?(et.deletions=[J],et.flags|=16):st.push(J)}}function o(et,J){if(!n)return null;for(;J!==null;)r(et,J),J=J.sibling;return null}function c(et){for(var J=new Map;et!==null;)et.key!==null?J.set(et.key,et):J.set(et.index,et),et=et.sibling;return J}function p(et,J){return et=Ua(et,J),et.index=0,et.sibling=null,et}function g(et,J,st){return et.index=st,n?(st=et.alternate,st!==null?(st=st.index,st<J?(et.flags|=67108866,J):st):(et.flags|=67108866,J)):(et.flags|=1048576,J)}function E(et){return n&&et.alternate===null&&(et.flags|=67108866),et}function P(et,J,st,St){return J===null||J.tag!==6?(J=Tp(st,et.mode,St),J.return=et,J):(J=p(J,st),J.return=et,J)}function W(et,J,st,St){var ce=st.type;return ce===b?yt(et,J,st.props.children,St,st.key):J!==null&&(J.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===T&&ho(ce)===J.type)?(J=p(J,st.props),kc(J,st),J.return=et,J):(J=Rf(st.type,st.key,st.props,null,et.mode,St),kc(J,st),J.return=et,J)}function lt(et,J,st,St){return J===null||J.tag!==4||J.stateNode.containerInfo!==st.containerInfo||J.stateNode.implementation!==st.implementation?(J=Ap(st,et.mode,St),J.return=et,J):(J=p(J,st.children||[]),J.return=et,J)}function yt(et,J,st,St,ce){return J===null||J.tag!==7?(J=oo(st,et.mode,St,ce),J.return=et,J):(J=p(J,st),J.return=et,J)}function bt(et,J,st){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return J=Tp(""+J,et.mode,st),J.return=et,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case x:return st=Rf(J.type,J.key,J.props,null,et.mode,st),kc(st,J),st.return=et,st;case S:return J=Ap(J,et.mode,st),J.return=et,J;case T:return J=ho(J),bt(et,J,st)}if(Y(J)||V(J))return J=oo(J,et.mode,st,null),J.return=et,J;if(typeof J.then=="function")return bt(et,zf(J),st);if(J.$$typeof===L)return bt(et,Uf(et,J),st);Ff(et,J)}return null}function ft(et,J,st,St){var ce=J!==null?J.key:null;if(typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint")return ce!==null?null:P(et,J,""+st,St);if(typeof st=="object"&&st!==null){switch(st.$$typeof){case x:return st.key===ce?W(et,J,st,St):null;case S:return st.key===ce?lt(et,J,st,St):null;case T:return st=ho(st),ft(et,J,st,St)}if(Y(st)||V(st))return ce!==null?null:yt(et,J,st,St,null);if(typeof st.then=="function")return ft(et,J,zf(st),St);if(st.$$typeof===L)return ft(et,J,Uf(et,st),St);Ff(et,st)}return null}function pt(et,J,st,St,ce){if(typeof St=="string"&&St!==""||typeof St=="number"||typeof St=="bigint")return et=et.get(st)||null,P(J,et,""+St,ce);if(typeof St=="object"&&St!==null){switch(St.$$typeof){case x:return et=et.get(St.key===null?st:St.key)||null,W(J,et,St,ce);case S:return et=et.get(St.key===null?st:St.key)||null,lt(J,et,St,ce);case T:return St=ho(St),pt(et,J,st,St,ce)}if(Y(St)||V(St))return et=et.get(st)||null,yt(J,et,St,ce,null);if(typeof St.then=="function")return pt(et,J,st,zf(St),ce);if(St.$$typeof===L)return pt(et,J,st,Uf(J,St),ce);Ff(J,St)}return null}function $t(et,J,st,St){for(var ce=null,Je=null,re=J,Ue=J=0,ke=null;re!==null&&Ue<st.length;Ue++){re.index>Ue?(ke=re,re=null):ke=re.sibling;var $e=ft(et,re,st[Ue],St);if($e===null){re===null&&(re=ke);break}n&&re&&$e.alternate===null&&r(et,re),J=g($e,J,Ue),Je===null?ce=$e:Je.sibling=$e,Je=$e,re=ke}if(Ue===st.length)return o(et,re),We&&Na(et,Ue),ce;if(re===null){for(;Ue<st.length;Ue++)re=bt(et,st[Ue],St),re!==null&&(J=g(re,J,Ue),Je===null?ce=re:Je.sibling=re,Je=re);return We&&Na(et,Ue),ce}for(re=c(re);Ue<st.length;Ue++)ke=pt(re,et,Ue,st[Ue],St),ke!==null&&(n&&ke.alternate!==null&&re.delete(ke.key===null?Ue:ke.key),J=g(ke,J,Ue),Je===null?ce=ke:Je.sibling=ke,Je=ke);return n&&re.forEach(function(Ls){return r(et,Ls)}),We&&Na(et,Ue),ce}function fe(et,J,st,St){if(st==null)throw Error(i(151));for(var ce=null,Je=null,re=J,Ue=J=0,ke=null,$e=st.next();re!==null&&!$e.done;Ue++,$e=st.next()){re.index>Ue?(ke=re,re=null):ke=re.sibling;var Ls=ft(et,re,$e.value,St);if(Ls===null){re===null&&(re=ke);break}n&&re&&Ls.alternate===null&&r(et,re),J=g(Ls,J,Ue),Je===null?ce=Ls:Je.sibling=Ls,Je=Ls,re=ke}if($e.done)return o(et,re),We&&Na(et,Ue),ce;if(re===null){for(;!$e.done;Ue++,$e=st.next())$e=bt(et,$e.value,St),$e!==null&&(J=g($e,J,Ue),Je===null?ce=$e:Je.sibling=$e,Je=$e);return We&&Na(et,Ue),ce}for(re=c(re);!$e.done;Ue++,$e=st.next())$e=pt(re,et,Ue,$e.value,St),$e!==null&&(n&&$e.alternate!==null&&re.delete($e.key===null?Ue:$e.key),J=g($e,J,Ue),Je===null?ce=$e:Je.sibling=$e,Je=$e);return n&&re.forEach(function(ow){return r(et,ow)}),We&&Na(et,Ue),ce}function pn(et,J,st,St){if(typeof st=="object"&&st!==null&&st.type===b&&st.key===null&&(st=st.props.children),typeof st=="object"&&st!==null){switch(st.$$typeof){case x:t:{for(var ce=st.key;J!==null;){if(J.key===ce){if(ce=st.type,ce===b){if(J.tag===7){o(et,J.sibling),St=p(J,st.props.children),St.return=et,et=St;break t}}else if(J.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===T&&ho(ce)===J.type){o(et,J.sibling),St=p(J,st.props),kc(St,st),St.return=et,et=St;break t}o(et,J);break}else r(et,J);J=J.sibling}st.type===b?(St=oo(st.props.children,et.mode,St,st.key),St.return=et,et=St):(St=Rf(st.type,st.key,st.props,null,et.mode,St),kc(St,st),St.return=et,et=St)}return E(et);case S:t:{for(ce=st.key;J!==null;){if(J.key===ce)if(J.tag===4&&J.stateNode.containerInfo===st.containerInfo&&J.stateNode.implementation===st.implementation){o(et,J.sibling),St=p(J,st.children||[]),St.return=et,et=St;break t}else{o(et,J);break}else r(et,J);J=J.sibling}St=Ap(st,et.mode,St),St.return=et,et=St}return E(et);case T:return st=ho(st),pn(et,J,st,St)}if(Y(st))return $t(et,J,st,St);if(V(st)){if(ce=V(st),typeof ce!="function")throw Error(i(150));return st=ce.call(st),fe(et,J,st,St)}if(typeof st.then=="function")return pn(et,J,zf(st),St);if(st.$$typeof===L)return pn(et,J,Uf(et,st),St);Ff(et,st)}return typeof st=="string"&&st!==""||typeof st=="number"||typeof st=="bigint"?(st=""+st,J!==null&&J.tag===6?(o(et,J.sibling),St=p(J,st),St.return=et,et=St):(o(et,J),St=Tp(st,et.mode,St),St.return=et,et=St),E(et)):o(et,J)}return function(et,J,st,St){try{Vc=0;var ce=pn(et,J,st,St);return dl=null,ce}catch(re){if(re===hl||re===Of)throw re;var Je=hr(29,re,null,et.mode);return Je.lanes=St,Je.return=et,Je}}}var mo=dx(!0),px=dx(!1),ps=!1;function Bp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ip(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function ms(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function gs(n,r,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(en&2)!==0){var p=c.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),c.pending=r,r=Cf(n),Qv(n,null,o),r}return wf(n,c,r,o),Cf(n)}function Xc(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,he(n,o)}}function Hp(n,r){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var p=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?p=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?p=g=r:g=g.next=r}else p=g=r;o={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var Gp=!1;function Wc(){if(Gp){var n=fl;if(n!==null)throw n}}function Yc(n,r,o,c){Gp=!1;var p=n.updateQueue;ps=!1;var g=p.firstBaseUpdate,E=p.lastBaseUpdate,P=p.shared.pending;if(P!==null){p.shared.pending=null;var W=P,lt=W.next;W.next=null,E===null?g=lt:E.next=lt,E=W;var yt=n.alternate;yt!==null&&(yt=yt.updateQueue,P=yt.lastBaseUpdate,P!==E&&(P===null?yt.firstBaseUpdate=lt:P.next=lt,yt.lastBaseUpdate=W))}if(g!==null){var bt=p.baseState;E=0,yt=lt=W=null,P=g;do{var ft=P.lane&-536870913,pt=ft!==P.lane;if(pt?(Ve&ft)===ft:(c&ft)===ft){ft!==0&&ft===ul&&(Gp=!0),yt!==null&&(yt=yt.next={lane:0,tag:P.tag,payload:P.payload,callback:null,next:null});t:{var $t=n,fe=P;ft=r;var pn=o;switch(fe.tag){case 1:if($t=fe.payload,typeof $t=="function"){bt=$t.call(pn,bt,ft);break t}bt=$t;break t;case 3:$t.flags=$t.flags&-65537|128;case 0:if($t=fe.payload,ft=typeof $t=="function"?$t.call(pn,bt,ft):$t,ft==null)break t;bt=v({},bt,ft);break t;case 2:ps=!0}}ft=P.callback,ft!==null&&(n.flags|=64,pt&&(n.flags|=8192),pt=p.callbacks,pt===null?p.callbacks=[ft]:pt.push(ft))}else pt={lane:ft,tag:P.tag,payload:P.payload,callback:P.callback,next:null},yt===null?(lt=yt=pt,W=bt):yt=yt.next=pt,E|=ft;if(P=P.next,P===null){if(P=p.shared.pending,P===null)break;pt=P,P=pt.next,pt.next=null,p.lastBaseUpdate=pt,p.shared.pending=null}}while(!0);yt===null&&(W=bt),p.baseState=W,p.firstBaseUpdate=lt,p.lastBaseUpdate=yt,g===null&&(p.shared.lanes=0),Ss|=E,n.lanes=E,n.memoizedState=bt}}function mx(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function gx(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)mx(o[n],r)}var pl=F(null),Bf=F(0);function _x(n,r){n=Xa,_t(Bf,n),_t(pl,r),Xa=n|r.baseLanes}function Vp(){_t(Bf,Xa),_t(pl,pl.current)}function kp(){Xa=Bf.current,Q(pl),Q(Bf)}var dr=F(null),Br=null;function _s(n){var r=n.alternate;_t(zn,zn.current&1),_t(dr,n),Br===null&&(r===null||pl.current!==null||r.memoizedState!==null)&&(Br=n)}function Xp(n){_t(zn,zn.current),_t(dr,n),Br===null&&(Br=n)}function vx(n){n.tag===22?(_t(zn,zn.current),_t(dr,n),Br===null&&(Br=n)):vs()}function vs(){_t(zn,zn.current),_t(dr,dr.current)}function pr(n){Q(dr),Br===n&&(Br=null),Q(zn)}var zn=F(0);function If(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Km(o)||Qm(o)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var za=0,Re=null,hn=null,Xn=null,Hf=!1,ml=!1,go=!1,Gf=0,qc=0,gl=null,QT=0;function Nn(){throw Error(i(321))}function Wp(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!fr(n[o],r[o]))return!1;return!0}function Yp(n,r,o,c,p,g){return za=g,Re=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,z.H=n===null||n.memoizedState===null?ey:om,go=!1,g=o(c,p),go=!1,ml&&(g=yx(r,o,c,p)),xx(n),g}function xx(n){z.H=Kc;var r=hn!==null&&hn.next!==null;if(za=0,Xn=hn=Re=null,Hf=!1,qc=0,gl=null,r)throw Error(i(300));n===null||Wn||(n=n.dependencies,n!==null&&Lf(n)&&(Wn=!0))}function yx(n,r,o,c){Re=n;var p=0;do{if(ml&&(gl=null),qc=0,ml=!1,25<=p)throw Error(i(301));if(p+=1,Xn=hn=null,n.updateQueue!=null){var g=n.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}z.H=ny,g=r(o,c)}while(ml);return g}function JT(){var n=z.H,r=n.useState()[0];return r=typeof r.then=="function"?jc(r):r,n=n.useState()[0],(hn!==null?hn.memoizedState:null)!==n&&(Re.flags|=1024),r}function qp(){var n=Gf!==0;return Gf=0,n}function jp(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function Zp(n){if(Hf){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Hf=!1}za=0,Xn=hn=Re=null,ml=!1,qc=Gf=0,gl=null}function Pi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xn===null?Re.memoizedState=Xn=n:Xn=Xn.next=n,Xn}function Fn(){if(hn===null){var n=Re.alternate;n=n!==null?n.memoizedState:null}else n=hn.next;var r=Xn===null?Re.memoizedState:Xn.next;if(r!==null)Xn=r,hn=n;else{if(n===null)throw Re.alternate===null?Error(i(467)):Error(i(310));hn=n,n={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},Xn===null?Re.memoizedState=Xn=n:Xn=Xn.next=n}return Xn}function Vf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jc(n){var r=qc;return qc+=1,gl===null&&(gl=[]),n=ux(gl,n,r),r=Re,(Xn===null?r.memoizedState:Xn.next)===null&&(r=r.alternate,z.H=r===null||r.memoizedState===null?ey:om),n}function kf(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return jc(n);if(n.$$typeof===L)return di(n)}throw Error(i(438,String(n)))}function Kp(n){var r=null,o=Re.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var c=Re.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(r={data:c.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Vf(),Re.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),c=0;c<n;c++)o[c]=k;return r.index++,o}function Fa(n,r){return typeof r=="function"?r(n):r}function Xf(n){var r=Fn();return Qp(r,hn,n)}function Qp(n,r,o){var c=n.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var p=n.baseQueue,g=c.pending;if(g!==null){if(p!==null){var E=p.next;p.next=g.next,g.next=E}r.baseQueue=p=g,c.pending=null}if(g=n.baseState,p===null)n.memoizedState=g;else{r=p.next;var P=E=null,W=null,lt=r,yt=!1;do{var bt=lt.lane&-536870913;if(bt!==lt.lane?(Ve&bt)===bt:(za&bt)===bt){var ft=lt.revertLane;if(ft===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null}),bt===ul&&(yt=!0);else if((za&ft)===ft){lt=lt.next,ft===ul&&(yt=!0);continue}else bt={lane:0,revertLane:lt.revertLane,gesture:null,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},W===null?(P=W=bt,E=g):W=W.next=bt,Re.lanes|=ft,Ss|=ft;bt=lt.action,go&&o(g,bt),g=lt.hasEagerState?lt.eagerState:o(g,bt)}else ft={lane:bt,revertLane:lt.revertLane,gesture:lt.gesture,action:lt.action,hasEagerState:lt.hasEagerState,eagerState:lt.eagerState,next:null},W===null?(P=W=ft,E=g):W=W.next=ft,Re.lanes|=bt,Ss|=bt;lt=lt.next}while(lt!==null&&lt!==r);if(W===null?E=g:W.next=P,!fr(g,n.memoizedState)&&(Wn=!0,yt&&(o=fl,o!==null)))throw o;n.memoizedState=g,n.baseState=E,n.baseQueue=W,c.lastRenderedState=g}return p===null&&(c.lanes=0),[n.memoizedState,c.dispatch]}function Jp(n){var r=Fn(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var c=o.dispatch,p=o.pending,g=r.memoizedState;if(p!==null){o.pending=null;var E=p=p.next;do g=n(g,E.action),E=E.next;while(E!==p);fr(g,r.memoizedState)||(Wn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,c]}function Sx(n,r,o){var c=Re,p=Fn(),g=We;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=r();var E=!fr((hn||p).memoizedState,o);if(E&&(p.memoizedState=o,Wn=!0),p=p.queue,em(Ex.bind(null,c,p,n),[n]),p.getSnapshot!==r||E||Xn!==null&&Xn.memoizedState.tag&1){if(c.flags|=2048,_l(9,{destroy:void 0},bx.bind(null,c,p,o,r),null),mn===null)throw Error(i(349));g||(za&127)!==0||Mx(c,r,o)}return o}function Mx(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Re.updateQueue,r===null?(r=Vf(),Re.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function bx(n,r,o,c){r.value=o,r.getSnapshot=c,Tx(r)&&Ax(n)}function Ex(n,r,o){return o(function(){Tx(r)&&Ax(n)})}function Tx(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!fr(n,o)}catch{return!0}}function Ax(n){var r=so(n,2);r!==null&&Zi(r,n,2)}function $p(n){var r=Pi();if(typeof n=="function"){var o=n;if(n=o(),go){Ht(!0);try{o()}finally{Ht(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:n},r}function wx(n,r,o,c){return n.baseState=o,Qp(n,hn,typeof c=="function"?c:Fa)}function $T(n,r,o,c,p){if(qf(n))throw Error(i(485));if(n=r.action,n!==null){var g={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){g.listeners.push(E)}};z.T!==null?o(!0):g.isTransition=!1,c(g),o=r.pending,o===null?(g.next=r.pending=g,Cx(r,g)):(g.next=o.next,r.pending=o.next=g)}}function Cx(n,r){var o=r.action,c=r.payload,p=n.state;if(r.isTransition){var g=z.T,E={};z.T=E;try{var P=o(p,c),W=z.S;W!==null&&W(E,P),Rx(n,r,P)}catch(lt){tm(n,r,lt)}finally{g!==null&&E.types!==null&&(g.types=E.types),z.T=g}}else try{g=o(p,c),Rx(n,r,g)}catch(lt){tm(n,r,lt)}}function Rx(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){Dx(n,r,c)},function(c){return tm(n,r,c)}):Dx(n,r,o)}function Dx(n,r,o){r.status="fulfilled",r.value=o,Lx(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Cx(n,o)))}function tm(n,r,o){var c=n.pending;if(n.pending=null,c!==null){c=c.next;do r.status="rejected",r.reason=o,Lx(r),r=r.next;while(r!==c)}n.action=null}function Lx(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Ux(n,r){return r}function Nx(n,r){if(We){var o=mn.formState;if(o!==null){t:{var c=Re;if(We){if(Mn){e:{for(var p=Mn,g=Fr;p.nodeType!==8;){if(!g){p=null;break e}if(p=Ir(p.nextSibling),p===null){p=null;break e}}g=p.data,p=g==="F!"||g==="F"?p:null}if(p){Mn=Ir(p.nextSibling),c=p.data==="F!";break t}}hs(c)}c=!1}c&&(r=o[0])}}return o=Pi(),o.memoizedState=o.baseState=r,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ux,lastRenderedState:r},o.queue=c,o=Jx.bind(null,Re,c),c.dispatch=o,c=$p(!1),g=sm.bind(null,Re,!1,c.queue),c=Pi(),p={state:r,dispatch:null,action:n,pending:null},c.queue=p,o=$T.bind(null,Re,p,g,o),p.dispatch=o,c.memoizedState=n,[r,o,!1]}function Ox(n){var r=Fn();return Px(r,hn,n)}function Px(n,r,o){if(r=Qp(n,r,Ux)[0],n=Xf(Fa)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var c=jc(r)}catch(E){throw E===hl?Of:E}else c=r;r=Fn();var p=r.queue,g=p.dispatch;return o!==r.memoizedState&&(Re.flags|=2048,_l(9,{destroy:void 0},tA.bind(null,p,o),null)),[c,g,n]}function tA(n,r){n.action=r}function zx(n){var r=Fn(),o=hn;if(o!==null)return Px(r,o,n);Fn(),r=r.memoizedState,o=Fn();var c=o.queue.dispatch;return o.memoizedState=n,[r,c,!1]}function _l(n,r,o,c){return n={tag:n,create:o,deps:c,inst:r,next:null},r=Re.updateQueue,r===null&&(r=Vf(),Re.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,r.lastEffect=n),n}function Fx(){return Fn().memoizedState}function Wf(n,r,o,c){var p=Pi();Re.flags|=n,p.memoizedState=_l(1|r,{destroy:void 0},o,c===void 0?null:c)}function Yf(n,r,o,c){var p=Fn();c=c===void 0?null:c;var g=p.memoizedState.inst;hn!==null&&c!==null&&Wp(c,hn.memoizedState.deps)?p.memoizedState=_l(r,g,o,c):(Re.flags|=n,p.memoizedState=_l(1|r,g,o,c))}function Bx(n,r){Wf(8390656,8,n,r)}function em(n,r){Yf(2048,8,n,r)}function eA(n){Re.flags|=4;var r=Re.updateQueue;if(r===null)r=Vf(),Re.updateQueue=r,r.events=[n];else{var o=r.events;o===null?r.events=[n]:o.push(n)}}function Ix(n){var r=Fn().memoizedState;return eA({ref:r,nextImpl:n}),function(){if((en&2)!==0)throw Error(i(440));return r.impl.apply(void 0,arguments)}}function Hx(n,r){return Yf(4,2,n,r)}function Gx(n,r){return Yf(4,4,n,r)}function Vx(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function kx(n,r,o){o=o!=null?o.concat([n]):null,Yf(4,4,Vx.bind(null,r,n),o)}function nm(){}function Xx(n,r){var o=Fn();r=r===void 0?null:r;var c=o.memoizedState;return r!==null&&Wp(r,c[1])?c[0]:(o.memoizedState=[n,r],n)}function Wx(n,r){var o=Fn();r=r===void 0?null:r;var c=o.memoizedState;if(r!==null&&Wp(r,c[1]))return c[0];if(c=n(),go){Ht(!0);try{n()}finally{Ht(!1)}}return o.memoizedState=[c,r],c}function im(n,r,o){return o===void 0||(za&1073741824)!==0&&(Ve&261930)===0?n.memoizedState=r:(n.memoizedState=o,n=Yy(),Re.lanes|=n,Ss|=n,o)}function Yx(n,r,o,c){return fr(o,r)?o:pl.current!==null?(n=im(n,o,c),fr(n,r)||(Wn=!0),n):(za&42)===0||(za&1073741824)!==0&&(Ve&261930)===0?(Wn=!0,n.memoizedState=o):(n=Yy(),Re.lanes|=n,Ss|=n,r)}function qx(n,r,o,c,p){var g=B.p;B.p=g!==0&&8>g?g:8;var E=z.T,P={};z.T=P,sm(n,!1,r,o);try{var W=p(),lt=z.S;if(lt!==null&&lt(P,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var yt=KT(W,c);Zc(n,r,yt,_r(n))}else Zc(n,r,c,_r(n))}catch(bt){Zc(n,r,{then:function(){},status:"rejected",reason:bt},_r())}finally{B.p=g,E!==null&&P.types!==null&&(E.types=P.types),z.T=E}}function nA(){}function rm(n,r,o,c){if(n.tag!==5)throw Error(i(476));var p=jx(n).queue;qx(n,p,r,tt,o===null?nA:function(){return Zx(n),o(c)})}function jx(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:tt},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Zx(n){var r=jx(n);r.next===null&&(r=n.alternate.memoizedState),Zc(n,r.next.queue,{},_r())}function am(){return di(hu)}function Kx(){return Fn().memoizedState}function Qx(){return Fn().memoizedState}function iA(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=_r();n=ms(o);var c=gs(r,n,o);c!==null&&(Zi(c,r,o),Xc(c,r,o)),r={cache:Op()},n.payload=r;return}r=r.return}}function rA(n,r,o){var c=_r();o={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},qf(n)?$x(r,o):(o=bp(n,r,o,c),o!==null&&(Zi(o,n,c),ty(o,r,c)))}function Jx(n,r,o){var c=_r();Zc(n,r,o,c)}function Zc(n,r,o,c){var p={lane:c,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(qf(n))$x(r,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var E=r.lastRenderedState,P=g(E,o);if(p.hasEagerState=!0,p.eagerState=P,fr(P,E))return wf(n,r,p,0),mn===null&&Af(),!1}catch{}if(o=bp(n,r,p,c),o!==null)return Zi(o,n,c),ty(o,r,c),!0}return!1}function sm(n,r,o,c){if(c={lane:2,revertLane:Bm(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},qf(n)){if(r)throw Error(i(479))}else r=bp(n,o,c,2),r!==null&&Zi(r,n,2)}function qf(n){var r=n.alternate;return n===Re||r!==null&&r===Re}function $x(n,r){ml=Hf=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function ty(n,r,o){if((o&4194048)!==0){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,he(n,o)}}var Kc={readContext:di,use:kf,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useLayoutEffect:Nn,useInsertionEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useSyncExternalStore:Nn,useId:Nn,useHostTransitionStatus:Nn,useFormState:Nn,useActionState:Nn,useOptimistic:Nn,useMemoCache:Nn,useCacheRefresh:Nn};Kc.useEffectEvent=Nn;var ey={readContext:di,use:kf,useCallback:function(n,r){return Pi().memoizedState=[n,r===void 0?null:r],n},useContext:di,useEffect:Bx,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,Wf(4194308,4,Vx.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Wf(4194308,4,n,r)},useInsertionEffect:function(n,r){Wf(4,2,n,r)},useMemo:function(n,r){var o=Pi();r=r===void 0?null:r;var c=n();if(go){Ht(!0);try{n()}finally{Ht(!1)}}return o.memoizedState=[c,r],c},useReducer:function(n,r,o){var c=Pi();if(o!==void 0){var p=o(r);if(go){Ht(!0);try{o(r)}finally{Ht(!1)}}}else p=r;return c.memoizedState=c.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},c.queue=n,n=n.dispatch=rA.bind(null,Re,n),[c.memoizedState,n]},useRef:function(n){var r=Pi();return n={current:n},r.memoizedState=n},useState:function(n){n=$p(n);var r=n.queue,o=Jx.bind(null,Re,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:nm,useDeferredValue:function(n,r){var o=Pi();return im(o,n,r)},useTransition:function(){var n=$p(!1);return n=qx.bind(null,Re,n.queue,!0,!1),Pi().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var c=Re,p=Pi();if(We){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),mn===null)throw Error(i(349));(Ve&127)!==0||Mx(c,r,o)}p.memoizedState=o;var g={value:o,getSnapshot:r};return p.queue=g,Bx(Ex.bind(null,c,g,n),[n]),c.flags|=2048,_l(9,{destroy:void 0},bx.bind(null,c,g,o,r),null),o},useId:function(){var n=Pi(),r=mn.identifierPrefix;if(We){var o=sa,c=aa;o=(c&~(1<<32-Pt(c)-1)).toString(32)+o,r="_"+r+"R_"+o,o=Gf++,0<o&&(r+="H"+o.toString(32)),r+="_"}else o=QT++,r="_"+r+"r_"+o.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:am,useFormState:Nx,useActionState:Nx,useOptimistic:function(n){var r=Pi();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=sm.bind(null,Re,!0,o),o.dispatch=r,[n,r]},useMemoCache:Kp,useCacheRefresh:function(){return Pi().memoizedState=iA.bind(null,Re)},useEffectEvent:function(n){var r=Pi(),o={impl:n};return r.memoizedState=o,function(){if((en&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},om={readContext:di,use:kf,useCallback:Xx,useContext:di,useEffect:em,useImperativeHandle:kx,useInsertionEffect:Hx,useLayoutEffect:Gx,useMemo:Wx,useReducer:Xf,useRef:Fx,useState:function(){return Xf(Fa)},useDebugValue:nm,useDeferredValue:function(n,r){var o=Fn();return Yx(o,hn.memoizedState,n,r)},useTransition:function(){var n=Xf(Fa)[0],r=Fn().memoizedState;return[typeof n=="boolean"?n:jc(n),r]},useSyncExternalStore:Sx,useId:Kx,useHostTransitionStatus:am,useFormState:Ox,useActionState:Ox,useOptimistic:function(n,r){var o=Fn();return wx(o,hn,n,r)},useMemoCache:Kp,useCacheRefresh:Qx};om.useEffectEvent=Ix;var ny={readContext:di,use:kf,useCallback:Xx,useContext:di,useEffect:em,useImperativeHandle:kx,useInsertionEffect:Hx,useLayoutEffect:Gx,useMemo:Wx,useReducer:Jp,useRef:Fx,useState:function(){return Jp(Fa)},useDebugValue:nm,useDeferredValue:function(n,r){var o=Fn();return hn===null?im(o,n,r):Yx(o,hn.memoizedState,n,r)},useTransition:function(){var n=Jp(Fa)[0],r=Fn().memoizedState;return[typeof n=="boolean"?n:jc(n),r]},useSyncExternalStore:Sx,useId:Kx,useHostTransitionStatus:am,useFormState:zx,useActionState:zx,useOptimistic:function(n,r){var o=Fn();return hn!==null?wx(o,hn,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:Kp,useCacheRefresh:Qx};ny.useEffectEvent=Ix;function lm(n,r,o,c){r=n.memoizedState,o=o(c,r),o=o==null?r:v({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var cm={enqueueSetState:function(n,r,o){n=n._reactInternals;var c=_r(),p=ms(c);p.payload=r,o!=null&&(p.callback=o),r=gs(n,p,c),r!==null&&(Zi(r,n,c),Xc(r,n,c))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var c=_r(),p=ms(c);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=gs(n,p,c),r!==null&&(Zi(r,n,c),Xc(r,n,c))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=_r(),c=ms(o);c.tag=2,r!=null&&(c.callback=r),r=gs(n,c,o),r!==null&&(Zi(r,n,o),Xc(r,n,o))}};function iy(n,r,o,c,p,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,E):r.prototype&&r.prototype.isPureReactComponent?!zc(o,c)||!zc(p,g):!0}function ry(n,r,o,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==n&&cm.enqueueReplaceState(r,r.state,null)}function _o(n,r){var o=r;if("ref"in r){o={};for(var c in r)c!=="ref"&&(o[c]=r[c])}if(n=n.defaultProps){o===r&&(o=v({},o));for(var p in n)o[p]===void 0&&(o[p]=n[p])}return o}function ay(n){Tf(n)}function sy(n){console.error(n)}function oy(n){Tf(n)}function jf(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(c){setTimeout(function(){throw c})}}function ly(n,r,o){try{var c=n.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function um(n,r,o){return o=ms(o),o.tag=3,o.payload={element:null},o.callback=function(){jf(n,r)},o}function cy(n){return n=ms(n),n.tag=3,n}function uy(n,r,o,c){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var g=c.value;n.payload=function(){return p(g)},n.callback=function(){ly(r,o,c)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){ly(r,o,c),typeof p!="function"&&(Ms===null?Ms=new Set([this]):Ms.add(this));var P=c.stack;this.componentDidCatch(c.value,{componentStack:P!==null?P:""})})}function aA(n,r,o,c,p){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(r=o.alternate,r!==null&&cl(r,o,p,!0),o=dr.current,o!==null){switch(o.tag){case 31:case 13:return Br===null?sh():o.alternate===null&&On===0&&(On=3),o.flags&=-257,o.flags|=65536,o.lanes=p,c===Pf?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([c]):r.add(c),Pm(n,c,p)),!1;case 22:return o.flags|=65536,c===Pf?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([c]):o.add(c)),Pm(n,c,p)),!1}throw Error(i(435,o.tag))}return Pm(n,c,p),sh(),!1}if(We)return r=dr.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,c!==Rp&&(n=Error(i(422),{cause:c}),Ic(Or(n,o)))):(c!==Rp&&(r=Error(i(423),{cause:c}),Ic(Or(r,o))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,c=Or(c,o),p=um(n.stateNode,c,p),Hp(n,p),On!==4&&(On=2)),!1;var g=Error(i(520),{cause:c});if(g=Or(g,o),ru===null?ru=[g]:ru.push(g),On!==4&&(On=2),r===null)return!0;c=Or(c,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=p&-p,o.lanes|=n,n=um(o.stateNode,c,n),Hp(o,n),!1;case 1:if(r=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ms===null||!Ms.has(g))))return o.flags|=65536,p&=-p,o.lanes|=p,p=cy(p),uy(p,n,o,c),Hp(o,p),!1}o=o.return}while(o!==null);return!1}var fm=Error(i(461)),Wn=!1;function pi(n,r,o,c){r.child=n===null?px(r,null,o,c):mo(r,n.child,o,c)}function fy(n,r,o,c,p){o=o.render;var g=r.ref;if("ref"in c){var E={};for(var P in c)P!=="ref"&&(E[P]=c[P])}else E=c;return uo(r),c=Yp(n,r,o,E,g,p),P=qp(),n!==null&&!Wn?(jp(n,r,p),Ba(n,r,p)):(We&&P&&wp(r),r.flags|=1,pi(n,r,c,p),r.child)}function hy(n,r,o,c,p){if(n===null){var g=o.type;return typeof g=="function"&&!Ep(g)&&g.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=g,dy(n,r,g,c,p)):(n=Rf(o.type,null,c,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,!xm(n,p)){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:zc,o(E,c)&&n.ref===r.ref)return Ba(n,r,p)}return r.flags|=1,n=Ua(g,c),n.ref=r.ref,n.return=r,r.child=n}function dy(n,r,o,c,p){if(n!==null){var g=n.memoizedProps;if(zc(g,c)&&n.ref===r.ref)if(Wn=!1,r.pendingProps=c=g,xm(n,p))(n.flags&131072)!==0&&(Wn=!0);else return r.lanes=n.lanes,Ba(n,r,p)}return hm(n,r,o,c,p)}function py(n,r,o,c){var p=c.children,g=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((r.flags&128)!==0){if(g=g!==null?g.baseLanes|o:o,n!==null){for(c=r.child=n.child,p=0;c!==null;)p=p|c.lanes|c.childLanes,c=c.sibling;c=p&~g}else c=0,r.child=null;return my(n,r,g,o,c)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Nf(r,g!==null?g.cachePool:null),g!==null?_x(r,g):Vp(),vx(r);else return c=r.lanes=536870912,my(n,r,g!==null?g.baseLanes|o:o,o,c)}else g!==null?(Nf(r,g.cachePool),_x(r,g),vs(),r.memoizedState=null):(n!==null&&Nf(r,null),Vp(),vs());return pi(n,r,p,o),r.child}function Qc(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function my(n,r,o,c,p){var g=zp();return g=g===null?null:{parent:kn._currentValue,pool:g},r.memoizedState={baseLanes:o,cachePool:g},n!==null&&Nf(r,null),Vp(),vx(r),n!==null&&cl(n,r,c,!0),r.childLanes=p,null}function Zf(n,r){return r=Qf({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function gy(n,r,o){return mo(r,n.child,null,o),n=Zf(r,r.pendingProps),n.flags|=2,pr(r),r.memoizedState=null,n}function sA(n,r,o){var c=r.pendingProps,p=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(We){if(c.mode==="hidden")return n=Zf(r,c),r.lanes=536870912,Qc(null,n);if(Xp(r),(n=Mn)?(n=CS(n,Fr),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:us!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},o=$v(n),o.return=r,r.child=o,hi=r,Mn=null)):n=null,n===null)throw hs(r);return r.lanes=536870912,null}return Zf(r,c)}var g=n.memoizedState;if(g!==null){var E=g.dehydrated;if(Xp(r),p)if(r.flags&256)r.flags&=-257,r=gy(n,r,o);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(i(558));else if(Wn||cl(n,r,o,!1),p=(o&n.childLanes)!==0,Wn||p){if(c=mn,c!==null&&(E=oe(c,o),E!==0&&E!==g.retryLane))throw g.retryLane=E,so(n,E),Zi(c,n,E),fm;sh(),r=gy(n,r,o)}else n=g.treeContext,Mn=Ir(E.nextSibling),hi=r,We=!0,fs=null,Fr=!1,n!==null&&nx(r,n),r=Zf(r,c),r.flags|=4096;return r}return n=Ua(n.child,{mode:c.mode,children:c.children}),n.ref=r.ref,r.child=n,n.return=r,n}function Kf(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function hm(n,r,o,c,p){return uo(r),o=Yp(n,r,o,c,void 0,p),c=qp(),n!==null&&!Wn?(jp(n,r,p),Ba(n,r,p)):(We&&c&&wp(r),r.flags|=1,pi(n,r,o,p),r.child)}function _y(n,r,o,c,p,g){return uo(r),r.updateQueue=null,o=yx(r,c,o,p),xx(n),c=qp(),n!==null&&!Wn?(jp(n,r,g),Ba(n,r,g)):(We&&c&&wp(r),r.flags|=1,pi(n,r,o,g),r.child)}function vy(n,r,o,c,p){if(uo(r),r.stateNode===null){var g=al,E=o.contextType;typeof E=="object"&&E!==null&&(g=di(E)),g=new o(c,g),r.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=cm,r.stateNode=g,g._reactInternals=r,g=r.stateNode,g.props=c,g.state=r.memoizedState,g.refs={},Bp(r),E=o.contextType,g.context=typeof E=="object"&&E!==null?di(E):al,g.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(lm(r,o,E,c),g.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(E=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),E!==g.state&&cm.enqueueReplaceState(g,g.state,null),Yc(r,c,g,p),Wc(),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308),c=!0}else if(n===null){g=r.stateNode;var P=r.memoizedProps,W=_o(o,P);g.props=W;var lt=g.context,yt=o.contextType;E=al,typeof yt=="object"&&yt!==null&&(E=di(yt));var bt=o.getDerivedStateFromProps;yt=typeof bt=="function"||typeof g.getSnapshotBeforeUpdate=="function",P=r.pendingProps!==P,yt||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(P||lt!==E)&&ry(r,g,c,E),ps=!1;var ft=r.memoizedState;g.state=ft,Yc(r,c,g,p),Wc(),lt=r.memoizedState,P||ft!==lt||ps?(typeof bt=="function"&&(lm(r,o,bt,c),lt=r.memoizedState),(W=ps||iy(r,o,W,c,ft,lt,E))?(yt||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(r.flags|=4194308)):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=lt),g.props=c,g.state=lt,g.context=E,c=W):(typeof g.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{g=r.stateNode,Ip(n,r),E=r.memoizedProps,yt=_o(o,E),g.props=yt,bt=r.pendingProps,ft=g.context,lt=o.contextType,W=al,typeof lt=="object"&&lt!==null&&(W=di(lt)),P=o.getDerivedStateFromProps,(lt=typeof P=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==bt||ft!==W)&&ry(r,g,c,W),ps=!1,ft=r.memoizedState,g.state=ft,Yc(r,c,g,p),Wc();var pt=r.memoizedState;E!==bt||ft!==pt||ps||n!==null&&n.dependencies!==null&&Lf(n.dependencies)?(typeof P=="function"&&(lm(r,o,P,c),pt=r.memoizedState),(yt=ps||iy(r,o,yt,c,ft,pt,W)||n!==null&&n.dependencies!==null&&Lf(n.dependencies))?(lt||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,pt,W),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,pt,W)),typeof g.componentDidUpdate=="function"&&(r.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&ft===n.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&ft===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=pt),g.props=c,g.state=pt,g.context=W,c=yt):(typeof g.componentDidUpdate!="function"||E===n.memoizedProps&&ft===n.memoizedState||(r.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&ft===n.memoizedState||(r.flags|=1024),c=!1)}return g=c,Kf(n,r),c=(r.flags&128)!==0,g||c?(g=r.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:g.render(),r.flags|=1,n!==null&&c?(r.child=mo(r,n.child,null,p),r.child=mo(r,null,o,p)):pi(n,r,o,p),r.memoizedState=g.state,n=r.child):n=Ba(n,r,p),n}function xy(n,r,o,c){return lo(),r.flags|=256,pi(n,r,o,c),r.child}var dm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pm(n){return{baseLanes:n,cachePool:lx()}}function mm(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=gr),n}function yy(n,r,o){var c=r.pendingProps,p=!1,g=(r.flags&128)!==0,E;if((E=g)||(E=n!==null&&n.memoizedState===null?!1:(zn.current&2)!==0),E&&(p=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,n===null){if(We){if(p?_s(r):vs(),(n=Mn)?(n=CS(n,Fr),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:us!==null?{id:aa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},o=$v(n),o.return=r,r.child=o,hi=r,Mn=null)):n=null,n===null)throw hs(r);return Qm(n)?r.lanes=32:r.lanes=536870912,null}var P=c.children;return c=c.fallback,p?(vs(),p=r.mode,P=Qf({mode:"hidden",children:P},p),c=oo(c,p,o,null),P.return=r,c.return=r,P.sibling=c,r.child=P,c=r.child,c.memoizedState=pm(o),c.childLanes=mm(n,E,o),r.memoizedState=dm,Qc(null,c)):(_s(r),gm(r,P))}var W=n.memoizedState;if(W!==null&&(P=W.dehydrated,P!==null)){if(g)r.flags&256?(_s(r),r.flags&=-257,r=_m(n,r,o)):r.memoizedState!==null?(vs(),r.child=n.child,r.flags|=128,r=null):(vs(),P=c.fallback,p=r.mode,c=Qf({mode:"visible",children:c.children},p),P=oo(P,p,o,null),P.flags|=2,c.return=r,P.return=r,c.sibling=P,r.child=c,mo(r,n.child,null,o),c=r.child,c.memoizedState=pm(o),c.childLanes=mm(n,E,o),r.memoizedState=dm,r=Qc(null,c));else if(_s(r),Qm(P)){if(E=P.nextSibling&&P.nextSibling.dataset,E)var lt=E.dgst;E=lt,c=Error(i(419)),c.stack="",c.digest=E,Ic({value:c,source:null,stack:null}),r=_m(n,r,o)}else if(Wn||cl(n,r,o,!1),E=(o&n.childLanes)!==0,Wn||E){if(E=mn,E!==null&&(c=oe(E,o),c!==0&&c!==W.retryLane))throw W.retryLane=c,so(n,c),Zi(E,n,c),fm;Km(P)||sh(),r=_m(n,r,o)}else Km(P)?(r.flags|=192,r.child=n.child,r=null):(n=W.treeContext,Mn=Ir(P.nextSibling),hi=r,We=!0,fs=null,Fr=!1,n!==null&&nx(r,n),r=gm(r,c.children),r.flags|=4096);return r}return p?(vs(),P=c.fallback,p=r.mode,W=n.child,lt=W.sibling,c=Ua(W,{mode:"hidden",children:c.children}),c.subtreeFlags=W.subtreeFlags&65011712,lt!==null?P=Ua(lt,P):(P=oo(P,p,o,null),P.flags|=2),P.return=r,c.return=r,c.sibling=P,r.child=c,Qc(null,c),c=r.child,P=n.child.memoizedState,P===null?P=pm(o):(p=P.cachePool,p!==null?(W=kn._currentValue,p=p.parent!==W?{parent:W,pool:W}:p):p=lx(),P={baseLanes:P.baseLanes|o,cachePool:p}),c.memoizedState=P,c.childLanes=mm(n,E,o),r.memoizedState=dm,Qc(n.child,c)):(_s(r),o=n.child,n=o.sibling,o=Ua(o,{mode:"visible",children:c.children}),o.return=r,o.sibling=null,n!==null&&(E=r.deletions,E===null?(r.deletions=[n],r.flags|=16):E.push(n)),r.child=o,r.memoizedState=null,o)}function gm(n,r){return r=Qf({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Qf(n,r){return n=hr(22,n,null,r),n.lanes=0,n}function _m(n,r,o){return mo(r,n.child,null,o),n=gm(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Sy(n,r,o){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Up(n.return,r,o)}function vm(n,r,o,c,p,g){var E=n.memoizedState;E===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:p,treeForkCount:g}:(E.isBackwards=r,E.rendering=null,E.renderingStartTime=0,E.last=c,E.tail=o,E.tailMode=p,E.treeForkCount=g)}function My(n,r,o){var c=r.pendingProps,p=c.revealOrder,g=c.tail;c=c.children;var E=zn.current,P=(E&2)!==0;if(P?(E=E&1|2,r.flags|=128):E&=1,_t(zn,E),pi(n,r,c,o),c=We?Bc:0,!P&&n!==null&&(n.flags&128)!==0)t:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sy(n,o,r);else if(n.tag===19)Sy(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break t;for(;n.sibling===null;){if(n.return===null||n.return===r)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&If(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),vm(r,!1,p,o,g,c);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&If(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}vm(r,!0,o,null,g,c);break;case"together":vm(r,!1,null,null,void 0,c);break;default:r.memoizedState=null}return r.child}function Ba(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Ss|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(cl(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,o=Ua(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Ua(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function xm(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Lf(n)))}function oA(n,r,o){switch(r.tag){case 3:Et(r,r.stateNode.containerInfo),ds(r,kn,n.memoizedState.cache),lo();break;case 27:case 5:ee(r);break;case 4:Et(r,r.stateNode.containerInfo);break;case 10:ds(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Xp(r),null;break;case 13:var c=r.memoizedState;if(c!==null)return c.dehydrated!==null?(_s(r),r.flags|=128,null):(o&r.child.childLanes)!==0?yy(n,r,o):(_s(r),n=Ba(n,r,o),n!==null?n.sibling:null);_s(r);break;case 19:var p=(n.flags&128)!==0;if(c=(o&r.childLanes)!==0,c||(cl(n,r,o,!1),c=(o&r.childLanes)!==0),p){if(c)return My(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),_t(zn,zn.current),c)break;return null;case 22:return r.lanes=0,py(n,r,o,r.pendingProps);case 24:ds(r,kn,n.memoizedState.cache)}return Ba(n,r,o)}function by(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Wn=!0;else{if(!xm(n,o)&&(r.flags&128)===0)return Wn=!1,oA(n,r,o);Wn=(n.flags&131072)!==0}else Wn=!1,We&&(r.flags&1048576)!==0&&ex(r,Bc,r.index);switch(r.lanes=0,r.tag){case 16:t:{var c=r.pendingProps;if(n=ho(r.elementType),r.type=n,typeof n=="function")Ep(n)?(c=_o(n,c),r.tag=1,r=vy(null,r,n,c,o)):(r.tag=0,r=hm(null,r,n,c,o));else{if(n!=null){var p=n.$$typeof;if(p===w){r.tag=11,r=fy(null,r,n,c,o);break t}else if(p===R){r.tag=14,r=hy(null,r,n,c,o);break t}}throw r=Z(n)||n,Error(i(306,r,""))}}return r;case 0:return hm(n,r,r.type,r.pendingProps,o);case 1:return c=r.type,p=_o(c,r.pendingProps),vy(n,r,c,p,o);case 3:t:{if(Et(r,r.stateNode.containerInfo),n===null)throw Error(i(387));c=r.pendingProps;var g=r.memoizedState;p=g.element,Ip(n,r),Yc(r,c,null,o);var E=r.memoizedState;if(c=E.cache,ds(r,kn,c),c!==g.cache&&Np(r,[kn],o,!0),Wc(),c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){r=xy(n,r,c,o);break t}else if(c!==p){p=Or(Error(i(424)),r),Ic(p),r=xy(n,r,c,o);break t}else for(n=r.stateNode.containerInfo,n.nodeType===9?n=n.body:n=n.nodeName==="HTML"?n.ownerDocument.body:n,Mn=Ir(n.firstChild),hi=r,We=!0,fs=null,Fr=!0,o=px(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(lo(),c===p){r=Ba(n,r,o);break t}pi(n,r,c,o)}r=r.child}return r;case 26:return Kf(n,r),n===null?(o=OS(r.type,null,r.pendingProps,null))?r.memoizedState=o:We||(o=r.type,n=r.pendingProps,c=dh(it.current).createElement(o),c[we]=r,c[Me]=n,mi(c,o,n),j(c),r.stateNode=c):r.memoizedState=OS(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return ee(r),n===null&&We&&(c=r.stateNode=LS(r.type,r.pendingProps,it.current),hi=r,Fr=!0,p=Mn,As(r.type)?(Jm=p,Mn=Ir(c.firstChild)):Mn=p),pi(n,r,r.pendingProps.children,o),Kf(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&We&&((p=c=Mn)&&(c=FA(c,r.type,r.pendingProps,Fr),c!==null?(r.stateNode=c,hi=r,Mn=Ir(c.firstChild),Fr=!1,p=!0):p=!1),p||hs(r)),ee(r),p=r.type,g=r.pendingProps,E=n!==null?n.memoizedProps:null,c=g.children,qm(p,g)?c=null:E!==null&&qm(p,E)&&(r.flags|=32),r.memoizedState!==null&&(p=Yp(n,r,JT,null,null,o),hu._currentValue=p),Kf(n,r),pi(n,r,c,o),r.child;case 6:return n===null&&We&&((n=o=Mn)&&(o=BA(o,r.pendingProps,Fr),o!==null?(r.stateNode=o,hi=r,Mn=null,n=!0):n=!1),n||hs(r)),null;case 13:return yy(n,r,o);case 4:return Et(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=mo(r,null,c,o):pi(n,r,c,o),r.child;case 11:return fy(n,r,r.type,r.pendingProps,o);case 7:return pi(n,r,r.pendingProps,o),r.child;case 8:return pi(n,r,r.pendingProps.children,o),r.child;case 12:return pi(n,r,r.pendingProps.children,o),r.child;case 10:return c=r.pendingProps,ds(r,r.type,c.value),pi(n,r,c.children,o),r.child;case 9:return p=r.type._context,c=r.pendingProps.children,uo(r),p=di(p),c=c(p),r.flags|=1,pi(n,r,c,o),r.child;case 14:return hy(n,r,r.type,r.pendingProps,o);case 15:return dy(n,r,r.type,r.pendingProps,o);case 19:return My(n,r,o);case 31:return sA(n,r,o);case 22:return py(n,r,o,r.pendingProps);case 24:return uo(r),c=di(kn),n===null?(p=zp(),p===null&&(p=mn,g=Op(),p.pooledCache=g,g.refCount++,g!==null&&(p.pooledCacheLanes|=o),p=g),r.memoizedState={parent:c,cache:p},Bp(r),ds(r,kn,p)):((n.lanes&o)!==0&&(Ip(n,r),Yc(r,null,null,o),Wc()),p=n.memoizedState,g=r.memoizedState,p.parent!==c?(p={parent:c,cache:c},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),ds(r,kn,c)):(c=g.cache,ds(r,kn,c),c!==p.cache&&Np(r,[kn],o,!0))),pi(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function Ia(n){n.flags|=4}function ym(n,r,o,c,p){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(Ky())n.flags|=8192;else throw po=Pf,Fp}else n.flags&=-16777217}function Ey(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!IS(r))if(Ky())n.flags|=8192;else throw po=Pf,Fp}function Jf(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?Xe():536870912,n.lanes|=r,Sl|=r)}function Jc(n,r){if(!We)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,c|=p.subtreeFlags&65011712,c|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=o,r}function lA(n,r,o){var c=r.pendingProps;switch(Cp(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(r),null;case 1:return bn(r),null;case 3:return o=r.stateNode,c=null,n!==null&&(c=n.memoizedState.cache),r.memoizedState.cache!==c&&(r.flags|=2048),Pa(kn),zt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(ll(r)?Ia(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Dp())),bn(r),null;case 26:var p=r.type,g=r.memoizedState;return n===null?(Ia(r),g!==null?(bn(r),Ey(r,g)):(bn(r),ym(r,p,null,c,o))):g?g!==n.memoizedState?(Ia(r),bn(r),Ey(r,g)):(bn(r),r.flags&=-16777217):(n=n.memoizedProps,n!==c&&Ia(r),bn(r),ym(r,p,n,c,o)),null;case 27:if(Kt(r),o=it.current,p=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==c&&Ia(r);else{if(!c){if(r.stateNode===null)throw Error(i(166));return bn(r),null}n=Mt.current,ll(r)?ix(r):(n=LS(p,c,o),r.stateNode=n,Ia(r))}return bn(r),null;case 5:if(Kt(r),p=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==c&&Ia(r);else{if(!c){if(r.stateNode===null)throw Error(i(166));return bn(r),null}if(g=Mt.current,ll(r))ix(r);else{var E=dh(it.current);switch(g){case 1:g=E.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:g=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":g=E.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":g=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":g=E.createElement("div"),g.innerHTML="<script><\/script>",g=g.removeChild(g.firstChild);break;case"select":g=typeof c.is=="string"?E.createElement("select",{is:c.is}):E.createElement("select"),c.multiple?g.multiple=!0:c.size&&(g.size=c.size);break;default:g=typeof c.is=="string"?E.createElement(p,{is:c.is}):E.createElement(p)}}g[we]=r,g[Me]=c;t:for(E=r.child;E!==null;){if(E.tag===5||E.tag===6)g.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===r)break t;for(;E.sibling===null;){if(E.return===null||E.return===r)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}r.stateNode=g;t:switch(mi(g,p,c),p){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break t;case"img":c=!0;break t;default:c=!1}c&&Ia(r)}}return bn(r),ym(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,o),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==c&&Ia(r);else{if(typeof c!="string"&&r.stateNode===null)throw Error(i(166));if(n=it.current,ll(r)){if(n=r.stateNode,o=r.memoizedProps,c=null,p=hi,p!==null)switch(p.tag){case 27:case 5:c=p.memoizedProps}n[we]=r,n=!!(n.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||yS(n.nodeValue,o)),n||hs(r,!0)}else n=dh(n).createTextNode(c),n[we]=r,r.stateNode=n}return bn(r),null;case 31:if(o=r.memoizedState,n===null||n.memoizedState!==null){if(c=ll(r),o!==null){if(n===null){if(!c)throw Error(i(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[we]=r}else lo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;bn(r),n=!1}else o=Dp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return r.flags&256?(pr(r),r):(pr(r),null);if((r.flags&128)!==0)throw Error(i(558))}return bn(r),null;case 13:if(c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=ll(r),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(i(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[we]=r}else lo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;bn(r),p=!1}else p=Dp(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(pr(r),r):(pr(r),null)}return pr(r),(r.flags&128)!==0?(r.lanes=o,r):(o=c!==null,n=n!==null&&n.memoizedState!==null,o&&(c=r.child,p=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(p=c.alternate.memoizedState.cachePool.pool),g=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==p&&(c.flags|=2048)),o!==n&&o&&(r.child.flags|=8192),Jf(r,r.updateQueue),bn(r),null);case 4:return zt(),n===null&&Vm(r.stateNode.containerInfo),bn(r),null;case 10:return Pa(r.type),bn(r),null;case 19:if(Q(zn),c=r.memoizedState,c===null)return bn(r),null;if(p=(r.flags&128)!==0,g=c.rendering,g===null)if(p)Jc(c,!1);else{if(On!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(g=If(n),g!==null){for(r.flags|=128,Jc(c,!1),n=g.updateQueue,r.updateQueue=n,Jf(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)Jv(o,n),o=o.sibling;return _t(zn,zn.current&1|2),We&&Na(r,c.treeForkCount),r.child}n=n.sibling}c.tail!==null&&C()>ih&&(r.flags|=128,p=!0,Jc(c,!1),r.lanes=4194304)}else{if(!p)if(n=If(g),n!==null){if(r.flags|=128,p=!0,n=n.updateQueue,r.updateQueue=n,Jf(r,n),Jc(c,!0),c.tail===null&&c.tailMode==="hidden"&&!g.alternate&&!We)return bn(r),null}else 2*C()-c.renderingStartTime>ih&&o!==536870912&&(r.flags|=128,p=!0,Jc(c,!1),r.lanes=4194304);c.isBackwards?(g.sibling=r.child,r.child=g):(n=c.last,n!==null?n.sibling=g:r.child=g,c.last=g)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=C(),n.sibling=null,o=zn.current,_t(zn,p?o&1|2:o&1),We&&Na(r,c.treeForkCount),n):(bn(r),null);case 22:case 23:return pr(r),kp(),c=r.memoizedState!==null,n!==null?n.memoizedState!==null!==c&&(r.flags|=8192):c&&(r.flags|=8192),c?(o&536870912)!==0&&(r.flags&128)===0&&(bn(r),r.subtreeFlags&6&&(r.flags|=8192)):bn(r),o=r.updateQueue,o!==null&&Jf(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==o&&(r.flags|=2048),n!==null&&Q(fo),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Pa(kn),bn(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function cA(n,r){switch(Cp(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Pa(kn),zt(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Kt(r),null;case 31:if(r.memoizedState!==null){if(pr(r),r.alternate===null)throw Error(i(340));lo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(pr(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));lo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Q(zn),null;case 4:return zt(),null;case 10:return Pa(r.type),null;case 22:case 23:return pr(r),kp(),n!==null&&Q(fo),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Pa(kn),null;case 25:return null;default:return null}}function Ty(n,r){switch(Cp(r),r.tag){case 3:Pa(kn),zt();break;case 26:case 27:case 5:Kt(r);break;case 4:zt();break;case 31:r.memoizedState!==null&&pr(r);break;case 13:pr(r);break;case 19:Q(zn);break;case 10:Pa(r.type);break;case 22:case 23:pr(r),kp(),n!==null&&Q(fo);break;case 24:Pa(kn)}}function $c(n,r){try{var o=r.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var p=c.next;o=p;do{if((o.tag&n)===n){c=void 0;var g=o.create,E=o.inst;c=g(),E.destroy=c}o=o.next}while(o!==p)}}catch(P){on(r,r.return,P)}}function xs(n,r,o){try{var c=r.updateQueue,p=c!==null?c.lastEffect:null;if(p!==null){var g=p.next;c=g;do{if((c.tag&n)===n){var E=c.inst,P=E.destroy;if(P!==void 0){E.destroy=void 0,p=r;var W=o,lt=P;try{lt()}catch(yt){on(p,W,yt)}}}c=c.next}while(c!==g)}}catch(yt){on(r,r.return,yt)}}function Ay(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{gx(r,o)}catch(c){on(n,n.return,c)}}}function wy(n,r,o){o.props=_o(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(c){on(n,r,c)}}function tu(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var c=n.stateNode;break;case 30:c=n.stateNode;break;default:c=n.stateNode}typeof o=="function"?n.refCleanup=o(c):o.current=c}}catch(p){on(n,r,p)}}function oa(n,r){var o=n.ref,c=n.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(p){on(n,r,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){on(n,r,p)}else o.current=null}function Cy(n){var r=n.type,o=n.memoizedProps,c=n.stateNode;try{t:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break t;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(p){on(n,n.return,p)}}function Sm(n,r,o){try{var c=n.stateNode;LA(c,n.type,o,r),c[Me]=r}catch(p){on(n,n.return,p)}}function Ry(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&As(n.type)||n.tag===4}function Mm(n){t:for(;;){for(;n.sibling===null;){if(n.return===null||Ry(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&As(n.type)||n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function bm(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Da));else if(c!==4&&(c===27&&As(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(bm(n,r,o),n=n.sibling;n!==null;)bm(n,r,o),n=n.sibling}function $f(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(c!==4&&(c===27&&As(n.type)&&(o=n.stateNode),n=n.child,n!==null))for($f(n,r,o),n=n.sibling;n!==null;)$f(n,r,o),n=n.sibling}function Dy(n){var r=n.stateNode,o=n.memoizedProps;try{for(var c=n.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);mi(r,c,o),r[we]=n,r[Me]=o}catch(g){on(n,n.return,g)}}var Ha=!1,Yn=!1,Em=!1,Ly=typeof WeakSet=="function"?WeakSet:Set,ri=null;function uA(n,r){if(n=n.containerInfo,Wm=yh,n=kv(n),_p(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else t:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break t}var E=0,P=-1,W=-1,lt=0,yt=0,bt=n,ft=null;e:for(;;){for(var pt;bt!==o||p!==0&&bt.nodeType!==3||(P=E+p),bt!==g||c!==0&&bt.nodeType!==3||(W=E+c),bt.nodeType===3&&(E+=bt.nodeValue.length),(pt=bt.firstChild)!==null;)ft=bt,bt=pt;for(;;){if(bt===n)break e;if(ft===o&&++lt===p&&(P=E),ft===g&&++yt===c&&(W=E),(pt=bt.nextSibling)!==null)break;bt=ft,ft=bt.parentNode}bt=pt}o=P===-1||W===-1?null:{start:P,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(Ym={focusedElem:n,selectionRange:o},yh=!1,ri=r;ri!==null;)if(r=ri,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ri=n;else for(;ri!==null;){switch(r=ri,g=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)p=n[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&g!==null){n=void 0,o=r,p=g.memoizedProps,g=g.memoizedState,c=o.stateNode;try{var $t=_o(o.type,p);n=c.getSnapshotBeforeUpdate($t,g),c.__reactInternalSnapshotBeforeUpdate=n}catch(fe){on(o,o.return,fe)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)Zm(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Zm(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,ri=n;break}ri=r.return}}function Uy(n,r,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:Va(n,o),c&4&&$c(5,o);break;case 1:if(Va(n,o),c&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(E){on(o,o.return,E)}else{var p=_o(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(p,r,n.__reactInternalSnapshotBeforeUpdate)}catch(E){on(o,o.return,E)}}c&64&&Ay(o),c&512&&tu(o,o.return);break;case 3:if(Va(n,o),c&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{gx(n,r)}catch(E){on(o,o.return,E)}}break;case 27:r===null&&c&4&&Dy(o);case 26:case 5:Va(n,o),r===null&&c&4&&Cy(o),c&512&&tu(o,o.return);break;case 12:Va(n,o);break;case 31:Va(n,o),c&4&&Py(n,o);break;case 13:Va(n,o),c&4&&zy(n,o),c&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=xA.bind(null,o),IA(n,o))));break;case 22:if(c=o.memoizedState!==null||Ha,!c){r=r!==null&&r.memoizedState!==null||Yn,p=Ha;var g=Yn;Ha=c,(Yn=r)&&!g?ka(n,o,(o.subtreeFlags&8772)!==0):Va(n,o),Ha=p,Yn=g}break;case 30:break;default:Va(n,o)}}function Ny(n){var r=n.alternate;r!==null&&(n.alternate=null,Ny(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Rn(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var An=null,Wi=!1;function Ga(n,r,o){for(o=o.child;o!==null;)Oy(n,r,o),o=o.sibling}function Oy(n,r,o){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(wt,o)}catch{}switch(o.tag){case 26:Yn||oa(o,r),Ga(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Yn||oa(o,r);var c=An,p=Wi;As(o.type)&&(An=o.stateNode,Wi=!1),Ga(n,r,o),cu(o.stateNode),An=c,Wi=p;break;case 5:Yn||oa(o,r);case 6:if(c=An,p=Wi,An=null,Ga(n,r,o),An=c,Wi=p,An!==null)if(Wi)try{(An.nodeType===9?An.body:An.nodeName==="HTML"?An.ownerDocument.body:An).removeChild(o.stateNode)}catch(g){on(o,r,g)}else try{An.removeChild(o.stateNode)}catch(g){on(o,r,g)}break;case 18:An!==null&&(Wi?(n=An,AS(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Rl(n)):AS(An,o.stateNode));break;case 4:c=An,p=Wi,An=o.stateNode.containerInfo,Wi=!0,Ga(n,r,o),An=c,Wi=p;break;case 0:case 11:case 14:case 15:xs(2,o,r),Yn||xs(4,o,r),Ga(n,r,o);break;case 1:Yn||(oa(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"&&wy(o,r,c)),Ga(n,r,o);break;case 21:Ga(n,r,o);break;case 22:Yn=(c=Yn)||o.memoizedState!==null,Ga(n,r,o),Yn=c;break;default:Ga(n,r,o)}}function Py(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Rl(n)}catch(o){on(r,r.return,o)}}}function zy(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Rl(n)}catch(o){on(r,r.return,o)}}function fA(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Ly),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Ly),r;default:throw Error(i(435,n.tag))}}function th(n,r){var o=fA(n);r.forEach(function(c){if(!o.has(c)){o.add(c);var p=yA.bind(null,n,c);c.then(p,p)}})}function Yi(n,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var p=o[c],g=n,E=r,P=E;t:for(;P!==null;){switch(P.tag){case 27:if(As(P.type)){An=P.stateNode,Wi=!1;break t}break;case 5:An=P.stateNode,Wi=!1;break t;case 3:case 4:An=P.stateNode.containerInfo,Wi=!0;break t}P=P.return}if(An===null)throw Error(i(160));Oy(g,E,p),An=null,Wi=!1,g=p.alternate,g!==null&&(g.return=null),p.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Fy(r,n),r=r.sibling}var $r=null;function Fy(n,r){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Yi(r,n),qi(n),c&4&&(xs(3,n,n.return),$c(3,n),xs(5,n,n.return));break;case 1:Yi(r,n),qi(n),c&512&&(Yn||o===null||oa(o,o.return)),c&64&&Ha&&(n=n.updateQueue,n!==null&&(c=n.callbacks,c!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var p=$r;if(Yi(r,n),qi(n),c&512&&(Yn||o===null||oa(o,o.return)),c&4){var g=o!==null?o.memoizedState:null;if(c=n.memoizedState,o===null)if(c===null)if(n.stateNode===null){t:{c=n.type,o=n.memoizedProps,p=p.ownerDocument||p;e:switch(c){case"title":g=p.getElementsByTagName("title")[0],(!g||g[yn]||g[we]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=p.createElement(c),p.head.insertBefore(g,p.querySelector("head > title"))),mi(g,c,o),g[we]=n,j(g),c=g;break t;case"link":var E=FS("link","href",p).get(c+(o.href||""));if(E){for(var P=0;P<E.length;P++)if(g=E[P],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(P,1);break e}}g=p.createElement(c),mi(g,c,o),p.head.appendChild(g);break;case"meta":if(E=FS("meta","content",p).get(c+(o.content||""))){for(P=0;P<E.length;P++)if(g=E[P],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(P,1);break e}}g=p.createElement(c),mi(g,c,o),p.head.appendChild(g);break;default:throw Error(i(468,c))}g[we]=n,j(g),c=g}n.stateNode=c}else BS(p,n.type,n.stateNode);else n.stateNode=zS(p,c,n.memoizedProps);else g!==c?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,c===null?BS(p,n.type,n.stateNode):zS(p,c,n.memoizedProps)):c===null&&n.stateNode!==null&&Sm(n,n.memoizedProps,o.memoizedProps)}break;case 27:Yi(r,n),qi(n),c&512&&(Yn||o===null||oa(o,o.return)),o!==null&&c&4&&Sm(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Yi(r,n),qi(n),c&512&&(Yn||o===null||oa(o,o.return)),n.flags&32){p=n.stateNode;try{Oi(p,"")}catch($t){on(n,n.return,$t)}}c&4&&n.stateNode!=null&&(p=n.memoizedProps,Sm(n,p,o!==null?o.memoizedProps:p)),c&1024&&(Em=!0);break;case 6:if(Yi(r,n),qi(n),c&4){if(n.stateNode===null)throw Error(i(162));c=n.memoizedProps,o=n.stateNode;try{o.nodeValue=c}catch($t){on(n,n.return,$t)}}break;case 3:if(gh=null,p=$r,$r=ph(r.containerInfo),Yi(r,n),$r=p,qi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Rl(r.containerInfo)}catch($t){on(n,n.return,$t)}Em&&(Em=!1,By(n));break;case 4:c=$r,$r=ph(n.stateNode.containerInfo),Yi(r,n),qi(n),$r=c;break;case 12:Yi(r,n),qi(n);break;case 31:Yi(r,n),qi(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,th(n,c)));break;case 13:Yi(r,n),qi(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(nh=C()),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,th(n,c)));break;case 22:p=n.memoizedState!==null;var W=o!==null&&o.memoizedState!==null,lt=Ha,yt=Yn;if(Ha=lt||p,Yn=yt||W,Yi(r,n),Yn=yt,Ha=lt,qi(n),c&8192)t:for(r=n.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(o===null||W||Ha||Yn||vo(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){W=o=r;try{if(g=W.stateNode,p)E=g.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{P=W.stateNode;var bt=W.memoizedProps.style,ft=bt!=null&&bt.hasOwnProperty("display")?bt.display:null;P.style.display=ft==null||typeof ft=="boolean"?"":(""+ft).trim()}}catch($t){on(W,W.return,$t)}}}else if(r.tag===6){if(o===null){W=r;try{W.stateNode.nodeValue=p?"":W.memoizedProps}catch($t){on(W,W.return,$t)}}}else if(r.tag===18){if(o===null){W=r;try{var pt=W.stateNode;p?wS(pt,!0):wS(W.stateNode,!1)}catch($t){on(W,W.return,$t)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break t;for(;r.sibling===null;){if(r.return===null||r.return===n)break t;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}c&4&&(c=n.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,th(n,o))));break;case 19:Yi(r,n),qi(n),c&4&&(c=n.updateQueue,c!==null&&(n.updateQueue=null,th(n,c)));break;case 30:break;case 21:break;default:Yi(r,n),qi(n)}}function qi(n){var r=n.flags;if(r&2){try{for(var o,c=n.return;c!==null;){if(Ry(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var p=o.stateNode,g=Mm(n);$f(n,g,p);break;case 5:var E=o.stateNode;o.flags&32&&(Oi(E,""),o.flags&=-33);var P=Mm(n);$f(n,P,E);break;case 3:case 4:var W=o.stateNode.containerInfo,lt=Mm(n);bm(n,lt,W);break;default:throw Error(i(161))}}catch(yt){on(n,n.return,yt)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function By(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;By(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Va(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Uy(n,r.alternate,r),r=r.sibling}function vo(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:xs(4,r,r.return),vo(r);break;case 1:oa(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&wy(r,r.return,o),vo(r);break;case 27:cu(r.stateNode);case 26:case 5:oa(r,r.return),vo(r);break;case 22:r.memoizedState===null&&vo(r);break;case 30:vo(r);break;default:vo(r)}n=n.sibling}}function ka(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var c=r.alternate,p=n,g=r,E=g.flags;switch(g.tag){case 0:case 11:case 15:ka(p,g,o),$c(4,g);break;case 1:if(ka(p,g,o),c=g,p=c.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(lt){on(c,c.return,lt)}if(c=g,p=c.updateQueue,p!==null){var P=c.stateNode;try{var W=p.shared.hiddenCallbacks;if(W!==null)for(p.shared.hiddenCallbacks=null,p=0;p<W.length;p++)mx(W[p],P)}catch(lt){on(c,c.return,lt)}}o&&E&64&&Ay(g),tu(g,g.return);break;case 27:Dy(g);case 26:case 5:ka(p,g,o),o&&c===null&&E&4&&Cy(g),tu(g,g.return);break;case 12:ka(p,g,o);break;case 31:ka(p,g,o),o&&E&4&&Py(p,g);break;case 13:ka(p,g,o),o&&E&4&&zy(p,g);break;case 22:g.memoizedState===null&&ka(p,g,o),tu(g,g.return);break;case 30:break;default:ka(p,g,o)}r=r.sibling}}function Tm(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Hc(o))}function Am(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Hc(n))}function ta(n,r,o,c){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Iy(n,r,o,c),r=r.sibling}function Iy(n,r,o,c){var p=r.flags;switch(r.tag){case 0:case 11:case 15:ta(n,r,o,c),p&2048&&$c(9,r);break;case 1:ta(n,r,o,c);break;case 3:ta(n,r,o,c),p&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Hc(n)));break;case 12:if(p&2048){ta(n,r,o,c),n=r.stateNode;try{var g=r.memoizedProps,E=g.id,P=g.onPostCommit;typeof P=="function"&&P(E,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(W){on(r,r.return,W)}}else ta(n,r,o,c);break;case 31:ta(n,r,o,c);break;case 13:ta(n,r,o,c);break;case 23:break;case 22:g=r.stateNode,E=r.alternate,r.memoizedState!==null?g._visibility&2?ta(n,r,o,c):eu(n,r):g._visibility&2?ta(n,r,o,c):(g._visibility|=2,vl(n,r,o,c,(r.subtreeFlags&10256)!==0||!1)),p&2048&&Tm(E,r);break;case 24:ta(n,r,o,c),p&2048&&Am(r.alternate,r);break;default:ta(n,r,o,c)}}function vl(n,r,o,c,p){for(p=p&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var g=n,E=r,P=o,W=c,lt=E.flags;switch(E.tag){case 0:case 11:case 15:vl(g,E,P,W,p),$c(8,E);break;case 23:break;case 22:var yt=E.stateNode;E.memoizedState!==null?yt._visibility&2?vl(g,E,P,W,p):eu(g,E):(yt._visibility|=2,vl(g,E,P,W,p)),p&&lt&2048&&Tm(E.alternate,E);break;case 24:vl(g,E,P,W,p),p&&lt&2048&&Am(E.alternate,E);break;default:vl(g,E,P,W,p)}r=r.sibling}}function eu(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,c=r,p=c.flags;switch(c.tag){case 22:eu(o,c),p&2048&&Tm(c.alternate,c);break;case 24:eu(o,c),p&2048&&Am(c.alternate,c);break;default:eu(o,c)}r=r.sibling}}var nu=8192;function xl(n,r,o){if(n.subtreeFlags&nu)for(n=n.child;n!==null;)Hy(n,r,o),n=n.sibling}function Hy(n,r,o){switch(n.tag){case 26:xl(n,r,o),n.flags&nu&&n.memoizedState!==null&&QA(o,$r,n.memoizedState,n.memoizedProps);break;case 5:xl(n,r,o);break;case 3:case 4:var c=$r;$r=ph(n.stateNode.containerInfo),xl(n,r,o),$r=c;break;case 22:n.memoizedState===null&&(c=n.alternate,c!==null&&c.memoizedState!==null?(c=nu,nu=16777216,xl(n,r,o),nu=c):xl(n,r,o));break;default:xl(n,r,o)}}function Gy(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function iu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];ri=c,ky(c,n)}Gy(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Vy(n),n=n.sibling}function Vy(n){switch(n.tag){case 0:case 11:case 15:iu(n),n.flags&2048&&xs(9,n,n.return);break;case 3:iu(n);break;case 12:iu(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,eh(n)):iu(n);break;default:iu(n)}}function eh(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var c=r[o];ri=c,ky(c,n)}Gy(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:xs(8,r,r.return),eh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,eh(r));break;default:eh(r)}n=n.sibling}}function ky(n,r){for(;ri!==null;){var o=ri;switch(o.tag){case 0:case 11:case 15:xs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:Hc(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,ri=c;else t:for(o=n;ri!==null;){c=ri;var p=c.sibling,g=c.return;if(Ny(c),c===o){ri=null;break t}if(p!==null){p.return=g,ri=p;break t}ri=g}}}var hA={getCacheForType:function(n){var r=di(kn),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o},cacheSignal:function(){return di(kn).controller.signal}},dA=typeof WeakMap=="function"?WeakMap:Map,en=0,mn=null,He=null,Ve=0,sn=0,mr=null,ys=!1,yl=!1,wm=!1,Xa=0,On=0,Ss=0,xo=0,Cm=0,gr=0,Sl=0,ru=null,ji=null,Rm=!1,nh=0,Xy=0,ih=1/0,rh=null,Ms=null,Jn=0,bs=null,Ml=null,Wa=0,Dm=0,Lm=null,Wy=null,au=0,Um=null;function _r(){return(en&2)!==0&&Ve!==0?Ve&-Ve:z.T!==null?Bm():ve()}function Yy(){if(gr===0)if((Ve&536870912)===0||We){var n=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),gr=n}else gr=536870912;return n=dr.current,n!==null&&(n.flags|=32),gr}function Zi(n,r,o){(n===mn&&(sn===2||sn===9)||n.cancelPendingCommit!==null)&&(bl(n,0),Es(n,Ve,gr,!1)),Jt(n,o),((en&2)===0||n!==mn)&&(n===mn&&((en&2)===0&&(xo|=o),On===4&&Es(n,Ve,gr,!1)),la(n))}function qy(n,r,o){if((en&6)!==0)throw Error(i(327));var c=!o&&(r&127)===0&&(r&n.expiredLanes)===0||Xt(n,r),p=c?gA(n,r):Om(n,r,!0),g=c;do{if(p===0){yl&&!c&&Es(n,r,0,!1);break}else{if(o=n.current.alternate,g&&!pA(o)){p=Om(n,r,!1),g=!1;continue}if(p===2){if(g=r,n.errorRecoveryDisabledLanes&g)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;t:{var P=n;p=ru;var W=P.current.memoizedState.isDehydrated;if(W&&(bl(P,E).flags|=256),E=Om(P,E,!1),E!==2){if(wm&&!W){P.errorRecoveryDisabledLanes|=g,xo|=g,p=4;break t}g=ji,ji=p,g!==null&&(ji===null?ji=g:ji.push.apply(ji,g))}p=E}if(g=!1,p!==2)continue}}if(p===1){bl(n,0),Es(n,r,0,!0);break}t:{switch(c=n,g=p,g){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:Es(c,r,gr,!ys);break t;case 2:ji=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(p=nh+300-C(),10<p)){if(Es(c,r,gr,!ys),mt(c,0,!0)!==0)break t;Wa=r,c.timeoutHandle=ES(jy.bind(null,c,o,ji,rh,Rm,r,gr,xo,Sl,ys,g,"Throttled",-0,0),p);break t}jy(c,o,ji,rh,Rm,r,gr,xo,Sl,ys,g,null,-0,0)}}break}while(!0);la(n)}function jy(n,r,o,c,p,g,E,P,W,lt,yt,bt,ft,pt){if(n.timeoutHandle=-1,bt=r.subtreeFlags,bt&8192||(bt&16785408)===16785408){bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Da},Hy(r,g,bt);var $t=(g&62914560)===g?nh-C():(g&4194048)===g?Xy-C():0;if($t=JA(bt,$t),$t!==null){Wa=g,n.cancelPendingCommit=$t(nS.bind(null,n,r,g,o,c,p,E,P,W,yt,bt,null,ft,pt)),Es(n,g,E,!lt);return}}nS(n,r,g,o,c,p,E,P,W)}function pA(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var p=o[c],g=p.getSnapshot;p=p.value;try{if(!fr(g(),p))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Es(n,r,o,c){r&=~Cm,r&=~xo,n.suspendedLanes|=r,n.pingedLanes&=~r,c&&(n.warmLanes|=r),c=n.expirationTimes;for(var p=r;0<p;){var g=31-Pt(p),E=1<<g;c[g]=-1,p&=~E}o!==0&&Bt(n,o,r)}function ah(){return(en&6)===0?(su(0),!1):!0}function Nm(){if(He!==null){if(sn===0)var n=He.return;else n=He,Oa=co=null,Zp(n),dl=null,Vc=0,n=He;for(;n!==null;)Ty(n.alternate,n),n=n.return;He=null}}function bl(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,OA(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Wa=0,Nm(),mn=n,He=o=Ua(n.current,null),Ve=r,sn=0,mr=null,ys=!1,yl=Xt(n,r),wm=!1,Sl=gr=Cm=xo=Ss=On=0,ji=ru=null,Rm=!1,(r&8)!==0&&(r|=r&32);var c=n.entangledLanes;if(c!==0)for(n=n.entanglements,c&=r;0<c;){var p=31-Pt(c),g=1<<p;r|=n[p],c&=~g}return Xa=r,Af(),o}function Zy(n,r){Re=null,z.H=Kc,r===hl||r===Of?(r=fx(),sn=3):r===Fp?(r=fx(),sn=4):sn=r===fm?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,mr=r,He===null&&(On=1,jf(n,Or(r,n.current)))}function Ky(){var n=dr.current;return n===null?!0:(Ve&4194048)===Ve?Br===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?n===Br:!1}function Qy(){var n=z.H;return z.H=Kc,n===null?Kc:n}function Jy(){var n=z.A;return z.A=hA,n}function sh(){On=4,ys||(Ve&4194048)!==Ve&&dr.current!==null||(yl=!0),(Ss&134217727)===0&&(xo&134217727)===0||mn===null||Es(mn,Ve,gr,!1)}function Om(n,r,o){var c=en;en|=2;var p=Qy(),g=Jy();(mn!==n||Ve!==r)&&(rh=null,bl(n,r)),r=!1;var E=On;t:do try{if(sn!==0&&He!==null){var P=He,W=mr;switch(sn){case 8:Nm(),E=6;break t;case 3:case 2:case 9:case 6:dr.current===null&&(r=!0);var lt=sn;if(sn=0,mr=null,El(n,P,W,lt),o&&yl){E=0;break t}break;default:lt=sn,sn=0,mr=null,El(n,P,W,lt)}}mA(),E=On;break}catch(yt){Zy(n,yt)}while(!0);return r&&n.shellSuspendCounter++,Oa=co=null,en=c,z.H=p,z.A=g,He===null&&(mn=null,Ve=0,Af()),E}function mA(){for(;He!==null;)$y(He)}function gA(n,r){var o=en;en|=2;var c=Qy(),p=Jy();mn!==n||Ve!==r?(rh=null,ih=C()+500,bl(n,r)):yl=Xt(n,r);t:do try{if(sn!==0&&He!==null){r=He;var g=mr;e:switch(sn){case 1:sn=0,mr=null,El(n,r,g,1);break;case 2:case 9:if(cx(g)){sn=0,mr=null,tS(r);break}r=function(){sn!==2&&sn!==9||mn!==n||(sn=7),la(n)},g.then(r,r);break t;case 3:sn=7;break t;case 4:sn=5;break t;case 7:cx(g)?(sn=0,mr=null,tS(r)):(sn=0,mr=null,El(n,r,g,7));break;case 5:var E=null;switch(He.tag){case 26:E=He.memoizedState;case 5:case 27:var P=He;if(E?IS(E):P.stateNode.complete){sn=0,mr=null;var W=P.sibling;if(W!==null)He=W;else{var lt=P.return;lt!==null?(He=lt,oh(lt)):He=null}break e}}sn=0,mr=null,El(n,r,g,5);break;case 6:sn=0,mr=null,El(n,r,g,6);break;case 8:Nm(),On=6;break t;default:throw Error(i(462))}}_A();break}catch(yt){Zy(n,yt)}while(!0);return Oa=co=null,z.H=c,z.A=p,en=o,He!==null?0:(mn=null,Ve=0,Af(),On)}function _A(){for(;He!==null&&!Wt();)$y(He)}function $y(n){var r=by(n.alternate,n,Xa);n.memoizedProps=n.pendingProps,r===null?oh(n):He=r}function tS(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=_y(o,r,r.pendingProps,r.type,void 0,Ve);break;case 11:r=_y(o,r,r.pendingProps,r.type.render,r.ref,Ve);break;case 5:Zp(r);default:Ty(o,r),r=He=Jv(r,Xa),r=by(o,r,Xa)}n.memoizedProps=n.pendingProps,r===null?oh(n):He=r}function El(n,r,o,c){Oa=co=null,Zp(r),dl=null,Vc=0;var p=r.return;try{if(aA(n,p,r,o,Ve)){On=1,jf(n,Or(o,n.current)),He=null;return}}catch(g){if(p!==null)throw He=p,g;On=1,jf(n,Or(o,n.current)),He=null;return}r.flags&32768?(We||c===1?n=!0:yl||(Ve&536870912)!==0?n=!1:(ys=n=!0,(c===2||c===9||c===3||c===6)&&(c=dr.current,c!==null&&c.tag===13&&(c.flags|=16384))),eS(r,n)):oh(r)}function oh(n){var r=n;do{if((r.flags&32768)!==0){eS(r,ys);return}n=r.return;var o=lA(r.alternate,r,Xa);if(o!==null){He=o;return}if(r=r.sibling,r!==null){He=r;return}He=r=n}while(r!==null);On===0&&(On=5)}function eS(n,r){do{var o=cA(n.alternate,n);if(o!==null){o.flags&=32767,He=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){He=n;return}He=n=o}while(n!==null);On=6,He=null}function nS(n,r,o,c,p,g,E,P,W){n.cancelPendingCommit=null;do lh();while(Jn!==0);if((en&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(g=r.lanes|r.childLanes,g|=Mp,Ae(n,o,g,E,P,W),n===mn&&(He=mn=null,Ve=0),Ml=r,bs=n,Wa=o,Dm=g,Lm=p,Wy=c,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,SA(dt,function(){return oS(),null})):(n.callbackNode=null,n.callbackPriority=0),c=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||c){c=z.T,z.T=null,p=B.p,B.p=2,E=en,en|=4;try{uA(n,r,o)}finally{en=E,B.p=p,z.T=c}}Jn=1,iS(),rS(),aS()}}function iS(){if(Jn===1){Jn=0;var n=bs,r=Ml,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var c=B.p;B.p=2;var p=en;en|=4;try{Fy(r,n);var g=Ym,E=kv(n.containerInfo),P=g.focusedElem,W=g.selectionRange;if(E!==P&&P&&P.ownerDocument&&Vv(P.ownerDocument.documentElement,P)){if(W!==null&&_p(P)){var lt=W.start,yt=W.end;if(yt===void 0&&(yt=lt),"selectionStart"in P)P.selectionStart=lt,P.selectionEnd=Math.min(yt,P.value.length);else{var bt=P.ownerDocument||document,ft=bt&&bt.defaultView||window;if(ft.getSelection){var pt=ft.getSelection(),$t=P.textContent.length,fe=Math.min(W.start,$t),pn=W.end===void 0?fe:Math.min(W.end,$t);!pt.extend&&fe>pn&&(E=pn,pn=fe,fe=E);var et=Gv(P,fe),J=Gv(P,pn);if(et&&J&&(pt.rangeCount!==1||pt.anchorNode!==et.node||pt.anchorOffset!==et.offset||pt.focusNode!==J.node||pt.focusOffset!==J.offset)){var st=bt.createRange();st.setStart(et.node,et.offset),pt.removeAllRanges(),fe>pn?(pt.addRange(st),pt.extend(J.node,J.offset)):(st.setEnd(J.node,J.offset),pt.addRange(st))}}}}for(bt=[],pt=P;pt=pt.parentNode;)pt.nodeType===1&&bt.push({element:pt,left:pt.scrollLeft,top:pt.scrollTop});for(typeof P.focus=="function"&&P.focus(),P=0;P<bt.length;P++){var St=bt[P];St.element.scrollLeft=St.left,St.element.scrollTop=St.top}}yh=!!Wm,Ym=Wm=null}finally{en=p,B.p=c,z.T=o}}n.current=r,Jn=2}}function rS(){if(Jn===2){Jn=0;var n=bs,r=Ml,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var c=B.p;B.p=2;var p=en;en|=4;try{Uy(n,r.alternate,r)}finally{en=p,B.p=c,z.T=o}}Jn=3}}function aS(){if(Jn===4||Jn===3){Jn=0,H();var n=bs,r=Ml,o=Wa,c=Wy;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?Jn=5:(Jn=0,Ml=bs=null,sS(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(Ms=null),xn(o),r=r.stateNode,At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(wt,r,void 0,(r.current.flags&128)===128)}catch{}if(c!==null){r=z.T,p=B.p,B.p=2,z.T=null;try{for(var g=n.onRecoverableError,E=0;E<c.length;E++){var P=c[E];g(P.value,{componentStack:P.stack})}}finally{z.T=r,B.p=p}}(Wa&3)!==0&&lh(),la(n),p=n.pendingLanes,(o&261930)!==0&&(p&42)!==0?n===Um?au++:(au=0,Um=n):au=0,su(0)}}function sS(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Hc(r)))}function lh(){return iS(),rS(),aS(),oS()}function oS(){if(Jn!==5)return!1;var n=bs,r=Dm;Dm=0;var o=xn(Wa),c=z.T,p=B.p;try{B.p=32>o?32:o,z.T=null,o=Lm,Lm=null;var g=bs,E=Wa;if(Jn=0,Ml=bs=null,Wa=0,(en&6)!==0)throw Error(i(331));var P=en;if(en|=4,Vy(g.current),Iy(g,g.current,E,o),en=P,su(0,!1),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(wt,g)}catch{}return!0}finally{B.p=p,z.T=c,sS(n,r)}}function lS(n,r,o){r=Or(o,r),r=um(n.stateNode,r,2),n=gs(n,r,2),n!==null&&(Jt(n,2),la(n))}function on(n,r,o){if(n.tag===3)lS(n,n,o);else for(;r!==null;){if(r.tag===3){lS(r,n,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ms===null||!Ms.has(c))){n=Or(o,n),o=cy(2),c=gs(r,o,2),c!==null&&(uy(o,c,r,n),Jt(c,2),la(c));break}}r=r.return}}function Pm(n,r,o){var c=n.pingCache;if(c===null){c=n.pingCache=new dA;var p=new Set;c.set(r,p)}else p=c.get(r),p===void 0&&(p=new Set,c.set(r,p));p.has(o)||(wm=!0,p.add(o),n=vA.bind(null,n,r,o),r.then(n,n))}function vA(n,r,o){var c=n.pingCache;c!==null&&c.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,mn===n&&(Ve&o)===o&&(On===4||On===3&&(Ve&62914560)===Ve&&300>C()-nh?(en&2)===0&&bl(n,0):Cm|=o,Sl===Ve&&(Sl=0)),la(n)}function cS(n,r){r===0&&(r=Xe()),n=so(n,r),n!==null&&(Jt(n,r),la(n))}function xA(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),cS(n,o)}function yA(n,r){var o=0;switch(n.tag){case 31:case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:c=n.stateNode;break;case 22:c=n.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(r),cS(n,o)}function SA(n,r){return Te(n,r)}var ch=null,Tl=null,zm=!1,uh=!1,Fm=!1,Ts=0;function la(n){n!==Tl&&n.next===null&&(Tl===null?ch=Tl=n:Tl=Tl.next=n),uh=!0,zm||(zm=!0,bA())}function su(n,r){if(!Fm&&uh){Fm=!0;do for(var o=!1,c=ch;c!==null;){if(n!==0){var p=c.pendingLanes;if(p===0)var g=0;else{var E=c.suspendedLanes,P=c.pingedLanes;g=(1<<31-Pt(42|n)+1)-1,g&=p&~(E&~P),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,dS(c,g))}else g=Ve,g=mt(c,c===mn?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||Xt(c,g)||(o=!0,dS(c,g));c=c.next}while(o);Fm=!1}}function MA(){uS()}function uS(){uh=zm=!1;var n=0;Ts!==0&&NA()&&(n=Ts);for(var r=C(),o=null,c=ch;c!==null;){var p=c.next,g=fS(c,r);g===0?(c.next=null,o===null?ch=p:o.next=p,p===null&&(Tl=o)):(o=c,(n!==0||(g&3)!==0)&&(uh=!0)),c=p}Jn!==0&&Jn!==5||su(n),Ts!==0&&(Ts=0)}function fS(n,r){for(var o=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes&-62914561;0<g;){var E=31-Pt(g),P=1<<E,W=p[E];W===-1?((P&o)===0||(P&c)!==0)&&(p[E]=le(P,r)):W<=r&&(n.expiredLanes|=P),g&=~P}if(r=mn,o=Ve,o=mt(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c=n.callbackNode,o===0||n===r&&(sn===2||sn===9)||n.cancelPendingCommit!==null)return c!==null&&c!==null&&ue(c),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Xt(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(c!==null&&ue(c),xn(o)){case 2:case 8:o=xt;break;case 32:o=dt;break;case 268435456:o=Rt;break;default:o=dt}return c=hS.bind(null,n),o=Te(o,c),n.callbackPriority=r,n.callbackNode=o,r}return c!==null&&c!==null&&ue(c),n.callbackPriority=2,n.callbackNode=null,2}function hS(n,r){if(Jn!==0&&Jn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(lh()&&n.callbackNode!==o)return null;var c=Ve;return c=mt(n,n===mn?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),c===0?null:(qy(n,c,r),fS(n,C()),n.callbackNode!=null&&n.callbackNode===o?hS.bind(null,n):null)}function dS(n,r){if(lh())return null;qy(n,r,!0)}function bA(){PA(function(){(en&6)!==0?Te(vt,MA):uS()})}function Bm(){if(Ts===0){var n=ul;n===0&&(n=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),Ts=n}return Ts}function pS(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:vf(""+n)}function mS(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function EA(n,r,o,c,p){if(r==="submit"&&o&&o.stateNode===p){var g=pS((p[Me]||null).action),E=c.submitter;E&&(r=(r=E[Me]||null)?pS(r.formAction):E.getAttribute("formAction"),r!==null&&(g=r,E=null));var P=new Mf("action","action",null,c,p);n.push({event:P,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ts!==0){var W=E?mS(p,E):new FormData(p);rm(o,{pending:!0,data:W,method:p.method,action:g},null,W)}}else typeof g=="function"&&(P.preventDefault(),W=E?mS(p,E):new FormData(p),rm(o,{pending:!0,data:W,method:p.method,action:g},g,W))},currentTarget:p}]})}}for(var Im=0;Im<Sp.length;Im++){var Hm=Sp[Im],TA=Hm.toLowerCase(),AA=Hm[0].toUpperCase()+Hm.slice(1);Jr(TA,"on"+AA)}Jr(Yv,"onAnimationEnd"),Jr(qv,"onAnimationIteration"),Jr(jv,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(VT,"onTransitionRun"),Jr(kT,"onTransitionStart"),Jr(XT,"onTransitionCancel"),Jr(Zv,"onTransitionEnd"),Ut("onMouseEnter",["mouseout","mouseover"]),Ut("onMouseLeave",["mouseout","mouseover"]),Ut("onPointerEnter",["pointerout","pointerover"]),Ut("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ou="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ou));function gS(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],p=c.event;c=c.listeners;t:{var g=void 0;if(r)for(var E=c.length-1;0<=E;E--){var P=c[E],W=P.instance,lt=P.currentTarget;if(P=P.listener,W!==g&&p.isPropagationStopped())break t;g=P,p.currentTarget=lt;try{g(p)}catch(yt){Tf(yt)}p.currentTarget=null,g=W}else for(E=0;E<c.length;E++){if(P=c[E],W=P.instance,lt=P.currentTarget,P=P.listener,W!==g&&p.isPropagationStopped())break t;g=P,p.currentTarget=lt;try{g(p)}catch(yt){Tf(yt)}p.currentTarget=null,g=W}}}}function Ge(n,r){var o=r[Hn];o===void 0&&(o=r[Hn]=new Set);var c=n+"__bubble";o.has(c)||(_S(r,n,2,!1),o.add(c))}function Gm(n,r,o){var c=0;r&&(c|=4),_S(o,n,c,r)}var fh="_reactListening"+Math.random().toString(36).slice(2);function Vm(n){if(!n[fh]){n[fh]=!0,ut.forEach(function(o){o!=="selectionchange"&&(wA.has(o)||Gm(o,!1,n),Gm(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[fh]||(r[fh]=!0,Gm("selectionchange",!1,r))}}function _S(n,r,o,c){switch(YS(r)){case 2:var p=ew;break;case 8:p=nw;break;default:p=i0}o=p.bind(null,r,o,n),p=void 0,!lp||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function km(n,r,o,c,p){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)t:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var P=c.stateNode.containerInfo;if(P===p)break;if(E===4)for(E=c.return;E!==null;){var W=E.tag;if((W===3||W===4)&&E.stateNode.containerInfo===p)return;E=E.return}for(;P!==null;){if(E=Sn(P),E===null)return;if(W=E.tag,W===5||W===6||W===26||W===27){c=g=E;continue t}P=P.parentNode}}c=c.return}Mv(function(){var lt=g,yt=sp(o),bt=[];t:{var ft=Kv.get(n);if(ft!==void 0){var pt=Mf,$t=n;switch(n){case"keypress":if(yf(o)===0)break t;case"keydown":case"keyup":pt=yT;break;case"focusin":$t="focus",pt=hp;break;case"focusout":$t="blur",pt=hp;break;case"beforeblur":case"afterblur":pt=hp;break;case"click":if(o.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pt=Tv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pt=lT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pt=bT;break;case Yv:case qv:case jv:pt=fT;break;case Zv:pt=TT;break;case"scroll":case"scrollend":pt=sT;break;case"wheel":pt=wT;break;case"copy":case"cut":case"paste":pt=dT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pt=wv;break;case"toggle":case"beforetoggle":pt=RT}var fe=(r&4)!==0,pn=!fe&&(n==="scroll"||n==="scrollend"),et=fe?ft!==null?ft+"Capture":null:ft;fe=[];for(var J=lt,st;J!==null;){var St=J;if(st=St.stateNode,St=St.tag,St!==5&&St!==26&&St!==27||st===null||et===null||(St=Rc(J,et),St!=null&&fe.push(lu(J,St,st))),pn)break;J=J.return}0<fe.length&&(ft=new pt(ft,$t,null,o,yt),bt.push({event:ft,listeners:fe}))}}if((r&7)===0){t:{if(ft=n==="mouseover"||n==="pointerover",pt=n==="mouseout"||n==="pointerout",ft&&o!==ap&&($t=o.relatedTarget||o.fromElement)&&(Sn($t)||$t[Ie]))break t;if((pt||ft)&&(ft=yt.window===yt?yt:(ft=yt.ownerDocument)?ft.defaultView||ft.parentWindow:window,pt?($t=o.relatedTarget||o.toElement,pt=lt,$t=$t?Sn($t):null,$t!==null&&(pn=l($t),fe=$t.tag,$t!==pn||fe!==5&&fe!==27&&fe!==6)&&($t=null)):(pt=null,$t=lt),pt!==$t)){if(fe=Tv,St="onMouseLeave",et="onMouseEnter",J="mouse",(n==="pointerout"||n==="pointerover")&&(fe=wv,St="onPointerLeave",et="onPointerEnter",J="pointer"),pn=pt==null?ft:Ur(pt),st=$t==null?ft:Ur($t),ft=new fe(St,J+"leave",pt,o,yt),ft.target=pn,ft.relatedTarget=st,St=null,Sn(yt)===lt&&(fe=new fe(et,J+"enter",$t,o,yt),fe.target=st,fe.relatedTarget=pn,St=fe),pn=St,pt&&$t)e:{for(fe=CA,et=pt,J=$t,st=0,St=et;St;St=fe(St))st++;St=0;for(var ce=J;ce;ce=fe(ce))St++;for(;0<st-St;)et=fe(et),st--;for(;0<St-st;)J=fe(J),St--;for(;st--;){if(et===J||J!==null&&et===J.alternate){fe=et;break e}et=fe(et),J=fe(J)}fe=null}else fe=null;pt!==null&&vS(bt,ft,pt,fe,!1),$t!==null&&pn!==null&&vS(bt,pn,$t,fe,!0)}}t:{if(ft=lt?Ur(lt):window,pt=ft.nodeName&&ft.nodeName.toLowerCase(),pt==="select"||pt==="input"&&ft.type==="file")var Je=Pv;else if(Nv(ft))if(zv)Je=IT;else{Je=FT;var re=zT}else pt=ft.nodeName,!pt||pt.toLowerCase()!=="input"||ft.type!=="checkbox"&&ft.type!=="radio"?lt&&Jo(lt.elementType)&&(Je=Pv):Je=BT;if(Je&&(Je=Je(n,lt))){Ov(bt,Je,o,yt);break t}re&&re(n,ft,lt),n==="focusout"&&lt&&ft.type==="number"&&lt.memoizedProps.value!=null&&Kr(ft,"number",ft.value)}switch(re=lt?Ur(lt):window,n){case"focusin":(Nv(re)||re.contentEditable==="true")&&(nl=re,vp=lt,Fc=null);break;case"focusout":Fc=vp=nl=null;break;case"mousedown":xp=!0;break;case"contextmenu":case"mouseup":case"dragend":xp=!1,Xv(bt,o,yt);break;case"selectionchange":if(GT)break;case"keydown":case"keyup":Xv(bt,o,yt)}var Ue;if(pp)t:{switch(n){case"compositionstart":var ke="onCompositionStart";break t;case"compositionend":ke="onCompositionEnd";break t;case"compositionupdate":ke="onCompositionUpdate";break t}ke=void 0}else el?Lv(n,o)&&(ke="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ke="onCompositionStart");ke&&(Cv&&o.locale!=="ko"&&(el||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&el&&(Ue=bv()):(cs=yt,cp="value"in cs?cs.value:cs.textContent,el=!0)),re=hh(lt,ke),0<re.length&&(ke=new Av(ke,n,null,o,yt),bt.push({event:ke,listeners:re}),Ue?ke.data=Ue:(Ue=Uv(o),Ue!==null&&(ke.data=Ue)))),(Ue=LT?UT(n,o):NT(n,o))&&(ke=hh(lt,"onBeforeInput"),0<ke.length&&(re=new Av("onBeforeInput","beforeinput",null,o,yt),bt.push({event:re,listeners:ke}),re.data=Ue)),EA(bt,n,lt,o,yt)}gS(bt,r)})}function lu(n,r,o){return{instance:n,listener:r,currentTarget:o}}function hh(n,r){for(var o=r+"Capture",c=[];n!==null;){var p=n,g=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||g===null||(p=Rc(n,o),p!=null&&c.unshift(lu(n,p,g)),p=Rc(n,r),p!=null&&c.push(lu(n,p,g))),n.tag===3)return c;n=n.return}return[]}function CA(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function vS(n,r,o,c,p){for(var g=r._reactName,E=[];o!==null&&o!==c;){var P=o,W=P.alternate,lt=P.stateNode;if(P=P.tag,W!==null&&W===c)break;P!==5&&P!==26&&P!==27||lt===null||(W=lt,p?(lt=Rc(o,g),lt!=null&&E.unshift(lu(o,lt,W))):p||(lt=Rc(o,g),lt!=null&&E.push(lu(o,lt,W)))),o=o.return}E.length!==0&&n.push({event:r,listeners:E})}var RA=/\r\n?/g,DA=/\u0000|\uFFFD/g;function xS(n){return(typeof n=="string"?n:""+n).replace(RA,`
`).replace(DA,"")}function yS(n,r){return r=xS(r),xS(n)===r}function dn(n,r,o,c,p,g){switch(o){case"children":typeof c=="string"?r==="body"||r==="textarea"&&c===""||Oi(n,c):(typeof c=="number"||typeof c=="bigint")&&r!=="body"&&Oi(n,""+c);break;case"className":be(n,"class",c);break;case"tabIndex":be(n,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":be(n,o,c);break;case"style":Ra(n,c,g);break;case"data":if(r!=="object"){be(n,"data",c);break}case"src":case"href":if(c===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=vf(""+c),n.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(r!=="input"&&dn(n,r,"name",p.name,p,null),dn(n,r,"formEncType",p.formEncType,p,null),dn(n,r,"formMethod",p.formMethod,p,null),dn(n,r,"formTarget",p.formTarget,p,null)):(dn(n,r,"encType",p.encType,p,null),dn(n,r,"method",p.method,p,null),dn(n,r,"target",p.target,p,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){n.removeAttribute(o);break}c=vf(""+c),n.setAttribute(o,c);break;case"onClick":c!=null&&(n.onclick=Da);break;case"onScroll":c!=null&&Ge("scroll",n);break;case"onScrollEnd":c!=null&&Ge("scrollend",n);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":n.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){n.removeAttribute("xlink:href");break}o=vf(""+c),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""+c):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":c===!0?n.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?n.setAttribute(o,c):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?n.setAttribute(o,c):n.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?n.removeAttribute(o):n.setAttribute(o,c);break;case"popover":Ge("beforetoggle",n),Ge("toggle",n),me(n,"popover",c);break;case"xlinkActuate":Qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Qt(n,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Qt(n,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Qt(n,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Qt(n,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":me(n,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=rT.get(o)||o,me(n,o,c))}}function Xm(n,r,o,c,p,g){switch(o){case"style":Ra(n,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof c=="string"?Oi(n,c):(typeof c=="number"||typeof c=="bigint")&&Oi(n,""+c);break;case"onScroll":c!=null&&Ge("scroll",n);break;case"onScrollEnd":c!=null&&Ge("scrollend",n);break;case"onClick":c!=null&&(n.onclick=Da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(o))t:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),r=o.slice(2,p?o.length-7:void 0),g=n[Me]||null,g=g!=null?g[o]:null,typeof g=="function"&&n.removeEventListener(r,g,p),typeof c=="function")){typeof g!="function"&&g!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,c,p);break t}o in n?n[o]=c:c===!0?n.setAttribute(o,""):me(n,o,c)}}}function mi(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ge("error",n),Ge("load",n);var c=!1,p=!1,g;for(g in o)if(o.hasOwnProperty(g)){var E=o[g];if(E!=null)switch(g){case"src":c=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:dn(n,r,g,E,o,null)}}p&&dn(n,r,"srcSet",o.srcSet,o,null),c&&dn(n,r,"src",o.src,o,null);return;case"input":Ge("invalid",n);var P=g=E=p=null,W=null,lt=null;for(c in o)if(o.hasOwnProperty(c)){var yt=o[c];if(yt!=null)switch(c){case"name":p=yt;break;case"type":E=yt;break;case"checked":W=yt;break;case"defaultChecked":lt=yt;break;case"value":g=yt;break;case"defaultValue":P=yt;break;case"children":case"dangerouslySetInnerHTML":if(yt!=null)throw Error(i(137,r));break;default:dn(n,r,c,yt,o,null)}}cr(n,g,P,W,lt,E,p,!1);return;case"select":Ge("invalid",n),c=E=g=null;for(p in o)if(o.hasOwnProperty(p)&&(P=o[p],P!=null))switch(p){case"value":g=P;break;case"defaultValue":E=P;break;case"multiple":c=P;default:dn(n,r,p,P,o,null)}r=g,o=E,n.multiple=!!c,r!=null?ur(n,!!c,r,!1):o!=null&&ur(n,!!c,o,!0);return;case"textarea":Ge("invalid",n),g=p=c=null;for(E in o)if(o.hasOwnProperty(E)&&(P=o[E],P!=null))switch(E){case"value":c=P;break;case"defaultValue":p=P;break;case"children":g=P;break;case"dangerouslySetInnerHTML":if(P!=null)throw Error(i(91));break;default:dn(n,r,E,P,o,null)}Gn(n,c,p,g);return;case"option":for(W in o)o.hasOwnProperty(W)&&(c=o[W],c!=null)&&(W==="selected"?n.selected=c&&typeof c!="function"&&typeof c!="symbol":dn(n,r,W,c,o,null));return;case"dialog":Ge("beforetoggle",n),Ge("toggle",n),Ge("cancel",n),Ge("close",n);break;case"iframe":case"object":Ge("load",n);break;case"video":case"audio":for(c=0;c<ou.length;c++)Ge(ou[c],n);break;case"image":Ge("error",n),Ge("load",n);break;case"details":Ge("toggle",n);break;case"embed":case"source":case"link":Ge("error",n),Ge("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(lt in o)if(o.hasOwnProperty(lt)&&(c=o[lt],c!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:dn(n,r,lt,c,o,null)}return;default:if(Jo(r)){for(yt in o)o.hasOwnProperty(yt)&&(c=o[yt],c!==void 0&&Xm(n,r,yt,c,o,void 0));return}}for(P in o)o.hasOwnProperty(P)&&(c=o[P],c!=null&&dn(n,r,P,c,o,null))}function LA(n,r,o,c){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,g=null,E=null,P=null,W=null,lt=null,yt=null;for(pt in o){var bt=o[pt];if(o.hasOwnProperty(pt)&&bt!=null)switch(pt){case"checked":break;case"value":break;case"defaultValue":W=bt;default:c.hasOwnProperty(pt)||dn(n,r,pt,null,c,bt)}}for(var ft in c){var pt=c[ft];if(bt=o[ft],c.hasOwnProperty(ft)&&(pt!=null||bt!=null))switch(ft){case"type":g=pt;break;case"name":p=pt;break;case"checked":lt=pt;break;case"defaultChecked":yt=pt;break;case"value":E=pt;break;case"defaultValue":P=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(i(137,r));break;default:pt!==bt&&dn(n,r,ft,pt,c,bt)}}Ni(n,E,P,W,lt,yt,g,p);return;case"select":pt=E=P=ft=null;for(g in o)if(W=o[g],o.hasOwnProperty(g)&&W!=null)switch(g){case"value":break;case"multiple":pt=W;default:c.hasOwnProperty(g)||dn(n,r,g,null,c,W)}for(p in c)if(g=c[p],W=o[p],c.hasOwnProperty(p)&&(g!=null||W!=null))switch(p){case"value":ft=g;break;case"defaultValue":P=g;break;case"multiple":E=g;default:g!==W&&dn(n,r,p,g,c,W)}r=P,o=E,c=pt,ft!=null?ur(n,!!o,ft,!1):!!c!=!!o&&(r!=null?ur(n,!!o,r,!0):ur(n,!!o,o?[]:"",!1));return;case"textarea":pt=ft=null;for(P in o)if(p=o[P],o.hasOwnProperty(P)&&p!=null&&!c.hasOwnProperty(P))switch(P){case"value":break;case"children":break;default:dn(n,r,P,null,c,p)}for(E in c)if(p=c[E],g=o[E],c.hasOwnProperty(E)&&(p!=null||g!=null))switch(E){case"value":ft=p;break;case"defaultValue":pt=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(i(91));break;default:p!==g&&dn(n,r,E,p,c,g)}nn(n,ft,pt);return;case"option":for(var $t in o)ft=o[$t],o.hasOwnProperty($t)&&ft!=null&&!c.hasOwnProperty($t)&&($t==="selected"?n.selected=!1:dn(n,r,$t,null,c,ft));for(W in c)ft=c[W],pt=o[W],c.hasOwnProperty(W)&&ft!==pt&&(ft!=null||pt!=null)&&(W==="selected"?n.selected=ft&&typeof ft!="function"&&typeof ft!="symbol":dn(n,r,W,ft,c,pt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in o)ft=o[fe],o.hasOwnProperty(fe)&&ft!=null&&!c.hasOwnProperty(fe)&&dn(n,r,fe,null,c,ft);for(lt in c)if(ft=c[lt],pt=o[lt],c.hasOwnProperty(lt)&&ft!==pt&&(ft!=null||pt!=null))switch(lt){case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(i(137,r));break;default:dn(n,r,lt,ft,c,pt)}return;default:if(Jo(r)){for(var pn in o)ft=o[pn],o.hasOwnProperty(pn)&&ft!==void 0&&!c.hasOwnProperty(pn)&&Xm(n,r,pn,void 0,c,ft);for(yt in c)ft=c[yt],pt=o[yt],!c.hasOwnProperty(yt)||ft===pt||ft===void 0&&pt===void 0||Xm(n,r,yt,ft,c,pt);return}}for(var et in o)ft=o[et],o.hasOwnProperty(et)&&ft!=null&&!c.hasOwnProperty(et)&&dn(n,r,et,null,c,ft);for(bt in c)ft=c[bt],pt=o[bt],!c.hasOwnProperty(bt)||ft===pt||ft==null&&pt==null||dn(n,r,bt,ft,c,pt)}function SS(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function UA(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,o=performance.getEntriesByType("resource"),c=0;c<o.length;c++){var p=o[c],g=p.transferSize,E=p.initiatorType,P=p.duration;if(g&&P&&SS(E)){for(E=0,P=p.responseEnd,c+=1;c<o.length;c++){var W=o[c],lt=W.startTime;if(lt>P)break;var yt=W.transferSize,bt=W.initiatorType;yt&&SS(bt)&&(W=W.responseEnd,E+=yt*(W<P?1:(P-lt)/(W-lt)))}if(--c,r+=8*(g+E)/(p.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Wm=null,Ym=null;function dh(n){return n.nodeType===9?n:n.ownerDocument}function MS(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bS(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function qm(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var jm=null;function NA(){var n=window.event;return n&&n.type==="popstate"?n===jm?!1:(jm=n,!0):(jm=null,!1)}var ES=typeof setTimeout=="function"?setTimeout:void 0,OA=typeof clearTimeout=="function"?clearTimeout:void 0,TS=typeof Promise=="function"?Promise:void 0,PA=typeof queueMicrotask=="function"?queueMicrotask:typeof TS<"u"?function(n){return TS.resolve(null).then(n).catch(zA)}:ES;function zA(n){setTimeout(function(){throw n})}function As(n){return n==="head"}function AS(n,r){var o=r,c=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(c===0){n.removeChild(p),Rl(r);return}c--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")c++;else if(o==="html")cu(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,cu(o);for(var g=o.firstChild;g;){var E=g.nextSibling,P=g.nodeName;g[yn]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&g.rel.toLowerCase()==="stylesheet"||o.removeChild(g),g=E}}else o==="body"&&cu(n.ownerDocument.body);o=p}while(o);Rl(r)}function wS(n,r){var o=n;n=0;do{var c=o.nextSibling;if(o.nodeType===1?r?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(r?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=c}while(o)}function Zm(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Zm(o),Rn(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function FA(n,r,o,c){for(;n.nodeType===1;){var p=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!c&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(c){if(!n[yn])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(g=n.getAttribute("rel"),g==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(g!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(g=n.getAttribute("src"),(g!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&g&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var g=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===g)return n}else return n;if(n=Ir(n.nextSibling),n===null)break}return null}function BA(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Ir(n.nextSibling),n===null))return null;return n}function CS(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=Ir(n.nextSibling),n===null))return null;return n}function Km(n){return n.data==="$?"||n.data==="$~"}function Qm(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function IA(n,r){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||o.readyState!=="loading")r();else{var c=function(){r(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),n._reactRetry=c}}function Ir(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var Jm=null;function RS(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(r===0)return Ir(n.nextSibling);r--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||r++}n=n.nextSibling}return null}function DS(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(r===0)return n;r--}else o!=="/$"&&o!=="/&"||r++}n=n.previousSibling}return null}function LS(n,r,o){switch(r=dh(o),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function cu(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Rn(n)}var Hr=new Map,US=new Set;function ph(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ya=B.d;B.d={f:HA,r:GA,D:VA,C:kA,L:XA,m:WA,X:qA,S:YA,M:jA};function HA(){var n=Ya.f(),r=ah();return n||r}function GA(n){var r=xi(n);r!==null&&r.tag===5&&r.type==="form"?Zx(r):Ya.r(n)}var Al=typeof document>"u"?null:document;function NS(n,r,o){var c=Al;if(c&&typeof r=="string"&&r){var p=Se(r);p='link[rel="'+n+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),US.has(p)||(US.add(p),n={rel:n,crossOrigin:o,href:r},c.querySelector(p)===null&&(r=c.createElement("link"),mi(r,"link",n),j(r),c.head.appendChild(r)))}}function VA(n){Ya.D(n),NS("dns-prefetch",n,null)}function kA(n,r){Ya.C(n,r),NS("preconnect",n,r)}function XA(n,r,o){Ya.L(n,r,o);var c=Al;if(c&&n&&r){var p='link[rel="preload"][as="'+Se(r)+'"]';r==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+Se(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+Se(o.imageSizes)+'"]')):p+='[href="'+Se(n)+'"]';var g=p;switch(r){case"style":g=wl(n);break;case"script":g=Cl(n)}Hr.has(g)||(n=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),Hr.set(g,n),c.querySelector(p)!==null||r==="style"&&c.querySelector(uu(g))||r==="script"&&c.querySelector(fu(g))||(r=c.createElement("link"),mi(r,"link",n),j(r),c.head.appendChild(r)))}}function WA(n,r){Ya.m(n,r);var o=Al;if(o&&n){var c=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+Se(c)+'"][href="'+Se(n)+'"]',g=p;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=Cl(n)}if(!Hr.has(g)&&(n=v({rel:"modulepreload",href:n},r),Hr.set(g,n),o.querySelector(p)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(fu(g)))return}c=o.createElement("link"),mi(c,"link",n),j(c),o.head.appendChild(c)}}}function YA(n,r,o){Ya.S(n,r,o);var c=Al;if(c&&n){var p=N(c).hoistableStyles,g=wl(n);r=r||"default";var E=p.get(g);if(!E){var P={loading:0,preload:null};if(E=c.querySelector(uu(g)))P.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":r},o),(o=Hr.get(g))&&$m(n,o);var W=E=c.createElement("link");j(W),mi(W,"link",n),W._p=new Promise(function(lt,yt){W.onload=lt,W.onerror=yt}),W.addEventListener("load",function(){P.loading|=1}),W.addEventListener("error",function(){P.loading|=2}),P.loading|=4,mh(E,r,c)}E={type:"stylesheet",instance:E,count:1,state:P},p.set(g,E)}}}function qA(n,r){Ya.X(n,r);var o=Al;if(o&&n){var c=N(o).hoistableScripts,p=Cl(n),g=c.get(p);g||(g=o.querySelector(fu(p)),g||(n=v({src:n,async:!0},r),(r=Hr.get(p))&&t0(n,r),g=o.createElement("script"),j(g),mi(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function jA(n,r){Ya.M(n,r);var o=Al;if(o&&n){var c=N(o).hoistableScripts,p=Cl(n),g=c.get(p);g||(g=o.querySelector(fu(p)),g||(n=v({src:n,async:!0,type:"module"},r),(r=Hr.get(p))&&t0(n,r),g=o.createElement("script"),j(g),mi(g,"link",n),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(p,g))}}function OS(n,r,o,c){var p=(p=it.current)?ph(p):null;if(!p)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=wl(o.href),o=N(p).hoistableStyles,c=o.get(r),c||(c={type:"style",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=wl(o.href);var g=N(p).hoistableStyles,E=g.get(n);if(E||(p=p.ownerDocument||p,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(n,E),(g=p.querySelector(uu(n)))&&!g._p&&(E.instance=g,E.state.loading=5),Hr.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Hr.set(n,o),g||ZA(p,n,o,E.state))),r&&c===null)throw Error(i(528,""));return E}if(r&&c!==null)throw Error(i(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Cl(o),o=N(p).hoistableScripts,c=o.get(r),c||(c={type:"script",instance:null,count:0,state:null},o.set(r,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function wl(n){return'href="'+Se(n)+'"'}function uu(n){return'link[rel="stylesheet"]['+n+"]"}function PS(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function ZA(n,r,o,c){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?c.loading=1:(r=n.createElement("link"),c.preload=r,r.addEventListener("load",function(){return c.loading|=1}),r.addEventListener("error",function(){return c.loading|=2}),mi(r,"link",o),j(r),n.head.appendChild(r))}function Cl(n){return'[src="'+Se(n)+'"]'}function fu(n){return"script[async]"+n}function zS(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var c=n.querySelector('style[data-href~="'+Se(o.href)+'"]');if(c)return r.instance=c,j(c),c;var p=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(n.ownerDocument||n).createElement("style"),j(c),mi(c,"style",p),mh(c,o.precedence,n),r.instance=c;case"stylesheet":p=wl(o.href);var g=n.querySelector(uu(p));if(g)return r.state.loading|=4,r.instance=g,j(g),g;c=PS(o),(p=Hr.get(p))&&$m(c,p),g=(n.ownerDocument||n).createElement("link"),j(g);var E=g;return E._p=new Promise(function(P,W){E.onload=P,E.onerror=W}),mi(g,"link",c),r.state.loading|=4,mh(g,o.precedence,n),r.instance=g;case"script":return g=Cl(o.src),(p=n.querySelector(fu(g)))?(r.instance=p,j(p),p):(c=o,(p=Hr.get(g))&&(c=v({},o),t0(c,p)),n=n.ownerDocument||n,p=n.createElement("script"),j(p),mi(p,"link",c),n.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(c=r.instance,r.state.loading|=4,mh(c,o.precedence,n));return r.instance}function mh(n,r,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=c.length?c[c.length-1]:null,g=p,E=0;E<c.length;E++){var P=c[E];if(P.dataset.precedence===r)g=P;else if(g!==p)break}g?g.parentNode.insertBefore(n,g.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function $m(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function t0(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var gh=null;function FS(n,r,o){if(gh===null){var c=new Map,p=gh=new Map;p.set(o,c)}else p=gh,c=p.get(o),c||(c=new Map,p.set(o,c));if(c.has(n))return c;for(c.set(n,null),o=o.getElementsByTagName(n),p=0;p<o.length;p++){var g=o[p];if(!(g[yn]||g[we]||n==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var E=g.getAttribute(r)||"";E=n+E;var P=c.get(E);P?P.push(g):c.set(E,[g])}}return c}function BS(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function KA(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;return r.rel==="stylesheet"?(n=r.disabled,typeof r.precedence=="string"&&n==null):!0;case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function IS(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function QA(n,r,o,c){if(o.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=wl(c.href),g=r.querySelector(uu(p));if(g){r=g._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=_h.bind(n),r.then(n,n)),o.state.loading|=4,o.instance=g,j(g);return}g=r.ownerDocument||r,c=PS(c),(p=Hr.get(p))&&$m(c,p),g=g.createElement("link"),j(g);var E=g;E._p=new Promise(function(P,W){E.onload=P,E.onerror=W}),mi(g,"link",c),o.instance=g}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,r),(r=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=_h.bind(n),r.addEventListener("load",o),r.addEventListener("error",o))}}var e0=0;function JA(n,r){return n.stylesheets&&n.count===0&&xh(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var c=setTimeout(function(){if(n.stylesheets&&xh(n,n.stylesheets),n.unsuspend){var g=n.unsuspend;n.unsuspend=null,g()}},6e4+r);0<n.imgBytes&&e0===0&&(e0=62500*UA());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&xh(n,n.stylesheets),n.unsuspend)){var g=n.unsuspend;n.unsuspend=null,g()}},(n.imgBytes>e0?50:800)+r);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(c),clearTimeout(p)}}:null}function _h(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xh(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var vh=null;function xh(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,vh=new Map,r.forEach($A,n),vh=null,_h.call(n))}function $A(n,r){if(!(r.state.loading&4)){var o=vh.get(n);if(o)var c=o.get(null);else{o=new Map,vh.set(n,o);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<p.length;g++){var E=p[g];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),c=E)}c&&o.set(null,c)}p=r.instance,E=p.getAttribute("data-precedence"),g=o.get(E)||c,g===c&&o.set(null,p),o.set(E,p),this.count++,c=_h.bind(this),p.addEventListener("load",c),p.addEventListener("error",c),g?g.parentNode.insertBefore(p,g.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),r.state.loading|=4}}var hu={$$typeof:L,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function tw(n,r,o,c,p,g,E,P,W){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kt(0),this.hiddenUpdates=kt(null),this.identifierPrefix=c,this.onUncaughtError=p,this.onCaughtError=g,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function HS(n,r,o,c,p,g,E,P,W,lt,yt,bt){return n=new tw(n,r,o,E,W,lt,yt,bt,P),r=1,g===!0&&(r|=24),g=hr(3,null,null,r),n.current=g,g.stateNode=n,r=Op(),r.refCount++,n.pooledCache=r,r.refCount++,g.memoizedState={element:c,isDehydrated:o,cache:r},Bp(g),n}function GS(n){return n?(n=al,n):al}function VS(n,r,o,c,p,g){p=GS(p),c.context===null?c.context=p:c.pendingContext=p,c=ms(r),c.payload={element:o},g=g===void 0?null:g,g!==null&&(c.callback=g),o=gs(n,c,r),o!==null&&(Zi(o,n,r),Xc(o,n,r))}function kS(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function n0(n,r){kS(n,r),(n=n.alternate)&&kS(n,r)}function XS(n){if(n.tag===13||n.tag===31){var r=so(n,67108864);r!==null&&Zi(r,n,67108864),n0(n,67108864)}}function WS(n){if(n.tag===13||n.tag===31){var r=_r();r=de(r);var o=so(n,r);o!==null&&Zi(o,n,r),n0(n,r)}}var yh=!0;function ew(n,r,o,c){var p=z.T;z.T=null;var g=B.p;try{B.p=2,i0(n,r,o,c)}finally{B.p=g,z.T=p}}function nw(n,r,o,c){var p=z.T;z.T=null;var g=B.p;try{B.p=8,i0(n,r,o,c)}finally{B.p=g,z.T=p}}function i0(n,r,o,c){if(yh){var p=r0(c);if(p===null)km(n,r,c,Sh,o),qS(n,c);else if(rw(p,n,r,o,c))c.stopPropagation();else if(qS(n,c),r&4&&-1<iw.indexOf(n)){for(;p!==null;){var g=xi(p);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var E=Tt(g.pendingLanes);if(E!==0){var P=g;for(P.pendingLanes|=2,P.entangledLanes|=2;E;){var W=1<<31-Pt(E);P.entanglements[1]|=W,E&=~W}la(g),(en&6)===0&&(ih=C()+500,su(0))}}break;case 31:case 13:P=so(g,2),P!==null&&Zi(P,g,2),ah(),n0(g,2)}if(g=r0(c),g===null&&km(n,r,c,Sh,o),g===p)break;p=g}p!==null&&c.stopPropagation()}else km(n,r,c,null,o)}}function r0(n){return n=sp(n),a0(n)}var Sh=null;function a0(n){if(Sh=null,n=Sn(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=u(r),n!==null)return n;n=null}else if(o===31){if(n=f(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Sh=n,null}function YS(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case vt:return 2;case xt:return 8;case dt:case Vt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var s0=!1,ws=null,Cs=null,Rs=null,du=new Map,pu=new Map,Ds=[],iw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function qS(n,r){switch(n){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":Cs=null;break;case"mouseover":case"mouseout":Rs=null;break;case"pointerover":case"pointerout":du.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":pu.delete(r.pointerId)}}function mu(n,r,o,c,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},r!==null&&(r=xi(r),r!==null&&XS(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function rw(n,r,o,c,p){switch(r){case"focusin":return ws=mu(ws,n,r,o,c,p),!0;case"dragenter":return Cs=mu(Cs,n,r,o,c,p),!0;case"mouseover":return Rs=mu(Rs,n,r,o,c,p),!0;case"pointerover":var g=p.pointerId;return du.set(g,mu(du.get(g)||null,n,r,o,c,p)),!0;case"gotpointercapture":return g=p.pointerId,pu.set(g,mu(pu.get(g)||null,n,r,o,c,p)),!0}return!1}function jS(n){var r=Sn(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=u(o),r!==null){n.blockedOn=r,cn(n.priority,function(){WS(o)});return}}else if(r===31){if(r=f(o),r!==null){n.blockedOn=r,cn(n.priority,function(){WS(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=r0(n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);ap=c,o.target.dispatchEvent(c),ap=null}else return r=xi(o),r!==null&&XS(r),n.blockedOn=o,!1;r.shift()}return!0}function ZS(n,r,o){Mh(n)&&o.delete(r)}function aw(){s0=!1,ws!==null&&Mh(ws)&&(ws=null),Cs!==null&&Mh(Cs)&&(Cs=null),Rs!==null&&Mh(Rs)&&(Rs=null),du.forEach(ZS),pu.forEach(ZS)}function bh(n,r){n.blockedOn===r&&(n.blockedOn=null,s0||(s0=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,aw)))}var Eh=null;function KS(n){Eh!==n&&(Eh=n,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Eh===n&&(Eh=null);for(var r=0;r<n.length;r+=3){var o=n[r],c=n[r+1],p=n[r+2];if(typeof c!="function"){if(a0(c||o)===null)continue;break}var g=xi(o);g!==null&&(n.splice(r,3),r-=3,rm(g,{pending:!0,data:p,method:o.method,action:c},c,p))}}))}function Rl(n){function r(W){return bh(W,n)}ws!==null&&bh(ws,n),Cs!==null&&bh(Cs,n),Rs!==null&&bh(Rs,n),du.forEach(r),pu.forEach(r);for(var o=0;o<Ds.length;o++){var c=Ds[o];c.blockedOn===n&&(c.blockedOn=null)}for(;0<Ds.length&&(o=Ds[0],o.blockedOn===null);)jS(o),o.blockedOn===null&&Ds.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var p=o[c],g=o[c+1],E=p[Me]||null;if(typeof g=="function")E||KS(o);else if(E){var P=null;if(g&&g.hasAttribute("formAction")){if(p=g,E=g[Me]||null)P=E.formAction;else if(a0(p)!==null)continue}else P=E.action;typeof P=="function"?o[c+1]=P:(o.splice(c,3),c-=3),KS(o)}}}function QS(){function n(g){g.canIntercept&&g.info==="react-transition"&&g.intercept({handler:function(){return new Promise(function(E){return p=E})},focusReset:"manual",scroll:"manual"})}function r(){p!==null&&(p(),p=null),c||setTimeout(o,20)}function o(){if(!c&&!navigation.transition){var g=navigation.currentEntry;g&&g.url!=null&&navigation.navigate(g.url,{state:g.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(o,100),function(){c=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),p!==null&&(p(),p=null)}}}function o0(n){this._internalRoot=n}Th.prototype.render=o0.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var o=r.current,c=_r();VS(o,c,n,r,null,null)},Th.prototype.unmount=o0.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;VS(n.current,2,null,n,null,null),ah(),r[Ie]=null}};function Th(n){this._internalRoot=n}Th.prototype.unstable_scheduleHydration=function(n){if(n){var r=ve();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Ds.length&&r!==0&&r<Ds[o].priority;o++);Ds.splice(o,0,n),o===0&&jS(n)}};var JS=t.version;if(JS!=="19.2.5")throw Error(i(527,JS,"19.2.5"));B.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=h(r),n=n!==null?m(n):null,n=n===null?null:n.stateNode,n};var sw={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ah=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ah.isDisabled&&Ah.supportsFiber)try{wt=Ah.inject(sw),At=Ah}catch{}}return _u.createRoot=function(n,r){if(!a(n))throw Error(i(299));var o=!1,c="",p=ay,g=sy,E=oy;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(g=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError)),r=HS(n,1,!1,null,null,o,c,null,p,g,E,QS),n[Ie]=r.current,Vm(n),new o0(r)},_u.hydrateRoot=function(n,r,o){if(!a(n))throw Error(i(299));var c=!1,p="",g=ay,E=sy,P=oy,W=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(P=o.onRecoverableError),o.formState!==void 0&&(W=o.formState)),r=HS(n,1,!0,r,o??null,c,p,W,g,E,P,QS),r.context=GS(null),o=r.current,c=_r(),c=de(c),p=ms(c),p.callback=null,gs(o,p,c),o=c,r.current.lanes=o,Jt(r,o),la(r),n[Ie]=r.current,Vm(n),new Th(r)},_u.version="19.2.5",_u}var lM;function gw(){if(lM)return c0.exports;lM=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),c0.exports=mw(),c0.exports}var _w=gw(),Ce=A_();const w_="183",vw=0,cM=1,xw=2,md=1,eb=2,Du=3,as=0,er=1,pa=2,ya=0,nc=1,ug=2,uM=3,fM=4,yw=5,Lo=100,Sw=101,Mw=102,bw=103,Ew=104,Tw=200,Aw=201,ww=202,Cw=203,fg=204,hg=205,Rw=206,Dw=207,Lw=208,Uw=209,Nw=210,Ow=211,Pw=212,zw=213,Fw=214,dg=0,pg=1,mg=2,fc=3,gg=4,_g=5,vg=6,xg=7,nb=0,Bw=1,Iw=2,Sa=0,C_=1,R_=2,D_=3,df=4,L_=5,U_=6,N_=7,ib=300,Wo=301,hc=302,p0=303,m0=304,Kd=306,Ud=1e3,es=1001,yg=1002,gi=1003,Hw=1004,wh=1005,ci=1006,g0=1007,No=1008,$i=1009,rb=1010,ab=1011,Qu=1012,O_=1013,Ta=1014,ga=1015,nr=1016,P_=1017,z_=1018,Ju=1020,sb=35902,ob=35899,lb=1021,cb=1022,Yr=1023,ss=1026,Oo=1027,ub=1028,F_=1029,dc=1030,B_=1031,I_=1033,gd=33776,_d=33777,vd=33778,xd=33779,Sg=35840,Mg=35841,bg=35842,Eg=35843,Tg=36196,Ag=37492,wg=37496,Cg=37488,Rg=37489,Dg=37490,Lg=37491,Ug=37808,Ng=37809,Og=37810,Pg=37811,zg=37812,Fg=37813,Bg=37814,Ig=37815,Hg=37816,Gg=37817,Vg=37818,kg=37819,Xg=37820,Wg=37821,Yg=36492,qg=36494,jg=36495,Zg=36283,Kg=36284,Qg=36285,Jg=36286,Gw=3200,fb=0,Vw=1,Gs="",Ji="srgb",pc="srgb-linear",Nd="linear",rn="srgb",Dl=7680,hM=519,kw=512,Xw=513,Ww=514,H_=515,Yw=516,qw=517,G_=518,jw=519,dM=35044,pM="300 es",_a=2e3,$u=2001;function Zw(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function tf(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kw(){const s=tf("canvas");return s.style.display="block",s}const mM={};function gM(...s){const t="THREE."+s.shift();console.log(t,...s)}function hb(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xe(...s){s=hb(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function tn(...s){s=hb(s);const t="THREE."+s.shift();{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Od(...s){const t=s.join(" ");t in mM||(mM[t]=!0,xe(...s))}function Qw(s,t,e){return new Promise(function(i,a){function l(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:i()}}setTimeout(l,e)})}const Jw={[dg]:pg,[mg]:vg,[gg]:xg,[fc]:_g,[pg]:dg,[vg]:mg,[xg]:gg,[_g]:fc};class Ec{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const l=a.indexOf(e);l!==-1&&a.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,t);t.target=null}}}const Si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yd=Math.PI/180,Pd=180/Math.PI;function pf(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Si[s&255]+Si[s>>8&255]+Si[s>>16&255]+Si[s>>24&255]+"-"+Si[t&255]+Si[t>>8&255]+"-"+Si[t>>16&15|64]+Si[t>>24&255]+"-"+Si[e&63|128]+Si[e>>8&255]+"-"+Si[e>>16&255]+Si[e>>24&255]+Si[i&255]+Si[i>>8&255]+Si[i>>16&255]+Si[i>>24&255]).toLowerCase()}function Ye(s,t,e){return Math.max(t,Math.min(e,s))}function $w(s,t){return(s%t+t)%t}function _0(s,t,e){return(1-e)*s+e*t}function vu(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ki(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class De{constructor(t=0,e=0){De.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ye(this.x,t.x,e.x),this.y=Ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ye(this.x,t,e),this.y=Ye(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),l=this.x-t.x,u=this.y-t.y;return this.x=l*i-u*a+t.x,this.y=l*a+u*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tc{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,l,u,f){let d=i[a+0],h=i[a+1],m=i[a+2],v=i[a+3],_=l[u+0],x=l[u+1],S=l[u+2],b=l[u+3];if(v!==b||d!==_||h!==x||m!==S){let y=d*_+h*x+m*S+v*b;y<0&&(_=-_,x=-x,S=-S,b=-b,y=-y);let M=1-f;if(y<.9995){const A=Math.acos(y),L=Math.sin(A);M=Math.sin(M*A)/L,f=Math.sin(f*A)/L,d=d*M+_*f,h=h*M+x*f,m=m*M+S*f,v=v*M+b*f}else{d=d*M+_*f,h=h*M+x*f,m=m*M+S*f,v=v*M+b*f;const A=1/Math.sqrt(d*d+h*h+m*m+v*v);d*=A,h*=A,m*=A,v*=A}}t[e]=d,t[e+1]=h,t[e+2]=m,t[e+3]=v}static multiplyQuaternionsFlat(t,e,i,a,l,u){const f=i[a],d=i[a+1],h=i[a+2],m=i[a+3],v=l[u],_=l[u+1],x=l[u+2],S=l[u+3];return t[e]=f*S+m*v+d*x-h*_,t[e+1]=d*S+m*_+h*v-f*x,t[e+2]=h*S+m*x+f*_-d*v,t[e+3]=m*S-f*v-d*_-h*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,l=t._z,u=t._order,f=Math.cos,d=Math.sin,h=f(i/2),m=f(a/2),v=f(l/2),_=d(i/2),x=d(a/2),S=d(l/2);switch(u){case"XYZ":this._x=_*m*v+h*x*S,this._y=h*x*v-_*m*S,this._z=h*m*S+_*x*v,this._w=h*m*v-_*x*S;break;case"YXZ":this._x=_*m*v+h*x*S,this._y=h*x*v-_*m*S,this._z=h*m*S-_*x*v,this._w=h*m*v+_*x*S;break;case"ZXY":this._x=_*m*v-h*x*S,this._y=h*x*v+_*m*S,this._z=h*m*S+_*x*v,this._w=h*m*v-_*x*S;break;case"ZYX":this._x=_*m*v-h*x*S,this._y=h*x*v+_*m*S,this._z=h*m*S-_*x*v,this._w=h*m*v+_*x*S;break;case"YZX":this._x=_*m*v+h*x*S,this._y=h*x*v+_*m*S,this._z=h*m*S-_*x*v,this._w=h*m*v-_*x*S;break;case"XZY":this._x=_*m*v-h*x*S,this._y=h*x*v-_*m*S,this._z=h*m*S+_*x*v,this._w=h*m*v+_*x*S;break;default:xe("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],l=e[8],u=e[1],f=e[5],d=e[9],h=e[2],m=e[6],v=e[10],_=i+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-a)*x}else if(i>f&&i>v){const x=2*Math.sqrt(1+i-f-v);this._w=(m-d)/x,this._x=.25*x,this._y=(a+u)/x,this._z=(l+h)/x}else if(f>v){const x=2*Math.sqrt(1+f-i-v);this._w=(l-h)/x,this._x=(a+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+v-i-f);this._w=(u-a)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,l=t._z,u=t._w,f=e._x,d=e._y,h=e._z,m=e._w;return this._x=i*m+u*f+a*h-l*d,this._y=a*m+u*d+l*f-i*h,this._z=l*m+u*h+i*d-a*f,this._w=u*m-i*f-a*d-l*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,a=t._y,l=t._z,u=t._w,f=this.dot(t);f<0&&(i=-i,a=-a,l=-l,u=-u,f=-f);let d=1-e;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,e=Math.sin(e*h)/m,this._x=this._x*d+i*e,this._y=this._y*d+a*e,this._z=this._z*d+l*e,this._w=this._w*d+u*e,this._onChangeCallback()}else this._x=this._x*d+i*e,this._y=this._y*d+a*e,this._z=this._z*d+l*e,this._w=this._w*d+u*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(t=0,e=0,i=0){nt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_M.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_M.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*a,this.y=l[1]*e+l[4]*i+l[7]*a,this.z=l[2]*e+l[5]*i+l[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=t.elements,u=1/(l[3]*e+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*a+l[12])*u,this.y=(l[1]*e+l[5]*i+l[9]*a+l[13])*u,this.z=(l[2]*e+l[6]*i+l[10]*a+l[14])*u,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,l=t.x,u=t.y,f=t.z,d=t.w,h=2*(u*a-f*i),m=2*(f*e-l*a),v=2*(l*i-u*e);return this.x=e+d*h+u*v-f*m,this.y=i+d*m+f*h-l*v,this.z=a+d*v+l*m-u*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*a,this.y=l[1]*e+l[5]*i+l[9]*a,this.z=l[2]*e+l[6]*i+l[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ye(this.x,t.x,e.x),this.y=Ye(this.y,t.y,e.y),this.z=Ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ye(this.x,t,e),this.y=Ye(this.y,t,e),this.z=Ye(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,l=t.z,u=e.x,f=e.y,d=e.z;return this.x=a*d-l*f,this.y=l*u-i*d,this.z=i*f-a*u,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return v0.copy(this).projectOnVector(t),this.sub(v0)}reflect(t){return this.sub(v0.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const v0=new nt,_M=new Tc;class Ne{constructor(t,e,i,a,l,u,f,d,h){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,u,f,d,h)}set(t,e,i,a,l,u,f,d,h){const m=this.elements;return m[0]=t,m[1]=a,m[2]=f,m[3]=e,m[4]=l,m[5]=d,m[6]=i,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,u=i[0],f=i[3],d=i[6],h=i[1],m=i[4],v=i[7],_=i[2],x=i[5],S=i[8],b=a[0],y=a[3],M=a[6],A=a[1],L=a[4],w=a[7],U=a[2],O=a[5],R=a[8];return l[0]=u*b+f*A+d*U,l[3]=u*y+f*L+d*O,l[6]=u*M+f*w+d*R,l[1]=h*b+m*A+v*U,l[4]=h*y+m*L+v*O,l[7]=h*M+m*w+v*R,l[2]=_*b+x*A+S*U,l[5]=_*y+x*L+S*O,l[8]=_*M+x*w+S*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],u=t[4],f=t[5],d=t[6],h=t[7],m=t[8];return e*u*m-e*f*h-i*l*m+i*f*d+a*l*h-a*u*d}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],u=t[4],f=t[5],d=t[6],h=t[7],m=t[8],v=m*u-f*h,_=f*d-m*l,x=h*l-u*d,S=e*v+i*_+a*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/S;return t[0]=v*b,t[1]=(a*h-m*i)*b,t[2]=(f*i-a*u)*b,t[3]=_*b,t[4]=(m*e-a*d)*b,t[5]=(a*l-f*e)*b,t[6]=x*b,t[7]=(i*d-h*e)*b,t[8]=(u*e-i*l)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,l,u,f){const d=Math.cos(l),h=Math.sin(l);return this.set(i*d,i*h,-i*(d*u+h*f)+u+t,-a*h,a*d,-a*(-h*u+d*f)+f+e,0,0,1),this}scale(t,e){return this.premultiply(x0.makeScale(t,e)),this}rotate(t){return this.premultiply(x0.makeRotation(-t)),this}translate(t,e){return this.premultiply(x0.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const x0=new Ne,vM=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xM=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function t2(){const s={enabled:!0,workingColorSpace:pc,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===rn&&(a.r=is(a.r),a.g=is(a.g),a.b=is(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===rn&&(a.r=ic(a.r),a.g=ic(a.g),a.b=ic(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Gs?Nd:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Od("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Od("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[pc]:{primaries:t,whitePoint:i,transfer:Nd,toXYZ:vM,fromXYZ:xM,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ji},outputColorSpaceConfig:{drawingBufferColorSpace:Ji}},[Ji]:{primaries:t,whitePoint:i,transfer:rn,toXYZ:vM,fromXYZ:xM,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ji}}}),s}const Ze=t2();function is(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ic(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ll;class e2{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ll===void 0&&(Ll=tf("canvas")),Ll.width=t.width,Ll.height=t.height;const a=Ll.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Ll}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=tf("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=is(l[u]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(is(e[i]/255)*255):e[i]=is(e[i]);return{data:e,width:t.width,height:t.height}}else return xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let n2=0;class V_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n2++}),this.uuid=pf(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(y0(a[u].image)):l.push(y0(a[u]))}else l=y0(a);i.url=l}return e||(t.images[this.uuid]=i),i}}function y0(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?e2.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xe("Texture: Unable to serialize Texture."),{})}let i2=0;const S0=new nt;class Ci extends Ec{constructor(t=Ci.DEFAULT_IMAGE,e=Ci.DEFAULT_MAPPING,i=es,a=es,l=ci,u=No,f=Yr,d=$i,h=Ci.DEFAULT_ANISOTROPY,m=Gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i2++}),this.uuid=pf(),this.name="",this.source=new V_(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(S0).x}get height(){return this.source.getSize(S0).y}get depth(){return this.source.getSize(S0).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){xe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){xe(`Texture.setValues(): property '${e}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ib)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ud:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case yg:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ud:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case yg:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ci.DEFAULT_IMAGE=null;Ci.DEFAULT_MAPPING=ib;Ci.DEFAULT_ANISOTROPY=1;class Cn{constructor(t=0,e=0,i=0,a=1){Cn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=this.w,u=t.elements;return this.x=u[0]*e+u[4]*i+u[8]*a+u[12]*l,this.y=u[1]*e+u[5]*i+u[9]*a+u[13]*l,this.z=u[2]*e+u[6]*i+u[10]*a+u[14]*l,this.w=u[3]*e+u[7]*i+u[11]*a+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,l;const d=t.elements,h=d[0],m=d[4],v=d[8],_=d[1],x=d[5],S=d[9],b=d[2],y=d[6],M=d[10];if(Math.abs(m-_)<.01&&Math.abs(v-b)<.01&&Math.abs(S-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(v+b)<.1&&Math.abs(S+y)<.1&&Math.abs(h+x+M-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(h+1)/2,w=(x+1)/2,U=(M+1)/2,O=(m+_)/4,R=(v+b)/4,T=(S+y)/4;return L>w&&L>U?L<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(L),a=O/i,l=R/i):w>U?w<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(w),i=O/a,l=T/a):U<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(U),i=R/l,a=T/l),this.set(i,a,l,e),this}let A=Math.sqrt((y-S)*(y-S)+(v-b)*(v-b)+(_-m)*(_-m));return Math.abs(A)<.001&&(A=1),this.x=(y-S)/A,this.y=(v-b)/A,this.z=(_-m)/A,this.w=Math.acos((h+x+M-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ye(this.x,t.x,e.x),this.y=Ye(this.y,t.y,e.y),this.z=Ye(this.z,t.z,e.z),this.w=Ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ye(this.x,t,e),this.y=Ye(this.y,t,e),this.z=Ye(this.z,t,e),this.w=Ye(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r2 extends Ec{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Cn(0,0,t,e),this.scissorTest=!1,this.viewport=new Cn(0,0,t,e),this.textures=[];const a={width:t,height:e,depth:i.depth},l=new Ci(a),u=i.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new V_(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends r2{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class db extends Ci{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=gi,this.minFilter=gi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class a2 extends Ci{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=gi,this.minFilter=gi,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(t,e,i,a,l,u,f,d,h,m,v,_,x,S,b,y){vn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,u,f,d,h,m,v,_,x,S,b,y)}set(t,e,i,a,l,u,f,d,h,m,v,_,x,S,b,y){const M=this.elements;return M[0]=t,M[4]=e,M[8]=i,M[12]=a,M[1]=l,M[5]=u,M[9]=f,M[13]=d,M[2]=h,M[6]=m,M[10]=v,M[14]=_,M[3]=x,M[7]=S,M[11]=b,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vn().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,a=1/Ul.setFromMatrixColumn(t,0).length(),l=1/Ul.setFromMatrixColumn(t,1).length(),u=1/Ul.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*u,e[9]=i[9]*u,e[10]=i[10]*u,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,l=t.z,u=Math.cos(i),f=Math.sin(i),d=Math.cos(a),h=Math.sin(a),m=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const _=u*m,x=u*v,S=f*m,b=f*v;e[0]=d*m,e[4]=-d*v,e[8]=h,e[1]=x+S*h,e[5]=_-b*h,e[9]=-f*d,e[2]=b-_*h,e[6]=S+x*h,e[10]=u*d}else if(t.order==="YXZ"){const _=d*m,x=d*v,S=h*m,b=h*v;e[0]=_+b*f,e[4]=S*f-x,e[8]=u*h,e[1]=u*v,e[5]=u*m,e[9]=-f,e[2]=x*f-S,e[6]=b+_*f,e[10]=u*d}else if(t.order==="ZXY"){const _=d*m,x=d*v,S=h*m,b=h*v;e[0]=_-b*f,e[4]=-u*v,e[8]=S+x*f,e[1]=x+S*f,e[5]=u*m,e[9]=b-_*f,e[2]=-u*h,e[6]=f,e[10]=u*d}else if(t.order==="ZYX"){const _=u*m,x=u*v,S=f*m,b=f*v;e[0]=d*m,e[4]=S*h-x,e[8]=_*h+b,e[1]=d*v,e[5]=b*h+_,e[9]=x*h-S,e[2]=-h,e[6]=f*d,e[10]=u*d}else if(t.order==="YZX"){const _=u*d,x=u*h,S=f*d,b=f*h;e[0]=d*m,e[4]=b-_*v,e[8]=S*v+x,e[1]=v,e[5]=u*m,e[9]=-f*m,e[2]=-h*m,e[6]=x*v+S,e[10]=_-b*v}else if(t.order==="XZY"){const _=u*d,x=u*h,S=f*d,b=f*h;e[0]=d*m,e[4]=-v,e[8]=h*m,e[1]=_*v+b,e[5]=u*m,e[9]=x*v-S,e[2]=S*v-x,e[6]=f*m,e[10]=b*v+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(s2,t,o2)}lookAt(t,e,i){const a=this.elements;return vr.subVectors(t,e),vr.lengthSq()===0&&(vr.z=1),vr.normalize(),Us.crossVectors(i,vr),Us.lengthSq()===0&&(Math.abs(i.z)===1?vr.x+=1e-4:vr.z+=1e-4,vr.normalize(),Us.crossVectors(i,vr)),Us.normalize(),Ch.crossVectors(vr,Us),a[0]=Us.x,a[4]=Ch.x,a[8]=vr.x,a[1]=Us.y,a[5]=Ch.y,a[9]=vr.y,a[2]=Us.z,a[6]=Ch.z,a[10]=vr.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,u=i[0],f=i[4],d=i[8],h=i[12],m=i[1],v=i[5],_=i[9],x=i[13],S=i[2],b=i[6],y=i[10],M=i[14],A=i[3],L=i[7],w=i[11],U=i[15],O=a[0],R=a[4],T=a[8],D=a[12],k=a[1],I=a[5],V=a[9],$=a[13],Z=a[2],Y=a[6],z=a[10],B=a[14],tt=a[3],rt=a[7],G=a[11],F=a[15];return l[0]=u*O+f*k+d*Z+h*tt,l[4]=u*R+f*I+d*Y+h*rt,l[8]=u*T+f*V+d*z+h*G,l[12]=u*D+f*$+d*B+h*F,l[1]=m*O+v*k+_*Z+x*tt,l[5]=m*R+v*I+_*Y+x*rt,l[9]=m*T+v*V+_*z+x*G,l[13]=m*D+v*$+_*B+x*F,l[2]=S*O+b*k+y*Z+M*tt,l[6]=S*R+b*I+y*Y+M*rt,l[10]=S*T+b*V+y*z+M*G,l[14]=S*D+b*$+y*B+M*F,l[3]=A*O+L*k+w*Z+U*tt,l[7]=A*R+L*I+w*Y+U*rt,l[11]=A*T+L*V+w*z+U*G,l[15]=A*D+L*$+w*B+U*F,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],l=t[12],u=t[1],f=t[5],d=t[9],h=t[13],m=t[2],v=t[6],_=t[10],x=t[14],S=t[3],b=t[7],y=t[11],M=t[15],A=d*x-h*_,L=f*x-h*v,w=f*_-d*v,U=u*x-h*m,O=u*_-d*m,R=u*v-f*m;return e*(b*A-y*L+M*w)-i*(S*A-y*U+M*O)+a*(S*L-b*U+M*R)-l*(S*w-b*O+y*R)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],u=t[4],f=t[5],d=t[6],h=t[7],m=t[8],v=t[9],_=t[10],x=t[11],S=t[12],b=t[13],y=t[14],M=t[15],A=e*f-i*u,L=e*d-a*u,w=e*h-l*u,U=i*d-a*f,O=i*h-l*f,R=a*h-l*d,T=m*b-v*S,D=m*y-_*S,k=m*M-x*S,I=v*y-_*b,V=v*M-x*b,$=_*M-x*y,Z=A*$-L*V+w*I+U*k-O*D+R*T;if(Z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/Z;return t[0]=(f*$-d*V+h*I)*Y,t[1]=(a*V-i*$-l*I)*Y,t[2]=(b*R-y*O+M*U)*Y,t[3]=(_*O-v*R-x*U)*Y,t[4]=(d*k-u*$-h*D)*Y,t[5]=(e*$-a*k+l*D)*Y,t[6]=(y*w-S*R-M*L)*Y,t[7]=(m*R-_*w+x*L)*Y,t[8]=(u*V-f*k+h*T)*Y,t[9]=(i*k-e*V-l*T)*Y,t[10]=(S*O-b*w+M*A)*Y,t[11]=(v*w-m*O-x*A)*Y,t[12]=(f*D-u*I-d*T)*Y,t[13]=(e*I-i*D+a*T)*Y,t[14]=(b*L-S*U-y*A)*Y,t[15]=(m*U-v*L+_*A)*Y,this}scale(t){const e=this.elements,i=t.x,a=t.y,l=t.z;return e[0]*=i,e[4]*=a,e[8]*=l,e[1]*=i,e[5]*=a,e[9]*=l,e[2]*=i,e[6]*=a,e[10]*=l,e[3]*=i,e[7]*=a,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),l=1-i,u=t.x,f=t.y,d=t.z,h=l*u,m=l*f;return this.set(h*u+i,h*f-a*d,h*d+a*f,0,h*f+a*d,m*f+i,m*d-a*u,0,h*d-a*f,m*d+a*u,l*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,l,u){return this.set(1,i,l,0,t,1,u,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,l=e._x,u=e._y,f=e._z,d=e._w,h=l+l,m=u+u,v=f+f,_=l*h,x=l*m,S=l*v,b=u*m,y=u*v,M=f*v,A=d*h,L=d*m,w=d*v,U=i.x,O=i.y,R=i.z;return a[0]=(1-(b+M))*U,a[1]=(x+w)*U,a[2]=(S-L)*U,a[3]=0,a[4]=(x-w)*O,a[5]=(1-(_+M))*O,a[6]=(y+A)*O,a[7]=0,a[8]=(S+L)*R,a[9]=(y-A)*R,a[10]=(1-(_+b))*R,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];const l=this.determinant();if(l===0)return i.set(1,1,1),e.identity(),this;let u=Ul.set(a[0],a[1],a[2]).length();const f=Ul.set(a[4],a[5],a[6]).length(),d=Ul.set(a[8],a[9],a[10]).length();l<0&&(u=-u),ea.copy(this);const h=1/u,m=1/f,v=1/d;return ea.elements[0]*=h,ea.elements[1]*=h,ea.elements[2]*=h,ea.elements[4]*=m,ea.elements[5]*=m,ea.elements[6]*=m,ea.elements[8]*=v,ea.elements[9]*=v,ea.elements[10]*=v,e.setFromRotationMatrix(ea),i.x=u,i.y=f,i.z=d,this}makePerspective(t,e,i,a,l,u,f=_a,d=!1){const h=this.elements,m=2*l/(e-t),v=2*l/(i-a),_=(e+t)/(e-t),x=(i+a)/(i-a);let S,b;if(d)S=l/(u-l),b=u*l/(u-l);else if(f===_a)S=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(f===$u)S=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,a,l,u,f=_a,d=!1){const h=this.elements,m=2/(e-t),v=2/(i-a),_=-(e+t)/(e-t),x=-(i+a)/(i-a);let S,b;if(d)S=1/(u-l),b=u/(u-l);else if(f===_a)S=-2/(u-l),b=-(u+l)/(u-l);else if(f===$u)S=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=S,h[14]=b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ul=new nt,ea=new vn,s2=new nt(0,0,0),o2=new nt(1,1,1),Us=new nt,Ch=new nt,vr=new nt,yM=new vn,SM=new Tc;class Aa{constructor(t=0,e=0,i=0,a=Aa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,l=a[0],u=a[4],f=a[8],d=a[1],h=a[5],m=a[9],v=a[2],_=a[6],x=a[10];switch(e){case"XYZ":this._y=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yM.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yM,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return SM.setFromEuler(this),this.setFromQuaternion(SM,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Aa.DEFAULT_ORDER="XYZ";class pb{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let l2=0;const MM=new nt,Nl=new Tc,qa=new vn,Rh=new nt,xu=new nt,c2=new nt,u2=new Tc,bM=new nt(1,0,0),EM=new nt(0,1,0),TM=new nt(0,0,1),AM={type:"added"},f2={type:"removed"},Ol={type:"childadded",child:null},M0={type:"childremoved",child:null};class Kn extends Ec{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l2++}),this.uuid=pf(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const t=new nt,e=new Aa,i=new Tc,a=new nt(1,1,1);function l(){i.setFromEuler(e,!1)}function u(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new vn},normalMatrix:{value:new Ne}}),this.matrix=new vn,this.matrixWorld=new vn,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pb,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Nl.setFromAxisAngle(t,e),this.quaternion.multiply(Nl),this}rotateOnWorldAxis(t,e){return Nl.setFromAxisAngle(t,e),this.quaternion.premultiply(Nl),this}rotateX(t){return this.rotateOnAxis(bM,t)}rotateY(t){return this.rotateOnAxis(EM,t)}rotateZ(t){return this.rotateOnAxis(TM,t)}translateOnAxis(t,e){return MM.copy(t).applyQuaternion(this.quaternion),this.position.add(MM.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bM,t)}translateY(t){return this.translateOnAxis(EM,t)}translateZ(t){return this.translateOnAxis(TM,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qa.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Rh.copy(t):Rh.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),xu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qa.lookAt(xu,Rh,this.up):qa.lookAt(Rh,xu,this.up),this.quaternion.setFromRotationMatrix(qa),a&&(qa.extractRotation(a.matrixWorld),Nl.setFromRotationMatrix(qa),this.quaternion.premultiply(Nl.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(tn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(AM),Ol.child=t,this.dispatchEvent(Ol),Ol.child=null):tn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(f2),M0.child=t,this.dispatchEvent(M0),M0.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qa.multiply(t.parent.matrixWorld)),t.applyMatrix4(qa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(AM),Ol.child=t,this.dispatchEvent(Ol),Ol.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const u=this.children[i].getObjectByProperty(t,e);if(u!==void 0)return u}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xu,t,c2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xu,u2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,a=t.z,l=this.matrix.elements;l[12]+=e-l[0]*e-l[4]*i-l[8]*a,l[13]+=i-l[1]*e-l[5]*i-l[9]*a,l[14]+=a-l[2]*e-l[6]*i-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const v=d[h];l(t.shapes,v)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(t.materials,this.material[d]));a.material=f}else a.material=l(t.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];a.animations.push(l(t.animations,d))}}if(e){const f=u(t.geometries),d=u(t.materials),h=u(t.textures),m=u(t.images),v=u(t.shapes),_=u(t.skeletons),x=u(t.animations),S=u(t.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),S.length>0&&(i.nodes=S)}return i.object=a,i;function u(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Kn.DEFAULT_UP=new nt(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Po extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h2={type:"move"};class b0{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,l=null,u=null;const f=this._targetRay,d=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){u=!0;for(const b of t.hand.values()){const y=e.getJointPose(b,i),M=this._getHandJoint(h,b);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const m=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=m.position.distanceTo(v.position),x=.02,S=.005;h.inputState.pinching&&_>x+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&_<=x-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(h2)))}return f!==null&&(f.visible=a!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Po;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const mb={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ns={h:0,s:0,l:0},Dh={h:0,s:0,l:0};function E0(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ye{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ji){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ze.colorSpaceToWorking(this,e),this}setRGB(t,e,i,a=Ze.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ze.colorSpaceToWorking(this,a),this}setHSL(t,e,i,a=Ze.workingColorSpace){if(t=$w(t,1),e=Ye(e,0,1),i=Ye(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,u=2*i-l;this.r=E0(u,l,t+1/3),this.g=E0(u,l,t),this.b=E0(u,l,t-1/3)}return Ze.colorSpaceToWorking(this,a),this}setStyle(t,e=Ji){function i(l){l!==void 0&&parseFloat(l)<1&&xe("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:xe("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(u===6)return this.setHex(parseInt(l,16),e);xe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ji){const i=mb[t.toLowerCase()];return i!==void 0?this.setHex(i,e):xe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}copyLinearToSRGB(t){return this.r=ic(t.r),this.g=ic(t.g),this.b=ic(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ji){return Ze.workingToColorSpace(Mi.copy(this),t),Math.round(Ye(Mi.r*255,0,255))*65536+Math.round(Ye(Mi.g*255,0,255))*256+Math.round(Ye(Mi.b*255,0,255))}getHexString(t=Ji){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ze.workingColorSpace){Ze.workingToColorSpace(Mi.copy(this),e);const i=Mi.r,a=Mi.g,l=Mi.b,u=Math.max(i,a,l),f=Math.min(i,a,l);let d,h;const m=(f+u)/2;if(f===u)d=0,h=0;else{const v=u-f;switch(h=m<=.5?v/(u+f):v/(2-u-f),u){case i:d=(a-l)/v+(a<l?6:0);break;case a:d=(l-i)/v+2;break;case l:d=(i-a)/v+4;break}d/=6}return t.h=d,t.s=h,t.l=m,t}getRGB(t,e=Ze.workingColorSpace){return Ze.workingToColorSpace(Mi.copy(this),e),t.r=Mi.r,t.g=Mi.g,t.b=Mi.b,t}getStyle(t=Ji){Ze.workingToColorSpace(Mi.copy(this),t);const e=Mi.r,i=Mi.g,a=Mi.b;return t!==Ji?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(Ns),this.setHSL(Ns.h+t,Ns.s+e,Ns.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ns),t.getHSL(Dh);const i=_0(Ns.h,Dh.h,e),a=_0(Ns.s,Dh.s,e),l=_0(Ns.l,Dh.l,e);return this.setHSL(i,a,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*a,this.g=l[1]*e+l[4]*i+l[7]*a,this.b=l[2]*e+l[5]*i+l[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mi=new ye;ye.NAMES=mb;class k_{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(t),this.density=e}clone(){return new k_(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class X_{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new ye(t),this.near=e,this.far=i}clone(){return new X_(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class zd extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Aa,this.environmentIntensity=1,this.environmentRotation=new Aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const na=new nt,ja=new nt,T0=new nt,Za=new nt,Pl=new nt,zl=new nt,wM=new nt,A0=new nt,w0=new nt,C0=new nt,R0=new Cn,D0=new Cn,L0=new Cn;class Wr{constructor(t=new nt,e=new nt,i=new nt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),na.subVectors(t,e),a.cross(na);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(t,e,i,a,l){na.subVectors(a,e),ja.subVectors(i,e),T0.subVectors(t,e);const u=na.dot(na),f=na.dot(ja),d=na.dot(T0),h=ja.dot(ja),m=ja.dot(T0),v=u*h-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,x=(h*d-f*m)*_,S=(u*m-f*d)*_;return l.set(1-x-S,S,x)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,Za)===null?!1:Za.x>=0&&Za.y>=0&&Za.x+Za.y<=1}static getInterpolation(t,e,i,a,l,u,f,d){return this.getBarycoord(t,e,i,a,Za)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Za.x),d.addScaledVector(u,Za.y),d.addScaledVector(f,Za.z),d)}static getInterpolatedAttribute(t,e,i,a,l,u){return R0.setScalar(0),D0.setScalar(0),L0.setScalar(0),R0.fromBufferAttribute(t,e),D0.fromBufferAttribute(t,i),L0.fromBufferAttribute(t,a),u.setScalar(0),u.addScaledVector(R0,l.x),u.addScaledVector(D0,l.y),u.addScaledVector(L0,l.z),u}static isFrontFacing(t,e,i,a){return na.subVectors(i,e),ja.subVectors(t,e),na.cross(ja).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return na.subVectors(this.c,this.b),ja.subVectors(this.a,this.b),na.cross(ja).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Wr.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Wr.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,l){return Wr.getInterpolation(t,this.a,this.b,this.c,e,i,a,l)}containsPoint(t){return Wr.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Wr.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,l=this.c;let u,f;Pl.subVectors(a,i),zl.subVectors(l,i),A0.subVectors(t,i);const d=Pl.dot(A0),h=zl.dot(A0);if(d<=0&&h<=0)return e.copy(i);w0.subVectors(t,a);const m=Pl.dot(w0),v=zl.dot(w0);if(m>=0&&v<=m)return e.copy(a);const _=d*v-m*h;if(_<=0&&d>=0&&m<=0)return u=d/(d-m),e.copy(i).addScaledVector(Pl,u);C0.subVectors(t,l);const x=Pl.dot(C0),S=zl.dot(C0);if(S>=0&&x<=S)return e.copy(l);const b=x*h-d*S;if(b<=0&&h>=0&&S<=0)return f=h/(h-S),e.copy(i).addScaledVector(zl,f);const y=m*S-x*v;if(y<=0&&v-m>=0&&x-S>=0)return wM.subVectors(l,a),f=(v-m)/(v-m+(x-S)),e.copy(a).addScaledVector(wM,f);const M=1/(y+b+_);return u=b*M,f=_*M,e.copy(i).addScaledVector(Pl,u).addScaledVector(zl,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class mf{constructor(t=new nt(1/0,1/0,1/0),e=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ia.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ia.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ia.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,ia):ia.fromBufferAttribute(l,u),ia.applyMatrix4(t.matrixWorld),this.expandByPoint(ia);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lh.copy(i.boundingBox)),Lh.applyMatrix4(t.matrixWorld),this.union(Lh)}const a=t.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ia),ia.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yu),Uh.subVectors(this.max,yu),Fl.subVectors(t.a,yu),Bl.subVectors(t.b,yu),Il.subVectors(t.c,yu),Os.subVectors(Bl,Fl),Ps.subVectors(Il,Bl),yo.subVectors(Fl,Il);let e=[0,-Os.z,Os.y,0,-Ps.z,Ps.y,0,-yo.z,yo.y,Os.z,0,-Os.x,Ps.z,0,-Ps.x,yo.z,0,-yo.x,-Os.y,Os.x,0,-Ps.y,Ps.x,0,-yo.y,yo.x,0];return!U0(e,Fl,Bl,Il,Uh)||(e=[1,0,0,0,1,0,0,0,1],!U0(e,Fl,Bl,Il,Uh))?!1:(Nh.crossVectors(Os,Ps),e=[Nh.x,Nh.y,Nh.z],U0(e,Fl,Bl,Il,Uh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ia).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ia).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ka[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ka[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ka[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ka[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ka[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ka[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ka[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ka[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ka),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ka=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],ia=new nt,Lh=new mf,Fl=new nt,Bl=new nt,Il=new nt,Os=new nt,Ps=new nt,yo=new nt,yu=new nt,Uh=new nt,Nh=new nt,So=new nt;function U0(s,t,e,i,a){for(let l=0,u=s.length-3;l<=u;l+=3){So.fromArray(s,l);const f=a.x*Math.abs(So.x)+a.y*Math.abs(So.y)+a.z*Math.abs(So.z),d=t.dot(So),h=e.dot(So),m=i.dot(So);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const qn=new nt,Oh=new De;let d2=0;class Ma{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d2++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=dM,this.updateRanges=[],this.gpuType=ga,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Oh.fromBufferAttribute(this,e),Oh.applyMatrix3(t),this.setXY(e,Oh.x,Oh.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)qn.fromBufferAttribute(this,e),qn.applyMatrix3(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)qn.fromBufferAttribute(this,e),qn.applyMatrix4(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qn.fromBufferAttribute(this,e),qn.applyNormalMatrix(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qn.fromBufferAttribute(this,e),qn.transformDirection(t),this.setXYZ(e,qn.x,qn.y,qn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vu(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ki(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vu(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ki(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vu(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ki(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vu(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ki(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vu(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ki(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ki(e,this.array),i=Ki(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=Ki(e,this.array),i=Ki(i,this.array),a=Ki(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,l){return t*=this.itemSize,this.normalized&&(e=Ki(e,this.array),i=Ki(i,this.array),a=Ki(a,this.array),l=Ki(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dM&&(t.usage=this.usage),t}}class gb extends Ma{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class _b extends Ma{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ir extends Ma{constructor(t,e,i){super(new Float32Array(t),e,i)}}const p2=new mf,Su=new nt,N0=new nt;class Qd{constructor(t=new nt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):p2.setFromPoints(t).getCenter(i);let a=0;for(let l=0,u=t.length;l<u;l++)a=Math.max(a,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Su.subVectors(t,this.center);const e=Su.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(Su,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(N0.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Su.copy(t.center).add(N0)),this.expandByPoint(Su.copy(t.center).sub(N0))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let m2=0;const Gr=new vn,O0=new Kn,Hl=new nt,xr=new mf,Mu=new mf,ai=new nt;class Lr extends Ec{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m2++}),this.uuid=pf(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zw(t)?_b:gb)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new Ne().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gr.makeRotationFromQuaternion(t),this.applyMatrix4(Gr),this}rotateX(t){return Gr.makeRotationX(t),this.applyMatrix4(Gr),this}rotateY(t){return Gr.makeRotationY(t),this.applyMatrix4(Gr),this}rotateZ(t){return Gr.makeRotationZ(t),this.applyMatrix4(Gr),this}translate(t,e,i){return Gr.makeTranslation(t,e,i),this.applyMatrix4(Gr),this}scale(t,e,i){return Gr.makeScale(t,e,i),this.applyMatrix4(Gr),this}lookAt(t){return O0.lookAt(t),O0.updateMatrix(),this.applyMatrix4(O0.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hl).negate(),this.translate(Hl.x,Hl.y,Hl.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let a=0,l=t.length;a<l;a++){const u=t[a];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new ir(i,3))}else{const i=Math.min(t.length,e.count);for(let a=0;a<i;a++){const l=t[a];e.setXYZ(a,l.x,l.y,l.z||0)}t.length>e.count&&xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mf);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const l=e[i];xr.setFromBufferAttribute(l),this.morphTargetsRelative?(ai.addVectors(this.boundingBox.min,xr.min),this.boundingBox.expandByPoint(ai),ai.addVectors(this.boundingBox.max,xr.max),this.boundingBox.expandByPoint(ai)):(this.boundingBox.expandByPoint(xr.min),this.boundingBox.expandByPoint(xr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qd);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){tn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(t){const i=this.boundingSphere.center;if(xr.setFromBufferAttribute(t),e)for(let l=0,u=e.length;l<u;l++){const f=e[l];Mu.setFromBufferAttribute(f),this.morphTargetsRelative?(ai.addVectors(xr.min,Mu.min),xr.expandByPoint(ai),ai.addVectors(xr.max,Mu.max),xr.expandByPoint(ai)):(xr.expandByPoint(Mu.min),xr.expandByPoint(Mu.max))}xr.getCenter(i);let a=0;for(let l=0,u=t.count;l<u;l++)ai.fromBufferAttribute(t,l),a=Math.max(a,i.distanceToSquared(ai));if(e)for(let l=0,u=e.length;l<u;l++){const f=e[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)ai.fromBufferAttribute(f,h),d&&(Hl.fromBufferAttribute(t,h),ai.add(Hl)),a=Math.max(a,i.distanceToSquared(ai))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&tn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){tn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,a=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ma(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let T=0;T<i.count;T++)f[T]=new nt,d[T]=new nt;const h=new nt,m=new nt,v=new nt,_=new De,x=new De,S=new De,b=new nt,y=new nt;function M(T,D,k){h.fromBufferAttribute(i,T),m.fromBufferAttribute(i,D),v.fromBufferAttribute(i,k),_.fromBufferAttribute(l,T),x.fromBufferAttribute(l,D),S.fromBufferAttribute(l,k),m.sub(h),v.sub(h),x.sub(_),S.sub(_);const I=1/(x.x*S.y-S.x*x.y);isFinite(I)&&(b.copy(m).multiplyScalar(S.y).addScaledVector(v,-x.y).multiplyScalar(I),y.copy(v).multiplyScalar(x.x).addScaledVector(m,-S.x).multiplyScalar(I),f[T].add(b),f[D].add(b),f[k].add(b),d[T].add(y),d[D].add(y),d[k].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,D=A.length;T<D;++T){const k=A[T],I=k.start,V=k.count;for(let $=I,Z=I+V;$<Z;$+=3)M(t.getX($+0),t.getX($+1),t.getX($+2))}const L=new nt,w=new nt,U=new nt,O=new nt;function R(T){U.fromBufferAttribute(a,T),O.copy(U);const D=f[T];L.copy(D),L.sub(U.multiplyScalar(U.dot(D))).normalize(),w.crossVectors(O,D);const I=w.dot(d[T])<0?-1:1;u.setXYZW(T,L.x,L.y,L.z,I)}for(let T=0,D=A.length;T<D;++T){const k=A[T],I=k.start,V=k.count;for(let $=I,Z=I+V;$<Z;$+=3)R(t.getX($+0)),R(t.getX($+1)),R(t.getX($+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ma(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const a=new nt,l=new nt,u=new nt,f=new nt,d=new nt,h=new nt,m=new nt,v=new nt;if(t)for(let _=0,x=t.count;_<x;_+=3){const S=t.getX(_+0),b=t.getX(_+1),y=t.getX(_+2);a.fromBufferAttribute(e,S),l.fromBufferAttribute(e,b),u.fromBufferAttribute(e,y),m.subVectors(u,l),v.subVectors(a,l),m.cross(v),f.fromBufferAttribute(i,S),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,y),f.add(m),d.add(m),h.add(m),i.setXYZ(S,f.x,f.y,f.z),i.setXYZ(b,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,x=e.count;_<x;_+=3)a.fromBufferAttribute(e,_+0),l.fromBufferAttribute(e,_+1),u.fromBufferAttribute(e,_+2),m.subVectors(u,l),v.subVectors(a,l),m.cross(v),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ai.fromBufferAttribute(t,e),ai.normalize(),t.setXYZ(e,ai.x,ai.y,ai.z)}toNonIndexed(){function t(f,d){const h=f.array,m=f.itemSize,v=f.normalized,_=new h.constructor(d.length*m);let x=0,S=0;for(let b=0,y=d.length;b<y;b++){f.isInterleavedBufferAttribute?x=d[b]*f.data.stride+f.offset:x=d[b]*m;for(let M=0;M<m;M++)_[S++]=h[x++]}return new Ma(_,m,v)}if(this.index===null)return xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Lr,i=this.index.array,a=this.attributes;for(const f in a){const d=a[f],h=t(d,i);e.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,v=h.length;m<v;m++){const _=h[m],x=t(_,i);d.push(x)}e.morphAttributes[f]=d}e.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const h=u[f];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(t[h]=d[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const h=i[d];t.data.attributes[d]=h.toJSON(t.data)}const a={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let v=0,_=h.length;v<_;v++){const x=h[v];m.push(x.toJSON(t.data))}m.length>0&&(a[d]=m,l=!0)}l&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(e))}const l=t.morphAttributes;for(const h in l){const m=[],v=l[h];for(let _=0,x=v.length;_<x;_++)m.push(v[_].clone(e));this.morphAttributes[h]=m}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let h=0,m=u.length;h<m;h++){const v=u[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let g2=0;class Ac extends Ec{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g2++}),this.uuid=pf(),this.name="",this.type="Material",this.blending=nc,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fg,this.blendDst=hg,this.blendEquation=Lo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=fc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dl,this.stencilZFail=Dl,this.stencilZPass=Dl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){xe(`Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){xe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==nc&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==fg&&(i.blendSrc=this.blendSrc),this.blendDst!==hg&&(i.blendDst=this.blendDst),this.blendEquation!==Lo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hM&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(e){const l=a(t.textures),u=a(t.images);l.length>0&&(i.textures=l),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Qa=new nt,P0=new nt,Ph=new nt,zs=new nt,z0=new nt,zh=new nt,F0=new nt;class vb{constructor(t=new nt,e=new nt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qa)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qa.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qa.copy(this.origin).addScaledVector(this.direction,e),Qa.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){P0.copy(t).add(e).multiplyScalar(.5),Ph.copy(e).sub(t).normalize(),zs.copy(this.origin).sub(P0);const l=t.distanceTo(e)*.5,u=-this.direction.dot(Ph),f=zs.dot(this.direction),d=-zs.dot(Ph),h=zs.lengthSq(),m=Math.abs(1-u*u);let v,_,x,S;if(m>0)if(v=u*d-f,_=u*f-d,S=l*m,v>=0)if(_>=-S)if(_<=S){const b=1/m;v*=b,_*=b,x=v*(v+u*_+2*f)+_*(u*v+_+2*d)+h}else _=l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*d)+h;else _=-l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*d)+h;else _<=-S?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-d),l),x=-v*v+_*(_+2*d)+h):_<=S?(v=0,_=Math.min(Math.max(-l,-d),l),x=_*(_+2*d)+h):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-d),l),x=-v*v+_*(_+2*d)+h);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),x=-v*v+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(P0).addScaledVector(Ph,_),x}intersectSphere(t,e){Qa.subVectors(t.center,this.origin);const i=Qa.dot(this.direction),a=Qa.dot(Qa)-i*i,l=t.radius*t.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=i-u,d=i+u;return d<0?null:f<0?this.at(d,e):this.at(f,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,l,u,f,d;const h=1/this.direction.x,m=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(i=(t.min.x-_.x)*h,a=(t.max.x-_.x)*h):(i=(t.max.x-_.x)*h,a=(t.min.x-_.x)*h),m>=0?(l=(t.min.y-_.y)*m,u=(t.max.y-_.y)*m):(l=(t.max.y-_.y)*m,u=(t.min.y-_.y)*m),i>u||l>a||((l>i||isNaN(i))&&(i=l),(u<a||isNaN(a))&&(a=u),v>=0?(f=(t.min.z-_.z)*v,d=(t.max.z-_.z)*v):(f=(t.max.z-_.z)*v,d=(t.min.z-_.z)*v),i>d||f>a)||((f>i||i!==i)&&(i=f),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,Qa)!==null}intersectTriangle(t,e,i,a,l){z0.subVectors(e,t),zh.subVectors(i,t),F0.crossVectors(z0,zh);let u=this.direction.dot(F0),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;zs.subVectors(this.origin,t);const d=f*this.direction.dot(zh.crossVectors(zs,zh));if(d<0)return null;const h=f*this.direction.dot(z0.cross(zs));if(h<0||d+h>u)return null;const m=-f*zs.dot(F0);return m<0?null:this.at(m/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mc extends Ac{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.combine=nb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const CM=new vn,Mo=new vb,Fh=new Qd,RM=new nt,Bh=new nt,Ih=new nt,Hh=new nt,B0=new nt,Gh=new nt,DM=new nt,Vh=new nt;class li extends Kn{constructor(t=new Lr,e=new mc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,u=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const f=this.morphTargetInfluences;if(l&&f){Gh.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],v=l[d];m!==0&&(B0.fromBufferAttribute(v,t),u?Gh.addScaledVector(B0,m):Gh.addScaledVector(B0.sub(e),m))}e.add(Gh)}return e}raycast(t,e){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fh.copy(i.boundingSphere),Fh.applyMatrix4(l),Mo.copy(t.ray).recast(t.near),!(Fh.containsPoint(Mo.origin)===!1&&(Mo.intersectSphere(Fh,RM)===null||Mo.origin.distanceToSquared(RM)>(t.far-t.near)**2))&&(CM.copy(l).invert(),Mo.copy(t.ray).applyMatrix4(CM),!(i.boundingBox!==null&&Mo.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mo)))}_computeIntersections(t,e,i){let a;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,v=l.attributes.normal,_=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let S=0,b=_.length;S<b;S++){const y=_[S],M=u[y.materialIndex],A=Math.max(y.start,x.start),L=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let w=A,U=L;w<U;w+=3){const O=f.getX(w),R=f.getX(w+1),T=f.getX(w+2);a=kh(this,M,t,i,h,m,v,O,R,T),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=y.materialIndex,e.push(a))}}else{const S=Math.max(0,x.start),b=Math.min(f.count,x.start+x.count);for(let y=S,M=b;y<M;y+=3){const A=f.getX(y),L=f.getX(y+1),w=f.getX(y+2);a=kh(this,u,t,i,h,m,v,A,L,w),a&&(a.faceIndex=Math.floor(y/3),e.push(a))}}else if(d!==void 0)if(Array.isArray(u))for(let S=0,b=_.length;S<b;S++){const y=_[S],M=u[y.materialIndex],A=Math.max(y.start,x.start),L=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let w=A,U=L;w<U;w+=3){const O=w,R=w+1,T=w+2;a=kh(this,M,t,i,h,m,v,O,R,T),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=y.materialIndex,e.push(a))}}else{const S=Math.max(0,x.start),b=Math.min(d.count,x.start+x.count);for(let y=S,M=b;y<M;y+=3){const A=y,L=y+1,w=y+2;a=kh(this,u,t,i,h,m,v,A,L,w),a&&(a.faceIndex=Math.floor(y/3),e.push(a))}}}}function _2(s,t,e,i,a,l,u,f){let d;if(t.side===er?d=i.intersectTriangle(u,l,a,!0,f):d=i.intersectTriangle(a,l,u,t.side===as,f),d===null)return null;Vh.copy(f),Vh.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Vh);return h<e.near||h>e.far?null:{distance:h,point:Vh.clone(),object:s}}function kh(s,t,e,i,a,l,u,f,d,h){s.getVertexPosition(f,Bh),s.getVertexPosition(d,Ih),s.getVertexPosition(h,Hh);const m=_2(s,t,e,i,Bh,Ih,Hh,DM);if(m){const v=new nt;Wr.getBarycoord(DM,Bh,Ih,Hh,v),a&&(m.uv=Wr.getInterpolatedAttribute(a,f,d,h,v,new De)),l&&(m.uv1=Wr.getInterpolatedAttribute(l,f,d,h,v,new De)),u&&(m.normal=Wr.getInterpolatedAttribute(u,f,d,h,v,new nt),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:f,b:d,c:h,normal:new nt,materialIndex:0};Wr.getNormal(Bh,Ih,Hh,_.normal),m.face=_,m.barycoord=v}return m}class v2 extends Ci{constructor(t=null,e=1,i=1,a,l,u,f,d,h=gi,m=gi,v,_){super(null,u,f,d,h,m,a,l,v,_),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const I0=new nt,x2=new nt,y2=new Ne;class Hs{constructor(t=new nt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=I0.subVectors(i,e).cross(x2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(I0),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||y2.getNormalMatrix(t),a=this.coplanarPoint(I0).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bo=new Qd,S2=new De(.5,.5),Xh=new nt;class W_{constructor(t=new Hs,e=new Hs,i=new Hs,a=new Hs,l=new Hs,u=new Hs){this.planes=[t,e,i,a,l,u]}set(t,e,i,a,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(e),f[2].copy(i),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_a,i=!1){const a=this.planes,l=t.elements,u=l[0],f=l[1],d=l[2],h=l[3],m=l[4],v=l[5],_=l[6],x=l[7],S=l[8],b=l[9],y=l[10],M=l[11],A=l[12],L=l[13],w=l[14],U=l[15];if(a[0].setComponents(h-u,x-m,M-S,U-A).normalize(),a[1].setComponents(h+u,x+m,M+S,U+A).normalize(),a[2].setComponents(h+f,x+v,M+b,U+L).normalize(),a[3].setComponents(h-f,x-v,M-b,U-L).normalize(),i)a[4].setComponents(d,_,y,w).normalize(),a[5].setComponents(h-d,x-_,M-y,U-w).normalize();else if(a[4].setComponents(h-d,x-_,M-y,U-w).normalize(),e===_a)a[5].setComponents(h+d,x+_,M+y,U+w).normalize();else if(e===$u)a[5].setComponents(d,_,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bo)}intersectsSprite(t){bo.center.set(0,0,0);const e=S2.distanceTo(t.center);return bo.radius=.7071067811865476+e,bo.applyMatrix4(t.matrixWorld),this.intersectsSphere(bo)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(Xh.x=a.normal.x>0?t.max.x:t.min.x,Xh.y=a.normal.y>0?t.max.y:t.min.y,Xh.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Xh)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $g extends Ac{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fd=new nt,Bd=new nt,LM=new vn,bu=new vb,Wh=new Qd,H0=new nt,UM=new nt;class M2 extends Kn{constructor(t=new Lr,e=new $g){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let a=1,l=e.count;a<l;a++)Fd.fromBufferAttribute(e,a-1),Bd.fromBufferAttribute(e,a),i[a]=i[a-1],i[a]+=Fd.distanceTo(Bd);t.setAttribute("lineDistance",new ir(i,1))}else xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,l=t.params.Line.threshold,u=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wh.copy(i.boundingSphere),Wh.applyMatrix4(a),Wh.radius+=l,t.ray.intersectsSphere(Wh)===!1)return;LM.copy(a).invert(),bu.copy(t.ray).applyMatrix4(LM);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const x=Math.max(0,u.start),S=Math.min(m.count,u.start+u.count);for(let b=x,y=S-1;b<y;b+=h){const M=m.getX(b),A=m.getX(b+1),L=Yh(this,t,bu,d,M,A,b);L&&e.push(L)}if(this.isLineLoop){const b=m.getX(S-1),y=m.getX(x),M=Yh(this,t,bu,d,b,y,S-1);M&&e.push(M)}}else{const x=Math.max(0,u.start),S=Math.min(_.count,u.start+u.count);for(let b=x,y=S-1;b<y;b+=h){const M=Yh(this,t,bu,d,b,b+1,b);M&&e.push(M)}if(this.isLineLoop){const b=Yh(this,t,bu,d,S-1,x,S-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Yh(s,t,e,i,a,l,u){const f=s.geometry.attributes.position;if(Fd.fromBufferAttribute(f,a),Bd.fromBufferAttribute(f,l),e.distanceSqToSegment(Fd,Bd,H0,UM)>i)return;H0.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(H0);if(!(h<t.near||h>t.far))return{distance:h,point:UM.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const NM=new nt,OM=new nt;class PM extends M2{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let a=0,l=e.count;a<l;a+=2)NM.fromBufferAttribute(e,a),OM.fromBufferAttribute(e,a+1),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+NM.distanceTo(OM);t.setAttribute("lineDistance",new ir(i,1))}else xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xb extends Ci{constructor(t=[],e=Wo,i,a,l,u,f,d,h,m){super(t,e,i,a,l,u,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ef extends Ci{constructor(t,e,i=Ta,a,l,u,f=gi,d=gi,h,m=ss,v=1){if(m!==ss&&m!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:e,depth:v};super(_,a,l,u,f,d,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new V_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class b2 extends ef{constructor(t,e=Ta,i=Wo,a,l,u=gi,f=gi,d,h=ss){const m={width:t,height:t,depth:1},v=[m,m,m,m,m,m];super(t,t,e,i,a,l,u,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class yb extends Ci{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Yo extends Lr{constructor(t=1,e=1,i=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],v=[];let _=0,x=0;S("z","y","x",-1,-1,i,e,t,u,l,0),S("z","y","x",1,-1,i,e,-t,u,l,1),S("x","z","y",1,1,t,i,e,a,u,2),S("x","z","y",1,-1,t,i,-e,a,u,3),S("x","y","z",1,-1,t,e,i,a,l,4),S("x","y","z",-1,-1,t,e,-i,a,l,5),this.setIndex(d),this.setAttribute("position",new ir(h,3)),this.setAttribute("normal",new ir(m,3)),this.setAttribute("uv",new ir(v,2));function S(b,y,M,A,L,w,U,O,R,T,D){const k=w/R,I=U/T,V=w/2,$=U/2,Z=O/2,Y=R+1,z=T+1;let B=0,tt=0;const rt=new nt;for(let G=0;G<z;G++){const F=G*I-$;for(let Q=0;Q<Y;Q++){const _t=Q*k-V;rt[b]=_t*A,rt[y]=F*L,rt[M]=Z,h.push(rt.x,rt.y,rt.z),rt[b]=0,rt[y]=0,rt[M]=O>0?1:-1,m.push(rt.x,rt.y,rt.z),v.push(Q/R),v.push(1-G/T),B+=1}}for(let G=0;G<T;G++)for(let F=0;F<R;F++){const Q=_+F+Y*G,_t=_+F+Y*(G+1),Mt=_+(F+1)+Y*(G+1),Lt=_+(F+1)+Y*G;d.push(Q,_t,Lt),d.push(_t,Mt,Lt),tt+=6}f.addGroup(x,tt,D),x+=tt,_+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}const qh=new nt,jh=new nt,G0=new nt,Zh=new Wr;class E2 extends Lr{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const a=Math.pow(10,4),l=Math.cos(yd*e),u=t.getIndex(),f=t.getAttribute("position"),d=u?u.count:f.count,h=[0,0,0],m=["a","b","c"],v=new Array(3),_={},x=[];for(let S=0;S<d;S+=3){u?(h[0]=u.getX(S),h[1]=u.getX(S+1),h[2]=u.getX(S+2)):(h[0]=S,h[1]=S+1,h[2]=S+2);const{a:b,b:y,c:M}=Zh;if(b.fromBufferAttribute(f,h[0]),y.fromBufferAttribute(f,h[1]),M.fromBufferAttribute(f,h[2]),Zh.getNormal(G0),v[0]=`${Math.round(b.x*a)},${Math.round(b.y*a)},${Math.round(b.z*a)}`,v[1]=`${Math.round(y.x*a)},${Math.round(y.y*a)},${Math.round(y.z*a)}`,v[2]=`${Math.round(M.x*a)},${Math.round(M.y*a)},${Math.round(M.z*a)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let A=0;A<3;A++){const L=(A+1)%3,w=v[A],U=v[L],O=Zh[m[A]],R=Zh[m[L]],T=`${w}_${U}`,D=`${U}_${w}`;D in _&&_[D]?(G0.dot(_[D].normal)<=l&&(x.push(O.x,O.y,O.z),x.push(R.x,R.y,R.z)),_[D]=null):T in _||(_[T]={index0:h[A],index1:h[L],normal:G0.clone()})}}for(const S in _)if(_[S]){const{index0:b,index1:y}=_[S];qh.fromBufferAttribute(f,b),jh.fromBufferAttribute(f,y),x.push(qh.x,qh.y,qh.z),x.push(jh.x,jh.y,jh.z)}this.setAttribute("position",new ir(x,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ba extends Lr{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const l=t/2,u=e/2,f=Math.floor(i),d=Math.floor(a),h=f+1,m=d+1,v=t/f,_=e/d,x=[],S=[],b=[],y=[];for(let M=0;M<m;M++){const A=M*_-u;for(let L=0;L<h;L++){const w=L*v-l;S.push(w,-A,0),b.push(0,0,1),y.push(L/f),y.push(1-M/d)}}for(let M=0;M<d;M++)for(let A=0;A<f;A++){const L=A+h*M,w=A+h*(M+1),U=A+1+h*(M+1),O=A+1+h*M;x.push(L,w,O),x.push(w,U,O)}this.setIndex(x),this.setAttribute("position",new ir(S,3)),this.setAttribute("normal",new ir(b,3)),this.setAttribute("uv",new ir(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ba(t.width,t.height,t.widthSegments,t.heightSegments)}}function gc(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const a=s[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function Ii(s){const t={};for(let e=0;e<s.length;e++){const i=gc(s[e]);for(const a in i)t[a]=i[a]}return t}function T2(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Sb(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ze.workingColorSpace}const qo={clone:gc,merge:Ii};var A2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ui extends Ac{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A2,this.fragmentShader=w2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gc(t.uniforms),this.uniformsGroups=T2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?e.uniforms[a]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?e.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?e.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?e.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?e.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?e.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?e.uniforms[a]={type:"m4",value:u.toArray()}:e.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Mb extends ui{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class C2 extends Ac{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fb,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Aa,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class R2 extends Ac{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class D2 extends Ac{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const V0={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(zM(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!zM(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function zM(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class L2{constructor(t,e,i){const a=this;let l=!1,u=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(m){f++,l===!1&&a.onStart!==void 0&&a.onStart(m,u,f),l=!0},this.itemEnd=function(m){u++,a.onProgress!==void 0&&a.onProgress(m,u,f),u===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,v){return h.push(m,v),this},this.removeHandler=function(m){const v=h.indexOf(m);return v!==-1&&h.splice(v,2),this},this.getHandler=function(m){for(let v=0,_=h.length;v<_;v+=2){const x=h[v],S=h[v+1];if(x.global&&(x.lastIndex=0),x.test(m))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const U2=new L2;class Y_{constructor(t){this.manager=t!==void 0?t:U2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(a,l){i.load(t,a,e,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Y_.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gl=new WeakMap;class N2 extends Y_{constructor(t){super(t)}load(t,e,i,a){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,u=V0.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(t),setTimeout(function(){e&&e(u),l.manager.itemEnd(t)},0);else{let v=Gl.get(u);v===void 0&&(v=[],Gl.set(u,v)),v.push({onLoad:e,onError:a})}return u}const f=tf("img");function d(){m(),e&&e(this);const v=Gl.get(this)||[];for(let _=0;_<v.length;_++){const x=v[_];x.onLoad&&x.onLoad(this)}Gl.delete(this),l.manager.itemEnd(t)}function h(v){m(),a&&a(v),V0.remove(`image:${t}`);const _=Gl.get(this)||[];for(let x=0;x<_.length;x++){const S=_[x];S.onError&&S.onError(v)}Gl.delete(this),l.manager.itemError(t),l.manager.itemEnd(t)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),V0.add(`image:${t}`,f),l.manager.itemStart(t),f.src=t,f}}class bb extends Y_{constructor(t){super(t)}load(t,e,i,a){const l=new Ci,u=new N2(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(f){l.image=f,l.needsUpdate=!0,e!==void 0&&e(l)},i,a),l}}class Jd extends Kn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class O2 extends Jd{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const k0=new vn,FM=new nt,BM=new nt;class Eb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new vn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new W_,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new Cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;FM.setFromMatrixPosition(t.matrixWorld),e.position.copy(FM),BM.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(BM),e.updateMatrixWorld(),k0.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(k0,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===$u||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(k0)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Kh=new nt,Qh=new Tc,ca=new nt;class Tb extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vn,this.projectionMatrix=new vn,this.projectionMatrixInverse=new vn,this.coordinateSystem=_a,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kh,Qh,ca),ca.x===1&&ca.y===1&&ca.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kh,Qh,ca.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Kh,Qh,ca),ca.x===1&&ca.y===1&&ca.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kh,Qh,ca.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fs=new nt,IM=new De,HM=new De;class Ti extends Tb{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pd*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fs.x,Fs.y).multiplyScalar(-t/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fs.x,Fs.y).multiplyScalar(-t/Fs.z)}getViewSize(t,e){return this.getViewBounds(t,IM,HM),e.subVectors(HM,IM)}setViewOffset(t,e,i,a,l,u){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yd*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*a/d,e-=u.offsetY*i/h,a*=u.width/d,i*=u.height/h}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class P2 extends Eb{constructor(){super(new Ti(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Pd*2*t.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,l=t.distance||e.far;(i!==e.fov||a!==e.aspect||l!==e.far)&&(e.fov=i,e.aspect=a,e.far=l,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class z2 extends Jd{constructor(t,e,i=0,a=Math.PI/3,l=0,u=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kn.DEFAULT_UP),this.updateMatrix(),this.target=new Kn,this.distance=i,this.angle=a,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new P2}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class gf extends Tb{constructor(t=-1,e=1,i=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-t,u=i+t,f=a+e,d=a-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class F2 extends Eb{constructor(){super(new gf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ab extends Jd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kn.DEFAULT_UP),this.updateMatrix(),this.target=new Kn,this.shadow=new F2}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class wb extends Jd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vl=-90,kl=1;class B2 extends Kn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Ti(Vl,kl,t,e);a.layers=this.layers,this.add(a);const l=new Ti(Vl,kl,t,e);l.layers=this.layers,this.add(l);const u=new Ti(Vl,kl,t,e);u.layers=this.layers,this.add(u);const f=new Ti(Vl,kl,t,e);f.layers=this.layers,this.add(f);const d=new Ti(Vl,kl,t,e);d.layers=this.layers,this.add(d);const h=new Ti(Vl,kl,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,l,u,f,d]=e;for(const h of e)this.remove(h);if(t===_a)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===$u)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,h,m]=this.children,v=t.getRenderTarget(),_=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(i,0,a),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,1,a),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(i,2,a),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(i,3,a),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(i,4,a),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=b,t.setRenderTarget(i,5,a),y&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(v,_,x),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}}class I2 extends Ti{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class H2{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=G2.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function G2(){this._document.hidden===!1&&this.reset()}function GM(s,t,e,i){const a=V2(i);switch(e){case lb:return s*t;case ub:return s*t/a.components*a.byteLength;case F_:return s*t/a.components*a.byteLength;case dc:return s*t*2/a.components*a.byteLength;case B_:return s*t*2/a.components*a.byteLength;case cb:return s*t*3/a.components*a.byteLength;case Yr:return s*t*4/a.components*a.byteLength;case I_:return s*t*4/a.components*a.byteLength;case gd:case _d:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case vd:case xd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mg:case Eg:return Math.max(s,16)*Math.max(t,8)/4;case Sg:case bg:return Math.max(s,8)*Math.max(t,8)/2;case Tg:case Ag:case Cg:case Rg:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case wg:case Dg:case Lg:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ug:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ng:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Og:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Pg:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case zg:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Fg:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Bg:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ig:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Hg:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Gg:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Vg:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case kg:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Xg:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Wg:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Yg:case qg:case jg:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Zg:case Kg:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Qg:case Jg:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V2(s){switch(s){case $i:case rb:return{byteLength:1,components:1};case Qu:case ab:case nr:return{byteLength:2,components:1};case P_:case z_:return{byteLength:2,components:4};case Ta:case O_:case ga:return{byteLength:4,components:1};case sb:case ob:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:w_}}));typeof window<"u"&&(window.__THREE__?xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=w_);function Cb(){let s=null,t=!1,e=null,i=null;function a(l,u){e(l,u),i=s.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(a),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){s=l}}}function k2(s){const t=new WeakMap;function e(f,d){const h=f.array,m=f.usage,v=h.byteLength,_=s.createBuffer();s.bindBuffer(d,_),s.bufferData(d,h,m),f.onUploadCallback();let x;if(h instanceof Float32Array)x=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=s.SHORT;else if(h instanceof Uint32Array)x=s.UNSIGNED_INT;else if(h instanceof Int32Array)x=s.INT;else if(h instanceof Int8Array)x=s.BYTE;else if(h instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function i(f,d,h){const m=d.array,v=d.updateRanges;if(s.bindBuffer(h,f),v.length===0)s.bufferSubData(h,0,m);else{v.sort((x,S)=>x.start-S.start);let _=0;for(let x=1;x<v.length;x++){const S=v[_],b=v[x];b.start<=S.start+S.count+1?S.count=Math.max(S.count,b.start+b.count-S.start):(++_,v[_]=b)}v.length=_+1;for(let x=0,S=v.length;x<S;x++){const b=v[x];s.bufferSubData(h,b.start*m.BYTES_PER_ELEMENT,m,b.start,b.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(s.deleteBuffer(d.buffer),t.delete(f))}function u(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=t.get(f);(!m||m.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=t.get(f);if(h===void 0)t.set(f,e(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:a,remove:l,update:u}}var X2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W2=`#ifdef USE_ALPHAHASH
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
#endif`,Y2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K2=`#ifdef USE_AOMAP
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
#endif`,Q2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,J2=`#ifdef USE_BATCHING
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
#endif`,$2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nC=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iC=`#ifdef USE_IRIDESCENCE
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
#endif`,rC=`#ifdef USE_BUMPMAP
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
#endif`,aC=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hC=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dC=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,pC=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mC=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_C=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yC="gl_FragColor = linearToOutputTexel( gl_FragColor );",SC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EC=`#ifdef USE_ENVMAP
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
#endif`,TC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,AC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,CC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,LC=`#ifdef USE_GRADIENTMAP
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
}`,UC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,NC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PC=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,zC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,FC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,BC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,IC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,HC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GC=`PhysicalMaterial material;
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
#endif`,VC=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,kC=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,XC=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WC=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qC=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZC=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$C=`#if defined( USE_POINTS_UV )
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
#endif`,tR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aR=`#ifdef USE_MORPHTARGETS
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
#endif`,sR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hR=`#ifdef USE_NORMALMAP
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
#endif`,dR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_R=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ER=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,AR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,wR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,CR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,RR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DR=`#ifdef USE_SKINNING
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
#endif`,LR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UR=`#ifdef USE_SKINNING
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
#endif`,NR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FR=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,BR=`#ifdef USE_TRANSMISSION
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
#endif`,IR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,XR=`uniform sampler2D t2D;
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
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZR=`#include <common>
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
}`,KR=`#if DEPTH_PACKING == 3200
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
}`,QR=`#define DISTANCE
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
}`,JR=`#define DISTANCE
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
void main () {
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
}`,$R=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e3=`uniform float scale;
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
}`,n3=`uniform vec3 diffuse;
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
}`,i3=`#include <common>
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
}`,r3=`uniform vec3 diffuse;
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
}`,a3=`#define LAMBERT
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
}`,s3=`#define LAMBERT
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
}`,o3=`#define MATCAP
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
}`,l3=`#define MATCAP
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
}`,c3=`#define NORMAL
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
}`,u3=`#define NORMAL
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
}`,f3=`#define PHONG
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
}`,h3=`#define PHONG
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
}`,d3=`#define STANDARD
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
}`,p3=`#define STANDARD
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
}`,m3=`#define TOON
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
}`,g3=`#define TOON
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
}`,_3=`uniform float size;
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
}`,v3=`uniform vec3 diffuse;
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
}`,x3=`#include <common>
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
}`,y3=`uniform vec3 color;
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
}`,S3=`uniform float rotation;
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
}`,M3=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:X2,alphahash_pars_fragment:W2,alphamap_fragment:Y2,alphamap_pars_fragment:q2,alphatest_fragment:j2,alphatest_pars_fragment:Z2,aomap_fragment:K2,aomap_pars_fragment:Q2,batching_pars_vertex:J2,batching_vertex:$2,begin_vertex:tC,beginnormal_vertex:eC,bsdfs:nC,iridescence_fragment:iC,bumpmap_pars_fragment:rC,clipping_planes_fragment:aC,clipping_planes_pars_fragment:sC,clipping_planes_pars_vertex:oC,clipping_planes_vertex:lC,color_fragment:cC,color_pars_fragment:uC,color_pars_vertex:fC,color_vertex:hC,common:dC,cube_uv_reflection_fragment:pC,defaultnormal_vertex:mC,displacementmap_pars_vertex:gC,displacementmap_vertex:_C,emissivemap_fragment:vC,emissivemap_pars_fragment:xC,colorspace_fragment:yC,colorspace_pars_fragment:SC,envmap_fragment:MC,envmap_common_pars_fragment:bC,envmap_pars_fragment:EC,envmap_pars_vertex:TC,envmap_physical_pars_fragment:zC,envmap_vertex:AC,fog_vertex:wC,fog_pars_vertex:CC,fog_fragment:RC,fog_pars_fragment:DC,gradientmap_pars_fragment:LC,lightmap_pars_fragment:UC,lights_lambert_fragment:NC,lights_lambert_pars_fragment:OC,lights_pars_begin:PC,lights_toon_fragment:FC,lights_toon_pars_fragment:BC,lights_phong_fragment:IC,lights_phong_pars_fragment:HC,lights_physical_fragment:GC,lights_physical_pars_fragment:VC,lights_fragment_begin:kC,lights_fragment_maps:XC,lights_fragment_end:WC,logdepthbuf_fragment:YC,logdepthbuf_pars_fragment:qC,logdepthbuf_pars_vertex:jC,logdepthbuf_vertex:ZC,map_fragment:KC,map_pars_fragment:QC,map_particle_fragment:JC,map_particle_pars_fragment:$C,metalnessmap_fragment:tR,metalnessmap_pars_fragment:eR,morphinstance_vertex:nR,morphcolor_vertex:iR,morphnormal_vertex:rR,morphtarget_pars_vertex:aR,morphtarget_vertex:sR,normal_fragment_begin:oR,normal_fragment_maps:lR,normal_pars_fragment:cR,normal_pars_vertex:uR,normal_vertex:fR,normalmap_pars_fragment:hR,clearcoat_normal_fragment_begin:dR,clearcoat_normal_fragment_maps:pR,clearcoat_pars_fragment:mR,iridescence_pars_fragment:gR,opaque_fragment:_R,packing:vR,premultiplied_alpha_fragment:xR,project_vertex:yR,dithering_fragment:SR,dithering_pars_fragment:MR,roughnessmap_fragment:bR,roughnessmap_pars_fragment:ER,shadowmap_pars_fragment:TR,shadowmap_pars_vertex:AR,shadowmap_vertex:wR,shadowmask_pars_fragment:CR,skinbase_vertex:RR,skinning_pars_vertex:DR,skinning_vertex:LR,skinnormal_vertex:UR,specularmap_fragment:NR,specularmap_pars_fragment:OR,tonemapping_fragment:PR,tonemapping_pars_fragment:zR,transmission_fragment:FR,transmission_pars_fragment:BR,uv_pars_fragment:IR,uv_pars_vertex:HR,uv_vertex:GR,worldpos_vertex:VR,background_vert:kR,background_frag:XR,backgroundCube_vert:WR,backgroundCube_frag:YR,cube_vert:qR,cube_frag:jR,depth_vert:ZR,depth_frag:KR,distance_vert:QR,distance_frag:JR,equirect_vert:$R,equirect_frag:t3,linedashed_vert:e3,linedashed_frag:n3,meshbasic_vert:i3,meshbasic_frag:r3,meshlambert_vert:a3,meshlambert_frag:s3,meshmatcap_vert:o3,meshmatcap_frag:l3,meshnormal_vert:c3,meshnormal_frag:u3,meshphong_vert:f3,meshphong_frag:h3,meshphysical_vert:d3,meshphysical_frag:p3,meshtoon_vert:m3,meshtoon_frag:g3,points_vert:_3,points_frag:v3,shadow_vert:x3,shadow_frag:y3,sprite_vert:S3,sprite_frag:M3},Gt={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},da={basic:{uniforms:Ii([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ii([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ii([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ii([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ii([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ii([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ii([Gt.points,Gt.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ii([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ii([Gt.common,Gt.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ii([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ii([Gt.sprite,Gt.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:Ii([Gt.common,Gt.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:Ii([Gt.lights,Gt.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};da.physical={uniforms:Ii([da.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Jh={r:0,b:0,g:0},Eo=new Aa,b3=new vn;function E3(s,t,e,i,a,l){const u=new ye(0);let f=a===!0?0:1,d,h,m=null,v=0,_=null;function x(A){let L=A.isScene===!0?A.background:null;if(L&&L.isTexture){const w=A.backgroundBlurriness>0;L=t.get(L,w)}return L}function S(A){let L=!1;const w=x(A);w===null?y(u,f):w&&w.isColor&&(y(w,1),L=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?e.buffers.color.setClear(0,0,0,1,l):U==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,l),(s.autoClear||L)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(A,L){const w=x(L);w&&(w.isCubeTexture||w.mapping===Kd)?(h===void 0&&(h=new li(new Yo(1,1,1),new ui({name:"BackgroundCubeMaterial",uniforms:gc(da.backgroundCube.uniforms),vertexShader:da.backgroundCube.vertexShader,fragmentShader:da.backgroundCube.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,O,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Eo.copy(L.backgroundRotation),Eo.x*=-1,Eo.y*=-1,Eo.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Eo.y*=-1,Eo.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(b3.makeRotationFromEuler(Eo)),h.material.toneMapped=Ze.getTransfer(w.colorSpace)!==rn,(m!==w||v!==w.version||_!==s.toneMapping)&&(h.material.needsUpdate=!0,m=w,v=w.version,_=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(d===void 0&&(d=new li(new ba(2,2),new ui({name:"BackgroundMaterial",uniforms:gc(da.background.uniforms),vertexShader:da.background.vertexShader,fragmentShader:da.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=w,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=Ze.getTransfer(w.colorSpace)!==rn,w.matrixAutoUpdate===!0&&w.updateMatrix(),d.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||v!==w.version||_!==s.toneMapping)&&(d.material.needsUpdate=!0,m=w,v=w.version,_=s.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null))}function y(A,L){A.getRGB(Jh,Sb(s)),e.buffers.color.setClear(Jh.r,Jh.g,Jh.b,L,l)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(A,L=1){u.set(A),f=L,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,y(u,f)},render:S,addToRenderList:b,dispose:M}}function T3(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},a=_(null);let l=a,u=!1;function f(I,V,$,Z,Y){let z=!1;const B=v(I,Z,$,V);l!==B&&(l=B,h(l.object)),z=x(I,Z,$,Y),z&&S(I,Z,$,Y),Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,w(I,V,$,Z),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return s.createVertexArray()}function h(I){return s.bindVertexArray(I)}function m(I){return s.deleteVertexArray(I)}function v(I,V,$,Z){const Y=Z.wireframe===!0;let z=i[V.id];z===void 0&&(z={},i[V.id]=z);const B=I.isInstancedMesh===!0?I.id:0;let tt=z[B];tt===void 0&&(tt={},z[B]=tt);let rt=tt[$.id];rt===void 0&&(rt={},tt[$.id]=rt);let G=rt[Y];return G===void 0&&(G=_(d()),rt[Y]=G),G}function _(I){const V=[],$=[],Z=[];for(let Y=0;Y<e;Y++)V[Y]=0,$[Y]=0,Z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:Z,object:I,attributes:{},index:null}}function x(I,V,$,Z){const Y=l.attributes,z=V.attributes;let B=0;const tt=$.getAttributes();for(const rt in tt)if(tt[rt].location>=0){const F=Y[rt];let Q=z[rt];if(Q===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),F===void 0||F.attribute!==Q||Q&&F.data!==Q.data)return!0;B++}return l.attributesNum!==B||l.index!==Z}function S(I,V,$,Z){const Y={},z=V.attributes;let B=0;const tt=$.getAttributes();for(const rt in tt)if(tt[rt].location>=0){let F=z[rt];F===void 0&&(rt==="instanceMatrix"&&I.instanceMatrix&&(F=I.instanceMatrix),rt==="instanceColor"&&I.instanceColor&&(F=I.instanceColor));const Q={};Q.attribute=F,F&&F.data&&(Q.data=F.data),Y[rt]=Q,B++}l.attributes=Y,l.attributesNum=B,l.index=Z}function b(){const I=l.newAttributes;for(let V=0,$=I.length;V<$;V++)I[V]=0}function y(I){M(I,0)}function M(I,V){const $=l.newAttributes,Z=l.enabledAttributes,Y=l.attributeDivisors;$[I]=1,Z[I]===0&&(s.enableVertexAttribArray(I),Z[I]=1),Y[I]!==V&&(s.vertexAttribDivisor(I,V),Y[I]=V)}function A(){const I=l.newAttributes,V=l.enabledAttributes;for(let $=0,Z=V.length;$<Z;$++)V[$]!==I[$]&&(s.disableVertexAttribArray($),V[$]=0)}function L(I,V,$,Z,Y,z,B){B===!0?s.vertexAttribIPointer(I,V,$,Y,z):s.vertexAttribPointer(I,V,$,Z,Y,z)}function w(I,V,$,Z){b();const Y=Z.attributes,z=$.getAttributes(),B=V.defaultAttributeValues;for(const tt in z){const rt=z[tt];if(rt.location>=0){let G=Y[tt];if(G===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){const F=G.normalized,Q=G.itemSize,_t=t.get(G);if(_t===void 0)continue;const Mt=_t.buffer,Lt=_t.type,it=_t.bytesPerElement,gt=Lt===s.INT||Lt===s.UNSIGNED_INT||G.gpuType===O_;if(G.isInterleavedBufferAttribute){const Et=G.data,zt=Et.stride,ee=G.offset;if(Et.isInstancedInterleavedBuffer){for(let Kt=0;Kt<rt.locationSize;Kt++)M(rt.location+Kt,Et.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Kt=0;Kt<rt.locationSize;Kt++)y(rt.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Kt=0;Kt<rt.locationSize;Kt++)L(rt.location+Kt,Q/rt.locationSize,Lt,F,zt*it,(ee+Q/rt.locationSize*Kt)*it,gt)}else{if(G.isInstancedBufferAttribute){for(let Et=0;Et<rt.locationSize;Et++)M(rt.location+Et,G.meshPerAttribute);I.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Et=0;Et<rt.locationSize;Et++)y(rt.location+Et);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let Et=0;Et<rt.locationSize;Et++)L(rt.location+Et,Q/rt.locationSize,Lt,F,Q*it,Q/rt.locationSize*Et*it,gt)}}else if(B!==void 0){const F=B[tt];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(rt.location,F);break;case 3:s.vertexAttrib3fv(rt.location,F);break;case 4:s.vertexAttrib4fv(rt.location,F);break;default:s.vertexAttrib1fv(rt.location,F)}}}}A()}function U(){D();for(const I in i){const V=i[I];for(const $ in V){const Z=V[$];for(const Y in Z){const z=Z[Y];for(const B in z)m(z[B].object),delete z[B];delete Z[Y]}}delete i[I]}}function O(I){if(i[I.id]===void 0)return;const V=i[I.id];for(const $ in V){const Z=V[$];for(const Y in Z){const z=Z[Y];for(const B in z)m(z[B].object),delete z[B];delete Z[Y]}}delete i[I.id]}function R(I){for(const V in i){const $=i[V];for(const Z in $){const Y=$[Z];if(Y[I.id]===void 0)continue;const z=Y[I.id];for(const B in z)m(z[B].object),delete z[B];delete Y[I.id]}}}function T(I){for(const V in i){const $=i[V],Z=I.isInstancedMesh===!0?I.id:0,Y=$[Z];if(Y!==void 0){for(const z in Y){const B=Y[z];for(const tt in B)m(B[tt].object),delete B[tt];delete Y[z]}delete $[Z],Object.keys($).length===0&&delete i[V]}}}function D(){k(),u=!0,l!==a&&(l=a,h(l.object))}function k(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:D,resetDefaultState:k,dispose:U,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:y,disableUnusedAttributes:A}}function A3(s,t,e){let i;function a(h){i=h}function l(h,m){s.drawArrays(i,h,m),e.update(m,i,1)}function u(h,m,v){v!==0&&(s.drawArraysInstanced(i,h,m,v),e.update(m,i,v))}function f(h,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,v);let x=0;for(let S=0;S<v;S++)x+=m[S];e.update(x,i,1)}function d(h,m,v,_){if(v===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let S=0;S<h.length;S++)u(h[S],m[S],_[S]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,m,0,_,0,v);let S=0;for(let b=0;b<v;b++)S+=m[b]*_[b];e.update(S,i,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function w3(s,t,e,i){let a;function l(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");a=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(R){return!(R!==Yr&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(R){const T=R===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==$i&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ga&&!T)}function d(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const m=d(h);m!==h&&(xe("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const v=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),O=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:S,maxTextureSize:b,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:A,maxVaryings:L,maxFragmentUniforms:w,maxSamples:U,samples:O}}function C3(s){const t=this;let e=null,i=0,a=!1,l=!1;const u=new Hs,f=new Ne,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||i!==0||a;return a=_,i=v.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){e=m(v,_,0)},this.setState=function(v,_,x){const S=v.clippingPlanes,b=v.clipIntersection,y=v.clipShadows,M=s.get(v);if(!a||S===null||S.length===0||l&&!y)l?m(null):h();else{const A=l?0:i,L=A*4;let w=M.clippingState||null;d.value=w,w=m(S,_,L,x);for(let U=0;U!==L;++U)w[U]=e[U];M.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function h(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function m(v,_,x,S){const b=v!==null?v.length:0;let y=null;if(b!==0){if(y=d.value,S!==!0||y===null){const M=x+b*4,A=_.matrixWorldInverse;f.getNormalMatrix(A),(y===null||y.length<M)&&(y=new Float32Array(M));for(let L=0,w=x;L!==b;++L,w+=4)u.copy(v[L]).applyMatrix4(A,f),u.normal.toArray(y,w),y[w+3]=u.constant}d.value=y,d.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,y}}const Vs=4,VM=[.125,.215,.35,.446,.526,.582],Uo=20,R3=256,Eu=new gf,kM=new ye;let X0=null,W0=0,Y0=0,q0=!1;const D3=new nt;class XM{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,a=100,l={}){const{size:u=256,position:f=D3}=l;X0=this._renderer.getRenderTarget(),W0=this._renderer.getActiveCubeFace(),Y0=this._renderer.getActiveMipmapLevel(),q0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,a,d,f),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=YM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(X0,W0,Y0),this._renderer.xr.enabled=q0,t.scissorTest=!1,Xl(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Wo||t.mapping===hc?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),X0=this._renderer.getRenderTarget(),W0=this._renderer.getActiveCubeFace(),Y0=this._renderer.getActiveMipmapLevel(),q0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:nr,format:Yr,colorSpace:pc,depthBuffer:!1},a=WM(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=WM(t,e,i);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=L3(l)),this._blurMaterial=N3(l,t,e),this._ggxMaterial=U3(l,t,e)}return a}_compileMaterial(t){const e=new li(new Lr,t);this._renderer.compile(e,Eu)}_sceneToCubeUV(t,e,i,a,l){const d=new Ti(90,1,e,i),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(kM),v.toneMapping=Sa,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new li(new Yo,new mc({name:"PMREM.Background",side:er,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let M=!1;const A=t.background;A?A.isColor&&(y.color.copy(A),t.background=null,M=!0):(y.color.copy(kM),M=!0);for(let L=0;L<6;L++){const w=L%3;w===0?(d.up.set(0,h[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[L],l.y,l.z)):w===1?(d.up.set(0,0,h[L]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[L],l.z)):(d.up.set(0,h[L],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[L]));const U=this._cubeSize;Xl(a,w*U,L>2?U:0,U,U),v.setRenderTarget(a),M&&v.render(b,d),v.render(t,d)}v.toneMapping=x,v.autoClear=_,t.background=A}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Wo||t.mapping===hc;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=qM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=YM());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;Xl(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(u,Eu)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(t,l-1,l);e.autoClear=i}_applyGGXFilter(t,e,i){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[i];f.material=u;const d=u.uniforms,h=i/(this._lodMeshes.length-1),m=e/(this._lodMeshes.length-1),v=Math.sqrt(h*h-m*m),_=0+h*1.25,x=v*_,{_lodMax:S}=this,b=this._sizeLods[i],y=3*b*(i>S-Vs?i-S+Vs:0),M=4*(this._cubeSize-b);d.envMap.value=t.texture,d.roughness.value=x,d.mipInt.value=S-e,Xl(l,y,M,3*b,2*b),a.setRenderTarget(l),a.render(f,Eu),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=S-i,Xl(t,y,M,3*b,2*b),a.setRenderTarget(t),a.render(f,Eu)}_blur(t,e,i,a,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,e,i,a,"latitudinal",l),this._halfBlur(u,t,i,i,a,"longitudinal",l)}_halfBlur(t,e,i,a,l,u,f){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&tn("blur direction must be either latitudinal or longitudinal!");const m=3,v=this._lodMeshes[a];v.material=h;const _=h.uniforms,x=this._sizeLods[i]-1,S=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Uo-1),b=l/S,y=isFinite(l)?1+Math.floor(m*b):Uo;y>Uo&&xe(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Uo}`);const M=[];let A=0;for(let R=0;R<Uo;++R){const T=R/b,D=Math.exp(-T*T/2);M.push(D),R===0?A+=D:R<y&&(A+=2*D)}for(let R=0;R<M.length;R++)M[R]=M[R]/A;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=M,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:L}=this;_.dTheta.value=S,_.mipInt.value=L-i;const w=this._sizeLods[a],U=3*w*(a>L-Vs?a-L+Vs:0),O=4*(this._cubeSize-w);Xl(e,U,O,3*w,2*w),d.setRenderTarget(e),d.render(v,Eu)}}function L3(s){const t=[],e=[],i=[];let a=s;const l=s-Vs+1+VM.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);t.push(f);let d=1/f;u>s-Vs?d=VM[u-s+Vs-1]:u===0&&(d=0),e.push(d);const h=1/(f-2),m=-h,v=1+h,_=[m,m,v,m,v,v,m,m,v,v,m,v],x=6,S=6,b=3,y=2,M=1,A=new Float32Array(b*S*x),L=new Float32Array(y*S*x),w=new Float32Array(M*S*x);for(let O=0;O<x;O++){const R=O%3*2/3-1,T=O>2?0:-1,D=[R,T,0,R+2/3,T,0,R+2/3,T+1,0,R,T,0,R+2/3,T+1,0,R,T+1,0];A.set(D,b*S*O),L.set(_,y*S*O);const k=[O,O,O,O,O,O];w.set(k,M*S*O)}const U=new Lr;U.setAttribute("position",new Ma(A,b)),U.setAttribute("uv",new Ma(L,y)),U.setAttribute("faceIndex",new Ma(w,M)),i.push(new li(U,null)),a>Vs&&a--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function WM(s,t,e){const i=new Ri(s,t,e);return i.texture.mapping=Kd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xl(s,t,e,i,a){s.viewport.set(t,e,i,a),s.scissor.set(t,e,i,a)}function U3(s,t,e){return new ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$d(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function N3(s,t,e){const i=new Float32Array(Uo),a=new nt(0,1,0);return new ui({name:"SphericalGaussianBlur",defines:{n:Uo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function YM(){return new ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function qM(){return new ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function $d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Rb extends Ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new xb(a),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Yo(5,5,5),l=new ui({name:"CubemapFromEquirect",uniforms:gc(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:er,blending:ya});l.uniforms.tEquirect.value=e;const u=new li(a,l),f=e.minFilter;return e.minFilter===No&&(e.minFilter=ci),new B2(1,10,this).update(t,u),e.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,e=!0,i=!0,a=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(e,i,a);t.setRenderTarget(l)}}function O3(s){let t=new WeakMap,e=new WeakMap,i=null;function a(_,x=!1){return _==null?null:x?u(_):l(_)}function l(_){if(_&&_.isTexture){const x=_.mapping;if(x===p0||x===m0)if(t.has(_)){const S=t.get(_).texture;return f(S,_.mapping)}else{const S=_.image;if(S&&S.height>0){const b=new Rb(S.height);return b.fromEquirectangularTexture(s,_),t.set(_,b),_.addEventListener("dispose",h),f(b.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const x=_.mapping,S=x===p0||x===m0,b=x===Wo||x===hc;if(S||b){let y=e.get(_);const M=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return i===null&&(i=new XM(s)),y=S?i.fromEquirectangular(_,y):i.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,e.set(_,y),y.texture;if(y!==void 0)return y.texture;{const A=_.image;return S&&A&&A.height>0||b&&A&&d(A)?(i===null&&(i=new XM(s)),y=S?i.fromEquirectangular(_):i.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,e.set(_,y),_.addEventListener("dispose",m),y.texture):null}}}return _}function f(_,x){return x===p0?_.mapping=Wo:x===m0&&(_.mapping=hc),_}function d(_){let x=0;const S=6;for(let b=0;b<S;b++)_[b]!==void 0&&x++;return x===S}function h(_){const x=_.target;x.removeEventListener("dispose",h);const S=t.get(x);S!==void 0&&(t.delete(x),S.dispose())}function m(_){const x=_.target;x.removeEventListener("dispose",m);const S=e.get(x);S!==void 0&&(e.delete(x),S.dispose())}function v(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:v}}function P3(s){const t={};function e(i){if(t[i]!==void 0)return t[i];const a=s.getExtension(i);return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&Od("WebGLRenderer: "+i+" extension not supported."),a}}}function z3(s,t,e,i){const a={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&t.remove(_.index);for(const S in _.attributes)t.remove(_.attributes[S]);_.removeEventListener("dispose",u),delete a[_.id];const x=l.get(_);x&&(t.remove(x),l.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function f(v,_){return a[_.id]===!0||(_.addEventListener("dispose",u),a[_.id]=!0,e.memory.geometries++),_}function d(v){const _=v.attributes;for(const x in _)t.update(_[x],s.ARRAY_BUFFER)}function h(v){const _=[],x=v.index,S=v.attributes.position;let b=0;if(S===void 0)return;if(x!==null){const A=x.array;b=x.version;for(let L=0,w=A.length;L<w;L+=3){const U=A[L+0],O=A[L+1],R=A[L+2];_.push(U,O,O,R,R,U)}}else{const A=S.array;b=S.version;for(let L=0,w=A.length/3-1;L<w;L+=3){const U=L+0,O=L+1,R=L+2;_.push(U,O,O,R,R,U)}}const y=new(S.count>=65535?_b:gb)(_,1);y.version=b;const M=l.get(v);M&&t.remove(M),l.set(v,y)}function m(v){const _=l.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&h(v)}else h(v);return l.get(v)}return{get:f,update:d,getWireframeAttribute:m}}function F3(s,t,e){let i;function a(_){i=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function d(_,x){s.drawElements(i,x,l,_*u),e.update(x,i,1)}function h(_,x,S){S!==0&&(s.drawElementsInstanced(i,x,l,_*u,S),e.update(x,i,S))}function m(_,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,l,_,0,S);let y=0;for(let M=0;M<S;M++)y+=x[M];e.update(y,i,1)}function v(_,x,S,b){if(S===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<_.length;M++)h(_[M]/u,x[M],b[M]);else{y.multiDrawElementsInstancedWEBGL(i,x,0,l,_,0,b,0,S);let M=0;for(let A=0;A<S;A++)M+=x[A]*b[A];e.update(M,i,1)}}this.setMode=a,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=v}function B3(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,u,f){switch(e.calls++,u){case s.TRIANGLES:e.triangles+=f*(l/3);break;case s.LINES:e.lines+=f*(l/2);break;case s.LINE_STRIP:e.lines+=f*(l-1);break;case s.LINE_LOOP:e.lines+=f*l;break;case s.POINTS:e.points+=f*l;break;default:tn("WebGLInfo: Unknown draw mode:",u);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function I3(s,t,e){const i=new WeakMap,a=new Cn;function l(u,f,d){const h=u.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=m!==void 0?m.length:0;let _=i.get(f);if(_===void 0||_.count!==v){let k=function(){T.dispose(),i.delete(f),f.removeEventListener("dispose",k)};var x=k;_!==void 0&&_.texture.dispose();const S=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let w=0;S===!0&&(w=1),b===!0&&(w=2),y===!0&&(w=3);let U=f.attributes.position.count*w,O=1;U>t.maxTextureSize&&(O=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const R=new Float32Array(U*O*4*v),T=new db(R,U,O,v);T.type=ga,T.needsUpdate=!0;const D=w*4;for(let I=0;I<v;I++){const V=M[I],$=A[I],Z=L[I],Y=U*O*4*I;for(let z=0;z<V.count;z++){const B=z*D;S===!0&&(a.fromBufferAttribute(V,z),R[Y+B+0]=a.x,R[Y+B+1]=a.y,R[Y+B+2]=a.z,R[Y+B+3]=0),b===!0&&(a.fromBufferAttribute($,z),R[Y+B+4]=a.x,R[Y+B+5]=a.y,R[Y+B+6]=a.z,R[Y+B+7]=0),y===!0&&(a.fromBufferAttribute(Z,z),R[Y+B+8]=a.x,R[Y+B+9]=a.y,R[Y+B+10]=a.z,R[Y+B+11]=Z.itemSize===4?a.w:1)}}_={count:v,texture:T,size:new De(U,O)},i.set(f,_),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,e);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const b=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(s,"morphTargetBaseInfluence",b),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function H3(s,t,e,i,a){let l=new WeakMap;function u(h){const m=a.render.frame,v=h.geometry,_=t.get(h,v);if(l.get(_)!==m&&(t.update(_),l.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==m&&(e.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return _}function f(){l=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),i.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:u,dispose:f}}const G3={[C_]:"LINEAR_TONE_MAPPING",[R_]:"REINHARD_TONE_MAPPING",[D_]:"CINEON_TONE_MAPPING",[df]:"ACES_FILMIC_TONE_MAPPING",[U_]:"AGX_TONE_MAPPING",[N_]:"NEUTRAL_TONE_MAPPING",[L_]:"CUSTOM_TONE_MAPPING"};function V3(s,t,e,i,a){const l=new Ri(t,e,{type:s,depthBuffer:i,stencilBuffer:a}),u=new Ri(t,e,{type:nr,depthBuffer:!1,stencilBuffer:!1}),f=new Lr;f.setAttribute("position",new ir([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ir([0,2,0,0,2,0],2));const d=new Mb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new li(f,d),m=new gf(-1,1,1,-1,0,1);let v=null,_=null,x=!1,S,b=null,y=[],M=!1;this.setSize=function(A,L){l.setSize(A,L),u.setSize(A,L);for(let w=0;w<y.length;w++){const U=y[w];U.setSize&&U.setSize(A,L)}},this.setEffects=function(A){y=A,M=y.length>0&&y[0].isRenderPass===!0;const L=l.width,w=l.height;for(let U=0;U<y.length;U++){const O=y[U];O.setSize&&O.setSize(L,w)}},this.begin=function(A,L){if(x||A.toneMapping===Sa&&y.length===0)return!1;if(b=L,L!==null){const w=L.width,U=L.height;(l.width!==w||l.height!==U)&&this.setSize(w,U)}return M===!1&&A.setRenderTarget(l),S=A.toneMapping,A.toneMapping=Sa,!0},this.hasRenderPass=function(){return M},this.end=function(A,L){A.toneMapping=S,x=!0;let w=l,U=u;for(let O=0;O<y.length;O++){const R=y[O];if(R.enabled!==!1&&(R.render(A,U,w,L),R.needsSwap!==!1)){const T=w;w=U,U=T}}if(v!==A.outputColorSpace||_!==A.toneMapping){v=A.outputColorSpace,_=A.toneMapping,d.defines={},Ze.getTransfer(v)===rn&&(d.defines.SRGB_TRANSFER="");const O=G3[_];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=w.texture,A.setRenderTarget(b),A.render(h,m),b=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.dispose(),u.dispose(),f.dispose(),d.dispose()}}const Db=new Ci,t_=new ef(1,1),Lb=new db,Ub=new a2,Nb=new xb,jM=[],ZM=[],KM=new Float32Array(16),QM=new Float32Array(9),JM=new Float32Array(4);function wc(s,t,e){const i=s[0];if(i<=0||i>0)return s;const a=t*e;let l=jM[a];if(l===void 0&&(l=new Float32Array(a),jM[a]=l),t!==0){i.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=e,s[u].toArray(l,f)}return l}function ei(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ni(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function tp(s,t){let e=ZM[t];e===void 0&&(e=new Int32Array(t),ZM[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function k3(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function X3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ei(e,t))return;s.uniform2fv(this.addr,t),ni(e,t)}}function W3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ei(e,t))return;s.uniform3fv(this.addr,t),ni(e,t)}}function Y3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ei(e,t))return;s.uniform4fv(this.addr,t),ni(e,t)}}function q3(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ei(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ni(e,t)}else{if(ei(e,i))return;JM.set(i),s.uniformMatrix2fv(this.addr,!1,JM),ni(e,i)}}function j3(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ei(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ni(e,t)}else{if(ei(e,i))return;QM.set(i),s.uniformMatrix3fv(this.addr,!1,QM),ni(e,i)}}function Z3(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(ei(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ni(e,t)}else{if(ei(e,i))return;KM.set(i),s.uniformMatrix4fv(this.addr,!1,KM),ni(e,i)}}function K3(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Q3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ei(e,t))return;s.uniform2iv(this.addr,t),ni(e,t)}}function J3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ei(e,t))return;s.uniform3iv(this.addr,t),ni(e,t)}}function $3(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ei(e,t))return;s.uniform4iv(this.addr,t),ni(e,t)}}function tD(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function eD(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ei(e,t))return;s.uniform2uiv(this.addr,t),ni(e,t)}}function nD(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ei(e,t))return;s.uniform3uiv(this.addr,t),ni(e,t)}}function iD(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ei(e,t))return;s.uniform4uiv(this.addr,t),ni(e,t)}}function rD(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(t_.compareFunction=e.isReversedDepthBuffer()?G_:H_,l=t_):l=Db,e.setTexture2D(t||l,a)}function aD(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||Ub,a)}function sD(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||Nb,a)}function oD(s,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(s.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||Lb,a)}function lD(s){switch(s){case 5126:return k3;case 35664:return X3;case 35665:return W3;case 35666:return Y3;case 35674:return q3;case 35675:return j3;case 35676:return Z3;case 5124:case 35670:return K3;case 35667:case 35671:return Q3;case 35668:case 35672:return J3;case 35669:case 35673:return $3;case 5125:return tD;case 36294:return eD;case 36295:return nD;case 36296:return iD;case 35678:case 36198:case 36298:case 36306:case 35682:return rD;case 35679:case 36299:case 36307:return aD;case 35680:case 36300:case 36308:case 36293:return sD;case 36289:case 36303:case 36311:case 36292:return oD}}function cD(s,t){s.uniform1fv(this.addr,t)}function uD(s,t){const e=wc(t,this.size,2);s.uniform2fv(this.addr,e)}function fD(s,t){const e=wc(t,this.size,3);s.uniform3fv(this.addr,e)}function hD(s,t){const e=wc(t,this.size,4);s.uniform4fv(this.addr,e)}function dD(s,t){const e=wc(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function pD(s,t){const e=wc(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function mD(s,t){const e=wc(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function gD(s,t){s.uniform1iv(this.addr,t)}function _D(s,t){s.uniform2iv(this.addr,t)}function vD(s,t){s.uniform3iv(this.addr,t)}function xD(s,t){s.uniform4iv(this.addr,t)}function yD(s,t){s.uniform1uiv(this.addr,t)}function SD(s,t){s.uniform2uiv(this.addr,t)}function MD(s,t){s.uniform3uiv(this.addr,t)}function bD(s,t){s.uniform4uiv(this.addr,t)}function ED(s,t,e){const i=this.cache,a=t.length,l=tp(e,a);ei(i,l)||(s.uniform1iv(this.addr,l),ni(i,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=t_:u=Db;for(let f=0;f!==a;++f)e.setTexture2D(t[f]||u,l[f])}function TD(s,t,e){const i=this.cache,a=t.length,l=tp(e,a);ei(i,l)||(s.uniform1iv(this.addr,l),ni(i,l));for(let u=0;u!==a;++u)e.setTexture3D(t[u]||Ub,l[u])}function AD(s,t,e){const i=this.cache,a=t.length,l=tp(e,a);ei(i,l)||(s.uniform1iv(this.addr,l),ni(i,l));for(let u=0;u!==a;++u)e.setTextureCube(t[u]||Nb,l[u])}function wD(s,t,e){const i=this.cache,a=t.length,l=tp(e,a);ei(i,l)||(s.uniform1iv(this.addr,l),ni(i,l));for(let u=0;u!==a;++u)e.setTexture2DArray(t[u]||Lb,l[u])}function CD(s){switch(s){case 5126:return cD;case 35664:return uD;case 35665:return fD;case 35666:return hD;case 35674:return dD;case 35675:return pD;case 35676:return mD;case 5124:case 35670:return gD;case 35667:case 35671:return _D;case 35668:case 35672:return vD;case 35669:case 35673:return xD;case 5125:return yD;case 36294:return SD;case 36295:return MD;case 36296:return bD;case 35678:case 36198:case 36298:case 36306:case 35682:return ED;case 35679:case 36299:case 36307:return TD;case 35680:case 36300:case 36308:case 36293:return AD;case 36289:case 36303:case 36311:case 36292:return wD}}class RD{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=lD(e.type)}}class DD{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=CD(e.type)}}class LD{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(t,e[f.id],i)}}}const j0=/(\w+)(\])?(\[|\.)?/g;function $M(s,t){s.seq.push(t),s.map[t.id]=t}function UD(s,t,e){const i=s.name,a=i.length;for(j0.lastIndex=0;;){const l=j0.exec(i),u=j0.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&u+2===a){$M(e,h===void 0?new RD(f,s,t):new DD(f,s,t));break}else{let v=e.map[f];v===void 0&&(v=new LD(f),$M(e,v)),e=v}}}class Sd{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const f=t.getActiveUniform(e,u),d=t.getUniformLocation(e,f.name);UD(f,d,this)}const a=[],l=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(t,e,i,a){const l=this.map[e];l!==void 0&&l.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let l=0,u=e.length;l!==u;++l){const f=e[l],d=i[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,l=t.length;a!==l;++a){const u=t[a];u.id in e&&i.push(u)}return i}}function t1(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const ND=37297;let OD=0;function PD(s,t){const e=s.split(`
`),i=[],a=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let u=a;u<l;u++){const f=u+1;i.push(`${f===t?">":" "} ${f}: ${e[u]}`)}return i.join(`
`)}const e1=new Ne;function zD(s){Ze._getMatrix(e1,Ze.workingColorSpace,s);const t=`mat3( ${e1.elements.map(e=>e.toFixed(4))} )`;switch(Ze.getTransfer(s)){case Nd:return[t,"LinearTransferOETF"];case rn:return[t,"sRGBTransferOETF"];default:return xe("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function n1(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),l=(s.getShaderInfoLog(t)||"").trim();if(i&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return e.toUpperCase()+`

`+l+`

`+PD(s.getShaderSource(t),f)}else return l}function FD(s,t){const e=zD(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const BD={[C_]:"Linear",[R_]:"Reinhard",[D_]:"Cineon",[df]:"ACESFilmic",[U_]:"AgX",[N_]:"Neutral",[L_]:"Custom"};function ID(s,t){const e=BD[t];return e===void 0?(xe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const $h=new nt;function HD(){Ze.getLuminanceCoefficients($h);const s=$h.x.toFixed(4),t=$h.y.toFixed(4),e=$h.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GD(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lu).join(`
`)}function VD(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function kD(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=s.getActiveAttrib(t,a),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),e[u]={type:l.type,location:s.getAttribLocation(t,u),locationSize:f}}return e}function Lu(s){return s!==""}function i1(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function r1(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XD=/^[ \t]*#include +<([\w\d./]+)>/gm;function e_(s){return s.replace(XD,YD)}const WD=new Map;function YD(s,t){let e=Oe[t];if(e===void 0){const i=WD.get(t);if(i!==void 0)e=Oe[i],xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return e_(e)}const qD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a1(s){return s.replace(qD,jD)}function jD(s,t,e,i){let a="";for(let l=parseInt(t);l<parseInt(e);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function s1(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const ZD={[md]:"SHADOWMAP_TYPE_PCF",[Du]:"SHADOWMAP_TYPE_VSM"};function KD(s){return ZD[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const QD={[Wo]:"ENVMAP_TYPE_CUBE",[hc]:"ENVMAP_TYPE_CUBE",[Kd]:"ENVMAP_TYPE_CUBE_UV"};function JD(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":QD[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const $D={[hc]:"ENVMAP_MODE_REFRACTION"};function tL(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":$D[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eL={[nb]:"ENVMAP_BLENDING_MULTIPLY",[Bw]:"ENVMAP_BLENDING_MIX",[Iw]:"ENVMAP_BLENDING_ADD"};function nL(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":eL[s.combine]||"ENVMAP_BLENDING_NONE"}function iL(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function rL(s,t,e,i){const a=s.getContext(),l=e.defines;let u=e.vertexShader,f=e.fragmentShader;const d=KD(e),h=JD(e),m=tL(e),v=nL(e),_=iL(e),x=GD(e),S=VD(l),b=a.createProgram();let y,M,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Lu).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(Lu).join(`
`),M.length>0&&(M+=`
`)):(y=[s1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lu).join(`
`),M=[s1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sa?"#define TONE_MAPPING":"",e.toneMapping!==Sa?Oe.tonemapping_pars_fragment:"",e.toneMapping!==Sa?ID("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,FD("linearToOutputTexel",e.outputColorSpace),HD(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lu).join(`
`)),u=e_(u),u=i1(u,e),u=r1(u,e),f=e_(f),f=i1(f,e),f=r1(f,e),u=a1(u),f=a1(f),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",e.glslVersion===pM?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pM?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const L=A+y+u,w=A+M+f,U=t1(a,a.VERTEX_SHADER,L),O=t1(a,a.FRAGMENT_SHADER,w);a.attachShader(b,U),a.attachShader(b,O),e.index0AttributeName!==void 0?a.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(b,0,"position"),a.linkProgram(b);function R(I){if(s.debug.checkShaderErrors){const V=a.getProgramInfoLog(b)||"",$=a.getShaderInfoLog(U)||"",Z=a.getShaderInfoLog(O)||"",Y=V.trim(),z=$.trim(),B=Z.trim();let tt=!0,rt=!0;if(a.getProgramParameter(b,a.LINK_STATUS)===!1)if(tt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,b,U,O);else{const G=n1(a,U,"vertex"),F=n1(a,O,"fragment");tn("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(b,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+Y+`
`+G+`
`+F)}else Y!==""?xe("WebGLProgram: Program Info Log:",Y):(z===""||B==="")&&(rt=!1);rt&&(I.diagnostics={runnable:tt,programLog:Y,vertexShader:{log:z,prefix:y},fragmentShader:{log:B,prefix:M}})}a.deleteShader(U),a.deleteShader(O),T=new Sd(a,b),D=kD(a,b)}let T;this.getUniforms=function(){return T===void 0&&R(this),T};let D;this.getAttributes=function(){return D===void 0&&R(this),D};let k=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=a.getProgramParameter(b,ND)),k},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=OD++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=U,this.fragmentShader=O,this}let aL=0;class sL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),l=this._getShaderStage(i),u=this._getShaderCacheForMaterial(t);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new oL(t),e.set(t,i)),i}}class oL{constructor(t){this.id=aL++,this.code=t,this.usedTimes=0}}function lL(s,t,e,i,a,l){const u=new pb,f=new sL,d=new Set,h=[],m=new Map,v=i.logarithmicDepthBuffer;let _=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(T){return d.add(T),T===0?"uv":`uv${T}`}function b(T,D,k,I,V){const $=I.fog,Z=V.geometry,Y=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?I.environment:null,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,B=t.get(T.envMap||Y,z),tt=B&&B.mapping===Kd?B.image.height:null,rt=x[T.type];T.precision!==null&&(_=i.getMaxPrecision(T.precision),_!==T.precision&&xe("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const G=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,F=G!==void 0?G.length:0;let Q=0;Z.morphAttributes.position!==void 0&&(Q=1),Z.morphAttributes.normal!==void 0&&(Q=2),Z.morphAttributes.color!==void 0&&(Q=3);let _t,Mt,Lt,it;if(rt){const kt=da[rt];_t=kt.vertexShader,Mt=kt.fragmentShader}else _t=T.vertexShader,Mt=T.fragmentShader,f.update(T),Lt=f.getVertexShaderID(T),it=f.getFragmentShaderID(T);const gt=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),zt=V.isInstancedMesh===!0,ee=V.isBatchedMesh===!0,Kt=!!T.map,ze=!!T.matcap,qt=!!B,ae=!!T.aoMap,_e=!!T.lightMap,se=!!T.bumpMap,ct=!!T.normalMap,q=!!T.displacementMap,je=!!T.emissiveMap,Te=!!T.metalnessMap,ue=!!T.roughnessMap,Wt=T.anisotropy>0,H=T.clearcoat>0,C=T.dispersion>0,K=T.iridescence>0,vt=T.sheen>0,xt=T.transmission>0,dt=Wt&&!!T.anisotropyMap,Vt=H&&!!T.clearcoatMap,Rt=H&&!!T.clearcoatNormalMap,ie=H&&!!T.clearcoatRoughnessMap,Yt=K&&!!T.iridescenceMap,wt=K&&!!T.iridescenceThicknessMap,At=vt&&!!T.sheenColorMap,Ht=vt&&!!T.sheenRoughnessMap,Pt=!!T.specularMap,Ft=!!T.specularColorMap,pe=!!T.specularIntensityMap,X=xt&&!!T.transmissionMap,Dt=xt&&!!T.thicknessMap,Ct=!!T.gradientMap,Nt=!!T.alphaMap,Tt=T.alphaTest>0,mt=!!T.alphaHash,Xt=!!T.extensions;let le=Sa;T.toneMapped&&(gt===null||gt.isXRRenderTarget===!0)&&(le=s.toneMapping);const Xe={shaderID:rt,shaderType:T.type,shaderName:T.name,vertexShader:_t,fragmentShader:Mt,defines:T.defines,customVertexShaderID:Lt,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:ee,batchingColor:ee&&V._colorsTexture!==null,instancing:zt,instancingColor:zt&&V.instanceColor!==null,instancingMorph:zt&&V.morphTexture!==null,outputColorSpace:gt===null?s.outputColorSpace:gt.isXRRenderTarget===!0?gt.texture.colorSpace:pc,alphaToCoverage:!!T.alphaToCoverage,map:Kt,matcap:ze,envMap:qt,envMapMode:qt&&B.mapping,envMapCubeUVHeight:tt,aoMap:ae,lightMap:_e,bumpMap:se,normalMap:ct,displacementMap:q,emissiveMap:je,normalMapObjectSpace:ct&&T.normalMapType===Vw,normalMapTangentSpace:ct&&T.normalMapType===fb,metalnessMap:Te,roughnessMap:ue,anisotropy:Wt,anisotropyMap:dt,clearcoat:H,clearcoatMap:Vt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:ie,dispersion:C,iridescence:K,iridescenceMap:Yt,iridescenceThicknessMap:wt,sheen:vt,sheenColorMap:At,sheenRoughnessMap:Ht,specularMap:Pt,specularColorMap:Ft,specularIntensityMap:pe,transmission:xt,transmissionMap:X,thicknessMap:Dt,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===nc&&T.alphaToCoverage===!1,alphaMap:Nt,alphaTest:Tt,alphaHash:mt,combine:T.combine,mapUv:Kt&&S(T.map.channel),aoMapUv:ae&&S(T.aoMap.channel),lightMapUv:_e&&S(T.lightMap.channel),bumpMapUv:se&&S(T.bumpMap.channel),normalMapUv:ct&&S(T.normalMap.channel),displacementMapUv:q&&S(T.displacementMap.channel),emissiveMapUv:je&&S(T.emissiveMap.channel),metalnessMapUv:Te&&S(T.metalnessMap.channel),roughnessMapUv:ue&&S(T.roughnessMap.channel),anisotropyMapUv:dt&&S(T.anisotropyMap.channel),clearcoatMapUv:Vt&&S(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&S(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&S(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&S(T.iridescenceMap.channel),iridescenceThicknessMapUv:wt&&S(T.iridescenceThicknessMap.channel),sheenColorMapUv:At&&S(T.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&S(T.sheenRoughnessMap.channel),specularMapUv:Pt&&S(T.specularMap.channel),specularColorMapUv:Ft&&S(T.specularColorMap.channel),specularIntensityMapUv:pe&&S(T.specularIntensityMap.channel),transmissionMapUv:X&&S(T.transmissionMap.channel),thicknessMapUv:Dt&&S(T.thicknessMap.channel),alphaMapUv:Nt&&S(T.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ct||Wt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(Kt||Nt),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||Z.attributes.normal===void 0&&ct===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Et,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Q,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:le,decodeVideoTexture:Kt&&T.map.isVideoTexture===!0&&Ze.getTransfer(T.map.colorSpace)===rn,decodeVideoTextureEmissive:je&&T.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(T.emissiveMap.colorSpace)===rn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===pa,flipSided:T.side===er,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xt&&T.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&T.extensions.multiDraw===!0||ee)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Xe.vertexUv1s=d.has(1),Xe.vertexUv2s=d.has(2),Xe.vertexUv3s=d.has(3),d.clear(),Xe}function y(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)D.push(k),D.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(M(D,T),A(D,T),D.push(s.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function M(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function A(T,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),T.push(u.mask)}function L(T){const D=x[T.type];let k;if(D){const I=da[D];k=qo.clone(I.uniforms)}else k=T.uniforms;return k}function w(T,D){let k=m.get(D);return k!==void 0?++k.usedTimes:(k=new rL(s,D,T,a),h.push(k),m.set(D,k)),k}function U(T){if(--T.usedTimes===0){const D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),m.delete(T.cacheKey),T.destroy()}}function O(T){f.remove(T)}function R(){f.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:L,acquireProgram:w,releaseProgram:U,releaseShaderCache:O,programs:h,dispose:R}}function cL(){let s=new WeakMap;function t(u){return s.has(u)}function e(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function i(u){s.delete(u)}function a(u,f,d){s.get(u)[f]=d}function l(){s=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:l}}function uL(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function o1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function l1(){const s=[];let t=0;const e=[],i=[],a=[];function l(){t=0,e.length=0,i.length=0,a.length=0}function u(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function f(_,x,S,b,y,M){let A=s[t];return A===void 0?(A={id:_.id,object:_,geometry:x,material:S,materialVariant:u(_),groupOrder:b,renderOrder:_.renderOrder,z:y,group:M},s[t]=A):(A.id=_.id,A.object=_,A.geometry=x,A.material=S,A.materialVariant=u(_),A.groupOrder=b,A.renderOrder=_.renderOrder,A.z=y,A.group=M),t++,A}function d(_,x,S,b,y,M){const A=f(_,x,S,b,y,M);S.transmission>0?i.push(A):S.transparent===!0?a.push(A):e.push(A)}function h(_,x,S,b,y,M){const A=f(_,x,S,b,y,M);S.transmission>0?i.unshift(A):S.transparent===!0?a.unshift(A):e.unshift(A)}function m(_,x){e.length>1&&e.sort(_||uL),i.length>1&&i.sort(x||o1),a.length>1&&a.sort(x||o1)}function v(){for(let _=t,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:i,transparent:a,init:l,push:d,unshift:h,finish:v,sort:m}}function fL(){let s=new WeakMap;function t(i,a){const l=s.get(i);let u;return l===void 0?(u=new l1,s.set(i,[u])):a>=l.length?(u=new l1,l.push(u)):u=l[a],u}function e(){s=new WeakMap}return{get:t,dispose:e}}function hL(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new nt,color:new ye};break;case"SpotLight":e={position:new nt,direction:new nt,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new nt,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new nt,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return s[t.id]=e,e}}}function dL(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let pL=0;function mL(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function gL(s){const t=new hL,e=dL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new nt);const a=new nt,l=new vn,u=new vn;function f(h){let m=0,v=0,_=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let x=0,S=0,b=0,y=0,M=0,A=0,L=0,w=0,U=0,O=0,R=0;h.sort(mL);for(let D=0,k=h.length;D<k;D++){const I=h[D],V=I.color,$=I.intensity,Z=I.distance;let Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===dc?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)m+=V.r*$,v+=V.g*$,_+=V.b*$;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],$);R++}else if(I.isDirectionalLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const B=I.shadow,tt=e.get(I);tt.shadowIntensity=B.intensity,tt.shadowBias=B.bias,tt.shadowNormalBias=B.normalBias,tt.shadowRadius=B.radius,tt.shadowMapSize=B.mapSize,i.directionalShadow[x]=tt,i.directionalShadowMap[x]=Y,i.directionalShadowMatrix[x]=I.shadow.matrix,A++}i.directional[x]=z,x++}else if(I.isSpotLight){const z=t.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(V).multiplyScalar($),z.distance=Z,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[b]=z;const B=I.shadow;if(I.map&&(i.spotLightMap[U]=I.map,U++,B.updateMatrices(I),I.castShadow&&O++),i.spotLightMatrix[b]=B.matrix,I.castShadow){const tt=e.get(I);tt.shadowIntensity=B.intensity,tt.shadowBias=B.bias,tt.shadowNormalBias=B.normalBias,tt.shadowRadius=B.radius,tt.shadowMapSize=B.mapSize,i.spotShadow[b]=tt,i.spotShadowMap[b]=Y,w++}b++}else if(I.isRectAreaLight){const z=t.get(I);z.color.copy(V).multiplyScalar($),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[y]=z,y++}else if(I.isPointLight){const z=t.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){const B=I.shadow,tt=e.get(I);tt.shadowIntensity=B.intensity,tt.shadowBias=B.bias,tt.shadowNormalBias=B.normalBias,tt.shadowRadius=B.radius,tt.shadowMapSize=B.mapSize,tt.shadowCameraNear=B.camera.near,tt.shadowCameraFar=B.camera.far,i.pointShadow[S]=tt,i.pointShadowMap[S]=Y,i.pointShadowMatrix[S]=I.shadow.matrix,L++}i.point[S]=z,S++}else if(I.isHemisphereLight){const z=t.get(I);z.skyColor.copy(I.color).multiplyScalar($),z.groundColor.copy(I.groundColor).multiplyScalar($),i.hemi[M]=z,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Gt.LTC_FLOAT_1,i.rectAreaLTC2=Gt.LTC_FLOAT_2):(i.rectAreaLTC1=Gt.LTC_HALF_1,i.rectAreaLTC2=Gt.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=v,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==x||T.pointLength!==S||T.spotLength!==b||T.rectAreaLength!==y||T.hemiLength!==M||T.numDirectionalShadows!==A||T.numPointShadows!==L||T.numSpotShadows!==w||T.numSpotMaps!==U||T.numLightProbes!==R)&&(i.directional.length=x,i.spot.length=b,i.rectArea.length=y,i.point.length=S,i.hemi.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=w+U-O,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=R,T.directionalLength=x,T.pointLength=S,T.spotLength=b,T.rectAreaLength=y,T.hemiLength=M,T.numDirectionalShadows=A,T.numPointShadows=L,T.numSpotShadows=w,T.numSpotMaps=U,T.numLightProbes=R,i.version=pL++)}function d(h,m){let v=0,_=0,x=0,S=0,b=0;const y=m.matrixWorldInverse;for(let M=0,A=h.length;M<A;M++){const L=h[M];if(L.isDirectionalLight){const w=i.directional[v];w.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(y),v++}else if(L.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(y),x++}else if(L.isRectAreaLight){const w=i.rectArea[S];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),u.identity(),l.copy(L.matrixWorld),l.premultiply(y),u.extractRotation(l),w.halfWidth.set(L.width*.5,0,0),w.halfHeight.set(0,L.height*.5,0),w.halfWidth.applyMatrix4(u),w.halfHeight.applyMatrix4(u),S++}else if(L.isPointLight){const w=i.point[_];w.position.setFromMatrixPosition(L.matrixWorld),w.position.applyMatrix4(y),_++}else if(L.isHemisphereLight){const w=i.hemi[b];w.direction.setFromMatrixPosition(L.matrixWorld),w.direction.transformDirection(y),b++}}}return{setup:f,setupView:d,state:i}}function c1(s){const t=new gL(s),e=[],i=[];function a(m){h.camera=m,e.length=0,i.length=0}function l(m){e.push(m)}function u(m){i.push(m)}function f(){t.setup(e)}function d(m){t.setupView(e,m)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:h,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function _L(s){let t=new WeakMap;function e(a,l=0){const u=t.get(a);let f;return u===void 0?(f=new c1(s),t.set(a,[f])):l>=u.length?(f=new c1(s),u.push(f)):f=u[l],f}function i(){t=new WeakMap}return{get:e,dispose:i}}const vL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xL=`uniform sampler2D shadow_pass;
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
}`,yL=[new nt(1,0,0),new nt(-1,0,0),new nt(0,1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1)],SL=[new nt(0,-1,0),new nt(0,-1,0),new nt(0,0,1),new nt(0,0,-1),new nt(0,-1,0),new nt(0,-1,0)],u1=new vn,Tu=new nt,Z0=new nt;function ML(s,t,e){let i=new W_;const a=new De,l=new De,u=new Cn,f=new R2,d=new D2,h={},m=e.maxTextureSize,v={[as]:er,[er]:as,[pa]:pa},_=new ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:vL,fragmentShader:xL}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const S=new Lr;S.setAttribute("position",new Ma(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new li(S,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=md;let M=this.type;this.render=function(O,R,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;this.type===eb&&(xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=md);const D=s.getRenderTarget(),k=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),V=s.state;V.setBlending(ya),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const $=M!==this.type;$&&R.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(Y=>Y.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,Y=O.length;Z<Y;Z++){const z=O[Z],B=z.shadow;if(B===void 0){xe("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const tt=B.getFrameExtents();a.multiply(tt),l.copy(B.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(l.x=Math.floor(m/tt.x),a.x=l.x*tt.x,B.mapSize.x=l.x),a.y>m&&(l.y=Math.floor(m/tt.y),a.y=l.y*tt.y,B.mapSize.y=l.y));const rt=s.state.buffers.depth.getReversed();if(B.camera._reversedDepth=rt,B.map===null||$===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Du){if(z.isPointLight){xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ri(a.x,a.y,{format:dc,type:nr,minFilter:ci,magFilter:ci,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new ef(a.x,a.y,ga),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=ss,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=gi,B.map.depthTexture.magFilter=gi}else z.isPointLight?(B.map=new Rb(a.x),B.map.depthTexture=new b2(a.x,Ta)):(B.map=new Ri(a.x,a.y),B.map.depthTexture=new ef(a.x,a.y,Ta)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=ss,this.type===md?(B.map.depthTexture.compareFunction=rt?G_:H_,B.map.depthTexture.minFilter=ci,B.map.depthTexture.magFilter=ci):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=gi,B.map.depthTexture.magFilter=gi);B.camera.updateProjectionMatrix()}const G=B.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<G;F++){if(B.map.isWebGLCubeRenderTarget)s.setRenderTarget(B.map,F),s.clear();else{F===0&&(s.setRenderTarget(B.map),s.clear());const Q=B.getViewport(F);u.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),V.viewport(u)}if(z.isPointLight){const Q=B.camera,_t=B.matrix,Mt=z.distance||Q.far;Mt!==Q.far&&(Q.far=Mt,Q.updateProjectionMatrix()),Tu.setFromMatrixPosition(z.matrixWorld),Q.position.copy(Tu),Z0.copy(Q.position),Z0.add(yL[F]),Q.up.copy(SL[F]),Q.lookAt(Z0),Q.updateMatrixWorld(),_t.makeTranslation(-Tu.x,-Tu.y,-Tu.z),u1.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),B._frustum.setFromProjectionMatrix(u1,Q.coordinateSystem,Q.reversedDepth)}else B.updateMatrices(z);i=B.getFrustum(),w(R,T,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===Du&&A(B,T),B.needsUpdate=!1}M=this.type,y.needsUpdate=!1,s.setRenderTarget(D,k,I)};function A(O,R){const T=t.update(b);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,x.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Ri(a.x,a.y,{format:dc,type:nr})),_.uniforms.shadow_pass.value=O.map.depthTexture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(R,null,T,_,b,null),x.uniforms.shadow_pass.value=O.mapPass.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(R,null,T,x,b,null)}function L(O,R,T,D){let k=null;const I=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(I!==void 0)k=I;else if(k=T.isPointLight===!0?d:f,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const V=k.uuid,$=R.uuid;let Z=h[V];Z===void 0&&(Z={},h[V]=Z);let Y=Z[$];Y===void 0&&(Y=k.clone(),Z[$]=Y,R.addEventListener("dispose",U)),k=Y}if(k.visible=R.visible,k.wireframe=R.wireframe,D===Du?k.side=R.shadowSide!==null?R.shadowSide:R.side:k.side=R.shadowSide!==null?R.shadowSide:v[R.side],k.alphaMap=R.alphaMap,k.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,k.map=R.map,k.clipShadows=R.clipShadows,k.clippingPlanes=R.clippingPlanes,k.clipIntersection=R.clipIntersection,k.displacementMap=R.displacementMap,k.displacementScale=R.displacementScale,k.displacementBias=R.displacementBias,k.wireframeLinewidth=R.wireframeLinewidth,k.linewidth=R.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const V=s.properties.get(k);V.light=T}return k}function w(O,R,T,D,k){if(O.visible===!1)return;if(O.layers.test(R.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&k===Du)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const $=t.update(O),Z=O.material;if(Array.isArray(Z)){const Y=$.groups;for(let z=0,B=Y.length;z<B;z++){const tt=Y[z],rt=Z[tt.materialIndex];if(rt&&rt.visible){const G=L(O,rt,D,k);O.onBeforeShadow(s,O,R,T,$,G,tt),s.renderBufferDirect(T,null,$,G,O,tt),O.onAfterShadow(s,O,R,T,$,G,tt)}}}else if(Z.visible){const Y=L(O,Z,D,k);O.onBeforeShadow(s,O,R,T,$,Y,null),s.renderBufferDirect(T,null,$,Y,O,null),O.onAfterShadow(s,O,R,T,$,Y,null)}}const V=O.children;for(let $=0,Z=V.length;$<Z;$++)w(V[$],R,T,D,k)}function U(O){O.target.removeEventListener("dispose",U);for(const T in h){const D=h[T],k=O.target.uuid;k in D&&(D[k].dispose(),delete D[k])}}}function bL(s,t){function e(){let X=!1;const Dt=new Cn;let Ct=null;const Nt=new Cn(0,0,0,0);return{setMask:function(Tt){Ct!==Tt&&!X&&(s.colorMask(Tt,Tt,Tt,Tt),Ct=Tt)},setLocked:function(Tt){X=Tt},setClear:function(Tt,mt,Xt,le,Xe){Xe===!0&&(Tt*=le,mt*=le,Xt*=le),Dt.set(Tt,mt,Xt,le),Nt.equals(Dt)===!1&&(s.clearColor(Tt,mt,Xt,le),Nt.copy(Dt))},reset:function(){X=!1,Ct=null,Nt.set(-1,0,0,0)}}}function i(){let X=!1,Dt=!1,Ct=null,Nt=null,Tt=null;return{setReversed:function(mt){if(Dt!==mt){const Xt=t.get("EXT_clip_control");mt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Dt=mt;const le=Tt;Tt=null,this.setClear(le)}},getReversed:function(){return Dt},setTest:function(mt){mt?gt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(mt){Ct!==mt&&!X&&(s.depthMask(mt),Ct=mt)},setFunc:function(mt){if(Dt&&(mt=Jw[mt]),Nt!==mt){switch(mt){case dg:s.depthFunc(s.NEVER);break;case pg:s.depthFunc(s.ALWAYS);break;case mg:s.depthFunc(s.LESS);break;case fc:s.depthFunc(s.LEQUAL);break;case gg:s.depthFunc(s.EQUAL);break;case _g:s.depthFunc(s.GEQUAL);break;case vg:s.depthFunc(s.GREATER);break;case xg:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Nt=mt}},setLocked:function(mt){X=mt},setClear:function(mt){Tt!==mt&&(Tt=mt,Dt&&(mt=1-mt),s.clearDepth(mt))},reset:function(){X=!1,Ct=null,Nt=null,Tt=null,Dt=!1}}}function a(){let X=!1,Dt=null,Ct=null,Nt=null,Tt=null,mt=null,Xt=null,le=null,Xe=null;return{setTest:function(kt){X||(kt?gt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(kt){Dt!==kt&&!X&&(s.stencilMask(kt),Dt=kt)},setFunc:function(kt,Jt,Ae){(Ct!==kt||Nt!==Jt||Tt!==Ae)&&(s.stencilFunc(kt,Jt,Ae),Ct=kt,Nt=Jt,Tt=Ae)},setOp:function(kt,Jt,Ae){(mt!==kt||Xt!==Jt||le!==Ae)&&(s.stencilOp(kt,Jt,Ae),mt=kt,Xt=Jt,le=Ae)},setLocked:function(kt){X=kt},setClear:function(kt){Xe!==kt&&(s.clearStencil(kt),Xe=kt)},reset:function(){X=!1,Dt=null,Ct=null,Nt=null,Tt=null,mt=null,Xt=null,le=null,Xe=null}}}const l=new e,u=new i,f=new a,d=new WeakMap,h=new WeakMap;let m={},v={},_=new WeakMap,x=[],S=null,b=!1,y=null,M=null,A=null,L=null,w=null,U=null,O=null,R=new ye(0,0,0),T=0,D=!1,k=null,I=null,V=null,$=null,Z=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const tt=s.getParameter(s.VERSION);tt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(tt)[1]),z=B>=1):tt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),z=B>=2);let rt=null,G={};const F=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),_t=new Cn().fromArray(F),Mt=new Cn().fromArray(Q);function Lt(X,Dt,Ct,Nt){const Tt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(X,mt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<Ct;Xt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Dt,0,s.RGBA,1,1,Nt,0,s.RGBA,s.UNSIGNED_BYTE,Tt):s.texImage2D(Dt+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Tt);return mt}const it={};it[s.TEXTURE_2D]=Lt(s.TEXTURE_2D,s.TEXTURE_2D,1),it[s.TEXTURE_CUBE_MAP]=Lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[s.TEXTURE_2D_ARRAY]=Lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),it[s.TEXTURE_3D]=Lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),gt(s.DEPTH_TEST),u.setFunc(fc),se(!1),ct(cM),gt(s.CULL_FACE),ae(ya);function gt(X){m[X]!==!0&&(s.enable(X),m[X]=!0)}function Et(X){m[X]!==!1&&(s.disable(X),m[X]=!1)}function zt(X,Dt){return v[X]!==Dt?(s.bindFramebuffer(X,Dt),v[X]=Dt,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Dt),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Dt),!0):!1}function ee(X,Dt){let Ct=x,Nt=!1;if(X){Ct=_.get(Dt),Ct===void 0&&(Ct=[],_.set(Dt,Ct));const Tt=X.textures;if(Ct.length!==Tt.length||Ct[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Xt=Tt.length;mt<Xt;mt++)Ct[mt]=s.COLOR_ATTACHMENT0+mt;Ct.length=Tt.length,Nt=!0}}else Ct[0]!==s.BACK&&(Ct[0]=s.BACK,Nt=!0);Nt&&s.drawBuffers(Ct)}function Kt(X){return S!==X?(s.useProgram(X),S=X,!0):!1}const ze={[Lo]:s.FUNC_ADD,[Sw]:s.FUNC_SUBTRACT,[Mw]:s.FUNC_REVERSE_SUBTRACT};ze[bw]=s.MIN,ze[Ew]=s.MAX;const qt={[Tw]:s.ZERO,[Aw]:s.ONE,[ww]:s.SRC_COLOR,[fg]:s.SRC_ALPHA,[Nw]:s.SRC_ALPHA_SATURATE,[Lw]:s.DST_COLOR,[Rw]:s.DST_ALPHA,[Cw]:s.ONE_MINUS_SRC_COLOR,[hg]:s.ONE_MINUS_SRC_ALPHA,[Uw]:s.ONE_MINUS_DST_COLOR,[Dw]:s.ONE_MINUS_DST_ALPHA,[Ow]:s.CONSTANT_COLOR,[Pw]:s.ONE_MINUS_CONSTANT_COLOR,[zw]:s.CONSTANT_ALPHA,[Fw]:s.ONE_MINUS_CONSTANT_ALPHA};function ae(X,Dt,Ct,Nt,Tt,mt,Xt,le,Xe,kt){if(X===ya){b===!0&&(Et(s.BLEND),b=!1);return}if(b===!1&&(gt(s.BLEND),b=!0),X!==yw){if(X!==y||kt!==D){if((M!==Lo||w!==Lo)&&(s.blendEquation(s.FUNC_ADD),M=Lo,w=Lo),kt)switch(X){case nc:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ug:s.blendFunc(s.ONE,s.ONE);break;case uM:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case fM:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:tn("WebGLState: Invalid blending: ",X);break}else switch(X){case nc:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ug:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case uM:tn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fM:tn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tn("WebGLState: Invalid blending: ",X);break}A=null,L=null,U=null,O=null,R.set(0,0,0),T=0,y=X,D=kt}return}Tt=Tt||Dt,mt=mt||Ct,Xt=Xt||Nt,(Dt!==M||Tt!==w)&&(s.blendEquationSeparate(ze[Dt],ze[Tt]),M=Dt,w=Tt),(Ct!==A||Nt!==L||mt!==U||Xt!==O)&&(s.blendFuncSeparate(qt[Ct],qt[Nt],qt[mt],qt[Xt]),A=Ct,L=Nt,U=mt,O=Xt),(le.equals(R)===!1||Xe!==T)&&(s.blendColor(le.r,le.g,le.b,Xe),R.copy(le),T=Xe),y=X,D=!1}function _e(X,Dt){X.side===pa?Et(s.CULL_FACE):gt(s.CULL_FACE);let Ct=X.side===er;Dt&&(Ct=!Ct),se(Ct),X.blending===nc&&X.transparent===!1?ae(ya):ae(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const Nt=X.stencilWrite;f.setTest(Nt),Nt&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),je(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?gt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function se(X){k!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),k=X)}function ct(X){X!==vw?(gt(s.CULL_FACE),X!==I&&(X===cM?s.cullFace(s.BACK):X===xw?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),I=X}function q(X){X!==V&&(z&&s.lineWidth(X),V=X)}function je(X,Dt,Ct){X?(gt(s.POLYGON_OFFSET_FILL),($!==Dt||Z!==Ct)&&($=Dt,Z=Ct,u.getReversed()&&(Dt=-Dt),s.polygonOffset(Dt,Ct))):Et(s.POLYGON_OFFSET_FILL)}function Te(X){X?gt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function ue(X){X===void 0&&(X=s.TEXTURE0+Y-1),rt!==X&&(s.activeTexture(X),rt=X)}function Wt(X,Dt,Ct){Ct===void 0&&(rt===null?Ct=s.TEXTURE0+Y-1:Ct=rt);let Nt=G[Ct];Nt===void 0&&(Nt={type:void 0,texture:void 0},G[Ct]=Nt),(Nt.type!==X||Nt.texture!==Dt)&&(rt!==Ct&&(s.activeTexture(Ct),rt=Ct),s.bindTexture(X,Dt||it[X]),Nt.type=X,Nt.texture=Dt)}function H(){const X=G[rt];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function C(){try{s.compressedTexImage2D(...arguments)}catch(X){tn("WebGLState:",X)}}function K(){try{s.compressedTexImage3D(...arguments)}catch(X){tn("WebGLState:",X)}}function vt(){try{s.texSubImage2D(...arguments)}catch(X){tn("WebGLState:",X)}}function xt(){try{s.texSubImage3D(...arguments)}catch(X){tn("WebGLState:",X)}}function dt(){try{s.compressedTexSubImage2D(...arguments)}catch(X){tn("WebGLState:",X)}}function Vt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){tn("WebGLState:",X)}}function Rt(){try{s.texStorage2D(...arguments)}catch(X){tn("WebGLState:",X)}}function ie(){try{s.texStorage3D(...arguments)}catch(X){tn("WebGLState:",X)}}function Yt(){try{s.texImage2D(...arguments)}catch(X){tn("WebGLState:",X)}}function wt(){try{s.texImage3D(...arguments)}catch(X){tn("WebGLState:",X)}}function At(X){_t.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),_t.copy(X))}function Ht(X){Mt.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Mt.copy(X))}function Pt(X,Dt){let Ct=h.get(Dt);Ct===void 0&&(Ct=new WeakMap,h.set(Dt,Ct));let Nt=Ct.get(X);Nt===void 0&&(Nt=s.getUniformBlockIndex(Dt,X.name),Ct.set(X,Nt))}function Ft(X,Dt){const Nt=h.get(Dt).get(X);d.get(Dt)!==Nt&&(s.uniformBlockBinding(Dt,Nt,X.__bindingPointIndex),d.set(Dt,Nt))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},rt=null,G={},v={},_=new WeakMap,x=[],S=null,b=!1,y=null,M=null,A=null,L=null,w=null,U=null,O=null,R=new ye(0,0,0),T=0,D=!1,k=null,I=null,V=null,$=null,Z=null,_t.set(0,0,s.canvas.width,s.canvas.height),Mt.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:gt,disable:Et,bindFramebuffer:zt,drawBuffers:ee,useProgram:Kt,setBlending:ae,setMaterial:_e,setFlipSided:se,setCullFace:ct,setLineWidth:q,setPolygonOffset:je,setScissorTest:Te,activeTexture:ue,bindTexture:Wt,unbindTexture:H,compressedTexImage2D:C,compressedTexImage3D:K,texImage2D:Yt,texImage3D:wt,updateUBOMapping:Pt,uniformBlockBinding:Ft,texStorage2D:Rt,texStorage3D:ie,texSubImage2D:vt,texSubImage3D:xt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Vt,scissor:At,viewport:Ht,reset:pe}}function EL(s,t,e,i,a,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new De,m=new WeakMap;let v;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(H,C){return x?new OffscreenCanvas(H,C):tf("canvas")}function b(H,C,K){let vt=1;const xt=Wt(H);if((xt.width>K||xt.height>K)&&(vt=K/Math.max(xt.width,xt.height)),vt<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){const dt=Math.floor(vt*xt.width),Vt=Math.floor(vt*xt.height);v===void 0&&(v=S(dt,Vt));const Rt=C?S(dt,Vt):v;return Rt.width=dt,Rt.height=Vt,Rt.getContext("2d").drawImage(H,0,0,dt,Vt),xe("WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+dt+"x"+Vt+")."),Rt}else return"data"in H&&xe("WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),H;return H}function y(H){return H.generateMipmaps}function M(H){s.generateMipmap(H)}function A(H){return H.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?s.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(H,C,K,vt,xt=!1){if(H!==null){if(s[H]!==void 0)return s[H];xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let dt=C;if(C===s.RED&&(K===s.FLOAT&&(dt=s.R32F),K===s.HALF_FLOAT&&(dt=s.R16F),K===s.UNSIGNED_BYTE&&(dt=s.R8)),C===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(dt=s.R8UI),K===s.UNSIGNED_SHORT&&(dt=s.R16UI),K===s.UNSIGNED_INT&&(dt=s.R32UI),K===s.BYTE&&(dt=s.R8I),K===s.SHORT&&(dt=s.R16I),K===s.INT&&(dt=s.R32I)),C===s.RG&&(K===s.FLOAT&&(dt=s.RG32F),K===s.HALF_FLOAT&&(dt=s.RG16F),K===s.UNSIGNED_BYTE&&(dt=s.RG8)),C===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(dt=s.RG8UI),K===s.UNSIGNED_SHORT&&(dt=s.RG16UI),K===s.UNSIGNED_INT&&(dt=s.RG32UI),K===s.BYTE&&(dt=s.RG8I),K===s.SHORT&&(dt=s.RG16I),K===s.INT&&(dt=s.RG32I)),C===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(dt=s.RGB8UI),K===s.UNSIGNED_SHORT&&(dt=s.RGB16UI),K===s.UNSIGNED_INT&&(dt=s.RGB32UI),K===s.BYTE&&(dt=s.RGB8I),K===s.SHORT&&(dt=s.RGB16I),K===s.INT&&(dt=s.RGB32I)),C===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(dt=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(dt=s.RGBA16UI),K===s.UNSIGNED_INT&&(dt=s.RGBA32UI),K===s.BYTE&&(dt=s.RGBA8I),K===s.SHORT&&(dt=s.RGBA16I),K===s.INT&&(dt=s.RGBA32I)),C===s.RGB&&(K===s.UNSIGNED_INT_5_9_9_9_REV&&(dt=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(dt=s.R11F_G11F_B10F)),C===s.RGBA){const Vt=xt?Nd:Ze.getTransfer(vt);K===s.FLOAT&&(dt=s.RGBA32F),K===s.HALF_FLOAT&&(dt=s.RGBA16F),K===s.UNSIGNED_BYTE&&(dt=Vt===rn?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(dt=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(dt=s.RGB5_A1)}return(dt===s.R16F||dt===s.R32F||dt===s.RG16F||dt===s.RG32F||dt===s.RGBA16F||dt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function w(H,C){let K;return H?C===null||C===Ta||C===Ju?K=s.DEPTH24_STENCIL8:C===ga?K=s.DEPTH32F_STENCIL8:C===Qu&&(K=s.DEPTH24_STENCIL8,xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Ta||C===Ju?K=s.DEPTH_COMPONENT24:C===ga?K=s.DEPTH_COMPONENT32F:C===Qu&&(K=s.DEPTH_COMPONENT16),K}function U(H,C){return y(H)===!0||H.isFramebufferTexture&&H.minFilter!==gi&&H.minFilter!==ci?Math.log2(Math.max(C.width,C.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?C.mipmaps.length:1}function O(H){const C=H.target;C.removeEventListener("dispose",O),T(C),C.isVideoTexture&&m.delete(C)}function R(H){const C=H.target;C.removeEventListener("dispose",R),k(C)}function T(H){const C=i.get(H);if(C.__webglInit===void 0)return;const K=H.source,vt=_.get(K);if(vt){const xt=vt[C.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&D(H),Object.keys(vt).length===0&&_.delete(K)}i.remove(H)}function D(H){const C=i.get(H);s.deleteTexture(C.__webglTexture);const K=H.source,vt=_.get(K);delete vt[C.__cacheKey],u.memory.textures--}function k(H){const C=i.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),i.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(C.__webglFramebuffer[vt]))for(let xt=0;xt<C.__webglFramebuffer[vt].length;xt++)s.deleteFramebuffer(C.__webglFramebuffer[vt][xt]);else s.deleteFramebuffer(C.__webglFramebuffer[vt]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[vt])}else{if(Array.isArray(C.__webglFramebuffer))for(let vt=0;vt<C.__webglFramebuffer.length;vt++)s.deleteFramebuffer(C.__webglFramebuffer[vt]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let vt=0;vt<C.__webglColorRenderbuffer.length;vt++)C.__webglColorRenderbuffer[vt]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[vt]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const K=H.textures;for(let vt=0,xt=K.length;vt<xt;vt++){const dt=i.get(K[vt]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),u.memory.textures--),i.remove(K[vt])}i.remove(H)}let I=0;function V(){I=0}function $(){const H=I;return H>=a.maxTextures&&xe("WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+a.maxTextures),I+=1,H}function Z(H){const C=[];return C.push(H.wrapS),C.push(H.wrapT),C.push(H.wrapR||0),C.push(H.magFilter),C.push(H.minFilter),C.push(H.anisotropy),C.push(H.internalFormat),C.push(H.format),C.push(H.type),C.push(H.generateMipmaps),C.push(H.premultiplyAlpha),C.push(H.flipY),C.push(H.unpackAlignment),C.push(H.colorSpace),C.join()}function Y(H,C){const K=i.get(H);if(H.isVideoTexture&&Te(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&K.__version!==H.version){const vt=H.image;if(vt===null)xe("WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)xe("WebGLRenderer: Texture marked for update but image is incomplete");else{it(K,H,C);return}}else H.isExternalTexture&&(K.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+C)}function z(H,C){const K=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&K.__version!==H.version){it(K,H,C);return}else H.isExternalTexture&&(K.__webglTexture=H.sourceTexture?H.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+C)}function B(H,C){const K=i.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&K.__version!==H.version){it(K,H,C);return}e.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+C)}function tt(H,C){const K=i.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&K.__version!==H.version){gt(K,H,C);return}e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+C)}const rt={[Ud]:s.REPEAT,[es]:s.CLAMP_TO_EDGE,[yg]:s.MIRRORED_REPEAT},G={[gi]:s.NEAREST,[Hw]:s.NEAREST_MIPMAP_NEAREST,[wh]:s.NEAREST_MIPMAP_LINEAR,[ci]:s.LINEAR,[g0]:s.LINEAR_MIPMAP_NEAREST,[No]:s.LINEAR_MIPMAP_LINEAR},F={[kw]:s.NEVER,[jw]:s.ALWAYS,[Xw]:s.LESS,[H_]:s.LEQUAL,[Ww]:s.EQUAL,[G_]:s.GEQUAL,[Yw]:s.GREATER,[qw]:s.NOTEQUAL};function Q(H,C){if(C.type===ga&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===ci||C.magFilter===g0||C.magFilter===wh||C.magFilter===No||C.minFilter===ci||C.minFilter===g0||C.minFilter===wh||C.minFilter===No)&&xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(H,s.TEXTURE_WRAP_S,rt[C.wrapS]),s.texParameteri(H,s.TEXTURE_WRAP_T,rt[C.wrapT]),(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)&&s.texParameteri(H,s.TEXTURE_WRAP_R,rt[C.wrapR]),s.texParameteri(H,s.TEXTURE_MAG_FILTER,G[C.magFilter]),s.texParameteri(H,s.TEXTURE_MIN_FILTER,G[C.minFilter]),C.compareFunction&&(s.texParameteri(H,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(H,s.TEXTURE_COMPARE_FUNC,F[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===gi||C.minFilter!==wh&&C.minFilter!==No||C.type===ga&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");s.texParameterf(H,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,a.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function _t(H,C){let K=!1;H.__webglInit===void 0&&(H.__webglInit=!0,C.addEventListener("dispose",O));const vt=C.source;let xt=_.get(vt);xt===void 0&&(xt={},_.set(vt,xt));const dt=Z(C);if(dt!==H.__cacheKey){xt[dt]===void 0&&(xt[dt]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,K=!0),xt[dt].usedTimes++;const Vt=xt[H.__cacheKey];Vt!==void 0&&(xt[H.__cacheKey].usedTimes--,Vt.usedTimes===0&&D(C)),H.__cacheKey=dt,H.__webglTexture=xt[dt].texture}return K}function Mt(H,C,K){return Math.floor(Math.floor(H/K)/C)}function Lt(H,C,K,vt){const dt=H.updateRanges;if(dt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,C.width,C.height,K,vt,C.data);else{dt.sort((wt,At)=>wt.start-At.start);let Vt=0;for(let wt=1;wt<dt.length;wt++){const At=dt[Vt],Ht=dt[wt],Pt=At.start+At.count,Ft=Mt(Ht.start,C.width,4),pe=Mt(At.start,C.width,4);Ht.start<=Pt+1&&Ft===pe&&Mt(Ht.start+Ht.count-1,C.width,4)===Ft?At.count=Math.max(At.count,Ht.start+Ht.count-At.start):(++Vt,dt[Vt]=Ht)}dt.length=Vt+1;const Rt=s.getParameter(s.UNPACK_ROW_LENGTH),ie=s.getParameter(s.UNPACK_SKIP_PIXELS),Yt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,C.width);for(let wt=0,At=dt.length;wt<At;wt++){const Ht=dt[wt],Pt=Math.floor(Ht.start/4),Ft=Math.ceil(Ht.count/4),pe=Pt%C.width,X=Math.floor(Pt/C.width),Dt=Ft,Ct=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),e.texSubImage2D(s.TEXTURE_2D,0,pe,X,Dt,Ct,K,vt,C.data)}H.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Rt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,Yt)}}function it(H,C,K){let vt=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(vt=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(vt=s.TEXTURE_3D);const xt=_t(H,C),dt=C.source;e.bindTexture(vt,H.__webglTexture,s.TEXTURE0+K);const Vt=i.get(dt);if(dt.version!==Vt.__version||xt===!0){e.activeTexture(s.TEXTURE0+K);const Rt=Ze.getPrimaries(Ze.workingColorSpace),ie=C.colorSpace===Gs?null:Ze.getPrimaries(C.colorSpace),Yt=C.colorSpace===Gs||Rt===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let wt=b(C.image,!1,a.maxTextureSize);wt=ue(C,wt);const At=l.convert(C.format,C.colorSpace),Ht=l.convert(C.type);let Pt=L(C.internalFormat,At,Ht,C.colorSpace,C.isVideoTexture);Q(vt,C);let Ft;const pe=C.mipmaps,X=C.isVideoTexture!==!0,Dt=Vt.__version===void 0||xt===!0,Ct=dt.dataReady,Nt=U(C,wt);if(C.isDepthTexture)Pt=w(C.format===Oo,C.type),Dt&&(X?e.texStorage2D(s.TEXTURE_2D,1,Pt,wt.width,wt.height):e.texImage2D(s.TEXTURE_2D,0,Pt,wt.width,wt.height,0,At,Ht,null));else if(C.isDataTexture)if(pe.length>0){X&&Dt&&e.texStorage2D(s.TEXTURE_2D,Nt,Pt,pe[0].width,pe[0].height);for(let Tt=0,mt=pe.length;Tt<mt;Tt++)Ft=pe[Tt],X?Ct&&e.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Ft.width,Ft.height,At,Ht,Ft.data):e.texImage2D(s.TEXTURE_2D,Tt,Pt,Ft.width,Ft.height,0,At,Ht,Ft.data);C.generateMipmaps=!1}else X?(Dt&&e.texStorage2D(s.TEXTURE_2D,Nt,Pt,wt.width,wt.height),Ct&&Lt(C,wt,At,Ht)):e.texImage2D(s.TEXTURE_2D,0,Pt,wt.width,wt.height,0,At,Ht,wt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){X&&Dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Nt,Pt,pe[0].width,pe[0].height,wt.depth);for(let Tt=0,mt=pe.length;Tt<mt;Tt++)if(Ft=pe[Tt],C.format!==Yr)if(At!==null)if(X){if(Ct)if(C.layerUpdates.size>0){const Xt=GM(Ft.width,Ft.height,C.format,C.type);for(const le of C.layerUpdates){const Xe=Ft.data.subarray(le*Xt/Ft.data.BYTES_PER_ELEMENT,(le+1)*Xt/Ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,le,Ft.width,Ft.height,1,At,Xe)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Ft.width,Ft.height,wt.depth,At,Ft.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Tt,Pt,Ft.width,Ft.height,wt.depth,0,Ft.data,0,0);else xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ct&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Tt,0,0,0,Ft.width,Ft.height,wt.depth,At,Ht,Ft.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Tt,Pt,Ft.width,Ft.height,wt.depth,0,At,Ht,Ft.data)}else{X&&Dt&&e.texStorage2D(s.TEXTURE_2D,Nt,Pt,pe[0].width,pe[0].height);for(let Tt=0,mt=pe.length;Tt<mt;Tt++)Ft=pe[Tt],C.format!==Yr?At!==null?X?Ct&&e.compressedTexSubImage2D(s.TEXTURE_2D,Tt,0,0,Ft.width,Ft.height,At,Ft.data):e.compressedTexImage2D(s.TEXTURE_2D,Tt,Pt,Ft.width,Ft.height,0,Ft.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ct&&e.texSubImage2D(s.TEXTURE_2D,Tt,0,0,Ft.width,Ft.height,At,Ht,Ft.data):e.texImage2D(s.TEXTURE_2D,Tt,Pt,Ft.width,Ft.height,0,At,Ht,Ft.data)}else if(C.isDataArrayTexture)if(X){if(Dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Nt,Pt,wt.width,wt.height,wt.depth),Ct)if(C.layerUpdates.size>0){const Tt=GM(wt.width,wt.height,C.format,C.type);for(const mt of C.layerUpdates){const Xt=wt.data.subarray(mt*Tt/wt.data.BYTES_PER_ELEMENT,(mt+1)*Tt/wt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,mt,wt.width,wt.height,1,At,Ht,Xt)}C.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,At,Ht,wt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,wt.width,wt.height,wt.depth,0,At,Ht,wt.data);else if(C.isData3DTexture)X?(Dt&&e.texStorage3D(s.TEXTURE_3D,Nt,Pt,wt.width,wt.height,wt.depth),Ct&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,At,Ht,wt.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,wt.width,wt.height,wt.depth,0,At,Ht,wt.data);else if(C.isFramebufferTexture){if(Dt)if(X)e.texStorage2D(s.TEXTURE_2D,Nt,Pt,wt.width,wt.height);else{let Tt=wt.width,mt=wt.height;for(let Xt=0;Xt<Nt;Xt++)e.texImage2D(s.TEXTURE_2D,Xt,Pt,Tt,mt,0,At,Ht,null),Tt>>=1,mt>>=1}}else if(pe.length>0){if(X&&Dt){const Tt=Wt(pe[0]);e.texStorage2D(s.TEXTURE_2D,Nt,Pt,Tt.width,Tt.height)}for(let Tt=0,mt=pe.length;Tt<mt;Tt++)Ft=pe[Tt],X?Ct&&e.texSubImage2D(s.TEXTURE_2D,Tt,0,0,At,Ht,Ft):e.texImage2D(s.TEXTURE_2D,Tt,Pt,At,Ht,Ft);C.generateMipmaps=!1}else if(X){if(Dt){const Tt=Wt(wt);e.texStorage2D(s.TEXTURE_2D,Nt,Pt,Tt.width,Tt.height)}Ct&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,At,Ht,wt)}else e.texImage2D(s.TEXTURE_2D,0,Pt,At,Ht,wt);y(C)&&M(vt),Vt.__version=dt.version,C.onUpdate&&C.onUpdate(C)}H.__version=C.version}function gt(H,C,K){if(C.image.length!==6)return;const vt=_t(H,C),xt=C.source;e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+K);const dt=i.get(xt);if(xt.version!==dt.__version||vt===!0){e.activeTexture(s.TEXTURE0+K);const Vt=Ze.getPrimaries(Ze.workingColorSpace),Rt=C.colorSpace===Gs?null:Ze.getPrimaries(C.colorSpace),ie=C.colorSpace===Gs||Vt===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Yt=C.isCompressedTexture||C.image[0].isCompressedTexture,wt=C.image[0]&&C.image[0].isDataTexture,At=[];for(let mt=0;mt<6;mt++)!Yt&&!wt?At[mt]=b(C.image[mt],!0,a.maxCubemapSize):At[mt]=wt?C.image[mt].image:C.image[mt],At[mt]=ue(C,At[mt]);const Ht=At[0],Pt=l.convert(C.format,C.colorSpace),Ft=l.convert(C.type),pe=L(C.internalFormat,Pt,Ft,C.colorSpace),X=C.isVideoTexture!==!0,Dt=dt.__version===void 0||vt===!0,Ct=xt.dataReady;let Nt=U(C,Ht);Q(s.TEXTURE_CUBE_MAP,C);let Tt;if(Yt){X&&Dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,pe,Ht.width,Ht.height);for(let mt=0;mt<6;mt++){Tt=At[mt].mipmaps;for(let Xt=0;Xt<Tt.length;Xt++){const le=Tt[Xt];C.format!==Yr?Pt!==null?X?Ct&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Xt,0,0,le.width,le.height,Pt,le.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Xt,pe,le.width,le.height,0,le.data):xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Xt,0,0,le.width,le.height,Pt,Ft,le.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Xt,pe,le.width,le.height,0,Pt,Ft,le.data)}}}else{if(Tt=C.mipmaps,X&&Dt){Tt.length>0&&Nt++;const mt=Wt(At[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Nt,pe,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(wt){X?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,At[mt].width,At[mt].height,Pt,Ft,At[mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,pe,At[mt].width,At[mt].height,0,Pt,Ft,At[mt].data);for(let Xt=0;Xt<Tt.length;Xt++){const Xe=Tt[Xt].image[mt].image;X?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Xt+1,0,0,Xe.width,Xe.height,Pt,Ft,Xe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Xt+1,pe,Xe.width,Xe.height,0,Pt,Ft,Xe.data)}}else{X?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,Pt,Ft,At[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,pe,Pt,Ft,At[mt]);for(let Xt=0;Xt<Tt.length;Xt++){const le=Tt[Xt];X?Ct&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Xt+1,0,0,Pt,Ft,le.image[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Xt+1,pe,Pt,Ft,le.image[mt])}}}y(C)&&M(s.TEXTURE_CUBE_MAP),dt.__version=xt.version,C.onUpdate&&C.onUpdate(C)}H.__version=C.version}function Et(H,C,K,vt,xt,dt){const Vt=l.convert(K.format,K.colorSpace),Rt=l.convert(K.type),ie=L(K.internalFormat,Vt,Rt,K.colorSpace),Yt=i.get(C),wt=i.get(K);if(wt.__renderTarget=C,!Yt.__hasExternalTextures){const At=Math.max(1,C.width>>dt),Ht=Math.max(1,C.height>>dt);xt===s.TEXTURE_3D||xt===s.TEXTURE_2D_ARRAY?e.texImage3D(xt,dt,ie,At,Ht,C.depth,0,Vt,Rt,null):e.texImage2D(xt,dt,ie,At,Ht,0,Vt,Rt,null)}e.bindFramebuffer(s.FRAMEBUFFER,H),je(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,xt,wt.__webglTexture,0,q(C)):(xt===s.TEXTURE_2D||xt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,vt,xt,wt.__webglTexture,dt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function zt(H,C,K){if(s.bindRenderbuffer(s.RENDERBUFFER,H),C.depthBuffer){const vt=C.depthTexture,xt=vt&&vt.isDepthTexture?vt.type:null,dt=w(C.stencilBuffer,xt),Vt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;je(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,q(C),dt,C.width,C.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,q(C),dt,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,dt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Vt,s.RENDERBUFFER,H)}else{const vt=C.textures;for(let xt=0;xt<vt.length;xt++){const dt=vt[xt],Vt=l.convert(dt.format,dt.colorSpace),Rt=l.convert(dt.type),ie=L(dt.internalFormat,Vt,Rt,dt.colorSpace);je(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,q(C),ie,C.width,C.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,q(C),ie,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,ie,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ee(H,C,K){const vt=C.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,H),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xt=i.get(C.depthTexture);if(xt.__renderTarget=C,(!xt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),vt){if(xt.__webglInit===void 0&&(xt.__webglInit=!0,C.depthTexture.addEventListener("dispose",O)),xt.__webglTexture===void 0){xt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,xt.__webglTexture),Q(s.TEXTURE_CUBE_MAP,C.depthTexture);const Yt=l.convert(C.depthTexture.format),wt=l.convert(C.depthTexture.type);let At;C.depthTexture.format===ss?At=s.DEPTH_COMPONENT24:C.depthTexture.format===Oo&&(At=s.DEPTH24_STENCIL8);for(let Ht=0;Ht<6;Ht++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ht,0,At,C.width,C.height,0,Yt,wt,null)}}else Y(C.depthTexture,0);const dt=xt.__webglTexture,Vt=q(C),Rt=vt?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,ie=C.depthTexture.format===Oo?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(C.depthTexture.format===ss)je(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,Rt,dt,0,Vt):s.framebufferTexture2D(s.FRAMEBUFFER,ie,Rt,dt,0);else if(C.depthTexture.format===Oo)je(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,Rt,dt,0,Vt):s.framebufferTexture2D(s.FRAMEBUFFER,ie,Rt,dt,0);else throw new Error("Unknown depthTexture format")}function Kt(H){const C=i.get(H),K=H.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==H.depthTexture){const vt=H.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),vt){const xt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,vt.removeEventListener("dispose",xt)};vt.addEventListener("dispose",xt),C.__depthDisposeCallback=xt}C.__boundDepthTexture=vt}if(H.depthTexture&&!C.__autoAllocateDepthBuffer)if(K)for(let vt=0;vt<6;vt++)ee(C.__webglFramebuffer[vt],H,vt);else{const vt=H.texture.mipmaps;vt&&vt.length>0?ee(C.__webglFramebuffer[0],H,0):ee(C.__webglFramebuffer,H,0)}else if(K){C.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[vt]),C.__webglDepthbuffer[vt]===void 0)C.__webglDepthbuffer[vt]=s.createRenderbuffer(),zt(C.__webglDepthbuffer[vt],H,!1);else{const xt=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=C.__webglDepthbuffer[vt];s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,dt)}}else{const vt=H.texture.mipmaps;if(vt&&vt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=s.createRenderbuffer(),zt(C.__webglDepthbuffer,H,!1);else{const xt=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=C.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,dt),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,dt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(H,C,K){const vt=i.get(H);C!==void 0&&Et(vt.__webglFramebuffer,H,H.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Kt(H)}function qt(H){const C=H.texture,K=i.get(H),vt=i.get(C);H.addEventListener("dispose",R);const xt=H.textures,dt=H.isWebGLCubeRenderTarget===!0,Vt=xt.length>1;if(Vt||(vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture()),vt.__version=C.version,u.memory.textures++),dt){K.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer[Rt]=[];for(let ie=0;ie<C.mipmaps.length;ie++)K.__webglFramebuffer[Rt][ie]=s.createFramebuffer()}else K.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){K.__webglFramebuffer=[];for(let Rt=0;Rt<C.mipmaps.length;Rt++)K.__webglFramebuffer[Rt]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Vt)for(let Rt=0,ie=xt.length;Rt<ie;Rt++){const Yt=i.get(xt[Rt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=s.createTexture(),u.memory.textures++)}if(H.samples>0&&je(H)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){const ie=xt[Rt];K.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Rt]);const Yt=l.convert(ie.format,ie.colorSpace),wt=l.convert(ie.type),At=L(ie.internalFormat,Yt,wt,ie.colorSpace,H.isXRRenderTarget===!0),Ht=q(H);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,At,H.width,H.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,K.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),H.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),zt(K.__webglDepthRenderbuffer,H,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,vt.__webglTexture),Q(s.TEXTURE_CUBE_MAP,C);for(let Rt=0;Rt<6;Rt++)if(C.mipmaps&&C.mipmaps.length>0)for(let ie=0;ie<C.mipmaps.length;ie++)Et(K.__webglFramebuffer[Rt][ie],H,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,ie);else Et(K.__webglFramebuffer[Rt],H,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);y(C)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Vt){for(let Rt=0,ie=xt.length;Rt<ie;Rt++){const Yt=xt[Rt],wt=i.get(Yt);let At=s.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(At=H.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(At,wt.__webglTexture),Q(At,Yt),Et(K.__webglFramebuffer,H,Yt,s.COLOR_ATTACHMENT0+Rt,At,0),y(Yt)&&M(At)}e.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Rt=H.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Rt,vt.__webglTexture),Q(Rt,C),C.mipmaps&&C.mipmaps.length>0)for(let ie=0;ie<C.mipmaps.length;ie++)Et(K.__webglFramebuffer[ie],H,C,s.COLOR_ATTACHMENT0,Rt,ie);else Et(K.__webglFramebuffer,H,C,s.COLOR_ATTACHMENT0,Rt,0);y(C)&&M(Rt),e.unbindTexture()}H.depthBuffer&&Kt(H)}function ae(H){const C=H.textures;for(let K=0,vt=C.length;K<vt;K++){const xt=C[K];if(y(xt)){const dt=A(H),Vt=i.get(xt).__webglTexture;e.bindTexture(dt,Vt),M(dt),e.unbindTexture()}}}const _e=[],se=[];function ct(H){if(H.samples>0){if(je(H)===!1){const C=H.textures,K=H.width,vt=H.height;let xt=s.COLOR_BUFFER_BIT;const dt=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Vt=i.get(H),Rt=C.length>1;if(Rt)for(let Yt=0;Yt<C.length;Yt++)e.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer);const ie=H.texture.mipmaps;ie&&ie.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglFramebuffer);for(let Yt=0;Yt<C.length;Yt++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(xt|=s.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(xt|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Yt]);const wt=i.get(C[Yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,wt,0)}s.blitFramebuffer(0,0,K,vt,0,0,K,vt,xt,s.NEAREST),d===!0&&(_e.length=0,se.length=0,_e.push(s.COLOR_ATTACHMENT0+Yt),H.depthBuffer&&H.resolveDepthBuffer===!1&&(_e.push(dt),se.push(dt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,se)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let Yt=0;Yt<C.length;Yt++){e.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.RENDERBUFFER,Vt.__webglColorRenderbuffer[Yt]);const wt=i.get(C[Yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Yt,s.TEXTURE_2D,wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Vt.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&d){const C=H.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function q(H){return Math.min(a.maxSamples,H.samples)}function je(H){const C=i.get(H);return H.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Te(H){const C=u.render.frame;m.get(H)!==C&&(m.set(H,C),H.update())}function ue(H,C){const K=H.colorSpace,vt=H.format,xt=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||K!==pc&&K!==Gs&&(Ze.getTransfer(K)===rn?(vt!==Yr||xt!==$i)&&xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tn("WebGLTextures: Unsupported texture color space:",K)),C}function Wt(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(h.width=H.naturalWidth||H.width,h.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(h.width=H.displayWidth,h.height=H.displayHeight):(h.width=H.width,h.height=H.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=tt,this.rebindTextures=ze,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function TL(s,t){function e(i,a=Gs){let l;const u=Ze.getTransfer(a);if(i===$i)return s.UNSIGNED_BYTE;if(i===P_)return s.UNSIGNED_SHORT_4_4_4_4;if(i===z_)return s.UNSIGNED_SHORT_5_5_5_1;if(i===sb)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===ob)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===rb)return s.BYTE;if(i===ab)return s.SHORT;if(i===Qu)return s.UNSIGNED_SHORT;if(i===O_)return s.INT;if(i===Ta)return s.UNSIGNED_INT;if(i===ga)return s.FLOAT;if(i===nr)return s.HALF_FLOAT;if(i===lb)return s.ALPHA;if(i===cb)return s.RGB;if(i===Yr)return s.RGBA;if(i===ss)return s.DEPTH_COMPONENT;if(i===Oo)return s.DEPTH_STENCIL;if(i===ub)return s.RED;if(i===F_)return s.RED_INTEGER;if(i===dc)return s.RG;if(i===B_)return s.RG_INTEGER;if(i===I_)return s.RGBA_INTEGER;if(i===gd||i===_d||i===vd||i===xd)if(u===rn)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===gd)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_d)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xd)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===gd)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_d)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vd)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xd)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sg||i===Mg||i===bg||i===Eg)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===Sg)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mg)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bg)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Eg)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tg||i===Ag||i===wg||i===Cg||i===Rg||i===Dg||i===Lg)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===Tg||i===Ag)return u===rn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===wg)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===Cg)return l.COMPRESSED_R11_EAC;if(i===Rg)return l.COMPRESSED_SIGNED_R11_EAC;if(i===Dg)return l.COMPRESSED_RG11_EAC;if(i===Lg)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ug||i===Ng||i===Og||i===Pg||i===zg||i===Fg||i===Bg||i===Ig||i===Hg||i===Gg||i===Vg||i===kg||i===Xg||i===Wg)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Ug)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ng)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Og)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pg)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zg)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fg)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bg)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ig)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hg)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gg)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vg)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kg)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xg)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wg)return u===rn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yg||i===qg||i===jg)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===Yg)return u===rn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===qg)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jg)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zg||i===Kg||i===Qg||i===Jg)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===Zg)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Kg)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qg)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Jg)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ju?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}const AL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wL=`
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

}`;class CL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new yb(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ui({vertexShader:AL,fragmentShader:wL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new li(new ba(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RL extends Ec{constructor(t,e){super();const i=this;let a=null,l=1,u=null,f="local-floor",d=1,h=null,m=null,v=null,_=null,x=null,S=null;const b=typeof XRWebGLBinding<"u",y=new CL,M={},A=e.getContextAttributes();let L=null,w=null;const U=[],O=[],R=new De;let T=null;const D=new Ti;D.viewport=new Cn;const k=new Ti;k.viewport=new Cn;const I=[D,k],V=new I2;let $=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let gt=U[it];return gt===void 0&&(gt=new b0,U[it]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(it){let gt=U[it];return gt===void 0&&(gt=new b0,U[it]=gt),gt.getGripSpace()},this.getHand=function(it){let gt=U[it];return gt===void 0&&(gt=new b0,U[it]=gt),gt.getHandSpace()};function Y(it){const gt=O.indexOf(it.inputSource);if(gt===-1)return;const Et=U[gt];Et!==void 0&&(Et.update(it.inputSource,it.frame,h||u),Et.dispatchEvent({type:it.type,data:it.inputSource}))}function z(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",z),a.removeEventListener("inputsourceschange",B);for(let it=0;it<U.length;it++){const gt=O[it];gt!==null&&(O[it]=null,U[it].disconnect(gt))}$=null,Z=null,y.reset();for(const it in M)delete M[it];t.setRenderTarget(L),x=null,_=null,v=null,a=null,w=null,Lt.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){l=it,i.isPresenting===!0&&xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){f=it,i.isPresenting===!0&&xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(it){h=it},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&b&&(v=new XRWebGLBinding(a,e)),v},this.getFrame=function(){return S},this.getSession=function(){return a},this.setSession=async function(it){if(a=it,a!==null){if(L=t.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",z),a.addEventListener("inputsourceschange",B),A.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,zt=null,ee=null;A.depth&&(ee=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=A.stencil?Oo:ss,zt=A.stencil?Ju:Ta);const Kt={colorFormat:e.RGBA8,depthFormat:ee,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(Kt),a.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),w=new Ri(_.textureWidth,_.textureHeight,{format:Yr,type:$i,depthTexture:new ef(_.textureWidth,_.textureHeight,zt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Et={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(a,e,Et),a.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new Ri(x.framebufferWidth,x.framebufferHeight,{format:Yr,type:$i,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await a.requestReferenceSpace(f),Lt.setContext(a),Lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(it){for(let gt=0;gt<it.removed.length;gt++){const Et=it.removed[gt],zt=O.indexOf(Et);zt>=0&&(O[zt]=null,U[zt].disconnect(Et))}for(let gt=0;gt<it.added.length;gt++){const Et=it.added[gt];let zt=O.indexOf(Et);if(zt===-1){for(let Kt=0;Kt<U.length;Kt++)if(Kt>=O.length){O.push(Et),zt=Kt;break}else if(O[Kt]===null){O[Kt]=Et,zt=Kt;break}if(zt===-1)break}const ee=U[zt];ee&&ee.connect(Et)}}const tt=new nt,rt=new nt;function G(it,gt,Et){tt.setFromMatrixPosition(gt.matrixWorld),rt.setFromMatrixPosition(Et.matrixWorld);const zt=tt.distanceTo(rt),ee=gt.projectionMatrix.elements,Kt=Et.projectionMatrix.elements,ze=ee[14]/(ee[10]-1),qt=ee[14]/(ee[10]+1),ae=(ee[9]+1)/ee[5],_e=(ee[9]-1)/ee[5],se=(ee[8]-1)/ee[0],ct=(Kt[8]+1)/Kt[0],q=ze*se,je=ze*ct,Te=zt/(-se+ct),ue=Te*-se;if(gt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ue),it.translateZ(Te),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),ee[10]===-1)it.projectionMatrix.copy(gt.projectionMatrix),it.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const Wt=ze+Te,H=qt+Te,C=q-ue,K=je+(zt-ue),vt=ae*qt/H*Wt,xt=_e*qt/H*Wt;it.projectionMatrix.makePerspective(C,K,vt,xt,Wt,H),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function F(it,gt){gt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(gt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(a===null)return;let gt=it.near,Et=it.far;y.texture!==null&&(y.depthNear>0&&(gt=y.depthNear),y.depthFar>0&&(Et=y.depthFar)),V.near=k.near=D.near=gt,V.far=k.far=D.far=Et,($!==V.near||Z!==V.far)&&(a.updateRenderState({depthNear:V.near,depthFar:V.far}),$=V.near,Z=V.far),V.layers.mask=it.layers.mask|6,D.layers.mask=V.layers.mask&-5,k.layers.mask=V.layers.mask&-3;const zt=it.parent,ee=V.cameras;F(V,zt);for(let Kt=0;Kt<ee.length;Kt++)F(ee[Kt],zt);ee.length===2?G(V,D,k):V.projectionMatrix.copy(D.projectionMatrix),Q(it,V,zt)};function Q(it,gt,Et){Et===null?it.matrix.copy(gt.matrixWorld):(it.matrix.copy(Et.matrixWorld),it.matrix.invert(),it.matrix.multiply(gt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(gt.projectionMatrix),it.projectionMatrixInverse.copy(gt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Pd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(it){d=it,_!==null&&(_.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(V)},this.getCameraTexture=function(it){return M[it]};let _t=null;function Mt(it,gt){if(m=gt.getViewerPose(h||u),S=gt,m!==null){const Et=m.views;x!==null&&(t.setRenderTargetFramebuffer(w,x.framebuffer),t.setRenderTarget(w));let zt=!1;Et.length!==V.cameras.length&&(V.cameras.length=0,zt=!0);for(let qt=0;qt<Et.length;qt++){const ae=Et[qt];let _e=null;if(x!==null)_e=x.getViewport(ae);else{const ct=v.getViewSubImage(_,ae);_e=ct.viewport,qt===0&&(t.setRenderTargetTextures(w,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(w))}let se=I[qt];se===void 0&&(se=new Ti,se.layers.enable(qt),se.viewport=new Cn,I[qt]=se),se.matrix.fromArray(ae.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ae.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(_e.x,_e.y,_e.width,_e.height),qt===0&&(V.matrix.copy(se.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),zt===!0&&V.cameras.push(se)}const ee=a.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&b){v=i.getBinding();const qt=v.getDepthInformation(Et[0]);qt&&qt.isValid&&qt.texture&&y.init(qt,a.renderState)}if(ee&&ee.includes("camera-access")&&b){t.state.unbindTexture(),v=i.getBinding();for(let qt=0;qt<Et.length;qt++){const ae=Et[qt].camera;if(ae){let _e=M[ae];_e||(_e=new yb,M[ae]=_e);const se=v.getCameraImage(ae);_e.sourceTexture=se}}}}for(let Et=0;Et<U.length;Et++){const zt=O[Et],ee=U[Et];zt!==null&&ee!==void 0&&ee.update(zt,gt,h||u)}_t&&_t(it,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),S=null}const Lt=new Cb;Lt.setAnimationLoop(Mt),this.setAnimationLoop=function(it){_t=it},this.dispose=function(){}}}const To=new Aa,DL=new vn;function LL(s,t){function e(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function i(y,M){M.color.getRGB(y.fogColor.value,Sb(s)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function a(y,M,A,L,w){M.isMeshBasicMaterial?l(y,M):M.isMeshLambertMaterial?(l(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(y,M),v(y,M)):M.isMeshPhongMaterial?(l(y,M),m(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(y,M),_(y,M),M.isMeshPhysicalMaterial&&x(y,M,w)):M.isMeshMatcapMaterial?(l(y,M),S(y,M)):M.isMeshDepthMaterial?l(y,M):M.isMeshDistanceMaterial?(l(y,M),b(y,M)):M.isMeshNormalMaterial?l(y,M):M.isLineBasicMaterial?(u(y,M),M.isLineDashedMaterial&&f(y,M)):M.isPointsMaterial?d(y,M,A,L):M.isSpriteMaterial?h(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,e(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,e(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,e(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===er&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,e(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===er&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,e(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,e(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,e(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const A=t.get(M),L=A.envMap,w=A.envMapRotation;L&&(y.envMap.value=L,To.copy(w),To.x*=-1,To.y*=-1,To.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(To.y*=-1,To.z*=-1),y.envMapRotation.value.setFromMatrix4(DL.makeRotationFromEuler(To)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,e(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,e(M.aoMap,y.aoMapTransform))}function u(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,e(M.map,y.mapTransform))}function f(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function d(y,M,A,L){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*A,y.scale.value=L*.5,M.map&&(y.map.value=M.map,e(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,e(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function h(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,e(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,e(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function m(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function v(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function _(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,e(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,e(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function x(y,M,A){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,e(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,e(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,e(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,e(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,e(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===er&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,e(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,e(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,e(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,e(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,e(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,e(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,e(M.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,M){M.matcap&&(y.matcap.value=M.matcap)}function b(y,M){const A=t.get(M).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function UL(s,t,e,i){let a={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,L){const w=L.program;i.uniformBlockBinding(A,w)}function h(A,L){let w=a[A.id];w===void 0&&(S(A),w=m(A),a[A.id]=w,A.addEventListener("dispose",y));const U=L.program;i.updateUBOMapping(A,U);const O=t.render.frame;l[A.id]!==O&&(_(A),l[A.id]=O)}function m(A){const L=v();A.__bindingPointIndex=L;const w=s.createBuffer(),U=A.__size,O=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,U,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,w),w}function v(){for(let A=0;A<f;A++)if(u.indexOf(A)===-1)return u.push(A),A;return tn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){const L=a[A.id],w=A.uniforms,U=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,R=w.length;O<R;O++){const T=Array.isArray(w[O])?w[O]:[w[O]];for(let D=0,k=T.length;D<k;D++){const I=T[D];if(x(I,O,D,U)===!0){const V=I.__offset,$=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let Y=0;Y<$.length;Y++){const z=$[Y],B=b(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,V+Z,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,Z),Z+=B.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(A,L,w,U){const O=A.value,R=L+"_"+w;if(U[R]===void 0)return typeof O=="number"||typeof O=="boolean"?U[R]=O:U[R]=O.clone(),!0;{const T=U[R];if(typeof O=="number"||typeof O=="boolean"){if(T!==O)return U[R]=O,!0}else if(T.equals(O)===!1)return T.copy(O),!0}return!1}function S(A){const L=A.uniforms;let w=0;const U=16;for(let R=0,T=L.length;R<T;R++){const D=Array.isArray(L[R])?L[R]:[L[R]];for(let k=0,I=D.length;k<I;k++){const V=D[k],$=Array.isArray(V.value)?V.value:[V.value];for(let Z=0,Y=$.length;Z<Y;Z++){const z=$[Z],B=b(z),tt=w%U,rt=tt%B.boundary,G=tt+rt;w+=rt,G!==0&&U-G<B.storage&&(w+=U-G),V.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=w,w+=B.storage}}}const O=w%U;return O>0&&(w+=U-O),A.__size=w,A.__cache={},this}function b(A){const L={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(L.boundary=4,L.storage=4):A.isVector2?(L.boundary=8,L.storage=8):A.isVector3||A.isColor?(L.boundary=16,L.storage=12):A.isVector4?(L.boundary=16,L.storage=16):A.isMatrix3?(L.boundary=48,L.storage=48):A.isMatrix4?(L.boundary=64,L.storage=64):A.isTexture?xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):xe("WebGLRenderer: Unsupported uniform value type.",A),L}function y(A){const L=A.target;L.removeEventListener("dispose",y);const w=u.indexOf(L.__bindingPointIndex);u.splice(w,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function M(){for(const A in a)s.deleteBuffer(a[A]);u=[],a={},l={}}return{bind:d,update:h,dispose:M}}const NL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ua=null;function OL(){return ua===null&&(ua=new v2(NL,16,16,dc,nr),ua.name="DFG_LUT",ua.minFilter=ci,ua.magFilter=ci,ua.wrapS=es,ua.wrapT=es,ua.generateMipmaps=!1,ua.needsUpdate=!0),ua}class q_{constructor(t={}){const{canvas:e=Kw(),context:i=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=$i}=t;this.isWebGLRenderer=!0;let S;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=i.getContextAttributes().alpha}else S=u;const b=x,y=new Set([I_,B_,F_]),M=new Set([$i,Ta,Qu,Ju,P_,z_]),A=new Uint32Array(4),L=new Int32Array(4);let w=null,U=null;const O=[],R=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let k=!1;this._outputColorSpace=Ji;let I=0,V=0,$=null,Z=-1,Y=null;const z=new Cn,B=new Cn;let tt=null;const rt=new ye(0);let G=0,F=e.width,Q=e.height,_t=1,Mt=null,Lt=null;const it=new Cn(0,0,F,Q),gt=new Cn(0,0,F,Q);let Et=!1;const zt=new W_;let ee=!1,Kt=!1;const ze=new vn,qt=new nt,ae=new Cn,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function ct(){return $===null?_t:1}let q=i;function je(N,j){return e.getContext(N,j)}try{const N={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:v};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${w_}`),e.addEventListener("webglcontextlost",Xt,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",Xe,!1),q===null){const j="webgl2";if(q=je(j,N),q===null)throw je(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw tn("WebGLRenderer: "+N.message),N}let Te,ue,Wt,H,C,K,vt,xt,dt,Vt,Rt,ie,Yt,wt,At,Ht,Pt,Ft,pe,X,Dt,Ct,Nt;function Tt(){Te=new P3(q),Te.init(),Dt=new TL(q,Te),ue=new w3(q,Te,t,Dt),Wt=new bL(q,Te),ue.reversedDepthBuffer&&_&&Wt.buffers.depth.setReversed(!0),H=new B3(q),C=new cL,K=new EL(q,Te,Wt,C,ue,Dt,H),vt=new O3(D),xt=new k2(q),Ct=new T3(q,xt),dt=new z3(q,xt,H,Ct),Vt=new H3(q,dt,xt,Ct,H),Ft=new I3(q,ue,K),At=new C3(C),Rt=new lL(D,vt,Te,ue,Ct,At),ie=new LL(D,C),Yt=new fL,wt=new _L(Te),Pt=new E3(D,vt,Wt,Vt,S,d),Ht=new ML(D,Vt,ue),Nt=new UL(q,H,ue,Wt),pe=new A3(q,Te,H),X=new F3(q,Te,H),H.programs=Rt.programs,D.capabilities=ue,D.extensions=Te,D.properties=C,D.renderLists=Yt,D.shadowMap=Ht,D.state=Wt,D.info=H}Tt(),b!==$i&&(T=new V3(b,e.width,e.height,a,l));const mt=new RL(D,q);this.xr=mt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const N=Te.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Te.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(N){N!==void 0&&(_t=N,this.setSize(F,Q,!1))},this.getSize=function(N){return N.set(F,Q)},this.setSize=function(N,j,ut=!0){if(mt.isPresenting){xe("WebGLRenderer: Can't change size while VR device is presenting.");return}F=N,Q=j,e.width=Math.floor(N*_t),e.height=Math.floor(j*_t),ut===!0&&(e.style.width=N+"px",e.style.height=j+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,N,j)},this.getDrawingBufferSize=function(N){return N.set(F*_t,Q*_t).floor()},this.setDrawingBufferSize=function(N,j,ut){F=N,Q=j,_t=ut,e.width=Math.floor(N*ut),e.height=Math.floor(j*ut),this.setViewport(0,0,N,j)},this.setEffects=function(N){if(b===$i){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let j=0;j<N.length;j++)if(N[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(z)},this.getViewport=function(N){return N.copy(it)},this.setViewport=function(N,j,ut,ot){N.isVector4?it.set(N.x,N.y,N.z,N.w):it.set(N,j,ut,ot),Wt.viewport(z.copy(it).multiplyScalar(_t).round())},this.getScissor=function(N){return N.copy(gt)},this.setScissor=function(N,j,ut,ot){N.isVector4?gt.set(N.x,N.y,N.z,N.w):gt.set(N,j,ut,ot),Wt.scissor(B.copy(gt).multiplyScalar(_t).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(N){Wt.setScissorTest(Et=N)},this.setOpaqueSort=function(N){Mt=N},this.setTransparentSort=function(N){Lt=N},this.getClearColor=function(N){return N.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(N=!0,j=!0,ut=!0){let ot=0;if(N){let at=!1;if($!==null){const Ut=$.texture.format;at=y.has(Ut)}if(at){const Ut=$.texture.type,It=M.has(Ut),Ot=Pt.getClearColor(),jt=Pt.getClearAlpha(),Zt=Ot.r,me=Ot.g,be=Ot.b;It?(A[0]=Zt,A[1]=me,A[2]=be,A[3]=jt,q.clearBufferuiv(q.COLOR,0,A)):(L[0]=Zt,L[1]=me,L[2]=be,L[3]=jt,q.clearBufferiv(q.COLOR,0,L))}else ot|=q.COLOR_BUFFER_BIT}j&&(ot|=q.DEPTH_BUFFER_BIT),ut&&(ot|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&q.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Xt,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),Pt.dispose(),Yt.dispose(),wt.dispose(),C.dispose(),vt.dispose(),Vt.dispose(),Ct.dispose(),Nt.dispose(),Rt.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",de),mt.removeEventListener("sessionend",xn),ve.stop()};function Xt(N){N.preventDefault(),gM("WebGLRenderer: Context Lost."),k=!0}function le(){gM("WebGLRenderer: Context Restored."),k=!1;const N=H.autoReset,j=Ht.enabled,ut=Ht.autoUpdate,ot=Ht.needsUpdate,at=Ht.type;Tt(),H.autoReset=N,Ht.enabled=j,Ht.autoUpdate=ut,Ht.needsUpdate=ot,Ht.type=at}function Xe(N){tn("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function kt(N){const j=N.target;j.removeEventListener("dispose",kt),Jt(j)}function Jt(N){Ae(N),C.remove(N)}function Ae(N){const j=C.get(N).programs;j!==void 0&&(j.forEach(function(ut){Rt.releaseProgram(ut)}),N.isShaderMaterial&&Rt.releaseShaderCache(N))}this.renderBufferDirect=function(N,j,ut,ot,at,Ut){j===null&&(j=_e);const It=at.isMesh&&at.matrixWorld.determinant()<0,Ot=Li(N,j,ut,ot,at);Wt.setMaterial(ot,It);let jt=ut.index,Zt=1;if(ot.wireframe===!0){if(jt=dt.getWireframeAttribute(ut),jt===void 0)return;Zt=2}const me=ut.drawRange,be=ut.attributes.position;let Qt=me.start*Zt,Le=(me.start+me.count)*Zt;Ut!==null&&(Qt=Math.max(Qt,Ut.start*Zt),Le=Math.min(Le,(Ut.start+Ut.count)*Zt)),jt!==null?(Qt=Math.max(Qt,0),Le=Math.min(Le,jt.count)):be!=null&&(Qt=Math.max(Qt,0),Le=Math.min(Le,be.count));const En=Le-Qt;if(En<0||En===1/0)return;Ct.setup(at,ot,Ot,ut,jt);let Tn,Qe=pe;if(jt!==null&&(Tn=xt.get(jt),Qe=X,Qe.setIndex(Tn)),at.isMesh)ot.wireframe===!0?(Wt.setLineWidth(ot.wireframeLinewidth*ct()),Qe.setMode(q.LINES)):Qe.setMode(q.TRIANGLES);else if(at.isLine){let Qn=ot.linewidth;Qn===void 0&&(Qn=1),Wt.setLineWidth(Qn*ct()),at.isLineSegments?Qe.setMode(q.LINES):at.isLineLoop?Qe.setMode(q.LINE_LOOP):Qe.setMode(q.LINE_STRIP)}else at.isPoints?Qe.setMode(q.POINTS):at.isSprite&&Qe.setMode(q.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)Od("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Qe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const Qn=at._multiDrawStarts,ne=at._multiDrawCounts,Ui=at._multiDrawCount,Se=jt?xt.get(jt).bytesPerElement:1,Ni=C.get(ot).currentProgram.getUniforms();for(let cr=0;cr<Ui;cr++)Ni.setValue(q,"_gl_DrawID",cr),Qe.render(Qn[cr]/Se,ne[cr])}else if(at.isInstancedMesh)Qe.renderInstances(Qt,En,at.count);else if(ut.isInstancedBufferGeometry){const Qn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,ne=Math.min(ut.instanceCount,Qn);Qe.renderInstances(Qt,En,ne)}else Qe.render(Qt,En)};function Bt(N,j,ut){N.transparent===!0&&N.side===pa&&N.forceSinglePass===!1?(N.side=er,N.needsUpdate=!0,Hn(N,j,ut),N.side=as,N.needsUpdate=!0,Hn(N,j,ut),N.side=pa):Hn(N,j,ut)}this.compile=function(N,j,ut=null){ut===null&&(ut=N),U=wt.get(ut),U.init(j),R.push(U),ut.traverseVisible(function(at){at.isLight&&at.layers.test(j.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),N!==ut&&N.traverseVisible(function(at){at.isLight&&at.layers.test(j.layers)&&(U.pushLight(at),at.castShadow&&U.pushShadow(at))}),U.setupLights();const ot=new Set;return N.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Ut=at.material;if(Ut)if(Array.isArray(Ut))for(let It=0;It<Ut.length;It++){const Ot=Ut[It];Bt(Ot,ut,at),ot.add(Ot)}else Bt(Ut,ut,at),ot.add(Ut)}),U=R.pop(),ot},this.compileAsync=function(N,j,ut=null){const ot=this.compile(N,j,ut);return new Promise(at=>{function Ut(){if(ot.forEach(function(It){C.get(It).currentProgram.isReady()&&ot.delete(It)}),ot.size===0){at(N);return}setTimeout(Ut,10)}Te.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let he=null;function oe(N){he&&he(N)}function de(){ve.stop()}function xn(){ve.start()}const ve=new Cb;ve.setAnimationLoop(oe),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(N){he=N,mt.setAnimationLoop(N),N===null?ve.stop():ve.start()},mt.addEventListener("sessionstart",de),mt.addEventListener("sessionend",xn),this.render=function(N,j){if(j!==void 0&&j.isCamera!==!0){tn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const ut=mt.enabled===!0&&mt.isPresenting===!0,ot=T!==null&&($===null||ut)&&T.begin(D,$);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(j),j=mt.getCamera()),N.isScene===!0&&N.onBeforeRender(D,N,j,$),U=wt.get(N,R.length),U.init(j),R.push(U),ze.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),zt.setFromProjectionMatrix(ze,_a,j.reversedDepth),Kt=this.localClippingEnabled,ee=At.init(this.clippingPlanes,Kt),w=Yt.get(N,O.length),w.init(),O.push(w),mt.enabled===!0&&mt.isPresenting===!0){const It=D.xr.getDepthSensingMesh();It!==null&&cn(It,j,-1/0,D.sortObjects)}cn(N,j,0,D.sortObjects),w.finish(),D.sortObjects===!0&&w.sort(Mt,Lt),se=mt.enabled===!1||mt.isPresenting===!1||mt.hasDepthSensing()===!1,se&&Pt.addToRenderList(w,N),this.info.render.frame++,ee===!0&&At.beginShadows();const at=U.state.shadowsArray;if(Ht.render(at,N,j),ee===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ot&&T.hasRenderPass())===!1){const It=w.opaque,Ot=w.transmissive;if(U.setupLights(),j.isArrayCamera){const jt=j.cameras;if(Ot.length>0)for(let Zt=0,me=jt.length;Zt<me;Zt++){const be=jt[Zt];we(It,Ot,N,be)}se&&Pt.render(N);for(let Zt=0,me=jt.length;Zt<me;Zt++){const be=jt[Zt];un(w,N,be,be.viewport)}}else Ot.length>0&&we(It,Ot,N,j),se&&Pt.render(N),un(w,N,j)}$!==null&&V===0&&(K.updateMultisampleRenderTarget($),K.updateRenderTargetMipmap($)),ot&&T.end(D),N.isScene===!0&&N.onAfterRender(D,N,j),Ct.resetDefaultState(),Z=-1,Y=null,R.pop(),R.length>0?(U=R[R.length-1],ee===!0&&At.setGlobalState(D.clippingPlanes,U.state.camera)):U=null,O.pop(),O.length>0?w=O[O.length-1]:w=null};function cn(N,j,ut,ot){if(N.visible===!1)return;if(N.layers.test(j.layers)){if(N.isGroup)ut=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(j);else if(N.isLight)U.pushLight(N),N.castShadow&&U.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||zt.intersectsSprite(N)){ot&&ae.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ze);const It=Vt.update(N),Ot=N.material;Ot.visible&&w.push(N,It,Ot,ut,ae.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||zt.intersectsObject(N))){const It=Vt.update(N),Ot=N.material;if(ot&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ae.copy(N.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ae.copy(It.boundingSphere.center)),ae.applyMatrix4(N.matrixWorld).applyMatrix4(ze)),Array.isArray(Ot)){const jt=It.groups;for(let Zt=0,me=jt.length;Zt<me;Zt++){const be=jt[Zt],Qt=Ot[be.materialIndex];Qt&&Qt.visible&&w.push(N,It,Qt,ut,ae.z,be)}}else Ot.visible&&w.push(N,It,Ot,ut,ae.z,null)}}const Ut=N.children;for(let It=0,Ot=Ut.length;It<Ot;It++)cn(Ut[It],j,ut,ot)}function un(N,j,ut,ot){const{opaque:at,transmissive:Ut,transparent:It}=N;U.setupLightsView(ut),ee===!0&&At.setGlobalState(D.clippingPlanes,ut),ot&&Wt.viewport(z.copy(ot)),at.length>0&&Me(at,j,ut),Ut.length>0&&Me(Ut,j,ut),It.length>0&&Me(It,j,ut),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function we(N,j,ut,ot){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ot.id]===void 0){const Qt=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ot.id]=new Ri(1,1,{generateMipmaps:!0,type:Qt?nr:$i,minFilter:No,samples:Math.max(4,ue.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}const Ut=U.state.transmissionRenderTarget[ot.id],It=ot.viewport||z;Ut.setSize(It.z*D.transmissionResolutionScale,It.w*D.transmissionResolutionScale);const Ot=D.getRenderTarget(),jt=D.getActiveCubeFace(),Zt=D.getActiveMipmapLevel();D.setRenderTarget(Ut),D.getClearColor(rt),G=D.getClearAlpha(),G<1&&D.setClearColor(16777215,.5),D.clear(),se&&Pt.render(ut);const me=D.toneMapping;D.toneMapping=Sa;const be=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),U.setupLightsView(ot),ee===!0&&At.setGlobalState(D.clippingPlanes,ot),Me(N,ut,ot),K.updateMultisampleRenderTarget(Ut),K.updateRenderTargetMipmap(Ut),Te.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Le=0,En=j.length;Le<En;Le++){const Tn=j[Le],{object:Qe,geometry:Qn,material:ne,group:Ui}=Tn;if(ne.side===pa&&Qe.layers.test(ot.layers)){const Se=ne.side;ne.side=er,ne.needsUpdate=!0,Ie(Qe,ut,ot,Qn,ne,Ui),ne.side=Se,ne.needsUpdate=!0,Qt=!0}}Qt===!0&&(K.updateMultisampleRenderTarget(Ut),K.updateRenderTargetMipmap(Ut))}D.setRenderTarget(Ot,jt,Zt),D.setClearColor(rt,G),be!==void 0&&(ot.viewport=be),D.toneMapping=me}function Me(N,j,ut){const ot=j.isScene===!0?j.overrideMaterial:null;for(let at=0,Ut=N.length;at<Ut;at++){const It=N[at],{object:Ot,geometry:jt,group:Zt}=It;let me=It.material;me.allowOverride===!0&&ot!==null&&(me=ot),Ot.layers.test(ut.layers)&&Ie(Ot,j,ut,jt,me,Zt)}}function Ie(N,j,ut,ot,at,Ut){N.onBeforeRender(D,j,ut,ot,at,Ut),N.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),at.onBeforeRender(D,j,ut,ot,N,Ut),at.transparent===!0&&at.side===pa&&at.forceSinglePass===!1?(at.side=er,at.needsUpdate=!0,D.renderBufferDirect(ut,j,ot,at,N,Ut),at.side=as,at.needsUpdate=!0,D.renderBufferDirect(ut,j,ot,at,N,Ut),at.side=pa):D.renderBufferDirect(ut,j,ot,at,N,Ut),N.onAfterRender(D,j,ut,ot,at,Ut)}function Hn(N,j,ut){j.isScene!==!0&&(j=_e);const ot=C.get(N),at=U.state.lights,Ut=U.state.shadowsArray,It=at.state.version,Ot=Rt.getParameters(N,at.state,Ut,j,ut),jt=Rt.getProgramCacheKey(Ot);let Zt=ot.programs;ot.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?j.environment:null,ot.fog=j.fog;const me=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ot.envMap=vt.get(N.envMap||ot.environment,me),ot.envMapRotation=ot.environment!==null&&N.envMap===null?j.environmentRotation:N.envMapRotation,Zt===void 0&&(N.addEventListener("dispose",kt),Zt=new Map,ot.programs=Zt);let be=Zt.get(jt);if(be!==void 0){if(ot.currentProgram===be&&ot.lightsStateVersion===It)return ii(N,Ot),be}else Ot.uniforms=Rt.getUniforms(N),N.onBeforeCompile(Ot,D),be=Rt.acquireProgram(Ot,jt),Zt.set(jt,be),ot.uniforms=Ot.uniforms;const Qt=ot.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Qt.clippingPlanes=At.uniform),ii(N,Ot),ot.needsLights=Rn(N),ot.lightsStateVersion=It,ot.needsLights&&(Qt.ambientLightColor.value=at.state.ambient,Qt.lightProbe.value=at.state.probe,Qt.directionalLights.value=at.state.directional,Qt.directionalLightShadows.value=at.state.directionalShadow,Qt.spotLights.value=at.state.spot,Qt.spotLightShadows.value=at.state.spotShadow,Qt.rectAreaLights.value=at.state.rectArea,Qt.ltc_1.value=at.state.rectAreaLTC1,Qt.ltc_2.value=at.state.rectAreaLTC2,Qt.pointLights.value=at.state.point,Qt.pointLightShadows.value=at.state.pointShadow,Qt.hemisphereLights.value=at.state.hemi,Qt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Qt.spotLightMatrix.value=at.state.spotLightMatrix,Qt.spotLightMap.value=at.state.spotLightMap,Qt.pointShadowMatrix.value=at.state.pointShadowMatrix),ot.currentProgram=be,ot.uniformsList=null,be}function fn(N){if(N.uniformsList===null){const j=N.currentProgram.getUniforms();N.uniformsList=Sd.seqWithValue(j.seq,N.uniforms)}return N.uniformsList}function ii(N,j){const ut=C.get(N);ut.outputColorSpace=j.outputColorSpace,ut.batching=j.batching,ut.batchingColor=j.batchingColor,ut.instancing=j.instancing,ut.instancingColor=j.instancingColor,ut.instancingMorph=j.instancingMorph,ut.skinning=j.skinning,ut.morphTargets=j.morphTargets,ut.morphNormals=j.morphNormals,ut.morphColors=j.morphColors,ut.morphTargetsCount=j.morphTargetsCount,ut.numClippingPlanes=j.numClippingPlanes,ut.numIntersection=j.numClipIntersection,ut.vertexAlphas=j.vertexAlphas,ut.vertexTangents=j.vertexTangents,ut.toneMapping=j.toneMapping}function Li(N,j,ut,ot,at){j.isScene!==!0&&(j=_e),K.resetTextureUnits();const Ut=j.fog,It=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?j.environment:null,Ot=$===null?D.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:pc,jt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,Zt=vt.get(ot.envMap||It,jt),me=ot.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,be=!!ut.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Qt=!!ut.morphAttributes.position,Le=!!ut.morphAttributes.normal,En=!!ut.morphAttributes.color;let Tn=Sa;ot.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Tn=D.toneMapping);const Qe=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Qn=Qe!==void 0?Qe.length:0,ne=C.get(ot),Ui=U.state.lights;if(ee===!0&&(Kt===!0||N!==Y)){const Vn=N===Y&&ot.id===Z;At.setState(ot,N,Vn)}let Se=!1;ot.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==Ui.state.version||ne.outputColorSpace!==Ot||at.isBatchedMesh&&ne.batching===!1||!at.isBatchedMesh&&ne.batching===!0||at.isBatchedMesh&&ne.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&ne.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&ne.instancing===!1||!at.isInstancedMesh&&ne.instancing===!0||at.isSkinnedMesh&&ne.skinning===!1||!at.isSkinnedMesh&&ne.skinning===!0||at.isInstancedMesh&&ne.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&ne.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&ne.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&ne.instancingMorph===!1&&at.morphTexture!==null||ne.envMap!==Zt||ot.fog===!0&&ne.fog!==Ut||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==At.numPlanes||ne.numIntersection!==At.numIntersection)||ne.vertexAlphas!==me||ne.vertexTangents!==be||ne.morphTargets!==Qt||ne.morphNormals!==Le||ne.morphColors!==En||ne.toneMapping!==Tn||ne.morphTargetsCount!==Qn)&&(Se=!0):(Se=!0,ne.__version=ot.version);let Ni=ne.currentProgram;Se===!0&&(Ni=Hn(ot,j,at));let cr=!1,Kr=!1,ur=!1;const nn=Ni.getUniforms(),Gn=ne.uniforms;if(Wt.useProgram(Ni.program)&&(cr=!0,Kr=!0,ur=!0),ot.id!==Z&&(Z=ot.id,Kr=!0),cr||Y!==N){Wt.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),nn.setValue(q,"projectionMatrix",N.projectionMatrix),nn.setValue(q,"viewMatrix",N.matrixWorldInverse);const Qr=nn.map.cameraPosition;Qr!==void 0&&Qr.setValue(q,qt.setFromMatrixPosition(N.matrixWorld)),ue.logarithmicDepthBuffer&&nn.setValue(q,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&nn.setValue(q,"isOrthographic",N.isOrthographicCamera===!0),Y!==N&&(Y=N,Kr=!0,ur=!0)}if(ne.needsLights&&(Ui.state.directionalShadowMap.length>0&&nn.setValue(q,"directionalShadowMap",Ui.state.directionalShadowMap,K),Ui.state.spotShadowMap.length>0&&nn.setValue(q,"spotShadowMap",Ui.state.spotShadowMap,K),Ui.state.pointShadowMap.length>0&&nn.setValue(q,"pointShadowMap",Ui.state.pointShadowMap,K)),at.isSkinnedMesh){nn.setOptional(q,at,"bindMatrix"),nn.setOptional(q,at,"bindMatrixInverse");const Vn=at.skeleton;Vn&&(Vn.boneTexture===null&&Vn.computeBoneTexture(),nn.setValue(q,"boneTexture",Vn.boneTexture,K))}at.isBatchedMesh&&(nn.setOptional(q,at,"batchingTexture"),nn.setValue(q,"batchingTexture",at._matricesTexture,K),nn.setOptional(q,at,"batchingIdTexture"),nn.setValue(q,"batchingIdTexture",at._indirectTexture,K),nn.setOptional(q,at,"batchingColorTexture"),at._colorsTexture!==null&&nn.setValue(q,"batchingColorTexture",at._colorsTexture,K));const Oi=ut.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Ft.update(at,ut,Ni),(Kr||ne.receiveShadow!==at.receiveShadow)&&(ne.receiveShadow=at.receiveShadow,nn.setValue(q,"receiveShadow",at.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&j.environment!==null&&(Gn.envMapIntensity.value=j.environmentIntensity),Gn.dfgLUT!==void 0&&(Gn.dfgLUT.value=OL()),Kr&&(nn.setValue(q,"toneMappingExposure",D.toneMappingExposure),ne.needsLights&&yn(Gn,ur),Ut&&ot.fog===!0&&ie.refreshFogUniforms(Gn,Ut),ie.refreshMaterialUniforms(Gn,ot,_t,Q,U.state.transmissionRenderTarget[N.id]),Sd.upload(q,fn(ne),Gn,K)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(Sd.upload(q,fn(ne),Gn,K),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&nn.setValue(q,"center",at.center),nn.setValue(q,"modelViewMatrix",at.modelViewMatrix),nn.setValue(q,"normalMatrix",at.normalMatrix),nn.setValue(q,"modelMatrix",at.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Vn=ot.uniformsGroups;for(let Qr=0,Ra=Vn.length;Qr<Ra;Qr++){const Jo=Vn[Qr];Nt.update(Jo,Ni),Nt.bind(Jo,Ni)}}return Ni}function yn(N,j){N.ambientLightColor.needsUpdate=j,N.lightProbe.needsUpdate=j,N.directionalLights.needsUpdate=j,N.directionalLightShadows.needsUpdate=j,N.pointLights.needsUpdate=j,N.pointLightShadows.needsUpdate=j,N.spotLights.needsUpdate=j,N.spotLightShadows.needsUpdate=j,N.rectAreaLights.needsUpdate=j,N.hemisphereLights.needsUpdate=j}function Rn(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(N,j,ut){const ot=C.get(N);ot.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),C.get(N.texture).__webglTexture=j,C.get(N.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:ut,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,j){const ut=C.get(N);ut.__webglFramebuffer=j,ut.__useDefaultFramebuffer=j===void 0};const Sn=q.createFramebuffer();this.setRenderTarget=function(N,j=0,ut=0){$=N,I=j,V=ut;let ot=null,at=!1,Ut=!1;if(N){const Ot=C.get(N);if(Ot.__useDefaultFramebuffer!==void 0){Wt.bindFramebuffer(q.FRAMEBUFFER,Ot.__webglFramebuffer),z.copy(N.viewport),B.copy(N.scissor),tt=N.scissorTest,Wt.viewport(z),Wt.scissor(B),Wt.setScissorTest(tt),Z=-1;return}else if(Ot.__webglFramebuffer===void 0)K.setupRenderTarget(N);else if(Ot.__hasExternalTextures)K.rebindTextures(N,C.get(N.texture).__webglTexture,C.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const me=N.depthTexture;if(Ot.__boundDepthTexture!==me){if(me!==null&&C.has(me)&&(N.width!==me.image.width||N.height!==me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(N)}}const jt=N.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ut=!0);const Zt=C.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Zt[j])?ot=Zt[j][ut]:ot=Zt[j],at=!0):N.samples>0&&K.useMultisampledRTT(N)===!1?ot=C.get(N).__webglMultisampledFramebuffer:Array.isArray(Zt)?ot=Zt[ut]:ot=Zt,z.copy(N.viewport),B.copy(N.scissor),tt=N.scissorTest}else z.copy(it).multiplyScalar(_t).floor(),B.copy(gt).multiplyScalar(_t).floor(),tt=Et;if(ut!==0&&(ot=Sn),Wt.bindFramebuffer(q.FRAMEBUFFER,ot)&&Wt.drawBuffers(N,ot),Wt.viewport(z),Wt.scissor(B),Wt.setScissorTest(tt),at){const Ot=C.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ot.__webglTexture,ut)}else if(Ut){const Ot=j;for(let jt=0;jt<N.textures.length;jt++){const Zt=C.get(N.textures[jt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+jt,Zt.__webglTexture,ut,Ot)}}else if(N!==null&&ut!==0){const Ot=C.get(N.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ot.__webglTexture,ut)}Z=-1},this.readRenderTargetPixels=function(N,j,ut,ot,at,Ut,It,Ot=0){if(!(N&&N.isWebGLRenderTarget)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=C.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&It!==void 0&&(jt=jt[It]),jt){Wt.bindFramebuffer(q.FRAMEBUFFER,jt);try{const Zt=N.textures[Ot],me=Zt.format,be=Zt.type;if(N.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ot),!ue.textureFormatReadable(me)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(be)){tn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=N.width-ot&&ut>=0&&ut<=N.height-at&&q.readPixels(j,ut,ot,at,Dt.convert(me),Dt.convert(be),Ut)}finally{const Zt=$!==null?C.get($).__webglFramebuffer:null;Wt.bindFramebuffer(q.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(N,j,ut,ot,at,Ut,It,Ot=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=C.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&It!==void 0&&(jt=jt[It]),jt)if(j>=0&&j<=N.width-ot&&ut>=0&&ut<=N.height-at){Wt.bindFramebuffer(q.FRAMEBUFFER,jt);const Zt=N.textures[Ot],me=Zt.format,be=Zt.type;if(N.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Ot),!ue.textureFormatReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Qt),q.bufferData(q.PIXEL_PACK_BUFFER,Ut.byteLength,q.STREAM_READ),q.readPixels(j,ut,ot,at,Dt.convert(me),Dt.convert(be),0);const Le=$!==null?C.get($).__webglFramebuffer:null;Wt.bindFramebuffer(q.FRAMEBUFFER,Le);const En=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Qw(q,En,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Qt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ut),q.deleteBuffer(Qt),q.deleteSync(En),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,j=null,ut=0){const ot=Math.pow(2,-ut),at=Math.floor(N.image.width*ot),Ut=Math.floor(N.image.height*ot),It=j!==null?j.x:0,Ot=j!==null?j.y:0;K.setTexture2D(N,0),q.copyTexSubImage2D(q.TEXTURE_2D,ut,0,0,It,Ot,at,Ut),Wt.unbindTexture()};const xi=q.createFramebuffer(),Ur=q.createFramebuffer();this.copyTextureToTexture=function(N,j,ut=null,ot=null,at=0,Ut=0){let It,Ot,jt,Zt,me,be,Qt,Le,En;const Tn=N.isCompressedTexture?N.mipmaps[Ut]:N.image;if(ut!==null)It=ut.max.x-ut.min.x,Ot=ut.max.y-ut.min.y,jt=ut.isBox3?ut.max.z-ut.min.z:1,Zt=ut.min.x,me=ut.min.y,be=ut.isBox3?ut.min.z:0;else{const Gn=Math.pow(2,-at);It=Math.floor(Tn.width*Gn),Ot=Math.floor(Tn.height*Gn),N.isDataArrayTexture?jt=Tn.depth:N.isData3DTexture?jt=Math.floor(Tn.depth*Gn):jt=1,Zt=0,me=0,be=0}ot!==null?(Qt=ot.x,Le=ot.y,En=ot.z):(Qt=0,Le=0,En=0);const Qe=Dt.convert(j.format),Qn=Dt.convert(j.type);let ne;j.isData3DTexture?(K.setTexture3D(j,0),ne=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(K.setTexture2DArray(j,0),ne=q.TEXTURE_2D_ARRAY):(K.setTexture2D(j,0),ne=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const Ui=q.getParameter(q.UNPACK_ROW_LENGTH),Se=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Ni=q.getParameter(q.UNPACK_SKIP_PIXELS),cr=q.getParameter(q.UNPACK_SKIP_ROWS),Kr=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,Tn.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Tn.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Zt),q.pixelStorei(q.UNPACK_SKIP_ROWS,me),q.pixelStorei(q.UNPACK_SKIP_IMAGES,be);const ur=N.isDataArrayTexture||N.isData3DTexture,nn=j.isDataArrayTexture||j.isData3DTexture;if(N.isDepthTexture){const Gn=C.get(N),Oi=C.get(j),Vn=C.get(Gn.__renderTarget),Qr=C.get(Oi.__renderTarget);Wt.bindFramebuffer(q.READ_FRAMEBUFFER,Vn.__webglFramebuffer),Wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let Ra=0;Ra<jt;Ra++)ur&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,C.get(N).__webglTexture,at,be+Ra),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,C.get(j).__webglTexture,Ut,En+Ra)),q.blitFramebuffer(Zt,me,It,Ot,Qt,Le,It,Ot,q.DEPTH_BUFFER_BIT,q.NEAREST);Wt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(at!==0||N.isRenderTargetTexture||C.has(N)){const Gn=C.get(N),Oi=C.get(j);Wt.bindFramebuffer(q.READ_FRAMEBUFFER,xi),Wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ur);for(let Vn=0;Vn<jt;Vn++)ur?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Gn.__webglTexture,at,be+Vn):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Gn.__webglTexture,at),nn?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Oi.__webglTexture,Ut,En+Vn):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Oi.__webglTexture,Ut),at!==0?q.blitFramebuffer(Zt,me,It,Ot,Qt,Le,It,Ot,q.COLOR_BUFFER_BIT,q.NEAREST):nn?q.copyTexSubImage3D(ne,Ut,Qt,Le,En+Vn,Zt,me,It,Ot):q.copyTexSubImage2D(ne,Ut,Qt,Le,Zt,me,It,Ot);Wt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else nn?N.isDataTexture||N.isData3DTexture?q.texSubImage3D(ne,Ut,Qt,Le,En,It,Ot,jt,Qe,Qn,Tn.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(ne,Ut,Qt,Le,En,It,Ot,jt,Qe,Tn.data):q.texSubImage3D(ne,Ut,Qt,Le,En,It,Ot,jt,Qe,Qn,Tn):N.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ut,Qt,Le,It,Ot,Qe,Qn,Tn.data):N.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ut,Qt,Le,Tn.width,Tn.height,Qe,Tn.data):q.texSubImage2D(q.TEXTURE_2D,Ut,Qt,Le,It,Ot,Qe,Qn,Tn);q.pixelStorei(q.UNPACK_ROW_LENGTH,Ui),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Se),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Ni),q.pixelStorei(q.UNPACK_SKIP_ROWS,cr),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Kr),Ut===0&&j.generateMipmaps&&q.generateMipmap(ne),Wt.unbindTexture()},this.initRenderTarget=function(N){C.get(N).__webglFramebuffer===void 0&&K.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?K.setTextureCube(N,0):N.isData3DTexture?K.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?K.setTexture2DArray(N,0):K.setTexture2D(N,0),Wt.unbindTexture()},this.resetState=function(){I=0,V=0,$=null,Wt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _a}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ze._getUnpackColorSpace()}}class PL extends li{constructor(t,e={}){super(t),this.isWater=!0;const i=this,a=e.textureWidth!==void 0?e.textureWidth:512,l=e.textureHeight!==void 0?e.textureHeight:512,u=e.clipBias!==void 0?e.clipBias:0,f=e.alpha!==void 0?e.alpha:1,d=e.time!==void 0?e.time:0,h=e.waterNormals!==void 0?e.waterNormals:null,m=e.sunDirection!==void 0?e.sunDirection:new nt(.70707,.70707,0),v=new ye(e.sunColor!==void 0?e.sunColor:16777215),_=new ye(e.waterColor!==void 0?e.waterColor:8355711),x=e.eye!==void 0?e.eye:new nt(0,0,0),S=e.distortionScale!==void 0?e.distortionScale:20,b=e.side!==void 0?e.side:as,y=e.fog!==void 0?e.fog:!1,M=new Hs,A=new nt,L=new nt,w=new nt,U=new vn,O=new nt(0,0,-1),R=new Cn,T=new nt,D=new nt,k=new Cn,I=new vn,V=new Ti,$=new Ri(a,l,{type:nr}),Z={name:"MirrorShader",uniforms:qo.merge([Gt.fog,Gt.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new vn},sunColor:{value:new ye(8355711)},sunDirection:{value:new nt(.70707,.70707,0)},eye:{value:new nt},waterColor:{value:new ye(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},Y=new ui({name:Z.name,uniforms:qo.clone(Z.uniforms),vertexShader:Z.vertexShader,fragmentShader:Z.fragmentShader,lights:!0,side:b,fog:y});Y.uniforms.mirrorSampler.value=$.texture,Y.uniforms.textureMatrix.value=I,Y.uniforms.alpha.value=f,Y.uniforms.time.value=d,Y.uniforms.normalSampler.value=h,Y.uniforms.sunColor.value=v,Y.uniforms.waterColor.value=_,Y.uniforms.sunDirection.value=m,Y.uniforms.distortionScale.value=S,Y.uniforms.eye.value=x,i.material=Y,i.onBeforeRender=function(z,B,tt){if(L.setFromMatrixPosition(i.matrixWorld),w.setFromMatrixPosition(tt.matrixWorld),U.extractRotation(i.matrixWorld),A.set(0,0,1),A.applyMatrix4(U),T.subVectors(L,w),T.dot(A)>0)return;T.reflect(A).negate(),T.add(L),U.extractRotation(tt.matrixWorld),O.set(0,0,-1),O.applyMatrix4(U),O.add(w),D.subVectors(L,O),D.reflect(A).negate(),D.add(L),V.position.copy(T),V.up.set(0,1,0),V.up.applyMatrix4(U),V.up.reflect(A),V.lookAt(D),V.far=tt.far,V.updateMatrixWorld(),V.projectionMatrix.copy(tt.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(V.projectionMatrix),I.multiply(V.matrixWorldInverse),M.setFromNormalAndCoplanarPoint(A,L),M.applyMatrix4(V.matrixWorldInverse),R.set(M.normal.x,M.normal.y,M.normal.z,M.constant);const rt=V.projectionMatrix;k.x=(Math.sign(R.x)+rt.elements[8])/rt.elements[0],k.y=(Math.sign(R.y)+rt.elements[9])/rt.elements[5],k.z=-1,k.w=(1+rt.elements[10])/rt.elements[14],R.multiplyScalar(2/R.dot(k)),rt.elements[2]=R.x,rt.elements[6]=R.y,rt.elements[10]=R.z+1-u,rt.elements[14]=R.w,x.setFromMatrixPosition(tt.matrixWorld);const G=z.getRenderTarget(),F=z.xr.enabled,Q=z.shadowMap.autoUpdate;i.visible=!1,z.xr.enabled=!1,z.shadowMap.autoUpdate=!1,z.setRenderTarget($),z.state.buffers.depth.setMask(!0),z.autoClear===!1&&z.clear(),z.render(B,V),i.visible=!0,z.xr.enabled=F,z.shadowMap.autoUpdate=Q,z.setRenderTarget(G);const _t=tt.viewport;_t!==void 0&&z.state.viewport(_t)}}}const Md={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Cc{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const zL=new gf(-1,1,1,-1,0,1);class FL extends Lr{constructor(){super(),this.setAttribute("position",new ir([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ir([0,2,0,0,2,0],2))}}const BL=new FL;class j_{constructor(t){this._mesh=new li(BL,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zL)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class IL extends Cc{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ui?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=qo.clone(t.uniforms),this.material=new ui({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new j_(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class f1 extends Cc{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const a=t.getContext(),l=t.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,f;this.inverse?(u=0,f=1):(u=1,f=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,u,4294967295),l.buffers.stencil.setClear(f),l.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class HL extends Cc{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class GL{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new De);this._width=i.width,this._height=i.height,e=new Ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nr}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new IL(Md),this.copyPass.material.blending=ya,this.timer=new H2}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let a=0,l=this.passes.length;a<l;a++){const u=this.passes[a];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),u.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),u.needsSwap){if(i){const f=this.renderer.getContext(),d=this.renderer.state.buffers.stencil;d.setFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),d.setFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}f1!==void 0&&(u instanceof f1?i=!0:u instanceof HL&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new De);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(i,a),this.renderTarget2.setSize(i,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(i,a)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class VL extends Cc{constructor(t,e,i=null,a=null,l=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ye}render(t,e,i){const a=t.autoClear;t.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(l=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),t.autoClear=a}}const kL={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class _c extends Cc{constructor(t,e=1,i,a){super(),this.strength=e,this.radius=i,this.threshold=a,this.resolution=t!==void 0?new De(t.x,t.y):new De(256,256),this.clearColor=new ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new Ri(l,u,{type:nr}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let m=0;m<this.nMips;m++){const v=new Ri(l,u,{type:nr});v.texture.name="UnrealBloomPass.h"+m,v.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(v);const _=new Ri(l,u,{type:nr});_.texture.name="UnrealBloomPass.v"+m,_.texture.generateMipmaps=!1,this.renderTargetsVertical.push(_),l=Math.round(l/2),u=Math.round(u/2)}const f=kL;this.highPassUniforms=qo.clone(f.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ui({uniforms:this.highPassUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader}),this.separableBlurMaterials=[];const d=[6,10,14,18,22];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let m=0;m<this.nMips;m++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(d[m])),this.separableBlurMaterials[m].uniforms.invSize.value=new De(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new nt(1,1,1),new nt(1,1,1),new nt(1,1,1),new nt(1,1,1),new nt(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=qo.clone(Md.uniforms),this.blendMaterial=new ui({uniforms:this.copyUniforms,vertexShader:Md.vertexShader,fragmentShader:Md.fragmentShader,premultipliedAlpha:!0,blending:ug,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ye,this._oldClearAlpha=1,this._basic=new mc,this._fsQuad=new j_(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),a=Math.round(e/2);this.renderTargetBright.setSize(i,a);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(i,a),this.renderTargetsVertical[l].setSize(i,a),this.separableBlurMaterials[l].uniforms.invSize.value=new De(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2)}render(t,e,i,a,l){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const u=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),l&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let f=this.renderTargetBright;for(let d=0;d<this.nMips;d++)this._fsQuad.material=this.separableBlurMaterials[d],this.separableBlurMaterials[d].uniforms.colorTexture.value=f.texture,this.separableBlurMaterials[d].uniforms.direction.value=_c.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[d]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[d].uniforms.colorTexture.value=this.renderTargetsHorizontal[d].texture,this.separableBlurMaterials[d].uniforms.direction.value=_c.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[d]),t.clear(),this._fsQuad.render(t),f=this.renderTargetsVertical[d];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=u}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);return new ui({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new De(.5,.5)},direction:{value:new De(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ui({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}_c.BlurDirectionX=new De(1,0);_c.BlurDirectionY=new De(0,1);const td={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class XL extends Cc{constructor(){super(),this.isOutputPass=!0,this.uniforms=qo.clone(td.uniforms),this.material=new Mb({name:td.name,uniforms:this.uniforms,vertexShader:td.vertexShader,fragmentShader:td.fragmentShader}),this._fsQuad=new j_(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Ze.getTransfer(this._outputColorSpace)===rn&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===C_?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===R_?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===D_?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===df?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===U_?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===N_?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===L_&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Ja(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Ob(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var Cr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nf={duration:.5,overwrite:!1,delay:0},Z_,vi,wn,qr=1e8,_n=1/qr,n_=Math.PI*2,WL=n_/4,YL=0,Pb=Math.sqrt,qL=Math.cos,jL=Math.sin,fi=function(t){return typeof t=="string"},Pn=function(t){return typeof t=="function"},os=function(t){return typeof t=="number"},K_=function(t){return typeof t>"u"},wa=function(t){return typeof t=="object"},rr=function(t){return t!==!1},Q_=function(){return typeof window<"u"},ed=function(t){return Pn(t)||fi(t)},zb=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Di=Array.isArray,ZL=/random\([^)]+\)/g,KL=/,\s*/g,h1=/(?:-?\.?\d|\.)+/gi,Fb=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$l=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,K0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bb=/[+-]=-?[.\d]+/,QL=/[^,'"\[\]\s]+/gi,JL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ln,fa,i_,J_,Rr={},Id={},Ib,Hb=function(t){return(Id=vc(t,Rr))&&lr},$_=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},rf=function(t,e){return!e&&console.warn(t)},Gb=function(t,e){return t&&(Rr[t]=e)&&Id&&(Id[t]=e)||Rr},af=function(){return 0},$L={suppressEvents:!0,isStart:!0,kill:!1},bd={suppressEvents:!0,kill:!1},tU={suppressEvents:!0},tv={},js=[],r_={},Vb,Mr={},Q0={},d1=30,Ed=[],ev="",nv=function(t){var e=t[0],i,a;if(wa(e)||Pn(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(a=Ed.length;a--&&!Ed[a].targetTest(e););i=Ed[a]}for(a=t.length;a--;)t[a]&&(t[a]._gsap||(t[a]._gsap=new uE(t[a],i)))||t.splice(a,1);return t},Bo=function(t){return t._gsap||nv(jr(t))[0]._gsap},kb=function(t,e,i){return(i=t[e])&&Pn(i)?t[e]():K_(i)&&t.getAttribute&&t.getAttribute(e)||i},ar=function(t,e){return(t=t.split(",")).forEach(e)||t},Bn=function(t){return Math.round(t*1e5)/1e5||0},Dn=function(t){return Math.round(t*1e7)/1e7||0},rc=function(t,e){var i=e.charAt(0),a=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+a:i==="-"?t-a:i==="*"?t*a:t/a},eU=function(t,e){for(var i=e.length,a=0;t.indexOf(e[a])<0&&++a<i;);return a<i},Hd=function(){var t=js.length,e=js.slice(0),i,a;for(r_={},js.length=0,i=0;i<t;i++)a=e[i],a&&a._lazy&&(a.render(a._lazy[0],a._lazy[1],!0)._lazy=0)},iv=function(t){return!!(t._initted||t._startAt||t.add)},Xb=function(t,e,i,a){js.length&&!vi&&Hd(),t.render(e,i,!!(vi&&e<0&&iv(t))),js.length&&!vi&&Hd()},Wb=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(QL).length<2?e:fi(t)?t.trim():t},Yb=function(t){return t},Dr=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},nU=function(t){return function(e,i){for(var a in i)a in e||a==="duration"&&t||a==="ease"||(e[a]=i[a])}},vc=function(t,e){for(var i in e)t[i]=e[i];return t},p1=function s(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=wa(e[i])?s(t[i]||(t[i]={}),e[i]):e[i]);return t},Gd=function(t,e){var i={},a;for(a in t)a in e||(i[a]=t[a]);return i},Iu=function(t){var e=t.parent||Ln,i=t.keyframes?nU(Di(t.keyframes)):Dr;if(rr(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},iU=function(t,e){for(var i=t.length,a=i===e.length;a&&i--&&t[i]===e[i];);return i<0},qb=function(t,e,i,a,l){var u=t[a],f;if(l)for(f=e[l];u&&u[l]>f;)u=u._prev;return u?(e._next=u._next,u._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[a]=e,e._prev=u,e.parent=e._dp=t,e},ep=function(t,e,i,a){i===void 0&&(i="_first"),a===void 0&&(a="_last");var l=e._prev,u=e._next;l?l._next=u:t[i]===e&&(t[i]=u),u?u._prev=l:t[a]===e&&(t[a]=l),e._next=e._prev=e.parent=null},Qs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Io=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},rU=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},a_=function(t,e,i,a){return t._startAt&&(vi?t._startAt.revert(bd):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,a))},aU=function s(t){return!t||t._ts&&s(t.parent)},m1=function(t){return t._repeat?xc(t._tTime,t=t.duration()+t._rDelay)*t:0},xc=function(t,e){var i=Math.floor(t=Dn(t/e));return t&&i===t?i-1:i},Vd=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},np=function(t){return t._end=Dn(t._start+(t._tDur/Math.abs(t._ts||t._rts||_n)||0))},ip=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Dn(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),np(t),i._dirty||Io(i,t)),t},jb=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Vd(t.rawTime(),e),(!e._dur||_f(0,e.totalDuration(),i)-e._tTime>_n)&&e.render(i,!0)),Io(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-_n}},ma=function(t,e,i,a){return e.parent&&Qs(e),e._start=Dn((os(i)?i:i||t!==Ln?Vr(t,i,e):t._time)+e._delay),e._end=Dn(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),qb(t,e,"_first","_last",t._sort?"_start":0),s_(e)||(t._recent=e),a||jb(t,e),t._ts<0&&ip(t,t._tTime),t},Zb=function(t,e){return(Rr.ScrollTrigger||$_("scrollTrigger",e))&&Rr.ScrollTrigger.create(e,t)},Kb=function(t,e,i,a,l){if(av(t,e,l),!t._initted)return 1;if(!i&&t._pt&&!vi&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Vb!==Er.frame)return js.push(t),t._lazy=[l,a],1},sU=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},s_=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},oU=function(t,e,i,a){var l=t.ratio,u=e<0||!e&&(!t._start&&sU(t)&&!(!t._initted&&s_(t))||(t._ts<0||t._dp._ts<0)&&!s_(t))?0:1,f=t._rDelay,d=0,h,m,v;if(f&&t._repeat&&(d=_f(0,t._tDur,e),m=xc(d,f),t._yoyo&&m&1&&(u=1-u),m!==xc(t._tTime,f)&&(l=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==l||vi||a||t._zTime===_n||!e&&t._zTime){if(!t._initted&&Kb(t,e,a,i,d))return;for(v=t._zTime,t._zTime=e||(i?_n:0),i||(i=e&&!v),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=d,h=t._pt;h;)h.r(u,h.d),h=h._next;e<0&&a_(t,e,i,!0),t._onUpdate&&!i&&Ar(t,"onUpdate"),d&&t._repeat&&!i&&t.parent&&Ar(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&Qs(t,1),!i&&!vi&&(Ar(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},lU=function(t,e,i){var a;if(i>e)for(a=t._first;a&&a._start<=i;){if(a.data==="isPause"&&a._start>e)return a;a=a._next}else for(a=t._last;a&&a._start>=i;){if(a.data==="isPause"&&a._start<e)return a;a=a._prev}},yc=function(t,e,i,a){var l=t._repeat,u=Dn(e)||0,f=t._tTime/t._tDur;return f&&!a&&(t._time*=u/t._dur),t._dur=u,t._tDur=l?l<0?1e10:Dn(u*(l+1)+t._rDelay*l):u,f>0&&!a&&ip(t,t._tTime=t._tDur*f),t.parent&&np(t),i||Io(t.parent,t),t},g1=function(t){return t instanceof tr?Io(t):yc(t,t._dur)},cU={_start:0,endTime:af,totalDuration:af},Vr=function s(t,e,i){var a=t.labels,l=t._recent||cU,u=t.duration()>=qr?l.endTime(!1):t._dur,f,d,h;return fi(e)&&(isNaN(e)||e in a)?(d=e.charAt(0),h=e.substr(-1)==="%",f=e.indexOf("="),d==="<"||d===">"?(f>=0&&(e=e.replace(/=/,"")),(d==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(f<0?l:i).totalDuration()/100:1)):f<0?(e in a||(a[e]=u),a[e]):(d=parseFloat(e.charAt(f-1)+e.substr(f+1)),h&&i&&(d=d/100*(Di(i)?i[0]:i).totalDuration()),f>1?s(t,e.substr(0,f-1),i)+d:u+d)):e==null?u:+e},Hu=function(t,e,i){var a=os(e[1]),l=(a?2:1)+(t<2?0:1),u=e[l],f,d;if(a&&(u.duration=e[1]),u.parent=i,t){for(f=u,d=i;d&&!("immediateRender"in f);)f=d.vars.defaults||{},d=rr(d.vars.inherit)&&d.parent;u.immediateRender=rr(f.immediateRender),t<2?u.runBackwards=1:u.startAt=e[l-1]}return new Zn(e[0],u,e[l+1])},eo=function(t,e){return t||t===0?e(t):e},_f=function(t,e,i){return i<t?t:i>e?e:i},Ai=function(t,e){return!fi(t)||!(e=JL.exec(t))?"":e[1]},uU=function(t,e,i){return eo(i,function(a){return _f(t,e,a)})},o_=[].slice,Qb=function(t,e){return t&&wa(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&wa(t[0]))&&!t.nodeType&&t!==fa},fU=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(a){var l;return fi(a)&&!e||Qb(a,1)?(l=i).push.apply(l,jr(a)):i.push(a)})||i},jr=function(t,e,i){return wn&&!e&&wn.selector?wn.selector(t):fi(t)&&!i&&(i_||!Sc())?o_.call((e||J_).querySelectorAll(t),0):Di(t)?fU(t,i):Qb(t)?o_.call(t,0):t?[t]:[]},l_=function(t){return t=jr(t)[0]||rf("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return jr(e,i.querySelectorAll?i:i===t?rf("Invalid scope")||J_.createElement("div"):t)}},Jb=function(t){return t.sort(function(){return .5-Math.random()})},$b=function(t){if(Pn(t))return t;var e=wa(t)?t:{each:t},i=Ho(e.ease),a=e.from||0,l=parseFloat(e.base)||0,u={},f=a>0&&a<1,d=isNaN(a)||f,h=e.axis,m=a,v=a;return fi(a)?m=v={center:.5,edges:.5,end:1}[a]||0:!f&&d&&(m=a[0],v=a[1]),function(_,x,S){var b=(S||e).length,y=u[b],M,A,L,w,U,O,R,T,D;if(!y){if(D=e.grid==="auto"?0:(e.grid||[1,qr])[1],!D){for(R=-qr;R<(R=S[D++].getBoundingClientRect().left)&&D<b;);D<b&&D--}for(y=u[b]=[],M=d?Math.min(D,b)*m-.5:a%D,A=D===qr?0:d?b*v/D-.5:a/D|0,R=0,T=qr,O=0;O<b;O++)L=O%D-M,w=A-(O/D|0),y[O]=U=h?Math.abs(h==="y"?w:L):Pb(L*L+w*w),U>R&&(R=U),U<T&&(T=U);a==="random"&&Jb(y),y.max=R-T,y.min=T,y.v=b=(parseFloat(e.amount)||parseFloat(e.each)*(D>b?b-1:h?h==="y"?b/D:D:Math.max(D,b/D))||0)*(a==="edges"?-1:1),y.b=b<0?l-b:l,y.u=Ai(e.amount||e.each)||0,i=i&&b<0?EU(i):i}return b=(y[_]-y.min)/y.max||0,Dn(y.b+(i?i(b):b)*y.v)+y.u}},c_=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var a=Dn(Math.round(parseFloat(i)/t)*t*e);return(a-a%1)/e+(os(i)?0:Ai(i))}},tE=function(t,e){var i=Di(t),a,l;return!i&&wa(t)&&(a=i=t.radius||qr,t.values?(t=jr(t.values),(l=!os(t[0]))&&(a*=a)):t=c_(t.increment)),eo(e,i?Pn(t)?function(u){return l=t(u),Math.abs(l-u)<=a?l:u}:function(u){for(var f=parseFloat(l?u.x:u),d=parseFloat(l?u.y:0),h=qr,m=0,v=t.length,_,x;v--;)l?(_=t[v].x-f,x=t[v].y-d,_=_*_+x*x):_=Math.abs(t[v]-f),_<h&&(h=_,m=v);return m=!a||h<=a?t[m]:u,l||m===u||os(u)?m:m+Ai(u)}:c_(t))},eE=function(t,e,i,a){return eo(Di(t)?!e:i===!0?!!(i=0):!a,function(){return Di(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(a=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*a)/a})},hU=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(a){return e.reduce(function(l,u){return u(l)},a)}},dU=function(t,e){return function(i){return t(parseFloat(i))+(e||Ai(i))}},pU=function(t,e,i){return iE(t,e,0,1,i)},nE=function(t,e,i){return eo(i,function(a){return t[~~e(a)]})},mU=function s(t,e,i){var a=e-t;return Di(t)?nE(t,s(0,t.length),e):eo(i,function(l){return(a+(l-t)%a)%a+t})},gU=function s(t,e,i){var a=e-t,l=a*2;return Di(t)?nE(t,s(0,t.length-1),e):eo(i,function(u){return u=(l+(u-t)%l)%l||0,t+(u>a?l-u:u)})},sf=function(t){return t.replace(ZL,function(e){var i=e.indexOf("[")+1,a=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(KL);return eE(i?a:+a[0],i?0:+a[1],+a[2]||1e-5)})},iE=function(t,e,i,a,l){var u=e-t,f=a-i;return eo(l,function(d){return i+((d-t)/u*f||0)})},_U=function s(t,e,i,a){var l=isNaN(t+e)?0:function(x){return(1-x)*t+x*e};if(!l){var u=fi(t),f={},d,h,m,v,_;if(i===!0&&(a=1)&&(i=null),u)t={p:t},e={p:e};else if(Di(t)&&!Di(e)){for(m=[],v=t.length,_=v-2,h=1;h<v;h++)m.push(s(t[h-1],t[h]));v--,l=function(S){S*=v;var b=Math.min(_,~~S);return m[b](S-b)},i=e}else a||(t=vc(Di(t)?[]:{},t));if(!m){for(d in e)rv.call(f,t,d,"get",e[d]);l=function(S){return lv(S,f)||(u?t.p:t)}}}return eo(i,l)},_1=function(t,e,i){var a=t.labels,l=qr,u,f,d;for(u in a)f=a[u]-e,f<0==!!i&&f&&l>(f=Math.abs(f))&&(d=u,l=f);return d},Ar=function(t,e,i){var a=t.vars,l=a[e],u=wn,f=t._ctx,d,h,m;if(l)return d=a[e+"Params"],h=a.callbackScope||t,i&&js.length&&Hd(),f&&(wn=f),m=d?l.apply(h,d):l.call(h),wn=u,m},Uu=function(t){return Qs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!vi),t.progress()<1&&Ar(t,"onInterrupt"),t},tc,rE=[],aE=function(t){if(t)if(t=!t.name&&t.default||t,Q_()||t.headless){var e=t.name,i=Pn(t),a=e&&!i&&t.init?function(){this._props=[]}:t,l={init:af,render:lv,add:rv,kill:OU,modifier:NU,rawVars:0},u={targetTest:0,get:0,getSetter:ov,aliases:{},register:0};if(Sc(),t!==a){if(Mr[e])return;Dr(a,Dr(Gd(t,l),u)),vc(a.prototype,vc(l,Gd(t,u))),Mr[a.prop=e]=a,t.targetTest&&(Ed.push(a),tv[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Gb(e,a),t.register&&t.register(lr,a,sr)}else rE.push(t)},gn=255,Nu={aqua:[0,gn,gn],lime:[0,gn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gn],navy:[0,0,128],white:[gn,gn,gn],olive:[128,128,0],yellow:[gn,gn,0],orange:[gn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gn,0,0],pink:[gn,192,203],cyan:[0,gn,gn],transparent:[gn,gn,gn,0]},J0=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*gn+.5|0},sE=function(t,e,i){var a=t?os(t)?[t>>16,t>>8&gn,t&gn]:0:Nu.black,l,u,f,d,h,m,v,_,x,S;if(!a){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Nu[t])a=Nu[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),u=t.charAt(2),f=t.charAt(3),t="#"+l+l+u+u+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return a=parseInt(t.substr(1,6),16),[a>>16,a>>8&gn,a&gn,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),a=[t>>16,t>>8&gn,t&gn]}else if(t.substr(0,3)==="hsl"){if(a=S=t.match(h1),!e)d=+a[0]%360/360,h=+a[1]/100,m=+a[2]/100,u=m<=.5?m*(h+1):m+h-m*h,l=m*2-u,a.length>3&&(a[3]*=1),a[0]=J0(d+1/3,l,u),a[1]=J0(d,l,u),a[2]=J0(d-1/3,l,u);else if(~t.indexOf("="))return a=t.match(Fb),i&&a.length<4&&(a[3]=1),a}else a=t.match(h1)||Nu.transparent;a=a.map(Number)}return e&&!S&&(l=a[0]/gn,u=a[1]/gn,f=a[2]/gn,v=Math.max(l,u,f),_=Math.min(l,u,f),m=(v+_)/2,v===_?d=h=0:(x=v-_,h=m>.5?x/(2-v-_):x/(v+_),d=v===l?(u-f)/x+(u<f?6:0):v===u?(f-l)/x+2:(l-u)/x+4,d*=60),a[0]=~~(d+.5),a[1]=~~(h*100+.5),a[2]=~~(m*100+.5)),i&&a.length<4&&(a[3]=1),a},oE=function(t){var e=[],i=[],a=-1;return t.split(Zs).forEach(function(l){var u=l.match($l)||[];e.push.apply(e,u),i.push(a+=u.length+1)}),e.c=i,e},v1=function(t,e,i){var a="",l=(t+a).match(Zs),u=e?"hsla(":"rgba(",f=0,d,h,m,v;if(!l)return t;if(l=l.map(function(_){return(_=sE(_,e,1))&&u+(e?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),i&&(m=oE(t),d=i.c,d.join(a)!==m.c.join(a)))for(h=t.replace(Zs,"1").split($l),v=h.length-1;f<v;f++)a+=h[f]+(~d.indexOf(f)?l.shift()||u+"0,0,0,0)":(m.length?m:l.length?l:i).shift());if(!h)for(h=t.split(Zs),v=h.length-1;f<v;f++)a+=h[f]+l[f];return a+h[v]},Zs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Nu)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),vU=/hsl[a]?\(/,lE=function(t){var e=t.join(" "),i;if(Zs.lastIndex=0,Zs.test(e))return i=vU.test(e),t[1]=v1(t[1],i),t[0]=v1(t[0],i,oE(t[1])),!0},of,Er=(function(){var s=Date.now,t=500,e=33,i=s(),a=i,l=1e3/240,u=l,f=[],d,h,m,v,_,x,S=function b(y){var M=s()-a,A=y===!0,L,w,U,O;if((M>t||M<0)&&(i+=M-e),a+=M,U=a-i,L=U-u,(L>0||A)&&(O=++v.frame,_=U-v.time*1e3,v.time=U=U/1e3,u+=L+(L>=l?4:l-L),w=1),A||(d=h(b)),w)for(x=0;x<f.length;x++)f[x](U,_,O,y)};return v={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(y){return _/(1e3/(y||60))},wake:function(){Ib&&(!i_&&Q_()&&(fa=i_=window,J_=fa.document||{},Rr.gsap=lr,(fa.gsapVersions||(fa.gsapVersions=[])).push(lr.version),Hb(Id||fa.GreenSockGlobals||!fa.gsap&&fa||{}),rE.forEach(aE)),m=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&v.sleep(),h=m||function(y){return setTimeout(y,u-v.time*1e3+1|0)},of=1,S(2))},sleep:function(){(m?cancelAnimationFrame:clearTimeout)(d),of=0,h=af},lagSmoothing:function(y,M){t=y||1/0,e=Math.min(M||33,t)},fps:function(y){l=1e3/(y||240),u=v.time*1e3+l},add:function(y,M,A){var L=M?function(w,U,O,R){y(w,U,O,R),v.remove(L)}:y;return v.remove(y),f[A?"unshift":"push"](L),Sc(),L},remove:function(y,M){~(M=f.indexOf(y))&&f.splice(M,1)&&x>=M&&x--},_listeners:f},v})(),Sc=function(){return!of&&Er.wake()},qe={},xU=/^[\d.\-M][\d.\-,\s]/,yU=/["']/g,SU=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),a=i[0],l=1,u=i.length,f,d,h;l<u;l++)d=i[l],f=l!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,f),e[a]=isNaN(h)?h.replace(yU,"").trim():+h,a=d.substr(f+1).trim();return e},MU=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),a=t.indexOf("(",e);return t.substring(e,~a&&a<i?t.indexOf(")",i+1):i)},bU=function(t){var e=(t+"").split("("),i=qe[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[SU(e[1])]:MU(t).split(",").map(Wb)):qe._CE&&xU.test(t)?qe._CE("",t):i},EU=function(t){return function(e){return 1-t(1-e)}},Ho=function(t,e){return t&&(Pn(t)?t:qe[t]||bU(t))||e},Qo=function(t,e,i,a){i===void 0&&(i=function(d){return 1-e(1-d)}),a===void 0&&(a=function(d){return d<.5?e(d*2)/2:1-e((1-d)*2)/2});var l={easeIn:e,easeOut:i,easeInOut:a},u;return ar(t,function(f){qe[f]=Rr[f]=l,qe[u=f.toLowerCase()]=i;for(var d in l)qe[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=qe[f+"."+d]=l[d]}),l},cE=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},$0=function s(t,e,i){var a=e>=1?e:1,l=(i||(t?.3:.45))/(e<1?e:1),u=l/n_*(Math.asin(1/a)||0),f=function(m){return m===1?1:a*Math.pow(2,-10*m)*jL((m-u)*l)+1},d=t==="out"?f:t==="in"?function(h){return 1-f(1-h)}:cE(f);return l=n_/l,d.config=function(h,m){return s(t,h,m)},d},tg=function s(t,e){e===void 0&&(e=1.70158);var i=function(u){return u?--u*u*((e+1)*u+e)+1:0},a=t==="out"?i:t==="in"?function(l){return 1-i(1-l)}:cE(i);return a.config=function(l){return s(t,l)},a};ar("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Qo(s+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});qe.Linear.easeNone=qe.none=qe.Linear.easeIn;Qo("Elastic",$0("in"),$0("out"),$0());(function(s,t){var e=1/t,i=2*e,a=2.5*e,l=function(f){return f<e?s*f*f:f<i?s*Math.pow(f-1.5/t,2)+.75:f<a?s*(f-=2.25/t)*f+.9375:s*Math.pow(f-2.625/t,2)+.984375};Qo("Bounce",function(u){return 1-l(1-u)},l)})(7.5625,2.75);Qo("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Qo("Circ",function(s){return-(Pb(1-s*s)-1)});Qo("Sine",function(s){return s===1?1:-qL(s*WL)+1});Qo("Back",tg("in"),tg("out"),tg());qe.SteppedEase=qe.steps=Rr.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,a=t+(e?0:1),l=e?1:0,u=1-_n;return function(f){return((a*_f(0,u,f)|0)+l)*i}}};nf.ease=qe["quad.out"];ar("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return ev+=s+","+s+"Params,"});var uE=function(t,e){this.id=YL++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:kb,this.set=e?e.getSetter:ov},lf=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,yc(this,+e.duration,1,1),this.data=e.data,wn&&(this._ctx=wn,wn.data.push(this)),of||Er.wake()}var t=s.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,yc(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,a){if(Sc(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(ip(this,i),!l._dp||l.parent||jb(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ma(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!a||this._initted&&Math.abs(this._zTime)===_n||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Xb(this,i,a)),this},t.time=function(i,a){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+m1(this))%(this._dur+this._rDelay)||(i?this._dur:0),a):this._time},t.totalProgress=function(i,a){return arguments.length?this.totalTime(this.totalDuration()*i,a):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+m1(this),a):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,a){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,a):this._repeat?xc(this._tTime,l)+1:1},t.timeScale=function(i,a){if(!arguments.length)return this._rts===-_n?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Vd(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-_n?0:this._rts,this.totalTime(_f(-Math.abs(this._delay),this.totalDuration(),l),a!==!1),np(this),rU(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Sc(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_n&&(this._tTime-=_n)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Dn(i);var a=this.parent||this._dp;return a&&(a._sort||!this.parent)&&ma(a,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(rr(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var a=this.parent||this._dp;return a?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vd(a.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=tU);var a=vi;return vi=i,iv(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),vi=a,this},t.globalTime=function(i){for(var a=this,l=arguments.length?i:a.rawTime();a;)l=a._start+l/(Math.abs(a._ts)||1),a=a._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,g1(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var a=this._time;return this._rDelay=i,g1(this),a?this.time(a):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,a){return this.totalTime(Vr(this,i),rr(a))},t.restart=function(i,a){return this.play().totalTime(i?-this._delay:0,rr(a)),this._dur||(this._zTime=-_n),this},t.play=function(i,a){return i!=null&&this.seek(i,a),this.reversed(!1).paused(!1)},t.reverse=function(i,a){return i!=null&&this.seek(i||this.totalDuration(),a),this.reversed(!0).paused(!1)},t.pause=function(i,a){return i!=null&&this.seek(i,a),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-_n:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-_n,this},t.isActive=function(){var i=this.parent||this._dp,a=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=a&&l<this.endTime(!0)-_n)},t.eventCallback=function(i,a,l){var u=this.vars;return arguments.length>1?(a?(u[i]=a,l&&(u[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=a)):delete u[i],this):u[i]},t.then=function(i){var a=this,l=a._prom;return new Promise(function(u){var f=Pn(i)?i:Yb,d=function(){var m=a.then;a.then=null,l&&l(),Pn(f)&&(f=f(a))&&(f.then||f===a)&&(a.then=m),u(f),a.then=m};a._initted&&a.totalProgress()===1&&a._ts>=0||!a._tTime&&a._ts<0?d():a._prom=d})},t.kill=function(){Uu(this)},s})();Dr(lf.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_n,_prom:0,_ps:!1,_rts:1});var tr=(function(s){Ob(t,s);function t(i,a){var l;return i===void 0&&(i={}),l=s.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=rr(i.sortChildren),Ln&&ma(i.parent||Ln,Ja(l),a),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&Zb(Ja(l),i.scrollTrigger),l}var e=t.prototype;return e.to=function(a,l,u){return Hu(0,arguments,this),this},e.from=function(a,l,u){return Hu(1,arguments,this),this},e.fromTo=function(a,l,u,f){return Hu(2,arguments,this),this},e.set=function(a,l,u){return l.duration=0,l.parent=this,Iu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Zn(a,l,Vr(this,u),1),this},e.call=function(a,l,u){return ma(this,Zn.delayedCall(0,a,l),u)},e.staggerTo=function(a,l,u,f,d,h,m){return u.duration=l,u.stagger=u.stagger||f,u.onComplete=h,u.onCompleteParams=m,u.parent=this,new Zn(a,u,Vr(this,d)),this},e.staggerFrom=function(a,l,u,f,d,h,m){return u.runBackwards=1,Iu(u).immediateRender=rr(u.immediateRender),this.staggerTo(a,l,u,f,d,h,m)},e.staggerFromTo=function(a,l,u,f,d,h,m,v){return f.startAt=u,Iu(f).immediateRender=rr(f.immediateRender),this.staggerTo(a,l,f,d,h,m,v)},e.render=function(a,l,u){var f=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,m=a<=0?0:Dn(a),v=this._zTime<0!=a<0&&(this._initted||!h),_,x,S,b,y,M,A,L,w,U,O,R;if(this!==Ln&&m>d&&a>=0&&(m=d),m!==this._tTime||u||v){if(f!==this._time&&h&&(m+=this._time-f,a+=this._time-f),_=m,w=this._start,L=this._ts,M=!L,v&&(h||(f=this._zTime),(a||!l)&&(this._zTime=a)),this._repeat){if(O=this._yoyo,y=h+this._rDelay,this._repeat<-1&&a<0)return this.totalTime(y*100+a,l,u);if(_=Dn(m%y),m===d?(b=this._repeat,_=h):(U=Dn(m/y),b=~~U,b&&b===U&&(_=h,b--),_>h&&(_=h)),U=xc(this._tTime,y),!f&&this._tTime&&U!==b&&this._tTime-U*y-this._dur<=0&&(U=b),O&&b&1&&(_=h-_,R=1),b!==U&&!this._lock){var T=O&&U&1,D=T===(O&&b&1);if(b<U&&(T=!T),f=T?0:m%h?h:m,this._lock=1,this.render(f||(R?0:Dn(b*y)),l,!h)._lock=0,this._tTime=m,!l&&this.parent&&Ar(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,U=b),f&&f!==this._time||M!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,D&&(this._lock=2,f=T?h:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!M)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=lU(this,Dn(f),Dn(_)),A&&(m-=_-(_=A._start))),this._tTime=m,this._time=_,this._act=!!L,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=a,f=0),!f&&m&&h&&!l&&!U&&(Ar(this,"onStart"),this._tTime!==m))return this;if(_>=f&&a>=0)for(x=this._first;x;){if(S=x._next,(x._act||_>=x._start)&&x._ts&&A!==x){if(x.parent!==this)return this.render(a,l,u);if(x.render(x._ts>0?(_-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(_-x._start)*x._ts,l,u),_!==this._time||!this._ts&&!M){A=0,S&&(m+=this._zTime=-_n);break}}x=S}else{x=this._last;for(var k=a<0?a:_;x;){if(S=x._prev,(x._act||k<=x._end)&&x._ts&&A!==x){if(x.parent!==this)return this.render(a,l,u);if(x.render(x._ts>0?(k-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(k-x._start)*x._ts,l,u||vi&&iv(x)),_!==this._time||!this._ts&&!M){A=0,S&&(m+=this._zTime=k?-_n:_n);break}}x=S}}if(A&&!l&&(this.pause(),A.render(_>=f?0:-_n)._zTime=_>=f?1:-1,this._ts))return this._start=w,np(this),this.render(a,l,u);this._onUpdate&&!l&&Ar(this,"onUpdate",!0),(m===d&&this._tTime>=this.totalDuration()||!m&&f)&&(w===this._start||Math.abs(L)!==Math.abs(this._ts))&&(this._lock||((a||!h)&&(m===d&&this._ts>0||!m&&this._ts<0)&&Qs(this,1),!l&&!(a<0&&!f)&&(m||f||!d)&&(Ar(this,m===d&&a>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(m<d&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(a,l){var u=this;if(os(l)||(l=Vr(this,l,a)),!(a instanceof lf)){if(Di(a))return a.forEach(function(f){return u.add(f,l)}),this;if(fi(a))return this.addLabel(a,l);if(Pn(a))a=Zn.delayedCall(0,a);else return this}return this!==a?ma(this,a,l):this},e.getChildren=function(a,l,u,f){a===void 0&&(a=!0),l===void 0&&(l=!0),u===void 0&&(u=!0),f===void 0&&(f=-qr);for(var d=[],h=this._first;h;)h._start>=f&&(h instanceof Zn?l&&d.push(h):(u&&d.push(h),a&&d.push.apply(d,h.getChildren(!0,l,u)))),h=h._next;return d},e.getById=function(a){for(var l=this.getChildren(1,1,1),u=l.length;u--;)if(l[u].vars.id===a)return l[u]},e.remove=function(a){return fi(a)?this.removeLabel(a):Pn(a)?this.killTweensOf(a):(a.parent===this&&ep(this,a),a===this._recent&&(this._recent=this._last),Io(this))},e.totalTime=function(a,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dn(Er.time-(this._ts>0?a/this._ts:(this.totalDuration()-a)/-this._ts))),s.prototype.totalTime.call(this,a,l),this._forcing=0,this):this._tTime},e.addLabel=function(a,l){return this.labels[a]=Vr(this,l),this},e.removeLabel=function(a){return delete this.labels[a],this},e.addPause=function(a,l,u){var f=Zn.delayedCall(0,l||af,u);return f.data="isPause",this._hasPause=1,ma(this,f,Vr(this,a))},e.removePause=function(a){var l=this._first;for(a=Vr(this,a);l;)l._start===a&&l.data==="isPause"&&Qs(l),l=l._next},e.killTweensOf=function(a,l,u){for(var f=this.getTweensOf(a,u),d=f.length;d--;)ks!==f[d]&&f[d].kill(a,l);return this},e.getTweensOf=function(a,l){for(var u=[],f=jr(a),d=this._first,h=os(l),m;d;)d instanceof Zn?eU(d._targets,f)&&(h?(!ks||d._initted&&d._ts)&&d.globalTime(0)<=l&&d.globalTime(d.totalDuration())>l:!l||d.isActive())&&u.push(d):(m=d.getTweensOf(f,l)).length&&u.push.apply(u,m),d=d._next;return u},e.tweenTo=function(a,l){l=l||{};var u=this,f=Vr(u,a),d=l,h=d.startAt,m=d.onStart,v=d.onStartParams,_=d.immediateRender,x,S=Zn.to(u,Dr({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(h&&"time"in h?h.time:u._time))/u.timeScale())||_n,onStart:function(){if(u.pause(),!x){var y=l.duration||Math.abs((f-(h&&"time"in h?h.time:u._time))/u.timeScale());S._dur!==y&&yc(S,y,0,1).render(S._time,!0,!0),x=1}m&&m.apply(S,v||[])}},l));return _?S.render(0):S},e.tweenFromTo=function(a,l,u){return this.tweenTo(l,Dr({startAt:{time:Vr(this,a)}},u))},e.recent=function(){return this._recent},e.nextLabel=function(a){return a===void 0&&(a=this._time),_1(this,Vr(this,a))},e.previousLabel=function(a){return a===void 0&&(a=this._time),_1(this,Vr(this,a),1)},e.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.previousLabel(this._time+_n)},e.shiftChildren=function(a,l,u){u===void 0&&(u=0);var f=this._first,d=this.labels,h;for(a=Dn(a);f;)f._start>=u&&(f._start+=a,f._end+=a),f=f._next;if(l)for(h in d)d[h]>=u&&(d[h]+=a);return Io(this)},e.invalidate=function(a){var l=this._first;for(this._lock=0;l;)l.invalidate(a),l=l._next;return s.prototype.invalidate.call(this,a)},e.clear=function(a){a===void 0&&(a=!0);for(var l=this._first,u;l;)u=l._next,this.remove(l),l=u;return this._dp&&(this._time=this._tTime=this._pTime=0),a&&(this.labels={}),Io(this)},e.totalDuration=function(a){var l=0,u=this,f=u._last,d=qr,h,m,v;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-a:a));if(u._dirty){for(v=u.parent;f;)h=f._prev,f._dirty&&f.totalDuration(),m=f._start,m>d&&u._sort&&f._ts&&!u._lock?(u._lock=1,ma(u,f,m-f._delay,1)._lock=0):d=m,m<0&&f._ts&&(l-=m,(!v&&!u._dp||v&&v.smoothChildTiming)&&(u._start+=Dn(m/u._ts),u._time-=m,u._tTime-=m),u.shiftChildren(-m,!1,-1/0),d=0),f._end>l&&f._ts&&(l=f._end),f=h;yc(u,u===Ln&&u._time>l?u._time:l,1,1),u._dirty=0}return u._tDur},t.updateRoot=function(a){if(Ln._ts&&(Xb(Ln,Vd(a,Ln)),Vb=Er.frame),Er.frame>=d1){d1+=Cr.autoSleep||120;var l=Ln._first;if((!l||!l._ts)&&Cr.autoSleep&&Er._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Er.sleep()}}},t})(lf);Dr(tr.prototype,{_lock:0,_hasPause:0,_forcing:0});var TU=function(t,e,i,a,l,u,f){var d=new sr(this._pt,t,e,0,1,gE,null,l),h=0,m=0,v,_,x,S,b,y,M,A;for(d.b=i,d.e=a,i+="",a+="",(M=~a.indexOf("random("))&&(a=sf(a)),u&&(A=[i,a],u(A,t,e),i=A[0],a=A[1]),_=i.match(K0)||[];v=K0.exec(a);)S=v[0],b=a.substring(h,v.index),x?x=(x+1)%5:b.substr(-5)==="rgba("&&(x=1),S!==_[m++]&&(y=parseFloat(_[m-1])||0,d._pt={_next:d._pt,p:b||m===1?b:",",s:y,c:S.charAt(1)==="="?rc(y,S)-y:parseFloat(S)-y,m:x&&x<4?Math.round:0},h=K0.lastIndex);return d.c=h<a.length?a.substring(h,a.length):"",d.fp=f,(Bb.test(a)||M)&&(d.e=0),this._pt=d,d},rv=function(t,e,i,a,l,u,f,d,h,m){Pn(a)&&(a=a(l||0,t,u));var v=t[e],_=i!=="get"?i:Pn(v)?h?t[e.indexOf("set")||!Pn(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():v,x=Pn(v)?h?DU:pE:sv,S;if(fi(a)&&(~a.indexOf("random(")&&(a=sf(a)),a.charAt(1)==="="&&(S=rc(_,a)+(Ai(_)||0),(S||S===0)&&(a=S))),!m||_!==a||u_)return!isNaN(_*a)&&a!==""?(S=new sr(this._pt,t,e,+_||0,a-(_||0),typeof v=="boolean"?UU:mE,0,x),h&&(S.fp=h),f&&S.modifier(f,this,t),this._pt=S):(!v&&!(e in t)&&$_(e,a),TU.call(this,t,e,_,a,x,d||Cr.stringFilter,h))},AU=function(t,e,i,a,l){if(Pn(t)&&(t=Gu(t,l,e,i,a)),!wa(t)||t.style&&t.nodeType||Di(t)||zb(t))return fi(t)?Gu(t,l,e,i,a):t;var u={},f;for(f in t)u[f]=Gu(t[f],l,e,i,a);return u},fE=function(t,e,i,a,l,u){var f,d,h,m;if(Mr[t]&&(f=new Mr[t]).init(l,f.rawVars?e[t]:AU(e[t],a,l,u,i),i,a,u)!==!1&&(i._pt=d=new sr(i._pt,l,t,0,1,f.render,f,0,f.priority),i!==tc))for(h=i._ptLookup[i._targets.indexOf(l)],m=f._props.length;m--;)h[f._props[m]]=d;return f},ks,u_,av=function s(t,e,i){var a=t.vars,l=a.ease,u=a.startAt,f=a.immediateRender,d=a.lazy,h=a.onUpdate,m=a.runBackwards,v=a.yoyoEase,_=a.keyframes,x=a.autoRevert,S=t._dur,b=t._startAt,y=t._targets,M=t.parent,A=M&&M.data==="nested"?M.vars.targets:y,L=t._overwrite==="auto"&&!Z_,w=t.timeline,U=a.easeReverse||v,O,R,T,D,k,I,V,$,Z,Y,z,B,tt;if(w&&(!_||!l)&&(l="none"),t._ease=Ho(l,nf.ease),t._rEase=U&&(Ho(U)||t._ease),t._from=!w&&!!a.runBackwards,t._from&&(t.ratio=1),!w||_&&!a.stagger){if($=y[0]?Bo(y[0]).harness:0,B=$&&a[$.prop],O=Gd(a,tv),b&&(b._zTime<0&&b.progress(1),e<0&&m&&f&&!x?b.render(-1,!0):b.revert(m&&S?bd:$L),b._lazy=0),u){if(Qs(t._startAt=Zn.set(y,Dr({data:"isStart",overwrite:!1,parent:M,immediateRender:!0,lazy:!b&&rr(d),startAt:null,delay:0,onUpdate:h&&function(){return Ar(t,"onUpdate")},stagger:0},u))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(vi||!f&&!x)&&t._startAt.revert(bd),f&&S&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(m&&S&&!b){if(e&&(f=!1),T=Dr({overwrite:!1,data:"isFromStart",lazy:f&&!b&&rr(d),immediateRender:f,stagger:0,parent:M},O),B&&(T[$.prop]=B),Qs(t._startAt=Zn.set(y,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(vi?t._startAt.revert(bd):t._startAt.render(-1,!0)),t._zTime=e,!f)s(t._startAt,_n,_n);else if(!e)return}for(t._pt=t._ptCache=0,d=S&&rr(d)||d&&!S,R=0;R<y.length;R++){if(k=y[R],V=k._gsap||nv(y)[R]._gsap,t._ptLookup[R]=Y={},r_[V.id]&&js.length&&Hd(),z=A===y?R:A.indexOf(k),$&&(Z=new $).init(k,B||O,t,z,A)!==!1&&(t._pt=D=new sr(t._pt,k,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(rt){Y[rt]=D}),Z.priority&&(I=1)),!$||B)for(T in O)Mr[T]&&(Z=fE(T,O,t,z,k,A))?Z.priority&&(I=1):Y[T]=D=rv.call(t,k,T,"get",O[T],z,A,0,a.stringFilter);t._op&&t._op[R]&&t.kill(k,t._op[R]),L&&t._pt&&(ks=t,Ln.killTweensOf(k,Y,t.globalTime(e)),tt=!t.parent,ks=0),t._pt&&d&&(r_[V.id]=1)}I&&_E(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!tt,_&&e<=0&&w.render(qr,!0,!0)},wU=function(t,e,i,a,l,u,f,d){var h=(t._pt&&t._ptCache||(t._ptCache={}))[e],m,v,_,x;if(!h)for(h=t._ptCache[e]=[],_=t._ptLookup,x=t._targets.length;x--;){if(m=_[x][e],m&&m.d&&m.d._pt)for(m=m.d._pt;m&&m.p!==e&&m.fp!==e;)m=m._next;if(!m)return u_=1,t.vars[e]="+=0",av(t,f),u_=0,d?rf(e+" not eligible for reset. Try splitting into individual properties"):1;h.push(m)}for(x=h.length;x--;)v=h[x],m=v._pt||v,m.s=(a||a===0)&&!l?a:m.s+(a||0)+u*m.c,m.c=i-m.s,v.e&&(v.e=Bn(i)+Ai(v.e)),v.b&&(v.b=m.s+Ai(v.b))},CU=function(t,e){var i=t[0]?Bo(t[0]).harness:0,a=i&&i.aliases,l,u,f,d;if(!a)return e;l=vc({},e);for(u in a)if(u in l)for(d=a[u].split(","),f=d.length;f--;)l[d[f]]=l[u];return l},RU=function(t,e,i,a){var l=e.ease||a||"power1.inOut",u,f;if(Di(e))f=i[t]||(i[t]=[]),e.forEach(function(d,h){return f.push({t:h/(e.length-1)*100,v:d,e:l})});else for(u in e)f=i[u]||(i[u]=[]),u==="ease"||f.push({t:parseFloat(t),v:e[u],e:l})},Gu=function(t,e,i,a,l){return Pn(t)?t.call(e,i,a,l):fi(t)&&~t.indexOf("random(")?sf(t):t},hE=ev+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",dE={};ar(hE+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return dE[s]=1});var Zn=(function(s){Ob(t,s);function t(i,a,l,u){var f;typeof a=="number"&&(l.duration=a,a=l,l=null),f=s.call(this,u?a:Iu(a))||this;var d=f.vars,h=d.duration,m=d.delay,v=d.immediateRender,_=d.stagger,x=d.overwrite,S=d.keyframes,b=d.defaults,y=d.scrollTrigger,M=a.parent||Ln,A=(Di(i)||zb(i)?os(i[0]):"length"in a)?[i]:jr(i),L,w,U,O,R,T,D,k;if(f._targets=A.length?nv(A):rf("GSAP target "+i+" not found. https://gsap.com",!Cr.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,S||_||ed(h)||ed(m)){a=f.vars;var I=a.easeReverse||a.yoyoEase;if(L=f.timeline=new tr({data:"nested",defaults:b||{},targets:M&&M.data==="nested"?M.vars.targets:A}),L.kill(),L.parent=L._dp=Ja(f),L._start=0,_||ed(h)||ed(m)){if(O=A.length,D=_&&$b(_),wa(_))for(R in _)~hE.indexOf(R)&&(k||(k={}),k[R]=_[R]);for(w=0;w<O;w++)U=Gd(a,dE),U.stagger=0,I&&(U.easeReverse=I),k&&vc(U,k),T=A[w],U.duration=+Gu(h,Ja(f),w,T,A),U.delay=(+Gu(m,Ja(f),w,T,A)||0)-f._delay,!_&&O===1&&U.delay&&(f._delay=m=U.delay,f._start+=m,U.delay=0),L.to(T,U,D?D(w,T,A):0),L._ease=qe.none;L.duration()?h=m=0:f.timeline=0}else if(S){Iu(Dr(L.vars.defaults,{ease:"none"})),L._ease=Ho(S.ease||a.ease||"none");var V=0,$,Z,Y;if(Di(S))S.forEach(function(z){return L.to(A,z,">")}),L.duration();else{U={};for(R in S)R==="ease"||R==="easeEach"||RU(R,S[R],U,S.easeEach);for(R in U)for($=U[R].sort(function(z,B){return z.t-B.t}),V=0,w=0;w<$.length;w++)Z=$[w],Y={ease:Z.e,duration:(Z.t-(w?$[w-1].t:0))/100*h},Y[R]=Z.v,L.to(A,Y,V),V+=Y.duration;L.duration()<h&&L.to({},{duration:h-L.duration()})}}h||f.duration(h=L.duration())}else f.timeline=0;return x===!0&&!Z_&&(ks=Ja(f),Ln.killTweensOf(A),ks=0),ma(M,Ja(f),l),a.reversed&&f.reverse(),a.paused&&f.paused(!0),(v||!h&&!S&&f._start===Dn(M._time)&&rr(v)&&aU(Ja(f))&&M.data!=="nested")&&(f._tTime=-_n,f.render(Math.max(0,-m)||0)),y&&Zb(Ja(f),y),f}var e=t.prototype;return e.render=function(a,l,u){var f=this._time,d=this._tDur,h=this._dur,m=a<0,v=a>d-_n&&!m?d:a<_n?0:a,_,x,S,b,y,M,A,L;if(!h)oU(this,a,l,u);else if(v!==this._tTime||!a||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m||this._lazy){if(_=v,L=this.timeline,this._repeat){if(b=h+this._rDelay,this._repeat<-1&&m)return this.totalTime(b*100+a,l,u);if(_=Dn(v%b),v===d?(S=this._repeat,_=h):(y=Dn(v/b),S=~~y,S&&S===y?(_=h,S--):_>h&&(_=h)),M=this._yoyo&&S&1,M&&(_=h-_),y=xc(this._tTime,b),_===f&&!u&&this._initted&&S===y)return this._tTime=v,this;S!==y&&this.vars.repeatRefresh&&!M&&!this._lock&&_!==b&&this._initted&&(this._lock=u=1,this.render(Dn(b*S),!0).invalidate()._lock=0)}if(!this._initted){if(Kb(this,m?a:_,u,l,v))return this._tTime=0,this;if(f!==this._time&&!(u&&this.vars.repeatRefresh&&S!==y))return this;if(h!==this._dur)return this.render(a,l,u)}if(this._rEase){var w=_<f;if(w!==this._inv){var U=w?f:h-f;this._inv=w,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=U?(w?-1:1)/U:0,this._invScale=w?-this.ratio:1-this.ratio,this._invEase=w?this._rEase:this._ease}this.ratio=A=this._invRatio+this._invScale*this._invEase((_-this._invTime)*this._invRecip)}else this.ratio=A=this._ease(_/h);if(this._from&&(this.ratio=A=1-A),this._tTime=v,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&v&&!l&&!y&&(Ar(this,"onStart"),this._tTime!==v))return this;for(x=this._pt;x;)x.r(A,x.d),x=x._next;L&&L.render(a<0?a:L._dur*L._ease(_/this._dur),l,u)||this._startAt&&(this._zTime=a),this._onUpdate&&!l&&(m&&a_(this,a,l,u),Ar(this,"onUpdate")),this._repeat&&S!==y&&this.vars.onRepeat&&!l&&this.parent&&Ar(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(m&&!this._onUpdate&&a_(this,a,!0,!0),(a||!h)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&Qs(this,1),!l&&!(m&&!f)&&(v||f||M)&&(Ar(this,v===d?"onComplete":"onReverseComplete",!0),this._prom&&!(v<d&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(a){return(!a||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(a),s.prototype.invalidate.call(this,a)},e.resetTo=function(a,l,u,f,d){of||Er.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),m;return this._initted||av(this,h),m=this._ease(h/this._dur),wU(this,a,l,u,f,m,h,d)?this.resetTo(a,l,u,f,1):(ip(this,0),this.parent||qb(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(a,l){if(l===void 0&&(l="all"),!a&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Uu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vi),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(a,l,ks&&ks.vars.overwrite!==!0)._first||Uu(this),this.parent&&u!==this.timeline.totalDuration()&&yc(this,this._dur*this.timeline._tDur/u,0,1),this}var f=this._targets,d=a?jr(a):f,h=this._ptLookup,m=this._pt,v,_,x,S,b,y,M;if((!l||l==="all")&&iU(f,d))return l==="all"&&(this._pt=0),Uu(this);for(v=this._op=this._op||[],l!=="all"&&(fi(l)&&(b={},ar(l,function(A){return b[A]=1}),l=b),l=CU(f,l)),M=f.length;M--;)if(~d.indexOf(f[M])){_=h[M],l==="all"?(v[M]=l,S=_,x={}):(x=v[M]=v[M]||{},S=l);for(b in S)y=_&&_[b],y&&((!("kill"in y.d)||y.d.kill(b)===!0)&&ep(this,y,"_pt"),delete _[b]),x!=="all"&&(x[b]=1)}return this._initted&&!this._pt&&m&&Uu(this),this},t.to=function(a,l){return new t(a,l,arguments[2])},t.from=function(a,l){return Hu(1,arguments)},t.delayedCall=function(a,l,u,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:a,onComplete:l,onReverseComplete:l,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:f})},t.fromTo=function(a,l,u){return Hu(2,arguments)},t.set=function(a,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(a,l)},t.killTweensOf=function(a,l,u){return Ln.killTweensOf(a,l,u)},t})(lf);Dr(Zn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ar("staggerTo,staggerFrom,staggerFromTo",function(s){Zn[s]=function(){var t=new tr,e=o_.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var sv=function(t,e,i){return t[e]=i},pE=function(t,e,i){return t[e](i)},DU=function(t,e,i,a){return t[e](a.fp,i)},LU=function(t,e,i){return t.setAttribute(e,i)},ov=function(t,e){return Pn(t[e])?pE:K_(t[e])&&t.setAttribute?LU:sv},mE=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},UU=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},gE=function(t,e){var i=e._pt,a="";if(!t&&e.b)a=e.b;else if(t===1&&e.e)a=e.e;else{for(;i;)a=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+a,i=i._next;a+=e.c}e.set(e.t,e.p,a,e)},lv=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},NU=function(t,e,i,a){for(var l=this._pt,u;l;)u=l._next,l.p===a&&l.modifier(t,e,i),l=u},OU=function(t){for(var e=this._pt,i,a;e;)a=e._next,e.p===t&&!e.op||e.op===t?ep(this,e,"_pt"):e.dep||(i=1),e=a;return!i},PU=function(t,e,i,a){a.mSet(t,e,a.m.call(a.tween,i,a.mt),a)},_E=function(t){for(var e=t._pt,i,a,l,u;e;){for(i=e._next,a=l;a&&a.pr>e.pr;)a=a._next;(e._prev=a?a._prev:u)?e._prev._next=e:l=e,(e._next=a)?a._prev=e:u=e,e=i}t._pt=l},sr=(function(){function s(e,i,a,l,u,f,d,h,m){this.t=i,this.s=l,this.c=u,this.p=a,this.r=f||mE,this.d=d||this,this.set=h||sv,this.pr=m||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(i,a,l){this.mSet=this.mSet||this.set,this.set=PU,this.m=i,this.mt=l,this.tween=a},s})();ar(ev+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return tv[s]=1});Rr.TweenMax=Rr.TweenLite=Zn;Rr.TimelineLite=Rr.TimelineMax=tr;Ln=new tr({sortChildren:!1,defaults:nf,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Cr.stringFilter=lE;var Go=[],Td={},zU=[],x1=0,FU=0,eg=function(t){return(Td[t]||zU).map(function(e){return e()})},f_=function(){var t=Date.now(),e=[];t-x1>2&&(eg("matchMediaInit"),Go.forEach(function(i){var a=i.queries,l=i.conditions,u,f,d,h;for(f in a)u=fa.matchMedia(a[f]).matches,u&&(d=1),u!==l[f]&&(l[f]=u,h=1);h&&(i.revert(),d&&e.push(i))}),eg("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(a){return i.add(null,a)})}),x1=t,eg("matchMedia"))},vE=(function(){function s(e,i){this.selector=i&&l_(i),this.data=[],this._r=[],this.isReverted=!1,this.id=FU++,e&&this.add(e)}var t=s.prototype;return t.add=function(i,a,l){Pn(i)&&(l=a,a=i,i=Pn);var u=this,f=function(){var h=wn,m=u.selector,v;return h&&h!==u&&h.data.push(u),l&&(u.selector=l_(l)),wn=u,v=a.apply(u,arguments),Pn(v)&&u._r.push(v),wn=h,u.selector=m,u.isReverted=!1,v};return u.last=f,i===Pn?f(u,function(d){return u.add(null,d)}):i?u[i]=f:f},t.ignore=function(i){var a=wn;wn=null,i(this),wn=a},t.getTweens=function(){var i=[];return this.data.forEach(function(a){return a instanceof s?i.push.apply(i,a.getTweens()):a instanceof Zn&&!(a.parent&&a.parent.data==="nested")&&i.push(a)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,a){var l=this;if(i?(function(){for(var f=l.getTweens(),d=l.data.length,h;d--;)h=l.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(m){return f.splice(f.indexOf(m),1)}));for(f.map(function(m){return{g:m._dur||m._delay||m._sat&&!m._sat.vars.immediateRender?m.globalTime(0):-1/0,t:m}}).sort(function(m,v){return v.g-m.g||-1/0}).forEach(function(m){return m.t.revert(i)}),d=l.data.length;d--;)h=l.data[d],h instanceof tr?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof Zn)&&h.revert&&h.revert(i);l._r.forEach(function(m){return m(i,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),a)for(var u=Go.length;u--;)Go[u].id===this.id&&Go.splice(u,1)},t.revert=function(i){this.kill(i||{})},s})(),BU=(function(){function s(e){this.contexts=[],this.scope=e,wn&&wn.data.push(this)}var t=s.prototype;return t.add=function(i,a,l){wa(i)||(i={matches:i});var u=new vE(0,l||this.scope),f=u.conditions={},d,h,m;wn&&!u.selector&&(u.selector=wn.selector),this.contexts.push(u),a=u.add("onMatch",a),u.queries=i;for(h in i)h==="all"?m=1:(d=fa.matchMedia(i[h]),d&&(Go.indexOf(u)<0&&Go.push(u),(f[h]=d.matches)&&(m=1),d.addListener?d.addListener(f_):d.addEventListener("change",f_)));return m&&a(u,function(v){return u.add(null,v)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(a){return a.kill(i,!0)})},s})(),kd={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(a){return aE(a)})},timeline:function(t){return new tr(t)},getTweensOf:function(t,e){return Ln.getTweensOf(t,e)},getProperty:function(t,e,i,a){fi(t)&&(t=jr(t)[0]);var l=Bo(t||{}).get,u=i?Yb:Wb;return i==="native"&&(i=""),t&&(e?u((Mr[e]&&Mr[e].get||l)(t,e,i,a)):function(f,d,h){return u((Mr[f]&&Mr[f].get||l)(t,f,d,h))})},quickSetter:function(t,e,i){if(t=jr(t),t.length>1){var a=t.map(function(m){return lr.quickSetter(m,e,i)}),l=a.length;return function(m){for(var v=l;v--;)a[v](m)}}t=t[0]||{};var u=Mr[e],f=Bo(t),d=f.harness&&(f.harness.aliases||{})[e]||e,h=u?function(m){var v=new u;tc._pt=0,v.init(t,i?m+i:m,tc,0,[t]),v.render(1,v),tc._pt&&lv(1,tc)}:f.set(t,d);return u?h:function(m){return h(t,d,i?m+i:m,f,1)}},quickTo:function(t,e,i){var a,l=lr.to(t,Dr((a={},a[e]="+=0.1",a.paused=!0,a.stagger=0,a),i||{})),u=function(d,h,m){return l.resetTo(e,d,h,m)};return u.tween=l,u},isTweening:function(t){return Ln.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ho(t.ease,nf.ease)),p1(nf,t||{})},config:function(t){return p1(Cr,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,a=t.plugins,l=t.defaults,u=t.extendTimeline;(a||"").split(",").forEach(function(f){return f&&!Mr[f]&&!Rr[f]&&rf(e+" effect requires "+f+" plugin.")}),Q0[e]=function(f,d,h){return i(jr(f),Dr(d||{},l),h)},u&&(tr.prototype[e]=function(f,d,h){return this.add(Q0[e](f,wa(d)?d:(h=d)&&{},this),h)})},registerEase:function(t,e){qe[t]=Ho(e)},parseEase:function(t,e){return arguments.length?Ho(t,e):qe},getById:function(t){return Ln.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new tr(t),a,l;for(i.smoothChildTiming=rr(t.smoothChildTiming),Ln.remove(i),i._dp=0,i._time=i._tTime=Ln._time,a=Ln._first;a;)l=a._next,(e||!(!a._dur&&a instanceof Zn&&a.vars.onComplete===a._targets[0]))&&ma(i,a,a._start-a._delay),a=l;return ma(Ln,i,0),i},context:function(t,e){return t?new vE(t,e):wn},matchMedia:function(t){return new BU(t)},matchMediaRefresh:function(){return Go.forEach(function(t){var e=t.conditions,i,a;for(a in e)e[a]&&(e[a]=!1,i=1);i&&t.revert()})||f_()},addEventListener:function(t,e){var i=Td[t]||(Td[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Td[t],a=i&&i.indexOf(e);a>=0&&i.splice(a,1)},utils:{wrap:mU,wrapYoyo:gU,distribute:$b,random:eE,snap:tE,normalize:pU,getUnit:Ai,clamp:uU,splitColor:sE,toArray:jr,selector:l_,mapRange:iE,pipe:hU,unitize:dU,interpolate:_U,shuffle:Jb},install:Hb,effects:Q0,ticker:Er,updateRoot:tr.updateRoot,plugins:Mr,globalTimeline:Ln,core:{PropTween:sr,globals:Gb,Tween:Zn,Timeline:tr,Animation:lf,getCache:Bo,_removeLinkedListItem:ep,reverting:function(){return vi},context:function(t){return t&&wn&&(wn.data.push(t),t._ctx=wn),wn},suppressOverwrites:function(t){return Z_=t}}};ar("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return kd[s]=Zn[s]});Er.add(tr.updateRoot);tc=kd.to({},{duration:0});var IU=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},HU=function(t,e){var i=t._targets,a,l,u;for(a in e)for(l=i.length;l--;)u=t._ptLookup[l][a],u&&(u=u.d)&&(u._pt&&(u=IU(u,a)),u&&u.modifier&&u.modifier(e[a],t,i[l],a))},ng=function(t,e){return{name:t,headless:1,rawVars:1,init:function(a,l,u){u._onInit=function(f){var d,h;if(fi(l)&&(d={},ar(l,function(m){return d[m]=1}),l=d),e){d={};for(h in l)d[h]=e(l[h]);l=d}HU(f,l)}}}},lr=kd.registerPlugin({name:"attr",init:function(t,e,i,a,l){var u,f,d;this.tween=i;for(u in e)d=t.getAttribute(u)||"",f=this.add(t,"setAttribute",(d||0)+"",e[u],a,l,0,0,u),f.op=u,f.b=d,this._props.push(u)},render:function(t,e){for(var i=e._pt;i;)vi?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},ng("roundProps",c_),ng("modifiers"),ng("snap",tE))||kd;Zn.version=tr.version=lr.version="3.15.0";Ib=1;Q_()&&Sc();qe.Power0;qe.Power1;qe.Power2;qe.Power3;qe.Power4;qe.Linear;qe.Quad;qe.Cubic;qe.Quart;qe.Quint;qe.Strong;qe.Elastic;qe.Back;qe.SteppedEase;qe.Bounce;qe.Sine;qe.Expo;qe.Circ;var y1,Xs,ac,cv,zo,S1,uv,GU=function(){return typeof window<"u"},ls={},Co=180/Math.PI,sc=Math.PI/180,Wl=Math.atan2,M1=1e8,fv=/([A-Z])/g,VU=/(left|right|width|margin|padding|x)/i,kU=/[\s,\(]\S/,va={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},h_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},XU=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},WU=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},YU=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},qU=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},xE=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yE=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},jU=function(t,e,i){return t.style[e]=i},ZU=function(t,e,i){return t.style.setProperty(e,i)},KU=function(t,e,i){return t._gsap[e]=i},QU=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},JU=function(t,e,i,a,l){var u=t._gsap;u.scaleX=u.scaleY=i,u.renderTransform(l,u)},$U=function(t,e,i,a,l){var u=t._gsap;u[e]=i,u.renderTransform(l,u)},Un="transform",or=Un+"Origin",tN=function s(t,e){var i=this,a=this.target,l=a.style,u=a._gsap;if(t in ls&&l){if(this.tfm=this.tfm||{},t!=="transform")t=va[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return i.tfm[f]=$a(a,f)}):this.tfm[t]=u.x?u[t]:$a(a,t),t===or&&(this.tfm.zOrigin=u.zOrigin);else return va.transform.split(",").forEach(function(f){return s.call(i,f,e)});if(this.props.indexOf(Un)>=0)return;u.svg&&(this.svgo=a.getAttribute("data-svg-origin"),this.props.push(or,e,"")),t=Un}(l||e)&&this.props.push(t,e,l[t])},SE=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},eN=function(){var t=this.props,e=this.target,i=e.style,a=e._gsap,l,u;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?e[t[l]](t[l+2]):e[t[l]]=t[l+2]:t[l+2]?i[t[l]]=t[l+2]:i.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(fv,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)a[u]=this.tfm[u];a.svg&&(a.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),l=uv(),(!l||!l.isStart)&&!i[Un]&&(SE(i),a.zOrigin&&i[or]&&(i[or]+=" "+a.zOrigin+"px",a.zOrigin=0,a.renderTransform()),a.uncache=1)}},ME=function(t,e){var i={target:t,props:[],revert:eN,save:tN};return t._gsap||lr.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(a){return i.save(a)}),i},bE,d_=function(t,e){var i=Xs.createElementNS?Xs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xs.createElement(t);return i&&i.style?i:Xs.createElement(t)},wr=function s(t,e,i){var a=getComputedStyle(t);return a[e]||a.getPropertyValue(e.replace(fv,"-$1").toLowerCase())||a.getPropertyValue(e)||!i&&s(t,Mc(e)||e,1)||""},b1="O,Moz,ms,Ms,Webkit".split(","),Mc=function(t,e,i){var a=e||zo,l=a.style,u=5;if(t in l&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);u--&&!(b1[u]+t in l););return u<0?null:(u===3?"ms":u>=0?b1[u]:"")+t},p_=function(){GU()&&window.document&&(y1=window,Xs=y1.document,ac=Xs.documentElement,zo=d_("div")||{style:{}},d_("div"),Un=Mc(Un),or=Un+"Origin",zo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bE=!!Mc("perspective"),uv=lr.core.reverting,cv=1)},E1=function(t){var e=t.ownerSVGElement,i=d_("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),a=t.cloneNode(!0),l;a.style.display="block",i.appendChild(a),ac.appendChild(i);try{l=a.getBBox()}catch{}return i.removeChild(a),ac.removeChild(i),l},T1=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},EE=function(t){var e,i;try{e=t.getBBox()}catch{e=E1(t),i=1}return e&&(e.width||e.height)||i||(e=E1(t)),e&&!e.width&&!e.x&&!e.y?{x:+T1(t,["x","cx","x1"])||0,y:+T1(t,["y","cy","y1"])||0,width:0,height:0}:e},TE=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&EE(t))},Js=function(t,e){if(e){var i=t.style,a;e in ls&&e!==or&&(e=Un),i.removeProperty?(a=e.substr(0,2),(a==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(a==="--"?e:e.replace(fv,"-$1").toLowerCase())):i.removeAttribute(e)}},Ws=function(t,e,i,a,l,u){var f=new sr(t._pt,e,i,0,1,u?yE:xE);return t._pt=f,f.b=a,f.e=l,t._props.push(i),f},A1={deg:1,rad:1,turn:1},nN={grid:1,flex:1},$s=function s(t,e,i,a){var l=parseFloat(i)||0,u=(i+"").trim().substr((l+"").length)||"px",f=zo.style,d=VU.test(e),h=t.tagName.toLowerCase()==="svg",m=(h?"client":"offset")+(d?"Width":"Height"),v=100,_=a==="px",x=a==="%",S,b,y,M;if(a===u||!l||A1[a]||A1[u])return l;if(u!=="px"&&!_&&(l=s(t,e,i,"px")),M=t.getCTM&&TE(t),(x||u==="%")&&(ls[e]||~e.indexOf("adius")))return S=M?t.getBBox()[d?"width":"height"]:t[m],Bn(x?l/S*v:l/100*S);if(f[d?"width":"height"]=v+(_?u:a),b=a!=="rem"&&~e.indexOf("adius")||a==="em"&&t.appendChild&&!h?t:t.parentNode,M&&(b=(t.ownerSVGElement||{}).parentNode),(!b||b===Xs||!b.appendChild)&&(b=Xs.body),y=b._gsap,y&&x&&y.width&&d&&y.time===Er.time&&!y.uncache)return Bn(l/y.width*v);if(x&&(e==="height"||e==="width")){var A=t.style[e];t.style[e]=v+a,S=t[m],A?t.style[e]=A:Js(t,e)}else(x||u==="%")&&!nN[wr(b,"display")]&&(f.position=wr(t,"position")),b===t&&(f.position="static"),b.appendChild(zo),S=zo[m],b.removeChild(zo),f.position="absolute";return d&&x&&(y=Bo(b),y.time=Er.time,y.width=b[m]),Bn(_?S*l/v:S&&l?v/S*l:0)},$a=function(t,e,i,a){var l;return cv||p_(),e in va&&e!=="transform"&&(e=va[e],~e.indexOf(",")&&(e=e.split(",")[0])),ls[e]&&e!=="transform"?(l=uf(t,a),l=e!=="transformOrigin"?l[e]:l.svg?l.origin:Wd(wr(t,or))+" "+l.zOrigin+"px"):(l=t.style[e],(!l||l==="auto"||a||~(l+"").indexOf("calc("))&&(l=Xd[e]&&Xd[e](t,e,i)||wr(t,e)||kb(t,e)||(e==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?$s(t,e,l,i)+i:l},iN=function(t,e,i,a){if(!i||i==="none"){var l=Mc(e,t,1),u=l&&wr(t,l,1);u&&u!==i?(e=l,i=u):e==="borderColor"&&(i=wr(t,"borderTopColor"))}var f=new sr(this._pt,t.style,e,0,1,gE),d=0,h=0,m,v,_,x,S,b,y,M,A,L,w,U;if(f.b=i,f.e=a,i+="",a+="",a.substring(0,6)==="var(--"&&(a=wr(t,a.substring(4,a.indexOf(")")))),a==="auto"&&(b=t.style[e],t.style[e]=a,a=wr(t,e)||a,b?t.style[e]=b:Js(t,e)),m=[i,a],lE(m),i=m[0],a=m[1],_=i.match($l)||[],U=a.match($l)||[],U.length){for(;v=$l.exec(a);)y=v[0],A=a.substring(d,v.index),S?S=(S+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(S=1),y!==(b=_[h++]||"")&&(x=parseFloat(b)||0,w=b.substr((x+"").length),y.charAt(1)==="="&&(y=rc(x,y)+w),M=parseFloat(y),L=y.substr((M+"").length),d=$l.lastIndex-L.length,L||(L=L||Cr.units[e]||w,d===a.length&&(a+=L,f.e+=L)),w!==L&&(x=$s(t,e,b,L)||0),f._pt={_next:f._pt,p:A||h===1?A:",",s:x,c:M-x,m:S&&S<4||e==="zIndex"?Math.round:0});f.c=d<a.length?a.substring(d,a.length):""}else f.r=e==="display"&&a==="none"?yE:xE;return Bb.test(a)&&(f.e=0),this._pt=f,f},w1={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},rN=function(t){var e=t.split(" "),i=e[0],a=e[1]||"50%";return(i==="top"||i==="bottom"||a==="left"||a==="right")&&(t=i,i=a,a=t),e[0]=w1[i]||i,e[1]=w1[a]||a,e.join(" ")},aN=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,a=i.style,l=e.u,u=i._gsap,f,d,h;if(l==="all"||l===!0)a.cssText="",d=1;else for(l=l.split(","),h=l.length;--h>-1;)f=l[h],ls[f]&&(d=1,f=f==="transformOrigin"?or:Un),Js(i,f);d&&(Js(i,Un),u&&(u.svg&&i.removeAttribute("transform"),a.scale=a.rotate=a.translate="none",uf(i,1),u.uncache=1,SE(a)))}},Xd={clearProps:function(t,e,i,a,l){if(l.data!=="isFromStart"){var u=t._pt=new sr(t._pt,e,i,0,0,aN);return u.u=a,u.pr=-10,u.tween=l,t._props.push(i),1}}},cf=[1,0,0,1,0,0],AE={},wE=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},C1=function(t){var e=wr(t,Un);return wE(e)?cf:e.substr(7).match(Fb).map(Bn)},hv=function(t,e){var i=t._gsap||Bo(t),a=t.style,l=C1(t),u,f,d,h;return i.svg&&t.getAttribute("transform")?(d=t.transform.baseVal.consolidate().matrix,l=[d.a,d.b,d.c,d.d,d.e,d.f],l.join(",")==="1,0,0,1,0,0"?cf:l):(l===cf&&!t.offsetParent&&t!==ac&&!i.svg&&(d=a.display,a.display="block",u=t.parentNode,(!u||!t.offsetParent&&!t.getBoundingClientRect().width)&&(h=1,f=t.nextElementSibling,ac.appendChild(t)),l=C1(t),d?a.display=d:Js(t,"display"),h&&(f?u.insertBefore(t,f):u?u.appendChild(t):ac.removeChild(t))),e&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},m_=function(t,e,i,a,l,u){var f=t._gsap,d=l||hv(t,!0),h=f.xOrigin||0,m=f.yOrigin||0,v=f.xOffset||0,_=f.yOffset||0,x=d[0],S=d[1],b=d[2],y=d[3],M=d[4],A=d[5],L=e.split(" "),w=parseFloat(L[0])||0,U=parseFloat(L[1])||0,O,R,T,D;i?d!==cf&&(R=x*y-S*b)&&(T=w*(y/R)+U*(-b/R)+(b*A-y*M)/R,D=w*(-S/R)+U*(x/R)-(x*A-S*M)/R,w=T,U=D):(O=EE(t),w=O.x+(~L[0].indexOf("%")?w/100*O.width:w),U=O.y+(~(L[1]||L[0]).indexOf("%")?U/100*O.height:U)),a||a!==!1&&f.smooth?(M=w-h,A=U-m,f.xOffset=v+(M*x+A*b)-M,f.yOffset=_+(M*S+A*y)-A):f.xOffset=f.yOffset=0,f.xOrigin=w,f.yOrigin=U,f.smooth=!!a,f.origin=e,f.originIsAbsolute=!!i,t.style[or]="0px 0px",u&&(Ws(u,f,"xOrigin",h,w),Ws(u,f,"yOrigin",m,U),Ws(u,f,"xOffset",v,f.xOffset),Ws(u,f,"yOffset",_,f.yOffset)),t.setAttribute("data-svg-origin",w+" "+U)},uf=function(t,e){var i=t._gsap||new uE(t);if("x"in i&&!e&&!i.uncache)return i;var a=t.style,l=i.scaleX<0,u="px",f="deg",d=getComputedStyle(t),h=wr(t,or)||"0",m,v,_,x,S,b,y,M,A,L,w,U,O,R,T,D,k,I,V,$,Z,Y,z,B,tt,rt,G,F,Q,_t,Mt,Lt;return m=v=_=b=y=M=A=L=w=0,x=S=1,i.svg=!!(t.getCTM&&TE(t)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(a[Un]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[Un]!=="none"?d[Un]:"")),a.scale=a.rotate=a.translate="none"),R=hv(t,i.svg),i.svg&&(i.uncache?(tt=t.getBBox(),h=i.xOrigin-tt.x+"px "+(i.yOrigin-tt.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),m_(t,B||h,!!B||i.originIsAbsolute,i.smooth!==!1,R)),U=i.xOrigin||0,O=i.yOrigin||0,R!==cf&&(I=R[0],V=R[1],$=R[2],Z=R[3],m=Y=R[4],v=z=R[5],R.length===6?(x=Math.sqrt(I*I+V*V),S=Math.sqrt(Z*Z+$*$),b=I||V?Wl(V,I)*Co:0,A=$||Z?Wl($,Z)*Co+b:0,A&&(S*=Math.abs(Math.cos(A*sc))),i.svg&&(m-=U-(U*I+O*$),v-=O-(U*V+O*Z))):(Lt=R[6],_t=R[7],G=R[8],F=R[9],Q=R[10],Mt=R[11],m=R[12],v=R[13],_=R[14],T=Wl(Lt,Q),y=T*Co,T&&(D=Math.cos(-T),k=Math.sin(-T),B=Y*D+G*k,tt=z*D+F*k,rt=Lt*D+Q*k,G=Y*-k+G*D,F=z*-k+F*D,Q=Lt*-k+Q*D,Mt=_t*-k+Mt*D,Y=B,z=tt,Lt=rt),T=Wl(-$,Q),M=T*Co,T&&(D=Math.cos(-T),k=Math.sin(-T),B=I*D-G*k,tt=V*D-F*k,rt=$*D-Q*k,Mt=Z*k+Mt*D,I=B,V=tt,$=rt),T=Wl(V,I),b=T*Co,T&&(D=Math.cos(T),k=Math.sin(T),B=I*D+V*k,tt=Y*D+z*k,V=V*D-I*k,z=z*D-Y*k,I=B,Y=tt),y&&Math.abs(y)+Math.abs(b)>359.9&&(y=b=0,M=180-M),x=Bn(Math.sqrt(I*I+V*V+$*$)),S=Bn(Math.sqrt(z*z+Lt*Lt)),T=Wl(Y,z),A=Math.abs(T)>2e-4?T*Co:0,w=Mt?1/(Mt<0?-Mt:Mt):0),i.svg&&(B=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!wE(wr(t,Un)),B&&t.setAttribute("transform",B))),Math.abs(A)>90&&Math.abs(A)<270&&(l?(x*=-1,A+=b<=0?180:-180,b+=b<=0?180:-180):(S*=-1,A+=A<=0?180:-180)),e=e||i.uncache,i.x=m-((i.xPercent=m&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-m)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+u,i.y=v-((i.yPercent=v&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-v)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+u,i.z=_+u,i.scaleX=Bn(x),i.scaleY=Bn(S),i.rotation=Bn(b)+f,i.rotationX=Bn(y)+f,i.rotationY=Bn(M)+f,i.skewX=A+f,i.skewY=L+f,i.transformPerspective=w+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!e&&i.zOrigin||0)&&(a[or]=Wd(h)),i.xOffset=i.yOffset=0,i.force3D=Cr.force3D,i.renderTransform=i.svg?oN:bE?CE:sN,i.uncache=0,i},Wd=function(t){return(t=t.split(" "))[0]+" "+t[1]},ig=function(t,e,i){var a=Ai(e);return Bn(parseFloat(e)+parseFloat($s(t,"x",i+"px",a)))+a},sN=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,CE(t,e)},Ao="0deg",Au="0px",wo=") ",CE=function(t,e){var i=e||this,a=i.xPercent,l=i.yPercent,u=i.x,f=i.y,d=i.z,h=i.rotation,m=i.rotationY,v=i.rotationX,_=i.skewX,x=i.skewY,S=i.scaleX,b=i.scaleY,y=i.transformPerspective,M=i.force3D,A=i.target,L=i.zOrigin,w="",U=M==="auto"&&t&&t!==1||M===!0;if(L&&(v!==Ao||m!==Ao)){var O=parseFloat(m)*sc,R=Math.sin(O),T=Math.cos(O),D;O=parseFloat(v)*sc,D=Math.cos(O),u=ig(A,u,R*D*-L),f=ig(A,f,-Math.sin(O)*-L),d=ig(A,d,T*D*-L+L)}y!==Au&&(w+="perspective("+y+wo),(a||l)&&(w+="translate("+a+"%, "+l+"%) "),(U||u!==Au||f!==Au||d!==Au)&&(w+=d!==Au||U?"translate3d("+u+", "+f+", "+d+") ":"translate("+u+", "+f+wo),h!==Ao&&(w+="rotate("+h+wo),m!==Ao&&(w+="rotateY("+m+wo),v!==Ao&&(w+="rotateX("+v+wo),(_!==Ao||x!==Ao)&&(w+="skew("+_+", "+x+wo),(S!==1||b!==1)&&(w+="scale("+S+", "+b+wo),A.style[Un]=w||"translate(0, 0)"},oN=function(t,e){var i=e||this,a=i.xPercent,l=i.yPercent,u=i.x,f=i.y,d=i.rotation,h=i.skewX,m=i.skewY,v=i.scaleX,_=i.scaleY,x=i.target,S=i.xOrigin,b=i.yOrigin,y=i.xOffset,M=i.yOffset,A=i.forceCSS,L=parseFloat(u),w=parseFloat(f),U,O,R,T,D;d=parseFloat(d),h=parseFloat(h),m=parseFloat(m),m&&(m=parseFloat(m),h+=m,d+=m),d||h?(d*=sc,h*=sc,U=Math.cos(d)*v,O=Math.sin(d)*v,R=Math.sin(d-h)*-_,T=Math.cos(d-h)*_,h&&(m*=sc,D=Math.tan(h-m),D=Math.sqrt(1+D*D),R*=D,T*=D,m&&(D=Math.tan(m),D=Math.sqrt(1+D*D),U*=D,O*=D)),U=Bn(U),O=Bn(O),R=Bn(R),T=Bn(T)):(U=v,T=_,O=R=0),(L&&!~(u+"").indexOf("px")||w&&!~(f+"").indexOf("px"))&&(L=$s(x,"x",u,"px"),w=$s(x,"y",f,"px")),(S||b||y||M)&&(L=Bn(L+S-(S*U+b*R)+y),w=Bn(w+b-(S*O+b*T)+M)),(a||l)&&(D=x.getBBox(),L=Bn(L+a/100*D.width),w=Bn(w+l/100*D.height)),D="matrix("+U+","+O+","+R+","+T+","+L+","+w+")",x.setAttribute("transform",D),A&&(x.style[Un]=D)},lN=function(t,e,i,a,l){var u=360,f=fi(l),d=parseFloat(l)*(f&&~l.indexOf("rad")?Co:1),h=d-a,m=a+h+"deg",v,_;return f&&(v=l.split("_")[1],v==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),v==="cw"&&h<0?h=(h+u*M1)%u-~~(h/u)*u:v==="ccw"&&h>0&&(h=(h-u*M1)%u-~~(h/u)*u)),t._pt=_=new sr(t._pt,e,i,a,h,XU),_.e=m,_.u="deg",t._props.push(i),_},R1=function(t,e){for(var i in e)t[i]=e[i];return t},cN=function(t,e,i){var a=R1({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",u=i.style,f,d,h,m,v,_,x,S;a.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[Un]=e,f=uf(i,1),Js(i,Un),i.setAttribute("transform",h)):(h=getComputedStyle(i)[Un],u[Un]=e,f=uf(i,1),u[Un]=h);for(d in ls)h=a[d],m=f[d],h!==m&&l.indexOf(d)<0&&(x=Ai(h),S=Ai(m),v=x!==S?$s(i,d,h,S):parseFloat(h),_=parseFloat(m),t._pt=new sr(t._pt,f,d,v,_-v,h_),t._pt.u=S||0,t._props.push(d));R1(f,a)};ar("padding,margin,Width,Radius",function(s,t){var e="Top",i="Right",a="Bottom",l="Left",u=(t<3?[e,i,a,l]:[e+l,e+i,a+i,a+l]).map(function(f){return t<2?s+f:"border"+f+s});Xd[t>1?"border"+s:s]=function(f,d,h,m,v){var _,x;if(arguments.length<4)return _=u.map(function(S){return $a(f,S,h)}),x=_.join(" "),x.split(_[0]).length===5?_[0]:x;_=(m+"").split(" "),x={},u.forEach(function(S,b){return x[S]=_[b]=_[b]||_[(b-1)/2|0]}),f.init(d,x,v)}});var RE={name:"css",register:p_,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,a,l){var u=this._props,f=t.style,d=i.vars.startAt,h,m,v,_,x,S,b,y,M,A,L,w,U,O,R,T,D;cv||p_(),this.styles=this.styles||ME(t),T=this.styles.props,this.tween=i;for(b in e)if(b!=="autoRound"&&(m=e[b],!(Mr[b]&&fE(b,e,i,a,t,l)))){if(x=typeof m,S=Xd[b],x==="function"&&(m=m.call(i,a,t,l),x=typeof m),x==="string"&&~m.indexOf("random(")&&(m=sf(m)),S)S(this,t,b,m,i)&&(R=1);else if(b.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(b)+"").trim(),m+="",Zs.lastIndex=0,Zs.test(h)||(y=Ai(h),M=Ai(m),M?y!==M&&(h=$s(t,b,h,M)+M):y&&(m+=y)),this.add(f,"setProperty",h,m,a,l,0,0,b),u.push(b),T.push(b,0,f[b]);else if(x!=="undefined"){if(d&&b in d?(h=typeof d[b]=="function"?d[b].call(i,a,t,l):d[b],fi(h)&&~h.indexOf("random(")&&(h=sf(h)),Ai(h+"")||h==="auto"||(h+=Cr.units[b]||Ai($a(t,b))||""),(h+"").charAt(1)==="="&&(h=$a(t,b))):h=$a(t,b),_=parseFloat(h),A=x==="string"&&m.charAt(1)==="="&&m.substr(0,2),A&&(m=m.substr(2)),v=parseFloat(m),b in va&&(b==="autoAlpha"&&(_===1&&$a(t,"visibility")==="hidden"&&v&&(_=0),T.push("visibility",0,f.visibility),Ws(this,f,"visibility",_?"inherit":"hidden",v?"inherit":"hidden",!v)),b!=="scale"&&b!=="transform"&&(b=va[b],~b.indexOf(",")&&(b=b.split(",")[0]))),L=b in ls,L){if(this.styles.save(b),D=m,x==="string"&&m.substring(0,6)==="var(--"){if(m=wr(t,m.substring(4,m.indexOf(")"))),m.substring(0,5)==="calc("){var k=t.style.perspective;t.style.perspective=m,m=wr(t,"perspective"),k?t.style.perspective=k:Js(t,"perspective")}v=parseFloat(m)}if(w||(U=t._gsap,U.renderTransform&&!e.parseTransform||uf(t,e.parseTransform),O=e.smoothOrigin!==!1&&U.smooth,w=this._pt=new sr(this._pt,f,Un,0,1,U.renderTransform,U,0,-1),w.dep=1),b==="scale")this._pt=new sr(this._pt,U,"scaleY",U.scaleY,(A?rc(U.scaleY,A+v):v)-U.scaleY||0,h_),this._pt.u=0,u.push("scaleY",b),b+="X";else if(b==="transformOrigin"){T.push(or,0,f[or]),m=rN(m),U.svg?m_(t,m,0,O,0,this):(M=parseFloat(m.split(" ")[2])||0,M!==U.zOrigin&&Ws(this,U,"zOrigin",U.zOrigin,M),Ws(this,f,b,Wd(h),Wd(m)));continue}else if(b==="svgOrigin"){m_(t,m,1,O,0,this);continue}else if(b in AE){lN(this,U,b,_,A?rc(_,A+m):m);continue}else if(b==="smoothOrigin"){Ws(this,U,"smooth",U.smooth,m);continue}else if(b==="force3D"){U[b]=m;continue}else if(b==="transform"){cN(this,m,t);continue}}else b in f||(b=Mc(b)||b);if(L||(v||v===0)&&(_||_===0)&&!kU.test(m)&&b in f)y=(h+"").substr((_+"").length),v||(v=0),M=Ai(m)||(b in Cr.units?Cr.units[b]:y),y!==M&&(_=$s(t,b,h,M)),this._pt=new sr(this._pt,L?U:f,b,_,(A?rc(_,A+v):v)-_,!L&&(M==="px"||b==="zIndex")&&e.autoRound!==!1?qU:h_),this._pt.u=M||0,L&&D!==m?(this._pt.b=h,this._pt.e=D,this._pt.r=YU):y!==M&&M!=="%"&&(this._pt.b=h,this._pt.r=WU);else if(b in f)iN.call(this,t,b,h,A?A+m:m);else if(b in t)this.add(t,b,h||t[b],A?A+m:m,a,l);else if(b!=="parseTransform"){$_(b,m);continue}L||(b in f?T.push(b,0,f[b]):typeof t[b]=="function"?T.push(b,2,t[b]()):T.push(b,1,h||t[b])),u.push(b)}}R&&_E(this)},render:function(t,e){if(e.tween._time||!uv())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:$a,aliases:va,getSetter:function(t,e,i){var a=va[e];return a&&a.indexOf(",")<0&&(e=a),e in ls&&e!==or&&(t._gsap.x||$a(t,"x"))?i&&S1===i?e==="scale"?QU:KU:(S1=i||{})&&(e==="scale"?JU:$U):t.style&&!K_(t.style[e])?jU:~e.indexOf("-")?ZU:ov(t,e)},core:{_removeProperty:Js,_getMatrix:hv}};lr.utils.checkPrefix=Mc;lr.core.getStyleSaver=ME;(function(s,t,e,i){var a=ar(s+","+t+","+e,function(l){ls[l]=1});ar(t,function(l){Cr.units[l]="deg",AE[l]=1}),va[a[13]]=s+","+t,ar(i,function(l){var u=l.split(":");va[u[1]]=a[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ar("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Cr.units[s]="px"});lr.registerPlugin(RE);var Ke=lr.registerPlugin(RE)||lr;Ke.core.Tween;function uN(s,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(s,i.key,i)}}function fN(s,t,e){return t&&uN(s.prototype,t),s}var _i,Ad,Tr,Ys,qs,oc,DE,Ro,lc,LE,ns,ra,UE,NE=function(){return _i||typeof window<"u"&&(_i=window.gsap)&&_i.registerPlugin&&_i},OE=1,ec=[],Be=[],Ea=[],Vu=Date.now,g_=function(t,e){return e},hN=function(){var t=lc.core,e=t.bridge||{},i=t._scrollers,a=t._proxies;i.push.apply(i,Be),a.push.apply(a,Ea),Be=i,Ea=a,g_=function(u,f){return e[u](f)}},Ks=function(t,e){return~Ea.indexOf(t)&&Ea[Ea.indexOf(t)+1][e]},ku=function(t){return!!~LE.indexOf(t)},Bi=function(t,e,i,a,l){return t.addEventListener(e,i,{passive:a!==!1,capture:!!l})},zi=function(t,e,i,a){return t.removeEventListener(e,i,!!a)},nd="scrollLeft",id="scrollTop",__=function(){return ns&&ns.isPressed||Be.cache++},Yd=function(t,e){var i=function a(l){if(l||l===0){OE&&(Tr.history.scrollRestoration="manual");var u=ns&&ns.isPressed;l=a.v=Math.round(l)||(ns&&ns.iOS?1:0),t(l),a.cacheID=Be.cache,u&&g_("ss",l)}else(e||Be.cache!==a.cacheID||g_("ref"))&&(a.cacheID=Be.cache,a.v=t());return a.v+a.offset};return i.offset=0,t&&i},ki={s:nd,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Yd(function(s){return arguments.length?Tr.scrollTo(s,ti.sc()):Tr.pageXOffset||Ys[nd]||qs[nd]||oc[nd]||0})},ti={s:id,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:ki,sc:Yd(function(s){return arguments.length?Tr.scrollTo(ki.sc(),s):Tr.pageYOffset||Ys[id]||qs[id]||oc[id]||0})},Qi=function(t,e){return(e&&e._ctx&&e._ctx.selector||_i.utils.toArray)(t)[0]||(typeof t=="string"&&_i.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},dN=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},to=function(t,e){var i=e.s,a=e.sc;ku(t)&&(t=Ys.scrollingElement||qs);var l=Be.indexOf(t),u=a===ti.sc?1:2;!~l&&(l=Be.push(t)-1),Be[l+u]||Bi(t,"scroll",__);var f=Be[l+u],d=f||(Be[l+u]=Yd(Ks(t,i),!0)||(ku(t)?a:Yd(function(h){return arguments.length?t[i]=h:t[i]})));return d.target=t,f||(d.smooth=_i.getProperty(t,"scrollBehavior")==="smooth"),d},v_=function(t,e,i){var a=t,l=t,u=Vu(),f=u,d=e||50,h=Math.max(500,d*3),m=function(S,b){var y=Vu();b||y-u>d?(l=a,a=S,f=u,u=y):i?a+=S:a=l+(S-l)/(y-f)*(u-f)},v=function(){l=a=i?0:a,f=u=0},_=function(S){var b=f,y=l,M=Vu();return(S||S===0)&&S!==a&&m(S),u===f||M-f>h?0:(a+(i?y:-y))/((i?M:u)-b)*1e3};return{update:m,reset:v,getVelocity:_}},wu=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},D1=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},PE=function(){lc=_i.core.globals().ScrollTrigger,lc&&lc.core&&hN()},zE=function(t){return _i=t||NE(),!Ad&&_i&&typeof document<"u"&&document.body&&(Tr=window,Ys=document,qs=Ys.documentElement,oc=Ys.body,LE=[Tr,Ys,qs,oc],_i.utils.clamp,UE=_i.core.context||function(){},Ro="onpointerenter"in oc?"pointer":"mouse",DE=In.isTouch=Tr.matchMedia&&Tr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Tr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ra=In.eventTypes=("ontouchstart"in qs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in qs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return OE=0},500),Ad=1),lc||PE(),Ad};ki.op=ti;Be.cache=0;var In=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(i){Ad||zE(_i)||console.warn("Please gsap.registerPlugin(Observer)"),lc||PE();var a=i.tolerance,l=i.dragMinimum,u=i.type,f=i.target,d=i.lineHeight,h=i.debounce,m=i.preventDefault,v=i.onStop,_=i.onStopDelay,x=i.ignore,S=i.wheelSpeed,b=i.event,y=i.onDragStart,M=i.onDragEnd,A=i.onDrag,L=i.onPress,w=i.onRelease,U=i.onRight,O=i.onLeft,R=i.onUp,T=i.onDown,D=i.onChangeX,k=i.onChangeY,I=i.onChange,V=i.onToggleX,$=i.onToggleY,Z=i.onHover,Y=i.onHoverEnd,z=i.onMove,B=i.ignoreCheck,tt=i.isNormalizer,rt=i.onGestureStart,G=i.onGestureEnd,F=i.onWheel,Q=i.onEnable,_t=i.onDisable,Mt=i.onClick,Lt=i.scrollSpeed,it=i.capture,gt=i.allowClicks,Et=i.lockAxis,zt=i.onLockAxis;this.target=f=Qi(f)||qs,this.vars=i,x&&(x=_i.utils.toArray(x)),a=a||1e-9,l=l||0,S=S||1,Lt=Lt||1,u=u||"wheel,touch,pointer",h=h!==!1,d||(d=parseFloat(Tr.getComputedStyle(oc).lineHeight)||22);var ee,Kt,ze,qt,ae,_e,se,ct=this,q=0,je=0,Te=i.passive||!m&&i.passive!==!1,ue=to(f,ki),Wt=to(f,ti),H=ue(),C=Wt(),K=~u.indexOf("touch")&&!~u.indexOf("pointer")&&ra[0]==="pointerdown",vt=ku(f),xt=f.ownerDocument||Ys,dt=[0,0,0],Vt=[0,0,0],Rt=0,ie=function(){return Rt=Vu()},Yt=function(Jt,Ae){return(ct.event=Jt)&&x&&dN(Jt.target,x)||Ae&&K&&Jt.pointerType!=="touch"||B&&B(Jt,Ae)},wt=function(){ct._vx.reset(),ct._vy.reset(),Kt.pause(),v&&v(ct)},At=function(){var Jt=ct.deltaX=D1(dt),Ae=ct.deltaY=D1(Vt),Bt=Math.abs(Jt)>=a,he=Math.abs(Ae)>=a;I&&(Bt||he)&&I(ct,Jt,Ae,dt,Vt),Bt&&(U&&ct.deltaX>0&&U(ct),O&&ct.deltaX<0&&O(ct),D&&D(ct),V&&ct.deltaX<0!=q<0&&V(ct),q=ct.deltaX,dt[0]=dt[1]=dt[2]=0),he&&(T&&ct.deltaY>0&&T(ct),R&&ct.deltaY<0&&R(ct),k&&k(ct),$&&ct.deltaY<0!=je<0&&$(ct),je=ct.deltaY,Vt[0]=Vt[1]=Vt[2]=0),(qt||ze)&&(z&&z(ct),ze&&(y&&ze===1&&y(ct),A&&A(ct),ze=0),qt=!1),_e&&!(_e=!1)&&zt&&zt(ct),ae&&(F(ct),ae=!1),ee=0},Ht=function(Jt,Ae,Bt){dt[Bt]+=Jt,Vt[Bt]+=Ae,ct._vx.update(Jt),ct._vy.update(Ae),h?ee||(ee=requestAnimationFrame(At)):At()},Pt=function(Jt,Ae){Et&&!se&&(ct.axis=se=Math.abs(Jt)>Math.abs(Ae)?"x":"y",_e=!0),se!=="y"&&(dt[2]+=Jt,ct._vx.update(Jt,!0)),se!=="x"&&(Vt[2]+=Ae,ct._vy.update(Ae,!0)),h?ee||(ee=requestAnimationFrame(At)):At()},Ft=function(Jt){if(!Yt(Jt,1)){Jt=wu(Jt,m);var Ae=Jt.clientX,Bt=Jt.clientY,he=Ae-ct.x,oe=Bt-ct.y,de=ct.isDragging;ct.x=Ae,ct.y=Bt,(de||(he||oe)&&(Math.abs(ct.startX-Ae)>=l||Math.abs(ct.startY-Bt)>=l))&&(ze||(ze=de?2:1),de||(ct.isDragging=!0),Pt(he,oe))}},pe=ct.onPress=function(kt){Yt(kt,1)||kt&&kt.button||(ct.axis=se=null,Kt.pause(),ct.isPressed=!0,kt=wu(kt),q=je=0,ct.startX=ct.x=kt.clientX,ct.startY=ct.y=kt.clientY,ct._vx.reset(),ct._vy.reset(),Bi(tt?f:xt,ra[1],Ft,Te,!0),ct.deltaX=ct.deltaY=0,L&&L(ct))},X=ct.onRelease=function(kt){if(!Yt(kt,1)){zi(tt?f:xt,ra[1],Ft,!0);var Jt=!isNaN(ct.y-ct.startY),Ae=ct.isDragging,Bt=Ae&&(Math.abs(ct.x-ct.startX)>3||Math.abs(ct.y-ct.startY)>3),he=wu(kt);!Bt&&Jt&&(ct._vx.reset(),ct._vy.reset(),m&&gt&&_i.delayedCall(.08,function(){if(Vu()-Rt>300&&!kt.defaultPrevented){if(kt.target.click)kt.target.click();else if(xt.createEvent){var oe=xt.createEvent("MouseEvents");oe.initMouseEvent("click",!0,!0,Tr,1,he.screenX,he.screenY,he.clientX,he.clientY,!1,!1,!1,!1,0,null),kt.target.dispatchEvent(oe)}}})),ct.isDragging=ct.isGesturing=ct.isPressed=!1,v&&Ae&&!tt&&Kt.restart(!0),ze&&At(),M&&Ae&&M(ct),w&&w(ct,Bt)}},Dt=function(Jt){return Jt.touches&&Jt.touches.length>1&&(ct.isGesturing=!0)&&rt(Jt,ct.isDragging)},Ct=function(){return(ct.isGesturing=!1)||G(ct)},Nt=function(Jt){if(!Yt(Jt)){var Ae=ue(),Bt=Wt();Ht((Ae-H)*Lt,(Bt-C)*Lt,1),H=Ae,C=Bt,v&&Kt.restart(!0)}},Tt=function(Jt){if(!Yt(Jt)){Jt=wu(Jt,m),F&&(ae=!0);var Ae=(Jt.deltaMode===1?d:Jt.deltaMode===2?Tr.innerHeight:1)*S;Ht(Jt.deltaX*Ae,Jt.deltaY*Ae,0),v&&!tt&&Kt.restart(!0)}},mt=function(Jt){if(!Yt(Jt)){var Ae=Jt.clientX,Bt=Jt.clientY,he=Ae-ct.x,oe=Bt-ct.y;ct.x=Ae,ct.y=Bt,qt=!0,v&&Kt.restart(!0),(he||oe)&&Pt(he,oe)}},Xt=function(Jt){ct.event=Jt,Z(ct)},le=function(Jt){ct.event=Jt,Y(ct)},Xe=function(Jt){return Yt(Jt)||wu(Jt,m)&&Mt(ct)};Kt=ct._dc=_i.delayedCall(_||.25,wt).pause(),ct.deltaX=ct.deltaY=0,ct._vx=v_(0,50,!0),ct._vy=v_(0,50,!0),ct.scrollX=ue,ct.scrollY=Wt,ct.isDragging=ct.isGesturing=ct.isPressed=!1,UE(this),ct.enable=function(kt){return ct.isEnabled||(Bi(vt?xt:f,"scroll",__),u.indexOf("scroll")>=0&&Bi(vt?xt:f,"scroll",Nt,Te,it),u.indexOf("wheel")>=0&&Bi(f,"wheel",Tt,Te,it),(u.indexOf("touch")>=0&&DE||u.indexOf("pointer")>=0)&&(Bi(f,ra[0],pe,Te,it),Bi(xt,ra[2],X),Bi(xt,ra[3],X),gt&&Bi(f,"click",ie,!0,!0),Mt&&Bi(f,"click",Xe),rt&&Bi(xt,"gesturestart",Dt),G&&Bi(xt,"gestureend",Ct),Z&&Bi(f,Ro+"enter",Xt),Y&&Bi(f,Ro+"leave",le),z&&Bi(f,Ro+"move",mt)),ct.isEnabled=!0,ct.isDragging=ct.isGesturing=ct.isPressed=qt=ze=!1,ct._vx.reset(),ct._vy.reset(),H=ue(),C=Wt(),kt&&kt.type&&pe(kt),Q&&Q(ct)),ct},ct.disable=function(){ct.isEnabled&&(ec.filter(function(kt){return kt!==ct&&ku(kt.target)}).length||zi(vt?xt:f,"scroll",__),ct.isPressed&&(ct._vx.reset(),ct._vy.reset(),zi(tt?f:xt,ra[1],Ft,!0)),zi(vt?xt:f,"scroll",Nt,it),zi(f,"wheel",Tt,it),zi(f,ra[0],pe,it),zi(xt,ra[2],X),zi(xt,ra[3],X),zi(f,"click",ie,!0),zi(f,"click",Xe),zi(xt,"gesturestart",Dt),zi(xt,"gestureend",Ct),zi(f,Ro+"enter",Xt),zi(f,Ro+"leave",le),zi(f,Ro+"move",mt),ct.isEnabled=ct.isPressed=ct.isDragging=!1,_t&&_t(ct))},ct.kill=ct.revert=function(){ct.disable();var kt=ec.indexOf(ct);kt>=0&&ec.splice(kt,1),ns===ct&&(ns=0)},ec.push(ct),tt&&ku(f)&&(ns=ct),ct.enable(b)},fN(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();In.version="3.15.0";In.create=function(s){return new In(s)};In.register=zE;In.getAll=function(){return ec.slice()};In.getById=function(s){return ec.filter(function(t){return t.vars.id===s})[0]};NE()&&_i.registerPlugin(In);var te,Ql,Fe,ln,br,an,dv,qd,ff,Xu,Ou,rd,bi,rp,x_,Gi,L1,U1,Jl,FE,rg,BE,Hi,y_,IE,HE,Is,S_,pv,cc,mv,Wu,M_,ag,ad=1,Ei=Date.now,sg=Ei(),Zr=0,Pu=0,N1=function(t,e,i){var a=Sr(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=a,a?t.substr(6,t.length-7):t},O1=function(t,e){return e&&(!Sr(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},pN=function s(){return Pu&&requestAnimationFrame(s)},P1=function(){return rp=1},z1=function(){return rp=0},ha=function(t){return t},zu=function(t){return Math.round(t*1e5)/1e5||0},GE=function(){return typeof window<"u"},VE=function(){return te||GE()&&(te=window.gsap)&&te.registerPlugin&&te},jo=function(t){return!!~dv.indexOf(t)},kE=function(t){return(t==="Height"?mv:Fe["inner"+t])||br["client"+t]||an["client"+t]},XE=function(t){return Ks(t,"getBoundingClientRect")||(jo(t)?function(){return Ld.width=Fe.innerWidth,Ld.height=mv,Ld}:function(){return ts(t)})},mN=function(t,e,i){var a=i.d,l=i.d2,u=i.a;return(u=Ks(t,"getBoundingClientRect"))?function(){return u()[a]}:function(){return(e?kE(l):t["client"+l])||0}},gN=function(t,e){return!e||~Ea.indexOf(t)?XE(t):function(){return Ld}},xa=function(t,e){var i=e.s,a=e.d2,l=e.d,u=e.a;return Math.max(0,(i="scroll"+a)&&(u=Ks(t,i))?u()-XE(t)()[l]:jo(t)?(br[i]||an[i])-kE(a):t[i]-t["offset"+a])},sd=function(t,e){for(var i=0;i<Jl.length;i+=3)(!e||~e.indexOf(Jl[i+1]))&&t(Jl[i],Jl[i+1],Jl[i+2])},Sr=function(t){return typeof t=="string"},wi=function(t){return typeof t=="function"},Fu=function(t){return typeof t=="number"},Do=function(t){return typeof t=="object"},Cu=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},Yl=function(t,e,i){if(t.enabled){var a=t._ctx?t._ctx.add(function(){return e(t,i)}):e(t,i);a&&a.totalTime&&(t.callbackAnimation=a)}},ql=Math.abs,WE="left",YE="top",gv="right",_v="bottom",Vo="width",ko="height",Yu="Right",qu="Left",ju="Top",Zu="Bottom",jn="padding",kr="margin",bc="Width",vv="Height",$n="px",Xr=function(t){return Fe.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},_N=function(t){var e=Xr(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},F1=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},ts=function(t,e){var i=e&&Xr(t)[x_]!=="matrix(1, 0, 0, 1, 0, 0)"&&te.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),a=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),a},jd=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},qE=function(t){var e=[],i=t.labels,a=t.duration(),l;for(l in i)e.push(i[l]/a);return e},vN=function(t){return function(e){return te.utils.snap(qE(t),e)}},xv=function(t){var e=te.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(a,l){return a-l});return i?function(a,l,u){u===void 0&&(u=.001);var f;if(!l)return e(a);if(l>0){for(a-=u,f=0;f<i.length;f++)if(i[f]>=a)return i[f];return i[f-1]}else for(f=i.length,a+=u;f--;)if(i[f]<=a)return i[f];return i[0]}:function(a,l,u){u===void 0&&(u=.001);var f=e(a);return!l||Math.abs(f-a)<u||f-a<0==l<0?f:e(l<0?a-t:a+t)}},xN=function(t){return function(e,i){return xv(qE(t))(e,i.direction)}},od=function(t,e,i,a){return i.split(",").forEach(function(l){return t(e,l,a)})},oi=function(t,e,i,a,l){return t.addEventListener(e,i,{passive:!a,capture:!!l})},si=function(t,e,i,a){return t.removeEventListener(e,i,!!a)},ld=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},B1={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},cd={toggleActions:"play",anticipatePin:0},Zd={top:0,left:0,center:.5,bottom:1,right:1},wd=function(t,e){if(Sr(t)){var i=t.indexOf("="),a=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(a*=e/100),t=t.substr(0,i-1)),t=a+(t in Zd?Zd[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ud=function(t,e,i,a,l,u,f,d){var h=l.startColor,m=l.endColor,v=l.fontSize,_=l.indent,x=l.fontWeight,S=ln.createElement("div"),b=jo(i)||Ks(i,"pinType")==="fixed",y=t.indexOf("scroller")!==-1,M=b?an:i.tagName==="IFRAME"?i.contentDocument.body:i,A=t.indexOf("start")!==-1,L=A?h:m,w="border-color:"+L+";font-size:"+v+";color:"+L+";font-weight:"+x+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((y||d)&&b?"fixed;":"absolute;"),(y||d||!b)&&(w+=(a===ti?gv:_v)+":"+(u+parseFloat(_))+"px;"),f&&(w+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),S._isStart=A,S.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),S.style.cssText=w,S.innerText=e||e===0?t+"-"+e:t,M.children[0]?M.insertBefore(S,M.children[0]):M.appendChild(S),S._offset=S["offset"+a.op.d2],Cd(S,0,a,A),S},Cd=function(t,e,i,a){var l={display:"block"},u=i[a?"os2":"p2"],f=i[a?"p2":"os2"];t._isFlipped=a,l[i.a+"Percent"]=a?-100:0,l[i.a]=a?"1px":0,l["border"+u+bc]=1,l["border"+f+bc]=0,l[i.p]=e+"px",te.set(t,l)},Pe=[],b_={},hf,I1=function(){return Ei()-Zr>34&&(hf||(hf=requestAnimationFrame(rs)))},jl=function(){(!Hi||!Hi.isPressed||Hi.startX>an.clientWidth)&&(Be.cache++,Hi?hf||(hf=requestAnimationFrame(rs)):rs(),Zr||Ko("scrollStart"),Zr=Ei())},og=function(){HE=Fe.innerWidth,IE=Fe.innerHeight},Bu=function(t){Be.cache++,(t===!0||!bi&&!BE&&!ln.fullscreenElement&&!ln.webkitFullscreenElement&&(!y_||HE!==Fe.innerWidth||Math.abs(Fe.innerHeight-IE)>Fe.innerHeight*.25))&&qd.restart(!0)},Zo={},yN=[],jE=function s(){return si(ge,"scrollEnd",s)||Fo(!0)},Ko=function(t){return Zo[t]&&Zo[t].map(function(e){return e()})||yN},yr=[],ZE=function(t){for(var e=0;e<yr.length;e+=5)(!t||yr[e+4]&&yr[e+4].query===t)&&(yr[e].style.cssText=yr[e+1],yr[e].getBBox&&yr[e].setAttribute("transform",yr[e+2]||""),yr[e+3].uncache=1)},KE=function(){return Be.forEach(function(t){return wi(t)&&++t.cacheID&&(t.rec=t())})},yv=function(t,e){var i;for(Gi=0;Gi<Pe.length;Gi++)i=Pe[Gi],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));Wu=!0,e&&ZE(e),e||Ko("revert")},QE=function(t,e){Be.cache++,(e||!Vi)&&Be.forEach(function(i){return wi(i)&&i.cacheID++&&(i.rec=0)}),Sr(t)&&(Fe.history.scrollRestoration=pv=t)},Vi,Xo=0,H1,SN=function(){if(H1!==Xo){var t=H1=Xo;requestAnimationFrame(function(){return t===Xo&&Fo(!0)})}},JE=function(){an.appendChild(cc),mv=!Hi&&cc.offsetHeight||Fe.innerHeight,an.removeChild(cc)},G1=function(t){return ff(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Fo=function(t,e){if(br=ln.documentElement,an=ln.body,dv=[Fe,ln,br,an],Zr&&!t&&!Wu){oi(ge,"scrollEnd",jE);return}JE(),Vi=ge.isRefreshing=!0,Wu||KE();var i=Ko("refreshInit");FE&&ge.sort(),e||yv(),Be.forEach(function(a){wi(a)&&(a.smooth&&(a.target.style.scrollBehavior="auto"),a(0))}),Pe.slice(0).forEach(function(a){return a.refresh()}),Wu=!1,Pe.forEach(function(a){if(a._subPinOffset&&a.pin){var l=a.vars.horizontal?"offsetWidth":"offsetHeight",u=a.pin[l];a.revert(!0,1),a.adjustPinSpacing(a.pin[l]-u),a.refresh()}}),M_=1,G1(!0),Pe.forEach(function(a){var l=xa(a.scroller,a._dir),u=a.vars.end==="max"||a._endClamp&&a.end>l,f=a._startClamp&&a.start>=l;(u||f)&&a.setPositions(f?l-1:a.start,u?Math.max(f?l:a.start+1,l):a.end,!0)}),G1(!1),M_=0,i.forEach(function(a){return a&&a.render&&a.render(-1)}),Be.forEach(function(a){wi(a)&&(a.smooth&&requestAnimationFrame(function(){return a.target.style.scrollBehavior="smooth"}),a.rec&&a(a.rec))}),QE(pv,1),qd.pause(),Xo++,Vi=2,rs(2),Pe.forEach(function(a){return wi(a.vars.onRefresh)&&a.vars.onRefresh(a)}),Vi=ge.isRefreshing=!1,Ko("refresh")},E_=0,Rd=1,Ku,rs=function(t){if(t===2||!Vi&&!Wu){ge.isUpdating=!0,Ku&&Ku.update(0);var e=Pe.length,i=Ei(),a=i-sg>=50,l=e&&Pe[0].scroll();if(Rd=E_>l?-1:1,Vi||(E_=l),a&&(Zr&&!rp&&i-Zr>200&&(Zr=0,Ko("scrollEnd")),Ou=sg,sg=i),Rd<0){for(Gi=e;Gi-- >0;)Pe[Gi]&&Pe[Gi].update(0,a);Rd=1}else for(Gi=0;Gi<e;Gi++)Pe[Gi]&&Pe[Gi].update(0,a);ge.isUpdating=!1}hf=0},T_=[WE,YE,_v,gv,kr+Zu,kr+Yu,kr+ju,kr+qu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Dd=T_.concat([Vo,ko,"boxSizing","max"+bc,"max"+vv,"position",kr,jn,jn+ju,jn+Yu,jn+Zu,jn+qu]),MN=function(t,e,i){uc(i);var a=t._gsap;if(a.spacerIsNative)uc(a.spacerState);else if(t._gsap.swappedIn){var l=e.parentNode;l&&(l.insertBefore(t,e),l.removeChild(e))}t._gsap.swappedIn=!1},lg=function(t,e,i,a){if(!t._gsap.swappedIn){for(var l=T_.length,u=e.style,f=t.style,d;l--;)d=T_[l],u[d]=i[d];u.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(u.display="inline-block"),f[_v]=f[gv]="auto",u.flexBasis=i.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[Vo]=jd(t,ki)+$n,u[ko]=jd(t,ti)+$n,u[jn]=f[kr]=f[YE]=f[WE]="0",uc(a),f[Vo]=f["max"+bc]=i[Vo],f[ko]=f["max"+vv]=i[ko],f[jn]=i[jn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},bN=/([A-Z])/g,uc=function(t){if(t){var e=t.t.style,i=t.length,a=0,l,u;for((t.t._gsap||te.core.getCache(t.t)).uncache=1;a<i;a+=2)u=t[a+1],l=t[a],u?e[l]=u:e[l]&&e.removeProperty(l.replace(bN,"-$1").toLowerCase())}},fd=function(t){for(var e=Dd.length,i=t.style,a=[],l=0;l<e;l++)a.push(Dd[l],i[Dd[l]]);return a.t=t,a},EN=function(t,e,i){for(var a=[],l=t.length,u=i?8:0,f;u<l;u+=2)f=t[u],a.push(f,f in e?e[f]:t[u+1]);return a.t=t.t,a},Ld={left:0,top:0},V1=function(t,e,i,a,l,u,f,d,h,m,v,_,x,S){wi(t)&&(t=t(d)),Sr(t)&&t.substr(0,3)==="max"&&(t=_+(t.charAt(4)==="="?wd("0"+t.substr(3),i):0));var b=x?x.time():0,y,M,A;if(x&&x.seek(0),isNaN(t)||(t=+t),Fu(t))x&&(t=te.utils.mapRange(x.scrollTrigger.start,x.scrollTrigger.end,0,_,t)),f&&Cd(f,i,a,!0);else{wi(e)&&(e=e(d));var L=(t||"0").split(" "),w,U,O,R;A=Qi(e,d)||an,w=ts(A)||{},(!w||!w.left&&!w.top)&&Xr(A).display==="none"&&(R=A.style.display,A.style.display="block",w=ts(A),R?A.style.display=R:A.style.removeProperty("display")),U=wd(L[0],w[a.d]),O=wd(L[1]||"0",i),t=w[a.p]-h[a.p]-m+U+l-O,f&&Cd(f,O,a,i-O<20||f._isStart&&O>20),i-=i-O}if(S&&(d[S]=t||-.001,t<0&&(t=0)),u){var T=t+i,D=u._isStart;y="scroll"+a.d2,Cd(u,T,a,D&&T>20||!D&&(v?Math.max(an[y],br[y]):u.parentNode[y])<=T+1),v&&(h=ts(f),v&&(u.style[a.op.p]=h[a.op.p]-a.op.m-u._offset+$n))}return x&&A&&(y=ts(A),x.seek(_),M=ts(A),x._caScrollDist=y[a.p]-M[a.p],t=t/x._caScrollDist*_),x&&x.seek(b),x?t:Math.round(t)},TN=/(webkit|moz|length|cssText|inset)/i,k1=function(t,e,i,a){if(t.parentNode!==e){var l=t.style,u,f;if(e===an){t._stOrig=l.cssText,f=Xr(t);for(u in f)!+u&&!TN.test(u)&&f[u]&&typeof l[u]=="string"&&u!=="0"&&(l[u]=f[u]);l.top=i,l.left=a}else l.cssText=t._stOrig;te.core.getCache(t).uncache=1,e.appendChild(t)}},$E=function(t,e,i){var a=e,l=a;return function(u){var f=Math.round(t());return f!==a&&f!==l&&Math.abs(f-a)>3&&Math.abs(f-l)>3&&(u=f,i&&i()),l=a,a=Math.round(u),a}},hd=function(t,e,i){var a={};a[e.p]="+="+i,te.set(t,a)},X1=function(t,e){var i=to(t,e),a="_scroll"+e.p2,l=function u(f,d,h,m,v){var _=u.tween,x=d.onComplete,S={};h=h||i();var b=$E(i,h,function(){_.kill(),u.tween=0});return v=m&&v||0,m=m||f-h,_&&_.kill(),d[a]=f,d.inherit=!1,d.modifiers=S,S[a]=function(){return b(h+m*_.ratio+v*_.ratio*_.ratio)},d.onUpdate=function(){Be.cache++,u.tween&&rs()},d.onComplete=function(){u.tween=0,x&&x.call(_)},_=u.tween=te.to(t,d),_};return t[a]=i,i.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},oi(t,"wheel",i.wheelHandler),ge.isTouch&&oi(t,"touchmove",i.wheelHandler),l},ge=(function(){function s(e,i){Ql||s.register(te)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),S_(this),this.init(e,i)}var t=s.prototype;return t.init=function(i,a){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Pu){this.update=this.refresh=this.kill=ha;return}i=F1(Sr(i)||Fu(i)||i.nodeType?{trigger:i}:i,cd);var l=i,u=l.onUpdate,f=l.toggleClass,d=l.id,h=l.onToggle,m=l.onRefresh,v=l.scrub,_=l.trigger,x=l.pin,S=l.pinSpacing,b=l.invalidateOnRefresh,y=l.anticipatePin,M=l.onScrubComplete,A=l.onSnapComplete,L=l.once,w=l.snap,U=l.pinReparent,O=l.pinSpacer,R=l.containerAnimation,T=l.fastScrollEnd,D=l.preventOverlaps,k=i.horizontal||i.containerAnimation&&i.horizontal!==!1?ki:ti,I=!v&&v!==0,V=Qi(i.scroller||Fe),$=te.core.getCache(V),Z=jo(V),Y=("pinType"in i?i.pinType:Ks(V,"pinType")||Z&&"fixed")==="fixed",z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],B=I&&i.toggleActions.split(" "),tt="markers"in i?i.markers:cd.markers,rt=Z?0:parseFloat(Xr(V)["border"+k.p2+bc])||0,G=this,F=i.onRefreshInit&&function(){return i.onRefreshInit(G)},Q=mN(V,Z,k),_t=gN(V,Z),Mt=0,Lt=0,it=0,gt=to(V,k),Et,zt,ee,Kt,ze,qt,ae,_e,se,ct,q,je,Te,ue,Wt,H,C,K,vt,xt,dt,Vt,Rt,ie,Yt,wt,At,Ht,Pt,Ft,pe,X,Dt,Ct,Nt,Tt,mt,Xt,le;if(G._startClamp=G._endClamp=!1,G._dir=k,y*=45,G.scroller=V,G.scroll=R?R.time.bind(R):gt,Kt=gt(),G.vars=i,a=a||i.animation,"refreshPriority"in i&&(FE=1,i.refreshPriority===-9999&&(Ku=G)),$.tweenScroll=$.tweenScroll||{top:X1(V,ti),left:X1(V,ki)},G.tweenTo=Et=$.tweenScroll[k.p],G.scrubDuration=function(Bt){Dt=Fu(Bt)&&Bt,Dt?X?X.duration(Bt):X=te.to(a,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Dt,paused:!0,onComplete:function(){return M&&M(G)}}):(X&&X.progress(1).kill(),X=0)},a&&(a.vars.lazy=!1,a._initted&&!G.isReverted||a.vars.immediateRender!==!1&&i.immediateRender!==!1&&a.duration()&&a.render(0,!0,!0),G.animation=a.pause(),a.scrollTrigger=G,G.scrubDuration(v),Ft=0,d||(d=a.vars.id)),w&&((!Do(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in an.style&&te.set(Z?[an,br]:V,{scrollBehavior:"auto"}),Be.forEach(function(Bt){return wi(Bt)&&Bt.target===(Z?ln.scrollingElement||br:V)&&(Bt.smooth=!1)}),ee=wi(w.snapTo)?w.snapTo:w.snapTo==="labels"?vN(a):w.snapTo==="labelsDirectional"?xN(a):w.directional!==!1?function(Bt,he){return xv(w.snapTo)(Bt,Ei()-Lt<500?0:he.direction)}:te.utils.snap(w.snapTo),Ct=w.duration||{min:.1,max:2},Ct=Do(Ct)?Xu(Ct.min,Ct.max):Xu(Ct,Ct),Nt=te.delayedCall(w.delay||Dt/2||.1,function(){var Bt=gt(),he=Ei()-Lt<500,oe=Et.tween;if((he||Math.abs(G.getVelocity())<10)&&!oe&&!rp&&Mt!==Bt){var de=(Bt-qt)/ue,xn=a&&!I?a.totalProgress():de,ve=he?0:(xn-pe)/(Ei()-Ou)*1e3||0,cn=te.utils.clamp(-de,1-de,ql(ve/2)*ve/.185),un=de+(w.inertia===!1?0:cn),we,Me,Ie=w,Hn=Ie.onStart,fn=Ie.onInterrupt,ii=Ie.onComplete;if(we=ee(un,G),Fu(we)||(we=un),Me=Math.max(0,Math.round(qt+we*ue)),Bt<=ae&&Bt>=qt&&Me!==Bt){if(oe&&!oe._initted&&oe.data<=ql(Me-Bt))return;w.inertia===!1&&(cn=we-de),Et(Me,{duration:Ct(ql(Math.max(ql(un-xn),ql(we-xn))*.185/ve/.05||0)),ease:w.ease||"power3",data:ql(Me-Bt),onInterrupt:function(){return Nt.restart(!0)&&fn&&Yl(G,fn)},onComplete:function(){G.update(),Mt=gt(),a&&!I&&(X?X.resetTo("totalProgress",we,a._tTime/a._tDur):a.progress(we)),Ft=pe=a&&!I?a.totalProgress():G.progress,A&&A(G),ii&&Yl(G,ii)}},Bt,cn*ue,Me-Bt-cn*ue),Hn&&Yl(G,Hn,Et.tween)}}else G.isActive&&Mt!==Bt&&Nt.restart(!0)}).pause()),d&&(b_[d]=G),_=G.trigger=Qi(_||x!==!0&&x),le=_&&_._gsap&&_._gsap.stRevert,le&&(le=le(G)),x=x===!0?_:Qi(x),Sr(f)&&(f={targets:_,className:f}),x&&(S===!1||S===kr||(S=!S&&x.parentNode&&x.parentNode.style&&Xr(x.parentNode).display==="flex"?!1:jn),G.pin=x,zt=te.core.getCache(x),zt.spacer?Wt=zt.pinState:(O&&(O=Qi(O),O&&!O.nodeType&&(O=O.current||O.nativeElement),zt.spacerIsNative=!!O,O&&(zt.spacerState=fd(O))),zt.spacer=K=O||ln.createElement("div"),K.classList.add("pin-spacer"),d&&K.classList.add("pin-spacer-"+d),zt.pinState=Wt=fd(x)),i.force3D!==!1&&te.set(x,{force3D:!0}),G.spacer=K=zt.spacer,Pt=Xr(x),ie=Pt[S+k.os2],xt=te.getProperty(x),dt=te.quickSetter(x,k.a,$n),lg(x,K,Pt),C=fd(x)),tt){je=Do(tt)?F1(tt,B1):B1,ct=ud("scroller-start",d,V,k,je,0),q=ud("scroller-end",d,V,k,je,0,ct),vt=ct["offset"+k.op.d2];var Xe=Qi(Ks(V,"content")||V);_e=this.markerStart=ud("start",d,Xe,k,je,vt,0,R),se=this.markerEnd=ud("end",d,Xe,k,je,vt,0,R),R&&(Xt=te.quickSetter([_e,se],k.a,$n)),!Y&&!(Ea.length&&Ks(V,"fixedMarkers")===!0)&&(_N(Z?an:V),te.set([ct,q],{force3D:!0}),wt=te.quickSetter(ct,k.a,$n),Ht=te.quickSetter(q,k.a,$n))}if(R){var kt=R.vars.onUpdate,Jt=R.vars.onUpdateParams;R.eventCallback("onUpdate",function(){G.update(0,0,1),kt&&kt.apply(R,Jt||[])})}if(G.previous=function(){return Pe[Pe.indexOf(G)-1]},G.next=function(){return Pe[Pe.indexOf(G)+1]},G.revert=function(Bt,he){if(!he)return G.kill(!0);var oe=Bt!==!1||!G.enabled,de=bi;oe!==G.isReverted&&(oe&&(Tt=Math.max(gt(),G.scroll.rec||0),it=G.progress,mt=a&&a.progress()),_e&&[_e,se,ct,q].forEach(function(xn){return xn.style.display=oe?"none":"block"}),oe&&(bi=G,G.update(oe)),x&&(!U||!G.isActive)&&(oe?MN(x,K,Wt):lg(x,K,Xr(x),Yt)),oe||G.update(oe),bi=de,G.isReverted=oe)},G.refresh=function(Bt,he,oe,de){if(!((bi||!G.enabled)&&!he)){if(x&&Bt&&Zr){oi(s,"scrollEnd",jE);return}!Vi&&F&&F(G),bi=G,Et.tween&&!oe&&(Et.tween.kill(),Et.tween=0),X&&X.pause(),b&&a&&(a.revert({kill:!1}).invalidate(),a.getChildren?a.getChildren(!0,!0,!1).forEach(function(Zt){return Zt.vars.immediateRender&&Zt.render(0,!0,!0)}):a.vars.immediateRender&&a.render(0,!0,!0)),G.isReverted||G.revert(!0,!0),G._subPinOffset=!1;var xn=Q(),ve=_t(),cn=R?R.duration():xa(V,k),un=ue<=.01||!ue,we=0,Me=de||0,Ie=Do(oe)?oe.end:i.end,Hn=i.endTrigger||_,fn=Do(oe)?oe.start:i.start||(i.start===0||!_?0:x?"0 0":"0 100%"),ii=G.pinnedContainer=i.pinnedContainer&&Qi(i.pinnedContainer,G),Li=_&&Math.max(0,Pe.indexOf(G))||0,yn=Li,Rn,Sn,xi,Ur,N,j,ut,ot,at,Ut,It,Ot,jt;for(tt&&Do(oe)&&(Ot=te.getProperty(ct,k.p),jt=te.getProperty(q,k.p));yn-- >0;)j=Pe[yn],j.end||j.refresh(0,1)||(bi=G),ut=j.pin,ut&&(ut===_||ut===x||ut===ii)&&!j.isReverted&&(Ut||(Ut=[]),Ut.unshift(j),j.revert(!0,!0)),j!==Pe[yn]&&(Li--,yn--);for(wi(fn)&&(fn=fn(G)),fn=N1(fn,"start",G),qt=V1(fn,_,xn,k,gt(),_e,ct,G,ve,rt,Y,cn,R,G._startClamp&&"_startClamp")||(x?-.001:0),wi(Ie)&&(Ie=Ie(G)),Sr(Ie)&&!Ie.indexOf("+=")&&(~Ie.indexOf(" ")?Ie=(Sr(fn)?fn.split(" ")[0]:"")+Ie:(we=wd(Ie.substr(2),xn),Ie=Sr(fn)?fn:(R?te.utils.mapRange(0,R.duration(),R.scrollTrigger.start,R.scrollTrigger.end,qt):qt)+we,Hn=_)),Ie=N1(Ie,"end",G),ae=Math.max(qt,V1(Ie||(Hn?"100% 0":cn),Hn,xn,k,gt()+we,se,q,G,ve,rt,Y,cn,R,G._endClamp&&"_endClamp"))||-.001,we=0,yn=Li;yn--;)j=Pe[yn]||{},ut=j.pin,ut&&j.start-j._pinPush<=qt&&!R&&j.end>0&&(Rn=j.end-(G._startClamp?Math.max(0,j.start):j.start),(ut===_&&j.start-j._pinPush<qt||ut===ii)&&isNaN(fn)&&(we+=Rn*(1-j.progress)),ut===x&&(Me+=Rn));if(qt+=we,ae+=we,G._startClamp&&(G._startClamp+=we),G._endClamp&&!Vi&&(G._endClamp=ae||-.001,ae=Math.min(ae,xa(V,k))),ue=ae-qt||(qt-=.01)&&.001,un&&(it=te.utils.clamp(0,1,te.utils.normalize(qt,ae,Tt))),G._pinPush=Me,_e&&we&&(Rn={},Rn[k.a]="+="+we,ii&&(Rn[k.p]="-="+gt()),te.set([_e,se],Rn)),x&&!(M_&&G.end>=xa(V,k)))Rn=Xr(x),Ur=k===ti,xi=gt(),Vt=parseFloat(xt(k.a))+Me,!cn&&ae>1&&(It=(Z?ln.scrollingElement||br:V).style,It={style:It,value:It["overflow"+k.a.toUpperCase()]},Z&&Xr(an)["overflow"+k.a.toUpperCase()]!=="scroll"&&(It.style["overflow"+k.a.toUpperCase()]="scroll")),lg(x,K,Rn),C=fd(x),Sn=ts(x,!0),ot=Y&&to(V,Ur?ki:ti)(),S?(Yt=[S+k.os2,ue+Me+$n],Yt.t=K,yn=S===jn?jd(x,k)+ue+Me:0,yn&&(Yt.push(k.d,yn+$n),K.style.flexBasis!=="auto"&&(K.style.flexBasis=yn+$n)),uc(Yt),ii&&Pe.forEach(function(Zt){Zt.pin===ii&&Zt.vars.pinSpacing!==!1&&(Zt._subPinOffset=!0)}),Y&&gt(Tt)):(yn=jd(x,k),yn&&K.style.flexBasis!=="auto"&&(K.style.flexBasis=yn+$n)),Y&&(N={top:Sn.top+(Ur?xi-qt:ot)+$n,left:Sn.left+(Ur?ot:xi-qt)+$n,boxSizing:"border-box",position:"fixed"},N[Vo]=N["max"+bc]=Math.ceil(Sn.width)+$n,N[ko]=N["max"+vv]=Math.ceil(Sn.height)+$n,N[kr]=N[kr+ju]=N[kr+Yu]=N[kr+Zu]=N[kr+qu]="0",N[jn]=Rn[jn],N[jn+ju]=Rn[jn+ju],N[jn+Yu]=Rn[jn+Yu],N[jn+Zu]=Rn[jn+Zu],N[jn+qu]=Rn[jn+qu],H=EN(Wt,N,U),Vi&&gt(0)),a?(at=a._initted,rg(1),a.render(a.duration(),!0,!0),Rt=xt(k.a)-Vt+ue+Me,At=Math.abs(ue-Rt)>1,Y&&At&&H.splice(H.length-2,2),a.render(0,!0,!0),at||a.invalidate(!0),a.parent||a.totalTime(a.totalTime()),rg(0)):Rt=ue,It&&(It.value?It.style["overflow"+k.a.toUpperCase()]=It.value:It.style.removeProperty("overflow-"+k.a));else if(_&&gt()&&!R)for(Sn=_.parentNode;Sn&&Sn!==an;)Sn._pinOffset&&(qt-=Sn._pinOffset,ae-=Sn._pinOffset),Sn=Sn.parentNode;Ut&&Ut.forEach(function(Zt){return Zt.revert(!1,!0)}),G.start=qt,G.end=ae,Kt=ze=Vi?Tt:gt(),!R&&!Vi&&(Kt<Tt&&gt(Tt),G.scroll.rec=0),G.revert(!1,!0),Lt=Ei(),Nt&&(Mt=-1,Nt.restart(!0)),bi=0,a&&I&&(a._initted||mt)&&a.progress()!==mt&&a.progress(mt||0,!0).render(a.time(),!0,!0),(un||it!==G.progress||R||b||a&&!a._initted)&&(a&&!I&&(a._initted||it||a.vars.immediateRender!==!1)&&a.totalProgress(R&&qt<-.001&&!it?te.utils.normalize(qt,ae,0):it,!0),G.progress=un||(Kt-qt)/ue===it?0:it),x&&S&&(K._pinOffset=Math.round(G.progress*Rt)),X&&X.invalidate(),isNaN(Ot)||(Ot-=te.getProperty(ct,k.p),jt-=te.getProperty(q,k.p),hd(ct,k,Ot),hd(_e,k,Ot-(de||0)),hd(q,k,jt),hd(se,k,jt-(de||0))),un&&!Vi&&G.update(),m&&!Vi&&!Te&&(Te=!0,m(G),Te=!1)}},G.getVelocity=function(){return(gt()-ze)/(Ei()-Ou)*1e3||0},G.endAnimation=function(){Cu(G.callbackAnimation),a&&(X?X.progress(1):a.paused()?I||Cu(a,G.direction<0,1):Cu(a,a.reversed()))},G.labelToScroll=function(Bt){return a&&a.labels&&(qt||G.refresh()||qt)+a.labels[Bt]/a.duration()*ue||0},G.getTrailing=function(Bt){var he=Pe.indexOf(G),oe=G.direction>0?Pe.slice(0,he).reverse():Pe.slice(he+1);return(Sr(Bt)?oe.filter(function(de){return de.vars.preventOverlaps===Bt}):oe).filter(function(de){return G.direction>0?de.end<=qt:de.start>=ae})},G.update=function(Bt,he,oe){if(!(R&&!oe&&!Bt)){var de=Vi===!0?Tt:G.scroll(),xn=Bt?0:(de-qt)/ue,ve=xn<0?0:xn>1?1:xn||0,cn=G.progress,un,we,Me,Ie,Hn,fn,ii,Li;if(he&&(ze=Kt,Kt=R?gt():de,w&&(pe=Ft,Ft=a&&!I?a.totalProgress():ve)),y&&x&&!bi&&!ad&&Zr&&(!ve&&qt<de+(de-ze)/(Ei()-Ou)*y?ve=1e-4:ve===1&&ae>de+(de-ze)/(Ei()-Ou)*y&&(ve=.9999)),ve!==cn&&G.enabled){if(un=G.isActive=!!ve&&ve<1,we=!!cn&&cn<1,fn=un!==we,Hn=fn||!!ve!=!!cn,G.direction=ve>cn?1:-1,G.progress=ve,Hn&&!bi&&(Me=ve&&!cn?0:ve===1?1:cn===1?2:3,I&&(Ie=!fn&&B[Me+1]!=="none"&&B[Me+1]||B[Me],Li=a&&(Ie==="complete"||Ie==="reset"||Ie in a))),D&&(fn||Li)&&(Li||v||!a)&&(wi(D)?D(G):G.getTrailing(D).forEach(function(xi){return xi.endAnimation()})),I||(X&&!bi&&!ad?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",ve,a._tTime/a._tDur):(X.vars.totalProgress=ve,X.invalidate().restart())):a&&a.totalProgress(ve,!!(bi&&(Lt||Bt)))),x){if(Bt&&S&&(K.style[S+k.os2]=ie),!Y)dt(zu(Vt+Rt*ve));else if(Hn){if(ii=!Bt&&ve>cn&&ae+1>de&&de+1>=xa(V,k),U)if(!Bt&&(un||ii)){var yn=ts(x,!0),Rn=de-qt;k1(x,an,yn.top+(k===ti?Rn:0)+$n,yn.left+(k===ti?0:Rn)+$n)}else k1(x,K);uc(un||ii?H:C),At&&ve<1&&un||dt(Vt+(ve===1&&!ii?Rt:0))}}w&&!Et.tween&&!bi&&!ad&&Nt.restart(!0),f&&(fn||L&&ve&&(ve<1||!ag))&&ff(f.targets).forEach(function(xi){return xi.classList[un||L?"add":"remove"](f.className)}),u&&!I&&!Bt&&u(G),Hn&&!bi?(I&&(Li&&(Ie==="complete"?a.pause().totalProgress(1):Ie==="reset"?a.restart(!0).pause():Ie==="restart"?a.restart(!0):a[Ie]()),u&&u(G)),(fn||!ag)&&(h&&fn&&Yl(G,h),z[Me]&&Yl(G,z[Me]),L&&(ve===1?G.kill(!1,1):z[Me]=0),fn||(Me=ve===1?1:3,z[Me]&&Yl(G,z[Me]))),T&&!un&&Math.abs(G.getVelocity())>(Fu(T)?T:2500)&&(Cu(G.callbackAnimation),X?X.progress(1):Cu(a,Ie==="reverse"?1:!ve,1))):I&&u&&!bi&&u(G)}if(Ht){var Sn=R?de/R.duration()*(R._caScrollDist||0):de;wt(Sn+(ct._isFlipped?1:0)),Ht(Sn)}Xt&&Xt(-de/R.duration()*(R._caScrollDist||0))}},G.enable=function(Bt,he){G.enabled||(G.enabled=!0,oi(V,"resize",Bu),Z||oi(V,"scroll",jl),F&&oi(s,"refreshInit",F),Bt!==!1&&(G.progress=it=0,Kt=ze=Mt=gt()),he!==!1&&G.refresh())},G.getTween=function(Bt){return Bt&&Et?Et.tween:X},G.setPositions=function(Bt,he,oe,de){if(R){var xn=R.scrollTrigger,ve=R.duration(),cn=xn.end-xn.start;Bt=xn.start+cn*Bt/ve,he=xn.start+cn*he/ve}G.refresh(!1,!1,{start:O1(Bt,oe&&!!G._startClamp),end:O1(he,oe&&!!G._endClamp)},de),G.update()},G.adjustPinSpacing=function(Bt){if(Yt&&Bt){var he=Yt.indexOf(k.d)+1;Yt[he]=parseFloat(Yt[he])+Bt+$n,Yt[1]=parseFloat(Yt[1])+Bt+$n,uc(Yt)}},G.disable=function(Bt,he){if(Bt!==!1&&G.revert(!0,!0),G.enabled&&(G.enabled=G.isActive=!1,he||X&&X.pause(),Tt=0,zt&&(zt.uncache=1),F&&si(s,"refreshInit",F),Nt&&(Nt.pause(),Et.tween&&Et.tween.kill()&&(Et.tween=0)),!Z)){for(var oe=Pe.length;oe--;)if(Pe[oe].scroller===V&&Pe[oe]!==G)return;si(V,"resize",Bu),Z||si(V,"scroll",jl)}},G.kill=function(Bt,he){G.disable(Bt,he),X&&!he&&X.kill(),d&&delete b_[d];var oe=Pe.indexOf(G);oe>=0&&Pe.splice(oe,1),oe===Gi&&Rd>0&&Gi--,oe=0,Pe.forEach(function(de){return de.scroller===G.scroller&&(oe=1)}),oe||Vi||(G.scroll.rec=0),a&&(a.scrollTrigger=null,Bt&&a.revert({kill:!1}),he||a.kill()),_e&&[_e,se,ct,q].forEach(function(de){return de.parentNode&&de.parentNode.removeChild(de)}),Ku===G&&(Ku=0),x&&(zt&&(zt.uncache=1),oe=0,Pe.forEach(function(de){return de.pin===x&&oe++}),oe||(zt.spacer=0)),i.onKill&&i.onKill(G)},Pe.push(G),G.enable(!1,!1),le&&le(G),a&&a.add&&!ue){var Ae=G.update;G.update=function(){G.update=Ae,Be.cache++,qt||ae||G.refresh()},te.delayedCall(.01,G.update),ue=.01,qt=ae=0}else G.refresh();x&&SN()},s.register=function(i){return Ql||(te=i||VE(),GE()&&window.document&&s.enable(),Ql=Pu),Ql},s.defaults=function(i){if(i)for(var a in i)cd[a]=i[a];return cd},s.disable=function(i,a){Pu=0,Pe.forEach(function(u){return u[a?"kill":"disable"](i)}),si(Fe,"wheel",jl),si(ln,"scroll",jl),clearInterval(rd),si(ln,"touchcancel",ha),si(an,"touchstart",ha),od(si,ln,"pointerdown,touchstart,mousedown",P1),od(si,ln,"pointerup,touchend,mouseup",z1),qd.kill(),sd(si);for(var l=0;l<Be.length;l+=3)ld(si,Be[l],Be[l+1]),ld(si,Be[l],Be[l+2])},s.enable=function(){if(Fe=window,ln=document,br=ln.documentElement,an=ln.body,te){if(ff=te.utils.toArray,Xu=te.utils.clamp,S_=te.core.context||ha,rg=te.core.suppressOverwrites||ha,pv=Fe.history.scrollRestoration||"auto",E_=Fe.pageYOffset||0,te.core.globals("ScrollTrigger",s),an){Pu=1,cc=document.createElement("div"),cc.style.height="100vh",cc.style.position="absolute",JE(),pN(),In.register(te),s.isTouch=In.isTouch,Is=In.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),y_=In.isTouch===1,oi(Fe,"wheel",jl),dv=[Fe,ln,br,an],te.matchMedia?(s.matchMedia=function(m){var v=te.matchMedia(),_;for(_ in m)v.add(_,m[_]);return v},te.addEventListener("matchMediaInit",function(){KE(),yv()}),te.addEventListener("matchMediaRevert",function(){return ZE()}),te.addEventListener("matchMedia",function(){Fo(0,1),Ko("matchMedia")}),te.matchMedia().add("(orientation: portrait)",function(){return og(),og})):console.warn("Requires GSAP 3.11.0 or later"),og(),oi(ln,"scroll",jl);var i=an.hasAttribute("style"),a=an.style,l=a.borderTopStyle,u=te.core.Animation.prototype,f,d;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),a.borderTopStyle="solid",f=ts(an),ti.m=Math.round(f.top+ti.sc())||0,ki.m=Math.round(f.left+ki.sc())||0,l?a.borderTopStyle=l:a.removeProperty("border-top-style"),i||(an.setAttribute("style",""),an.removeAttribute("style")),rd=setInterval(I1,250),te.delayedCall(.5,function(){return ad=0}),oi(ln,"touchcancel",ha),oi(an,"touchstart",ha),od(oi,ln,"pointerdown,touchstart,mousedown",P1),od(oi,ln,"pointerup,touchend,mouseup",z1),x_=te.utils.checkPrefix("transform"),Dd.push(x_),Ql=Ei(),qd=te.delayedCall(.2,Fo).pause(),Jl=[ln,"visibilitychange",function(){var m=Fe.innerWidth,v=Fe.innerHeight;ln.hidden?(L1=m,U1=v):(L1!==m||U1!==v)&&Bu()},ln,"DOMContentLoaded",Fo,Fe,"load",Fo,Fe,"resize",Bu],sd(oi),Pe.forEach(function(m){return m.enable(0,1)}),d=0;d<Be.length;d+=3)ld(si,Be[d],Be[d+1]),ld(si,Be[d],Be[d+2])}else if(ln){var h=function m(){s.enable(),ln.removeEventListener("DOMContentLoaded",m)};ln.addEventListener("DOMContentLoaded",h)}}},s.config=function(i){"limitCallbacks"in i&&(ag=!!i.limitCallbacks);var a=i.syncInterval;a&&clearInterval(rd)||(rd=a)&&setInterval(I1,a),"ignoreMobileResize"in i&&(y_=s.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(sd(si)||sd(oi,i.autoRefreshEvents||"none"),BE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(i,a){var l=Qi(i),u=Be.indexOf(l),f=jo(l);~u&&Be.splice(u,f?6:2),a&&(f?Ea.unshift(Fe,a,an,a,br,a):Ea.unshift(l,a))},s.clearMatchMedia=function(i){Pe.forEach(function(a){return a._ctx&&a._ctx.query===i&&a._ctx.kill(!0,!0)})},s.isInViewport=function(i,a,l){var u=(Sr(i)?Qi(i):i).getBoundingClientRect(),f=u[l?Vo:ko]*a||0;return l?u.right-f>0&&u.left+f<Fe.innerWidth:u.bottom-f>0&&u.top+f<Fe.innerHeight},s.positionInViewport=function(i,a,l){Sr(i)&&(i=Qi(i));var u=i.getBoundingClientRect(),f=u[l?Vo:ko],d=a==null?f/2:a in Zd?Zd[a]*f:~a.indexOf("%")?parseFloat(a)*f/100:parseFloat(a)||0;return l?(u.left+d)/Fe.innerWidth:(u.top+d)/Fe.innerHeight},s.killAll=function(i){if(Pe.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),i!==!0){var a=Zo.killAll||[];Zo={},a.forEach(function(l){return l()})}},s})();ge.version="3.15.0";ge.saveStyles=function(s){return s?ff(s).forEach(function(t){if(t&&t.style){var e=yr.indexOf(t);e>=0&&yr.splice(e,5),yr.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),te.core.getCache(t),S_())}}):yr};ge.revert=function(s,t){return yv(!s,t)};ge.create=function(s,t){return new ge(s,t)};ge.refresh=function(s){return s?Bu(!0):(Ql||ge.register())&&Fo(!0)};ge.update=function(s){return++Be.cache&&rs(s===!0?2:0)};ge.clearScrollMemory=QE;ge.maxScroll=function(s,t){return xa(s,t?ki:ti)};ge.getScrollFunc=function(s,t){return to(Qi(s),t?ki:ti)};ge.getById=function(s){return b_[s]};ge.getAll=function(){return Pe.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ge.isScrolling=function(){return!!Zr};ge.snapDirectional=xv;ge.addEventListener=function(s,t){var e=Zo[s]||(Zo[s]=[]);~e.indexOf(t)||e.push(t)};ge.removeEventListener=function(s,t){var e=Zo[s],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};ge.batch=function(s,t){var e=[],i={},a=t.interval||.016,l=t.batchMax||1e9,u=function(h,m){var v=[],_=[],x=te.delayedCall(a,function(){m(v,_),v=[],_=[]}).pause();return function(S){v.length||x.restart(!0),v.push(S.trigger),_.push(S),l<=v.length&&x.progress(1)}},f;for(f in t)i[f]=f.substr(0,2)==="on"&&wi(t[f])&&f!=="onRefreshInit"?u(f,t[f]):t[f];return wi(l)&&(l=l(),oi(ge,"refresh",function(){return l=t.batchMax()})),ff(s).forEach(function(d){var h={};for(f in i)h[f]=i[f];h.trigger=d,e.push(ge.create(h))}),e};var W1=function(t,e,i,a){return e>a?t(a):e<0&&t(0),i>a?(a-e)/(i-e):i<0?e/(e-i):1},cg=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(In.isTouch?" pinch-zoom":""):"none",t===br&&s(an,e)},dd={auto:1,scroll:1},AN=function(t){var e=t.event,i=t.target,a=t.axis,l=(e.changedTouches?e.changedTouches[0]:e).target,u=l._gsap||te.core.getCache(l),f=Ei(),d;if(!u._isScrollT||f-u._isScrollT>2e3){for(;l&&l!==an&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(dd[(d=Xr(l)).overflowY]||dd[d.overflowX]));)l=l.parentNode;u._isScroll=l&&l!==i&&!jo(l)&&(dd[(d=Xr(l)).overflowY]||dd[d.overflowX]),u._isScrollT=f}(u._isScroll||a==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},tT=function(t,e,i,a){return In.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:a=a&&AN,onPress:a,onDrag:a,onScroll:a,onEnable:function(){return i&&oi(ln,In.eventTypes[0],q1,!1,!0)},onDisable:function(){return si(ln,In.eventTypes[0],q1,!0)}})},wN=/(input|label|select|textarea)/i,Y1,q1=function(t){var e=wN.test(t.target.tagName);(e||Y1)&&(t._gsapAllow=!0,Y1=e)},CN=function(t){Do(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,a=e.momentum,l=e.allowNestedScroll,u=e.onRelease,f,d,h=Qi(t.target)||br,m=te.core.globals().ScrollSmoother,v=m&&m.get(),_=Is&&(t.content&&Qi(t.content)||v&&t.content!==!1&&!v.smooth()&&v.content()),x=to(h,ti),S=to(h,ki),b=1,y=(In.isTouch&&Fe.visualViewport?Fe.visualViewport.scale*Fe.visualViewport.width:Fe.outerWidth)/Fe.innerWidth,M=0,A=wi(a)?function(){return a(f)}:function(){return a||2.8},L,w,U=tT(h,t.type,!0,l),O=function(){return w=!1},R=ha,T=ha,D=function(){d=xa(h,ti),T=Xu(Is?1:0,d),i&&(R=Xu(0,xa(h,ki))),L=Xo},k=function(){_._gsap.y=zu(parseFloat(_._gsap.y)+x.offset)+"px",_.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(_._gsap.y)+", 0, 1)",x.offset=x.cacheID=0},I=function(){if(w){requestAnimationFrame(O);var tt=zu(f.deltaY/2),rt=T(x.v-tt);if(_&&rt!==x.v+x.offset){x.offset=rt-x.v;var G=zu((parseFloat(_&&_._gsap.y)||0)-x.offset);_.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+G+", 0, 1)",_._gsap.y=G+"px",x.cacheID=Be.cache,rs()}return!0}x.offset&&k(),w=!0},V,$,Z,Y,z=function(){D(),V.isActive()&&V.vars.scrollY>d&&(x()>d?V.progress(1)&&x(d):V.resetTo("scrollY",d))};return _&&te.set(_,{y:"+=0"}),t.ignoreCheck=function(B){return Is&&B.type==="touchmove"&&I()||b>1.05&&B.type!=="touchstart"||f.isGesturing||B.touches&&B.touches.length>1},t.onPress=function(){w=!1;var B=b;b=zu((Fe.visualViewport&&Fe.visualViewport.scale||1)/y),V.pause(),B!==b&&cg(h,b>1.01?!0:i?!1:"x"),$=S(),Z=x(),D(),L=Xo},t.onRelease=t.onGestureStart=function(B,tt){if(x.offset&&k(),!tt)Y.restart(!0);else{Be.cache++;var rt=A(),G,F;i&&(G=S(),F=G+rt*.05*-B.velocityX/.227,rt*=W1(S,G,F,xa(h,ki)),V.vars.scrollX=R(F)),G=x(),F=G+rt*.05*-B.velocityY/.227,rt*=W1(x,G,F,xa(h,ti)),V.vars.scrollY=T(F),V.invalidate().duration(rt).play(.01),(Is&&V.vars.scrollY>=d||G>=d-1)&&te.to({},{onUpdate:z,duration:rt})}u&&u(B)},t.onWheel=function(){V._ts&&V.pause(),Ei()-M>1e3&&(L=0,M=Ei())},t.onChange=function(B,tt,rt,G,F){if(Xo!==L&&D(),tt&&i&&S(R(G[2]===tt?$+(B.startX-B.x):S()+tt-G[1])),rt){x.offset&&k();var Q=F[2]===rt,_t=Q?Z+B.startY-B.y:x()+rt-F[1],Mt=T(_t);Q&&_t!==Mt&&(Z+=Mt-_t),x(Mt)}(rt||tt)&&rs()},t.onEnable=function(){cg(h,i?!1:"x"),ge.addEventListener("refresh",z),oi(Fe,"resize",z),x.smooth&&(x.target.style.scrollBehavior="auto",x.smooth=S.smooth=!1),U.enable()},t.onDisable=function(){cg(h,!0),si(Fe,"resize",z),ge.removeEventListener("refresh",z),U.kill()},t.lockAxis=t.lockAxis!==!1,f=new In(t),f.iOS=Is,Is&&!x()&&x(1),Is&&te.ticker.add(ha),Y=f._dc,V=te.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:$E(x,x(),function(){return V.pause()})},onUpdate:rs,onComplete:Y.vars.onComplete}),f};ge.sort=function(s){if(wi(s))return Pe.sort(s);var t=Fe.pageYOffset||0;return ge.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Fe.innerHeight}),Pe.sort(s||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};ge.observe=function(s){return new In(s)};ge.normalizeScroll=function(s){if(typeof s>"u")return Hi;if(s===!0&&Hi)return Hi.enable();if(s===!1){Hi&&Hi.kill(),Hi=s;return}var t=s instanceof In?s:CN(s);return Hi&&Hi.target===t.target&&Hi.kill(),jo(t.target)&&(Hi=t),t};ge.core={_getVelocityProp:v_,_inputObserver:tT,_scrollers:Be,_proxies:Ea,bridge:{ss:function(){Zr||Ko("scrollStart"),Zr=Ei()},ref:function(){return bi}}};VE()&&te.registerPlugin(ge);let j1=typeof document<"u"?Ce.useLayoutEffect:Ce.useEffect,Z1=s=>s&&!Array.isArray(s)&&typeof s=="object",pd=[],RN={},eT=Ke;const Ca=(s,t=pd)=>{let e=RN;Z1(s)?(e=s,s=null,t="dependencies"in e?e.dependencies:pd):Z1(t)&&(e=t,t="dependencies"in e?e.dependencies:pd),s&&typeof s!="function"&&console.warn("First parameter must be a function or config object");const{scope:i,revertOnUpdate:a}=e,l=Ce.useRef(!1),u=Ce.useRef(eT.context(()=>{},i)),f=Ce.useRef(h=>u.current.add(null,h)),d=t&&t.length&&!a;return d&&j1(()=>(l.current=!0,()=>u.current.revert()),pd),j1(()=>{if(s&&u.current.add(s,i),!d||!l.current)return()=>u.current.revert()},t),{context:u.current,contextSafe:f.current}};Ca.register=s=>{eT=s};Ca.headless=!0;var K1="1.3.21";function nT(s,t,e){return Math.max(s,Math.min(t,e))}function DN(s,t,e){return(1-e)*s+e*t}function LN(s,t,e,i){return DN(s,t,1-Math.exp(-e*i))}function UN(s,t){return(s%t+t)%t}var NN=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;const e=nT(0,this.currentTime/this.duration,1);t=e>=1;const i=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=LN(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:i,easing:a,onStart:l,onUpdate:u}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=i,this.easing=a,this.currentTime=0,this.isRunning=!0,l?.(),this.onUpdate=u}};function ON(s,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,i)},t)}}var PN=class{width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;constructor(s,t,{autoResize:e=!0,debounce:i=250}={}){this.wrapper=s,this.content=t,e&&(this.debouncedResize=ON(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},iT=class{events={};emit(s,...t){const e=this.events[s]||[];for(let i=0,a=e.length;i<a;i++)e[i]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}};const zN=100/6,Bs={passive:!1};function Q1(s,t){return s===1?zN:s===2?t:1}var FN=class{touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new iT;constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Bs),this.element.addEventListener("touchstart",this.onTouchStart,Bs),this.element.addEventListener("touchmove",this.onTouchMove,Bs),this.element.addEventListener("touchend",this.onTouchEnd,Bs)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Bs),this.element.removeEventListener("touchstart",this.onTouchStart,Bs),this.element.removeEventListener("touchmove",this.onTouchMove,Bs),this.element.removeEventListener("touchend",this.onTouchEnd,Bs)}onTouchStart=s=>{const{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})};onTouchMove=s=>{const{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,i=-(t-this.touchStart.x)*this.options.touchMultiplier,a=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:a},this.emitter.emit("scroll",{deltaX:i,deltaY:a,event:s})};onTouchEnd=s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})};onWheel=s=>{let{deltaX:t,deltaY:e,deltaMode:i}=s;const a=Q1(i,this.window.width),l=Q1(i,this.window.height);t*=a,e*=l,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}};const J1=s=>Math.min(1,1.001-2**(-10*s));var BN=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new NN;emitter=new iT;dimensions;virtualScroll;constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:i=!0,syncTouch:a=!1,syncTouchLerp:l=.075,touchInertiaExponent:u=1.7,duration:f,easing:d,lerp:h=.1,infinite:m=!1,orientation:v="vertical",gestureOrientation:_=v==="horizontal"?"both":"vertical",touchMultiplier:x=1,wheelMultiplier:S=1,autoResize:b=!0,prevent:y,virtualScroll:M,overscroll:A=!0,autoRaf:L=!1,anchors:w=!1,autoToggle:U=!1,allowNestedScroll:O=!1,__experimental__naiveDimensions:R=!1,naiveDimensions:T=R,stopInertiaOnNavigate:D=!1}={}){window.lenisVersion=K1,window.lenis||(window.lenis={}),window.lenis.version=K1,v==="horizontal"&&(window.lenis.horizontal=!0),a===!0&&(window.lenis.touch=!0),(!s||s===document.documentElement)&&(s=window),typeof f=="number"&&typeof d!="function"?d=J1:typeof d=="function"&&typeof f!="number"&&(f=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:i,syncTouch:a,syncTouchLerp:l,touchInertiaExponent:u,duration:f,easing:d,lerp:h,infinite:m,gestureOrientation:_,orientation:v,touchMultiplier:x,wheelMultiplier:S,autoResize:b,prevent:y,virtualScroll:M,overscroll:A,autoRaf:L,anchors:w,autoToggle:U,allowNestedScroll:O,naiveDimensions:T,stopInertiaOnNavigate:D},this.dimensions=new PN(s,t,{autoResize:b}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new FN(e,{touchMultiplier:x,wheelMultiplier:S}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}onScrollEnd=s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()};setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}onClick=s=>{const t=s.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),e=new URL(window.location.href);if(this.options.anchors){const i=t.find(a=>e.host===a.host&&e.pathname===a.pathname&&a.hash);if(i){const a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,l=`#${i.hash.split("#")[1]}`;this.scrollTo(l,a);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>e.host===i.host&&e.pathname!==i.pathname)){this.reset();return}};onPointerDown=s=>{s.button===1&&this.reset()};onVirtualScroll=s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:t,deltaY:e,event:i}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const a=i.type.includes("touch"),l=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const u=t===0&&e===0;if(this.options.syncTouch&&a&&i.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const f=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(u||f)return;let d=i.composedPath();d=d.slice(0,d.indexOf(this.rootElement));const h=this.options.prevent,m=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(d.find(S=>S instanceof HTMLElement&&(typeof h=="function"&&h?.(S)||S.hasAttribute?.("data-lenis-prevent")||m==="vertical"&&S.hasAttribute?.("data-lenis-prevent-vertical")||m==="horizontal"&&S.hasAttribute?.("data-lenis-prevent-horizontal")||a&&S.hasAttribute?.("data-lenis-prevent-touch")||l&&S.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(S,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&a||this.options.smoothWheel&&l)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let v=e;this.options.gestureOrientation==="both"?v=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(v=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const _=a&&this.options.syncTouch,x=a&&i.type==="touchend";x&&(v=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+v,{programmatic:!1,..._?{lerp:x?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=s=>{const t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(s,{offset:t=0,immediate:e=!1,lock:i=!1,programmatic:a=!0,lerp:l=a?this.options.lerp:void 0,duration:u=a?this.options.duration:void 0,easing:f=a?this.options.easing:void 0,onStart:d,onComplete:h,force:m=!1,userData:v}={}){if((this.isStopped||this.isLocked)&&!m)return;let _=s,x=t;if(typeof _=="string"&&["top","left","start","#"].includes(_))_=0;else if(typeof _=="string"&&["bottom","right","end"].includes(_))_=this.limit;else{let S=null;if(typeof _=="string"?(S=document.querySelector(_),S||(_==="#top"?_=0:console.warn("Lenis: Target not found",_))):_ instanceof HTMLElement&&_?.nodeType&&(S=_),S){if(this.options.wrapper!==window){const w=this.rootElement.getBoundingClientRect();x-=this.isHorizontal?w.left:w.top}const b=S.getBoundingClientRect(),y=getComputedStyle(S),M=this.isHorizontal?Number.parseFloat(y.scrollMarginLeft):Number.parseFloat(y.scrollMarginTop),A=getComputedStyle(this.rootElement),L=this.isHorizontal?Number.parseFloat(A.scrollPaddingLeft):Number.parseFloat(A.scrollPaddingTop);_=(this.isHorizontal?b.left:b.top)+this.animatedScroll-(Number.isNaN(M)?0:M)-(Number.isNaN(L)?0:L)}}if(typeof _=="number"){if(_+=x,_=Math.round(_),this.options.infinite){if(a){this.targetScroll=this.animatedScroll=this.scroll;const S=_-this.animatedScroll;S>this.limit/2?_-=this.limit:S<-this.limit/2&&(_+=this.limit)}}else _=nT(0,_,this.limit);if(_===this.targetScroll){d?.(this),h?.(this);return}if(this.userData=v??{},e){this.animatedScroll=this.targetScroll=_,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),h?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}a||(this.targetScroll=_),typeof u=="number"&&typeof f!="function"?f=J1:typeof f=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,_,{duration:u,easing:f,lerp:l,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",d?.(this)},onUpdate:(S,b)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=S-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=S,this.setScroll(this.scroll),a&&(this.targetScroll=S),b||this.emit(),b&&(this.reset(),this.emit(),h?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){const i=Date.now();s._lenis||(s._lenis={});const a=s._lenis;let l,u,f,d,h,m,v,_,x,S;if(i-(a.time??0)>2e3){a.time=Date.now();const O=window.getComputedStyle(s);if(a.computedStyle=O,l=["auto","overlay","scroll"].includes(O.overflowX),u=["auto","overlay","scroll"].includes(O.overflowY),h=["auto"].includes(O.overscrollBehaviorX),m=["auto"].includes(O.overscrollBehaviorY),a.hasOverflowX=l,a.hasOverflowY=u,!(l||u))return!1;v=s.scrollWidth,_=s.scrollHeight,x=s.clientWidth,S=s.clientHeight,f=v>x,d=_>S,a.isScrollableX=f,a.isScrollableY=d,a.scrollWidth=v,a.scrollHeight=_,a.clientWidth=x,a.clientHeight=S,a.hasOverscrollBehaviorX=h,a.hasOverscrollBehaviorY=m}else f=a.isScrollableX,d=a.isScrollableY,l=a.hasOverflowX,u=a.hasOverflowY,v=a.scrollWidth,_=a.scrollHeight,x=a.clientWidth,S=a.clientHeight,h=a.hasOverscrollBehaviorX,m=a.hasOverscrollBehaviorY;if(!(l&&f||u&&d))return!1;const b=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let y,M,A,L,w,U;if(b==="horizontal")y=Math.round(s.scrollLeft),M=v-x,A=t,L=l,w=f,U=h;else if(b==="vertical")y=Math.round(s.scrollTop),M=_-S,A=e,L=u,w=d,U=m;else return!1;return!U&&(y>=M||y<=0)?!0:(A>0?y<M:y>0)&&L&&w}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?UN(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};Ke.registerPlugin(ge,Ca);const $1={spacingX:45,maxDim:18,camZ:30,wallAngleY:-.25,scrollDistance:1600},Zl=[{number:"01 / Illustrations",title:["Portrait","Study"],description:"Exploring the interplay between physical presence and emotional transparency. The soft textures invite the viewer to look closer, revealing layers of complexity.",meta:{Medium:"Digital on Paper",Year:"2023"},image:"/art/portfolio 1 .jpg",aspect:2613/3366},{number:"02 / Illustrations",title:["Skeleton","Garden"],description:"An environment study merging anatomical forms with organic landscapes. Decay becomes the foundation for new growth — a meditation on cycles.",meta:{Medium:"Ink & Digital",Year:"2023"},image:"/art/skeleton boi environment .jpg",aspect:6e3/3455},{number:"03 / Live Drawing",title:["Live","Drawing"],description:"Captured in real-time, these gesture studies embrace imperfection as expression. Each mark carries the urgency of the moment it was made.",meta:{Medium:"Charcoal & Pastel",Year:"2024"},image:"/art/live rawing 2 .jpg",aspect:2211/3776},{number:"04 / Illustrations",title:["Untitled","Study"],description:"A study in composition and contrast, balancing organic form with graphic precision. The work exists at the intersection of illustration and fine art.",meta:{Medium:"Mixed Media",Year:"2021"},image:"/art/153805961_455158155844242_7659736875677541970_n.jpg",aspect:1280/737}],Kl={hero:"#FAF8F5",about:"#F0EAE0",gallery:"#f7f7f5",projects:"#2D2926",revival:"#1a1816",contact:"#c8c0b5"};function IN(){Ce.useEffect(()=>{const s=new BN({lerp:.1,smoothWheel:!0,autoRaf:!1});s.on("scroll",ge.update);const t=e=>{s.raf(e*1e3)};return Ke.ticker.add(t),Ke.ticker.lagSmoothing(0),()=>{Ke.ticker.remove(t),s.destroy()}},[])}function no(s=768){const[t,e]=Ce.useState(window.innerWidth<=s);return Ce.useEffect(()=>{const i=()=>e(window.innerWidth<=s);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[s]),t}function HN(){Ca(()=>{Ke.set("body",{backgroundColor:Kl.hero}),[["#hero",Kl.about],["#about",Kl.gallery],["#gallery",Kl.projects],["#projects",Kl.revival],["#revival",Kl.contact]].forEach(([t,e])=>{Ke.to("body",{backgroundColor:e,immediateRender:!1,scrollTrigger:{trigger:t,start:"bottom-=300 center",end:"bottom top",scrub:1.2}})})})}function GN(){const s=no();return ht.jsxs("div",{style:{position:"fixed",top:s?16:32,left:s?16:40,fontFamily:"Georgia, 'Times New Roman', serif",fontWeight:400,letterSpacing:"0.08em",fontSize:"0.7rem",zIndex:100,color:"#2d2926"},children:["chloe",ht.jsx("span",{style:{color:"#7a9e9e"},children:"astrid"}),"chan"]})}function VN(){const s=no(),t=Ce.useRef(null),e=Ce.useRef([]);Ce.useEffect(()=>{const l=[0,.12,.25,.42,.6,.82];function u(){const f=document.documentElement.scrollHeight-window.innerHeight,d=f>0?Math.min(1,window.scrollY/f):0;t.current&&(t.current.style.height=`${d*100}%`);let h=0;for(let m=l.length-1;m>=0;m--)if(d>=l[m]){h=m;break}e.current.forEach((m,v)=>{m&&(m.style.color=v===h?"rgba(45,41,38,0.8)":"rgba(45,41,38,0.2)")})}return window.addEventListener("scroll",u,{passive:!0}),u(),()=>window.removeEventListener("scroll",u)},[]);const i=["Hero","About","Gallery","Projects","Revival","Contact"],a=["0%","14%","30%","48%","68%","90%"];return ht.jsxs("div",{style:{position:"fixed",left:28,top:"50%",transform:"translateY(-50%)",width:1,height:120,background:"rgba(45,41,38,0.12)",zIndex:100,mixBlendMode:"difference",filter:"invert(1) grayscale(1)",display:s?"none":void 0},children:[ht.jsx("div",{ref:t,style:{position:"absolute",top:0,left:0,width:"100%",height:"0%",background:"rgba(45,41,38,0.5)",transition:"height 0.15s ease-out"}}),i.map((l,u)=>ht.jsx("span",{ref:f=>{e.current[u]=f},style:{position:"absolute",left:10,top:a[u],fontFamily:"monospace",fontSize:9,letterSpacing:"0.1em",textTransform:"uppercase",whiteSpace:"nowrap",color:"rgba(45,41,38,0.2)",transition:"color 0.3s ease"},children:l},l))]})}const kN=[{text:"chloe",color:"#2D2926"},{text:"astrid",color:"#7a9e9e"},{text:"chan",color:"#2D2926"}];function XN(){const s=no(),t=Ce.useRef(null),e=Ce.useRef(null),i=Ce.useRef(null),a=Ce.useRef(null);return Ce.useEffect(()=>{const l=i.current,u=e.current;if(!l||!u)return;const f=l,d=u;function h(v){const _=f.getBoundingClientRect(),x=(v.clientX-_.left)/_.width*100,S=(v.clientY-_.top)/_.height*100;d.style.background=`radial-gradient(circle at ${x}% ${S}%, rgba(122,158,158,0.18) 0%, transparent 60%)`}function m(){d.style.background="transparent"}return l.addEventListener("mousemove",h),l.addEventListener("mouseleave",m),()=>{l.removeEventListener("mousemove",h),l.removeEventListener("mouseleave",m)}},[]),Ca(()=>{if(!t.current)return;const l=t.current,u=Ke.utils.toArray(".hero-char",l);let f=!0;const d=Ke.timeline({paused:!0});d.fromTo(".hero-name-block",{y:0,opacity:1,filter:"blur(0px)"},{y:-180,opacity:0,filter:"blur(6px)",duration:1,ease:"none"},0),d.fromTo(".hero-sub",{y:0,opacity:1},{y:-120,opacity:0,duration:.85,ease:"none"},.05),d.fromTo(".hero-cta",{y:0,opacity:1},{y:-80,opacity:0,duration:.7,ease:"none"},.08),d.fromTo(".hero-lens",{y:0,opacity:1,scale:1,filter:"blur(0px)"},{y:120,opacity:0,scale:1.04,filter:"blur(12px)",duration:1,ease:"none"},0),d.fromTo(".hero-brush",{y:0,opacity:.55,filter:"blur(0px)",rotate:0},{y:-60,opacity:0,filter:"blur(8px)",duration:.9,ease:"none"},.05),d.fromTo(".hero-strokes",{y:0,opacity:.08,scale:1},{y:25,opacity:0,duration:.85,ease:"none"},0),d.fromTo(".hero-deco-line",{scaleX:1,opacity:1},{scaleX:.5,opacity:0,duration:.6,ease:"none"},0),ge.create({trigger:l,start:"top top",end:s?"+=1600":"+=1800",scrub:!0,pin:!0,anticipatePin:1,id:"hero",onUpdate:m=>{f&&m.progress>.005&&a.current&&(a.current.progress(1).kill(),a.current=null,f=!1),f||d.progress(m.progress)}}),Ke.set(".hero-strokes",{opacity:0,scale:1.15,filter:"blur(20px)"}),Ke.set(".hero-lens",{opacity:0,scale:.92,filter:"blur(40px)",y:80}),Ke.set(".hero-brush",{opacity:0,y:60,filter:"blur(24px)",rotate:-3}),Ke.set(u,{yPercent:140}),Ke.set(".hero-name-wrap",{opacity:0,filter:"blur(8px)"}),Ke.set(".hero-sub",{opacity:0,y:30,filter:"blur(6px)"}),Ke.set(".hero-cta",{opacity:0,y:25,filter:"blur(4px)"}),Ke.set(".hero-deco-line",{scaleX:0,opacity:0});const h=Ke.timeline({delay:.2});a.current=h,h.to(".hero-strokes",{opacity:.08,scale:1,filter:"blur(0px)",duration:2.5,ease:"power1.out"},0),h.to(".hero-lens",{opacity:1,y:0,scale:1,filter:"blur(0px)",duration:2.2,ease:"power3.out"},.15),h.to(".hero-brush",{opacity:.55,y:0,filter:"blur(0px)",rotate:0,duration:1.8,ease:"power2.out"},.3),h.to(".hero-deco-line",{scaleX:1,opacity:1,duration:1.6,ease:"power3.inOut"},.5),h.to(".hero-name-wrap",{opacity:1,filter:"blur(0px)",duration:.8,ease:"power2.out"},.5),h.to(u,{yPercent:0,duration:1.4,ease:"power4.out",stagger:{amount:.6,from:"start"}},.5),h.to(".hero-sub",{opacity:1,y:0,filter:"blur(0px)",duration:1,ease:"power2.out"},1),h.to(".hero-cta",{opacity:1,y:0,filter:"blur(0px)",duration:.8,ease:"power2.out"},1.2),h.eventCallback("onComplete",()=>{f=!1,a.current=null})},{scope:t}),ht.jsxs("section",{ref:t,id:"hero",style:{height:"100vh",position:"relative",overflow:"hidden"},children:[ht.jsx("div",{className:"hero-strokes",style:{position:"absolute",right:"-5%",top:"10%",width:"55%",height:"80%",backgroundImage:"url(/hero/strokes.png)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center",willChange:"transform, opacity"}}),ht.jsx("div",{className:"hero-brush",style:{position:"absolute",right:"28%",bottom:"8%",width:"clamp(60px, 8vw, 120px)",willChange:"transform, opacity, filter"},children:ht.jsx("img",{src:"/hero/brush.png",alt:"",style:{width:"100%",height:"auto",display:"block"},draggable:!1})}),ht.jsxs("div",{ref:i,className:"hero-lens",style:{position:"absolute",right:s?"8%":"10%",top:s?"auto":"50%",bottom:s?"12%":"auto",transform:s?"none":"translateY(-50%)",width:s?"clamp(140px, 36vw, 220px)":"clamp(200px, 24vw, 380px)",cursor:"default",willChange:"transform, opacity, filter"},children:[ht.jsx("img",{src:"/hero/lens.png",alt:"Camera lens",style:{width:"100%",height:"auto",display:"block"},draggable:!1}),ht.jsx("div",{ref:e,style:{position:"absolute",inset:0,borderRadius:"inherit",pointerEvents:"none",transition:"background 0.15s ease-out"}})]}),ht.jsxs("div",{className:"hero-name-block",style:{position:"absolute",left:s?"6%":"8%",top:s?"18%":"50%",transform:s?"none":"translateY(-55%)",zIndex:2,willChange:"transform, opacity, filter"},children:[ht.jsx("h1",{className:"hero-name-wrap",style:{fontSize:"clamp(2.5rem, 5.8vw, 5.5rem)",fontFamily:"Georgia, 'Times New Roman', serif",fontWeight:300,lineHeight:1,letterSpacing:"-0.01em",overflow:"hidden",margin:0},children:kN.map((l,u)=>ht.jsx("span",{style:{color:l.color},children:l.text.split("").map((f,d)=>ht.jsx("span",{className:"hero-char",style:{display:"inline-block",willChange:"transform"},children:f},`${u}-${d}`))},u))}),ht.jsx("p",{className:"hero-sub",style:{marginTop:"clamp(1.2rem, 2.5vw, 2rem)",fontSize:"0.65rem",textTransform:"uppercase",letterSpacing:"0.18em",color:"#6B6560",lineHeight:1.7,willChange:"transform, opacity"},children:"Multimedia Artist & Creative Producer"}),ht.jsxs("div",{className:"hero-cta",style:{marginTop:"1.8rem",display:"flex",gap:"2rem",willChange:"transform, opacity"},children:[ht.jsx("span",{style:{fontSize:"0.65rem",letterSpacing:"0.12em",textTransform:"uppercase",cursor:"pointer",borderBottom:"1px solid #2D2926",paddingBottom:3},children:"View Work"}),ht.jsx("span",{style:{fontSize:"0.65rem",letterSpacing:"0.12em",textTransform:"uppercase",cursor:"pointer",color:"#6B6560"},children:"Contact"})]})]}),ht.jsx("div",{className:"hero-deco-line",style:{position:"absolute",bottom:"18%",left:"8%",right:"8%",height:"0.5px",background:"#E5E0DB",transformOrigin:"left center",zIndex:1,willChange:"transform, opacity"}})]})}function WN(){const s=no(),t=Ce.useRef(null);return Ca(()=>{if(!t.current)return;const e=Ke.timeline();e.fromTo(".about-heading",{opacity:0,y:50,filter:"blur(14px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.3},0),e.fromTo(".about-body",{opacity:0,y:35,filter:"blur(8px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.35},.12),e.fromTo(".about-box",{opacity:0,y:80,scale:.95,filter:"blur(6px)"},{opacity:1,y:0,scale:1,filter:"blur(0px)",duration:.5},.08),e.to(".about-heading",{y:-50,opacity:0,duration:.25},.7),e.to(".about-body",{y:-35,opacity:0,duration:.2},.72),e.to(".about-box",{y:-70,opacity:0,scale:.97,duration:.25},.68),ge.create({animation:e,trigger:t.current,start:"top top",end:s?"+=1800":"+=2000",scrub:1,pin:!0,anticipatePin:1,id:"about"})},{scope:t}),ht.jsx("section",{ref:t,id:"about",style:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:ht.jsxs("div",{style:{display:"grid",gridTemplateColumns:s?"1fr":"1fr 1fr",gap:s?"1.5rem":"3rem",maxWidth:900,width:"100%",padding:s?"0 1.5rem":"0 2rem"},children:[ht.jsxs("div",{children:[ht.jsx("h2",{className:"about-heading",style:{fontSize:"clamp(2rem, 4vw, 3rem)",fontWeight:300,fontFamily:"Georgia, serif",opacity:0,willChange:"transform, opacity, filter"},children:"About"}),ht.jsx("p",{className:"about-body",style:{marginTop:"1rem",lineHeight:1.7,fontWeight:300,opacity:0,willChange:"transform, opacity, filter"},children:"Hong Kong-based multimedia artist working across film, illustration, and interactive media. Bridging traditional craft with digital storytelling."})]}),!s&&ht.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:ht.jsx("div",{className:"about-box",style:{width:200,height:260,background:"linear-gradient(145deg, #ccc 0%, #b8b0a8 100%)",opacity:0,willChange:"transform, opacity, filter"}})})]})})}function YN(){const s=no(),t=Ce.useRef(null),e=Ce.useRef(null),i=Ce.useRef(0),a=Ce.useRef({x:0,y:0});return Ca(()=>{if(!t.current)return;const l={progress:0},u=Ke.to(l,{progress:1,ease:"none",onUpdate:()=>{i.current=l.progress}});ge.create({animation:u,trigger:t.current,start:"top top",end:`+=${s?1600:$1.scrollDistance}`,scrub:!0,pin:!0,anticipatePin:1,id:"gallery",snap:{snapTo:1/(Zl.length-1),duration:{min:.15,max:.35},ease:"power2.out",directional:!1}})},{scope:t}),Ce.useEffect(()=>{const l=e.current;if(!l)return;const u=$1,f=new zd;f.background=new ye(16250869),f.fog=new X_(16250869,10,120);const d=l.clientWidth,h=l.clientHeight,m=new Ti(45,d/h,.1,1e3);m.position.set(0,0,u.camZ);const v=new q_({antialias:!0,alpha:!1});v.setSize(d,h),v.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(v.domElement),f.add(new wb(16777215,.65));const _=new Ab(16777215,.45);_.position.set(10,20,10),f.add(_);const x=new Po;x.rotation.y=s?0:u.wallAngleY,x.position.x=s?0:13,f.add(x);const S=new bb,b=[],y=[],M=[];Zl.forEach((I,V)=>{const $=new Po;$.position.set(V*u.spacingX,0,0);let Z,Y;I.aspect>=1?(Z=u.maxDim,Y=u.maxDim/I.aspect):(Y=u.maxDim,Z=u.maxDim*I.aspect);const z=new ba(Z,Y);y.push(z);const B=S.load(I.image);b.push(B);const tt=new mc({map:B});M.push(tt),$.add(new li(z,tt));const rt=new E2(z),G=new $g({color:2236962});M.push(G),$.add(new PM(rt,G));const F=new ba(Z,Y);y.push(F);const Q=new mc({color:0,transparent:!0,opacity:.12});M.push(Q);const _t=new li(F,Q);_t.position.set(.8,-.8,-.5),$.add(_t);const Mt=Y/2+2,Lt=[new nt(-45/2,Mt,-1),new nt(u.spacingX/2,Mt,-1),new nt(-45/2,-Mt,-1),new nt(u.spacingX/2,-Mt,-1)],it=new Lr().setFromPoints(Lt);y.push(it);const gt=new $g({color:14540253});M.push(gt),$.add(new PM(it,gt)),x.add($)});function A(I){a.current.x=I.clientX/window.innerWidth*2-1,a.current.y=-(I.clientY/window.innerHeight)*2+1}window.addEventListener("mousemove",A);const L=t.current?.querySelectorAll(".slide-info")??[];let w=-1;requestAnimationFrame(()=>{L[0]&&(L[0].style.opacity="1",L[0].style.transform="translateY(0)"),w=0});let U;const O=s?0:8;let R=O;const T=(Zl.length-1)*u.spacingX;function D(){R=O+i.current*T;const V=R*Math.cos(u.wallAngleY),$=R*Math.sin(u.wallAngleY);m.position.x=V,m.position.z=u.camZ-$,m.rotation.x=a.current.y*.035,m.rotation.y=-a.current.x*.035;const Z=Math.round(i.current*(Zl.length-1));Z!==w&&Z>=0&&Z<Zl.length&&(L.forEach((Y,z)=>{z===Z?(Y.style.opacity="1",Y.style.transform="translateY(0)"):(Y.style.opacity="0",Y.style.transform="translateY(20px)")}),w=Z),v.render(f,m),U=requestAnimationFrame(D)}D();function k(){if(!l)return;const I=l.clientWidth,V=l.clientHeight;m.aspect=I/V,m.updateProjectionMatrix(),v.setSize(I,V)}return window.addEventListener("resize",k),()=>{cancelAnimationFrame(U),window.removeEventListener("mousemove",A),window.removeEventListener("resize",k),b.forEach(I=>I.dispose()),M.forEach(I=>I.dispose()),y.forEach(I=>I.dispose()),v.dispose(),l.contains(v.domElement)&&l.removeChild(v.domElement)}},[]),ht.jsxs("section",{ref:t,id:"gallery",style:{height:"100vh",position:"relative",overflow:"hidden",background:"#f7f7f5"},children:[ht.jsx("div",{ref:e,style:{position:"absolute",top:0,left:0,right:0,bottom:s?"45%":0,zIndex:1}}),ht.jsx("div",{style:{position:"absolute",inset:0,zIndex:2,pointerEvents:"none"},children:Zl.map((l,u)=>ht.jsxs("div",{className:"slide-info",style:{position:"absolute",top:s?"58%":"22%",bottom:"auto",left:s?"5%":"7%",width:s?"90%":"30%",maxWidth:s?void 0:420,opacity:0,transform:"translateY(20px)",transition:"opacity 0.8s ease, transform 0.8s ease-out",pointerEvents:"auto"},children:[ht.jsx("span",{style:{display:"inline-block",fontSize:"0.65rem",textTransform:"uppercase",letterSpacing:3,color:"#999",borderBottom:"1px solid #ddd",paddingBottom:5,marginBottom:"1.2rem"},children:l.number}),ht.jsx("h2",{style:{fontFamily:"Georgia, 'Times New Roman', serif",fontStyle:"italic",fontSize:"clamp(2.5rem, 4vw, 4rem)",fontWeight:400,margin:"0.5rem 0 1.5rem",lineHeight:1,color:"#0d0d0d"},children:l.title.map((f,d)=>ht.jsxs(Ce.Fragment,{children:[d>0&&ht.jsx("br",{}),f]},d))}),ht.jsx("p",{style:{fontSize:"0.95rem",fontWeight:300,lineHeight:1.8,color:"#444",marginBottom:"2rem"},children:l.description}),ht.jsx("div",{style:{display:"grid",gridTemplateColumns:"100px 1fr",rowGap:"0.7rem",borderTop:"1px solid #e0e0e0",paddingTop:"1.2rem"},children:Object.entries(l.meta).map(([f,d])=>ht.jsxs(Ce.Fragment,{children:[ht.jsx("span",{style:{fontSize:"0.6rem",textTransform:"uppercase",letterSpacing:1.5,color:"#888",alignSelf:"center"},children:f}),ht.jsx("span",{style:{fontFamily:"Georgia, serif",fontStyle:"italic",fontSize:"1rem",color:"#222"},children:d})]},f))})]},u))}),ht.jsx("div",{style:{position:"absolute",bottom:40,left:"50%",transform:"translateX(-50%)",zIndex:2,fontSize:"0.65rem",textTransform:"uppercase",letterSpacing:2,color:"#aaa"},children:"Scroll to explore"})]})}const Ru=[{id:"revival",title:"Revival",category:"Film & Production",description:"A short film exploring themes of identity and creative rebirth through cinematic storytelling and 3D visual effects.",year:"2024",medium:"Film / 3D",image:"/projects/revival.jpg"},{id:"cultural-bloom",title:"Cultural Bloom",category:"VR Exhibition",description:"An immersive virtual reality exhibition celebrating cultural diversity through interactive art installations.",year:"2022",medium:"VR / Unity",image:"/projects/cultural-bloom.jpg"},{id:"resurgence",title:"Resurgence",category:"Gallery Curation",description:"A curated gallery exhibition showcasing emerging artists at the intersection of traditional and digital media.",year:"2023",medium:"Curation",image:"/projects/resurgence.jpg"},{id:"encore-masque",title:"Encore! Masque",category:"Card Game",description:"A narrative-driven card game blending theatrical masquerade themes with strategic gameplay mechanics.",year:"2023",medium:"Game Design",image:"/projects/encore-masque.jpg"},{id:"camarillo",title:"Camarillo",category:"Educational Game",description:"An interactive educational game teaching environmental awareness through engaging puzzle-based gameplay.",year:"2023",medium:"Game Design",image:"/projects/camarillo.jpg"},{id:"this-is-us",title:"This is Us",category:"Concert & Event",description:"A multimedia concert experience combining live performance with projected visual narratives and audience interaction.",year:"2022",medium:"Event Design",image:"/projects/this-is-us.jpg"},{id:"harmonics",title:"Harmonics",category:"Music Video",description:"A music video exploring the relationship between sound and visual rhythm through experimental cinematography.",year:"2024",medium:"Film / Motion",image:"/projects/harmonics.jpg"},{id:"illustrations",title:"Illustrations",category:"Illustration",description:"A collection of illustration and live drawing works exploring portraiture, gesture, and organic forms.",year:"2021–2024",medium:"Mixed Media",image:"/projects/illustrations.jpg"}],Fi={count:8,anglePer:45,radius:220,cardW:160,cardH:230,tiltX:-8,tiltY:-25},qN=`
.carousel-card {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(0,0,0,0.35);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}
.carousel-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 14px 40px rgba(0,0,0,0.5);
}
`;function tb(s){const e={revival:"revival"}[s]||s,i=document.getElementById(e);i&&i.scrollIntoView({behavior:"smooth"})}function jN(){const s=no(),t=Ce.useRef(null),e=Ce.useRef(null),i=Ce.useRef([]),a=Ce.useRef(null),l=Ce.useRef(null),u=Ce.useRef([]),f=Ce.useRef({angle:0}),d=Ce.useRef(!1),h=Ce.useRef(0),m=Ce.useRef(0);function v(w){const O=(-(w+Fi.tiltY)%360+360)%360;return Math.round(O/Fi.anglePer)%Fi.count}function _(w){const U=v(w);if(i.current.forEach((O,R)=>{O&&(R===U?(O.style.color="#FAF8F5",O.style.opacity="1",O.style.transform="translateX(12px)"):(O.style.color="#6B6560",O.style.opacity="0.5",O.style.transform="translateX(0)"))}),u.current.forEach((O,R)=>{O&&(O.style.opacity=R===U?"1":"0.3",O.style.transform=R===U?"scale(1.3)":"scale(1)")}),U!==m.current){m.current=U;const O=Ru[U],R=a.current;R&&Ke.to(R,{opacity:0,y:8,duration:.12,onComplete:()=>{const D=R.querySelector(".detail-num"),k=R.querySelector(".detail-title"),I=R.querySelector(".detail-cat"),V=R.querySelector(".detail-desc"),$=R.querySelector(".detail-year"),Z=R.querySelector(".detail-medium");D&&(D.textContent=String(U+1).padStart(2,"0")),k&&(k.textContent=O.title),I&&(I.textContent=O.category),V&&(V.textContent=O.description),$&&($.textContent=O.year),Z&&(Z.textContent=O.medium),Ke.to(R,{opacity:1,y:0,duration:.2})}});const T=l.current;T&&Ke.to(T,{opacity:0,y:6,duration:.1,onComplete:()=>{const D=T.querySelector(".m-title"),k=T.querySelector(".m-cat"),I=T.querySelector(".m-desc"),V=T.querySelector(".m-meta");D&&(D.textContent=O.title),k&&(k.textContent=O.category),I&&(I.textContent=O.description),V&&(V.textContent=`${O.year}  —  ${O.medium}`),Ke.to(T,{opacity:1,y:0,duration:.15})}})}}function x(){e.current&&(e.current.style.transform=`rotateX(${Fi.tiltX}deg) rotateY(${Fi.tiltY+f.current.angle}deg)`),_(f.current.angle)}Ca(()=>{if(!t.current)return;const w=Ke.timeline({paused:!0});w.fromTo(".projects-left",{opacity:0,x:-30,filter:"blur(10px)"},{opacity:1,x:0,filter:"blur(0px)",duration:1},0),w.fromTo(".carousel-stage-wrap",{opacity:0,scale:.9,filter:"blur(16px)"},{opacity:1,scale:1,filter:"blur(0px)",duration:1},.1),w.fromTo(".detail-panel",{opacity:0,x:20,filter:"blur(8px)"},{opacity:1,x:0,filter:"blur(0px)",duration:1},.2);const U=(Fi.count-1)*Fi.anglePer;ge.create({trigger:t.current,start:"top top",end:"+=3000",pin:!0,anticipatePin:1,id:"projects",onUpdate:O=>{w.progress(Math.min(1,O.progress/.15));const R=Math.max(0,(O.progress-.15)/.85);h.current=25-R*U,d.current||(f.current.angle=h.current,x())}})},{scope:t});function S(w){d.current=!0,Ke.killTweensOf(f.current);const U=f.current.angle,R=((-w*Fi.anglePer-Fi.tiltY-U)%360+540)%360-180;Ke.to(f.current,{angle:U+R,duration:.9,ease:"power3.inOut",onUpdate:x})}function b(){d.current=!1,Ke.killTweensOf(f.current),Ke.to(f.current,{angle:h.current,duration:.6,ease:"power2.out",onUpdate:x})}const y=Ru[0],M=120,A=170,L=160;return ht.jsxs("section",{ref:t,id:"projects",style:{height:"100vh",position:"relative",overflow:"hidden",background:"#2D2926"},children:[ht.jsx("style",{children:qN}),!s&&ht.jsxs("div",{className:"projects-left",style:{position:"absolute",left:"5%",top:"50%",transform:"translateY(-50%)",zIndex:2,width:"18%",opacity:0,willChange:"transform, opacity, filter"},children:[ht.jsx("h2",{style:{fontSize:"0.55rem",fontWeight:700,letterSpacing:"0.25em",textTransform:"uppercase",color:"#6B6560",marginBottom:"1.4rem"},children:"Selected Works"}),Ru.map((w,U)=>ht.jsxs("div",{ref:O=>{i.current[U]=O},className:"project-label",onMouseEnter:()=>S(U),onMouseLeave:b,onClick:()=>tb(w.id),style:{display:"flex",alignItems:"baseline",gap:"0.6rem",padding:"0.35rem 0",cursor:"pointer",color:"#6B6560",opacity:.5,transition:"color 0.3s ease, opacity 0.3s ease, transform 0.3s ease",willChange:"transform, opacity"},children:[ht.jsx("span",{style:{fontSize:"0.5rem",fontWeight:600,letterSpacing:"0.08em",fontFamily:"monospace",minWidth:"1.5rem",color:"inherit"},children:String(U+1).padStart(2,"0")}),ht.jsx("span",{style:{fontSize:"0.85rem",fontFamily:"Georgia, 'Times New Roman', serif",fontWeight:400,color:"inherit"},children:w.title})]},w.id))]}),ht.jsx("div",{className:"carousel-stage-wrap",style:{position:"absolute",left:s?0:"18%",right:s?0:"22%",top:0,bottom:s?"60%":0,display:"flex",alignItems:"center",justifyContent:"center",perspective:s?"800px":"1000px",perspectiveOrigin:"50% 55%",opacity:0,willChange:"transform, opacity, filter"},children:ht.jsx("div",{ref:e,style:{width:s?M:Fi.cardW,height:s?A:Fi.cardH,transformStyle:"preserve-3d",position:"relative"},children:Ru.map((w,U)=>ht.jsx("div",{style:{position:"absolute",width:s?M:Fi.cardW,height:s?A:Fi.cardH,transform:`rotateY(${U*Fi.anglePer}deg) translateZ(${s?L:Fi.radius}px)`,backfaceVisibility:"visible"},children:ht.jsx("div",{className:"carousel-card",onClick:()=>tb(w.id),children:ht.jsx("img",{src:w.image,alt:w.title,draggable:!1,style:{display:"block",width:"100%",height:"100%",borderRadius:10,objectFit:"cover",pointerEvents:"none"}})})},w.id))})}),!s&&ht.jsxs("div",{ref:a,className:"detail-panel",style:{position:"absolute",right:"5%",top:"50%",transform:"translateY(-50%)",zIndex:2,width:"22%",opacity:0,willChange:"transform, opacity, filter"},children:[ht.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"0.6rem",marginBottom:"0.6rem"},children:[ht.jsx("span",{className:"detail-num",style:{fontSize:"2.5rem",fontFamily:"Georgia, 'Times New Roman', serif",fontWeight:300,color:"rgba(250,248,245,0.1)",lineHeight:1},children:"01"}),ht.jsx("span",{className:"detail-cat",style:{fontSize:"0.55rem",fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",color:"#7a9e9e"},children:y.category})]}),ht.jsx("div",{className:"detail-title",style:{fontSize:"clamp(1.6rem, 2.5vw, 2.4rem)",fontFamily:"Georgia, 'Times New Roman', serif",fontWeight:400,lineHeight:1.1,color:"#FAF8F5",marginBottom:"1rem"},children:y.title}),ht.jsx("div",{className:"detail-desc",style:{fontSize:"0.78rem",lineHeight:1.75,color:"#a09888",marginBottom:"1.8rem"},children:y.description}),ht.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.2rem",borderTop:"1px solid rgba(250,248,245,0.08)",paddingTop:"1.2rem"},children:[ht.jsxs("div",{children:[ht.jsx("div",{style:{fontSize:"0.5rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#6B6560",marginBottom:"0.3rem"},children:"Year"}),ht.jsx("div",{className:"detail-year",style:{fontSize:"0.85rem",fontFamily:"Georgia, 'Times New Roman', serif",color:"#FAF8F5"},children:y.year})]}),ht.jsxs("div",{children:[ht.jsx("div",{style:{fontSize:"0.5rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#6B6560",marginBottom:"0.3rem"},children:"Medium"}),ht.jsx("div",{className:"detail-medium",style:{fontSize:"0.85rem",fontFamily:"Georgia, 'Times New Roman', serif",color:"#FAF8F5"},children:y.medium})]})]})]}),s&&ht.jsxs("div",{className:"carousel-stage-wrap",style:{position:"absolute",left:0,right:0,top:"40%",bottom:0,zIndex:2,padding:"1.5rem 1.5rem 1rem",display:"flex",flexDirection:"column",justifyContent:"center",opacity:0,willChange:"transform, opacity, filter"},children:[ht.jsxs("div",{ref:l,children:[ht.jsx("div",{className:"m-cat",style:{fontSize:"0.5rem",fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",color:"#7a9e9e",marginBottom:"0.4rem"},children:y.category}),ht.jsx("div",{className:"m-title",style:{fontSize:"1.6rem",fontFamily:"Georgia, 'Times New Roman', serif",fontWeight:400,lineHeight:1.15,color:"#FAF8F5",marginBottom:"0.7rem"},children:y.title}),ht.jsx("div",{className:"m-desc",style:{fontSize:"0.75rem",lineHeight:1.7,color:"#a09888",marginBottom:"1rem"},children:y.description}),ht.jsxs("div",{className:"m-meta",style:{fontSize:"0.6rem",fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"#6B6560",borderTop:"1px solid rgba(250,248,245,0.08)",paddingTop:"0.8rem"},children:[y.year,"  —  ",y.medium]})]}),ht.jsx("div",{style:{display:"flex",justifyContent:"center",gap:8,marginTop:"1.2rem"},children:Ru.map((w,U)=>ht.jsx("div",{ref:O=>{u.current[U]=O},style:{width:6,height:6,borderRadius:"50%",background:"#FAF8F5",opacity:U===0?1:.3,transition:"opacity 0.3s ease, transform 0.3s ease"}},U))})]})]})}const ZN=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}`,KN=`
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uProjectionIntensity;
uniform float uReflectionGain;
uniform float uHighlightBoost;
uniform float uLumaVisibilityThreshold;
uniform float uInvertColor;
uniform float uHalftone;
uniform float uToneCut;

vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}
vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}

float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  vec2 i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz;
  x12.xy-=i1;
  i=mod289(i);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m=m*m;m=m*m;
  vec3 x=2.0*fract(p*C.www)-1.0;
  vec3 h=abs(x)-0.5;
  vec3 ox=floor(x+0.5);
  vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g;
  g.x=a0.x*x0.x+h.x*x0.y;
  g.yz=a0.yz*x12.xz+h.yz*x12.yw;
  return 130.0*dot(m,g);
}

float fbm(vec2 p){
  float v=0.0;float a=0.5;
  for(int i=0;i<5;i++){v+=a*snoise(p);p=p*2.0+vec2(17.0,31.0);a*=0.5;}
  return v;
}

void main(){
  vec2 uv=vUv;
  vec2 p=uv*2.0-1.0;
  float t=uTime;
  vec2 flow=vec2(t*0.19,t*0.13);
  vec2 q=vec2(fbm(p*1.05+flow),fbm(p*1.05+vec2(-flow.y*1.1,flow.x*0.9)));
  vec2 w=p+q*0.62;
  float nA=0.5+0.5*fbm(w*2.15+flow*0.8);
  float nB=0.5+0.5*fbm(w*4.8+vec2(-flow.x*0.5,flow.y*0.35));
  float ridge=1.0-abs(2.0*nB-1.0);
  float mask=clamp(0.18+1.12*(0.58*nA+0.42*ridge),0.0,1.0);
  float edgeFade=1.0-clamp(length(p)*0.7,0.0,1.0);
  float intensity=pow(clamp(mask*(0.72+edgeFade*0.45),0.0,1.0),1.05);
  float base=nA*0.82+ridge*0.18;
  vec3 col=vec3(
    0.18+0.86*(0.5+0.5*cos(6.28318*(base+0.02+t*0.07))),
    0.14+0.9*(0.5+0.5*cos(6.28318*(base+0.37+t*0.06))),
    0.2+0.9*(0.5+0.5*cos(6.28318*(base+0.72+t*0.065)))
  );
  col*=intensity;
  float highlight=pow(clamp((nA*1.1+ridge*0.75)-1.1,0.0,1.0),2.2);
  col=mix(col,vec3(1.0,0.96,0.92),highlight*vec3(0.22,0.16,0.1));
  vec3 tex=clamp(col,0.0,1.0);
  if(uInvertColor>0.5){tex=vec3(1.0)-tex;}
  if(uToneCut>0.5){float tl=5.0;tex=floor(tex*(tl-1.0)+0.5)/(tl-1.0);}
  float lum=dot(tex,vec3(0.2126,0.7152,0.0722));
  float lumaStart=clamp(uLumaVisibilityThreshold,0.0,1.0);
  float lumaEnd=min(1.0,lumaStart+0.1);
  float darkMask=1.0;
  if(lumaStart>1e-4){darkMask=smoothstep(lumaStart,lumaEnd,lum);}
  if(uHalftone>0.5){
    vec2 hUv=vUv*vec2(180.0,120.0);
    vec2 hCell=fract(hUv)-0.5;
    float dotRadius=mix(0.02,0.45,clamp(lum,0.0,1.0));
    float dotMask=1.0-smoothstep(dotRadius,dotRadius+0.035,length(hCell));
    tex*=dotMask*darkMask;
  }
  float hi=smoothstep(0.5,1.0,lum);
  tex*=darkMask;
  tex*=mix(1.0,uHighlightBoost,hi);
  tex*=max(0.0,uProjectionIntensity)*max(0.0,uReflectionGain);
  gl_FragColor=vec4(tex,1.0);
}`,QN=[{type:"youtube",src:"https://www.youtube.com/embed/-43gNq90wDI",caption:"SPARK — Projection mapping performance"},{type:"img",src:"/revival/poster.jpg",caption:"Revival — Project poster"},{type:"img",src:"/revival/still-1.jpg",caption:"Production still — Installation setup"},{type:"img",src:"/revival/still-2.jpg",caption:"Production still — Projection detail"},{type:"img",src:"/revival/frame-1.jpg",caption:"Frame capture — Shader projection"},{type:"img",src:"/revival/still-3.jpg",caption:"Production still — Venue overview"},{type:"img",src:"/revival/bts.jpg",caption:"Behind the scenes"},{type:"img",src:"/revival/still-4.jpg",caption:"Production still — Final setup"},{type:"img",src:"/revival/frame-2.jpg",caption:"Frame capture — Color cycling"},{type:"img",src:"/revival/project-file.jpg",caption:"Project documentation"}];function JN(){const s=no(),t=Ce.useRef(null),e=Ce.useRef(null),i=Ce.useRef(0),a=Ce.useRef(null),l=Ce.useRef(null);return Ce.useEffect(()=>{const u=e.current;if(!u)return;const f=u,d=new q_({antialias:!0,powerPreference:"high-performance"});d.setPixelRatio(Math.min(window.devicePixelRatio,2)),d.setSize(f.clientWidth,f.clientHeight),d.outputColorSpace=Ji,d.toneMapping=df,d.toneMappingExposure=.78,d.shadowMap.enabled=!0,d.shadowMap.type=eb,f.appendChild(d.domElement);const h=new zd;h.background=new ye(1052692);const m=new Ti(45,f.clientWidth/f.clientHeight,.1,100);m.position.set(0,1.2,5.5),m.lookAt(0,.8,0);function v(Z=1024,Y=576){const z=new zd,B=new gf(-1,1,1,-1,0,1),tt=new ui({vertexShader:ZN,fragmentShader:KN,uniforms:{uTime:{value:0},uProjectionIntensity:{value:.5},uReflectionGain:{value:1},uHighlightBoost:{value:1.65},uLumaVisibilityThreshold:{value:.3},uInvertColor:{value:0},uHalftone:{value:0},uToneCut:{value:0}},depthTest:!1,depthWrite:!1}),rt=new li(new ba(2,2),tt);z.add(rt);const G=new Ri(Z,Y,{minFilter:ci,magFilter:ci,format:Yr,type:$i,colorSpace:Ji,depthBuffer:!1,stencilBuffer:!1});return{texture:G.texture,render(F,Q){const _t=F.getRenderTarget();tt.uniforms.uTime.value=Q,F.setRenderTarget(G),F.clear(),F.render(z,B),F.setRenderTarget(_t)},setEffects(F){tt.uniforms.uProjectionIntensity.value=F.projectionIntensity,tt.uniforms.uReflectionGain.value=F.reflectionGain,tt.uniforms.uHighlightBoost.value=F.highlightBoost,tt.uniforms.uLumaVisibilityThreshold.value=F.lumaVisibilityThreshold,tt.uniforms.uInvertColor.value=F.invertColor?1:0,tt.uniforms.uHalftone.value=F.halftone?1:0,tt.uniforms.uToneCut.value=F.toneCut?1:0},dispose(){rt.geometry.dispose(),tt.dispose(),G.dispose()}}}const _=v(),x=v();_.setEffects({projectionIntensity:1,reflectionGain:1,highlightBoost:1,lumaVisibilityThreshold:0,invertColor:!1,halftone:!1,toneCut:!1});const S={projectionIntensity:1.64,reflectionGain:1,highlightBoost:1.65,lumaVisibilityThreshold:.12,invertColor:!1,halftone:!0,toneCut:!1};x.setEffects(S),_.render(d,0),x.render(d,0);const b=new ba(2,1.3),y=new mc({map:_.texture,toneMapped:!1,side:pa}),M=new li(b,y);M.position.set(0,1,.5),h.add(M);const A=new C2({color:1710626,roughness:.88,metalness:.06}),L=new ba(100,100);L.rotateX(-Math.PI/2);const w=new li(L,A);w.receiveShadow=!0,h.add(w);const U=new Po,O=new Yo(1.15,.045,.42);U.add(new li(O,A)).position.y=.0225;const R=new Yo(.09,.072,.07);for(let Z=0;Z<3;Z++)for(let Y=0;Y<10;Y++){const z=new li(R,A);z.position.set(-.9179999999999999/2+Y*.102,.083,-.16/2+Z*.08),z.receiveShadow=!0,z.castShadow=!0,U.add(z)}U.position.set(0,0,1.28),h.add(U);const T=new z2(16777215,220);T.decay=6,T.distance=35,T.angle=Math.PI/3.1,T.penumbra=.58,T.map=x.texture,T.castShadow=!0,T.shadow.mapSize.set(2048,2048),T.shadow.bias=-2e-4,T.shadow.normalBias=.02,T.position.set(0,1,.52),T.target.position.set(0,.02,1.15),h.add(T,T.target),h.add(new O2(16777215,394760,.04));const D=new GL(d);D.addPass(new VL(h,m));const k=new _c(new De(f.clientWidth,f.clientHeight),.22,.42,.72);D.addPass(k),D.addPass(new XL),T.intensity=220*S.projectionIntensity*S.reflectionGain,k.radius=.5,k.strength=.22*S.highlightBoost,k.threshold=S.lumaVisibilityThreshold;let I;function V(){const Z=performance.now()*.001;_.render(d,Z),x.render(d,Z),m.position.x=i.current*.4,m.position.y=1.2+i.current*.08,D.render(),I=requestAnimationFrame(V)}V();function $(){const Z=f.clientWidth,Y=f.clientHeight;m.aspect=Z/Y,m.updateProjectionMatrix(),d.setSize(Z,Y),D.setSize(Z,Y)}return window.addEventListener("resize",$),()=>{cancelAnimationFrame(I),window.removeEventListener("resize",$),[b,y,L,A,O,R].forEach(Z=>Z.dispose()),_.dispose(),x.dispose(),D.dispose(),d.dispose(),f.contains(d.domElement)&&f.removeChild(d.domElement)}},[]),Ca(()=>{if(!t.current)return;const u=Ke.timeline({paused:!0});u.fromTo(".revival-canvas",{opacity:0},{opacity:1,duration:1},0),u.fromTo(".revival-right",{opacity:0,x:40,filter:"blur(10px)"},{opacity:1,x:0,filter:"blur(0px)",duration:1},.2);const f=a.current,d=l.current,h=()=>!d||!f?0:Math.max(0,d.offsetHeight-f.clientHeight);ge.create({trigger:t.current,start:"top top",end:()=>{const b=h();return`+=${Math.max(s?4e3:3e3,Math.round(b/.9*1.1))}`},pin:!0,anticipatePin:1,invalidateOnRefresh:!0,id:"revival",onUpdate:b=>{u.progress(Math.min(1,b.progress/.1));const y=Math.max(0,(b.progress-.1)/.9);i.current=Math.sin(y*Math.PI)*.6;const M=h();d&&M>0&&Ke.set(d,{y:-y*M})}});const m=t.current?.querySelectorAll("img")??[];let v=0;const _=m.length;let x;function S(){v++,v>=_&&(clearTimeout(x),ge.refresh())}m.forEach(b=>{b.complete?v++:(b.addEventListener("load",S,{once:!0}),b.addEventListener("error",S,{once:!0}))}),v>=_&&_>0&&ge.refresh(),x=setTimeout(()=>ge.refresh(),2e3)},{scope:t}),ht.jsxs("section",{ref:t,id:"revival",style:{height:"100vh",position:"relative",overflow:"hidden",background:"#101014"},children:[ht.jsx("div",{ref:e,className:"revival-canvas",style:{position:"absolute",left:0,top:0,width:s?"100%":"55%",height:s?"40%":"100%",zIndex:1,opacity:0}}),ht.jsx("div",{className:"revival-right",style:{position:"absolute",right:0,bottom:0,top:s?"40%":0,width:s?"100%":"45%",zIndex:2,opacity:0,willChange:"transform, opacity, filter"},children:ht.jsx("div",{ref:a,style:{height:"100%",overflow:"hidden"},children:ht.jsxs("div",{ref:l,style:{padding:s?"4vh 5vw":"10vh 48px 10vh 32px",willChange:"transform"},children:[ht.jsx("div",{style:{fontSize:"0.55rem",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"#7a9e9e",marginBottom:"0.5rem"},children:"Projection Mapping Installation"}),ht.jsx("h2",{style:{fontFamily:"Georgia, 'Times New Roman', serif",fontSize:"clamp(2rem, 3.5vw, 3.5rem)",fontWeight:300,lineHeight:1,color:"#FAF8F5",margin:"0 0 1.2rem"},children:"Revival"}),ht.jsx("div",{style:{fontSize:"0.65rem",letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(250,248,245,0.35)",marginBottom:"2rem"},children:"2024 · Film / 3D · Projection Mapping"}),ht.jsx("p",{style:{fontSize:"0.85rem",lineHeight:1.8,color:"#a09888",marginBottom:"1.5rem",maxWidth:480},children:"Revival explores themes of identity and creative rebirth through a projection mapping installation. Animated shader-driven visuals are projected onto physical surfaces, transforming a keyboard and floor into a living canvas of color and light."}),ht.jsx("p",{style:{fontSize:"0.85rem",lineHeight:1.8,color:"#a09888",marginBottom:"2.5rem",maxWidth:480},children:"The piece uses real-time GLSL shaders generating FBM noise patterns with color cycling, halftone processing, and luma-based visibility thresholds. A SpotLight projects these patterns onto the physical scene, creating an immersive interplay between digital and physical space."}),ht.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"1.5rem",borderTop:"1px solid rgba(250,248,245,0.06)",borderBottom:"1px solid rgba(250,248,245,0.06)",padding:"1.5rem 0",marginBottom:"2.5rem"},children:[{label:"Role",value:"Creative Director"},{label:"Tools",value:"Three.js, GLSL"},{label:"Year",value:"2024"}].map(u=>ht.jsxs("div",{children:[ht.jsx("div",{style:{fontSize:"0.5rem",fontWeight:700,letterSpacing:"0.15em",textTransform:"uppercase",color:"#6B6560",marginBottom:"0.35rem"},children:u.label}),ht.jsx("div",{style:{fontSize:"0.8rem",fontFamily:"Georgia, serif",color:"#FAF8F5"},children:u.value})]},u.label))}),QN.map((u,f)=>ht.jsxs("div",{style:{marginBottom:"2rem"},children:[u.type==="youtube"?ht.jsx("div",{style:{position:"relative",paddingBottom:"56.25%",height:0,overflow:"hidden",borderRadius:8},children:ht.jsx("iframe",{src:u.src,title:u.caption,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"}})}):ht.jsx("img",{src:u.src,alt:u.caption,draggable:!1,style:{width:"100%",borderRadius:8,display:"block"}}),ht.jsx("p",{style:{fontSize:"0.6rem",letterSpacing:"0.08em",color:"rgba(250,248,245,0.3)",marginTop:"0.6rem"},children:u.caption})]},f))]})})})]})}const $N=`
.ticket-wrap {
  display: flex;
  align-items: stretch;
  gap: 0px;
  filter: drop-shadow(0 12px 30px rgba(0,0,0,0.10))
          drop-shadow(0 4px 10px rgba(0,0,0,0.05));
  transition: gap 0.5s cubic-bezier(0.34, 1.56, 0.64, 1),
              transform 0.4s ease;
  -webkit-box-reflect: below 4px linear-gradient(transparent 30%, rgba(255,255,255,0.12));
}
.ticket-wrap > * {
  box-sizing: border-box;
  margin: 0;
}
.ticket-wrap:hover {
  gap: 10px;
  transform: translateY(-4px) scale(1.01);
}
.ticket-wrap:hover .ticket-perf { opacity: 0; }
.ticket-main {
  border-radius: 14px 0 0 14px;
  transition: border-radius 0.4s ease;
}
.ticket-wrap:hover .ticket-main {
  border-radius: 14px;
}
.ticket-stub {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #1a1a1a;
  border-radius: 0;
  transition: transform 0.3s ease, border-radius 0.4s ease;
  cursor: pointer;
  position: relative;
}
.ticket-stub:last-child {
  border-radius: 0 14px 14px 0;
}
.ticket-wrap:hover .ticket-stub {
  border-radius: 10px;
}
.ticket-wrap:hover .ticket-stub:last-child {
  border-radius: 10px 14px 14px 10px;
}
.ticket-stub:hover {
  transform: translateY(-6px);
}
@keyframes icon-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}
@keyframes icon-wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  75% { transform: rotate(-5deg); }
}
@keyframes icon-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.12); }
}
@keyframes ticket-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
.ticket-seal { animation: ticket-shimmer 3s infinite linear; }
@media (max-width: 768px) {
  .ticket-wrap {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    -webkit-box-reflect: none;
  }
  .ticket-main {
    border-radius: 14px !important;
    width: 85vw !important;
  }
  .ticket-wrap:hover { gap: 14px; }
  .ticket-stubs-row {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 85vw;
    align-self: center;
  }
  .ticket-stub {
    flex-direction: row !important;
    align-items: center;
    border-radius: 10px !important;
    width: 100% !important;
    padding: 14px 18px !important;
    gap: 12px !important;
    box-sizing: border-box !important;
  }
  .ticket-perf { display: none; }
}
`;function tO(){const s=no(),t=Ce.useRef(null),e=Ce.useRef(null);Ce.useEffect(()=>{const a=e.current;if(!a)return;const l=new zd;l.background=new ye(13156533),l.fog=new k_(13156533,.0012);const u=new Ti(35,a.clientWidth/a.clientHeight,1,2e3);u.position.set(0,30,120),u.lookAt(0,0,0);const f=new q_({antialias:!0});f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.setSize(a.clientWidth,a.clientHeight),f.toneMapping=df,a.appendChild(f.domElement);const d=new wb(13156533,.6);l.add(d);const h=new Ab(16777215,1.5);h.position.set(-5,15,10),l.add(h);const m=new ba(1e4,1e4),v=new bb().load("/textures/waternormals.jpg",M=>{M.wrapS=M.wrapT=Ud}),_=new PL(m,{textureWidth:512,textureHeight:512,waterNormals:v,sunDirection:h.position.clone().normalize(),sunColor:16777215,waterColor:10524808,distortionScale:1.8,fog:!0});_.material.transparent=!0,_.material.opacity=.9,_.rotation.x=-Math.PI/2,l.add(_);let x;function S(){_.material.uniforms.time.value+=1/60*.3,f.render(l,u),x=requestAnimationFrame(S)}S();const b=a;function y(){const M=b.clientWidth,A=b.clientHeight;u.aspect=M/A,u.updateProjectionMatrix(),f.setSize(M,A)}return window.addEventListener("resize",y),()=>{cancelAnimationFrame(x),window.removeEventListener("resize",y),m.dispose(),_.material.dispose(),f.dispose(),b.contains(f.domElement)&&b.removeChild(f.domElement)}},[]),Ca(()=>{if(!t.current)return;const a=Ke.timeline();a.fromTo(".contact-ticket",{opacity:0,y:100,filter:"blur(24px)",scale:.96},{opacity:1,y:0,filter:"blur(0px)",scale:1,duration:.5,ease:"none"},0),ge.create({animation:a,trigger:t.current,start:"top top",end:s?"+=500":"+=600",scrub:1,pin:!0,anticipatePin:1,id:"contact",snap:{snapTo:1,duration:{min:.15,max:.3},ease:"power2.out"}})},{scope:t});const i=[{href:"mailto:hello@chloeastridchan.com",handle:"hello@chloeastridchan.com",anim:"icon-float 3s ease-in-out infinite",icon:ht.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#7a9e9e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[ht.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),ht.jsx("polyline",{points:"22,4 12,13 2,4"})]})},{href:"https://instagram.com/chloeastridchan",handle:"@chloeastridchan",anim:"icon-wiggle 4s ease-in-out infinite",icon:ht.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#7a9e9e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[ht.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5"}),ht.jsx("circle",{cx:"12",cy:"12",r:"5"}),ht.jsx("circle",{cx:"17.5",cy:"6.5",r:"1.5",fill:"#7a9e9e",stroke:"none"})]})},{href:"https://linkedin.com/in/chloeastridchan",handle:"/in/chloeastridchan",anim:"icon-pulse 3.5s ease-in-out infinite",icon:ht.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#7a9e9e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[ht.jsx("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"}),ht.jsx("rect",{x:"2",y:"9",width:"4",height:"12"}),ht.jsx("circle",{cx:"4",cy:"4",r:"2"})]})}];return ht.jsxs("section",{ref:t,id:"contact",style:{height:"100vh",position:"relative",overflow:"hidden",background:"#c8c0b5"},children:[ht.jsx("style",{children:$N}),ht.jsx("div",{ref:e,style:{position:"absolute",inset:0,zIndex:0}}),ht.jsx("div",{style:{position:"absolute",top:"30%",left:"50%",transform:"translate(-50%, -50%)",width:"60vw",height:"40vh",background:"radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 70%)",zIndex:1,pointerEvents:"none"}}),ht.jsx("div",{className:"contact-ticket",style:{position:"relative",zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",height:"100%",opacity:0,willChange:"transform, opacity, filter"},children:ht.jsxs("div",{className:"ticket-wrap",children:[ht.jsxs("article",{className:"ticket-main",style:{position:"relative",width:s?"85vw":360,background:"#fcfcfb",padding:s?24:32},children:[ht.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"},children:[ht.jsxs("header",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.7rem",fontWeight:700,letterSpacing:2,textTransform:"uppercase",color:"#999"},children:[ht.jsx("span",{children:"YARRR, MATEY!"}),ht.jsx("span",{style:{color:"#7a9e9e"},children:"No. 001"})]}),ht.jsxs("div",{children:[ht.jsxs("h2",{style:{fontFamily:"Georgia, 'Times New Roman', serif",fontSize:"2.5rem",lineHeight:1,fontWeight:400,letterSpacing:"-0.5px",margin:"16px 0 10px",color:"#1a1a1a"},children:["LET'S WORK",ht.jsx("br",{}),"TOGETHER"]}),ht.jsx("p",{style:{fontSize:"0.85rem",letterSpacing:1,color:"#888"},children:"Commissions & Creative Direction"})]}),ht.jsxs("footer",{style:{display:"flex",gap:40,borderTop:"1px solid rgba(0,0,0,0.08)",paddingTop:14},children:[ht.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[ht.jsx("span",{style:{fontSize:"0.6rem",color:"#aaa",textTransform:"uppercase",letterSpacing:1},children:"Based in"}),ht.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"#1a1a1a"},children:"HONG KONG"})]}),ht.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[ht.jsx("span",{style:{fontSize:"0.6rem",color:"#aaa",textTransform:"uppercase",letterSpacing:1},children:"Status"}),ht.jsx("span",{style:{fontSize:"0.8rem",fontWeight:700,color:"#7a9e9e"},children:"AVAILABLE"})]})]})]}),ht.jsx("div",{className:"ticket-perf",style:{position:"absolute",right:-2,top:36,bottom:36,width:4,backgroundImage:"linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.12) 50%)",backgroundSize:"100% 12px",transition:"opacity 0.3s ease"}})]}),s?ht.jsx("div",{className:"ticket-stubs-row",children:i.map((a,l)=>ht.jsxs("a",{className:"ticket-stub",href:a.href,target:a.href.startsWith("mailto")?void 0:"_blank",rel:a.href.startsWith("mailto")?void 0:"noopener noreferrer",style:{background:"#fcfcfb",padding:"14px 18px",gap:12},children:[ht.jsx("div",{style:{animation:a.anim,flexShrink:0},children:a.icon}),ht.jsx("span",{style:{fontSize:"0.65rem",fontWeight:600,letterSpacing:1.2,color:"#555",whiteSpace:"nowrap"},children:a.handle})]},l))}):i.map((a,l)=>ht.jsxs("a",{className:"ticket-stub",href:a.href,target:a.href.startsWith("mailto")?void 0:"_blank",rel:a.href.startsWith("mailto")?void 0:"noopener noreferrer",style:{width:80,background:"#fcfcfb",padding:"28px 0",gap:16},children:[ht.jsx("div",{style:{animation:a.anim,flexShrink:0},children:a.icon}),ht.jsx("span",{style:{writingMode:"vertical-rl",transform:"rotate(180deg)",fontSize:"0.58rem",fontWeight:600,letterSpacing:1.5,color:"#555",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxHeight:"calc(100% - 60px)"},children:a.handle}),l<i.length-1&&ht.jsx("div",{className:"ticket-perf",style:{position:"absolute",right:-2,top:36,bottom:36,width:4,backgroundImage:"linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.12) 50%)",backgroundSize:"100% 12px",transition:"opacity 0.3s ease"}})]},l))]})})]})}function eO(){return IN(),HN(),ht.jsxs(ht.Fragment,{children:[ht.jsx(GN,{}),ht.jsx(VN,{}),ht.jsxs("main",{children:[ht.jsx(XN,{}),ht.jsx(WN,{}),ht.jsx(YN,{}),ht.jsx(jN,{}),ht.jsx(JN,{}),ht.jsx(tO,{})]})]})}_w.createRoot(document.getElementById("root")).render(ht.jsx(eO,{}));
