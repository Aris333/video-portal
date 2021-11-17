(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/files"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ContentFileView.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ContentFileView.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/DesktopToolbar */ "./resources/js/components/FilesView/DesktopToolbar.vue");
/* harmony import */ var _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/FileBrowser */ "./resources/js/components/FilesView/FileBrowser.vue");
/* harmony import */ var _components_FilesView_ContextMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/ContextMenu */ "./resources/js/components/FilesView/ContextMenu.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FilesView',
  components: {
    DesktopToolbar: _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    FileBrowser: _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContextMenu: _components_FilesView_ContextMenu__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['config'])),
  methods: {
    fileViewClick: function fileViewClick() {
      _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('contextMenu:hide');
    },
    contextMenu: function contextMenu(event, item) {
      _bus__WEBPACK_IMPORTED_MODULE_4__["events"].$emit('contextMenu:show', event, item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Others_TreeMenuNavigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Others/TreeMenuNavigator */ "./resources/js/components/Others/TreeMenuNavigator.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TreeMenuNavigator',
  props: ['nodes', 'depth'],
  components: {
    TreeMenuNavigator: _components_Others_TreeMenuNavigator__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ChevronRightIcon"],
    FolderIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["FolderIcon"]
  },
  computed: {
    indent: function indent() {
      var offset = window.innerWidth <= 1024 ? 17 : 22;
      var value = this.depth == 0 ? offset : offset + this.depth * 20;
      return {
        paddingLeft: value + 'px'
      };
    }
  },
  data: function data() {
    return {
      isVisible: false,
      isSelected: false
    };
  },
  methods: {
    getFolder: function getFolder() {
      _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$emit('show-folder', this.nodes); // Get folder content

      this.$store.dispatch('getFolder', [{
        folder: this.nodes,
        back: false,
        init: false
      }]);
    },
    showTree: function showTree() {
      this.isVisible = !this.isVisible;
    }
  },
  created: function created() {
    var _this = this;

    // Select clicked folder
    _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$on('show-folder', function (node) {
      _this.isSelected = false;
      if (_this.nodes.unique_id == node.unique_id) _this.isSelected = true;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UpgradeSidebarBanner',
  components: {
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["HardDriveIcon"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['config'])), {}, {
    storage: function storage() {
      return this.$store.getters.user.relationships.storage.data.attributes;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_FilesView_ToolbarButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/ToolbarButton */ "./resources/js/components/FilesView/ToolbarButton.vue");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue_slider_component_theme_default_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-slider-component/theme/default.css */ "./node_modules/vue-slider-component/theme/default.css");
/* harmony import */ var vue_slider_component_theme_default_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component_theme_default_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_frame_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-frame-video */ "./node_modules/vue-frame-video/dist/vue-frame-video.umd.min.js");
/* harmony import */ var vue_frame_video__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_frame_video__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! video.js/dist/video-js.css */ "./node_modules/video.js/dist/video-js.css");
/* harmony import */ var video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(video_js_dist_video_js_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_tabs_with_active_line__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-tabs-with-active-line */ "./node_modules/vue-tabs-with-active-line/dist/vue-tabs-with-active-line.esm.js");
/* harmony import */ var vue_content_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-content-loading */ "./node_modules/vue-content-loading/dist/vuecontentloading.js");
/* harmony import */ var vue_content_loading__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_content_loading__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-select/dist/vue-select.css */ "./node_modules/vue-select/dist/vue-select.css");
/* harmony import */ var vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vue_select_dist_vue_select_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _popperjs_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @popperjs/core */ "./node_modules/@popperjs/core/lib/index.js");
/* harmony import */ var _components_paintTool_Editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/paintTool/Editor */ "./resources/js/components/paintTool/Editor.vue");
/* harmony import */ var vue_emoji_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-emoji-picker */ "./node_modules/vue-emoji-picker/dist-module/main.js");
/* harmony import */ var vue_emoji_picker__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_emoji_picker__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_painting__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/painting */ "./resources/js/assets/painting.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_js_crop__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/js/crop */ "./resources/js/assets/js/crop.js");
/* harmony import */ var _assets_js_canvasHistory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/js/canvasHistory */ "./resources/js/assets/js/canvasHistory.js");
/* harmony import */ var _components_FilesView_FilePreviewNavigationPanel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/FilesView/FilePreviewNavigationPanel */ "./resources/js/components/FilesView/FilePreviewNavigationPanel.vue");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/components/FilesView/DesktopToolbar */ "./resources/js/components/FilesView/DesktopToolbar.vue");
/* harmony import */ var _components_FilesView_FileFullPreview__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/components/FilesView/FileFullPreview */ "./resources/js/components/FilesView/FileFullPreview.vue");
/* harmony import */ var _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/components/FilesView/FileItemGrid */ "./resources/js/components/FilesView/FileItemGrid.vue");
/* harmony import */ var _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @/components/FilesView/FileBrowser */ "./resources/js/components/FilesView/FileBrowser.vue");
/* harmony import */ var _components_FilesView_ContextMenu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/components/FilesView/ContextMenu */ "./resources/js/components/FilesView/ContextMenu.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_FilesView_MobileMenu__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @/components/FilesView/MobileMenu */ "./resources/js/components/FilesView/MobileMenu.vue");
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var _components_Others_MoveItem__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @/components/Others/MoveItem */ "./resources/js/components/Others/MoveItem.vue");
/* harmony import */ var _components_Others_Vignette__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @/components/Others/Vignette */ "./resources/js/components/Others/Vignette.vue");
/* harmony import */ var _components_FilesView_Alert__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @/components/FilesView/Alert */ "./resources/js/components/FilesView/Alert.vue");
/* harmony import */ var _components_FilesView_FileReviewNavigationPanel__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../components/FilesView/FileReviewNavigationPanel */ "./resources/js/components/FilesView/FileReviewNavigationPanel.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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







 // import { TimeAgo } from 'vue2-timeago'
// import 'vue2-timeago/dist/vue2-timeago.css'


var video;




var debounce = function debounce(callback, duration) {
  var timer;
  return function (event) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback(event);
    }, duration);
  };
}; //



























/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ComparisonMediaView',
  components: {
    FileReviewNavigationPanel: _components_FilesView_FileReviewNavigationPanel__WEBPACK_IMPORTED_MODULE_36__["default"],
    ToolbarButton: _components_FilesView_ToolbarButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    Editor: _components_paintTool_Editor__WEBPACK_IMPORTED_MODULE_12__["default"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_32__["default"],
    VueSlider: vue_slider_component__WEBPACK_IMPORTED_MODULE_4___default.a,
    Painting: _assets_painting__WEBPACK_IMPORTED_MODULE_14__["default"],
    FrameVideo: vue_frame_video__WEBPACK_IMPORTED_MODULE_6___default.a,
    EmojiPicker: vue_emoji_picker__WEBPACK_IMPORTED_MODULE_13___default.a,
    Tabs: vue_tabs_with_active_line__WEBPACK_IMPORTED_MODULE_8__["default"] // ,TimeAgo
    ,
    VueContentLoading: vue_content_loading__WEBPACK_IMPORTED_MODULE_9___default.a,
    moment: moment__WEBPACK_IMPORTED_MODULE_16___default.a,
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_21__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_21__["ValidationObserver"],
    FileFullPreview: _components_FilesView_FileFullPreview__WEBPACK_IMPORTED_MODULE_24__["default"],
    DesktopToolbar: _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_23__["default"],
    FileItemGrid: _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_25__["default"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_30__["default"],
    FileBrowser: _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_26__["default"],
    ContextMenu: _components_FilesView_ContextMenu__WEBPACK_IMPORTED_MODULE_27__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_31__["default"],
    MobileMenu: _components_FilesView_MobileMenu__WEBPACK_IMPORTED_MODULE_29__["default"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_28__["default"],
    MoveItem: _components_Others_MoveItem__WEBPACK_IMPORTED_MODULE_33__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_22__["required"],
    Vignette: _components_Others_Vignette__WEBPACK_IMPORTED_MODULE_34__["default"],
    Alert: _components_FilesView_Alert__WEBPACK_IMPORTED_MODULE_35__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['myFileInfo', 'isProcessingFile', 'config', 'updateFps', 'data', 'user', 'lastTwoFiles', 'pageReload'])), {}, {
    // fileName() {
    //   let file = this.currentFile.basename;
    //   var index = file.indexOf('-');
    //   var arr = [file.slice(0, index),file.slice(index + 1)];
    //   return arr[1]
    // },
    // first_video_src()
    // {
    // get()
    // {
    //   return   this.first_video_src =  this.lastTwoFiles[0].file_url
    // },
    // set(value)
    // {
    //   $('#videoElement1').src = value.file_ur
    // }
    // },
    // second_video_src()
    // {
    //     return    this.second_video_src = this.lastTwoFiles[1].file_url
    // },
    // total_media_time:
    // {
    //   get()
    //   {
    //     return 0
    //   },
    //   set(newValue)
    //   {
    //     return newValue
    //   }
    // },
    // current_media_time:
    // {
    //   get()
    //   {
    //         return     (this.media1.currentTime, this.media2.currentTime)/2
    //      // return  this.media1.currentTime+this.media2.currentTime
    //    },
    //   set(value)
    //   {
    //     return  value
    //   }
    // },
    navigation: function navigation() {
      return {
        color: {
          body: 'color'
        }
      };
    },
    isMobileDevice: function isMobileDevice() {
      return this.$isMobile();
    },
    // currentFile: function () {
    //   //return this.sliderFile[Math.abs(this.currentIndex) % this.sliderFile.length]
    //   return this.myFileInfo
    // },
    isMedia: function isMedia() {
      return this.myFileInfo === 'image' || 'video' || 'audio';
    },
    canShareInView: function canShareInView() {
      return !this.$isThisLocation(['base', 'participant_uploads', 'latest', 'shared', 'public']);
    },
    getProgressRate: function getProgressRate() {
      return this.time / this.duration / 2;
    },
    getCurrentTime: function getCurrentTime() {
      return this.convertSecondsToTime(Math.floor(this.time / 2));
    },
    getCurrentMilisecond: function getCurrentMilisecond() {
      return this.convertMiliSecondToTime(this.time);
    },
    getTotalFrame: function getTotalFrame() {
      return parseInt(24) * Math.floor(this.duration);
    },
    getDuration: function getDuration() {
      this.currentVideoTime = this.convertSecondsToTime(this.duration);
      return this.convertSecondsToTime(this.duration);
    }
  }),
  data: function data() {
    return {
      first_video_src: '',
      second_video_src: '',
      version1: '',
      version2: '',
      version_Options: [],
      testImg: '',
      activeType: '',
      version_show: false,
      first_media_volume: false,
      second_media_volume: true,
      mousedown: false,
      showbtns: true,
      isLoading: true,
      parentId: '',
      active: false,
      searchQuery: null,
      placement: 'top',
      showLikeByIndex: {
        index: null,
        like: false
      },
      likeCom: false,
      loading: false,
      activeClass: 'is-visible',
      color: '#000',
      currentVideoTime: 0,
      options1: [{
        everyone: 'everyone'
      }, {
        teamgourp: 'teamgourp'
      }],
      permission: 'Every One',
      textControlStyle: null,
      textValue: null,
      showText: false,
      currentIndex: 1,
      sliderFile: [],
      media: null,
      seekbar: null,
      seekbarWidth: 0,
      seekbarOffsetX: 0,
      time: 0,
      duration: 0,
      isPlaying: false,
      isGrabbingSeekbar: false,
      val: 65,
      //volume
      volumeMute: false,
      playback_speed: 1,
      play_quality: 'Auto',
      looping: false,
      timeFormat: 'Standard',
      initialTime: 0,
      autoplay: false,
      smpte: "00:00:00:00",
      video: '',
      frameNo: 0,
      disableNavigation: true,
      isActive: false,
      isVideoLoading: false,
      useEraser: false,
      vctime: '',
      //video current time
      canvasId: '',
      search: '',
      selectedTime: '00:00',
      tabs: [{
        title: 'Tab 1',
        value: 'tab1'
      }, {
        title: 'Tab 2',
        value: 'tab2'
      }],
      currentTab: true,
      isReplying: false,
      dashPlayer: '',
      bitrates: []
    };
  },
  watch: {
    sliderFile: function sliderFile() {
      //Close file preview after delete all items
      if (this.sliderFile.length == 0) {
        _bus__WEBPACK_IMPORTED_MODULE_1__["events"].$emit('fileFullPreview:hide');
      }
    },
    isGetComment: function isGetComment(newValue, oldValue) {
      if (newValue == true) {
        this.getComments();
      }
    },
    // currentFile() {
    //   //Handle actual view image in myFileInfo
    //   if (this.myFileInfo) {
    //     this.$store.commit('GET_FILEINFO_DETAIL', this.currentFile)
    //     events.$emit('actualShowingImage:ContextMenu', this.currentFile)
    //     // this.loaded = false
    //   }
    // },
    page_reload: function page_reload() {
      //Handle actual view image in myFileInfo
      if (this.page_reload) {
        this.$route.go();
      }
    },
    // myFileInfo() {
    //   //File delete handling - show next image after delete one
    //   if (!this.myFileInfo) {
    //     this.currentIndex = this.currentIndex - 1
    //     this.$store.commit('GET_FILEINFO_DETAIL', this.currentFile)
    //     this.sliderFile = []
    //     this.filteredFiles()
    //   }
    // },
    data: function data(newValue, oldValue) {
      //Move item handling
      if (newValue != oldValue) {
        this.sliderFile = [];
        this.filteredFiles();
      }
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var auth;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              auth = localStorage.getItem('auth_check');

              if (auth === "false" || auth === null || auth === undefined) {
                _this.$router.push({
                  name: 'SignIn'
                });
              } else {}

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  created: function created() {
    //    this.filteredFiles();
    this.getVersion();
    jquery__WEBPACK_IMPORTED_MODULE_15___default()(document).on('load', function () {
      jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement1').prop('muted', false);
    }); //   const decryptedText = this.CryptoJS.AES.decrypt(encryptedText, "Secret Passphrase").toString(this.CryptoJS.enc.Utf8)

    this.setVideoSize();
    setTimeout(function () {
      this.isLoading = false;
    }.bind(this), 3000);

    if (!this.lastTwoFiles) {
      var file_id = this.$route.params.id;
      var formData = {
        'id': atob(file_id),
        'user_id': this.user.data.id
      };
      this.$store.dispatch('versionComparison', formData);
    } // else{
    //   this.$store.commit('firstVideoSrc', this.lastTwoFiles[0])
    //   this.$store.commit('secondVideoSrc', this.lastTwoFiles[1])
    //
    // }

  },
  updated: function updated() {
    var _this2 = this;

    // $('#videoElement2').on('click',function (){
    //   this.playOrPause;
    // this.paused ? this.play()  : this.pause() ;
    // this.paused ? this.play() && $('#videoElement1').trigger('play') : this.pause() && $('#videoElement1').trigger('pause');
    // });
    // $('.canvas').css('height', '690px')
    jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement').css('width', '100%');
    jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement1').attr('width', '100%');
    jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement1').attr('height', '100%');
    jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement2').attr('width', '100%');
    jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement2').attr('height', '100%'); // $('#videoElement').css('height', 'auto')

    jquery__WEBPACK_IMPORTED_MODULE_15___default()('#vs1__combobox').css('background-color', 'lightgray'); // $('#vs2__combobox').css('width', '176px')
    // $('#vs2__combobox').css('color', '#0077a2 !important')
    // $('#vs2__combobox').css('color', '#0077a2 !important')

    jquery__WEBPACK_IMPORTED_MODULE_15___default()('#version2').css('background-color', '#0077a2 !important');
    jquery__WEBPACK_IMPORTED_MODULE_15___default()('#vs2__combobox').css('height', '36px');
    jquery__WEBPACK_IMPORTED_MODULE_15___default()('.vue-slider-process').css('color', '#0077a2 !important'); // $('.menu-bar').css('display', 'none')

    jquery__WEBPACK_IMPORTED_MODULE_15___default()('.vs2__combobox').css('height', 'none');
    jquery__WEBPACK_IMPORTED_MODULE_15___default()('.vs--searchable .vs__dropdown-toggle').css('height', '36'); // $('.vs--searchable .vs__dropdown-toggle').css('width', '181')

    jquery__WEBPACK_IMPORTED_MODULE_15___default()('.btn btn-primary color-green').css('position', 'absolute');
    this.media1 = this.$el.querySelector('#videoElement1');
    this.media2 = this.$el.querySelector('#videoElement2');

    if (this.first_video_src == "") {
      this.first_video_src = this.lastTwoFiles[0].file_url;
    }

    if (this.second_video_src == "") {
      this.second_video_src = this.lastTwoFiles[1].file_url;
    }

    if (this.sliderFile.length > 1) {
      _bus__WEBPACK_IMPORTED_MODULE_1__["events"].$on('filePreviewAction:next', function () {
        _this2.currentIndex += 1;
        _this2.slideType = 'next';

        if (_this2.currentIndex > _this2.sliderFile.length - 1) {
          _this2.currentIndex = 0;
        }
      });
      _bus__WEBPACK_IMPORTED_MODULE_1__["events"].$on('filePreviewAction:prev', function () {
        _this2.slideType = 'prev';
        _this2.currentIndex -= 1;

        if (_this2.currentIndex < 0) {
          _this2.currentIndex = _this2.sliderFile.length - 1;
        }
      });
    }

    if (this.lastTwoFiles[0].type == 'video') {
      this.seekbar = this.$el.querySelector('.p-video-player__seekbar-wrap');
      this.reLayoutSeekbar();
      window.addEventListener('resize', debounce(function () {
        _this2.reLayoutSeekbar();
      }), 100);
      document.addEventListener('mousemove', function (event) {
        _this2.moveSeekbar(event);
      });
      document.addEventListener('mouseup', function (event) {
        _this2.releaseSeekbar(event);
      });
      this.media1.addEventListener('loadedmetadata', function () {
        _this2.duration = (_this2.media1.duration + _this2.media2.duration) / 2; //Math.floor((  this.media1.duration+this.media2.duration)/2);
      });
      this.media1.addEventListener('ended', function () {
        _this2.media1.currentTime = 0;

        if (_this2.looping) {
          _this2.media1.play();

          _this2.isPlaying = false;
        } else {
          _this2.isPlaying = false;
        }
      });
      this.media2.addEventListener('ended', function () {
        _this2.media2.currentTime = 0;

        if (_this2.looping) {
          _this2.media2.play();

          _this2.isPlaying = false;
        } else {
          _this2.isPlaying = false;
        }
      });
    }
  },
  methods: {
    getVersion: function getVersion() {
      var _this3 = this;

      var id = atob(this.$route.params.id);
      var formData = {
        'id': id
      };
      var route = 'api/version';
      axios__WEBPACK_IMPORTED_MODULE_17___default.a.post(route, formData).then(function (res) {
        // res.json().then(json => {
        //       json.data.forEach(data =>
        //   // this.version_Options.push(value.file);
        // )
        _this3.version_Options = res.data.data; // let st= {
        //   'name':'compare Video',
        //   'mimetype':'no',
        // }
        // this.version_Options.push(st)
        // })
      })["catch"](function (error) {
        // Show error message
        _bus__WEBPACK_IMPORTED_MODULE_1__["events"].$emit('alert:open', {
          title: i18n.t('popup_error.title'),
          message: i18n.t('popup_error.message')
        });
      });
    },
    changeFirstMediaSrc: function changeFirstMediaSrc() {
      this.first_video_src = this.version1.file_url;
    },
    changeSecondMediaSrc: function changeSecondMediaSrc() {
      this.second_video_src = this.version2.file_url;
    },
    setVideoSize: function setVideoSize() {
      var x = window.matchMedia("(max-width: 700px)");

      if (x.matches > 700) {
        // If media query matches
        jquery__WEBPACK_IMPORTED_MODULE_15___default()('.paintable').css('width', '800px');
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_15___default()('.paintable').css('width', '500px');
      }
    },
    getListPresentFiles: function getListPresentFiles() {
      this.version_show = true;
    },
    showElements: function showElements(event) {
      this.activeId = event.target.id;
    },
    hideElements: function hideElements() {
      this.activeId = 0;
    },
    setSelect: function setSelect(name) {
      for (var i in this.selected) {
        this.selected[i] = i === name;
      }

      this[name]();
    },
    append: function append(emoji) {
      this.comment += emoji;
    },
    showDescription: function showDescription() {
      this.isDescription = true;
    },
    hideDescription: function hideDescription() {
      this.isDescription = false;
    },
    handleClick: function handleClick(bool) {
      this.currentTab = bool;
    },
    filteredFiles: function filteredFiles() {
      var _this4 = this;

      this.data.filter(function (element) {
        if (element.type == _this4.myFileInfo.type) {
          _this4.sliderFile.push(element);
        }
      });
      this.choseActiveFile();
    },
    onEnterKey: function onEnterKey(e) {
      console.log("ClickedEnter", e);
    },
    choseActiveFile: function choseActiveFile() {
      var _this5 = this;

      this.sliderFile.forEach(function (element, index) {
        if (element.unique_id == _this5.myFileInfo.unique_id) {
          _this5.currentIndex = index;
        }
      });
    },
    myVideoPlay: function myVideoPlay() {
      this.media1.play();
      this.media2.play();
      this.second_media_volume = true;
      this.first_media_volume = false;
      jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement1').prop('muted', true);
      jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement2').prop('muted', false); // $('#videoElement1').prop('muted',true)

      /* this.bitrates = this.dashPlayer.getBitrateInfoListFor("video");//(this.$el.querySelector('#videoElement'));
      console.log(this.bitrates); */

      jquery__WEBPACK_IMPORTED_MODULE_15___default()("#videoElement").removeClass("d-none");
      jquery__WEBPACK_IMPORTED_MODULE_15___default()(".content img:last-child").remove();
      this.isPlaying = true;
      this.loop();
    },
    myVideoPause: function myVideoPause() {
      this.media1.pause();
      this.media2.pause();
      this.isPlaying = false;
      this.second_media_volume = false;
      this.first_media_volume = false;
      jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement1').prop('muted', true);
      jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement2').prop('muted', true);
    },
    playOrPause: function playOrPause() {
      if (this.isPlaying) {
        this.myVideoPause();

        if (this.volumeMute == false) {
          this.second_media_volume = false;
          this.first_media_volume = false;
          jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement1').prop('muted', true);
          jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement2').prop('muted', true);
        }
      } else {
        this.myVideoPlay();

        if (this.volumeMute == false) {
          this.second_media_volume = true;
          this.first_media_volume = false;
          jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement1').prop('muted', true);
          jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement2').prop('muted', false);
        }
      }
    },
    volume1: function volume1() {
      if (this.first_media_volume == true && this.second_media_volume == false) {
        this.first_media_volume = false;
        this.second_media_volume = true;
        jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement1').prop('muted', true);
        jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement2').prop('muted', false);
      } else {
        this.first_media_volume = true;
        this.second_media_volume = false;
        jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement1').prop('muted', false);
        jquery__WEBPACK_IMPORTED_MODULE_15___default()('#videoElement2').prop('muted', true);
      }
    },
    stop: function stop() {
      this.media.currentTime = 0;
      this.myVideoPause();
    },
    SetVolume: function SetVolume() {
      this.media1.volume = this.val / 100;
      this.media2.volume = this.val / 100;
      /* if(this.val<=0){
        this.volumeMute = true;
        this.media.muted = true;
      }else{
        this.volumeMute = false;
        this.media.muted = false;
      } */
    },
    placbackSpeed: function placbackSpeed(playback_rate) {
      console.log(playback_rate);
      this.playback_speed = playback_rate;
      this.media1.playbackRate = playback_rate;
      this.media2.playbackRate = playback_rate;
    },
    fullScreen: function fullScreen(playback_rate) {
      this.media1.webkitRequestFullScreen();
      this.media2.webkitRequestFullScreen();
    },
    playLoop: function playLoop() {
      this.looping = !this.looping;
      console.log(this.looping); // this.media.webkitRequestFullScreen();
    },
    playQualitySet: function playQualitySet(quality) {
      this.play_quality = quality;
    },
    loop: function loop() {
      var _this6 = this;

      this.time = this.media1.currentTime + this.media1.currentTime;
      if (!this.isPlaying) return;
      requestAnimationFrame(function () {
        _this6.loop();
      });
    },
    muteVolume: function muteVolume() {
      if (this.volumeMute == true) {
        this.media1.muted = false;
        this.media2.muted = false;
        this.volumeMute = !this.volumeMute;
      } else {
        this.media1.muted = true;
        this.media2.muted = true;
        this.volumeMute = !this.volumeMute;
      }
    },
    findSliderAmountMap: function findSliderAmountMap(value) {
      this.dynamicLineWidth = value;
    },
    setTimeFormat: function setTimeFormat(timeFormat) {
      this.timeFormat = timeFormat;
    },
    grabSeekbar: function grabSeekbar(event) {
      event.preventDefault();
      this.isGrabbingSeekbar = true;
      var totalTime = (this.media1.currentTime + this.media2.currentTime) / 2; // this.time = totalTime = event.layerX / this.seekbarWidth * this.duration;

      totalTime = event.layerX / this.seekbarWidth * this.duration;
      this.media1.currentTime = totalTime;
      this.media2.currentTime = totalTime;
      this.media1.pause();
      this.media2.pause();
    },
    moveSeekbar: function moveSeekbar(event) {
      event.preventDefault();
      var totalTime = (this.media1.currentTime + this.media2.currentTime) / 2;
      if (!this.isGrabbingSeekbar) return;
      this.time = totalTime = (event.clientX - this.seekbarOffsetX - window.pageXOffset) / this.seekbarWidth * this.duration;
    },
    releaseSeekbar: function releaseSeekbar(event) {
      event.preventDefault();
      this.isGrabbingSeekbar = false;

      if (this.isPlaying) {
        this.media1.play();
        this.media2.play();
      }
    },
    reLayoutSeekbar: function reLayoutSeekbar() {
      this.seekbarWidth = this.seekbar ? this.seekbar.clientWidth : '';
      this.seekbarOffsetX = this.seekbar.getBoundingClientRect().left;
    },
    convertSecondsToTime: function convertSecondsToTime(time) {
      var seconds = Math.floor(time % 60);
      if (seconds < 10) seconds = '0' + seconds;
      var minutes = Math.floor(time / 60 % 60);
      return "".concat(minutes, ":").concat(seconds);
    },
    convertMiliSecondToTime: function convertMiliSecondToTime(time) {
      var hours = Math.floor(time / 3600);
      var minutes = Math.floor(time / 60 % 60);
      var seconds = Math.floor(time % 60);
      var milisec = Math.floor(time * 1000);
      milisec = milisec.toString().slice(0, 2);
      if (seconds < 10) seconds = '0' + seconds;
      if (hours < 10) hours = '0' + hours;
      if (milisec < 10) milisec = '0' + milisec;
      if (minutes < 10) minutes = '0' + minutes;
      return "".concat(hours, ":").concat(minutes, ":").concat(seconds, ":").concat(milisec);
    },
    seekForward: function seekForward() {
      this.media1.seekForward();
      this.media2.seekForward();
    },
    seekBackward: function seekBackward() {
      this.seekBackward();
    },
    onPlay: function onPlay() {// console.log('onPlay');
    },
    onPause: function onPause() {//	console.log('onPause');
    },
    onEnded: function onEnded() {
      console.log('onEnded' + this.media.currentTime); // this.time = this.media.currentTime;
    },
    onWaiting: function onWaiting() {//	console.log('onWaiting');
    },
    onFullscreenchange: function onFullscreenchange(event) {//	console.log('onFullscreenchange');
    },
    onTimeupdate: function onTimeupdate(event) {// console.log('onTimeupdate',event);
    },
    onFrameupdate: function onFrameupdate(event) {
      this.smpte = event.SMPTE;
    },
    onProgress: function onProgress(event) {//console.log('onProgress',event);
    },
    onError: function onError(event) {
      console.log('onError', event);
      _bus__WEBPACK_IMPORTED_MODULE_1__["events"].$emit('alert:open', {
        emoji: '😬😬😬',
        title: i18n.t('popup_mimetypes_blacklist.title'),
        message: "Can't open the File.Upload again"
      });
    },
    scalePreserveAspectRatio: function scalePreserveAspectRatio(imgW, imgH, maxW, maxH) {
      return Math.min(maxW / imgW, maxH / imgH);
    },
    withPopper: function withPopper(dropdownList, component, _ref) {
      var width = _ref.width;
      dropdownList.style.width = width;
      var popper = Object(_popperjs_core__WEBPACK_IMPORTED_MODULE_11__["createPopper"])(component.$refs.toggle, dropdownList, {
        placement: this.placement,
        modifiers: [{
          name: 'offset',
          options: {
            offset: [0, -1]
          }
        }, {
          name: 'toggleClass',
          enabled: true,
          phase: 'write',
          fn: function fn(_ref2) {
            var state = _ref2.state;
            component.$el.classList.toggle('drop-up', state.placement === 'top');
          }
        }]
      });
      return function () {
        return popper.destroy();
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/Files.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Others_UpgradeSidebarBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Others/UpgradeSidebarBanner */ "./resources/js/components/Others/UpgradeSidebarBanner.vue");
/* harmony import */ var _components_Others_TreeMenuNavigator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Others/TreeMenuNavigator */ "./resources/js/components/Others/TreeMenuNavigator.vue");
/* harmony import */ var _components_Others_ContentFileView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/ContentFileView */ "./resources/js/components/Others/ContentFileView.vue");
/* harmony import */ var _components_Sidebar_ContentSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Sidebar/ContentSidebar */ "./resources/js/components/Sidebar/ContentSidebar.vue");
/* harmony import */ var _components_Sidebar_ContentGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Sidebar/ContentGroup */ "./resources/js/components/Sidebar/ContentGroup.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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










/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FilesView',
  components: {
    UpgradeSidebarBanner: _components_Others_UpgradeSidebarBanner__WEBPACK_IMPORTED_MODULE_1__["default"],
    TreeMenuNavigator: _components_Others_TreeMenuNavigator__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContentFileView: _components_Others_ContentFileView__WEBPACK_IMPORTED_MODULE_3__["default"],
    ContentSidebar: _components_Sidebar_ContentSidebar__WEBPACK_IMPORTED_MODULE_4__["default"],
    UploadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__["UploadCloudIcon"],
    ContentGroup: _components_Sidebar_ContentGroup__WEBPACK_IMPORTED_MODULE_5__["default"],
    FolderIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__["FolderIcon"],
    HomeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__["HomeIcon"],
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__["XIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])(['user', 'homeDirectory', 'isLogged', 'currentFolder', 'isLoggedIn', 'config'])), {}, {
    favourites: function favourites() {
      return this.user.relationships.favourites.data.attributes.folders;
    },
    tree: function tree() {
      return this.user.relationships.tree.data.attributes.folders;
    },
    storage: function storage() {
      return this.$store.getters.user.relationships.storage.data.attributes;
    }
  }),
  data: function data() {
    return {
      area: false,
      shareOptions: {
        isPassword: false,
        expiration: undefined,
        password: undefined,
        permission: undefined,
        type: undefined,
        unique_id: undefined
      },
      draggedItem: undefined
    };
  },
  methods: {
    getLatest: function getLatest() {
      this.$store.dispatch('getLatest');
    },
    goHome: function goHome() {
      this.$store.dispatch('getFolder', [{
        folder: this.homeDirectory,
        back: false,
        init: true
      }]);
    },
    openFolder: function openFolder(folder) {
      this.$store.dispatch('getFolder', [{
        folder: folder,
        back: false,
        init: false
      }]);
    },
    dragEnter: function dragEnter() {
      if (this.draggedItem && this.draggedItem.type !== 'folder') return;
      this.area = true;
    },
    dragLeave: function dragLeave() {
      this.area = false;
    },
    dragFinish: function dragFinish() {
      var _this = this;

      this.area = false; // Check if draged item is folder

      if (this.draggedItem && this.draggedItem.type !== 'folder') return; // Check if folder exist in favourites

      if (this.favourites.find(function (folder) {
        return folder.unique_id == _this.draggedItem.unique_id;
      })) return; // Store favourites folder

      this.$store.dispatch('addToFavourites', this.draggedItem);
    },
    removeFavourite: function removeFavourite(folder) {
      this.$store.dispatch('removeFromFavourites', folder);
    },
    makeMember: function makeMember() {
      var _this2 = this;

      if (this.$route.params.id) {
        axios.post('/api/checkMember', {
          user_id: this.user.data.id
        }).then(function (response) {
          if (response.data.status === 400) axios.post('/api/shareInvite', {
            team_id: _this2.$route.params.id,
            user_id: _this2.user.data.id,
            shareOptions: _this2.shareOptions
          }).then(function (response) {
            console.log('response', response);
          });
        });
      }
    }
  },
  beforeCreate: function beforeCreate() {
    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var auth;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              auth = localStorage.getItem('auth_check'); // if(auth === "false" ||auth === null || auth === undefined)
              // {
              //   this.$router.push({name:'SignIn'})
              // }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  created: function created() {
    var _this3 = this;

    this.goHome();
    this.makeMember(); // Listen for dragstart folder items

    _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$on('dragstart', function (item) {
      return _this3.draggedItem = item;
    });
  },
  mounted: function mounted() {
    jquery__WEBPACK_IMPORTED_MODULE_10___default()('.menu-bar').css('display', 'block');
    jquery__WEBPACK_IMPORTED_MODULE_10___default()('#content_file').css('position', 'none');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ContentFileView.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ContentFileView.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#files-view {\n  font-family: 'Nunito', sans-serif;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 320px;\n  overflow-x: hidden;\n  padding-left: 15px;\n  padding-right: 15px;\n  overflow-y: hidden;\n}\n@media only screen and (max-width: 690px) {\n#files-view {\n    padding-left: 0;\n    padding-right: 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".folder-item[data-v-38f20d4e] {\n  display: block;\n  padding: 8px 0;\n  transition: 150ms all ease;\n  cursor: pointer;\n  position: relative;\n  white-space: nowrap;\n  width: 100%;\n}\n.folder-item .icon[data-v-38f20d4e] {\n  line-height: 0;\n  width: 15px;\n  margin-right: 9px;\n  vertical-align: middle;\n  margin-top: -1px;\n}\n.folder-item .icon path[data-v-38f20d4e], .folder-item .icon line[data-v-38f20d4e], .folder-item .icon polyline[data-v-38f20d4e], .folder-item .icon rect[data-v-38f20d4e], .folder-item .icon circle[data-v-38f20d4e] {\n  transition: 150ms all ease;\n}\n.folder-item .icon-arrow[data-v-38f20d4e] {\n  transition: 300ms all ease;\n  margin-right: 4px;\n  vertical-align: middle;\n  opacity: 0;\n}\n.folder-item .icon-arrow.is-visible[data-v-38f20d4e] {\n  opacity: 1;\n}\n.folder-item .icon-arrow.is-opened[data-v-38f20d4e] {\n  transform: rotate(90deg);\n}\n.folder-item .label[data-v-38f20d4e] {\n  transition: 150ms all ease;\n  font-size: 0.8125em;\n  font-weight: 700;\n  vertical-align: middle;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  color: #1B2539;\n  max-width: 130px;\n}\n.folder-item:hover .icon path[data-v-38f20d4e], .folder-item:hover .icon line[data-v-38f20d4e], .folder-item:hover .icon polyline[data-v-38f20d4e], .folder-item:hover .icon rect[data-v-38f20d4e], .folder-item:hover .icon circle[data-v-38f20d4e], .folder-item.is-selected .icon path[data-v-38f20d4e], .folder-item.is-selected .icon line[data-v-38f20d4e], .folder-item.is-selected .icon polyline[data-v-38f20d4e], .folder-item.is-selected .icon rect[data-v-38f20d4e], .folder-item.is-selected .icon circle[data-v-38f20d4e] {\n  stroke: #00bc7e;\n}\n.folder-item:hover .label[data-v-38f20d4e], .folder-item.is-selected .label[data-v-38f20d4e] {\n  color: #00bc7e;\n}\n@media only screen and (max-width: 1024px) {\n.folder-item[data-v-38f20d4e] {\n    padding: 8px 0;\n}\n}\n@media (prefers-color-scheme: dark) {\n.folder-item .label[data-v-38f20d4e] {\n    color: #bec6cf;\n}\n.folder-item[data-v-38f20d4e]:hover {\n    background: rgba(0, 188, 126, 0.1);\n}\n.folder-item.is-selected[data-v-38f20d4e] {\n    background: rgba(0, 188, 126, 0.1);\n}\n.is-selected[data-v-38f20d4e] {\n    background: rgba(0, 188, 126, 0.1);\n}\n}\n@media (prefers-color-scheme: dark) and (max-width: 690px) {\n.folder-item[data-v-38f20d4e]:hover, .folder-item.is-selected[data-v-38f20d4e] {\n    background: rgba(0, 188, 126, 0.1);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upgrade-banner[data-v-0e26391d] {\n  background: rgba(253, 57, 122, 0.1);\n  padding: 10px;\n  border-radius: 6px;\n  margin: 0 16px;\n}\n.header-title[data-v-0e26391d] {\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n}\n.header-title .icon[data-v-0e26391d] {\n  margin-right: 10px;\n}\n.header-title .icon line[data-v-0e26391d], .header-title .icon path[data-v-0e26391d] {\n  stroke: #fd397a;\n}\n.header-title .title[data-v-0e26391d] {\n  font-size: 0.8125em;\n  font-weight: 800;\n  color: #fd397a;\n}\n.content[data-v-0e26391d] {\n  margin-bottom: 12px;\n}\n.content p[data-v-0e26391d] {\n  font-size: 0.75em;\n  color: #fd397a;\n  font-weight: 700;\n}\n.button[data-v-0e26391d] {\n  background: #fd397a;\n  border-radius: 50px;\n  padding: 6px 0;\n  width: 100%;\n  color: white;\n  text-align: center;\n  font-size: 0.75em;\n  font-weight: 700;\n  display: block;\n  box-shadow: 0 4px 10px rgba(253, 57, 122, 0.35);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-for-pic[data-v-599f088a] {\n  width: 100%;\n  display: block;\n}\n.drop-up[data-v-599f088a] {\n  width: 100%;\n}\n.margin-top-navbar[data-v-599f088a] {\n  margin-top: 4%;\n}\n.vs__dropdown-toggle[data-v-599f088a] {\n  padding-left: 45px !important;\n}\n.sound-volume[data-v-599f088a] {\n  width: 40px;\n  color: white;\n  height: 40px;\n  border-radius: 40px;\n  background-color: #00BC7E !important;\n}\n.sound-volume i[data-v-599f088a] {\n  color: white;\n}\n.sound-disable[data-v-599f088a] {\n  width: 40px;\n  height: 40px;\n  border-radius: 40px;\n  background-color: silver !important;\n}\n.btn-save[data-v-599f088a] {\n  background-image: none;\n  background-position: initial;\n  background-size: initial;\n  background-repeat: initial;\n  background-attachment: initial;\n  background-origin: initial;\n  background-clip: initial;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background-color: inherit;\n  border: none;\n  padding: 0px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #7d829c;\n  margin-right: 12px;\n}\n.has-tooltip[data-v-599f088a] {\n  color: white;\n}\n.inner-addon[data-v-599f088a] {\n  position: relative;\n}\n\n/* style icon */\n.inner-addon .fa-search[data-v-599f088a] {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none;\n}\n\n/* align icon */\n.left-addon .fa-search[data-v-599f088a] {\n  left: 0px;\n}\n.right-addon .fa-search[data-v-599f088a] {\n  right: 0px;\n}\n\n/* add padding  */\n.left-addon input[data-v-599f088a] {\n  padding-left: 30px;\n}\n.right-addon input[data-v-599f088a] {\n  padding-right: 30px;\n}\n.table-sm td[data-v-599f088a] {\n  padding: .3rem;\n  font-size: 15px;\n}\n.searchbar[data-v-599f088a] {\n  margin-bottom: auto;\n  margin-top: auto;\n  background-color: #353b48;\n  border-radius: 30px;\n  padding: 10px;\n}\n.search_input[data-v-599f088a] {\n  color: white;\n  border: 0;\n  outline: 0;\n  background: none;\n  width: 0;\n  caret-color: transparent;\n  transition: width 0.4s linear;\n}\n.searchbar:hover > .search_input[data-v-599f088a] {\n  padding: 0 10px;\n  width: 20%;\n  transition: width 0.4s linear;\n}\n.searchbar:hover > .search_icon[data-v-599f088a] {\n  background: white;\n  color: #e74c3c;\n}\n.tabs[data-v-599f088a] {\n  position: relative;\n  margin: 0 auto;\n}\n.tabs__item[data-v-599f088a] {\n  display: inline-block;\n  margin: 0 5px;\n  padding: 10px;\n  padding-bottom: 8px;\n  font-size: 16px;\n  letter-spacing: 0.8px;\n  color: gray;\n  text-decoration: none;\n  border: none;\n  background-color: transparent;\n  border-bottom: 2px solid transparent;\n  cursor: pointer;\n  transition: all 0.25s;\n}\n.tabs__item_active[data-v-599f088a] {\n  color: #00bc7e;\n  border-bottom: 2px solid #00bc7e;\n}\n.tabs__item[data-v-599f088a]:focus {\n  outline: none;\n  border-bottom: 2px solid #00bc7e;\n  color: white;\n}\n.emoji-invoker[data-v-599f088a] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.upper-canvas[data-v-599f088a] {\n  border: 2px solid #0077a2 !important;\n  background-color: green;\n}\n.emoji-invoker[data-v-599f088a]:hover {\n  transform: scale(1.1);\n}\n.emoji-invoker > svg[data-v-599f088a] {\n  fill: #b1c6d0;\n}\n.emoji-picker[data-v-599f088a] {\n  top: -25% !important;\n  left: 100% !important;\n  width: 200px;\n}\n.emoji-picker[data-v-599f088a] {\n  position: absolute;\n  z-index: 1;\n  font-family: Montserrat;\n  border: 1px solid #ccc;\n  width: 15rem;\n  height: 20rem;\n  overflow: scroll;\n  padding: 1rem;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  background: #fff;\n  box-shadow: 1px 1px 8px #c7dbe6;\n}\n.emoji-picker__search[data-v-599f088a] {\n  display: flex;\n}\n.emoji-picker__search > input[data-v-599f088a] {\n  flex: 1;\n  border-radius: 10rem;\n  border: 1px solid #ccc;\n  padding: 0.5rem 1rem;\n  outline: none;\n}\n.emoji-picker h5[data-v-599f088a] {\n  margin-bottom: 0;\n  color: #b1b1b1;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  cursor: default;\n}\n.emoji-picker .emojis[data-v-599f088a] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n.emoji-picker .emojis[data-v-599f088a]:after {\n  content: \"\";\n  flex: auto;\n}\n.emoji-picker .emojis span[data-v-599f088a] {\n  padding: 0.2rem;\n  cursor: pointer;\n  border-radius: 5px;\n}\n.emoji-picker .emojis span[data-v-599f088a]:hover {\n  background: #ececec;\n  cursor: pointer;\n}\n.comment-composer__top-row[data-v-599f088a] {\n  min-height: 44px;\n  height: 44px;\n  transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.ph-fio3[data-v-599f088a] {\n  padding-right: .9375rem;\n  padding-left: .9375rem;\n}\n.justify-between[data-v-599f088a] {\n  justify-content: space-between;\n}\n.justify-between[data-v-599f088a] {\n  justify-content: space-between;\n}\n.flex[data-v-599f088a] {\n  display: flex;\n}\n.kWHaiQ[data-v-599f088a] {\n  position: relative;\n  width: 100%;\n  margin-top: 12px;\n}\nbody[data-v-599f088a] {\n  font-family: Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n.absolute[data-v-599f088a] {\n  position: absolute;\n}\n.pe--none[data-v-599f088a] {\n  pointer-events: none;\n}\n.comment-composer__bottom-row[data-v-599f088a] {\n  height: 44px;\n}\n.pv-fio2[data-v-599f088a] {\n  padding-top: .65rem;\n  padding-bottom: .65rem;\n}\n.pl-fio6[data-v-599f088a] {\n  padding-left: 3.125rem;\n}\n.w-100[data-v-599f088a] {\n  width: 100%;\n}\n.h-100[data-v-599f088a] {\n  height: 100%;\n}\n.flex[data-v-599f088a] {\n  display: flex;\n}\n.pl-fio6[data-v-599f088a] {\n  padding-left: 3.125rem;\n}\n.pa-fio1[data-v-599f088a] {\n  padding: .325rem;\n}\n.self-start[data-v-599f088a] {\n  align-self: flex-start;\n}\n.comment-composer__timestamp[data-v-599f088a] {\n  font-size: 14px;\n}\n.items-center[data-v-599f088a] {\n  align-items: center;\n}\n.ph-fio1[data-v-599f088a] {\n  padding-right: .325rem;\n  padding-left: .325rem;\n}\n.dn[data-v-599f088a] {\n  display: none;\n}\n[type=\"checkbox\"][data-v-599f088a], [type=\"radio\"][data-v-599f088a] {\n  box-sizing: border-box;\n  padding: 0;\n}\nbutton[data-v-599f088a], input[data-v-599f088a], optgroup[data-v-599f088a], select[data-v-599f088a], textarea[data-v-599f088a] {\n  font-family: inherit;\n}\nbutton[data-v-599f088a], input[data-v-599f088a], optgroup[data-v-599f088a], select[data-v-599f088a], textarea[data-v-599f088a] {\n  font-family: sans-serif;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n}\n.kPXSpg[data-v-599f088a]:not(:disabled) {\n  cursor: pointer;\n}\n[type=\"reset\"][data-v-599f088a], [type=\"submit\"][data-v-599f088a], button[data-v-599f088a], html [type=\"button\"][data-v-599f088a] {\n  -webkit-appearance: button;\n}\n.fkNvxd[data-v-599f088a] {\n  border: medium none;\n  box-shadow: none;\n  background-color: #20222b;\n  color: #b8c1cf;\n  font-weight: normal;\n  font-size: 13px;\n  padding: 0.325rem;\n  line-height: 1.15;\n  height: 27px;\n  min-width: 0px;\n}\n.kPXSpg[data-v-599f088a] {\n  background: #5b53ff none repeat scroll 0% 0%;\n  background-color: #5b53ff;\n  border: 0px none;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: normal;\n  font-stretch: normal;\n  border-radius: 6px;\n  box-sizing: border-box;\n  padding: 0px 12px;\n  white-space: nowrap;\n  transition: background-color 0.2s ease 0s, color 0.2s ease 0s, box-shadow 0.2s ease 0s, opacity 0.2ms ease 0s;\n  line-height: 1;\n  height: 32px;\n  min-width: 72px;\n  color: white;\n  box-shadow: transparent 0px 0px inset;\n}\n.fkNvxd[data-v-599f088a] {\n  color: #b8c1cf;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 1.15;\n}\nsvg[data-v-599f088a]:not(:root) {\n  overflow: hidden;\n}\n.fTdjOj[data-v-599f088a] {\n  width: 16px;\n  height: 16px;\n  color: #5b53ff;\n}\n*[data-v-599f088a], html[data-v-599f088a] {\n  margin: 0;\n  padding: 0;\n}\n.kPXSpg[data-v-599f088a]:not(:disabled) {\n  cursor: pointer;\n}\n.fkNvxd[data-v-599f088a] {\n  color: #b8c1cf;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 1.15;\n}\n.kPXSpg[data-v-599f088a] {\n  font-size: 14px;\n  font-weight: bold;\n  letter-spacing: normal;\n  font-stretch: normal;\n  white-space: nowrap;\n  line-height: 1;\n  color: white;\n}\n.comment-composer__top-row[data-v-599f088a] {\n  min-height: 44px;\n  height: 44px;\n  transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1);\n}\n.comment-composer__avatar_container[data-v-599f088a] {\n  width: 36px;\n  height: 44px;\n}\nsvg[data-v-599f088a]:not(:root) {\n  overflow: hidden;\n}\n.player-dark-purple[data-v-599f088a] {\n  color: #5242ff;\n}\n.paint[data-v-599f088a] {\n  border-radius: 5px;\n  box-sizing: border-box;\n  display: block;\n  height: auto !important;\n  position: relative !important;\n  overflow: hidden;\n  background: #f7f4f4;\n}\n.custom-navigation .controls[data-v-599f088a] {\n  margin: 10px 0 0 0;\n  border: 1px solid #ddd;\n  padding: 10px;\n  border-radius: 5px;\n  width: 500px;\n}\n\n/* .navigation{\r\n  background: gray;\r\n} */\n.navigationMenu[data-v-599f088a] {\n  background: gray;\n}\nvideo[data-v-599f088a] {\n  width: 100%;\n  height: auto;\n}\n.custom-bar[data-v-599f088a] {\n  position: absolute;\n  top: 80%;\n  left: 3.5%;\n  height: 14px;\n  width: 500px;\n  background: gray;\n  z-index: 1;\n}\n.dropbtn[data-v-599f088a] {\n  background-color: lightgray;\n  color: black;\n  padding: 9px;\n  font-size: 16px;\n  border: none;\n  border-radius: 5px;\n  margin-top: 6px;\n  margin-left: 10px;\n  width: 108px;\n  float: left;\n}\n.float-right[data-v-599f088a] {\n  float: right;\n}\n.float-left[data-v-599f088a] {\n  float: left;\n}\n.dropup[data-v-599f088a] {\n  position: absolute;\n  top: 80%;\n  left: 60%;\n  /* display: inline-block; */\n  z-index: 1;\n}\n.dropup-content[data-v-599f088a] {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  bottom: 40px;\n  z-index: 1;\n}\n.dropbtn span[data-v-599f088a] {\n  color: black;\n}\n.dropup-content a[data-v-599f088a] {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n.dropup-content a[data-v-599f088a]:hover {\n  background-color: #ccc;\n}\n.dropup:hover .dropup-content[data-v-599f088a] {\n  display: block;\n}\n.dropup:hover .dropbtn[data-v-599f088a] {\n  background-color: lightgray;\n}\n#playbtn[data-v-599f088a] {\n  background-color: #111010;\n  border: medium none;\n  color: #fff;\n  display: block;\n  font-size: 18px;\n  left: 66%;\n  margin: 0 auto;\n  padding: 8px 16px;\n  position: absolute;\n  right: 0;\n  top: 10%;\n  border-radius: 5px;\n  font-size: 10px;\n}\n#thumbnailBtn[data-v-599f088a] {\n  background-color: #111010;\n  border: medium none;\n  color: #fff;\n  display: block;\n  font-size: 18px;\n  left: 66%;\n  margin: 0 auto;\n  padding: 8px 16px;\n  position: absolute;\n  right: 0;\n  top: 17%;\n  border-radius: 5px;\n  font-size: 10px;\n}\nbutton.active[data-v-599f088a] {\n  background-color: #0077a2;\n}\n.iconColor[data-v-599f088a] {\n  color: #007bff;\n}\n.iconColorWhite[data-v-599f088a] {\n  color: white;\n}\n.progress[data-v-599f088a] {\n  max-width: 100%;\n  position: relative;\n  /* remove this and title works */\n  overflow: visible;\n}\n.dot[data-v-599f088a] {\n  height: 15px;\n  width: 15px;\n  background-color: #00bc7e;\n  color: white;\n  border-radius: 50%;\n  font-size: 10px;\n  padding-top: 8px;\n  padding-left: 2px;\n  position: absolute;\n  border: 1px solid blue;\n}\n.image-circle[data-v-599f088a] {\n  background-color: #00bc7e;\n  color: white;\n  border-radius: 45%;\n  font-size: 12px;\n  padding: 4px;\n  border: 1px solid blue;\n}\n.bt[data-v-599f088a] {\n  width: 30px;\n  height: 30px;\n  display: block;\n  border-radius: 40px;\n  background-color: #ddd;\n  position: relative;\n}\n.bt[data-v-599f088a]:after {\n  position: absolute;\n  content: \" \";\n  width: 0;\n  height: 0;\n  top: calc(50% - 7px);\n  left: calc(50% - 3px);\n  display: block;\n}\n.bt.play[data-v-599f088a]:after {\n  border-top: 8px solid transparent;\n  border-bottom: 8px solid transparent;\n  border-left: 8px solid #222;\n}\n.bt.pause[data-v-599f088a]:after {\n  width: 4px;\n  height: 12px;\n  top: calc(50% - 6px);\n  left: calc(50% - 5px);\n  border-right: 3px solid #222;\n  border-left: 3px solid #222;\n}\n.pppp[data-v-599f088a] {\n  width: 4px;\n  height: 12px;\n  top: calc(50% - 6px);\n  left: calc(50% - 5px);\n  border-right: 3px solid #222;\n  border-left: 3px solid #222;\n}\n.vs__dropdown-toggle[data-v-599f088a] {\n  width: 100% !important;\n  padding-left: 45px !important;\n}\n.l-page[data-v-599f088a] {\n  width: 100%;\n  margin: 0 auto;\n  padding: 20px;\n}\n.c-content-header[data-v-599f088a] {\n  margin-top: 0;\n  font-size: 2em;\n  font-weight: 400;\n}\n.p-video-player__media[data-v-599f088a] {\n  width: 100%;\n  display: block;\n}\n.p-video-player__seekbar-wrap[data-v-599f088a] {\n  cursor: pointer;\n  position: relative;\n  margin-bottom: 10px;\n}\n.p-video-player__seekbar-wrap-progress[data-v-599f088a] {\n  cursor: pointer;\n  position: relative;\n}\n.p-video-player__seekbar-current[data-v-599f088a], .p-video-player__seekbar-back[data-v-599f088a] {\n  height: 7px;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n.p-video-player__seekbar-current[data-v-599f088a] {\n  z-index: 2;\n  background-color: #00BC7E;\n  transform: scaleX(0);\n  transform-origin: left;\n}\n.p-video-player__seekbar-back[data-v-599f088a] {\n  background-color: lightgray;\n}\n.p-video-player__control-panel[data-v-599f088a] {\n  background-color: #fff;\n}\n.p-video-player__btn[data-v-599f088a] {\n  width: 5em;\n  margin-right: 2px;\n  padding: 0.5em 0;\n}\n.p-video-player__time-wrap[data-v-599f088a] {\n  margin-left: 1em;\n  color: #00bc7e;\n}\n.p-video-player__time-current[data-v-599f088a] {\n  margin-right: 0.25em;\n  color: #00bc7e;\n}\n.p-video-player__time-all[data-v-599f088a] {\n  margin-left: 0.25em;\n  color: #00bc7e;\n}\n.navigation-panel[data-v-599f088a] {\n  width: 100%;\n  height: 7%;\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  justify-content: space-between;\n  background-color: #f4f5f6;\n  color: #1B2539;\n}\n.navigation-panel .icon-close[data-v-599f088a] {\n  color: #1B2539;\n  font-size: 1.3125em;\n}\n.navigation-panel .icon-close[data-v-599f088a]:hover {\n  color: #00bc7e;\n}\n.file-wrapper-preview[data-v-599f088a] {\n  width: 100%;\n  height: 100%;\n  padding: 30px 0px;\n  display: flex;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  background-color: white;\n}\n.file-wrapper-preview .file-wrapper[data-v-599f088a] {\n  width: 100%;\n}\n.file-wrapper-preview .file-wrapper .file-shadow[data-v-599f088a] {\n  box-shadow: 0 8px 40px rgba(17, 26, 52, 0.15);\n}\n.file-wrapper-preview .file-wrapper .file[data-v-599f088a] {\n  max-width: 100%;\n  max-height: 100%;\n  align-self: center;\n}\n.file-wrapper-preview .file-wrapper .audio[data-v-599f088a] {\n  border-radius: 28px;\n}\n.file-wrapper-preview .file-wrapper img[data-v-599f088a] {\n  border-radius: 4px;\n}\n.file-wrapper-preview .file-wrapper .video-wrapper[data-v-599f088a] {\n  max-width: 1080px;\n  max-height: 100%;\n}\n@media (min-width: 1200px) {\n.file-wrapper-preview .file-wrapper .video-wrapper[data-v-599f088a] {\n    max-width: 800px;\n}\n}\n@media (min-width: 1920px) and (max-width: 2560px) {\n.file-wrapper-preview .file-wrapper .video-wrapper[data-v-599f088a] {\n    max-width: 1080px;\n}\n}\n@media (min-width: 2560px) and (max-width: 3840px) {\n.file-wrapper-preview .file-wrapper .video-wrapper[data-v-599f088a] {\n    max-width: 1440px;\n}\n}\n@media (min-width: 3840px) {\n.file-wrapper-preview .file-wrapper .video-wrapper[data-v-599f088a] {\n    max-width: 2160px;\n}\n}\n.file-wrapper-preview .file-wrapper .video-wrapper .video[data-v-599f088a] {\n  max-width: 100%;\n  max-height: 100%;\n  align-self: center;\n}\n@media (prefers-color-scheme: dark) {\n.file-wrapper-preview[data-v-599f088a] {\n    background-color: #111314;\n}\n.file-wrapper-preview .file-wrapper .file-shadow[data-v-599f088a] {\n    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);\n}\n#version2[data-v-599f088a] {\n    background-color: lightgray;\n}\n#version1[data-v-599f088a] {\n    background-color: lightgray;\n}\n*[data-v-599f088a] {\n    color: #1a1a1a !important;\n}\n}\n.tabs__item tabs__item_active[data-v-599f088a] {\n  color: #0e0e0e !important;\n}\n.v-select.drop-up.vs--open .vs__dropdown-toggle[data-v-599f088a] {\n  border-radius: 0 0 4px 4px;\n  border-top-color: transparent;\n  border-bottom-color: rgba(60, 60, 60, 0.26);\n}\n[data-popper-placement='top'][data-v-599f088a] {\n  border-radius: 4px 4px 0 0;\n  border-top-style: solid;\n  border-bottom-style: none;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.15);\n}\n.vs__dropdown-toggle[data-v-599f088a] {\n  width: 100% !important;\n  padding-left: 45px !important;\n}\n.draw-options[data-v-599f088a] {\n  width: 36px;\n  border-radius: 23px;\n  padding: 7px;\n  font-size: 16px;\n  color: #00bc7e !important;\n}\n.slide-fade-enter-active[data-v-599f088a] {\n  transition: all .5s ease;\n}\n.slide-fade-leave-active[data-v-599f088a] {\n  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.slide-fade-enter[data-v-599f088a], .slide-fade-leave-to[data-v-599f088a] {\n  transform: translateX(10px);\n  opacity: 0;\n}\n.vs__search[data-v-599f088a] {\n  width: 120px !important;\n}\n.vue-slider-process[data-v-599f088a] {\n  background-color: #fff !important;\n  color: #00bc7e !important;\n}\n#dropdownMenuLink[data-v-599f088a] {\n  color: #00bc7e !important;\n}\n.dropdown-menu[data-v-599f088a] {\n  color: #00bc7e !important;\n  padding: 6px;\n}\n.dropdown-item[data-v-599f088a] {\n  color: #00bc7e !important;\n  padding: 2px;\n}\n#vs2__combobox[data-v-599f088a] {\n  height: 36px;\n  /* padding-left: 45px; */\n  width: 176px;\n  background-color: lightgray;\n}\n.vue-slider-process[data-v-599f088a] {\n  background-color: black !important;\n}\n.paintTool[data-v-599f088a] {\n  margin-top: -18px;\n}\n.comment_color[data-v-599f088a] {\n  border-top: 1px solid black;\n}\n.color-green[data-v-599f088a] {\n  color: #00bc7e !important;\n}\n.color-white[data-v-599f088a] {\n  background: #fff;\n}\n@media (prefers-color-scheme: dark) {\n.dynamic-theme-color[data-v-599f088a] {\n    background: #111314;\n}\n.color-green[data-v-599f088a] {\n    background: #111314;\n}\n.dropdown-item[data-v-599f088a] {\n    background: #111314;\n}\n.card card-white post[data-v-599f088a] {\n    background: #3d4a3e;\n}\n.comment_color[data-v-599f088a] {\n    border-top: 1px solid #3d4a3e;\n}\n.color-white[data-v-599f088a] {\n    background: #3d4a3e !important;\n}\n.p-video-player__control-panel[data-v-599f088a] {\n    background: #3d4a3e;\n}\n.post[data-v-599f088a] {\n    background: #3d4a3e;\n}\n.vs__dropdown-toggle[data-v-599f088a] {\n    color: lightgray !important;\n}\n}\n@media screen and (max-width: 1100px) {\n#videoElement[data-v-599f088a] {\n    max-width: 600px;\n}\n}\n@media screen and (max-width: 992px) {\n#videoElement[data-v-599f088a] {\n    max-width: 600px;\n}\n}\n@media screen and (max-width: 798px) and (max-width: 900px) {\n#videoElement[data-v-599f088a] {\n    max-width: 500px;\n}\n}\n@media screen and (max-width: 700px) {\n#videoElement[data-v-599f088a] {\n    max-width: 450px;\n}\n}\n@media screen and (max-width: 1100px) and (max-width: 900px) {\n.paintable[data-v-599f088a] {\n    max-width: 800px !important;\n}\n}\n@media screen and (max-width: 700px) {\n.paintable[data-v-599f088a] {\n    max-width: 600px !important;\n}\n}\n.version-video[data-v-599f088a] {\n  width: 100%;\n}\n.v-select.drop-up.vs--open .vs__dropdown-toggle[data-v-599f088a] {\n  border-radius: 0 0 4px 4px;\n  border-top-color: transparent;\n  border-bottom-color: rgba(60, 60, 60, 0.26);\n}\n[data-popper-placement='top'][data-v-599f088a] {\n  border-radius: 4px 4px 0 0;\n  border-top-style: solid;\n  border-bottom-style: none;\n  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.15);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".empty-note.navigator[data-v-99a1c73e] {\n  padding: 5px 25px 10px;\n}\n.empty-note.favourites[data-v-99a1c73e] {\n  padding: 5px 23px 10px;\n}\n.navigator[data-v-99a1c73e] {\n  width: 100%;\n  overflow-x: auto;\n}\n@media only screen and (max-width: 1024px) {\n.empty-note.navigator[data-v-99a1c73e] {\n    padding: 5px 20px 10px;\n}\n.empty-note.favourites[data-v-99a1c73e] {\n    padding: 5px 18px 10px;\n}\n}\n.folder-item-move[data-v-99a1c73e] {\n  transition: transform 300s ease;\n}\n.folder-item-enter-active[data-v-99a1c73e] {\n  transition: all 300ms ease;\n}\n.folder-item-leave-active[data-v-99a1c73e] {\n  transition: all 300ms;\n}\n.folder-item-enter[data-v-99a1c73e], .folder-item-leave-to[data-v-99a1c73e] {\n  opacity: 0;\n  transform: translateX(30px);\n}\n.folder-item-leave-active[data-v-99a1c73e] {\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=style&index=1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/Files.vue?vue&type=style&index=1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.file-content{\n      position:none;\n}\n\n\n/* Portrait tablet to landscape and desktop */\n@media (min-width: 768px) and (max-width: 979px) and (max-width:1100px) {\n.toolbar-wrapper{\n            right: 100px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ContentFileView.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ContentFileView.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFileView.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ContentFileView.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=style&index=1&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/Files.vue?vue&type=style&index=1&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=style&index=1&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ContentFileView.vue?vue&type=template&id=30a83839&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ContentFileView.vue?vue&type=template&id=30a83839& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      attrs: { id: "files-view" },
      on: {
        click: _vm.fileViewClick,
        "!contextmenu": function($event) {
          $event.preventDefault()
          return _vm.contextMenu($event, undefined)
        }
      }
    },
    [
      _c("ContextMenu"),
      _vm._v(" "),
      _c("DesktopToolbar"),
      _vm._v(" "),
      _c("FileBrowser")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "folder" } }, [
    _c(
      "div",
      { staticClass: "folder-item-wrapper" },
      [
        _c(
          "div",
          {
            staticClass: "folder-item",
            class: { "is-selected": _vm.isSelected },
            style: _vm.indent,
            on: { click: _vm.getFolder }
          },
          [
            _c("chevron-right-icon", {
              staticClass: "icon-arrow",
              class: {
                "is-opened": _vm.isVisible,
                "is-visible": _vm.nodes.folders.length !== 0
              },
              attrs: { size: "17" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.showTree($event)
                }
              }
            }),
            _vm._v(" "),
            _c("folder-icon", { staticClass: "icon", attrs: { size: "17" } }),
            _vm._v(" "),
            _c("span", { staticClass: "label" }, [
              _vm._v(_vm._s(_vm.nodes.name))
            ])
          ],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.nodes.folders, function(item) {
          return _vm.isVisible
            ? _c("TreeMenuNavigator", {
                key: item.unique_id,
                attrs: { depth: _vm.depth + 1, nodes: item }
              })
            : _vm._e()
        })
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=template&id=0e26391d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=template&id=0e26391d&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "upgrade-banner" }, [
    _c(
      "div",
      { staticClass: "header-title" },
      [
        _c("hard-drive-icon", { staticClass: "icon", attrs: { size: "19" } }),
        _vm._v(" "),
        _c("span", { staticClass: "title" }, [
          _vm._v(
            _vm._s(_vm.storage.used) +
              "% From " +
              _vm._s(_vm.storage.capacity_formatted)
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _vm.storage.used > 95
        ? _c("p", { staticClass: "reach-capacity" }, [
            _vm._v(_vm._s(_vm.$t("upgrade_banner.title")))
          ])
        : _c("p", { staticClass: "reach-capacity" }, [
            _vm._v(_vm._s(_vm.$t("upgrade_banner.description")))
          ])
    ]),
    _vm._v(" "),
    _vm.config.app_payments_active
      ? _c(
          "div",
          { staticClass: "footer" },
          [
            _c(
              "router-link",
              { staticClass: "button", attrs: { to: { name: "UpgradePlan" } } },
              [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.$t("upgrade_banner.button")) +
                    "\n        "
                )
              ]
            )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=template&id=599f088a&scoped=true&oncontextmenu=return%20false%3B&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=template&id=599f088a&scoped=true&oncontextmenu=return%20false%3B& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.$route.name == "ComparisonMediaView" ? "col-12 " : "col-12 " },
    [
      _vm.isLoading ? _c("Spinner") : _vm._e(),
      _vm._v(" "),
      _c("MoveItem"),
      _vm._v(" "),
      _c("MobileMenu"),
      _vm._v(" "),
      _c("Alert"),
      _vm._v(" "),
      _c("Vignette"),
      _vm._v(" "),
      !_vm.isLoading ? _c("FileReviewNavigationPanel") : _vm._e(),
      _vm._v(" "),
      !_vm.isLoading
        ? _c("div", { staticClass: "col-12 margin-top-navbar" }, [
            _vm.lastTwoFiles[0].type == "video"
              ? _c("div", {}, [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-sm-6 text-center mt-2 mb-2" },
                      [
                        _c(
                          "button",
                          {
                            class: [
                              _vm.first_media_volume
                                ? "btn-save  sound-volume"
                                : "btn-save sound-disable"
                            ],
                            on: { click: _vm.volume1 }
                          },
                          [
                            _vm.first_media_volume
                              ? _c("i", { staticClass: "fas fa-volume-up" })
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.first_media_volume
                              ? _c("i", { staticClass: "fas fa-volume-mute" })
                              : _vm._e()
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-sm-6 text-center mt-2 mb-2 " },
                      [
                        _c(
                          "button",
                          {
                            class: [
                              _vm.second_media_volume
                                ? "btn-save  sound-volume"
                                : "btn-save sound-disable"
                            ],
                            on: { click: _vm.volume1 }
                          },
                          [
                            _vm.second_media_volume
                              ? _c("i", { staticClass: "fas fa-volume-up" })
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.second_media_volume
                              ? _c("i", { staticClass: "fas fa-volume-mute" })
                              : _vm._e()
                          ]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "player" }, [
                        _c("video", {
                          staticClass: "version-video",
                          attrs: {
                            id: "videoElement1",
                            src: _vm.first_video_src
                              ? _vm.first_video_src
                              : "http://127.0.0.1:8000/file/etnw52cglwnxqmef-HTML%20canvas%20drawImage%28%29%20Method.mp4"
                          },
                          on: { click: _vm.playOrPause }
                        }),
                        _vm._v(" "),
                        _vm._m(0)
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "player" }, [
                        _c("video", {
                          staticClass: "version-video",
                          attrs: {
                            id: "videoElement2",
                            src: _vm.second_video_src
                              ? _vm.second_video_src
                              : "http://127.0.0.1:8000/file/krwvdv5z9y1wjny7-Test%20Videos%20-%20Google%20Drive_2.mp4"
                          },
                          on: { click: _vm.playOrPause }
                        }),
                        _vm._v(" "),
                        _vm._m(1)
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-12" }, [
                      _c(
                        "div",
                        {
                          staticClass: "p-video-player__seekbar-wrap",
                          attrs: { id: "video-player-media" },
                          on: {
                            mousedown: _vm.grabSeekbar,
                            touchstart: _vm.grabSeekbar,
                            touchmove: _vm.moveSeekbar,
                            touchend: _vm.releaseSeekbar
                          }
                        },
                        [
                          _vm.getProgressRate <= 1
                            ? _c("div", {
                                staticClass: "p-video-player__seekbar-current",
                                style: {
                                  transform:
                                    "scaleX(" + _vm.getProgressRate + ")"
                                }
                              })
                            : _c("div", {
                                staticClass: "p-video-player__seekbar-current",
                                style: { transform: "scaleX(" + 1 + ")" }
                              }),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "p-video-player__seekbar-back"
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(2),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "p-video-player__control-panel p-2" },
                        [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-sm-12" },
                              [
                                _c(
                                  "div",
                                  { staticClass: "d-inline float-left" },
                                  [
                                    _vm.isPlaying
                                      ? _c(
                                          "a",
                                          {
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.playOrPause($event)
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-pause ",
                                              staticStyle: {
                                                color: "#00BC7E !important"
                                              }
                                            })
                                          ]
                                        )
                                      : _c(
                                          "a",
                                          { on: { click: _vm.playOrPause } },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-play ",
                                              staticStyle: {
                                                color: "#00BC7E !important"
                                              }
                                            })
                                          ]
                                        )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "ml-5 float-left",
                                    attrs: { title: "Loop" },
                                    on: {
                                      click: function($event) {
                                        return _vm.playLoop()
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-repeat",
                                      class: {
                                        iconColor: _vm.looping == true,
                                        iconColorWhite: _vm.looping == false
                                      },
                                      staticStyle: {
                                        color: "#00BC7E !important"
                                      },
                                      attrs: { "aria-hidden": "true" }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "dropdown show ml-3 float-left",
                                    staticStyle: {
                                      display: "inline-block",
                                      color: "#00BC7E !important"
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "dropdown-toggle  ",
                                        staticStyle: {
                                          color: "#00BC7E !important"
                                        },
                                        attrs: {
                                          href: "#",
                                          role: "button",
                                          id: "dropdownMenuLink",
                                          "data-toggle": "dropdown",
                                          "aria-haspopup": "true",
                                          "aria-expanded": "false"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                        " +
                                            _vm._s(_vm.playback_speed) +
                                            "x\n                      "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "dropdown-menu ",
                                        staticStyle: {
                                          color: "#00BC7E !important"
                                        },
                                        attrs: {
                                          "aria-labelledby": "dropdownMenuLink"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                return _vm.placbackSpeed(0.25)
                                              }
                                            }
                                          },
                                          [_vm._v("0.25")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                return _vm.placbackSpeed(0.5)
                                              }
                                            }
                                          },
                                          [_vm._v("0.5")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                return _vm.placbackSpeed(0.75)
                                              }
                                            }
                                          },
                                          [_vm._v("0.75")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                return _vm.placbackSpeed(1)
                                              }
                                            }
                                          },
                                          [_vm._v("Normal")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                return _vm.placbackSpeed(1.25)
                                              }
                                            }
                                          },
                                          [_vm._v("1.25")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                return _vm.placbackSpeed(1.5)
                                              }
                                            }
                                          },
                                          [_vm._v("1.5")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                return _vm.placbackSpeed(1.75)
                                              }
                                            }
                                          },
                                          [_vm._v("1.75")]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "float-left mr-1" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "ml-4",
                                      on: {
                                        click: function($event) {
                                          return _vm.muteVolume()
                                        }
                                      }
                                    },
                                    [
                                      _vm.volumeMute
                                        ? _c("a", [
                                            _c("i", {
                                              staticClass:
                                                "fas fa-volume-slash",
                                              staticStyle: { color: "#00bc7e" }
                                            })
                                          ])
                                        : _c("a", [
                                            _c("i", {
                                              staticClass: "fa fa-volume-up",
                                              staticStyle: { color: "#00bc7e" },
                                              attrs: { "aria-hidden": "true" }
                                            })
                                          ])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("vue-slider", {
                                  staticClass: "float-left mr-1",
                                  attrs: { width: "15%", tooltip: "active" },
                                  on: {
                                    change: function($event) {
                                      return _vm.SetVolume()
                                    }
                                  },
                                  model: {
                                    value: _vm.val,
                                    callback: function($$v) {
                                      _vm.val = $$v
                                    },
                                    expression: "val"
                                  }
                                }),
                                _vm._v(" "),
                                _vm.timeFormat == "Standard"
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "p-video-player__time-wrap  ml-2 d-inline",
                                        staticStyle: {
                                          color: "#00BC7E !important"
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "p-video-player__time-current "
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.getCurrentTime) +
                                                "\n                            "
                                            )
                                          ]
                                        ),
                                        _vm._v("/\n                      "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "p-video-player__time-all "
                                          },
                                          [_vm._v(_vm._s(_vm.getDuration))]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.timeFormat == "Timecode"
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "p-video-player__time-wrap  ml-2 d-inline",
                                        staticStyle: {
                                          color: "#00BC7E !important"
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "p-video-player__time-current "
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.getCurrentMilisecond) +
                                                "\n                            "
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.timeFormat == "Frames"
                                  ? _c(
                                      "div",
                                      {
                                        staticClass:
                                          "p-video-player__time-wrap  ml-2 d-inline",
                                        staticStyle: {
                                          color: "#00BC7E !important"
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "p-video-player__time-current"
                                          },
                                          [
                                            _vm._v(
                                              " " +
                                                _vm._s(_vm.getFrames) +
                                                "\n                            "
                                            )
                                          ]
                                        ),
                                        _vm._v("/\n                      "),
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "p-video-player__time-all",
                                            staticStyle: {
                                              color: "#00BC7E !important"
                                            }
                                          },
                                          [_vm._v(_vm._s(_vm.getTotalFrame))]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass: "dropdown show ml-3",
                                    staticStyle: { display: "inline-block" }
                                  },
                                  [
                                    _c("a", {
                                      staticClass: "dropdown-toggle ",
                                      attrs: {
                                        href: "#",
                                        role: "button",
                                        id: "dropdownMenuLink",
                                        "data-toggle": "dropdown",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "dropdown-menu",
                                        attrs: {
                                          "aria-labelledby": "dropdownMenuLink"
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass:
                                              "dropdown-item disabled",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                return _vm.playQualitySet(1080)
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "strong",
                                              { staticClass: "color-green" },
                                              [_vm._v("Time Format")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                return _vm.setTimeFormat(
                                                  "Standard"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "strong",
                                              { staticClass: "color-green" },
                                              [_vm._v("Standard")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                return _vm.setTimeFormat(
                                                  "Timecode"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "strong",
                                              { staticClass: "color-green" },
                                              [_vm._v("Timecode")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            staticClass: "dropdown-item",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                return _vm.setTimeFormat(
                                                  "Frames"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c(
                                              "strong",
                                              { staticClass: "color-green" },
                                              [_vm._v("Frames")]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "float-right" })
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.lastTwoFiles[0].type == "image"
              ? _c("div", {}, [
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "player" }, [
                        _c("img", {
                          staticClass: "version-video",
                          attrs: {
                            src: _vm.first_video_src ? _vm.first_video_src : ""
                          }
                        }),
                        _vm._v(" "),
                        _vm._m(3)
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-sm-6" }, [
                      _c("div", { staticClass: "player" }, [
                        _c("img", {
                          staticClass: "version-video",
                          attrs: {
                            src: _vm.second_video_src
                              ? _vm.second_video_src
                              : ""
                          }
                        })
                      ])
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-sm-6 text-center mt-2 mb-2" },
                [
                  _c(
                    "v-select",
                    {
                      attrs: {
                        id: "version1",
                        options: _vm.version_Options,
                        label: "mimetype",
                        attach: "",
                        auto: "",
                        filterable: false
                      },
                      on: { input: _vm.changeFirstMediaSrc },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "option",
                            fn: function(data) {
                              return [
                                _c("div", { staticClass: "d-center" }, [
                                  data.name
                                    ? _c("p", [
                                        _c("span", { staticClass: "dot-txt" }, [
                                          _vm._v(
                                            _vm._s(data.name) +
                                              "\n                  "
                                          )
                                        ])
                                      ])
                                    : _vm._e()
                                ])
                              ]
                            }
                          },
                          {
                            key: "selected-option",
                            fn: function(data) {
                              return [
                                _c(
                                  "div",
                                  { staticClass: "selected d-center" },
                                  [
                                    data
                                      ? _c("span", [
                                          data
                                            ? _c("p", [
                                                _vm._v("  " + _vm._s(data.name))
                                              ])
                                            : _vm._e()
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        229889308
                      ),
                      model: {
                        value: _vm.version1,
                        callback: function($$v) {
                          _vm.version1 = $$v
                        },
                        expression: "version1"
                      }
                    },
                    [_c("template", { slot: "no-options" })],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-sm-6 text-center mt-2 mb-2 " },
                [
                  _c(
                    "v-select",
                    {
                      attrs: {
                        id: "version2",
                        options: _vm.version_Options,
                        label: "mimetype",
                        "append-to-body": "",
                        filterable: false
                      },
                      on: { input: _vm.changeSecondMediaSrc },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "option",
                            fn: function(data) {
                              return [
                                _c("div", { staticClass: "d-center" }, [
                                  data.name
                                    ? _c("p", [
                                        _c("span", { staticClass: "dot-txt" }, [
                                          _vm._v(_vm._s(data.name))
                                        ])
                                      ])
                                    : _vm._e()
                                ])
                              ]
                            }
                          },
                          {
                            key: "selected-option",
                            fn: function(data) {
                              return [
                                _c(
                                  "div",
                                  { staticClass: "selected d-center" },
                                  [
                                    data
                                      ? _c("span", [
                                          data
                                            ? _c("p", [
                                                _vm._v("  " + _vm._s(data.name))
                                              ])
                                            : _vm._e()
                                        ])
                                      : _vm._e()
                                  ]
                                )
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        2459579973
                      ),
                      model: {
                        value: _vm.version2,
                        callback: function($$v) {
                          _vm.version2 = $$v
                        },
                        expression: "version2"
                      }
                    },
                    [_c("template", { slot: "no-options" })],
                    2
                  )
                ],
                1
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isLoading === false,
              expression: "isLoading ===false"
            }
          ]
        },
        [_vm.loading ? _c("div", [_vm._v("Loading some data")]) : _vm._e()]
      ),
      _vm._v(" "),
      _vm.loading ? _c("div", [_vm._v("Loading some data")]) : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "controls" }, [
      _c("div", { staticClass: "timer" }, [
        _c("div"),
        _vm._v(" "),
        _c("span", { attrs: { "aria-label": "timer" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "controls" }, [
      _c("div", { staticClass: "timer" }, [
        _c("div"),
        _vm._v(" "),
        _c("span", { attrs: { "aria-label": "timer" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "p-video-player__seekbar-wrap-progress",
        attrs: { id: "video-player-media" }
      },
      [
        _c(
          "div",
          { staticClass: "progress", staticStyle: { height: "25px" } },
          [
            _c("div", {
              staticClass: "progress-bar color-white",
              staticStyle: { width: "100%" },
              attrs: {
                role: "progressbar",
                "aria-valuenow": "40",
                "aria-valuemin": "0",
                "aria-valuemax": "100"
              }
            })
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "controls" }, [
      _c("div", { staticClass: "timer" }, [
        _c("div"),
        _vm._v(" "),
        _c("span", { attrs: { "aria-label": "timer" } })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=template&id=99a1c73e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/Files.vue?vue&type=template&id=99a1c73e&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.user
    ? _c(
        "section",
        { attrs: { id: "viewport" } },
        [
          _c(
            "ContentSidebar",
            [
              _vm.config.storageLimit && _vm.storage.used > 95
                ? _c("ContentGroup", [_c("UpgradeSidebarBanner")], 1)
                : _vm._e(),
              _vm._v(" "),
              _c(
                "ContentGroup",
                { attrs: { title: _vm.$t("sidebar.locations_title") } },
                [
                  _c("div", { staticClass: "menu-list-wrapper vertical" }, [
                    _c(
                      "a",
                      {
                        staticClass: "menu-list-item link",
                        class: { "is-active": _vm.$isThisLocation(["base"]) },
                        on: { click: _vm.goHome }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("home-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "label" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$t("sidebar.home")) +
                              "\n          "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "menu-list-item link",
                        class: { "is-active": _vm.$isThisLocation(["latest"]) },
                        on: { click: _vm.getLatest }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("upload-cloud-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "label" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$t("sidebar.latest")) +
                              "\n          "
                          )
                        ])
                      ]
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "ContentGroup",
                {
                  staticClass: "navigator",
                  attrs: { title: _vm.$t("sidebar.navigator_title") }
                },
                [
                  _vm.tree.length == 0
                    ? _c("span", { staticClass: "empty-note navigator" }, [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$t("sidebar.folders_empty")) +
                            "\n      "
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.tree, function(items) {
                    return _c("TreeMenuNavigator", {
                      key: items.unique_id,
                      staticClass: "folder-tree",
                      attrs: { depth: 0, nodes: items }
                    })
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "ContentGroup",
                { attrs: { title: _vm.$t("sidebar.favourites") } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "menu-list-wrapper vertical favourites",
                      class: { "is-dragenter": _vm.area },
                      on: {
                        dragover: function($event) {
                          $event.preventDefault()
                          return _vm.dragEnter($event)
                        },
                        dragleave: _vm.dragLeave,
                        drop: function($event) {
                          return _vm.dragFinish($event)
                        }
                      }
                    },
                    [
                      _c(
                        "transition-group",
                        {
                          staticClass: "menu-list",
                          attrs: { tag: "div", name: "folder-item" }
                        },
                        [
                          _vm.favourites.length == 0
                            ? _c(
                                "span",
                                {
                                  key: 0,
                                  staticClass: "empty-note favourites"
                                },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(
                                        _vm.$t("sidebar.favourites_empty")
                                      ) +
                                      "\n                "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.favourites, function(folder) {
                            return _c(
                              "a",
                              {
                                key: folder.unique_id,
                                staticClass: "menu-list-item",
                                class: {
                                  "is-current":
                                    folder &&
                                    _vm.currentFolder &&
                                    _vm.currentFolder.unique_id ===
                                      folder.unique_id
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.openFolder(folder)
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  [
                                    _c("folder-icon", {
                                      staticClass: "folder-icon",
                                      attrs: { size: "17" }
                                    }),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "label" }, [
                                      _vm._v(_vm._s(folder.name))
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("x-icon", {
                                  staticClass: "delete-icon",
                                  attrs: { size: "17" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.removeFavourite(folder)
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("ContentFileView")
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Others/ContentFileView.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Others/ContentFileView.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentFileView_vue_vue_type_template_id_30a83839___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentFileView.vue?vue&type=template&id=30a83839& */ "./resources/js/components/Others/ContentFileView.vue?vue&type=template&id=30a83839&");
/* harmony import */ var _ContentFileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentFileView.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/ContentFileView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ContentFileView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentFileView.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/components/Others/ContentFileView.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ContentFileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentFileView_vue_vue_type_template_id_30a83839___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContentFileView_vue_vue_type_template_id_30a83839___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/ContentFileView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/ContentFileView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Others/ContentFileView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFileView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ContentFileView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/ContentFileView.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Others/ContentFileView.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFileView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFileView.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ContentFileView.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFileView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFileView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFileView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFileView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/ContentFileView.vue?vue&type=template&id=30a83839&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Others/ContentFileView.vue?vue&type=template&id=30a83839& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFileView_vue_vue_type_template_id_30a83839___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContentFileView.vue?vue&type=template&id=30a83839& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ContentFileView.vue?vue&type=template&id=30a83839&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFileView_vue_vue_type_template_id_30a83839___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFileView_vue_vue_type_template_id_30a83839___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Others/TreeMenuNavigator.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Others/TreeMenuNavigator.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true& */ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true&");
/* harmony import */ var _TreeMenuNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeMenuNavigator.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& */ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TreeMenuNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38f20d4e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/TreeMenuNavigator.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeMenuNavigator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=style&index=0&id=38f20d4e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_style_index_0_id_38f20d4e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/TreeMenuNavigator.vue?vue&type=template&id=38f20d4e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeMenuNavigator_vue_vue_type_template_id_38f20d4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Others/UpgradeSidebarBanner.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/Others/UpgradeSidebarBanner.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpgradeSidebarBanner_vue_vue_type_template_id_0e26391d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpgradeSidebarBanner.vue?vue&type=template&id=0e26391d&scoped=true& */ "./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=template&id=0e26391d&scoped=true&");
/* harmony import */ var _UpgradeSidebarBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpgradeSidebarBanner.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpgradeSidebarBanner_vue_vue_type_style_index_0_id_0e26391d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true& */ "./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpgradeSidebarBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpgradeSidebarBanner_vue_vue_type_template_id_0e26391d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpgradeSidebarBanner_vue_vue_type_template_id_0e26391d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0e26391d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/UpgradeSidebarBanner.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeSidebarBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeSidebarBanner.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeSidebarBanner_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeSidebarBanner_vue_vue_type_style_index_0_id_0e26391d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=style&index=0&id=0e26391d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeSidebarBanner_vue_vue_type_style_index_0_id_0e26391d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeSidebarBanner_vue_vue_type_style_index_0_id_0e26391d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeSidebarBanner_vue_vue_type_style_index_0_id_0e26391d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeSidebarBanner_vue_vue_type_style_index_0_id_0e26391d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=template&id=0e26391d&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=template&id=0e26391d&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeSidebarBanner_vue_vue_type_template_id_0e26391d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeSidebarBanner.vue?vue&type=template&id=0e26391d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/UpgradeSidebarBanner.vue?vue&type=template&id=0e26391d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeSidebarBanner_vue_vue_type_template_id_0e26391d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeSidebarBanner_vue_vue_type_template_id_0e26391d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/FilePages/ComparisonMediaView.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/FilePages/ComparisonMediaView.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComparisonMediaView_vue_vue_type_template_id_599f088a_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComparisonMediaView.vue?vue&type=template&id=599f088a&scoped=true&oncontextmenu=return%20false%3B& */ "./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=template&id=599f088a&scoped=true&oncontextmenu=return%20false%3B&");
/* harmony import */ var _ComparisonMediaView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComparisonMediaView.vue?vue&type=script&lang=js& */ "./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ComparisonMediaView_vue_vue_type_style_index_0_id_599f088a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true& */ "./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ComparisonMediaView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComparisonMediaView_vue_vue_type_template_id_599f088a_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ComparisonMediaView_vue_vue_type_template_id_599f088a_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "599f088a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/FilePages/ComparisonMediaView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparisonMediaView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComparisonMediaView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparisonMediaView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparisonMediaView_vue_vue_type_style_index_0_id_599f088a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=style&index=0&id=599f088a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparisonMediaView_vue_vue_type_style_index_0_id_599f088a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparisonMediaView_vue_vue_type_style_index_0_id_599f088a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparisonMediaView_vue_vue_type_style_index_0_id_599f088a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparisonMediaView_vue_vue_type_style_index_0_id_599f088a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=template&id=599f088a&scoped=true&oncontextmenu=return%20false%3B&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=template&id=599f088a&scoped=true&oncontextmenu=return%20false%3B& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparisonMediaView_vue_vue_type_template_id_599f088a_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ComparisonMediaView.vue?vue&type=template&id=599f088a&scoped=true&oncontextmenu=return%20false%3B& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/ComparisonMediaView.vue?vue&type=template&id=599f088a&scoped=true&oncontextmenu=return%20false%3B&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparisonMediaView_vue_vue_type_template_id_599f088a_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComparisonMediaView_vue_vue_type_template_id_599f088a_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/FilePages/Files.vue":
/*!************************************************!*\
  !*** ./resources/js/views/FilePages/Files.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Files_vue_vue_type_template_id_99a1c73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Files.vue?vue&type=template&id=99a1c73e&scoped=true& */ "./resources/js/views/FilePages/Files.vue?vue&type=template&id=99a1c73e&scoped=true&");
/* harmony import */ var _Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Files.vue?vue&type=script&lang=js& */ "./resources/js/views/FilePages/Files.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Files_vue_vue_type_style_index_0_id_99a1c73e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true& */ "./resources/js/views/FilePages/Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true&");
/* harmony import */ var _Files_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Files.vue?vue&type=style&index=1&lang=css& */ "./resources/js/views/FilePages/Files.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Files_vue_vue_type_template_id_99a1c73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Files_vue_vue_type_template_id_99a1c73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "99a1c73e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/FilePages/Files.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/FilePages/Files.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/FilePages/Files.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/FilePages/Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/FilePages/Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_99a1c73e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=style&index=0&id=99a1c73e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_99a1c73e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_99a1c73e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_99a1c73e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_99a1c73e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/FilePages/Files.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/FilePages/Files.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=style&index=1&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/FilePages/Files.vue?vue&type=template&id=99a1c73e&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/FilePages/Files.vue?vue&type=template&id=99a1c73e&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_99a1c73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=template&id=99a1c73e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=template&id=99a1c73e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_99a1c73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_99a1c73e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);