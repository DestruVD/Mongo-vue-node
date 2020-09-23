<template>
    <v-container class="ContainerPerso">
        <WelcomePage />
    </v-container>
</template>

<script>
import WelcomePage from '../../components/WelcomePage/WelcomePage'
    export default {
        components: {
            WelcomePage
        }
    }
</script>

<style lang="scss" scoped>
 @import url('./WelcomePage.scss');
</style>