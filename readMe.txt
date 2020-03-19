Vue instances:

1. v-bind: for binding a data to html tag

2. v-html: for binding a data that is html to html tag

3. v-on: for using events in html

4. v-model: for two way data binding

5. If we show something to html by methods, if one variable
  change, the virtual dom run all the methods that put 
  output to the html, so we must use computed properties.

6. We can get dom objects just like we get them in jquery or js in vue js by
using ref attribute:

  <input ref="input">

  we can use it in vue instance with this.$refs(this is object)

[ATTENTION]
7. There are some predefined paroperties and methods in vue instace like:
refs, emit and we can access them with $refs, $emit()
  
[ATTENTION]
8. Vue instace is just a class, it has data, methods, and props is just like
  passing arguments to constructor: 
    
/////////    Vue with CLI    ////////////

1. to create a project in Vue

	a. vue create <project name>

2. to run the project cd to the folder of the project then

	a. npm run serve

3. other part of vue is in Vue CDN folder

4. In Vue, ROOT Component is the component that mount on the div element of
    the index.html
	
5. we can nest other components in a component and use them in it:
  first we have to import them, then use them

6. Vue uses random generated number to determine the element when we 
  use scoped style.

7. We can use props for child components to give them some data from outside
    of the component, and we can use this props just like data of the component:

    props: {
      ninjas: {
        type: Array,
        required: true
      }
    },

8. There is difference when we pass as reference or value to props in a 
  component, when we pass as a reference if we we change it, the main one
  is changing, but in pass by value it is not like this. (for example when
  we pass data to one component, and the component change it, and if we pass
  that data to other component it remains unchanged if we pass it by value)

9. resembling ref type behavior even with primitive types by 
  EMMITING EVENTS: we can emit events in child component with 
  this.$emit('eventname', 'event data'); and get that event in parent
  component: v-on:eventname="functioToExecute($eventData)"

10. using golbal EVENT BUS to interact between sibling vue instances 
  without interacting with root instance:
  we have to make new vue instace in main.js and export it, and import
  it in any component that we want to use and emit event on the bus
  instance: cal bus.$emit('', ''). then we have to listen to that event
  on other component, and we can use it we life cycle hooks:
    created(){
      bus.$on('', (data) => {

      })
    }

[very important]
11. we can use LIFE CYCLE HOOKS functions to attach some functionality to
  components in their different stage of their life (check the pictures)   

12. We can make templates in Vue using slots:
  in template we can have:
    <slot name="title"></slot>
  
  in the main component we can use template that we created and we can fill
    the slots in the template:
    <name-of-the-template>
      <h2 slot="title">This is the tile</h2>
    </name-of-the-template>

13. In Vue we can show different component based on condition, we can do this
  by using v-if or we can use component tag:
  in order first we have to import the components that we want to use 
  interchangably then use component tag:

    <component is="component-name"></component>
    
14. When we use component tag, every time that we change the component we 
  loose data in that component(we loose data in the object or on the objects
  forexample data in the form) but we can use keep-alive tag to save the data:
  <keep-alive>
    <component is=""></component>
  </keep-alive>



15. we can bind to checkboxes and selectboxes in vue by using v-model in
  the html tag, and use array inside the vue instance

16. $http.post() or get using vue-resource npm package or axios.post using axios
 npm package, we can use this packages in the vue instance methods:
  a. first we have to import them
  b. then use them in the vue instance methods:
    axios.get("").then(data => {})
    

17. We can make custom directives in Vue js to add custom behavior for example:
    
      <h2 v-rainbow="data to the rainbow function"></h2>
    remember we can make directives globally or locally:

      a. make global directives:
          in main.js :
            Vue.directive('name of the directive', {
              bind(el, binding, vnode){
                // el is the component that has directive
                // binding.value is the input (v-rainbow="value")
                // we can also use binding.arg (v-raingbow:click="value")
                if(binding.value){
                  el.style.color = binding.value;
                }
              }
            });

      b. we can also makes local directives in a particular instance:
          in a particular instance:
            directives: {
              'rainbow': {
                bind(el, binding, vnode) {
                  el.style.color = '#' + Math.random().toString().slice(2, 8);
                }
              }
            },
    

18. we can use filters to show modified data in the browsers:
    <article>{{title | touppercase}}</article>

    remember we can define this touppercase filter locally or globally:

      a. make global filters:
          in main.js :
            Vue.filter('touppercas', value => {
              return value.toUpperCase();
            });

      b. we can also makes local filter in a particular instance:
          in a particular instance:
            filters: {
              touppercase(value) {
                return value.toUpperCase();
              },
            },
    
19. we can custom search filter using computed properties:
    <div v-for="blog in filteredBlogs"></div>

    filterBlogs is the computed properties:

    computed: {
      filteredBlogs(){
        return this.blogs.filter(blog => {
          return blog.title.match(this.search);
        })
      }
    }


  
20. Using MIXINS, to use same code in different instances, for example use 
    a certain computed(like filteredBlogs) in different Vue instances:

      a. first you have to make mixins folder
      b. then make a js file in that folder :
            export default {
              computed: {
                filteredBlogs() {
                    ...
                }
              }
            }
      c. then import this mixin in the certain instance
      d. then add it to this array in the instance:
        mixins:[],

21. Routing in Vue js by using vue-router npm package:
     a. Vue.use(VueRouter)
     b. router = new VueRouter({
                      routes: definedRoutesArray,
                      mode: history or hash
                      })
      this is defined route object
          export default [
            {path: '/', component: showBlogs},
            {path: '/blog/:id', component: singleBlog}
          ]
     c. using router: router in root Vue instance:
          new Vue({
            render: h => h(App),
            router: router,
          }).$mount('#app')

     d. using <router-view></router-view> tag in root element to show the
      components that defined in routes object instead of <router-view>
    [ATTENTION] 
      by this kind of this routing we only request to server once,
       only for index.html

22. we can use history mode or hash mode in router instance 

23. we can add router link by <a href=""> tag or
  by <router-link to="/add"> tag (this is provided by VueRouter)
  (this kind of routing don't reload the page)
  
24. we can use route params in components (this.$route.params.) 
by using vue-router package

