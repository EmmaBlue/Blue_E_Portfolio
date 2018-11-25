import './sass/style.scss'
import Vue from 'vue'
import App from './vue/App.vue'
import ProjectApp from './vue/ProjectApp.vue'
import CommApp from './vue/CommApp.vue'
import ContactApp from './vue/ContactApp.vue'

 if (module.hot) {
       module.hot.accept()
     }


var app = new Vue({
    el: '#app',
    render: h => h(App),

 })

 var app = new Vue({
   el: '#project-app',
   render: h => h(ProjectApp),

})

var app = new Vue({
   el: '#comm-app',
   render: h => h(CommApp),

})

var app = new Vue({
   el: '#contact-app',
   render: h => h(ContactApp),

})

 import emma from './images/emma-mobile.png'
 import about from './images/about-mobile.jpg'
 var emmaImg = document.querySelector('#emma-front')
 var aboutImg = document.querySelector('#about-pic')
 emmaImg.src = emma;
 aboutImg.src = about;




