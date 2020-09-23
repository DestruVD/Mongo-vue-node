<template>
    <v-row class="bg-perso min-width marginBot">
        <v-col class="col-12">
            <h3 style="text-align: center;">It's very simple !</h3>
        </v-col>
        <v-col v-for="item in card" :key=item.index class="col-4">
            <Card :cards="item"/>
        </v-col>
    </v-row>
</template>

<script>
import Card from './StepCard/Card';
import StepData from './StepData'

    export default {
        name: 'Step',
        components: {
            Card
        },
        data: () => ({
            card :  StepData
        }),
    }
</script>

<style lang="scss" scoped>
    @import url('./Step.scss');
</style>