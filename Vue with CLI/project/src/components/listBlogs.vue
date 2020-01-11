<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>List Blogs title</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" v-bind:key="blog" class="single-blog">
      <h2 v-rainbow >{{ blog.title | to-uppercase }}</h2>
    </div>

  </div>
  
</template>

<script>
import axios from 'axios'
import searchMixin from '../mixins/searchMixin'

export default {
  data() {
    return {
      blogs:[],
      search: '',
    };
  },

  methods: {

  },

  computed: {
    // filteredBlogs is in mixins
  },

  // To make the filters locally
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },

  // To make the directives locally
  directives: {
    'rainbow': {
      bind(el) {
        el.style.color = '#' + Math.random().toString().slice(2, 8);
      }
    }
  },

  mixins:[searchMixin],

  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(users => {
      console.log(users);
      this.blogs = users.data.slice(0,10);
    });
  }
  
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  #show-blogs {
    max-width: 800px;
    margin: 0 auto;

  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }
</style>