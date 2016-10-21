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
      $scope.courseList = [
        {
          id:1,
          name: "大学英语（口语）",
          courseCover: "images/pic1.png",
          num: 1973,
          scholarship:true,
          group:"国防科技大学",
          groupLink:"/university/c",
          teacther:[{
            id:1,
            name: "彭天笑",
            courseCover: "images/js001.png",
            title:"国防语言系讲师"
          }],
          ortherTeacther:[
            {
            id:2,
            name: "刘源源",
            courseCover: "images/js002.png",
            title:"国防语言系讲师；《大学英语口语》课程负责人",
            },
            {
              id:3,
              name: "陈菁",
              courseCover: "images/js003.png",
              title:"人文与社会科学学院语言文化研究所讲师",
            },
            {
              id:4,
              name: "李淼",
              courseCover: "images/js004.png",
              title:"国防语言系讲师",
            }
          ],

          time:15,
          onTime:6,
          info:"相信我们！英文学习对你来说的意义远不止于过考试，当你真正掌握这门通向世界的工具，它会成为你的巨大附加值！ 《大学英语口语》第四期课程将带你进入“混合学习“时代！我们推出了同步“线上线下”双模教材，让你的网络学习，更具实感 ！ http://www.hepmall.com.cn/index.php/product-23244.html"
        },
        {
          id:2,
          name: "沟通心理学",
          courseCover: "images/pic2.png",
          num:103467,
          scholarship:true,
          group:"哈尔滨工业大学",
          groupLink:"/university/c",
          teacther:[{
            id:1,
            name: "裴秋宇",
            courseCover: "images/js005.png",
            title:"人文学院心理学系副教授，哈尔滨工业大学继续教育学院特聘教授，黑龙江省高校心理咨询专业委员会副秘书长"
          }],
          time:15,
          onTime:6,
          info:"视角独特的“主持型”心理课，正能量的“烧脑”之旅。言语犀利，案例丰富，思维训练，实用性强，凝聚主讲者19年心理医生“心战”经历、15年世界五百强员工心理内训精华。"
        },
        {
          id:3,
          name: "高等数学（一）",
          courseCover: "images/pic3.png",
          num: 1973,
          scholarship:true,
          group:"国防科技大学",
          groupLink:"/university/c",
          teacther:[{
            id:1,
            name: "彭天笑",
            courseCover: "images/js001.png",
            title:"国防语言系讲师"
          }],
          ortherTeacther:[
            {
              id:3,
              name: "陈菁",
              courseCover: "images/js003.png",
              title:"人文与社会科学学院语言文化研究所讲师",
            },
            {
              id:4,
              name: "李淼",
              courseCover: "images/js004.png",
              title:"国防语言系讲师",
            }
          ],
          time:7,
          onTime:6,
          info:"高等数学是以微积分为主要内容的课程，它不但是理工类各专业，也是其他众多专业最重要的基础课程之一。我们的工作、科研以及生活中的很多例子，如：卫星成功驶进预定轨道，火车在弯道上飞驰而过，经济金融、天气预报和深海下潜，都与数学有着深深的联系。现在就让我们一起去高等数学的殿堂探索吧！"
        },
        {
          id:4,
          name: "大学化学（下）",
          courseCover: "images/pic4.png",
          num: 319,
          scholarship:false,
          group:"国防科技大学",
          groupLink:"/university/c",
          teacther:[{
            id:4,
            name: "李淼",
            courseCover: "images/js004.png",
            title:"国防语言系讲师"
          }],
          time:14,
          onTime:1,
          info:"在科学的海洋中，化学被誉为“中心科学”，因为它是众多学科之间的联系桥梁，并涉及人类生活的方方面面。是它为人类提供了最初走向文明的基础！也是它给现代社会以持续发展的动力！中南大学《大学化学》分为上、下两部分，授课注重科学性、系统性，力求深入浅出、通俗易懂，分别由王一凡、王微宏领衔。"
        },
        {
          id:5,
          name: "微波技术基础",
          courseCover: "images/pic5.png",
          num: 1973,
          scholarship:false,
          group:"厦门大学",
          groupLink:"/university/c",
          teacther:[{
            id:1,
            name: "游佰强",
            courseCover: "images/js001.png",
            title:"教授"
          }],
          ortherTeacther:[
            {
              id:2,
              name: "周建华",
              courseCover: "images/js002.png",
              title:"教授",
            },
            {
              id:3,
              name: "李伟文",
              courseCover: "images/js003.png",
              title:"副教授",
            },
            {
              id:4,
              name: "李杰",
              courseCover: "images/js004.png",
              title:"工程师",
            }
          ],
          time:12,
          onTime:1,
          info:"《微波技术基础》是电子科学与技术、通信与信息工程等多个一级学科的重要专业基础课。通过此课程的教学使学生能够在《电磁场与电磁波》专业基础课程学习的基础上，全面系统地掌握现代微波、射频等工程领域分析问题和解决问题的基本原理和方法，为相关领域的后续课程学习和科研打下坚实的基础。"
        }
      ];
      $scope.teacther = [
        {
          id:1,
          name: "彭天笑",
          courseCover: "images/js001.png",
          group:"国防科学技术大学",
          title:"国防语言系讲师",
          courseId1:"1",
          courseId2:"3",
          info:"彭天笑 2010年特招入伍，现为国防科技大学人文与社会科学学院讲师，军事翻译教研室副主任，英国曼彻斯特大学访问学者、美国夏威夷大学访问学者，中国大学MOOC《大学英语（口语）》主讲教师。曾荣获2009年全军院校外语优质课比赛第一名、2012年湖南省普通高校教师课堂教学竞赛大学英语决赛一等奖、2013年国防科技大学校教学能手大赛一等奖、2014年湖南省普通高校教师课堂教学竞赛大学英语决赛一等奖、2014年第十二届全军优秀军事训练数字媒体资源评选优秀奖、2015年第一届中国外语微课大赛复赛本科英语组湖南省一等奖；2016年荣获国防科技大学“矢志强军标兵”，两次荣立三等功；一次荣获全军优秀文职；一次荣获中国教育部“中国大学MOOC优秀教师”称号；出版编著多部，译著1部、教材1部，发表论文多篇。"
        },
        {
          id:2,
          name: "刘源源",
          courseCover: "images/js002.png",
          group:"国防科学技术大学",
          title:"国防语言系讲师；《大学英语口语》课程负责人",
          courseId1:"1",
          info:"刘源源，毕业于中南大学，于2007年起任教于国防科学技术大学，曾赴新西兰梅西大学短期访学。系统担任过《大学英语听说》、《大学英语读写》、《英语视听说》、《应用英语写作》等多门课的教学，业务功底扎实，教学方法新颖，教学效果突出。曾多次获院级和校级本科教学奖，获湖南省“外研社”杯英语教学大赛二等奖，荣立三等功一次，并获“长沙市优秀教师”称号。曾主持湖南省教育教改课题，在重点期刊上发表多篇口语教学改革方面的论文。她有11年雅思教学经验，曾培养数千名高分学生，是中南地区知名的雅思教学专家。"
        },
        {
          id:3,
          name: "陈菁",
          courseCover: "images/js003.png",
          group:"国防科学技术大学",
          title:"人文与社会科学学院语言文化研究所讲师",
          courseId1:"2",
          courseId2:"3",
          info:"陈菁，国防科学技术大学人文与社会科学学院语言文化研究所文化与传播研究室副主任、讲师。近年来，在教学方面，先后讲授过研究生《英语阅读与提高》、《国际会议交流英语》，工程硕士《英语阅读与提高》、《军事英语》，本科生《大学英语听说》、《大学英语读写》和《英语应用写作》等课程。2008年在中南大学为诺贝尔经济学奖得主托马斯§谢林先生的演讲担任即席口译工作；两次担任国家安全与科技发展战略国际研讨会即席同传；指导的学员分获2010“中译杯”和2011“海峡杯”全国口译大赛省级二等奖2次、大区级二等奖1次、三等奖1次和优胜奖1次，本人也两次获得“优秀指导老师奖”。2012年10月，获第三届全军院校优质英语课大赛二等奖；2013年享受军队优秀专业技术人才三类岗位津贴；获得“教学优秀奖”、“优秀文职人员”、“优秀共产党员”等多项院校级奖励。在科研方面，参与2012-2013“国防科大研究生公共英语课程体系改革”，在《研究生教育论坛》参与发表“研究生公共英语课程体系新思考”；作为项目主要完成人参与2011-2013年校教育教学课题“美俄主要军校研究生发展趋势探究”。"
        },
        {
          id:4,
          name: "李淼",
          courseCover: "images/js004.png",
          group:"国防科学技术大学",
          title:"国防语言系讲师",
          courseId1:"1",
          info:"李淼，国防科学技术大学人文与社会科学学院国防语言系军事翻译教研室讲师，主讲《大学英语综合》、 《大学英语听说》；国防科大英语演讲队主训教师，连续七年带领学生参加湖南省演讲比赛获得团体及个人一等奖7次，二等奖5人次，三等奖2人次，多次被评为优秀指导教师。2013年赴英国伦敦大学学院（UCL）短期访学，研习英文写作和口语训练。曾多次荣获国防科大人文与社会科学学院本科教学优秀奖、校本科课堂教学优秀评价，获评优秀文职人员；参与上海外语教育出版社大型翻译学百科全书《中国译学辞典》编撰（2011年1月出版）。"
        },
        {
          id:5,
          name: "裴秋宇",
          courseCover: "images/js005.png",
          group:"哈尔滨工业大学",
          title:"人文学院心理学系副教授，哈尔滨工业大学继续教育学院特聘教授，黑龙江省高校心理咨询专业委员会副秘书长",
          courseId1:"1",
          courseId2:"3",
          info:"19年资深心理治疗师，15年企业心理培训师，2001-2011年担任哈工大心理咨询中心主任，2008年汶川地震“省高校心理救援团团长”，现为人文学院心理系副主任、副教授、迄今做各类讲座200余场。《精神分析与催眠》课本校选修人数累计超过2万余人；《普通心理学》专业课连续五年被评为A和A+。曾在被誉为“中国心理医生黄埔军校”的“中德班”连续六年接受德国专家的高强度培训。积累个案8000余小时；2002-2004年面向全国开设婚姻心理热线。主要专业方向：企业阳光心态与职场减压、团体（个体）心理动力治疗、考前心理减压、危机干预、罪犯心理矫治。爱好：古诗词、武术、演讲与朗诵、音乐等。"
        }
      ];
      var astuFn = $scope.astuFn = {
        param:{isAside:'all'},
        aside : function (status) {
          var that = this;
          astuFn.param.isAside = status ;
        }
      }
    })
