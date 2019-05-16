<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      app
    >
      <v-list dense>
        <v-list-tile @click="" router to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="" router to="/houses">
          <v-list-tile-action>
            <img class="houses-icon" src="@/assets/images/house.svg" alt="bath_icon">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >Houses</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      <v-list-tile @click="" router to="/hostels">
          <v-list-tile-action>
            <img class="houses-icon" src="@/assets/images/bunk2.svg" alt="bath_icon">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Hostels</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      <v-list-tile @click="" router to="/apartments">
          <v-list-tile-action>
            <img class="houses-icon" src="@/assets/images/building.svg" alt="bath_icon">
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Apartments</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="grey lighten-5" class="elevation-1" fixed app>
      <v-toolbar-title style="width: 200px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down">Housify</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo
        hide-details
        prepend-inner-icon="search"
        label="Search by location"
        class="hidden-sm-and-down elevation-2"
        background-color="grey lighten-5"
      ></v-text-field>
      <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        notifications
      </v-btn>
      <v-btn flat router to="/signup">Signup</v-btn>
      <v-btn flat router to="/login">Signin</v-btn>
      <v-btn flat>Profile</v-btn>
    </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
import Building from '@/assets/images/building.svg';
  export default {
    data: () => ({
      drawer: false
    }),
  }
</script>

<style scoped>
.houses-icon{ 
    border-radius: 10%;
    font-size: 20px;
    height: 20px;
    width: 32px;
    position: relative;
}
</style>

