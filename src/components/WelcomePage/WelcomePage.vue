<template>
    <v-row style="min-width: 100% !important">
        <v-container class="parallax taille paddingTop75 margin50">
            <v-row class="d-flex justify-content-center PaddingTop50">
                <v-col class="col-12 d-flex justify-content-center m-0">
                    <h1>Share your car with other people !</h1>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-content-center">
                <v-col class="d-flex justify-content-center">
                    <span>Welcome to Rent a Car ! Start your journey by creating an account !</span>
                </v-col>
            </v-row>
            <v-row class="d-flex justify-content-center">
                <v-col class="d-flex justify-content-center">
                    <div class="my-2">
                        <router-link class="text-decoNone" to="/Register">
                            <button  v-if="!session" class="btn btn-primary">Register</button>
                        </router-link>
                        <router-link class="text-decoNone" to="/Agenda">
                            <button v-if="session" class="btn btn-primary">Agenda</button>
                        </router-link>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="containerStep">
            <Step />
        </v-container>
        <v-container class="ContactUsParallax d-flex justify-content-center">
            <ContactUs style="margin: 50px !important"/>
        </v-container>
    </v-row>
</template>

<script>
import Step from './Step/Step';
import ContactUs from './ContactUs/ContactUs';

export default{
    name: 'WelcomePage',
    components: {
        Step,
        ContactUs
    },
    data: ()=>({
    }),
    methods: {
        
    },
    computed: {
        session(){
        return this.$store.getters.loggedIn
      }
    }
}
</script>

<style lang="scss" scoped>
    @import url('./WelcomePage.scss');
</style>