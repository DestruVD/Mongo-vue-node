<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ on: menu, attrs }">
        <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-app-bar-nav-icon 
                v-bind="attrs"
                v-on="{ ...tooltip, ...menu }"></v-app-bar-nav-icon>
          </template>
        </v-tooltip>
      </template>
      <v-list>
        <v-list-item class="z-index"
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
    name: 'Burger',
    data: () => ({
      items: [
        { title: 'Home' },
        { title: 'Agenda' },
        { title: 'Register' },
        { title: 'Login' },
      ],
    }),
}
</script>

<style scoped>
  .z-index{
    z-index: 21;
  }
</style>