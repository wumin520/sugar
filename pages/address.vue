<template>
<div class="container">
  <header>
    <div class="title-wrap" @click="forward('home')">兼聘</div>
    <div class="current-location">当前定位： <span class="active">{{ currentCityName }}</span></div>
  </header>
  <div class="all-city">全部城市</div>
  <div class="address-list-container">
    <div @click="selectCity(item)" v-for="(item, index) in addressList" :key="item.id">
      <i v-show="(index + 1) % 4 != 0" class="i-vertical-line"></i>
      {{ item.city_name }}
    </div>
  </div>
</div>
</template>
<script>
import { queryCitys } from '../services/address'
import { KEY_SUGAR_CURRENT_CITY } from '../services/contants'
import StorageFactory from '../utils/storage'
import { mapState, mapMutations } from 'vuex'

export default {
  layout: 'gray',
  data () {
    return {
      addressList: [],
      currentCityName: '全国'
    }
  },
  computed: {
    ...mapState(['currentCity'])
  },
  mounted () {
    this.currentCityName = this.currentCity.city_name
    queryCitys().then(res => res.data.payload).then(payload => {
      this.addressList = payload
    })
  },
  methods: {
    ...mapMutations(['updateCity']),
    selectCity (item) {
      this.updateCity(item)
      new StorageFactory(window.localStorage).set(KEY_SUGAR_CURRENT_CITY, item)
      this.currentCityName = item.city_name
      this.$router.push('/')
    },
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
      position: relative;
      display: inline-block;
      width: 25%;
      background: #ffffff;
      text-align: center;

      .i-vertical-line {
        display: inline-block;
        position: absolute;
        top: 14px;
        right: 0;
        width: 1px;
        height: 12px;
        background: #eeeeee;
      }

      &:last-child {
        .i-vertical-line {
          display: none;
        }
      }
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
        color: $primary-color;
      }
    }
  }
}
</style>



