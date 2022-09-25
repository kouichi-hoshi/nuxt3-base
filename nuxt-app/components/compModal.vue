<script setup>
//TODO: propsで親コンポーネントからshowModal変数の値を受け取れる仕組みを入れて、親側のボタンから開閉できるオプションを付ける
//TODO: デフォルトのスタイルをremoveするオプションを付ける
const props = defineProps({
  btnClass: {
    type: String,
    default: 'c-modal-btn'
  },
  textOpen: {
    type: String,
    default: 'Open'
  },
  textClose: {
    type: String,
    default: 'Close'
  }
})
let showModal = ref(false)
</script>

<template>
  <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
    <div class="modal__content">
      <slot>content</slot>
      <button :class="btnClass" class="c-modal-btn__close z-10 fixed top-4 right-4" @click="showModal = false">
        {{ textClose }}
      </button>
    </div>
  </vue-final-modal>
  <button :class="btnClass" class="c-modal-btn__open" @click="showModal = true">{{ textOpen }}</button>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

::v-deep(.modal-container) {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep(.modal-content) {
  display: flex;
  flex-direction: column;
}

.c-modal-btn {
  @include g.button();
}
</style>
