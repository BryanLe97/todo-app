import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    base: 'todo-app/',
    plugins: [vue()],
    resolve: {
        alias: {
        '@': path.resolve(new URL('.', import.meta.url).pathname, 'src'),
        },
    }    
})
