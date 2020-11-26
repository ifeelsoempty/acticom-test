<template>
  <div>
    <div v-if="loading" class="loader-container">
      <b-spinner style="width: 5rem; height: 5rem" label="Large Spinner" variant="secondary" type="grow" class="loader" />
    </div>
    <b-card-group class="d-flex flex-wrap" v-else>
      <b-card
        v-for="(newsItem, index) in newsList" 
        :key="index"
        :title="newsItem.title"
        :img-src="newsItem.urlToImage"
        img-alt="Image"
        img-top
        tag="article"
        style="min-width: 20rem"
      >
        <b-card-text>
          {{ newsItem.description }}
        </b-card-text>

        <b-button href="#" variant="primary">More</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      loading: true
    }
  },
  
  computed: {
    ...mapGetters('news', ['newsList'])
  },

  async created() {
    await this.getNewsList();
    this.loading = false;
  },

  methods: {
    ...mapActions('news', ['getNewsList']),
  }
}
</script>

<style>

.loader {
  position: absolute;
  top: 35%;
  left: 50%;
  width: 50px;
  height: 50px;
}

.loader-container {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
}
</style>
