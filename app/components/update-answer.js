import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    updateAnswer(answer){
      var params={
        content: this.get('content'),
        timestamp: moment().valueOf()
      };
      this.set('isShowingModal', false);
      this.set('content', "");
      this.sendAction('updateAnswer', answer, params);
    },
    toggleModal(){
      this.toggleProperty('isShowingModal');
    }
  }
});
