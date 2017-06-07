<template>
  <div class="bootbox-body ">
    <div class="table-responsive ls-table reqTableBox">
      <div class="reqMenuBox clear">
        <div class="fl">
          <button class="ls-light-green-btn active"> 排队中 <span
            class="waitSize  ">0</span></button>
        </div>
      </div>
      <div>
        <div class="screen-condition">
          <div class="fl"><span class="condition  "><span class="sourcevalue">所有来源</span><span
            class="ico" style="background-position: 3px 0px;"></span></span> <span
            class="condition  "><span class="techvalue">所有技能组</span><span
            class="ico" style="background-position: 3px 0px;"></span></span> <input
            class="conditionInput " id="" placeholder="搜索用户昵称、备注"> <span
            class="magnifier"></span> <span class="clearInput " style="left:471px;"></span>
            <ul id="origin" class="source-inner  " style="display: none;">
              <li class="hover  "><span class="checkBox"></span><span
                class="inner">全部</span></li>
              <li class="hover  "><span class="checkBox"></span><span
                class="inner">桌面网站</span></li>
              <li class="hover  "><span class="checkBox"></span><span class="inner">微信</span>
              </li>
              <li class="hover  "><span class="checkBox"></span><span class="inner">App</span>
              </li>
              <li class="hover  "><span class="checkBox"></span><span class="inner">微博</span>
              </li>
              <li class="hover  "><span class="checkBox"></span><span
                class="inner">移动网站</span></li>
              <li class="sourceBtnGroup "><span class="sureBtn ">确定</span><span
                class="cancelBtn ">取消</span></li>
            </ul>
            <ul id="technology" class="technology-inner   zc-scroll" style="display: none;">
              <li class="hover  "><span class="checkBox"></span><span
                class="inner">全部</span></li>
              <li class="technoBtnGroup "><span class="sureBtn ">确定</span><span
                class="cancelBtn ">取消</span></li>
            </ul>
          </div>
          <div class="fr"><span class="reqRefNow">刷新于<span >11:51:32</span></span><a
            class="reaRefBtn " href="javascript:;"><span class="refresh"></span>刷新</a></div>
          <div style="clear:both"></div>
        </div>
        <div>
          <table class="reqTableTh queueTable">
            <tbody>
            <tr>
              <th class="th2">用户昵称</th>
              <th class="th3">来源</th>
              <th class="thGroup th4">技能组</th>
              <th class="th5">用户备注</th>
              <th class="th6  ">等待时长<span class="sort " style="background-position: -393px 0px;"></span></th>
              <th class="th7">操作</th>
            </tr>
            </tbody>
          </table>
        </div>
        <div>
          <div class=" table-outer zc-scroll">
            <div class="noUser"><p>暂无用户</p></div>
            <table class="table table-bottomless ls-animated-table queueTable">
              <tbody class="reqDomBox"></tbody>
            </table>
            <div class="queueLoading" style="display: none;"><span></span></div>
          </div>
          <div class="reqBottom clear spec">
            <div class="fl"><p style="float:left"> 显示 <span class="countPage ">0</span>/<span
              class="allCountPage -page">0</span> 页 </p>
              <p style="float:left;margin-left:8px;"> 总共 <span class="countSize ">0</span> 条 </p></div>
            <div class="fr">
              <!--<a class="reqFirstBtn" href="javascript:;">首页 </a> <span class="allCountPageBox hide">                         <a class="goCountPage" href="javascript:;">0</a></span> -->
              <a class="reaPrevBtn " href="#">&lt;上一页</a>
              <ul class="pageNumber "></ul>
              <a class="reaNextBtn " href="#">下一页&gt;</a>
              <!-- <a class="reqLastBtn" href="javascript:;">末页 </a> <input type="text" class="reqGoText "> <a class="reqGoNumber -btn" href="javascript:;">跳转</a> -->
            </div>
          </div>
        </div>
        <!-- <div class=" table-outer zc-scroll"> <table class="table table-bottomless ls-animated-table"> <thead class="reqTableTh waitClass"> <tr> <th class="th2">用户昵称</th><th class="th3">来源</th><th class="thGroup th4">技能组</th><th class="th5">用户备注</th><th class="th6 ">等待时长<span class="sort "></span></th><th class="th7">操作</th> </tr> </thead> <tbody class="reqDomBox">  </tbody> </table></div><div class="reqBottom clear spec"> <div class="fl"> <p style="float:left"> 显示 <span class="countPage ">0</span>/<span class="allCountPage -page">0</span> 页 </p> <p style="float:left;margin-left:8px;"> 总共 <span class="countSize ">0</span> 条 </p> </div> <div class="fr"> <a class="reaPrevBtn "  href="#"><上一页</a> <ul class="pageNumber ">          </ul> <a class="reaNextBtn "  href="#">下一页></a> </div></div> -->
      </div><!-- allData --> </div>
  </div>
</template>

<script></script>

<style lang="scss">
  .bootbox-body {
    .reqTableBox {
      font-family: 微软雅黑;
      padding: 52px 54px;
      .reqBottom {
        margin-top: 15px;
        p {
          font-size: 12px;
          font-weight: bold;
          color: #9c9c9c;
        }
        .reaPrevBtn,.reaNextBtn {
          display: block;
          float: left;
          width: 58px;
          height: 24px;
          line-height: 21px;
          font-size: 12px;
          border: 1px solid #e7ecf0;
          color: rgb(9, 174, 176);
          font-weight: bold;
          font-family: 微软雅黑;
          margin: 0px 5px;
          text-align: center;
          text-decoration: none;
          &:hover {
            color: #2a6496;
            text-decoration: underline;
          }
        }
        .pageNumber {
          float: left;
          overflow: hidden;
        }
      }
      .reqMenuBox {
        height: 34px;
        margin-bottom: 30px;
        border-bottom: 1px solid #e5e5e5;
        .ls-light-green-btn {
          background-color: #eff5f5;
          width: 128px;
          height: 33px;
          transition: all 400ms linear;
          border-left: 1px solid #eff5f5;
          border-right: 1px solid #eff5f5;
          border-top: 3px solid #eff5f5;
          border-bottom: 1px solid #eff5f5;
          text-align: center;
          line-height: 33px;
          font-size: 14px;
          color: #999999;
          padding: 0;
          margin: 0;
          outline: none;
          &.active {
            height: 34px;
            line-height: 34px;
            border-left: 1px solid #e5e5e5;
            border-right: 1px solid #e5e5e5;
            border-top: 3px solid #09aeb0;
            border-bottom: 1px solid #fff;
            margin-bottom: -1px;
            background-color: #fff;
            color: #09adae;
          }
        }

      }
      .queueTable {
        tr {
          th {
            font-size: 14px;
            font-weight: bold;
            color: #555556;
            text-align: left;
          }
          .th2 {
            width: 20%;
          }
          .th3 {
            width: 13%;
          }
          .th4 {
            width: 14%;
          }
          .th5 {
            width: 21%;
          }
          .th6 {
            position: relative;
            z-index: 10;
            cursor: pointer;
            width: 20%;
            span {
              position: absolute;
              left: 58px;
              top: 21px;
              z-index: 20;
              width: 17px;
              height: 17px;
              background: url(../../assets/images/investIco-9397e3e5bc.png) no-repeat -429px 0px;
            }
          }
          .th7 {
            width: 15%;
          }
        }
      }
      .reqTableTh {
        width: 100%;
        height: 52px;
        font-family: 微软雅黑;
        border-top: 1px solid rgb(204, 204, 204);
      }
      .noUser {
        width: 100%;
        height: 260px;
        p {
          width: 100%;
          height: 260px;
          line-height: 260px;
          text-align: center;
          font-size: 15px;
          color: rgb(152, 152, 152);
          font-family: 微软雅黑;
        }
      }
      .screen-condition {
        margin-bottom: 30px;
        position: relative;
        z-index: 10;
        .condition {
          display: inline-block;
          position: relative;
          float: left;
          width: 100px;
          height: 34px;
          line-height: 34px;
          font-size: 12px;
          color: #565656;
          padding-left: 10px;
          margin-right: 10px;
          border: 1px solid #ededed;
          cursor: pointer;
          text-align: left;
          .ico {
            position: absolute;
            top: 13px;
            left: 80px;
            width: 17px;
            height: 17px;
            background: url(../../assets/images/investIco-9397e3e5bc.png) no-repeat 3px 0px;
          }
        }
        .conditionInput {
          float: left;
          width: 280px;
          height: 34px;
          border: 1px solid #ededed;
          color: #999999;
          font-size: 12px;
          padding-left: 35px;
          outline: none;
        }
        .magnifier {
          display: inline-block;
          width: 20px;
          height: 20px;
          position: absolute;
          top: 8px;
          left: 230px;
          background: url(../../assets/images/investIco-9397e3e5bc.png) no-repeat -173px 0px;
        }
      }
      .reqRefNow {
        float: left;
        margin-top: 8px;
        font-size: 11px;
        color: #909090;
      }
      .reaRefBtn {
        display: inline-block;
        float: left;
        padding-left: 6px;
        margin-top: 8px;
        color: #06aeae;
        font-size: 13px;
        .refresh {
          display: inline-block;
          float: left;
          width: 17px;
          height: 17px;
          margin: 2px;
          background: url(../../assets/images/investIco-9397e3e5bc.png) no-repeat -467px 0px;
        }
      }
    }
  }
</style>
