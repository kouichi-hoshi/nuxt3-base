<template>
  <NuxtLayout>
    <article class="test">
      <header class="mb-8 py-8">
        <cHeader> Test </cHeader>
      </header>
      <section class="items container mx-auto">
      </section>
    </article>
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
