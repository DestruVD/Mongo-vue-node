<template>
    <v-container class="parallax min-width paddingTop75 margin50">
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
                    <v-btn depressed small color="primary">Register</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default{
    name: 'WelcomePage',
    components: {
        
    }
}
</script>

<style scoped>
.parallax {
  background-image: url("../assets/Background.jpg");


  /* Full height */
  height: 100%;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.min-width{
    min-width: 100%;
}

.paddingTop75{
    padding-top: 75px;
}
.margin50{
    margin-top:50px !important;
}
.PaddingTop50{
    padding-top: 50px !important;
}
</style>