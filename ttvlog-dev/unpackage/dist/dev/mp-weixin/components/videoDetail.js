(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/videoDetail"],{

/***/ 313:
/*!******************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _videoDetail_vue_vue_type_template_id_040d767e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoDetail.vue?vue&type=template&id=040d767e& */ 314);
/* harmony import */ var _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoDetail.vue?vue&type=script&lang=js& */ 316);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videoDetail.vue?vue&type=style&index=0&lang=css& */ 318);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _videoDetail_vue_vue_type_template_id_040d767e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _videoDetail_vue_vue_type_template_id_040d767e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _videoDetail_vue_vue_type_template_id_040d767e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/videoDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 314:
/*!*************************************************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=template&id=040d767e& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_template_id_040d767e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videoDetail.vue?vue&type=template&id=040d767e& */ 315);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_template_id_040d767e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_template_id_040d767e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_template_id_040d767e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_template_id_040d767e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 315:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/BaiduNetdiskDownload/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=template&id=040d767e& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 320))
    },
    uniPopupComments: function () {
      return Promise.all(/*! import() | uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup-comments/uni-popup-comments.vue */ 327))
    },
    uniPopupShare: function () {
      return Promise.all(/*! import() | uni_modules/uni-popup/components/uni-popup-share/uni-popup-share */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-popup/components/uni-popup-share/uni-popup-share")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue */ 335))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 316:
/*!*******************************************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videoDetail.vue?vue&type=script&lang=js& */ 317);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 317:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/BaiduNetdiskDownload/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var app = getApp();
var _default = {
  props: {
    screenHeight: {
      default: 0
    },
    src: {
      default: false
    },
    playStatus: {
      default: false
    },
    vlogId: {
      default: false
    }
  },
  data: function data() {
    return {
      thisVlog: {},
      // 当前的短视频对象
      thisVlogId: "",
      // 当前的短视频主键id
      thisVlogerId: "",
      // 当前的短视频博主的主键id
      userId: "",
      playerCur: 0,
      page: 0,
      totalPage: 0,
      playerList: this.videoList,
      thisVlogTotalComentCounts: 0,
      videoContext: {},
      currentIndex: 0,
      contentOffsetY: 0,
      times: new Date().getTime(),
      objectFit: "fill",
      isIOS: uni.getSystemInfoSync().platform == "ios"
    };
  },
  created: function created() {
    if (!this.isIOS) {
      this.objectFit = "cover";
    }
    var myUserInfo = getApp().getUserInfoSession();
    if (myUserInfo != null) {
      this.userId = getApp().getUserInfoSession().id;
    }

    // 查询首页短视频列表
    this.displayVideoPaging(this.page + 1, true);
    var videoContext = uni.createVideoContext('videoDetail');
    this.videoContext = videoContext;
  },
  watch: {
    refreshList: function refreshList(value) {
      var me = this;
      var newList = value;
      if (newList != null && newList != undefined && newList.length > 0) {
        me.playerList = newList;
      }

      // 重置
      this.playerCur = 0;
      this.currentIndex = 0;
      this.contentOffsetY = 0;
    },
    playStatus: function playStatus(val) {
      var me = this;
      if (!val) {
        me.videoContext.pause();
      } else {
        me.videoContext.play();
      }
    }
  },
  methods: {
    // 喜欢/点赞的list重新设置
    reLikePlayList: function reLikePlayList(vlogId) {
      var me = this;
      var playerList = me.playerList;
      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true
      for (var i = 0; i < playerList.length; i++) {
        var vlog = playerList[i];
        if (vlog.vlogId == vlogId) {
          vlog.doILikeThisVlog = true;
          playerList.splice(i, 1, vlog);
        }
      }
      me.playerList = playerList;
    },
    reDislikePlayList: function reDislikePlayList(vlogId) {
      var me = this;
      var playerList = me.playerList;
      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true
      for (var i = 0; i < playerList.length; i++) {
        var vlog = playerList[i];
        if (vlog.vlogId == vlogId) {
          vlog.doILikeThisVlog = false;
          playerList.splice(i, 1, vlog);
        }
      }
      me.playerList = playerList;
    },
    reChangeVlogLikedCountsInPlayList: function reChangeVlogLikedCountsInPlayList(vlogId, counts) {
      var me = this;
      var playerList = me.playerList;
      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true
      for (var i = 0; i < playerList.length; i++) {
        var vlog = playerList[i];
        if (vlog.vlogId == vlogId) {
          vlog.likeCounts = counts;
          playerList.splice(i, 1, vlog);
        }
      }
      me.playerList = playerList;
    },
    refreshVlogCounts: function refreshVlogCounts() {
      // 查询当前点赞数，重新赋值给当前视频
      var me = this;
      var serverUrl = app.globalData.serverUrl;
      var currentIndex = me.playerCur;
      var vlog = me.playerList[currentIndex];
      uni.request({
        method: "POST",
        url: serverUrl + "/vlog/totalLikedCounts?vlogId=" + vlog.vlogId,
        success: function success(result) {
          if (result.data.status == 200) {
            var counts = result.data.data;
            me.reChangeVlogLikedCountsInPlayList(vlog.vlogId, counts);
          }
        }
      });
    },
    likeOrDislikeVlog: function likeOrDislikeVlog(isLike) {
      var me = this;
      if (isLike == 1) {
        // 喜欢/点赞视频

        var myUserInfo = getApp().getUserInfoSession();
        if (myUserInfo == null) {
          uni.showToast({
            duration: 3000,
            title: "请登录~",
            icon: "none"
          });
          uni.navigateTo({
            url: "../loginRegist/loginRegist",
            animationType: "slide-in-bottom",
            success: function success() {
              me.loginWords = "请登录";
            }
          });
          return;
        }
        var userId = getApp().getUserInfoSession().id;
        var serverUrl = app.globalData.serverUrl;
        var currentIndex = me.playerCur;
        var vlog = me.playerList[currentIndex];
        uni.request({
          method: "POST",
          header: {
            headerUserId: userId,
            headerUserToken: app.getUserSessionToken()
          },
          url: serverUrl + "/vlog/like?userId=" + userId + "&vlogerId=" + vlog.vlogerId + "&vlogId=" + vlog.vlogId,
          success: function success(result) {
            if (result.data.status == 200) {
              me.reLikePlayList(vlog.vlogId);
              me.refreshVlogCounts();
            } else {
              uni.showToast({
                title: result.data.msg,
                icon: "none",
                duration: 3000
              });
            }
          }
        });
      } else if (isLike == 0) {
        // 取消喜欢/点赞视频

        var myUserInfo = getApp().getUserInfoSession();
        if (myUserInfo == null) {
          uni.showToast({
            duration: 3000,
            title: "请登录~",
            icon: "none"
          });
          uni.navigateTo({
            url: "../loginRegist/loginRegist",
            animationType: "slide-in-bottom",
            success: function success() {
              me.loginWords = "请登录";
            }
          });
          return;
        }
        var userId = getApp().getUserInfoSession().id;
        var serverUrl = app.globalData.serverUrl;
        var currentIndex = me.playerCur;
        var vlog = me.playerList[currentIndex];
        uni.request({
          method: "POST",
          header: {
            headerUserId: userId,
            headerUserToken: app.getUserSessionToken()
          },
          url: serverUrl + "/vlog/unlike?userId=" + userId + "&vlogerId=" + vlog.vlogerId + "&vlogId=" + vlog.vlogId,
          success: function success(result) {
            if (result.data.status == 200) {
              me.reDislikePlayList(vlog.vlogId);
              me.refreshVlogCounts();
            } else {
              uni.showToast({
                title: result.data.msg,
                icon: "none",
                duration: 3000
              });
            }
          }
        });
      }
    },
    // 关注后的list重新设置
    reFollowPlayList: function reFollowPlayList(vlogerId) {
      var me = this;
      var playerList = me.playerList;

      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true
      for (var i = 0; i < playerList.length; i++) {
        var vlog = playerList[i];
        if (vlog.vlogerId == vlogerId) {
          vlog.doIFollowVloger = true;
          playerList.splice(i, 1, vlog);
        }
      }
      me.playerList = playerList;
    },
    // 取关后的list重新设置
    reCancelPlayList: function reCancelPlayList(vlogerId) {
      var me = this;
      var playerList = me.playerList;

      // 关注以后，循环当前playerList，修改对应粉丝关系的doIFollowVloger改为true
      for (var i = 0; i < playerList.length; i++) {
        var vlog = playerList[i];
        if (vlog.vlogerId == vlogerId) {
          vlog.doIFollowVloger = false;
          playerList.splice(i, 1, vlog);
        }
      }
      me.playerList = playerList;
    },
    // 关注博主
    followMe: function followMe(vlogerId) {
      var me = this;
      var myUserInfo = getApp().getUserInfoSession();
      if (myUserInfo == null) {
        uni.showToast({
          duration: 3000,
          title: "请登录~",
          icon: "none"
        });
        uni.navigateTo({
          url: "../loginRegist/loginRegist",
          animationType: "slide-in-bottom",
          success: function success() {
            me.loginWords = "请登录";
          }
        });
        return;
      }
      var userId = getApp().getUserInfoSession().id;
      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "POST",
        header: {
          headerUserId: userId,
          headerUserToken: app.getUserSessionToken()
        },
        url: serverUrl + "/fans/follow?myId=" + userId + "&vlogerId=" + vlogerId,
        success: function success(result) {
          if (result.data.status == 200) {
            me.reFollowPlayList(vlogerId);
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000
            });
          }
        }
      });
    },
    goUserInfoSeeSee: function goUserInfoSeeSee(userId) {
      uni.setStorageSync("userPageId", userId);
      uni.navigateTo({
        url: "/pages/me/vlogerInfo?userPageId=" + userId
      });
    },
    listScroll: function listScroll(e) {},
    downloadVlog: function downloadVlog() {
      var me = this;
      var serverUrl = app.globalData.serverUrl;
      var currentIndex = me.playerCur;
      var vlog = me.playerList[currentIndex];
      var pendingLength = vlog.url;
    },
    onplay: function onplay(e) {
      if (uni.getSystemInfoSync().platform == 'ios') {
        this.doplay(0.1);
      }
    },
    onerror: function onerror(err) {},
    timeupdate: function timeupdate(e) {
      if (e.detail.currentTime > 0.2) {
        this.doplay(e.detail.currentTime);
      }
    },
    playOrPause: function playOrPause() {
      var me = this;
      var playStatus = this.playStatus;
      if (!playStatus) {
        me.videoContext.pause();
      } else {
        me.videoContext.play();
      }
      this.playStatus = !playStatus;
    },
    scroll: function scroll(e) {},
    displayVideoPaging: function displayVideoPaging(page, needClearList) {
      // 查询首页短视频列表
      var me = this;
      var vlogId = me.vlogId;
      var myUserInfo = getApp().getUserInfoSession();
      var userId = "";
      if (myUserInfo != null) {
        userId = myUserInfo.id;
      }
      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "GET",
        url: serverUrl + "/vlog/detail?userId=" + userId + "&vlogId=" + vlogId,
        success: function success(result) {
          if (result.data.status == 200) {
            var vlog = result.data.data;
            var playerList = [];
            playerList.push(vlog);
            me.playerList = playerList;
            me.freshCommentCounts();
            me.setThisVlogInfo();
          } else {
            uni.showToast({
              title: result.data.msg,
              icon: "none",
              duration: 3000
            });
          }
        }
      });
    },
    doplay: function doplay(time) {
      if (time > 0) {
        this.playerList[this.playerCur].play = true;
      }
    },
    onchange: function onchange(index) {
      if (index != this.playerCur) {
        this.playerList[this.playerCur].play = false;
        this.playerCur = index;
      }
      this.setThisVlogInfo();
    },
    // 设置当前vlog的信息
    setThisVlogInfo: function setThisVlogInfo() {
      var me = this;
      var serverUrl = app.globalData.serverUrl;
      if (me.playerList != null && me.playerList != undefined && me.playerList.length > 0) {
        var currentIndex = me.playerCur;
        var vlog = me.playerList[currentIndex];
        this.thisVlog = vlog;
        this.thisVlogId = vlog.vlogId;
        this.thisVlogerId = vlog.vlogerId;
      }
    },
    freshCommentCounts: function freshCommentCounts() {
      var me = this;
      var userId = getApp().getUserInfoSession().id;
      var serverUrl = app.globalData.serverUrl;
      if (me.playerList == null || me.playerList == undefined || me.playerList.length == 0) {
        return;
      }
      var currentIndex = me.playerCur;
      var vlog = me.playerList[currentIndex];
      var vlogId = vlog.vlogId;
      var serverUrl = app.globalData.serverUrl;
      uni.request({
        method: "GET",
        url: serverUrl + "/comment/counts?vlogId=" + vlogId,
        success: function success(result) {
          if (result.data.status == 200) {
            me.thisVlogTotalComentCounts = result.data.data;
          } else {
            me.thisVlogTotalComentCounts = 0;
          }
        }
      });
    },
    commentToggle: function commentToggle() {
      this.$refs.comment.open();
      uni.hideTabBar({
        animation: true
      });
    },
    shareToggle: function shareToggle() {
      this.$refs.share.open();
      uni.hideTabBar({
        animation: true
      });
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 318:
/*!***************************************************************************************************************************!*\
  !*** D:/BaiduNetdiskDownload/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../app/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./videoDetail.vue?vue&type=style&index=0&lang=css& */ 319);
/* harmony import */ var _app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_app_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_app_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_app_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_videoDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 319:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/BaiduNetdiskDownload/imooc-red-book/前端源码/RedBook-Dev/components/videoDetail.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/videoDetail.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/videoDetail-create-component',
    {
        'components/videoDetail-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(313))
        })
    },
    [['components/videoDetail-create-component']]
]);
