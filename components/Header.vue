<template>
  <header class="header">
    <div class="header-container">
      <div class="header-nav">
        <NuxtLink
          exact
          no-prefetch
          active-class="active"
          class="header-nav__link"
          to="/"
        >
          Main
        </NuxtLink>
        <NuxtLink
          no-prefetch
          active-class="active"
          class="header-nav__link"
          to="/news"
        >
          News
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<script></script>

<style></style>
