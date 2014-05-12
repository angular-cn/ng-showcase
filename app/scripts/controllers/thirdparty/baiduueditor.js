'use strict';

angular.module('ngShowcaseApp').controller('ctrl.thirdparty.baiduueditor', function ($scope,$sce) {
    var vm = $scope.vm = {};
    $scope.editorConfig={
        focus:true //自动把光标放到UEditor中。测试config配置
    }

    $scope.$watch('content',function(){
        $scope.html = $sce.trustAsHtml($scope.content);
    })
});
