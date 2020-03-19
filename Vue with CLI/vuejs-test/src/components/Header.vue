<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>

// if the export is not export default you have to  
// import it with { bus }
import { bus } from '../main.js'

export default {
  
  name: 'app-header',
  
  props: {
    title: {
      type: String,
      required: true
    }
  },

  data(){
    return {
      
    };
  },

  methods: {

    changeTitle() {
      //this.$emit('changeTitle', 'Vue wizards');
      
      // instead of the element the bus emits the event
      bus.$emit('changeTitle', 'Vue wizards');
      this.title = 'Vue wizards';
    }

  }
  
}
</script>

<style scoped>
header {
  background: lightgreen;
  padding: 10px;
  cursor: pointer; 
}

h1 {
  color: #222;
  text-align: center;
}
</style>


