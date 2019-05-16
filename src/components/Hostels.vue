<template>
  <v-container :class="{'ma-0': $vuetify.breakpoint.smAndDown, 'ma-5': $vuetify.breakpoint.mdAndUp}" grid-list-md text-xs-center>
    <v-layout  style="left: 70px !important;right: 30px;position: relative;" wrap>
      <v-flex key="`3${i}`" xs4 v-for="meetup in meetups" :key="meetup.id">
        <v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Grandsparkville</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span>Nairobi, Kileleshwa</span><br>
            <span class="grey--text">Ksh 100, 000</span><br>
          </div>
        </v-card-title>
        <v-card-actions>
          <img class="tab-icon" src="@/assets/images/bathtub.svg" alt="bath_icon"><span>3</span>
          <img class="tab-icon" src="@/assets/images/bed.svg" alt="bath_icon"><span>2</span>
        </v-card-actions>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      meetups: [
        {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Meetup in New York',
        date: new Date(),
        location: 'New York',
        description: 'New York, New York!'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Meetup in Paris',
        date: new Date(),
        location: 'Paris',
        description: 'It\'s Paris!'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Meetup in New York',
        date: new Date(),
        location: 'New York',
        description: 'New York, New York!'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Meetup in Paris',
        date: new Date(),
        location: 'Paris',
        description: 'It\'s Paris!'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Meetup in New York',
        date: new Date(),
        location: 'New York',
        description: 'New York, New York!'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Meetup in Paris',
        date: new Date(),
        location: 'Paris',
        description: 'It\'s Paris!'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Meetup in Paris',
        date: new Date(),
        location: 'Paris',
        description: 'It\'s Paris!'
      }
      ]
    })
    
  }
</script>

<style scoped>
.tab-icon{ 
    padding: 7px;
    border-radius: 10%;
    font-size: 50px;
    height: 40px;
    width: 62px;
    position: relative;
    margin-left: 5px;
}
</style>
