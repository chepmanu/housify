<template>
<v-container :class="{'ma-0': $vuetify.breakpoint.smAndDown, 'ma-5': $vuetify.breakpoint.mdAndUp}" grid-list-md text-xs-cente>
    <div>
    <v-item-group >
        <h2 class=".display-3">Hey user, we have</h2>
        <v-container grid-list-md>
        <v-layout wrap>
            <v-flex
            v-for="item in items"
            :key="item.title"
            xs12
            md4
            >
            <v-item>
                <v-card
                slot-scope="{ active, toggle }"
                class="d-flex align-center"
                height="200"
                :to="item.link"
                >
                <v-img
          class="white--text"
          height="200px"
          src="https://a0.muscache.com/im/pictures/606c3478-4931-4b6d-8cd4-406355c1efc5.jpg?aki_policy=x_large"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{item.title}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
 
                <v-scroll-y-transition>
                    <div
                    v-if="active"
                    class="display-3 text-xs-center"
                    >
                    Active
                    </div>
                </v-scroll-y-transition>
                </v-card>
            </v-item>
            </v-flex>
        </v-layout>
        </v-container>
</v-item-group>
<v-spacer></v-spacer>
</div>
<div class="ma-5">
    <md-card>
    <md-card-actions>
      <div class="md-subhead">
          <h3>Featured Houses</h3>
      </div>
    </md-card-actions>
    <md-card-media style="background-color: red;color:red;bottom:20px!important;">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in items3" :key="item"><v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://a0.muscache.com/im/pictures/f3e7368d-6c91-41ac-9545-b711abc27f73.jpg?aki_policy=x_large"
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
      </v-card></swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</div>
<v-spacer></v-spacer>
<div class="ma-5">
    <md-card>
    <md-card-actions>
      <div class="md-subhead">
          <h3>Top pic hostels</h3>
      </div>
    </md-card-actions>
    <md-card-media style="background-color: red;color:red;bottom:20px!important;">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in items3" :key="item"><v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://a0.muscache.com/im/pictures/22903552/b41736ff_original.jpg?aki_policy=xx_large"
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
      </v-card></swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</div>
<div class="ma-5">
    <md-card>
    <md-card-actions>
      <div class="md-subhead">
          <h3>New apartments</h3>
      </div>
    </md-card-actions>
    <md-card-media style="background-color: red;color:red;bottom:20px!important;">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in items3" :key="item"><v-card>
        <v-img
          class="white--text"
          height="200px"
          src="https://a0.muscache.com/im/pictures/763ad5c8-c951-43e0-b926-4a98c25c45e8.jpg?aki_policy=xx_large"
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
      </v-card></swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</div>
</v-container>
</template>

<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Bed from '@/assets/images/bed.svg';
import AddHouse from '@/components/AddHouse.vue';

export default {
    components: {
    swiper,
    swiperSlide,
    AddHouse,
  }
,
    data: () => ({
        items3: [1,2,3,4,5,6,7,8,9],
        items: [
            {
                title: 'houses',
                link: '/houses',
            },
            {
                title: 'hostels',
                link: '/hostels',
            },
            {
                title: 'apartments',
                link: '/apartments',
            }
        ],
        items2: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ],
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }

        }
    }),
}
</script>

<style scoped>
.tab-icon{ 
              padding: 7px;
              border-radius: 10%;
              font-size: 20px;
    height: 30px;
    width: 22px;
    position: relative;
    margin-left: 5px;
    /* left:130%; */
}
</style>


