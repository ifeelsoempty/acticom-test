export const state = () => ({
  articles: []
})

export const mutations = {
  setArticles(state, articles) {
    articles.map((article, index) => {
      if(!article.urlToImage){
        article.id = index + 1;
      }
    })
    state.articles = articles
  }
}

export const actions = {
  async fetch({ commit }){
    const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'category=technology&' +
    'apiKey=f72198c640cb430295cfe8562bbff1c5';
    const response = await this.$axios.$get(url);

    response['articles'].map((item, index) =>{
      item.id = index + 1;
    })
    commit('setArticles', response['articles'])
  }
}

export const getters = {
  articles: s => s.articles,
  articleById: s => {
    return (id) => {
      return s.articles.filter(article => article.id == id)[0];
    }
  },
  articlesPage: (s) => {
    return (currentPage, perPage) => {
      const startIndex = (perPage * currentPage) - (perPage - 1);
      const endIndex = perPage * currentPage
      return s.articles.filter((article, index) => {
        index++
        return index >= startIndex && index <= endIndex 
      })
    }
  },
  lastPage: s => {
    return (perPage) => {
      return Math.ceil((s.articles.length - 1) / perPage);
    }
  }
}