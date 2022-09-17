<script setup>
import LinkSamples from '../models/LinkSamples.js'

const postData = {
  title: import.meta.env.VITE_SITE_TITLE,
  subtitle: import.meta.env.VITE_SITE_SUB_TITLE
}
useHead({
  title: postData.title,
  bodyAttrs: {
    class: 'home'
  }
})

definePageMeta({
  layoutTransition: true
})
</script>

<template>
  <NuxtLayout>
    <article>
      <section class="first-view container mx-auto h-screen flex flex-col justify-center">
        <compHeader class="first-view__title animate text-center mb-12">Nuxt3 Base</compHeader>
        <p class="text-center text-2xl font-bold mb-6">Sample Page</p>
        <compButton class="c-button my-2 mx-auto" href="/index-pg-school">プログラミング スクール</compButton>
        <compButton class="c-button my-2 mx-auto" href="/index-cafe">カフェ</compButton>
      </section>
    </article>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
@use '../assets/css/global' as g;

.home {
  .first-view {
    margin-top: -64px;
    @include g.mq-lg {
      margin-top: -72px;
    }
    &__title {
      @include g.logoTypeSet(g.$josefinSans, 800);
    }
  }
  .c-button {
    @include g.button();
  }
}
</style>
