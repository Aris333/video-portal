import i18n from '@/i18n/index'
import router from '@/router'
import { events } from '@/bus'
import { last } from 'lodash'
import axios from 'axios'
import jQuery from 'jquery'
import $ from 'jquery'

const actions = {

    changeVersionParent: ({ commit, getters, dispatch }, [item_from, to_item]) => {

        // Get route
        let route = getters.sharedDetail && !getters.sharedDetail.protected ?
            '/api/version/' + item_from.unique_id + '/public/' + router.currentRoute.params.token :
            '/api/version/' + item_from.unique_id

        console.info('item_from::',item_from)
        console.info('to_item::',to_item)
        if(item_from.type =='video' && to_item.type =='video')
        {
            axios
                .post(route, {
                    from_type: item_from.type,
                    from_item: item_from,
                    to_item: to_item,
                    from_unique_id: item_from.unique_id,
                    to_unique_id: to_item.unique_id,
                    _method: 'patch'
                })
                .then(() => {
                    commit('REMOVE_ITEM', to_item.unique_id)

                    if (item_from.type === 'folder' && getters.currentFolder.location !== 'public')
                        dispatch('getAppData')

                })
                .catch(() => isSomethingWrong())
        }

        if(item_from.type =='image' && to_item.type =='image'){
            axios
                .post(route, {
                    from_type: item_from.type,
                    from_item: item_from,
                    to_item: to_item,
                    from_unique_id: item_from.unique_id,
                    to_unique_id: to_item.unique_id,
                    _method: 'patch'
                })
                .then(() => {
                    commit('REMOVE_ITEM', to_item.unique_id)

                    if (item_from.type === 'folder' && getters.currentFolder.location !== 'public')
                        dispatch('getAppData')

                })
                .catch(() => isSomethingWrong())
        }
    },

    makeVersion: ({ commit, getters, dispatch }, [item_from, to_item]) => {

        // Get route
        let route = getters.sharedDetail && !getters.sharedDetail.protected ?
            '/api/version/' + item_from.unique_id + '/public/' + router.currentRoute.params.token :
            '/api/version/' + item_from.unique_id

        console.info('item_from::',item_from)
        console.info('to_item::',to_item)
        if(item_from.type =='video' && to_item.type =='video')
        {
            axios
                .post(route, {
                    from_type: item_from.type,
                    from_item: item_from,
                    to_item: to_item,
                    from_unique_id: item_from.unique_id,
                    to_unique_id: to_item.unique_id,
                    _method: 'patch'
                })
                .then(() => {
                    commit('REMOVE_ITEM', to_item.unique_id)
                    // dispatch('getVersion',to_item.id)
                    if (item_from.type === 'folder' && getters.currentFolder.location !== 'public')
                        dispatch('getAppData')
                })
                .catch(() => isSomethingWrong())
        }

        if(item_from.type =='image' && to_item.type =='image'){
               axios
                .post(route, {
                    from_type: item_from.type,
                    from_item: item_from,
                    to_item: to_item,
                    from_unique_id: item_from.unique_id,
                    to_unique_id: to_item.unique_id,
                    _method: 'patch'
                })
                .then(() => {
                    commit('REMOVE_ITEM', to_item.unique_id)
                    // dispatch('getVersion',to_item.id)
                    if (item_from.type === 'folder' && getters.currentFolder.location !== 'public')
                        dispatch('getAppData')
                })
                .catch(() => isSomethingWrong())
        }
    },

    getVersion: ({ commit, getters, dispatch }, data) => {

             let formData = {
                               'id': data.id
                            }
            let route = 'api/version'
             axios
            .post(route, formData)
            .then(res => {
                commit('SET_VER_LIST',res.data.data)
            })
            .catch((error) => {
                // Show error message
                events.$emit('alert:open', {
                    title: i18n.t('popup_error.title'),
                    message: i18n.t('popup_error.message'),
                })
            })
    },

    moveItem: ({ commit, getters, dispatch }, [item_from, to_item]) => {

        // Get route
        let route = getters.sharedDetail && !getters.sharedDetail.protected ?
            '/api/move/' + item_from.unique_id + '/public/' + router.currentRoute.params.token :
            '/api/move/' + item_from.unique_id

        axios
            .post(route, {
                from_type: item_from.type,
                to_unique_id: to_item.unique_id,
                _method: 'patch'
            })
            .then(() => {
                commit('REMOVE_ITEM', item_from.unique_id)
                commit('INCREASE_FOLDER_ITEM', to_item.unique_id)

                if (item_from.type === 'folder' && getters.currentFolder.location !== 'public')
                    dispatch('getAppData')
            })
            .catch(() => isSomethingWrong())
    },

    copyItem: ({ commit, getters, dispatch }, [item_from, to_item]) => {

        // Get route
        let route = getters.sharedDetail && !getters.sharedDetail.protected ?
            '/api/copy/' + item_from.unique_id + '/public/' + router.currentRoute.params.token :
            '/api/copy/' + item_from.unique_id

        axios
            .post(route, {
                from_type: item_from.type,
                to_unique_id: to_item.unique_id,
                _method: 'patch'
            })
            .then(() => {

                // commit('COPY_ITEM', item_from.unique_id)
                commit('INCREASE_FOLDER_ITEM', to_item.unique_id)

                if (item_from.type === 'folder' && getters.currentFolder.location !== 'public')
                    dispatch('getAppData')

            })
            .catch(() => isSomethingWrong())
    },
    createFolder: ({ commit, getters, dispatch }, folderName) => {

        // Get route
        let route = getters.sharedDetail && !getters.sharedDetail.protected ?
            '/api/create-folder/public/' + router.currentRoute.params.token :
            '/api/create-folder'

        axios
            .post(route, {
                parent_id: getters.currentFolder.unique_id,
                name: folderName
            })
            .then(response => {
                commit('ADD_NEW_FOLDER', response.data)

                events.$emit('scrollTop')

                if (getters.currentFolder.location !== 'public') {
                    dispatch('getAppData')
                }
            })
            .catch(() => isSomethingWrong())
    },
    renameItem: ({ commit, getters, dispatch }, data) => {

        // Updated name in favourites panel
        if (getters.permission === 'master' && data.type === 'folder')
            commit('UPDATE_NAME_IN_FAVOURITES', data)

        // Get route
        let route = getters.sharedDetail && !getters.sharedDetail.protected ?
            '/api/rename-item/' + data.unique_id + '/public/' + router.currentRoute.params.token :
            '/api/rename-item/' + data.unique_id

        axios
            .post(route, {
                name: data.name,
                type: data.type,
                _method: 'patch'
            })
            .then(response => {
                commit('CHANGE_ITEM_NAME', response.data)

                if (data.type === 'folder' && getters.currentFolder.location !== 'public')
                    dispatch('getAppData')
            })
            .catch(() => isSomethingWrong())
    },
    uploadFiles: ({ commit, getters }, { form, fileSize, totalUploadedSize }) => {
        return new Promise((resolve, reject) => {

            // Get route
            let route = getters.sharedDetail && !getters.sharedDetail.protected ?
                '/api/upload/public/' + router.currentRoute.params.token :
                '/api/upload';
            var timeStarted = new Date();
            var timeElapsed;
            var uploadSpeed;

            axios
                .post(route, form, {
                    headers: {
                        'Content-Type': 'application/octet-stream'
                    },
                    onUploadProgress: event => {

                        var percentCompleted = Math.floor(((totalUploadedSize + event.loaded) / fileSize) * 100)

                        // var timecontroller = setInterval(function() {
                        timeElapsed = (new Date()) - timeStarted; // Assuming that timeStarted is a Date Object
                        uploadSpeed = event.total / (timeElapsed / 1000); // Upload speed in second
                        // `callback` is the function that shows the time to user.
                        // The only argument is the number of remaining seconds.
                        var totalSize = ((event.total / 1024) / 1024);
                        var remainingSize = ((event.loaded / 1024) / 1024);
                        var timecontroller = remainingSize.toFixed(2) + "MB of " + totalSize.toFixed(2) + "MB";
                        commit('UPLOADING_FILE_PROGRESS', percentCompleted >= 100 ? 100 : percentCompleted)
                        commit('UPLOADING_FILE_TIME', timecontroller)

                        // if (percentCompleted >= 100) {
                        //     commit('PROCESSING_FILE', true)
                        // }
                    }

                })
                .then(response => {
                    // console.log("test response");
                    // console.log(response);
                    commit('PROCESSING_FILE', true)
                    const videoPlayer = document.createElement('video');
                    let x = 0;
                    var thumb_img=null;
                    var frames = 0;
                    // Check if user is in uploading folder, if yes, than show new file
                    if (response.data.folder_id == getters.currentFolder.unique_id)
                        if (response.data.type !== "video") {
                            commit('ADD_NEW_ITEMS', response.data)
                            resolve(response)
                        }
                    if (response.data.type == "video") {
                     var img_array=[];
                     var thumb_array = [];

                     var thumbnail = 0;
                        var j = 0;
                        var file = response.data.file_url;
                            const canvas = document.createElement("canvas");
                            const ctx = canvas.getContext("2d");
                        videoPlayer.setAttribute('src', file);
                        videoPlayer.load();
                        // videoPlayer.addEventListener('loadeddata'),
                        videoPlayer.addEventListener('loadeddata', function() {
                            canvas.width = this.videoWidth;
                            canvas.height = this.videoHeight;
                            if(canvas.height==canvas.width){
                                canvas.height=canvas.height-60;
                            }
                            if(canvas.height>canvas.width){
                                canvas.width=canvas.height+130;
                                canvas.height=canvas.height-130;
                                // console.log(canvas.height/canvas.width);
                            }
                            this.currentTime = x;
                        });

                        // var duration =  Math.floor(videoPlayer.duration);
                        videoPlayer.addEventListener('seeked', function() {
                            // now video has seeked and current frames will show
                            // at the time as we expect
                            var test = ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
                            var img = canvas.toDataURL("image/jpeg");
                            img_array.push(img)
                            thumb_array.push(img);
                            thumbnail=img;
                            x += 1;
                            // if we are not past end, seek to next interval
                            if (x < Math.floor(this.duration) && x<100) {
                              this.currentTime = x;
                            }
                            if(x==Math.floor(this.duration)||x==100){
                                    var photojoiner = (function(){
                                    var drawData = [];
                                    var image;
                                    var canvas_width = 0;
                                    var canvasHeight = 0;
                                    var offset_x = 0;
                                    var module = {};
                                    var img_length = 0;
                                    var canvas =  document.getElementById('joined');
                                        module.join = function( config ){
                                            config = config || {};
                                            images = config.images || [];
                                            canvasHeight = 125;

                                            canvas.height = canvasHeight;
                                            // canvas.width = canvasHeight;
                                            const context = canvas.getContext('2d');
                                            if( images.length > 0 )
                                            {
                                                image = new Image();
                                                image.src = images[0];
                                                //Wait for image load
                                                image.onload = function(){
                                                        images.shift();
                                                        var ratio = image.naturalHeight/canvasHeight;
                                                        var image_width = this.width/ratio;
                                                        var image_height = this.height/ratio;
                                                        drawData.push({
                                                            'image': this,
                                                            'ratio': ratio,
                                                            'scaledWidth' : image_width,
                                                            'scaledHeight' : image_height
                                                        });
                                                        canvas_width += image_width;

                                                        module.join( config );
                                                        thumb_img = canvas.toDataURL("image/jpeg");
                                                        img_length++;
                                                        frames++;

                                                    if(img_array.length==0){
                                                        // console.log(thumb_array[0]);
                                                        let formData = new FormData();
                                                        formData.set('file', thumb_array[0]);
                                                        formData.set('id', response.data.id);
                                                        formData.set('thumbnail_img', thumb_img);
                                                        formData.set('frames', frames);
                                                        let route = getters.sharedDetail && !getters.sharedDetail.protected ?
                                                        '/api/upload/public/' + router.currentRoute.params.token :
                                                        '/api/upload/image';
                                                            axios
                                                                .post(route, formData, {
                                                                    headers: {
                                                                        'Content-Type': 'application/octet-stream'
                                                                    },

                                                                }).then(response => {
                                                                if (response.data.folder_id == getters.currentFolder.unique_id){
                                                                        commit('ADD_NEW_ITEMS', response.data);
                                                                }
                                                                    resolve(response)

                                                                }).catch(error => {

                                                                console.log(error)

                                                                })
                                                    }

                                                };
                                            }else{
                                                canvas.width = canvas_width;
                                                for( var i=0; i<drawData.length; i++ )
                                                {
                                                    var current = drawData[i];
                                                    context.drawImage(current.image, 0, 0, current.image.width, current.image.height, offset_x, 0, current.scaledWidth, current.scaledHeight);
                                                    offset_x += current.scaledWidth;

                                                }

                                            }
                                        };
                                        // console.log( thumb_img);
                                            return module;
                                        })();
                                        var images = img_array;
                                        var test = photojoiner.join({
                                        'images' : images,
                                        'canvasHeight':200
                                        })

                            }

                        });

                }

                })
                .catch(error => {
                    console.log(error);
                    commit('PROCESSING_FILE', false)

                    reject(error)

                    switch (error.response.status) {
                        case 423:
                            events.$emit('alert:open', {
                                emoji: '😬😬😬',
                                title: i18n.t('popup_exceed_limit.title'),
                                message: i18n.t('popup_exceed_limit.message')
                            })
                            break;
                        case 415:
                            events.$emit('alert:open', {
                                emoji: '😬😬😬',
                                title: i18n.t('popup_mimetypes_blacklist.title'),
                                message: i18n.t('popup_mimetypes_blacklist.message')
                            })
                            break;
                        case 413:
                            events.$emit('alert:open', {
                                emoji: '😟😟😟',
                                title: i18n.t('popup_paylod_error.title'),
                                message: i18n.t('popup_paylod_error.message')
                            })
                            break;
                        default:
                            events.$emit('alert:open', {
                                title: i18n.t('popup_error.title'),
                                message: i18n.t('popup_error.message'),
                            })
                            break;
                    }

                    // Reset uploader
                    commit('UPDATE_FILE_COUNT_PROGRESS', undefined)
                })
        })
    },
    restoreItem: ({ commit, getters }, item) => {

        let restoreToHome = false

        // Check if file can be restored to home directory
        if (getters.currentFolder.location === 'trash')
            restoreToHome = true

        // Remove file
        commit('REMOVE_ITEM', item.unique_id)

        // Remove file preview
        commit('CLEAR_FILEINFO_DETAIL')

        axios
            .post(getters.api + '/restore-item/' + item.unique_id, {
                type: item.type,
                to_home: restoreToHome,
                _method: 'patch'
            })
            .catch(() => isSomethingWrong())
    },
    deleteItem: ({ commit, getters, dispatch }, data) => {

        // Remove file
        commit('REMOVE_ITEM', data.unique_id)

        // Remove item from sidebar
        if (getters.permission === 'master') {

            if (data.type === 'folder')
                commit('REMOVE_ITEM_FROM_FAVOURITES', data)
        }

        // Remove file preview
        commit('CLEAR_FILEINFO_DETAIL')

        // Get route
        let route = getters.sharedDetail && !getters.sharedDetail.protected ?
            '/api/remove-item/' + data.unique_id + '/public/' + router.currentRoute.params.token :
            '/api/remove-item/' + data.unique_id

        axios
            .post(route, {
                _method: 'delete',
                data: {
                    type: data.type,
                    force_delete: data.deleted_at ? true : false,
                },
            })
            .then(() => {

                // If is folder, update app data
                if (data.type === 'folder') {

                    if (data.unique_id === getters.currentFolder.unique_id) {

                        if (getters.currentFolder.location === 'public') {
                            dispatch('browseShared', [{ folder: last(getters.browseHistory), back: true, init: false }])
                        } else {
                            dispatch('getFolder', [{ folder: last(getters.browseHistory), back: true, init: false }])
                        }
                    }

                    if (getters.currentFolder.location !== 'public')
                        dispatch('getAppData')
                }
            })
            .catch(() => isSomethingWrong())
    },
    emptyTrash: ({ commit, getters }) => {

        // Clear file browser
        commit('LOADING_STATE', { loading: true, data: [] })

        axios
            .post(getters.api + '/empty-trash', {
                _method: 'delete'
            })
            .then(() => {
                commit('LOADING_STATE', { loading: false, data: [] })
                events.$emit('scrollTop')

                // Remove filfe preview
                commit('CLEAR_FILEINFO_DETAIL')

                // Show success message
                events.$emit('success:open', {
                    title: i18n.t('popup_trashed.title'),
                    message: i18n.t('popup_trashed.message'),
                })
            })
            .catch(() => isSomethingWrong())
    },


//    Comment this area of code to stop the file download automatically
//
//Download Folder files
// downloadFolderImages: ({ commit, getters, dispatch }, data) => {
//     // console.log(data)
//     axios
//         .get('/getImagesfolders/' + data.unique_id)
//         .then(response => {
//             forceFileDownload(response)
//             // commit('DOWNLOAD_FOLDER_IMAGES', response.data)
//         })
//         .catch(() => isSomethingWrong())
//     },
//
// }

//Download Folder images
// function forceFileDownload(response){
//
//     $.each(response.data, function(index, val) {
//         var anchor = document.createElement('a')
//         anchor.href = val.file_url
//         anchor.download = val.name
//         document.body.appendChild(anchor)
//         anchor.click()
//
//     })

}
// Show error message
function isSomethingWrong() {
    events.$emit('alert:open', {
        title: i18n.t('popup_error.title'),
        message: i18n.t('popup_error.message'),
    })
}

export default {
    actions,
}
