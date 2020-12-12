<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      app
      >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Categories
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link

        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Image Gallery</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
          { title: 'Pick a category', icon: 'mdi-cursor-default', to: '/' },
          { title: 'Mountain', icon: 'mdi-image-filter-hdr', to: '/mountains' },
          { title: 'Ocean', icon: 'mdi-wave', to: '/oceans' },
          { title: 'Tropical', icon: 'mdi-palm-tree', to: '/tropical' },
          { title: 'Forest', icon: 'mdi-pine-tree', to: '/forests' },
          { title: 'Snowy', icon: 'mdi-snowflake', to: '/snowy' },
        ],
      }),
  }
</script>