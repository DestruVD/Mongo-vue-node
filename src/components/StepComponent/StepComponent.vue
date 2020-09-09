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
import CardComponent from '../CardComponent';
import StepCardInformation from './StepCardInformation'

    export default {
        name: 'Step',
        components: {
            CardComponent
        },
        data: () => ({
            card :  StepCardInformation
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