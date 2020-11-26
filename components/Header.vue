<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <div class="container">
        <b-navbar-brand href="#">
          TechNews
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <NuxtLink exact no-prefetch active-class="active" class="nav-link" to="/">Main</NuxtLink>
            <NuxtLink no-prefetch active-class="active" class="nav-link" to="/news">News</NuxtLink>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>

</script>

<style>
</style>
