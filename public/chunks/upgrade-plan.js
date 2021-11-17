(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/upgrade-plan"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PageHeader',
  props: ['title', 'canBack'],
  components: {
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ChevronLeftIcon"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Others_PlanPricingTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Others/PlanPricingTables */ "./resources/js/components/Others/PlanPricingTables.vue");
/* harmony import */ var _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Mobile/MobileHeader */ "./resources/js/components/Mobile/MobileHeader.vue");
/* harmony import */ var _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/PageHeader */ "./resources/js/components/Others/PageHeader.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'UpgradeKomytPlan',
  components: {
    PlanPricingTables: _components_Others_PlanPricingTables__WEBPACK_IMPORTED_MODULE_1__["default"],
    MobileHeader: _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageHeader: _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"],
    CloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_5__["CloudIcon"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      isLoading: true
    };
  },
  methods: {
    onLoadPricingTables: function onLoadPricingTables(state) {
      this.isLoading = state;
    },
    onSelectTable: function onSelectTable(plan) {
      this.$store.commit('STORE_REQUESTED_PLAN', plan);
    },
    submitOrder: function submitOrder() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid, _yield$stripe$confirm, setupIntent, error;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.order.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                // Remove error
                _this.isError = false; // Start loading

                _this.isSubmitted = true; // If user don't have credit card, register new

                if (!(!_this.defaultPaymentMethod || _this.payByNewCard)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 10;
                return stripe.confirmCardSetup(_this.clientSecret, {
                  payment_method: {
                    card: card
                  }
                });

              case 10:
                _yield$stripe$confirm = _context.sent;
                setupIntent = _yield$stripe$confirm.setupIntent;
                error = _yield$stripe$confirm.error;

                if (error) {
                  // Set error on
                  _this.isError = true; // End button spinner

                  _this.isSubmitted = false; // Show error message

                  _this.errorMessage = error.message;
                } else {
                  axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/api/subscription/upgrade', {
                    billing: _this.billing,
                    plan: _this.requestedPlan,
                    payment: {
                      type: 'stripe',
                      meta: {
                        pm: setupIntent.payment_method
                      }
                    }
                  }).then(function () {
                    return _this.successOrder();
                  })["catch"](function (error) {
                    return _this.errorOrder(error);
                  })["finally"](function () {
                    _this.isSubmitted = false;
                  });
                }

              case 14:
                // if user has credit card
                if (_this.defaultPaymentMethod && !_this.payByNewCard) {
                  axios__WEBPACK_IMPORTED_MODULE_6___default.a.post('/api/subscription/upgrade', {
                    billing: _this.billing,
                    plan: _this.requestedPlan,
                    payment: {
                      type: 'stripe'
                    }
                  }).then(function () {
                    return _this.successOrder();
                  })["catch"](function (error) {
                    return _this.errorOrder(error);
                  })["finally"](function () {
                    _this.isSubmitted = false;
                  });
                }

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  beforeMount: function beforeMount() {
    var StripeElementsScript = document.createElement('script');
    StripeElementsScript.setAttribute('src', 'https://js.stripe.com/v3/');
    document.head.appendChild(StripeElementsScript);
  },
  mounted: function mounted() {
    // Reload user data
    this.$store.dispatch('getAppData');
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Others_PlanPricingTables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Others/PlanPricingTables */ "./resources/js/components/Others/PlanPricingTables.vue");
/* harmony import */ var _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Mobile/MobileHeader */ "./resources/js/components/Mobile/MobileHeader.vue");
/* harmony import */ var _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Others/PageHeader */ "./resources/js/components/Others/PageHeader.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'UpgradePlan',
  components: {
    PlanPricingTables: _components_Others_PlanPricingTables__WEBPACK_IMPORTED_MODULE_0__["default"],
    MobileHeader: _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    PageHeader: _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_2__["default"],
    CloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__["CloudIcon"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isLoading: true
    };
  },
  methods: {
    onLoadPricingTables: function onLoadPricingTables(state) {
      this.isLoading = state;
    },
    onSelectTable: function onSelectTable(plan) {
      this.$store.commit('STORE_REQUESTED_PLAN', plan);
    }
  },
  beforeMount: function beforeMount() {
    var StripeElementsScript = document.createElement('script');
    StripeElementsScript.setAttribute('src', 'https://js.stripe.com/v3/');
    document.head.appendChild(StripeElementsScript);
  },
  mounted: function mounted() {
    // Reload user data
    this.$store.dispatch('getAppData');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header[data-v-3c80dd26] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-3c80dd26] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-3c80dd26] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-3c80dd26] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-3c80dd26] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-3c80dd26] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-3c80dd26] {\n    background: #111314;\n}\n.page-header .title[data-v-3c80dd26] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-3c80dd26] {\n    fill: #00bc7e;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-0481cec3] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-0481cec3] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-0481cec3] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-0481cec3] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-0481cec3] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-0481cec3] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-0481cec3] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-0481cec3] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-0481cec3]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-0481cec3] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-0481cec3] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-0481cec3] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-0481cec3] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-0481cec3] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-0481cec3] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-0481cec3] {\n  margin-left: 20px;\n}\n.error-message[data-v-0481cec3] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-0481cec3] {\n  width: 100%;\n}\ntextarea[data-v-0481cec3],\ninput[type=\"password\"][data-v-0481cec3],\ninput[type=\"text\"][data-v-0481cec3],\ninput[type=\"number\"][data-v-0481cec3],\ninput[type=\"email\"][data-v-0481cec3] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-0481cec3],\ninput[type=\"password\"].is-error[data-v-0481cec3],\ninput[type=\"text\"].is-error[data-v-0481cec3],\ninput[type=\"number\"].is-error[data-v-0481cec3],\ninput[type=\"email\"].is-error[data-v-0481cec3] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-0481cec3]::-moz-placeholder, input[type=\"password\"][data-v-0481cec3]::-moz-placeholder, input[type=\"text\"][data-v-0481cec3]::-moz-placeholder, input[type=\"number\"][data-v-0481cec3]::-moz-placeholder, input[type=\"email\"][data-v-0481cec3]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-0481cec3]:-ms-input-placeholder, input[type=\"password\"][data-v-0481cec3]:-ms-input-placeholder, input[type=\"text\"][data-v-0481cec3]:-ms-input-placeholder, input[type=\"number\"][data-v-0481cec3]:-ms-input-placeholder, input[type=\"email\"][data-v-0481cec3]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-0481cec3]::placeholder,\ninput[type=\"password\"][data-v-0481cec3]::placeholder,\ninput[type=\"text\"][data-v-0481cec3]::placeholder,\ninput[type=\"number\"][data-v-0481cec3]::placeholder,\ninput[type=\"email\"][data-v-0481cec3]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-0481cec3]:focus,\ninput[type=\"password\"][data-v-0481cec3]:focus,\ninput[type=\"text\"][data-v-0481cec3]:focus,\ninput[type=\"number\"][data-v-0481cec3]:focus,\ninput[type=\"email\"][data-v-0481cec3]:focus {\n  border-color: #00bc7e;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-0481cec3],\ninput[type=\"password\"][disabled][data-v-0481cec3],\ninput[type=\"text\"][disabled][data-v-0481cec3],\ninput[type=\"number\"][disabled][data-v-0481cec3],\ninput[type=\"email\"][disabled][data-v-0481cec3] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-0481cec3] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-0481cec3], .additional-link a[data-v-0481cec3] {\n  color: #00bc7e;\n  cursor: pointer;\n}\n.additional-link b[data-v-0481cec3]:hover, .additional-link a[data-v-0481cec3]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-0481cec3] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-0481cec3] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-0481cec3], .form textarea[data-v-0481cec3] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-0481cec3] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-0481cec3] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-0481cec3] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-0481cec3] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-0481cec3] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-0481cec3] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-0481cec3] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-0481cec3] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-0481cec3],\n  input[type=\"password\"][data-v-0481cec3],\n  input[type=\"number\"][data-v-0481cec3],\n  input[type=\"text\"][data-v-0481cec3],\n  input[type=\"email\"][data-v-0481cec3] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-0481cec3] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-0481cec3] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-0481cec3] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-0481cec3] {\n    color: #bec6cf;\n}\ntextarea[data-v-0481cec3],\n  input[type=\"password\"][data-v-0481cec3],\n  input[type=\"text\"][data-v-0481cec3],\n  input[type=\"number\"][data-v-0481cec3],\n  input[type=\"email\"][data-v-0481cec3] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-0481cec3]::-moz-placeholder, input[type=\"password\"][data-v-0481cec3]::-moz-placeholder, input[type=\"text\"][data-v-0481cec3]::-moz-placeholder, input[type=\"number\"][data-v-0481cec3]::-moz-placeholder, input[type=\"email\"][data-v-0481cec3]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0481cec3]:-ms-input-placeholder, input[type=\"password\"][data-v-0481cec3]:-ms-input-placeholder, input[type=\"text\"][data-v-0481cec3]:-ms-input-placeholder, input[type=\"number\"][data-v-0481cec3]:-ms-input-placeholder, input[type=\"email\"][data-v-0481cec3]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-0481cec3]::placeholder,\n  input[type=\"password\"][data-v-0481cec3]::placeholder,\n  input[type=\"text\"][data-v-0481cec3]::placeholder,\n  input[type=\"number\"][data-v-0481cec3]::placeholder,\n  input[type=\"email\"][data-v-0481cec3]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-0481cec3],\n  input[type=\"password\"][disabled][data-v-0481cec3],\n  input[type=\"text\"][disabled][data-v-0481cec3],\n  input[type=\"number\"][disabled][data-v-0481cec3],\n  input[type=\"email\"][disabled][data-v-0481cec3] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.plan-title[data-v-0481cec3] {\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto 80px;\n}\n.plan-title path[data-v-0481cec3], .plan-title line[data-v-0481cec3], .plan-title polyline[data-v-0481cec3], .plan-title rect[data-v-0481cec3], .plan-title circle[data-v-0481cec3] {\n  color: #00bc7e;\n}\n.plan-title h1[data-v-0481cec3] {\n  font-size: 2.375em;\n  font-weight: 800;\n  margin-bottom: 5px;\n}\n.plan-title h2[data-v-0481cec3] {\n  font-size: 1.25em;\n  font-weight: 500;\n}\n.page-wrapper.medium[data-v-0481cec3] {\n  width: 1150px;\n}\n.page-wrapper[data-v-0481cec3] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.pricing[data-v-0481cec3] {\n  padding-top: 250px;\n  padding-bottom: 120px;\n}\n.page-title.center[data-v-0481cec3] {\n  text-align: center;\n}\n.page-title[data-v-0481cec3] {\n  position: relative;\n  z-index: 1;\n}\n.pricing-tables[data-v-0481cec3] {\n  margin-top: 50px;\n  margin-bottom: 60px;\n  position: relative;\n  z-index: 1;\n}\n.plans-wrapper[data-v-0481cec3] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n.plans-wrapper[data-v-0481cec3] {\n  box-shadow: 0 7px 20px 5px rgba(26, 36, 55, 0.05);\n  border-radius: 8px;\n  background: white;\n}\n.plan[data-v-0481cec3] {\n  text-align: center;\n  flex: 0 0 33%;\n  padding: 55px 25px 75px;\n}\n.plan .plan-features[data-v-0481cec3] {\n  margin: 55px 0;\n}\n.plan .plan-header .title[data-v-0481cec3] {\n  font-size: 1.375em;\n  font-weight: 800;\n  padding-top: 10px;\n}\n.plan .plan-header .description[data-v-0481cec3] {\n  font-size: 0.875em;\n  font-weight: 600;\n}\n.plan .plan-features .storage-size[data-v-0481cec3] {\n  font-size: 3em;\n  font-weight: 900;\n  line-height: 1.1;\n}\n.plan .plan-features .storage-description[data-v-0481cec3] {\n  display: block;\n  font-size: 0.9375em;\n  font-weight: 800;\n}\n.plan .plan-footer .price[data-v-0481cec3] {\n  color: #00BC7E;\n  font-size: 1.125em;\n  display: block;\n  padding-top: 5px;\n}\n.plan[data-v-0481cec3] {\n  text-align: center;\n  flex: 0 0 33%;\n  padding: 55px 25px 75px;\n}\n.sign-up-button[data-v-0481cec3] {\n  padding-top: 10px;\n  display: block;\n}\n.page-title.center .description[data-v-0481cec3] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-title .description[data-v-0481cec3] {\n  max-width: 580px;\n  font-size: 1.25em;\n  font-weight: 500;\n  line-height: 1.6;\n  margin-bottom: 30px;\n}\n.button.outline[data-v-0481cec3] {\n  border: 2px solid #1B2539;\n}\n.button.outline[data-v-0481cec3] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-0481cec3] {\n  color: #1B2539;\n}\n.button .text-label[data-v-0481cec3] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button.outline:hover .text-label[data-v-0481cec3] {\n  color: #00BC7E;\n}\n.button[data-v-0481cec3] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n  margin-top: 12px;\n}\n.button.outline[data-v-0481cec3] {\n  border: 2px solid #1B2539;\n}\n.button .icon[data-v-0481cec3] {\n  margin-left: 12px;\n  font-size: 1em;\n}\nsvg:not(:root).svg-inline--fa[data-v-0481cec3] {\n  overflow: visible;\n}\n.svg-inline--fa.fa-w-10[data-v-0481cec3] {\n  width: 0.625em;\n}\n.svg-inline--fa[data-v-0481cec3] {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-57903d83] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-57903d83] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-57903d83] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-57903d83] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-57903d83] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-57903d83] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-57903d83] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-57903d83] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-57903d83]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-57903d83] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-57903d83] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-57903d83] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-57903d83] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-57903d83] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-57903d83] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-57903d83] {\n  margin-left: 20px;\n}\n.error-message[data-v-57903d83] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-57903d83] {\n  width: 100%;\n}\ntextarea[data-v-57903d83],\ninput[type=\"password\"][data-v-57903d83],\ninput[type=\"text\"][data-v-57903d83],\ninput[type=\"number\"][data-v-57903d83],\ninput[type=\"email\"][data-v-57903d83] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-57903d83],\ninput[type=\"password\"].is-error[data-v-57903d83],\ninput[type=\"text\"].is-error[data-v-57903d83],\ninput[type=\"number\"].is-error[data-v-57903d83],\ninput[type=\"email\"].is-error[data-v-57903d83] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-57903d83]::-moz-placeholder, input[type=\"password\"][data-v-57903d83]::-moz-placeholder, input[type=\"text\"][data-v-57903d83]::-moz-placeholder, input[type=\"number\"][data-v-57903d83]::-moz-placeholder, input[type=\"email\"][data-v-57903d83]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-57903d83]:-ms-input-placeholder, input[type=\"password\"][data-v-57903d83]:-ms-input-placeholder, input[type=\"text\"][data-v-57903d83]:-ms-input-placeholder, input[type=\"number\"][data-v-57903d83]:-ms-input-placeholder, input[type=\"email\"][data-v-57903d83]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-57903d83]::placeholder,\ninput[type=\"password\"][data-v-57903d83]::placeholder,\ninput[type=\"text\"][data-v-57903d83]::placeholder,\ninput[type=\"number\"][data-v-57903d83]::placeholder,\ninput[type=\"email\"][data-v-57903d83]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-57903d83]:focus,\ninput[type=\"password\"][data-v-57903d83]:focus,\ninput[type=\"text\"][data-v-57903d83]:focus,\ninput[type=\"number\"][data-v-57903d83]:focus,\ninput[type=\"email\"][data-v-57903d83]:focus {\n  border-color: #00bc7e;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-57903d83],\ninput[type=\"password\"][disabled][data-v-57903d83],\ninput[type=\"text\"][disabled][data-v-57903d83],\ninput[type=\"number\"][disabled][data-v-57903d83],\ninput[type=\"email\"][disabled][data-v-57903d83] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-57903d83] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-57903d83], .additional-link a[data-v-57903d83] {\n  color: #00bc7e;\n  cursor: pointer;\n}\n.additional-link b[data-v-57903d83]:hover, .additional-link a[data-v-57903d83]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-57903d83] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-57903d83] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-57903d83], .form textarea[data-v-57903d83] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-57903d83] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-57903d83] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-57903d83] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-57903d83] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-57903d83] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-57903d83] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-57903d83] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-57903d83] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-57903d83],\n  input[type=\"password\"][data-v-57903d83],\n  input[type=\"number\"][data-v-57903d83],\n  input[type=\"text\"][data-v-57903d83],\n  input[type=\"email\"][data-v-57903d83] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-57903d83] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-57903d83] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-57903d83] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-57903d83] {\n    color: #bec6cf;\n}\ntextarea[data-v-57903d83],\n  input[type=\"password\"][data-v-57903d83],\n  input[type=\"text\"][data-v-57903d83],\n  input[type=\"number\"][data-v-57903d83],\n  input[type=\"email\"][data-v-57903d83] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-57903d83]::-moz-placeholder, input[type=\"password\"][data-v-57903d83]::-moz-placeholder, input[type=\"text\"][data-v-57903d83]::-moz-placeholder, input[type=\"number\"][data-v-57903d83]::-moz-placeholder, input[type=\"email\"][data-v-57903d83]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-57903d83]:-ms-input-placeholder, input[type=\"password\"][data-v-57903d83]:-ms-input-placeholder, input[type=\"text\"][data-v-57903d83]:-ms-input-placeholder, input[type=\"number\"][data-v-57903d83]:-ms-input-placeholder, input[type=\"email\"][data-v-57903d83]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-57903d83]::placeholder,\n  input[type=\"password\"][data-v-57903d83]::placeholder,\n  input[type=\"text\"][data-v-57903d83]::placeholder,\n  input[type=\"number\"][data-v-57903d83]::placeholder,\n  input[type=\"email\"][data-v-57903d83]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-57903d83],\n  input[type=\"password\"][disabled][data-v-57903d83],\n  input[type=\"text\"][disabled][data-v-57903d83],\n  input[type=\"number\"][disabled][data-v-57903d83],\n  input[type=\"email\"][disabled][data-v-57903d83] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.plan-title[data-v-57903d83] {\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto 80px;\n}\n.plan-title path[data-v-57903d83], .plan-title line[data-v-57903d83], .plan-title polyline[data-v-57903d83], .plan-title rect[data-v-57903d83], .plan-title circle[data-v-57903d83] {\n  color: #00bc7e;\n}\n.plan-title h1[data-v-57903d83] {\n  font-size: 2.375em;\n  font-weight: 800;\n  margin-bottom: 5px;\n}\n.plan-title h2[data-v-57903d83] {\n  font-size: 1.25em;\n  font-weight: 500;\n}\n@media (prefers-color-scheme: dark) {\n.plan-title h1[data-v-57903d83] {\n    color: #bec6cf;\n}\n.plan-title h2[data-v-57903d83] {\n    color: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true& ***!
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
  return _c("div", { staticClass: "page-header" }, [
    _vm.canBack
      ? _c(
          "div",
          {
            staticClass: "go-back",
            on: {
              click: function($event) {
                return _vm.$router.back()
              }
            }
          },
          [_c("chevron-left-icon", { attrs: { size: "17" } })],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _c("h1", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=template&id=0481cec3&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=template&id=0481cec3&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.isLoading,
            expression: "! isLoading"
          }
        ],
        staticClass: "large-width center-page",
        attrs: { id: "page-content" }
      },
      [
        _c("MobileHeader", {
          attrs: { title: _vm.$router.currentRoute.meta.title }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-page" },
          [
            _c("PlanPricingTables", {
              on: {
                load: _vm.onLoadPricingTables,
                "selected-plan": _vm.onSelectTable
              }
            })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=template&id=57903d83&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=template&id=57903d83&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.isLoading,
            expression: "! isLoading"
          }
        ],
        staticClass: "large-width center-page",
        attrs: { id: "page-content" }
      },
      [
        _c("MobileHeader", {
          attrs: { title: _vm.$router.currentRoute.meta.title }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-page" },
          [
            _c(
              "div",
              { staticClass: "plan-title" },
              [
                _c("cloud-icon", {
                  staticClass: "title-icon",
                  attrs: { size: "42" }
                }),
                _vm._v(" "),
                _c("h1", [_vm._v(_vm._s(_vm.$t("page_pricing_tables.title")))]),
                _vm._v(" "),
                _c("h2", [
                  _vm._v(_vm._s(_vm.$t("page_pricing_tables.description")))
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("PlanPricingTables", {
              on: {
                load: _vm.onLoadPricingTables,
                "selected-plan": _vm.onSelectTable
              }
            })
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

/***/ "./resources/js/components/Others/PageHeader.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Others/PageHeader.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true& */ "./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true&");
/* harmony import */ var _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& */ "./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c80dd26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/PageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradeKomytPlan.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradeKomytPlan.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpgradeKomytPlan_vue_vue_type_template_id_0481cec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpgradeKomytPlan.vue?vue&type=template&id=0481cec3&scoped=true& */ "./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=template&id=0481cec3&scoped=true&");
/* harmony import */ var _UpgradeKomytPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpgradeKomytPlan.vue?vue&type=script&lang=js& */ "./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpgradeKomytPlan_vue_vue_type_style_index_0_id_0481cec3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true& */ "./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpgradeKomytPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpgradeKomytPlan_vue_vue_type_template_id_0481cec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpgradeKomytPlan_vue_vue_type_template_id_0481cec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0481cec3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Upgrade/UpgradeKomytPlan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeKomytPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeKomytPlan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeKomytPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeKomytPlan_vue_vue_type_style_index_0_id_0481cec3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=style&index=0&id=0481cec3&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeKomytPlan_vue_vue_type_style_index_0_id_0481cec3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeKomytPlan_vue_vue_type_style_index_0_id_0481cec3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeKomytPlan_vue_vue_type_style_index_0_id_0481cec3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeKomytPlan_vue_vue_type_style_index_0_id_0481cec3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=template&id=0481cec3&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=template&id=0481cec3&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeKomytPlan_vue_vue_type_template_id_0481cec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeKomytPlan.vue?vue&type=template&id=0481cec3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeKomytPlan.vue?vue&type=template&id=0481cec3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeKomytPlan_vue_vue_type_template_id_0481cec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeKomytPlan_vue_vue_type_template_id_0481cec3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradePlan.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradePlan.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpgradePlan_vue_vue_type_template_id_57903d83_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpgradePlan.vue?vue&type=template&id=57903d83&scoped=true& */ "./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=template&id=57903d83&scoped=true&");
/* harmony import */ var _UpgradePlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpgradePlan.vue?vue&type=script&lang=js& */ "./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpgradePlan_vue_vue_type_style_index_0_id_57903d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true& */ "./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpgradePlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpgradePlan_vue_vue_type_template_id_57903d83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpgradePlan_vue_vue_type_template_id_57903d83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57903d83",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Upgrade/UpgradePlan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradePlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradePlan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradePlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradePlan_vue_vue_type_style_index_0_id_57903d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=style&index=0&id=57903d83&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradePlan_vue_vue_type_style_index_0_id_57903d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradePlan_vue_vue_type_style_index_0_id_57903d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradePlan_vue_vue_type_style_index_0_id_57903d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradePlan_vue_vue_type_style_index_0_id_57903d83_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=template&id=57903d83&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=template&id=57903d83&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradePlan_vue_vue_type_template_id_57903d83_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradePlan.vue?vue&type=template&id=57903d83&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradePlan.vue?vue&type=template&id=57903d83&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradePlan_vue_vue_type_template_id_57903d83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradePlan_vue_vue_type_template_id_57903d83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);