import Ember from 'ember';

export function answerAmount(params/*, hash*/) {
  var answerString = params[0] + ' answer';
  if(params[0] > 1){
    answerString+= 's';
  } else if (params[0] === 0){
    answerString += 's <i class="fa fa-frown-o"></i>';
  }
  return answerString;
}

export default Ember.Helper.helper(answerAmount);
