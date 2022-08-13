<template>
  <component :is="tagName" v-for="(link, key) in links" :key="key" :class="class" class="menu">
    <NuxtLink :to="link.href" :target="checkLinkType(link.href) ? '_self' : '_blank'">
      {{ link.label }}
    </NuxtLink>
  </component>
</template>

<script>
import checkLinkType from '../../../functions/checkLinkType.js'

export default {
  name: 'MdlNavigation',
  props: {
    links: {
      type: Array,
      required: true
    },
    tagName: {
      type: String,
      default: () => {
        return 'li'
      }
    },
    class: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      checkLinkType
    }
  }
}
</script>

<style lang="scss">
.menu {
  &:first-child {
    margin-left: 0;
  }
}
</style>
