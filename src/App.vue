<template>
  <div class="boxwrapper">
    <section id="top-bar" class="top-bar">
      <div class="top-bar-logo">
        <img class="" src="./assets/logo.png" alt="">
        <span>在线客服</span>
        <span>www.demo.com</span>
      </div>
      <i class="sortStyle"></i>
    </section>
    <section class="main-wrapper clearfix">
      <leftnavigation></leftnavigation>
      <section class="main-container">
        <!--消息显示窗口-->
        <i class="chatContBg js-chatContBg " v-show="acctiveUserIndex === null"><!-- 选择访客开启对话--></i>
        <section class="chatmain" v-if="acctiveUserIndex !== null">
          <header class="chat-detail-header">
            <div class="addButton ">
              <a href="javascript:;" class=" goOut addstar " @click="starToggle" v-show="!currentStar"><i
                class="fa fa-star-o"></i>星标 </a>
              <a href="javascript:;" class=" goOut deldestar hide" @click="starToggle" v-show="currentStar"><i
                class="fa fa-star"></i>已标记 </a>
              <a href="javascript:;" class=" goOut addblack " @click="blacklistToggle" v-show="!currentBlacklist"><i
                class="fa fa-minus-circle"></i>拉黑 </a>
              <a href="javascript:;" class=" goOut delblack hide " @click="blacklistToggle" v-show="currentBlacklist"><i
                class="fa fa-minus-circle"></i>解除拉黑 </a>
            </div>
          </header>
          <div class="scrollBoxParent" id="scrollBoxParent">
            <div class="scrollBox">
              <div class="systeamTextBox js-zc-loadmore"><p class="systeamText loadmore">点击加载更多</p></div>
              <div class="day_divider">
                <p class="systeamText" style="background-color: transparent">
                  <span class="zc-c-chat-date-line-left"></span>
                  <span class="zc-c-chat-date-line-text">2017-05-16</span>
                  <span class="zc-c-chat-date-line-right"></span>
                </p>
              </div>
              <div class="systeamTextBox"><p class="systeamText">用户转人工服务 12:41:40</p></div>
              <div v-for="msg in currentUserMsg">
                <div class="msg userCus clearfix" v-if="msg.type==='oneself'">
                  <div class="msg_user fl">
                    <img src="./assets/img/pcType.png" class="msg_user_img">
                  </div>
                  <div class="msgContBox fl">
                    <span class="msg_time ml">{{currentUser}}</span>
                    <span class="msg_time" style="margin-left: 0px;">{{msg.time}}</span>
                    <div style="clear:both;"></div>
                    <div class="msgBg fl" style="display: inline-flex;margin: 0px;max-width: 100%">
                      <i class="angleLeft"></i>
                      <div class="msg_content formUser">{{msg.txt}}</div>
                    </div>
                  </div>
                </div>
                <div class="msg workOrderCus clearfix" v-else>
                  <div class="msg_user fr">
                    <img src="./assets/img/admin.png" class="msg_user_img">
                  </div>
                  <div class="msgContBox fr">
                    <span class="msg_time">vincent</span>
                    <span class="msg_time">{{msg.time}}</span>
                    <div style="clear:both;"></div>
                    <div class="msgBg" style="display: inline-flex;float: right;margin: 0px;max-width: 92%;"><i
                      class="angleRight"></i>
                      <div class="msg_content">{{msg.txt}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--消息发送框-->
          <div class="botTextBox">
            <div class="reply-input"></div>
            <p class="userTextNow"></p>

            <textarea id="js-sendMessage" contenteditable="true"
                 class="animatedTextArea form-control msg-send-input sendMessage zc-scroll"
                 placeholder="请输入.." style="resize: none;max-height: 54px" @keypress.enter="sendMsg"
                 @keyup="writeMsg"></textarea>
            <div>
              <div class="tipNosend" style="display: none;"><p>内容上限1024字符，已超出0字符</p></div>
              <div class="tipArea"><p class="enterTip">按下ctrl+enter换行</p>
                <button class="btnSend " type="button" :class="{btnSendNoEable:sendBtn}">发送</button>
              </div>
            </div>
          </div>
        </section>

      </section>
      <sideinfo></sideinfo>
    </section>

  </div>
</template>
<script> // todo script
import axios from 'axios'
import VueAxios from 'vue-axios'
import leftnavigation from './components/leftnavigation.vue'
import sideinfo from './components/sideinfo.vue'
import "assets/emoji-css/jquery.emojipicker.css"
import $ from 'jquery'
import "assets/emoji-js/jquery.emojipicker.js"

import "assets/emoji-css/jquery.emojipicker.a.css"
import "assets/emoji-js/jquery.emojis.js"
$(function () {

})

export default {
  data() {
    return {
      dropMenuShow: false,
      sendBtn: true
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      setTimeout(() => {
        $('#js-sendMessage').emojiPicker({
          height: '200'
        })

        console.log(jQuery('#input-default'))

      }, 3000)
//      $('#input-default').emojiPicker()
      // 代码保证 this.$el 在 document 中
//      $('#input-default').EmojiPicker();
    })
  },
  created() {
    this.$store.commit('getData')
  },
  computed: {
    user () {
      if (this.$store.state.user.length !== 0) {
        return this.$store.state.user.item
      }
    },
    acctiveUserIndex () {
      return this.$store.state.user.acctiveUserIndex
    },
    currentUser () {
      if (this.$store.state.user.length !== 0) {
        return this.$store.state.user.item[this.$store.state.user.acctiveUserIndex].name
      }
    },
    currentStar () {
      if (this.$store.state.user.length !== 0) {
        return this.$store.state.user.item[this.$store.state.user.acctiveUserIndex].star
      }
    },
    currentBlacklist () {
      if (this.$store.state.user.length !== 0) {
        return this.$store.state.user.item[this.$store.state.user.acctiveUserIndex].blacklist
      }
    },
    currentUserMsg () {
      if (this.$store.state.user.length !== 0) {
        if (this.$store.state.user.acctiveUserIndex !== null) {
          return this.$store.state.user.item[this.$store.state.user.acctiveUserIndex].chat
        }
      }
    }
  },
  components: {
    'leftnavigation': leftnavigation,
    'sideinfo': sideinfo
  },
  methods: {
    starToggle () { // 星标开关
      this.$store.commit('starToggle')
    },
    blacklistToggle () {
      this.$store.commit('blacklistToggle')
    },
    sendMsg (e) {
      let msg = e.srcElement.value
      e.srcElement.value = ''
      e.preventDefault() // 阻止默认行为 阻止回车键换行使用keypress
      let scrollBoxParent = document.getElementById('scrollBoxParent')
      this.$store.commit('sendMsg', {msg})
      this.$nextTick(() => {
        // 滚动到底部
        scrollBoxParent.scrollTop = scrollBoxParent.scrollHeight
      })
    },
    writeMsg (e) {
      if (e.srcElement.value === '') {
        this.sendBtn = true
      } else {
        this.sendBtn = false
      }
    }
  }
}
</script>

<style lang="scss">
  @import "assets/css/normalize.css";
  @import "assets/css/common.scss";
  @import "assets/font-awesome-4.7.0/css/font-awesome.min.css";

  .boxwrapper {
    display: flex;
    height: 100%;
    flex-flow: column nowrap;
  }

  .top-bar {
    height: 50px;
    position: relative;
    z-index: 1;
    background-color: #09aeb0;
    .top-bar-logo {
      height: 50px;
      padding: 7px;
      position: relative;
      img {
        width: 36px;
        height: 36px;
      }
      span {
        position: absolute;
        left: 47px;
        top: 10px;
        font-weight: normal;
        color: #fff;
        font-size: 18px;
        font-family: 'Microsoft YaHei';
        &:last-child {
          position: absolute;
          font-size: 12px;
          left: 35px;
          text-size-adjust: none;
          top: 28px;
          font-weight: normal;
          transform: scale(0.7);
          font-family: 'Microsoft YaHei';
        }
      }
    }
    .sortStyle {
      width: 18px;
      height: 18px;
      position: absolute;
      top: 16px;
      right: 20px;
      z-index: 10;
      background: url(./assets/chatItem-6e402aa890.png) no-repeat 0px 0px;
      background-size: 580px 18px;
      cursor: pointer;
    }
  }

  .main-wrapper { // todo main-wrapper
    display: flex;
    flex: 1;
    .main-container {
      flex: 1;
      display: flex;
      flex-flow: column nowrap;
      .chatContBg {
        position: absolute;
        width: 138px;
        height: 67px;
        top: 50%;
        margin-left: -33px;
        left: 50%;
        background: url(./assets/images/bgspirt.png) no-repeat -286px;
      }
      .chatmain {
        display: flex;
        flex-flow: column nowrap;
        flex: 1;
        .chat-detail-header {
          height: 52px;
          border-bottom: 1px solid #e6eeec;
          background-color: #fff;
          .addButton {
            height: 52px;
            line-height: 52px;
            float: right;
            margin-right: 30px;
            padding-left: 30px;
            border-left: 1px solid #e6eeec;
            .goOut {
              margin: 0 28px 0 0;
              font-size: 16px;
              text-decoration: none;
              font-weight: normal;
              color: #a4b2b3;
              .fa {
                color: #a4b2b3;
                font-size: 20px;
                margin-right: 3px;
              }
            }
            .deldestar {
              color: #eead56;
              .fa-star {
                color: #eead56;
              }
            }
          }
        }
        .scrollBoxParent {
          flex: 1;
          overflow: auto;
          outline: none;
          background-color: #f7fafa;
          .scrollBox {
            padding: 30px;
            .msg {
              clear: both;
              margin: 20px 0;
              display: block;
            }
            .msg_user {
              height: 36px;
              width: 36px;
              float: left;
              margin-right: 10px;
              overflow: hidden;
              border-radius: 50%;
            }
            .msg_time {
              color: #babbbf;
              margin-left: 10px;
              font-size: 12px;
            }
            .msg_user_img {
              width: 100%;
              height: 100%;
            }
            .systeamText {
              color: #8b898f;
              font-size: 12px;
              text-align: center;
              background: #e6eef0;
              display: inline-block;
              margin: 0 auto;
              padding: 2px 15px;
              border-radius: 4px;
            }
            .systeamTextBox {
              text-align: center;
              margin: 15px auto;

              .loadmore {
                color: #8b898f;
                background: none;
                cursor: pointer;
                font-size: 12px;
                text-align: center;
                display: inline-block;
                margin: 0 auto;
                padding: 2px 15px;
                border-radius: 4px;
              }
            }
            .day_divider {
              background: #f7fafa;
              line-height: 1.2rem;
              font-size: 1rem;
              font-family: 'Lato', sans-serif;
              color: #555459;
              font-weight: 900;
              text-align: center;
              cursor: default;
              clear: both;
              position: relative;
              margin: 10px 0 1.5rem;
              .zc-c-chat-date-line-left {
                width: 177px;
                height: 4px;
                float: left;
                margin-top: 13px;
                background: url(./assets/images/noReadLine-e069a48492.png) 0px -9px;
              }
              .zc-c-chat-date-line-text {
                line-height: 30px;
                color: #999999;
                float: left;
                margin-left: 10px;
              }
              .zc-c-chat-date-line-right {
                width: 177px;
                height: 4px;
                float: left;
                margin-top: 13px;
                background: url(./assets/images/noReadLine-e069a48492.png) 0px -20px;
              }
            }
            .userCus {
              .msg_user {
                width: 40px;
                height: 40px;
              }
              .msgContBox {
                margin-left: 5px;
                max-width: 68%;
                text-align: right;
                .msg_time {
                  float: left;
                  margin-left: 0;
                  margin-right: 10px;
                  max-width: 290px;
                }
                .msgBg {
                  background-color: #fff;
                  line-height: 16px;
                  padding: 14px;
                  border-radius: 4px;
                  margin-top: 15px;
                  position: relative;
                  border: 1px solid #dce5e5;
                  .angleLeft {
                    width: 11px;
                    height: 10px;
                    background: url(./assets/images/leftangle-0eb93e361a.png);
                    top: 12px;
                    position: absolute;
                    left: -10px;
                  }
                  .msg_content {
                    margin: 0;
                    font-size: 14px;
                    line-height: 16px;
                  }
                }
              }
            }
            .workOrderCus {
              clear: both;
              .msg_user {
                width: 40px;
                height: 40px;
                float: right;
              }
              .msgContBox {
                margin-right: 20px;
                max-width: 68%;
                text-align: right;
                .msgBg {
                  background-color: #97e6dc;
                  line-height: 16px;
                  padding: 14px;
                  border-radius: 4px;
                  position: relative;
                  .angleRight {
                    width: 0;
                    border-style: solid;
                    border-color: transparent #97e6dc;
                    top: 12px;
                    content: "";
                    position: absolute;
                    border-width: 0px 0px 12px 12px;
                    right: -10px;
                  }
                }
              }
            }
            .zc-c-chat-body-load-model {
              width: 100%;
              height: 100%;
              background-color: #f7fafa;
              position: relative;
              .zc-c-chat-body-load-model-icon {
                background: url(./assets/images/chatLoad-1ade696596.gif) no-repeat;
                width: 36px;
                height: 36px;
                top: 50%;
                left: 47.5%;
                position: absolute;
              }
            }
          }
        }
        .botTextBox { // todo botTextBox style
          position: relative;
          overflow: auto;
          background-color: #f7fafa;
          border-top: 1px solid #e6eeec;
          outline: none;
          display: block;
          .faceButton {
            position: absolute;
            left: 20px;
            top: 20px;
            .faceIcon {
              width: 30px;
              height: 20px;
              background: url(./assets/images/newChat2.png) -182px -371px;
              display: inline-block;
              font-size: 20px;
              cursor: pointer;
              outline: none;
            }
          }
          .picButton {
            position: absolute;
            left: 55px;
            top: 20px;
            i {
              .photoTag {
                width: 25px;
                height: 20px;
                background: url(./assets/images/newChat2.png) -221px -371px;
                display: inline-block;
                cursor: pointer;
              }
            }
          }
          .active-invitation {
            position: absolute;
            top: 20px;
            left: 88px;
            width: 21px;
            height: 21px;
            background: url(./assets/images/active-icon-9ce919f939.png) no-repeat 2px 2px;
            z-index: 100;
            .alert-til {
              position: absolute;
              text-align: center;
              display: block;
              max-width: 300px;
              min-width: 130px;
              top: -32px;
              left: -53px;
              font-size: 12px;
              font-style: normal;
              border: 1px solid #e0e8e8;
              height: 25px;
              line-height: 25px;
              border-radius: 4px;
              background: #fff;
              display: none;
              z-index: 0;
              box-shadow: 0 0 8px 0 rgba(15, 66, 76, .1);
            }
          }
          .msg-send-input {
            padding: 10px;
            background-color: #f7fafa;
            margin-top: 45px;
            min-height: 50px;
            resize: none;
            outline: none;
            border: 0;
            overflow-y: auto;
            overflow-x: hidden;
            white-space: pre-wrap;
            line-height: 20px;
          }
          .tipArea {
            float: right;
            overflow: hidden;
            .enterTip {
              float: left;
              width: 116px;
              height: 30px;
              line-height: 30px;
              margin-top: 5px;
              color: rgb(191, 191, 191);
              font-size: 12px;
              font-family: 微软雅黑;
            }
            .btnSend {
              float: left;
              margin: 5px 10px 10px 0;
              border: 0;
              width: 80px;
              height: 30px;
              color: #fff;
              font-size: 14px;
              border-radius: 3px;
              background-color: #09aeaf;
            }
            .btnSendNoEable {
              background-color: #e0e8e8;
              float: left;
              margin: 5px 10px 10px 0;
              border: 0;
              width: 80px;
              height: 30px;
              color: #fff;
              font-size: 14px;
              border-radius: 3px;
            }
          }
        }
      }

    }
    .sideinfo { // todo sideinfo
      width: 285px;
    }
  }


</style>
