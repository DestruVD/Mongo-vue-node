<template>
    <v-container class="parallax min-width paddingTop75">
        <v-row class="parallax d-flex justify-content-center">
            <v-col class="col-6 d-flex justify-content-center">
                <h1>Share your car with other people !</h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default{
    name: 'WelcomePage'
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
</style>