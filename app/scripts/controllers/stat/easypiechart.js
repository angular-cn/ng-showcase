'use strict';

angular.module('ngShowcaseApp').controller('ctrl.stat.easypiechart', function ($scope) {
    var vm = $scope.vm = {};

    vm.percent = 65;

    //常规配置
    vm.options = [{
        animate:{
            duration:0,
            enabled:false
        },
        trackColor:'#888',//线条背景色
        barColor:'#2C3E50',//线条颜色
        scaleColor:false,
        lineWidth:20,//线条大小
        lineCap:'circle'//线条形状
    },
        {barColor:'#FF530D', lineWidth:10 ,trackColor:'#888', lineCap:'round' ,scaleColor:false},
        {barColor:'#1F8A70',  lineWidth:10, trackColor:'#888',lineCap:'round' ,scaleColor:false}

    ];

    //随机执行
    vm.randomMath = function(){
        vm.percent = parseInt(Math.random()*100);
    }
});