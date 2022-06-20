<template>
  <div>
    <NuxtPage />
    <h1>index</h1>
    <ContentIndex />
  </div>
</template>

<script>
import ContentIndex from '~/components/ContentIndex.vue'

export default {
  name: 'indexPage',
  components: {
    ContentIndex
  },
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
