!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=203)}({0:function(t,e){t.exports={".activate-line":{"":{backgroundColor:["#FFFFFF",0,0,1]}},"@VERSION":2}},1:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a,u,s,l){var f,c="function"==typeof t?t.options:t;if(s){c.components||(c.components={});var p=Object.prototype.hasOwnProperty;for(var d in s)p.call(s,d)&&!p.call(c.components,d)&&(c.components[d]=s[d])}if(l&&("function"==typeof l.beforeCreate&&(l.beforeCreate=[l.beforeCreate]),(l.beforeCreate||(l.beforeCreate=[])).unshift((function(){this[l.__module]=this})),(c.mixins||(c.mixins=[])).push(l)),e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=f):o&&(f=u?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(c.functional){c._injectStyles=f;var y=c.render;c.render=function(t,e){return f.call(e),y(t,e)}}else{var _=c.beforeCreate;c.beforeCreate=_?[].concat(_,f):[f]}return{exports:t,options:c}}r.d(e,"a",(function(){return n}))},102:function(t,e,r){"use strict";var n=r(103),o=r.n(n);e.default=o.a},103:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=uni.getSystemInfoSync(),o={data:function(){return{videoUrl:"",objectFit:"fill",screenSafeHeight:n.safeArea.bottom}},onLoad:function(t){var e=t.videoUrl;this.videoUrl=e;var r=parseInt(t.width),n=parseInt(t.height);this.width=r,this.height=n,this.objectFit=r>=n?"contain":"fill"},methods:{}};e.default=o},104:function(t,e){t.exports={".page":{"":{position:["absolute",0,0,0],left:[0,0,0,0],right:[0,0,0,0],top:[0,0,0,0],bottom:[0,0,0,0],backgroundColor:["#000000",0,0,0]}},"@VERSION":2}},148:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["page"],staticStyle:{backgroundColor:"#007AFF"}},[e("u-video",{staticStyle:{width:"750rpx"},style:{height:this.screenSafeHeight+"px"},attrs:{src:this.videoUrl,autoplay:"true",controls:"true",objectFit:this.objectFit}})],1)])},o=[]},175:function(t,e,r){"use strict";r.r(e);var n=r(104),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},2:function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(3).default,Vue.prototype.__$appStyle__)},203:function(t,e,r){"use strict";r.r(e);r(2),r(4);var n=r(52);n.default.mpType="page",n.default.route="pages/publish/preview",n.default.el="#root",new Vue(n.default)},3:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e.default=o.a},4:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(r){return e.resolve(t()).then((function(){return r}))}),(function(r){return e.resolve(t()).then((function(){throw r}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}},52:function(t,e,r){"use strict";var n=r(148),o=r(102),i=r(1);var a=Object(i.a)(o.default,n.b,n.c,!1,null,null,"6c9a9f38",!1,n.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(175).default,this.options.style):Object.assign(this.options.style,r(175).default)}).call(a),e.default=a.exports}});