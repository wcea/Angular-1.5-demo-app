var myApp = angular.module('helloApp', ['ui.router']);

myApp.config(function($stateProvider) {
  // An array of state definitions
  var states = [
    
    { 
      name: 'about', 
      url: '/about', 
      component: 'about'
    },
    
    { 
      name: 'holidays', 
      url: '/holidays', 
      component: 'holidays',
      // This state defines a 'holidays' resolve
      // It delegates to the HolidaysService to HTTP fetch (async)
      // The holiday component receives this via its `bindings: `
      resolve: {
        holidays: function(HolidaysService) {
          return HolidaysService.getAllHolidays();
        }
      }
    },
    
    { 
      name: 'holiday', 
      // This state takes a URL parameter called holidayName
      url: '/holidays/{holidayName}', 
      component: 'holiday',
      // This state defines a 'holiday' resolve
      // It delegates to the HolidaysService, passing the holidayName parameter
      resolve: {
        holiday: function(HolidaysService, $transition$) {
          return HolidaysService.getHoliday($transition$.params().holidayName);
        }
      }
    }
  ]
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});
