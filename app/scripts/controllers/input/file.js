'use strict';

angular.module('ngShowcaseApp').controller('ctrl.input.file', function ($scope, $fileUploader) {
  var vm = $scope.vm = {};
  vm.uploader = $fileUploader.create({
    scope: $scope,
    url: '/api/upload',
    autoUpload: true,   // 自动开始上传
    formData: [          // 和文件内容同时上传的form参数
      { key: 'value' }
    ],
    filters: [           // 过滤器，可以对每个文件进行处理
      function (item) {
        console.info('filter1', item);
        return true;
      }
    ]
  });
});
