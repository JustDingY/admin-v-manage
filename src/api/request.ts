import axios, { AxiosInstance } from 'axios';

const service: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_BASEURL,
	timeout: 20000,
});
