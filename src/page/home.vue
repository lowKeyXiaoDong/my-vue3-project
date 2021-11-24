<template>
  <div>
    <h1>这是首页</h1>
    <TodoList />
    <h1 @click="add">{{ count }}</h1>
    <input v-focus type="text">
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoList from '../components/TodoList.vue'

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