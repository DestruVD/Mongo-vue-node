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
          <router-link style="text-decoration: none;" :to=item.title><v-list-item-title style="color: black;">{{ item.title }}</v-list-item-title></router-link>
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