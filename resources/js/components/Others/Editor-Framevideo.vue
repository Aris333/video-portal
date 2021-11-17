<template>
    <div class="action-button">
      <editor :canvasWidth="canvasWidth" :canvasHeight="canvasHeight" ref="editor" editorId="canvasId">
        <FrameVideo
            id="videoElement"
            class="p-video-player__media"
            :src="currentFile.file_url"
            :initialTime="initialTime"
            :autoplay="autoplay"
            @play="this.$parent.onPlay"
            @pause="this.$parent.onPause"
            @ended="this.$parent.onEnded"
            @waiting="this.$parent.onWaiting"
            @progress="this.$parent.onProgress"
            @error="this.$parent.onError"
            @timeupdate="this.$parent.onTimeupdate"
            @frameupdate="this.$parent.onFrameupdate"
        />

      </editor>
    </div>
</template>

<script>
import Editor from 'vue-image-markup';

    export default {
        name: 'Editor-Framevideo',
      components:{Editor},
      props:[],
      data(){
          return{
            canvasWidth: 450,
            canvasHeight: 450,
            initialTime: 0,
            autoplay: false,
          }
      },
      methods:{
        currentFile() {
          //Handle actual view image in fileInfoDetail
          if (this.fileInfoDetail) {
            this.$store.commit('GET_FILEINFO_DETAIL', this.currentFile)
            events.$emit('actualShowingImage:ContextMenu', this.currentFile)
            // this.loaded = false
          }
        },
      }

    }
</script>


