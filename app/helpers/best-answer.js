import Ember from 'ember';

export function bestAnswer(params/*, hash*/) {
  if(params[0]===0){
    return "<i class='fa fa-certificate best'></i>"
  } else {
    return '';
  }
}

export default Ember.Helper.helper(bestAnswer);
