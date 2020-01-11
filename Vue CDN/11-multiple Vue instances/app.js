let one = new Vue({
  el: '#vue-app9',

  data: {
    title: 'this is the first instance'
  }
});

let two = new Vue({
  el: '#vue-app10',

  data: {
    title: 'this is the second instance'
  },

  methods: {
    changeOneTitle() {
      one.title = 'the one title has been changed';
    }
  },

  computed: {
    
  }

});

two.title = 'this is changed from outside';