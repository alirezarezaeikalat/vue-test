import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// making event bus and export it
export const bus = new Vue();
 

// to import a component globally
//import Ninjas from './components/Ninjas.vue'
//Vue.component('ninjas', Ninjas);



// h is alias for createElement
//render(createElement) {
//  return createElement(App);    
//}
// h comes from hyperscript which is commonly used in
// many virtual doms

new Vue({
  render: h => h(App), 
}).$mount('#app')

// this part is equal to 
//new Vue({
//  el: '#app'
//  components: {App}
// template: '<App/>'  
//})
