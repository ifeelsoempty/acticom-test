<template>
  <div>
    <div v-for="(newsItem, index) in newsList" :key="index">
      <div>{{ newsItem.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    newsList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
