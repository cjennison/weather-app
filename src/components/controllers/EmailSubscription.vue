<template lang='pug'>
  .email-subscription-controller(v-loading="processing")
    .info Enter your email address and select your city!
    el-row
      el-col(:span="16", :offset="4")
        el-form(ref="formData", :model="formData", :rules="rules")
          el-form-item(label="Email Address", prop="emailAddress")
            el-input(v-model="formData.email", type='email', name="email-input" required="true")
          el-form-item(label="City and State", prop="location")
            el-select.location-select(v-model="formData.locationIndex", filterable, placeholder="Where do you live?", name="location-select", required="true")
              el-option(v-for="(city, index) in cities",
                        :key="index",
                        :label="cityName(city)",
                        :value="index")
          el-form-item
            el-button(@click="onSubmit", :disabled="disableFormSubmit()" @keyup.enter.native="onSubmit") Subscribe
</template>

<script>
import { validateEmail } from '../../services/FormValidationHelper';
import { store } from '../../services/HttpService';
import cities from '../../data/cities';

export default {
  name: 'email_subscription_controller',
  data () {
    return {
      processing: false,
      cities: cities,
      formData: {
        email: null,
        locationIndex: null
      },
      rules: {
        email: [
          { required: true, validator: validateEmail, trigger: 'blur' }
        ],
        locationIndex: [
          { required: true, message: 'Please select a city and state', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    cityName (cityData) {
      return `${cityData.city}, ${cityData.state}`
    },
    disableFormSubmit () {
      return !this.formData.email || !this.formData.locationIndex
    },
    params (formData) {
      return {
        email: formData.email,
        city: cities[formData.locationIndex].city,
        state: cities[formData.locationIndex].state
      }
    },
    onSubmit () {
      this.$refs.formData.validate((valid) => {
        if (valid) {
          this.processing = store.create('subscriber', this.params(this.formData))
            .then(this.onSuccess)
            .catch(this.onError)
            .then(() => {
              this.processing = null
            })
        }
      })
    },
    onSuccess () {
      this.$message({
        message: 'Subscribed successfully!',
        type: 'success'
      });
    },
    onError () {
      this.$message({
        message: 'There was an issue subscribing you. Please try again.',
        type: 'error'
      });
    }
  }
}
</script>

<style lang='scss' scoped>
  .location-select {
    width: 70%;
  }
</style>