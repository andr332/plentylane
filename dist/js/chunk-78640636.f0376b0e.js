(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78640636"],{"0a06":function(e,t,n){"use strict";var r=n("c532"),o=n("30b5"),a=n("f6b4"),i=n("5270"),s=n("4a7b");function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=s(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),o=n("c8af"),a={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function s(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("b50d")),e}var c={adapter:s(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(a)})),e.exports=c}).call(this,n("4362"))},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},"4a7b":function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(a,u),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var f=o.concat(a).concat(i).concat(s),p=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return r.forEach(p,u),n}},5270:function(e,t,n){"use strict";var r=n("c532"),o=n("c401"),a=n("2e67"),i=n("2444");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||i.adapter;return t(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},"5f02":function(e,t,n){"use strict";e.exports=function(e){return"object"===typeof e&&!0===e.isAxiosError}},"7a77":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(e,t,n){"use strict";var r=n("d925"),o=n("e683");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"8df4":function(e,t,n){"use strict";var r=n("7a77");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("d039"),a=n("e8b5"),i=n("861d"),s=n("7b0b"),c=n("50c4"),u=n("8418"),f=n("65f0"),p=n("1dde"),d=n("b622"),l=n("2d00"),h=d("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",g=l>=51||!o((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),y=p("concat"),I=function(e){if(!i(e))return!1;var t=e[h];return void 0!==t?!!t:a(e)},b=!g||!y;r({target:"Array",proto:!0,forced:b},{concat:function(e){var t,n,r,o,a,i=s(this),p=f(i,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?i:arguments[t],I(a)){if(o=c(a.length),d+o>m)throw TypeError(v);for(n=0;n<o;n++,d++)n in a&&u(p,d,a[n])}else{if(d>=m)throw TypeError(v);u(p,d++,a)}return p.length=d,p}})},b50d:function(e,t,n){"use strict";var r=n("c532"),o=n("467f"),a=n("7aac"),i=n("30b5"),s=n("83b9"),c=n("c345"),u=n("3934"),f=n("2d83");e.exports=function(e){return new Promise((function(t,n){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+m)}var v=s(e.baseURL,e.url);if(l.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in l?c(l.getAllResponseHeaders()):null,a=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:a,status:l.status,statusText:l.statusText,headers:r,config:e,request:l};o(t,n,i),l=null}},l.onabort=function(){l&&(n(f("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){n(f("Network Error",e,null,l)),l=null},l.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(f(t,e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var g=(e.withCredentials||u(v))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;g&&(d[e.xsrfHeaderName]=g)}if("setRequestHeader"in l&&r.forEach(d,(function(e,t){"undefined"===typeof p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),e.responseType)try{l.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"===typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){l&&(l.abort(),n(e),l=null)})),p||(p=null),l.send(p)}))}},bc3a:function(e,t,n){e.exports=n("cee4")},c345:function(e,t,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return"undefined"===typeof e}function s(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function p(e){return"string"===typeof e}function d(e){return"number"===typeof e}function l(e){return null!==e&&"object"===typeof e}function h(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function m(e){return"[object Date]"===o.call(e)}function v(e){return"[object File]"===o.call(e)}function g(e){return"[object Blob]"===o.call(e)}function y(e){return"[object Function]"===o.call(e)}function I(e){return l(e)&&y(e.pipe)}function b(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function P(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function A(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function x(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function w(){var e={};function t(t,n){h(e[n])&&h(t)?e[n]=w(e[n],t):h(t)?e[n]=w({},t):a(t)?e[n]=t.slice():e[n]=t}for(var n=0,r=arguments.length;n<r;n++)x(arguments[n],t);return e}function N(e,t,n){return x(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}function O(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}e.exports={isArray:a,isArrayBuffer:c,isBuffer:s,isFormData:u,isArrayBufferView:f,isString:p,isNumber:d,isObject:l,isPlainObject:h,isUndefined:i,isDate:m,isFile:v,isBlob:g,isFunction:y,isStream:I,isURLSearchParams:b,isStandardBrowserEnv:A,forEach:x,merge:w,extend:N,trim:P,stripBOM:O}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},cee4:function(e,t,n){"use strict";var r=n("c532"),o=n("1d2b"),a=n("0a06"),i=n("4a7b"),s=n("2444");function c(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var u=c(s);u.Axios=a,u.create=function(e){return c(i(u.defaults,e))},u.Cancel=n("7a77"),u.CancelToken=n("8df4"),u.isCancel=n("2e67"),u.all=function(e){return Promise.all(e)},u.spread=n("0df6"),u.isAxiosError=n("5f02"),e.exports=u,e.exports.default=u},d722:function(e,t,n){"use strict";n("99af"),n("4de4"),n("4160"),n("d3b7"),n("159b");var r=n("bc3a"),o=n.n(r),a=n("db49"),i=n("a18c");o.a.defaults.headers.post["Access-Control-Allow-Origin"]="*",o.a.interceptors.request.use((function(e){var t=localStorage.getItem("plAccessToken");return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e}),(function(e){return console.log("error",e),Promise.reject(e)}));var s=function(e){return!e.data||401!==e.data.statusCode&&!0!==e.data.unauthorized||(localStorage.removeItem("plAccessToken"),localStorage.removeItem("plUserId"),i["a"].push({path:"/login"})),Promise.reject(e)};t["a"]={auth:{signUp:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/auth/signup");return o.a.post(t,e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return Promise.reject(e.response.data||e)}))},login:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/auth/login");return o.a.post(t,e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return Promise.reject(e.response.data||e)}))}},dashboard:{userInfo:function(){var e="".concat(a["a"].API_ORIGIN,"/api/me");return o.a.get(e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},updateProfile:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/me");return o.a.patch(t,e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},meals:{addMeal:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/me/meals");return o.a.post(t,e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},updateMeal:function(e,t){var n="".concat(a["a"].API_ORIGIN,"/api/me/meals/").concat(e);return o.a.patch(n,t).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},getMealByUuid:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/meals/").concat(e,"?join=place&join=user");return o.a.get(t).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},getMealById:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/me/meals/").concat(e,"?join=place");return o.a.get(t).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},getMyMeals:function(){var e="".concat(a["a"].API_ORIGIN,"/api/me/meals");return o.a.get(e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))}},places:{getPlaces:function(){var e="".concat(a["a"].API_ORIGIN,"/api/places");return o.a.get(e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},getMyPlaces:function(){var e="".concat(a["a"].API_ORIGIN,"/api/me/places");return o.a.get(e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},getPlaceInfo:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/me/places/").concat(e);return o.a.get(t).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},addPlace:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/me/places");return o.a.post(t,e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))}},offers:{getOffers:function(e){e=[{field:"pickupTime",condition:"$between",value:"2021-01-13,2021-01-20"}];var t="";e&&e.length&&e.forEach((function(e){t+="&filter=".concat(e.field,"||").concat(e.condition,"||").concat(e.value)}));var n="".concat(a["a"].API_ORIGIN,"/api/offers?join=place&join=meal&join=user");return t&&t.length&&(n+=t),o.a.get(n).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},getAvailableOffers:function(){var e="".concat(a["a"].API_ORIGIN,"/api/offers?join=place&join=meal&join=user&filter=quantity||$gt||1");return o.a.get(e).then((function(e){var t=e.data||{};return t&&t.data&&t.data.length&&(t.data=t.data.filter((function(e){return e.availableQuantity>1}))),Promise.resolve(t)})).catch((function(e){return s(e.response)}))},getMyOffers:function(){var e="".concat(a["a"].API_ORIGIN,"/api/me/offers?join=place&join=meal");return o.a.get(e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},getOfferById:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/offers/").concat(e,"?join=meal&join=place&join=user");return o.a.get(t).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},addOffer:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/me/offers");return o.a.post(t,e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))}},bookings:{postDine:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/me/bookings/dine");return o.a.post(t,e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},deleteDine:function(e){var t="".concat(a["a"].API_ORIGIN,"/api/me/bookings/dine/").concat(e);return o.a.delete(t).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},getMyDines:function(){var e="".concat(a["a"].API_ORIGIN,"/api/me/bookings/dine");return o.a.get(e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))},getMyCooks:function(){var e="".concat(a["a"].API_ORIGIN,"/api/me/bookings/cook");return o.a.get(e).then((function(e){return Promise.resolve(e.data||{})})).catch((function(e){return s(e.response)}))}}}}},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},db49:function(e,t,n){"use strict";t["a"]={API_ORIGIN:"https://plenty-lane-dev.herokuapp.com",PWD_MIN_LENGTH:8,PWD_MAX_LENGTH:20,MEAL_INFO:{DESCRIPTION_MAX_LENGTH:4e3,QUANTITY_MIN:1,QUANTITY_MAX:1e3},DINE_NOTES_MAX_LENGTH:4e3,TEXT_AREA_MAX_LENGTH:4e3}},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},f6b4:function(e,t,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o}}]);
//# sourceMappingURL=chunk-78640636.f0376b0e.js.map