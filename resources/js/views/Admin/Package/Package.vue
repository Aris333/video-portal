<template>
  <div id="single-page">
    <div id="page-content">
      <MobileHeader :title="$router.currentRoute.meta.title"/>


      <div class="content-page">

        <!--Table tools-->
        <div class="table-tools">
          <div class="buttons">
            <router-link :to="{name: 'AddPackage'}">
              <MobileActionButton icon="add-package">
                {{ $t('admin_pages.packages.submit') }}
              </MobileActionButton>
            </router-link>
          </div>
        </div>

        <!--Datatable-->
        <DatatableWrapper @init="isLoading = false" api="/api/packages" :paginator="true" :columns="columns" class="table table-users">
        {{row}}
          <template slot-scope="{ row }">
            <tr>
              <td style="min-width: 320px">
                <router-link :to="{name: 'UserDetail', params: {id: row.data.id}}">
                  <DatatableCellImage
                      :name="row.data.name"
                      :cost="row.data.cost"
                      :size="row.data.size"
                      :duration="row.data.duration"
                      :details="row.data.details"
                  />
                </router-link>
              </td>
              <td>
                                <span class="cell-item">
                                    {{ row.data.name}}
                                </span>
              </td>
              <td >
                                <span class="cell-item">
                                    {{ row.data.cost }}
                                </span>
              </td>
              <td>
                                <span class="cell-item">
                                        {{ row.data.size }}
                                </span>
              </td>
              <td>
                                <span class="cell-item">
                                        {{ row.data.duration }}
                                </span>
              </td>
              <td>
                                <span class="cell-item">
                                        {{ row.data.details }}
                                </span>
              </td>
              <td>
                <div class="action-icons">
                  <router-link :to="{name: 'UserDetail', params: {id: row.data.id}}">
                    <edit-2-icon size="15" class="icon icon-edit"></edit-2-icon>
                  </router-link>
                  <router-link :to="{name: 'UserDelete', params: {id: row.data.id}}">
                    <trash2-icon size="15" class="icon icon-trash"></trash2-icon>
                  </router-link>
                </div>
              </td>
            </tr>
          </template>
        </DatatableWrapper>
      </div>
    </div>
    <div id="loader" v-if="isLoading">
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import DatatableCellImage from '@/components/Others/Tables/DatatableCellImage'
import DatatableWrapper from '@/components/Others/Tables/DatatableWrapper'
import MobileActionButton from '@/components/FilesView/MobileActionButton'
import MobileHeader from '@/components/Mobile/MobileHeader'
import SectionTitle from '@/components/Others/SectionTitle'
import ButtonBase from '@/components/FilesView/ButtonBase'
import {Trash2Icon, Edit2Icon} from "vue-feather-icons";
import PageHeader from '@/components/Others/PageHeader'
import ColorLabel from '@/components/Others/ColorLabel'
import Spinner from '@/components/FilesView/Spinner'
import {mapGetters} from "vuex"
import axios from 'axios'

export default {
  name: 'Package',
  components: {
    DatatableCellImage,
    MobileActionButton,
    DatatableWrapper,
    SectionTitle,
    MobileHeader,
    Trash2Icon,
    PageHeader,
    ButtonBase,
    ColorLabel,
    Edit2Icon,
    Spinner,
  },
  computed: {
    ...mapGetters(['config']),
  },
  data() {
    return {
      isLoading: true,
      columns: undefined,
    }
  },
  methods: {
    async getPackage() {

      // Start loading
      this.isLoading = true

      // Send request to get user token
      axios
          .get('/api/packages')
          .then(() => {

            // End loading
            this.isLoading = false

            // Set login state
            this.$store.commit('SET_AUTHORIZED', true)

          })
          .catch(error => {

            if (error.response.status == 401) {

              if (error.response.data.error === 'invalid_client') {
                events.$emit('alert:open', {
                  emoji: '🤔',
                  title: this.$t('popup_passport_error.title'),
                  message: this.$t('popup_passport_error.message')
                })
              }
            }

            if (error.response.status == 500) {
              console.log('response-status::',error.response)
              events.$emit('alert:open', {
                emoji: '🤔',
                title: this.$t('popup_signup_error.title'),
                message: error.response.message
                // message: this.$t('popup_signup_error.message')
              })
            }
            console.log('error.response.status',error.response.status)
            console.log('error.response',error.response)
            if (error.response.status == 422) {


              console.log(error.response.data.error.detail['password'])
              console.log(error.response.data.error.detail['email'])
              if (error.response.data.error.detail['email']) {

                this.$refs.sign_up.setErrors({
                  'E-Mail': error.response.data.error.detail['email']
                });
              }

              if (error.response.data.error.detail.password) {

                this.$refs.sign_up.setErrors({
                  'Your New Password': error.response.data.error.detail['password']
                });
              }
            }

            // End loading
            this.isLoading = false
          })
    }
  },
  created() {
    this.columns = [
      {
        label: this.$t('admin_pages.packages.name'),
        field: 'name',
        sortable: true
      },
      {
        label: this.$t('admin_pages.table.size'),
        field: 'size',
        sortable: true
      },
      {
        label: this.$t('admin_pages.table.cost'),
        field: 'cost',
        sortable: true,
      },
      {
        label: this.$t('admin_pages.packages.table.duration'),
        field: 'duration',
        sortable: true,
      },
      {
        label: this.$t('admin_pages.packages.table.created_at'),
        field: 'created_at',
        sortable: true
      },
      {
        label: this.$t('admin_pages.packages.action'),
        field: 'action',
        sortable: false
      },
    ]
    this.getPackage()
  },
  updated() {
    $('.horizontal').remove()
  }
}
</script>

<style lang="scss" scoped>
@import '@assets/vue-file-manager/_variables';
@import '@assets/vue-file-manager/_mixins';

.table-tools {
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 15px 0 10px;
  position: sticky;
  top: 40px;
  z-index: 9;
}
.menu-list-wrapper{
  display: none !important;
}
.table {

  .cell-item {
    @include font-size(15);
    white-space: nowrap;
  }
}

@media only screen and (max-width: 690px) {
  .table-tools {
    padding: 0 0 5px;
  }
}

@media (prefers-color-scheme: dark) {

  .table-tools {
    background: $dark_mode_background;
  }
}

</style>
