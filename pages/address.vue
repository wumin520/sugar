<template>
<div class="container">
  <header>
    <div class="title-wrap" @click="forward('home')">兼聘</div>
    <div class="current-location">当前定位： <span class="active">上海</span></div>
  </header>
  <div class="all-city">全部城市</div>
  <div class="address-list-container">
    <div v-for="(item, index) in addressList" :key="index">{{ item.title }}</div>
  </div>
</div>
</template>
<script>
export default {
  layout: 'gray',
  data () {
    return {
      addressList: [{
        title: '北京'
      }, {
        title: '北京'
      }, {
        title: '北京'
      }, {
        title: '北京'
      }, {
        title: '北京'
      }, {
        title: '北京'
      }, {
        title: '北京'
      }, {
        title: '北京'
      }]
    }
  },
  methods: {
    forward (name) {
      this.$router.push('/')
      console.log(this.$router)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/mixins';

.container {
  @include font-regular();

  .address-list-container {
    line-height: 40px;
    font-size: 14px;
    color: #444749;

    div {
      display: inline-block;
      width: 93px;
      background: #ffffff;      
      text-align: center;      
    }
  }

  .all-city {
    padding: 16px 0 8px 16px;
    font-size: 14px;
    color: #B5B5B5;
  }

  header {
    background: #ffffff;

    .title-wrap {
      padding: 8px 0;
      font-size: 20px;
      color: #444749;
      text-align: center;
    }

    .current-location {
      border-top: 1px solid #eeeeee;
      margin: 0 16px;
      padding: 12px 0;
      font-size: 14px;
      color: #B5B5B5;

      .active {
        font-size: 14px;
        color: #6ED9CA;
      }
    }
  }
}
</style>



