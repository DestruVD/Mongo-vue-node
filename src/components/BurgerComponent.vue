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
        <v-list-item class="paddingLeftright z-index"
        v-for="(item, index) in changeTab"
        :key="index"
        >
          <router-link style="text-decoration: none;" :to=item.title><v-list-item-title style="color: black;">{{ item.title }}</v-list-item-title></router-link>
        </v-list-item>
        <router-link style="text-decoration: none;" to="/"><v-list-item-title style="color: black;" @click="disconnect" v-if="logoutBool">Logout</v-list-item-title></router-link>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
    name: 'Burger',
    data: () => ({

    }),
    methods:{
      disconnect(){
        this.$store.commit('disconnect')
      }
    },
    computed: {
      changeTab(){
        return this.$store.state.items
      },
      logoutBool(){
        return this.$store.state.logoutBool
      }
    }
}
</script>

<style scoped>
  .z-index{
    z-index: 21;
  }
  .paddingLeftright{
    padding-left: 16px;
    padding-right: 16px;
  }
</style>