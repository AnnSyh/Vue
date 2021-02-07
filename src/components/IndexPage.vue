<template>
  <form>
    <h1>Главная страница</h1>

    <div
      @submit="checkForm"
      action="/something"
      method="post"
    >

      <div v-if="errors.length">
<!--        <b>Please correct the following error(s):</b>-->
<!--        <ul>-->
<!--          <li v-for="error in errors">{{ error }}</li>-->
<!--        </ul>-->
      </div>

      <p>
        <label for="name">Name</label>
          <input type="text" name="name" id="name" v-model="name">
      </p>

      <p>
        <label for="age">Age</label>
          <input type="number" name="age" id="age" v-model="age" min="0">
      </p>

      <p>
        <label for="movie">Favorite Movie</label>
          <select name="movie" id="movie" v-model="movie">
            <option>Star Wars</option>
            <option>Vanilla Sky</option>
            <option>Atomic Blonde</option>
          </select>
      </p>

      <p>
        <input type="submit" value="Submit">
      </p>
  </div>

  </form>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      errors: [],
      name: null,
      age: null,
      movie: null
    }
  },
  methods:{
    checkForm:function(e) {
      if(this.name && this.age) return true;
      this.errors = [];
      if(!this.name) this.errors.push("Name required.");
      if(!this.age) this.errors.push("Age required.");
      e.preventDefault();
    }
  }
}

</script>


