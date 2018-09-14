<template>
    <div class="home">
        <h1>My Todos</h1>
          <div class="newtodo">
            <input placeholder="+add new" class="todoinput" v-model="title">
            <button class="btn todotype yellow" @click="addNewTodo('yellow')"></button>
          </div>
          <TodoItem
            v-for="(todo, index) in todos.filter(todo => !todo.done)"
            :todo="todo"
            :key="index+'-01'">
          </TodoItem>
        <h2>Done</h2>
          <TodoItem
            v-for="(todo, index) in todos.filter(todo => todo.done)"
            :todo="todo"
            :key="index+'-02'">
          </TodoItem>
      <!-- TODO: Loop thru every todo and display a todo item component, using props to pass data to the components -->
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Todo } from "../data/todo";
import TodoItem from "@/components/TodoItem.vue";

@Component({
  components: {
    TodoItem
  }
})
export default class Home extends Vue {
  title: string = "";
  private initialTodos: Array<Todo> = [
    {
      title: "Grocery shopping",
      date: "20/08/2018",
      color: "orange",
      done: false
    },
    {
      title: "Go to the beach",
      date: "11/08/2018",
      color: "blue",
      done: false
    },
    {
      title: "Call grandma",
      date: "01/09/2018",
      color: "green",
      done: true
    }
  ];

  created() {
    // TODO: push list of existing todos to the store
    this.$store.dispatch("dispatchAddInitialTodos", this.initialTodos);
  }

  get todos() {
    // TODO: get data from the store and display a todo item for each todo in the store
    return this.$store.state.todos;
  }

  addNewTodo(newcolor: string) {
    // TODO: add a new todo to the store
    let newdate: string = this.getDate();
    let newtodo: Todo = {
      title: this.title,
      date: newdate,
      color: newcolor,
      done: false
    };
    this.$store.dispatch("dispatchAddNewTodo", newtodo);
    this.title = '';
  }

  getDate() {
    let date = new Date();
    let dd = date.getDate();
    let day = dd.toFixed();
    let mm = date.getMonth() + 1;
    let month = mm.toFixed();
    let yyyy = date.getFullYear();
    if (dd < 10) {
      day = "0" + dd;
    }
    if (mm < 10) {
      month = "0" + mm;
    }
    let today = day + "/" + month + "/" + yyyy;
    return today;
  }
}
</script>
