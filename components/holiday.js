angular.module('helloApp').component('holiday', {
  bindings: { holiday: '<' },
  template: '<h5 class="md-subhead">Details of this holiday</h5>' +
  
    '<div>Name: {{$ctrl.holiday.name}}</div>' +
    '<div>Date: {{$ctrl.holiday.date}}</div>' +
    '<div>Observed: {{$ctrl.holiday.observed}}</div>' +
    '<div>Public: {{$ctrl.holiday.public}}</div>' +
    
    '<md-button class="md-button" ui-sref="holidays">Close</md-button>'
});