App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.route("ourwork", { path: "/ourwork" });
  this.route("about", { path: "/about" });
  this.route("contact", { path: "/contact" });
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

