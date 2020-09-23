<template>
  <v-card class="shadow">
    <v-form
      ref="form"
      v-model="user.valid"
      lazy-validation
    >
      <v-text-field
        v-model="user.pseudo"
        :counter="20"
        :rules="user.pseudoRules"
        label="Pseudo"
        required
      ></v-text-field>

      <v-text-field
      :append-icon="user.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[user.rules.required, user.rules.min]"
      :type="user.showPassword ? 'text' : 'password'"
      v-model="user.password"
      name="Password"
      label="Password"
      hint="At least 3 characters"
      value="Password"
      @click:append="user.showPassword = !user.showPassword"
    ></v-text-field>

      <router-link to="/">
        <v-btn
        color="primary"
        class="mr-4 text-decoNone"
        >
          Back
        </v-btn>
      </router-link>

      <router-link class="text-decoNone" to="/">
        <v-btn
          :disabled="buttonEnabled"
          color="success"
          class="mr-4"
          @click="validate(); TryToConnect();"
        >
          Login
        </v-btn>
      </router-link>
    </v-form>
  </v-card>
</template>

<script>
import LoginRequest from './LoginRequest'

  export default {
    data: () => ({
      user:{
        valid: true,
        pseudo: '',
        pseudoRules: [
          v => !!v || 'Pseudo is required',
          v => (v && v.length <= 20) || 'Pseudo must be less than 20 characters',
        ],
        showPassword: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 3 || 'Min 3 characters',
        },
      }
    }),
    methods: {
      validate () {
        this.$refs.form.validate()
      },
      getUser(information){
        const Header = `Bearer ${information.data.accessToken}`
        this.axios.get("http://localhost:3000/api/users/me",{
              headers:{
                "authorization" : Header
              }
            })
            .then(function(response){
              console.log(response)
            })
            .catch(function(response){
              console.log(response)
            })
      },
      TryToConnect(){
        LoginRequest(this.user)
      }
    },
    computed: {
      buttonEnabled(){
        return (this.user.password=='' || this.user.pseudo=='' ? true : false);
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import url('./Login.scss')
</style>