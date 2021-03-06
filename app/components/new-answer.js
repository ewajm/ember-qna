import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  isShowingModal: false,
  actions: {
    saveAnswer(question, user){
      var params={
        content: this.get('content'),
        timestamp: moment().valueOf(),
        upvotes: 0,
        downvotes: 0,
        question: question,
        user: user
      };
      this.set('isShowingModal', false);
      this.set('content', "");
      this.sendAction('saveAnswer', params);
    },
    toggleModal(){
      this.toggleProperty('isShowingModal');
    }
  }
});
