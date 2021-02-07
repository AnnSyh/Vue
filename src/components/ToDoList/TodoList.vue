<template>
  <div>
    <BaseInputText
      v-model="newTodoText"
      placeholder="New todo"
      @keydown.enter="addTodo"
    />
    <ul v-if="todos.length" style="padding: 0px">
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </ul>
    <p v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>
</template>

<script>
import BaseInputText from "@/components/ToDoList/BaseInputText.vue";
import TodoListItem from "@/components/ToDoList/TodoListItem.vue";

let nextTodoId = 1;

export default {
  components: {
    BaseInputText,
    TodoListItem,
  },
  data() {
    return {
      newTodoText: "",
      newTodoTime: "",
      todos: [
        {
          id: nextTodoId++,
          text: "Learn Vue",
          time: "09:00",
        },
        {
          id: nextTodoId++,
          text: "Learn about single-file components",
          time: "09:10",
        },
        {
          id: nextTodoId++,
          text: "Fall in love",
          time: "09:20",
        },
      ],
    };
  },
  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim();
      const trimmedTime = this.newTodoTime.trim();

      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText,
          time: trimmedTime,
        });
        this.newTodoText = "";
        this.newTodoTime = "00:00";
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== idToRemove;
      });
    },
  },
};
</script>
