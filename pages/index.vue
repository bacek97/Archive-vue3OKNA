<template>
<!-- App.vue -->

<v-app>
  <v-navigation-drawer app>
    <!-- -->
  </v-navigation-drawer>

  <v-app-bar app>
   {{ $t('welcome') }}
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
<nuxt-link :to="localePath('index')">{{ $t('home') }}</nuxt-link>
<nuxt-link :to="localePath('/')">{{ $t('home') }}</nuxt-link>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>