<template>
  <div class="zc-shadow-layer" id="dialogWin">
    <div class="bootbox">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" @click="closeWin">× </button>
            <h4 class="modal-title">{{this.$store.state.dialog.title}}</h4>
          </div>
          <div class="modal-body">
            <setting v-if="this.$store.state.dialog.model==='setting'"></setting>
            <addOnLineUser v-if="this.$store.state.dialog.model==='invitation'"></addOnLineUser>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import setting from './setting.vue'
  import addOnLineUser from './addOnLineUser.vue'
  export default
  {
    data()
    {
      return {}
    },
    methods: {
      closeWin()
      {
        this.$store.commit('dialogSwitch', {})
      }
    },
    components: {
      'setting': setting,
      'addOnLineUser': addOnLineUser
    }
  }
</script>

<style lang="scss">
  .zc-shadow-layer {
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 1001;
    position: fixed;
    background-color: rgba(99, 99, 99, 0.7);
    .bootbox {
      width: 800px;
      margin: auto;
      .modal-dialog {
        position: relative;
        margin: 30px auto;
        width: 860px;
        max-height: 500px;
        .modal-content {
          border-radius: 1px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
          position: relative;
          background-color: #fff;
          background-clip: padding-box;
          border: 1px solid #999;
          outline: 0;
          .modal-header {
            height: 54px;
            border-bottom: 1px solid #38bfbe;
            background-color: #f4fdfb;
            padding: 18px 30px;
            min-height: 16.43px;
            .close {
              margin: 0;
              line-height: 18px;
              color: #09b1af;
              opacity: 1;
              -webkit-appearance: none;
              padding: 0;
              cursor: pointer;
              background: 0 0;
              border: 0;
              float: right;
              font-size: 21px;
              font-weight: 700;
              float: right;
              font-size: 21px;
              font-weight: 700;
            }
            .modal-title {
              line-height: 16px;
              font-size: 16px;
              margin: 0;
              padding: 0;
              font-family: "microsoft yahei";
            }
            .modal-body {
              padding: 0;
              text-align: center;
              position: relative;
              min-height: 120px;

            }
          }
        }
      }
    }
  }
</style>
