<template>
  <h1>这是首页</h1>
  <TodoList />
  <h1 @click="add">{{ count }}</h1>
  <Count />
</template>

<script setup>
import { ref } from 'vue'
import TodoList from '../components/TodoList.vue'
import Count from '../components/Count.vue'

let count = ref(0)
let color = ref('red')

function add() {
  count.value++
  color.value = Math.random() > 0.5 ? 'blue' : 'red'
}
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>