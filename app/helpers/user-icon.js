import Ember from 'ember';

export function userIcon(params/*, hash*/) {
  var initial = params[0].slice(0, 1);
  var iconUrl = 'https://dummyimage.com/100x100/333/fff.png&text=' + initial;
  return '<img class="img-responsive center-block" src="' + iconUrl + '">';
}

export default Ember.Helper.helper(userIcon);
