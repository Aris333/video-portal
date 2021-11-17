<template>
    <label :class="buttonStyle" label="file" class="button file-input button-base">
        <slot></slot>
        <input
                accept="*"
                v-show="false"
                @change="emmitFiles"
                id="file"
                type="file"
                name="files[]"
                multiple
        />
    </label>
</template>

<script>
    import store from "../../store";
    import {events} from "../../bus";

    export default {
        name: 'ButtonBase',
        props: ['buttonStyle'],
        data() {
            return {
                files: undefined
            }
        },
        methods: {
            // emmitFiles(e) {
            //     this.$uploadFiles(e.target.files)
            // }

            emmitFiles(e) {

              this.uploadFiles(e.target.files)
            },
            uploadFiles : async function (files) {

              if (files.length == 0) return

              if (!this.checkFileMimetype(files)) return

              //this.handleUploading(files, undefined,undefined)

              // Prevent submit empty files
              let fps = 0;

              const fileinput = files[0];
              const output = 0;

              const onChangeFile = (mediainfo) => {
                const file = fileinput;

                if (file) {
                  // output.value = 'Working…'
                  const getSize = () => file.size;
                  const readChunk = (chunkSize, offset) =>
                      new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          if (event.target.error) {
                            reject(event.target.error);
                          }
                          resolve(new Uint8Array(event.target.result));
                        }
                        reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize));
                      })

                  mediainfo
                      .analyzeData(getSize, readChunk)
                      .then((result) => {
                   //     console.log('media ;;;;;;;;',result.media.track[1].FrameRate)
                        store.commit('UPDATE_FPS', result.media.track[1].FrameRate)
                        let fps =result.media.track[1].FrameRate

                        this.handleUploading(files, undefined,result.media.track[1].FrameRate)
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                }
              }

              MediaInfo({ format: 'object' }, (mediainfo) => {
                onChangeFile(mediainfo)
               // console.log(mediainfo)
              })
            },

            checkFileMimetype : function(files) {
              let validated = true
              let mimetypesBlacklist = this.$store.getters.config.mimetypesBlacklist

              for (let i = 0 ; i<files.length; i++ ) {
                let fileType = files[i].type.split('/')

                if(!fileType[0]) {
                  fileType[1] = _.last(files[i].name.split('.'))
                }

                if(mimetypesBlacklist.includes(fileType[1])) {
                  validated = false

                  events.$emit('alert:open', {
                    emoji: '😬😬😬',
                    title: i18n.t('popup_mimetypes_blacklist.title'),
                    message: i18n.t('popup_mimetypes_blacklist.message', {mimetype: fileType[1]}),
                  })
                }else {
                  validated = true
                }
              }
              return validated
            },
            handleUploading: async function (files, parent_id,fps) {

             // console.log('file',files[0])
             // console.log('file',fps)
              let fileBuffer = []

              // Append the file list to fileBuffer array
              Array.prototype.push.apply(fileBuffer, files);

              let fileSucceed = 0

              // Update files count in progressbar
              this.$store.commit('UPDATE_FILE_COUNT_PROGRESS', {
                current: fileSucceed,
                total: files.length
              })

              // Reset upload progress to 0
              this.$store.commit('UPLOADING_FILE_PROGRESS', 0)

              // Get parent id
              let parentFolder = this.$store.getters.currentFolder ? this.$store.getters.currentFolder.unique_id : 0
              let rootFolder = parent_id ? parent_id : parentFolder

              // Upload files
              do {
                let file = fileBuffer.shift(),
                    chunks = []

                // Calculate ceils
                let size = this.$store.getters.config.chunkSize,
                    chunksCeil = Math.ceil(file.size / size);

                // Create chunks
                for (let i = 0; i < chunksCeil; i++) {
                  chunks.push(file.slice(
                      i * size, Math.min(i * size + size, file.size), file.type
                  ));
                }

                // Set Data
                let formData = new FormData(),
                    uploadedSize = 0,
                    isNotGeneralError = true,
                    striped_name = file.name.replace(/[^A-Za-z 0-9 \.,\?""!@#\$%\^&\*\(\)-_=\+;:<>\/\\\|\}\{\[\]`~]*/g, ''),
                    filename = Array(16).fill(0).map(x => Math.random().toString(36).charAt(2)).join('') + '-' + striped_name + '.part'

                do {
                  let isLast = chunks.length === 1,
                      chunk = chunks.shift(),
                      attempts = 0
                  //        console.log('fps',fps)
                  // Set form data
                  formData.set('file', chunk, filename);
                  formData.set('parent_id', rootFolder)
                  formData.set('is_last', isLast);
                  formData.set('fps', fps);

                  // Upload chunks
                  do {
                    await this.$store.dispatch('uploadFiles', {
                      form: formData,
                      fileSize: file.size,
                      totalUploadedSize: uploadedSize
                    }).then(() => {
                      uploadedSize = uploadedSize + chunk.size
                    }).catch((error) => {

                      // Count attempts
                      attempts++

                      // Break uploading proccess
                      if (error.response.status === 500)
                        isNotGeneralError = false

                      //Break if mimetype of file is in blacklist
                      if(error.response.status === 415)
                        isNotGeneralError = false

                      // Show Error
                      if (attempts === 3)
                        this.isSomethingWrong()
                    })
                  } while (isNotGeneralError && attempts !== 0 && attempts !== 3)

                } while (isNotGeneralError && chunks.length !== 0)

                fileSucceed++

                // Progress file log
                this.$store.commit('UPDATE_FILE_COUNT_PROGRESS', {
                  current: fileSucceed,
                  total: files.length
                })

              } while (fileBuffer.length !== 0)

              this.$store.commit('UPDATE_FILE_COUNT_PROGRESS', undefined)
            },
            isSomethingWrong: function () {
              events.$emit('alert:open', {
                title: this.$t('popup_error.title'),
                message: this.$t('popup_error.message'),
              })
            },

        }
    }
</script>

<style scoped lang="scss">
    @import '@assets/vue-file-manager/_variables';
    @import '@assets/vue-file-manager/_mixins';

    .button-base {
        @include font-size(15);
        font-weight: 700;
        cursor: pointer;
        transition: 0.15s all ease;
        border-radius: 8px;
        border: 0;
        padding: 10px 28px;
        display: inline-block;

        &:active {
            transform: scale(0.95);
        }

        &.theme {
            color: $theme;
            background: rgba($theme, .1);
        }

        &.secondary {
            color: $text;
            background: $light_background;
        }
    }
</style>
