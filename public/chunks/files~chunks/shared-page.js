(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/files~chunks/shared-page"],{

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FilePages/Files.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FilePages/Files.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Others_UpgradeSidebarBanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Others/UpgradeSidebarBanner */ "./resources/js/components/Others/UpgradeSidebarBanner.vue");
/* harmony import */ var _components_Others_TreeMenuNavigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Others/TreeMenuNavigator */ "./resources/js/components/Others/TreeMenuNavigator.vue");
/* harmony import */ var _components_Others_ContentFileView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Others/ContentFileView */ "./resources/js/components/Others/ContentFileView.vue");
/* harmony import */ var _components_Sidebar_ContentSidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Sidebar/ContentSidebar */ "./resources/js/components/Sidebar/ContentSidebar.vue");
/* harmony import */ var _components_Sidebar_ContentGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Sidebar/ContentGroup */ "./resources/js/components/Sidebar/ContentGroup.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FilesView',
  components: {
    UpgradeSidebarBanner: _components_Others_UpgradeSidebarBanner__WEBPACK_IMPORTED_MODULE_0__["default"],
    TreeMenuNavigator: _components_Others_TreeMenuNavigator__WEBPACK_IMPORTED_MODULE_1__["default"],
    ContentFileView: _components_Others_ContentFileView__WEBPACK_IMPORTED_MODULE_2__["default"],
    ContentSidebar: _components_Sidebar_ContentSidebar__WEBPACK_IMPORTED_MODULE_3__["default"],
    UploadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__["UploadCloudIcon"],
    ContentGroup: _components_Sidebar_ContentGroup__WEBPACK_IMPORTED_MODULE_4__["default"],
    FolderIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__["FolderIcon"],
    HomeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__["HomeIcon"],
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__["XIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(['user', 'homeDirectory', 'isLogged', 'currentFolder', 'config'])), {}, {
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
    }
  },
  created: function created() {
    var _this2 = this;

    this.goHome(); // Listen for dragstart folder items

    _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$on('dragstart', function (item) {
      return _this2.draggedItem = item;
    });
  },
  beforeCreate: function beforeCreate() {
    if (this.isLogged == false) {
      this.$router.push({
        name: 'SignIn'
      });
    }
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
                          "\n                  " +
                            _vm._s(_vm.$t("sidebar.folders_empty")) +
                            "\n              "
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
                                    "\n                          " +
                                      _vm._s(
                                        _vm.$t("sidebar.favourites_empty")
                                      ) +
                                      "\n                      "
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
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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