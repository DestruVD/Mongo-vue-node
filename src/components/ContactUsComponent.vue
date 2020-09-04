<template>
    <v-container class="parallax ">
        <v-row class="textCenter">
            <v-col class="marginTop">
                <h5 class="colorWhite">CONTACT US TO GIVE A FEEDBACK OF OUR APPLICATION OR SHARE YOUR EXPERIENCE WITH US!</h5>
            </v-col>
        </v-row>
        <v-row class="textCenter">
            <v-col>
                <h6 class="colorWhite">Complete the contact us form !</h6>
            </v-col>
        </v-row>
        <v-row class="textCenter">
            <v-col>
                <button class="btn btn-success">Contact us</button>
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
.parallax {
  background-image: url("../assets/contact-us-background.jpg");

  height: 40%;
  min-width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.colorWhite{
    color: white;
}
.marginTop{
    margin-top: 150px;
}
.textCenter{
    text-align: center;
}
@media screen and (max-width: 1200px) {
    .parallax{
        background-image: url("../assets/contact-us-background.jpg");
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