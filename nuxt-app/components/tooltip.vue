<script setup>
const props = defineProps({
  tagName: {
    type: String,
    default: 'div'
  }
})
</script>

<template>
  <component :is="tagName" class="tooltip">
    <slot name="label">label</slot>
    <span class="tooltip-text"><slot name="content">content</slot></span>
  </component>
</template>

<style lang="scss">
/* カーソルを重ねる要素 */
.tooltip {
  position: relative; // ツールチップの位置の基準に
  cursor: pointer; // カーソルを当てたときにポインターに

  /* ツールチップのテキスト */
  &-text {
    text-align: left;
    z-index: 1;
    width: 80%;
    opacity: 0; //  はじめは隠しておく
    visibility: hidden; //  はじめは隠しておく
    position: absolute; //  絶対配置
    left: 50%; //  親に対して中央配置
    transform: translateX(-50%); //  親に対して中央配置
    top: 3rem; //  親要素下からの位置
    display: inline-block;
    padding: 5px; // 余白
    // white-space: nowrap; // テキストを折り返さない
    font-size: 0.8rem; // フォントサイズ
    line-height: 1.3; // 行間
    background: #333; // 背景色
    color: #fff; // 文字色
    border-radius: 3px; // 角丸
    transition: 0.3s ease-in; // アニメーション
  }
  /* ホバー時にツールチップの非表示を解除 */
  &:hover &-text {
    opacity: 1;
    visibility: visible;
  }
}
</style>
