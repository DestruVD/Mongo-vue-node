<template>
    <v-container class="ContainerPerso">
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
                        <router-link to="/Register">
                            <button class="btn btn-primary">Register</button>
                        </router-link>
                        <button @click="testFunction">Test</button>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="containerStep">
            <StepComponent />
        </v-container>
        <v-container class="ContactUsParallax d-flex justify-content-center">
            <ContactUsComponent style="margin: 50px !important"/>
        </v-container>
    </v-container>
</template>

<script>
import StepComponent from '../components/StepComponent/StepComponent';
import ContactUsComponent from '../components/ContactUsComponent';

export default{
    name: 'WelcomePage',
    components: {
        StepComponent,
        ContactUsComponent
    },
    methods: {
        testFunction(){
            this.axios.get("http://localhost:8080")
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
        }
    }
}
</script>

<style scoped>
.containerStep{
    margin: 0px !important; 
    min-width: 100% !important; 
    padding: 0px !important;
}
.ContainerPerso{
    padding: 0px;
    min-width: 100%;
}

.heightPerso{
    height: 100%;
}

.parallax {
  background-image: url("../assets/Background.jpg");
  height: 100%;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.ContactUsParallax{
  background-image: url("../assets/backgroundContactUs.jpg");
  height: 47%;
  margin: 0px !important;
  min-width: 100% !important;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.taille{
    min-width: 100%;
    min-height: 96vh;
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