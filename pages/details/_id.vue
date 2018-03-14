<template>
  <div class="container">
    <DetailHeader
      title="兼聘兼职"
      :hasSearch="true"
      :on-back-button-click="back"
    ></DetailHeader>
    <div class="detail-title">
      <p class="title" v-text="payload.title"></p>
      <p class="salary"><span class="num" v-text="payload.currency"></span><span v-text="payload.currency_unit"></span></p>
      <div class="label">
        <div class="label-item" v-text="payload.jiexi_type"></div>
        <div class="label-item" v-text="payload.jianpin_person"></div>
        <div class="clear"></div>
      </div>
      <span v-if="payload.tag"><img class="hot" src="//assets.qkcdn.com/images/302d958266ec83b5f0762e3f443400d6.png"></span>
    </div>

    <div class="detail-detail">
      <div class="title">职位描述</div>
      <div class="description" v-text="payload.jianpin_detail"></div>
      <div class="btn-more" @click="moreDetail"><span v-text="is_more?'收起': '展开'"></span><img class="btn-more-img" :src="is_more?'//assets.qkcdn.com/images/396f6c3c0fd033f6be32cc660001d007.png': '//assets.qkcdn.com/images/949066b0ae6761f707d74a6c45b0e014.png'"></div>
      <div class="clear"></div>
      <div class="income">
        <div class="title">薪资福利</div>
        <div class="content" v-text="payload.welfare"></div>
      </div>
    </div>

    <div class="detail-more" v-if="is_more">
      <div class="detail-time">
        <div class="title">工作时间</div>
        <div class="content" v-text="payload.work_time"></div>
      </div>
      <div class="detail-add">
        <div class="title">工作地点</div>
        <div class="content" v-text="payload.work_adress"></div>
      </div>
    </div>

    <div class="detail-more detail-co" v-if="is_more">
      <span class="name-title">公司名称</span>
      <span class="name" v-text="payload.company"></span>
    </div>

    <div class="btn-commit">我要报名</div>
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

  export default {
    components: {
      DetailHeader
    },

    data () {
      return {
        jobId: 0,
        is_more: false,
        payload: {
          'id': 1,
          'title': '标题',
          'city_name': '城市名',
          'tag': '标签',
          'jianpin_type': '招聘方式：1：长期招聘，2：指定时间',
          'jianpin_starttime': '招聘开始时间',
          'jianpin_endtime': '招聘结束时间',
          'currency': '50',
          'currency_unit': '元/小时',
          'jiexi_type': '日结',
          'jianpin_person': '9人',
          'jianpin_detail': '职位描述',
          'welfare': '每天结算，50/小时',
          'work_time': '不限时间地点，随时可做',
          'work_adress': '全国－不限',
          'company': '方龙',
          'jump_url': '跳转的url',
          'jump_type': '跳转方式：1：URL，2：wechat'
        }
      }
    },
    mounted () {
      this.jobId = this.$route.params.id
    },
    methods: {
      moreDetail () {
        this.is_more = !this.is_more
      },
      back () {
        this.$router.push('/')
      }
    }
  }
</script>


