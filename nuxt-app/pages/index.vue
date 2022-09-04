<script setup>
import linkData from '../models/linkData.js'

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
        <compHeader class="first-view__title animate">Nuxt3 Base</compHeader>
        <ul class="mx-auto">
          <compNavigation outer-class="flex items-center" innerClass="mx-4" :links="linkData" />
        </ul>
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
}
</style>
