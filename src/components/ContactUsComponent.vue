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


.colorWhite{
    color: white;
}
.textCenter{
    text-align: center;
}
@media screen and (max-width: 1200px) {
    .parallax{
        background-image: url("../assets/backgroundContactUs.jpg");
        height: 30%;
        min-width: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .marginTop{
        margin-top: 40px !important;
    }
}
</style>