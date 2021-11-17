import axios from 'axios'
import {events} from '@/bus'
import i18n from '@/i18n/index.js'
import router from '@/router'

const defaultState = {
    authorized: false,
    permission: 'master', // master | editor | visitor
    user: undefined,
    auth_check: localStorage.getItem('auth_check') || '',
    userList: undefined,
    currentTeam: undefined,
    currentProjectUserList: undefined,
    remainingUserList: undefined,
}

const actions = {
    getAppData: ({commit, getters}) => {
        return new Promise((resolve, reject) => {
            axios
                .get(getters.api + '/user')
                .then((response) => {
                    resolve(response)

                    // Redirect user if is logged
                    if (router.currentRoute.name === 'SignIn')
                        router.push({ name: 'Files' })

                    commit('RETRIEVE_USER', response.data)

                }).catch((error) => {
                    reject(error)
                localStorage.setItem('auth_check', 'false')
                    // Redirect if unauthenticated
                    if ([401, 403].includes(error.response.status)) {
                        localStorage.setItem('auth_check', 'false')
                        commit('SET_AUTHORIZED', false)

                        //router.push({name: 'SignIn'})
                    }
                }
            )
        })
    },
    logOut: ({getters, commit}) => {
        axios
            .get(getters.api + '/logout')
            .then(() => {

                // Commit Remove Access Token from vuex storage
                commit('DESTROY_DATA')
                localStorage.setItem('auth_check', 'false')
                router.push({name: 'SignIn'})
            })
    },
    addToFavourites: (context, folder) => {

        // Add to storage
        context.commit('ADD_TO_FAVOURITES', folder)

        axios
            .post(context.getters.api + '/folders/favourites', {
                unique_id: folder.unique_id
            })
            .catch(() => {
                // Show error message
                events.$emit('alert:open', {
                    title: i18n.t('popup_error.title'),
                    message: i18n.t('popup_error.message'),
                })
            })
    },
    removeFromFavourites: (context, folder) => {

        // Remove from storage
        context.commit('REMOVE_ITEM_FROM_FAVOURITES', folder)

        axios
            .post(context.getters.api + '/folders/favourites/' + folder.unique_id, {
                _method: 'delete'
            })
            .catch(() => {
                // Show error message
                events.$emit('alert:open', {
                    title: i18n.t('popup_error.title'),
                    message: i18n.t('popup_error.message'),
                })
            })
    },
    SET_AUTHORIZED: ({commit, state},payload) => {
        commit('SET_AUTHORIZED',payload)
    },
}

const mutations = {

    SET_CURRENT_PROJECT_USER_LIST(state, data) {
        state.currentProjectUserList = data
    },
    SET_CURRENT_TEAM(state, data) {
        state.currentTeam = data
    },
    SET_REMIANING_USER_LIST(state, data) {
        state.remainingUserList = data
    },

    SET_USER_LIST(state, data) {
        state.userList = data
    },

    SET_AUTHORIZED(state, data) {
        state.authorized = data
    },
    RETRIEVE_USER(state, user) {
        state.user = user
    },
    SET_PERMISSION(state, role) {
        state.permission = role
    },
    DESTROY_DATA(state) {
        state.authorized = false
        state.app = undefined
    },
    ADD_TO_FAVOURITES(state, folder) {
        state.user.relationships.favourites.data.attributes.folders.push({
            unique_id: folder.unique_id,
            name: folder.name,
            type: folder.type,
        })
    },
    UPDATE_NAME(state, name) {
        state.user.data.attributes.name = name
    },
    UPDATE_AVATAR(state, avatar) {
        state.user.data.attributes.avatar = avatar
    },
    REMOVE_ITEM_FROM_FAVOURITES(state, item) {
        state.user.relationships.favourites.data.attributes.folders = state.user.relationships.favourites.data.attributes.folders.filter(folder => folder.unique_id !== item.unique_id)
    },
    UPDATE_NAME_IN_FAVOURITES(state, data) {
        state.user.relationships.favourites.data.attributes.folders.find(folder => {
            if (folder.unique_id == data.unique_id) folder.name = data.name
        })
    }
}

const getters = {
    permission: state => state.permission,
    isGuest: state => ! state.authorized,
    isLogged: state => state.authorized,
    isLoggedIn: state => state.auth_check,
    user: state => state.user,
    userList: state => state.userList,
    currentProjectUserList: state => state.currentProjectUserList,
    currentTeam: state => state.currentTeam,
    remainingUserList: state => state.remainingUserList,
}

export default {
    state: defaultState,
    getters,
    actions,
    mutations
}
