<script setup>
import backfaceFixed from '../functions/backfaceFixed.js'

const props = defineProps({
  modalStyle: {
    type: String,
    default: 'modal-style'
  },
  innerTagName: {
    type: String,
    default: () => {
      return 'div'
    }
  },
  innerClass: {
    type: String,
    default: () => {
      return 'modal-window__inner--center'
    }
  },
  hbClass: {
    type: String,
    default: () => {
      return 'hamburger-button-style top-2 right-2 md:top-4 md:right-4'
    }
  },
  borderClass: {
    type: String,
    default: () => {
      return ''
    }
  }
})

// モーダルウインドウ
function attachModal() {
  const _body = document.querySelector('body')
  const _modalWindow = document.querySelector('#modalWindow')
  const _btn = document.querySelector('#trigger')
  const _btnOuter = document.querySelector('#trigger-outer')

  _body.classList.toggle('is-scrollLock')

  if (_modalWindow.classList.contains('hidden')) {
    backfaceFixed(true)
    _btn.classList.add('active')
    _btnOuter.classList.add('active')
    _modalWindow.classList.remove('hidden')
  } else {
    backfaceFixed(false)
    _btn.classList.remove('active')
    _btnOuter.classList.remove('active')
    _modalWindow.classList.add('is-fade-out')
    setTimeout(() => {
      _modalWindow.classList.add('hidden')
      _modalWindow.classList.remove('is-fade-out')
    }, 200)
  }
}
</script>

<template>
  <hamburgerButton :class="hbClass" :border-class="borderClass" class="fixed" @click="attachModal()" />
  <div id="modalWindow" class="modal-window is-fade-in hidden text-center" :class="modalStyle">
    <component :is="innerTagName" :class="innerClass">
      <slot></slot>
      <compButton btn remove-default-class :class="'c-button__light mt-12 mx-auto md:mt-24'" @click="attachModal()">
        閉じる
      </compButton>
    </component>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

body.is-scrollLock {
  overflow: hidden;
}

.modal-window {
  @include g.modalWindow();
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  &__inner--center {
    position: fixed;
    inset: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
  }
}

.modal-window.is-fade-in {
  animation: mFadeIn 0.2s linear forwards;
}
.modal-window.is-fade-out {
  animation: mFadeOut 0.2s linear forwards;
}

// prettier-ignore
@keyframes mFadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }

// prettier-ignore
@keyframes mFadeOut { 0% { opacity: 1; } 100% { opacity: 0; } }
</style>
