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
    img: '/images/sample/017.jpg',
    title: 'scratch プログラミング',
    text: '小学校低学年向けのscratchを使った楽しい授業です。イラストや音楽を組み合わせてかんたんなアニメや少しむずかしいゲームを作ります。',
    href: '/'
  },
  {
    img: '/images/sample/017.jpg',
    title: 'キッズ プログラミング',
    text: '小学校高学年になったらプログラミングに挑戦！Webサイトを作ったり、かんたんなアプリの作り方をレクチャーします。',
    href: '/'
  },
  {
    img: '/images/sample/017.jpg',
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
    img: '/images/sample/017.jpg',
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
    img: '/images/sample/017.jpg',
    title: 'scratch プログラミング',
    text: '小学校低学年向けのscratchを使った楽しい授業です。イラストや音楽を組み合わせてかんたんなアニメや少しむずかしいゲームを作ります。',
    href: '/'
  },
  {
    img: '/images/sample/017.jpg',
    title: 'キッズ プログラミング',
    text: '小学校高学年になったらプログラミングに挑戦！Webサイトを作ったり、かんたんなアプリの作り方をレクチャーします。',
    href: '/'
  },
  {
    img: '/images/sample/017.jpg',
    title: 'Unity 3Dプログラミング',
    text: '本格的なプログラミングで3Dゲームやメタバース世界、アバターを作成！かなり高度な技術もガリレオなら専門スタッフが対応します！',
    href: '/'
  }
]
</script>

<template>
  <NuxtLayout name="pg-school">
    <article>
      <section class="first-view widthSm container mx-auto h-screen flex flex-col justify-center">
        <useSVG size="128" class="mx-auto" href="images/common/icon.svg#icon-home" />
        <compHeader class="first-view__title animate">ガリレオ</compHeader>
        <section>
          <h3 class="text-center">アルゴリズムが動く、描く、聞こえる、思考する。</h3>
          <h4 class="text-center mb-6">プログラミングで行う創作の楽しさを伝えたい。</h4>
          <div class="hentry">
            <p>
              私たち「ガリレオ」は、子どもたちにプログラミングによる創作活動を通して理解を深めてもらい、その楽しさを存分に味わうことから始まるスクールです。
            </p>
            <p>
              キーボードに触れることからはじめる低学年コースから、
              イラストや動画やゲームを作ったりITを学ぶ小学生コース、 将来の就職に有利な即戦力を目指す中学生コースまで、
              子どもたちの可能性を大切にサポートしていきます。
            </p>
          </div>
          <compBanner class="first-view__free-lesson">
            <p>体験レッスンのお申し込みはこちらから！</p>
          </compBanner>
        </section>
      </section>

      <section class="study-courses section-space">
        <compHeader class="study-courses__title animate" data-title="Curriculum">カリキュラム</compHeader>
        <compCard :items="studyCoursesItems" class="mb-12 md:grid md:gap-x-8 md:grid-cols-3 container mx-auto" />
        <p class="text-center">
          <compButton class="mx-auto">More</compButton>
        </p>
      </section>

      <section class="trial-lesson sectionSpace">
        <compHeader class="trial-lesson__title animate" data-title="Trial Lesson">体験レッスン</compHeader>
        <div class="container mx-auto --u-maxWidthSm mb-12">
          <p class="text-center">随時体験レッスンを開催しております。</p>
          <dl class="trial-lesson__summary w-fit mx-auto card">
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
        <form class="card w-fit mx-auto mb-6" action="" method="post">
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
          <compButton class="mx-auto">More</compButton>
        </p>
      </section>

      <section class="study-courses section-space">
        <compHeader class="study-courses__title animate" data-title="Q & A">よくある質問</compHeader>
        <accordionPanel prefix="ac" :items="qaItems" class="u-maxWidthMd mx-auto mb-12" />
        <p class="text-center">
          <compButton class="mx-auto">More</compButton>
        </p>
      </section>
      <section class="study-courses section-space">
        <compHeader class="study-courses__title animate" data-title="About">ガリレオについて</compHeader>
        <div class="hentry">
          <p>
            私たち「ガリレオ」は、子どもたちにプログラミングによる創作活動を通して理解を深めてもらい、その楽しさを存分に味わうことから始まるスクールです。
          </p>
          <p>
            キーボードに触れることからはじめる低学年コースから、 イラストや動画やゲームを作ったりITを学ぶ小学生コース、
            将来の就職に有利な即戦力を目指す中学生コースまで、 子どもたちの可能性を大切にサポートしていきます。
          </p>
        </div>
      </section>
    </article>
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
    border-bottom: 3px solid g.$cDarkBlack;
    line-height: 2rem;
    margin: 0 auto 2rem auto;
    @include g.mq-md {
      margin: 1rem auto 4rem auto;
      line-height: 4rem;
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
}
</style>
