<template>
    <div id="vue-file-manager" v-cloak>

        <!--System alerts-->
        <Alert/>

        <div id="application-wrapper" v-if="! isGuestLayout">

            <!-- Full File Preview -->
            <FileFullPreview />
            <canvas style='display:none'  id='joined'></canvas>
            <!--Mobile Navigation-->
            <MobileNavigation />

            <!--Confirm Popup-->
            <Confirm />

            <!--Share Item setup-->
              <ShareCreate/>
              <SelectVersion/>
              <ShareEdit/>
              <ShareReviewCreate/>
              <ShareReviewEdit/>

            <SharePresentation/>
        <add-team></add-team>
        <edit-team></edit-team>

            <!--Move item setup-->
            <MoveItem/>

            <!--Copy item setup-->
            <CopyItem/>

            <!--Mobile Menu-->
            <MobileMenu/>

            <!--Navigation Sidebar-->
             <MenuBar          v-if="!['SharedPresentationPage','FullMediaView','ComparisonMediaView', 'SharedReviewPage','SharedPresentationPage'].includes($route.name)" />

            <!--Toastr-->
            <ToastrWrapper/>

            <!--File page-->
            <keep-alive :include="['Admin', 'Users']">
                <router-view :class="{'is-scaled-down': isScaledDown}"/>
            </keep-alive>

            <!-- <zwibbler>
     <div z-canvas></div>
      </zwibbler>
      <button onclick="initialize()">Create zwibbler</button>
      <button onclick="destroy()">Destroy</button> -->
            <!-- <draw /> -->
           <!-- <video  id="video" class="video-js vjs-big-play-centered"
        controls
        poster="http://vjs.zencdn.net/v/oceans.png"
        data-setup="{}">
     <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" >
        </video> -->



        </div>

        <router-view v-if="isGuestLayout"/>

        <CookieDisclaimer />

        <!--Background vignette-->
        <Vignette/>
    </div>
</template>

<script>
    import ToastrWrapper from '@/components/Others/Notifications/ToastrWrapper'
    import FileFullPreview from '@/components/FilesView/FileFullPreview'
    import MobileNavigation from '@/components/Others/MobileNavigation'
    import CookieDisclaimer from '@/components/Others/CookieDisclaimer'
    import MobileMenu from '@/components/FilesView/MobileMenu'
    import ShareCreate from '@/components/Others/ShareCreate'
    import Confirm from '@/components/Others/Popup/Confirm'
    import ShareEdit from '@/components/Others/ShareEdit'
    import ShareReviewCreate from '@/components/Others/ShareReviewCreate'
    import ShareReviewEdit from '@/components/Others/ShareReviewEdit'
    import MoveItem from '@/components/Others/MoveItem'
    import CopyItem from '@/components/Others/CopyItem'
    import Vignette from '@/components/Others/Vignette'
    import MenuBar from '@/components/Sidebar/MenuBar'
    import Alert from '@/components/FilesView/Alert'
    import {includes} from 'lodash'
    import {mapGetters} from 'vuex'
    import {events} from "./bus"
    import SharePresentation from "./components/Others/SharePresentation";
    import SharedReviewPage from "./views/Shared/SharedReviewPage";
    import AddTeam from "./components/Others/AddTeam";
    import EditTeam from "./components/Others/EditTeam";
    import SelectVersion from "./components/Others/SelectVersion";
 //   import ShareReview from "./components/Others/ShareReview";
    // import 'video.js/dist/video-js.css'
    // import videojs from 'video.js'
    // import 'videojs-canvas-plugin'
    // var videojsQualityselector = require("videojs-qualityselector")
    // import 'videojs-qualityselector.min'
    // import 'videojs-snapshot'
    // var snapshot = require('videojs-snapshot');
    // import 'zwibbler'
    // import {VideoFrame} from "./VideoFrame.min"


// let videojs = require('video.js');

    export default {
        name: 'app',
        components: {
          SelectVersion,
          EditTeam,
          AddTeam,
          SharedReviewPage,
          SharePresentation,
          MobileNavigation,
          CookieDisclaimer,
          FileFullPreview,
          ToastrWrapper,
          ShareCreate,
          MobileMenu,
          ShareEdit,
          ShareReviewCreate,
          ShareReviewEdit,
          MoveItem,
          CopyItem,
          Vignette,
          Confirm,
          MenuBar,
          Alert,
            // draw,
        },
        computed: {
            ...mapGetters([
                'isLogged', 'isGuest', 'config'
            ]),
            isGuestLayout() {
                return (includes([
                        'InstallationDisclaimer',
                        'SubscriptionService',
                        'StripeCredentials',
                        'SubscriptionPlans',
                        'ForgottenPassword',
                        'CreateNewPassword',
                        'EnvironmentSetup',
                        'VerifyByPassword',
                        'SaaSLandingPage',
                        'BillingsDetail',
                        'NotFoundShared',
                        'AdminAccount',
                        'PurchaseCode',
                        'DynamicPage',
                        'SharedPage',
                        'ContactUs',
                        'AppSetup',
                        'Database',
                        'Upgrade',
                        'SignIn',
                        'SignUp',
                    ], this.$route.name)
                )
            }
        },
        data() {
            return {
                isScaledDown: false,
            }
        },
        beforeMount() {

            // Store config to vuex
            this.$store.commit('INIT', {
                authCookie: this.$root.$data.config.hasAuthCookie,
                config: this.$root.$data.config,
                rootDirectory: {
                    name: this.$t('locations.home'),
                    location: 'base',
                    unique_id: 0,
                }
            })

            // Get installation state
            let installation = this.$root.$data.config.installation

            // Redirect to database verify code
            if ( installation === 'setup-database') {
                this.$router.push({name: 'PurchaseCode'})
            }

            // Redirect to starting installation process
            if ( installation === 'setup-disclaimer' ) {
                this.$router.push({name: 'InstallationDisclaimer'})
            }
        },
        mounted() {
            // var player = videojs('video');

            //  player.snapshot();
            // player.VideoCanvasPlugin();

            // Handle mobile navigation scale animation
            events.$on('show:mobile-navigation', () => this.isScaledDown = true)
            events.$on('hide:mobile-navigation', () => this.isScaledDown = false)
            events.$on('mobileMenu:show', () => this.isScaledDown = true)
            events.$on('fileItem:deselect', () => this.isScaledDown = false)
        }

    }

//     var video = VideoFrame({
//     id: 'video',
//     frameRate: FrameRates.film,
//     callback: function(response) {
//         console.log(response);
//     }
// });

let globalCtx;
function initialize() {
    const element = document.querySelector("#myzwibbler");
    let {scope, ctx} = Zwibbler.attach(element);
    globalCtx = ctx;
}

function destroy() {
    if (globalCtx) {
        globalCtx.destroy();
        globalCtx = null;
    }
}


</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap');
    @import '@assets/vue-file-manager/_variables';
    @import '@assets/vue-file-manager/_mixins';

    [v-cloak],
    [v-cloak] > * {
        display: none
    }

    * {
        outline: 0;
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        font-size: 16px;
        text-decoration: none;
        color: $text;
    }

    #auth {
        width: 100%;
        height: 100%;
    }

    #vue-file-manager {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        scroll-behavior:smooth;
    }

    @media only screen and (max-width: 690px) {

        .is-scaled-down {
            @include transform(scale(0.95));
        }
    }

    // Dark mode support
    @media (prefers-color-scheme: dark) {

        * {
            color: $dark_mode_text_primary;
        }

        body, html {
            background: $dark_mode_background;
            color: $dark_mode_text_primary;

            img {
                opacity: .95;
            }
        }
    }
    .paintable, body {
 position: unset !important;
    }

</style>
