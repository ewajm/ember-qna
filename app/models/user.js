import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  permission: DS.attr(),
  answers: DS.hasMany('answer', {async:true}),
  questions: DS.hasMany('question', {async:true})
});
