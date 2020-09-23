<template>
    <v-container>
        <v-row class="textCenter">
            <v-col>
                <h5 class="colorDark">CONTACT US TO GIVE A FEEDBACK OF OUR APPLICATION OR SHARE YOUR EXPERIENCE WITH US!</h5>
            </v-col>
        </v-row>
        <v-row class="textCenter">
            <v-col>
                <h6 class="colorDark">Complete the contact us form !</h6>
            </v-col>
        </v-row>
        <v-row class="textCenter">
            <v-col>
                <router-link to="/ContactUs">
                    <button class="btn btn-success">Contact us</button>
                </router-link>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'ContactUs'
}
</script>

<style scoped>
    @import url('./ContactUs.scss');
</style>