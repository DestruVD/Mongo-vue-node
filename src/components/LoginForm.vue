<template>
  <v-card class="shadow">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="pseudo"
        :counter="20"
        :rules="pseudoRules"
        label="Pseudo"
        required
      ></v-text-field>

      <v-text-field
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="showPassword ? 'text' : 'password'"
      v-model="password"
      name="Password"
      label="Password"
      hint="At least 3 characters"
      value="Password"
      @click:append="showPassword = !showPassword"
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
        :disabled="buttonEnabled"
        color="success"
        class="mr-4"
        @click="validate(); LoginRequest();"
      >
        Login
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
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
      }
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      LoginRequest(){
        console.log(this.password)
        this.axios.post("http://localhost:3000/api/users/pseudo",{
              pseudo: this.pseudo,
              password: this.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
      }
    },
    computed: {
      buttonEnabled(){
        return (this.password=='' || this.pseudo=='' ? true : false);
      }
    }
  }
</script>