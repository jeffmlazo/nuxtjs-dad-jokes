<template>
  <nuxt-link :to="`jokes/${id}`">
    <div class="joke">
      <p>{{ joke }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Joke',
  props: {
    joke: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    isPublished: Boolean, // This type doesn't need default value
    commentIds:
    {
      type: Array,
      default () {
        return []
      }
    },
    author: {
      type: Object,
      default () {
        return { message: 'Default' }
      }
    },
    callback: {
      type: Function,
      default () {
        return () => true
      }
    },
    contactsPromise: Promise // or any other constructor
  }
}
</script>
