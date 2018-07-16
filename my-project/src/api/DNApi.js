import axios from 'axios'
import {HOST} from '@/common/js/config'

const Request = '/api';

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response.data
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });

export function getBanner(){
    const url = Request + '/banner'
    return axios.get(url)
}

export function getRecommendList () {
  const url = Request + '/personalized'
  return axios.get(url)
}

export function getRecommendSong(){
  const url = Request + '/personalized/newsong'
  return axios.get(url)
}