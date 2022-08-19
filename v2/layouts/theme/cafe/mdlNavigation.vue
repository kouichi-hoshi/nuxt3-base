<template>
  <component :is="tagName" v-for="(link, key) in links" :key="key" :class="class" class="nav-menu">
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
@use '../assets/css/variables.scss';
@use '../assets/css/mixin.scss';

.nav-menu {
  border-top: 1px solid #fff;
  @include mixin.mq-lg {
    border: none;
  }
  & > a {
    display: block;
    padding: 1rem 0;
    @include mixin.mq-lg {
      margin-left: 1.4rem;
    }
  }
  &:first-child {
    margin-left: 0;
  }
}
</style>
