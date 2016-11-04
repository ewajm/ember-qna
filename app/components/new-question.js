import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  actions: {
    saveQuestion() {
      var params={
        author: this.get('author'),
        content: this.get('content'),
        info: this.get('info') ? this.get('info'): "",
        timestamp: moment().valueOf()
      };
      if(this.get('currentUser.curUser')){
        params.user = this.get('currentUser.curUser');
      }
      this.sendAction('saveQuestion', params);
    }
  }
});
