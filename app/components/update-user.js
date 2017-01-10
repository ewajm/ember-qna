import Ember from 'ember';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    toggleModal(){
      this.toggleProperty('isShowingModal');
    },
    updateUser(user){
      var params = {
        email: this.get('email'),
        password: this.get('password')
      };
      this.set('email', "");
      this.set('password', "");
      this.set('isShowingModal', false);
      this.sendAction('updateUser', user, params);
    }
  }
});
