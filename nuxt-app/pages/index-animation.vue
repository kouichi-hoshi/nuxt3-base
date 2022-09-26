<script setup>
import LinkSamples from '../models/LinkSamples.js'

const postData = {
  title: 'Animation',
  subtitle: import.meta.env.VITE_SITE_SUB_TITLE
}

useHead({
  title: postData.title,
  bodyAttrs: {
    class: 'animation'
  }
})

definePageMeta({
  layoutTransition: true
})

/**
 * IntersectionObserver
 */
const options = {
  // threshold: [0, 0.25, 0.5, 0.75, 1]
  threshold: [0]
}

/**
 * 検知対象要素を設定
 */
onMounted(() => {
  let targets = ref(document.querySelectorAll('.animate'))
  scroll(targets.value, options)
})

/**
 * 指定した要素の交差を検知させる
 */
function scroll(targets, options) {
  const observer = new IntersectionObserver(doWhenIntersect, options)
  targets.forEach((target) => {
    observer.observe(target)
  })
}

/**
 * 画面にin/outした要素にclassを着脱する
 * 下記のようにCSSを設定する
 * opacity: 0;
 * &.active {
 *  @include g.fadeLift($delay: 0.3s);
 * }
 */
function doWhenIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(...animationType)
      // }
    } else {
      entry.target.classList.remove(...animationType)
    }
  })
}

/**
 * cssanimation.css セレクタ
 * https://cssanimation.io/
 */
const animationTypes = {
  leFadeInTop: ['leFadeInTop', 'sequence'],
  leSkateX: ['leSkateX', 'sequence'],
  leDoorCloseLeft: ['leDoorCloseLeft', 'sequence'],
  lePulseShake: ['lePulseShake', 'sequence'],
  leElevateLeft: ['leElevateLeft', 'sequence'],
  pushReleaseFrom: ['pushReleaseFrom'],
  elevateLeft: ['elevateLeft'],
  moveFromLeft: ['moveFromLeft'],
  open: ['open']
}

// 使用するアニメーションタイプを設定
const animationType = animationTypes.open
</script>

<template>
  <NuxtLayout>
    <article class="container mx-auto">
      <section class="anime01 p-space">
        <compHeader class="mb-12" data-title="アニメーション">Animation</compHeader>
        <h3 class="text-xl -mt-6 mb-2">cssanimation.io</h3>
        <p class="mb-12">IntersectionObserverで検知された要素がアニメーションします。</p>
        <div>
          <ul>
            <div v-for="i in 5" class="text-2xl mb-48" :key="i">
              <li class="animate cssanimation item">
                <span v-for="i in 10" :key="i">D</span>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </article>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

.anime01 {
  .item {
    background: rgba(gray, 0.1);
    padding: 1rem;
    letter-spacing: 0.5rem;
    &.open {
      width: 100%;
    }
  }

  // @for $i from 1 through 10 {
  //   .item__#{$i} {
  //     animation-delay: #{$i * 100}ms;
  //   }
  // }

  @for $i from 1 through 10 {
    .item > span:nth-of-type(#{$i}) {
      animation-delay: #{$i * 10}ms;
    }
  }
}
</style>
