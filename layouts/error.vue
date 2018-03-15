<template>
  <div class="container">
    <div>
      <div style="text-align: center">
        <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48">
          <path
            d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path>
        </svg>
      </div>
      <h1 class="title" v-if="error.statusCode === 404">页面不存在</h1>
      <h1 class="title" v-else>应用发生错误异常</h1>
      <div class="back-home">
        <nuxt-link to="/">返回首页</nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .title {
      font-size: 24px;
      font-size: 1.5rem;
      margin-top: 15px;
      color: #47494e;
      margin-bottom: 8px;
    }
    .back-home {
      text-align: center;
    }
  }
</style>
<script>
  export default {
    props: ['error'],
    layout: 'gray' // 你可以为错误页面指定自定义的布局
  }
</script>
