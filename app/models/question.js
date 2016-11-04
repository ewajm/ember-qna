import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  info: DS.attr(),
  timestamp: DS.attr(),
  answers: DS.hasMany('answer', {async:true}),
  user: DS.belongsTo('user', {async:true})
});
