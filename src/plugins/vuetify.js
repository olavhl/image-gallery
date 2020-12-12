import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#61c7db',
          secondary: '#c9faf1',
          anchor: '#8c9eff',
        },
        snowy: {
            primary: '#FF939e',
            secondary: '#b0bec5',
            anchor: '#8c9eff',
          },
      },
    },
  })

export default new Vuetify({
});
