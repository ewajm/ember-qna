import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  isShowingModal: false,
  isUser: Ember.computed('user.username', 'currentUser.curUser.username', function(){
    return this.get('user.username') === this.get('currentUser.curUser.username');
  }),
  actions: {
    logOut(){
      this.get('currentUser').logout();
      this.sendAction('logOut');
    },
    toggleModal(){
      this.set('isShowingModal', true);
    },
    updateUser(user){
      var params = {
        email: this.get('email'),
        password: this.get('password')
      };
      this.set('email', "");
      this.set('password', "");
      this.set('isShowingModal', false);
      this.sendAction('updateUser', user, params)
    }
  }
});
