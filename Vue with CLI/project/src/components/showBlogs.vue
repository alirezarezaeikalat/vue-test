<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" v-bind:key="blog" class="single-blog">
      <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow >{{ blog.title | to-uppercase }}</h2></router-link>
      <article>{{ blog.content | snippet }}</article>
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

  mixins: [searchMixin],

  created() {
    axios.get('https://vue-playlist-6c566.firebaseio.com/posts.json').then(res => {
      
      let blogsArray = [];
      for(let key in res.data){
        res.data[key].id = key;
        blogsArray.push(res.data[key]);
      }
      this.blogs = blogsArray;
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

  a {
    text-decoration: none;
  }
</style>