<template>
  <div>
    <div style="display: flex;" >
      <p>{{text}}</p>
    </div>
    <div style="display: flex;" >
      <input
        type="text"
        class="input"
        v-model="text"
        v-on="listeners"
      />
      <input
        type="data"
        class="input"
        v-model="text"
        v-on="listeners" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => {
         "'default-text'"
        // time: "default-time"
      }
    },
  },
  computed: {
    listeners() {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: (event) => this.$emit("input", event.target.text),
      };
    },
  },
};
</script>

