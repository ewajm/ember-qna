import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    updateQuestion(question){
      var params={
        content: this.get('content'),
        info: this.get('info'),
        timestamp: moment().valueOf()
      };
      this.set('isShowingModal', false);
      this.set('content', "");
      this.set('info', "");
      this.sendAction('updateQuestion', question, params);
    },
    toggleModal(){
      this.toggleProperty('isShowingModal');
    }
  }
});
