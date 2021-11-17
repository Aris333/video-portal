<template>
    <div
            class="file-wrapper"
            @click.stop="clickedItem"
            @dblclick="goToItem"
            spellcheck="false"
    >
        <!--Grid preview-->
        <div
                :draggable="canDrag"
                @dragstart="$emit('dragstart')"
                @drop="
				$emit('drop')
				area = false
			"
                @dragleave="dragLeave"
                @dragover.prevent="dragEnter"
                class="file-item"
                :class="{ 'is-clicked': isClicked, 'is-dragenter': area }"
        >
            <!--Thumbnail for item-->
            <div class="icon-item">

                <!--If is file or image, then link item-->
                <!-- <span v-if="isFile" class="file-icon-text">
                    {{ data.mimetype }}
                </span> -->

                <!--Folder thumbnail-->
                <!-- <FontAwesomeIcon v-if="isFile" class="file-icon" icon="file"/> -->

                <!--Image thumbnail-->
                <!-- <img loading="lazy" v-if="isImage" class="image" :src="data.thumbnail" :alt="data.name"/> -->
                	<img loading="lazy"  class="image" v-if="isImage" :src="data.thumbnail" :alt="data.name" :title="data.thumbnail" />

                <!-- <p id="check" class="position_test">working</p> -->

					<!-- <img loading="lazy"  class="image" v-if="isVideo" :src="data.thumbnail" :alt="data.name" /> -->

                <div class="container" style="max-width:183px">
				      	<a :href="data.file"
                   loading="lazy"
                   class=" video-preview"
                   :data-source="data.thumb_img"
                   v-if="isVideo"
                   :data-frames="data.frames"
                   >
                </a>
				        </div>

                <!--Else show only folder icon-->
                <FontAwesomeIcon v-if="isFolder" :class="{'is-deleted': isDeleted}" class="folder-icon" icon="folder"/>
            </div>

            <!--Name-->
            <div class="item-name">
                <!--Name-->
                <b
                  ref="name"
                  @input="renameItem"
                  :contenteditable="canEditName"
                  class="name"
                >
                    {{ itemName }}
                </b>

                <div class="item-info">

                  <i v-if="isImage"
                     class="fas fa-code-branch "
                     @click="openModel(data)"
                     style="
                      position: absolute;
                      left:79%;
                      top: 4%;
                      color: white;
                      height: 19px;
                      width: 19px;"
                  ></i>


                    <!--Shared Icon-->
                    <div v-if="$checkPermission('master') && data.shared" class="item-shared">
                        <link-icon size="12" class="shared-icon"></link-icon>
                    </div>

                    <!--Participant owner Icon-->
                    <div v-if="$checkPermission('master') && data.user_scope !== 'master'" class="item-shared">
                        <user-plus-icon size="12" class="shared-icon"></user-plus-icon>
                    </div>

                    <!--Filesize-->
                  <span v-if="! isFolder" class="item-size">{{ data.filesize }}   </span><br>
                  <strong v-show="! isFolder  && data.status">Status :{{ data.status }}</strong>

                    <!--Folder item counts-->
                    <span v-if="isFolder" class="item-length">
                        {{ folderItems == 0 ? $t('folder.empty') : $tc('folder.item_counts', folderItems) }}
				    </span>
                </div>
            </div>

            <span @click.stop="showItemActions" class="show-actions"
                  v-if="$isMobile() && ! ( $checkPermission('visitor') && isFolder ) && canShowMobileOptions">
                <FontAwesomeIcon icon="ellipsis-h" class="icon-action"></FontAwesomeIcon>
            </span>
        </div>
    </div>
</template>

<script>
    import { LinkIcon, UserPlusIcon } from 'vue-feather-icons'
    import {debounce} from 'lodash'
    import {mapGetters} from 'vuex'
    import {events} from '@/bus'
    import jQuery from 'jquery'
    import $ from 'jquery'

    export default {
        name: 'FileItemGrid',
        props: ['data'],
        components: {
            UserPlusIcon,
            LinkIcon,
        },
        computed: {
            ...mapGetters([
                'FilePreviewType', 'sharedDetail'
            ]),
            isFolder() {
                return this.data.type === 'folder'
            },
            isFile() {
                return this.data.type !== 'folder' && this.data.type !== 'image'
            },
            isPdf() {
                return this.data.mimetype === 'pdf'
            },
            isImage() {
                return this.data.type === 'image'
            },
            isVideo() {
                return this.data.type === 'video'
            },
            isAudio() {
                let mimetypes = ['mpeg', 'mp3', 'mp4', 'wan', 'flac']
                return mimetypes.includes(this.data.mimetype) && this.data.type === 'audio'
            },
            canEditName() {
                return !this.$isMobile()
                    && !this.$isThisLocation(['trash', 'trash-root'])
                    && !this.$checkPermission('visitor')
                    && !(this.sharedDetail && this.sharedDetail.type === 'file')
            },
            canShowMobileOptions() {
                return ! (this.sharedDetail && this.sharedDetail.type === 'file')
            },
            canDrag() {
                return !this.isDeleted && this.$checkPermission(['master', 'editor'])
            },
            timeStamp() {
                return this.data.deleted_at ? this.$t('item_thumbnail.deleted_at', this.data.deleted_at) : this.data.created_at
            },
            folderItems() {
                return this.data.deleted_at ? this.data.trashed_items : this.data.items
            },
            isDeleted() {
                return this.data.deleted_at ? true : false
            }
        },
        data() {
            return {
                isClicked: false,
                area: false,
                itemName: undefined
            }
        },
        methods: {
            showItemActions() {
                // Load file info detail
                this.$store.commit('GET_FILEINFO_DETAIL', this.data)

                events.$emit('mobileMenu:show')
            },
            dragEnter() {
                if (this.data.type !== 'folder') return

                this.area = true
            },
            dragLeave() {
                this.area = false
            },
            clickedItem(e) {
                events.$emit('contextMenu:hide')
                events.$emit('fileItem:deselect')

                // Set clicked item
                this.isClicked = true

                // Open in mobile version on first click
                if (this.$isMobile() && this.isFolder) {

                    // Go to folder
                    if (this.$isThisLocation('public')) {
                        this.$store.dispatch('browseShared', [{folder: this.data, back: false, init: false}])
                    } else {
                        this.$store.dispatch('getFolder', [{folder: this.data, back: false, init: false}])
                    }
                }

                if (this.$isMobile()) {
                    if (this.isImage || this.isVideo || this.isAudio) {
                        events.$emit('fileFullPreview:show')
                    }
                }

                // Load file info detail
                this.$store.commit('GET_FILEINFO_DETAIL', this.data)

                // Get target classname
                let itemClass = e.target.className

                if (
                    ['name', 'icon', 'file-link', 'file-icon-text'].includes(
                        itemClass
                    )
                )
                    return
            },
          openModel(data){
            console.log('data->Version',data)
            this.getVersion(data)
            events.$emit('popup:open', {name: 'select-version',data})
          },
          goToItem() {

            if (this.isImage || this.isVideo || this.isAudio) {
              //events.$emit('fileFullPreview:show')
              // const encryptedText = this.CryptoJS.enc.Base64.encrypt(toString(this.data.id) , "Secret Passphrase").toString()
              // alert(encryptedText)
              const encryptedText =    btoa(this.data.id)

              this.$router.push({path: `files/${encryptedText}`})
              // this.$store.commit('LOAD_MY_FILE',this.data)

            } else if (this.isFile || !this.isFolder && !this.isPdf && !this.isVideo && !this.isAudio && !this.isImage) {
              // this.$downloadFile(this.data.file_url, this.data.name + '.' + this.data.mimetype)

            } else if (this.isFolder) {
              if (this.$isThisLocation('public')) {
                this.$store.dispatch('browseShared', [{ folder: this.data, back: false, init: false }])
              } else {
                this.$store.dispatch('getFolder', [{ folder: this.data, back: false, init: false }])
              }
            }
          },
            renameItem: debounce(function (e) {

                // Prevent submit empty string
                if (e.target.innerText.trim() === '') return

                this.$store.dispatch('renameItem', {
                    unique_id: this.data.unique_id,
                    type: this.data.type,
                    name: e.target.innerText
                })
            }, 300)
        },
        created() {
            this.itemName = this.data.name

            events.$on('fileItem:deselect', () => {
                // Deselect file
                this.isClicked = false
            })

            // Change item name
            events.$on('change:name', (item) => {
                if (this.data.unique_id == item.unique_id) this.itemName = item.name
            })
        },
        mounted() {
  $( document ).ready(function() {
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
		    (function($) {
				$.fn.videoPreview = function(options) {
					// console.log(this);
					return $(this).each(function() {
						var elm = $(this);
						var frames = parseFloat(elm.data('frames'));
						var img = $('<img/>', { 'src': elm.data('source') }).hide().css({
							'position': 'absolute',
							'cursor': 'pointer',
							// 'width':'1500px'
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
						img.load(function(e) {
							$(this).show();
                            // console.log(this.width);
                            width = this.width / frames;
							// console.log(width);
							elm.css('width', width);
							defaultPos();
                        });
                        // function getOffset( elm ) {
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
                           var offset =  elm.offset();
                        // console.log(offset.left);
						elm.mousemove(function(e) {
                            //  var x = getOffset(elm).left;
                            // console.log(x);
							var left = e.clientX - (offset.left+22);
							// console.log(left);
							slider.show().css('left', left - 1); // -1 because it's 2px width
							img.css('left', -Math.floor((left / width) * frames) * width);
						}).mouseleave(function(e) {
                            slider.hide();
                            defaultPos();
						});
					});
				};
			})(jQuery);

	  	$('.video-preview').videoPreview();

      });
     },

    }
</script>

<style scoped lang="scss">
    @import '@assets/vue-file-manager/_variables';
    @import '@assets/vue-file-manager/_mixins';


.video-preview {
    display: inline-block;
    position: relative;
    background: #ddd;
    overflow: hidden;
    margin-right:5% ;
    /* This is temporary width and height, these'll be overriden when the source img is loaded. */
    /* If you already know size of a preview frame you can hardcode it here. */
    // width: 100%;
    width: 150px !important;
    height: 120px;
    border-radius: 5px;
    box-shadow: 0 0 6px #bbb;
}


    .show-actions {
        cursor: pointer;
        padding: 4px 26px;

        .icon-action {
            @include font-size(12);
        }

        path {
            fill: $theme;
        }
    }

    .file-wrapper {
        user-select: none;
        position: relative;
        text-align: center;
        display: inline-block;
        vertical-align: text-top;
        width: 100%;

        .item-name {
            display: block;
            padding-left: 10px;
            padding-right: 10px;
            line-height: 20px;

            .item-size,
            .item-length {
                @include font-size(11);
                font-weight: 400;
                color: rgba($text, 0.7);
                display: inline-block;
            }

            .item-info {
                display: block;
                line-height: 1;
            }

            .item-shared {
                display: inline-block;

                .label {
                    @include font-size(12);
                    font-weight: 400;
                    color: $theme;
                }

                .shared-icon {
                    vertical-align: middle;

                    path, circle, line {
                        stroke: $theme;
                    }
                }
            }

            .name {
                color: $text;
                @include font-size(14);
                font-weight: 700;
                max-height: 40px;
                overflow: hidden;
                text-overflow: ellipsis;
                word-break: break-all;

                &[contenteditable] {
                    -webkit-user-select: text;
                    user-select: text;
                }

                &[contenteditable='true']:hover {
                    text-decoration: underline;
                }

                &.actived {
                    max-height: initial;
                }
            }
        }

        &.selected {
            .file-item {
                background: $light_background;
            }
        }

        .file-item {
            border: 2px dashed transparent;
            width: 190px;
            margin: 10px ;
            cursor: pointer;
            position: relative;
            padding: 15px 0;

            &.is-dragenter {
                border: 2px dashed $theme;
                border-radius: 8px;
            }

            &:hover,
            &.is-clicked {
                border-radius: 8px;
                background: $light_background;

                .item-name .name {
                    color: $theme;
                }
            }
        }

        .icon-item {
            text-align: center;
            position: relative;
            height: 110px;
            margin-bottom: 20px;
          //  display: flex;
            align-items: center;

            .file-link {
                display: block;
            }

            .file-icon {
                @include font-size(100);
                margin: 0 auto;

                path {
                    fill: #fafafc;
                    stroke: #dfe0e8;
                    stroke-width: 1;
                }
            }

            .file-icon-text {
                margin: 5px auto 0;
                position: absolute;
                text-align: center;
                left: 0;
                right: 0;
                color: $theme;
                @include font-size(12);
                font-weight: 600;
                user-select: none;
                max-width: 65px;
                max-height: 20px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .image {
                // max-width: 95%;
                object-fit: cover;
                user-select: none;
                // height: 110px;
                width: 150px !important;
			    height: 120px;
                border-radius: 5px;
                margin: 0 auto;
                pointer-events: none;
            }

            .folder-icon {
                align-items: flex-end;
                @include font-size(80);
                margin: 0 auto;

                path {
                    fill: $theme;
                }

                &.is-deleted {
                    path {
                        fill: $dark_background;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 960px) {

        .file-wrapper {

            .icon-item {
                margin-bottom: 15px;
            }
        }
    }

    @media only screen and (max-width: 690px) {
        .file-wrapper {

            .file-item {
                width: 120px;
            }

            .icon-item {
                margin-bottom: 10px;
                height: 90px;

                .file-icon {
                    @include font-size(75);
                }

                .file-icon-text {
                    @include font-size(12);
                }

                .folder-icon {
                    @include font-size(75);
                    margin-top: 0;
                    margin-bottom: 0;
                }

                .image {
                    width: 90px;
                    height: 90px;
                }
            }

            .item-name .name {
                @include font-size(13);
                line-height: .9;
                max-height: 30px;
            }
        }
    }

    @media (prefers-color-scheme: dark) {
        .file-wrapper {

            .icon-item {

                .file-icon {

                    path {
                        fill: $dark_mode_foreground;
                        stroke: #2F3C54;
                    }
                }

                .folder-icon {

                    &.is-deleted {
                        path {
                            fill: lighten($dark_mode_foreground, 5%);
                        }
                    }
                }
            }

            .file-item {

                &:hover,
                &.is-clicked {
                    background: $dark_mode_foreground;

                    .file-icon {

                        path {
                            fill: $dark_mode_background;
                        }
                    }
                }
            }

            .item-name {

                .name {
                    color: $dark_mode_text_primary;
                }

                .item-size,
                .item-length {
                    color: $dark_mode_text_secondary;
                }
            }

        }
    }

    .fa-code-branch:before{
      position: relative;
      left: 10%;
      top: 15%;
      color: white !important;
      /* background-color: white; */
      height: 19px;
      width: 19px;
    }


</style>
