import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  isUser: Ember.computed('user.username', 'currentUser.curUser.username', function(){
    return this.get('user.username') === this.get('currentUser.curUser.username');
  });
});
