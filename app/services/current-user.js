import Ember from 'ember';

export default Ember.Service.extend({
  curUser: null,

  login(user){
    this.set('curUser', user);
  },
  logout(){
    this.set('curUser', null);
  }
});
