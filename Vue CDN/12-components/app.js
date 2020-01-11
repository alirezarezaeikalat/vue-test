Vue.component('greeting', {
  
  template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change name</button></p>',
  
  data() {
    return {
      name: 'Yoshi'
    };
  },

  methods: {
    changeName() {
      this.name = 'Mario'
    }
  },

});

new Vue({
  el: '#vue-app11',

  
});

new Vue({
  el: '#vue-app12',
  
});