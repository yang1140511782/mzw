<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "./style/base.css";

#app {
  max-width: 640px;
}
</style>
