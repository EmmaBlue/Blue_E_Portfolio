

// Define a new component called home

//assign variable to vue component instead

const home = Vue.component('home-vue', { 

    data: function() {

        return {

        
        }

    },

    methods: {

        responsiveImg: function(event){
            // `this` inside methods points to the Vue instance
            // `event` is the native DOM event
            console.log('responsiveImg working!')
    
        }

        
        
    

    },
    
    template: 
  `<section id="main-home"><section id="front-sect">
<h2 class="hidden">Home Page</h2>
<div class=flex>
    <div>
        <h2>Hi there!</h2>
        <p>I’m Emma Blue, a <span>front end developer</span> and <span>community organizer</span> with a passion for creating human centred solutions. </p>
        <button><router-link to="/projects">See My Work</router-link></button>
    </div>
    <div>
        <img id="emma-front" src="./images/emma-mobile.png" alt="Emma Blue">
    </div>
</div>
</section>
<section id="project-sect">
  <div id="project-grid">
      <section class="work-box">
      </section>
      <section class="work-box">
      </section>
      <section class="work-box">
      </section>
      <section class="work-box">
      </section>
  </div>
  <div id="but-sect">
    <button><router-link to="/projects">Check Out More</router-link></button>
  </div>
</section>
<section id="about-sect">
      <h2>About Me</h2>
       <div id="about-flex">
          <!--<img id="about-pic" src="./images/about-mobile.jpg">-->
          <img id="about-pic" srcset="./images/about-mobile.jpg 290w, ./images/about-desktop.jpg 225w" sizes="(max-width:600px) 290px, (min-width:601px) 225px, 290px"/>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis sapien sapien, ac interdum libero mollis id. Ut a nibh posuere, ullamcorper leo sed, mattis ligula. Sed iaculis ligula sem. Duis non sem ut urna tempus ullamcorper. Nullam vestibulum fringilla euismod. Morbi eleifend dui ligula, et commodo elit malesuada non. Sed at suscipit arcu. Suspendisse non suscipit neque, at gravida sem. Proin maximus, est in convallis aliquet, mi odio eleifend diam
                </p>
                <button><router-link to="/about">Get to Know Me</router-link></button>
            </div>
        </div>
  </section>
  <section id="comm-sect">
    <h2 class="hidden">Community</h2>
    <p>You don’t have anything if you don’t have community.</p>
    <button><router-link to="/community">See My Track Record</router-link></button>
  </section>
<section id="contact-sect">
<h2 class="hidden">Contact</h2>
<p>Let’s get in touch!</p>
<button><router-link to="/contact">Contact Me</router-link></button>
</section>
</section>
`});

const projects = Vue.component('projects-vue', { 

    data: function() {

        return {

            alldata: [],
            sectiondata: [],
            singlesectiondata : [],
            arrowid : "",

            projectname: "",
            projectmobile : "",
            projectfeatures : "",
            projectdesc : "",
            showDetails : false

        }

    },

    mounted : function() {
            
        //passing null in makes boolean false, pass into else statement in fetchMovieData
        this.fetchSectionData(null);


    },
    methods: {


        loadSection(e) {

            dataKey = e.target.getAttribute("data");
            currentData = this.alldata.filter(tbl_section=> tbl_section.section_ID == dataKey);
            this.projectname = currentData[0].section_name;
            this.projectmobile = currentData[0].mobile_path;
            this.projectfeatures= currentData[0].section_features;
            this.projectdesc= currentData[0].section_desc;
            this.showDetails = true;
            return dataKey;

            //setTimeout(function () {window.scrollTo(0,1200);}, 500);

        },

        backwardSection() {
            // depending on datakey on section, when arrow clicked, make section ID - 1 
            var getKey = getKey.bind(dataKey);
            console.log(dataKey);

        },

        fetchSectionData(project) {
            // IF TRUE                                                : IF FALSE
            url = project ? `./includes/index.php?project=${project}` : './includes/index.php';

            fetch(url) // pass in the one or many query
            .then(res => res.json())
            .then(data => {
                // IF PROJECT TRUE
                if (project) {

                    //getting one movie, so use the single array
                    this.sectiondata = data;
                } else {
                    // push all the video into the video array
                    this.alldata = data;
                }
            })
        },

        closeSection(e) {
            this.showDetails = false;

        }

    },
    
template: `<section id="projectp-sect">
<h2>Projects</h2>
<div id="projects-gal">
    <section class="project-box" :data="1" v-on:click="loadSection">
    </section>
    <section class="project-box" :data="2" v-on:click="loadSection">
    </section>
    <section class="project-box" :data="3" v-on:click="loadSection">
    </section>
    <section class="project-box" :data="4" v-on:click="loadSection">
    </section>
    <section class="project-box" :data="5" v-on:click="loadSection">
    </section>
    <section class="project-box" :data="6" v-on:click="loadSection">
    </section>
    <section class="project-box" :data="7" v-on:click="loadSection">
    </section>
    <section class="project-box" :data="8" v-on:click="loadSection">
    </section>
    <div class="hidden-lightbox lightbox" :class="{'show-section' : showDetails}">
        <h2 class="hidden">{{projectname}}</h2>
        <span v-on:click="closeSection" class="lightbox_icon">X</span>
        <div>
            <img :alt="projectname" :src="'./images/' + projectmobile">
        </div>
        <div class="project-text">
            <h2>Technical Features</h2>
            <p class="project-features">{{projectfeatures}}</p>
            <p class="project-desc">{{projectdesc}}</p>
        </div>
        <div class="arrow" v-on:click="backwardSection">
            <p>></p>
        </div>
        <div class="arrow" v-on:click="loadSection">
            <p><</p>
        </div>
    </div>
</div>
</section>

`});

const about =  Vue.component('about-vue', { });

const community = Vue.component('community-vue', {


    data: function() {

        return {

            alldata: [],
            sectiondata: [],
            singlesectiondata : [],
            arrowid : "",

            projectname: "",
            projectmobile : "",
            projectfeatures : "",
            projectdesc : "",
            showDetails : false

        
        }

    },

    mounted : function() {
            
        //passing null in makes boolean false, pass into else statement in fetchMovieData
        this.fetchSectionData(null);


    },

    methods: {

        loadSection(e) {

            dataKey = e.target.getAttribute("data");
            currentData = this.alldata.filter(tbl_section=> tbl_section.section_ID == dataKey);
            this.projectname = currentData[0].section_name;
            this.projectmobile = currentData[0].mobile_path;
            this.projectfeatures= currentData[0].section_features;
            this.projectdesc= currentData[0].section_desc;
            this.showDetails = true;
            return dataKey;

            //setTimeout(function () {window.scrollTo(0,1200);}, 500);

        },

        backwardSection() {
            // depending on datakey on section, when arrow clicked, make section ID - 1 
            var getKey = getKey.bind(dataKey);
            console.log(dataKey);

        },

        fetchSectionData(project) {
            // IF TRUE                                                : IF FALSE
            url = project ? `./includes/index.php?project=${project}` : './includes/index.php';

            fetch(url) // pass in the one or many query
            .then(res => res.json())
            .then(data => {
                // IF PROJECT TRUE
                if (project) {

                    //getting one movie, so use the single array
                    this.sectiondata = data;
                } else {
                    // push all the video into the video array
                    this.alldata = data;
                }
            })
        },

        closeSection(e) {
            this.showDetails = false;

        }

        
    

    },

    template: `<section id="main-community">
<section id="comm-main">
    <section id="comm-work">
        <img src="./images/community-main.jpg" id="lyac-pic">
        <p>Over the past four years, I've worked as the Director of Advocacy at the London Youth Advisory Council. It's been one of the greatest opportunities I've ever received, and I've gotten the chance to support many incredible projects driven by youth - everything from lobbying for a discounted high school bus pass to supporting a peer support group for youth of colour.</p>
    </section>
    <section id="projects-support">
        <h2>Projects Supported</h2>
        <div class="lyac-box"><img src="./images/girls-te.svg"></div>
        <div class="lyac-box"><img src="./images/kids-these-days.svg"></div>
        <div class="lyac-box"><img src="./images/interaction.svg"></div>
    </section>
</section>
<section id="research-sect">
    <h2>Research & Evaluation Projects</h2>
    <section class="comm-pic-sect">
        <section class="comm-box" :data="9" v-on:click="loadSection">
            <h2>YPD Interviewing</h2>
        </section>
        <section class="comm-box" :data="10" v-on:click="loadSection">
            <h2>Co-Op Evaluation</h2>
        </section>
        <div class="hidden-lightbox lightbox" :class="{'show-section' : showDetails}">
                <h2 class="hidden">{{projectname}}</h2>
                <span v-on:click="closeSection" class="lightbox_icon">X</span>
                <div>
                    <img :alt="projectname" :src="'./images/' + projectmobile">
                </div>
                <div class="project-text">
                    <h2>Technical Features</h2>
                    <p class="project-features">{{projectfeatures}}</p>
                    <p class="project-desc">{{projectdesc}}</p>
                </div>
                <div class="arrow" v-on:click="backwardSection">
                    <p>></p>
                </div>
                <div class="arrow" v-on:click="loadSection">
                    <p><</p>
                </div>
        </div>
    </section>
</section> 
<section id="prezi-sect">
    <h2>Presentations & Workshops</h2>
     <section class="comm-pic-sect">
        <div class="comm-box flex">
            <div class="org-logo">
                <img src="./images/youthrex.svg" >
            </div>
            <p>In my November 2016 keynote, I talked about the dangers young people face when providing honest feedback to services and the way that feedback is censored. </p>
        </div>
        <div class="comm-box flex">
            <div class="org-logo">
                <img src="./images/amo.svg">
            </div>
            <p>In August 2018, my colleague and I presented to a group of city councillors and bureaucrats about youth engagement.</p>
        </div>
    </section>
</section>
</section>`



}); 

const contact = Vue.component('contact-vue', {

    data: function() {

        return {

            contactFields: [

                {label: 'Name', type:'text', class: 'input', name: 'name', placeholder:'Your First Name'},
                {label: 'Email', type:'text', class: 'input', name: 'email', placeholder:'Your Email Address'},
                {label: 'Referral', type:'text', class: 'input', name: 'referral', placeholder:'How Did You Hear About Me?'},
                {label: 'Subject', type:'text', class: 'input', name: 'subject', placeholder:'Subject'}
              ],

        
        }

    },

    methods: {
    

    },

    template: ` <section id="contactp-sect">
<h2>Contact</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis sapien sapien, ac interdum libero mollis id. </p>
<div id="form-container">
<form id="contact-form">
    <div class="contact-grid">
        <div v-for="field in contactFields" class="field">
            <label class="hidden" for="field.name">{{field.name}}</label>
            <input :type="field.type" :class="field.class" :name="field.name" :placeholder="field.placeholder">
        </div>
    <div class="field">
        <textarea wrap="off" name="message" rows="10" cols="20" placeholder="Message"></textarea>
    </div>
    </div>
    <button type="submit" value="Submit">Submit</button>
</form>
</div>
</section>`


});
  
  
  const routes = [{path: '/', component: home},
    {path: '/projects', component: projects},
    {path: '/about', component: about},
    {path: '/community', component: community},
    {path: '/contact', component: contact}]
    /*
    {path: '/community', component: CommApp},
    {path: '/contact', component: ContactApp},
    //{path: '/community', component: Community}
    //each route is an object in an array with a defined path and component to be loaded
    //{path: '/users', component: Users},
    //{path: '/users/:userid', component: Users} //:userid is dynamic data from link
    //{{ $this.route.params.userid }} will output :userid from url
    //watch:{ '$route' (to, from){method with changing data} } in export default
*/
  
  const router = new VueRouter({
     //pass routes into vue router
     routes,
     //mode: history //removes hashtag from url
   });


  
  const app = new Vue({
     el: '#app',
     router,
     data: {
        socItems: [

            {link:"http://www.twitter.com", id: "twitter", class: "fab fa-twitter"},
            {link:"http://www.facebook.com", id: "facebook", class: "fab fa-facebook-square"},
            {link:"http://www.instagram.com", id: "instagram", class: "fab fa-instagram"},
            {link:"https://github.com/EmmaBlue?tab=repositories", id: "github", class: "fab fa-github"}

          ],

          contactFields: [

            {label: 'Name', type:'text', class: 'input', name: 'name', placeholder:'Your First Name'},
            {label: 'Email', type:'text', class: 'input', name: 'email', placeholder:'Your Email Address'},
            {label: 'Referral', type:'text', class: 'input', name: 'referral', placeholder:'How Did You Hear About Me?'},
            {label: 'Subject', type:'text', class: 'input', name: 'subject', placeholder:'Subject'}
          ]
        
    }, 

    mounted : function() {
        // listen for when Vue is done building itself 
        console.log('mounted');

    },

    updated : function() {
        // listen for when Vue icompletes its render cycle
        console.log('updated');

    },
    methods : {

    }
  });