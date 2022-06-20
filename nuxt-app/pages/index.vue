<template>
  <div>
    <NuxtPage />
    <h1>index</h1>
    <ContentIndex />
  </div>
</template>

<script>
export default {
  name: 'indexPage',
  components: {},
  data: () => ({
    title: 'Home',
  }),
  head() {
    return {
      title: this.title,
    }
  },
}
</script>
