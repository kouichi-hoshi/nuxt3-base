<template>
  <NuxtLayout>
    <article class="main">test.vue テンプレート</article>
  </NuxtLayout>
</template>

<script>
export default {
  name: "testPage",
  data: () => ({
    title: "Test",
  }),
  head() {
    return {
      title: this.title,
    };
  },
};
</script>
