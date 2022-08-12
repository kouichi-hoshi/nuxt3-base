<script setup>
import backfaceFixed from '../functions/backfaceFixed.js'

const props = defineProps({
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
  }
})

// モーダルウインドウ
function attachModal() {
  const _body = document.querySelector('body')
  const _modalWindow = document.querySelector('#modalWindow')
  const _btn = document.querySelector('#btn07')

  _body.classList.toggle('is-scrollLock')

  if (_modalWindow.classList.contains('hidden')) {
    backfaceFixed(true)
    _btn.classList.add('active')
    _modalWindow.classList.remove('hidden')
  } else {
    backfaceFixed(false)
    _btn.classList.remove('active')
    _modalWindow.classList.add('is-fade-out')
    setTimeout(() => {
      _modalWindow.classList.add('hidden')
      _modalWindow.classList.remove('is-fade-out')
    }, 200)
  }
}
</script>

<template>
  <hamburgerButton @click="attachModal()" class="fixed right-0 u-z-index-10000" />
  <div id="modalWindow" class="modal-window is-fade-in hidden text-center">
    <component :is="innerTagName" :class="innerClass">
      <slot></slot>
      <div class="mx-auto mt-8 w-fit md:mt-16">
        <a href="/">
          <svg class="svg-icon" width="48" height="48" viewBox="0 0 48 48">
            <use href="/images/common/icon/home-icon.svg#symbol" />
          </svg>
        </a>
      </div>

      <cButton @click="attachModal()" :btn="true" label="閉じる" :class="'block mt-6 mx-auto md:mt-12'" />
    </component>
  </div>
</template>

<style lang="scss">
@use '../assets/css/variables.scss';
@use '../assets/css/mixin.scss';

body.is-scrollLock {
  overflow: hidden;
}

.modal-window {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  &__inner--center {
    position: fixed;
    inset: 0;
    margin: auto;
    color: map-get(variables.$theme-base-colors, cWhite);
    width: fit-content;
    height: fit-content;
  }
  .menu + .menu {
    margin-top: 1rem;
    @include mixin.mq-md {
      margin-top: 3rem;
    }
  }
  .menu:last-child {
    display: none;
  }
}

.modal-window.is-fade-in {
  animation: fadeIn 0.2s linear forwards;
}
.modal-window.is-fade-out {
  animation: fadeOut 0.2s linear forwards;
}

// prettier-ignore
@keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }

// prettier-ignore
@keyframes fadeOut { 0% { opacity: 1; } 100% { opacity: 0; } }
</style>
