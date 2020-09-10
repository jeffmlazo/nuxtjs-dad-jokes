<template>
  <b-container class="mt-5 container">
    <AppHeader />
    <Nuxt />
  </b-container>
</template>

<script>
import AppHeader from '@/components/AppHeader'

export default {
  name: 'Default',
  components: {
    AppHeader
  }
}
</script>
