<script setup>
const props = defineProps({
  items: {
    /**
     *itemsの構造の説明
     * @param {Object} items.title タイトル、名前、見出しなどの短い文字列
     * @param {Object} items.text 説明文
     * @param {Object} items.fileName ファイル名
     * @param {Object} items.href このアイテムのリンク先URL
     *
     * const studyCoursesItems = {
     *   img: '001.jpg',
     *   title: 'cafe',
     *   text: 'Small plates, salads & sandwiches',
     *   href: '/'
     * }
     */
    type: Object,
    required: true
  },
  innerClass: {
    type: String,
    default: ''
  },
  img: {
    // 画像の格納場所のパス
    type: String,
    default: '/images/common/no-image.png' // 画像がない場合に代りに表示するダミー画像
  },
  aspect: {
    type: String,
    default: 'aspect-[3/2]'
  },
  titleTagName: {
    type: String,
    default: () => {
      return 'p'
    }
  },
  titleClass: {
    type: String,
    default: ''
  }
})
const noImage = '/images/common/no-image.png'
</script>

<template>
  <div class="c-card">
    <div v-for="(item, key) in items" :key="key" class="c-card__item" :class="innerClass">
      <a class="c-card__link" :href="item.href">
        <p class="c-card__thumbnail">
          <img class="c-card__img" :class="aspect" :src="item.img ? item.img : noImage" :alt="item.title" />
        </p>
        <component :is="titleTagName" class="c-card__title" :class="titleClass">
          {{ item.title }}
        </component>
        <p class="c-card__text">{{ item.text }}</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

.c-card {
  &__img {
    object-fit: cover;
    width: 100%;
  }
}
</style>
