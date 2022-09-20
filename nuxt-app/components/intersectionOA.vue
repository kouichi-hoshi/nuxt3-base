<template>
  <component :is="tagName" ref="target" :class="[isIntersecting ? 'active' : '']">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'IntersectionObserverAnimation',
  props: {
    tagName: {
      type: String,
      default: () => {
        return 'div'
      }
    },
    observe: {
      // trueの場合 scrollメソッドは実行されない
      type: Boolean,
      default: () => {
        return false
      }
    }
  },
  data: () => ({
    isIntersecting: false,
    options: {
      rootMargin: '-20px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    }
  }),
  mounted() {
    if (!this.observe) {
      const target = this.$refs.target
      this.scroll(target, this.options)
    }
  },
  methods: {
    scroll(target, options) {
      const callBack = (entries) => {
        this.isIntersecting = entries[0].isIntersecting
      }
      const observer = new window.IntersectionObserver(callBack, options)
      observer.observe(target)
    }
  }
}
</script>

<style lang="scss">
.get-active {
  &.active {
    transition-duration: 1s;
    transition-timing-function: ease-in-out;
  }
}

.mask {
  object-fit: cover;
  max-width: 100%;
  &.active {
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
  }
  &.mask-1 {
    clip-path: inset(0 100% 0 0);
  }

  &.mask-1.active {
    clip-path: inset(0 0 0 0);
  }

  &.mask-2 {
    clip-path: inset(0 0 0 100%);
  }

  &.mask-2.active {
    clip-path: inset(0 0 0 0);
  }

  &.mask-3 {
    clip-path: inset(50% 0 50% 0);
  }

  &.mask-3.active {
    clip-path: inset(0 0 0 0);
  }

  &.mask-4 {
    clip-path: circle(0.5% at center);
  }

  &.mask-4.active {
    clip-path: circle(100% at center);
  }

  &.mask-5 {
    clip-path: inset(0 0 100% 0);
  }

  &.mask-5.active {
    clip-path: inset(0 0 0 0);
  }
}
</style>
