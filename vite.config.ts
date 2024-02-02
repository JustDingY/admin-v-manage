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
		// 配置别名
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
				'#': fileURLToPath(new URL('./types', import.meta.url)),
			},
		},
	};
});
