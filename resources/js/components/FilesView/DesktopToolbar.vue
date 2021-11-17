<template>
  <div id="desktop-toolbar">
    <div class="toolbar-wrapper">
      <!-- Go back-->
      <div class="toolbar-go-back" v-if="homeDirectory">
        <div @click="goBack" class="go-back-button">
          <chevron-left-icon
              size="17"
              :class="{ 'is-active': browseHistory.length > 1 }"
              class="icon-back"
          ></chevron-left-icon>
          <span class="back-directory-title">
            {{ directoryName }}
          </span>
          <span
              @click.stop="folderActions"
              v-if="
              browseHistory.length > 1 && $isThisLocation(['base', 'public'])
            "
              class="folder-options"
              id="folder-actions"
          >
            <more-horizontal-icon
                size="14"
                class="icon-more"
            ></more-horizontal-icon>
          </span>
        </div>
      </div>
      <!-- -->
      <div class="toolbar-tools" v-show="this.$route.name ==='SharedPage'">

        <!-- For Search the Users  -->
        <!--                <v-select-->
        <!--                    style="width:197px;"-->
        <!--                  v-model="project_id"-->
        <!--                  :options="projects"-->
        <!--                  :reduce="data=>data.item.unique_id"-->
        <!--                  :filterable="false"-->
        <!--                  @input="selectedProject"-->
        <!--                  >-->
        <!--&lt;!&ndash;                  <template slot="options" >Own WorkSpace</template>&ndash;&gt;-->
        <!--                    <template slot="option" slot-scope="data">-->
        <!--                      <RouterLink to="/files"><template slot="options" >Own WorkSpace</template></RouterLink>-->
        <!--                      <div class="d-center">-->
        <!--                        {{ data.item.name }}-->
        <!--                      </div>-->
        <!--                    </template>-->
        <!--                    <template slot="selected-option" slot-scope="data">-->
        <!--                      <div class="selected d-center">-->
        <!--                          <span v-if="data.name">-->
        <!--                            {{ data.name }}-->
        <!--                          </span>-->
        <!--                      </div>-->
        <!--                    </template>-->
        <!--                </v-select>-->
      </div>
      <!-- Tools-->
      <div class="toolbar-tools">
        <!--Search bar-->
        <div class="toolbar-button-wrapper">
          <SearchBar />
        </div>
        <!--Files controlls-->
        <div
            class="toolbar-button-wrapper"
            v-if="$checkPermission(['master', 'editor'])"
        >
          <ToolbarButtonUpload
              :class="{ 'is-inactive': canUploadInView || !hasCapacity }"
              :action="$t('actions.upload')"
          />
          <ToolbarButton
              :class="{ 'is-inactive': canCreateFolderInView }"
              @click.native="createFolder"
              source="folder-plus"
              :action="$t('actions.create_folder')"
          />
          <ToolbarButton
              source="bell"
              @click.native="showDiv =!showDiv"
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
          />
        </div>
        <!--            v-if="$checkPermission(['master', 'editor'])"-->
        <div
            class="toolbar-button-wrapper"
            v-if="$checkPermission(['master', 'editor'])"
        >
          <ToolbarButton
              source="move"
              :class="{ 'is-inactive': canMoveInView }"
              :action="$t('actions.move')"
              @click.native="moveItem"
          />
          <ToolbarButton
              v-if="!$isThisLocation(['public'])"
              source="share"
              :class="{ 'is-inactive': canShareInView }"
              :action="$t('actions.share')"
              @click.native="shareItem"
          />
          <ToolbarButton
              source="trash"
              :class="{ 'is-inactive': canDeleteInView }"
              :action="$t('actions.delete')"
              @click.native="deleteItem"
          />
        </div>

        <!--View options-->
        <div class="toolbar-button-wrapper">
          <ToolbarButton
              :source="preview"
              :action="$t('actions.preview')"
              @click.native="$store.dispatch('changePreviewType')"
          />
          <ToolbarButton
              :class="{ active: fileInfoVisible }"
              @click.native="$store.dispatch('fileInfoToggle')"
              source="info"
          />
        </div>
      </div>
    </div>
    <div  class="" style="float: right; " v-show="showDiv"  id="collapseExample">
      <div class="card card-body" style="overflow-y: scroll;height: 400px;" >
        <ul class="nav navbar-nav">
          <li class="dropdown dropdown-notifications">
            <div class="dropdown-container" >

              <div class="" v-if="notifications "    v-for="(data,index) in notifications">
                <div v-show="data">
                  <p class="mb-2">
                    <strong class="text-muted"> {{ data.title }}</strong>
                    <a class="badge badge-success"   v-show="data.is_read ==1"  style="float: right" href="javascript:void(0)"  @click="acceptProject(data)">Accepted</a>
                    <a class="badge badge-info" v-show="data.is_read ==0" style="float: right" href="javascript:void(0)"  @click="acceptProject(data)">Accept</a>
                    <br>
                    <span class="text-success">Request Sent By  {{ data.sender.name}}</span>
                  <p class="text-success">  {{ moment(data.created_at).format("DD-MMMM-YYYY") }}</p>

                  <hr>
                  </p>
                </div>
              </div>

              <div class="" v-show="notifyNull">
                <div>
                  <strong class="text-danger"> No Message</strong>
                </div>
              </div>

            </div>
          </li>

        </ul>
      </div>
    </div>

    <div class="toolbar-wrapper">
      <!-- Go back-->
      <!-- Tools-->
      <div class="toolbar-tools">
        <!--View options-->

        <div class="toolbar-button-wrapper"  v-if="this.currentFolder && this.currentFolder.parent_id === 0">
          <Button class="btn"
                  :source="preview"
                  :action="$t('actions.preview')"
                  @click="AddCompany(); "><i class="fas fa-user-plus"></i></Button>
          <!--          <ToolbarButton-->
          <!--            :class="{ active: fileInfoVisible }"-->
          <!--            @click.native="$store.dispatch('fileInfoToggle')"-->
          <!--            source="info"-->
          <!--          />-->
        </div>
      </div>
    </div>

    <UploadProgress file_name="new name"/>

  </div>
</template>

<script>
// import { TimeAgo } from 'vue2-timeago'
// import 'vue2-timeago/dist/vue2-timeago.css'
import ToolbarButtonUpload from "@/components/FilesView/ToolbarButtonUpload";
import {ChevronLeftIcon, MoreHorizontalIcon, UsersIcon,BellIcon} from "vue-feather-icons";
import UploadProgress from "@/components/FilesView/UploadProgress";
import ToolbarButton from "@/components/FilesView/ToolbarButton";
import SearchBar from "@/components/FilesView/SearchBar";
import { mapGetters } from "vuex";
import { events } from "@/bus";
import { last } from "lodash";
import axios from "axios";
import $ from 'jquery'
import moment from 'moment'
window.Pusher = require('pusher-js');
export default {
  name: "ToolBar",
  components: {
    ToolbarButtonUpload,
    MoreHorizontalIcon,
    ChevronLeftIcon,
    UsersIcon,
    BellIcon,
    UploadProgress,
    ToolbarButton,
    SearchBar,
    // TimeAgo,
    moment
  },
  updated() {
    $('.card card-body').css('width','26%')
  },
  computed: {
    ...mapGetters([
      "FilePreviewType",
      "fileInfoVisible",
      "fileInfoDetail",
      "currentFolder",
      "browseHistory",
      "homeDirectory",
      "team",
      "projects",
      "user",
      "notifications"
    ]),
    hasCapacity() {
      // Check if set storage limitation
      if (!this.$store.getters.config.storageLimit) return true;
      // Check if is loaded user
      if (!this.$store.getters.user) return true;
      // Check if user has storage
      return (
          this.$store.getters.user.relationships.storage.data.attributes.used <=
          100
      );
    },
    findUserMatch(){
      let  users =  data.registered_users
      let  findUser = users.includes(this.user.data.id);
      return findUser
    },
    directoryName() {
      return this.currentFolder
          ? this.currentFolder.name
          : this.homeDirectory.name;
    },
    preview() {
      return this.FilePreviewType === "list" ? "th" : "th-list";
    },
    canCreateFolderInView() {
      return !this.$isThisLocation(["base", "public"]);
    },
    canDeleteInView() {
      return !this.$isThisLocation([
        "trash",
        "trash-root",
        "base",
        "participant_uploads",
        "latest",
        "shared",
        "public",
      ]);
    },
    canUploadInView() {
      return !this.$isThisLocation(["base", "public"]);
    },
    canMoveInView() {
      return !this.$isThisLocation([
        "base",
        "participant_uploads",
        "latest",
        "shared",
        "public",
      ]);
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
  },
  methods: {
    async  getNotifications() {
      let vm
      axios.post(
          `/api/notification/list`,{id:this.user.data.id}
      ).then((res) => {
        //console.log(res.data.data)
        this.$store.commit('USER_NOTIFICATION', res.data.data)
        if(res.data.status == 404)
        {
          this.notifyNull = true
        }
      }).catch(error => {
        console.log(error)
        // todo: catch errors
        // End loading
        this.isLoading = false
      })
    },
    async  getTotalProject(data) {
      let vm
      await     axios.post(
          `/api/total-project`,{user_id:this.user.data.id}
      ).then((res) => {
        //  console.log('all projects:::',res.data.data)
        // res.data.data.push({
        //   unique_id:'files-url',
        //   name:'work space'
        // })
        this.$store.commit('USER_PROJECTS',JSON.stringify(res.data.data))
        // console.log("toala:",res.data.data)
        if(res.data.status == 404)
        {
          this.notifyNull = true
        }
      }).catch(error => {
        console.log(error)
        // End loading
        this.isLoading = false
      })
    },
    async  selectedProject() {
      if(this.project_id === 'files-url' )
      {
        this.$router.push('/files')
      }
      //  console.log('project Id::',this.project_id)
      let vm
      axios.post(
          `/api/selected-project`,{id:this.project_id}
      ).then((res) => {
        // console.log(res.data.data)
        this.$store.commit('USER_PROJECTS', res.data.data.link)
        let link =    res.data.data.link
        // this.$route.push(link)
        window.location.href=link
        if(res.data.status == 404)
        {
          this.notifyNull = true
        }
      }).catch(error => {
        console.log(error)
        // todo: catch errors
        this.isLoading = false
      })
    },
    goBack() {
      // Get previous folder
      let previousFolder = last(this.browseHistory);
      if (!previousFolder) {
        window.location.href ='/files'
      }

      // if (!previousFolder) return;
      if (previousFolder.location === "trash-root") {
        this.$store.dispatch("getTrash");
      }else if (previousFolder.location === "shared") {
        this.$store.dispatch("getShared");
      }else{
        if (this.$isThisLocation("public")) {
          this.$store.dispatch("browseShared", [
            {folder: previousFolder, back: true, init: false},
          ]);
        } else {
          this.$store.dispatch("getFolder", [
            {folder: previousFolder, back: true, init: false},
          ]);
        }
      }
    },
    folderActions() {
      events.$emit("folder:actions", this.currentFolder);
    },
    deleteItem() {
      events.$emit("items:delete");
    },
    createFolder() {
      this.$createFolder();
    },
    moveItem() {
      events.$emit("popup:open", {name: "move", item: this.fileInfoDetail});
    },
    shareItem() {
      if (this.fileInfoDetail) {
        //ADD BY M
        if (this.fileInfoDetail.shared) {
          events.$emit("popup:open", {
            name: "share-edit",
            item: this.fileInfoDetail,
          });
        } else {
          events.$emit("popup:open", {
            name: "share-create",
            item: this.fileInfoDetail,
          });
        }
      }
    },
    AddCompany() {
      if (this.currentFolder.id) {
        axios
            .post('/api/team-by-folder_id', {
              id: this.currentFolder.id
            })
            .then((response) => {
              setTimeout(() => this.isDeleting = false, 150)
              // console.log('response', response.data.status)
              if (response.data.status === 422) {
                events.$emit("popup:open", {
                  name: "add-team",
                  item: this.fileInfoDetail,
                  currentFolder: this.currentFolder
                });
                // this.getCurrentProjectFiles()
              } else {
                this.team_detail = response.data.data
                events.$emit("popup:open", {
                  name: "edit-team",
                  item: response.data.data,
                  currentFolder: this.currentFolder,
                  team: this.team
                });
              }
            })
            .catch(() => {
              // End deleting spinner button
              this.isDeleting = false
            })
      }
    },
    getCurrentProjectFiles() {
      if (this.currentFolder.id) {
        axios
            .post('/api/selected-project', {
              id: this.currentFolder.id
            })
            .then((response) => {
              setTimeout(() => this.isDeleting = false, 150)
              //  console.log('response', response.data.status)
              if (response.data.status === 422) {
                events.$emit("popup:open", {
                  name: "add-team",
                  item: this.fileInfoDetail,
                  currentFolder: this.currentFolder
                });
              } else {
                this.team_detail = response.data.data
                events.$emit("popup:open", {
                  name: "edit-team",
                  item: response.data.data,
                  currentFolder: this.currentFolder,
                  team: this.team
                });
              }
            })
            .catch(() => {
              // End deleting spinner button
              this.isDeleting = false
            })
        //user-list of
        axios.get(
            `/api/users/user-list/`
        ).then( (res) => {
          // console.log(res.data.data)
          this.$store.commit('SET_USER_LIST',res.data.data)
        })
      }
    },
    acceptProject(data) {
      if (data.is_read === 0) {
        axios
            .post(`/api/shareInvite`, {
              team_id:data.team_id,
              user_id:this.user.data.id,
            }).then((res) => {
          if (res.data.status ===200)
          {
            axios
                .post(`/api/notification-status`, {
                  id: data.id,
                  user_id: this.user.data.id,
                })
                .then((response) => {
                  // console.log('response', response.data.status)
                  if (response.data.status === 422) {
                    events.$emit("popup:open", {
                      name: "add-team",
                      item: this.fileInfoDetail,
                      currentFolder: this.currentFolder
                    });
                  }
                  if (response.data.status === 200) {
                    // window.location.href = data.url
                    setTimeout(function() {
                      window.location.href = data.url
                    },400)
                    // window.location.replace  = data.url
                  }
                })
                .catch(() => {
                  // End deleting spinner button
                  this.isDeleting = false
                })
          }
        })
            .catch(() => {
              // End deleting spinner button
              this.isDeleting = false
            })
      }else{
        // window.location.href =data.url
        setTimeout(function() {
           // console.log(data.url)
          window.location.href = data.url
        },100)
      }
    },
  },
  mounted() {
    let vm
    Echo.channel('Invite-channel')
        .listen('InviteEvent', (data) => {
          if (! ('Notification' in window)) {
            alert('Web Notification is not supported');
            return;
          }
          Notification.requestPermission( permission => {
            let notification = new Notification('New post alert!', {
              body: data.message, // content for the alert
              icon: "https://pusher.com/static_logos/320x320.png" // optional image url
            });
            // link to page on clicking the notification
            notification.onclick = () => {
              window.open(window.location.href);
            };
          });
        })
  },
  created() {
    this.getNotifications()
    this.getTotalProject()
    var pusher = new Pusher('d6d0e765f0a66298cf30', {
      cluster: 'us3'
    });
    let vm = this
    var channel = pusher.subscribe('Invite-channel');
    channel.bind('InviteEvent', function(data) {
      // console.log('data',data)
      vm.messages = data;
      vm.getNotifications()
    });
  },
  data() {
    return {
      USER_LIST:[],
      PROJECT_LIST:[],
      showDiv:false,
      project_id:{
        unique_id:'files',
        name:'Own WorkSpace'
      },
      messages:'',
      team_detail:'',
      notifyNull:'',
      moment: moment
    }
  }
};
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_variables";
@import "@assets/vue-file-manager/_mixins";
.toolbar-wrapper {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  position: relative;
  z-index: 2;
  > div {
    flex-grow: 1;
    align-self: center;
    white-space: nowrap;
  }
}
.directory-name {
  vertical-align: middle;
  @include font-size(17);
  color: $text;
  font-weight: 700;
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
}
.icon-back {
  vertical-align: middle;
  cursor: pointer;
  margin-right: 6px;
  opacity: 0.15;
  pointer-events: none;
  @include transition(150ms);
  &.is-active {
    opacity: 1;
    pointer-events: initial;
  }
}
.toolbar-go-back {
  cursor: pointer;
  .folder-options {
    vertical-align: middle;
    margin-left: 6px;
    padding: 1px 4px;
    line-height: 0;
    border-radius: 3px;
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
    .icon-more {
      vertical-align: middle;
    }
  }
  .back-directory-title {
    @include font-size(15);
    line-height: 1;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    vertical-align: middle;
    color: $text;
  }
}
.toolbar-position {
  text-align: center;
  span {
    @include font-size(17);
    font-weight: 600;
  }
}
.toolbar-tools {
  text-align: right;
  .toolbar-button-wrapper {
    margin-left: 13px;
    display: inline-block;
    vertical-align: middle;
    &:first-child {
      margin-left: 0 !important;
    }
  }
  .button {
    margin-left: 5px;
    &.active {
      /deep/ svg {
        line,
        circle {
          stroke: $theme;
        }
      }
    }
    &.is-inactive {
      opacity: 0.25;
      pointer-events: none;
    }
    &:first-child {
      margin-left: 0;
    }
  }
}
@media only screen and (max-width: 1024px) {
  .toolbar-go-back .back-directory-title {
    max-width: 120px;
  }
  .toolbar-tools {
    .button {
      margin-left: 0;
      height: 40px;
      width: 40px;
    }
    .toolbar-button-wrapper {
      margin-left: 25px;
    }
  }
}
@media only screen and (max-width: 960px) {
  #desktop-toolbar {
    display: none;
  }
}
@media (prefers-color-scheme: dark) {
  .toolbar .directory-name {
    color: $dark_mode_text_primary;
  }
  .toolbar-go-back {
    .back-directory-title {
      color: $dark_mode_text_primary;
    }
    .folder-options {
      &:hover {
        background: $dark_mode_foreground;
      }
    }
  }
}
.collapse{
  width: 28%;
  float: right;
}
.card{
  position: absolute;
  z-index: 99999;
  margin-top: -10px;
  width: 26%
}
</style>
