'use strict';

angular.module('taskApp')
    .controller('IndexCtrl',function($scope) {
      var stuFn = $scope.stuFn = {
        param : {} ,
        switchTab : function (status) {
          var that = this;
          stuFn.param.isFinish = status ;
        }
      }
})
