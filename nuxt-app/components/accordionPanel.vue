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
  // item.classList.toggle('is-open')
  prevItem.classList.toggle('is-active')
}

/**
 * アニメーションの時間とイージング
 */
const animTiming = {
  duration: 400,
  easing: 'ease-out'
}

/**
 * アコーディオンを閉じるときのキーフレーム
 */
const closingAnimKeyframes = (content) => [
  {
    height: content.offsetHeight + 'px', // height: "auto"だとうまく計算されないため要素の高さを指定する
    opacity: 1
  },
  {
    height: 0,
    opacity: 0
  }
]

onMounted(() => {
  /**
   * アコーディオンを開くときのキーフレーム
   */
  const content = document.querySelector('.js-content')
  const openingAnimKeyframes = (content) => [
    {
      height: 0,
      opacity: 0
    },
    {
      height: content.offsetHeight + 'px',
      opacity: 1
    }
  ]
  const details = document.querySelector('.js-details')
  const summary = document.querySelector('.js-summary')

  summary.addEventListener('click', (event) => {
    // デフォルトの挙動を無効化
    event.preventDefault()

    // detailsのopen属性を判定
    if (details.open) {
      // アコーディオンを閉じるときの処理
      // ...略

      // アニメーションを実行
      const closingAnim = content.animate(closingAnimKeyframes(content), animTiming)

      closingAnim.onfinish = () => {
        // アニメーションの完了後にopen属性を取り除く
        details.removeAttribute('open')
      }
    } else {
      // アコーディオンを開くときの処理
      // open属性を付与
      details.setAttribute('open', 'true')

      // アニメーションを実行
      const openingAnim = content.animate(openingAnimKeyframes(content), animTiming)

      // ...略
    }
  })
})
</script>

<template>
  <div class="accordion">
    <details v-for="(item, i) in items" :key="i" class="accordion__container js-details">
      <summary :id="`${prefix}-${i}-prev`" class="accordion__title js-summary" @click="accordionBehavior(prefix, i)">
        {{ item.title }}
      </summary>
      <div :id="`${prefix}-${i}`" class="accordion__content js-content">
        <div class="accordion__content-inner">
          {{ item.content }}
        </div>
      </div>
    </details>
  </div>
</template>

<style lang="scss">
@use '../assets/css/global' as g;

//TODO 以下すべてsass化する
.accordion {
  &__container {
  }
  // Safariで表示されるデフォルトの三角形アイコンを消す
  &__title::-webkit-details-marker {
    display: none;
  }
  &__title {
    display: flex;
    // background-color: g.$cDarkBlack;
    border: 1px solid transparent;
    // color: #fff;
    font-size: 1.25rem;
    padding: 0.625em 0.625em 0.625em 2em;
    position: relative;
    cursor: pointer;
    user-select: none;
  }
  &__content {
    overflow: hidden;
  }
  &__content-inner {
    padding: 1rem 0 1rem 1rem;
  }
}

.accordion__title::before,
.accordion__title::after {
  content: '';
  display: block;
  background-color: g.$cDarkBlack;
  background-color: g.$cDarkBlack;
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
  background-color: g.$cLightGray;
}

.accordion__title.is-active::before {
  opacity: 0;
}

.accordion__title.is-active::after {
  transform: rotate(0);
}

// .accordion__content {
//   // border-left: 1px solid transparent;
//   // border-right: 1px solid transparent;
//   // margin: 0 2rem 0 0;
//   // line-height: 0;
//   height: 0;
//   // overflow: hidden;
//   opacity: 0;
//   // transition-duration: 0.3s;
// }

// .accordion__content.is-open {
//   // border: 1px solid g.$cDarkGray;
//   // margin: 1rem 0 1rem 1.5em;
//   line-height: normal; /* numberに書き換える*/
//   height: 100%;
//   opacity: 1;
// }

.accordion__content {
}
.accordion__content.is-open {
}
</style>
