<template>
  <view class="container">
    <image class="img" src="https://pic3.zhimg.com/bd21f286e6aa5e210b60e2e257ce890b_t.jpg" mode="aspectFill"></image>
    <view class="content">
      <view class="event">前端外刊评论 新增了 3篇文章</view>
      <view class="title">云凤蝶自由画布之道：分层模型云凤蝶自由画布之道：分层模型云凤蝶自由画布之道：分层模型</view>
      <view class="time">15天前</view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    background: #fff;
    padding: 20rpx $sidePadding 0;
    width: 100%;
    box-sizing: border-box;

    .img {
      height: 90rpx;
      width: 90rpx;
      border-radius: 50%;
      border: 1rpx solid #d3d3d3;
      margin-right: 20rpx;
      flex: none;
    }

    .content {
      border-bottom: 1rpx solid #d3d3d3;
      padding-bottom: 20rpx;
      flex: auto;
      width: 0rpx;

      .event {
        font-size: 28rpx;
        line-height: 1;
        color: #818181;
        width: 100%;
        @include ellipsis();
      }

      .title {
        font-size: 32rpx;
        line-height: 1;
        color: #444444;
        margin-top: 20rpx;
        width: 100%;
        @include ellipsis();
      }

      .time {
        font-size: 24rpx;
        line-height: 1;
        color: #c6c6c6;
        margin-top: 20rpx;
      }
    }
  }
</style>
