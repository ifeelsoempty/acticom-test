<template>
  <section class="article">
    <div v-if="article.urlToImage" class="article-image">
      <img class="article-image" :src="article.urlToImage" alt="">
      <div class="article-info">
        <span v-if="article.author" class="article-author">Author: {{ article.author }} </span>
        <span v-if="article.publishedAt" class="article-publishedAt"> {{ publishedAt }} </span>
      </div>
    </div>
    <h1 class="article-title">{{ article.title }}</h1>
    <p v-if="article.description" class="article-description">{{ article.description + article.content}}</p>
    <a v-if="article.source" target="_blank" class="article-source" :href="article.url">Source</a>
  </section>
</template>

<script>
  export default {
    validate({ params }) {
      return /^\d+$/.test(params.id)
    },
    async asyncData(context){
      const store = context.store;
      if(store.getters['articles/articles'].length === 0 ){
        await store.dispatch('articles/fetch');
      }
      const article = store.getters['articles/articleById'](Number(context.params.id));
      if(!article){
        context.redirect('/articles/1')
      }

      return { article };
    },
    computed: {
      publishedAt() {
        return this.article.publishedAt.substr(0, 10)
      }
    }
  }
</script>

<style scoped lang="scss">
  .article{
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 30px;
    align-items: center;
    &-title{
      text-align: center;
      font-weight: 300;
      font-size: 3rem;
    }
    &-image{
      max-height: 300px;
      height: auto;
      position: relative;
      border-radius: 15px;
      box-shadow: $block-shadow;
    }
    &-info{
      position: absolute;
      width: 100%;
      top: -30px;
      color: $grey;
      font-weight: 100;
      letter-spacing: $letter-spacing;
    }
    &-publishedAt{
      position: absolute;
      right: 0;
    }
    &-source{
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      text-decoration: none;
      width: 200px;
      text-transform: uppercase;
      letter-spacing: $letter-spacing;
      height: 50px;
      border-radius: 50px;
      font-weight: 100;
      background: $base-color;
      box-shadow: $block-shadow;
      transition: .3s;
      &:hover{
        background: $light-color;
      }
      &:focus{
        background: $dark-color;
      }
    }
    &-description{
      letter-spacing: $letter-spacing;
      color: $grey;
    }
  }
</style>