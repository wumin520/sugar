<template>
  <div class="container">
    <DetailHeader
      title="兼聘兼职"
      :hasSearch="true"
      :on-back-button-click="back"
    ></DetailHeader>
    <div class="detail-title">
      <p class="title" v-text="data.title"></p>
      <p class="salary"><span class="num" v-text="data.currency"></span><span v-text="data.currency_unit"></span></p>
      <div class="label" v-if="data">
        <div class="label-item" v-text="data.jiexi_type"></div>
        <div class="label-item" v-text="data.jianpin_person"></div>
        <div class="clear"></div>
      </div>
      <span v-if="data.tag"><img class="hot" src="//assets.qkcdn.com/images/302d958266ec83b5f0762e3f443400d6.png"></span>
    </div>

    <div class="detail-detail">
      <div class="title">职位描述</div>
      <div class="description" :class="{'hide': !is_more}" v-text="data.jianpin_detail"></div>
      <div class="btn-more" @click="moreDetail"><span v-text="is_more?'收起': '展开'"></span><img class="btn-more-img" :src="is_more?'//assets.qkcdn.com/images/396f6c3c0fd033f6be32cc660001d007.png': '//assets.qkcdn.com/images/949066b0ae6761f707d74a6c45b0e014.png'"></div>
      <div class="clear"></div>
      <div class="income">
        <div class="title">薪资福利</div>
        <div class="content" v-text="data.welfare"></div>
      </div>
    </div>

    <div class="detail-more">
      <div class="detail-time">
        <div class="title">工作时间</div>
        <div class="content" v-text="data.work_time"></div>
      </div>
      <div class="detail-add">
        <div class="title">工作地点</div>
        <div class="content" v-text="data.work_adress"></div>
      </div>
    </div>

    <div class="detail-more detail-co">
      <span class="name-title">公司名称</span>
      <span class="name" v-text="data.company"></span>
    </div>

    <div class="btn-commit" @click="btnCommit()">我要报名</div>
  </div>
</template>
<style lang="scss" scoped>
  .container {
    min-height: 100vh;
    background: #f5f5f5;

    .clear {
      clear: both;
    }

    .detail-title {
      position: relative;
      padding: 18px 14px 20px 16px;
      background: #FFFFFF;
      margin-bottom: 10px;

      .title {
        font-family: PingFangSC-Semibold;
        font-size: 18px;
        color: #444749;
        width: 100%;
        margin-bottom: 17px;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .salary {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #6ED9CA;
        margin-bottom: 8px;

        .num {
          font-family: DINMittelschriftStd;
          font-size: 26px;
        }
      }

      .label {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #444749;

        .label-item {
          float: left;
          height: 8px;
          line-height: 8px;
          border-right: solid 1px #B5B5B5;
          padding-left: 5px;
          padding-right: 5px;

          &:nth-child(1) {
            padding-left: 0;
          }
          &:nth-last-child(2) {
            border-right: none;
          }
        }
      }

      .hot {
        position: absolute;
        width: 40px;
        height: 39px;
        right: 19px;
        bottom: 21px;
      }
    }

    .detail-detail {
      position: relative;
      padding: 20px 16px 0 20px;
      background: #FFFFFF;

      .title {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #444749;
        margin-bottom: 10px;
      }

      .description {
        position: relative;
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #B5B5B5;
        margin-bottom: 14px;
        overflow: hidden;

        &.hide {
          height: 72px;
        }
      }

      .btn-more {
        position: relative;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #444749;
        text-align: center;
        line-height: 12px;
        display: inline-block;
        float: right;
        margin-bottom: 14px;

        span {
          margin-right: 6px;
        }

        .btn-more-img {
          width: 12px;
        }
      }

      .income {
        position: relative;
        padding: 17px 0 24px;
        border-top: solid 1px #eeeeee;

        .content {
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #B5B5B5;
        }
      }
    }

    .detail-more {
      position: relative;
      padding: 0 20px;
      background: #fff;
      margin-top: 10px;

      .title {
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #444749;
        margin-bottom: 10px;
      }

      .content {
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #B5B5B5;
      }

      .detail-time {
        position: relative;
        padding: 17px 0 24px;
        border-bottom: solid 1px #eeeeee;
      }

      .detail-add {
        position: relative;
        padding: 17px 0 24px;
      }

      .name-title {
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #444749;
        margin-right: 10px;
      }

      .name {
        font-family: PingFangSC-Regular;
        font-size: 13px;
        color: #B5B5B5;
      }
    }

    .detail-co {
      padding: 10px 20px;
      margin-bottom: 15px;
    }

    .btn-commit {
      position: relative;
      width: 100%;
      height: 52px;
      line-height: 52px;
      font-family: PingFangSC-Semibold;
      font-size: 16px;
      color: #FFFFFF;
      text-align: center;
      background: #6ED9CA;
      margin-top: 5px;
    }
  }
</style>
<script>
  import DetailHeader from '~/components/DetailHeader'
  import {queryJobDetail} from '~/services/login'
  import storage from '~/services/storage'

  export default {
    components: {
      DetailHeader
    },

    data () {
      return {
        jobId: 0,
        is_more: false,
        data: ''
      }
    },
    mounted () {
      this.jobId = this.$route.params.id
      this.jobDetail()
    },
    methods: {
      // API
      jobDetail () {
        queryJobDetail(this.jobId)
          .then(response => {
            return response.data
          })
          .then(data => {
            this.data = data.payload
            if (this.data.jump_type === 2) {
              storage.setStorage('DETAIL_WECHAT', this.data.jump_url)
              storage.setStorage('DETAIL_ID', this.jobId)
            }
          })
          .catch(err => {
            if (err.err_msg) {
              alert(err.err_msg)
            }
          })
      },

      // 展开 收起
      moreDetail () {
        this.is_more = !this.is_more
      },

      btnCommit () {
        if (this.data) {
          if (this.data.jump_type === 1) {
            window.location.herf = this.data.jump_url
          }
          if (this.data.jump_type === 2) {
            this.$router.push('/contact')
          }
        }
      },

      back () {
        this.$router.go(-1)
      }
    }
  }
</script>


