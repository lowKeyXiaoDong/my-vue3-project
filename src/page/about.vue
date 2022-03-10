<template>
  <div>
    <h1>这是关于页面</h1>
    <button @click="add">详情</button>
  </div>
</template>

<script lang="ts" setup>
import { getInfo } from '../api/index'

async function add() {
  const res = await getInfo()
  console.log('res', res);
}
</script>