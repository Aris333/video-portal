import i18n from '@/i18n/index'
import router from '@/router'
import {events} from '@/bus'
import axios from 'axios'

const defaultState = {
    permissionOptions: [
        {
            label: i18n.t('shared.editor'),
            value: 'editor',
            icon: 'user-edit',
        },
        {
            label: i18n.t('shared.visitor'),
            value: 'visitor',
            icon: 'user',
        },
    ],
    sharedDetail: undefined,
    sharedFile: undefined,
    team: undefined,
    versionList: undefined,
    teamDetails: undefined,
}
const actions = {
    browseShared: ({commit, getters}, [payload]) => {
        commit('LOADING_STATE', {loading: true, data: []})

        if (payload.init)
            commit('FLUSH_FOLDER_HISTORY')

        // Clear search
        if (getters.isSearching) {
            commit('CHANGE_SEARCHING_STATE', false)
            events.$emit('clear-query')
        }

        if (! payload.back)
            commit('STORE_PREVIOUS_FOLDER', getters.currentFolder)

        payload.folder.location = 'public'

        let route = getters.sharedDetail.protected
            ? '/api/folders/' + payload.folder.unique_id + '/private'
             : '/api/folders/' + payload.folder.unique_id + '/' + router.currentRoute.params.token
            //   : '/api/folders/' + payload.folder.unique_id + '/public/' + router.currentRoute.params.token

        return new Promise((resolve, reject) => {
            axios
                .get(route)
                .then(response => {
                    commit('LOADING_STATE', {loading: false, data: response.data})
                    commit('STORE_CURRENT_FOLDER', payload.folder)
                    events.$emit('scrollTop')

                    if (payload.back)
                        commit('REMOVE_BROWSER_HISTORY')
                    resolve(response)
                })
                .catch((error) => {
                    // Show error message
                    events.$emit('alert:open', {
                        title: i18n.t('popup_error.title'),
                        message: i18n.t('popup_error.message'),
                    })
                    reject(error)
                })
        })
    },
    getSingleFile: ({commit, state}) => {

        let route = state.sharedDetail.protected
            ? '/api/files/private'
            : '/api/files/' + router.currentRoute.params.token + '/public'

        axios.get(route)
            .then(response => {
                commit('STORE_SHARED_FILE', response.data)
            })
    },

    getSingleFileCustom: ({commit, state}) => {

        let route = state.sharedDetail.protected
            ? '/api/files/private'
            : '/api/files-byToken/' + router.currentRoute.params.token

        axios.get(route)
            .then(response => {
                commit('STORE_SHARED_FILE', response.data)
               setTimeout(function (){
                   commit('IS_PAGE_LOADING', false)
               },400)

            })
    },

    getTeamFile: ({commit, state}) => {

        let route = '/api/team/private'


        axios.get(route)
            .then(response => {
                commit('STORE_SHARED_FILE', response.data)
            })
    },
}
const mutations = {
    SET_SHARED_DETAIL(state, data) {
        state.sharedDetail = data
    },
    STORE_SHARED_FILE(state, data) {
        state.sharedFile = data
    },
    STORE_TEAM(state, data) {
        state.team = data
    },
    INVITE_TEAM_DETAIL(state, data) {
        state.teamDetails = data
    },
    SET_VER_LIST(state, data) {
        state.versionList = data
    }
}
const getters = {
    permissionOptions: state => state.permissionOptions,
    sharedDetail: state => state.sharedDetail,
    sharedFile: state => state.sharedFile,
    team: state => state.team,
    teamDetails: state => state.teamDetails,
    versionList: state => state.versionList,
    versionListLength: state => state.versionList.length,
}

export default {
    state: defaultState,
    getters,
    actions,
    mutations
}
