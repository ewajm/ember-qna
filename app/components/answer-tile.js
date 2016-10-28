import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateAnswer(answer, params){
      this.sendAction('updateAnswer', answer, params);
    },
    destroyAnswer(answer){
      if(confirm('Are you sure you want to delete this answer?')){
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
