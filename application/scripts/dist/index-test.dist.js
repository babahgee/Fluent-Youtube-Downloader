(()=>{"use strict";var t,e={37:(t,e,n)=>{n.d(e,{vs:()=>o});class s extends HTMLElement{constructor(){var t;super();const e=this.attachShadow({mode:"open"});e.innerHTML="<span>Click me</span>",null===(t=e.querySelector("span"))||void 0===t||t.addEventListener("click",(function(t){console.log(t)}))}static initialize(){return customElements.define("oktai-de-boktai",s)}}class i extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),e=document.createElement("button");e.setAttribute("part","control"),e.innerHTML="<span part='content'><slot></slot></span>",t.appendChild(e),i.getCss().then((e=>i.setCss(t,e)))}static setCss(t,e){const n=new CSSStyleSheet;n.replaceSync(e),t.adoptedStyleSheets.push(n)}static getCss(){return new Promise((function(t,e){return fetch("/static/styles/web-components/_fluent-button.css",{method:"GET"}).then((function(n){n.text().then((function(e){t(e)})).catch((function(t){e(t)}))})).catch((function(t){e(t)}))}))}static initialize(){customElements.define("fluent-button",i)}}class c extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"});c.constructElement(t),c.setEventListeners(t,this),c.getCss().then((e=>c.setCss(t,e)));const e=this.querySelectorAll("fluent-option")[0],n=t.querySelector("[part=current-value]");if(null!==n){e.setAttribute("active","");const t=e.getAttribute("value");null!==t&&(n.querySelector("span").innerText=e.innerText,this.setAttribute("value",t))}}static setEventListeners(t,e){const n=t.querySelector("[part=current-value]"),s=t.querySelector("[part=dropdown]");if(null===n||null===s)return;n.addEventListener("click",(function(){e.classList.contains("in-dropdown")||e.classList.add("in-dropdown")}));const i=s.querySelector("slot");if(null===i)return;const c=i.assignedElements();c.forEach((function(t){t.addEventListener("click",(function(){c.forEach((t=>t.removeAttribute("active"))),t.setAttribute("active","");const s=t.getAttribute("value");n.querySelector("span").innerText=t.innerHTML,e.setAttribute("value",null!==s?s:""),e.classList.contains("in-dropdown")&&e.classList.remove("in-dropdown")}))}))}static constructElement(t){const e=document.createElement("div");e.setAttribute("part","control");const n=document.createElement("div");n.setAttribute("part","current-value"),n.innerHTML="<span></span><img src='/static/media/icons/windows-icon-down.png' alt='Dropdown'/>";const s=document.createElement("div");s.setAttribute("part","dropdown"),s.innerHTML="<slot></slot>",e.appendChild(n),e.appendChild(s),t.appendChild(e)}static setCss(t,e){const n=new CSSStyleSheet;n.replaceSync(e),t.adoptedStyleSheets.push(n)}static getCss(){return new Promise((function(t,e){return fetch("/static/styles/web-components/_fluent-select.css",{method:"GET"}).then((function(n){n.text().then((function(e){t(e)})).catch((function(t){e(t)}))})).catch((function(t){e(t)})),null}))}static initialize(){customElements.define("fluent-select",c)}}class r extends HTMLElement{constructor(){super(),this.attributeChangeEvents={},this.mutationObserver=new MutationObserver((t=>this.handleObserverMutation(t)));const t=this.attachShadow({mode:"open"});this.mutationObserver.observe(this,{attributeFilter:["value"]}),r.constructElement(t),r.getCss().then((e=>r.setCss(t,e))),r.setEventListeners(t,this),r.setAttributes(t,this)}handleObserverMutation(t){const e=this;t.forEach((function(t){if(null===t.attributeName)return;const n=t.oldValue,s=e.getAttribute(t.attributeName);"function"==typeof e.attributeChangeEvents[t.attributeName]&&e.attributeChangeEvents[t.attributeName](n,s,t)}))}setValue(t){const e=this.shadowRoot;if(null===e)return;const n=e.querySelector("[part=input]");null!==n&&(n.setAttribute("value",t),this.setAttribute("value",t))}onAttributeChange(t,e){return this.attributeChangeEvents[t]=e,this}static constructElement(t){const e=document.createElement("div");e.setAttribute("part","control");const n=document.createElement("span");n.setAttribute("part","content");const s=document.createElement("input");s.setAttribute("part","input"),n.appendChild(s),e.appendChild(n),t.appendChild(e)}static setAttributes(t,e){const n=t.querySelector("[part=input]");if(null===n)return;const s=["id","class"];e.getAttributeNames().forEach((function(t){if(s.includes(t))return;const i=e.getAttribute(t);null!==i&&n.setAttribute(t,i)}))}static setEventListeners(t,e){const n=t.querySelector("[part=input]");null!==n&&(n.addEventListener("focus",(function(){e.classList.contains("focused")||e.classList.add("focused")})),n.addEventListener("blur",(function(){e.classList.contains("focused")&&e.classList.remove("focused")})),n.addEventListener("input",(function(){e.setAttribute("value",n.value)})))}static setCss(t,e){const n=new CSSStyleSheet;n.replaceSync(e),t.adoptedStyleSheets.push(n)}static getCss(){return new Promise((function(t,e){return fetch("/static/styles/web-components/_fluent-input.css",{method:"GET"}).then((function(n){n.text().then((function(e){t(e)})).catch((function(t){e(t)}))})).catch((function(t){e(t)})),null}))}static initialize(){customElements.define("fluent-input",r)}}function o(){i.initialize(),c.initialize(),r.initialize(),s.initialize()}}},n={};function s(t){var i=n[t];if(void 0!==i)return i.exports;var c=n[t]={exports:{}};return e[t](c,c.exports,s),c.exports}s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=s(37),window.addEventListener("load",(function(){(0,t.vs)()}))})();