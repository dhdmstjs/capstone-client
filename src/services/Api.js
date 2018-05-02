import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://188.166.245.15:80`
  })
}
