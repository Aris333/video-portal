import Vuex from 'vuex'
import Vue from 'vue'

import fileFunctions from './modules/fileFunctions'
import fileBrowser from './modules/fileBrowser'
import userAuth from './modules/userAuth'
import sharing from './modules/sharing'
import comment from './modules/comment'
import app from './modules/app'
import axios from 'axios'
// import createPersistedState from "vuex-persistedstate";
import config from '../../../config';

axios.create({
    baseURL: config.API_URL_ROOT
});
//axios.defaults.baseURL = "http://35.178.230.240/komyt/public/"
//  axios.defaults.baseURL = process.env.MIX_API_BASE_URL
 axios.defaults.baseURL = config.API_URL_ROOT
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        fileFunctions,
        fileBrowser,
        userAuth,
        sharing,
        app,
        comment
    },
    // plugins: [createPersistedState()]
})
