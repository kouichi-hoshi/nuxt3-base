<template>
  <div class="logo-mark" :class="class">
    <a href="/">
      <img src="/images/cafe-page/cafe-logo.svg" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'LogoMark',
  props: {
    class: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-mark {
  &.logo-w-40 {
    width: 40px;
  }
  &.logo-w-50 {
    width: 50px;
  }
}
</style>
