import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    logOut(){
      this.transitionTo('index');
    },
    updateUser(user, params){
      Object.keys(params).forEach(function(key){
        if(params[key]){
          user.set(key, params[key]);
        }
      });
      user.save();
      this.transitionTo('user', user.id);
    }
  }
});
