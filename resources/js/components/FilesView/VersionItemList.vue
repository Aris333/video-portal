<template>

	<div class="file-wrapper" oncontextmenu="return false;"  @click.stop="clickedItem" @dblclick="goToItem" spellcheck="false">

		<!--List preview-->
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
      <div class="">

        <p>v{{list.length -index }}</p>

      </div>
			<div class="col-12">

      <!--Thumbnail for item-->
			<div class="icon-item"  >
				<!-- If is file or image, then link item-->
				<span v-if="isFile" class="file-icon-text">
					{{ data.mimetype | limitCharacters  }}
			 </span>

				<!--File thumbnail-->
				<!-- <FontAwesomeIcon v-if="isFile" class="file-icon" icon="file" /> -->

				<!--Image thumbnail-->
				{{data}}
        <div class="">
          <img loading="lazy"  class="image"  style="height: 50px !important;" v-if="isImage" :src="data.thumbnail" :alt="data.name" />
          <i class="fa fa-times"
             aria-hidden="true"
             style="
             position: absolute;
             right: -137%;
             cursor: pointer;
             top: 4%;"
             @click="deleteVersion(data)"
          ></i>
        </div>
				<!-- <img loading="lazy"  class="video-preview" v-if="isVideo"  :data-source="data.thumb_img " :alt="data.name" data-frames="10"  /> -->

				<div class="container img"  style="max-width:160px">

          <a :href="data.file"  loading="lazy"  class=" video-preview" style="height: 50px"   :data-source="data.thumb_img"  v-if="isVideo"  :src="data.thumbnail" @mouseleave="mouseLeave" :data-frames="data.frames"> </a>
				</div>


					<!-- <img src = "" id="test_img" height="200px"> -->
					<!-- <canvas id="joined" style="display:none;"></canvas> -->
	<!-- <a href="https://www.youtube.com/watch?v=gJIwl2vLjQ0" target="_blank"  class="video-preview" data-frames="100" data-source="http://i.imgur.com/BX0pV4J.jpg"></a> -->

				<!--Else show only folder icon-->
				<FontAwesomeIcon v-if="isFolder" :class="{'is-deleted': isDeleted}" class="folder-icon" icon="folder" />
			</div>

			<!--Name-->
			<div class="item-name">
				<!--Name-->
				<b ref="name" @input="renameItem" :contenteditable="canEditName" class="name img-b">
					{{  itemName.slice(0,18)+"..." }}

				</b>


				<div class="item-info">
					<!--Shared Icon-->
					<div v-if="$checkPermission('master') && data.shared" class="item-shared">
						<link-icon size="12" class="shared-icon"></link-icon>
					</div>

					<!--Participant owner Icon-->
					<div v-if="$checkPermission('master') && data.user_scope !== 'master'" class="item-shared">
						<user-plus-icon size="12" class="shared-icon"></user-plus-icon>
					</div>

					<!--Filesize and timestamp-->
<!--					<span v-if="!isFolder && data.status ==='In Progress'" class="item-size">{{ data.filesize }}, {{ timeStamp }}  , <strong  v-if="data.status !='No Status'" >Status :  {{data.status !='No Status' ?data.status :'' }} <span class="dot" style="background-color: red" ></span>   </strong></span>-->
<!--					<span v-if="!isFolder && data.status ==='Approved'" class="item-size">{{ data.filesize }}, {{ timeStamp }}  , <strong  v-if="data.status !='No Status'" >Status :  {{data.status !='No Status' ?data.status :'' }} <span class="dot" style="background-color: lightskyblue" ></span> </strong></span>-->

					<span v-if="!isFolder && data.parent_id ==='0' && data.status ==='No Status'" class="item-size">{{ data.filesize }}, {{ timeStamp }}  , <strong  v-if="data.status !='No Status'" >Status :  {{data.status  ?data.status :'' }}<span class="dot"  style="background-color: greenyellow"></span>  </strong></span>
					<span v-if="!isFolder && data.parent_id ==='0'" class="item-size">
            <p>
            <strong> {{data.status}}</strong>
          </p>
          </span>
					<!--Folder item counts-->
					<span v-if="isFolder" class="item-length"> {{ folderItems == 0 ? $t('folder.empty') : $tc('folder.item_counts', folderItems) }}, {{ timeStamp }} ,<strong  v-if="isFolder =='false'    && data.status !='No Status'" >Status :  {{data.status !='No Status' ?data.status :'' }}</strong> </span>
				</div>
			</div>
			<!--Go Next icon-->
			<div class="actions" v-if="$isMobile() && !($checkPermission('visitor') && isFolder)">
				<span @click.stop="showItemActions" class="show-actions">
					<FontAwesomeIcon icon="ellipsis-v" class="icon-action"></FontAwesomeIcon>
				</span>
			</div>
      </div>
		</div>
	</div>

</template>

<script>
import { LinkIcon, UserPlusIcon } from 'vue-feather-icons'
import { debounce } from 'lodash'
import { mapGetters } from 'vuex'
import { events } from '@/bus'
import jQuery from 'jquery'
import $ from 'jquery'
// import photojoiner from "./photojoiner.js";
import mergeImages from 'merge-images'
import axios from "axios";
import SelectVersion from "../Others/SelectVersion";

export default {
	name: 'VersionItemList',
	props: ['data','list','index'],
	components: {
    SelectVersion,
		UserPlusIcon,
		LinkIcon
	},
	computed: {
		...mapGetters(['FilePreviewType','currentFolder']),
		isFolder() {
			return this.data.type === 'folder'
		},
		isFile() {
			return this.data.type !== 'folder' && this.data.type !== 'image'
		},
		isImage() {
			return this.data.type === 'image'
		},
		isPdf() {
			return this.data.mimetype === 'pdf'
		},
		isVideo() {
			return this.data.type === 'video'
		},
		isAudio() {
			let mimetypes = ['mpeg', 'mp3', 'mp4', 'wan', 'flac']
			return mimetypes.includes(this.data.mimetype) && this.data.type === 'audio'
		},
		canEditName() {
			return !this.$isMobile() && !this.$isThisLocation(['trash', 'trash-root']) && !this.$checkPermission('visitor') && !(this.sharedDetail && this.sharedDetail.type === 'file')
		},
		canDrag() {
			return !this.isDeleted && this.$checkPermission(['master', 'editor'])
		},
		timeStamp() {
			return this.data.deleted_at ? this.$t('item_thumbnail.deleted_at', { time: this.data.deleted_at }) : this.data.created_at
		},
		folderItems() {
			return this.data.deleted_at ? this.data.trashed_items : this.data.items
		},
		isDeleted() {
			return this.data.deleted_at ? true : false
		},
		totalVersionFiles() {
			return parseInt(this.$store.getters.versionListLength)
		},

	},
	filters: {
		limitCharacters(str) {
			if (str.length > 3) {
				return str.substring(0, 3) + '...'
			} else {
				return str.substring(0, 3)
			}
		}
	},
	data() {
		return {
			isClicked: false,
			area: false,
			itemName: undefined,
			totalListFiles: 0,
      versionNumber:0,
		}
	},
	methods: {

		showItemActions() {
			// Load file info detail
			this.$store.commit('GET_FILEINFO_DETAIL', this.data)


			events.$emit('mobileMenu:show')
		},
		mouseLeave(){
			// console.log("no");
		},
		dragEnter() {
			// if (this.data.type !== 'folder') return

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
					this.$store.dispatch('browseShared', [{ folder: this.data, back: false, init: false }])
				} else {
					this.$store.dispatch('getFolder', [{ folder: this.data, back: false, init: false }])
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

			if (['name', 'icon', 'file-link', 'file-icon-text'].includes(itemClass))
			  return
		},
		goToItem() {

			if (this.isImage || this.isVideo || this.isAudio) {
				//events.$emit('fileFullPreview:show')
        // const encryptedText = this.CryptoJS.enc.Base64.encrypt(toString(this.data.id) , "Secret Passphrase").toString()
        // alert(encryptedText)
        const encryptedText =   btoa(this.data.id)

         this.$router.push({path: '/files/'+encryptedText})
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
		renameItem: debounce(function(e) {
			// Prevent submit empty string
			if (e.target.innerText.trim() === '') return

			this.$store.dispatch('renameItem', {
				unique_id: this.data.unique_id,
				type: this.data.type,
				name: e.target.innerText
			})
		}, 300),
    openModel(data){
		  console.log('data->Version',data)
      this.getVersion(data)
      events.$emit('popup:open', {name: 'select-version',data})
    },
    async  getVersion(data) {
      let formData = {
        'id': data.id,
      }
      let route = 'api/version'
      axios
          .post(route, formData)
          .then(res => {
            console.log('response_data1', res.data.data)
            this.version_Options = res.data.data
            alert(2)
            //this.totalListFiles = res.data.data.length
            console.log('testing -=',)
            this.$store.commit('SET_VER_LIST',this.version_Options)
          })
          .catch((error) => {
            // Show error message
            events.$emit('alert:open', {
              title: i18n.t('popup_error.title'),
              message: i18n.t('popup_error.message'),
            })
          })
    },
    deleteVersion(data){

      axios
          .post('api/version/delete', {
            id: data.id,
            // _method: 'patch'
          })
          .then(() => {
            // commit('REMOVE_ITEM', to_item.unique_id)
            //     dispatch('getAppData')
            this.$store.dispatch('getFolder', [{folder: this.currentFolder, back: false, init: false}])
            events.$emit('popup:close')
          })
          .catch(() => isSomethingWrong())

    }
	},

	created() {

		this.itemName = this.data.name
		// console.log(this.data.thumb_img);
		events.$on('fileItem:deselect', () => {
			// Deselect file
			this.isClicked = false
		})

		// Change item name
		events.$on('change:name', (item) => {
			if (this.data.unique_id == item.unique_id) this.itemName = item.name
		})

	},
  destroyed() {
      $('#select_version').remove()
	  },
  mounted() {
			$( document ).ready(function() {
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
							// console.log(-width * frames / 4);
							img.css('left', 0);
							img.css('height', 50);
              img.attr('class', 'select_version');
						}
						img.load(function() {
							$(this).show();
							// console.log(this.width);
							width = this.width / frames;
							// console.log(width);
							elm.css('width', width);
							defaultPos();
						});
              // elm.attr('class','select_verion_container')
						// console.log(viewportOffset);
						var offset =  elm.offset();
						elm.mousemove(function(e) {
							// console.log("working");
							// console.log($(".video-preview").offset());
							var left = e.clientX - (offset.left+22);
							// var left = e.clientX - 320;
							// console.log(left);
							slider.show().css('left', left - 1); // -1 because it's 2px width
							img.css('left', -Math.floor((left / width) * frames) * width);
						}).mouseleave(function(e) {
							slider.hide();
              slider.attr('class','select_verion_container')
							defaultPos();
						});

					});
				};

				// custom code add at 30-1-2021
      $('#fileFullPreview').bind('contextmenu',function() { return false; });
      $('.file-wrapper').bind('contextmenu',function() { return false; });
      $('.file-item is-clicked').bind('contextmenu',function() { return false; });
			})(jQuery);

		$('.video-preview').videoPreview();
		});
},
}
</script>

<style scoped lang="scss">
@import '@assets/vue-file-manager/_variables';
@import '@assets/vue-file-manager/_mixins';


.dot {
  height: 19px;
  width: 22px;
  // background-color: red;
  border-radius: 100%;
  display: inline-block
}

.video-preview {
    display: inline-block;
    position: relative;
    background: #ddd;
    overflow: hidden;
    /* This is temporary width and height, these'll be overriden when the source img is loaded. */
    /* If you already know size of a preview frame you can hardcode it here. */
    // width: 100%;
	width: 100px !important;
    height: 120px;
    border-radius: 5px;
    box-shadow: 0 0 6px #bbb;
}


.file-wrapper {
	user-select: none;
	position: relative;

	&:hover {
		border-color: transparent;
	}

	.actions {
		text-align: right;
		width: 50px;

		.show-actions {
			cursor: pointer;
			padding: 12px 6px 12px;

			.icon-action {
				@include font-size(14);

				path {
					fill: $theme;
				}
			}
		}
	}

	.item-name {
		display: block;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

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

				path,
				circle,
				line {
					stroke: $theme;
				}
			}
		}

		.item-size,
		.item-length {
			@include font-size(11);
			font-weight: 400;
			color: rgba($text, 0.7);
		}

		.name {
			white-space: nowrap;

			&[contenteditable] {
				-webkit-user-select: text;
				user-select: text;
			}

			&[contenteditable='true']:hover {
				text-decoration: underline;
			}
		}

		.name {
			color: $text;
			@include font-size(14);
			font-weight: 700;
			max-height: 40px;
			overflow: hidden;
			text-overflow: ellipsis;

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

	.icon-item {
		text-align: center;
		position: relative;
		flex: 0 0 50px;
		line-height: 0;
		margin-right: 20px;

		.folder-icon {
			@include font-size(52);

			path {
				fill: $theme;
			}

			&.is-deleted {
				path {
					fill: $dark_background;
				}
			}
		}

		.file-icon {
			@include font-size(45);

			path {
				fill: #fafafc;
				stroke: #dfe0e8;
				stroke-width: 1;
			}
		}

		.file-icon-text {
			line-height: 1;
			top: 40%;
			@include font-size(11);
			margin: 0 auto;
			position: absolute;
			text-align: center;
			left: 0;
			right: 0;
			color: $theme;
			font-weight: 600;
			user-select: none;
			max-width: 100px;
			max-height: 20px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.image {
			object-fit: cover;
			user-select: none;
			// max-width: 100%;
			border-radius: 5px;
			// width: 100px;
			width: 100px !important;
			height: 120px;
			pointer-events: none;
		}
	}

	.file-item {
		border: 2px dashed transparent;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 7px;

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
}

@media (prefers-color-scheme: dark) {
	.file-wrapper {
		.icon-item {
			.file-icon {
				path {
					fill: $dark_mode_foreground;
					stroke: #2f3c54;
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
.versionSymbol{
  position: absolute;
  left: 10%;
  top: 15%;
  color: white;
  /* background-color: white; */
  height: 19px;
  width: 19px;
}
}


.file-wrapper .icon-item[data-v-47036dfb] {
  text-align: center;
  position: relative;
  flex: 0 0 50px;
  line-height: 0;
  margin-right: 60%;
}

.img-b{
position: absolute;
top: 35%;
width: 60%;
right: 23px;
}
.img a img{
    height: 50px !important;
}
</style>
