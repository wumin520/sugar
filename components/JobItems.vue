<template>
  <ul class="job-wrap">
    <li @click="forwardTo('details', item.id)" v-for="(item, index) in jobList" :key="index" class="job-item">
        <div class="top">{{ item.title }}
        <img v-if="item.hot_tag === 1" class="i-hot" src="//assets.qkcdn.com/images/a89237a3fdaae321f04cbe4b043af646.png">
        </div>
        <div class="middle">
        <img class="i-address" src="//assets.qkcdn.com/images/4a83e774ee285572434330008cfe7ad7.png">{{ item.city_name }}
        <img class="i-time" src="//assets.qkcdn.com/images/4f2abe32e416476fedc3279926b8381c.png">
        {{ item.jianpin_type }}
        </div>
        <div class="bottom">
        <span><label class="money">{{ item.currency }}</label>元/{{ item.currency_unit | formartUnit}}</span>
        <i class="i-vertical-line"></i><span>{{ item.jiexi_type | formartJieXiType}}</span>
        </div>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    jobList: {
      type: Array,
      default: []
    }
  },
  filters: {
    formartUnit (val) {
      switch (val) {
        case 1:
          val = '小时'
          break
        case 2:
          val = '日'
          break
        case 3:
          val = '周'
          break
        case 4:
          val = '月'
          break
      }
      return val
    },
    formartJieXiType (val) {
      switch (val) {
        case 1:
          val = '日'
          break
        case 2:
          val = '周'
          break
        case 3:
          val = '月'
          break
      }
      return val
    }
  },
  methods: {
    forwardTo (name, params) {
      let path = '/' + name
      if (params) {
        path += '/' + params
      }
      this.$router.push(path)
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../scss/mixins.scss';

  .job-wrap {
    padding: 0 16px;

    .job-item {
      padding: 18px 0 13px;
      border-top: 0.5px solid #eeeeee;

      .top {
        @include font-semibold();

        font-size: 16px;
        color: #444749;
        display: flex;
        align-items: center;

        .i-hot {
          width: 28px;
          margin-left: 10px;
        }
      }
      .middle {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #B5B5B5;
        margin: 8px 0 11px;

        .i-address {
          width: 12px;
          margin-right: 2px;
        }
        .i-time {
          width: 12px;
          margin-left: 14px;
          margin-right: 4px;
        }
      }
      .bottom {
        font-size: 12px;
        color: #444749;
        height: 22px;

        .money {
          @include font-din();

          font-size: 22px;
          color: $primary-color;
          margin-right: 2px;
          position: relative;
          top: 1px;
        }
        .i-vertical-line {
          display: inline-block;
          width: 1px;
          height: 8px;
          margin: 0 5px;
          background: #b5b5b5;
          /*box-shadow: inset 0.5px 0 0 0 #B5B5B5;*/
        }
      }
    }
  }
</style>


