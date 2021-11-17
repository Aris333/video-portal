<template>
  <AuthContentWrapper ref="auth">

    <!--Registration-->
    <AuthContent name="sign-up" :visible="true">

      <ValidationObserver @submit.prevent="addPackage" ref="add_package" v-slot="{ invalid }" tag="form"
                          class="form block-form">

        <div class="block-wrapper">
          <label>{{ $t('page_package.label_name') }}</label>
          <ValidationProvider tag="div" mode="passive" class="input-wrapper" name="Name" rules="required"
                              v-slot="{ errors }">
            <input v-model="package.name" :placeholder="$t('page_package.placeholder_name')" type="text"
                   :class="{'is-error': errors[0]}"/>
            <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="block-wrapper">
          <label>{{ $t('page_package.label_cost') }}</label>
          <ValidationProvider tag="div" mode="passive" class="input-wrapper" name="Cost" rules="required"
                              v-slot="{ errors }">
            <input v-model="package.cost" :placeholder="$t('page_package.placeholder_cost')" type="text"
                   :class="{'is-error': errors[0]}"/>
            <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="block-wrapper">
          <label>{{ $t('page_package.label_size') }}</label>
          <ValidationProvider tag="div" mode="passive" class="input-wrapper" name="Size"
                              rules="required" v-slot="{ errors }">
            <input v-model="package.size" :placeholder="$t('page_package.placeholder_size')" type="text"
                   :class="{'is-error': errors[0]}"/>
            <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div class="block-wrapper">
          <label>{{ $t('page_package.label_duration') }}</label>
          <ValidationProvider tag="div" mode="passive" class="input-wrapper" name="Duration"
                              rules="required" v-slot="{ errors }">
            <input v-model="package.duration" :placeholder="$t('page_package.placeholder_duration')" type="text"
                   :class="{'is-error': errors[0]}"/>
            <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>
        <div class="block-wrapper">
          <label>{{ $t('page_package.label_details') }}</label>

<!--          <ValidationProvider tag="div" mode="passive" class="input-wrapper" name="Detail"-->
<!--                              rules="required" v-slot="{ errors }">-->
            <ckeditor @input="updateField"   v-model="package.detail"></ckeditor>
<!--            <span class="error-message" v-if="errors[0]">{{ errors[0] }}</span>-->

<!--          </ValidationProvider>-->
        </div>

        <div>

          <AuthButton icon="chevron-right" :text="$t('page_package.title')" :loading="isLoading" :disabled="isLoading"/>
        </div>
      </ValidationObserver>

    </AuthContent>

  </AuthContentWrapper>

</template>

<script>
    import AuthContentWrapper from '@/components/Auth/AuthContentWrapper'
    import AuthContent from '@/components/Auth/AuthContent'
    import AuthButton from '@/components/Auth/AuthButton'
    import {mapGetters} from 'vuex'
    import PlanPricingTables from '@/components/Others/PlanPricingTables'
    import MobileHeader from '@/components/Mobile/MobileHeader'
    import PageHeader from '@/components/Others/PageHeader'
    import Spinner from '@/components/FilesView/Spinner'
    import { CloudIcon } from 'vue-feather-icons'
    import {events} from "@/bus"
    import axios from 'axios'
    import {ValidationObserver, ValidationProvider} from "vee-validate/dist/vee-validate.full";
    import {required} from "vee-validate/dist/rules";
    export default {
        name: 'AddPackage',
        components: {
            PlanPricingTables,
            MobileHeader,
            PageHeader,
            CloudIcon,
            Spinner,

          AuthContentWrapper,
          ValidationProvider,
          ValidationObserver,
          AuthContent,
          AuthButton,

          required,
        },
        data() {
            return {
                isLoading: false,
              package: {
                name: '',
                cost: '',
                size: '',
                duration: '',
                detail: '',
              }
            }
        },
        methods: {
          updateField: function() {
            this.$emit('input',String(this.content));
          },
            onLoadPricingTables(state) {
                this.isLoading = state
            },
            onSelectTable(plan) {
                this.$store.commit('STORE_REQUESTED_PLAN', plan)
            },
          async addPackage() {

            // Validate fields
            const isValid = await this.$refs.add_package.validate();

            if (!isValid) return;

            // Start loading
            this.isLoading = true

            // Send request to get user token
            axios
                .post('/api/package-create', this.package)
                .then(() => {

                  // End loading
                  this.isLoading = false

                  // Set login state
                  this.$store.commit('SET_AUTHORIZED', true)

                  // Go to files page
                  this.$router.push({name: 'Package'})
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
      watch: {
        value: function() {
          this.package.detail = this.value;
        }
      },
        beforeMount() {
            let StripeElementsScript = document.createElement('script')

            StripeElementsScript.setAttribute('src', 'https://js.stripe.com/v3/')
            document.head.appendChild(StripeElementsScript)
        },
        mounted() {
            // Reload user data
            this.$store.dispatch('getAppData')
        }
    }
</script>

<style lang="scss" scoped>

    @import '@assets/vue-file-manager/_variables';
    @import '@assets/vue-file-manager/_mixins';
    @import '@assets/vue-file-manager/_forms';

    .auth-form{
      margin:35px;
    }
    .plan-title {
        text-align: center;
        max-width: 600px;
        margin: 0 auto 80px;

        path, line, polyline, rect, circle {
            color: $theme;
        }

        h1 {
            @include font-size(38);
            font-weight: 800;
            margin-bottom: 5px;
        }

        h2 {
            @include font-size(20);
            font-weight: 500;
        }
    }

    @media only screen and (max-width: 960px) {

    }

    @media (prefers-color-scheme: dark) {
        .plan-title {

            h1 {
                color: $dark_mode_text_primary;
            }

            h2 {
                color: $dark_mode_text_secondary;
            }
        }
    }

</style>
