<template>
    <v-row class="bg-perso min-width marginBot">
        <v-col class="col-12">
            <h3 style="text-align: center;">It's very simple !</h3>
        </v-col>
        <v-col v-for="item in card" :key=item.index class="col-4">
            <CardComponent :urlImg="item.img" :actionText="item.action" :textDesc="item.text" :activableButton="item.activableButton"/>
        </v-col>
    </v-row>
</template>

<script>
import CardComponent from '../components/CardComponent';

    export default {
        name: 'Step',
        components: {
            CardComponent
        },
        data: () => ({
            card: [
                {index: 1,img: require("../assets/step1.png"), action: "Register", 
                    text: "Click the register button and complete the form to create your account and join us !", activableButton: "Register"},
                {index: 2,img: require("../assets/step2.png"), action: "Navigate to the agenda", 
                    text: "You can find all the available car in the Agenda , you can also share your own car !", activableButton: "Visit the agenda"},
                {index: 3,img: require("../assets/step3.png"), action: "Pick a car", 
                    text: "Find a car that you are interested in and get more information about it.", activableButton: "Visit the agenda"}
            ]
        }),
    }
</script>

<style scoped>
    .bg-perso{
        background-color: #faf9f9;
        border-top: 0.1px solid grey;
    }
    .min-width{
        min-width: 100vw;
    }
    .marginBot{
        margin-bottom: 0px !important;
        padding-bottom: 25px;
    }
</style>