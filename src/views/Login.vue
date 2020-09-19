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
import LoginForm from '../components/LoginForm'
export default {
    name: 'Register',
    components: {
        LoginForm
    }
}
</script>

<style scoped>
    .marginTop{
        margin-top: 100px;
    }
    .padding10px{
        padding: 10px;
    }
</style>