angular.module('helloApp').service('HolidaysService', function($http) {
  var service = {
    getAllHolidays: function() {
      return $http.get('https://holidayapi.com/v1/holidays', 
        { 
          cache: true, 
          crossDomain : true, 
          params: {
            key : '97a35793-5e08-493c-bdd0-3fee0f95fba9',
            country: 'ISO 3166-2:US', //problem with this country code, (IS) Iceland is mapped, and not supported
            year: 2015
          } 
        }).then(function successCallback(response) {
          console.log('Response:'+ response);
          holidays = response;
          return holidays;
        }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
          console.log('Problem getting data returned')
        });
    },
    
    getHoliday: function(id) {
      function holidayMatchesParam(holiday) {
        console.log("id?" + holiday.id);
        // return holiday.id === id;
      }
      
      return service.getAllHolidays().then(function (holidays) {
        return holidays.find(holidayMatchesParam)
      });
    }
  }
  
  return service;
})
