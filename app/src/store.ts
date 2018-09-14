import Vue from 'vue'
import Vuex from 'vuex'
import { Todo } from "@/data/todo";

Vue.use(Vuex);

export const STORAGE_KEY = 'todoItemList'

export default new Vuex.Store({
    state: {
        todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    mutations: {
        commitNewTodo: (state, payload: Todo) => {
            // TODO: add a new todo
            state.todos.push(payload)
        },
        commitCompleteTodo (state, todo) {
            todo.done = !todo.done
        }
    },
    actions: {
        dispatchAddNewTodo: (context, payload: Todo) => {
            // TODO: commit payload to the store
            context.commit('commitNewTodo', payload)
        },
        dispatchAddInitialTodos: (context, payload: Array<Todo>) => {
            // TODO: commit initial todos to the store
            localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
        },
        dispatchCompleteTodo (context, payload: Todo) {
            context.commit('commitCompleteTodo', payload)
        },
    }
})
