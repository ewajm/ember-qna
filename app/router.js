import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ask');
  this.route('question', {path: '/question/:question_id'});
  this.route('login');
  this.route('user', {path: '/user/:user_id'}, function() {
    this.route('questions');
    this.route('answers');
  });
});

export default Router;
