<script setup>
import checkLinkType from '../../../functions/checkLinkType.js'
import { getFilePath } from '../../../functions/helper.js'

const props = defineProps({
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
})
</script>

<template>
  <component :is="tagName" v-for="(link, key) in links" :key="key" class="menu" :class="link.class">
    <NuxtLink :to="link.href" :target="checkLinkType(link.href) ? '_self' : '_blank'">
      <template v-if="!link.svgIcon">
        {{ link.label }}
      </template>
      <template v-else-if="link.svgIcon">
        <!-- TODO: CSS背景SVG画像で置き換えるように仕様変更  -->
        <svg class="svg-icon" width="48" height="48" viewBox="0 0 48 48">
          <use :href="getFilePath('/images/common/icon/', link.svgIcon) + '#symbol'" />
        </svg>
      </template>
    </NuxtLink>
  </component>
</template>

<style lang="scss">
@use '/assets/css/variables.scss';
@use '/assets/css/mixin.scss';

.svg-icon {
  fill: transparent;
  stroke-width: 2px;
  stroke: currentColor;
}

.l-header {
  &__menu {
    .menu + .menu {
      margin-left: 2rem;
    }
  }
}

.l-footer {
  &__menu {
    .menu {
      a {
        display: block;
        padding: 8px 4px;
        @include mixin.mq-lg {
          padding: 0;
        }
      }
    }
    .menu + .menu {
      border-top: solid map-get(variables.$theme-base-colors, 'cLightGray') 1px;
      @include mixin.mq-lg {
        border: none;
        margin-left: 2rem;
      }
    }
  }
}
</style>
