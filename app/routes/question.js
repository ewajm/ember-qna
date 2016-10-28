import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    destroyQuestion(question){
      question.destroyRecord();
      this.transitionTo('index');
    },
    updateQuestion(question, params){
      Object.keys(params).forEach(function(key){
        if(params[key]){
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question.id);
    },
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', question.id);
    },
    updateAnswer(answer, params){
      Object.keys(params).forEach(function(key){
        if(params[key]){
          answer.set(key, params[key]);
        }
      });
      answer.save();
      var question=this.get('model');
      this.transitionTo('question', question.id);
    },
    destroyAnswer(answer){
      answer.destroyRecord();
      var question=this.get('model');
      this.transitionTo('question', question.id);
    }
  }
});
