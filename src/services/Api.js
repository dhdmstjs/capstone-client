import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://danielaoh.com:8081`
  })
}
