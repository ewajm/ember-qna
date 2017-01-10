import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitSignup(){
      var params = {
        username: this.get('username'),
        email: this.get('email'),
        password: this.get('password'),
        permission: 1
      };
      this.set('password', "");
      this.sendAction('submitSignup', params);
    }
  }
});
