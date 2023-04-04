import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'http://localhost:8000';

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    withCredentials: true,
  },
};

const client = axios.create(axiosConfig);

export default client;
