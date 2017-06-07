<template>
  <div class="modal-alert-content">
    <div class="setUpArea">
      <div class="setUpleftMenu">
        <ul>
          <li class="active">当前会话</li>
        </ul>
      </div>
      <div class="sessionList"><p class="title">当前会话</p>
        <div class="sortStyle"><p class="sortStyletitle">排序方式：</p>
          <div class="innerArea">
            <div class="accessOrder optionActive" ><i class="option"></i>
              <p class="orderTxt">按接入顺序</p>
              <p class="orderdetail">新接入的用户在列表上方，用户发来信息后列表排序不会改变</p></div>
            <div class="msgTime"><i class="option"></i>
              <p class="orderTxt">按新消息时间</p>
              <p class="orderdetail">用户发来新消息后自动移动到列表上方</p></div>
            <div class="starTop starTopActive"><i class="starTopCheckBox"></i>
              <p class="orderTxt">星标用户在当前会话列表置顶</p></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
  .modal-alert-content {
    padding: 25px;
    p {
      font-size: 17px;
      font-weight: bold;
    }
    .setUpArea {
      width: 750px;
      height: 480px;
      margin: 20px auto;
      border: 1px solid #e6eded;
      .setUpleftMenu {
        float: left;
        ul {
          width: 158px;
          height: 480px;
          border-right: 1px solid #e6eded;
          li {
            float: right;
            font-size: 12px;
            margin: 30px 0;
            padding-right: 18px;
            &.active {
              color: rgb(9, 174, 176);
              font-family: 微软雅黑;
              border-right: 2px solid rgb(9, 174, 176);
            }
          }
        }
      }
      .sessionList {
        float: left;
        width: 450px;
        margin-bottom: 10px;
        cursor: pointer;
        .starTopActive {
          .starTopCheckBox {
            background: url(../../assets/images/chatItem-6e402aa890.png) no-repeat -95px 1px;
            background-size: 560px 18px;
          }
        }
        .starTopCheckBox {
          position: absolute;
          left: 0;
          top: 2px;
          width: 20px;
          height: 20px;
          background: url(../../assets/images/chatItem-6e402aa890.png) no-repeat -143px 1px;
          background-size: 560px 18px;
        }
        .option {
          position: absolute;
          left: 0;
          top: 0px;
          width: 20px;
          height: 20px;
          background: url(../../assets/images/chatItem-6e402aa890.png) no-repeat -177px 3px;
          background-size: 560px 18px;
        }
        .orderTxt {
          font-size: 12px;
          text-align: left;
          font-family: 微软雅黑;
          padding: 0px 0px 5px 30px;
        }
        .orderdetail {
          color: #999999;
          font-size: 12px;
          text-align: left;
          padding: 0px 0 5px 30px;
        }
        .title {
          width: 100%;
          font-size: 15px;
          color: rgb(96, 96, 97);
          text-align: left;
          font-family: 微软雅黑;
          padding: 30px 0px 30px 25px;
        }
        .sortStyle {
          overflow: hidden;
          width: 590px;
          .sortStyletitle {
            float: left;
            width: 114px;
            height: 400px;
            text-align: center;
            font-size: 12px;
            color: rgb(85, 85, 86);
            font-family: 微软雅黑;
          }
          .innerArea {
            float: left;
            margin-left: 10px;
            .accessOrder {
              position: relative;
              width: 450px;
              margin-bottom: 10px;
              cursor: pointer;

            }
            .msgTime {
              position: relative;
              width: 450px;
              margin-bottom: 10px;
              cursor: pointer;
            }
            .starTop {
              position: relative;
              cursor: pointer;
            }
            .optionActive {
              .option {
                background: url(../../assets/images/chatItem-6e402aa890.png) no-repeat -223px 3px;
                background-size: 560px 18px;
              }
            }
          }
        }
      }
    }
  }

</style>
