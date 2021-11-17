<template>
  <div id="single-page">
    <div id="page-content" class="large-width center-page" v-show="! isLoading">
      <MobileHeader :title="$router.currentRoute.meta.title"/>
      <div class="content-page">

        <!--Page Title-->
        <div  id="pricing" class="page-title center">
          <h1  class="title">Pick the <span style="color: #41B883;">Best Plan</span> For Your Needs
          </h1></div>
        <div  class="plans-wrapper pricing-tables">
          <article  class="plan">
            <div  class="plan-wrapper">
              <header class="plan-header">
                <div  class="icon">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="26px" height="26px"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round" class="feather feather-hard-drive">
                    <line  x1="22" y1="12" x2="2" y2="12"></line>
                    <path
                          d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    <line  x1="6" y1="16" x2="6.01" y2="16"></line>
                    <line  x1="10" y1="16" x2="10.01" y2="16"></line>
                  </svg>
                </div>
                <h1  class="title">Starter Pack</h1>
                <h2  class="description">
                  The best one for start with
                </h2>
              </header>
              <section class="plan-features"><b data-v-77a81720="" class="storage-size">200GB</b>
                <span class="storage-description">
                  Of Storage Capacity
                </span>
              </section>
              <footer  class="plan-footer">
                <b class="price">
                $9.99/Mo.
                <!---->
                </b>
                <button  class="button outline button" @click.prevent="onSelectTable">
            <span
                class="text-label">
                 Purchase Now
            </span>
                  <!----> <span class="icon">
              <svg aria-hidden="true" focusable="false"
                   data-prefix="fas" data-icon="chevron-right" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                   class="svg-inline--fa fa-chevron-right fa-w-10">
                <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    class="">
                </path>
              </svg>
             </span>
                </button>
              </footer>
            </div>
          </article>
          <article  class="plan">
            <div  class="plan-wrapper">
              <header  class="plan-header">
                <div  class="icon">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="26px" height="26px"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round" class="feather feather-hard-drive">
                    <line  x1="22" y1="12" x2="2" y2="12"></line>
                    <path
                          d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    <line  x1="6" y1="16" x2="6.01" y2="16"></line>
                    <line  x1="10" y1="16" x2="10.01" y2="16"></line>
                  </svg>
                </div>
                <h1  class="title">Professional Pack</h1>
                <h2 class="description">If you need more space.</h2></header>
              <section  class="plan-features"><b data-v-77a81720="" class="storage-size">500GB</b>
                <span  class="storage-description">Of Storage Capacity</span></section>
              <footer  class="plan-footer"><b data-v-77a81720="" class="price">
                $19.99/Mo.
                <!----></b>
                <button  class="button outline button" @click.prevent="onSelectTable">
            <span
                class="text-label">
                         Purchase Now
            </span>
                  <!----> <span class="icon">
              <svg aria-hidden="true" focusable="false"
                   data-prefix="fas" data-icon="chevron-right" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                   class="svg-inline--fa fa-chevron-right fa-w-10">
                <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    class="">
                </path>
              </svg>
             </span>
                </button>
              </footer>
            </div>
          </article>
          <article  class="plan">
            <div  class="plan-wrapper">
              <header  class="plan-header">
                <div  class="icon">
                  <svg  xmlns="http://www.w3.org/2000/svg" width="26px" height="26px"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                       stroke-linejoin="round" class="feather feather-hard-drive">
                    <line  x1="22" y1="12" x2="2" y2="12"></line>
                    <path
                          d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                    <line  x1="6" y1="16" x2="6.01" y2="16"></line>
                    <line x1="10" y1="16" x2="10.01" y2="16"></line>
                  </svg>
                </div>
                <h1  class="title">Business Packs</h1>
                <h2  class="description">When your business start grow up.</h2></header>
              <section  class="plan-features">
                <b  class="storage-size">1TB</b>
                <span
                 class="storage-description">
                  Of Storage Capacity
                </span>
              </section>
              <footer  class="plan-footer">
                <b  class="price">
                $44.99/Mo.
                <!----></b>
                <button  class="button outline button">
            <span
                class="text-label">
              Purchase Now
            </span>
                  <!----> <span class="icon">
              <svg aria-hidden="true" focusable="false"
                   data-prefix="fas" data-icon="chevron-right" role="img"
                   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                   class="svg-inline--fa fa-chevron-right fa-w-10">
                <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    class="">
                </path>
              </svg>
             </span>
                </button>
                </footer>
            </div>
          </article>
        </div>
        <div  class="page-title center"><h2  class="description">
          Your private cloud storage software build on Laravel &amp; Vue.js. No limits &amp; no monthly fees. Trully
          freedom.
        </h2> <a  href="/sign-up" class="sign-up-button">
          <button  class="button outline button">
            <span
             class="text-label">
              Sign Up Now
            </span>
            <!----> <span class="icon">
              <svg aria-hidden="true" focusable="false"
               data-prefix="fas" data-icon="chevron-right" role="img"
               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
               class="svg-inline--fa fa-chevron-right fa-w-10">
                <path
                fill="currentColor"
                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                class="">
                </path>
              </svg>
             </span>
          </button>
        </a></div>


        <!--Pricing Tables-->
        <PlanPricingTables @load="onLoadPricingTables" @selected-plan="onSelectTable"/>
      </div>
    </div>
    <div id="loader" v-if="isLoading">
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import PlanPricingTables from '@/components/Others/PlanPricingTables'
import MobileHeader from '@/components/Mobile/MobileHeader'
import PageHeader from '@/components/Others/PageHeader'
import Spinner from '@/components/FilesView/Spinner'
import {CloudIcon} from 'vue-feather-icons'
import axios from 'axios'

export default {
  name: 'UpgradeKomytPlan',
  components: {
    PlanPricingTables,
    MobileHeader,
    PageHeader,
    CloudIcon,
    Spinner,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    onLoadPricingTables(state) {
      this.isLoading = state
    },
    onSelectTable(plan) {
      this.$store.commit('STORE_REQUESTED_PLAN', plan)
    },
    async submitOrder() {

      // Validate fields
      const isValid = await this.$refs.order.validate();

      if (!isValid) return;

      // Remove error
      this.isError = false

      // Start loading
      this.isSubmitted = true

      // If user don't have credit card, register new
      if (!this.defaultPaymentMethod || this.payByNewCard) {

        const {setupIntent, error} = await stripe.confirmCardSetup(this.clientSecret, {
          payment_method: {
            card: card,
          }
        })

        if (error) {

          // Set error on
          this.isError = true

          // End button spinner
          this.isSubmitted = false

          // Show error message
          this.errorMessage = error.message

        } else {

          axios
              .post('/api/subscription/upgrade', {
                billing: this.billing,
                plan: this.requestedPlan,
                payment: {
                  type: 'stripe',
                  meta: {
                    pm: setupIntent.payment_method,
                  }
                }
              })
              .then(() => this.successOrder())
              .catch((error) => this.errorOrder(error))
              .finally(() => {
                this.isSubmitted = false
              })
        }
      }

      // if user has credit card
      if (this.defaultPaymentMethod && !this.payByNewCard) {

        axios
            .post('/api/subscription/upgrade', {
              billing: this.billing,
              plan: this.requestedPlan,
              payment: {
                type: 'stripe',
              }
            })
            .then(() => this.successOrder())
            .catch((error) => this.errorOrder(error))
            .finally(() => {
              this.isSubmitted = false
            })
      }
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
      //color: $dark_mode_text_primary;
    }

    h2 {
      //color: $dark_mode_text_secondary;
    }
  }
}
.page-wrapper.medium{
  width: 1150px;
}
.page-wrapper{
  position: relative;
  margin: 0 auto;
  padding-left: 25px;
  padding-right: 25px;
}
.pricing{
  padding-top: 250px;
  padding-bottom: 120px;
}
.page-title.center{
  text-align: center;
}
.page-title{
  position: relative;
  z-index: 1;
}
.pricing-tables {
  margin-top: 50px;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}
.plans-wrapper{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.plans-wrapper{
  box-shadow: 0 7px 20px 5px rgba(26, 36, 55, 0.05);
  border-radius: 8px;
  background: white;
}
.plan {
  text-align: center;
  flex: 0 0 33%;
  padding: 55px 25px 75px;
}
.plan .plan-features {
  margin: 55px 0;
}
.plan .plan-header .title{
  font-size: 1.375em;
  font-weight: 800;
  padding-top: 10px;
}
.plan .plan-header .description{
  font-size: 0.875em;
  font-weight: 600;
}
.plan .plan-features .storage-size {
  font-size: 3em;
  font-weight: 900;
  line-height: 1.1;
}
.plan .plan-features .storage-description {
  display: block;
  font-size: 0.9375em;
  font-weight: 800;
}
.plan .plan-footer .price{
  color: #00BC7E;
  font-size: 1.125em;
  display: block;
  padding-top: 5px;
}
.plan{
  text-align: center;
  flex: 0 0 33%;
  padding: 55px 25px 75px;
}
.sign-up-button{
  padding-top: 10px;
  display: block;
}
.page-title.center .description {
  margin-left: auto;
  margin-right: auto;
}
.page-title .description {
  max-width: 580px;
  font-size: 1.25em;
  font-weight: 500;
  line-height: 1.6;
  margin-bottom: 30px;
}
.button.outline{
  border: 2px solid #1B2539;
}
.button.outline{
  border: 2px solid #1B2539;
}
.button.outline .text-label {
  color: #1B2539;
}
.button .text-label{
  transition: 150ms all ease;
  font-size: 1.0625em;
  font-weight: 800;
  line-height: 0;
}

.button.outline:hover .text-label {
  color: #00BC7E;
}
.button{
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
  padding: 12px 32px;
  display: inline-block;
  margin-left: 15px;
  margin-right: 15px;
  white-space: nowrap;
  transition: 150ms all ease;
  background: transparent;
  margin-top: 12px;
}
.button.outline{
  border: 2px solid #1B2539;
}
.button .icon{
  margin-left: 12px;
  font-size: 1em;
}
svg:not(:root).svg-inline--fa {
  overflow: visible;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
</style>
