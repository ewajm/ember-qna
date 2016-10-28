import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  isShowingModal: false,
  actions: {
    saveAnswer(question){
      var params={
        author: this.get('author'),
        content: this.get('content'),
        timestamp: moment().valueOf(),
        upvotes: 0,
        downvotes: 0,
        question: question
      };
      this.set('isShowingModal', false);
      this.set('author', "");
      this.set('content', "");
      this.sendAction('saveAnswer', params);
    },
    toggleModal(){
      this.toggleProperty('isShowingModal');
    }
  }
});
