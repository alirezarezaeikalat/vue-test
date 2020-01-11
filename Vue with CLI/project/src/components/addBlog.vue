<template>
  <div id="add-blog">
    <form action="" v-if="!submitted">
      <h2>Add a New Blog Post</h2>
      <label for="">Blog title</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label for="">Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      
      <div id="checkboxes">
        <label for="">Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">

        <label for="">Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">

        <label for="">Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">

        <label for="">Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories">
      </div>
      <label for="">Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors" v-bind:key="author">{{ author }}</option>
      
      </select>

      <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content: </p>
      <p>{{ blog.content }}</p>
      <p>Blog categories</p>
      <ul>
        <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>


  </div>
</template>

<script>
import axios from 'axios'

export default {
  
  data() {
    return {

      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },

      authors: ['alireza', 'shukufe', 'sina'],
      submitted: false,

    };
  },

  methods: {
    post() {
      // this.$http.post().then()
      // using json place holder 
      // By using posts.json it makes the collection by this name
      axios.post('https://vue-playlist-6c566.firebaseio.com/posts.json', this.blog)
      .then(data => {
        console.log(data);
        this.submitted = true;
      });
    }
  }
  
}
</script>

<style>

#add-blog * {
  box-sizing: border-box;
}

#add-blog {
  margin: 20px auto;
  max-width: 500px;
}

label {
  display: block;
  margin: 20px 0 10px;
}

input[type='text'], textarea {
  display: block;
  width: 100%;
   
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3 {
  margin-top: 10px;
}

#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}

#checkboxes label {
  display: inline-block;
}

</style>
