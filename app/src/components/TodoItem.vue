<template>
    <div class="todo">
    <h3 v-text="todo.title" @blur="true"></h3>
        <span class="date" v-text="todo.date"></span>
        <input type="checkbox" class="blue" :checked="todo.done" @change="toggleTodo(todo)"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Todo } from "../data/todo";

@Component({
  // TODO: use props to pass data from the home page to each individual todo
  props: ["todo"]
})
export default class TodoItem extends Vue {
  toggleTodo(todo: Todo) {
    this.$store.dispatch("dispatchCompleteTodo", todo);
  }
}
</script>

<style scoped>
h3 {
  margin: 1rem;
  align-self: left;
}
.todo {
  width: 100%;
}
/* .box {

} */
</style>
