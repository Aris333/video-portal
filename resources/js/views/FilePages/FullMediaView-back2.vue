<template oncontextmenu="return false;">
  <div>
    <!-- File Preview -->
    <FileFullPreview />

    <!--Loading Spinenr-->
    <Spinner v-if="isLoading" />

    <!--Move item setup-->
    <MoveItem />

    <!--Mobile Menu-->
    <MobileMenu />

    <!--System alerts-->
    <Alert />

    <!--Background vignette-->
    <Vignette />

    <!--  <FilePreviewNavigationPanel/>-->
    <!--<FileReviewNavigationPanel   @changeTitle="$event" />-->
    <FileReviewNavigationPanel v-show="isLoading === false" />

    <div class="col-12">
      <!--Loading Spinenr-->

      <!--  <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>-->

      <div class="media-full-preview" v-show="isLoading === false">
        <div class="row" id="testing">
          <div class="col-sm-9 l-page">
            <div class="file-wrapper-preview" v-show="isLoading === false">
              <div class="file-wrapper">
                <audio
                  class="file audio"
                  :class="{ 'file-shadow': !isMobileDevice }"
                  v-if="myFileInfo && myFileInfo.type == 'audio'"
                  :src="currentFile.file_url"
                  controlsList="nodownload"
                  controls
                ></audio>
                <!--                <img v-if="myFileInfo && myFileInfo.type === 'image' && currentFile.thumbnail" class="file" :class="{ 'file-shadow': !isMobileDevice }" id="image" :src="currentFile ? currentFile.file_url : '601bab8e4217c.jpeg'" />-->

                <!--                <div class="video-wrapper">-->
                <!--                </div>-->
                <!--<h1>{{isProcessingFile}}</h1> v-show="isLoading == false"    -->

                <!-- Pic Paintable  -->
                <div
                 class="l-page"
                  v-if="
                    myFileInfo &&
                    myFileInfo.type === 'image' &&
                    currentFile.file_url
                  "
                >
                  <div
                    class="p-video-player"
                  >
<!--                    :width="auto"-->
<!--                    :height="auto"-->
                    <div class="custom-navigation"></div>
                    <paintable
                      alwaysOnTop
                      :active="isActive"
                      :disableNavigation="disableNavigation"
                      :hide="hidePaintable"
                      :horizontalNavigation="true"
                      :navigation="navigation"
                      :name="
                        isFirstPaintable ? 'my-screen' : 'my-second-screen'
                      "
                      :factor="1"
                      :lineWidth="dynamicLineWidth"
                      :lineWidthEraser="20"
                      :useEraser="useEraser"
                      :color="color"
                      ref="paintable"
                      class="paint col-12"

                      @toggle-paintable="toggledPaintable"
                    >
                      <div class="image-for-pic" style="width: 100%">
                        <img
                          id="paintImage"
                          style="position: absolute; display: none"
                          alt="Annotation Image"
                          :src="testImg"
                        />
                        <img
                          v-if="
                            myFileInfo &&
                            myFileInfo.type === 'image' &&
                            currentFile.thumbnail
                          "
                          class="file"
                          :class="{ 'file-shadow': !isMobileDevice }"
                          id="image"
                          :src="
                            currentFile
                              ? currentFile.file_url
                              : '601bab8e4217c.jpeg'
                          "
                        />
                      </div>
                    </paintable>
                  </div>
                    <div>
                      <div class="row">
                        <div
                          :class="
                            myFileInfo.type === 'image' ? 'col-8' : 'col-9'
                          "

                        >
                          <div
                            class="card card-white post"
                            style="border-radius: 11px"
                          >
                            <div class="post-heading" style="margin-top: 10px">
                              <div class="float-left image">
                                <img
                                  :src="
                                    user.data.attributes.avatar
                                      ? user.data.attributes.avatar
                                      : 'http://bootdey.com/img/Content/user_1.jpg'
                                  "
                                  class="img-circle avatar"
                                  style="
                                    border-radius: 20px;
                                    height: 40px !important;
                                  "
                                  alt="User mage"
                                />
                              </div>
                              <div class="float-left meta">
                                <div class="title h5">
                                  <input
                                    type="text"
                                    class=""
                                    style="
                                      width: 100%;
                                      margin-top: 10px;
                                      color: #00bc7e !important;
                                      border: none;
                                      background: transparent;
                                      margin-left: 10px;
                                      margin-top: 3px;
                                    "
                                    placeholder="Comment"
                                    aria-label="userComment"
                                    aria-describedby="basic-addon1"
                                    v-model="comment"
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="container">
                              <div class="first">
                                <transition-group name="slide-fade">
                                  <button
                                    v-if="showbtns"
                                    class="dropbtn"
                                    key="1"
                                    id="time_btn"
                                    style="
                                      margin-bottom: 2px;
                                      color: black;
                                      borders-radius: 11px;
                                      width: 98px;
                                    "
                                  >
                                    <i
                                      class="fas fa-clock"
                                      style="color: #00bc7e !important"
                                    ></i
                                    ><span style="color: #00bc7e !important">
                                      00:00
                                    </span>
                                    <input
                                      type="checkbox"
                                      v-model="selectedTime"
                                      class=""
                                    />
                                  </button>

                                  <div
                                    key="2"
                                    v-if="showbtns"
                                    class="pr-fio2 float-left"
                                  >
                                    <div
                                      class="relative"
                                      style="transform: scale(1, 1)"
                                    >
                                      <div class="float-right">
                                        <v-select
                                          :options="['Every One', 'Team Group']"
                                          style="margin: 6px"
                                          v-model="permission"
                                          append-to-body
                                          :calculate-position="withPopper"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </transition-group>
                                <button
                                  class="dropbtn float-right"
                                  id=""
                                  style="
                                    color: black;
                                    border-radius: 23px;
                                    width: 78px;
                                    color: #00bc7e !important;
                                  "
                                  :disabled="comment == ''"
                                  @click="submitComment"
                                >
                                  Send
                                </button>
                                <button
                                  class="dropbtn float-right"
                                  style="width: 36px; border-radius: 23px"
                                  @click="
                                    isPaintActive = !isPaintActive;
                                    showbtns = !showbtns;
                                    clearPaintable();
                                  "
                                >
                                  <i
                                    class="fas fa-palette"
                                    style="color: #00bc7e !important"
                                  ></i>
                                </button>
                                <div
                                  class="d-inline float-right paintTool"
                                  v-if="isPaintActive"
                                >
                                  {{ dynamicLineWidth }}px<br />
                                  <input
                                    type="range"
                                    @input="
                                      dynamicLineWidth = +$event.target.value
                                    "
                                    min="1"
                                    max="100"
                                  />
                                  <input type="color" v-model="color" />
                                  <button
                                    class="draw-options"
                                    @click="$refs.paintable.undoDrawingStep"
                                  >
                                    <i
                                      style="color: #00bc7e !important"
                                      class="fas fa-undo"
                                    ></i>
                                  </button>
                                  <!--											<button class="draw-options"  @click="$refs.paintable.redoDrawingStep"><i style=" color:#00BC7E !important;" class="fas fa-redo"></i></button>-->
                                  <!--											<button class="draw-options"  @click="drawRect"><i style=" color:#00BC7E !important;" class="fa-rectangle-landscape"></i></button>-->
                                  <!--											<button class="draw-options"  @click="drawRect"><i style=" color:#00BC7E !important;" class="fa-rectangle-landscape"></i></button>-->
                                  <!--	ellipse									-->
                                  <!--                            <button class="draw-options"  @click="drawCircle"><i style=" color:#00BC7E !important;" class="fa fa-circle"></i></button>-->
                                  <!--                        &lt;!&ndash;				arrow							&ndash;&gt;-->
                                  <!--                      <button class="draw-options"  @click="drawArrow"><i style=" color:#00BC7E !important;" class="fal fa-arrow-alt-up"></i></button>-->
                                  <!-- End of the Function custom                     -->
                                  <!--											<button class="draw-options"  @click="$refs.paintable.drawCircle"><i style=" color:#00BC7E !important;" class="far fa-circle"></i></button>-->
                                  <button
                                    class="draw-options"
                                    @click="
                                      $refs.paintable.clearCanvas();
                                      $refs.paintable.saveCurrentCanvasState();
                                    "
                                  >
                                    <i
                                      style="color: #00bc7e !important"
                                      class="fas fa-backspace"
                                    ></i>
                                  </button>
                                  <!--											<button @click="$refs.paintable.saveCurrentCanvasToStorage">-->
                                  <!--											save-->
                                  <!--											</button>-->
                                  <!--											<button class="draw-options" @click="$refs.paintable.cancelDrawing"><i style="  color:#00BC7E !important;" class="fas fa-times"></i></button>-->
                                  <button
                                    class="draw-options"
                                    @click="useEraser = !useEraser"
                                  >
                                    <i
                                      v-show="useEraser"
                                      style="color: #00bc7e !important"
                                      class="fas fa-eraser"
                                    ></i>
                                    <i
                                      v-show="!useEraser"
                                      style="color: #00bc7e !important"
                                      class="fas fa-pencil-alt"
                                    ></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

                <!--   End of the Pic paintable         -->

                <div
                  v-if="
                    myFileInfo &&
                    myFileInfo.type === 'video' &&
                    currentFile.file_url
                  "
                >
                  <div class="p-video-player" >
                    <div class="custom-navigation"></div>
                    <!--                <Editor ref="editor"></Editor>-->
                    <paintable
                      name="paintableVideo"
                      :active="isActive"
                      :disableNavigation="disableNavigation"
                      :hide="hidePaintable"
                      :horizontalNavigation="false"
                      :navigation="navigation"
                      :factor="1"
                      :lineWidth="dynamicLineWidth"
                      :lineWidthEraser="20"
                      :useEraser="useEraser"
                      :color="color"
                      class="paint"
                      ref="paintable"
                    >
                      <img
                        id="paintImage"
                        style="position: absolute; display: none"
                        alt="Annotation Image"
                        :src="testImg"
                      />
                      <FrameVideo
                        id="videoElement"
                        :src="currentFile.file_url"
                        :initialTime="initialTime"
                        :autoplay="autoplay"
                        @play="onPlay"
                        @pause="onPause"
                        @ended="onEnded"
                        @waiting="onWaiting"
                        @progress="onProgress"
                        @error="onError"
                        @timeupdate="onTimeupdate"
                        @frameupdate="onFrameupdate"
                      />
                    </paintable>
                    <div class="rect"></div>
                    <div class="arrow"></div>
                    <div class="ellipse"></div>
                    <div
                      class="p-video-player__seekbar-wrap"
                      style="width: 100%"
                      id="video-player-media"
                      @mousedown="grabSeekbar"
                      @touchstart="grabSeekbar"
                      @touchmove="moveSeekbar"
                      @touchend="releaseSeekbar"
                    >
                      <div
                        v-if="getProgressRate <= 1"
                        class="p-video-player__seekbar-current"
                        :style="{
                          transform: 'scaleX(' + getProgressRate + ')',
                        }"
                      ></div>
                      <div
                        v-else
                        class="p-video-player__seekbar-current"
                        :style="{ transform: 'scaleX(' + 1 + ')' }"
                      ></div>
                      <div class="p-video-player__seekbar-back"></div>
                    </div>

                    <div
                      class="p-video-player__seekbar-wrap-progress"
                      style="width: 100%"
                      id="video-player-media"
                    >
                      <div class="progress" style="height: 25px">
                        <div
                          class="progress-bar color-white"
                          role="progressbar"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style="width: 100%"
                        ></div>
                        <v-popover
                          v-for="(data, index) in allComments"
                          :key="index"
                          class="dot mt-1 text-white"
                          :style="
                            'left:' +
                            (parseFloat(data.text_edited_at) / duration) * 100 +
                            '%;'
                          "
                          trigger="hover"
                          @click.native="
                            seekbarCommentClick(data);
                            drawImage(data);
                          "
                          placement="top"
                        >
                          <!-- This will be the popover target (for the events and position) -->
                          <!-- <button class="">Click me</button> -->
                          <span
                            ><small class="text-white">{{
                              data.user_name ? data.user_name.slice(0, 1) : ""
                            }}</small></span
                          >
                          <!-- This will be the content of the popover -->
                          <div slot="popover" class="text-left" v-if="data">
                            <div>
                              <div
                                class="d-inline ml-2 float-left text-left"
                                style="color: #00bc7e"
                              >
                                {{ data.user_name }}
                              </div>
                            </div>
                            <br />
                            <div class="pt-2">
                              <div class="d-inline">
                                <span
                                  class="pt-5"
                                  v-if="
                                    myFileInfo && myFileInfo.type === 'video'
                                  "
                                  style="color: #00bc7e"
                                  >{{
                                    data.video_time
                                      ? data.video_time.slice(0, 8)
                                      : ""
                                  }}</span
                                >
                              </div>
                              <div class="d-inline ml-2">
                                <span
                                  class="text-muted"
                                  style="color: #00bc7e !important"
                                  >{{ data.comment }}</span
                                >
                              </div>
                            </div>
                          </div>
                        </v-popover>
                      </div>
                    </div>

                    <!-- class="p-video-player__control-panel" -->
                    <hr
                      style="
                        height: 1px;
                        margin-top: 0px;
                        margin-bottom: 0px;
                        width: 100%;
                      "
                    />
                    <div class="p-video-player__control-panel p-2">
                      <div class="row">
                        <div class="col-12">
                          <div class="d-inline float-left">
                            <a v-if="isPlaying" @click.prevent="playOrPause">
                              <i
                                class="fa fa-pause"
                                style="color: #00bc7e !important"
                              ></i>
                            </a>
                            <a v-else @click="playOrPause">
                              <i
                                class="fa fa-play"
                                style="color: #00bc7e !important"
                              ></i>
                            </a>
                          </div>

                          <a
                            class="ml-5 float-left"
                            @click="playLoop()"
                            title="Loop"
                          >
                            <i
                              class="fa fa-repeat"
                              aria-hidden="true"
                              style="color: #00bc7e !important"
                              :class="{
                                iconColor: looping == true,
                                iconColorWhite: looping == false,
                              }"
                            ></i>
                            <!-- {{ looping ? 'Loop' : 'Single' }} -->
                          </a>

                          <div
                            class="dropdown show ml-3 float-left"
                            style="
                              display: inline-block;
                              color: #00bc7e !important;
                            "
                          >
                            <a
                              class="dropdown-toggle"
                              href="#"
                              style="color: #00bc7e !important"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {{ playback_speed }}x
                            </a>
                            <div
                              class="dropdown-menu"
                              style="color: #00bc7e !important"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <a
                                class="dropdown-item"
                                href="#"
                                @click="placbackSpeed(0.25)"
                                >0.25</a
                              >
                              <a
                                class="dropdown-item"
                                href="#"
                                @click="placbackSpeed(0.5)"
                                >0.5</a
                              >
                              <a
                                class="dropdown-item"
                                href="#"
                                @click="placbackSpeed(0.75)"
                                >0.75</a
                              >
                              <a
                                class="dropdown-item"
                                href="#"
                                @click="placbackSpeed(1)"
                                >Normal</a
                              >
                              <a
                                class="dropdown-item"
                                href="#"
                                @click="placbackSpeed(1.25)"
                                >1.25</a
                              >
                              <a
                                class="dropdown-item"
                                href="#"
                                @click="placbackSpeed(1.5)"
                                >1.5</a
                              >
                              <a
                                class="dropdown-item"
                                href="#"
                                @click="placbackSpeed(1.75)"
                                >1.75</a
                              >
                            </div>
                          </div>

                          <div class="float-left mr-1">
                            <a class="ml-4" @click="muteVolume()">
                              <a v-if="volumeMute">
                                <i
                                  class="fas fa-volume-slash"
                                  style="color: #00bc7e"
                                ></i>
                              </a>
                              <a v-else>
                                <i
                                  class="fa fa-volume-up"
                                  style="color: #00bc7e"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </a>
                          </div>

                          <vue-slider
                            class="float-left mr-1"
                            v-on:change="SetVolume()"
                            width="10%"
                            v-model="val"
                            :tooltip="'active'"
                          />

                          <div
                            v-if="timeFormat == 'Standard'"
                            style="color: #00bc7e !important"
                            class="p-video-player__time-wrap ml-5 d-inline"
                          >
                            <span class="p-video-player__time-current"
                              >{{ getCurrentTime }} </span
                            >/
                            <span class="p-video-player__time-all">{{
                              getDuration
                            }}</span>
                          </div>

                          <div
                            v-if="timeFormat == 'Timecode'"
                            style="color: #00bc7e !important"
                            class="p-video-player__time-wrap ml-5 d-inline"
                          >
                            <span class="p-video-player__time-current"
                              >{{ getCurrentMilisecond }}
                            </span>
                          </div>

                          <div
                            v-if="timeFormat == 'Frames'"
                            style="color: #00bc7e !important"
                            class="p-video-player__time-wrap ml-5 d-inline"
                          >
                            <span class="p-video-player__time-current">
                              {{ getFrames }} </span
                            >/
                            <span
                              style="color: #00bc7e !important"
                              class="p-video-player__time-all"
                              >{{ getTotalFrame }}</span
                            >
                          </div>

                          <div
                            class="dropdown show ml-3"
                            style="display: inline-block"
                          >
                            <a
                              class="dropdown-toggle"
                              href="#"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                            </a>
                            <div
                              class="dropdown-menu"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <a
                                class="dropdown-item disabled"
                                href="#"
                                @click="playQualitySet(1080)"
                                ><strong class="color-green"
                                  >Time Format</strong
                                ></a
                              >
                              <a
                                class="dropdown-item"
                                href="#"
                                @click="setTimeFormat('Standard')"
                                ><strong class="color-green"
                                  >Standard</strong
                                ></a
                              >
                              <a
                                class="dropdown-item"
                                href="#"
                                @click="setTimeFormat('Timecode')"
                                ><strong class="color-green"
                                  >Timecode</strong
                                ></a
                              >
                              <a
                                class="dropdown-item"
                                href="#"
                                @click="setTimeFormat('Frames')"
                                ><strong class="color-green">Frames</strong></a
                              >
                            </div>
                          </div>

                          <div class="float-right">
                            <a
                              class="mr-2"
                              @click="fullScreen()"
                              title="Full Screen"
                            >
                              <i
                                class="fa fa-expand"
                                style="color: #00bc7e !important"
                              ></i>
                            </a>
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
                  <div class="container">
                    <div class="row">
                      <div class="col-12">
                        <div
                          class="card card-white post"
                          style="border-radius: 11px"
                        >
                          <div class="post-heading" style="margin-top: 10px">
                            <div class="float-left image">
                              <img
                                :src="
                                  user.data.attributes.avatar
                                    ? user.data.attributes.avatar
                                    : 'http://bootdey.com/img/Content/user_1.jpg'
                                "
                                class="img-circle avatar"
                                style="
                                  border-radius: 20px;
                                  height: 40px !important;
                                "
                                alt="user profile image"
                              />
                            </div>
                            <div class="float-left meta">
                              <div class="title h5">
                                <input
                                  type="text"
                                  class=""
                                  style="
                                    width: 100%;
                                    margin-top: 10px;
                                    color: #00bc7e !important;
                                    border: none;
                                    background: transparent;
                                    margin-left: 10px;
                                    margin-top: 3px;
                                  "
                                  placeholder="Comment"
                                  aria-label="userComment"
                                  aria-describedby="basic-addon1"
                                  v-model="comment"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="container">
                            <div class="first">
                              <transition-group name="slide-fade">
                                <button
                                  v-if="showbtns"
                                  class="dropbtn"
                                  key="1"
                                  id="time_btn"
                                  style="
                                    margin-bottom: 2px;
                                    color: black;
                                    borders-radius: 11px;
                                    width: 98px;
                                  "
                                >
                                  <i
                                    class="fas fa-clock"
                                    style="color: #00bc7e !important"
                                  ></i
                                  ><span style="color: #00bc7e !important" v-if="selectedTime" >
                                    {{ getCurrentTime }}
                                  </span>
                                  <span v-else style="color: #00bc7e !important">
                                    00:00
                                  </span>

                                  <input
                                    type="checkbox"
                                    v-model="selectedTime"
                                    class=""
                                  />
                                </button>

                                <div
                                  key="2"
                                  v-if="showbtns"
                                  class="pr-fio2 float-left"
                                >
                                  <div
                                    class="relative"
                                    style="transform: scale(1, 1)"
                                  >
                                    <div class="float-right">
                                      <v-select
                                        :options="['Every One', 'Team Group']"
                                        style="margin: 6px"
                                        v-model="permission"
                                        append-to-body
                                        :calculate-position="withPopper"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </transition-group>
                              <button
                                class="dropbtn float-right"
                                style="
                                  color: black;
                                  border-radius: 23px;
                                  width: 78px;
                                  color: #00bc7e !important;
                                "
                                :disabled="comment == ''"
                                @click="submitComment"
                              >
                                Send
                              </button>
                              <button
                                class="dropbtn float-right"
                                style="width: 36px; border-radius: 23px"
                                @click="
                                  isPaintActive = !isPaintActive;
                                  showbtns = !showbtns;
                                  clearPaintable();
                                "
                              >
                                <i
                                  class="fas fa-palette"
                                  style="color: #00bc7e !important"
                                ></i>
                              </button>
                              <div
                                class="d-inline float-right paintTool"
                                v-if="isPaintActive"
                              >
                                {{ dynamicLineWidth }}px<br />
                                <input
                                  type="range"
                                  @input="
                                    dynamicLineWidth = +$event.target.value
                                  "
                                  min="1"
                                  max="100"
                                />
                                <input type="color" v-model="color" />
                                <button
                                  class="draw-options"
                                  @click="$refs.paintable.undoDrawingStep"
                                >
                                  <i
                                    style="color: #00bc7e !important"
                                    class="fas fa-undo"
                                  ></i>
                                </button>
                                <!--											<button class="draw-options"  @click="$refs.paintable.redoDrawingStep"><i style=" color:#00BC7E !important;" class="fas fa-redo"></i></button>-->
                                <!--											<button class="draw-options"  @click="drawRect"><i style=" color:#00BC7E !important;" class="fa-rectangle-landscape"></i></button>-->
                                <!--											<button class="draw-options"  @click="drawRect"><i style=" color:#00BC7E !important;" class="fa-rectangle-landscape"></i></button>-->
                                <!--	ellipse									-->
                                <!--                            <button class="draw-options"  @click="drawCircle"><i style=" color:#00BC7E !important;" class="fa fa-circle"></i></button>-->
                                <!--                        &lt;!&ndash;				arrow							&ndash;&gt;-->
                                <!--                      <button class="draw-options"  @click="drawArrow"><i style=" color:#00BC7E !important;" class="fal fa-arrow-alt-up"></i></button>-->
                                <!-- End of the Function custom                     -->
                                <!--											<button class="draw-options"  @click="$refs.paintable.drawCircle"><i style=" color:#00BC7E !important;" class="far fa-circle"></i></button>-->
                                <button
                                  class="draw-options"
                                  @click="
                                    $refs.paintable.clearCanvas();
                                    $refs.paintable.saveCurrentCanvasState();
                                  "
                                >
                                  <i
                                    style="color: #00bc7e !important"
                                    class="fas fa-backspace"
                                  ></i>
                                </button>
                                <!--											<button @click="$refs.paintable.saveCurrentCanvasToStorage">-->
                                <!--											save-->
                                <!--											</button>-->
                                <!--											<button class="draw-options" @click="$refs.paintable.cancelDrawing"><i style="  color:#00BC7E !important;" class="fas fa-times"></i></button>-->
                                <button
                                  class="draw-options"
                                  @click="useEraser = !useEraser"
                                >
                                  <i
                                    v-show="useEraser"
                                    style="color: #00bc7e !important"
                                    class="fas fa-eraser"
                                  ></i>
                                  <i
                                    v-show="!useEraser"
                                    style="color: #00bc7e !important"
                                    class="fas fa-pencil-alt"
                                  ></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-sm-3 pl-2 dynamic-theme-color"
            v-show="isLoading === false"
          >
            <div class="mt-3">
              <div v-if="currentFile && currentFile.description" class="p-2">
                <p>{{ this.currentFile.description }}</p>
                <i
                  class="fal fa-pen text-muted float-right"
                  style="color: #00bc7e !important"
                  @click="isDescription = !isDescription"
                  aria-hidden="true"
                ></i>
              </div>
              <a
                class="text-white pt-2"
                @click="isDescription = false"
                v-if="isDescription == true"
              >
                <i
                  class="fa fa-plus-square text-white text-decoration-none"
                  aria-hidden="true"
                ></i>
                <span class="pl-2 white">Add Description</span>
              </a>
              <div v-if="isDescription == false">
                <div class="p-2">
                  <textarea
                    class="p-1"
                    rows="5"
                    v-model="description"
                    style="width: 100%; border-radius: 3px"
                    >{{
                      this.currentFile.description
                        ? this.currentFile.description
                        : this.description
                    }}</textarea
                  >
                </div>
                <div class="float-right">
                  <a class="text-muted mr-2" @click="isDescription = true"
                    >Cancel</a
                  >
                  <a
                    class="text-muted mr-2"
                    @click="
                      saveVideoDescription();
                      isDescription = true;
                    "
                    >Save</a
                  >
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-sm-12">
                <nav class="tabs">
                  <button
                    class="tabs__item"
                    v-bind:class="{ tabs__item_active: currentTab }"
                    @click="handleClick(true)"
                  >
                    {{
                      allComments == undefined ? 0 : this.allComments.length
                    }}
                    Comments
                  </button>
                  <!-- active tab -->
                  <button
                    class="tabs__item"
                    v-bind:class="{ tabs__item_active: !currentTab }"
                    @click="handleClick(false)"
                  >
                    File Information
                  </button>
                </nav>
              </div>
            </div>
            <div class="row" v-if="currentTab">
              <div class="col-sm-12">
                <div>
                  <div class="dropdown show ml-1" style="display: inline-block">
                    <a
                      class="dropdown-toggle btn-sm text-white"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {{
                        commentSortBy.replace(
                          /^./,
                          commentSortBy[0].toUpperCase()
                        )
                      }}
                    </a>
                    <div
                      class="dropdown-menu text-white"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <a class="dropdown-item disabled" href="#">Sort By</a>
                      <a
                        class="dropdown-item"
                        href="#"
                        @click="sortComments('oldest')"
                        >Oldest</a
                      >
                      <a
                        class="dropdown-item"
                        href="#"
                        @click="sortComments('newest')"
                        >Newest</a
                      >
                      <a
                        class="dropdown-item"
                        href="#"
                        @click="sortComments('timecode')"
                        >Timecode</a
                      >
                      <a
                        class="dropdown-item"
                        href="#"
                        @click="sortComments('commenter')"
                        >Commenter</a
                      >
                    </div>
                  </div>

                  <div class="float-right">
                    <small>
                      <a class="text-white m-2" href="#"
                        >Show<i
                          class="fa fa-check-circle text-muted m-2"
                          style="color: #00bc7e !important"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </small>
                  </div>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="inner-addon left-addon">
                  <i
                    class="fa fa-search"
                    aria-hidden="true"
                    style="color: #00bc7e !important"
                  ></i>
                  <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search Comment"
                    class="form-control"
                    style="border-radius: 24px; height: 32px"
                  />
                </div>
              </div>
              <!-- class="overflow-auto" -->

              <div class="col-sm-12" style="height: 500px">
                <Spinner
                  v-if="commentLoading == true"
                  style="margin-top: 15px"
                ></Spinner>
                <vuescroll>
                  <div
                    v-show="commentLoading == false"
                    id="1"
                    class="col-sm-12 mt-2 p-3 comment_color"
                    v-for="(data, index) in resultQuery"
                    :key="index"
                    @mouseover="showByIndex = index"
                    @mouseout="showByIndex = null"
                  >
                    <div>
                      <img
                        style="width: 20px; height: 20px"
                        :src="
                          user.data.attributes.avatar
                            ? user.data.attributes.avatar
                            : 'http://bootdey.com/img/Content/user_1.jpg'
                        "
                      />
                      <div class="d-inline ml-2" style="color: #00bc7e">
                        {{ data.user_name
                        }}<span>
                          <!--													<time-ago :refresh="60" :datetime="data.created_at" locale="en" tooltip style="color:white;    background-color: #fff; margin-left:10px;"></time-ago>-->
                        </span>
                      </div>
                      <div class="float-right" v-if="activeId == data.id">
                        <i class="fal fa-check-circle text-muted"></i>
                      </div>
                    </div>
                    <div class="pt-2">
                      <div class="d-inline">
                        <span
                          class="pt-5"
                          style="color: #00bc7e"
                          v-if="myFileInfo && myFileInfo.type === 'video'"
                          >{{ data.video_time.slice(0, 8) }}</span
                        >
                        <span
                          v-show="data.annotation != ''"
                          @click="
                            seekbarCommentClick(data);
                            drawImage(data);
                          "
                          ><i class="fas fa-paint-brush"></i
                        ></span>
                      </div>
                      <div class="d-inline ml-2">
                        <span class="text-muted white">{{ data.comment }}</span>
                      </div>
                    </div>
                    <div class="pt-2">
                      <div
                        class="d-inline"
                        @click="
                          showReplyByIndex = data.id;
                          reply = '';
                          parentId = data.id;
                        "
                      >
                        <span class="text-muted white">Reply</span>
                      </div>
                      <div class="text-white d-inline ml-2">
                        <span
                          class="text-muted"
                          @click.prevent="
                            likeComment(data);
                            showLikeByIndex.index = index;
                            data.visible = !data.visible;
                          "
                        >
                          <i
                            class="far fa-thumbs-up text-muted"
                            v-show="data.visible === !data.visible"
                          ></i>
                        </span>
                        <span
                          class="text-muted"
                          @click.prevent="
                            data.visible = !data.visible;
                            likeComment(data);
                          "
                        >
                          <i
                            class="fas fa-thumbs-up"
                            v-show="showLikeByIndex.index === index"
                          ></i>
                        </span>
                      </div>
                      <div class="text-white d-inline ml-2 readBy">
                        <!--									<small class="text-muted"  v-show="showByIndex === index" >Read By 0 people</small>-->
                      </div>
                      <div
                        class="text-white d-inline ml-2 float-right"
                        v-if="data.user_name === user.data.attributes.name"
                      >
                        <button class="btn-save mr-1">
                          <i
                            class="fal fa-pen text-muted"
                            style="color: #00bc7e !important"
                            data-toggle="collapse"
                            :href="'#multiCollapseExample_' + index"
                            role="button"
                            aria-expanded="false"
                            aria-controls="multiCollapseExample1"
                            @click.prevent="
                              editComments(data, index);
                              showEditByIndex = index;
                            "
                          ></i>
                        </button>
                        <!---delete btn -->
                        <button
                          class="btn-save"
                          @click.prevent="
                            updateComments(data, '', 'delete');
                            data.visible = !data.visible;
                          "
                        >
                          <i
                            class="fal fa-trash text-muted"
                            style="color: #00bc7e !important"
                          ></i>
                        </button>
                      </div>
                    </div>
                    <!--    comment-->
                    <div class="pt-2" v-show="showEditByIndex === index">
                      <div class="d-inline">
                        <input
                          type="text"
                          class="form-control"
                          v-model="edit_comment"
                        />
                      </div>
                      <button
                        class="btn-save white"
                        @click.prevent="
                          updateComments(data, '', 'update');
                          showEditByIndex = '';
                        "
                      >
                        Save
                      </button>
                      <button
                        class="btn-save white"
                        @click.prevent="showEditByIndex = ''"
                      >
                        Cancel
                      </button>
                    </div>
                    <!--              v-if="isReplying"-->
                    <div class="pt-2" v-show="showReplyByIndex === data.id">
                      <div class="d-inline">
                        <input
                          type="text"
                          class="form-control"
                          v-model="reply"
                        />
                      </div>
                      <button
                        class="btn-save white"
                        @click.prevent="
                          replyComment(data);
                          showReplyByIndex === '';
                        "
                      >
                        Send
                      </button>
                      <button
                        class="btn-save white"
                        @click.prevent="showReplyByIndex = ''"
                      >
                        Cancel
                      </button>
                    </div>

                    <!--  Child  Relpies -->
                    <div class="col-sm-10 ml-3" v-show="data.replies">
                      <div
                        id="2"
                        class="col-sm-12 mt-2 p-3 comment_color"
                        v-for="(childData, index) in data.replies"
                        :key="index"
                        @mouseover="showChildByIndex = index"
                        @mouseout="showChildByIndex = null"
                      >
                        <div>
                          <div class="image-circle d-inline text-capitalize">
                            {{
                              childData.user.name
                                ? childData.user.name.slice(0, 1)
                                : ""
                            }}
                          </div>
                          <!--                    <img v-show="childData.annotation ==''" :src="'../storage/app/images/annotation/'+childData.annotation">-->
                          <i
                            class="fa fa-paint-brush"
                            v-show="childData.annotation"
                            aria-hidden="true"
                          ></i>
                          <div class="d-inline ml-2" style="color: #00bc7e">
                            {{ childData.user.name
                            }}<span>
                              <!--													<time-ago :refresh="60" :datetime="childData.created_at" locale="en" tooltip style="color:white;    background-color: #fff; margin-left:10px;"></time-ago>-->
                            </span>
                          </div>
                          <div
                            class="float-right"
                            v-if="activeId == childData.id"
                          >
                            <i class="fal fa-check-circle text-muted"></i>
                          </div>
                        </div>
                        <div class="pt-2">
                          <div class="d-inline">
                            <span class="pt-5" style="color: #5b53ff">{{
                              childData.video_time.slice(0, 8)
                            }}</span>
                          </div>
                          <div class="d-inline ml-2">
                            <span class="text-muted white">{{
                              childData.comment
                            }}</span>
                          </div>
                        </div>
                        <div class="pt-2">
                          <div
                            class="d-inline"
                            @click="
                              showChildReplyByIndex = childData.id;
                              reply = '';
                            "
                          >
                            <span class="text-muted white">Reply</span>
                          </div>
                          <div class="text-white d-inline ml-2">
                            <span
                              class="text-muted"
                              @click.prevent="
                                likeComment(childData);
                                showLikeByIndex.index = index;
                                childData.visible = !childData.visible;
                              "
                            >
                              <i
                                class="far fa-thumbs-up text-muted"
                                v-show="
                                  childData.visible === !childData.visible
                                "
                              ></i>
                            </span>
                            <span
                              class="text-muted"
                              @click.prevent="
                                childData.visible = !childData.visible;
                                likeComment(childData);
                              "
                            >
                              <i
                                class="fas fa-thumbs-up"
                                v-show="
                                  showLikeByIndex.index === index &&
                                  childData.id
                                "
                              ></i>
                            </span>
                          </div>
                          <div class="text-white d-inline ml-2 readBy">
                            <!--                      <small class="text-muted"  v-show="showChildByIndex === index" >Read By 0 people</small>-->
                          </div>
                          <div
                            class="text-white d-inline ml-2 float-right"
                            v-if="
                              childData.user.name === user.data.attributes.name
                            "
                          >
                            <button class="btn-save mr-1">
                              <i
                                class="fal fa-pen text-muted"
                                style="color: #00bc7e !important"
                                data-toggle="collapse"
                                :href="'#multiCollapseExample_' + index"
                                role="button"
                                aria-expanded="false"
                                aria-controls="multiCollapseExample1"
                                @click.prevent="
                                  editComments(childData, index);
                                  showChildEditByIndex = childData.id;
                                "
                              ></i>
                            </button>
                            <!---delete btn -->
                            <button
                              class="btn-save"
                              @click.prevent="
                                updateComments(childData, '', 'delete');
                                childData.visible = !childData.visible;
                              "
                            >
                              <i
                                class="fal fa-trash text-muted"
                                style="color: #00bc7e !important"
                              ></i>
                            </button>
                          </div>
                        </div>
                        <!--    comment-->
                        <div
                          class="pt-2"
                          v-show="showChildEditByIndex === childData.id"
                        >
                          <div class="d-inline">
                            <input
                              type="text"
                              class="form-control"
                              v-model="edit_comment"
                            />
                          </div>
                          <button
                            class="btn-save white"
                            @click.prevent="
                              updateComments(childData, '', 'update');
                              showChildEditByIndex = '';
                            "
                          >
                            Save
                          </button>
                          <button
                            class="btn-save white"
                            @click.prevent="showChildEditByIndex = ''"
                          >
                            Cancel
                          </button>
                        </div>
                        <!--              v-if="isReplying"-->
                        <div
                          class="pt-2"
                          v-show="
                            showChildReplyByIndex === childData.id &&
                            childData.parent_id == data.id
                          "
                        >
                          <div class="d-inline">
                            <input
                              type="text"
                              class="form-control"
                              v-model="reply"
                            />
                          </div>
                          <!-- style="color: #6c757d!important;"                       -->
                          <button
                            class="btn-save white"
                            @click.prevent="
                              replyComment(childData);
                              showChildReplyByIndex === '';
                            "
                          >
                            Send
                          </button>
                          <button
                            class="btn-save white"
                            @click.prevent="showChildReplyByIndex = ''"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </vuescroll>
              </div>
            </div>
            <div class="row" v-else>
              <div class="col-sm-12">
                <table class="table table-sm" style="border: none">
                  <tr>
                    <td class="text-muted" style="color: #00bc7e !important">
                      File Name
                    </td>
                    <td class="text" style="color: #00bc7e !important">
                      {{ fileName }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted" style="color: #00bc7e !important">
                      Uploader
                    </td>
                    <td class="text" style="color: #00bc7e !important">
                      {{ this.user.data.attributes.name }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted" style="color: #00bc7e !important">
                      Upload Date
                    </td>
                    <td class="text" style="color: #00bc7e !important">
                      {{ this.currentFile.created_at }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted" style="color: #00bc7e !important">
                      Codec
                    </td>
                    <td class="text" style="color: #00bc7e !important">
                      {{ this.currentFile.mimetype }}
                    </td>
                  </tr>
                  <tr v-show="myFileInfo.type == 'video'">
                    <td class="text-muted" style="color: #00bc7e !important">
                      RES
                    </td>
                    <td class="text" style="color: #00bc7e !important">
                      1920 x 1080
                    </td>
                  </tr>
                  <tr v-show="myFileInfo.type == 'video'">
                    <td class="text-muted" style="color: #00bc7e !important">
                      FPS
                    </td>
                    <td class="text" style="color: #00bc7e !important">
                      {{ this.currentFile.fps }}
                    </td>
                  </tr>
                  <tr v-show="myFileInfo.type == 'video'">
                    <td class="text-muted" style="color: #00bc7e !important">
                      Audio
                    </td>
                    <td class="text" style="color: #00bc7e !important">ACC</td>
                  </tr>
                  <tr>
                    <td class="text-muted" style="color: #00bc7e !important">
                      Size
                    </td>
                    <td class="text" style="color: #00bc7e !important">
                      {{ this.currentFile.filesize }}
                    </td>
                  </tr>
                  <tr v-show="myFileInfo.type == 'video'">
                    <td class="text-muted" style="color: #00bc7e !important">
                      TC in
                    </td>
                    <td class="text" style="color: #00bc7e !important">
                      00:00:00:00
                    </td>
                  </tr>
                  <tr v-show="myFileInfo.type == 'video'">
                    <td class="text-muted" style="color: #00bc7e !important">
                      TC Out
                    </td>
                    <td class="text" style="color: #00bc7e !important">
                      00:00:53:20
                    </td>
                  </tr>
                  <tr v-show="myFileInfo.type == 'video'">
                    <td class="text-muted" style="color: #00bc7e !important">
                      Frames
                    </td>
                    <td class="text" style="color: #00bc7e !important">
                      {{ getTotalFrame }}
                    </td>
                  </tr>
                  <tr>
                    <td class="text-muted" style="color: #00bc7e !important">
                      Date
                    </td>
                    <td class="text" style="color: #00bc7e !important">1012</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div v-if="loading">Loading some data</div>
      </div>
      <div v-if="loading">Loading some data</div>
    </div>
  </div>
</template>
<script>
import { events } from "@/bus";
import { mapGetters } from "vuex";
import ToolbarButton from "@/components/FilesView/ToolbarButton";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import FrameVideo from "vue-frame-video";
import "video.js/dist/video-js.css";
import Tabs from "vue-tabs-with-active-line";
// import { TimeAgo } from 'vue2-timeago'
// import 'vue2-timeago/dist/vue2-timeago.css'
import VueContentLoading from "vue-content-loading";
var video;
import "vue-select/dist/vue-select.css";

import { createPopper } from "@popperjs/core";
import Editor from "@/components/paintTool/Editor";
import vuescroll from "vuescroll";

const debounce = (callback, duration) => {
  var timer;
  return function (event) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback(event);
    }, duration);
  };
};
//

import EmojiPicker from "vue-emoji-picker";
import Painting from "../../assets/painting";
import $ from "jquery";

import moment from "moment";
import axios from "axios";
import CropImage from "../../assets/js/crop";
import CanvasHistory from "../../assets/js/canvasHistory";
import FilePreviewNavigationPanel from "../../components/FilesView/FilePreviewNavigationPanel";
import {
  ValidationObserver,
  ValidationProvider,
} from "vee-validate/dist/vee-validate.full";
import { required } from "vee-validate/dist/rules";
import DesktopToolbar from "@/components/FilesView/DesktopToolbar";
import FileFullPreview from "@/components/FilesView/FileFullPreview";
import FileItemGrid from "@/components/FilesView/FileItemGrid";
import FileBrowser from "@/components/FilesView/FileBrowser";
import ContextMenu from "@/components/FilesView/ContextMenu";
import ButtonBase from "@/components/FilesView/ButtonBase";
import MobileMenu from "@/components/FilesView/MobileMenu";
import AuthContent from "@/components/Auth/AuthContent";
import AuthButton from "@/components/Auth/AuthButton";
import Spinner from "@/components/FilesView/Spinner";
import MoveItem from "@/components/Others/MoveItem";
import Vignette from "@/components/Others/Vignette";
import Alert from "@/components/FilesView/Alert";
import jQuery from "jquery";
import FileReviewNavigationPanel from "../../components/FilesView/FileReviewNavigationPanel";

export default {
  name: "FullMediaView",
  components: {
    FileReviewNavigationPanel,
    FilePreviewNavigationPanel,
    ToolbarButton,
    Editor,
    Spinner,
    VueSlider,
    Painting,
    FrameVideo,
    EmojiPicker,
    Tabs,
    // ,TimeAgo
    VueContentLoading,
    moment,
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
    Alert,
    vuescroll,
  },
  computed: {
    ...mapGetters([
      "myFileInfo",
      "annotation",
      "isProcessingFile",
      "config",
      "updateFps",
      "data",
      "user",
      "allComments",
      "isGetComment",
    ]),

    resultQuery() {
      // this.media = this.$el.querySelector('#videoElement');

      if (this.searchQuery) {
        return this.allComments.filter((data) =>
          data.comment.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        return this.allComments;
      }
    },
    fileName() {
      let file = this.currentFile.basename;
      var index = file.indexOf("-");
      var arr = [file.slice(0, index), file.slice(index + 1)];
      return arr[1];
    },
    navigation() {
      return {
        color: {
          body: "color",
        },
      };
    },
    getFrames() {
      let duration = this.smpte;
      var timecode = duration.split(":");
      var frames = duration.split(":")[3];
      var sec = duration.split(":")[2];
      var min = duration.split(":")[1];
      var hours = duration.split(":")[0];
      if (sec == "00") {
        return frames;
      } else if (min == "00" && sec != "00") {
        return 24 * parseInt(sec) + parseInt(frames);
      } else if (hours == "00" && min != "00" && sec != "00") {
        var totalSec = parseInt(min) * 60 + parseInt(sec);
        return 24 * totalSec + parseInt(frames);
      } else if (hours != "00" && min != "00" && sec != "00") {
        var totalMin = parseInt(hours) * 60 + parseInt(min);
        var totalSec = totalMin * 60;
        return totalSec + parseInt(frames);
      }
    },
    sliderAmountMap() {
      const sliderAmountValue = this.dynamicLineWidth;
      return sliderAmountValue; //to moja tablica
    },
    isLikedByMe() {
      return sliderAmountValue; //to moja tablica
    },
    emojiDataAll() {
      return EmojiAllData;
    },
    emojiGroups() {
      return EmojiGroups;
    },
    isMobileDevice() {
      return this.$isMobile();
    },
    currentFile: function () {
      //return this.sliderFile[Math.abs(this.currentIndex) % this.sliderFile.length]
      return this.myFileInfo;
    },
    isMedia() {
      return this.myFileInfo === "image" || "video" || "audio";
    },
    canShareInView() {
      return !this.$isThisLocation([
        "base",
        "participant_uploads",
        "latest",
        "shared",
        "public",
      ]);
    },
    getProgressRate: function () {
      return this.time / this.duration;
    },
    getCommentSpots(time) {
      return time / this.duration;
    },
    getCurrentTime: function () {
      return this.convertSecondsToTime(this.time);
    },
    getCurrentMilisecond: function () {
      return this.convertMiliSecondToTime(this.time);
    },
    getTotalFrame: function () {
      return parseInt(24) * Math.floor(this.duration);
    },
    getDuration: function () {
      this.currentVideoTime = this.convertSecondsToTime(this.duration);
      return this.convertSecondsToTime(this.duration);
    },
    isDisabledComment: function () {
      if (!this.comment == "") {
        return (this.commentEmpty = true);
      } else {
        return (this.commentEmpty = false);
      }
    },
  },
  data() {
    return {
      testImg: "",
      activeType: "",
      version_show: false,
      mousedown: false,
      showbtns: true,
      isLoading: true,
      commentLoading: true,
      moment: moment,
      canvasx: 0,
      canvasy: 0,
      height: 0,
      dynamicList: [],
      parentId: "",
      active: false,
      searchQuery: null,
      placement: "top",
      showByIndex: null,
      showReplyByIndex: null,
      showEditByIndex: null,
      showChildByIndex: null,
      showChildReplyByIndex: null,
      showChildEditByIndex: null,
      showLikeByIndex: {
        index: null,
        like: false,
      },
      likeCom: false,
      loading: false,
      activeClass: "is-visible",
      updateComment: false,
      color: "#000",
      reply: "",
      edit_comment: "",
      drawing: null,
      lineWidth: 0,
      currentVideoTime: 0,
      options1: [{ everyone: "everyone" }, { teamgourp: "teamgourp" }],
      permission: "Every One",
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
      val: 65, //volume
      volumeMute: false,
      playback_speed: 1,
      play_quality: "Auto",
      looping: false,
      timeFormat: "Standard",
      initialTime: 0,
      autoplay: false,
      smpte: "00:00:00:00",
      video: "",
      frameNo: 0,
      comment: "",
      commentEmpty: false,
      isFirstPaintable: true,
      hidePaintable: false,
      disableNavigation: true,
      dynamicLineWidth: 5,
      isActive: false,
      isActiveDisable: false,
      isPaintActive: false,
      isVideoLoading: false,
      useEraser: false,
      vctime: "", //video current time
      canvasId: "",
      search: "",
      selectedTime: "00:00",
      tabs: [
        { title: "Tab 1", value: "tab1" },
        { title: "Tab 2", value: "tab2" },
      ],
      currentTab: true,
      commentSortBy: "newest",
      description: "",
      isDescription: true,
      activeId: 0,
      isEditingComment: false,
      isReplying: false,
      optionsTime: ["foo", "bar", "baz"],
      canvas: null,
      ctx: null,
      dashPlayer: "",
      bitrates: [],
      createCircle: false,
      createRect: false,
      createArrow: false,
      createText: false,
      circle: null,
      currentActiveMethod: null,
      currentActiveTool: null,
      // loaded: false
    };
  },
  watch: {
    sliderFile() {
      //Close file preview after delete all items
      if (this.sliderFile.length == 0) {
        events.$emit("fileFullPreview:hide");
      }
    },
    isActive() {
      if (this.isActive == false) {
        // console.log('paintable::',  this.$refs.paintable);
        this.$refs.paintable.ctx.clearRect(
          0,
          0,
          this.canvas.width,
          this.canvas.height
        );
        // this.$refs.paintable.clearCanvas('')
      } else {
        this.$refs.paintable.clearCanvas("");
      }
    },
    isPaintActive() {
      if (this.isPaintActive == true) {
        this.pause();
        this.isActive = true;
      }else{
        this.play();
      }
    },
    isGetComment(newValue, oldValue) {
      if (newValue == true) {
        this.getComments();
      }
    },
    currentFile() {
      //Handle actual view image in myFileInfo
      if (this.myFileInfo) {
        this.$store.commit("GET_FILEINFO_DETAIL", this.currentFile);
        events.$emit("actualShowingImage:ContextMenu", this.currentFile);
        // this.loaded = false
      }
    },
    myFileInfo() {
      //File delete handling - show next image after delete one
      if (!this.myFileInfo) {
        this.currentIndex = this.currentIndex - 1;
        this.$store.commit("GET_FILEINFO_DETAIL", this.currentFile);
        this.sliderFile = [];
        this.filteredFiles();
      }
    },

    data(newValue, oldValue) {
      //Move item handling
      if (newValue != oldValue) {
        this.sliderFile = [];
        this.filteredFiles();
      }
    },
  },
  async beforeCreate() {
    let auth = localStorage.getItem("auth_check");
    if (auth === "false" || auth === null || auth === undefined) {
      this.$router.push({ name: "SignIn" });
    } else {
      let vm = this;
      // let route = process.env.MIX_API_BASE_URL +`/api/files/${this.$route.params.id }`
      // let tokenParams = this.$route.params.token
      let tokenParams = atob(this.$route.params.id);
      // const decryptedText = this.CryptoJS.AES.decrypt(tokenParams, "Secret Passphrase").toString(this.CryptoJS.enc.Utf8)
      // console.log('token',this.decryptedText)
      //  console.log('token',decryptedText.token)
      await axios
        .get(`/api/files/${tokenParams}`)
        .then((response) => {
          // End loading
          //   this.isLoading = false
          this.$store.commit("LOAD_MY_FILE", response.data.data);
        })
        .catch((error) => {
          // End loading
          console.warn(error);
        });
      this.getComments();
    }
  },

  created() {
    //    this.filteredFiles();
    //   const decryptedText = this.CryptoJS.AES.decrypt(encryptedText, "Secret Passphrase").toString(this.CryptoJS.enc.Utf8)
    this.setVideoSize();
    setTimeout(
      function () {
        this.isLoading = false;
      }.bind(this),
      3000
    );
    if (this.$refs.paintable) this.$refs.paintable.clearCanvas("");
  },
  beforeDestroy() {
    // $("#application-wrapper").css("display", "flex");
    this.$refs.paintable.canvasIsEmpty = true;
    clearInterval(this.$store.state.allComments);

  },
  updated() {
    // $('.paintable').css( 'width','800px')
    // let  canvas_width = document.getElementById("image").clientWidth;
    // console.log(canvas_width);
    // console.log('width',canvas_width)
    // $('.canvas').css('width', '1462px')
    // $('.canvas').css('height', '690px')
    // $("#application-wrapper").css("display", "inline");
     let  height=$('.l-page').height();
     let  width=$('.l-page').width();
    //  console.log('height',height)
    //  console.log('height',height -200)
    // $('#p-video-player').css('height',   height-200 +'px')
    // $("#p-video-player").css("width", "100%");
    $("#videoElement").css("width", "100%");
    // $("#videoElement").css('height',   height+'px');
    $("#videoElement").css('height',   '100%');
    $(".progress").css("width", width +"px");
    // $('#videoElement').css('height','100%')
    $("#vs1__combobox").css("background-color", "lightgray");
    $("#vs2__combobox").css("width", "176px");
    $("#vs2__combobox").css("color", "#0077a2 !important");
    $(".vs__dropdown-toggle").css("color", "black !important");
    $("#vs2__combobox").css("height", "36px");
    $(".vue-slider-process").css("color", "#0077a2 !important");

    $(".menu-bar").css("display", "none");
    $(".vs2__combobox").css("height", "none");
    $(".vs--searchable .vs__dropdown-toggle").css("height", "36");
    $(".vs--searchable .vs__dropdown-toggle").css("width", "181");
    $(".btn btn-primary color-green").css("position", "absolute");

    $("#select1").change(function () {
      var val = $("#select1 option:selected").text();
      if (val == "Standard") {
        $("#timeframe").show();
        $('#select1 option[value="standard"]').prop("selected", true);
        $("#currentFrame").hide();
        $("#m_seconds").hide();
      }
      if (val == "Frames") {
        $("#currentFrame").show();
        $('#select1 option[value="frames"]').prop("selected", true);
        $("#m_seconds").hide();
        $("#timeframe").hide();
      }
      if (val == "Timecode") {
        $("#m_seconds").show();
        $('#select1 option[value="timecode"]').prop("selected", true);
        $("#currentFrame").hide();
        $("#timeframe").hide();
      }
    });

    $("#every_one").click(function () {
      $("#access_btn").text("Every One ^");
    });

    $("#team_only").click(function () {
      $("#access_btn").text("Team Only ^");
    });
    this.media = this.$el.querySelector("#videoElement");
    this.canvas = this.$el.querySelector("canvas");
    // this.canvas.width = "854";
    //this.media.width = "1000";
    //this.canvas.height = "738";
    //  this.media.height = "500";

    if (this.sliderFile.length > 1) {
      events.$on("filePreviewAction:next", () => {
        this.currentIndex += 1;
        this.slideType = "next";
        if (this.currentIndex > this.sliderFile.length - 1) {
          this.currentIndex = 0;
        }
      });

      events.$on("filePreviewAction:prev", () => {
        this.slideType = "prev";
        this.currentIndex -= 1;
        if (this.currentIndex < 0) {
          this.currentIndex = this.sliderFile.length - 1;
        }
      });
    }

    if (this.myFileInfo.type === "video") {
      this.seekbar = this.$el.querySelector(".p-video-player__seekbar-wrap");
      this.reLayoutSeekbar();

      window.addEventListener(
        "resize",
        debounce(() => {
          this.reLayoutSeekbar();
        }),
        100
      );

      document.addEventListener("mousemove", (event) => {
        this.moveSeekbar(event);
      });

      document.addEventListener("mouseup", (event) => {
        this.releaseSeekbar(event);
      });
      this.media.addEventListener("loadedmetadata", () => {
        this.duration = this.media.duration;
      });
      this.media.addEventListener("ended", () => {
        this.media.currentTime = 0;
        if (this.looping) {
          this.media.play();
          this.isPlaying = false;
        } else {
          this.isPlaying = false;
        }
      });
    }
    // $('#videoElement').on('click',function (){
    //   if(this.isActive == false)
    //     vm.playOrPause()
    // })
    let vm = this;
    // $('#videoElement').on('click',function (){
    //    if(this.isActive == false)
    //    vm.playOrPause()
    //  })
    $("#videoElement").on("mousedown", function (e) {
       vm.playOrPause();
    });

    $(".canvas").on("click keyup keypress change blur drag", function (e) {
      alert(1)
      if (this.isActiveDisable == true) vm.playOrPause();
    });
    $(".canvas").on("mouse", function () {
      if (this.isActiveDisable == true) vm.playOrPause();
    });
    this.$refs.paintable.canvasIsEmpty = true;
  },
  destroyed() {
    // this.$refs.paintable.canvasIsEmpty = true;
    // if (videojs("video1test")) {
    //   videojs("video1test").dispose();
    // }
    if (this.$refs.paintable) {
      this.$refs.paintable.clearCanvas();
      this.$refs.paintable.saveCurrentCanvasState();
    }
  },
  methods: {
    clearPaintable() {
      this.testImg = "";
      this.$refs.paintable.canvasIsEmpty = true;
      this.$refs.paintable.clearCanvas("");
      this.$refs.paintable.saveCurrentCanvasToStorage();
    },
    setVideoSize() {
      var x = window.matchMedia("(max-width: 700px)");
      if (x.matches > 700) {
        // If media query matches
        $(".paintable").css("width", "800px");
      } else {
        $(".paintable").css("width", "500px");
      }
    },

    getListPresentFiles() {
      this.version_show = true;
    },
    seekbarCommentClick(value) {
      this.$refs.paintable.clearCanvas("");
      if (this.myFileInfo.type === "video") {
        // this.$refs.paintable.clearCanvas('')
        this.media.currentTime = value.currentTime;
        this.time = this.media.currentTime;
      }
    },

    navigate() {
      this.isFirstPaintable = !this.isFirstPaintable;
    },
    hide() {
      this.$hidePaintableNavigation();
    },
    show() {
      this.$showPaintableNavigation();
    },
    toggledPaintable(isActive) {
      this.isActive = isActive;
    },
    showElements(event) {
      this.activeId = event.target.id;
    },

    editCommentActive(event, data) {
      this.isEditingComment = "edit" + event.target.id;
      this.edit_comment = data.comment;
    },

    showReplyingInput(event) {
      this.isReplying = "reply" + event.target.id;
    },

    hideElements() {
      this.activeId = 0;
    },

    setSelect(name) {
      for (let i in this.selected) {
        this.selected[i] = i === name;
      }
      this[name]();
    },

    append(emoji) {
      this.comment += emoji;
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

    sortComments(sortby) {
      this.commentSortBy = sortby;
      this.getComments();
    },

    filteredFiles() {
      this.data.filter((element) => {
        if (element.type == this.myFileInfo.type) {
          this.sliderFile.push(element);
        }
      });
      this.choseActiveFile();
    },
    onEnterKey(e) {
      console.log("ClickedEnter", e);
    },
    choseActiveFile() {
      this.sliderFile.forEach((element, index) => {
        if (element.unique_id == this.myFileInfo.unique_id) {
          this.currentIndex = index;
        }
      });
    },
    play: function () {
      this.media.play();
      /* this.bitrates = this.dashPlayer.getBitrateInfoListFor("video");//(this.$el.querySelector('#videoElement'));
      console.log(this.bitrates); */
      $("#videoElement").removeClass("d-none");
      $(".content img:last-child").remove();
      this.isPlaying = true;
      this.loop();
    },
    pause: function () {
      this.media.pause();
      this.isPlaying = false;
    },
    playOrPause: function () {
      if (this.isPlaying) {
        this.pause();
        $("#paintImage").css("display", "none");
      } else {
        this.play();
        $("#paintImage").css("display", "none");
      }
    },
    stop: function () {
      this.media.currentTime = 0;
      this.pause();
    },

    SetVolume: function () {
      this.media.volume = this.val / 100;
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
      this.media.playbackRate = playback_rate;
    },
    fullScreen: function (playback_rate) {
      this.media.webkitRequestFullScreen();
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
      this.time = this.media.currentTime;
      if (!this.isPlaying) return;
      requestAnimationFrame(() => {
        this.loop();
      });
    },
    muteVolume: function () {
      this.media1.muted = !this.media1.muted;
      this.media2.muted = !this.media2.muted;
      this.volumeMute = !this.volumeMute;
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
      this.time = this.media.currentTime =
        (event.layerX / this.seekbarWidth) * this.duration;
      this.media.pause();
      $("#paintImage").css("display", "none");
      this.$refs.paintable.clearCanvas("");
    },
    moveSeekbar: function (event) {
      event.preventDefault();
      if (!this.isGrabbingSeekbar) return;
      this.time = this.media.currentTime =
        ((event.clientX - this.seekbarOffsetX - window.pageXOffset) /
          this.seekbarWidth) *
        this.duration;
    },
    releaseSeekbar: function (event) {
      event.preventDefault();
      this.isGrabbingSeekbar = false;
      if (this.isPlaying) {
        this.media.play();
      }
    },
    reLayoutSeekbar: function () {
      this.seekbarWidth = this.seekbar ? this.seekbar.clientWidth : "";
      this.seekbarOffsetX = this.seekbar.getBoundingClientRect().left;
    },
    convertSecondsToTime: function (time) {
      let seconds = Math.floor(time % 60);
      if (seconds < 10) seconds = "0" + seconds;
      let minutes = Math.floor((time / 60) % 60);
      return `${minutes}:${seconds}`;
    },
    convertMiliSecondToTime: function (time) {
      let hours = Math.floor(time / 3600);
      let minutes = Math.floor((time / 60) % 60);
      let seconds = Math.floor(time % 60);
      let milisec = Math.floor(time * 1000);
      milisec = milisec.toString().slice(0, 2);
      if (seconds < 10) seconds = "0" + seconds;
      if (hours < 10) hours = "0" + hours;
      if (milisec < 10) milisec = "0" + milisec;
      if (minutes < 10) minutes = "0" + minutes;
      return `${hours}:${minutes}:${seconds}:${milisec}`;
    },
    seekForward: function () {
      this.media.seekForward();
    },
    seekBackward: function () {
      this.seekBackward();
    },
    onPlay: function () {
      // console.log('onPlay');
      this.$refs.paintable.clearCanvas("");
    },
    onPause: function () {
      //	console.log('onPause');
    },
    onEnded: function () {
      console.log("onEnded" + this.media.currentTime);
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
      console.log("onError", event);
      events.$emit("alert:open", {
        emoji: "😬😬😬",
        title: i18n.t("popup_mimetypes_blacklist.title"),
        message: "Can't open the File.Upload again",
      });
    },

    scalePreserveAspectRatio: function (imgW, imgH, maxW, maxH) {
      return Math.min(maxW / imgW, maxH / imgH);
    },

    drawImage(data) {
      if (this.$refs.paintable) this.$refs.paintable.clearCanvas("");
      if (data.annotation != "") {
        $("#paintImage").css("display", "block");
        this.isActive = false;
        // this.isActiveDisable =true
        // this.$refs.paintable.isMouse =false
        // this.$refs.paintable.startedDrawing =false
        // create new image object to use as pattern to show image dynamically
        console.warn("annotation", data);
        this.testImg = "http://127.0.0.1:8000/annotationImg/" + data.annotation;
        // this.testImg=process.env.MIX_API_BASE_URL+'annotationImg/'+data.annotation;
        //   var img = new Image();
        // img.src =  process.env.MIX_API_BASE_URL+'/annotationImg/'+data.annotation;
        // this.$refs.paintable.clearCanvas('')
        // $('paintable').html(img)
        //   console.log('Canvas::',this.$refs.paintable)
        this.$refs.paintable.canvasIsEmpty = true;

        // let ctx = this.$refs.paintable.ctx
        // img.onload = () => {
        //   ctx.drawImage(img, 0, 0);
        // };
        //img.src =  process.env.MIX_API_BASE_URL+'/annotationImg/'+data.annotation; // eslint-disable-line
      } else {
        $("#paintImage").css("display", "none");
      }
    },

    getImage: function () {
      if (this.$refs.paintable) this.$refs.paintable.clearCanvas("");
      this.$store.dispatch("getImage", {
        file_id: this.currentFile.id,
        user_id: this.user.data.id,
        currentTime: this.media.currentTime,
      });
    },

    getPayload(method) {
      switch (method) {
        case "create_comment":
          break;
        case "update_comment":
          return this.UpdateCommentPayload();
          break;
        case "delete_item":
          return {
            id: this.editItemModalData.id,
            user_id: this.user,
          };
          break;
        default:
          break;
      }
    },

    getComments() {
      this.commentLoading = true;
      let data = { file_id: this.currentFile.id, sortBy: this.commentSortBy };
      this.$store.state.allComments = null;
      let route = "/api/comment/list";
      axios
        .post(route, data)
        .then((response) => {
          this.$store.commit("SET_ALLCOMMENTS", response.data.data);
        })
        .catch((error) => {
          events.$emit("alert:open", {
            title: i18n.t("popup_error.title"),
            message: i18n.t("popup_error.message"),
          });
        });
      //   await  this.$store.dispatch('getComment',data, { root: true })
      let vm = this;
      // mapGetters(['allComments'])
      setTimeout(function () {
        vm.commentLoading = false;
      }, 2500);

      this.$refs.paintable.ctx.clearRect(
        0,
        0,
        this.$refs.paintable.canvas.width,
        this.$refs.paintable.canvas.height
      );
    },

    submitComment: function () {
      //   let  access = $('#access_btn').text()
      this.isLoading = false;
      let time = this.selectedTime;
      let vm = this;
      this.$refs.paintable.saveCurrentCanvasToStorage("");
      var canvas = document.getElementsByClassName("canvas active");
      if (canvas)
        // canvas.width ='850'
        var myImg = canvas[0].toDataURL();
      let video_time = this.convertMiliSecondToTime(this.time);

      let data1;
      if (this.myFileInfo.type === "image") {
        data1 = {
          comment_type: vm.permission,
          video_time: video_time,
          user_id: vm.user.data.id,
          file_id: vm.currentFile.id,
          comment: vm.comment,
          annotation: vm.isActive == true ? myImg : "",
          visible: false,
        };
      } else {
        data1 = {
          currentTime: vm.media.currentTime ? vm.media.currentTime : "",
          comment_type: vm.permission,
          video_time: video_time,
          user_id: vm.user.data.id,
          file_id: vm.currentFile.id,
          comment: vm.comment,
          annotation: vm.isActive == true ? myImg : "",
          comment_spot_time: vm.time ? vm.time : "",
          visible: false,
        };
      }

      // let data1 = {
      //   'currentTime' : vm.media.currentTime,
      //   'comment_type':vm.permission,
      //   'video_time':video_time,
      //   'user_id':vm.user.data.id,
      //   'file_id':vm.currentFile.id,
      //   'comment':  vm.comment,
      //   'annotation':vm.isActive == true ? myImg :'',
      //   'comment_spot_time':vm.time,
      //   'visible':false,
      // }

      // this.$store.dispatch('submitComment',data1)
      this.comment = "";
      // setTimeout(function (){
      // vm.$store.commit('UPDATE_ALLCOMMENTS',data1)
      // },1500)

      this.isActive == "true"
        ? (this.isActive = false)
        : (this.isActive = false);

      this.$store.commit("SET_COMMENT", { loading: true, data: data1 });

      let route = "api/comment/store";
      axios
        .post(route, data1)
        .then((response) => {
          events.$emit("scrollTop");
          vm.getComments();
          //   actions.getComment()
        })
        .catch((error) => {
          // Show error message
          events.$emit("alert:open", {
            title: i18n.t("popup_error.title"),
            message: i18n.t("popup_error.message"),
          });
        });

      this.$refs.paintable.clearCanvas("");
      this.$refs.paintable.canvasIsEmpty = true;
      // vm.getComments()
      this.isLoading = false;
    },

    updateComments: function (data, index = "", action = "") {
      console.log("data", data);
      let record = data;
      let vm = this;
      if (action === "update") {
        let formData = {
          id: record.id,
          comment: vm.edit_comment,
          file_id: vm.currentFile.id,
          user_id: vm.user.data.id,
        };
        // this.$store.dispatch('updateComment', formData)
        let route = "api/comment/updateComment/" + record.id;
        axios
          .post(route, formData)
          .then((response) => {
            events.$emit("scrollTop");
            vm.getComments();
            //   actions.getComment()
          })
          .catch((error) => {
            // Show error message
            events.$emit("alert:open", {
              title: i18n.t("popup_error.title"),
              message: i18n.t("popup_error.message"),
            });
          });
        this.edit_comment = "";
      } else if (action === "delete") {
        let formData = {
          id: record.id,
          user_id: this.user.data.id,
          commentor_name: record.user_name,
        };
        // this.$store.dispatch('deleteComment', formData)
        let route = "api/comment/deleteComment/" + record.id;
        axios
          .post(route, formData)
          .then((response) => {
            events.$emit("scrollTop");
            vm.getComments();
            //   actions.getComment()
          })
          .catch((error) => {
            // Show error message
            events.$emit("alert:open", {
              title: i18n.t("popup_error.title"),
              message: i18n.t("popup_error.message"),
            });
          });
        // this.getComments()
      } else {
        return;
      }
    },

    editComments: function (data, index = "") {
      this.edit_comment = data.comment;
    },

    replyComment: function (data) {
      this.showReplyByIndex = "";
      let formData = {
        comment: this.reply,
        comment_type: "public",
        parent_id: this.parentId,
        file_id: this.currentFile.id,
        user_id: this.user.data.id,
        visible: false,
      };
      this.$store.dispatch("replyComment", formData).then(() => {
        this.getComments();
      });
      this.showReplyByIndex = "";
      this.showChildReplyByIndex = "";
    },

    likeComment: function (data, like = "") {
      let formData = {
        like_id: like.id,
        comment_id: data.id,
        file_id: this.currentFile.id,
        user_id: this.user.data.id,
        visible: false,
      };
      this.$store.dispatch("likeComment", formData).then(() => {
        this.getComments();
      });
    },

    saveVideoDescription: function (data, action = "") {
      if (action == "create") {
        let formData = {
          file_id: this.currentFile.id,
          description: this.description,
        };
        this.$store.dispatch("fileDescription", formData);
      }
    },

    withPopper(dropdownList, component, { width }) {
      dropdownList.style.width = width;

      const popper = createPopper(component.$refs.toggle, dropdownList, {
        placement: this.placement,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -1],
            },
          },
          {
            name: "toggleClass",
            enabled: true,
            phase: "write",
            fn({ state }) {
              component.$el.classList.toggle(
                "drop-up",
                state.placement === "top"
              );
            },
          },
        ],
      });
      return () => popper.destroy();
    },
  },
};
</script>

<style lang="scss" scoped>
.image-for-pic {
  width: 100%;
  display: block;
}
.drop-up {
  width: 100%;
}
.vs__dropdown-toggle {
  padding-left: 45px !important;
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
  padding: 0.3rem;
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
  //color: white;
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
  transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.ph-fio3 {
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
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
  padding-top: 0.65rem;
  padding-bottom: 0.65rem;
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
  padding: 0.325rem;
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
  padding-right: 0.325rem;
  padding-left: 0.325rem;
}
.dn {
  display: none;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
}

button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
.kPXSpg:not(:disabled) {
  cursor: pointer;
}

[type="reset"],
[type="submit"],
button,
html [type="button"] {
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
  transition: background-color 0.2s ease 0s, color 0.2s ease 0s,
    box-shadow 0.2s ease 0s, opacity 0.2ms ease 0s;
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
*,
html {
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
  transition: height 0.4s cubic-bezier(0.23, 1, 0.32, 1);
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

// .paint {
//   border-radius: 5px;
//   box-sizing: border-box;
//   display: block;
//   height: auto !important;
//   position: relative !important;
//   overflow: hidden;
//   background: rgb(247, 244, 244);
// }
.paint {
  border-radius: 5px;
  box-sizing: border-box;
  height: auto;
  overflow: hidden;
  background: transparent;
  // background: rgb(255, 255, 255);
}
.custom-navigation .controls {
  margin: 10px 0 0 0;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  width: 500px;
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
  color: black;
}

.dropup-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropup-content a:hover {
  background-color: #ccc;
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
  border: 1 px solid blue;
}

.image-circle {
  background-color: #00bc7e;
  color: white;
  border-radius: 45%;
  font-size: 12px;
  // padding-top: 6px;
  padding: 4px;
  border: 1 px solid blue;
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
  width: 100% !important;
  // margin: 0 auto;
  padding: 0 3%;
}
.c-content-header {
  margin-top: 0;
  font-size: 2em;
  font-weight: 400;
}
// .p-video-player__media {
//   width: 100%;
//   /*height: 350px;*/
//   display: block;
// }
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
.p-video-player__seekbar-current,
.p-video-player__seekbar-back {
  height: 7px;
  position: absolute;
  right: 0;
  left: 0;
}
.p-video-player__seekbar-current {
  z-index: 2;
  background-color: #00bc7e;
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

@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";

.media-full-preview {
  height: calc(100% - 72px);
  top: 38px;
  position: relative;
  background-color: white;
}

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
  // padding: 30px 0px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: white;

  .file-wrapper {
    width: 100%;
    height: 100%;
    // display: flex;
    // justify-content: center;
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

  .white {
    color: white !important;
  }
  * {
    color: #bec6cf !important;
  }
  .navigation-panel[data-v-674efd78] {
    width: 100%;
    height: 7%;
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    background-color: #1b2539;
    color: #1b2539;
  }
  .navigation-panel {
    width: 100%;
    height: 7%;
    display: flex;
    align-items: center;
    padding: 20px;
    justify-content: space-between;
    background-color: #f4f5f6;
    color: #1b2539;
  }

  .paint {
    border-radius: 5px;
    box-sizing: border-box;
    display: block;
    height: auto !important;
    position: relative !important;
    overflow: hidden;
  }
}

//.tabs__item tabs__item_active
//{
//  color: #0e0e0e !important;
//}

tabs__item {
  color: #00bc7e;
}

.v-select.drop-up.vs--open .vs__dropdown-toggle {
  // width:100% !important; padding-left: 45px !important;
  border-radius: 0 0 4px 4px;
  border-top-color: transparent;
  border-bottom-color: rgba(60, 60, 60, 0.26);
}

[data-popper-placement="top"] {
  border-radius: 4px 4px 0 0;
  border-top-style: solid;
  border-bottom-style: none;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.15);
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
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
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
  background-color: gray;
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
  color: $theme !important;
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
  .vs__dropdown-toggle {
    color: black !important;
  }

  .paint[data-v-674efd78] {
    border-radius: 5px;
    box-sizing: border-box;
    display: block;
    height: auto !important;
    position: relative !important;
    overflow: hidden;
    background: black !important;
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
* {
  scrollbar-width: thin;
  scrollbar-color: gray black;
}

/* Targtes on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 8px;
}

*::-webkit-scrollbar-thumb {
  background-color: gray;
  border-radius: 20px;
  border: 1px solid black;
}

/*#application-wrapper{*/
/*  display: list-item !important;*/
/*}*/




/*.content{*/
/*  height: 350px;*/
/*}*/
</style>


