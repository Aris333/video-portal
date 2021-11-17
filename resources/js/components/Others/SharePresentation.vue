<template >
  <PopupWrapper name="share-presentation"  >
    <!--Title-->
    <PopupHeader :title="$t('popup_share_presentation.title', {item: itemTypeTitle})" icon="share" />

    <!--Content-->
    <PopupContent style="width: 100%">

      <!--Item Thumbnail-->
      <ThumbnailItem class="item-thumbnail" :item="pickedItem" info="metadata"/>

      <!--Copy generated link-->
      <div v-if="isGeneratedShared" class="form-wrapper">
        <div class="input-wrapper">
          <label class="input-label">{{ $t('shared_form.label_shared_url') }}:</label>
          <CopyInput size="small" :value="shareLink" />
        </div>
      </div>


<!--     <video width="100%" controls :src="fileInfoDetail ? fileInfoDetail.file_url : ''"></video>-->

      <!--Form to set sharing-->
     <ValidationObserver v-if="! isGeneratedShared" ref="shareForm" v-slot="{ invalid }" tag="form" class="form-wrapper">

    </ValidationObserver>

<br>
      <!--Actions-->
      <PopupActions>

<!--        <ButtonBase-->
<!--            class="popup-button"-->
<!--            @click.native="destroySharing"-->
<!--            :button-style="destroyButtonStyle"-->
<!--            :loading="isDeleting"-->
<!--            :disabled="isDeleting"-->
<!--        >{{ destroyButtonText }}-->
<!--        </ButtonBase>-->
        <ButtonBase
            class="popup-button"
            @click.native="submitShareOptions"
            button-style="theme"
            :loading="isLoading"
            :disabled="isLoading"
        >{{ submitButtonText }}
        </ButtonBase>
      </PopupActions>


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
import {mapGetters,mapState} from 'vuex'
import {events} from '@/bus'
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'SharePresentation',
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
  },
  computed: {
    ...mapGetters([
      'permissionOptions',
      'expirationList',
        'fileInfoDetail'
    ]),

    itemTypeTitle() {
      return this.pickedItem && this.pickedItem.type === 'folder' ? this.$t('types.folder') : this.$t('types.file')
    },
    isFolder() {
      return this.pickedItem && this.pickedItem.type === 'folder'
    },
    submitButtonText() {
      return this.isGeneratedShared ? this.$t('shared_form.button_done') : this.$t('shared_form.button_generate')
    },
    moreOptionsTitle() {
      return this.isMoreOptions ? this.$t('shared_form.button_close_options') : this.$t('shared_form.button_more_options')
    },
    destroyButtonText() {
        return this.isConfirmedDestroy ? this.$t('popup_add_edit.confirm') : this.$t('popup_add_company.stop')
    },
    destroyButtonStyle() {
      return this.isConfirmedDestroy ? 'danger-solid' : 'secondary'
    },
  },
  data() {
    return {
      shareOptions: {
        isPassword: false,
        expiration: undefined,
        password: undefined,
        permission: undefined,
        type: undefined,
        unique_id: undefined,
      },
      pickedItem: undefined,
      shareLink: undefined,
      isGeneratedShared: false,
      isLoading: false,
      isMoreOptions: false,
      isConfirmedDestroy: false,
      canChangePassword: false,
      isDeleting: false,

    }
  },
  methods: {
    moreOptions() {
      this.isMoreOptions = ! this.isMoreOptions

      if (! this.isMoreOptions)
        this.shareOptions.expiration = undefined
    },
    async submitShareOptions() {

      // If shared was generated, then close popup
      if (this.isGeneratedShared) {
        events.$emit('popup:close')
        return;
      }
      // Validate fields
      const isValid = await this.$refs.shareForm.validate();
      if (!isValid) return;
      this.isLoading = true
      // Send request to get share link
      axios
          .post('/api/share', this.shareOptions)
          .then(response => {

            // End loading
            this.isLoading = false
            let link=response.data.data.attributes.link
          //  console.log('link',link)
            var res =    link.replace('shared','sharedPresentation')
            this.shareLink = res
          //  console.log('link2',res)

            this.isGeneratedShared = true

            this.$store.commit('UPDATE_SHARED_ITEM', response.data.data.attributes)
          })
          .catch(error => {

            // todo: catch errors

            // End loading
            this.isLoading = false
          })
    },
    destroySharing() {

      // Set confirm button
      if (! this.isConfirmedDestroy) {

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
              if ( this.isSharedLocation ) {
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
  },
  mounted() {

    // Show popup
    events.$on('popup:open', args => {

      if (args.name !== 'share-presentation') return
      $('.popup-wrapper').css( 'width','100%')
      // Store picked item
      this.pickedItem = args.item

      this.shareOptions.type = args.item.type
      this.shareOptions.unique_id = args.item.unique_id
    })

    // Close popup
    events.$on('popup:close', () => {

      // Restore data
      setTimeout(() => {
        this.shareOptions = {
          permission: undefined,
          password: undefined,
          isPassword: false,
          expiration: undefined,
          type: undefined,
          unique_id: undefined,
        }
        this.isGeneratedShared = false
        this.isMoreOptions = false
        this.shareLink = undefined
      }, 150)
    })
  }
}
</script>

<style scoped lang="scss">
@import "@assets/vue-file-manager/_inapp-forms.scss";
@import '@assets/vue-file-manager/_forms';

.more-options {
  margin-bottom: 10px;
}

.input-wrapper {
  &.password {
    margin-top: -10px;
  }
}

.item-thumbnail {
  margin-bottom: 20px;
}
.popup-wrapper{
  width: 100% !important;
}
</style>


