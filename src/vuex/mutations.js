import axios from 'axios'
import VueAxios from 'vue-axios'
export const state = {
  user: Object,
  userQueue: Object,
  dialog: {'show': false, 'title': '', 'model': ''}
}
export const mutations = {
  getData (state) {
    axios.get('static/data.json').then(function (resolve) {
      state.user = resolve.data.user // 获取用户信息
      state.userQueue = resolve.data.userQueue // 获取队列信息
    }).catch((err) => {
      console.log(err);
    })

    // axios.get('/api/user').then(function (resolve) {
    //   state.user = resolve.data.data
    // }).catch( (err) => {
    //   console.log(err);
    // })
  },
  setUserState (state, {index}) { // 设置用户状态
    if (index === 1) {
      state.user.state = {'online': true, 'busy': false, 'offline': false}
    } else if (index === 2) {
      state.user.state = {'online': false, 'busy': true, 'offline': false}
    } else if (index === 3) {
      state.user.state = {'online': false, 'busy': false, 'offline': true}
    }
  },
  acctiveUser (state, {index}) { // 当前点击的用户索引
    state.user.acctiveUserIndex = index

  },
  clearNoread (state, {index}) {
    state.user.item[index].noread = false
  },
  starToggle (state) {
    state.user.item[state.user.acctiveUserIndex].star = !state.user.item[state.user.acctiveUserIndex].star
  },
  blacklistToggle (state) {
    state.user.item[state.user.acctiveUserIndex].blacklist = !state.user.item[state.user.acctiveUserIndex].blacklist
  },
  // 发送消息
  sendMsg (state, {msg}){
    let date = new Date()
    let newMsg = {'type': 'service', 'date': date.toLocaleDateString(), 'time': date.toLocaleTimeString(), 'txt': msg}
    state.user.item[state.user.acctiveUserIndex].chat.push(newMsg)
  },
  // 弹窗开关
  dialogSwitch (state, {model}) {
    state.dialog.show = !state.dialog.show
    state.dialog.model = model
    let title
    if (model === 'setting') {
      title = '设置'
    } else if (model === 'invitation') {
      title = '邀请会话'
    }
    state.dialog.title = title
  },
  // 添加队列中的用户到当前会话
  addUser (state, {index}) {
    let user = {
      'name': state.userQueue.item[index].name,
      'noread': '',
      'online': true,
      'star': false,
      'blacklist': false,
      'chat': state.userQueue.item[index].chat
    }
    state.user.item.unshift(user)
    state.user.acctiveUserIndex = 0
    state.userQueue.item.splice(index, 1)
  },
  // 删除队列中到用户
  removeUser (state, {index}) {
    state.userQueue.item.splice(index, 1)
  }
}
