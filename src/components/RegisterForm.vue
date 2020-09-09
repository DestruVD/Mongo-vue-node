<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="20"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="surname"
      :counter="20"
      :rules="surnameRules"
      label="Surname"
      required
    ></v-text-field>

    <v-text-field
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="showPassword ? 'text' : 'password'"
      v-model="password"
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
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Gender"
      required
    ></v-select>

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
      @click="validate"
    >
      Validate
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      surname: '',
      surnameRules: [
        v => !!v || 'Surname is required',
        v => (v && v.length <= 20) || 'Surname must be less than 10 characters',
      ],
      select: null,
      items: [
        'Male',
        'Female'
      ],
      showPassword: false,
      password: '',
      confirmPassword: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      }
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      }
    },
    computed: {
      ValidatePassword(){
        return (this.password!=this.confirmPassword || (this.password=='' || this.confirmPassword=='')) ? true : false;
      }
    }
  }
</script>