<template>
  <section>
    <div class="articles">
      <div @click.prevent="openArticle(article.id)" class="article" v-for="article of articles" :key="article.id">
        <div class="article-image">
          <img v-if="article.urlToImage" :src="article.urlToImage">
          <img v-else src="~/assets/images/no-image.png">
        </div>
        <h5 class="article-title">{{ article.title }}</h5>
      </div>
    </div>
    <div class="pagination">
      <div class="page-button" v-bind:class="{ disable: isPageFirst }" @click.prevent="openFirstPage()">
        &lt;&lt;
      </div>
      <div class="page-button" v-bind:class="{ disable: isPageFirst }" @click.prevent="openPrevPage()">
        &lt;
      </div>
      <div class="page-button current-page">
        {{ currentPage }}
      </div>
      <div class="page-button" v-bind:class="{ disable: isPageLast }" @click.prevent="openNextPage()">
        &gt;
      </div>
      <div class="page-button" v-bind:class="{ disable: isPageLast }" @click.prevent="openLastPage()">
        &gt;&gt;
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async fetch({ store, query }) {
    if(store.getters['articles/articles'].length === 0 ){
      await store.dispatch('articles/fetch');
    }
    store.dispatch('paginationCount/increaseCounter');
  },
  data() {
    return{
      perPage: 2,
    }
  },
  computed: {
    articles() {
      return this.currentPage ? 
        this.$store.getters['articles/articlesPage'](this.currentPage, this.perPage) :
        this.redirectToFirstPage()
    },
    currentPage(){
      const pageParam = Number(this.$route.query.page);
      return ((pageParam > 0 && pageParam <= this.lastPage) && Number.isInteger(pageParam)) ? pageParam : false
    },
    lastPage(){
      return this.$store.getters['articles/lastPage'](this.perPage);
    },
    isPageFirst(){
      return this.currentPage === 1;
    },
    isPageLast(){
      return this.currentPage === this.lastPage
    },
  },
  methods: {
    openArticle(id) {
      this.$router.push('/articles/' + id)
    },
    openPrevPage(){
      if(this.currentPage > 1){
        const prevPage = this.currentPage - 1;
        this.$router.push(`/articles?page=${prevPage}`)
        this.$store.dispatch('paginationCount/increaseCounter');
      }
    },
    openNextPage(){
      if(this.currentPage < this.lastPage){
        const nextPage = this.currentPage + 1;
        this.$store.dispatch('paginationCount/increaseCounter');
        this.$router.push(`/articles?page=${nextPage}`);
      }
    },
    openFirstPage(){
      this.$store.dispatch('paginationCount/increaseCounter');
      this.$router.push(`/articles?page=1`)
    },
    redirectToFirstPage(){
      this.$router.push(`/articles?page=1`)
    },
    openLastPage(){
      const nextPage = this.currentPage + 1;
      this.$store.dispatch('paginationCount/increaseCounter');
      this.$router.push(`/articles?page=${this.lastPage}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .articles{
    display: flex;
    justify-content: center;
    column-gap: 40px;
    row-gap: 40px;
    flex-wrap: wrap;
    align-items: center;
  }
  .article{
    width: 500px;
    height: 400px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    align-items: center;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.377);
    transition: .5s;
    border-radius: 15px;
    overflow: hidden;
  }

  .article:hover{
    cursor: pointer;
    transform: scale(1.02);
  }

  .article-image{
    width: 100%;
    height: 70%;
    overflow: hidden;
    border-radius: 15px;
    & img{
      height: 100%;
    }
  }

  .article-title{
    margin-top: 8%;
  }

  .pagination{
    display: flex;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
  }

  .page-button{
    user-select: none;
    height: 52px;
    width: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid $base-color;
    color: $base-color;
    font-size: 1.5rem;
    border-radius: 50%;
    opacity: 0.5;
  }

  .page-button:hover{
    cursor: pointer;
    opacity: 0.3;
  }

  .current-page{
    background: $base-color;
    color: #fff;
    border: 0;
  }

  .current-page:hover{
    cursor: default;
    opacity: 0.5;
  }

  .disable{
    opacity: 0.2;
  }
  .disable:hover{
    opacity: 0.2;
    cursor: default;
  }
</style>