var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return l.Date.now()};function g(e,t,n){var i,r,o,a,f,u,l=0,c=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(w,t),c?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-l>=o}function w(){var e=d();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return g?m(n,o-(e-l)):n}(e))}function O(e){return f=void 0,b&&i?y(e):(i=r=void 0,a)}function T(){var e=d(),n=h(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return j(u);if(g)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=p(t)||0,v(n)&&(c=!!n.leading,o=(g="maxWait"in n)?s(p(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},T.flush=function(){return void 0===f?a:O(d())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form");b.addEventListener("input",t((function(e){"email"===e.target.name&&(y.email=e.target.value.trim());"message"===e.target.name&&(y.message=e.target.value.trim());t=y,localStorage.setItem("feedback-form-state",JSON.stringify(t));var t}),500));let y=JSON.parse(localStorage.getItem("feedback-form-state"));y?(b.elements.email.value=y.email,b.elements.message.value=y.message):y={email:"",message:""},b.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),console.log(y),b.reset()}));
//# sourceMappingURL=03-feedback.a3d13658.js.map