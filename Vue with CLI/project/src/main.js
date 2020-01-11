import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
  // default mode is 'hash'
});

// Global Custom directives

Vue.directive('theme', {
// bind is one of the lifecyle hooks for directives
// el: refers to the element that uses the directive
// binding referes to information about binding
// vnode: refers to virtual node in the DOM
// visit this site for more information about custom directives:
// http://vuejs.org/v2/guide/custom-directive.html
  bind(el, binding) {
    if(binding.value == 'wide') {
      el.style.maxWidth = '1200px';
    } else if(binding.value == 'narrow') {
      el.style.maxWidth = '560px';
    }
    if(binding.arg == 'column'){
      el.style.background = '#ddd';
      el.style.padding = '20px';
    }
  },
});

//Global Filters: modifies data to show on browser

Vue.filter('snippet', value => {
  return value.slice(0, 100) + '...';
});

// router also add this.$route to the components that use routing and <router-view>
new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
