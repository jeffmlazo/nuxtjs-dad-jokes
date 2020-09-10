<template>
  <b-container class="jokes-container">
    <SearchJokes @search-text="searchText" />
    <Joke v-for="joke in jokes" :id="joke.id" :key="joke.id" :joke="joke.joke" />
  </b-container>
</template>

<script>
import axios from 'axios'
import Joke from '@/components/Joke'
import SearchJokes from '@/components/SearchJokes'

// Headers for axios
const config = {
  headers: {
    Accept: 'application/json'
  }
}

export default {
  components: {
    Joke,
    SearchJokes
  },
  data () {
    return {
      jokes: []
    }
  },
  head () {
    return {
      title: 'Dad Jokes',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'The #1 dad jokes at all time high.'
      }]
    }
  },
  async created () {
    try {
      const res = await axios.get('https://icanhazdadjoke.com/search', config)
      this.jokes = res.data.results
    } catch (error) {
      throw new Error(error)
    }
  },
  methods: {
    async searchText (text) {
      try {
        const res = await axios.get(`https://icanhazdadjoke.com/search?term=${text}`, config)

        this.jokes = res.data.results
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
</script>
