<template>
  <section class="left-navigation">
    <header class="dropdown">
      <div class="user_menu" @click="dropMenuShow = !dropMenuShow">
        <div class="menuDropdown ">
          <div class="current_user_avatar">
            <img class="member_image thumb_48 logo "
                 src="../assets/admin.png" id="mylogo">
          </div>
          <span class="current_user_name" title="vincent">vincent</span>
          <i class="connection_icon  online"></i>
          <span class="connection_style">超级管理员</span>
          <span id="connection_status" style="display:none">离线</span>
        </div>
        <transition name="dropdownMenu">
          <div v-show="dropMenuShow" class="dropdown-menu dropdown-menu-right menu status-user ">
            <ul>
              <li class=""><span class="user-icon-online">在线</span></li>
              <li class=""><span class="user-icon-busy">忙碌</span></li>
              <li class=""><span class="user-icon-offine">离线</span></li>
            </ul>
          </div>
        </transition>
      </div>
      <div id="admin_Invite" class="joinBox-yy ">
        <a href="javascript:;" class="openOtherUser"><i></i></a>
        <div class="waitNum">
          <span>邀请新用户</span>
        </div>
      </div>
    </header>
    <ul class="mainNav">
      <li>
        <ul class="main_tab clearfix">
          <li :class=" {active:tabIndex===1}" @click="leftNav(1)"><a href="javascript:;">当前会话</a></li>
          <li :class=" {active:tabIndex===2}" @click="leftNav(2)"><a href="javascript:;">历史记录</a></li>
        </ul>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane active leftScroll  zc-scroll noOnline" id="chatonline" v-show="tabIndex===1">
        <i class=" onlineBg"></i>
        <p class="onoffTip ">在线</p>
        <ul class="users">
          <li class="user-list-item online" :class="{'active':index===activeLiIndex}" v-for="(item,index) in user"
              v-if="item.online"
              @click="setCurrentMsg(index)">
            <i class="icon laptop  ">
              <span class="badge badge-red " v-if="item.noread!=0"
                    style="padding: 2px 5px; visibility: visible;">{{item.noread}}</span>
            </i>
            <div class="item-detail">
              <div class="unameWidely"><span class="uname "> {{item.name}}</span></div>
              <span class="chat-detail" :class="{orange:item.noread}">{{item.chat[item.chat.length - 1].txt}}</span>
              <div class="funIco">
                <i class="starUser" v-show="item.star"></i>
              </div>
              <i class="user-del ">
                <span class="newIcon"></span>
              </i>
            </div>
            <p class="receiveTime ">{{item.chat[item.chat.length - 1].time}}</p>
          </li>
        </ul>
        <p class="onoffTip ">离线</p>
        <ul id="offlineUser" class="user">
          <li class="user-list-item ofline" :class="{'active':index===activeLiIndex}" v-for="(item,index) in user"
              v-if="!item.online"
              @click="setCurrentMsg(index)">
            <i class="icon laptop  ">
              <span class="badge badge-red " v-if="item.noread!=0"
                    style="padding: 2px 5px; visibility: visible;">{{item.noread}}</span>
            </i>
            <div class="item-detail">
              <div class="unameWidely"><span class="uname "> {{item.name}}</span></div>
              <span class="chat-detail" :class="{orange:item.noread}">{{item.chat[item.chat.length - 1].txt}}</span>
              <div class="funIco">
                <i class="starUser" v-show="item.star"></i>
              </div>
              <i class="user-del ">
                <span class="newIcon"></span>
              </i>
            </div>
            <p class="receiveTime ">{{item.chat[item.chat.length - 1].time}}</p>
          </li>
        </ul>
      </div>
      <!--历史记录-->
      <div class="tab-pane  zc-scroll" id="history" v-show="tabIndex===2">
        <div class="radio-inline radio-box-yy">
          <label class="radio-inline" :class="{active: showIndex === 1}" @click="userTab(1)">
            <div class="c-redio c-redio-noActive"></div>
            <span>全部</span>
          </label>
          <label class="radio-inline " :class="{active: showIndex === 2}" @click="userTab(2)">
            <div class="c-redio c-redio-noActive"></div>
            星标
          </label>
          <label class="radio-inline " :class="{active: showIndex === 3}" @click="userTab(3)">
            <div class="c-redio c-redio-noActive"></div>
            黑名单
          </label>
        </div>
        <div id="historylist" class="leftScroll zc-scroll">
          <ul class="history-list">
            <li class="user-list-item history" v-for="(item,index) in user" @click="setCurrentMsg(index)"
                v-show="needShow(item.star, item.blacklist)">
              <i class="icon laptop  offline">
                <span class="badge badge-red " style="padding:2px 5px">1</span>
              </i>
              <div class="item-detail">
                <div class="unameWidely">
                  <span class="uname "> {{item.name}}</span>
                  <span class="sortNum">  </span>
                </div>
                <span class="chat-detail  "></span>
                <div class="funIco" v-show="item.star">
                  <i class="starUser"></i>
                  <i class="startopIcon  hidestartopIcon"></i>
                  <span class="status "></span>
                </div>
                <i class="user-del ">
                  <span class="newIcon"></span>
                </i>
              </div>
              <p class="receiveTime ">{{item.chat[item.chat.length - 1].time}}</p></li>
          </ul>
        </div>
      </div>
      <div class="tab-pane leftScroll zc-scroll" id="blacklist" style="overflow-y: hidden; outline: none">
        <ul id="blackusers"></ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        dropMenuShow: false,
        tabIndex: 1,
        activeLiIndex: null,
        showIndex: 1
      }
    },
    computed: {
      user () {
        if (this.$store.state.user.length !== 0) {
          return this.$store.state.user.item
        }
      }
    },
    methods: {
      leftNav (num) {
        this.tabIndex = num
      },
      userTab (num) {
        this.showIndex = num
      },
      needShow (star, blacklist) {
        if (this.showIndex === 1) {
          return true
        } else if (this.showIndex === 2 && star) {
          return true
        } else if (this.showIndex === 3 && blacklist) {
          return true
        }
      },
      setCurrentMsg (index) {
        this.activeLiIndex = index
        this.$store.commit('acctiveUser', {index})
        this.$store.commit('clearNoread', {index})
        this.$nextTick(function () {
          // v-for渲染已经完成
          let scrollBoxParent = document.getElementById('scrollBoxParent')
          scrollBoxParent.scrollTop = scrollBoxParent.scrollHeight
        })

      }
    }
  }
</script>

<style lang="scss">
  .left-navigation {
    display: flex;
    flex-flow: column nowrap;
    background: #fff;
    width: 291px;
    border-right: 1px solid #dee8e9;
    .dropdown {
      width: 291px;
      height: 80px;
      background: #f2f7f7;
      position: relative;
      border-bottom: 1px solid #e0e8e8;
      z-index: 9999;
      .user_menu {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        font-size: 16px;
        font-weight: 900;
        color: white;
        width: 180px;
        float: left;
        cursor: pointer;
        background: #f2f7f7;
        border-top: 2px solid #f2f7f7;
        padding: 20px 0 20px 20px;
        a {
          float: right;
        }
        .menuDropdown {
          height: 40px;
          margin: 0;
          position: relative;
          i.connection_icon.online {
            background-image: url("../assets/img/online-afd4b65201.png");
          }
          .connection_style {
            position: absolute;
            left: 53px;
            bottom: 2px;
            font-size: 12px;
            font-family: 'Microsoft YaHei';
            color: #999;
          }
          .current_user_avatar {
            width: 40px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 12px;
            float: left;
            .member_image {
              width: 40px;
              height: 40px;
            }
          }
          .current_user_name {
            color: #555556;
            font-size: 14px;
            font-family: 'Microsoft YaHei';
            position: absolute;
            display: inline-block;
            max-width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            left: 53px;
            top: 3px;
            line-height: 16px;

          }
          .connection_icon {
            width: 14px;
            height: 14px;
            position: absolute;
            top: 30px;
            left: 30px;
          }
        }
        .dropdownMenu-enter-active {
          animation: dropdownMenu-in .2s;
        }
        .dropdownMenu-leave-active {
          animation: dropdownMenu-out .2s;
        }
        @keyframes dropdownMenu-in {
          0% {
            height: 0;
          }
          50% {
            height: 50%;
          }
          100% {
            height: 100%
          }
        }
        @keyframes dropdownMenu-out {
          0% {
            height: 100%
          }
          50% {
            height: 50%;
          }
          100% {
            height: 0;
          }
        }
        .status-user {
          min-width: 66px;
          width: 66px;
          left: 52px;
          top: 68px;
          height: 92px;
          border: 1px solid #09aeb0;
          padding: 0;
          position: absolute;
          background-color: white;
          overflow: hidden;
          border-radius: 4px;
          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
          ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            li {
              padding: 0;
              height: 30px;
              line-height: 30px;
              color: #555555;
              font-size: 12px;
              text-align: center;
              font-weight: 400;
              white-space: nowrap;
              .user-icon-busy {
                background: url("../assets/img/busy-993c8f0f60.png") no-repeat;
                padding: 1px 0px 1px 16px;
                font-size: 12px;
              }
              .user-icon-online {
                background: url("../assets/img/online-afd4b65201.png") no-repeat;
                padding: 1px 0px 1px 16px;
                font-size: 12px;
              }
              .user-icon-offine {
                background: url("../assets/img/offline-d2a9280121.png") no-repeat;
                padding: 1px 0px 1px 16px;
                font-size: 12px;
              }
              &:hover {
                background-color: #dbf3f3;
                color: #555555;
                font-size: 12px;
              }
            }
          }
        }
      }
      .joinBox-yy {
        position: absolute;
        left: 182px;
        top: 27px;
        float: right;
        .waitNum {
          display: inline-block;
          cursor: pointer;
          font-size: 12px;
          color: #09aeb0;
          float: left;
          margin: 5px;
        }
      }
      .openOtherUser {
        font-size: 22px;
        color: #a4b2b3;
        text-decoration: none;
        float: left;
        i {
          background: url("../assets/images/newChat2.png");
          width: 25px;
          height: 20px;
          background-position: -40px -110px;
          display: inline-block;
        }
        .i-hover {
          background: url("../assets/images/newChat2.png");
          width: 25px;
          height: 20px;
          background-position: -72px -110px;
          display: inline-block;
        }
        span {
          font-size: 12px;
          color: #09aeb0;
          &:hover {
            color: #09c0c1;
          }
        }
      }
    }
    .mainNav {
      background: #fff;
      li {
        background-color: #f2f7f7;
        position: relative;
        .main_tab {
          border-bottom: 1px solid #ddd;
          li {
            clear: none;
            float: left;
            a {
              display: block;
              font-size: 14px;
              width: 145px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              background-color: #f2f7f7;
              padding: 0;
              color: #565657;
              border: 0;
              font-weight: bold;
              text-decoration: none;
            }
            &.active {
              a {
                color: #09aeaf;
                background-color: #f2f7f7;
                border-bottom: solid 3px #09aeb0;
              }
            }
          }
        }
      }
    }
    .tab-content {
      flex: 1;
      background-color: #f2f7f7;
      overflow: auto;
      .tab-pane {
        overflow-y: auto;

        .radio-box-yy {
          padding: 15px 16px;
          line-height: 18px;
          text-align: center;
          border-bottom: 1px solid #e0e8e8;
        }
      }
      .onoffTip {
        height: 30px;
        line-height: 30px;
        background: #f2f7f7;
        color: #96a2a3;
        padding-left: 20px;
        border-bottom: 1px solid #e0e8e8;
      }
      li {
        .item-detail {
          height: 100%;
          margin-left: 62px;
          padding-top: 12px;
          min-height: 68px;
          .unameWidely {
            .uname {
              max-width: 130px;
              height: 20px;
              line-height: 20px;
              overflow: hidden;
              display: inline-block;
              vertical-align: bottom;
              text-overflow: ellipsis;
              white-space: nowrap;
              color: #555556;
              font-size: 14px;
              font-family: "Microsoft YaHei", serif;
            }
          }
          .chat-detail {
            &.orange {
              color: #ffad01;
            }
            color: #999;
            display: block;
            width: 130px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin: 4px 0 8px 0;
            height: 20px;
            font-size: 13px;
          }
        }
        &.user-list-item {
          width: 100%;
          cursor: pointer;
          position: relative;
          background-color: #f2f7f7;
          border-bottom: 1px solid rgba(88, 89, 91, 0.1);
          overflow: hidden;
          transition: background 0.3s linear, border-width 0.1s linear;
          &:hover {
            background: #e6f0ef;
            .user-del {
              display: block;
            }
          }

          .user-del {
            height: 20px;
            width: 20px;
            position: absolute;
            display: block;
            cursor: pointer;
            top: 0px;
            display: none;
            right: 0px;
            background: url(../assets/images/userListIco-5c38f007fc.png) 6px -128px no-repeat;
          }
          .icon {
            background-color: #ccc;
            &.laptop {
              float: left;
              height: 40px;
              width: 40px;
              display: block;
              border-radius: 50%;
              position: relative;
              margin-top: 14px;
              margin-left: 14px;
              background: #60adf6 url("../assets/images/newChat1.png") -98px -235px;
              &.offline {
                background-color: #bac2c1;
              }
              .badge {
                &.badge-red {
                  background: #ff7878;
                }
                border-radius: 10px;
                font-size: 12px;
                font-weight: 700;
                line-height: 1;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                vertical-align: baseline;
                position: absolute;
                visibility: hidden;
                right: -5px;
                font-family: "Microsoft YaHei";
                font-style: normal;
                top: -4px;
                padding-top: 2px;
              }
            }
          }
          .receiveTime {
            position: absolute;
            top: 36px;
            right: 14px;
            font-size: 12px;
            font-family: "Microsoft Yahei", serif;
            color: #bbbfbf;
          }
        }
        &.active {
          background: #d8ebea;
          border-left: 3px solid #09aeb0;
          .user-del {
            display: block;
          }
          &:hover {
            background-color: #d8ebea;
          }
        }
      }
    }
  }
</style>
