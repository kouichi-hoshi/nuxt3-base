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
    <article class="container mx-auto">
      <div class="hentry">
        <ContentDoc />
      </div>
    </article>
    <section class="container mx-auto mt-12">
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
  </NuxtLayout>
</template>

<script>
import itemsSample from '../../models/itemsSample.js'
import cHeadline from '../../components/cHeadline.vue'
import repeatCard from '../../components/repeatCard.vue'

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
