<template>
  <div class="container">
      <header>
          <img @click="backTo" class="i-back" src="//assets.qkcdn.com/images/3cf1683fe6243ff18c9dfa4666838194.png">
          <div class="search-wrap">
              <i class="i-search"></i>
              <input v-model="keywords" class="search-input" placeholder="搜索职位" type="text">
              <i class="i-close"></i>
          </div>
          <button @click="searchJob" class="txt-btn">搜索</button>
      </header>
      <section>
          <job-items :job-list="jobList"></job-items>
      </section>
  </div>
</template>
<style lang="scss" scoped>
  @import '../scss/mixins';

  .container {
    @include font-regular();

    header {
      padding: 14px 16px; 

      .search-wrap {
        position: relative;          
        display: inline-block;
        width: 275px;
        margin-left: 14px;

        .i-close {
          position: absolute;
          top: 10px;
          right: 10px;
          display: inline-block;
          width: 14px;
          height: 14px;
          background: url('//assets.qkcdn.com/images/866cb46275d2985bb76df4875163f436.png');
          background-size: 100% 100%;
        }
        .i-search {
          position: absolute;
          top: 7px;
          left: 10px;
          font-size: 14px;
          color: #8E8E93;
          letter-spacing: 0;
          line-height: 22px;

          &::before {
            display: inline-block;
            width: 14px;
            height: 14px;
            background: url('//assets.qkcdn.com/images/1e3de63ed4fbca10b6086c24e3d29cea.png');
            background-size: 100% 100%;
            content: '';
            vertical-align: middle;
            margin-right: 5px;
          }
        }
        .search-input {
          width: 275px;
          height: 36px;
          padding-left: 29px;
          background: rgba(142,142,147,0.12);
          border-radius: 6px;
        }
      }
      .txt-btn {
        font-size: 17px;
        color: #444749;
        letter-spacing: -0.41px;
        margin-left: 12px;
      }
    }
    .i-back {
      width: 8px;
      height: 16px;
    }
  }
</style>
<script>
import JobItems from '~/components/JobItems.vue'
import { searchJob } from '../services/job'
import StorageFactory from '../utils/storage'
import { KEY_SUGAR_CURRENT_CITY } from '../services/contants'

export default {
  components: {
    JobItems
  },
  data () {
    return {
      jobList: [],
      keywords: '',
      cityId: ''
    }
  },
  mounted () {
    let cityObj = new StorageFactory(window.localStorage).get(KEY_SUGAR_CURRENT_CITY)
    this.cityId = cityObj.id
  },
  methods: {
    searchJob () {
      let keywords = this.keywords
      let params = {keywords, offset: 0, pagesize: 50}
      if (this.cityId) {
        params.city_id = this.cityId
      }
      searchJob(params)
        .then(res => res.data && res.data.payload)
        .then(payload => {
          this.jobList = payload
        })
    },
    backTo () {
      this.$router.push('/')
    }
  }
}
</script>


