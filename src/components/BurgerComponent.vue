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
      <v-list v-if="!session">
        <v-list-item class="paddingLeftright z-index"
        v-for="(item, index) in items"
        :key="index"
        >
          <router-link style="text-decoration: none;" :to=item.title><v-list-item-title style="color: black;">{{ item.title }}</v-list-item-title></router-link>
        </v-list-item>
      </v-list>
      
      <v-list v-if="session">
        <v-list-item class="paddingLeftright z-index"
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
export default {
    name: 'Burger',
    data: () => ({
      items: [
        { title: 'Agenda' },
        { title: 'Register' },
        { title: 'Login' },
      ],
      itemsConnected: [
        { title: 'Agenda' , place: 'Agenda', disconnect: false},
        { title: 'Profil' , place: 'Profil', disconnect: false},
        { title: 'Logout' , place: '/', disconnect: true},
      ],
    }),
    methods:{
      disconnect(){
        console.log('test1')
        this.$store.dispatch('Disconnect')
      }
    },
    computed: {
      session(){
        return this.$store.getters.loggedIn
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