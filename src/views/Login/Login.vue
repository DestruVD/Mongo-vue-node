<template>
    <v-container>
        <v-row>
            <v-col>
                <LoginForm class="marginTop padding10px"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import LoginForm from '../../components/Login/LoginForm'
export default {
    name: 'Register',
    components: {
        LoginForm
    }
}
</script>

<style scoped>
    @import url('./Login.scss');
</style>