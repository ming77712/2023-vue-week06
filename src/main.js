import { createApp } from 'vue';
import { createPinia } from 'pinia';

import {
  Field, Form, ErrorMessage, configure, defineRule,
} from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
import { loadLocaleFromURL, localize } from '@vee-validate/i18n';

import App from './App.vue';
import router from './router';

const app = createApp(App);

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

loadLocaleFromURL('./zh_TW.json');

configure({
  generateMessage: localize('zh_TW'),
  validateOnInput: true,
});

app.use(createPinia());
app.use(router);

app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
