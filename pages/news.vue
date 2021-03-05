<template>
  <div class="container">
    <div v-if="loadingState">Loading...</div>
    <NewsBlock v-else :news-list="Array.isArray(newsList) ? newsList : []" />
  </div>
</template>

<script>
import NewsBlock from '../components/NewsBlock'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    NewsBlock,
  },
  data() {
    return {
      loadingState: false,
    }
  },
  computed: {
    ...mapGetters('news', ['newsList']),
  },
  async created() {
    if (!Array.isArray(this.newsList)) {
      this.loadingState = true
    }
    await this.getNewsList()

    this.loadingState = false
  },
  methods: {
    ...mapActions('news', ['getNewsList']),
  },
}
</script>

<style></style>
