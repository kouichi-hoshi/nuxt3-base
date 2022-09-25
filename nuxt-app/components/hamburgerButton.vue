<template>
  <component :is="tagName" :id="btnId + '-outer'" class="hamburger-button" :class="{ active: hamburgerActive }">
    <svg
      :id="btnId"
      viewBox="0 0 48 48"
      width="48"
      height="48"
      class="border-outer"
      :class="{ active: hamburgerActive }"
      @click="hamburger()"
    >
      <line class="border border1" :class="borderClass" x1="10" y1="12" x2="38" y2="12" />
      <line class="border border2" :class="borderClass" x1="10" y1="24" x2="38" y2="24" />
      <line class="border border3" :class="borderClass" x1="10" y1="36" x2="38" y2="36" />
    </svg>
  </component>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      default: () => {
        return 'div'
      }
    },
    checkHamburger: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    btnId: {
      type: String,
      default: () => {
        return 'trigger'
      }
    },
    borderClass: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data: () => ({
    hamburgerActive: false
  }),
  watch: {
    checkHamburger(value) {
      this.hamburgerActive = value
    }
  },
  methods: {
    hamburger() {
      if (this.hamburgerActive === true) {
        this.hamburgerActive = false
      } else {
        this.hamburgerActive = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

.hamburger-button {
  z-index: 999;
  width: 48px;
  height: 48px;

  .border-outer {
    stroke: currentColor;
    cursor: pointer;

    .border {
      transition: 200ms all ease;
      transform-origin: 26px 24px;
    }
    &.active {
      .border1 {
        transform: translate(-10px, 10px) rotate(45deg);
      }
      .border2 {
        opacity: 0;
      }
      .border3 {
        transform: translate(-10px, -10px) rotate(-45deg);
      }
    }
  }
}
</style>
