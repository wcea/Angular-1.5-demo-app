angular.module('helloApp').service('HolidaysService', function($http) {
  var service = {
    getAllHolidays: function() {
      return $http.get('https://holidayapi.com/v1/holidays?country=US&key=97a35793-5e08-493c-bdd0-3fee0f95fba9&year=2015', 
        { 
          cache: true, 
          crossDomain : true 
        }).then(function successCallback(response) {
          res = response.data.holidays;
          holidays = [];
          Object.keys(res).forEach(function (key) {
            holidays.push(res[key]);
          })
          holidays = [].concat.apply([], holidays);
          return holidays;
        }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
          console.log('Problem getting data returned')
        });
    },
    
    getHoliday: function(name) {
      function holidayMatchesParam(holiday) {       
        return holiday.name === name;
      }
      
      return service.getAllHolidays().then(function (holidays) {
        return holidays.find(holidayMatchesParam)
      });
    }
  }
  
  return service;
})
