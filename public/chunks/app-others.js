(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/app-others"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ColorLabel',
  props: ['color']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
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
  name: 'DatatableCellImage',
  props: ['image', 'title', 'description', 'image-size']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Others_StorageItemDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Others/StorageItemDetail */ "./resources/js/components/Others/StorageItemDetail.vue");
/* harmony import */ var _components_Others_Layout_PageTabGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Others/Layout/PageTabGroup */ "./resources/js/components/Others/Layout/PageTabGroup.vue");
/* harmony import */ var _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/Forms/SelectInput */ "./resources/js/components/Others/Forms/SelectInput.vue");
/* harmony import */ var _components_Others_Forms_SwitchInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/Forms/SwitchInput */ "./resources/js/components/Others/Forms/SwitchInput.vue");
/* harmony import */ var _components_Others_Forms_ImageInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Others/Forms/ImageInput */ "./resources/js/components/Others/Forms/ImageInput.vue");
/* harmony import */ var _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Others/Forms/FormLabel */ "./resources/js/components/Others/Forms/FormLabel.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_Others_Forms_SetupBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Others/Forms/SetupBox */ "./resources/js/components/Others/Forms/SetupBox.vue");
/* harmony import */ var _components_Others_Layout_PageTab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Others/Layout/PageTab */ "./resources/js/components/Others/Layout/PageTab.vue");
/* harmony import */ var _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/Others/Forms/InfoBox */ "./resources/js/components/Others/Forms/InfoBox.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AppOthers',
  components: {
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__["ValidationProvider"],
    StorageItemDetail: _components_Others_StorageItemDetail__WEBPACK_IMPORTED_MODULE_1__["default"],
    PageTabGroup: _components_Others_Layout_PageTabGroup__WEBPACK_IMPORTED_MODULE_2__["default"],
    SwitchInput: _components_Others_Forms_SwitchInput__WEBPACK_IMPORTED_MODULE_4__["default"],
    SelectInput: _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    ImageInput: _components_Others_Forms_ImageInput__WEBPACK_IMPORTED_MODULE_5__["default"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"],
    FormLabel: _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_6__["default"],
    SetupBox: _components_Others_Forms_SetupBox__WEBPACK_IMPORTED_MODULE_8__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_11__["required"],
    PageTab: _components_Others_Layout_PageTab__WEBPACK_IMPORTED_MODULE_9__["default"],
    InfoBox: _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      isLoading: true,
      isFlushingCache: false,
      app: undefined
    };
  },
  methods: {
    flushCache: function flushCache() {
      var _this = this;

      this.isFlushingCache = true;
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.get('/api/flush-cache').then(function () {
        _bus__WEBPACK_IMPORTED_MODULE_12__["events"].$emit('toaster', {
          type: 'success',
          message: 'Your cache was successfully deleted.'
        });
      })["finally"](function () {
        _this.isFlushingCache = false;
      });
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_13___default.a.get('/api/settings', {
      params: {
        column: 'contact_email|google_analytics|storage_default|registration|storage_limitation|mimetypes_blacklist'
      }
    }).then(function (response) {
      _this2.isLoading = false;
      _this2.app = {
        contactMail: response.data.contact_email,
        googleAnalytics: response.data.google_analytics,
        defaultStorage: response.data.storage_default,
        userRegistration: parseInt(response.data.registration),
        storageLimitation: parseInt(response.data.storage_limitation),
        mimetypesBlacklist: response.data.mimetypes_blacklist
      };
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Package/Package.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Package/Package.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Others_Tables_DatatableCellImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Others/Tables/DatatableCellImage */ "./resources/js/components/Others/Tables/DatatableCellImage.vue");
/* harmony import */ var _components_Others_Tables_DatatableWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Others/Tables/DatatableWrapper */ "./resources/js/components/Others/Tables/DatatableWrapper.vue");
/* harmony import */ var _components_FilesView_MobileActionButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/MobileActionButton */ "./resources/js/components/FilesView/MobileActionButton.vue");
/* harmony import */ var _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Mobile/MobileHeader */ "./resources/js/components/Mobile/MobileHeader.vue");
/* harmony import */ var _components_Others_SectionTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Others/SectionTitle */ "./resources/js/components/Others/SectionTitle.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Others/PageHeader */ "./resources/js/components/Others/PageHeader.vue");
/* harmony import */ var _components_Others_ColorLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Others/ColorLabel */ "./resources/js/components/Others/ColorLabel.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);


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












/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Package',
  components: {
    DatatableCellImage: _components_Others_Tables_DatatableCellImage__WEBPACK_IMPORTED_MODULE_1__["default"],
    MobileActionButton: _components_FilesView_MobileActionButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    DatatableWrapper: _components_Others_Tables_DatatableWrapper__WEBPACK_IMPORTED_MODULE_2__["default"],
    SectionTitle: _components_Others_SectionTitle__WEBPACK_IMPORTED_MODULE_5__["default"],
    MobileHeader: _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    Trash2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__["Trash2Icon"],
    PageHeader: _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_8__["default"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"],
    ColorLabel: _components_Others_ColorLabel__WEBPACK_IMPORTED_MODULE_9__["default"],
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_7__["Edit2Icon"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_11__["mapGetters"])(['config'])),
  data: function data() {
    return {
      isLoading: true,
      columns: undefined
    };
  },
  methods: {
    getPackage: function getPackage() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Start loading
                _this.isLoading = true; // Send request to get user token

                axios__WEBPACK_IMPORTED_MODULE_12___default.a.get('/api/packages').then(function () {
                  // End loading
                  _this.isLoading = false; // Set login state

                  _this.$store.commit('SET_AUTHORIZED', true);
                })["catch"](function (error) {
                  if (error.response.status == 401) {
                    if (error.response.data.error === 'invalid_client') {
                      events.$emit('alert:open', {
                        emoji: '🤔',
                        title: _this.$t('popup_passport_error.title'),
                        message: _this.$t('popup_passport_error.message')
                      });
                    }
                  }

                  if (error.response.status == 500) {
                    console.log('response-status::', error.response);
                    events.$emit('alert:open', {
                      emoji: '🤔',
                      title: _this.$t('popup_signup_error.title'),
                      message: error.response.message // message: this.$t('popup_signup_error.message')

                    });
                  }

                  console.log('error.response.status', error.response.status);
                  console.log('error.response', error.response);

                  if (error.response.status == 422) {
                    console.log(error.response.data.error.detail['password']);
                    console.log(error.response.data.error.detail['email']);

                    if (error.response.data.error.detail['email']) {
                      _this.$refs.sign_up.setErrors({
                        'E-Mail': error.response.data.error.detail['email']
                      });
                    }

                    if (error.response.data.error.detail.password) {
                      _this.$refs.sign_up.setErrors({
                        'Your New Password': error.response.data.error.detail['password']
                      });
                    }
                  } // End loading


                  _this.isLoading = false;
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    this.columns = [{
      label: this.$t('admin_pages.packages.name'),
      field: 'name',
      sortable: true
    }, {
      label: this.$t('admin_pages.table.size'),
      field: 'size',
      sortable: true
    }, {
      label: this.$t('admin_pages.table.cost'),
      field: 'cost',
      sortable: true
    }, {
      label: this.$t('admin_pages.packages.table.duration'),
      field: 'duration',
      sortable: true
    }, {
      label: this.$t('admin_pages.packages.table.created_at'),
      field: 'created_at',
      sortable: true
    }, {
      label: this.$t('admin_pages.packages.action'),
      field: 'action',
      sortable: false
    }];
    this.getPackage();
  },
  updated: function updated() {
    $('.horizontal').remove();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-label[data-v-c96acb7c] {\n  text-transform: capitalize;\n  font-size: 0.75em;\n  display: inline-block;\n  border-radius: 6px;\n  font-weight: 700;\n  padding: 4px 6px;\n}\n.color-label.purple[data-v-c96acb7c] {\n  color: #9D66FE;\n  background: rgba(157, 102, 254, 0.1);\n}\n.color-label.yellow[data-v-c96acb7c] {\n  color: #FFBD2D;\n  background: rgba(255, 189, 45, 0.1);\n}\n.color-label.green[data-v-c96acb7c] {\n  color: #00bc7e;\n  background: rgba(0, 188, 126, 0.1);\n}\n.color-label.red[data-v-c96acb7c] {\n  color: #fd397a;\n  background: rgba(253, 57, 122, 0.1);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cell-image-thumbnail[data-v-1ee01384] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.cell-image-thumbnail .image[data-v-1ee01384] {\n  margin-right: 20px;\n  line-height: 0;\n  position: relative;\n}\n.cell-image-thumbnail .image img[data-v-1ee01384] {\n  line-height: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  z-index: 1;\n  position: relative;\n}\n.cell-image-thumbnail .image img.blurred[data-v-1ee01384] {\n  position: absolute;\n  left: 0;\n  top: 2px;\n  z-index: 0;\n  filter: blur(8px);\n  opacity: 0.5;\n}\n.cell-image-thumbnail .image.small img[data-v-1ee01384] {\n  width: 32px;\n  height: 32px;\n}\n.cell-image-thumbnail .info .name[data-v-1ee01384], .cell-image-thumbnail .info .description[data-v-1ee01384] {\n  max-width: 150px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n.cell-image-thumbnail .info .name[data-v-1ee01384] {\n  font-size: 0.9375em;\n  line-height: 1;\n  color: #1B2539;\n}\n.cell-image-thumbnail .info .description[data-v-1ee01384] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n@media (prefers-color-scheme: dark) {\n.cell-image-thumbnail .image img.blurred[data-v-1ee01384] {\n    display: none;\n}\n.cell-image-thumbnail .info .name[data-v-1ee01384] {\n    color: #bec6cf;\n}\n.cell-image-thumbnail .info .description[data-v-1ee01384] {\n    color: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-9d6b744c] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-9d6b744c] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-9d6b744c] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-9d6b744c] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-9d6b744c] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-9d6b744c] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-9d6b744c] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-9d6b744c] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-9d6b744c]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-9d6b744c] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-9d6b744c] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-9d6b744c] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-9d6b744c] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-9d6b744c] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-9d6b744c] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-9d6b744c] {\n  margin-left: 20px;\n}\n.error-message[data-v-9d6b744c] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-9d6b744c] {\n  width: 100%;\n}\ntextarea[data-v-9d6b744c],\ninput[type=\"password\"][data-v-9d6b744c],\ninput[type=\"text\"][data-v-9d6b744c],\ninput[type=\"number\"][data-v-9d6b744c],\ninput[type=\"email\"][data-v-9d6b744c] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-9d6b744c],\ninput[type=\"password\"].is-error[data-v-9d6b744c],\ninput[type=\"text\"].is-error[data-v-9d6b744c],\ninput[type=\"number\"].is-error[data-v-9d6b744c],\ninput[type=\"email\"].is-error[data-v-9d6b744c] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-9d6b744c]::-moz-placeholder, input[type=\"password\"][data-v-9d6b744c]::-moz-placeholder, input[type=\"text\"][data-v-9d6b744c]::-moz-placeholder, input[type=\"number\"][data-v-9d6b744c]::-moz-placeholder, input[type=\"email\"][data-v-9d6b744c]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-9d6b744c]:-ms-input-placeholder, input[type=\"password\"][data-v-9d6b744c]:-ms-input-placeholder, input[type=\"text\"][data-v-9d6b744c]:-ms-input-placeholder, input[type=\"number\"][data-v-9d6b744c]:-ms-input-placeholder, input[type=\"email\"][data-v-9d6b744c]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-9d6b744c]::placeholder,\ninput[type=\"password\"][data-v-9d6b744c]::placeholder,\ninput[type=\"text\"][data-v-9d6b744c]::placeholder,\ninput[type=\"number\"][data-v-9d6b744c]::placeholder,\ninput[type=\"email\"][data-v-9d6b744c]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-9d6b744c]:focus,\ninput[type=\"password\"][data-v-9d6b744c]:focus,\ninput[type=\"text\"][data-v-9d6b744c]:focus,\ninput[type=\"number\"][data-v-9d6b744c]:focus,\ninput[type=\"email\"][data-v-9d6b744c]:focus {\n  border-color: #00bc7e;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-9d6b744c],\ninput[type=\"password\"][disabled][data-v-9d6b744c],\ninput[type=\"text\"][disabled][data-v-9d6b744c],\ninput[type=\"number\"][disabled][data-v-9d6b744c],\ninput[type=\"email\"][disabled][data-v-9d6b744c] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-9d6b744c] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-9d6b744c], .additional-link a[data-v-9d6b744c] {\n  color: #00bc7e;\n  cursor: pointer;\n}\n.additional-link b[data-v-9d6b744c]:hover, .additional-link a[data-v-9d6b744c]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-9d6b744c] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-9d6b744c] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-9d6b744c], .form textarea[data-v-9d6b744c] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-9d6b744c] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-9d6b744c] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-9d6b744c] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-9d6b744c] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-9d6b744c] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-9d6b744c] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-9d6b744c] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-9d6b744c] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-9d6b744c],\n  input[type=\"password\"][data-v-9d6b744c],\n  input[type=\"number\"][data-v-9d6b744c],\n  input[type=\"text\"][data-v-9d6b744c],\n  input[type=\"email\"][data-v-9d6b744c] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-9d6b744c] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-9d6b744c] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-9d6b744c] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-9d6b744c] {\n    color: #bec6cf;\n}\ntextarea[data-v-9d6b744c],\n  input[type=\"password\"][data-v-9d6b744c],\n  input[type=\"text\"][data-v-9d6b744c],\n  input[type=\"number\"][data-v-9d6b744c],\n  input[type=\"email\"][data-v-9d6b744c] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-9d6b744c]::-moz-placeholder, input[type=\"password\"][data-v-9d6b744c]::-moz-placeholder, input[type=\"text\"][data-v-9d6b744c]::-moz-placeholder, input[type=\"number\"][data-v-9d6b744c]::-moz-placeholder, input[type=\"email\"][data-v-9d6b744c]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-9d6b744c]:-ms-input-placeholder, input[type=\"password\"][data-v-9d6b744c]:-ms-input-placeholder, input[type=\"text\"][data-v-9d6b744c]:-ms-input-placeholder, input[type=\"number\"][data-v-9d6b744c]:-ms-input-placeholder, input[type=\"email\"][data-v-9d6b744c]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-9d6b744c]::placeholder,\n  input[type=\"password\"][data-v-9d6b744c]::placeholder,\n  input[type=\"text\"][data-v-9d6b744c]::placeholder,\n  input[type=\"number\"][data-v-9d6b744c]::placeholder,\n  input[type=\"email\"][data-v-9d6b744c]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-9d6b744c],\n  input[type=\"password\"][disabled][data-v-9d6b744c],\n  input[type=\"text\"][disabled][data-v-9d6b744c],\n  input[type=\"number\"][disabled][data-v-9d6b744c],\n  input[type=\"email\"][disabled][data-v-9d6b744c] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.block-form[data-v-9d6b744c] {\n  max-width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Package/Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Package/Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-tools[data-v-b22b4324] {\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0 10px;\n  position: sticky;\n  top: 40px;\n  z-index: 9;\n}\n.menu-list-wrapper[data-v-b22b4324] {\n  display: none !important;\n}\n.table .cell-item[data-v-b22b4324] {\n  font-size: 0.9375em;\n  white-space: nowrap;\n}\n@media only screen and (max-width: 690px) {\n.table-tools[data-v-b22b4324] {\n    padding: 0 0 5px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.table-tools[data-v-b22b4324] {\n    background: #111314;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Package/Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Package/Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Package/Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    "b",
    { staticClass: "color-label", class: _vm.color },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=template&id=1ee01384&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=template&id=1ee01384&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "cell-image-thumbnail" }, [
    _vm.image
      ? _c("div", { staticClass: "image", class: _vm.imageSize }, [
          _c("img", { attrs: { src: _vm.image, alt: _vm.title } }),
          _vm._v(" "),
          _c("img", {
            staticClass: "blurred",
            attrs: { src: _vm.image, alt: _vm.title }
          })
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "info" }, [
      _vm.title
        ? _c("b", { staticClass: "name" }, [_vm._v(_vm._s(_vm.title))])
        : _vm._e(),
      _vm._v(" "),
      _vm.description
        ? _c("span", { staticClass: "description" }, [
            _vm._v(_vm._s(_vm.description))
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=template&id=9d6b744c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=template&id=9d6b744c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    "PageTab",
    { staticClass: "form-fixed-width", attrs: { "is-loading": _vm.isLoading } },
    [
      _vm.app
        ? _c("PageTabGroup", [
            _c(
              "div",
              { staticClass: "form block-form" },
              [
                _c("FormLabel", [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("admin_settings.others.section_user")) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("div", { staticClass: "input-wrapper" }, [
                    _c(
                      "div",
                      { staticClass: "inline-wrapper" },
                      [
                        _c("div", { staticClass: "switch-label" }, [
                          _c("label", { staticClass: "input-label" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  _vm.$t("admin_settings.others.storage_limit")
                                ) +
                                ":\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("small", {
                            staticClass: "input-help",
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$t(
                                  "admin_settings.others.storage_limit_help"
                                )
                              )
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("SwitchInput", {
                          staticClass: "switch",
                          attrs: { state: _vm.app.storageLimitation },
                          on: {
                            input: function($event) {
                              return _vm.$updateText(
                                "/settings",
                                "storage_limitation",
                                _vm.app.storageLimitation
                              )
                            }
                          },
                          model: {
                            value: _vm.app.storageLimitation,
                            callback: function($$v) {
                              _vm.$set(_vm.app, "storageLimitation", $$v)
                            },
                            expression: "app.storageLimitation"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.app.storageLimitation
                  ? _c(
                      "div",
                      { staticClass: "block-wrapper" },
                      [
                        _c("label", [
                          _vm._v(
                            _vm._s(
                              _vm.$t("admin_settings.others.default_storage")
                            ) + ":"
                          )
                        ]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Default Storage Space",
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
                                          value: _vm.app.defaultStorage,
                                          expression: "app.defaultStorage"
                                        }
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        min: "1",
                                        max: "999999999",
                                        placeholder: _vm.$t(
                                          "admin_settings.others.default_storage_plac"
                                        ),
                                        type: "number"
                                      },
                                      domProps: {
                                        value: _vm.app.defaultStorage
                                      },
                                      on: {
                                        input: [
                                          function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.$set(
                                              _vm.app,
                                              "defaultStorage",
                                              $event.target.value
                                            )
                                          },
                                          function($event) {
                                            return _vm.$updateText(
                                              "/settings",
                                              "storage_default",
                                              _vm.app.defaultStorage
                                            )
                                          }
                                        ]
                                      }
                                    }),
                                    _vm._v(" "),
                                    errors[0]
                                      ? _c(
                                          "span",
                                          { staticClass: "error-message" },
                                          [_vm._v(_vm._s(errors[0]))]
                                        )
                                      : _vm._e()
                                  ]
                                }
                              }
                            ],
                            null,
                            false,
                            1344268535
                          )
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("div", { staticClass: "input-wrapper" }, [
                    _c(
                      "div",
                      { staticClass: "inline-wrapper" },
                      [
                        _c("div", { staticClass: "switch-label" }, [
                          _c("label", { staticClass: "input-label" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  _vm.$t(
                                    "admin_settings.others.allow_registration"
                                  )
                                ) +
                                ":\n                            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("small", {
                            staticClass: "input-help",
                            domProps: {
                              innerHTML: _vm._s(
                                _vm.$t(
                                  "admin_settings.others.allow_registration_help"
                                )
                              )
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("SwitchInput", {
                          staticClass: "switch",
                          attrs: { state: _vm.app.userRegistration },
                          on: {
                            input: function($event) {
                              return _vm.$updateText(
                                "/settings",
                                "registration",
                                _vm.app.userRegistration
                              )
                            }
                          },
                          model: {
                            value: _vm.app.userRegistration,
                            callback: function($$v) {
                              _vm.$set(_vm.app, "userRegistration", $$v)
                            },
                            expression: "app.userRegistration"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("FormLabel", { staticClass: "mt-70" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("admin_settings.others.section_others")) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "block-wrapper" },
                  [
                    _c("label", [
                      _vm._v(
                        _vm._s(_vm.$t("admin_settings.others.contact_email")) +
                          ":"
                      )
                    ]),
                    _vm._v(" "),
                    _c("ValidationProvider", {
                      staticClass: "input-wrapper",
                      attrs: {
                        tag: "div",
                        mode: "passive",
                        name: "Contact Email",
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
                                      value: _vm.app.contactMail,
                                      expression: "app.contactMail"
                                    }
                                  ],
                                  class: { "is-error": errors[0] },
                                  attrs: {
                                    placeholder: _vm.$t(
                                      "admin_settings.others.contact_email_plac"
                                    ),
                                    type: "email"
                                  },
                                  domProps: { value: _vm.app.contactMail },
                                  on: {
                                    input: [
                                      function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.app,
                                          "contactMail",
                                          $event.target.value
                                        )
                                      },
                                      function($event) {
                                        return _vm.$updateText(
                                          "/settings",
                                          "contact_email",
                                          _vm.app.contactMail
                                        )
                                      }
                                    ]
                                  }
                                }),
                                _vm._v(" "),
                                errors[0]
                                  ? _c(
                                      "span",
                                      { staticClass: "error-message" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    )
                                  : _vm._e()
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        1389857557
                      )
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "block-wrapper" },
                  [
                    _c("label", [
                      _vm._v(
                        _vm._s(
                          _vm.$t("admin_settings.others.google_analytics")
                        ) + ":"
                      )
                    ]),
                    _vm._v(" "),
                    _c("ValidationProvider", {
                      staticClass: "input-wrapper",
                      attrs: {
                        tag: "div",
                        mode: "passive",
                        name: "Google Analytics Code"
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
                                      value: _vm.app.googleAnalytics,
                                      expression: "app.googleAnalytics"
                                    }
                                  ],
                                  class: { "is-error": errors[0] },
                                  attrs: {
                                    placeholder: _vm.$t(
                                      "admin_settings.others.google_analytics_plac"
                                    ),
                                    type: "text"
                                  },
                                  domProps: { value: _vm.app.googleAnalytics },
                                  on: {
                                    input: [
                                      function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.app,
                                          "googleAnalytics",
                                          $event.target.value
                                        )
                                      },
                                      function($event) {
                                        return _vm.$updateText(
                                          "/settings",
                                          "google_analytics",
                                          _vm.app.googleAnalytics
                                        )
                                      }
                                    ]
                                  }
                                }),
                                _vm._v(" "),
                                errors[0]
                                  ? _c(
                                      "span",
                                      { staticClass: "error-message" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    )
                                  : _vm._e()
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        834681330
                      )
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "block-wrapper" },
                  [
                    _c("label", [
                      _vm._v(
                        _vm._s(
                          _vm.$t("admin_settings.others.mimetypes_blacklist")
                        ) + ":"
                      )
                    ]),
                    _vm._v(" "),
                    _c("ValidationProvider", {
                      staticClass: "input-wrapper",
                      attrs: {
                        tag: "div",
                        mode: "passive",
                        name: "Mimetypes Blacklist"
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.app.mimetypesBlacklist,
                                      expression: "app.mimetypesBlacklist"
                                    }
                                  ],
                                  class: { "is-error": errors[0] },
                                  attrs: {
                                    rows: "2",
                                    placeholder: _vm.$t(
                                      "admin_settings.others.mimetypes_blacklist_plac"
                                    ),
                                    type: "text"
                                  },
                                  domProps: {
                                    value: _vm.app.mimetypesBlacklist
                                  },
                                  on: {
                                    input: [
                                      function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.app,
                                          "mimetypesBlacklist",
                                          $event.target.value
                                        )
                                      },
                                      function($event) {
                                        return _vm.$updateText(
                                          "/settings",
                                          "mimetypes_blacklist",
                                          _vm.app.mimetypesBlacklist
                                        )
                                      }
                                    ]
                                  }
                                }),
                                _vm._v(" "),
                                errors[0]
                                  ? _c(
                                      "span",
                                      { staticClass: "error-message" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    )
                                  : _vm._e()
                              ]
                            }
                          }
                        ],
                        null,
                        false,
                        226294926
                      )
                    }),
                    _vm._v(" "),
                    _c("small", {
                      staticClass: "input-help",
                      domProps: {
                        innerHTML: _vm._s(
                          _vm.$t(
                            "admin_settings.others.mimetypes_blacklist_help"
                          )
                        )
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("FormLabel", { staticClass: "mt-70" }, [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("admin_settings.others.section_cache")) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c("InfoBox", [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.$t("admin_settings.others.cache_disclaimer")) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "ButtonBase",
                  {
                    staticClass: "submit-button",
                    attrs: {
                      loading: _vm.isFlushingCache,
                      disabled: _vm.isFlushingCache,
                      type: "submit",
                      "button-style": "theme"
                    },
                    nativeOn: {
                      click: function($event) {
                        return _vm.flushCache($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("admin_settings.others.cache_clear")) +
                        "\n            "
                    )
                  ]
                )
              ],
              1
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Package/Package.vue?vue&type=template&id=b22b4324&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Package/Package.vue?vue&type=template&id=b22b4324&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "single-page" } }, [
    _c(
      "div",
      { attrs: { id: "page-content" } },
      [
        _c("MobileHeader", {
          attrs: { title: _vm.$router.currentRoute.meta.title }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-page" },
          [
            _c("div", { staticClass: "table-tools" }, [
              _c(
                "div",
                { staticClass: "buttons" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "AddPackage" } } },
                    [
                      _c(
                        "MobileActionButton",
                        { attrs: { icon: "add-package" } },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.$t("admin_pages.packages.submit")) +
                              "\n            "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "DatatableWrapper",
              {
                staticClass: "table table-users",
                attrs: {
                  api: "/api/packages",
                  paginator: true,
                  columns: _vm.columns
                },
                on: {
                  init: function($event) {
                    _vm.isLoading = false
                  }
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var row = ref.row
                      return [
                        _c("tr", [
                          _c(
                            "td",
                            { staticStyle: { "min-width": "320px" } },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "UserDetail",
                                      params: { id: row.data.id }
                                    }
                                  }
                                },
                                [
                                  _c("DatatableCellImage", {
                                    attrs: {
                                      name: row.data.name,
                                      cost: row.data.cost,
                                      size: row.data.size,
                                      duration: row.data.duration,
                                      details: row.data.details
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "cell-item" }, [
                              _vm._v(
                                "\n                                  " +
                                  _vm._s(row.data.name) +
                                  "\n                              "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "cell-item" }, [
                              _vm._v(
                                "\n                                  " +
                                  _vm._s(row.data.cost) +
                                  "\n                              "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "cell-item" }, [
                              _vm._v(
                                "\n                                      " +
                                  _vm._s(row.data.size) +
                                  "\n                              "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "cell-item" }, [
                              _vm._v(
                                "\n                                      " +
                                  _vm._s(row.data.duration) +
                                  "\n                              "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c("span", { staticClass: "cell-item" }, [
                              _vm._v(
                                "\n                                      " +
                                  _vm._s(row.data.details) +
                                  "\n                              "
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _c(
                              "div",
                              { staticClass: "action-icons" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "UserDetail",
                                        params: { id: row.data.id }
                                      }
                                    }
                                  },
                                  [
                                    _c("edit-2-icon", {
                                      staticClass: "icon icon-edit",
                                      attrs: { size: "15" }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    attrs: {
                                      to: {
                                        name: "UserDelete",
                                        params: { id: row.data.id }
                                      }
                                    }
                                  },
                                  [
                                    _c("trash2-icon", {
                                      staticClass: "icon icon-trash",
                                      attrs: { size: "15" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ])
                        ])
                      ]
                    }
                  }
                ])
              },
              [_vm._v("\n      " + _vm._s(_vm.row) + "\n        ")]
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm.isLoading
      ? _c("div", { attrs: { id: "loader" } }, [_c("Spinner")], 1)
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Others/ColorLabel.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Others/ColorLabel.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true& */ "./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true&");
/* harmony import */ var _ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorLabel.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& */ "./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c96acb7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/ColorLabel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorLabel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Others/Tables/DatatableCellImage.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Others/Tables/DatatableCellImage.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DatatableCellImage_vue_vue_type_template_id_1ee01384_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatatableCellImage.vue?vue&type=template&id=1ee01384&scoped=true& */ "./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=template&id=1ee01384&scoped=true&");
/* harmony import */ var _DatatableCellImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatatableCellImage.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DatatableCellImage_vue_vue_type_style_index_0_id_1ee01384_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true& */ "./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DatatableCellImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatatableCellImage_vue_vue_type_template_id_1ee01384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DatatableCellImage_vue_vue_type_template_id_1ee01384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ee01384",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/Tables/DatatableCellImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatableCellImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_style_index_0_id_1ee01384_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=style&index=0&id=1ee01384&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_style_index_0_id_1ee01384_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_style_index_0_id_1ee01384_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_style_index_0_id_1ee01384_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_style_index_0_id_1ee01384_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=template&id=1ee01384&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=template&id=1ee01384&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_template_id_1ee01384_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DatatableCellImage.vue?vue&type=template&id=1ee01384&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Tables/DatatableCellImage.vue?vue&type=template&id=1ee01384&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_template_id_1ee01384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatatableCellImage_vue_vue_type_template_id_1ee01384_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Others_vue_vue_type_template_id_9d6b744c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Others.vue?vue&type=template&id=9d6b744c&scoped=true& */ "./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=template&id=9d6b744c&scoped=true&");
/* harmony import */ var _Others_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Others.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Others_vue_vue_type_style_index_0_id_9d6b744c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true& */ "./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Others_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Others_vue_vue_type_template_id_9d6b744c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Others_vue_vue_type_template_id_9d6b744c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9d6b744c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Others.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_style_index_0_id_9d6b744c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=style&index=0&id=9d6b744c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_style_index_0_id_9d6b744c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_style_index_0_id_9d6b744c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_style_index_0_id_9d6b744c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_style_index_0_id_9d6b744c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=template&id=9d6b744c&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=template&id=9d6b744c&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_template_id_9d6b744c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Others.vue?vue&type=template&id=9d6b744c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/AppSettings/AppSettingsTabs/Others.vue?vue&type=template&id=9d6b744c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_template_id_9d6b744c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Others_vue_vue_type_template_id_9d6b744c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Admin/Package/Package.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/Admin/Package/Package.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Package_vue_vue_type_template_id_b22b4324_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Package.vue?vue&type=template&id=b22b4324&scoped=true& */ "./resources/js/views/Admin/Package/Package.vue?vue&type=template&id=b22b4324&scoped=true&");
/* harmony import */ var _Package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Package.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/Package/Package.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Package_vue_vue_type_style_index_0_id_b22b4324_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true& */ "./resources/js/views/Admin/Package/Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Package_vue_vue_type_template_id_b22b4324_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Package_vue_vue_type_template_id_b22b4324_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b22b4324",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/Package/Package.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/Package/Package.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Admin/Package/Package.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Package.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Package/Package.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/Package/Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/Admin/Package/Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_style_index_0_id_b22b4324_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Package/Package.vue?vue&type=style&index=0&id=b22b4324&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_style_index_0_id_b22b4324_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_style_index_0_id_b22b4324_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_style_index_0_id_b22b4324_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_style_index_0_id_b22b4324_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Admin/Package/Package.vue?vue&type=template&id=b22b4324&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/Admin/Package/Package.vue?vue&type=template&id=b22b4324&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_template_id_b22b4324_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Package.vue?vue&type=template&id=b22b4324&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Package/Package.vue?vue&type=template&id=b22b4324&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_template_id_b22b4324_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_template_id_b22b4324_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);