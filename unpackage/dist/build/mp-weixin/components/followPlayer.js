(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/followPlayer"],{"0818":function(t,e,n){"use strict";n.r(e);var i=n("5d53"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},2791:function(t,e,n){},"321d":function(t,e,n){"use strict";n.r(e);var i=n("dcef"),a=n("0818");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("f775");var u=n("f0c5"),l=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=l.exports},"5d53":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("74ee");var i={props:["item","index","list"],name:"followPlayer",data:function(){return{Play:!1}},methods:{play:function(){!1===this.Play&&this.videoContext.play(),this.Play=!0},pause:function(){!0===this.Play&&this.videoContext.pause(),this.Play=!1},click:function(){!0===this.Play?(this.videoContext.pause(),this.Play=!1):(this.videoContext.play(),this.Play=!0)},PlayerTo:function(e){t.setStorage({key:"videoList",data:e}),t.navigateTo({url:"/pages/player/player"})}},onReady:function(){this.videoContext=t.createVideoContext("myVideo",this),0===this.index&&this.play()}};e.default=i}).call(this,n("543d")["default"])},dcef:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},a=[]},f775:function(t,e,n){"use strict";var i=n("2791"),a=n.n(i);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/followPlayer-create-component',
    {
        'components/followPlayer-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("321d"))
        })
    },
    [['components/followPlayer-create-component']]
]);
