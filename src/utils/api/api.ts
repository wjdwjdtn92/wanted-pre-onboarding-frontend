import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
  headers: {
    withCredentials: true,
  },
};

const client = axios.create(axiosConfig);

export default client;
