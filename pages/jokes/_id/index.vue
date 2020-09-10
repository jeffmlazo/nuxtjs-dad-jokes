<template>
  <div>
    <nuxt-link to="/jokes">
      Back To Jokes
    </nuxt-link>
    <h2>{{ joke }}</h2>
    <hr>
    <small>Joke ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  // This will validate the data type of the url parameter to be pass on
  validate ({ params }) {
    /* Check if the parameter starts with a number or a letter
      with uppecase or lowercase and ends with the same format
      and disregard all special characters */
    return /^[a-zA-Z0-9]+$/.test(params.id)
  },
  data () {
    return {
      joke: {}
    }
  },
  head () {
    return {
      title: this.joke
    }
  },
  async created () {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }

    try {
      const res = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config)
      this.joke = res.data.joke
    } catch (error) {
      throw new Error(error)
    }
  }
}
</script>
