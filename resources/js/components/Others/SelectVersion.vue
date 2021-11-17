<template>
    <PopupWrapper name="select-version">
        <!--Title-->
        <PopupHeader :title="$t('popup_select_version.title')"  />
<!--      <EmptyMessage-->
<!--          v-if=" isEmpty"-->
<!--          :message="$t('messages.nothing_was_found')"-->
<!--          icon="eye-slash"-->
<!--      />-->
        <!--Content-->
        <PopupContent >

          <div class="file-content"  :class="{ 'is-offset': uploadingFilesCount, 'is-dragging': isDragging }"
               @dragover.prevent
               @drop.stop.prevent="dropUpload($event)"
               @dragover="dragEnter"
               @dragleave="dragLeave"
          >
            <div
                class="files-container"
                ref="fileContainer"
                :class="{'is-fileinfo-visible': fileInfoVisible && !$isMinimalScale() }"
                @click.self="filesContainerClick"
            >


              <!--Item previews list-->
              <div  class="file-list-wrapper">
                <transition-group
                    name="file"
                    tag="section"
                    class="file-list"
                    :class="FilePreviewType"
                >{{dataFiles}}

                  <VersionItemList
                      @dragstart="dragStart(item)"
                      @drop.stop.native.prevent="dragFinish(item, $event)"
                      @contextmenu.native.prevent="contextMenu($event, item)"
                      :data="item"
                      :index="index"
                      :list="dataFiles"
                      v-for="(item,index)  in dataFiles"
                      :key="item.unique_id"
                      class="file-item"
                  ></VersionItemList>

                </transition-group>
              </div>

              <!--Show empty page if folder is empty-->
              <EmptyPage v-if="! isSearching"/>

              <!--Show empty page if no search results-->
              <EmptyMessage
                  v-if="isSearching && isEmpty"
                  :message="$t('messages.nothing_was_found')"
                  icon="eye-slash"
              />
            </div>

            <!--File Info Panel-->
<!--            <div v-if="! $isMinimalScale()" class="file-info-container" :class="{ 'is-fileinfo-visible': fileInfoVisible }">-->
<!--              &lt;!&ndash;File info panel&ndash;&gt;-->
<!--              <FileInfoPanel v-if="fileInfoDetail"/>-->

<!--              &lt;!&ndash;If file info panel empty show message&ndash;&gt;-->
<!--              <EmptyMessage v-if="!fileInfoDetail" :message="$t('messages.nothing_to_preview')" icon="eye-off"/>-->
<!--            </div>-->
          </div>

        </PopupContent>

    </PopupWrapper>
</template>

<script>

    import MobileToolbar from '@/components/FilesView/MobileToolbar'
    import MobileActions from '@/components/FilesView/MobileActions'
    import FileInfoPanel from '@/components/FilesView/FileInfoPanel'
    //import FileItemList from '@/components/FilesView/FileItemList'
    import FileItemList from "../FilesView/FileItemList";
    import EmptyMessage from '@/components/FilesView/EmptyMessage'
    import EmptyPage from '@/components/FilesView/EmptyPage'
    import SearchBar from '@/components/FilesView/SearchBar'
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
    import VersionItemList from "../FilesView/VersionItemList";
    import jQuery from "jquery";
    import $ from "jquery";

    export default {
        name: 'SelectVersion',
        components: {
          VersionItemList,
            FileItemList,
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
            MobileToolbar,
            MobileActions,
            FileInfoPanel,
            EmptyMessage,
            SearchBar,
            EmptyPage
        },
        computed: {
          ...mapGetters([
            'uploadingFilesCount',
            'fileInfoVisible',
            'fileInfoDetail',
            'currentFolder',
            'FilePreviewType',
            'isSearching',
            'isLoading',
            'versionList'
          ]),
          isGrid() {
            return this.FilePreviewType === 'grid'
          },
          dataFiles() {
            return this.versionList
          },
          isList() {
            return this.FilePreviewType === 'list'
          },
          isEmpty() {
            return this.versionList.length == 0 ? true : false
          },
        },
        data() {
            return {
              isConfirmedDestroy: false,
              draggingId: undefined,
              isDragging: false,
              isMoreOptions: false,
              isDeleting: false,
              // isLoading: false,
              isClicked: false,
              area: false,
              itemName: undefined,
              // FilePreviewType:'list'
            }
        },
      filters: {
        limitCharacters(str) {
          if (str.length > 3) {
            return str.substring(0, 3) + '...'
          } else {
            return str.substring(0, 3)
          }
        }
      },
      watch:{
          versionList()
          {

          }
      },
        methods: {
          dropUpload(event) {
            // Upload external file
            this.$uploadExternalFiles(event, this.currentFolder.unique_id)
            this.isDragging = false
          },
          dragEnter() {
            this.isDragging = true
          },
          dragLeave() {
            this.isDragging = false
          },
          dragStart(data) {

            events.$emit('dragstart', data)
            // Store dragged folder
            this.draggingId = data
          },
          dragFinish(data, event) {
            console.log('event.dataTransfer',event)
            console.log('event.dataTransfer',event.dataTransfer.items.length )
            if (event.dataTransfer.items.length == 0 || event.dataTransfer.items.length == 3) {

              // Prevent to drop on file or image
              if (data.type !== 'folder' || this.draggingId === data)
              {
                // return
                // custom code done at 19-04-2021
                this.$store.dispatch('makeVersion', [this.draggingId, data])
              }

              if(data.type =='folder')
              {
                // Move folder to new parent
                this.$store.dispatch('moveItem', [this.draggingId, data])
              }

            } else {
              // Get unique_id of current folder
              const unique_id = data.type !== 'folder' ? this.currentFolder.unique_id : data.unique_id
              // Upload external file
              this.$uploadExternalFiles(event, unique_id)
            }

            this.isDragging = false
          },
          contextMenu(event, item) {
            events.$emit('contextMenu:show', event, item)
          },
          filesContainerClick() {
            // Deselect clicked item
            events.$emit('fileItem:deselect')
            // Hide context menu if is opened
            events.$emit('contextMenu:hide')
          }
        },
        created() {
          events.$on('fileItem:deselect', () =>
              this.$store.commit('CLEAR_FILEINFO_DETAIL')
          )

          events.$on('scrollTop', () => {
            // Scroll top
            var container = document.getElementsByClassName(
                'files-container'
            )[0]
            if (container) container.scrollTop = 0
          })
          // On items delete
          events.$on('items:delete', () => {
            this.$store.dispatch('deleteItem', this.fileInfoDetail)
          })
        },
        mounted() {

            // Show popup
            events.$on('popup:open', args => {

                if (args.name !== 'select-version') return
                this.$store.commit('SET_VERSION_COMP_ACTIVE',true)
                // Store picked item
              console.log('args',args)
                // this.pickedItem = args.item
            })
            // Close popup
            events.$on('popup:close', () => {
              // this.$store.commit('',null)
              this.$store.commit('SET_VERSION_COMP_ACTIVE',false)

              $('.select_version').remove()

               $('.select_verion_container')[0].remove()

            })
        },
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
</style>
