<template>
  <div class="container">
    <div id="copyTxt" style="font-size: .3rem;color: transparent;position: absolute; z-index: 0;">{{weChatName}}</div>
    <detail-header :on-back-button-click="back" :has-search="false" title="联系商家"></detail-header>
    <div style="padding: 32px 0;background: #fff;">
        <h5>请添加微信公众号主动联系商家</h5>
        <h5 class="mrg-t4">完成录取并上岗</h5>
        <div class="weixin-info" id="copy" data-clipboard-action="copy" data-clipboard-target="#copyTxt" @click="popCopy()">
          <img class="i-weixin" src="//assets.qkcdn.com/images/41956422b7a776b815c55d19d4819d8e.png">
          <span v-text="weChatName"></span>
        </div>
        <div style="font-size: 12px;color: #B5B5B5;text-align: center;">
            <div>打开微信>通讯录>公众号>右上角添加>搜索</div>
            <div style="margin-top: 2px;">“<span v-text="weChatName"></span>”并关注</div>
        </div>
    </div>
    <div class="warm-prompt">温馨提示：正规兼职不会收取任何费用，若收费请提高警惕</div>
    <div v-if="isShowPopup" class="popup-bg"></div>
    <div v-if="isShowPopup" class="popup-container">
        <div class="popup-body">
            <i @click="isShowPopup = false" class="i-close"></i>
            <div class="logo-wrap"><img class="i-logo" src="//assets.qkcdn.com/images/cba54ab074518c80130fcfbe690c4009.png"></div>
            <div class="title">复制成功</div>
            <div class="desc">您已成功复制微信号，是否立即跳转<br>
                到微信搜索该微信号</div>
            <a class="btn-wrap" href="weixin://"><button class="btn-primary">确定</button></a>
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../scss/mixins';

.container {
  @include font-regular();

/* 弹层样式 */
  .popup-bg {
    background: rgba(0,0,0,0.65);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 111;
  }
  .popup-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 11111;

    .popup-body {
      position: relative;
      width: 275px;
      height: 258px;
      padding: 30px 0 40px;
      background: #FFFFFF;
      border-radius: 4px;
      text-align: center;

      .i-close {
        position: absolute;
        top: 14px;
        right: 14px;
        display: inline-block;
        width: 14px;
        height: 14px;
        background: url('//assets.qkcdn.com/images/c0cc45d4d711a495937bb341a2f086de.png');
        background-size: 100% 100%;
      }

      .i-logo {
        width: 36px;
        height: 36px;
      }

      .title {
        font-size: 14px;
        color: #3A3A3A;
        letter-spacing: 0;
        text-align: center;
        line-height: 22px;
        margin: 14px 0 12px;
      }
      .desc {
        font-size: 13px;
        color: #888888;
        text-align: center;
        line-height: 20px;
        margin-bottom: 24px;
      }
      .btn-primary {
        width: 160px;
        height: 40px;
        background: #6ED9CA;
        border-radius: 2px;
        color: #fff;
      }
    }
  }
/**/

  h5 {
    @include font-semibold();

    font-size: 16px;
    color: #444749;
    letter-spacing: 0;
    text-align: center;
  }
  .weixin-info {
    width: 189px;
    margin: 22px auto 10px;
    border: 1px dashed #37B32A;
    border-radius: 2px;
    padding: 14px 25px;
    text-align: center;
    font-family: PingFangSC-Semibold;
    font-size: 16px;
    color: #37B32A;
    word-wrap:break-word;

    .i-weixin {
      width: 21px;
      margin-right: 10px;
      transform: translateY(4px);
    }
  }
  .mrg-t4 {
    margin-top: 4px;
  }
  .warm-prompt {
    margin-top: 14px;
    font-size: 12px;
    color: #B5B5B5;
    text-align: center;
  }
}
</style>
<script>
import DetailHeader from '~/components/DetailHeader.vue'
import storage from '~/services/storage'
import Clipboard from 'clipboard'

export default {
  layout: 'gray',
  components: {
    DetailHeader
  },
  data () {
    return {
      jobId: 0,
      weChatName: '',
      isShowPopup: false
    }
  },
  mounted () {
    if (storage.getStorage('DETAIL_WECHAT')) {
      this.weChatName = storage.getStorage('DETAIL_WECHAT')
    }
    if (storage.getStorage('DETAIL_ID')) {
      this.jobId = storage.getStorage('DETAIL_ID')
    }
    this.onCopy()
  },
  methods: {
    onCopy () {
      let clipboard = new Clipboard('#copy')
      clipboard.on('success', function () {
        console.log('复制成功')
      })
      clipboard.on('error', function () {
        alert('复制失败')
      })
    },

    popCopy () {
      this.isShowPopup = true
    },

    back () {
      this.$router.push('/details/' + this.jobId)
    }
  }
}
</script>


