<template>
<div class="wrapper">
 <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img
            class="swiper-img"
            :src="item.imgUrl"
        />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '../../../../static/img/1.jpg'
      },
      {
        id: '0002',
        imgUrl: '../../../../static/img/2.jpg'
      },
      {
        id: '0003',
        imgUrl: '../../../../static/img/3.jpg'
      },
      {
        id: '0004',
        imgUrl: '../../../../static/img/4.jpg'
      },
      {
        id: '0005',
        imgUrl: '../../../../static/img/5.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active
    background : white
.wrapper
    width:100%
    height:0
    overflow :hidden
    padding-bottom :31.25%
    .swiper-img
        width:375px
        height:117px
</style>
