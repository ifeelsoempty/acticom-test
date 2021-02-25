<template>
  <div class="container">
    <NewsBlock :news-list="Array.isArray(newsList) ? newsList : []" />
  </div>
</template>

<script>
import NewsBlock from '../components/NewsBlock'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    NewsBlock,
  },
  computed: {
    ...mapGetters('news', ['newsList']),
  },
  async created() {
    await this.getNewsList()
  },
  methods: {
    ...mapActions('news', ['getNewsList']),
  },
}
</script>

<style></style>
