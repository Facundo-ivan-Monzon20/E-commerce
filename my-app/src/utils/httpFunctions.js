import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/'

export const httpGet = async (endPoint) => {
      return axios.get(baseUrl + endPoint)
}

export const httpPost = async (endPoint, data) => {
   return axios.post(baseUrl + endPoint, data)
}


