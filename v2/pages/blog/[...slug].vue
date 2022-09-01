<script setup>
import dayjs from 'dayjs'

const postData = {
  title: 'Blog'
}
useHead({
  title: postData.title,
  bodyAttrs: {
    class: 'blog'
  }
})

/**
 * 現在表示しているページのフルパスを取得
 */
const path = useRoute().fullPath

/**
 * 現在表示しているページのタイトルを取得
 */
// 記事データオブジェクトを取得 投稿日降順にソート
const { data } = await useAsyncData('blog', () =>
  queryContent('/').where({ _partial: false }).sort({ postDate: -1 }).find()
)

// 記事データを抽出
const blogData = data._rawValue

// 現在表示しているページのデータを取得
const blogContents = blogData.filter((item) => {
  if (item._path.indexOf(path) !== -1) {
    return item.title
  }
})

// 現在表示しているページのタイトルを取得
const blogTitle = blogContents[0].title

/**
 * Function
 */

// 投稿日をフォーマット
function formatDate(setDate) {
  return dayjs(setDate).format('YYYY.M.D')
}

// datetime属性をフォーマット
function formatDateTime(setDate) {
  return dayjs(setDate).format('YYYY-MM-DD')
}
</script>

<template>
  <NuxtLayout>
    <article class="container mx-auto mb-40">
      <header class="mb-8 py-8">
        <div class="text-lg mb-4">Blog</div>
        <compHeader class="text-5xl">{{ blogTitle }}</compHeader>
      </header>

      <ContentDoc class="hentry" />
    </article>
    <hr />
    <aside class="container mx-auto mt-12">
      <h2 class="text-2xl mb-4">ブログ一覧</h2>
      <ul>
        <li v-for="(post, key) in data" :key="key" class="flex mb-1">
          <a :href="post._path">
            <time class="mr-2" :datetime="formatDateTime(post.postDate)">{{ formatDate(post.postDate) }}</time>
            {{ post.title }}
          </a>
        </li>
      </ul>
    </aside>
  </NuxtLayout>
</template>
