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
    title: 'マインクラフトで学べるコースはありますか？',
    content: 'ございます。マインクラフトでプログラミングを組み、自動で建物を建築することをマスターするコースです。'
  },
  {
    title: '中学生です。受講はできますか？',
    content: '中学生もご受講いただけます。まずは体験レッスンにお越しください。'
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
      <section class="first-view pb-6 md:h-screen flex flex-wrap md:flex-nowrap justify-center md:gap-x-8">
        <div class="first-view__col-center order-1 md:order-2 md:flex md:flex-col md:justify-center">
          <p
            class="first-view__lead-sentence py-6 flex flex-col lg:flex-row items-center lg:justify-center lg:items-center mx-auto"
          >
            <img
              class="first-view__title order-2"
              src="/images/pg-page/text.svg"
              alt="アルゴリズムが動く、描く、思考する。プログラミングで行う創作の楽しさを伝えたい。"
            />
            <img
              class="first-view__telescope mb-6 lg:mb-0 order-1 lg:order-2"
              src="/images/pg-page/telescope.svg "
              alt="望遠鏡のイラスト"
            />
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
          <p class="first-view__text mx-auto p-6 text-center">
            「ガリレオ」は、創作活動を通して<br />プログラミングの楽しさを<br />子どもたちに伝えることから<br />
            始まるスクールです。
          </p>
          <img
            class="first-view__it-06 hidden md:block"
            src="/images/pg-page/header__it-06.svg"
            alt="キーボードのイラスト"
          />
        </div>
        <div class="first-view__col-left order-2 md:order-1 flex gap-2 md:flex-col md:justify-center md:items-end">
          <img
            class="first-view__photo rounded-full md:-translate-x-36 md:translate-y-24"
            src="/images/pg-page/3315601_m.jpg"
            alt="こどもの写真"
          />
          <img
            class="first-view__photo rounded-full md:translate-y-12 z-10"
            src="/images/pg-page/3429280_m.jpg"
            alt="こどもの写真"
          />
          <img class="first-view__mouse hidden md:block" src="/images/pg-page/mouse.svg" alt="マウスのイラスト" />
          <img
            class="first-view__it-01 hidden md:block"
            src="/images/pg-page/header__it-01.svg"
            alt="MacBookのイラスト"
          />
          <img class="first-view__it-03 hidden md:block" src="/images/pg-page/header__it-03.svg" alt="PCのイラスト" />
        </div>
        <div
          class="first-view__col-right order-3 md:order-3 flex gap-2 ml-2 md:ml-0 md:flex-col md:justify-center md:items-start"
        >
          <img
            class="md:translate-x-24 first-view__photo rounded-full md:translate-x-36 md:translate-y-24"
            src="/images/pg-page/3506795_m.jpg"
            alt="こどもの写真"
          />
          <img
            class="first-view__photo rounded-full md:translate-y-12"
            src="/images/pg-page/24542995_m.jpg"
            alt="こどもの写真"
          />
          <img
            class="first-view__key-board hidden md:block"
            src="/images/pg-page/key-board.svg"
            alt="キーボードのイラスト"
          />
          <img class="first-view__it-05 hidden md:block" src="/images/pg-page/header__it-05.svg" alt="iMacのイラスト" />
        </div>
      </section>

      <section class="curriculum section-space">
        <compHeader class="curriculum__title w-fit mx-auto" data-title="Curriculum">
          <img class="curriculum__title-icon" src="/images/pg-page/icon-document.svg" alt="書類のアイコン画像" />
          カリキュラム
        </compHeader>
        <compCard
          :items="studyCoursesItems"
          class="curriculum__item mb-12 md:grid md:gap-x-8 md:grid-cols-3 container mx-auto"
        />
        <p class="text-center">
          <compButton class="c-button--blue mx-auto">詳しく</compButton>
        </p>
      </section>

      <section class="trial-lesson section-space md:py-12">
        <compHeader id="trial-lesson-head" class="trial-lesson__title w-fit mx-auto" data-title="Trial Lesson"
          >体験レッスン</compHeader
        >
        <section class="container mx-auto mb-12">
          <h3 class="trial-lesson__text text-center mb-12">随時体験レッスンを開催しております。</h3>
          <div class="trial-lesson__items">
            <p class="trial-lesson__photo">
              <img class="trial-lesson__img-1" src="/images/pg-page/trial-lesson-img-1.jpg" alt="" />
            </p>
            <p class="trial-lesson__photo">
              <img class="trial-lesson__img-2" src="/images/pg-page/trial-lesson-img-2.jpg" alt="" />
            </p>
            <div class="trial-lesson__content py-8 px-8 md:py-4 lg:flex lg:flex-col lg:justify-center">
              <section class="trial-lesson__summary text-center">
                <h4 class="trial-lesson__summary-title mb-4">概要</h4>
                <dl class="trial-lesson__summary-days mb-4">
                  <dt class="trial-lesson__summary-headline">開催日</dt>
                  <dd>10/8日(土) 15:00~16:00</dd>
                  <dd>10/16日(日) 10:00~11:00</dd>
                </dl>
                <dl class="trial-lesson__summary-contents">
                  <dt class="trial-lesson__summary-headline">レッスン内容</dt>
                  <dd>scratchで楽しくお絵かき♪</dd>
                </dl>
              </section>
            </div>
          </div>
        </section>

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
          <compButton class="c-button--dark-gray mx-auto">お申し込み</compButton>
        </p>
      </section>

      <section class="faq section-space">
        <compHeader class="faq__title w-fit mx-auto" data-title="Q & A">よくある質問</compHeader>
        <accordionPanel prefix="ac" :items="qaItems" class="faq__accordion u-maxWidthMd mx-auto mb-12 p-6 rounded-lg" />
        <p class="text-center">
          <compButton class="c-button--blue mx-auto">他の質問を見る</compButton>
        </p>
      </section>

      <section class="about section-space">
        <div class="mb-12 lg:flex lg:gap-8 lg:flex-row-reverse container mx-auto u-maxWidthXl">
          <div class="lg:w-1/2 about__text lg:flex lg:flex-col lg:items-center lg:justify-center">
            <compHeader class="about__title" data-title="About">ガリレオについて</compHeader>
            <div class="hentry lg:text-center md:px-12">
              <h3 class="about__sub-title text-center mb-12 text-2xl">
                はてない好奇心が、 <br />ほんとうの成長をうながす。
              </h3>
              <p>ガリレオ・ガリレイは、「科学の父」とよばれるほどに天文学などで大きな功績を残した人物です。</p>
              <p>
                彼自身にの中にあったはてしない好奇心、学ぶことのよろこびが、偉大な発見につながったのではないでしょうか。
              </p>
              <p>
                私たち「ガリレオ」では、プログラミングによる創作活動を通して子どもたちの好奇心を育み、その楽しさにふれることで子どもたちの隠された可能性を大切にサポートするスクールです。
              </p>
            </div>
          </div>
          <div class="lg:w-1/2">
            <div class="about__img md:grid">
              <p class="img-01">
                <img src="/images/pg-page/24456820_m.jpg" alt="スタッフの写真" />
              </p>
              <p class="img-02">
                <img class="aspect-square object-cover" src="/images/pg-page/24474896_m.jpg" alt="スタッフの写真" />
              </p>
              <p class="img-03">
                <img class="aspect-square object-cover" src="/images/pg-page/24511324_m.jpg" alt="スタッフの写真" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>

    <aside class="text-center my-12">
      <compButton remove-default-class class="c-button--yellow mx-auto">
        <p class="md:mr-6">お問い合わせ</p>
        <UseSVG size="24" viewBox="0 0 24 19" href="/images/pg-page/icon-mail.svg#icon-mail" />
      </compButton>
    </aside>
  </NuxtLayout>
</template>

<style lang="scss">
@use '../assets/css/global' as g;

.pg-school {
  .l-header {
    margin-bottom: 0;
  }
  .section-space {
    @include g.sectionSpace($pad: 4rem 1rem 2rem 1rem, $padSm: 12rem 0);
  }

  //TODO: mixin化する
  [data-title]::after {
    content: attr(data-title);
    display: block;
    width: fit-content;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: g.$mPlusRounded1c;
    margin: 0 auto 2rem auto;
    @include g.mq-md {
      margin: 0.5rem auto 4rem auto;
    }
  }

  .c-button--blue {
    padding: 0.7rem 2rem;
    background: map-get(g.$theme-pg, 'baseColor-mid');
    font-family: g.$mPlusRounded1c;
    font-weight: 500;
  }
  .c-button--dark-gray {
    padding: 0.7rem 2rem;
    background: map-get(g.$theme-pg, 'accentColor');
    font-family: g.$mPlusRounded1c;
    font-weight: 500;
  }
  .c-button--yellow {
    @include g.button(
      $display: flex,
      $padding: 0.7rem 2rem,
      $bg: map-get(g.$theme-pg, 'mainColor'),
      $color: map-get(g.$theme-pg, 'accentColor')
    );
    align-items: center;
    gap: 0.5rem;
    font-family: g.$mPlusRounded1c;
    font-weight: 500;
  }

  .sectionSpace--x-free {
    @include g.sectionSpace($pad: 2rem 0, $padSm: 4rem 0);
  }

  .first-view {
    overflow: hidden;
    position: relative;
    background: linear-gradient(#81d9fd 0%, #3cc8ff 100%);
    background: url('/images/pg-page/bg-img-it-light.svg') repeat, linear-gradient(#81d9fd 0%, #3cc8ff 100%);
    background-size: 70%;

    @include g.mq-md {
      &__col-left {
        flex: 1 1 calc(100% / 3);
      }
    }
    &__col-center {
      flex: 1 1 100%;
      @include g.mq-md {
        flex: 1 1 auto;
      }
    }
    &__col-right {
      @include g.mq-md {
        flex: 1 1 calc(100% / 3);
      }
    }
    &__telescope {
      width: 60px;
    }
    &__symbol-mark {
      max-width: 216px;
    }
    &__logo-type {
      max-width: 222px;
    }
    &__text {
      font-family: g.$mPlusRounded1c;
      font-weight: 500;
    }
    &__photo {
      object-fit: cover;
      aspect-ratio: 1 / 1;
      width: 22vw;
      @include g.mq-md {
        max-width: 220px;
      }
    }
    &__mouse {
      width: 80px;
      transform: rotate(-25deg);
    }
    &__key-board {
      width: 96px;
      z-index: 10;
      transform: rotate(25deg);
    }
    &__it-01 {
      width: 80px;
      position: absolute;
      transform-origin: center;
      transform: translate(-270px, 140px);
    }
    &__it-03 {
      width: 80px;
      position: absolute;
      transform-origin: center;
      transform: translate(-180px, 260px);
    }
    &__it-05 {
      width: 100px;
      position: absolute;
      transform-origin: center;
      transform: translate(210px, 270px);
    }
    &__it-06 {
      width: 80px;
      margin: 0 auto;
    }
  }

  .curriculum {
    [data-title]::after {
      color: map-get(g.$theme-pg, 'baseColor');
    }

    &__title {
      .c-header__inner {
        background: map-get(g.$theme-pg, 'baseColor-mid');
        font-size: clamp(30px, 4.2vw, 2.4rem);
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
    &__item {
      .c-card__item {
        margin-bottom: 1.5rem;
      }
      .c-card__title {
        text-align: center;
        font-size: 1.4rem;
        font-size: clamp(1.2rem, 1.5vw, 1.8rem);
        font-size: clamp(1.25rem, 3.2vw, 1.4rem);
      }
      .c-card__img {
        border-radius: 6px;
        margin-bottom: 0.5rem;
      }
    }
  }

  .trial-lesson {
    background: map-get(g.$theme-pg, 'baseColor-light') url('/images/pg-page/bg-img-it.svg') repeat;
    [data-title]::after {
      color: map-get(g.$theme-pg, 'baseColor');
    }
    &__title {
      .c-header__inner {
        font-size: clamp(30px, 4.2vw, 2.4rem);
        font-family: g.$mPlusRounded1c;
        font-weight: 500;
        color: map-get(g.$theme-pg, 'baseColor-mid');
      }
    }

    &__text {
      font-size: clamp(18px, 4.2vw, 1.6rem);
      font-weight: 500;
      font-family: g.$mPlusRounded1c;
    }
    &__items {
      @include g.mq-sm {
        display: flex;
        flex-wrap: wrap;
      }
    }
    &__photo {
      @include g.mq-sm {
        flex: 1 1 50%;
      }
      @include g.mq-lg {
        flex: 1 1 calc(100% / 3);
      }
    }
    &__img-1 {
      border-radius: 16px 16px 0 0;
      @include g.mq-sm {
        border-radius: 16px 0 0 0;
      }
      @include g.mq-lg {
        border-radius: 16px 0 0 16px;
      }
    }
    &__img-2 {
      @include g.mq-sm {
        border-radius: 0 16px 0 0;
      }
      @include g.mq-lg {
        border-radius: unset;
      }
    }
    &__content {
      background: g.$cMidWhite;
      @include g.mq-sm {
        flex: 1 1 100%;
        border-radius: 0 0 16px 16px;
      }
      @include g.mq-lg {
        flex: 1 1 calc(100% / 3);
        border-radius: 0 16px 16px 0;
      }
    }
    &__summary-title {
      font-family: g.$mPlusRounded1c;
      font-weight: 500;
      font-size: clamp(1.25rem, 3.2vw, 1.5rem);
      line-height: 1.8;
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    &__summary-title::before,
    &__summary-title::after {
      content: '';
      display: block;
      border-top: 2px solid map-get(g.$theme-pg, 'accentColor');
      flex: 1 1 auto;
    }

    &__summary-headline {
      background: map-get(g.$theme-pg, 'accentColor');
      color: g.$cWhite;
      padding: 2px 12px;
      border-radius: 6px;
      width: fit-content;
      margin: 4px auto;
      @include g.mq-xl {
        padding: 6px 12px;
      }
    }
  }

  .faq {
    [data-title]::after {
      color: map-get(g.$theme-pg, 'baseColor');
    }
    &.section-space {
      @include g.mq-md {
        padding: 8rem 0;
      }
      @include g.mq-lg {
        padding: 8rem 0;
      }
      @include g.mq-xl {
        padding: 8rem 0;
      }
    }
    &__title {
      .c-header__inner {
        font-size: clamp(30px, 4.2vw, 2.4rem);
        font-family: g.$mPlusRounded1c;
        font-weight: 500;
        color: map-get(g.$theme-pg, 'baseColor-mid');
      }
    }
    .accordion {
      background: map-get(g.$theme-pg, 'baseColor-light');
    }
    .accordion__container + .accordion__container {
      border-top: 1px solid map-get(g.$theme-pg, 'baseColor');
    }
    .accordion__title:hover,
    .accordion__title:active,
    .accordion__title.is-active {
      background-color: map-get(g.$theme-pg, 'baseColor');
    }
  }

  .about {
    background: url('/images/pg-page/bg-circle.svg') repeat;
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
    &__img {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr auto;
      gap: 1rem;
      grid-auto-flow: row;
      grid-template-areas:
        'img-01 img-01'
        'img-02 img-03';
      @include g.mq-md {
        gap: 2rem;
      }
      .img-01 {
        grid-area: img-01;
      }
      .img-02 {
        grid-area: img-02;
      }
      .img-03 {
        grid-area: img-03;
      }
    }
  }
}
</style>
