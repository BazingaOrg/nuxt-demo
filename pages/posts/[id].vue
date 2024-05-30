<template>
  <div>文章{{ route.params.id }}</div>
</template>

<script setup lang="ts">
const route = useRoute();

definePageMeta({
  // 路由验证：Nuxt通过每个要验证的页面中的definePageMeta()的validate属性提供路由验证。
  // validate属性接受route作为参数。您可以返回一个布尔值来确定是否将此路由视为有效路由以渲染此页面。如果返回false，并且找不到其他匹配项，这将导致404错误。您还可以直接返回一个带有statusCode/statusMessage的对象以立即响应错误（其他匹配项将不会被检查）。
  validate: async (route) => {
    // 检查 id 是否由数字组成
    return /^\d+$/.test(route.params.id);
  }
});
</script>

<style scoped></style>
