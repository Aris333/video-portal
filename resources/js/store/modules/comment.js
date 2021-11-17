import i18n from '@/i18n/index'
import router from '@/router'
import {events} from '@/bus'
import axios from 'axios'



const defaultState = {
   allComments: undefined,
    videoDescription: undefined,
    userComments: undefined,
    likeComments: undefined,
    isGetComment: undefined,
    lastTwoFiles: undefined,
    annotation: undefined,
    isPageLoading: true,
    page_reload: false,
}
const actions = {
    submitComment: ({commit,dispatch},payload) => {

        commit('SET_COMMENT', {loading: true, data:payload })
        let vm =this
        let route ='api/comment/store'
            axios
                .post(route,payload)
                .then(response => {
                    events.$emit('scrollTop')

                //   actions.getComment()
                }).then(()=> {
                commit('IS_GET_COMMENT', true)
                })
                .catch((error) => {
                    // Show error message
                    events.$emit('alert:open', {
                        title: i18n.t('popup_error.title'),
                        message: i18n.t('popup_error.message'),
                    })
                    reject(error)
                })

    },
    replyComment: ({commit},payload) => {
        commit('SET_COMMENT', {loading: true, data:payload })
        let route ='api/comment/addCommentReply'
            axios
                .post(route,payload)
                .then(response => {
                    events.$emit('scrollTop')
                })
                .catch((error) => {
                    // Show error message
                    events.$emit('alert:open', {
                        title: i18n.t('popup_error.title'),
                        message: i18n.t('popup_error.message'),
                    })
                    reject(error)
                })
    },
    updateStatus: ({commit},payload) => {
        let route ='api/update-status'
    axios
        .post(route,payload)
        .then(response => {
            events.$emit('scrollTop')
        })
        .catch((error) => {
            // Show error message
            events.$emit('alert:open', {
                title: i18n.t('popup_error.title'),
                message: i18n.t('popup_error.message'),
            })
            reject(error)
        })
    },
    versionComparison: ({commit},payload) => {
        let path ='api/version-comparison'
    axios
        .post(path,payload)
        .then(response => {
            events.$emit('scrollTop')
           commit('SET_LAST_TWO_FILES',response.data.data)
          commit('SET_PAGE_RELOAD',true)
        })
        .catch((error) => {
            // Show error message
            console.log('error',error)
            events.$emit('alert:open', {
                title: i18n.t('popup_error.title'),
                message: i18n.t('popup_error.message'),
            })
            reject(error)
        })
    },
    likeComment: ({commit},payload) => {

    commit('SET_LIKE_COMMENT', {loading: true, data:payload })
    let route ='api/comment/addCommentLike'
        axios
            .post(route,payload)
            .then(response => {
                events.$emit('scrollTop')
            })
            .catch((error) => {
                // Show error message
                events.$emit('alert:open', {
                    title: i18n.t('popup_error.title'),
                    message: i18n.t('popup_error.message'),
                })
                reject(error)
            })
    },
    fileDescription: ({commit},payload) => {
        commit('SET_VIDEO_DESC', {loading: true, data:payload })
        let route ='api/add-description'
            axios
                .post(route,payload)
                .then(response => {
                    events.$emit('scrollTop')
                })
                .catch((error) => {
                    // Show error message
                    events.$emit('alert:open', {
                        title: i18n.t('popup_error.title'),
                        message: i18n.t('popup_error.message'),
                    })
                    reject(error)
                })
    },
    updateComment: ({commit},payload,baseURL) => {
        let route ='api/comment/updateComment/'+payload.id
        axios
            .post(route,payload)
            .then(response => {
                events.$emit('scrollTop')

            })
        //     .then(()=> {
        //     commit('IS_GET_COMMENT', true)
        // })
            .catch((error) => {
                // Show error message
                events.$emit('alert:open', {
                    title: i18n.t('popup_error.title'),
                    message: i18n.t('popup_error.message'),
                })
                reject(error)
            })
    },
    deleteComment: ({commit},payload) => {
        let route =  'api/comment/deleteComment/'+payload.id
        axios
            .post(route,payload  )
            .then(response => {
                events.$emit('scrollTop')
            })
            .catch((error) => {
                // Show error message
                events.$emit('alert:open', {
                    title: i18n.t('popup_error.title'),
                    message: i18n.t('popup_error.message'),
                })
                reject(error)
            })
    },
    getComment: ({commit},payload) => {
        console.log('commit',payload)
        let route ='/api/comment/list'

        let data ={
            file_id : state.myFileInfo.id
        }
        axios.post(route,data)
            .then(response => {
                //console.log('SET_ALLCOMMENTS', response.data)

             commit('SET_ALLCOMMENTS', response.data.data)

            })  .catch((error) => {
            // Show error message
            events.$emit('alert:open', {
                title: i18n.t('popup_error.title'),
                message: i18n.t('popup_error.message'),
            })
            reject(error)
        })
    },
    getImage: ({commit},payload) => {
        let route ='/api/comment/get-image'
        axios.post(route,payload)
            .then(response => {
                commit('SET_CURRENT_ANNOTATION', response.data.data)
            })  .catch((error) => {
            // Show error message
            events.$emit('alert:open', {
                title: i18n.t('popup_error.title'),
                message: i18n.t('popup_error.message'),
            })
            reject(error)
        })
    },
}
const mutations = {
    SET_COMMENT(state, data) {
        state.userComment = data
    },

    SET_ALLCOMMENTS(state, data) {
        state.allComments = data
    },
    SET_CURRENT_ANNOTATION(state, data) {
        state.annotation = data
    },
    SET_VIDEO_DESC(state, data) {
        state.videoDescription = data
    },
    SET_LIKE_COMMENT(state, data) {
        state.likeComments = data
    },
    UPDATE_ALLCOMMENTS(state, data) {
        state.allComments.push(data)
    },
    IS_GET_COMMENT(state, data) {
        state.isGetComment = data
    },
    IS_PAGE_LOADING(state, data) {
        state.isPageLoading = data
    },
    SET_LAST_TWO_FILES(state, data) {
        state.lastTwoFiles = data
    },
    SET_PAGE_RELOAD(state, data) {
        state.page_reload = data
    }

}
const getters = {
    userComment: state => state.userComment,
    annotation: state => state.annotation,
    allComments: state => state.allComments,
    sharedFileID: state => state.sharedFile.id,
    likeComments: state => state.likeComments,
    isGetComment: state => state.isGetComment,
    isPageLoading: state => state.isPageLoading,
    lastTwoFiles: state => state.lastTwoFiles,
    pageReload: state => state.page_reload,
    }

export default {
    state: defaultState,
    getters,
    actions,
    mutations
}
