new Vue({
  el: '#vue-app6',

  data: {
    available: false,
    nearby: false
  },

  methods: {

  },

  computed: {
    compClasses(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});