<template>
  <div class="container">
    <div @click="back('/')">返回首页</div>
    <div>当前jobId为： {{ jobId }}</div>
  </div>
</template>
<style lang="scss" scoped>
  .container {
    margin-top: 50px;
    text-align: center;
    height: 200px;
  }
</style>
<script>
export default {
  data () {
    return {
      jobId: 0
    }
  },
  mounted () {
    console.log(this.$router.params, this.$route.params.id)
    this.jobId = this.$route.params.id
  },
  methods: {
    back () {
      this.$router.push('/')
    }
  }
}
</script>


