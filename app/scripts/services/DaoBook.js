'use strict';

angular.module('ngShowcaseApp').factory('DaoBook', function($resource, config) {
  return $resource(config.api('books/:id'));
});