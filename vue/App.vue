const vm = new Vue({

    el: '#app',
    data: {

        
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