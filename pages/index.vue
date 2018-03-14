<template>
  <section class="container">
    <div>
      <div class="header">
        <img class="logo" src="//assets.qkcdn.com/images/87e1ad360d8cc68fb98ca6fb10d2c7ab.png">
        <img class="title" src="//assets.qkcdn.com/images/c26e186dc20b83745f3cd2e212d4cc89.png">
        <span @click="forwardTo('address')" class="address">{{ currentCity }}</span>
        <img class="down-arrow" src="//assets.qkcdn.com/images/ac459b70067d67bda7c2b5f79aa6b7ef.png">
        <span @click="forwardTo('search')"><img class="i-search" src="//assets.qkcdn.com/images/77afe7d6166f2cd816dd3dcce1651f49.png"></span>
      </div>
      <section>
          <div v-infinite-scroll="refresh" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <job-items :job-list="jobList"></job-items>
          </div>
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
import JobItems from '~/components/JobItems.vue'
import { queryJobList } from '../services/job'
import { KEY_SUGAR_CURRENT_CITY } from '../services/contants'
import StorageFactory from '../utils/storage'

export default {
  components: {
    LoadingIcon,
    JobItems
  },
  data () {
    return {
      jobList: [],
      busy: false,
      currentCity: {},
      cityId: ''
    }
  },
  async asyncData ({ params }) {
    // console.log(login)
    // let { data } = await login()
    // console.log(data)
    // return { title: data }
  },
  mounted () {
    let cityObj = new StorageFactory(window.localStorage).get(KEY_SUGAR_CURRENT_CITY)
    this.currentCity = (cityObj && cityObj.city_name) || '全国'
    this.cityId = cityObj.id

    this.fetchJobList(0, 10)
  },
  methods: {
    fetchJobList (offset, pageSize) {
      let params = {offset, pageSize}
      if (!this.cityId) {
        params.city_id = this.cityId
      }
      queryJobList(params)
        .then(res => res.data.payload)
        .then(payload => {
          console.log(payload)
          this.jobList = payload
        })
    },
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
}

</style>
