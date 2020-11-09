<template>
  <section>
    <h1>{{ article.title }}</h1>
    <img class="article-image" :src="article.urlToImage" alt="">
    <p>{{ article.description }}</p>
    <p> {{ article.author }} </p>
    <p> {{ article.publishedAt }} </p>
    <p> {{ article.content }} </p>
    <a :href="article.url">Source</a>
  </section>
</template>

<script>
  export default {
    validate({ params }) {
      return /^\d+$/.test(params.id)
    },
    async asyncData({$axios, params}) {
      const url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'category=technology&' +
        'apiKey=f72198c640cb430295cfe8562bbff1c5';
      const response = await $axios.$get(url);
      
      response['articles'].map( (article, index) => {
        article.id = index + 1;
      })

      const article = response['articles'].filter((item) => item.id == params.id)[0];
      return { article };
    }
  }
</script>

<style scoped>
  .article-image{
    max-width: 500px;
  }
</style>