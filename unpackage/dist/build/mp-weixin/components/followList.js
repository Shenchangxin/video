(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/followList"],{1084:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},o=[]},1766:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("74ee");var i=null,o={props:["list"],name:"followList",components:{followPlayer:function(){e.e("components/followPlayer").then(function(){return resolve(e("321d"))}.bind(null,e)).catch(e.oe)}},data:function(){return{index:0}},methods:{scroll:function(t){var n=this;clearTimeout(i),i=setTimeout((function(){var e=Math.floor((t.detail.scrollTop+150)/550);n.index=e}),300)}},watch:{index:function(){this.index>=0&&this.index<this.list.length&&this.$refs.player[this.index].play(),this.index-1>=0&&this.index-1<this.list.length&&this.$refs.pause[this.index-1].pause(),this.index+1>=0&&this.index+1<this.list.length&&this.$refs.pause[this.index+1].pause()}}};n.default=o},"675d":function(t,n,e){},cadb:function(t,n,e){"use strict";e.r(n);var i=e("1766"),o=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=o.a},cb6d:function(t,n,e){"use strict";e.r(n);var i=e("1084"),o=e("cadb");for(var s in o)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(s);e("d9e9");var l=e("f0c5"),u=Object(l["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=u.exports},d9e9:function(t,n,e){"use strict";var i=e("675d"),o=e.n(i);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/followList-create-component',
    {
        'components/followList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cb6d"))
        })
    },
    [['components/followList-create-component']]
]);
