<script setup>
import checkLinkType from '../functions/checkLinkType.js'

const props = defineProps({
  links: {
    type: Array,
    required: true
  },
  outerTagName: {
    type: String,
    default: () => {
      return 'ul'
    }
  },

  innerTagName: {
    type: String,
    default: () => {
      return 'li'
    }
  },
  outerClass: {
    type: String,
    default: () => {
      return ''
    }
  },
  innerClass: {
    type: String,
    default: () => {
      return ''
    }
  },
  nLink: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <component :is="outerTagName" class="c-navigation" :class="outerClass">
    <component :is="innerTagName" v-for="(link, key) in links" :key="key" class="c-navigation-menu" :class="innerClass">
      <template v-if="nLink === true">
        <NuxtLink :to="link.href" :target="checkLinkType(link.href) ? '_self' : '_blank'">{{ link.label }}</NuxtLink>
      </template>
      <template v-else>
        <a :href="link.href" :target="checkLinkType(link.href) ? '_self' : '_blank'">{{ link.label }}</a>
      </template>
    </component>
  </component>
</template>

<style lang="scss">
@use '../assets/css/global' as g;

.c-navigation {
  &.modal-window &-menu + &-menu {
    margin-top: 1rem;
  }

  &.header &-menu {
    & > a {
      display: block;
      padding: 0.5rem;
    }
  }

  &.header &-menu + &-menu {
    margin-left: 0.5rem;
  }

  &.footer {
    @include g.mq-lg {
      display: flex;
    }
  }

  &.footer &-menu {
    & > a {
      display: block;
      padding: 1rem 0;
      @include g.mq-lg {
        margin-left: 1.4rem;
      }
    }
    &:first-child {
      margin-left: 0;
    }
  }

  &.footer &-menu + &-menu {
    border-top: 1px solid #fff;
    @include g.mq-lg {
      border: none;
    }
  }
}
</style>
