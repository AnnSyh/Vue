<template>
  <div id="app">
    <b-container>
      <b-row>
        <b-col class="text-center">

          <router-link to="/" tag="a" exact
          ><img alt="Vue logo" src="./assets/logo.png"
          /></router-link>

          <ul class="links">
            <li>
              <router-link to="/" tag="a" exact>Гл. страница</router-link>
            </li>
            <li>
              <router-link to="/login" tag="a" exact>Логин</router-link>
            </li>
            <li>
              <router-link to="/register" tag="a" exact
              >Регистрация
              </router-link
              >
            </li>
          </ul>
          <bread-crumb></bread-crumb>

          <TodoList/>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BreadCrumb from "@/components/BreadCrumb"
import TodoList from '@/components/ToDoList/TodoList.vue'

export default {
  name: "App",
  components: {
    BreadCrumb,
    TodoList,
  },
  computed: {
    tabs() {
      return this.$store.getters.tabs
    },
    comments() {
      return this.$store.getters.comments
    }
  }

};
</script>


