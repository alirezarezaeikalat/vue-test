<template>
  <div>

    <app-header v-bind:title="title" v-on:changeTitle="changeRootTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>

    <hr>
    <h1>This is another one to show the difference between ref and primitive types</h1>

    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <form-helper>
      <h2 slot="title"> {{ title }}</h2>
      <p slot="text">I am the paragraph text for slot</p>
    </form-helper>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
// ATTENTION: app.vue is just a component

// this object represent the parameters 
// Vue.component('name', {
//  template: <p></p>,
//  data(){},  
//})
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'
import FormHelper from './components/FormHelper.vue'


export default {
  name: 'app',

  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas,
    'form-helper': FormHelper,
  },
  
  data(){
    return {

      ninjas:[
        {name: 'Ryu', speciality: 'Vue components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardary', show: false},
        {name: 'Hitoshi', speciality: 'Click events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false},
      ],
      title: 'Vue ninjas'

    };
  },

  methods: {

    changeRootTitle(updatedTitle) {
      this.title = updatedTitle;
      
    }

  }
  
}
</script>

<style>

</style>
