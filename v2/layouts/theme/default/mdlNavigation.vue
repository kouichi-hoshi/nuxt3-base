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
    <a :href="link.href" :target="checkLinkType(link.href) ? '_self' : '_blank'">
      <template v-if="!link.svgIcon">
        {{ link.label }}
      </template>
      <template v-else-if="link.svgIcon">
        <!-- TODO: CSS背景SVG画像で置き換えるように仕様変更  -->
        <svg class="svg-icon" width="48" height="48" viewBox="0 0 48 48">
          <use :href="getFilePath('/images/common/icon/', link.svgIcon) + '#symbol'" />
        </svg>
      </template>
    </a>
  </component>
</template>

<style lang="scss">
@use '../assets/css/global' as g;

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
        @include g.mq-lg {
          padding: 0;
        }
      }
    }
    .menu + .menu {
      border-top: solid map-get(g.$theme-base-colors, 'cLightGray') 1px;
      @include g.mq-lg {
        border: none;
        margin-left: 2rem;
      }
    }
  }
}
</style>
