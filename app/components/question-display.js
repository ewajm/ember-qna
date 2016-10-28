import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    destroyQuestion(question){
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    updateQuestion(question, params){
      this.sendAction('updateQuestion', question, params);
    },
    saveAnswer(params){
      this.sendAction('saveAnswer', params);
    }
  }
});
