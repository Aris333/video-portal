(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/files~chunks/shared-files~chunks/shared-page~chunks/trash"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bus */ "./resources/js/bus.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ButtonBase',
  props: ['buttonStyle'],
  data: function data() {
    return {
      files: undefined
    };
  },
  methods: {
    // emmitFiles(e) {
    //     this.$uploadFiles(e.target.files)
    // }
    emmitFiles: function emmitFiles(e) {
      this.uploadFiles(e.target.files);
    },
    uploadFiles: function () {
      var _uploadFiles = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(files) {
        var _this = this;

        var fps, fileinput, output, onChangeFile;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(files.length == 0)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (this.checkFileMimetype(files)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                //this.handleUploading(files, undefined,undefined)
                // Prevent submit empty files
                fps = 0;
                fileinput = files[0];
                output = 0;

                onChangeFile = function onChangeFile(mediainfo) {
                  var file = fileinput;

                  if (file) {
                    // output.value = 'Working…'
                    var getSize = function getSize() {
                      return file.size;
                    };

                    var readChunk = function readChunk(chunkSize, offset) {
                      return new Promise(function (resolve, reject) {
                        var reader = new FileReader();

                        reader.onload = function (event) {
                          if (event.target.error) {
                            reject(event.target.error);
                          }

                          resolve(new Uint8Array(event.target.result));
                        };

                        reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize));
                      });
                    };

                    mediainfo.analyzeData(getSize, readChunk).then(function (result) {
                     // console.log('media ;;;;;;;;', result.media.track[1].FrameRate);
                      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('UPDATE_FPS', result.media.track[1].FrameRate);
                      var fps = result.media.track[1].FrameRate;

                      _this.handleUploading(files, undefined, result.media.track[1].FrameRate);
                    })["catch"](function (error) {
                      console.error(error);
                    });
                  }
                };

                MediaInfo({
                  format: 'object'
                }, function (mediainfo) {
                  onChangeFile(mediainfo);
                  console.log(mediainfo);
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function uploadFiles(_x) {
        return _uploadFiles.apply(this, arguments);
      }

      return uploadFiles;
    }(),
    checkFileMimetype: function checkFileMimetype(files) {
      var validated = true;
      var mimetypesBlacklist = this.$store.getters.config.mimetypesBlacklist;

      for (var i = 0; i < files.length; i++) {
        var fileType = files[i].type.split('/');

        if (!fileType[0]) {
          fileType[1] = _.last(files[i].name.split('.'));
        }

        if (mimetypesBlacklist.includes(fileType[1])) {
          validated = false;
          _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$emit('alert:open', {
            emoji: '😬😬😬',
            title: i18n.t('popup_mimetypes_blacklist.title'),
            message: i18n.t('popup_mimetypes_blacklist.message', {
              mimetype: fileType[1]
            })
          });
        } else {
          validated = true;
        }
      }

      return validated;
    },
    handleUploading: function () {
      var _handleUploading = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(files, parent_id, fps) {
        var _this2 = this;

        var fileBuffer, fileSucceed, parentFolder, rootFolder, _loop;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('file', files[0]);
                console.log('file', fps);
                fileBuffer = []; // Append the file list to fileBuffer array

                Array.prototype.push.apply(fileBuffer, files);
                fileSucceed = 0; // Update files count in progressbar

                this.$store.commit('UPDATE_FILE_COUNT_PROGRESS', {
                  current: fileSucceed,
                  total: files.length
                }); // Reset upload progress to 0

                this.$store.commit('UPLOADING_FILE_PROGRESS', 0); // Get parent id

                parentFolder = this.$store.getters.currentFolder ? this.$store.getters.currentFolder.unique_id : 0;
                rootFolder = parent_id ? parent_id : parentFolder; // Upload files

                _loop = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop() {
                  var file, chunks, size, chunksCeil, i, formData, uploadedSize, isNotGeneralError, striped_name, filename, _loop2;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          file = fileBuffer.shift(), chunks = []; // Calculate ceils

                          size = _this2.$store.getters.config.chunkSize, chunksCeil = Math.ceil(file.size / size); // Create chunks

                          for (i = 0; i < chunksCeil; i++) {
                            chunks.push(file.slice(i * size, Math.min(i * size + size, file.size), file.type));
                          } // Set Data


                          formData = new FormData(), uploadedSize = 0, isNotGeneralError = true, striped_name = file.name.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, ''), filename = Array(16).fill(0).map(function (x) {
                            return Math.random().toString(36).charAt(2);
                          }).join('') + '-' + striped_name + '.part';
                          _loop2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop2() {
                            var isLast, chunk, attempts;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    isLast = chunks.length === 1, chunk = chunks.shift(), attempts = 0; //        console.log('fps',fps)
                                    // Set form data

                                    formData.set('file', chunk, filename);
                                    formData.set('parent_id', rootFolder);
                                    formData.set('is_last', isLast);
                                    formData.set('fps', fps); // Upload chunks

                                  case 5:
                                    _context2.next = 7;
                                    return _this2.$store.dispatch('uploadFiles', {
                                      form: formData,
                                      fileSize: file.size,
                                      totalUploadedSize: uploadedSize
                                    }).then(function () {
                                      uploadedSize = uploadedSize + chunk.size;
                                    })["catch"](function (error) {
                                      // Count attempts
                                      attempts++; // Break uploading proccess

                                      if (error.response.status === 500) isNotGeneralError = false; //Break if mimetype of file is in blacklist

                                      if (error.response.status === 415) isNotGeneralError = false; // Show Error

                                      if (attempts === 3) _this2.isSomethingWrong();
                                    });

                                  case 7:
                                    if (isNotGeneralError && attempts !== 0 && attempts !== 3) {
                                      _context2.next = 5;
                                      break;
                                    }

                                  case 8:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _loop2);
                          });

                        case 5:
                          return _context3.delegateYield(_loop2(), "t0", 6);

                        case 6:
                          if (isNotGeneralError && chunks.length !== 0) {
                            _context3.next = 5;
                            break;
                          }

                        case 7:
                          fileSucceed++; // Progress file log

                          _this2.$store.commit('UPDATE_FILE_COUNT_PROGRESS', {
                            current: fileSucceed,
                            total: files.length
                          });

                        case 9:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _loop);
                });

              case 10:
                return _context4.delegateYield(_loop(), "t0", 11);

              case 11:
                if (fileBuffer.length !== 0) {
                  _context4.next = 10;
                  break;
                }

              case 12:
                this.$store.commit('UPDATE_FILE_COUNT_PROGRESS', undefined);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleUploading(_x2, _x3, _x4) {
        return _handleUploading.apply(this, arguments);
      }

      return handleUploading;
    }(),
    isSomethingWrong: function isSomethingWrong() {
      _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$emit('alert:open', {
        title: this.$t('popup_error.title'),
        message: this.$t('popup_error.message')
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'ContextMenu',
  components: {
    CornerDownRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CornerDownRightIcon"],
    DownloadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["DownloadCloudIcon"],
    FolderPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["FolderPlusIcon"],
    LifeBuoyIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["LifeBuoyIcon"],
    Trash2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["Trash2Icon"],
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["Edit2Icon"],
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["TrashIcon"],
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["LinkIcon"],
    StarIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["StarIcon"],
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["EyeIcon"],
    CopyIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CopyIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['user'])), {}, {
    favourites: function favourites() {
      return this.user.relationships.favourites.data.attributes.folders;
    },
    isFolder: function isFolder() {
      return this.item && this.item.type === 'folder';
    },
    isFile: function isFile() {
      return this.item && this.item.type !== 'folder' && this.item && this.item.type !== 'image';
    },
    isImage: function isImage() {
      return this.item && this.item.type === 'image';
    },
    isInFavourites: function isInFavourites() {
      var _this = this;

      return this.favourites.find(function (el) {
        return el.unique_id == _this.item.unique_id;
      });
    }
  }),
  data: function data() {
    return {
      showFromPreview: false,
      item: undefined,
      isVisible: false,
      positionX: 0,
      positionY: 0
    };
  },
  methods: {
    renameItem: function renameItem() {
      var itemName = prompt(this.$t('popup_rename.title'), this.item.name);

      if (itemName && itemName !== '') {
        var item = {
          unique_id: this.item.unique_id,
          type: this.item.type,
          name: itemName
        };
        this.$store.dispatch('renameItem', item); // Change item name if is mobile device or prompted

        if (this.$isMobile()) {
          _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$emit('change:name', item);
        }
      }
    },
    moveItem: function moveItem() {
      // Open move item popup
      _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$emit('popup:open', {
        name: 'move',
        item: this.item
      });
    },
    copyItem: function copyItem() {
      // Open move item popup
      _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$emit('popup:open', {
        name: 'copy',
        item: this.item
      });
    },
    shareItem: function shareItem() {
      if (this.item.shared) {
        // Open share item popup
        _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$emit('popup:open', {
          name: 'share-edit',
          item: this.item
        });
      } else {
        // Open share item popup
        _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$emit('popup:open', {
          name: 'share-create',
          item: this.item
        });
      }
    },
    addToFavourites: function addToFavourites() {
      var _this2 = this;

      // Check if folder is in favourites and then add/remove from favourites
      if (this.favourites && !this.favourites.find(function (el) {
        return el.unique_id == _this2.item.unique_id;
      })) {
        this.$store.dispatch('addToFavourites', this.item);
      } else {
        this.$store.dispatch('removeFromFavourites', this.item);
      }
    },
    downloadItem: function downloadItem() {
      // console.log(this.item)
      // Download file
      if (this.item.type == 'folder') {
        this.$store.dispatch('downloadFolderImages', this.item); // this.$downloadFile(
        //     this.item.file_url,
        //     this.item.name + '.' + this.item.mimetype
        // )
      } else {
        this.$downloadFile(this.item.file_url, this.item.name + '.' + this.item.mimetype);
      }
    },
    ItemDetail: function ItemDetail() {
      // Dispatch load file info detail
      this.$store.commit('GET_FILEINFO_DETAIL', this.item); // Show panel if is not open

      this.$store.dispatch('fileInfoToggle', true);
    },
    deleteItem: function deleteItem() {
      // Dispatch remove item
      this.$store.dispatch('deleteItem', this.item);
    },
    createFolder: function createFolder() {
      // Create folder
      this.$createFolder(this.$t('popup_create_folder.folder_default_name'));
    },
    closeAndResetContextMenu: function closeAndResetContextMenu() {
      // Close context menu
      this.isVisible = false; // Reset item container

      this.item = undefined;
    },
    showFolderActionsMenu: function showFolderActionsMenu() {
      var container = document.getElementById('folder-actions');
      this.positionX = container.offsetLeft + 16;
      this.positionY = container.offsetTop + 30; // Show context menu

      this.isVisible = true;
    },
    showContextMenu: function showContextMenu(event) {
      var parent = document.getElementById('menu-list');
      var nodesSameClass = parent.getElementsByClassName('menu-option');
      var VerticalOffsetArea = nodesSameClass.length * 50;
      var HorizontalOffsetArea = 190;
      var container = document.getElementById('files-view');
      var offset = container.getClientRects()[0];
      var x = event.clientX - offset.left;
      var y = event.clientY - offset.top; // Set position Y

      if (container.offsetHeight - y < VerticalOffsetArea) {
        this.positionY = y - VerticalOffsetArea;
      } else {
        this.positionY = y;
      } // Set position X


      if (container.offsetWidth - x < HorizontalOffsetArea) {
        this.positionX = x - HorizontalOffsetArea;
      } else {
        this.positionX = x;
      } // Show context menu


      this.isVisible = true;
    },
    showFilePreviewMenu: function showFilePreviewMenu() {
      var container = document.getElementById('fast-preview-menu');

      if (container) {
        this.positionX = container.offsetLeft + 16;
        this.positionY = container.offsetTop + 51;
      }
    }
  },
  watch: {
    item: function item(newValue, oldValue) {
      if (oldValue != undefined && this.showFromPreview) {
        this.showFromPreview = false;
      }
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$on('actualShowingImage:ContextMenu', function (item) {
      _this3.item = item;
    });
  },
  created: function created() {
    var _this4 = this;

    _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$on('showContextMenuPreview:show', function (item) {
      if (!_this4.showFromPreview) {
        _this4.item = item;
        _this4.showFromPreview = true;

        _this4.showFilePreviewMenu();
      } else if (_this4.showFromPreview) {
        _this4.showFromPreview = false;
        _this4.item = undefined;
      }
    });
    _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$on('showContextMenuPreview:hide', function () {
      _this4.isVisible = false;
      _this4.showFromPreview = false;
      _this4.item = undefined;
    });
    _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$on('contextMenu:show', function (event, item) {
      // Store item
      _this4.item = item; // Show context menu

      setTimeout(function () {
        return _this4.showContextMenu(event, item);
      }, 10);
    });
    _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$on('contextMenu:hide', function () {
      return _this4.closeAndResetContextMenu();
    });
    _bus__WEBPACK_IMPORTED_MODULE_2__["events"].$on('folder:actions', function (folder) {
      // Store item
      _this4.item = folder;
      if (_this4.isVisible) _this4.isVisible = false;else _this4.showFolderActionsMenu();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_ToolbarButtonUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/ToolbarButtonUpload */ "./resources/js/components/FilesView/ToolbarButtonUpload.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_FilesView_UploadProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/UploadProgress */ "./resources/js/components/FilesView/UploadProgress.vue");
/* harmony import */ var _components_FilesView_ToolbarButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/ToolbarButton */ "./resources/js/components/FilesView/ToolbarButton.vue");
/* harmony import */ var _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilesView/SearchBar */ "./resources/js/components/FilesView/SearchBar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ToolBar",
  components: {
    ToolbarButtonUpload: _components_FilesView_ToolbarButtonUpload__WEBPACK_IMPORTED_MODULE_0__["default"],
    MoreHorizontalIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["MoreHorizontalIcon"],
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ChevronLeftIcon"],
    UploadProgress: _components_FilesView_UploadProgress__WEBPACK_IMPORTED_MODULE_2__["default"],
    ToolbarButton: _components_FilesView_ToolbarButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    SearchBar: _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_5__["mapGetters"])(["FilePreviewType", "fileInfoVisible", "fileInfoDetail", "currentFolder", "browseHistory", "homeDirectory"])), {}, {
    hasCapacity: function hasCapacity() {
      // Check if set storage limitation
      if (!this.$store.getters.config.storageLimit) return true; // Check if is loaded user

      if (!this.$store.getters.user) return true; // Check if user has storage

      return this.$store.getters.user.relationships.storage.data.attributes.used <= 100;
    },
    directoryName: function directoryName() {
      return this.currentFolder ? this.currentFolder.name : this.homeDirectory.name;
    },
    preview: function preview() {
      return this.FilePreviewType === "list" ? "th" : "th-list";
    },
    canCreateFolderInView: function canCreateFolderInView() {
      return !this.$isThisLocation(["base", "public"]);
    },
    canDeleteInView: function canDeleteInView() {
      return !this.$isThisLocation(["trash", "trash-root", "base", "participant_uploads", "latest", "shared", "public"]);
    },
    canUploadInView: function canUploadInView() {
      return !this.$isThisLocation(["base", "public"]);
    },
    canMoveInView: function canMoveInView() {
      return !this.$isThisLocation(["base", "participant_uploads", "latest", "shared", "public"]);
    },
    canShareInView: function canShareInView() {
      return !this.$isThisLocation(["base", "participant_uploads", "latest", "shared", "public"]);
    }
  }),
  methods: {
    goBack: function goBack() {
      // Get previous folder
      var previousFolder = Object(lodash__WEBPACK_IMPORTED_MODULE_7__["last"])(this.browseHistory);
      if (!previousFolder) return;

      if (previousFolder.location === "trash-root") {
        this.$store.dispatch("getTrash");
      } else if (previousFolder.location === "shared") {
        this.$store.dispatch("getShared");
      } else {
        if (this.$isThisLocation("public")) {
          this.$store.dispatch("browseShared", [{
            folder: previousFolder,
            back: true,
            init: false
          }]);
        } else {
          this.$store.dispatch("getFolder", [{
            folder: previousFolder,
            back: true,
            init: false
          }]);
        }
      }
    },
    folderActions: function folderActions() {
      _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$emit("folder:actions", this.currentFolder);
    },
    deleteItem: function deleteItem() {
      _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$emit("items:delete");
    },
    createFolder: function createFolder() {
      this.$createFolder();
    },
    moveItem: function moveItem() {
      _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$emit("popup:open", {
        name: "move",
        item: this.fileInfoDetail
      });
    },
    shareItem: function shareItem() {
      if (this.fileInfoDetail) {
        //ADD BY M
        if (this.fileInfoDetail.shared) {
          _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$emit("popup:open", {
            name: "share-edit",
            item: this.fileInfoDetail
          });
        } else {
          _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$emit("popup:open", {
            name: "share-create",
            item: this.fileInfoDetail
          });
        }
      }
    },
    AddCompany: function AddCompany() {
      _bus__WEBPACK_IMPORTED_MODULE_6__["events"].$emit("popup:open", {
        name: "add-company",
        item: this.fileInfoDetail
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js& ***!
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
  name: 'EmptyMessage',
  props: ['icon', 'message'],
  components: {
    EyeOffIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["EyeOffIcon"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_ButtonUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/ButtonUpload */ "./resources/js/components/FilesView/ButtonUpload.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'EmptyPage',
  props: ['title', 'description'],
  components: {
    ButtonUpload: _components_FilesView_ButtonUpload__WEBPACK_IMPORTED_MODULE_0__["default"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['data', 'isLoading', 'currentFolder'])), {}, {
    isEmpty: function isEmpty() {
      return this.data && this.data.length == 0;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_MobileToolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/MobileToolbar */ "./resources/js/components/FilesView/MobileToolbar.vue");
/* harmony import */ var _components_FilesView_MobileActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/MobileActions */ "./resources/js/components/FilesView/MobileActions.vue");
/* harmony import */ var _components_FilesView_FileInfoPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/FileInfoPanel */ "./resources/js/components/FilesView/FileInfoPanel.vue");
/* harmony import */ var _components_FilesView_FileItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/FileItemList */ "./resources/js/components/FilesView/FileItemList.vue");
/* harmony import */ var _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilesView/FileItemGrid */ "./resources/js/components/FilesView/FileItemGrid.vue");
/* harmony import */ var _components_FilesView_EmptyMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FilesView/EmptyMessage */ "./resources/js/components/FilesView/EmptyMessage.vue");
/* harmony import */ var _components_FilesView_EmptyPage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FilesView/EmptyPage */ "./resources/js/components/FilesView/EmptyPage.vue");
/* harmony import */ var _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/FilesView/SearchBar */ "./resources/js/components/FilesView/SearchBar.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
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
//
//
//
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
  name: 'FilesContainer',
  components: {
    MobileToolbar: _components_FilesView_MobileToolbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    MobileActions: _components_FilesView_MobileActions__WEBPACK_IMPORTED_MODULE_1__["default"],
    FileInfoPanel: _components_FilesView_FileInfoPanel__WEBPACK_IMPORTED_MODULE_2__["default"],
    FileItemList: _components_FilesView_FileItemList__WEBPACK_IMPORTED_MODULE_3__["default"],
    FileItemGrid: _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_4__["default"],
    EmptyMessage: _components_FilesView_EmptyMessage__WEBPACK_IMPORTED_MODULE_5__["default"],
    SearchBar: _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_7__["default"],
    EmptyPage: _components_FilesView_EmptyPage__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])(['uploadingFilesCount', 'fileInfoVisible', 'fileInfoDetail', 'currentFolder', 'FilePreviewType', 'isSearching', 'isLoading', 'data'])), {}, {
    isGrid: function isGrid() {
      return this.FilePreviewType === 'grid';
    },
    isList: function isList() {
      return this.FilePreviewType === 'list';
    },
    isEmpty: function isEmpty() {
      return this.data.length == 0;
    }
  }),
  data: function data() {
    return {
      draggingId: undefined,
      isDragging: false
    };
  },
  methods: {
    dropUpload: function dropUpload(event) {
      // Upload external file
      this.$uploadExternalFiles(event, this.currentFolder.unique_id);
      this.isDragging = false;
    },
    dragEnter: function dragEnter() {
      this.isDragging = true;
    },
    dragLeave: function dragLeave() {
      this.isDragging = false;
    },
    dragStart: function dragStart(data) {
      _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('dragstart', data); // Store dragged folder

      this.draggingId = data;
    },
    dragFinish: function dragFinish(data, event) {
      if (event.dataTransfer.items.length == 0) {
        // Prevent to drop on file or image
        if (data.type !== 'folder' || this.draggingId === data) return; // Move folder to new parent

        this.$store.dispatch('moveItem', [this.draggingId, data]);
      } else {
        // Get unique_id of current folder
        var unique_id = data.type !== 'folder' ? this.currentFolder.unique_id : data.unique_id; // Upload external file

        this.$uploadExternalFiles(event, unique_id);
      }

      this.isDragging = false;
    },
    contextMenu: function contextMenu(event, item) {
      _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('contextMenu:show', event, item);
    },
    filesContainerClick: function filesContainerClick() {
      // Deselect clicked item
      _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('fileItem:deselect'); // Hide context menu if is opened

      _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('contextMenu:hide');
    }
  },
  created: function created() {
    var _this = this;

    _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$on('fileItem:deselect', function () {
      return _this.$store.commit('CLEAR_FILEINFO_DETAIL');
    });
    _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$on('scrollTop', function () {
      // Scroll top
      var container = document.getElementsByClassName('files-container')[0];
      if (container) container.scrollTop = 0;
    }); // On items delete

    _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$on('items:delete', function () {
      _this.$store.dispatch('deleteItem', _this.fileInfoDetail);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_FilesView_ImageMetaData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/ImageMetaData */ "./resources/js/components/FilesView/ImageMetaData.vue");
/* harmony import */ var _components_FilesView_FilePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/FilePreview */ "./resources/js/components/FilesView/FilePreview.vue");
/* harmony import */ var _components_Others_Forms_CopyInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/Forms/CopyInput */ "./resources/js/components/Others/Forms/CopyInput.vue");
/* harmony import */ var _components_Others_ListInfoItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/ListInfoItem */ "./resources/js/components/Others/ListInfoItem.vue");
/* harmony import */ var _components_Others_ListInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Others/ListInfo */ "./resources/js/components/Others/ListInfo.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
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








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FileInfoPanel',
  components: {
    ImageMetaData: _components_FilesView_ImageMetaData__WEBPACK_IMPORTED_MODULE_1__["default"],
    ListInfoItem: _components_Others_ListInfoItem__WEBPACK_IMPORTED_MODULE_4__["default"],
    ListInfo: _components_Others_ListInfo__WEBPACK_IMPORTED_MODULE_5__["default"],
    FilePreview: _components_FilesView_FilePreview__WEBPACK_IMPORTED_MODULE_2__["default"],
    FolderIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["FolderIcon"],
    UnlockIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UnlockIcon"],
    VideoIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["VideoIcon"],
    CopyInput: _components_Others_Forms_CopyInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    ImageIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ImageIcon"],
    FileIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["FileIcon"],
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["Edit2Icon"],
    LockIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["LockIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])(['fileInfoDetail', 'permissionOptions'])), {}, {
    fileType: function fileType() {
      return this.fileInfoDetail.type;
    },
    canShowMetaData: function canShowMetaData() {
      return this.fileInfoDetail.metadata && this.fileInfoDetail.metadata.ExifImageWidth;
    },
    sharedInfo: function sharedInfo() {
      var _this = this;

      // Get permission title
      var title = this.permissionOptions.find(function (option) {
        return option.value === _this.fileInfoDetail.shared.permission;
      });
      return title ? title.label : this.$t('shared.can_download');
    },
    sharedIcon: function sharedIcon() {
      switch (this.fileInfoDetail.shared.permission) {
        case 'editor':
          return 'user-edit';
          break;

        case 'visitor':
          return 'user';
          break;

        default:
          return 'download';
      }
    },
    isLocked: function isLocked() {
      return this.fileInfoDetail.shared["protected"];
    }
  }),
  methods: {
    shareItemOptions: function shareItemOptions() {
      // Open share item popup
      _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit('popup:open', {
        name: 'share-edit',
        item: this.fileInfoDetail
      });
    },
    moveItem: function moveItem() {
      // Move item fire popup
      _bus__WEBPACK_IMPORTED_MODULE_7__["events"].$emit('popup:open', {
        name: 'move',
        item: this.fileInfoDetail
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
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
//
//
//
//
//
//
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
  name: 'FileItemGrid',
  props: ['data'],
  components: {
    UserPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UserPlusIcon"],
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["LinkIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['FilePreviewType', 'sharedDetail'])), {}, {
    isFolder: function isFolder() {
      return this.data.type === 'folder';
    },
    isFile: function isFile() {
      return this.data.type !== 'folder' && this.data.type !== 'image';
    },
    isPdf: function isPdf() {
      return this.data.mimetype === 'pdf';
    },
    isImage: function isImage() {
      return this.data.type === 'image';
    },
    isVideo: function isVideo() {
      return this.data.type === 'video';
    },
    isAudio: function isAudio() {
      var mimetypes = ['mpeg', 'mp3', 'mp4', 'wan', 'flac'];
      return mimetypes.includes(this.data.mimetype) && this.data.type === 'audio';
    },
    canEditName: function canEditName() {
      return !this.$isMobile() && !this.$isThisLocation(['trash', 'trash-root']) && !this.$checkPermission('visitor') && !(this.sharedDetail && this.sharedDetail.type === 'file');
    },
    canShowMobileOptions: function canShowMobileOptions() {
      return !(this.sharedDetail && this.sharedDetail.type === 'file');
    },
    canDrag: function canDrag() {
      return !this.isDeleted && this.$checkPermission(['master', 'editor']);
    },
    timeStamp: function timeStamp() {
      return this.data.deleted_at ? this.$t('item_thumbnail.deleted_at', this.data.deleted_at) : this.data.created_at;
    },
    folderItems: function folderItems() {
      return this.data.deleted_at ? this.data.trashed_items : this.data.items;
    },
    isDeleted: function isDeleted() {
      return this.data.deleted_at ? true : false;
    }
  }),
  data: function data() {
    return {
      isClicked: false,
      area: false,
      itemName: undefined
    };
  },
  methods: {
    showItemActions: function showItemActions() {
      // Load file info detail
      this.$store.commit('GET_FILEINFO_DETAIL', this.data);
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('mobileMenu:show');
    },
    dragEnter: function dragEnter() {
      if (this.data.type !== 'folder') return;
      this.area = true;
    },
    dragLeave: function dragLeave() {
      this.area = false;
    },
    clickedItem: function clickedItem(e) {
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('contextMenu:hide');
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('fileItem:deselect'); // Set clicked item

      this.isClicked = true; // Open in mobile version on first click

      if (this.$isMobile() && this.isFolder) {
        // Go to folder
        if (this.$isThisLocation('public')) {
          this.$store.dispatch('browseShared', [{
            folder: this.data,
            back: false,
            init: false
          }]);
        } else {
          this.$store.dispatch('getFolder', [{
            folder: this.data,
            back: false,
            init: false
          }]);
        }
      }

      if (this.$isMobile()) {
        if (this.isImage || this.isVideo || this.isAudio) {
          _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('fileFullPreview:show');
        }
      } // Load file info detail


      this.$store.commit('GET_FILEINFO_DETAIL', this.data); // Get target classname

      var itemClass = e.target.className;
      if (['name', 'icon', 'file-link', 'file-icon-text'].includes(itemClass)) return;
    },
    goToItem: function goToItem() {
      if (this.isImage || this.isVideo || this.isAudio) {
        _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('fileFullPreview:show');
      } else if (this.isFile || !this.isFolder && !this.isPdf && !this.isVideo && !this.isAudio && !this.isImage) {
        this.$downloadFile(this.data.file_url, this.data.name + '.' + this.data.mimetype);
      } else if (this.isFolder) {
        if (this.$isThisLocation('public')) {
          this.$store.dispatch('browseShared', [{
            folder: this.data,
            back: false,
            init: false
          }]);
        } else {
          this.$store.dispatch('getFolder', [{
            folder: this.data,
            back: false,
            init: false
          }]);
        }
      }
    },
    renameItem: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function (e) {
      // Prevent submit empty string
      if (e.target.innerText.trim() === '') return;
      this.$store.dispatch('renameItem', {
        unique_id: this.data.unique_id,
        type: this.data.type,
        name: e.target.innerText
      });
    }, 300)
  },
  created: function created() {
    var _this = this;

    this.itemName = this.data.name;
    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('fileItem:deselect', function () {
      // Deselect file
      _this.isClicked = false;
    }); // Change item name

    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('change:name', function (item) {
      if (_this.data.unique_id == item.unique_id) _this.itemName = item.name;
    });
  },
  mounted: function mounted() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
      //    var innerBox = $('.position_test')
      // console.log(innerBox.offset())
      // (function($) {
      // 	$.fn.getPos = function(options) {
      //         var elm = $(this);
      // 	var el = document.getElementById("check");
      //             var viewportOffset = elm.getBoundingClientRect();
      //             console.log(viewportOffset);
      //             	};
      // })(jQuery);
      // var $innerBox = $('.position_test')
      // console.log(getBoundingClientRect())
      //    var test =  $(".position_test", this).getBoundingClientRect();
      //    console.log(test);
      // $('.position_test').getPos();
      (function ($) {
        $.fn.videoPreview = function (options) {
          // console.log(this);
          return $(this).each(function () {
            var elm = $(this);
            var frames = parseFloat(elm.data('frames'));
            var img = $('<img/>', {
              'src': elm.data('source')
            }).hide().css({
              'position': 'absolute',
              'cursor': 'pointer' // 'width':'1500px'

            }).appendTo(elm);
            var slider = $('<div/>').hide().css({
              'width': '2px',
              'height': '100%',
              'background': '#ddd',
              'position': 'absolute',
              'z-index': '1',
              'top': '0',
              'opacity': 0.6,
              'cursor': 'pointer'
            }).appendTo(elm);
            var width;

            function defaultPos() {
              // img.css('left', -width * frames / 4);
              img.css('left', 0);
            }

            img.load(function () {
              $(this).show(); // console.log(this.width);

              width = this.width / frames; // console.log(width);

              elm.css('width', width);
              defaultPos();
            }); // function getOffset( elm ) {
            //             var _x = 0;
            //             var _y = 0;
            //             while( elm && !isNaN( elm.offsetLeft ) && !isNaN( elm.offsetTop ) ) {
            //                 _x += elm.offsetLeft - elm.scrollLeft;
            //                 _y += elm.offsetTop - elm.scrollTop;
            //                 elm = elm.offsetParent;
            //             }
            //             return { top: _y, left: _x };
            //         }
            //    var rect = elm.getBoundingClientRect();
            //     console.log(rect.top, rect.right, rect.bottom, rect.left);
            // var rect = $(this).getBoundingClientRect();
            // console.log(rect);
            // var element = document.getElementsByClassName('video-preview')
            // var rect = element.getBoundingClientRect();
            // console.log(rect.top, rect.right, rect.bottom, rect.left);

            var offset = elm.offset(); // console.log(offset.left);

            elm.mousemove(function (e) {
              //  var x = getOffset(elm).left;
              // console.log(x);
              var left = e.clientX - (offset.left + 22); // console.log(left);

              slider.show().css('left', left - 1); // -1 because it's 2px width

              img.css('left', -Math.floor(left / width * frames) * width);
            }).mouseleave(function (e) {
              slider.hide();
              defaultPos();
            });
          });
        };
      })(jquery__WEBPACK_IMPORTED_MODULE_4___default.a);

      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.video-preview').videoPreview();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var merge_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! merge-images */ "./node_modules/merge-images/dist/index.es2015.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//





 // import photojoiner from "./photojoiner.js";


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FileItemList',
  props: ['data'],
  components: {
    UserPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UserPlusIcon"],
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["LinkIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['FilePreviewType'])), {}, {
    isFolder: function isFolder() {
      return this.data.type === 'folder';
    },
    isFile: function isFile() {
      return this.data.type !== 'folder' && this.data.type !== 'image';
    },
    isImage: function isImage() {
      return this.data.type === 'image';
    },
    isPdf: function isPdf() {
      return this.data.mimetype === 'pdf';
    },
    isVideo: function isVideo() {
      return this.data.type === 'video';
    },
    isAudio: function isAudio() {
      var mimetypes = ['mpeg', 'mp3', 'mp4', 'wan', 'flac'];
      return mimetypes.includes(this.data.mimetype) && this.data.type === 'audio';
    },
    canEditName: function canEditName() {
      return !this.$isMobile() && !this.$isThisLocation(['trash', 'trash-root']) && !this.$checkPermission('visitor') && !(this.sharedDetail && this.sharedDetail.type === 'file');
    },
    canDrag: function canDrag() {
      return !this.isDeleted && this.$checkPermission(['master', 'editor']);
    },
    timeStamp: function timeStamp() {
      return this.data.deleted_at ? this.$t('item_thumbnail.deleted_at', {
        time: this.data.deleted_at
      }) : this.data.created_at;
    },
    folderItems: function folderItems() {
      return this.data.deleted_at ? this.data.trashed_items : this.data.items;
    },
    isDeleted: function isDeleted() {
      return this.data.deleted_at ? true : false;
    }
  }),
  filters: {
    limitCharacters: function limitCharacters(str) {
      if (str.length > 3) {
        return str.substring(0, 3) + '...';
      } else {
        return str.substring(0, 3);
      }
    }
  },
  data: function data() {
    return {
      isClicked: false,
      area: false,
      itemName: undefined
    };
  },
  methods: {
    showItemActions: function showItemActions() {
      // Load file info detail
      this.$store.commit('GET_FILEINFO_DETAIL', this.data);
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('mobileMenu:show');
    },
    mouseLeave: function mouseLeave() {// console.log("no");
    },
    dragEnter: function dragEnter() {
      if (this.data.type !== 'folder') return;
      this.area = true;
    },
    dragLeave: function dragLeave() {
      this.area = false;
    },
    clickedItem: function clickedItem(e) {
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('contextMenu:hide');
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('fileItem:deselect'); // Set clicked item

      this.isClicked = true; // Open in mobile version on first click

      if (this.$isMobile() && this.isFolder) {
        // Go to folder
        if (this.$isThisLocation('public')) {
          this.$store.dispatch('browseShared', [{
            folder: this.data,
            back: false,
            init: false
          }]);
        } else {
          this.$store.dispatch('getFolder', [{
            folder: this.data,
            back: false,
            init: false
          }]);
        }
      }

      if (this.$isMobile()) {
        if (this.isImage || this.isVideo || this.isAudio) {
          _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('fileFullPreview:show');
        }
      } // Load file info detail


      this.$store.commit('GET_FILEINFO_DETAIL', this.data); // Get target classname

      var itemClass = e.target.className;
      if (['name', 'icon', 'file-link', 'file-icon-text'].includes(itemClass)) return;
    },
    goToItem: function goToItem() {
      if (this.isImage || this.isVideo || this.isAudio) {
        _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('fileFullPreview:show');
      } else if (this.isFile || !this.isFolder && !this.isPdf && !this.isVideo && !this.isAudio && !this.isImage) {
        this.$downloadFile(this.data.file_url, this.data.name + '.' + this.data.mimetype);
      } else if (this.isFolder) {
        if (this.$isThisLocation('public')) {
          this.$store.dispatch('browseShared', [{
            folder: this.data,
            back: false,
            init: false
          }]);
        } else {
          this.$store.dispatch('getFolder', [{
            folder: this.data,
            back: false,
            init: false
          }]);
        }
      }
    },
    renameItem: Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function (e) {
      // Prevent submit empty string
      if (e.target.innerText.trim() === '') return;
      this.$store.dispatch('renameItem', {
        unique_id: this.data.unique_id,
        type: this.data.type,
        name: e.target.innerText
      });
    }, 300)
  },
  created: function created() {
    var _this = this;

    this.itemName = this.data.name; // console.log(this.data.thumb_img);

    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('fileItem:deselect', function () {
      // Deselect file
      _this.isClicked = false;
    }); // Change item name

    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('change:name', function (item) {
      if (_this.data.unique_id == item.unique_id) _this.itemName = item.name;
    });
  },
  mounted: function mounted() {
    jquery__WEBPACK_IMPORTED_MODULE_4___default()(document).ready(function () {
      (function ($) {
        $.fn.videoPreview = function (options) {
          // console.log(this);
          return $(this).each(function () {
            var elm = $(this);
            var frames = parseFloat(elm.data('frames'));
            var img = $('<img/>', {
              'src': elm.data('source')
            }).hide().css({
              'position': 'absolute',
              'cursor': 'pointer' // 'width':'1500px'

            }).appendTo(elm);
            var slider = $('<div/>').hide().css({
              'width': '2px',
              'height': '100%',
              'background': '#ddd',
              'position': 'absolute',
              'z-index': '1',
              'top': '0',
              'opacity': 0.6,
              'cursor': 'pointer'
            }).appendTo(elm);
            var width;

            function defaultPos() {
              // console.log(-width * frames / 4);
              img.css('left', 0);
            }

            img.load(function () {
              $(this).show(); // console.log(this.width);

              width = this.width / frames; // console.log(width);

              elm.css('width', width);
              defaultPos();
            }); // console.log(viewportOffset);

            var offset = elm.offset();
            elm.mousemove(function (e) {
              // console.log("working");
              // console.log($(".video-preview").offset());
              var left = e.clientX - (offset.left + 22); // var left = e.clientX - 320;
              // console.log(left);

              slider.show().css('left', left - 1); // -1 because it's 2px width

              img.css('left', -Math.floor(left / width * frames) * width);
            }).mouseleave(function (e) {
              slider.hide();
              defaultPos();
            });
          });
        }; // custom code add at 30-1-2021


        $('#fileFullPreview').bind('contextmenu', function () {
          return false;
        });
        $('.file-wrapper').bind('contextmenu', function () {
          return false;
        });
        $('.file-item is-clicked').bind('contextmenu', function () {
          return false;
        });
      })(jquery__WEBPACK_IMPORTED_MODULE_4___default.a);

      jquery__WEBPACK_IMPORTED_MODULE_4___default()('.video-preview').videoPreview();
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FilePreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FilePreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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
  name: 'FilePreview',
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['fileInfoDetail'])), {}, {
    canBePreview: function canBePreview() {
      return this.fileInfoDetail && !Object(lodash__WEBPACK_IMPORTED_MODULE_1__["includes"])(['folder', 'file'], this.fileInfoDetail.type);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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
  name: 'ImageMetaData',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['fileInfoDetail'])),
  methods: {
    formatGps: function formatGps(location, ref) {
      var data = [];
      location.forEach(function (location) {
        data.push(Object(lodash__WEBPACK_IMPORTED_MODULE_1__["split"])(location, '/', 2)[0]);
      });
      return "".concat(data[0], "\xB0 ").concat(data[1], "' ").concat(data[2].substr(0, 4) / 100, "\" ").concat(ref, " ");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MobileActionButton',
  props: ['icon'],
  components: {
    CreditCardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CreditCardIcon"],
    FolderPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["FolderPlusIcon"],
    UserPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UserPlusIcon"],
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["TrashIcon"],
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["PlusIcon"],
    ListIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ListIcon"],
    GridIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["GridIcon"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MobileActionButtonUpload',
  components: {
    UploadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UploadCloudIcon"]
  },
  methods: {
    emmitFiles: function emmitFiles(e) {
      this.$uploadFiles(e.target.files);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_MobileActionButtonUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/MobileActionButtonUpload */ "./resources/js/components/FilesView/MobileActionButtonUpload.vue");
/* harmony import */ var _components_FilesView_MobileActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/MobileActionButton */ "./resources/js/components/FilesView/MobileActionButton.vue");
/* harmony import */ var _components_FilesView_UploadProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/UploadProgress */ "./resources/js/components/FilesView/UploadProgress.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MobileActions',
  components: {
    MobileActionButtonUpload: _components_FilesView_MobileActionButtonUpload__WEBPACK_IMPORTED_MODULE_0__["default"],
    MobileActionButton: _components_FilesView_MobileActionButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    UploadProgress: _components_FilesView_UploadProgress__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['FilePreviewType'])), {}, {
    previewIcon: function previewIcon() {
      return this.FilePreviewType === 'list' ? 'th' : 'th-list';
    },
    previewText: function previewText() {
      return this.FilePreviewType === 'list' ? this.$t('preview_type.grid') : this.$t('preview_type.list');
    }
  }),
  methods: {
    switchPreview: function switchPreview() {
      this.$store.dispatch('changePreviewType');
    },
    createFolder: function createFolder() {
      if (this.$isMobile()) {
        // Get folder name
        var folderName = prompt(this.$t('popup_create_folder.title')); // Create folder

        if (folderName) this.$createFolder(folderName);
      } else {
        // Create folder
        this.$createFolder(this.$t('popup_create_folder.folder_default_name'));
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_ToolbarButtonUpload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/ToolbarButtonUpload */ "./resources/js/components/FilesView/ToolbarButtonUpload.vue");
/* harmony import */ var _components_FilesView_ToolbarButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/ToolbarButton */ "./resources/js/components/FilesView/ToolbarButton.vue");
/* harmony import */ var _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/SearchBar */ "./resources/js/components/FilesView/SearchBar.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
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







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MobileToolBar',
  components: {
    ToolbarButtonUpload: _components_FilesView_ToolbarButtonUpload__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__["ChevronLeftIcon"],
    ToolbarButton: _components_FilesView_ToolbarButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    SearchBar: _components_FilesView_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"],
    MenuIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__["MenuIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['fileInfoVisible', 'FilePreviewType', 'fileInfoDetail', 'currentFolder', 'browseHistory', 'homeDirectory'])), {}, {
    directoryName: function directoryName() {
      return this.currentFolder ? this.currentFolder.name : this.homeDirectory.name;
    }
  }),
  methods: {
    showMobileNavigation: function showMobileNavigation() {
      _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$emit('show:mobile-navigation');
    },
    goBack: function goBack() {
      var previousFolder = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["last"])(this.browseHistory);

      if (previousFolder.location === 'trash-root') {
        this.$store.dispatch('getTrash');
      } else if (previousFolder.location === 'shared') {
        this.$store.dispatch('getShared');
      } else {
        if (this.$isThisLocation('public')) {
          this.$store.dispatch('browseShared', [{
            folder: previousFolder,
            back: true,
            init: false
          }]);
        } else {
          this.$store.dispatch('getFolder', [{
            folder: previousFolder,
            back: true,
            init: false
          }]);
        }
      }
    }
  },
  created: function created() {
    var _this = this;

    // Listen for hide sidebar
    _bus__WEBPACK_IMPORTED_MODULE_5__["events"].$on('show:content', function () {
      if (_this.isSidebarMenu) _this.isSidebarMenu = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ProgressBar',
  props: ['progress', 'time']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
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
  name: 'SearchBar',
  components: {
    SearchIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["SearchIcon"],
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["XIcon"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['currentFolder'])), {}, {
    isQuery: function isQuery() {
      return this.query !== '' && typeof this.query !== 'undefined';
    }
  }),
  data: function data() {
    return {
      query: ''
    };
  },
  watch: {
    query: function query(val) {
      return this.getResult(val);
    }
  },
  methods: {
    resetQuery: function resetQuery() {
      this.query = '';
    },
    getResult: Object(lodash__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function (value) {
      if (this.isQuery) {
        // Get search result if query is not empty
        this.$store.dispatch('getSearchResult', value);
      } else if (typeof value !== 'undefined') {
        if (this.currentFolder) {
          // Get back after delete query to previosly folder
          if (this.$isThisLocation('public')) {
            this.$store.dispatch('browseShared', [{
              folder: this.currentFolder,
              back: true,
              init: false
            }]);
          } else {
            this.$store.dispatch('getFolder', [{
              folder: this.currentFolder,
              back: true,
              init: false
            }]);
          }
        }

        this.$store.commit('CHANGE_SEARCHING_STATE', false);
      }
    }, 300)
  },
  created: function created() {
    var _this = this;

    _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$on('clear-query', function () {
      return _this.query = undefined;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store */ "./resources/js/store/index.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../bus */ "./resources/js/bus.js");


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


 // import MediaInfo from 'mediainfo.js'

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ToolbarButtonUpload',
  props: ['action'],
  components: {
    UploadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["UploadCloudIcon"]
  },
  methods: {
    emmitFiles: function emmitFiles(e) {
      this.uploadFiles(e.target.files);
    },
    uploadFiles: function () {
      var _uploadFiles = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(files) {
        var _this = this;

        var fps, fileinput, output, onChangeFile;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(files.length == 0)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                if (this.checkFileMimetype(files)) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                //this.handleUploading(files, undefined,undefined)
                // Prevent submit empty files
                fps = 0;
                fileinput = files[0];
                output = 0;

                onChangeFile = function onChangeFile(mediainfo) {
                  var file = fileinput;

                  if (file) {
                    // output.value = 'Working…'
                    var getSize = function getSize() {
                      return file.size;
                    };

                    var readChunk = function readChunk(chunkSize, offset) {
                      return new Promise(function (resolve, reject) {
                        var reader = new FileReader();

                        reader.onload = function (event) {
                          if (event.target.error) {
                            reject(event.target.error);
                          }

                          resolve(new Uint8Array(event.target.result));
                        };

                        reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize));
                      });
                    };

                    mediainfo.analyzeData(getSize, readChunk).then(function (result) {
                      console.log('media ;;;;;;;;', result.media.track[1].FrameRate);
                      _store__WEBPACK_IMPORTED_MODULE_2__["default"].commit('UPDATE_FPS', result.media.track[1].FrameRate);
                      var fps = result.media.track[1].FrameRate;

                      _this.handleUploading(files, undefined, result.media.track[1].FrameRate);
                    })["catch"](function (error) {
                      console.error(error);
                    });
                  }
                };

                MediaInfo({
                  format: 'object'
                }, function (mediainfo) {
                  onChangeFile(mediainfo);
                  console.log(mediainfo);
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function uploadFiles(_x) {
        return _uploadFiles.apply(this, arguments);
      }

      return uploadFiles;
    }(),
    checkFileMimetype: function checkFileMimetype(files) {
      var validated = true;
      var mimetypesBlacklist = this.$store.getters.config.mimetypesBlacklist;

      for (var i = 0; i < files.length; i++) {
        var fileType = files[i].type.split('/');

        if (!fileType[0]) {
          fileType[1] = _.last(files[i].name.split('.'));
        }

        if (mimetypesBlacklist.includes(fileType[1])) {
          validated = false;
          _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('alert:open', {
            emoji: '😬😬😬',
            title: i18n.t('popup_mimetypes_blacklist.title'),
            message: i18n.t('popup_mimetypes_blacklist.message', {
              mimetype: fileType[1]
            })
          });
        } else {
          validated = true;
        }
      }

      return validated;
    },
    handleUploading: function () {
      var _handleUploading = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(files, parent_id, fps) {
        var _this2 = this;

        var fileBuffer, fileSucceed, parentFolder, rootFolder, _loop;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('file', files[0]);
                console.log('file', fps);
                fileBuffer = []; // Append the file list to fileBuffer array

                Array.prototype.push.apply(fileBuffer, files);
                fileSucceed = 0; // Update files count in progressbar

                this.$store.commit('UPDATE_FILE_COUNT_PROGRESS', {
                  current: fileSucceed,
                  total: files.length
                }); // Reset upload progress to 0

                this.$store.commit('UPLOADING_FILE_PROGRESS', 0); // Get parent id

                parentFolder = this.$store.getters.currentFolder ? this.$store.getters.currentFolder.unique_id : 0;
                rootFolder = parent_id ? parent_id : parentFolder; // Upload files

                _loop = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop() {
                  var file, chunks, size, chunksCeil, i, formData, uploadedSize, isNotGeneralError, striped_name, filename, _loop2;

                  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          file = fileBuffer.shift(), chunks = []; // Calculate ceils

                          size = _this2.$store.getters.config.chunkSize, chunksCeil = Math.ceil(file.size / size); // Create chunks

                          for (i = 0; i < chunksCeil; i++) {
                            chunks.push(file.slice(i * size, Math.min(i * size + size, file.size), file.type));
                          } // Set Data


                          formData = new FormData(), uploadedSize = 0, isNotGeneralError = true, striped_name = file.name.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, ''), filename = Array(16).fill(0).map(function (x) {
                            return Math.random().toString(36).charAt(2);
                          }).join('') + '-' + striped_name + '.part';
                          _loop2 = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _loop2() {
                            var isLast, chunk, attempts;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _loop2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    isLast = chunks.length === 1, chunk = chunks.shift(), attempts = 0; //        console.log('fps',fps)
                                    // Set form data

                                    formData.set('file', chunk, filename);
                                    formData.set('parent_id', rootFolder);
                                    formData.set('is_last', isLast);
                                    formData.set('fps', fps); // Upload chunks

                                  case 5:
                                    _context2.next = 7;
                                    return _this2.$store.dispatch('uploadFiles', {
                                      form: formData,
                                      fileSize: file.size,
                                      totalUploadedSize: uploadedSize
                                    }).then(function () {
                                      uploadedSize = uploadedSize + chunk.size;
                                    })["catch"](function (error) {
                                      // Count attempts
                                      attempts++; // Break uploading proccess

                                      if (error.response.status === 500) isNotGeneralError = false; //Break if mimetype of file is in blacklist

                                      if (error.response.status === 415) isNotGeneralError = false; // Show Error

                                      if (attempts === 3) _this2.isSomethingWrong();
                                    });

                                  case 7:
                                    if (isNotGeneralError && attempts !== 0 && attempts !== 3) {
                                      _context2.next = 5;
                                      break;
                                    }

                                  case 8:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _loop2);
                          });

                        case 5:
                          return _context3.delegateYield(_loop2(), "t0", 6);

                        case 6:
                          if (isNotGeneralError && chunks.length !== 0) {
                            _context3.next = 5;
                            break;
                          }

                        case 7:
                          fileSucceed++; // Progress file log

                          _this2.$store.commit('UPDATE_FILE_COUNT_PROGRESS', {
                            current: fileSucceed,
                            total: files.length
                          });

                        case 9:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _loop);
                });

              case 10:
                return _context4.delegateYield(_loop(), "t0", 11);

              case 11:
                if (fileBuffer.length !== 0) {
                  _context4.next = 10;
                  break;
                }

              case 12:
                this.$store.commit('UPDATE_FILE_COUNT_PROGRESS', undefined);

              case 13:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee2, this);
      }));

      function handleUploading(_x2, _x3, _x4) {
        return _handleUploading.apply(this, arguments);
      }

      return handleUploading;
    }(),
    isSomethingWrong: function isSomethingWrong() {
      _bus__WEBPACK_IMPORTED_MODULE_3__["events"].$emit('alert:open', {
        title: this.$t('popup_error.title'),
        message: this.$t('popup_error.message')
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FilesView_ProgressBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/FilesView/ProgressBar */ "./resources/js/components/FilesView/ProgressBar.vue");
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
//
//
//
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
  name: 'UploadProgress',
  components: {
    RefreshCwIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["RefreshCwIcon"],
    ProgressBar: _components_FilesView_ProgressBar__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      rem_time: '',
      unit: 'sec'
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['uploadingFileProgress', 'uploadingFileTime', 'uploadingFilesCount', 'isProcessingFile'])),
  watch: {
    uploadingFileProgress: function uploadingFileProgress(val) {
      var rem_per = 100 - this.uploadingFileProgress;
      this.rem_time = rem_per / 10 * 1; // console.log(this.rem_time);

      if (this.rem_time >= 60 && this.rem_time <= 3600) {
        this.rem_time = this.rem_time / 60;
        this.unit = 'min';
      }

      if (this.rem_time > 3600) {
        this.unit = 'hours';
        this.rem_time = this.rem_time / 60;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-base[data-v-1ec4da91] {\n  font-size: 0.9375em;\n  font-weight: 700;\n  cursor: pointer;\n  transition: 0.15s all ease;\n  border-radius: 8px;\n  border: 0;\n  padding: 10px 28px;\n  display: inline-block;\n}\n.button-base[data-v-1ec4da91]:active {\n  transform: scale(0.95);\n}\n.button-base.theme[data-v-1ec4da91] {\n  color: #00bc7e;\n  background: rgba(0, 188, 126, 0.1);\n}\n.button-base.secondary[data-v-1ec4da91] {\n  color: #1B2539;\n  background: #f4f5f6;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filePreviewFixed[data-v-0c6958e0] {\n  position: fixed !important;\n  display: flex;\n}\n.menu-option[data-v-0c6958e0] {\n  display: flex;\n  align-items: center;\n}\n.menu-option .icon[data-v-0c6958e0] {\n  margin-right: 20px;\n  line-height: 0;\n}\n.menu-option .text-label[data-v-0c6958e0] {\n  font-size: 1em;\n}\n.contextmenu[data-v-0c6958e0] {\n  min-width: 250px;\n  position: absolute;\n  z-index: 99;\n  box-shadow: 0 7px 25px 1px rgba(0, 0, 0, 0.12);\n  background: white;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.contextmenu.showed[data-v-0c6958e0] {\n  display: block;\n}\n.menu-options[data-v-0c6958e0] {\n  list-style: none;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.menu-options .menu-option-group[data-v-0c6958e0] {\n  padding: 5px 0;\n  border-bottom: 1px solid #F8F8F8;\n}\n.menu-options .menu-option-group[data-v-0c6958e0]:first-child {\n  padding-top: 0;\n}\n.menu-options .menu-option-group[data-v-0c6958e0]:last-child {\n  padding-bottom: 0;\n  border-bottom: none;\n}\n.menu-options .menu-option[data-v-0c6958e0] {\n  white-space: nowrap;\n  font-weight: 700;\n  font-size: 0.875em;\n  padding: 15px 20px;\n  cursor: pointer;\n  width: 100%;\n  color: #1B2539;\n}\n.menu-options .menu-option[data-v-0c6958e0]:hover {\n  background: #f4f5f6;\n}\n.menu-options .menu-option:hover .text-label[data-v-0c6958e0] {\n  color: #00bc7e;\n}\n.menu-options .menu-option:hover path[data-v-0c6958e0],\n.menu-options .menu-option:hover line[data-v-0c6958e0],\n.menu-options .menu-option:hover polyline[data-v-0c6958e0],\n.menu-options .menu-option:hover rect[data-v-0c6958e0],\n.menu-options .menu-option:hover circle[data-v-0c6958e0],\n.menu-options .menu-option:hover polygon[data-v-0c6958e0] {\n  stroke: #00bc7e;\n}\n@media (prefers-color-scheme: dark) {\n.contextmenu[data-v-0c6958e0] {\n    background: #1e2024;\n}\n.contextmenu .menu-options .menu-option-group[data-v-0c6958e0] {\n    border-color: rgba(255, 255, 255, 0.02);\n}\n.contextmenu .menu-options .menu-option[data-v-0c6958e0] {\n    color: #bec6cf;\n}\n.contextmenu .menu-options .menu-option[data-v-0c6958e0]:hover {\n    background: rgba(0, 188, 126, 0.1);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar-wrapper[data-v-14323afd] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  display: flex;\n  position: relative;\n  z-index: 2;\n}\n.toolbar-wrapper > div[data-v-14323afd] {\n  flex-grow: 1;\n  align-self: center;\n  white-space: nowrap;\n}\n.directory-name[data-v-14323afd] {\n  vertical-align: middle;\n  font-size: 1.0625em;\n  color: #1B2539;\n  font-weight: 700;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n}\n.icon-back[data-v-14323afd] {\n  vertical-align: middle;\n  cursor: pointer;\n  margin-right: 6px;\n  opacity: 0.15;\n  pointer-events: none;\n  transition: 150ms all ease;\n}\n.icon-back.is-active[data-v-14323afd] {\n  opacity: 1;\n  pointer-events: initial;\n}\n.toolbar-go-back[data-v-14323afd] {\n  cursor: pointer;\n}\n.toolbar-go-back .folder-options[data-v-14323afd] {\n  vertical-align: middle;\n  margin-left: 6px;\n  padding: 1px 4px;\n  line-height: 0;\n  border-radius: 3px;\n  transition: 150ms all ease;\n}\n.toolbar-go-back .folder-options svg circle[data-v-14323afd] {\n  transition: 150ms all ease;\n}\n.toolbar-go-back .folder-options[data-v-14323afd]:hover {\n  background: #f4f5f6;\n}\n.toolbar-go-back .folder-options:hover svg circle[data-v-14323afd] {\n  stroke: #00bc7e;\n}\n.toolbar-go-back .folder-options .icon-more[data-v-14323afd] {\n  vertical-align: middle;\n}\n.toolbar-go-back .back-directory-title[data-v-14323afd] {\n  font-size: 0.9375em;\n  line-height: 1;\n  font-weight: 700;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n  vertical-align: middle;\n  color: #1B2539;\n}\n.toolbar-position[data-v-14323afd] {\n  text-align: center;\n}\n.toolbar-position span[data-v-14323afd] {\n  font-size: 1.0625em;\n  font-weight: 600;\n}\n.toolbar-tools[data-v-14323afd] {\n  text-align: right;\n}\n.toolbar-tools .toolbar-button-wrapper[data-v-14323afd] {\n  margin-left: 28px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.toolbar-tools .toolbar-button-wrapper[data-v-14323afd]:first-child {\n  margin-left: 0 !important;\n}\n.toolbar-tools .button[data-v-14323afd] {\n  margin-left: 5px;\n}\n.toolbar-tools .button.active[data-v-14323afd] svg line,\n.toolbar-tools .button.active[data-v-14323afd] svg circle {\n  stroke: #00bc7e;\n}\n.toolbar-tools .button.is-inactive[data-v-14323afd] {\n  opacity: 0.25;\n  pointer-events: none;\n}\n.toolbar-tools .button[data-v-14323afd]:first-child {\n  margin-left: 0;\n}\n@media only screen and (max-width: 1024px) {\n.toolbar-go-back .back-directory-title[data-v-14323afd] {\n    max-width: 120px;\n}\n.toolbar-tools .button[data-v-14323afd] {\n    margin-left: 0;\n    height: 40px;\n    width: 40px;\n}\n.toolbar-tools .toolbar-button-wrapper[data-v-14323afd] {\n    margin-left: 25px;\n}\n}\n@media only screen and (max-width: 960px) {\n#desktop-toolbar[data-v-14323afd] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.toolbar .directory-name[data-v-14323afd] {\n    color: #bec6cf;\n}\n.toolbar-go-back .back-directory-title[data-v-14323afd] {\n    color: #bec6cf;\n}\n.toolbar-go-back .folder-options[data-v-14323afd]:hover {\n    background: #1e2024;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".empty-message[data-v-f2442590] {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.empty-message .message[data-v-f2442590] {\n  margin: 0 auto;\n}\n.empty-message .message p[data-v-f2442590] {\n  margin-top: 10px;\n  max-width: 130px;\n  font-size: 0.8125em;\n  font-weight: 500;\n  color: rgba(27, 37, 57, 0.7);\n}\n.empty-message .message .icon path[data-v-f2442590], .empty-message .message .icon line[data-v-f2442590], .empty-message .message .icon polyline[data-v-f2442590], .empty-message .message .icon rect[data-v-f2442590], .empty-message .message .icon circle[data-v-f2442590] {\n  stroke: #1B2539;\n}\n@media (prefers-color-scheme: dark) {\n.empty-message .message .icon path[data-v-f2442590], .empty-message .message .icon line[data-v-f2442590], .empty-message .message .icon polyline[data-v-f2442590], .empty-message .message .icon rect[data-v-f2442590], .empty-message .message .icon circle[data-v-f2442590] {\n    stroke: #7d858c;\n}\n.empty-message .message p[data-v-f2442590] {\n    color: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".empty-page[data-v-3497fe2e] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  margin-top: 85px;\n  display: flex;\n  align-items: center;\n}\n.empty-page .empty-state[data-v-3497fe2e] {\n  margin: 0 auto;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n.text-content[data-v-3497fe2e] {\n  text-align: center;\n  margin: 30px 0;\n}\n.text-content .title[data-v-3497fe2e] {\n  font-size: 1.25em;\n  color: #1B2539;\n  font-weight: 700;\n  margin: 0;\n}\n.text-content .description[data-v-3497fe2e] {\n  font-size: 0.8125em;\n  color: rgba(27, 37, 57, 0.7);\n  margin-bottom: 20px;\n  display: block;\n}\n@media (prefers-color-scheme: dark) {\n.text-content .title[data-v-3497fe2e] {\n    color: #bec6cf;\n}\n.text-content .description[data-v-3497fe2e] {\n    color: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button-upload[data-v-6409943e] {\n  display: block;\n  text-align: center;\n  margin: 20px 0;\n}\n.mobile-search[data-v-6409943e] {\n  display: none;\n  margin-bottom: 10px;\n  margin-top: 10px;\n}\n.file-content[data-v-6409943e] {\n  display: flex;\n}\n.file-content.is-dragging[data-v-6409943e] {\n  transform: scale(0.99);\n}\n.files-container[data-v-6409943e] {\n  overflow-x: hidden;\n  overflow-y: auto;\n  flex: 0 0 100%;\n  transition: 150ms all ease;\n  position: relative;\n  scroll-behavior: smooth;\n}\n.files-container.is-fileinfo-visible[data-v-6409943e] {\n  flex: 0 1 100%;\n}\n.files-container .file-list.grid[data-v-6409943e] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 180px);\n  justify-content: space-evenly;\n}\n.file-info-container[data-v-6409943e] {\n  flex: 0 0 300px;\n  padding-left: 20px;\n  overflow: auto;\n}\n.file-move[data-v-6409943e] {\n  transition: transform 0.6s;\n}\n.file-enter-active[data-v-6409943e] {\n  transition: all 300ms ease;\n}\n.file-leave-active[data-v-6409943e] {\n  transition: all 0ms;\n}\n.file-enter[data-v-6409943e], .file-leave-to[data-v-6409943e] {\n  opacity: 0;\n  transform: translateX(-20px);\n}\n@media only screen and (min-width: 960px) {\n.file-content[data-v-6409943e] {\n    position: absolute;\n    top: 72px;\n    left: 15px;\n    right: 15px;\n    bottom: 0;\n    transition: 0.3s all ease;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n.file-content.is-offset[data-v-6409943e] {\n    margin-top: 50px;\n}\n}\n@media only screen and (max-width: 960px) {\n.file-info-container[data-v-6409943e] {\n    display: none;\n}\n.mobile-search[data-v-6409943e] {\n    display: block;\n}\n}\n@media only screen and (max-width: 690px) {\n.files-container[data-v-6409943e] {\n    padding-left: 15px;\n    padding-right: 15px;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: fixed;\n    overflow-y: auto;\n}\n.files-container .file-list.grid[data-v-6409943e] {\n    grid-template-columns: repeat(auto-fill, 120px);\n}\n.file-content[data-v-6409943e] {\n    position: absolute;\n    top: 0;\n    left: 0px;\n    right: 0px;\n    bottom: 0;\n    transition: 0.3s all ease;\n}\n.file-content.is-offset[data-v-6409943e] {\n    margin-top: 50px;\n}\n.mobile-search[data-v-6409943e] {\n    margin-bottom: 0;\n}\n.file-info-container[data-v-6409943e] {\n    display: none;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".file-info-content[data-v-95b9c6e8] {\n  padding-bottom: 20px;\n}\n.file-headline[data-v-95b9c6e8] {\n  margin-bottom: 20px;\n  border-radius: 8px;\n}\n.file-headline .flex[data-v-95b9c6e8] {\n  display: flex;\n  align-items: flex-start;\n}\n.file-headline .icon-preview[data-v-95b9c6e8] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n  outline: none;\n  border: none;\n}\n.file-headline .file-info[data-v-95b9c6e8] {\n  padding-left: 10px;\n  width: 100%;\n  word-break: break-all;\n}\n.file-headline .file-info .name[data-v-95b9c6e8] {\n  font-size: 0.875em;\n  font-weight: 700;\n  line-height: 1.4;\n  display: block;\n  color: #1B2539;\n}\n.file-headline .file-info .mimetype[data-v-95b9c6e8] {\n  font-size: 0.75em;\n  font-weight: 600;\n  color: #00bc7e;\n  display: block;\n}\n.sharelink[data-v-95b9c6e8] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  margin-top: 10px;\n}\n.sharelink .lock-icon[data-v-95b9c6e8] {\n  display: inline-block;\n  width: 15px;\n  margin-right: 9px;\n  cursor: pointer;\n}\n.sharelink .copy-sharelink[data-v-95b9c6e8] {\n  width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n.file-headline .file-info .name[data-v-95b9c6e8] {\n    color: #bec6cf;\n}\n.sharelink .lock-icon:hover path[data-v-95b9c6e8], .sharelink .lock-icon:hover rect[data-v-95b9c6e8] {\n    stroke: #00bc7e;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-preview[data-v-2085e75a] {\n  display: inline-block;\n  position: relative;\n  background: #ddd;\n  overflow: hidden;\n  margin-right: 5%;\n  /* This is temporary width and height, these'll be overriden when the source img is loaded. */\n  /* If you already know size of a preview frame you can hardcode it here. */\n  width: 150px !important;\n  height: 120px;\n  border-radius: 5px;\n  box-shadow: 0 0 6px #bbb;\n}\n.show-actions[data-v-2085e75a] {\n  cursor: pointer;\n  padding: 4px 26px;\n}\n.show-actions .icon-action[data-v-2085e75a] {\n  font-size: 0.75em;\n}\n.show-actions path[data-v-2085e75a] {\n  fill: #00bc7e;\n}\n.file-wrapper[data-v-2085e75a] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  text-align: center;\n  display: inline-block;\n  vertical-align: text-top;\n  width: 100%;\n}\n.file-wrapper .item-name[data-v-2085e75a] {\n  display: block;\n  padding-left: 10px;\n  padding-right: 10px;\n  line-height: 20px;\n}\n.file-wrapper .item-name .item-size[data-v-2085e75a],\n.file-wrapper .item-name .item-length[data-v-2085e75a] {\n  font-size: 0.6875em;\n  font-weight: 400;\n  color: rgba(27, 37, 57, 0.7);\n  display: inline-block;\n}\n.file-wrapper .item-name .item-info[data-v-2085e75a] {\n  display: block;\n  line-height: 1;\n}\n.file-wrapper .item-name .item-shared[data-v-2085e75a] {\n  display: inline-block;\n}\n.file-wrapper .item-name .item-shared .label[data-v-2085e75a] {\n  font-size: 0.75em;\n  font-weight: 400;\n  color: #00bc7e;\n}\n.file-wrapper .item-name .item-shared .shared-icon[data-v-2085e75a] {\n  vertical-align: middle;\n}\n.file-wrapper .item-name .item-shared .shared-icon path[data-v-2085e75a], .file-wrapper .item-name .item-shared .shared-icon circle[data-v-2085e75a], .file-wrapper .item-name .item-shared .shared-icon line[data-v-2085e75a] {\n  stroke: #00bc7e;\n}\n.file-wrapper .item-name .name[data-v-2085e75a] {\n  color: #1B2539;\n  font-size: 0.875em;\n  font-weight: 700;\n  max-height: 40px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  word-break: break-all;\n}\n.file-wrapper .item-name .name[contenteditable][data-v-2085e75a] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n   -ms-user-select: text;\n       user-select: text;\n}\n.file-wrapper .item-name .name[contenteditable='true'][data-v-2085e75a]:hover {\n  text-decoration: underline;\n}\n.file-wrapper .item-name .name.actived[data-v-2085e75a] {\n  max-height: initial;\n}\n.file-wrapper.selected .file-item[data-v-2085e75a] {\n  background: #f4f5f6;\n}\n.file-wrapper .file-item[data-v-2085e75a] {\n  border: 2px dashed transparent;\n  width: 190px;\n  margin: 10px;\n  cursor: pointer;\n  position: relative;\n  padding: 15px 0;\n}\n.file-wrapper .file-item.is-dragenter[data-v-2085e75a] {\n  border: 2px dashed #00bc7e;\n  border-radius: 8px;\n}\n.file-wrapper .file-item[data-v-2085e75a]:hover, .file-wrapper .file-item.is-clicked[data-v-2085e75a] {\n  border-radius: 8px;\n  background: #f4f5f6;\n}\n.file-wrapper .file-item:hover .item-name .name[data-v-2085e75a], .file-wrapper .file-item.is-clicked .item-name .name[data-v-2085e75a] {\n  color: #00bc7e;\n}\n.file-wrapper .icon-item[data-v-2085e75a] {\n  text-align: center;\n  position: relative;\n  height: 110px;\n  margin-bottom: 20px;\n  align-items: center;\n}\n.file-wrapper .icon-item .file-link[data-v-2085e75a] {\n  display: block;\n}\n.file-wrapper .icon-item .file-icon[data-v-2085e75a] {\n  font-size: 6.25em;\n  margin: 0 auto;\n}\n.file-wrapper .icon-item .file-icon path[data-v-2085e75a] {\n  fill: #fafafc;\n  stroke: #dfe0e8;\n  stroke-width: 1;\n}\n.file-wrapper .icon-item .file-icon-text[data-v-2085e75a] {\n  margin: 5px auto 0;\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  color: #00bc7e;\n  font-size: 0.75em;\n  font-weight: 600;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  max-width: 65px;\n  max-height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.file-wrapper .icon-item .image[data-v-2085e75a] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 150px !important;\n  height: 120px;\n  border-radius: 5px;\n  margin: 0 auto;\n  pointer-events: none;\n}\n.file-wrapper .icon-item .folder-icon[data-v-2085e75a] {\n  align-items: flex-end;\n  font-size: 5em;\n  margin: 0 auto;\n}\n.file-wrapper .icon-item .folder-icon path[data-v-2085e75a] {\n  fill: #00bc7e;\n}\n.file-wrapper .icon-item .folder-icon.is-deleted path[data-v-2085e75a] {\n  fill: #EBEBEB;\n}\n@media only screen and (max-width: 960px) {\n.file-wrapper .icon-item[data-v-2085e75a] {\n    margin-bottom: 15px;\n}\n}\n@media only screen and (max-width: 690px) {\n.file-wrapper .file-item[data-v-2085e75a] {\n    width: 120px;\n}\n.file-wrapper .icon-item[data-v-2085e75a] {\n    margin-bottom: 10px;\n    height: 90px;\n}\n.file-wrapper .icon-item .file-icon[data-v-2085e75a] {\n    font-size: 4.6875em;\n}\n.file-wrapper .icon-item .file-icon-text[data-v-2085e75a] {\n    font-size: 0.75em;\n}\n.file-wrapper .icon-item .folder-icon[data-v-2085e75a] {\n    font-size: 4.6875em;\n    margin-top: 0;\n    margin-bottom: 0;\n}\n.file-wrapper .icon-item .image[data-v-2085e75a] {\n    width: 90px;\n    height: 90px;\n}\n.file-wrapper .item-name .name[data-v-2085e75a] {\n    font-size: 0.8125em;\n    line-height: .9;\n    max-height: 30px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.file-wrapper .icon-item .file-icon path[data-v-2085e75a] {\n    fill: #1e2024;\n    stroke: #2F3C54;\n}\n.file-wrapper .icon-item .folder-icon.is-deleted path[data-v-2085e75a] {\n    fill: #2a2c32;\n}\n.file-wrapper .file-item[data-v-2085e75a]:hover, .file-wrapper .file-item.is-clicked[data-v-2085e75a] {\n    background: #1e2024;\n}\n.file-wrapper .file-item:hover .file-icon path[data-v-2085e75a], .file-wrapper .file-item.is-clicked .file-icon path[data-v-2085e75a] {\n    fill: #111314;\n}\n.file-wrapper .item-name .name[data-v-2085e75a] {\n    color: #bec6cf;\n}\n.file-wrapper .item-name .item-size[data-v-2085e75a],\n  .file-wrapper .item-name .item-length[data-v-2085e75a] {\n    color: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dot[data-v-2cfcc5ab] {\n  height: 19px;\n  width: 22px;\n  border-radius: 100%;\n  display: inline-block;\n}\n.video-preview[data-v-2cfcc5ab] {\n  display: inline-block;\n  position: relative;\n  background: #ddd;\n  overflow: hidden;\n  /* This is temporary width and height, these'll be overriden when the source img is loaded. */\n  /* If you already know size of a preview frame you can hardcode it here. */\n  width: 100px !important;\n  height: 120px;\n  border-radius: 5px;\n  box-shadow: 0 0 6px #bbb;\n}\n.file-wrapper[data-v-2cfcc5ab] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n}\n.file-wrapper[data-v-2cfcc5ab]:hover {\n  border-color: transparent;\n}\n.file-wrapper .actions[data-v-2cfcc5ab] {\n  text-align: right;\n  width: 50px;\n}\n.file-wrapper .actions .show-actions[data-v-2cfcc5ab] {\n  cursor: pointer;\n  padding: 12px 6px 12px;\n}\n.file-wrapper .actions .show-actions .icon-action[data-v-2cfcc5ab] {\n  font-size: 0.875em;\n}\n.file-wrapper .actions .show-actions .icon-action path[data-v-2cfcc5ab] {\n  fill: #00bc7e;\n}\n.file-wrapper .item-name[data-v-2cfcc5ab] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.file-wrapper .item-name .item-info[data-v-2cfcc5ab] {\n  display: block;\n  line-height: 1;\n}\n.file-wrapper .item-name .item-shared[data-v-2cfcc5ab] {\n  display: inline-block;\n}\n.file-wrapper .item-name .item-shared .label[data-v-2cfcc5ab] {\n  font-size: 0.75em;\n  font-weight: 400;\n  color: #00bc7e;\n}\n.file-wrapper .item-name .item-shared .shared-icon[data-v-2cfcc5ab] {\n  vertical-align: middle;\n}\n.file-wrapper .item-name .item-shared .shared-icon path[data-v-2cfcc5ab],\n.file-wrapper .item-name .item-shared .shared-icon circle[data-v-2cfcc5ab],\n.file-wrapper .item-name .item-shared .shared-icon line[data-v-2cfcc5ab] {\n  stroke: #00bc7e;\n}\n.file-wrapper .item-name .item-size[data-v-2cfcc5ab],\n.file-wrapper .item-name .item-length[data-v-2cfcc5ab] {\n  font-size: 0.6875em;\n  font-weight: 400;\n  color: rgba(27, 37, 57, 0.7);\n}\n.file-wrapper .item-name .name[data-v-2cfcc5ab] {\n  white-space: nowrap;\n}\n.file-wrapper .item-name .name[contenteditable][data-v-2cfcc5ab] {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n   -ms-user-select: text;\n       user-select: text;\n}\n.file-wrapper .item-name .name[contenteditable='true'][data-v-2cfcc5ab]:hover {\n  text-decoration: underline;\n}\n.file-wrapper .item-name .name[data-v-2cfcc5ab] {\n  color: #1B2539;\n  font-size: 0.875em;\n  font-weight: 700;\n  max-height: 40px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.file-wrapper .item-name .name.actived[data-v-2cfcc5ab] {\n  max-height: initial;\n}\n.file-wrapper.selected .file-item[data-v-2cfcc5ab] {\n  background: #f4f5f6;\n}\n.file-wrapper .icon-item[data-v-2cfcc5ab] {\n  text-align: center;\n  position: relative;\n  flex: 0 0 50px;\n  line-height: 0;\n  margin-right: 20px;\n}\n.file-wrapper .icon-item .folder-icon[data-v-2cfcc5ab] {\n  font-size: 3.25em;\n}\n.file-wrapper .icon-item .folder-icon path[data-v-2cfcc5ab] {\n  fill: #00bc7e;\n}\n.file-wrapper .icon-item .folder-icon.is-deleted path[data-v-2cfcc5ab] {\n  fill: #EBEBEB;\n}\n.file-wrapper .icon-item .file-icon[data-v-2cfcc5ab] {\n  font-size: 2.8125em;\n}\n.file-wrapper .icon-item .file-icon path[data-v-2cfcc5ab] {\n  fill: #fafafc;\n  stroke: #dfe0e8;\n  stroke-width: 1;\n}\n.file-wrapper .icon-item .file-icon-text[data-v-2cfcc5ab] {\n  line-height: 1;\n  top: 40%;\n  font-size: 0.6875em;\n  margin: 0 auto;\n  position: absolute;\n  text-align: center;\n  left: 0;\n  right: 0;\n  color: #00bc7e;\n  font-weight: 600;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  max-width: 100px;\n  max-height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.file-wrapper .icon-item .image[data-v-2cfcc5ab] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 5px;\n  width: 100px !important;\n  height: 120px;\n  pointer-events: none;\n}\n.file-wrapper .file-item[data-v-2cfcc5ab] {\n  border: 2px dashed transparent;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  padding: 7px;\n}\n.file-wrapper .file-item.is-dragenter[data-v-2cfcc5ab] {\n  border: 2px dashed #00bc7e;\n  border-radius: 8px;\n}\n.file-wrapper .file-item[data-v-2cfcc5ab]:hover, .file-wrapper .file-item.is-clicked[data-v-2cfcc5ab] {\n  border-radius: 8px;\n  background: #f4f5f6;\n}\n.file-wrapper .file-item:hover .item-name .name[data-v-2cfcc5ab], .file-wrapper .file-item.is-clicked .item-name .name[data-v-2cfcc5ab] {\n  color: #00bc7e;\n}\n@media (prefers-color-scheme: dark) {\n.file-wrapper .icon-item .file-icon path[data-v-2cfcc5ab] {\n    fill: #1e2024;\n    stroke: #2f3c54;\n}\n.file-wrapper .icon-item .folder-icon.is-deleted path[data-v-2cfcc5ab] {\n    fill: #2a2c32;\n}\n.file-wrapper .file-item[data-v-2cfcc5ab]:hover, .file-wrapper .file-item.is-clicked[data-v-2cfcc5ab] {\n    background: #1e2024;\n}\n.file-wrapper .file-item:hover .file-icon path[data-v-2cfcc5ab], .file-wrapper .file-item.is-clicked .file-icon path[data-v-2cfcc5ab] {\n    fill: #111314;\n}\n.file-wrapper .item-name .name[data-v-2cfcc5ab] {\n    color: #bec6cf;\n}\n.file-wrapper .item-name .item-size[data-v-2cfcc5ab],\n  .file-wrapper .item-name .item-length[data-v-2cfcc5ab] {\n    color: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".preview[data-v-4545fcde] {\n  width: 100%;\n  display: block;\n  margin-bottom: 7px;\n}\n.preview img[data-v-4545fcde] {\n  border-radius: 4px;\n  overflow: hidden;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.preview audio[data-v-4545fcde] {\n  width: 100%;\n}\n.preview audio[data-v-4545fcde]::-webkit-media-controls-panel {\n  background-color: #f4f5f6;\n}\n.preview audio[data-v-4545fcde]::-webkit-media-controls-play-button {\n  color: #00bc7e;\n}\n.preview video[data-v-4545fcde] {\n  width: 100%;\n  height: auto;\n  border-radius: 3px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".meta-data-list[data-v-49f5e308] {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n}\n.meta-data-list li[data-v-49f5e308] {\n  display: flex;\n  justify-content: space-between;\n  padding: 9px 0;\n  border-bottom: 1px solid #F8F8F8;\n}\n.meta-data-list li b[data-v-49f5e308], .meta-data-list li span[data-v-49f5e308] {\n  font-size: 0.875em;\n  color: #1B2539;\n}\n@media (prefers-color-scheme: dark) {\n.meta-data-list li[data-v-49f5e308] {\n    border-color: rgba(255, 255, 255, 0.02);\n}\n.meta-data-list li b[data-v-49f5e308], .meta-data-list li span[data-v-49f5e308] {\n    color: #bec6cf !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-action-button[data-v-95f75cf0] {\n  background: #f4f5f6;\n  margin-right: 15px;\n  border-radius: 8px;\n  padding: 7px 10px;\n  cursor: pointer;\n  border: none;\n  transition: 150ms all ease;\n}\n.mobile-action-button .flex[data-v-95f75cf0] {\n  display: flex;\n  align-items: center;\n}\n.mobile-action-button .icon[data-v-95f75cf0] {\n  margin-right: 10px;\n  font-size: 0.875em;\n}\n.mobile-action-button .icon path[data-v-95f75cf0], .mobile-action-button .icon line[data-v-95f75cf0], .mobile-action-button .icon polyline[data-v-95f75cf0], .mobile-action-button .icon rect[data-v-95f75cf0], .mobile-action-button .icon circle[data-v-95f75cf0] {\n  transition: 150ms all ease;\n}\n.mobile-action-button .label[data-v-95f75cf0] {\n  transition: 150ms all ease;\n  font-size: 0.875em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.mobile-action-button[data-v-95f75cf0]:active {\n  transform: scale(0.95);\n}\n.mobile-action-button[data-v-95f75cf0]:hover {\n  background: rgba(0, 188, 126, 0.1);\n}\n.mobile-action-button:hover .icon path[data-v-95f75cf0], .mobile-action-button:hover .icon line[data-v-95f75cf0], .mobile-action-button:hover .icon polyline[data-v-95f75cf0], .mobile-action-button:hover .icon rect[data-v-95f75cf0], .mobile-action-button:hover .icon circle[data-v-95f75cf0] {\n  stroke: #00bc7e;\n}\n.mobile-action-button:hover .label[data-v-95f75cf0] {\n  color: #00bc7e;\n}\n@media (prefers-color-scheme: dark) {\n.mobile-action-button[data-v-95f75cf0] {\n    background: #1e2024;\n}\n.mobile-action-button path[data-v-95f75cf0], .mobile-action-button line[data-v-95f75cf0], .mobile-action-button polyline[data-v-95f75cf0], .mobile-action-button rect[data-v-95f75cf0], .mobile-action-button circle[data-v-95f75cf0] {\n    stroke: #00bc7e;\n}\n.mobile-action-button .label[data-v-95f75cf0] {\n    color: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-action-button[data-v-b04b41ae] {\n  background: #f4f5f6;\n  margin-right: 15px;\n  border-radius: 8px;\n  padding: 7px 10px;\n  cursor: pointer;\n  border: none;\n}\n.mobile-action-button .flex[data-v-b04b41ae] {\n  display: flex;\n  align-items: center;\n}\n.mobile-action-button .icon[data-v-b04b41ae] {\n  vertical-align: middle;\n  margin-right: 10px;\n  font-size: 0.875em;\n}\n.mobile-action-button .label[data-v-b04b41ae] {\n  vertical-align: middle;\n  font-size: 0.875em;\n  font-weight: 700;\n  color: #1B2539;\n}\n@media (prefers-color-scheme: dark) {\n.mobile-action-button[data-v-b04b41ae] {\n    background: #1e2024;\n}\n.mobile-action-button path[data-v-b04b41ae], .mobile-action-button line[data-v-b04b41ae], .mobile-action-button polyline[data-v-b04b41ae], .mobile-action-button rect[data-v-b04b41ae], .mobile-action-button circle[data-v-b04b41ae] {\n    stroke: #00bc7e;\n}\n.mobile-action-button .label[data-v-b04b41ae] {\n    color: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#mobile-actions-wrapper[data-v-18dc5ba6] {\n  display: none;\n  background: white;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 35px;\n  z-index: 3;\n}\n.mobile-actions[data-v-18dc5ba6] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  white-space: nowrap;\n  overflow-x: auto;\n}\n@media only screen and (max-width: 960px) {\n#mobile-actions-wrapper[data-v-18dc5ba6] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n#mobile-actions-wrapper[data-v-18dc5ba6] {\n    background: #111314;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-toolbar[data-v-005ba5ab] {\n  background: white;\n  text-align: center;\n  display: none;\n  padding: 10px 0;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 6;\n}\n.mobile-toolbar > div[data-v-005ba5ab] {\n  width: 100%;\n  flex-grow: 1;\n  align-self: center;\n  white-space: nowrap;\n}\n.mobile-toolbar .go-back-button[data-v-005ba5ab] {\n  text-align: left;\n  flex: 1;\n}\n.mobile-toolbar .go-back-button .icon-back[data-v-005ba5ab] {\n  vertical-align: middle;\n  cursor: pointer;\n  opacity: 0;\n  visibility: hidden;\n  margin-top: -2px;\n}\n.mobile-toolbar .go-back-button .icon-back.is-visible[data-v-005ba5ab] {\n  opacity: 1;\n  visibility: visible;\n}\n.mobile-toolbar .directory-name[data-v-005ba5ab] {\n  line-height: 1;\n  text-align: center;\n  width: 100%;\n  vertical-align: middle;\n  font-size: 1em;\n  color: #1B2539;\n  font-weight: 700;\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: inline-block;\n}\n.mobile-toolbar .more-actions-button[data-v-005ba5ab] {\n  flex: 1;\n  text-align: right;\n  position: relative;\n}\n.mobile-toolbar .more-actions-button .tap-area[data-v-005ba5ab] {\n  display: inline-block;\n  padding: 10px;\n  position: absolute;\n  right: -10px;\n  top: -20px;\n}\n.mobile-toolbar .more-actions-button .tap-area path[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area line[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area polyline[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area rect[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area circle[data-v-005ba5ab] {\n  stroke: #1B2539;\n}\n@media only screen and (max-width: 960px) {\n.mobile-toolbar[data-v-005ba5ab] {\n    display: flex;\n}\n}\n@media (prefers-color-scheme: dark) {\n.mobile-toolbar[data-v-005ba5ab] {\n    background: #111314;\n}\n.mobile-toolbar .directory-name[data-v-005ba5ab] {\n    color: #bec6cf;\n}\n.mobile-toolbar .more-actions-button .tap-area path[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area line[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area polyline[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area rect[data-v-005ba5ab], .mobile-toolbar .more-actions-button .tap-area circle[data-v-005ba5ab] {\n    stroke: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".progress-bar[data-v-7fb97850] {\n  width: 100%;\n  height: 5px;\n  background: #f4f5f6;\n  margin-top: 5px;\n  border-radius: 10px;\n}\n.progress-bar span[data-v-7fb97850] {\n  background: #00bc7e;\n  display: block;\n  height: 100%;\n  border-radius: 10px;\n  max-width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-7fb97850] {\n    background: #1e2024;\n}\n}\n@media only screen and (min-width: 680px) and (prefers-color-scheme: dark) {\n.progress-bar[data-v-7fb97850] {\n    background: #1e2024;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-bar[data-v-23e12306] {\n  position: relative;\n}\n.search-bar input[data-v-23e12306] {\n  background: transparent;\n  border-radius: 8px;\n  outline: 0;\n  padding: 9px 20px 9px 43px;\n  font-weight: 400;\n  font-size: 1em;\n  min-width: 175px;\n  transition: 0.15s all ease;\n  border: 1px solid white;\n  -webkit-appearance: none;\n}\n.search-bar input[data-v-23e12306]::-moz-placeholder {\n  color: #1B2539;\n  font-size: 0.875em;\n  font-weight: 500;\n}\n.search-bar input[data-v-23e12306]:-ms-input-placeholder {\n  color: #1B2539;\n  font-size: 0.875em;\n  font-weight: 500;\n}\n.search-bar input[data-v-23e12306]::placeholder {\n  color: #1B2539;\n  font-size: 0.875em;\n  font-weight: 500;\n}\n.search-bar input[data-v-23e12306]:focus {\n  border: 1px solid #00bc7e;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\n.search-bar input:focus + .icon path[data-v-23e12306] {\n  fill: #00bc7e;\n}\n.search-bar .icon[data-v-23e12306] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 11px 15px;\n}\n.search-bar .icon .pointer[data-v-23e12306] {\n  cursor: pointer;\n}\n@media only screen and (max-width: 1024px) {\n.search-bar input[data-v-23e12306] {\n    max-width: 190px;\n    padding-right: 0;\n}\n}\n@media only screen and (max-width: 690px) {\n.search-bar input[data-v-23e12306] {\n    min-width: initial;\n    width: 100%;\n    max-width: initial;\n    padding: 9px 20px 9px 30px;\n}\n.search-bar input[data-v-23e12306]:focus {\n    border: 1px solid transparent;\n    box-shadow: none;\n}\n.search-bar .icon[data-v-23e12306] {\n    padding: 11px 15px 11px 0;\n}\n}\n@media (prefers-color-scheme: dark) {\n.search-bar input[data-v-23e12306] {\n    border-color: transparent;\n    color: #bec6cf;\n}\n.search-bar input[data-v-23e12306]::-moz-placeholder {\n    color: #7d858c;\n}\n.search-bar input[data-v-23e12306]:-ms-input-placeholder {\n    color: #7d858c;\n}\n.search-bar input[data-v-23e12306]::placeholder {\n    color: #7d858c;\n}\n.search-bar .icon svg path[data-v-23e12306] {\n    fill: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button[data-v-8eb7bbc0] {\n  height: 42px;\n  width: 42px;\n  border-radius: 8px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  text-align: center;\n  cursor: pointer;\n  white-space: nowrap;\n  outline: none;\n  border: none;\n}\n.button[data-v-8eb7bbc0]:hover {\n  background: #f4f5f6;\n}\n.button:hover path[data-v-8eb7bbc0], .button:hover line[data-v-8eb7bbc0], .button:hover polyline[data-v-8eb7bbc0], .button:hover rect[data-v-8eb7bbc0], .button:hover circle[data-v-8eb7bbc0] {\n  transition: 150ms all ease;\n  stroke: #00bc7e;\n}\n@media (prefers-color-scheme: dark) {\n.button[data-v-8eb7bbc0] {\n    background: transparent;\n}\n.button[data-v-8eb7bbc0]:hover {\n    background: #1e2024;\n}\n.button path[data-v-8eb7bbc0], .button line[data-v-8eb7bbc0], .button polyline[data-v-8eb7bbc0], .button rect[data-v-8eb7bbc0], .button circle[data-v-8eb7bbc0] {\n    stroke: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sync-alt[data-v-4c87f9e8] {\n  -webkit-animation: spin-data-v-4c87f9e8 1s linear infinite;\n          animation: spin-data-v-4c87f9e8 1s linear infinite;\n  margin-right: 5px;\n}\n.sync-alt polyline[data-v-4c87f9e8], .sync-alt path[data-v-4c87f9e8] {\n  stroke: #00bc7e;\n}\n@-webkit-keyframes spin-data-v-4c87f9e8 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-4c87f9e8 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.info-panel-enter-active[data-v-4c87f9e8],\n.info-panel-leave-active[data-v-4c87f9e8] {\n  transition: all 0.3s ease;\n}\n.info-panel-enter[data-v-4c87f9e8],\n.info-panel-leave-to[data-v-4c87f9e8] {\n  opacity: 0;\n  transform: translateY(-100%);\n}\n.upload-progress[data-v-4c87f9e8] {\n  width: 100%;\n  padding-bottom: 10px;\n  position: relative;\n  z-index: 1;\n}\n.upload-progress .progress-title[data-v-4c87f9e8] {\n  font-weight: 700;\n  text-align: center;\n}\n.upload-progress .progress-title span[data-v-4c87f9e8] {\n  font-size: 0.875em;\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-4c87f9e8] {\n    background: #1e2024;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/merge-images/dist/index.es2015.js":
/*!********************************************************!*\
  !*** ./node_modules/merge-images/dist/index.es2015.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Defaults
var defaultOptions = {
	format: 'image/png',
	quality: 0.92,
	width: undefined,
	height: undefined,
	Canvas: undefined,
	crossOrigin: undefined
};

// Return Promise
var mergeImages = function (sources, options) {
	if ( sources === void 0 ) sources = [];
	if ( options === void 0 ) options = {};

	return new Promise(function (resolve) {
	options = Object.assign({}, defaultOptions, options);

	// Setup browser/Node.js specific variables
	var canvas = options.Canvas ? new options.Canvas() : window.document.createElement('canvas');
	var Image = options.Image || window.Image;

	// Load sources
	var images = sources.map(function (source) { return new Promise(function (resolve, reject) {
		// Convert sources to objects
		if (source.constructor.name !== 'Object') {
			source = { src: source };
		}

		// Resolve source and img when loaded
		var img = new Image();
		img.crossOrigin = options.crossOrigin;
		img.onerror = function () { return reject(new Error('Couldn\'t load image')); };
		img.onload = function () { return resolve(Object.assign({}, source, { img: img })); };
		img.src = source.src;
	}); });

	// Get canvas context
	var ctx = canvas.getContext('2d');

	// When sources have loaded
	resolve(Promise.all(images)
		.then(function (images) {
			// Set canvas dimensions
			var getSize = function (dim) { return options[dim] || Math.max.apply(Math, images.map(function (image) { return image.img[dim]; })); };
			canvas.width = getSize('width');
			canvas.height = getSize('height');

			// Draw images to canvas
			images.forEach(function (image) {
				ctx.globalAlpha = image.opacity ? image.opacity : 1;
				return ctx.drawImage(image.img, image.x || 0, image.y || 0);
			});

			if (options.Canvas && options.format === 'image/jpeg') {
				// Resolve data URI for node-canvas jpeg async
				return new Promise(function (resolve, reject) {
					canvas.toDataURL(options.format, {
						quality: options.quality,
						progressive: false
					}, function (err, jpeg) {
						if (err) {
							reject(err);
							return;
						}
						resolve(jpeg);
					});
				});
			}

			// Resolve all other data URIs sync
			return canvas.toDataURL(options.format, options.quality);
		}));
});
};

/* harmony default export */ __webpack_exports__["default"] = (mergeImages);
//# sourceMappingURL=index.es2015.js.map


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true& ***!
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
    "label",
    {
      staticClass: "button file-input button-base",
      class: _vm.buttonStyle,
      attrs: { label: "file" }
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("input", {
        directives: [
          { name: "show", rawName: "v-show", value: false, expression: "false" }
        ],
        attrs: {
          accept: "*",
          id: "file",
          type: "file",
          name: "files[]",
          multiple: ""
        },
        on: { change: _vm.emmitFiles }
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isVisible || _vm.showFromPreview,
          expression: "isVisible || showFromPreview"
        }
      ],
      ref: "contextmenu",
      staticClass: "contextmenu",
      class: { filePreviewFixed: _vm.showFromPreview },
      style: { top: _vm.positionY + "px", left: _vm.positionX + "px" },
      on: { click: _vm.closeAndResetContextMenu }
    },
    [
      _vm.showFromPreview
        ? _c(
            "div",
            { staticClass: "menu-options", attrs: { id: "menu-list" } },
            [
              _c("ul", { staticClass: "menu-option-group" }, [
                _c(
                  "li",
                  { staticClass: "menu-option", on: { click: _vm.moveItem } },
                  [
                    _c(
                      "div",
                      { staticClass: "icon" },
                      [_c("corner-down-right-icon", { attrs: { size: "17" } })],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-label" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("context_menu.move")) +
                          "\n                "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "menu-option", on: { click: _vm.shareItem } },
                  [
                    _c(
                      "div",
                      { staticClass: "icon" },
                      [_c("link-icon", { attrs: { size: "17" } })],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-label" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(
                            _vm.item.shared
                              ? _vm.$t("context_menu.share_edit")
                              : _vm.$t("context_menu.share")
                          ) +
                          "\n                "
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "menu-option", on: { click: _vm.deleteItem } },
                  [
                    _c(
                      "div",
                      { staticClass: "icon" },
                      [_c("trash-2-icon", { attrs: { size: "17" } })],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-label" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("context_menu.delete")) +
                          "\n                "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "menu-option-group" }, [
                !_vm.isFolder
                  ? _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.downloadItem }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [
                            _c("download-cloud-icon", { attrs: { size: "17" } })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.download")) +
                              "\n                "
                          )
                        ])
                      ]
                    )
                  : _vm._e()
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$isThisLocation(["trash", "trash-root"]) &&
      _vm.$checkPermission("master") &&
      !_vm.showFromPreview
        ? _c(
            "div",
            { staticClass: "menu-options", attrs: { id: "menu-list" } },
            [
              _c("ul", { staticClass: "menu-option-group" }, [
                _vm.item
                  ? _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: {
                          click: function($event) {
                            return _vm.$store.dispatch("restoreItem", _vm.item)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("life-buoy-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.restore")) +
                              "\n                "
                          )
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.item
                  ? _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.deleteItem }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("trash-2-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.delete")) +
                              "\n                "
                          )
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "li",
                  {
                    staticClass: "menu-option",
                    on: {
                      click: function($event) {
                        return _vm.$store.dispatch("emptyTrash")
                      }
                    }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "icon" },
                      [_c("trash-icon", { attrs: { size: "17" } })],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-label" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("context_menu.empty_trash")) +
                          "\n                "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.item
                ? _c("ul", { staticClass: "menu-option-group" }, [
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.ItemDetail }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("eye-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.detail")) +
                              "\n                "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.isFolder
                      ? _c(
                          "li",
                          {
                            staticClass: "menu-option",
                            on: { click: _vm.downloadItem }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "icon" },
                              [
                                _c("download-cloud-icon", {
                                  attrs: { size: "17" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-label" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.$t("context_menu.download")) +
                                  "\n                "
                              )
                            ])
                          ]
                        )
                      : _vm._e()
                  ])
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$isThisLocation(["shared"]) &&
      _vm.$checkPermission("master") &&
      !_vm.showFromPreview
        ? _c(
            "div",
            { staticClass: "menu-options", attrs: { id: "menu-list" } },
            [
              _vm.item && _vm.isFolder
                ? _c("ul", { staticClass: "menu-option-group" }, [
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.addToFavourites }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("star-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                _vm.isInFavourites
                                  ? _vm.$t(
                                      "context_menu.remove_from_favourites"
                                    )
                                  : _vm.$t("context_menu.add_to_favourites")
                              ) +
                              "\n                "
                          )
                        ])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.item
                ? _c("ul", { staticClass: "menu-option-group" }, [
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.shareItem }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("link-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                _vm.item.shared
                                  ? _vm.$t("context_menu.share_edit")
                                  : _vm.$t("context_menu.share")
                              ) +
                              "\n                "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.deleteItem }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("trash-2-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.delete")) +
                              "\n                "
                          )
                        ])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.item
                ? _c("ul", { staticClass: "menu-option-group" }, [
                    _vm.item
                      ? _c(
                          "li",
                          {
                            staticClass: "menu-option",
                            on: { click: _vm.ItemDetail }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "icon" },
                              [_c("eye-icon", { attrs: { size: "17" } })],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-label" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.$t("context_menu.detail")) +
                                  "\n                "
                              )
                            ])
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.isFolder
                      ? _c(
                          "li",
                          {
                            staticClass: "menu-option",
                            on: { click: _vm.downloadItem }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "icon" },
                              [
                                _c("download-cloud-icon", {
                                  attrs: { size: "17" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-label" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.$t("context_menu.download")) +
                                  "\n                "
                              )
                            ])
                          ]
                        )
                      : _vm._e()
                  ])
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$isThisLocation(["base", "participant_uploads", "latest"]) &&
      _vm.$checkPermission("master") &&
      !_vm.showFromPreview
        ? _c(
            "div",
            { staticClass: "menu-options", attrs: { id: "menu-list" } },
            [
              !_vm.$isThisLocation(["participant_uploads", "latest"])
                ? _c("ul", { staticClass: "menu-option-group" }, [
                    _vm.item && _vm.isFolder
                      ? _c(
                          "li",
                          {
                            staticClass: "menu-option",
                            on: { click: _vm.addToFavourites }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "icon" },
                              [_c("star-icon", { attrs: { size: "17" } })],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-label" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(
                                    _vm.isInFavourites
                                      ? _vm.$t(
                                          "context_menu.remove_from_favourites"
                                        )
                                      : _vm.$t("context_menu.add_to_favourites")
                                  ) +
                                  "\n                "
                              )
                            ])
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.createFolder }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("folder-plus-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.create_folder")) +
                              "\n                "
                          )
                        ])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.item
                ? _c("ul", { staticClass: "menu-option-group" }, [
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.moveItem }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [
                            _c("corner-down-right-icon", {
                              attrs: { size: "17" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.move")) +
                              "\n                "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.copyItem }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("copy-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                  " +
                              _vm._s(_vm.$t("context_menu.copy")) +
                              "\n                "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.shareItem }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("link-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                _vm.item.shared
                                  ? _vm.$t("context_menu.share_edit")
                                  : _vm.$t("context_menu.share")
                              ) +
                              "\n                "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.deleteItem }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("trash-2-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.delete")) +
                              "\n                "
                          )
                        ])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.item
                ? _c("ul", { staticClass: "menu-option-group" }, [
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.ItemDetail }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("eye-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.detail")) +
                              "\n                "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.downloadItem }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [
                            _c("download-cloud-icon", { attrs: { size: "17" } })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.download")) +
                              "\n                "
                          )
                        ])
                      ]
                    )
                  ])
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$isThisLocation(["base", "public"]) &&
      _vm.$checkPermission("editor") &&
      !_vm.showFromPreview
        ? _c(
            "div",
            { staticClass: "menu-options", attrs: { id: "menu-list" } },
            [
              _c("ul", { staticClass: "menu-option-group" }, [
                _c(
                  "li",
                  {
                    staticClass: "menu-option",
                    on: { click: _vm.createFolder }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "icon" },
                      [_c("folder-plus-icon", { attrs: { size: "17" } })],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-label" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("context_menu.create_folder")) +
                          "\n                "
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _vm.item
                ? _c("ul", { staticClass: "menu-option-group" }, [
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.moveItem }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [
                            _c("corner-down-right-icon", {
                              attrs: { size: "17" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.move")) +
                              "\n                "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.deleteItem }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("trash-2-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.delete")) +
                              "\n                "
                          )
                        ])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.item
                ? _c("ul", { staticClass: "menu-option-group" }, [
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.ItemDetail }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("eye-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.detail")) +
                              "\n                "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.isFolder
                      ? _c(
                          "li",
                          {
                            staticClass: "menu-option",
                            on: { click: _vm.downloadItem }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "icon" },
                              [
                                _c("download-cloud-icon", {
                                  attrs: { size: "17" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-label" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.$t("context_menu.download")) +
                                  "\n                "
                              )
                            ])
                          ]
                        )
                      : _vm._e()
                  ])
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$isThisLocation(["base", "public"]) &&
      _vm.$checkPermission("visitor") &&
      !_vm.showFromPreview
        ? _c(
            "div",
            { staticClass: "menu-options", attrs: { id: "menu-list" } },
            [
              _vm.item
                ? _c("ul", { staticClass: "menu-option-group" }, [
                    _c(
                      "li",
                      {
                        staticClass: "menu-option",
                        on: { click: _vm.ItemDetail }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon" },
                          [_c("eye-icon", { attrs: { size: "17" } })],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-label" }, [
                          _vm._v(
                            "\n                    " +
                              _vm._s(_vm.$t("context_menu.detail")) +
                              "\n                "
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    !_vm.isFolder
                      ? _c(
                          "li",
                          {
                            staticClass: "menu-option",
                            on: { click: _vm.downloadItem }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "icon" },
                              [
                                _c("download-cloud-icon", {
                                  attrs: { size: "17" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "text-label" }, [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(_vm.$t("context_menu.download")) +
                                  "\n                "
                              )
                            ])
                          ]
                        )
                      : _vm._e()
                  ])
                : _vm._e()
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true& ***!
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
    "div",
    { attrs: { id: "desktop-toolbar" } },
    [
      _c("div", { staticClass: "toolbar-wrapper" }, [
        _vm.homeDirectory
          ? _c("div", { staticClass: "toolbar-go-back" }, [
              _c(
                "div",
                { staticClass: "go-back-button", on: { click: _vm.goBack } },
                [
                  _c("chevron-left-icon", {
                    staticClass: "icon-back",
                    class: { "is-active": _vm.browseHistory.length > 1 },
                    attrs: { size: "17" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "back-directory-title" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.directoryName) +
                        "\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _vm.browseHistory.length > 1 &&
                  _vm.$isThisLocation(["base", "public"])
                    ? _c(
                        "span",
                        {
                          staticClass: "folder-options",
                          attrs: { id: "folder-actions" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.folderActions($event)
                            }
                          }
                        },
                        [
                          _c("more-horizontal-icon", {
                            staticClass: "icon-more",
                            attrs: { size: "14" }
                          })
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "toolbar-tools" }, [
          _c(
            "div",
            { staticClass: "toolbar-button-wrapper" },
            [_c("SearchBar")],
            1
          ),
          _vm._v(" "),
          _vm.$checkPermission(["master", "editor"])
            ? _c(
                "div",
                { staticClass: "toolbar-button-wrapper" },
                [
                  _c("ToolbarButtonUpload", {
                    class: {
                      "is-inactive": _vm.canUploadInView || !_vm.hasCapacity
                    },
                    attrs: { action: _vm.$t("actions.upload") }
                  }),
                  _vm._v(" "),
                  _c("ToolbarButton", {
                    class: { "is-inactive": _vm.canCreateFolderInView },
                    attrs: {
                      source: "folder-plus",
                      action: _vm.$t("actions.create_folder")
                    },
                    nativeOn: {
                      click: function($event) {
                        return _vm.createFolder($event)
                      }
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.$checkPermission(["master", "editor"])
            ? _c(
                "div",
                { staticClass: "toolbar-button-wrapper" },
                [
                  _c("ToolbarButton", {
                    class: { "is-inactive": _vm.canMoveInView },
                    attrs: { source: "move", action: _vm.$t("actions.move") },
                    nativeOn: {
                      click: function($event) {
                        return _vm.moveItem($event)
                      }
                    }
                  }),
                  _vm._v(" "),
                  !_vm.$isThisLocation(["public"])
                    ? _c("ToolbarButton", {
                        class: { "is-inactive": _vm.canShareInView },
                        attrs: {
                          source: "share",
                          action: _vm.$t("actions.share")
                        },
                        nativeOn: {
                          click: function($event) {
                            return _vm.shareItem($event)
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("ToolbarButton", {
                    class: { "is-inactive": _vm.canDeleteInView },
                    attrs: {
                      source: "trash",
                      action: _vm.$t("actions.delete")
                    },
                    nativeOn: {
                      click: function($event) {
                        return _vm.deleteItem($event)
                      }
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "toolbar-button-wrapper" },
            [
              _c("ToolbarButton", {
                attrs: {
                  source: _vm.preview,
                  action: _vm.$t("actions.preview")
                },
                nativeOn: {
                  click: function($event) {
                    return _vm.$store.dispatch("changePreviewType")
                  }
                }
              }),
              _vm._v(" "),
              _c("ToolbarButton", {
                class: { active: _vm.fileInfoVisible },
                attrs: { source: "info" },
                nativeOn: {
                  click: function($event) {
                    return _vm.$store.dispatch("fileInfoToggle")
                  }
                }
              })
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "toolbar-wrapper" }, [
        _c("div", { staticClass: "toolbar-tools" }, [
          _c(
            "div",
            { staticClass: "toolbar-button-wrapper" },
            [
              _c(
                "Button",
                {
                  staticClass: "btn",
                  attrs: {
                    source: _vm.preview,
                    action: _vm.$t("actions.preview")
                  },
                  on: { click: _vm.AddCompany }
                },
                [_c("i", { staticClass: "fas fa-user-plus" })]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("UploadProgress", { attrs: { file_name: "new name" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true& ***!
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
  return _c("div", { staticClass: "empty-message" }, [
    _c(
      "div",
      { staticClass: "message" },
      [
        _vm.icon === "eye-off"
          ? _c("eye-off-icon", { staticClass: "icon", attrs: { size: "36" } })
          : _vm._e(),
        _vm._v(" "),
        _c("p", [_vm._v(_vm._s(_vm.message))])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true& ***!
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
  return _vm.isLoading || _vm.isEmpty
    ? _c("div", { staticClass: "empty-page" }, [
        _c("div", { staticClass: "empty-state" }, [
          _vm.$isThisLocation(["shared"]) && !_vm.isLoading
            ? _c("div", { staticClass: "text-content" }, [
                _c("h1", { staticClass: "title" }, [
                  _vm._v(_vm._s(_vm.$t("shared.empty_shared")))
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.$isThisLocation(["trash", "trash-root"]) && !_vm.isLoading
            ? _c("div", { staticClass: "text-content" }, [
                _c("h1", { staticClass: "title" }, [
                  _vm._v(_vm._s(_vm.$t("empty_page.title")))
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.$isThisLocation(["participant_uploads"]) && !_vm.isLoading
            ? _c("div", { staticClass: "text-content" }, [
                _c("h1", { staticClass: "title" }, [
                  _vm._v(_vm._s(_vm.$t("messages.nothing_from_participants")))
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.$isThisLocation(["base", "public", "latest"]) && !_vm.isLoading
            ? _c(
                "div",
                { staticClass: "text-content" },
                [
                  _c("h1", { staticClass: "title" }, [
                    _vm._v(_vm._s(_vm.$t("empty_page.title")))
                  ]),
                  _vm._v(" "),
                  _vm.$checkPermission(["master", "editor"])
                    ? _c("p", { staticClass: "description" }, [
                        _vm._v(_vm._s(_vm.$t("empty_page.description")))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$checkPermission(["master", "editor"])
                    ? _c(
                        "ButtonUpload",
                        { attrs: { "button-style": "theme" } },
                        [
                          _vm._v(
                            "\n                " +
                              _vm._s(_vm.$t("empty_page.call_to_action")) +
                              "\n            "
                          )
                        ]
                      )
                    : _vm._e()
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isLoading
            ? _c("div", { staticClass: "text-content" }, [_c("Spinner")], 1)
            : _vm._e()
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "file-content",
      class: {
        "is-offset": _vm.uploadingFilesCount,
        "is-dragging": _vm.isDragging
      },
      on: {
        dragover: [
          function($event) {
            $event.preventDefault()
          },
          _vm.dragEnter
        ],
        drop: function($event) {
          $event.stopPropagation()
          $event.preventDefault()
          return _vm.dropUpload($event)
        },
        dragleave: _vm.dragLeave
      }
    },
    [
      _c(
        "div",
        {
          ref: "fileContainer",
          staticClass: "files-container",
          class: {
            "is-fileinfo-visible": _vm.fileInfoVisible && !_vm.$isMinimalScale()
          },
          on: {
            click: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              return _vm.filesContainerClick($event)
            }
          }
        },
        [
          _c("MobileToolbar"),
          _vm._v(" "),
          _c("SearchBar", { staticClass: "mobile-search" }),
          _vm._v(" "),
          _c("MobileActions"),
          _vm._v(" "),
          _vm.isList
            ? _c(
                "div",
                { staticClass: "file-list-wrapper" },
                [
                  _c(
                    "transition-group",
                    {
                      staticClass: "file-list",
                      class: _vm.FilePreviewType,
                      attrs: { name: "file", tag: "section" }
                    },
                    _vm._l(_vm.data, function(item) {
                      return _c("FileItemList", {
                        key: item.unique_id,
                        staticClass: "file-item",
                        attrs: { data: item },
                        on: {
                          dragstart: function($event) {
                            return _vm.dragStart(item)
                          }
                        },
                        nativeOn: {
                          drop: function($event) {
                            $event.stopPropagation()
                            $event.preventDefault()
                            return _vm.dragFinish(item, $event)
                          },
                          contextmenu: function($event) {
                            $event.preventDefault()
                            return _vm.contextMenu($event, item)
                          }
                        }
                      })
                    }),
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.isGrid
            ? _c(
                "div",
                { staticClass: "file-grid-wrapper" },
                [
                  _c(
                    "transition-group",
                    {
                      staticClass: "file-list",
                      class: _vm.FilePreviewType,
                      attrs: { name: "file", tag: "section" }
                    },
                    _vm._l(_vm.data, function(item) {
                      return _c("FileItemGrid", {
                        key: item.unique_id,
                        staticClass: "file-item",
                        attrs: { data: item },
                        on: {
                          dragstart: function($event) {
                            return _vm.dragStart(item)
                          }
                        },
                        nativeOn: {
                          drop: function($event) {
                            $event.preventDefault()
                            return _vm.dragFinish(item, $event)
                          },
                          contextmenu: function($event) {
                            $event.preventDefault()
                            return _vm.contextMenu($event, item)
                          }
                        }
                      })
                    }),
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          !_vm.isSearching ? _c("EmptyPage") : _vm._e(),
          _vm._v(" "),
          _vm.isSearching && _vm.isEmpty
            ? _c("EmptyMessage", {
                attrs: {
                  message: _vm.$t("messages.nothing_was_found"),
                  icon: "eye-slash"
                }
              })
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      !_vm.$isMinimalScale()
        ? _c(
            "div",
            {
              staticClass: "file-info-container",
              class: { "is-fileinfo-visible": _vm.fileInfoVisible }
            },
            [
              _vm.fileInfoDetail ? _c("FileInfoPanel") : _vm._e(),
              _vm._v(" "),
              !_vm.fileInfoDetail
                ? _c("EmptyMessage", {
                    attrs: {
                      message: _vm.$t("messages.nothing_to_preview"),
                      icon: "eye-off"
                    }
                  })
                : _vm._e()
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=template&id=95b9c6e8&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=template&id=95b9c6e8&scoped=true& ***!
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
  return _vm.fileInfoDetail
    ? _c(
        "div",
        { staticClass: "file-info-content" },
        [
          _c(
            "div",
            { staticClass: "file-headline", attrs: { spellcheck: "false" } },
            [
              _c("FilePreview"),
              _vm._v(" "),
              _c("div", { staticClass: "flex" }, [
                _c("div", { staticClass: "icon" }, [
                  _c(
                    "div",
                    { staticClass: "icon-preview" },
                    [
                      _vm.fileType === "image"
                        ? _c("image-icon", { attrs: { size: "21" } })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.fileType === "video"
                        ? _c("video-icon", { attrs: { size: "21" } })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.fileType === "folder"
                        ? _c("folder-icon", { attrs: { size: "21" } })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.fileType === "file"
                        ? _c("file-icon", { attrs: { size: "21" } })
                        : _vm._e()
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "file-info" }, [
                  _c("span", { ref: "name", staticClass: "name" }, [
                    _vm._v(_vm._s(_vm.fileInfoDetail.name))
                  ]),
                  _vm._v(" "),
                  _vm.fileInfoDetail.mimetype
                    ? _c("span", { staticClass: "mimetype" }, [
                        _vm._v("." + _vm._s(_vm.fileInfoDetail.mimetype))
                      ])
                    : _vm._e()
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "ListInfo",
            [
              _vm.fileInfoDetail.filesize
                ? _c("ListInfoItem", {
                    attrs: {
                      title: _vm.$t("file_detail.size"),
                      content: _vm.fileInfoDetail.filesize
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.$checkPermission(["master"]) &&
              _vm.fileInfoDetail.user_scope !== "master"
                ? _c("ListInfoItem", {
                    attrs: {
                      title: _vm.$t("file_detail.author"),
                      content: _vm.$t("file_detail.author_participant")
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("ListInfoItem", {
                attrs: {
                  title: _vm.$t("file_detail.created_at"),
                  content: _vm.fileInfoDetail.created_at
                }
              }),
              _vm._v(" "),
              _vm.$checkPermission(["master"])
                ? _c(
                    "ListInfoItem",
                    { attrs: { title: _vm.$t("file_detail.where") } },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "action-button",
                          on: { click: _vm.moveItem }
                        },
                        [
                          _c("span", [
                            _vm._v(
                              _vm._s(
                                _vm.fileInfoDetail.parent
                                  ? _vm.fileInfoDetail.parent.name
                                  : _vm.$t("locations.home")
                              )
                            )
                          ]),
                          _vm._v(" "),
                          _c("edit-2-icon", {
                            staticClass: "edit-icon",
                            attrs: { size: "10" }
                          })
                        ],
                        1
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$checkPermission("master") && _vm.fileInfoDetail.shared
                ? _c(
                    "ListInfoItem",
                    { attrs: { title: _vm.$t("file_detail.shared") } },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "action-button",
                          on: { click: _vm.shareItemOptions }
                        },
                        [
                          _c("span", [_vm._v(_vm._s(_vm.sharedInfo))]),
                          _vm._v(" "),
                          _c("edit-2-icon", {
                            staticClass: "edit-icon",
                            attrs: { size: "10" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "sharelink" },
                        [
                          _vm.isLocked
                            ? _c("lock-icon", {
                                staticClass: "lock-icon",
                                attrs: { size: "17" },
                                on: { click: _vm.shareItemOptions }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.isLocked
                            ? _c("unlock-icon", {
                                staticClass: "lock-icon",
                                attrs: { size: "17" },
                                on: { click: _vm.shareItemOptions }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _c("CopyInput", {
                            staticClass: "copy-sharelink",
                            attrs: {
                              size: "small",
                              value: _vm.fileInfoDetail.shared.link
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.canShowMetaData
                ? _c(
                    "ListInfoItem",
                    { attrs: { title: _vm.$t("file_detail_meta.meta_data") } },
                    [_c("ImageMetaData")],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true& ***!
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
    {
      staticClass: "file-wrapper",
      attrs: { spellcheck: "false" },
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.clickedItem($event)
        },
        dblclick: _vm.goToItem
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "file-item",
          class: { "is-clicked": _vm.isClicked, "is-dragenter": _vm.area },
          attrs: { draggable: _vm.canDrag },
          on: {
            dragstart: function($event) {
              return _vm.$emit("dragstart")
            },
            drop: function($event) {
              _vm.$emit("drop")
              _vm.area = false
            },
            dragleave: _vm.dragLeave,
            dragover: function($event) {
              $event.preventDefault()
              return _vm.dragEnter($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "icon-item" },
            [
              _vm.isImage
                ? _c("img", {
                    staticClass: "image",
                    attrs: {
                      loading: "lazy",
                      src: _vm.data.thumbnail,
                      alt: _vm.data.name,
                      title: _vm.data.thumbnail
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "container",
                  staticStyle: { "max-width": "183px" }
                },
                [
                  _vm.isVideo
                    ? _c("a", {
                        staticClass: " video-preview",
                        attrs: {
                          href: _vm.data.file,
                          loading: "lazy",
                          "data-source": _vm.data.thumb_img,
                          "data-frames": _vm.data.frames
                        }
                      })
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _vm.isFolder
                ? _c("FontAwesomeIcon", {
                    staticClass: "folder-icon",
                    class: { "is-deleted": _vm.isDeleted },
                    attrs: { icon: "folder" }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "item-name" }, [
            _c(
              "b",
              {
                ref: "name",
                staticClass: "name",
                attrs: { contenteditable: _vm.canEditName },
                on: { input: _vm.renameItem }
              },
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.itemName) +
                    "\n                "
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "item-info" }, [
              _vm.$checkPermission("master") && _vm.data.shared
                ? _c(
                    "div",
                    { staticClass: "item-shared" },
                    [
                      _c("link-icon", {
                        staticClass: "shared-icon",
                        attrs: { size: "12" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$checkPermission("master") && _vm.data.user_scope !== "master"
                ? _c(
                    "div",
                    { staticClass: "item-shared" },
                    [
                      _c("user-plus-icon", {
                        staticClass: "shared-icon",
                        attrs: { size: "12" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isFolder
                ? _c("span", { staticClass: "item-size" }, [
                    _vm._v(_vm._s(_vm.data.filesize) + "   ")
                  ])
                : _vm._e(),
              _c("br"),
              _vm._v(" "),
              _c(
                "strong",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value:
                        _vm.isFolder == "false" &&
                        _vm.data.status != "No Status",
                      expression:
                        " isFolder =='false'  &&data.status !='No Status'"
                    }
                  ]
                },
                [
                  _vm._v(
                    "Status :" +
                      _vm._s(
                        _vm.data.status != "No Status" ? _vm.data.status : ""
                      )
                  )
                ]
              ),
              _vm._v(" "),
              _vm.isFolder
                ? _c("span", { staticClass: "item-length" }, [
                    _vm._v(
                      "\n                        " +
                        _vm._s(
                          _vm.folderItems == 0
                            ? _vm.$t("folder.empty")
                            : _vm.$tc("folder.item_counts", _vm.folderItems)
                        ) +
                        "\n\t\t\t\t    "
                    )
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _vm.$isMobile() &&
          !(_vm.$checkPermission("visitor") && _vm.isFolder) &&
          _vm.canShowMobileOptions
            ? _c(
                "span",
                {
                  staticClass: "show-actions",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.showItemActions($event)
                    }
                  }
                },
                [
                  _c("FontAwesomeIcon", {
                    staticClass: "icon-action",
                    attrs: { icon: "ellipsis-h" }
                  })
                ],
                1
              )
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true& ***!
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
    {
      staticClass: "file-wrapper",
      attrs: { oncontextmenu: "return false;", spellcheck: "false" },
      on: {
        click: function($event) {
          $event.stopPropagation()
          return _vm.clickedItem($event)
        },
        dblclick: _vm.goToItem
      }
    },
    [
      _c(
        "div",
        {
          staticClass: "file-item",
          class: { "is-clicked": _vm.isClicked, "is-dragenter": _vm.area },
          attrs: { draggable: _vm.canDrag },
          on: {
            dragstart: function($event) {
              return _vm.$emit("dragstart")
            },
            drop: function($event) {
              _vm.$emit("drop")
              _vm.area = false
            },
            dragleave: _vm.dragLeave,
            dragover: function($event) {
              $event.preventDefault()
              return _vm.dragEnter($event)
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "icon-item" },
            [
              _vm.isFile
                ? _c("span", { staticClass: "file-icon-text" }, [
                    _vm._v(
                      "\n\t\t\t\t\t" +
                        _vm._s(_vm._f("limitCharacters")(_vm.data.mimetype)) +
                        "\n\t\t\t "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isImage
                ? _c("img", {
                    staticClass: "image",
                    attrs: {
                      loading: "lazy",
                      src: _vm.data.thumbnail,
                      alt: _vm.data.name
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "container img",
                  staticStyle: { "max-width": "160px" }
                },
                [
                  _vm.isVideo
                    ? _c("a", {
                        staticClass: " video-preview",
                        attrs: {
                          href: _vm.data.file,
                          loading: "lazy",
                          "data-source": _vm.data.thumb_img,
                          src: _vm.data.thumbnail,
                          "data-frames": _vm.data.frames
                        },
                        on: { mouseleave: _vm.mouseLeave }
                      })
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _vm.isFolder
                ? _c("FontAwesomeIcon", {
                    staticClass: "folder-icon",
                    class: { "is-deleted": _vm.isDeleted },
                    attrs: { icon: "folder" }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "item-name" }, [
            _c(
              "b",
              {
                ref: "name",
                staticClass: "name",
                attrs: { contenteditable: _vm.canEditName },
                on: { input: _vm.renameItem }
              },
              [_vm._v("\n\t\t\t\t\t" + _vm._s(_vm.itemName) + "\n\t\t\t\t")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "item-info" }, [
              _vm.$checkPermission("master") && _vm.data.shared
                ? _c(
                    "div",
                    { staticClass: "item-shared" },
                    [
                      _c("link-icon", {
                        staticClass: "shared-icon",
                        attrs: { size: "12" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.$checkPermission("master") && _vm.data.user_scope !== "master"
                ? _c(
                    "div",
                    { staticClass: "item-shared" },
                    [
                      _c("user-plus-icon", {
                        staticClass: "shared-icon",
                        attrs: { size: "12" }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isFolder && _vm.data.label === "In Progress"
                ? _c("span", { staticClass: "item-size" }, [
                    _vm._v(
                      _vm._s(_vm.data.filesize) +
                        ", " +
                        _vm._s(_vm.timeStamp) +
                        "  , "
                    ),
                    _vm.data.status != "No Status"
                      ? _c("strong", [
                          _vm._v(
                            "Status :  " +
                              _vm._s(
                                _vm.data.status != "No Status"
                                  ? _vm.data.status
                                  : ""
                              ) +
                              " "
                          ),
                          _c("span", {
                            staticClass: "dot",
                            staticStyle: { "background-color": "red" }
                          })
                        ])
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.isFolder && _vm.data.label === "Approved"
                ? _c("span", { staticClass: "item-size" }, [
                    _vm._v(
                      _vm._s(_vm.data.filesize) +
                        ", " +
                        _vm._s(_vm.timeStamp) +
                        "  , "
                    ),
                    _vm.data.status != "No Status"
                      ? _c("strong", [
                          _vm._v(
                            "Status :  " +
                              _vm._s(
                                _vm.data.status != "No Status"
                                  ? _vm.data.status
                                  : ""
                              ) +
                              " "
                          ),
                          _c("span", {
                            staticClass: "dot",
                            staticStyle: { "background-color": "lightskyblue" }
                          })
                        ])
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.isFolder && _vm.data.label === "No Status"
                ? _c("span", { staticClass: "item-size" }, [
                    _vm._v(
                      _vm._s(_vm.data.filesize) +
                        ", " +
                        _vm._s(_vm.timeStamp) +
                        "  , "
                    ),
                    _vm.data.status != "No Status"
                      ? _c("strong", [
                          _vm._v(
                            "Status :  " +
                              _vm._s(
                                _vm.data.status != "No Status"
                                  ? _vm.data.status
                                  : ""
                              )
                          ),
                          _c("span", {
                            staticClass: "dot",
                            staticStyle: { "background-color": "greenyellow" }
                          })
                        ])
                      : _vm._e()
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.isFolder
                ? _c("span", { staticClass: "item-size" }, [
                    _vm._v(
                      _vm._s(_vm.data.filesize) +
                        ", " +
                        _vm._s(_vm.timeStamp) +
                        "  ,"
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.isFolder
                ? _c("span", { staticClass: "item-length" }, [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.folderItems == 0
                            ? _vm.$t("folder.empty")
                            : _vm.$tc("folder.item_counts", _vm.folderItems)
                        ) +
                        ", " +
                        _vm._s(_vm.timeStamp) +
                        " ,"
                    ),
                    _vm.isFolder == "false" && _vm.data.status != "No Status"
                      ? _c("strong", [
                          _vm._v(
                            "Status :  " +
                              _vm._s(
                                _vm.data.status != "No Status"
                                  ? _vm.data.status
                                  : ""
                              )
                          )
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _vm.$isMobile() && !(_vm.$checkPermission("visitor") && _vm.isFolder)
            ? _c("div", { staticClass: "actions" }, [
                _c(
                  "span",
                  {
                    staticClass: "show-actions",
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.showItemActions($event)
                      }
                    }
                  },
                  [
                    _c("FontAwesomeIcon", {
                      staticClass: "icon-action",
                      attrs: { icon: "ellipsis-v" }
                    })
                  ],
                  1
                )
              ])
            : _vm._e()
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FilePreview.vue?vue&type=template&id=4545fcde&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/FilePreview.vue?vue&type=template&id=4545fcde&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canBePreview
    ? _c("div", { staticClass: "preview" }, [
        _vm.fileInfoDetail.type == "image"
          ? _c("img", {
              attrs: {
                src: _vm.fileInfoDetail.thumbnail,
                alt: _vm.fileInfoDetail.name
              }
            })
          : _vm.fileInfoDetail.type == "audio"
          ? _c("audio", {
              attrs: {
                src: _vm.fileInfoDetail.file_url,
                controlsList: "nodownload",
                controls: ""
              }
            })
          : _vm.fileInfoDetail.type == "video"
          ? _c(
              "video",
              {
                attrs: {
                  controlsList: "nodownload",
                  disablePictureInPicture: "",
                  playsinline: "",
                  controls: ""
                }
              },
              [
                _c("source", {
                  attrs: { src: _vm.fileInfoDetail.file_url, type: "video/mp4" }
                })
              ]
            )
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=template&id=49f5e308&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=template&id=49f5e308&scoped=true& ***!
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
  return _c("div", [
    _c("ul", { staticClass: "meta-data-list" }, [
      _vm.fileInfoDetail.metadata.DateTimeOriginal
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.time_data")))]),
            _vm._v(" "),
            _c("b", [
              _vm._v(_vm._s(_vm.fileInfoDetail.metadata.DateTimeOriginal))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.Artist
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.author")))]),
            _vm._v(" "),
            _c("b", [_vm._v(_vm._s(_vm.fileInfoDetail.metadata.Artist))])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.ExifImageWidth &&
      _vm.fileInfoDetail.metadata.ExifImageLength
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.dimension")))]),
            _vm._v(" "),
            _c("b", [
              _vm._v(
                _vm._s(_vm.fileInfoDetail.metadata.ExifImageWidth) +
                  "x" +
                  _vm._s(_vm.fileInfoDetail.metadata.ExifImageLength)
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.XResolution &&
      _vm.fileInfoDetail.metadata.YResolution
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.resolution")))]),
            _vm._v(" "),
            _c("b", [
              _vm._v(
                _vm._s(_vm.fileInfoDetail.metadata.XResolution) +
                  "x" +
                  _vm._s(_vm.fileInfoDetail.metadata.YResolution)
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.ColorSpace
        ? _c("li", [
            _c("span", [
              _vm._v(" " + _vm._s(_vm.$t("file_detail_meta.color_space")))
            ]),
            _vm._v(" "),
            _c("b", [_vm._v(_vm._s(_vm.fileInfoDetail.metadata.ColorSpace))])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.Make
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.make")))]),
            _vm._v(" "),
            _c("b", [_vm._v(_vm._s(_vm.fileInfoDetail.metadata.Make))])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.Model
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.model")))]),
            _vm._v(" "),
            _c("b", [_vm._v(_vm._s(_vm.fileInfoDetail.metadata.Model))])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.ApertureValue
        ? _c("li", [
            _c("span", [
              _vm._v(_vm._s(_vm.$t("file_detail_meta.aperture_value")))
            ]),
            _vm._v(" "),
            _c("b", {
              domProps: {
                innerHTML: _vm._s(
                  parseInt(_vm.fileInfoDetail.metadata.ApertureValue) / 100
                )
              }
            })
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.ExposureTime
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.exposure")))]),
            _vm._v(" "),
            _c("b", [_vm._v(_vm._s(_vm.fileInfoDetail.metadata.ExposureTime))])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.FocalLength
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.focal")))]),
            _vm._v(" "),
            _c("b", [_vm._v(_vm._s(_vm.fileInfoDetail.metadata.FocalLength))])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.ISOSpeedRatings
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.iso")))]),
            _vm._v(" "),
            _c("b", [
              _vm._v(_vm._s(_vm.fileInfoDetail.metadata.ISOSpeedRatings))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.COMPUTED.ApertureFNumber
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.aperature")))]),
            _vm._v(" "),
            _c("b", [
              _vm._v(
                _vm._s(_vm.fileInfoDetail.metadata.COMPUTED.ApertureFNumber)
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.COMPUTED.CCDWidth
        ? _c("li", [
            _c("span", [
              _vm._v(_vm._s(_vm.$t("file_detail_meta.camera_lens")))
            ]),
            _vm._v(" "),
            _c("b", [
              _vm._v(_vm._s(_vm.fileInfoDetail.metadata.COMPUTED.CCDWidth))
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.GPSLongitude
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.longitude")))]),
            _vm._v(" "),
            _c("b", [
              _vm._v(
                _vm._s(
                  _vm.formatGps(
                    _vm.fileInfoDetail.metadata.GPSLongitude,
                    _vm.fileInfoDetail.metadata.GPSLongitudeRef
                  )
                )
              )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.fileInfoDetail.metadata.GPSLatitude
        ? _c("li", [
            _c("span", [_vm._v(_vm._s(_vm.$t("file_detail_meta.latitude")))]),
            _vm._v(" "),
            _c("b", [
              _vm._v(
                _vm._s(
                  _vm.formatGps(
                    _vm.fileInfoDetail.metadata.GPSLatitude,
                    _vm.fileInfoDetail.metadata.GPSLatitudeRef
                  )
                )
              )
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("button", { staticClass: "mobile-action-button" }, [
    _c(
      "div",
      { staticClass: "flex" },
      [
        _vm.icon === "credit-card"
          ? _c("credit-card-icon", {
              staticClass: "icon",
              attrs: { size: "15" }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "folder-plus"
          ? _c("folder-plus-icon", {
              staticClass: "icon",
              attrs: { size: "15" }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "th-list"
          ? _c("list-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "trash"
          ? _c("trash-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "th"
          ? _c("grid-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "user-plus"
          ? _c("user-plus-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "plus"
          ? _c("plus-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _c("span", { staticClass: "label" }, [_vm._t("default")], 2)
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c("button", { staticClass: "mobile-action-button" }, [
    _c(
      "div",
      { staticClass: "flex" },
      [
        _c("upload-cloud-icon", { staticClass: "icon", attrs: { size: "15" } }),
        _vm._v(" "),
        _c(
          "label",
          {
            staticClass: "label button file-input button-base",
            attrs: { label: "file" }
          },
          [
            _vm._t("default"),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: false,
                  expression: "false"
                }
              ],
              attrs: {
                id: "file",
                type: "file",
                name: "files[]",
                multiple: ""
              },
              on: { change: _vm.emmitFiles }
            })
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true& ***!
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
  return _c(
    "div",
    { attrs: { id: "mobile-actions-wrapper" } },
    [
      _vm.$isThisLocation(["trash", "trash-root"]) &&
      _vm.$checkPermission("master")
        ? _c(
            "div",
            { staticClass: "mobile-actions" },
            [
              _c(
                "MobileActionButton",
                {
                  attrs: { icon: _vm.previewIcon },
                  nativeOn: {
                    click: function($event) {
                      return _vm.switchPreview($event)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " + _vm._s(_vm.previewText) + "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "MobileActionButton",
                {
                  attrs: { icon: "trash" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.$store.dispatch("emptyTrash")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("context_menu.empty_trash")) +
                      "\n        "
                  )
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$isThisLocation(["base", "public"]) &&
      _vm.$checkPermission(["master", "editor"])
        ? _c(
            "div",
            { staticClass: "mobile-actions" },
            [
              _c(
                "MobileActionButton",
                {
                  attrs: { icon: "folder-plus" },
                  nativeOn: {
                    click: function($event) {
                      return _vm.createFolder($event)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " +
                      _vm._s(_vm.$t("context_menu.add_folder")) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c("MobileActionButtonUpload", [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.$t("context_menu.upload")) +
                    "\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "MobileActionButton",
                {
                  attrs: { icon: _vm.previewIcon },
                  nativeOn: {
                    click: function($event) {
                      return _vm.switchPreview($event)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " + _vm._s(_vm.previewText) + "\n        "
                  )
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      (_vm.$isThisLocation(["base", "shared", "public"]) &&
        _vm.$checkPermission("visitor")) ||
      (_vm.$isThisLocation(["latest", "shared"]) &&
        _vm.$checkPermission("master"))
        ? _c(
            "div",
            { staticClass: "mobile-actions" },
            [
              _c(
                "MobileActionButton",
                {
                  attrs: { icon: _vm.previewIcon },
                  nativeOn: {
                    click: function($event) {
                      return _vm.switchPreview($event)
                    }
                  }
                },
                [
                  _vm._v(
                    "\n            " + _vm._s(_vm.previewText) + "\n        "
                  )
                ]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("UploadProgress")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true& ***!
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
  return _c("div", { staticClass: "mobile-toolbar" }, [
    _c(
      "div",
      { staticClass: "go-back-button", on: { click: _vm.goBack } },
      [
        _c("chevron-left-icon", {
          staticClass: "icon-back",
          class: { "is-visible": _vm.browseHistory.length > 1 },
          attrs: { size: "17" }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "directory-name" }, [
      _vm._v(_vm._s(_vm.directoryName))
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "more-actions-button" }, [
      _vm.$checkPermission("master")
        ? _c(
            "div",
            {
              staticClass: "tap-area",
              on: { click: _vm.showMobileNavigation }
            },
            [_c("menu-icon", { attrs: { size: "17" } })],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "progress-bar" }, [
    _c("span", { style: { width: _vm.progress + "%" } })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true& ***!
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
  return _c("div", { staticClass: "search-bar" }, [
    !_vm.isQuery
      ? _c(
          "div",
          { staticClass: "icon" },
          [_c("search-icon", { attrs: { size: "19" } })],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.isQuery
      ? _c(
          "div",
          { staticClass: "icon", on: { click: _vm.resetQuery } },
          [_c("x-icon", { staticClass: "pointer", attrs: { size: "19" } })],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.query,
          expression: "query"
        }
      ],
      staticClass: "query",
      attrs: {
        type: "text",
        name: "query",
        placeholder: _vm.$t("inputs.placeholder_search_files")
      },
      domProps: { value: _vm.query },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.query = $event.target.value
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    "label",
    { staticClass: "button file-input", attrs: { label: "file" } },
    [
      _c("upload-cloud-icon", { attrs: { size: "17" } }),
      _vm._v(" "),
      _c("input", {
        directives: [
          { name: "show", rawName: "v-show", value: false, expression: "false" }
        ],
        attrs: { id: "file", type: "file", name: "files[]", multiple: "" },
        on: { change: _vm.emmitFiles }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true& ***!
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
  return _c("transition", { attrs: { name: "info-panel" } }, [
    _vm.uploadingFilesCount
      ? _c(
          "div",
          { staticClass: "upload-progress" },
          [
            _c("div", { staticClass: "progress-title" }, [
              _vm.isProcessingFile
                ? _c(
                    "span",
                    [
                      _c("refresh-cw-icon", {
                        staticClass: "sync-alt",
                        attrs: { size: "12" }
                      }),
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.$t("uploading.processing_file")) +
                          "\n                "
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.isProcessingFile && _vm.uploadingFilesCount.total === 1
                ? _c("span", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.$t("uploading.progress_single_upload", {
                            progress: _vm.uploadingFileProgress
                          })
                        ) +
                        "\n                    "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.isProcessingFile && _vm.uploadingFilesCount.total > 1
                ? _c("span", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(
                          _vm.$t("uploading.progress", {
                            current: _vm.uploadingFilesCount.current,
                            total: _vm.uploadingFilesCount.total,
                            progress: _vm.uploadingFileProgress
                          })
                        ) +
                        "\n                "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("ProgressBar", {
              attrs: {
                progress: _vm.uploadingFileProgress,
                time: _vm.uploadingFileTime
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "progress-title" }, [
              !_vm.isProcessingFile && _vm.uploadingFilesCount.total === 1
                ? _c("span", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.uploadingFileTime) +
                        "\n                "
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.isProcessingFile && _vm.uploadingFilesCount.total > 1
                ? _c("span", [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.uploadingFileTime) +
                        "\n                "
                    )
                  ])
                : _vm._e()
            ])
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FilesView/ButtonUpload.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FilesView/ButtonUpload.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true& */ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true&");
/* harmony import */ var _ButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& */ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1ec4da91",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/ButtonUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=style&index=0&id=1ec4da91&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_style_index_0_id_1ec4da91_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ButtonUpload.vue?vue&type=template&id=1ec4da91&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonUpload_vue_vue_type_template_id_1ec4da91_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/ContextMenu.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/FilesView/ContextMenu.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true& */ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true&");
/* harmony import */ var _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& */ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c6958e0",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/ContextMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=style&index=0&id=0c6958e0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_style_index_0_id_0c6958e0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ContextMenu.vue?vue&type=template&id=0c6958e0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContextMenu_vue_vue_type_template_id_0c6958e0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/DesktopToolbar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopToolbar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true& */ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true&");
/* harmony import */ var _DesktopToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopToolbar.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& */ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DesktopToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14323afd",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/DesktopToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=style&index=0&id=14323afd&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_style_index_0_id_14323afd_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/DesktopToolbar.vue?vue&type=template&id=14323afd&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopToolbar_vue_vue_type_template_id_14323afd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/EmptyMessage.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyMessage.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true& */ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true&");
/* harmony import */ var _EmptyMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyMessage.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& */ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmptyMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f2442590",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/EmptyMessage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyMessage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=style&index=0&id=f2442590&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_style_index_0_id_f2442590_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyMessage.vue?vue&type=template&id=f2442590&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyMessage_vue_vue_type_template_id_f2442590_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/EmptyPage.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyPage.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true& */ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true&");
/* harmony import */ var _EmptyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmptyPage.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& */ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmptyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3497fe2e",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/EmptyPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=style&index=0&id=3497fe2e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_style_index_0_id_3497fe2e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/EmptyPage.vue?vue&type=template&id=3497fe2e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmptyPage_vue_vue_type_template_id_3497fe2e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/FileBrowser.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/FilesView/FileBrowser.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileBrowser.vue?vue&type=template&id=6409943e&scoped=true& */ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true&");
/* harmony import */ var _FileBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileBrowser.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& */ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6409943e",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/FileBrowser.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBrowser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=style&index=0&id=6409943e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_style_index_0_id_6409943e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileBrowser.vue?vue&type=template&id=6409943e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileBrowser.vue?vue&type=template&id=6409943e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileBrowser_vue_vue_type_template_id_6409943e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/FileInfoPanel.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/FilesView/FileInfoPanel.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileInfoPanel_vue_vue_type_template_id_95b9c6e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileInfoPanel.vue?vue&type=template&id=95b9c6e8&scoped=true& */ "./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=template&id=95b9c6e8&scoped=true&");
/* harmony import */ var _FileInfoPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileInfoPanel.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FileInfoPanel_vue_vue_type_style_index_0_id_95b9c6e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss& */ "./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileInfoPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileInfoPanel_vue_vue_type_template_id_95b9c6e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileInfoPanel_vue_vue_type_template_id_95b9c6e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95b9c6e8",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/FileInfoPanel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInfoPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileInfoPanel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInfoPanel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInfoPanel_vue_vue_type_style_index_0_id_95b9c6e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=style&index=0&id=95b9c6e8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInfoPanel_vue_vue_type_style_index_0_id_95b9c6e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInfoPanel_vue_vue_type_style_index_0_id_95b9c6e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInfoPanel_vue_vue_type_style_index_0_id_95b9c6e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInfoPanel_vue_vue_type_style_index_0_id_95b9c6e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=template&id=95b9c6e8&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=template&id=95b9c6e8&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInfoPanel_vue_vue_type_template_id_95b9c6e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileInfoPanel.vue?vue&type=template&id=95b9c6e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileInfoPanel.vue?vue&type=template&id=95b9c6e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInfoPanel_vue_vue_type_template_id_95b9c6e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileInfoPanel_vue_vue_type_template_id_95b9c6e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/FileItemGrid.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemGrid.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true& */ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true&");
/* harmony import */ var _FileItemGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileItemGrid.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& */ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileItemGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2085e75a",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/FileItemGrid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemGrid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=style&index=0&id=2085e75a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_style_index_0_id_2085e75a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemGrid.vue?vue&type=template&id=2085e75a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemGrid_vue_vue_type_template_id_2085e75a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/FileItemList.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemList.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true& */ "./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true&");
/* harmony import */ var _FileItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileItemList.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& */ "./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FileItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2cfcc5ab",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/FileItemList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=style&index=0&id=2cfcc5ab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_style_index_0_id_2cfcc5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FileItemList.vue?vue&type=template&id=2cfcc5ab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileItemList_vue_vue_type_template_id_2cfcc5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/FilePreview.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/FilesView/FilePreview.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilePreview_vue_vue_type_template_id_4545fcde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilePreview.vue?vue&type=template&id=4545fcde&scoped=true& */ "./resources/js/components/FilesView/FilePreview.vue?vue&type=template&id=4545fcde&scoped=true&");
/* harmony import */ var _FilePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilePreview.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/FilePreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FilePreview_vue_vue_type_style_index_0_id_4545fcde_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss& */ "./resources/js/components/FilesView/FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilePreview_vue_vue_type_template_id_4545fcde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilePreview_vue_vue_type_template_id_4545fcde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4545fcde",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/FilePreview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/FilePreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FilePreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilePreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FilePreview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_style_index_0_id_4545fcde_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FilePreview.vue?vue&type=style&index=0&id=4545fcde&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_style_index_0_id_4545fcde_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_style_index_0_id_4545fcde_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_style_index_0_id_4545fcde_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_style_index_0_id_4545fcde_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/FilePreview.vue?vue&type=template&id=4545fcde&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/FilePreview.vue?vue&type=template&id=4545fcde&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_template_id_4545fcde_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilePreview.vue?vue&type=template&id=4545fcde&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/FilePreview.vue?vue&type=template&id=4545fcde&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_template_id_4545fcde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilePreview_vue_vue_type_template_id_4545fcde_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/ImageMetaData.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/FilesView/ImageMetaData.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageMetaData_vue_vue_type_template_id_49f5e308_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageMetaData.vue?vue&type=template&id=49f5e308&scoped=true& */ "./resources/js/components/FilesView/ImageMetaData.vue?vue&type=template&id=49f5e308&scoped=true&");
/* harmony import */ var _ImageMetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageMetaData.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/ImageMetaData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageMetaData_vue_vue_type_style_index_0_id_49f5e308_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true& */ "./resources/js/components/FilesView/ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageMetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageMetaData_vue_vue_type_template_id_49f5e308_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageMetaData_vue_vue_type_template_id_49f5e308_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49f5e308",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/ImageMetaData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/ImageMetaData.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ImageMetaData.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageMetaData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMetaData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMetaData_vue_vue_type_style_index_0_id_49f5e308_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=style&index=0&id=49f5e308&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMetaData_vue_vue_type_style_index_0_id_49f5e308_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMetaData_vue_vue_type_style_index_0_id_49f5e308_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMetaData_vue_vue_type_style_index_0_id_49f5e308_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMetaData_vue_vue_type_style_index_0_id_49f5e308_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/ImageMetaData.vue?vue&type=template&id=49f5e308&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ImageMetaData.vue?vue&type=template&id=49f5e308&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMetaData_vue_vue_type_template_id_49f5e308_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageMetaData.vue?vue&type=template&id=49f5e308&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ImageMetaData.vue?vue&type=template&id=49f5e308&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMetaData_vue_vue_type_template_id_49f5e308_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageMetaData_vue_vue_type_template_id_49f5e308_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& */ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&");
/* harmony import */ var _MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileActionButton.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& */ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95f75cf0",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/MobileActionButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButtonUpload.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButtonUpload.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true& */ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true&");
/* harmony import */ var _MobileActionButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileActionButtonUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& */ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MobileActionButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b04b41ae",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/MobileActionButtonUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButtonUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=style&index=0&id=b04b41ae&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_style_index_0_id_b04b41ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButtonUpload.vue?vue&type=template&id=b04b41ae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButtonUpload_vue_vue_type_template_id_b04b41ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/MobileActions.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActions.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true& */ "./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true&");
/* harmony import */ var _MobileActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileActions.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& */ "./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MobileActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "18dc5ba6",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/MobileActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=style&index=0&id=18dc5ba6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_style_index_0_id_18dc5ba6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActions.vue?vue&type=template&id=18dc5ba6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActions_vue_vue_type_template_id_18dc5ba6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/MobileToolbar.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileToolbar.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true& */ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true&");
/* harmony import */ var _MobileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileToolbar.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& */ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MobileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "005ba5ab",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/MobileToolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileToolbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=style&index=0&id=005ba5ab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_style_index_0_id_005ba5ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileToolbar.vue?vue&type=template&id=005ba5ab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileToolbar_vue_vue_type_template_id_005ba5ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/ProgressBar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/FilesView/ProgressBar.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true& */ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true&");
/* harmony import */ var _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& */ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7fb97850",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/ProgressBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=style&index=0&id=7fb97850&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_style_index_0_id_7fb97850_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ProgressBar.vue?vue&type=template&id=7fb97850&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProgressBar_vue_vue_type_template_id_7fb97850_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/SearchBar.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/FilesView/SearchBar.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=template&id=23e12306&scoped=true& */ "./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true&");
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& */ "./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "23e12306",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/SearchBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=style&index=0&id=23e12306&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_23e12306_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=template&id=23e12306&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/SearchBar.vue?vue&type=template&id=23e12306&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_23e12306_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/ToolbarButtonUpload.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/FilesView/ToolbarButtonUpload.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true& */ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true&");
/* harmony import */ var _ToolbarButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolbarButtonUpload.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& */ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ToolbarButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8eb7bbc0",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/ToolbarButtonUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ToolbarButtonUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=style&index=0&id=8eb7bbc0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_style_index_0_id_8eb7bbc0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/ToolbarButtonUpload.vue?vue&type=template&id=8eb7bbc0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolbarButtonUpload_vue_vue_type_template_id_8eb7bbc0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FilesView/UploadProgress.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/FilesView/UploadProgress.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true& */ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true&");
/* harmony import */ var _UploadProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadProgress.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& */ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UploadProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c87f9e8",
  null

)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/UploadProgress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadProgress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=style&index=0&id=4c87f9e8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_style_index_0_id_4c87f9e8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/UploadProgress.vue?vue&type=template&id=4c87f9e8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadProgress_vue_vue_type_template_id_4c87f9e8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
