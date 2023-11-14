<script lang="ts" setup>
import WeatherInfo from "../components/weather-info-comp.vue";
import { Coord, WeatherInfo as WeatherInfoType } from "../types/types";
import Highlights from "../components/highlights-comp.vue";
import Coords from "../components/coords-comp.vue";
import Humidity from "../components/humidity-comp.vue";

import { BASE_URL, API_KEY } from "../../config";
import { ref, onMounted, computed } from "vue";
import { capitalizeFirstChar } from "@/utils";

const city = ref("Kyiv");
const weatherInfo = ref({} as WeatherInfoType);
const isError = computed(() => weatherInfo.value?.cod !== 200);

function getWeatherInfo() {
  fetch(`${BASE_URL}?q=${city.value}&units=metric&appid=${API_KEY}`)
    .then((res) => res.json())
    .then((data: WeatherInfoType | null) => (weatherInfo.value = data));
}
onMounted(getWeatherInfo);
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div class="sections">
            <section
              :class="['section', 'section-left', { 'section-error': isError }]"
            >
              <div class="info">
                <div class="city-inner">
                  <input
                    v-model="city"
                    @keyup.enter="getWeatherInfo"
                    type="text"
                    class="search"
                  />
                </div>
                <WeatherInfo v-if="!isError" :weatherInfo="weatherInfo" />
                <div v-else class="error">
                  <div v-if="weatherInfo?.message" class="error-message">
                    {{ capitalizeFirstChar(weatherInfo?.message) }}
                  </div>
                  <div v-else class="error-title">
                    Ooops! <br />Something went wrong!!!
                  </div>
                </div>
              </div>
            </section>
            <section v-if="!isError" class="section section-right">
              <Highlights :weatherInfo="weatherInfo" />
            </section>
          </div>
          <div v-if="!isError" class="sections">
            <section class="section-bottom">
              <Coords :coord="weatherInfo?.coord || {} as Coord" />
            </section>
            <section class="section-bottom">
              <Humidity :humidity="weatherInfo?.main.humidity || 0" />
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
@import "@/assets/styles/weather-view.scss";
</style>
