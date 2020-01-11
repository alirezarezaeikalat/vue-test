new Vue({
  el: '#vue-app2',
  
  data: {
    age: 26,
    X: 0,
    Y: 0
  },

  methods: {
    add(inc){
      this.age += inc;
    },

    subtract(dec){
      this.age -= dec;
    },

    updateXY(event) {
      this.X = event.offsetX;
      this.Y = event.offsetY;
    }

  }
});