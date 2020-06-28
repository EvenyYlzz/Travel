<template>
<div>
  <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="../../../../static/recommendimg/xiangjiangyoulun.jpg"/>
      <div class="banner-info">
          <div class="banner-title">邮轮江景(SSSSS景区)
          </div>
          <div class="banner-number">
              <span class="iconfont banner-icon">&#xe62c;
              </span>
              39
          </div>
      </div>
  </div>
  <common-gallary :imgs="imgs" v-show="showGallary" @close="handelGallaryClose"></common-gallary>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['../../../static/recommendimg/xiangjiangyoulun.jpg', '../../../static/recommendimg/ningxianghuitang.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handelGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner
    position :relative
    overflow :hidden
    height :0
    padding-bottom :55%
    .banner-img
        width:100%
    .banner-info
        display :flex
        position :absolute
        left :0
        right:0
        bottom:0
        line-height :.6rem
        color:#fff
        background-image:linear-gradient(top, rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-title
            flex: 1
            font-size: .32rem
            padding :0 .2rem
        .banner-number
            height :.32rem
            padding : 0 .4rem
            line-height :.32rem
            margin-top :.14rem
            border-radius:.2rem
            background :rgba(0,0,0,.8)
            font-size:.24rem
            .banner-icon
                font-size:.24rem
</style>
