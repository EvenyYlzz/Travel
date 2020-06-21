<template>
  <div class="header">
        <router-link to="/">
           <div class="iconfont header-back">&#xe624;</div>
        </router-link>
      城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
        position:relative
        height :$headerHeight
        overflow :hidden
        line-height :$headerHeight
        text-align :center
        color:#fff
        background :$bgColor
        .header-back
            position:absolute
            top:0
            left:0
            width :.64rem
            font-size:.4rem
            text-align :center
            color:#fff
</style>
