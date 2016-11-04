import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['upvotes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
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
    },
    updateAnswer(answer, params){
      this.sendAction('updateAnswer', answer, params);
    },
    destroyAnswer(answer){
      this.sendAction('destroyAnswer', answer);
    },
    upVote(answer) {
      this.sendAction('upVote', answer);
    },
    downVote(answer) {
      this.sendAction('downVote', answer);
    }
  }
});
