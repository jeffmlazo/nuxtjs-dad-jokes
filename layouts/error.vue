<template>
  <div class="container">
    <h1>STATUS CODE: {{ error.statusCode }}</h1>
    <p v-if="error.statusCode === 404">
      MESSAGE: Page Not Found
    </p>
    <p v-else-if="error.statusCode === 500">
      MESSAGE: Internal Server Error. Please check your're internet connection.
    </p>
    <p v-else>
      MESSAGE: An error occurred
    </p>
    <nuxt-link to="/">
      Home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Error',
  layout: 'singlepage',
  props: {
    error: {
      type: Number,
      default: 0
    }
  }
}
</script>
