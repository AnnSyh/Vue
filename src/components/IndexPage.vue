<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view/>
    <b-card>
      b-card
    </b-card>

     <b-button size="sm">
    {{ msg }}
  </b-button>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


