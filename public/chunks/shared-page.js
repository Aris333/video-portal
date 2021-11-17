(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/shared-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/DesktopToolbar */ "./resources/js/components/FilesView/DesktopToolbar.vue");
/* harmony import */ var _components_FilesView_FileFullPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/FileFullPreview */ "./resources/js/components/FilesView/FileFullPreview.vue");
/* harmony import */ var _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilesView/FileItemGrid */ "./resources/js/components/FilesView/FileItemGrid.vue");
/* harmony import */ var _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FilesView/FileBrowser */ "./resources/js/components/FilesView/FileBrowser.vue");
/* harmony import */ var _components_FilesView_ContextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FilesView/ContextMenu */ "./resources/js/components/FilesView/ContextMenu.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_FilesView_MobileMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/FilesView/MobileMenu */ "./resources/js/components/FilesView/MobileMenu.vue");
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var _components_Others_MoveItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Others/MoveItem */ "./resources/js/components/Others/MoveItem.vue");
/* harmony import */ var _components_Others_Vignette__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Others/Vignette */ "./resources/js/components/Others/Vignette.vue");
/* harmony import */ var _components_FilesView_Alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/FilesView/Alert */ "./resources/js/components/FilesView/Alert.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);


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


















/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SharedPage',
  components: {
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    FileFullPreview: _components_FilesView_FileFullPreview__WEBPACK_IMPORTED_MODULE_3__["default"],
    DesktopToolbar: _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    FileItemGrid: _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_4__["default"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_9__["default"],
    FileBrowser: _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_5__["default"],
    ContextMenu: _components_FilesView_ContextMenu__WEBPACK_IMPORTED_MODULE_6__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_10__["default"],
    MobileMenu: _components_FilesView_MobileMenu__WEBPACK_IMPORTED_MODULE_8__["default"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"],
    MoveItem: _components_Others_MoveItem__WEBPACK_IMPORTED_MODULE_12__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_15__["required"],
    Vignette: _components_Others_Vignette__WEBPACK_IMPORTED_MODULE_13__["default"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"],
    Alert: _components_FilesView_Alert__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_16__["mapGetters"])(['config', 'sharedDetail', 'sharedFile'])),
  data: function data() {
    return {
      checkedAccount: undefined,
      password: '',
      isLoading: false,
      isPageLoading: true,
      currentPage: undefined
    };
  },
  methods: {
    authenticateProtected: function authenticateProtected() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.authenticateProtected.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                // Start loading
                _this.isLoading = true; // Send request to get verify account

                axios__WEBPACK_IMPORTED_MODULE_18___default.a.post('/api/shared/authenticate/' + _this.$route.params.token, {
                  password: _this.password
                }).then(function () {
                  // End loading
                  _this.isLoading = false; // Redirect to file browser page

                  _this.currentPage = 'page-files'; // Get protected files

                  _this.getFiles();
                })["catch"](function (error) {
                  if (error.response.status == 401) {
                    _this.$refs.authenticateProtected.setErrors({
                      'Password': [error.response.data.message]
                    });
                  } // End loading


                  _this.isLoading = false;
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getFiles: function getFiles() {
      // Show folder
      if (this.sharedDetail.type === 'folder') {
        var homeDirectory = {
          unique_id: this.sharedDetail.item_id,
          name: this.$t('locations.home'),
          location: 'public'
        }; // Load folder

        this.$store.dispatch('browseShared', [{
          folder: homeDirectory,
          back: false,
          init: true
        }]);
      } // Get file


      if (this.sharedDetail.type === 'file') {
        this.$store.dispatch('getSingleFile');
      }
    },
    download: function download() {// this.$downloadFile(this.sharedFile.file_url, this.sharedFile.name + '.' + this.sharedFile.mimetype)
    },
    fileViewClick: function fileViewClick() {
      _bus__WEBPACK_IMPORTED_MODULE_17__["events"].$emit('contextMenu:hide');
    },
    contextMenu: function contextMenu(event, item) {
      _bus__WEBPACK_IMPORTED_MODULE_17__["events"].$emit('contextMenu:show', event, item);
    }
  },
  created: function created() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_18___default.a.get('/api/shared/' + this.$route.params.token).then(function (response) {
      // Commit shared item options
      _this2.$store.commit('SET_SHARED_DETAIL', response.data.data.attributes);

      _this2.$store.commit('SET_PERMISSION', response.data.data.attributes.permission); // Hide page spinner


      _this2.isPageLoading = false; // Show password page

      if (response.data.data.attributes["protected"]) {
        _this2.currentPage = 'page-password';
      } else {
        _this2.currentPage = 'page-files';

        _this2.getFiles();
      }
    })["catch"](function (error) {
      if (error.response.status == 404) {
        _this2.$router.push({
          name: 'NotFoundShared'
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/DesktopToolbar */ "./resources/js/components/FilesView/DesktopToolbar.vue");
/* harmony import */ var _components_FilesView_FileFullPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/FileFullPreview */ "./resources/js/components/FilesView/FileFullPreview.vue");
/* harmony import */ var _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilesView/FileItemGrid */ "./resources/js/components/FilesView/FileItemGrid.vue");
/* harmony import */ var _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FilesView/FileBrowser */ "./resources/js/components/FilesView/FileBrowser.vue");
/* harmony import */ var _components_FilesView_ContextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FilesView/ContextMenu */ "./resources/js/components/FilesView/ContextMenu.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_FilesView_MobileMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/FilesView/MobileMenu */ "./resources/js/components/FilesView/MobileMenu.vue");
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var _components_Others_MoveItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Others/MoveItem */ "./resources/js/components/Others/MoveItem.vue");
/* harmony import */ var _components_Others_Vignette__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/Others/Vignette */ "./resources/js/components/Others/Vignette.vue");
/* harmony import */ var _components_FilesView_Alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/FilesView/Alert */ "./resources/js/components/FilesView/Alert.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
/* harmony import */ var _components_FilesView_FileReviewNavigationPanel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/FilesView/FileReviewNavigationPanel */ "./resources/js/components/FilesView/FileReviewNavigationPanel.vue");
/* harmony import */ var _components_FilesView_FilePreviewNavigationPanel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/FilesView/FilePreviewNavigationPanel */ "./resources/js/components/FilesView/FilePreviewNavigationPanel.vue");


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





















/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SharedPage',
  components: {
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    FileFullPreview: _components_FilesView_FileFullPreview__WEBPACK_IMPORTED_MODULE_3__["default"],
    DesktopToolbar: _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_2__["default"],
    FileItemGrid: _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_4__["default"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_9__["default"],
    FileBrowser: _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_5__["default"],
    ContextMenu: _components_FilesView_ContextMenu__WEBPACK_IMPORTED_MODULE_6__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_10__["default"],
    MobileMenu: _components_FilesView_MobileMenu__WEBPACK_IMPORTED_MODULE_8__["default"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"],
    MoveItem: _components_Others_MoveItem__WEBPACK_IMPORTED_MODULE_12__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_15__["required"],
    Vignette: _components_Others_Vignette__WEBPACK_IMPORTED_MODULE_13__["default"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_11__["default"],
    Alert: _components_FilesView_Alert__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_16__["mapGetters"])(['config', 'sharedDetail', 'sharedFile'])),
  data: function data() {
    return {
      checkedAccount: undefined,
      password: '',
      isLoading: false,
      isPageLoading: true,
      currentPage: undefined
    };
  },
  methods: {
    authenticateProtected: function authenticateProtected() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.authenticateProtected.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                // Start loading
                _this.isLoading = true; // Send request to get verify account

                axios__WEBPACK_IMPORTED_MODULE_18___default.a.post('/api/shared/authenticate/' + _this.$route.params.token, {
                  password: _this.password
                }).then(function () {
                  // End loading
                  _this.isLoading = false; // Redirect to file browser page

                  _this.currentPage = 'page-files'; // Get protected files

                  _this.getFiles();
                })["catch"](function (error) {
                  if (error.response.status == 401) {
                    _this.$refs.authenticateProtected.setErrors({
                      'Password': [error.response.data.message]
                    });
                  } // End loading


                  _this.isLoading = false;
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getFiles: function getFiles() {
      // Show folder
      if (this.sharedDetail.type === 'folder') {
        var homeDirectory = {
          unique_id: this.sharedDetail.item_id,
          name: this.$t('locations.home'),
          location: 'public'
        }; // Load folder

        this.$store.dispatch('browseShared', [{
          folder: homeDirectory,
          back: false,
          init: true
        }]);
      } // Get file


      if (this.sharedDetail.type === 'file') {
        this.$store.dispatch('getSingleFile');
      }
    },
    download: function download() {// this.$downloadFile(this.sharedFile.file_url, this.sharedFile.name + '.' + this.sharedFile.mimetype)
    },
    fileViewClick: function fileViewClick() {
      _bus__WEBPACK_IMPORTED_MODULE_17__["events"].$emit('contextMenu:hide');
    },
    contextMenu: function contextMenu(event, item) {
      _bus__WEBPACK_IMPORTED_MODULE_17__["events"].$emit('contextMenu:show', event, item);
    }
  },
  beforeCreate: function beforeCreate() {
    if (this.$route.query.user_email) {
      //if(store.state.authorized === false)
      this.$router.push('/sign-in?user_email=' + this.$route.query.user_email);
    } else {
      var auth = localStorage.getItem('auth_check');

      if (auth === "false" || auth === null || auth === undefined) {
        this.$router.push({
          name: 'SignIn'
        });
      }
    }
  },
  created: function created() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_18___default.a.get('/api/shared/' + this.$route.params.token).then(function (response) {
      // Commit shared item options
      _this2.$store.commit('SET_SHARED_DETAIL', response.data.data.attributes);

      _this2.$store.commit('SET_PERMISSION', response.data.data.attributes.permission); // Hide page spinner


      _this2.isPageLoading = false; // Show password page

      if (response.data.data.attributes["protected"]) {
        _this2.currentPage = 'page-password';
      } else {
        _this2.currentPage = 'page-files';

        _this2.getFiles();
      }
    })["catch"](function (error) {
      if (error.response.status == 404) {
        _this2.$router.push({
          name: 'NotFoundShared'
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_resize_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-resize-text */ "./node_modules/vue-resize-text/dist/vue-resize-text.common.js");
/* harmony import */ var vue_resize_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_resize_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/DesktopToolbar */ "./resources/js/components/FilesView/DesktopToolbar.vue");
/* harmony import */ var _components_FilesView_FileFullPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilesView/FileFullPreview */ "./resources/js/components/FilesView/FileFullPreview.vue");
/* harmony import */ var _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FilesView/FileItemGrid */ "./resources/js/components/FilesView/FileItemGrid.vue");
/* harmony import */ var _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FilesView/FileBrowser */ "./resources/js/components/FilesView/FileBrowser.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var _components_Others_MoveItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Others/MoveItem */ "./resources/js/components/Others/MoveItem.vue");
/* harmony import */ var _components_Others_Vignette__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/Others/Vignette */ "./resources/js/components/Others/Vignette.vue");
/* harmony import */ var _components_FilesView_Alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/FilesView/Alert */ "./resources/js/components/FilesView/Alert.vue");
/* harmony import */ var _components_Others_Forms_CopyInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Others/Forms/CopyInput */ "./resources/js/components/Others/Forms/CopyInput.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var vue_core_video_player__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! vue-core-video-player */ "./node_modules/vue-core-video-player/dist/vue-core-video-player.common.js");
/* harmony import */ var vue_core_video_player__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(vue_core_video_player__WEBPACK_IMPORTED_MODULE_20__);


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





 // import ContextMenu from '@/components/FilesView/ContextMenu'

 // import MobileMenu from '@/components/FilesView/MobileMenu'














vue__WEBPACK_IMPORTED_MODULE_19___default.a.use(vue_core_video_player__WEBPACK_IMPORTED_MODULE_20___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    ResizeText: vue_resize_text__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  name: "SharedPresentationPage",
  components: {
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"],
    FileFullPreview: _components_FilesView_FileFullPreview__WEBPACK_IMPORTED_MODULE_4__["default"],
    DesktopToolbar: _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_3__["default"],
    FileItemGrid: _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_5__["default"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_8__["default"],
    FileBrowser: _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_6__["default"],
    // ContextMenu,
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_9__["default"],
    // MobileMenu,
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"],
    MoveItem: _components_Others_MoveItem__WEBPACK_IMPORTED_MODULE_11__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_15__["required"],
    Vignette: _components_Others_Vignette__WEBPACK_IMPORTED_MODULE_12__["default"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"],
    Alert: _components_FilesView_Alert__WEBPACK_IMPORTED_MODULE_13__["default"],
    CopyInput: _components_Others_Forms_CopyInput__WEBPACK_IMPORTED_MODULE_14__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_16__["mapGetters"])(["config", "sharedDetail", "sharedFile", "isPageLoading"])), {}, {
    currentUrl: function currentUrl() {
      return this.$root;
    },
    cover: function cover() {
      return this.sharedFile.thumbnail;
    },
    getConvertedUrl: function getConvertedUrl() {
      // if(this.$route.fullPath)
      var url = this.sharedFile.file_url.split("/public");
      return url[0];
    },
    igCardStyle: function igCardStyle() {
      return {
        width: "".concat(this.initialWidth, "%"),
        height: "".concat(this.matchedWidth, "px")
      };
    }
  }),
  data: function data() {
    return {
      checkedAccount: undefined,
      password: "",
      isLoading: false,
      // isPageLoading: true,
      currentPage: undefined,
      initialWidth: 100,
      matchedWidth: null
    };
  },
  methods: {
    matchWidth: function matchWidth() {
      this.matchedWidth = this.$refs.box.offsetWidth;
    },
    authenticateProtected: function authenticateProtected() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.authenticateProtected.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                // Start loading
                _this.isLoading = true; // Send request to get verify account

                axios__WEBPACK_IMPORTED_MODULE_18___default.a.post("/api/shared/authenticate/" + _this.$route.params.token, {
                  password: _this.password
                }).then(function () {
                  // End loading
                  _this.isLoading = false; // Redirect to file browser page

                  _this.currentPage = "page-files"; // Get protected files

                  _this.getFiles();
                })["catch"](function (error) {
                  if (error.response.status == 401) {
                    _this.$refs.authenticateProtected.setErrors({
                      Password: [error.response.data.message]
                    });
                  } // End loading


                  _this.isLoading = false;
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getFiles: function getFiles() {
      // Show folder
      if (this.sharedDetail.type === "folder") {
        var homeDirectory = {
          unique_id: this.sharedDetail.item_id,
          name: this.$t("locations.home"),
          location: "public"
        }; // Load folder

        this.$store.dispatch("browseShared", [{
          folder: homeDirectory,
          back: false,
          init: true
        }]);
      } // Get file


      if (this.sharedDetail.type === "file") {
        // this.$store.dispatch('getSingleFile')
        this.$store.dispatch("getSingleFileCustom");
      }
    } // download() {
    //     this.$downloadFile(this.sharedFile.file_url, this.sharedFile.name + '.' + this.sharedFile.mimetype)
    // },
    // fileViewClick() {
    //     events.$emit('contextMenu:hide')
    // },
    // contextMenu(event, item) {
    //     events.$emit('contextMenu:show', event, item)
    // },

  },
  created: function created() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_18___default.a.get("/api/shared/" + this.$route.params.token).then(function (response) {
      // Commit shared item options
      _this2.$store.commit("SET_SHARED_DETAIL", response.data.data.attributes);

      _this2.$store.commit("SET_PERMISSION", response.data.data.attributes.permission); // Hide page spinner


      _this2.isLoading = false; // Show password page

      if (response.data.data.attributes["protected"]) {
        _this2.currentPage = "page-password";
      } else {
        _this2.currentPage = "page-files";

        _this2.getFiles();
      }
    })["catch"](function (error) {
      if (error.response.status == 404) {
        _this2.$router.push({
          name: "NotFoundShared"
        });
      }
    });
  },
  updated: function updated() {
    // $('.menu-bar').remove()
    $(".vue-core-video-player-control.timespan").css("width", "250");
    $("#image").css("height", $(window).height() - 200 + "px");
    $("#application-wrapper").css("margin", "auto");
    $("#application-wrapper").css("width", "80%");
    $("#application-wrapper").css("padding", "10px");
    application - wrapper;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form.inline-form[data-v-437e171d] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-437e171d] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-437e171d] {\n  position: absolute;\n  left: 0;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-437e171d] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-437e171d] {\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n  justify-content: center;\n}\n.form.block-form .block-wrapper[data-v-437e171d]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-437e171d] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-437e171d] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-437e171d] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-437e171d] {\n  width: 100%;\n}\ntextarea[data-v-437e171d],\ninput[type=\"password\"][data-v-437e171d],\ninput[type=\"text\"][data-v-437e171d],\ninput[type=\"email\"][data-v-437e171d] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-437e171d],\ninput[type=\"password\"].is-error[data-v-437e171d],\ninput[type=\"text\"].is-error[data-v-437e171d],\ninput[type=\"email\"].is-error[data-v-437e171d] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-437e171d]::-moz-placeholder, input[type=\"password\"][data-v-437e171d]::-moz-placeholder, input[type=\"text\"][data-v-437e171d]::-moz-placeholder, input[type=\"email\"][data-v-437e171d]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-437e171d]:-ms-input-placeholder, input[type=\"password\"][data-v-437e171d]:-ms-input-placeholder, input[type=\"text\"][data-v-437e171d]:-ms-input-placeholder, input[type=\"email\"][data-v-437e171d]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-437e171d]::placeholder,\ninput[type=\"password\"][data-v-437e171d]::placeholder,\ninput[type=\"text\"][data-v-437e171d]::placeholder,\ninput[type=\"email\"][data-v-437e171d]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-437e171d]:focus,\ninput[type=\"password\"][data-v-437e171d]:focus,\ninput[type=\"text\"][data-v-437e171d]:focus,\ninput[type=\"email\"][data-v-437e171d]:focus {\n  border-color: #00bc7e;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-437e171d],\ninput[type=\"password\"][disabled][data-v-437e171d],\ninput[type=\"text\"][disabled][data-v-437e171d],\ninput[type=\"email\"][disabled][data-v-437e171d] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-437e171d] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-437e171d], .additional-link a[data-v-437e171d] {\n  color: #00bc7e;\n  cursor: pointer;\n}\n.additional-link b[data-v-437e171d]:hover, .additional-link a[data-v-437e171d]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-437e171d] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-437e171d], .form textarea[data-v-437e171d] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-437e171d] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-437e171d] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-437e171d] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-437e171d] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-437e171d] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-437e171d] {\n    padding: 14px 32px;\n}\ntextarea[data-v-437e171d],\n  input[type=\"password\"][data-v-437e171d],\n  input[type=\"text\"][data-v-437e171d],\n  input[type=\"email\"][data-v-437e171d] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-437e171d] {\n    color: #bec6cf;\n}\ntextarea[data-v-437e171d],\n  input[type=\"password\"][data-v-437e171d],\n  input[type=\"text\"][data-v-437e171d],\n  input[type=\"email\"][data-v-437e171d] {\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-437e171d]::-moz-placeholder, input[type=\"password\"][data-v-437e171d]::-moz-placeholder, input[type=\"text\"][data-v-437e171d]::-moz-placeholder, input[type=\"email\"][data-v-437e171d]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-437e171d]:-ms-input-placeholder, input[type=\"password\"][data-v-437e171d]:-ms-input-placeholder, input[type=\"text\"][data-v-437e171d]:-ms-input-placeholder, input[type=\"email\"][data-v-437e171d]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-437e171d]::placeholder,\n  input[type=\"password\"][data-v-437e171d]::placeholder,\n  input[type=\"text\"][data-v-437e171d]::placeholder,\n  input[type=\"email\"][data-v-437e171d]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-437e171d],\n  input[type=\"password\"][disabled][data-v-437e171d],\n  input[type=\"text\"][disabled][data-v-437e171d],\n  input[type=\"email\"][disabled][data-v-437e171d] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-437e171d] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-437e171d] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-437e171d] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-437e171d] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-437e171d] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-437e171d] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-437e171d] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-437e171d] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-437e171d] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-437e171d] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-437e171d] {\n    width: 100%;\n}\n.auth-form h1[data-v-437e171d] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-437e171d] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-437e171d] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-437e171d] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-437e171d] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-437e171d] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-437e171d], .auth-form h2[data-v-437e171d], .auth-form .additional-link[data-v-437e171d] {\n    color: #bec6cf;\n}\n}\n#files-view[data-v-437e171d] {\n  font-family: 'Nunito', sans-serif;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 320px;\n  overflow-x: hidden;\n  padding-left: 15px;\n  padding-right: 15px;\n  overflow-y: hidden;\n}\n#shared[data-v-437e171d] {\n  height: 100%;\n}\n#password-view[data-v-437e171d] {\n  display: grid;\n  height: inherit;\n}\n#password-view .center[data-v-437e171d] {\n  margin: auto;\n}\n#single-file[data-v-437e171d] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  top: 0;\n  display: grid;\n  height: 100%;\n}\n#single-file .single-file-wrapper[data-v-437e171d] {\n  margin: auto;\n  text-align: center;\n}\n#single-file .single-file-wrapper .download-button[data-v-437e171d] {\n  margin-top: 15px;\n  margin-left: auto;\n  margin-right: auto;\n}\n#single-file[data-v-437e171d] .file-wrapper .file-item {\n  width: 290px;\n}\n#single-file[data-v-437e171d] .file-wrapper .file-item:hover, #single-file[data-v-437e171d] .file-wrapper .file-item.is-clicked {\n  background: transparent;\n}\n#single-file[data-v-437e171d] .file-wrapper .file-item .item-shared {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form.inline-form[data-v-747b9ae2] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-747b9ae2] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-747b9ae2] {\n  position: absolute;\n  left: 0;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-747b9ae2] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-747b9ae2] {\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n  justify-content: center;\n}\n.form.block-form .block-wrapper[data-v-747b9ae2]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-747b9ae2] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-747b9ae2] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-747b9ae2] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-747b9ae2] {\n  width: 100%;\n}\ntextarea[data-v-747b9ae2],\ninput[type=\"password\"][data-v-747b9ae2],\ninput[type=\"text\"][data-v-747b9ae2],\ninput[type=\"email\"][data-v-747b9ae2] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-747b9ae2],\ninput[type=\"password\"].is-error[data-v-747b9ae2],\ninput[type=\"text\"].is-error[data-v-747b9ae2],\ninput[type=\"email\"].is-error[data-v-747b9ae2] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-747b9ae2]::-moz-placeholder, input[type=\"password\"][data-v-747b9ae2]::-moz-placeholder, input[type=\"text\"][data-v-747b9ae2]::-moz-placeholder, input[type=\"email\"][data-v-747b9ae2]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-747b9ae2]:-ms-input-placeholder, input[type=\"password\"][data-v-747b9ae2]:-ms-input-placeholder, input[type=\"text\"][data-v-747b9ae2]:-ms-input-placeholder, input[type=\"email\"][data-v-747b9ae2]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-747b9ae2]::placeholder,\ninput[type=\"password\"][data-v-747b9ae2]::placeholder,\ninput[type=\"text\"][data-v-747b9ae2]::placeholder,\ninput[type=\"email\"][data-v-747b9ae2]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-747b9ae2]:focus,\ninput[type=\"password\"][data-v-747b9ae2]:focus,\ninput[type=\"text\"][data-v-747b9ae2]:focus,\ninput[type=\"email\"][data-v-747b9ae2]:focus {\n  border-color: #00bc7e;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-747b9ae2],\ninput[type=\"password\"][disabled][data-v-747b9ae2],\ninput[type=\"text\"][disabled][data-v-747b9ae2],\ninput[type=\"email\"][disabled][data-v-747b9ae2] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-747b9ae2] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-747b9ae2], .additional-link a[data-v-747b9ae2] {\n  color: #00bc7e;\n  cursor: pointer;\n}\n.additional-link b[data-v-747b9ae2]:hover, .additional-link a[data-v-747b9ae2]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-747b9ae2] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-747b9ae2], .form textarea[data-v-747b9ae2] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-747b9ae2] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-747b9ae2] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-747b9ae2] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-747b9ae2] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-747b9ae2] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-747b9ae2] {\n    padding: 14px 32px;\n}\ntextarea[data-v-747b9ae2],\n  input[type=\"password\"][data-v-747b9ae2],\n  input[type=\"text\"][data-v-747b9ae2],\n  input[type=\"email\"][data-v-747b9ae2] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-747b9ae2] {\n    color: #bec6cf;\n}\ntextarea[data-v-747b9ae2],\n  input[type=\"password\"][data-v-747b9ae2],\n  input[type=\"text\"][data-v-747b9ae2],\n  input[type=\"email\"][data-v-747b9ae2] {\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-747b9ae2]::-moz-placeholder, input[type=\"password\"][data-v-747b9ae2]::-moz-placeholder, input[type=\"text\"][data-v-747b9ae2]::-moz-placeholder, input[type=\"email\"][data-v-747b9ae2]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-747b9ae2]:-ms-input-placeholder, input[type=\"password\"][data-v-747b9ae2]:-ms-input-placeholder, input[type=\"text\"][data-v-747b9ae2]:-ms-input-placeholder, input[type=\"email\"][data-v-747b9ae2]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-747b9ae2]::placeholder,\n  input[type=\"password\"][data-v-747b9ae2]::placeholder,\n  input[type=\"text\"][data-v-747b9ae2]::placeholder,\n  input[type=\"email\"][data-v-747b9ae2]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-747b9ae2],\n  input[type=\"password\"][disabled][data-v-747b9ae2],\n  input[type=\"text\"][disabled][data-v-747b9ae2],\n  input[type=\"email\"][disabled][data-v-747b9ae2] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-747b9ae2] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-747b9ae2] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-747b9ae2] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-747b9ae2] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-747b9ae2] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-747b9ae2] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-747b9ae2] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-747b9ae2] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-747b9ae2] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-747b9ae2] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-747b9ae2] {\n    width: 100%;\n}\n.auth-form h1[data-v-747b9ae2] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-747b9ae2] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-747b9ae2] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-747b9ae2] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-747b9ae2] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-747b9ae2] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-747b9ae2], .auth-form h2[data-v-747b9ae2], .auth-form .additional-link[data-v-747b9ae2] {\n    color: #bec6cf;\n}\n}\n#files-view[data-v-747b9ae2] {\n  font-family: 'Nunito', sans-serif;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 320px;\n  overflow-x: hidden;\n  padding-left: 15px;\n  padding-right: 15px;\n  overflow-y: hidden;\n}\n#shared[data-v-747b9ae2] {\n  height: 100%;\n}\n#password-view[data-v-747b9ae2] {\n  display: grid;\n  height: inherit;\n}\n#password-view .center[data-v-747b9ae2] {\n  margin: auto;\n}\n#single-file[data-v-747b9ae2] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  top: 0;\n  display: grid;\n  height: 100%;\n}\n#single-file .single-file-wrapper[data-v-747b9ae2] {\n  margin: auto;\n  text-align: center;\n}\n#single-file .single-file-wrapper .download-button[data-v-747b9ae2] {\n  margin-top: 15px;\n  margin-left: auto;\n  margin-right: auto;\n}\n#single-file[data-v-747b9ae2] .file-wrapper .file-item {\n  width: 290px;\n}\n#single-file[data-v-747b9ae2] .file-wrapper .file-item:hover, #single-file[data-v-747b9ae2] .file-wrapper .file-item.is-clicked {\n  background: transparent;\n}\n#single-file[data-v-747b9ae2] .file-wrapper .file-item .item-shared {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form.inline-form[data-v-0060806e] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-0060806e] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-0060806e] {\n  position: absolute;\n  left: 0;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-0060806e] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-0060806e] {\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n  justify-content: center;\n}\n.form.block-form .block-wrapper[data-v-0060806e]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-0060806e] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-0060806e] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-0060806e] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-0060806e] {\n  width: 100%;\n}\ntextarea[data-v-0060806e],\ninput[type=\"password\"][data-v-0060806e],\ninput[type=\"text\"][data-v-0060806e],\ninput[type=\"email\"][data-v-0060806e] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-0060806e],\ninput[type=\"password\"].is-error[data-v-0060806e],\ninput[type=\"text\"].is-error[data-v-0060806e],\ninput[type=\"email\"].is-error[data-v-0060806e] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-0060806e]::-moz-placeholder, input[type=\"password\"][data-v-0060806e]::-moz-placeholder, input[type=\"text\"][data-v-0060806e]::-moz-placeholder, input[type=\"email\"][data-v-0060806e]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-0060806e]:-ms-input-placeholder, input[type=\"password\"][data-v-0060806e]:-ms-input-placeholder, input[type=\"text\"][data-v-0060806e]:-ms-input-placeholder, input[type=\"email\"][data-v-0060806e]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-0060806e]::placeholder,\ninput[type=\"password\"][data-v-0060806e]::placeholder,\ninput[type=\"text\"][data-v-0060806e]::placeholder,\ninput[type=\"email\"][data-v-0060806e]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-0060806e]:focus,\ninput[type=\"password\"][data-v-0060806e]:focus,\ninput[type=\"text\"][data-v-0060806e]:focus,\ninput[type=\"email\"][data-v-0060806e]:focus {\n  border-color: #00bc7e;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-0060806e],\ninput[type=\"password\"][disabled][data-v-0060806e],\ninput[type=\"text\"][disabled][data-v-0060806e],\ninput[type=\"email\"][disabled][data-v-0060806e] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-0060806e] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-0060806e], .additional-link a[data-v-0060806e] {\n  color: #00bc7e;\n  cursor: pointer;\n}\n.additional-link b[data-v-0060806e]:hover, .additional-link a[data-v-0060806e]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-0060806e] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-0060806e], .form textarea[data-v-0060806e] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-0060806e] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-0060806e] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-0060806e] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-0060806e] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-0060806e] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-0060806e] {\n    padding: 14px 32px;\n}\ntextarea[data-v-0060806e],\n  input[type=\"password\"][data-v-0060806e],\n  input[type=\"text\"][data-v-0060806e],\n  input[type=\"email\"][data-v-0060806e] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-0060806e] {\n    color: #bec6cf;\n}\ntextarea[data-v-0060806e],\n  input[type=\"password\"][data-v-0060806e],\n  input[type=\"text\"][data-v-0060806e],\n  input[type=\"email\"][data-v-0060806e] {\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-0060806e]::-moz-placeholder, input[type=\"password\"][data-v-0060806e]::-moz-placeholder, input[type=\"text\"][data-v-0060806e]::-moz-placeholder, input[type=\"email\"][data-v-0060806e]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0060806e]:-ms-input-placeholder, input[type=\"password\"][data-v-0060806e]:-ms-input-placeholder, input[type=\"text\"][data-v-0060806e]:-ms-input-placeholder, input[type=\"email\"][data-v-0060806e]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0060806e]::placeholder,\n  input[type=\"password\"][data-v-0060806e]::placeholder,\n  input[type=\"text\"][data-v-0060806e]::placeholder,\n  input[type=\"email\"][data-v-0060806e]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-0060806e],\n  input[type=\"password\"][disabled][data-v-0060806e],\n  input[type=\"text\"][disabled][data-v-0060806e],\n  input[type=\"email\"][disabled][data-v-0060806e] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-0060806e] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-0060806e] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-0060806e] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-0060806e] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-0060806e] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-0060806e] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-0060806e] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-0060806e] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-0060806e] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-0060806e] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-0060806e] {\n    width: 100%;\n}\n.auth-form h1[data-v-0060806e] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-0060806e] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-0060806e] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-0060806e] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-0060806e] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-0060806e] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-0060806e], .auth-form h2[data-v-0060806e], .auth-form .additional-link[data-v-0060806e] {\n    color: #bec6cf;\n}\n}\n#files-view[data-v-0060806e] {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 320px;\n  overflow-x: hidden;\n  padding-left: 15px;\n  padding-right: 15px;\n  overflow-y: hidden;\n}\n#shared[data-v-0060806e] {\n  height: 100%;\n}\n#password-view[data-v-0060806e] {\n  display: grid;\n  height: inherit;\n}\n#password-view .center[data-v-0060806e] {\n  margin: auto;\n}\n#single-file[data-v-0060806e] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  top: 0;\n  display: grid;\n  height: 100%;\n}\n#single-file .single-file-wrapper[data-v-0060806e] {\n  margin: auto;\n  text-align: center;\n}\n#single-file .single-file-wrapper .download-button[data-v-0060806e] {\n  margin-top: 15px;\n  margin-left: auto;\n  margin-right: auto;\n}\n#single-file[data-v-0060806e] .file-wrapper .file-item {\n  width: 290px;\n}\n#single-file[data-v-0060806e] .file-wrapper .file-item:hover, #single-file[data-v-0060806e] .file-wrapper .file-item.is-clicked {\n  background: transparent;\n}\n#single-file[data-v-0060806e] .file-wrapper .file-item .item-shared {\n  display: none;\n}\n@media screen and (max-width: 1300px) and (max-width: 1110px) {\n.video[data-v-0060806e] {\n    width: 800px !important;\n}\n}\n@media screen and (max-width: 700px) {\n.video[data-v-0060806e] {\n    width: 450px !important;\n    border: 450px;\n}\n}\n@media screen and (max-width: 1100px) and (max-width: 900px) {\n.video[data-v-0060806e] {\n    width: 800px !important;\n    border: 450px;\n}\n}\n@media screen and (max-width: 700px) {\n#videoElement[data-v-0060806e] {\n    max-width: 450px !important;\n}\n}\n@media screen and (max-width: 1100px) and (max-width: 900px) {\n.paintable[data-v-0060806e] {\n    max-width: 800px !important;\n}\n}\n@media screen and (max-width: 700px) {\n.paintable[data-v-0060806e] {\n    max-width: 600px !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=template&id=437e171d&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=template&id=437e171d&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "shared" } },
    [
      _c("FileFullPreview"),
      _vm._v(" "),
      _vm.isPageLoading ? _c("Spinner") : _vm._e(),
      _vm._v(" "),
      _c("MoveItem"),
      _vm._v(" "),
      _c("MobileMenu"),
      _vm._v(" "),
      _c("Alert"),
      _vm._v(" "),
      _c("Vignette"),
      _vm._v(" "),
      _vm.currentPage === "page-password"
        ? _c(
            "div",
            { attrs: { id: "password-view" } },
            [
              _c(
                "AuthContent",
                {
                  staticClass: "center",
                  attrs: { name: "password", visible: true }
                },
                [
                  _vm.config.app_logo
                    ? _c("img", {
                        staticClass: "logo",
                        attrs: {
                          src: _vm.$getImage(_vm.config.app_logo),
                          alt: _vm.config.app_name
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.config.app_logo
                    ? _c("b", { staticClass: "auth-logo-text" }, [
                        _vm._v(_vm._s(_vm.config.app_name))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("h1", [_vm._v(_vm._s(_vm.$t("page_shared.title")))]),
                  _vm._v(" "),
                  _c("h2", [_vm._v(_vm._s(_vm.$t("page_shared.subtitle")))]),
                  _vm._v(" "),
                  _c("ValidationObserver", {
                    ref: "authenticateProtected",
                    staticClass: "form inline-form",
                    attrs: { tag: "form" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.authenticateProtected($event)
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var invalid = ref.invalid
                            return [
                              _c("ValidationProvider", {
                                staticClass: "input-wrapper",
                                attrs: {
                                  tag: "div",
                                  mode: "passive",
                                  name: "Password",
                                  rules: "required"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var errors = ref.errors
                                        return [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.password,
                                                expression: "password"
                                              }
                                            ],
                                            class: { "is-error": errors[0] },
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "page_shared.placeholder_pass"
                                              ),
                                              type: "password"
                                            },
                                            domProps: { value: _vm.password },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.password =
                                                  $event.target.value
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          errors[0]
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass: "error-message"
                                                },
                                                [_vm._v(_vm._s(errors[0]))]
                                              )
                                            : _vm._e()
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              }),
                              _vm._v(" "),
                              _c("AuthButton", {
                                attrs: {
                                  icon: "chevron-right",
                                  text: _vm.$t("page_shared.submit"),
                                  loading: _vm.isLoading,
                                  disabled: _vm.isLoading
                                }
                              })
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      1097245153
                    )
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.currentPage === "page-files"
        ? _c("div", { attrs: { id: "files-view" } }, [
            _vm.sharedDetail.type === "file"
              ? _c("div", { attrs: { id: "single-file" } }, [
                  _c(
                    "div",
                    { staticClass: "single-file-wrapper" },
                    [
                      _vm.sharedFile
                        ? _c("FileItemGrid", {
                            attrs: {
                              data: _vm.sharedFile,
                              "context-menu": false
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "ButtonBase",
                        {
                          staticClass: "download-button",
                          attrs: { "button-style": "theme" },
                          nativeOn: {
                            click: function($event) {
                              return _vm.download($event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("page_shared.download_file")) +
                              "\n                "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.sharedDetail.type === "folder"
              ? _c(
                  "div",
                  {
                    on: {
                      "!contextmenu": function($event) {
                        $event.preventDefault()
                        return _vm.contextMenu($event, undefined)
                      },
                      click: _vm.fileViewClick
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
              : _vm._e()
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "shared" } },
    [
      _c("FileFullPreview"),
      _vm._v(" "),
      _vm.isPageLoading ? _c("Spinner") : _vm._e(),
      _vm._v(" "),
      _c("MoveItem"),
      _vm._v(" "),
      _c("MobileMenu"),
      _vm._v(" "),
      _c("Alert"),
      _vm._v(" "),
      _c("Vignette"),
      _vm._v(" "),
      _vm.currentPage === "page-password"
        ? _c(
            "div",
            { attrs: { id: "password-view" } },
            [
              _c(
                "AuthContent",
                {
                  staticClass: "center",
                  attrs: { name: "password", visible: true }
                },
                [
                  _vm.config.app_logo
                    ? _c("img", {
                        staticClass: "logo",
                        attrs: {
                          src: _vm.$getImage(_vm.config.app_logo),
                          alt: _vm.config.app_name
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.config.app_logo
                    ? _c("b", { staticClass: "auth-logo-text" }, [
                        _vm._v(_vm._s(_vm.config.app_name))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("h1", [_vm._v(_vm._s(_vm.$t("page_shared.title")))]),
                  _vm._v(" "),
                  _c("h2", [_vm._v(_vm._s(_vm.$t("page_shared.subtitle")))]),
                  _vm._v(" "),
                  _c("ValidationObserver", {
                    ref: "authenticateProtected",
                    staticClass: "form inline-form",
                    attrs: { tag: "form" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.authenticateProtected($event)
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var invalid = ref.invalid
                            return [
                              _c("ValidationProvider", {
                                staticClass: "input-wrapper",
                                attrs: {
                                  tag: "div",
                                  mode: "passive",
                                  name: "Password",
                                  rules: "required"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var errors = ref.errors
                                        return [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.password,
                                                expression: "password"
                                              }
                                            ],
                                            class: { "is-error": errors[0] },
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "page_shared.placeholder_pass"
                                              ),
                                              type: "password"
                                            },
                                            domProps: { value: _vm.password },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.password =
                                                  $event.target.value
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          errors[0]
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass: "error-message"
                                                },
                                                [_vm._v(_vm._s(errors[0]))]
                                              )
                                            : _vm._e()
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              }),
                              _vm._v(" "),
                              _c("AuthButton", {
                                attrs: {
                                  icon: "chevron-right",
                                  text: _vm.$t("page_shared.submit"),
                                  loading: _vm.isLoading,
                                  disabled: _vm.isLoading
                                }
                              })
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      1097245153
                    )
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.currentPage === "page-files"
        ? _c("div", { attrs: { id: "files-view" } }, [
            _vm.sharedDetail.type === "file"
              ? _c("div", { attrs: { id: "single-file" } }, [
                  _c(
                    "div",
                    { staticClass: "single-file-wrapper" },
                    [
                      _vm.sharedFile
                        ? _c("FileItemGrid", {
                            attrs: {
                              data: _vm.sharedFile,
                              "context-menu": false
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "ButtonBase",
                        {
                          staticClass: "download-button",
                          attrs: { "button-style": "theme" },
                          nativeOn: {
                            click: function($event) {
                              return _vm.download($event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.$t("page_shared.download_file")) +
                              "\n                    "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.sharedDetail.type === "folder"
              ? _c(
                  "div",
                  {
                    on: {
                      "!contextmenu": function($event) {
                        $event.preventDefault()
                        return _vm.contextMenu($event, undefined)
                      },
                      click: _vm.fileViewClick
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
              : _vm._e()
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=template&id=0060806e&scoped=true&oncontextmenu=return%20false%3B&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=template&id=0060806e&scoped=true&oncontextmenu=return%20false%3B& ***!
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
    { attrs: { id: "shared" } },
    [
      _c("FileFullPreview"),
      _vm._v(" "),
      _vm.isPageLoading ? _c("Spinner") : _vm._e(),
      _vm._v(" "),
      _c("MoveItem"),
      _vm._v(" "),
      _c("Alert"),
      _vm._v(" "),
      _c("Vignette"),
      _vm._v(" "),
      _vm.currentPage === "page-password"
        ? _c(
            "div",
            { attrs: { id: "password-view" } },
            [
              _c(
                "AuthContent",
                {
                  staticClass: "center",
                  attrs: { name: "password", visible: true }
                },
                [
                  _vm.config.app_logo
                    ? _c("img", {
                        staticClass: "logo",
                        attrs: {
                          src: _vm.$getImage(_vm.config.app_logo),
                          alt: _vm.config.app_name
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.config.app_logo
                    ? _c("b", { staticClass: "auth-logo-text" }, [
                        _vm._v(_vm._s(_vm.config.app_name))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("h1", [_vm._v(_vm._s(_vm.$t("page_shared.title")))]),
                  _vm._v(" "),
                  _c("h2", [_vm._v(_vm._s(_vm.$t("page_shared.subtitle")))]),
                  _vm._v(" "),
                  _c("ValidationObserver", {
                    ref: "authenticateProtected",
                    staticClass: "form inline-form",
                    attrs: { tag: "form" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.authenticateProtected($event)
                      }
                    },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var invalid = ref.invalid
                            return [
                              _c("ValidationProvider", {
                                staticClass: "input-wrapper",
                                attrs: {
                                  tag: "div",
                                  mode: "passive",
                                  name: "Password",
                                  rules: "required"
                                },
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var errors = ref.errors
                                        return [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.password,
                                                expression: "password"
                                              }
                                            ],
                                            class: { "is-error": errors[0] },
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "page_shared.placeholder_pass"
                                              ),
                                              type: "password"
                                            },
                                            domProps: { value: _vm.password },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.password =
                                                  $event.target.value
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          errors[0]
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass: "error-message"
                                                },
                                                [_vm._v(_vm._s(errors[0]))]
                                              )
                                            : _vm._e()
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              }),
                              _vm._v(" "),
                              _c("AuthButton", {
                                attrs: {
                                  icon: "chevron-right",
                                  text: _vm.$t("page_shared.submit"),
                                  loading: _vm.isLoading,
                                  disabled: _vm.isLoading
                                }
                              })
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      319452001
                    )
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.sharedFile.type == "video"
        ? _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isPageLoading === false,
                  expression: "isPageLoading === false"
                }
              ],
              staticClass: "col-sm-12",
              staticStyle: { margin: "1% 15%", width: "80%" }
            },
            [
              _c("vue-core-video-player", {
                attrs: {
                  src: _vm.sharedFile ? _vm.getConvertedUrl : "",
                  loop: "",
                  cover: _vm.cover,
                  title: "《Your Name》OST Sparkle"
                }
              }),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "row",
                  staticStyle: { "margin-left": "7%", "margin-top": "2%" }
                },
                [
                  _c("h3", { staticClass: "text-center" }, [
                    _vm._v(_vm._s(_vm.sharedFile.name))
                  ])
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _vm.sharedFile.type == "image"
          ? _c(
              "div",
              {
                directives: [
                  {
                    name: "resize-text",
                    rawName: "v-resize-text",
                    value: { ratio: 1.3 },
                    expression: "{ ratio: 1.3 }"
                  },
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isPageLoading === false,
                    expression: "isPageLoading === false"
                  }
                ],
                ref: "box",
                staticClass: "col-sm-12",
                staticStyle: { margin: "1% 15%", width: "80%" },
                style: _vm.igCardStyle
              },
              [
                _c("img", {
                  attrs: {
                    id: "image",
                    src: _vm.sharedFile ? _vm.getConvertedUrl : "",
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "row",
                    staticStyle: { "margin-left": "33%", "margin-top": "2%" }
                  },
                  [
                    _c("h3", { staticClass: "text-center" }, [
                      _vm._v(_vm._s(_vm.sharedFile.name))
                    ])
                  ]
                )
              ]
            )
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Shared/SharedFolderPage.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/Shared/SharedFolderPage.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedFolderPage_vue_vue_type_template_id_437e171d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedFolderPage.vue?vue&type=template&id=437e171d&scoped=true& */ "./resources/js/views/Shared/SharedFolderPage.vue?vue&type=template&id=437e171d&scoped=true&");
/* harmony import */ var _SharedFolderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedFolderPage.vue?vue&type=script&lang=js& */ "./resources/js/views/Shared/SharedFolderPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SharedFolderPage_vue_vue_type_style_index_0_id_437e171d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true& */ "./resources/js/views/Shared/SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharedFolderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedFolderPage_vue_vue_type_template_id_437e171d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedFolderPage_vue_vue_type_template_id_437e171d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "437e171d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Shared/SharedFolderPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Shared/SharedFolderPage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedFolderPage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedFolderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedFolderPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedFolderPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Shared/SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedFolderPage_vue_vue_type_style_index_0_id_437e171d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=style&index=0&id=437e171d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedFolderPage_vue_vue_type_style_index_0_id_437e171d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedFolderPage_vue_vue_type_style_index_0_id_437e171d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedFolderPage_vue_vue_type_style_index_0_id_437e171d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedFolderPage_vue_vue_type_style_index_0_id_437e171d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Shared/SharedFolderPage.vue?vue&type=template&id=437e171d&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedFolderPage.vue?vue&type=template&id=437e171d&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedFolderPage_vue_vue_type_template_id_437e171d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedFolderPage.vue?vue&type=template&id=437e171d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedFolderPage.vue?vue&type=template&id=437e171d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedFolderPage_vue_vue_type_template_id_437e171d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedFolderPage_vue_vue_type_template_id_437e171d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Shared/SharedPage.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Shared/SharedPage.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true& */ "./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true&");
/* harmony import */ var _SharedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedPage.vue?vue&type=script&lang=js& */ "./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& */ "./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "747b9ae2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Shared/SharedPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Shared/SharedPresentationPage.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/Shared/SharedPresentationPage.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedPresentationPage_vue_vue_type_template_id_0060806e_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedPresentationPage.vue?vue&type=template&id=0060806e&scoped=true&oncontextmenu=return%20false%3B& */ "./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=template&id=0060806e&scoped=true&oncontextmenu=return%20false%3B&");
/* harmony import */ var _SharedPresentationPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedPresentationPage.vue?vue&type=script&lang=js& */ "./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SharedPresentationPage_vue_vue_type_style_index_0_id_0060806e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true& */ "./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharedPresentationPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedPresentationPage_vue_vue_type_template_id_0060806e_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedPresentationPage_vue_vue_type_template_id_0060806e_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0060806e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Shared/SharedPresentationPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPresentationPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPresentationPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPresentationPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPresentationPage_vue_vue_type_style_index_0_id_0060806e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=style&index=0&id=0060806e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPresentationPage_vue_vue_type_style_index_0_id_0060806e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPresentationPage_vue_vue_type_style_index_0_id_0060806e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPresentationPage_vue_vue_type_style_index_0_id_0060806e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPresentationPage_vue_vue_type_style_index_0_id_0060806e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=template&id=0060806e&scoped=true&oncontextmenu=return%20false%3B&":
/*!*****************************************************************************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=template&id=0060806e&scoped=true&oncontextmenu=return%20false%3B& ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPresentationPage_vue_vue_type_template_id_0060806e_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPresentationPage.vue?vue&type=template&id=0060806e&scoped=true&oncontextmenu=return%20false%3B& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPresentationPage.vue?vue&type=template&id=0060806e&scoped=true&oncontextmenu=return%20false%3B&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPresentationPage_vue_vue_type_template_id_0060806e_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPresentationPage_vue_vue_type_template_id_0060806e_scoped_true_oncontextmenu_return_20false_3B___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);