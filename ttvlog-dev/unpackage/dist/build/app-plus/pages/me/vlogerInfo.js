!function(e){var t={};function i(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=t,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=205)}({0:function(e,t){e.exports={".activate-line":{"":{backgroundColor:["#FFFFFF",0,0,1]}},"@VERSION":2}},1:function(e,t,i){"use strict";function r(e,t,i,r,n,o,a,s,l,c){var p,f="function"==typeof e?e.options:e;if(l){f.components||(f.components={});var u=Object.prototype.hasOwnProperty;for(var d in l)u.call(l,d)&&!u.call(f.components,d)&&(f.components[d]=l[d])}if(c&&("function"==typeof c.beforeCreate&&(c.beforeCreate=[c.beforeCreate]),(c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(f.mixins||(f.mixins=[])).push(c)),t&&(f.render=t,f.staticRenderFns=i,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),a?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},f._ssrRegister=p):n&&(p=s?function(){n.call(this,this.$root.$options.shadowRoot)}:n),p)if(f.functional){f._injectStyles=p;var g=f.render;f.render=function(e,t){return p.call(t),g(e,t)}}else{var h=f.beforeCreate;f.beforeCreate=h?[].concat(h,p):[p]}return{exports:e,options:f}}i.d(t,"a",(function(){return r}))},108:function(e,t,i){"use strict";var r=i(109),n=i.n(r);t.default=n.a},109:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=uni.getSystemInfoSync(),n=getApp(),o={data:function(){return{pageUserInfo:{},userPageId:"",astro:"",animal:"",loginWords:"\u8bf7\u767b\u5f55",screenHeight:0,statusBarHeight:0,screenHeightUnLogin:0,currentTab:0,vlogList:getApp().getDefaultVlogList(),isMe:!1,isFollow:!1,isAndroid:"android"==uni.getSystemInfoSync().platform,publicPage:0,publicTotalPage:0,publicVlogList:[],privatePage:0,privateTotalPage:0,privateVlogList:[],likedPage:0,likedTotalPage:0,likedVlogList:[],listRouteType:"myPublicList"}},onLoad:function(e){this.statusBarHeight=r.statusBarHeight;var t=r.safeArea.bottom+50;this.screenHeight=t;var i=r.safeArea.bottom;this.screenHeightUnLogin=i;var o=this,a=e.userPageId;if(!n.isStrEmpty(a)){o.userPageId=a;var s=getApp().getUserInfoSession(),l=0;null!=s&&(l=s.id),l==a&&(o.isMe=!0);var c=n.globalData.serverUrl;uni.request({method:"GET",url:c+"/userInfo/query?userId="+a,success:function(e){if(200==e.data.status){o.pageUserInfo=e.data.data;var t=o.pageUserInfo.bgImg;n.isStrEmpty(o.pageUserInfo.bgImg)&&(t="../../static/images/defaultBgImg.png"),o.userBgImg=t;var i=o.pageUserInfo.birthday,r=n.dateFormat("YYYY-mm-dd",new Date(i)).split("-"),a=r[0],s=r[1],l=r[2],c=n.getAstro(s,l);o.astro=c;var p=n.getAnimal(a);o.animal=p,o.switchTab(0)}else uni.showToast({title:e.data.msg,icon:"none",duration:3e3})}}),uni.request({method:"GET",header:{headerUserId:l,headerUserToken:n.getUserSessionToken()},url:c+"/fans/queryDoIFollowVloger?myId="+l+"&vlogerId="+a,success:function(e){200==e.data.status?o.isFollow=e.data.data:uni.showToast({title:e.data.msg,icon:"none",duration:3e3})}})}},onShow:function(){},methods:{switchTab:function(e){this.currentTab=e,0==e?(this.publicPage=0,this.publicTotalPage=0,this.listRouteType="myPublicList",this.myPublicList(0)):1==e?this.publicVlogList=[]:2==e&&(this.publicPage=0,this.publicTotalPage=0,this.listRouteType="myLikedList",this.myPublicList(0))},loadMore:function(){this.publicPage>=this.publicTotalPage||this.myPublicList(this.publicPage)},myPublicList:function(e){var t=this;0==e&&(t.publicVlogList=[]),e+=1,t.publicPage=e;var i=t.pageUserInfo.id,r=n.globalData.serverUrl,o=t.listRouteType;uni.request({method:"GET",header:{headerUserId:i,headerUserToken:n.getUserSessionToken()},url:r+"/vlog/"+o+"?userId="+i+"&page="+e+"&pageSize=10",success:function(i){if(200==i.data.status){var r=i.data.data.rows,n=i.data.data.total;t.publicVlogList=t.publicVlogList.concat(r),t.publicPage=e,t.publicTotalPage=n}}})},back:function(){uni.navigateBack({delta:1})},cancelFollow:function(){var e=this,t=e.userPageId,i=getApp().getUserInfoSession().id,r=n.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:i,headerUserToken:n.getUserSessionToken()},url:r+"/fans/cancel?myId="+i+"&vlogerId="+t,success:function(i){if(200==i.data.status){e.isFollow=!1,uni.setStorageSync("justCancelVlogerId",t);var r=e.pageUserInfo;e.pageUserInfo.myFansCounts=r.myFansCounts-1}else uni.showToast({title:i.data.msg,icon:"none",duration:3e3})}})},followMe:function(){var e=this;if(null==getApp().getUserInfoSession())return uni.showToast({duration:3e3,title:"\u8bf7\u767b\u5f55~",icon:"none"}),void uni.navigateTo({url:"../loginRegist/loginRegist",animationType:"slide-in-bottom",success:function(){e.loginWords="\u8bf7\u767b\u5f55"}});var t=e.userPageId,i=getApp().getUserInfoSession().id,r=n.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:i,headerUserToken:n.getUserSessionToken()},url:r+"/fans/follow?myId="+i+"&vlogerId="+t,success:function(i){if(200==i.data.status){e.isFollow=!0,uni.setStorageSync("justFollowVlogerId",t);var r=e.pageUserInfo;e.pageUserInfo.myFansCounts=r.myFansCounts+1}else uni.showToast({title:i.data.msg,icon:"none",duration:3e3})}})},goLogin:function(){uni.navigateTo({url:"../loginRegist/loginRegist",animationType:"slide-in-bottom"})},getGraceNumber:function(e){return getApp().graceNumber(e)},goToVlog:function(e){uni.navigateTo({url:"../vlog/vlog?type=mine&isNeedPage=1&vlogId="+e})},goMyInfo:function(){uni.navigateTo({animationType:"fade-in",url:"myInfo"})},goSettings:function(){uni.navigateTo({animationType:"fade-in",url:"settings"})},goMyFans:function(){uni.navigateTo({animationType:"fade-in",url:"myFans"})},goMyFollows:function(){uni.navigateTo({animationType:"fade-in",url:"myFollows"})},changeMyBg:function(){uni.navigateTo({animationType:"fade-in",url:"myBackImg"})},changeMyFace:function(){uni.navigateTo({animationType:"fade-in",url:"myFace"})}}};t.default=o},110:function(e,t){e.exports={".page":{"":{position:["absolute",0,0,0],left:[0,0,0,0],right:[0,0,0,0],top:[0,0,0,0],bottom:[0,0,0,0],backgroundColor:["#000000",0,0,0]}},".header":{"":{position:["absolute",0,0,1],left:[0,0,0,1],right:[0,0,0,1],flexDirection:["row",0,0,1],height:["100rpx",0,0,1],lineHeight:["100rpx",0,0,1],alignItems:["center",0,0,1],paddingLeft:["40rpx",0,0,1],paddingRight:["40rpx",0,0,1]}},".header-center":{"":{flex:[1,0,0,2],flexDirection:["row",0,0,2],alignItems:["center",0,0,2],justifyContent:["center",0,0,2]}},".header-left":{"":{color:["#999999",0,0,3],height:["100rpx",0,0,3],lineHeight:["100rpx",0,0,3],alignItems:["flex-start",0,0,3],justifyContent:["flex-end",0,0,3],fontFamily:["iconfont",0,0,3]}},".header-right":{"":{color:["#999999",0,0,3],height:["100rpx",0,0,3],lineHeight:["100rpx",0,0,3],alignItems:["flex-start",0,0,3],justifyContent:["flex-end",0,0,3],fontFamily:["iconfont",0,0,3]}},".header-right-search":{"":{height:["100rpx",0,0,4]}},".header-item":{"":{alignItems:["center",0,0,5],marginLeft:["6rpx",0,0,5],marginRight:["6rpx",0,0,5]}},".header-item-title":{"":{width:["120rpx",0,0,6],textAlign:["center",0,0,6],height:["60rpx",0,0,6],lineHeight:["60rpx",0,0,6],color:["#FFFFFF",0,0,6],fontSize:["16",0,0,6],fontWeight:["600",0,0,6]}},".header-refresh-title":{"":{width:["300rpx",0,0,7],textAlign:["center",0,0,7],height:["60rpx",0,0,7],lineHeight:["60rpx",0,0,7],color:["#FFFFFF",0,0,7],fontSize:["16",0,0,7],fontWeight:["600",0,0,7]}},".header-item-line":{"":{height:["5rpx",0,0,8],lineHeight:["8rpx",0,0,8],width:["60rpx",0,0,8],borderRadius:["8rpx",0,0,8]}},".page-write":{"":{position:["absolute",0,0,9],left:[0,0,0,9],right:[0,0,0,9],top:[0,0,0,9],bottom:[0,0,0,9],backgroundColor:["#FFFFFF",0,0,9]}},".constellation":{"":{display:["flex",0,0,10],flexDirection:["row",0,0,10],justifyContent:["center",0,0,10],backgroundColor:["#000000",0,0,10],opacity:[.5,0,0,10],width:["130rpx",0,0,10],height:["40rpx",0,0,10],borderRadius:["10",0,0,10]}},".animal":{"":{marginLeft:["10rpx",0,0,11],display:["flex",0,0,11],flexDirection:["row",0,0,11],justifyContent:["center",0,0,11],backgroundColor:["#000000",0,0,11],opacity:[.5,0,0,11],width:["60rpx",0,0,11],height:["40rpx",0,0,11],borderRadius:["10",0,0,11]}},".tab-wrapper":{"":{position:["relative",0,0,12],top:["-480rpx",0,0,12],height:["40",0,0,12],backgroundColor:["#171825",0,0,12],display:["flex",0,0,12],flexDirection:["row",0,0,12],justifyContent:["space-between",0,0,12],paddingTop:["3",0,0,12],borderTopLeftRadius:["12",0,0,12],borderTopRightRadius:["12",0,0,12]}},".tab-normal":{"":{fontSize:["18",0,0,13],fontWeight:["500",0,0,13],color:["#808080",0,0,13]}},".tab-unselected":{"":{color:["#808080",0,0,14]}},".tab-selected":{"":{color:["#FFFFFF",0,0,15]}},".vlog-list":{"":{position:["relative",0,0,16],top:["-480rpx",0,0,16],display:["flex",0,0,16],flexDirection:["row",0,0,16],flexWrap:["wrap",0,0,16],justifyContent:["flex-start",0,0,16],backgroundColor:["#000000",0,0,16]}},".vlog-cover":{"":{width:["248rpx",0,0,17],height:["360rpx",0,0,17],borderWidth:["1rpx",0,0,17]}},".login-info-wrapper":{"":{display:["flex",0,0,20],flexDirection:["column",0,0,20],justifyContent:["center",0,0,20]}},".login-info":{"":{color:["#FFFFFF",0,0,21],fontSize:["36rpx",0,0,21],fontWeight:["600",0,0,21]}},"@VERSION":2}},150:function(e,t,i){"use strict";i.d(t,"b",(function(){return r})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[i("view",{staticClass:["page"]},[i("scroll-view",{style:{height:e.screenHeight+"px"},attrs:{scrollY:"true",lowerThreshold:"250"},on:{scrolltolower:e.loadMore}},[i("u-image",{staticStyle:{width:"750rpx",height:"750rpx",boxShadow:"inset 0 -150px 180px #313030"},attrs:{id:"mybg",src:e.userBgImg,mode:"aspectFill"}}),e.isAndroid?i("u-image",{staticClass:["page"],staticStyle:{width:"750rpx",height:"700rpx",opacity:"0.5"},attrs:{src:"../../static/images/bg.png",mode:"aspectFill"},on:{click:function(t){e.changeMyBg()}}}):e._e(),i("view",{staticStyle:{position:"relative",left:"30rpx",top:"-560rpx",display:"flex",flexDirection:"column",width:"500rpx"}},[i("view",{staticStyle:{display:"flex",flexDirection:"row"}},[i("u-image",{staticStyle:{width:"200rpx",height:"200rpx",borderRadius:"100rpx",borderWidth:"1px",borderColor:"#F1F1F1"},attrs:{src:e.pageUserInfo.face,mode:"scaleToFill"}}),i("view",{staticStyle:{marginLeft:"30rpx",paddingTop:"20rpx"}},[i("u-text",{staticStyle:{fontSize:"20px",color:"#FFFFFF",fontWeight:"600"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.pageUserInfo.nickname))]),i("view",{staticStyle:{display:"flex",flexDirection:"row"}},[i("u-text",{staticStyle:{fontSize:"10px",color:"#FFFFFF",fontWeight:"300"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u6155\u7ea2\u4e66\u53f7\uff1a")]),i("u-text",{staticStyle:{fontSize:"10px",color:"#FFFFFF",fontWeight:"300"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.pageUserInfo.imoocNum))])]),i("view",{staticStyle:{display:"flex",flexDirection:"row",marginTop:"10rpx"}},[i("view",{staticClass:["constellation"]},[1==e.pageUserInfo.sex?i("u-image",{staticStyle:{width:"22rpx",height:"22rpx",alignSelf:"center"},attrs:{src:"../../static/images/icon-sex-boy.png"}}):e._e(),0==e.pageUserInfo.sex?i("u-image",{staticStyle:{width:"22rpx",height:"22rpx",alignSelf:"center"},attrs:{src:"../../static/images/icon-sex-girl.png"}}):e._e(),i("u-text",{staticStyle:{fontSize:"10px",color:"#FFFFFF",fontWeight:"bold",marginLeft:"6rpx",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.astro)+"\u5ea7")])],1),i("view",{staticClass:["animal"]},[i("u-text",{staticStyle:{fontSize:"10px",color:"#FFFFFF",fontWeight:"bold",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.animal))])])])])],1)]),i("u-text",{staticStyle:{position:"relative",top:"-520rpx",color:"#ffffff",fontSize:"14px",margin:"0 30rpx"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.pageUserInfo.description))]),i("view",{staticStyle:{position:"relative",top:"-510rpx",display:"flex",flexDirection:"row",justifyContent:"space-between"}},[i("view",{staticStyle:{display:"flex",flexDirection:"row"}},[i("view",{staticStyle:{marginLeft:"30rpx",display:"flex",flexDirection:"column",justifyContent:"center"}},[i("u-text",{staticStyle:{color:"#ffffff",fontSize:"14px",fontWeight:"bold",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.getGraceNumber(e.pageUserInfo.myFollowsCounts)))]),i("u-text",{staticStyle:{color:"#ffffff",fontSize:"12px",fontWeight:"300",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u5173\u6ce8")])]),i("view",{staticStyle:{marginLeft:"50rpx",display:"flex",flexDirection:"column",justifyContent:"center"}},[i("u-text",{staticStyle:{color:"#ffffff",fontSize:"14px",fontWeight:"bold",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.getGraceNumber(e.pageUserInfo.myFansCounts)))]),i("u-text",{staticStyle:{color:"#ffffff",fontSize:"12px",fontWeight:"300",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u7c89\u4e1d")])]),i("view",{staticStyle:{marginLeft:"50rpx",display:"flex",flexDirection:"column",justifyContent:"center"}},[i("u-text",{staticStyle:{color:"#ffffff",fontSize:"14px",fontWeight:"bold",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(e.getGraceNumber(e.pageUserInfo.totalLikeMeCounts)))]),i("u-text",{staticStyle:{color:"#ffffff",fontSize:"12px",fontWeight:"300",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u83b7\u8d5e")])])]),i("view",{staticStyle:{display:"flex",flexDirection:"row",justifyContent:"center",marginRight:"30rpx"}},[e.isMe?i("view",{staticStyle:{marginLeft:"20rpx",borderWidth:"1px",borderColor:"#FFFFFF",width:"200rpx",height:"66rpx",backgroundColor:"#545456",opacity:"0.8",borderRadius:"40rpx",display:"flex",flexDirection:"row",justifyContent:"center",alignSelf:"center"},on:{click:function(t){e.goMyInfo()}}},[i("u-text",{staticStyle:{fontSize:"13px",color:"#FFFFFF",fontWeight:"500",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u7f16\u8f91\u8d44\u6599")])]):e._e(),e.isMe?i("view",{staticStyle:{marginLeft:"20rpx",borderWidth:"1px",borderColor:"#FFFFFF",width:"100rpx",height:"66rpx",backgroundColor:"#545456",opacity:"0.8",borderRadius:"40rpx",display:"flex",flexDirection:"row",justifyContent:"center",alignSelf:"center"},on:{click:function(t){e.goSettings()}}},[i("u-image",{staticStyle:{width:"32rpx",height:"32rpx",alignSelf:"center"},attrs:{src:"../../static/images/icon-settings.png"}})],1):e._e(),!e.isMe&&e.isFollow?i("view",{staticStyle:{marginRight:"20rpx",borderWidth:"1px",borderColor:"#FFFFFF",width:"200rpx",height:"66rpx",backgroundColor:"#545456",opacity:"0.8",borderRadius:"40rpx",display:"flex",flexDirection:"row",justifyContent:"center",alignSelf:"center"},on:{click:function(t){e.cancelFollow()}}},[i("u-text",{staticStyle:{fontSize:"13px",color:"#FFFFFF",fontWeight:"500",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u5df2\u5173\u6ce8")])]):e._e(),e.isMe||e.isFollow?e._e():i("view",{staticStyle:{marginRight:"20rpx",borderWidth:"1px",borderColor:"#FFFFFF",width:"200rpx",height:"66rpx",backgroundColor:"#ef274d",opacity:"0.8",borderRadius:"40rpx",display:"flex",flexDirection:"row",justifyContent:"center",alignSelf:"center"},on:{click:function(t){e.followMe()}}},[i("u-text",{staticStyle:{fontSize:"13px",color:"#FFFFFF",fontWeight:"500",alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u5173\u6ce8\u6211")])])])]),i("view",{staticClass:["tab-wrapper"]},[i("view",{staticStyle:{width:"250rpx",alignSelf:"center"},on:{click:function(t){e.switchTab(0)}}},[i("u-text",{staticClass:["tab-normal"],class:{"tab-selected":0==e.currentTab},staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u4f5c\u54c1")]),0==e.currentTab?i("view",{staticStyle:{marginTop:"5px",height:"5rpx",width:"250rpx",borderRadius:"6rpx",backgroundColor:"#ef274d"}}):e._e()]),i("view",{staticStyle:{width:"250rpx",alignSelf:"center"},on:{click:function(t){e.switchTab(1)}}},[i("u-text",{staticClass:["tab-normal"],class:{"tab-selected":1==e.currentTab},staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u79c1\u5bc6")]),1==e.currentTab?i("view",{staticStyle:{marginTop:"5px",height:"5rpx",width:"250rpx",borderRadius:"6rpx",backgroundColor:"#ef274d"}}):e._e()]),i("view",{staticStyle:{width:"250rpx",alignSelf:"center"},on:{click:function(t){e.switchTab(2)}}},[i("u-text",{staticClass:["tab-normal"],class:{"tab-selected":2==e.currentTab},staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("\u8d5e\u8fc7")]),2==e.currentTab?i("view",{staticStyle:{marginTop:"5px",height:"5rpx",width:"250rpx",borderRadius:"6rpx",backgroundColor:"#ef274d"}}):e._e()])]),i("view",{staticClass:["vlog-list"]},e._l(e.publicVlogList,(function(t,r){return i("block",{key:r},[i("u-image",{staticClass:["vlog-cover"],staticStyle:{alignSelf:"center"},attrs:{src:t.cover,mode:"aspectFill"},on:{click:function(i){e.goToVlog(t.vlogId)}}})],1)})),1),0==e.publicVlogList.length?i("view",{staticStyle:{backgroundColor:"#000000",width:"750rpx",height:"300rpx",display:"flex",flexDirection:"row",justifyContent:"center",position:"relative",top:"-480rpx"}},[i("u-text",{staticStyle:{color:"#FFFFFF",fontSize:"14px",marginTop:"200rpx"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("~ \u7a7a\u7a7a\u5982\u4e5f ~")])]):e._e(),e.publicVlogList.length>0?i("view",{staticStyle:{width:"750rpx",display:"flex",flexDirection:"row",justifyContent:"center",position:"relative",top:"-260rpx"}},[i("u-text",{staticStyle:{color:"#FFFFFF",fontSize:"14px"},appendAsTree:!0,attrs:{append:"tree"}},[e._v("- \u77e5\u6df1\u6d45 | \u552f\u6709\u4f60 -")])]):e._e()],1),i("view",{staticClass:["header"],style:{marginTop:e.statusBarHeight+"px"}},[i("u-image",{staticClass:["header-right-search"],staticStyle:{width:"40rpx",height:"40rpx",opacity:"0.8"},attrs:{src:"../../static/images/icon-back.png"},on:{click:function(t){e.back()}}}),i("view",{staticClass:["header-center"]},[i("view",{staticClass:["header-item"],on:{click:function(t){e.tapFollow(1)}}},[i("u-text",{staticClass:["header-item-title"],appendAsTree:!0,attrs:{append:"tree"}})])]),i("u-image",{staticClass:["header-right-search"],staticStyle:{width:"50rpx",height:"50rpx",opacity:"0"},attrs:{src:"../../static/images/icon-search.png"}})],1)],1)])},n=[]},177:function(e,t,i){"use strict";i.r(t);var r=i(110),n=i.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(o);t.default=n.a},2:function(e,t,i){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(i(3).default,Vue.prototype.__$appStyle__)},205:function(e,t,i){"use strict";i.r(t);i(2),i(4);var r=i(54);r.default.mpType="page",r.default.route="pages/me/vlogerInfo",r.default.el="#root",new Vue(r.default)},3:function(e,t,i){"use strict";i.r(t);var r=i(0),n=i.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return r[e]}))}(o);t.default=n.a},4:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(i){return t.resolve(e()).then((function(){return i}))}),(function(i){return t.resolve(e()).then((function(){throw i}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var i=uni.requireGlobal();ArrayBuffer=i.ArrayBuffer,Int8Array=i.Int8Array,Uint8Array=i.Uint8Array,Uint8ClampedArray=i.Uint8ClampedArray,Int16Array=i.Int16Array,Uint16Array=i.Uint16Array,Int32Array=i.Int32Array,Uint32Array=i.Uint32Array,Float32Array=i.Float32Array,Float64Array=i.Float64Array,BigInt64Array=i.BigInt64Array,BigUint64Array=i.BigUint64Array}},54:function(e,t,i){"use strict";var r=i(150),n=i(108),o=i(1);var a=Object(o.a)(n.default,r.b,r.c,!1,null,null,"366a6a92",!1,r.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(i(177).default,this.options.style):Object.assign(this.options.style,i(177).default)}).call(a),t.default=a.exports}});