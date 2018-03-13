<template>
  <section class="container">
    <div>
      <div class="header">
        <img class="logo" src="//assets.qkcdn.com/images/87e1ad360d8cc68fb98ca6fb10d2c7ab.png">
        <img class="title" src="//assets.qkcdn.com/images/c26e186dc20b83745f3cd2e212d4cc89.png">
        <span @click="forwardTo('address')" class="address">自贡</span>
        <img class="down-arrow" src="//assets.qkcdn.com/images/ac459b70067d67bda7c2b5f79aa6b7ef.png">
        <span><img class="i-search" src="//assets.qkcdn.com/images/77afe7d6166f2cd816dd3dcce1651f49.png"></span>
      </div>
      <section>
          <ul v-infinite-scroll="refresh" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="job-wrap">
            <li @click="forwardTo('details', item.id)" v-for="(item, index) in jobList" :key="index" class="job-item">
              <div class="top">{{ item.title }}
                <img class="i-hot" src="//assets.qkcdn.com/images/4ffbdc8d18a70c53f564b083bc990ce5.png">
              </div>
              <div class="middle">
                <img class="i-address" src="//assets.qkcdn.com/images/4a83e774ee285572434330008cfe7ad7.png">自贡
                <img class="i-time" src="//assets.qkcdn.com/images/4f2abe32e416476fedc3279926b8381c.png">长期可做
              </div>
              <div class="bottom">
                <span><label class="money">50</label>元/小时</span>
                <i class="i-vertical-line"></i><span>日结</span>
              </div>
            </li>
          </ul>
          <div class="loading-wrap">
            <loading-icon></loading-icon>
          </div>
      </section>
      <footer>
        <div>宁波万精油网络科技有限公司</div>
        <div>京ICP备11045189-2号</div>
      </footer>
    </div>
  </section>
</template>

<script>
import LoadingIcon from '~/components/LoadingIcon.vue'
import { login } from '../services/login'

export default {
  components: {
    LoadingIcon
  },
  data () {
    return {
      jobList: [{
        id: 1,
        title: '苹果手机APP试玩在家随时可做'
      }, {
        id: 1,
        title: '苹果手机APP试玩在家随时可做'
      }, {
        id: 1,
        title: '苹果手机APP试玩在家随时可做'
      }, {
        id: 1,
        title: '苹果手机APP试玩在家随时可做'
      }, {
        id: 1,
        title: '苹果手机APP试玩在家随时可做'
      }, {
        id: 1,
        title: '苹果手机APP试玩在家随时可做'
      }, {
        id: 1,
        title: '苹果手机APP试玩在家随时可做'
      }],
      busy: false
    }
  },
  async asyncData ({ params }) {
    // console.log(login)
    // let { data } = await login()
    // console.log(data)
    // return { title: data }
  },
  mounted () {
    console.log('me')
    login().then(res => {
      console.log(res)
    })
  },
  methods: {
    refresh () {
      this.busy = true
      console.log('isme')
      // setTimeout(() => {
      //   for (let i = 0; i < 10; i++) {
      //     this.jobList.push({title: 'mem'})
      //   }
      //   this.busy = false
      // }, 2000)
    },
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
@import "../scss/mixins";

.container {
  min-height: 100vh;
  @include font-regular();

  footer {
    padding: 30px 0 20px;
    font-size: 12px;
    color: #B5B5B5;
    text-align: center;
    line-height: 20px;
    background: #f5f5f5;
  }

  .header {
    padding: 10px 16px;    
    display: flex;
    align-items: center;
    justify-items: center;
    position: relative;

    .logo {
      width: 32px;
      margin-right: 8px;
    }
    .title {
      width: 48px;
    }
    .address {
      margin-left: 16px;
      margin-right: 5px;
      font-size: 14px;
      color: #444749;
    }
    .down-arrow {
      width: 8px;
    }
    .i-search {
      width: 20px;
      position: absolute;
      top: 16px;
      right: 16px;
    }
  }

  .job-wrap {
    padding: 0 16px;

    .job-item {
      padding: 18px 0 13px;
      border-top: 1px solid #eeeeee;

      .top {
        font-size: 14px;
        color: #444749;
        display: flex;
        align-items: center;

        .i-hot {
          width: 28px;
          margin-left: 8px;
        }
      }
      .middle {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: #B5B5B5;
        margin: 6px 0 15px;

        .i-address {
          width: 12px;
          margin-right: 2px;
        }
        .i-time {
          width: 12px;
          margin-left: 12px;
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
          color: #6ED9CA;
          margin-right: 2px;
          position: relative;
          top: 1px;
        }
        .i-vertical-line {
          display: inline-block;
          width: 1px;
          height: 8px;
          margin: 0 5px;
          box-shadow: inset 1px 0 0 0 #B5B5B5;
        }
      }
    }
  }
}

</style>
