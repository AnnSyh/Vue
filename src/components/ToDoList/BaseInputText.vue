<template>
  <div style="display: flex">
    <input type="text" class="input" v-model="value"      v-on="listeners" />
<!--    <input type="data" class="input" v-model="value.data" v-on="listeners" />-->
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      // default: () => {
      //   id: 1,
      //   text: "default-text"
      //   time: "default-time"
      // }
    },
  },
  computed: {
    listeners() {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>

