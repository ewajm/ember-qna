import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service(),
  actions: {
    submitSignup(params){
      var context = this;
      var nameAvailable = this.store.query('user', {orderBy: 'username', equalTo: params.username}).then(function(nameAvailable){
        var duplicate = false;
        nameAvailable.forEach(function(user){
          if(user.get('username')===params.username){
            duplicate = true;
          }
        });
        if(duplicate){
          alert('Sorry! This username is already taken');
          context.transitionTo('login');
        } else {
          var newUser = context.store.createRecord('user', params);
          newUser.save();
          context.transitionTo('index');
        }
      });
    },
    submitLogin(params){
      var context = this;
      var curUser = this.store.query('user', {orderBy: 'username', equalTo: params.username}).then(function(curUser){
        var canLogin = false;
        curUser.forEach(function(user){
          if(user.get('password')===params.password){
            canLogin = true;
            context.get('currentUser').login(user);
          }
        });
        if(canLogin){
          context.transitionTo('index');
        } else {
          alert('your username does not match your password, please try again');
          context.transitionTo('login');
        }
      });
    }
  }
});
