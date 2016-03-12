'use strict';

var app = angular.module('routingApp');

app.controller('listCtrl', function($scope, $state, SwapiService) {
  var page = parseInt($state.params.page) || 1;

  SwapiService.getPeople(page);

  // watch this thing: SwapiService.people
  $scope.$watch(function() { // watch function
    // return the thing to watch
    return SwapiService.pages[page];
  }, function(currentPeople, prevPeople) { // listener function
    // triggered when the watched thing changes
    $scope.people = currentPeople;
  });

  $scope.$watch(function() {
    return SwapiService.pageNumbers;
  }, function(pageNumbers) {
    $scope.pageNumbers = pageNumbers;
  });

});




app.controller('aboutCtrl', function($scope, $state) {
  $scope.goToPerson = function(param) {
    console.log('param:', param);
    $state.go('swPerson', {
      personId: param
    });
  };

  $scope.goHome = function() {
    $state.go('home');
  };
});

app.controller('personCtrl', function($state, $stateParams) {
  // if(!$stateParams.personId) {
  //   $state.go('peopleList')
  // }
  console.log('$state:', $state);
  console.log('$stateParams:', $stateParams);
});
