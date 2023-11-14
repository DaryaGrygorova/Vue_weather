<script lang="ts" setup>
import { defineProps } from 'vue';
import { WeatherInfo } from '../types/types'
import { capitalizeFirstChar } from '../utils'


defineProps<{ weatherInfo: WeatherInfo }>();
const today = new Date().toLocaleString('en-En', {year: 'numeric', month: 'short', weekday: 'short',  day: 'numeric'})
</script>

<template>
    <div class="summary">
      <div 
        class="pic-main"
        :style="{'background-image': 'url(' + require(`/src/assets/img/weather-main/${weatherInfo?.weather[0]?.description.replaceAll(' ', '_')}.png`) + ')' }"></div>
      <div class="weather">
        <div class="temp">{{`${weatherInfo ? Math.round(weatherInfo.main.temp) : '-'} °C`}}</div>
        <div class="weather-desc text-block">{{weatherInfo ? capitalizeFirstChar(weatherInfo?.weather[0]?.description) : '-'}}</div>
      </div>
      <div class="city text-block">{{`${weatherInfo?.name}, ${weatherInfo?.sys?.country}`}}</div>
      <div class="date text-block">{{ today }}</div>
    </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";
@import "@/assets/styles/weather-summary.scss";
</style>
