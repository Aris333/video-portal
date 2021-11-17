<template oncontextmenu="return false;">
  <div :class="$route.name =='ComparisonMediaView' ?  'col-12 ': 'col-12 '">
    <!-- File Preview -->
<!--    <FileFullPreview/>-->

    <!--Loading Spinenr-->
        <Spinner v-if="isLoading"/>

    <!--Move item setup-->
    <MoveItem/>

    <!--Mobile Menu-->
    <MobileMenu/>

    <!--System alerts-->
    <Alert/>

    <!--Background vignette-->
    <Vignette/>

    <!--  <FilePreviewNavigationPanel/>-->
    <!--<FileReviewNavigationPanel   @changeTitle="$event" />-->
    <FileReviewNavigationPanel v-if="!isLoading" />

    <div class="col-12 margin-top-navbar" v-if="!isLoading">

      <!--Loading Spinenr-->
    <div class="" v-if="lastTwoFiles[0].type =='video'">
          <div class="row">
            <div class="col-sm-6 text-center mt-2 mb-2">
              <button :class="[first_media_volume ? 'btn-save  sound-volume' : 'btn-save sound-disable']" @click="volume1">
                <i v-if="first_media_volume" class="fas fa-volume-up"></i>
                <i v-if="!first_media_volume" class="fas fa-volume-mute"></i>
              </button>
            </div>
            <div class="col-sm-6 text-center mt-2 mb-2 ">
              <button :class="[second_media_volume ? 'btn-save  sound-volume' : 'btn-save sound-disable']" @click="volume1">
                <i v-if="second_media_volume" class="fas fa-volume-up"></i>
                <i v-if="!second_media_volume" class="fas fa-volume-mute"></i>
              </button>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">


              <div class="player">
                <video
                    id="videoElement1"
                    class="version-video"
                    @click="playOrPause"
                    :src="first_video_src ?  first_video_src : 'http://127.0.0.1:8000/file/etnw52cglwnxqmef-HTML%20canvas%20drawImage%28%29%20Method.mp4'"
                >
                  <!-- fallback content here -->
                </video>
                <div class="controls">

                  <div class="timer">
                    <div></div>
                    <span aria-label="timer"></span>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-sm-6">


              <div class="player">
                <video
                    @click="playOrPause"
                    id="videoElement2"
                    class="version-video"
                    :src="second_video_src ?  second_video_src : 'http://127.0.0.1:8000/file/krwvdv5z9y1wjny7-Test%20Videos%20-%20Google%20Drive_2.mp4'"

                >
                  <!-- fallback content here -->
                </video>
                <div class="controls">

                  <div class="timer">
                    <div></div>
                    <span aria-label="timer"></span>
                  </div>

                </div>
              </div>


            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="p-video-player__seekbar-wrap" id="video-player-media" @mousedown="grabSeekbar"
                   @touchstart="grabSeekbar" @touchmove="moveSeekbar" @touchend="releaseSeekbar">
                <div v-if="getProgressRate<=1" class="p-video-player__seekbar-current"
                     :style="{ transform: &quot;scaleX(&quot; + getProgressRate + &quot;)&quot; }"></div>
                <div v-else class="p-video-player__seekbar-current"
                     :style="{ transform: &quot;scaleX(&quot; + 1 + &quot;)&quot; }"></div>
                <div class="p-video-player__seekbar-back"></div>
              </div>

              <div class="p-video-player__seekbar-wrap-progress" id="video-player-media">
                <div class="progress" style="height:25px;">
                  <div class="progress-bar color-white" role="progressbar" aria-valuenow="40" aria-valuemin="0"
                       aria-valuemax="100" style="width: 100%;">
                  </div>

                </div>
              </div>
              <div class="p-video-player__control-panel p-2">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="d-inline float-left">
                      <a v-if="isPlaying" @click.prevent="playOrPause">
                        <i class="fa fa-pause " style="color: #00BC7E !important;"></i>
                      </a>
                      <a v-else @click="playOrPause">
                        <i class="fa fa-play " style="color: #00BC7E !important;"></i>
                      </a>
                    </div>

                    <a class="ml-5 float-left" @click="playLoop()" title="Loop">
                      <i class="fa fa-repeat" aria-hidden="true" style="color: #00BC7E !important;"
                         :class="{'iconColor': looping == true, 'iconColorWhite': looping == false }"></i>
                      <!-- {{ looping ? 'Loop' : 'Single' }} -->
                    </a>

                    <div class="dropdown show ml-3 float-left"
                         style="display:inline-block;color: #00BC7E !important;">
                      <a class="dropdown-toggle  " href="#" style="color: #00BC7E !important;" role="button"
                         id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ playback_speed }}x
                      </a>
                      <div class="dropdown-menu " style="color: #00BC7E !important;"
                           aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#" @click="placbackSpeed(0.25)">0.25</a>
                        <a class="dropdown-item" href="#" @click="placbackSpeed(0.5)">0.5</a>
                        <a class="dropdown-item" href="#" @click="placbackSpeed(0.75)">0.75</a>
                        <a class="dropdown-item" href="#" @click="placbackSpeed(1)">Normal</a>
                        <a class="dropdown-item" href="#" @click="placbackSpeed(1.25)">1.25</a>
                        <a class="dropdown-item" href="#" @click="placbackSpeed(1.5)">1.5</a>
                        <a class="dropdown-item" href="#" @click="placbackSpeed(1.75)">1.75</a>
                      </div>
                    </div>

                    <div class="float-left mr-1">
                      <a class="ml-4" @click="muteVolume()">
                        <a v-if="volumeMute">
                          <i class="fas fa-volume-slash" style="color:#00bc7e"></i>
                        </a>
                        <a v-else>
                          <i class="fa fa-volume-up" style="color:#00bc7e" aria-hidden="true"></i>
                        </a>
                      </a>
                    </div>

                    <vue-slider class="float-left mr-1" v-on:change="SetVolume()" width="15%" v-model="val"
                                :tooltip="'active'"/>

                    <div v-if="timeFormat=='Standard'" style="color: #00BC7E !important;"
                         class="p-video-player__time-wrap  ml-2 d-inline">
                            <span class="p-video-player__time-current ">{{ getCurrentTime }}
                            </span>/
                      <span class="p-video-player__time-all ">{{ getDuration }}</span>
                    </div>

                    <div v-if="timeFormat=='Timecode'" style="color: #00BC7E !important;"
                         class="p-video-player__time-wrap  ml-2 d-inline">
                            <span class="p-video-player__time-current ">{{ getCurrentMilisecond }}
                            </span>
                    </div>

                    <div v-if="timeFormat=='Frames'" style="color: #00BC7E !important;"
                         class="p-video-player__time-wrap  ml-2 d-inline">
                            <span class="p-video-player__time-current"> {{ getFrames }}
                            </span>/
                      <span style="color: #00BC7E !important;" class="p-video-player__time-all">{{
                          getTotalFrame
                        }}</span>
                    </div>

                    <div class="dropdown show ml-3" style="display:inline-block;">
                      <a class="dropdown-toggle " href="#" role="button" id="dropdownMenuLink"
                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                      </a>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item disabled" href="#" @click="playQualitySet(1080)"><strong
                            class="color-green">Time Format</strong></a>
                        <a class="dropdown-item" href="#" @click="setTimeFormat('Standard')"><strong
                            class="color-green">Standard</strong></a>
                        <a class="dropdown-item" href="#" @click="setTimeFormat('Timecode')"><strong
                            class="color-green">Timecode</strong></a>
                        <a class="dropdown-item" href="#" @click="setTimeFormat('Frames')"><strong
                            class="color-green">Frames</strong></a>
                      </div>
                    </div>

                    <div class="float-right">
<!--                      <a class="mr-2" @click="fullScreen()" title="Full Screen">-->
<!--                        <i class="fa fa-expand" style="color: #00BC7E !important;"></i>-->
<!--                      </a>-->
                    </div>
                    <!--- Auto Pixel Comment at 6-2-2021 --->
                    <!--											<div class="dropdown show mr-1 float-right" style="display:inline-block;">-->
                    <!--												<a class="dropdown-toggle  " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">-->
                    <!--													{{play_quality}}-->
                    <!--													<span class="text-white d-inline" v-if="play_quality!='Auto'">-->
                    <!--														p-->
                    <!--													</span>-->
                    <!--												</a>-->
                    <!--												<div class="dropdown-menu text-white" aria-labelledby="dropdownMenuLink">-->
                    <!--													<a class="dropdown-item" href="#" @click="playQualitySet(1080)">1080</a>-->
                    <!--													<a class="dropdown-item" href="#" @click="playQualitySet(720)">720</a>-->
                    <!--													<a class="dropdown-item" href="#" @click="playQualitySet(480)">480</a>-->
                    <!--													<a class="dropdown-item" href="#" @click="playQualitySet(360)">360</a>-->
                    <!--													<a class="dropdown-item" href="#" @click="playQualitySet(240)">240</a>-->
                    <!--													<a class="dropdown-item" href="#" @click="playQualitySet(144)">144</a>-->
                    <!--													<a class="dropdown-item" href="#" @click="playQualitySet('Auto')">Auto</a>-->
                    <!--												</div>-->
                    <!--											</div>-->

                    <!----Auto Commented ---->

                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
    <div class="" v-if="lastTwoFiles[0].type =='image'">

          <div class="row">
            <div class="col-sm-6">
              <div class="player">
                <img
                    class="version-video"
                    :src="first_video_src ?  first_video_src : ''"
               />
                <div class="controls">

                  <div class="timer">
                    <div></div>
                    <span aria-label="timer"></span>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-sm-6">
              <div class="player">
                <img
                    class="version-video"
                    :src="second_video_src ?  second_video_src : ''"
                />

              </div>

            </div>
          </div>

    </div>
    <div class="row">
        <div class="col-sm-6 text-center mt-2 mb-2">
          <!--              :menu-props="{ top: true, offsetY: true }"-->
          <v-select
              v-model="version1"
              id="version1"
              :options="version_Options"
              label="mimetype"
              attach
              auto
              :filterable="false"
              @input="changeFirstMediaSrc"
          >
            <template slot="no-options"></template>
            <template slot="option" slot-scope="data">
              <div class="d-center">
                <p v-if="data.name ">
                  <span
                    class="dot-txt">{{ data.name }}
                  </span>
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
        </div>
        <div class="col-sm-6 text-center mt-2 mb-2 ">
          <v-select
              v-model="version2"
              id="version2"
              :options="version_Options"
              label="mimetype"
              append-to-body
              :filterable="false"
              @input="changeSecondMediaSrc"


          >
            <template slot="no-options"></template>
            <template slot="option" slot-scope="data">
              <div class="d-center">
                <p v-if="data.name ">
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
        </div>
      </div>


    </div>
    <!--  <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>-->

    <div class="" v-show="isLoading ===false">

      <div v-if="loading">Loading some data</div>

    </div>
    <div v-if="loading">Loading some data</div>
  </div>


</template>
<script>


import {events} from '@/bus'
import {mapGetters} from 'vuex'
import ToolbarButton from '@/components/FilesView/ToolbarButton'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import FrameVideo from "vue-frame-video";
import 'video.js/dist/video-js.css'
import Tabs from 'vue-tabs-with-active-line'
// import { TimeAgo } from 'vue2-timeago'
// import 'vue2-timeago/dist/vue2-timeago.css'
import VueContentLoading from 'vue-content-loading';

var video;
import 'vue-select/dist/vue-select.css';


import {createPopper} from '@popperjs/core';
import Editor from '@/components/paintTool/Editor'

const debounce = (callback, duration) => {
  var timer;
  return function (event) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback(event);
    }, duration);
  };
}
//

import EmojiPicker from 'vue-emoji-picker'
import Painting from "../../assets/painting";
import $ from "jquery";

import moment from 'moment'
import axios from "axios";
import CropImage from '../../assets/js/crop';
import CanvasHistory from '../../assets/js/canvasHistory';
import FilePreviewNavigationPanel from "../../components/FilesView/FilePreviewNavigationPanel";
import {ValidationObserver, ValidationProvider} from "vee-validate/dist/vee-validate.full";
import {required} from "vee-validate/dist/rules";
import DesktopToolbar from '@/components/FilesView/DesktopToolbar'
import FileFullPreview from "@/components/FilesView/FileFullPreview";
import FileItemGrid from '@/components/FilesView/FileItemGrid'
import FileBrowser from '@/components/FilesView/FileBrowser'
import ContextMenu from '@/components/FilesView/ContextMenu'
import ButtonBase from '@/components/FilesView/ButtonBase'
import MobileMenu from '@/components/FilesView/MobileMenu'
import AuthContent from '@/components/Auth/AuthContent'
import AuthButton from '@/components/Auth/AuthButton'
import Spinner from '@/components/FilesView/Spinner'
import MoveItem from '@/components/Others/MoveItem'
import Vignette from '@/components/Others/Vignette'
import Alert from '@/components/FilesView/Alert'
import jQuery from "jquery";
import FileReviewNavigationPanel from "../../components/FilesView/FileReviewNavigationPanel";

export default {
  name: 'ComparisonMediaView',
  components: {
    FileReviewNavigationPanel,
    ToolbarButton
    ,Editor
    ,Spinner
    ,VueSlider
    ,Painting
    ,FrameVideo
    ,EmojiPicker
    ,Tabs
    // ,TimeAgo
    , VueContentLoading
    , moment,
    ValidationProvider,
    ValidationObserver,
    FileFullPreview,
    DesktopToolbar,
    FileItemGrid,
    AuthContent,
    FileBrowser,
    ContextMenu,
    AuthButton,
    MobileMenu,
    ButtonBase,
    MoveItem,
    required,
    Vignette,
    Alert
  },
  computed: {
    ...mapGetters(['myFileInfo', 'isProcessingFile', 'config', 'updateFps', 'data', 'user', 'lastTwoFiles','pageReload']),

    // fileName() {
    //   let file = this.currentFile.basename;
    //   var index = file.indexOf('-');
    //   var arr = [file.slice(0, index),file.slice(index + 1)];
    //   return arr[1]
    // },
    // first_video_src()
    // {
      // get()
      // {
      //   return   this.first_video_src =  this.lastTwoFiles[0].file_url
      // },
      // set(value)
      // {
      //   $('#videoElement1').src = value.file_ur
      // }
    // },
    // second_video_src()
    // {
    //     return    this.second_video_src = this.lastTwoFiles[1].file_url
    // },
    // total_media_time:
    // {
    //   get()
    //   {
    //     return 0
    //   },
    //   set(newValue)
    //   {
    //     return newValue
    //   }
    // },
    // current_media_time:
    // {
    //   get()
    //   {
    //         return     (this.media1.currentTime, this.media2.currentTime)/2
    //      // return  this.media1.currentTime+this.media2.currentTime
    //    },
    //   set(value)
    //   {
    //     return  value
    //   }
    // },
    navigation() {
      return {
        color: {
          body: 'color'
        }
      };
    },
    isMobileDevice() {
      return this.$isMobile()
    },
    // currentFile: function () {
    //   //return this.sliderFile[Math.abs(this.currentIndex) % this.sliderFile.length]
    //   return this.myFileInfo
    // },
    isMedia() {
      return this.myFileInfo === 'image' || 'video' || 'audio'
    },
    canShareInView() {
      return !this.$isThisLocation(['base', 'participant_uploads', 'latest', 'shared', 'public'])
    },
    getProgressRate: function () {
      return  (this.time / this.duration)/2;
    },
    getCurrentTime: function () {

      return this.convertSecondsToTime(Math.floor(this.time/2)) ;
    },
    getCurrentMilisecond: function () {
      return this.convertMiliSecondToTime(this.time);
    },
    getTotalFrame: function () {
      return parseInt(24) * Math.floor(this.duration);
    },
    getDuration: function () {
      this.currentVideoTime= this.convertSecondsToTime(this.duration)
      return this.convertSecondsToTime(this.duration);
    },


  },
  data() {
    return {
      first_video_src: '',
      second_video_src: '',
      version1: '',
      version2: '',
      version_Options: [],
      testImg: '',
      activeType: '',
      version_show: false,
      first_media_volume: false,
      second_media_volume: true,
      mousedown: false,
      showbtns: true,
      isLoading: true,
      parentId: '',
      active: false,
      searchQuery: null,
      placement: 'top',
      showLikeByIndex: {
        index: null,
        like: false,
      },
      likeCom: false,
      loading: false,
      activeClass: 'is-visible',
      color: '#000',
      currentVideoTime: 0,
      options1: [
        {everyone: 'everyone'},
        {teamgourp: 'teamgourp'}
      ],
      permission: 'Every One',
      textControlStyle: null,
      textValue: null,
      showText: false,
      currentIndex: 1,
      sliderFile: [],
      media: null,
      seekbar: null,
      seekbarWidth: 0,
      seekbarOffsetX: 0,
      time: 0,
      duration: 0,
      isPlaying: false,
      isGrabbingSeekbar: false,
      val: 65,//volume
      volumeMute: false,
      playback_speed: 1,
      play_quality: 'Auto',
      looping: false,
      timeFormat: 'Standard',
      initialTime: 0,
      autoplay: false,
      smpte: "00:00:00:00",
      video: '',
      frameNo: 0,
      disableNavigation: true,
      isActive: false,
      isVideoLoading: false,
      useEraser: false,
      vctime: '',//video current time
      canvasId: '',
      search: '',
      selectedTime: '00:00',
      tabs: [
        {title: 'Tab 1', value: 'tab1'},
        {title: 'Tab 2', value: 'tab2'},
      ],
      currentTab: true,
      isReplying: false,
      dashPlayer: '',
      bitrates: [],
    }
  },
  watch: {
    sliderFile() {
      //Close file preview after delete all items
      if (this.sliderFile.length == 0) {
        events.$emit('fileFullPreview:hide')
      }
    },
    isGetComment(newValue, oldValue) {
      if (newValue == true) {
        this.getComments()
      }
    },
    // currentFile() {
    //   //Handle actual view image in myFileInfo
    //   if (this.myFileInfo) {
    //     this.$store.commit('GET_FILEINFO_DETAIL', this.currentFile)
    //     events.$emit('actualShowingImage:ContextMenu', this.currentFile)
    //     // this.loaded = false
    //   }
    // },
    page_reload() {
      //Handle actual view image in myFileInfo
      if (this.page_reload) {
            this.$route.go()
      }
    },
    // myFileInfo() {
    //   //File delete handling - show next image after delete one
    //   if (!this.myFileInfo) {
    //     this.currentIndex = this.currentIndex - 1
    //     this.$store.commit('GET_FILEINFO_DETAIL', this.currentFile)
    //     this.sliderFile = []
    //     this.filteredFiles()
    //   }
    // },
    data(newValue, oldValue) {
      //Move item handling
      if (newValue != oldValue) {
        this.sliderFile = []
        this.filteredFiles()
      }
    },
  },
  async beforeCreate() {

    let auth = localStorage.getItem('auth_check')
    if (auth === "false" || auth === null || auth === undefined) {
      this.$router.push({name: 'SignIn'})
    } else {

    }
  },
  created() {
    //    this.filteredFiles();
    this.getVersion();
    $(document).on('load', function () {
      $('#videoElement1').prop('muted', false)
    })
    //   const decryptedText = this.CryptoJS.AES.decrypt(encryptedText, "Secret Passphrase").toString(this.CryptoJS.enc.Utf8)
    this.setVideoSize()
    setTimeout(function () {
      this.isLoading = false
    }.bind(this), 3000)
    if(!this.lastTwoFiles)
    {
       let file_id = this.$route.params.id

      let formData = {
        'id': atob(file_id) ,
        'user_id': this.user.data.id,
      }
      this.$store.dispatch('versionComparison', formData)
    }

    // else{
    //   this.$store.commit('firstVideoSrc', this.lastTwoFiles[0])
    //   this.$store.commit('secondVideoSrc', this.lastTwoFiles[1])
    //
    // }

  },

  updated() {



    // $('#videoElement2').on('click',function (){
    //   this.playOrPause;
    // this.paused ? this.play()  : this.pause() ;
    // this.paused ? this.play() && $('#videoElement1').trigger('play') : this.pause() && $('#videoElement1').trigger('pause');
    // });
    // $('.canvas').css('height', '690px')
    $('#videoElement').css('width', '100%')
    $('#videoElement1').attr('width', '100%')
    $('#videoElement1').attr('height', '100%')
    $('#videoElement2').attr('width', '100%')
    $('#videoElement2').attr('height', '100%')
    // $('#videoElement').css('height', 'auto')
    $('#vs1__combobox').css('background-color', 'lightgray')
    // $('#vs2__combobox').css('width', '176px')
    // $('#vs2__combobox').css('color', '#0077a2 !important')
    // $('#vs2__combobox').css('color', '#0077a2 !important')
     $('#version2').css('background-color', '#0077a2 !important')
    $('#vs2__combobox').css('height', '36px')
    $('.vue-slider-process').css('color', '#0077a2 !important')

    // $('.menu-bar').css('display', 'none')
    $('.vs2__combobox').css('height', 'none')
    $('.vs--searchable .vs__dropdown-toggle').css('height', '36')
    // $('.vs--searchable .vs__dropdown-toggle').css('width', '181')
    $('.btn btn-primary color-green').css('position', 'absolute')

    this.media1 = this.$el.querySelector('#videoElement1');
    this.media2 = this.$el.querySelector('#videoElement2');

    if(this.first_video_src == "") {
      this.first_video_src = this.lastTwoFiles[0].file_url;
    }
    if(this.second_video_src == "") {
      this.second_video_src = this.lastTwoFiles[1].file_url ;
    }



    if (this.sliderFile.length > 1) {
      events.$on('filePreviewAction:next', () => {
        this.currentIndex += 1
        this.slideType = 'next'
        if (this.currentIndex > this.sliderFile.length - 1) {
          this.currentIndex = 0
        }
      })

      events.$on('filePreviewAction:prev', () => {
        this.slideType = 'prev'
        this.currentIndex -= 1
        if (this.currentIndex < 0) {
          this.currentIndex = this.sliderFile.length - 1
        }
      });
    }

if(this.lastTwoFiles[0].type =='video'){
      this.seekbar = this.$el.querySelector('.p-video-player__seekbar-wrap');
      this.reLayoutSeekbar();

      window.addEventListener('resize', debounce(() => {
        this.reLayoutSeekbar();
      }), 100);

      document.addEventListener('mousemove', (event) => {
        this.moveSeekbar(event);
      });

      document.addEventListener('mouseup', (event) => {
        this.releaseSeekbar(event);
      });
      this.media1.addEventListener('loadedmetadata', () => {
        this.duration = (this.media1.duration +this.media2.duration)/2  //Math.floor((  this.media1.duration+this.media2.duration)/2);
      });
      this.media1.addEventListener('ended', () => {
        this.media1.currentTime = 0;
        if (this.looping) {
          this.media1.play();
          this.isPlaying = false;
        } else {
          this.isPlaying = false;
        }
      });
      this.media2.addEventListener('ended', () => {
        this.media2.currentTime = 0;
        if (this.looping) {
          this.media2.play();
          this.isPlaying = false;
        } else {
          this.isPlaying = false;
        }
      });

    }
  },
  methods: {

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
            //       json.data.forEach(data =>
            //   // this.version_Options.push(value.file);
            // )
            this.version_Options = res.data.data
            // let st= {
            //   'name':'compare Video',
            //   'mimetype':'no',
            // }
            // this.version_Options.push(st)
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

    changeFirstMediaSrc: function () {

    this.first_video_src =this.version1.file_url
    },

    changeSecondMediaSrc: function () {

    this.second_video_src =this.version2.file_url
    },

    setVideoSize() {

      var x = window.matchMedia("(max-width: 700px)")
      if (x.matches > 700) { // If media query matches

        $('.paintable').css('width', '800px')
      } else {

        $('.paintable').css('width', '500px')
      }
    },
    getListPresentFiles() {
      this.version_show = true;
    },
    showElements(event) {
      this.activeId = event.target.id;
    },

    hideElements() {
      this.activeId = 0;
    },

    setSelect(name) {
      for (let i in this.selected) {
        this.selected[i] = i === name
      }
      this[name]()
    },

    append(emoji) {
      this.comment += emoji
    },

    showDescription() {
      this.isDescription = true;
    },

    hideDescription() {
      this.isDescription = false;
    },

    handleClick(bool) {
      this.currentTab = bool;
    },

    filteredFiles() {
      this.data.filter((element) => {
        if (element.type == this.myFileInfo.type) {
          this.sliderFile.push(element)
        }
      })
      this.choseActiveFile()
    },
    onEnterKey(e) {
      console.log("ClickedEnter", e);
    },
    choseActiveFile() {
      this.sliderFile.forEach((element, index) => {
        if (element.unique_id == this.myFileInfo.unique_id) {
          this.currentIndex = index
        }
      })
    },
    myVideoPlay: function () {
      this.media1.play();
      this.media2.play();
      this.second_media_volume = true
      this.first_media_volume = false
      $('#videoElement1').prop('muted', true)
      $('#videoElement2').prop('muted', false)

      // $('#videoElement1').prop('muted',true)
      /* this.bitrates = this.dashPlayer.getBitrateInfoListFor("video");//(this.$el.querySelector('#videoElement'));
      console.log(this.bitrates); */
      $("#videoElement").removeClass("d-none");
      $(".content img:last-child").remove();
      this.isPlaying = true;
      this.loop();
    },
    myVideoPause: function () {
      this.media1.pause();
      this.media2.pause();
      this.isPlaying = false;
      this.second_media_volume = false;
      this.first_media_volume = false;
      $('#videoElement1').prop('muted', true)
      $('#videoElement2').prop('muted', true)
    },
    playOrPause: function () {

      if (this.isPlaying) {
        this.myVideoPause();
          if(this.volumeMute ==false)
          {
            this.second_media_volume = false
            this.first_media_volume = false
            $('#videoElement1').prop('muted', true)
            $('#videoElement2').prop('muted', true)
          }
       }else{
        this.myVideoPlay();
          if(this.volumeMute ==false)
          {
            this.second_media_volume = true
            this.first_media_volume = false
            $('#videoElement1').prop('muted', true)
            $('#videoElement2').prop('muted', false)
          }
      }
    },
    volume1: function () {
      if (this.first_media_volume == true && this.second_media_volume == false) {
        this.first_media_volume = false
        this.second_media_volume = true
        $('#videoElement1').prop('muted', true)
        $('#videoElement2').prop('muted', false)
      } else {
        this.first_media_volume = true
        this.second_media_volume = false
        $('#videoElement1').prop('muted', false)
        $('#videoElement2').prop('muted', true)
      }
    },
    stop: function () {
      this.media.currentTime = 0;
      this.myVideoPause();
    },

    SetVolume: function () {
      this.media1.volume = this.val / 100;
      this.media2.volume = this.val / 100;
      /* if(this.val<=0){
        this.volumeMute = true;
        this.media.muted = true;
      }else{
        this.volumeMute = false;
        this.media.muted = false;
      } */
    },

    placbackSpeed: function (playback_rate) {
      console.log(playback_rate);
      this.playback_speed = playback_rate;
      this.media1.playbackRate = playback_rate;
      this.media2.playbackRate = playback_rate;
    },
    fullScreen: function (playback_rate) {
      this.media1.webkitRequestFullScreen();
      this.media2.webkitRequestFullScreen();
    },
    playLoop: function () {
      this.looping = !this.looping;
      console.log(this.looping);
      // this.media.webkitRequestFullScreen();
    },
    playQualitySet: function (quality) {
      this.play_quality = quality;
    },
    loop: function () {
      this.time = this.media1.currentTime + this.media1.currentTime;
      if (!this.isPlaying) return;
      requestAnimationFrame(() => {
        this.loop();
      });
    },
    muteVolume: function () {
        if(this.volumeMute == true)
        {
          this.media1.muted =false
          this.media2.muted =false
          this.volumeMute = !this.volumeMute;
        }else{
          this.media1.muted =true
          this.media2.muted =true;
          this.volumeMute = !this.volumeMute;
        }
    },
    findSliderAmountMap: function (value) {
      this.dynamicLineWidth = value;
    },
    setTimeFormat: function (timeFormat) {
      this.timeFormat = timeFormat;
    },

    grabSeekbar: function (event) {
      event.preventDefault();
      this.isGrabbingSeekbar = true;
      let totalTime = (this.media1.currentTime +this.media2.currentTime)/2
      // this.time = totalTime = event.layerX / this.seekbarWidth * this.duration;
      totalTime = event.layerX / this.seekbarWidth * this.duration;
      this.media1.currentTime=totalTime
      this.media2.currentTime=totalTime
      this.media1.pause();
      this.media2.pause();
    },
    moveSeekbar: function (event) {
      event.preventDefault();
      let totalTime = (this.media1.currentTime+this.media2.currentTime)/2;
      if (!this.isGrabbingSeekbar) return;
      this.time = totalTime =
          (event.clientX - this.seekbarOffsetX - window.pageXOffset)
          / this.seekbarWidth * this.duration;
    },
    releaseSeekbar: function (event) {
      event.preventDefault();
      this.isGrabbingSeekbar = false;
      if (this.isPlaying) {
        this.media1.play();
        this.media2.play();
      }
    },
    reLayoutSeekbar: function () {
      this.seekbarWidth = this.seekbar ? this.seekbar.clientWidth : '';
      this.seekbarOffsetX = this.seekbar.getBoundingClientRect().left;
    },
    convertSecondsToTime: function (time) {
      let seconds = Math.floor(time % 60);
      if (seconds < 10) seconds = '0' + seconds;
      let minutes = Math.floor(time / 60 % 60);
      return `${minutes}:${seconds}`
    },
    convertMiliSecondToTime: function (time) {
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor(time / 60 % 60);
      let seconds = Math.floor(time % 60);
      let milisec = Math.floor(time * 1000);
      milisec = milisec.toString().slice(0, 2);
      if (seconds < 10) seconds = '0' + seconds;
      if (hours < 10) hours = '0' + hours;
      if (milisec < 10) milisec = '0' + milisec;
      if (minutes < 10) minutes = '0' + minutes;
      return `${hours}:${minutes}:${seconds}:${milisec}`
    },
    seekForward: function () {
      this.media1.seekForward();
      this.media2.seekForward();
    },
    seekBackward: function () {
      this.seekBackward();
    },
    onPlay: function () {
      // console.log('onPlay');
    },
    onPause: function () {
      //	console.log('onPause');
    },
    onEnded: function () {
      console.log('onEnded' + this.media.currentTime);
      // this.time = this.media.currentTime;
    },
    onWaiting: function () {
      //	console.log('onWaiting');
    },
    onFullscreenchange: function (event) {
      //	console.log('onFullscreenchange');
    },
    onTimeupdate: function (event) {
      // console.log('onTimeupdate',event);
    },
    onFrameupdate: function (event) {
      this.smpte = event.SMPTE;
    },
    onProgress: function (event) {
      //console.log('onProgress',event);
    },
    onError: function (event) {
      console.log('onError', event);
      events.$emit('alert:open', {
        emoji: '😬😬😬',
        title: i18n.t('popup_mimetypes_blacklist.title'),
        message: "Can't open the File.Upload again",
      })
    },


    scalePreserveAspectRatio: function (imgW, imgH, maxW, maxH) {
      return (Math.min((maxW / imgW), (maxH / imgH)));
    },


    withPopper(dropdownList, component, {width}) {
      dropdownList.style.width = width;

      const popper = createPopper(component.$refs.toggle, dropdownList, {
        placement: this.placement,
        modifiers: [
          {
            name: 'offset', options: {
              offset: [0, -1]
            }
          },
          {
            name: 'toggleClass',
            enabled: true,
            phase: 'write',
            fn({state}) {
              component.$el.classList.toggle('drop-up', state.placement === 'top')
            },
          }]
      });
      return () => popper.destroy();
    }
  }

}
</script>

<style lang="scss" scoped>

.image-for-pic {
  width: 100%;
  display: block;
}

.drop-up {
  width: 100%;
}

.margin-top-navbar {
  margin-top: 4%;
}

.vs__dropdown-toggle {
  padding-left: 45px !important;
}

.sound-volume {
  width: 40px;
  color: white;
  height: 40px;
  border-radius: 40px;
  background-color: #00BC7E !important;
  i{
    color:white;
  }

}

.sound-disable {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: silver !important;
}


.btn-save {
  background-image: none;
  background-position: initial;
  background-size: initial;
  background-repeat: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  appearance: none;
  background-color: inherit;
  border: none;
  padding: 0px;
  font-size: 14px;
  line-height: 1.5;
  color: rgb(125, 130, 156);
  margin-right: 12px;
}

.has-tooltip {
  color: white;
}

.inner-addon {
  position: relative;
}

/* style icon */
.inner-addon .fa-search {
  position: absolute;
  padding: 10px;
  pointer-events: none;
}

/* align icon */
.left-addon .fa-search {
  left: 0px;
}

.right-addon .fa-search {
  right: 0px;
}

/* add padding  */
.left-addon input {
  padding-left: 30px;
}

.right-addon input {
  padding-right: 30px;
}

.table-sm td {
  padding: .3rem;
  font-size: 15px;
}

.searchbar {
  margin-bottom: auto;
  margin-top: auto;
  // height: 30px;
  background-color: #353b48;
  border-radius: 30px;
  padding: 10px;
}

.search_input {
  color: white;
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  caret-color: transparent;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_input {
  padding: 0 10px;
  width: 20%;
  transition: width 0.4s linear;
}

.searchbar:hover > .search_icon {
  background: white;
  color: #e74c3c;
}

.tabs {
  position: relative;
  margin: 0 auto;
}

.tabs__item {
  display: inline-block;
  margin: 0 5px;
  padding: 10px;
  padding-bottom: 8px;
  font-size: 16px;
  letter-spacing: 0.8px;
  color: gray;
  text-decoration: none;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s;
}

.tabs__item_active {
  color: #00bc7e;
  border-bottom: 2px solid #00bc7e;
}

.tabs__item:focus {
  outline: none;
  border-bottom: 2px solid #00bc7e;
  color: white;
}


.emoji-invoker {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}

.upper-canvas {
  border: 2px solid #0077a2 !important;
  background-color: green;
}

.emoji-invoker:hover {
  transform: scale(1.1);
}

.emoji-invoker > svg {
  fill: #b1c6d0;
}

.emoji-picker {
  top: -25% !important;
  left: 100% !important;
  width: 200px;

}

.emoji-picker {
  position: absolute;
  z-index: 1;
  font-family: Montserrat;
  border: 1px solid #ccc;
  width: 15rem;
  height: 20rem;
  overflow: scroll;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 1px 1px 8px #c7dbe6;
}

.emoji-picker__search {
  display: flex;
}

.emoji-picker__search > input {
  flex: 1;
  border-radius: 10rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  outline: none;
}

.emoji-picker h5 {
  margin-bottom: 0;
  color: #b1b1b1;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: default;
}

.emoji-picker .emojis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.emoji-picker .emojis:after {
  content: "";
  flex: auto;
}

.emoji-picker .emojis span {
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
}

.emoji-picker .emojis span:hover {
  background: #ececec;
  cursor: pointer;
}


.comment-composer__top-row {
  min-height: 44px;
  height: 44px;
  transition: height .4s cubic-bezier(.23, 1, .32, 1);
}

.ph-fio3 {
  padding-right: .9375rem;
  padding-left: .9375rem;
}

.justify-between {
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.justify-between {
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.flex {
  display: -ms-flexbox;
  display: flex;
}

.kWHaiQ {
  position: relative;
  width: 100%;
  margin-top: 12px;
}

body {
  font-family: Avenir Next, Helvetica Neue, Helvetica, Arial, sans-serif;
}

.absolute {
  position: absolute;
}

.pe--none {
  pointer-events: none;
}

.comment-composer__bottom-row {
  height: 44px;
}

.pv-fio2 {
  padding-top: .65rem;
  padding-bottom: .65rem;
}

.pl-fio6 {
  padding-left: 3.125rem;
}

.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

.flex {
  display: -ms-flexbox;
  display: flex;
}

.pl-fio6 {
  padding-left: 3.125rem;
}


.pa-fio1 {
  padding: .325rem;
}

.self-start {
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.comment-composer__timestamp {
  font-size: 14px;
}

.items-center {
  -ms-flex-align: center;
  align-items: center;
}

.ph-fio1 {
  padding-right: .325rem;
  padding-left: .325rem;
}

.dn {
  display: none;
}

[type="checkbox"], [type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

button, input, optgroup, select, textarea {
  font-family: inherit;
}

button, input, optgroup, select, textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

.kPXSpg:not(:disabled) {
  cursor: pointer;
}

[type="reset"], [type="submit"], button, html [type="button"] {
  -webkit-appearance: button;
}

.fkNvxd {
  border: medium none;
  box-shadow: none;
  background-color: rgb(32, 34, 43);
  color: rgb(184, 193, 207);
  font-weight: normal;
  font-size: 13px;
  padding: 0.325rem;
  line-height: 1.15;
  height: 27px;
  min-width: 0px;
}

.kPXSpg {
  background: rgb(91, 83, 255) none repeat scroll 0% 0%;
  background-color: rgb(91, 83, 255);
  border: 0px none;
  appearance: none;
  display: inline-flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: normal;
  font-stretch: normal;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 0px 12px;
  white-space: nowrap;
  transition: background-color 0.2s ease 0s, color 0.2s ease 0s, box-shadow 0.2s ease 0s, opacity 0.2ms ease 0s;
  line-height: 1;
  height: 32px;
  min-width: 72px;
  color: rgb(255, 255, 255);
  box-shadow: transparent 0px 0px inset;
}

.fkNvxd {
  color: rgb(184, 193, 207);
  font-weight: normal;
  font-size: 13px;
  line-height: 1.15;
}

svg:not(:root) {

  overflow: hidden;

}

.fTdjOj {

  width: 16px;
  height: 16px;
  color: rgb(91, 83, 255);

}

*, html {

  margin: 0;
  padding: 0;

}

.kPXSpg:not(:disabled) {

  cursor: pointer;

}

.fkNvxd {

  color: rgb(184, 193, 207);
  font-weight: normal;
  font-size: 13px;
  line-height: 1.15;

}

.kPXSpg {

  font-size: 14px;
  font-weight: bold;
  letter-spacing: normal;
  font-stretch: normal;
  white-space: nowrap;
  line-height: 1;
  color: rgb(255, 255, 255);

}

.comment-composer__top-row {
  min-height: 44px;
  height: 44px;
  transition: height .4s cubic-bezier(.23, 1, .32, 1);
}

.comment-composer__avatar_container {
  width: 36px;
  height: 44px;
}

svg:not(:root) {
  overflow: hidden;
}

.player-dark-purple {
  color: #5242ff;
}

.paint {
  border-radius: 5px;
  box-sizing: border-box;
  display: block;
  height: auto !important;
  position: relative !important;
  overflow: hidden;
  background: rgb(247, 244, 244);
}

.custom-navigation .controls {
  margin: 10px 0 0 0;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  width: 500px
}

/* .navigation{
  background: gray;
} */
.navigationMenu {
  background: gray;
}

video {
  width: 100%;
  height: auto;
}

.custom-bar {
  position: absolute;
  top: 80%;
  left: 3.5%;
  height: 14px;
  width: 500px;
  background: gray;
  z-index: 1;
}

.dropbtn {
  background-color: lightgray;
  color: black;
  padding: 9px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin-top: 6px;
  margin-left: 10px;
  width: 108px;
  float: left;
}

.float-right {
  float: right;
}

.float-left {
  float: left;
}

.dropup {
  position: absolute;
  top: 80%;
  left: 60%;
  /* display: inline-block; */

  z-index: 1;
}

.dropup-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  bottom: 40px;
  z-index: 1;
}

.dropbtn span {
  color: black
}

.dropup-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropup-content a:hover {
  background-color: #ccc
}

.dropup:hover .dropup-content {
  display: block;
}

.dropup:hover .dropbtn {
  background-color: lightgray;
}


#playbtn {
  background-color: rgb(17, 16, 16);
  border: medium none;
  color: #fff;
  display: block;
  font-size: 18px;
  left: 66%;
  margin: 0 auto;
  padding: 8px 16px;
  position: absolute;
  right: 0;
  top: 10%;
  border-radius: 5px;
  font-size: 10px;
}

#thumbnailBtn {
  background-color: rgb(17, 16, 16);
  border: medium none;
  color: #fff;
  display: block;
  font-size: 18px;
  left: 66%;
  margin: 0 auto;
  padding: 8px 16px;
  position: absolute;
  right: 0;
  top: 17%;
  border-radius: 5px;
  font-size: 10px;
}

button.active {
  background-color: #0077a2;
}

.iconColor {
  color: #007bff;
}

.iconColorWhite {
  color: white;
}

.progress {
  max-width: 100%;
  // margin: 50px;
  position: relative; /* remove this and title works */
  overflow: visible;
}

.dot {
  height: 15px;
  width: 15px;
  background-color: #00bc7e;
  color: white;
  border-radius: 50%;
  font-size: 10px;
  padding-top: 8px;
  padding-left: 2px;
  position: absolute;
  border: 1px solid blue;
}

.image-circle {
  background-color: #00bc7e;
  color: white;
  border-radius: 45%;
  font-size: 12px;
  // padding-top: 6px;
  padding: 4px;
  border: 1px solid blue;
}


.bt {
  width: 30px;
  height: 30px;
  display: block;
  border-radius: 40px;
  background-color: #ddd;
  position: relative;
}

.bt:after {
  position: absolute;
  content: " ";
  width: 0;
  height: 0;
  top: calc(50% - 7px);
  left: calc(50% - 3px);
  display: block;

}

.bt.play:after {
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid #222;
}

.bt.pause:after {
  width: 4px;
  height: 12px;
  top: calc(50% - 6px);
  left: calc(50% - 5px);
  border-right: 3px solid #222;
  border-left: 3px solid #222;
}

.pppp {
  width: 4px;
  height: 12px;
  top: calc(50% - 6px);
  left: calc(50% - 5px);
  border-right: 3px solid #222;
  border-left: 3px solid #222;
}

.vs__dropdown-toggle {
  width: 100% !important;
  padding-left: 45px !important;
}


.l-page {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

.c-content-header {
  margin-top: 0;
  font-size: 2em;
  font-weight: 400;
}

.p-video-player__media {
  width: 100%;
  display: block;
}

//.canvas{
//  width:100%;
//  height:100%;
//}

.p-video-player__seekbar-wrap {
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;
}

.p-video-player__seekbar-wrap-progress {
  cursor: pointer;
  position: relative;
  // background-color: #fff;
}

.p-video-player__seekbar-current, .p-video-player__seekbar-back {
  height: 7px;
  position: absolute;
  right: 0;
  left: 0;
}

.p-video-player__seekbar-current {
  z-index: 2;
  background-color: #00BC7E;
  transform: scaleX(0);
  transform-origin: left;
}

.p-video-player__seekbar-back {
  background-color: lightgray;
  //background-color: rgb(102, 96, 96);
}

.p-video-player__control-panel {
  // background-color: #20222b;
  background-color: #fff;
}

.p-video-player__btn {
  width: 5em;
  margin-right: 2px;
  padding: 0.5em 0;
}

.p-video-player__time-wrap {
  margin-left: 1em;
  color: #00bc7e;
}

.p-video-player__time-current {
  margin-right: 0.25em;
  color: #00bc7e;
}

.p-video-player__time-all {
  margin-left: 0.25em;
  color: #00bc7e;
}


@import '@assets/vue-file-manager/_variables';
@import '@assets/vue-file-manager/_mixins';



.navigation-panel {
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  background-color: $light-background;
  color: $text;

  .icon-close {
    color: $text;
    @include font-size(21);

    &:hover {
      color: $theme;
    }
  }
}

//.loading-spinner {
//	position: relative;
//}

.file-wrapper-preview {
  width: 100%;
  height: 100%;
  padding: 30px 0px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: white;

  .file-wrapper {
    width: 100%;
    //height: 100%;
    //display: flex;
    //justify-content: center;
    // align-items: center;

    .file-shadow {
      box-shadow: 0 8px 40px rgba(17, 26, 52, 0.15);
    }

    .file {
      max-width: 100%;
      max-height: 100%;
      align-self: center;
    }

    .audio {
      border-radius: 28px;
    }

    img {
      border-radius: 4px;
    }

    .video-wrapper {
      max-width: 1080px;
      max-height: 100%;

      @media (min-width: 1200px) {
        & {
          max-width: 800px;
        }
      }

      @media (min-width: 1920px) and (max-width: 2560px) {
        & {
          max-width: 1080px;
        }
      }
      @media (min-width: 2560px) and (max-width: 3840px) {
        & {
          max-width: 1440px;
        }
      }
      @media (min-width: 3840px) {
        & {
          max-width: 2160px;
        }
      }

      .video {
        max-width: 100%;
        max-height: 100%;
        align-self: center;
      }
    }
  }
}

@media (prefers-color-scheme: dark) {
  .file-wrapper-preview {
    background-color: $dark_mode_background;

    .file-wrapper {
      .file-shadow {
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
      }
    }
  }
#version2{
  background-color: lightgray;
}
  #version1{
    background-color: lightgray;
  }
*{
   color: #1a1a1a !important;
 }
}

.tabs__item tabs__item_active {
  color: #0e0e0e !important;
}

.v-select.drop-up.vs--open .vs__dropdown-toggle {
  // width:100% !important; padding-left: 45px !important;
  border-radius: 0 0 4px 4px;
  border-top-color: transparent;
  border-bottom-color: rgba(60, 60, 60, 0.26);
}

[data-popper-placement='top'] {
  border-radius: 4px 4px 0 0;
  border-top-style: solid;
  border-bottom-style: none;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.15)
}

.vs__dropdown-toggle {
  width: 100% !important;
  padding-left: 45px !important;
}

//.vs__dropdown-toggle {
//  border: none;
//  padding: 17px;
//  padding-left: 45px;
//  padding-right: 15px;
//}
.draw-options {
  //  padding: 5px;
  width: 36px;
  border-radius: 23px;
  padding: 7px;
  font-size: 16px;
  color: $theme !important;
}

.slide-fade-enter-active {
  transition: all .5s ease;
}

.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}

.vs__search {
  width: 120px !important;
}

.vue-slider-process {
  background-color: #fff !important;
  color: $theme !important;
}

#dropdownMenuLink {
  color: $theme !important;
}

.dropdown-menu {
  color: $theme !important;
  padding: 6px;
}

.dropdown-item {
  color: $theme !important;
  padding: 2px;
}

#vs2__combobox {
  height: 36px;
  /* padding-left: 45px; */
  width: 176px;
  background-color: lightgray;
}

.vue-slider-process {
  background-color: black !important;
}

.paintTool {
  margin-top: -18px;
}

.comment_color {
  border-top: 1px solid black;
}

.color-green {
  color: $theme !important
}

.color-white {
  background: #fff;
}

@media (prefers-color-scheme: dark) {

  .dynamic-theme-color {
    background: #111314;
  }

  .color-green {
    background: #111314;
  }

  .dropdown-item {
    background: #111314;
  }
  .card card-white post {
    background: #3d4a3e;
  }

  .comment_color {
    border-top: 1px solid #3d4a3e;
  }
  .color-white {
    background: #3d4a3e !important;
  }
  .p-video-player__control-panel {
    background: #3d4a3e;
  }
  .post {
    background: #3d4a3e;
    //background: rgba($dark_mode_foreground, 0.2);
  }
  .vs__dropdown-toggle{
    color: lightgray !important;
  }
}

@media screen and (max-width: 1100px) {
  #videoElement {
    max-width: 600px;
  }
}

@media screen and (max-width: 992px) {
  #videoElement {
    max-width: 600px;
  }
}

@media screen and (max-width: 798px) and (max-width: 900px) {
  #videoElement {
    max-width: 500px;
  }
}

@media screen and (max-width: 700px) {
  #videoElement {
    max-width: 450px;
  }
}

@media screen and (max-width: 1100px) and (max-width: 900px) {
  .paintable {
    max-width: 800px !important;
  }
}

@media screen and (max-width: 700px) {
  .paintable {
    max-width: 600px !important;
  }
}

.version-video {
  width: 100%;
}

.v-select.drop-up.vs--open .vs__dropdown-toggle {
  border-radius: 0 0 4px 4px;
  border-top-color: transparent;
  border-bottom-color: rgba(60, 60, 60, 0.26);
}

[data-popper-placement='top'] {
  border-radius: 4px 4px 0 0;
  border-top-style: solid;
  border-bottom-style: none;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.15)
}
</style>
