<template>
    <v-row class="bg-perso min-width marginBot50">
        <v-col class="col-12">
            <h3 style="text-align: center;">It's very simple !</h3>
        </v-col>
        <v-col class="col-4">
            <CardComponent />
        </v-col>
        <v-col class="col-4">
             <CardComponent />
        </v-col>
        <v-col class="col-4">
            <CardComponent />
        </v-col>
    </v-row>
</template>

<script>
import CardComponent from '../components/CardComponent';

    export default {
        name: 'Step',
        components: {
            CardComponent
        }
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
    .marginBot50{
        margin-bottom: 55px !important;
    }
</style>