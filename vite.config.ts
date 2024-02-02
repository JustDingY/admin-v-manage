import { defineConfig, loadEnv } from 'vite';
import type { UserConfig, ConfigEnv } from 'vite';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const root = process.cwd(); //获取当前工作目录
	const env = loadEnv(mode, root); //获取环境变量
	return {
		root, //项目根目录
		base: './', //项目部署的基础路径
		plugins: [
			// Vue模板文件编译插件
			vue(),
			// jsx文件编译插件
			vueJsx(),
		],
		// 开启本地服务
		server: {
			// 指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
			host: true,
			port: 3000, // 开发环境预览服务器端口
			open: false, // 启动后是否自动打开浏览器
			// 是否开启CORS跨域
			cors: true,
			// 代理服务器,解决跨域问题
			proxy: {
				// 这里的意思是 以/api开头发送的请求都会被转发到 http://xxx:9000
				[env.VITE_APP_API_BASE_URL]: {
					target: 'http://localhost:3000',
					// 改变 Host Header
					changeOrigin: true,
					// 发起请求时将 '/api' 替换为 ''
					//rewrite: (path) => path.replace(/^\/api/, ""),
				},
				[env.VITE_APP_API_BASE_URL]: {
					target: 'http://localhost:3000',
					// 改变 Host Header
					changeOrigin: true,
					// 发起请求时将 '/api' 替换为 ''
					//rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
		// 配置别名
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
				'#': fileURLToPath(new URL('./types', import.meta.url)),
			},
		},
	};
});
