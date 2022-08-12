<template>
  <div class="home-icon" :class="class">
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="10 10 28 28">
      <path
        d="M24,13.06a1.52,1.52,0,0,0-.91.37L13.66,21A1.74,1.74,0,0,0,13,22.35V33.18a1.76,1.76,0,0,0,1.76,1.76h3.58a1.76,1.76,0,0,0,1.77-1.76V30.92a1.76,1.76,0,0,1,1.76-1.76h4.26a1.76,1.76,0,0,1,1.76,1.76v2.26a1.76,1.76,0,0,0,1.77,1.76h3.58A1.76,1.76,0,0,0,35,33.18V22.35A1.74,1.74,0,0,0,34.34,21l-9.43-7.55A1.57,1.57,0,0,0,24,13.06Z"
      />
    </svg>
    home
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
@use '../assets/css/variables.scss';
.home-icon {
  fill: none;
  stroke: map-get(variables.$theme-base-colors, 'cBlack');
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
  &.small {
    transform: scale(85%);
    svg {
      margin: 0 auto;
    }
  }
}
</style>
