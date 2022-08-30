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
  },
  hbClass: {
    type: String,
    default: () => {
      return 'right-0'
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
  <hamburgerButton @click="attachModal()" :class="hbClass" :border-class="borderClass" class="fixed u-z-index-10000" />
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

<style lang="scss" scoped>
@use '../assets/css/global' as g;

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
  color: g.$cWhite;
  &__inner--center {
    position: fixed;
    inset: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
  }
  .modal-menu {
    border: none;
  }
  .modal-menu + .modal-menu {
    margin-top: 0.5rem;
    @include g.mq-md {
      margin-top: 1rem;
    }
  }
  .modal-menu:last-child {
    display: none;
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
