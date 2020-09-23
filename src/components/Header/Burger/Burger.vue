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
      <v-list v-if="!session" class="z-index">
        <v-list-item class="paddingLeftright"
        v-for="(item, index) in items"
        :key="index"
        >
          <router-link style="text-decoration: none;" :to=item.title><v-list-item-title style="color: black;">{{ item.title }}</v-list-item-title></router-link>
        </v-list-item>
      </v-list>
      
      <v-list v-if="session" class="z-index">
        <v-list-item class="paddingLeftright"
        v-for="(item, index) in itemsConnected"
        :key="index"
        >
          <router-link style="text-decoration: none;" :to=item.place><v-list-item-title @click="item.disconnect ? disconnect() : false ;" style="color: black;">{{ item.title }}</v-list-item-title></router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import {items, itemsConnected} from './BurgerData'
export default {
    name: 'Burger',
    data: () => ({
      items: items,
      itemsConnected: itemsConnected 
    }),
    methods:{
      disconnect(){
        this.$store.commit('disconnect')
      }
    },
    computed: {
      session(){
        return this.$store.getters.loggedIn
      }
    }
}
</script>

<style lang='scss' scoped>
  @import url('./Burger.scss');
</style>