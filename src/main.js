// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
    bgColor: ["#c09","#90c","#09c","#9c0"],
    curindex: 0,
    name: "down"
  },
  methods:{
    wheelEvent(e){
        if(e.deltaY > 0){
          if(this.curindex === this.bgColor.length-1){
               return
          }
          this.name = "down"
           this.curindex++;
        }else{
          if(this.curindex === 0){
            return
          }
          this.name = "up"
          this.curindex--;
        }
    }
  }
  // components: { App },
  // template: '<App/>'
})
