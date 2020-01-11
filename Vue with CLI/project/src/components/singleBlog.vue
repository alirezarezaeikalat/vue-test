<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <article>{{ blog.content }}</article>
    <p>Author: {{ blog.author }}</p>
  </div>
</template>



<script>

import axios from 'axios'

export default {

  data() {
    return {
      // because of vue-router we can use 
      id: this.$route.params.id,
      blog: {}
    }
  },

  async created() {
    try {
      const res = await axios.get('https://vue-playlist-6c566.firebaseio.com/posts/' + this.id + '.json');
      console.log(res);
      this.blog = res.data;

    } catch(error) {
      console.log(error);
    }
  }
  
}

</script>

<style scoped>

#single-blog {
  max-width: 960px;
  margin: 0 auto;
}

</style>