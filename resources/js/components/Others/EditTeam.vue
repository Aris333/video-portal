<template>
  <PopupWrapper name="edit-team">
    <!--Title-->
    <PopupHeader :title="currentTeam ? currentTeam : $t('popup_edit_team.title')" icon="share"/>

    <!--Content-->
    <PopupContent>

      <!--     To Add Team -->
      <div  class="">
        <div class="col-sm-12 mb-2">
        </div>

        <div class="col-sm-12">
          <div class="row" >
            <div class="col-sm-6" style="max-width: 34%">
              <p>Genrate Link </p>
            </div>
            <button  class="share-link"  ><link-icon size="17"  @click.prevent="submitShareOptions" class="title-icon"></link-icon></button>
            <div v-if="isGeneratedShared" class="form-wrapper sharelinkLeft">
              <CopyInput size="small" :value="shareLink" />


            </div>
          </div>
        </div>

        <div class="col-sm-12">
<!--          <v-select-->
<!--              v-model="user_id"-->
<!--              :options="USER_LIST"-->
<!--              :reduce="data=>data.id"-->
<!--              multiple-->
<!--              :filterable="false"-->
<!--              @search="onSearch"-->
<!--          >-->
<!--            <template slot="no-options">Type to search User Name</template>-->
<!--            <template slot="option" slot-scope="data">-->
<!--              <div class="d-center">-->
<!--                {{ data.name }}-->
<!--              </div>-->
<!--            </template>-->
<!--            <template slot="selected-option" slot-scope="data">-->
<!--              <div class="selected d-center">-->
<!--                          <span v-if="data.name">-->
<!--                            {{ data.name }}-->
<!--                          </span>-->
<!--              </div>-->
<!--            </template>-->
<!--          </v-select>-->

          <multiselect
              v-model="user_id"
              :options="remainingUserList"
              @tag="addTag"
              :multiple="true"
              :taggable="true"
              :close-on-select="true"
              placeholder="Search Users"
              label="email"
              track-by="email"
              :clear-on-select="false"
              :preserve-search="true"
              tag-placeholder="Add this as new tag"
              :preselect-first="false"
          ></multiselect>



        </div>

        <div class="col-sm-12" style="margin-top: 12px">
          <input type="text" v-model="message" placeholder="Enter Message">
        </div>
        <div class="container">
          <div class="row">
        <div class="d-flex" >

              <PopupActions style="
               position: relative;
               left: 0px !important;
                margin-right: 66px;"   >
                <ButtonBase
                    style="float: left;"
                    class="popup-button"
                    button-style="theme"
                    @click.native="showTotalUser = !showTotalUser"
                    :loading="isDeleting"
                    :disabled="isDeleting"
                >
                  <i class="far fa-angle-down"></i>
                  Total People
                  ({{currentProjectUserList ? currentProjectUserList.length : '' }})
                </ButtonBase>

              </PopupActions>
          <PopupActions>
            <ButtonBase
                style="margin: 0px 8px!important;"
                class="popup-button"
                @click.native="updateInvite"
                button-style="theme"
                :loading="isDeleting"
                :disabled="isDeleting"
            >{{ submitButtonText}}
            </ButtonBase>
          </PopupActions>

        </div>
            <transition name="fade" style="width: 100%">
              <div class="p-2" style="width: 100%">
<!--                <div class="col-sm-12 bg-light"   v-if="showTotalUser ==true" style="position: relative;border: 1px solid #00bc7e;border-radius: 5px" >-->
                <div class="col-sm-12 "   v-if="showTotalUser ==true" style="position: relative;border: 1px solid #00bc7e;border-radius: 5px" >
                  <div class=""  v-if="currentProjectUserList"  v-for="(data,index) in  currentProjectUserList">
                    <div class="user_detail" >
                    <span><img :src="data.user.avatar
                     ? data.user.avatar :'http://127.0.0.1:8000/assets/images/default-avatar.png'"
                               class="img-circle avatar" style="border-radius: 20px; height: 40px!important;    margin-right: 10px;!important; " alt="user profile image">
                      </span>
                      <div class="">
                      <span class="name-styling" style="max-width: 100%;font-weight: 600 ">{{   data.user.name  }}</span>
                      <span style="margin:auto">{{data.user.email}}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <!--Actions-->

    </PopupContent>
  </PopupWrapper>
</template>

<script>
import {ValidationProvider, ValidationObserver} from 'vee-validate/dist/vee-validate.full'
import SelectBoxInput from '@/components/Others/Forms/SelectBoxInput'
import PopupWrapper from '@/components/Others/Popup/PopupWrapper'
import PopupActions from '@/components/Others/Popup/PopupActions'
import PopupContent from '@/components/Others/Popup/PopupContent'
import PopupHeader from '@/components/Others/Popup/PopupHeader'
import SwitchInput from '@/components/Others/Forms/SwitchInput'
import SelectInput from '@/components/Others/Forms/SelectInput'
import ThumbnailItem from '@/components/Others/ThumbnailItem'
import ActionButton from '@/components/Others/ActionButton'
import CopyInput from '@/components/Others/Forms/CopyInput'
import ButtonBase from '@/components/FilesView/ButtonBase'
import {required} from 'vee-validate/dist/rules'
import {mapGetters} from 'vuex'
import {events} from '@/bus'
import axios from 'axios'
import _ from "lodash";
import {LinkIcon} from "vue-feather-icons";
import Multiselect from 'vue-multiselect'
export default {
  name: 'EditTeam',
  components: {
    ValidationProvider,
    ValidationObserver,
    SelectBoxInput,
    ThumbnailItem,
    ActionButton,
    PopupWrapper,
    PopupActions,
    PopupContent,
    PopupHeader,
    SelectInput,
    SwitchInput,
    ButtonBase,
    CopyInput,
    required,
    LinkIcon,
    Multiselect
  },
  computed: {
    ...mapGetters([
      'permissionOptions',
      'expirationList',
      'currentFolder',
      'currentFolder',
      'user',
      'userList',
      'remainingUserList',
      'currentProjectUserList',
      'currentTeam',
      'team',
      'config'
    ]),
    isFolder() {
      return this.pickedItem && this.pickedItem.type === 'folder'
    },

    shareLinkToSender(){
       return this.shareLink
    },

    destroyButtonStyle() {
      return this.isConfirmedDestroy ? 'danger-solid' : 'secondary'
    },
    isSharedLocation() {
      return this.currentFolder && this.currentFolder.location === 'shared'
    },
    moreOptionsTitle() {
      return this.isMoreOptions ? this.$t('shared_form.button_close_options') : this.$t('shared_form.button_more_options')
    },
    submitButtonText() {
      return this.isLoading ? this.$t('page_edit_team.title') : this.$t('page_edit_team.title')
    },

  },
  data() {
    return {
      submitShare: false,
      showTotalUser: false,
      showPopup: false,
      showAddPopup: false,
      isConfirmedDestroy: false,
      canChangePassword: false,
      shareOptions: undefined,
      shareProjectOptions: undefined,
      pickedItem: undefined,
      isMoreOptions: false,
      isDeleting: false,
      isInviting: false,
      shareLink: '',
      isGeneratedShared: false,
      USER_LIST: [],
      user_dropdown_list: [],
      isLoading: false,
      user_id: [],
      name: '',
      message: '',
    }
  },

  methods: {

    onSearch(search1, loading) {
      if (!search1) {
        return
      }
      loading(true)
      this.search(loading, search1, this)
    },

    search: _.debounce((loading, search1, vm) => {
      axios.get(
          `/api/users/user-list`
      ).then(res => {
        res.json().then(json => {
          // console.log('adta',json.data)
          vm.USER_LIST = json.data
        })
        loading(false)
      })
    }, 350),

    moreOptions() {
      this.isMoreOptions = !this.isMoreOptions
      if (!this.isMoreOptions)
        this.shareOptions.expiration = undefined
    },
    changePassword() {
      this.canChangePassword = false
    },
    destroySharing() {
      // Set confirm button
      if (!this.isConfirmedDestroy) {
        this.isConfirmedDestroy = true
      } else {

        // Start deleting spinner button
        this.isDeleting = true
        // Send delete request
        axios
            .post('/api/share/' + this.pickedItem.shared.token, {
              _method: 'delete'
            })
            .then(() => {
              // Remove item from file browser
              if (this.isSharedLocation) {
                this.$store.commit('REMOVE_ITEM', this.pickedItem.unique_id)
              }

              // Flush shared data
              this.$store.commit('FLUSH_SHARED', this.pickedItem.unique_id)

              // End deleting spinner button
              setTimeout(() => this.isDeleting = false, 150)
              this.$closePopup()
            })
            .catch(() => {
              // End deleting spinner button
              this.isDeleting = false
            })
      }
    },
    addCompanyName(){
      // this.isLoading = true
      // this.showPopup = true
      // this.showAddPopup = false
      if(this.currentFolder.id) {
        //this.shareLink = this.config.host + '/shareInvite/' + this.currentFolder.id
        this.shareLink = this.config.host + '/shareInvite/?q=' + this.currentFolder.unique_id >0
      }

      axios
          .post('/api/add-team', {
            name: this.name,
            folder_id: this.currentFolder.id,
          })
          .then(response => {

            if(response.data.status === 200)
            {
              // End loading
              this.isLoading = false
              this.showPopup = true
              this.showPopupSuccess = true
              this.name = response.data
              this.$store.commit('SET_CURRENT_TEAM', response.data.data)
              axios
                  // .post('/api/users/project-user-list' , {id:vm.currentFolder.id})
                  .post('/api/users/list' , {id:vm.currentFolder.id})
                  .then((res) => {
                    // Remove item from file browser
                    this.isLoading = false
                    this.showPopup = true
                    this.showPopupSuccess = true
                    // vm.$store.commit('SET_CURRENT_PROJECT_USER_LIST',res.data.data.members)
                    vm.$store.commit('SET_REMIANING_USER_LIST',res.data.data)
                  }).then(
                  this.name = response.data
              )
                  .catch(() => {
                    // End deleting spinner button
                  })
            }
            if (response.data.status === 422) {
              this.$refs.log_in.setErrors({
                'Team Name': [response.data.message]
              });
              this.$closePopup()
            }
          })
          .catch(error => {
            console.log(error)
            if (error.response.status == 404) {
              this.isLoading = false
              this.$refs.teamName.setErrors({
                'E-Mail': [error.response.data.message]
              });
            }

            if (error.response.status == 422) {
              this.isLoading = false
              events.$emit('alert:open', {
                emoji: '🤔',
                title: this.$t('popup_signup_error.title'),
                message: this.$t('popup_signup_error.message')
              })
            }
            if (error.response.status == 500) {
              this.isLoading = false
              events.$emit('alert:open', {
                emoji: '🤔',
                title: this.$t('popup_signup_error.title'),
                message: this.$t('popup_signup_error.message')
              })
            }
            // End loading
            this.isLoading = false
          })
    },
  async  updateInvite() {
      // Set confirm button
    // if(this.shareLink ===''){
    //
    // }
      if( this.message !='' ) {
      // if (!this.isConfirmedDestroy) {
      //   this.isConfirmedDestroy = true
      // } else {
        // Start deleting spinner button
        await
        axios
            .post('/api/share-complete-folder', {
              type: this.currentFolder.type,
              isPassword: 0,
              unique_id: this.currentFolder.unique_id
            })
            .then((response) => {
              setTimeout(() => this.isDeleting = false, 150)
              this.shareLink =response.data.data.attributes.link
              //this.$closePopup()
              this.isLoading = true
              let channel_data ={
                userEmail: this.user.data.attributes.email,
                sender_id: this.user.data.id,
                user_id: this.user_id,
                shareLink: this.shareLinkToSender,
                folder_id: this.currentFolder.id,
                name: this.name,
                message: this.message,
              }
              this.listenForChanges(channel_data)
              // Send Invite request

              axios
                  .post('/api/invite', {
                    id:this.currentFolder.id,
                    userEmail: this.user.data.attributes.email,
                    sender_id: this.user.data.id,
                    user_id: this.user_id,
                    shareLink: this.shareLinkToSender,
                    folder_id: this.currentFolder.id,
                    name: this.name,
                    message: this.message,
                    type: this.currentFolder.type,
                    unique_id: this.currentFolder.unique_id
                  })
                  .then((response) => {
                    setTimeout(() => this.isLoading = false, 150)
                    this.$closePopup()
                    this.$store.commit('STORE_TEAM',response.data)
                    events.$emit('toaster', {
                      type: 'success',
                      message: 'Your Team Created successfully.',
                    })
                    this.shareLink =''
                    this.name =''
                    this.user_id =''
                    this.message=''
                  })
                  .catch(() => {
                    // End deleting spinner button
                    this.isLoading = false
                  })

            })
            .catch(() => {
              // End deleting spinner button
              this.isDeleting = false
            })


      }
    this.isLoading = false
    },
    listenForChanges(data){

      Echo.channel('Invite-channel')
          .listen('InviteEvent', data => {
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
    submitShareOptions() {
      this.isGeneratedShared =!this.isGeneratedShared;
      this.isLoading = true
      this.submitShare = true

      if(this.currentFolder.id) {
        axios
            .post('/api/share-complete-folder', {
              type: this.currentFolder.type,
              isPassword: 0,
              unique_id: this.currentFolder.unique_id
            })
            .then((response) => {
              setTimeout(() => this.isDeleting = false, 150)
              this.shareLink =response.data.data.attributes.link
              //this.$closePopup()
            })
            .catch(() => {
              // End deleting spinner button
              this.isDeleting = false
            })
      }

    },
    addTag(newTag) {
    //  alert(newTag)
      const tag = {
        email: newTag,
        // you'll need to add other items specific to your objects
      };
      this.USER_LIST.push(tag);
      this.user_id.push(tag);
    },



  },
  watch:{
//  this.getProjectList()
    currentFolder(newValue, oldValue){
      let vm = this
      axios
          .post('/api/users/project-user-list' , {id:vm.currentFolder.id})
          .then((res) => {
            // Remove item from file browser
            vm.$store.commit('SET_CURRENT_PROJECT_USER_LIST',res.data.data.members)
          })
          .catch(() => {
            // End deleting spinner button
          })
      axios
          // .post('/api/users/project-user-list' , {id:vm.currentFolder.id})
          .post('/api/users/list' , {id:vm.currentFolder.id})
          .then((res) => {
            // Remove item from file browser
            // vm.$store.commit('SET_CURRENT_PROJECT_USER_LIST',res.data.data.members)
            vm.$store.commit('SET_REMIANING_USER_LIST',res.data.data)
          })
          .catch(() => {
            // End deleting spinner button
          })

     }
    },
  updated() {
    $('.v-select vs--single vs--searchable').css('width','89% !important')
    //this.getProjectList()
  },
  mounted() {

    // Show popup
    events.$on('popup:open', args => {

      if (args.name !== 'edit-team') return

      // Store picked item
      this.pickedItem = args.item

    });

    // Close popup
    events.$on('popup:close', () => {

      // Restore data
      setTimeout(() => {
        this.isConfirmedDestroy = false
        this.canChangePassword = false
        this.showPopup = false,
        this.submitShare = false,
        this.isGeneratedShared = false,
        this.showAddPopup = false,
        this.shareLink = '',
        this.pickedItem = undefined
        this.shareOptions = undefined
      }, 150)
    })
  },
  destroyed() {
    this.$store.commit('SET_CURRENT_PROJECT_USER_LIST',{})
  }

}
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_inapp-forms.scss";
@import '@assets/vue-file-manager/_forms';

.input-wrapper {

  &.password {
    margin-top: -10px;
  }
}

.change-password {
  opacity: 0.7;
  text-decoration: underline;
}

.item-thumbnail {
  margin-bottom: 20px;
}

.actions {
  padding:10px;
  margin: 0 -7px;
}
.actions .popup-button {
  width: 84%;
  margin: 0px 7px;
}
.user_detail{
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-pack: start;
  place-content: stretch flex-start;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-basis: 100%;
  min-width: 0px;
  border-bottom:2px solid #00bc7e !important;
  margin-bottom: 3px;
}
.name-styling{
  display: flex;
  flex-flow: row nowrap;
  -webkit-box-pack: start;
  place-content: stretch flex-start;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-basis: 100%;
  min-width: 0px;
}
.sharelinkLeft{
  right: 0px!important;
  position: absolute;
}
.share-link {
  width: 30px;
  height: 30px;
  margin: 0 10px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  border: none;
  transition: 150ms all ease;
  margin-left:-35px;
  position: relative;
}

@media (prefers-color-scheme: dark) {

 .bg-light{
   background-color: none;
}
}

</style>
