!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=194)}({0:function(t,e){t.exports={".activate-line":{"":{backgroundColor:["#FFFFFF",0,0,1]}},"@VERSION":2}},1:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,c,u,s){var l,f="function"==typeof t?t.options:t;if(u){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in u)p.call(u,d)&&!p.call(f.components,d)&&(f.components[d]=u[d])}if(s&&("function"==typeof s.beforeCreate&&(s.beforeCreate=[s.beforeCreate]),(s.beforeCreate||(s.beforeCreate=[])).unshift((function(){this[s.__module]=this})),(f.mixins||(f.mixins=[])).push(s)),e&&(f.render=e,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},f._ssrRegister=l):o&&(l=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),l)if(f.functional){f._injectStyles=l;var y=f.render;f.render=function(t,e){return l.call(e),y(t,e)}}else{var _=f.beforeCreate;f.beforeCreate=_?[].concat(_,l):[l]}return{exports:t,options:f}}n.d(e,"a",(function(){return r}))},139:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["page"]},[n("view",{staticClass:["line"]}),n("scroll-view",{attrs:{scrollY:"true"}},t._l(t.provinceList,(function(e,r){return n("view",{key:r,class:{active:r==t.activeIndex},staticStyle:{paddingLeft:"30rpx",paddingRight:"30rpx",width:"750rpx",height:"120rpx",display:"flex",flexDirection:"row",justifyContent:"space-between"},on:{click:function(n){t.chooseLocation(e.province_id,e.province_name)},touchstart:function(e){t.touchstartLocation(r)},touchend:function(e){t.touchendLocation()}}},[n("u-text",{staticStyle:{color:"#FFFFFF",alignSelf:"center",fontSize:"15px"},appendAsTree:!0,attrs:{append:"tree"}},[t._v(t._s(e.province_name))]),n("view",{staticStyle:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignSelf:"center"}},[n("u-image",{staticClass:["right-arrow"],staticStyle:{alignSelf:"center"},attrs:{src:"/static/images/icon-right-arrow2.png"}})],1)])})),0)],1)])},o=[]},166:function(t,e,n){"use strict";n.r(e);var r=n(77),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},194:function(t,e,n){"use strict";n.r(e);n(2),n(4);var r=n(43);r.default.mpType="page",r.default.route="pages/me/chooseProvince",r.default.el="#root",new Vue(r.default)},2:function(t,e,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(3).default,Vue.prototype.__$appStyle__)},3:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e.default=o.a},4:function(t,e){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(n){return e.resolve(t()).then((function(){return n}))}),(function(n){return e.resolve(t()).then((function(){throw n}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var n=uni.requireGlobal();ArrayBuffer=n.ArrayBuffer,Int8Array=n.Int8Array,Uint8Array=n.Uint8Array,Uint8ClampedArray=n.Uint8ClampedArray,Int16Array=n.Int16Array,Uint16Array=n.Uint16Array,Int32Array=n.Int32Array,Uint32Array=n.Uint32Array,Float32Array=n.Float32Array,Float64Array=n.Float64Array,BigInt64Array=n.BigInt64Array,BigUint64Array=n.BigUint64Array}},43:function(t,e,n){"use strict";var r=n(139),o=n(75),i=n(1);var a=Object(i.a)(o.default,r.b,r.c,!1,null,null,"33d797d3",!1,r.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(n(166).default,this.options.style):Object.assign(this.options.style,n(166).default)}).call(a),e.default=a.exports},75:function(t,e,n){"use strict";var r=n(76),o=n.n(r);e.default=o.a},76:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={components:{},data:function(){return{placeTouched:!1,provinceList:[],activeIndex:-1}},onLoad:function(){var t=getApp().globalData.provinceList;this.provinceList=t},methods:{updateBirthday:function(){},touchstartLocation:function(t){this.activeIndex=t},touchendLocation:function(){this.activeIndex=-1},chooseLocation:function(t,e){uni.setStorageSync("myLocationProvince",e),uni.navigateTo({url:"chooseCity?provinceId="+t})}}};e.default=r},77:function(t,e){t.exports={".page":{"":{position:["absolute",0,0,0],left:[0,0,0,0],right:[0,0,0,0],top:[0,0,0,0],bottom:[0,0,0,0],backgroundColor:["#181b27",0,0,0]}},".line":{"":{height:["1rpx",0,0,1],backgroundColor:["#393a41",0,0,1],width:["750rpx",0,0,1]}},".place-box":{"":{backgroundColor:["#4a4c52",0,0,2]}},".place-box-touched":{"":{backgroundColor:["#6d6b6b",0,0,3]}},".right-arrow":{"":{width:["32rpx",0,0,4],height:["32rpx",0,0,4],marginLeft:["20rpx",0,0,4]}},".active":{"":{backgroundColor:["#4a4c52",0,0,6]}},"@VERSION":2}}});