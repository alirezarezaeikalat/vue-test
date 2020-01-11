1. to create a project in Vue

	a. vue create <project name>

2. to run the project cd to the folder of the project then

	a. npm run serve

3. other part of vue is in Vue CDN folder

///////// USING VUE CLI //////

3. titles in Vue CLI practice:

	a. Vue ROOT Component
	
	b. NESTING components

	c. how SCOPED STYLES work

	d. using PROPS in CHILD COMPONENTS after receiving it or use it in methods just like data

	e. passing REF type or PRIMITIVE types in PROPS

	f. resembling ref type behavior even with primitive types by EMMITING EVENTS to ROOT components

  g.  using golbal EVENT BUS to interact between sibling vue instances without interacting with root instance

  h. LIFE CYCLE HOOKS (very important)

  ////// slots-and-after /////////

  i. slots to use it to make a standard template

  j. dynamic component by using <component v-bind:is=""></component> and keep-alive to show different components

  ///// PROJECTS  //////////

  k. binding to checkboxes and selectboxes

  l. $http.post() or get using vue-resource npm package or axios.post using axios npm package
    we also use jsonplaceholder for the test

  m. custom directive(directives are like components)/ in the main.js Vue.directive('<name>', {
    // lifecycle hooks for directives
    bind(el, binding, vnode) {
      el.style ...
      binding.arg ...
      binding.value ...
    }
  });

  n. using filters to show modified data in the browsers

  o. Custom search filter using computed properties

  p. make directives and filters locally
  
  q. Using MIXINS, to use same code in different part

  r. Routing in Vue js by using vue-router npm package:
     a. Vue.use(VueRouter) // b. router = new VueRouter({routes: definedRoutesArray})
    // c. using router: router in root Vue instance // d. using <router-view> tag in root element
    ATTENTION: by this kind of this routing we only request to server once, only for index.html

  s. history mode and # mode in routing

  t. we can add router link by <a href=""> tag or  by <router-link to=""> tag

  u. we can use route params in components (this.$route.params.) by using vue-router package

  v. Using firebase for the realtime database