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
import RegisterForm from '../components/RegisterForm'

export default {
    name: 'Register',
    components: {
        RegisterForm
    }
}
</script>

<style scoped>
    .marginTop{
        margin-top: 100px;
    }
</style>