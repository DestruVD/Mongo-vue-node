<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="user.name"
      :counter="20"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.surname"
      :counter="20"
      :rules="surnameRules"
      label="Surname"
      required
    ></v-text-field>

    <v-text-field
      v-model="user.pseudo"
      :counter="20"
      :rules="pseudoRules"
      label="Pseudo"
      required
    ></v-text-field>

    <v-text-field
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="showPassword ? 'text' : 'password'"
      v-model="user.password"
      name="Password"
      label="Password"
      hint="At least 8 characters"
      @click:append="showPassword = !showPassword"
    ></v-text-field>

    <v-text-field
      :rules="[rules.required, rules.min]"
      :type="showPassword ? 'text' : 'password'"
      v-model="confirmPassword"
      name="Confirm password"
      label="Confirm password"
      hint="At least 8 characters"
      value=""
      @click:append="showPassword = !showPassword"
    ></v-text-field>

    <v-text-field
      v-model="user.email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <router-link to="/">
      <v-btn
      color="primary"
      class="mr-4"
      >
        Back
      </v-btn>
    </router-link>

    <v-btn
      :disabled="ValidatePassword"
      color="success"
      class="mr-4"
      @click="validate(); RegisterPostRequest();"
    >
      Register
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({

      user: {
        name: '',
        email: '',
        pseudo: '',
        surname: '',
        password: '',
      },
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      pseudoRules: [
        v => !!v || 'Pseudo is required',
        v => (v && v.length <= 20) || 'Pseudo must be less than 20 characters',
      ],
      surnameRules: [
        v => !!v || 'Surname is required',
        v => (v && v.length <= 20) || 'Surname must be less than 20 characters',
      ],
      showPassword: false,
      confirmPassword: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 3 || 'Min 3 characters',
      }
    }),

    methods: {
      validate () {
        return this.$refs.form.validate()
      },
      RegisterPostRequest(){
        if(this.validate()==false){
          console.log("error")
        }else{
          this.axios.post("http://localhost:3000/api/users",{ user: this.user })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
        }
      }
    },
    computed: {
      ValidatePassword(){
        return (this.user.password!=this.confirmPassword || (this.user.password=='' || this.confirmPassword=='')) ? true : false;
      }
    }
  }
</script>

<style lang="scss" scoped>
@import url('./RegisterForm.scss');
</style>