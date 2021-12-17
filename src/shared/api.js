import axios from 'axios'
import { BASE_API_ENDPOINT } from './constants'
 
export const Api = axios.create({
  baseURL: BASE_API_ENDPOINT,
  timeout: 2000
})

