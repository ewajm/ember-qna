import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveQuestion(params){
      var newQuestion = this.store.createRecord('question', params);
      if(params.user){
        var user = params.user;
        user.get('questions').addObject(newQuestion);
        newQuestion.save().then(function(){
          return user.save();
        });
      } else {
        newQuestion.save();
      }
      this.transitionTo('index');
    }
  }
});
