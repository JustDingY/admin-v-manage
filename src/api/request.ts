import axios, { AxiosInstance } from 'axios';

// 创建axios实例
const service: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_APP_API_BASE_URL,
	timeout: 20000,
});

// 请求拦截
service.interceptors.request.use(
	config => {
		return config;
	},
	err => {
		return Promise.reject(err);
	},
);

// 响应拦截
service.interceptors.response.use(
	res => {
		return res.data;
	},
	err => {},
);

export default service;
