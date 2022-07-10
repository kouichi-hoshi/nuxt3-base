<template>
  <header class="mdl-header flex items-center p-8">
    <div v-if="checkSlot('logo')" class="mdl-header__logo mr-2">
      <slot name="logo" />
    </div>
    <div v-if="checkSlot('title')" class="mdl-header__title mr-4">
      <slot name="title" />
    </div>
    <div v-if="checkSlot('text')" class="mdl-header__text mr-2">
      <slot name="text" />
    </div>
    <div v-if="checkSlot('navigation')" class="mdl-header__navigation flex-1">
      <slot name="navigation" />
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
