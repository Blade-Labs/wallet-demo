import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import "@fontsource/source-sans-pro/latin-400.css"
import "@fontsource/source-sans-pro/latin-700.css"
import "@fontsource/montserrat/latin-400.css"
import "@fontsource/montserrat/latin-500.css"
import "@fontsource/montserrat/latin-600.css"
import "@fontsource/montserrat/latin-700.css"
import { createPinia } from 'pinia'
import { buildTransaction, buildProto } from './test-bytes';

// Used to assign unique element ids to Component HTML elements.
let uuid = 1;

const app = createApp(App);
app.use(createPinia());
app.mixin({

  created() {
    this.$options.uuid = uuid++;
  },
  methods: {
    /**
     * Provide function to assign HTML Elements app-unique ids
     * @param name 
     * @returns 
     */
    elmId(name: string): string {
      return name + this.$options.uuid++;
    }
  }

});
app.mount('#app');

buildTransaction();
