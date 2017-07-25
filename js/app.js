App = Ember.Application.create();

App.Router.map(function() {
  this.route("ourwork", { path: "/ourwork" });
  this.route("about", { path: "/about" });
  this.route("contact", { path: "/contact" });

  __device__ = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/);
      
});

App.OurworkRoute = Ember.Route.extend({
  model: function() {
    return [
    {www:'http://www.pitchswap.co', name:'pitchswap',image:'img/pitchswap.png', desc:'Where ideas come to get pitched!'}, 
    {www:'http://fundingworks.org', name:'fundingworks',image:'img/FWlogo.png', desc:'Helping Non-Profits utilize crowd-funding.'}, 
    {www:'http://www.bridesview.com', name:'bridesview',image:'img/bridesview.jpg', desc:'Helping Brides TO-BE create their dream wedding.'},
    {www:'http://mealtik.com', name:'mealtik',image:'img/homepage_v3.png', desc:' Your local homemade meal network.'},
    {www:'http://www.mycollegeplan.com', name:'MyCollegePlan',image:'img/ecliptic(1).JPG', desc:' Financial services company for students seeking financial aid for higher education.'},
    {www:'http://www.riverchasers.com/', name:'riverchasers',image:'img/riversite.jpg', desc:' A facilitator of no buy-in Poker Tournaments, in the Delaware Valley. '},
    {www:'http://www.aramarkwfm.com', name:'ARAMARK',image:'img/aramark_logo.jpg', desc:'ARAMARKs WorkForce Management Portal.'}
            ];
  }
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return ['First and foremost, build great products',
            'Practice Agile and behavior-driven development.',
            'Measurement and iterative process, is the only way to improve',
            'Help customers discover how to innovative their products/services',
            'Realize your apps should be device-agnostic, cross-platform & responsive',
            'Focus on open-source: Javascript, Nodejs, Express, React, GraphQL',
            'Utilize the cloud: Azure, Heroku, Amazon Web Services, Firebase'    
            ];
  }
});

App.IndexView = Em.View.extend({
    didInsertElement: function() {
        if(!__device__){
        this.$('#sidecontent').hide().fadeIn(500);
       }
       
    }
});

App.OurworkView = Em.View.extend({
    didInsertElement: function() {
      if(!__device__){
       this.$('h1').hide().fadeIn(400);
       this.$('.form-content').hide().slideDown(300);
     }
    }
});

App.AboutView = Em.View.extend({
    didInsertElement: function() {
     if(!__device__){
       this.$('h1').hide().fadeIn(400);
       this.$('.form-content').hide().slideDown(300);
     }
    }
});

App.ContactView = Em.View.extend({
    didInsertElement: function() {
      twttr.widgets.load();
     if(!__device__){
       this.$('h1').hide().fadeIn(400);
       this.$('.form-content').hide().slideDown(300);
     }
    }
});
