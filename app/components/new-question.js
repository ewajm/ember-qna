import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  actions: {
    saveQuestion() {
      var params={
        author: this.get('author'),
        content: this.get('content'),
        info: this.get('info'),
        timestamp: moment().valueOf()
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
