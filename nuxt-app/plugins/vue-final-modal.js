import { defineNuxtPlugin } from '#app'
import { vfmPlugin } from 'vue-final-modal'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    vfmPlugin({
      key: '$vfm',
      componentName: 'VueFinalModal',
      dynamicContainerName: 'ModalsContainer'
    })
  )
})
