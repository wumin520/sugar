<!-- 详情页头部 -->
<template>
  <div class="header">
    <div class="header-box">
      <span><img class="i-back" @click="onBack()" src="//assets.qkcdn.com/images/3cf1683fe6243ff18c9dfa4666838194.png"></span>
      <div class="title" v-text="title">兼聘兼职</div>
      <span v-if="hasSearch"><img class="i-search" src="//assets.qkcdn.com/images/77afe7d6166f2cd816dd3dcce1651f49.png"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    position: relative;
    padding: 0 16px;
    height: 44px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-items: center;

    .header-box {
      position: relative;
      border-bottom: solid 1px #eeeeee;
      width: 100%;
      height: 100%;
    }

    .i-back {
      position: absolute;
      width: 8px;
      top: 50%;
      transform: translateY(-50%);
    }
    .title {
      width: 100%;
      font-family: PingFangSC-Regular;
      font-size: 17px;
      color: #444749;
      letter-spacing: 0;
      text-align: center;
      line-height: 44px;
    }
    .i-search {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      right: 0;
    }
  }
</style>

<script>
  export default {
    props: {
      title: String,
      hasSearch: {
        type: Boolean,
        default: true
      },
      onBackButtonClick: Function
    },

    methods: {
      onBack () {
        if (this.onBackButtonClick) this.onBackButtonClick()
      }
    }
  }
</script>
