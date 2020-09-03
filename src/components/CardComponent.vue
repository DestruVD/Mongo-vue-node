<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-text>
      <div>Word of the Day</div>
      <img class="mw " src="../assets/step1.png" alt="">
      <p>adjective</p>
      <div class="text--primary">
        well meaning and kindly.<br>
        "a benevolent smile"
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Register
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default{
    name: 'Card'
}
</script>

<style scoped>
    .mw{
        max-width: 60%;
    }
</style>