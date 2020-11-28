<template>
  <div>
    <div v-show="loading" class="loader-container">
      <b-spinner
        style="width: 5rem; height: 5rem"
        label="Large Spinner"
        variant="secondary"
        type="grow"
        class="loader"
      />
    </div>
    <b-card-group v-show="!loading" class="news">
      <b-card
        v-for="(newsItem, index) in newsList"
        :key="index"
        ref="card"
        img-alt="Image"
        img-top
        tag="article"
        class="news__card mb-2"
      >
        <b-card-img-lazy
          v-show="isImageLoaded"
          class="news__btn"
          :src="newsItem.urlToImage"
          alt="News-image"
        />
        <b-skeleton-img v-show="!isImageLoaded" />
        <b-card-title>
          {{ newsItem.title }}
        </b-card-title>

        <b-button class="news__btn" href="#" variant="dark">More</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      loading: true,
      isImageLoaded: false,
    }
  },

  computed: {
    ...mapGetters('news', ['newsList']),
  },

  async created() {
    await this.getNewsList()
    this.loading = false
  },

  mounted() {
    console.log(this.$refs.card)
    // this.$refs.card.querySelector('img').onload = this.onImgLoad
  },

  methods: {
    ...mapActions('news', ['getNewsList']),
    onImgLoad() {
      console.log('1')
      this.isImageLoaded = true
    },
  },
}
</script>

<style lang="scss">
.loader {
  position: absolute;
  top: 35%;
  left: 50%;
  width: 50px;
  height: 50px;
  &-container {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }
}

.news {
  display: flex;
  &__card {
    min-width: 20rem;
  }
}

.card-img-top {
  max-height: 13rem;
  min-height: 13rem;
}
</style>
