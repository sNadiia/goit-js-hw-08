!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,v=Math.max,m=Math.min,y=function(){return d.Date.now()};function g(e,t,n){var r,i,u,a,f,c,l=0,d=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError(o);function S(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,f=setTimeout(O,t),d?S(e):a}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function O(){var e=y();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?m(n,u-(e-l)):n}(e))}function T(e){return f=void 0,g&&r?S(e):(r=i=void 0,a)}function w(){var e=y(),n=j(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return h(c);if(s)return f=setTimeout(O,t),S(c)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(d=!!n.leading,u=(s="maxWait"in n)?v(b(n.maxWait)||0,t):u,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?a:T(y())},w}function p(e){var o=void 0===e?"undefined":t(n)(e);return!!e&&("object"==o||"function"==o)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var o="function"==typeof e.valueOf?e.valueOf():e;e=p(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var c=u.test(e);return c||a.test(e)?f(e.slice(2),c?2:8):i.test(e)?NaN:+e}var S=document.querySelector(".feedback-form"),h=document.querySelector("input"),j=document.querySelector("textarea"),O=document.querySelector("button"),T="feedback-form-state",w={},N=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},E=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};S.addEventListener("input",(function(e){var t=e.target.tagName,n=e.target.value;"INPUT"===t?(w.email=n,N(T,w)):"TEXTAREA"===t&&(w.message=n,N(T,w))})),window.addEventListener("DOMContentLoaded",(function(e){var t=E(T);void 0!==t.email&&(h.value=t.email);void 0!==t.message&&(j.value=t.message)})),O.addEventListener("click",(function(e){e.preventDefault(),console.log(E(T)),localStorage.removeItem(T),h.value="",j.value=""})),_.throttle((function(){console.log("Function throttled!")}),1e3)()}();
//# sourceMappingURL=03-feedback.05c2a09f.js.map
