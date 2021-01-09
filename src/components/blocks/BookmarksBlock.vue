<template>
    <b-tabs>
      <b-tab :title="tab.title" v-for="tab in tabs" :key="tab.title">
         {{ tab.content }}
      </b-tab>
    </b-tabs>
</template>

<script>
export default {
  name: "BookmarksBlock",

  props: {
    tabs:[],
  },

};
</script>
