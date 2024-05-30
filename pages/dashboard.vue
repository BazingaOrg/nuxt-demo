<template>
  <div>
    <h1>欢迎来到您的仪表盘</h1>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth"
});
</script>

<style scoped></style>
