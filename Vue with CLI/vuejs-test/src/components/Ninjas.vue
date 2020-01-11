<template>
  <div id="ninjas">
    <ul>
      <li v-for="ninja in ninjas" v-bind:key="ninja" v-on:click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">speciality: {{ ninja.speciality }}</h3>
      </li>
    </ul>
    <button v-on:click="deleteNinja">Delete ninja</button>
  </div>
</template>

<script>

export default {
  name: 'ninjas',

  // by using props different pages can
  // use different data
  // this is the reference type
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },

  data(){
    return {
      
    };
  },

  methods: {
    //test() {
      // console.log(this.ninjas)
    //}
    deleteNinja() {
      this.ninjas.pop();
    },
  },
  // liftCycle hooks
  beforeCreate(){
    alert('before created');
  },

  created() {
    alert('created');
  },

  beforeMount() {
    alert('before mount');
  },

  mounted(){
    alert('mounted');
  },

  beforeUpdate(){
    alert('before update');
  },

  updated(){
    alert('updated');
  },
  
  
}
</script>

<style scoped>
  #ninjas {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
    cursor: pointer;
  }
</style>
