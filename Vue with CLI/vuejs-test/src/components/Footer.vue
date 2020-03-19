<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>

import {bus} from '../main.js'

export default {
  
  name: 'app-footer',
  
  props: {
    title: {
      type: String,
      require: true
    }
  },

  data(){
    return {
      copyright: 'Copyright 2017'
    };
  },
  
  // this is lifte cycle hook
  created(){
    bus.$on('changeTitle', (data) => {
      this.title = data;
    });
  }
  
}
</script>

<style scoped>
  footer {
    background: #222;
    padding: 6px;
  }

  p {
    color: lightgreen;
    text-align: center;
  }
</style>


