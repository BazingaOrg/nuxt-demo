<!-- 页面代表了每个特定路由模式的视图。pages/ 目录中的每个文件都表示一个不同的路由，显示其内容。 -->
<!-- 要使用页面，创建 pages/index.vue 文件并将 <NuxtPage /> 组件添加到 app.vue（或者删除 app.vue 以使用默认入口）。现在，你可以通过在 pages/ 目录中添加新文件来创建更多页面及其对应的路由。 -->
<template>
  <div>
    <h1>欢迎来到首页👋</h1>
    <AppAlert> 这是一个自动导入的组件 </AppAlert>
    <nav>
      <ul>
        <li><NuxtLink to="/about">关于</NuxtLink></li>
        <li><NuxtLink to="/posts/1">文章1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">文章2</NuxtLink></li>
        <li><NuxtLink to="/dashboard">仪表盘</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>
