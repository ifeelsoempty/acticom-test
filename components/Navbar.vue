<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand">TechNews</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <NuxtLink exact no-prefetch active-class="active" class="nav-link" to="/">Main</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink no-prefetch active-class="active" class="nav-link" to="/articles">Articles</NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .container{
    min-width: 1000px;
  }
</style>