!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i");function r(e,n){var o=Math.random()>.3,t={position:e,delay:n};return new Promise((function(e,i){setTimeout((function(){o?e(t):i(t)}),n)}))}var a=document.querySelector(".form");a.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(a.delay.value),o=Number(a.amount.value),t=Number(a.step.value),u=1;u<=o;u+=1)r(u,n).then((function(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),n+=t})),a.delay.value=500,a.step.value=300,a.amount.value=4}();
//# sourceMappingURL=03-promises.854ab294.js.map
