<template>
  <footer class="l-base-footer container mx-auto py-24">
    <div v-if="checkSlot('logo')" class="l-base-footer__logo mr-2">
      <slot name="logo" />
    </div>
    <div v-if="checkSlot('title')" class="l-base-footer__title">
      <slot name="title" />
    </div>
    <div v-if="checkSlot('text')" class="l-base-footer__text mr-2">
      <slot name="text" />
    </div>
    <div
      v-if="checkSlot('navigation')"
      class="l-base-footer__navigation flex-1"
    >
      <slot name="navigation" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',
  props: {
    baseFooterSlot: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkSlot(item) {
      if (this.baseFooterSlot[item] === true) {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.l-base-footer {
  display: grid;
  grid-template-columns: auto auto 1fr;
  grid-template-rows: auto auto;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'logo title navigation'
    'logo text navigation';

  &__logo {
    grid-area: logo;
    display: grid;
  }

  &__title {
    grid-area: title;
  }

  &__text {
    grid-area: text;
  }

  &__navigation {
    grid-area: navigation;
    display: grid;
    align-items: center;
  }
}
</style>
