<template>
  <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page , index) of pages" :key="index">
            <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-img">
                    <img class="icon-img-content" :src="item.imgUrl">
                </div>
                <p class="icon-desc">{{item.name}}</p>
            </div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        loop: false,
        autoplay: false
      },
      icons: [{
        id: '0001',
        imgUrl: '../../../../static/iconimg/1.png',
        name: '景点门票'
      },
      {
        id: '0002',
        imgUrl: '../../../../static/iconimg/2.png',
        name: '一日游'
      },
      {
        id: '0003',
        imgUrl: '../../../../static/iconimg/3.png',
        name: '动植物园'
      },
      {
        id: '0004',
        imgUrl: '../../../../static/iconimg/4.png',
        name: '天门山公园'
      },
      {
        id: '0005',
        imgUrl: '../../../../static/iconimg/5.png',
        name: '张家界公园'
      },
      {
        id: '0006',
        imgUrl: '../../../../static/iconimg/6.png',
        name: '必看演出'
      },
      {
        id: '0007',
        imgUrl: '../../../../static/iconimg/7.png',
        name: '红石林'
      },
      {
        id: '0008',
        imgUrl: '../../../../static/iconimg/8.png',
        name: '凤凰古城'
      },
      {
        id: '0009',
        imgUrl: '../../../../static/iconimg/9.png',
        name: '温泉滑雪'
      },
      {
        id: '0010',
        imgUrl: '../../../../static/iconimg/10.png',
        name: '玻璃桥'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
  .icons >>> .swiper-content
    height :0
    padding-bottom :50%
  .icons
    margin-top:.1rem
    .icon
      position  :relative
      float :left
      width:25%
      padding-bottom :25%
      height :0px
      .icon-img
        position  :absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        box-sizing:border-box
        padding :.1rem
        .icon-img-content
          height :100%
          display :block
          margin :0 auto
      .icon-desc
        position  :absolute
        left:0
        right:0
        bottom:0
        height :.44rem
        line-height :.44rem
        text-align:center
        color:$darkTextColor
        ellipsis()
</style>
