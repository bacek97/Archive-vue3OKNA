<template>
<!-- App.vue -->

<v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      class="pt-4"
      color="grey lighten-3"
      mini-variant
    >
    <v-icon large class="d-block text-center mb-5">mdi-cart</v-icon>
      <v-avatar
        v-for="n in 6"
        :key="n"
        :color="`grey ${n === 0 ? 'darken' : 'lighten'}-1`"
        :size="n === 0 ? 36 : 20"
        class="d-block text-center mx-auto mb-9"
      >12</v-avatar>
    </v-navigation-drawer>

  <v-app-bar app>
     <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
     
     <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      ></v-avatar>

<v-toolbar-title class="ml-n9">{{ $t('title1') }}</v-toolbar-title>
<v-spacer></v-spacer>
    <v-btn
      class="ma-2"
      outlined
    >
      <a class="text-decoration-none" href="tel:+79005553535">+79005553535</a>
    </v-btn>
      <v-avatar
        class="hidden-sm-and-down"
        color="grey darken-1 shrink"
        size="32"
      ></v-avatar>

  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
<svg viewBox="0 0 770 1300">
  <rect :width="width1" height="1300" style="fill:aqua" />
  <line x1="0" y1="0" x2="0" y2="1300" style="stroke:black;stroke-width:1;cursor: pointer" />
    <line x1="90%" y1="0" x2="100%" y2="1300" style="stroke:black;stroke-width:1;cursor: pointer" />
    <foreignObject x="10" y="10" width="100" height="150">
      <div xmlns="http://www.w3.org/1999/xhtml">
            <v-text-field
      :label="width1.toString()"
      hide-details="auto"
    ></v-text-field>
          </div>
  </foreignObject>
</svg>
  <div>
    <h1>Nuxt Mountains</h1>
    <ul>
      <li v-for="mountain of mountains">{{ mountain.title }}</li>
    </ul>
    <!-- <button @click="$fetch">Refresh</button> -->
  </div>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
import { defineComponent, useAsync, useContext, reqRef, useMeta, computed, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  head: {},
  setup(props, { emit }) {
    let drawer = ref(null)
    let width1 = ref(770)
    const { title } = useMeta({ title: 'My page' })
    const { $http } = useContext()
    const mountains = useAsync(() => $http.$get('https://api.nuxtjs.dev/mountains'))

    return { mountains, drawer, width1 }
  },
})
</script>