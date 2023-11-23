import { createApp } from 'vue';

import router from './router.js';
import stroe from './store/index.js';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButotn from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(stroe);

app.component('base-card', BaseCard);
app.component('base-button', BaseButotn);
app.component('base-badge', BaseBadge);

app.mount('#app');
