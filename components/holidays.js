angular.module('helloApp').component('holidays', {
  bindings: { holidays: '<' },
  
  template: '<h5 class="md-subhead">List of Holidays:</h5>' +
            '<md-list ng-repeat="holiday in $ctrl.holidays">' +
            '  <md-list-item>' +
            '    <a ui-sref="holiday({ holidayName: holiday.name })">' +
            '      {{holiday.name}}' +
            '    </a>' +
            '  </md-list-item>' +
            '</md-list>'
})