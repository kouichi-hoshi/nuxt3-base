<template>
  <NuxtLayout>
    <article class="home">
      <header class="mb-8 py-8">
        <cHeader class="text-6xl w-fit mx-auto"> Home </cHeader>
      </header>
      <section class="items container mx-auto">
        <header class="mb-8 py-8">
          <cHeadline class="items__header"> Items </cHeadline>
        </header>
        <div
          class="items__item-wrap grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4"
        >
          <repeatCard
            card-class="items__item"
            :items="items"
            :imgPath="itemsPath"
            titleClass="mt-2 text-xl"
          />
        </div>
      </section>
    </article>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
// .main {
//   .items {
//     &__item-wrap {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 1rem;
//     }
//     &__item {
//       flex: 0 1 calc((100% - 2rem) / 3);
//     }
//   }
// }
</style>

<script>
import itemsSample from "../models/itemsSample.js";
import cHeadline from "../components/cHeadline.vue";
import repeatCard from "../components/repeatCard.vue";

export default {
  setup() {
    const items = itemsSample; // Itemセクションで表示するデータ
    const itemsPath = "/images/sample/"; //Itemセクションで表示する画像のパス

    return {
      items,
      itemsPath,
    };
  },
  components: { repeatCard, cHeadline },
};
</script>
