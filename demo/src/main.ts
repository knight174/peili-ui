import { createApp } from 'vue';
import { Theme } from 'peili-ui'; // 切换主题
import App from './App.vue';
import 'virtual:uno.css';

createApp(App).use(Theme).mount('#app');
