<template>
  <div id="app">
    
    <keep-alive>
      <component v-bind:is="selectedForm"></component>
      <button v-on:click="selectedForm = 'form-one'">Show form one</button>
      <button v-on:click="selectedForm = 'form-two'">Show form two</button>
          
    </keep-alive>  
  </div>
  
</template>

<script>

import formOne from './components/form-one'
import formTwo from './components/form-two'
export default {
  name: 'app',

  components: {
    'form-one': formOne,
    'form-two': formTwo
  },

  data() {
    return {
      // it is just the string but the component TAG 
      // look for this string in the components object
 
      selectedForm: 'form-two'
    };
  },

}
</script>

<style>

</style>
