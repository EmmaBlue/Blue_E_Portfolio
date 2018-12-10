



// Define a new component called home

// Assign variable to vue component so it can be used by vue router

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
    
        },

        animate (e) {

            console.log("animate");
            var currentScrollPosition = e.srcElement.scrollTop;
            if (currentScrollPosition > this.scrollPosition) {
                console.log("Scrolling down");
            }
            this.scrollPosition = currentScrollPosition;
    
            //Display element and animate it
            //element.classList.remove("none");
            //element.classList.add("animated");
            //element.classList.add("fadeIn");
        },

    

    },
    
    template: 
  `
  <section id="main-home"><section id="front-sect">
<h2 class="hidden">Home Page</h2>
<div class="animated fadeIn delay-1s" v-on:scroll="animate" id="home-flex">
    <div id="home-desc">
        <h2>Hi there!</h2>
        <p>I’m Emma Blue, a <span>front end developer</span> and <span>community organizer</span> with a passion for creating human centred solutions. </p>
        <button><router-link to="/projects">See My Work</router-link></button>
    </div>
    <div id="emma-sect">
        <img id="emma-front" srcset="./images/emma-mobile.png 318w, ./images/emma-desktop.png 634w" sizes="(max-width:599px) 320px, (min-width:600px) 630px" src="./images/emma-mobile.png" alt="Emma Blue">
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
          <img id="about-pic" srcset="./images/about-mobile.jpg 295w, ./images/about-desktop.jpg 554w" sizes="(max-width:600px) 290px, (min-width:601px) 554px"/>
            <div>
                <p>
                    It's always been hard to put my interests in a box. I'm a web developer, designer and community organizer with four years of experience in project management, as well as a poet, theatre lover, and voracious reader. I love throwing myself into the work I do and drawing from different areas of my expertise to make something beautiful.
                </p>
                <button><router-link to="/about">Get to Know Me</router-link></button>
            </div>
        </div>
  </section>
  <section id="comm-sect">
    <h2 class="hidden">Community</h2>
    <div class="home-flex">
        <img class="home-svg" alt="community" src="./images/community.svg">
        <p>You don’t have anything if you don’t have community.</p>
    </div>
    <button><router-link to="/community">See My Track Record</router-link></button>
  </section>
<section id="contact-sect">
<h2 class="hidden">Contact</h2>
    <div class="home-flex">
        <img class="home-svg" alt="contact" src="./images/contact.svg">
        <p>Let’s get in touch!</p>
    </div>
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
            showDetails : false,
            playActivate: false,
            projectvid: "",
            projecttablet: "",
            projectdesktop:"",
            videoplayer: "",
            projectlink: "",
            vidon: false,

        }

    },

    mounted : function() {
            
        //passing null in makes boolean false, pass into else statement in fetchSectionData
        this.fetchSectionData(null);


    },
    methods: {

        playVideo() {

            console.log('load video initialized');


                this.vidon = true,
                this.playActivate = true,
                videoplayer = this.$refs.videoElement,
                playPause = this.$refs.playpause,
                rewind = this.$refs.rewind,
                muteBtn = this.$refs.muteBtn,
                videoplayer.volume = 0.6;
    
                videoplayer.play();



        },

        togglePlay() {


            if (videoplayer.paused) {
                playPause.classList.add("fa-pause");
                playPause.classList.remove("fa-play");
                videoplayer.play();
              } else {
                playPause.classList.add("fa-play");
                playPause.classList.remove("fa-pause");
                videoplayer.pause();
              }
        },

        rewind() {
            videoplayer.currentTime = 0;
          },

        mute() {
            if (videoplayer.muted) {
              videoplayer.muted = false;
              muteBtn.classList.remove("fa-volume-down");
              muteBtn.classList.add("fa-volume-up");
              videoplayer.volume = 0.6;
            } else {
              videoplayer.muted = true;
              muteBtn.classList.remove("fa-volume-up");
              muteBtn.classList.add("fa-volume-down");
              videoplayer.volume = 0;
            }
          },

        loadSection(e) {

            dataKey = e.target.getAttribute("data");
            //videoplayer = this.$refs.videoElement,
            currentData = this.alldata.filter(tbl_section=> tbl_section.section_ID == dataKey);
            
            this.projectname = currentData[0].section_name;
            this.projectmobile = currentData[0].mobile_path;
            this.projecttablet = currentData[0].tablet_path;
            this.projectdesktop = currentData[0].desktop_path;
            this.projectwide = currentData[0].wide_path;
            this.projectfeatures= currentData[0].section_features;
            this.projectdesc= currentData[0].section_desc;
            this.projectlink= currentData[0].section_link;
            this.showDetails = true;
            if (currentData[0].section_ID == 7) {
                this.projectvid = currentData[0].video_tablet_path;
                //this.playActivate = true;
            }
            else {
                this.projectvid = null;
            }
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
            this.playActivate = false;
            videoplayer = this.$refs.videoElement,
            videoplayer.pause();
            this.vidon = false;


        }

    },
    
template: `
<section class="animated fadeIn delay-1s" id="projectp-sect">
<h2>Projects</h2>
<div id="projects-lightbox" class="hidden-lightbox lightbox" :class="{'show-section' : showDetails}">
        <span v-on:click="closeSection" class="lightbox_icon">x</span>
        <h2>{{projectname}}</h2>
        <div class="lightbox-flex">
            <div>
                <div v-if="vidon == false" v-on:click="playVideo" class="image-section">
                    <img :alt="projectname" :srcset="'./images/' + projectmobile + ' 300w, ./images/' + projecttablet + ' 637w,' " sizes="(max-width:600px) 630px, (min-width:601px) 300px">
                    <div v-if="projectname == 'Demo Reel'" ref="playBtn" id='playBtn'><i class="far fa-play-circle"></i></div>
                </div>
                <div class="first-arrow arrow hidden" v-on:click="backwardSection">
                    <p>></p>
                </div>
                <div class="arrow second-arrow hidden" v-on:click="loadSection">
                    <p><</p>
                </div>
                <div v-if="projectname == 'Demo Reel'" class="videoScreen hide-video-section" :class="{'show-video-section' : playActivate}">
                    <video ref="videoElement" id="videoElement">
                        <source :src="'./video/' + projectvid">
                    </video>
                  <div class="controls">
                    <ul>
                      <li v-on:click="rewind" ref="rewind" class="rewindToStart">
                            <i class="fas fa-fast-backward"></i>
                        </li>
                      <li v-on:click="togglePlay" class="play-pause">
                            <i ref="playpause" class="fas fa-pause"></i>
                          </li>
                      <li id="muteBtn"><i v-on:click="mute" ref="muteBtn" class="fas fa-volume-up"></i></li>
                      <li><i class="far fa-volume-mute" style="display: none;"></i></li>
                    </ul>
                  </div>
                </div>
            </div>
            <div class="project-text">
                <h2>Technical Features</h2>
                <p class="project-features">{{projectfeatures}}</p>
                <p class="project-desc">{{projectdesc}}</p>
                <button><a :href="projectlink">Learn More</a></button>
                 
            </div>
            
        </div>
    </div>
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
    
</div>
</section>


`});

const about =  Vue.component('about-vue', { 

    data: function() {

        return {

        
        }

    },

    methods: {
    

    },

    template: `
    <section class="animated fadeIn delay-1s" id="main-about">
        <h2>About Me</h2>
        <section id="about-desc">
            <div>
                <img srcset="./images/aboutp-mobile.png 222w, ./images/aboutp-desktop.png 292w" sizes="(max-width: 1023px) 220px,(min-width: 1024px) 290px">
            </div>
            <section id="about-text">
                <h2>I love solving problems and making things happen.</h2>
                <p><span class="bold">You know that friend who’s the first one to coordinate get togethers, help out when someone’s in dire straits, and rally the group around a cause?</span> That’s always been me.  I love finding a problem and working with others to solve it . It’s what I’ve been doing for the past four years in my work as the Director of Advocacy at the London Youth Advisory Council, and in my real-world design and web development projects. </p>
            </section>
        </section>
        <section id="fun-facts">
            <h2>Fun Facts</h2>
            <div>
                <section id="productivity-block">
                    <img class="svg" src="./images/to-do.svg">
                    <p>I’m obsessed with all things productivity. If you ever need to hear about the brilliance of David Allen’s <a href="https://gettingthingsdone.com/">Getting Things Done</a>, prepare for a lecture.</p>
                </section>
                <section id="obama-block">
                    <img class="svg" src="./images/megaphone-thin.svg">
                    <p>Community and technology have always been interwoven for me. My political awakening was on the Young Adults for Obama ning, back in 2008 when nings were a thing.</p>
                </section>
                <section id="poetry-block">
                    <img class="svg" src="./images/guitar.svg">
                    <p>I’ve never given up on being a Renaissance woman. I won Grand Slam Champ at <a href="http://www.londonpoetryslam.ca/">the London Poetry Slam</a> in 2015, and I plan on taking calculus for fun when I get the chance.</p>
                </section>
            </div>
        </section>
        <section id="technical-skills">
            <h2>Technical Skills</h2>
            <div class="flex">
                <section id="css-skills">
                    <img class="svg" src="./images/web-design.svg">
                    <div>
                        <p>CSS Grid</p>
                        <p class="tighten">Bootstrap</p>
                    </div>
                </section>
                <section id="js-skills">
                    <img class="svg" src="./images/js-about.svg">
                    <div>
                        <p>GreenSock</p>
                        <p class="tighten">Vue</p>
                    </div>
                </section>
                <section id="server-skills">
                    <img class="svg" src="./images/server.svg">
                    <p>PHP</p>
                </section>
            </div>
        </section>
        <div id="resume-area"> 
        <section id="education">
            <h2>Education</h2>
            <div class="flex">
                <img class="svg" src="./images/book.svg">
                <div>
                    <p>Media Theory and Production / Interactive Media Design - April 2019</p>
                    <p>4.0 GPA</p>
                </div>
            </div>
        </section>
        <section id="experience">
            <h2>Work Experience</h2>
            <div class="flex">
                <img class="svg" src="./images/work.svg">
                <div>
                    <p>Director of Advocacy - London Youth Advisory Council</p>
                    <p>May 2015 - current</p>
                    <ul class="resume-list">
                        <li>Manage a team of <span class="bold">15 youth volunteers</span> to design and           
                        execute community projects</li>
                        <li>Collaborate with <span class="bold">non-profits and government officials</span> to advocate on policy</li>
                        <li>Coordinate an annual election with <span class="bold">30+</span> youth councillor applicants and <span class="bold">over 5000 voters</span></li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="accomplishments">
            <h2>Key Accomplishments</h2>
            <div class="flex">
                <img class="svg" src="./images/achievement.svg">
                <div>
                    <ul class="resume-list">
                        <li>Generated <span class="bold">5 new member leads</span> in first two weeks of London Squash and Fitness Club website launch</li>
                        <li>Co-led podcast project with web.isod.es to <span class="bold">interview mayoral candidates</span> and share election info online with youth <a href="https://kidsthesedays.london/">| kidsthesedays.london |</a> (October 2018)</li>
                        <li>Presented at Association of Municipalities Conference <span class="bold">in Ottawa</span> (August 2018)</li>
                        <li><span class="bold">Managed 2 staff members</span> to conduct interviews with youth for an evaluation contract commissioned by the City of London (September 2016 - January 2017)</li>
                    </ul>
                </div>
            </div>
        </section>
        </div>
        <section id="buttons">
            <a target="_blank" href="https://drive.google.com/file/d/1pCzIIA1gSl58UtXOqOZ_nL1TcP2vwH1p/view?usp=sharing"><button>View My Colour Resume</button></a>
            <a target="_blank" href="https://drive.google.com/file/d/1wHipQmG1XfSV2dU7Qogq2VB04NnjLjhz/view?usp=sharing"><button>View My Black & White Resume</button></a>
        </section>
    </section>`




});

const community = Vue.component('community-vue', {


    data: function() {

        return {

            alldata: [],
            sectiondata: [],
            singlesectiondata : [],
            arrowid : "",

            projectname: "",
            projectmobile : "",
            projecttablet : "",
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
            this.projectID= currentData[0].section_ID;
            this.projectmobile = currentData[0].mobile_path;
            this.projecttablet = currentData[0].tablet_path;
            this.projectfeatures= currentData[0].section_features;
            this.projectdesc= currentData[0].section_desc;
            this.showDetails = true;
            return dataKey;

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

    template: `<section id="main-community" class="animated fadeIn delay-1s">
    <h2>Community Work </h2>
<section id="comm-main">
    <section id="comm-work">
    <img id="lyac-pic" srcset="./images/community-main-tablet.jpg 376w, ./images/community-main-tablet@2x.jpg 750w" sizes="(max-width:600px) 370px, (min-width:601px) 750px"/>
        <p>Over the past four years, I've worked as the Director of Advocacy at the London Youth Advisory Council. It's been one of the greatest opportunities I've ever received, and I've gotten the chance to support many incredible projects driven by youth - everything from lobbying for a discounted high school bus pass to supporting a peer support group for youth of colour.</p>
    </section>
    <section id="projects-support">
        <h2>Projects Supported</h2>
        <div class="lyac-box"><a target="_blank" href="https://www.facebook.com/girlsinte/?jazoest=26510012287558854521169968908098481046557881036810311375708854541037467106105534548689769115115531089755103586510011912071102988645794866538895122735068734911474118705469687855116838477741011108756113755310269113103"><img src="./images/girls-te.svg"></a></div>
        <div class="lyac-box"><a target="_blank" href="https://kidsthesedays.london/"><img src="./images/kids-these-days.svg"></a></div>
        <div class="lyac-box"><a target="_blank" href="https://www.facebook.com/InterActionCollectiveOnt/?jazoest=26510012287558854521169968908098481046557881036810311375708854541037467106105534548689769115115531089755103586510011912071102988645794866538895122735068734911474118705469687855116838477741011108756113755310269113103"><img src="./images/interaction.svg"></a></div>
    </section>
</section>
<section id="research-sect">
    <h2>Research & Evaluation Projects</h2>
        <section class="comm-pic-sect">
            <section id="ypd-box" class="comm-box" :data="9" v-on:click="loadSection">
                <h2>YPD Interviewing</h2>
            </section>
            <section id="coop-box" class="comm-box" :data="10" v-on:click="loadSection">
                <h2>Co-Op Evaluation</h2>
            </section>
            <div id="research-lightbox" class="hidden-lightbox lightbox" :class="{'show-section' : showDetails}">
                <span v-on:click="closeSection" class="lightbox_icon">x</span>
                <h2>{{projectname}}</h2>
                <div class="lightbox-flex">
                    <div class="image-section">
                        <img id="research-image" :alt="projectname" :srcset="'./images/' + projectmobile + ' 300w, ./images/' + projecttablet + ' 637w,' " sizes="(max-width:600px) 630px, (min-width:601px) 300px">
                    </div>
                    <div class="project-text">
                        <h2>Technical Features</h2>
                        <p class="project-features">{{projectfeatures}}</p>
                        <p class="project-desc">{{projectdesc}}</p>
                    </div>
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
                <img src="/images/amo.svg">
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

    template: ` <section id="contactp-sect" class="animated fadeIn delay-1s">
<h2>Contact</h2>
<p>Have a question or a concern? Want to work together on a coding project? Have an idea for a community project? Feel free to contact me!  </p>
<div id="form-container">
<form id="contact-form" action="./includes/sendEmail.php" method="POST">
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

/* Contact Form Redirects */ 

const error = Vue.component('error-vue', { 

    data: function() {

        return {


        }

    },

    mounted : function() {


    },
    methods: {


    },
    
template: `<section id="error-sect">
<h2>Oops!</h2>
<img alt="error" src="./images/error.svg">
<h2>Your message contains an error. Please fill it out again and I'll get back to you as soon as I can!</h2>
<a href="http://emmajaeblue.com/#/contact"><button>Go Back to Contact Page</button></a>
</section>

`});

const emailerror = Vue.component('email-error-vue', { 

    data: function() {

        return {


        }

    },

    mounted : function() {


    },
    methods: {


    },
    
template: `<section id="email-error-sect">
<h2>Oops!</h2>
<img alt="error" src="./images/error.svg">
<h2>Your message contains an invalid email address. Please fill it out again and I'll get back to you as soon as I can!</h2>
<a href="http://emmajaeblue.com/#/contact"><button>Go Back to Contact Page</button></a>
</section>

`});


const success = Vue.component('success-vue', { 

    data: function() {

        return {


        }

    },

    mounted : function() {


    },
    methods: {


    },
    
template: `<section id="success-sect">
<h2>Looking forward to connecting!</h2>
<img alt="success" src="./images/success.svg">
<h2>Your message's been sent! I'll get back to you very soon.</h2>
</section>

`});
  
  
  const routes = [{path: '/', component: home},
    {path: '/projects', component: projects},
    {path: '/about', component: about},
    {path: '/community', component: community},
    {path: '/contact', component: contact},
    {path: '/error', component: error},
    {path: '/email-error', component: emailerror},
    {path: '/success', component: success}]
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
        loading: false,
        socItems: [

            {link:"https://twitter.com/EmmaJaeBlue", id: "twitter", class: "fab fa-twitter"},
            {link:"https://www.facebook.com/emmajaeblue", id: "facebook", class: "fab fa-facebook-square"},
            {link:"https://www.instagram.com/emmajaeblue/", id: "instagram", class: "fab fa-instagram"},
            {link:"https://github.com/EmmaBlue?tab=repositories", id: "github", class: "fab fa-github"}

          ],

        
    }, 

    created : function() {


    },

    mounted : function() {
        // listen for when Vue is done building itself 
        console.log('mounted');


    },

    updated : function() {
        // listen for when Vue completes its render cycle
        console.log('updated');



    },
    methods : {


    }
  });

  // Making Loading Animation Work

  router.beforeResolve((to, from, next) => {
    app.loading = true;
    next();
  })


  router.afterEach((to, from) => {
    setTimeout(() => app.loading = false, 1000); // timeout for demo purposes
  })
