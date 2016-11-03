'use strict';

angular.module('taskApp')
  .controller('UniversityCtrl',function($scope, $state) {
    $scope.universityList = [
      {id:1, name: "北京大学", logo: "images/bjdx.png", link:"bjdx"},
      {id:2, name: "中国人民大学", logo: "images/zgrmdx.png", link:"bjdx"},
      {id:3, name: "浙江大学", logo: "images/zjdx.png", link:"bjdx"},
      {id:4, name: "复旦大学", logo: "images/fddx.png", link:"bjdx"},
      {id:5, name: "北京航空航天大学", logo: "images/bjhkhtdx.png", link:"bjdx"},
      {id:6, name: "北京理工大学", logo: "images/bjlgdx.png", link:"bjdx"},
      {id:7, name: "中国农业大学", logo: "images/zgnydx.png", link:"bjdx"},
      {id:8, name: "北京师范大学", logo: "images/bjsfdx.png", link:"bjdx"},
      {id:9, name: "南开大学", logo: "images/nkdx.png", link:"bjdx"},
      {id:10, name: "大连理工大学", logo: "images/dllgdx.png", link:"bjdx"},
      {id:11, name: "吉林大学", logo: "images/jldx.png", link:"bjdx"},
      {id:12, name: "哈尔滨工业大学", logo: "images/hebgydx.png", link:"bjdx"},
      {id:13, name: "东北大学", logo: "images/dbdx.png", link:"bjdx"},
      {id:14, name: "同济大学", logo: "images/tjdx.png", link:"bjdx"},
      {id:15, name: "华东师范大学", logo: "images/hdsfdx.png", link:"bjdx"},
      {id:16, name: "南京大学", logo: "images/njdx.png", link:"bjdx"},
      {id:17, name: "东南大学", logo: "images/dndx.png", link:"bjdx"},
      {id:18, name: "中国科学技术大学", logo: "images/zgkxjsdx.png", link:"bjdx"},
      {id:19, name: "厦门大学", logo: "images/xmdx.png", link:"bjdx"},
      {id:20, name: "山东大学", logo: "images/sddx.png", link:"bjdx"},
    ];
  })
