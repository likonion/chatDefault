<template>
  <div class="sideinfo">
    <ul class="tabmenu clearfix">
      <li :class="{active: tabIndex === 1}" @click="sideTab(1)"><i class="fa fa-user1"></i><br><span>用户资料</span></li>
      <li :class="{active: tabIndex === 2}" @click="sideTab(2)"><i class="glyphicon glyphicon-comment1"></i><br><span>快捷回复</span>
      </li>
      <li :class="{active: tabIndex === 3}" @click="sideTab(3)"><i class="fa fa-comments-o1"></i><br><span>智能回复</span>
      </li>
    </ul>
    <ul class="tabcontent">
      <li v-show="tabIndex === 1">
        <div class="nullcon" v-show="user.length===0 || user.acctiveUserIndex === null">
          <i class=" tab-profilebg"></i>
        </div>
        <div v-if="user.length!==0 && user.acctiveUserIndex !== null">
          <dl>
            <dt>访问信息</dt>
            <dd><span>访问来源：</span>--</dd>
            <dd><span>访问着陆页：</span>--</dd>
            <dd><span>对话发起页：</span>--</dd>
            <dd><span>接入渠道：</span>桌面网站</dd>
            <dd><span>技能组：</span>--</dd>
            <dd><span>排队时长：</span>--</dd>
            <dd><span>IP地址：</span> 218.5.55.5</dd>
            <dd><span>终端：</span> Google Chrome</dd>
            <dd><span>系 统：</span> 未知</dd>
            <dt>用户信息</dt>
            <dd><span>昵称：</span><input type="text">
            </dd>
            <dd><span>姓名：</span><input type="text" v-if="user.item !== undefined" v-model="user.item[user.acctiveUserIndex].name"></dd>
            <dd><span>来源：</span>桌面网站</dd>
            <dd><span>电话：</span><input type="text" value="-"></dd>
          </dl>
          <p class="saveCustomerInfo js-saveCustomerInfo">保存客户信息</p>
        </div>
      </li>
      <li v-show="tabIndex === 2">快捷回复</li>
      <li v-show="tabIndex === 3">智能回复</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabIndex: 1,
        tabIf: false
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      test() {
          return this.user.item.length
      }
    },
    methods: {
      sideTab (e) {
        this.tabIndex = e
      }
    }
  }
</script>

<style lang="scss">
  .sideinfo {
    border-left: 1px solid #dee8e9;
    display: flex;
    flex-flow: column;
    .tabmenu {
      height: 54px;
      background-color: #f2f7f7;
      border-bottom: 1px solid #e0e8e8;
      li {
        float: left;
        width: 95px;
        cursor: pointer;
        font-size: 13px;
        color: #a4b2b3;
        padding-top: 8px;
        text-align: center;
        i {

          &.fa-user1 {
            background: url(../assets/images/newChat2.png) -20px -665px;
            width: 40px;
            height: 20px;
            display: inline-block;
          }
          &.glyphicon-comment1 {
            background: url(../assets/images/newChat2.png) -65px -665px;
            width: 40px;
            height: 20px;
            display: inline-block;
          }
          &.fa-comments-o1 {
            background: url(../assets/images/newChat2.png) -110px -665px;
            width: 40px;
            height: 20px;
            display: inline-block;
          }
        }
        &.active {
          color: #09aeb0;
          border-bottom: solid 3px #09aeb0;
          .fa-user1 {
            background-position: -20px -713px;
          }
          .glyphicon-comment1 {
            background-position: -65px -713px;
          }
          .fa-comments-o1 {
            background-position: -110px -713px;
          }
        }
      }
    }
    .tabcontent {
      flex: 1;
      overflow: auto;
      padding: 10px;
      clear: both;
      li {
        .nullcon {
          .tab-profilebg {
            width: 90px;
            height: 65px;
            margin: 50% auto 0;
            display: block;
            background: url(../assets/images/noProfileUserInfo.png) no-repeat;
            background-position-x: -27px;
          }
        }
        dl {
          color: #4E5A75;
          font-size: 14px;
          line-height: 14px;
          dt {
            color: #565656;
            font-weight: 500;
            margin: 25px 0;
          }
          dd {
            margin: 15px 0;
          }
        }
        .saveCustomerInfo {
          margin: auto;
          clear: both;
          float: left;
          width: 116px;
          height: 30px;
          font-size: 12px;
          color: #fff;
          text-align: center;
          line-height: 30px;
          background: #07afb0;
          border-radius: 2px;
          margin-top: 20px;
          cursor: pointer;
          margin-left: 62px;
        }
      }
    }
  }
</style>
