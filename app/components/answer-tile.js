import Ember from 'ember';

export default Ember.Component.extend({
  isDownvoted: false,
  didRender(){
    this._super(...arguments);
    var answer = this.get('answer');
    if(answer.get('upvotes')<answer.get('downvotes')){
      this.set('isDownvoted', true);
      console.log(this.get('isDownvoted'));
    }
  },
  actions: {
    updateAnswer(answer, params){
      this.sendAction('updateAnswer', answer, params);
    },
    destroyAnswer(answer){
      if(confirm('Are you sure you want to delete this answer?')){
        this.sendAction('destroyAnswer', answer);
      }
    },
    upVote(answer) {
      if(answer.get('upvotes') + 1 > answer.get('downvotes')){
        this.set('isDownvoted', false);
      }
      this.sendAction('upVote', answer);
    },
    downVote(answer) {
      if(answer.get('downvotes') + 1 > answer.get('upvotes')){
        this.set('isDownvoted', true);
      }
      this.sendAction('downVote', answer);
    }
  }
});
