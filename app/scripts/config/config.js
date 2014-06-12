'use strict';

angular.module('ngShowcaseApp').constant('config', {
  apiRoot: '/api/',
  api: function(uri) {
    if (uri.startsWith('/'))
      throw new Error("");
    return this.apiRoot + uri;
  }
});