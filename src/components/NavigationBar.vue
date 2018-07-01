<template>
  <v-app>
    
                    <v-navigation-drawer
                    persistent
                    :mini-variant="miniVariant"
                    :clipped="clipped"
                    v-model="drawer"
                    enable-resize-watcher
                    fixed
                    app
                    >
                    <v-list>
                        <v-list-tile
                        value="true"
                        v-for="(item, i) in items"
                        :key="i"
                        >
                        <v-list-tile-action>
                            <v-icon v-html="item.icon"></v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                    </v-navigation-drawer>
                    
                    <v-toolbar
                    app
                    :clipped-left="clipped"
                    >
                    
                    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                    <v-toolbar-title v-text="title"></v-toolbar-title>
                        <v-layout row wrap> 
                            <v-flex xs1 sm3 md4 lg6 offset-xs2 offset-md2 offset-lg2>
                                <v-text-field flat solo class="nav-search"></v-text-field>
                            </v-flex>
                            <button class="nav-search-btn"><v-icon color="white">search</v-icon></button>
                                <v-spacer></v-spacer>
                                    <v-toolbar-items>
                                    <v-btn flat large>Subscribe</v-btn>
                                    <v-btn flat large>Request</v-btn>
                                    <v-btn flat large><v-icon>perm_identity</v-icon></v-btn>
                                    </v-toolbar-items>
                            
                        </v-layout>
                    
                    </v-toolbar>
             
             
                    
             
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  },
  name: "App"
};
</script>

<style scoped>
    .nav-search{
        margin-top : 8px;
        border : .5px black;
    }

    .nav-search-btn{
        margin-top : 8px;
        height : 48px;
        width : 45px;
        background-color : #E31C9E;
    }
    
</style>