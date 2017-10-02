import Vue from 'vue';

new Vue({
  el: '#vue-app',
  components: {
    'tour-component': require('./tour-component.vue'),
    'sheet-component': require('./sheet-component.vue'),
  },
});
