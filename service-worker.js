"use strict";var precacheConfig=[["/saefolder-webpage/index.html","2b83ea2574e727c42077e58e5f7a7522"],["/saefolder-webpage/static/css/main.71dbd452.css","e8b4aadec98908ed0c5c7b2ea5293f21"],["/saefolder-webpage/static/js/main.eb06cd01.js","ed7b141451139a9db4fb762c121e264f"],["/saefolder-webpage/static/media/icon1.ed824e83.png","ed824e839231518c27f2a0eb0c2af302"],["/saefolder-webpage/static/media/icon2.9e8dc2ff.png","9e8dc2ff8d022699dbfe682415a01795"],["/saefolder-webpage/static/media/icon3.b3331ba9.png","b3331ba943331cf8d861c47bb5df94a2"],["/saefolder-webpage/static/media/img_products_1.79454b3d.jpg","79454b3dd50482da20a593e69e774e09"],["/saefolder-webpage/static/media/img_products_2.a0222629.jpg","a02226293beeb2e31ff55815318dcc97"],["/saefolder-webpage/static/media/irene_4.d92a5ac3.png","d92a5ac34eedff1a3dac60578cdf101b"],["/saefolder-webpage/static/media/main_image.3631b0ab.jpeg","3631b0abae0286716167081d66b2ef83"],["/saefolder-webpage/static/media/parallelogram.80db6def.png","80db6defc60f731b0e4f10874734d302"],["/saefolder-webpage/static/media/saefolder_bg.6063b666.png","6063b6664b5c1099964e02899f548f8c"],["/saefolder-webpage/static/media/saefolder_logo.0e8e8aa1.png","0e8e8aa11273505d55fe202035ed2312"],["/saefolder-webpage/static/media/seulgi_4.30de1f5b.png","30de1f5bf265d7908dbd0d4e2981d5d9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/saefolder-webpage/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});