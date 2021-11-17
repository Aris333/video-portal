<template oncontextmenu="return false;">
  <div id="shared" 
  >
    <!-- File Preview -->
    <FileFullPreview />

    <!--Loading Spinenr-->
    <Spinner v-if="isPageLoading" />

    <!--Move item setup-->
    <MoveItem />

    <!--Mobile Menu-->
    <!--        <MobileMenu/>-->

    <!--System alerts-->
    <Alert />

    <!--Background vignette-->
    <Vignette />

    <!--Password verification-->
    <div v-if="currentPage === 'page-password'" id="password-view">
      <!--Verify share link by password-->
      <AuthContent class="center" name="password" :visible="true">
        <img
          v-if="config.app_logo"
          class="logo"
          :src="$getImage(config.app_logo)"
          :alt="config.app_name"
        />
        <b v-if="!config.app_logo" class="auth-logo-text">{{
          config.app_name
        }}</b>

        <h1>{{ $t("page_shared.title") }}</h1>
        <h2>{{ $t("page_shared.subtitle") }}</h2>

        <ValidationObserver
          @submit.prevent="authenticateProtected"
          ref="authenticateProtected"
          v-slot="{ invalid }"
          tag="form"
          class="form inline-form"
        >
          <ValidationProvider
            tag="div"
            mode="passive"
            class="input-wrapper"
            name="Password"
            rules="required"
            v-slot="{ errors }"
          >
            <input
              v-model="password"
              :placeholder="$t('page_shared.placeholder_pass')"
              type="password"
              :class="{ 'is-error': errors[0] }"
            />
            <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
          </ValidationProvider>

          <AuthButton
            icon="chevron-right"
            :text="$t('page_shared.submit')"
            :loading="isLoading"
            :disabled="isLoading"
          />
        </ValidationObserver>
      </AuthContent>
    </div>

    <div
      v-if="sharedFile.type == 'video'"
      class="col-sm-12"
      style="margin: 1% 15%; width: 80%"
      v-show="isPageLoading === false"
    >
      <!--        <video width="100%" class="video"  v-show="isPageLoading ===false"   controls :src="sharedFile ? getConvertedUrl : ''"></video>-->
      <!-- autoplay-->
      <vue-core-video-player
        :src="sharedFile ? getConvertedUrl : ''"
        loop
        :cover="cover"
        title="《Your Name》OST Sparkle"
      ></vue-core-video-player>
      <br />

      <div class="row" style="margin-left: 7%; margin-top: 2%">
        <h3 class="text-center">{{ sharedFile.name }}</h3>
      </div>
    </div>

    <div 
        class="row" 
         >

      <div
        v-resize-text="{ ratio: 1.3 }"
        :style="igCardStyle"
        ref="box"
        v-if="sharedFile.type == 'image'"
        class="col-sm-12"
        style="margin: 1% 15%; width: 80%"
        v-show="isPageLoading === false"
      >
        <img id="image" :src="sharedFile ? getConvertedUrl : ''" alt="" />
        <br />
        <div class="row" style="margin-left: 33%; margin-top: 2%">
          <h3 class="text-center">{{ sharedFile.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResizeText from "vue-resize-text";
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";
import DesktopToolbar from "@/components/FilesView/DesktopToolbar";
import FileFullPreview from "@/components/FilesView/FileFullPreview";
import FileItemGrid from "@/components/FilesView/FileItemGrid";
import FileBrowser from "@/components/FilesView/FileBrowser";
// import ContextMenu from '@/components/FilesView/ContextMenu'
import ButtonBase from "@/components/FilesView/ButtonBase";
// import MobileMenu from '@/components/FilesView/MobileMenu'
import AuthContent from "@/components/Auth/AuthContent";
import AuthButton from "@/components/Auth/AuthButton";
import Spinner from "@/components/FilesView/Spinner";
import MoveItem from "@/components/Others/MoveItem";
import Vignette from "@/components/Others/Vignette";
import Alert from "@/components/FilesView/Alert";
import CopyInput from "@/components/Others/Forms/CopyInput";
import { required } from "vee-validate/dist/rules";
import { mapGetters } from "vuex";
import { events } from "@/bus";
import axios from "axios";
import Vue from "vue";
import VueCoreVideoPlayer from "vue-core-video-player";

Vue.use(VueCoreVideoPlayer);

export default {
  directives: {
    ResizeText,
  },
  name: "SharedPresentationPage",
  components: {
    ValidationProvider,
    ValidationObserver,
    FileFullPreview,
    DesktopToolbar,
    FileItemGrid,
    AuthContent,
    FileBrowser,
    // ContextMenu,
    AuthButton,
    // MobileMenu,
    ButtonBase,
    MoveItem,
    required,
    Vignette,
    Spinner,
    Alert,
    CopyInput,
  },
  computed: {
    ...mapGetters(["config", "sharedDetail", "sharedFile", "isPageLoading"]),

    currentUrl() {
      return this.$root;
    },
    cover() {
      return this.sharedFile.thumbnail;
    },
    getConvertedUrl() {
      // if(this.$route.fullPath)
      let url = this.sharedFile.file_url.split("/public");
      return url[0];
    },
    igCardStyle() {
      return {
        width: `${this.initialWidth}%`,
        height: `${this.matchedWidth}px`,
      };
    },
  },
  data() {
    return {
      checkedAccount: undefined,
      password: "",
      isLoading: false,
      // isPageLoading: true,
      currentPage: undefined,
      initialWidth: 100,
      matchedWidth: null,
    };
  },
  methods: {
    matchWidth() {
      this.matchedWidth = this.$refs.box.offsetWidth;
    },
    async authenticateProtected() {
      // Validate fields
      const isValid = await this.$refs.authenticateProtected.validate();

      if (!isValid) return;

      // Start loading
      this.isLoading = true;

      // Send request to get verify account
      axios
        .post("/api/shared/authenticate/" + this.$route.params.token, {
          password: this.password,
        })
        .then(() => {
          // End loading
          this.isLoading = false;

          // Redirect to file browser page
          this.currentPage = "page-files";

          // Get protected files
          this.getFiles();
        })
        .catch((error) => {
          if (error.response.status == 401) {
            this.$refs.authenticateProtected.setErrors({
              Password: [error.response.data.message],
            });
          }

          // End loading
          this.isLoading = false;
        });
    },
    getFiles() {
      // Show folder
      if (this.sharedDetail.type === "folder") {
        let homeDirectory = {
          unique_id: this.sharedDetail.item_id,
          name: this.$t("locations.home"),
          location: "public",
        };

        // Load folder
        this.$store.dispatch("browseShared", [
          { folder: homeDirectory, back: false, init: true },
        ]);
      }

      // Get file
      if (this.sharedDetail.type === "file") {
        // this.$store.dispatch('getSingleFile')
        this.$store.dispatch("getSingleFileCustom");
      }
    },
    // download() {
    //     this.$downloadFile(this.sharedFile.file_url, this.sharedFile.name + '.' + this.sharedFile.mimetype)
    // },
    // fileViewClick() {
    //     events.$emit('contextMenu:hide')
    // },
    // contextMenu(event, item) {
    //     events.$emit('contextMenu:show', event, item)
    // },
  },
  created() {
    axios
      .get("/api/shared/" + this.$route.params.token)
      .then((response) => {
        // Commit shared item options
        this.$store.commit("SET_SHARED_DETAIL", response.data.data.attributes);
        this.$store.commit(
          "SET_PERMISSION",
          response.data.data.attributes.permission
        );

        // Hide page spinner
        this.isLoading = false;

        // Show password page
        if (response.data.data.attributes.protected) {
          this.currentPage = "page-password";
        } else {
          this.currentPage = "page-files";
          this.getFiles();
        }
      })
      .catch((error) => {
        if (error.response.status == 404) {
          this.$router.push({ name: "NotFoundShared" });
        }
      });
  },
  updated() {
    // $('.menu-bar').remove()
    $(".vue-core-video-player-control.timespan").css("width", "250");
    $("#image").css("height", $(window).height() - 200 + "px");
    $("#application-wrapper").css("margin",  "auto");
    $("#application-wrapper").css("width",  "80%");
    $("#application-wrapper").css("padding",  "10px");

    application-wrapper
  },
};
</script>

<style lang="scss" scoped>
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";
@import "@assets/vue-file-manager/_auth-form";
@import "@assets/vue-file-manager/_auth";

#files-view {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  width: 100%;
  height: 100%;
  position: relative;
  min-width: 320px;
  overflow-x: hidden;
  padding-left: 15px;
  padding-right: 15px;
  overflow-y: hidden;
}

#shared {
  height: 100%;
}

#password-view {
  display: grid;
  height: inherit;

  .center {
    margin: auto;
  }
}

#single-file {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: grid;
  height: 100%;

  .single-file-wrapper {
    margin: auto;
    text-align: center;

    .download-button {
      margin-top: 15px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  /deep/ .file-wrapper {
    .file-item {
      width: 290px;

      &:hover,
      &.is-clicked {
        background: transparent;
      }

      .item-shared {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 1300px) and (max-width: 1110px) {
  .video {
    width: 800px !important;
  }
}

@media screen and (max-width: 700px) {
  .video {
    width: 450px !important;
    border: 450px;
  }
}
@media screen and (max-width: 1100px) and (max-width: 900px) {
  .video {
    width: 800px !important;
    border: 450px;
  }
}
@media screen and (max-width: 700px) {
  #videoElement {
    max-width: 450px !important;
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
//.vue-core-video-player-control.timespan{
//  width:250px !important;
//}
</style>
