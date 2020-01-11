new Vue({
  el: '#vue-app',

  data: {
    title: 'this is the course',
    name: 'alireza',
    job: 'ninja'
  },

  methods: {
    greet(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }

});