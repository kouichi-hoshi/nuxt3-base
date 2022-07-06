<template>
  <component
    :is="tagName"
    v-for="(link, key) in links"
    :key="key"
    :class="class"
  >
    <NuxtLink
      :to="link.href"
      :target="checkLinkType(link.href) ? '_self' : '_blank'"
    >
      {{ link.label }}
    </NuxtLink>
  </component>
</template>

<script>
import checkLinkType from '../../../functions/checkLinkType.js'

export default {
  name: 'BaseNavigation',
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
