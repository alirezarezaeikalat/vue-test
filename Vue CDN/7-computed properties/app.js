new Vue({
  el: '#vue-app5',

  data: {
    age: 20,
    a: 0,
    b: 0
  },

  computed: {
   
    addToA() {
      console.log('this is addToA');
      return this.age + this.a;
    },

    addToB() {
      console.log('this is addToB');
      return this.age + this.b;
    }

  }

});