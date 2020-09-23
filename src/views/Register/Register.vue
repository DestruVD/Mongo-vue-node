<template>
    <v-container>
        <v-row>
            <v-col>
                <RegisterForm class="marginTop"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import RegisterForm from '../../components/Register/RegisterForm'
export default {
    name: 'Register',
    components: {
        RegisterForm
    }
}
</script>

<style lang="scss" scoped>
    @import url('./Register.scss');
</style>