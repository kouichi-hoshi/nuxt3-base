<template>
  <div>
    <h1>index</h1>
  </div>
</template>

<script>
export default {
  name: 'indexPage',
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
