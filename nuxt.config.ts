// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // 外部样式表：你可以通过在 nuxt.config 文件的 head 部分添加一个 link 元素来在应用程序中包含外部样式表。你可以使用不同的方法来实现这个目标。注意，本地样式表也可以以这种方式包含。
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        }
      ]
    }
  },
  // 使用 Nuxt 配置中的 css 属性。 将你的样式表放在 assets/ 目录 是最自然的位置。然后你可以引用它的路径，Nuxt 将会将它包含在应用程序的所有页面中。
  css: ["~/assets/css/main.css"],
  vite: {
    // 全局样式导入：要在你的Nuxt组件样式中全局插入语句，你可以在 nuxt.config 文件中使用 Vite 选项。
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "assets/_colors.scss" as *;'
        },
        sass: {
          additionalData: '@use "assets/_colors.sass" as *\n'
        }
      }
    }
  }
});
