<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to  Vue.js App" /> -->

    <BookmarksBlock :tabs="tabs"></BookmarksBlock>

    <h3>All Links</h3>
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
              <router-link to="/comands" tag="a" exact>Команды</router-link>
            </li>
            <li>
              <router-link to="/comands/players" tag="a" exact
              >Игроки
              </router-link
              >
            </li>
            <li>
              <router-link to="/comands/trainers" tag="a" exact
              >Тренера
              </router-link
              >
            </li>
            <li>
              <router-link to="/comands/staff" tag="a" exact
              >Сотрудники
              </router-link
              >
            </li>
            <li>
              <router-link to="/saturn/enceladus" tag="a" exact
              >Hello Enceladus Vue.js
              </router-link
              >
            </li>
            <li>
              <router-link to="/elon/SpaceX/Falcon9" tag="a" exact
              >Hello Faclon 9 Vue.js
              </router-link
              >
            </li>
          </ul>
          <!-- <router-view /> -->
          <bread-crumb></bread-crumb>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import BreadCrumb from "@/components/BreadCrumb";
import BookmarksBlock from "@/components/blocks/BookmarksBlock";

export default {
  name: "App",
  components: {
    // HelloWorld,
    BreadCrumb,
    BookmarksBlock,
  },
  computed: {
    tabs() {
      return this.$store.getters.tabs
    }
  }

};
</script>


