<template>
  <div class="page">
    <div class="container">
      <section class="section about">
        <h1>Welcome to my Weather App on Vue.js!</h1>
        <article>
          <p>
            This intuitive web application provides you with weather forecasts.
            User can search for weather information of different places. By
            default the App displays the local weather at Kyiv city, Ukraine.
            Weather icon changes depending on weather conditions.
          </p>

          <h3>Features:</h3>
          <ul>
            <li>
              <b>Intuitive Design:</b> The user-friendly interface makes it easy
              to access and understand weather information.
            </li>
            <li>
              <b>City-Based Weather Forecast:</b> Get accurate and detailed
              weather forecasts for your city.
            </li>
            <li>
              <b>Responsive and Dynamic:</b> Seamlessly adapts to different
              screen sizes for a consistent experience across devices.
            </li>
          </ul>
          <h3>Technologies:</h3>
          <ul>
            <li>Vue.js (Vue3)</li>
            <li>TypeScript</li>
            <li>ESLint</li>
            <li><a src="https://openweathermap.org/">Weather API</a></li>
          </ul>
        </article>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/main.scss";
@import "@/assets/styles/welcome.scss";
</style>
