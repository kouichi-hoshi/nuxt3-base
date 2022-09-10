<script setup>
/**
 * Setting
 */
const postData = {
  title: import.meta.env.VITE_SITE_TITLE,
  subtitle: import.meta.env.VITE_SITE_SUB_TITLE
}

useHead({
  title: postData.title,
  bodyAttrs: {
    class: 'pg-school'
  }
})

definePageMeta({
  layoutTransition: true
})

onMounted(() => {
  //検知対象要素を設定
  let targets = ref(document.querySelectorAll('.animate'))
  scroll(targets.value, options)
})

/**
 * IntersectionObserver
 */
const options = {
  // threshold: [0, 0.25, 0.5, 0.75, 1]
  threshold: [0]
}

// 指定した要素の交差を検知させる
function scroll(targets, options) {
  const observer = new IntersectionObserver(doWhenIntersect, options)
  targets.forEach((target) => {
    observer.observe(target)
  })
}

// 画面にin/outした要素にclassを着脱する
// 下記のようにCSSを設定する
// opacity: 0;
// &.active {
//  @include g.fadeLift($delay: 0.3s);
// }
function doWhenIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active')
      // }
    } else {
      entry.target.classList.remove('active')
    }
  })
}

/**
// カリキュラム
 */
const studyCoursesItems = [
  {
    img: '/images/pg-page/curriculum-img-1.jpg',
    title: 'scratch プログラミング',
    text: '小学校低学年向けのscratchを使った楽しい授業です。イラストや音楽を組み合わせてかんたんなアニメや少しむずかしいゲームを作ります。',
    href: '/'
  },
  {
    img: '/images/pg-page/curriculum-img-2.jpg',
    title: 'キッズ プログラミング',
    text: '小学校高学年になったらプログラミングに挑戦！Webサイトを作ったり、かんたんなアプリの作り方をレクチャーします。',
    href: '/'
  },
  {
    img: '/images/pg-page/curriculum-img-3.jpg',
    title: 'Unity 3Dプログラミング',
    text: '本格的なプログラミングで3Dゲームやメタバース世界、アバターを作成！かなり高度な技術もガリレオなら専門スタッフが対応します！',
    href: '/'
  }
]

/**
// 体験レッスン
 */
const trialLessonItem = [
  {
    img: '/images/pg-page/curriculum-img-1.jpg',
    title: 'scratch プログラミング',
    text: '小学校低学年向けのscratchを使った楽しい授業です。イラストや音楽を組み合わせてかんたんなアニメや少しむずかしいゲームを作ります。',
    href: '/'
  }
]

/**
// よくある質問
 */
const qaItems = [
  {
    title: '幼稚園・保育園の年長です。受講はできますか？',
    content:
      '小学1年生の4月から可能となります。小学校にご入学される年の1月以降、年長の方も体験レッスンにご参加いただけますので、ぜひお越しください。'
  },
  {
    title: '質問2',
    content: '答え2'
  },
  {
    title: '質問3',
    content: '答え3'
  }
]

/**
// ガリレオについて
 */
const aboutItems = [
  {
    img: '/images/pg-page/curriculum-img-1.jpg',
    title: 'scratch プログラミング',
    text: '小学校低学年向けのscratchを使った楽しい授業です。イラストや音楽を組み合わせてかんたんなアニメや少しむずかしいゲームを作ります。',
    href: '/'
  },
  {
    img: '/images/pg-page/curriculum-img-2.jpg',
    title: 'キッズ プログラミング',
    text: '小学校高学年になったらプログラミングに挑戦！Webサイトを作ったり、かんたんなアプリの作り方をレクチャーします。',
    href: '/'
  },
  {
    img: '/images/sample/curriculum-img-3.jpg',
    title: 'Unity 3Dプログラミング',
    text: '本格的なプログラミングで3Dゲームやメタバース世界、アバターを作成！かなり高度な技術もガリレオなら専門スタッフが対応します！',
    href: '/'
  }
]
</script>

<template>
  <NuxtLayout name="pg-school">
    <article>
      <section class="first-view md:h-screen md:flex md:justify-center">
        <div class="first-view__col-center md:order-2 md:flex md:flex-col md:justify-center">
          <p class="first-view__lead-sentence flex justify-center mx-auto">
            <img
              class=""
              src="/images/pg-page/text.svg"
              alt="アルゴリズムが動く、描く、思考する。プログラミングで行う創作の楽しさを伝えたい。"
            />
            <img class="l-header__title" src="images/pg-page/telescope.svg " alt="望遠鏡のイラスト" />
          </p>
          <header>
            <h2 class="first-view__logo-mark">
              <img
                class="first-view__symbol-mark mx-auto"
                src="/images/pg-page/symbol-mark.svg"
                alt="ガリレオくんイラスト"
              />
              <img class="first-view__logo-type mx-auto" src="/images/pg-page/logo-type.svg" alt="ガリレオ" />
            </h2>
          </header>
          <p class="first-view__text mx-auto">
            「ガリレオ」は、創作活動を通して プログラミングの楽しさを 子どもたちに伝えることから 始まるスクールです。
          </p>
        </div>
        <div class="first-view__col-left md:order-1 md:flex md:flex-col md:justify-center md:items-end">
          <img class="first-view__rounded rounded-full" src="/images/pg-page/3315601_m.jpg" alt="" />
          <img class="first-view__rounded rounded-full" src="/images/pg-page/3429280_m.jpg" alt="" />
          <img class="first-view__mouse --absolute" src="/images/pg-page/mouse.svg" alt="マウスのイラスト" />
        </div>
        <div class="first-view__col-right md:order-3 md:flex md:flex-col md:justify-center md:items-start">
          <img class="first-view__rounded rounded-full" src="/images/pg-page/3506795_m.jpg" alt="" />
          <img class="first-view__rounded rounded-full" src="/images/pg-page/24542995_m.jpg" alt="" />
          <img
            class="first-view__key-board --absolute"
            src="/images/pg-page/key-board.svg"
            alt="キーボードのイラスト"
          />
        </div>
      </section>

      <section class="curriculum section-space">
        <compHeader class="curriculum__title animate" data-title="Curriculum">
          <img class="curriculum__title-icon" src="/images/pg-page/icon-document.svg" alt="" />
          カリキュラム
        </compHeader>
        <compCard :items="studyCoursesItems" class="mb-12 md:grid md:gap-x-8 md:grid-cols-3 container mx-auto" />
        <p class="text-center">
          <compButton class="mx-auto">More</compButton>
        </p>
      </section>

      <section class="trial-lesson sectionSpace md:py-12">
        <compHeader class="trial-lesson__title animate" data-title="Trial Lesson">体験レッスン</compHeader>
        <div class="container mx-auto mb-12">
          <p class="trial-lesson__text text-center mb-12">随時体験レッスンを開催しております。</p>
          <div class="md:flex u-maxWidthXl mx-auto">
            <div class="md:flex-1">
              <img class="" src="/images/pg-page/trial-lesson-img-1.jpg" alt="" />
            </div>
            <div class="md:flex-1">
              <img class="" src="/images/pg-page/trial-lesson-img-2.jpg" alt="" />
            </div>
            <div class="trial-lesson__content p-4 md:p-8 md:flex-1">
              <dl class="trial-lesson__summary">
                <dt class="trial-lesson__summary-title">概要</dt>
                <dd>
                  <dl class="trial-lesson__summary-days grid-container">
                    <dt class="left">開催日</dt>
                    <dd class="right1">◯/◯日(土) 15:00~16:00</dd>
                    <dd class="right2">◯/◯日(日) 10:00~11:00 / 15:00~16:00</dd>
                  </dl>
                  <dl class="trial-lesson__summary-contents">
                    <dt>レッスン内容</dt>
                    <dd>scratchで楽しくお絵かき♪（小学校低学年向け）</dd>
                  </dl>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <form v-if="false" class="card w-fit mx-auto mb-6" action="" method="post">
          <div class="my-2">
            <label for="name">名前</label>
            <input id="name" type="text" name="name" />
          </div>
          <div class="my-2">
            <label for="email">メールアドレス</label>
            <input id="email" type="mail" name="email" />
          </div>
          <div class="my-2">
            <label for="message">内容</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <input class="c-button__light" type="submit" value="送信する" />
        </form>

        <p class="text-center">
          <compButton class="mx-auto">お申し込みはこちらから</compButton>
        </p>
      </section>

      <section class="faq section-space">
        <compHeader class="faq__title animate" data-title="Q & A">よくある質問</compHeader>
        <accordionPanel
          prefix="ac"
          :items="qaItems"
          class="faq__accordion u-maxWidthMd mx-auto mb-12 p-12 rounded-lg"
        />
        <p class="text-center">
          <compButton class="mx-auto">More</compButton>
        </p>
      </section>
      <section class="study-courses section-space">
        <compHeader class="study-courses__title animate" data-title="About">ガリレオについて</compHeader>
        <div class="hentry">
          <p>ガリレオ・ガリレイは、「科学の父」とよばれるほどに天文学などで大きな功績を残した人物です。</p>
          <p>
            彼自身にの中にあったはてしない好奇心、学ぶことのよろこびが、偉大な発見につながったのではないでしょうか。
          </p>
          <p>
            私たち「ガリレオ」では、プログラミングによる創作活動を通して子どもたちの好奇心を育み、その楽しさにふれることで子どもたちの隠された可能性を大切にサポートするスクールです。
          </p>
        </div>
      </section>
    </article>
    <aside>
      <compBanner class="first-view__free-lesson">
        <p>体験レッスンのお申し込みはこちらから！</p>
      </compBanner>
    </aside>
  </NuxtLayout>
</template>

<style lang="scss">
@use '@splidejs/vue-splide/css';
@use '../assets/css/global' as g;

.pg-school {
  //TODO: mixin化する
  [data-title]::after {
    content: attr(data-title);
    display: block;
    width: fit-content;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: g.$mPlusRounded1c;
    // border-bottom: 3px solid g.$cDarkBlack;
    // line-height: 2rem;
    margin: 0 auto 2rem auto;
    @include g.mq-md {
      margin: 0.5rem auto 4rem auto;
      // line-height: 4rem;
    }
  }

  .sectionSpace--x-free {
    @include g.sectionSpace($pad: 2rem 0, $padSm: 4rem 0);
  }

  .trial-lesson {
    &__summary {
    }
  }

  .grid-container {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      'left right1'
      'left right2';
    .left {
      grid-area: left;
    }
    .right1 {
      grid-area: right1;
    }
    .right2 {
      grid-area: right2;
    }
  }

  .first-view {
    background: linear-gradient(#81d9fd 0%, #3cc8ff 100%);

    &__col-left {
      flex: 1 1 calc(100% / 3);
    }

    &__col-center {
      flex: 1 1 auto;
      width: max(340px, 30%);
    }

    &__col-right {
      flex: 1 1 calc(100% / 3);
    }

    &__lead-sentence {
      max-width: 430px;
    }

    &__logo-mark {
    }
    &__symbol-mark {
      max-width: 216px;
    }
    &__logo-type {
      max-width: 222px;
    }
    &__text {
      max-width: 340px;
      font-family: g.$mPlusRounded1c;
    }
    &__rounded {
      object-fit: cover;
      aspect-ratio: 1 / 1;
      max-width: 220px;
    }
    &__mouse {
      width: 80px;
    }
    &__key-board {
      width: 96px;
    }
  }

  .curriculum {
    [data-title]::after {
      color: map-get(g.$theme-pg, 'baseColor');
    }

    &__title {
      .c-header__inner {
        background: map-get(g.$theme-pg, 'baseColor-mid');
        font-size: clamp(1.6rem, 3vw, 2.5rem);
        font-family: g.$mPlusRounded1c;
        color: g.$cWhite;
        padding: 1rem 1.5rem;
        border-radius: 1rem 0 1rem 0;
      }
    }
    &__title-icon {
      display: inline-block;
      vertical-align: bottom;
    }
  }
  .trial-lesson {
    background: map-get(g.$theme-pg, 'mainColor-light') url('/images/pg-page/bg-img-it.svg') repeat;
    [data-title]::after {
      color: map-get(g.$theme-pg, 'mainColor-dark');
    }

    &__title {
      .c-header__inner {
        font-size: clamp(1.6rem, 3vw, 2.5rem);
        font-family: g.$mPlusRounded1c;
        font-weight: 500;
        // color: map-get(g.$theme-pg, 'accentColor');
      }
    }
    &__text {
      font-size: clamp(1.2rem, 1.6vw, 1.6rem);
      font-weight: 500;
      font-family: g.$mPlusRounded1c;
    }
    &__content {
      background: g.$cMidWhite;
    }
  }
  .faq {
    [data-title]::after {
      color: map-get(g.$theme-pg, 'baseColor');
    }
    &__title {
      .c-header__inner {
        font-size: clamp(1.6rem, 3vw, 2.5rem);
        font-family: g.$mPlusRounded1c;
        font-weight: 500;
        color: map-get(g.$theme-pg, 'baseColor-mid');
      }
    }
    &__accordion {
      background: map-get(g.$theme-pg, 'baseColor-light');
    }
    .accordion__title:hover,
    .accordion__title:active,
    .accordion__title.is-active {
      background-color: map-get(g.$theme-pg, 'baseColor');
    }
  }
}
</style>
