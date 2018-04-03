<template>
  <section class="container">
    <div>
      <div class="header">
        <img class="logo" src="//assets.qkcdn.com/images/e8033b00ac439b322561b984b7069a5a.png">
        <img class="title" src="//assets.qkcdn.com/images/c26e186dc20b83745f3cd2e212d4cc89.png">
        <span @click="forwardTo('address')" v-text="currentCity.city_name" class="address"></span>
        <img class="down-arrow" src="//assets.qkcdn.com/images/ac459b70067d67bda7c2b5f79aa6b7ef.png">
        <span @click="forwardTo('search')"><img class="i-search" src="//assets.qkcdn.com/images/77afe7d6166f2cd816dd3dcce1651f49.png"></span>
      </div>
      <section>
          <div v-infinite-scroll="refresh" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <job-items :job-list="jobList"></job-items>
          </div>
          <div v-show="isLoading" class="loading-wrap">
            <loading-icon></loading-icon>
          </div>
      </section>
      <footer v-if="isEnd">
        <div>宁波万精油网络科技有限公司</div>
        <div>ICP备案：18012003号</div>
      </footer>
    </div>
  </section>
</template>

<script>
import LoadingIcon from '~/components/LoadingIcon.vue'
import JobItems from '~/components/JobItems.vue'
import { queryJobList } from '../services/job'
import { mapState } from 'vuex'

export default {
  layout: 'gray',
  components: {
    LoadingIcon,
    JobItems
  },
  data () {
    return {
      jobList: [],
      isLoading: false,
      busy: false,
      lastId: '',
      page: 1,
      pagesize: 50,
      isEnd: false
    }
  },
  computed: {
    ...mapState(['currentCity'])
  },
  async asyncData () {
    if (process.server) {
      return queryJobList({
        offset: 0,
        pagesize: 50
      }).then(res => res.data.payload)
        .then(payload => {
          return {
            jobList: payload
          }
        })
    }
  },
  mounted () {
    this.jobList = []
    this.busy = true
    this.fetchJobList()
  },
  methods: {
    fetchJobList (offset = 1) {
      let params = {offset, pagesize: this.pagesize}
      if (this.currentCity.id) {
        params.city_id = this.currentCity.id
      }
      this.isLoading = true
      queryJobList(params)
        .then(res => res.data.payload)
        .then(payload => {
          if (payload.length < this.pagesize) {
            this.busy = true
            this.isEnd = true
          } else {
            this.busy = false
          }
          this.jobList.push(...payload)
          this.isLoading = false
          this.page++
        })
    },
    refresh () {
      console.log('start loading more data')
      this.busy = true
      this.fetchJobList(this.page)
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
  background: #fff;

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
