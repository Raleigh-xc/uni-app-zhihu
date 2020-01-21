<template>
  <view class="container" @tap="handleClick">
    <view class="title">{{index}}.{{title}}</view>
    <view class="author">
      <image class="avatar" :src="author.avatar" mode="aspectFill"></image>
      <view class="name">{{author.name}}</view>
    </view>
    <view class="content">{{content}}</view>
    <view class="footer">
      <view class="comment">{{praise}} 赞同 · {{comment}} 评论</view>
      <text class="iconfont icon-all"></text>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      index: Number
    },
    data() {
      return {
        id: 10086,
        title: '开发程序员是怎么根据一张ui设计图做成app的？是把设计图转换成代码，然后再添加进去吗？',
        author: {
          avatar: 'https://pic4.zhimg.com/40960984d901b351ceced98037d4a19b_xl.jpg',
          name: '前端实习生'
        },
        content: '这个问题问得好，感觉是这样，开局一张图，后面都靠想，就能把 UI 设计做的效果图转换成为代码。总体来说，程序员同学们还是非常厉害的，能够把把前端页面从一张静态的图片，转化为一个活生生、有内容又有灵魂的界面。',
        praise: 678,
        comment: 88,
      };
    },
    methods: {
      handleClick() {
        uni.navigateTo({
          url: `../topic-detail/topic-detail?topicId=${this.index}`,
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background: #FFFFFF;
    padding: 20rpx $sidePadding;

    .title {
      font-size: 36rpx;
      line-height: 48rpx;
      color: #1a1a1a;
      @include ellipsis(2);
    }

    .author {
      display: flex;
      align-items: center;
      margin-top: 10rpx;

      .avatar {
        height: 40rpx;
        width: 40rpx;
        border-radius: 50%;
        margin-right: 10rpx;
      }

      .name {
        font-size: 24rpx;
        color: #646464;
      }
    }

    .content {
      margin-top: 10rpx;
      font-size: 28rpx;
      color: #444;
      line-height: 44rpx;
      @include ellipsis(2);
    }

    .footer {
      margin-top: 5rpx;
      font-size: 24rpx;
      color: #999999;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
