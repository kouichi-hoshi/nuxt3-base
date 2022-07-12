<template>
  <header class="mdl-header">
    <div v-if="checkSlot('logo')" class="mdl-header__logo">
      <slot name="logo" />
    </div>
    <div v-if="checkSlot('title')" class="mdl-header__title">
      <slot name="title" />
    </div>
    <div v-if="checkSlot('text')" class="mdl-header__text">
      <slot name="text" />
    </div>
    <div v-if="checkSlot('navigation')" class="mdl-header__navigation">
      <slot name="navigation" />
    </div>
    <div class="mdl-header__hamburger-button">
      <slot name="hamburgerButton" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    headerSlot: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkSlot(item) {
      if (this.headerSlot[item] === true) {
        return true
      }
    }
  }
}
</script>

<style lang="scss">
@use '../assets/css/variables.scss';

.mdl-header__hamburger-button {
  .btn-trigger {
    transform-origin: right top;
    transform: scale(0.5);
    background: transparent;
    span {
      background: map-get(variables.$theme-cafe-colors, 'accentColor');
    }
  }
}
</style>
