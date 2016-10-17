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
      $scope.items = [
        {name: "全部课程", num: 1973},
        {name: "文学艺术", num: 271},
        {name: "哲学历史", num: 136},
        {name: "经管法学", num: 180},
        {name: "基础科学", num: 943},
        {name: "工程技术", num: 788},
        {name: "农林医药", num: 124},
        {name: "大学先修课", num: 31}
      ];

    })
