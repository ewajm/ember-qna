import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.inject.service(),
  sortBy: ['upvotes:desc'],
  sortedAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  isAsker: Ember.computed('currentUser.curUser', 'question.user.username', function(){
    if(this.get('currentUser.curUser')){
      return this.get('currentUser.curUser').get('username') === this.get('question.user.username') || this.get('currentUser.curUser.permission') === 0;
    } else {
      return false;
    }
  }),
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
