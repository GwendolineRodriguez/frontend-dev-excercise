<template>
    <li class="todo grey">

    <h3 v-text="todo.title" class=""></h3>
      <div class="float-right absolute-pos date-pos">
        <span class="date" v-text="todo.date"></span>
        <!-- <input type="checkbox" class="checkbox" :checked="todo.done" @change="toggleTodo(todo)"/> -->
        <div class="pretty p-icon checkbox" v-bind:class="todo.color" >
          <input class="" type="checkbox" :checked="todo.done" @change="toggleTodo(todo)"/>
          <div class="state p-primary border-radius">
            <i class="icon fa fa-check"></i>
            <label></label>
          </div>
        </div>

      </div>
    </li>
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
    this.$store.dispatch("dispatchToggleTodo", todo);
  }
}
</script>

<style scoped>
h3 {
  margin: 10px;
  align-self: left;
}
.todo {
  width: 100%;
}
.date-pos {
  padding-top: 9px;
  margin-right: 4px;
}
.date {
  color: rgba(126, 126, 126, 1);
  font-size: 0.9em;
}
.checkbox {
  margin-left: 10px;
  margin-right: 2px;
  margin-top: 2px;
  border-radius: 5px;
  height: 20px;
  width: 20px;
  float: right;
}

.pretty .state label:after,
.pretty .state label:before {
  border: none;
}
.pretty.p-icon .state .icon {
  font-size: 0.6em;
  margin-left: 4px;
  margin-top: 16px;
}
.pretty input:checked ~ .state.p-primary label:after,
.pretty.p-toggle .state.p-primary label:after {
  background-color: rgba(126, 126, 126, 0) !important;
}
</style>
