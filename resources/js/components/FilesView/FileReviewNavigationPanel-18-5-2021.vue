<template>
  <div class="navigation-panel" >
    <!--  <div class="navigation-panel" v-if="myFileInfo">-->
    <div class="name-wrapper">
      <!--			<x-icon @click="closeFullPreview" size="22" class="feather feather-arrow-down-left"></x-icon>-->
      <div @click.prevent="prev" class="prev">
        <!--        <chevron-left-icon size="17"></chevron-left-icon>-->
        <i class="fa fa-chevron-left"></i>
      </div>
      <div v-if="$route.name !='ComparisonMediaView' && myFileInfo" class="name-count-wrapper">
        <p class="title">{{ formatedName }}</p>
        <!--        <span class="file-count"> ({{ showingImageIndex + ' ' + $t('pronouns.of') + ' ' + filteredFiles.length }}) </span>-->
      </div>
      <!--      <span id="fast-preview-menu" class="fast-menu-icon" style="margin-top: -9px" @click="menuOpen" v-if="$checkPermission(['master', 'editor']) && homeDirectory">-->
      <!--				<more-horizontal-icon class="more-icon" size="14"> </more-horizontal-icon>-->
      <!--			</span>-->
    </div>


    <div v-if="$route.name !='ComparisonMediaView'&& myFileInfo" class="created-at-wrapper">

      <v-select
              v-model="version"
              id="version"
              :options="version_Options"
              label="mimetype"
              :filterable="false"
              @input="updateRevsion"
              solo color="yellow"
              placeholder="Select the Version"
      >
        <template slot="no-options"></template>
        <template slot="option" slot-scope="data">
          <div class="d-center">
            <p v-if="data.name ">
            <span class="dot" style="background-color: #003bb3">
            </span>
              <span class="dot-txt">{{ data.name }}</span>
            </p>
          </div>
        </template>
        <template slot="selected-option" slot-scope="data">
          <div class="selected d-center">
            <span v-if="data">
              <p v-if="data">  {{ data.name }}</p>
            </span>
          </div>
        </template>
      </v-select>

      <p>{{ myFileInfo.filesize }}, {{ myFileInfo.created_at }}</p>
      <!--    v-show="myFileInfo.parent_id !=0"-->



      <!--      {{version_Options}}-->

      <!--      <v-select-->
      <!--          :options="version_Options"-->
      <!--          :reduce="version => version.basename"-->
      <!--          id="version"-->
      <!--          label="version" />-->


      <!--      <v-select-->
      <!--          id="version"-->
      <!--          v-model="version"-->
      <!--          :options="version_Options"-->
      <!--          :reduce="version => version.id"-->
      <!--          :filterable="false"-->
      <!--          @input="updateRevsion"-->
      <!--      >-->
      <!--        <template slot="no-options"></template>-->
      <!--        <template slot="option" slot-scope="data">-->
      <!--          <div class="d-center">-->
      <!--            <p ><span >{{data.name}}</span></p>-->
      <!--          </div>-->
      <!--        </template>-->
      <!--        <template slot="selected-option" slot-scope="data">-->
      <!--          <div class="selected d-center">-->
      <!--                          <span v-if="data">-->
      <!--                  <p v-if="data">  <span  >{{ data.name }}</span></p>-->
      <!--                        </span>-->
      <!--          </div>-->
      <!--        </template>-->
      <!--      </v-select>-->
      <!--    <i class="fas fa-mobile" @click="this.$parent.getListPresentFiles" style="margin-left: 49px;"></i>-->
    </div>
    <div v-if="$route.name !='ComparisonMediaView'&& myFileInfo" class="col-sm-2 ">
      <!--      <v-select  @input="updateStatus" :options="options"  v-model="status" />-->
      <div  v-if="$route.name !='ComparisonMediaView'&& myFileInfo" class="col-sm-12">

        <div class="col-sm-4 " style="top: -18px;">
          <div class="dropdown" style=" position: absolute; padding: 4px;  margin-left: 187px; top: -4px;">
            <button class="btn btn-secondary dropdown-toggle" style="background-color: #00bc7e" type="button"
                    id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Share
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                <span style="cursor: pointer;color: #00bc7e" @click="sharePresentation(); showShare=!showShare">Presentataion</span>
              </a>
              <a class="dropdown-item" href="#">
                <span style="cursor: pointer;color: #00bc7e" @click="shareReview(); showShare=!showShare">Review</span>
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
        <div class="col-sm-8" style="position: absolute; top:-19px">
          <v-select
                  v-model="getStatus"
                  :options="options"
                  :filterable="false"
                  @input="updateStatus"
                  placeholder="Select Status"
          >
            <template slot="no-options"></template>
            <template slot="option" slot-scope="data">
              <div class="d-center">
                <p v-if="data.label ==='Needs Review'"><span class="dot" style="background-color: #003bb3"></span><span
                        class="dot-txt">{{ data.label }}</span></p>
                <p v-if="data.label ==='In Progress'"><span class="dot"
                                                            style="background-color: lightskyblue"></span><span
                        class="dot-txt"> {{ data.label }}</span></p>
                <p v-if="data.label ==='Approved'"><span class="dot" style="background-color: greenyellow"></span><span
                        class="dot-txt">{{ data.label }}</span></p>
                <p v-if="data.label ==='No Status'"><span class="dot" style="background-color: #0077a2"></span><span
                        class="dot-txt"> {{ data.label }}</span></p>
              </div>
            </template>
            <template slot="selected-option" slot-scope="data">
              <div class="selected d-center">
                          <span v-if="data">
                  <p v-if="data.label ==='Needs Review'">  <span class="dot"
                                                                 style="background-color: #003bb3"></span><span
                          class="dot-txt">{{ data.label }}</span></p>
                  <p v-if="data.label ==='In Progress'"> <span class="dot"
                                                               style="background-color: lightskyblue"></span><span
                          class="dot-txt"> {{ data.label }}</span></p>
                  <p v-if="data.label ==='Approved'"> <span class="dot"
                                                            style="background-color: greenyellow"></span><span
                          class="dot-txt">{{ data.label }}</span></p>
                  <p v-if="data.label ==='No Status'">  <span class="dot" style="background-color: #0077a2"></span><span
                          class="dot-txt"> {{ data.label }}</span></p>
                        </span>
              </div>
            </template>
          </v-select>

        </div>
      </div>
    </div>

    <div v-if="$route.name !='ComparisonMediaView'&& myFileInfo" class="navigation-icons">
      <div class="navigation-tool-wrapper">
        <ToolbarButton source="download" class="mobile-hide" @click.native="downloadItem"
                       :action="$t('actions.download')"/>
        <ToolbarButton source="share" class="mobile-hide" :class="{ 'is-inactive': canShareInView }"
                       :action="$t('actions.share')" @click.native="shareItem"/>
        <ToolbarButton v-if="this.myFileInfo.type === 'image'" source="print" :action="$t('actions.print')"
                       @click.native="printMethod()"/>
      </div>
    </div>
  </div>
</template>

<script>
  import {events} from '@/bus'
  import {mapGetters} from 'vuex'
  import {XIcon, MoreHorizontalIcon, ChevronLeftIcon} from 'vue-feather-icons'

  import ToolbarButton from '@/components/FilesView/ToolbarButton'
  import $ from "jquery";
  import axios from "axios";

  export default {
    name: 'FileReviewNavigationPanel',
    components: {ToolbarButton, XIcon, MoreHorizontalIcon, ChevronLeftIcon,},
    computed: {
      ...mapGetters(['myFileInfo', 'data', 'user', 'homeDirectory']),

      filteredFiles() {
        this.status = this.myFileInfo.status
        let files = []
        this.data.filter((element) => {
          if (element.type == this.myFileInfo.type) {
            files.push(element)
          }
        })
        return files
      },
      showingImageIndex() {
        let activeIndex = ''
        this.filteredFiles.filter((element, index) => {
          if (element.unique_id == this.myFileInfo.unique_id) {
            activeIndex = index + 1
          }
        })
        return activeIndex
      },

      formatedName() {
        //Name length handling
        let name = this.myFileInfo.name
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
      },
      getStatus:
              {
                get() {
                  return this.myFileInfo.status ? this.myFileInfo.status : 'No Status'
                },
                set(value) {
                  return this.status = value
                },
              }
    },
    data() {
      return {
        options: [
          'Needs Review', 'In Progress', 'Approved', 'No Status'
        ],
        status: '',
        showContextMenu: false,
        showShare: false,
        version_d_show: false,
        version: '',
        version_Options: [],


      }
    },
    created() {

      this.getVersion()

    },
    methods: {
      changeModelStatus(value) {
        this.version_d_show = value
      },
      prev() {
        this.$router.push({path: '/files'})
      },
      printMethod() {
        var tab = document.getElementById('image')
        var win = window.open('', '', 'height=700,width=700')
        win.document.write(tab.outerHTML)
        win.document.close()
        win.print()
      },
      downloadItem() {
        // Download file
        // this.$downloadFile(this.myFileInfo.file_url, this.myFileInfo.name + '.' + this.myFileInfo.mimetype)
      },
      shareItem() {
        if (this.myFileInfo.shared) {
          events.$emit('popup:open', {
            name: 'share-edit',
            item: this.myFileInfo
          })
        } else {
          events.$emit('popup:open', {
            name: 'share-create',
            item: this.myFileInfo
          })
        }
      },
      shareReview() {
        // if (this.myFileInfo.shared) {
        // 	events.$emit('popup:open', {
        // 		name: 'share-review-edit',
        // 		item: this.myFileInfo
        // 	})
        // } else {
        events.$emit('popup:open', {
          name: 'share-review-create',
          item: this.myFileInfo
        })
        //}
      },
      sharePresentation() {
        if (this.myFileInfo.shared) {
          events.$emit('popup:open', {
            name: 'share-presentation',
            item: this.myFileInfo
          })
        } else {
          events.$emit('popup:open', {
            name: 'share-presentation',
            item: this.myFileInfo
          })
        }
      },
      menuOpen() {
        if (this.$isMobile()) {
          events.$emit('mobileMenu:show', 'showFromMediaPreview')
        } else {
          events.$emit('showContextMenuPreview:show', this.myFileInfo)
        }
      },
      closeFullPreview() {
        this.$route.push({path: '/files'})
      },

      updateStatus: function () {
        let formData = {
          'id': this.myFileInfo.id,
          'user_id': this.user.data.id,
          'status': this.status,
        }
        this.$store.dispatch('updateStatus', formData)
      },

      getVersion: function () {
        let id = atob(this.$route.params.id)
        let formData = {
          'id': id,
        }
        let route = 'api/version'
        axios
                .post(route, formData)
                .then(res => {
                  // res.json().then(json => {
                  console.log('response_data::', res.data.data)
                  //       json.data.forEach(data =>
                  //         console.log('ss',data.file)
                  //   // this.version_Options.push(value.file);
                  // )
                  this.version_Options = res.data.data
                  let st= {
                    'name':'compare Video',
                    'mimetype':'no',
                  }
                  this.version_Options.push(st)
                  // })
                })
                .catch((error) => {
                  // Show error message
                  events.$emit('alert:open', {
                    title: i18n.t('popup_error.title'),
                    message: i18n.t('popup_error.message'),
                  })
                })
      },

      updateRevsion: function () {

        if(this.version.mimetype !='no')
        {
          const encryptedText =   btoa(this.version.id)
          this.$router.push({path: '/files/'+encryptedText})
          this.$router.go()
        }else{
          const encryptedText =   btoa(this.myFileInfo.id)

          let formData = {
            'id': this.myFileInfo.id,
            'user_id': this.user.data.id,
          }
          this.$store.dispatch('versionComparison', formData)
          this.$router.push({path: '/comparisonMedia/'+encryptedText})
        }

        // let formData = {
        //   'id': this.myFileInfo.id,
        //   'user_id': this.user.data.id,
        //   'status': this.status,
        // }
        // this.$store.dispatch('updateStatus', formData)
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '@assets/vue-file-manager/_variables';
  @import '@assets/vue-file-manager/_mixins';

  .vs2__combobox {
    position: relative;
    top: -10px;
    right: -81px;
  }

  #version {
    position: relative;
    top: -10px;
    right: -45px;
  }

  .dot {
    height: 13px;
    width: 13px;
    // background-color: red;
    border-radius: 100%;
    display: inline-block
  }

  .name-wrapper {
    /*width: 33%;*/
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
      color: #23be5a;

      .icon-close {
        color: #23be5a;

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

      }
    }
    .created-at-wrapper p{
      color: $dark_mode_background;
    }
    .navigation-icons {
      .button:hover {
        background: $dark_mode_background;
      }
    }

    .v-list .v-list-item--active {
      background-color: green!important;
    }
    .v-list .v-list-item--active .v-list-item__title {
      color: #ffd54f !important;
    }

  }

  .dot-txt {
    margin-left: 3px;
  }

  .color-green {
    background: #00bc7e;
  }

  .showShare {
    margin: 0px;
    position: absolute;
    inset: 0px auto auto 0px;
    background: #fff;
    color: #00bc7e;

    min-width: 145px;
    left: 188px;
    top: 43px;
    //transform: translate(903.2px, 46.4px);
  }

  //.navigation-panel{
  //  height: 12% !important;
  //}
  .created-at-wrapper {
    margin-top: 17px !important;
  }

  .name-wrapper .name-count-wrapper {
    margin-left: 45px !important;
    margin-right: 6px !important;
    margin-top: 18px !important;
  }

  .name-wrapper .fast-menu-icon .more-icon {
    margin-top: 10px !important;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
  }
  .navigation-panel{
    height: 6% !important;
  }
  * {
    color: #bec6cf !important;
  }
  .vs__search{
    color: #1a1a1a;
  }

</style>
