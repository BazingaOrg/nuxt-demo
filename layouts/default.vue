<!-- 布局是页面的包装器，包含了多个页面的共同用户界面，如页眉和页脚。布局是使用 <slot /> 组件来显示页面内容的 Vue 文件。layouts/default.vue 文件将被默认使用。自定义布局可以作为页面元数据的一部分进行设置。 -->
<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
