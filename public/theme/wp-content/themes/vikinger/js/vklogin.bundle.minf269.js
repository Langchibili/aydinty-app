!function i(a,u,c){function f(e,t){if(!u[e]){if(!a[e]){var n="function"==typeof require&&require;if(!t&&n)return n(e,!0);if(l)return l(e,!0);var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}var o=u[e]={exports:{}};a[e][0].call(o.exports,function(t){return f(a[e][1][t]||t)},o,o.exports,i,a,u,c)}return u[e].exports}for(var l="function"==typeof require&&require,t=0;t<c.length;t++)f(c[t]);return f}({1:[function(t,e,n){"use strict";var r=t("../utils/core"),o=t("../utils/plugins");(0,r.querySelector)("#login form p, #login form div",o.createFormInput)},{"../utils/core":2,"../utils/plugins":3}],2:[function(t,e,n){"use strict";function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||c(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(n,"__esModule",{value:!0}),n.filterString=n.limitLineBreaks=n.dateMinutesDiff=n.stripHTML=n.hexaToRGB=n.ucfirst=n.replaceEnterWithBr=n.insertWordInText=n.updateShadowInput=n.getPositionInInput=n.getWordInPosition=n.wrapLinks=n.extractAttachedMedia=n.getMediaLink=n.joinText=n.truncateText=n.querySelector=n.deepMerge=n.deepExtend=void 0;function a(t,e){for(var n in e)"object"===i(e[n])?(t[n]=e[n]instanceof Array?[]:{},a(t[n],e[n])):t[n]=e[n]}n.deepExtend=a;n.deepMerge=function(){for(var e={},t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n.forEach(function(t){a(e,t)}),e};n.querySelector=function(t,e){var n=document.querySelectorAll(t);n.length&&e(n)};n.dateMinutesDiff=function(t,e){var n=1<arguments.length&&void 0!==e?e:new Date,r=Math.abs(t.getTime()-n.getTime());return Math.floor(r/6e4)};n.truncateText=function(t,e,n){var r=2<arguments.length&&void 0!==n?n:"...";return t.length<=e?t:t.substring(0,e).trim()+r};n.joinText=function(t,e){var n=1<arguments.length&&void 0!==e?e:"-";return t.replace(/\s+/gim,n)};function s(t,e){return"youtube"===t?"https://www.youtube.com/embed/".concat(e):"twitch"===t?"//player.twitch.tv/?autoplay=false&video=v".concat(e,"&parent=").concat(vikinger_constants.settings.stream_twitch_embeds_parent):"twitch_channel"===t?"//player.twitch.tv/?channel=".concat(e,"&parent=").concat(vikinger_constants.settings.stream_twitch_embeds_parent):void 0}n.getMediaLink=s;n.extractAttachedMedia=function(t){var e=!1,n=Number.MAX_SAFE_INTEGER,r=/youtube\.com\/watch\?v=(.*?)(&|\s|$)/gim.exec(t);if(r&&r.index<n){var o="youtube",i=r[1];e={type:o,id:i,link:s(o,i)},n=r.index}var a=/twitch\.tv\/videos\/(.*?)(\?|&|\s|$)/gim.exec(t),u=/twitch\.tv\/(.*?)(&|\s|$)/gim.exec(t);if(a&&a.index<n){var c=a[1];e={type:"twitch",id:c,link:s("twitch",c)},n=a.index}if(u&&u.index<n){var f="twitch_channel",l=u[1];e={type:f,id:l,link:s(f,l)},n=u.index}return e};n.wrapLinks=function(t){return t.replace(/((^|[^"'])https?:\/\/[^\s]*)/gim,'<a href="$1" target="_blank">$1</a>')};n.getWordInPosition=function(t,e){for(var n=0,r=t.length,o=function(t){return" "===t||"\n"===t},i=e-1;i<t.length;i++)if(o(t[i])){r=i;break}for(var a=e-1;0<=a;a--)if(o(t[a])){n=a+1;break}return{word:t.substring(n,r),startIndex:n,endIndex:r}};n.getPositionInInput=function(t,e,n){if(e.children&&0<n){var r=t.getBoundingClientRect(),o=e.children[n-1].getBoundingClientRect();return{width:o.width,height:o.height,top:o.top,left:o.left,relTop:o.top-r.top,relLeft:o.left-r.left}}return{width:0,height:0,top:0,left:0,relTop:0,relLeft:0}};n.updateShadowInput=function(t,e){t.innerHTML="";var n,r=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=c(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(e.split(""));try{for(r.s();!(n=r.n()).done;){var o=n.value,i=document.createElement("span");i.innerHTML=" "===o?"&nbsp;":"\n"===o?"<br>":o,t.appendChild(i)}}catch(t){r.e(t)}finally{r.f()}};n.insertWordInText=function(t,e,n,r){var o=3<arguments.length&&void 0!==r?r:0;return t.substring(0,n)+e+t.substring(n+o)};n.replaceEnterWithBr=function(t){return t.replace(/\r\n/gim,"<br>")};n.ucfirst=function(t){return t[0].toUpperCase()+t.substring(1)};n.hexaToRGB=function(t,e){var n=1<arguments.length&&void 0!==e?e:1,r=t.substring(1);return"rgba(".concat(Number.parseInt(r.substring(0,2),16),", ").concat(Number.parseInt(r.substring(2,4),16),", ").concat(Number.parseInt(r.substring(4,6),16),", ").concat(n,")")};n.stripHTML=function(t){return(new DOMParser).parseFromString(t,"text/html").body.textContent};n.limitLineBreaks=function(t,e){var n=1<arguments.length&&void 0!==e?e:2,r=new RegExp("(s*\ns*){".concat(n+1,",}"),"igm");return t.replace(r,"\n".repeat(n))};n.filterString=function(t,e){return e.reduce(function(t,e){return"function"==typeof e?e(t):"object"===i(e)&&"function"==typeof e.filterFN?e.filterArgs instanceof Array&&0<e.filterArgs.length?e.filterFN.apply(e,[t].concat(r(e.filterArgs))):e.filterFN(t):t},t)}},{}],3:[function(t,e,n){"use strict";function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(n,"__esModule",{value:!0}),n.createFormInput=n.createAccordion=n.createPopup=n.createSlider=n.createTooltip=n.createDropdown=n.createProgressBar=n.createHexagon=n.createTab=void 0;function o(t){return document.querySelectorAll(t).length}n.createTab=function(t){if(o(t.triggers)&&o(t.elements))return new XM_Tab(t)};n.createHexagon=function(t){if(o(t.container)||void 0!==t.containerElement)return new XM_Hexagon(t)};n.createProgressBar=function(t){if(o(t.container))return new XM_ProgressBar(t)};n.createDropdown=function(t){if((o(t.container)||void 0!==t.containerElement)&&t.controlToggle||(o(t.trigger)||void 0!==t.triggerElement)&&(o(t.container)||void 0!==t.containerElement))return new XM_Dropdown(t)};n.createTooltip=function(t){if(o(t.container)||void 0!==t.containerElement)return new XM_Tooltip(t)};n.createSlider=function(t,e){if(t instanceof HTMLElement||o(t))return new Swiper(t,e)};n.createPopup=function(t){if(o(t.trigger)||void 0!==t.triggerElement||void 0!==t.premadeContentElement)return new XM_Popup(t)};n.createAccordion=function(t){if(o(t.triggerSelector)&&o(t.contentSelector))return new XM_Accordion(t)};n.createFormInput=function(t){var i,e=r(t);try{var n=function(){var t=i.value;if(t.classList.contains("always-active"))return"continue";var e=t.querySelector("input"),n=t.querySelector("textarea"),r="active",o=void 0;e&&(o=e),n&&(o=n),o&&((""!==o.value||null!==o.getAttribute("data-pwd")&&""!==o.getAttribute("data-pwd")||o===document.activeElement)&&t.classList.add(r),o.addEventListener("focus",function(){t.classList.add(r)}),o.addEventListener("blur",function(){""===o.value&&t.classList.remove(r)}))};for(e.s();!(i=e.n()).done;)n()}catch(t){e.e(t)}finally{e.f()}}},{}],4:[function(t,e,n){"use strict";t("./form/vklogin-form-input")},{"./form/vklogin-form-input":1}]},{},[4]);