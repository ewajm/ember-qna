import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id)
  },
  actions: {
    destroyQuestion(question){
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    updateQuestion(question){
      this.sendAction('updateQuestion', question);
    }
  }
});
