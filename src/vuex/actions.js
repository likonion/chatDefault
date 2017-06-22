import axios from 'axios'
import VueAxios from 'vue-axios'
import data from '../mock/mock'
import Mock from 'mockjs'
export const getData = ({commit}) => {
    // 使用axios获取json数据
    axios.get('static/data.json').then(function (resolve) {
      commit('getSuccess', {resolve})
    }).catch((err) => {
      console.log(err)
    })
    // mockjs拦截data.json请求，返回mock数据
    Mock.mock('static/data.json', data)


    // 使用接口
    // axios.get('/api/user').then(function (resolve) {
    //   state.user = resolve.data.data
    // }).catch( (err) => {
    //   console.log(err);
    // })
};
