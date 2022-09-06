<script setup>
const props = defineProps({
  //パネルを開く対象に付与するidの接頭辞として使う（index番号と動的に組み合わせる）
  //アコーディオンパネルを複数使う場合を想定し、それぞれ異なるprefixを付けてパネルが一意であることを担保する
  prefix: {
    type: String,
    required: true
  },
  items: {
    /**
     *itemsの構造の説明
     * @param {Object} items.title タイトル、名前、見出しなどの短い文字列
     * @param {Object} items.text 説明文
     * @param {Object} items.fileName ファイル名
     * @param {Object} items.href このアイテムのリンク先URL
     *
     * const qaItems = {
     *   title: '質問',
     *   content: '答え',
     * }
     */
    type: Array,
    required: true
  }
})

function accordionBehavior(prefix, i) {
  const item = document.getElementById(`${prefix}-${i}`)
  const prevItem = document.getElementById(`${prefix}-${i}-prev`)
  item.classList.toggle('is-open')
  prevItem.classList.toggle('is-active')
}
</script>

<template>
  <div class="accordion">
    <dl v-for="(item, i) in items" :key="i" class="accordion__container">
      <dt :id="`${prefix}-${i}-prev`" class="accordion__title" @click="accordionBehavior(prefix, i)">
        {{ item.title }}
      </dt>
      <dd :id="`${prefix}-${i}`" class="accordion__content">{{ item.content }}</dd>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

//TODO 以下すべてsass化する
.accordion {
  &__container {
  }
  &__title {
    background-color: g.$cDarkBlack;
    border: 1px solid transparent;
    color: #fff;
    font-size: 1.25rem;
    padding: 0.625em 0.625em 0.625em 2em;
    position: relative;
    cursor: pointer;
    user-select: none;
  }
}

.accordion__title::before,
.accordion__title::after {
  content: '';
  display: block;
  background-color: #fff;
  position: absolute;
  top: 50%;
  width: 15px;
  height: 2px;
  right: 25px;
}

.accordion__title::after {
  transform: rotate(90deg);
  transition-duration: 0.3s;
}

.accordion__title:hover,
.accordion__title:active,
.accordion__title.is-active {
  background-color: g.$cDarkGray;
}

.accordion__title.is-active::before {
  opacity: 0;
}

.accordion__title.is-active::after {
  transform: rotate(0);
}

.accordion__content {
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
  padding: 0 1.5em;
  line-height: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
  transition-duration: 0.3s;
}

.accordion__content.is-open {
  border: 1px solid g.$cDarkGray;
  padding: 0.625em 1.5em;
  line-height: normal; /* numberに書き換える*/
  height: auto;
  opacity: 1;
}
</style>
