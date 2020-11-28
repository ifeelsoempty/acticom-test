import axios from 'axios'

export const __getNewsList = async () => {
  const res = await axios.get(
    'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'category=technology&' +
      'apiKey=f72198c640cb430295cfe8562bbff1c5'
  )
  return res
}
