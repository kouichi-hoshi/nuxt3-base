<template>
  <footer class="mdl-footer container mx-auto py-24">
    <div v-if="checkSlot('logo')" class="mdl-footer__logo mr-2">
      <slot name="logo" />
    </div>
    <div v-if="checkSlot('title')" class="mdl-footer__title">
      <slot name="title" />
    </div>
    <div v-if="checkSlot('text')" class="mdl-footer__text mr-2">
      <slot name="text" />
    </div>
    <div v-if="checkSlot('navigation')" class="mdl-footer__navigation flex-1">
      <slot name="navigation" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MdlFooter',
  props: {
    footerSlot: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkSlot(item) {
      if (this.footerSlot[item] === true) {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mdl-footer {
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
