import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://206.189.46.253:8081`
  })
}
