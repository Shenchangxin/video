(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/changeList"],{"004e":function(t,e,n){"use strict";n.r(e);var c=n("af42"),i=n("d8cd");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("f866");var u=n("f0c5"),r=Object(u["a"])(i["default"],c["b"],c["c"],!1,null,null,null,!1,c["a"],void 0);e["default"]=r.exports},"21f5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("74ee");var c={name:"changeList",props:["city","letter"],data:function(){return{list:["北京","深圳","郑州","贵州","广州","上海","新乡","石家庄","重庆","天津","西安","武汉","杭州","信阳","南京"],viewId:"",tcity:"北京"}},watch:{letter:function(){this.viewId=this.letter}},methods:{click:function(e){var n=this;t.setStorage({key:"city",data:e}),t.getStorage({key:"city",success:function(t){n.tcity=t.data}}),t.redirectTo({url:"/pages/city/city"})}}};e.default=c}).call(this,n("543d")["default"])},af42:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var c=function(){var t=this.$createElement;this._self._c},i=[]},d8cd:function(t,e,n){"use strict";n.r(e);var c=n("21f5"),i=n.n(c);for(var a in c)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(a);e["default"]=i.a},ee70:function(t,e,n){},f866:function(t,e,n){"use strict";var c=n("ee70"),i=n.n(c);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/changeList-create-component',
    {
        'components/changeList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("004e"))
        })
    },
    [['components/changeList-create-component']]
]);
