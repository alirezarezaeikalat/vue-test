new Vue({
  el:'#vue-app',

  // vue proxies the properties in data to the top part of vue instance
  data: {
    name: 'alireza',
    job: 'ninja',
    title: 'this is the beginner course',
    // bind with v-bind
    website: 'http://www.google.com',
    // bind with v-html
    websiteTarget: '<a href="http://www.google.com">Google </a>'
  },

  methods: {
    greet(time) {
      return 'Good ' + time + ' ' + this.name; 
    }
  }
});