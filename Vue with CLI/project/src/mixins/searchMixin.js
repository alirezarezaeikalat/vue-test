export default {
  computed: {
    filteredBlogs() {
      // filter is the arrays' method and returns
      // a array based on
      // the boolean output of the cb function
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
}