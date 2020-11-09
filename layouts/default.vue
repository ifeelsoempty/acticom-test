<template>
  <div>
    <Navbar />
    <main class="main-content">
      <div class="container">
        <Nuxt />
      </div>
    </main>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  .main-content{
    margin: 50px 0;
  }
</style>
