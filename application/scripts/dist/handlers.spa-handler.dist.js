(()=>{"use strict";var t=function(t,e,n,r){return new(n||(n=Promise))((function(o,l){function u(t){try{i(r.next(t))}catch(t){l(t)}}function c(t){try{i(r.throw(t))}catch(t){l(t)}}function i(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}i((r=r.apply(t,e||[])).next())}))};const e=document.querySelector(".content-swappable");function n(n,r){return t(this,void 0,void 0,(function*(){if(null===e)return;e.classList.remove("fadein"),yield function(e){return t(this,void 0,void 0,(function*(){return new Promise((function(t){setTimeout(t,100)}))}))}();const o=n.body,l=o.querySelector("spa-config"),u=o.querySelector("spa-dom-content");var c;!function(t){if(null===t)return null;const e=t.querySelector("spa-title"),n=document.head.querySelector("title");if(null===e||null===n)return null;const r=document.createElement("title");r.textContent=e.innerText,n.replaceWith(r)}(l),function(t){if(null===t)return;const e=t.querySelector("spa-stylesheets");if(null===e)return;!function(){const t=document.querySelectorAll("link");for(let e of t)"spa-stylesheet"===e.getAttribute("spa-element-type")&&e.remove()}();const n=e.querySelectorAll("spa-stylesheet");for(let t of n){const e=t.getAttributeNames(),n=document.createElement("link");n.setAttribute("spa-element-type","spa-stylesheet"),n.setAttribute("spa-element-id",crypto.randomUUID());for(let r of e){const e=t.getAttribute(r);null!==e&&n.setAttribute(r,e)}document.head.appendChild(n)}}(l),function(t){if(null===t)return;const e=t.querySelector("spa-scripts");if(null===e)return;!function(){const t=document.querySelectorAll("script");for(let e of t)"spa-script"===e.getAttribute("spa-element-type")&&e.remove()}();const n=e.querySelectorAll("spa-script");for(let t of n){const e=t.getAttributeNames(),n=document.createElement("script");n.setAttribute("spa-element-type","spa-script"),n.setAttribute("spa-element-id",crypto.randomUUID());for(let r of e){const e=t.getAttribute(r);null!==e&&n.setAttribute(r,e)}document.body.appendChild(n)}}(l),c=u,null!==e&&null!==c&&e.replaceChildren(...c.childNodes),e.classList.add("fadein"),e.setAttribute("data-url",r.url)}))}window.requestPage=function(e){return t(this,void 0,void 0,(function*(){fetch(e,{method:"GET",headers:{"Content-Type":"text/html"}}).then((function(t){t.text().then((function(e){var r;return n((r=e,(new DOMParser).parseFromString(r,"text/html")),t)})).catch((function(t){console.log(t.message)}))})).catch((function(t){console.log(t.message)}))}))}})();