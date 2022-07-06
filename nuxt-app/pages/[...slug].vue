<script setup>
import dayjs from 'dayjs'

// 投稿日をフォーマット
function formatDate(setDate) {
  return dayjs(setDate).format('YYYY/MM/DD')
}

// datetime属性をフォーマット
function formatDateTime(setDate) {
  return dayjs(setDate).format('YYYY-MM-DD')
}

const { data } = await useAsyncData('blog', () => queryContent('/').find())
</script>

<template>
  <NuxtLayout>
    <article class="blog container mx-auto">
      <section class="blog-content">
        <ContentDoc />
      </section>
      <section class="mt-12">
        <h2>ブログ一覧</h2>
        <ul>
          <li v-for="(post, key) in data" :key="key" class="flex">
            <a :href="post._path">
              <time :datetime="formatDateTime(post.postDate)">{{
                formatDate(post.postDate)
              }}</time>
              {{ post.title }}
            </a>
          </li>
        </ul>
      </section>
    </article>
  </NuxtLayout>
</template>

<style lang="scss">
.blog {
  &-content h2 {
    font-size: 3rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
  h3 {
    margin-top: 3rem;
    font-size: 2rem;
  }
  h4 {
    margin-top: 1.6rem;
    font-size: 1.6rem;
  }
  p,
  ul {
    margin-bottom: 1rem;
  }
  hr {
    margin: 5rem 0;
  }
  table {
    border-collapse: collapse;
    th,
    td {
      border: solid gray 1px;
      padding: 0.5rem 1rem;
      text-align: center;
    }
  }
}
</style>

<script>
import itemsSample from '../models/itemsSample.js'
import cHeadline from '../components/cHeadline.vue'
import repeatCard from '../components/repeatCard.vue'

export default {
  setup() {
    const items = itemsSample // Itemセクションで表示するデータ
    const itemsPath = '/images/sample/' //Itemセクションで表示する画像のパス

    return {
      items,
      itemsPath
    }
  },
  components: { repeatCard, cHeadline }
}
</script>
