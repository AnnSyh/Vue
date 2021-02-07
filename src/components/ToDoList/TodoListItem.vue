<template>
  <li style="display: flex; justify-content: space-between">
    <div>{{ todo.id }}&nbsp;</div>
    <div>{{ todo.text }}</div>
    <div>| {{ todo.time }}</div>
    <button @click="$emit('remove', todo.id)">X</button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>
