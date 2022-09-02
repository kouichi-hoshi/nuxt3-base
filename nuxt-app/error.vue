<script setup>
const error = useError()
const postData = {
  title: 'error'
}

useHead({
  title: postData.title,
  bodyAttrs: {
    class: 'error'
  }
})
</script>

<template>
  <NuxtLayout>
    <article class="container mx-auto mb-40">
      <header class="mb-8 py-8 text-center">
        <compHeader class="text-5xl"> {{ postData.title }} </compHeader>
        <p>大変ご迷惑おかけします。</p>
        <p>お探しのページは現在表示できません。</p>
        <p class="mt-12"><a href="/">Topへもどる</a></p>
      </header>
      <ul class="text-right">
        <li>{{ error.statusCode }}</li>
        <li>{{ error.message }}</li>
      </ul>
    </article>
  </NuxtLayout>
</template>
