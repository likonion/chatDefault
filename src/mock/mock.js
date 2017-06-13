/**
 * Created by liko on 2017/6/12.
 */
import Mock from 'mockjs'
// 使用 Mock
export default Mock.mock({
  'user': {
    'state': {
      'online': true,
      'busy': false,
      'offline': false
    },
    'acctiveUserIndex': null,
    'item|30-100': [
      {
        'name': '@cname',
        'nickName':'@first',
        'mobile':/^1[0-9]{10}$/ ,
        'system|1':['Windows','OSX','IOS','Android'],
        'browser|1':['Google Chrome','Safari','Firefox','QQ浏览器','360安全浏览器','UC浏览器','Opera'],
        'ipAddress':'@ip',
        'from|1': ['桌面网站', '移动网站', 'APP', '微信', '第三方平台'],
        'skill|1': ['开发','测试','运营','运维'],
        'note': '@cword(5, 7)',
        'waitTime|0-100': 1,
        'noread|0-50': 1,
        'online|1': true,
        'star|1': true,
        'blacklist|1': true,
        'chat|20-50': [
          {
            'type|1': ['oneself','service'],
            'data': '@date',
            'time': '@time',
            'txt': '@csentence'
          }
        ]
      }
    ]
  },
  'userQueue': {
    'ERR': false,
    'item|20-40': [
      {
        'name': '@cname',
        'nickName':'@first',
        'mobile':/^1[0-9]{10}$/ ,
        'system|1':['Windows','OSX','IOS','Android'],
        'browser|1':['Google Chrome','Safari','Firefox','QQ浏览器','360安全浏览器','UC浏览器','Opera'],
        'ipAddress':'@ip',
        'from|1': ['桌面网站', '移动网站', 'APP', '微信', '第三方平台'],
        'skill|1': ['开发', '测试', '运营', '运维'],
        'note': '@cword(5, 7)',
        'waitTime|0-100': 1,
        'noread|0-50': 1,
        'online|1': true,
        'star|1': true,
        'blacklist|1': true,
        'chat|20-50': [
          {
            'type|1': ['oneself', 'service'],
            'data': '@date',
            'time': '@time',
            'txt': '@csentence'
          }
        ]
      }
    ]
  }

});
