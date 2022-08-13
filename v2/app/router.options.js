//TODO 20220813 開発中? 仕様変更に注意　https://github.com/nuxt/framework/issues/1707
export default {
  scrollBehavior() {
    return { left: 0, top: 0 }
    // return { x: 0, y: 0 }
  }
}
