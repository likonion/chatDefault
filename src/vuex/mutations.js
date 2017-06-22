export default {
  getSuccess(state,{resolve}) {
    state.user = resolve.data.user // 设置用户信息
    state.userQueue = resolve.data.userQueue // 设置队列信息
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
    let date = new Date();
    let newMsg = {'type': 'service', 'date': '2017-06-','day':9,'id':state.user.item[state.user.acctiveUserIndex].chat.length+1, 'time': date.toLocaleTimeString(), 'txt': msg};
    state.user.item[state.user.acctiveUserIndex].chat.push(newMsg)
  },
  // 加载更多信息复位
  resetLoadImgLength (state) {
    state.loadMsgLength = 10
  },
  // 加载更多信息
  setLoadImgLength (state) {
    if (state.loadMsgLength + 10 >= state.user.item[state.user.acctiveUserIndex].chat.length) {
      state.loadMsgLength = state.user.item[state.user.acctiveUserIndex].chat.length
    } else {
      state.loadMsgLength += 10
    }

  },
  // 弹窗开关
  dialogSwitch (state, {model}) {
    state.dialog.show = !state.dialog.show;
    state.dialog.model = model;
    let title;
    if (model === 'setting') {
      title = '设置'
    } else if (model === 'invitation') {
      title = '邀请会话'
    }
    state.dialog.title = title
  },
  // 添加队列中的用户到当前会话
  addUser (state, {index}) {
    state.userQueue.item[index].online = true; // 将点击mock数据中队列用户设置为在线
    state.user.item.unshift(state.userQueue.item[index]);
    state.user.acctiveUserIndex = 0;
    state.userQueue.item.splice(index, 1)
  },
  // 删除队列中的用户
  removeQueueUser (state, {index}) {
    state.userQueue.item.splice(index, 1)
  },
  // 删除会话用户
  removeUser (state, {index}) {
    state.user.item.splice(index, 1)
  }
};
