// サイトのタイトルを取得
const siteTitle = import.meta.env.VITE_SITE_TITLE

export default [
  {
    label: 'cafe',
    href: '/index-cafe',
    class: 'cafe'
  },
  {
    label: 'Blog',
    href: '/blog',
    class: 'menu-blog'
  },
  {
    label: 'home',
    href: '/',
    class: 'menu-home'
    // svgIcon: 'home-icon.svg'
  }
]
