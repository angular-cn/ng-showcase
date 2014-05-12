/**
 * Created by xuanzhang on 14-5-12.
 */
angular.module('ngShowcaseApp')
    .directive('ueditor',function(){
        return {
            restrict:'AE',
            transclude:true,
            replace:true,
            template:'<script name="content" type="text/plain" ng-transclude>GGG</script>',
            scope:{
                config:'='
            },
            link:function(scope,element){
                new UE.ui.Editor(scope.config || {}).render(element[0]);
            }
        }
    })