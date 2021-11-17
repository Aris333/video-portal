<template>
	<div class="navigation-panel" v-if="fileInfoDetail">
		<div class="name-wrapper">
			<x-icon @click="closeFullPreview" size="22" class="icon-close"></x-icon>
			<div class="name-count-wrapper">
				<p class="title">{{ formatedName }}</p>
				<span class="file-count"> ({{ showingImageIndex + ' ' + $t('pronouns.of') + ' ' + filteredFiles.length }}) </span>
			</div>
			<span id="fast-preview-menu" class="fast-menu-icon" style="margin-top: -9px" @click="menuOpen" v-if="$checkPermission(['master', 'editor']) && homeDirectory ">
				<more-horizontal-icon class="more-icon" size="14"> </more-horizontal-icon>
			</span>
		</div>

		<div class="created-at-wrapper">
			<p>{{ fileInfoDetail.filesize }}, {{ fileInfoDetail.created_at }}</p>
		</div>
    <div class="col-sm-2 ">
<!--      <v-select  @input="updateStatus" :options="options"  v-model="status" />-->
           <div class="col-sm-12">
             <div class="dropdown">
               <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Dropdown button
               </button>
               <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                 <a class="dropdown-item" href="#">Action</a>
                 <a class="dropdown-item" href="#">Another action</a>
                 <a class="dropdown-item" href="#">Something else here</a>
               </div>
             </div>
           <div class="col-sm-4 " style="top: -18px;">
               <div class="dropdown"  style=" position: absolute; padding: 4px;  margin-left: 187px; top: -4px;">
                 <button class="btn btn-secondary dropdown-toggle" style="background-color: #00bc7e"  type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Share
                 </button>
                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                   <a class="dropdown-item" href="#">
                     <span style="cursor: pointer;color: #00bc7e"   @click="sharePresentation(); showShare=!showShare" >Presentataion</span>
                   </a>
                   <a class="dropdown-item" href="#">
                     <span style="cursor: pointer;color: #00bc7e" @click="shareReview(); showShare=!showShare" >Review</span>
                   </a>
                 </div>
               </div>
               <!--            <button class="btn btn-primary color-green" style=" position: absolute; padding: 4px;  margin-left: 187px; top: -4px;" @click="showShare=!showShare">Share</button>-->
               <!--            <div v-show="showShare" class="col-sm-1 hidden showShare" style="">-->
               <!--              <div class="review-link">-->
               <!--                <div class="col-sm-2">-->
               <!--                  <p style="cursor: pointer;color: #00bc7e" @click="shareReview(); showShare=!showShare" >Review</p>-->
               <!--                </div>-->
               <!--              </div>-->
               <!--              <div class="share-presentataion">-->
               <!--                <div class="col-sm-2">-->
               <!--                  <p style="cursor: pointer;color: #00bc7e"   @click="sharePresentation(); showShare=!showShare" >Presentataion</p>-->
               <!--                </div>-->
               <!--              </div>-->
               <!--            </div>-->
             </div>
           <div class="col-sm-8" style="top: -21px;">
                  <v-select
                  v-model="status"
                  :options="options"
                  :filterable="false"
                  @input="updateStatus"
              >
        <template slot="no-options"></template>
        <template slot="option" slot-scope="data">
          <div class="d-center">
            <p v-if="data.label ==='Needs Review'">  <span class="dot" style="background-color: #003bb3" ></span><span class="dot-txt">{{data.label}}</span></p>
            <p v-if="data.label ==='In Progress'"> <span class="dot" style="background-color: lightskyblue" ></span><span class="dot-txt"> {{data.label}}</span></p>
            <p v-if="data.label ==='Approved'"> <span class="dot"  style="background-color: greenyellow"></span><span class="dot-txt">{{data.label}}</span></p>
            <p v-if="data.label ==='No Status'">  <span class="dot" style="background-color: #0077a2" ></span><span class="dot-txt"> {{data.label}}</span></p>
          </div>
        </template>
        <template slot="selected-option" slot-scope="data">
          <div class="selected d-center">
                          <span v-if="data">
                  <p v-if="data.label ==='Needs Review'">  <span class="dot" style="background-color: #003bb3" ></span><span class="dot-txt">{{data.label}}</span></p>
                  <p v-if="data.label ==='In Progress'"> <span class="dot" style="background-color: lightskyblue" ></span><span class="dot-txt"> {{data.label}}</span></p>
                  <p v-if="data.label ==='Approved'"> <span class="dot"  style="background-color: greenyellow"></span><span class="dot-txt">{{data.label}}</span></p>
                  <p v-if="data.label ==='No Status'">  <span class="dot" style="background-color: #0077a2" ></span><span class="dot-txt"> {{data.label}}</span></p>
                        </span>
                      </div>
                    </template>
                  </v-select>
              </div>
           </div>
    </div>

		<div class="navigation-icons">
			<div class="navigation-tool-wrapper">
				<ToolbarButton source="download" class="mobile-hide" @click.native="downloadItem" :action="$t('actions.download')" />
				<ToolbarButton source="share" class="mobile-hide" :class="{ 'is-inactive': canShareInView }" :action="$t('actions.share')" @click.native="shareItem" />
				<ToolbarButton v-if="this.fileInfoDetail.type === 'image'" source="print" :action="$t('actions.print')" @click.native="printMethod()" />
			</div>
		</div>
	</div>
</template>

<script>
import { events } from '@/bus'
import { mapGetters } from 'vuex'
import { XIcon, MoreHorizontalIcon } from 'vue-feather-icons'

import ToolbarButton from '@/components/FilesView/ToolbarButton'
import $ from "jquery";

export default {
	name: 'FilePreviewNavigationPanel',
	components: { ToolbarButton, XIcon, MoreHorizontalIcon },
  created() {
    this.status =this.fileInfoDetail.status
  },
	computed: {
		...mapGetters(['fileInfoDetail', 'data','user','currentFile',   "homeDirectory",]),

		filteredFiles() {
			let files = []
			this.data.filter((element) => {
				if (element.type == this.fileInfoDetail.type) {
					files.push(element)
				}
			})
			return files
		},
		showingImageIndex() {
			let activeIndex = ''
			this.filteredFiles.filter((element, index) => {
				if (element.unique_id == this.fileInfoDetail.unique_id) {
					activeIndex = index + 1
				}
			})
			return activeIndex
		},

		formatedName() {
			//Name length handling
			let name = this.fileInfoDetail.name
			let windowWidth = window.innerWidth
			let nameLength
			if (windowWidth < 410) {
				nameLength = 18
			} else {
				nameLength = 27
			}
			if (name.lastIndexOf('.') > -1) {
				return _.truncate(name.substring(0, name.lastIndexOf('.')), {
					length: nameLength
				})
			} else {
				return _.truncate(name, {
					length: nameLength
				})
			}
		},
		canShareInView() {
			return !this.$isThisLocation(['base', 'participant_uploads', 'latest', 'shared', 'public'])
		}
	},
  async mounted() {
    $('#vs1__combobox').css( 'height','35px')
    $('#vs1__combobox').css('width','181px')
    $('.vs__selected').css('width','129px')
    $('#vs1__listbox').hover().css('color','#00BC7E !important;')

  },
	data() {
		return {
    options:[
       'Needs Review','In Progress','Approved','No Status'
    ],
      status:'No Status',
			showContextMenu: false,
			  showShare : false,
		}
	},
	methods: {
		printMethod() {
			var tab = document.getElementById('image')
			var win = window.open('', '', 'height=700,width=700')
			win.document.write(tab.outerHTML)
			win.document.close()
			win.print()
		},
		downloadItem() {
			// Download file
			// this.$downloadFile(this.fileInfoDetail.file_url, this.fileInfoDetail.name + '.' + this.fileInfoDetail.mimetype)
		},
		shareItem() {
			if (this.fileInfoDetail.shared) {
				events.$emit('popup:open', {
					name: 'share-edit',
					item: this.fileInfoDetail
				})
			} else {
				events.$emit('popup:open', {
					name: 'share-create',
					item: this.fileInfoDetail
				})
			}
		},
    shareReview() {
			// if (this.fileInfoDetail.shared) {
			// 	events.$emit('popup:open', {
			// 		name: 'share-review-edit',
			// 		item: this.fileInfoDetail
			// 	})
			// } else {
				events.$emit('popup:open', {
					name: 'share-review-create',
					item: this.fileInfoDetail
				})
			//}
		},

		sharePresentation() {

      if (this.fileInfoDetail.shared) {
        events.$emit('popup:open', {
          name: 'share-presentation',
          item: this.fileInfoDetail
        })
      } else {events.$emit('popup:open', {
					name: 'share-presentation',
          item: this.fileInfoDetail
				})
		}
		},
		menuOpen() {
			if (this.$isMobile()) {
				events.$emit('mobileMenu:show', 'showFromMediaPreview')
			} else {
				events.$emit('showContextMenuPreview:show', this.fileInfoDetail)
			}
		},
		closeFullPreview() {
			events.$emit('fileFullPreview:hide')
			events.$emit('showContextMenuPreview:hide')
		},
    updateStatus:function (){
      let formData = {
        'id': this.fileInfoDetail.id,
        'user_id': this.user.data.id,
        'status':this.status,
             }
      this.$store.dispatch('updateStatus', formData)
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@assets/vue-file-manager/_variables';
@import '@assets/vue-file-manager/_mixins';

.dot {
  height: 13px;
  width: 13px;
 // background-color: red;
  border-radius: 100%;
  display: inline-block
}

.name-wrapper {
	width: 33%;
	height: 22px;
	display: flex;
	position: relative;
	align-items: center;
	flex-grow: 1;
	align-self: center;
	white-space: nowrap;

	.name-count-wrapper {
        margin-left: 6px;
        margin-right: 6px;

        .file-count {
			@include font-size(15);
			line-height: 1;
			font-weight: 700;
			overflow: hidden;
			text-overflow: ellipsis;
			display: inline-block;
			vertical-align: middle;
			align-self: center;
			color: $text;
          float: right;
          margin-left: 12px;
		}
		.title {
			@include font-size(15);
			line-height: 1;
			font-weight: 700;
			overflow: hidden;
			text-overflow: ellipsis;
			display: inline-block;
			vertical-align: middle;
			color: $text;
		}
		@media (max-width: 570px) {
			.title,
			.file-count {
				@include font-size(17);
			}
		}
	}
	.icon-close {
		min-width: 22px;
		padding: 1px 4px;
		border-radius: 6px;
		vertical-align: middle;
		cursor: pointer;
		color: $text;
		@include transition(150ms);

		&:hover {
			background: $light_background;

			line {
				stroke: $theme;
			}
		}
	}
	.fast-menu-icon {
		height: 24px;
		display: flex;
		align-items: center;
		vertical-align: middle;
		padding: 1px 4px;
		line-height: 0;
		border-radius: 3px;
		cursor: pointer;
		@include transition(150ms);

		svg circle {
			@include transition(150ms);
		}
		&:hover {
			background: $light_background;

			svg circle {
				stroke: $theme;
			}
		}
		.more-icon {
			vertical-align: middle;
			cursor: pointer;
		}
	}
}
.context-menu {
	min-width: 250px;
	position: absolute;
	z-index: 99;
	box-shadow: $shadow;
	background: white;
	border-radius: 8px;
	overflow: hidden;
	top: 29px;

	&.showed {
		display: block;
	}
}

.created-at-wrapper {
	width: 33%;
	display: flex;
	text-align: center;
	justify-content: center;

	p {
		display: flex;
		align-items: center;
		@include font-size(11);
	}
}

.navigation-icons {
	width: 33%;
	text-align: right;

	.navigation-tool-wrapper {
		margin-left: 28px;
		display: inline-block;
		vertical-align: middle;
	}

	.button {
		margin-left: 5px;
		&:hover {
			background: $light_background;
		}
	}
}

.navigation-panel {
	height: 63px;
	width: 100%;
	padding: 10px 15px;
	display: flex;
	position: absolute;
	z-index: 8;
	align-items: center;
	background-color: white;
	color: $text;
}

@media (max-width: 960px) {

    .context-menu {

        .name-wrapper {
            width: 67%;
        }
    }

    .navigation-icons {
        display: none;
    }

    .navigation-panel {
        height: 53px;
        padding: 15px;
    }

    .created-at-wrapper {
        display: none;
    }

    .name-wrapper {
        justify-content: space-between;
        flex-direction: row-reverse;
        width: 100%;
    }
}

@media (prefers-color-scheme: dark) {
	.navigation-panel {
		background-color: $dark_mode_background;
		color: $dark_mode_text_primary;

		.icon-close {
			color: $dark_mode_text_primary;
			&:hover {
				background-color: $dark_mode_background;
			}
		}

		.fast-menu-icon:hover {
			background: $dark_mode_background;
		}
	}

	.name-wrapper {
		.title,
		.file-count {
			color: $dark_mode_text_primary !important;
		}
	}

	.navigation-icons {
		.button:hover {
			background: $dark_mode_background;
		}
	}
}
.dot-txt{
  margin-left: 3px;
}
.color-green{
  background: #00bc7e;
}
.showShare {
  margin: 0px;
  position: absolute;
  inset: 0px auto auto 0px;
  background: #fff;
  color:#00bc7e;

  min-width: 145px;
  left: 188px; top: 43px;
  //transform: translate(903.2px, 46.4px);
}
</style>
