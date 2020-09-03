<template>
     <v-card height="0px">
    <v-footer
      class="footer"
    >
      <v-card
        flat
        tile
        width="100%"
        class="blue text-center"
      >
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Rent A Car</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    .footer{
        min-width: 100%;
        padding: 0px;
        bottom: 0 !important;
        position: absolute !important;
    }
</style>