'use strict';

angular.module('taskApp')
    .controller('IndexCtrl',function($scope, $state) {
      var stuFn = $scope.stuFn = {
        param : {} ,
        switchTab : function (status) {
          var that = this;
          stuFn.param.isFinish = status ;
        }
      }
      $scope.items = [
        {name: "全部课程", num: 1973, links:"all"},
        {name: "文学艺术", num: 271, links:"wxys"},
        {name: "哲学历史", num: 136, links:"zxls"},
        {name: "经管法学", num: 180, links:"jgfx"},
        {name: "基础科学", num: 943, links:"jckx"},
        {name: "工程技术", num: 788, links:"gcjs"},
        {name: "农林医药", num: 124, links:"nlyy"},
        {name: "大学先修课", num: 31, links:"dxxxk"}
      ];
      var astuFn = $scope.astuFn = {
        param:{isAside:'all'},
        aside : function (status) {
          var that = this;
          astuFn.param.isAside = status ;
        }
      }
    })
