import axios from 'axios'

const ROOT_URL = 'https://api.nasa.gov/planetary/apod'
const API_KEY = 'FReI7zlIqxtAiVvJzV7ClEh3OPmltJTMrumS7JP6' // Replace with your API key


export function getAPOD (date = '') {
  console.log('URL', `${ROOT_URL}?api_key=${API_KEY}&date=${date}`)
  return axios.get(`${ROOT_URL}?api_key=${API_KEY}&date=${date}`)
}