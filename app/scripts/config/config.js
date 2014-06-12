'use strict';

angular.module('ngShowcaseApp').constant('config', {
  apiRoot: '/api/',
  api: function(uri) {
    if (uri.startsWith('/'))
      throw new Error("Invalid args: uri can't be starts with /");
    return this.apiRoot + uri;
  }
});