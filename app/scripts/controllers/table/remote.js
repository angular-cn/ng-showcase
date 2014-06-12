'use strict';

angular.module('ngShowcaseApp').controller('ctrl.table.remote', function ($scope, DaoBook) {
  var vm = $scope.vm = {};
  DaoBook.query({page: 1, size: 20}, function(data) {
    console.log(data);
  });
});
