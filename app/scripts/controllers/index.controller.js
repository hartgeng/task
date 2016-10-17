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
        {name: "全部课程", num: 1973, link:all},
        {name: "文学艺术", num: 271, link:wxys},
        {name: "哲学历史", num: 136, link:zxls},
        {name: "经管法学", num: 180, link:jgfx},
        {name: "基础科学", num: 943, link:jckx},
        {name: "工程技术", num: 788, link:gcjs},
        {name: "农林医药", num: 124, link:nlyx},
        {name: "大学先修课", num: 31, link:dxxxk}
      ];

    })
