/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TITLE: string;
	// 更多环境变量...
	readonly VITE_APP_API_BASE_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
