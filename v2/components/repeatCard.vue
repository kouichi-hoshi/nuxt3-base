<script setup>
const props = defineProps({
  observe: {
    // 親コンポーネントからintersectionOAへ observe の文字列（ture）を渡す → intersectionOAでscrollメソッドが実行される
    type: Boolean,
    default: () => {
      return false
    }
  },
  items: {
    /**
     *itemsの構造の説明
     * @param {Object} items.title タイトル、名前、見出しなどの短い文字列
     * @param {Object} items.text 説明文
     * @param {Object} items.fileName ファイル名
     * @param {Object} items.href このアイテムのリンク先URL
     */
    type: Object,
    required: true
  },
  imgPath: {
    // 画像の格納場所のパス
    type: String,
    required: true
  },
  noImage: {
    // 画像がない場合に代りに表示するダミー画像のパス
    type: String,
    default: '/images/common/no-image.png'
  },
  outerClass: {
    type: String,
    default: ''
  },
  innerClass: {
    type: String,
    default: ''
  },
  aspect: {
    type: String,
    default: 'aspect-[3/2]'
  },
  titleTagName: {
    type: String,
    default: () => {
      return 'h4'
    }
  },
  titleClass: {
    type: String,
    default: ''
  },
  view: {
    type: String,
    default: 'image',
    validator: function (value) {
      // プロパティの値は、必ずいずれかの文字列でなければならない
      return ['text', 'image'].indexOf(value) !== -1
    }
  }
})
</script>

<template>
  <!-- 画像と文字のテンプレート -->
  <div v-if="view === 'image'" v-for="(item, key) in items" :key="key" class="repeat-card-image" :class="outerClass">
    <intersectionOA :class="innerClass" :observe="observe">
      <a :href="item.href">
        <p>
          <img
            :src="item.fileName ? imgPath + item.fileName : noImage"
            :alt="item.title"
            class="object-cover"
            :class="aspect"
          />
        </p>
        <component :is="titleTagName" :class="titleClass">
          {{ item.title }}
        </component>
        <p>{{ item.text }}</p>
      </a>
    </intersectionOA>
  </div>
  <!-- 文字のテンプレート -->
  <div v-if="view === 'text'" v-for="(item, key) in items" :key="key" class="repeat-card-text">
    <intersectionOA :class="innerClass" :observe="observe">
      <component :is="titleTagName" :class="titleClass" class="repeat-card-text__title">
        {{ item.title }}
      </component>
      <slot />
      <p class="repeat-card-text__text">{{ item.text }}</p>
    </intersectionOA>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

.scroll-in {
  @include g.scrollTransform();
}
</style>
