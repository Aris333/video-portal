(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/subscription-plans"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
  name: 'AuthContentWrapper'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
  name: 'FormLabel',
  components: {
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["Edit2Icon"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
  name: 'InfoBox',
  props: ['type']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Auth/AuthContentWrapper */ "./resources/js/components/Auth/AuthContentWrapper.vue");
/* harmony import */ var _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/Forms/SelectInput */ "./resources/js/components/Others/Forms/SelectInput.vue");
/* harmony import */ var _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/Forms/FormLabel */ "./resources/js/components/Others/Forms/FormLabel.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Others/Forms/InfoBox */ "./resources/js/components/Others/Forms/InfoBox.vue");
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'subscriptionPlans',
  components: {
    AuthContentWrapper: _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_2__["default"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__["SettingsIcon"],
    SelectInput: _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_7__["default"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_5__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormLabel: _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_4__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_10__["required"],
    InfoBox: _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_6__["default"],
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_9__["XIcon"]
  },
  computed: {
    submitButtonText: function submitButtonText() {
      return this.isLoading ? 'Creating Subscription Stripe Plans' : 'Save and Go Next';
    }
  },
  data: function data() {
    return {
      isLoading: false,
      isError: false,
      errorMessage: '',
      subscriptionPlans: [{
        id: 1,
        type: 'plan',
        attributes: {
          name: '',
          description: '',
          price: '',
          capacity: ''
        }
      }]
    };
  },
  methods: {
    subscriptionPlansSubmit: function subscriptionPlansSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.subscriptionPlans.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                // Start loading
                _this.isLoading = true;
                _this.isError = false; // Send request to get verify account

                axios__WEBPACK_IMPORTED_MODULE_12___default.a.post('/api/setup/stripe-plans', {
                  plans: _this.subscriptionPlans
                }).then(function () {
                  // Redirect to next step
                  _this.$router.push({
                    name: 'EnvironmentSetup'
                  });
                })["catch"](function (error) {
                  if (error.response.status = 500) {
                    _this.isError = true;
                    _this.errorMessage = error.response.data.message;
                  }
                })["finally"](function () {
                  _this.isLoading = false;
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    addRow: function addRow() {
      this.subscriptionPlans.push({
        id: Math.floor(Math.random() * 10000000),
        type: 'plans',
        attributes: {
          name: '',
          description: '',
          price: '',
          capacity: ''
        }
      });
    },
    removeRow: function removeRow(plan) {
      this.subscriptionPlans = this.subscriptionPlans.filter(function (item) {
        return item.id !== plan.id;
      });
    }
  },
  created: function created() {
    this.$scrollTop();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#auth[data-v-7cf0b724] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-label[data-v-1f1075ef] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-1f1075ef] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-1f1075ef] {\n  stroke: #00bc7e;\n}\n.form-label .label[data-v-1f1075ef] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-1f1075ef] {\n    color: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".info-box[data-v-27653adc] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-27653adc] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-27653adc], .info-box.error a[data-v-27653adc] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-27653adc] {\n  text-decoration: underline;\n}\n.info-box p[data-v-27653adc] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-27653adc] a {\n  color: #00bc7e;\n}\n.info-box b[data-v-27653adc] {\n  font-weight: 700;\n  color: #00bc7e;\n}\n.info-box a[data-v-27653adc] {\n  color: #00bc7e;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-27653adc] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-27653adc] {\n  display: block;\n}\n.info-box ul li a[data-v-27653adc] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-27653adc] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-27653adc] {\n    background: #1e2024;\n}\n.info-box p[data-v-27653adc] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-27653adc] {\n    color: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-12cabf97] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-12cabf97] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-12cabf97] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-12cabf97] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-12cabf97] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-12cabf97] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-12cabf97] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-12cabf97] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-12cabf97]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-12cabf97] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-12cabf97] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-12cabf97] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-12cabf97] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-12cabf97] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-12cabf97] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-12cabf97] {\n  margin-left: 20px;\n}\n.error-message[data-v-12cabf97] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-12cabf97] {\n  width: 100%;\n}\ntextarea[data-v-12cabf97],\ninput[type=\"password\"][data-v-12cabf97],\ninput[type=\"text\"][data-v-12cabf97],\ninput[type=\"number\"][data-v-12cabf97],\ninput[type=\"email\"][data-v-12cabf97] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-12cabf97],\ninput[type=\"password\"].is-error[data-v-12cabf97],\ninput[type=\"text\"].is-error[data-v-12cabf97],\ninput[type=\"number\"].is-error[data-v-12cabf97],\ninput[type=\"email\"].is-error[data-v-12cabf97] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-12cabf97]::-moz-placeholder, input[type=\"password\"][data-v-12cabf97]::-moz-placeholder, input[type=\"text\"][data-v-12cabf97]::-moz-placeholder, input[type=\"number\"][data-v-12cabf97]::-moz-placeholder, input[type=\"email\"][data-v-12cabf97]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-12cabf97]:-ms-input-placeholder, input[type=\"password\"][data-v-12cabf97]:-ms-input-placeholder, input[type=\"text\"][data-v-12cabf97]:-ms-input-placeholder, input[type=\"number\"][data-v-12cabf97]:-ms-input-placeholder, input[type=\"email\"][data-v-12cabf97]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-12cabf97]::placeholder,\ninput[type=\"password\"][data-v-12cabf97]::placeholder,\ninput[type=\"text\"][data-v-12cabf97]::placeholder,\ninput[type=\"number\"][data-v-12cabf97]::placeholder,\ninput[type=\"email\"][data-v-12cabf97]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-12cabf97]:focus,\ninput[type=\"password\"][data-v-12cabf97]:focus,\ninput[type=\"text\"][data-v-12cabf97]:focus,\ninput[type=\"number\"][data-v-12cabf97]:focus,\ninput[type=\"email\"][data-v-12cabf97]:focus {\n  border-color: #00bc7e;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-12cabf97],\ninput[type=\"password\"][disabled][data-v-12cabf97],\ninput[type=\"text\"][disabled][data-v-12cabf97],\ninput[type=\"number\"][disabled][data-v-12cabf97],\ninput[type=\"email\"][disabled][data-v-12cabf97] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-12cabf97] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-12cabf97], .additional-link a[data-v-12cabf97] {\n  color: #00bc7e;\n  cursor: pointer;\n}\n.additional-link b[data-v-12cabf97]:hover, .additional-link a[data-v-12cabf97]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-12cabf97] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-12cabf97] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-12cabf97], .form textarea[data-v-12cabf97] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-12cabf97] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-12cabf97] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-12cabf97] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-12cabf97] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-12cabf97] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-12cabf97] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-12cabf97] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-12cabf97] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-12cabf97],\n  input[type=\"password\"][data-v-12cabf97],\n  input[type=\"number\"][data-v-12cabf97],\n  input[type=\"text\"][data-v-12cabf97],\n  input[type=\"email\"][data-v-12cabf97] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-12cabf97] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-12cabf97] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-12cabf97] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-12cabf97] {\n    color: #bec6cf;\n}\ntextarea[data-v-12cabf97],\n  input[type=\"password\"][data-v-12cabf97],\n  input[type=\"text\"][data-v-12cabf97],\n  input[type=\"number\"][data-v-12cabf97],\n  input[type=\"email\"][data-v-12cabf97] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-12cabf97]::-moz-placeholder, input[type=\"password\"][data-v-12cabf97]::-moz-placeholder, input[type=\"text\"][data-v-12cabf97]::-moz-placeholder, input[type=\"number\"][data-v-12cabf97]::-moz-placeholder, input[type=\"email\"][data-v-12cabf97]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-12cabf97]:-ms-input-placeholder, input[type=\"password\"][data-v-12cabf97]:-ms-input-placeholder, input[type=\"text\"][data-v-12cabf97]:-ms-input-placeholder, input[type=\"number\"][data-v-12cabf97]:-ms-input-placeholder, input[type=\"email\"][data-v-12cabf97]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-12cabf97]::placeholder,\n  input[type=\"password\"][data-v-12cabf97]::placeholder,\n  input[type=\"text\"][data-v-12cabf97]::placeholder,\n  input[type=\"number\"][data-v-12cabf97]::placeholder,\n  input[type=\"email\"][data-v-12cabf97]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-12cabf97],\n  input[type=\"password\"][disabled][data-v-12cabf97],\n  input[type=\"text\"][disabled][data-v-12cabf97],\n  input[type=\"number\"][disabled][data-v-12cabf97],\n  input[type=\"email\"][disabled][data-v-12cabf97] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.auth-logo-text[data-v-12cabf97] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-12cabf97] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-12cabf97] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-12cabf97] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-12cabf97] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-12cabf97] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-12cabf97] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-12cabf97] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-12cabf97] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-12cabf97] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-12cabf97] {\n    width: 100%;\n}\n.auth-form h1[data-v-12cabf97] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-12cabf97] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-12cabf97] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-12cabf97] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-12cabf97] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-12cabf97] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-12cabf97], .auth-form h2[data-v-12cabf97], .auth-form .additional-link[data-v-12cabf97] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-12cabf97] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-12cabf97] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-12cabf97] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-12cabf97] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-12cabf97] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-12cabf97] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-12cabf97] {\n  stroke: #00bc7e;\n}\n.duplicator .duplicator-item input[data-v-12cabf97],\n.duplicator .duplicator-item textarea[data-v-12cabf97] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-12cabf97] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-12cabf97] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-12cabf97] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-12cabf97] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-12cabf97 5s linear infinite;\n          animation: spinner-data-v-12cabf97 5s linear infinite;\n}\n.title-icon circle[data-v-12cabf97], .title-icon path[data-v-12cabf97] {\n  stroke: #00bc7e;\n}\n@-webkit-keyframes spinner-data-v-12cabf97 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-12cabf97 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-12cabf97] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-12cabf97],\n  .duplicator .duplicator-item textarea[data-v-12cabf97] {\n    background: #111314;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "auth" } }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "form-label" },
    [
      _c("edit-2-icon", { staticClass: "icon", attrs: { size: "22" } }),
      _vm._v(" "),
      _c("b", { staticClass: "label" }, [_vm._t("default")], 2)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=template&id=27653adc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=template&id=27653adc&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "info-box", class: _vm.type },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=template&id=12cabf97&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=template&id=12cabf97&scoped=true& ***!
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
  return _c(
    "AuthContentWrapper",
    { ref: "auth" },
    [
      _c(
        "AuthContent",
        { attrs: { name: "database-credentials", visible: true } },
        [
          _c(
            "div",
            { staticClass: "content-headline" },
            [
              _c("settings-icon", {
                staticClass: "title-icon",
                attrs: { size: "40" }
              }),
              _vm._v(" "),
              _c("h1", [_vm._v("Setup Wizard")]),
              _vm._v(" "),
              _c("h2", [_vm._v("Set up plans for your customers.")])
            ],
            1
          ),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "subscriptionPlans",
            staticClass: "form block-form",
            attrs: { tag: "form" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.subscriptionPlansSubmit($event)
              }
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var invalid = ref.invalid
                  return [
                    _c("FormLabel", [_vm._v("Create your plans")]),
                    _vm._v(" "),
                    _c("InfoBox", [
                      _c("p", [
                        _vm._v("Your plans will be "),
                        _c("b", [_vm._v("sorted automatically")]),
                        _vm._v(
                          " in ascent order by plan price. All plans is automatically created as monthly plans."
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "duplicator" },
                      [
                        _vm._l(_vm.subscriptionPlans, function(plan, index) {
                          return _c(
                            "div",
                            {
                              key: index++,
                              staticClass: "plan-item duplicator-item"
                            },
                            [
                              index !== 1
                                ? _c("x-icon", {
                                    staticClass: "delete-item",
                                    attrs: { size: "22" },
                                    on: {
                                      click: function($event) {
                                        return _vm.removeRow(plan)
                                      }
                                    }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _c("b", { staticClass: "duplicator-title" }, [
                                _vm._v(_vm._s(index) + ". Plan")
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "block-wrapper" },
                                [
                                  _c("label", [_vm._v("Name:")]),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    staticClass: "input-wrapper",
                                    attrs: {
                                      tag: "div",
                                      mode: "passive",
                                      name: "Name",
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
                                                    value: plan.attributes.name,
                                                    expression:
                                                      "plan.attributes.name"
                                                  }
                                                ],
                                                class: {
                                                  "is-error": errors[0]
                                                },
                                                attrs: {
                                                  placeholder:
                                                    "Type your plan name",
                                                  type: "text"
                                                },
                                                domProps: {
                                                  value: plan.attributes.name
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      plan.attributes,
                                                      "name",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              errors[0]
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "error-message"
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
                                    _vm._v("Description (optional):")
                                  ]),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    staticClass: "input-wrapper",
                                    attrs: {
                                      tag: "div",
                                      mode: "passive",
                                      name: "Description"
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
                                                    value:
                                                      plan.attributes
                                                        .description,
                                                    expression:
                                                      "plan.attributes.description"
                                                  }
                                                ],
                                                class: {
                                                  "is-error": errors[0]
                                                },
                                                attrs: {
                                                  placeholder:
                                                    "Type your plan description"
                                                },
                                                domProps: {
                                                  value:
                                                    plan.attributes.description
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      plan.attributes,
                                                      "description",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              errors[0]
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "error-message"
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
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "block-wrapper" },
                                [
                                  _c("label", [_vm._v("Price:")]),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    staticClass: "input-wrapper",
                                    attrs: {
                                      tag: "div",
                                      mode: "passive",
                                      name: "Price",
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
                                                    value:
                                                      plan.attributes.price,
                                                    expression:
                                                      "plan.attributes.price"
                                                  }
                                                ],
                                                class: {
                                                  "is-error": errors[0]
                                                },
                                                attrs: {
                                                  placeholder:
                                                    "Type your plan price",
                                                  type: "number",
                                                  step: "0.01",
                                                  min: "1",
                                                  max: "999999999999"
                                                },
                                                domProps: {
                                                  value: plan.attributes.price
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      plan.attributes,
                                                      "price",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              errors[0]
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "error-message"
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
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "block-wrapper" },
                                [
                                  _c("label", [_vm._v("Storage Capacity:")]),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    staticClass: "input-wrapper",
                                    attrs: {
                                      tag: "div",
                                      mode: "passive",
                                      name: "Storage Capacity",
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
                                                    value:
                                                      plan.attributes.capacity,
                                                    expression:
                                                      "plan.attributes.capacity"
                                                  }
                                                ],
                                                class: {
                                                  "is-error": errors[0]
                                                },
                                                attrs: {
                                                  min: "1",
                                                  max: "999999999",
                                                  placeholder:
                                                    "Type storage capacity in GB",
                                                  type: "number"
                                                },
                                                domProps: {
                                                  value:
                                                    plan.attributes.capacity
                                                },
                                                on: {
                                                  input: function($event) {
                                                    if (
                                                      $event.target.composing
                                                    ) {
                                                      return
                                                    }
                                                    _vm.$set(
                                                      plan.attributes,
                                                      "capacity",
                                                      $event.target.value
                                                    )
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              errors[0]
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "error-message"
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
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        _vm._v(" "),
                        _c(
                          "ButtonBase",
                          {
                            staticClass: "duplicator-add-button",
                            attrs: { "button-style": "theme-solid" },
                            nativeOn: {
                              click: function($event) {
                                return _vm.addRow($event)
                              }
                            }
                          },
                          [_vm._v("Add New Plan\n                ")]
                        )
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _vm.isError
                      ? _c(
                          "InfoBox",
                          {
                            staticStyle: { "margin-top": "40px" },
                            attrs: { type: "error" }
                          },
                          [_c("p", [_vm._v(_vm._s(_vm.errorMessage))])]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "submit-wrapper" },
                      [
                        _c("AuthButton", {
                          attrs: {
                            icon: "chevron-right",
                            text: _vm.submitButtonText,
                            loading: _vm.isLoading,
                            disabled: _vm.isLoading
                          }
                        })
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Auth/AuthContentWrapper.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Auth/AuthContentWrapper.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true& */ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true&");
/* harmony import */ var _AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthContentWrapper.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& */ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7cf0b724",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/AuthContentWrapper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthContentWrapper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=style&index=0&id=7cf0b724&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_style_index_0_id_7cf0b724_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContentWrapper.vue?vue&type=template&id=7cf0b724&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContentWrapper_vue_vue_type_template_id_7cf0b724_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& */ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&");
/* harmony import */ var _FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& */ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f1075ef",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/Forms/FormLabel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Others/Forms/InfoBox.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Others/Forms/InfoBox.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InfoBox_vue_vue_type_template_id_27653adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=template&id=27653adc&scoped=true& */ "./resources/js/components/Others/Forms/InfoBox.vue?vue&type=template&id=27653adc&scoped=true&");
/* harmony import */ var _InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/Forms/InfoBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _InfoBox_vue_vue_type_style_index_0_id_27653adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true& */ "./resources/js/components/Others/Forms/InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InfoBox_vue_vue_type_template_id_27653adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InfoBox_vue_vue_type_template_id_27653adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "27653adc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/Forms/InfoBox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/Forms/InfoBox.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/InfoBox.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoBox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/Forms/InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_27653adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=style&index=0&id=27653adc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_27653adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_27653adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_27653adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_style_index_0_id_27653adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/Forms/InfoBox.vue?vue&type=template&id=27653adc&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/InfoBox.vue?vue&type=template&id=27653adc&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_template_id_27653adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InfoBox.vue?vue&type=template&id=27653adc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/InfoBox.vue?vue&type=template&id=27653adc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_template_id_27653adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InfoBox_vue_vue_type_template_id_27653adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/SetupWizard/SubscriptionPlans.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/SetupWizard/SubscriptionPlans.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubscriptionPlans_vue_vue_type_template_id_12cabf97_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriptionPlans.vue?vue&type=template&id=12cabf97&scoped=true& */ "./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=template&id=12cabf97&scoped=true&");
/* harmony import */ var _SubscriptionPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriptionPlans.vue?vue&type=script&lang=js& */ "./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SubscriptionPlans_vue_vue_type_style_index_0_id_12cabf97_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss& */ "./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SubscriptionPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubscriptionPlans_vue_vue_type_template_id_12cabf97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubscriptionPlans_vue_vue_type_template_id_12cabf97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "12cabf97",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SetupWizard/SubscriptionPlans.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionPlans.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionPlans_vue_vue_type_style_index_0_id_12cabf97_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=style&index=0&id=12cabf97&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionPlans_vue_vue_type_style_index_0_id_12cabf97_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionPlans_vue_vue_type_style_index_0_id_12cabf97_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionPlans_vue_vue_type_style_index_0_id_12cabf97_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionPlans_vue_vue_type_style_index_0_id_12cabf97_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=template&id=12cabf97&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=template&id=12cabf97&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionPlans_vue_vue_type_template_id_12cabf97_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionPlans.vue?vue&type=template&id=12cabf97&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionPlans.vue?vue&type=template&id=12cabf97&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionPlans_vue_vue_type_template_id_12cabf97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionPlans_vue_vue_type_template_id_12cabf97_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);