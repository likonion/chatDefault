import axios from 'axios'
import VueAxios from 'vue-axios'
export const state = {
  user: []
}
export const mutations = {
  getData (state) {
    axios.get('/api/user').then(function (resolve) {
      state.user = resolve.data.data
    })
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
  }
}
