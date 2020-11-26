<template>
  <div>
    <Header />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  components: {
    Header
  },
  data: () => {
    return {
    }
  }
}
</script>

<style>
.container{
  max-width: 1200px;
}
</style>
