if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return s[e]||(i=new Promise((async i=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},i=(i,s)=>{Promise.all(i.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(i)};self.define=(i,a,t)=>{s[i]||(s[i]=Promise.resolve().then((()=>{let s={};const n={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return s;case"module":return n;default:return e(i)}}))).then((e=>{const i=t(...e);return s.default||(s.default=i),s}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/283-24d3bec6963401cf2d8a.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/614-74439a88331f852449cf.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/675-43ba47c78ff440612b5a.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/framework-92300432a1172ef1338b.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/main-2b492d46863dca42cdcc.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/pages/%5Bslug%5D-86d54268cf4e442d8fe6.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/pages/_app-44e0440de3e6501be8cf.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/pages/_error-82a806cd39f8ab3dc3ac.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/pages/index-4355e09829dde91de673.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/pages/login-2653d5d98fde878133d7.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/pages/networks-01126d3576a1a43f1b0c.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/pages/password-8eedd5d77bb19d8d1993.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/pages/profile-f44fe79831a7144cfbc2.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/chunks/webpack-6aa24242c38afc8913a0.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/css/c058cac82d413ae7f98e.css",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/i37WgRhjYgAuMmQmW-iNH/_buildManifest.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/i37WgRhjYgAuMmQmW-iNH/_ssgManifest.js",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-brands-400.216edb96b562c79adc09e2d3c63db7c0.svg",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-brands-400.329a95a9172fdb2cccb4f9347ed55233.woff",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-brands-400.89a52ae1d02b86d6143987c865471c24.eot",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-brands-400.9e138496e8f1719c6ebf0abe50563635.ttf",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-brands-400.c1210e5ebe4344da508396540be7f52c.woff2",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-regular-400.1017bce89c72f95bcf8e2bf4774efdbf.ttf",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-regular-400.19e27d348fefc21941e0310a0ec6339b.svg",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-regular-400.3672264812746c3c7225909742da535c.woff",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-regular-400.4079ae2d2a15d0689568f3a5459241c7.eot",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-regular-400.68c5af1f48e2bfca1e57ae1c556a5c72.woff2",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-solid-900.07c3313b24f7b1ca85ee99b4fa7db55e.ttf",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-solid-900.13de59f1a36b6cb4bca0050160ff0e41.svg",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-solid-900.ada6e6df937f7e5e8b790dfea07109b7.woff2",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-solid-900.c6ec080084769a6d8a34ab35b77999cd.woff",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/_next/static/media/fa-solid-900.efbd5d20e407bbf85f2b3087ee67bfa1.eot",revision:"i37WgRhjYgAuMmQmW-iNH"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/manifest.json",revision:"9d7ec28ddbb6baaacedb63af9ac68b42"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
