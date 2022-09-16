<script setup>
//TODO: propsで親コンポーネントからshowModal変数の値を受け取れる仕組みを入れて、親側のボタンから開閉できるオプションを付ける
//TODO: デフォルトのスタイルをremoveするオプションを付ける
let showModal = ref(false)
</script>

<template>
  <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
    <div class="modal__content comp-modal">
      <slot>content</slot>
      <button class="modal__close comp-modal__btn-close z-10" @click="showModal = false">close</button>
    </div>
  </vue-final-modal>
  <button class="comp-modal-btn mx-auto my-12" @click="showModal = true">Open modal</button>
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

// TODO: cssはmixin化する
.comp-modal {
  max-width: 300px;
  background: g.$cWhite;
  padding: 2rem;
  &__btn-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: g.$cWhite;
    background: g.$cDarkBlack;
    border-radius: 100vmax;
    display: block;
    padding: 1rem;
  }
}
.comp-modal-btn {
  color: g.$cWhite;
  background: g.$cDarkBlack;
  border-radius: 100vmax;
  display: block;
  width: fit-content;
  padding: 1rem;
}
</style>
